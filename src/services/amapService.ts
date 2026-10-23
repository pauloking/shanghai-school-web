import { School, District, SchoolStage, HousingPriceInfo } from '../types/school';
import { CATCHMENTS_DATA, CommunityCatchment } from '../data/catchments';
import { SCHOOLS_DATA } from '../data/schools';
import { sanitizeSchool } from '../utils/schoolDataQuality';

export interface SearchedPOIItem {
  id: string;
  name: string;
  district: string;
  address: string;
  location?: { lng: number; lat: number };
  source: 'official_catchment' | 'catchment_reference' | 'amap_poi' | 'school';
  officialCatchment?: CommunityCatchment;
  matchedSchool?: School;
  closestPrimary?: School;
  distanceToPrimary?: number;
  walkingMinutesToPrimary?: number;
  closestKindergarten?: School;
  distanceToKindergarten?: number;
  nearbyPrimaries?: School[];
  nearbyKindergartens?: School[];
  amapMarkerUrl?: string;
  amapNavigationUrl?: string;
  inferredMiddleSchool?: string;
  priceInfo?: HousingPriceInfo;
  relationshipStatus?: 'verified' | 'evidence_missing' | 'nearby_only' | 'school_profile_only';
  evidenceLevel?: 'official' | 'legacy' | 'third_party';
  canSimulateAdmission?: boolean;
}

// Earth radius in meters
export function getDistanceMeters(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371e3;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c);
}

// Official Gaode Map Marker Web URL
export function getAmapMarkerUrl(location: { lng: number; lat: number }, name: string): string {
  return `https://uri.amap.com/marker?position=${location.lng},${location.lat}&name=${encodeURIComponent(name)}&src=ShanghaiSchoolCompass&coordinate=gaode&callnative=0`;
}

// Official Gaode Map Walk Navigation Web URL
export function getAmapNavigationUrl(
  from: { lng: number; lat: number; name?: string },
  to: { lng: number; lat: number; name?: string }
): string {
  const fromParam = `${from.lng},${from.lat}${from.name ? ',' + encodeURIComponent(from.name) : ''}`;
  const toParam = `${to.lng},${to.lat}${to.name ? ',' + encodeURIComponent(to.name) : ''}`;
  return `https://uri.amap.com/navigation?from=${fromParam}&to=${toParam}&mode=walk&policy=1&src=ShanghaiSchoolCompass&coordinate=gaode&callnative=0`;
}

// Browser map credentials come from deployment configuration only. The UI never
// accepts or persists credentials, and the key must be restricted by domain.
export function getSavedAMapCredentials(): { key: string; securityCode: string } {
  const key = (import.meta.env.VITE_AMAP_WEB_KEY || '').trim();
  const securityCode = (import.meta.env.VITE_AMAP_SECURITY_CODE || '').trim();
  return { key, securityCode };
}

// Load AMap JS API script with all necessary plugins
let aMapLoadPromise: Promise<any> | null = null;

export function loadAMapScript(): Promise<any> {
  if (typeof window === 'undefined') return Promise.reject('SSR not supported');

  if ((window as any).AMap && (window as any).AMap.AutoComplete) {
    return Promise.resolve((window as any).AMap);
  }

  if (aMapLoadPromise) return aMapLoadPromise;

  const { key, securityCode } = getSavedAMapCredentials();
  if (!key) {
    return Promise.reject('未配置高德地图 API Key');
  }

  if (securityCode) {
    (window as any)._AMapSecurityConfig = {
      securityJsCode: securityCode.trim(),
    };
  }

  aMapLoadPromise = new Promise((resolve, reject) => {
    const existingScript = document.getElementById('amap-js-sdk');
    if (existingScript) {
      const checkInterval = setInterval(() => {
        if ((window as any).AMap) {
          clearInterval(checkInterval);
          ensurePluginsLoaded((window as any).AMap).then(resolve).catch(reject);
        }
      }, 100);
      return;
    }

    const script = document.createElement('script');
    script.id = 'amap-js-sdk';
    script.type = 'text/javascript';
    script.src = `https://webapi.amap.com/maps?v=2.0&key=${key.trim()}&plugin=AMap.Scale,AMap.ToolBar,AMap.AutoComplete,AMap.PlaceSearch,AMap.Geocoder`;
    script.async = true;
    script.onload = () => {
      const AMap = (window as any).AMap;
      if (AMap) {
        ensurePluginsLoaded(AMap).then(resolve).catch(reject);
      } else {
        reject('AMap 对象未能正确加载');
      }
    };
    script.onerror = (err) => {
      aMapLoadPromise = null;
      reject(err || '加载高德地图 JS API 失败，请检查网络或 Key 权限');
    };
    document.head.appendChild(script);
  });

  return aMapLoadPromise;
}

function ensurePluginsLoaded(AMap: any): Promise<any> {
  return new Promise((resolve) => {
    if (AMap.AutoComplete && AMap.PlaceSearch && AMap.Geocoder) {
      resolve(AMap);
      return;
    }
    AMap.plugin(['AMap.AutoComplete', 'AMap.PlaceSearch', 'AMap.Geocoder'], () => {
      resolve(AMap);
    });
  });
}

// Keywords to exclude training institutions from school results
const EXCLUDE_INSTITUTIONS = [
  '培训', '辅导', '托管', '驾校', '学车', '琴行', '画室', '舞蹈', '跆拳道',
  '少儿英语', '早教', '乐高', '机器人', '游泳馆', '考级', '自习室', '专修', '驾培', '美术',
  '保卫科', '门卫室', '门卫', '保安室', '传达室', '总务处', '教工食堂', '食堂', '停车场',
  '分部宿舍', '宿舍', '东门', '西门', '南门', '北门', '行政楼', '实训楼', '收发室'
];

// Words indicating sub-facilities rather than actual school title
const FACILITY_SUFFIXES = [
  '门卫室', '门卫', '保安室', '传达室', '总务处', '教工食堂', '食堂', '停车场',
  '分部宿舍', '宿舍', '东门', '西门', '南门', '北门', '正门', '后门', '行政楼', '实训楼', '收发室', '保卫科', '配电房'
];

export function cleanSchoolName(name: string): string {
  let cleaned = name.trim();
  // Strip trailing facility suffixes like "-门卫室", "（门卫室）", "(门卫)", "门卫室"
  FACILITY_SUFFIXES.forEach(suf => {
    cleaned = cleaned.replace(new RegExp(`[-_—\\s(（\\[]?${suf}[)）\\]]?$`, 'g'), '');
  });
  return cleaned.trim();
}

export function detectShanghaiDistrict(poiName: string = '', address: string = '', adname: string = ''): District {
  const fullText = `${adname} ${poiName} ${address}`;
  
  // 1. Direct standard 16 districts
  const allDistricts: District[] = [
    '浦东新区', '徐汇区', '黄浦区', '静安区', '闵行区', '长宁区', '普陀区',
    '杨浦区', '虹口区', '宝山区', '嘉定区', '松江区', '青浦区', '奉贤区', '金山区', '崇明区'
  ];

  for (const d of allDistricts) {
    if (fullText.includes(d)) return d;
  }

  // 2. Short forms
  if (fullText.includes('浦东')) return '浦东新区';
  if (fullText.includes('徐汇')) return '徐汇区';
  if (fullText.includes('黄浦')) return '黄浦区';
  if (fullText.includes('静安')) return '静安区';
  if (fullText.includes('闵行')) return '闵行区';
  if (fullText.includes('长宁')) return '长宁区';
  if (fullText.includes('普陀')) return '普陀区';
  if (fullText.includes('杨浦')) return '杨浦区';
  if (fullText.includes('虹口')) return '虹口区';
  if (fullText.includes('宝山')) return '宝山区';
  if (fullText.includes('嘉定')) return '嘉定区';
  if (fullText.includes('松江')) return '松江区';
  if (fullText.includes('青浦')) return '青浦区';
  if (fullText.includes('奉贤')) return '奉贤区';
  if (fullText.includes('金山')) return '金山区';
  if (fullText.includes('崇明')) return '崇明区';

  // 3. Iconic Town / Sub-area keywords to district
  if (/周浦|川沙|三林|康桥|张江|金桥|陆家嘴|惠南|曹路|临港|高桥|北蔡|航头|宣桥|新场|书院|泥城|大团|南汇|唐镇|合庆/.test(fullText)) return '浦东新区';
  if (/莘庄|七宝|梅陇|华漕|颛桥|马桥|吴泾|浦江|虹桥镇|江川路|古美/.test(fullText)) return '闵行区';
  if (/天平|湖南路|枫林|斜土|田林|虹梅|康健|龙华|凌云|长桥|华泾|徐家汇/.test(fullText)) return '徐汇区';
  if (/南京东路|外滩|半淞园|小东门|豫园|打浦桥|淮海中路|瑞金二路|五里桥|老西门/.test(fullText)) return '黄浦区';
  if (/南京西路|静安寺|江宁路|石门二路|曹家渡|天目西路|北站|宝山路|芷江西路|共和新路|大宁|彭浦|临汾/.test(fullText)) return '静安区';
  if (/长寿路|曹杨|真如|宜川|石泉|甘泉|万里|长征|桃浦/.test(fullText)) return '普陀区';
  if (/新华路|江苏路|华阳|周家桥|天山路|仙霞|虹桥街道|程家桥|北新泾|新泾/.test(fullText)) return '长宁区';
  if (/四川北路|提篮桥|嘉兴路|欧阳路|广中路|凉城|曲阳|北外滩/.test(fullText)) return '虹口区';
  if (/定海|平凉|江浦|控江|延吉|长白|四平|殷行|大桥|五角场|新江湾城|长海/.test(fullText)) return '杨浦区';
  if (/吴淞|友谊路|月浦|罗泾|罗店|顾村|大场|杨行|高境|庙行|淞南/.test(fullText)) return '宝山区';
  if (/南翔|安亭|马陆|江桥|徐行|华亭|菊园|嘉定镇|新成路|真新/.test(fullText)) return '嘉定区';
  if (/泗泾|九亭|佘山|车墩|新桥|洞泾|石湖荡|泖港|叶榭|永丰|岳阳街道|方松|广富林/.test(fullText)) return '松江区';
  if (/赵巷|徐泾|华新|重固|白鹤|朱家角|练塘|金泽|夏阳|盈浦|香花桥/.test(fullText)) return '青浦区';
  if (/南桥|奉城|四团|柘林|庄行|金汇|海湾|青村/.test(fullText)) return '奉贤区';
  if (/朱泾|枫泾|亭林|漕泾|山阳|金山卫|张堰|吕巷/.test(fullText)) return '金山区';
  if (/城桥|堡镇|新河|庙镇|竖新|向化|三星|港沿|中兴|陈家镇|绿华|港西|建设|新村|横沙|长兴/.test(fullText)) return '崇明区';

  return '浦东新区';
}

function isLegitPrimarySchool(name: string): boolean {
  if (EXCLUDE_INSTITUTIONS.some(kw => name.includes(kw))) return false;
  const cleaned = cleanSchoolName(name);
  if (!cleaned || cleaned.length < 4) return false;
  return (
    cleaned.includes('小学') || 
    cleaned.includes('实验学校') || 
    cleaned.includes('附小') || 
    cleaned.includes('外国语学校') || 
    cleaned.includes('第二小学') ||
    cleaned.includes('第一小学') ||
    cleaned.includes('中心小学') ||
    cleaned.includes('九年一贯')
  );
}

function isLegitKindergarten(name: string): boolean {
  if (EXCLUDE_INSTITUTIONS.some(kw => name.includes(kw))) return false;
  const cleaned = cleanSchoolName(name);
  if (!cleaned || cleaned.length < 3) return false;
  return cleaned.includes('幼儿园') || cleaned.includes('托幼') || cleaned.includes('幼儿分园');
}

function isLegitMiddleSchool(name: string): boolean {
  if (EXCLUDE_INSTITUTIONS.some(kw => name.includes(kw))) return false;
  const cleaned = cleanSchoolName(name);
  if (!cleaned || cleaned.length < 3) return false;
  if (cleaned.includes('小学') || cleaned.includes('幼儿园') || cleaned.includes('托幼') || cleaned.includes('大学')) return false;
  return cleaned.includes('初级中学') || cleaned.includes('初中') || cleaned.includes('中学') || cleaned.includes('附中');
}

// Convert an AMap POI to a structured School object
export function convertAmapPoiToSchool(poi: any, stage: SchoolStage): School {
  const cleanedName = cleanSchoolName(poi.name);

  // 1. Check if name matches any existing curated school in SCHOOLS_DATA
  const matchedCurated = SCHOOLS_DATA.find(s => 
    s.name.includes(cleanedName) || cleanedName.includes(s.name) || 
    (s.shortName && cleanedName.includes(s.shortName))
  );

  if (matchedCurated) {
    return {
      ...matchedCurated,
      location: poi.location ? { lng: poi.location.lng, lat: poi.location.lat } : matchedCurated.location
    };
  }

  // 2. Accurately detect district from poi name, address, and adname
  const district = detectShanghaiDistrict(cleanedName, poi.address || '', poi.adname || '');

  const isPrivate = cleanedName.includes('民办') || cleanedName.includes('双语') || cleanedName.includes('国际');
  const cleanShort = cleanedName
    .replace(/^上海市|^上海/, '')
    .replace(/（[^）]+）|\([^)]+\)/g, '')
    .trim();

  return sanitizeSchool({
    id: `amap-school-${poi.id || Math.random().toString(36).substr(2, 9)}`,
    name: cleanedName,
    shortName: cleanShort.length > 10 ? cleanShort.slice(0, 10) : cleanShort,
    stage: stage,
    type: isPrivate ? 'private' : 'public',
    district: district,
    address: poi.address || `${district}地段门牌`,
    establishedYear: 2000,
    tier: stage === 'kindergarten' 
      ? '市一级园' 
      : stage === 'middle'
      ? (cleanedName.includes('实验') || cleanedName.includes('附中') || cleanedName.includes('重点') ? '公办一梯队' : '市重点初中')
      : (cleanedName.includes('实验') || cleanedName.includes('附小')) ? '公办一梯队' : '普通优质公办',
    badgeTag: `高德地点信息 · 非招生资料`,
    tags: ['POI地点', '附近参考', district],
    dataSource: 'amap_poi',
    verificationStatus: 'poi_only',
    canSimulateAdmission: false,
    location: poi.location ? { lng: poi.location.lng, lat: poi.location.lat } : undefined,
    tuition: {
      amount: stage === 'kindergarten' ? 700 : 0,
      unit: stage === 'kindergarten' ? '元/月' : '免费/普惠',
      isFree: stage !== 'kindergarten',
      note: stage !== 'kindergarten' ? '上海市公办九年义务教育免收学费' : '公办示范/一级园普惠托育费'
    },
    enrollment: {
      scope: '本区户籍/房产',
      requirements: ['请查询当年区教育局招生公告'],
      hasFiveYearRule: false,
      admissionDifficulty: '中等',
      oversubscribedHistory: false,
      catchmentAreas: []
    },
    academic: {
      rigorLevel: '均衡高效 (兼顾学术与活动)',
      classSize: 0,
      curriculum: ['国家标准课程'],
      features: ['高德 POI 中未包含课程与招生核验信息']
    },
    downstream: {
      routeType: '体制内中高考',
      targetSchools: [],
      note: '仅用于地图展示，不表示对口或升学关系'
    },
    middleSchoolDetails: stage === 'middle' ? {
      admissionMode: '学籍对口免试直升',
      quotaAllocationScale: '按当年上海新中考政策享有市重点高中名额分配到校与到区指标',
      seniorHighDestinations: {
        tierFourRatio: '达区内市重点高中录取水平',
        eightMajorRatio: '达市重点高中录取水平',
        featuredSeniorHighs: [`${district}重点高中`]
      },
      feederPrimaries: [`${district}对口地段小学`]
    } : undefined,
    reviews: {
      parentRating: 0,
      homeworkDuration: '未核验',
      pros: [],
      cons: ['高德 POI 只能证明地点收录，不能证明学校层级、口碑或招生关系'],
      parentFeedbackSample: '暂无已核验的家长评价。'
    }
  });
}

// Search real nearby schools from AMap around a specific location
export async function searchNearbySchoolsFromAMap(
  location: { lng: number; lat: number },
  radiusMeters: number = 3000
): Promise<{
  primaries: School[];
  kindergartens: School[];
  closestPrimary: School | null;
  closestKindergarten: School | null;
}> {
  try {
    const AMap = await loadAMapScript();
    if (!AMap || !AMap.PlaceSearch) {
      const fallback = analyzeNearbySchools(location, SCHOOLS_DATA);
      return {
        primaries: fallback.nearbyPrimaries.map(p => p.school),
        kindergartens: fallback.nearbyKindergartens.map(k => k.school),
        closestPrimary: fallback.closestPrimary,
        closestKindergarten: fallback.closestKindergarten
      };
    }

    // 1. Search Primary Schools using PlaceSearch
    const primarySearch = new AMap.PlaceSearch({
      city: '上海市',
      type: '141203|141200|141201|140000',
      pageSize: 15,
      pageIndex: 1
    });

    const primaryPois: any[] = await new Promise((resolve) => {
      primarySearch.searchNearBy('小学', [location.lng, location.lat], radiusMeters, (status: string, res: any) => {
        if (status === 'complete' && res.poiList && res.poiList.pois) {
          resolve(res.poiList.pois);
        } else {
          resolve([]);
        }
      });
    });

    // 2. Search Kindergartens using PlaceSearch
    const kinderSearch = new AMap.PlaceSearch({
      city: '上海市',
      type: '141204|141200|140000',
      pageSize: 15,
      pageIndex: 1
    });

    const kinderPois: any[] = await new Promise((resolve) => {
      kinderSearch.searchNearBy('幼儿园', [location.lng, location.lat], Math.min(radiusMeters, 2000), (status: string, res: any) => {
        if (status === 'complete' && res.poiList && res.poiList.pois) {
          resolve(res.poiList.pois);
        } else {
          resolve([]);
        }
      });
    });

    // Filter legit schools
    const validPrimaryPois = primaryPois.filter(p => isLegitPrimarySchool(p.name));
    const validKinderPois = kinderPois.filter(p => isLegitKindergarten(p.name));

    const primaries = validPrimaryPois.map(p => convertAmapPoiToSchool(p, 'primary'));
    const kindergartens = validKinderPois.map(p => convertAmapPoiToSchool(p, 'kindergarten'));

    // Also include curated SCHOOLS_DATA nearby
    const nearbyCurated = SCHOOLS_DATA.filter(s => {
      if (!s.location) return false;
      return getDistanceMeters(location.lat, location.lng, s.location.lat, s.location.lng) <= radiusMeters;
    });

    nearbyCurated.forEach(cs => {
      if (cs.stage === 'primary' && !primaries.some(p => p.name === cs.name || p.id === cs.id)) {
        primaries.push(cs);
      } else if (cs.stage === 'kindergarten' && !kindergartens.some(k => k.name === cs.name || k.id === cs.id)) {
        kindergartens.push(cs);
      }
    });

    // Sort by distance
    primaries.sort((a, b) => {
      const distA = a.location ? getDistanceMeters(location.lat, location.lng, a.location.lat, a.location.lng) : 999999;
      const distB = b.location ? getDistanceMeters(location.lat, location.lng, b.location.lat, b.location.lng) : 999999;
      return distA - distB;
    });

    kindergartens.sort((a, b) => {
      const distA = a.location ? getDistanceMeters(location.lat, location.lng, a.location.lat, a.location.lng) : 999999;
      const distB = b.location ? getDistanceMeters(location.lat, location.lng, b.location.lat, b.location.lng) : 999999;
      return distA - distB;
    });

    return {
      primaries: primaries.slice(0, 8),
      kindergartens: kindergartens.slice(0, 5),
      closestPrimary: primaries[0] || null,
      closestKindergarten: kindergartens[0] || null
    };
  } catch (err) {
    const fallback = analyzeNearbySchools(location, SCHOOLS_DATA);
    return {
      primaries: fallback.nearbyPrimaries.map(p => p.school),
      kindergartens: fallback.nearbyKindergartens.map(k => k.school),
      closestPrimary: fallback.closestPrimary,
      closestKindergarten: fallback.closestKindergarten
    };
  }
}

// Fallback spatial nearest school matching
export function analyzeNearbySchools(location: { lng: number; lat: number }, allSchools: School[] = SCHOOLS_DATA) {
  const primarySchoolsWithDist = allSchools
    .filter(s => s.location && s.stage === 'primary')
    .map(s => {
      const dist = getDistanceMeters(location.lat, location.lng, s.location!.lat, s.location!.lng);
      return {
        school: s,
        distanceMeters: dist,
        walkingMinutes: Math.max(1, Math.round(dist / 75))
      };
    })
    .sort((a, b) => a.distanceMeters - b.distanceMeters);

  const kindergartenWithDist = allSchools
    .filter(s => s.location && s.stage === 'kindergarten')
    .map(s => {
      const dist = getDistanceMeters(location.lat, location.lng, s.location!.lat, s.location!.lng);
      return {
        school: s,
        distanceMeters: dist,
        walkingMinutes: Math.max(1, Math.round(dist / 75))
      };
    })
    .sort((a, b) => a.distanceMeters - b.distanceMeters);

  return {
    closestPrimary: primarySchoolsWithDist[0]?.school || null,
    distanceToPrimary: primarySchoolsWithDist[0]?.distanceMeters || 0,
    walkingMinutesToPrimary: primarySchoolsWithDist[0]?.walkingMinutes || 0,
    nearbyPrimaries: primarySchoolsWithDist.slice(0, 3),
    closestKindergarten: kindergartenWithDist[0]?.school || null,
    distanceToKindergarten: kindergartenWithDist[0]?.distanceMeters || 0,
    walkingMinutesToKindergarten: kindergartenWithDist[0]?.walkingMinutes || 0,
    nearbyKindergartens: kindergartenWithDist.slice(0, 3)
  };
}

// Housing prices are returned only from the normalized catchment projection.
// That projection already removes records without independent source evidence.
export function getCommunityHousingPrice(
  name: string,
  _districtStr: string = '浦东新区',
  _address: string = ''
): HousingPriceInfo | undefined {
  const matchedOfficial = CATCHMENTS_DATA.find(c =>
    c.communityName.includes(name) || name.includes(c.communityName) ||
    c.aliases.some(a => name.includes(a) || a.includes(name))
  );
  return matchedOfficial?.priceInfo;
}
// Search Shanghai POIs using both local curated catchments and live AMap AutoComplete/PlaceSearch
export async function searchShanghaiResidentialPOIs(query: string): Promise<SearchedPOIItem[]> {
  if (!query || !query.trim()) return [];
  const q = query.trim().toLowerCase();

  const results: SearchedPOIItem[] = [];
  const seenNames = new Set<string>();

  // 1. Search locally curated catchment references first. Only records with a
  // verified government source may be presented as official.
  CATCHMENTS_DATA.forEach(c => {
    const matchName = c.communityName.toLowerCase().includes(q);
    const matchAlias = c.aliases.some(a => a.toLowerCase().includes(q));
    const matchStreet = c.streetAddressRange.toLowerCase().includes(q);
    const matchSchool = c.schoolName.toLowerCase().includes(q);

    if (matchName || matchAlias || matchStreet || matchSchool) {
      const matched = SCHOOLS_DATA.find(s => s.id === c.matchedSchoolId);
      let dist = 0;
      let walkMin = 0;
      if (c.location && matched?.location) {
        dist = getDistanceMeters(c.location.lat, c.location.lng, matched.location.lat, matched.location.lng);
        walkMin = Math.max(1, Math.round(dist / 75));
      }

      seenNames.add(c.communityName.split(' ')[0]);
      results.push({
        id: `official-${c.id}`,
        name: c.communityName,
        district: c.district,
        address: `${c.subdistrict} · ${c.neighborhoodCommittee} (${c.streetAddressRange})`,
        location: c.location,
        source: c.verificationStatus === 'verified' ? 'official_catchment' : 'catchment_reference',
        officialCatchment: c,
        matchedSchool: matched,
        closestPrimary: matched,
        distanceToPrimary: dist,
        walkingMinutesToPrimary: walkMin,
        amapMarkerUrl: c.location ? getAmapMarkerUrl(c.location, c.communityName) : undefined,
        amapNavigationUrl: (c.location && matched?.location) ? getAmapNavigationUrl({ ...c.location, name: c.communityName }, { ...matched.location, name: matched.name }) : undefined,
        inferredMiddleSchool: c.matchedMiddleSchool,
        priceInfo: c.priceInfo
        ,relationshipStatus: c.verificationStatus === 'verified' ? 'verified' : 'evidence_missing'
        ,evidenceLevel: c.verificationStatus === 'verified' ? 'official' : 'legacy'
        ,canSimulateAdmission: c.canSimulateAdmission === true && c.verificationStatus === 'verified'
      });
    }
  });

  // 2. Search local schools
  SCHOOLS_DATA.forEach(s => {
    if (s.name.toLowerCase().includes(q) || s.shortName.toLowerCase().includes(q)) {
      results.push({
        id: `school-${s.id}`,
        name: s.name,
        district: s.district,
        address: s.address,
        location: s.location,
        source: 'school',
        matchedSchool: s,
        relationshipStatus: 'school_profile_only',
        evidenceLevel: s.dataSource === 'official' ? 'official' : 'legacy',
        canSimulateAdmission: false,
        amapMarkerUrl: s.location ? getAmapMarkerUrl(s.location, s.name) : undefined
      });
    }
  });

  // 3. Search Real AMap AutoComplete & PlaceSearch (Live residential POIs across all 16 districts)
  try {
    const AMap = await loadAMapScript();
    if (AMap) {
      const livePois: any[] = [];

      // A. AMap AutoComplete
      if (AMap.AutoComplete) {
        const auto = new AMap.AutoComplete({
          city: '上海市',
          citylimit: true,
          datatype: 'all',
        });
        const tips: any[] = await new Promise((resolve) => {
          auto.search(q, (status: string, res: any) => {
            if (status === 'complete' && res.tips) resolve(res.tips);
            else resolve([]);
          });
        });
        tips.forEach(t => {
          if (t.name) livePois.push({ ...t, sourceKind: 'autocomplete' });
        });
      }

      // B. AMap PlaceSearch for residential compounds
      if (AMap.PlaceSearch) {
        const placeSearcher = new AMap.PlaceSearch({
          city: '上海市',
          citylimit: true,
          type: '120300|120301|120302|120303|120304', // 商务住宅/住宅区/住宅小区/别墅
          pageSize: 15,
          pageIndex: 1
        });
        const pois: any[] = await new Promise((resolve) => {
          placeSearcher.search(q, (status: string, res: any) => {
            if (status === 'complete' && res.poiList && res.poiList.pois) resolve(res.poiList.pois);
            else resolve([]);
          });
        });
        pois.forEach(p => {
          if (p.name) livePois.push({ ...p, sourceKind: 'placesearch' });
        });
      }

      for (const tip of livePois) {
        if (!tip.name || seenNames.has(tip.name)) continue;

        const districtStr = detectShanghaiDistrict(tip.name, tip.address || '', tip.district || tip.adname || '');

        let loc = tip.location ? { 
          lng: typeof tip.location.lng === 'number' ? tip.location.lng : parseFloat(tip.location.lng), 
          lat: typeof tip.location.lat === 'number' ? tip.location.lat : parseFloat(tip.location.lat) 
        } : undefined;

        if (!loc && AMap.Geocoder) {
          try {
            const geocoder = new AMap.Geocoder({ city: '上海市' });
            loc = await new Promise((resGeo) => {
              geocoder.getLocation(districtStr + (tip.address || '') + tip.name, (status: string, geoRes: any) => {
                if (status === 'complete' && geoRes.geocodes?.[0]?.location) {
                  resGeo({
                    lng: geoRes.geocodes[0].location.lng,
                    lat: geoRes.geocodes[0].location.lat
                  });
                } else {
                  resGeo(undefined);
                }
              });
            });
          } catch {}
        }

        // Spatial matching from schools
        let dist = 0;
        let walkMin = 0;
        let closestPrimary: School | undefined = undefined;

        if (loc) {
          const localMatch = analyzeNearbySchools(loc, SCHOOLS_DATA);
          closestPrimary = localMatch.closestPrimary || undefined;
          dist = localMatch.distanceToPrimary;
          walkMin = localMatch.walkingMinutesToPrimary;
        }

        seenNames.add(tip.name);

        const markerUrl = loc ? getAmapMarkerUrl(loc, tip.name) : undefined;
        const navUrl = (loc && closestPrimary?.location) ? getAmapNavigationUrl(
          { ...loc, name: tip.name },
          { ...closestPrimary.location, name: closestPrimary.name }
        ) : undefined;

        results.push({
          id: `amap-${tip.id || Math.random().toString(36).substr(2, 9)}`,
          name: tip.name,
          district: districtStr,
          address: `${tip.district || tip.adname || districtStr} ${tip.address || ''}`.trim(),
          location: loc,
          source: 'amap_poi',
          closestPrimary: closestPrimary,
          distanceToPrimary: dist,
          walkingMinutesToPrimary: walkMin,
          amapMarkerUrl: markerUrl,
          amapNavigationUrl: navUrl,
          relationshipStatus: 'nearby_only',
          evidenceLevel: 'third_party',
          canSimulateAdmission: false,
          priceInfo: getCommunityHousingPrice(tip.name, districtStr, tip.address)
        });

        if (results.length >= 35) break;
      }
    }
  } catch (err) {
    // Graceful fallback
  }

  return results;
}

/**
 * Search real Shanghai schools from AMap PlaceSearch by keyword or district
 */
export async function searchShanghaiSchoolsFromAMap(options: {
  keyword?: string;
  district?: string;
  stage?: SchoolStage | 'all';
  pageSize?: number;
  pageIndex?: number;
}): Promise<School[]> {
  try {
    const AMap = await loadAMapScript();
    if (!AMap || !AMap.PlaceSearch) return [];

    const isKinder = options.stage === 'kindergarten';
    const isPrimary = options.stage === 'primary';
    const isMiddle = options.stage === 'middle';
    const typeCode = isKinder ? '141204' : (isPrimary ? '141200|141201' : isMiddle ? '141202|141200' : '141200|141201|141202|141204');

    const searcher = new AMap.PlaceSearch({
      city: '上海市',
      citylimit: true,
      type: typeCode,
      pageSize: options.pageSize || 40,
      pageIndex: options.pageIndex || 1
    });

    const dist = (options.district && options.district !== '全部区域') ? options.district : '';
    let q = options.keyword?.trim() || '';

    if (!q) {
      if (dist) {
        q = `${dist} ${isKinder ? '幼儿园' : (isPrimary ? '小学' : isMiddle ? '初中' : '小学 初中 幼儿园')}`;
      } else {
        q = isKinder ? '上海市 幼儿园' : (isPrimary ? '上海市 小学' : isMiddle ? '上海市 初中' : '上海市 学校');
      }
    } else {
      if (dist && !q.includes(dist)) {
        q = `${dist} ${q}`;
      }
    }

    const pois: any[] = await new Promise((resolve) => {
      searcher.search(q, (status: string, res: any) => {
        if (status === 'complete' && res.poiList && res.poiList.pois) {
          resolve(res.poiList.pois);
        } else {
          resolve([]);
        }
      });
    });

    const schools: School[] = [];
    const seenNames = new Set<string>();

    for (const poi of pois) {
      const cleaned = cleanSchoolName(poi.name);
      if (!cleaned || seenNames.has(cleaned)) continue;

      const isPrimarySchool = isLegitPrimarySchool(cleaned);
      const isKinderSchool = isLegitKindergarten(cleaned);
      const isMiddleSchool = isLegitMiddleSchool(cleaned);

      if (!isPrimarySchool && !isKinderSchool && !isMiddleSchool) continue;
      if (isKinder && !isKinderSchool) continue;
      if (isPrimary && !isPrimarySchool) continue;
      if (isMiddle && !isMiddleSchool) continue;

      const detectedDistrict = detectShanghaiDistrict(cleaned, poi.address || '', poi.adname || '');
      if (dist && detectedDistrict !== dist) {
        continue;
      }

      seenNames.add(cleaned);
      const schoolStage: SchoolStage = isKinderSchool ? 'kindergarten' : isMiddleSchool ? 'middle' : 'primary';
      const converted = convertAmapPoiToSchool(poi, schoolStage);
      schools.push(converted);
    }

    return schools;
  } catch (err) {
    console.error('searchShanghaiSchoolsFromAMap error:', err);
    return [];
  }
}

/**
 * Search live schools and kindergartens in the current map viewport
 */
export async function searchSchoolsInViewportFromAMap(options: {
  center: { lng: number; lat: number };
  radiusMeters?: number;
  stage: SchoolStage | 'all';
  pageSize?: number;
}): Promise<School[]> {
  try {
    const AMap = await loadAMapScript();
    if (!AMap || !AMap.PlaceSearch) return [];

    const radius = options.radiusMeters || 3500;
    const stage = options.stage;
    const results: School[] = [];
    const seenNames = new Set<string>();

    // 1. Search kindergartens
    if (stage === 'kindergarten' || stage === 'all') {
      const kinderSearcher = new AMap.PlaceSearch({
        city: '上海市',
        type: '141204|141200|140000',
        pageSize: options.pageSize || 35,
        pageIndex: 1
      });

      const kinderPois: any[] = await new Promise((resolve) => {
        kinderSearcher.searchNearBy('幼儿园', [options.center.lng, options.center.lat], radius, (status: string, res: any) => {
          if (status === 'complete' && res.poiList && res.poiList.pois) {
            resolve(res.poiList.pois);
          } else {
            resolve([]);
          }
        });
      });

      for (const poi of kinderPois) {
        const cleaned = cleanSchoolName(poi.name);
        if (!cleaned || seenNames.has(cleaned) || !isLegitKindergarten(cleaned)) continue;
        seenNames.add(cleaned);
        results.push(convertAmapPoiToSchool(poi, 'kindergarten'));
      }
    }

    // 2. Search primary schools
    if (stage === 'primary' || stage === 'all') {
      const primarySearcher = new AMap.PlaceSearch({
        city: '上海市',
        type: '141203|141200|141201|140000',
        pageSize: options.pageSize || 35,
        pageIndex: 1
      });

      const primaryPois: any[] = await new Promise((resolve) => {
        primarySearcher.searchNearBy('小学', [options.center.lng, options.center.lat], radius, (status: string, res: any) => {
          if (status === 'complete' && res.poiList && res.poiList.pois) {
            resolve(res.poiList.pois);
          } else {
            resolve([]);
          }
        });
      });

      for (const poi of primaryPois) {
        const cleaned = cleanSchoolName(poi.name);
        if (!cleaned || seenNames.has(cleaned) || !isLegitPrimarySchool(cleaned)) continue;
        seenNames.add(cleaned);
        results.push(convertAmapPoiToSchool(poi, 'primary'));
      }
    }

    // 3. Search middle schools
    if (stage === 'middle' || stage === 'all') {
      const middleSearcher = new AMap.PlaceSearch({
        city: '上海市',
        type: '141202|141200|141201|140000',
        pageSize: options.pageSize || 35,
        pageIndex: 1
      });

      const middlePois: any[] = await new Promise((resolve) => {
        middleSearcher.searchNearBy('初中', [options.center.lng, options.center.lat], radius, (status: string, res: any) => {
          if (status === 'complete' && res.poiList && res.poiList.pois) {
            resolve(res.poiList.pois);
          } else {
            resolve([]);
          }
        });
      });

      for (const poi of middlePois) {
        const cleaned = cleanSchoolName(poi.name);
        if (!cleaned || seenNames.has(cleaned) || !isLegitMiddleSchool(cleaned)) continue;
        seenNames.add(cleaned);
        results.push(convertAmapPoiToSchool(poi, 'middle'));
      }
    }

    return results;
  } catch (err) {
    console.error('searchSchoolsInViewportFromAMap error:', err);
    return [];
  }
}
