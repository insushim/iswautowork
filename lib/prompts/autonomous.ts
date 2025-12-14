import { GRADE_CHARACTERISTICS, AUTONOMOUS_ACTIVITY_INFO } from '../curriculum-data';
import { AutonomousActivity } from '@/types';

export function buildAutonomousPrompt(
  studentCount: number,
  grade: number,
  activity: AutonomousActivity
): string {
  const gradeChar = GRADE_CHARACTERISTICS[grade];
  const activityInfo = activity.type === 'custom'
    ? { name: activity.customTitle || '자율활동', description: activity.description || '' }
    : AUTONOMOUS_ACTIVITY_INFO[activity.type];

  return `당신은 초등학교 ${grade}학년 담임교사입니다. NEIS 시스템에 입력할 '자율활동' 영역의 특기사항을 작성해야 합니다.

## 학년 특성
${gradeChar}

## 활동 정보
- 활동명: ${activityInfo.name}
- 활동 내용: ${activityInfo.description}
${activity.description ? `- 추가 설명: ${activity.description}` : ''}

## 작성 규칙
1. 총 ${studentCount}명의 학생에 대해 각각 작성하세요.
2. 모든 문장은 반드시 '~임.', '~함.', '~음.' 등 공문서체로 끝나야 합니다.
3. 각 학생의 기록은 2-3문장, 100-150자 내외로 구성합니다.
4. 학생마다 서로 다른 구체적인 활동 내용과 성과를 포함해야 합니다.
5. ${grade}학년 수준에 적합한 표현을 사용하세요.
6. 긍정적이고 발전적인 내용으로 작성합니다.
7. 동일한 표현이 반복되지 않도록 다양하게 작성합니다.

## 출력 형식
각 학생별로 아래 형식으로 출력하세요. 번호 외에 다른 텍스트는 포함하지 마세요.

1번: [자율활동 특기사항 내용]
2번: [자율활동 특기사항 내용]
...
${studentCount}번: [자율활동 특기사항 내용]

이제 ${studentCount}명의 학생에 대해 모두 다른 내용으로 작성해주세요.`;
}
