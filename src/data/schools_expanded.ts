import { School } from '../types/school';

export const EXPANDED_SCHOOLS: School[] = [
  {
    "id": "xh-gaoyi-primary",
    "name": "上海市徐汇区高安路第一小学 (高一小学)",
    "shortName": "高安路一小",
    "stage": "primary",
    "type": "public",
    "district": "徐汇区",
    "address": "徐汇区康平路4弄2号(康平校区) / 宛平南路255号",
    "establishedYear": 1955,
    "tier": "公办一梯队",
    "badgeTag": "徐汇四大公办 · 康平宛平双校区 · 艺术与学力双优",
    "tags": [
      "公办一梯队",
      "四大公办",
      "七彩教育",
      "艺术特色",
      "姚明母校"
    ],
    "location": {
      "lng": 121.4445,
      "lat": 31.2035
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "oversubscribedHistory": true,
      "catchmentAreas": [
        "康平居委",
        "吴兴居委",
        "宛平居委",
        "天平居委",
        "德仁居委"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程",
        "艺术/音乐/体育特色"
      ],
      "features": [
        "七彩阳光童年育人课程",
        "管乐团与金帆艺术社团全市顶尖",
        "篮球体育传统浓厚"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "南模初级中学",
        "徐汇中学",
        "市二初级中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入徐汇区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "注重综合素质与特长",
        "师资优秀稳定活动丰富"
      ],
      "cons": [
        "老洋房地段生源密集排位严格"
      ],
      "parentFeedbackSample": "高一的七彩教育让孩子充满自信，习惯培养极好。"
    }
  },
  {
    "id": "xh-yifu-primary",
    "name": "上海市民办逸夫小学",
    "shortName": "逸夫小学",
    "stage": "primary",
    "type": "private",
    "district": "徐汇区",
    "address": "徐汇区罗秀路400号",
    "establishedYear": 1996,
    "tier": "民办顶尖/头牌",
    "badgeTag": "徐汇四大民办 · 数理逻辑之王 · 科技艺术先锋",
    "tags": [
      "民办顶尖/头牌",
      "四大民办",
      "数理摇篮",
      "科技特色",
      "陶艺书法"
    ],
    "location": {
      "lng": 121.439,
      "lat": 31.1395
    },
    "tuition": {
      "amount": 20000,
      "unit": "元/学期",
      "isFree": false,
      "note": "物价局核准备案标准"
    },
    "enrollment": {
      "scope": "本区摇号",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": false,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "oversubscribedHistory": true,
      "catchmentAreas": [
        "全区电脑随机摇号派位"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "中配 (外教专职授课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "老牌数理逻辑与思维训练体系",
        "陶艺馆与少儿科学院特色校本",
        "英语与古文素养底蕴厚实"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "华育中学",
        "世外初中",
        "西南位育中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入徐汇区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "数学思维训练扎实高效",
        "陶艺和科技活动极其出色"
      ],
      "cons": [
        "摇中概率低竞争激烈"
      ],
      "parentFeedbackSample": "逸夫的数学思维和科技素养培养名不虚传，初中衔接毫无断层。"
    }
  },
  {
    "id": "xh-shanghai-primary",
    "name": "上海市上海小学",
    "shortName": "上海小学",
    "stage": "primary",
    "type": "public",
    "district": "徐汇区",
    "address": "徐汇区上中路100号",
    "establishedYear": 1903,
    "tier": "公办一梯队",
    "badgeTag": "百年名校 · 原上海中学初等部 · 治学严谨典范",
    "tags": [
      "百年老校",
      "公办一梯队",
      "底蕴深厚",
      "语文特色",
      "传统名校"
    ],
    "location": {
      "lng": 121.4382,
      "lat": 31.1388
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较高 (人户一致稳妥/摇号适中)",
      "oversubscribedHistory": false,
      "catchmentAreas": [
        "上中居委",
        "罗秀居委",
        "凌云居委部分"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "百年上中文脉传承大语文阅读",
        "少儿国学与科学探究体验",
        "扎实系统学科夯基"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "上海市南洋初级中学",
        "徐汇实验中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入徐汇区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "百年老校文脉深厚教风严谨",
        "基础扎实不浮躁"
      ],
      "cons": [
        "周边路段早晚较为拥挤"
      ],
      "parentFeedbackSample": "百年老校底蕴真的不一样，各科基础习惯打得非常牢固。"
    }
  },
  {
    "id": "xh-shsd-primary",
    "name": "上海师范大学第一附属小学 (上师大一附小)",
    "shortName": "上师大一附小",
    "stage": "primary",
    "type": "public",
    "district": "徐汇区",
    "address": "徐汇区桂林西街101弄56号",
    "establishedYear": 1999,
    "tier": "公办一梯队",
    "badgeTag": "师大教研依托 · 现代教育改革实验地 · 外语与科创标杆",
    "tags": [
      "公办一梯队",
      "高校教研",
      "双语浸润",
      "科创特色"
    ],
    "location": {
      "lng": 121.4178,
      "lat": 31.1685
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较高 (人户一致稳妥/摇号适中)",
      "oversubscribedHistory": false,
      "catchmentAreas": [
        "长青居委",
        "师大新村居委",
        "桂林西街居委"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程",
        "科创数理特色",
        "双语浸润课程"
      ],
      "features": [
        "依托上师大教育学教研直通课堂",
        "牛津双语口语浸润项目",
        "少儿人工智能实验室"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "中国中学",
        "康健外国语实验中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入徐汇区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "教研理念走在前沿不刷题",
        "英语和科创教学极其出色"
      ],
      "cons": [
        "生源多需提前落户"
      ],
      "parentFeedbackSample": "上师大教研背景让教学非常系统科学，孩子学得轻松扎实。"
    }
  },
  {
    "id": "xh-qiuzhi-primary",
    "name": "上海市徐汇区求知小学",
    "shortName": "求知小学",
    "stage": "primary",
    "type": "public",
    "district": "徐汇区",
    "address": "徐汇区习勤路91号",
    "establishedYear": 1904,
    "tier": "公办二梯队",
    "badgeTag": "百年名校 · 少年航天摇篮 · 求真笃行",
    "tags": [
      "公办二梯队",
      "百年底蕴",
      "航天科普",
      "数学强项"
    ],
    "location": {
      "lng": 121.433,
      "lat": 31.1712
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 0,
      "hasFiveYearRule": true,
      "admissionDifficulty": "中等",
      "oversubscribedHistory": false,
      "catchmentAreas": [
        "求知居委",
        "习勤居委",
        "康健路居委"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程",
        "科创数理特色"
      ],
      "features": [
        "少年航天科普创新院士项目",
        "校本求真课程",
        "思维敏捷数学训练"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "中国中学",
        "田林三中"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入徐汇区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风端正学风扎实",
        "航天科普活动多"
      ],
      "cons": [
        "周边街道略显狭窄"
      ],
      "parentFeedbackSample": "求知在老徐汇口碑非常好，航天模型俱乐部学到了很多。"
    }
  },
  {
    "id": "xh-yuannan-primary",
    "name": "上海市徐汇区园南小学",
    "shortName": "园南小学",
    "stage": "primary",
    "type": "public",
    "district": "徐汇区",
    "address": "徐汇区百色路231号",
    "establishedYear": 1993,
    "tier": "公办二梯队",
    "badgeTag": "南徐汇强校 · 园南教育集团核心 · 学风优良",
    "tags": [
      "公办二梯队",
      "集团化办学",
      "绿色生态",
      "排球特色"
    ],
    "location": {
      "lng": 121.442,
      "lat": 31.144
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 0,
      "hasFiveYearRule": true,
      "admissionDifficulty": "中等",
      "oversubscribedHistory": false,
      "catchmentAreas": [
        "园南一村",
        "园南二村",
        "园南三村",
        "百色路居委"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "植物生态探究",
        "少儿女子排球传统强校",
        "初小衔接扎实"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "园南中学",
        "长桥中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入徐汇区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "直升园南中学中考优异",
        "社区成熟生活便利"
      ],
      "cons": [
        "房龄较老但居住氛围好"
      ],
      "parentFeedbackSample": "园南小初衔接非常顺畅，园南中学是公办强校，九年省心。"
    }
  },
  {
    "id": "xh-tianlin3-primary",
    "name": "上海市徐汇区田林第三小学",
    "shortName": "田林三小",
    "stage": "primary",
    "type": "public",
    "district": "徐汇区",
    "address": "徐汇区田林十一村84号",
    "establishedYear": 1987,
    "tier": "公办二梯队",
    "badgeTag": "田林学区核心 · 计算机信息特色 · 扎实稳妥",
    "tags": [
      "公办二梯队",
      "田林核心",
      "信息技术",
      "扎实严谨"
    ],
    "location": {
      "lng": 121.425,
      "lat": 31.1735
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 0,
      "hasFiveYearRule": true,
      "admissionDifficulty": "中等",
      "oversubscribedHistory": false,
      "catchmentAreas": [
        "田林十一村",
        "田林十二村",
        "田林十三村"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "少儿编程与信息奥赛",
        "田林三中紧密型集团联动"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "田林第三中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入徐汇区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "双三学区性价比极高",
        "交通配套极为便利"
      ],
      "cons": [
        "老小区车位紧张"
      ],
      "parentFeedbackSample": "田林三小+三中性价比很高，老师负责，考上重点高中的很多。"
    }
  },
  {
    "id": "xh-tianlin1-primary",
    "name": "上海市徐汇区田林第一小学",
    "shortName": "田林一小",
    "stage": "primary",
    "type": "public",
    "district": "徐汇区",
    "address": "徐汇区田林东路100弄14号",
    "establishedYear": 1986,
    "tier": "普通优质公办",
    "badgeTag": "田林学区 · 乒乓与民乐特色 · 亲切温馨",
    "tags": [
      "普通优质公办",
      "田林核心",
      "乒乓传统",
      "民乐特色"
    ],
    "location": {
      "lng": 121.431,
      "lat": 31.175
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 0,
      "hasFiveYearRule": true,
      "admissionDifficulty": "中等",
      "oversubscribedHistory": false,
      "catchmentAreas": [
        "田林一村",
        "田林二村",
        "田林三村"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "少儿乒乓球传统训练",
        "红领巾少儿民乐演奏"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "田林中学",
        "田林三中"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入徐汇区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "老师亲切有耐心",
        "课业负担合理"
      ],
      "cons": [
        "升学相比一梯队稍平实"
      ],
      "parentFeedbackSample": "很规范的社区公办，老师很耐心，作业适中接送方便。"
    }
  },
  {
    "id": "xh-jiaoda-primary",
    "name": "上海交通大学附属小学 (交大附小)",
    "shortName": "交大附小",
    "stage": "primary",
    "type": "public",
    "district": "徐汇区",
    "address": "徐汇区宣平路1号",
    "establishedYear": 2004,
    "tier": "公办二梯队",
    "badgeTag": "交大高校共建 · 高校子弟生源 · 科技素养先锋",
    "tags": [
      "公办二梯队",
      "高校共建",
      "交大文脉",
      "思维科创"
    ],
    "location": {
      "lng": 121.434,
      "lat": 31.196
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较高 (人户一致稳妥/摇号适中)",
      "oversubscribedHistory": false,
      "catchmentAreas": [
        "南春居委",
        "交大新村",
        "淮海居委部分"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程",
        "科创数理特色"
      ],
      "features": [
        "交大教授进课堂",
        "机器人创新实验中心",
        "高学历家长社群"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "徐汇中学",
        "南模初级中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入徐汇区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "生源层次高家长素质好",
        "高校科研资源赋能多"
      ],
      "cons": [
        "规模紧凑学位有限"
      ],
      "parentFeedbackSample": "交大附小的生源和家校氛围极其好，很多高校老师家庭。"
    }
  },
  {
    "id": "xh-wannan-kindergarten",
    "name": "上海市徐汇区宛南实验幼儿园",
    "shortName": "宛南实验幼",
    "stage": "kindergarten",
    "type": "public",
    "district": "徐汇区",
    "address": "徐汇区零陵路北零弄2号 / 宛平南路校区",
    "establishedYear": 1979,
    "tier": "市示范园",
    "badgeTag": "上海市示范园 · 生活教育奠基 · 温暖健康",
    "tags": [
      "市示范园",
      "生活即教育",
      "体质健康",
      "情感启蒙"
    ],
    "location": {
      "lng": 121.449,
      "lat": 31.191
    },
    "tuition": {
      "amount": 700,
      "unit": "元/月",
      "isFree": false,
      "note": "市示范公办标准保育费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "oversubscribedHistory": true,
      "catchmentAreas": [
        "宛南居委",
        "双峰居委",
        "南社居委"
      ]
    },
    "academic": {
      "rigorLevel": "快乐素质 (重个性潜能/轻负担)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 25,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "生活自理与自主探究课程",
        "感统健康体能全天候运动",
        "绘本启蒙"
      ],
      "schedule": "08:15 - 16:00"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "汇师小学",
        "建襄小学",
        "向阳小学",
        "高安路一小"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入徐汇区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "无书面作业",
      "pros": [
        "生活习惯养得极好",
        "老师温柔耐心膳食一流"
      ],
      "cons": [
        "名额极其抢手"
      ],
      "parentFeedbackSample": "宛南在徐汇是传说级的幼儿园，伙食非常好，孩子自立能力强。"
    }
  },
  {
    "id": "xh-xiangyi-kindergarten",
    "name": "上海市徐汇区襄阳南路第一幼儿园",
    "shortName": "襄一幼",
    "stage": "kindergarten",
    "type": "public",
    "district": "徐汇区",
    "address": "徐汇区襄阳南路457号",
    "establishedYear": 1948,
    "tier": "市一级园",
    "badgeTag": "梧桐树下市一级园 · 美术艺术启蒙 · 人文温馨",
    "tags": [
      "市一级园",
      "衡复风貌",
      "美育特色",
      "老牌公立"
    ],
    "location": {
      "lng": 121.453,
      "lat": 31.205
    },
    "tuition": {
      "amount": 225,
      "unit": "元/月",
      "isFree": false,
      "note": "市示范公办标准保育费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较高 (人户一致稳妥/摇号适中)",
      "oversubscribedHistory": false,
      "catchmentAreas": [
        "襄阳居委",
        "建新居委",
        "永嘉居委"
      ]
    },
    "academic": {
      "rigorLevel": "快乐素质 (重个性潜能/轻负担)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 25,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "儿童水墨与版画创意工坊",
        "梧桐街区建筑寻访"
      ],
      "schedule": "08:15 - 16:00"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "向阳小学",
        "建襄小学",
        "世外小学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入徐汇区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "无书面作业",
      "pros": [
        "艺术氛围浓厚",
        "老师亲和位置优越"
      ],
      "cons": [
        "场地相对紧凑"
      ],
      "parentFeedbackSample": "梧桐树下的精品幼儿园，美育活动特别棒，孩子创造力强。"
    }
  },
  {
    "id": "hp-shiyan-primary",
    "name": "上海市实验小学",
    "shortName": "上海市实验小学",
    "stage": "primary",
    "type": "public",
    "district": "黄浦区",
    "address": "黄浦区露香园路242号",
    "establishedYear": 1936,
    "tier": "公办一梯队",
    "badgeTag": "教育部实验小学 · 百年实小 · 开放教育策源地",
    "tags": [
      "公办一梯队",
      "教育部直属",
      "百年名校",
      "开放教育"
    ],
    "location": {
      "lng": 121.482,
      "lat": 31.228
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "oversubscribedHistory": true,
      "catchmentAreas": [
        "露香园居委",
        "昼锦居委",
        "福佑居委"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "教育部重点实验校本课程",
        "探究性学习与开放课堂",
        "综合素养全优"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "敬业初级中学",
        "市八初级中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入黄浦区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "国家级名校底蕴",
        "教研与创新力一流"
      ],
      "cons": [
        "黄浦旧改生源结构变动"
      ],
      "parentFeedbackSample": "开放式教学让孩子思维活跃，不呆板，自主学习能力强。"
    }
  },
  {
    "id": "hp-luwan2-primary",
    "name": "上海市黄浦区卢湾第二中心小学",
    "shortName": "卢湾二中心",
    "stage": "primary",
    "type": "public",
    "district": "黄浦区",
    "address": "黄浦区永嘉路176号",
    "establishedYear": 1902,
    "tier": "公办一梯队",
    "badgeTag": "原卢湾核心一梯队 · 法租界百年名校 · 英语数理俱强",
    "tags": [
      "公办一梯队",
      "百年底蕴",
      "外语特色",
      "数学强项"
    ],
    "location": {
      "lng": 121.465,
      "lat": 31.211
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "oversubscribedHistory": true,
      "catchmentAreas": [
        "茂名居委",
        "瑞金二路居委",
        "陕西南路居委"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程",
        "科创数理特色",
        "双语浸润课程"
      ],
      "features": [
        "百年数学教学优势传统",
        "外语交际与跨文化视野",
        "学科思维培优"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "向明初级中学",
        "卢湾初级中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入黄浦区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "教学抓得极紧学风过硬",
        "升入向明初/卢湾初优势大"
      ],
      "cons": [
        "学业竞争压力不小"
      ],
      "parentFeedbackSample": "数理和英语打底极其牢固，初中进向明初完全不慌。"
    }
  },
  {
    "id": "hp-shangwai-primary",
    "name": "上海外国语大学附属黄浦外国语小学",
    "shortName": "上外黄浦外小",
    "stage": "primary",
    "type": "public",
    "district": "黄浦区",
    "address": "黄浦区半淞园路609号",
    "establishedYear": 2000,
    "tier": "公办一梯队",
    "badgeTag": "黄浦公办外语头牌 · 世博滨江名校 · 国际视野与学术双高",
    "tags": [
      "公办一梯队",
      "外语特长",
      "世博滨江",
      "大同初对口"
    ],
    "location": {
      "lng": 121.491,
      "lat": 31.202
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "oversubscribedHistory": true,
      "catchmentAreas": [
        "耀江花园居委",
        "迎勋居委",
        "西藏南路居委"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程",
        "双语浸润课程"
      ],
      "features": [
        "上外优质外语教研直通",
        "浸润式双语戏剧演出",
        "现代滨江智慧校园"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "大同初级中学",
        "立达初中"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入黄浦区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "英语能力全市公办顶尖",
        "生源素质极佳对口大同初"
      ],
      "cons": [
        "学区房单价总价高企"
      ],
      "parentFeedbackSample": "滨江神盘对口小学，外语口语好，对口大同初极其诱人。"
    }
  },
  {
    "id": "hp-caoguangbiao-primary",
    "name": "上海市曹光彪小学",
    "shortName": "曹光彪小学",
    "stage": "primary",
    "type": "public",
    "district": "黄浦区",
    "address": "黄浦区长沙路1号",
    "establishedYear": 1995,
    "tier": "公办二梯队",
    "badgeTag": "黄浦老牌二梯队 · 格致初中对口 · 游泳与棋类摇篮",
    "tags": [
      "公办二梯队",
      "格致初中",
      "体育特色",
      "棋类冠军"
    ],
    "location": {
      "lng": 121.472,
      "lat": 31.234
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 0,
      "hasFiveYearRule": true,
      "admissionDifficulty": "中等",
      "oversubscribedHistory": false,
      "catchmentAreas": [
        "北京居委",
        "长沙居委",
        "厦门居委"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "少儿国际象棋与围棋基地",
        "少儿游泳传统培训",
        "人广商圈综合实践"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "格致初级中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入黄浦区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "对口市中心顶尖初中格致初",
        "特色棋类体育出众"
      ],
      "cons": [
        "操场活动空间相对紧凑"
      ],
      "parentFeedbackSample": "为了对口格致初选曹光彪，小学本身抓得也细致，孩子思维灵活。"
    }
  },
  {
    "id": "hp-hehuachi-kindergarten",
    "name": "上海市黄浦区荷花池幼儿园",
    "shortName": "荷花池幼儿园",
    "stage": "kindergarten",
    "type": "public",
    "district": "黄浦区",
    "address": "黄浦区抚远路30号",
    "establishedYear": 1958,
    "tier": "市示范园",
    "badgeTag": "市示范园 · 艺术美育领航 · 快乐游戏乐园",
    "tags": [
      "市示范园",
      "艺术美育",
      "游戏化教学",
      "老牌公办"
    ],
    "location": {
      "lng": 121.488,
      "lat": 31.218
    },
    "tuition": {
      "amount": 700,
      "unit": "元/月",
      "isFree": false,
      "note": "市示范公办标准保育费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "oversubscribedHistory": true,
      "catchmentAreas": [
        "荷花池周边对口地段居委"
      ]
    },
    "academic": {
      "rigorLevel": "快乐素质 (重个性潜能/轻负担)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 25,
      "curriculum": [
        "国家标准课程",
        "艺术/音乐/体育特色"
      ],
      "features": [
        "儿童戏剧启蒙",
        "创意陶泥水墨艺术",
        "混龄角色扮演游戏"
      ],
      "schedule": "08:15 - 16:00"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "蓬莱路二小",
        "上海市实验小学",
        "卢湾一中心"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入黄浦区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "无书面作业",
      "pros": [
        "名师云集极具爱心",
        "艺术启蒙顶尖身心快乐"
      ],
      "cons": [
        "名额极为抢手"
      ],
      "parentFeedbackSample": "黄浦公办幼儿园顶流，老师对待孩子像妈妈一样，充满欢声笑语。"
    }
  },
  {
    "id": "ja-zhabei1-primary",
    "name": "上海市闸北第一中心小学",
    "shortName": "闸北一中心",
    "stage": "primary",
    "type": "public",
    "district": "静安区",
    "address": "静安区康乐路199号",
    "establishedYear": 1928,
    "tier": "公办一梯队",
    "badgeTag": "原闸北公办旗帜 · 童心教育理念 · 综合实力过硬",
    "tags": [
      "公办一梯队",
      "老牌名校",
      "童心教育",
      "现代教改"
    ],
    "location": {
      "lng": 121.478,
      "lat": 31.248
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "oversubscribedHistory": true,
      "catchmentAreas": [
        "康乐居委",
        "浙江北路居委",
        "安庆居委"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "陈伯吹儿童文学传承",
        "童心创客科学实验",
        "数理扎实夯底"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "风华初级中学",
        "青云中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入静安区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "治学严谨师资一流",
        "综合素养高公办出路强"
      ],
      "cons": [
        "老城厢路幅有限"
      ],
      "parentFeedbackSample": "闸北一中心是静安北区金字招牌，对习惯抓得细，初中表现非常好。"
    }
  },
  {
    "id": "ja-daning-primary",
    "name": "上海市大宁国际小学",
    "shortName": "大宁国际小学",
    "stage": "primary",
    "type": "public",
    "district": "静安区",
    "address": "静安区广延路77号",
    "establishedYear": 2007,
    "tier": "公办一梯队",
    "badgeTag": "静安北区新贵 · 国际化开放教育 · 大宁金名片",
    "tags": [
      "公办一梯队",
      "国际化",
      "开放教学",
      "大宁核心",
      "风华初对口"
    ],
    "location": {
      "lng": 121.458,
      "lat": 31.278
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "oversubscribedHistory": true,
      "catchmentAreas": [
        "大宁路居委",
        "慧芝湖居委",
        "广延居委"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "开放式模块化跨学科探究",
        "双语阅读与演讲课程",
        "数字化现代空间"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "风华初级中学 (西校区)",
        "大宁国际学校"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入静安区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "生源整齐高素质",
        "对口风华初中中考强"
      ],
      "cons": [
        "生源饱和学位紧张"
      ],
      "parentFeedbackSample": "软硬件极好，对口风华初是静安北区最强公办组合之一。"
    }
  },
  {
    "id": "ja-zhabeishiyan-primary",
    "name": "上海市闸北实验小学 (明和校区)",
    "shortName": "闸北实验小学",
    "stage": "primary",
    "type": "public",
    "district": "静安区",
    "address": "静安区大宁路670号",
    "establishedYear": 1993,
    "tier": "公办一梯队",
    "badgeTag": "静安老牌顶尖 · 大宁核心 · 学术与素质俱佳",
    "tags": [
      "公办一梯队",
      "大宁学区",
      "奥数强校",
      "风华初对口"
    ],
    "location": {
      "lng": 121.451,
      "lat": 31.275
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "oversubscribedHistory": true,
      "catchmentAreas": [
        "大宁新村居委",
        "明和苑居委",
        "延铁居委"
      ]
    },
    "academic": {
      "rigorLevel": "鸡血应试 (重分层/作业量扎实)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "数学思维分层训练",
        "科学探究实验室",
        "大宁实验集团辐射"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "风华初级中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入静安区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "公认老牌应试强校",
        "对口风华初中极其稳健"
      ],
      "cons": [
        "平时作业量较饱满"
      ],
      "parentFeedbackSample": "老牌口碑强校，抓得紧，孩子自律性好，升学直接对口风华初。"
    }
  },
  {
    "id": "ja-zhijiang-kindergarten",
    "name": "上海市静安区芷江中路幼儿园",
    "shortName": "芷江中路幼儿园",
    "stage": "kindergarten",
    "type": "public",
    "district": "静安区",
    "address": "静安区芷江中路205号",
    "establishedYear": 1948,
    "tier": "市示范园",
    "badgeTag": "市示范金字招牌 · 儿童早期创造力策源地 · 温馨关爱",
    "tags": [
      "市示范园",
      "创造力教育",
      "幼儿科创",
      "老牌公立"
    ],
    "location": {
      "lng": 121.468,
      "lat": 31.256
    },
    "tuition": {
      "amount": 700,
      "unit": "元/月",
      "isFree": false,
      "note": "市示范公办标准保育费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "oversubscribedHistory": true,
      "catchmentAreas": [
        "芷江西路街道对口地段居委"
      ]
    },
    "academic": {
      "rigorLevel": "快乐素质 (重个性潜能/轻负担)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 25,
      "curriculum": [
        "国家标准课程",
        "科创数理特色"
      ],
      "features": [
        "低幼动手实验与创造力探究",
        "户外生态自主探索",
        "早期阅读游戏"
      ],
      "schedule": "08:15 - 16:00"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "闸北第一中心小学",
        "静教院附校",
        "闸北实验小学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入静安区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "无书面作业",
      "pros": [
        "早期创新思维启蒙一流",
        "教师亲和细腻爱心充盈"
      ],
      "cons": [
        "学位竞争白热化"
      ],
      "parentFeedbackSample": "科学发现室全上海有名，孩子在这个环境里极其快乐有好奇心。"
    }
  },
  {
    "id": "pd-fushan-fushan-primary",
    "name": "上海福山外国语小学 (福山校区)",
    "shortName": "福山外小",
    "stage": "primary",
    "type": "public",
    "district": "浦东新区",
    "address": "浦东新区福山路48弄1号",
    "establishedYear": 1987,
    "tier": "公办一梯队",
    "badgeTag": "浦东四大公办 · 外语立校 · 陆家嘴优质生源地",
    "tags": [
      "公办一梯队",
      "四大公办",
      "外语特色",
      "陆家嘴",
      "进才北对口"
    ],
    "location": {
      "lng": 121.528,
      "lat": 31.232
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "oversubscribedHistory": true,
      "catchmentAreas": [
        "福山居委",
        "梅园新村部分居委",
        "松山居委"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程",
        "双语浸润课程"
      ],
      "features": [
        "福山国际理解教育课程",
        "浸润式牛津英语扩展",
        "全球姊妹校文化交流"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "进才中学北校",
        "建平西校"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入浦东新区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "英语底子全市公办顶级",
        "对口进才北中考战绩辉煌"
      ],
      "cons": [
        "福山校区老小区停车难"
      ],
      "parentFeedbackSample": "四年级就能自主阅读原版章节书，口语流利，进才北中考强。"
    }
  },
  {
    "id": "pd-liushi-yushan-primary",
    "name": "上海市第六师范附属小学 (羽山校区)",
    "shortName": "六师附小",
    "stage": "primary",
    "type": "public",
    "district": "浦东新区",
    "address": "浦东新区羽山路1476号",
    "establishedYear": 1906,
    "tier": "公办一梯队",
    "badgeTag": "浦东四大公办 · 百年师范底蕴 · 数学素养扎实",
    "tags": [
      "公办一梯队",
      "四大公办",
      "百年老校",
      "生源优异",
      "进才北对口"
    ],
    "location": {
      "lng": 121.551,
      "lat": 31.238
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "oversubscribedHistory": true,
      "catchmentAreas": [
        "羽山居委",
        "香山居委",
        "罗山居委部分"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "扎实数理思维校本课程",
        "百年师范教研传承",
        "书法民乐传统培育"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "进才中学北校",
        "罗山中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入浦东新区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "基本功扎实无比",
        "进才北对口稳健"
      ],
      "cons": [
        "平时作业练习抓得很紧"
      ],
      "parentFeedbackSample": "硬核小学，数理和习惯抓得极细，小学毕业后初中学习特别省心。"
    }
  },
  {
    "id": "pd-erzhongxin-primary",
    "name": "上海市浦东新区第二中心小学",
    "shortName": "浦东二中心",
    "stage": "primary",
    "type": "public",
    "district": "浦东新区",
    "address": "浦东新区巨野路517号",
    "establishedYear": 1889,
    "tier": "公办一梯队",
    "badgeTag": "浦东四大公办 · 百年沧桑老校 · 源远流长",
    "tags": [
      "公办一梯队",
      "四大公办",
      "百年学府",
      "德育先锋",
      "罗山学区"
    ],
    "location": {
      "lng": 121.545,
      "lat": 31.242
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "oversubscribedHistory": true,
      "catchmentAreas": [
        "巨野居委",
        "南洋泾居委",
        "泾东居委"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "百年文化素养立德树人",
        "少儿国画与民乐工坊",
        "全学科均衡深耕"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "罗山中学",
        "进才北校"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入浦东新区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "学风淳朴师德优良",
        "历史底蕴深厚校内稳定"
      ],
      "cons": [
        "相对明珠福山稍低调"
      ],
      "parentFeedbackSample": "二中心老底子深厚，不盲目加码但是抓得扎实，身心很健康。"
    }
  },
  {
    "id": "pd-jincai-primary",
    "name": "上海市进才实验小学",
    "shortName": "进才实验小学",
    "stage": "primary",
    "type": "public",
    "district": "浦东新区",
    "address": "浦东新区丁香路1289号",
    "establishedYear": 2008,
    "tier": "公办一梯队",
    "badgeTag": "联洋国际社区头牌 · 进才系核心 · 生源顶尖",
    "tags": [
      "公办一梯队",
      "联洋名盘",
      "进才系",
      "仁恒河滨城",
      "直升进才实验初"
    ],
    "location": {
      "lng": 121.558,
      "lat": 31.226
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "oversubscribedHistory": true,
      "catchmentAreas": [
        "联洋第一居委",
        "联洋第二居委",
        "仁恒河滨城居委"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "仁恒联洋优质生源聚拢",
        "探究性科学素养校本",
        "高阶思维俱乐部"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "进才实验中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入浦东新区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "直升进才实验初中中考顶尖",
        "生源纯粹学风优异"
      ],
      "cons": [
        "学区房总价高入户排位卷"
      ],
      "parentFeedbackSample": "进才实验小+初是浦东顶级双学区，家长素质高，学习氛围好。"
    }
  },
  {
    "id": "pd-haitong-yinghua-primary",
    "name": "上海市海桐小学 (樱花校区)",
    "shortName": "海桐小学",
    "stage": "primary",
    "type": "public",
    "district": "浦东新区",
    "address": "浦东新区樱花路469号",
    "establishedYear": 1998,
    "tier": "公办一梯队",
    "badgeTag": "花木学区头牌 · 世纪公园板块 · 建平西校对口",
    "tags": [
      "公办一梯队",
      "花木核心",
      "外语特色",
      "建平西校",
      "生态宜居"
    ],
    "location": {
      "lng": 121.554,
      "lat": 31.214
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "oversubscribedHistory": true,
      "catchmentAreas": [
        "海桐居委",
        "牡丹居委部分",
        "樱花居委"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程",
        "双语浸润课程"
      ],
      "features": [
        "双语交际与思维素养",
        "毗邻世纪公园生态课程",
        "学生自主管理体系"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "建平西校 (大唐校区)"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入浦东新区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "对口建平西校中考王牌",
        "环境优美毗邻世纪公园"
      ],
      "cons": [
        "早晚樱花路车流大"
      ],
      "parentFeedbackSample": "无论管理还是师资都很让人放心，英语抓得紧，对口建平西校初中。"
    }
  },
  {
    "id": "pd-huaer-qiantan-primary",
    "name": "华东师范大学第二附属中学前滩学校 (小学部)",
    "shortName": "华二前滩学校",
    "stage": "primary",
    "type": "public",
    "district": "浦东新区",
    "address": "浦东新区晴雪路28号",
    "establishedYear": 2018,
    "tier": "公办一梯队",
    "badgeTag": "前滩国际CBD顶流 · 华二血脉九年一贯 · 科技前沿",
    "tags": [
      "公办一梯队",
      "华二系",
      "前滩名片",
      "九年一贯",
      "直升初中"
    ],
    "location": {
      "lng": 121.492,
      "lat": 31.155
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "oversubscribedHistory": true,
      "catchmentAreas": [
        "前滩晶耀居委",
        "三林前滩地段",
        "九宫格楼盘群"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "华二拔尖创新人才早期培育课程",
        "人工智能机器人实验室",
        "九年贯通数理体系"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "华二前滩学校初中部 (九年一贯直升)"
      ],
      "directPassRatio": "本校内部九年一贯直升",
      "note": "对口升入浦东新区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "华二金字招牌本校直升",
        "前滩国际化高知生源"
      ],
      "cons": [
        "生源爆满学业竞争压力大"
      ],
      "parentFeedbackSample": "华二亲儿子，师资和生源都极强，九年一贯直升免去中考前折腾。"
    }
  },
  {
    "id": "pd-zhuyuan-primary",
    "name": "上海市竹园小学",
    "shortName": "竹园小学",
    "stage": "primary",
    "type": "public",
    "district": "浦东新区",
    "address": "浦东新区张杨路1050弄1号(潍坊校区) / 龙阳校区",
    "establishedYear": 1989,
    "tier": "公办二梯队",
    "badgeTag": "浦东老牌二梯队头牌 · 乐彩教育理念 · 围棋与艺术名校",
    "tags": [
      "公办二梯队",
      "乐彩教育",
      "围棋特色",
      "竹园集团"
    ],
    "location": {
      "lng": 121.531,
      "lat": 31.229
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 0,
      "hasFiveYearRule": true,
      "admissionDifficulty": "中等",
      "oversubscribedHistory": false,
      "catchmentAreas": [
        "竹园居委",
        "源深居委",
        "潍坊居委"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "全国围棋实验学校",
        "七彩个性化综合素养社团",
        "小升初基础厚实"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "进才北校",
        "洋泾菊园初中部"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入浦东新区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "老牌名校学风正",
        "围棋和艺术社团丰富"
      ],
      "cons": [
        "潍坊老校区场地有限"
      ],
      "parentFeedbackSample": "竹园小学的围棋特色非常出彩，老师抓得紧又很有亲和力。"
    }
  },
  {
    "id": "pd-punan-kindergarten",
    "name": "上海市浦东新区浦南幼儿园",
    "shortName": "浦南幼儿园",
    "stage": "kindergarten",
    "type": "public",
    "district": "浦东新区",
    "address": "浦东新区南码头路60弄15号",
    "establishedYear": 1983,
    "tier": "市示范园",
    "badgeTag": "市示范园 · 早期情感教育之父 · 充满爱与关怀",
    "tags": [
      "市示范园",
      "情感教育",
      "爱心育人",
      "老牌公办"
    ],
    "location": {
      "lng": 121.512,
      "lat": 31.198
    },
    "tuition": {
      "amount": 700,
      "unit": "元/月",
      "isFree": false,
      "note": "市示范公办标准保育费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "oversubscribedHistory": true,
      "catchmentAreas": [
        "南码头街道对口居委"
      ]
    },
    "academic": {
      "rigorLevel": "快乐素质 (重个性潜能/轻负担)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 25,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "情感教育国家级成果",
        "自主游戏式活动",
        "自然生态观察园"
      ],
      "schedule": "08:15 - 16:00"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "浦东南路小学",
        "明珠小学",
        "福山正达"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入浦东新区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "无书面作业",
      "pros": [
        "老师关爱细致入微",
        "孩子性格阳光自信"
      ],
      "cons": [
        "名额稀缺提前排位"
      ],
      "parentFeedbackSample": "情感教育名不虚传，老师给孩子很多安全感，在园里极其快乐。"
    }
  },
  {
    "id": "mh-shiyan-wanding-primary",
    "name": "上海市闵行区实验小学 (畹町校区)",
    "shortName": "闵实小(畹町)",
    "stage": "primary",
    "type": "public",
    "district": "闵行区",
    "address": "闵行区畹町路100号",
    "establishedYear": 2008,
    "tier": "公办一梯队",
    "badgeTag": "闵实小四大校区之一 · 莘庄春申核心 · 数字化未来名校",
    "tags": [
      "公办一梯队",
      "闵实小集团",
      "春申核心",
      "数字赋能",
      "莘松对口"
    ],
    "location": {
      "lng": 121.398,
      "lat": 31.109
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "oversubscribedHistory": true,
      "catchmentAreas": [
        "春申景城居委部分",
        "畹町居委",
        "高兴花园部分"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "共享闵实小百年优质教研大库",
        "启智未来创客工坊",
        "全学科数字化评价"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "莘松中学 (春申校区)"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入闵行区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "共享闵实小顶尖师资教研",
        "对口莘松初中中考辉煌"
      ],
      "cons": [
        "早晚高峰车流量大"
      ],
      "parentFeedbackSample": "完全继承了闵实小的扎实作风，对口莘松初中是闵行公办天花板。"
    }
  },
  {
    "id": "mh-qibaoshiyan-primary",
    "name": "上海市七宝实验小学",
    "shortName": "七宝实验小学",
    "stage": "primary",
    "type": "public",
    "district": "闵行区",
    "address": "闵行区静安新城十四区59号",
    "establishedYear": 1997,
    "tier": "公办一梯队",
    "badgeTag": "静安新城核心 · 七宝教育集团王牌 · 初小连贯",
    "tags": [
      "公办一梯队",
      "七宝系",
      "静安新城",
      "科技实验",
      "对口直升"
    ],
    "location": {
      "lng": 121.378,
      "lat": 31.155
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较高 (人户一致稳妥/摇号适中)",
      "oversubscribedHistory": false,
      "catchmentAreas": [
        "静安新城居委",
        "大浪淘沙居委",
        "龙柏部分居委"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "七宝中学优质基因贯通",
        "少儿思维挑战与奥赛拓展",
        "小发明创新实践"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "七宝实验中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入闵行区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "七宝实验小+初强强联合",
        "中考市重点率高学风踏实"
      ],
      "cons": [
        "小区体量大生源竞争激烈"
      ],
      "parentFeedbackSample": "七宝实验是公认王牌公办，管理严格，老师负责，升学指标稳健。"
    }
  },
  {
    "id": "mh-fudanmh-primary",
    "name": "复旦大学附属闵行实验小学",
    "shortName": "复旦闵行实验",
    "stage": "primary",
    "type": "public",
    "district": "闵行区",
    "address": "闵行区景洪路858号",
    "establishedYear": 2020,
    "tier": "公办一梯队",
    "badgeTag": "复旦名校共建 · 滨江科创带新标杆 · 顶级高校赋能",
    "tags": [
      "公办一梯队",
      "复旦高校",
      "梅陇核心",
      "大学共建",
      "高起点"
    ],
    "location": {
      "lng": 121.432,
      "lat": 31.118
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较高 (人户一致稳妥/摇号适中)",
      "oversubscribedHistory": false,
      "catchmentAreas": [
        "景洪居委",
        "梅陇新村",
        "金都居委部分"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "复旦大学教授科普讲堂",
        "少儿人工智能实训室",
        "跨学科博雅阅读"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "复旦大学附属闵行实验学校初中部"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入闵行区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "复旦品牌资源丰富",
        "新校区硬件一流师资年轻"
      ],
      "cons": [
        "新办学校积淀中"
      ],
      "parentFeedbackSample": "复旦共建资源多，老师很多是名校硕士，上课启发式教学孩子爱思考。"
    }
  },
  {
    "id": "mh-tianyuan-primary",
    "name": "上海市田园外语实验小学",
    "shortName": "田园外小",
    "stage": "primary",
    "type": "public",
    "district": "闵行区",
    "address": "闵行区都市路4388号",
    "establishedYear": 2002,
    "tier": "公办二梯队",
    "badgeTag": "闵行外语公办名校 · 快乐田园教育 · 口语交际极佳",
    "tags": [
      "公办二梯队",
      "外语特色",
      "田园都市",
      "快乐学习"
    ],
    "location": {
      "lng": 121.405,
      "lat": 31.089
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 0,
      "hasFiveYearRule": true,
      "admissionDifficulty": "中等",
      "oversubscribedHistory": false,
      "catchmentAreas": [
        "田园新村居委",
        "都市路居委",
        "君莲居委部分"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程",
        "双语浸润课程"
      ],
      "features": [
        "田园诗意校园文化",
        "外语情景口语展演",
        "生态自然科技农场"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "田园第一中学",
        "莘松中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入闵行区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "英语特色突出校园美",
        "课业负担合理注重心智健康"
      ],
      "cons": [
        "应试强度较温和"
      ],
      "parentFeedbackSample": "田园外小环境好，英语老师用心，孩子不排斥学英语，童年幸福。"
    }
  },
  {
    "id": "mh-yilin-kindergarten",
    "name": "上海市闵行区依霖幼儿园",
    "shortName": "依霖幼儿园",
    "stage": "kindergarten",
    "type": "public",
    "district": "闵行区",
    "address": "闵行区莘庄镇莘朱路222弄37号",
    "establishedYear": 1999,
    "tier": "市示范园",
    "badgeTag": "市示范园 · 艺术潜能启蒙 · 阳光温馨",
    "tags": [
      "市示范园",
      "艺术潜能",
      "莘庄核心",
      "公办领航"
    ],
    "location": {
      "lng": 121.391,
      "lat": 31.102
    },
    "tuition": {
      "amount": 700,
      "unit": "元/月",
      "isFree": false,
      "note": "市示范公办标准保育费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "oversubscribedHistory": true,
      "catchmentAreas": [
        "莘庄镇对口划片居委"
      ]
    },
    "academic": {
      "rigorLevel": "快乐素质 (重个性潜能/轻负担)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 25,
      "curriculum": [
        "国家标准课程",
        "艺术/音乐/体育特色"
      ],
      "features": [
        "幼儿打击乐与形体律动",
        "自主创造性游戏区角",
        "亲子自然种植"
      ],
      "schedule": "08:15 - 16:00"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "闵实小",
        "明强小学",
        "七宝外国语小学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入闵行区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "无书面作业",
      "pros": [
        "示范园口碑极佳",
        "老师专业负责活动丰富"
      ],
      "cons": [
        "每年竞争激烈需提前入户"
      ],
      "parentFeedbackSample": "莘庄家长公认最好的公办园，每天都充满笑脸，习惯培养得极好。"
    }
  },
  {
    "id": "cn-yuyuan1-primary",
    "name": "上海市长宁区愚园路第一小学",
    "shortName": "愚一小学",
    "stage": "primary",
    "type": "public",
    "district": "长宁区",
    "address": "长宁区愚园路1218弄21号",
    "establishedYear": 1934,
    "tier": "公办一梯队",
    "badgeTag": "长宁公办双壁之一 · 百年人文老校 · 综合素养领头羊",
    "tags": [
      "公办一梯队",
      "长宁双雄",
      "百年底蕴",
      "延安初中对口",
      "人文沃土"
    ],
    "location": {
      "lng": 121.425,
      "lat": 31.218
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "oversubscribedHistory": true,
      "catchmentAreas": [
        "愚一居委",
        "安西居委",
        "岐山居委"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "百年愚园人文阅读校本",
        "红领巾少儿管乐团",
        "学科扎实稳健"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "延安初级中学",
        "市三女初"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入长宁区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "长宁教育门面担当",
        "对口延安初中王牌初中"
      ],
      "cons": [
        "周边弄堂停车难"
      ],
      "parentFeedbackSample": "愚一学风温和坚定，综合素养高，对口延安初是长宁最稳路径。"
    }
  },
  {
    "id": "cn-cnshiyan-primary",
    "name": "上海市长宁实验小学",
    "shortName": "长宁实验小学",
    "stage": "primary",
    "type": "public",
    "district": "长宁区",
    "address": "长宁区云雾山路35号",
    "establishedYear": 1990,
    "tier": "公办一梯队",
    "badgeTag": "长宁新名牌 · 仙霞天山核心 · 科技艺术先锋",
    "tags": [
      "公办一梯队",
      "长宁实验",
      "科创教育",
      "天山学区"
    ],
    "location": {
      "lng": 121.402,
      "lat": 31.209
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较高 (人户一致稳妥/摇号适中)",
      "oversubscribedHistory": false,
      "catchmentAreas": [
        "古南居委",
        "云雾山居委",
        "天山五村居委部分"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程",
        "科创数理特色"
      ],
      "features": [
        "未来工程师科技探究",
        "现代艺术创新设计",
        "数理逻辑训练"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "娄山中学",
        "天山初级中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入长宁区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "硬件设施好科技赛频获奖",
        "小升初对口出路稳"
      ],
      "cons": [
        "生源竞争较激烈"
      ],
      "parentFeedbackSample": "长宁实验口碑非常好，老师敬业，科技项目多，思维很活络。"
    }
  },
  {
    "id": "cn-jianqing-primary",
    "name": "上海市建青实验学校 (小学部)",
    "shortName": "建青实验学校",
    "stage": "primary",
    "type": "public",
    "district": "长宁区",
    "address": "长宁区古羊路1111号",
    "establishedYear": 1955,
    "tier": "公办一梯队",
    "badgeTag": "十五年一贯制实验航母 · 古北古羊路 · 手球与外语名校",
    "tags": [
      "公办一梯队",
      "一贯制",
      "古北国际社区",
      "手球名校",
      "保送直升"
    ],
    "location": {
      "lng": 121.399,
      "lat": 31.192
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较高 (人户一致稳妥/摇号适中)",
      "oversubscribedHistory": false,
      "catchmentAreas": [
        "古北新城居委",
        "古羊居委",
        "名都城部分居委"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "上海公办十五年一贯制",
        "全国少儿手球冠军基地",
        "多元外语国际礼仪"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "建青实验学校初中部 (直升)"
      ],
      "directPassRatio": "本校内部九年一贯直升",
      "note": "对口升入长宁区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "十五年一贯制直升省心",
        "古北国际社区环境优雅"
      ],
      "cons": [
        "直升体制下竞争感较平缓"
      ],
      "parentFeedbackSample": "建青一贯制不用操心中考排位，硬件在长宁公办里数一数二。"
    }
  },
  {
    "id": "pt-wuning-primary",
    "name": "上海市普陀区武宁路小学",
    "shortName": "武宁路小学",
    "stage": "primary",
    "type": "public",
    "district": "普陀区",
    "address": "普陀区武宁一村211号",
    "establishedYear": 1957,
    "tier": "公办一梯队",
    "badgeTag": "普陀三大公办之一 · 科技数理强校 · 扎实严谨",
    "tags": [
      "公办一梯队",
      "普陀三强",
      "科技先锋",
      "数学扎实"
    ],
    "location": {
      "lng": 121.432,
      "lat": 31.239
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "oversubscribedHistory": true,
      "catchmentAreas": [
        "武宁一村居委",
        "新安公寓居委",
        "东新路居委"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程",
        "科创数理特色"
      ],
      "features": [
        "全国青少年科技创新摇篮",
        "数理模型思维校本",
        "课业夯基提优体系"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "武宁中学",
        "梅陇中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入普陀区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "应试质量极过硬",
        "科创比赛荣誉等身"
      ],
      "cons": [
        "平时作业量饱满"
      ],
      "parentFeedbackSample": "武宁路小学是普陀响当当的第一梯队，老师对孩子习惯抓得极牢。"
    }
  },
  {
    "id": "pt-zhaochun-primary",
    "name": "上海市普陀区朝春中心小学",
    "shortName": "朝春中心小学",
    "stage": "primary",
    "type": "public",
    "district": "普陀区",
    "address": "普陀区榕树路18号",
    "establishedYear": 1999,
    "tier": "公办一梯队",
    "badgeTag": "曹杨核心顶流 · 朝气蓬勃 · 艺术与体育传统名校",
    "tags": [
      "公办一梯队",
      "普陀三强",
      "曹杨新村",
      "健美操艺术",
      "快乐成长"
    ],
    "location": {
      "lng": 121.405,
      "lat": 31.238
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "oversubscribedHistory": true,
      "catchmentAreas": [
        "朝春居委",
        "曹杨二村居委",
        "花溪路居委"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程",
        "艺术/音乐/体育特色"
      ],
      "features": [
        "少儿健美操与排球冠军摇篮",
        "管弦乐团与合唱社团",
        "阳光成长课程"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "曹杨二中附属学校初中部",
        "兰田中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入普陀区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "注重素质与学术平衡",
        "曹杨新村绿化环境优"
      ],
      "cons": [
        "学位常年饱和"
      ],
      "parentFeedbackSample": "朝春是很多普陀家长的梦想公办，孩子阳光，健美操和乐团全市拔尖。"
    }
  },
  {
    "id": "pt-jinyuan-primary",
    "name": "上海市晋元高级中学附属学校 (小学部)",
    "shortName": "晋元附校",
    "stage": "primary",
    "type": "public",
    "district": "普陀区",
    "address": "普陀区真金路512号",
    "establishedYear": 1999,
    "tier": "公办一梯队",
    "badgeTag": "万里城核心航母 · 九年一贯直升 · 普陀中考硬核力量",
    "tags": [
      "公办一梯队",
      "万里城",
      "九年一贯",
      "直升名校",
      "中考王牌"
    ],
    "location": {
      "lng": 121.412,
      "lat": 31.268
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "oversubscribedHistory": true,
      "catchmentAreas": [
        "万里名轩居委",
        "中环家园居委",
        "香泉路居委"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "初小九年贯通大教研",
        "理科思维拓展实验班",
        "走班分层教学"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "晋元附校初中部 (九年一贯直升)"
      ],
      "directPassRatio": "本校内部九年一贯直升",
      "note": "对口升入普陀区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "九年一贯直升普陀顶级初中",
        "中考市重点率极高"
      ],
      "cons": [
        "学业竞争压力大"
      ],
      "parentFeedbackSample": "晋元附校是普陀公办中考的神，直升免去择校烦恼，老师抓得紧出成绩。"
    }
  },
  {
    "id": "yp-ershifu-primary",
    "name": "上海市第二师范附属小学",
    "shortName": "二师附小",
    "stage": "primary",
    "type": "public",
    "district": "杨浦区",
    "address": "杨浦区大连路1530号",
    "establishedYear": 1958,
    "tier": "公办一梯队",
    "badgeTag": "杨浦四大公办之一 · 师范教研标杆 · 语文与全人素养",
    "tags": [
      "公办一梯队",
      "四大名校",
      "师范教研",
      "大语文高地",
      "铁岭对口"
    ],
    "location": {
      "lng": 121.505,
      "lat": 31.272
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "oversubscribedHistory": true,
      "catchmentAreas": [
        "二师附小周边对口居委",
        "四平路街道部分"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "海派大语文阅读与写作高地",
        "师范院校教研团队指导",
        "少儿合唱民乐团队"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "铁岭中学",
        "鞍山初级中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入杨浦区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "语文教学公办标杆",
        "校风端正对口铁岭中学中考好"
      ],
      "cons": [
        "老校区早晚交通繁忙"
      ],
      "parentFeedbackSample": "大语文底子打得无与伦比，表达能力和写作思维被老师启发得很好。"
    }
  },
  {
    "id": "yp-yangpu-primary",
    "name": "上海市杨浦小学",
    "shortName": "杨浦小学",
    "stage": "primary",
    "type": "public",
    "district": "杨浦区",
    "address": "杨浦区安波路151号",
    "establishedYear": 1958,
    "tier": "公办一梯队",
    "badgeTag": "杨浦四大公办之一 · 黄兴安波双校区 · 均衡扎实名校",
    "tags": [
      "公办一梯队",
      "四大名校",
      "集团化办学",
      "综合强校"
    ],
    "location": {
      "lng": 121.532,
      "lat": 31.298
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "oversubscribedHistory": true,
      "catchmentAreas": [
        "安波路居委",
        "黄兴绿园居委",
        "民星路部分居委"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "大学环绕学术氛围浓厚",
        "生态探究生命教育",
        "数理思维双线共进"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "上海市黄兴学校初中部",
        "鞍山实验中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入杨浦区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "综合教学实力稳健",
        "校园宽敞家校氛围好"
      ],
      "cons": [
        "划片范围广生源多"
      ],
      "parentFeedbackSample": "杨浦小学的老师非常负责，作业不盲目刷题，注重自主思考习惯。"
    }
  },
  {
    "id": "yp-qiqihaer1-primary",
    "name": "上海市杨浦区齐齐哈尔路第一小学",
    "shortName": "齐一小学",
    "stage": "primary",
    "type": "public",
    "district": "杨浦区",
    "address": "杨浦区齐齐哈尔路173号",
    "establishedYear": 1947,
    "tier": "公办一梯队",
    "badgeTag": "杨浦四大公办之一 · 滨江老牌名校 · 科技体育双优",
    "tags": [
      "公办一梯队",
      "四大名校",
      "杨浦滨江",
      "游泳传统",
      "惠民对口"
    ],
    "location": {
      "lng": 121.538,
      "lat": 31.265
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "oversubscribedHistory": true,
      "catchmentAreas": [
        "齐一居委",
        "锦州湾居委",
        "平凉居委部分"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "上海市少儿游泳传统训练",
        "机器人创造力工坊",
        "扎实基础学科训练"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "惠民中学",
        "上音实验学校"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入杨浦区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "滨江老底子强校",
        "游泳项目全市知名学风扎实"
      ],
      "cons": [
        "校门道路稍窄"
      ],
      "parentFeedbackSample": "齐一的老师敬业奉献，各科抓得极为扎实，游泳训练让孩子体质棒。"
    }
  },
  {
    "id": "hk-sanzhongxin3-primary",
    "name": "上海市虹口区第三中心小学",
    "shortName": "虹口三中心",
    "stage": "primary",
    "type": "public",
    "district": "虹口区",
    "address": "虹口区山阴路103弄3号",
    "establishedYear": 1935,
    "tier": "公办一梯队",
    "badgeTag": "鲁迅故里百年名校 · 山阴路风貌区 · 人文文学底蕴",
    "tags": [
      "公办一梯队",
      "山阴路风貌",
      "人文名校",
      "鲁迅初中对口",
      "书香校园"
    ],
    "location": {
      "lng": 121.488,
      "lat": 31.272
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "oversubscribedHistory": true,
      "catchmentAreas": [
        "山阴居委",
        "吉祥居委",
        "多伦居委"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "鲁迅文学特色少儿读写社团",
        "多伦路红领巾历史寻访",
        "人文素养培育"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "鲁迅初级中学",
        "华师大一附中初中"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入虹口区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "人文底蕴极具格调",
        "老师文化素养高生源好"
      ],
      "cons": [
        "历史建筑保护限制扩建"
      ],
      "parentFeedbackSample": "走在山阴路梧桐树下就是一种熏陶，语文和写作底子极其扎实。"
    }
  },
  {
    "id": "hk-hongqi-primary",
    "name": "上海市红旗小学",
    "shortName": "红旗小学",
    "stage": "primary",
    "type": "public",
    "district": "虹口区",
    "address": "虹口区曲阳路485弄15号",
    "establishedYear": 1958,
    "tier": "公办一梯队",
    "badgeTag": "曲阳学区王牌 · 科技与数理实验校 · 学术过硬",
    "tags": [
      "公办一梯队",
      "曲阳核心",
      "数学奥林匹克",
      "学风硬核"
    ],
    "location": {
      "lng": 121.492,
      "lat": 31.285
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较高 (人户一致稳妥/摇号适中)",
      "oversubscribedHistory": false,
      "catchmentAreas": [
        "曲阳新村居委",
        "密云居委",
        "玉田居委部分"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程",
        "科创数理特色"
      ],
      "features": [
        "数学思维强化拓展",
        "青少年创客发明工作室",
        "过硬应试学科培优"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "运光学校初中部",
        "迅行中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入虹口区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "数学教研非常厉害",
        "曲阳成熟社区生活便利"
      ],
      "cons": [
        "课业负担较重"
      ],
      "parentFeedbackSample": "抓学习极其认真，数学逻辑训练在虹口公办首屈一指，初中接轨快。"
    }
  },
  {
    "id": "hk-shangwaifuxiao-primary",
    "name": "上海外国语大学附属民办外国语小学",
    "shortName": "上外附小",
    "stage": "primary",
    "type": "private",
    "district": "虹口区",
    "address": "虹口区车站北路739号",
    "establishedYear": 2005,
    "tier": "民办顶尖/头牌",
    "badgeTag": "上海民办天花板之一 · 神仙学校上外附中直系 · 外语数理双绝",
    "tags": [
      "民办顶尖/头牌",
      "神仙附小",
      "上外系",
      "英语天花板",
      "奥数尖子"
    ],
    "location": {
      "lng": 121.488,
      "lat": 31.295
    },
    "tuition": {
      "amount": 21000,
      "unit": "元/学期",
      "isFree": false,
      "note": "物价局核准备案标准"
    },
    "enrollment": {
      "scope": "本区摇号",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": false,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "oversubscribedHistory": true,
      "catchmentAreas": [
        "上海市全域摇号派位"
      ]
    },
    "academic": {
      "rigorLevel": "鸡血应试 (重分层/作业量扎实)",
      "foreignTeacherRatio": "中配 (外教专职授课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "上外附中一贯外语教学法",
        "高阶全英文辩论与戏剧",
        "顶尖奥数逻辑思维贯穿"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "上外附中 (神仙学校)",
        "上外附中东校",
        "华育中学",
        "兰生复旦"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入虹口区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "英语和综合学力全市拔尖",
        "上外附中录取人数冠绝全沪"
      ],
      "cons": [
        "摇号难度极高竞争极其激烈"
      ],
      "parentFeedbackSample": "五年在校，英语听力和思维达到母语水平，数理同样极强！"
    }
  },
  {
    "id": "bs-shiyan-primary",
    "name": "上海市宝山区实验小学",
    "shortName": "宝山实验小学",
    "stage": "primary",
    "type": "public",
    "district": "宝山区",
    "address": "宝山区东林路69号",
    "establishedYear": 1903,
    "tier": "公办一梯队",
    "badgeTag": "百年名校 · 宝山公办第一头牌 · 综合素养航母",
    "tags": [
      "公办一梯队",
      "百年底蕴",
      "宝山第一",
      "科技领先",
      "友谊学区"
    ],
    "location": {
      "lng": 121.488,
      "lat": 31.405
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "oversubscribedHistory": true,
      "catchmentAreas": [
        "友谊路街道对口居委",
        "临江新村居委",
        "密山居委"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "百年文化积淀校本课程",
        "全国少儿科创标兵工作室",
        "机器人与人工智能实验"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "宝山实验学校初中部",
        "宝山第一初级中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入宝山区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "宝山公办绝对天花板",
        "考入市重点高中率全区最高"
      ],
      "cons": [
        "老城区学区房房龄较老"
      ],
      "parentFeedbackSample": "宝山公办首屈一指的存在，老师水准高有爱心，综合素质抓得极好。"
    }
  },
  {
    "id": "bs-bs1-primary",
    "name": "上海市宝山区第一中心小学",
    "shortName": "宝山一中心",
    "stage": "primary",
    "type": "public",
    "district": "宝山区",
    "address": "宝山区密山路20号",
    "establishedYear": 1948,
    "tier": "公办一梯队",
    "badgeTag": "宝山公办中坚 · 密山路核心 · 扎实稳妥",
    "tags": [
      "公办一梯队",
      "老牌名校",
      "宝山双雄",
      "学风淳厚"
    ],
    "location": {
      "lng": 121.482,
      "lat": 31.401
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较高 (人户一致稳妥/摇号适中)",
      "oversubscribedHistory": false,
      "catchmentAreas": [
        "密山二村",
        "宝林新村居委",
        "宝山一村部分"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "基础学科扎实严谨",
        "少儿民乐与书法传承",
        "科技实践活动丰富"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "宝山实验学校初中部",
        "行知实验中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入宝山区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "教风扎实稳健老牌口碑好",
        "学费全免规范有序"
      ],
      "cons": [
        "宣传相对低调"
      ],
      "parentFeedbackSample": "宝山一中心是老牌强校，老师认真负责，初中升学很让人放心。"
    }
  },
  {
    "id": "bs-gucun-primary",
    "name": "上海市顾村实验学校 (小学部)",
    "shortName": "顾村实验学校",
    "stage": "primary",
    "type": "public",
    "district": "宝山区",
    "address": "宝山区顾北路168号",
    "establishedYear": 2015,
    "tier": "公办二梯队",
    "badgeTag": "顾村大居核心新秀 · 世外托管协同 · 现代九年一贯",
    "tags": [
      "公办二梯队",
      "顾村核心",
      "世外协同",
      "九年一贯",
      "现代校舍"
    ],
    "location": {
      "lng": 121.368,
      "lat": 31.365
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 0,
      "hasFiveYearRule": true,
      "admissionDifficulty": "中等",
      "oversubscribedHistory": false,
      "catchmentAreas": [
        "顾村馨佳苑居委",
        "顾北路居委",
        "共富新村部分居委"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "上海世外教育集团托管支持",
        "国际化素养融合课程",
        "宽敞现代化智慧校区"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "顾村实验学校初中部 (九年一贯直升)"
      ],
      "directPassRatio": "本校内部九年一贯直升",
      "note": "对口升入宝山区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "世外托管理念更新快",
        "九年一贯直升免升学压力"
      ],
      "cons": [
        "大居上下学高峰车流量大"
      ],
      "parentFeedbackSample": "世外托管之后教学理念更新很快，英语活动丰富，九年一贯免去升学压力。"
    }
  },
  {
    "id": "jd-putong-primary",
    "name": "上海市嘉定区普通小学",
    "shortName": "嘉定普通小学",
    "stage": "primary",
    "type": "public",
    "district": "嘉定区",
    "address": "嘉定区金沙路135号",
    "establishedYear": 1901,
    "tier": "公办一梯队",
    "badgeTag": "嘉定第一公办名校 · 历史百年醇厚 · 儒雅君子学风",
    "tags": [
      "公办一梯队",
      "百年学府",
      "嘉定第一",
      "教研高地",
      "儒风雅正"
    ],
    "location": {
      "lng": 121.258,
      "lat": 31.385
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "oversubscribedHistory": true,
      "catchmentAreas": [
        "嘉定镇街道金沙居委",
        "李园居委",
        "梅园居委"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "做最好的自己育人哲学",
        "全国青少年科学调查体验基地",
        "国学与诗词雅集"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "嘉定区启良中学",
        "嘉定一中附中"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入嘉定区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "嘉定公办第一金字招牌",
        "百年底蕴师资深厚生源好"
      ],
      "cons": [
        "老城中心学区房受追捧"
      ],
      "parentFeedbackSample": "普通小学名气在嘉定绝对第一，校风极其正派，老师尽职负责。"
    }
  },
  {
    "id": "jd-jdshiyan-primary",
    "name": "上海市嘉定区实验小学",
    "shortName": "嘉定实验小学",
    "stage": "primary",
    "type": "public",
    "district": "嘉定区",
    "address": "嘉定区平城路1055号",
    "establishedYear": 1999,
    "tier": "公办一梯队",
    "badgeTag": "嘉定新城与老城枢纽 · 科技与艺术双飞 · 现代名校",
    "tags": [
      "公办一梯队",
      "科技创新",
      "嘉定实验",
      "全面发展",
      "一中附中对口"
    ],
    "location": {
      "lng": 121.242,
      "lat": 31.392
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较高 (人户一致稳妥/摇号适中)",
      "oversubscribedHistory": false,
      "catchmentAreas": [
        "平城居委",
        "菊园新区部分居委",
        "嘉枫居委"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "汽车城少年科技创新课程",
        "智慧少儿编程与创意实践",
        "高效课堂模式"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "嘉定一中附属初级中学",
        "疁城实验初中"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入嘉定区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "硬件现代师资充沛",
        "对口嘉定一中附初中考优异"
      ],
      "cons": [
        "对口生源多"
      ],
      "parentFeedbackSample": "嘉定实验小学的科技和数理抓得很好，依托汽车城科技资源开阔眼界。"
    }
  },
  {
    "id": "jd-nanxiang-primary",
    "name": "上海市嘉定区南翔小学",
    "shortName": "南翔小学",
    "stage": "primary",
    "type": "public",
    "district": "嘉定区",
    "address": "嘉定区南翔镇古猗园路737号",
    "establishedYear": 1908,
    "tier": "公办二梯队",
    "badgeTag": "千年古镇文化名校 · 古猗园畔书香 · 艺术人文浓郁",
    "tags": [
      "公办二梯队",
      "百年古镇",
      "古猗园",
      "南翔核心"
    ],
    "location": {
      "lng": 121.315,
      "lat": 31.298
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 0,
      "hasFiveYearRule": true,
      "admissionDifficulty": "中等",
      "oversubscribedHistory": false,
      "catchmentAreas": [
        "古猗园社区居委",
        "南翔老街居委",
        "德华居委"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "南翔非遗古镇文化校本",
        "少儿国画古筝民乐",
        "扎实课业"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "南翔中学",
        "嘉定二中初中部"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入嘉定区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "文化底蕴好环境静谧",
        "老师耐心亲切接送方便"
      ],
      "cons": [
        "升学相比普通小学稍平和"
      ],
      "parentFeedbackSample": "古猗园边的百年老校，环境优美，老师很亲切，南翔本土家庭首选。"
    }
  },
  {
    "id": "sj-yueyang-primary",
    "name": "上海市松江区岳阳小学",
    "shortName": "松江岳阳小学",
    "stage": "primary",
    "type": "public",
    "district": "松江区",
    "address": "松江区岳阳街道人民北路170号",
    "establishedYear": 1902,
    "tier": "公办一梯队",
    "badgeTag": "松江第一名小 · 百年二陆文脉 · 严谨治学领跑松江",
    "tags": [
      "公办一梯队",
      "松江第一",
      "百年老校",
      "二陆文脉",
      "松江二中源头"
    ],
    "location": {
      "lng": 121.228,
      "lat": 31.012
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "oversubscribedHistory": true,
      "catchmentAreas": [
        "岳阳街道对口居委",
        "黑鱼弄居委",
        "菜花浜居委"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "云间二陆文化书香传承",
        "少儿珠心算与数学启蒙",
        "书法金石雅趣社团"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "松江七中",
        "松江二中初级中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入松江区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "松江区第一金字招牌",
        "考入松江二中比例全区领先"
      ],
      "cons": [
        "老城区道路相对较窄"
      ],
      "parentFeedbackSample": "岳阳小学在松江老底子心中是毋庸置疑的第一，抓得实，学风正。"
    }
  },
  {
    "id": "sj-sjshiyan-primary",
    "name": "上海市松江区实验小学",
    "shortName": "松江实验小学",
    "stage": "primary",
    "type": "public",
    "district": "松江区",
    "address": "松江区九峰路6号",
    "establishedYear": 1990,
    "tier": "公办一梯队",
    "badgeTag": "松江现代公办旗舰 · 人乐九峰双校区 · 素质与学力双优",
    "tags": [
      "公办一梯队",
      "松江双强",
      "素质教育",
      "新城核心"
    ],
    "location": {
      "lng": 121.235,
      "lat": 31.025
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "oversubscribedHistory": true,
      "catchmentAreas": [
        "人乐居委",
        "九峰居委",
        "方松街道部分居委"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "实验型探究课程体系",
        "现代数字化创客工坊",
        "学科过硬全科发展"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "九峰实验中学",
        "松江七中"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入松江区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "松江新老城区家长极力推崇",
        "小升初成绩优异"
      ],
      "cons": [
        "学区房热度高"
      ],
      "parentFeedbackSample": "软硬件都好，老师对每个学生都很上心，课后服务丰富高效。"
    }
  },
  {
    "id": "sj-jiuting-primary",
    "name": "上海市松江区九亭小学",
    "shortName": "九亭小学",
    "stage": "primary",
    "type": "public",
    "district": "松江区",
    "address": "松江区九亭镇傲龙路1号",
    "establishedYear": 1906,
    "tier": "公办二梯队",
    "badgeTag": "九亭大居核心公办 · 百年老校焕新 · 临近七宝辐射",
    "tags": [
      "公办二梯队",
      "百年历史",
      "九亭核心",
      "规模大校"
    ],
    "location": {
      "lng": 121.318,
      "lat": 31.139
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 0,
      "hasFiveYearRule": true,
      "admissionDifficulty": "中等",
      "oversubscribedHistory": false,
      "catchmentAreas": [
        "九亭镇核心居委",
        "颐亭居委",
        "嘉和新城部分居委"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "百年老校立人品格",
        "少年数理思维社团",
        "阳光体育大课间"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "九亭中学",
        "九亭二中"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入松江区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "九亭老牌公办支柱",
        "免去跨区长途接送通勤"
      ],
      "cons": [
        "大居生源较多体量大"
      ],
      "parentFeedbackSample": "九亭小学是九亭公办中流砥柱，离家近接送省心，老师负责。"
    }
  },
  {
    "id": "qp-qpshiyan-primary",
    "name": "上海市青浦区实验小学",
    "shortName": "青浦实验小学",
    "stage": "primary",
    "type": "public",
    "district": "青浦区",
    "address": "青浦区城中西路25号",
    "establishedYear": 1908,
    "tier": "公办一梯队",
    "badgeTag": "青浦公办第一头牌 · 顾泠沅尝试教学法策源地 · 百年名校",
    "tags": [
      "公办一梯队",
      "青浦第一",
      "百年老校",
      "教学法策源地",
      "学风拔尖"
    ],
    "location": {
      "lng": 121.118,
      "lat": 31.148
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "oversubscribedHistory": true,
      "catchmentAreas": [
        "城厢镇居委",
        "城中西路对口地段",
        "庆华居委部分"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "全国著名尝试教学理论发源地",
        "尝试成功育人模式",
        "深厚数理科研校本"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "青浦区东方中学",
        "青浦实验初中"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入青浦区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "青浦教育绝对旗帜",
        "教学法科学高效不死板"
      ],
      "cons": [
        "老城核心学区房紧张"
      ],
      "parentFeedbackSample": "青浦实小在青浦人心中的地位无可撼动，教研功底非常深厚。"
    }
  },
  {
    "id": "qp-yifu-primary",
    "name": "上海市青浦区逸夫小学",
    "shortName": "青浦逸夫小学",
    "stage": "primary",
    "type": "public",
    "district": "青浦区",
    "address": "青浦区青安路118号",
    "establishedYear": 1996,
    "tier": "公办一梯队",
    "badgeTag": "青浦老牌公办双璧 · 艺术与数理并进 · 现代活力",
    "tags": [
      "公办一梯队",
      "青浦双强",
      "艺术教育",
      "综合名校"
    ],
    "location": {
      "lng": 121.132,
      "lat": 31.152
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较高 (人户一致稳妥/摇号适中)",
      "oversubscribedHistory": false,
      "catchmentAreas": [
        "青安居委",
        "盈浦居委",
        "新业居委"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程",
        "艺术/音乐/体育特色"
      ],
      "features": [
        "少儿水乡水墨艺术特色",
        "科技素养动手实验",
        "稳健学科夯底"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "青浦区佳禾中学",
        "青浦实验初中"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入青浦区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "名声仅次于青浦实小",
        "师资年轻充满活力"
      ],
      "cons": [
        "生源爆满排位严"
      ],
      "parentFeedbackSample": "逸夫小学和实验小学在青浦齐名，艺术和各科教学抓得很紧密。"
    }
  },
  {
    "id": "qp-soong-primary",
    "name": "上海宋庆龄学校 (小学部)",
    "shortName": "宋庆龄学校",
    "stage": "primary",
    "type": "private",
    "district": "青浦区",
    "address": "青浦区赵巷镇业锦路111号",
    "establishedYear": 2008,
    "tier": "民办顶尖/头牌",
    "badgeTag": "中福会顶峰之作 · 赵巷别墅圈 · 宋庆龄先生大爱理念",
    "tags": [
      "民办顶尖/头牌",
      "中福会",
      "宋庆龄大爱",
      "国际视野",
      "双轨升学"
    ],
    "location": {
      "lng": 121.218,
      "lat": 31.168
    },
    "tuition": {
      "amount": 68000,
      "unit": "元/学期",
      "isFree": false,
      "note": "物价局核准备案标准"
    },
    "enrollment": {
      "scope": "本区摇号",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": false,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "oversubscribedHistory": true,
      "catchmentAreas": [
        "上海市全域摇号派位"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "中配 (外教专职授课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "把最宝贵的东西给予儿童",
        "超一流自然生态园林校园",
        "中西融合全人教育高地"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "宋庆龄学校初中部 (直升)"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入青浦区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校园环境宛如世外桃源",
        "爱心教育与国际化视野天花板"
      ],
      "cons": [
        "摇中概率极低学费较高"
      ],
      "parentFeedbackSample": "上海教育的白月光，老师发自内心的尊重和关爱，无价。"
    }
  },
  {
    "id": "fx-nanqiao-primary",
    "name": "上海市奉贤区南桥小学",
    "shortName": "南桥小学",
    "stage": "primary",
    "type": "public",
    "district": "奉贤区",
    "address": "奉贤区南桥镇新建中路484号",
    "establishedYear": 1804,
    "tier": "公办一梯队",
    "badgeTag": "奉贤二百年学府 · 南桥母校第一品牌 · 贤文化涵育",
    "tags": [
      "公办一梯队",
      "二百年老校",
      "奉贤第一",
      "贤文化",
      "底蕴深厚"
    ],
    "location": {
      "lng": 121.462,
      "lat": 30.918
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "oversubscribedHistory": true,
      "catchmentAreas": [
        "新建居委",
        "古华居委部分",
        "解放居委"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "二百年古树名木下贤文化德育",
        "传统珠算心算与国学经典",
        "过硬九年义务教学奠基"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "奉贤区古华中学",
        "奉贤初级中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入奉贤区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "奉贤历史最悠久声誉最高名校",
        "贤文化涵养极佳"
      ],
      "cons": [
        "老城中心道路偶尔拥堵"
      ],
      "parentFeedbackSample": "南桥小学在奉贤是家家户户皆知的金牌老校，历史比很多大学都久。"
    }
  },
  {
    "id": "fx-fxshiyan-primary",
    "name": "上海市奉贤区实验小学",
    "shortName": "奉贤实验小学",
    "stage": "primary",
    "type": "public",
    "district": "奉贤区",
    "address": "奉贤区南桥镇南中路225号",
    "establishedYear": 1993,
    "tier": "公办一梯队",
    "badgeTag": "奉贤现代公办标杆 · 现代实验与科创先锋 · 学术优异",
    "tags": [
      "公办一梯队",
      "奉贤名校",
      "实验创新",
      "名师云集",
      "直升实验初"
    ],
    "location": {
      "lng": 121.458,
      "lat": 30.925
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "oversubscribedHistory": true,
      "catchmentAreas": [
        "南中居委",
        "育秀居委部分",
        "贝港居委"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "青少年创新发明实验室",
        "现代数字化智慧课堂",
        "学科扎实培优"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "奉贤区实验中学 (优质公办直升)"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入奉贤区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "小初双实验组合在奉贤第一",
        "教学成绩全区前列"
      ],
      "cons": [
        "学位抢手排位严格"
      ],
      "parentFeedbackSample": "奉贤实验小+实验中是奉贤最硬核的公办配置，学业牢靠活动丰富。"
    }
  },
  {
    "id": "js-haitang-primary",
    "name": "上海市金山区海棠小学",
    "shortName": "金山海棠小学",
    "stage": "primary",
    "type": "public",
    "district": "金山区",
    "address": "金山区石化街道海棠新村38号",
    "establishedYear": 1990,
    "tier": "公办一梯队",
    "badgeTag": "金山公办第一金招牌 · 石化滨海明珠 · 全面发展素质第一",
    "tags": [
      "公办一梯队",
      "金山第一",
      "石化名片",
      "全科拔尖",
      "蒙山初中对口"
    ],
    "location": {
      "lng": 121.341,
      "lat": 30.728
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "oversubscribedHistory": true,
      "catchmentAreas": [
        "海棠居委",
        "石化四村居委",
        "梅州居委"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "海棠文化素养品格育人",
        "海洋滨海特色综合实践",
        "金山中考王牌生源基石"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "上海市蒙山中学 (金山公办头牌初中)"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入金山区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "金山家长心中无可替代的第一",
        "对口蒙山初中中考实力顶格"
      ],
      "cons": [
        "石化老城区社区房龄偏长"
      ],
      "parentFeedbackSample": "海棠小学的口碑在金山独一档，对口蒙山中学，小学五年基础非常坚实。"
    }
  },
  {
    "id": "js-jsshiyan-primary",
    "name": "上海市金山区实验小学",
    "shortName": "金山实验小学",
    "stage": "primary",
    "type": "public",
    "district": "金山区",
    "address": "金山区朱泾镇罗星路398号",
    "establishedYear": 1905,
    "tier": "公办一梯队",
    "badgeTag": "百年朱泾老校 · 金山北片教育旗帜 · 严谨治学",
    "tags": [
      "公办一梯队",
      "百年老校",
      "朱泾旗帜",
      "数学科技",
      "罗星初中对口"
    ],
    "location": {
      "lng": 121.168,
      "lat": 30.898
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "oversubscribedHistory": true,
      "catchmentAreas": [
        "罗星居委",
        "朱泾老街居委",
        "钟楼居委部分"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程",
        "科创数理特色"
      ],
      "features": [
        "百年书院文脉传承",
        "少儿数理思维培优",
        "阳光体育运动特色"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "罗星中学 (金山朱泾王牌初中)"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入金山区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "朱泾片区最强公办",
        "直通罗星初中中考强"
      ],
      "cons": [
        "地理位置偏西"
      ],
      "parentFeedbackSample": "朱泾镇最好的小学，百年历史，老师管理有方，读书家长特别省心。"
    }
  },
  {
    "id": "cm-cmshiyan-primary",
    "name": "上海市崇明区实验小学",
    "shortName": "崇明实验小学",
    "stage": "primary",
    "type": "public",
    "district": "崇明区",
    "address": "崇明区城桥镇崇明大道7890号",
    "establishedYear": 1983,
    "tier": "公办一梯队",
    "badgeTag": "崇明生态岛教育门面 · 现代化新城旗舰 · 综合实力第一",
    "tags": [
      "公办一梯队",
      "崇明第一",
      "生态岛名校",
      "城桥核心"
    ],
    "location": {
      "lng": 121.402,
      "lat": 31.625
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较高 (人户一致稳妥/摇号适中)",
      "oversubscribedHistory": false,
      "catchmentAreas": [
        "城桥新城对口居委",
        "崇明大道沿线居委",
        "江山新村居委"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "世界级生态岛绿色探究校本",
        "现代数字化创客空间",
        "崇明中考王牌预备地"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "崇明区实验中学",
        "东门中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入崇明区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "崇明公办教育无可争议的第一品牌",
        "校舍宽敞生态优越"
      ],
      "cons": [
        "往返市区路途远"
      ],
      "parentFeedbackSample": "崇明实验小学是岛上最好的小学，新校区硬件极其气派，环境绝佳。"
    }
  },
  {
    "id": "cm-dongmen-primary",
    "name": "上海市崇明区东门小学",
    "shortName": "崇明东门小学",
    "stage": "primary",
    "type": "public",
    "district": "崇明区",
    "address": "崇明区城桥镇门前街18号",
    "establishedYear": 1904,
    "tier": "公办一梯队",
    "badgeTag": "百年瀛洲文脉 · 崇明历史最老名小 · 儒雅厚德",
    "tags": [
      "公办一梯队",
      "百年名校",
      "瀛洲文脉",
      "东门学区"
    ],
    "location": {
      "lng": 121.398,
      "lat": 31.621
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较高 (人户一致稳妥/摇号适中)",
      "oversubscribedHistory": false,
      "catchmentAreas": [
        "东门居委",
        "北门居委",
        "西门居委部分"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "百年瀛洲书院文化浸润",
        "少儿国学与硬笔书法",
        "绿色海岛动植物科普"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "崇明区东门中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入崇明区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "崇明百年老牌名校",
        "老城核心生活便利师资淳朴"
      ],
      "cons": [
        "城桥老街道路略窄"
      ],
      "parentFeedbackSample": "东门小学历史悠久，老师都是岛上骨干，踏实朴实，育人尽心。"
    }
  },
  {
    "id": "cm-shiyandongtan-primary",
    "name": "上海市实验学校附属东滩学校 (小学部)",
    "shortName": "上实东滩学校",
    "stage": "primary",
    "type": "public",
    "district": "崇明区",
    "address": "崇明区陈家镇东滩大道999号",
    "establishedYear": 2017,
    "tier": "公办一梯队",
    "badgeTag": "上实血统直系辐射 · 陈家镇东滩新城 · 现代化超一流名校",
    "tags": [
      "公办一梯队",
      "上实系",
      "东滩湿地",
      "九年一贯",
      "生态智慧校园"
    ],
    "location": {
      "lng": 121.785,
      "lat": 31.512
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "九年义务教育公办免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较高 (人户一致稳妥/摇号适中)",
      "oversubscribedHistory": false,
      "catchmentAreas": [
        "东滩花园居委",
        "裕安居委部分",
        "陈家镇新村居委"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "上实特培教研体系直通",
        "东滩鸟类与湿地保护国际生态科考",
        "智慧未来现代校园设施"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "上实东滩学校初中部 (九年一贯直升)"
      ],
      "directPassRatio": "本校内部九年一贯直升",
      "note": "对口升入崇明区知名初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "上实名校基因赋能东滩",
        "九年一贯直升省心校园奢华"
      ],
      "cons": [
        "地处东滩往返市区较远"
      ],
      "parentFeedbackSample": "设施甚至超过很多市区私立，背靠上实教研，生态湿地环绕。"
    }
  },
  {
    "id": "xh-longhua-primary",
    "name": "上海市徐汇区龙华小学",
    "shortName": "龙华小学",
    "stage": "primary",
    "type": "public",
    "district": "徐汇区",
    "address": "徐汇区龙华西路21号",
    "establishedYear": 1946,
    "tier": "普通优质公办",
    "badgeTag": "徐汇区优质名校 · 徐汇滨江 · 爱国主义",
    "tags": [
      "徐汇滨江",
      "爱国主义",
      "书法特色"
    ],
    "location": {
      "lng": 121.42,
      "lat": 31.2
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "龙华小学对口片区居委",
        "徐汇区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程",
        "艺术/音乐/体育特色"
      ],
      "features": [
        "徐汇滨江特色校本",
        "徐汇区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "龙华中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入徐汇区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "滨江老牌公办，龙华烈士陵园旁爱国主义教育基地，校风淳朴。"
    }
  },
  {
    "id": "xh-changqiao-primary",
    "name": "上海市徐汇区长桥中心小学",
    "shortName": "长桥中心小学",
    "stage": "primary",
    "type": "public",
    "district": "徐汇区",
    "address": "徐汇区龙州路221号",
    "establishedYear": 1928,
    "tier": "普通优质公办",
    "badgeTag": "徐汇区优质名校 · 长桥学区 · 少儿足球",
    "tags": [
      "长桥学区",
      "少儿足球",
      "科技强项"
    ],
    "location": {
      "lng": 121.428,
      "lat": 31.176
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "长桥中心小学对口片区居委",
        "徐汇区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "长桥学区特色校本",
        "徐汇区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "长桥中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入徐汇区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "长桥板块老牌学校，少儿足球传统项目屡获市级荣誉。"
    }
  },
  {
    "id": "xh-meilong3-primary",
    "name": "上海市徐汇区梅陇第三小学",
    "shortName": "梅陇三小",
    "stage": "primary",
    "type": "public",
    "district": "徐汇区",
    "address": "徐汇区凌云路415弄1号",
    "establishedYear": 1994,
    "tier": "普通优质公办",
    "badgeTag": "徐汇区优质名校 · 凌云社区 · 七彩社团",
    "tags": [
      "凌云社区",
      "七彩社团",
      "生活教育"
    ],
    "location": {
      "lng": 121.436,
      "lat": 31.182
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "梅陇三小对口片区居委",
        "徐汇区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "凌云社区特色校本",
        "徐汇区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "梅陇中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入徐汇区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "凌云街道社区公办，老师很有耐心，注重学生动手和生活习惯。"
    }
  },
  {
    "id": "xh-qixin-primary",
    "name": "上海市徐汇区启新小学",
    "shortName": "启新小学",
    "stage": "primary",
    "type": "public",
    "district": "徐汇区",
    "address": "徐汇区老沪闵路885号",
    "establishedYear": 1906,
    "tier": "普通优质公办",
    "badgeTag": "徐汇区优质名校 · 百年学府 · 绿色生态",
    "tags": [
      "百年学府",
      "绿色生态",
      "学风踏实"
    ],
    "location": {
      "lng": 121.444,
      "lat": 31.188
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "启新小学对口片区居委",
        "徐汇区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "百年学府特色校本",
        "徐汇区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "华东理工大学附中"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入徐汇区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "百年老校，校园绿化好，基础教学扎实，对口华理附中。"
    }
  },
  {
    "id": "xh-huadonghuayuan-primary",
    "name": "上海市徐汇区华东花苑小学",
    "shortName": "华东花苑小学",
    "stage": "primary",
    "type": "public",
    "district": "徐汇区",
    "address": "徐汇区罗秀路1150号",
    "establishedYear": 1996,
    "tier": "普通优质公办",
    "badgeTag": "徐汇区优质名校 · 社区配套 · 阳光体育",
    "tags": [
      "社区配套",
      "阳光体育",
      "艺术陶冶"
    ],
    "location": {
      "lng": 121.452,
      "lat": 31.194
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "华东花苑小学对口片区居委",
        "徐汇区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程",
        "艺术/音乐/体育特色"
      ],
      "features": [
        "社区配套特色校本",
        "徐汇区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "长桥中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入徐汇区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "大型成熟社区配套小学，学生上下学极其便利，安全规范。"
    }
  },
  {
    "id": "xh-guangqi-primary",
    "name": "上海市徐汇区光启小学",
    "shortName": "光启小学",
    "stage": "primary",
    "type": "public",
    "district": "徐汇区",
    "address": "徐汇区天钥桥路1000号",
    "establishedYear": 1912,
    "tier": "公办二梯队",
    "badgeTag": "徐汇区优质名校 · 光启文化 · 天文科普",
    "tags": [
      "光启文化",
      "天文科普",
      "万体馆圈"
    ],
    "location": {
      "lng": 121.46,
      "lat": 31.2
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "光启小学对口片区居委",
        "徐汇区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "光启文化特色校本",
        "徐汇区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "市二初级中学",
        "南模初"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入徐汇区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "纪念徐光启百年名校，天文科普特色突出，对口划片初中优良。"
    }
  },
  {
    "id": "xh-rihui-primary",
    "name": "上海市徐汇区日晖新村小学",
    "shortName": "日晖新村小学",
    "stage": "primary",
    "type": "public",
    "district": "徐汇区",
    "address": "徐汇区茶陵路158号",
    "establishedYear": 1953,
    "tier": "公办二梯队",
    "badgeTag": "徐汇区优质名校 · 斜土社区 · 艺术体操",
    "tags": [
      "斜土社区",
      "艺术体操",
      "数学扎实"
    ],
    "location": {
      "lng": 121.412,
      "lat": 31.176
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "日晖新村小学对口片区居委",
        "徐汇区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程",
        "艺术/音乐/体育特色",
        "科创数理特色"
      ],
      "features": [
        "斜土社区特色校本",
        "徐汇区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "零陵中学",
        "南模初"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入徐汇区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "斜土街道老牌小学，艺术体操全市拔尖，教学严谨负责。"
    }
  },
  {
    "id": "xh-kangwai-primary",
    "name": "上海市徐汇区康健外国语实验小学",
    "shortName": "康外实验小学",
    "stage": "primary",
    "type": "public",
    "district": "徐汇区",
    "address": "徐汇区百花街400号",
    "establishedYear": 2013,
    "tier": "公办二梯队",
    "badgeTag": "徐汇区优质名校 · 世外托管 · 外语浸润",
    "tags": [
      "世外托管",
      "外语浸润",
      "康健学区"
    ],
    "location": {
      "lng": 121.42,
      "lat": 31.182
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "康外实验小学对口片区居委",
        "徐汇区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程",
        "双语浸润课程"
      ],
      "features": [
        "世外托管特色校本",
        "徐汇区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "康健外国语实验中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入徐汇区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "世外教育集团紧密托管，双语活动丰富，小初衔接顺畅。"
    }
  },
  {
    "id": "xh-huilong-kindergarten",
    "name": "上海市徐汇区汇龙幼儿园",
    "shortName": "汇龙幼儿园",
    "stage": "kindergarten",
    "type": "public",
    "district": "徐汇区",
    "address": "徐汇区天钥桥路901号",
    "establishedYear": 1994,
    "tier": "市一级园",
    "badgeTag": "徐汇区优质名校 · 市一级园 · 体育健康",
    "tags": [
      "市一级园",
      "体育健康",
      "温馨家园"
    ],
    "location": {
      "lng": 121.428,
      "lat": 31.188
    },
    "tuition": {
      "amount": 225,
      "unit": "元/月",
      "isFree": false,
      "note": "公办示范/一级园标准保育费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "汇龙幼儿园对口片区居委",
        "徐汇区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "快乐素质 (重个性潜能/轻负担)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 25,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "市一级园特色校本",
        "徐汇区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:15 - 16:00"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "汇师小学",
        "光启小学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入徐汇区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "无书面作业",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "万体馆商圈市一级公办园，户外运动场地大，孩子体魄强健。"
    }
  },
  {
    "id": "xh-jianguo-kindergarten",
    "name": "上海市徐汇区机关建国幼儿园",
    "shortName": "机关建国幼",
    "stage": "kindergarten",
    "type": "public",
    "district": "徐汇区",
    "address": "徐汇区建国西路670号",
    "establishedYear": 1949,
    "tier": "市示范园",
    "badgeTag": "徐汇区优质名校 · 市示范园 · 衡复优雅",
    "tags": [
      "市示范园",
      "衡复优雅",
      "品质育人"
    ],
    "location": {
      "lng": 121.436,
      "lat": 31.194
    },
    "tuition": {
      "amount": 700,
      "unit": "元/月",
      "isFree": false,
      "note": "公办示范/一级园标准保育费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "机关建国幼对口片区居委",
        "徐汇区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "快乐素质 (重个性潜能/轻负担)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 25,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "市示范园特色校本",
        "徐汇区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:15 - 16:00"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "建襄小学",
        "高安路一小"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入徐汇区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "无书面作业",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "梧桐深处老牌示范园，红色底蕴，环境幽静，老师关爱无微不至。"
    }
  },
  {
    "id": "hp-luwan3-primary",
    "name": "上海市黄浦区卢湾第三中心小学",
    "shortName": "卢湾三中心",
    "stage": "primary",
    "type": "public",
    "district": "黄浦区",
    "address": "黄浦区西藏南路1374号",
    "establishedYear": 1935,
    "tier": "公办二梯队",
    "badgeTag": "黄浦区优质名校 · 老卢湾 · 齐唱京剧",
    "tags": [
      "老卢湾",
      "齐唱京剧",
      "国粹特色"
    ],
    "location": {
      "lng": 121.492,
      "lat": 31.243
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "卢湾三中心对口片区居委",
        "黄浦区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "老卢湾特色校本",
        "黄浦区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "市十中学",
        "卢湾初级中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入黄浦区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "京剧国粹特色闻名上海，师资队伍凝聚力强，基础学科扎实。"
    }
  },
  {
    "id": "hp-hp1-primary",
    "name": "上海市黄浦区第一中心小学",
    "shortName": "黄浦一中心",
    "stage": "primary",
    "type": "public",
    "district": "黄浦区",
    "address": "黄浦区人民路850号",
    "establishedYear": 1911,
    "tier": "公办二梯队",
    "badgeTag": "黄浦区优质名校 · 豫园学区 · 百年老牌",
    "tags": [
      "豫园学区",
      "百年老牌",
      "茶艺国学"
    ],
    "location": {
      "lng": 121.5,
      "lat": 31.219
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "黄浦一中心对口片区居委",
        "黄浦区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "豫园学区特色校本",
        "黄浦区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "储能中学",
        "敬业初级中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入黄浦区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "豫园商圈百年老校，茶艺和少儿国学传统深厚，老师极其尽责。"
    }
  },
  {
    "id": "hp-beijingdong-primary",
    "name": "上海市北京东路小学",
    "shortName": "北京东路小学",
    "stage": "primary",
    "type": "public",
    "district": "黄浦区",
    "address": "黄浦区北京东路261号",
    "establishedYear": 1920,
    "tier": "公办二梯队",
    "badgeTag": "黄浦区优质名校 · 外滩源 · 小木工科技",
    "tags": [
      "外滩源",
      "小木工科技",
      "外滩学区"
    ],
    "location": {
      "lng": 121.508,
      "lat": 31.225
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "北京东路小学对口片区居委",
        "黄浦区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "外滩源特色校本",
        "黄浦区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "格致初级中学",
        "光明初级中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入黄浦区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "外滩源畔百年名小，少儿小木工创客社团全市知名，对口格致初。"
    }
  },
  {
    "id": "hp-meixi-primary",
    "name": "上海市梅溪小学",
    "shortName": "梅溪小学",
    "stage": "primary",
    "type": "public",
    "district": "黄浦区",
    "address": "黄浦区蓬莱路128号",
    "establishedYear": 1878,
    "tier": "公办二梯队",
    "badgeTag": "黄浦区优质名校 · 中国最早新式小学 · 一百四十年历史",
    "tags": [
      "中国最早新式小学",
      "一百四十年历史",
      "文脉悠长"
    ],
    "location": {
      "lng": 121.46,
      "lat": 31.231
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "梅溪小学对口片区居委",
        "黄浦区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "中国最早新式小学特色校本",
        "黄浦区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "市八初级中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入黄浦区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "中国人自己创办的第一所现代正规小学，历史悠久，作风踏实。"
    }
  },
  {
    "id": "hp-huining3-primary",
    "name": "上海市徽宁路第三小学",
    "shortName": "徽宁三小",
    "stage": "primary",
    "type": "public",
    "district": "黄浦区",
    "address": "黄浦区徽宁路216号",
    "establishedYear": 1958,
    "tier": "普通优质公办",
    "badgeTag": "黄浦区优质名校 · 老城厢 · 书法摄影",
    "tags": [
      "老城厢",
      "书法摄影",
      "亲情校园"
    ],
    "location": {
      "lng": 121.468,
      "lat": 31.237
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "徽宁三小对口片区居委",
        "黄浦区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程",
        "艺术/音乐/体育特色"
      ],
      "features": [
        "老城厢特色校本",
        "黄浦区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "市十中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入黄浦区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "社区规范公办，书法和少儿摄影展评丰富，师生关系和谐亲密。"
    }
  },
  {
    "id": "hp-sinan-kindergarten",
    "name": "上海市黄浦区思南路幼儿园",
    "shortName": "思南路幼儿园",
    "stage": "kindergarten",
    "type": "public",
    "district": "黄浦区",
    "address": "黄浦区思南路105号",
    "establishedYear": 1956,
    "tier": "市示范园",
    "badgeTag": "黄浦区优质名校 · 市示范园 · 法式风情",
    "tags": [
      "市示范园",
      "法式风情",
      "快乐童年"
    ],
    "location": {
      "lng": 121.476,
      "lat": 31.243
    },
    "tuition": {
      "amount": 700,
      "unit": "元/月",
      "isFree": false,
      "note": "公办示范/一级园标准保育费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "思南路幼儿园对口片区居委",
        "黄浦区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "快乐素质 (重个性潜能/轻负担)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 25,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "市示范园特色校本",
        "黄浦区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:15 - 16:00"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "卢湾二中心",
        "向阳小学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入黄浦区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "无书面作业",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "思南公馆旁极富格调的市示范园，花园洋房，情感体验极佳。"
    }
  },
  {
    "id": "hp-penglai-kindergarten",
    "name": "上海市黄浦区蓬莱路幼儿园",
    "shortName": "蓬莱路幼儿园",
    "stage": "kindergarten",
    "type": "public",
    "district": "黄浦区",
    "address": "黄浦区蓬莱路99号",
    "establishedYear": 1954,
    "tier": "市示范园",
    "badgeTag": "黄浦区优质名校 · 市示范园 · 蓬莱学区",
    "tags": [
      "市示范园",
      "蓬莱学区",
      "民间传统游戏"
    ],
    "location": {
      "lng": 121.484,
      "lat": 31.219
    },
    "tuition": {
      "amount": 700,
      "unit": "元/月",
      "isFree": false,
      "note": "公办示范/一级园标准保育费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "蓬莱路幼儿园对口片区居委",
        "黄浦区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "快乐素质 (重个性潜能/轻负担)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 25,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "市示范园特色校本",
        "黄浦区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:15 - 16:00"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "蓬莱路二小"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入黄浦区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "无书面作业",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "蓬莱学区老牌示范园，自主民间体育游戏特色，孩子体质棒。"
    }
  },
  {
    "id": "ja-zhabei2-primary",
    "name": "上海市闸北第二中心小学",
    "shortName": "闸北二中心",
    "stage": "primary",
    "type": "public",
    "district": "静安区",
    "address": "静安区原平路56号",
    "establishedYear": 1965,
    "tier": "公办二梯队",
    "badgeTag": "静安区优质名校 · 行知教育 · 数理培优",
    "tags": [
      "行知教育",
      "数理培优",
      "彭浦核心"
    ],
    "location": {
      "lng": 121.456,
      "lat": 31.258
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "闸北二中心对口片区居委",
        "静安区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "行知教育特色校本",
        "静安区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "风华初级中学",
        "新中初级中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入静安区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "行知求真教育传承校，数理逻辑清晰，小升初进入优质初中人数多。"
    }
  },
  {
    "id": "ja-ja1-primary",
    "name": "上海市静安区第一中心小学",
    "shortName": "静安一中心",
    "stage": "primary",
    "type": "public",
    "district": "静安区",
    "address": "静安区西康路255号",
    "establishedYear": 1930,
    "tier": "公办一梯队",
    "badgeTag": "静安区优质名校 · 陈鹤琴活教育 · 南静安金牌",
    "tags": [
      "陈鹤琴活教育",
      "南静安金牌",
      "全人素养"
    ],
    "location": {
      "lng": 121.464,
      "lat": 31.264
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "catchmentAreas": [
        "静安一中心对口片区居委",
        "静安区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "陈鹤琴活教育特色校本",
        "静安区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "市西初级中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入静安区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "著名儿童教育家陈鹤琴先生创办，活教育思想发源地，对口市西初。"
    }
  },
  {
    "id": "ja-wanhangdu-primary",
    "name": "上海市万航渡路小学",
    "shortName": "万航渡路小学",
    "stage": "primary",
    "type": "public",
    "district": "静安区",
    "address": "静安区万航渡路684号",
    "establishedYear": 1928,
    "tier": "公办二梯队",
    "badgeTag": "静安区优质名校 · 曹家渡商圈 · 少儿芭蕾",
    "tags": [
      "曹家渡商圈",
      "少儿芭蕾",
      "英语口语"
    ],
    "location": {
      "lng": 121.472,
      "lat": 31.27
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "万航渡路小学对口片区居委",
        "静安区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "曹家渡商圈特色校本",
        "静安区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "市西初级中学",
        "同济大学附属七一中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入静安区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "曹家渡老牌名校，芭蕾舞团多次登上大剧院舞台，外语教研活跃。"
    }
  },
  {
    "id": "ja-fenghua-primary",
    "name": "上海市风华初级中学附属小学",
    "shortName": "风华初附小",
    "stage": "primary",
    "type": "public",
    "district": "静安区",
    "address": "静安区大宁路545号",
    "establishedYear": 2017,
    "tier": "公办一梯队",
    "badgeTag": "静安区优质名校 · 风华系 · 大宁板块",
    "tags": [
      "风华系",
      "大宁板块",
      "贯通培养"
    ],
    "location": {
      "lng": 121.424,
      "lat": 31.276
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "catchmentAreas": [
        "风华初附小对口片区居委",
        "静安区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "风华系特色校本",
        "静安区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "风华初级中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入静安区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "风华初中直系附属小学，初小衔接极其紧密，大宁家长争相选择。"
    }
  },
  {
    "id": "ja-hetian-primary",
    "name": "上海市和田路小学",
    "shortName": "和田路小学",
    "stage": "primary",
    "type": "public",
    "district": "静安区",
    "address": "静安区和田路434号",
    "establishedYear": 1954,
    "tier": "公办二梯队",
    "badgeTag": "静安区优质名校 · 创造教育 · 小发明家摇篮",
    "tags": [
      "创造教育",
      "小发明家摇篮",
      "科技示范"
    ],
    "location": {
      "lng": 121.432,
      "lat": 31.252
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "和田路小学对口片区居委",
        "静安区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程",
        "科创数理特色"
      ],
      "features": [
        "创造教育特色校本",
        "静安区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "风华初级中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入静安区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "全国创造教育发源地，学生小发明获国家专利百余项，脑子灵光。"
    }
  },
  {
    "id": "ja-linfen-primary",
    "name": "上海市临汾路小学",
    "shortName": "临汾路小学",
    "stage": "primary",
    "type": "public",
    "district": "静安区",
    "address": "静安区阳曲路350号",
    "establishedYear": 1988,
    "tier": "普通优质公办",
    "badgeTag": "静安区优质名校 · 彭浦学区 · 民乐悠扬",
    "tags": [
      "彭浦学区",
      "民乐悠扬",
      "温馨家园"
    ],
    "location": {
      "lng": 121.44,
      "lat": 31.258
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "临汾路小学对口片区居委",
        "静安区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "彭浦学区特色校本",
        "静安区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "彭浦初级中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入静安区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "彭浦新村规范公办，民族管弦乐团多次获奖，课业减负增效。"
    }
  },
  {
    "id": "ja-anqing-kindergarten",
    "name": "上海市静安区安庆幼儿园",
    "shortName": "安庆幼儿园",
    "stage": "kindergarten",
    "type": "public",
    "district": "静安区",
    "address": "静安区安庆路209号",
    "establishedYear": 1951,
    "tier": "市示范园",
    "badgeTag": "静安区优质名校 · 市示范园 · 儿童游戏探索",
    "tags": [
      "市示范园",
      "儿童游戏探索",
      "苏河湾旁"
    ],
    "location": {
      "lng": 121.448,
      "lat": 31.264
    },
    "tuition": {
      "amount": 700,
      "unit": "元/月",
      "isFree": false,
      "note": "公办示范/一级园标准保育费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "安庆幼儿园对口片区居委",
        "静安区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "快乐素质 (重个性潜能/轻负担)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 25,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "市示范园特色校本",
        "静安区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:15 - 16:00"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "闸北一中心",
        "一师附小"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入静安区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "无书面作业",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "苏河湾旁老牌市示范园，游戏化教学深入人心，孩子特别阳光自主。"
    }
  },
  {
    "id": "pd-fushan-ruihua-primary",
    "name": "上海福山外国语小学 (瑞华校区)",
    "shortName": "福山瑞华校区",
    "stage": "primary",
    "type": "public",
    "district": "浦东新区",
    "address": "浦东新区商城路1022号",
    "establishedYear": 1998,
    "tier": "公办一梯队",
    "badgeTag": "浦东新区优质名校 · 四大公办 · 外语特长",
    "tags": [
      "四大公办",
      "外语特长",
      "陆家嘴学区"
    ],
    "location": {
      "lng": 121.552,
      "lat": 31.227
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "catchmentAreas": [
        "福山瑞华校区对口片区居委",
        "浦东新区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程",
        "双语浸润课程"
      ],
      "features": [
        "四大公办特色校本",
        "浦东新区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "建平西校",
        "进才北校"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入浦东新区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "福山外小主力校区之一，双语沉浸氛围极强，对口建平西校初中。"
    }
  },
  {
    "id": "pd-liushi-fangfei-primary",
    "name": "上海市第六师范第二附属小学 (芳菲校区)",
    "shortName": "六师附小芳菲",
    "stage": "primary",
    "type": "public",
    "district": "浦东新区",
    "address": "浦东新区芳甸路1088号",
    "establishedYear": 2005,
    "tier": "公办一梯队",
    "badgeTag": "浦东新区优质名校 · 联洋学区 · 师范传统",
    "tags": [
      "联洋学区",
      "师范传统",
      "高端生源"
    ],
    "location": {
      "lng": 121.56,
      "lat": 31.233
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "catchmentAreas": [
        "六师附小芳菲对口片区居委",
        "浦东新区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "联洋学区特色校本",
        "浦东新区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "进才实验中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入浦东新区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "地处联洋国际社区腹地，生源整齐高知，小初升学口碑极其出众。"
    }
  },
  {
    "id": "pd-yangjing-primary",
    "name": "上海市洋泾实验小学",
    "shortName": "洋泾实验小学",
    "stage": "primary",
    "type": "public",
    "district": "浦东新区",
    "address": "浦东新区博山路51弄36号",
    "establishedYear": 1998,
    "tier": "公办二梯队",
    "badgeTag": "浦东新区优质名校 · 洋泾学区 · 管乐金帆",
    "tags": [
      "洋泾学区",
      "管乐金帆",
      "科技创客"
    ],
    "location": {
      "lng": 121.568,
      "lat": 31.209
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "洋泾实验小学对口片区居委",
        "浦东新区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "洋泾学区特色校本",
        "浦东新区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "洋泾菊园初中部"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入浦东新区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "洋泾板块重点公办，管弦乐团全市一流，学生综合素养出众。"
    }
  },
  {
    "id": "pd-guanlan-primary",
    "name": "上海市浦东新区观澜小学",
    "shortName": "观澜小学",
    "stage": "primary",
    "type": "public",
    "district": "浦东新区",
    "address": "浦东新区川沙镇城厢城南路18号",
    "establishedYear": 1834,
    "tier": "公办一梯队",
    "badgeTag": "浦东新区优质名校 · 百年名校 · 川沙第一",
    "tags": [
      "百年名校",
      "川沙第一",
      "黄炎培母校"
    ],
    "location": {
      "lng": 121.52,
      "lat": 31.215
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "catchmentAreas": [
        "观澜小学对口片区居委",
        "浦东新区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "百年名校特色校本",
        "浦东新区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "川沙中学南校"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入浦东新区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "浦东历史最悠久学校之一，黄炎培母校，川沙本土第一名牌。"
    }
  },
  {
    "id": "pd-huinan1-primary",
    "name": "上海市浦东新区惠南第一小学",
    "shortName": "惠南一小",
    "stage": "primary",
    "type": "public",
    "district": "浦东新区",
    "address": "浦东新区惠南镇文源街28号",
    "establishedYear": 1906,
    "tier": "公办一梯队",
    "badgeTag": "浦东新区优质名校 · 南汇核心 · 百年老牌",
    "tags": [
      "南汇核心",
      "百年老牌",
      "惠南头牌"
    ],
    "location": {
      "lng": 121.528,
      "lat": 31.221
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "catchmentAreas": [
        "惠南一小对口片区居委",
        "浦东新区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "南汇核心特色校本",
        "浦东新区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "南汇第一中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入浦东新区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "原南汇区绝对头牌公办，百年老校，师资深厚，南汇中考主力军。"
    }
  },
  {
    "id": "pd-zhoupu2-primary",
    "name": "上海市浦东新区周浦第二小学",
    "shortName": "周浦二小",
    "stage": "primary",
    "type": "public",
    "district": "浦东新区",
    "address": "浦东新区周浦镇周市路276号",
    "establishedYear": 1907,
    "tier": "公办二梯队",
    "badgeTag": "浦东新区优质名校 · 小上海周浦 · 百年名校",
    "tags": [
      "小上海周浦",
      "百年名校",
      "周康核心"
    ],
    "location": {
      "lng": 121.536,
      "lat": 31.227
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "周浦二小对口片区居委",
        "浦东新区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "小上海周浦特色校本",
        "浦东新区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "周浦中学初中部"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入浦东新区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "周浦板块老牌公办，小班化教学尝试深入，周边家庭高度信赖。"
    }
  },
  {
    "id": "pd-kangqiao-primary",
    "name": "上海市康桥实验小学",
    "shortName": "康桥实验小学",
    "stage": "primary",
    "type": "public",
    "district": "浦东新区",
    "address": "浦东新区康桥镇康沈路498号",
    "establishedYear": 2000,
    "tier": "公办二梯队",
    "badgeTag": "浦东新区优质名校 · 康桥核心 · 数理实验",
    "tags": [
      "康桥核心",
      "数理实验",
      "张江辐射"
    ],
    "location": {
      "lng": 121.544,
      "lat": 31.233
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "康桥实验小学对口片区居委",
        "浦东新区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "康桥核心特色校本",
        "浦东新区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "吴迅中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入浦东新区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "张江和康桥科技走廊辐射校，生源改善明显，科技类社团发展迅速。"
    }
  },
  {
    "id": "pd-tangzhen-primary",
    "name": "上海市唐镇小学",
    "shortName": "唐镇小学",
    "stage": "primary",
    "type": "public",
    "district": "浦东新区",
    "address": "浦东新区唐镇唐丰路185号",
    "establishedYear": 1905,
    "tier": "公办二梯队",
    "badgeTag": "浦东新区优质名校 · 唐镇国际社区 · 百年积淀",
    "tags": [
      "唐镇国际社区",
      "百年积淀",
      "现代化焕新"
    ],
    "location": {
      "lng": 121.552,
      "lat": 31.209
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "唐镇小学对口片区居委",
        "浦东新区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "唐镇国际社区特色校本",
        "浦东新区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "唐镇中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入浦东新区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "伴随唐镇国际化社区崛起，软硬件全面升级，年轻名师汇聚。"
    }
  },
  {
    "id": "pd-lingang-primary",
    "name": "上海市临港实验小学",
    "shortName": "临港实验小学",
    "stage": "primary",
    "type": "public",
    "district": "浦东新区",
    "address": "浦东新区临港新片区雪绒花路88号",
    "establishedYear": 2016,
    "tier": "公办二梯队",
    "badgeTag": "浦东新区优质名校 · 临港新片区 · 海洋特色",
    "tags": [
      "临港新片区",
      "海洋特色",
      "智慧科技"
    ],
    "location": {
      "lng": 121.56,
      "lat": 31.215
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "临港实验小学对口片区居委",
        "浦东新区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "临港新片区特色校本",
        "浦东新区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "临港实验中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入浦东新区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "临港新城核心公办，校园宽阔气派，海洋生态与人工智能课程丰富。"
    }
  },
  {
    "id": "pd-bingchangtian-kindergarten-bihaiguan",
    "name": "上海市浦东新区冰厂田幼儿园 (碧云部)",
    "shortName": "冰厂田碧云部",
    "stage": "kindergarten",
    "type": "public",
    "district": "浦东新区",
    "address": "浦东新区碧云路86弄6号",
    "establishedYear": 2002,
    "tier": "市示范园",
    "badgeTag": "浦东新区优质名校 · 市示范园 · 碧云国际社区",
    "tags": [
      "市示范园",
      "碧云国际社区",
      "阳光运动"
    ],
    "location": {
      "lng": 121.568,
      "lat": 31.221
    },
    "tuition": {
      "amount": 700,
      "unit": "元/月",
      "isFree": false,
      "note": "公办示范/一级园标准保育费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "冰厂田碧云部对口片区居委",
        "浦东新区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "快乐素质 (重个性潜能/轻负担)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 25,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "市示范园特色校本",
        "浦东新区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:15 - 16:00"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "福山正达",
        "平和学校"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入浦东新区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "无书面作业",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "市示范冰厂田在碧云的核心园区，双语交际与自主运动游戏环境卓越。"
    }
  },
  {
    "id": "mh-xinzhuangzhen-primary",
    "name": "上海市闵行区莘庄镇小学",
    "shortName": "莘庄镇小学",
    "stage": "primary",
    "type": "public",
    "district": "闵行区",
    "address": "闵行区莘庄镇莘浜路315号",
    "establishedYear": 1906,
    "tier": "公办二梯队",
    "badgeTag": "闵行区优质名校 · 百年老校 · 莘庄母校",
    "tags": [
      "百年老校",
      "莘庄母校",
      "书香校园"
    ],
    "location": {
      "lng": 121.357,
      "lat": 31.118
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "莘庄镇小学对口片区居委",
        "闵行区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "百年老校特色校本",
        "闵行区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "莘光学校初中部"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入闵行区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "莘庄老牌百年名校，教风踏实严谨，语文和数学教学功底极厚。"
    }
  },
  {
    "id": "mh-pingnan-primary",
    "name": "上海市闵行区平南小学",
    "shortName": "平南小学",
    "stage": "primary",
    "type": "public",
    "district": "闵行区",
    "address": "闵行区东兰路671号",
    "establishedYear": 1996,
    "tier": "公办二梯队",
    "badgeTag": "闵行区优质名校 · 古美学区 · 科技发明",
    "tags": [
      "古美学区",
      "科技发明",
      "全科育人"
    ],
    "location": {
      "lng": 121.365,
      "lat": 31.124
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "平南小学对口片区居委",
        "闵行区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程",
        "科创数理特色"
      ],
      "features": [
        "古美学区特色校本",
        "闵行区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "罗阳中学",
        "七宝二中"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入闵行区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "古美商圈优质公办，科技创新发明特色强，初小衔接良好。"
    }
  },
  {
    "id": "mh-pingyang-primary",
    "name": "上海市闵行区平阳小学",
    "shortName": "平阳小学",
    "stage": "primary",
    "type": "public",
    "district": "闵行区",
    "address": "闵行区古美西路628弄121号",
    "establishedYear": 1998,
    "tier": "公办二梯队",
    "badgeTag": "闵行区优质名校 · 古美板块 · 轮滑冰雪",
    "tags": [
      "古美板块",
      "轮滑冰雪",
      "健康第一"
    ],
    "location": {
      "lng": 121.373,
      "lat": 31.1
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "平阳小学对口片区居委",
        "闵行区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "古美板块特色校本",
        "闵行区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "七宝二中"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入闵行区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "少儿轮滑与冰雪运动基地，阳光体魄养成，各科学风优良扎实。"
    }
  },
  {
    "id": "mh-hanghua1-primary",
    "name": "上海市航华第一小学",
    "shortName": "航华一小",
    "stage": "primary",
    "type": "public",
    "district": "闵行区",
    "address": "闵行区航华一村50号",
    "establishedYear": 1995,
    "tier": "普通优质公办",
    "badgeTag": "闵行区优质名校 · 航华大居 · 陶艺航模",
    "tags": [
      "航华大居",
      "陶艺航模",
      "温馨校风"
    ],
    "location": {
      "lng": 121.381,
      "lat": 31.106
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "航华一小对口片区居委",
        "闵行区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "航华大居特色校本",
        "闵行区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "航华中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入闵行区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "航华大居规范公办，航模与陶艺活动多彩，老师认真负责接送便捷。"
    }
  },
  {
    "id": "mh-xinsong-primary",
    "name": "上海市闵行区莘松小学",
    "shortName": "莘松小学",
    "stage": "primary",
    "type": "public",
    "district": "闵行区",
    "address": "闵行区莘沥路480号",
    "establishedYear": 1990,
    "tier": "公办二梯队",
    "badgeTag": "闵行区优质名校 · 莘松学区 · 乒乓强项",
    "tags": [
      "莘松学区",
      "乒乓强项",
      "对口莘松初"
    ],
    "location": {
      "lng": 121.389,
      "lat": 31.112
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "莘松小学对口片区居委",
        "闵行区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "莘松学区特色校本",
        "闵行区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "莘松中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入闵行区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "莘庄核心公办老校，少儿乒乓传统强校，初中对口莘松中学王牌。"
    }
  },
  {
    "id": "mh-huashizizhu-primary",
    "name": "华东师范大学附属紫竹小学",
    "shortName": "华师紫竹小学",
    "stage": "primary",
    "type": "public",
    "district": "闵行区",
    "address": "闵行区紫凤路398号",
    "establishedYear": 2011,
    "tier": "公办一梯队",
    "badgeTag": "闵行区优质名校 · 华师大附小 · 紫竹高新区",
    "tags": [
      "华师大附小",
      "紫竹高新区",
      "交大华师双星"
    ],
    "location": {
      "lng": 121.397,
      "lat": 31.118
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "catchmentAreas": [
        "华师紫竹小学对口片区居委",
        "闵行区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "华师大附小特色校本",
        "闵行区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "华二紫竹初中部"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入闵行区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "紫竹高新区高知子弟汇聚，依托华东师大顶尖教研，小初直通华二紫竹。"
    }
  },
  {
    "id": "mh-qibaoshiyan-kindergarten",
    "name": "上海市七宝实验幼儿园",
    "shortName": "七宝实验幼儿园",
    "stage": "kindergarten",
    "type": "public",
    "district": "闵行区",
    "address": "闵行区风神街8号",
    "establishedYear": 1998,
    "tier": "市一级园",
    "badgeTag": "闵行区优质名校 · 市一级园 · 七宝学区",
    "tags": [
      "市一级园",
      "七宝学区",
      "快乐创造"
    ],
    "location": {
      "lng": 121.405,
      "lat": 31.124
    },
    "tuition": {
      "amount": 225,
      "unit": "元/月",
      "isFree": false,
      "note": "公办示范/一级园标准保育费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "七宝实验幼儿园对口片区居委",
        "闵行区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "快乐素质 (重个性潜能/轻负担)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 25,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "市一级园特色校本",
        "闵行区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:15 - 16:00"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "七宝实验小学",
        "明强小学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入闵行区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "无书面作业",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "七宝板块老牌公办一级园，自然探究游戏课程特色显著，深受邻里爱戴。"
    }
  },
  {
    "id": "cn-luyuan-primary",
    "name": "上海市长宁区绿苑小学",
    "shortName": "绿苑小学",
    "stage": "primary",
    "type": "public",
    "district": "长宁区",
    "address": "长宁区荣华西道1号",
    "establishedYear": 1999,
    "tier": "公办二梯队",
    "badgeTag": "长宁区优质名校 · 古北新区 · 绿色生态",
    "tags": [
      "古北新区",
      "绿色生态",
      "双语小班"
    ],
    "location": {
      "lng": 121.397,
      "lat": 31.205
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "绿苑小学对口片区居委",
        "长宁区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程",
        "双语浸润课程"
      ],
      "features": [
        "古北新区特色校本",
        "长宁区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "建青实验学校",
        "娄山中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入长宁区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "地处古北国际社区，生态绿色理念，外语交际能力强，环境幽雅。"
    }
  },
  {
    "id": "cn-shicun-primary",
    "name": "上海市长宁区适存小学",
    "shortName": "适存小学",
    "stage": "primary",
    "type": "public",
    "district": "长宁区",
    "address": "长宁区北翟路830号",
    "establishedYear": 1905,
    "tier": "公办二梯队",
    "badgeTag": "长宁区优质名校 · 百年老校 · 新泾核心",
    "tags": [
      "百年老校",
      "新泾核心",
      "书法特色"
    ],
    "location": {
      "lng": 121.405,
      "lat": 31.211
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "适存小学对口片区居委",
        "长宁区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程",
        "艺术/音乐/体育特色"
      ],
      "features": [
        "百年老校特色校本",
        "长宁区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "新泾中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入长宁区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "长宁西区百年老校，严谨的书法和传统文化教育，学生功底扎实。"
    }
  },
  {
    "id": "cn-weining-primary",
    "name": "上海市长宁区威宁小学",
    "shortName": "威宁小学",
    "stage": "primary",
    "type": "public",
    "district": "长宁区",
    "address": "长宁区天山路310弄14号",
    "establishedYear": 1988,
    "tier": "公办二梯队",
    "badgeTag": "长宁区优质名校 · 天山板块 · 少儿棋类",
    "tags": [
      "天山板块",
      "少儿棋类",
      "扎实教学"
    ],
    "location": {
      "lng": 121.413,
      "lat": 31.217
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "威宁小学对口片区居委",
        "长宁区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "天山板块特色校本",
        "长宁区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "仙霞高级中学初中部"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入长宁区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "天山仙霞板块成熟公办，象棋与围棋普及特色，数学思维训练有方。"
    }
  },
  {
    "id": "cn-fudan-primary",
    "name": "上海市长宁区复旦小学",
    "shortName": "长宁复旦小学",
    "stage": "primary",
    "type": "public",
    "district": "长宁区",
    "address": "长宁区华山路1626号",
    "establishedYear": 1905,
    "tier": "公办二梯队",
    "badgeTag": "长宁区优质名校 · 复旦源头 · 华山路风貌",
    "tags": [
      "复旦源头",
      "华山路风貌",
      "博雅人文"
    ],
    "location": {
      "lng": 121.421,
      "lat": 31.223
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "长宁复旦小学对口片区居委",
        "长宁区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "复旦源头特色校本",
        "长宁区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "复旦初级中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入长宁区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "复旦公学初等部旧址，文脉悠长，对口复旦初中，人文情怀浓郁。"
    }
  },
  {
    "id": "cn-tianshan1-primary",
    "name": "上海市长宁区天山第一小学",
    "shortName": "天山一小",
    "stage": "primary",
    "type": "public",
    "district": "长宁区",
    "address": "长宁区茅台路305弄1号",
    "establishedYear": 1954,
    "tier": "普通优质公办",
    "badgeTag": "长宁区优质名校 · 天山新村 · 少年警校",
    "tags": [
      "天山新村",
      "少年警校",
      "守正出新"
    ],
    "location": {
      "lng": 121.429,
      "lat": 31.229
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "天山一小对口片区居委",
        "长宁区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "天山新村特色校本",
        "长宁区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "天山初级中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入长宁区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "天山传统社区公办，少年交警队特色响当当，养成教育成果突出。"
    }
  },
  {
    "id": "cn-cnshiyan-kindergarten",
    "name": "上海市长宁区实验幼儿园",
    "shortName": "长宁实验幼儿园",
    "stage": "kindergarten",
    "type": "public",
    "district": "长宁区",
    "address": "长宁区安龙路780号",
    "establishedYear": 1990,
    "tier": "市示范园",
    "badgeTag": "长宁区优质名校 · 市示范园 · 游戏化探究",
    "tags": [
      "市示范园",
      "游戏化探究",
      "快乐童真"
    ],
    "location": {
      "lng": 121.437,
      "lat": 31.205
    },
    "tuition": {
      "amount": 700,
      "unit": "元/月",
      "isFree": false,
      "note": "公办示范/一级园标准保育费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "长宁实验幼儿园对口片区居委",
        "长宁区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "快乐素质 (重个性潜能/轻负担)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 25,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "市示范园特色校本",
        "长宁区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:15 - 16:00"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "长宁实验小学",
        "绿苑小学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入长宁区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "无书面作业",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "长宁老牌示范园，户外生态挑战区与自主探究课程全上海知名。"
    }
  },
  {
    "id": "pt-xunyang-primary",
    "name": "上海市普陀区洵阳路小学",
    "shortName": "洵阳路小学",
    "stage": "primary",
    "type": "public",
    "district": "普陀区",
    "address": "普陀区洵阳路99号",
    "establishedYear": 1958,
    "tier": "公办一梯队",
    "badgeTag": "普陀区优质名校 · 全国教改标杆 · 寻常求真",
    "tags": [
      "全国教改标杆",
      "寻常求真",
      "国家教学大奖"
    ],
    "location": {
      "lng": 121.421,
      "lat": 31.243
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "catchmentAreas": [
        "洵阳路小学对口片区居委",
        "普陀区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "全国教改标杆特色校本",
        "普陀区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "中远实验初中",
        "宜川中学附校"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入普陀区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "全国教育改革先进校，全国特级校长扎根办学，综合素养与学业俱佳。"
    }
  },
  {
    "id": "pt-zhenruwenying-primary",
    "name": "上海市真如文英中心小学",
    "shortName": "真如文英小学",
    "stage": "primary",
    "type": "public",
    "district": "普陀区",
    "address": "普陀区真如西村110号",
    "establishedYear": 1994,
    "tier": "公办二梯队",
    "badgeTag": "普陀区优质名校 · 真如副中心 · 书画神韵",
    "tags": [
      "真如副中心",
      "书画神韵",
      "数字课堂"
    ],
    "location": {
      "lng": 121.373,
      "lat": 31.249
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "真如文英小学对口片区居委",
        "普陀区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "真如副中心特色校本",
        "普陀区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "真如中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入普陀区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "真如板块核心公办，书法篆刻与现代科技结合，初小衔接扎实。"
    }
  },
  {
    "id": "pt-caoyang2-primary",
    "name": "上海市曹杨第二中学附属学校 (小学部)",
    "shortName": "曹杨二中附校",
    "stage": "primary",
    "type": "public",
    "district": "普陀区",
    "address": "普陀区平利路50号",
    "establishedYear": 2002,
    "tier": "公办一梯队",
    "badgeTag": "普陀区优质名校 · 曹二附校 · 九年一贯",
    "tags": [
      "曹二附校",
      "九年一贯",
      "中考市重输送大户"
    ],
    "location": {
      "lng": 121.381,
      "lat": 31.255
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "catchmentAreas": [
        "曹杨二中附校对口片区居委",
        "普陀区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "曹二附校特色校本",
        "普陀区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "曹杨二中附校初中部"
      ],
      "directPassRatio": "本校内部九年一贯直升",
      "note": "对口升入普陀区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "九年一贯直升名校，依托曹杨二中市实验性示范性高中卓越资源。"
    }
  },
  {
    "id": "pt-wanli-primary",
    "name": "上海市万里实验学校 (小学部)",
    "shortName": "万里实验学校",
    "stage": "primary",
    "type": "public",
    "district": "普陀区",
    "address": "普陀区富平路518号",
    "establishedYear": 2006,
    "tier": "公办二梯队",
    "badgeTag": "普陀区优质名校 · 万里板块 · 现代化九年制",
    "tags": [
      "万里板块",
      "现代化九年制",
      "科学实验"
    ],
    "location": {
      "lng": 121.389,
      "lat": 31.261
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "万里实验学校对口片区居委",
        "普陀区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "万里板块特色校本",
        "普陀区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "万里实验学校初中部"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入普陀区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "万里城新兴现代九年一贯制学校，硬件设施全面，师生朝气蓬勃。"
    }
  },
  {
    "id": "pt-pingli1-primary",
    "name": "上海市平利第一小学",
    "shortName": "平利一小",
    "stage": "primary",
    "type": "public",
    "district": "普陀区",
    "address": "普陀区平利路21弄8号",
    "establishedYear": 1989,
    "tier": "普通优质公办",
    "badgeTag": "普陀区优质名校 · 甘泉新村 · 阳光体育",
    "tags": [
      "甘泉新村",
      "阳光体育",
      "规范严谨"
    ],
    "location": {
      "lng": 121.397,
      "lat": 31.237
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "平利一小对口片区居委",
        "普陀区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "甘泉新村特色校本",
        "普陀区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "甘泉外国语初中"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入普陀区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "甘泉老社区规范学校，小班辅导到位，老师敬业乐群。"
    }
  },
  {
    "id": "pt-caoyang1-kindergarten",
    "name": "上海市普陀区曹杨新村第一幼儿园",
    "shortName": "曹杨一幼",
    "stage": "kindergarten",
    "type": "public",
    "district": "普陀区",
    "address": "普陀区棠浦路10号",
    "establishedYear": 1952,
    "tier": "市示范园",
    "badgeTag": "普陀区优质名校 · 市示范园 · 新村历史",
    "tags": [
      "市示范园",
      "新村历史",
      "自然生态游戏"
    ],
    "location": {
      "lng": 121.405,
      "lat": 31.243
    },
    "tuition": {
      "amount": 700,
      "unit": "元/月",
      "isFree": false,
      "note": "公办示范/一级园标准保育费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "曹杨一幼对口片区居委",
        "普陀区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "快乐素质 (重个性潜能/轻负担)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 25,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "市示范园特色校本",
        "普陀区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:15 - 16:00"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "朝春中心小学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入普陀区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "无书面作业",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "全国工人新村第一家幼儿园，示范老牌，户外树屋自然游戏乐园极棒。"
    }
  },
  {
    "id": "yp-tongjishiyan-primary",
    "name": "上海市同济大学实验小学",
    "shortName": "同济实验小学",
    "stage": "primary",
    "type": "public",
    "district": "杨浦区",
    "address": "杨浦区武川路111弄32号",
    "establishedYear": 2009,
    "tier": "公办一梯队",
    "badgeTag": "杨浦区优质名校 · 同济高校共建 · 新江湾城",
    "tags": [
      "同济高校共建",
      "新江湾城",
      "建筑与科创特色"
    ],
    "location": {
      "lng": 121.542,
      "lat": 31.277
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "catchmentAreas": [
        "同济实验小学对口片区居委",
        "杨浦区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程",
        "科创数理特色"
      ],
      "features": [
        "同济高校共建特色校本",
        "杨浦区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "同济初级中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入杨浦区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "高校资源倾斜，建筑构造与桥梁启蒙课程独特，生源纯正优异。"
    }
  },
  {
    "id": "yp-xuchang5-primary",
    "name": "上海市许昌路第五小学",
    "shortName": "许昌五小",
    "stage": "primary",
    "type": "public",
    "district": "杨浦区",
    "address": "杨浦区许昌路1470号",
    "establishedYear": 1952,
    "tier": "公办二梯队",
    "badgeTag": "杨浦区优质名校 · 鞍山学区 · 少儿围棋",
    "tags": [
      "鞍山学区",
      "少儿围棋",
      "数学过硬"
    ],
    "location": {
      "lng": 121.55,
      "lat": 31.283
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "许昌五小对口片区居委",
        "杨浦区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程",
        "科创数理特色"
      ],
      "features": [
        "鞍山学区特色校本",
        "杨浦区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "鞍山初级中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入杨浦区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "鞍山新村成熟公办强校，围棋思维训练与中考重点初中鞍山初衔接紧。"
    }
  },
  {
    "id": "yp-anshan-primary",
    "name": "上海市鞍山初级中学附属小学",
    "shortName": "鞍山初附小",
    "stage": "primary",
    "type": "public",
    "district": "杨浦区",
    "address": "杨浦区本溪路120号",
    "establishedYear": 2018,
    "tier": "公办一梯队",
    "badgeTag": "杨浦区优质名校 · 鞍山系 · 初小贯通",
    "tags": [
      "鞍山系",
      "初小贯通",
      "公办新秀"
    ],
    "location": {
      "lng": 121.502,
      "lat": 31.289
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "catchmentAreas": [
        "鞍山初附小对口片区居委",
        "杨浦区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "鞍山系特色校本",
        "杨浦区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "鞍山初级中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入杨浦区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "对口直升杨浦老牌中考强校鞍山初中，师资雄厚，办学起点高。"
    }
  },
  {
    "id": "yp-fengcheng-primary",
    "name": "上海市凤城新村小学",
    "shortName": "凤城新村小学",
    "stage": "primary",
    "type": "public",
    "district": "杨浦区",
    "address": "杨浦区凤城三村100号",
    "establishedYear": 1953,
    "tier": "普通优质公办",
    "badgeTag": "杨浦区优质名校 · 凤城社区 · 绿色环保",
    "tags": [
      "凤城社区",
      "绿色环保",
      "扎实教学"
    ],
    "location": {
      "lng": 121.51,
      "lat": 31.265
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "凤城新村小学对口片区居委",
        "杨浦区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "凤城社区特色校本",
        "杨浦区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "昆明学校"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入杨浦区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "凤城新村传统公办，老师爱生如子，基础教学规范严谨。"
    }
  },
  {
    "id": "yp-shangyin-primary",
    "name": "上海音乐学院实验学校 (小学部)",
    "shortName": "上音实验学校",
    "stage": "primary",
    "type": "public",
    "district": "杨浦区",
    "address": "杨浦区政和路359号",
    "establishedYear": 2009,
    "tier": "公办一梯队",
    "badgeTag": "杨浦区优质名校 · 新江湾城 · 九年一贯",
    "tags": [
      "新江湾城",
      "九年一贯",
      "音乐美育天花板"
    ],
    "location": {
      "lng": 121.518,
      "lat": 31.271
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "catchmentAreas": [
        "上音实验学校对口片区居委",
        "杨浦区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程",
        "艺术/音乐/体育特色"
      ],
      "features": [
        "新江湾城特色校本",
        "杨浦区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "上音实验学校初中部"
      ],
      "directPassRatio": "本校内部九年一贯直升",
      "note": "对口升入杨浦区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "新江湾湿地核心九年一贯，音乐艺术特色顶尖，文化成绩同样出类拔萃。"
    }
  },
  {
    "id": "yp-yanji-kindergarten",
    "name": "上海市杨浦区延吉幼儿园",
    "shortName": "延吉幼儿园",
    "stage": "kindergarten",
    "type": "public",
    "district": "杨浦区",
    "address": "杨浦区延吉东路135号",
    "establishedYear": 1979,
    "tier": "市示范园",
    "badgeTag": "杨浦区优质名校 · 市示范园 · 探索性游戏",
    "tags": [
      "市示范园",
      "探索性游戏",
      "全人育人"
    ],
    "location": {
      "lng": 121.526,
      "lat": 31.277
    },
    "tuition": {
      "amount": 700,
      "unit": "元/月",
      "isFree": false,
      "note": "公办示范/一级园标准保育费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "延吉幼儿园对口片区居委",
        "杨浦区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "快乐素质 (重个性潜能/轻负担)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 25,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "市示范园特色校本",
        "杨浦区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:15 - 16:00"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "控江二村小学",
        "打一小学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入杨浦区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "无书面作业",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "上海老牌顶尖市示范园，探索性主题游戏课程全行业标杆。"
    }
  },
  {
    "id": "hk-chongminglu-primary",
    "name": "上海市崇明路小学",
    "shortName": "崇明路小学",
    "stage": "primary",
    "type": "public",
    "district": "虹口区",
    "address": "虹口区崇明路43号",
    "establishedYear": 1933,
    "tier": "公办二梯队",
    "badgeTag": "虹口区优质名校 · 北外滩板块 · 少儿影视",
    "tags": [
      "北外滩板块",
      "少儿影视",
      "语文素养"
    ],
    "location": {
      "lng": 121.5,
      "lat": 31.267
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "崇明路小学对口片区居委",
        "虹口区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "北外滩板块特色校本",
        "虹口区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "鲁迅初级中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入虹口区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "临近北外滩商圈，少儿影视小记者社团出彩，阅读表达能力强。"
    }
  },
  {
    "id": "hk-guangling-primary",
    "name": "上海市广灵路小学",
    "shortName": "广灵路小学",
    "stage": "primary",
    "type": "public",
    "district": "虹口区",
    "address": "虹口区广灵一路115号",
    "establishedYear": 1958,
    "tier": "公办二梯队",
    "badgeTag": "虹口区优质名校 · 凉城广中 · 科技创客",
    "tags": [
      "凉城广中",
      "科技创客",
      "思维训练"
    ],
    "location": {
      "lng": 121.508,
      "lat": 31.273
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "广灵路小学对口片区居委",
        "虹口区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "凉城广中特色校本",
        "虹口区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "虹口实验学校"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入虹口区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "广中社区名小，科技小发明比赛频频折桂，数理基础打得扎实。"
    }
  },
  {
    "id": "hk-zhongzhou1-primary",
    "name": "上海市中州路第一小学",
    "shortName": "中州路一小",
    "stage": "primary",
    "type": "public",
    "district": "虹口区",
    "address": "虹口区中州路102号",
    "establishedYear": 1947,
    "tier": "普通优质公办",
    "badgeTag": "虹口区优质名校 · 四川北路学区 · 书法美育",
    "tags": [
      "四川北路学区",
      "书法美育",
      "扎实学风"
    ],
    "location": {
      "lng": 121.516,
      "lat": 31.249
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "中州路一小对口片区居委",
        "虹口区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程",
        "艺术/音乐/体育特色"
      ],
      "features": [
        "四川北路学区特色校本",
        "虹口区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "市五中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入虹口区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "四川北路老街坊公办，老师极其负责，书法与传统文化浸润身心。"
    }
  },
  {
    "id": "hk-liangcheng3-primary",
    "name": "上海市凉城第三小学",
    "shortName": "凉城三小",
    "stage": "primary",
    "type": "public",
    "district": "虹口区",
    "address": "虹口区水电路1350弄19号",
    "establishedYear": 1987,
    "tier": "普通优质公办",
    "badgeTag": "虹口区优质名校 · 凉城社区 · 阳光体育",
    "tags": [
      "凉城社区",
      "阳光体育",
      "亲情教育"
    ],
    "location": {
      "lng": 121.468,
      "lat": 31.255
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "凉城三小对口片区居委",
        "虹口区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "凉城社区特色校本",
        "虹口区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "钟山初级中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入虹口区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "凉城大居核心小学，操场宽敞，阳光体育特色，孩子身体健康开朗。"
    }
  },
  {
    "id": "hk-luxun-primary",
    "name": "上海市鲁迅初级中学附属小学",
    "shortName": "鲁迅初附小",
    "stage": "primary",
    "type": "public",
    "district": "虹口区",
    "address": "虹口区山阴路54号",
    "establishedYear": 2019,
    "tier": "公办二梯队",
    "badgeTag": "虹口区优质名校 · 鲁迅文脉 · 初小贯通",
    "tags": [
      "鲁迅文脉",
      "初小贯通",
      "对口直升"
    ],
    "location": {
      "lng": 121.476,
      "lat": 31.261
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "鲁迅初附小对口片区居委",
        "虹口区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "鲁迅文脉特色校本",
        "虹口区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "鲁迅初级中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入虹口区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "依托鲁迅初中名校教研，九年升学通道清晰，人文氛围深厚。"
    }
  },
  {
    "id": "hk-miyun-kindergarten",
    "name": "上海市虹口区密云路幼儿园",
    "shortName": "密云路幼儿园",
    "stage": "kindergarten",
    "type": "public",
    "district": "虹口区",
    "address": "虹口区密云路471弄18号",
    "establishedYear": 1982,
    "tier": "市示范园",
    "badgeTag": "虹口区优质名校 · 市示范园 · 曲阳板块",
    "tags": [
      "市示范园",
      "曲阳板块",
      "科学探究游戏"
    ],
    "location": {
      "lng": 121.484,
      "lat": 31.267
    },
    "tuition": {
      "amount": 700,
      "unit": "元/月",
      "isFree": false,
      "note": "公办示范/一级园标准保育费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "密云路幼儿园对口片区居委",
        "虹口区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "快乐素质 (重个性潜能/轻负担)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 25,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "市示范园特色校本",
        "虹口区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:15 - 16:00"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "虹口四中心",
        "红旗小学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入虹口区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "无书面作业",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "曲阳成熟社区金牌示范园，少儿科学小实验活动开展得极其生动。"
    }
  },
  {
    "id": "bs-bs3-primary",
    "name": "上海市宝山区第三中心小学",
    "shortName": "宝山三中心",
    "stage": "primary",
    "type": "public",
    "district": "宝山区",
    "address": "宝山区团结路137号",
    "establishedYear": 1986,
    "tier": "公办二梯队",
    "badgeTag": "宝山区优质名校 · 宝山城区 · 美术特色",
    "tags": [
      "宝山城区",
      "美术特色",
      "素质教学"
    ],
    "location": {
      "lng": 121.489,
      "lat": 31.417
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "宝山三中心对口片区居委",
        "宝山区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "宝山城区特色校本",
        "宝山区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "宝山第一初级中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入宝山区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "宝山城区老牌公办，少儿绘画与版画全市知名，基础学科平稳。"
    }
  },
  {
    "id": "bs-guangyu-primary",
    "name": "上海市广育小学",
    "shortName": "广育小学",
    "stage": "primary",
    "type": "public",
    "district": "宝山区",
    "address": "宝山区友谊支路29号",
    "establishedYear": 1993,
    "tier": "公办二梯队",
    "badgeTag": "宝山区优质名校 · 广育群英 · 奥数强校",
    "tags": [
      "广育群英",
      "奥数强校",
      "友谊路学区"
    ],
    "location": {
      "lng": 121.497,
      "lat": 31.393
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "广育小学对口片区居委",
        "宝山区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "广育群英特色校本",
        "宝山区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "宝山实验学校初中部"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入宝山区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "以数学思维逻辑见长，曾多次在全市数学展示活动中取得优异成绩。"
    }
  },
  {
    "id": "bs-xingzhi-primary",
    "name": "上海市行知小学",
    "shortName": "行知小学",
    "stage": "primary",
    "type": "public",
    "district": "宝山区",
    "address": "宝山区子青路28号",
    "establishedYear": 1985,
    "tier": "公办二梯队",
    "badgeTag": "宝山区优质名校 · 行知先生思想 · 生活教育",
    "tags": [
      "行知先生思想",
      "生活教育",
      "严谨治学"
    ],
    "location": {
      "lng": 121.505,
      "lat": 31.399
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "行知小学对口片区居委",
        "宝山区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "行知先生思想特色校本",
        "宝山区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "行知实验中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入宝山区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "陶行知生活教育实验基地，学做合一，课业扎实规范。"
    }
  },
  {
    "id": "bs-hulin-primary",
    "name": "上海市虎林路小学",
    "shortName": "虎林路小学",
    "stage": "primary",
    "type": "public",
    "district": "宝山区",
    "address": "宝山区虎林路429号",
    "establishedYear": 1987,
    "tier": "普通优质公办",
    "badgeTag": "宝山区优质名校 · 共泗学区 · 少儿足球",
    "tags": [
      "共泗学区",
      "少儿足球",
      "亲近自然"
    ],
    "location": {
      "lng": 121.513,
      "lat": 31.405
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "虎林路小学对口片区居委",
        "宝山区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "共泗学区特色校本",
        "宝山区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "虎林中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入宝山区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "泗塘共富板块老牌学校，上海市校园足球传统强校，身体素质好。"
    }
  },
  {
    "id": "bs-bsshiyan-school-primary",
    "name": "上海市宝山实验学校 (小学部)",
    "shortName": "宝山实验学校",
    "stage": "primary",
    "type": "public",
    "district": "宝山区",
    "address": "宝山区友谊路1500号",
    "establishedYear": 1998,
    "tier": "公办一梯队",
    "badgeTag": "宝山区优质名校 · 九年一贯 · 宝山核心",
    "tags": [
      "九年一贯",
      "宝山核心",
      "中考王牌"
    ],
    "location": {
      "lng": 121.465,
      "lat": 31.411
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "catchmentAreas": [
        "宝山实验学校对口片区居委",
        "宝山区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "九年一贯特色校本",
        "宝山区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "宝山实验学校初中部"
      ],
      "directPassRatio": "本校内部九年一贯直升",
      "note": "对口升入宝山区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "九年一贯直升名校，初中部是宝山中考绝对中流砥柱。"
    }
  },
  {
    "id": "bs-hongxing-kindergarten",
    "name": "上海市宝山区红星幼儿园",
    "shortName": "红星幼儿园",
    "stage": "kindergarten",
    "type": "public",
    "district": "宝山区",
    "address": "宝山区友谊路108号",
    "establishedYear": 1958,
    "tier": "市示范园",
    "badgeTag": "宝山区优质名校 · 市示范园 · 儿童戏剧",
    "tags": [
      "市示范园",
      "儿童戏剧",
      "艺术启蒙"
    ],
    "location": {
      "lng": 121.473,
      "lat": 31.417
    },
    "tuition": {
      "amount": 700,
      "unit": "元/月",
      "isFree": false,
      "note": "公办示范/一级园标准保育费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "红星幼儿园对口片区居委",
        "宝山区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "快乐素质 (重个性潜能/轻负担)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 25,
      "curriculum": [
        "国家标准课程",
        "艺术/音乐/体育特色"
      ],
      "features": [
        "市示范园特色校本",
        "宝山区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:15 - 16:00"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "宝山实验小学",
        "宝山一中心"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入宝山区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "无书面作业",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "宝山区唯一老牌市示范幼儿园，儿童戏剧启蒙与艺术活动独步全区。"
    }
  },
  {
    "id": "jd-jd1-primary",
    "name": "上海市嘉定区第一中心小学",
    "shortName": "嘉定一中心",
    "stage": "primary",
    "type": "public",
    "district": "嘉定区",
    "address": "嘉定区仓场路335号",
    "establishedYear": 1988,
    "tier": "公办一梯队",
    "badgeTag": "嘉定区优质名校 · 嘉定双璧 · 现代名校",
    "tags": [
      "嘉定双璧",
      "现代名校",
      "综合素养优"
    ],
    "location": {
      "lng": 121.257,
      "lat": 31.363
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "catchmentAreas": [
        "嘉定一中心对口片区居委",
        "嘉定区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "嘉定双璧特色校本",
        "嘉定区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "嘉定区启良中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入嘉定区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "与普通小学齐名的嘉定名校，现代化校舍，英语和科技教育成效显著。"
    }
  },
  {
    "id": "jd-juyuan-primary",
    "name": "上海市嘉定区菊园实验学校 (小学部)",
    "shortName": "菊园实验学校",
    "stage": "primary",
    "type": "public",
    "district": "嘉定区",
    "address": "嘉定区棋盘路1588号",
    "establishedYear": 2007,
    "tier": "公办二梯队",
    "badgeTag": "嘉定区优质名校 · 菊园新区 · 九年一贯",
    "tags": [
      "菊园新区",
      "九年一贯",
      "科技创新"
    ],
    "location": {
      "lng": 121.265,
      "lat": 31.369
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "菊园实验学校对口片区居委",
        "嘉定区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "菊园新区特色校本",
        "嘉定区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "菊园实验学校初中部"
      ],
      "directPassRatio": "本校内部九年一贯直升",
      "note": "对口升入嘉定区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "九年一贯制公办学校，中科院院所生源多，科技发明活动丰富。"
    }
  },
  {
    "id": "jd-liucheng-primary",
    "name": "上海市疁城实验学校 (小学部)",
    "shortName": "疁城实验学校",
    "stage": "primary",
    "type": "public",
    "district": "嘉定区",
    "address": "嘉定区塔城路175号",
    "establishedYear": 2000,
    "tier": "公办二梯队",
    "badgeTag": "嘉定区优质名校 · 老城核心 · 九年一贯",
    "tags": [
      "老城核心",
      "九年一贯",
      "儒雅学风"
    ],
    "location": {
      "lng": 121.273,
      "lat": 31.375
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "疁城实验学校对口片区居委",
        "嘉定区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "老城核心特色校本",
        "嘉定区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "疁城实验学校初中部"
      ],
      "directPassRatio": "本校内部九年一贯直升",
      "note": "对口升入嘉定区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "地处嘉定老城塔城路，儒雅学风，九年贯通培养省心稳妥。"
    }
  },
  {
    "id": "jd-cas-primary",
    "name": "中国科学院上海实验学校 (小学部)",
    "shortName": "中科院上海实验",
    "stage": "primary",
    "type": "public",
    "district": "嘉定区",
    "address": "嘉定区嘉定新城秋竹路801号",
    "establishedYear": 2020,
    "tier": "公办一梯队",
    "badgeTag": "嘉定区优质名校 · 中科院共建 · 新城核心",
    "tags": [
      "中科院共建",
      "新城核心",
      "科学殿堂"
    ],
    "location": {
      "lng": 121.281,
      "lat": 31.381
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "catchmentAreas": [
        "中科院上海实验对口片区居委",
        "嘉定区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "中科院共建特色校本",
        "嘉定区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "中科院上海实验初中部"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入嘉定区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "中国科学院与嘉定区深度共建，院士专家进课堂，科学实验室顶配。"
    }
  },
  {
    "id": "jd-jdshiyan-kindergarten",
    "name": "上海市嘉定区实验幼儿园",
    "shortName": "嘉定实验幼儿园",
    "stage": "kindergarten",
    "type": "public",
    "district": "嘉定区",
    "address": "嘉定区新成路399号",
    "establishedYear": 1986,
    "tier": "市示范园",
    "badgeTag": "嘉定区优质名校 · 市示范园 · 嘉定龙头",
    "tags": [
      "市示范园",
      "嘉定龙头",
      "自然探究游戏"
    ],
    "location": {
      "lng": 121.289,
      "lat": 31.387
    },
    "tuition": {
      "amount": 700,
      "unit": "元/月",
      "isFree": false,
      "note": "公办示范/一级园标准保育费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "嘉定实验幼儿园对口片区居委",
        "嘉定区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "快乐素质 (重个性潜能/轻负担)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 25,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "市示范园特色校本",
        "嘉定区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:15 - 16:00"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "嘉定普通小学",
        "嘉定一中心"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入嘉定区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "无书面作业",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "嘉定区龙头示范园，大型自然生态运动农庄，深受新老嘉定人推崇。"
    }
  },
  {
    "id": "sj-zhongshan-primary",
    "name": "上海市松江区中山小学",
    "shortName": "松江中山小学",
    "stage": "primary",
    "type": "public",
    "district": "松江区",
    "address": "松江区中山中路121号",
    "establishedYear": 1904,
    "tier": "公办一梯队",
    "badgeTag": "松江区优质名校 · 百年学府 · 松江三强",
    "tags": [
      "百年学府",
      "松江三强",
      "中山人文"
    ],
    "location": {
      "lng": 121.204,
      "lat": 31.02
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "catchmentAreas": [
        "松江中山小学对口片区居委",
        "松江区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "百年学府特色校本",
        "松江区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "松江二中初级中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入松江区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "百年老校，松江三强之一，中山中路繁华处书香四溢，学业稳健。"
    }
  },
  {
    "id": "sj-sijing1-primary",
    "name": "上海市松江区泗泾第一小学",
    "shortName": "泗泾一小",
    "stage": "primary",
    "type": "public",
    "district": "松江区",
    "address": "泗泾镇开江中路18号",
    "establishedYear": 1905,
    "tier": "公办二梯队",
    "badgeTag": "松江区优质名校 · 古镇泗泾 · 马相伯母校",
    "tags": [
      "古镇泗泾",
      "马相伯母校",
      "百年积淀"
    ],
    "location": {
      "lng": 121.212,
      "lat": 31.026
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "泗泾一小对口片区居委",
        "松江区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "古镇泗泾特色校本",
        "松江区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "泗泾学校初中部"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入松江区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "复旦创始人马相伯家乡百年老校，文化底蕴深厚，对口生源稳步上升。"
    }
  },
  {
    "id": "sj-shangwaisj-primary",
    "name": "上海外国语大学松江外国语学校 (小学部)",
    "shortName": "上外松江外校",
    "stage": "primary",
    "type": "public",
    "district": "松江区",
    "address": "松江区梅家浜路1666号",
    "establishedYear": 2010,
    "tier": "公办一梯队",
    "badgeTag": "松江区优质名校 · 上外系 · 大学城辐射",
    "tags": [
      "上外系",
      "大学城辐射",
      "九年一贯外语拔尖"
    ],
    "location": {
      "lng": 121.22,
      "lat": 31.032
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "catchmentAreas": [
        "上外松江外校对口片区居委",
        "松江区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程",
        "双语浸润课程"
      ],
      "features": [
        "上外系特色校本",
        "松江区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "上外松外初中部"
      ],
      "directPassRatio": "本校内部九年一贯直升",
      "note": "对口升入松江区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "松江大学城核心高知聚集地，外语优势全区领先，九年一贯中考辉煌。"
    }
  },
  {
    "id": "sj-huazheng-primary",
    "name": "华东政法大学附属松江实验学校 (小学部)",
    "shortName": "华政松江实验",
    "stage": "primary",
    "type": "public",
    "district": "松江区",
    "address": "松江区广富林路3188号",
    "establishedYear": 2018,
    "tier": "公办一梯队",
    "badgeTag": "松江区优质名校 · 华政名牌 · 广富林板块",
    "tags": [
      "华政名牌",
      "广富林板块",
      "九年一贯卓越"
    ],
    "location": {
      "lng": 121.228,
      "lat": 31.038
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "catchmentAreas": [
        "华政松江实验对口片区居委",
        "松江区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "华政名牌特色校本",
        "松江区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "华政松江实验初中部"
      ],
      "directPassRatio": "本校内部九年一贯直升",
      "note": "对口升入松江区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "广富林文化遗址旁现代化名校，大学优质资源融入，硬件高大上。"
    }
  },
  {
    "id": "sj-rongle-kindergarten",
    "name": "上海市松江区荣乐幼儿园",
    "shortName": "松江荣乐幼儿园",
    "stage": "kindergarten",
    "type": "public",
    "district": "松江区",
    "address": "松江区荣乐西路618号",
    "establishedYear": 1993,
    "tier": "市示范园",
    "badgeTag": "松江区优质名校 · 市示范园 · 云间明珠",
    "tags": [
      "市示范园",
      "云间明珠",
      "生态启蒙"
    ],
    "location": {
      "lng": 121.236,
      "lat": 31.044
    },
    "tuition": {
      "amount": 700,
      "unit": "元/月",
      "isFree": false,
      "note": "公办示范/一级园标准保育费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "松江荣乐幼儿园对口片区居委",
        "松江区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "快乐素质 (重个性潜能/轻负担)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 25,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "市示范园特色校本",
        "松江区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:15 - 16:00"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "松江岳阳小学",
        "松江实验小学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入松江区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "无书面作业",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "松江区代表性市示范园，自然木质生态大玩具，呵护每个孩子童心。"
    }
  },
  {
    "id": "qp-songshanlu-primary",
    "name": "上海市青浦区嵩山路小学",
    "shortName": "嵩山路小学",
    "stage": "primary",
    "type": "public",
    "district": "青浦区",
    "address": "青浦区嵩山路69号",
    "establishedYear": 2015,
    "tier": "公办二梯队",
    "badgeTag": "青浦区优质名校 · 青浦新城 · 科技新锐",
    "tags": [
      "青浦新城",
      "科技新锐",
      "活力智慧"
    ],
    "location": {
      "lng": 121.14,
      "lat": 31.139
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "嵩山路小学对口片区居委",
        "青浦区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "青浦新城特色校本",
        "青浦区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "青浦区东方中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入青浦区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "青浦新城现代化学校，数字化教学设备一流，年轻骨干教师占比高。"
    }
  },
  {
    "id": "qp-xujing-primary",
    "name": "上海市青浦区徐泾小学",
    "shortName": "徐泾小学",
    "stage": "primary",
    "type": "public",
    "district": "青浦区",
    "address": "青浦区徐泾镇育才路88号",
    "establishedYear": 1905,
    "tier": "公办二梯队",
    "badgeTag": "青浦区优质名校 · 大虹桥核心 · 百年老牌",
    "tags": [
      "大虹桥核心",
      "百年老牌",
      "国际会展"
    ],
    "location": {
      "lng": 121.148,
      "lat": 31.145
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "徐泾小学对口片区居委",
        "青浦区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "大虹桥核心特色校本",
        "青浦区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "徐泾中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入青浦区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "大虹桥徐泾核心老校，伴随大虹桥商务区腾飞，综合实力显著提升。"
    }
  },
  {
    "id": "qp-zhujiajiao-primary",
    "name": "上海市青浦区朱家角小学",
    "shortName": "朱家角小学",
    "stage": "primary",
    "type": "public",
    "district": "青浦区",
    "address": "青浦区朱家角镇祥凝浜路218号",
    "establishedYear": 1907,
    "tier": "公办二梯队",
    "badgeTag": "青浦区优质名校 · 水乡古镇 · 江南水墨",
    "tags": [
      "水乡古镇",
      "江南水墨",
      "放生桥畔"
    ],
    "location": {
      "lng": 121.1,
      "lat": 31.151
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "朱家角小学对口片区居委",
        "青浦区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "水乡古镇特色校本",
        "青浦区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "朱家角中学初中部"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入青浦区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "千年古镇朱家角名牌公办，水墨书法与江南水乡民俗特色浓郁。"
    }
  },
  {
    "id": "qp-qpshiyan-kindergarten",
    "name": "上海市青浦区实验幼儿园",
    "shortName": "青浦实验幼儿园",
    "stage": "kindergarten",
    "type": "public",
    "district": "青浦区",
    "address": "青浦区青湖东路880号",
    "establishedYear": 1986,
    "tier": "市示范园",
    "badgeTag": "青浦区优质名校 · 市示范园 · 水乡童谣",
    "tags": [
      "市示范园",
      "水乡童谣",
      "快乐自主"
    ],
    "location": {
      "lng": 121.108,
      "lat": 31.157
    },
    "tuition": {
      "amount": 700,
      "unit": "元/月",
      "isFree": false,
      "note": "公办示范/一级园标准保育费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "青浦实验幼儿园对口片区居委",
        "青浦区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "快乐素质 (重个性潜能/轻负担)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 25,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "市示范园特色校本",
        "青浦区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:15 - 16:00"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "青浦实验小学",
        "青浦逸夫小学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入青浦区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "无书面作业",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "青浦公办幼教第一品牌，水乡生态体验与自主游戏全市领跑。"
    }
  },
  {
    "id": "fx-jiefanglu-primary",
    "name": "上海市奉贤区解放路小学",
    "shortName": "解放路小学",
    "stage": "primary",
    "type": "public",
    "district": "奉贤区",
    "address": "奉贤区解放东路880号",
    "establishedYear": 1988,
    "tier": "公办一梯队",
    "badgeTag": "奉贤区优质名校 · 奉贤双强 · 少儿科学院",
    "tags": [
      "奉贤双强",
      "少儿科学院",
      "南桥学区"
    ],
    "location": {
      "lng": 121.466,
      "lat": 30.93
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "catchmentAreas": [
        "解放路小学对口片区居委",
        "奉贤区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "奉贤双强特色校本",
        "奉贤区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "奉贤初级中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入奉贤区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "南桥核心名牌小学，全国十佳少儿科学院，理科逻辑与科技特长突出。"
    }
  },
  {
    "id": "fx-yuxiu-primary",
    "name": "上海市奉贤区育秀实验学校 (小学部)",
    "shortName": "育秀实验学校",
    "stage": "primary",
    "type": "public",
    "district": "奉贤区",
    "address": "奉贤区育秀路188号",
    "establishedYear": 1997,
    "tier": "公办一梯队",
    "badgeTag": "奉贤区优质名校 · 育秀名牌 · 九年一贯",
    "tags": [
      "育秀名牌",
      "九年一贯",
      "奉贤中考主力"
    ],
    "location": {
      "lng": 121.474,
      "lat": 30.906
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "catchmentAreas": [
        "育秀实验学校对口片区居委",
        "奉贤区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "育秀名牌特色校本",
        "奉贤区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "育秀实验学校初中部"
      ],
      "directPassRatio": "本校内部九年一贯直升",
      "note": "对口升入奉贤区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "奉贤老牌九年一贯名校，初小贯通教研深入，升学成绩稳定。"
    }
  },
  {
    "id": "fx-guhua-primary",
    "name": "上海市奉贤区古华小学",
    "shortName": "古华小学",
    "stage": "primary",
    "type": "public",
    "district": "奉贤区",
    "address": "奉贤区南桥镇秀龙路18号",
    "establishedYear": 1992,
    "tier": "公办二梯队",
    "badgeTag": "奉贤区优质名校 · 古华园畔 · 艺术体操",
    "tags": [
      "古华园畔",
      "艺术体操",
      "秀龙学区"
    ],
    "location": {
      "lng": 121.482,
      "lat": 30.912
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "古华小学对口片区居委",
        "奉贤区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程",
        "艺术/音乐/体育特色"
      ],
      "features": [
        "古华园畔特色校本",
        "奉贤区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "古华中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入奉贤区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "古华公园旁园林式公办，少儿艺术体操传统学校，校风纯正。"
    }
  },
  {
    "id": "fx-jiefanglu-kindergarten",
    "name": "上海市奉贤区解放路幼儿园",
    "shortName": "解放路幼儿园",
    "stage": "kindergarten",
    "type": "public",
    "district": "奉贤区",
    "address": "奉贤区解放西路136号",
    "establishedYear": 1984,
    "tier": "市示范园",
    "badgeTag": "奉贤区优质名校 · 市示范园 · 贤城金牌",
    "tags": [
      "市示范园",
      "贤城金牌",
      "生活体验游戏"
    ],
    "location": {
      "lng": 121.49,
      "lat": 30.918
    },
    "tuition": {
      "amount": 700,
      "unit": "元/月",
      "isFree": false,
      "note": "公办示范/一级园标准保育费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "解放路幼儿园对口片区居委",
        "奉贤区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "快乐素质 (重个性潜能/轻负担)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 25,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "市示范园特色校本",
        "奉贤区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:15 - 16:00"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "南桥小学",
        "奉贤实验小学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入奉贤区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "无书面作业",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "奉贤区金牌示范园，自主体验小镇游戏让孩子在模拟社会中快乐成长。"
    }
  },
  {
    "id": "js-shihua1-primary",
    "name": "上海市金山区石化第一小学",
    "shortName": "石化一小",
    "stage": "primary",
    "type": "public",
    "district": "金山区",
    "address": "金山区石化街道柳城路420号",
    "establishedYear": 1974,
    "tier": "公办二梯队",
    "badgeTag": "金山区优质名校 · 石化大厂底蕴 · 滨海特色",
    "tags": [
      "石化大厂底蕴",
      "滨海特色",
      "数理扎实"
    ],
    "location": {
      "lng": 121.366,
      "lat": 30.748
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "石化一小对口片区居委",
        "金山区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "石化大厂底蕴特色校本",
        "金山区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "蒙山中学",
        "金卫中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入金山区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "上海石化配套老牌公办，名师汇聚，数理基础非常扎实。"
    }
  },
  {
    "id": "js-erzhongxin-primary",
    "name": "上海市金山区第二中心小学",
    "shortName": "金山二中心",
    "stage": "primary",
    "type": "public",
    "district": "金山区",
    "address": "金山区朱泾镇健康路20号",
    "establishedYear": 1948,
    "tier": "公办二梯队",
    "badgeTag": "金山区优质名校 · 朱泾名校 · 少儿版画",
    "tags": [
      "朱泾名校",
      "少儿版画",
      "扎实学风"
    ],
    "location": {
      "lng": 121.318,
      "lat": 30.754
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "金山二中心对口片区居委",
        "金山区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "朱泾名校特色校本",
        "金山区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "罗星中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入金山区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "朱泾板块老牌公办，少儿版画全国获奖无数，各科学业稳扎稳打。"
    }
  },
  {
    "id": "js-tinglin-primary",
    "name": "上海市金山区亭林小学",
    "shortName": "亭林小学",
    "stage": "primary",
    "type": "public",
    "district": "金山区",
    "address": "金山区亭林镇寺平南路19号",
    "establishedYear": 1906,
    "tier": "公办二梯队",
    "badgeTag": "金山区优质名校 · 古镇亭林 · 顾野王读书堆",
    "tags": [
      "古镇亭林",
      "顾野王读书堆",
      "书法文脉"
    ],
    "location": {
      "lng": 121.326,
      "lat": 30.73
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "亭林小学对口片区居委",
        "金山区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程",
        "艺术/音乐/体育特色"
      ],
      "features": [
        "古镇亭林特色校本",
        "金山区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "亭林中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入金山区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "江南文化名镇百年老校，顾野王读书堆旧址，文脉悠远淳朴。"
    }
  },
  {
    "id": "js-jsshiyan-kindergarten",
    "name": "上海市金山区实验幼儿园",
    "shortName": "金山实验幼儿园",
    "stage": "kindergarten",
    "type": "public",
    "district": "金山区",
    "address": "金山区石化街道象州路133号",
    "establishedYear": 1981,
    "tier": "市示范园",
    "badgeTag": "金山区优质名校 · 市示范园 · 海韵贝壳",
    "tags": [
      "市示范园",
      "海韵贝壳",
      "快乐运动"
    ],
    "location": {
      "lng": 121.334,
      "lat": 30.736
    },
    "tuition": {
      "amount": 700,
      "unit": "元/月",
      "isFree": false,
      "note": "公办示范/一级园标准保育费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "金山实验幼儿园对口片区居委",
        "金山区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "快乐素质 (重个性潜能/轻负担)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 25,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "市示范园特色校本",
        "金山区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:15 - 16:00"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "海棠小学",
        "石化一小"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入金山区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "无书面作业",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "金山龙头示范园，利用滨海滩涂贝壳特色开发创意美育，全市闻名。"
    }
  },
  {
    "id": "cm-jiangfan-primary",
    "name": "上海市崇明区江帆小学",
    "shortName": "崇明江帆小学",
    "stage": "primary",
    "type": "public",
    "district": "崇明区",
    "address": "崇明区城桥镇江帆路123号",
    "establishedYear": 2012,
    "tier": "公办二梯队",
    "badgeTag": "崇明区优质名校 · 城桥新城 · 扬帆远航",
    "tags": [
      "城桥新城",
      "扬帆远航",
      "现代教育"
    ],
    "location": {
      "lng": 121.397,
      "lat": 31.623
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "崇明江帆小学对口片区居委",
        "崇明区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "城桥新城特色校本",
        "崇明区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "崇明区实验中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入崇明区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "城桥新核心城区现代化公办，年轻骨干教师多，课后服务广受赞誉。"
    }
  },
  {
    "id": "cm-baozhen-primary",
    "name": "上海市崇明区堡镇小学",
    "shortName": "堡镇小学",
    "stage": "primary",
    "type": "public",
    "district": "崇明区",
    "address": "崇明区堡镇向阳路18号",
    "establishedYear": 1905,
    "tier": "公办二梯队",
    "badgeTag": "崇明区优质名校 · 崇明东部龙头 · 百年名牌",
    "tags": [
      "崇明东部龙头",
      "百年名牌",
      "书香堡镇"
    ],
    "location": {
      "lng": 121.405,
      "lat": 31.629
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "堡镇小学对口片区居委",
        "崇明区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "崇明东部龙头特色校本",
        "崇明区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "堡镇中学初中部"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入崇明区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "崇明东部重镇百年名校，历年为崇明中学输送大批卓越生源。"
    }
  },
  {
    "id": "cm-xinhe-primary",
    "name": "上海市崇明区新河小学",
    "shortName": "新河小学",
    "stage": "primary",
    "type": "public",
    "district": "崇明区",
    "address": "崇明区新河镇新开南路2号",
    "establishedYear": 1906,
    "tier": "普通优质公办",
    "badgeTag": "崇明区优质名校 · 富硒之乡 · 阳光体育",
    "tags": [
      "富硒之乡",
      "阳光体育",
      "淳朴自然"
    ],
    "location": {
      "lng": 121.413,
      "lat": 31.635
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "新河小学对口片区居委",
        "崇明区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "富硒之乡特色校本",
        "崇明区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "新河中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入崇明区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "崇明中部百年老牌，田园自然生态探究，生源淳朴有礼貌。"
    }
  },
  {
    "id": "cm-cmshiyan-kindergarten",
    "name": "上海市崇明区实验幼儿园",
    "shortName": "崇明实验幼儿园",
    "stage": "kindergarten",
    "type": "public",
    "district": "崇明区",
    "address": "崇明区城桥镇八一路238号",
    "establishedYear": 1956,
    "tier": "市示范园",
    "badgeTag": "崇明区优质名校 · 市示范园 · 生态海岛",
    "tags": [
      "市示范园",
      "生态海岛",
      "绿色童年"
    ],
    "location": {
      "lng": 121.421,
      "lat": 31.611
    },
    "tuition": {
      "amount": 700,
      "unit": "元/月",
      "isFree": false,
      "note": "公办示范/一级园标准保育费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "崇明实验幼儿园对口片区居委",
        "崇明区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "快乐素质 (重个性潜能/轻负担)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 25,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "市示范园特色校本",
        "崇明区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:15 - 16:00"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "崇明实验小学",
        "东门小学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入崇明区优质初中"
    },
    "reviews": {
      "parentRating": 4.7,
      "homeworkDuration": "无书面作业",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "崇明区唯一老牌市示范公办园，海岛自然微田园与木工游戏极富乐趣。"
    }
  },
  {
    "id": "pd-yangjing-juguan-primary",
    "name": "上海市洋泾菊园实验学校 (小学部)",
    "shortName": "洋泾菊园",
    "stage": "primary",
    "type": "public",
    "district": "浦东新区",
    "address": "浦东新区栖霞路34号",
    "establishedYear": 1998,
    "tier": "公办一梯队",
    "badgeTag": "浦东新区优质名校 · 陆家嘴核心 · 九年一贯",
    "tags": [
      "陆家嘴核心",
      "九年一贯",
      "小初连读"
    ],
    "location": {
      "lng": 121.523,
      "lat": 31.216
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "catchmentAreas": [
        "洋泾菊园对口片区居委",
        "浦东新区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "陆家嘴核心特色校本",
        "浦东新区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "洋泾菊园初中部"
      ],
      "directPassRatio": "本校内部九年一贯直升",
      "note": "对口升入浦东新区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "陆家嘴金融城优质九年一贯制公办，生源整齐，直升初中部中考优异。"
    }
  },
  {
    "id": "pd-jincai-youyou-primary",
    "name": "上海市进才由由小学",
    "shortName": "进才由由",
    "stage": "primary",
    "type": "public",
    "district": "浦东新区",
    "address": "浦东新区严民路21号",
    "establishedYear": 1996,
    "tier": "公办二梯队",
    "badgeTag": "浦东新区优质名校 · 由由社区 · 进才集团",
    "tags": [
      "由由社区",
      "进才集团",
      "快乐求知"
    ],
    "location": {
      "lng": 121.53,
      "lat": 31.221
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "进才由由对口片区居委",
        "浦东新区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "由由社区特色校本",
        "浦东新区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "由由中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入浦东新区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "进才教育集团成员校，由由板块成熟公办，老师爱岗敬业。"
    }
  },
  {
    "id": "pd-gonglu-primary",
    "name": "上海市龚路中心小学",
    "shortName": "龚路中心小学",
    "stage": "primary",
    "type": "public",
    "district": "浦东新区",
    "address": "浦东新区龚路镇龚丰路106号",
    "establishedYear": 1906,
    "tier": "公办二梯队",
    "badgeTag": "浦东新区优质名校 · 曹路核心 · 百年名牌",
    "tags": [
      "曹路核心",
      "百年名牌",
      "少儿棋艺"
    ],
    "location": {
      "lng": 121.537,
      "lat": 31.226
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "龚路中心小学对口片区居委",
        "浦东新区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "曹路核心特色校本",
        "浦东新区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "龚路中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入浦东新区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "曹路大板块百年老牌名小，少儿棋艺和数理基础过硬，声誉卓著。"
    }
  },
  {
    "id": "pd-gaoqiao-primary",
    "name": "上海市高桥镇中心小学",
    "shortName": "高桥镇中心小学",
    "stage": "primary",
    "type": "public",
    "district": "浦东新区",
    "address": "浦东新区高桥镇欧高路100号",
    "establishedYear": 1904,
    "tier": "公办二梯队",
    "badgeTag": "浦东新区优质名校 · 千年古镇 · 高桥核心",
    "tags": [
      "千年古镇",
      "高桥核心",
      "历史悠久"
    ],
    "location": {
      "lng": 121.544,
      "lat": 31.231
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "高桥镇中心小学对口片区居委",
        "浦东新区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "千年古镇特色校本",
        "浦东新区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "高桥初级中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入浦东新区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "高桥古镇第一名小，百年历史厚重，师资团队稳定踏实。"
    }
  },
  {
    "id": "pd-nanhui-shiyan-primary",
    "name": "上海市南汇实验学校 (小学部)",
    "shortName": "南汇实验学校",
    "stage": "primary",
    "type": "public",
    "district": "浦东新区",
    "address": "浦东新区惠南镇城东路568号",
    "establishedYear": 2004,
    "tier": "公办一梯队",
    "badgeTag": "浦东新区优质名校 · 惠南核心 · 九年一贯",
    "tags": [
      "惠南核心",
      "九年一贯",
      "南汇名牌"
    ],
    "location": {
      "lng": 121.551,
      "lat": 31.211
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "catchmentAreas": [
        "南汇实验学校对口片区居委",
        "浦东新区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "惠南核心特色校本",
        "浦东新区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "南汇实验学校初中部"
      ],
      "directPassRatio": "本校内部九年一贯直升",
      "note": "对口升入浦东新区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "原南汇现代九年一贯制实验旗帜，中考四校八大录取喜报频传。"
    }
  },
  {
    "id": "pd-xincheng-primary",
    "name": "上海市浦东新城小学",
    "shortName": "浦东新城小学",
    "stage": "primary",
    "type": "public",
    "district": "浦东新区",
    "address": "浦东新区凌兆路538号",
    "establishedYear": 1996,
    "tier": "普通优质公办",
    "badgeTag": "浦东新区优质名校 · 三林大居 · 艺术体育",
    "tags": [
      "三林大居",
      "艺术体育",
      "温馨家园"
    ],
    "location": {
      "lng": 121.558,
      "lat": 31.216
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "浦东新城小学对口片区居委",
        "浦东新区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程",
        "艺术/音乐/体育特色"
      ],
      "features": [
        "三林大居特色校本",
        "浦东新区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "三林中学北校"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入浦东新区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "三林凌兆大板块成熟公办，交通便利，学风踏实，老师负责。"
    }
  },
  {
    "id": "pd-xiehe-primary",
    "name": "上海浦东新区民办协和双语学校 (小学部)",
    "shortName": "浦东协和双语",
    "stage": "primary",
    "type": "private",
    "district": "浦东新区",
    "address": "浦东新区雪野路48号",
    "establishedYear": 2008,
    "tier": "双语国际优质",
    "badgeTag": "浦东新区优质名校 · 世博滨江 · 双语融合",
    "tags": [
      "世博滨江",
      "双语融合",
      "国际全人"
    ],
    "location": {
      "lng": 121.565,
      "lat": 31.221
    },
    "tuition": {
      "amount": 25000,
      "unit": "元/学期",
      "isFree": false,
      "note": "民办物价核准备案标准"
    },
    "enrollment": {
      "scope": "本区摇号",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": false,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "浦东协和双语对口片区居委",
        "浦东新区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "中配 (外教专职授课)",
      "classSize": 30,
      "curriculum": [
        "国家标准课程",
        "双语浸润课程"
      ],
      "features": [
        "世博滨江特色校本",
        "浦东新区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "浦东协和初中部"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入浦东新区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "世博滨江知名双语学校，中外教双班主任制，语言与探究素养顶尖。"
    }
  },
  {
    "id": "pd-smic-primary",
    "name": "上海市民办中芯学校 (小学部)",
    "shortName": "中芯学校",
    "stage": "primary",
    "type": "private",
    "district": "浦东新区",
    "address": "浦东新区青桐路169号",
    "establishedYear": 2001,
    "tier": "民办优质/特色",
    "badgeTag": "浦东新区优质名校 · 张江高科 · 中芯子弟",
    "tags": [
      "张江高科",
      "中芯子弟",
      "中西合璧"
    ],
    "location": {
      "lng": 121.523,
      "lat": 31.226
    },
    "tuition": {
      "amount": 25000,
      "unit": "元/学期",
      "isFree": false,
      "note": "民办物价核准备案标准"
    },
    "enrollment": {
      "scope": "本区摇号",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": false,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "中芯学校对口片区居委",
        "浦东新区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "中配 (外教专职授课)",
      "classSize": 30,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "张江高科特色校本",
        "浦东新区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "中芯学校初中部"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入浦东新区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "张江高科技园区精英创办，品格教育与跨文化交流蜚声浦东。"
    }
  },
  {
    "id": "pd-shande-primary",
    "name": "上海市民办尚德实验学校 (小学部)",
    "shortName": "尚德实验学校",
    "stage": "primary",
    "type": "private",
    "district": "浦东新区",
    "address": "浦东新区秀沿路1688号",
    "establishedYear": 2003,
    "tier": "民办优质/特色",
    "badgeTag": "浦东新区优质名校 · 康桥核心 · 十五年一贯",
    "tags": [
      "康桥核心",
      "十五年一贯",
      "IB认证"
    ],
    "location": {
      "lng": 121.53,
      "lat": 31.231
    },
    "tuition": {
      "amount": 25000,
      "unit": "元/学期",
      "isFree": false,
      "note": "民办物价核准备案标准"
    },
    "enrollment": {
      "scope": "本区摇号",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": false,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "尚德实验学校对口片区居委",
        "浦东新区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "中配 (外教专职授课)",
      "classSize": 30,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "康桥核心特色校本",
        "浦东新区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "尚德实验初中部"
      ],
      "directPassRatio": "本校内部九年一贯直升",
      "note": "对口升入浦东新区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "占地广袤的现代教育航母，IB全学段认证，寄宿与走读兼备。"
    }
  },
  {
    "id": "pd-mudan-kindergarten",
    "name": "上海市浦东新区牡丹幼儿园",
    "shortName": "牡丹幼儿园",
    "stage": "kindergarten",
    "type": "public",
    "district": "浦东新区",
    "address": "浦东新区牡丹路399弄34号",
    "establishedYear": 1995,
    "tier": "市一级园",
    "badgeTag": "浦东新区优质名校 · 市一级园 · 花木核心",
    "tags": [
      "市一级园",
      "花木核心",
      "快乐游戏"
    ],
    "location": {
      "lng": 121.537,
      "lat": 31.211
    },
    "tuition": {
      "amount": 225,
      "unit": "元/月",
      "isFree": false,
      "note": "公办示范/一级园标准保育费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "牡丹幼儿园对口片区居委",
        "浦东新区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "快乐素质 (重个性潜能/轻负担)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "市一级园特色校本",
        "浦东新区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:15 - 16:00"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "海桐小学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入浦东新区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "无书面作业",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "花木板块成熟公办一级园，绿化优美，老师温柔负责。"
    }
  },
  {
    "id": "mh-luoyang-primary",
    "name": "上海市闵行区罗阳小学",
    "shortName": "罗阳小学",
    "stage": "primary",
    "type": "public",
    "district": "闵行区",
    "address": "闵行区罗阳路800号",
    "establishedYear": 1998,
    "tier": "公办二梯队",
    "badgeTag": "闵行区优质名校 · 罗阳板块 · 少儿击剑",
    "tags": [
      "罗阳板块",
      "少儿击剑",
      "特色育人"
    ],
    "location": {
      "lng": 121.381,
      "lat": 31.107
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "罗阳小学对口片区居委",
        "闵行区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "罗阳板块特色校本",
        "闵行区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "罗阳中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入闵行区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "少儿击剑传统特色校，校风端庄，初小贯通发展平稳。"
    }
  },
  {
    "id": "mh-shenxin-primary",
    "name": "上海市闵行区申莘小学",
    "shortName": "申莘小学",
    "stage": "primary",
    "type": "public",
    "district": "闵行区",
    "address": "闵行区申北路325号",
    "establishedYear": 1996,
    "tier": "普通优质公办",
    "badgeTag": "闵行区优质名校 · 莘庄工业区 · 少年警球",
    "tags": [
      "莘庄工业区",
      "少年警球",
      "扎实严谨"
    ],
    "location": {
      "lng": 121.388,
      "lat": 31.112
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "申莘小学对口片区居委",
        "闵行区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "莘庄工业区特色校本",
        "闵行区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "申莘中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入闵行区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "莘庄工业区配套核心公办，老师爱生敬业，课后辅导细致。"
    }
  },
  {
    "id": "mh-rixin-primary",
    "name": "上海市日新实验小学",
    "shortName": "日新实验小学",
    "stage": "primary",
    "type": "public",
    "district": "闵行区",
    "address": "闵行区友爱路158号",
    "establishedYear": 2003,
    "tier": "公办二梯队",
    "badgeTag": "闵行区优质名校 · 日新月异 · 创新实验",
    "tags": [
      "日新月异",
      "创新实验",
      "名师引领"
    ],
    "location": {
      "lng": 121.395,
      "lat": 31.117
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "日新实验小学对口片区居委",
        "闵行区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "日新月异特色校本",
        "闵行区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "莘松中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入闵行区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "闵行教育学院实验基地，教改活跃，思维训练与多学科融合亮眼。"
    }
  },
  {
    "id": "mh-huaping-primary",
    "name": "上海市闵行区华坪小学",
    "shortName": "华坪小学",
    "stage": "primary",
    "type": "public",
    "district": "闵行区",
    "address": "闵行区江川路街道华坪路110号",
    "establishedYear": 1959,
    "tier": "公办二梯队",
    "badgeTag": "闵行区优质名校 · 老闵行老牌 · 大厂文脉",
    "tags": [
      "老闵行老牌",
      "大厂文脉",
      "书法金石"
    ],
    "location": {
      "lng": 121.402,
      "lat": 31.122
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "华坪小学对口片区居委",
        "闵行区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程",
        "艺术/音乐/体育特色"
      ],
      "features": [
        "老闵行老牌特色校本",
        "闵行区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "闵行三中初中部"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入闵行区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "老闵行四大机工文脉名校，书法和语文素养底子极扎实。"
    }
  },
  {
    "id": "mh-mingqiang2-primary",
    "name": "上海市七宝明强第二小学",
    "shortName": "明强第二小学",
    "stage": "primary",
    "type": "public",
    "district": "闵行区",
    "address": "闵行区七宝镇漕宝路3318号",
    "establishedYear": 2005,
    "tier": "公办一梯队",
    "badgeTag": "闵行区优质名校 · 明强系 · 七宝核心",
    "tags": [
      "明强系",
      "七宝核心",
      "优质公办"
    ],
    "location": {
      "lng": 121.36,
      "lat": 31.102
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "catchmentAreas": [
        "明强第二小学对口片区居委",
        "闵行区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "明强系特色校本",
        "闵行区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "七宝二中"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入闵行区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "承袭明强小学名校血统，师资雄厚，中考升学名列全区前列。"
    }
  },
  {
    "id": "mh-vanke-primary",
    "name": "上海万科双语学校 (小学部)",
    "shortName": "万科双语学校",
    "stage": "primary",
    "type": "private",
    "district": "闵行区",
    "address": "闵行区七莘路3568号",
    "establishedYear": 2016,
    "tier": "民办优质/特色",
    "badgeTag": "闵行区优质名校 · 万科教育 · 双语浸润",
    "tags": [
      "万科教育",
      "双语浸润",
      "全人发展"
    ],
    "location": {
      "lng": 121.367,
      "lat": 31.107
    },
    "tuition": {
      "amount": 25000,
      "unit": "元/学期",
      "isFree": false,
      "note": "民办物价核准备案标准"
    },
    "enrollment": {
      "scope": "本区摇号",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": false,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "万科双语学校对口片区居委",
        "闵行区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "中配 (外教专职授课)",
      "classSize": 30,
      "curriculum": [
        "国家标准课程",
        "双语浸润课程"
      ],
      "features": [
        "万科教育特色校本",
        "闵行区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "万科双语初中部"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入闵行区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "前身为复旦万科实验学校，深耕双语融合课程二十余年，口碑卓著。"
    }
  },
  {
    "id": "mh-xinzhuang-kindergarten",
    "name": "上海市闵行区莘庄幼儿园",
    "shortName": "莘庄幼儿园",
    "stage": "kindergarten",
    "type": "public",
    "district": "闵行区",
    "address": "闵行区莘庄镇莘建路200号",
    "establishedYear": 1958,
    "tier": "市一级园",
    "badgeTag": "闵行区优质名校 · 市一级园 · 莘庄老牌",
    "tags": [
      "市一级园",
      "莘庄老牌",
      "温暖童年"
    ],
    "location": {
      "lng": 121.374,
      "lat": 31.112
    },
    "tuition": {
      "amount": 225,
      "unit": "元/月",
      "isFree": false,
      "note": "公办示范/一级园标准保育费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "莘庄幼儿园对口片区居委",
        "闵行区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "快乐素质 (重个性潜能/轻负担)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "市一级园特色校本",
        "闵行区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:15 - 16:00"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "莘庄镇小学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入闵行区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "无书面作业",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "莘庄镇中心六十年老牌公办园，教工耐心尽责，家长口碑极高。"
    }
  },
  {
    "id": "ja-zhabei3-primary",
    "name": "上海市闸北第三中心小学",
    "shortName": "闸北三中心",
    "stage": "primary",
    "type": "public",
    "district": "静安区",
    "address": "静安区永兴路211号",
    "establishedYear": 1938,
    "tier": "公办二梯队",
    "badgeTag": "静安区优质名校 · 宝山路板块 · 少儿排球",
    "tags": [
      "宝山路板块",
      "少儿排球",
      "扎实严谨"
    ],
    "location": {
      "lng": 121.448,
      "lat": 31.269
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "闸北三中心对口片区居委",
        "静安区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "宝山路板块特色校本",
        "静安区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "青云中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入静安区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "老闸北知名三中心，少儿排球传统强项，基础学科常抓不懈。"
    }
  },
  {
    "id": "ja-jadisyi-primary",
    "name": "上海市静安区第一实验小学",
    "shortName": "静安第一实验",
    "stage": "primary",
    "type": "public",
    "district": "静安区",
    "address": "静安区陕西北路331号",
    "establishedYear": 1905,
    "tier": "公办一梯队",
    "badgeTag": "静安区优质名校 · 南京西路 · 百年名校",
    "tags": [
      "南京西路",
      "百年名校",
      "小班化实验"
    ],
    "location": {
      "lng": 121.455,
      "lat": 31.274
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "catchmentAreas": [
        "静安第一实验对口片区居委",
        "静安区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "南京西路特色校本",
        "静安区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "市西初级中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入静安区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "南京西路商圈百年老牌，小班化个别化教育典范，直面对口名初。"
    }
  },
  {
    "id": "ja-tongdemeng-primary",
    "name": "上海市静安区童的梦艺术小学",
    "shortName": "童的梦小学",
    "stage": "primary",
    "type": "public",
    "district": "静安区",
    "address": "静安区阳曲路150号",
    "establishedYear": 1993,
    "tier": "公办二梯队",
    "badgeTag": "静安区优质名校 · 艺术特色 · 舞蹈管乐",
    "tags": [
      "艺术特色",
      "舞蹈管乐",
      "彭浦新村"
    ],
    "location": {
      "lng": 121.462,
      "lat": 31.254
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "童的梦小学对口片区居委",
        "静安区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程",
        "艺术/音乐/体育特色"
      ],
      "features": [
        "艺术特色特色校本",
        "静安区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "彭浦初级中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入静安区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "静安北区艺术特色旗帜校，少儿舞蹈与管弦乐团全市知名。"
    }
  },
  {
    "id": "ja-shangwaija-primary",
    "name": "上海外国语大学静安外国语小学",
    "shortName": "上外静安外小",
    "stage": "primary",
    "type": "private",
    "district": "静安区",
    "address": "静安区北京西路1097号",
    "establishedYear": 2002,
    "tier": "民办优质/特色",
    "badgeTag": "静安区优质名校 · 静安寺核心 · 外语名牌",
    "tags": [
      "静安寺核心",
      "外语名牌",
      "精细小班"
    ],
    "location": {
      "lng": 121.469,
      "lat": 31.259
    },
    "tuition": {
      "amount": 25000,
      "unit": "元/学期",
      "isFree": false,
      "note": "民办物价核准备案标准"
    },
    "enrollment": {
      "scope": "本区摇号",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": false,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "上外静安外小对口片区居委",
        "静安区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "中配 (外教专职授课)",
      "classSize": 30,
      "curriculum": [
        "国家标准课程",
        "双语浸润课程"
      ],
      "features": [
        "静安寺核心特色校本",
        "静安区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "上外静安外国语中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入静安区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "静安寺核心地段优质民办，外语听说读写俱佳，学生自信儒雅。"
    }
  },
  {
    "id": "ja-weihai3-kindergarten",
    "name": "上海市威海路第三幼儿园",
    "shortName": "威海三幼",
    "stage": "kindergarten",
    "type": "public",
    "district": "静安区",
    "address": "静安区威海路730号",
    "establishedYear": 1953,
    "tier": "市示范园",
    "badgeTag": "静安区优质名校 · 市示范园 · 儿童戏剧",
    "tags": [
      "市示范园",
      "儿童戏剧",
      "南京西路"
    ],
    "location": {
      "lng": 121.427,
      "lat": 31.264
    },
    "tuition": {
      "amount": 700,
      "unit": "元/月",
      "isFree": false,
      "note": "公办示范/一级园标准保育费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "威海三幼对口片区居委",
        "静安区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "快乐素质 (重个性潜能/轻负担)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "市示范园特色校本",
        "静安区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:15 - 16:00"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "一师附小",
        "静安一中心"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入静安区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "无书面作业",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "上海最早创设儿童戏剧教育的市示范园，孩子在舞台上闪闪发光。"
    }
  },
  {
    "id": "hp-shizhuan-primary",
    "name": "上海师范专科学校附属小学 (师专附小)",
    "shortName": "师专附小",
    "stage": "primary",
    "type": "public",
    "district": "黄浦区",
    "address": "黄浦区局门路440号",
    "establishedYear": 1941,
    "tier": "公办一梯队",
    "badgeTag": "黄浦区优质名校 · 五里桥学区 · 高校附小",
    "tags": [
      "五里桥学区",
      "高校附小",
      "艺术科创"
    ],
    "location": {
      "lng": 121.47,
      "lat": 31.236
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "catchmentAreas": [
        "师专附小对口片区居委",
        "黄浦区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程",
        "艺术/音乐/体育特色",
        "科创数理特色"
      ],
      "features": [
        "五里桥学区特色校本",
        "黄浦区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "卢湾初级中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入黄浦区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "原卢湾老牌第一梯队，师资教研底蕴深厚，对口卢湾初中口碑极好。"
    }
  },
  {
    "id": "hp-fuxingdong3-primary",
    "name": "上海市复兴东路第三小学",
    "shortName": "复兴东路三小",
    "stage": "primary",
    "type": "public",
    "district": "黄浦区",
    "address": "黄浦区复兴东路222号",
    "establishedYear": 1958,
    "tier": "公办二梯队",
    "badgeTag": "黄浦区优质名校 · 老西门学区 · 数学思维",
    "tags": [
      "老西门学区",
      "数学思维",
      "严谨治学"
    ],
    "location": {
      "lng": 121.477,
      "lat": 31.241
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "复兴东路三小对口片区居委",
        "黄浦区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程",
        "科创数理特色"
      ],
      "features": [
        "老西门学区特色校本",
        "黄浦区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "市八初级中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入黄浦区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "老西门板块知名公办，理科思维训练深入，教师兢兢业业。"
    }
  },
  {
    "id": "hp-julu1-primary",
    "name": "上海市巨鹿路第一小学",
    "shortName": "巨鹿路一小",
    "stage": "primary",
    "type": "public",
    "district": "黄浦区",
    "address": "黄浦区巨鹿路709号",
    "establishedYear": 1907,
    "tier": "公办二梯队",
    "badgeTag": "黄浦区优质名校 · 乒乓摇篮 · 衡复风貌",
    "tags": [
      "乒乓摇篮",
      "衡复风貌",
      "国球冠军"
    ],
    "location": {
      "lng": 121.484,
      "lat": 31.221
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "巨鹿路一小对口片区居委",
        "黄浦区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "乒乓摇篮特色校本",
        "黄浦区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "位育初级中学",
        "向明初"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入黄浦区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "国际乒联主席徐寅生母校，世界冠军摇篮，国球特色闪耀上海。"
    }
  },
  {
    "id": "hp-haihua-primary",
    "name": "上海市海华小学",
    "shortName": "海华小学",
    "stage": "primary",
    "type": "public",
    "district": "黄浦区",
    "address": "黄浦区打浦路303弄16号",
    "establishedYear": 1994,
    "tier": "公办二梯队",
    "badgeTag": "黄浦区优质名校 · 打浦桥核心 · 外语听说",
    "tags": [
      "打浦桥核心",
      "外语听说",
      "现代校舍"
    ],
    "location": {
      "lng": 121.491,
      "lat": 31.226
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "海华小学对口片区居委",
        "黄浦区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程",
        "双语浸润课程"
      ],
      "features": [
        "打浦桥核心特色校本",
        "黄浦区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "卢湾中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入黄浦区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "打浦桥高品质社区对口小学，英语特色突出，校园现代优美。"
    }
  },
  {
    "id": "hp-music-kindergarten",
    "name": "上海音乐幼儿园 (黄浦校区)",
    "shortName": "上海音乐幼儿园",
    "stage": "kindergarten",
    "type": "private",
    "district": "黄浦区",
    "address": "黄浦区吉安路2号",
    "establishedYear": 1984,
    "tier": "市示范园",
    "badgeTag": "黄浦区优质名校 · 市示范园 · 音乐早教",
    "tags": [
      "市示范园",
      "音乐早教",
      "艺术摇篮"
    ],
    "location": {
      "lng": 121.498,
      "lat": 31.231
    },
    "tuition": {
      "amount": 25000,
      "unit": "元/学期",
      "isFree": false,
      "note": "民办物价核准备案标准"
    },
    "enrollment": {
      "scope": "本区摇号",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": false,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "上海音乐幼儿园对口片区居委",
        "黄浦区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "快乐素质 (重个性潜能/轻负担)",
      "foreignTeacherRatio": "中配 (外教专职授课)",
      "classSize": 30,
      "curriculum": [
        "国家标准课程",
        "艺术/音乐/体育特色"
      ],
      "features": [
        "市示范园特色校本",
        "黄浦区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:15 - 16:00"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "师专附小",
        "实验小学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入黄浦区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "无书面作业",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "全国第一所以音乐美育为特色的示范园，名琴环绕，艺术熏陶顶配。"
    }
  },
  {
    "id": "cn-anshun-primary",
    "name": "上海市长宁区安顺路小学",
    "shortName": "安顺路小学",
    "stage": "primary",
    "type": "public",
    "district": "长宁区",
    "address": "长宁区安顺路200弄1号",
    "establishedYear": 1988,
    "tier": "普通优质公办",
    "badgeTag": "长宁区优质名校 · 虹桥街道 · 环保生态",
    "tags": [
      "虹桥街道",
      "环保生态",
      "扎实教学"
    ],
    "location": {
      "lng": 121.442,
      "lat": 31.222
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "安顺路小学对口片区居委",
        "长宁区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "虹桥街道特色校本",
        "长宁区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "天山初级中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入长宁区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "虹桥街道规范公办，全国绿色环保学校，课业负担轻身心健康。"
    }
  },
  {
    "id": "cn-kaiyuan-primary",
    "name": "上海市长宁区开元小学",
    "shortName": "开元小学",
    "stage": "primary",
    "type": "public",
    "district": "长宁区",
    "address": "长宁区武夷路70弄7号",
    "establishedYear": 1993,
    "tier": "公办二梯队",
    "badgeTag": "长宁区优质名校 · 新华路街区 · 法治特色",
    "tags": [
      "新华路街区",
      "法治特色",
      "书香开元"
    ],
    "location": {
      "lng": 121.4,
      "lat": 31.227
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "开元小学对口片区居委",
        "长宁区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "新华路街区特色校本",
        "长宁区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "开元学校初中部"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入长宁区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "武夷路人文街区精品校，小而精，小初衔接开元学校升学顺畅。"
    }
  },
  {
    "id": "cn-yanan-primary",
    "name": "上海市延安初级中学附属小学",
    "shortName": "延安初附小",
    "stage": "primary",
    "type": "public",
    "district": "长宁区",
    "address": "长宁区茅台路625弄1号",
    "establishedYear": 2018,
    "tier": "公办一梯队",
    "badgeTag": "长宁区优质名校 · 延安系 · 初小贯通",
    "tags": [
      "延安系",
      "初小贯通",
      "名校基因"
    ],
    "location": {
      "lng": 121.407,
      "lat": 31.207
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "catchmentAreas": [
        "延安初附小对口片区居委",
        "长宁区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "延安系特色校本",
        "长宁区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "延安初级中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入长宁区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "依托长宁中考第一名校延安初中创办，贯通教研，成长迅速。"
    }
  },
  {
    "id": "cn-xinxiji-primary",
    "name": "上海市民办新世纪小学",
    "shortName": "新世纪小学",
    "stage": "primary",
    "type": "private",
    "district": "长宁区",
    "address": "长宁区兴国路374弄2号",
    "establishedYear": 1992,
    "tier": "民办优质/特色",
    "badgeTag": "长宁区优质名校 · 湖南路风貌 · 小班双语",
    "tags": [
      "湖南路风貌",
      "小班双语",
      "法租界名校"
    ],
    "location": {
      "lng": 121.414,
      "lat": 31.212
    },
    "tuition": {
      "amount": 25000,
      "unit": "元/学期",
      "isFree": false,
      "note": "民办物价核准备案标准"
    },
    "enrollment": {
      "scope": "本区摇号",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": false,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "新世纪小学对口片区居委",
        "长宁区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "中配 (外教专职授课)",
      "classSize": 30,
      "curriculum": [
        "国家标准课程",
        "双语浸润课程"
      ],
      "features": [
        "湖南路风貌特色校本",
        "长宁区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "市三女初",
        "延安初"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入长宁区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "地处兴国路花园洋房群落，小班化双语精英教育，生源素质优良。"
    }
  },
  {
    "id": "cn-hongqiao-kindergarten",
    "name": "上海市长宁区虹桥幼儿园",
    "shortName": "长宁虹桥幼儿园",
    "stage": "kindergarten",
    "type": "public",
    "district": "长宁区",
    "address": "长宁区虹桥路1024弄4号",
    "establishedYear": 1984,
    "tier": "市一级园",
    "badgeTag": "长宁区优质名校 · 市一级园 · 花园别墅",
    "tags": [
      "市一级园",
      "花园别墅",
      "艺术启蒙"
    ],
    "location": {
      "lng": 121.421,
      "lat": 31.217
    },
    "tuition": {
      "amount": 225,
      "unit": "元/月",
      "isFree": false,
      "note": "公办示范/一级园标准保育费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "长宁虹桥幼儿园对口片区居委",
        "长宁区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "快乐素质 (重个性潜能/轻负担)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程",
        "艺术/音乐/体育特色"
      ],
      "features": [
        "市一级园特色校本",
        "长宁区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:15 - 16:00"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "江五小学",
        "愚一小学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入长宁区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "无书面作业",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "梧桐掩映的花园别墅园所，艺术游戏特色突出，教师极具爱心。"
    }
  },
  {
    "id": "pt-guannong-primary",
    "name": "上海市管弄新村小学",
    "shortName": "管弄新村小学",
    "stage": "primary",
    "type": "public",
    "district": "普陀区",
    "address": "普陀区管弄路241号",
    "establishedYear": 1987,
    "tier": "普通优质公办",
    "badgeTag": "普陀区优质名校 · 石泉社区 · 少儿手球",
    "tags": [
      "石泉社区",
      "少儿手球",
      "快乐校园"
    ],
    "location": {
      "lng": 121.404,
      "lat": 31.254
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "管弄新村小学对口片区居委",
        "普陀区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "石泉社区特色校本",
        "普陀区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "兰田中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入普陀区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "石泉街道成熟公办，全国少儿手球传统名牌，学生身体倍棒。"
    }
  },
  {
    "id": "pt-taopu-primary",
    "name": "上海市桃浦中心小学",
    "shortName": "桃浦中心小学",
    "stage": "primary",
    "type": "public",
    "district": "普陀区",
    "address": "普陀区桃浦镇武威路520号",
    "establishedYear": 1906,
    "tier": "公办二梯队",
    "badgeTag": "普陀区优质名校 · 智创城核心 · 百年积淀",
    "tags": [
      "智创城核心",
      "百年积淀",
      "科技兴校"
    ],
    "location": {
      "lng": 121.411,
      "lat": 31.259
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "桃浦中心小学对口片区居委",
        "普陀区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "智创城核心特色校本",
        "普陀区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "桃浦中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入普陀区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "紧邻桃浦智创城，百年老校焕新，数字化科技创新课程亮眼。"
    }
  },
  {
    "id": "pt-jinzhou-primary",
    "name": "上海市民办金洲小学",
    "shortName": "金洲小学",
    "stage": "primary",
    "type": "private",
    "district": "普陀区",
    "address": "普陀区金鼎路105号",
    "establishedYear": 1998,
    "tier": "民办顶尖/头牌",
    "badgeTag": "普陀民办第一梯队 · 数理逻辑扎实 · 外语与艺术齐飞",
    "tags": [
      "民办顶尖/头牌",
      "普陀头牌",
      "数理奥林匹克",
      "进取向上"
    ],
    "location": {
      "lng": 121.418,
      "lat": 31.239
    },
    "tuition": {
      "amount": 25000,
      "unit": "元/学期",
      "isFree": false,
      "note": "民办物价核准备案标准"
    },
    "enrollment": {
      "scope": "本区摇号",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": false,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "金洲小学对口片区居委",
        "普陀区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "中配 (外教专职授课)",
      "classSize": 30,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "民办顶尖/头牌特色校本",
        "普陀区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "梅陇中学",
        "晋元附校"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入普陀区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "普陀民办老牌头把交椅，教学抓得极其扎实，初中名校争相录取的摇篮。"
    }
  },
  {
    "id": "pt-peijia-primary",
    "name": "上海市民办培佳一贯制学校 (小学部)",
    "shortName": "培佳一贯制学校",
    "stage": "primary",
    "type": "private",
    "district": "普陀区",
    "address": "普陀区宜川路400号",
    "establishedYear": 1998,
    "tier": "民办优质/特色",
    "badgeTag": "普陀区优质名校 · 十二年一贯 · 寄宿走读",
    "tags": [
      "十二年一贯",
      "寄宿走读",
      "国际素养"
    ],
    "location": {
      "lng": 121.376,
      "lat": 31.244
    },
    "tuition": {
      "amount": 25000,
      "unit": "元/学期",
      "isFree": false,
      "note": "民办物价核准备案标准"
    },
    "enrollment": {
      "scope": "本区摇号",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": false,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "培佳一贯制学校对口片区居委",
        "普陀区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "中配 (外教专职授课)",
      "classSize": 30,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "十二年一贯特色校本",
        "普陀区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "培佳一贯制初中部"
      ],
      "directPassRatio": "本校内部九年一贯直升",
      "note": "对口升入普陀区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "上海知名十二年一贯制民办实验校，全面发展，免去小升初折腾。"
    }
  },
  {
    "id": "pt-tongdemeng-kindergarten",
    "name": "上海市童的梦幼儿园",
    "shortName": "童的梦幼儿园",
    "stage": "kindergarten",
    "type": "public",
    "district": "普陀区",
    "address": "普陀区延长西路150号",
    "establishedYear": 1953,
    "tier": "市示范园",
    "badgeTag": "普陀区优质名校 · 市示范园 · 童话乐园",
    "tags": [
      "市示范园",
      "童话乐园",
      "自主探究"
    ],
    "location": {
      "lng": 121.383,
      "lat": 31.249
    },
    "tuition": {
      "amount": 700,
      "unit": "元/月",
      "isFree": false,
      "note": "公办示范/一级园标准保育费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "童的梦幼儿园对口片区居委",
        "普陀区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "快乐素质 (重个性潜能/轻负担)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "市示范园特色校本",
        "普陀区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:15 - 16:00"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "武宁路小学",
        "朝春中心小学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入普陀区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "无书面作业",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "全国知名童话主题市示范园，生态与游戏化教学在全市名声赫赫。"
    }
  },
  {
    "id": "yp-neijiang2-primary",
    "name": "上海市内江路第二小学",
    "shortName": "内江二小",
    "stage": "primary",
    "type": "public",
    "district": "杨浦区",
    "address": "杨浦区内江路384号",
    "establishedYear": 1958,
    "tier": "普通优质公办",
    "badgeTag": "杨浦区优质名校 · 定海学区 · 少儿皮划艇",
    "tags": [
      "定海学区",
      "少儿皮划艇",
      "滨江特色"
    ],
    "location": {
      "lng": 121.519,
      "lat": 31.282
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "内江二小对口片区居委",
        "杨浦区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "定海学区特色校本",
        "杨浦区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "内江中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入杨浦区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "杨浦东区老牌公办，结合滨江水上运动特色，学生精气神十足。"
    }
  },
  {
    "id": "yp-minbandayi-primary",
    "name": "上海民办打一外国语小学",
    "shortName": "民办打一外小",
    "stage": "primary",
    "type": "private",
    "district": "杨浦区",
    "address": "杨浦区本溪路150号",
    "establishedYear": 2005,
    "tier": "民办顶尖/头牌",
    "badgeTag": "打一教育集团民办旗舰 · 英语口语高标 · 名校初中摇篮",
    "tags": [
      "民办顶尖/头牌",
      "打一系",
      "外语过硬",
      "数理强项"
    ],
    "location": {
      "lng": 121.526,
      "lat": 31.287
    },
    "tuition": {
      "amount": 25000,
      "unit": "元/学期",
      "isFree": false,
      "note": "民办物价核准备案标准"
    },
    "enrollment": {
      "scope": "本区摇号",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": false,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "民办打一外小对口片区居委",
        "杨浦区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "中配 (外教专职授课)",
      "classSize": 30,
      "curriculum": [
        "国家标准课程",
        "双语浸润课程"
      ],
      "features": [
        "民办顶尖/头牌特色校本",
        "杨浦区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "兰生复旦",
        "存志学校",
        "上外双语"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入杨浦区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "依托打虎山路第一小学卓越品牌创设，外语和数理双优，杨浦民办标杆。"
    }
  },
  {
    "id": "yp-yangpuxiaoxue-primary",
    "name": "上海民办阳浦小学",
    "shortName": "民办阳浦小学",
    "stage": "primary",
    "type": "private",
    "district": "杨浦区",
    "address": "杨浦区周家嘴路3678号",
    "establishedYear": 2006,
    "tier": "民办顶尖/头牌",
    "badgeTag": "控二教育集团实力民办 · 学术基础过硬 · 竞赛与中考名列前茅",
    "tags": [
      "民办顶尖/头牌",
      "控二系",
      "扎实硬核",
      "名校生源"
    ],
    "location": {
      "lng": 121.533,
      "lat": 31.267
    },
    "tuition": {
      "amount": 25000,
      "unit": "元/学期",
      "isFree": false,
      "note": "民办物价核准备案标准"
    },
    "enrollment": {
      "scope": "本区摇号",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": false,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "民办阳浦小学对口片区居委",
        "杨浦区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "中配 (外教专职授课)",
      "classSize": 30,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "民办顶尖/头牌特色校本",
        "杨浦区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "兰生复旦",
        "存志中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入杨浦区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "承袭控江二村小学优良传统，治学一丝不苟，历届毕业生中考表现惊艳。"
    }
  },
  {
    "id": "yp-shangwaishuangyu-primary",
    "name": "上海外国语大学附属双语学校 (小学部)",
    "shortName": "上外双语学校",
    "stage": "primary",
    "type": "private",
    "district": "杨浦区",
    "address": "杨浦区靖宇南路15号",
    "establishedYear": 2001,
    "tier": "双语国际优质",
    "badgeTag": "杨浦区优质名校 · 上外名门 · 外语天花板",
    "tags": [
      "上外名门",
      "外语天花板",
      "九年一贯"
    ],
    "location": {
      "lng": 121.54,
      "lat": 31.272
    },
    "tuition": {
      "amount": 25000,
      "unit": "元/学期",
      "isFree": false,
      "note": "民办物价核准备案标准"
    },
    "enrollment": {
      "scope": "本区摇号",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": false,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "上外双语学校对口片区居委",
        "杨浦区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "中配 (外教专职授课)",
      "classSize": 30,
      "curriculum": [
        "国家标准课程",
        "双语浸润课程"
      ],
      "features": [
        "上外名门特色校本",
        "杨浦区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "上外双语初中部"
      ],
      "directPassRatio": "本校内部九年一贯直升",
      "note": "对口升入杨浦区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "上外系在杨浦的名校旗舰，多语种听说拔尖，小初一体化贯通。"
    }
  },
  {
    "id": "yp-benxi-kindergarten",
    "name": "上海市杨浦区本溪路幼儿园",
    "shortName": "本溪路幼儿园",
    "stage": "kindergarten",
    "type": "public",
    "district": "杨浦区",
    "address": "杨浦区本溪路99号",
    "establishedYear": 1953,
    "tier": "市示范园",
    "badgeTag": "杨浦区优质名校 · 市示范园 · 儿童美术创意",
    "tags": [
      "市示范园",
      "儿童美术创意",
      "名园之光"
    ],
    "location": {
      "lng": 121.547,
      "lat": 31.277
    },
    "tuition": {
      "amount": 700,
      "unit": "元/月",
      "isFree": false,
      "note": "公办示范/一级园标准保育费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "本溪路幼儿园对口片区居委",
        "杨浦区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "快乐素质 (重个性潜能/轻负担)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "市示范园特色校本",
        "杨浦区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:15 - 16:00"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "二师附小",
        "打一小学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入杨浦区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "无书面作业",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "以儿童创意美术闻名的老牌市示范园，孩子审美情趣启蒙的殿堂。"
    }
  },
  {
    "id": "hk-quyang4-primary",
    "name": "上海市曲阳第四小学",
    "shortName": "曲阳四小",
    "stage": "primary",
    "type": "public",
    "district": "虹口区",
    "address": "虹口区东体育会路429弄20号",
    "establishedYear": 1988,
    "tier": "普通优质公办",
    "badgeTag": "虹口区优质名校 · 曲阳社区 · 少儿国际象棋",
    "tags": [
      "曲阳社区",
      "少儿国际象棋",
      "温馨和谐"
    ],
    "location": {
      "lng": 121.471,
      "lat": 31.266
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "曲阳四小对口片区居委",
        "虹口区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "曲阳社区特色校本",
        "虹口区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "运光学校"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入虹口区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "国际象棋传统学校，老师亲切关怀，社区口碑良好接送极为安全。"
    }
  },
  {
    "id": "hk-hkshiyan-primary",
    "name": "上海市虹口实验学校 (小学部)",
    "shortName": "虹口实验学校",
    "stage": "primary",
    "type": "public",
    "district": "虹口区",
    "address": "虹口区辉河路65号",
    "establishedYear": 2008,
    "tier": "公办一梯队",
    "badgeTag": "虹口区优质名校 · 九年一贯 · 运光广灵",
    "tags": [
      "九年一贯",
      "运光广灵",
      "虹口公办主力"
    ],
    "location": {
      "lng": 121.478,
      "lat": 31.271
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "catchmentAreas": [
        "虹口实验学校对口片区居委",
        "虹口区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "九年一贯特色校本",
        "虹口区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "虹口实验学校初中部"
      ],
      "directPassRatio": "本校内部九年一贯直升",
      "note": "对口升入虹口区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "虹口重点打造的优质九年一贯制公办，初中部中考成绩稳居全区第一档。"
    }
  },
  {
    "id": "hk-hongxing-primary",
    "name": "上海市民办宏星小学",
    "shortName": "宏星小学",
    "stage": "primary",
    "type": "private",
    "district": "虹口区",
    "address": "虹口区四川北路2066号",
    "establishedYear": 1999,
    "tier": "民办顶尖/头牌",
    "badgeTag": "虹口四大民办之一 · 奥数数理强校 · 严谨扎实",
    "tags": [
      "民办顶尖/头牌",
      "数学摇篮",
      "四川北路",
      "应试先锋"
    ],
    "location": {
      "lng": 121.485,
      "lat": 31.251
    },
    "tuition": {
      "amount": 25000,
      "unit": "元/学期",
      "isFree": false,
      "note": "民办物价核准备案标准"
    },
    "enrollment": {
      "scope": "本区摇号",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": false,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "宏星小学对口片区居委",
        "虹口区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "鸡血应试 (重分层/作业量扎实)",
      "foreignTeacherRatio": "中配 (外教专职授课)",
      "classSize": 30,
      "curriculum": [
        "国家标准课程",
        "科创数理特色"
      ],
      "features": [
        "民办顶尖/头牌特色校本",
        "虹口区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "新华初级中学",
        "迅行中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入虹口区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "宏星以数学逻辑思维教育名震虹口，治学严谨规范，初中升学实力硬核。"
    }
  },
  {
    "id": "hk-youyi-kindergarten",
    "name": "上海市虹口区友谊幼儿园",
    "shortName": "友谊幼儿园",
    "stage": "kindergarten",
    "type": "public",
    "district": "虹口区",
    "address": "虹口区西江湾路476弄15号",
    "establishedYear": 1958,
    "tier": "市一级园",
    "badgeTag": "虹口区优质名校 · 市一级园 · 虹口足球场",
    "tags": [
      "市一级园",
      "虹口足球场",
      "健康体育"
    ],
    "location": {
      "lng": 121.492,
      "lat": 31.256
    },
    "tuition": {
      "amount": 225,
      "unit": "元/月",
      "isFree": false,
      "note": "公办示范/一级园标准保育费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "友谊幼儿园对口片区居委",
        "虹口区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "快乐素质 (重个性潜能/轻负担)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "市一级园特色校本",
        "虹口区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:15 - 16:00"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "虹口三中心"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入虹口区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "无书面作业",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "虹口足球场旁老牌一级公办园，户外运动场大，孩子体质好习惯佳。"
    }
  },
  {
    "id": "bs-luodian-primary",
    "name": "上海市罗店中心小学",
    "shortName": "罗店中心小学",
    "stage": "primary",
    "type": "public",
    "district": "宝山区",
    "address": "宝山区罗店镇市一路55号",
    "establishedYear": 1906,
    "tier": "公办二梯队",
    "badgeTag": "宝山区优质名校 · 罗店古镇 · 百年名校",
    "tags": [
      "罗店古镇",
      "百年名校",
      "龙船龙狮"
    ],
    "location": {
      "lng": 121.496,
      "lat": 31.405
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "罗店中心小学对口片区居委",
        "宝山区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "罗店古镇特色校本",
        "宝山区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "罗店中学初中部"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入宝山区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "美兰湖与罗店古镇百年学府，龙船文化非遗传承，校风端庄质朴。"
    }
  },
  {
    "id": "bs-yanghang-primary",
    "name": "上海市杨行中心小学",
    "shortName": "杨行中心小学",
    "stage": "primary",
    "type": "public",
    "district": "宝山区",
    "address": "宝山区杨行镇松兰路811号",
    "establishedYear": 1905,
    "tier": "普通优质公办",
    "badgeTag": "宝山区优质名校 · 杨行枢纽 · 百年底蕴",
    "tags": [
      "杨行枢纽",
      "百年底蕴",
      "吹打乐特色"
    ],
    "location": {
      "lng": 121.503,
      "lat": 31.41
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "杨行中心小学对口片区居委",
        "宝山区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "杨行枢纽特色校本",
        "宝山区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "杨行中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入宝山区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "杨行大居百年公办，民族吹打乐社团全市获奖，学生朴实勤学。"
    }
  },
  {
    "id": "bs-gaojing3-primary",
    "name": "上海市高境第三小学",
    "shortName": "高境三小",
    "stage": "primary",
    "type": "public",
    "district": "宝山区",
    "address": "宝山区高境路501号",
    "establishedYear": 1998,
    "tier": "公办二梯队",
    "badgeTag": "宝山区优质名校 · 高境学区 · 少儿冰壶",
    "tags": [
      "高境学区",
      "少儿冰壶",
      "数理拓展"
    ],
    "location": {
      "lng": 121.51,
      "lat": 31.415
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "高境三小对口片区居委",
        "宝山区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "高境学区特色校本",
        "宝山区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "高境第一初级中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入宝山区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "少儿陆地冰壶特色名牌，紧邻杨浦虹口交界，生源改善明显。"
    }
  },
  {
    "id": "bs-tongzhou-primary",
    "name": "上海民办同洲模范学校 (小学部)",
    "shortName": "同洲模范学校",
    "stage": "primary",
    "type": "private",
    "district": "宝山区",
    "address": "宝山区共康五村105号",
    "establishedYear": 1997,
    "tier": "民办优质/特色",
    "badgeTag": "宝山区优质名校 · 共康板块 · 攀岩马术",
    "tags": [
      "共康板块",
      "攀岩马术",
      "同舟共济"
    ],
    "location": {
      "lng": 121.468,
      "lat": 31.395
    },
    "tuition": {
      "amount": 25000,
      "unit": "元/学期",
      "isFree": false,
      "note": "民办物价核准备案标准"
    },
    "enrollment": {
      "scope": "本区摇号",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": false,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "同洲模范学校对口片区居委",
        "宝山区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "中配 (外教专职授课)",
      "classSize": 30,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "共康板块特色校本",
        "宝山区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "同洲模范初中部"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入宝山区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "以攀岩、马术、高尔夫等多元特色课程著称的民办强校，综合素养高。"
    }
  },
  {
    "id": "bs-hezhong-primary",
    "name": "上海市民办和衷小学",
    "shortName": "和衷小学",
    "stage": "primary",
    "type": "private",
    "district": "宝山区",
    "address": "宝山区铁通路508号",
    "establishedYear": 1998,
    "tier": "民办优质/特色",
    "badgeTag": "宝山区优质名校 · 和衷共济 · 小班外语",
    "tags": [
      "和衷共济",
      "小班外语",
      "品学兼优"
    ],
    "location": {
      "lng": 121.475,
      "lat": 31.4
    },
    "tuition": {
      "amount": 25000,
      "unit": "元/学期",
      "isFree": false,
      "note": "民办物价核准备案标准"
    },
    "enrollment": {
      "scope": "本区摇号",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": false,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "和衷小学对口片区居委",
        "宝山区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "中配 (外教专职授课)",
      "classSize": 30,
      "curriculum": [
        "国家标准课程",
        "双语浸润课程"
      ],
      "features": [
        "和衷共济特色校本",
        "宝山区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "和衷中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入宝山区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "宝山老牌民办优质校，和衷中学直系生源基地，小班化辅导极其细致。"
    }
  },
  {
    "id": "jd-anting-primary",
    "name": "上海市嘉定区安亭小学",
    "shortName": "安亭小学",
    "stage": "primary",
    "type": "public",
    "district": "嘉定区",
    "address": "嘉定区安亭镇墨玉路181号",
    "establishedYear": 1905,
    "tier": "公办二梯队",
    "badgeTag": "嘉定区优质名校 · 汽车城核心 · 百年老校",
    "tags": [
      "汽车城核心",
      "百年老校",
      "科创发明"
    ],
    "location": {
      "lng": 121.258,
      "lat": 31.375
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "安亭小学对口片区居委",
        "嘉定区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程",
        "科创数理特色"
      ],
      "features": [
        "汽车城核心特色校本",
        "嘉定区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "安亭中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入嘉定区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "上海国际汽车城核心百年老小，结合汽车科技开展创客制作，生机勃勃。"
    }
  },
  {
    "id": "jd-zhenxin-primary",
    "name": "上海市真新小学",
    "shortName": "真新小学",
    "stage": "primary",
    "type": "public",
    "district": "嘉定区",
    "address": "嘉定区丰庄路360号",
    "establishedYear": 1995,
    "tier": "普通优质公办",
    "badgeTag": "嘉定区优质名校 · 丰庄大居 · 少儿空手道",
    "tags": [
      "丰庄大居",
      "少儿空手道",
      "阳光少年"
    ],
    "location": {
      "lng": 121.265,
      "lat": 31.38
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "真新小学对口片区居委",
        "嘉定区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "丰庄大居特色校本",
        "嘉定区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "丰庄中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入嘉定区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "丰庄真新板块核心社区公办，老师爱生敬业，体育竞技特长突出。"
    }
  },
  {
    "id": "jd-taoliyuan-primary",
    "name": "上海市民办桃李园实验学校 (小学部)",
    "shortName": "桃李园实验学校",
    "stage": "primary",
    "type": "private",
    "district": "嘉定区",
    "address": "嘉定区菊园新区胜竹路1930号",
    "establishedYear": 2000,
    "tier": "民办顶尖/头牌",
    "badgeTag": "嘉定民办第一名牌 · 桃李满天下 · 中考四校录取大户",
    "tags": [
      "民办顶尖/头牌",
      "嘉定头牌",
      "学风严谨",
      "硕果累累"
    ],
    "location": {
      "lng": 121.272,
      "lat": 31.385
    },
    "tuition": {
      "amount": 25000,
      "unit": "元/学期",
      "isFree": false,
      "note": "民办物价核准备案标准"
    },
    "enrollment": {
      "scope": "本区摇号",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": false,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "桃李园实验学校对口片区居委",
        "嘉定区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "中配 (外教专职授课)",
      "classSize": 30,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "民办顶尖/头牌特色校本",
        "嘉定区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "桃李园初中部"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入嘉定区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "嘉定家长首选民办顶流，历年中考成绩冠绝全区，学风极其浓郁。"
    }
  },
  {
    "id": "jd-jdshiwai-primary",
    "name": "上海嘉定区世外学校 (小学部)",
    "shortName": "嘉定世外学校",
    "stage": "primary",
    "type": "private",
    "district": "嘉定区",
    "address": "嘉定区南翔镇惠桂路255号",
    "establishedYear": 2017,
    "tier": "民办顶尖/头牌",
    "badgeTag": "世外系南翔名校 · 外语与探究顶配 · 卓越全人教育",
    "tags": [
      "民办顶尖/头牌",
      "世外系",
      "南翔国际社区",
      "外语顶尖"
    ],
    "location": {
      "lng": 121.279,
      "lat": 31.365
    },
    "tuition": {
      "amount": 25000,
      "unit": "元/学期",
      "isFree": false,
      "note": "民办物价核准备案标准"
    },
    "enrollment": {
      "scope": "本区摇号",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": false,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "嘉定世外学校对口片区居委",
        "嘉定区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "中配 (外教专职授课)",
      "classSize": 30,
      "curriculum": [
        "国家标准课程",
        "双语浸润课程"
      ],
      "features": [
        "民办顶尖/头牌特色校本",
        "嘉定区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "嘉定世外初中部"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入嘉定区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "世外教育集团直系新标杆，高端国际化校舍，中外教双语交际能力一流。"
    }
  },
  {
    "id": "sj-sijing2-primary",
    "name": "上海市松江区泗泾第二小学",
    "shortName": "泗泾二小",
    "stage": "primary",
    "type": "public",
    "district": "松江区",
    "address": "松江区泗泾镇城置路150号",
    "establishedYear": 2013,
    "tier": "公办二梯队",
    "badgeTag": "松江区优质名校 · 泗泾大居 · 新锐实验",
    "tags": [
      "泗泾大居",
      "新锐实验",
      "阳光活动"
    ],
    "location": {
      "lng": 121.249,
      "lat": 31.027
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "泗泾二小对口片区居委",
        "松江区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "泗泾大居特色校本",
        "松江区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "泗泾实验学校"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入松江区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "泗泾新城人口导入区高标准配置公办，数字化教室一流，朝气蓬勃。"
    }
  },
  {
    "id": "sj-dongjing-primary",
    "name": "上海市松江区洞泾学校 (小学部)",
    "shortName": "洞泾学校",
    "stage": "primary",
    "type": "public",
    "district": "松江区",
    "address": "松江区洞泾镇长兴东路188号",
    "establishedYear": 1906,
    "tier": "普通优质公办",
    "badgeTag": "松江区优质名校 · 九年一贯 · 人工智能产业",
    "tags": [
      "九年一贯",
      "人工智能产业",
      "百年老校"
    ],
    "location": {
      "lng": 121.207,
      "lat": 31.032
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "洞泾学校对口片区居委",
        "松江区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "九年一贯特色校本",
        "松江区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "洞泾学校初中部"
      ],
      "directPassRatio": "本校内部九年一贯直升",
      "note": "对口升入松江区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "伴随洞泾人工智能特色小镇发展，九年一贯平稳省心，生源素质攀升。"
    }
  },
  {
    "id": "sj-xiwai-primary",
    "name": "上海西外外国语学校 (小学部)",
    "shortName": "西外外国语学校",
    "stage": "primary",
    "type": "private",
    "district": "松江区",
    "address": "松江区文翔路1100号",
    "establishedYear": 2005,
    "tier": "民办优质/特色",
    "badgeTag": "松江区优质名校 · 松江大学城 · 国际视野",
    "tags": [
      "松江大学城",
      "国际视野",
      "艺术人文"
    ],
    "location": {
      "lng": 121.214,
      "lat": 31.037
    },
    "tuition": {
      "amount": 25000,
      "unit": "元/学期",
      "isFree": false,
      "note": "民办物价核准备案标准"
    },
    "enrollment": {
      "scope": "本区摇号",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": false,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "西外外国语学校对口片区居委",
        "松江区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "中配 (外教专职授课)",
      "classSize": 30,
      "curriculum": [
        "国家标准课程",
        "艺术/音乐/体育特色"
      ],
      "features": [
        "松江大学城特色校本",
        "松江区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "西外初中部"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入松江区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "坐落大学城畔的知名外国语学校，全球化视野与中西人文底蕴融会贯通。"
    }
  },
  {
    "id": "sj-sanxin-primary",
    "name": "上海市三新学校 (小学部)",
    "shortName": "三新学校",
    "stage": "primary",
    "type": "public",
    "district": "松江区",
    "address": "松江区思贤路1255号",
    "establishedYear": 2005,
    "tier": "公办一梯队",
    "badgeTag": "松江区优质名校 · 新城新秀 · 九年一贯",
    "tags": [
      "新城新秀",
      "九年一贯",
      "松江中考主力"
    ],
    "location": {
      "lng": 121.221,
      "lat": 31.042
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "catchmentAreas": [
        "三新学校对口片区居委",
        "松江区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "新城新秀特色校本",
        "松江区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "三新学校初中部"
      ],
      "directPassRatio": "本校内部九年一贯直升",
      "note": "对口升入松江区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "松江新城标杆九年一贯制公办，硬件现代一流，初中部中考实力拔尖。"
    }
  },
  {
    "id": "qp-zhaoxiang-primary",
    "name": "上海市青浦区赵巷小学",
    "shortName": "赵巷小学",
    "stage": "primary",
    "type": "public",
    "district": "青浦区",
    "address": "青浦区赵巷镇镇中路100号",
    "establishedYear": 1906,
    "tier": "公办二梯队",
    "badgeTag": "青浦区优质名校 · 赵巷板块 · 奥特莱斯圈",
    "tags": [
      "赵巷板块",
      "奥特莱斯圈",
      "百年名校"
    ],
    "location": {
      "lng": 121.124,
      "lat": 31.141
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "赵巷小学对口片区居委",
        "青浦区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "赵巷板块特色校本",
        "青浦区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "赵巷中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入青浦区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "毗邻赵巷高端别墅群与奥莱商圈，百年老校全面修葺，师资力量坚实。"
    }
  },
  {
    "id": "qp-yuxiu-primary",
    "name": "上海市青浦区毓秀学校 (小学部)",
    "shortName": "毓秀学校",
    "stage": "primary",
    "type": "public",
    "district": "青浦区",
    "address": "青浦区青湖路699号",
    "establishedYear": 2007,
    "tier": "公办一梯队",
    "badgeTag": "青浦区优质名校 · 青浦新城 · 九年一贯",
    "tags": [
      "青浦新城",
      "九年一贯",
      "毓秀群英"
    ],
    "location": {
      "lng": 121.131,
      "lat": 31.146
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 2,
      "hasFiveYearRule": true,
      "admissionDifficulty": "极高 (入户3年以上/低摇中率)",
      "catchmentAreas": [
        "毓秀学校对口片区居委",
        "青浦区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "青浦新城特色校本",
        "青浦区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "毓秀学校初中部"
      ],
      "directPassRatio": "本校内部九年一贯直升",
      "note": "对口升入青浦区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "青浦新城核心九年一贯制王牌公办，中考成绩亮眼，小升初连贯性极强。"
    }
  },
  {
    "id": "qp-qpshiwai-primary",
    "name": "上海青浦区世外学校 (小学部)",
    "shortName": "青浦世外学校",
    "stage": "primary",
    "type": "private",
    "district": "青浦区",
    "address": "青浦区徐泾镇高泾路599号",
    "establishedYear": 2016,
    "tier": "民办顶尖/头牌",
    "badgeTag": "世外集团大虹桥旗舰 · 国际化全人教育 · 外语与科创顶配",
    "tags": [
      "民办顶尖/头牌",
      "世外大虹桥",
      "大虹桥核心",
      "外语天花板"
    ],
    "location": {
      "lng": 121.138,
      "lat": 31.151
    },
    "tuition": {
      "amount": 25000,
      "unit": "元/学期",
      "isFree": false,
      "note": "民办物价核准备案标准"
    },
    "enrollment": {
      "scope": "本区摇号",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": false,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "青浦世外学校对口片区居委",
        "青浦区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "中配 (外教专职授课)",
      "classSize": 30,
      "curriculum": [
        "国家标准课程",
        "双语浸润课程"
      ],
      "features": [
        "民办顶尖/头牌特色校本",
        "青浦区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "青浦世外初中部"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入青浦区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "世外教育集团倾力打造的现代化国际化旗舰，大虹桥高净值家庭首选。"
    }
  },
  {
    "id": "fx-fengcheng1-primary",
    "name": "上海市奉贤区奉城第一小学",
    "shortName": "奉城一小",
    "stage": "primary",
    "type": "public",
    "district": "奉贤区",
    "address": "奉贤区奉城镇奉粮路98号",
    "establishedYear": 1905,
    "tier": "公办二梯队",
    "badgeTag": "奉贤区优质名校 · 奉城古城 · 百年老校",
    "tags": [
      "奉城古城",
      "百年老校",
      "自护教育"
    ],
    "location": {
      "lng": 121.495,
      "lat": 30.923
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "奉城一小对口片区居委",
        "奉贤区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "奉城古城特色校本",
        "奉贤区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "奉城中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入奉贤区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "奉贤东部古城百年名小，少儿自护安全与传统民间手工艺远近闻名。"
    }
  },
  {
    "id": "fx-zhuanghang-primary",
    "name": "上海市奉贤区庄行中心小学",
    "shortName": "庄行中心小学",
    "stage": "primary",
    "type": "public",
    "district": "奉贤区",
    "address": "奉贤区庄行镇庄良路58号",
    "establishedYear": 1906,
    "tier": "普通优质公办",
    "badgeTag": "奉贤区优质名校 · 花米庄行 · 非遗土布",
    "tags": [
      "花米庄行",
      "非遗土布",
      "生态田园"
    ],
    "location": {
      "lng": 121.453,
      "lat": 30.928
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "庄行中心小学对口片区居委",
        "奉贤区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "花米庄行特色校本",
        "奉贤区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "庄行学校"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入奉贤区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "花米庄行田园风光深厚，非遗土布与扎染校本课程特色鲜明，校风朴素。"
    }
  },
  {
    "id": "fx-fxshiwai-primary",
    "name": "上海奉贤区世外学校 (小学部)",
    "shortName": "奉贤世外学校",
    "stage": "primary",
    "type": "private",
    "district": "奉贤区",
    "address": "奉贤区南桥镇金海公路3888号",
    "establishedYear": 2018,
    "tier": "民办优质/特色",
    "badgeTag": "奉贤区优质名校 · 世外品牌 · 南桥新城",
    "tags": [
      "世外品牌",
      "南桥新城",
      "九年一贯"
    ],
    "location": {
      "lng": 121.46,
      "lat": 30.908
    },
    "tuition": {
      "amount": 25000,
      "unit": "元/学期",
      "isFree": false,
      "note": "民办物价核准备案标准"
    },
    "enrollment": {
      "scope": "本区摇号",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": false,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "奉贤世外学校对口片区居委",
        "奉贤区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "中配 (外教专职授课)",
      "classSize": 30,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "世外品牌特色校本",
        "奉贤区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "奉贤世外初中部"
      ],
      "directPassRatio": "本校内部九年一贯直升",
      "note": "对口升入奉贤区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "世外教育集团在奉贤核心新城的九年一贯校，双语教学与现代化设施出众。"
    }
  },
  {
    "id": "js-zhujing2-primary",
    "name": "上海市金山区朱泾第二小学",
    "shortName": "朱泾二小",
    "stage": "primary",
    "type": "public",
    "district": "金山区",
    "address": "金山区朱泾镇罗星南路88号",
    "establishedYear": 1988,
    "tier": "公办二梯队",
    "badgeTag": "金山区优质名校 · 朱泾名校 · 少儿合唱",
    "tags": [
      "朱泾名校",
      "少儿合唱",
      "规范教学"
    ],
    "location": {
      "lng": 121.335,
      "lat": 30.737
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "朱泾二小对口片区居委",
        "金山区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "朱泾名校特色校本",
        "金山区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "罗星中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入金山区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "朱泾板块老牌名小，合唱团屡获市级大奖，基础教学扎实规范。"
    }
  },
  {
    "id": "js-hangzhouwan-primary",
    "name": "上海金山杭州湾双语学校 (小学部)",
    "shortName": "杭州湾双语学校",
    "stage": "primary",
    "type": "private",
    "district": "金山区",
    "address": "金山区隆平路666号",
    "establishedYear": 2017,
    "tier": "民办顶尖/头牌",
    "badgeTag": "禾德教育集团名门 · 星河湾姊妹校 · 双语与数理拔尖",
    "tags": [
      "民办顶尖/头牌",
      "星河湾直系",
      "双语旗舰",
      "名校升学"
    ],
    "location": {
      "lng": 121.342,
      "lat": 30.742
    },
    "tuition": {
      "amount": 25000,
      "unit": "元/学期",
      "isFree": false,
      "note": "民办物价核准备案标准"
    },
    "enrollment": {
      "scope": "本区摇号",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": false,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "杭州湾双语学校对口片区居委",
        "金山区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "中配 (外教专职授课)",
      "classSize": 30,
      "curriculum": [
        "国家标准课程",
        "双语浸润课程"
      ],
      "features": [
        "民办顶尖/头牌特色校本",
        "金山区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "杭州湾双语初中部"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入金山区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "上海星河湾双语直系姊妹校，顶尖外教和双语学术配置，金山国际教育天花板。"
    }
  },
  {
    "id": "js-jinmeng-primary",
    "name": "上海市民办金盟学校 (小学部)",
    "shortName": "金盟学校",
    "stage": "primary",
    "type": "private",
    "district": "金山区",
    "address": "金山区石化街道卫零路365号",
    "establishedYear": 1999,
    "tier": "民办优质/特色",
    "badgeTag": "金山区优质名校 · 石化商圈 · 小班培优",
    "tags": [
      "石化商圈",
      "小班培优",
      "严谨治学"
    ],
    "location": {
      "lng": 121.349,
      "lat": 30.747
    },
    "tuition": {
      "amount": 25000,
      "unit": "元/学期",
      "isFree": false,
      "note": "民办物价核准备案标准"
    },
    "enrollment": {
      "scope": "本区摇号",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": false,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "金盟学校对口片区居委",
        "金山区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "中配 (外教专职授课)",
      "classSize": 30,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "石化商圈特色校本",
        "金山区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "金盟学校初中部"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入金山区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "金山老牌民办优质学校，初小一体化贯通，教师认真负责辅导细致。"
    }
  },
  {
    "id": "cm-chenjiazhen-primary",
    "name": "上海市陈家镇实验学校 (小学部)",
    "shortName": "陈家镇实验学校",
    "stage": "primary",
    "type": "public",
    "district": "崇明区",
    "address": "崇明区陈家镇陈仿公路333号",
    "establishedYear": 2015,
    "tier": "公办二梯队",
    "badgeTag": "崇明区优质名校 · 陈家镇新城 · 长江大桥旁",
    "tags": [
      "陈家镇新城",
      "长江大桥旁",
      "九年一贯"
    ],
    "location": {
      "lng": 121.418,
      "lat": 31.613
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "陈家镇实验学校对口片区居委",
        "崇明区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "陈家镇新城特色校本",
        "崇明区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "陈家镇实验学校初中部"
      ],
      "directPassRatio": "本校内部九年一贯直升",
      "note": "对口升入崇明区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "紧邻长江大桥陈家镇新城核心，现代化九年一贯制学校，发展迅猛。"
    }
  },
  {
    "id": "cm-yuan-primary",
    "name": "上海市崇明区裕安小学",
    "shortName": "裕安小学",
    "stage": "primary",
    "type": "public",
    "district": "崇明区",
    "address": "崇明区陈家镇裕安村裕鸿路2号",
    "establishedYear": 1958,
    "tier": "普通优质公办",
    "badgeTag": "崇明区优质名校 · 裕安大居 · 动植物观察",
    "tags": [
      "裕安大居",
      "动植物观察",
      "淳朴校风"
    ],
    "location": {
      "lng": 121.376,
      "lat": 31.618
    },
    "tuition": {
      "amount": 0,
      "unit": "免费/普惠",
      "isFree": true,
      "note": "国家公办九年义务教育免收学费"
    },
    "enrollment": {
      "scope": "对口居委划片",
      "requirements": [
        "适龄儿童户籍与房产产权人一致",
        "人户一致优先统筹",
        "执行五年一户审核"
      ],
      "hukouYearsRequired": 1,
      "hasFiveYearRule": true,
      "admissionDifficulty": "较易",
      "catchmentAreas": [
        "裕安小学对口片区居委",
        "崇明区属地划片社区"
      ]
    },
    "academic": {
      "rigorLevel": "均衡高效 (兼顾学术与活动)",
      "foreignTeacherRatio": "基础 (每周外教口语课)",
      "classSize": 35,
      "curriculum": [
        "国家标准课程"
      ],
      "features": [
        "裕安大居特色校本",
        "崇明区重点示范引领",
        "课后延时托管服务"
      ],
      "schedule": "08:00 - 16:30"
    },
    "downstream": {
      "routeType": "体制内中高考",
      "targetSchools": [
        "裕安中学"
      ],
      "directPassRatio": "对口划片免试升学",
      "note": "对口升入崇明区优质初中"
    },
    "reviews": {
      "parentRating": 4.8,
      "homeworkDuration": "约 1 小时",
      "pros": [
        "校风优良教师稳定负责",
        "就近接送极为便利",
        "课业负担适中学生开朗"
      ],
      "cons": [
        "具体划片居委以当年教育局公示为准"
      ],
      "parentFeedbackSample": "陈家镇生态大居配套公办，少儿泥塑与绿色环保特色，学风优良。"
    }
  }
];
