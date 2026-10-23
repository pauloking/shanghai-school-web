import React, { useState, useMemo } from 'react';
import { 
  FAQS_DATA 
} from '../data/faqs';
import { 
  getStoredDiscussions, 
  saveStoredDiscussions, 
  getUserLikedIds, 
  saveUserLikedIds 
} from '../data/discussions';
import { FAQCategory, FAQItem, DiscussionCategory, DiscussionComment, DiscussionPost } from '../types/community';
import { 
  Search, 
  HelpCircle, 
  MessageSquare, 
  PlusCircle, 
  ThumbsUp, 
  MessageCircle, 
  Eye, 
  Send, 
  Copy, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  Tag, 
  Pin,
  X,
  Share2
} from 'lucide-react';

interface CommunityHubProps {
  onNavigateToSchool?: (schoolName: string) => void;
  onNavigateToSimulator?: () => void;
  onNavigateToAdvisor?: () => void;
}

export const CommunityHub: React.FC<CommunityHubProps> = ({
  onNavigateToSimulator,
  onNavigateToAdvisor
}) => {
  // Main view mode: FAQ vs Discussion Forum
  const [activeMode, setActiveMode] = useState<'faq' | 'discussion'>('faq');

  // FAQ state
  const [faqCategory, setFaqCategory] = useState<FAQCategory>('all');
  const [faqSearchQuery, setFaqSearchQuery] = useState<string>('');
  const [expandedFaqIds, setExpandedFaqIds] = useState<string[]>(['faq-five-years', 'faq-oversubscribed-middle']);
  const [copiedFaqId, setCopiedFaqId] = useState<string | null>(null);

  // Discussions state
  const [discussions, setDiscussions] = useState<DiscussionPost[]>(() => getStoredDiscussions());
  const [discussionCategory, setDiscussionCategory] = useState<DiscussionCategory | 'all'>('all');
  const [discussionDistrict, setDiscussionDistrict] = useState<string>('all');
  const [discussionSearchQuery, setDiscussionSearchQuery] = useState<string>('');
  const [expandedPostIds, setExpandedPostIds] = useState<string[]>(['post-xuhui-vs-pudong']);
  
  // Likes tracking
  const [likedIds, setLikedIds] = useState<string[]>(() => getUserLikedIds());

  // New post modal state
  const [isNewPostModalOpen, setIsNewPostModalOpen] = useState(false);
  const [newPostTitle, setNewPostTitle] = useState('');
  const [newPostCategory, setNewPostCategory] = useState<DiscussionCategory>('school_choice');
  const [newPostDistrict, setNewPostDistrict] = useState('徐汇区');
  const [newPostAuthor, setNewPostAuthor] = useState('');
  const [newPostAuthorTag, setNewPostAuthorTag] = useState('2岁宝宝家长');
  const [newPostContent, setNewPostContent] = useState('');
  const [newPostTags, setNewPostTags] = useState('');

  // Comment reply state for each post: { [postId]: { author: '', tag: '', content: '' } }
  const [replyForms, setReplyForms] = useState<{ [postId: string]: { author: string; tag: string; content: string } }>({});
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  // Toggle FAQ accordion
  const toggleFaq = (id: string) => {
    setExpandedFaqIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Copy FAQ answer
  const handleCopyFaq = (faq: FAQItem) => {
    const textToCopy = `【魔都升学权威问答】\n❓ 问：${faq.question}\n💡 核心结论：${faq.shortAnswer}\n\n📌 详细解答：\n${faq.detailedAnswer.join('\n\n')}\n\n🏛️ 依据来源：${faq.policySource} (${faq.districtScope})\n—— 来自「魔都幼小择校通」升学宝典`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedFaqId(faq.id);
    showToast('已成功复制官方解答至剪贴板！');
    setTimeout(() => setCopiedFaqId(null), 2500);
  };

  // Toggle like on FAQ
  const handleLikeFaq = (faqId: string) => {
    if (likedIds.includes(faqId)) {
      setLikedIds(prev => {
        const next = prev.filter(id => id !== faqId);
        saveUserLikedIds(next);
        return next;
      });
    } else {
      setLikedIds(prev => {
        const next = [...prev, faqId];
        saveUserLikedIds(next);
        return next;
      });
      showToast('感谢您的支持与点赞！');
    }
  };

  // Toggle like on Discussion Post
  const handleLikePost = (postId: string) => {
    const isLiked = likedIds.includes(postId);
    const updatedLiked = isLiked 
      ? likedIds.filter(id => id !== postId) 
      : [...likedIds, postId];
    
    setLikedIds(updatedLiked);
    saveUserLikedIds(updatedLiked);

    const updatedPosts = discussions.map(p => {
      if (p.id === postId) {
        return { ...p, likes: isLiked ? Math.max(0, p.likes - 1) : p.likes + 1 };
      }
      return p;
    });
    setDiscussions(updatedPosts);
    saveStoredDiscussions(updatedPosts);
  };

  // Toggle discussion post expanded replies
  const togglePostReplies = (id: string) => {
    setExpandedPostIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Handle post submit
  const handleCreatePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPostTitle.trim() || !newPostContent.trim()) {
      alert('请填写标题和详细内容');
      return;
    }

    const newPost: DiscussionPost = {
      id: `post-${Date.now()}`,
      title: newPostTitle.trim(),
      content: newPostContent.trim(),
      category: newPostCategory,
      district: newPostDistrict,
      authorName: newPostAuthor.trim() || '热心家长',
      authorTag: newPostAuthorTag.trim() || '2岁宝宝家长',
      avatarBg: 'bg-indigo-600',
      createdAt: '刚刚',
      tags: newPostTags.split(/[,，\s]+/).filter(Boolean),
      likes: 1,
      views: 12,
      comments: [],
      origin: 'user_submitted'
    };

    const updated = [newPost, ...discussions];
    setDiscussions(updated);
    saveStoredDiscussions(updated);

    // Reset form
    setNewPostTitle('');
    setNewPostContent('');
    setNewPostTags('');
    setIsNewPostModalOpen(false);
    setExpandedPostIds(prev => [...prev, newPost.id]);
    showToast('发布成功！已同步至家长互助广场');
  };

  // Handle comment submit
  const handleAddComment = (postId: string) => {
    const form = replyForms[postId];
    if (!form || !form.content.trim()) {
      alert('请输入回复内容');
      return;
    }

    const newComment: DiscussionComment = {
      id: `c-${Date.now()}`,
      authorName: form.author.trim() || '热心家长',
      authorTag: form.tag.trim() || '关注幼升小',
      avatarBg: 'bg-emerald-600',
      content: form.content.trim(),
      createdAt: '刚刚',
      likes: 0,
      origin: 'user_submitted'
    };

    const updated = discussions.map(p => {
      if (p.id === postId) {
        return {
          ...p,
          comments: [...p.comments, newComment]
        };
      }
      return p;
    });

    setDiscussions(updated);
    saveStoredDiscussions(updated);

    // Clear form
    setReplyForms(prev => ({
      ...prev,
      [postId]: { author: '', tag: '', content: '' }
    }));
    showToast('回复发表成功！');
  };

  // Filtered FAQs
  const filteredFaqs = useMemo(() => {
    return FAQS_DATA.filter(faq => {
      const matchCategory = faqCategory === 'all' || faq.category === faqCategory;
      const query = faqSearchQuery.trim().toLowerCase();
      const matchQuery = !query || 
        faq.question.toLowerCase().includes(query) ||
        faq.shortAnswer.toLowerCase().includes(query) ||
        faq.detailedAnswer.some(a => a.toLowerCase().includes(query)) ||
        faq.tags.some(t => t.toLowerCase().includes(query)) ||
        faq.districtScope.toLowerCase().includes(query);
      return matchCategory && matchQuery;
    });
  }, [faqCategory, faqSearchQuery]);

  // Filtered Discussions
  const filteredDiscussions = useMemo(() => {
    return discussions.filter(post => {
      const matchCategory = discussionCategory === 'all' || post.category === discussionCategory;
      const matchDistrict = discussionDistrict === 'all' || post.district.includes(discussionDistrict);
      const query = discussionSearchQuery.trim().toLowerCase();
      const matchQuery = !query || 
        post.title.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query) ||
        post.tags.some(t => t.toLowerCase().includes(query)) ||
        post.comments.some(c => c.content.toLowerCase().includes(query));
      return matchCategory && matchDistrict && matchQuery;
    });
  }, [discussions, discussionCategory, discussionDistrict, discussionSearchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 border border-slate-700 animate-bounce">
          <Check className="w-5 h-5 text-emerald-400" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Top Hero Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white p-6 sm:p-8 shadow-xl border border-blue-800/40">
        <div className="absolute right-0 top-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-200 text-xs font-semibold border border-blue-400/30">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              来源受控的升学资料与家长互助
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              升学问答宝典 & 家长互动互助社区
            </h1>
            <p className="text-blue-100 text-sm max-w-2xl leading-relaxed">
              政策问答仅展示已绑定官方原文的条目；讨论区只展示当前设备上由用户主动提交的内容。
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            {onNavigateToAdvisor && (
              <button
                onClick={onNavigateToAdvisor}
                className="flex items-center gap-2 bg-blue-600/60 hover:bg-blue-600 text-white text-xs font-medium px-4 py-2.5 rounded-xl border border-blue-400/40 transition-all shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                智能向导推荐
              </button>
            )}
            <button
              onClick={() => {
                setActiveMode('discussion');
                setIsNewPostModalOpen(true);
              }}
              className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg shadow-teal-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <PlusCircle className="w-4 h-4" />
              发起提问 / 交流
            </button>
          </div>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="mt-6 pt-5 border-t border-blue-700/50 flex flex-wrap items-center gap-3">
          <button
            onClick={() => setActiveMode('faq')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm ${
              activeMode === 'faq'
                ? 'bg-white text-blue-900 shadow-md scale-102'
                : 'bg-blue-800/40 text-blue-200 hover:bg-blue-800/70 border border-blue-700/50'
            }`}
          >
            <HelpCircle className="w-4 h-4 text-blue-600" />
            已核验政策问答 ({FAQS_DATA.length})
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-semibold">来源门禁</span>
          </button>

          <button
            onClick={() => setActiveMode('discussion')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-sm ${
              activeMode === 'discussion'
                ? 'bg-white text-indigo-900 shadow-md scale-102'
                : 'bg-blue-800/40 text-blue-200 hover:bg-blue-800/70 border border-blue-700/50'
            }`}
          >
            <MessageSquare className="w-4 h-4 text-indigo-600" />
            家长互助讨论区 ({discussions.length})
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">用户投稿</span>
          </button>
        </div>
      </div>

      {/* ================= MODE 1: FAQ KNOWLEDGEBASE ================= */}
      {activeMode === 'faq' && (
        <div className="space-y-6">
          {/* FAQ Filter & Search Bar */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200 space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
              {/* Search input */}
              <div className="relative w-full sm:max-w-lg">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={faqSearchQuery}
                  onChange={(e) => setFaqSearchQuery(e.target.value)}
                  placeholder="搜索问题关键词（如：五年一户、产证占比、爷爷奶奶、新中考、统筹）..."
                  className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
                />
                {faqSearchQuery && (
                  <button 
                    onClick={() => setFaqSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* District Shortcut Advice */}
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>仅收录已绑定官方标题、链接和复核日期的问答</span>
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
              <span className="text-xs font-semibold text-slate-400 mr-1">分类检索:</span>
              {[
                { key: 'all', label: '全部问题' },
                { key: 'five_year_rule', label: '五年一户与学额' },
                { key: 'hukou_property', label: '产权份额与祖辈房产' },
                { key: 'sorting_rule', label: '人户排位与超额统筹' },
                { key: 'middle_school', label: '小升初与新中考' },
                { key: 'private_lottery', label: '公民同招与民办摇号' },
                { key: 'kindergarten', label: '幼儿园入园' }
              ].map(cat => (
                <button
                  key={cat.key}
                  onClick={() => setFaqCategory(cat.key as FAQCategory)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    faqCategory === cat.key
                      ? 'bg-blue-600 text-white font-semibold shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Stats Helper */}
          <div className="text-xs text-slate-500 px-1 flex items-center justify-between">
            <span>找到符合条件的已核验解答：<strong className="text-blue-600">{filteredFaqs.length}</strong> 条</span>
            <button 
              onClick={() => {
                if (expandedFaqIds.length === filteredFaqs.length) {
                  setExpandedFaqIds([]);
                } else {
                  setExpandedFaqIds(filteredFaqs.map(f => f.id));
                }
              }}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              {expandedFaqIds.length === filteredFaqs.length ? '收起全部答案' : '展开全部详解'}
            </button>
          </div>

          {/* FAQ Accordion List */}
          <div className="space-y-4">
            {filteredFaqs.map((faq) => {
              const isExpanded = expandedFaqIds.includes(faq.id);
              const isLiked = likedIds.includes(faq.id);

              return (
                <div 
                  key={faq.id}
                  className="bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:border-blue-300 transition-all overflow-hidden"
                >
                  {/* Header Question */}
                  <div 
                    onClick={() => toggleFaq(faq.id)}
                    className="p-5 cursor-pointer select-none flex items-start justify-between gap-4 hover:bg-slate-50/70 transition-colors"
                  >
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="px-2 py-0.5 rounded-md bg-blue-100 text-blue-800 text-[11px] font-bold">
                          {faq.category === 'five_year_rule' && '五年一户'}
                          {faq.category === 'hukou_property' && '产权与落户'}
                          {faq.category === 'sorting_rule' && '排位与统筹'}
                          {faq.category === 'middle_school' && '小升初/中考'}
                          {faq.category === 'private_lottery' && '民办与摇号'}
                          {faq.category === 'kindergarten' && '幼儿园'}
                        </span>
                        <span className="text-[11px] text-slate-400 bg-slate-100 px-2 py-0.5 rounded-md">
                          适用：{faq.districtScope}
                        </span>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                        {faq.question}
                      </h3>

                      {/* Brief Short Answer */}
                      <div className="text-xs sm:text-sm text-slate-700 bg-blue-50/70 border-l-4 border-blue-500 px-3.5 py-2 rounded-r-lg font-medium leading-relaxed">
                        <strong className="text-blue-900 mr-1">💡 官方核心结论：</strong>
                        {faq.shortAnswer}
                      </div>
                    </div>

                    <div className="shrink-0 pt-2 text-slate-400 hover:text-slate-600">
                      {isExpanded ? (
                        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                          <ChevronUp className="w-5 h-5" />
                        </div>
                      ) : (
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                          <ChevronDown className="w-5 h-5" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Expanded Detailed Answer & Policy */}
                  {isExpanded && (
                    <div className="px-5 pb-5 pt-1 border-t border-slate-100 space-y-4 bg-slate-50/40">
                      <div className="space-y-2.5 pt-2">
                        <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                          <ShieldCheck className="w-4 h-4 text-emerald-600" />
                          政策深度剖析与避坑细则：
                        </span>
                        {faq.detailedAnswer.map((para, idx) => (
                          <p key={idx} className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-3 border-l-2 border-slate-200">
                            {para}
                          </p>
                        ))}
                      </div>

                      {/* Tags & Policy Citations */}
                      <div className="pt-3 border-t border-slate-200/60 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
                        <div className="flex flex-wrap items-center gap-2">
                          <Tag className="w-3.5 h-3.5 text-slate-400" />
                          {faq.tags.map((t, idx) => (
                            <span key={idx} className="bg-slate-200/70 text-slate-700 px-2 py-0.5 rounded text-[11px]">
                              #{t}
                            </span>
                          ))}
                        </div>

                        {/* Action buttons */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleLikeFaq(faq.id);
                            }}
                            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                              isLiked 
                                ? 'bg-blue-50 border-blue-300 text-blue-700' 
                                : 'bg-white border-slate-200 hover:border-slate-300 text-slate-600'
                            }`}
                          >
                            <ThumbsUp className={`w-3.5 h-3.5 ${isLiked ? 'fill-blue-600 text-blue-600' : ''}`} />
                            有用 ({faq.helpfulCount + (isLiked ? 1 : 0)})
                          </button>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleCopyFaq(faq);
                            }}
                            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white border border-slate-200 hover:border-blue-300 hover:text-blue-700 text-slate-600 text-xs font-medium transition-all"
                          >
                            {copiedFaqId === faq.id ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                                已复制
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                复制解答
                              </>
                            )}
                          </button>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveMode('discussion');
                              setDiscussionSearchQuery(faq.tags[0] || '');
                            }}
                            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-indigo-50 border border-indigo-200 text-indigo-700 text-xs font-medium hover:bg-indigo-100 transition-all"
                          >
                            <MessageCircle className="w-3.5 h-3.5" />
                            去社区讨论此话题
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {filteredFaqs.length === 0 && (
              <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-6">
                <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h4 className="text-base font-bold text-slate-700 mb-1">暂无已完成证据核验的政策问答</h4>
                <p className="text-xs text-slate-500 max-w-md mx-auto mb-4">
                  旧问答已暂停展示，待逐条绑定教育部门原文后再恢复。您可以前往官方政策入口自行核对，或在讨论区交流，但用户回复不等同于官方结论。
                </p>
                <button
                  onClick={() => {
                    setActiveMode('discussion');
                    setIsNewPostModalOpen(true);
                  }}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-xl shadow hover:bg-blue-700"
                >
                  <PlusCircle className="w-4 h-4" />
                  前往发布新提问
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ================= MODE 2: PARENT DISCUSSION FORUM ================= */}
      {activeMode === 'discussion' && (
        <div className="space-y-6">
          {/* Discussion Header & Filters */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200 space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 items-center justify-between">
              {/* Search input */}
              <div className="relative w-full sm:max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={discussionSearchQuery}
                  onChange={(e) => setDiscussionSearchQuery(e.target.value)}
                  placeholder="搜索求助帖、小区名、在读口碑、学段..."
                  className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all"
                />
                {discussionSearchQuery && (
                  <button 
                    onClick={() => setDiscussionSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* District dropdown */}
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <select
                  value={discussionDistrict}
                  onChange={(e) => setDiscussionDistrict(e.target.value)}
                  className="px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="all">全部区域 (16区)</option>
                  <option value="徐汇区">徐汇区</option>
                  <option value="浦东新区">浦东新区</option>
                  <option value="静安区">静安区</option>
                  <option value="闵行区">闵行区</option>
                  <option value="黄浦区">黄浦区</option>
                  <option value="杨浦区">杨浦区</option>
                  <option value="长宁区">长宁区</option>
                </select>

                <button
                  onClick={() => setIsNewPostModalOpen(true)}
                  className="flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-xs font-bold shadow-md shadow-indigo-500/20 whitespace-nowrap ml-auto sm:ml-0"
                >
                  <PlusCircle className="w-4 h-4" />
                  发布我的求助
                </button>
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100">
              <span className="text-xs font-semibold text-slate-400 mr-1">话题类型:</span>
              {[
                { key: 'all', label: '全部交流' },
                { key: 'school_choice', label: '🏫 选校与梯队' },
                { key: 'housing_advice', label: '🏡 学区房置业' },
                { key: 'sorting_doubt', label: '⚖️ 顺位与年限' },
                { key: 'parent_review', label: '📖 在读真实反馈' }
              ].map(cat => (
                <button
                  key={cat.key}
                  onClick={() => setDiscussionCategory(cat.key as any)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    discussionCategory === cat.key
                      ? 'bg-indigo-600 text-white font-semibold shadow-sm'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Discussion Posts List */}
          <div className="space-y-4">
            {filteredDiscussions.map((post) => {
              const isExpanded = expandedPostIds.includes(post.id);
              const isLiked = likedIds.includes(post.id);
              const form = replyForms[post.id] || { author: '', tag: '', content: '' };

              return (
                <div 
                  key={post.id}
                  className={`bg-white rounded-2xl border shadow-sm transition-all overflow-hidden ${
                    post.pinned ? 'border-amber-300 bg-gradient-to-b from-amber-50/20 to-white' : 'border-slate-200 hover:border-indigo-300'
                  }`}
                >
                  {/* Post Header */}
                  <div className="p-5 space-y-3">
                    <div className="flex items-center justify-between gap-3">
                      {/* Author info */}
                      <div className="flex items-center gap-2.5">
                        <div className={`w-8 h-8 rounded-full ${post.avatarBg} text-white font-bold flex items-center justify-center text-xs shadow-sm`}>
                          {post.authorName.slice(0, 1)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-900">{post.authorName}</span>
                            <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-medium">
                              {post.authorTag}
                            </span>
                            {post.pinned && (
                              <span className="flex items-center gap-0.5 text-[10px] bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full font-bold">
                                <Pin className="w-3 h-3" /> 置顶精选
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] text-slate-400">{post.createdAt} · {post.district}</span>
                        </div>
                      </div>

                      {/* Category tag */}
                      <span className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-700 text-xs font-bold">
                        {post.category === 'school_choice' && '选校求助'}
                        {post.category === 'housing_advice' && '置业探讨'}
                        {post.category === 'sorting_doubt' && '顺位年限'}
                        {post.category === 'parent_review' && '在读反馈'}
                      </span>
                    </div>

                    {/* Post Title */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug hover:text-indigo-600 cursor-pointer" onClick={() => togglePostReplies(post.id)}>
                      {post.title}
                    </h3>

                    {/* Post Content */}
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                      {post.content}
                    </p>

                    {/* Tags */}
                    {post.tags.length > 0 && (
                      <div className="flex flex-wrap items-center gap-1.5 pt-1">
                        {post.tags.map((t, idx) => (
                          <span key={idx} className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded text-[11px]">
                            #{t}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Post Footer Actions */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1 text-[11px] text-slate-400">
                          <Eye className="w-3.5 h-3.5" />
                          {post.views} 阅读
                        </span>
                        <button
                          onClick={() => togglePostReplies(post.id)}
                          className="flex items-center gap-1 text-slate-600 hover:text-indigo-600 font-medium"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          {post.comments.length} 条回复
                        </button>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleLikePost(post.id)}
                          className={`flex items-center gap-1 px-3 py-1 rounded-lg border text-xs font-medium transition-all ${
                            isLiked
                              ? 'bg-indigo-50 border-indigo-300 text-indigo-700'
                              : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                          }`}
                        >
                          <ThumbsUp className={`w-3.5 h-3.5 ${isLiked ? 'fill-indigo-600 text-indigo-600' : ''}`} />
                          点赞 ({post.likes})
                        </button>

                        <button
                          onClick={() => togglePostReplies(post.id)}
                          className="px-3 py-1 rounded-lg bg-indigo-50 text-indigo-700 hover:bg-indigo-100 font-medium text-xs flex items-center gap-1"
                        >
                          {isExpanded ? '收起互动' : '查看讨论'}
                          {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Expanded Replies & Comment Input */}
                  {isExpanded && (
                    <div className="bg-slate-50/70 p-5 border-t border-slate-100 space-y-4">
                      {/* Comments list */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                          <MessageSquare className="w-3.5 h-3.5 text-indigo-600" />
                          家长与升学规划师答疑 ({post.comments.length})
                        </h4>

                        {post.comments.map((comment) => (
                          <div 
                            key={comment.id}
                            className={`p-3.5 rounded-xl border text-xs space-y-2 ${
                              comment.isExpert 
                                ? 'bg-amber-50/60 border-amber-200/80 shadow-xs' 
                                : 'bg-white border-slate-200'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className={`w-6 h-6 rounded-full ${comment.avatarBg} text-white text-[10px] font-bold flex items-center justify-center`}>
                                  {comment.authorName.slice(0, 1)}
                                </div>
                                <span className="font-bold text-slate-900">{comment.authorName}</span>
                                <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                                  {comment.authorTag}
                                </span>
                                {comment.isExpert && (
                                  <span className="text-[10px] bg-amber-100 text-amber-800 font-bold px-1.5 py-0.5 rounded flex items-center gap-0.5">
                                    <Sparkles className="w-2.5 h-2.5" /> 专家精答
                                  </span>
                                )}
                              </div>
                              <span className="text-[10px] text-slate-400">{comment.createdAt}</span>
                            </div>

                            <p className="text-slate-700 leading-relaxed pl-8">
                              {comment.content}
                            </p>
                          </div>
                        ))}

                        {post.comments.length === 0 && (
                          <p className="text-xs text-slate-400 italic py-2 text-center">暂无回复，快来成为第一个分享经验的家长吧！</p>
                        )}
                      </div>

                      {/* Reply Input Form */}
                      <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-2.5">
                        <div className="text-xs font-bold text-slate-800">✍️ 我来解答 / 分享我的实操经验：</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          <input
                            type="text"
                            placeholder="您的昵称（例如：两岁宝妈 / 徐汇一年级家长）"
                            value={form.author}
                            onChange={(e) => setReplyForms(prev => ({
                              ...prev,
                              [post.id]: { ...form, author: e.target.value }
                            }))}
                            className="px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
                          />
                          <input
                            type="text"
                            placeholder="身份标签（例如：建襄在读 / 准备买房 / 2030届）"
                            value={form.tag}
                            onChange={(e) => setReplyForms(prev => ({
                              ...prev,
                              [post.id]: { ...form, tag: e.target.value }
                            }))}
                            className="px-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500"
                          />
                        </div>

                        <textarea
                          rows={2}
                          placeholder="分享您的观点、踩坑建议或真实就读情况..."
                          value={form.content}
                          onChange={(e) => setReplyForms(prev => ({
                            ...prev,
                            [post.id]: { ...form, content: e.target.value }
                          }))}
                          className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-indigo-500 resize-none"
                        />

                        <div className="flex justify-end">
                          <button
                            onClick={() => handleAddComment(post.id)}
                            className="flex items-center gap-1.5 px-4 py-1.5 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-bold shadow-sm transition-all"
                          >
                            <Send className="w-3.5 h-3.5" />
                            提交回复
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            {filteredDiscussions.length === 0 && (
              <div className="text-center py-12 bg-white rounded-2xl border border-slate-200 p-6">
                <MessageSquare className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                <h4 className="text-base font-bold text-slate-700 mb-1">未找到相关讨论帖子</h4>
                <p className="text-xs text-slate-500 max-w-md mx-auto mb-4">
                  您可以尝试清除关键词或切换区县，也可以立即发起全新的求助帖！
                </p>
                <button
                  onClick={() => setIsNewPostModalOpen(true)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 text-white text-xs font-semibold rounded-xl shadow hover:bg-indigo-700"
                >
                  <PlusCircle className="w-4 h-4" />
                  发起新求助
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ================= MODAL: CREATE NEW POST ================= */}
      {isNewPostModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 space-y-5 animate-in fade-in zoom-in-95 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
                  <PlusCircle className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">发起升学求助或话题讨论</h3>
              </div>
              <button 
                onClick={() => setIsNewPostModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreatePostSubmit} className="space-y-4 text-xs sm:text-sm">
              {/* Category & District */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">话题类型</label>
                  <select
                    value={newPostCategory}
                    onChange={(e) => setNewPostCategory(e.target.value as DiscussionCategory)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800"
                  >
                    <option value="school_choice">🏫 选校与学校梯队权衡</option>
                    <option value="housing_advice">🏡 学区房置业与预算比价</option>
                    <option value="sorting_doubt">⚖️ 顺位、入户年限与统筹</option>
                    <option value="parent_review">📖 在读家长真实体验反馈</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">涉及区县</label>
                  <select
                    value={newPostDistrict}
                    onChange={(e) => setNewPostDistrict(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800"
                  >
                    <option value="徐汇区">徐汇区</option>
                    <option value="浦东新区">浦东新区</option>
                    <option value="静安区">静安区</option>
                    <option value="闵行区">闵行区</option>
                    <option value="黄浦区">黄浦区</option>
                    <option value="杨浦区">杨浦区</option>
                    <option value="长宁区">长宁区</option>
                    <option value="全市通用">全市通用 / 跨区对比</option>
                  </select>
                </div>
              </div>

              {/* Author Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">您的昵称</label>
                  <input
                    type="text"
                    placeholder="例如：辰辰爸爸 / 乐乐妈"
                    value={newPostAuthor}
                    onChange={(e) => setNewPostAuthor(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">孩子情况 / 身份标签</label>
                  <input
                    type="text"
                    placeholder="例如：2岁宝宝家长 / 2030届幼升小"
                    value={newPostAuthorTag}
                    onChange={(e) => setNewPostAuthorTag(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                    required
                  />
                </div>
              </div>

              {/* Title */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">求助标题</label>
                <input
                  type="text"
                  placeholder="用一句话清晰概括您的问题（如：2岁娃预算600万，徐汇老破小还是浦东次新？）"
                  value={newPostTitle}
                  onChange={(e) => setNewPostTitle(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-900"
                  required
                />
              </div>

              {/* Detailed Content */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">具体情况与详细描述</label>
                <textarea
                  rows={4}
                  placeholder="详细说明您的家庭预算、工作地点、孩子出生年月、目前纠结的学校或小区、顾虑点等，越详细得到的建议越具针对性..."
                  value={newPostContent}
                  onChange={(e) => setNewPostContent(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs resize-none"
                  required
                />
              </div>

              {/* Tags */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">关键词标签 (空格或逗号分隔)</label>
                <input
                  type="text"
                  placeholder="例如：建襄小学 进才实验 700万预算 挂户口"
                  value={newPostTags}
                  onChange={(e) => setNewPostTags(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsNewPostModalOpen(false)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-xl"
                >
                  取消
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl shadow-md transition-all"
                >
                  立即发布求助
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
