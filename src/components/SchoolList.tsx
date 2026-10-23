import React, { useState, useMemo, useEffect } from 'react';
import { School, SchoolStage, SchoolType, District, SchoolTier } from '../types/school';
import { SCHOOLS_DATA, DISTRICTS_LIST } from '../data/schools';
import { SchoolCard } from './SchoolCard';
import { SchoolDetailModal } from './SchoolDetailModal';
import { searchShanghaiSchoolsFromAMap } from '../services/amapService';
import { 
  Search, 
  Filter, 
  RotateCcw, 
  Scale, 
  Sparkles, 
  ArrowUpDown, 
  X, 
  Check, 
  Building2, 
  SlidersHorizontal,
  ChevronRight,
  Globe,
  Loader2,
  RefreshCw,
  MessageSquare
} from 'lucide-react';

interface SchoolListProps {
  selectedStage: SchoolStage | 'all';
  onStageChange: (stage: SchoolStage | 'all') => void;
  comparedSchools: School[];
  onToggleCompare: (school: School) => void;
  onOpenCompareModal: () => void;
  shortlistedSchools: School[];
  onToggleShortlist: (school: School) => void;
  onNavigateToSimulator: (school: School) => void;
  onNavigateToAdvisor: () => void;
  onNavigateToCommunity?: () => void;
  onSelectSchool?: (school: School) => void;
  // Controlled view & layout props
  viewMode?: 'list' | 'map' | 'split';
  onViewModeChange?: (mode: 'list' | 'map' | 'split') => void;
  viewModeSelectorNode?: React.ReactNode;
  hideHeroBanner?: boolean;
  compactView?: boolean;
  hoveredSchoolId?: string | null;
  onHoverSchool?: (id: string | null) => void;
  // Controlled filter props (optional)
  searchQuery?: string;
  onSearchQueryChange?: (q: string) => void;
  selectedDistrict?: string;
  onDistrictChange?: (d: string) => void;
  selectedType?: string;
  onTypeChange?: (t: string) => void;
  selectedTier?: string;
  onTierChange?: (t: string) => void;
  selectedBudget?: string;
  onBudgetChange?: (b: string) => void;
  selectedRigor?: string;
  onRigorChange?: (r: string) => void;
  selectedTag?: string;
  onTagChange?: (t: string) => void;
  sortBy?: 'rating' | 'tuitionAsc' | 'tuitionDesc' | 'established';
  onSortByChange?: (s: 'rating' | 'tuitionAsc' | 'tuitionDesc' | 'established') => void;
}

export const SchoolList: React.FC<SchoolListProps> = ({
  selectedStage,
  onStageChange,
  comparedSchools,
  onToggleCompare,
  onOpenCompareModal,
  shortlistedSchools,
  onToggleShortlist,
  onNavigateToSimulator,
  onNavigateToAdvisor,
  onNavigateToCommunity,
  onSelectSchool,
  viewMode = 'list',
  onViewModeChange,
  viewModeSelectorNode,
  hideHeroBanner = false,
  compactView = false,
  hoveredSchoolId,
  onHoverSchool,
  // Controlled filters
  searchQuery: controlledSearchQuery,
  onSearchQueryChange,
  selectedDistrict: controlledDistrict,
  onDistrictChange,
  selectedType: controlledType,
  onTypeChange,
  selectedTier: controlledTier,
  onTierChange,
  selectedBudget: controlledBudget,
  onBudgetChange,
  selectedRigor: controlledRigor,
  onRigorChange,
  selectedTag: controlledTag,
  onTagChange,
  sortBy: controlledSortBy,
  onSortByChange
}) => {
  // Local Filter States fallback if not controlled
  const [localSearchQuery, setLocalSearchQuery] = useState('');
  const [localDistrict, setLocalDistrict] = useState<string>('全部区域');
  const [localType, setLocalType] = useState<string>('all');
  const [localTier, setLocalTier] = useState<string>('all');
  const [localRigor, setLocalRigor] = useState<string>('all');
  const [localBudget, setLocalBudget] = useState<string>('all');
  const [localTag, setLocalTag] = useState<string>('all');
  const [localSortBy, setLocalSortBy] = useState<'rating' | 'tuitionAsc' | 'tuitionDesc' | 'established'>('rating');

  const searchQuery = controlledSearchQuery !== undefined ? controlledSearchQuery : localSearchQuery;
  const setSearchQuery = onSearchQueryChange || setLocalSearchQuery;

  const selectedDistrict = controlledDistrict !== undefined ? controlledDistrict : localDistrict;
  const setSelectedDistrict = onDistrictChange || setLocalDistrict;

  const selectedType = controlledType !== undefined ? controlledType : localType;
  const setSelectedType = onTypeChange || setLocalType;

  const selectedTier = controlledTier !== undefined ? controlledTier : localTier;
  const setSelectedTier = onTierChange || setLocalTier;

  const selectedRigor = controlledRigor !== undefined ? controlledRigor : localRigor;
  const setSelectedRigor = onRigorChange || setLocalRigor;

  const selectedBudget = controlledBudget !== undefined ? controlledBudget : localBudget;
  const setSelectedBudget = onBudgetChange || setLocalBudget;

  const selectedTag = controlledTag !== undefined ? controlledTag : localTag;
  const setSelectedTag = onTagChange || setLocalTag;

  const sortBy = controlledSortBy !== undefined ? controlledSortBy : localSortBy;
  const setSortBy = onSortByChange || setLocalSortBy;

  // AMap Live Integration State
  const [amapSchools, setAmapSchools] = useState<School[]>([]);
  const [isSearchingAmap, setIsSearchingAmap] = useState<boolean>(false);
  const [sourceFilter, setSourceFilter] = useState<'all' | 'curated' | 'amap'>('all');
  const [amapPage, setAmapPage] = useState<number>(1);
  const [hasMoreAmap, setHasMoreAmap] = useState<boolean>(true);
  const [isLoadingMoreAmap, setIsLoadingMoreAmap] = useState<boolean>(false);

  // Detail Modal State
  const [activeSchool, setActiveSchool] = useState<School | null>(null);

  // Filter Logic
  const filteredSchools = useMemo(() => {
    return SCHOOLS_DATA.filter((school) => {
      // Stage filter
      if (selectedStage !== 'all' && school.stage !== selectedStage) {
        return false;
      }

      // District filter
      if (selectedDistrict !== '全部区域' && school.district !== selectedDistrict) {
        return false;
      }

      // Type filter
      if (selectedType !== 'all' && (school.verificationStatus !== 'verified' || school.type !== selectedType)) {
        return false;
      }

      // Tier filter
      if (selectedTier !== 'all') {
        if (school.verificationStatus !== 'verified') return false;
        if (selectedTier === 'tier1' && !['市示范园', '公办一梯队', '民办顶尖/头牌', '三公名校'].includes(school.tier)) {
          return false;
        }
        if (selectedTier === 'tier2' && !['市一级园', '公办二梯队', '民办优质/特色', '市重点初中'].includes(school.tier)) {
          return false;
        }
      }

      // Rigor filter
      if (selectedRigor !== 'all') {
        if (school.verificationStatus !== 'verified') return false;
        if (selectedRigor === 'academic' && !school.academic.rigorLevel.includes('鸡血')) return false;
        if (selectedRigor === 'balanced' && !school.academic.rigorLevel.includes('均衡')) return false;
        if (selectedRigor === 'happy' && !school.academic.rigorLevel.includes('快乐')) return false;
      }

      // Budget filter
      if (selectedBudget !== 'all') {
        if (school.verificationStatus !== 'verified') return false;
        if (selectedBudget === 'free' && !school.tuition.isFree) return false;
        if (selectedBudget === 'under50k') {
          if (school.tuition.amount > 50000 && !school.tuition.isFree) return false;
        }
        if (selectedBudget === 'over50k') {
          if (school.tuition.isFree || school.tuition.amount <= 50000) return false;
        }
      }

      // Tag filter
      if (selectedTag !== 'all') {
        if (school.verificationStatus !== 'verified') return false;
        if (selectedTag === 'fiveYear' && !school.enrollment.hasFiveYearRule) return false;
        if (selectedTag === 'ib' && !school.academic.curriculum.includes('IB-PYP探究')) return false;
        if (selectedTag === 'bilingual' && !school.academic.curriculum.includes('双语浸润课程')) return false;
        if (selectedTag === 'stem' && !school.academic.curriculum.includes('科创数理特色')) return false;
        if (selectedTag === 'art' && !school.academic.curriculum.includes('艺术/音乐/体育特色')) return false;
      }

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchName = school.name.toLowerCase().includes(q) || school.shortName.toLowerCase().includes(q);
        const matchDistrict = school.district.toLowerCase().includes(q);
        const canSearchFacts = school.verificationStatus === 'verified';
        const matchFeatures = canSearchFacts && school.academic.features.some(f => f.toLowerCase().includes(q));
        const matchDownstream = canSearchFacts && school.downstream.targetSchools.some(d => d.toLowerCase().includes(q));
        const matchTags = canSearchFacts && school.tags.some(t => t.toLowerCase().includes(q));
        const matchCatchment = canSearchFacts && school.enrollment.catchmentAreas?.some(c => c.toLowerCase().includes(q));

        if (!matchName && !matchDistrict && !matchFeatures && !matchDownstream && !matchTags && !matchCatchment) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (a.verificationStatus !== 'verified' || b.verificationStatus !== 'verified') {
        return a.name.localeCompare(b.name, 'zh-CN');
      }
      if (sortBy === 'rating') {
        return b.reviews.parentRating - a.reviews.parentRating;
      }
      if (sortBy === 'tuitionAsc') {
        const aT = a.tuition.isFree ? 0 : a.tuition.amount;
        const bT = b.tuition.isFree ? 0 : b.tuition.amount;
        return aT - bT;
      }
      if (sortBy === 'tuitionDesc') {
        const aT = a.tuition.isFree ? 0 : a.tuition.amount;
        const bT = b.tuition.isFree ? 0 : b.tuition.amount;
        return bT - aT;
      }
      if (sortBy === 'established') {
        return a.establishedYear - b.establishedYear;
      }
      return 0;
    });
  }, [selectedStage, selectedDistrict, selectedType, selectedTier, selectedRigor, selectedBudget, selectedTag, searchQuery, sortBy]);

  // Query real-time schools from AMap whenever district, stage, or search query changes
  useEffect(() => {
    let isMounted = true;
    setAmapPage(1);
    setHasMoreAmap(true);

    const timer = setTimeout(async () => {
      setIsSearchingAmap(true);
      try {
        const results = await searchShanghaiSchoolsFromAMap({
          keyword: searchQuery,
          district: selectedDistrict,
          stage: selectedStage,
          pageSize: 40,
          pageIndex: 1
        });
        if (isMounted) {
          setAmapSchools(results);
          if (results.length < 20) {
            setHasMoreAmap(false);
          }
        }
      } catch (err) {
        if (isMounted) setAmapSchools([]);
      } finally {
        if (isMounted) setIsSearchingAmap(false);
      }
    }, 350);

    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [searchQuery, selectedDistrict, selectedStage]);

  const handleManualAmapSearch = async () => {
    setIsSearchingAmap(true);
    setAmapPage(1);
    setHasMoreAmap(true);
    try {
      const results = await searchShanghaiSchoolsFromAMap({
        keyword: searchQuery,
        district: selectedDistrict,
        stage: selectedStage,
        pageSize: 50,
        pageIndex: 1
      });
      setAmapSchools(results);
      if (results.length < 20) setHasMoreAmap(false);
    } catch {
      setAmapSchools([]);
    } finally {
      setIsSearchingAmap(false);
    }
  };

  const handleLoadMoreAmap = async () => {
    if (isLoadingMoreAmap || !hasMoreAmap) return;
    setIsLoadingMoreAmap(true);
    const nextPage = amapPage + 1;
    try {
      const moreResults = await searchShanghaiSchoolsFromAMap({
        keyword: searchQuery,
        district: selectedDistrict,
        stage: selectedStage,
        pageSize: 40,
        pageIndex: nextPage
      });
      if (moreResults.length === 0) {
        setHasMoreAmap(false);
      } else {
        setAmapPage(nextPage);
        setAmapSchools(prev => {
          const existingIds = new Set(prev.map(p => p.id));
          const existingNames = new Set(prev.map(p => p.name));
          const additions = moreResults.filter(r => !existingIds.has(r.id) && !existingNames.has(r.name));
          if (additions.length === 0) {
            setHasMoreAmap(false);
          }
          return [...prev, ...additions];
        });
      }
    } catch {
      setHasMoreAmap(false);
    } finally {
      setIsLoadingMoreAmap(false);
    }
  };

  // Combine Curated & AMap Schools with Deduplication
  const combinedSchools = useMemo(() => {
    const curated = filteredSchools;

    // Filter AMap schools if any match the stage/type/district
    const validAmap = amapSchools.filter(school => {
      // Stage
      if (selectedStage !== 'all' && school.stage !== selectedStage) return false;
      // District
      if (selectedDistrict !== '全部区域' && school.district !== selectedDistrict) return false;
      // Type
      if (selectedType !== 'all' && (school.verificationStatus !== 'verified' || school.type !== selectedType)) return false;
      // Don't duplicate if already in curated list
      if (curated.some(c => c.name === school.name || c.shortName === school.shortName || (c.address && school.address && c.address === school.address))) {
        return false;
      }
      return true;
    });

    if (sourceFilter === 'curated') return curated;
    if (sourceFilter === 'amap') return validAmap;

    return [...curated, ...validAmap];
  }, [filteredSchools, amapSchools, sourceFilter, selectedStage, selectedDistrict, selectedType]);

  const curatedCount = filteredSchools.length;
  const amapCount = useMemo(() => {
    return amapSchools.filter(a => !filteredSchools.some(c => c.name === a.name || c.shortName === a.shortName)).length;
  }, [amapSchools, filteredSchools]);

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedDistrict('全部区域');
    setSelectedType('all');
    setSelectedTier('all');
    setSelectedRigor('all');
    setSelectedBudget('all');
    setSelectedTag('all');
    setAmapSchools([]);
  };

  const isFilterActive = 
    searchQuery !== '' || 
    selectedDistrict !== '全部区域' || 
    selectedType !== 'all' || 
    selectedTier !== 'all' || 
    selectedRigor !== 'all' || 
    selectedBudget !== 'all' || 
    selectedTag !== 'all';

  return (
    <div className={compactView ? "space-y-4" : "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6"}>
      
      {/* Banner / Hero Prompt */}
      {!hideHeroBanner && (
        <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-slate-900 rounded-3xl p-6 sm:p-8 text-white shadow-lg relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold mb-3 border border-white/20 text-blue-100">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              上海学校目录与来源核验工作台
            </div>
            <h1 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
              不盲目跟风，选最契合孩子与家庭的魔都好学校
            </h1>
            <p className="mt-2 text-sm text-blue-100 leading-relaxed">
              结构化聚合徐汇、黄浦、静安、浦东等核心区市示范园、一梯队公办、知名双语民办全维度数据，帮您算清入户顺位，规避“公民同招”统筹陷阱。
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button
                onClick={onNavigateToAdvisor}
                className="bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl shadow-md transition-all flex items-center gap-1.5"
              >
                <Sparkles className="w-4 h-4 text-slate-900" />
                开启 3分钟智能择校测评
              </button>
              {onNavigateToCommunity && (
                <button
                  onClick={onNavigateToCommunity}
                  className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-bold px-4 py-2.5 rounded-xl shadow-md border border-indigo-400/40 transition-all flex items-center gap-1.5"
                >
                  <MessageSquare className="w-4 h-4 text-amber-300" />
                  升学问答与社区 (FAQ)
                </button>
              )}
              <span className="text-xs text-blue-200 hidden sm:inline">
                学校资料与高德地理信息分层展示；高德 POI 不自动生成学校档案
              </span>
            </div>
          </div>

          {/* Decorative background circle */}
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        </div>
      )}

      {/* Search & Filter Container - hidden in compactView since parent has unified header */}
      {!compactView && (
      <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5 space-y-4">
        
        {/* Top Search Input & Sort & View Selector */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
          <div className="relative w-full sm:max-w-lg">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="搜索校名、对口地段、初中去向、特色 (如：明珠、世外、位育对口)..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
            {viewModeSelectorNode && (
              <div className="shrink-0">{viewModeSelectorNode}</div>
            )}

            <div className="flex items-center gap-1.5 text-xs text-slate-500 shrink-0">
              <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
              <span>排序：</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1 text-xs font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="rating">家长口碑评分最高</option>
                <option value="tuitionAsc">学费从低到高 (公办优先)</option>
                <option value="tuitionDesc">学费从高到低</option>
                <option value="established">创校历史悠久优先</option>
              </select>
            </div>

            {isFilterActive && (
              <button
                onClick={resetFilters}
                className="flex items-center gap-1 text-xs text-rose-600 hover:text-rose-700 font-medium px-2 py-1 rounded-md hover:bg-rose-50 transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                重置筛选
              </button>
            )}
          </div>
        </div>

        {/* Stage Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
          <span className="text-xs font-medium text-slate-400 mr-1">升学学段：</span>
          <div className="inline-flex bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs">
            <button
              type="button"
              onClick={() => onStageChange('all')}
              className={`px-3 py-1 rounded-lg transition-all font-bold ${
                selectedStage === 'all'
                  ? 'bg-white text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              全部学段
            </button>
            <button
              type="button"
              onClick={() => onStageChange('kindergarten')}
              className={`flex items-center gap-1 px-3 py-1 rounded-lg transition-all font-bold ${
                selectedStage === 'kindergarten'
                  ? 'bg-white text-pink-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              👶 幼儿园 (入园)
            </button>
            <button
              type="button"
              onClick={() => onStageChange('primary')}
              className={`flex items-center gap-1 px-3 py-1 rounded-lg transition-all font-bold ${
                selectedStage === 'primary'
                  ? 'bg-white text-blue-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🎒 小学 (幼升小)
            </button>
            <button
              type="button"
              onClick={() => onStageChange('middle')}
              className={`flex items-center gap-1 px-3 py-1 rounded-lg transition-all font-bold ${
                selectedStage === 'middle'
                  ? 'bg-white text-purple-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              🎓 初中 (小升初)
            </button>
          </div>
        </div>

        {/* District Filter Chips */}
        <div className="space-y-1 pt-2 border-t border-slate-100">
          <div className="text-xs font-medium text-slate-400 mb-1">所属区域：</div>
          <div className="flex flex-wrap gap-1.5">
            {DISTRICTS_LIST.map((dist) => (
              <button
                key={dist}
                onClick={() => setSelectedDistrict(dist)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                  selectedDistrict === dist
                    ? 'bg-blue-600 text-white shadow-sm font-semibold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {dist}
              </button>
            ))}
          </div>
        </div>

        {/* Secondary Detailed Filter Row */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2 border-t border-slate-100 text-xs">
          
          {/* Nature / Type */}
          <div>
            <label className="text-slate-400 block mb-1">学校性质</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg p-1.5 text-slate-700 font-medium"
            >
              <option value="all">全部性质</option>
              <option value="public">公办学校 (免学费)</option>
              <option value="private">民办学校 (体制内/双轨)</option>
              <option value="bilingual">民办双语学校</option>
              <option value="international">外籍/国际学校</option>
            </select>
          </div>

          {/* Tier */}
          <div>
            <label className="text-slate-400 block mb-1">梯队评级</label>
            <select
              value={selectedTier}
              onChange={(e) => setSelectedTier(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg p-1.5 text-slate-700 font-medium"
            >
              <option value="all">全部梯队</option>
              <option value="tier1">市示范园 / 公办一梯队 / 民办顶尖 / 三公名校</option>
              <option value="tier2">市一级园 / 公办二梯队 / 民办优质 / 市重点初中</option>
            </select>
          </div>

          {/* Rigor */}
          <div>
            <label className="text-slate-400 block mb-1">应试节奏 / 风格</label>
            <select
              value={selectedRigor}
              onChange={(e) => setSelectedRigor(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg p-1.5 text-slate-700 font-medium"
            >
              <option value="all">全部风格</option>
              <option value="academic">鸡血应试 (重分层与基本功)</option>
              <option value="balanced">均衡高效 (兼顾学术与综合)</option>
              <option value="happy">快乐素质 (重个性与探究)</option>
            </select>
          </div>

          {/* Budget */}
          <div>
            <label className="text-slate-400 block mb-1">年学费预算</label>
            <select
              value={selectedBudget}
              onChange={(e) => setSelectedBudget(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg p-1.5 text-slate-700 font-medium"
            >
              <option value="all">不限预算</option>
              <option value="free">免费 (公办九年义务/示范普惠)</option>
              <option value="under50k">5万/学期以内 (高性价比民办)</option>
              <option value="over50k">5万/学期以上 (双语高端)</option>
            </select>
          </div>

          {/* Specific Highlights */}
          <div>
            <label className="text-slate-400 block mb-1">特色规则与课程</label>
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg p-1.5 text-slate-700 font-medium"
            >
              <option value="all">全部特色</option>
              <option value="fiveYear">严格执行“五年一户”</option>
              <option value="ib">IB-PYP 探究式体系</option>
              <option value="bilingual">双语浸润课程</option>
              <option value="stem">科创数理特色</option>
              <option value="art">艺术体育管弦乐特色</option>
            </select>
          </div>

        </div>

      </div>
      )}

      {/* Results Header & Data Source Filters */}
      {compactView ? (
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs p-3 flex items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">
              学校名录 (<strong className="text-indigo-600">{combinedSchools.length}</strong>)
            </span>
            <div className="inline-flex bg-slate-100 p-0.5 rounded-lg border border-slate-200 text-[11px]">
              <button
                onClick={() => setSourceFilter('all')}
                className={`px-2 py-0.5 rounded-md transition-all ${
                  sourceFilter === 'all'
                    ? 'bg-white text-indigo-700 shadow-2xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                全部
              </button>
              <button
                onClick={() => setSourceFilter('curated')}
                className={`px-2 py-0.5 rounded-md transition-all ${
                  sourceFilter === 'curated'
                    ? 'bg-white text-indigo-700 shadow-2xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                ⭐精选
              </button>
              <button
                onClick={() => setSourceFilter('amap')}
                className={`px-2 py-0.5 rounded-md transition-all ${
                  sourceFilter === 'amap'
                    ? 'bg-white text-indigo-700 shadow-2xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                🗺️高德
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1 text-[11px] text-slate-500">
              <ArrowUpDown className="w-3 h-3 text-slate-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-slate-50 border border-slate-200 rounded px-2 py-1 text-xs font-medium text-slate-700 focus:outline-none focus:ring-1 focus:ring-indigo-500 cursor-pointer"
              >
                <option value="rating">评分优先</option>
                <option value="tuitionAsc">学费低到高</option>
                <option value="tuitionDesc">学费高到低</option>
                <option value="established">历史悠久</option>
              </select>
            </div>

            {comparedSchools.length > 0 && (
              <button
                onClick={onOpenCompareModal}
                className="flex items-center gap-0.5 text-indigo-600 hover:text-indigo-700 font-bold shrink-0 text-[11px] bg-indigo-50 px-2 py-1 rounded-lg border border-indigo-200"
              >
                <Scale className="w-3 h-3" />
                <span>PK({comparedSchools.length})</span>
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between text-xs text-slate-500 px-1">
          <div className="flex flex-wrap items-center gap-2.5">
            <div className="flex items-center gap-1.5">
              <span>找到</span>
              <strong className="text-blue-600 font-bold text-sm">{combinedSchools.length}</strong>
              <span>所学校</span>
              {selectedDistrict !== '全部区域' && (
                <span className="bg-blue-50 text-blue-800 font-semibold px-2 py-0.5 rounded-full border border-blue-100">
                  {selectedDistrict}
                </span>
              )}
              {isSearchingAmap && (
                <span className="flex items-center gap-1 text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full animate-pulse font-medium">
                  <Loader2 className="w-3 h-3 animate-spin" />
                  高德学校地点检索中...
                </span>
              )}
            </div>

            {/* Source Filter Switch */}
            <div className="inline-flex bg-slate-100 p-0.5 rounded-xl border border-slate-200 text-xs">
              <button
                onClick={() => setSourceFilter('all')}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                  sourceFilter === 'all'
                    ? 'bg-white text-blue-700 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                全部 ({curatedCount + amapCount})
              </button>
              <button
                onClick={() => setSourceFilter('curated')}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                  sourceFilter === 'curated'
                    ? 'bg-white text-blue-700 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                ⭐ 深度精选 ({curatedCount})
              </button>
              <button
                onClick={() => setSourceFilter('amap')}
                className={`px-2.5 py-1 rounded-lg font-medium transition-all ${
                  sourceFilter === 'amap'
                    ? 'bg-white text-blue-700 shadow-xs font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                🗺️ 高德地点核对 ({amapCount})
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            {/* Manual AMap Query Button */}
            <button
              onClick={handleManualAmapSearch}
              disabled={isSearchingAmap}
              className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 transition-colors font-medium text-xs disabled:opacity-60"
              title="调用高德地图开放平台检索学校 POI，仅用于地点核对"
            >
              <Globe className="w-3.5 h-3.5 text-emerald-600" />
              <span>高德{selectedDistrict !== '全部区域' ? selectedDistrict : '全上海'}学校地点核对</span>
            </button>

            {comparedSchools.length > 0 && (
              <button
                onClick={onOpenCompareModal}
                className="flex items-center gap-1 text-indigo-600 hover:text-indigo-700 font-semibold shrink-0"
              >
                <Scale className="w-3.5 h-3.5" />
                对比 ({comparedSchools.length})
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      )}

      {/* School Cards Grid */}
      {combinedSchools.length > 0 ? (
        <div className="space-y-6">
          <div className={compactView ? "grid grid-cols-1 gap-4" : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"}>
            {combinedSchools.map((school) => {
              const isCompared = comparedSchools.some(s => s.id === school.id);
              const isShortlisted = shortlistedSchools.some(s => s.id === school.id);
              const isHovered = hoveredSchoolId === school.id;

              return (
                <div
                  key={school.id}
                  onMouseEnter={() => onHoverSchool && onHoverSchool(school.id)}
                  onMouseLeave={() => onHoverSchool && onHoverSchool(null)}
                  className={`transition-all rounded-2xl ${
                    isHovered ? 'ring-2 ring-indigo-500 shadow-md scale-[1.01]' : ''
                  }`}
                >
                  <SchoolCard
                    school={school}
                    onSelect={(s) => {
                      if (onSelectSchool) {
                        onSelectSchool(s);
                      } else {
                        setActiveSchool(s);
                      }
                    }}
                    isCompared={isCompared}
                    onToggleCompare={onToggleCompare}
                    isShortlisted={isShortlisted}
                    onToggleShortlist={onToggleShortlist}
                    onSimulateAdmission={onNavigateToSimulator}
                  />
                </div>
              );
            })}
          </div>

          {sourceFilter !== 'curated' && hasMoreAmap && (
            <div className="pt-4 pb-2 text-center">
              <button
                onClick={handleLoadMoreAmap}
                disabled={isLoadingMoreAmap || isSearchingAmap}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-white border border-blue-200 text-blue-600 hover:bg-blue-50 font-semibold text-xs sm:text-sm shadow-sm transition-all disabled:opacity-50"
              >
                {isLoadingMoreAmap ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                    <span>正在从高德地图检索更多学校...</span>
                  </>
                ) : (
                  <>
                    <Globe className="w-4 h-4 text-blue-600" />
                    <span>从高德地图加载更多 {selectedDistrict !== '全部区域' ? selectedDistrict : '上海市'} 学校 (第 {amapPage + 1} 页)</span>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-md mx-auto space-y-3">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 mx-auto">
            <Filter className="w-6 h-6" />
          </div>
          <h3 className="font-bold text-slate-800">未找到完全匹配的学校</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            您可以尝试放宽区域或学费预算限制，或清空部分筛选标签重新探索。
          </p>
          <button
            onClick={resetFilters}
            className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-xl"
          >
            清空所有筛选条件
          </button>
        </div>
      )}

      {/* Floating Compare Drawer / Dock when items are compared */}
      {comparedSchools.length > 0 && (
        <div className="fixed bottom-5 right-5 z-40 bg-slate-900/90 backdrop-blur-md text-white p-3.5 rounded-2xl shadow-xl border border-slate-700 flex items-center gap-3 animate-slideUp">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-indigo-400" />
            <div className="text-xs">
              <span className="font-bold">已选 {comparedSchools.length} 所学校</span>
              <span className="text-slate-400 block sm:inline sm:ml-1 text-[11px]">(最多支持4所)</span>
            </div>
          </div>
          <button
            onClick={onOpenCompareModal}
            className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold px-3 py-1.5 rounded-xl transition-colors"
          >
            立即PK对比
          </button>
        </div>
      )}

      {/* School Detail Modal (local fallback if parent doesn't handle modal) */}
      {!onSelectSchool && activeSchool && (
        <SchoolDetailModal
          school={activeSchool}
          onClose={() => setActiveSchool(null)}
          isCompared={comparedSchools.some(s => s.id === activeSchool.id)}
          onToggleCompare={onToggleCompare}
          isShortlisted={shortlistedSchools.some(s => s.id === activeSchool.id)}
          onToggleShortlist={onToggleShortlist}
          onSimulateAdmission={onNavigateToSimulator}
        />
      )}

    </div>
  );
};
