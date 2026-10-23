import { School } from '../types/school';
import { EXPANDED_SCHOOLS } from './schools_expanded';
import { MIDDLE_SCHOOLS } from './middleSchools';
import { sanitizeSchools } from '../utils/schoolDataQuality';

const BASE_SCHOOLS: School[] = [
  // ==================== 徐汇区 ====================
  {
    id: 'xh-wunan-kindergarten',
    name: '上海市徐汇区乌鲁木齐南路幼儿园 (乌南幼儿园)',
    shortName: '乌南幼儿园',
    stage: 'kindergarten',
    type: 'public',
    district: '徐汇区',
    address: '徐汇区乌鲁木齐南路14号 / 境外部：淮海中路1480弄2号',
    establishedYear: 1953,
    tier: '市示范园',
    badgeTag: '市示范园 · 境内外双轨 · 人文摇篮',
    tags: ['市示范', '百年底蕴', '中外融合', '全人发展', '公办精品'],
    location: { lng: 121.4485, lat: 31.2120 },
    tuition: {
      amount: 700,
      unit: '元/月',
      isFree: false,
      note: '境内公办标准收费约700元/月，境外部按核定特色收费'
    },
    enrollment: {
      scope: '本区户籍/房产',
      requirements: ['徐汇区常住户籍人户一致优先', '入户年限通常需满2-3年以上', '身体健康通过体检'],
      hukouYearsRequired: 3,
      hasFiveYearRule: true,
      admissionDifficulty: '极高 (入户3年以上/低摇中率)',
      oversubscribedHistory: true,
      catchmentAreas: ['天平街道对口居委', '湖南街道对口居委']
    },
    academic: {
      rigorLevel: '快乐素质 (重个性潜能/轻负担)',
      foreignTeacherRatio: '中配 (外教专职授课)',
      classSize: 25,
      curriculum: ['国家标准课程', '双语浸润课程', '艺术/音乐/体育特色'],
      features: ['国际化混龄游戏', '浸润式情感启蒙', '生态艺术美育'],
      schedule: '08:15 入园 - 16:00 离园 (含延时托育)'
    },
    downstream: {
      routeType: '公民双轨可选',
      targetSchools: ['对口徐汇一梯队公办 (如建襄、向阳、高一)', '摇号世外、爱菊、盛大等民办'],
      directPassRatio: '无直升，学区对应片区公办或自主升学'
    },
    reviews: {
      parentRating: 4.9,
      homeworkDuration: '无书面作业，以亲子手工与习惯养成为主',
      pros: ['老牌市示范底蕴深厚，教师素养极高有爱心', '环境优美充满法式梧桐人文气息', '活动丰富不超前抢跑但幼小衔接习惯抓得极好'],
      cons: ['名额极其稀缺，人户一致入户年限要求高', '周边衡复风貌区老洋房停车极其不便'],
      parentFeedbackSample: '老师对孩子情绪极其细腻敏感，校园虽小但非常有爱，孩子每天早上都迫不及待想去幼儿园！'
    }
  },
  {
    id: 'xh-keji-kindergarten',
    name: '上海市徐汇区科技幼儿园',
    shortName: '徐汇科技幼',
    stage: 'kindergarten',
    type: 'public',
    district: '徐汇区',
    address: '徐汇区嘉陵路28号 / 宜山路600号',
    establishedYear: 1994,
    tier: '市示范园',
    badgeTag: '市示范园 · 科技STEM特色 · 探究先锋',
    tags: ['市示范', '科创启蒙', '实验探索', '公办名园'],
    location: { lng: 121.4320, lat: 31.1710 },
    tuition: {
      amount: 700,
      unit: '元/月',
      isFree: false,
      note: '公办市示范保育教育费标准'
    },
    enrollment: {
      scope: '本区户籍/房产',
      requirements: ['徐汇区人户一致且入户满2年以上优先', '对口长桥/漕河泾地段'],
      hukouYearsRequired: 2.5,
      hasFiveYearRule: true,
      admissionDifficulty: '较高 (人户一致稳妥/摇号适中)',
      oversubscribedHistory: true,
      catchmentAreas: ['长桥街道部分居委', '康健街道部分居委']
    },
    academic: {
      rigorLevel: '均衡高效 (兼顾学术与活动)',
      foreignTeacherRatio: '基础 (每周外教口语课)',
      classSize: 28,
      curriculum: ['国家标准课程', '科创数理特色'],
      features: ['幼儿早期科学探究室', '乐高与机器人启蒙', '思维逻辑游戏化'],
      schedule: '08:00 入园 - 16:15 离园'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['徐汇区对口公办小学', '世外、逸夫、盛大小学'],
      directPassRatio: '学区对口或摇号'
    },
    reviews: {
      parentRating: 4.8,
      homeworkDuration: '无书面作业，重动手实验与观察日记',
      pros: ['数理逻辑与科学素养启蒙全市标杆', '园区硬件设施科学馆化，孩子动手能力强', '公办普惠性价比无敌'],
      cons: ['英语沉浸环境相较于双语私立较弱', '班级人数较满额'],
      parentFeedbackSample: '小班就开始玩齿轮、水的浮力和光影实验，孩子好奇心被极大激发，思维逻辑特别清晰。'
    }
  },
  {
    id: 'xh-shiwai-primary',
    name: '上海市世界外国语小学',
    shortName: '世外小学',
    stage: 'primary',
    type: 'private',
    district: '徐汇区',
    address: '徐汇区浦北路380号(境内部) / 浦北路22弄39号(双语部)',
    establishedYear: 1993,
    tier: '民办顶尖/头牌',
    badgeTag: '民办天花板 · 英语母语级 · 双轨王牌',
    tags: ['民办顶尖', '外语特色', '世外系母校', '公民双轨', '生源极优'],
    location: { lng: 121.4172, lat: 31.1685 },
    tuition: {
      amount: 46000,
      unit: '元/学期',
      isFree: false,
      note: '境内部约4.6万/学期；双语/融合部约6.5-7.5万/学期'
    },
    enrollment: {
      scope: '本区摇号',
      requirements: ['符合徐汇区民办小学报名条件的适龄儿童', '超额电脑派位录取'],
      hukouYearsRequired: 0,
      hasFiveYearRule: false,
      admissionDifficulty: '极高 (入户3年以上/低摇中率)',
      oversubscribedHistory: true,
      catchmentAreas: ['全区符合条件儿童均可填报第一志愿']
    },
    academic: {
      rigorLevel: '鸡血应试 (重分层/作业量扎实)',
      foreignTeacherRatio: '高配 (全天带班/全英文)',
      classSize: 30,
      curriculum: ['国家标准课程', 'IB-PYP探究', '双语浸润课程'],
      features: ['世外自主英语教材', '原版阅读精读体系', '全球胜任力与艺术选修', '超强数理思维拓展'],
      schedule: '07:50 到校 - 16:30 放学'
    },
    downstream: {
      routeType: '公民双轨可选',
      targetSchools: ['上海市世界外国语初中 (世外初中直升或摇号优先)', '徐汇优质公办初中'],
      directPassRatio: '直升率极高 (大部分可直升世外初中)'
    },
    reviews: {
      parentRating: 4.95,
      homeworkDuration: '60-90分钟，重思维与项目制展示',
      pros: ['外语水平断层领先，五年级学生口语和阅读堪比初中高年级', '综合素质与眼界格局极高', '直升世外初中通道极具吸引力'],
      cons: ['摇号竞争白热化，中签率低', '学业节奏快，家庭需要有较强辅导或资源支撑'],
      parentFeedbackSample: '世外不仅是英语强，数学和语文同样抓得非常深。老师专业敬业，孩子的自主表达能力提升肉眼可见。'
    }
  },
  {
    id: 'xh-shengda-primary',
    name: '上海市盛大花园小学',
    shortName: '盛大花园小学',
    stage: 'primary',
    type: 'private',
    district: '徐汇区',
    address: '徐汇区龙华路2588号',
    establishedYear: 2001,
    tier: '民办顶尖/头牌',
    badgeTag: '徐汇民办四大 · 鸡血扎实 · 拔尖摇篮',
    tags: ['体制内应试强校', '数理扎实', '英语突出', '走读寄宿均可'],
    location: { lng: 121.4560, lat: 31.1780 },
    tuition: {
      amount: 40000,
      unit: '元/学期',
      isFree: false
    },
    enrollment: {
      scope: '本区摇号',
      requirements: ['徐汇区户籍或持有居住证积分达标儿童', '超额电脑随机摇号'],
      hasFiveYearRule: false,
      admissionDifficulty: '极高 (入户3年以上/低摇中率)',
      oversubscribedHistory: true
    },
    academic: {
      rigorLevel: '鸡血应试 (重分层/作业量扎实)',
      foreignTeacherRatio: '中配 (外教专职授课)',
      classSize: 32,
      curriculum: ['国家标准课程', '双语浸润课程', '科创数理特色'],
      features: ['数学思维分层拓展', '书写规范与基础扎实', '法文/日文二外选修'],
      schedule: '08:00 到校 - 16:20 放学'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['华育中学 (历年头部生源大户)', '西南位育', '世外初中', '徐汇公办优质初中'],
      directPassRatio: '考入华育/西南位育比例居全市前列'
    },
    reviews: {
      parentRating: 4.8,
      homeworkDuration: '60-80分钟，题目精炼且抓落实',
      pros: ['体制内基本功极其扎实，抓学习抓规范一丝不苟', '校风严谨，家长省心（校内抓得紧）'],
      cons: ['应试压力较大，对慢热型或抗挫力弱的孩子有挑战'],
      parentFeedbackSample: '在盛大读书，根本不用在外面报杂七杂八的基础班，学校老师每天盯得非常细致。'
    }
  },
  {
    id: 'xh-aiju-primary',
    name: '上海市爱菊小学',
    shortName: '爱菊小学',
    stage: 'primary',
    type: 'private',
    district: '徐汇区',
    address: '徐汇区安福路247号',
    establishedYear: 1993,
    tier: '民办顶尖/头牌',
    badgeTag: '艺术与学术兼具 · 优雅梧桐区 · 人文底蕴',
    tags: ['民办名校', '艺术特色', '法语/英语', '学术过硬'],
    location: { lng: 121.4440, lat: 31.2140 },
    tuition: {
      amount: 42000,
      unit: '元/学期',
      isFree: false
    },
    enrollment: {
      scope: '本区摇号',
      requirements: ['徐汇区户籍或适龄儿童', '超额电脑随机摇号'],
      hasFiveYearRule: false,
      admissionDifficulty: '极高 (入户3年以上/低摇中率)',
      oversubscribedHistory: true
    },
    academic: {
      rigorLevel: '均衡高效 (兼顾学术与活动)',
      foreignTeacherRatio: '中配 (外教专职授课)',
      classSize: 30,
      curriculum: ['国家标准课程', '艺术/音乐/体育特色', '双语浸润课程'],
      features: ['人手一门乐器/弦乐团管乐团', '安福路人文美育', '国际文化交流'],
      schedule: '08:00 到校 - 16:30 放学'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['西南位育', '华育中学', '徐汇公办初中优质班'],
      directPassRatio: '考入市重点初中比例高'
    },
    reviews: {
      parentRating: 4.85,
      homeworkDuration: '45-60分钟，兼顾乐器练习',
      pros: ['艺术美育全市顶级，孩子气质儒雅落落大方', '学术成绩并不放松，理科同样很强'],
      cons: ['校园空间相对紧凑，操场较小'],
      parentFeedbackSample: '爱菊既有民办该有的扎实学风，又充满了琴声和画香，孩子在这里非常有灵气。'
    }
  },
  {
    id: 'xh-huishi-primary',
    name: '上海市汇师小学',
    shortName: '汇师小学',
    stage: 'primary',
    type: 'public',
    district: '徐汇区',
    address: '徐汇区文定路170号 / 零陵路',
    establishedYear: 1870,
    tier: '公办一梯队',
    badgeTag: '公办一梯队 · 百年名校 · 徐汇标杆',
    tags: ['公办一梯队', '百年历史', '对口徐汇中学/市四', '老牌名校'],
    location: { lng: 121.4367, lat: 31.1912 },
    tuition: {
      amount: 0,
      unit: '免费/普惠',
      isFree: true
    },
    enrollment: {
      scope: '对口居委划片',
      requirements: ['人户一致（儿童及父母户籍与产权房完全一致）', '入户年限通常需满2-3年以上', '执行五年一户'],
      hukouYearsRequired: 3,
      hasFiveYearRule: true,
      admissionDifficulty: '极高 (入户3年以上/低摇中率)',
      oversubscribedHistory: true,
      catchmentAreas: ['汇师居委', '文定居委', '南丹居委部分地块']
    },
    academic: {
      rigorLevel: '鸡血应试 (重分层/作业量扎实)',
      foreignTeacherRatio: '基础 (每周外教口语课)',
      classSize: 38,
      curriculum: ['国家标准课程', '科创数理特色'],
      features: ['京剧传统美育', '数理与语文基本功扎实', '严格规范的行为习惯培养'],
      schedule: '08:00 到校 - 16:30 课后看护'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['徐汇中学 (百年名校特设科技班)', '市四中学'],
      directPassRatio: '100%户籍地段对口直升电脑派位'
    },
    reviews: {
      parentRating: 4.8,
      homeworkDuration: '60-75分钟',
      pros: ['公办名校免学费，教学质量堪比优质私立', '历史百年积淀，师资极其稳定', '对口初中徐汇中学在公办初中名列前茅'],
      cons: ['学区房溢价高且户口年限抓得死'],
      parentFeedbackSample: '在徐汇买汇师对口学区房是最省心的体制内闭环路线之一，九年一贯平稳上升！'
    }
  },
  {
    id: 'xh-jianxiang-primary',
    name: '上海市徐汇区建襄小学',
    shortName: '建襄小学',
    stage: 'primary',
    type: 'public',
    district: '徐汇区',
    address: '徐汇区岳阳路255号',
    establishedYear: 1958,
    tier: '公办一梯队',
    badgeTag: '徐汇四大公办 · 鸡血理科王 · 科技摇篮',
    tags: ['公办一梯队', '理科王', '对口位育/市二', '徐汇核心学区'],
    location: { lng: 121.4554, lat: 31.2065 },
    tuition: {
      amount: 0,
      unit: '免费/普惠',
      isFree: true
    },
    enrollment: {
      scope: '对口居委划片',
      requirements: ['人户一致优先，父母与儿童户口房产证必须一致', '五年一户，近年入户年限需2年以上'],
      hukouYearsRequired: 2.5,
      hasFiveYearRule: true,
      admissionDifficulty: '极高 (入户3年以上/低摇中率)',
      oversubscribedHistory: true,
      catchmentAreas: ['建襄居委', '永嘉新村居委部分', '岳阳居委']
    },
    academic: {
      rigorLevel: '鸡血应试 (重分层/作业量扎实)',
      foreignTeacherRatio: '基础 (每周外教口语课)',
      classSize: 35,
      curriculum: ['国家标准课程', '科创数理特色'],
      features: ['数学思维训练', '计算机与少年科学院', '“鸡血扎实”传统'],
      schedule: '08:00 到校 - 16:30'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['位育初级中学', '市二初级中学', '中国中学'],
      directPassRatio: '地段电脑派位或对口'
    },
    reviews: {
      parentRating: 4.75,
      homeworkDuration: '60-80分钟',
      pros: ['徐汇传统四大公办之首，理科与思维抓得尤其深', '升学通道对接位育初中'],
      cons: ['课内课外节奏快，对佛系家长不友好'],
      parentFeedbackSample: '建襄抓学习非常狠，老师认真负责到每个标点符号。适合自律的孩子。'
    }
  },
  {
    id: 'xh-xiangyang-primary',
    name: '上海市徐汇区向阳小学',
    shortName: '向阳小学',
    stage: 'primary',
    type: 'public',
    district: '徐汇区',
    address: '徐汇区襄阳南路388弄15号',
    establishedYear: 1932,
    tier: '公办一梯队',
    badgeTag: '徐汇四大公办 · 快乐教育与学术并重 · 素质典范',
    tags: ['公办一梯队', '全面素质', '乒乓特色', '知名母校'],
    location: { lng: 121.4578, lat: 31.2098 },
    tuition: {
      amount: 0,
      unit: '免费/普惠',
      isFree: true
    },
    enrollment: {
      scope: '对口居委划片',
      requirements: ['人户一致满2-3年', '执行五年一户严格审查'],
      hukouYearsRequired: 2.5,
      hasFiveYearRule: true,
      admissionDifficulty: '极高 (入户3年以上/低摇中率)',
      oversubscribedHistory: true,
      catchmentAreas: ['向阳居委', '慎成居委', '建新居委']
    },
    academic: {
      rigorLevel: '均衡高效 (兼顾学术与活动)',
      foreignTeacherRatio: '基础 (每周外教口语课)',
      classSize: 36,
      curriculum: ['国家标准课程', '艺术/音乐/体育特色'],
      features: ['国球乒乓特色传统', '“快乐教学”实践倡导', '多维探究选修社团'],
      schedule: '08:00 - 16:30'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['位育初级中学', '市二初级中学', '中国中学'],
      directPassRatio: '地段分组电脑派位'
    },
    reviews: {
      parentRating: 4.8,
      homeworkDuration: '50-60分钟',
      pros: ['相比建襄的高压，向阳更提倡快乐与全面发展', '乒乓和艺术活动丰富多彩'],
      cons: ['派位对口存在位育初与市二初的随机性'],
      parentFeedbackSample: '向阳的老师很注重保护孩子的天性，学习上抓基础不盲目刷题，孩子上学特别开心阳光。'
    }
  },

  // ==================== 浦东新区 ====================
  {
    id: 'pd-dongfang-kindergarten',
    name: '上海市浦东新区东方幼儿园',
    shortName: '东方幼儿园',
    stage: 'kindergarten',
    type: 'public',
    district: '浦东新区',
    address: '浦东新区锦和路 / 陆家嘴 / 联洋等多园区',
    establishedYear: 1992,
    tier: '市示范园',
    badgeTag: '浦东公办航母 · 市示范金名片 · 全景化育人',
    tags: ['市示范', '浦东标杆', '国际视野', '集团化办学'],
    location: { lng: 121.5450, lat: 31.2220 },
    tuition: {
      amount: 700,
      unit: '元/月',
      isFree: false
    },
    enrollment: {
      scope: '本区户籍/房产',
      requirements: ['浦东新区对应地段人户一致', '产权人须为适龄儿童父母或本人', '适龄入户满2年以上稳妥'],
      hukouYearsRequired: 2,
      hasFiveYearRule: true,
      admissionDifficulty: '极高 (入户3年以上/低摇中率)',
      oversubscribedHistory: true,
      catchmentAreas: ['联洋年华对口地段', '花木锦绣地段等各园区专属划片']
    },
    academic: {
      rigorLevel: '快乐素质 (重个性潜能/轻负担)',
      foreignTeacherRatio: '中配 (外教专职授课)',
      classSize: 26,
      curriculum: ['国家标准课程', '双语浸润课程', '艺术/音乐/体育特色'],
      features: ['美术与自然生态启蒙', '亲子戏剧表演', '运动健体与大户外探索'],
      schedule: '08:15 - 16:15'
    },
    downstream: {
      routeType: '公民双轨可选',
      targetSchools: ['对口浦东一梯队公办 (如明珠、二中心、进实)', '摇号平和、福山正达等民办'],
      directPassRatio: '地段划片'
    },
    reviews: {
      parentRating: 4.9,
      homeworkDuration: '无作业，重阅读与动手探究习惯',
      pros: ['浦东公办幼儿园第一招牌，各园区硬件极佳', '户外活动场地开阔，运动量充足'],
      cons: ['名额紧张，学区房查得严'],
      parentFeedbackSample: '在联洋校区读的，老师亲切有耐心，每天有大量草坪大活动，孩子身体特别棒。'
    }
  },
  {
    id: 'pd-bingchangtian-kindergarten',
    name: '上海市浦东新区冰厂田幼儿园',
    shortName: '冰厂田幼儿园',
    stage: 'kindergarten',
    type: 'public',
    district: '浦东新区',
    address: '浦东新区商城路1028号 / 碧云园区 / 世纪花园园区',
    establishedYear: 1952,
    tier: '市示范园',
    badgeTag: '市示范顶流 · 70年底蕴 · 游戏与创造力标杆',
    tags: ['市示范', '底蕴深厚', '游戏化学习', '国际社区辐射'],
    location: { lng: 121.5200, lat: 31.2330 },
    tuition: {
      amount: 700,
      unit: '元/月',
      isFree: false
    },
    enrollment: {
      scope: '本区户籍/房产',
      requirements: ['人户一致优先，父母产证', '入户年限通常需满2年及以上'],
      hukouYearsRequired: 2,
      hasFiveYearRule: true,
      admissionDifficulty: '极高 (入户3年以上/低摇中率)',
      oversubscribedHistory: true
    },
    academic: {
      rigorLevel: '快乐素质 (重个性潜能/轻负担)',
      foreignTeacherRatio: '中配 (外教专职授课)',
      classSize: 26,
      curriculum: ['国家标准课程', '双语浸润课程', '艺术/音乐/体育特色'],
      features: ['大运动大游戏', '幼儿探究实验室', '国际礼仪与情商启蒙'],
      schedule: '08:20 - 16:20'
    },
    downstream: {
      routeType: '公民双轨可选',
      targetSchools: ['对口浦东一二梯队公办', '摇号福山正达、平和、民办打一'],
      directPassRatio: '地段划片自主择校'
    },
    reviews: {
      parentRating: 4.9,
      homeworkDuration: '无作业，每日亲子共读',
      pros: ['老牌市示范，教学理念先进', '硬件与环境审美超一流'],
      cons: ['对口房源紧俏，入户排序要求严'],
      parentFeedbackSample: '冰幼注重“在游戏中学习”，孩子自信大方，自理能力在同龄人中非常突出。'
    }
  },
  {
    id: 'pd-mingzhu-primary',
    name: '上海市浦东新区明珠小学 (A/B/C校区)',
    shortName: '明珠小学',
    stage: 'primary',
    type: 'public',
    district: '浦东新区',
    address: '浦东新区南泉北路1017号(A校区) / 劳山路638号(B校区) / 盛稼路95号(C校区)',
    establishedYear: 1993,
    tier: '公办一梯队',
    badgeTag: '浦东公办神话 · 应试天花板 · 数理强霸',
    tags: ['公办一梯队', '鸡血神校', '自主智慧教材', '中高考硬核底座'],
    location: { lng: 121.5175, lat: 31.2290 },
    tuition: {
      amount: 0,
      unit: '免费/普惠',
      isFree: true
    },
    enrollment: {
      scope: '对口居委划片',
      requirements: ['人户一致，儿童与父母户口及产证完全一致', '执行五年一户，近年入户年限须满3年以上（高峰期达3-4年）'],
      hukouYearsRequired: 3.5,
      hasFiveYearRule: true,
      admissionDifficulty: '极高 (入户3年以上/低摇中率)',
      oversubscribedHistory: true,
      catchmentAreas: ['泉东一、二居委', '朱家滩居委', '潍坊新村部分地块']
    },
    academic: {
      rigorLevel: '鸡血应试 (重分层/作业量扎实)',
      foreignTeacherRatio: '基础 (每周外教口语课)',
      classSize: 40,
      curriculum: ['国家标准课程', '科创数理特色'],
      features: ['自编《明珠数学》校本教材', '高强度逻辑思维训练', '每日精读与背诵规范'],
      schedule: '07:50 - 16:30'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['东昌南校', '洋泾菊园', '南模/华育理科特招班生源源泉'],
      directPassRatio: '地段划片对口'
    },
    reviews: {
      parentRating: 4.85,
      homeworkDuration: '75-90分钟，思维题量充沛',
      pros: ['教学水平被誉为“公办民办化”，数理能力全市绝对前列', '自编教材难度高，课内学透根本不需要外部补课'],
      cons: ['入户年限门槛极其苛刻，超额统筹风险常年高企', '学业压力大'],
      parentFeedbackSample: '明珠的孩子数学逻辑简直是降维打击！五年磨砺出来的学习习惯和自律，进入初中后爆发力惊人。'
    }
  },
  {
    id: 'pd-pinghe-school',
    name: '上海市民办平和学校 (小学部)',
    shortName: '平和双语',
    stage: 'primary',
    type: 'bilingual',
    district: '浦东新区',
    address: '浦东新区黄杨路261号',
    establishedYear: 1996,
    tier: '民办顶尖/头牌',
    badgeTag: '浦东双语天花板 · IB-PYP标杆 · 全人教育金字塔',
    tags: ['双语顶流', 'IB-PYP认证', '全人教育', '直升平和初中', '寄宿走读可选'],
    location: { lng: 121.5870, lat: 31.2380 },
    tuition: {
      amount: 46000,
      unit: '元/学期',
      isFree: false
    },
    enrollment: {
      scope: '本区摇号',
      requirements: ['浦东新区符合民办小学入学条件的适龄儿童', '超额电脑随机派位'],
      hasFiveYearRule: false,
      admissionDifficulty: '极高 (入户3年以上/低摇中率)',
      oversubscribedHistory: true
    },
    academic: {
      rigorLevel: '均衡高效 (兼顾学术与活动)',
      foreignTeacherRatio: '高配 (全天带班/全英文)',
      classSize: 26,
      curriculum: ['国家标准课程', 'IB-PYP探究', '双语浸润课程', '艺术/音乐/体育特色'],
      features: ['全套IB-PYP探究式主题教学', '中英双母语阅读深度融合', '击剑、管弦乐、戏剧必修选修'],
      schedule: '08:00 - 16:30'
    },
    downstream: {
      routeType: '公民双轨可选',
      targetSchools: ['上海市民办平和学校初中部 (直升通道畅通)', '世外/包玉刚'],
      directPassRatio: '极高直升率 (小学部绝大部分直升平和初中)'
    },
    reviews: {
      parentRating: 4.95,
      homeworkDuration: '45-60分钟，重探究项目展板与阅读',
      pros: ['全人教育做得最落地的顶尖双语学校', '既有体制内国家课程底色，又有IB探究精髓', '直升初中高中体系极其成熟'],
      cons: ['摇号难度极大，全市热门'],
      parentFeedbackSample: '在平和读书，孩子身上有一种非常从容自信的气质。探究式学习让孩子主动找资料写报告，能力锻炼太扎实了。'
    }
  },
  {
    id: 'pd-fushan-zhengda-primary',
    name: '上海福山正达外国语小学',
    shortName: '福山正达',
    stage: 'primary',
    type: 'private',
    district: '浦东新区',
    address: '浦东新区沈家弄路567号 (北校) / 历城路10号 (南校)',
    establishedYear: 2010,
    tier: '民办顶尖/头牌',
    badgeTag: '浦东民办头牌 · 外语学术双强 · 精英摇篮',
    tags: ['民办名校', '外语领先', '学术扎实', '福山系旗舰'],
    location: { lng: 121.5340, lat: 31.2360 },
    tuition: {
      amount: 41000,
      unit: '元/学期',
      isFree: false
    },
    enrollment: {
      scope: '本区摇号',
      requirements: ['浦东新区户籍或适龄儿童', '超额电脑随机摇号派位'],
      hasFiveYearRule: false,
      admissionDifficulty: '极高 (入户3年以上/低摇中率)',
      oversubscribedHistory: true
    },
    academic: {
      rigorLevel: '鸡血应试 (重分层/作业量扎实)',
      foreignTeacherRatio: '中配 (外教专职授课)',
      classSize: 30,
      curriculum: ['国家标准课程', '双语浸润课程', '科创数理特色'],
      features: ['自主研发英语分级进阶体系', '“乐学每一天”特色活动', '扎实体制内数理逻辑拓展'],
      schedule: '08:00 - 16:30'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['民办正达初中', '上实', '浦东重点公办初中'],
      directPassRatio: '正达初中直升优先'
    },
    reviews: {
      parentRating: 4.88,
      homeworkDuration: '60-75分钟',
      pros: ['英语教学实力浦东公认第一档，原版阅读与词汇量大', '综合学科均衡，抓基础严谨规范'],
      cons: ['摇号竞争激烈'],
      parentFeedbackSample: '福山正达的性价比在民办里极高，英语和数学都抓得很漂亮。'
    }
  },
  {
    id: 'pd-shangshi-primary',
    name: '上海市实验学校 (小学部)',
    shortName: '上实 (十年一贯制)',
    stage: 'primary',
    type: 'public',
    district: '浦东新区',
    address: '浦东新区东明路300号',
    establishedYear: 1987,
    tier: '公办一梯队',
    badgeTag: '神仙学校 · 弹性和提速制 · 全市自主特招',
    tags: ['神仙学校', '十年一贯制', '全市摇号/初筛特招', '免中考直升', '智力超常'],
    location: { lng: 121.5110, lat: 31.1730 },
    tuition: {
      amount: 0,
      unit: '免费/普惠',
      isFree: true
    },
    enrollment: {
      scope: '全市摇号',
      requirements: ['全市符合幼升小条件儿童均可网上报名', '机考/机选+电脑摇号弹性选拔', '不受户籍划片地段限制'],
      hasFiveYearRule: false,
      admissionDifficulty: '极高 (入户3年以上/低摇中率)',
      oversubscribedHistory: true,
      catchmentAreas: ['全上海市范围自主招生']
    },
    academic: {
      rigorLevel: '鸡血应试 (重分层/作业量扎实)',
      foreignTeacherRatio: '中配 (外教专职授课)',
      classSize: 28,
      curriculum: ['国家标准课程', '科创数理特色'],
      features: ['小学4年+初中3年+高中3年 (提前两年高考)', '自编高阶教材', '启发式超前认知训练'],
      schedule: '08:00 - 16:30'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['上海市实验学校初中部 (100%校内直升)', '免中考直升上实高中部'],
      directPassRatio: '100%校内十年一贯直升'
    },
    reviews: {
      parentRating: 5.0,
      homeworkDuration: '60分钟，极重思维拓展与自学自研',
      pros: ['全国唯一十年一贯制提速公办名校，节省整整2年青春', '免中考分流压力，一条龙直升顶尖高中'],
      cons: ['录取难度堪比中彩票 (万里挑一)'],
      parentFeedbackSample: '上实是上海教育界的奇迹，孩子如果能进上实，整个中小学阶段都省去了中考内耗。'
    }
  },

  // ==================== 静安区 ====================
  {
    id: 'ja-nanxi-kindergarten',
    name: '上海市静安区南西幼儿园',
    shortName: '南西幼儿园',
    stage: 'kindergarten',
    type: 'public',
    district: '静安区',
    address: '静安区延平路103弄9号',
    establishedYear: 1956,
    tier: '市示范园',
    badgeTag: '市示范顶级 · 游戏教育开山鼻祖 · 快乐童年',
    tags: ['市示范', '游戏教学', '全国知名', '快乐启蒙'],
    location: { lng: 121.4470, lat: 31.2350 },
    tuition: {
      amount: 700,
      unit: '元/月',
      isFree: false
    },
    enrollment: {
      scope: '本区户籍/房产',
      requirements: ['静安区常住户籍人户一致', '对口街道划片，入户满2年以上'],
      hukouYearsRequired: 2,
      hasFiveYearRule: true,
      admissionDifficulty: '极高 (入户3年以上/低摇中率)',
      oversubscribedHistory: true,
      catchmentAreas: ['江宁路街道对口居委', '静安寺街道部分居委']
    },
    academic: {
      rigorLevel: '快乐素质 (重个性潜能/轻负担)',
      foreignTeacherRatio: '中配 (外教专职授课)',
      classSize: 25,
      curriculum: ['国家标准课程', '艺术/音乐/体育特色'],
      features: ['全国首创“游戏化”园本课程', '沙水木工角色扮演区', '心理安全感与个性解放'],
      schedule: '08:15 - 16:00'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['对口静教院附校、一师附小、一中心等公办名校'],
      directPassRatio: '地段对应自主升学'
    },
    reviews: {
      parentRating: 4.9,
      homeworkDuration: '无任何书面作业',
      pros: ['全国幼教一面旗帜，真正让孩子在玩耍中开发大脑', '老师非常尊重孩子个性'],
      cons: ['完全不提前学学科知识'],
      parentFeedbackSample: '在南西的三年前所未有的快乐！孩子性格阳光、自信、善于社交解决问题。'
    }
  },
  {
    id: 'ja-jingjiaoyuan-school',
    name: '上海市静安区教育学院附属学校 (静教院附校)',
    shortName: '静教院附校',
    stage: 'primary',
    type: 'public',
    district: '静安区',
    address: '静安区江宁路688号 / 海防路',
    establishedYear: 1998,
    tier: '公办一梯队',
    badgeTag: '上海公办第一神校 · 轻负担高质量 · 九年一贯',
    tags: ['公办顶尖', '九年一贯制', '轻负担高质量', '中考王牌'],
    location: { lng: 121.4535, lat: 31.2410 },
    tuition: {
      amount: 0,
      unit: '免费/普惠',
      isFree: true
    },
    enrollment: {
      scope: '对口居委划片',
      requirements: ['静安区人户一致且必须入户满3-4年以上', '五年一户严格执行', '房产必须为适龄儿童父母或本人独立所有'],
      hukouYearsRequired: 3.5,
      hasFiveYearRule: true,
      admissionDifficulty: '极高 (入户3年以上/低摇中率)',
      oversubscribedHistory: true,
      catchmentAreas: ['海防村居委', '蒋家巷居委部分地块']
    },
    academic: {
      rigorLevel: '均衡高效 (兼顾学术与活动)',
      foreignTeacherRatio: '基础 (每周外教口语课)',
      classSize: 36,
      curriculum: ['国家标准课程', '科创数理特色'],
      features: ['张人利首创“后茶馆式教学”', '“课内学透、减负增效”', '小学直升初中无缝衔接'],
      schedule: '08:00 - 16:30'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['静教院附校初中部 (100%校内直升)'],
      directPassRatio: '100%九年一贯直升'
    },
    reviews: {
      parentRating: 5.0,
      homeworkDuration: '45-60分钟（全上海最轻作业量之一）',
      pros: ['全市公认“轻负担高质量”传奇神校，睡眠充足中考成绩却登峰造极', '九年一贯免去小升初一切烦恼'],
      cons: ['学区房单价极高，入户年限排队甚至需要3.5年以上'],
      parentFeedbackSample: '不用多说，上海公办教育的一面金字招牌。在这里读书是真正的高效学习。'
    }
  },
  {
    id: 'ja-yishifuxiao-primary',
    name: '上海市第一师范附属小学 (一师附小)',
    shortName: '一师附小',
    stage: 'primary',
    type: 'public',
    district: '静安区',
    address: '静安区万航渡路299号',
    establishedYear: 1945,
    tier: '公办一梯队',
    badgeTag: '老静安四大公办 · 愉快教育发源地 · 综合底蕴深',
    tags: ['公办一梯队', '愉快教育', '老牌名校', '艺术体育俱佳'],
    location: { lng: 121.4410, lat: 31.2295 },
    tuition: {
      amount: 0,
      unit: '免费/普惠',
      isFree: true
    },
    enrollment: {
      scope: '对口居委划片',
      requirements: ['人户一致，儿童与父母产证户口一致', '五年一户，入户满2.5年以上稳妥'],
      hukouYearsRequired: 2.5,
      hasFiveYearRule: true,
      admissionDifficulty: '极高 (入户3年以上/低摇中率)',
      oversubscribedHistory: true,
      catchmentAreas: ['三和居委', '四和居委', '百乐居委部分']
    },
    academic: {
      rigorLevel: '均衡高效 (兼顾学术与活动)',
      foreignTeacherRatio: '基础 (每周外教口语课)',
      classSize: 36,
      curriculum: ['国家标准课程', '艺术/音乐/体育特色'],
      features: ['全国知名“愉快教育”', '情感与认知协调发展', '名师云集教学严谨扎实'],
      schedule: '08:00 - 16:30'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['七一中学', '市西初级中学 (电脑派位对口)'],
      directPassRatio: '地段电脑派位'
    },
    reviews: {
      parentRating: 4.85,
      homeworkDuration: '50-60分钟',
      pros: ['老静安名声赫赫，师资队伍极为强大', '对口初中市西初中极优质'],
      cons: ['学区房老房子居多，停车难'],
      parentFeedbackSample: '老师水平普遍非常高，批改作业非常认真，给孩子的鼓励式教育让孩子很有求知欲。'
    }
  },

  // ==================== 黄浦区 ====================
  {
    id: 'hp-zhongfuhui-kindergarten',
    name: '中国福利会幼儿园',
    shortName: '中福会幼儿园',
    stage: 'kindergarten',
    type: 'public',
    district: '黄浦区',
    address: '黄浦区五里桥路321号 / 浦东周康路园区',
    establishedYear: 1953,
    tier: '市示范园',
    badgeTag: '宋庆龄亲创 · 国家级示范 · 中国幼教最高峰',
    tags: ['国家示范', '宋庆龄创办', '关爱与全人', '名额极稀缺'],
    location: { lng: 121.4870, lat: 31.2050 },
    tuition: {
      amount: 700,
      unit: '元/月',
      isFree: false
    },
    enrollment: {
      scope: '本区摇号',
      requirements: ['符合条件的常住适龄儿童', '黄浦区电脑摇号与部分体制内招录机制'],
      hasFiveYearRule: false,
      admissionDifficulty: '极高 (入户3年以上/低摇中率)',
      oversubscribedHistory: true
    },
    academic: {
      rigorLevel: '快乐素质 (重个性潜能/轻负担)',
      foreignTeacherRatio: '中配 (外教专职授课)',
      classSize: 25,
      curriculum: ['国家标准课程', '艺术/音乐/体育特色', '双语浸润课程'],
      features: ['“把最宝贵的东西给予儿童”', '早期生活自理与关爱他人', '超大规模户外探究设施'],
      schedule: '08:15 - 16:15'
    },
    downstream: {
      routeType: '公民双轨可选',
      targetSchools: ['对口黄浦一梯队 (蓬莱路二小、卢湾一中心、上实小)', '民办知名小学'],
      directPassRatio: '自主升学'
    },
    reviews: {
      parentRating: 5.0,
      homeworkDuration: '无作业，重习惯养成与博爱品格',
      pros: ['中国幼教天花板，教育理念超前且充满博爱温度', '师生比极高', '营养餐与医疗保障无微不至'],
      cons: ['摇中几率堪比彩票，名额极度稀缺'],
      parentFeedbackSample: '能摇进中福会是孩子最大的幸运！三年里孩子受到的尊重、爱护和视野启蒙无与伦比。'
    }
  },
  {
    id: 'hp-penglai-primary',
    name: '上海市黄浦区蓬莱路第二小学 (蓬莱路二小)',
    shortName: '蓬莱路二小',
    stage: 'primary',
    type: 'public',
    district: '黄浦区',
    address: '黄浦区蓬莱路225号',
    establishedYear: 1906,
    tier: '公办一梯队',
    badgeTag: '黄浦公办一梯队 · 蓬莱小镇微社会课程 · 创新先锋',
    tags: ['公办一梯队', '百年名校', '创新微社会', '黄浦首选'],
    location: { lng: 121.4920, lat: 31.2180 },
    tuition: {
      amount: 0,
      unit: '免费/普惠',
      isFree: true
    },
    enrollment: {
      scope: '对口居委划片',
      requirements: ['人户一致，儿童与父母同户', '严格五年一户，入户年限通常要求2年以上'],
      hukouYearsRequired: 2.5,
      hasFiveYearRule: true,
      admissionDifficulty: '极高 (入户3年以上/低摇中率)',
      oversubscribedHistory: true,
      catchmentAreas: ['蓬莱居委', '文庙居委部分地块']
    },
    academic: {
      rigorLevel: '均衡高效 (兼顾学术与活动)',
      foreignTeacherRatio: '基础 (每周外教口语课)',
      classSize: 35,
      curriculum: ['国家标准课程', '科创数理特色', '艺术/音乐/体育特色'],
      features: ['特色微型社会课程“蓬莱小镇”', '体验真实社会职业与金融理财', '语文经典诵读与扎实数理'],
      schedule: '08:00 - 16:30'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['上海市市南中学', '敬业初级中学 (户籍对口/派位)'],
      directPassRatio: '地段划片直升'
    },
    reviews: {
      parentRating: 4.88,
      homeworkDuration: '50-65分钟',
      pros: ['“蓬莱小镇”课程全上海独一无二，综合实践能力极强', '老牌百年底蕴，师德好学风正'],
      cons: ['对口初中市南相对普通'],
      parentFeedbackSample: '蓬莱小镇课程真的太惊艳了！孩子不仅学会了存钱、开店、做项目，学科成绩也一直名列前茅。'
    }
  },
  {
    id: 'hp-luwan-first-primary',
    name: '上海市黄浦区卢湾第一中心小学',
    shortName: '卢湾一中心',
    stage: 'primary',
    type: 'public',
    district: '黄浦区',
    address: '黄浦区淡水路437号',
    establishedYear: 1932,
    tier: '公办一梯队',
    badgeTag: '公办一梯队 · 情感教育基地 · 智慧云课堂标杆',
    tags: ['公办一梯队', '数字化智慧校园', '情感教育', '吴蓉瑾校长时代楷模'],
    location: { lng: 121.4740, lat: 31.2170 },
    tuition: {
      amount: 0,
      unit: '免费/普惠',
      isFree: true
    },
    enrollment: {
      scope: '对口居委划片',
      requirements: ['人户一致，儿童与父母同户且房产一致', '五年一户审查，入户满2年以上'],
      hukouYearsRequired: 2,
      hasFiveYearRule: true,
      admissionDifficulty: '极高 (入户3年以上/低摇中率)',
      oversubscribedHistory: true,
      catchmentAreas: ['淮海中路地段居委', '淡水路周边划片']
    },
    academic: {
      rigorLevel: '均衡高效 (兼顾学术与活动)',
      foreignTeacherRatio: '基础 (每周外教口语课)',
      classSize: 35,
      curriculum: ['国家标准课程', '科创数理特色'],
      features: ['“云手表”数字化课堂与学情精准诊断', '“中国人，中国心”情感德育', '个性化作业与辅导分层'],
      schedule: '08:00 - 16:30'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['卢湾初级中学 (黄浦公办头部初中)', '向明初级中学'],
      directPassRatio: '地段划片对口直升'
    },
    reviews: {
      parentRating: 4.9,
      homeworkDuration: '45-60分钟（AI精准分层减负）',
      pros: ['全国时代楷模吴蓉瑾校长领衔，师资敬业度极高', '数字化教育全国标杆', '对口卢湾初中是公办黄金通道'],
      cons: ['市中心老校区空间略显紧致'],
      parentFeedbackSample: '卢湾一中心的老师是真正懂孩子、爱孩子的。孩子在这里五年不仅功课优异，情商也特别棒！'
    }
  },

  // ==================== 闵行区 ====================
  {
    id: 'mh-xinghewan-school',
    name: '上海星河湾双语学校 (小学部)',
    shortName: '星河湾双语',
    stage: 'primary',
    type: 'bilingual',
    district: '闵行区',
    address: '闵行区金辉路1399号',
    establishedYear: 2012,
    tier: '民办顶尖/头牌',
    badgeTag: '禾佳教育集团旗舰 · 美本申请巨无霸 · 鸡血双语之王',
    tags: ['双语鸡血天花板', '唐盛昌创办', '十二年一贯制', '学术高压高效', '藤校收割机'],
    location: { lng: 121.2820, lat: 31.2050 },
    tuition: {
      amount: 52500,
      unit: '元/学期',
      isFree: false
    },
    enrollment: {
      scope: '本区摇号',
      requirements: ['闵行区符合民办小学入学条件的适龄儿童', '超额电脑随机派位'],
      hasFiveYearRule: false,
      admissionDifficulty: '极高 (入户3年以上/低摇中率)',
      oversubscribedHistory: true
    },
    academic: {
      rigorLevel: '鸡血应试 (重分层/作业量扎实)',
      foreignTeacherRatio: '高配 (全天带班/全英文)',
      classSize: 26,
      curriculum: ['国家标准课程', '双语浸润课程', '科创数理特色'],
      features: ['“上中底色+国际课程”', '小学英语全英文分层精读', '硬核数理逻辑训练'],
      schedule: '08:00 - 16:30'
    },
    downstream: {
      routeType: '体制外出国留学',
      targetSchools: ['星河湾双语初中/高中部 (校内直升通道顺畅)'],
      directPassRatio: '极高直升率 (小学升初中绝大多数直升)'
    },
    reviews: {
      parentRating: 4.9,
      homeworkDuration: '70-90分钟，全英文学科挑战大',
      pros: ['体制外路线中最硬核最严谨的学校', '英语水平飞速提升，数理完全不放松', '十二年一贯直升'],
      cons: ['学业压力巨大，被戏称为“体制外的小上中”'],
      parentFeedbackSample: '如果你走体制外出国路线，但又担心国际学校学术太水数理不行，星河湾是全上海毫无疑问的最佳选择！'
    }
  },
  {
    id: 'mh-qibaowaixiao-primary',
    name: '上海市七宝外国语小学',
    shortName: '七宝外国语',
    stage: 'primary',
    type: 'private',
    district: '闵行区',
    address: '闵行区新镇路79号',
    establishedYear: 1999,
    tier: '民办顶尖/头牌',
    badgeTag: '闵行应试天花板 · 鸡血界神话 · 七宝中学嫡系基底',
    tags: ['民办名校', '体制内应试第一档', '外语过硬', '数理拔尖'],
    location: { lng: 121.3480, lat: 31.1520 },
    tuition: {
      amount: 38000,
      unit: '元/学期',
      isFree: false
    },
    enrollment: {
      scope: '本区摇号',
      requirements: ['闵行区户籍或居住证积分达标适龄儿童', '超额电脑随机派位'],
      hasFiveYearRule: false,
      admissionDifficulty: '极高 (入户3年以上/低摇中率)',
      oversubscribedHistory: true
    },
    academic: {
      rigorLevel: '鸡血应试 (重分层/作业量扎实)',
      foreignTeacherRatio: '中配 (外教专职授课)',
      classSize: 32,
      curriculum: ['国家标准课程', '双语浸润课程', '科创数理特色'],
      features: ['七宝外国语专属进阶英语手册', '高频默写纠错与思维训练', '军训式行为规范培养'],
      schedule: '07:45 - 16:30'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['上宝中学 (历届头部中考之神)', '文来中学', '七宝中学体系'],
      directPassRatio: '考入上宝/文来比例高'
    },
    reviews: {
      parentRating: 4.82,
      homeworkDuration: '70-90分钟，抓得极紧',
      pros: ['体制内基本功天下无敌，考入上宝中学的核心主力军', '英语词汇量和听说读写极为扎实'],
      cons: ['应试氛围浓厚，作息紧凑'],
      parentFeedbackSample: '七宝外小的孩子出来，规矩极其端正，抗压能力和解题效率超强。'
    }
  },
  {
    id: 'mh-shiyan-primary',
    name: '上海市闵行区实验小学 (春申/景城校区)',
    shortName: '闵行实验小学',
    stage: 'primary',
    type: 'public',
    district: '闵行区',
    address: '闵行区伟业路228号(春申校区) / 集心路(景城校区)',
    establishedYear: 1905,
    tier: '公办一梯队',
    badgeTag: '闵行公办巨无霸 · 一梯队翘楚 · 百年底蕴',
    tags: ['公办一梯队', '四大校区', '师资雄厚', '对口莘松/莘光'],
    location: { lng: 121.3960, lat: 31.1090 },
    tuition: {
      amount: 0,
      unit: '免费/普惠',
      isFree: true
    },
    enrollment: {
      scope: '对口居委划片',
      requirements: ['人户一致，产证与户籍一致', '执行五年一户，春申/景城热门校区需入户满2年以上'],
      hukouYearsRequired: 2,
      hasFiveYearRule: true,
      admissionDifficulty: '较高 (人户一致稳妥/摇号适中)',
      oversubscribedHistory: true,
      catchmentAreas: ['春申景城各期对口居委', '江南苑居委等划片']
    },
    academic: {
      rigorLevel: '均衡高效 (兼顾学术与活动)',
      foreignTeacherRatio: '基础 (每周外教口语课)',
      classSize: 38,
      curriculum: ['国家标准课程', '科创数理特色'],
      features: ['启蒙阅读工程', '艺术与智能创客工坊', '集团化优质教研共享'],
      schedule: '08:00 - 16:30'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['莘松中学 (春申校区优质公办对口)', '莘光中学'],
      directPassRatio: '地段划片对口直升'
    },
    reviews: {
      parentRating: 4.8,
      homeworkDuration: '55-70分钟',
      pros: ['闵行公办教育绝对门面，教学规范管理成熟', '春申校区对口莘松中学打造闵行最强公办闭环'],
      cons: ['校区体量大，两极分化需要家长配合督促'],
      parentFeedbackSample: '在春申校区读，老师水平很稳定，活动丰富，对口莘松中学省去了很多小升初折腾。'
    }
  },

  // ==================== 长宁区 ====================
  {
    id: 'cn-songqingling-kindergarten',
    name: '上海宋庆龄幼儿园',
    shortName: '宋庆龄幼儿园',
    stage: 'kindergarten',
    type: 'bilingual',
    district: '长宁区',
    address: '长宁区虹梅路3908号 / 青浦赵巷园区',
    establishedYear: 1991,
    tier: '市示范园',
    badgeTag: '殿堂级名园 · 国际视野与中华文化 · 全球名流之选',
    tags: ['顶尖双语', '宋庆龄基金会', '全球视野', '殿堂级硬件'],
    location: { lng: 121.3880, lat: 31.2010 },
    tuition: {
      amount: 16000,
      unit: '元/月',
      isFree: false
    },
    enrollment: {
      scope: '本区摇号',
      requirements: ['适龄儿童自主申请或电脑随机摇号', '身心健康，家庭教育理念高度契合'],
      hasFiveYearRule: false,
      admissionDifficulty: '极高 (入户3年以上/低摇中率)',
      oversubscribedHistory: true
    },
    academic: {
      rigorLevel: '快乐素质 (重个性潜能/轻负担)',
      foreignTeacherRatio: '高配 (全天带班/全英文)',
      classSize: 20,
      curriculum: ['双语浸润课程', '艺术/音乐/体育特色', '瑞吉欧教学'],
      features: ['森林式自然大生态园区', '中英文全天双主班教师', '戏剧、马术与艺术启蒙'],
      schedule: '08:30 - 15:45'
    },
    downstream: {
      routeType: '公民双轨可选',
      targetSchools: ['上海宋庆龄学校小学部 (直升通道极佳)', '包玉刚', '平和', '优质公办'],
      directPassRatio: '宋庆龄学校直升率较高'
    },
    reviews: {
      parentRating: 4.98,
      homeworkDuration: '无作业，家庭生活记录与亲子探索',
      pros: ['全国乃至亚洲最顶级的幼儿园之一，环境设施如童话森林', '中英文母语式习得'],
      cons: ['摇号与入读门槛极高，学费成本昂贵'],
      parentFeedbackSample: '在宋幼的孩子每天眼里都有光。大草坪、极其温馨有爱的外教中教，是能记一辈子的童年记忆。'
    }
  },
  {
    id: 'cn-baoyugang-school',
    name: '上海市包玉刚实验学校 (小学部)',
    shortName: '包玉刚实验学校',
    stage: 'primary',
    type: 'international',
    district: '长宁区',
    address: '长宁区武定西路1251弄20号',
    establishedYear: 2007,
    tier: '民办顶尖/头牌',
    badgeTag: '全人教育巅峰 · 非营利百年基业 · 双语贵族底蕴',
    tags: ['民办顶尖', '非营利', '全人教育', '中英双母语', '常春藤摇篮'],
    location: { lng: 121.4280, lat: 31.2250 },
    tuition: {
      amount: 89000,
      unit: '元/学期',
      isFree: false
    },
    enrollment: {
      scope: '本区摇号',
      requirements: ['长宁区户籍或符合民办入学资格儿童', '超额电脑随机摇号派位'],
      hasFiveYearRule: false,
      admissionDifficulty: '极高 (入户3年以上/低摇中率)',
      oversubscribedHistory: true
    },
    academic: {
      rigorLevel: '快乐素质 (重个性潜能/轻负担)',
      foreignTeacherRatio: '高配 (全天带班/全英文)',
      classSize: 24,
      curriculum: ['国家标准课程', 'IB-PYP探究', '双语浸润课程', '艺术/音乐/体育特色'],
      features: ['上海二期课改结合国际小学课程(IPC)', '中英文合作双教师授课制', '品格塑造与全人发展'],
      schedule: '08:15 - 16:30'
    },
    downstream: {
      routeType: '体制外出国留学',
      targetSchools: ['包玉刚实验学校松江校区初中部/高中部 (校内直升直达)'],
      directPassRatio: '极高直升率 (绝大部分直升松江初中)'
    },
    reviews: {
      parentRating: 4.96,
      homeworkDuration: '45-60分钟，重阅读与跨学科Project',
      pros: ['中国双语教育的旗帜，非营利背景带来纯粹的教育情怀', '中英文文化浸润极其平衡', '直升松江寄宿校区'],
      cons: ['摇号竞争激烈，学费成本昂贵'],
      parentFeedbackSample: '包校最大的魅力在于对孩子品格与独立思考能力的塑造。每个孩子都是独一无二的闪光体。'
    }
  },
  {
    id: 'cn-jiangwuxiao-primary',
    name: '上海市长宁区江苏路第五小学 (江五小学)',
    shortName: '江五小学',
    stage: 'primary',
    type: 'public',
    district: '长宁区',
    address: '长宁区江苏路706号 / 华阳路 / 昭化东路',
    establishedYear: 1922,
    tier: '公办一梯队',
    badgeTag: '长宁公办第一梯队 · 百年名校 · 科技与艺术摇篮',
    tags: ['公办一梯队', '百年老校', '长宁首选', '多校划片派位'],
    location: { lng: 121.4310, lat: 31.2210 },
    tuition: {
      amount: 0,
      unit: '免费/普惠',
      isFree: true
    },
    enrollment: {
      scope: '对口居委划片',
      requirements: ['长宁区人户一致，房产证与户口完全对应', '严格执行五年一户，入户年限需2年以上'],
      hukouYearsRequired: 2,
      hasFiveYearRule: true,
      admissionDifficulty: '极高 (入户3年以上/低摇中率)',
      oversubscribedHistory: true,
      catchmentAreas: ['华阳街道部分居委', '江苏路对口街道地段']
    },
    academic: {
      rigorLevel: '均衡高效 (兼顾学术与活动)',
      foreignTeacherRatio: '基础 (每周外教口语课)',
      classSize: 35,
      curriculum: ['国家标准课程', '科创数理特色'],
      features: ['百年“五爱”育人传统', '机器人与创客社团', '管弦乐团全区拔尖'],
      schedule: '08:00 - 16:30'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['长宁区小升初电脑派位 (对口市三女初、延安初级中学、开元学校等)'],
      directPassRatio: '长宁区特色“多校划片分组电脑摇号派位”'
    },
    reviews: {
      parentRating: 4.82,
      homeworkDuration: '50-65分钟',
      pros: ['长宁区公办小学第一招牌，师资底蕴深厚', '活动极其丰富，素质教育扎实'],
      cons: ['长宁小升初实行全区电脑分组摇号，无法做到对口初中100%确定性'],
      parentFeedbackSample: '江五的老师敬业有耐心，百年老校在细节上非常到位。'
    }
  },

  // ==================== 杨浦区 ====================
  {
    id: 'yp-konger-primary',
    name: '上海市杨浦区控江二村小学',
    shortName: '控二小学',
    stage: 'primary',
    type: 'public',
    district: '杨浦区',
    address: '杨浦区双阳路388号',
    establishedYear: 1953,
    tier: '公办一梯队',
    badgeTag: '杨浦公办双雄之一 · 应试与创新兼优 · 升学王牌',
    tags: ['公办一梯队', '杨浦老牌强校', '数理拔尖'],
    location: { lng: 121.5360, lat: 31.2810 },
    tuition: {
      amount: 0,
      unit: '免费/普惠',
      isFree: true
    },
    enrollment: {
      scope: '对口居委划片',
      requirements: ['杨浦区人户一致，儿童父母户籍房产完全一致', '五年一户，入户年限需2年以上'],
      hukouYearsRequired: 2.5,
      hasFiveYearRule: true,
      admissionDifficulty: '极高 (入户3年以上/低摇中率)',
      oversubscribedHistory: true,
      catchmentAreas: ['控二居委', '双新居委', '黄兴居委部分']
    },
    academic: {
      rigorLevel: '鸡血应试 (重分层/作业量扎实)',
      foreignTeacherRatio: '基础 (每周外教口语课)',
      classSize: 38,
      curriculum: ['国家标准课程', '科创数理特色'],
      features: ['奥数逻辑与思维启蒙传统强', '“自主探索学习法”', '语文整本书阅读习惯'],
      schedule: '08:00 - 16:30'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['控江初级中学 (对口升学)', '存志学校', '兰生复旦自招主力'],
      directPassRatio: '地段划片对口控江初中'
    },
    reviews: {
      parentRating: 4.86,
      homeworkDuration: '60-80分钟',
      pros: ['杨浦公办体制内天花板，数理逻辑底子极其扎实', '老师非常抓平时作业和习惯', '对口控江初中也是杨浦优质初中'],
      cons: ['课业负担较重'],
      parentFeedbackSample: '杨浦工薪家庭最认可的学校之一，孩子的自律习惯和数理功底绝对过硬。'
    }
  },
  {
    id: 'yp-dayi-primary',
    name: '上海市杨浦区打虎山路第一小学 (打一小学)',
    shortName: '打一小学',
    stage: 'primary',
    type: 'public',
    district: '杨浦区',
    address: '杨浦区打虎山路138号',
    establishedYear: 1953,
    tier: '公办一梯队',
    badgeTag: '杨浦公办双雄之一 · 摇篮文化 · 创新实验典范',
    tags: ['公办一梯队', '摇篮文化', '全国先进', '特级教师荟萃'],
    location: { lng: 121.5090, lat: 31.2720 },
    tuition: {
      amount: 0,
      unit: '免费/普惠',
      isFree: true
    },
    enrollment: {
      scope: '对口居委划片',
      requirements: ['人户一致满2年以上', '五年一户严格审查'],
      hukouYearsRequired: 2.5,
      hasFiveYearRule: true,
      admissionDifficulty: '极高 (入户3年以上/低摇中率)',
      oversubscribedHistory: true,
      catchmentAreas: ['鞍山一村居委', '鞍山二村居委部分']
    },
    academic: {
      rigorLevel: '均衡高效 (兼顾学术与活动)',
      foreignTeacherRatio: '基础 (每周外教口语课)',
      classSize: 38,
      curriculum: ['国家标准课程', '艺术/音乐/体育特色', '科创数理特色'],
      features: ['卞松泉校长倡导“摇篮精神”', '百门特色自主选修课程', '少儿交响乐与民乐团'],
      schedule: '08:00 - 16:30'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['鞍山初级中学 (对口优质初中)', '兰生复旦', '存志学校'],
      directPassRatio: '地段划片对口直升'
    },
    reviews: {
      parentRating: 4.88,
      homeworkDuration: '55-70分钟',
      pros: ['全国知名模范小学，硬件和软件都很棒', '既抓素质又抓成绩', '对口鞍山初级中学很稳健'],
      cons: ['学区房挂牌年限要求严格'],
      parentFeedbackSample: '打一的师资力量强，特级教师多，教研抓得深。孩子各科成绩优秀。'
    }
  },

  // ==================== 虹口区 ====================
  {
    id: 'hk-disizhongxin-primary',
    name: '上海市虹口区第四中心小学 (虹口四中心)',
    shortName: '虹口四中心',
    stage: 'primary',
    type: 'public',
    district: '虹口区',
    address: '虹口区东体育会路667号',
    establishedYear: 1988,
    tier: '公办一梯队',
    badgeTag: '虹口公办第一牌子 · 扎实稳重 · 名校输送机',
    tags: ['公办一梯队', '虹口标杆', '数学奥数强', '新华初对口'],
    location: { lng: 121.4880, lat: 31.2790 },
    tuition: {
      amount: 0,
      unit: '免费/普惠',
      isFree: true
    },
    enrollment: {
      scope: '对口居委划片',
      requirements: ['虹口区人户一致，父母产权', '五年一户，入户建议满2年以上'],
      hukouYearsRequired: 2,
      hasFiveYearRule: true,
      admissionDifficulty: '较高 (人户一致稳妥/摇号适中)',
      oversubscribedHistory: true,
      catchmentAreas: ['赤峰居委', '东体居委部分地块']
    },
    academic: {
      rigorLevel: '鸡血应试 (重分层/作业量扎实)',
      foreignTeacherRatio: '基础 (每周外教口语课)',
      classSize: 36,
      curriculum: ['国家标准课程', '科创数理特色'],
      features: ['数学思维分层辅导', '书写规范与严谨解题习惯', '少儿足球传统特色'],
      schedule: '08:00 - 16:30'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['鲁迅初级中学 / 虹口优质公办初中', '新华初级中学 (自招录取大户)'],
      directPassRatio: '地段划片'
    },
    reviews: {
      parentRating: 4.8,
      homeworkDuration: '60-75分钟',
      pros: ['虹口公办体制内的定海神针，学风极正', '数学基本功特别强'],
      cons: ['相对偏体制内应试风格'],
      parentFeedbackSample: '在虹口读公办，四中心是最好的选择之一。学风纯朴扎实。'
    }
  },
  {
    id: 'hk-liying-primary',
    name: '上海市民办丽英小学',
    shortName: '丽英小学',
    stage: 'primary',
    type: 'private',
    district: '虹口区',
    address: '虹口区广灵一路86号',
    establishedYear: 1998,
    tier: '民办优质/特色',
    badgeTag: '虹口民办头牌 · 艺术与学术齐飞 · 精品民校',
    tags: ['民办优质', '管弦乐特色', '数学培优', '虹口口碑'],
    location: { lng: 121.4790, lat: 31.2780 },
    tuition: {
      amount: 35000,
      unit: '元/学期',
      isFree: false
    },
    enrollment: {
      scope: '本区摇号',
      requirements: ['虹口区户籍或适龄儿童', '超额电脑随机派位'],
      hasFiveYearRule: false,
      admissionDifficulty: '较高 (人户一致稳妥/摇号适中)',
      oversubscribedHistory: true
    },
    academic: {
      rigorLevel: '鸡血应试 (重分层/作业量扎实)',
      foreignTeacherRatio: '中配 (外教专职授课)',
      classSize: 30,
      curriculum: ['国家标准课程', '艺术/音乐/体育特色', '双语浸润课程'],
      features: ['全员管弦乐团熏陶', '数理思维培优辅导', '小班化精致管理'],
      schedule: '08:00 - 16:30'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['新华初级中学', '民办新复兴初级中学', '上外附中直招'],
      directPassRatio: '考入新华初/新复兴比例高'
    },
    reviews: {
      parentRating: 4.85,
      homeworkDuration: '60-75分钟',
      pros: ['管弦乐团全国拔尖，每个孩子都有艺术一技之长', '学科成绩在虹口区名列前茅'],
      cons: ['摇号有一定不确定性'],
      parentFeedbackSample: '丽英把艺术美育和语数外抓得同样好，班级精致管理。'
    }
  },

  // ==================== 青浦区 ====================
  {
    id: 'qp-pinghe-school',
    name: '上海青浦平和双语学校 (小学部)',
    shortName: '青浦平和',
    stage: 'primary',
    type: 'bilingual',
    district: '青浦区',
    address: '青浦区朱家角路1588号',
    establishedYear: 2018,
    tier: '民办顶尖/头牌',
    badgeTag: '平和嫡系巨作 · 建筑美学殿堂 · 寄宿全人典范',
    tags: ['平和直属', '寄宿制', 'IB理念', '超美校园', '全市摇号'],
    location: { lng: 121.0950, lat: 31.1450 },
    tuition: {
      amount: 50000,
      unit: '元/学期',
      isFree: false
    },
    enrollment: {
      scope: '全市摇号',
      requirements: ['符合上海市民办学校报名条件的适龄儿童（全市各区均可报名）', '超额电脑派位'],
      hasFiveYearRule: false,
      admissionDifficulty: '较高 (人户一致稳妥/摇号适中)',
      oversubscribedHistory: true
    },
    academic: {
      rigorLevel: '均衡高效 (兼顾学术与活动)',
      foreignTeacherRatio: '高配 (全天带班/全英文)',
      classSize: 25,
      curriculum: ['国家标准课程', 'IB-PYP探究', '双语浸润课程', '艺术/音乐/体育特色'],
      features: ['由李虎Open建筑事务所设计的大师级校园', '自然生态湖泊探究', '全寄宿全人关怀体系'],
      schedule: '寄宿制 (周五下午统一校车返家)'
    },
    downstream: {
      routeType: '公民双轨可选',
      targetSchools: ['青浦平和初中部/高中部 (100%直升通道畅通)', '平和浦东本部联动'],
      directPassRatio: '直升率极高 (绝大部分校内直升)'
    },
    reviews: {
      parentRating: 4.92,
      homeworkDuration: '校内晚自习由导师辅导完成，周末几乎无书面负担',
      pros: ['校园美得像一件当代艺术品，空间极大孩子身心舒展', '寄宿生活极大培养孩子自理能力'],
      cons: ['离市中心较远'],
      parentFeedbackSample: '青浦平和的硬件和教育环境无可挑剔。孩子住校一周回来变得超级懂事礼貌。'
    }
  },

  // ==================== 普陀区 ====================
  {
    id: 'pt-huashi-fuxiao',
    name: '华东师范大学附属小学 (华师大附小)',
    shortName: '华师大附小',
    stage: 'primary',
    type: 'public',
    district: '普陀区',
    address: '普陀区中山北路3671弄153号',
    establishedYear: 1952,
    tier: '公办一梯队',
    badgeTag: '普陀公办第一名片 · 华师大大学资源依托 · 素质数理先锋',
    tags: ['公办一梯队', '师大依托', '素质教育', '苏河名校'],
    location: { lng: 121.4110, lat: 31.2330 },
    tuition: {
      amount: 0,
      unit: '免费/普惠',
      isFree: true,
      note: '上海公办九年义务教育免收学费'
    },
    enrollment: {
      scope: '对口居委划片',
      requirements: ['普陀区人户一致优先', '适龄儿童与父母户口及房产一致', '五年一户核验'],
      hukouYearsRequired: 2.5,
      hasFiveYearRule: true,
      admissionDifficulty: '较高 (人户一致稳妥/摇号适中)',
      oversubscribedHistory: true,
      catchmentAreas: ['华东师大一村、二村、三村部分居委', '清水湾部分地段']
    },
    academic: {
      rigorLevel: '均衡高效 (兼顾学术与活动)',
      foreignTeacherRatio: '基础 (每周外教口语课)',
      classSize: 38,
      curriculum: ['国家标准课程', '科创数理特色', '艺术/音乐/体育特色'],
      features: ['华东师范大学专家教研深度共建', '数学探究与儿童哲学思维', '生态研学与戏剧社团'],
      schedule: '08:00 入校 - 16:30 离校 (含课后延时)'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['华东师大四附中 / 华师大二附中普陀校区', '梅陇中学'],
      directPassRatio: '地段对口升学'
    },
    reviews: {
      parentRating: 4.88,
      homeworkDuration: '约 1 - 1.5 小时，分层作业较合理',
      pros: ['师大背景教研水平极高，教师年轻有活力且理念先进', '学风好，生源家庭多为师大教工及高校知识分子', '课外拓展极其丰富'],
      cons: ['划片生源年年饱和，建议尽早落户'],
      parentFeedbackSample: '非常满意学校的办学理念，老师对孩子鼓励式教育，既抓基础又很尊重个性，普陀家长心中的白月光。'
    }
  },
  {
    id: 'pt-zhongyuan-shiyan',
    name: '上海市中远实验学校 (小学部)',
    shortName: '中远实验学校',
    stage: 'primary',
    type: 'public',
    district: '普陀区',
    address: '普陀区中潭路99弄118号',
    establishedYear: 2002,
    tier: '公办二梯队',
    badgeTag: '九年一贯制 · 两湾城核心公办 · 升学直升无缝衔接',
    tags: ['公办优质', '九年一贯制', '两湾城对口', '苏河明珠'],
    location: { lng: 121.4395, lat: 31.2520 },
    tuition: {
      amount: 0,
      unit: '免费/普惠',
      isFree: true,
      note: '上海公办九年义务教育免学费'
    },
    enrollment: {
      scope: '对口居委划片',
      requirements: ['中远两湾城常住户籍人户一致', '房产产权人与户主一致', '执行五年一户'],
      hukouYearsRequired: 2,
      hasFiveYearRule: true,
      admissionDifficulty: '较易',
      oversubscribedHistory: true,
      catchmentAreas: ['中远两湾城第一、第二、第三、第四居委会全号段']
    },
    academic: {
      rigorLevel: '均衡高效 (兼顾学术与活动)',
      foreignTeacherRatio: '基础 (每周外教口语课)',
      classSize: 36,
      curriculum: ['国家标准课程', '双语浸润课程', '艺术/音乐/体育特色'],
      features: ['九年一贯课程一体化贯通', '苏河文化创意探究', '足球与科技特色校'],
      schedule: '08:00 入校 - 16:30 离校'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['中远实验学校初中部 (九年一贯直接升入)'],
      directPassRatio: '100% 直升校内初中部'
    },
    reviews: {
      parentRating: 4.75,
      homeworkDuration: '约 1 小时左右',
      pros: ['就在中远两湾城小区内部，出家门走5分钟进校门，完全免除长途接送之苦', '九年一贯制不用经历小升初折腾', '近年来中考市重点自招成绩稳步上升'],
      cons: ['大社区生源规模较大'],
      parentFeedbackSample: '两湾城住户专属神校，小学直接连读到初三，九年一贯制省心省力，接送就在小区内部安全无比。'
    }
  },
  {
    id: 'pt-jiangning-school',
    name: '上海市普陀区江宁学校 (小学部)',
    shortName: '江宁学校',
    stage: 'primary',
    type: 'public',
    district: '普陀区',
    address: '普陀区西康路1518弄1号',
    establishedYear: 1933,
    tier: '公办一梯队',
    badgeTag: '普陀老牌公办强校 · 九年一贯名校 · 教学严谨抓得实',
    tags: ['公办一梯队', '百年老校', '教学严谨', '静安普陀交界'],
    location: { lng: 121.4420, lat: 31.2480 },
    tuition: {
      amount: 0,
      unit: '免费/普惠',
      isFree: true,
      note: '上海公办九年义务教育免学费'
    },
    enrollment: {
      scope: '对口居委划片',
      requirements: ['人户一致优先', '五年一户严格核验'],
      hukouYearsRequired: 2,
      hasFiveYearRule: true,
      admissionDifficulty: '较高 (人户一致稳妥/摇号适中)',
      oversubscribedHistory: true,
      catchmentAreas: ['长寿路街道部分居委', '新湖明珠城部分地段']
    },
    academic: {
      rigorLevel: '鸡血应试 (重分层/作业量扎实)',
      foreignTeacherRatio: '基础 (每周外教口语课)',
      classSize: 36,
      curriculum: ['国家标准课程', '科创数理特色'],
      features: ['小初衔接思维强化', '乒乓与机器人市级特色', '教风严谨踏实'],
      schedule: '08:00 入校 - 16:30 离校'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['江宁学校初中部', '曹杨二中等市实验性示范高中自招通道'],
      directPassRatio: '九年一贯对口'
    },
    reviews: {
      parentRating: 4.82,
      homeworkDuration: '约 1 - 1.5 小时',
      pros: ['老牌九年一贯底蕴深厚，管理规范严谨', '初中部中考成绩在普陀公办名列前茅'],
      cons: ['校区处于成熟老城区，周边上下学略拥堵'],
      parentFeedbackSample: '老师抓学习非常认真尽职，作业批改细致，小初衔接平稳，是普陀公办非常放心的选择。'
    }
  },
  {
    id: 'pt-shiyan-kindergarten',
    name: '上海市普陀区实验幼儿园',
    shortName: '普陀实验幼',
    stage: 'kindergarten',
    type: 'public',
    district: '普陀区',
    address: '普陀区杏山路317号',
    establishedYear: 1989,
    tier: '市示范园',
    badgeTag: '市示范园 · 普陀学前金字招牌 · 游戏化全人启蒙',
    tags: ['市示范园', '公办精品', '游戏化探究', '学前标杆'],
    location: { lng: 121.3990, lat: 31.2430 },
    tuition: {
      amount: 700,
      unit: '元/月',
      isFree: false,
      note: '上海市示范性公办幼儿园标准保育费'
    },
    enrollment: {
      scope: '本区户籍/房产',
      requirements: ['普陀区人户一致且入户满2年以上优先', '执行五年一户'],
      hukouYearsRequired: 2,
      hasFiveYearRule: true,
      admissionDifficulty: '较高 (人户一致稳妥/摇号适中)',
      oversubscribedHistory: true,
      catchmentAreas: ['曹杨新村部分居委', '真如街道部分居委']
    },
    academic: {
      rigorLevel: '快乐素质 (重个性潜能/轻负担)',
      foreignTeacherRatio: '基础 (每周外教口语课)',
      classSize: 26,
      curriculum: ['国家标准课程', '艺术/音乐/体育特色'],
      features: ['环境创设名园', '户外自主生态探究', '幼儿早期思维习惯培育'],
      schedule: '08:15 入园 - 16:15 离园'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['朝春中心小学', '华师大附小', '民办金洲小学'],
      directPassRatio: '地段划片'
    },
    reviews: {
      parentRating: 4.89,
      homeworkDuration: '无书面作业，以亲子手工和生活习惯为主',
      pros: ['市示范硬件非常棒，老师温柔极其有爱', '户外运动场地极大，孩子体能和性格培养非常好'],
      cons: ['入户要求高'],
      parentFeedbackSample: '孩子在普陀实验幼每天超级开心，老师每天都会跟家长沟通孩子情绪，三年幼儿园读得很幸福。'
    }
  },

  // ==================== 闵行区补充 ====================
  {
    id: 'mh-mingqiang-primary',
    name: '上海市七宝镇明强小学 (东校区 / 西校区)',
    shortName: '七宝明强小学',
    stage: 'primary',
    type: 'public',
    district: '闵行区',
    address: '闵行区七宝镇新镇路1050号 (东校区) / 航中路355号 (西校区)',
    establishedYear: 1905,
    tier: '公办一梯队',
    badgeTag: '闵行公办百年头牌 · 百年明强桃李天下 · 数理语文双绝',
    tags: ['公办一梯队', '百年名校', '七宝核心', '闵行头牌'],
    location: { lng: 121.3480, lat: 31.1520 },
    tuition: {
      amount: 0,
      unit: '免费/普惠',
      isFree: true,
      note: '上海公办九年义务教育免学费'
    },
    enrollment: {
      scope: '对口居委划片',
      requirements: ['闵行区七宝镇人户一致满2年以上', '房产产权人一致', '严格五年一户'],
      hukouYearsRequired: 2.5,
      hasFiveYearRule: true,
      admissionDifficulty: '极高 (入户3年以上/低摇中率)',
      oversubscribedHistory: true,
      catchmentAreas: ['万科城市花园', '宝仪花苑', '茂盛花园', '莱茵风尚等居委']
    },
    academic: {
      rigorLevel: '鸡血应试 (重分层/作业量扎实)',
      foreignTeacherRatio: '基础 (每周外教口语课)',
      classSize: 40,
      curriculum: ['国家标准课程', '科创数理特色', '艺术/音乐/体育特色'],
      features: ['百年文化书香沉淀', '科技创新探究市级优秀校', '数学思维与读写素养扎实'],
      schedule: '08:00 入校 - 16:30 离校'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['七宝二中 / 七宝三中 / 文来初中 (摇号)'],
      directPassRatio: '地段划片'
    },
    reviews: {
      parentRating: 4.88,
      homeworkDuration: '约 1 - 1.5 小时',
      pros: ['老牌名校学风极其端正，学生数理基础极为扎实', '教师敬业负责，家长圈子重视教育氛围浓厚'],
      cons: ['班额较大，入户年限卡得很死'],
      parentFeedbackSample: '明强小学在闵行就是公办顶梁柱，生源好家长上心，孩子基础打得非常牢，初中后劲很大。'
    }
  },
  {
    id: 'mh-shiyan-kangcheng',
    name: '闵行区实验小学 (康城校区)',
    shortName: '闵行实验(康城)',
    stage: 'primary',
    type: 'public',
    district: '闵行区',
    address: '闵行区莘松路958弄上海康城内',
    establishedYear: 2004,
    tier: '公办一梯队',
    badgeTag: '闵行实验教育集团 · 上海康城对口名校 · 超大社区教育名片',
    tags: ['公办一梯队', '闵行实验校区', '上海康城对口', '集团化办学'],
    location: { lng: 121.3530, lat: 31.1180 },
    tuition: {
      amount: 0,
      unit: '免费/普惠',
      isFree: true,
      note: '上海公办九年义务教育免收学费'
    },
    enrollment: {
      scope: '对口居委划片',
      requirements: ['上海康城人户一致优先', '五年一户严格核查'],
      hukouYearsRequired: 1.5,
      hasFiveYearRule: true,
      admissionDifficulty: '中等',
      oversubscribedHistory: true,
      catchmentAreas: ['上海康城第一、第二、第三、第四居委会']
    },
    academic: {
      rigorLevel: '均衡高效 (兼顾学术与活动)',
      foreignTeacherRatio: '基础 (每周外教口语课)',
      classSize: 38,
      curriculum: ['国家标准课程', '双语浸润课程', '艺术/音乐/体育特色'],
      features: ['闵行实验一体化教研与管理输出', '儿童哲学思维与绘本素养', '羽毛球与弦乐特色'],
      schedule: '08:00 入校 - 16:30 离校'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['莘松中学 (康城校区)'],
      directPassRatio: '对口直接升入'
    },
    reviews: {
      parentRating: 4.82,
      homeworkDuration: '约 1 小时',
      pros: ['就在上海康城超大社区内部，孩子步行上学极为安全', '共享闵行实验小学本部顶级教研与师资储备'],
      cons: ['康城体量大生源多'],
      parentFeedbackSample: '闵实小康城校区完全承袭了本部的办学质量，师资非常好，康城业主在家门口就能享有一梯队公办。'
    }
  }
];

export const SCHOOLS_DATA: School[] = sanitizeSchools([...BASE_SCHOOLS, ...MIDDLE_SCHOOLS, ...EXPANDED_SCHOOLS].map(school => ({
  ...school,
  dataSource: school.dataSource || 'legacy',
  verificationStatus: school.verificationStatus || 'evidence_missing',
  canSimulateAdmission: school.canSimulateAdmission === true
})));
export { MIDDLE_SCHOOLS };

export const DISTRICTS_LIST = [
  '全部区域',
  '徐汇区',
  '黄浦区',
  '静安区',
  '浦东新区',
  '闵行区',
  '长宁区',
  '普陀区',
  '杨浦区',
  '虹口区',
  '宝山区',
  '嘉定区',
  '松江区',
  '青浦区',
  '奉贤区',
  '金山区',
  '崇明区'
] as const;
