import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import { SCHOOLS_DATA, DISTRICTS_LIST } from '../src/data/schools';
import { CATCHMENTS_DATA } from '../src/data/catchments';
import { MIDDLE_SCHOOLS } from '../src/data/middleSchools';
import { DISTRICT_OFFICIAL_PORTALS, CITY_OFFICIAL_PORTALS } from '../src/data/officialPortals';
import { FAQS_DATA } from '../src/data/faqs';
import { INITIAL_DISCUSSIONS } from '../src/data/discussions';
import { 
  ADMISSION_TIMELINE, 
  KINDERGARTEN_ADMISSION_TIMELINE, 
  MIDDLE_SCHOOL_ADMISSION_TIMELINE, 
  POLICY_ARTICLES 
} from '../src/data/policies';
import { DIVERSION_FALLBACKS_DATA } from '../src/data/diversionFallbacks';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetCloudDataDir = path.resolve(__dirname, '../../shanghai-school-miniprogram/clouddata');
const targetMiniDataDir = path.resolve(__dirname, '../../shanghai-school-miniprogram/miniprogram/data');

fs.mkdirSync(targetCloudDataDir, { recursive: true });
fs.mkdirSync(targetMiniDataDir, { recursive: true });

const datasets = [
  { name: 'schools', data: SCHOOLS_DATA },
  { name: 'catchments', data: CATCHMENTS_DATA },
  { name: 'middle_schools', data: MIDDLE_SCHOOLS },
  { name: 'official_portals', data: { districtPortals: DISTRICT_OFFICIAL_PORTALS, cityPortals: CITY_OFFICIAL_PORTALS } },
  { name: 'faqs', data: FAQS_DATA },
  { name: 'discussions', data: INITIAL_DISCUSSIONS },
  { 
    name: 'policies', 
    data: { 
      primaryTimeline: ADMISSION_TIMELINE, 
      kindergartenTimeline: KINDERGARTEN_ADMISSION_TIMELINE, 
      middleTimeline: MIDDLE_SCHOOL_ADMISSION_TIMELINE, 
      articles: POLICY_ARTICLES 
    } 
  },
  { name: 'diversion_fallbacks', data: DIVERSION_FALLBACKS_DATA },
  { name: 'districts', data: DISTRICTS_LIST }
];

for (const item of datasets) {
  // Write JSON for cloud data
  const jsonPath = path.join(targetCloudDataDir, `${item.name}.json`);
  fs.writeFileSync(jsonPath, JSON.stringify(item.data, null, 2), 'utf-8');
  console.log(`Exported JSON: ${jsonPath} (${(fs.statSync(jsonPath).size / 1024).toFixed(1)} KB)`);

  // Write JS module for miniprogram local fallback
  const jsPath = path.join(targetMiniDataDir, `${item.name}.js`);
  fs.writeFileSync(jsPath, `module.exports = ${JSON.stringify(item.data, null, 2)};\n`, 'utf-8');
  console.log(`Exported JS module: ${jsPath}`);
}

console.log('Successfully exported all datasets to CloudData and Miniprogram Data!');
