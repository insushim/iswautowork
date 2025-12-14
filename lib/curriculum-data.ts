import { Subject, AutonomousActivityType, ClubActivityCategory, VolunteerActivityType, CareerActivityType, SubjectAchievementLevel, BehaviorLevel } from '@/types';

// 2022 개정 교육과정 기반 초등학교 교과목
export const SUBJECTS: Subject[] = [
  // 1-2학년 (국정)
  { code: 'korean_12', name: '국어', gradeRange: [1, 2], isNational: true },
  { code: 'math_12', name: '수학', gradeRange: [1, 2], isNational: true },
  { code: 'righteous_life', name: '바른 생활', gradeRange: [1, 2], isNational: true },
  { code: 'wise_life', name: '슬기로운 생활', gradeRange: [1, 2], isNational: true },
  { code: 'pleasant_life', name: '즐거운 생활', gradeRange: [1, 2], isNational: true },

  // 3-4학년
  { code: 'korean_34', name: '국어', gradeRange: [3, 4], isNational: true },
  { code: 'social_34', name: '사회', gradeRange: [3, 4], isNational: false },
  { code: 'moral_34', name: '도덕', gradeRange: [3, 4], isNational: false },
  { code: 'math_34', name: '수학', gradeRange: [3, 4], isNational: true },
  { code: 'science_34', name: '과학', gradeRange: [3, 4], isNational: false },
  { code: 'pe_34', name: '체육', gradeRange: [3, 4], isNational: false },
  { code: 'music_34', name: '음악', gradeRange: [3, 4], isNational: false },
  { code: 'art_34', name: '미술', gradeRange: [3, 4], isNational: false },
  { code: 'english_34', name: '영어', gradeRange: [3, 4], isNational: false },

  // 5-6학년
  { code: 'korean_56', name: '국어', gradeRange: [5, 6], isNational: true },
  { code: 'social_56', name: '사회', gradeRange: [5, 6], isNational: false },
  { code: 'moral_56', name: '도덕', gradeRange: [5, 6], isNational: false },
  { code: 'math_56', name: '수학', gradeRange: [5, 6], isNational: true },
  { code: 'science_56', name: '과학', gradeRange: [5, 6], isNational: false },
  { code: 'practical_arts', name: '실과', gradeRange: [5, 6], isNational: false },
  { code: 'pe_56', name: '체육', gradeRange: [5, 6], isNational: false },
  { code: 'music_56', name: '음악', gradeRange: [5, 6], isNational: false },
  { code: 'art_56', name: '미술', gradeRange: [5, 6], isNational: false },
  { code: 'english_56', name: '영어', gradeRange: [5, 6], isNational: false },
];

export function getSubjectsByGrade(grade: number): Subject[] {
  return SUBJECTS.filter(subject => subject.gradeRange.includes(grade));
}

// 자율활동 유형 정보
export const AUTONOMOUS_ACTIVITY_INFO: Record<AutonomousActivityType, { name: string; description: string }> = {
  school_violence_prevention: { name: '학교폭력 예방교육', description: '학교폭력의 유형과 예방법, 대처방법을 알고 평화로운 학교생활을 실천함' },
  safety_education: { name: '안전교육', description: '생활 속 다양한 안전사고 예방법과 대처방법을 알고 실천함' },
  character_education: { name: '인성교육', description: '배려, 존중, 협력, 책임감 등 바른 인성 덕목을 이해하고 실천함' },
  democratic_citizenship: { name: '민주시민교육', description: '민주적 의사결정 과정을 이해하고 학급 및 학교 공동체 활동에 적극 참여함' },
  environment_education: { name: '환경·지속가능발전교육', description: '환경보호의 중요성을 알고 지속가능한 생활을 위한 실천 방법을 익힘' },
  health_education: { name: '보건교육', description: '건강한 생활습관과 질병 예방법을 알고 자기 건강관리 능력을 기름' },
  digital_literacy: { name: '디지털 리터러시 교육', description: '디지털 기기의 올바른 사용법과 정보윤리를 이해하고 실천함' },
  multicultural_education: { name: '다문화 이해교육', description: '다양한 문화를 이해하고 존중하며 세계시민으로서의 자질을 기름' },
  unification_education: { name: '통일교육', description: '평화통일의 의미와 필요성을 이해하고 통일 의지를 함양함' },
  disaster_safety: { name: '재난안전교육', description: '각종 재난 상황의 대처방법을 알고 안전의식을 생활화함' },
  substance_abuse_prevention: { name: '약물오남용 예방교육', description: '약물의 올바른 사용법과 오남용의 위험성을 알고 건강한 생활을 실천함' },
  school_adaptation: { name: '학교적응활동', description: '학교생활에 필요한 기본 규칙과 예절을 알고 즐거운 학교생활을 함' },
  self_directed_activity: { name: '자기주도활동', description: '자신의 관심사에 따라 주제를 정하고 탐구 활동을 자기주도적으로 수행함' },
  custom: { name: '직접 입력', description: '' }
};

// 동아리 활동 카테고리 정보
export const CLUB_CATEGORY_INFO: Record<ClubActivityCategory, { name: string; examples: string[] }> = {
  academic: { name: '학술활동', examples: ['독서토론부', '과학탐구부', '수학탐구부', '역사탐구부', '영어회화부', 'SW코딩부'] },
  culture_art: { name: '문화예술활동', examples: ['미술부', '음악부', '합창부', '사물놀이부', '연극부', '방송부'] },
  sports: { name: '스포츠활동', examples: ['축구부', '농구부', '배드민턴부', '태권도부', '댄스부', '줄넘기부'] },
  volunteer_practice: { name: '실천봉사활동', examples: ['환경봉사부', '또래상담부', '교내봉사부'] },
  leisure: { name: '여가활동', examples: ['바둑부', '보드게임부', '원예부', '요리부'] },
  custom: { name: '직접 입력', examples: [] }
};

// 봉사활동 유형 정보
export const VOLUNTEER_TYPE_INFO: Record<VolunteerActivityType, { name: string; examples: string[] }> = {
  school_service: { name: '교내봉사활동', examples: ['도서관 정리', '학급 환경 미화', '급식실 도우미'] },
  community_service: { name: '지역사회봉사활동', examples: ['경로당 봉사', '복지관 봉사', '이웃돕기'] },
  environment_protection: { name: '환경보호활동', examples: ['학교 주변 환경정화', '분리수거 캠페인', '녹색환경 가꾸기'] },
  campaign: { name: '캠페인활동', examples: ['학교폭력예방 캠페인', '교통안전 캠페인', '생명존중 캠페인'] },
  custom: { name: '직접 입력', examples: [] }
};

// 진로활동 유형 정보
export const CAREER_TYPE_INFO: Record<CareerActivityType, { name: string; description: string }> = {
  self_understanding: { name: '자기이해활동', description: '자신의 흥미, 적성, 성격, 강점 등을 탐색하고 이해함' },
  career_exploration: { name: '진로탐색활동', description: '다양한 직업 세계와 진로 정보를 탐색하고 이해함' },
  career_design: { name: '진로설계활동', description: '자신의 진로를 계획하고 목표를 설정하여 실천함' },
  career_experience: { name: '진로체험활동', description: '직업 체험, 진로 멘토링, 현장 견학 등 다양한 진로 체험을 함' },
  custom: { name: '직접 입력', description: '' }
};

// 5단계 교과 성취수준 정보
export const SUBJECT_LEVEL_INFO: Record<SubjectAchievementLevel, { label: string; description: string; color: string }> = {
  excellent: { label: '상', description: '학업 성취도가 매우 우수하고 심화 학습에도 적극적임', color: 'bg-blue-500' },
  good: { label: '중상', description: '학업 성취도가 우수하고 꾸준히 발전하고 있음', color: 'bg-green-500' },
  average: { label: '중', description: '기본적인 학습 목표를 달성하고 있음', color: 'bg-yellow-500' },
  fair: { label: '중하', description: '기초 학습 내용 이해에 노력이 필요함', color: 'bg-orange-400' },
  needs_effort: { label: '하', description: '기초 학력 향상을 위한 지속적 노력이 필요하나 발전 가능성이 있음', color: 'bg-red-400' }
};

// 5단계 행동수준 정보
export const BEHAVIOR_LEVEL_INFO: Record<BehaviorLevel, { label: string; description: string; color: string }> = {
  excellent: { label: '상', description: '생활태도, 학습태도, 교우관계 모두 매우 우수함', color: 'bg-blue-500' },
  good: { label: '중상', description: '전반적으로 우수하며 일부 영역에서 더욱 발전 가능성이 있음', color: 'bg-green-500' },
  average: { label: '중', description: '전반적으로 무난하며 꾸준히 성장하고 있음', color: 'bg-yellow-500' },
  fair: { label: '중하', description: '일부 영역에서 노력이 필요하나 발전하고 있음', color: 'bg-orange-400' },
  needs_improvement: { label: '하', description: '지속적인 관심과 지도가 필요하나 가능성이 있음', color: 'bg-red-400' }
};

// 학년별 특성
export const GRADE_CHARACTERISTICS: Record<number, string> = {
  1: '입학 초기로 학교생활 적응 중이며, 기초 학습 습관 형성 시기임. 놀이 중심 학습을 선호하고 구체적 경험을 통한 학습이 효과적임.',
  2: '기초 학습이 어느 정도 완성되는 시기이며, 또래 관계가 중요해짐. 읽기, 쓰기, 기초 수 개념이 정착되는 시기임.',
  3: '교과가 분화되어 학습량이 증가하고, 추상적 사고가 발달하기 시작함. 영어, 사회, 과학 등 새로운 교과를 배우기 시작함.',
  4: '기초 학력이 완성되고 응용력이 발달하는 시기임. 또래 집단의 영향이 커지고 자아의식이 강해짐.',
  5: '고학년으로서 책임감과 자율성이 증가하고, 논리적 사고력이 발달함. 실과 교과가 추가되어 실생활과 연계한 학습을 함.',
  6: '초등학교 최고 학년으로 리더십과 봉사정신을 발휘함. 중학교 진학을 앞두고 진로 탐색이 활발해지는 시기임.'
};
