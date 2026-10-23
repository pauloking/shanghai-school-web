import React, { useState } from 'react';
import { School, SchoolStage, District, DecisionCriteria } from '../types/school';
import { SCHOOLS_DATA, DISTRICTS_LIST } from '../data/schools';
import { CATCHMENTS_DATA, CommunityCatchment } from '../data/catchments';
import { 
  SCHOOL_BOARDS_DATA, 
  HOUSING_BUDGET_OPTIONS, 
  HOME_BUYING_PRIORITIES, 
  SchoolBoard,
  DISTRICT_EDUCATIONAL_PROFILES 
} from '../data/schoolBoards';
import { SchoolCard } from './SchoolCard';
import { 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  AlertTriangle, 
  Target, 
  RotateCcw,
  MapPin,
  Building2,
  GraduationCap,
  Search,
  Check,
  X,
  Loader2,
  CalendarClock,
  Clock,
  CheckCircle2,
  Home,
  Compass, 
  TrendingUp, 
  Info, 
  ChevronRight,
  Copy
} from 'lucide-react';
import { MiddleSchoolProfile } from '../data/middleSchools';
import { MiddleSchoolBadges } from './MiddleSchoolBadge';
import { CatchmentTieringTable } from './CatchmentTieringTable';
import { OversubscribedFallbackCard } from './OversubscribedFallbackCard';
import { 
  searchShanghaiResidentialPOIs, 
  detectShanghaiDistrict, 
  getCommunityHousingPrice,
  SearchedPOIItem 
} from '../services/amapService';
import { CommunityPriceBadge } from './CatchmentLookup';
import { calculateChildCohort, ChildCohortInfo } from '../utils/helpers';

interface SmartAdvisorProps {
  onToggleCompare: (school: School) => void;
  comparedSchools: School[];
  shortlistedSchools: School[];
  onToggleShortlist: (school: School) => void;
  onSelectSchool: (school: School) => void;
  onNavigateToSimulator: (school: School, community?: CommunityCatchment | string) => void;
  onNavigateToMap?: (community: CommunityCatchment) => void;
  onSelectMiddleSchool?: (school: MiddleSchoolProfile) => void;
}

export const SmartAdvisor: React.FC<SmartAdvisorProps> = ({
  onToggleCompare,
  comparedSchools,
  shortlistedSchools,
  onToggleShortlist,
  onSelectSchool,
  onNavigateToSimulator,
  onNavigateToMap,
  onSelectMiddleSchool
}) => {
  // Top-Level Mode: Home Buyer (default) vs Existing Property Self-Check
  const [advisorMode, setAdvisorMode] = useState<'home_buyer' | 'existing_property'>('home_buyer');
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isGenerated, setIsGenerated] = useState<boolean>(false);
  const [copiedSummaryToast, setCopiedSummaryToast] = useState<boolean>(false);
  const [advisorTieringCommunityId, setAdvisorTieringCommunityId] = useState<string | null>(null);


  // Form States - Child Cohort & Age
  const [stage, setStage] = useState<SchoolStage>('primary');
  const [childBirthDate, setChildBirthDate] = useState<string>('2024-10-01');

  // Dynamic calculation of child's exact age, Chinese zodiac, 8.31 cutoff status and school enrollment years
  const childCohort: ChildCohortInfo = React.useMemo(() => {
    return calculateChildCohort(childBirthDate);
  }, [childBirthDate]);

  // Home Buyer Specific States
  const [housingBudgetTier, setHousingBudgetTier] = useState<string>('all');
  const [selectedBoardIds, setSelectedBoardIds] = useState<string[]>(['pudong_meiyuan', 'xuhui_xujiahui']);
  const [boardDistrictFilter, setBoardDistrictFilter] = useState<string>('全部');
  const [homeBuyingPriority, setHomeBuyingPriority] = useState<'balanced_quality' | 'quota_entry' | 'nine_year'>('balanced_quality');

  // Location Selection Mode in Home Buyer mode:
  // 'preset_boards': 🌟 热门标杆学区 (12大精选核心板块卡片)
  // 'custom_districts': 🗺️ 全城16区自主勾选 (全域覆盖，支持市中心、四大金刚、外环新城等一键组合)
  // 'custom_search': 🔍 自主搜索板块/小区 (搜索添加任意街道、楼盘或商圈)
  const [locationSelectionMode, setLocationSelectionMode] = useState<'preset_boards' | 'custom_districts' | 'custom_search'>('preset_boards');
  const [selectedCustomDistricts, setSelectedCustomDistricts] = useState<District[]>(['徐汇区', '浦东新区', '闵行区']);
  const [customSearchQuery, setCustomSearchQuery] = useState<string>('');
  const [customTargetCommunityIds, setCustomTargetCommunityIds] = useState<string[]>([]);

  // Existing Property Specific States
  const [selectedCommunity, setSelectedCommunity] = useState<CommunityCatchment | null>(null);
  const [customCommunityName, setCustomCommunityName] = useState<string>('');
  const [communitySearchQuery, setCommunitySearchQuery] = useState<string>('');
  const [isCommunityDropdownOpen, setIsCommunityDropdownOpen] = useState<boolean>(false);
  const [amapSuggestions, setAmapSuggestions] = useState<SearchedPOIItem[]>([]);
  const [isSearchingAmap, setIsSearchingAmap] = useState<boolean>(false);
  const [selectedDistricts, setSelectedDistricts] = useState<District[]>(['徐汇区', '浦东新区']);
  const [hukouStatus, setHukouStatus] = useState<DecisionCriteria['hukouStatus']>('sh_consistent');
  const [hukouYears, setHukouYears] = useState<number>(3);
  const [routePreference, setRoutePreference] = useState<DecisionCriteria['routePreference']>('system_in');
  const [budgetPerTerm, setBudgetPerTerm] = useState<number>(45000);
  const [educationStyle, setEducationStyle] = useState<DecisionCriteria['educationStyle']>('academic');

  // Toggle Board in Home Buyer mode
  const toggleBoard = (boardId: string) => {
    if (selectedBoardIds.includes(boardId)) {
      if (selectedBoardIds.length > 1) {
        setSelectedBoardIds(selectedBoardIds.filter(id => id !== boardId));
      }
    } else {
      setSelectedBoardIds([...selectedBoardIds, boardId]);
    }
  };

  const handleSelectAllBoards = () => {
    setSelectedBoardIds(SCHOOL_BOARDS_DATA.map(b => b.id));
  };

  const handleClearBoards = () => {
    setSelectedBoardIds([SCHOOL_BOARDS_DATA[0].id]);
  };

  // Toggle custom district
  const toggleCustomDistrict = (dist: District) => {
    if (selectedCustomDistricts.includes(dist)) {
      if (selectedCustomDistricts.length > 1) {
        setSelectedCustomDistricts(selectedCustomDistricts.filter(d => d !== dist));
      }
    } else {
      setSelectedCustomDistricts([...selectedCustomDistricts, dist]);
    }
  };

  // Toggle custom community in search target watchlist
  const toggleCustomCommunityTarget = (communityId: string) => {
    if (customTargetCommunityIds.includes(communityId)) {
      setCustomTargetCommunityIds(customTargetCommunityIds.filter(id => id !== communityId));
    } else {
      setCustomTargetCommunityIds([...customTargetCommunityIds, communityId]);
    }
  };

  const handleAddBatchCommunities = (communityIds: string[]) => {
    const next = Array.from(new Set([...customTargetCommunityIds, ...communityIds]));
    setCustomTargetCommunityIds(next);
  };

  // Filtered community suggestions from official catchments
  const communitySuggestions = React.useMemo(() => {
    if (!communitySearchQuery.trim()) return CATCHMENTS_DATA.slice(0, 8);
    const q = communitySearchQuery.toLowerCase().trim();
    return CATCHMENTS_DATA.filter(c => 
      c.communityName.toLowerCase().includes(q) ||
      c.aliases.some(a => a.toLowerCase().includes(q)) ||
      c.schoolName.toLowerCase().includes(q) ||
      c.streetAddressRange.toLowerCase().includes(q)
    ).slice(0, 10);
  }, [communitySearchQuery]);

  // Debounced AMap POI Search for real compounds
  React.useEffect(() => {
    if (!communitySearchQuery.trim() || communitySearchQuery.trim().length < 2) {
      setAmapSuggestions([]);
      setIsSearchingAmap(false);
      return;
    }

    const timer = setTimeout(async () => {
      setIsSearchingAmap(true);
      try {
        const pois = await searchShanghaiResidentialPOIs(communitySearchQuery.trim());
        const realPois = pois.filter(p => p.source === 'amap_poi');
        setAmapSuggestions(realPois.slice(0, 6));
      } catch {
        setAmapSuggestions([]);
      } finally {
        setIsSearchingAmap(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [communitySearchQuery]);

  // Realtime searched communities for custom search tab in Home Buyer mode
  const searchedCustomCommunities = React.useMemo(() => {
    if (!customSearchQuery.trim()) return CATCHMENTS_DATA.slice(0, 10);
    const q = customSearchQuery.trim().toLowerCase();
    return CATCHMENTS_DATA.filter(c => {
      return (
        c.communityName.toLowerCase().includes(q) ||
        c.subdistrict.toLowerCase().includes(q) ||
        c.district.toLowerCase().includes(q) ||
        c.schoolName.toLowerCase().includes(q) ||
        c.matchedMiddleSchool.toLowerCase().includes(q) ||
        c.aliases.some(a => a.toLowerCase().includes(q))
      );
    }).slice(0, 16);
  }, [customSearchQuery]);

  const toggleDistrict = (dist: District) => {
    if (selectedDistricts.includes(dist)) {
      if (selectedDistricts.length > 1) {
        setSelectedDistricts(selectedDistricts.filter(d => d !== dist));
      }
    } else {
      setSelectedDistricts([...selectedDistricts, dist]);
    }
  };

  const handleSelectCommunity = (community: CommunityCatchment) => {
    setSelectedCommunity(community);
    setCustomCommunityName('');
    setCommunitySearchQuery(community.communityName);
    setIsCommunityDropdownOpen(false);
    if (!selectedDistricts.includes(community.district)) {
      setSelectedDistricts([community.district]);
    }
  };

  const handleSelectAmapPOI = (poi: SearchedPOIItem) => {
    const dist: District = detectShanghaiDistrict(poi.name, poi.address, poi.district);
    setCustomCommunityName(`${poi.name} (${dist})`);
    setSelectedCommunity(null);
    setCommunitySearchQuery(poi.name);
    setIsCommunityDropdownOpen(false);
    if (!selectedDistricts.includes(dist)) {
      setSelectedDistricts([dist]);
    }
  };

  const handleClearCommunity = () => {
    setSelectedCommunity(null);
    setCustomCommunityName('');
    setCommunitySearchQuery('');
  };

  const communityDistrict: District = React.useMemo(() => {
    if (selectedCommunity) return selectedCommunity.district;
    if (customCommunityName) return detectShanghaiDistrict(customCommunityName);
    return selectedDistricts[0] || '徐汇区';
  }, [selectedCommunity, customCommunityName, selectedDistricts]);

  const effectiveHousingPrice = React.useMemo(() => {
    if (selectedCommunity?.priceInfo) {
      return selectedCommunity.priceInfo;
    }
    const nameToQuery = selectedCommunity ? selectedCommunity.communityName : customCommunityName;
    if (!nameToQuery) return null;
    return getCommunityHousingPrice(nameToQuery, communityDistrict);
  }, [selectedCommunity, customCommunityName, communityDistrict]);

  // Calculate Hukou Safety for a given community based on child's birth date & cohort
  const calculateHukouSafety = (community: CommunityCatchment) => {
    const hukouYearsAccumulated = childCohort.hukouYearsIfMovedNow;
    const advice = community.yearsRequiredAdvice || 2.5;
    const safetyBuffer = hukouYearsAccumulated - advice;

    let level: 'super_safe' | 'safe' | 'borderline' | 'risky';
    let badgeText = '';
    let badgeColor = '';

    if (safetyBuffer >= 1.5) {
      level = 'super_safe';
      badgeText = `超出历史参考值 ${safetyBuffer.toFixed(1)} 年`;
      badgeColor = 'bg-emerald-100 text-emerald-800 border-emerald-300';
    } else if (safetyBuffer >= 0) {
      level = 'safe';
      badgeText = `达到历史参考值 (+${safetyBuffer.toFixed(1)}年)`;
      badgeColor = 'bg-blue-100 text-blue-800 border-blue-300';
    } else if (safetyBuffer >= -1) {
      level = 'borderline';
      badgeText = `低于历史参考值 ${Math.abs(safetyBuffer).toFixed(1)} 年`;
      badgeColor = 'bg-amber-100 text-amber-800 border-amber-300';
    } else {
      level = 'risky';
      badgeText = `与历史参考值相差 ${Math.abs(safetyBuffer).toFixed(1)} 年`;
      badgeColor = 'bg-rose-100 text-rose-800 border-rose-300';
    }

    return {
      hukouYearsAccumulated,
      advice,
      safetyBuffer,
      level,
      badgeText,
      badgeColor
    };
  };

  // Home Buyer Match Results
  const homeBuyerResults = React.useMemo(() => {
    if (!isGenerated || advisorMode !== 'home_buyer') return null;

    let boards: SchoolBoard[] = [];
    let pool: CommunityCatchment[] = [];

    if (locationSelectionMode === 'preset_boards') {
      // 1. Preset benchmark boards
      boards = SCHOOL_BOARDS_DATA.filter(b => selectedBoardIds.includes(b.id));
      const matchedCommunityIds = boards.flatMap(b => b.recommendedCommunityIds);
      pool = CATCHMENTS_DATA.filter(c => matchedCommunityIds.includes(c.id));
    } else if (locationSelectionMode === 'custom_districts') {
      // 2. Custom districts selection (from all 16 districts)
      pool = CATCHMENTS_DATA.filter(c => selectedCustomDistricts.includes(c.district));
      // Synthesize rich comparative boards for each selected district
      boards = selectedCustomDistricts.map(dist => {
        const profile = DISTRICT_EDUCATIONAL_PROFILES[dist];
        const distComms = CATCHMENTS_DATA.filter(c => c.district === dist);
        const subdistricts = Array.from(new Set(distComms.map(c => c.subdistrict)));
        return {
          id: `dist_${dist}`,
          name: `${dist} · 优质公办学区集群`,
          shortName: dist,
          district: dist,
          subdistrictNames: subdistricts,
          tag: profile ? profile.tag : `${dist}优质教育资源`,
          priceRange: profile ? profile.priceRange : '参考二手房挂牌行情',
          totalBudgetRange: profile ? profile.totalBudgetRange : '按社区门槛各异',
          budgetTier: '500-800' as const,
          keyFeatures: profile ? [
            profile.policyHighlight,
            `区域标杆小学：${profile.primaryHighlights}`,
            `对口优质初中：${profile.middleHighlights}`
          ] : ['涵盖区域内重点中小学与配套公办'],
          primarySchool: profile ? profile.primaryHighlights : '区域公办小学',
          middleSchool: profile ? profile.middleHighlights : '区域公办初中',
          kindergarten: profile ? profile.kindergartenHighlights : '市示范/一级公办园',
          recommendedCommunityIds: distComms.map(c => c.id),
          suitability: profile ? profile.suitability : '适合该行政区意向置业家庭',
          score: profile ? profile.score : { academic: 86, middleSchoolPipeline: 87, livingQuality: 88, liquidity: 87 }
        };
      });
    } else {
      // 3. Custom search & picked targets
      if (customTargetCommunityIds.length > 0) {
        pool = CATCHMENTS_DATA.filter(c => customTargetCommunityIds.includes(c.id));
      } else if (customSearchQuery.trim()) {
        const q = customSearchQuery.trim().toLowerCase();
        pool = CATCHMENTS_DATA.filter(c => 
          c.communityName.toLowerCase().includes(q) ||
          c.subdistrict.toLowerCase().includes(q) ||
          c.district.toLowerCase().includes(q) ||
          c.schoolName.toLowerCase().includes(q) ||
          c.aliases.some(a => a.toLowerCase().includes(q))
        );
      } else {
        pool = CATCHMENTS_DATA.slice(0, 16);
      }

      // Group into subdistrict comparison cards
      const subdistrictMap = new Map<string, CommunityCatchment[]>();
      pool.forEach(c => {
        const key = `${c.district} · ${c.subdistrict}`;
        if (!subdistrictMap.has(key)) {
          subdistrictMap.set(key, []);
        }
        subdistrictMap.get(key)!.push(c);
      });

      boards = Array.from(subdistrictMap.entries()).map(([subName, comms], idx) => {
        const dist = comms[0].district;
        const profile = DISTRICT_EDUCATIONAL_PROFILES[dist];
        return {
          id: `custom_board_${idx}`,
          name: subName,
          shortName: comms[0].subdistrict,
          district: dist,
          subdistrictNames: [comms[0].subdistrict],
          tag: comms[0].priceInfo?.premiumTag || '对口名校集群',
          priceRange: comms[0].priceInfo?.priceRange || '7.5 - 11.5万/㎡',
          totalBudgetRange: comms[0].priceInfo?.totalPriceRange || '450万 - 1100万',
          budgetTier: '500-800' as const,
          keyFeatures: [
            `对口小学：${Array.from(new Set(comms.map(c => c.schoolName))).join(' / ')}`,
            `对口初中：${Array.from(new Set(comms.map(c => c.matchedMiddleSchool))).join(' / ')}`,
            `包含重点社区：${comms.map(c => c.communityName.split(' ')[0]).join('、')}`
          ],
          primarySchool: Array.from(new Set(comms.map(c => c.schoolName))).join(' / '),
          middleSchool: Array.from(new Set(comms.map(c => c.matchedMiddleSchool))).join(' / '),
          kindergarten: comms[0].matchedKindergarten || '就近公办园',
          recommendedCommunityIds: comms.map(c => c.id),
          suitability: profile ? profile.suitability : '适合关注该片区的置业家庭',
          score: profile ? profile.score : { academic: 88, middleSchoolPipeline: 90, livingQuality: 90, liquidity: 90 }
        };
      });
    }

    // Filter by budget tier
    let filteredPool = pool;
    if (housingBudgetTier === '300-500') {
      filteredPool = pool.filter(c => {
        const p = c.priceInfo;
        if (!p) return true;
        return p.totalPriceRange.includes('2') || p.totalPriceRange.includes('3') || p.totalPriceRange.includes('4') || p.totalPriceRange.includes('500');
      });
    } else if (housingBudgetTier === '500-800') {
      filteredPool = pool.filter(c => {
        const p = c.priceInfo;
        if (!p) return true;
        return p.totalPriceRange.includes('5') || p.totalPriceRange.includes('6') || p.totalPriceRange.includes('7') || p.totalPriceRange.includes('800');
      });
    } else if (housingBudgetTier === '800-1200') {
      filteredPool = pool.filter(c => {
        const p = c.priceInfo;
        if (!p) return true;
        return p.totalPriceRange.includes('8') || p.totalPriceRange.includes('9') || p.totalPriceRange.includes('10') || p.totalPriceRange.includes('11') || p.totalPriceRange.includes('1200');
      });
    } else if (housingBudgetTier === '1200+') {
      filteredPool = pool.filter(c => {
        const p = c.priceInfo;
        if (!p) return true;
        return p.totalPriceRange.includes('12') || p.totalPriceRange.includes('13') || p.totalPriceRange.includes('15') || p.totalPriceRange.includes('16') || p.totalPriceRange.includes('18') || p.totalPriceRange.includes('20') || p.totalPriceRange.includes('22');
      });
    }

    // Fall back to unfiltered pool if budget filtered is empty, to prevent showing zero results
    const finalCommunities = filteredPool.length > 0 ? filteredPool : pool;

    // Sort by priority
    finalCommunities.sort((a, b) => {
      if (homeBuyingPriority === 'balanced_quality') {
        const aScore = a.priceInfo?.propertyType.includes('商品房') || a.priceInfo?.propertyType.includes('次新') || a.priceInfo?.propertyType.includes('品质') ? 1 : 0;
        const bScore = b.priceInfo?.propertyType.includes('商品房') || b.priceInfo?.propertyType.includes('次新') || b.priceInfo?.propertyType.includes('品质') ? 1 : 0;
        return bScore - aScore;
      }
      if (homeBuyingPriority === 'quota_entry') {
        const aPrice = a.priceInfo?.averagePrice || 999999;
        const bPrice = b.priceInfo?.averagePrice || 999999;
        return aPrice - bPrice;
      }
      if (homeBuyingPriority === 'nine_year') {
        const aNine = a.priceInfo?.premiumTag?.includes('九年') || a.matchedMiddleSchool.includes('直升') || a.schoolName.includes('九年') ? 1 : 0;
        const bNine = b.priceInfo?.premiumTag?.includes('九年') || b.matchedMiddleSchool.includes('直升') || b.schoolName.includes('九年') ? 1 : 0;
        return bNine - aNine;
      }
      return 0;
    });

    return {
      boards,
      communities: finalCommunities.slice(0, 12),
      isBudgetFilteredFallback: filteredPool.length === 0 && pool.length > 0
    };
  }, [
    isGenerated, 
    advisorMode, 
    locationSelectionMode, 
    selectedBoardIds, 
    selectedCustomDistricts, 
    customTargetCommunityIds, 
    customSearchQuery, 
    housingBudgetTier, 
    homeBuyingPriority
  ]);

  // Copy home buyer recommendations summary to clipboard (P1-6)
  const handleCopyAdvisorSummary = () => {
    if (!homeBuyerResults) return;

    const budgetLabel = HOUSING_BUDGET_OPTIONS.find(b => b.id === housingBudgetTier)?.label || '全预算配置';
    const topComms = homeBuyerResults.communities.slice(0, 4);

    const summaryText = [
      `【魔都幼小择校通 · 学区置业推演方案摘要】`,
      `👶 适龄儿童：${childCohort.birthDate} (${childCohort.zodiac}宝) · 对应 ${childCohort.primaryYear} 年入小学 (满6周岁)`,
      `💰 置业预算：${budgetLabel}`,
      `🛡️ 时间线参考：若2026年完成相关登记，至${childCohort.primaryYear}年约为 ${childCohort.hukouYearsIfMovedNow} 年；是否计入排序及“五年一户”需按当年官方口径核验。`,
      ``,
      `🏆 推荐对口学区楼盘与学校组合：`,
      ...topComms.map((c, i) => 
        `${i + 1}. 【${c.district}】${c.communityName}\n` +
        `   · 参考总价：${c.priceInfo?.totalPriceRange || '查阅最新挂牌'} (${c.priceInfo?.propertyType || ''})\n` +
        `   · 对口小学：${c.schoolName}\n` +
        `   · 对口初中：${c.matchedMiddleSchool}\n` +
        `   · 入户建议：人户一致满 ${c.yearsRequiredAdvice} 年`
      ),
      ``,
      `💡 置业信息核对建议：`,
      `建议重点锁定双公办一梯队或九年一贯制楼盘；注意父母产证份额（需占50%以上或夫妻共有）；落户前务必核验五年一户占用状态。`,
      `数据说明：官方原文优先；历史资料与高德地理信息分层展示，未绑定官方链接的关系不视为已核验。`
    ].join('\n');

    navigator.clipboard.writeText(summaryText).then(() => {
      setCopiedSummaryToast(true);
      setTimeout(() => setCopiedSummaryToast(false), 3000);
    }).catch(() => {
      alert('复制失败，请手动长按复制');
    });
  };

  // Existing Property Recommendation Algorithm
  const results = React.useMemo(() => {

    if (!isGenerated) return null;

    // Filter pool
    const pool = SCHOOLS_DATA.filter(s => {
      if (s.verificationStatus !== 'verified' || s.canSimulateAdmission !== true) return false;
      if (s.stage !== stage) return false;
      if (selectedDistricts.length > 0 && !selectedDistricts.includes(s.district) && s.enrollment.scope !== '全市摇号') {
        return false;
      }
      return true;
    });

    // Score schools
    const scoredSchools = pool.map(school => {
      let score = 50;

      if (selectedCommunity && school.id === selectedCommunity.matchedSchoolId) {
        score += 50;
      }

      const annualTermTuition = school.tuition.isFree ? 0 : school.tuition.amount;
      if (annualTermTuition <= budgetPerTerm) {
        score += 25;
      } else {
        score -= (annualTermTuition - budgetPerTerm) / 5000 * 5;
      }

      if (routePreference === 'system_in') {
        if (school.downstream.routeType === '体制内中高考') score += 30;
        if (school.downstream.routeType === '公民双轨可选') score += 15;
        if (school.downstream.routeType === '体制外出国留学') score -= 30;
      } else if (routePreference === 'system_out') {
        if (school.downstream.routeType === '体制外出国留学') score += 35;
        if (school.downstream.routeType === '公民双轨可选') score += 20;
        if (school.downstream.routeType === '体制内中高考') score -= 25;
      } else {
        if (school.downstream.routeType === '公民双轨可选') score += 35;
        if (school.downstream.routeType === '体制内中高考') score += 15;
      }

      if (educationStyle === 'academic' && school.academic.rigorLevel.includes('鸡血')) score += 20;
      if (educationStyle === 'balanced' && school.academic.rigorLevel.includes('均衡')) score += 20;
      if (educationStyle === 'happy_holistic' && school.academic.rigorLevel.includes('快乐')) score += 20;
      if (educationStyle === 'bilingual_english' && (school.academic.foreignTeacherRatio?.includes('高配') || school.academic.curriculum.includes('双语浸润课程'))) score += 25;

      if (school.type === 'public') {
        if (hukouStatus === 'sh_consistent') {
          if (hukouYears >= (school.enrollment.hukouYearsRequired || 1)) score += 20;
          else score -= 10;
        } else if (hukouStatus === 'sh_separated') {
          if (school.tier === '公办一梯队' || school.tier === '市示范园') score -= 30;
          else score += 10;
        } else if (hukouStatus === 'non_sh_points') {
          if (school.tier === '公办一梯队') score -= 40;
          else score += 5;
        }
      }

      return { school, score };
    });

    scoredSchools.sort((a, b) => b.score - a.score);

    let safeList = scoredSchools
      .filter(item => item.school.type === 'public' || item.school.downstream.routeType === '公民双轨可选')
      .slice(0, 3)
      .map(i => i.school);

    if (selectedCommunity) {
      const exactSchool = SCHOOLS_DATA.find(s => s.id === selectedCommunity.matchedSchoolId);
      if (exactSchool) {
        safeList = [exactSchool, ...safeList.filter(s => s.id !== exactSchool.id)].slice(0, 3);
      }
    }

    const sprintList = scoredSchools
      .filter(item => (item.school.type !== 'public' || item.school.enrollment.scope === '全市摇号') && !safeList.some(s => s.id === item.school.id))
      .slice(0, 3)
      .map(i => i.school);

    const backupList = scoredSchools
      .filter(item => !sprintList.some(s => s.id === item.school.id) && !safeList.some(s => s.id === item.school.id))
      .slice(0, 2)
      .map(i => i.school);

    let hukouAnalysis = '';
    let riskWarning = '';
    let strategyAdvice = '';

    if (selectedCommunity) {
      hukouAnalysis = `【精确学区划片诊断】您的房产位于 [${selectedCommunity.district} · ${selectedCommunity.communityName}]，居委划片法定对口【${selectedCommunity.schoolName}】，小升初对应【${selectedCommunity.matchedMiddleSchool}】。`;
      
      if (hukouStatus === 'sh_consistent') {
        if (hukouYears >= selectedCommunity.yearsRequiredAdvice) {
          riskWarning = `入户年限充足：您已落户满 ${hukouYears} 年（对口校建议 ${selectedCommunity.yearsRequiredAdvice} 年以上）。注意：若您参与民办小学摇号未中，回流时由于公民同招排位后置，对口校生源超额将导致被直接统筹分流！`;
          strategyAdvice = `【强烈建议】您手握顶级公办 ${selectedCommunity.schoolName} 的第 1 顺位直录优势，建议直接填报对口公办，稳稳接住优质学额，切莫轻易去民办当摇号分母！`;
        } else {
          riskWarning = `入户年限预警：您仅落户满 ${hukouYears} 年，而该小区对口学校近年历史超额峰值需满 ${selectedCommunity.yearsRequiredAdvice} 年。存在被同小区年限更长生源挤落至统筹批次的可能。`;
          strategyAdvice = `【策略建议】紧盯当年教育局发布的入户排位摸底线。若希望博上限，可考虑第一志愿报名民办名校冲刺。`;
        }
      } else if (hukouStatus === 'sh_separated') {
        riskWarning = `人户分离统筹警告：您在 ${selectedCommunity.communityName} 虽有房产，但户籍在其他区，属于第3顺位。该对口学校第一顺位人户一致即录满，您无法直接入读，必被统筹至周边普通小学！`;
        strategyAdvice = `【解法】立即将儿童及父母户籍迁入该房产做实“人户一致”；若来不及迁户，建议首选填报民办小学摇号博取优质学位。`;
      } else {
        riskWarning = `非沪籍随迁子女安排：该小区对口公办为热门紧俏校，无法直接对口接纳，将由区教育局在全区富余学额中统筹。`;
        strategyAdvice = `持有120分积分家庭可平等参加全市民办摇号，建议优先选报双语民办。`;
      }
    } else if (customCommunityName) {
      hukouAnalysis = `【居住小区空间研判】您的房产位于 [${communityDistrict} · ${customCommunityName}]。已结合所在行政区公办招生规则进行排位推演。`;
      if (hukouStatus === 'sh_consistent') {
        riskWarning = `人户一致提示：在 ${communityDistrict} 拥有对应户籍与产权（入户约 ${hukouYears} 年），属于公办第 1 顺位。若选报民办小学摇号且未中，回流对口公办时排位后置，若片区生源爆满将被统筹分流。`;
        strategyAdvice = `建议在每年4月结合所属居委会招生地段公示表核定对口学校；若计划冲刺民办名校，建议做好保底统筹预案。`;
      } else {
        riskWarning = `人户分离/积分统筹提示：属于统筹排位批次，热门公办校第一顺位通常直接录满，大概率由 ${communityDistrict} 教育局在全区学额中统筹分流。`;
        strategyAdvice = `冲刺优质民办摇号最具性价比，或尽早办理户籍迁入手续做实人户一致。`;
      }
    } else {
      if (hukouStatus === 'sh_consistent') {
        hukouAnalysis = `家庭持有本市户籍人户一致（入户约 ${hukouYears} 年），属于公办录取第一顺位黄金梯队。`;
        riskWarning = '公民同招警示：若选报民办小学摇号且未中，回流对口公办时排位后置，热门一梯队公办大概率因名额爆满而无法录取，将被统筹至二梯队！';
        strategyAdvice = '手握强势公办者，直接填报公办最稳妥。';
      } else {
        hukouAnalysis = '家庭为本市户籍人户分离或非沪籍达标，属于公办统筹梯队。';
        riskWarning = '热门公办一梯队人户一致直接录满，人户分离与非沪籍大概率统筹分流。';
        strategyAdvice = '冲刺优质民办摇号最具性价比。';
      }
    }

    return {
      sprintList,
      safeList,
      backupList,
      hukouAnalysis,
      riskWarning,
      strategyAdvice
    };
  }, [isGenerated, stage, selectedDistricts, selectedCommunity, hukouStatus, hukouYears, routePreference, budgetPerTerm, educationStyle]);

  const handleStartGenerate = () => {
    setIsGenerated(true);
  };

  const handleReset = () => {
    setIsGenerated(false);
    setCurrentStep(1);
  };

  const hasVerifiedAdmissionsData = CATCHMENTS_DATA.some(
    (community) => community.verificationStatus === 'verified' && community.canSimulateAdmission
  ) && SCHOOLS_DATA.some((school) => school.verificationStatus === 'verified' && school.canSimulateAdmission);

  if (!hasVerifiedAdmissionsData) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="rounded-3xl border border-amber-200 bg-white p-6 sm:p-8 shadow-sm">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold text-amber-900">
            <AlertTriangle className="h-4 w-4" />
            官方招生关系尚未完成核验
          </div>
          <h2 className="mt-4 text-2xl font-black text-slate-950">资料核对向导暂不生成择校结论</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            当前历史资料尚未逐条绑定区教育局原文、招生年度和核验日期。为避免把历史经验、高德附近学校或房价信息误当成录取依据，智能推荐、梯队排序和置业结论已暂停。
          </p>
          <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
            <div className="font-bold text-slate-900">恢复条件</div>
            <div className="mt-2 leading-6">至少完成一条“官方原文链接 + 招生年度 + 地段关系 + 复核日期”的有效记录；高德数据只用于地点、坐标、距离和导航。</div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* Title Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
          智能择校与学区置业选址系统
        </div>
        <h2 className="text-2xl sm:text-3xl font-black text-slate-950">
          量身定制家庭最优择校与选址方案
        </h2>
        <p className="text-xs sm:text-sm text-slate-500">
          以置业信息整理为核心，分开展示历史招生关系、房价参考和高德地理信息，不对录取做承诺
        </p>
      </div>

      {/* Mode Switcher Tabs */}
      <div className="flex justify-center">
        <div className="bg-slate-200/80 p-1 rounded-2xl inline-flex shadow-inner">
          <button
            type="button"
            onClick={() => {
              setAdvisorMode('home_buyer');
              setIsGenerated(false);
            }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              advisorMode === 'home_buyer'
                ? 'bg-white text-blue-700 shadow-md ring-1 ring-black/5'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Compass className="w-4 h-4 text-blue-600" />
            <span>🏢 学区房置业选址导购 (计划买房/换房首选)</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setAdvisorMode('existing_property');
              setIsGenerated(false);
            }}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
              advisorMode === 'existing_property'
                ? 'bg-white text-blue-700 shadow-md ring-1 ring-black/5'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <Home className="w-4 h-4 text-emerald-600" />
            <span>🏠 已有房产对口自查 (已有固定小区)</span>
          </button>
        </div>
      </div>

      {/* CORE COMPACT COMPONENT: Child Age & 8.31 Statutory Cutoff Bar (No More Clutter!) */}
      <div className="bg-gradient-to-r from-pink-50/90 via-slate-50 to-blue-50/80 p-4 sm:p-5 rounded-3xl border border-pink-200/70 shadow-xs space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-pink-100 pb-2.5">
          <div className="flex items-center gap-2">
            <CalendarClock className="w-4 h-4 text-pink-600" />
            <h3 className="text-xs sm:text-sm font-black text-slate-900">
              小朋友确切出生日期 · 8月31日法定学龄分水岭核算
            </h3>
          </div>
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
            childCohort.isEarlyHalfYear 
              ? 'bg-emerald-50 text-emerald-800 border-emerald-200' 
              : 'bg-purple-50 text-purple-800 border-purple-200'
          }`}>
            {childCohort.halfYearLabel} · {childCohort.enrollmentCutoffTag}
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 items-center">
          {/* Date Picker & Presets */}
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center gap-2">
              <input
                type="date"
                value={childBirthDate}
                min="2018-01-01"
                max="2026-12-31"
                onChange={(e) => setChildBirthDate(e.target.value)}
                className="px-3.5 py-2 bg-white border-2 border-pink-300 focus:border-pink-500 rounded-xl text-xs sm:text-sm font-bold text-slate-800 shadow-2xs focus:outline-none focus:ring-2 focus:ring-pink-500/20 w-full sm:w-auto"
              />
              <span className="text-[11px] text-slate-500 hidden sm:inline">
                点选具体出生年月日
              </span>
            </div>

            {/* Quick Presets */}
            <div className="flex flex-wrap gap-1.5 pt-0.5">
              {[
                { date: '2024-05-15', label: '🍼 24龙宝·上半年', note: '27入园/30小学' },
                { date: '2024-10-15', label: '🍼 24龙宝·下半年', note: '28入园/31小学' },
                { date: '2025-05-15', label: '👶 25蛇宝·早鸟', note: '28入园/31小学' },
                { date: '2023-05-15', label: '🎒 23兔宝·入园年', note: '26今年入园' },
                { date: '2021-05-15', label: '🏫 21/22大童·冲刺', note: '27幼升小' }
              ].map((p) => (
                <button
                  key={p.date}
                  type="button"
                  onClick={() => setChildBirthDate(p.date)}
                  className={`px-2 py-1 rounded-lg text-[10px] font-semibold transition-all cursor-pointer ${
                    childBirthDate === p.date
                      ? 'bg-pink-600 text-white shadow-xs'
                      : 'bg-white hover:bg-pink-50 text-slate-700 border border-slate-200'
                  }`}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Realtime Calculated Cohort Info */}
          <div className="md:col-span-6 bg-white/90 p-3 rounded-2xl border border-pink-200/80 shadow-2xs space-y-1.5 text-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 font-bold text-slate-900">
                <span className="text-base">{childCohort.zodiacEmoji}</span>
                <span>{childCohort.birthYear}年生 ({childCohort.zodiac}宝)</span>
                <span className="text-slate-300">|</span>
                <span className="text-pink-700 font-extrabold">实足 {childCohort.ageYears} 岁 {childCohort.ageMonths} 个月</span>
              </div>
              <span className="text-[10px] text-slate-400">
                {childCohort.birthDate}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-[11px] pt-1 border-t border-slate-100">
              <div>
                <span className="text-slate-500">小班入园：</span>
                <strong className="text-pink-700 font-bold">{childCohort.kindergartenYear} 年 9 月</strong>
              </div>
              <div>
                <span className="text-slate-500">幼升小入学：</span>
                <strong className="text-blue-700 font-bold">{childCohort.primaryYear} 年 9 月</strong>
              </div>
            </div>

            <div className="pt-1 text-[11px] text-indigo-900 font-medium bg-indigo-50/70 px-2 py-1 rounded-lg">
              🛡️ 时间间隔测算：若 2026 年完成相关登记，至【{childCohort.primaryYear}年】约为 <strong>{childCohort.hukouYearsIfMovedNow} 年</strong>；是否满足当年条件须以所属区官方原文核验。
            </div>
          </div>
        </div>
      </div>

      {/* ======================================================== */}
      {/* MODE 1: HOME BUYER MODE (学区房置业选址导购 - 主流推荐模式) */}
      {/* ======================================================== */}
      {advisorMode === 'home_buyer' && !isGenerated && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-8 animate-fadeIn">
          
          {/* Dimension 1: 购房总价预算 */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
                  1
                </span>
                买房总价预算区间 (学区房置业总成本)
              </label>
              <span className="text-xs text-blue-600 font-semibold">
                免去学杂费纠结，直击房产首付与总价门槛
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5">
              {HOUSING_BUDGET_OPTIONS.map((opt) => (
                <div
                  key={opt.id}
                  onClick={() => setHousingBudgetTier(opt.id)}
                  className={`p-3.5 rounded-2xl border-2 cursor-pointer transition-all ${
                    housingBudgetTier === opt.id
                      ? 'border-blue-600 bg-blue-50/60 shadow-xs ring-2 ring-blue-500/20'
                      : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                  }`}
                >
                  <div className="font-black text-slate-900 text-sm">{opt.label}</div>
                  <div className="text-[11px] font-bold text-blue-700 mt-0.5">{opt.subLabel}</div>
                  <p className="text-[10px] text-slate-500 mt-1.5 leading-relaxed">
                    {opt.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Dimension 2: 目标热门学区板块选址矩阵 */}
          <div className="space-y-4 pt-2 border-t border-slate-100">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <label className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
                  2
                </span>
                目标学区选址范围 (热门标杆 · 全城16区自主勾选 · 精准搜索)
              </label>
              <div className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200/60 flex items-center gap-1.5">
                {locationSelectionMode === 'preset_boards' && (
                  <span>已选 <strong>{selectedBoardIds.length}</strong> 个标杆学区板块</span>
                )}
                {locationSelectionMode === 'custom_districts' && (
                  <span>已自主选定 <strong>{selectedCustomDistricts.length}</strong> 个行政区 (全城覆盖)</span>
                )}
                {locationSelectionMode === 'custom_search' && (
                  <span>已添加 <strong>{customTargetCommunityIds.length}</strong> 个自定义目标楼盘/板块</span>
                )}
              </div>
            </div>

            {/* Selection Mode Switcher Tabs */}
            <div className="flex p-1 bg-slate-100 rounded-2xl gap-1 text-xs font-bold text-slate-600 shadow-inner">
              <button
                type="button"
                onClick={() => setLocationSelectionMode('preset_boards')}
                className={`flex-1 py-2 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  locationSelectionMode === 'preset_boards'
                    ? 'bg-white text-blue-700 shadow-xs ring-1 ring-slate-200/80 font-black'
                    : 'hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                <span>🌟 热门标杆学区 (12大精选板块)</span>
              </button>
              <button
                type="button"
                onClick={() => setLocationSelectionMode('custom_districts')}
                className={`flex-1 py-2 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  locationSelectionMode === 'custom_districts'
                    ? 'bg-white text-blue-700 shadow-xs ring-1 ring-slate-200/80 font-black'
                    : 'hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                <span>🗺️ 全城16区自主勾选 (任意组合)</span>
              </button>
              <button
                type="button"
                onClick={() => setLocationSelectionMode('custom_search')}
                className={`flex-1 py-2 px-3 rounded-xl transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  locationSelectionMode === 'custom_search'
                    ? 'bg-white text-blue-700 shadow-xs ring-1 ring-slate-200/80 font-black'
                    : 'hover:text-slate-900 hover:bg-slate-200/50'
                }`}
              >
                <span>🔍 自主搜索板块/楼盘 (精准锁定)</span>
              </button>
            </div>

            {/* ==================== TAB 1: 热门标杆学区 ==================== */}
            {locationSelectionMode === 'preset_boards' && (
              <div className="space-y-3.5 animate-fadeIn">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                  {/* District Filter Pills */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className="text-slate-400 font-medium">区域筛选：</span>
                    {['全部', '浦东新区', '徐汇区', '闵行区', '静安区', '黄浦区', '长宁区', '普陀区', '杨浦区', '虹口区'].map((dist) => (
                      <button
                        key={dist}
                        type="button"
                        onClick={() => setBoardDistrictFilter(dist)}
                        className={`px-2.5 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                          boardDistrictFilter === dist
                            ? 'bg-blue-600 text-white shadow-2xs'
                            : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                      >
                        {dist}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleSelectAllBoards}
                      className="text-xs text-blue-600 hover:text-blue-800 font-semibold cursor-pointer"
                    >
                      全选全部标杆
                    </button>
                    <span className="text-slate-300">|</span>
                    <button
                      type="button"
                      onClick={handleClearBoards}
                      className="text-xs text-slate-500 hover:text-slate-800 cursor-pointer"
                    >
                      重置单选
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {SCHOOL_BOARDS_DATA.filter(b => boardDistrictFilter === '全部' || b.district === boardDistrictFilter).map((board) => {
                    const isSelected = selectedBoardIds.includes(board.id);
                    return (
                      <div
                        key={board.id}
                        onClick={() => toggleBoard(board.id)}
                        className={`p-4 rounded-2xl border-2 cursor-pointer transition-all relative ${
                          isSelected
                            ? 'border-blue-600 bg-blue-50/40 shadow-sm ring-2 ring-blue-500/20'
                            : 'border-slate-200 hover:border-slate-300 bg-white'
                        }`}
                      >
                        {/* Checkmark badge */}
                        <div className={`absolute top-3.5 right-3.5 w-5 h-5 rounded-full flex items-center justify-center text-xs ${
                          isSelected ? 'bg-blue-600 text-white' : 'border border-slate-300 text-transparent'
                        }`}>
                          ✓
                        </div>

                        <div className="space-y-2 pr-6">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[10px] bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded font-bold">
                              {board.district}
                            </span>
                            <h4 className="font-extrabold text-slate-900 text-sm sm:text-base">
                              {board.name}
                            </h4>
                          </div>

                          <div className="inline-block text-[11px] font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-full border border-indigo-200/60">
                            {board.tag}
                          </div>

                          <div className="flex items-baseline gap-2 pt-1">
                            <span className="text-xs font-bold text-amber-700">{board.priceRange}</span>
                            <span className="text-[11px] text-slate-400">|</span>
                            <span className="text-xs font-semibold text-slate-600">主力 {board.totalBudgetRange}</span>
                          </div>

                          <div className="text-[11px] text-slate-600 space-y-0.5 pt-1 border-t border-slate-100">
                            <div>🎒 <strong>小学：</strong>{board.primarySchool}</div>
                            <div>🏫 <strong>初中：</strong>{board.middleSchool}</div>
                          </div>

                          <p className="text-[10px] text-slate-400 pt-1 line-clamp-2">
                            {board.suitability}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* ==================== TAB 2: 全城16区自主勾选 ==================== */}
            {locationSelectionMode === 'custom_districts' && (
              <div className="space-y-4 animate-fadeIn">
                {/* Quick Presets */}
                <div className="flex flex-wrap items-center justify-between gap-2 p-3 bg-blue-50/60 rounded-2xl border border-blue-100 text-xs">
                  <span className="font-bold text-blue-950 flex items-center gap-1">
                    ⚡ 快捷组合：
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setSelectedCustomDistricts(['徐汇区', '黄浦区', '静安区', '长宁区', '杨浦区', '虹口区', '普陀区'])}
                      className="px-2.5 py-1 bg-white hover:bg-blue-100 text-blue-800 rounded-lg font-medium border border-blue-200 transition-colors cursor-pointer"
                    >
                      中心城区强区 (7区)
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedCustomDistricts(['徐汇区', '浦东新区', '闵行区', '杨浦区'])}
                      className="px-2.5 py-1 bg-white hover:bg-blue-100 text-blue-800 rounded-lg font-medium border border-blue-200 transition-colors cursor-pointer"
                    >
                      教育高地四大金刚 (徐汇/浦东/闵行/杨浦)
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedCustomDistricts(['宝山区', '嘉定区', '松江区', '青浦区', '奉贤区'])}
                      className="px-2.5 py-1 bg-white hover:bg-blue-100 text-blue-800 rounded-lg font-medium border border-blue-200 transition-colors cursor-pointer"
                    >
                      外环新城性价比 (5区)
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedCustomDistricts([
                        '徐汇区', '黄浦区', '静安区', '长宁区', '普陀区', '虹口区', '杨浦区',
                        '浦东新区', '闵行区', '宝山区', '嘉定区', '松江区', '青浦区', '奉贤区', '金山区', '崇明区'
                      ])}
                      className="px-2.5 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-2xs transition-colors cursor-pointer"
                    >
                      全选 16 区
                    </button>
                    <button
                      type="button"
                      onClick={() => setSelectedCustomDistricts(['徐汇区'])}
                      className="px-2.5 py-1 bg-white hover:bg-slate-100 text-slate-600 rounded-lg font-medium border border-slate-200 transition-colors cursor-pointer"
                    >
                      清空重选
                    </button>
                  </div>
                </div>

                {/* District Group 1: 市中心核心区 (7区) */}
                <div className="space-y-2">
                  <div className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    市中心核心区 (传统公办名门与顶流初中派位资源)
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                    {(['徐汇区', '黄浦区', '静安区', '长宁区', '杨浦区', '虹口区', '普陀区'] as District[]).map((dist) => {
                      const isSelected = selectedCustomDistricts.includes(dist);
                      const profile = DISTRICT_EDUCATIONAL_PROFILES[dist];
                      const commCount = CATCHMENTS_DATA.filter(c => c.district === dist).length;
                      return (
                        <div
                          key={dist}
                          onClick={() => toggleCustomDistrict(dist)}
                          className={`p-3 rounded-2xl border-2 cursor-pointer transition-all ${
                            isSelected
                              ? 'border-blue-600 bg-blue-50/50 shadow-xs ring-2 ring-blue-500/20'
                              : 'border-slate-200 hover:border-slate-300 bg-white'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="font-extrabold text-slate-900 text-sm">{dist}</div>
                            <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                              isSelected ? 'bg-blue-600 text-white font-bold' : 'border border-slate-300 text-transparent'
                            }`}>
                              ✓
                            </div>
                          </div>
                          <div className="text-[11px] font-semibold text-blue-700 mt-1 line-clamp-1">
                            {profile?.tag.split('·')[0] || dist}
                          </div>
                          <div className="text-[10px] text-slate-500 mt-1 flex items-center justify-between">
                            <span>参考 {profile?.priceRange}</span>
                            <span className="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-medium">{commCount} 社区</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* District Group 2: 中外环教育大区 (2区) */}
                <div className="space-y-2">
                  <div className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
                    中外环教育大区 (体量庞大 · 九年一贯与单校对口主力)
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {(['浦东新区', '闵行区'] as District[]).map((dist) => {
                      const isSelected = selectedCustomDistricts.includes(dist);
                      const profile = DISTRICT_EDUCATIONAL_PROFILES[dist];
                      const commCount = CATCHMENTS_DATA.filter(c => c.district === dist).length;
                      return (
                        <div
                          key={dist}
                          onClick={() => toggleCustomDistrict(dist)}
                          className={`p-3 rounded-2xl border-2 cursor-pointer transition-all ${
                            isSelected
                              ? 'border-emerald-600 bg-emerald-50/50 shadow-xs ring-2 ring-emerald-500/20'
                              : 'border-slate-200 hover:border-slate-300 bg-white'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="font-extrabold text-slate-900 text-sm">{dist}</div>
                            <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                              isSelected ? 'bg-emerald-600 text-white font-bold' : 'border border-slate-300 text-transparent'
                            }`}>
                              ✓
                            </div>
                          </div>
                          <div className="text-[11px] font-semibold text-emerald-800 mt-1">
                            {profile?.tag}
                          </div>
                          <div className="text-[10px] text-slate-500 mt-1 flex items-center justify-between">
                            <span>参考 {profile?.priceRange}</span>
                            <span className="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-medium">{commCount} 标杆社区</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* District Group 3: 近郊与发展新城 (7区) */}
                <div className="space-y-2">
                  <div className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                    近郊宜居与发展新城区 (高性价比自住大盘 · 轨交配套完善)
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                    {(['宝山区', '嘉定区', '松江区', '青浦区', '奉贤区', '金山区', '崇明区'] as District[]).map((dist) => {
                      const isSelected = selectedCustomDistricts.includes(dist);
                      const profile = DISTRICT_EDUCATIONAL_PROFILES[dist];
                      const commCount = CATCHMENTS_DATA.filter(c => c.district === dist).length;
                      return (
                        <div
                          key={dist}
                          onClick={() => toggleCustomDistrict(dist)}
                          className={`p-3 rounded-2xl border-2 cursor-pointer transition-all ${
                            isSelected
                              ? 'border-amber-600 bg-amber-50/50 shadow-xs ring-2 ring-amber-500/20'
                              : 'border-slate-200 hover:border-slate-300 bg-white'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div className="font-extrabold text-slate-900 text-sm">{dist}</div>
                            <div className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                              isSelected ? 'bg-amber-600 text-white font-bold' : 'border border-slate-300 text-transparent'
                            }`}>
                              ✓
                            </div>
                          </div>
                          <div className="text-[11px] font-semibold text-amber-800 mt-1 line-clamp-1">
                            {profile?.tag.split('·')[0] || dist}
                          </div>
                          <div className="text-[10px] text-slate-500 mt-1 flex items-center justify-between">
                            <span>参考 {profile?.priceRange}</span>
                            <span className="bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-medium">{commCount} 社区</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* ==================== TAB 3: 自主搜索板块/小区 ==================== */}
            {locationSelectionMode === 'custom_search' && (
              <div className="space-y-4 animate-fadeIn">
                {/* Search Bar */}
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3.5 top-3.5 text-slate-400" />
                  <input
                    type="text"
                    value={customSearchQuery}
                    onChange={(e) => setCustomSearchQuery(e.target.value)}
                    placeholder="输入您心仪的板块、街道或小区名（如：前滩、联洋、古北、大宁、中远两湾城、南翔、徐泾、康城、春申...）"
                    className="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-300 rounded-2xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                  />
                  {customSearchQuery && (
                    <button
                      type="button"
                      onClick={() => setCustomSearchQuery('')}
                      className="absolute right-3.5 top-3 text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Hot shortcut presets */}
                <div className="flex flex-wrap items-center gap-1.5 text-xs">
                  <span className="text-slate-400 font-medium">🔥 热门板块快捷加选：</span>
                  {[
                    { label: '+ 浦东·前滩/三林', ids: ['pd-vanke-xinlicheng', 'pd-qianhai-linli'] },
                    { label: '+ 浦东·联洋/花木', ids: ['pd-renheng-hebin', 'pd-lianyang-nianhua'] },
                    { label: '+ 徐汇·衡复/徐家汇', ids: ['xh-wending-tianxia', 'xh-xujiahui-huayuan', 'xh-nandan-xiaoqu'] },
                    { label: '+ 闵行·春申/莘庄', ids: ['mh-chunshen-jingcheng', 'mh-jiangnan-yuan', 'mh-wanke-dushi'] },
                    { label: '+ 静安·大宁/曹家渡', ids: ['ja-haifang-cun', 'ja-huizhihu-huayuan'] },
                    { label: '+ 长宁·古北/华阳', ids: ['cn-gubei-xiaoqu', 'cn-jiangsu-lu-xiaoqu'] },
                    { label: '+ 普陀·两湾城/长风', ids: ['pt-zhongyuan-liangwancheng', 'pt-dahua-qingshuiwan'] },
                    { label: '+ 嘉定·南翔', ids: ['jd-baoli-jiayuan'] },
                    { label: '+ 松江·大学城', ids: ['sj-baoli-xiziwan'] },
                    { label: '+ 青浦·徐泾大虹桥', ids: ['qp-zhaoshang-hongqiao'] }
                  ].map(shortcut => (
                    <button
                      key={shortcut.label}
                      type="button"
                      onClick={() => handleAddBatchCommunities(shortcut.ids)}
                      className="px-2 py-0.5 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 text-slate-600 rounded-md text-[11px] font-medium transition-colors cursor-pointer"
                    >
                      {shortcut.label}
                    </button>
                  ))}
                </div>

                {/* Selected Targets Watchlist Display */}
                {customTargetCommunityIds.length > 0 && (
                  <div className="p-3 bg-blue-50/50 rounded-2xl border border-blue-200/80 space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-blue-900 flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                        已添加到置业选址库的目标小区 ({customTargetCommunityIds.length} 个)：
                      </span>
                      <button
                        type="button"
                        onClick={() => setCustomTargetCommunityIds([])}
                        className="text-slate-400 hover:text-rose-600 text-[11px] cursor-pointer"
                      >
                        清空已选
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {customTargetCommunityIds.map(id => {
                        const comm = CATCHMENTS_DATA.find(c => c.id === id);
                        if (!comm) return null;
                        return (
                          <span
                            key={id}
                            className="inline-flex items-center gap-1 bg-white border border-blue-200 text-blue-900 text-xs px-2.5 py-1 rounded-xl shadow-2xs font-medium"
                          >
                            <span>{comm.communityName.split(' ')[0]} ({comm.district})</span>
                            <button
                              type="button"
                              onClick={() => toggleCustomCommunityTarget(id)}
                              className="text-slate-400 hover:text-rose-600"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Matched Communities List */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span>
                      {customSearchQuery.trim() ? `搜索 "${customSearchQuery}" 匹配到：` : '推荐关注的核心楼盘与对口学区：'}
                    </span>
                    <span>共 {searchedCustomCommunities.length} 个结果</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 max-h-80 overflow-y-auto pr-1">
                    {searchedCustomCommunities.map(comm => {
                      const isAdded = customTargetCommunityIds.includes(comm.id);
                      return (
                        <div
                          key={comm.id}
                          className={`p-3 rounded-2xl border transition-all flex items-center justify-between gap-2 ${
                            isAdded
                              ? 'border-blue-500 bg-blue-50/60 shadow-2xs'
                              : 'border-slate-200 hover:border-slate-300 bg-white'
                          }`}
                        >
                          <div className="space-y-1 min-w-0 pr-2">
                            <div className="flex items-center gap-1.5">
                              <span className="text-[10px] bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded font-bold shrink-0">
                                {comm.district} · {comm.subdistrict}
                              </span>
                              <span className="font-extrabold text-slate-900 text-xs truncate">
                                {comm.communityName}
                              </span>
                            </div>
                            <div className="text-[11px] text-slate-600 truncate">
                              🎒 {comm.schoolName} · 🏫 {comm.matchedMiddleSchool}
                            </div>
                            {comm.priceInfo && (
                              <div className="text-[10px] font-bold text-amber-700">
                                {comm.priceInfo.totalPriceRange} · {comm.priceInfo.priceRange}
                              </div>
                            )}
                          </div>

                          <button
                            type="button"
                            onClick={() => toggleCustomCommunityTarget(comm.id)}
                            className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition-all cursor-pointer ${
                              isAdded
                                ? 'bg-blue-600 text-white shadow-2xs'
                                : 'bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-800'
                            }`}
                          >
                            {isAdded ? '✓ 已添加' : '+ 加为目标'}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Dimension 3: 置业偏好诉求 */}
          <div className="space-y-3 pt-2 border-t border-slate-100">
            <label className="text-sm font-bold text-slate-900 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
                3
              </span>
              置业房产核心偏好 (居住自住 vs 纯挂学籍)
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {HOME_BUYING_PRIORITIES.map((p) => (
                <div
                  key={p.id}
                  onClick={() => setHomeBuyingPriority(p.id)}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    homeBuyingPriority === p.id
                      ? 'border-blue-600 bg-blue-50/50 shadow-xs ring-2 ring-blue-500/20'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 text-sm">{p.title}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${p.badgeColor}`}>
                      {p.tag}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Action Trigger */}
          <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-500">
              💡 已选 {selectedBoardIds.length} 个板块 · {childCohort.birthYear}年{childCohort.zodiac}宝专属推演 (2026年落户满{childCohort.hukouYearsIfMovedNow}年)
            </div>

            <button
              type="button"
              onClick={handleStartGenerate}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white text-sm font-black px-8 py-3.5 rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-amber-300" />
              立即生成学区房置业选址方案
            </button>
          </div>

        </div>
      )}

      {/* ======================================================== */}
      {/* MODE 2: EXISTING PROPERTY SELF-CHECK (已有房产对口自查) */}
      {/* ======================================================== */}
      {advisorMode === 'existing_property' && !isGenerated && (
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          {/* Step Indicator */}
          <div className="bg-slate-50 border-b border-slate-200 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
              <span className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">
                {currentStep}
              </span>
              <span>第 {currentStep} 步 / 共 4 步</span>
            </div>

            <div className="w-48 bg-slate-200 rounded-full h-2 hidden sm:block">
              <div 
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / 4) * 100}%` }}
              />
            </div>
          </div>

          <div className="p-6 sm:p-8 space-y-6">
            {currentStep === 1 && (
              <div className="space-y-5 animate-fadeIn">
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    1. 绑定您在上海的具体居住小区
                  </h3>
                  <p className="text-xs text-slate-500">
                    输入您已购置或居住的房产，精确匹配所属居委公办划片
                  </p>
                </div>

                <div className="bg-gradient-to-r from-teal-50 to-blue-50/40 p-4 sm:p-5 rounded-2xl border border-teal-200/80 space-y-3">
                  {!selectedCommunity && !customCommunityName ? (
                    <div className="relative">
                      <div className="relative">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                        <input
                          type="text"
                          value={communitySearchQuery}
                          onChange={(e) => {
                            setCommunitySearchQuery(e.target.value);
                            setIsCommunityDropdownOpen(true);
                          }}
                          onFocus={() => setIsCommunityDropdownOpen(true)}
                          placeholder="输入居住小区名（如：朱家滩、文定天下、春申景城、海防村、永嘉新村）..."
                          className="w-full pl-10 pr-4 py-2.5 bg-white border border-teal-300 rounded-xl text-xs sm:text-sm focus:ring-2 focus:ring-teal-500 focus:outline-none"
                        />
                      </div>

                      {isCommunityDropdownOpen && (communitySuggestions.length > 0 || amapSuggestions.length > 0) && (
                        <div className="absolute z-20 top-full left-0 right-0 mt-1 bg-white rounded-2xl border border-slate-200 shadow-xl max-h-64 overflow-y-auto divide-y divide-slate-100">
                          {communitySuggestions.map((comm) => (
                            <div
                              key={comm.id}
                              onClick={() => handleSelectCommunity(comm)}
                              className="p-3 hover:bg-teal-50/60 cursor-pointer text-xs flex items-center justify-between"
                            >
                              <div>
                                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                                  <span className="text-[10px] bg-teal-100 text-teal-800 px-1.5 py-0.5 rounded font-medium">
                                    {comm.district}
                                  </span>
                                  {comm.communityName}
                                </div>
                                <div className="text-slate-500 text-[11px] mt-0.5">
                                  对口：<strong className="text-blue-700">{comm.schoolName}</strong> · 初中：{comm.matchedMiddleSchool}
                                </div>
                              </div>
                              <span className="text-teal-600 text-xs font-semibold">选择</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="bg-white p-4 rounded-xl border border-teal-300 shadow-sm space-y-2">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="font-bold text-slate-900 text-sm">
                            {selectedCommunity?.communityName || customCommunityName}
                          </div>
                          {selectedCommunity && (
                            <div className="text-xs text-slate-600 mt-1">
                              对口公办：<strong className="text-blue-700">{selectedCommunity.schoolName}</strong> · 初中：{selectedCommunity.matchedMiddleSchool}
                            </div>
                          )}
                        </div>
                        <button
                          onClick={handleClearCommunity}
                          className="text-xs text-slate-400 hover:text-slate-700"
                        >
                          重新选择
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Hukou Years */}
                <div className="space-y-3 pt-3 border-t border-slate-100">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-700">在该房产内落户年限：</span>
                    <span className="font-bold text-blue-700 text-sm">{hukouYears} 年</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="6"
                    step="0.5"
                    value={hukouYears}
                    onChange={(e) => setHukouYears(parseFloat(e.target.value))}
                    className="w-full accent-blue-600"
                  />
                  <div className="flex justify-between text-[10px] text-slate-400">
                    <span>刚迁入 (0.5年)</span>
                    <span>满 2 年 (稳妥线)</span>
                    <span>满 3.5 年以上 (一梯队无忧)</span>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4 animate-fadeIn">
                <h3 className="text-base font-bold text-slate-900">2. 升学方向偏好</h3>
                <div className="space-y-2.5">
                  {[
                    { id: 'system_in', title: '📚 坚定体制内 (中考/高考)', desc: '瞄准四校八大重点高中与国内名校' },
                    { id: 'dual_track', title: '🔀 公民双轨 (进可攻、退可守)', desc: '小学初中打牢基础，高中根据心智再选出国或中考' },
                    { id: 'system_out', title: '✈️ 坚定体制外 (海外留学)', desc: 'IB / 美高AP，培养国际胜任力' }
                  ].map(r => (
                    <div
                      key={r.id}
                      onClick={() => setRoutePreference(r.id as any)}
                      className={`p-3.5 rounded-2xl border cursor-pointer ${
                        routePreference === r.id ? 'border-blue-600 bg-blue-50/60 ring-2 ring-blue-500/20' : 'border-slate-200'
                      }`}
                    >
                      <div className="font-bold text-slate-900 text-sm">{r.title}</div>
                      <div className="text-xs text-slate-500 mt-1">{r.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-4 animate-fadeIn">
                <h3 className="text-base font-bold text-slate-900">3. 学杂费预算 (公办免学费)</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { amount: 0, title: '免费公办 (0元)', desc: '九年义务教育免学费' },
                    { amount: 45000, title: '民办自费 (4~5万/期)', desc: '世外、盛大等体制内民办' },
                    { amount: 60000, title: '双语学校 (6~7万/期)', desc: '平和、星河湾等' },
                    { amount: 100000, title: '高端国际 (10万+/期)', desc: '包玉刚等全人教育' }
                  ].map(b => (
                    <div
                      key={b.amount}
                      onClick={() => setBudgetPerTerm(b.amount)}
                      className={`p-3.5 rounded-2xl border cursor-pointer ${
                        budgetPerTerm === b.amount ? 'border-blue-600 bg-blue-50/60 ring-2 ring-blue-500/20' : 'border-slate-200'
                      }`}
                    >
                      <div className="font-bold text-slate-900 text-sm">{b.title}</div>
                      <div className="text-xs text-slate-500 mt-1">{b.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-4 animate-fadeIn">
                <h3 className="text-base font-bold text-slate-900">4. 教育风格偏好</h3>
                <div className="space-y-2.5">
                  {[
                    { id: 'academic', title: '🔥 鸡血应试扎实型', desc: '数理逻辑强、重自律反馈' },
                    { id: 'balanced', title: '⚖️ 均衡高效型', desc: '轻负担高质量、课内高效' },
                    { id: 'happy_holistic', title: '🌱 快乐素质探究型', desc: '保护好奇心、个性发展' }
                  ].map(s => (
                    <div
                      key={s.id}
                      onClick={() => setEducationStyle(s.id as any)}
                      className={`p-3.5 rounded-2xl border cursor-pointer ${
                        educationStyle === s.id ? 'border-blue-600 bg-blue-50/60 ring-2 ring-blue-500/20' : 'border-slate-200'
                      }`}
                    >
                      <div className="font-bold text-slate-900 text-sm">{s.title}</div>
                      <div className="text-xs text-slate-500 mt-1">{s.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep - 1)}
                className="flex items-center gap-1 text-slate-600 text-xs font-semibold px-4 py-2 hover:bg-slate-200 rounded-xl"
              >
                <ArrowLeft className="w-4 h-4" /> 上一步
              </button>
            ) : <div />}

            {currentStep < 4 ? (
              <button
                type="button"
                onClick={() => setCurrentStep(currentStep + 1)}
                className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-5 py-2.5 rounded-xl shadow-xs"
              >
                下一步 <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                type="button"
                onClick={handleStartGenerate}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-6 py-2.5 rounded-xl shadow-md"
              >
                <Sparkles className="w-4 h-4 text-amber-300" /> 生成诊断报告
              </button>
            )}
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* RESULTS VIEW: HOME BUYER MODE (学区房置业选址方案输出) */}
      {/* ======================================================== */}
      {isGenerated && advisorMode === 'home_buyer' && homeBuyerResults && (
        <div className="space-y-6 animate-fadeIn">
          {/* Top Banner */}
          <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5 bg-blue-500/30 px-3 py-1 rounded-full text-xs font-semibold text-blue-200 border border-blue-400/20">
                <Compass className="w-3.5 h-3.5 text-amber-300" />
                学区房置业选址与升学推演报告
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyAdvisorSummary}
                  className="flex items-center gap-1.5 text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 px-3.5 py-1.5 rounded-xl transition-all shadow-md cursor-pointer"
                  title="一键生成结构化摘要，复制到剪贴板，可直接发至微信群或家人"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedSummaryToast ? '已复制到剪贴板！' : '复制方案摘要'}</span>
                </button>
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1 text-xs text-blue-200 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-xl transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  重新选址条件
                </button>
              </div>

            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-black">
                基于 {childCohort.birthYear}年{childCohort.zodiac}宝 的定制化学区置业选址矩阵
              </h2>
              <p className="text-xs text-blue-200 mt-1">
                儿童出生日期：{childCohort.birthDate} ({childCohort.enrollmentCutoffTag}) · 预演{childCohort.primaryYear}年满6周岁入学排位
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="bg-white/10 p-3.5 rounded-2xl border border-white/10 space-y-1">
                <div className="text-amber-300 font-bold">💰 预算与选址范围</div>
                <div className="text-slate-200 text-[11px]">
                  {HOUSING_BUDGET_OPTIONS.find(b => b.id === housingBudgetTier)?.label} · 
                  {locationSelectionMode === 'preset_boards' && ` 已选 ${homeBuyerResults.boards.length} 个标杆板块`}
                  {locationSelectionMode === 'custom_districts' && ` 已选 ${selectedCustomDistricts.length} 个行政区`}
                  {locationSelectionMode === 'custom_search' && ` 自定义选址板块`}
                </div>
              </div>
              <div className="bg-white/10 p-3.5 rounded-2xl border border-white/10 space-y-1">
                <div className="text-pink-300 font-bold">🛡️ 落户时间线参考</div>
                <div className="text-slate-200 text-[11px]">
                  若今年完成过户落户，至{childCohort.primaryYear}年入学在册满整整 <strong>{childCohort.hukouYearsIfMovedNow} 年</strong>人户一致！
                </div>
              </div>
              <div className="bg-white/10 p-3.5 rounded-2xl border border-white/10 space-y-1">
                <div className="text-emerald-300 font-bold">🔓 五年一户解冻推演</div>
                <div className="text-slate-200 text-[11px]">
                  距入学尚有 {childCohort.hukouYearsIfMovedNow} 年窗口期，二手房上家即便刚用学额也恰好解冻！
                </div>
              </div>
            </div>
          </div>

          {/* Section 1: Selected Boards Horizontal Comparison */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold text-sm shadow-md">
                🗺️
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">
                  {locationSelectionMode === 'custom_districts' ? '已选行政区教育生态与置业横向对比' : '目标学区板块综合竞争力横向对比'}
                </h3>
                <p className="text-xs text-slate-500">
                  对比各板块均价走势、初中保底度、居住环境与升学天花板
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {homeBuyerResults.boards.map(board => (
                <div key={board.id} className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 shadow-2xs">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
                    <div>
                      <span className="text-[10px] bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded font-bold">
                        {board.district}
                      </span>
                      <h4 className="font-extrabold text-slate-900 text-base mt-1">
                        {board.name}
                      </h4>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-black text-amber-700">{board.priceRange}</div>
                      <div className="text-[10px] text-slate-400">主力 {board.totalBudgetRange}</div>
                    </div>
                  </div>

                  <div className="text-xs space-y-1 bg-slate-50 p-2.5 rounded-xl">
                    <div>🎒 <strong>小学：</strong>{board.primarySchool}</div>
                    <div>🏫 <strong>初中：</strong>{board.middleSchool}</div>
                    <div>🍼 <strong>幼儿：</strong>{board.kindergarten}</div>
                  </div>

                  <div className="space-y-1.5 text-[11px]">
                    <div className="flex items-center justify-between text-slate-600">
                      <span>学区天花板</span>
                      <div className="w-24 bg-slate-100 rounded-full h-2 overflow-hidden">
                        <div className="bg-blue-600 h-full rounded-full" style={{ width: `${board.score.academic}%` }} />
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-slate-600">
                      <span>初中保底度</span>
                      <div className="w-24 bg-slate-100 rounded-full h-2 overflow-hidden">
                        <div className="bg-indigo-600 h-full rounded-full" style={{ width: `${board.score.middleSchoolPipeline}%` }} />
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-slate-600">
                      <span>自住品质感</span>
                      <div className="w-24 bg-slate-100 rounded-full h-2 overflow-hidden">
                        <div className="bg-emerald-600 h-full rounded-full" style={{ width: `${board.score.livingQuality}%` }} />
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-slate-600">
                      <span>抗跌流动性</span>
                      <div className="w-24 bg-slate-100 rounded-full h-2 overflow-hidden">
                        <div className="bg-amber-500 h-full rounded-full" style={{ width: `${board.score.liquidity}%` }} />
                      </div>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-500 leading-relaxed pt-1 border-t border-slate-100">
                    💡 <strong>置业建议：</strong>{board.suitability}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Recommended Catchment Estates with Safety Calculations */}
          <div className="space-y-3 pt-4 border-t border-slate-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shadow-md">
                  🏢
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">
                    历史资料关联楼盘信息矩阵（预算与时间线参考）
                  </h3>
                  <p className="text-xs text-slate-500">
                    根据孩子生日（{childCohort.birthDate}）计算到预计入学年份的时间间隔；不代表顺位或录取结论
                  </p>
                </div>
              </div>
              <span className="text-xs text-slate-400">
                共推荐 {homeBuyerResults.communities.length} 个标杆社区
              </span>
            </div>

            {homeBuyerResults.isBudgetFilteredFallback && (
              <div className="p-3 bg-amber-50 rounded-2xl border border-amber-200 text-xs text-amber-800 flex items-center gap-2">
                <Info className="w-4 h-4 text-amber-600 shrink-0" />
                <span>提示：在所选【{HOUSING_BUDGET_OPTIONS.find(b => b.id === housingBudgetTier)?.label}】预算内，所选区域严格符合该总价的挂牌相对紧缺，已为您自动展示该区域相邻总价标杆供综合比对。</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {homeBuyerResults.communities.map((comm) => {
                const safety = calculateHukouSafety(comm);
                const matchedSchool = SCHOOLS_DATA.find(s => s.id === comm.matchedSchoolId);

                return (
                  <div
                    key={comm.id}
                    className="bg-white rounded-3xl border border-slate-200 hover:border-blue-400 p-5 space-y-3.5 shadow-2xs hover:shadow-md transition-all"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[10px] bg-slate-100 text-slate-700 px-1.5 py-0.5 rounded font-bold">
                            {comm.district} · {comm.subdistrict}
                          </span>
                          <span className="text-[10px] bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded font-semibold">
                            {comm.priceInfo?.propertyType || '住宅社区'}
                          </span>
                        </div>
                        <h4 
                          onClick={() => onNavigateToMap?.(comm)}
                          className="font-black text-slate-900 text-base mt-1 hover:text-blue-600 cursor-pointer flex items-center gap-1.5 group transition-colors"
                          title="点击在地图中查看该小区详情与对口划片范围"
                        >
                          <span>{comm.communityName}</span>
                          <MapPin className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 shrink-0 transition-colors" />
                        </h4>
                      </div>

                      {comm.priceInfo && (
                        <div className="text-right shrink-0">
                          <div className="text-sm sm:text-base font-black text-amber-700">
                            {comm.priceInfo.totalPriceRange}
                          </div>
                          <div className="text-[10px] text-slate-500">
                            参考单价 {comm.priceInfo.priceRange}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* School Pipeline */}
                    <div className="bg-slate-50/80 p-3 rounded-2xl border border-slate-100 space-y-1.5 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">🍼 对口公办幼儿园：</span>
                        <strong className="text-slate-800">{comm.matchedKindergarten || '就近一级公办园'}</strong>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-500">🎒 对口公办小学：</span>
                        <strong className="text-blue-700 font-bold">{comm.schoolName}</strong>
                      </div>
                      <div className="flex items-start justify-between gap-2">
                        <span className="text-slate-500 shrink-0">🏫 对口公办初中：</span>
                        <MiddleSchoolBadges
                          middleSchoolText={comm.matchedMiddleSchool}
                          onSelectMiddleSchool={(ms) => onSelectMiddleSchool?.(ms)}
                        />
                      </div>
                    </div>

                    {/* Live Hukou Safety Calculation Box */}
                    <div className="bg-gradient-to-r from-emerald-50/60 to-blue-50/60 p-3 rounded-2xl border border-emerald-200/80 space-y-1.5 text-xs">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-slate-800 flex items-center gap-1">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                          针对当前宝宝生日落户推演
                        </span>
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${safety.badgeColor}`}>
                          {safety.badgeText}
                        </span>
                      </div>

                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        • 若2026年完成相关登记，至【{childCohort.primaryYear}年】约为 <strong>{childCohort.hukouYearsIfMovedNow} 年</strong>；历史资料参考值为 <strong>{comm.yearsRequiredAdvice} 年</strong>，差值 <strong>{safety.safetyBuffer.toFixed(1)} 年</strong>，不构成录取判断。
                        <br />
                        • 历史资料中的“五年一户”标记与占用状态不能推导未来资格；请向教育部门核实当年规则，并通过合法渠道核验该地址实际使用情况。
                      </p>
                    </div>

                    {/* Evaluation Note */}
                    <div className="text-[11px] text-slate-500 leading-relaxed">
                      💡 <strong>置业评析：</strong>{comm.priceInfo?.premiumTag || comm.riskNote}
                    </div>

                    {/* Actions */}
                    <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <button
                          type="button"
                          onClick={() => onNavigateToMap?.(comm)}
                          className="text-xs font-bold text-emerald-700 hover:text-emerald-900 bg-emerald-50 hover:bg-emerald-100/90 px-3 py-1.5 rounded-xl flex items-center gap-1.5 cursor-pointer transition-all border border-emerald-200/80 shadow-2xs"
                          title="在上海学区全景GIS地图中查看该小区详情与对口划片范围"
                        >
                          <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                          地图查看详情 ➔
                        </button>

                        <button
                          type="button"
                          onClick={() => setAdvisorTieringCommunityId(advisorTieringCommunityId === comm.id ? null : comm.id)}
                          className={`text-xs font-semibold px-2.5 py-1.5 rounded-xl border transition-colors cursor-pointer flex items-center gap-1 ${
                            advisorTieringCommunityId === comm.id
                              ? 'bg-amber-100 border-amber-300 text-amber-900 shadow-2xs'
                              : 'bg-amber-50 hover:bg-amber-100 border-amber-200 text-amber-800'
                          }`}
                          title="展开同对口该校的同门楼盘高低配比价表与统筹去向"
                        >
                          <span>📊 同门比价与去向</span>
                          <span className="text-[10px]">{advisorTieringCommunityId === comm.id ? '▲' : '▼'}</span>
                        </button>
                      </div>

                      <div className="flex items-center gap-2">
                        {matchedSchool && (
                          <button
                            type="button"
                            onClick={() => onSelectSchool(matchedSchool)}
                            className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-0.5 cursor-pointer"
                          >
                            学校档案 <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        )}
                        {matchedSchool && (
                          <button
                            type="button"
                            onClick={() => onNavigateToSimulator(matchedSchool, comm)}
                            className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-0.5 cursor-pointer"
                          >
                            测算顺位 ➔
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Expanded Catchment Tiering Table & Fallback Deep Dive (P0-2 & P1-4) */}
                    {advisorTieringCommunityId === comm.id && (
                      <div className="pt-3 border-t border-slate-200 space-y-3 animate-fadeIn">
                        <OversubscribedFallbackCard
                          schoolId={comm.matchedSchoolId}
                          schoolName={comm.schoolName}
                        />
                        <CatchmentTieringTable
                          currentCommunity={comm}
                          allCatchments={CATCHMENTS_DATA}
                          onNavigateToMap={onNavigateToMap}
                          onNavigateToSimulator={(c) => onNavigateToSimulator(matchedSchool || SCHOOLS_DATA[0], c)}
                        />
                      </div>
                    )}
                  </div>
                );

              })}
            </div>
          </div>

          {/* Section 3: Dual-Track Strategy Guidance */}
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-5 rounded-3xl border border-indigo-200/80 space-y-2 text-xs">
            <h4 className="font-bold text-indigo-950 flex items-center gap-1.5 text-sm">
              <Sparkles className="w-4 h-4 text-indigo-600" />
              购入公办学区房后 · 是否建议参与民办摇号？
            </h4>
            <p className="text-slate-700 leading-relaxed text-[11px]">
              因为您在 2 岁左右完成购房落户，到 {childCohort.primaryYear} 年入学已满 <strong>{childCohort.hukouYearsIfMovedNow} 年</strong>人户一致。
              即使您选择第一志愿冲刺顶尖民办（如世外、盛大、平和）未中签回流，在回流统筹队列中也凭借 <strong>{childCohort.hukouYearsIfMovedNow} 年超长年限</strong>排在最优先序列，统筹免疫力极高！“公办保底 + 民办冲刺”战术完全可行！
            </p>
          </div>

          {/* Bottom Reset */}
          <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              数据来源：2024-2025各区居委法定划片细则与二手房挂牌参考
            </span>
            <button
              onClick={handleReset}
              className="text-xs text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              重新调整选址条件
            </button>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* RESULTS VIEW: EXISTING PROPERTY MODE (原有自查输出) */}
      {/* ======================================================== */}
      {isGenerated && advisorMode === 'existing_property' && results && (
        <div className="space-y-6 animate-fadeIn">
          <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl space-y-4">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-1.5 bg-blue-500/30 px-3 py-1 rounded-full text-xs font-semibold text-blue-200 border border-blue-400/20">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                家庭择校诊断测评报告
              </div>
              <button
                onClick={handleReset}
                className="flex items-center gap-1 text-xs text-blue-200 hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-xl transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                重新测评
              </button>
            </div>

            <h2 className="text-xl sm:text-2xl font-black">
              您的专属升学择校策略与梯队推荐方案
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs">
              <div className="bg-white/10 rounded-2xl p-4 border border-white/10 space-y-1.5">
                <div className="text-blue-300 font-semibold flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  精确划片与顺位诊断
                </div>
                <p className="text-slate-200 leading-relaxed text-[11px]">
                  {results.hukouAnalysis}
                </p>
              </div>

              <div className="bg-white/10 rounded-2xl p-4 border border-white/10 space-y-1.5">
                <div className="text-amber-300 font-semibold flex items-center gap-1">
                  <AlertTriangle className="w-4 h-4 text-amber-400" />
                  统筹风险警戒线
                </div>
                <p className="text-slate-200 leading-relaxed text-[11px]">
                  {results.riskWarning}
                </p>
              </div>

              <div className="bg-white/10 rounded-2xl p-4 border border-white/10 space-y-1.5">
                <div className="text-indigo-300 font-semibold flex items-center gap-1">
                  <Target className="w-4 h-4 text-indigo-400" />
                  信息核对要点
                </div>
                <p className="text-slate-200 leading-relaxed text-[11px]">
                  {results.strategyAdvice}
                </p>
              </div>
            </div>
          </div>

          {/* School Recommendations */}
          <div className="space-y-3">
            <h3 className="font-bold text-slate-900 text-base">
              公办主力与特色对口推荐方案
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {results.safeList.map((school) => (
                <SchoolCard
                  key={school.id}
                  school={school}
                  onSelect={onSelectSchool}
                  isCompared={comparedSchools.some(s => s.id === school.id)}
                  onToggleCompare={onToggleCompare}
                  isShortlisted={shortlistedSchools.some(s => s.id === school.id)}
                  onToggleShortlist={onToggleShortlist}
                  onSimulateAdmission={(s) => onNavigateToSimulator(s, selectedCommunity || customCommunityName || undefined)}
                />
              ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
