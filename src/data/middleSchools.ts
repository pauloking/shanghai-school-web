import { School, District } from '../types/school';

export const MIDDLE_SCHOOLS: School[] = [
  // ==================== “三公” 特殊批次名校 (全市选拔) ====================
  {
    id: 'sh-sangong-shwfx',
    name: '上海外国语大学附属外国语学校 (上外附中)',
    shortName: '上外附中',
    stage: 'middle',
    type: 'public',
    district: '虹口区',
    address: '虹口区中山北一路295号',
    establishedYear: 1963,
    tier: '三公名校',
    badgeTag: '三公神仙学校 · 外语多语种天花板 · 保送清北名校摇篮',
    tags: ['三公名校', '神仙学校', '外语拔尖', '免中考直升', '全球视野', '全市招生'],
    location: { lng: 121.4820, lat: 31.2750 },
    tuition: {
      amount: 0,
      unit: '免费/普惠',
      isFree: true,
      note: '国家公办学校免收义务教育学费与课本费'
    },
    enrollment: {
      scope: '全市选拔摇号',
      requirements: [
        '上海市各区小学五年级在读适龄毕业生',
        '综合素质全面，具有极强外语学习天赋与探究能力',
        '通过全市统一网上报名，符合条件者参加电脑随机摇号与综合能力评估'
      ],
      hasFiveYearRule: false,
      admissionDifficulty: '极高 (入户3年以上/低摇中率)',
      oversubscribedHistory: true,
      catchmentAreas: ['面向上海市全境16区自主招生选拔，无地段居委划片限制']
    },
    middleSchoolDetails: {
      admissionMode: '全市选拔/摇号',
      quotaAllocationScale: '不占用各区公办初中与民办摇号名额；自主单独批次招录',
      seniorHighDestinations: {
        tierFourRatio: '极高直升率 (大部分免中考直升上外附中高中部)',
        eightMajorRatio: '100% 市重点水准',
        featuredSeniorHighs: ['上外附中高中部', '上海中学', '华师大二附中']
      },
      feederPrimaries: ['面向全市优秀小学毕业生，生源来自世外、明珠、福山、打一等各区名校']
    },
    academic: {
      rigorLevel: '鸡血应试 (重分层/作业量扎实)',
      foreignTeacherRatio: '高配 (全天带班/全英文)',
      classSize: 30,
      curriculum: ['国家标准课程', '双语浸润课程', '科创数理特色'],
      features: [
        '双外语复合培养 (英/德/法/日/俄/西等多语种)',
        '免中考直接升入上外附中高中部核心机制',
        '每年享有极为丰厚的高校外语类保送生名额'
      ],
      schedule: '08:00 入校 - 16:30 离校 (含社团拓展与外语沙龙)'
    },
    downstream: {
      routeType: '公民双轨可选',
      targetSchools: ['上外附中高中部 (校内直升为主)', '清华/北大/常春藤顶级海外名校'],
      directPassRatio: '约80%以上免中考直升本校高中部',
      note: '神仙学校学生外语能力与跨文化视野极强，高考与留学双向大获全胜。'
    },
    reviews: {
      parentRating: 4.98,
      homeworkDuration: '约 1.5 - 2 小时 (重探究与拓展口语)',
      pros: [
        '上海中小学界公认神仙学校，不占用中考与民办指标，考上即可提前上岸',
        '多语种教学全国领先，免中考直升高中部免除中考内卷',
        '顶尖海外名校与国内C9保送率无与伦比'
      ],
      cons: ['报名人数众多，综合评价遴选门槛极高'],
      parentFeedbackSample: '能进上外附中的孩子思维都非常敏锐。全英文辩论和多语种选修从初一开始，高中几乎不用操心中考，孩子的综合素质和自信心远超同龄人。'
    },
    contact: {
      phone: '021-65420302',
      website: 'http://www.sfls.cn'
    }
  },
  {
    id: 'sh-sangong-shiyan',
    name: '上海市实验学校 (初中部)',
    shortName: '上实初中',
    stage: 'middle',
    type: 'public',
    district: '浦东新区',
    address: '浦东新区东明路300号',
    establishedYear: 1987,
    tier: '三公名校',
    badgeTag: '三公顶流 · 十年一贯弹性学制 · 提前两年高考奇迹',
    tags: ['三公名校', '十年一贯', '小初高一体', '提前高考', '数理逻辑', '全市招生'],
    location: { lng: 121.5050, lat: 31.1890 },
    tuition: {
      amount: 0,
      unit: '免费/普惠',
      isFree: true,
      note: '公办体制免学费'
    },
    enrollment: {
      scope: '全市选拔摇号',
      requirements: [
        '全市小学五年级毕业生（或四年级特异禀赋儿童）',
        '自学能力与逻辑思维极强，身心健康',
        '通过网上报名与电脑摇号审核入围面谈'
      ],
      hasFiveYearRule: false,
      admissionDifficulty: '极高 (入户3年以上/低摇中率)',
      oversubscribedHistory: true,
      catchmentAreas: ['面向全市全境招生，小学部学生100%直升初中部']
    },
    middleSchoolDetails: {
      admissionMode: '全市选拔/摇号',
      quotaAllocationScale: '独立十年一贯体系，小学部直升+全市摇号遴选补录',
      seniorHighDestinations: {
        tierFourRatio: '极高 (大部分免中考直升上实高中部)',
        eightMajorRatio: '95%以上市重点',
        featuredSeniorHighs: ['上海市实验学校高中部', '复旦附中', '交大附中']
      },
      feederPrimaries: ['上海市实验学校小学部 (校内直升)', '全市各区拔尖小学']
    },
    academic: {
      rigorLevel: '鸡血应试 (重分层/作业量扎实)',
      foreignTeacherRatio: '中配 (外教专职授课)',
      classSize: 32,
      curriculum: ['国家标准课程', '科创数理特色', '双语浸润课程'],
      features: [
        '初中3年 + 高中3年特制弹性学制',
        '自编实验教材，数学与思维高阶探究',
        '初三直接通过校内直升考直升上实高中部'
      ],
      schedule: '07:50 - 16:40'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['上实高中部 (免中考直升通道畅通)', '清华大学', '北京大学', '复旦大学'],
      directPassRatio: '初中部绝大部分直升上实高中部',
      note: '学生18岁时已比同龄人多出两年大学或深造优势。'
    },
    reviews: {
      parentRating: 4.95,
      homeworkDuration: '约 1.5 小时',
      pros: [
        '十年一贯省去中考冲刺时间，直通高三提前高考',
        '师资全员教研实力极为深厚，自编教材思维深度极佳',
        '校风严谨纯粹，同学之间互帮互助氛围极浓'
      ],
      cons: ['进度快，自学能力差的学生容易掉队'],
      parentFeedbackSample: '上实的节奏非常紧凑但极科学，省去了机械刷中考真题的一年，孩子们有更多时间搞科创和竞赛，高考985率高得惊人。'
    }
  },
  {
    id: 'sh-sangong-puwai',
    name: '上海外国语大学附属浦东外国语学校 (浦外)',
    shortName: '浦东外国语',
    stage: 'middle',
    type: 'public',
    district: '浦东新区',
    address: '浦东新区达尔文路91号 (张江核心区)',
    establishedYear: 1996,
    tier: '三公名校',
    badgeTag: '三公名校 · 浦东外语翘楚 · 清北与外语保送高地',
    tags: ['三公名校', '外语拔尖', '寄宿制精细化', '高校保送', '全市招生'],
    location: { lng: 121.5890, lat: 31.1960 },
    tuition: {
      amount: 0,
      unit: '免费/普惠',
      isFree: true,
      note: '公办免收义务教育学杂费'
    },
    enrollment: {
      scope: '全市选拔摇号',
      requirements: ['上海市小学毕业生，具有浦东新区或外区户籍均可报选', '外语模仿力强、口语表达流利'],
      hasFiveYearRule: false,
      admissionDifficulty: '极高 (入户3年以上/低摇中率)',
      oversubscribedHistory: true,
      catchmentAreas: ['面向全市全境招生，不占区级对口志愿']
    },
    middleSchoolDetails: {
      admissionMode: '全市选拔/摇号',
      quotaAllocationScale: '独立公办三公选拔批次',
      seniorHighDestinations: {
        tierFourRatio: '大部分免中考直升浦外高中部',
        eightMajorRatio: '90%以上市重点',
        featuredSeniorHighs: ['浦外高中部', '华师大二附中', '复旦附中']
      },
      feederPrimaries: ['面向全市各区优质小学毕业生']
    },
    academic: {
      rigorLevel: '均衡高效 (兼顾学术与活动)',
      foreignTeacherRatio: '高配 (全天带班/全英文)',
      classSize: 32,
      curriculum: ['国家标准课程', '双语浸润课程', '科创数理特色'],
      features: ['外语小班化授课 (20人/班)', '初高中七年一贯培养通道', '寄宿制自理能力锤炼'],
      schedule: '寄宿制 / 周一至周五全日托育'
    },
    downstream: {
      routeType: '公民双轨可选',
      targetSchools: ['浦外高中部', '国内外知名高校外国语专业保送'],
      directPassRatio: '直升浦外高中部比例达75%以上'
    },
    reviews: {
      parentRating: 4.92,
      homeworkDuration: '约 1.5 小时',
      pros: ['张江核心区优美园林校园，全封闭寄宿制省心', '每年二十多张高校保送单，高考压力大幅缓解'],
      cons: ['初一开始住读，需要孩子较强独立生活能力'],
      parentFeedbackSample: '在浦外读初中，最棒的是语言小班化和纯正的发音。孩子住校后作息非常规律，英语水平在初二就能过大学四六级。'
    }
  },

  // ==================== 徐汇区公办与民办初中 ====================
  {
    id: 'xh-huayu-middle',
    name: '上海市民办华育中学',
    shortName: '华育中学',
    stage: 'middle',
    type: 'public',
    district: '徐汇区',
    address: '徐汇区龙吟路99号',
    establishedYear: 1999,
    tier: '公办一梯队',
    badgeTag: '全市初中天花板 · 上中生源摇篮 · 理科金牌战神',
    tags: ['公办一梯队', '民转公典范', '上中嫡系', '数理竞赛', '中考断层第一'],
    location: { lng: 121.4390, lat: 31.1270 },
    tuition: {
      amount: 0,
      unit: '免费/普惠',
      isFree: true,
      note: '民转公后按公办标准免收学费'
    },
    enrollment: {
      scope: '本区户籍/房产',
      requirements: ['徐汇区小学毕业生学籍或常住户籍人户一致', '严格执行免试就近与划片多校安排'],
      hukouYearsRequired: 3,
      hasFiveYearRule: true,
      admissionDifficulty: '极高 (入户3年以上/低摇中率)',
      oversubscribedHistory: true,
      catchmentAreas: ['徐汇区华泾镇及华育周边划片地段居委', '徐汇南片小学直升统筹']
    },
    middleSchoolDetails: {
      admissionMode: '学籍对口免试直升',
      quotaAllocationScale: '徐汇区内市重点名额分配大户，中考均分连续多年全市第一',
      seniorHighDestinations: {
        tierFourRatio: '约55%~65% 录取四校 (上中/二附中/复旦/交附)',
        eightMajorRatio: '95%以上达市实验性示范高中线',
        featuredSeniorHighs: ['上海中学 (绝对主力基地)', '华东师大二附中', '南洋模范中学']
      },
      feederPrimaries: ['华育对口地段小学', '徐汇南片优质公办']
    },
    academic: {
      rigorLevel: '鸡血应试 (重分层/作业量扎实)',
      foreignTeacherRatio: '中配 (外教专职授课)',
      classSize: 36,
      curriculum: ['国家标准课程', '科创数理特色'],
      features: ['理科思维极致拔高', '分层动态辅导与培优体系', '全国五大学科竞赛启蒙摇篮'],
      schedule: '07:45 - 17:00 (晚自习拓展)'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['上海中学本部 (每年预录与中考输送上百人)'],
      directPassRatio: '全市考入上中人数第一'
    },
    reviews: {
      parentRating: 4.96,
      homeworkDuration: '约 2 - 2.5 小时',
      pros: [
        '上海初中毫无争议的第一牌子，师资教研水准无可匹敌',
        '转公后学费全免，性价比冲上云霄',
        '理科数学题库与自编讲义是全市神话'
      ],
      cons: ['学业挑战巨大，抗压能力弱的孩子容易焦虑'],
      parentFeedbackSample: '华育的老师真的神仙敬业，课后答疑细致入微。班级里的学霸们自驱力极强，孩子在华育四年养成的抗挫力和思维深度，终生受用。'
    }
  },
  {
    id: 'xh-shiwai-middle',
    name: '上海市世界外国语中学 (世外初中部)',
    shortName: '世外中学',
    stage: 'middle',
    type: 'bilingual',
    district: '徐汇区',
    address: '徐汇区虹漕南路602号 / 百花街400号',
    establishedYear: 1996,
    tier: '民办顶尖/头牌',
    badgeTag: '民办初中第一招牌 · 双语与学术双峰 · 全球眼界精英培育',
    tags: ['民办顶尖', '双轨王者', 'IB与国内并进', '世外嫡系', '徐汇摇号'],
    location: { lng: 121.4150, lat: 31.1660 },
    tuition: {
      amount: 45000,
      unit: '元/学期',
      isFree: false,
      note: '民办优质办学按物价局核定收费'
    },
    enrollment: {
      scope: '本区摇号',
      requirements: ['徐汇区小学毕业生或符合徐汇入读条件的适龄学生', '选报民办世外初中，报名超额电脑摇号'],
      hasFiveYearRule: false,
      admissionDifficulty: '极高 (入户3年以上/低摇中率)',
      oversubscribedHistory: true,
      catchmentAreas: ['世外小学直升部分学额 + 徐汇区符合条件学生电脑摇号']
    },
    middleSchoolDetails: {
      admissionMode: '民办摇号',
      quotaAllocationScale: '徐汇民办第一头牌，中考市重点与IB藤校录取神话',
      seniorHighDestinations: {
        tierFourRatio: '约35%~45% 录取四校八大',
        eightMajorRatio: '88%以上达市重点线',
        featuredSeniorHighs: ['世外高中部 (IB/A-level)', '上海中学', '交大附中', '南洋模范']
      },
      feederPrimaries: ['上海市世界外国语小学 (大部分直升)', '徐汇全区摇中生源']
    },
    academic: {
      rigorLevel: '均衡高效 (兼顾学术与活动)',
      foreignTeacherRatio: '高配 (全天带班/全英文)',
      classSize: 30,
      curriculum: ['国家标准课程', 'IB-PYP探究', '双语浸润课程', '科创数理特色'],
      features: ['外语全浸润教学与模联演练', '体制内中考与体制外留学双轨自由切换', '全人领袖素养课程'],
      schedule: '08:00 - 16:45'
    },
    downstream: {
      routeType: '公民双轨可选',
      targetSchools: ['世外高中部IB课程', '四校八大公办高中', '美英顶尖寄宿高中'],
      directPassRatio: '体制外直升世外高中部通道极畅通'
    },
    reviews: {
      parentRating: 4.93,
      homeworkDuration: '约 1.5 - 2 小时',
      pros: ['综合素养活动极丰富，孩子阳光自信、口才与批判性思维出类拔萃', '英语教学绝对天花板'],
      cons: ['摇中概率低，学费及课外拓展成本较高'],
      parentFeedbackSample: '世外的孩子最大的特点是站在台上闪闪发光！无论中文还是英文演讲都非常自如，兼顾了中考的扎实和国际化的开阔眼界。'
    }
  },
  {
    id: 'xh-xuhui-middle',
    name: '上海市徐汇中学 (初中部)',
    shortName: '徐汇中学',
    stage: 'middle',
    type: 'public',
    district: '徐汇区',
    address: '徐汇区虹桥路68号 / 华发路校区',
    establishedYear: 1850,
    tier: '公办一梯队',
    badgeTag: '170年历史名校 · 汇学书院科创摇篮 · 公办初中顶梁柱',
    tags: ['公办一梯队', '百年老校', '科创特色班', '学籍对口', '徐家汇核心'],
    location: { lng: 121.4380, lat: 31.1950 },
    tuition: {
      amount: 0,
      unit: '免费/普惠',
      isFree: true,
      note: '公办九年义务教育免学费'
    },
    enrollment: {
      scope: '学籍对口直升',
      requirements: ['徐汇区对口小学学籍毕业生', '部分特长/多校电脑派位录入'],
      hasFiveYearRule: true,
      admissionDifficulty: '较高 (人户一致稳妥/摇号适中)',
      oversubscribedHistory: true,
      catchmentAreas: ['对口汇师小学、光启小学、高安路第一小学部分居委及学籍地段']
    },
    middleSchoolDetails: {
      admissionMode: '学籍对口免试直升',
      quotaAllocationScale: '名额分配到校大户，每年四校八大到校指标充足',
      seniorHighDestinations: {
        tierFourRatio: '约 15%~20%',
        eightMajorRatio: '70%~75% 达市/区重点高中',
        featuredSeniorHighs: ['徐汇中学高中部', '南洋模范中学', '上海中学', '市二中学']
      },
      feederPrimaries: ['上海市汇师小学', '上海市徐汇区光启小学', '徐汇区汇师二部']
    },
    academic: {
      rigorLevel: '均衡高效 (兼顾学术与活动)',
      foreignTeacherRatio: '中配 (外教专职授课)',
      classSize: 36,
      curriculum: ['国家标准课程', '科创数理特色', '艺术/音乐/体育特色'],
      features: ['汇学工程实验室集群', '3D打印/人工智能/生命科学基地', '百年马相伯育人传统'],
      schedule: '07:50 - 16:50'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['徐汇中学高中部 (市特色普通高中)', '南洋模范', '上海中学'],
      directPassRatio: '本校高中直升通道畅通'
    },
    reviews: {
      parentRating: 4.88,
      homeworkDuration: '约 1.5 小时',
      pros: ['徐家汇核心地段通勤便利，历史建筑底蕴深厚', '科创工程实验室硬件堪比大学，孩子动手能力强'],
      cons: ['平行班生源体量较大，尖子班与普通班需靠自律'],
      parentFeedbackSample: '徐汇中学的汇学创新班实力非常硬核，中考去向极其亮眼，而且老师对孩子特别负责，校园文化氛围非常浓郁。'
    }
  },
  {
    id: 'xh-shi-er-middle',
    name: '上海市第二初级中学 (市二初)',
    shortName: '市二初级',
    stage: 'middle',
    type: 'public',
    district: '徐汇区',
    address: '徐汇区永嘉路384号',
    establishedYear: 1902,
    tier: '公办一梯队',
    badgeTag: '衡复风貌区老牌公办 · 市二高中亲密基地 · 人文底蕴醇厚',
    tags: ['公办一梯队', '衡复学区', '建襄向阳对口', '学籍直升', '学风严谨'],
    location: { lng: 121.4550, lat: 31.2060 },
    tuition: {
      amount: 0,
      unit: '免费/普惠',
      isFree: true,
      note: '九年义务教育公办免学杂费'
    },
    enrollment: {
      scope: '学籍对口直升',
      requirements: ['对口建襄小学、向阳小学毕业生按学籍对口免试直升'],
      hasFiveYearRule: true,
      admissionDifficulty: '较高 (人户一致稳妥/摇号适中)',
      catchmentAreas: ['对口建襄小学、向阳小学部分学籍毕业生']
    },
    middleSchoolDetails: {
      admissionMode: '学籍对口免试直升',
      quotaAllocationScale: '老牌市重点市二高中核心直升地段，名额分配收益稳定',
      seniorHighDestinations: {
        tierFourRatio: '约 12%~18%',
        eightMajorRatio: '68%~75% 录取市重点',
        featuredSeniorHighs: ['上海市第二中学 (市二高中)', '南洋模范中学', '上海中学']
      },
      feederPrimaries: ['上海市徐汇区建襄小学', '上海市徐汇区向阳小学']
    },
    academic: {
      rigorLevel: '均衡高效 (兼顾学术与活动)',
      foreignTeacherRatio: '基础 (每周外教口语课)',
      classSize: 35,
      curriculum: ['国家标准课程', '艺术/音乐/体育特色'],
      features: ['书香梧桐人文通识课程', '影视与艺术美育', '扎实的中考巩固拔高系统'],
      schedule: '07:50 - 16:30'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['上海市第二中学 (直通核心通道)', '南洋模范', '上中']
    },
    reviews: {
      parentRating: 4.82,
      homeworkDuration: '约 1.5 小时',
      pros: ['生源来自建襄、向阳等一梯队名小，家庭重视程度高，班风淳正', '教师队伍骨干教师比例大'],
      cons: ['校园场地相对衡复风貌区整体偏小'],
      parentFeedbackSample: '初中对口建襄向阳，生源底子非常好，孩子读得很开心，老师抓习惯抓得很紧。'
    }
  },

  // ==================== 浦东新区公办初中 ====================
  {
    id: 'pd-jianping-xi-middle',
    name: '上海市建平中学西校',
    shortName: '建平西校',
    stage: 'middle',
    type: 'public',
    district: '浦东新区',
    address: '浦东新区乳山路188号 (乳山校区) / 源深路383号 (华城校区) / 宛平路388号 (大唐校区)',
    establishedYear: 1994,
    tier: '公办一梯队',
    badgeTag: '浦东公办第一航母 · 建平高中嫡系主力 · 中考四校八大收割机',
    tags: ['公办一梯队', '浦东航母', '建平嫡系', '地段划片', '中考大户', '名额到校大盘'],
    location: { lng: 121.5320, lat: 31.2380 },
    tuition: {
      amount: 0,
      unit: '免费/普惠',
      isFree: true,
      note: '九年义务教育公办免学杂费'
    },
    enrollment: {
      scope: '对口居委划片',
      requirements: ['浦东新区人户一致常住户口，产证所有人须为父母或学生本人', '实行五年一户严格审验'],
      hukouYearsRequired: 2,
      hasFiveYearRule: true,
      admissionDifficulty: '极高 (入户3年以上/低摇中率)',
      oversubscribedHistory: true,
      catchmentAreas: ['陆家嘴/源深/花木三大板块对口居委', '世茂滨江、陆家嘴世纪金融区划片地段']
    },
    middleSchoolDetails: {
      admissionMode: '户籍地段对口划片',
      quotaAllocationScale: '浦东新区体量最大、名额分配到校指标数全市数一数二的大校',
      seniorHighDestinations: {
        tierFourRatio: '每年考入四校八大人数超200人',
        eightMajorRatio: '约 75%~82% 录取市/区重点高中',
        featuredSeniorHighs: ['上海市建平中学 (市重点八大主力)', '华师大二附中', '上海中学', '进才中学']
      },
      feederPrimaries: ['上海市浦东新区福山外国语小学', '明珠小学部分校区地段']
    },
    academic: {
      rigorLevel: '鸡血应试 (重分层/作业量扎实)',
      foreignTeacherRatio: '中配 (外教专职授课)',
      classSize: 40,
      curriculum: ['国家标准课程', '科创数理特色', '双语浸润课程'],
      features: ['建平西校精细化“导学案”教研体系', '大体量分层培优与奥数拔尖', '管乐团与科技创新全国一流'],
      schedule: '07:45 - 17:15 (含课后答疑服务)'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['建平中学', '华东师大二附中', '进才中学', '上中']
    },
    reviews: {
      parentRating: 4.92,
      homeworkDuration: '约 2 小时',
      pros: [
        '浦东公办初中的定海神针，中考高分段人数傲视全区',
        '名额分配到校名额极为庞大，只要年级排名靠前，进建平、华二稳如泰山',
        '三大校区管理统一严密，师资极其拼'
      ],
      cons: ['年级人数多，竞争压力大，必须自律'],
      parentFeedbackSample: '建平西校的大唐校区和乳山校区都非常强，老师抓做题规范和改错本极其严格。孩子跟着学校节奏走，中考直接进了建平高中实验班。'
    }
  },
  {
    id: 'pd-jincai-shiyan-middle',
    name: '上海市进才实验中学',
    shortName: '进才实验',
    stage: 'middle',
    type: 'public',
    district: '浦东新区',
    address: '浦东新区金松路191号 (联洋国际社区)',
    establishedYear: 2001,
    tier: '公办一梯队',
    badgeTag: '联洋国际社区明珠 · 进才集团中坚 · 快乐与学术完美平衡',
    tags: ['公办一梯队', '联洋学区', '进才集团', '品质社区', '地段划片'],
    location: { lng: 121.5540, lat: 31.2260 },
    tuition: {
      amount: 0,
      unit: '免费/普惠',
      isFree: true,
      note: '公办免收义务教育学杂费'
    },
    enrollment: {
      scope: '对口居委划片',
      requirements: ['联洋及花木周边对口居委人户一致，入户满1-2年以上稳妥'],
      hukouYearsRequired: 1.5,
      hasFiveYearRule: true,
      admissionDifficulty: '较高 (人户一致稳妥/摇号适中)',
      oversubscribedHistory: true,
      catchmentAreas: ['联洋年华、水清木华、天安花园、当代清水园等联洋对口居委']
    },
    middleSchoolDetails: {
      admissionMode: '户籍地段对口划片',
      quotaAllocationScale: '名额分配进才中学、华二、建平名额充沛',
      seniorHighDestinations: {
        tierFourRatio: '约 15%~22%',
        eightMajorRatio: '76%~83% 录取市重点',
        featuredSeniorHighs: ['上海市进才中学', '建平中学', '华师大二附中']
      },
      feederPrimaries: ['上海市进才实验小学 (联洋对口地段免试就近)']
    },
    academic: {
      rigorLevel: '均衡高效 (兼顾学术与活动)',
      foreignTeacherRatio: '中配 (外教专职授课)',
      classSize: 36,
      curriculum: ['国家标准课程', '双语浸润课程', '艺术/音乐/体育特色'],
      features: ['法语/德语二外选修', '联合国教科文组织EPD项目', '生源素质极高，家校共育生态极佳'],
      schedule: '07:50 - 16:45'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['进才中学', '建平中学', '华二', '上实']
    },
    reviews: {
      parentRating: 4.90,
      homeworkDuration: '约 1.5 小时',
      pros: ['联洋社区生源家庭层次高，校园环境雅致现代', '重视素质教育的同时中考市重点率极具竞争力'],
      cons: ['周边房价较高，置业门槛高'],
      parentFeedbackSample: '进才实验初中非常适合追求身心健康又有升学追求的家庭。社团活动多，老师素质很高，孩子四年过得很充实幸福。'
    }
  },
  {
    id: 'pd-zhangjiang-jituan-middle',
    name: '上海市张江集团学校 (初中部)',
    shortName: '张江集团学校',
    stage: 'middle',
    type: 'public',
    district: '浦东新区',
    address: '浦东新区藿香路38号',
    establishedYear: 2006,
    tier: '公办一梯队',
    badgeTag: '张江硅谷公办神话 · 华二生源大户 · 数理硬核战舰',
    tags: ['公办一梯队', '民转公标杆', '华二嫡系', '理科极强', '张江核心'],
    location: { lng: 121.5970, lat: 31.2030 },
    tuition: {
      amount: 0,
      unit: '免费/普惠',
      isFree: true,
      note: '民转公后全额免收义务教育学费'
    },
    enrollment: {
      scope: '本区户籍/房产',
      requirements: ['张江板块划片对口人户一致及张江高科技园区人才引进统筹机制'],
      hukouYearsRequired: 2,
      hasFiveYearRule: true,
      admissionDifficulty: '极高 (入户3年以上/低摇中率)',
      oversubscribedHistory: true,
      catchmentAreas: ['张江核心区对口居委', '高科技园区划片统筹地段']
    },
    middleSchoolDetails: {
      admissionMode: '户籍地段对口划片',
      quotaAllocationScale: '华二与市重点名额分配核心大校，中考均分长期高居浦东公办之巅',
      seniorHighDestinations: {
        tierFourRatio: '约 30%~40% 录取四校八大 (华二核心主力)',
        eightMajorRatio: '88%~92% 达市重点高中线',
        featuredSeniorHighs: ['华师大二附中 (每年大量自招预录)', '建平中学', '上海中学', '进才中学']
      },
      feederPrimaries: ['张江高科实验小学', '第二中心小学等浦东名小生源']
    },
    academic: {
      rigorLevel: '鸡血应试 (重分层/作业量扎实)',
      foreignTeacherRatio: '中配 (外教专职授课)',
      classSize: 36,
      curriculum: ['国家标准课程', '科创数理特色'],
      features: ['硅谷式科创导师制', '华二竞赛名师指导', '硬核理科分层走班教学'],
      schedule: '07:45 - 17:00'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['华东师大二附中 (浦东本部与张江校区)', '建平中学', '上中']
    },
    reviews: {
      parentRating: 4.93,
      homeworkDuration: '约 2 小时',
      pros: ['生源父母多为张江IT与芯片高知工程师，理科学术底子极其深厚', '转公后彻底免除高昂学费'],
      cons: ['理科节奏极快，作业偏硬核'],
      parentFeedbackSample: '张集转公之后依然保持着超强的教研水准。老师认真负责，同学之间讨论题目氛围浓烈，想走理科市重点的家庭首选。'
    }
  },
  {
    id: 'pd-shangzhong-dongxiao-middle',
    name: '上海中学东校 (初中部)',
    shortName: '上中东校',
    stage: 'middle',
    type: 'public',
    district: '浦东新区',
    address: '浦东新区南汇新城镇三元路100号 (临港主城区)',
    establishedYear: 2009,
    tier: '公办一梯队',
    badgeTag: '临港教育第一金字招牌 · 上海中学全权托管 · 住宿制领军名校',
    tags: ['公办一梯队', '上中直系', '临港核心', '寄宿名校', '四校直通通道'],
    location: { lng: 121.9180, lat: 30.8980 },
    tuition: {
      amount: 0,
      unit: '免费/普惠',
      isFree: true,
      note: '九年义务教育公办免学杂费'
    },
    enrollment: {
      scope: '对口居委划片',
      requirements: ['南汇新城镇（临港主城区）人户一致常住户口，执行房产与入户年限排序'],
      hukouYearsRequired: 1,
      hasFiveYearRule: true,
      admissionDifficulty: '较高 (人户一致稳妥/摇号适中)',
      catchmentAreas: ['临港主城区对口滴水湖周边居委划片']
    },
    middleSchoolDetails: {
      admissionMode: '户籍地段对口划片',
      quotaAllocationScale: '享有上中东校高中部核心本校直升通道，名额分配收益极高',
      seniorHighDestinations: {
        tierFourRatio: '约 20%~28%',
        eightMajorRatio: '78%~85% 录取市重点',
        featuredSeniorHighs: ['上中东校高中部 (市实验性示范)', '上海中学本部', '华二', '建平']
      },
      feederPrimaries: ['上中东校小学部', '明珠临港小学', '建平临港小学']
    },
    academic: {
      rigorLevel: '鸡血应试 (重分层/作业量扎实)',
      foreignTeacherRatio: '中配 (外教专职授课)',
      classSize: 35,
      curriculum: ['国家标准课程', '科创数理特色'],
      features: ['上海中学本部资深名师亲自派驻教研', '准军事化寄宿作息与自理培养', '滴水湖大生态户外拓展'],
      schedule: '寄宿制 / 周一至周五精细化管理'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['上中东校高中部 (考上本科与985极高)', '上海中学']
    },
    reviews: {
      parentRating: 4.89,
      homeworkDuration: '约 1.5 - 2 小时 (统一晚自习)',
      pros: ['上中本部原汁原味的教研体系，初中毕业生直升本校高中享有巨大优势', '寄宿制培养孩子极强自理能力'],
      cons: ['地处临港，市区家庭周末接送距离较远'],
      parentFeedbackSample: '上中东校是临港最好的资产之一。晚自习有各科老师坐班答疑，孩子不用在外面报任何补习班，成绩非常过硬。'
    }
  },

  // ==================== 静安区公办初中 ====================
  {
    id: 'ja-shibei-middle',
    name: '上海市市北初级中学',
    shortName: '市北初级',
    stage: 'middle',
    type: 'public',
    district: '静安区',
    address: '静安区西藏北路803号',
    establishedYear: 1996,
    tier: '公办一梯队',
    badgeTag: '全国奥数神话 · 竞赛理科班第一传奇 · 静安公办天花板',
    tags: ['公办一梯队', '奥数神话', '理科强校', '中考四校王', '静安地标'],
    location: { lng: 121.4690, lat: 31.2540 },
    tuition: {
      amount: 0,
      unit: '免费/普惠',
      isFree: true,
      note: '九年义务教育公办免学杂费'
    },
    enrollment: {
      scope: '本区户籍/房产',
      requirements: ['静安区对口小学学籍直升或地段居委划片人户一致'],
      hukouYearsRequired: 2,
      hasFiveYearRule: true,
      admissionDifficulty: '极高 (入户3年以上/低摇中率)',
      oversubscribedHistory: true,
      catchmentAreas: ['芷江西路街道对口居委', '闸北三中心部分学籍地段']
    },
    middleSchoolDetails: {
      admissionMode: '学籍对口免试直升',
      quotaAllocationScale: '静安区市重点高中名额分配主力，四校八大提前录取全市翘楚',
      seniorHighDestinations: {
        tierFourRatio: '理科班90%+进四校，全校综合四校八大率超45%',
        eightMajorRatio: '85%~92% 达市重点高中线',
        featuredSeniorHighs: ['上海中学', '华东师大二附中', '复旦附中', '市北高中']
      },
      feederPrimaries: ['静安区闸北第三中心小学', '静安部分公办一梯队']
    },
    academic: {
      rigorLevel: '鸡血应试 (重分层/作业量扎实)',
      foreignTeacherRatio: '中配 (外教专职授课)',
      classSize: 38,
      curriculum: ['国家标准课程', '科创数理特色'],
      features: ['全国知名的数学资优生探究体系', '国际数学奥林匹克金牌摇篮', '中考高分段常年领跑静安'],
      schedule: '07:45 - 17:15'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['上海中学', '华二', '复旦附中', '交大附中']
    },
    reviews: {
      parentRating: 4.96,
      homeworkDuration: '约 2 小时',
      pros: [
        '市北初级的理科教研水平是全国传奇级别，数学思维体系无人能出其右',
        '名额分配与自主招生通吃，升学前景极度广阔',
        '公办免学费，性价比登峰造极'
      ],
      cons: ['理科班压力大，非数学特长生需适应节奏'],
      parentFeedbackSample: '市北初级的数学老师讲题能把复杂逻辑讲得醍醐灌顶！普通班的学风也极正，中考市重点率非常高。'
    }
  },
  {
    id: 'ja-jingjiaoyuan-middle',
    name: '上海市静安区教育学院附属学校 (初中部)',
    shortName: '静教院附校',
    stage: 'middle',
    type: 'public',
    district: '静安区',
    address: '静安区江宁路688号 / 海防路校区',
    establishedYear: 1998,
    tier: '公办一梯队',
    badgeTag: '张人利后茶馆教学开山鼻祖 · 课内学透轻负担高质效 · 九年一贯神校',
    tags: ['公办一梯队', '九年一贯', '轻负担高效', '后茶馆式教学', '老静安核心'],
    location: { lng: 121.4510, lat: 31.2390 },
    tuition: {
      amount: 0,
      unit: '免费/普惠',
      isFree: true,
      note: '公办九年义务教育免学费'
    },
    enrollment: {
      scope: '对口居委划片',
      requirements: ['小学部毕业生100%直升初中部；对应对口学区人户一致入户满3年以上'],
      hukouYearsRequired: 3,
      hasFiveYearRule: true,
      admissionDifficulty: '极高 (入户3年以上/低摇中率)',
      oversubscribedHistory: true,
      catchmentAreas: ['江宁路街道海防村、三乐、北京等对口居委会']
    },
    middleSchoolDetails: {
      admissionMode: '学籍对口免试直升',
      quotaAllocationScale: '九年一贯免去幼升小后顾之忧，名额分配市西、市北、四校名额优渥',
      seniorHighDestinations: {
        tierFourRatio: '约 25%~35%',
        eightMajorRatio: '85%~90% 达市重点高中线',
        featuredSeniorHighs: ['市西高中', '上海中学', '复旦附中', '市北高中']
      },
      feederPrimaries: ['静教院附校小学部 (100%直升)']
    },
    academic: {
      rigorLevel: '快乐素质 (重个性潜能/轻负担)',
      foreignTeacherRatio: '中配 (外教专职授课)',
      classSize: 34,
      curriculum: ['国家标准课程', '艺术/音乐/体育特色', '双语浸润课程'],
      features: [
        '全国知名的“后茶馆式教学”：课前先学、课上点拨、课后极少机械作业',
        '九年一贯制课程无缝顺畅衔接，彻底消除小升初过渡脱节',
        '连续二十年蝉联中考静安公办前列'
      ],
      schedule: '08:00 - 16:30'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['市西高中', '四校八大', '静安各市重点']
    },
    reviews: {
      parentRating: 4.97,
      homeworkDuration: '约 1 - 1.5 小时 (全上海作业最少名校之一)',
      pros: [
        '全上海真正做到“减负增效”的公办神校，晚上8点前必能写完作业',
        '小学初中九年一贯，彻底免去家长小升初焦虑',
        '中考成绩奇迹般稳定在全市顶尖水平'
      ],
      cons: ['学区房门槛极高，入户年限卡得极紧'],
      parentFeedbackSample: '在静教院读书是孩子的幸运。别的初中每天刷题到深夜，静教院的孩子每天打球画画，中考成绩却依然秒杀一堆鸡血学校。张人利校长的教育理念太超前了！'
    }
  },

  // ==================== 黄浦区公办初中 ====================
  {
    id: 'hp-gezhi-middle',
    name: '上海市格致初级中学',
    shortName: '格致初级',
    stage: 'middle',
    type: 'public',
    district: '黄浦区',
    address: '黄浦区长沙路35号',
    establishedYear: 1874,
    tier: '公办一梯队',
    badgeTag: '格致高中嫡系长子 · 理科格物致知 · 黄浦公办领头羊',
    tags: ['公办一梯队', '黄浦理科王', '格致直通', '学籍对口', '人民广场核心'],
    location: { lng: 121.4720, lat: 31.2360 },
    tuition: {
      amount: 0,
      unit: '免费/普惠',
      isFree: true,
      note: '九年义务教育公办免学杂费'
    },
    enrollment: {
      scope: '学籍对口直升',
      requirements: ['对口曹光彪小学等黄浦小学学籍毕业生免试直升'],
      hasFiveYearRule: true,
      admissionDifficulty: '较高 (人户一致稳妥/摇号适中)',
      catchmentAreas: ['曹光彪小学学籍对口，黄浦南京东路街道部分居委']
    },
    middleSchoolDetails: {
      admissionMode: '学籍对口免试直升',
      quotaAllocationScale: '格致高中最核心的生源大户与名额分配主港',
      seniorHighDestinations: {
        tierFourRatio: '约 20%~28%',
        eightMajorRatio: '78%~85% 达市重点线',
        featuredSeniorHighs: ['格致中学 (八大之首核心直升)', '上海中学', '大同中学']
      },
      feederPrimaries: ['上海市黄浦区曹光彪小学']
    },
    academic: {
      rigorLevel: '鸡血应试 (重分层/作业量扎实)',
      foreignTeacherRatio: '中配 (外教专职授课)',
      classSize: 36,
      curriculum: ['国家标准课程', '科创数理特色'],
      features: ['格物致知理科拓展工坊', '物理化学高阶竞赛指导', '黄浦公办中考王牌战绩'],
      schedule: '07:45 - 17:00'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['格致中学', '大同中学', '向明中学', '上中']
    },
    reviews: {
      parentRating: 4.91,
      homeworkDuration: '约 1.5 - 2 小时',
      pros: ['理科理化极度扎实，直升高中古典格致高中通道极为通畅', '地理位置在人广核心，交通八通八达'],
      cons: ['理科节奏较快，需要认真跟牢'],
      parentFeedbackSample: '曹光彪+格致初是黄浦最经典的公办双学区组合。初中老师极其负责，理科尤其强，孩子考格致高中轻车熟路。'
    }
  },
  {
    id: 'hp-datong-middle',
    name: '上海市大同初级中学',
    shortName: '大同初级',
    stage: 'middle',
    type: 'public',
    district: '黄浦区',
    address: '黄浦区车站支路90号',
    establishedYear: 1912,
    tier: '公办一梯队',
    badgeTag: '大同集团嫡传血脉 · 英语与科技创新并重 · 黄浦南区公办旗舰',
    tags: ['公办一梯队', '大同嫡系', '黄浦南部第一', '外语特色', '名额到校大户'],
    location: { lng: 121.4920, lat: 31.2060 },
    tuition: {
      amount: 0,
      unit: '免费/普惠',
      isFree: true,
      note: '九年义务教育公办免学杂费'
    },
    enrollment: {
      scope: '学籍对口直升',
      requirements: ['黄浦区对口上外黄浦外国语小学等学籍免试直升'],
      hasFiveYearRule: true,
      admissionDifficulty: '较高 (人户一致稳妥/摇号适中)',
      catchmentAreas: ['对口上外黄浦外国语小学等学籍对口毕业生']
    },
    middleSchoolDetails: {
      admissionMode: '学籍对口免试直升',
      quotaAllocationScale: '黄浦区南部名额分配到校大牌主力',
      seniorHighDestinations: {
        tierFourRatio: '约 18%~25%',
        eightMajorRatio: '76%~83% 录取市重点',
        featuredSeniorHighs: ['大同中学 (八大名校核心直通)', '格致中学', '向明中学']
      },
      feederPrimaries: ['上海外国语大学附属黄浦外国语小学', '黄浦南区优质公办']
    },
    academic: {
      rigorLevel: '均衡高效 (兼顾学术与活动)',
      foreignTeacherRatio: '中配 (外教专职授课)',
      classSize: 36,
      curriculum: ['国家标准课程', '双语浸润课程', '科创数理特色'],
      features: ['外语口语视听小班分层', '大同交响管乐团', '初高中一体化大同学术营'],
      schedule: '07:50 - 16:45'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['大同中学', '格致中学', '复旦附中']
    },
    reviews: {
      parentRating: 4.88,
      homeworkDuration: '约 1.5 小时',
      pros: ['对口上外黄浦小学，生源极其整齐，外语和语文底子好', '对口大同高中的名额指标十分雄厚'],
      cons: ['平行班需要靠个人自觉冲刺尖子生'],
      parentFeedbackSample: '大同初级在世博滨江这一块口碑极好，硬件设施完善，英语特色非常突出，中考成绩一直名列黄浦公办前列。'
    }
  },

  // ==================== 杨浦区初中 ====================
  {
    id: 'yp-lansheng-fudan-middle',
    name: '上海兰生复旦中学',
    shortName: '兰生复旦',
    stage: 'middle',
    type: 'public',
    district: '杨浦区',
    address: '杨浦区世界路8号',
    establishedYear: 1994,
    tier: '公办一梯队',
    badgeTag: '杨浦初中绝对第一王牌 · 复旦附中嫡传生源地 · 中考市重点率全市前三',
    tags: ['公办一梯队', '民转公典范', '复旦附中嫡系', '杨浦第一', '自招战神'],
    location: { lng: 121.5280, lat: 31.3140 },
    tuition: {
      amount: 0,
      unit: '免费/普惠',
      isFree: true,
      note: '民转公后全额免收义务教育学杂费'
    },
    enrollment: {
      scope: '本区户籍/房产',
      requirements: ['杨浦区小学毕业生按区教育局划片电脑派位或学籍对口免试录取'],
      hasFiveYearRule: true,
      admissionDifficulty: '极高 (入户3年以上/低摇中率)',
      oversubscribedHistory: true,
      catchmentAreas: ['杨浦区新江湾城/中原片区划片地段居委']
    },
    middleSchoolDetails: {
      admissionMode: '学籍对口免试直升',
      quotaAllocationScale: '复旦附中四校第一核心输送校，名额分配与中考均分傲视杨浦',
      seniorHighDestinations: {
        tierFourRatio: '约 50%~60% (复旦附中主力战舰)',
        eightMajorRatio: '95%以上达市重点高中线',
        featuredSeniorHighs: ['复旦大学附属中学 (绝对直通主力)', '上海中学', '交大附中', '控江中学']
      },
      feederPrimaries: ['杨浦区优质小学学籍生源']
    },
    academic: {
      rigorLevel: '鸡血应试 (重分层/作业量扎实)',
      foreignTeacherRatio: '中配 (外教专职授课)',
      classSize: 36,
      curriculum: ['国家标准课程', '科创数理特色'],
      features: ['数理思维高阶探究体系', '复旦教授进校园学术沙龙', '全市领先的中考提分与综合素养教研'],
      schedule: '07:45 - 17:15'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['复旦附中', '交大附中', '上海中学']
    },
    reviews: {
      parentRating: 4.96,
      homeworkDuration: '约 2 小时',
      pros: [
        '兰生复旦是杨浦初中的泰山北斗，转公后免学费更是造福普通工薪',
        '复旦附中自招与中考预录通道通畅无阻',
        '学习风气极其热烈，全员奔着四校去'
      ],
      cons: ['题目难度较深，需要极强学习自驱力'],
      parentFeedbackSample: '兰生复旦的教学水平没得说，老师对每一个知识点的挖掘深到骨子里，孩子在兰生初中打下的底子，到了复旦附中完全降维打击。'
    }
  },
  {
    id: 'yp-kongjiang-middle',
    name: '上海市控江初级中学',
    shortName: '控江初级',
    stage: 'middle',
    type: 'public',
    district: '杨浦区',
    address: '杨浦区永吉路80号',
    establishedYear: 1963,
    tier: '公办一梯队',
    badgeTag: '杨浦传统公办第一柱石 · 对口控江高中强校 · 打一小学黄金出口',
    tags: ['公办一梯队', '杨浦公办一哥', '打一黄金对口', '理科扎实', '控江直通'],
    location: { lng: 121.5360, lat: 31.2820 },
    tuition: {
      amount: 0,
      unit: '免费/普惠',
      isFree: true,
      note: '九年义务教育公办免学杂费'
    },
    enrollment: {
      scope: '学籍对口直升',
      requirements: ['杨浦区打虎山路第一小学等学籍对口免试直升'],
      hasFiveYearRule: true,
      admissionDifficulty: '较高 (人户一致稳妥/摇号适中)',
      catchmentAreas: ['打虎山路第一小学学籍毕业生对口']
    },
    middleSchoolDetails: {
      admissionMode: '学籍对口免试直升',
      quotaAllocationScale: '控江中学八大名额分配主力，杨浦公办初中升学定海神针',
      seniorHighDestinations: {
        tierFourRatio: '约 15%~22%',
        eightMajorRatio: '72%~80% 达市重点线',
        featuredSeniorHighs: ['控江中学', '杨浦高级中学', '复旦附中', '交大附中']
      },
      feederPrimaries: ['上海市打虎山路第一小学']
    },
    academic: {
      rigorLevel: '鸡血应试 (重分层/作业量扎实)',
      foreignTeacherRatio: '基础 (每周外教口语课)',
      classSize: 38,
      curriculum: ['国家标准课程', '科创数理特色'],
      features: ['思维训练梯队建设', '打一控初十年连贯数理教研', '杨浦传统公办过硬作风'],
      schedule: '07:45 - 16:50'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['控江中学', '复旦附中', '交大附中']
    },
    reviews: {
      parentRating: 4.88,
      homeworkDuration: '约 1.5 - 2 小时',
      pros: ['对口打一小学，生源纯正勤奋，家长配合度高', '中考市重点录取极其稳定'],
      cons: ['校舍历史较长，操场相对紧凑'],
      parentFeedbackSample: '打一小学+控江初中是杨浦公办性价比最高的双学区。孩子初中四年学得扎扎实实，老师负责严谨，顺利考入控江高中。'
    }
  },

  // ==================== 闵行区初中 ====================
  {
    id: 'mh-shangbao-middle',
    name: '上海市上宝中学',
    shortName: '上宝中学',
    stage: 'middle',
    type: 'public',
    district: '闵行区',
    address: '闵行区农林路700号',
    establishedYear: 2002,
    tier: '公办一梯队',
    badgeTag: '闵行初中神话传奇 · 上中与七宝双重基因 · 转公后惠及全区',
    tags: ['公办一梯队', '民转公典范', '上中血统', '七宝嫡系', '中考战神'],
    location: { lng: 121.3650, lat: 31.1510 },
    tuition: {
      amount: 0,
      unit: '免费/普惠',
      isFree: true,
      note: '民转公后全额免收义务教育学杂费'
    },
    enrollment: {
      scope: '本区户籍/房产',
      requirements: ['闵行区常住户口人户一致及划片对口免试统筹'],
      hukouYearsRequired: 2,
      hasFiveYearRule: true,
      admissionDifficulty: '极高 (入户3年以上/低摇中率)',
      oversubscribedHistory: true,
      catchmentAreas: ['七宝板块对口居委及闵行全区统筹划片']
    },
    middleSchoolDetails: {
      admissionMode: '户籍地段对口划片',
      quotaAllocationScale: '七宝中学与上中核心输送地，闵行中考均分长期高居第一',
      seniorHighDestinations: {
        tierFourRatio: '约 45%~55% (七宝中学+四校)',
        eightMajorRatio: '92%以上达市重点高中线',
        featuredSeniorHighs: ['七宝中学 (八大名校绝对主力)', '上海中学', '华师大二附中']
      },
      feederPrimaries: ['明强小学', '七宝实验小学等闵行顶尖名校']
    },
    academic: {
      rigorLevel: '鸡血应试 (重分层/作业量扎实)',
      foreignTeacherRatio: '中配 (外教专职授课)',
      classSize: 36,
      curriculum: ['国家标准课程', '科创数理特色'],
      features: ['上海中学名师驻点教研指导', '自编精良题库与培优教案', '极度拼搏扎实的学风'],
      schedule: '07:45 - 17:15'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['七宝中学', '上海中学', '交大附中']
    },
    reviews: {
      parentRating: 4.95,
      homeworkDuration: '约 2 小时',
      pros: [
        '闵行初中的绝对霸主，中考升学数据全区无人能敌',
        '转公后学费全免，性价比超高',
        '考入七宝中学和上海中学的概率极大'
      ],
      cons: ['课业负担较重，需要较好心理素质'],
      parentFeedbackSample: '上宝中学的教研实力是实打实拼出来的。老师批改作业极其细致，错题盯得很紧，孩子初三模拟考成绩提升飞快。'
    }
  },
  {
    id: 'mh-wenlai-middle',
    name: '上海市民办文来中学 (初中部)',
    shortName: '文来初中',
    stage: 'middle',
    type: 'private',
    district: '闵行区',
    address: '闵行区农林路55号',
    establishedYear: 1994,
    tier: '民办顶尖/头牌',
    badgeTag: '七宝中学亲创初中 · 闵行民办第一摇号热门 · 多元分层发展典范',
    tags: ['民办顶尖', '七宝嫡系', '分层教学', '多元发展', '闵行摇号'],
    location: { lng: 121.3520, lat: 31.1490 },
    tuition: {
      amount: 22000,
      unit: '元/学期',
      isFree: false,
      note: '民办按物价局核定规范收费'
    },
    enrollment: {
      scope: '本区摇号',
      requirements: ['闵行区适龄小学毕业生，选报民办文来初中，报名超额电脑摇号'],
      hasFiveYearRule: false,
      admissionDifficulty: '极高 (入户3年以上/低摇中率)',
      oversubscribedHistory: true,
      catchmentAreas: ['面向闵行区符合条件毕业生电脑派位摇号']
    },
    middleSchoolDetails: {
      admissionMode: '民办摇号',
      quotaAllocationScale: '七宝中学最核心民办基地，中考自招与综评大户',
      seniorHighDestinations: {
        tierFourRatio: '约 25%~35% (七宝中学+四校)',
        eightMajorRatio: '82%~88% 录取市重点',
        featuredSeniorHighs: ['七宝中学', '文来高中部', '交大附中', '南模']
      },
      feederPrimaries: ['面向闵行区全区摇号中签小学毕业生']
    },
    academic: {
      rigorLevel: '均衡高效 (兼顾学术与活动)',
      foreignTeacherRatio: '中配 (外教专职授课)',
      classSize: 34,
      curriculum: ['国家标准课程', '双语浸润课程', '艺术/音乐/体育特色'],
      features: ['独特的七宝“人文+科技”融合课程', '走班分层动态辅导', '丰富多样的研学与生涯规划'],
      schedule: '07:50 - 16:50'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['七宝中学', '文来高中部', '市重点高中']
    },
    reviews: {
      parentRating: 4.90,
      homeworkDuration: '约 1.5 - 2 小时',
      pros: ['校园文化极其开放包容，不仅抓中考，艺术体育社团同样办得有声有色', '七宝中学升学通道极优'],
      cons: ['摇中概率需拼运气'],
      parentFeedbackSample: '文来初中的氛围特别有活力，校长非常懂孩子心理。既有七宝中学的升学硬实力，又有素质教育的温情。'
    }
  },

  // ==================== 长宁区公办初中 ====================
  {
    id: 'cn-yanan-middle',
    name: '上海市延安初级中学',
    shortName: '延安初级',
    stage: 'middle',
    type: 'public',
    district: '长宁区',
    address: '长宁区延安西路1055号',
    establishedYear: 1946,
    tier: '公办一梯队',
    badgeTag: '长宁公办第一金字招牌 · 延安高中生源基石 · 全区电脑派位兵家必争',
    tags: ['公办一梯队', '长宁第一', '延安嫡系', '全区摇号对口', '数理特色'],
    location: { lng: 121.4280, lat: 31.2160 },
    tuition: {
      amount: 0,
      unit: '免费/普惠',
      isFree: true,
      note: '九年义务教育公办免学杂费'
    },
    enrollment: {
      scope: '多校电脑派位',
      requirements: ['长宁区对应片区小学毕业生通过全区电脑分组摇号派位录取'],
      hasFiveYearRule: false,
      admissionDifficulty: '极高 (入户3年以上/低摇中率)',
      oversubscribedHistory: true,
      catchmentAreas: ['长宁第一学区/第二学区电脑分组派位小学学区']
    },
    middleSchoolDetails: {
      admissionMode: '多校划片电脑派位',
      quotaAllocationScale: '延安高中名额分配首选重镇，长宁中考公办天花板',
      seniorHighDestinations: {
        tierFourRatio: '约 22%~30%',
        eightMajorRatio: '80%~87% 达市重点高中线',
        featuredSeniorHighs: ['延安中学 (八大名校核心直通)', '复旦附中', '交大附中', '市三女中']
      },
      feederPrimaries: ['江五小学', '愚一小学等长宁名小电脑派位录入']
    },
    academic: {
      rigorLevel: '鸡血应试 (重分层/作业量扎实)',
      foreignTeacherRatio: '中配 (外教专职授课)',
      classSize: 36,
      curriculum: ['国家标准课程', '科创数理特色'],
      features: ['老牌延安理科教研底蕴', '中考数学物理精细化分层突破', '全国头牌中学生管乐队'],
      schedule: '07:45 - 17:00'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['延安中学', '四校八大市重点']
    },
    reviews: {
      parentRating: 4.93,
      homeworkDuration: '约 1.5 - 2 小时',
      pros: [
        '长宁区公办初中的无可争议的王牌，中考战绩多年稳居长宁第一',
        '教学质量极高，老师非常敬业',
        '管乐队等特色项目在全国屡获大奖'
      ],
      cons: ['长宁区全区小升初电脑分组摇号，无法做到100%确定进校'],
      parentFeedbackSample: '延安初级中学是长宁家长的梦中情校！只要在电脑派位中摇中延安初，家长心里的石头就落地了，中考进延安高中概率非常高。'
    }
  },

  // ==================== 普陀区公办初中 ====================
  {
    id: 'pt-meilong-middle',
    name: '上海市梅陇中学',
    shortName: '梅陇中学',
    stage: 'middle',
    type: 'public',
    district: '普陀区',
    address: '普陀区高兴路108号',
    establishedYear: 1964,
    tier: '公办一梯队',
    badgeTag: '普陀公办第一名牌 · 曹杨二中生源基地 · 中考市重点大户',
    tags: ['公办一梯队', '普陀第一', '曹二嫡系', '学籍对口', '女子足球金牌'],
    location: { lng: 121.4190, lat: 31.2480 },
    tuition: {
      amount: 0,
      unit: '免费/普惠',
      isFree: true,
      note: '九年义务教育公办免学杂费'
    },
    enrollment: {
      scope: '学籍对口直升',
      requirements: ['普陀区曹杨新村等对口小学学籍免试直升'],
      hasFiveYearRule: true,
      admissionDifficulty: '较高 (人户一致稳妥/摇号适中)',
      catchmentAreas: ['对口朝春中心小学等学籍对口毕业生']
    },
    middleSchoolDetails: {
      admissionMode: '学籍对口免试直升',
      quotaAllocationScale: '曹杨二中与普陀市重点名额分配龙头，中考均分连续多年领跑全区公办',
      seniorHighDestinations: {
        tierFourRatio: '约 15%~22%',
        eightMajorRatio: '75%~82% 达市重点高中线',
        featuredSeniorHighs: ['曹杨二中', '华东师大二附中普陀校区', '晋元高级中学']
      },
      feederPrimaries: ['上海市普陀区朝春中心小学']
    },
    academic: {
      rigorLevel: '鸡血应试 (重分层/作业量扎实)',
      foreignTeacherRatio: '基础 (每周外教口语课)',
      classSize: 36,
      curriculum: ['国家标准课程', '科创数理特色', '艺术/音乐/体育特色'],
      features: ['精细化教学管理与错题追踪', '国家女子足球高水平后备基地', '科技创新普及与竞赛梯队'],
      schedule: '07:45 - 16:50'
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: ['曹杨二中', '华二普陀', '晋元高中']
    },
    reviews: {
      parentRating: 4.89,
      homeworkDuration: '约 1.5 - 2 小时',
      pros: ['普陀公办初中第一名片，学风踏实，老师负责到底', '朝春小学对口梅陇是普陀公认的稳妥双公办通道'],
      cons: ['平时周测与月考较密集，需要孩子认真配合'],
      parentFeedbackSample: '梅陇中学名不虚传，抓教学抓得细致入微。班主任跟家长沟通很及时，孩子中考如愿考上了曹杨二中。'
    }
  }
];


export interface MiddleSchoolProfile {
  id: string;
  name: string;
  shortName: string;
  district: District;
  tier: '公办顶流头牌' | '公办一梯队' | '公办优质特色' | '九年一贯头部' | '传统公办名校';
  feederMechanism: '单校100%对口直升' | '多校划片电脑摇号派位' | '九年一贯校内直升';
  feederGroupDetails?: string; // 划片派位组团说明
  highSchoolFeederStrength: string; // 四校八大与名额分配实力
  keyFeatures: string[];
  address: string;
  establishedYear?: number;
  adviceForParents: string;
  score: {
    academic: number;
    fourHighFeeder: number; // 四校八大预录与名额分配实力
    reputation: number;
  };
}

export const MIDDLE_SCHOOLS_DATA: MiddleSchoolProfile[] = [
  // ==================== 浦东新区 ====================
  {
    id: 'ms-jianping-xi',
    name: '上海市建平中学西校 (大唐/华城校区)',
    shortName: '建平西校',
    district: '浦东新区',
    tier: '公办顶流头牌',
    feederMechanism: '单校100%对口直升',
    feederGroupDetails: '对口福山外国语小学、明珠小学部分校区，户籍地段单校直对',
    highSchoolFeederStrength: '中考四校八大预录取率全市公办前三，建平中学本校生源基本盘，市重点率超 68%',
    keyFeatures: [
      '浦东公办初中第一名片，理科与英语特色尤为突出',
      '无小升初摇号派位风险，单校地段直接对口升学',
      '年级梯队厚度深，推优自主招生与名额分配高中到校指标全市第一档'
    ],
    address: '浦东新区源深路383号 / 华鹏路262号',
    establishedYear: 1994,
    adviceForParents: '浦东确定性最高的公办初中，重视理科课业扎实度，买入对口房源即可锁定初中优质学位。',
    score: { academic: 98, fourHighFeeder: 99, reputation: 98 }
  },
  {
    id: 'ms-jincai-shiyan',
    name: '上海市进才实验中学 (联洋校区)',
    shortName: '进才实验中学',
    district: '浦东新区',
    tier: '公办顶流头牌',
    feederMechanism: '单校100%对口直升',
    feederGroupDetails: '对口进才实验小学，联洋新社区九年黄金教育闭环',
    highSchoolFeederStrength: '进才中学与四校八大稳定输送基地，市重点达线率超 65%，自招实力强劲',
    keyFeatures: [
      '联洋国际社区核心配套，生源背景高知整齐，家校协同极佳',
      '英语与综合素养全面发展，九年一贯衔接顺畅',
      '中考均分连续多年位居浦东公办第一梯队前列'
    ],
    address: '浦东新区金松路191号',
    establishedYear: 2001,
    adviceForParents: '联洋次新自住家庭的最优解，兼具优雅人文环境与硬核应试升学出口。',
    score: { academic: 97, fourHighFeeder: 97, reputation: 97 }
  },
  {
    id: 'ms-huaer-qiantan',
    name: '华东师范大学第二附属中学前滩学校 (初中部)',
    shortName: '华二前滩初中',
    district: '浦东新区',
    tier: '九年一贯头部',
    feederMechanism: '九年一贯校内直升',
    feederGroupDetails: '前滩九年一贯制直升，免除小升初任何派位折腾',
    highSchoolFeederStrength: '依托华师大二附中顶流名校集团背书，首届中考即斩获全市顶尖战绩',
    keyFeatures: [
      '前滩国际商务区城市新地标，硬件配置全市天花板',
      '华二骨干名师直接派驻，科创理科探究特色鲜明',
      '100% 校内直升，学风积极向上'
    ],
    address: '浦东新区晴雪路28号',
    establishedYear: 2018,
    adviceForParents: '前滩次新高端自住家庭首选，落户年限需注意入户早晚，九年直升极其省心。',
    score: { academic: 96, fourHighFeeder: 96, reputation: 96 }
  },
  {
    id: 'ms-yangjing-juyuan',
    name: '上海市洋泾菊园实验学校 (初中部)',
    shortName: '洋泾菊园初中',
    district: '浦东新区',
    tier: '公办一梯队',
    feederMechanism: '九年一贯校内直升',
    feederGroupDetails: '陆家嘴潍坊板块公办九年一贯',
    highSchoolFeederStrength: '洋泾中学与进才中学重点输送校，市重点率稳定在 50% 左右',
    keyFeatures: [
      '陆家嘴滨江核心辐射圈，生源以金融白领家庭为主',
      '科技创新与艺术素养并重，课后延时社团丰富'
    ],
    address: '浦东新区启新路1号',
    establishedYear: 1998,
    adviceForParents: '适合陆家嘴周边自住兼顾九年平稳直升的家庭。',
    score: { academic: 88, fourHighFeeder: 87, reputation: 89 }
  },

  // ==================== 徐汇区 ====================
  {
    id: 'ms-xuhui-middle',
    name: '上海市徐汇中学 (百年名校/科技特色班)',
    shortName: '徐汇中学',
    district: '徐汇区',
    tier: '公办顶流头牌',
    feederMechanism: '多校划片电脑摇号派位',
    feederGroupDetails: '徐汇中区/南丹地块派位组团（汇师、建襄、高安一小等电脑派位徐汇中学/市四中学）',
    highSchoolFeederStrength: '特设汇学科技班与理科工程特色班，南模、位育与四校八大自招录取率全市公办前列',
    keyFeatures: [
      '创办于1850年，上海历史最悠久的现代公办完全中学',
      '科技创新教育标杆（生命科学、机器人、天文工程实验室）',
      '徐汇初中梯队中坚，中考均分与重点高中上线率全市声誉极高'
    ],
    address: '徐汇区虹桥路68号 (徐家汇核心商圈旁)',
    establishedYear: 1850,
    adviceForParents: '进入徐汇初中组团即享高品质初中保底，进可冲刺科技特色班，退可享受充裕的名额分配到校指标。',
    score: { academic: 97, fourHighFeeder: 98, reputation: 99 }
  },
  {
    id: 'ms-shisi-middle',
    name: '上海市第四中学 (徐家汇衡复学区)',
    shortName: '市四中学',
    district: '徐汇区',
    tier: '公办一梯队',
    feederMechanism: '多校划片电脑摇号派位',
    feederGroupDetails: '徐汇中区电脑派位主力初中，对口汇师、建襄、向阳等优质生源',
    highSchoolFeederStrength: '市重点率超 55%，对口市二、位育、南模等市实验性示范高中渠道通畅',
    keyFeatures: [
      '百年女中历史底蕴，注重女子特色美育与全人素养',
      '校风优良，学风扎实，徐汇公办初中保底底盘坚实'
    ],
    address: '徐汇区天钥桥路100号',
    establishedYear: 1867,
    adviceForParents: '虽与徐汇中学共同派位，但师资与生源质量同样优良，徐汇区初中整体厚度居全市之冠。',
    score: { academic: 91, fourHighFeeder: 90, reputation: 92 }
  },
  {
    id: 'ms-weiyu-chuji',
    name: '上海市位育初级中学',
    shortName: '位育初级',
    district: '徐汇区',
    tier: '公办顶流头牌',
    feederMechanism: '多校划片电脑摇号派位',
    feederGroupDetails: '天平/湖南路风貌区派位对口，吸纳向阳、建襄、高安一小生源',
    highSchoolFeederStrength: '位育高中与四校八大直通车，公办自主招生四校八大率常年名列全市前茅',
    keyFeatures: [
      '理科数学特长极其强悍，大师辈出',
      '徐汇衡复文化精粹，课外探究与中考升学双一流'
    ],
    address: '徐汇区复兴中路1260号',
    establishedYear: 1943,
    adviceForParents: '徐汇公办初中皇冠上的明珠，理科教学严谨，中考上限极高。',
    score: { academic: 98, fourHighFeeder: 98, reputation: 98 }
  },
  {
    id: 'ms-shier-chuji',
    name: '上海市第二初级中学',
    shortName: '市二初级',
    district: '徐汇区',
    tier: '公办一梯队',
    feederMechanism: '多校划片电脑摇号派位',
    feederGroupDetails: '徐汇天平/湖南路街道组团',
    highSchoolFeederStrength: '市二中学本校主要输送基地，市重点高中上线率高',
    keyFeatures: [
      '百年女中文化传承，校风文雅严谨',
      '注重外语与人文综合素质培养'
    ],
    address: '徐汇区永嘉路388号',
    establishedYear: 1902,
    adviceForParents: '徐汇中心城区优质公办初中，生源圈层好。',
    score: { academic: 92, fourHighFeeder: 91, reputation: 93 }
  },
  {
    id: 'ms-nanmo-chuji',
    name: '上海市南洋模范初级中学',
    shortName: '南模初级',
    district: '徐汇区',
    tier: '公办顶流头牌',
    feederMechanism: '多校划片电脑摇号派位',
    feederGroupDetails: '徐家汇与天平路周边小学派位',
    highSchoolFeederStrength: '南模高中最核心生源基地，交大附中、南模八大名校录取人数极多',
    keyFeatures: [
      '中国名校南模教育集团旗帜初中，篮球与交响乐特色闻名全国',
      '数理逻辑功底极其深厚'
    ],
    address: '徐汇区天平路200号',
    establishedYear: 1901,
    adviceForParents: '百年南模体系，升入南模高中有天然优势与名额分配倾斜。',
    score: { academic: 97, fourHighFeeder: 97, reputation: 98 }
  },

  // ==================== 闵行区 ====================
  {
    id: 'ms-shinsong-middle',
    name: '上海市莘松中学 (春申校区 / 莘中校区 / 水清校区)',
    shortName: '莘松中学',
    district: '闵行区',
    tier: '公办顶流头牌',
    feederMechanism: '单校100%对口直升',
    feederGroupDetails: '春申校区对口闵行区实验小学春申校区，单校户籍户籍直对',
    highSchoolFeederStrength: '七宝中学、华二闵行、交大附中闵行分校生源大户，公办中考排位闵行第一梯队',
    keyFeatures: [
      '闵行公办初中执牛耳者，办学规模大、成绩稳健坚韧',
      '与闵行实验小学形成“实小+莘松”九年公办无敌闭环',
      '学风扎实严谨，分层教学深入细致'
    ],
    address: '闵行区伟业路229号 (春申校区)',
    establishedYear: 1990,
    adviceForParents: '追求次新品质大盘居住体验与九年公办稳定确定的家长首选。',
    score: { academic: 95, fourHighFeeder: 94, reputation: 95 }
  },
  {
    id: 'ms-shinguang-middle',
    name: '上海市莘光中学 (莘庄核心)',
    shortName: '莘光中学',
    district: '闵行区',
    tier: '公办一梯队',
    feederMechanism: '单校100%对口直升',
    feederGroupDetails: '对口莘庄核心区及梅陇部分片区',
    highSchoolFeederStrength: '七宝中学与闵行中学重点生源校，市重点达线率超 55%',
    keyFeatures: [
      '莘庄枢纽核心成熟老牌名校，理科教学扎实',
      '体育艺术特长项目突出，学额充沛'
    ],
    address: '闵行区雅致路18号',
    establishedYear: 1995,
    adviceForParents: '莘庄老牌公办中坚，通勤交通极其便利。',
    score: { academic: 90, fourHighFeeder: 89, reputation: 91 }
  },
  {
    id: 'ms-qibao-shiyan-middle',
    name: '上海市七宝实验中学',
    shortName: '七宝实验中学',
    district: '闵行区',
    tier: '公办一梯队',
    feederMechanism: '单校100%对口直升',
    feederGroupDetails: '对口七宝实验小学，七宝教育集团核心公办',
    highSchoolFeederStrength: '七宝中学教育集团直属成员校，享有七宝中学自招与到校指标红利',
    keyFeatures: [
      '依托七宝中学“全面发展的人文实验”教育理念',
      '万科城市花园社区核心配套，人文氛围浓厚'
    ],
    address: '闵行区静安新城十四区静安路',
    establishedYear: 1997,
    adviceForParents: '看重七宝教育集团资源与宜居次新社区的理想选择。',
    score: { academic: 91, fourHighFeeder: 92, reputation: 92 }
  },
  {
    id: 'ms-kangcheng-shiyan-middle',
    name: '上海康城实验学校 (初中部)',
    shortName: '康城实验初中',
    district: '闵行区',
    tier: '九年一贯头部',
    feederMechanism: '九年一贯校内直升',
    feederGroupDetails: '上海康城超级大盘对口，100%校内直升',
    highSchoolFeederStrength: '闵行中考成绩跃升黑马，市重点与区重点录取人数年年攀升',
    keyFeatures: [
      '校内九年连贯培养，杜绝小升初择校派位内耗',
      '配套齐全，学额充裕，落户年限相对温和'
    ],
    address: '闵行区莘松路958弄康城内',
    establishedYear: 2004,
    adviceForParents: '刚需家庭高性价比首选，总价 350-600 万即可搞定次新大三房与九年直升。',
    score: { academic: 86, fourHighFeeder: 85, reputation: 87 }
  },

  // ==================== 静安区 ====================
  {
    id: 'ms-jingjiaoyuan-middle',
    name: '上海市静教院附校 (初中部/九年一贯)',
    shortName: '静教院初中',
    district: '静安区',
    tier: '公办顶流头牌',
    feederMechanism: '九年一贯校内直升',
    feederGroupDetails: '静教院附校小学部 100% 直升初中，全上海最强公办神话',
    highSchoolFeederStrength: '市重点高中达线率超 85%，四校八大录取比例在全市所有公办初中名列榜首',
    keyFeatures: [
      '张人利校长开创“轻负担、高质量”绿色教育模式，作业量少而升学率极高',
      '真正免除小升初所有折腾，100% 完整九年闭环',
      '生源圈层极其纯粹，教学教研实力全市称冠'
    ],
    address: '静安区海防路374号',
    establishedYear: 1998,
    adviceForParents: '上海公办九年一贯制天花板，落户年限通常需严格满足 3 年以上且五年一户无占用。',
    score: { academic: 99, fourHighFeeder: 99, reputation: 99 }
  },
  {
    id: 'ms-shixi-chuji',
    name: '上海市市西初级中学',
    shortName: '市西初级',
    district: '静安区',
    tier: '公办顶流头牌',
    feederMechanism: '多校划片电脑摇号派位',
    feederGroupDetails: '对口一师附小等愉快教育强校，静安西区派位核心',
    highSchoolFeederStrength: '市西高中、格致、四校稳定预录取大校，中考自招能力顶尖',
    keyFeatures: [
      '办学历史悠久，思维训练与科技特长全市知名',
      '文理并重，课外兴趣特长发展空间大'
    ],
    address: '静安区西安路56号',
    establishedYear: 1870,
    adviceForParents: '愉快教育高地，适合尊重孩子天性与综合素质发展的品质中产家庭。',
    score: { academic: 96, fourHighFeeder: 96, reputation: 97 }
  },
  {
    id: 'ms-fenghua-chuji',
    name: '上海市风华初级中学 (大宁/共和新路校区)',
    shortName: '风华初级',
    district: '静安区',
    tier: '公办一梯队',
    feederMechanism: '单校100%对口直升',
    feederGroupDetails: '对口闸北实验小学 (大宁校区)，大宁板块中考第一强校',
    highSchoolFeederStrength: '四校八大及市北中学理科班重点输送校，市重点率超 60%',
    keyFeatures: [
      '大宁国际社区核心学区，理科与应试教学基本功极扎实',
      '近大宁郁金香公园与久光商圈，自住环境绝佳'
    ],
    address: '静安区共和新路2800号',
    establishedYear: 1997,
    adviceForParents: '大宁品质改善大盘（慧芝湖、金茂府等）标配初中，升学表现极其稳健。',
    score: { academic: 94, fourHighFeeder: 94, reputation: 95 }
  },

  // ==================== 黄浦区 ====================
  {
    id: 'ms-luwan-chuji',
    name: '上海市卢湾初级中学 (原卢湾一中心对口直升)',
    shortName: '卢湾初级',
    district: '黄浦区',
    tier: '公办一梯队',
    feederMechanism: '单校100%对口直升',
    feederGroupDetails: '对口卢湾第一中心小学，黄浦罕见公办直升黄金闭环',
    highSchoolFeederStrength: '向明中学与格致中学核心生源基地，市重点率超 60%',
    keyFeatures: [
      '淮海中路商圈核心，百年海派教育底蕴',
      '科学教育实验基地，机器人与智慧学习技术领先'
    ],
    address: '黄浦区西藏南路1374号',
    establishedYear: 1963,
    adviceForParents: '黄浦公办难得的免电脑派位直升初中，升学确定性高，地段极度保值。',
    score: { academic: 93, fourHighFeeder: 93, reputation: 94 }
  },
  {
    id: 'ms-jingye-chuji',
    name: '上海市敬业初级中学',
    shortName: '敬业初级',
    district: '黄浦区',
    tier: '公办优质特色',
    feederMechanism: '多校划片电脑摇号派位',
    feederGroupDetails: '老西门板块派位（吸纳蓬莱路二小、实验小学等优质生源）',
    highSchoolFeederStrength: '对口上海最老学府敬业中学与格致中学，文理兼修',
    keyFeatures: [
      '中华路老西门老城厢人文高地，微社会课程生动活泼',
      '近年教学质量与四校八大自招率稳步攀升'
    ],
    address: '黄浦区尚文路111号',
    establishedYear: 1748,
    adviceForParents: '依托老西门学区蓬莱路二小优质生源，初中氛围越来越纯粹。',
    score: { academic: 90, fourHighFeeder: 89, reputation: 91 }
  },
  {
    id: 'ms-gezhi-chuji',
    name: '上海市格致初级中学',
    shortName: '格致初级',
    district: '黄浦区',
    tier: '公办顶流头牌',
    feederMechanism: '多校划片电脑摇号派位',
    feederGroupDetails: '黄浦南京东路/人民广场街道派位',
    highSchoolFeederStrength: '“八大金刚”格致中学亲儿子初中，理科奥赛与科技创新全市声名远扬',
    keyFeatures: [
      '“爱国、科学、求实、创新”百年格致校风',
      '理科思维训练极其出色，直升格致高中比例可观'
    ],
    address: '黄浦区长沙路35号',
    establishedYear: 1874,
    adviceForParents: '黄浦理科应试第一初中，数理拔尖学生的大舞台。',
    score: { academic: 96, fourHighFeeder: 97, reputation: 98 }
  },

  // ==================== 长宁区 ====================
  {
    id: 'ms-yanan-chuji',
    name: '上海市延安初级中学',
    shortName: '延安初级',
    district: '长宁区',
    tier: '公办顶流头牌',
    feederMechanism: '多校划片电脑摇号派位',
    feederGroupDetails: '长宁区第一/第二组团电脑派位（对口江五小学、愚一小学、江三小学等）',
    highSchoolFeederStrength: '长宁公办第一神校，延安高中生源基石，四校八大录取人数领跑全区',
    keyFeatures: [
      '数学特色与综合实践并重，中考各科均分长年雄踞长宁之首',
      '环境典雅，社团活动丰富，素质与应试结合的典范'
    ],
    address: '长宁区延安西路606号',
    establishedYear: 1946,
    adviceForParents: '虽然长宁全区实行多校电脑摇号派位，但进入江五/愚一即有大概率摇入延安初中组团。',
    score: { academic: 98, fourHighFeeder: 98, reputation: 98 }
  },
  {
    id: 'ms-shisan-nvchu',
    name: '上海市第三女子初级中学 (市三女初)',
    shortName: '市三女初',
    district: '长宁区',
    tier: '公办一梯队',
    feederMechanism: '多校划片电脑摇号派位',
    feederGroupDetails: '长宁特色全女子公办初中，吸纳多校电脑派位女生',
    highSchoolFeederStrength: '对口市三女中（宋氏三姐妹母校），英语外语及艺术特色全市唯一',
    keyFeatures: [
      '优雅、独立、能干、关爱的女性领导力素养培育',
      '海派百年花园洋房校园，国际交流频繁'
    ],
    address: '长宁区江苏路155号',
    establishedYear: 1892,
    adviceForParents: '家有女宝的家庭极其青睐，不仅应试扎实，而且综合修养与气质培养全市独树一帜。',
    score: { academic: 92, fourHighFeeder: 91, reputation: 95 }
  },
  {
    id: 'ms-jianqing-shiyan-middle',
    name: '上海市建青实验学校 (初中部)',
    shortName: '建青实验初中',
    district: '长宁区',
    tier: '九年一贯头部',
    feederMechanism: '九年一贯校内直升',
    feederGroupDetails: '古北国际社区十五年一贯制直升（幼-小-初-高）',
    highSchoolFeederStrength: '享有长宁优质高中名额分配与校内高中直升通道',
    keyFeatures: [
      '上海最早的一贯制实验学校，涉外视野宽阔',
      '小班化精品教学，学生身心健康与课外特长发展好'
    ],
    address: '长宁区玛瑙路11号 (古北新区核心)',
    establishedYear: 1939,
    adviceForParents: '适合古北自住、推崇国际化教育与一贯直升免择校的家庭。',
    score: { academic: 89, fourHighFeeder: 88, reputation: 90 }
  },

  // ==================== 杨浦区 ====================
  {
    id: 'ms-anshan-chuji',
    name: '上海市鞍山初级中学',
    shortName: '鞍山初级',
    district: '杨浦区',
    tier: '公办顶流头牌',
    feederMechanism: '单校100%对口直升',
    feederGroupDetails: '对口打虎山路第一小学等，鞍山板块理科高地',
    highSchoolFeederStrength: '复旦附中、控江中学与四校自招输送大户，市重点达线率超 65%',
    keyFeatures: [
      '杨浦应试教育底蕴扎实，数学理科教研底子极其深厚',
      '教师队伍以爱岗敬业、抓紧抓细著称，校风极其朴实'
    ],
    address: '杨浦区铁岭路555号',
    establishedYear: 1969,
    adviceForParents: '工薪家庭以低总价（280-450万）买下老破小挂学籍，博取中考高分首选。',
    score: { academic: 96, fourHighFeeder: 96, reputation: 95 }
  },
  {
    id: 'ms-kongjiang-chuji',
    name: '上海市控江初级中学',
    shortName: '控江初级',
    district: '杨浦区',
    tier: '公办顶流头牌',
    feederMechanism: '单校100%对口直升',
    feederGroupDetails: '对口控江二村小学，单校户籍直接对口',
    highSchoolFeederStrength: '“八大金刚”控江中学亲儿子，四校八大自招与到校名额极其丰沛',
    keyFeatures: [
      '中考数学与理化实验全市闻名，公办升学率长年名列杨浦区第一集团'
    ],
    address: '杨浦区双阳路388号',
    establishedYear: 1963,
    adviceForParents: '学区对口确定性极高，理科学风扎实，中考升入市重点高中极其稳健。',
    score: { academic: 95, fourHighFeeder: 95, reputation: 95 }
  },

  // ==================== 普陀区 ====================
  {
    id: 'ms-huaer-putuo',
    name: '华东师范大学第二附属中学普陀学校 (初中部)',
    shortName: '华二普陀初中',
    district: '普陀区',
    tier: '九年一贯头部',
    feederMechanism: '九年一贯校内直升',
    feederGroupDetails: '长风生态商务区九年一贯制，大华清水湾等次新大盘对口',
    highSchoolFeederStrength: '直通华师大二附中普陀校区高中部，依托华二顶尖名师资源深度赋能',
    keyFeatures: [
      '苏州河畔崭新现代化校区，科技实验室与创新空间齐备',
      '生源质量极优，华二卓越教育理念全面下沉'
    ],
    address: '普陀区光复西路2739号',
    establishedYear: 2020,
    adviceForParents: '普陀区未来十年最强教育王牌，次新商品房自住与顶尖名校双赢。',
    score: { academic: 94, fourHighFeeder: 95, reputation: 95 }
  },
  {
    id: 'ms-zhongyuan-shiyan-middle',
    name: '上海市普陀区中远实验学校 (初中部)',
    shortName: '中远实验初中',
    district: '普陀区',
    tier: '九年一贯头部',
    feederMechanism: '九年一贯校内直升',
    feederGroupDetails: '中远两湾城内环超大社区对口，100%校内直升',
    highSchoolFeederStrength: '中考均分位居普陀公办前列，市重点率稳定在 50% 左右',
    keyFeatures: [
      '内环内稀缺大型社区配套九年公办，上下学无需出小区安全省心',
      '外语与艺术素养突出，家校委员会机制完善'
    ],
    address: '普陀区远景路801号 (中远两湾城西区)',
    establishedYear: 2002,
    adviceForParents: '自住体验极佳，省去小升初折腾，房产流动性强。',
    score: { academic: 90, fourHighFeeder: 89, reputation: 91 }
  },

  // ==================== 虹口区 ====================
  {
    id: 'ms-luxun-chuji',
    name: '上海市鲁迅初级中学',
    shortName: '鲁迅初级',
    district: '虹口区',
    tier: '公办一梯队',
    feederMechanism: '单校100%对口直升',
    feederGroupDetails: '对口虹口第四中心小学，曲阳成熟社区核心',
    highSchoolFeederStrength: '复兴高级中学、华附虹口与四校重点生源基地',
    keyFeatures: [
      '毗邻鲁迅公园与上海外国语大学，文化底蕴深厚',
      '语文与数理教学扎实，学风朴实淳正'
    ],
    address: '虹口区东体育会路667号',
    establishedYear: 1963,
    adviceForParents: '虹口第四中心小学对口衔接初中，老牌公办名门，性价比极高。',
    score: { academic: 90, fourHighFeeder: 89, reputation: 91 }
  },

  // ==================== 郊区标杆初中 ====================
  {
    id: 'ms-shangda-fuxiao-middle',
    name: '上海大学附属学校 (初中部)',
    shortName: '上大附校初中',
    district: '宝山区',
    tier: '九年一贯头部',
    feederMechanism: '九年一贯校内直升',
    feederGroupDetails: '大场镇锦秋路与经纬绿洲片区九年一贯',
    highSchoolFeederStrength: '上大附中、行知中学主力生源校',
    keyFeatures: ['7号线地铁沿线，大学园区人文浸润，次新社区环境宜居'],
    address: '宝山区大场镇锦秋路999号',
    establishedYear: 2003,
    adviceForParents: '中环北侧高性价比自住改善家庭首选。',
    score: { academic: 86, fourHighFeeder: 85, reputation: 87 }
  },
  {
    id: 'ms-nanxiang-shiyan-middle',
    name: '上海市嘉定区南翔实验学校 (初中部)',
    shortName: '南翔实验初中',
    district: '嘉定区',
    tier: '公办一梯队',
    feederMechanism: '单校100%对口直升',
    feederGroupDetails: '南翔新城片区对口',
    highSchoolFeederStrength: '嘉定一中、交大附中嘉定分校生源大户',
    keyFeatures: ['南翔古镇生态宜居，硬件设施先进，中考成绩领跑嘉定中南部'],
    address: '嘉定区南翔镇宝翔路160号',
    establishedYear: 2008,
    adviceForParents: '11号线地铁通勤与低密洋房宜居的优质配套。',
    score: { academic: 85, fourHighFeeder: 85, reputation: 86 }
  },
  {
    id: 'ms-shangwai-songwai-middle',
    name: '上海外国语大学松江外国语学校 (初中部)',
    shortName: '上外松外初中',
    district: '松江区',
    tier: '九年一贯头部',
    feederMechanism: '九年一贯校内直升',
    feederGroupDetails: '松江大学城核心居住区九年一贯直升',
    highSchoolFeederStrength: '松江二中主力生源校，公办中考升学率常年稳居松江公办第一',
    keyFeatures: ['上海外国语大学直接指导，多语种外语教学优势突出，生源层次高知'],
    address: '松江区广富林街道梅家浜路1011号',
    establishedYear: 2010,
    adviceForParents: '松江品质天花板，9号线大学城地铁商圈，九年直升极其省心。',
    score: { academic: 91, fourHighFeeder: 90, reputation: 92 }
  },
  {
    id: 'ms-huixian-middle',
    name: '上海市奉贤区汇贤中学',
    shortName: '奉贤汇贤中学',
    district: '奉贤区',
    tier: '公办顶流头牌',
    feederMechanism: '单校100%对口直升',
    feederGroupDetails: '对口南桥小学等南桥新城核心地段',
    highSchoolFeederStrength: '奉贤中学（市重点）生源第一大户，四校八大自招人数居奉贤之首',
    keyFeatures: ['奉贤公办初中第一名片，学风严谨，名师云集'],
    address: '奉贤区南桥镇南桥路518号',
    establishedYear: 1999,
    adviceForParents: '南桥新城核心自住家庭的不二之选，房价亲民无学区泡沫。',
    score: { academic: 88, fourHighFeeder: 87, reputation: 90 }
  }
];

// Helper to find a middle school by exact or fuzzy name
export function findMiddleSchoolByName(queryName: string): MiddleSchoolProfile | null {
  // 这些扩展评分与升学描述尚未具备逐条来源字段；保留名称解析，
  // 但在证据模型补齐前不向界面返回可点击的“详情档案”。
  void queryName;
  return null;
}


export interface ParsedMiddleSchool {
  name: string;
  profile: MiddleSchoolProfile | null;
}

// Parses a combined middle school string (e.g., "徐汇中学 / 市四中学") into individual badges
export function parseMiddleSchools(rawText: string): ParsedMiddleSchool[] {
  if (!rawText || rawText.trim() === '' || rawText === '暂无' || rawText === '待定') return [];
  const parts = rawText.split(/[/、,，+]/).map(p => p.trim()).filter(Boolean);
  if (parts.length === 0) return [];

  return parts.map(part => ({
    name: part,
    profile: findMiddleSchoolByName(part)
  }));
}
