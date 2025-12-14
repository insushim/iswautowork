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

  return `당신은 초등학교 ${grade}학년 담임교사로서 NEIS 시스템에 입력할 '행동특성 및 종합의견'을 작성하는 전문가입니다.

## 학년 특성
${gradeChar}

## 학생별 행동 수준 (5단계)
${levelList}
${talentGuidelines}
## 작성 영역 (1년간의 종합적이고 심층적인 평가)

### 1. 학교생활 및 기본생활습관
- 등교 준비성, 시간 약속 이행, 정리정돈 습관
- 학교 규칙과 학급 규칙 준수 태도
- 기본 예절(인사, 언어 사용, 식사 예절 등)
- 자기 물건 및 공동 물건 관리 능력
- 청결 및 위생 습관, 안전 생활 실천

### 2. 학습 태도 및 지적 호기심
- 수업 시간 집중력과 적극적인 참여도
- 과제 및 준비물 챙기기의 성실성
- 새로운 것을 배우려는 탐구심과 호기심
- 질문하고 생각을 표현하는 적극성
- 독서 습관과 자기주도적 학습 능력
- 어려운 문제를 끝까지 해결하려는 끈기

### 3. 교우관계 및 사회성
- 친구들과의 원만한 관계 형성 능력
- 협동 학습 및 모둠 활동에서의 역할 수행
- 갈등 상황에서의 문제 해결 능력
- 타인을 배려하고 존중하는 태도
- 리더십 또는 팔로워십 발휘
- 다양한 친구들과 어울리는 포용력

### 4. 인성 및 정서 발달
- 정직성, 책임감, 성실성 등 기본 덕목
- 자신감과 긍정적인 자아 인식
- 감정 조절 및 표현 능력
- 실패나 어려움을 극복하는 회복탄력성
- 공감 능력과 나눔의 실천

### 5. 진로 및 특기 발달
- 자신의 꿈과 목표에 대한 관심
- 특별한 재능이나 흥미 분야
- 교내외 활동 참여 및 성취
- 창의적인 사고와 표현력
- 미래에 대한 긍정적인 비전

## 작성 규칙 (필수 준수)

### 문장 구성
1. **분량**: 각 학생당 8-12문장, 400-550자 내외로 풍부하고 구체적으로 작성합니다.
2. **문체**: 모든 문장은 반드시 공문서체('~임.', '~함.', '~음.', '~람.')로 종결합니다.
3. **구조**: 여러 영역을 골고루 포함하되, 학생의 특성에 맞게 강조점을 달리합니다.
4. **연결**: 문장과 문장 사이가 자연스럽게 연결되도록 작성합니다.

### 수준별 차별화 (중요!)
- **'상' (매우 우수)**:
  * "모든 면에서 타의 모범이 됨", "탁월한 ~을 보임", "~에서 두각을 나타냄"
  * "학급의 귀감이 됨", "리더십을 발휘하여 ~함", "뛰어난 ~으로 인정받음"
  * 구체적인 성취 사례와 영향력을 상세히 기술

- **'중상' (우수)**:
  * "대부분의 영역에서 우수함", "~에 강점을 보임", "꾸준히 발전하는 모습이 돋보임"
  * "적극적인 자세로 ~에 임함", "~분야에서 성장 가능성이 큼"
  * 강점 영역을 부각하고 성장 과정을 기술

- **'중' (보통)**:
  * "성실하게 학교생활에 임함", "꾸준히 노력하는 자세를 보임"
  * "~에서 점차 발전하는 모습을 보임", "~하려는 의지가 있음"
  * 안정적인 면과 성장 가능성을 균형있게 기술

- **'중하' (노력 요함)**:
  * "~에 관심을 갖기 시작함", "조금씩 변화하는 모습이 보임"
  * "~분야에서 잠재력이 있음", "격려와 함께 성장해 나가고 있음"
  * 작은 성취와 노력을 인정하며 발전 방향 제시

- **'하' (많은 노력 요함)**:
  * "순수하고 밝은 성품을 지님", "~에 대한 관심이 싹트고 있음"
  * "따뜻한 관심 속에 변화의 가능성을 보임", "~할 수 있는 잠재력이 있음"
  * 긍정적 특성을 최대한 발굴하여 희망적으로 기술

### 표현 원칙
1. **긍정 우선**: 모든 수준에서 학생의 장점과 긍정적인 면을 먼저 서술합니다.
2. **구체성**: 추상적 표현보다 구체적인 행동이나 상황을 예시로 듭니다.
3. **성장 관점**: 현재 상태보다 성장 과정과 발전 가능성에 초점을 맞춥니다.
4. **개별화**: 같은 수준이라도 학생마다 완전히 다른 내용과 표현을 사용합니다.
5. **미래 지향**: 앞으로의 기대와 격려의 메시지를 반드시 포함합니다.
6. **부정 금지**: 비난, 비교, 부정적 표현은 절대 사용하지 않습니다.

### 권장 표현 예시
- 시작: "밝고 명랑한 성격으로~", "성실하고 책임감 있는 태도로~", "호기심이 많고 탐구적인 자세로~"
- 중간: "특히 ~에서 뛰어난 모습을 보이며", "~활동에 적극적으로 참여하여", "친구들과 ~하는 모습이 인상적임"
- 마무리: "앞으로 ~분야에서의 성장이 기대됨", "지속적인 노력으로 더욱 발전할 것으로 기대됨", "~의 꿈을 향해 나아가길 바람"

## 출력 형식
각 학생별로 아래 형식으로 출력하세요. 번호와 내용만 포함하고 다른 설명은 넣지 마세요.

1번: [행동특성 및 종합의견 내용]
2번: [행동특성 및 종합의견 내용]
...
${studentCount}번: [행동특성 및 종합의견 내용]

이제 ${studentCount}명의 학생에 대해 각 행동 수준에 맞게 풍부하고 구체적인 내용으로 모두 다르게 작성해주세요.`;
}
