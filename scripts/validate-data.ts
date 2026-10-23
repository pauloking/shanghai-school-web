import { SCHOOLS_DATA } from '../src/data/schools';
import {
  ALL_CATCHMENTS_WITH_STATUS,
  CATCHMENTS_DATA,
  QUARANTINED_CATCHMENTS
} from '../src/data/catchments';
import { DISTRICT_OFFICIAL_PORTALS } from '../src/data/officialPortals';
import { FAQS_DATA } from '../src/data/faqs';
import { OFFICIAL_DOCUMENT_DISCOVERIES } from '../src/data/officialDocuments';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

const schoolById = new Map(SCHOOLS_DATA.map(school => [school.id, school]));
const failures: string[] = [];
const expectedDistricts = [
  '黄浦区', '徐汇区', '长宁区', '静安区', '普陀区', '虹口区', '杨浦区', '浦东新区',
  '闵行区', '宝山区', '嘉定区', '金山区', '松江区', '青浦区', '奉贤区', '崇明区'
];
const duplicateValues = (values: string[]) => [...new Set(values.filter((value, index) => values.indexOf(value) !== index))];
const duplicateSchoolIds = duplicateValues(SCHOOLS_DATA.map(item => item.id));
const duplicateCatchmentIds = duplicateValues(ALL_CATCHMENTS_WITH_STATUS.map(item => item.id));
for (const document of OFFICIAL_DOCUMENT_DISCOVERIES) {
  const url = new URL(document.url);
  if (url.protocol !== 'https:' || !/(^|\.)(gov\.cn|edu\.cn)$/.test(url.hostname)) failures.push(`${document.district}: non_official_document_url`);
  if (document.reviewStatus !== 'discovered' || document.humanVerified !== false) failures.push(`${document.district}: discovered_document_marked_verified`);
}
for (const id of duplicateSchoolIds) failures.push(`${id}: duplicate_school_id`);
for (const id of duplicateCatchmentIds) failures.push(`${id}: duplicate_catchment_id`);

const verifiedSchools = SCHOOLS_DATA.filter(school => school.verificationStatus === 'verified');
for (const school of SCHOOLS_DATA) {
  if (school.verificationStatus !== 'verified') {
    if (school.canSimulateAdmission) failures.push(`${school.id}: unverified_school_simulation_enabled`);
    if (school.tier !== '资料待核验') failures.push(`${school.id}: unverified_school_tier_visible`);
    if (school.tuition.amount !== 0 || school.reviews.parentRating !== 0) failures.push(`${school.id}: unverified_school_fact_visible`);
  }
}

for (const catchment of CATCHMENTS_DATA) {
  const school = schoolById.get(catchment.matchedSchoolId);
  if (!school) failures.push(`${catchment.id}: missing_school`);
  if (school && school.district !== catchment.district) failures.push(`${catchment.id}: district_mismatch`);
  if (catchment.verificationStatus === 'invalid_relation') failures.push(`${catchment.id}: invalid_visible`);
  if (catchment.canSimulateAdmission && catchment.verificationStatus !== 'verified') {
    failures.push(`${catchment.id}: unverified_simulation_enabled`);
  }
  if (catchment.verificationStatus === 'verified') {
    if (!catchment.sourceTitle || !catchment.admissionYear || !catchment.lastVerifiedAt) {
      failures.push(`${catchment.id}: incomplete_official_evidence`);
    }
  }
  if (catchment.priceInfo && catchment.priceInfo.evidenceStatus !== 'verified') {
    failures.push(`${catchment.id}: unverified_price_visible`);
  }
}

for (const portal of Object.values(DISTRICT_OFFICIAL_PORTALS)) {
  const url = new URL(portal.portalUrl);
  if (url.protocol !== 'https:' || !/(^|\.)(gov\.cn|edu\.cn)$/.test(url.hostname)) {
    failures.push(`${portal.district}: non_official_portal_url`);
  }
  if (portal.gazetteSearchUrl !== portal.portalUrl) {
    failures.push(`${portal.district}: third_party_search_url_visible`);
  }
}

const amapSource = readFileSync(resolve(process.cwd(), 'src/services/amapService.ts'), 'utf8');
if (/ICONIC_COMPOUND_PRICES|Dynamic district & keyword baseline|priceUpdateDate:\s*['"]2024-2025二手房市场行情参考/.test(amapSource)) {
  failures.push('amapService: synthetic_price_fallback_present');
}

const coverageByDistrict = expectedDistricts.map(district => ({
  district,
  schoolCount: SCHOOLS_DATA.filter(school => school.district === district).length,
  verifiedSchoolCount: verifiedSchools.filter(school => school.district === district).length,
  publishedCatchmentCount: CATCHMENTS_DATA.filter(catchment => catchment.district === district).length,
  verifiedCatchmentCount: CATCHMENTS_DATA.filter(catchment => catchment.district === district && catchment.verificationStatus === 'verified').length,
  officialPortalCount: Object.values(DISTRICT_OFFICIAL_PORTALS).filter(portal => portal.district === district).length
}));
const coverageIssues = coverageByDistrict.flatMap(item => {
  const issues: string[] = [];
  if (item.schoolCount === 0) issues.push(`${item.district}: no_school_record`);
  if (item.officialPortalCount !== 1) issues.push(`${item.district}: official_portal_count_invalid`);
  return issues;
});
failures.push(...coverageIssues);

const verified = CATCHMENTS_DATA.filter(item => item.verificationStatus === 'verified').length;
const evidenceMissing = CATCHMENTS_DATA.filter(item => item.verificationStatus === 'evidence_missing').length;
const report = {
  schools: SCHOOLS_DATA.length,
  verifiedSchools: verifiedSchools.length,
  unverifiedSchools: SCHOOLS_DATA.length - verifiedSchools.length,
  catchmentsRaw: ALL_CATCHMENTS_WITH_STATUS.length,
  catchmentsPublished: CATCHMENTS_DATA.length,
  catchmentsQuarantined: QUARANTINED_CATCHMENTS.length,
  verified,
  evidenceMissing,
  simulationEnabled: CATCHMENTS_DATA.filter(item => item.canSimulateAdmission).length,
  verifiedHousingPrices: CATCHMENTS_DATA.filter(item => item.priceInfo?.evidenceStatus === 'verified').length,
  verifiedFaqs: FAQS_DATA.length,
  discoveredOfficialDocuments: OFFICIAL_DOCUMENT_DISCOVERIES.length,
  discoveredOfficialDocumentCoverage: `${new Set(OFFICIAL_DOCUMENT_DISCOVERIES.map(item => item.district)).size}/16`,
  duplicateSchoolIds,
  duplicateCatchmentIds,
  coverageByDistrict,
  catchmentCoverageGaps: coverageByDistrict.filter(item => item.publishedCatchmentCount === 0).map(item => item.district),
  quarantined: QUARANTINED_CATCHMENTS.map(item => ({
    id: item.id,
    schoolId: item.matchedSchoolId,
    issues: item.validationIssues
  }))
};

console.log(JSON.stringify(report, null, 2));

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

if (process.env.RELEASE_MODE === 'production' && (
  verifiedSchools.length !== SCHOOLS_DATA.length ||
  evidenceMissing > 0 ||
  coverageByDistrict.some(item => item.verifiedSchoolCount === 0 || item.verifiedCatchmentCount === 0)
)) {
  console.error(`RELEASE_BLOCKED: official school/catchment evidence is incomplete or does not cover all 16 districts (${SCHOOLS_DATA.length - verifiedSchools.length} schools and ${evidenceMissing} catchments pending).`);
  process.exit(2);
}
