import React, { useState, useMemo, useEffect } from 'react';
import { CATCHMENTS_DATA, CommunityCatchment } from '../data/catchments';
import { School, District, HousingPriceInfo } from '../types/school';
import { SCHOOLS_DATA, DISTRICTS_LIST } from '../data/schools';
import { 
  Search, 
  MapPin, 
  Building2, 
  GraduationCap, 
  Scale, 
  Calculator, 
  ChevronRight, 
  AlertTriangle,
  Compass,
  Loader2,
  ExternalLink,
  Globe,
  ShieldCheck,
  Sparkles,
  Navigation,
  Layers,
  X,
  Coins,
  TrendingUp,
  ArrowUpDown,
  Phone,
  FileText,
  Check,
  Copy
} from 'lucide-react';
import { DISTRICT_OFFICIAL_PORTALS, DistrictPortalInfo } from '../data/officialPortals';
import { MiddleSchoolProfile } from '../data/middleSchools';
import { MiddleSchoolBadges } from './MiddleSchoolBadge';
import { CatchmentTieringTable } from './CatchmentTieringTable';
import { OversubscribedFallbackCard } from './OversubscribedFallbackCard';
import { 
  searchShanghaiResidentialPOIs, 
  searchNearbySchoolsFromAMap,
  getDistanceMeters,
  getAmapMarkerUrl,
  getAmapNavigationUrl,
  SearchedPOIItem 
} from '../services/amapService';

interface CatchmentLookupProps {
  onSelectSchool: (school: School) => void;
  onNavigateToSimulator: (school: School, community?: CommunityCatchment | string) => void;
  onToggleCompare: (school: School) => void;
  comparedSchools: School[];
  onNavigateToMap?: (community: CommunityCatchment) => void;
  onSelectMiddleSchool?: (school: MiddleSchoolProfile) => void;
}


// Reusable Housing Price Badge for Shanghai communities
export const CommunityPriceBadge: React.FC<{ priceInfo?: HousingPriceInfo }> = ({ priceInfo }) => {
  if (!priceInfo) return null;
  const isHighEnd = priceInfo.averagePrice >= 110000;
  const isAffordable = priceInfo.averagePrice < 50000;

  return (
    <div className="p-3 bg-gradient-to-br from-amber-50/90 via-orange-50/40 to-amber-50/70 rounded-xl border border-amber-200/80 shadow-2xs space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 text-amber-950 font-bold text-xs">
          <Coins className="w-3.5 h-3.5 text-amber-600 shrink-0" />
          <span>二手房参考均价</span>
          <span className="text-[10px] font-semibold text-amber-800 bg-amber-100/80 px-1.5 py-0.2 rounded border border-amber-200">
            {priceInfo.priceUpdateDate}
          </span>
        </div>
        <span className="text-[10px] text-slate-500 font-medium flex items-center gap-1">
          <TrendingUp className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
          {priceInfo.priceTrendDesc || '行情企稳'}
        </span>
      </div>

      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-black text-amber-900 tracking-tight">
              {(priceInfo.averagePrice / 10000).toFixed(1)}
            </span>
            <span className="text-xs font-bold text-amber-800">万/㎡</span>
            <span className="text-[11px] text-slate-500 font-normal ml-1">
              ({priceInfo.priceRange})
            </span>
          </div>
          <div className="text-[11px] text-slate-600 mt-0.5">
            主力套总价：<strong className="text-slate-800 font-bold">{priceInfo.totalPriceRange}</strong>
          </div>
        </div>

        <div className="text-right space-y-1">
          <span className="inline-block text-[10px] font-bold px-2 py-0.5 rounded-full bg-white text-slate-700 border border-amber-200 shadow-2xs">
            {priceInfo.propertyType} {priceInfo.buildYear ? `· ${priceInfo.buildYear}` : ''}
          </span>
          <div>
            <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-md border ${
              isHighEnd 
                ? 'bg-purple-50 text-purple-800 border-purple-200' 
                : isAffordable 
                  ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                  : 'bg-amber-100 text-amber-900 border-amber-300'
            }`}>
              {priceInfo.premiumTag}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Popular compounds across key Shanghai districts for quick one-click lookup
const POPULAR_COMPOUNDS = [
  { name: '中远两湾城', district: '普陀区' },
  { name: '上海康城', district: '闵行区' },
  { name: '仁恒滨江园', district: '浦东新区' },
  { name: '古北香梅花园', district: '浦东新区' },
  { name: '文定天下', district: '徐汇区' },
  { name: '春申景城', district: '闵行区' },
  { name: '世茂滨江花园', district: '浦东新区' },
  { name: '大华清水湾', district: '普陀区' },
  { name: '保利西子湾', district: '松江区' },
  { name: '静安四季苑', district: '静安区' },
];

export const CatchmentLookup: React.FC<CatchmentLookupProps> = ({
  onSelectSchool,
  onNavigateToSimulator,
  onToggleCompare,
  comparedSchools,
  onNavigateToMap,
  onSelectMiddleSchool
}) => {
  const [query, setQuery] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('全部区域');
  const [sourceTab, setSourceTab] = useState<'all' | 'official' | 'amap'>('all');
  const [priceFilter, setPriceFilter] = useState<'all' | 'under50k' | '50kTo80k' | '80kTo110k' | 'above110k'>('all');
  const [sortBy, setSortBy] = useState<'default' | 'priceAsc' | 'priceDesc' | 'distance'>('default');
  const [selectedGazetteDistrict, setSelectedGazetteDistrict] = useState<DistrictPortalInfo | null>(null);
  const [expandedTieringCommunityId, setExpandedTieringCommunityId] = useState<string | null>(null);


  // Filter local official catchments
  const filteredCatchments = useMemo(() => {
    return CATCHMENTS_DATA.filter((item) => {
      if (selectedDistrict !== '全部区域' && item.district !== selectedDistrict) {
        return false;
      }
      if (query.trim()) {
        const q = query.toLowerCase().trim();
        const matchName = item.communityName.toLowerCase().includes(q);
        const matchAlias = item.aliases.some(a => a.toLowerCase().includes(q));
        const matchSchool = item.schoolName.toLowerCase().includes(q);
        const matchMiddle = item.matchedMiddleSchool.toLowerCase().includes(q);
        const matchStreet = item.streetAddressRange.toLowerCase().includes(q);
        const matchCommittee = item.neighborhoodCommittee.toLowerCase().includes(q);

        if (!matchName && !matchAlias && !matchSchool && !matchMiddle && !matchStreet && !matchCommittee) {
          return false;
        }
      }
      return true;
    });
  }, [query, selectedDistrict]);

  // Real-time AMap POI search results for any compound in Shanghai
  const [amapResults, setAmapResults] = useState<SearchedPOIItem[]>([]);
  const [isSearchingAmap, setIsSearchingAmap] = useState<boolean>(false);

  useEffect(() => {
    if (!query.trim()) {
      setAmapResults([]);
      setIsSearchingAmap(false);
      return;
    }

    const timer = setTimeout(async () => {
      setIsSearchingAmap(true);
      try {
        const pois = await searchShanghaiResidentialPOIs(query.trim());
        let realPois = pois.filter(p => p.source === 'amap_poi');

        // Filter by selected district if not '全部区域'
        if (selectedDistrict !== '全部区域') {
          realPois = realPois.filter(p => p.district === selectedDistrict);
        }

        // Asynchronously enrich top results with actual AMap neighborhood primary schools
        const enriched = await Promise.all(
          realPois.slice(0, 10).map(async (poi) => {
            if (poi.location) {
              try {
                const nearby = await searchNearbySchoolsFromAMap(poi.location, 2000);
                if (nearby.closestPrimary) {
                  const dist = nearby.closestPrimary.location ? getDistanceMeters(
                    poi.location.lat, poi.location.lng,
                    nearby.closestPrimary.location.lat, nearby.closestPrimary.location.lng
                  ) : poi.distanceToPrimary;
                  const walkMin = Math.max(1, Math.round((dist || 300) / 75));
                  const navUrl = nearby.closestPrimary.location ? getAmapNavigationUrl(
                    { ...poi.location, name: poi.name },
                    { ...nearby.closestPrimary.location, name: nearby.closestPrimary.name }
                  ) : poi.amapNavigationUrl;

                  return {
                    ...poi,
                    closestPrimary: nearby.closestPrimary,
                    distanceToPrimary: dist,
                    walkingMinutesToPrimary: walkMin,
                    nearbyPrimaries: nearby.primaries,
                    amapNavigationUrl: navUrl
                  };
                }
              } catch {}
            }
            return poi;
          })
        );
        setAmapResults(enriched);
      } catch {
        setAmapResults([]);
      } finally {
        setIsSearchingAmap(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [query, selectedDistrict]);

  const handleOpenSchoolDetail = (schoolId: string) => {
    const school = SCHOOLS_DATA.find(s => s.id === schoolId);
    if (school) onSelectSchool(school);
  };

  const handleSimulateSchool = (catchment: CommunityCatchment) => {
    const school = SCHOOLS_DATA.find(s => s.id === catchment.matchedSchoolId);
    if (!school) return;
    onNavigateToSimulator(school, catchment);
  };

  const handleQuickChipClick = (item: typeof POPULAR_COMPOUNDS[0]) => {
    setQuery(item.name);
    setSelectedDistrict(item.district);
  };

  // Filtered & Sorted Official Catchments
  const processedCatchments = useMemo(() => {
    let list = filteredCatchments.filter((item) => {
      const p = item.priceInfo?.averagePrice || 0;
      if (priceFilter === 'under50k') return p < 50000;
      if (priceFilter === '50kTo80k') return p >= 50000 && p < 80000;
      if (priceFilter === '80kTo110k') return p >= 80000 && p < 110000;
      if (priceFilter === 'above110k') return p >= 110000;
      return true;
    });

    if (sortBy === 'priceAsc') {
      list = [...list].sort((a, b) => (a.priceInfo?.averagePrice || 0) - (b.priceInfo?.averagePrice || 0));
    } else if (sortBy === 'priceDesc') {
      list = [...list].sort((a, b) => (b.priceInfo?.averagePrice || 0) - (a.priceInfo?.averagePrice || 0));
    }
    return list;
  }, [filteredCatchments, priceFilter, sortBy]);

  // Filtered & Sorted AMap POI Results
  const processedAmapResults = useMemo(() => {
    let list = amapResults.filter((item) => {
      const p = item.priceInfo?.averagePrice || 0;
      if (priceFilter === 'under50k') return p < 50000;
      if (priceFilter === '50kTo80k') return p >= 50000 && p < 80000;
      if (priceFilter === '80kTo110k') return p >= 80000 && p < 110000;
      if (priceFilter === 'above110k') return p >= 110000;
      return true;
    });

    if (sortBy === 'priceAsc') {
      list = [...list].sort((a, b) => (a.priceInfo?.averagePrice || 0) - (b.priceInfo?.averagePrice || 0));
    } else if (sortBy === 'priceDesc') {
      list = [...list].sort((a, b) => (b.priceInfo?.averagePrice || 0) - (a.priceInfo?.averagePrice || 0));
    } else if (sortBy === 'distance') {
      list = [...list].sort((a, b) => (a.distanceToPrimary || 99999) - (b.distanceToPrimary || 99999));
    }
    return list;
  }, [amapResults, priceFilter, sortBy]);

  const totalResultsCount = processedCatchments.length + processedAmapResults.length;

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-teal-700 via-blue-700 to-indigo-800 rounded-3xl p-6 sm:p-8 text-white shadow-lg space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-teal-100 border border-white/20">
            <MapPin className="w-3.5 h-3.5 text-teal-300" />
            居委划片 · 精确到小区与门牌号段
          </div>
          <div className="inline-flex items-center gap-1.5 bg-emerald-500/30 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-emerald-100 border border-emerald-400/30">
            <Navigation className="w-3.5 h-3.5 text-emerald-300" />
            高德地图实景坐标 & 步行路线直连
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
          上海幼小初招生资料核对系统
        </h2>
        <p className="text-xs sm:text-sm text-blue-100 max-w-3xl leading-relaxed">
          招生关系以当年区教育局原文为准；历史资料单独标记年份与核验状态。高德只用于补充小区 POI、坐标、距离和导航，附近学校不等于对口学校。
        </p>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 shadow-sm space-y-3.5">
        
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="输入上海任意小区名、路名、居委名（如：中远两湾城、上海康城、仁恒滨江园、文定路、春申景城）..."
            className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all font-medium"
          />
          {query && (
            <button
              onClick={() => {
                setQuery('');
                setAmapResults([]);
              }}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Popular Compound Quick Chips */}
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pt-0.5">
          <span className="text-[11px] font-semibold text-slate-400 whitespace-nowrap flex items-center gap-1 shrink-0">
            <Sparkles className="w-3 h-3 text-amber-500" />
            热门楼盘速查:
          </span>
          {POPULAR_COMPOUNDS.map((item) => (
            <button
              key={item.name}
              onClick={() => handleQuickChipClick(item)}
              className={`px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors border ${
                query === item.name
                  ? 'bg-teal-700 text-white border-teal-700 font-bold shadow-xs'
                  : 'bg-slate-50 hover:bg-teal-50 hover:text-teal-800 text-slate-600 border-slate-200/70'
              }`}
            >
              {item.name} <span className="text-[10px] opacity-70">({item.district.replace('区', '').replace('新区', '')})</span>
            </button>
          ))}
        </div>

        {/* District Quick Switch */}
        <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pt-1 border-t border-slate-100">
          {DISTRICTS_LIST.map((dist) => (
            <button
              key={dist}
              onClick={() => setSelectedDistrict(dist)}
              className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                selectedDistrict === dist
                  ? 'bg-teal-700 text-white shadow-sm font-semibold'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {dist}
            </button>
          ))}
        </div>

        {/* Housing Price Filter & Sort Controls */}
        <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 text-xs">
          <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-0.5">
            <span className="text-[11px] font-bold text-amber-800 flex items-center gap-1 shrink-0 bg-amber-50 px-2 py-0.5 rounded border border-amber-200/80">
              <Coins className="w-3.5 h-3.5 text-amber-600" />
              房价预算:
            </span>
            {[
              { id: 'all', label: '全部预算' },
              { id: 'under50k', label: '<5万/㎡ (郊区刚需)' },
              { id: '50kTo80k', label: '5-8万/㎡ (市区改善)' },
              { id: '80kTo110k', label: '8-11万/㎡ (名校中坚)' },
              { id: 'above110k', label: '>11万/㎡ (核心名校/豪宅)' },
            ].map(p => (
              <button
                key={p.id}
                onClick={() => setPriceFilter(p.id as any)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-medium whitespace-nowrap transition-all border ${
                  priceFilter === p.id
                    ? 'bg-amber-600 text-white border-amber-600 font-bold shadow-xs'
                    : 'bg-white hover:bg-amber-50 text-slate-600 border-slate-200'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-1.5 text-slate-600">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-[11px] font-medium">排序:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white border border-slate-200 text-slate-800 text-xs font-semibold rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-amber-500 shadow-2xs cursor-pointer"
            >
              <option value="default">默认推荐</option>
              <option value="priceAsc">均价从低到高 ↗</option>
              <option value="priceDesc">均价从高到低 ↘</option>
              <option value="distance">步行至校最近</option>
            </select>
          </div>
        </div>
      </div>

      {/* Source Tab Switcher & Search Result Statistics */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 px-1">
        
        {/* Source Switch Tabs */}
        <div className="flex items-center gap-1.5 bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs">
          <button
            onClick={() => setSourceTab('all')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
              sourceTab === 'all'
                ? 'bg-white text-slate-900 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            全部小区 ({totalResultsCount})
          </button>
          <button
            onClick={() => setSourceTab('official')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1 ${
              sourceTab === 'official'
                ? 'bg-white text-teal-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>🏛️ 划片资料</span>
            <span className="text-[10px] bg-teal-100 text-teal-800 px-1.5 py-0.2 rounded-full">
              {processedCatchments.length}
            </span>
          </button>
          <button
            onClick={() => setSourceTab('amap')}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all flex items-center gap-1 ${
              sourceTab === 'amap'
                ? 'bg-white text-emerald-700 shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>🗺️ 高德全量实景收录</span>
            <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.2 rounded-full">
              {processedAmapResults.length}
            </span>
          </button>
        </div>

        {/* Dynamic loading indicator */}
        <div className="text-xs text-slate-500 flex items-center gap-2">
          {isSearchingAmap ? (
            <span className="text-blue-600 font-semibold flex items-center gap-1.5 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              正在高德开放平台实时检索全上海小区...
            </span>
          ) : (
            <span className="text-slate-400 text-[11px]">
              * 官方招生关系与高德地理信息分层展示，不互相推导
            </span>
          )}
        </div>
      </div>

      {/* 1. Official Catchment Cards */}
      {(sourceTab === 'all' || sourceTab === 'official') && processedCatchments.length > 0 && (
        <div className="space-y-4">
          {sourceTab === 'all' && processedAmapResults.length > 0 && (
            <div className="flex items-center gap-2 pt-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-600" />
              <h3 className="text-base font-bold text-slate-900">
                招生地段资料参考
                <span className="text-xs text-teal-700 bg-teal-50 border border-teal-200 px-2 py-0.5 rounded-full ml-2 font-semibold">
                  已通过结构校验 ({processedCatchments.length}个)
                </span>
              </h3>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {processedCatchments.map((item) => {
              const matchedSchool = SCHOOLS_DATA.find(s => s.id === item.matchedSchoolId);
              const isCompared = matchedSchool ? comparedSchools.some(c => c.id === matchedSchool.id) : false;

              // Calculate walking distance and minutes from community to school
              let distanceMeters = 0;
              let walkingMinutes = 0;
              if (item.location && matchedSchool?.location) {
                distanceMeters = getDistanceMeters(
                  item.location.lat, item.location.lng,
                  matchedSchool.location.lat, matchedSchool.location.lng
                );
                walkingMinutes = Math.max(1, Math.round(distanceMeters / 75));
              }

              const markerUrl = item.location ? getAmapMarkerUrl(item.location, item.communityName) : undefined;
              const navUrl = (item.location && matchedSchool?.location) ? getAmapNavigationUrl(
                { ...item.location, name: item.communityName },
                { ...matchedSchool.location, name: matchedSchool.name }
              ) : undefined;

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:border-teal-300 transition-all flex flex-col justify-between space-y-4"
                >
                  <div className="space-y-3">
                    
                    {/* Community Header */}
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex flex-wrap items-center gap-1.5">
                          <span className="text-xs font-bold bg-teal-50 text-teal-800 border border-teal-200 px-2 py-0.5 rounded">
                            {item.district}
                          </span>
                          <span className="text-xs text-slate-400 font-medium">
                            {item.subdistrict} · {item.neighborhoodCommittee}
                          </span>
                          <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                            {item.verificationStatus === 'verified' ? '🏛️ 官方原文已核验' : '📜 历史资料待核验'}
                          </span>
                        </div>
                        <h3 className="font-bold text-slate-900 text-base mt-1.5">
                          {item.communityName}
                        </h3>
                      </div>

                      {item.verificationStatus === 'verified' && item.fiveYearRule && (
                        <span className="text-[10px] font-bold bg-red-50 text-red-600 border border-red-200 px-2 py-0.5 rounded-full shrink-0">
                          五年一户严查
                        </span>
                      )}
                    </div>

                    {/* Housing Price Reference Badge */}
                    {item.verificationStatus === 'verified' && <CommunityPriceBadge priceInfo={item.priceInfo} />}

                    {/* Street Range */}
                    <div className="text-xs text-slate-600 bg-slate-50 p-2 rounded-xl border border-slate-100 flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span className="truncate">资料中的门牌范围：{item.streetAddressRange}</span>
                    </div>

                    {/* Gaode Coordinates & Real-time Navigation Integration */}
                    <div className="space-y-1.5">
                      
                      {/* Gaode Coordinates & Marker Link */}
                      <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 bg-emerald-50/70 rounded-xl border border-emerald-200/80 text-xs">
                        <div className="flex items-center gap-1.5 text-emerald-900 font-medium">
                          <Navigation className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>
                            高德实景坐标: <strong>{item.location.lng.toFixed(4)}, {item.location.lat.toFixed(4)}</strong> (GCJ-02)
                          </span>
                        </div>
                        {markerUrl && (
                          <a
                            href={markerUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-white hover:bg-emerald-50 px-2 py-0.5 rounded-lg border border-emerald-300 transition-colors shadow-2xs"
                            title="在高德地图中打开并查看此小区实景位置"
                          >
                            <span>高德实景查看</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        )}
                      </div>

                      {/* Gaode Walk Distance & Navigation Route */}
                      {distanceMeters > 0 && (
                        <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 bg-blue-50/70 rounded-xl border border-blue-200/80 text-xs">
                          <div className="flex items-center gap-1.5 text-blue-950 font-medium">
                            <Compass className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                            <span>
                              按坐标估算至资料关联学校: <strong>约 {distanceMeters} 米</strong> · 步行约 <strong>{walkingMinutes} 分钟</strong>
                            </span>
                          </div>
                          {navUrl && (
                            <a
                              href={navUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-700 bg-white hover:bg-blue-50 px-2 py-0.5 rounded-lg border border-blue-300 transition-colors shadow-2xs"
                              title="高德地图实景规划从该小区步行至对口小学的真实导航路线"
                            >
                              <span>步行导航路线</span>
                              <ExternalLink className="w-2.5 h-2.5" />
                            </a>
                          )}
                        </div>
                      )}

                    </div>

                    {/* Primary & Middle School Pipeline */}
                    <div className="space-y-2 pt-1 border-t border-slate-100 text-xs">
                      
                      {/* Primary School */}
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-1.5 text-slate-700">
                          <Building2 className="w-4 h-4 text-blue-600 shrink-0" />
                          <span className="font-semibold">资料关联小学：</span>
                          <span 
                            onClick={() => handleOpenSchoolDetail(item.matchedSchoolId)}
                            className="font-bold text-blue-700 hover:underline cursor-pointer"
                          >
                            {item.schoolName}
                          </span>
                        </div>
                        {matchedSchool && item.verificationStatus === 'verified' && (
                          <span className="text-[10px] font-semibold bg-blue-50 text-blue-800 px-1.5 py-0.5 rounded">
                            {matchedSchool.tier}
                          </span>
                        )}
                      </div>

                      {/* Middle School */}
                      {item.verificationStatus === 'verified' && <div className="flex items-start gap-1.5 text-slate-700">
                        <GraduationCap className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                        <span className="font-semibold shrink-0">对口初中：</span>
                        <div className="flex-1">
                          <MiddleSchoolBadges
                            middleSchoolText={item.matchedMiddleSchool}
                            onSelectMiddleSchool={(school) => onSelectMiddleSchool?.(school)}
                          />
                          {item.matchedMiddleSchoolId && (
                            <button
                              type="button"
                              onClick={() => handleOpenSchoolDetail(item.matchedMiddleSchoolId!)}
                              className="text-[11px] text-indigo-600 hover:text-indigo-800 hover:underline font-medium inline-flex items-center gap-0.5 mt-1"
                            >
                              <span>查看初中中考与名额分配档案 &rarr;</span>
                            </button>
                          )}
                        </div>
                      </div>}

                      {/* Kindergarten & Nursery (Special highlight for 1-3yo Toddlers) */}
                      {item.verificationStatus === 'verified' && item.matchedKindergarten && (
                        <div className="bg-pink-50/70 p-2.5 rounded-xl border border-pink-200/80 space-y-1">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1.5 text-slate-700">
                              <span className="text-sm">🍼</span>
                              <span className="font-semibold text-pink-900">对口/就近幼儿园：</span>
                              {item.matchedKindergartenId ? (
                                <span 
                                  onClick={() => handleOpenSchoolDetail(item.matchedKindergartenId!)}
                                  className="font-bold text-pink-700 hover:underline cursor-pointer"
                                >
                                  {item.matchedKindergarten}
                                </span>
                              ) : (
                                <span className="font-medium text-slate-800">{item.matchedKindergarten}</span>
                              )}
                            </div>
                            {item.nurseryAvailable && (
                              <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full border border-emerald-200 shadow-2xs">
                                🐣 2-3岁普惠托班
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-pink-800/90 pl-5 flex items-center gap-2">
                            <span>{item.nurseryAvailable ? '支持2岁幼儿提前入托启蒙' : '适龄3周岁统招小班'}</span>
                            <span className="text-pink-300">|</span>
                            <span className="text-slate-500">公办一级/示范园标准收费约 700-1050元/月</span>
                          </div>
                        </div>
                      )}

                    </div>

                    {/* Risk Warning and Years */}
                    {item.verificationStatus === 'verified' ? <div className="bg-amber-50/70 border border-amber-200/70 p-3 rounded-xl text-xs space-y-1">
                      <div className="flex items-center justify-between text-amber-900 font-semibold">
                        <span className="flex items-center gap-1">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                          历史资料中的入户参考：
                        </span>
                        <span className="text-amber-800">
                          参考值 <strong>{item.yearsRequiredAdvice}</strong> 年
                        </span>
                      </div>
                      <p className="text-[11px] text-amber-800 leading-relaxed">
                        {item.riskNote}
                      </p>
                    </div> : (
                      <div className="bg-amber-50/70 border border-amber-200/70 p-3 rounded-xl text-xs text-amber-900 leading-relaxed">
                        该条记录已通过学校 ID、名称和行政区结构校验，但尚缺少当年官方原文。关联学校、房价、入户年限和升学链条均不作为当年结论。
                      </div>
                    )}

                    {/* Compact Oversubscription Fallback Note (P1-4) */}
                    {item.verificationStatus === 'verified' && (
                      <OversubscribedFallbackCard
                        schoolId={item.matchedSchoolId}
                        schoolName={item.schoolName}
                        compact={true}
                      />
                    )}

                    {/* Official Bureau Citation Footnote */}
                    {DISTRICT_OFFICIAL_PORTALS[item.district] && (
                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px]">
                        <span className="flex items-center gap-1 truncate text-slate-500">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          核验入口：{DISTRICT_OFFICIAL_PORTALS[item.district].bureauName}
                        </span>
                        <button
                          type="button"
                          onClick={() => setSelectedGazetteDistrict(DISTRICT_OFFICIAL_PORTALS[item.district])}
                          className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-0.5 shrink-0 ml-1 hover:underline cursor-pointer"
                        >
                          <span>核验对口公报</span>
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                    )}

                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div className="flex flex-wrap items-center gap-2">
                      {item.verificationStatus === 'verified' && <button
                        onClick={() => handleSimulateSchool(item)}
                        className="flex items-center gap-1 text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 font-semibold px-3 py-1.5 rounded-xl transition-colors cursor-pointer"
                      >
                        <Calculator className="w-3.5 h-3.5" />
                        入学条件核对
                      </button>}

                      {item.verificationStatus === 'verified' && <button
                        type="button"
                        onClick={() => setExpandedTieringCommunityId(expandedTieringCommunityId === item.id ? null : item.id)}
                        className={`flex items-center gap-1 font-semibold px-2.5 py-1.5 rounded-xl border transition-colors cursor-pointer ${
                          expandedTieringCommunityId === item.id
                            ? 'bg-amber-100 border-amber-300 text-amber-900 shadow-2xs'
                            : 'bg-amber-50 hover:bg-amber-100 border-amber-200 text-amber-800'
                        }`}
                        title="展开同对口该校的同门楼盘高低配比价表与统筹去向"
                      >
                        <span>📊 同门比价与去向</span>
                        <span className="text-[10px]">{expandedTieringCommunityId === item.id ? '▲' : '▼'}</span>
                      </button>}

                      {onNavigateToMap && item.location && (
                        <button
                          type="button"
                          onClick={() => onNavigateToMap(item)}
                          className="flex items-center gap-1 text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 font-semibold px-3 py-1.5 rounded-xl transition-colors cursor-pointer"
                          title="在全景地图中定位并查看此小区"
                        >
                          <MapPin className="w-3.5 h-3.5 text-blue-600" />
                          地图定位
                        </button>
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      {matchedSchool && item.verificationStatus === 'verified' && (
                        <button
                          onClick={() => onToggleCompare(matchedSchool)}
                          className={`flex items-center gap-1 px-2.5 py-1.5 rounded-xl border transition-colors ${
                            isCompared
                              ? 'bg-indigo-50 border-indigo-200 text-indigo-700 font-semibold'
                              : 'border-slate-200 text-slate-600 hover:border-slate-300'
                          }`}
                        >
                          <Scale className="w-3.5 h-3.5" />
                          {isCompared ? '已PK' : '对比'}
                        </button>
                      )}

                      <button
                        onClick={() => handleOpenSchoolDetail(item.matchedSchoolId)}
                        className="flex items-center gap-0.5 text-blue-600 hover:text-blue-800 font-medium px-2 py-1.5"
                      >
                        查看学校档案
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Expanded Catchment Tiering Table & Fallback Deep Dive (P0-2 & P1-4) */}
                  {item.verificationStatus === 'verified' && expandedTieringCommunityId === item.id && (
                    <div className="pt-3 border-t border-slate-200 space-y-3 animate-fadeIn">
                      <OversubscribedFallbackCard
                        schoolId={item.matchedSchoolId}
                        schoolName={item.schoolName}
                      />
                      <CatchmentTieringTable
                        currentCommunity={item}
                        allCatchments={CATCHMENTS_DATA}
                        onNavigateToMap={onNavigateToMap}
                        onNavigateToSimulator={(comm) => handleSimulateSchool(comm)}
                      />
                    </div>
                  )}

                </div>
              );

            })}
          </div>
        </div>
      )}

      {/* 2. Real AMap POI Search Results Section */}
      {(sourceTab === 'all' || sourceTab === 'amap') && processedAmapResults.length > 0 && (
        <div className="pt-4 space-y-4 animate-in fade-in duration-200">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-1.5">
                高德地点检索结果
                <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-semibold border border-emerald-200">
                  POI、坐标与距离 ({processedAmapResults.length}个)
                </span>
              </h3>
            </div>
            <p className="text-xs text-slate-500">
              高德 POI 用于地理定位；附近学校只是距离参考，不表示招生对口
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {processedAmapResults.map((poi) => (
              <div
                key={poi.id}
                className="bg-white border-2 border-emerald-500/40 hover:border-emerald-500 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  
                  {/* Header */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                          🗺️ 高德实景收录
                        </span>
                        <span className="text-xs text-slate-500 font-medium">
                          {poi.district}
                        </span>
                      </div>
                      <h4 className="text-base font-black text-slate-900 mt-1">
                        {poi.name}
                      </h4>
                      <p className="text-xs text-slate-500 flex items-start gap-1 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                        <span>{poi.address || '上海市真实住宅小区'}</span>
                      </p>
                    </div>
                  </div>

                  {/* Housing Price Reference Badge */}
                  {poi.evidenceLevel === 'official' && <CommunityPriceBadge priceInfo={poi.priceInfo} />}

                  {/* Gaode Coordinates & Map Marker Link */}
                  {poi.location && (
                    <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 bg-emerald-50/70 rounded-xl border border-emerald-200/80 text-xs">
                      <div className="flex items-center gap-1.5 text-emerald-900 font-medium">
                        <Navigation className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>
                          高德实景坐标: <strong>{poi.location.lng.toFixed(4)}, {poi.location.lat.toFixed(4)}</strong> (GCJ-02)
                        </span>
                      </div>
                      {poi.amapMarkerUrl && (
                        <a
                          href={poi.amapMarkerUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-800 bg-white hover:bg-emerald-50 px-2 py-0.5 rounded-lg border border-emerald-300 transition-colors shadow-2xs"
                        >
                          <span>高德实景查看</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </a>
                      )}
                    </div>
                  )}

                  {/* Spatial Inferred Primary School */}
                  {poi.closestPrimary && (
                    <div className="p-3 bg-gradient-to-br from-blue-50 to-indigo-50/70 rounded-xl border border-blue-200/80 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-[10px] text-blue-700 font-bold uppercase flex items-center gap-1">
                          <Building2 className="w-3.5 h-3.5 text-blue-600" />
                          附近小学（非对口认定）
                        </div>
                        {poi.closestPrimary.tier && (
                          <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-1.5 py-0.2 rounded">
                            {poi.closestPrimary.tier}
                          </span>
                        )}
                      </div>

                      <div className="flex items-baseline justify-between gap-2">
                        <div 
                          onClick={() => onSelectSchool(poi.closestPrimary!)}
                          className="text-sm font-black text-blue-900 hover:underline cursor-pointer"
                        >
                          {poi.closestPrimary.name}
                        </div>
                        <span className="text-xs text-slate-500">
                          {poi.closestPrimary.district}
                        </span>
                      </div>

                      {/* Walking Distance & Route Navigation */}
                      <div className="pt-2 border-t border-blue-200/60 flex flex-wrap items-center justify-between gap-2 text-xs">
                        <div className="flex items-center gap-1 text-blue-950 font-medium">
                          <Compass className="w-3.5 h-3.5 text-blue-600" />
                          <span>
                            步行距离: <strong>约 {poi.distanceToPrimary} 米</strong> · 耗时约 <strong>{poi.walkingMinutesToPrimary} 分钟</strong>
                          </span>
                        </div>
                        {poi.amapNavigationUrl && (
                          <a
                            href={poi.amapNavigationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-700 bg-white hover:bg-blue-50 px-2 py-0.5 rounded-lg border border-blue-300 transition-colors shadow-2xs"
                          >
                            <span>步行导航路线</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Inferred Middle School */}
                  {poi.inferredMiddleSchool && (
                    <div className="flex items-center gap-1.5 text-xs text-slate-700 bg-slate-50 p-2 rounded-xl border border-slate-100">
                      <GraduationCap className="w-4 h-4 text-indigo-600 shrink-0" />
                      <span className="font-semibold">对口初中推导：</span>
                      <span className="font-medium text-slate-800">{poi.inferredMiddleSchool}</span>
                    </div>
                  )}

                  {/* Spatial Inferred Kindergarten (Directly helping 1-3yo toddler parents) */}
                  {poi.closestKindergarten && (
                    <div className="p-3 bg-gradient-to-br from-pink-50/70 to-rose-50/40 rounded-xl border border-pink-200/80 space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="text-[10px] text-pink-700 font-bold uppercase flex items-center gap-1">
                          <span className="text-xs">🍼</span>
                          空间就近公办/示范幼儿园研判
                        </div>
                        {poi.closestKindergarten.tier && (
                          <span className="text-[10px] bg-pink-100 text-pink-800 font-bold px-1.5 py-0.2 rounded">
                            {poi.closestKindergarten.tier}
                          </span>
                        )}
                      </div>

                      <div className="flex items-baseline justify-between gap-2">
                        <div 
                          onClick={() => onSelectSchool(poi.closestKindergarten!)}
                          className="text-sm font-black text-pink-950 hover:underline cursor-pointer"
                        >
                          {poi.closestKindergarten.name}
                        </div>
                        <span className="text-xs text-slate-500">
                          {poi.closestKindergarten.district}
                        </span>
                      </div>

                      <div className="pt-2 border-t border-pink-200/60 flex flex-wrap items-center justify-between gap-2 text-xs">
                        <div className="flex items-center gap-1 text-pink-950 font-medium text-[11px]">
                          <Compass className="w-3.5 h-3.5 text-pink-600" />
                          <span>
                            直线距离: <strong>约 {poi.distanceToKindergarten || (poi.location && poi.closestKindergarten.location ? getDistanceMeters(poi.location.lat, poi.location.lng, poi.closestKindergarten.location.lat, poi.closestKindergarten.location.lng) : 500)} 米</strong>
                          </span>
                        </div>
                        <button
                          type="button"
                          onClick={() => onSelectSchool(poi.closestKindergarten!)}
                          className="inline-flex items-center gap-1 text-[11px] font-bold text-pink-700 bg-white hover:bg-pink-50 px-2 py-0.5 rounded-lg border border-pink-300 transition-colors shadow-2xs cursor-pointer"
                        >
                          <span>查看幼儿园档案</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Policy Guideline */}
                  <div className="text-[11px] text-slate-500 bg-amber-50/60 p-2.5 rounded-xl border border-amber-100 flex items-start gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <strong>数据边界：</strong>高德地图结果不包含招生地段、录取顺序或学校层级结论。请通过所属区教育局当年公告核对。
                    </div>
                  </div>

                </div>

                {/* Actions */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-2 text-xs">
                  {poi.canSimulateAdmission && poi.matchedSchool && (
                    <button
                      onClick={() => onNavigateToSimulator(poi.matchedSchool!, `${poi.name} (${poi.district})`)}
                      className="flex-1 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-1 shadow-xs transition-all"
                    >
                      <Calculator className="w-3.5 h-3.5" />
                      入学条件核对
                    </button>
                  )}
                  {poi.closestPrimary && (
                    <button
                      onClick={() => onSelectSchool(poi.closestPrimary!)}
                      className="px-3.5 py-2 border border-slate-200 hover:bg-slate-50 text-slate-700 rounded-xl text-xs font-medium"
                    >
                      查看学校档案
                    </button>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>
      )}

      {/* Empty State */}
      {totalResultsCount === 0 && !isSearchingAmap && (
        <div className="bg-white rounded-3xl p-10 sm:p-12 text-center border border-slate-200 shadow-sm space-y-4 animate-in fade-in duration-200">
          <div className="w-16 h-16 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mx-auto text-2xl">
            🔍
          </div>
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-slate-800">
              {query ? `未找到包含 "${query}" 的小区` : (priceFilter !== 'all' ? '当前价格区间暂无匹配小区' : '暂无匹配小区')}
            </h3>
            <p className="text-xs text-slate-500 max-w-md mx-auto leading-relaxed">
              {priceFilter !== 'all' 
                ? `已应用价格预算筛选【${priceFilter === 'under50k' ? '<5万/㎡' : priceFilter === '50kTo80k' ? '5-8万/㎡' : priceFilter === '80kTo110k' ? '8-11万/㎡' : '>11万/㎡'}】，该价格段在此搜索条件下无结果。`
                : '建议尝试输入小区全称、道路名或居委会名，也可点击下方热门小区快速体验。'}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {(priceFilter !== 'all' || query || selectedDistrict !== '全部区域') && (
              <button
                onClick={() => {
                  setPriceFilter('all');
                  setQuery('');
                  setSelectedDistrict('全部区域');
                  setSourceTab('all');
                }}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-xs"
              >
                重置所有筛选与搜索
              </button>
            )}
            {priceFilter !== 'all' && (
              <button
                onClick={() => setPriceFilter('all')}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
              >
                清除价格限制 (查看全部)
              </button>
            )}
          </div>

          <div className="pt-4 border-t border-slate-100">
            <span className="text-xs text-slate-400 block mb-2">快速速查热门代表小区：</span>
            <div className="flex flex-wrap justify-center gap-2">
              {POPULAR_COMPOUNDS.slice(0, 6).map(item => (
                <button
                  key={item.name}
                  onClick={() => handleQuickChipClick(item)}
                  className="px-3 py-1.5 rounded-xl bg-teal-50 text-teal-800 text-xs font-semibold hover:bg-teal-100 transition-colors"
                >
                  🔍 {item.name} ({item.district})
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* 16 Districts Official Education Bureau Direct Gazette Directory */}
      <div className="bg-gradient-to-r from-slate-50 via-blue-50/40 to-teal-50/40 rounded-3xl border border-slate-200 p-5 sm:p-6 space-y-3.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Globe className="w-5 h-5 text-blue-600" />
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">
              上海市 16 区政府招生信息入口
            </h3>
          </div>
          <span className="text-xs text-blue-700 bg-blue-100/70 px-2.5 py-0.5 rounded-full font-medium">
            具体发布时间以官网为准
          </span>
        </div>
        <p className="text-xs text-slate-600 leading-relaxed">
          以下仅提供各区政府门户入口。进入官网后需核对当年度文件标题、发布日期、适用范围和原文链接，门户首页本身不作为小区—学校关系证据。
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2 pt-1">
          {Object.values(DISTRICT_OFFICIAL_PORTALS).map(portal => (
            <button
              type="button"
              key={portal.district}
              onClick={() => setSelectedGazetteDistrict(portal)}
              className="p-2.5 bg-white hover:bg-blue-50/60 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-xs transition-all text-center group flex flex-col items-center justify-center gap-0.5 cursor-pointer"
              title={`${portal.bureauName} - 进入政府门户查找招生原文`}
            >
              <span className="text-xs font-bold text-slate-800 group-hover:text-blue-600">
                {portal.district}
              </span>
              <span className="text-[10px] text-blue-600 font-medium flex items-center gap-0.5 group-hover:underline">
                政府门户 <ExternalLink className="w-2.5 h-2.5" />
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* District Official Gazette & Enrollment Direct Modal */}
      {selectedGazetteDistrict && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150"
          onClick={() => setSelectedGazetteDistrict(null)}
        >
          <div 
            className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 relative space-y-4 animate-in zoom-in-95 duration-150"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedGazetteDistrict(null)}
              className="absolute right-4 top-4 p-1.5 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div className="pr-6">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-base font-black text-slate-900">
                    {selectedGazetteDistrict.district} · 招生信息官方入口
                  </h3>
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border ${
                    selectedGazetteDistrict.fiveYearRuleStatus.includes('严格')
                      ? 'bg-red-50 text-red-700 border-red-200'
                      : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  }`}>
                    规则待核验
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium mt-0.5">
                  主管单位：{selectedGazetteDistrict.bureauName}
                </p>
              </div>
            </div>

            {/* Document Citation Banner */}
            <div className="p-3 bg-blue-50/70 rounded-2xl border border-blue-100 text-xs space-y-1">
              <div className="text-[11px] font-bold text-blue-900 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>需要在官网查找的目标文件</span>
              </div>
              <p className="text-slate-700 font-medium">
                {selectedGazetteDistrict.catchmentDocTitle}
              </p>
              <p className="text-[11px] text-slate-500">
                发布专栏：{selectedGazetteDistrict.enrollmentSectionName}
              </p>
            </div>

            {/* 3 Verified Action Pathways */}
            <div className="space-y-2 pt-1">
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                政府门户核验通道（招生原文待逐条绑定）
              </div>

              {/* Pathway 1: Search Exact Gazette PDF / Table */}
              <a
                href={selectedGazetteDistrict.gazetteSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white flex items-center justify-between shadow-xs transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <Search className="w-4 h-4 text-blue-200 shrink-0" />
                  <div className="text-left">
                    <div className="text-xs font-bold flex items-center gap-1">
                      进入该区政府门户查找招生地段原文
                      <ExternalLink className="w-3 h-3 text-blue-200" />
                    </div>
                    <div className="text-[10px] text-blue-100">
                      请在官网内核对当年度文件标题、日期与适用范围
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-blue-200 group-hover:translate-x-0.5 transition-transform shrink-0" />
              </a>

              {/* Pathway 2: District Government Portal */}
              <a
                href={selectedGazetteDistrict.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-800 flex items-center justify-between transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <Building2 className="w-4 h-4 text-slate-500 shrink-0" />
                  <div className="text-left">
                    <div className="text-xs font-bold text-slate-800 flex items-center gap-1">
                      前往{selectedGazetteDistrict.district}人民政府门户官网
                      <ExternalLink className="w-3 h-3 text-slate-400" />
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono">
                      {selectedGazetteDistrict.portalUrl}
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform shrink-0" />
              </a>

              {/* Pathway 3: City Unified Platform */}
              <a
                href="https://shrxbm.edu.sh.gov.cn"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200 text-emerald-900 flex items-center justify-between transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <div className="text-left">
                    <div className="text-xs font-bold text-emerald-950 flex items-center gap-1">
                      上海市义务教育入学报名系统 (市教委唯一直报平台)
                      <ExternalLink className="w-3 h-3 text-emerald-600" />
                    </div>
                    <div className="text-[10px] text-emerald-700">
                      上海幼升小/小升初官方报名登记、公办资格核验总入口
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-emerald-600 group-hover:translate-x-0.5 transition-transform shrink-0" />
              </a>
            </div>

            <div className="pt-2 border-t border-slate-100 text-[11px] leading-relaxed text-slate-500">
              咨询电话、办公地址和受理时间可能调整，请以政府官网当日公布内容为准。
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
