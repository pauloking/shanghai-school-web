import React, { useState, useEffect } from 'react';
import { School, SchoolStage } from './types/school';
import { SCHOOLS_DATA } from './data/schools';
import { CommunityCatchment } from './data/catchments';
import { Navbar, NavTab } from './components/Navbar';
import { SchoolList } from './components/SchoolList';
import { CatchmentLookup } from './components/CatchmentLookup';
import { SmartAdvisor } from './components/SmartAdvisor';
import { ComparisonBoard } from './components/ComparisonBoard';
import { AdmissionSimulator } from './components/AdmissionSimulator';
import { DecisionMatrix } from './components/DecisionMatrix';
import { PolicyTimeline } from './components/PolicyTimeline';
import { SchoolDetailModal } from './components/SchoolDetailModal';
import { DataSourceModal } from './components/DataSourceModal';
import { SchoolGISMap } from './components/SchoolGISMap';
import { MiddleSchoolProfile } from './data/middleSchools';
import { MiddleSchoolDetailModal } from './components/MiddleSchoolDetailModal';
import { CommunityHub } from './components/CommunityHub';
import { SchoolDiscoveryHub, DiscoveryViewMode } from './components/SchoolDiscoveryHub';
import { Heart, ShieldCheck } from 'lucide-react';
import { sanitizeSchool } from './utils/schoolDataQuality';


export const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<NavTab>('explore');
  const [discoveryViewMode, setDiscoveryViewMode] = useState<DiscoveryViewMode>('split');
  const [selectedStage, setSelectedStage] = useState<SchoolStage | 'all'>('all');

  // Helper to load persisted schools (supports full objects and legacy string IDs)
  const loadSavedSchools = (keyV2: string, legacyKey: string): School[] => {
    try {
      const savedV2 = localStorage.getItem(keyV2);
      if (savedV2) {
        const parsed = JSON.parse(savedV2);
        if (Array.isArray(parsed) && parsed.length > 0 && typeof parsed[0] === 'object' && parsed[0].id) {
          return parsed.map((school: School) => sanitizeSchool(school));
        }
      }
      const savedLegacy = localStorage.getItem(legacyKey);
      if (savedLegacy) {
        const ids: string[] = JSON.parse(savedLegacy);
        return SCHOOLS_DATA.filter(s => ids.includes(s.id));
      }
    } catch {}
    return [];
  };

  // Compared Schools (Max 4)
  const [comparedSchools, setComparedSchools] = useState<School[]>(() => 
    loadSavedSchools('shanghai_school_compared_v2', 'shanghai_school_compared')
  );

  // Shortlisted Schools (My Target Matrix)
  const [shortlistedSchools, setShortlistedSchools] = useState<School[]>(() => 
    loadSavedSchools('shanghai_school_shortlist_v2', 'shanghai_school_shortlist')
  );

  // Simulator target school & community
  const [simulatorTargetSchool, setSimulatorTargetSchool] = useState<School | null>(null);
  const [simulatorTargetCommunity, setSimulatorTargetCommunity] = useState<CommunityCatchment | string | null>(null);

  // Map target community for deep linking into GIS map
  const [mapTargetCommunity, setMapTargetCommunity] = useState<CommunityCatchment | null>(null);

  // Active modal school
  const [activeModalSchool, setActiveModalSchool] = useState<School | null>(null);

  // Active modal middle school
  const [activeModalMiddleSchool, setActiveModalMiddleSchool] = useState<MiddleSchoolProfile | null>(null);


  // Data Source Modal State
  const [isDataSourceModalOpen, setIsDataSourceModalOpen] = useState<boolean>(false);

  // Persist Compared and Shortlist (stores full School objects so dynamic AMap schools are retained)
  useEffect(() => {
    try {
      localStorage.setItem('shanghai_school_compared_v2', JSON.stringify(comparedSchools));
    } catch {}
  }, [comparedSchools]);

  useEffect(() => {
    try {
      localStorage.setItem('shanghai_school_shortlist_v2', JSON.stringify(shortlistedSchools));
    } catch {}
  }, [shortlistedSchools]);

  // Toggle Compare
  const handleToggleCompare = (school: School) => {
    if (school.verificationStatus !== 'verified') {
      alert('该校的对比字段尚未完成来源核验，目前只能查看名称与位置。');
      return;
    }
    setComparedSchools(prev => {
      const exists = prev.some(s => s.id === school.id);
      if (exists) {
        return prev.filter(s => s.id !== school.id);
      } else {
        if (prev.length >= 3) {
          alert('最多同时对比 3 所学校');
          return prev;
        }
        return [...prev, school];
      }
    });
  };

  // Add school to compare
  const handleAddCompare = (school: School) => {
    handleToggleCompare(school);
  };

  // Remove school from compare
  const handleRemoveCompare = (schoolId: string) => {
    setComparedSchools(prev => prev.filter(s => s.id !== schoolId));
  };

  // Toggle Shortlist
  const handleToggleShortlist = (school: School) => {
    setShortlistedSchools(prev => {
      const exists = prev.some(s => s.id === school.id);
      if (exists) {
        return prev.filter(s => s.id !== school.id);
      } else {
        return [...prev, school];
      }
    });
  };

  // Navigate to Simulator with specific school and optional community
  const handleNavigateToSimulator = (school: School, community?: CommunityCatchment | string) => {
    if (school.canSimulateAdmission !== true || (typeof community === 'object' && community?.verificationStatus !== 'verified')) {
      alert('学校规则或划片关系尚未完成官方原文核验，条件核对暂不开放。');
      return;
    }
    setSimulatorTargetSchool(school);
    setSimulatorTargetCommunity(community || null);
    setCurrentTab('simulator');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Navigate to GIS Map with specific community focused and detailed card opened
  const handleNavigateToMapWithCommunity = (community: CommunityCatchment) => {
    setMapTargetCommunity(community);
    setDiscoveryViewMode('map');
    setCurrentTab('explore');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      
      {/* Top Navigation */}
      <Navbar
        currentTab={currentTab}
        onTabChange={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        selectedStage={selectedStage}
        onStageChange={(stage) => setSelectedStage(stage)}
        compareCount={comparedSchools.length}
        shortlistCount={shortlistedSchools.length}
        onOpenDataSourceModal={() => setIsDataSourceModalOpen(true)}
      />

      {/* Main View Area */}
      <main className="flex-1 pb-16">
        {(currentTab === 'explore' || currentTab === 'list' || currentTab === 'map') && (
          <SchoolDiscoveryHub
            schools={SCHOOLS_DATA}
            selectedStage={selectedStage}
            onStageChange={setSelectedStage}
            comparedSchools={comparedSchools}
            onToggleCompare={handleToggleCompare}
            onOpenCompareModal={() => setCurrentTab('compare')}
            shortlistedSchools={shortlistedSchools}
            onToggleShortlist={handleToggleShortlist}
            onNavigateToSimulator={handleNavigateToSimulator}
            onNavigateToAdvisor={() => setCurrentTab('advisor')}
            onNavigateToCommunity={() => setCurrentTab('community')}
            onSelectSchool={(s) => setActiveModalSchool(s)}
            targetCommunity={mapTargetCommunity}
            onSelectMiddleSchool={(ms) => setActiveModalMiddleSchool(ms)}
            initialViewMode={currentTab === 'map' ? 'map' : discoveryViewMode}
          />
        )}

        {currentTab === 'catchment' && (
          <CatchmentLookup
            onSelectSchool={(s) => setActiveModalSchool(s)}
            onNavigateToSimulator={handleNavigateToSimulator}
            onToggleCompare={handleToggleCompare}
            comparedSchools={comparedSchools}
            onNavigateToMap={handleNavigateToMapWithCommunity}
            onSelectMiddleSchool={(ms) => setActiveModalMiddleSchool(ms)}
          />
        )}

        {currentTab === 'advisor' && (
          <SmartAdvisor
            onToggleCompare={handleToggleCompare}
            comparedSchools={comparedSchools}
            shortlistedSchools={shortlistedSchools}
            onToggleShortlist={handleToggleShortlist}
            onSelectSchool={(s) => setActiveModalSchool(s)}
            onNavigateToSimulator={handleNavigateToSimulator}
            onNavigateToMap={handleNavigateToMapWithCommunity}
            onSelectMiddleSchool={(ms) => setActiveModalMiddleSchool(ms)}
          />
        )}


        {currentTab === 'compare' && (
          <ComparisonBoard
            comparedSchools={comparedSchools}
            shortlistedSchools={shortlistedSchools}
            onRemoveSchool={handleRemoveCompare}
            onAddSchool={handleAddCompare}
            onClearAll={() => setComparedSchools([])}
            onSelectSchool={(s) => setActiveModalSchool(s)}
            onNavigateToSimulator={handleNavigateToSimulator}
            allSchools={SCHOOLS_DATA}
          />
        )}

        {currentTab === 'simulator' && (
          <AdmissionSimulator
            initialSchool={simulatorTargetSchool}
            initialCommunity={simulatorTargetCommunity}
            schools={SCHOOLS_DATA}
            onSelectSchool={(s) => setActiveModalSchool(s)}
          />
        )}

        {currentTab === 'matrix' && (
          <DecisionMatrix
            shortlistedSchools={shortlistedSchools}
            onRemoveSchool={(id) => setShortlistedSchools(prev => prev.filter(s => s.id !== id))}
            onAddSchool={(school) => {
              if (school.verificationStatus !== 'verified') return;
              if (!shortlistedSchools.some(s => s.id === school.id)) {
                setShortlistedSchools(prev => [...prev, school]);
              }
            }}
            onSelectSchool={(s) => setActiveModalSchool(s)}
            onToggleCompare={handleToggleCompare}
            comparedSchools={comparedSchools}
            allSchools={SCHOOLS_DATA}
            onNavigateToSimulator={handleNavigateToSimulator}
          />
        )}

        {currentTab === 'timeline' && (
          <PolicyTimeline />
        )}

        {currentTab === 'community' && (
          <CommunityHub 
            onNavigateToSimulator={() => setCurrentTab('simulator')}
            onNavigateToAdvisor={() => setCurrentTab('advisor')}
          />
        )}
      </main>

      {/* Active School Detail Modal */}
      {activeModalSchool && (
        <SchoolDetailModal
          school={activeModalSchool}
          onClose={() => setActiveModalSchool(null)}
          isCompared={comparedSchools.some(s => s.id === activeModalSchool.id)}
          onToggleCompare={handleToggleCompare}
          isShortlisted={shortlistedSchools.some(s => s.id === activeModalSchool.id)}
          onToggleShortlist={handleToggleShortlist}
          onSimulateAdmission={handleNavigateToSimulator}
          onSelectMiddleSchool={(ms) => setActiveModalMiddleSchool(ms)}
        />

      )}

      {/* Active Middle School Detail Modal */}
      {activeModalMiddleSchool && (
        <MiddleSchoolDetailModal
          school={activeModalMiddleSchool}
          onClose={() => setActiveModalMiddleSchool(null)}
        />
      )}

      {/* Data Source Transparency Modal */}

      <DataSourceModal
        isOpen={isDataSourceModalOpen}
        onClose={() => setIsDataSourceModalOpen(false)}
      />

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 text-center text-xs text-slate-500 space-y-2">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">
              🧭
            </div>
            <span className="font-bold text-slate-800">魔都幼小择校通 · Shanghai School Compass</span>
          </div>

          <div className="flex items-center gap-3 text-slate-400 text-[11px]">
            <span>官方招生关系与高德地理信息分层展示</span>
            <span>·</span>
            <button
              onClick={() => setIsDataSourceModalOpen(true)}
              className="text-blue-600 hover:underline flex items-center gap-1 font-medium"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              数据来源与核验状态
            </button>
          </div>

          <div className="flex items-center gap-1 text-slate-400 text-[11px]">
            <span>助力家庭科学理性决策</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
          </div>
        </div>
      </footer>

    </div>
  );
};
