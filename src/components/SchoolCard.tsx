import React from 'react';
import { School } from '../types/school';
import { 
  formatTuition, 
  getTierBadgeClass, 
  getTypeBadgeClass, 
  getRigorBadgeClass 
} from '../utils/helpers';
import { 
  MapPin, 
  GraduationCap, 
  Star, 
  Scale, 
  Bookmark, 
  Check, 
  ChevronRight, 
  AlertTriangle,
  Users,
  Calculator
} from 'lucide-react';

interface SchoolCardProps {
  school: School;
  onSelect: (school: School) => void;
  isCompared: boolean;
  onToggleCompare: (school: School) => void;
  isShortlisted: boolean;
  onToggleShortlist: (school: School) => void;
  onSimulateAdmission?: (school: School) => void;
}

export const SchoolCard: React.FC<SchoolCardProps> = ({
  school,
  onSelect,
  isCompared,
  onToggleCompare,
  isShortlisted,
  onToggleShortlist,
  onSimulateAdmission
}) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 flex flex-col justify-between overflow-hidden group">
      
      {/* Top Banner / Badges */}
      <div className="p-5 pb-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex flex-wrap items-center gap-1.5">
            {school.verificationStatus === 'verified' && (
              <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${getTierBadgeClass(school.tier)}`}>
                {school.tier}
              </span>
            )}
            <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full border ${getTypeBadgeClass(school.type)}`}>
              {school.verificationStatus === 'verified' ? (school.type === 'public' ? '公办' : school.type === 'private' ? '民办' : school.type === 'bilingual' ? '双语民办' : '国际学校') : '性质待核验'}
            </span>
            <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full ${
              school.stage === 'kindergarten' 
                ? 'bg-pink-100 text-pink-700' 
                : school.stage === 'middle' 
                ? 'bg-purple-100 text-purple-700' 
                : 'bg-blue-100 text-blue-700'
            }`}>
              {school.stage === 'kindergarten' ? '幼儿园' : school.stage === 'middle' ? '初中' : '小学'}
            </span>
            <span className="text-[11px] text-slate-500 font-medium flex items-center gap-0.5">
              <MapPin className="w-3 h-3 text-slate-400" />
              {school.district}
            </span>
            {school.id.startsWith('amap-') && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-0.5">
                🗺️ 高德实景收录
              </span>
            )}
            {school.verificationStatus !== 'verified' && school.verificationStatus !== 'poi_only' && (
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
                历史档案待核验
              </span>
            )}
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleShortlist(school);
              }}
              title={isShortlisted ? '已移入自选备选夹' : '加入备选清单'}
              className={`p-1.5 rounded-lg border transition-colors ${
                isShortlisted 
                  ? 'bg-rose-50 border-rose-200 text-rose-600' 
                  : 'border-slate-200 text-slate-400 hover:text-rose-500 hover:bg-slate-50'
              }`}
            >
              <Bookmark className="w-4 h-4 fill-current" />
            </button>
          </div>
        </div>

        {/* School Name */}
        <h3 
          onClick={() => onSelect(school)}
          className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors cursor-pointer leading-snug line-clamp-1"
        >
          {school.name}
        </h3>

        {/* Subtitle / Badge Motto */}
        {school.verificationStatus === 'verified' && (
          <div className="text-xs text-amber-800 bg-amber-50/70 border border-amber-200/60 px-2.5 py-1 rounded-lg mt-2 inline-block font-medium">
            {school.badgeTag}
          </div>
        )}

        {/* Key Metrics Grid */}
        {school.verificationStatus === 'verified' && <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-100 text-xs">
          <div>
            <span className="text-slate-400 block mb-0.5">收费标准</span>
            <span className={`font-semibold ${school.tuition.isFree ? 'text-emerald-600' : 'text-slate-800'}`}>
              {formatTuition(school)}
            </span>
          </div>
          <div>
            <span className="text-slate-400 block mb-0.5">历史资料难度标签</span>
            <span className="font-semibold text-slate-800 truncate block" title={school.enrollment.admissionDifficulty}>
              {school.enrollment.admissionDifficulty.split(' ')[0]}
            </span>
          </div>
          <div>
            <span className="text-slate-400 block mb-0.5">教学节奏</span>
            <span className={`inline-block px-1.5 py-0.5 rounded text-[11px] font-medium border ${getRigorBadgeClass(school.academic.rigorLevel)}`}>
              {school.academic.rigorLevel.split(' ')[0]}
            </span>
          </div>
          <div>
            <span className="text-slate-400 block mb-0.5">班额 / 师资</span>
            <span className="text-slate-700 font-medium flex items-center gap-1">
              <Users className="w-3 h-3 text-slate-400" />
              约{school.academic.classSize}人/班
            </span>
          </div>
        </div>}

        {/* Downstream / Pipeline */}
        {school.verificationStatus === 'verified' && <div className="mt-3 pt-2.5 border-t border-slate-100 text-xs">
          <div className="flex items-start gap-1.5 text-slate-600">
            <GraduationCap className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
            <div className="line-clamp-1">
              {school.stage === 'middle' ? (
                <>
                  <span className="font-medium text-slate-700">中考走向：</span>
                  {school.middleSchoolDetails?.seniorHighDestinations?.featuredSeniorHighs?.length 
                    ? school.middleSchoolDetails.seniorHighDestinations.featuredSeniorHighs.join('、')
                    : school.downstream.targetSchools.join('、')}
                </>
              ) : (
                <>
                  <span className="font-medium text-slate-700">出口/对口：</span>
                  {school.downstream.targetSchools.join('、')}
                </>
              )}
            </div>
          </div>
        </div>}

        {/* Tags */}
        {school.verificationStatus === 'verified' && <div className="flex flex-wrap gap-1 mt-3">
          {school.tags.slice(0, 4).map((t, idx) => (
            <span key={idx} className="bg-slate-100 text-slate-600 text-[11px] px-2 py-0.5 rounded-md">
              {t}
            </span>
          ))}
          {school.enrollment.hasFiveYearRule && (
            <span className="bg-red-50 text-red-600 text-[11px] px-2 py-0.5 rounded-md border border-red-100 font-medium">
              五年一户
            </span>
          )}
          {school.enrollment.oversubscribedHistory && (
            <span className="bg-amber-50 text-amber-700 text-[11px] px-1.5 py-0.5 rounded-md border border-amber-200 flex items-center gap-0.5 font-medium">
              <AlertTriangle className="w-3 h-3" />
              超额预警
            </span>
          )}
        </div>}

        {school.verificationStatus !== 'verified' && (
          <div className="mt-3 p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed">
            当前仅展示学校基本信息。梯队、收费、班额、出口、口碑和招生难度等字段待绑定可追溯来源后再展示。
          </div>
        )}
      </div>

      {/* Card Footer Actions */}
      <div className="px-5 py-3 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between text-xs">
        <div className="flex items-center gap-1 text-slate-500">
          <Star className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-500">口碑与作业数据待核验</span>
        </div>

        <div className="flex items-center gap-1.5">
          {onSimulateAdmission && school.canSimulateAdmission && (
            <button
              onClick={() => onSimulateAdmission(school)}
              title="入学条件核对"
              className="p-1.5 rounded-lg border border-emerald-200 text-emerald-700 hover:bg-emerald-50 transition-colors"
            >
              <Calculator className="w-3.5 h-3.5" />
            </button>
          )}

          {school.verificationStatus === 'verified' && (
            <button
              onClick={() => onToggleCompare(school)}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-lg border font-medium transition-colors ${
                isCompared
                  ? 'bg-indigo-50 text-indigo-700 border-indigo-200 font-semibold'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
              }`}
            >
              {isCompared ? <Check className="w-3 h-3 text-indigo-600" /> : <Scale className="w-3 h-3 text-slate-400" />}
              {isCompared ? '已加入' : '对比'}
            </button>
          )}

          <button
            onClick={() => onSelect(school)}
            className="flex items-center gap-0.5 bg-white hover:bg-blue-50 text-blue-600 border border-blue-200 hover:border-blue-300 font-semibold px-2.5 py-1 rounded-lg transition-colors"
          >
            档案·来源
            <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

    </div>
  );
};
