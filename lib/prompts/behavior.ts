import { GRADE_CHARACTERISTICS, BEHAVIOR_LEVEL_INFO } from '../curriculum-data';
import { BehaviorLevel } from '@/types';

export function buildBehaviorPrompt(
  studentCount: number,
  grade: number,
  behaviorLevels: BehaviorLevel[]
): string {
  const gradeChar = GRADE_CHARACTERISTICS[grade];

  const levelList = behaviorLevels.map((level, idx) => {
    const levelInfo = BEHAVIOR_LEVEL_INFO[level];
    return `${idx + 1}번: ${levelInfo.label} - ${levelInfo.description}`;
  }).join('\n');

  return `당신은 초등학교 ${grade}학년 담임교사입니다. NEIS 시스템에 입력할 '행동특성 및 종합의견'을 작성해야 합니다.

## 학년 특성
${gradeChar}

## 학생별 행동 수준 (5단계)
${levelList}

## 작성 내용 (1년간의 종합적인 평가)
- 생활태도: 학교생활 적응, 기본생활습관, 규칙 준수, 책임감 등
- 학습태도: 수업 참여도, 과제 수행, 학습 의욕, 집중력 등
- 교우관계: 친구와의 관계, 협동심, 배려심, 리더십 등
- 진로발달: 자신의 꿈과 진로에 대한 관심과 노력
- 특기사항: 학생의 강점, 특별한 활동, 성장한 부분, 개선된 점 등

## 작성 규칙
1. 총 ${studentCount}명의 학생에 대해 각각의 행동 수준에 맞게 작성하세요.
2. 모든 문장은 반드시 '~임.', '~함.', '~음.', '~람.' 등 공문서체로 끝나야 합니다.
3. 각 학생의 기록은 5-8문장, 250-400자 내외로 상세하게 구성합니다.
4. 행동 수준에 따라 차별화된 내용을 작성합니다:
   - '상': 모든 영역에서 모범적이며 타 학생에게 긍정적 영향을 줌
   - '중상': 대부분의 영역에서 우수하며 특정 영역에서 두각을 나타냄
   - '중': 전반적으로 양호하며 꾸준히 성장하는 모습을 보임
   - '중하': 노력하는 모습이 보이며 특정 영역에서 발전 가능성이 있음
   - '하': 성장 가능성이 있으며 지속적인 관심과 격려가 필요함
5. 모든 수준에서 학생의 긍정적인 면을 먼저 서술합니다.
6. 앞으로의 발전 가능성과 기대되는 점을 반드시 포함합니다.
7. 비난이나 부정적 표현은 절대 사용하지 않습니다.
8. 같은 수준이라도 서로 다른 표현과 구체적인 내용으로 작성합니다.

## 출력 형식
각 학생별로 아래 형식으로 출력하세요. 번호 외에 다른 텍스트는 포함하지 마세요.

1번: [행동특성 및 종합의견 내용]
2번: [행동특성 및 종합의견 내용]
...
${studentCount}번: [행동특성 및 종합의견 내용]

이제 ${studentCount}명의 학생에 대해 각 행동 수준에 맞게 모두 다른 내용으로 작성해주세요.`;
}
