// 학급 정보
export interface Classroom {
  grade: number;
  classNumber: number;
  studentCount: number;
  createdAt: Date;
}

// 학생 정보
export interface Student {
  id: string;
  number: number;
  classroomId: string;
}

// 생성된 기록
export interface GeneratedRecord {
  studentNumber: number;
  content: string;
  isEdited: boolean;
  charCount?: number;
}

// 자율활동 유형 (2022 교육과정)
export type AutonomousActivityType =
  | 'school_violence_prevention' | 'safety_education' | 'character_education'
  | 'democratic_citizenship' | 'environment_education' | 'health_education'
  | 'digital_literacy' | 'multicultural_education' | 'unification_education'
  | 'disaster_safety' | 'substance_abuse_prevention' | 'school_adaptation'
  | 'self_directed_activity' | 'custom';

export interface AutonomousActivity {
  type: AutonomousActivityType;
  customTitle?: string;
  description?: string;
}

// 동아리 활동 카테고리
export type ClubActivityCategory = 'academic' | 'culture_art' | 'sports' | 'volunteer_practice' | 'leisure' | 'custom';

export interface ClubActivity {
  category: ClubActivityCategory;
  clubName: string;
  description?: string;
}

// 봉사활동 유형
export type VolunteerActivityType = 'school_service' | 'community_service' | 'environment_protection' | 'campaign' | 'custom';

export interface VolunteerActivity {
  type: VolunteerActivityType;
  activityName: string;
  description?: string;
}

// 진로활동 유형
export type CareerActivityType = 'self_understanding' | 'career_exploration' | 'career_design' | 'career_experience' | 'custom';

export interface CareerActivity {
  type: CareerActivityType;
  activityName: string;
  description?: string;
}

// 5단계 성취수준 (교과)
export type SubjectAchievementLevel = 'excellent' | 'good' | 'average' | 'fair' | 'needs_effort';
// 상 / 중상 / 중 / 중하 / 하

// 5단계 행동수준
export type BehaviorLevel = 'excellent' | 'good' | 'average' | 'fair' | 'needs_improvement';
// 상 / 중상 / 중 / 중하 / 하

// 출판사 정보
export type Publisher =
  | 'national' // 국정 (국어, 수학 - 1,2학년)
  | 'chunjae' // 천재교육
  | 'donga' // 동아출판
  | 'mirae' // 미래엔
  | 'visang' // 비상교육
  | 'jihak' // 지학사
  | 'kumsung' // 금성출판사
  | 'kyohak' // 교학사
  | 'ybm'; // YBM

// 교과 정보
export interface Subject {
  code: string;
  name: string;
  gradeRange: number[];
  isNational: boolean; // 국정 교과서 여부
  availablePublishers?: Publisher[]; // 검정 교과서 출판사 목록
}

// 성취기준
export interface AchievementStandard {
  code: string; // 예: [4국01-01]
  content: string;
  grade: number;
  subject: string;
  domain: string; // 영역 (듣기·말하기, 읽기, 쓰기 등)
}

// API 요청/응답
export interface GenerateRequest {
  type: 'autonomous' | 'club' | 'volunteer' | 'career' | 'subject' | 'behavior';
  studentCount: number;
  grade: number;
  activityInfo: any;
  achievementLevels?: SubjectAchievementLevel[] | BehaviorLevel[];
  subjectCode?: string;
  publisher?: Publisher;
  achievementStandards?: AchievementStandard[];
}

export interface GenerateResponse {
  records: GeneratedRecord[];
  error?: string;
}

// 테마
export type Theme = 'light' | 'dark';
