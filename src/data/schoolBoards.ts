import { District } from '../types/school';

export interface SchoolBoard {
  id: string;
  name: string; // e.g. '浦东 · 梅园 / 源深'
  shortName: string;
  district: District;
  subdistrictNames: string[];
  tag: string; // e.g. '双一梯队圣地 · 初中王炸'
  priceRange: string; // e.g. '8.8 - 11.5万/㎡'
  totalBudgetRange: string; // e.g. '300万 - 1100万'
  budgetTier: '300-500' | '500-800' | '800-1200' | '1200+';
  keyFeatures: string[];
  primarySchool: string;
  middleSchool: string;
  kindergarten: string;
  recommendedCommunityIds: string[];
  suitability: string;
  score: {
    academic: number;
    middleSchoolPipeline: number;
    livingQuality: number;
    liquidity: number;
  };
}

export const SCHOOL_BOARDS_DATA: SchoolBoard[] = [
  {
    id: 'pudong_meiyuan',
    name: '浦东 · 梅园 / 源深',
    shortName: '浦东梅园源深',
    district: '浦东新区',
    subdistrictNames: ['陆家嘴街道', '潍坊新村街道'],
    tag: '双一梯队圣地 · 初中王炸',
    priceRange: '8.8 - 11.5万/㎡',
    totalBudgetRange: '300万 - 1100万',
    budgetTier: '300-500',
    keyFeatures: [
      '小升初对口建平西校/进才实验，无派位盲盒，初中上限极高',
      '挂牌量大流动性强，300-450万即可买下一房纯挂学籍',
      '福山外国语英语特色 + 明珠A/B理科天花板，顶尖公办集聚'
    ],
    primarySchool: '福山外国语小学 / 明珠小学 (A/B校区)',
    middleSchool: '建平中学西校 / 进才实验中学',
    kindergarten: '冰厂田幼儿园 (市示范园)',
    recommendedCommunityIds: ['pd-meiyuan-xincun', 'pd-zhujiatan', 'pd-quandong-er', 'pd-laoshan-san', 'pd-weifang-liucun', 'pd-renheng-hebin'],
    suitability: '看重初中确定性与硬核中考出口，首选纯挂学籍低总价上车或联洋次新自住',
    score: {
      academic: 98,
      middleSchoolPipeline: 99,
      livingQuality: 75,
      liquidity: 97
    }
  },
  {
    id: 'xuhui_xujiahui',
    name: '徐汇 · 徐家汇 / 衡复风貌',
    shortName: '徐汇徐家汇衡复',
    district: '徐汇区',
    subdistrictNames: ['徐家汇街道', '天平街道', '湖南街道'],
    tag: '名门底蕴 · 初中梯队厚度全市第一',
    priceRange: '9.5 - 13.8万/㎡',
    totalBudgetRange: '330万 - 1200万+',
    budgetTier: '500-800',
    keyFeatures: [
      '徐汇初中资源全市独一档，徐汇/市四/位育/市二/南模派位全部优质',
      '汇师、建襄、向阳、高安一小四大顶流公办全覆盖',
      '既有330万低总价老公房挂户，又有徐家汇花园等高品质次新自住大盘'
    ],
    primarySchool: '汇师小学 / 建襄小学 / 向阳小学 / 高安路第一小学',
    middleSchool: '徐汇中学 / 市四中学 / 位育初级 / 市二初级 / 南模初',
    kindergarten: '乌南幼儿园 (市示范) / 汇师幼儿园 / 汇龙幼儿园',
    recommendedCommunityIds: ['xh-nandan-xiaoqu', 'xh-wending-tianxia', 'xh-xujiahui-huayuan', 'xh-huishi-dalou', 'xh-yueyang-xiaoqu', 'xh-yongjia-xincun', 'xh-gaoan-gongyu'],
    suitability: '追求顶流人文底蕴与全周期优质初中，希望自住与学区兼具的品质中产家庭',
    score: {
      academic: 96,
      middleSchoolPipeline: 98,
      livingQuality: 88,
      liquidity: 95
    }
  },
  {
    id: 'minhang_chunshen',
    name: '闵行 · 春申 / 莘庄',
    shortName: '闵行春申莘庄',
    district: '闵行区',
    subdistrictNames: ['梅陇镇', '莘庄镇'],
    tag: '次新品质大盘 · 宜居自住首选',
    priceRange: '6.5 - 8.8万/㎡',
    totalBudgetRange: '420万 - 1100万',
    budgetTier: '500-800',
    keyFeatures: [
      '绿化率高、大体量次新社区多，带电梯地下车位，自住体验极舒适',
      '闵行实验小学四个校区实力强劲，莘松中学初中升学出色',
      '九年公办黄金闭环，生源圈层极其纯粹，抗跌属性坚挺'
    ],
    primarySchool: '闵行区实验小学 (春申 / 景城校区) / 七宝实验小学',
    middleSchool: '莘松中学 (春申校区 / 莘中校区) / 七宝二中',
    kindergarten: '景城幼儿园 / 闵行区第一幼儿园',
    recommendedCommunityIds: ['mh-chunshen-jingcheng', 'mh-jiangnan-yuan', 'mh-jingcheng-xinyuan', 'mh-wanke-dushi', 'mh-shanghai-kangcheng'],
    suitability: '高度重视居家自住品质与接送便利，追求电梯次新大三房与优质公办兼得',
    score: {
      academic: 90,
      middleSchoolPipeline: 92,
      livingQuality: 96,
      liquidity: 92
    }
  },
  {
    id: 'jingan_daning',
    name: '静安 · 曹家渡 / 静安寺 / 大宁',
    shortName: '静安曹家渡大宁',
    district: '静安区',
    subdistrictNames: ['江宁路街道', '静安寺街道', '大宁路街道'],
    tag: '九年一贯王炸 · 快乐与应试双优',
    priceRange: '8.5 - 13.5万/㎡',
    totalBudgetRange: '450万 - 1600万',
    budgetTier: '800-1200',
    keyFeatures: [
      '静教院附校九年一贯制上海天花板，100%直升免除中考前所有折腾',
      '大宁板块大宁国际+闸北实验+风华初，中环内绿化商业配套标杆',
      '静安区轻负担高质量教学理念，课外兴趣特长发展空间大'
    ],
    primarySchool: '静教院附校 (九年一贯) / 一师附小 / 闸北实验小学',
    middleSchool: '静教院附校初中部 / 市西初级 / 风华初级中学',
    kindergarten: '南西幼儿园 (市示范) / 大宁国际幼儿园',
    recommendedCommunityIds: ['ja-haifang-cun', 'ja-daancheng', 'ja-sanhe-huayuan', 'ja-huizhihu-huayuan'],
    suitability: '追求九年一贯直升确定性，推崇轻负担高素质教育，或看重大宁高品质自住',
    score: {
      academic: 97,
      middleSchoolPipeline: 96,
      livingQuality: 90,
      liquidity: 93
    }
  },
  {
    id: 'xuhui_tianlin',
    name: '徐汇 · 田林 / 康健',
    shortName: '徐汇田林康健',
    district: '徐汇区',
    subdistrictNames: ['田林街道', '康健街道', '漕河泾街道'],
    tag: '性价比之王 · 稳妥公办强区',
    priceRange: '6.5 - 8.5万/㎡',
    totalBudgetRange: '260万 - 650万',
    budgetTier: '300-500',
    keyFeatures: [
      '徐汇公办最低总价上车门槛，260万-350万即可买下一房挂户',
      '求知小学、田三小、上师大一附小口碑扎实，学风严谨稳健',
      '成熟市区烟火气，地铁交通网密集，生活成本相对经济'
    ],
    primarySchool: '上海市求知小学 / 田林第三小学 / 上师大第一附属小学',
    middleSchool: '上师大附中附属龙华中学 / 中国中学 / 樱花初级',
    kindergarten: '科技幼儿园 / 康健幼儿园',
    recommendedCommunityIds: ['xh-tianlin-sancun', 'xh-shouyifang', 'xh-yuannan-ercun', 'xh-xiqin-xiaoqu'],
    suitability: '总价预算有限（300-500万），希望稳进徐汇公办教育体系并兼顾市区通勤的家庭',
    score: {
      academic: 86,
      middleSchoolPipeline: 88,
      livingQuality: 82,
      liquidity: 90
    }
  },
  {
    id: 'yangpu_anshan',
    name: '杨浦 · 鞍山 / 控江',
    shortName: '杨浦鞍山控江',
    district: '杨浦区',
    subdistrictNames: ['控江路街道', '四平路街道'],
    tag: '传统升学硬核 · 理科初中高地',
    priceRange: '6.8 - 9.5万/㎡',
    totalBudgetRange: '280万 - 600万',
    budgetTier: '300-500',
    keyFeatures: [
      '打虎山路第一小学、控江二村老牌名校，数理逻辑课业底子极扎实',
      '对口鞍山初级与控江初级，中考四校八大自主招生录取率全市前列',
      '总价门槛亲民，280-450万即可入手紧凑两房，性价比超高'
    ],
    primarySchool: '上海市打虎山路第一小学 / 控江二村小学',
    middleSchool: '鞍山初级中学 / 控江初级中学 / 铁岭中学',
    kindergarten: '本溪路幼儿园 (市示范)',
    recommendedCommunityIds: ['yp-anshan-yicun', 'yp-konger-cun'],
    suitability: '看重扎实应试功底与理科初中实力，希望在市区中环以适度预算博取高升学上限',
    score: {
      academic: 94,
      middleSchoolPipeline: 93,
      livingQuality: 78,
      liquidity: 89
    }
  },
  {
    id: 'huangpu_laoximen',
    name: '黄浦 · 老西门 / 淮海中路',
    shortName: '黄浦老西门淮海',
    district: '黄浦区',
    subdistrictNames: ['老西门街道', '淮海中路街道', '豫园街道'],
    tag: '市中心底蕴 · 卢湾一中心 / 蓬莱二小',
    priceRange: '10.5 - 14.5万/㎡',
    totalBudgetRange: '420万 - 1800万',
    budgetTier: '800-1200',
    keyFeatures: [
      '黄浦教育高地，蓬莱路第二小学与卢湾第一中心小学口碑卓著',
      '卢湾一中心对口直升卢湾初级，公办黄金闭环免除电脑派位烦恼',
      '市中心繁华核心地段，自住生活极其便利，房产极具抗跌保值属性'
    ],
    primarySchool: '蓬莱路第二小学 / 卢湾第一中心小学 / 上海市实验小学',
    middleSchool: '卢湾初级中学 / 敬业初级中学 / 格致初级',
    kindergarten: '蓬莱路幼儿园 / 荷花池幼儿园 (市示范)',
    recommendedCommunityIds: ['hp-penglai-dasha', 'hp-danshui-xiaoqu', 'hp-shiyan-xiaoqu'],
    suitability: '追求市区核心地段成熟配套，看重公办名门素质教育与优质初中直升机会的高净值家庭',
    score: {
      academic: 95,
      middleSchoolPipeline: 96,
      livingQuality: 92,
      liquidity: 94
    }
  },
  {
    id: 'changning_gubei',
    name: '长宁 · 江苏路 / 古北国际',
    shortName: '长宁江五古北',
    district: '长宁区',
    subdistrictNames: ['华阳路街道', '虹桥街道', '江苏路街道'],
    tag: '快乐素质与涉外 · 多校摇号教育高地',
    priceRange: '8.8 - 12.5万/㎡',
    totalBudgetRange: '380万 - 1600万',
    budgetTier: '500-800',
    keyFeatures: [
      '江五小学老牌名校，初中参与长宁全区特色电脑派位（延安初/市三女初优质组团）',
      '古北涉外生活区，建青实验学校十五年一贯直升，国际化视野开阔',
      '轻负担高质量快乐教育，孩子课外特长与综合素养发展空间极佳'
    ],
    primarySchool: '江苏路第五小学 (江五小学) / 建青实验学校',
    middleSchool: '延安初级中学 / 市三女初 (电脑摇号) / 建青实验初中',
    kindergarten: '长宁区愚园路第一幼儿园 (市示范)',
    recommendedCommunityIds: ['cn-jiangsu-lu-xiaoqu', 'cn-gubei-xiaoqu'],
    suitability: '推崇全面发展与低压素质教育，既有380万公房低总价上车门槛，亦有古北涉外次新大宅',
    score: {
      academic: 91,
      middleSchoolPipeline: 93,
      livingQuality: 95,
      liquidity: 91
    }
  },
  {
    id: 'putuo_changfeng',
    name: '普陀 · 长风 / 中远两湾城',
    shortName: '普陀长风两湾城',
    district: '普陀区',
    subdistrictNames: ['长风新村街道', '宜川路街道'],
    tag: '苏州河畔九年一贯 · 华二普陀新标杆',
    priceRange: '7.2 - 9.8万/㎡',
    totalBudgetRange: '550万 - 1350万',
    budgetTier: '500-800',
    keyFeatures: [
      '华东师大二附中普陀学校九年一贯，依托华二顶级教育品牌强力赋能',
      '中远两湾城中远实验学校100%校内直升，内环内超大社区配套完善',
      '苏州河景观步道与长风公园生态极佳，改善自住体验极度舒适'
    ],
    primarySchool: '华二普陀学校 / 中远实验学校 (九年一贯) / 华师大四附中',
    middleSchool: '华东师大二附中普陀学校初中 / 中远实验初中',
    kindergarten: '普陀区实验幼儿园 / 华师大附属幼儿园',
    recommendedCommunityIds: ['pt-dahua-qingshuiwan', 'pt-zhongyuan-liangwancheng'],
    suitability: '看重内环/中环便捷交通与九年一贯直升确定性，偏好河畔生态品质自住的中产家庭',
    score: {
      academic: 92,
      middleSchoolPipeline: 95,
      livingQuality: 91,
      liquidity: 90
    }
  },
  {
    id: 'hongkou_quyang',
    name: '虹口 · 曲阳 / 鲁迅公园',
    shortName: '虹口曲阳鲁迅公园',
    district: '虹口区',
    subdistrictNames: ['曲阳路街道', '欧阳路街道'],
    tag: '数理名门底蕴 · 四中心高性价比',
    priceRange: '6.8 - 8.8万/㎡',
    totalBudgetRange: '280万 - 650万',
    budgetTier: '300-500',
    keyFeatures: [
      '虹口第四中心小学公办翘楚，数学与逻辑教育传统深厚',
      '内中环成熟社区，轨交3/8号线交汇，近鲁迅公园与上海外国语大学',
      '小面积低总价280万起步挂户口，工薪家庭优质公办首选'
    ],
    primarySchool: '虹口区第四中心小学 / 崇明路小学',
    middleSchool: '鲁迅初级中学 / 上外附中虹口初级',
    kindergarten: '虹口区西街幼儿园 / 曲阳第一幼儿园',
    recommendedCommunityIds: ['hk-chifeng-xiaoqu'],
    suitability: '看重理科数理学风与扎实公办教学，希望以亲民总价进入市区内环优质学区',
    score: {
      academic: 90,
      middleSchoolPipeline: 89,
      livingQuality: 84,
      liquidity: 88
    }
  },
  {
    id: 'pudong_lianyang',
    name: '浦东 · 联洋 / 花木 / 前滩',
    shortName: '浦东联洋前滩',
    district: '浦东新区',
    subdistrictNames: ['花木街道', '三林镇'],
    tag: '高净值自住标杆 · 进才实验 / 华二前滩',
    priceRange: '9.8 - 14.5万/㎡',
    totalBudgetRange: '780万 - 2200万',
    budgetTier: '1200+',
    keyFeatures: [
      '进才实验小学+进才实验中学联洋九年黄金闭环，公办顶级升学率',
      '仁恒河滨城等高品质人车分流次新大盘，涉外圈层，居住环境顶流',
      '前滩板块华二前滩九年一贯制加持，城市界面新，中产家庭理想居所'
    ],
    primarySchool: '进才实验小学 / 华二前滩学校 (小学部)',
    middleSchool: '进才实验中学 / 华东师大二附中前滩学校 (初中部)',
    kindergarten: '浦东新区东方幼儿园 (市示范) / 冰厂田世纪分园',
    recommendedCommunityIds: ['pd-renheng-hebin', 'pd-lianyang-nianhua', 'pd-vanke-xinlicheng', 'pd-shimao-binjiang'],
    suitability: '预算充裕（800万以上），强烈追求次新品质大盘自住环境与顶尖公办初中双丰收',
    score: {
      academic: 97,
      middleSchoolPipeline: 97,
      livingQuality: 98,
      liquidity: 96
    }
  },
  {
    id: 'minhang_qibao',
    name: '闵行 · 七宝 / 莘庄商务区',
    shortName: '闵行七宝莘庄',
    district: '闵行区',
    subdistrictNames: ['七宝镇', '莘庄镇'],
    tag: '教育强镇生态 · 七宝中学教育集团',
    priceRange: '5.8 - 7.8万/㎡',
    totalBudgetRange: '360万 - 920万',
    budgetTier: '500-800',
    keyFeatures: [
      '七宝实验小学与七宝实验中学九年贯通，依托七宝中学顶尖教育资源',
      '万科城市花园成熟低密大盘，康城实验九年一贯直升极高性价比',
      '商业配套醇熟（万象城、爱琴海、莘庄龙之梦），西南门户交通枢纽'
    ],
    primarySchool: '上海市七宝实验小学 / 康城实验学校 (小学部)',
    middleSchool: '七宝实验中学 / 七宝第二中学 / 康城实验学校初中部',
    kindergarten: '万科第一幼儿园 / 启英幼儿园',
    recommendedCommunityIds: ['mh-wanke-dushi', 'mh-shanghai-kangcheng', 'mh-chunshen-jingcheng'],
    suitability: '注重大型社区生活氛围与九年直升便利，预算400-800万追求大面积实用三房',
    score: {
      academic: 89,
      middleSchoolPipeline: 91,
      livingQuality: 92,
      liquidity: 93
    }
  }
];

export interface DistrictEducationalProfile {
  district: District;
  tag: string;
  policyHighlight: string;
  primaryHighlights: string;
  middleHighlights: string;
  kindergartenHighlights: string;
  priceRange: string;
  totalBudgetRange: string;
  suitability: string;
  score: {
    academic: number;
    middleSchoolPipeline: number;
    livingQuality: number;
    liquidity: number;
  };
}

export const DISTRICT_EDUCATIONAL_PROFILES: Record<District, DistrictEducationalProfile> = {
  '徐汇区': {
    district: '徐汇区',
    tag: '四大公办名门 · 初中梯队厚度全市第一',
    policyHighlight: '公办多校划片派位优质组团，初中位育/市二/徐汇/市四/南模实力极强',
    primaryHighlights: '汇师小学 / 建襄小学 / 向阳小学 / 高安路第一小学 / 求知小学',
    middleHighlights: '徐汇中学 / 市四中学 / 位育初级 / 市二初级 / 南模初级',
    kindergartenHighlights: '乌南幼儿园 (市示范) / 科技幼儿园 / 汇师幼儿园',
    priceRange: '6.5 - 13.8万/㎡',
    totalBudgetRange: '260万 - 1200万+',
    suitability: '追求顶流人文底蕴与全周期优质初中资源，自住与保值流动性极佳',
    score: { academic: 98, middleSchoolPipeline: 99, livingQuality: 90, liquidity: 96 }
  },
  '浦东新区': {
    district: '浦东新区',
    tag: '双一梯队圣地 · 中考出口硬实力天花板',
    policyHighlight: '单校对口直升确定性高，建平西校/进才实验/华二前滩九年闭环无派位盲盒',
    primaryHighlights: '明珠小学 (A/B/C) / 福山外国语小学 / 进才实验小学',
    middleHighlights: '建平中学西校 / 进才实验中学 / 华二前滩学校',
    kindergartenHighlights: '冰厂田幼儿园 (市示范) / 东方幼儿园 (市示范)',
    priceRange: '5.2 - 14.5万/㎡',
    totalBudgetRange: '300万 - 2200万',
    suitability: '看重初中确定性与硬核应试中考出口，挂户学籍与高品质次新均有充足选择',
    score: { academic: 97, middleSchoolPipeline: 98, livingQuality: 88, liquidity: 97 }
  },
  '静安区': {
    district: '静安区',
    tag: '九年一贯王炸 · 愉快教育与大宁生态',
    policyHighlight: '静教院附校九年一贯制全市顶流，轻负担高素质，大宁板块次新改善标杆',
    primaryHighlights: '静教院附校 / 一师附小 / 闸北实验小学 (大宁校区)',
    middleHighlights: '静教院初中部 (100%直升) / 市西初级 / 风华初级中学',
    kindergartenHighlights: '南西幼儿园 (市示范) / 大宁国际幼儿园',
    priceRange: '8.5 - 13.5万/㎡',
    totalBudgetRange: '450万 - 1600万',
    suitability: '追求九年一贯免折腾，推崇高素质全面发展，兼顾大宁宜居自住',
    score: { academic: 96, middleSchoolPipeline: 96, livingQuality: 92, liquidity: 93 }
  },
  '闵行区': {
    district: '闵行区',
    tag: '次新品质大盘 · 宜居自住与七宝教育集团',
    policyHighlight: '闵行实验小学+莘松中学九年闭环，七宝教育强镇，次新大盘居住舒适度高',
    primaryHighlights: '闵行区实验小学 (春申/景城) / 七宝实验小学 / 康城实验',
    middleHighlights: '莘松中学 / 莘光中学 / 七宝实验中学 / 七宝第二中学',
    kindergartenHighlights: '启英幼儿园 / 依霖幼儿园 / 景城幼儿园',
    priceRange: '4.8 - 8.8万/㎡',
    totalBudgetRange: '360万 - 1100万',
    suitability: '高度重视全家人居家自住品质、电梯车位与绿化，追求优质公办与性价比兼具',
    score: { academic: 91, middleSchoolPipeline: 93, livingQuality: 96, liquidity: 93 }
  },
  '黄浦区': {
    district: '黄浦区',
    tag: '市中心名门底蕴 · 百年公办素质示范',
    policyHighlight: '卢湾一中心对口直升卢湾初级黄金闭环，蓬莱路二小与上实小历史悠久',
    primaryHighlights: '蓬莱路第二小学 / 卢湾第一中心小学 / 上海市实验小学',
    middleHighlights: '卢湾初级中学 / 敬业初级中学 / 格致初级中学',
    kindergartenHighlights: '荷花池幼儿园 (市示范) / 蓬莱路幼儿园',
    priceRange: '10.5 - 14.5万/㎡',
    totalBudgetRange: '420万 - 1800万',
    suitability: '追求市中心繁华生活与成熟商业医疗，看重公办名门素质教育',
    score: { academic: 94, middleSchoolPipeline: 95, livingQuality: 92, liquidity: 93 }
  },
  '长宁区': {
    district: '长宁区',
    tag: '全区多校划片电脑派位 · 素质教育与涉外高地',
    policyHighlight: '江五/愚一优质生源，初中全区多校划片电脑摇号派位，享有延安初中组团机会',
    primaryHighlights: '江苏路第五小学 (江五小学) / 愚一小学 / 建青实验学校',
    middleHighlights: '延安初级中学 / 市三女初 / 开元学校 (电脑派位)',
    kindergartenHighlights: '愚园路第一幼儿园 (市示范) / 虹桥幼儿园',
    priceRange: '8.8 - 12.5万/㎡',
    totalBudgetRange: '380万 - 1600万',
    suitability: '推崇低压快乐素质教育，古北涉外生活氛围醇熟，学风开阔自由',
    score: { academic: 91, middleSchoolPipeline: 93, livingQuality: 95, liquidity: 91 }
  },
  '杨浦区': {
    district: '杨浦区',
    tag: '传统数理硬核 · 四校八大中考高地',
    policyHighlight: '打一摇篮与控二扎实课业，初中对口鞍山初级与控江初级，自招进四校八大全市领先',
    primaryHighlights: '打虎山路第一小学 / 控江二村小学 / 二师附小',
    middleHighlights: '控江初级中学 / 鞍山初级中学 / 铁岭中学',
    kindergartenHighlights: '本溪路幼儿园 (市示范) / 延吉幼儿园',
    priceRange: '6.8 - 9.5万/㎡',
    totalBudgetRange: '280万 - 600万',
    suitability: '看重扎实应试功底与理科初中实力，以适度预算博取高升学上限',
    score: { academic: 95, middleSchoolPipeline: 94, livingQuality: 80, liquidity: 90 }
  },
  '普陀区': {
    district: '普陀区',
    tag: '苏州河水岸生态 · 华二普陀九年一贯新标杆',
    policyHighlight: '华东师大二附中普陀学校与中远实验九年一贯直升，内环内交通通达',
    primaryHighlights: '华二普陀学校 / 中远实验学校 (九年一贯) / 华师大四附中',
    middleHighlights: '华东师大二附中普陀学校初中部 / 中远实验学校初中部',
    kindergartenHighlights: '普陀区实验幼儿园 / 华师大附属幼儿园',
    priceRange: '7.2 - 9.8万/㎡',
    totalBudgetRange: '550万 - 1350万',
    suitability: '看重内环交通便捷度与九年直升确定性，偏好苏州河畔高品质自住社区',
    score: { academic: 92, middleSchoolPipeline: 95, livingQuality: 91, liquidity: 90 }
  },
  '虹口区': {
    district: '虹口区',
    tag: '数理公办名门 · 文化底蕴与亲民总价',
    policyHighlight: '虹口第四中心小学数学特色突出，近上外鲁迅公园，小户型上车总价低',
    primaryHighlights: '虹口区第四中心小学 / 崇明路小学 / 广灵路小学',
    middleHighlights: '鲁迅初级中学 / 上外附中虹口初级中学',
    kindergartenHighlights: '西街幼儿园 (市示范) / 曲阳第一幼儿园',
    priceRange: '6.8 - 8.8万/㎡',
    totalBudgetRange: '280万 - 650万',
    suitability: '看重理科数理教学底蕴，希望以280-450万亲民预算进入市区内环学区',
    score: { academic: 90, middleSchoolPipeline: 89, livingQuality: 84, liquidity: 88 }
  },
  '宝山区': {
    district: '宝山区',
    tag: '中环北侧价值洼地 · 上大附校九年一贯',
    policyHighlight: '7号线轨交直达，上大附校九年一贯制公办扎实，次新大盘容积率低',
    primaryHighlights: '上海大学附属学校 / 宝山第一实验小学',
    middleHighlights: '上海大学附属学校初中部 / 行知初级中学',
    kindergartenHighlights: '宝山区红星幼儿园 (市示范)',
    priceRange: '4.0 - 5.5万/㎡',
    totalBudgetRange: '330万 - 600万',
    suitability: '总价350-500万置换次新电梯三房，适合中环北侧刚需年轻家庭',
    score: { academic: 84, middleSchoolPipeline: 85, livingQuality: 87, liquidity: 86 }
  },
  '嘉定区': {
    district: '嘉定区',
    tag: '南翔生态宜居 · 示范名校分校与低密洋房',
    policyHighlight: '普通小学南翔分校与南翔实验学校，11号线直通市区，居住环境优美',
    primaryHighlights: '普通小学 (南翔分校) / 嘉定区南翔实验学校',
    middleHighlights: '嘉定区南翔实验学校初中部 / 嘉定二中初中部',
    kindergartenHighlights: '嘉定区实验幼儿园 (市示范)',
    priceRange: '3.6 - 4.8万/㎡',
    totalBudgetRange: '320万 - 580万',
    suitability: '青睐南翔古镇湖畔生态、低密洋房与电梯次新，预算300-500万舒适自住',
    score: { academic: 83, middleSchoolPipeline: 84, livingQuality: 91, liquidity: 85 }
  },
  '松江区': {
    district: '松江区',
    tag: '大学城人文高地 · 上外松外九年公办标杆',
    policyHighlight: '上海外国语大学松江外国语学校九年一贯制，依托松江大学城雄厚师资',
    primaryHighlights: '上外松江外国语学校 / 上师大松江实验学校',
    middleHighlights: '上外松外初中部 (松江公办头部强校) / 松江二中初中',
    kindergartenHighlights: '松江区荣乐幼儿园 (市示范)',
    priceRange: '3.6 - 4.8万/㎡',
    totalBudgetRange: '320万 - 550万',
    suitability: '大学城9号线地铁商圈，高校教师与IT高知家庭集聚，九年直升省心',
    score: { academic: 87, middleSchoolPipeline: 88, livingQuality: 92, liquidity: 87 }
  },
  '青浦区': {
    district: '青浦区',
    tag: '大虹桥枢纽次新 · 产业集聚与品质大盘',
    policyHighlight: '17号线轨交枢纽，徐泾实验学校与国际双语名校集群，城市界面极新',
    primaryHighlights: '青浦区徐泾实验小学 / 崧泽学校 / 青浦实验小学',
    middleHighlights: '青浦区徐泾中学 / 青浦实验初级中学',
    kindergartenHighlights: '青浦区实验幼儿园 (市示范)',
    priceRange: '4.8 - 6.6万/㎡',
    totalBudgetRange: '420万 - 780万',
    suitability: '大虹桥高收入白领家庭首选，看重次新品质社区配套与未来产业发展',
    score: { academic: 82, middleSchoolPipeline: 83, livingQuality: 92, liquidity: 86 }
  },
  '奉贤区': {
    district: '奉贤区',
    tag: '南桥新城核心 · 汇贤中学与南桥小学',
    policyHighlight: '南桥新城行政中心，汇贤中学升学优异，房产无学区溢价泡沫',
    primaryHighlights: '上海市奉贤区南桥小学 / 弘文学校',
    middleHighlights: '上海市奉贤区汇贤中学 (奉贤顶流公办)',
    kindergartenHighlights: '奉贤区南桥幼儿园 (市示范)',
    priceRange: '2.2 - 3.2万/㎡',
    totalBudgetRange: '200万 - 360万',
    suitability: '预算200-350万即可安居宽敞三房，学位宽裕，生活成本舒适亲民',
    score: { academic: 81, middleSchoolPipeline: 82, livingQuality: 88, liquidity: 80 }
  },
  '金山区': {
    district: '金山区',
    tag: '滨海生态新城 · 海棠小学与金山初级',
    policyHighlight: '金山铁路30分钟快速直达上海南站，公办头部海棠小学学额充沛',
    primaryHighlights: '上海市金山区海棠小学 / 金山实验小学',
    middleHighlights: '上海市金山初级中学 / 罗星中学',
    kindergartenHighlights: '金山区实验幼儿园 (市示范)',
    priceRange: '1.5 - 2.2万/㎡',
    totalBudgetRange: '120万 - 220万',
    suitability: '超低总价门槛，适合本地安家置业或刚需退休家庭康养',
    score: { academic: 79, middleSchoolPipeline: 80, livingQuality: 86, liquidity: 78 }
  },
  '崇明区': {
    district: '崇明区',
    tag: '生态海岛新城 · 崇明实验九年一贯',
    policyHighlight: '崇明生态岛建设，城桥镇成熟中心生活区，实验小学师资扎实',
    primaryHighlights: '上海市崇明区实验小学 / 东门小学',
    middleHighlights: '上海市崇明区实验中学 / 东门中学',
    kindergartenHighlights: '崇明区实验幼儿园 (市示范)',
    priceRange: '1.3 - 1.9万/㎡',
    totalBudgetRange: '110万 - 200万',
    suitability: '崇明本地或生态向往家庭，绿色天然氧吧，教育环境平稳淳朴',
    score: { academic: 78, middleSchoolPipeline: 79, livingQuality: 89, liquidity: 75 }
  }
};

export interface HousingBudgetOption {
  id: string;
  label: string;
  subLabel: string;
  minPrice: number; // 万元
  maxPrice: number; // 万元
  desc: string;
  recommendedTypes: string;
}

export const HOUSING_BUDGET_OPTIONS: HousingBudgetOption[] = [
  {
    id: 'all',
    label: '全部预算',
    subLabel: '不限预算',
    minPrice: 0,
    maxPrice: 9999,
    desc: '全城对比各梯队学区板块与标杆楼盘',
    recommendedTypes: '全形态覆盖'
  },
  {
    id: '300-500',
    label: '300 - 500 万',
    subLabel: '门槛上车 / 纯挂学籍',
    minPrice: 300,
    maxPrice: 500,
    desc: '适合首付有限、纯挂学籍小户型上车，或在别处租大房住',
    recommendedTypes: '梅园一房 / 田林两房 / 鞍山紧凑房'
  },
  {
    id: '500-800',
    label: '500 - 800 万',
    subLabel: '黄金主力刚需',
    minPrice: 500,
    maxPrice: 800,
    desc: '核心区老公房紧凑两房 / 次核心或外环次新品质三房',
    recommendedTypes: '南丹两房 / 梅园两房 / 春申次新'
  },
  {
    id: '800-1200',
    label: '800 - 1200 万',
    subLabel: '中产自住品质改善',
    minPrice: 800,
    maxPrice: 1200,
    desc: '核心区次新商品房两房或三房 / 顶尖双学区标杆社区',
    recommendedTypes: '徐家汇花园 / 文定天下 / 春申三房'
  },
  {
    id: '1200+',
    label: '1200 万以上',
    subLabel: '核心顶流资产',
    minPrice: 1200,
    maxPrice: 9999,
    desc: '顶级核心地段豪宅 / 顶流九年一贯制自住大宅',
    recommendedTypes: '仁恒河滨城 / 露香园 / 世茂滨江'
  }
];

export interface HomeBuyingPriorityOption {
  id: 'balanced_quality' | 'quota_entry' | 'nine_year';
  title: string;
  tag: string;
  desc: string;
  badgeColor: string;
}

export const HOME_BUYING_PRIORITIES: HomeBuyingPriorityOption[] = [
  {
    id: 'balanced_quality',
    title: '🏡 自住兼顾品质 (有电梯/车位/环境好)',
    tag: '次新品质 · 接送舒适',
    desc: '追求次新商品房、电梯、车位、户型方正，孩子居住舒适度高，接送与社区圈层好。',
    badgeColor: 'bg-teal-100 text-teal-800'
  },
  {
    id: 'quota_entry',
    title: '🎯 低总价纯挂学籍 (压低总价/另租房)',
    tag: '低总价 · 高杠杆',
    desc: '以300-500万极低成本上车锁定名校学位，挂户口不自住，全家继续租品质大房或住现有住房。',
    badgeColor: 'bg-blue-100 text-blue-800'
  },
  {
    id: 'nine_year',
    title: '🎓 九年一贯直升 (免小升初折腾派位)',
    tag: '100%直升 · 省心无忧',
    desc: '小学初中同校直升（如静教院、进才实验、中远实验），免去初中电脑派位与不确定性。',
    badgeColor: 'bg-purple-100 text-purple-800'
  }
];
