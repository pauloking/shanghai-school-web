import React, { useState, useEffect } from 'react';
import { School } from '../types/school';
import { 
  formatTuition, 
  getTierBadgeClass, 
  getTypeBadgeClass, 
  getRigorBadgeClass 
} from '../utils/helpers';
import { 
  X, 
  MapPin, 
  Calendar, 
  BookOpen, 
  GraduationCap, 
  ShieldAlert, 
  Users, 
  Clock, 
  Star, 
  ThumbsUp, 
  ThumbsDown, 
  CheckCircle2, 
  Scale, 
  Bookmark, 
  Calculator,
  Compass,
  ExternalLink,
  Globe,
  ShieldCheck,
  FileText
} from 'lucide-react';
import { getSchoolPolicySources, DISTRICT_OFFICIAL_PORTALS } from '../data/officialPortals';
import { MiddleSchoolProfile } from '../data/middleSchools';
import { MiddleSchoolBadges } from './MiddleSchoolBadge';
import { OversubscribedFallbackCard } from './OversubscribedFallbackCard';

interface SchoolDetailModalProps {
  school: School | null;
  initialTab?: 'academic' | 'admission' | 'downstream' | 'reviews';
  onClose: () => void;
  isCompared: boolean;
  onToggleCompare: (school: School) => void;
  isShortlisted: boolean;
  onToggleShortlist: (school: School) => void;
  onSimulateAdmission: (school: School) => void;
  onSelectMiddleSchool?: (school: MiddleSchoolProfile) => void;
}

export const SchoolDetailModal: React.FC<SchoolDetailModalProps> = ({
  school,
  initialTab = 'academic',
  onClose,
  isCompared,
  onToggleCompare,
  isShortlisted,
  onToggleShortlist,
  onSimulateAdmission,
  onSelectMiddleSchool
}) => {

  const [activeTab, setActiveTab] = useState<'academic' | 'admission' | 'downstream' | 'reviews'>(initialTab);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab, school]);

  if (!school) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header with Title and badges */}
        <div className="p-6 pb-4 border-b border-slate-100 bg-gradient-to-b from-blue-50/50 to-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2.5 pr-10">
            {school.verificationStatus === 'verified' && <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${getTierBadgeClass(school.tier)}`}>
              {school.tier}
            </span>}
            <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${getTypeBadgeClass(school.type)}`}>
              {school.verificationStatus === 'verified' ? (school.type === 'public' ? '公办' : school.type === 'private' ? '民办' : school.type === 'bilingual' ? '双语民办' : '国际学校') : '性质待核验'}
            </span>
            <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${
              school.stage === 'kindergarten' 
                ? 'bg-pink-100 text-pink-700' 
                : school.stage === 'middle' 
                ? 'bg-purple-100 text-purple-700' 
                : 'bg-blue-100 text-blue-700'
            }`}>
              {school.stage === 'kindergarten' ? '幼儿园 (入园)' : school.stage === 'middle' ? '初中 (小升初)' : '小学 (幼升小)'}
            </span>
            {school.verificationStatus === 'verified' && school.establishedYear > 0 && <span className="text-xs text-slate-500 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              创校于 {school.establishedYear} 年
            </span>}
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            {school.name}
          </h2>

          {school.verificationStatus === 'verified' && (
            <div className="mt-2 text-xs text-amber-900 bg-amber-50 border border-amber-200 px-3 py-1.5 rounded-xl font-medium inline-block">
              ⭐ {school.badgeTag}
            </div>
          )}

          {school.verificationStatus !== 'verified' && (
            <div className="mt-3 text-xs text-amber-950 bg-amber-50 border border-amber-200 px-3 py-2 rounded-xl leading-relaxed">
              📜 当前为历史学校档案，尚未将招生、学费、班额、口碑等字段逐项绑定官方原文或可追溯来源。请勿将其作为报名或置业依据。
            </div>
          )}

          <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-2">
            <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>{school.district} · {school.address}</span>
          </div>

          {/* Policy Quick Glance Banner (招生政策核心速览条) */}
          {school.verificationStatus === 'verified' && <div className="mt-3 bg-blue-50/70 border border-blue-200/80 rounded-2xl p-3 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
            <div>
              <span className="text-slate-400 block text-[11px] mb-0.5">招生与户籍范围</span>
              <strong className="text-slate-800 truncate block">{school.enrollment.scope}</strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px] mb-0.5">五年一户审查</span>
              <strong className={school.enrollment.hasFiveYearRule ? 'text-red-600' : 'text-slate-600'}>
                {school.enrollment.hasFiveYearRule ? '严格执行（五年限一户）' : '未执行五年一户'}
              </strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px] mb-0.5">建议落户年限</span>
              <strong className="text-blue-700">
                {school.enrollment.hukouYearsRequired ? `需满 ${school.enrollment.hukouYearsRequired} 年以上` : '人户一致当年度'}
              </strong>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px] mb-0.5">录取排位门槛</span>
              <strong className="text-amber-800 truncate block" title={school.enrollment.admissionDifficulty}>
                {school.enrollment.admissionDifficulty}
              </strong>
            </div>
            
            {/* Policy Source Glance Link */}
            <div className="col-span-2 sm:col-span-4 pt-2 mt-0.5 border-t border-blue-200/60 flex items-center justify-between text-[11px]">
              <div className="flex items-center gap-1.5 text-blue-900 truncate">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>官方核验入口：<strong>{DISTRICT_OFFICIAL_PORTALS[school.district]?.bureauName || '上海市教育委员会'}</strong></span>
              </div>
              <button
                onClick={() => setActiveTab('admission')}
                className="text-blue-700 font-semibold hover:underline flex items-center gap-0.5 shrink-0 ml-2"
              >
                查看官方出处与公示网址 &rarr;
              </button>
            </div>
          </div>}

          {/* Quick Tabs */}
          <div className="flex items-center gap-2 sm:gap-4 mt-5 border-b border-slate-200 text-sm">
            <button
              onClick={() => setActiveTab('academic')}
              className={`pb-2.5 font-medium border-b-2 text-xs sm:text-sm transition-colors ${
                activeTab === 'academic'
                  ? 'border-blue-600 text-blue-600 font-semibold'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              🏫 办学概况与教学
            </button>
            <button
              onClick={() => setActiveTab('admission')}
              className={`pb-2.5 font-medium border-b-2 text-xs sm:text-sm transition-colors ${
                activeTab === 'admission'
                  ? 'border-blue-600 text-blue-600 font-semibold'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              📋 招生规则与学区
            </button>
            <button
              onClick={() => setActiveTab('downstream')}
              className={`pb-2.5 font-medium border-b-2 text-xs sm:text-sm transition-colors ${
                activeTab === 'downstream'
                  ? 'border-blue-600 text-blue-600 font-semibold'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              {school.stage === 'middle' ? '🎯 中考升学与去向' : '🚀 升学出口与对口'}
            </button>
            <button
              onClick={() => setActiveTab('reviews')}
              className={`pb-2.5 font-medium border-b-2 text-xs sm:text-sm transition-colors ${
                activeTab === 'reviews'
                  ? 'border-blue-600 text-blue-600 font-semibold'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              💬 家长评价与口碑
            </button>
          </div>
        </div>

        {/* Modal Body Tab Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm flex-1">
          {school.verificationStatus !== 'verified' ? (
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl text-sm text-slate-700 leading-relaxed space-y-2">
              <div className="font-bold text-slate-900">学校基本信息已保留，其他详细字段暂停展示</div>
              <p>当前档案的收费、班额、课程、升学去向、招生难度和家长评价尚缺少逐字段可追溯来源。核验完成前，仅展示学校名称、行政区、地址和官方门户核验入口。</p>
              <p className="text-amber-800">请以学校官网、当年招生简章及所属区教育局公告为准。</p>
            </div>
          ) : <>
          
          {/* TAB 1: 办学概况与教学 */}
          {activeTab === 'academic' && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <div>
                  <span className="text-xs text-slate-400 block mb-1">学费 / 费用</span>
                  <span className="font-bold text-base text-slate-800">{formatTuition(school)}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block mb-1">每班人数</span>
                  <span className="font-bold text-base text-slate-800">约 {school.academic.classSize} 人</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block mb-1">外教配置</span>
                  <span className="font-bold text-slate-800 text-xs sm:text-sm">{school.academic.foreignTeacherRatio || '基础'}</span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 block mb-1">应试与学术节奏</span>
                  <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded border ${getRigorBadgeClass(school.academic.rigorLevel)}`}>
                    {school.academic.rigorLevel.split(' ')[0]}
                  </span>
                </div>
              </div>

              {/* 课程体系 */}
              <div>
                <h4 className="font-semibold text-slate-800 mb-2 flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-blue-600" />
                  课程体系与教学模式
                </h4>
                <div className="flex flex-wrap gap-2">
                  {school.academic.curriculum.map((c, i) => (
                    <span key={i} className="bg-blue-50 text-blue-800 border border-blue-200 px-3 py-1 rounded-lg text-xs font-medium">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* 办学特色 */}
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">办学核心亮点</h4>
                <ul className="space-y-1.5 text-slate-600">
                  {school.academic.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 作息时间 */}
              {school.academic.schedule && (
                <div className="bg-amber-50/60 border border-amber-200/70 p-3.5 rounded-xl text-xs text-amber-900 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-600 shrink-0" />
                  <span><strong>作息安排：</strong>{school.academic.schedule}</span>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: 招生规则与学区 */}
          {activeTab === 'admission' && (
            <div className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="text-xs text-slate-400 block mb-1">招生范围</span>
                  <span className="font-bold text-slate-800">{school.enrollment.scope}</span>
                </div>
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                  <span className="text-xs text-slate-400 block mb-1">录取门槛评级</span>
                  <span className="font-bold text-slate-800">{school.enrollment.admissionDifficulty}</span>
                </div>
              </div>

              {/* 关键门槛提示 */}
              <div className="p-4 rounded-2xl border bg-gradient-to-r from-slate-50 to-blue-50/40 border-blue-100 space-y-2">
                <div className="flex items-center gap-2 font-semibold text-slate-900 text-sm">
                  <ShieldAlert className="w-4 h-4 text-blue-600" />
                  录取顺位与年限重点指标
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 pt-1">
                  <div>
                    <span className="text-slate-400 block">建议入户年限：</span>
                    <strong className="text-blue-700 text-sm">{school.enrollment.hukouYearsRequired ? `需满 ${school.enrollment.hukouYearsRequired} 年以上` : '摇号派位或当年度人户一致'}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">五年一户审查：</span>
                    <strong className={school.enrollment.hasFiveYearRule ? 'text-red-600' : 'text-slate-600'}>
                      {school.enrollment.hasFiveYearRule ? '严格执行（同地址五年内限一户入学）' : '未执行五年一户限制'}
                    </strong>
                  </div>
                </div>
              </div>

              {/* 招生要求 */}
              <div>
                <h4 className="font-semibold text-slate-800 mb-2">报考资格与审核要领</h4>
                <ul className="space-y-1.5 text-slate-600 text-xs sm:text-sm">
                  {school.enrollment.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0 mt-2" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 对口地段 */}
              {school.enrollment.catchmentAreas && school.enrollment.catchmentAreas.length > 0 && (
                <div>
                  <h4 className="font-semibold text-slate-800 mb-1.5">对口划片居委 / 地段参考</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {school.enrollment.catchmentAreas.map((c, i) => (
                      <span key={i} className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded-lg text-xs">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* 超额统筹去向提示 (P1-4) */}
              <OversubscribedFallbackCard schoolId={school.id} schoolName={school.name} />

              {/* 权威政策信息来源与公示网址 (POLICY SOURCES DIRECTORY) */}
              <div className="pt-5 border-t border-slate-200 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-slate-900 text-sm flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    权威政策信息来源与公示网址
                  </h4>
                  <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 font-medium">
                    政府法定公示 · 真实可查
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  本校招生范围、居委划片、录取排位及五年一户年限均来自以下法定公报及官方平台，点击可直接跳转官方网址核验原文：
                </p>
                <div className="space-y-2.5">
                  {getSchoolPolicySources(school).map((src, idx) => (
                    <a
                      key={idx}
                      href={src.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block p-3.5 rounded-2xl border border-slate-200 bg-slate-50/80 hover:bg-white hover:border-blue-400 hover:shadow-sm transition-all"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="space-y-1.5 flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-bold text-slate-900 text-xs sm:text-sm group-hover:text-blue-600 transition-colors">
                              {src.title}
                            </span>
                            <span className="text-[10px] bg-blue-100/80 text-blue-800 font-semibold px-2 py-0.5 rounded-md">
                              {src.authority}
                            </span>
                            <span className="text-[10px] bg-slate-200/70 text-slate-600 px-1.5 py-0.5 rounded">
                              {src.publishYear} 年度
                            </span>
                          </div>
                          <div className="flex items-center gap-2 text-xs text-slate-500 flex-wrap">
                            <span className="font-mono text-slate-600 font-medium">📄 {src.documentName}</span>
                            <span className="text-slate-300">·</span>
                            <span className="text-blue-600 font-mono text-[11px] group-hover:underline truncate max-w-xs sm:max-w-md">
                              {src.url}
                            </span>
                          </div>
                          {src.description && (
                            <p className="text-xs text-slate-600 bg-white/80 p-2 rounded-xl border border-slate-100 leading-relaxed">
                              {src.description}
                            </p>
                          )}
                        </div>
                        <div className="p-2 rounded-xl bg-white border border-slate-200 group-hover:border-blue-300 text-slate-400 group-hover:text-blue-600 transition-colors shrink-0 mt-0.5">
                          <ExternalLink className="w-4 h-4" />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: 升学出口 / 中考去向 */}
          {activeTab === 'downstream' && (
            <div className="space-y-5">
              {school.stage === 'middle' ? (
                /* Middle School Zhongkao & High School Success Panel */
                <div className="space-y-4">
                  {/* Admission Mode & Route Banner */}
                  <div className="p-4 bg-purple-50/70 rounded-2xl border border-purple-200/80 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-purple-700 font-bold uppercase tracking-wider">
                        小升初录取模式与学籍机制
                      </span>
                      <span className="text-xs bg-purple-200/80 text-purple-800 font-semibold px-2 py-0.5 rounded-full">
                        {school.middleSchoolDetails?.admissionMode || '学籍对口直升'}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      {school.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {school.downstream.routeType} · {school.downstream.directPassRatio || '中考自主招生 / 名额分配 / 统一批次'}
                    </p>
                  </div>

                  {/* Quota Allocation Callout */}
                  {school.middleSchoolDetails?.quotaAllocationScale && (
                    <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-2xl space-y-1.5 text-xs">
                      <div className="flex items-center gap-1.5 font-bold text-amber-900">
                        <span>🏆 新中考“名额分配到校”与指标实力</span>
                      </div>
                      <p className="text-amber-950 leading-relaxed">
                        {school.middleSchoolDetails.quotaAllocationScale}
                      </p>
                      <div className="text-[11px] text-amber-800/80 pt-1 border-t border-amber-200/60">
                        ⚖️ <strong>市教委铁律：</strong>考生必须在初中学校<strong>连续在籍在读满3学年</strong>方具备名额分配到校资格；中途转学或空挂学籍将自动丧失到校指标。
                      </div>
                    </div>
                  )}

                  {/* High School Feeder & Four Majors */}
                  {school.middleSchoolDetails?.seniorHighDestinations && (
                    <div className="p-4 bg-blue-50/60 border border-blue-200/80 rounded-2xl space-y-3">
                      <h4 className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-blue-600" />
                        <span>四校八大与高中升学去向实力</span>
                      </h4>
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="bg-white p-3 rounded-xl border border-blue-100 shadow-2xs">
                          <span className="text-slate-400 block text-[11px] mb-0.5">四校拔尖率 / 头部出口</span>
                          <strong className="text-indigo-700 text-sm">{school.middleSchoolDetails.seniorHighDestinations.tierFourRatio}</strong>
                        </div>
                        <div className="bg-white p-3 rounded-xl border border-blue-100 shadow-2xs">
                          <span className="text-slate-400 block text-[11px] mb-0.5">市重点高中达线率</span>
                          <strong className="text-blue-700 text-sm">{school.middleSchoolDetails.seniorHighDestinations.eightMajorRatio}</strong>
                        </div>
                      </div>
                      {(school.middleSchoolDetails.seniorHighDestinations.featuredSeniorHighs?.length ?? 0) > 0 && (
                        <div>
                          <span className="text-xs font-semibold text-slate-600 block mb-1.5">主要输送高中名校：</span>
                          <div className="flex flex-wrap gap-1.5">
                            {school.middleSchoolDetails.seniorHighDestinations.featuredSeniorHighs!.map((hs, i) => (
                              <span key={i} className="px-2.5 py-1 bg-white text-blue-900 border border-blue-200 rounded-lg text-xs font-semibold shadow-2xs">
                                🎓 {hs}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Feeder Primaries */}
                  {school.middleSchoolDetails?.feederPrimaries && school.middleSchoolDetails.feederPrimaries.length > 0 && (
                    <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl space-y-2">
                      <h4 className="font-bold text-slate-800 text-xs sm:text-sm">
                        🏫 生源对口小学与划片范围
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {school.middleSchoolDetails.feederPrimaries.map((fp, i) => (
                          <span key={i} className="px-2.5 py-1 bg-white text-slate-700 border border-slate-200 rounded-lg text-xs font-medium">
                            {fp}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Target Schools fallback */}
                  {school.downstream.targetSchools?.length > 0 && (
                    <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl space-y-1.5 text-xs">
                      <span className="font-semibold text-slate-700 block">校内重点升学通道与目标：</span>
                      <div className="flex flex-wrap gap-1.5">
                        {school.downstream.targetSchools.map((target, idx) => (
                          <span key={idx} className="px-2 py-0.5 bg-white border border-slate-200 rounded text-slate-700 font-medium">
                            {target}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                /* Primary & Kindergarten Downstream */
                <>
                  <div className="p-4 bg-indigo-50/60 rounded-2xl border border-indigo-100 space-y-1">
                    <span className="text-xs text-indigo-500 font-semibold uppercase tracking-wider block">
                      升学通道属性
                    </span>
                    <h3 className="text-lg font-bold text-indigo-950">
                      {school.downstream.routeType}
                    </h3>
                    {school.downstream.directPassRatio && (
                      <div className="text-xs text-indigo-700 mt-2 bg-white/80 inline-block px-2.5 py-1 rounded-lg border border-indigo-100 font-medium">
                        📌 {school.downstream.directPassRatio}
                      </div>
                    )}
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-800 mb-2">核心对口初中或下游去向</h4>
                    <div className="space-y-2">
                      {school.downstream.targetSchools.map((target, idx) => (
                        <div key={idx} className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs sm:text-sm">
                          <MiddleSchoolBadges
                            middleSchoolText={target}
                            onSelectMiddleSchool={onSelectMiddleSchool || (() => {})}
                          />
                          <span className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded shrink-0">重点出口</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {school.downstream.note && (
                <div className="p-3.5 bg-amber-50/70 border border-amber-200/70 rounded-xl text-xs text-amber-900 leading-relaxed">
                  💡 <strong>升学走势中肯点评：</strong>{school.downstream.note}
                </div>
              )}
            </div>
          )}

          {/* TAB 4: 家长真实口碑与点评 */}
          {activeTab === 'reviews' && school.verificationStatus === 'verified' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl border border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="flex items-center text-amber-500">
                    <Star className="w-6 h-6 fill-amber-500" />
                  </div>
                  <div>
                    <span className="text-2xl font-bold text-slate-900">{school.reviews.parentRating}</span>
                    <span className="text-xs text-slate-400 ml-1">/ 5.0 家长综合口碑指数</span>
                  </div>
                </div>
                <div className="text-right text-xs">
                  <span className="text-slate-400 block">日常作业耗时预估</span>
                  <span className="font-semibold text-slate-800">{school.reviews.homeworkDuration}</span>
                </div>
              </div>

              {/* 核心优势 */}
              <div>
                <h4 className="font-semibold text-emerald-800 text-xs sm:text-sm flex items-center gap-1.5 mb-2">
                  <ThumbsUp className="w-4 h-4 text-emerald-600" />
                  家长公认最强优势 (Pros)
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                  {school.reviews.pros.map((p, i) => (
                    <li key={i} className="flex items-start gap-2 bg-emerald-50/40 p-2.5 rounded-xl border border-emerald-100">
                      <span className="text-emerald-600 font-bold">✓</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 潜在不足 */}
              <div>
                <h4 className="font-semibold text-amber-800 text-xs sm:text-sm flex items-center gap-1.5 mb-2">
                  <ThumbsDown className="w-4 h-4 text-amber-600" />
                  家长中肯提醒与槽点 (Cons)
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                  {school.reviews.cons.map((c, i) => (
                    <li key={i} className="flex items-start gap-2 bg-amber-50/40 p-2.5 rounded-xl border border-amber-200/60">
                      <span className="text-amber-600 font-bold">!</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 家长访谈原声 */}
              <div className="p-4 bg-slate-100/70 border-l-4 border-blue-500 rounded-r-2xl text-xs sm:text-sm italic text-slate-700 leading-relaxed">
                “{school.reviews.parentFeedbackSample}”
              </div>
            </div>
          )}

          {activeTab === 'reviews' && school.verificationStatus !== 'verified' && (
            <div className="p-5 bg-amber-50 border border-amber-200 rounded-2xl text-sm text-amber-950 leading-relaxed">
              家长评分、作业时长和评论样本尚缺少可追溯的采集时间、样本量和原始来源，因此暂不对外展示或参与排序。
            </div>
          )}

          </>}

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleCompare(school)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                isCompared
                  ? 'bg-indigo-600 text-white border-indigo-600 shadow-sm'
                  : 'bg-white text-slate-700 border-slate-300 hover:border-indigo-300 hover:text-indigo-600'
              }`}
            >
              <Scale className="w-4 h-4" />
              {isCompared ? '已加入PK对比' : '加入多校PK对比'}
            </button>

            <button
              onClick={() => onToggleShortlist(school)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all ${
                isShortlisted
                  ? 'bg-rose-50 text-rose-700 border-rose-200'
                  : 'bg-white text-slate-700 border-slate-300 hover:border-rose-300 hover:text-rose-600'
              }`}
            >
              <Bookmark className="w-4 h-4" />
              {isShortlisted ? '已加入我的择校夹' : '收藏到自选清单'}
            </button>
          </div>

          {school.canSimulateAdmission && <button
            onClick={() => {
              onClose();
              onSimulateAdmission(school);
            }}
            className="flex items-center gap-1.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-sm hover:shadow transition-all"
          >
            <Calculator className="w-4 h-4" />
            入学条件核对
          </button>
          }
        </div>

      </div>
    </div>
  );
};
