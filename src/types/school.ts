export type SchoolStage = 'kindergarten' | 'primary' | 'middle';

export type SchoolType = 'public' | 'private' | 'bilingual' | 'international' | 'unknown';

export type District =
  | '徐汇区'
  | '黄浦区'
  | '静安区'
  | '浦东新区'
  | '闵行区'
  | '长宁区'
  | '杨浦区'
  | '虹口区'
  | '普陀区'
  | '宝山区'
  | '嘉定区'
  | '松江区'
  | '青浦区'
  | '奉贤区'
  | '金山区'
  | '崇明区';

export type SchoolTier =
  | '市示范园'
  | '市一级园'
  | '公办一梯队'
  | '公办二梯队'
  | '民办顶尖/头牌'
  | '民办优质/特色'
  | '双语国际优质'
  | '普通优质公办'
  | '三公名校'
  | '市重点初中'
  | '资料待核验';

export type CurriculumType =
  | '国家标准课程'
  | 'IB-PYP探究'
  | '双语浸润课程'
  | '蒙特梭利'
  | '瑞吉欧教学'
  | '科创数理特色'
  | '艺术/音乐/体育特色';

export interface PolicySource {
  title: string;
  type: 'district_gov' | 'city_gov' | 'school_official' | 'system_portal';
  authority: string;
  url: string;
  publishYear?: number;
  documentName?: string;
  description?: string;
}

export interface School {
  id: string;
  name: string;
  shortName: string;
  stage: SchoolStage;
  type: SchoolType;
  district: District;
  address: string;
  establishedYear: number;
  tier: SchoolTier;
  badgeTag: string; // e.g. "徐汇四大名校之一", "市示范金字招牌"
  tags: string[];
  coverImage?: string;
  location?: { lat: number; lng: number }; // 真实经纬度坐标 (GCJ-02)
  dataSource?: 'official' | 'legacy' | 'amap_poi';
  verificationStatus?: 'verified' | 'evidence_missing' | 'poi_only';
  canSimulateAdmission?: boolean;
  evidenceStatus?: 'verified' | 'unverified';
  sourceTitle?: string;
  sourceUrl?: string;
  lastVerifiedAt?: string;
  verifiedFields?: ('type' | 'establishedYear' | 'tier' | 'tuition' | 'enrollment' | 'academic' | 'downstream')[];
  admissionYear?: number;
  admissionSourceUrl?: string;

  tuition: {
    amount: number; // annual or monthly
    unit: '元/学期' | '元/月' | '元/年' | '免费/普惠';
    isFree: boolean;
    note?: string;
  };

  enrollment: {
    scope: '本区户籍/房产' | '全市摇号' | '本区摇号' | '对口居委划片' | '学籍对口直升' | '多校电脑派位' | '全市选拔摇号' | '招生范围待官方核验';
    requirements: string[];
    hukouYearsRequired?: number;
    hasFiveYearRule: boolean;
    admissionDifficulty: '极高 (入户3年以上/低摇中率)' | '较高 (人户一致稳妥/摇号适中)' | '中等' | '较易' | '待官方核验';
    oversubscribedHistory?: boolean;
    catchmentAreas?: string[];
    policySources?: PolicySource[];
  };

  middleSchoolDetails?: {
    admissionMode: '学籍对口免试直升' | '户籍地段对口划片' | '多校划片电脑派位' | '全市选拔/摇号' | '民办摇号';
    quotaAllocationScale?: string; // 名额分配到校体量，例如 "每年约45-55人进四校八大/市重点"
    seniorHighDestinations?: {
      tierFourRatio?: string; // 四校预录及录取估测比例
      eightMajorRatio?: string; // 八大金刚及市重点总录取率
      featuredSeniorHighs?: string[]; // 主要流向高中，例如 ["上海中学", "南洋模范", "市二中学"]
    };
    feederPrimaries?: string[]; // 学籍对口关联小学列表，例如 ["上海市汇师小学", "高安路第一小学"]
  };

  academic: {
    rigorLevel: '鸡血应试 (重分层/作业量扎实)' | '均衡高效 (兼顾学术与活动)' | '快乐素质 (重个性潜能/轻负担)' | '教学信息待核验';
    foreignTeacherRatio?: '高配 (全天带班/全英文)' | '中配 (外教专职授课)' | '基础 (每周外教口语课)' | '无外教';
    classSize: number;
    curriculum: CurriculumType[];
    features: string[];
    schedule?: string;
  };

  downstream: {
    routeType: '体制内中高考' | '体制外出国留学' | '公民双轨可选' | '升学去向待官方核验';
    targetSchools: string[];
    directPassRatio?: string;
    note?: string;
  };

  reviews: {
    parentRating: number;
    homeworkDuration: string;
    pros: string[];
    cons: string[];
    parentFeedbackSample: string;
  };

  contact?: {
    phone?: string;
    website?: string;
  };
}

export interface DecisionCriteria {
  stage: SchoolStage;
  targetDistricts: District[];
  hukouStatus:
    | 'sh_consistent'
    | 'sh_grandparents'
    | 'sh_separated'
    | 'non_sh_points'
    | 'non_sh_no_points'
    | 'foreign_or_hkmac';
  hukouYears: number;
  routePreference: 'system_in' | 'system_out' | 'dual_track';
  budgetPerYear: number;
  educationStyle: 'academic' | 'balanced' | 'happy_holistic' | 'bilingual_english';
  priorities: ('distance' | 'brand_tier' | 'tuition' | 'curriculum' | 'middle_school_pipeline')[];
}

export interface HousingPriceInfo {
  averagePrice: number; // 挂牌/成交参考均价 (元/㎡), 如 108000
  priceRange: string; // 挂牌单价区间, 如 "9.8 - 12.0万/㎡"
  totalPriceRange: string; // 主力总价参考 (万元/套), 如 "550万 - 920万"
  propertyType: string; // 建筑形态, 如 "品质商品房" | "售后公房/老公房" | "次新品质社区" | "一线滨江豪宅"
  buildYear: string; // 建筑年代, 如 "2004年" | "1988-1996年"
  premiumTag: string; // 学区房产属性, 如 "自住兼顾品质" | "低总价挂户口" | "高学区溢价" | "改善大盘" | "一梯队头部"
  priceTrend: 'rising' | 'stable' | 'softening'; // 近期价格走势
  priceTrendDesc?: string; // 走势说明, 如 "均价企稳，小户型低总价流通快"
  priceUpdateDate: string; // 行情参考来源与时间, 如 "2024-2025二手房市场行情"
  evidenceStatus?: 'verified' | 'unverified';
  sourceName?: string;
  sourceUrl?: string;
  observedAt?: string; // ISO date, the date the quoted price was observed
}
