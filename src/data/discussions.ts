import { DiscussionPost } from '../types/community';

export const INITIAL_DISCUSSIONS: DiscussionPost[] = [
  {
    id: 'post-xuhui-vs-pudong',
    title: '宝宝2岁（2024生），预算750万，买徐汇老破小挂学籍 还是买 浦东进才实验次新自住？',
    content: '坐标浦东张江上班，宝宝刚满2岁（2024年5月生，预计2030年幼升小）。家庭现有总预算750万左右。纠结两个方案：\n方案A：徐汇建襄/高一附近买套30-40平老破小（400多万）纯挂户口，剩下钱在外围租房住，小学初中享受徐汇头部教育资源；\n方案B：在浦东联洋或金桥买进才实验对口的品质次新二居室（700多万），自住+名校一步到位。\n大家怎么看？有经历过的家长能给点建议吗？',
    category: 'housing_advice',
    district: '徐汇区 / 浦东新区',
    authorName: '辰辰爸爸',
    authorTag: '2岁娃家长 (2030届)',
    avatarBg: 'bg-blue-600',
    createdAt: '2026-09-02',
    tags: ['徐汇老破小', '进才实验', '挂学籍自住权衡', '750万预算'],
    likes: 48,
    views: 1250,
    pinned: true,
    comments: [
      {
        id: 'c1',
        authorName: '大橘老师',
        authorTag: '资深升学置业规划师',
        avatarBg: 'bg-emerald-600',
        content: '张江上班强烈建议方案B（进才实验）。首先你孩子2024年生，2030年入学，徐汇每天跨江接送老破小会把全家精力耗尽。其次，进才实验九年一贯在浦东数一数二，自住品质和孩子睡眠完全兼顾。且新中考有名额分配到校，进才实验在浦东的市重点到校名额极其充裕！',
        createdAt: '2026-09-02',
        likes: 31,
        isExpert: true
      },
      {
        id: 'c2',
        authorName: '安安妈咪',
        authorTag: '建襄在读三年级家长',
        avatarBg: 'bg-rose-500',
        content: '作为建襄在读家长说一句真实感受：建襄老师确实非常负责敬业，但老破小租房住的痛谁住谁知道...车位抢不到，隔音差，老人来帮忙带娃挤得转不开身。如果不是全家有超强抗压能力，还是选自住舒适度高的好公办。',
        createdAt: '2026-09-03',
        likes: 19
      },
      {
        id: 'c3',
        authorName: 'Leo_爸',
        authorTag: '联洋次新业主',
        avatarBg: 'bg-indigo-600',
        content: '支持进才实验。750万在联洋看年华或者金桥看中环家园，能买到电梯两房甚至小三房，小区绿化和邻里圈层非常好，同学家长基本都是张江金桥的高管工程师，学习氛围很纯粹。',
        createdAt: '2026-09-04',
        likes: 12
      }
    ]
  },
  {
    id: 'post-jianxiang-hukou-safe',
    title: '徐汇建襄小学目前落户要几年才稳？2岁半现在买还来得及吗？',
    content: '请教各位懂政策的家长，我们看中了建襄对口的太原小区，中介说满2年就稳。但听其他群里说去年建襄入户门槛已经逼近2.8年了，统筹去向好像是向阳小学南校区或者长桥。我们孩子目前2岁半，如果今年年底落户，到2030年入学满3.5年，能100%入围第一批次吗？',
    category: 'sorting_doubt',
    district: '徐汇区',
    authorName: '小树苗妈妈',
    authorTag: '2.5岁娃家长',
    avatarBg: 'bg-amber-600',
    createdAt: '2026-09-04',
    tags: ['建襄小学', '落户年限', '超额排位', '徐汇第一档'],
    likes: 36,
    views: 980,
    pinned: false,
    comments: [
      {
        id: 'c4',
        authorName: '徐汇老土著',
        authorTag: '徐汇升学通',
        avatarBg: 'bg-slate-700',
        content: '到2030年满3.5年绝对安全！建襄历史最卷的年份一般在2.6~3.1年左右（龙年马年高峰期）。你家孩子是蛇年/猴年后生源，适龄总人数比峰值年份少，3.5年的人户一致在建襄基本稳居第一顺位前列。',
        createdAt: '2026-09-04',
        likes: 24,
        isExpert: true
      },
      {
        id: 'c5',
        authorName: '豆豆家长',
        authorTag: '向阳在读家长',
        avatarBg: 'bg-purple-600',
        content: '另外提醒你一点，产证上必须只有你们夫妻双方名字，份额必须占100%或至少50%以上，千万别写亲戚名字，不然年限再长也直接被判统筹！',
        createdAt: '2026-09-05',
        likes: 15
      }
    ]
  },
  {
    id: 'post-mingzhu-a-qu-real',
    title: '明珠A对口老破小跌到400万以内了，适合上车吗？初中东昌南到底行不行？',
    content: '最近看陆家嘴崂山三村、潍坊一村的老破小，35-40平的一房总价居然只要350-380万了。明珠A的教学质量和升学率在浦东是有口皆碑的，就是初中对口东昌南让人犹豫。有人说东昌南这几年名额分配市重点率上来了，真实情况到底如何？',
    category: 'school_choice',
    district: '浦东新区',
    authorName: '陆家嘴上班族',
    authorTag: '关注学区置业',
    avatarBg: 'bg-teal-600',
    createdAt: '2026-09-05',
    tags: ['明珠小学A区', '东昌南校', '新中考红利', '350万低总价'],
    likes: 52,
    views: 1420,
    pinned: false,
    comments: [
      {
        id: 'c6',
        authorName: '浦东升学老兵',
        authorTag: '升学智库研究员',
        avatarBg: 'bg-blue-700',
        content: '明珠A在小学的思维训练和基础学科压舱石作用依然是天花板级别的。至于东昌南，新中考后受益非常明显，因为明珠A源源不断输送优质生源，东昌南头部学生直接吃满四校（上中、华二）及进才、建平的名额分配到校配额！总价不到400万能拿下这种配置，性价比已经很硬核了。',
        createdAt: '2026-09-05',
        likes: 28,
        isExpert: true
      },
      {
        id: 'c7',
        authorName: '明珠毕业家长',
        authorTag: '新高一家长',
        avatarBg: 'bg-emerald-600',
        content: '我们家当年就是明珠A+东昌南走出来的，去年刚考进建平高中。东昌南抓得很紧，老师对明珠出来的孩子抓得尤其盯人，只要孩子在初中保持前10%，中考去向非常稳。',
        createdAt: '2026-09-06',
        likes: 18
      }
    ]
  },
  {
    id: 'post-jingjiaoyuan-fallback',
    title: '静安九年一贯真香还是坑？如果静教院小学超额被统筹，初中是不是就回不去了？',
    content: '看中静教院附校的九年一贯不折腾，但海防村房源少且贵。现在最担心的风险是：静教院要求入户满2.5-3年，万一入学那年人户爆满被统筹了，会被统筹到哪所小学？初中还能回静教院初中直升吗？求静安老家长解惑！',
    category: 'sorting_doubt',
    district: '静安区',
    authorName: '糯米糍爸爸',
    authorTag: '静安择校家长',
    avatarBg: 'bg-rose-600',
    createdAt: '2026-09-06',
    tags: ['静教院附校', '九年一贯', '统筹去向', '静安初中直升'],
    likes: 41,
    views: 1100,
    pinned: false,
    comments: [
      {
        id: 'c8',
        authorName: '静安教育达人',
        authorTag: '静安学区顾问',
        avatarBg: 'bg-indigo-700',
        content: '划重点：静教院是九年一贯校内直升制！如果小学阶段被统筹分流到海防路小学或西康路第三小学，那么初中你就只能按统筹后小学对应的对口初中升学，无法再回静教院初中部了！这是九年一贯制学校的最大特殊风险点，务必预留至少3年以上的落户安全期。',
        createdAt: '2026-09-06',
        likes: 35,
        isExpert: true
      }
    ]
  },
  {
    id: 'post-minhang-mingqiang-vs-qibao',
    title: '闵行明强小学西校与东校师资有差距吗？课业压力和莘松中学相比怎么样？',
    content: '坐标闵行七宝，家里大宝目前小班，正在看万泰花园和茂盛花园。听说西校生源更庞大，东校老校区更精致。请问东校和西校在日常教学、期末考试和特色课程上有明显区别吗？',
    category: 'parent_review',
    district: '闵行区',
    authorName: '七宝大宝妈',
    authorTag: '大宝小班在读',
    avatarBg: 'bg-emerald-700',
    createdAt: '2026-09-06',
    tags: ['七宝明强小学', '东西校区对比', '闵行学区', '真实在读'],
    likes: 33,
    views: 860,
    pinned: false,
    comments: [
      {
        id: 'c9',
        authorName: '双宝妈妈',
        authorTag: '明强东校三年级家长',
        avatarBg: 'bg-purple-700',
        content: '明强东西校区完全是统一管理、统一教研进度和联考卷子的，师资每年也有轮岗。东校校舍相对古朴一些，西校活动场地更大。西校对口七宝二中，东校对口稍有不同，建议结合初中派位去向和房屋预算综合决定。',
        createdAt: '2026-09-06',
        likes: 19
      }
    ]
  }
];

const LOCAL_STORAGE_KEY = 'shanghai_school_discussions_v1';
const LIKES_STORAGE_KEY = 'shanghai_school_user_likes_v1';

export const getStoredDiscussions = (): DiscussionPost[] => {
  try {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed.filter((post: DiscussionPost) => post.origin === 'user_submitted');
      }
    }
  } catch {}
  return [];
};

export const saveStoredDiscussions = (posts: DiscussionPost[]): void => {
  try {
    localStorage.setItem(
      LOCAL_STORAGE_KEY,
      JSON.stringify(posts.filter(post => post.origin === 'user_submitted'))
    );
  } catch {}
};

export const getUserLikedIds = (): string[] => {
  try {
    const saved = localStorage.getItem(LIKES_STORAGE_KEY);
    if (saved) return JSON.parse(saved);
  } catch {}
  return [];
};

export const saveUserLikedIds = (ids: string[]): void => {
  try {
    localStorage.setItem(LIKES_STORAGE_KEY, JSON.stringify(ids));
  } catch {}
};
