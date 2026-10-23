import React from 'react';
import { parseMiddleSchools, MiddleSchoolProfile } from '../data/middleSchools';
import { GraduationCap } from 'lucide-react';

interface MiddleSchoolBadgesProps {
  middleSchoolText: string;
  onSelectMiddleSchool: (profile: MiddleSchoolProfile) => void;
  className?: string;
}

export const MiddleSchoolBadges: React.FC<MiddleSchoolBadgesProps> = ({
  middleSchoolText,
  onSelectMiddleSchool,
  className = ''
}) => {
  const parsed = parseMiddleSchools(middleSchoolText);

  if (parsed.length === 0) {
    return <span className="text-slate-400 text-xs">暂无对口初中信息</span>;
  }

  return (
    <div className={`flex flex-wrap items-center gap-1.5 ${className}`}>
      {parsed.map((item, idx) => {
        if (item.profile) {
          return (
            <button
              key={idx}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onSelectMiddleSchool(item.profile!);
              }}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200/80 transition-all hover:shadow-xs group cursor-pointer"
              title={`点击查看 ${item.profile.name} 详情、中考四校八大实力与对口机制`}
            >
              <GraduationCap className="w-3.5 h-3.5 text-indigo-500 group-hover:scale-110 transition-transform" />
              <span>{item.name}</span>
              <span className="text-[10px] px-1 py-0.2 bg-indigo-100 text-indigo-600 rounded">
                {item.profile.tier.slice(0, 4)}
              </span>
              <span className="text-[10px] text-indigo-400 group-hover:text-indigo-600 font-bold">
                ↗
              </span>
            </button>
          );
        }

        return (
          <span
            key={idx}
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-xs text-slate-600 bg-slate-100 border border-slate-200"
          >
            <GraduationCap className="w-3 h-3 text-slate-400" />
            <span>{item.name}</span>
          </span>
        );
      })}
    </div>
  );
};
