import React, { useState, useMemo } from 'react';
import { CommunityCatchment } from '../data/catchments';
import { 
  Building2, 
  MapPin, 
  Coins, 
  ChevronRight, 
  Navigation, 
  Layers, 
  Calculator, 
  Sparkles,
  ShieldAlert,
  ArrowUpDown,
  Tag
} from 'lucide-react';

interface CatchmentTieringTableProps {
  currentCommunity: CommunityCatchment;
  allCatchments: CommunityCatchment[];
  onSelectCommunity?: (community: CommunityCatchment) => void;
  onNavigateToMap?: (community: CommunityCatchment) => void;
  onNavigateToSimulator?: (community: CommunityCatchment) => void;
}

type PriceTierCategory = 'all' | 'affordable' | 'midrange' | 'highend';

export const CatchmentTieringTable: React.FC<CatchmentTieringTableProps> = ({
  currentCommunity,
  allCatchments,
  onSelectCommunity,
  onNavigateToMap,
  onNavigateToSimulator
}) => {
  const [selectedTier, setSelectedTier] = useState<PriceTierCategory>('all');
  const [sortBy, setSortBy] = useState<'price_asc' | 'price_desc' | 'year_desc'>('price_asc');

  // Filter sibling communities that share the exact matchedSchoolId
  const siblingCommunities = useMemo(() => {
    return allCatchments.filter(c => c.matchedSchoolId === currentCommunity.matchedSchoolId);
  }, [allCatchments, currentCommunity.matchedSchoolId]);

  // Helper to categorize each community
  const categorize = (c: CommunityCatchment): 'affordable' | 'midrange' | 'highend' => {
    const avgPrice = c.priceInfo?.averagePrice || 0;
    const totalStr = c.priceInfo?.totalPriceRange || '';
    const propType = c.priceInfo?.propertyType || '';
    const premiumTag = c.priceInfo?.premiumTag || '';

    // Check high-end
    if (
      totalStr.includes('1200') ||
      totalStr.includes('1500') ||
      totalStr.includes('2000') ||
      avgPrice >= 120000 ||
      propType.includes('豪宅') ||
      propType.includes('别墅')
    ) {
      return 'highend';
    }

    // Check affordable / low-total
    const minMatch = totalStr.match(/(\d+)\s*万/);
    const minPrice = minMatch ? parseInt(minMatch[1], 10) : 0;

    if (
      minPrice <= 480 ||
      propType.includes('公房') ||
      premiumTag.includes('低总价') ||
      (avgPrice > 0 && avgPrice < 65000)
    ) {
      return 'affordable';
    }

    return 'midrange';
  };

  // Helper to parse min price for sorting
  const getMinPriceNum = (c: CommunityCatchment): number => {
    const match = c.priceInfo?.totalPriceRange?.match(/(\d+)\s*万/);
    if (match) return parseInt(match[1], 10);
    return c.priceInfo?.averagePrice ? c.priceInfo.averagePrice / 1000 : 999;
  };

  // Grouped counts
  const counts = useMemo(() => {
    let affordable = 0;
    let midrange = 0;
    let highend = 0;

    siblingCommunities.forEach(c => {
      const tier = categorize(c);
      if (tier === 'affordable') affordable++;
      else if (tier === 'midrange') midrange++;
      else if (tier === 'highend') highend++;
    });

    return { total: siblingCommunities.length, affordable, midrange, highend };
  }, [siblingCommunities]);

  // Filtered & sorted list
  const displayList = useMemo(() => {
    let list = siblingCommunities.filter(c => {
      if (selectedTier === 'all') return true;
      return categorize(c) === selectedTier;
    });

    list.sort((a, b) => {
      if (sortBy === 'price_asc') {
        return getMinPriceNum(a) - getMinPriceNum(b);
      }
      if (sortBy === 'price_desc') {
        return getMinPriceNum(b) - getMinPriceNum(a);
      }
      if (sortBy === 'year_desc') {
        const yearA = parseInt(a.priceInfo?.buildYear?.match(/\d{4}/)?.[0] || '1990', 10);
        const yearB = parseInt(b.priceInfo?.buildYear?.match(/\d{4}/)?.[0] || '1990', 10);
        return yearB - yearA;
      }
      return 0;
    });

    return list;
  }, [siblingCommunities, selectedTier, sortBy]);

  // If there's only 1 community for this school, return minimal note
  if (siblingCommunities.length <= 1) {
    return (
      <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs text-slate-500 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Building2 className="w-4 h-4 text-slate-400" />
          <span>该校目前重点收录此核心小区。如需全区学区房横向对比，可使用顶部智能向导或GIS地图。</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-sm space-y-4">
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-amber-500 text-white flex items-center justify-center font-bold text-xs shadow-xs">
              📊
            </div>
            <h3 className="font-bold text-slate-800 text-sm sm:text-base">
              对口【{currentCommunity.schoolName}】同门楼盘高低配比价表
            </h3>
            <span className="text-xs bg-amber-50 text-amber-800 font-semibold px-2 py-0.5 rounded-full border border-amber-200">
              共 {counts.total} 个对口小区
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            同属于该校同一划片地段，总价跨越老破小挂户型至高品质次新，助你根据预算精准定位
          </p>
        </div>

        {/* Sort Controls */}
        <div className="flex items-center gap-1.5 self-end sm:self-auto">
          <span className="text-[11px] text-slate-400 flex items-center gap-1">
            <ArrowUpDown className="w-3 h-3" />
            排序：
          </span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="text-xs border border-slate-200 rounded-lg px-2 py-1 bg-slate-50 text-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500 font-medium"
          >
            <option value="price_asc">总价从低到高</option>
            <option value="price_desc">总价从高到低</option>
            <option value="year_desc">房龄从新到老</option>
          </select>
        </div>
      </div>

      {/* Tier Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 text-xs">
        <button
          onClick={() => setSelectedTier('all')}
          className={`px-3 py-1.5 rounded-xl font-medium transition-all ${
            selectedTier === 'all'
              ? 'bg-slate-800 text-white shadow-xs'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          全部楼盘 ({counts.total})
        </button>

        <button
          onClick={() => setSelectedTier('affordable')}
          className={`px-3 py-1.5 rounded-xl font-medium transition-all flex items-center gap-1 ${
            selectedTier === 'affordable'
              ? 'bg-emerald-700 text-white shadow-xs'
              : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-200/80'
          }`}
        >
          <span>🏷️ 低总价挂户型 ({counts.affordable})</span>
          <span className="text-[10px] opacity-80">&lt;500万</span>
        </button>

        <button
          onClick={() => setSelectedTier('midrange')}
          className={`px-3 py-1.5 rounded-xl font-medium transition-all flex items-center gap-1 ${
            selectedTier === 'midrange'
              ? 'bg-blue-700 text-white shadow-xs'
              : 'bg-blue-50 text-blue-800 hover:bg-blue-100 border border-blue-200/80'
          }`}
        >
          <span>🏡 次新品质自住 ({counts.midrange})</span>
          <span className="text-[10px] opacity-80">500-1100万</span>
        </button>

        {counts.highend > 0 && (
          <button
            onClick={() => setSelectedTier('highend')}
            className={`px-3 py-1.5 rounded-xl font-medium transition-all flex items-center gap-1 ${
              selectedTier === 'highend'
                ? 'bg-purple-700 text-white shadow-xs'
                : 'bg-purple-50 text-purple-800 hover:bg-purple-100 border border-purple-200/80'
            }`}
          >
            <span>💎 顶流改善大宅 ({counts.highend})</span>
            <span className="text-[10px] opacity-80">1200万+</span>
          </button>
        )}
      </div>

      {/* Comparison Grid List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {displayList.map((comm) => {
          const isCurrent = comm.id === currentCommunity.id;
          const tier = categorize(comm);

          return (
            <div
              key={comm.id}
              className={`rounded-xl p-3.5 border transition-all text-xs flex flex-col justify-between gap-2.5 ${
                isCurrent
                  ? 'bg-amber-50/50 border-amber-400 ring-2 ring-amber-400/20 shadow-xs'
                  : 'bg-slate-50/70 hover:bg-white hover:border-slate-300 border-slate-200/80 shadow-2xs'
              }`}
            >
              <div>
                {/* Header line */}
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    {isCurrent ? (
                      <span className="px-1.5 py-0.5 rounded bg-amber-500 text-white font-bold text-[10px]">
                        当前查看
                      </span>
                    ) : (
                      <span className={`px-1.5 py-0.5 rounded font-bold text-[10px] ${
                        tier === 'affordable'
                          ? 'bg-emerald-100 text-emerald-800'
                          : tier === 'highend'
                          ? 'bg-purple-100 text-purple-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {tier === 'affordable' ? '挂学籍型' : tier === 'highend' ? '顶流改善' : '品质自住'}
                      </span>
                    )}
                    <h4 className="font-bold text-slate-800 text-xs sm:text-sm">
                      {comm.communityName}
                    </h4>
                  </div>
                  
                  {comm.priceInfo?.buildYear && (
                    <span className="text-[10px] text-slate-400 bg-white px-1.5 py-0.5 rounded border border-slate-200 shrink-0">
                      {comm.priceInfo.buildYear}
                    </span>
                  )}
                </div>

                {/* Street range */}
                <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1 truncate">
                  <MapPin className="w-3 h-3 shrink-0 text-slate-400" />
                  <span>{comm.streetAddressRange}</span>
                </div>

                {/* Price Matrix Details */}
                <div className="mt-2.5 pt-2 border-t border-slate-200/60 grid grid-cols-2 gap-2">
                  <div>
                    <div className="text-[10px] text-slate-400">参考总价区间</div>
                    <div className="font-extrabold text-amber-700 text-xs sm:text-sm mt-0.5">
                      {comm.priceInfo?.totalPriceRange || '暂无挂牌总价'}
                    </div>
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400">单价均价</div>
                    <div className="font-bold text-slate-700 text-xs mt-0.5">
                      {comm.priceInfo?.averagePrice ? `${(comm.priceInfo.averagePrice / 10000).toFixed(1)}万/㎡` : '参考单价'}
                      <span className="text-[10px] text-slate-400 font-normal ml-1">
                        ({comm.priceInfo?.priceRange || '均价'})
                      </span>
                    </div>
                  </div>
                </div>

                {/* Property Type & Tag */}
                <div className="mt-2 flex flex-wrap items-center gap-1.5">
                  {comm.priceInfo?.propertyType && (
                    <span className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px]">
                      {comm.priceInfo.propertyType}
                    </span>
                  )}
                  {comm.priceInfo?.premiumTag && (
                    <span className="px-1.5 py-0.5 rounded bg-amber-50 text-amber-800 text-[10px] border border-amber-200/60">
                      {comm.priceInfo.premiumTag}
                    </span>
                  )}
                  <span className="text-[10px] text-slate-400">
                    入户建议 {comm.yearsRequiredAdvice}年
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 border-t border-slate-200/50 flex items-center justify-between gap-2">
                <div className="text-[10px] text-slate-400 truncate">
                  初中：{comm.matchedMiddleSchool.split(/[/、]/)[0]}
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  {onNavigateToMap && (
                    <button
                      type="button"
                      onClick={() => onNavigateToMap(comm)}
                      className="px-2 py-1 rounded-lg text-[11px] font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors flex items-center gap-1"
                      title="在GIS电子地图上定位并查看周边配套"
                    >
                      <Navigation className="w-3 h-3" />
                      <span>地图定位</span>
                    </button>
                  )}
                  {onNavigateToSimulator && (
                    <button
                      type="button"
                      onClick={() => onNavigateToSimulator(comm)}
                      className="px-2 py-1 rounded-lg text-[11px] font-medium bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors flex items-center gap-1"
                      title="使用该小区进行人户一致入学概率模拟"
                    >
                      <Calculator className="w-3 h-3" />
                      <span>模拟录取</span>
                    </button>
                  )}
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Buying advice footnote */}
      <div className="p-3 bg-amber-50/70 border border-amber-200/70 rounded-xl text-xs text-amber-900 flex items-start gap-2">
        <Sparkles className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <div className="space-y-0.5">
          <div className="font-bold">选房置业智囊建议：</div>
          <p className="opacity-90 leading-relaxed text-[11px]">
            当前没有已核验房价，不提供总价档位或置业建议。查看房源前，请分别核验交易信息、产权状态，以及教育部门当年公布的招生规则；地理邻近不代表招生对口。
          </p>
        </div>
      </div>
    </div>
  );
};
