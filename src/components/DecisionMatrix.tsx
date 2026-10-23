import React, { useState, useMemo } from 'react';
import { School, District, SchoolStage } from '../types/school';
import { SCHOOLS_DATA, DISTRICTS_LIST } from '../data/schools';
import { 
  BookmarkCheck, 
  Trash2, 
  Plus, 
  Sliders, 
  Trophy, 
  Sparkles, 
  Check, 
  Edit3, 
  Save, 
  Scale, 
  Info,
  Car,
  DollarSign,
  BookOpen,
  Globe2,
  HeartHandshake,
  Smile,
  Search,
  X,
  Calculator,
  ExternalLink
} from 'lucide-react';

interface DecisionMatrixProps {
  shortlistedSchools: School[];
  onRemoveSchool: (schoolId: string) => void;
  onAddSchool: (school: School) => void;
  onSelectSchool: (school: School) => void;
  onToggleCompare: (school: School) => void;
  comparedSchools: School[];
  allSchools?: School[];
  onNavigateToSimulator?: (school: School) => void;
}

export const DecisionMatrix: React.FC<DecisionMatrixProps> = ({
  shortlistedSchools,
  onRemoveSchool,
  onAddSchool,
  onSelectSchool,
  onToggleCompare,
  comparedSchools,
  allSchools,
  onNavigateToSimulator
}) => {
  // Family Weight Priorities (0 - 100 each, normalized)
  const [weights, setWeights] = useState({
    commute: 20, // 通勤接送
    budget: 20,  // 学费负担
    academic: 25, // 学术对口
    bilingual: 15, // 外教双语
    holistic: 10,  // 素质硬件
    happiness: 10 // 身心快乐
  });

  // Adding schools candidate picker state
  const [isAdding, setIsAdding] = useState(false);
  const [addSearchQuery, setAddSearchQuery] = useState('');
  const [addDistrictFilter, setAddDistrictFilter] = useState<string>('all');
  const [addStageFilter, setAddStageFilter] = useState<SchoolStage | 'all'>('all');
  const [selectedCandidateId, setSelectedCandidateId] = useState<string>('');

  const schoolPool = (allSchools || SCHOOLS_DATA).filter(
    school => school.verificationStatus === 'verified'
  );

  // Available candidates not yet shortlisted
  const availableCandidates = useMemo(() => {
    const shortlistedIds = new Set(shortlistedSchools.map(s => s.id));
    return schoolPool.filter(s => {
      if (shortlistedIds.has(s.id)) return false;
      if (addStageFilter !== 'all' && s.stage !== addStageFilter) return false;
      if (addDistrictFilter !== 'all' && s.district !== addDistrictFilter) return false;
      if (addSearchQuery.trim()) {
        const q = addSearchQuery.toLowerCase().trim();
        const matchName = s.name.toLowerCase().includes(q) || (s.shortName && s.shortName.toLowerCase().includes(q));
        const matchDistrict = s.district.toLowerCase().includes(q);
        const matchAddress = s.address.toLowerCase().includes(q);
        const matchTier = s.tier.toLowerCase().includes(q);
        const matchTag = s.badgeTag.toLowerCase().includes(q);
        const matchDownstream = s.downstream.targetSchools.some(t => t.toLowerCase().includes(q));
        return matchName || matchDistrict || matchAddress || matchTier || matchTag || matchDownstream;
      }
      return true;
    });
  }, [schoolPool, shortlistedSchools, addStageFilter, addDistrictFilter, addSearchQuery]);

  const handleAddCandidate = (schoolToAdd?: School) => {
    const target = schoolToAdd || schoolPool.find(s => s.id === selectedCandidateId);
    if (target) {
      onAddSchool(target);
      setSelectedCandidateId('');
    }
  };

  // Notes for schools stored locally
  const [schoolNotes, setSchoolNotes] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem('shanghai_school_notes');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [currentNoteText, setCurrentNoteText] = useState<string>('');

  const handleSaveNote = (schoolId: string) => {
    const updated = { ...schoolNotes, [schoolId]: currentNoteText };
    setSchoolNotes(updated);
    try {
      localStorage.setItem('shanghai_school_notes', JSON.stringify(updated));
    } catch {}
    setEditingNoteId(null);
  };

  // Preset sample schools if shortlist is empty
  const handleLoadSample = () => {
    [
      SCHOOLS_DATA[2], // 世外小学
      SCHOOLS_DATA[5], // 汇师小学
      SCHOOLS_DATA[9], // 明珠小学
      SCHOOLS_DATA[10] // 平和双语
    ].forEach(s => onAddSchool(s));
  };

  // Score schools objectively on standard dimensions
  const evaluatedSchools = useMemo(() => {
    const totalWeight = Object.values(weights).reduce((a, b) => a + b, 0) || 1;

    return shortlistedSchools.filter(school => school.verificationStatus === 'verified').map((school) => {
      // Dimension 1: Commute (generic baseline score: 80, slightly higher for public neighborhood)
      const commuteScore = school.type === 'public' ? 90 : 75;

      // Dimension 2: Budget (Free = 100, cheap = 85, expensive = 60)
      let budgetScore = 70;
      if (school.tuition.isFree) budgetScore = 100;
      else if (school.tuition.amount <= 40000) budgetScore = 85;
      else if (school.tuition.amount <= 60000) budgetScore = 70;
      else budgetScore = 55;

      // Dimension 3: Academic & Pipeline
      let academicScore = 80;
      if (school.academic.rigorLevel.includes('鸡血')) academicScore = 95;
      else if (school.academic.rigorLevel.includes('均衡')) academicScore = 88;
      else academicScore = 78;

      // Dimension 4: Bilingual / English
      let bilingualScore = 60;
      if (school.academic.foreignTeacherRatio?.includes('高配')) bilingualScore = 98;
      else if (school.academic.foreignTeacherRatio?.includes('中配')) bilingualScore = 85;
      else bilingualScore = 65;

      // Dimension 5: Holistic & Facilities
      let holisticScore = 80;
      if (school.academic.curriculum.some(c => c.includes('艺术') || c.includes('IB') || c.includes('瑞吉欧'))) {
        holisticScore = 95;
      }

      // Dimension 6: Happiness & Wellbeing
      let happinessScore = 75;
      if (school.academic.rigorLevel.includes('快乐')) happinessScore = 96;
      else if (school.academic.rigorLevel.includes('均衡')) happinessScore = 88;
      else happinessScore = 70;

      // Weighted Calculation
      const finalScore = (
        commuteScore * (weights.commute / totalWeight) +
        budgetScore * (weights.budget / totalWeight) +
        academicScore * (weights.academic / totalWeight) +
        bilingualScore * (weights.bilingual / totalWeight) +
        holisticScore * (weights.holistic / totalWeight) +
        happinessScore * (weights.happiness / totalWeight)
      );

      return {
        school,
        finalScore: Math.round(finalScore * 10) / 10,
        dimensionScores: {
          commuteScore,
          budgetScore,
          academicScore,
          bilingualScore,
          holisticScore,
          happinessScore
        }
      };
    }).sort((a, b) => b.finalScore - a.finalScore);
  }, [shortlistedSchools, weights]);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center shrink-0">
            <BookmarkCheck className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              家庭加权决策矩阵
              <span className="text-xs bg-rose-50 text-rose-700 border border-rose-200 px-2 py-0.5 rounded-full font-semibold">
                备选清单 ({shortlistedSchools.length})
              </span>
            </h2>
            <p className="text-xs text-slate-500">
              调整家庭关注维度权重（通勤、学费、学术、外教等），系统实时算分推荐最优拍板选择
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setIsAdding(prev => !prev)}
            className="bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold px-3.5 py-2 rounded-xl transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
          >
            {isAdding ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            {isAdding ? '收起挑选面板' : '添加备选学校'}
          </button>

          {shortlistedSchools.length === 0 ? (
            <button
              onClick={handleLoadSample}
              className="bg-amber-500 hover:bg-amber-600 text-white text-xs font-semibold px-3.5 py-2 rounded-xl transition-all shadow-sm flex items-center gap-1 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-100" />
              一键导入 4 所经典候选名校
            </button>
          ) : (
            <button
              onClick={() => {
                if (window.confirm('确定要清空备选择校夹中的所有学校吗？')) {
                  shortlistedSchools.forEach(s => onRemoveSchool(s.id));
                }
              }}
              className="flex items-center gap-1 text-xs text-slate-500 hover:text-rose-600 px-3 py-2 rounded-xl hover:bg-rose-50 transition-colors border border-slate-200 cursor-pointer"
            >
              <Trash2 className="w-3.5 h-3.5" />
              清空择校夹
            </button>
          )}
        </div>
      </div>

      {/* Candidate Search / Add Panel */}
      {isAdding && (
        <div className="bg-rose-50/80 border border-rose-200 p-4 sm:p-5 rounded-3xl space-y-3.5 animate-fadeIn shadow-xs">
          <div className="flex items-center justify-between">
            <div className="text-xs sm:text-sm font-bold text-rose-950 flex items-center gap-1.5">
              <Plus className="w-4 h-4 text-rose-600" />
              搜索并添加候选学校至决策矩阵（当前可选 {availableCandidates.length} 所）：
            </div>
            <button
              onClick={() => {
                setIsAdding(false);
                setAddSearchQuery('');
                setSelectedCandidateId('');
              }}
              className="text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={addSearchQuery}
                onChange={(e) => setAddSearchQuery(e.target.value)}
                placeholder="搜索校名、简称、对口初中（如：世外、明珠、汇师、逸夫）..."
                className="w-full pl-9 pr-3 py-2 bg-white border border-rose-200 rounded-xl text-xs focus:ring-2 focus:ring-rose-500 focus:outline-none"
              />
            </div>

            {/* District Filter */}
            <select
              value={addDistrictFilter}
              onChange={(e) => setAddDistrictFilter(e.target.value)}
              className="bg-white border border-rose-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-800"
            >
              <option value="all">全部行政区</option>
              {DISTRICTS_LIST.map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>

            {/* Stage Filter */}
            <select
              value={addStageFilter}
              onChange={(e) => setAddStageFilter(e.target.value as SchoolStage | 'all')}
              className="bg-white border border-rose-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-800"
            >
              <option value="all">全部学段</option>
              <option value="kindergarten">幼儿园</option>
              <option value="primary">小学</option>
            </select>

            {/* School dropdown */}
            <select
              value={selectedCandidateId}
              onChange={(e) => setSelectedCandidateId(e.target.value)}
              className="bg-white border border-rose-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-800 flex-1"
            >
              <option value="">-- 选择候选学校 ({availableCandidates.length} 所) --</option>
              {availableCandidates.map((s) => (
                <option key={s.id} value={s.id}>
                  [{s.district}] {s.name} ({s.tier})
                </option>
              ))}
            </select>

            <button
              onClick={() => handleAddCandidate()}
              disabled={!selectedCandidateId}
              className="bg-rose-600 hover:bg-rose-700 disabled:opacity-50 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all shrink-0 cursor-pointer"
            >
              确认加入
            </button>
          </div>

          {/* Quick Filter Chips (first 8 matches or popular benchmark schools) */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            <span className="text-[11px] text-slate-500 font-medium">
              {addSearchQuery.trim() ? '快速点击添加：' : '热门标杆学校快速添加：'}
            </span>
            {availableCandidates.slice(0, 8).map(school => (
              <button
                key={school.id}
                onClick={() => handleAddCandidate(school)}
                className="bg-white hover:bg-rose-100 text-rose-900 border border-rose-200 px-2.5 py-1 rounded-lg text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer shadow-2xs"
              >
                <span>[{school.district}] {school.shortName || school.name}</span>
                <Plus className="w-3 h-3 text-rose-600" />
              </button>
            ))}
          </div>
        </div>
      )}

      {shortlistedSchools.length === 0 ? (
        <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-md mx-auto space-y-3">
          <div className="w-14 h-14 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center mx-auto">
            <BookmarkCheck className="w-7 h-7" />
          </div>
          <h3 className="font-bold text-slate-800">择校夹目前为空</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            您可以点击上方“添加备选学校”挑选心仪学校，或直接一键导入 4 所经典候选名校进行多维度测算。
          </p>
          <div className="pt-2 flex items-center justify-center gap-3">
            <button
              onClick={() => setIsAdding(true)}
              className="bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-1 cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              挑选添加学校
            </button>
            <button
              onClick={handleLoadSample}
              className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-xl flex items-center gap-1 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              一键导入 4 所经典名校
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          
          {/* Weight Adjustment Panel */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-rose-600" />
                <h3 className="font-bold text-slate-900 text-sm">
                  家庭决策权重偏好调节 (拖动滑块自定义您的核心诉求)
                </h3>
              </div>
              <span className="text-xs text-slate-400">
                实时计算综合匹配度
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
              
              {/* Commute */}
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-blue-600" />
                    通勤接送距离
                  </span>
                  <span className="font-bold text-blue-700">{weights.commute}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={weights.commute}
                  onChange={(e) => setWeights({ ...weights, commute: parseInt(e.target.value) })}
                  className="w-full accent-blue-600"
                />
              </div>

              {/* Budget */}
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                    学费经济负担
                  </span>
                  <span className="font-bold text-emerald-700">{weights.budget}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={weights.budget}
                  onChange={(e) => setWeights({ ...weights, budget: parseInt(e.target.value) })}
                  className="w-full accent-emerald-600"
                />
              </div>

              {/* Academic */}
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
                    学术硬核与对口初中
                  </span>
                  <span className="font-bold text-indigo-700">{weights.academic}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={weights.academic}
                  onChange={(e) => setWeights({ ...weights, academic: parseInt(e.target.value) })}
                  className="w-full accent-indigo-600"
                />
              </div>

              {/* Bilingual */}
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                    <Globe2 className="w-3.5 h-3.5 text-purple-600" />
                    外教配置与双语视野
                  </span>
                  <span className="font-bold text-purple-700">{weights.bilingual}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={weights.bilingual}
                  onChange={(e) => setWeights({ ...weights, bilingual: parseInt(e.target.value) })}
                  className="w-full accent-purple-600"
                />
              </div>

              {/* Holistic */}
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                    <HeartHandshake className="w-3.5 h-3.5 text-rose-600" />
                    素质美育与校园硬件
                  </span>
                  <span className="font-bold text-rose-700">{weights.holistic}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={weights.holistic}
                  onChange={(e) => setWeights({ ...weights, holistic: parseInt(e.target.value) })}
                  className="w-full accent-rose-600"
                />
              </div>

              {/* Happiness */}
              <div className="bg-slate-50 p-3 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-700 flex items-center gap-1.5">
                    <Smile className="w-3.5 h-3.5 text-amber-600" />
                    身心快乐与睡眠健康
                  </span>
                  <span className="font-bold text-amber-700">{weights.happiness}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50"
                  value={weights.happiness}
                  onChange={(e) => setWeights({ ...weights, happiness: parseInt(e.target.value) })}
                  className="w-full accent-amber-600"
                />
              </div>

            </div>
          </div>

          {/* Ranking Board */}
          <div className="space-y-4">
            <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
              <Trophy className="w-5 h-5 text-amber-500" />
              加权综合匹配度排行榜 (由高到低)
            </h3>

            <div className="space-y-3">
              {evaluatedSchools.map((item, index) => {
                const isCompared = comparedSchools.some(c => c.id === item.school.id);
                const hasNote = Boolean(schoolNotes[item.school.id]);

                return (
                  <div 
                    key={item.school.id}
                    className={`bg-white rounded-2xl border p-5 transition-all shadow-sm ${
                      index === 0 
                        ? 'border-amber-300 ring-2 ring-amber-400/20 bg-gradient-to-r from-amber-50/20 to-white' 
                        : 'border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      
                      {/* Left: School basic info */}
                      <div className="flex items-start gap-3">
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-sm shrink-0 ${
                          index === 0 
                            ? 'bg-amber-400 text-slate-950 shadow-sm' 
                            : index === 1 
                            ? 'bg-slate-200 text-slate-700' 
                            : 'bg-slate-100 text-slate-500'
                        }`}>
                          #{index + 1}
                        </div>

                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <h4 
                              onClick={() => onSelectSchool(item.school)}
                              className="font-bold text-slate-900 hover:text-blue-600 cursor-pointer text-base"
                            >
                              {item.school.name}
                            </h4>
                            <span className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                              {item.school.district}
                            </span>
                            <span className="text-xs bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 rounded font-medium">
                              {item.school.tier}
                            </span>
                          </div>

                          <div className="text-xs text-slate-500 mt-1 flex flex-wrap gap-x-3 gap-y-1">
                            <span>学费: <strong className="text-slate-800">{item.school.tuition.isFree ? '公办免费' : `${item.school.tuition.amount.toLocaleString()} ${item.school.tuition.unit}`}</strong></span>
                            <span>风格: <strong className="text-slate-800">{item.school.academic.rigorLevel.split(' ')[0]}</strong></span>
                            <span>对口: <strong className="text-slate-800">{item.school.downstream.targetSchools[0]}</strong></span>
                          </div>
                        </div>
                      </div>

                      {/* Right: Score & Actions */}
                      <div className="flex items-center gap-4 self-end sm:self-center">
                        <div className="text-right">
                          <div className="text-xs text-slate-400">综合决策得分</div>
                          <div className="text-2xl font-black text-blue-600 tracking-tight">
                            {item.finalScore}
                            <span className="text-xs font-normal text-slate-400 ml-1">分</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1.5">
                          {onNavigateToSimulator && (
                            <button
                              onClick={() => onNavigateToSimulator(item.school)}
                              className="p-2 rounded-xl border border-slate-200 text-slate-500 hover:text-emerald-700 hover:bg-emerald-50 hover:border-emerald-200 transition-colors"
                              title="测算入户录取顺位"
                            >
                              <Calculator className="w-4 h-4" />
                            </button>
                          )}

                          <button
                            onClick={() => onToggleCompare(item.school)}
                            className={`p-2 rounded-xl border text-xs font-medium transition-colors ${
                              isCompared
                                ? 'bg-indigo-50 border-indigo-200 text-indigo-700'
                                : 'bg-white border-slate-200 text-slate-500 hover:border-slate-300'
                            }`}
                            title={isCompared ? '已在对比池' : '加入对比'}
                          >
                            <Scale className="w-4 h-4" />
                          </button>

                          <button
                            onClick={() => onRemoveSchool(item.school.id)}
                            className="p-2 rounded-xl border border-slate-200 text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors"
                            title="从择校夹移出"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                    </div>

                    {/* Progress Bar of Sub-scores */}
                    <div className="mt-3 pt-3 border-t border-slate-100 grid grid-cols-3 sm:grid-cols-6 gap-2 text-[11px] text-slate-500">
                      <div>
                        通勤: <strong className="text-slate-700">{item.dimensionScores.commuteScore}</strong>
                      </div>
                      <div>
                        预算: <strong className="text-slate-700">{item.dimensionScores.budgetScore}</strong>
                      </div>
                      <div>
                        学术: <strong className="text-slate-700">{item.dimensionScores.academicScore}</strong>
                      </div>
                      <div>
                        外教: <strong className="text-slate-700">{item.dimensionScores.bilingualScore}</strong>
                      </div>
                      <div>
                        素质: <strong className="text-slate-700">{item.dimensionScores.holisticScore}</strong>
                      </div>
                      <div>
                        快乐: <strong className="text-slate-700">{item.dimensionScores.happinessScore}</strong>
                      </div>
                    </div>

                    {/* Household Note Box */}
                    <div className="mt-3 pt-2">
                      {editingNoteId === item.school.id ? (
                        <div className="flex items-center gap-2 text-xs">
                          <input
                            type="text"
                            value={currentNoteText}
                            onChange={(e) => setCurrentNoteText(e.target.value)}
                            placeholder="输入家庭备忘笔记，如：离外公家近、对口初中好、打算4月去探校..."
                            className="flex-1 bg-slate-50 border border-slate-300 rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-rose-500"
                          />
                          <button
                            onClick={() => handleSaveNote(item.school.id)}
                            className="bg-rose-600 text-white font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1"
                          >
                            <Save className="w-3.5 h-3.5" /> 保存
                          </button>
                          <button
                            onClick={() => setEditingNoteId(null)}
                            className="text-slate-400 hover:text-slate-600 px-2"
                          >
                            取消
                          </button>
                        </div>
                      ) : (
                        <div className="flex items-center justify-between text-xs bg-slate-50/70 px-3 py-1.5 rounded-xl border border-slate-100">
                          <div className="text-slate-600 truncate flex items-center gap-1.5">
                            <span className="text-rose-500 font-bold">📝 备忘：</span>
                            <span className={hasNote ? 'text-slate-800' : 'text-slate-400 italic'}>
                              {schoolNotes[item.school.id] || '暂无家庭备忘笔记，点击添加'}
                            </span>
                          </div>
                          <button
                            onClick={() => {
                              setEditingNoteId(item.school.id);
                              setCurrentNoteText(schoolNotes[item.school.id] || '');
                            }}
                            className="text-slate-400 hover:text-slate-700 flex items-center gap-0.5 text-[11px] ml-2 shrink-0"
                          >
                            <Edit3 className="w-3 h-3" /> 编辑
                          </button>
                        </div>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>
          </div>

        </div>
      )}

    </div>
  );
};
