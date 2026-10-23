import { District, PolicySource, School } from '../types/school';

export interface DistrictPortalInfo {
  district: District;
  bureauName: string;
  portalUrl: string;
  gazetteSearchUrl: string;
  enrollmentSectionName: string;
  catchmentDocTitle: string;
  fiveYearRuleStatus: string;
  phoneConsult: string;
  address: string;
}

export const CITY_OFFICIAL_PORTALS: PolicySource[] = [
  {
    title: '上海市适龄幼儿入园信息登记系统',
    type: 'system_portal',
    authority: '上海市教育委员会',
    url: 'https://age06.edu.sh.cn/age06web/home/',
    publishYear: 2026,
    documentName: '当年度适龄幼儿入园政策与办理入口（具体文件待官网核验）',
    description: '用于查找当年度幼儿入园政策、登记入口及各区公开信息；具体文件标题和适用年份须在官网复核。'
  },
  {
    title: '上海市义务教育入学报名系统',
    type: 'system_portal',
    authority: '上海市教育委员会',
    url: 'https://shrxbm.edu.sh.gov.cn',
    publishYear: 2026,
    documentName: '上海市义务教育阶段招生入学统一信息管理平台',
    description: '用于查找幼升小、小升初当年度公开信息和办理入口；具体安排以平台实时公告为准。'
  },
  {
    title: '上海市教育委员会政务公开专栏',
    type: 'city_gov',
    authority: '上海市教育委员会',
    url: 'https://edu.sh.gov.cn',
    publishYear: 2026,
    documentName: '招生入学政务公开入口（具体文件待官网核验）',
    description: '用于检索市级招生入学政策原文；文件标题、文号、发布日期和适用年份须逐项记录。'
  }
];

function createDistrictPortal(
  district: District,
  bureauName: string,
  portalUrl: string
): DistrictPortalInfo {
  return {
    district,
    bureauName,
    portalUrl,
    gazetteSearchUrl: portalUrl,
    enrollmentSectionName: `${district}人民政府门户（具体栏目待核验）`,
    catchmentDocTitle: '当年度招生入学实施细则与招生地段公示（文件标题待从官方门户核验）',
    fiveYearRuleStatus: '执行规则待核验',
    phoneConsult: '请以官网公布为准',
    address: '请以官网公布为准'
  };
}

export const DISTRICT_OFFICIAL_PORTALS: Record<District, DistrictPortalInfo> = {
  '徐汇区': createDistrictPortal('徐汇区', '上海市徐汇区教育局', 'https://www.xuhui.gov.cn'),
  '黄浦区': createDistrictPortal('黄浦区', '上海市黄浦区教育局', 'https://www.shhuangpu.gov.cn'),
  '静安区': createDistrictPortal('静安区', '上海市静安区教育局', 'https://www.jingan.gov.cn'),
  '浦东新区': createDistrictPortal('浦东新区', '上海市浦东新区教育局', 'https://www.pudong.gov.cn'),
  '闵行区': createDistrictPortal('闵行区', '上海市闵行区教育局', 'https://www.shmh.gov.cn'),
  '普陀区': createDistrictPortal('普陀区', '上海市普陀区教育局', 'https://www.shpt.gov.cn'),
  '长宁区': createDistrictPortal('长宁区', '上海市长宁区教育局', 'https://www.shcn.gov.cn'),
  '杨浦区': createDistrictPortal('杨浦区', '上海市杨浦区教育局', 'https://www.shyp.gov.cn'),
  '虹口区': createDistrictPortal('虹口区', '上海市虹口区教育局', 'https://www.shhk.gov.cn'),
  '宝山区': createDistrictPortal('宝山区', '上海市宝山区教育局', 'https://www.shbsq.gov.cn'),
  '嘉定区': createDistrictPortal('嘉定区', '上海市嘉定区教育局', 'https://www.shjd.gov.cn'),
  '松江区': createDistrictPortal('松江区', '上海市松江区教育局', 'https://www.songjiang.gov.cn'),
  '青浦区': createDistrictPortal('青浦区', '上海市青浦区教育局', 'https://www.shqp.gov.cn'),
  '奉贤区': createDistrictPortal('奉贤区', '上海市奉贤区教育局', 'https://www.fengxian.gov.cn'),
  '金山区': createDistrictPortal('金山区', '上海市金山区教育局', 'https://www.jinshan.gov.cn'),
  '崇明区': createDistrictPortal('崇明区', '上海市崇明区教育局', 'https://www.shcm.gov.cn')
};

/**
 * Build the full list of official policy sources with authentic URLs for any school
 */
export function getSchoolPolicySources(school: School): PolicySource[] {
  if (school.enrollment?.policySources && school.enrollment.policySources.length > 0) {
    return school.enrollment.policySources;
  }

  const districtInfo = DISTRICT_OFFICIAL_PORTALS[school.district] || DISTRICT_OFFICIAL_PORTALS['徐汇区'];
  const sources: PolicySource[] = [];

  // 1. District government portal. A portal link is not evidence for a specific relation.
  sources.push({
    title: `${districtInfo.bureauName}：招生入学政务公开入口（具体文件待核验）`,
    type: 'district_gov',
    authority: districtInfo.bureauName,
    url: districtInfo.portalUrl,
    publishYear: 2026,
    documentName: districtInfo.catchmentDocTitle,
    description: '仅作为查找原文的门户入口，不能单独证明某小区、门牌或居委与学校的招生关系。'
  });

  // 2. Shanghai Municipal Education Commission Enrollment Platform
  sources.push({
    title: '上海市义务教育入学报名系统',
    type: 'system_portal',
    authority: '上海市教育委员会',
    url: 'https://shrxbm.edu.sh.gov.cn',
    publishYear: 2026,
    documentName: '当年度义务教育招生入学信息与办理入口',
    description: '具体办理事项和时间以网站当年度公告为准。'
  });

  // 3. Shanghai Municipal Education Commission Portal
  sources.push({
    title: '上海市教育委员会政务公开入口',
    type: 'city_gov',
    authority: '上海市教育委员会',
    url: 'https://edu.sh.gov.cn',
    publishYear: 2026,
    documentName: '当年度义务教育招生入学政策（具体标题和文号待核验）',
    description: '用于检索市级政策原文；不替代区级招生地段公示。'
  });

  // 4. School Official Channel (if exists or official notice)
  if (school.contact?.website) {
    sources.push({
      title: `${school.name}：学校网站入口（官方属性待核验）`,
      type: 'school_official',
      authority: school.name,
      url: school.contact.website,
      publishYear: 2026,
      documentName: '当年度招生信息（具体文件待核验）',
      description: '仅在确认域名归属并记录具体招生原文后，才能作为学校级证据。'
    });
  }

  return sources;
}
