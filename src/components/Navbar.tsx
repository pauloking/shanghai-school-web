import React from 'react';
import { SchoolStage } from '../types/school';
import { 
  Compass, 
  Search, 
  Sparkles, 
  Scale, 
  Calculator, 
  CalendarClock, 
  BookmarkCheck,
  GraduationCap,
  Baby,
  BookOpen,
  MapPin,
  ShieldCheck,
  Map as MapIcon,
  MessageSquare
} from 'lucide-react';

export type NavTab = 'explore' | 'list' | 'map' | 'catchment' | 'advisor' | 'compare' | 'simulator' | 'timeline' | 'matrix' | 'community';

interface NavbarProps {
  currentTab: NavTab;
  onTabChange: (tab: NavTab) => void;
  selectedStage: SchoolStage | 'all';
  onStageChange: (stage: SchoolStage | 'all') => void;
  compareCount: number;
  shortlistCount: number;
  onOpenDataSourceModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onTabChange,
  selectedStage,
  onStageChange,
  compareCount,
  shortlistCount,
  onOpenDataSourceModal
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-sm backdrop-blur-md bg-white/95">
      {/* Top Brand & Stage Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div 
            onClick={() => onTabChange('explore')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Compass className="w-6 h-6 animate-spin-slow" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-slate-900 tracking-tight">魔都升学择校通</span>
                <span className="text-xs bg-blue-100 text-blue-800 font-semibold px-2 py-0.5 rounded-full">
                  上海升学罗盘
                </span>
              </div>
              <p className="text-xs text-slate-500 hidden sm:block">
                入园 · 幼升小 · 小升初划片 · 科学决策
              </p>
            </div>
          </div>

          {/* Quick Stage Switcher */}
          <div className="flex items-center bg-slate-100 p-1 rounded-xl border border-slate-200 shrink-0">
            <button
              onClick={() => onStageChange('all')}
              className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedStage === 'all'
                  ? 'bg-white text-blue-700 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              全部<span className="hidden sm:inline">学段</span>
            </button>
            <button
              onClick={() => onStageChange('kindergarten')}
              className={`flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedStage === 'kindergarten'
                  ? 'bg-white text-pink-700 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Baby className="w-3.5 h-3.5 text-pink-600" />
              幼儿园<span className="hidden sm:inline"> (入园)</span>
            </button>
            <button
              onClick={() => onStageChange('primary')}
              className={`flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedStage === 'primary'
                  ? 'bg-white text-blue-700 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
              小学<span className="hidden sm:inline"> (幼升小)</span>
            </button>
            <button
              onClick={() => onStageChange('middle')}
              className={`flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedStage === 'middle'
                  ? 'bg-white text-purple-700 shadow-sm font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-purple-600" />
              初中<span className="hidden sm:inline"> (小升初)</span>
            </button>
          </div>

          {/* Top Quick Actions */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => onTabChange('community')}
              className={`flex items-center gap-1.5 text-xs font-bold px-3 py-2 rounded-xl transition-all shadow-sm ${
                currentTab === 'community'
                  ? 'bg-indigo-600 text-white shadow-indigo-300/40'
                  : 'text-indigo-700 bg-indigo-50 hover:bg-indigo-100 border border-indigo-200'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              问答社区 (FAQ)
            </button>
            <button
              onClick={onOpenDataSourceModal}
              className="flex items-center gap-1 text-xs text-slate-600 hover:text-blue-700 border border-slate-200 hover:border-blue-300 px-3 py-2 rounded-xl bg-slate-50 transition-all font-medium"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              数据来源与依据
            </button>
            <button
              onClick={() => onTabChange('advisor')}
              className="flex items-center gap-1.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-xs font-medium px-3.5 py-2 rounded-xl shadow-sm transition-all hover:shadow"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              资料核对向导
            </button>
          </div>
        </div>

        {/* Tab Navigation Menu */}
        <div className="flex items-center space-x-1 sm:space-x-2 border-t border-slate-100 overflow-x-auto py-1 text-sm scrollbar-thin scrollbar-thumb-slate-200">
          <button
            onClick={() => onTabChange('explore')}
            className={`flex items-center gap-1.5 py-2 px-2.5 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap transition-colors ${
              currentTab === 'explore' || currentTab === 'list' || currentTab === 'map'
                ? 'border-blue-600 text-blue-700 font-bold'
                : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            <Compass className="w-4 h-4 text-blue-600" />
            全景找校·地图
            <span className="bg-blue-100 text-blue-800 text-[10px] px-1.5 py-0.5 rounded-full font-bold">列表·GIS</span>
          </button>

          <button
            onClick={() => onTabChange('catchment')}
            className={`flex items-center gap-1 py-2 px-2.5 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap transition-colors ${
              currentTab === 'catchment'
                ? 'border-teal-600 text-teal-700 font-bold'
                : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            <MapPin className="w-4 h-4 text-teal-600" />
            搜小区查资料
            <span className="bg-teal-100 text-teal-800 text-[10px] px-1.5 py-0.5 rounded-full font-bold">来源分层</span>
          </button>

          <button
            onClick={() => onTabChange('advisor')}
            className={`flex items-center gap-1 py-2 px-2.5 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap transition-colors ${
              currentTab === 'advisor'
                ? 'border-blue-600 text-blue-600 font-bold'
                : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            资料核对向导
            <span className="bg-amber-100 text-amber-800 text-[10px] px-1.5 py-0.5 rounded-full font-bold">待核验</span>
          </button>

          {/* Moved prominent Community Tab into position 5 */}
          <button
            onClick={() => onTabChange('community')}
            className={`flex items-center gap-1 py-2 px-2.5 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap transition-colors ${
              currentTab === 'community'
                ? 'border-indigo-600 text-indigo-700 font-bold bg-indigo-50/50'
                : 'border-transparent text-indigo-700 font-semibold hover:text-indigo-900 hover:border-indigo-300'
            }`}
          >
            <MessageSquare className="w-4 h-4 text-indigo-600" />
            问答与社区
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold shadow-xs">
              FAQ·讨论
            </span>
          </button>

          <button
            onClick={() => onTabChange('simulator')}
            className={`flex items-center gap-1 py-2 px-2.5 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap transition-colors ${
              currentTab === 'simulator'
                ? 'border-blue-600 text-blue-600 font-bold'
                : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            <Calculator className="w-4 h-4 text-emerald-500" />
            入学条件核对
            <span className="bg-emerald-100 text-emerald-800 text-[10px] px-1.5 py-0.5 rounded-full font-bold">定性</span>
          </button>

          <button
            onClick={() => onTabChange('compare')}
            className={`flex items-center gap-1 py-2 px-2.5 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap transition-colors ${
              currentTab === 'compare'
                ? 'border-blue-600 text-blue-600 font-bold'
                : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            <Scale className="w-4 h-4 text-indigo-500" />
            多校资料对比
            {compareCount > 0 && (
              <span className="bg-indigo-100 text-indigo-700 text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                {compareCount}
              </span>
            )}
          </button>

          <button
            onClick={() => onTabChange('matrix')}
            className={`flex items-center gap-1 py-2 px-2.5 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap transition-colors ${
              currentTab === 'matrix'
                ? 'border-blue-600 text-blue-600 font-bold'
                : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            <BookmarkCheck className="w-4 h-4 text-rose-500" />
            我的矩阵
            {shortlistCount > 0 && (
              <span className="bg-rose-100 text-rose-700 text-[10px] px-1.5 py-0.5 rounded-full font-bold">
                {shortlistCount}
              </span>
            )}
          </button>

          <button
            onClick={() => onTabChange('timeline')}
            className={`flex items-center gap-1 py-2 px-2.5 border-b-2 font-medium text-xs sm:text-sm whitespace-nowrap transition-colors ${
              currentTab === 'timeline'
                ? 'border-blue-600 text-blue-600 font-bold'
                : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            <CalendarClock className="w-4 h-4 text-slate-500" />
            升学时间轴
          </button>
        </div>
      </div>
    </header>
  );
};
