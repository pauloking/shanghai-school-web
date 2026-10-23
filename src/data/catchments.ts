import { District, HousingPriceInfo } from '../types/school';
import { SCHOOLS_DATA } from './schools';

export interface CommunityCatchment {
  id: string;
  communityName: string; // 小区/楼盘全称
  aliases: string[]; // 常用别名或路段、拼音简写
  district: District;
  subdistrict: string; // 所属街道
  neighborhoodCommittee: string; // 对口居委会
  streetAddressRange: string; // 对应门牌号段
  matchedSchoolId: string; // 对应学校ID (小学)
  schoolName: string; // 对口公办小学名称
  matchedMiddleSchool: string; // 对口公办初中 (闭环)
  matchedMiddleSchoolId?: string; // 对应初中ID (对应学校档案)
  matchedKindergarten?: string; // 对口/就近公办幼儿园
  matchedKindergartenId?: string; // 对应幼儿园ID (对应学校档案)
  nurseryAvailable?: boolean; // 是否开设2-3岁托班 (普惠早教)
  fiveYearRule: boolean; // 是否执行五年一户
  yearsRequiredAdvice: number; // 建议入户年限 (年)
  riskLevel: 'high' | 'medium' | 'low';
  riskNote: string; // 录取与超额风险提示
  location: { lng: number; lat: number }; // 经纬度坐标
  priceInfo?: HousingPriceInfo; // 房屋挂牌均价与市场行情参考
  sourceUrl?: string;
  sourceTitle?: string;
  admissionYear?: number;
  sourcePublishedAt?: string;
  lastVerifiedAt?: string;
  status?: 'verified' | 'legacy_unverified';
  verificationStatus?: 'verified' | 'evidence_missing' | 'invalid_relation';
  evidenceLevel?: 'official' | 'legacy';
  validationIssues?: string[];
  canSimulateAdmission?: boolean;
  isOfficialSource?: boolean;
}

const RAW_CATCHMENTS_DATA: CommunityCatchment[] = [
  // ==================== 徐汇区 ====================
  {
    id: 'xh-wending-tianxia',
    communityName: '文定天下 (文定路209弄)',
    aliases: ['文定天下', '文定路209弄', 'wdtx'],
    district: '徐汇区',
    subdistrict: '徐家汇街道',
    neighborhoodCommittee: '文定居委会',
    streetAddressRange: '文定路209弄全号段',
    matchedSchoolId: 'xh-huishi-primary',
    schoolName: '上海市汇师小学',
    matchedMiddleSchool: '徐汇中学 / 市四中学 (电脑派位)',
    matchedMiddleSchoolId: 'xh-xuhui-middle',
    matchedKindergarten: '上海市徐汇区汇师幼儿园 / 乌南幼儿园(全区摇号)',
    matchedKindergartenId: 'xh-wunan-kindergarten',
    nurseryAvailable: true,
    fiveYearRule: true,
    yearsRequiredAdvice: 3,
    riskLevel: 'high',
    riskNote: '热门一梯队，人户一致高峰年份需入户满2.5-3年以上；严格审查五年一户',
    location: { lng: 121.4340, lat: 31.1890 },
    priceInfo: {
      averagePrice: 108000,
      priceRange: '9.8 - 12.0万/㎡',
      totalPriceRange: '550万 - 920万',
      propertyType: '品质商品房',
      buildYear: '2004年',
      premiumTag: '汇师核心·自住兼顾品质',
      priceTrend: 'stable',
      priceTrendDesc: '挂牌均价平稳，两房三房自住换房流通性强',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },
  {
    id: 'xh-xujiahui-huayuan',
    communityName: '徐家汇花园 (蒲汇塘路99弄)',
    aliases: ['徐家汇花园', '蒲汇塘路99弄', 'xjhhy'],
    district: '徐汇区',
    subdistrict: '徐家汇街道',
    neighborhoodCommittee: '汇师居委会',
    streetAddressRange: '蒲汇塘路99弄1-26号',
    matchedSchoolId: 'xh-huishi-primary',
    schoolName: '上海市汇师小学',
    matchedMiddleSchool: '徐汇中学 / 市四中学',
    matchedMiddleSchoolId: 'xh-xuhui-middle',
    matchedKindergarten: '上海市徐汇区汇龙幼儿园 (一级园)',
    matchedKindergartenId: 'xh-huilong-kindergarten',
    nurseryAvailable: true,
    fiveYearRule: true,
    yearsRequiredAdvice: 3,
    riskLevel: 'high',
    riskNote: '汇师小学本部核心学区，房产与户籍人户一致且满3年最稳妥',
    location: { lng: 121.4380, lat: 31.1925 },
    priceInfo: {
      averagePrice: 115000,
      priceRange: '10.2 - 12.8万/㎡',
      totalPriceRange: '680万 - 1200万',
      propertyType: '品质商品房',
      buildYear: '2000年',
      premiumTag: '汇师本部·高品质大盘',
      priceTrend: 'stable',
      priceTrendDesc: '徐家汇核心次新标杆，自住与学区溢价兼备',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },
  {
    id: 'xh-nandan-xiaoqu',
    communityName: '南丹小区 (南丹东路/南丹路)',
    aliases: ['南丹小区', '南丹大楼', '文定路小区', 'ndxq'],
    district: '徐汇区',
    subdistrict: '徐家汇街道',
    neighborhoodCommittee: '文定居委会',
    streetAddressRange: '南丹路100弄、文定路部分号段',
    matchedSchoolId: 'xh-huishi-primary',
    schoolName: '上海市汇师小学',
    matchedMiddleSchool: '徐汇中学 / 市四中学',
    matchedMiddleSchoolId: 'xh-xuhui-middle',
    matchedKindergarten: '上海市徐汇区建国幼儿园 (一级公办)',
    matchedKindergartenId: 'xh-jianguo-kindergarten',
    nurseryAvailable: false,
    fiveYearRule: true,
    yearsRequiredAdvice: 2.5,
    riskLevel: 'high',
    riskNote: '老牌对口公办名校学区，二手房买卖必须确认上家五年内有无学额在读',
    location: { lng: 121.4390, lat: 31.1905 },
    priceInfo: {
      averagePrice: 92000,
      priceRange: '8.2 - 10.5万/㎡',
      totalPriceRange: '330万 - 520万',
      propertyType: '售后公房/老公房',
      buildYear: '1988-1994年',
      premiumTag: '汇师一梯队·低总价挂户口首选',
      priceTrend: 'stable',
      priceTrendDesc: '小户型挂牌量充足，低总价学区门槛房流通迅速',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },
  {
    id: 'xh-huishi-dalou',
    communityName: '汇师大楼 / 零陵路住宅',
    aliases: ['汇师大楼', '零陵路小区', '零陵路111弄'],
    district: '徐汇区',
    subdistrict: '徐家汇街道',
    neighborhoodCommittee: '汇师居委会',
    streetAddressRange: '零陵路部分号段、文定路部分',
    matchedSchoolId: 'xh-huishi-primary',
    schoolName: '上海市汇师小学',
    matchedMiddleSchool: '徐汇中学 / 市四中学',
    matchedMiddleSchoolId: 'xh-xuhui-middle',
    matchedKindergarten: '上海市徐汇区汇龙幼儿园 (一级园)',
    matchedKindergartenId: 'xh-huilong-kindergarten',
    nurseryAvailable: true,
    fiveYearRule: true,
    yearsRequiredAdvice: 2.5,
    riskLevel: 'high',
    riskNote: '对口汇师小学，对口初中徐汇中学科技班吸引力极高',
    location: { lng: 121.4370, lat: 31.1915 },
    priceInfo: {
      averagePrice: 88000,
      priceRange: '8.0 - 9.8万/㎡',
      totalPriceRange: '310万 - 480万',
      propertyType: '塔楼公寓/公房',
      buildYear: '1993年',
      premiumTag: '汇师对口·低门槛上车盘',
      priceTrend: 'stable',
      priceTrendDesc: '适合预算有限且追求确定性公办名校生源的家庭',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },
  {
    id: 'xh-yueyang-xiaoqu',
    communityName: '岳阳路小区 / 岳阳居委地块',
    aliases: ['岳阳路小区', '岳阳路住宅', '永嘉路住宅', 'yylxq'],
    district: '徐汇区',
    subdistrict: '天平街道',
    neighborhoodCommittee: '岳阳居委会',
    streetAddressRange: '岳阳路全段部分门牌、永嘉路部分',
    matchedSchoolId: 'xh-jianxiang-primary',
    schoolName: '上海市徐汇区建襄小学',
    matchedMiddleSchool: '位育初级中学 / 市二初级中学 / 中国中学',
    matchedMiddleSchoolId: 'xh-shi-er-middle',
    matchedKindergarten: '上海市徐汇区乌鲁木齐南路幼儿园 (市示范园)',
    matchedKindergartenId: 'xh-wunan-kindergarten',
    nurseryAvailable: false,
    fiveYearRule: true,
    yearsRequiredAdvice: 2.5,
    riskLevel: 'high',
    riskNote: '徐汇理科强校，生源历年超载，人户一致入户建议满2.5年以上',
    location: { lng: 121.4565, lat: 31.2050 },
    priceInfo: {
      averagePrice: 125000,
      priceRange: '11.0 - 14.5万/㎡',
      totalPriceRange: '420万 - 850万',
      propertyType: '衡复风貌老公房',
      buildYear: '1985-1995年',
      premiumTag: '建襄理科王·高学区溢价',
      priceTrend: 'stable',
      priceTrendDesc: '衡复风貌保护区，学区属性极强，单价较高',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },
  {
    id: 'xh-yongjia-xincun',
    communityName: '永嘉新村 (永嘉路580弄)',
    aliases: ['永嘉新村', '永嘉路580弄', 'yjxc'],
    district: '徐汇区',
    subdistrict: '天平街道',
    neighborhoodCommittee: '建襄居委会',
    streetAddressRange: '永嘉路580弄全部',
    matchedSchoolId: 'xh-jianxiang-primary',
    schoolName: '上海市徐汇区建襄小学',
    matchedMiddleSchool: '位育初级中学 / 市二初级中学',
    matchedMiddleSchoolId: 'xh-shi-er-middle',
    fiveYearRule: true,
    yearsRequiredAdvice: 3,
    riskLevel: 'high',
    riskNote: '衡复历史保护区住宅，对口建襄理科王，小升初直对位育初',
    location: { lng: 121.4520, lat: 31.2080 },
    priceInfo: {
      averagePrice: 138000,
      priceRange: '12.0 - 16.0万/㎡',
      totalPriceRange: '480万 - 1100万',
      propertyType: '优秀历史保护建筑/法式花园住宅',
      buildYear: '1947-1980年',
      premiumTag: '建襄+位育初·顶级理科双学区',
      priceTrend: 'stable',
      priceTrendDesc: '上海公办幼小初最顶级学区之一，房源稀缺',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },
  {
    id: 'xh-jianguo-xilu',
    communityName: '建国西路住宅群 (建襄对口段)',
    aliases: ['建国西路小区', '建国西路住宅', 'jgxl'],
    district: '徐汇区',
    subdistrict: '天平街道',
    neighborhoodCommittee: '建襄居委会',
    streetAddressRange: '建国西路380号-450号单双号',
    matchedSchoolId: 'xh-jianxiang-primary',
    schoolName: '上海市徐汇区建襄小学',
    matchedMiddleSchool: '位育初级中学 / 市二初级',
    matchedMiddleSchoolId: 'xh-shi-er-middle',
    fiveYearRule: true,
    yearsRequiredAdvice: 2.5,
    riskLevel: 'high',
    riskNote: '建国西路地段人户一致入户满2年以上录取稳妥',
    location: { lng: 121.4540, lat: 31.2070 },
    priceInfo: {
      averagePrice: 120000,
      priceRange: '10.8 - 13.5万/㎡',
      totalPriceRange: '400万 - 780万',
      propertyType: '售后公房/老式公寓',
      buildYear: '1988-1996年',
      premiumTag: '建襄本部·高流通学区房',
      priceTrend: 'stable',
      priceTrendDesc: '小面积一房两房集中，学区挂牌流通稳定',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },
  {
    id: 'xh-xiangyang-nanlu',
    communityName: '襄阳南路小区 / 向阳居委地块',
    aliases: ['襄阳南路住宅', '建国西路小区', 'xynl'],
    district: '徐汇区',
    subdistrict: '天平街道',
    neighborhoodCommittee: '向阳居委会',
    streetAddressRange: '襄阳南路388弄周边各号',
    matchedSchoolId: 'xh-xiangyang-primary',
    schoolName: '上海市徐汇区向阳小学',
    matchedMiddleSchool: '位育初级中学 / 市二初级中学',
    matchedMiddleSchoolId: 'xh-shi-er-middle',
    fiveYearRule: true,
    yearsRequiredAdvice: 2.5,
    riskLevel: 'high',
    riskNote: '向阳本部划片地块，人户一致满2年以上平稳入读',
    location: { lng: 121.4580, lat: 31.2095 },
    priceInfo: {
      averagePrice: 118000,
      priceRange: '10.5 - 13.2万/㎡',
      totalPriceRange: '390万 - 750万',
      propertyType: '老式公寓/售后公房',
      buildYear: '1985-1995年',
      premiumTag: '向阳一梯队·学区溢价坚挺',
      priceTrend: 'stable',
      priceTrendDesc: '向阳本部核心划片，初中位育/市二组团吸引力强',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },
  {
    id: 'xh-shenchengli',
    communityName: '慎成里 (建国西路/襄阳南路)',
    aliases: ['慎成里', '建新里', 'scl'],
    district: '徐汇区',
    subdistrict: '天平街道',
    neighborhoodCommittee: '慎成居委会',
    streetAddressRange: '建国西路384弄周边',
    matchedSchoolId: 'xh-xiangyang-primary',
    schoolName: '上海市徐汇区向阳小学',
    matchedMiddleSchool: '位育初级中学 / 市二初级',
    matchedMiddleSchoolId: 'xh-shi-er-middle',
    fiveYearRule: true,
    yearsRequiredAdvice: 2.5,
    riskLevel: 'medium',
    riskNote: '传统老式石库门学区，严格核验户籍与产证一致性',
    location: { lng: 121.4570, lat: 31.2085 },
    priceInfo: {
      averagePrice: 110000,
      priceRange: '9.8 - 12.5万/㎡',
      totalPriceRange: '360万 - 680万',
      propertyType: '石库门新里/公房',
      buildYear: '1930-1980年',
      premiumTag: '向阳小学对口·风貌老里弄',
      priceTrend: 'stable',
      priceTrendDesc: '老式石库门学区，总价门槛适中',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },
  {
    id: 'xh-gaoan-gongyu',
    communityName: '高安公寓 / 康平路小区',
    aliases: ['高安公寓', '康平路小区', '天平路住宅', 'gagys'],
    district: '徐汇区',
    subdistrict: '湖南街道',
    neighborhoodCommittee: '康平居委会',
    streetAddressRange: '高安路14号、康平路部分',
    matchedSchoolId: 'xh-gaoyi-primary',
    schoolName: '上海市徐汇区高安路第一小学',
    matchedMiddleSchool: '南模初级中学 / 市二初级 / 徐汇中学',
    matchedMiddleSchoolId: 'xh-nanmo-middle',
    fiveYearRule: true,
    yearsRequiredAdvice: 2.5,
    riskLevel: 'high',
    riskNote: '名校聚集区，姚明母校，小升初直对公办顶级南模初',
    location: { lng: 121.4490, lat: 31.2070 },
    priceInfo: {
      averagePrice: 135000,
      priceRange: '12.0 - 15.5万/㎡',
      totalPriceRange: '650万 - 1500万',
      propertyType: '优秀保护公寓/多层住宅',
      buildYear: '1985-2000年',
      premiumTag: '高安一小+南模初·公办金牌双学区',
      priceTrend: 'stable',
      priceTrendDesc: '姚明母校本部，对口南模初金字招牌，自住与学区兼优',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },
  {
    id: 'xh-xiqin-xiaoqu',
    communityName: '习勤小区 / 冠生园路住宅',
    aliases: ['习勤小区', '冠生园路小区', 'xqxq'],
    district: '徐汇区',
    subdistrict: '漕河泾街道',
    neighborhoodCommittee: '习勤居委会',
    streetAddressRange: '习勤路全段、冠生园路部分号段',
    matchedSchoolId: 'xh-qiuzhi-primary',
    schoolName: '上海市徐汇区求知小学',
    matchedMiddleSchool: '中国中学 / 市二初级中学 (派位)',
    matchedMiddleSchoolId: 'xh-shi-er-middle',
    fiveYearRule: true,
    yearsRequiredAdvice: 2,
    riskLevel: 'medium',
    riskNote: '求知小学本部核心划片，人户一致满2年稳妥，对口中国中学优质公办',
    location: { lng: 121.4310, lat: 31.1735 },
    priceInfo: {
      averagePrice: 72000,
      priceRange: '6.5 - 8.2万/㎡',
      totalPriceRange: '310万 - 520万',
      propertyType: '多层售后公房',
      buildYear: '1990-1998年',
      premiumTag: '求知小学·自住刚需高性价比',
      priceTrend: 'stable',
      priceTrendDesc: '漕河泾成熟生活圈，总价友好，适合工薪家庭上车',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },
  {
    id: 'xh-yuannan-ercun',
    communityName: '园南二村 / 园南一村',
    aliases: ['园南二村', '园南一村', 'ynec'],
    district: '徐汇区',
    subdistrict: '长桥街道',
    neighborhoodCommittee: '园南二村居委会',
    streetAddressRange: '百色路、平福路、罗秀路周边',
    matchedSchoolId: 'xh-yuannan-primary',
    schoolName: '上海市徐汇区园南小学',
    matchedMiddleSchool: '上海市园南中学',
    fiveYearRule: true,
    yearsRequiredAdvice: 2,
    riskLevel: 'high',
    riskNote: '长桥板块最优质公办双学区，小初九年全优质对口园南中学',
    location: { lng: 121.4435, lat: 31.1490 },
    priceInfo: {
      averagePrice: 68000,
      priceRange: '6.2 - 7.8万/㎡',
      totalPriceRange: '280万 - 450万',
      propertyType: '售后公房',
      buildYear: '1992-1998年',
      premiumTag: '园南九年公办闭环·高性价比双学区',
      priceTrend: 'stable',
      priceTrendDesc: '长桥板块优质公办双学区，中考升学率突出',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },
  {
    id: 'xh-tianlin-sancun',
    communityName: '田林三村 / 田林四村',
    aliases: ['田林三村', '田林四村', 'tlsc'],
    district: '徐汇区',
    subdistrict: '田林街道',
    neighborhoodCommittee: '田林三村居委会',
    streetAddressRange: '田林东路、宜山路周边',
    matchedSchoolId: 'xh-tianlin3-primary',
    schoolName: '上海市徐汇区田林第三小学',
    matchedMiddleSchool: '田林第三中学',
    fiveYearRule: true,
    yearsRequiredAdvice: 1.5,
    riskLevel: 'medium',
    riskNote: '田林成熟大型社区，生活配套成熟，对口初中稳定',
    location: { lng: 121.4245, lat: 31.1790 },
    priceInfo: {
      averagePrice: 65000,
      priceRange: '5.8 - 7.5万/㎡',
      totalPriceRange: '260万 - 420万',
      propertyType: '售后公房',
      buildYear: '1986-1994年',
      premiumTag: '田三小对口·成熟居住生活区',
      priceTrend: 'stable',
      priceTrendDesc: '宜山路地铁轨交便捷，生活便利，租金回报率高',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },
  {
    id: 'xh-shouyifang',
    communityName: '寿益坊小区 / 康乐小区',
    aliases: ['寿益坊', '康乐小区', '虹漕南路小区', 'syf'],
    district: '徐汇区',
    subdistrict: '康健街道',
    neighborhoodCommittee: '寿益坊居委会',
    streetAddressRange: '虹漕南路600弄周边号段',
    matchedSchoolId: 'xh-shsd-primary',
    schoolName: '上海师范大学第一附属小学',
    matchedMiddleSchool: '康健外国语实验中学 / 中国中学',
    fiveYearRule: true,
    yearsRequiredAdvice: 2,
    riskLevel: 'high',
    riskNote: '师大一附小核心对口社区，学风扎实，五年一户严格核验',
    location: { lng: 121.4180, lat: 31.1570 },
    priceInfo: {
      averagePrice: 66000,
      priceRange: '6.0 - 7.6万/㎡',
      totalPriceRange: '280万 - 460万',
      propertyType: '多层公房',
      buildYear: '1993-1998年',
      premiumTag: '上师大一附小·康健稳妥对口',
      priceTrend: 'stable',
      priceTrendDesc: '师范名牌师资，周边教育氛围浓厚',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },

  // ==================== 浦东新区 ====================
  {
    id: 'pd-zhujiatan',
    communityName: '朱家滩小区 (浦东明珠A核心)',
    aliases: ['朱家滩小区', '南泉北路1035弄', 'zjt'],
    district: '浦东新区',
    subdistrict: '潍坊新村街道',
    neighborhoodCommittee: '朱家滩居委会',
    streetAddressRange: '南泉北路1035弄1-38号',
    matchedSchoolId: 'pd-mingzhu-primary',
    schoolName: '上海市浦东新区明珠小学 (A校区)',
    matchedMiddleSchool: '东昌南校 / 洋泾菊园',
    matchedKindergarten: '上海市浦东新区冰厂田幼儿园 / 蒲公英幼儿园',
    matchedKindergartenId: 'pd-bingchangtian-kindergarten',
    nurseryAvailable: true,
    fiveYearRule: true,
    yearsRequiredAdvice: 3.5,
    riskLevel: 'high',
    riskNote: '【超额高危】浦东公办应试天花板，高峰期入户需满3.5年以上；公民同招未摇中回流必被统筹！',
    location: { lng: 121.5180, lat: 31.2280 },
    priceInfo: {
      averagePrice: 105000,
      priceRange: '9.5 - 11.8万/㎡',
      totalPriceRange: '360万 - 580万',
      propertyType: '售后公房/老公房',
      buildYear: '1988-1996年',
      premiumTag: '明珠A公办应试神校·纯挂户口主力盘',
      priceTrend: 'stable',
      priceTrendDesc: '35-52㎡极小户型挂牌集中，流通周转率位列浦东前茅',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },
  {
    id: 'pd-quandong-er',
    communityName: '泉东二小区 (张杨路/崂山路)',
    aliases: ['泉东二小区', '泉东新村', '张杨路小区', 'qdxq'],
    district: '浦东新区',
    subdistrict: '潍坊新村街道',
    neighborhoodCommittee: '泉东二居委会',
    streetAddressRange: '张杨路1133弄、崂山路644弄部分',
    matchedSchoolId: 'pd-mingzhu-primary',
    schoolName: '上海市浦东新区明珠小学 (A校区)',
    matchedMiddleSchool: '东昌南校 / 洋泾菊园',
    fiveYearRule: true,
    yearsRequiredAdvice: 3.5,
    riskLevel: 'high',
    riskNote: '明珠A主力对口小区，执行五年一户及超额预警名单，落户年限极其敏感',
    location: { lng: 121.5210, lat: 31.2295 },
    priceInfo: {
      averagePrice: 102000,
      priceRange: '9.2 - 11.5万/㎡',
      totalPriceRange: '350万 - 560万',
      propertyType: '售后公房',
      buildYear: '1990-1996年',
      premiumTag: '明珠A校区·主力上车学区房',
      priceTrend: 'stable',
      priceTrendDesc: '近张杨路商圈，紧邻明珠A校门，接送极其便利',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },
  {
    id: 'pd-weifang-liucun',
    communityName: '潍坊六村 (张杨路/潍坊路)',
    aliases: ['潍坊六村', '潍坊新村六街坊', 'wflc'],
    district: '浦东新区',
    subdistrict: '潍坊新村街道',
    neighborhoodCommittee: '潍坊六村居委会',
    streetAddressRange: '潍坊路周边号段、南泉北路部分',
    matchedSchoolId: 'pd-mingzhu-primary',
    schoolName: '上海市浦东新区明珠小学 (A校区)',
    matchedMiddleSchool: '东昌南校',
    fiveYearRule: true,
    yearsRequiredAdvice: 3,
    riskLevel: 'high',
    riskNote: '明珠A校区对口重点老小区，户口需早迁入',
    location: { lng: 121.5240, lat: 31.2270 },
    priceInfo: {
      averagePrice: 98000,
      priceRange: '8.8 - 10.8万/㎡',
      totalPriceRange: '330万 - 520万',
      propertyType: '售后公房',
      buildYear: '1988-1995年',
      premiumTag: '明珠A对口·老牌学区房',
      priceTrend: 'stable',
      priceTrendDesc: '户型多样，低总价挂户口与自住两居皆有成交',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },
  {
    id: 'pd-laoshan-san',
    communityName: '崂山三村 / 崂山五村小区',
    aliases: ['崂山三村', '崂山五村', '崂山六村', 'lssc'],
    district: '浦东新区',
    subdistrict: '陆家嘴街道',
    neighborhoodCommittee: '崂山居委会',
    streetAddressRange: '浦东南路、商城路部分号段',
    matchedSchoolId: 'pd-mingzhu-primary',
    schoolName: '上海市浦东新区明珠小学 (B校区)',
    matchedMiddleSchool: '东昌东校 / 洋泾菊园',
    fiveYearRule: true,
    yearsRequiredAdvice: 3,
    riskLevel: 'high',
    riskNote: '明珠B校区对口，虽比A区略宽容，但入户仍需满2.5-3年以上',
    location: { lng: 121.5140, lat: 31.2365 },
    priceInfo: {
      averagePrice: 88000,
      priceRange: '7.8 - 9.8万/㎡',
      totalPriceRange: '300万 - 480万',
      propertyType: '售后公房',
      buildYear: '1986-1995年',
      premiumTag: '明珠B校区对口·高性价比明珠上车盘',
      priceTrend: 'stable',
      priceTrendDesc: '相比A区单价低1-2万，同样享受明珠教学体系',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },
  {
    id: 'pd-meiyuan-xincun',
    communityName: '梅园新村 (一至六街坊/福山外国语对口)',
    aliases: ['梅园新村', '梅园二街坊', '梅园三街坊', 'myxc'],
    district: '浦东新区',
    subdistrict: '陆家嘴街道',
    neighborhoodCommittee: '福山居委会 / 梅园居委会',
    streetAddressRange: '乳山路、福山路周边号段',
    matchedSchoolId: 'pd-fushan-fushan-primary',
    schoolName: '上海市福山外国语小学 (公办福山本部)',
    matchedMiddleSchool: '建平西校 / 建平远翔',
    matchedMiddleSchoolId: 'pd-jianping-xi-middle',
    matchedKindergarten: '上海市浦东新区冰厂田幼儿园 (商城部/市示范)',
    matchedKindergartenId: 'pd-bingchangtian-kindergarten',
    nurseryAvailable: true,
    fiveYearRule: true,
    yearsRequiredAdvice: 3,
    riskLevel: 'high',
    riskNote: '浦东公办外语名门（福山+建西），小升初直通建平西校，落户满2.5年以上',
    location: { lng: 121.5260, lat: 31.2380 },
    priceInfo: {
      averagePrice: 108000,
      priceRange: '9.6 - 12.2万/㎡',
      totalPriceRange: '380万 - 650万',
      propertyType: '售后公房',
      buildYear: '1985-1994年',
      premiumTag: '福山外语+建平西校·浦东王牌双学区',
      priceTrend: 'stable',
      priceTrendDesc: '陆家嘴白领家庭最青睐的九年优质公办组合',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },
  {
    id: 'pd-vanke-xinlicheng',
    communityName: '万科新里程 (御桥/三林)',
    aliases: ['万科新里程', '盛稼花苑', 'vkxlc'],
    district: '浦东新区',
    subdistrict: '三林镇',
    neighborhoodCommittee: '盛稼居委会',
    streetAddressRange: '盛稼路95弄、御桥路周边',
    matchedSchoolId: 'pd-mingzhu-primary',
    schoolName: '上海市浦东新区明珠小学 (C校区)',
    matchedMiddleSchool: '上南南校 / 三林实验',
    fiveYearRule: true,
    yearsRequiredAdvice: 2.5,
    riskLevel: 'medium',
    riskNote: '明珠C校区对口次新商品房，生源基数大，建议提前2年以上落户',
    location: { lng: 121.5330, lat: 31.1560 },
    priceInfo: {
      averagePrice: 78000,
      priceRange: '7.0 - 8.8万/㎡',
      totalPriceRange: '620万 - 980万',
      propertyType: '品质商品房',
      buildYear: '2008-2010年',
      premiumTag: '明珠C校区·次新自住改善标杆',
      priceTrend: 'stable',
      priceTrendDesc: '万科物业管理优异，环境宜居，生源以IT与金融高知家庭为主',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },
  {
    id: 'pd-renheng-hebin',
    communityName: '仁恒河滨城 (一至三期)',
    aliases: ['仁恒河滨城', '丁香路1599弄', '联洋新社区', 'rhhbc'],
    district: '浦东新区',
    subdistrict: '花木街道',
    neighborhoodCommittee: '联洋新家园居委会',
    streetAddressRange: '丁香路1599弄、丁香路1399弄',
    matchedSchoolId: 'pd-jincai-primary',
    schoolName: '上海市进才实验小学 (公办对口)',
    matchedMiddleSchool: '上海市进才实验中学 (高品质公办完整闭环)',
    matchedMiddleSchoolId: 'pd-jincai-shiyan-middle',
    matchedKindergarten: '上海市浦东新区东方幼儿园 (联洋园区/市示范)',
    matchedKindergartenId: 'pd-dongfang-kindergarten',
    nurseryAvailable: true,
    fiveYearRule: true,
    yearsRequiredAdvice: 2,
    riskLevel: 'medium',
    riskNote: '联洋国际社区标杆商品房，公办进才实验小学+中学九年强配套',
    location: { lng: 121.5580, lat: 31.2280 },
    priceInfo: {
      averagePrice: 125000,
      priceRange: '11.0 - 14.2万/㎡',
      totalPriceRange: '1100万 - 2200万',
      propertyType: '国际社区标杆豪宅',
      buildYear: '2004-2008年',
      premiumTag: '进才实验九年闭环·高品质国际社区',
      priceTrend: 'stable',
      priceTrendDesc: '联洋国际社区绿化率极高，自住品质与九年名校完美兼顾',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },
  {
    id: 'pd-lianyang-nianhua',
    communityName: '联洋年华 / 天安花园 (杨高中路)',
    aliases: ['联洋年华', '天安花园', '水清木华', 'lynh'],
    district: '浦东新区',
    subdistrict: '花木街道',
    neighborhoodCommittee: '联洋年华居委会',
    streetAddressRange: '锦绣路、杨高中路周边社区',
    matchedSchoolId: 'pd-dongfang-kindergarten',
    schoolName: '上海市浦东新区东方幼儿园 (对口园区)',
    matchedMiddleSchool: '进才实验初中',
    matchedMiddleSchoolId: 'pd-jincai-shiyan-middle',
    fiveYearRule: true,
    yearsRequiredAdvice: 2,
    riskLevel: 'medium',
    riskNote: '东方幼儿园市示范直系划片园区，人户一致稳妥录取',
    location: { lng: 121.5540, lat: 31.2260 },
    priceInfo: {
      averagePrice: 108000,
      priceRange: '9.8 - 12.0万/㎡',
      totalPriceRange: '880万 - 1600万',
      propertyType: '高品质商品房',
      buildYear: '2002-2005年',
      premiumTag: '联洋社区·东方幼儿园/进才初',
      priceTrend: 'stable',
      priceTrendDesc: '近世纪公园与东方艺术中心，高端改善热点',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },
  {
    id: 'pd-shimao-binjiang',
    communityName: '世茂滨江花园 (潍坊西路1弄)',
    aliases: ['世茂滨江花园', '世茂滨江', 'smbj'],
    district: '浦东新区',
    subdistrict: '潍坊新村街道',
    neighborhoodCommittee: '世茂滨江居委会',
    streetAddressRange: '潍坊西路1弄1-18号',
    matchedSchoolId: 'pd-yangjing-juguan-primary',
    schoolName: '浦东新区洋泾菊园实验学校 / 明珠辐射片区',
    matchedMiddleSchool: '洋泾菊园实验学校初中部',
    fiveYearRule: true,
    yearsRequiredAdvice: 2,
    riskLevel: 'medium',
    riskNote: '一线滨江高端豪宅，九年一贯优质公办对口',
    location: { lng: 121.5100, lat: 31.2250 },
    priceInfo: {
      averagePrice: 118000,
      priceRange: '10.2 - 13.8万/㎡',
      totalPriceRange: '1300万 - 3500万',
      propertyType: '一线滨江豪宅',
      buildYear: '2002-2007年',
      premiumTag: '洋泾菊园九年一贯/明珠辐射豪宅',
      priceTrend: 'stable',
      priceTrendDesc: '黄浦江一线江景，主力为160-330㎡大平层，圈层纯粹',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },

  // ==================== 静安区 ====================
  {
    id: 'ja-haifang-cun',
    communityName: '海防村 (静教院附校对口核心)',
    aliases: ['海防村', '海防路小区', '静安新时代', 'hfc'],
    district: '静安区',
    subdistrict: '江宁路街道',
    neighborhoodCommittee: '海防村居委会',
    streetAddressRange: '海防路421弄、江宁路部分号段',
    matchedSchoolId: 'ja-jingjiaoyuan-school',
    schoolName: '上海市静安区教育学院附属学校 (静教院附校)',
    matchedMiddleSchool: '静教院附校初中部 (100%九年一贯直升中考神校)',
    matchedMiddleSchoolId: 'ja-jingjiaoyuan-middle',
    matchedKindergarten: '上海市静安区南西幼儿园 / 威海路幼儿园',
    matchedKindergartenId: 'ja-nanxi-kindergarten',
    nurseryAvailable: true,
    fiveYearRule: true,
    yearsRequiredAdvice: 4,
    riskLevel: 'high',
    riskNote: '【全市最高预警】上海公办第一神校，严格执行五年一户，入户年限排队甚至需3.5-4年以上！',
    location: { lng: 121.4525, lat: 31.2405 },
    priceInfo: {
      averagePrice: 135000,
      priceRange: '12.0 - 15.5万/㎡',
      totalPriceRange: '450万 - 780万',
      propertyType: '售后公房',
      buildYear: '1988-1996年',
      premiumTag: '上海公办第一神校·静教院附校100%九年直升',
      priceTrend: 'stable',
      priceTrendDesc: '全市中考成绩断层领先公办，五年一户审查最严格的学区盘之一',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },
  {
    id: 'ja-daancheng',
    communityName: '达安城 (陕西北路部分地块)',
    aliases: ['达安城', '蒋家巷部分', 'dac'],
    district: '静安区',
    subdistrict: '江宁路街道',
    neighborhoodCommittee: '蒋家巷居委会部分',
    streetAddressRange: '陕西北路999弄达安城对应楼栋',
    matchedSchoolId: 'ja-jingjiaoyuan-school',
    schoolName: '上海市静安区教育学院附属学校 (静教院附校)',
    matchedMiddleSchool: '静教院附校初中部',
    matchedMiddleSchoolId: 'ja-jingjiaoyuan-middle',
    fiveYearRule: true,
    yearsRequiredAdvice: 3.5,
    riskLevel: 'high',
    riskNote: '注意区分达安城具体楼栋号，非全小区对口，买房务必核实当年度教育局门牌号公示表',
    location: { lng: 121.4510, lat: 31.2380 },
    priceInfo: {
      averagePrice: 118000,
      priceRange: '10.5 - 13.5万/㎡',
      totalPriceRange: '850万 - 1600万',
      propertyType: '品质商品房',
      buildYear: '2001-2003年',
      premiumTag: '静教院部分楼栋对口·自住改善盘',
      priceTrend: 'stable',
      priceTrendDesc: '注意核实当年教育局划片门牌细则，非全小区对口',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },
  {
    id: 'ja-sanhe-huayuan',
    communityName: '三和花园 (万航渡路299弄)',
    aliases: ['三和花园', '四和里', '三和居委地块', 'shhy'],
    district: '静安区',
    subdistrict: '静安寺街道',
    neighborhoodCommittee: '三和居委会',
    streetAddressRange: '万航渡路299弄周边',
    matchedSchoolId: 'ja-yishifuxiao-primary',
    schoolName: '上海市第一师范附属小学 (一师附小)',
    matchedMiddleSchool: '市西初级中学 / 七一中学 (电脑派位)',
    matchedMiddleSchoolId: 'ja-shixi-middle',
    fiveYearRule: true,
    yearsRequiredAdvice: 2.5,
    riskLevel: 'high',
    riskNote: '一师附小对口核心，愉快教育发祥地，对口初中市西初中极优质',
    location: { lng: 121.4405, lat: 31.2300 },
    priceInfo: {
      averagePrice: 112000,
      priceRange: '10.0 - 12.8万/㎡',
      totalPriceRange: '750万 - 1350万',
      propertyType: '商品房公寓',
      buildYear: '1998年',
      premiumTag: '一师附小愉快教育本部·静安核心',
      priceTrend: 'stable',
      priceTrendDesc: '静安寺核心地段，一师附小对口主力商品房社区',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },
  {
    id: 'ja-huizhihu-huayuan',
    communityName: '慧芝湖花园 / 大宁国际公寓 (共和新路)',
    aliases: ['慧芝湖花园', '大宁金茂府', '闸北实验对口', 'hzhhy'],
    district: '静安区',
    subdistrict: '大宁路街道',
    neighborhoodCommittee: '慧芝湖居委会',
    streetAddressRange: '平型关路1083弄、共和新路周边',
    matchedSchoolId: 'ja-zhabeishiyan-primary',
    schoolName: '上海市静安区闸北实验小学 (大宁校区)',
    matchedMiddleSchool: '风华初级中学 (新静安公办头部强校)',
    fiveYearRule: true,
    yearsRequiredAdvice: 2.5,
    riskLevel: 'high',
    riskNote: '大宁板块核心品质学区（闸北实验+风华初），人户一致需满2年以上',
    location: { lng: 121.4530, lat: 31.2770 },
    priceInfo: {
      averagePrice: 88000,
      priceRange: '7.8 - 10.2万/㎡',
      totalPriceRange: '650万 - 1250万',
      propertyType: '大型高品质商品房',
      buildYear: '2007-2010年',
      premiumTag: '闸北实验+风华初·大宁标杆双学区',
      priceTrend: 'stable',
      priceTrendDesc: '大宁绿地板块明星大盘，人车分流次新环境佳',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },

  // ==================== 黄浦区 ====================
  {
    id: 'hp-penglai-dasha',
    communityName: '蓬莱大厦 / 蓬莱路住宅群',
    aliases: ['蓬莱大厦', '蓬莱路小区', '文庙路小区', 'plds'],
    district: '黄浦区',
    subdistrict: '老西门街道',
    neighborhoodCommittee: '蓬莱居委会',
    streetAddressRange: '蓬莱路全段、中华路部分号段',
    matchedSchoolId: 'hp-penglai-primary',
    schoolName: '上海市黄浦区蓬莱路第二小学',
    matchedMiddleSchool: '市南中学 / 敬业初级中学',
    fiveYearRule: true,
    yearsRequiredAdvice: 2.5,
    riskLevel: 'high',
    riskNote: '黄浦公办一梯队代表，微社会课程标杆，人户一致满2年以上稳',
    location: { lng: 121.4930, lat: 31.2175 },
    priceInfo: {
      averagePrice: 105000,
      priceRange: '9.5 - 12.0万/㎡',
      totalPriceRange: '420万 - 750万',
      propertyType: '塔楼公寓/多层公房',
      buildYear: '1993-2000年',
      premiumTag: '蓬莱二小老牌名校·黄浦一梯队',
      priceTrend: 'stable',
      priceTrendDesc: '老西门板块，生源素质整齐，对口初中敬业初级稳步提升',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },
  {
    id: 'hp-danshui-xiaoqu',
    communityName: '淡水路小区 / 淮海中路住宅',
    aliases: ['淡水路小区', '淮海中路公寓', '复兴中路小区', 'dsxl'],
    district: '黄浦区',
    subdistrict: '淮海中路街道',
    neighborhoodCommittee: '淡水居委会',
    streetAddressRange: '淡水路周边门牌各号',
    matchedSchoolId: 'hp-luwan-first-primary',
    schoolName: '上海市黄浦区卢湾第一中心小学',
    matchedMiddleSchool: '卢湾初级中学 / 向明初级中学',
    matchedMiddleSchoolId: 'hp-luwan-middle',
    fiveYearRule: true,
    yearsRequiredAdvice: 2,
    riskLevel: 'medium',
    riskNote: '对口卢湾初中是公办黄金直升闭环，人户一致排位平稳',
    location: { lng: 121.4735, lat: 31.2165 },
    priceInfo: {
      averagePrice: 115000,
      priceRange: '10.2 - 13.2万/㎡',
      totalPriceRange: '450万 - 850万',
      propertyType: '新里/售后公房',
      buildYear: '1985-1996年',
      premiumTag: '卢湾一中心+卢湾初·黄金直升闭环',
      priceTrend: 'stable',
      priceTrendDesc: '淮海中路繁华地段，优质公办直升，小面积房源抢手',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },
  {
    id: 'hp-shiyan-xiaoqu',
    communityName: '露香园 / 方浜中路住宅 (上海实验小学对口)',
    aliases: ['露香园', '方浜中路小区', '上实小对口', 'lxy'],
    district: '黄浦区',
    subdistrict: '豫园街道',
    neighborhoodCommittee: '露香居委会',
    streetAddressRange: '露香园路、方浜中路周边',
    matchedSchoolId: 'hp-shiyan-primary',
    schoolName: '上海市实验小学 (黄浦百年老校)',
    matchedMiddleSchool: '敬业初级中学 / 格致初级对口派位',
    matchedMiddleSchoolId: 'hp-gezhi-middle',
    fiveYearRule: true,
    yearsRequiredAdvice: 2.5,
    riskLevel: 'high',
    riskNote: '公办老牌翘楚，五年一户严格执行',
    location: { lng: 121.4880, lat: 31.2260 },
    priceInfo: {
      averagePrice: 145000,
      priceRange: '12.5 - 18.0万/㎡',
      totalPriceRange: '800万 - 2600万',
      propertyType: '次新高端豪宅/风貌公房',
      buildYear: '2015-2022年',
      premiumTag: '上实小百年老校·老城厢新标杆',
      priceTrend: 'stable',
      priceTrendDesc: '露香园一期二期豪宅与周边公房兼有，百年公办教育发祥地',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },

  // ==================== 闵行区 ====================
  {
    id: 'mh-chunshen-jingcheng',
    communityName: '春申景城 (一期 / 二期 / 三期)',
    aliases: ['春申景城', '莲花南路1108弄', '莲花南路1288弄', 'csjc'],
    district: '闵行区',
    subdistrict: '莘庄镇',
    neighborhoodCommittee: '春申景城居委会',
    streetAddressRange: '莲花南路1108弄、1288弄、高兴路周边',
    matchedSchoolId: 'mh-shiyan-primary',
    schoolName: '上海市闵行区实验小学 (春申校区)',
    matchedMiddleSchool: '上海市莘松中学 (春申校区优质公办初中)',
    matchedMiddleSchoolId: 'mh-xinsong-middle',
    matchedKindergarten: '上海市闵行区依霖幼儿园 / 莘松幼儿园 (一级园)',
    matchedKindergartenId: 'mh-yilin-kindergarten',
    nurseryAvailable: true,
    fiveYearRule: true,
    yearsRequiredAdvice: 2.5,
    riskLevel: 'high',
    riskNote: '闵行公办最强九年闭环（实小+莘松），小区体量极大，人户一致落户年限通常要求2年以上',
    location: { lng: 121.3980, lat: 31.1070 },
    priceInfo: {
      averagePrice: 78000,
      priceRange: '6.8 - 8.8万/㎡',
      totalPriceRange: '650万 - 1100万',
      propertyType: '大型高品质商品房',
      buildYear: '2005-2011年',
      premiumTag: '闵行实小+莘松九年王牌·自住改善',
      priceTrend: 'stable',
      priceTrendDesc: '春申板块综合素质极高，绿化好物业强，家庭长住首选',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },
  {
    id: 'mh-jiangnan-yuan',
    communityName: '江南苑 / 上海春天 (伟业路)',
    aliases: ['江南苑', '上海春天', '伟业路小区', 'jny'],
    district: '闵行区',
    subdistrict: '莘庄镇',
    neighborhoodCommittee: '江南苑居委会',
    streetAddressRange: '伟业路620弄周边',
    matchedSchoolId: 'mh-shiyan-primary',
    schoolName: '上海市闵行区实验小学 (春申校区)',
    matchedMiddleSchool: '莘松中学',
    matchedMiddleSchoolId: 'mh-xinsong-middle',
    fiveYearRule: true,
    yearsRequiredAdvice: 2,
    riskLevel: 'medium',
    riskNote: '实小春申校区直属划片，五年一户严格审查',
    location: { lng: 121.3940, lat: 31.1110 },
    priceInfo: {
      averagePrice: 72000,
      priceRange: '6.5 - 8.2万/㎡',
      totalPriceRange: '580万 - 950万',
      propertyType: '品质商品房',
      buildYear: '2002-2006年',
      premiumTag: '闵行实小春申校区·自住兼顾',
      priceTrend: 'stable',
      priceTrendDesc: '总价适中，房型方正，邻近莘庄核心生活圈',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },
  {
    id: 'mh-jingcheng-xinyuan',
    communityName: '景城馨苑 / 罗锦新村 (梅陇)',
    aliases: ['景城馨苑', '罗锦新村', 'jaxy'],
    district: '闵行区',
    subdistrict: '梅陇镇',
    neighborhoodCommittee: '景城居委会',
    streetAddressRange: '集心路周边社区',
    matchedSchoolId: 'mh-shiyan-primary',
    schoolName: '上海市闵行区实验小学 (景城校区)',
    matchedMiddleSchool: '莘光中学',
    fiveYearRule: true,
    yearsRequiredAdvice: 2,
    riskLevel: 'medium',
    riskNote: '实小景城校区对口，学额充沛，人户一致基本平稳',
    location: { lng: 121.4130, lat: 31.1140 },
    priceInfo: {
      averagePrice: 62000,
      priceRange: '5.5 - 7.0万/㎡',
      totalPriceRange: '420万 - 700万',
      propertyType: '普通商品房/动迁优质小区',
      buildYear: '2004-2008年',
      premiumTag: '实小景城校区·高性价比首选',
      priceTrend: 'stable',
      priceTrendDesc: '梅陇板块价格洼地，同享闵行实验教育集团师资',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },
  {
    id: 'mh-wanke-dushi',
    communityName: '万科城市花园 (七宝中春路)',
    aliases: ['万科城市花园', '七宝万科', '中春路小区', 'vkcshy'],
    district: '闵行区',
    subdistrict: '七宝镇',
    neighborhoodCommittee: '万科第一/第二居委会',
    streetAddressRange: '中春路8888弄全部',
    matchedSchoolId: 'mh-qibaoshiyan-primary',
    schoolName: '上海市七宝实验小学 / 七宝优质公办对口',
    matchedMiddleSchool: '七宝实验中学 / 七宝二中',
    fiveYearRule: true,
    yearsRequiredAdvice: 2,
    riskLevel: 'medium',
    riskNote: '七宝核心居住区，教育资源雄厚，近七宝中学教育集团',
    location: { lng: 121.3450, lat: 31.1560 },
    priceInfo: {
      averagePrice: 65000,
      priceRange: '5.8 - 7.5万/㎡',
      totalPriceRange: '480万 - 880万',
      propertyType: '万科标杆低密社区',
      buildYear: '1996-2003年',
      premiumTag: '七宝实验九年·成熟自住大盘',
      priceTrend: 'stable',
      priceTrendDesc: '容积率低，绿化极高，近七宝古镇与优质教育集团',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },

  // ==================== 长宁区 ====================
  {
    id: 'cn-jiangsu-lu-xiaoqu',
    communityName: '江苏路小区 / 昭化东路住宅',
    aliases: ['江苏路小区', '昭化东路小区', '华阳路住宅', 'jslxq'],
    district: '长宁区',
    subdistrict: '华阳路街道',
    neighborhoodCommittee: '华阳居委会',
    streetAddressRange: '江苏路706号周边、昭化东路',
    matchedSchoolId: 'cn-jiangwuxiao-primary',
    schoolName: '上海市长宁区江苏路第五小学 (江五小学)',
    matchedMiddleSchool: '长宁特色多校电脑摇号派位 (对口延安初中、市三女初、开元学校)',
    matchedMiddleSchoolId: 'cn-yanan-middle',
    fiveYearRule: true,
    yearsRequiredAdvice: 2,
    riskLevel: 'medium',
    riskNote: '江五小学对口，注意长宁小升初实行全区多校划片摇号派位，初中非单一对口',
    location: { lng: 121.4320, lat: 31.2200 },
    priceInfo: {
      averagePrice: 95000,
      priceRange: '8.5 - 11.0万/㎡',
      totalPriceRange: '380万 - 680万',
      propertyType: '售后公房',
      buildYear: '1988-1998年',
      premiumTag: '江五小学·长宁电脑摇号组团',
      priceTrend: 'stable',
      priceTrendDesc: '长宁小升初全区多校划片摇号，初中享有延安/市三机会',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },
  {
    id: 'cn-gubei-xiaoqu',
    communityName: '古北国际社区 (荣华东道/水城南路)',
    aliases: ['古北新区', '古北一期', '名都城', 'gbxq'],
    district: '长宁区',
    subdistrict: '虹桥街道',
    neighborhoodCommittee: '荣华居委会',
    streetAddressRange: '水城南路、荣华西道周边',
    matchedSchoolId: 'cn-jianqing-primary',
    schoolName: '长宁区虹桥国际/建青实验学校片区',
    matchedMiddleSchool: '建青实验初中 (十五年一贯)',
    fiveYearRule: true,
    yearsRequiredAdvice: 2,
    riskLevel: 'medium',
    riskNote: '涉外社区，国际化氛围浓厚，双语或国际校选择充裕',
    location: { lng: 121.3980, lat: 31.1960 },
    priceInfo: {
      averagePrice: 98000,
      priceRange: '8.8 - 12.0万/㎡',
      totalPriceRange: '980万 - 2200万',
      propertyType: '涉外品质公寓',
      buildYear: '1996-2005年',
      premiumTag: '建青实验十五年一贯/国际学校集聚',
      priceTrend: 'stable',
      priceTrendDesc: '古北涉外社区，国际化氛围浓厚，大户型改善为主',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },

  // ==================== 杨浦区 ====================
  {
    id: 'yp-konger-cun',
    communityName: '控江二村 (控江路/双阳路)',
    aliases: ['控江二村', '双阳路小区', '黄兴居委地块', 'kjec'],
    district: '杨浦区',
    subdistrict: '控江路街道',
    neighborhoodCommittee: '控二居委会',
    streetAddressRange: '双阳路388号周边各弄',
    matchedSchoolId: 'yp-konger-primary',
    schoolName: '上海市杨浦区控江二村小学',
    matchedMiddleSchool: '控江初级中学 (对口优质初中)',
    matchedMiddleSchoolId: 'yp-kongjiang-middle',
    fiveYearRule: true,
    yearsRequiredAdvice: 2.5,
    riskLevel: 'high',
    riskNote: '杨浦公办应试强校，对口控江初中直升，人户一致满2年以上稳',
    location: { lng: 121.5370, lat: 31.2800 },
    priceInfo: {
      averagePrice: 78000,
      priceRange: '7.0 - 9.0万/㎡',
      totalPriceRange: '280万 - 480万',
      propertyType: '售后公房',
      buildYear: '1985-1995年',
      premiumTag: '控二+控江初级·杨浦理科中考强校',
      priceTrend: 'stable',
      priceTrendDesc: '控江初级公办头部实力，小户型总价门槛亲民',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },
  {
    id: 'yp-anshan-yicun',
    communityName: '鞍山一村 / 鞍山二村 (打虎山路)',
    aliases: ['鞍山一村', '鞍山二村', '打虎山路小区', 'asyc'],
    district: '杨浦区',
    subdistrict: '四平路街道',
    neighborhoodCommittee: '鞍山一村居委会',
    streetAddressRange: '打虎山路周边号段',
    matchedSchoolId: 'yp-dayi-primary',
    schoolName: '上海市杨浦区打虎山路第一小学 (打一小学)',
    matchedMiddleSchool: '鞍山初级中学',
    fiveYearRule: true,
    yearsRequiredAdvice: 2.5,
    riskLevel: 'high',
    riskNote: '打一摇篮名牌学区，五年一户严格执行',
    location: { lng: 121.5080, lat: 31.2730 },
    priceInfo: {
      averagePrice: 82000,
      priceRange: '7.2 - 9.5万/㎡',
      totalPriceRange: '290万 - 500万',
      propertyType: '售后公房',
      buildYear: '1982-1992年',
      premiumTag: '打虎山路第一小学·摇篮名校核心',
      priceTrend: 'stable',
      priceTrendDesc: '打一本部核心对口地块，低总价挂户口首选',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },

  // ==================== 虹口区 ====================
  {
    id: 'hk-chifeng-xiaoqu',
    communityName: '赤峰小区 / 东体育会路住宅',
    aliases: ['赤峰小区', '东体小区', '广灵一路住宅', 'cfxq'],
    district: '虹口区',
    subdistrict: '曲阳路街道',
    neighborhoodCommittee: '赤峰居委会',
    streetAddressRange: '东体育会路667号周边',
    matchedSchoolId: 'hk-disizhongxin-primary',
    schoolName: '上海市虹口区第四中心小学',
    matchedMiddleSchool: '鲁迅初级中学 / 虹口公办初中',
    fiveYearRule: true,
    yearsRequiredAdvice: 2,
    riskLevel: 'medium',
    riskNote: '虹口公办第一牌子，数学数理强校，人户一致排位平稳',
    location: { lng: 121.4890, lat: 31.2785 },
    priceInfo: {
      averagePrice: 72000,
      priceRange: '6.5 - 8.2万/㎡',
      totalPriceRange: '280万 - 450万',
      propertyType: '售后公房',
      buildYear: '1986-1994年',
      premiumTag: '虹口四中心·公办数理名门',
      priceTrend: 'stable',
      priceTrendDesc: '曲阳成熟社区，近上外与鲁迅公园，人文底蕴深厚',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },

  // ==================== 普陀区 ====================
  {
    id: 'pt-zhongyuan-liangwancheng',
    communityName: '中远两湾城 (苏州河畔超大社区)',
    aliases: ['中远两湾城', '两湾城', '远景路小区', 'zylwc'],
    district: '普陀区',
    subdistrict: '宜川路街道',
    neighborhoodCommittee: '中远两湾城各居委',
    streetAddressRange: '远景路、中潭路99弄全部',
    matchedSchoolId: 'pt-zhongyuan-shiyan',
    schoolName: '上海市普陀区中远实验学校 (九年一贯制)',
    matchedMiddleSchool: '中远实验学校初中部 (100%校内直升)',
    matchedKindergarten: '上海市普陀区中远两湾城第三幼儿园 / 普陀实验幼',
    matchedKindergartenId: 'pt-shiyan-kindergarten',
    nurseryAvailable: true,
    fiveYearRule: true,
    yearsRequiredAdvice: 2,
    riskLevel: 'medium',
    riskNote: '普陀区标杆九年一贯公办名校，体量巨大，人户一致稳',
    location: { lng: 121.4420, lat: 31.2530 },
    priceInfo: {
      averagePrice: 75000,
      priceRange: '6.8 - 8.8万/㎡',
      totalPriceRange: '550万 - 1300万',
      propertyType: '内环内河畔标杆大盘',
      buildYear: '2001-2006年',
      premiumTag: '中远实验九年直升·自住改善大盘',
      priceTrend: 'stable',
      priceTrendDesc: '苏州河畔超大社区，内环交通便利，中远实验100%校内直升',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },
  // ==================== 浦东周浦 (外围热门镇) ====================
  {
    id: 'pd-zhoupu-lehecheng',
    communityName: '周浦绿地乐和城 (周浦繁荣路/年家浜路)',
    aliases: ['周浦绿地乐和城', '绿地乐和城', '繁荣华庭', 'zplhc'],
    district: '浦东新区',
    subdistrict: '周浦镇',
    neighborhoodCommittee: '乐和居委会',
    streetAddressRange: '繁荣路388弄、年家浜路部分号段',
    matchedSchoolId: 'pd-zhoupu2-primary',
    schoolName: '上海市浦东新区澧溪小学 / 周浦第二小学',
    matchedMiddleSchool: '上海市澧溪中学 (周浦公办优质初中)',
    fiveYearRule: true,
    yearsRequiredAdvice: 1.5,
    riskLevel: 'medium',
    riskNote: '周浦核心商圈品质商品房，人户一致稳妥录取，对口澧溪中考成绩稳定',
    location: { lng: 121.5830, lat: 31.1120 },
    priceInfo: {
      averagePrice: 52000,
      priceRange: '4.6 - 5.8万/㎡',
      totalPriceRange: '380万 - 620万',
      propertyType: '现代高品质商品房',
      buildYear: '2012-2015年',
      premiumTag: '周浦中心·澧溪小学/二小标杆次新盘',
      priceTrend: 'stable',
      priceTrendDesc: '周浦绿地商业旁，户型方正，年轻家庭刚需与改善主力',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },

  // ==================== 闵行莘庄 (超级大盘) ====================
  {
    id: 'mh-shanghai-kangcheng',
    communityName: '上海康城 (莘庄超级大盘/莘松路958弄)',
    aliases: ['上海康城', '康城一期', '康城二期', '康城三期', 'shkc'],
    district: '闵行区',
    subdistrict: '莘庄镇',
    neighborhoodCommittee: '康城第一/第二/第三/第四居委会',
    streetAddressRange: '莘松路958弄全弄',
    matchedSchoolId: 'mh-shiyan-kangcheng',
    schoolName: '上海康城实验学校 (九年一贯制公办优质)',
    matchedMiddleSchool: '上海康城实验学校初中部 (100%校内直升)',
    matchedKindergarten: '上海市闵行区启英幼儿园 (康城园区/一级园)',
    nurseryAvailable: true,
    fiveYearRule: true,
    yearsRequiredAdvice: 2,
    riskLevel: 'medium',
    riskNote: '上海最大住宅社区，校内直升免除小升初烦恼，学额充足，人户一致基本稳',
    location: { lng: 121.3410, lat: 31.1080 },
    priceInfo: {
      averagePrice: 48000,
      priceRange: '4.2 - 5.5万/㎡',
      totalPriceRange: '360万 - 720万',
      propertyType: '超大型成熟商品房社区',
      buildYear: '2001-2008年',
      premiumTag: '康城实验九年一贯·刚需上车第一神盘',
      priceTrend: 'stable',
      priceTrendDesc: '上海体量最大社区，配套自成一体，康城实验校内直升省心',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },

  // ==================== 普陀区 (长风优质改善) ====================
  {
    id: 'pt-dahua-qingshuiwan',
    communityName: '大华清水湾 (光复西路/华师大对口)',
    aliases: ['大华清水湾', '清水湾花苑', '光复西路小区', 'dhqsw'],
    district: '普陀区',
    subdistrict: '长风新村街道',
    neighborhoodCommittee: '清水湾居委会',
    streetAddressRange: '光复西路部分号段、凯旋北路周边',
    matchedSchoolId: 'ja-jingjiaoyuan-school',
    schoolName: '华东师范大学第二附属中学普陀学校 (九年一贯制)',
    matchedMiddleSchool: '华东师大二附中普陀学校初中部',
    fiveYearRule: true,
    yearsRequiredAdvice: 2.5,
    riskLevel: 'high',
    riskNote: '华东师大二附中九年一贯新标杆，长风核心生态居住区，生源火爆',
    location: { lng: 121.4180, lat: 31.2310 },
    priceInfo: {
      averagePrice: 88000,
      priceRange: '7.8 - 10.2万/㎡',
      totalPriceRange: '750万 - 1350万',
      propertyType: '苏州河畔高品质商品房',
      buildYear: '2004-2007年',
      premiumTag: '华师大二附中普陀九年·品质改善',
      priceTrend: 'stable',
      priceTrendDesc: '长风生态商务区，华师大二附中普陀学校强势加持',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },

  // ==================== 宝山区 ====================
  {
    id: 'bs-dahua-gongyuan',
    communityName: '大华公园天下 / 经纬城市绿洲 (大场镇/上大附校)',
    aliases: ['大华公园天下', '经纬城市绿洲', '经纬绿洲', 'dhgytx'],
    district: '宝山区',
    subdistrict: '大场镇',
    neighborhoodCommittee: '经纬居委会',
    streetAddressRange: '锦秋路周边社区、华灵路号段',
    matchedSchoolId: 'ja-jingjiaoyuan-school',
    schoolName: '上海大学附属学校 (九年一贯制)',
    matchedMiddleSchool: '上海大学附属学校初中部',
    fiveYearRule: true,
    yearsRequiredAdvice: 2,
    riskLevel: 'medium',
    riskNote: '宝山中环西侧标杆社区，7号线轨交，九年一贯教育资源扎实',
    location: { lng: 121.3980, lat: 31.3120 },
    priceInfo: {
      averagePrice: 46000,
      priceRange: '4.0 - 5.2万/㎡',
      totalPriceRange: '360万 - 600万',
      propertyType: '大型成熟商品房',
      buildYear: '2010-2014年',
      premiumTag: '上大附校/行知实验·中环北侧高性价比',
      priceTrend: 'stable',
      priceTrendDesc: '近地铁7号线大场镇站，自住性价比高',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },

  // ==================== 嘉定区 ====================
  {
    id: 'jd-baoli-jiayuan',
    communityName: '保利家园 / 金地格林世界 (南翔古镇/实验对口)',
    aliases: ['保利家园', '金地格林世界', '格林世界', 'bljy'],
    district: '嘉定区',
    subdistrict: '南翔镇',
    neighborhoodCommittee: '金地格林居委会',
    streetAddressRange: '芳林路、宝翔路周边社区',
    matchedSchoolId: 'cn-jiangwuxiao-primary',
    schoolName: '上海市嘉定区南翔实验学校 / 普通小学南翔分校',
    matchedMiddleSchool: '嘉定区南翔实验学校初中部',
    fiveYearRule: true,
    yearsRequiredAdvice: 2,
    riskLevel: 'medium',
    riskNote: '嘉定南翔生态宜居标杆，人车分流次新洋房，中考升学率优异',
    location: { lng: 121.3150, lat: 31.3020 },
    priceInfo: {
      averagePrice: 42000,
      priceRange: '3.6 - 4.8万/㎡',
      totalPriceRange: '330万 - 580万',
      propertyType: '品质商品房/低密洋房',
      buildYear: '2008-2012年',
      premiumTag: '嘉定普通小学/南翔实验·外环宜居改善',
      priceTrend: 'stable',
      priceTrendDesc: '南翔古镇生态环境好，11号线轨交直达市中心',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },

  // ==================== 松江区 ====================
  {
    id: 'sj-baoli-xiziwan',
    communityName: '保利西子湾 / 三湘四季 (松江大学城)',
    aliases: ['保利西子湾', '三湘四季花城', '大学城小区', 'blxzw'],
    district: '松江区',
    subdistrict: '广富林街道',
    neighborhoodCommittee: '西子湾居委会',
    streetAddressRange: '广富林路、梅家浜路周边',
    matchedSchoolId: 'sj-shangwaisj-primary',
    schoolName: '上海外国语大学松江外国语学校 (九年一贯制)',
    matchedMiddleSchool: '上外松外初中部 (松江公办头部强校)',
    fiveYearRule: true,
    yearsRequiredAdvice: 2,
    riskLevel: 'high',
    riskNote: '松江区公办顶流学区（上外松外九年），大学城地铁站旁，生源以高校教师与白领为主',
    location: { lng: 121.2180, lat: 31.0620 },
    priceInfo: {
      averagePrice: 42000,
      priceRange: '3.6 - 4.8万/㎡',
      totalPriceRange: '320万 - 550万',
      propertyType: '9号线地铁上盖品质盘',
      buildYear: '2008-2010年',
      premiumTag: '上外松江外国语九年一贯·松江品质首选',
      priceTrend: 'stable',
      priceTrendDesc: '松江大学城核心居住区，上外附校九年一贯制中考优异',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },

  // ==================== 青浦区 ====================
  {
    id: 'qp-zhaoshang-hongqiao',
    communityName: '招商虹桥公馆 / 西郊半岛 (青浦徐泾/大虹桥)',
    aliases: ['招商虹桥公馆', '西郊半岛', '徐泾新村', 'zshqgg'],
    district: '青浦区',
    subdistrict: '徐泾镇',
    neighborhoodCommittee: '招商居委会',
    streetAddressRange: '徐盈路1188弄、崧泽大道周边',
    matchedSchoolId: 'qp-xujing-primary',
    schoolName: '青浦区徐泾实验小学 / 崧泽学校',
    matchedMiddleSchool: '青浦区徐泾中学',
    fiveYearRule: true,
    yearsRequiredAdvice: 1.5,
    riskLevel: 'medium',
    riskNote: '大虹桥核心板块次新品质盘，17号线地铁站旁，教育资源持续升级',
    location: { lng: 121.2850, lat: 31.1890 },
    priceInfo: {
      averagePrice: 58000,
      priceRange: '5.0 - 6.6万/㎡',
      totalPriceRange: '460万 - 780万',
      propertyType: '大虹桥次新品质社区',
      buildYear: '2020-2022年',
      premiumTag: '大虹桥核心·优质九年公办配套',
      priceTrend: 'stable',
      priceTrendDesc: '17号线徐盈路地铁上盖，大虹桥高收入年轻家庭集聚',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },

  // ==================== 奉贤区 ====================
  {
    id: 'fx-nanqiao-lvdian',
    communityName: '南桥绿地花语 / 聚润新苑 (奉贤南桥新城)',
    aliases: ['南桥绿地', '聚润新苑', '南桥新城小区', 'nqld'],
    district: '奉贤区',
    subdistrict: '南桥镇',
    neighborhoodCommittee: '聚润居委会',
    streetAddressRange: '南桥路、百齐路周边号段',
    matchedSchoolId: 'fx-nanqiao-primary',
    schoolName: '上海市奉贤区南桥小学 / 弘文学校',
    matchedMiddleSchool: '上海市奉贤区汇贤中学 (奉贤顶流公办)',
    fiveYearRule: false,
    yearsRequiredAdvice: 1,
    riskLevel: 'low',
    riskNote: '奉贤核心学区，对口汇贤中学升学率居全区第一，学位相对平稳',
    location: { lng: 121.4620, lat: 30.9180 },
    priceInfo: {
      averagePrice: 26000,
      priceRange: '2.2 - 3.1万/㎡',
      totalPriceRange: '200万 - 360万',
      propertyType: '普通商品房',
      buildYear: '2012-2016年',
      premiumTag: '汇贤中学/弘文学校·奉贤核心学区',
      priceTrend: 'stable',
      priceTrendDesc: '南桥新城核心配套，自住舒适度高',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },

  // ==================== 金山区 ====================
  {
    id: 'js-jinshan-shihua',
    communityName: '海棠新村 / 海尚花苑 (金山新城)',
    aliases: ['海棠新村', '海尚花苑', '石化小区', 'htxc'],
    district: '金山区',
    subdistrict: '石化街道',
    neighborhoodCommittee: '海棠居委会',
    streetAddressRange: '卫零路、龙胜路周边号段',
    matchedSchoolId: 'js-haitang-primary',
    schoolName: '上海市金山区海棠小学',
    matchedMiddleSchool: '上海市金山初级中学 / 罗星中学',
    fiveYearRule: false,
    yearsRequiredAdvice: 1,
    riskLevel: 'low',
    riskNote: '金山老牌头部双学区，人户一致稳妥录取，房价亲民',
    location: { lng: 121.3410, lat: 30.7280 },
    priceInfo: {
      averagePrice: 18000,
      priceRange: '1.5 - 2.2万/㎡',
      totalPriceRange: '120万 - 220万',
      propertyType: '普通住宅/公房',
      buildYear: '1995-2005年',
      premiumTag: '海棠小学/金山初中·低门槛刚需',
      priceTrend: 'stable',
      priceTrendDesc: '金山新城金山铁路快速直达上海南站，价格亲民',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  },

  // ==================== 崇明区 ====================
  {
    id: 'cm-chengqiao-xincun',
    communityName: '崇明城桥新村 / 绿岛新苑 (城桥镇)',
    aliases: ['城桥新村', '绿岛新苑', '崇明新城小区', 'cqxc'],
    district: '崇明区',
    subdistrict: '城桥镇',
    neighborhoodCommittee: '城桥居委会',
    streetAddressRange: '八一路、翠竹路周边号段',
    matchedSchoolId: 'cm-cmshiyan-primary',
    schoolName: '上海市崇明区实验小学',
    matchedMiddleSchool: '上海市崇明区实验中学 / 东门中学',
    fiveYearRule: false,
    yearsRequiredAdvice: 1,
    riskLevel: 'low',
    riskNote: '崇明核心学区，实验小学师资力量雄厚，生态宜居',
    location: { lng: 121.4010, lat: 31.6280 },
    priceInfo: {
      averagePrice: 16000,
      priceRange: '1.3 - 1.9万/㎡',
      totalPriceRange: '110万 - 200万',
      propertyType: '普通商品住宅',
      buildYear: '2002-2008年',
      premiumTag: '崇明实验小学·生态海岛核心学区',
      priceTrend: 'stable',
      priceTrendDesc: '城桥镇行政与商业中心，生活配套齐全',
      priceUpdateDate: '2024-2025二手房市场行情参考'
    }
  }

];

const OFFICIAL_HOST = /(^|\.)(gov\.cn|edu\.cn|edu\.sh\.gov\.cn|shmec\.gov\.cn)$/i;
const normalizeName = (value = '') => value
  .toLowerCase()
  .replace(/[（(][^）)]*[）)]/g, '')
  .replace(/上海市|上海|区|县|学校|小学部|初中部|公办|民办/g, '')
  .replace(/[\s·•,，、/\\\-—_]/g, '');
const isOfficialUrl = (value = '') => {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && OFFICIAL_HOST.test(url.hostname);
  } catch {
    return false;
  }
};
const isIsoDate = (value = '') => /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value));
const isHttpsUrl = (value = '') => {
  try {
    return new URL(value).protocol === 'https:';
  } catch {
    return false;
  }
};
const schoolById = new Map(SCHOOLS_DATA.map(school => [school.id, school]));

export const ALL_CATCHMENTS_WITH_STATUS: CommunityCatchment[] = RAW_CATCHMENTS_DATA.map((catchment) => {
  const school = schoolById.get(catchment.matchedSchoolId);
  const issues: string[] = [];
  if (!school) issues.push('missing_school');
  if (school && school.district !== catchment.district) issues.push('district_mismatch');
  if (school) {
    const claimed = normalizeName(catchment.schoolName);
    const actual = normalizeName(school.name);
    if (!claimed || !actual || !(claimed === actual || claimed.includes(actual) || actual.includes(claimed))) {
      issues.push('school_name_mismatch');
    }
  }
  if (!isOfficialUrl(catchment.sourceUrl)) issues.push('official_source_missing');
  if (!catchment.sourceTitle?.trim()) issues.push('official_source_title_missing');
  if (!Number.isInteger(catchment.admissionYear)) issues.push('admission_year_missing');
  if (!isIsoDate(catchment.lastVerifiedAt)) issues.push('verification_date_missing');

  const structurallyValid = !issues.some(issue =>
    ['missing_school', 'district_mismatch', 'school_name_mismatch'].includes(issue)
  );
  const officialEvidenceReady = isOfficialUrl(catchment.sourceUrl)
    && Boolean(catchment.sourceTitle?.trim())
    && Number.isInteger(catchment.admissionYear)
    && isIsoDate(catchment.lastVerifiedAt);
  const verified = structurallyValid && catchment.status === 'verified' && officialEvidenceReady;
  const verifiedHousingPrice = Boolean(
    catchment.priceInfo?.evidenceStatus === 'verified'
    && catchment.priceInfo.sourceName?.trim()
    && isHttpsUrl(catchment.priceInfo.sourceUrl)
    && isIsoDate(catchment.priceInfo.observedAt)
  );

  return {
    ...catchment,
    priceInfo: verifiedHousingPrice ? catchment.priceInfo : undefined,
    status: catchment.status || 'legacy_unverified',
    verificationStatus: structurallyValid ? (verified ? 'verified' : 'evidence_missing') : 'invalid_relation',
    evidenceLevel: verified ? 'official' : 'legacy',
    validationIssues: issues,
    canSimulateAdmission: verified,
    isOfficialSource: verified
  };
});

export const QUARANTINED_CATCHMENTS = ALL_CATCHMENTS_WITH_STATUS.filter(
  catchment => catchment.verificationStatus === 'invalid_relation'
);

// Components import this published projection; structurally invalid rows never reach the UI.
export const CATCHMENTS_DATA = ALL_CATCHMENTS_WITH_STATUS.filter(
  catchment => catchment.verificationStatus !== 'invalid_relation'
);
