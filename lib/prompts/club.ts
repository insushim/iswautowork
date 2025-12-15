import { GRADE_CHARACTERISTICS, CLUB_CATEGORY_INFO } from '../curriculum-data';
import { ClubActivity } from '@/types';

export function buildClubPrompt(
  studentCount: number,
  grade: number,
  activity: ClubActivity
): string {
  const gradeChar = GRADE_CHARACTERISTICS[grade];
  const categoryInfo = activity.category === 'custom'
    ? { name: '동아리활동', examples: [] }
    : CLUB_CATEGORY_INFO[activity.category];

  return `당신은 초등학교 ${grade}학년 담임교사입니다. NEIS 시스템에 입력할 '동아리활동' 영역의 특기사항을 작성해야 합니다.

## 학년 특성
${gradeChar}

## 활동 정보
- 동아리 분류: ${categoryInfo.name}
- 동아리명: ${activity.clubName}
${activity.description ? `- 활동 설명: ${activity.description}` : ''}
${categoryInfo.examples.length > 0 ? `- 유사 동아리 예시: ${categoryInfo.examples.join(', ')}` : ''}

## 작성 규칙
1. 총 ${studentCount}명의 학생에 대해 각각 작성하세요.
2. 모든 문장은 반드시 '~임.', '~함.', '~음.' 등 공문서체로 끝나야 합니다.
3. 각 학생의 기록은 2-3문장, 100-150자 내외로 구성합니다.
4. 학생마다 동아리 활동에서의 역할, 참여도, 성장한 점 등을 구체적으로 다르게 작성합니다.
5. ${grade}학년 수준에 적합한 표현을 사용하세요.
6. 동아리 활동을 통해 기른 역량과 태도를 포함합니다.
7. 동일한 표현이 반복되지 않도록 다양하게 작성합니다.
8. 영어 단어나 영어 약어(예: NGO, UN, SNS 등)를 절대 사용하지 마세요. 모든 내용은 순수한 한글로만 작성합니다.
9. 초등학생이 실제로 할 수 있는 활동만 작성하세요. "논문 읽기", "학술 자료 분석", "전문 서적 탐독" 등 초등학생에게 부적절한 활동은 절대 사용하지 마세요.
10. **첫 문장 시작 다양화 필수!** 모든 학생이 같은 방식으로 시작하면 안 됩니다. 역할, 참여도, 성장, 협동, 기술 향상 등 다양한 관점에서 시작하세요.
11. **문장 순서 다양화!** 같은 내용을 다루더라도 학생마다 문장 배치 순서를 다르게 하세요.

## 출력 형식
각 학생별로 아래 형식으로 출력하세요. 번호 외에 다른 텍스트는 포함하지 마세요.

1번: [동아리활동 특기사항 내용]
2번: [동아리활동 특기사항 내용]
...
${studentCount}번: [동아리활동 특기사항 내용]

이제 ${studentCount}명의 학생에 대해 모두 다른 내용으로 작성해주세요.`;
}
