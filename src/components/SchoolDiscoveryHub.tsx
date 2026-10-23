import React, { useState, useEffect, useMemo } from 'react';
import { School, SchoolStage, District, SchoolType, SchoolTier } from '../types/school';
import { SCHOOLS_DATA, DISTRICTS_LIST } from '../data/schools';
import { CommunityCatchment } from '../data/catchments';
import { MiddleSchoolProfile } from '../data/middleSchools';
import { SchoolList } from './SchoolList';
import { SchoolGISMap } from './SchoolGISMap';
import { 
  Compass, 
  Map as MapIcon, 
  ListFilter, 
  Columns, 
  Sparkles, 
  Search, 
  Filter, 
  SlidersHorizontal, 
  X, 
  ArrowUpDown,
  Layers,
  MapPin,
  Building2,
  Check
} from 'lucide-react';

export type DiscoveryViewMode = 'list' | 'map' | 'split';

interface SchoolDiscoveryHubProps {
  schools?: School[];
  selectedStage: SchoolStage | 'all';
  onStageChange: (stage: SchoolStage | 'all') => void;
  comparedSchools: School[];
  onToggleCompare: (school: School) => void;
  onOpenCompareModal: () => void;
  shortlistedSchools: School[];
  onToggleShortlist: (school: School) => void;
  onNavigateToSimulator: (school: School, community?: CommunityCatchment | string) => void;
  onNavigateToAdvisor: () => void;
  onNavigateToCommunity?: () => void;
  onSelectSchool: (school: School) => void;
  targetCommunity?: CommunityCatchment | null;
  onSelectMiddleSchool?: (school: MiddleSchoolProfile) => void;
  initialViewMode?: DiscoveryViewMode;
}

export const SchoolDiscoveryHub: React.FC<SchoolDiscoveryHubProps> = ({
  schools = SCHOOLS_DATA,
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
  targetCommunity,
  onSelectMiddleSchool,
  initialViewMode = 'split'
}) => {
  // Current view mode: 'list' | 'map' | 'split'
  const [viewMode, setViewMode] = useState<DiscoveryViewMode>(() => {
    if (targetCommunity) return 'map';
    return initialViewMode;
  });

  // Shared Filter States across all view modes
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('全部区域');
  const [selectedType, setSelectedType] = useState<string>('all');
  const [selectedTier, setSelectedTier] = useState<string>('all');
  const [selectedRigor, setSelectedRigor] = useState<string>('all');
  const [selectedBudget, setSelectedBudget] = useState<string>('all');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'rating' | 'tuitionAsc' | 'tuitionDesc' | 'established'>('established');

  // Hovered school for split screen sync
  const [hoveredSchoolId, setHoveredSchoolId] = useState<string | null>(null);

  // If a target community is passed from outside (e.g. CatchmentLookup or SmartAdvisor), jump to map/split
  useEffect(() => {
    if (targetCommunity) {
      setViewMode(prev => (prev === 'split' ? 'split' : 'map'));
    }
  }, [targetCommunity]);

  // Compute filtered schools list based on shared filters
  const filteredSchools = useMemo(() => {
    return schools.filter((school) => {
      // Stage filter
      if (selectedStage !== 'all' && school.stage !== selectedStage) return false;

      // District filter
      if (selectedDistrict !== '全部区域' && school.district !== selectedDistrict) return false;

      // Type filter
      if (selectedType !== 'all' && (school.verificationStatus !== 'verified' || school.type !== selectedType)) return false;

      // Tier filter
      if (selectedTier !== 'all') {
        if (school.verificationStatus !== 'verified') return false;
        if (selectedTier === 'tier1' && !['市示范园', '公办一梯队', '民办顶尖/头牌', '三公名校'].includes(school.tier)) return false;
        if (selectedTier === 'tier2' && !['市一级园', '公办二梯队', '民办优质/特色', '市重点初中'].includes(school.tier)) return false;
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
        if (selectedBudget === 'under50k' && (school.tuition.amount > 50000 && !school.tuition.isFree)) return false;
        if (selectedBudget === 'over50k' && (school.tuition.isFree || school.tuition.amount <= 50000)) return false;
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
      if (a.verificationStatus !== 'verified' || b.verificationStatus !== 'verified') return a.name.localeCompare(b.name, 'zh-CN');
      if (sortBy === 'rating') return b.reviews.parentRating - a.reviews.parentRating;
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
      if (sortBy === 'established') return a.establishedYear - b.establishedYear;
      return 0;
    });
  }, [schools, selectedStage, selectedDistrict, selectedType, selectedTier, selectedRigor, selectedBudget, selectedTag, searchQuery, sortBy]);

  // View Mode Switcher Pill Component
  const ViewModeSelector = (
    <div className="inline-flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200/80 shadow-xs shrink-0">
      <button
        type="button"
        onClick={() => setViewMode('list')}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
          viewMode === 'list'
            ? 'bg-white text-blue-700 shadow-sm'
            : 'text-slate-600 hover:text-slate-900'
        }`}
        title="列表精查：多维参数横向浏览、口碑与学费排序"
      >
        <ListFilter className="w-3.5 h-3.5" />
        <span>列表精查</span>
      </button>

      <button
        type="button"
        onClick={() => setViewMode('map')}
        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
          viewMode === 'map'
            ? 'bg-white text-blue-700 shadow-sm'
            : 'text-slate-600 hover:text-slate-900'
        }`}
        title="全景GIS地图：空间分布感知、对口划片范围与卫星图"
      >
        <MapIcon className="w-3.5 h-3.5" />
        <span>GIS地图</span>
      </button>

      <button
        type="button"
        onClick={() => setViewMode('split')}
        className={`hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
          viewMode === 'split'
            ? 'bg-white text-indigo-700 shadow-sm'
            : 'text-slate-600 hover:text-slate-900'
        }`}
        title="左右分屏：左侧卡片与右侧地图实时双向联动"
      >
        <Columns className="w-3.5 h-3.5" />
        <span>左右分屏</span>
        <span className="text-[10px] bg-indigo-100 text-indigo-800 px-1 py-0.2 rounded font-semibold">联动</span>
      </button>
    </div>
  );

  return (
    <div className="w-full">
      {/* MODE 1: PURE LIST VIEW */}
      {viewMode === 'list' && (
        <SchoolList
          selectedStage={selectedStage}
          onStageChange={onStageChange}
          comparedSchools={comparedSchools}
          onToggleCompare={onToggleCompare}
          onOpenCompareModal={onOpenCompareModal}
          shortlistedSchools={shortlistedSchools}
          onToggleShortlist={onToggleShortlist}
          onNavigateToSimulator={onNavigateToSimulator}
          onNavigateToAdvisor={onNavigateToAdvisor}
          onNavigateToCommunity={onNavigateToCommunity}
          onSelectSchool={onSelectSchool}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          viewModeSelectorNode={ViewModeSelector}
          // Shared filters
          searchQuery={searchQuery}
          onSearchQueryChange={setSearchQuery}
          selectedDistrict={selectedDistrict}
          onDistrictChange={setSelectedDistrict}
          selectedType={selectedType}
          onTypeChange={setSelectedType}
          selectedTier={selectedTier}
          onTierChange={setSelectedTier}
          selectedBudget={selectedBudget}
          onBudgetChange={setSelectedBudget}
          selectedRigor={selectedRigor}
          onRigorChange={setSelectedRigor}
          selectedTag={selectedTag}
          onTagChange={setSelectedTag}
          sortBy={sortBy}
          onSortByChange={setSortBy}
        />
      )}

      {/* MODE 2: PURE MAP VIEW */}
      {viewMode === 'map' && (
        <div className="relative">
          {/* Floating mode switch button bar on top-right of map */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-1 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <Compass className="w-4 h-4 text-blue-600" />
              <span>全景地图模式 · 连通高德实景与空间划片</span>
              <span className="text-slate-400">|</span>
              <span className="text-slate-500 font-normal">已筛选名校：<strong className="text-blue-600 font-semibold">{filteredSchools.length}</strong> 所</span>
            </div>
            {ViewModeSelector}
          </div>

          <SchoolGISMap
            schools={filteredSchools}
            selectedStage={selectedStage}
            onStageChange={onStageChange}
            onSelectSchool={onSelectSchool}
            onToggleCompare={onToggleCompare}
            comparedSchools={comparedSchools}
            shortlistedSchools={shortlistedSchools}
            onToggleShortlist={onToggleShortlist}
            onNavigateToSimulator={onNavigateToSimulator}
            targetCommunity={targetCommunity}
            onSelectMiddleSchool={onSelectMiddleSchool}
          />
        </div>
      )}

      {/* MODE 3: SPLIT SCREEN VIEW (DESKTOP DUAL COLUMN) */}
      {viewMode === 'split' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 space-y-3">
          {/* Master Unified Control Bar in Split Mode */}
          <div className="bg-white rounded-2xl p-3.5 border border-slate-200 shadow-sm space-y-3">
            {/* Row 1: Quick Search, Stage Switcher, Count & Mode Switcher */}
            <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
              {/* Search Bar */}
              <div className="relative w-full lg:w-96 shrink-0">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="搜索校名、对口小区、初中去向、特色 (如：明珠、世外)..."
                  className="w-full pl-10 pr-8 py-2 bg-slate-50 hover:bg-slate-100/70 focus:bg-white border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Stage Pills */}
              <div className="inline-flex bg-slate-100 p-1 rounded-xl border border-slate-200 text-xs shrink-0">
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
                  onClick={() => onStageChange('primary')}
                  className={`flex items-center gap-1 px-3 py-1 rounded-lg transition-all font-bold ${
                    selectedStage === 'primary'
                      ? 'bg-white text-blue-700 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  🎒 小学
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
                  👶 幼儿园
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
                  🎓 初中
                </button>
              </div>

              {/* View Mode Switcher + Count */}
              <div className="flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-end">
                <div className="text-xs text-slate-500 hidden sm:block">
                  匹配名校：<strong className="text-indigo-600 font-bold">{filteredSchools.length}</strong> 所
                </div>
                {ViewModeSelector}
              </div>
            </div>

            {/* Row 2: District Horizontal Chips + Compact Dropdown Filters */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 text-xs">
              {/* District Chips (scrollable) */}
              <div className="flex items-center gap-1 overflow-x-auto pb-1 max-w-full lg:max-w-2xl scrollbar-none">
                <span className="text-slate-400 font-semibold text-[11px] shrink-0 mr-1">区域:</span>
                {DISTRICTS_LIST.map((dist) => (
                  <button
                    key={dist}
                    type="button"
                    onClick={() => setSelectedDistrict(dist)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-all shrink-0 ${
                      selectedDistrict === dist
                        ? 'bg-indigo-600 text-white shadow-2xs font-semibold'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {dist}
                  </button>
                ))}
              </div>

              {/* Quick Filters */}
              <div className="flex items-center gap-1.5 shrink-0">
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 text-xs text-slate-700 font-medium cursor-pointer hover:bg-slate-100"
                >
                  <option value="all">性质: 全部</option>
                  <option value="public">公办名校</option>
                  <option value="private">民办优质</option>
                  <option value="bilingual">双语学校</option>
                  <option value="international">国际学校</option>
                </select>

                <select
                  value={selectedTier}
                  onChange={(e) => setSelectedTier(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 text-xs text-slate-700 font-medium cursor-pointer hover:bg-slate-100"
                >
                  <option value="all">梯队: 全部</option>
                  <option value="tier1">市示范 / 一梯队</option>
                  <option value="tier2">市一级 / 二梯队</option>
                </select>

                <select
                  value={selectedBudget}
                  onChange={(e) => setSelectedBudget(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-lg px-2 py-1 text-xs text-slate-700 font-medium cursor-pointer hover:bg-slate-100"
                >
                  <option value="all">预算: 不限</option>
                  <option value="free">公办免学费</option>
                  <option value="under50k">5万/学期内</option>
                  <option value="over50k">5万/学期以上</option>
                </select>

                {(selectedDistrict !== '全部区域' || selectedType !== 'all' || selectedTier !== 'all' || selectedBudget !== 'all' || selectedRigor !== 'all' || selectedTag !== 'all' || searchQuery) && (
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedDistrict('全部区域');
                      setSelectedType('all');
                      setSelectedTier('all');
                      setSelectedBudget('all');
                      setSelectedRigor('all');
                      setSelectedTag('all');
                      setSearchQuery('');
                    }}
                    className="text-rose-600 hover:text-rose-700 font-bold px-2 py-1 rounded hover:bg-rose-50 transition-colors"
                    title="重置所有筛选"
                  >
                    重置
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Dual Columns Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
            {/* Left Column: School Cards Stream (5 cols) */}
            <div className="lg:col-span-5 max-h-[calc(100vh-180px)] overflow-y-auto pr-1 space-y-3 scrollbar-thin scrollbar-thumb-slate-200">
              <SchoolList
                selectedStage={selectedStage}
                onStageChange={onStageChange}
                comparedSchools={comparedSchools}
                onToggleCompare={onToggleCompare}
                onOpenCompareModal={onOpenCompareModal}
                shortlistedSchools={shortlistedSchools}
                onToggleShortlist={onToggleShortlist}
                onNavigateToSimulator={onNavigateToSimulator}
                onNavigateToAdvisor={onNavigateToAdvisor}
                onNavigateToCommunity={onNavigateToCommunity}
                onSelectSchool={onSelectSchool}
                viewMode="split"
                compactView={true}
                hideHeroBanner={true}
                hoveredSchoolId={hoveredSchoolId}
                onHoverSchool={setHoveredSchoolId}
                // Shared filters
                searchQuery={searchQuery}
                onSearchQueryChange={setSearchQuery}
                selectedDistrict={selectedDistrict}
                onDistrictChange={setSelectedDistrict}
                selectedType={selectedType}
                onTypeChange={setSelectedType}
                selectedTier={selectedTier}
                onTierChange={setSelectedTier}
                selectedBudget={selectedBudget}
                onBudgetChange={setSelectedBudget}
                selectedRigor={selectedRigor}
                onRigorChange={setSelectedRigor}
                selectedTag={selectedTag}
                onTagChange={setSelectedTag}
                sortBy={sortBy}
                onSortByChange={setSortBy}
              />
            </div>

            {/* Right Column: Sticky Interactive GIS Map (7 cols) */}
            <div className="lg:col-span-7 sticky top-20 h-[calc(100vh-180px)] rounded-3xl overflow-hidden border border-slate-800 shadow-lg bg-slate-900">
              <SchoolGISMap
                schools={filteredSchools}
                selectedStage={selectedStage}
                onStageChange={onStageChange}
                onSelectSchool={onSelectSchool}
                onToggleCompare={onToggleCompare}
                comparedSchools={comparedSchools}
                shortlistedSchools={shortlistedSchools}
                onToggleShortlist={onToggleShortlist}
                onNavigateToSimulator={onNavigateToSimulator}
                targetCommunity={targetCommunity}
                onSelectMiddleSchool={onSelectMiddleSchool}
                compactMode={true}
                hoveredSchoolId={hoveredSchoolId}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
