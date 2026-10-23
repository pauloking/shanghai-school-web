import { School } from '../types/school';

const OFFICIAL_HOST_PATTERN = /(^|\.)(gov\.cn|edu\.cn)$/i;
const REQUIRED_VERIFIED_FIELDS = ['type', 'establishedYear', 'tier', 'tuition', 'enrollment', 'academic', 'downstream'];

export function isVerifiedSchool(school: School): boolean {
  if (school.evidenceStatus !== 'verified' || !school.sourceTitle || !school.sourceUrl || !school.lastVerifiedAt) return false;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(school.lastVerifiedAt)) return false;
  if (!Array.isArray(school.verifiedFields) || !REQUIRED_VERIFIED_FIELDS.every(field => school.verifiedFields!.includes(field as never))) return false;
  if (!Number.isInteger(school.admissionYear) || !school.admissionSourceUrl) return false;
  try {
    const sourceUrl = new URL(school.sourceUrl);
    const admissionUrl = new URL(school.admissionSourceUrl);
    return sourceUrl.protocol === 'https:' && admissionUrl.protocol === 'https:' && OFFICIAL_HOST_PATTERN.test(admissionUrl.hostname);
  } catch {
    return false;
  }
}

export function sanitizeSchool(school: School): School {
  if (isVerifiedSchool(school)) {
    return {
      ...school,
      dataSource: 'official',
      verificationStatus: 'verified',
      canSimulateAdmission: school.canSimulateAdmission === true
    };
  }

  return {
    ...school,
    type: 'unknown',
    establishedYear: 0,
    tier: '资料待核验',
    badgeTag: '',
    tags: [],
    dataSource: school.dataSource === 'amap_poi' ? 'amap_poi' : 'legacy',
    verificationStatus: school.verificationStatus === 'poi_only' ? 'poi_only' : 'evidence_missing',
    canSimulateAdmission: false,
    tuition: { amount: 0, unit: '元/年', isFree: false, note: '收费标准待官方核验' },
    enrollment: {
      scope: '招生范围待官方核验',
      requirements: [],
      hukouYearsRequired: undefined,
      hasFiveYearRule: false,
      admissionDifficulty: '待官方核验',
      oversubscribedHistory: false,
      catchmentAreas: []
    },
    middleSchoolDetails: undefined,
    academic: {
      rigorLevel: '教学信息待核验',
      foreignTeacherRatio: undefined,
      classSize: 0,
      curriculum: [],
      features: [],
      schedule: undefined
    },
    downstream: {
      routeType: '升学去向待官方核验',
      targetSchools: [],
      directPassRatio: undefined,
      note: undefined
    },
    reviews: {
      parentRating: 0,
      homeworkDuration: '',
      pros: [],
      cons: [],
      parentFeedbackSample: ''
    }
  };
}

export function sanitizeSchools(schools: School[]): School[] {
  return schools.map(sanitizeSchool);
}
