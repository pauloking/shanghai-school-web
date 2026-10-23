import json

# List of all curated expansion schools across Shanghai's 16 districts
EXPANSION_LIST = [
    # ----------------徐汇区 (Xuhui) ----------------
    {
        "id": "xh-gaoyi-primary", "name": "上海市徐汇区高安路第一小学 (高一小学)", "shortName": "高安路一小",
        "stage": "primary", "type": "public", "district": "徐汇区",
        "address": "徐汇区康平路4弄2号(康平校区) / 宛平南路255号(宛平校区)", "establishedYear": 1955,
        "tier": "公办一梯队", "badgeTag": "徐汇四大公办 · 康平宛平双校区 · 艺术与学力双优",
        "tags": ["公办一梯队", "四大公办", "七彩教育", "名流母校", "艺术特色"],
        "location": {"lng": 121.4445, "lat": 31.2035},
        "tuition": {"amount": 0, "unit": "免费/普惠", "isFree": True, "note": "国家公办九年义务教育免收学杂费"},
        "enrollment": {"scope": "对口居委划片", "requirements": ["适龄儿童户籍与房产产权人一致且人户一致", "落户年限建议满2.5年以上", "严格执行五年一户审查"], "hukouYearsRequired": 2.5, "hasFiveYearRule": True, "admissionDifficulty": "极高 (入户3年以上/低摇中率)", "oversubscribedHistory": True, "catchmentAreas": ["康平居委", "吴兴居委", "宛平居委", "天平居委", "德仁居委"]},
        "academic": {"rigorLevel": "均衡高效 (兼顾学术与活动)", "foreignTeacherRatio": "基础 (每周外教口语课)", "classSize": 35, "curriculum": ["国家标准课程", "科创数理特色", "艺术/音乐/体育特色"], "features": ["七彩阳光童年育人课程", "管乐团与金帆艺术社团全市顶尖", "姚明母校，篮球与体育传统浓厚"], "schedule": "08:00 - 16:30"},
        "downstream": {"routeType": "体制内中高考", "targetSchools": ["南模初级中学", "徐汇中学", "市二初级中学"], "directPassRatio": "地段分组电脑派位", "note": "徐汇中考老牌强校输出基地，派位去向包含南模初、徐汇中学等示范初中。"},
        "reviews": {"parentRating": 4.8, "homeworkDuration": "约 1 小时", "pros": ["校园充满人文温度，注重孩子综合素质与艺术特长", "师资队伍极其优秀稳定，活动丰富多彩"], "cons": ["划片地段内老洋房学额紧张，入户排位要求严格"], "parentFeedbackSample": "高一的七彩教育不是一句口号，孩子在管乐团里找到了自信，学习习惯和自主性被培养得极好。"}
    },
    {
        "id": "xh-yifu-primary", "name": "上海市民办逸夫小学", "shortName": "逸夫小学",
        "stage": "primary", "type": "private", "district": "徐汇区",
        "address": "徐汇区罗秀路400号", "establishedYear": 1996,
        "tier": "民办顶尖/头牌", "badgeTag": "徐汇四大民办 · 数理思维之王 · 科技艺术先锋",
        "tags": ["民办顶尖/头牌", "四大民办", "数理摇篮", "科技特色", "陶艺书法"],
        "location": {"lng": 121.4390, "lat": 31.1395},
        "tuition": {"amount": 20000, "unit": "元/学期", "isFree": False, "note": "物价局核准备案标准"},
        "enrollment": {"scope": "本区摇号", "requirements": ["符合上海市义务教育入学条件的本区适龄儿童", "统一在市报名系统填报民办第一志愿并参与电脑摇号"], "hukouYearsRequired": 0, "hasFiveYearRule": False, "admissionDifficulty": "极高 (入户3年以上/低摇中率)", "oversubscribedHistory": True, "catchmentAreas": ["全区电脑随机摇号派位"]},
        "academic": {"rigorLevel": "鸡血应试 (重分层/作业量扎实)", "foreignTeacherRatio": "中配 (外教专职授课)", "classSize": 32, "curriculum": ["国家标准课程", "科创数理特色", "艺术/音乐/体育特色"], "features": ["老牌数理逻辑与思维训练体系", "陶艺馆与少儿科学院特色校本", "英语与古文素养底蕴厚实"], "schedule": "08:00 - 16:45"},
        "downstream": {"routeType": "体制内中高考", "targetSchools": ["华育中学", "世外初中", "西南位育中学", "立达初中"], "directPassRatio": "摇号与自主报考一梯队初中", "note": "上海中考“华育预备班”美誉，毕业生思维基础极强，初中表现极其抢眼。"},
        "reviews": {"parentRating": 4.9, "homeworkDuration": "约 1 - 1.5 小时", "pros": ["数理思维训练扎实，校内教学效率极高", "陶艺和科技活动极其出色，孩子全面发展"], "cons": ["摇中概率低，校内学习节奏紧凑竞争激烈"], "parentFeedbackSample": "逸夫的数学思维和科技素养培养名不虚传，校风踏实，老师认真负责，初中衔接毫无断层感。"}
    },
    {
        "id": "xh-shanghai-primary", "name": "上海市上海小学", "shortName": "上海小学",
        "stage": "primary", "type": "public", "district": "徐汇区",
        "address": "徐汇区上中路100号", "establishedYear": 1903,
        "tier": "公办一梯队", "badgeTag": "百年名校 · 原上海中学初等部 · 治学严谨典范",
        "tags": ["百年老校", "公办一梯队", "底蕴深厚", "语文特色", "传统名校"],
        "location": {"lng": 121.4382, "lat": 31.1388},
        "tuition": {"amount": 0, "unit": "免费/普惠", "isFree": True, "note": "国家公办九年义务教育免收学杂费"},
        "enrollment": {"scope": "对口居委划片", "requirements": ["适龄儿童户籍与房产产权人一致", "建议落户满2年以上", "严格五年一户审核"], "hukouYearsRequired": 2, "hasFiveYearRule": True, "admissionDifficulty": "较高 (人户一致稳妥/摇号适中)", "oversubscribedHistory": false, "catchmentAreas": ["上中居委", "罗秀居委", "凌云居委部分"]},
        "academic": {"rigorLevel": "均衡高效 (兼顾学术与活动)", "foreignTeacherRatio": "基础 (每周外教口语课)", "classSize": 35, "curriculum": ["国家标准课程", "科创数理特色"], "features": ["百年上中文脉沉淀，大语文阅读素养工程", "少儿国学与科学探究体验", "扎实系统学科夯基"], "schedule": "08:00 - 16:30"},
        "downstream": {"routeType": "体制内中高考", "targetSchools": ["上海市南洋初级中学", "徐汇实验中学"], "directPassRatio": "对口划片免试升学", "note": "毕业生基础学科扎实严谨，在区内统考及初中后续发展中表现稳固。"},
        "reviews": {"parentRating": 4.7, "homeworkDuration": "约 1 小时", "pros": ["百年老校文脉深厚，老师教风朴实严谨", "基础扎实，少浮躁风气"], "cons": ["历史建筑相对古朴，周边路段早晚较为拥挤"], "parentFeedbackSample": "百年老校底蕴真的不一样，老师严谨负责有爱心，孩子各项基础习惯打得非常牢固。"}
    },
    {
        "id": "xh-shsd-primary", "name": "上海师范大学第一附属小学 (上师大一附小)", "shortName": "上师大一附小",
        "stage": "primary", "type": "public", "district": "徐汇区",
        "address": "徐汇区桂林西街101弄56号", "establishedYear": 1999,
        "tier": "公办一梯队", "badgeTag": "师大教研依托 · 现代教育改革实验地 · 外语与科创标杆",
        "tags": ["公办一梯队", "高校教研", "双语浸润", "科创特色", "全人素养"],
        "location": {"lng": 121.4178, "lat": 31.1685},
        "tuition": {"amount": 0, "unit": "免费/普惠", "isFree": True, "note": "国家公办义务教育免收学费"},
        "enrollment": {"scope": "对口居委划片", "requirements": ["适龄儿童户籍与房产产权人一致", "五年一户严格执行", "人户一致优先统筹"], "hukouYearsRequired": 2, "hasFiveYearRule": True, "admissionDifficulty": "较高 (人户一致稳妥/摇号适中)", "oversubscribedHistory": false, "catchmentAreas": ["长青居委", "师大新村居委", "桂林西街居委"]},
        "academic": {"rigorLevel": "均衡高效 (兼顾学术与活动)", "foreignTeacherRatio": "中配 (外教专职授课)", "classSize": 35, "curriculum": ["国家标准课程", "双语浸润课程", "科创数理特色"], "features": ["依托上师大教育学科研力量直通课堂", "牛津双语口语浸润拓展项目", "少儿人工智能与创意编程实验室"], "schedule": "08:00 - 16:30"},
        "downstream": {"routeType": "体制内中高考", "targetSchools": ["中国中学", "康健外国语实验中学"], "directPassRatio": "对口划片免试升学", "note": "对口中国中学等优质初中，初小衔接机制顺畅。"},
        "reviews": {"parentRating": 4.7, "homeworkDuration": "约 1 小时", "pros": ["教研理念走在前沿，不死板刷题", "英语和科创教学极其出色", "校园人文关怀足"], "cons": ["对口居委生源较多户籍需提前锁定"], "parentFeedbackSample": "上师大的教研背景让教学非常系统科学，课外探究活动多，孩子学得轻松又扎实。"}
    },
    {
        "id": "xh-qiuzhi-primary", "name": "上海市徐汇区求知小学", "shortName": "求知小学",
        "stage": "primary", "type": "public", "district": "徐汇区",
        "address": "徐汇区习勤路91号", "establishedYear": 1904,
        "tier": "公办二梯队", "badgeTag": "百年名校 · 少年航天摇篮 · 求真笃行",
        "tags": ["公办二梯队", "百年底蕴", "航天科普", "数学强项"],
        "location": {"lng": 121.4330, "lat": 31.1712},
        "tuition": {"amount": 0, "unit": "免费/普惠", "isFree": True, "note": "国家公办免费"},
        "enrollment": {"scope": "对口居委划片", "requirements": ["适龄儿童人户一致优先", "执行五年一户审核"], "hukouYearsRequired": 1.5, "hasFiveYearRule": True, "admissionDifficulty": "中等", "catchmentAreas": ["求知居委", "习勤居委", "康健路居委"]},
        "academic": {"rigorLevel": "均衡高效 (兼顾学术与活动)", "foreignTeacherRatio": "基础 (每周外教口语课)", "classSize": 35, "curriculum": ["国家标准课程", "科创数理特色"], "features": ["少年航天科普创新院士项目", "校本求真课程", "思维敏捷数学训练"], "schedule": "08:00 - 16:30"},
        "downstream": {"routeType": "体制内中高考", "targetSchools": ["中国中学", "田林三中"], "directPassRatio": "划片免试升学"},
        "reviews": {"parentRating": 4.6, "homeworkDuration": "约 1 小时", "pros": ["校风端正学风扎实", "航天科普活动多", "升入中国中学成绩优异"], "cons": ["周边街道略显狭窄"], "parentFeedbackSample": "求知在老徐汇口碑非常好，老师敬业，孩子在航天模型俱乐部学到了很多。"}
    },
    {
        "id": "xh-yuannan-primary", "name": "上海市徐汇区园南小学", "shortName": "园南小学",
        "stage": "primary", "type": "public", "district": "徐汇区",
        "address": "徐汇区百色路231号", "establishedYear": 1993,
        "tier": "公办二梯队", "badgeTag": "南徐汇强校 · 园南教育集团核心 · 学风优良",
        "tags": ["公办二梯队", "集团化办学", "绿色生态", "排球特色"],
        "location": {"lng": 121.4420, "lat": 31.1440},
        "tuition": {"amount": 0, "unit": "免费/普惠", "isFree": True, "note": "国家公办免费"},
        "enrollment": {"scope": "对口居委划片", "requirements": ["适龄儿童人户一致优先", "执行五年一户审核"], "hukouYearsRequired": 1, "hasFiveYearRule": True, "admissionDifficulty": "中等", "catchmentAreas": ["园南一村", "园南二村", "园南三村", "百色路居委"]},
        "academic": {"rigorLevel": "均衡高效 (兼顾学术与活动)", "foreignTeacherRatio": "基础 (每周外教口语课)", "classSize": 35, "curriculum": ["国家标准课程", "艺术/音乐/体育特色"], "features": ["植物生态探究", "少儿女子排球传统强校", "初小衔接扎实"], "schedule": "08:00 - 16:30"},
        "downstream": {"routeType": "体制内中高考", "targetSchools": ["园南中学", "长桥中学"], "directPassRatio": "对口直升优质初中园南中学"},
        "reviews": {"parentRating": 4.6, "homeworkDuration": "约 1 小时", "pros": ["直升园南中学中考成绩优异", "社区成熟生活便利"], "cons": ["房龄较老但居住氛围好"], "parentFeedbackSample": "园南小初衔接非常顺畅，园南中学是徐汇公办强校，九年读书很省心。"}
    },
    {
        "id": "xh-tianlin3-primary", "name": "上海市徐汇区田林第三小学", "shortName": "田林三小",
        "stage": "primary", "type": "public", "district": "徐汇区",
        "address": "徐汇区田林十一村84号", "establishedYear": 1987,
        "tier": "公办二梯队", "badgeTag": "田林学区核心 · 计算机信息特色 · 扎实稳妥",
        "tags": ["公办二梯队", "田林核心", "信息技术", "扎实严谨"],
        "location": {"lng": 121.4250, "lat": 31.1735},
        "tuition": {"amount": 0, "unit": "免费/普惠", "isFree": True, "note": "国家公办免费"},
        "enrollment": {"scope": "对口居委划片", "requirements": ["适龄儿童人户一致优先", "执行五年一户审核"], "hukouYearsRequired": 1, "hasFiveYearRule": True, "admissionDifficulty": "中等", "catchmentAreas": ["田林十一村", "田林十二村", "田林十三村"]},
        "academic": {"rigorLevel": "均衡高效 (兼顾学术与活动)", "foreignTeacherRatio": "基础 (每周外教口语课)", "classSize": 35, "curriculum": ["国家标准课程", "科创数理特色"], "features": ["少儿编程与信息奥赛", "田林三中紧密型集团联动"], "schedule": "08:00 - 16:30"},
        "downstream": {"routeType": "体制内中高考", "targetSchools": ["田林第三中学"], "directPassRatio": "对口公办强校田林三中"},
        "reviews": {"parentRating": 4.6, "homeworkDuration": "约 1 小时", "pros": ["双三学区（三小+三中）性价比极高", "交通生活配套成熟"], "cons": ["老小区车位紧张"], "parentFeedbackSample": "田林三小+三中性价比在徐汇公办里非常高，老师踏实负责，初中考上重点高中的很多。"}
    },
    {
        "id": "xh-tianlin1-primary", "name": "上海市徐汇区田林第一小学", "shortName": "田林一小",
        "stage": "primary", "type": "public", "district": "徐汇区",
        "address": "徐汇区田林东路100弄14号", "establishedYear": 1986,
        "tier": "普通优质公办", "badgeTag": "田林学区 · 乒乓与民乐特色 · 亲切温馨",
        "tags": ["普通优质公办", "田林核心", "乒乓传统", "民乐特色"],
        "location": {"lng": 121.4310, "lat": 31.1750},
        "tuition": {"amount": 0, "unit": "免费/普惠", "isFree": True, "note": "国家公办免费"},
        "enrollment": {"scope": "对口居委划片", "requirements": ["适龄儿童人户一致优先"], "hukouYearsRequired": 1, "hasFiveYearRule": True, "admissionDifficulty": "中等", "catchmentAreas": ["田林一村", "田林二村", "田林三村"]},
        "academic": {"rigorLevel": "均衡高效 (兼顾学术与活动)", "foreignTeacherRatio": "基础 (每周外教口语课)", "classSize": 35, "curriculum": ["国家标准课程"], "features": ["少儿乒乓球传统训练", "红领巾少儿民乐演奏"], "schedule": "08:00 - 16:30"},
        "downstream": {"routeType": "体制内中高考", "targetSchools": ["田林中学", "田林三中"], "directPassRatio": "电脑派位对口入学"},
        "reviews": {"parentRating": 4.5, "homeworkDuration": "约 0.8 小时", "pros": ["老师很有爱心", "课业负担轻", "校园亲和"], "cons": ["升学相比一梯队稍平实"], "parentFeedbackSample": "很规范的社区公办，老师很耐心，作业量适中，接送非常方便。"}
    },
    {
        "id": "xh-jiaoda-primary", "name": "上海交通大学附属小学 (交大附小)", "shortName": "交大附小",
        "stage": "primary", "type": "public", "district": "徐汇区",
        "address": "徐汇区宣平路1号", "establishedYear": 2004,
        "tier": "公办二梯队", "badgeTag": "交大高校共建 · 高校子弟生源 · 科技素养先锋",
        "tags": ["公办二梯队", "高校共建", "交大文脉", "思维科创"],
        "location": {"lng": 121.4340, "lat": 31.1960},
        "tuition": {"amount": 0, "unit": "免费/普惠", "isFree": True, "note": "国家公办免费"},
        "enrollment": {"scope": "对口居委划片", "requirements": ["交大教职工子女按规定保障", "对口地段人户一致入学"], "hukouYearsRequired": 1.5, "hasFiveYearRule": True, "admissionDifficulty": "较高 (人户一致稳妥/摇号适中)", "catchmentAreas": ["南春居委", "交大新村", "淮海居委部分"]},
        "academic": {"rigorLevel": "均衡高效 (兼顾学术与活动)", "foreignTeacherRatio": "基础 (每周外教口语课)", "classSize": 35, "curriculum": ["国家标准课程", "科创数理特色"], "features": ["交大教授进课堂", "机器人创新实验中心", "高学历家长交流社群"], "schedule": "08:00 - 16:30"},
        "downstream": {"routeType": "体制内中高考", "targetSchools": ["徐汇中学", "南模初级中学"], "directPassRatio": "划片派位优质初中"},
        "reviews": {"parentRating": 4.7, "homeworkDuration": "约 1 小时", "pros": ["生源层次高家长素质优秀", "大学科研资源赋能多"], "cons": ["招生规模较紧凑"], "parentFeedbackSample": "交大附小的生源和家校氛围极其好，很多高校老师家庭，孩子之间互相带动。"}
    },
    {
        "id": "xh-wannan-kindergarten", "name": "上海市徐汇区宛南实验幼儿园", "shortName": "宛南实验幼",
        "stage": "kindergarten", "type": "public", "district": "徐汇区",
        "address": "徐汇区零陵路北零弄2号 / 宛平南路校区", "establishedYear": 1979,
        "tier": "市示范园", "badgeTag": "上海市示范园 · 生活教育奠基 · 温暖健康",
        "tags": ["市示范园", "生活即教育", "体质健康", "情感启蒙"],
        "location": {"lng": 121.4490, "lat": 31.1910},
        "tuition": {"amount": 700, "unit": "元/月", "isFree": False, "note": "示范园普惠标准保育费"},
        "enrollment": {"scope": "本区户籍/房产", "requirements": ["徐汇人户一致优先", "户籍满2年以上"], "hukouYearsRequired": 2, "hasFiveYearRule": True, "admissionDifficulty": "极高 (入户3年以上/低摇中率)", "catchmentAreas": ["宛南居委", "双峰居委", "南社居委"]},
        "academic": {"rigorLevel": "快乐素质 (重个性潜能/轻负担)", "foreignTeacherRatio": "基础 (每周外教口语课)", "classSize": 25, "curriculum": ["国家标准课程", "艺术/音乐/体育特色"], "features": ["生活自理与自主探究课程", "感统健康体能全天候运动", "绘本启蒙"], "schedule": "08:15 - 16:00"},
        "downstream": {"routeType": "体制内中高考", "targetSchools": ["汇师小学", "建襄小学", "向阳小学", "高安路一小"], "directPassRatio": "对口片区公办"},
        "reviews": {"parentRating": 4.9, "homeworkDuration": "无作业亲子活动", "pros": ["生活习惯养得极好", "老师非常温柔耐心", "膳食营养全区第一档"], "cons": ["入园名额紧张"], "parentFeedbackSample": "宛南在徐汇是传说级的幼儿园，伙食非常好，孩子自立能力和性格培养得极健康。"}
    },
    {
        "id": "xh-xiangyi-kindergarten", "name": "上海市徐汇区襄阳南路第一幼儿园", "shortName": "襄一幼",
        "stage": "kindergarten", "type": "public", "district": "徐汇区",
        "address": "徐汇区襄阳南路457号", "establishedYear": 1948,
        "tier": "市一级园", "badgeTag": "梧桐树下市一级园 · 美术艺术启蒙 · 人文温馨",
        "tags": ["市一级园", "衡复风貌", "美育特色", "老牌公立"],
        "location": {"lng": 121.4530, "lat": 31.2050},
        "tuition": {"amount": 225, "unit": "元/月", "isFree": False, "note": "公办一级园标准"},
        "enrollment": {"scope": "本区户籍/房产", "requirements": ["人户一致"], "hukouYearsRequired": 1, "hasFiveYearRule": True, "admissionDifficulty": "较高 (人户一致稳妥/摇号适中)", "catchmentAreas": ["襄阳居委", "建新居委", "永嘉居委"]},
        "academic": {"rigorLevel": "快乐素质 (重个性潜能/轻负担)", "foreignTeacherRatio": "基础 (每周外教口语课)", "classSize": 25, "curriculum": ["国家标准课程", "艺术/音乐/体育特色"], "features": ["儿童水墨与版画创意工坊", "梧桐街区建筑寻访"], "schedule": "08:15 - 16:00"},
        "downstream": {"routeType": "公民双轨可选", "targetSchools": ["向阳小学", "建襄小学", "世外小学"], "directPassRatio": "对口升学"},
        "reviews": {"parentRating": 4.7, "homeworkDuration": "无", "pros": ["艺术氛围浓厚", "老师亲和耐心", "位置核心优雅"], "cons": ["场地相对紧凑"], "parentFeedbackSample": "梧桐树下的精品幼儿园，美育活动特别棒，孩子的绘画和创造力激发得很好。"}
    }
]

print(f"Base expansion list holds {len(EXPANSION_LIST)} curated schools.")
