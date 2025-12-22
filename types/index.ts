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

// 예체능 특기 레벨 (3단계) - 선택하지 않으면 none
export type TalentLevel = 'none' | 'high' | 'medium' | 'low';
// 없음 / 상 / 중 / 하

// 예체능 특기 타입
export type TalentType = 'sports' | 'music' | 'art';
// 운동 / 음악 / 미술

// 학생별 예체능 특기 설정
export interface StudentTalents {
  sports: TalentLevel;
  music: TalentLevel;
  art: TalentLevel;
}

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
  semester: 1 | 2; // 학기
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

// 학기
export type Semester = 1 | 2;

// 누가기록 (Anecdotal Record)
export interface NugaRecord {
  id: string;
  studentNumber: number;
  sentence: string;
  date: string; // YYYY-MM-DD 형식
  category: NugaCategory;
  isUsed: boolean; // 이미 사용한 기록인지
  createdAt: Date;
}

// 누가기록 카테고리 (행동특성 영역 기반)
export type NugaCategory =
  | 'school_life'      // 학교생활 및 기본생활습관
  | 'learning'         // 학습 태도 및 지적 호기심
  | 'social'           // 교우관계 및 사회성
  | 'character'        // 인성 및 정서 발달
  | 'talent'           // 진로 및 특기 발달
  | 'other';           // 기타

// 창의적 체험활동 하위 탭 타입
export type CreativeActivityTab = 'autonomous' | 'club' | 'volunteer' | 'career';

// 창의적 체험활동 누적 기록 (활동별 히스토리)
export interface CreativeActivityHistoryItem {
  id: string;
  activityName: string;
  activityType: string;
  records: GeneratedRecord[];
  createdAt: Date;
}

// 창의적 체험활동 영역별 히스토리
export interface CreativeActivityHistory {
  autonomous: CreativeActivityHistoryItem[];
  club: CreativeActivityHistoryItem[];
  volunteer: CreativeActivityHistoryItem[];
  career: CreativeActivityHistoryItem[];
}
