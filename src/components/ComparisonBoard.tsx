import React, { useState } from 'react';
import { School } from '../types/school';
import { SCHOOLS_DATA, DISTRICTS_LIST } from '../data/schools';
import { 
  formatTuition, 
  getTierBadgeClass, 
  getTypeBadgeClass, 
  getRigorBadgeClass 
} from '../utils/helpers';
import { 
  Scale, 
  Plus, 
  Trash2, 
  Star, 
  GraduationCap, 
  BookOpen, 
  ShieldAlert, 
  Users, 
  Clock, 
  ThumbsUp, 
  ThumbsDown, 
  Check, 
  ChevronRight,
  ArrowRightLeft,
  Search,
  Filter,
  X
} from 'lucide-react';

interface ComparisonBoardProps {
  comparedSchools: School[];
  shortlistedSchools?: School[];
  onRemoveSchool: (schoolId: string) => void;
  onAddSchool: (school: School) => void;
  onClearAll: () => void;
  onSelectSchool: (school: School) => void;
  onNavigateToSimulator: (school: School) => void;
  allSchools?: School[];
}

export const ComparisonBoard: React.FC<ComparisonBoardProps> = ({
  comparedSchools,
  shortlistedSchools = [],
  onRemoveSchool,
  onAddSchool,
  onClearAll,
  onSelectSchool,
  onNavigateToSimulator,
  allSchools
}) => {
  const [isAdding, setIsAdding] = useState<boolean>(false);
  const [addSearchQuery, setAddSearchQuery] = useState<string>('');
  const [addDistrictFilter, setAddDistrictFilter] = useState<string>('all');
  const [selectedCandidateId, setSelectedCandidateId] = useState<string>('');

  const pool = (allSchools || SCHOOLS_DATA).filter(school => school.verificationStatus === 'verified');

  const unaddedShortlisted = React.useMemo(() => {
    return shortlistedSchools.filter((s: School) => s.verificationStatus === 'verified' && !comparedSchools.some(c => c.id === s.id));
  }, [shortlistedSchools, comparedSchools]);

  const availableCandidates = React.useMemo(() => {
    return pool.filter(s => {
      if (comparedSchools.some(c => c.id === s.id)) return false;
      if (addDistrictFilter !== 'all' && s.district !== addDistrictFilter) return false;
      if (addSearchQuery.trim()) {
        const q = addSearchQuery.toLowerCase().trim();
        const matchName = s.name.toLowerCase().includes(q) || (s.shortName && s.shortName.toLowerCase().includes(q));
        const matchDistrict = s.district.toLowerCase().includes(q);
        const matchTier = s.tier.toLowerCase().includes(q);
        if (!matchName && !matchDistrict && !matchTier) return false;
      }
      return true;
    });
  }, [pool, comparedSchools, addDistrictFilter, addSearchQuery]);

  const handleAddCandidate = (school?: School) => {
    const target = school || pool.find(s => s.id === selectedCandidateId);
    if (target) {
      onAddSchool(target);
      setSelectedCandidateId('');
      setAddSearchQuery('');
      if (comparedSchools.length + 1 >= 4) {
        setIsAdding(false);
      }
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              多校深度 PK 对比器
              <span className="text-xs bg-indigo-50 text-indigo-700 border border-indigo-200 px-2 py-0.5 rounded-full font-semibold">
                当前已选 {comparedSchools.length} / 4 所
              </span>
            </h2>
            <p className="text-xs text-slate-500">
              仅对已完成来源核验的字段进行横向比较；未核验学校不进入比较结果
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {comparedSchools.length < 4 && (
            <button
              onClick={() => setIsAdding(true)}
              className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-3.5 py-2 rounded-xl shadow-sm transition-all"
            >
              <Plus className="w-4 h-4" />
              添加对比学校
            </button>
          )}

          {comparedSchools.length > 0 && (
            <button
              onClick={onClearAll}
              className="flex items-center gap-1 text-xs text-slate-500 hover:text-rose-600 px-3 py-2 rounded-xl hover:bg-rose-50 transition-colors border border-slate-200"
            >
              <Trash2 className="w-3.5 h-3.5" />
              清空对比池
            </button>
          )}
        </div>
      </div>

      {/* Shortlist Quick Add Bar */}
      {unaddedShortlisted.length > 0 && comparedSchools.length < 4 && (
        <div className="bg-gradient-to-r from-amber-50 via-orange-50/40 to-amber-50/70 border border-amber-200/80 p-3.5 rounded-2xl flex flex-wrap items-center justify-between gap-3 text-xs shadow-2xs">
          <div className="flex items-center gap-2 text-amber-950 font-bold">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500 shrink-0" />
            <span>心仪备选快速导入 ({unaddedShortlisted.length} 所)</span>
            <span className="text-[11px] text-amber-800 font-normal hidden md:inline">点击一键加入对比：</span>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
            {unaddedShortlisted.slice(0, 6).map((school: School) => (
              <button
                key={school.id}
                onClick={() => onAddSchool(school)}
                className="bg-white hover:bg-amber-100 text-slate-800 hover:text-amber-950 border border-amber-300 px-2.5 py-1 rounded-xl text-xs font-semibold flex items-center gap-1 shadow-2xs transition-all cursor-pointer"
              >
                <span>{school.shortName || school.name}</span>
                <Plus className="w-3 h-3 text-amber-600" />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Enhanced Add School Modal / Bar */}
      {isAdding && (
        <div className="bg-indigo-50/80 border border-indigo-200 p-4 sm:p-5 rounded-2xl space-y-3 animate-fadeIn shadow-xs">
          <div className="flex items-center justify-between">
            <div className="text-xs sm:text-sm font-bold text-indigo-950 flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-indigo-600" />
              挑选对比对象（剩余可加 {4 - comparedSchools.length} 所）：
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
                placeholder="快速搜索学校名称（如：高一、逸夫、向阳、世外）..."
                className="w-full pl-9 pr-3 py-2 bg-white border border-indigo-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>

            {/* District Filter */}
            <select
              value={addDistrictFilter}
              onChange={(e) => setAddDistrictFilter(e.target.value)}
              className="bg-white border border-indigo-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-800"
            >
              <option value="all">全部行政区</option>
              {DISTRICTS_LIST.map(d => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>

            {/* Select dropdown */}
            <select
              value={selectedCandidateId}
              onChange={(e) => setSelectedCandidateId(e.target.value)}
              className="bg-white border border-indigo-200 rounded-xl px-3 py-2 text-xs font-medium text-slate-800 flex-1"
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
              className="bg-indigo-600 hover:bg-indigo-700 disabled:opacity-50 text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all shrink-0 cursor-pointer"
            >
              确认加入
            </button>
          </div>

          {/* Quick Filter Chips (first 8 matches) */}
          {addSearchQuery.trim() && availableCandidates.length > 0 && (
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              <span className="text-[11px] text-slate-500 font-medium">快速点击添加：</span>
              {availableCandidates.slice(0, 8).map(school => (
                <button
                  key={school.id}
                  onClick={() => handleAddCandidate(school)}
                  className="bg-white hover:bg-indigo-100 text-indigo-900 border border-indigo-200 px-2.5 py-1 rounded-lg text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>[{school.district}] {school.shortName || school.name}</span>
                  <Plus className="w-3 h-3 text-indigo-600" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Comparison Content */}
      {comparedSchools.length === 0 ? (
        <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-lg mx-auto space-y-4 shadow-sm">
          <div className="w-16 h-16 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto">
            <ArrowRightLeft className="w-8 h-8" />
          </div>
          <h3 className="font-bold text-slate-900 text-lg">对比池暂无学校</h3>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
            前往“学校信息库”或在上方点击“添加对比学校”，选择 2～4 所心仪学校，系统将为您生成详尽的多维对比矩阵。
          </p>
          <div className="pt-2">
            <button
              onClick={() => {
                // Preset two benchmark schools to let user experience immediately
                onAddSchool(SCHOOLS_DATA[2]); // 世外小学
                onAddSchool(SCHOOLS_DATA[5]); // 汇师小学
              }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-sm hover:shadow"
            >
              ⚡ 快速体验经典对决 (世外小学 VS 汇师小学)
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[700px]">
            
            {/* Table Header: School Cards */}
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80">
                <th className="p-4 w-48 text-xs font-bold text-slate-400 uppercase tracking-wider sticky left-0 bg-slate-50/95 backdrop-blur z-10">
                  指标对比项
                </th>
                {comparedSchools.map((school) => (
                  <th key={school.id} className="p-4 min-w-[220px] align-top">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${getTierBadgeClass(school.tier)}`}>
                          {school.tier}
                        </span>
                        <button
                          onClick={() => onRemoveSchool(school.id)}
                          title="移出对比"
                          className="text-slate-400 hover:text-rose-600 p-1 rounded-md hover:bg-rose-50"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <h4 
                        onClick={() => onSelectSchool(school)}
                        className="font-bold text-slate-900 hover:text-blue-600 cursor-pointer text-sm leading-snug line-clamp-2"
                      >
                        {school.name}
                      </h4>

                      <div className="text-[11px] text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200 line-clamp-1">
                        {school.badgeTag}
                      </div>

                      <div className="pt-2 flex items-center gap-1.5">
                        <button
                          onClick={() => onNavigateToSimulator(school)}
                          className="w-full text-center bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-[11px] font-semibold py-1 rounded-lg transition-colors"
                        >
                          测算此校录取顺位
                        </button>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 text-xs">
              
              {/* SECTION: 基础与经济 */}
              <tr className="bg-slate-50/50">
                <td colSpan={comparedSchools.length + 1} className="p-2.5 font-bold text-slate-800 text-xs uppercase bg-slate-100/60 sticky left-0">
                  一、基本属性与家庭预算支出
                </td>
              </tr>

              <tr>
                <td className="p-4 font-semibold text-slate-500 sticky left-0 bg-white">所属区域</td>
                {comparedSchools.map((s) => (
                  <td key={s.id} className="p-4 font-medium text-slate-800">
                    {s.district}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-4 font-semibold text-slate-500 sticky left-0 bg-white">办学性质</td>
                {comparedSchools.map((s) => (
                  <td key={s.id} className="p-4">
                    <span className={`inline-block px-2 py-0.5 rounded-full border text-[11px] font-semibold ${getTypeBadgeClass(s.type)}`}>
                      {s.type === 'public' ? '公办 (政府办学)' : s.type === 'private' ? '民办 (优质自主)' : s.type === 'bilingual' ? '双语民办' : '国际学校'}
                    </span>
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-4 font-semibold text-slate-500 sticky left-0 bg-white">学费标准</td>
                {comparedSchools.map((s) => (
                  <td key={s.id} className="p-4">
                    <span className={`font-bold text-sm ${s.tuition.isFree ? 'text-emerald-600' : 'text-slate-900'}`}>
                      {formatTuition(s)}
                    </span>
                    {s.tuition.note && (
                      <span className="block text-[10px] text-slate-400 mt-0.5 leading-tight">{s.tuition.note}</span>
                    )}
                  </td>
                ))}
              </tr>

              {/* SECTION: 招生与学区 */}
              <tr className="bg-slate-50/50">
                <td colSpan={comparedSchools.length + 1} className="p-2.5 font-bold text-slate-800 text-xs uppercase bg-slate-100/60 sticky left-0">
                  二、招生门槛与录取顺位要求
                </td>
              </tr>

              <tr>
                <td className="p-4 font-semibold text-slate-500 sticky left-0 bg-white">招生范围</td>
                {comparedSchools.map((s) => (
                  <td key={s.id} className="p-4 font-medium text-slate-700">
                    {s.enrollment.scope}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-4 font-semibold text-slate-500 sticky left-0 bg-white">建议入户年限</td>
                {comparedSchools.map((s) => (
                  <td key={s.id} className="p-4">
                    <strong className="text-blue-700 font-bold">
                      {s.enrollment.hukouYearsRequired ? `需入户满 ${s.enrollment.hukouYearsRequired} 年以上` : '摇号派位或当年对口'}
                    </strong>
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-4 font-semibold text-slate-500 sticky left-0 bg-white">五年一户限制</td>
                {comparedSchools.map((s) => (
                  <td key={s.id} className="p-4">
                    {s.enrollment.hasFiveYearRule ? (
                      <span className="text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded text-[11px] font-semibold">
                        严格执行五年一户
                      </span>
                    ) : (
                      <span className="text-slate-400">无此限制</span>
                    )}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-4 font-semibold text-slate-500 sticky left-0 bg-white">录取难度与超额预警</td>
                {comparedSchools.map((s) => (
                  <td key={s.id} className="p-4">
                    <span className="font-semibold text-slate-800 block">
                      {s.enrollment.admissionDifficulty}
                    </span>
                    {s.enrollment.oversubscribedHistory && (
                      <span className="text-amber-700 bg-amber-50 text-[10px] px-1.5 py-0.5 rounded mt-1 inline-block border border-amber-200">
                        ⚠️ 近年常发超额统筹预警
                      </span>
                    )}
                  </td>
                ))}
              </tr>

              {/* SECTION: 教学与课程 */}
              <tr className="bg-slate-50/50">
                <td colSpan={comparedSchools.length + 1} className="p-2.5 font-bold text-slate-800 text-xs uppercase bg-slate-100/60 sticky left-0">
                  三、教学模式与学术特色
                </td>
              </tr>

              <tr>
                <td className="p-4 font-semibold text-slate-500 sticky left-0 bg-white">学术节奏风格</td>
                {comparedSchools.map((s) => (
                  <td key={s.id} className="p-4">
                    <span className={`inline-block px-2 py-0.5 rounded border font-semibold ${getRigorBadgeClass(s.academic.rigorLevel)}`}>
                      {s.academic.rigorLevel}
                    </span>
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-4 font-semibold text-slate-500 sticky left-0 bg-white">班级规模与外教</td>
                {comparedSchools.map((s) => (
                  <td key={s.id} className="p-4 space-y-1">
                    <div className="flex items-center gap-1 text-slate-700 font-medium">
                      <Users className="w-3.5 h-3.5 text-slate-400" />
                      约 {s.academic.classSize} 人/班
                    </div>
                    <div className="text-[11px] text-blue-700 font-medium">
                      外教：{s.academic.foreignTeacherRatio || '基础配置'}
                    </div>
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-4 font-semibold text-slate-500 sticky left-0 bg-white">核心特色课程</td>
                {comparedSchools.map((s) => (
                  <td key={s.id} className="p-4">
                    <div className="flex flex-wrap gap-1">
                      {s.academic.curriculum.map((c, i) => (
                        <span key={i} className="bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded text-[10px]">
                          {c}
                        </span>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>

              {/* SECTION: 升学出口 */}
              <tr className="bg-slate-50/50">
                <td colSpan={comparedSchools.length + 1} className="p-2.5 font-bold text-slate-800 text-xs uppercase bg-slate-100/60 sticky left-0">
                  四、升学出口与通道去向
                </td>
              </tr>

              <tr>
                <td className="p-4 font-semibold text-slate-500 sticky left-0 bg-white">升学主路线</td>
                {comparedSchools.map((s) => (
                  <td key={s.id} className="p-4">
                    <span className="font-bold text-slate-900 flex items-center gap-1">
                      <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                      {s.downstream.routeType}
                    </span>
                    {s.downstream.directPassRatio && (
                      <span className="text-[11px] text-indigo-600 block mt-1">
                        {s.downstream.directPassRatio}
                      </span>
                    )}
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-4 font-semibold text-slate-500 sticky left-0 bg-white">对口或核心初中出口</td>
                {comparedSchools.map((s) => (
                  <td key={s.id} className="p-4">
                    <ul className="space-y-1 text-slate-700 font-medium">
                      {s.downstream.targetSchools.map((target, idx) => (
                        <li key={idx} className="flex items-center gap-1">
                          <span className="w-1 h-1 rounded-full bg-blue-500 shrink-0" />
                          <span>{target}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>

              {/* SECTION: 口碑与评价 */}
              <tr className="bg-slate-50/50">
                <td colSpan={comparedSchools.length + 1} className="p-2.5 font-bold text-slate-800 text-xs uppercase bg-slate-100/60 sticky left-0">
                  五、家长真实口碑与作业负担
                </td>
              </tr>

              <tr>
                <td className="p-4 font-semibold text-slate-500 sticky left-0 bg-white">家长评分 & 作业</td>
                {comparedSchools.map((s) => (
                  <td key={s.id} className="p-4 space-y-1">
                    <div className="flex items-center gap-1 font-bold text-slate-900 text-sm">
                      <Star className="w-4 h-4 fill-amber-400 text-amber-500" />
                      {s.reviews.parentRating} 分
                    </div>
                    <div className="text-[11px] text-slate-500">
                      作业量：<span className="font-semibold text-slate-700">{s.reviews.homeworkDuration}</span>
                    </div>
                  </td>
                ))}
              </tr>

              <tr>
                <td className="p-4 font-semibold text-slate-500 sticky left-0 bg-white">家长访谈原声</td>
                {comparedSchools.map((s) => (
                  <td key={s.id} className="p-4">
                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200 text-slate-700 italic text-[11px] leading-relaxed">
                      “{s.reviews.parentFeedbackSample}”
                    </div>
                  </td>
                ))}
              </tr>

            </tbody>
          </table>
        </div>
      )}

    </div>
  );
};
