import React, { useState } from 'react';
import type { TimelineEvent, PolicyArticle } from '../data/policies';
import { 
  CalendarClock, 
  BookOpen, 
  AlertTriangle, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  ShieldCheck,
  Compass,
  Globe,
  ExternalLink,
  Phone,
  Building2,
  Search,
  Baby,
  GraduationCap
} from 'lucide-react';
import { DISTRICT_OFFICIAL_PORTALS, CITY_OFFICIAL_PORTALS } from '../data/officialPortals';
import { OFFICIAL_DOCUMENT_DISCOVERIES } from '../data/officialDocuments';

const ADMISSION_TIMELINE: TimelineEvent[] = [];
const KINDERGARTEN_ADMISSION_TIMELINE: TimelineEvent[] = [];
const MIDDLE_SCHOOL_ADMISSION_TIMELINE: TimelineEvent[] = [];
const POLICY_ARTICLES: PolicyArticle[] = [];

const LegacyPolicyTimeline: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'policies' | 'kindergarten_guide' | 'portals'>('portals');
  const [timelineMode, setTimelineMode] = useState<'primary' | 'kindergarten' | 'middle'>('primary');
  const [policyCategoryFilter, setPolicyCategoryFilter] = useState<'all' | 'primary' | 'kindergarten' | 'middle'>('all');
  const [expandedArticleId, setExpandedArticleId] = useState<string>('policy-gongmin-tongzhao');
  const [portalFilter, setPortalFilter] = useState<string>('');

  const currentTimeline = 
    timelineMode === 'kindergarten' 
      ? KINDERGARTEN_ADMISSION_TIMELINE 
      : timelineMode === 'middle'
        ? MIDDLE_SCHOOL_ADMISSION_TIMELINE
        : ADMISSION_TIMELINE;

  const filteredArticles = POLICY_ARTICLES.filter((art) => {
    if (policyCategoryFilter === 'all') return true;
    const isKindergarten = [
      'policy-age06-process',
      'policy-kindergarten-lottery',
      'policy-kindergarten-fees',
      'policy-tuoban-yitihua',
      'policy-kindergarten-health'
    ].includes(art.id);
    const isMiddle = [
      'policy-xiaoshengchu-modes',
      'policy-minge-fenpei',
      'policy-sangong-xuanba',
      'policy-minzhuagong-geju'
    ].includes(art.id);
    if (policyCategoryFilter === 'kindergarten') return isKindergarten;
    if (policyCategoryFilter === 'middle') return isMiddle;
    return !isKindergarten && !isMiddle;
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* Title Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 bg-indigo-100 text-indigo-800 text-xs font-semibold px-3 py-1 rounded-full">
          <CalendarClock className="w-3.5 h-3.5 text-indigo-600" />
          官方政策入口
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
          上海市及 16 区教育部门入口
        </h2>
        <p className="text-xs sm:text-sm text-slate-500">
          未逐条绑定官方原文的时间线与政策解读已暂停展示，请以官方页面当日公示为准。
        </p>
      </div>

      {/* Switch Tab */}
      <div className="flex justify-center">
        <div className="bg-slate-100 p-1 rounded-2xl border border-slate-200 inline-flex flex-wrap justify-center gap-1">
          <button
            hidden
            onClick={() => setActiveTab('timeline')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'timeline'
                ? 'bg-white text-blue-700 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <CalendarClock className="w-4 h-4" />
            2026 入学/升学全景三轴
          </button>
          <button
            hidden
            onClick={() => setActiveTab('policies')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'policies'
                ? 'bg-white text-blue-700 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            政策深度精读 ({POLICY_ARTICLES.length}篇)
          </button>

          <button
            hidden
            onClick={() => setActiveTab('kindergarten_guide')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'kindergarten_guide'
                ? 'bg-white text-pink-700 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Baby className="w-4 h-4 text-pink-600" />
            学前入园与托班宝典
          </button>
          <button
            onClick={() => setActiveTab('portals')}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
              activeTab === 'portals'
                ? 'bg-white text-blue-700 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Globe className="w-4 h-4 text-emerald-600" />
            16 区教育局政策公示网址
          </button>
        </div>
      </div>

      {/* VIEW 1: TIMELINE */}
      {activeTab === 'timeline' && (
        <div className="space-y-6 animate-fadeIn">
          {/* Sub-selector for Kindergarten vs Primary vs Middle School Timeline */}
          <div className="bg-white p-3 rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl w-full sm:w-auto overflow-x-auto">
              <button
                onClick={() => setTimelineMode('kindergarten')}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  timelineMode === 'kindergarten'
                    ? 'bg-white text-pink-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Baby className="w-4 h-4 text-pink-600" />
                👶 幼儿入园 (age06)
              </button>
              <button
                onClick={() => setTimelineMode('primary')}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  timelineMode === 'primary'
                    ? 'bg-white text-blue-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <GraduationCap className="w-4 h-4 text-blue-600" />
                🎒 幼升小 (小学)
              </button>
              <button
                onClick={() => setTimelineMode('middle')}
                className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  timelineMode === 'middle'
                    ? 'bg-white text-purple-700 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <BookOpen className="w-4 h-4 text-purple-600" />
                🎓 小升初 (初中)
              </button>
            </div>

            {timelineMode === 'kindergarten' ? (
              <a
                href="https://age06.edu.sh.cn/age06web/home/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-pink-700 hover:text-pink-900 font-semibold bg-pink-50 hover:bg-pink-100 border border-pink-200 px-3 py-1.5 rounded-xl transition-all"
              >
                <Globe className="w-3.5 h-3.5 text-pink-600" />
                <span>上海学前教育网 (age06) 直达</span>
                <ExternalLink className="w-3 h-3 text-pink-500" />
              </a>
            ) : (
              <a
                href="https://shrxbm.edu.sh.gov.cn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-blue-700 hover:text-blue-900 font-semibold bg-blue-50 hover:bg-blue-100 border border-blue-200 px-3 py-1.5 rounded-xl transition-all"
              >
                <Globe className="w-3.5 h-3.5 text-blue-600" />
                <span>上海市义务教育入学报名系统直达</span>
                <ExternalLink className="w-3 h-3 text-blue-500" />
              </a>
            )}
          </div>

          {/* Policy Banner Based on Selected Timeline */}
          {timelineMode === 'kindergarten' ? (
            <div className="bg-gradient-to-r from-pink-50 via-rose-50 to-purple-50 border border-pink-200 p-4 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="space-y-1">
                <div className="font-bold text-pink-950 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-pink-600 shrink-0" />
                  <span>政策依据：《关于做好2026年上海市学前教育阶段适龄幼儿入园工作的通知》（沪教委托幼〔2026〕1号）</span>
                </div>
                <p className="text-pink-800/90 text-[11px] leading-relaxed">
                  适龄小班幼儿（当年8月31日满3周岁）必须于 <strong>4月22日-4月29日</strong> 在“上海市适龄幼儿入园信息登记系统”统一登记，与小学义务教育报名系统 (shrxbm) 独立并行。
                </p>
              </div>
              <a
                href="https://age06.edu.sh.cn/age06web/home/"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1.5 bg-pink-600 hover:bg-pink-700 text-white font-bold px-3.5 py-1.5 rounded-xl text-xs shadow-sm transition-all"
              >
                <span>进入 age06 官网</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ) : timelineMode === 'middle' ? (
            <div className="bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 border border-purple-200 p-4 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="space-y-1">
                <div className="font-bold text-purple-950 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-purple-600 shrink-0" />
                  <span>政策依据：上海市教育委员会关于初中阶段学校招生入学工作的实施意见及新中考名额分配改革</span>
                </div>
                <p className="text-purple-800/90 text-[11px] leading-relaxed">
                  小升初坚持“学籍直升/户籍地段对口/多校电脑派位”，严守 <strong>4月中旬信息核对与回籍申请</strong>，5月上旬“三公”全市特招，5月中旬民办超额摇号，公办第一批次人户一致核验。
                </p>
              </div>
              <a
                href="https://shrxbm.edu.sh.gov.cn"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1.5 bg-purple-600 hover:bg-purple-700 text-white font-bold px-3.5 py-1.5 rounded-xl text-xs shadow-sm transition-all"
              >
                <span>进入报名系统</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          ) : (
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 p-4 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div className="space-y-1">
                <div className="font-bold text-blue-950 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>政策依据：上海市教育委员会关于本市义务教育阶段学校招生入学工作的实施意见</span>
                </div>
                <p className="text-blue-800/90 text-[11px] leading-relaxed">
                  全市统一实行“公民同招”、“一网通办”网上报名、人户一致第一顺位优先与超额电脑随机派位（摇号）。
                </p>
              </div>
            </div>
          )}

          {/* Timeline Nodes */}
          <div className={`relative border-l-2 ${
            timelineMode === 'kindergarten' ? 'border-pink-200' : timelineMode === 'middle' ? 'border-purple-200' : 'border-blue-200'
          } ml-4 sm:ml-8 space-y-8 pl-6 sm:pl-8 py-4`}>
            {currentTimeline.map((item, idx) => (
              <div key={idx} className="relative group">
                
                {/* Dot */}
                <div className={`absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-white border-4 ${
                  timelineMode === 'kindergarten' ? 'border-pink-500 text-pink-600' : timelineMode === 'middle' ? 'border-purple-600 text-purple-600' : 'border-blue-600 text-blue-600'
                } shadow-sm flex items-center justify-center text-[10px] font-bold`}>
                  {idx + 1}
                </div>

                {/* Card Container */}
                <div className={`bg-white rounded-3xl border border-slate-200 p-6 shadow-sm hover:shadow-md ${
                  timelineMode === 'kindergarten' ? 'hover:border-pink-300' : timelineMode === 'middle' ? 'hover:border-purple-300' : 'hover:border-blue-300'
                } transition-all space-y-3`}>
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                    <div className={`text-xs font-bold px-3 py-1 rounded-full border ${
                      timelineMode === 'kindergarten' 
                        ? 'text-pink-700 bg-pink-50 border-pink-100' 
                        : timelineMode === 'middle'
                          ? 'text-purple-700 bg-purple-50 border-purple-100'
                          : 'text-blue-600 bg-blue-50 border-blue-100'
                    }`}>
                      🕒 {item.period}
                    </div>
                    <span className="text-xs font-semibold text-slate-400">
                      节点 {idx + 1} / {currentTimeline.length}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-100 text-xs space-y-1">
                    <span className="font-bold text-slate-800 block">📌 家长待办事项：</span>
                    <p className="text-slate-600">{item.actionRequired}</p>
                  </div>

                  <div className="bg-amber-50/70 border border-amber-200/70 p-3.5 rounded-2xl text-xs text-amber-900 flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold">避坑要诀：</span>
                      {item.tips}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW 2: POLICIES DEEP DIVE */}
      {activeTab === 'policies' && (
        <div className="space-y-4 animate-fadeIn">
          {/* Policy Category Pills */}
          <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-slate-200 shadow-sm">
            <div className="flex items-center gap-1.5 flex-wrap">
              <button
                onClick={() => setPolicyCategoryFilter('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  policyCategoryFilter === 'all'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                📚 全部核心政策 ({POLICY_ARTICLES.length})
              </button>
              <button
                onClick={() => setPolicyCategoryFilter('kindergarten')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  policyCategoryFilter === 'kindergarten'
                    ? 'bg-pink-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                👶 学前入园与托班 (5)
              </button>
              <button
                onClick={() => setPolicyCategoryFilter('primary')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  policyCategoryFilter === 'primary'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                🎒 幼升小核心机制 (6)
              </button>
              <button
                onClick={() => setPolicyCategoryFilter('middle')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  policyCategoryFilter === 'middle'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                🎓 小升初与新中考 (4)
              </button>
            </div>

            <span className="text-xs text-slate-400">
              点击卡片展开详情与避坑要决
            </span>
          </div>

          {filteredArticles.map((article) => {
            const isExpanded = expandedArticleId === article.id;

            return (
              <div
                key={article.id}
                className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden transition-all"
              >
                <div
                  onClick={() => setExpandedArticleId(isExpanded ? '' : article.id)}
                  className="p-6 cursor-pointer hover:bg-slate-50 flex items-start justify-between gap-4 select-none"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 border border-indigo-200">
                        {article.tag}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        {article.title}
                      </h3>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-500">
                      {article.summary}
                    </p>
                  </div>

                  <div className="p-2 text-slate-400 hover:text-slate-600 shrink-0">
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </div>

                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-100 space-y-4 text-xs sm:text-sm text-slate-700 bg-slate-50/40">
                    
                    {/* Definition */}
                    <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-1">
                      <span className="font-bold text-slate-900 block text-xs text-blue-600">
                        【政策大白话定义】
                      </span>
                      <p className="leading-relaxed">{article.deepDive.definition}</p>
                    </div>

                    {/* Key Rules */}
                    <div>
                      <h4 className="font-bold text-slate-800 mb-2 text-xs uppercase tracking-wider">
                        核心机制与规则细节
                      </h4>
                      <ul className="space-y-2">
                        {article.deepDive.keyPoints.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 bg-white p-3 rounded-xl border border-slate-200/80">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Risk Trap */}
                    <div className="bg-red-50 border border-red-200 p-4 rounded-2xl text-red-950 space-y-1">
                      <div className="font-bold text-red-700 flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                        致命雷区剖析 (Risk Trap)
                      </div>
                      <p className="text-xs leading-relaxed">{article.deepDive.riskTrap}</p>
                    </div>

                    {/* Pro Advice */}
                    <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl text-emerald-950 space-y-1">
                      <div className="font-bold text-emerald-800 flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        升学专家破局建议 (Expert Advice)
                      </div>
                      <p className="text-xs leading-relaxed">{article.deepDive.advice}</p>
                    </div>

                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* VIEW 3: 幼儿入园与托班专项指南 (1-3岁) */}
      {activeTab === 'kindergarten_guide' && (
        <div className="space-y-6 animate-fadeIn">
          
          {/* Header Banner */}
          <div className="bg-gradient-to-r from-pink-900 via-rose-900 to-indigo-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="inline-flex items-center gap-1.5 bg-pink-500/30 px-3 py-1 rounded-full text-xs font-semibold text-pink-200 border border-pink-400/20">
                <span className="text-sm">🍼</span>
                1-3岁家庭专属 · 学前教育与托育政策智库
              </div>
              <a
                href="https://age06.edu.sh.cn/age06web/home/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold px-3 py-1 rounded-xl transition-all"
              >
                <Globe className="w-3.5 h-3.5 text-pink-300" />
                <span>上海学前教育网 (age06) 官网直达</span>
                <ExternalLink className="w-3 h-3 text-pink-200" />
              </a>
            </div>
            
            <h2 className="text-xl sm:text-2xl font-black">
              上海适龄幼儿入园、示范园摇号与普惠托班全攻略
            </h2>
            <p className="text-xs sm:text-sm text-pink-100/90 leading-relaxed max-w-3xl">
              2岁看托班与学区房落户，3岁看示范园摇号与对口一级园。搞懂“上海市适龄幼儿入园信息登记系统 (age06.edu.sh.cn)”、公办示范园“免费彩票”机制、社区宝宝屋每年12次免费托育，以及2岁落户的“四年安全周期”。
            </p>

            <div className="pt-2 border-t border-white/10 flex flex-wrap items-center gap-3 text-[11px] text-pink-200">
              <span className="inline-flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-pink-400" />
                依据市教委文件：沪教委托幼〔2026〕1号
              </span>
              <span className="text-white/30">•</span>
              <span>信息登记期：4月22日 - 4月29日</span>
              <span className="text-white/30">•</span>
              <span>托班与插班：各区5-6月单独组织</span>
            </div>
          </div>

          {/* Section 1: 4-Step Admission Timeline */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">📅</span>
                <h3 className="font-bold text-slate-900 text-base">
                  适龄幼儿入园官方信息登记四步闭环 (市统招流程)
                </h3>
              </div>
              <span className="text-xs font-semibold text-pink-700 bg-pink-50 px-2.5 py-1 rounded-full border border-pink-200">
                满3周岁当年4月启动
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 text-xs">
              <div className="bg-gradient-to-br from-pink-50/60 to-rose-50/40 p-4 rounded-2xl border border-pink-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-pink-900 bg-pink-100 px-2 py-0.5 rounded text-[11px]">第一步 · 4月中下旬</span>
                  <span className="text-[10px] text-pink-600 font-semibold">市级平台</span>
                </div>
                <div className="font-bold text-slate-900 text-sm">统一信息登记</div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  登录“上海市适龄幼儿入园信息登记系统”，填报幼儿法定监护人及户籍、居住房产信息，获取登记表编号。
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50/60 to-indigo-50/40 p-4 rounded-2xl border border-blue-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-blue-900 bg-blue-100 px-2 py-0.5 rounded text-[11px]">第二步 · 5月上旬</span>
                  <span className="text-[10px] text-blue-600 font-semibold">区级平台</span>
                </div>
                <div className="font-bold text-slate-900 text-sm">区级报名与意向</div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  进入各区指定幼儿入园报名系统，按居委会划片选报对口公办一级园，或申报本区市示范性幼儿园电脑派位志愿。
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50/60 to-orange-50/40 p-4 rounded-2xl border border-amber-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-amber-900 bg-amber-100 px-2 py-0.5 rounded text-[11px]">第三步 · 5月中旬</span>
                  <span className="text-[10px] text-amber-600 font-semibold">现场/线上</span>
                </div>
                <div className="font-bold text-slate-900 text-sm">示范园摇号与审核</div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  示范园组织公证电脑随机摇号。各区公办园组织线上资料校验或现场人户一致审核，复核房产证与户口簿。
                </p>
              </div>

              <div className="bg-gradient-to-br from-emerald-50/60 to-teal-50/40 p-4 rounded-2xl border border-emerald-200 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded text-[11px]">第四步 · 5月下旬-6月</span>
                  <span className="text-[10px] text-emerald-600 font-semibold">录取落地</span>
                </div>
                <div className="font-bold text-slate-900 text-sm">发录取通知书</div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  各公办幼儿园陆续向家长发送电子录取告知书或纸质录取通知。未录满园所启动第二批次适龄幼儿统筹调剂。
                </p>
              </div>
            </div>
          </div>

          {/* Section 2: 市示范园 vs 一级园博弈 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            
            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-rose-700 font-bold text-sm">
                <Sparkles className="w-4 h-4" />
                <span>市示范园“零风险免费彩票”机制</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                许多新手家长不敢填报市示范园（如乌南、中福会、冰厂田、南西、荷花池等），担心“万一没摇中会不会没学上”。
              </p>
              <div className="bg-rose-50 border border-rose-200 p-3.5 rounded-2xl text-rose-950 space-y-1">
                <div className="font-bold flex items-center gap-1 text-rose-800">
                  <ShieldCheck className="w-4 h-4 text-rose-600" />
                  铁律：未摇中完全不影响地段对口一级园！
                </div>
                <p className="text-[11px] leading-relaxed">
                  不同于小学“公民同招”落选后排位后置的风险，<strong>幼儿园阶段示范园电脑摇号未中，完全保留地段公办一级园的第一顺位录取资格</strong>！这相当于给本区户籍家庭一次无成本冲刺殿堂级幼儿园的机会，强烈建议所有符合条件的家庭果断报名！
                </p>
              </div>
              <div className="text-[11px] text-slate-500 pt-1">
                💡 <strong>收费参考：</strong>公办市示范园普惠保育费仅约 <strong>700 - 1050 元/月</strong>，相较于私立双语幼儿园（每月8000-18000元），省下的开支可用于充实长期教育储备基金。
              </div>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-indigo-700 font-bold text-sm">
                <Building2 className="w-4 h-4" />
                <span>一级公办幼儿园：稳健地段对口基本盘</span>
              </div>
              <p className="text-slate-600 leading-relaxed">
                上海市一级幼儿园是各区学前教育的主力军，硬件配备完善，教师均具备正规幼儿师范编制，办学规范杜绝小学化。
              </p>
              <div className="bg-indigo-50 border border-indigo-200 p-3.5 rounded-2xl text-indigo-950 space-y-1">
                <div className="font-bold flex items-center gap-1 text-indigo-800">
                  <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                  对口录取顺位原则：
                </div>
                <p className="text-[11px] leading-relaxed">
                  以“本市户籍人户一致优先”为第一法则，产权人须为父母或幼儿本人。部分热门一级园（如汇龙、建国、莘松、启英等）若报出生源超额，同样会参照落户年限从长到短排序录取。
                </p>
              </div>
              <div className="text-[11px] text-slate-500 pt-1">
                💡 <strong>五年一户：</strong>徐汇、静安、黄浦、浦东等核心区部分热门公办幼儿园已开始协同审查“五年一户”，二手房买入前需确认房东未占用幼儿园学额。
              </div>
            </div>

          </div>

          {/* Section 3: 普惠托班与社区宝宝屋 */}
          <div className="bg-gradient-to-br from-emerald-50/70 via-teal-50/40 to-blue-50/50 rounded-3xl border border-emerald-200/80 p-6 shadow-sm space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-emerald-200/60 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-xl">🐣</span>
                <h3 className="font-bold text-slate-900 text-base">
                  普惠托班 & 社区“宝宝屋”民心政策（1-3岁家庭救星）
                </h3>
              </div>
              <span className="text-xs font-bold text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full border border-emerald-200">
                随申办实名预约
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="bg-white p-4 rounded-2xl border border-emerald-200 space-y-2">
                <div className="font-bold text-emerald-900 text-sm flex items-center gap-1.5">
                  <span>🏠 社区“宝宝屋”：每年12次免费计时托育</span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  上海市16区街镇党群服务中心及邻里汇现已全面铺开嵌入式“社区宝宝屋”。为辖区内 1-3 岁幼儿家庭每年提供 <strong>12 次免费计时托育服务（每次2小时，全年免费24小时）</strong>。
                </p>
                <div className="bg-emerald-50/80 p-2.5 rounded-xl border border-emerald-100 text-[11px] text-emerald-950">
                  <strong>预约通道：</strong>打开“随申办”APP &rarr; 搜索“宝宝屋” &rarr; 定位所在街镇邻里汇 &rarr; 选择合适时间段实名预约即可。配备持证育婴师与适龄玩教具，是全职带娃家庭的应急刚需福利。
                </div>
              </div>

              <div className="bg-white p-4 rounded-2xl border border-teal-200 space-y-2">
                <div className="font-bold text-teal-900 text-sm flex items-center gap-1.5">
                  <span>🎒 公办幼儿园普惠延伸托班 (2-3岁)</span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  上海市鼓励有富余学额的公办幼儿园向下延伸开设 2-3 岁托班（托班年龄段：前一年9月1日至当年8月31日出生的满2周岁幼儿）。
                </p>
                <div className="bg-teal-50/80 p-2.5 rounded-xl border border-teal-100 text-[11px] text-teal-950">
                  <strong>招托时间：</strong>通常在每年 5 月下旬至 6 月初由各公办园单独发布招生公告；保育费严格执行政府普惠指导价（公办仅约 500-1000 元/月），名额先到先得或按人户一致排序。
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: 2岁宝宝的四年落户黄金时钟 */}
          <div className="bg-white rounded-3xl border border-amber-200/80 p-6 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-amber-900 font-black text-base border-b border-amber-100 pb-3">
              <span>⏳ 2岁宝宝家庭的“四年落户黄金时钟”</span>
              <span className="text-xs font-normal text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                升学置业生死线
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs">
              <div className="bg-amber-50/60 p-4 rounded-2xl border border-amber-200/80 space-y-1.5">
                <div className="font-bold text-amber-900 text-sm">
                  1. 为什么2岁是落户最后窗口？
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  上海幼升小在孩子满6周岁当年的4月进行严格资格审验。若在2岁当年（满2周岁前）完成户籍迁入，至6岁幼升小时<strong>整整在册满4年（48个月）</strong>。在明珠、汇师、建襄、高安路一小、打一等顶流超额学校，4年入户绝对是第1顺位金牌护身符，极大概率免遭统筹。
                </p>
              </div>

              <div className="bg-pink-50/60 p-4 rounded-2xl border border-pink-200/80 space-y-1.5">
                <div className="font-bold text-pink-900 text-sm">
                  2. 完美化解二手房“五年一户”
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  二手学区房经常遇到房东上家孩子刚读一年级的情况。若在孩子2岁时买入，经过4年等待，在孩子6岁准备报名当年，房东上家正好完成5年义务教育阶段，学额<strong>完美解冻释放</strong>！既能从容挑房，又彻底杜绝政策暴雷。
                </p>
              </div>

              <div className="bg-indigo-50/60 p-4 rounded-2xl border border-indigo-200/80 space-y-1.5">
                <div className="font-bold text-indigo-900 text-sm">
                  3. 赋予家庭“公民双轨”从容主动权
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  手握4年人户一致的名校底牌，到了6岁大考时，家庭可以大胆参与世外、上实或顶尖民办的摇号选拔。哪怕没有摇中回流公办，因入户长达4年，在回流排序中依然大幅领先于入户1-2年的家庭，获得无与伦比的安全垫。
                </p>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* VIEW 4: 16 DISTRICT OFFICIAL PORTALS */}
      {activeTab === 'portals' && (
        <div className="space-y-6 animate-fadeIn">
          
          {/* Intro & Search */}
          <div className="bg-white p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  上海市及 16 区政府、教育部门入口目录
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  本页仅提供查找入口，不代表已经找到或核验某所学校的招生原文；具体招生关系以当年具体公示文件为准。
                </p>
              </div>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                入口目录 · 逐条原文待核验
              </span>
            </div>

            {/* Quick District Filter Input */}
            <div className="relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={portalFilter}
                onChange={(e) => setPortalFilter(e.target.value)}
                placeholder="搜索区域（如：徐汇、静安、浦东、闵行）或公报关键词..."
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Municipal Level Portals */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-blue-600" />
              上海市级官方报名与政策总入口
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {CITY_OFFICIAL_PORTALS.map((portal, idx) => (
                <a
                  key={idx}
                  href={portal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50/50 border border-blue-200/80 rounded-2xl hover:border-blue-400 hover:shadow-sm transition-all flex items-start justify-between gap-3 group"
                >
                  <div className="space-y-1 flex-1">
                    <div className="font-bold text-xs sm:text-sm text-blue-900 group-hover:text-blue-700 flex items-center gap-1.5 flex-wrap">
                      <span>{portal.title}</span>
                      <span className="text-[10px] bg-blue-200/60 text-blue-800 px-1.5 py-0.2 rounded font-normal">
                        {portal.authority}
                      </span>
                    </div>
                    <div className="text-[11px] text-blue-700 font-mono">
                      {portal.url}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pt-1">
                      {portal.description}
                    </p>
                  </div>
                  <div className="p-2 rounded-xl bg-white border border-blue-100 text-blue-600 group-hover:scale-105 transition-transform shrink-0">
                    <ExternalLink className="w-4 h-4" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* 16 Districts Grid */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2 text-xs font-bold text-slate-700 uppercase tracking-wider">
                <Globe className="w-4 h-4 text-teal-600" />
                全市 16 区政府门户查找入口
              </span>
              <span className="text-xs text-slate-400">
                共 16 个行政区
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {Object.values(DISTRICT_OFFICIAL_PORTALS)
                .filter(p => !portalFilter.trim() || p.district.includes(portalFilter.trim()) || p.bureauName.includes(portalFilter.trim()) || p.catchmentDocTitle.includes(portalFilter.trim()))
                .map((portal) => (
                  <div
                    key={portal.district}
                    className="p-4 bg-white border border-slate-200 hover:border-blue-300 rounded-2xl transition-all shadow-xs hover:shadow-md flex flex-col justify-between space-y-3"
                  >
                    <div className="space-y-1">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-bold text-sm text-slate-900">
                            {portal.district}
                          </span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded font-medium border bg-amber-50 text-amber-700 border-amber-200">
                            具体规则待核验
                          </span>
                        </div>
                      </div>
                      <div className="text-xs font-medium text-slate-700 truncate">
                        {portal.bureauName}
                      </div>
                    </div>

                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-[11px] text-slate-600 leading-relaxed">
                      <span className="font-semibold text-slate-700 block mb-0.5">目标文件：</span>
                      {portal.catchmentDocTitle}
                    </div>

                    <div className="flex items-center justify-between gap-2 pt-1 border-t border-slate-100">
                      <a
                        href={portal.portalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-slate-700 hover:text-blue-600 flex items-center gap-1 bg-slate-50 hover:bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200 transition-colors"
                      >
                        <span>政府官网</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                      <a
                        href={portal.gazetteSearchUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 bg-blue-50 hover:bg-blue-100/80 px-3 py-1.5 rounded-xl border border-blue-200 transition-colors"
                      >
                        <span>进入官网查找</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>

                    <div className="pt-1 text-[11px] text-slate-500">
                      电话与地址请以政府官网当日公布为准
                    </div>
                  </div>
                ))}
            </div>
          </div>

        </div>
      )}

    </div>
  );
};

// 当前正式界面只保留官方入口目录。上方旧视图作为待核验素材保留，
// 不导出、不渲染，避免未经逐条取证的政策结论进入用户决策。
export const PolicyTimeline: React.FC = () => {
  const [query, setQuery] = useState('');
  const portals = Object.values(DISTRICT_OFFICIAL_PORTALS).filter((portal) => {
    const keyword = query.trim();
    return !keyword || portal.district.includes(keyword) || portal.bureauName.includes(keyword);
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full">
          <ShieldCheck className="w-3.5 h-3.5" /> 官方政策入口
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">上海市及 16 区政府、教育部门入口</h2>
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
          未逐条绑定官方原文的时间线、规则结论和政策解读已暂停展示。本页只提供查找入口，不证明任何学校、地址或家庭具备录取资格。
        </p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 text-xs text-amber-950 leading-relaxed">
        招生范围、报名日期、排序规则和资格条件会随年度与行政区变化。请在官方页面找到当年具体文件，并核对标题、文号、发布日期、适用年度和原文条款。
      </div>

      <section className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-700"><ShieldCheck className="w-4 h-4 text-amber-600" />2026 官方原文发现清单（{OFFICIAL_DOCUMENT_DISCOVERIES.length} 条）</div>
        <p className="text-xs text-slate-500">“已发现”不等于“已核验”。完成原文解析和人工复核前，这些链接不会自动生成招生关系或政策结论。</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {OFFICIAL_DOCUMENT_DISCOVERIES.map((document) => (
            <a key={document.url} href={document.url} target="_blank" rel="noopener noreferrer" className="p-4 bg-white border border-slate-200 rounded-2xl hover:border-amber-300 flex items-start justify-between gap-3">
              <div className="space-y-1"><div className="text-[11px] font-semibold text-amber-700">{document.district} · {document.documentType === 'primary_catchment' ? '小学招生范围原文' : document.documentType === 'catchment_index' ? '招生范围附件入口' : '招生实施文件'}</div><div className="text-xs font-bold text-slate-900">{document.title}</div><div className="text-[11px] text-slate-500">已发现原文 · 待人工复核</div></div>
              <ExternalLink className="w-4 h-4 text-amber-600 shrink-0" />
            </a>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-700"><Building2 className="w-4 h-4 text-blue-600" />上海市级报名与政策入口</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {CITY_OFFICIAL_PORTALS.map((portal) => (
            <a key={portal.url} href={portal.url} target="_blank" rel="noopener noreferrer" className="p-4 bg-blue-50 border border-blue-200 rounded-2xl hover:border-blue-400 flex items-start justify-between gap-3">
              <div className="space-y-1"><div className="font-bold text-sm text-blue-900">{portal.title}</div><div className="text-[11px] text-slate-500">{portal.authority}</div><p className="text-xs text-slate-600">{portal.description}</p></div>
              <ExternalLink className="w-4 h-4 text-blue-600 shrink-0" />
            </a>
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-bold text-slate-700"><Globe className="w-4 h-4 text-teal-600" />16 区政府门户查找入口（{portals.length}/16）</div>
          <div className="relative sm:w-72"><Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="搜索行政区或教育局" className="w-full pl-9 pr-3 py-2 bg-white border border-slate-200 rounded-xl text-xs" /></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {portals.map((portal) => (
            <div key={portal.district} className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-3">
              <div><div className="font-bold text-sm text-slate-900">{portal.district}</div><div className="text-xs text-slate-600 mt-1">{portal.bureauName}</div></div>
              <div className="text-[11px] text-amber-800 bg-amber-50 border border-amber-100 rounded-xl p-2.5">具体招生栏目、文件标题和规则尚待逐条核验。</div>
              <a href={portal.portalUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700">进入政府官网查找<ExternalLink className="w-3 h-3" /></a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
