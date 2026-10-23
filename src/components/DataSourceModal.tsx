import React from 'react';
import { 
  X, 
  ShieldCheck, 
  FileText, 
  ExternalLink, 
  CheckCircle2, 
  Building, 
  Scale, 
  AlertCircle,
  Globe,
  Phone,
  MapPin
} from 'lucide-react';
import { DISTRICT_OFFICIAL_PORTALS, CITY_OFFICIAL_PORTALS } from '../data/officialPortals';
import { CATCHMENTS_DATA, QUARANTINED_CATCHMENTS } from '../data/catchments';
import { DATA_MANIFEST } from '../data/dataManifest';

interface DataSourceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DataSourceModal: React.FC<DataSourceModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 pb-4 border-b border-slate-100 flex items-start justify-between bg-gradient-to-r from-blue-50 to-indigo-50/50">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">
                数据来源、核验状态与使用边界
              </h3>
              <p className="text-xs text-slate-500">
                版本 {DATA_MANIFEST.version} · 官方关系与高德地理信息分层管理
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-600 rounded-full hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-5 text-xs sm:text-sm text-slate-700">
          <div className="bg-amber-50 p-3.5 rounded-2xl border border-amber-200 text-xs leading-relaxed text-amber-950">
            当前可展示 {CATCHMENTS_DATA.length} 条历史划片资料，{QUARANTINED_CATCHMENTS.length} 条结构异常关联已隔离。未绑定当年区教育局原文的记录不标记为已核验，不用于录取概率预测。
          </div>
          
          {/* Section 1 */}
          <div className="space-y-2">
            <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-blue-600" />
              1. 公办学区对口划片与对口初中来源
            </div>
            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 leading-relaxed text-xs space-y-1.5">
              <p>
                <strong>目标证据：</strong>每一条小区—学校关系都应绑定当年区教育局或学校招生原文、发布日期和适用年份，包括：
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>《本区义务教育阶段学校招生入学工作实施细则》</li>
                <li><strong>《公办小学招生地段居委划片公示表》</strong>（含对口居委、小区楼盘及对应门牌号段）</li>
                <li>《公办初中招生地段公示表》（明确划片或电脑派位对口关系）</li>
              </ul>
              <p className="text-slate-500 pt-1">
                查证路径：各区人民政府官网 & 各区教育局政务公开专栏 & “上海市义务教育入学报名系统”。
              </p>
            </div>
          </div>

          {/* Section 2 */}
          <div className="space-y-2">
            <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
              <Building className="w-4 h-4 text-emerald-600" />
              2. 五年一户审查与超额预警名单来源
            </div>
            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 leading-relaxed text-xs space-y-1.5">
              <p>
                <strong>生源摸底通告依据：</strong>各区教育局在每年 12 月至次年 3 月根据本区户籍适龄儿童摸底统计发布的：
              </p>
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li>《公办小学适龄生源摸底及招生日程超额预警名单公示》</li>
                <li>各区教育局发布的《公办小学接纳生源排序细则》（包含“人户一致入户年限排位截点”记录）</li>
              </ul>
            </div>
          </div>

          {/* Section 3 */}
          <div className="space-y-2">
            <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
              <Scale className="w-4 h-4 text-amber-600" />
              3. 学费标准与收费明细来源
            </div>
            <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200 leading-relaxed text-xs space-y-1.5">
              <ul className="list-disc pl-5 space-y-1 text-slate-600">
                <li><strong>公办小学/初中：</strong>执行国家九年义务教育规定，免收学费与杂费；</li>
                <li><strong>公办市示范/一级幼儿园：</strong>严格按照上海市发展改革委、市教委核定之保育教育费统一收费标准；</li>
                <li><strong>民办学校/双语国际学校：</strong>依据上海市发改委物价局正式核批文件及学校当年度招生简章公示之收费标准。</li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div className="space-y-2">
            <div className="font-bold text-slate-900 text-sm flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-purple-600" />
              4. 严正声明与使用须知
            </div>
            <p className="text-xs text-slate-500 leading-relaxed bg-amber-50 p-3 rounded-xl border border-amber-200 text-amber-900">
              高德只提供 POI、坐标、地理编码、距离和路线；不提供划片、顺位、“五年一户”或录取结论。房价只展示有明确来源和更新日期的历史参考，未知值留空。
            </p>
          </div>

          {/* Section 5: Official Municipal and 16 District Bureau Portals Directory */}
          <div className="space-y-3 pt-2 border-t border-slate-200">
            <div className="font-bold text-slate-900 text-sm flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-blue-600" />
                上海市教委及 16 个区教育局官方招生政务公开网址
              </span>
              <span className="text-[11px] font-normal text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                官方门户入口
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              上海市义务教育免试就近入学、公办地段划片及民办摇号规程由市教委统领，各区教育局具体制定居委划片公示表。点击以下官方网址可直达官方页面核验查证：
            </p>

            {/* City Portals */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {CITY_OFFICIAL_PORTALS.map((portal, idx) => (
                <a
                  key={idx}
                  href={portal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-2xl border transition-all flex items-start justify-between gap-2 group ${
                    idx === 0
                      ? 'bg-blue-50/60 border-blue-200/80 hover:bg-blue-50'
                      : 'bg-slate-50 border-slate-200 hover:bg-white hover:border-blue-300'
                  }`}
                >
                  <div>
                    <div className={`font-bold text-xs sm:text-sm flex items-center gap-1 ${
                      idx === 0 ? 'text-blue-900 group-hover:text-blue-700' : 'text-slate-900 group-hover:text-blue-600'
                    }`}>
                      {portal.title}
                    </div>
                    <div className="text-[11px] text-blue-700/80 mt-0.5 font-mono">
                      {portal.url}
                    </div>
                    <div className="text-xs text-slate-600 mt-1 leading-relaxed">
                      {portal.description}
                    </div>
                  </div>
                  <ExternalLink className={`w-4 h-4 shrink-0 mt-0.5 ${
                    idx === 0 ? 'text-blue-500 group-hover:text-blue-700' : 'text-slate-400 group-hover:text-blue-600'
                  }`} />
                </a>
              ))}
            </div>

            {/* 16 Districts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
              {Object.values(DISTRICT_OFFICIAL_PORTALS).map((portal) => (
                <div
                  key={portal.district}
                  className="p-3 bg-slate-50 hover:bg-white border border-slate-200 hover:border-blue-300 rounded-2xl transition-all flex flex-col justify-between group space-y-2 shadow-2xs"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="font-bold text-xs text-slate-900 group-hover:text-blue-600">
                          {portal.district} · {portal.bureauName}
                        </span>
                        <span className="text-[10px] bg-amber-50 text-amber-700 px-1.5 py-0.2 rounded border border-amber-100">
                          规则待核验
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-600 bg-white/80 p-2 rounded-xl border border-slate-100/80 leading-relaxed">
                    <span className="font-medium text-slate-700">目标文件：</span>{portal.catchmentDocTitle}
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-1 border-t border-slate-100/80">
                    <a
                      href={portal.portalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-medium text-slate-700 hover:text-blue-600 flex items-center gap-1 bg-white px-2.5 py-1 rounded-lg border border-slate-200 hover:border-blue-300 transition-colors"
                    >
                      <span>政府官网</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                    <a
                      href={portal.gazetteSearchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[11px] font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 bg-blue-50 hover:bg-blue-100/80 px-2.5 py-1 rounded-lg border border-blue-200 transition-colors"
                    >
                      <span>进入官网查找</span>
                      <ExternalLink className="w-2.5 h-2.5" />
                    </a>
                  </div>

                  <div className="text-[10px] text-slate-400 pt-0.5">
                    咨询电话和办公地址请以政府官网当日公布为准
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-5 py-2 rounded-xl"
          >
            我已知晓
          </button>
        </div>
      </div>
    </div>
  );
};
