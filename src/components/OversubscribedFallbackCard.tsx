import React from 'react';
import { getSchoolDiversionFallback, DiversionFallbackInfo } from '../data/diversionFallbacks';
import { ShieldAlert, AlertTriangle, ArrowRight, CheckCircle2, School as SchoolIcon, Compass } from 'lucide-react';

interface OversubscribedFallbackCardProps {
  schoolId: string;
  schoolName: string;
  className?: string;
  compact?: boolean;
}

export const OversubscribedFallbackCard: React.FC<OversubscribedFallbackCardProps> = ({
  schoolId,
  schoolName,
  className = '',
  compact = false
}) => {
  const fallbackInfo = getSchoolDiversionFallback(schoolId) || getSchoolDiversionFallback(schoolName);

  if (!fallbackInfo) {
    // Return standard generic fallback note if not explicitly tracked
    if (compact) return null;
    return (
      <div className={`p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 space-y-1 ${className}`}>
        <div className="flex items-center gap-1.5 font-bold text-slate-700">
          <ShieldAlert className="w-3.5 h-3.5 text-slate-500" />
          <span>超额统筹分流去向提示</span>
        </div>
        <p className="text-[11px] text-slate-500 leading-relaxed">
          若当年人户一致报名人数超出计划数，由区教育局在同街道及周边2公里内学额充裕的公办小学就近统筹安排。
        </p>
      </div>
    );
  }

  if (compact) {
    return (
      <div className={`p-2.5 bg-amber-50/80 border border-amber-200/80 rounded-xl text-xs space-y-1.5 ${className}`}>
        <div className="flex items-center justify-between text-amber-900 font-bold text-[11px]">
          <span className="flex items-center gap-1">
            <ShieldAlert className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            超额统筹去向参考
          </span>
          <span className="text-[10px] font-normal text-amber-700 bg-amber-100/60 px-1.5 py-0.2 rounded">
            {fallbackInfo.historicalCutoffYears}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
          {fallbackInfo.fallbackDestinations.map((dest, i) => (
            <span key={i} className="inline-flex items-center gap-1 bg-white px-2 py-0.5 rounded border border-amber-200 text-slate-700">
              <SchoolIcon className="w-3 h-3 text-amber-600" />
              <strong className="text-slate-800">{dest.name}</strong>
              <span className="text-[10px] text-amber-800 font-medium">({dest.tier})</span>
            </span>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`p-4 bg-gradient-to-br from-amber-50/90 via-orange-50/30 to-amber-50/70 border border-amber-200/90 rounded-2xl shadow-2xs space-y-3 ${className}`}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 pb-2.5 border-b border-amber-200/60">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-lg bg-amber-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
            ⚠️
          </div>
          <div>
            <h4 className="font-bold text-amber-950 text-xs sm:text-sm">
              超额统筹与保底去向档案 (若人户排序靠后被分流)
            </h4>
            <div className="text-[11px] text-amber-800/80 mt-0.5">
              参考历史入户门槛：<strong>{fallbackInfo.historicalCutoffYears}</strong>
            </div>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300 self-start sm:self-auto">
          {fallbackInfo.district}公办统筹规则
        </span>
      </div>

      {/* Destinations List */}
      <div className="space-y-2">
        <div className="text-[11px] font-bold text-slate-600 flex items-center gap-1">
          <span>历年统筹定点分流承接学校：</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {fallbackInfo.fallbackDestinations.map((dest, idx) => (
            <div 
              key={idx} 
              className="bg-white/90 p-2.5 rounded-xl border border-amber-200/70 shadow-2xs flex flex-col justify-between text-xs gap-1"
            >
              <div className="flex items-start justify-between gap-1">
                <div className="font-bold text-slate-800 flex items-center gap-1">
                  <SchoolIcon className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span>{dest.name}</span>
                </div>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-blue-50 text-blue-700 border border-blue-200 shrink-0 font-medium">
                  {dest.tier}
                </span>
              </div>
              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-slate-100">
                <span>📍 {dest.distanceDesc}</span>
                <span className="text-emerald-700 font-medium text-[10px]">{dest.acceptanceCapacity}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Primary-to-Middle Feeder Protection Notice */}
      <div className="p-2.5 bg-emerald-50/80 border border-emerald-200/80 rounded-xl text-xs text-emerald-950 flex items-start gap-2">
        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
        <div className="space-y-0.5 text-[11px]">
          <strong className="text-emerald-900">初中升学权益兜底保障：</strong>
          <p className="leading-relaxed opacity-95">
            {fallbackInfo.returnFeederStatus}
          </p>
        </div>
      </div>

      {/* District Policy note */}
      <div className="text-[11px] text-amber-900/80 bg-white/60 p-2 rounded-lg border border-amber-100">
        <span className="font-semibold">官方统筹机制：</span>
        <span>{fallbackInfo.policyNotes}</span>
      </div>
    </div>
  );
};
