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

  return `당신은 초등학교 ${grade}학년 담임교사입니다. NEIS 시스템에 입력할 '${subjectName}' 교과의 ${semesterText} '세부능력 및 특기사항'을 작성해야 합니다.

## 학년 특성
${gradeChar}

## 교과 정보
- 교과명: ${subjectName}
- 학년: ${grade}학년
- 학기: ${semesterText}
- 교과서: ${publisherInfo.name}

## 2022 개정 교육과정 성취기준
${standardsText}

## 학생별 성취 수준 (5단계)
${levelList}

## 작성 규칙
1. 총 ${studentCount}명의 학생에 대해 각각의 성취 수준에 맞게 작성하세요.
2. 모든 문장은 반드시 '~임.', '~함.', '~음.' 등 공문서체로 끝나야 합니다.
3. 각 학생의 기록은 3-5문장, 150-250자 내외로 구성합니다.
4. 위의 성취기준을 참고하여 해당 교과의 ${semesterText} 발달사항을 종합적으로 서술합니다.
5. 성취 수준에 따라 차별화된 내용을 작성합니다:
   - '상': 성취기준을 완벽히 달성하고 심화 학습에 뛰어남, 창의적 활동 강조
   - '중상': 성취기준을 잘 달성하고 꾸준한 발전, 적극적 참여 강조
   - '중': 성취기준을 대체로 달성하고 노력하는 모습 강조
   - '중하': 기초 내용 이해 노력과 발전 가능성 강조
   - '하': 기초 학습 의지와 앞으로의 성장 가능성을 긍정적으로 서술
6. 모든 수준에서 학생의 긍정적인 면과 발전 가능성을 포함합니다.

## 다양성 확보 (매우 중요!)
- 각 학생마다 반드시 서로 다른 성취기준을 조합하여 작성하세요.
- 같은 성취 수준이라도 학생마다 강조하는 영역(듣기·말하기, 읽기, 쓰기, 문법, 문학 등)을 다르게 하세요.
- 첫 문장의 시작을 모두 다르게 작성하세요. 예: "~에서", "~을 통해", "~하며", "~과정에서" 등 다양하게 시작
- 25명의 학생이 있다면 25개 모두 다른 조합과 표현으로 작성해야 합니다.
- 특히 동일 수준 학생들 사이에서 문장 구조나 언급하는 활동이 겹치지 않도록 주의하세요.
- 구체적인 학습 활동 예시: 토의, 토론, 발표, 낭독, 독서 감상문, 시 창작, 이야기 쓰기, 비평문, 설명문, 보고서,
  매체 활용, 드라마 표현, 역할극, 인터뷰, 조사 활동, 독후 활동, 글쓰기 첨삭, 문법 탐구 등

## 출력 형식
각 학생별로 아래 형식으로 출력하세요. 번호 외에 다른 텍스트는 포함하지 마세요.

1번: [세부능력 및 특기사항 내용]
2번: [세부능력 및 특기사항 내용]
...
${studentCount}번: [세부능력 및 특기사항 내용]

이제 ${studentCount}명의 학생에 대해 각 성취 수준에 맞게 모두 다른 내용으로 작성해주세요.`;
}
