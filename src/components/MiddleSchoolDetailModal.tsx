import React from 'react';
import { MiddleSchoolProfile } from '../data/middleSchools';
import { 
  X, 
  GraduationCap, 
  MapPin, 
  Trophy, 
  BookOpen, 
  Sparkles,
  AlertCircle,
  ShieldCheck,
  Building,
  CheckCircle2,
  Calendar
} from 'lucide-react';

interface MiddleSchoolDetailModalProps {
  school: MiddleSchoolProfile | null;
  onClose: () => void;
}

export const MiddleSchoolDetailModal: React.FC<MiddleSchoolDetailModalProps> = ({
  school,
  onClose
}) => {
  if (!school) return null;

  // Tier color styling
  const getTierBadge = (tier: MiddleSchoolProfile['tier']) => {
    switch (tier) {
      case '公办顶流头牌':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case '公办一梯队':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case '九年一贯头部':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case '公办优质特色':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      default:
        return 'bg-slate-100 text-slate-700 border-slate-200';
    }
  };

  // Feeder mechanism color styling
  const getFeederBadge = (mech: MiddleSchoolProfile['feederMechanism']) => {
    switch (mech) {
      case '单校100%对口直升':
        return 'bg-emerald-50 text-emerald-700 border-emerald-300';
      case '多校划片电脑摇号派位':
        return 'bg-amber-50 text-amber-800 border-amber-300';
      case '九年一贯校内直升':
        return 'bg-indigo-50 text-indigo-700 border-indigo-300';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-300';
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-blue-900 text-white p-6 relative flex-shrink-0">
          <button 
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            title="关闭窗口"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-wrap items-center gap-2 mb-2.5">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-white/15 text-blue-200 backdrop-blur-sm">
              {school.district}初中
            </span>
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getTierBadge(school.tier)} bg-white/90`}>
              {school.tier}
            </span>
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${getFeederBadge(school.feederMechanism)} bg-white/95`}>
              {school.feederMechanism}
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-yellow-400 flex-shrink-0" />
            <span>{school.name}</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-1 flex items-center gap-2">
            <span>简称：{school.shortName}</span>
            {school.establishedYear && (
              <>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" /> 建校于 {school.establishedYear} 年
                </span>
              </>
            )}
          </p>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-700">
          
          {/* Mechanism Warning & Group Notice */}
          <div className={`rounded-2xl p-4 border ${
            school.feederMechanism === '多校划片电脑摇号派位' 
              ? 'bg-amber-50/80 border-amber-200 text-amber-900' 
              : school.feederMechanism === '九年一贯校内直升'
              ? 'bg-indigo-50/80 border-indigo-200 text-indigo-900'
              : 'bg-emerald-50/80 border-emerald-200 text-emerald-900'
          }`}>
            <div className="flex items-start gap-3">
              {school.feederMechanism === '多校划片电脑摇号派位' ? (
                <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              ) : (
                <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
              )}
              <div className="space-y-1 text-xs sm:text-sm">
                <div className="font-bold flex items-center gap-2">
                  <span>升学机制解析：{school.feederMechanism}</span>
                </div>
                <p className="leading-relaxed opacity-90">
                  {school.feederMechanism === '单校100%对口直升' && (
                    '锁定学区户籍与房产即可100%直升本校初中部，无需参加小升初电脑摇号派位，中考备战确定性最高。'
                  )}
                  {school.feederMechanism === '多校划片电脑摇号派位' && (
                    '注意：该区实行“电脑派位/分组抽签摇号”。买入学区对口小学后，小升初按派位组团随机摇号至对应初中，存在一定派位不确定性，建议关注组内保底校质量！'
                  )}
                  {school.feederMechanism === '九年一贯校内直升' && (
                    '小学部与初中部在同一校区实行九年一贯制直升，小升初免择校免派位，课程体系衔接平稳紧密。'
                  )}
                </p>
                {school.feederGroupDetails && (
                  <div className="mt-2 pt-2 border-t border-black/10 text-xs font-medium">
                    <span className="font-bold">对口派位范围/生源组团：</span>
                    <span>{school.feederGroupDetails}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Metric Ratings Bar */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              初中学业与中考指标评估 (100分制)
            </h4>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 text-center">
                <div className="text-xs text-slate-500 font-medium">课业硬核实力</div>
                <div className="text-xl sm:text-2xl font-black text-blue-600 mt-0.5">{school.score.academic}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">均分与学科厚度</div>
              </div>
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 text-center">
                <div className="text-xs text-slate-500 font-medium">四校八大升学</div>
                <div className="text-xl sm:text-2xl font-black text-purple-600 mt-0.5">{school.score.fourHighFeeder}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">名额分配与自招</div>
              </div>
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 text-center">
                <div className="text-xs text-slate-500 font-medium">家长口碑评价</div>
                <div className="text-xl sm:text-2xl font-black text-emerald-600 mt-0.5">{school.score.reputation}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">校风与家校协同</div>
              </div>
            </div>
          </div>

          {/* High School Feeder Strength */}
          <div className="bg-gradient-to-br from-indigo-50/50 to-blue-50/50 border border-indigo-100 rounded-2xl p-4">
            <div className="flex items-center gap-2 text-indigo-900 font-bold text-sm mb-2">
              <Trophy className="w-4 h-4 text-amber-500" />
              <span>四校八大与高中升学出口表现</span>
            </div>
            <p className="text-xs sm:text-sm text-indigo-950/80 leading-relaxed">
              {school.highSchoolFeederStrength}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
              <span>办学特色与核心优势</span>
            </h4>
            <div className="space-y-2">
              {school.keyFeatures.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 bg-slate-50 rounded-xl p-3 border border-slate-100 text-xs sm:text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Advice for Parents */}
          <div className="bg-amber-50/60 border border-amber-200/80 rounded-2xl p-4">
            <div className="flex items-center gap-2 text-amber-900 font-bold text-sm mb-1.5">
              <BookOpen className="w-4 h-4 text-amber-600" />
              <span>家长择校置业决策建议</span>
            </div>
            <p className="text-xs sm:text-sm text-amber-900/90 leading-relaxed">
              {school.adviceForParents}
            </p>
          </div>

          {/* Location & Contact Info */}
          <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 gap-2">
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
              <span>校区地址：{school.address}</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] text-slate-400">
              <Building className="w-3.5 h-3.5" />
              <span>上海市公办初中学校名录</span>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
          <div className="text-[11px] text-slate-400">
            提示：小升初对口划片以当年区教育局最新公示红头文件为准
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold rounded-xl transition-colors shadow-sm"
          >
            关闭详情
          </button>
        </div>

      </div>
    </div>
  );
};
