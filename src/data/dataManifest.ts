export const DATA_MANIFEST = {
  version: '2026.09.11-governance-alpha.3',
  generatedAt: '2026-09-11',
  releasePolicy: {
    schoolFacts: 'traceable_source_required',
    admissionRelationship: 'official_source_required',
    amapScope: ['poi', 'geocoding', 'distance', 'route'],
    probabilityPrediction: false,
    unknownHousingPrice: 'blank'
  },
  sourcePriority: [
    '当年区教育局原文',
    '学校当年招生告示',
    '历史资料（待核验）',
    '高德地理信息（非招生证据）'
  ]
} as const;
