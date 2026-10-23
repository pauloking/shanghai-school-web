# 上海择校指南 · 网页版

上海学校目录、招生资料与家庭择校信息整理工具。基于 React 19、TypeScript、Vite 6 和 Tailwind CSS 3，数据随前端源码一起构建。

**当前为开发预览版 `2026.09.11-governance-alpha.3`，不是已完成官方事实核验的招生查询服务。** 可以运行、构建和研究代码；构建成功不代表学校信息准确或具备正式发布条件。此仓库独立来自网页版，不包含微信小程序或其较新数据发布包，也不会自动与小程序同步。

## 阅读导航

- [启动与配置](#快速运行)
- [构建与检查](#构建与检查)
- [网页版当前限制](#当前项目限制)
- [官方资料：市级与 16 区入口](#官方资料导航来自小程序开发积累)
- [完整来源台账](docs/official-sources.md)

## 快速运行

使用 Node.js 22 和 npm（CI 使用 Node.js 22；本次本地检查环境为 Node.js 25.6.1 / npm 11.9.0）。

```bash
git clone https://github.com/pauloking/shanghai-school-web.git
cd shanghai-school-web
npm ci
cp .env.example .env.local
npm run dev
```

私有仓库需先通过 GitHub 账号取得访问权限。打开终端显示的地址，默认端口为 `5173`。当前开发服务器配置 `host: true`，会监听网络接口；仅需本机访问可用 `npm run dev -- --host 127.0.0.1`。

**地图配置可以留空。** 无 Key 不影响构建及本地目录数据的使用，但地图、POI 搜索、地理编码及依赖它们的流程不可用，相关界面可能出现未配置提示。

## 需要做的配置

| 项目 | 当前设置与操作 |
| --- | --- |
| 地图（可选，暂不接入） | `.env.local` 中的 `VITE_AMAP_WEB_KEY`、`VITE_AMAP_SECURITY_CODE` 默认为空；未来启用时在部署平台设置同名变量并重新构建。代码保留现有地图集成，本次未联调。 |
| 数据 | 数据文件在 `src/data/`，版本与日期在 `src/data/dataManifest.ts`；更新数据、证据和版本后执行校验，不会在线自动刷新。 |
| 静态托管 | 构建命令 `npm ci && npm run ci`，发布目录 `dist/`，默认部署在域名根路径。无需数据库或云函数。 |
| 子路径托管 | 如部署到 `/shanghai-school-web/`，构建时使用 `npm run build -- --base=/shanghai-school-web/`，或在 `vite.config.ts` 配置对应 `base`。 |
| GitHub Actions | 仓库允许 Actions 后，推送及 PR 自动执行数据校验、类型检查与构建；只需代码读取权限，不需要地图或云服务密钥。 |
| 正式数据发布 | 必须另行通过 `npm run validate:prod`，当前版本预期会被阻止；不能以普通 CI 通过代替此门禁。 |

Vite 的 `VITE_*` 变量会进入浏览器产物，不能存放服务端私密凭证。未来接入地图时需要处理域名限制、配额和安全方案；此仓库仅保留空配置示例。`.env.local`、其他真实环境文件、依赖目录和构建产物均不提交。

本次仅上传源码并配置构建检查，**未开通 GitHub Pages、未发布网站、未部署后端**。仓库私有与网站访问权限是两件事，后续部署时需单独设置访问控制。

## 构建与检查

```bash
npm run validate:data   # 数据结构、隔离规则、核验状态检查
npm run ci              # 上述校验 + TypeScript + Vite 构建
npm run build           # 仅类型检查和构建，不检查正式数据发布资格
npm run preview         # 本机预览 dist，非生产服务器
npm run validate:prod   # 正式数据门禁：当前应返回 RELEASE_BLOCKED，退出码 2
```

验证脚本使用 `/tmp` 和 POSIX 环境变量语法，适用于 macOS/Linux；Windows 建议在 WSL 中运行。Python 脚本不属于正常安装或构建步骤。

## 当前项目限制

以下数字来自 2026-10-23 对仓库现有数据执行 `npm run ci` 的实际结果：

| 指标 | 结果 |
| --- | --- |
| 学校目录 | 289 所，已逐条核验 0 所 |
| 原始划片记录 | 50 条：44 条通过结构校验、6 条隔离 |
| 已核验招生关系 | 0 条；44 条可见记录仍缺官方证据 |
| 没有可见划片记录的区 | 宝山区、嘉定区、青浦区 |
| 已核验房价 / FAQ | 均为 0 |
| 可用于录取条件核对的划片记录 | 0 |
| 已发现官方文件链接 | 16 条、覆盖 16 区；发现链接不等于核验事实 |

- **目录覆盖不等于完整收录或招生资格确认。** 学校名称、地址与坐标也需要复核；资料面向特定年度，不保证当前仍有效。
- 未核验学校的性质、费用、梯队、评分、招生等事实由现有数据净化逻辑隐藏或标记待核验；相关对比、推荐、条件核对可能为空或不可用。这些限制应保留。
- 原始数据及历史生成脚本仍含编辑性评价、旧字段和推定值；源码中的字段不能直接作为官方事实。结构校验不是逐条原文核验，不检验链接当前可访问性，也不能证明所有页面都无误。
- 没有实时招生、房价或录取概率数据；不提供录取保证。智能顾问是前端规则和现有数据组成的界面，未接入大模型服务。
- 收藏、对比、笔记、讨论及点赞使用浏览器 `localStorage`。没有服务端账号、跨设备同步、备份或真正的多人社区；清理浏览器数据或更换域名可能导致记录不可见。预置讨论不是实际用户证言。
- 官方网页由第三方维护，可能失效或调整；本次没有逐一联网复核来源。地图未配置或网络不通时，不保证依赖地图的流程可用。
- 本次完成数据校验、类型检查和构建验证，未进行全浏览器、移动端或地图端到端验收。
- 源码上传不代表获得第三方材料的再分发授权；当前未附加开源许可证。

完整核验原则见 [DATA_GOVERNANCE.md](DATA_GOVERNANCE.md)。

## 官方资料导航：来自小程序开发积累

整理于 **2026-10-23**，依据小程序 Git `b51288a`、数据发布 `2026.09.22-preview.13` 及研究来源台账。这里只迁入资料导航，**没有把小程序数据、校区映射、归档阅读器或核验结果迁入网页版**；上方“当前项目限制”的网页版数据仍然有效。

### 1. 市级政策、办理与机构目录

| 用途 | 官方入口 | 使用边界 |
| --- | --- | --- |
| 2026 义务教育总政策 | [上海市教委实施意见](https://edu.sh.gov.cn/xxgk2_zdgz_rxgkyzs_02/20260326/ac9f198654cf469da99e1830acf3ce69.html) | 市级框架；具体地段、材料与办理要求继续查区级文件。 |
| 2026 幼儿入园总政策 | [市教委学前教育阶段适龄幼儿入园通知](https://www.shanghai.gov.cn/shsxqjy/20260603/e16cddbd68094ca2b6366bf070cf78f0.html) | 信息登记、报名验证和录取通知是不同环节，不能互相替代。 |
| 义务教育办理 | [上海市义务教育入学报名系统](https://shrxbm.edu.sh.gov.cn/) | 实际开放时间与可办理事项以系统当年度公告为准，本项目不代报名。 |
| 政务办理 | [上海一网通办](https://zwdt.sh.gov.cn/) | 按当年度入学／入园专栏办理，不把历史归档当作正在开放的入口。 |
| 幼儿园机构身份核对 | [上海市学前教育机构一览](https://age06.edu.sh.cn/age06web/home/SearchList.html?channel=home&sch=&type=0) | 用于园名、园部、地址等目录核对；机构目录不是招生范围表，早教中心也不能直接当作幼儿园。 |

上述两份市级政策与机构目录入口在整理当天已成功读取页面；这不代表全部链接、附件或报名流程都经过实时验收。2026 招生资料与 2025 学年统计均是指定年度材料，不自动适用于下一年。

### 2. 上海 16 区资料入口

每区选取小学与幼儿园各一个已收集入口。表中保留原文件名：有的是范围表，有的是包含附件的实施意见或办理指南，**不能一律理解为精确对口表**。更多招生计划、人户分离细则、初中材料、学校名录、乡镇公告及附件见后面的完整台账。


| 区 | 小学范围／相关招生文件 | 幼儿园范围／相关招生文件 |
| --- | --- | --- |
| 黄浦区 | [黄浦区2026学年度小学招生通告（含小学招生对口居委）](https://www.shanghai.gov.cn/hpqywjy/20260413/0dc64b9dab0349c9a180270f74cc9203.html) | [2026年黄浦区幼儿园招生入园工作实施意见](https://www.shanghai.gov.cn/hpqxqjy/20260420/32fe4193d679456f94194479ba4372a4.html) |
| 徐汇区 | [2026年徐汇区公办小学招生划片范围](https://www.xuhui.gov.cn/xxgk/portal/article/detail?id=8a4c0c069a97abda019d674253711bbe) | [关于印发《2026年徐汇区幼儿园招生工作方案》的通知](https://www.shanghai.gov.cn/xhqxqjy/20260421/c83b6efb6b4c43cb9071399f40215383.html) |
| 长宁区 | [2026年长宁区公办小学对口入学地域分配表](https://zwgk.shcn.gov.cn/xxgk/ywjyzs-jyjzsgl/2026/97/81222.html) | [2026年长宁区幼儿园招生工作实施方案及招生信息](https://zwgk.shcn.gov.cn/xxgk/zsrx-jyxx/2026/105/81305.html) |
| 静安区 | [2026年静安区公办小学招生划片范围](https://shrxbm.edu.sh.gov.cn/zszc/policy/310106/zszchtml_201601688.html) | [上海市静安区教育局关于印发《2026年静安区幼儿园招生入园工作实施意见》的通知](https://www.shanghai.gov.cn/jaqxqjy/20260701/207fbeda3dc044c19975b97285850c56.html) |
| 普陀区 | [2026年普陀区公办小学招生地段范围](https://www.shpt.gov.cn/zhengwu/ywjyzs-jyjrxbkyzs/2026/97/203088.html) | [2026年普陀区幼儿园招生范围](https://www.shanghai.gov.cn/ptqxqjy/20260627/70fc9649e20648a69d821b8d65f1f54e.html) |
| 虹口区 | [虹口区教育局关于2026年本区义务教育阶段学校招生入学工作的实施意见](https://www.shhk.gov.cn/hkjy/zfxx/001023/20260407/83609e9b-c4b9-4d87-80ca-73d4bf0fe927.html) | [虹口区教育局关于印发《虹口区教育局关于2026年虹口区学前教育阶段适龄幼儿入园工作的实施意见》的通知](https://www.shanghai.gov.cn/hkqxqjy/20260617/7614de05cac949f5b0311f4928f5e180.html) |
| 杨浦区 | [2026年杨浦区一年级新生招生范围](https://www.shyp.gov.cn/shypq/yqyw-wb-jyjzl-ypzs-xxzs/20260407/503032/29d561cacf3545a199c2018ab77e021a.pdf) | [2026年杨浦区学前教育阶段适龄幼儿入园工作的实施方案](https://www.shanghai.gov.cn/ypqxqjy/20260514/a22a976d1ca9490585dd4ba78b4504fa.html) |
| 浦东新区 | [2026年浦东新区小学招生地段公示](https://www.pudong.gov.cn/zwgk/ywjy/2026/97/354039.html) | [2026年浦东新区各级各类幼儿园招生地段公示信息](https://www.pudong.gov.cn/zwgk/xqjy-jyjzdgz/2026/105/354451.html) |
| 闵行区 | [2026年闵行区公办小学招生划片范围](https://zwgk.shmh.gov.cn/mh-xxgk-cms/website/mh_xxgk/xxgk_jyj_ywxx_8_02/content/7641043b-4e2a-472b-94aa-c638bbd8769e.htm) | [2026年闵行区幼儿园招生范围信息表](https://zwgk.shmh.gov.cn/mh-xxgk-cms/website/mh_xxgk/xxgk_jyj_ywxx_8_01/content/ffb6edd6-b224-44fc-80fe-fa1ff60cb844.htm) |
| 宝山区 | [2026年宝山区义务教育阶段学校校区范围与招生计划（小学）](https://xxgk.shbsq.gov.cn/article.html?infoid=e4efe257-2d80-4074-8581-c665667eeed9) | [2026年宝山区幼儿园招生范围](https://xxgk.shbsq.gov.cn/article.html?infoid=cc73feb5-3385-4c23-88a9-6135e5a22515) |
| 嘉定区 | [上海市嘉定区教育局关于2026年本区义务教育阶段学校招生入学工作具体事项的公告（含划片附件入口）](https://www.shanghai.gov.cn/jdqywjy/20260410/af46b53b63b34533b4954a9a58e5dc8a.html) | [上海市嘉定区教育局关于2026年嘉定区幼儿园招生入园工作的实施意见](https://www.shanghai.gov.cn/jdqxqjy/20260420/cd42fc0681904ba2969deeff8d5309e5.html) |
| 金山区 | [2026年金山区公办小学对口招生入学范围和计划](https://www.shanghai.gov.cn/jsqywjy/20260413/f006412b13f2474091b311662395f935.html) | [2026年金山区学前教育阶段适龄幼儿入园工作实施意见](https://www.shanghai.gov.cn/jsqxqjy/20260421/c30696a6055d49acbccb215c09150c17.html) |
| 松江区 | [2026年松江区公办小学对口范围说明](https://www.songjiang.gov.cn/shsj_main/6358db43-a847-4442-b46d-f14c1429f9d5/525ff720-a77e-4aa2-9a8f-9a60991f7274/2026%E5%B9%B4%E6%9D%BE%E6%B1%9F%E5%8C%BA%E5%85%AC%E5%8A%9E%E5%B0%8F%E5%AD%A6%E5%AF%B9%E5%8F%A3%E8%8C%83%E5%9B%B4%E8%AF%B4%E6%98%8E.pdf) | [上海市松江区教育局关于印发《2026年 松江区学前教育阶段招生工作的实施方案》的通知](https://www.shanghai.gov.cn/sjqxqjy/20260609/686e4fb488a04d938299f2dac0914a1f.html) |
| 青浦区 | [2026年青浦区小学学区划分一览表](https://www.shanghai.gov.cn/qpqywjy/20260509/c94a7342b1a746c9ae32d5dff0cbf330.html) | [关于做好2026年青浦区学前教育阶段适龄幼儿入园工作的通知](https://www.shanghai.gov.cn/qpqxqjy/20260509/9ced028dec634a21ab8469d9b623bda9.html) |
| 奉贤区 | [2026年奉贤区义务教育阶段学校招生入学工作的实施意见及问答](https://www.fengxian.gov.cn/jysx/20260407/24af847e7a704454b7c28e4c3be2197b.html) | [2026年奉贤区学前教育阶段适龄幼儿入园指南](https://www.fengxian.gov.cn/jiaoyu/20260415/9ddef22a22024977b50ceea960a4e7b2.html) |
| 崇明区 | [崇明区2026年公办小学招生划区范围](https://www.shcm.gov.cn/govxxgk/qjyj/2026-04-07/7f26890a-a164-475a-bbf3-97570761c204.html) | [2026年崇明区各幼儿园小班招生信息公示](https://www.shanghai.gov.cn/cmqxqjy/20260428/d46c0c30bb0c444a876577c0af3b659c.html) |

### 3. 完整链接与可追溯记录

- [官方资料链接台账](docs/official-sources.md)：按市级和 16 区列出 **257 个原始 URL 去重后的官方链接**，另保留 **129 条政策目录与来源对应关系**。
- [机器可读来源索引](docs/official-source-index.json)：保留 **547 条出处记录**及来源 ID、原始状态、采集日期和已记录的文件摘要；同一链接来自多个台账时保留多条出处。
- 范围为小程序当前发布的来源文件及 12 份指定研究台账，包含其中明确列出的附件；不是本地全部下载文件清单。原发布源共有 178 条来源记录，其中非政府／教育资料（如地图服务文档）不列入本官方链接汇总。
- 129 条目录记录、257 个 URL、学校数量、关系数量和官方文件数量是不同口径，不能相互替代。同名文件与不同来源 URL 均保留，不凭网页日期猜测谁是修订版。
- `discovered` 表示发现；`snapshotted` 表示保存快照；`parsed_pending_review` 表示已解析待复核；`official_source_pending_review` 表示带官方来源、事实仍待核验。只有经过适当人工核验才可标记 `verified`。本次整理不提升任何核验状态。

### 4. 补充资料的固定流程

1. **先查已有材料**：按原始 URL、文件摘要和年度检查台账，区分“没采集”“已有原件但没解析”“已解析但没接入页面”，避免重复爬取全市资料。
2. **保存原件和上下文**：记录原发／收录页面及附件 URL、文件标题、发布机构、招生年度、发布日期、采集日期、SHA-256；无法确定的字段留空，不用采集日填发布日期。
3. **按真实格式解析**：HTML 表格保留合并单元格；PDF 检查跨页续表与脚注；扫描件保留原图并核对 OCR；Excel 保留工作表、行号与完整门牌。不能只提取名字列表。
4. **先定语义再关联实体**：区分精确地段、部分范围、统筹、摇号、验证服务区及主要对应街道；按学校主体—校区—学段—年度关联，歧义项隔离。
5. **逐条连接证据**：每条关系能回到具体文件、页／表／行或段落，结果保留完整限制条件；不要把门户首页当作证明某条关系的证据。
6. **分开检查与发布**：先验证结构、覆盖与引用，再进行原文复核和界面验收。文字阅读、事实核验、自动资格判断分别设边界；数据变更需独立审阅和可回滚的发布。

## 目录与维护注意

- `src/components/`：学校列表、地图、资料、对比和家庭决策界面。
- `src/data/`、`src/types/`：内置数据和类型定义。
- `src/utils/schoolDataQuality.ts`：未核验学校字段的净化规则。
- `src/services/amapService.ts`：可选地图集成。
- `scripts/validate-data.ts`：普通校验及生产数据门禁。
- `scripts/exportToCloud.ts`：历史小程序导出工具，会向相邻的 `shanghai-school-miniprogram/clouddata` 和 `miniprogram/data` 写文件；不由构建运行，使用前必须检查路径与覆盖范围。
- `scripts/generate_all_schools.py`、`scripts/build_full_shanghai_database.py`：历史数据生成资料，不是官方同步程序；不要为启动项目而运行，避免用旧材料覆盖当前数据。

后续正式使用前，应优先补齐当年度官方原文、逐字段证据及人工核验，确认各区覆盖范围，再处理地图接入和产品验收。不要通过删除生产门禁或把记录批量标记为 `verified` 绕过数据限制。
