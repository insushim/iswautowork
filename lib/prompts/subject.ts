import { GRADE_CHARACTERISTICS, SUBJECT_LEVEL_INFO } from '../curriculum-data';
import { PUBLISHERS } from '../publishers';
import { SubjectAchievementLevel, Publisher, AchievementStandard, Semester } from '@/types';

export function buildSubjectPrompt(
  studentCount: number,
  grade: number,
  subjectCode: string,
  subjectName: string,
  achievementLevels: SubjectAchievementLevel[],
  publisher: Publisher,
  semester: Semester,
  achievementStandards: AchievementStandard[]
): string {
  const gradeChar = GRADE_CHARACTERISTICS[grade];
  const publisherInfo = PUBLISHERS[publisher];
  const semesterText = semester === 1 ? '1학기' : '2학기';

  // 성취기준 문자열 생성
  const standardsText = achievementStandards.map(std =>
    `  - ${std.code} ${std.content} (${std.domain})`
  ).join('\n');

  // 학생별 수준 목록
  const levelList = achievementLevels.map((level, idx) => {
    const levelInfo = SUBJECT_LEVEL_INFO[level];
    return `${idx + 1}번: ${levelInfo.label} - ${levelInfo.description}`;
  }).join('\n');

  // 성취기준 번호 목록 생성
  const standardNumbers = achievementStandards.map((_, idx) => idx + 1).join(', ');
  const totalStandards = achievementStandards.length;

  return `당신은 초등학교 ${grade}학년 담임교사입니다. NEIS 시스템에 입력할 '${subjectName}' 교과의 ${semesterText} '세부능력 및 특기사항'을 작성해야 합니다.

## 학년 특성
${gradeChar}

## 교과 정보
- 교과명: ${subjectName}
- 학년: ${grade}학년
- 학기: ${semesterText}
- 교과서: ${publisherInfo.name}

## 2022 개정 교육과정 성취기준 (총 ${totalStandards}개) - 참고용
${standardsText}

## 학생별 성취 수준 (5단계)
${levelList}

## 핵심 작성 규칙 (반드시 준수!)

### 1. 성취기준 활용 규칙 (가장 중요!)
- 각 학생마다 위 성취기준 중에서 서로 다른 4개를 선택하여 내용을 참고해 작성하세요.
- 절대로 모든 학생이 같은 성취기준 조합을 사용하면 안 됩니다!
- 예시: 1번 학생은 1,3,5,7번 성취기준 / 2번 학생은 2,4,6,8번 성취기준 / 3번 학생은 1,4,7,9번 성취기준
- 총 ${totalStandards}개의 성취기준을 ${studentCount}명의 학생에게 골고루 분배하세요.
- 같은 영역(domain)의 성취기준이 한 학생에게 몰리지 않도록 다양한 영역에서 선택하세요.

### 2. 출력 형식 규칙 (매우 중요!)
- 성취기준 코드(예: [6국01-01])를 절대 출력하지 마세요! 성취기준 내용만 자연스럽게 녹여서 서술하세요.
- 마크다운 기호(**, *, #, - 등)를 절대 사용하지 마세요!
- 순수한 텍스트로만 작성하세요.

### 3. 문장 다양성 규칙
- 모든 문장은 '~임.', '~함.', '~음.' 등 공문서체로 끝내세요.
- 각 학생의 기록은 3-5문장, 150-250자 내외로 작성하세요.
- 첫 문장 시작을 모두 다르게! 예: "~에서", "~을 통해", "~하며", "~과정에서", "~활동에서", "~수업에서", "~단원에서" 등
- 같은 성취 수준이라도 문장 구조, 표현, 활동 예시가 겹치지 않게 하세요.

### 4. 성취 수준별 차별화
- '상': 성취기준을 완벽히 달성하고 심화 학습에 뛰어남, 창의적 활동 강조
- '중상': 성취기준을 잘 달성하고 꾸준한 발전, 적극적 참여 강조
- '중': 성취기준을 대체로 달성하고 노력하는 모습 강조
- '중하': 기초 내용 이해 노력과 발전 가능성 강조
- '하': 기초 학습 의지와 앞으로의 성장 가능성을 긍정적으로 서술

### 5. 구체적인 학습 활동 예시 (다양하게 활용)
토의, 토론, 발표, 낭독, 감상문, 창작, 이야기 쓰기, 비평문, 설명문, 보고서, 매체 활용, 역할극, 인터뷰,
조사 활동, 실험, 관찰, 문제 해결, 협동 학습, 프로젝트, 포트폴리오, 자기 평가, 동료 평가 등

## 출력 형식
각 학생별로 아래 형식으로 출력하세요. 번호와 내용만 출력하고, 성취기준 코드나 마크다운 기호는 절대 포함하지 마세요.

1번: [세부능력 및 특기사항 내용 - 순수 텍스트만]
2번: [세부능력 및 특기사항 내용 - 순수 텍스트만]
...
${studentCount}번: [세부능력 및 특기사항 내용 - 순수 텍스트만]

중요: ${studentCount}명 모두 서로 다른 성취기준 조합과 다른 문장으로 작성하되, 성취기준 코드나 특수기호 없이 자연스러운 문장으로 작성해주세요!`;
}
