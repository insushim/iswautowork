import { GRADE_CHARACTERISTICS, BEHAVIOR_LEVEL_INFO } from '../curriculum-data';
import { BehaviorLevel, StudentTalents, TalentLevel } from '@/types';

const TALENT_LEVEL_TEXT: Record<TalentLevel, string> = {
  none: '',
  high: '뛰어남',
  medium: '양호함',
  low: '관심있음',
};

function getTalentDescription(talents: StudentTalents): string {
  const parts: string[] = [];

  if (talents.sports !== 'none') {
    parts.push(`운동(${TALENT_LEVEL_TEXT[talents.sports]})`);
  }
  if (talents.music !== 'none') {
    parts.push(`음악(${TALENT_LEVEL_TEXT[talents.music]})`);
  }
  if (talents.art !== 'none') {
    parts.push(`미술(${TALENT_LEVEL_TEXT[talents.art]})`);
  }

  return parts.length > 0 ? ` [예체능 특기: ${parts.join(', ')}]` : '';
}

export function buildBehaviorPrompt(
  studentCount: number,
  grade: number,
  behaviorLevels: BehaviorLevel[],
  studentTalents?: StudentTalents[]
): string {
  const gradeChar = GRADE_CHARACTERISTICS[grade];

  const levelList = behaviorLevels.map((level, idx) => {
    const levelInfo = BEHAVIOR_LEVEL_INFO[level];
    const talentDesc = studentTalents?.[idx] ? getTalentDescription(studentTalents[idx]) : '';
    return `${idx + 1}번: ${levelInfo.label} - ${levelInfo.description}${talentDesc}`;
  }).join('\n');

  // 예체능 특기가 있는 학생 수 계산
  const sportsCount = studentTalents?.filter(t => t?.sports !== 'none').length || 0;
  const musicCount = studentTalents?.filter(t => t?.music !== 'none').length || 0;
  const artCount = studentTalents?.filter(t => t?.art !== 'none').length || 0;
  const hasTalents = sportsCount > 0 || musicCount > 0 || artCount > 0;

  const talentGuidelines = hasTalents ? `
## 예체능 특기 작성 규칙 (중요!)
- [예체능 특기: ...]가 표시된 학생만 해당 내용을 추가로 작성합니다.
- 예체능 특기가 없는 학생은 예체능 관련 내용을 절대 포함하지 마세요!
- 예체능 수준별 표현:
  * 뛰어남(상): "~에 탁월한 재능을 보임", "~분야에서 두각을 나타냄", "~에 남다른 소질이 있음"
  * 양호함(중): "~에 흥미와 소질을 보임", "~활동에 꾸준히 참여함", "~분야에서 성장하는 모습을 보임"
  * 관심있음(하): "~에 관심을 가지고 노력함", "~활동에 즐겁게 참여함", "~분야에 대한 흥미가 있음"
- 운동 특기: 체육활동, 스포츠, 신체활동, 운동능력 관련 내용
- 음악 특기: 노래, 악기, 음악 감상, 리듬감, 음악 활동 관련 내용
- 미술 특기: 그림, 만들기, 색채 감각, 창의적 표현, 미술 활동 관련 내용
` : '';

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
