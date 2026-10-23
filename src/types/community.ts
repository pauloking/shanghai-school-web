export type FAQCategory = 
  | 'all'
  | 'hukou_property'   // 户籍、产权与落户
  | 'five_year_rule'   // 五年一户与学额锁定
  | 'sorting_rule'     // 人户排位与超额统筹
  | 'kindergarten'     // 幼儿园入园
  | 'private_lottery'  // 民办摇号与公民同招
  | 'middle_school'    // 小升初与新中考名额
  | 'housing';         // 学区置业与避坑

export interface FAQItem {
  id: string;
  category: FAQCategory;
  question: string;
  shortAnswer: string;
  detailedAnswer: string[];
  districtScope: string; // e.g. "全市通用", "徐汇/静安/浦东重点", "闵行特色"
  policySource: string;
  tags: string[];
  helpfulCount: number;
  evidenceStatus?: 'verified' | 'pending' | 'quarantined';
  sourceTitle?: string;
  sourceUrl?: string;
  lastVerifiedAt?: string;
}

export type DiscussionCategory = 
  | 'school_choice'    // 选校求助
  | 'housing_advice'   // 置业探讨
  | 'sorting_doubt'    // 顺位疑难
  | 'parent_review';   // 在校在读体验

export interface DiscussionComment {
  id: string;
  authorName: string;
  authorTag: string; // e.g. "2岁宝宝家长", "明珠三年级在读家长", "徐汇置业老手"
  avatarBg: string;
  content: string;
  createdAt: string;
  likes: number;
  isExpert?: boolean;
  origin?: 'user_submitted';
}

export interface DiscussionPost {
  id: string;
  title: string;
  content: string;
  category: DiscussionCategory;
  district: string; // e.g. "徐汇区", "浦东新区", "全市"
  authorName: string;
  authorTag: string;
  avatarBg: string;
  createdAt: string;
  tags: string[];
  likes: number;
  views: number;
  comments: DiscussionComment[];
  pinned?: boolean;
  origin?: 'user_submitted';
}
