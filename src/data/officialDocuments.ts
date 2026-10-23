export interface OfficialDocumentDiscovery {
  district: string;
  admissionYear: number;
  documentType: 'primary_catchment' | 'catchment_index' | 'implementation_policy';
  title: string;
  url: string;
  publishedAt: string;
  discoveredAt: string;
  reviewStatus: 'discovered';
  humanVerified: false;
}

export const OFFICIAL_DOCUMENT_DISCOVERIES: OfficialDocumentDiscovery[] = [
  ['徐汇区', 'primary_catchment', '2026年徐汇区公办小学招生划片范围', 'https://www.xuhui.gov.cn/xxgk/portal/article/detail?id=8a4c0c069a97abda019d674253711bbe'],
  ['浦东新区', 'primary_catchment', '2026年浦东新区小学招生地段公示', 'https://www.pudong.gov.cn/zwgk/ywjy/2026/97/354039.html'],
  ['闵行区', 'primary_catchment', '2026年闵行区公办小学招生划片范围', 'https://zwgk.shmh.gov.cn/mh-xxgk-cms/website/mh_xxgk/xxgk_jyj_ywxx_8_02/content/7641043b-4e2a-472b-94aa-c638bbd8769e.htm'],
  ['普陀区', 'primary_catchment', '2026年普陀区公办小学招生地段范围', 'https://www.shpt.gov.cn/zhengwu/ywjyzs-jyjrxbkyzs/2026/97/203088.html'],
  ['松江区', 'primary_catchment', '2026年松江区公办小学对口范围说明', 'https://www.songjiang.gov.cn/shsj_main/6358db43-a847-4442-b46d-f14c1429f9d5/525ff720-a77e-4aa2-9a8f-9a60991f7274/2026%E5%B9%B4%E6%9D%BE%E6%B1%9F%E5%8C%BA%E5%85%AC%E5%8A%9E%E5%B0%8F%E5%AD%A6%E5%AF%B9%E5%8F%A3%E8%8C%83%E5%9B%B4%E8%AF%B4%E6%98%8E.pdf'],
  ['静安区', 'implementation_policy', '上海市静安区教育局关于2026年本区义务教育阶段学校招生入学工作的实施意见', 'https://www.jingan.gov.cn/govxxgk/JA4/2026-04-07/1fdd8feb-037e-4af4-af71-9cf7b099cd64.html?type=2'],
  ['虹口区', 'implementation_policy', '虹口区教育局关于2026年本区义务教育阶段学校招生入学工作的实施意见', 'https://www.shhk.gov.cn/hkjy/zfxx/001023/20260407/83609e9b-c4b9-4d87-80ca-73d4bf0fe927.html'],
  ['青浦区', 'implementation_policy', '2026年青浦区义务教育阶段学校招生入学工作实施方案', 'https://www.shqp.gov.cn/edu/eduzwgk/zsgz/ywjy/20260407/1368272.html'],
  ['奉贤区', 'implementation_policy', '2026年奉贤区义务教育阶段学校招生入学工作的实施意见及问答', 'https://www.fengxian.gov.cn/jysx/20260407/24af847e7a704454b7c28e4c3be2197b.html']
  ,['长宁区', 'primary_catchment', '2026年长宁区公办小学对口入学地域分配表', 'https://zwgk.shcn.gov.cn/xxgk/ywjyzs-jyjzsgl/2026/97/81222.html']
  ,['宝山区', 'primary_catchment', '2026年宝山区义务教育阶段学校校区范围与招生计划（小学）', 'https://xxgk.shbsq.gov.cn/article.html?infoid=e4efe257-2d80-4074-8581-c665667eeed9']
  ,['崇明区', 'primary_catchment', '崇明区2026年公办小学招生划区范围', 'https://www.shcm.gov.cn/govxxgk/qjyj/2026-04-07/7f26890a-a164-475a-bbf3-97570761c204.html']
  ,['杨浦区', 'primary_catchment', '2026年杨浦区一年级新生招生范围', 'https://www.shyp.gov.cn/shypq/yqyw-wb-jyjzl-ypzs-xxzs/20260407/503032/29d561cacf3545a199c2018ab77e021a.pdf']
  ,['黄浦区', 'catchment_index', '黄浦区2026学年度小学招生通告（含小学招生对口居委）', 'https://www.shanghai.gov.cn/hpqywjy/20260413/0dc64b9dab0349c9a180270f74cc9203.html']
  ,['嘉定区', 'catchment_index', '上海市嘉定区教育局关于2026年本区义务教育阶段学校招生入学工作具体事项的公告（含划片附件入口）', 'https://www.shanghai.gov.cn/jdqywjy/20260410/af46b53b63b34533b4954a9a58e5dc8a.html']
  ,['金山区', 'catchment_index', '2026年金山区义务教育阶段学校招生入学工作实施意见（含招生范围文件入口）', 'https://www.shanghai.gov.cn/jsqywjy/20260413/76185ef8dbbe47489b3b3c2ed4c7b4ca.html']
].map(([district, documentType, title, url]): OfficialDocumentDiscovery => ({
  district,
  admissionYear: 2026,
  documentType: documentType as OfficialDocumentDiscovery['documentType'],
  title,
  url,
  publishedAt: ({ 黄浦区: '2026-04-13', 嘉定区: '2026-04-10', 金山区: '2026-04-13' } as Record<string, string>)[district] || '2026-04-07',
  discoveredAt: '2026-09-11',
  reviewStatus: 'discovered',
  humanVerified: false
}));
