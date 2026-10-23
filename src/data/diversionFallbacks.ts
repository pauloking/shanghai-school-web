export interface DiversionDestination {
  name: string;
  tier: string;
  distanceDesc: string;
  acceptanceCapacity: string;
}

export interface DiversionFallbackInfo {
  schoolId: string;
  schoolName: string;
  district: string;
  fallbackDestinations: DiversionDestination[];
  historicalCutoffYears: string;
  policyNotes: string;
  returnFeederStatus: string;
}

export const DIVERSION_FALLBACKS_DATA: DiversionFallbackInfo[] = [
  {
    schoolId: 'xh-huishi-primary',
    schoolName: '上海市汇师小学',
    district: '徐汇区',
    fallbackDestinations: [
      { name: '上海市徐汇区光启小学', tier: '公办优质二梯队', distanceDesc: '距主校约 1.2 公里', acceptanceCapacity: '学额相对充裕，承接能力强' },
      { name: '汇师小学南校区/分部', tier: '本校跨校区扩班调配', distanceDesc: '距主校约 1.8 公里', acceptanceCapacity: '优先内部扩班吸收' }
    ],
    historicalCutoffYears: '落户入户满 2.5 ~ 3 年以上稳妥',
    policyNotes: '徐汇区实行严格“人户一致+入户年限”排序。当报名人数超过学校核定班级容量时，依落户时间先后排序，尾部生源由徐汇区教育局统筹分流。',
    returnFeederStatus: '小升初依然根据户籍地段归属徐汇区第一派位组（徐汇中学、市四中学等摇号），初中直升派位资格不受小学统筹影响！'
  },
  {
    schoolId: 'xh-jianxiang-primary',
    schoolName: '徐汇区建襄小学',
    district: '徐汇区',
    fallbackDestinations: [
      { name: '上海市徐汇区向阳小学(部分扩班点)', tier: '公办顶流一梯队', distanceDesc: '距建襄约 1.5 公里', acceptanceCapacity: '视当年招生空额微调' },
      { name: '徐汇区医学院路小学 / 宛平中学小学部', tier: '公办规范优质校', distanceDesc: '距建襄约 2.0 公里', acceptanceCapacity: '历年主要统筹兜底接收校' }
    ],
    historicalCutoffYears: '落户入户满 2.8 ~ 3 年以上',
    policyNotes: '建襄小学办学校区体量有限，高峰年份常发布超额预警，按父母产证份额与落户时长严格筛选。',
    returnFeederStatus: '初中升学仍保留原户籍片区电脑派位资格（对口徐汇二梯队/一梯队公办初中组团）。'
  },
  {
    schoolId: 'xh-xiangyang-primary',
    schoolName: '徐汇区向阳小学',
    district: '徐汇区',
    fallbackDestinations: [
      { name: '上海市教育科学研究院实验小学', tier: '公办优质特色校', distanceDesc: '距向阳约 1.6 公里', acceptanceCapacity: '区内重点统筹承接校' },
      { name: '徐汇区第二中心小学分流点', tier: '区重点二梯队', distanceDesc: '距向阳约 2.2 公里', acceptanceCapacity: '多班额承接空间' }
    ],
    historicalCutoffYears: '落户入户满 2.5 ~ 3 年',
    policyNotes: '向阳小学对口房源多为老法租界公房及部分次新，生源稠密，若超额严格依据入户月数排序。',
    returnFeederStatus: '初中按原户籍所在地参加徐汇公办初中派位摇号。'
  },
  {
    schoolId: 'xh-gaoyi-primary',
    schoolName: '高安路第一小学 (高一小学)',
    district: '徐汇区',
    fallbackDestinations: [
      { name: '上海市徐汇区宛平中学小学部 / 零陵中学小学部', tier: '公办规范校', distanceDesc: '距校区约 1.8 公里', acceptanceCapacity: '常规统筹接收地' },
      { name: '光启小学', tier: '公办优质二梯队', distanceDesc: '距校区约 2.1 公里', acceptanceCapacity: '学额调配' }
    ],
    historicalCutoffYears: '落户入户满 2 ~ 2.5 年',
    policyNotes: '两个校区协同办学，若生源超额优先在华新校区与宛平校区间内部调配，极少数溢出生源安排邻近公办。',
    returnFeederStatus: '初中派位按原户籍归属第四或第一派位组。'
  },
  {
    schoolId: 'pd-mingzhu-primary',
    schoolName: '浦东新区明珠小学 (A/B/C区)',
    district: '浦东新区',
    fallbackDestinations: [
      { name: '浦东新区潍坊小学 / 崂山小学 (A区超额)', tier: '公办规范老牌校', distanceDesc: '距明珠A校区约 1.1 公里', acceptanceCapacity: '潍坊街道就近统筹接收点' },
      { name: '浦东新区东盛小学 (B区超额)', tier: '公办规范校', distanceDesc: '距明珠B校区约 1.5 公里', acceptanceCapacity: '塘桥街道定点统筹' },
      { name: '杨思小学 / 上南二村小学 (C区超额)', tier: '公办二梯队/规范校', distanceDesc: '距明珠C校区约 1.8 公里', acceptanceCapacity: '三林杨思片区兜底' }
    ],
    historicalCutoffYears: 'A区入户需 3 年以上；B区约 2-2.5 年；C区约 2 年左右',
    policyNotes: '浦东公办顶流应试头牌，明珠历年户籍年限卡位极为严格，超额预警频次高。建议家长尽早落户，产证需父母双方或单方达 100% 产权。',
    returnFeederStatus: '小升初仍按浦东公办初中地段对口（A区对口东昌南校/洋泾南校等，C区对口杨思中学/上南等）。'
  },
  {
    schoolId: 'pd-fushan-zhengda-primary',
    schoolName: '福山外国语小学 / 福山正达',
    district: '浦东新区',
    fallbackDestinations: [
      { name: '浦东新区六一小学', tier: '公办规范校', distanceDesc: '距福山福达约 1.3 公里', acceptanceCapacity: '陆家嘴洋泾街道统筹点' },
      { name: '竹园小学 (张杨校区/沪东校区)', tier: '公办优质二梯队', distanceDesc: '距校区约 2.0 公里', acceptanceCapacity: '品牌教育集团骨干' }
    ],
    historicalCutoffYears: '福山公办入户需 2 ~ 2.5 年以上',
    policyNotes: '英语强校代表，生源若出现人户一致超额，由浦东二署在相邻微网格公办小学内平移安置。',
    returnFeederStatus: '初中直升对口进才北校或建平西校地段对口资格依原户籍所在地执行。'
  },
  {
    schoolId: 'ja-jingjiaoyuan-school',
    schoolName: '上海市静教院附校 (静安区教育学院附属学校)',
    district: '静安区',
    fallbackDestinations: [
      { name: '上海市静安区第一中心小学', tier: '百年名校公办顶流', distanceDesc: '距校区约 1.5 公里', acceptanceCapacity: '相邻学区优质调剂' },
      { name: '闸北三职附小 / 康定路周边统筹点', tier: '公办规范校', distanceDesc: '距校区约 1.2 公里', acceptanceCapacity: '常态化兜底校' }
    ],
    historicalCutoffYears: '近三年均需入户满 3 年（部分年份卡到 3 年 4 个月+）',
    policyNotes: '九年一贯制全市最抢手公办，且严格执行五年一户与落户时间极致比拼，尾部生源调配方案由静安区教育局公示。',
    returnFeederStatus: '若小学阶段被统筹分流，初中将失去静教院九年一贯直升资格，小升初需按统筹后小学地段或全区派位走。'
  },
  {
    schoolId: 'ja-yishifuxiao-primary',
    schoolName: '一师附小 (上海市第一师范附属小学)',
    district: '静安区',
    fallbackDestinations: [
      { name: '上海市静安区万航渡路小学', tier: '公办一梯队名校', distanceDesc: '距一师附小约 1.4 公里', acceptanceCapacity: '同属曹家渡街道强校' },
      { name: '西康路第三小学', tier: '公办规范校', distanceDesc: '距一师附小约 1.8 公里', acceptanceCapacity: '常规调剂接收校' }
    ],
    historicalCutoffYears: '落户入户需 2.5 ~ 3 年',
    policyNotes: '快乐教育与素质教学名片，对口高知家庭密集，生源超额时按落户先后顺序顺位录取。',
    returnFeederStatus: '小升初按静安区电脑派位组团录取（通常进入市西初级、同济大学附属七一中学等派位组）。'
  },
  {
    schoolId: 'hp-luwan-first-primary',
    schoolName: '上海市黄浦区卢湾一中心小学',
    district: '黄浦区',
    fallbackDestinations: [
      { name: '上海市黄浦区师专附小', tier: '公办优质二梯队', distanceDesc: '距校区约 1.3 公里', acceptanceCapacity: '淮海中路街道对口保障' },
      { name: '上海市卢湾第二中心小学', tier: '公办优质名校', distanceDesc: '距校区约 1.7 公里', acceptanceCapacity: '集团化学位协调' }
    ],
    historicalCutoffYears: '落户入户需 1.5 ~ 2 年',
    policyNotes: '黄浦区人户分离较多，但卢湾一中心热度居高不下，超额时按人户一致年限调配至师专附小。',
    returnFeederStatus: '初中按黄浦对口直升，主要对接卢湾初级中学等名校。'
  },
  {
    schoolId: 'hp-penglai-primary',
    schoolName: '上海市黄浦区蓬莱路第二小学',
    district: '黄浦区',
    fallbackDestinations: [
      { name: '上海市黄浦区梅溪小学', tier: '上海最早公立小学之一', distanceDesc: '距蓬二约 1.0 公里', acceptanceCapacity: '老西门片区稳定承接' },
      { name: '黄浦区黄家路第三小学', tier: '公办规范校', distanceDesc: '距蓬二约 1.4 公里', acceptanceCapacity: '常规统筹点' }
    ],
    historicalCutoffYears: '落户入户约 1.5 ~ 2 年',
    policyNotes: '老城厢高品质名校，超额时在黄浦中南部教育集团内横向协调。',
    returnFeederStatus: '小升初对口市南中学或敬业初级中学，初中对口按户籍升学路径清晰。'
  },
  {
    schoolId: 'mh-shiyan-primary',
    schoolName: '闵行区实验小学 (莘松/春城/景城/畹町校区)',
    district: '闵行区',
    fallbackDestinations: [
      { name: '闵行区莘松小学', tier: '公办规范优质校', distanceDesc: '距莘松校区约 1.5 公里', acceptanceCapacity: '莘庄镇内重要调配校' },
      { name: '闵行区田园第二外国语实验小学', tier: '公办特色二梯队', distanceDesc: '距春城校区约 2.0 公里', acceptanceCapacity: '颛桥/春申片区统筹' }
    ],
    historicalCutoffYears: '四校区略有差异，莘松与春城校区落户需 2 ~ 3 年',
    policyNotes: '一校四区模式，若单一校区生源溢出，闵行教育局优先在实验小学集团其他校区内协商调剂，无法消纳再行外迁统筹。',
    returnFeederStatus: '初中对口莘松中学或莘光中学（单校对口直升），只要房产户籍对口依然享有优质初中权益。'
  },
  {
    schoolId: 'mh-mingqiang-primary',
    schoolName: '闵行区七宝明强小学 (东校/西校)',
    district: '闵行区',
    fallbackDestinations: [
      { name: '明强小学西校区 (东校超额时)', tier: '本校一校两区调剂', distanceDesc: '距东校约 1.8 公里', acceptanceCapacity: '优先西校吸纳' },
      { name: '七宝第三中学小学部 / 航华第二小学', tier: '公办规范校', distanceDesc: '距主校约 2.3 公里', acceptanceCapacity: '七宝镇学额兜底点' }
    ],
    historicalCutoffYears: '东校落户需 2.5 ~ 3 年；西校落户需 1.5 ~ 2 年',
    policyNotes: '七宝老牌霸主，东校生源量常年饱和，超额后先顺移至西校区就读，完全满员后分流七宝周边公办。',
    returnFeederStatus: '初中对口七宝二中或七宝实验中学，升学路径成熟。'
  },
  {
    schoolId: 'cn-jiangwuxiao-primary',
    schoolName: '江苏路第五小学 (江五小学)',
    district: '长宁区',
    fallbackDestinations: [
      { name: '上海市长宁区开元小学', tier: '公办特色二梯队', distanceDesc: '距江五约 1.2 公里', acceptanceCapacity: '长宁区优质分流选择' },
      { name: '复旦初中长宁校区小学部', tier: '公办规范校', distanceDesc: '距江五约 1.8 公里', acceptanceCapacity: '长宁区公办托底' }
    ],
    historicalCutoffYears: '落户入户约 2 ~ 2.5 年',
    policyNotes: '长宁实行严苛五年一户，昭化、华阳多校区联动，超额时按落户时间及三代直系血亲关系排序。',
    returnFeederStatus: '长宁全区实行初中电脑派位摇号，小升初按派位组摇号进入延安初中、市三女初、复旦初级等。'
  },
  {
    schoolId: 'yp-konger-primary',
    schoolName: '控江二村小学',
    district: '杨浦区',
    fallbackDestinations: [
      { name: '杨浦区二师附小杨浦大桥校区', tier: '公办一梯队强校分部', distanceDesc: '距控二约 1.6 公里', acceptanceCapacity: '集团内协调优质托底' },
      { name: '周家嘴路小学', tier: '公办规范校', distanceDesc: '距控二约 1.9 公里', acceptanceCapacity: '杨浦区定点分流校' }
    ],
    historicalCutoffYears: '落户入户需 2 ~ 2.5 年以上',
    policyNotes: '杨浦公办理科传统强校，若人户一致超额，杨浦区教育局统筹在控江街道与延吉街道公办小学消化。',
    returnFeederStatus: '对口直升控江初级中学（单校对口直升），学区确定性极高。'
  },
  {
    schoolId: 'yp-dayi-primary',
    schoolName: '打虎山路第一小学 (打一小学)',
    district: '杨浦区',
    fallbackDestinations: [
      { name: '同济小学 / 铁岭中学小学部', tier: '公办二梯队/规范校', distanceDesc: '距打一约 1.5 公里', acceptanceCapacity: '鞍山片区就近承接' },
      { name: '许昌路第五小学', tier: '公办规范校', distanceDesc: '距打一约 1.8 公里', acceptanceCapacity: '统筹保底安排' }
    ],
    historicalCutoffYears: '落户入户需 2 ~ 2.5 年',
    policyNotes: '打一摇篮教育集团核心，对口鞍山公房密集，生源充足时按落户入户时长排序录取。',
    returnFeederStatus: '小升初对口鞍山初级中学，初中理科教学扎实。'
  },
  {
    schoolId: 'hk-disizhongxin-primary',
    schoolName: '虹口区第四中心小学',
    district: '虹口区',
    fallbackDestinations: [
      { name: '虹口区四川北路第一小学', tier: '公办二梯队特色校', distanceDesc: '距四中心约 1.1 公里', acceptanceCapacity: '川北街道统筹接收' },
      { name: '虹口区第一中心小学分流点', tier: '公办名校', distanceDesc: '距四中心约 1.7 公里', acceptanceCapacity: '跨学区调配' }
    ],
    historicalCutoffYears: '落户入户约 1.5 ~ 2 年',
    policyNotes: '虹口公办招牌之一，超额后由虹口区教育局在四川北路街道周边就近统筹安排。',
    returnFeederStatus: '初中按虹口区划片对口直升鲁迅初级中学等名牌公办。'
  }
];

// Helper to look up diversion fallback info for a school
export function getSchoolDiversionFallback(schoolIdOrName: string): DiversionFallbackInfo | null {
  if (!schoolIdOrName) return null;
  const clean = schoolIdOrName.trim().toLowerCase();

  const matched = DIVERSION_FALLBACKS_DATA.find(d => 
    d.schoolId.toLowerCase() === clean ||
    d.schoolName.toLowerCase() === clean ||
    clean.includes(d.schoolName.toLowerCase()) ||
    d.schoolName.toLowerCase().includes(clean)
  );

  return matched || null;
}
