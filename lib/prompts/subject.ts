import { GRADE_CHARACTERISTICS, SUBJECT_LEVEL_INFO } from '../curriculum-data';
import { SubjectAchievementLevel, AchievementStandard, Semester } from '@/types';

// 과목별 성취기준 선택 개수 결정
function getStandardCount(subjectName: string, grade: number): number {
  // 1-2학년 과목: 4개
  if (grade <= 2) {
    return 4;
  }

  // 주요 교과 (국어, 수학, 사회, 과학, 영어): 6개
  const mainSubjects = ['국어', '수학', '사회', '과학', '영어'];
  if (mainSubjects.includes(subjectName)) {
    return 6;
  }

  // 예체능 및 기타 교과 (음악, 미술, 체육, 실과, 도덕): 3개
  return 3;
}

// 과목별 활동 예시 생성
function getActivityExamples(subjectName: string): string {
  const activities: Record<string, string> = {
    '국어': '토의, 토론, 발표, 낭독, 독서 감상문, 시 창작, 이야기 쓰기, 설명문, 보고서, 매체 활용, 역할극, 인터뷰, 문법 탐구, 독후 활동, 글쓰기 첨삭, 동시 낭송',
    '수학': '문제 해결, 수학적 추론, 패턴 탐구, 측정 활동, 도형 만들기, 자료 수집 및 정리, 수학 일기, 수학 게임, 실생활 적용, 협동 문제 풀이, 수학 토론, 계산 연습',
    '사회': '조사 활동, 지도 읽기, 역사 탐구, 사회 현상 분석, 토론, 역할극, 현장 학습, 자료 분석, 인터뷰, 프로젝트, 신문 만들기, 시사 토론, 지역 사회 탐방',
    '과학': '실험, 관찰, 탐구 활동, 가설 설정, 자료 수집, 보고서 작성, 과학 일기, 모형 만들기, 현장 학습, 과학 토론, 발명 아이디어, 환경 조사, 생태 관찰',
    '영어': '듣기 활동, 말하기 연습, 읽기 활동, 쓰기 활동, 역할극, 노래 부르기, 챈트, 게임, 그림책 읽기, 영어 일기, 인터뷰, 발표, 영어 동화 듣기',
    '도덕': '토론, 역할극, 사례 분석, 실천 활동, 봉사 활동, 감사 편지 쓰기, 자기 성찰, 공감 활동, 약속 정하기, 갈등 해결, 예절 실천, 환경 보호 활동',
    '체육': '기본 운동, 게임, 스포츠, 표현 활동, 건강 관리, 안전 교육, 협동 게임, 경쟁 활동, 창작 표현, 체력 측정, 팀 활동, 규칙 정하기, 심판 활동',
    '음악': '노래 부르기, 악기 연주, 음악 감상, 음악 만들기, 신체 표현, 합창, 합주, 음악극, 리듬 활동, 음악 일기, 음악회 감상, 전통 음악 체험',
    '미술': '그리기, 만들기, 감상, 표현, 디자인, 조형 활동, 전시회 관람, 미술관 탐방, 협동 작품, 포트폴리오, 비평, 창작 활동, 재료 탐색, 작품 발표',
    '실과': '만들기, 실습, 요리, 재배, 사육, 정보 활용, 로봇, 코딩, 생활 기술, 진로 탐색, 안전 교육, 친환경 활동, 가정 관리, 소프트웨어 활용',
    '바른생활': '실천 활동, 역할극, 약속 정하기, 감사 표현, 질서 지키기, 청소 활동, 인사 나누기, 배려 실천, 규칙 만들기, 자기 반성, 칭찬 활동',
    '슬기로운생활': '관찰, 탐구, 조사, 분류, 비교, 실험, 현장 학습, 자료 수집, 발표, 그림 그리기, 만들기, 이야기 나누기, 계절 탐구, 동식물 관찰',
    '즐거운생활': '노래 부르기, 그리기, 만들기, 놀이, 표현 활동, 감상, 춤추기, 악기 놀이, 역할 놀이, 계절 놀이, 전통 놀이, 창작 활동, 작품 전시',
  };
  return activities[subjectName] || '활동, 학습, 탐구, 발표, 토론, 협동 학습, 프로젝트';
}

export function buildSubjectPrompt(
  studentCount: number,
  grade: number,
  subjectCode: string,
  subjectName: string,
  achievementLevels: SubjectAchievementLevel[],
  semester: Semester,
  achievementStandards: AchievementStandard[]
): string {
  const gradeChar = GRADE_CHARACTERISTICS[grade];
  const semesterText = semester === 1 ? '1학기' : '2학기';

  // 성취기준 문자열 생성 (번호 붙여서)
  const standardsText = achievementStandards.map((std, idx) =>
    `  ${idx + 1}. ${std.content} (${std.domain})`
  ).join('\n');

  // 학생별 수준 목록
  const levelList = achievementLevels.map((level, idx) => {
    const levelInfo = SUBJECT_LEVEL_INFO[level];
    return `${idx + 1}번: ${levelInfo.label} - ${levelInfo.description}`;
  }).join('\n');

  const totalStandards = achievementStandards.length;
  const standardCount = getStandardCount(subjectName, grade);
  const activityExamples = getActivityExamples(subjectName);

  return `당신은 초등학교 ${grade}학년 담임교사입니다. NEIS 시스템에 입력할 '${subjectName}' 교과의 ${semesterText} '세부능력 및 특기사항'을 작성해야 합니다.

## 학년 특성
${gradeChar}

## 교과 정보
- 교과명: ${subjectName}
- 학년: ${grade}학년
- 학기: ${semesterText}

## 2022 개정 교육과정 성취기준 (총 ${totalStandards}개) - 참고용
${standardsText}

## 학생별 성취 수준 (5단계)
${levelList}

## 핵심 작성 규칙 (반드시 준수!)

### 1. 성취기준 활용 규칙 (가장 중요!)
- 각 학생마다 위 성취기준 중에서 서로 다른 ${standardCount}개를 선택하여 내용을 참고해 작성하세요.
- 절대로 모든 학생이 같은 성취기준 조합을 사용하면 안 됩니다!
- 총 ${totalStandards}개의 성취기준을 ${studentCount}명의 학생에게 골고루 분배하세요.
- 같은 영역(domain)의 성취기준이 한 학생에게 몰리지 않도록 다양한 영역에서 선택하세요.

### 2. 문장 작성 규칙 (매우 중요!)
- 성취기준을 그대로 베끼지 마세요! 성취기준의 핵심 내용을 바탕으로 구체적인 학습 상황과 학생의 모습을 풍부하게 서술하세요.
- 예시 (나쁜 예): "글을 읽고 내용을 요약함."
- 예시 (좋은 예): "다양한 글을 꼼꼼히 읽으며 중심 내용과 세부 사항을 구분하여 파악하고, 이를 자신만의 언어로 재구성하여 핵심을 명확하게 요약하는 능력이 뛰어남."
- 각 문장을 30-50자 정도로 풍부하게 작성하되, 공문서체 어미(~임, ~함, ~음)를 유지하세요.

### 3. 출력 형식 규칙
- 성취기준 코드(예: [6국01-01])를 절대 출력하지 마세요!
- 마크다운 기호(**, *, #, - 등)를 절대 사용하지 마세요!
- 순수한 텍스트로만 작성하세요.

### 4. 문장 다양성 규칙
- 모든 문장은 '~임.', '~함.', '~음.' 등 공문서체로 끝내세요.
- 각 학생의 기록은 ${standardCount}개 이상의 문장, 200-350자 내외로 작성하세요.
- 첫 문장 시작을 모두 다르게! 예: "~에서", "~을 통해", "~하며", "~과정에서", "~활동에서", "~수업에서", "~단원에서", "~학습에서" 등
- 같은 성취 수준이라도 문장 구조, 표현, 활동 예시가 겹치지 않게 하세요.

### 5. 성취 수준별 차별화
- '상': 성취기준을 완벽히 달성하고 심화 학습에 뛰어남, 창의적이고 주도적인 활동 강조, "뛰어남", "우수함", "탁월함" 등 사용
- '중상': 성취기준을 잘 달성하고 꾸준한 발전, 적극적 참여 강조, "잘 함", "능숙함", "성실함" 등 사용
- '중': 성취기준을 대체로 달성하고 노력하는 모습 강조, "할 수 있음", "이해함", "참여함" 등 사용
- '중하': 기초 내용 이해 노력과 발전 가능성 강조, "노력함", "향상됨", "발전함" 등 사용
- '하': 기초 학습 의지와 앞으로의 성장 가능성을 긍정적으로 서술, "관심을 보임", "시도함", "가능성이 있음" 등 사용

### 6. ${subjectName} 교과 관련 학습 활동 예시
${activityExamples}

## 출력 형식
각 학생별로 아래 형식으로 출력하세요. 번호와 내용만 출력하세요.

1번: [세부능력 및 특기사항 - 풍부하고 구체적인 서술]
2번: [세부능력 및 특기사항 - 풍부하고 구체적인 서술]
...
${studentCount}번: [세부능력 및 특기사항 - 풍부하고 구체적인 서술]

중요:
- ${studentCount}명 모두 서로 다른 ${standardCount}개의 성취기준 조합으로 작성하세요.
- 성취기준을 그대로 쓰지 말고 구체적인 학습 상황과 학생의 모습을 풍부하게 서술하세요.
- 성취기준 코드나 특수기호 없이 자연스럽고 풍부한 문장으로 작성해주세요!`;
}
