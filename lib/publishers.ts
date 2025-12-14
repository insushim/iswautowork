import { Publisher } from '@/types';

// 출판사 정보
export const PUBLISHERS: Record<Publisher, { name: string; shortName: string }> = {
  national: { name: '국정교과서', shortName: '국정' },
  chunjae: { name: '천재교육', shortName: '천재' },
  donga: { name: '동아출판', shortName: '동아' },
  mirae: { name: '미래엔', shortName: '미래엔' },
  visang: { name: '비상교육', shortName: '비상' },
  jihak: { name: '지학사', shortName: '지학' },
  kumsung: { name: '금성출판사', shortName: '금성' },
  kyohak: { name: '교학사', shortName: '교학' },
  ybm: { name: 'YBM', shortName: 'YBM' },
};

// 학년/교과별 출판사 매핑 (2025년 기준)
// 국정: 국어, 도덕만 국정
// 검정: 수학, 사회, 과학, 영어, 체육, 음악, 미술, 실과 등
export const SUBJECT_PUBLISHERS: Record<string, Publisher[]> = {
  // 1-2학년 (국어, 바슬즐은 국정 / 수학은 검정)
  'korean_12': ['national'],
  'math_12': ['chunjae', 'donga', 'mirae', 'visang', 'kumsung', 'kyohak'],
  'righteous_life': ['national'],
  'wise_life': ['national'],
  'pleasant_life': ['national'],

  // 3-4학년 (국어, 도덕만 국정)
  'korean_34': ['national'],
  'math_34': ['chunjae', 'donga', 'mirae', 'visang', 'kumsung', 'kyohak'],
  'social_34': ['chunjae', 'donga', 'mirae', 'visang', 'jihak', 'kumsung'],
  'moral_34': ['national'],
  'science_34': ['chunjae', 'donga', 'mirae', 'visang', 'jihak', 'kumsung'],
  'pe_34': ['chunjae', 'donga', 'mirae', 'visang', 'kumsung', 'kyohak'],
  'music_34': ['chunjae', 'donga', 'mirae', 'visang', 'jihak', 'kumsung'],
  'art_34': ['chunjae', 'donga', 'mirae', 'visang', 'jihak', 'kumsung'],
  'english_34': ['chunjae', 'donga', 'ybm', 'visang'],

  // 5-6학년 (국어, 도덕만 국정)
  'korean_56': ['national'],
  'math_56': ['chunjae', 'donga', 'mirae', 'visang', 'kumsung', 'kyohak'],
  'social_56': ['chunjae', 'donga', 'mirae', 'visang', 'jihak', 'kumsung'],
  'moral_56': ['national'],
  'science_56': ['chunjae', 'donga', 'mirae', 'visang', 'jihak', 'kumsung'],
  'practical_arts': ['chunjae', 'donga', 'mirae', 'visang', 'kumsung', 'kyohak'],
  'pe_56': ['chunjae', 'donga', 'mirae', 'visang', 'kumsung', 'kyohak'],
  'music_56': ['chunjae', 'donga', 'mirae', 'visang', 'jihak', 'kumsung'],
  'art_56': ['chunjae', 'donga', 'mirae', 'visang', 'jihak', 'kumsung'],
  'english_56': ['chunjae', 'donga', 'ybm', 'visang'],
};

export function getPublishersForSubject(subjectCode: string): Publisher[] {
  return SUBJECT_PUBLISHERS[subjectCode] || ['national'];
}

export function isNationalSubject(subjectCode: string): boolean {
  const publishers = SUBJECT_PUBLISHERS[subjectCode];
  return publishers?.length === 1 && publishers[0] === 'national';
}
