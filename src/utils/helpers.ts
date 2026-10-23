import { School } from '../types/school';

export function formatTuition(school: School): string {
  if (school.verificationStatus !== 'verified') return '收费标准待官方核验';
  if (school.stage === 'kindergarten') {
    if (school.tuition.isFree) {
      return '公办普惠 (规范收费)';
    }
    if (school.type === 'public') {
      return `保教费约 ${school.tuition.amount} ${school.tuition.unit}`;
    }
    return `${school.tuition.amount.toLocaleString()} ${school.tuition.unit}`;
  }

  if (school.tuition.isFree) {
    return '免费 (义务教育)';
  }
  return `${school.tuition.amount.toLocaleString()} ${school.tuition.unit}`;
}

export function getStageLabel(stage: School['stage'] | 'all'): string {
  switch (stage) {
    case 'kindergarten':
      return '👶 幼儿园';
    case 'primary':
      return '🎒 小学';
    case 'middle':
      return '🎓 初中';
    case 'all':
    default:
      return '🏛️ 全部学段';
  }
}

export function getTierBadgeClass(tier: School['tier']): string {
  switch (tier) {
    case '三公名校':
      return 'bg-gradient-to-r from-red-600 to-rose-600 text-white border-red-500 font-bold shadow-xs';
    case '市重点初中':
      return 'bg-violet-100 text-violet-800 border-violet-200';
    case '市示范园':
      return 'bg-purple-100 text-purple-800 border-purple-200';
    case '公办一梯队':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case '民办顶尖/头牌':
      return 'bg-amber-100 text-amber-900 border-amber-300';
    case '双语国际优质':
      return 'bg-emerald-100 text-emerald-800 border-emerald-200';
    case '民办优质/特色':
      return 'bg-indigo-100 text-indigo-800 border-indigo-200';
    case '公办二梯队':
      return 'bg-sky-100 text-sky-800 border-sky-200';
    default:
      return 'bg-slate-100 text-slate-700 border-slate-200';
  }
}

export function getTypeBadgeClass(type: School['type']): string {
  switch (type) {
    case 'public':
      return 'bg-blue-50 text-blue-700 border-blue-200';
    case 'private':
      return 'bg-orange-50 text-orange-700 border-orange-200';
    case 'bilingual':
      return 'bg-teal-50 text-teal-700 border-teal-200';
    case 'international':
      return 'bg-rose-50 text-rose-700 border-rose-200';
    default:
      return 'bg-slate-100 text-slate-700 border-slate-200';
  }
}

export function getRigorBadgeClass(rigor: School['academic']['rigorLevel']): string {
  if (rigor.includes('鸡血')) {
    return 'bg-red-50 text-red-700 border-red-200';
  }
  if (rigor.includes('均衡')) {
    return 'bg-sky-50 text-sky-700 border-sky-200';
  }
  return 'bg-emerald-50 text-emerald-700 border-emerald-200';
}

export interface ChildCohortInfo {
  birthDate: string; // YYYY-MM-DD
  birthYear: number;
  birthMonth: number;
  birthDay: number;
  zodiac: string; // e.g. '龙', '兔', '蛇', '虎'
  zodiacEmoji: string; // e.g. '🐲', '🐰', '🐍', '🐯'
  ageYears: number; // e.g. 2
  ageMonths: number; // e.g. 3
  isEarlyHalfYear: boolean; // true if born on or before August 31
  halfYearLabel: string; // '上半年 (8月31日及前出生)' | '下半年 (9月1日及后出生)'
  enrollmentCutoffTag: string; // '正常学龄' | '顺延一年入学'
  cutoffExplanation: string; // 831截止政策详细说明
  nurseryYear: number; // 托班入读年份 (秋季或春季)
  kindergartenYear: number; // 适龄入园年份 (小班，3周岁)
  primaryYear: number; // 适龄幼升小年份 (小学，6周岁)
  middleYear: number; // 小升初年份
  monthsToKindergarten: number; // 距离入园登记月数 (按当年4月统一登记计)
  monthsToPrimary: number; // 距离幼升小大考月数 (按当年4月统一登记计)
  hukouYearsIfMovedNow: number; // 当前完成落户至幼升小核验时入户年限
}

export function getChineseZodiac(year: number): { name: string; emoji: string } {
  const animals = [
    { name: '鼠', emoji: '🐭' },
    { name: '牛', emoji: '🐮' },
    { name: '虎', emoji: '🐯' },
    { name: '兔', emoji: '🐰' },
    { name: '龙', emoji: '🐲' },
    { name: '蛇', emoji: '🐍' },
    { name: '马', emoji: '🐴' },
    { name: '羊', emoji: '🐑' },
    { name: '猴', emoji: '🐵' },
    { name: '鸡', emoji: '🐔' },
    { name: '狗', emoji: '🐶' },
    { name: '猪', emoji: '🐷' }
  ];
  const idx = (year - 1900) % 12;
  return animals[idx >= 0 ? idx : (idx + 12) % 12];
}

export function calculateChildCohort(birthDateStr: string, referenceDate: Date = new Date()): ChildCohortInfo {
  const parts = (birthDateStr || '2024-05-15').split('-').map(Number);
  const birthYear = parts[0] || 2024;
  const birthMonth = parts[1] || 5;
  const birthDay = parts[2] || 15;

  const currentYear = referenceDate.getFullYear();
  const currentMonth = referenceDate.getMonth() + 1;
  const currentDay = referenceDate.getDate();

  // Age in years & months
  let ageYears = currentYear - birthYear;
  let ageMonths = currentMonth - birthMonth;
  if (currentDay < birthDay) {
    ageMonths -= 1;
  }
  if (ageMonths < 0) {
    ageYears -= 1;
    ageMonths += 12;
  }
  if (ageYears < 0) {
    ageYears = 0;
    ageMonths = 0;
  }

  const { name: zodiac, emoji: zodiacEmoji } = getChineseZodiac(birthYear);

  // Shanghai August 31st Cutoff Rule (法定学龄截止线)
  // Born on or before Aug 31 -> Enrolls kindergarten in year + 3, primary in year + 6
  // Born on or after Sep 1 -> Enrolls kindergarten in year + 4, primary in year + 7
  const isEarlyHalfYear = birthMonth < 8 || (birthMonth === 8 && birthDay <= 31);

  const kindergartenYear = isEarlyHalfYear ? birthYear + 3 : birthYear + 4;
  const primaryYear = isEarlyHalfYear ? birthYear + 6 : birthYear + 7;
  const nurseryYear = birthYear + 2;
  const middleYear = primaryYear + 5; // Shanghai 5-4 system (小学5年，初中4年)

  // Distance in months to April of registration year
  const monthsToKindergarten = Math.max(0, (kindergartenYear - currentYear) * 12 + (4 - currentMonth));
  const monthsToPrimary = Math.max(0, (primaryYear - currentYear) * 12 + (4 - currentMonth));

  // If hukou is transferred in current year, how many years of residence by April of primary year
  const hukouYearsIfMovedNow = Math.max(0, primaryYear - currentYear);

  const halfYearLabel = isEarlyHalfYear ? '上半年 (8月31日及前出生)' : '下半年 (9月1日及后出生)';
  const enrollmentCutoffTag = isEarlyHalfYear ? '正常学龄' : '顺延一年入学';

  const cutoffExplanation = isEarlyHalfYear
    ? `该出生日期在8月31日及以前：截至入学当年8月31日已满整周岁，属于【${kindergartenYear}年秋季入园 / ${primaryYear}年幼升小】应届学龄儿童。`
    : `该出生日期在9月1日及以后（俗称“下半年宝宝”）：按市教委学龄红线，截至入学当年8月31日尚未满整周岁，按规须顺延一年入学（【${kindergartenYear}年秋季入园 / ${primaryYear}年幼升小】）。比同龄上半年宝宝多出整整1年的落户积累与选校筹备期！`;

  return {
    birthDate: birthDateStr,
    birthYear,
    birthMonth,
    birthDay,
    zodiac,
    zodiacEmoji,
    ageYears,
    ageMonths,
    isEarlyHalfYear,
    halfYearLabel,
    enrollmentCutoffTag,
    cutoffExplanation,
    nurseryYear,
    kindergartenYear,
    primaryYear,
    middleYear,
    monthsToKindergarten,
    monthsToPrimary,
    hukouYearsIfMovedNow
  };
}
