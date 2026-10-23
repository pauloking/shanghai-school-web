import React, { useState, useMemo } from 'react';
import { School, District } from '../types/school';
import { SCHOOLS_DATA } from '../data/schools';
import { CATCHMENTS_DATA, CommunityCatchment } from '../data/catchments';
import { 
  Calculator, 
  AlertTriangle, 
  Sparkles,
  MapPin,
  Building2,
  GraduationCap,
  Search,
  X,
  CheckCircle2,
  Edit3,
  HelpCircle,
  Loader2,
  Info,
  ExternalLink
} from 'lucide-react';
import { 
  searchShanghaiResidentialPOIs, 
  searchNearbySchoolsFromAMap,
  detectShanghaiDistrict,
  getCommunityHousingPrice,
  SearchedPOIItem 
} from '../services/amapService';
import { CommunityPriceBadge } from './CatchmentLookup';
import { OversubscribedFallbackCard } from './OversubscribedFallbackCard';

interface AdmissionSimulatorProps {
  initialSchool?: School | null;
  initialCommunity?: CommunityCatchment | string | null;
  onSelectSchool?: (school: School) => void;
  schools?: School[];
}

export const AdmissionSimulator: React.FC<AdmissionSimulatorProps> = ({
  initialSchool,
  initialCommunity,
  onSelectSchool,
  schools
}) => {
  const [dynamicSchool, setDynamicSchool] = useState<School | null>(initialSchool || null);
  const [isPropertyGuideOpen, setIsPropertyGuideOpen] = useState<boolean>(false);


  // Target school selection
  const [selectedSchoolId, setSelectedSchoolId] = useState<string>(
    initialSchool ? initialSchool.id : SCHOOLS_DATA[0]?.id || ''
  );

  // Community Search & Auto-complete state
  const [selectedCommunity, setSelectedCommunity] = useState<CommunityCatchment | null>(() => {
    if (initialCommunity && typeof initialCommunity === 'object') {
      return initialCommunity;
    }
    if (typeof initialCommunity === 'string') {
      return null;
    }
    if (initialSchool) {
      const match = CATCHMENTS_DATA.find(c => c.matchedSchoolId === initialSchool.id);
      if (match) return match;
      return null;
    }
    return null;
  });

  const [customCommunityName, setCustomCommunityName] = useState<string>(() => {
    if (typeof initialCommunity === 'string') {
      return initialCommunity;
    }
    if (initialCommunity && typeof initialCommunity === 'object') {
      return '';
    }
    if (initialSchool) {
      const match = CATCHMENTS_DATA.find(c => c.matchedSchoolId === initialSchool.id);
      if (!match) {
        return `${initialSchool.shortName || initialSchool.name}对口地段居住小区 (${initialSchool.district})`;
      }
    }
    return '';
  });
  const [searchCommunityQuery, setSearchCommunityQuery] = useState<string>('');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  React.useEffect(() => {
    if (initialSchool) {
      setDynamicSchool(initialSchool);
      setSelectedSchoolId(initialSchool.id);
    }

    if (initialCommunity) {
      if (typeof initialCommunity === 'object') {
        setSelectedCommunity(initialCommunity);
        setCustomCommunityName('');
      } else if (typeof initialCommunity === 'string') {
        setSelectedCommunity(null);
        setCustomCommunityName(initialCommunity);
      }
    } else if (initialSchool) {
      const match = CATCHMENTS_DATA.find(c => c.matchedSchoolId === initialSchool.id);
      if (match) {
        setSelectedCommunity(match);
        setCustomCommunityName('');
      } else {
        setSelectedCommunity(null);
        setCustomCommunityName(`${initialSchool.shortName || initialSchool.name}对口地段居住小区 (${initialSchool.district})`);
      }
    }
  }, [initialSchool, initialCommunity]);

  // Form states
  const [propertyOwnership, setPropertyOwnership] = useState<'parents' | 'grandparents' | 'rent'>('parents');
  const [hukouMatch, setHukouMatch] = useState<'consistent' | 'separated' | 'non_sh_points' | 'non_sh_no_points'>('consistent');
  const [residenceYears, setResidenceYears] = useState<number>(3);
  const [isFiveYearOccupied, setIsFiveYearOccupied] = useState<boolean>(false);
  const [applyScene, setApplyScene] = useState<'direct_public' | 'lottery_fallback'>('direct_public');

  // Filtered Community Suggestions
  const communitySuggestions = useMemo(() => {
    if (!searchCommunityQuery.trim()) {
      return CATCHMENTS_DATA.slice(0, 8);
    }
    const q = searchCommunityQuery.toLowerCase().trim();
    return CATCHMENTS_DATA.filter(c => 
      c.communityName.toLowerCase().includes(q) ||
      c.aliases.some(a => a.toLowerCase().includes(q)) ||
      c.schoolName.toLowerCase().includes(q) ||
      c.streetAddressRange.toLowerCase().includes(q)
    );
  }, [searchCommunityQuery]);

  // AMap Live POI search results
  const [amapSuggestions, setAmapSuggestions] = useState<SearchedPOIItem[]>([]);
  const [isSearchingAmap, setIsSearchingAmap] = useState<boolean>(false);

  React.useEffect(() => {
    if (!searchCommunityQuery.trim() || searchCommunityQuery.trim().length < 2) {
      setAmapSuggestions([]);
      setIsSearchingAmap(false);
      return;
    }

    const timer = setTimeout(async () => {
      setIsSearchingAmap(true);
      try {
        const pois = await searchShanghaiResidentialPOIs(searchCommunityQuery.trim());
        const realPois = pois.filter(p => p.source === 'amap_poi');
        setAmapSuggestions(realPois.slice(0, 8));
      } catch {
        setAmapSuggestions([]);
      } finally {
        setIsSearchingAmap(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchCommunityQuery]);

  // Handle selecting community
  const handleSelectCommunity = (comm: CommunityCatchment) => {
    setSelectedCommunity(comm);
    setCustomCommunityName('');
    setSelectedSchoolId(comm.matchedSchoolId);
    setDynamicSchool(null); // Clear lingering dynamic school so it doesn't cross-pollute
    setIsSearchOpen(false);
    setSearchCommunityQuery('');
  };

  // AMap selection only sets a location. A nearby school is not an admission relationship.
  const handleSelectAmapPOI = (poi: SearchedPOIItem) => {
    setCustomCommunityName(`${poi.name} (${poi.district})`);
    setSelectedCommunity(null);
    setDynamicSchool(null);
    setIsSearchOpen(false);
    setSearchCommunityQuery('');
  };

  // Handle custom community confirm
  const handleConfirmCustomCommunity = () => {
    if (!searchCommunityQuery.trim()) return;
    setCustomCommunityName(searchCommunityQuery.trim());
    setSelectedCommunity(null);
    setIsSearchOpen(false);
  };

  const availableSchools = schools || SCHOOLS_DATA;

  const currentSchool = useMemo(() => {
    if (dynamicSchool && dynamicSchool.id === selectedSchoolId) {
      return dynamicSchool;
    }
    return availableSchools.find(s => s.id === selectedSchoolId) || dynamicSchool || availableSchools[5] || SCHOOLS_DATA[5];
  }, [selectedSchoolId, dynamicSchool, availableSchools]);

  // Compute District of the Community
  const communityDistrict: District = useMemo(() => {
    if (selectedCommunity) return selectedCommunity.district;
    if (customCommunityName) {
      return detectShanghaiDistrict(customCommunityName);
    }
    return currentSchool.district;
  }, [selectedCommunity, customCommunityName, currentSchool.district]);

  // Compute Housing Price Info for the chosen community
  const effectiveHousingPrice = useMemo(() => {
    if (selectedCommunity?.priceInfo) {
      return selectedCommunity.priceInfo;
    }
    const nameToQuery = selectedCommunity ? selectedCommunity.communityName : customCommunityName;
    if (!nameToQuery) return null;
    return getCommunityHousingPrice(nameToQuery, communityDistrict);
  }, [selectedCommunity, customCommunityName, communityDistrict]);

  // Strict Policy Check: Public schools strictly cannot cross administrative districts
  const isCrossDistrict = currentSchool.type === 'public' && communityDistrict !== currentSchool.district;
  const isMismatchedWithinDistrict = Boolean(
    selectedCommunity && 
    selectedCommunity.matchedSchoolId !== currentSchool.id && 
    !isCrossDistrict &&
    currentSchool.type === 'public'
  );

  // Dynamic calculation logic
  const simulationResult = useMemo(() => {
    const displayCommunity = selectedCommunity?.communityName || customCommunityName || '未选择小区';
    const schoolVerified = currentSchool.verificationStatus === 'verified' && currentSchool.canSimulateAdmission === true;
    const relationVerified = selectedCommunity?.verificationStatus === 'verified';
    const relationMissing = !selectedCommunity || !relationVerified || !schoolVerified;

    if (relationMissing) {
      return {
        tierName: '暂不具备录取测算条件',
        probabilityText: '待官方原文核验',
        probabilityLevel: 'warning' as const,
        rankDescription: !schoolVerified
          ? `【${currentSchool.name}】的学校招生规则尚未绑定可追溯的官方原文。`
          : selectedCommunity
          ? `【${displayCommunity}】与【${selectedCommunity.schoolName}】的历史关联尚未绑定可追溯的区教育局原文。`
          : `【${displayCommunity}】只是地点信息，附近学校不等于对口学校。`,
        keyRisks: [
          '高德数据仅用于 POI、坐标、距离和导航，不作为划片证据。',
          '未核验的历史划片资料不能用于推断当年录取顺位或概率。'
        ],
        advice: '请先查阅当年所属区教育局招生地段公示，确认门牌、居委、学校和年份后再核对家庭条件。'
      };
    }

    const displaySchool = currentSchool.shortName || currentSchool.name;
    const riskNotes: string[] = [];
    let probabilityLevel: 'success' | 'warning' | 'danger' = 'success';
    let probabilityText = '条件相对有利，仍需当年核验';

    if (isCrossDistrict || isMismatchedWithinDistrict) {
      probabilityLevel = 'danger';
      probabilityText = '招生地段与目标学校不一致';
      riskNotes.push('所选小区与目标学校的区域或地段关系不一致。');
    }
    if (isFiveYearOccupied) {
      probabilityLevel = 'danger';
      probabilityText = '学额占用情况需要紧急核实';
      riskNotes.push('“五年一户”的执行范围、例外与计算口径以当年本区公告为准。');
    }
    if (applyScene === 'lottery_fallback') {
      probabilityLevel = probabilityLevel === 'danger' ? 'danger' : 'warning';
      probabilityText = '民办报名后的公办安排存在不确定性';
      riskNotes.push('公民同招后续安排应核对当年区级实施细则。');
    }
    if (hukouMatch !== 'consistent' || propertyOwnership !== 'parents') {
      probabilityLevel = probabilityLevel === 'danger' ? 'danger' : 'warning';
      probabilityText = '需核验户籍、居住和产权条件';
      riskNotes.push('户籍、居住证、积分、产权人关系会影响材料核验与安排顺序。');
    }
    if (riskNotes.length === 0) {
      riskNotes.push('历史落户年限只能作为准备参考，不构成当年录取保证。');
    }

    return {
      tierName: '入学条件核对',
      probabilityText,
      probabilityLevel,
      rankDescription: `已核对【${displayCommunity}】、【${displaySchool}】与当前填写的家庭条件；结果为定性风险提示，不是录取概率。`,
      keyRisks: riskNotes,
      advice: '在报名前对照当年区教育局公告、招生地段表和学校招生告示，并保留查询日期与原文链接。'
    };

    const isPublic = currentSchool.type === 'public';
    const hasFiveYearRule = currentSchool.enrollment.hasFiveYearRule;
    const yearsRequired = currentSchool.enrollment.hukouYearsRequired || 1;
    const isOversubscribed = currentSchool.enrollment.oversubscribedHistory || false;

    // Community display label
    const legacyDisplayCommunity = selectedCommunity 
      ? selectedCommunity!.communityName 
      : customCommunityName 
      ? customCommunityName 
      : '您所在小区';

    const isKindergarten = currentSchool.stage === 'kindergarten';
    const schoolTypeLabel = isKindergarten ? '幼儿园' : '小学';
    const systemName = isKindergarten ? '上海市适龄幼儿入园信息登记系统' : '上海市义务教育入学报名系统';

    // 1. Cross-District Invalidation (Bedrock Shanghai Rule: District Education Bureau jurisdiction)
    if (isCrossDistrict) {
      return {
        tierName: `跨行政区严重警告：【${communityDistrict}】⇏【${currentSchool.district}】`,
        probabilityText: '0% 无法报考 (跨行政区无法对口录取)',
        probabilityLevel: 'danger' as const,
        rankDescription: `【严重政策冲突】您填报的小区位于【${communityDistrict}】，但目标公办${schoolTypeLabel}【${currentSchool.name}】属于【${currentSchool.district}】！`,
        keyRisks: [
          `上海市公办${schoolTypeLabel}对口入学严格实行“各行政区属地管理”与划片招生。`,
          `【${communityDistrict}】的户籍或房产，在政策上绝对无法享受【${currentSchool.district}】公办${schoolTypeLabel}的地段对口直升资格！`,
          `在${systemName}初审时，将因户籍/房产与学校跨行政区被直接驳回，并统筹回原籍区处理。`
        ],
        advice: `【必须立即纠正】请切换为您所在【${communityDistrict}】本区的对口公办${schoolTypeLabel}；或如果您在【${currentSchool.district}】拥有合法房产/户口，请将第一步的小区修改为该区的对应住宅！`
      };
    }

    // 2. Intra-district Catchment Mismatch (Same district, but not the official catchment community)
    if (isMismatchedWithinDistrict && selectedCommunity) {
      return {
        tierName: `非本小区划片对口校 (需按片区统筹排位)`,
        probabilityText: '极低 (非地段生源，仅能统筹排队)',
        probabilityLevel: 'warning' as const,
        rankDescription: `【${legacyDisplayCommunity}】官方划片对口小学为【${selectedCommunity!.schoolName}】。您当前选定的【${currentSchool.name}】非本小区招生地块对口校。`,
        keyRisks: [
          `根据所属区教育局招生地段表，本小区招生地段对口【${selectedCommunity!.schoolName}】。`,
          `公办${schoolTypeLabel}在第一批次仅录取本划片内地段生源，非本划片儿童无法享受人户一致第1顺位。`,
          '只有在目标学校地段生源未招满且区教育局启动片区内统筹调剂时，才有调剂排队资格。'
        ],
        advice: `【建议】请直接切换选择本小区官方对口学校【${selectedCommunity!.schoolName}】进行测算，以获取真实录取排位！`
      };
    }

    // 2.5 Demonstration Kindergarten Special Lottery Rule (Zero-risk free lottery)
    if (isKindergarten && currentSchool.tier === '市示范园') {
      return {
        tierName: '市示范性幼儿园电脑随机派位 (全区摇号)',
        probabilityText: '30% - 60% (全区电脑派位摇号)',
        probabilityLevel: 'warning' as const,
        rankDescription: `【${currentSchool.name}】为上海市示范性公办幼儿园，面向全区符合条件的适龄儿童实行电脑派位摇号。`,
        keyRisks: [
          '报名人数超过计划数时实行100%电脑随机派位。',
          `【零风险红利】：示范园未摇中完全不影响您在【${displayCommunity}】对口公办一级园的第 1 顺位兜底录取资格！`,
          '公办市示范园收费普惠，每月保育教育费仅约 700 - 1050 元/月。'
        ],
        advice: '强烈建议本区人户一致家庭果断填报示范园摇号！未中签直接回对口公办一级园，是一次绝佳的“免费冲顶”机会。'
      };
    }

    // If private school, simulation relates to lottery luck
    if (!isPublic) {
      return {
        tierName: '民办电脑随机摇号批次',
        probabilityText: '30% - 50% (依据报名超额人数随机派位)',
        probabilityLevel: 'warning' as const,
        rankDescription: `民办学校不以【${displayCommunity}】落户年限排序，全凭报名系统公证摇号。`,
        keyRisks: [
          '若报名人数超过计划数，实行100%电脑随机派位。',
          '一旦摇中直接锁定学籍，不可反悔放弃。',
          '若未摇中，转入公办第二批核验，排位排在直接报公办同类儿童之后。'
        ],
        advice: '摇号属于概率事件，请务必提前测算家庭对口公办在“公民同招回流”后的统筹承受度！'
      };
    }

    // Five-Year Occupied Check -> Automatic Disqualification to safety net
    if (hasFiveYearRule && isFiveYearOccupied) {
      return {
        tierName: '一票否决：五年一户学额已被占用',
        probabilityText: '极高统筹风险 (< 5% 几乎必定被统筹)',
        probabilityLevel: 'danger' as const,
        rankDescription: `【${displayCommunity}】该房屋产权地址在过去五年内已有非同一家庭儿童使用学额，直接丧失对口直升资格。`,
        keyRisks: [
          '哪怕户口迁入满5年、产权证100%属于父母，也会在资格初审阶段被教育局系统一票否决。',
          '将被直接列入全区统筹名单，分流至片区内学额未满的二梯队或普通公办。'
        ],
        advice: '【紧急预案】请立即向区教育局核实该房产上一次学额使用具体毕业年份；若已坐实占用，建议提前考虑冲刺民办摇号或做好统筹心理建设。'
      };
    }

    // Civil & Private Concurrent Penalty
    if (applyScene === 'lottery_fallback') {
      if (isOversubscribed) {
        return {
          tierName: '第 2 批次回流统筹顺位 (民办落选后置)',
          probabilityText: '极高统筹风险 (< 20% 大概率被分流)',
          probabilityLevel: 'danger' as const,
          rankDescription: `民办摇号未中回流。目标校（${currentSchool.name}）为热门一梯队，第一批直接报公办的人户一致儿童已录满学额。`,
          keyRisks: [
            '公民同招规则：回流儿童排序绝对后置于直接报公办的“人户一致”儿童。',
            '热门公办在第一批验证时甚至连人户一致满2年的都不够分，绝无剩余空额给回流学生。'
          ],
          advice: `【极其严重警告】您在【${displayCommunity}】手握 ${currentSchool.shortName} 这种顶尖一梯队公办学额，坚决不建议冒险摇民办！一旦落选，大概率被统筹发配至周边普通公办，得不偿失！`
        };
      }
    }

    // Hukou Tier Computation
    if (hukouMatch === 'consistent') {
      if (propertyOwnership === 'parents') {
        if (residenceYears >= yearsRequired) {
          return {
            tierName: '第 1 顺位第 1 档 (人户一致 · 父母产权 · 年限达标)',
            probabilityText: '极高 (95% 以上稳妥录取)',
            probabilityLevel: 'success' as const,
            rankDescription: `【${displayCommunity}】产证为适龄儿童父母或本人，户籍落户满 ${residenceYears} 年（高于建议线 ${yearsRequired} 年），符合五年一户。`,
            keyRisks: [
              isOversubscribed ? '近年偶有极特殊出生人口高峰排位波动，但您入户年限充裕，稳居安全线内。' : '无明显政策风险。'
            ],
            advice: isKindergarten ? '恭喜！您的落户条件极其优越，直接在市幼儿入园登记系统填报对口公办幼儿园即可稳妥录取。' : '恭喜！您的落户条件极其优越，直接填报公办第一志愿即可高枕无忧，安心准备幼小衔接。'
          };
        } else {
          return {
            tierName: '第 1 顺位第 2 档 (人户一致 · 父母产权 · 入户年限偏短)',
            probabilityText: isOversubscribed ? '中等预警 (50% - 70% 边缘摇摆)' : '较高 (85% 预计录取)',
            probabilityLevel: isOversubscribed ? 'warning' as const : 'success' as const,
            rankDescription: `【${displayCommunity}】人户一致但落户仅 ${residenceYears} 年，该校历史超额年份建议满 ${yearsRequired} 年以上。`,
            keyRisks: [
              isOversubscribed ? `目标校近年生源超载，若当年同对口地段入户满3年人数过多，年限不足者将从短到长依次统筹分流！` : '若当年生源平稳则可顺利入读。'
            ],
            advice: '若距离正式入学登记还有时间，切勿再有迁出户口操作；关注目标校当年发布的生源摸底超额预警公告。'
          };
        }
      } else if (propertyOwnership === 'grandparents') {
        return {
          tierName: '第 1 顺位第 3 档 (祖辈产证 · 三代同堂)',
          probabilityText: isOversubscribed ? '低 (30% - 50% 极可能统筹)' : '较稳 (70% - 80%)',
          probabilityLevel: isOversubscribed ? 'danger' as const : 'warning' as const,
          rankDescription: `【${displayCommunity}】产权所有人为祖父母或外祖父母，儿童及父母户籍挂靠在祖辈房产下。`,
          keyRisks: [
            '热门一梯队公办严格遵循“父母独立产权优先于祖辈产权”排序原则。',
            '一旦父母名下在本市有其他商品住宅房产，部分区核验时将被强制降序或要求回父母房产所在地就读。'
          ],
          advice: '若父母在上海无其他房产，可去房管局拉取“无房证明”作为三代同堂唯一居住佐证，争取靠前排位。'
        };
      } else {
        return {
          tierName: '人户挂靠 (无独立产权租房)',
          probabilityText: '极低 (< 20%)',
          probabilityLevel: 'danger' as const,
          rankDescription: `户籍虽在【${displayCommunity}】对口街道，但未持有本市有效独立产权房屋。`,
          keyRisks: ['无产权家庭在对口划片中排序严重靠后。'],
          advice: '建议接受公办片区统一调剂统筹。'
        };
      }
    } else if (hukouMatch === 'separated') {
      return {
        tierName: '第 3 顺位 (上海户籍 · 本市人户分离)',
        probabilityText: isOversubscribed ? '极低 (< 10% 必然统筹)' : '中等统筹排位',
        probabilityLevel: 'danger' as const,
        rankDescription: `户籍在其他区，在【${displayCommunity}】持有自购房产并办理了《人户分离居住登记回执》。`,
        keyRisks: [
          '热门一梯队公办第一顺位“人户一致”即已超载，根本轮不到第3顺位的人户分离。',
          '人户分离将由区教育局按照全区学额统筹到周边普通公办。'
        ],
        advice: '【关键决策】若执意入读该校，必须提前2-3年把户口迁入；若已来不及迁户，建议果断将精力转向民办小学摇号！'
      };
    } else if (hukouMatch === 'non_sh_points') {
      return {
        tierName: '第 4 顺位 (非沪籍随迁子女 · 居住证积分满120分)',
        probabilityText: isOversubscribed ? '极低 (< 10% 统筹分流)' : '全区统筹保障公办',
        probabilityLevel: 'warning' as const,
        rankDescription: `居住在【${displayCommunity}】，持有上海居住证且积分满120分，社保正常缴纳。`,
        keyRisks: [
          '一梯队公办对口基本无空额接纳非沪籍，统筹至该片区二梯队或普通公办小学。',
          '确保积分通知单在入学当年核验期间处于有效有效期内。'
        ],
        advice: '凭120分积分，民办小学摇号与公办统筹拥有双重保障。若追求优质教育，首选民办摇号。'
      };
    } else {
      return {
        tierName: '第 5 顺位 (非沪籍 · 积分未达标)',
        probabilityText: '由教育局统筹托底安排',
        probabilityLevel: 'danger' as const,
        rankDescription: '无居住证120分积分，符合基本社保与居住条件。',
        keyRisks: ['仅能由区教育局统筹安排至公办或政府购买服务的民办学校。'],
        advice: '抓紧在孩子读初中之前办妥120分积分，否则初三无法在沪参加中考。'
      };
    }
  }, [currentSchool, selectedCommunity, customCommunityName, propertyOwnership, hukouMatch, residenceYears, isFiveYearOccupied, applyScene]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <div className="inline-flex items-center gap-1.5 bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full">
          <Calculator className="w-3.5 h-3.5 text-emerald-600" />
          官方关系核验 · 高德地理辅助
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
          公办入学条件核对器
        </h2>
        <p className="text-xs sm:text-sm text-slate-500">
          结合官方招生关系与家庭条件做定性核对；高德只补充地点、距离和导航
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Form: Parameters (7 Cols) */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-6 shadow-sm space-y-5">
          
          {/* COMMUNITY SEARCH COMPONENT */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-teal-950 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-teal-600" />
                第一步：输入/搜索您的居住小区或路名
              </label>
              <span className="text-[11px] text-teal-700 bg-teal-100/60 px-2 py-0.5 rounded font-medium">
                支持模糊联想与自定义
              </span>
            </div>

            {/* Confirmed Selection or Search Box */}
            {selectedCommunity || customCommunityName ? (
              <>
                {/* Selected Community Card */}
              <div className="bg-gradient-to-r from-teal-50/70 to-blue-50/40 p-4 rounded-2xl border border-teal-200 shadow-sm space-y-2.5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold bg-teal-600 text-white px-2 py-0.5 rounded">
                        {selectedCommunity?.verificationStatus === 'verified' ? '官方原文已核验' : selectedCommunity ? '历史资料待核验' : '地点待核验'}
                      </span>
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base">
                        {selectedCommunity ? selectedCommunity.communityName : customCommunityName}
                      </h4>
                    </div>
                    {selectedCommunity && (
                      <div className="text-xs text-slate-500 mt-1">
                        {selectedCommunity.district} · {selectedCommunity.subdistrict} · {selectedCommunity.neighborhoodCommittee}
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      setSelectedCommunity(null);
                      setCustomCommunityName('');
                      setIsSearchOpen(true);
                    }}
                    className="text-xs text-teal-700 hover:text-teal-900 bg-white border border-teal-200 px-2.5 py-1 rounded-lg flex items-center gap-1 font-medium shadow-xs"
                  >
                    <Edit3 className="w-3 h-3" /> 更换小区
                  </button>
                </div>

                {/* Pipeline chips */}
                <div className="pt-2 border-t border-teal-100/80 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-700">
                    <Building2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span>{selectedCommunity ? '资料关联学校：' : '当前目标学校（非对口确认）：'}</span>
                    <strong 
                      onClick={() => onSelectSchool && onSelectSchool(currentSchool)}
                      className={`text-blue-700 truncate ${onSelectSchool ? 'cursor-pointer hover:underline' : ''}`}
                      title={onSelectSchool ? '点击查看学校基本档案与来源' : undefined}
                    >
                      {selectedCommunity ? selectedCommunity.schoolName : currentSchool.name}
                    </strong>
                    {onSelectSchool && (
                      <button
                        type="button"
                        onClick={() => onSelectSchool(currentSchool)}
                        className="text-blue-500 hover:text-blue-700 p-0.5 rounded cursor-pointer shrink-0"
                        title="查看学校基本档案与来源"
                      >
                        <Info className="w-3.5 h-3.5" />
                      </button>
                    )}
                  </div>
                  {selectedCommunity?.verificationStatus === 'verified' && (
                    <div className="flex items-center gap-1.5 text-slate-700">
                      <GraduationCap className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                      <span>对口初中：</span>
                      <span className="font-medium text-slate-800 truncate">{selectedCommunity.matchedMiddleSchool}</span>
                    </div>
                  )}
                </div>

                {/* Housing Price Reference Badge */}
                {effectiveHousingPrice && selectedCommunity?.verificationStatus === 'verified' && (
                  <div className="pt-1">
                    <CommunityPriceBadge priceInfo={effectiveHousingPrice} />
                  </div>
                )}

                {selectedCommunity && (
                  <div className="bg-amber-50/90 p-2.5 rounded-xl border border-amber-200/80 text-[11px] text-amber-900">
                    ⚠️ <strong>历史资料提示：</strong>“五年一户”标记为{selectedCommunity.fiveYearRule ? '有' : '无'}，落户年限参考值为 <strong>{selectedCommunity.yearsRequiredAdvice}</strong> 年；必须以当年官方原文为准。
                  </div>
                )}
              </div>

              {/* Cross-District Alert Banner */}
              {isCrossDistrict && (
                <div className="bg-red-50 border-2 border-red-300 p-4 rounded-2xl space-y-2 text-xs text-red-950 animate-in fade-in">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-1.5 font-bold text-red-800 text-sm">
                      <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
                      <span>行政区不匹配：【{communityDistrict}】小区 ⇏【{currentSchool.district}】目标校</span>
                    </div>
                    <span className="text-[10px] bg-red-200 text-red-900 font-bold px-2 py-0.5 rounded-md shrink-0">
                      公办对口不成立
                    </span>
                  </div>
                  <p className="text-xs text-red-800 leading-relaxed">
                    上海市公办小学招生严格以<strong>行政区为边界实行属地划片</strong>。您选择的小区属于<strong>【{communityDistrict}】</strong>，绝对无法直接对口<strong>【{currentSchool.district}】</strong>的公办小学！
                  </p>
                  {selectedCommunity && (
                    <div className="pt-1">
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedSchoolId(selectedCommunity.matchedSchoolId);
                          setDynamicSchool(null);
                        }}
                        className="text-xs font-bold text-white bg-red-600 hover:bg-red-700 px-3 py-1.5 rounded-xl transition-all shadow-xs flex items-center gap-1.5"
                      >
                        <span>一键切换为本小区对口小学：【{selectedCommunity.schoolName}】</span>
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Intra-district Catchment Mismatch Alert Banner */}
              {isMismatchedWithinDistrict && selectedCommunity && (
                <div className="bg-amber-50 border border-amber-300 p-3.5 rounded-2xl space-y-2 text-xs text-amber-950 animate-in fade-in">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 font-bold text-amber-900">
                      <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                      <span>所选目标学校非本小区官方划片学校</span>
                    </div>
                    <span className="text-[10px] bg-amber-200 text-amber-900 font-semibold px-1.5 py-0.5 rounded">
                      地段不符
                    </span>
                  </div>
                  <p className="text-xs text-amber-800 leading-relaxed">
                    本小区官方地段对口学校为<strong>【{selectedCommunity.schoolName}】</strong>，当前下方微调选定的是【{currentSchool.name}】。公办对口第一批次不录取非地段生源，需全区统筹排队！
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedSchoolId(selectedCommunity.matchedSchoolId);
                      setDynamicSchool(null);
                    }}
                    className="text-xs font-bold text-amber-900 bg-amber-200/80 hover:bg-amber-300/80 px-2.5 py-1 rounded-lg transition-colors inline-flex items-center gap-1"
                  >
                    恢复对口【{selectedCommunity.schoolName}】
                  </button>
                </div>
              )}
            </>
            ) : (
              /* Search Input with Dropdown */
              <div className="relative space-y-2">
                <div className="relative">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    value={searchCommunityQuery}
                    onChange={(e) => {
                      setSearchCommunityQuery(e.target.value);
                      setIsSearchOpen(true);
                    }}
                    onFocus={() => setIsSearchOpen(true)}
                    placeholder="输入小区名、路名、村弄（如：朱家滩、文定天下、海防村、春申景城、中远两湾城）..."
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-teal-300 rounded-xl text-xs sm:text-sm focus:bg-white focus:ring-2 focus:ring-teal-500 focus:outline-none"
                  />
                  {searchCommunityQuery && (
                    <button
                      onClick={() => setSearchCommunityQuery('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Dropdown Suggestions */}
                {isSearchOpen && (
                  <div className="absolute z-20 top-full left-0 right-0 mt-1 bg-white rounded-2xl border border-slate-200 shadow-xl max-h-64 overflow-y-auto divide-y divide-slate-100">
                    {communitySuggestions.map((comm) => (
                      <div
                        key={comm.id}
                        onClick={() => handleSelectCommunity(comm)}
                        className="p-3 hover:bg-teal-50/60 cursor-pointer text-xs flex items-center justify-between transition-colors"
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
                        <span className="text-teal-600 text-xs font-semibold px-2 py-1 rounded-lg bg-teal-50">选择</span>
                      </div>
                    ))}

                    {/* Real AMap POI compounds */}
                    {amapSuggestions.length > 0 && (
                      <div className="bg-emerald-50/60 p-2 text-[11px] font-bold text-emerald-800 border-t border-emerald-100 flex items-center gap-1">
                        <span>🌐 高德地点信息（附近学校不等于对口）</span>
                      </div>
                    )}
                    {amapSuggestions.map((poi) => (
                      <div
                        key={poi.id}
                        onClick={() => handleSelectAmapPOI(poi)}
                        className="p-3 hover:bg-emerald-50/70 cursor-pointer text-xs flex items-center justify-between transition-colors bg-white"
                      >
                        <div>
                          <div className="font-bold text-slate-900 flex items-center gap-1.5">
                            <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded font-medium">
                              {poi.district}
                            </span>
                            <span>📍 {poi.name}</span>
                          </div>
                          <div className="text-slate-500 text-[11px] mt-0.5">
                            {poi.address} {poi.closestPrimary ? `· 附近学校: ${poi.closestPrimary.shortName} (${poi.distanceToPrimary}m)` : ''}
                          </div>
                        </div>
                        <span className="text-emerald-700 text-xs font-semibold px-2 py-1 rounded-lg bg-emerald-50 border border-emerald-200">
                          仅选地点
                        </span>
                      </div>
                    ))}

                    {/* Fallback Option for unlisted community */}
                    {searchCommunityQuery.trim() && (
                      <div 
                        onClick={handleConfirmCustomCommunity}
                        className="p-3 bg-amber-50/50 hover:bg-amber-100/60 cursor-pointer text-xs text-amber-900 flex items-center justify-between font-medium border-t border-slate-100"
                      >
                        <div>
                          <span>✨ 自定义录入小区名称：</span>
                          <strong className="underline ml-1">“{searchCommunityQuery.trim()}”</strong>
                        </div>
                        <span className="text-amber-800 font-bold bg-amber-200/60 px-2 py-1 rounded-lg text-xs">
                          确认录入
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {/* Quick Pick Hot Estates Chips */}
                <div className="pt-1">
                  <span className="text-[11px] text-slate-400 block mb-1">历史资料小区快捷点选：</span>
                  <div className="flex flex-wrap gap-1.5 text-xs">
                    {[
                      { name: '朱家滩 (明珠A)', id: 'pd-zhujiatan' },
                      { name: '海防村 (静教院)', id: 'ja-haifang-cun' },
                      { name: '文定天下 (汇师)', id: 'xh-wending-tianxia' },
                      { name: '春申景城 (闵实)', id: 'mh-chunshen-jingcheng' },
                      { name: '仁恒河滨城 (进才)', id: 'pd-renheng-hebin' },
                      { name: '岳阳路 (建襄)', id: 'xh-yueyang-xiaoqu' },
                      { name: '中远两湾城 (中远)', id: 'pt-zhongyuan-liangwancheng' }
                    ].map((item) => {
                      const targetComm = CATCHMENTS_DATA.find(c => c.id === item.id);
                      if (!targetComm) return null;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => handleSelectCommunity(targetComm)}
                          className="bg-slate-100 hover:bg-teal-50 hover:text-teal-700 text-slate-600 px-2.5 py-1 rounded-lg text-[11px] transition-colors border border-slate-200"
                        >
                          {item.name}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* School Selector (can also adjust manually) */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-bold text-slate-800 flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5 text-blue-600" />
                目标学校（需与官方招生关系核对）
              </label>
              {onSelectSchool && (
                <button
                  type="button"
                  onClick={() => onSelectSchool(currentSchool)}
                  className="text-[11px] text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-1 font-medium cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5" />
                  查看【{currentSchool.shortName || currentSchool.name}】基本档案与来源 &rarr;
                </button>
              )}
            </div>
            <select
              value={selectedSchoolId}
              onChange={(e) => setSelectedSchoolId(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2 text-xs sm:text-sm font-semibold text-slate-800 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            >
              {dynamicSchool && !availableSchools.some(s => s.id === dynamicSchool.id) && (
                <option value={dynamicSchool.id}>
                  📍 [高德地点匹配] {dynamicSchool.name}（{dynamicSchool.district}）
                </option>
              )}
              {availableSchools.map((s) => (
                <option key={s.id} value={s.id}>
                  [{s.district} · {s.type === 'public' ? '公办' : '民办'}] {s.name}
                </option>
              ))}
            </select>
          </div>

          {/* 报考策略与场景 */}
          <div>
            <label className="text-xs font-bold text-slate-800 block mb-1.5">
              第二步：报考策略与场景
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div
                onClick={() => setApplyScene('direct_public')}
                className={`p-3 rounded-xl border-2 cursor-pointer transition-all ${
                  applyScene === 'direct_public'
                    ? 'border-emerald-600 bg-emerald-50/50 font-bold text-emerald-900'
                    : 'border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
              >
                直接填报公办
                <div className="text-[10px] font-normal text-slate-500 mt-0.5">第一批次优先核验</div>
              </div>
              <div
                onClick={() => setApplyScene('lottery_fallback')}
                className={`p-3 rounded-xl border-2 cursor-pointer transition-all ${
                  applyScene === 'lottery_fallback'
                    ? 'border-amber-600 bg-amber-50/50 font-bold text-amber-900'
                    : 'border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
              >
                摇民办落选后回流
                <div className="text-[10px] font-normal text-slate-500 mt-0.5">公民同招排位后置</div>
              </div>
            </div>
          </div>

          {/* 户籍状态 */}
          <div>
            <label className="text-xs font-bold text-slate-800 block mb-1.5">
              第三步：户口登记情况
            </label>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                { id: 'consistent', label: '本市户籍 · 人户一致' },
                { id: 'separated', label: '本市户籍 · 人户分离' },
                { id: 'non_sh_points', label: '非沪籍 · 积分120达标' },
                { id: 'non_sh_no_points', label: '非沪籍 · 无120分积分' }
              ].map((item) => (
                <div
                  key={item.id}
                  onClick={() => setHukouMatch(item.id as any)}
                  className={`p-2.5 rounded-xl border cursor-pointer text-center font-medium transition-all ${
                    hukouMatch === item.id
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-800 font-bold'
                      : 'border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>

          {/* 房产产权所有人 */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-bold text-slate-800">
                第四步：房产产权所有人关系
              </label>
              <button
                type="button"
                onClick={() => setIsPropertyGuideOpen(true)}
                className="text-[11px] text-blue-600 hover:text-blue-800 font-semibold flex items-center gap-1 hover:underline cursor-pointer"
              >
                <HelpCircle className="w-3.5 h-3.5 text-blue-500" />
                <span>产权占比与祖辈三代认定细则</span>
              </button>
            </div>
            <div className="grid grid-cols-3 gap-2 text-xs">
              {[
                { id: 'parents', label: '儿童父母/本人产权' },
                { id: 'grandparents', label: '祖辈产权(三代同堂)' },
                { id: 'rent', label: '无产权(租房/挂靠)' }
              ].map((item) => (
                <div
                  key={item.id}
                  onClick={() => setPropertyOwnership(item.id as any)}
                  className={`p-2.5 rounded-xl border cursor-pointer text-center font-medium transition-all ${
                    propertyOwnership === item.id
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-800 font-bold'
                      : 'border-slate-200 text-slate-600 hover:border-slate-300'
                  }`}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </div>


          {/* 落户年限 */}
          {hukouMatch === 'consistent' && (
            <div className="space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-800">第五步：户籍迁入该套房产年限：</span>
                <span className="font-bold text-emerald-700 text-sm">{residenceYears} 年</span>
              </div>
              <input
                type="range"
                min="0.5"
                max="5"
                step="0.5"
                value={residenceYears}
                onChange={(e) => setResidenceYears(parseFloat(e.target.value))}
                className="w-full accent-emerald-600"
              />
              <div className="flex justify-between text-[10px] text-slate-400">
                <span>刚迁入半年</span>
                <span>满 2 年</span>
                <span>满 3.5 年以上（仅作时间参考）</span>
              </div>
            </div>
          )}

          {/* 五年一户审查 */}
          <div className="pt-2 border-t border-slate-100">
            <label className="text-xs font-bold text-slate-800 block mb-1.5">
              第六步：该房产过去五年学额占用情况
            </label>
            <div className="flex items-center gap-4 text-xs">
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="fiveYear"
                  checked={!isFiveYearOccupied}
                  onChange={() => setIsFiveYearOccupied(false)}
                  className="accent-emerald-600"
                />
                <span className="text-slate-700">未被占用 (五年内无非同家庭在读)</span>
              </label>

              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="radio"
                  name="fiveYear"
                  checked={isFiveYearOccupied}
                  onChange={() => setIsFiveYearOccupied(true)}
                  className="accent-red-600"
                />
                <span className="text-red-600 font-semibold">已被占用 (有前房东孩子在读)</span>
              </label>
            </div>
          </div>

        </div>

        {/* Right Result Card (5 Cols) */}
        <div className="lg:col-span-5 space-y-4">
          
          <div className={`rounded-3xl p-6 border shadow-md space-y-4 ${
            simulationResult.probabilityLevel === 'success'
              ? 'bg-gradient-to-b from-emerald-500/10 to-teal-500/5 border-emerald-200'
              : simulationResult.probabilityLevel === 'warning'
              ? 'bg-gradient-to-b from-amber-500/10 to-orange-500/5 border-amber-200'
              : 'bg-gradient-to-b from-red-500/10 to-rose-500/5 border-red-200'
          }`}>
            
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                条件核对结果
              </span>
              <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full border ${
                simulationResult.probabilityLevel === 'success'
                  ? 'bg-emerald-100 text-emerald-800 border-emerald-200'
                  : simulationResult.probabilityLevel === 'warning'
                  ? 'bg-amber-100 text-amber-900 border-amber-200'
                  : 'bg-red-100 text-red-800 border-red-200'
              }`}>
                {simulationResult.probabilityLevel === 'success' ? '条件相对有利' : simulationResult.probabilityLevel === 'warning' ? '需要补充核验' : '存在明显冲突'}
              </span>
            </div>

            {/* Main Verdict */}
            <div>
              <div className="text-xs text-slate-500 font-medium">条件判断：</div>
              <div className={`text-xl sm:text-2xl font-black mt-1 ${
                simulationResult.probabilityLevel === 'success'
                  ? 'text-emerald-700'
                  : simulationResult.probabilityLevel === 'warning'
                  ? 'text-amber-700'
                  : 'text-red-600'
              }`}>
                {simulationResult.probabilityText}
              </div>
            </div>

            {/* Ranking Tier badge */}
            <div className="p-3 bg-white rounded-2xl border border-slate-200 text-xs space-y-1">
              <div className="text-slate-400 font-medium">定性核对结论：</div>
              <div className="font-bold text-slate-900">{simulationResult.tierName}</div>
              <div className="text-slate-500 text-[11px] leading-relaxed pt-1">
                {simulationResult.rankDescription}
              </div>
            </div>

            {/* Key Risks */}
            <div className="space-y-2">
              <div className="text-xs font-bold text-slate-800 flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-500" />
                待核验事项
              </div>
              <ul className="space-y-1.5 text-[11px] text-slate-600">
                {simulationResult.keyRisks.map((risk, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                    <span>{risk}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action Advice */}
            <div className="p-4 bg-white rounded-2xl border border-slate-200 text-xs space-y-1.5">
              <div className="font-bold text-blue-700 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" />
                核验建议
              </div>
              <p className="text-slate-700 text-[11px] leading-relaxed">
                {simulationResult.advice}
              </p>
            </div>

            {/* Oversubscription Diversion Fallback School (P1-4) */}
            {selectedCommunity?.verificationStatus === 'verified' && (
              <OversubscribedFallbackCard
                schoolId={currentSchool.id}
                schoolName={currentSchool.name}
              />
            )}

          </div>

          <div className="text-[11px] text-slate-400 px-2 leading-relaxed">
            * 本工具只做条件核对和风险提示，不预测录取概率，不构成入学或置业承诺。官方招生原文优先级高于历史资料，高德数据仅作地理信息参考。
          </div>

        </div>

      </div>

      {/* Property Ownership & Grandparents Rules Modal (P2-8) */}
      {isPropertyGuideOpen && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn"
          onClick={() => setIsPropertyGuideOpen(false)}
        >
          <div 
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden border border-slate-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-indigo-900 text-white p-5 sm:p-6 relative flex-shrink-0">
              <button 
                onClick={() => setIsPropertyGuideOpen(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-400 text-slate-950">
                  上海幼小招生信息核验清单
                </span>
                <span className="text-xs text-blue-200">以官方原文为准</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold flex items-center gap-2">
                <span>落户产权份额与祖辈三代房产认定细则</span>
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                避免因房产证份额不纯或老人学区房挂靠无效，导致第一批次直接被教育局统筹分流
              </p>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto space-y-5 text-xs sm:text-sm text-slate-700">
              {/* Section 1: Parents ownership percentage */}
              <div className="bg-blue-50/70 border border-blue-200 rounded-2xl p-4 space-y-2">
                <div className="flex items-center gap-2 font-bold text-blue-950 text-sm">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs">1</span>
                  <span>父母产权份额占比硬性红线 (人户一致第一顺位基石)</span>
                </div>
                <div className="space-y-1.5 text-xs text-blue-950/80 leading-relaxed pl-7">
                  <p>
                    <strong>• 产权人身份：</strong>房产权利人原则上必须为<strong>适龄儿童父母双方、单方或儿童本人</strong>。
                  </p>
                  <p>
                    <strong>• 产权份额红线：</strong>在徐汇、静安、浦东、长宁、闵行等生源紧张区域，父母产权份额合计<strong>必须达到 50% 以上（部分顶级热门校要求父母 100% 产权）</strong>。
                  </p>
                  <p className="text-amber-800 bg-amber-50 p-2 rounded-lg border border-amber-200">
                    ⚠️ <strong>严厉警示：</strong>若房产证上掺杂了<strong>非直系第三人</strong>（如伯伯、姑姑、表叔、朋友或非监护人）共有份额哪怕只有 1%~5%，将直接被判定为<strong>“产权不纯”</strong>，丧失第一顺位资格，降为统筹批次！
                  </p>
                </div>
              </div>

              {/* Section 2: Grandparents Property */}
              <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 space-y-2">
                <div className="flex items-center gap-2 font-bold text-amber-950 text-sm">
                  <span className="w-5 h-5 rounded-full bg-amber-600 text-white flex items-center justify-center text-xs">2</span>
                  <span>祖辈三代同堂房产（爷爷奶奶/外公外婆房产）认定细则</span>
                </div>
                <div className="space-y-1.5 text-xs text-amber-950/80 leading-relaxed pl-7">
                  <p>
                    <strong>• 默认法律顺位：</strong>在上海公办招生中，三代挂靠祖辈房产原则上属于<strong>【第二顺位】</strong>（排在父母自购人户一致之后）。在不超额的二三梯队公办可直接录取，但在明珠、汇师、建襄、静教院等一梯队名校，<strong>第一顺位已提前爆满，第二顺位必遭统筹！</strong>
                  </p>
                  <p>
                    <strong>• 第一顺位特例豁免（三代同堂合规条件）：</strong>
                  </p>
                  <div className="bg-white/80 p-2.5 rounded-xl border border-amber-300/60 space-y-1 text-[11px] text-slate-800">
                    <div className="flex items-center gap-1.5 font-bold text-amber-900">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>必须同时满足以下三项严格前置条件：</span>
                    </div>
                    <ol className="list-decimal list-inside space-y-1 pl-1 text-slate-600">
                      <li>适龄儿童自<strong>出生之日起</strong>户籍即登记申报在该祖辈房产处，从未中途迁出；</li>
                      <li>适龄儿童与父母双方户籍均在同一户口本内三代同堂；</li>
                      <li><strong>父母双方在上海市全辖区内确无其他合法产权住房</strong>（须在信息核验时出具上海市不动产登记中心开具的《家庭名下无房证明》原件）。</li>
                    </ol>
                  </div>
                  <p className="text-red-700 text-[11px]">
                    🚫 <strong>大数据穿透查验：</strong>若父母在上海市其他区购有商品房，即使把孩子户口挂在老人学区房，也会被大数据直接比对查出，判定为<strong>“故意人户分离”</strong>直接按统筹分流处理！
                  </p>
                </div>
              </div>

              {/* Section 3: District Nuances */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 space-y-2">
                <div className="flex items-center gap-2 font-bold text-slate-900 text-sm">
                  <span className="w-5 h-5 rounded-full bg-slate-700 text-white flex items-center justify-center text-xs">3</span>
                  <span>核心区特异性细则速查</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                  <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                    <strong className="text-blue-700">徐汇区：</strong>
                    <p className="text-slate-600 text-[11px] mt-0.5">产证权利人必须为父母或儿童本人；祖辈产证无房证明要求极严格，按入户月数排序。</p>
                  </div>
                  <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                    <strong className="text-purple-700">静安区：</strong>
                    <p className="text-slate-600 text-[11px] mt-0.5">严格执行五年/九年一户；生源超额时要求适龄儿童户籍与房屋产权人直接对齐且落户满3年。</p>
                  </div>
                  <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                    <strong className="text-emerald-700">浦东新区：</strong>
                    <p className="text-slate-600 text-[11px] mt-0.5">明珠等超强校要求父母产权占比达 100% 或 50% 以上；祖辈房产超额预警校基本无法跨过统筹线。</p>
                  </div>
                  <div className="p-2.5 bg-white rounded-xl border border-slate-200">
                    <strong className="text-indigo-700">闵行区：</strong>
                    <p className="text-slate-600 text-[11px] mt-0.5">按“人户一致户主与产权人完全对应+入户时长”细分梯队；实验小学等各校区分流预案成熟。</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">
                依据各区教育局公办小学招生日程及核验规范
              </span>
              <button
                onClick={() => setIsPropertyGuideOpen(false)}
                className="px-5 py-2 bg-slate-800 hover:bg-slate-900 text-white text-xs font-semibold rounded-xl transition-colors shadow-sm cursor-pointer"
              >
                我已了解细则
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
