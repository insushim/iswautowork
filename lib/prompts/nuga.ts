import { GRADE_CHARACTERISTICS, BEHAVIOR_LEVEL_INFO } from '../curriculum-data';
import { BehaviorLevel, StudentTalents, TalentLevel, NugaCategory } from '@/types';

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

// 카테고리별 한글 라벨
export const NUGA_CATEGORY_LABELS: Record<NugaCategory, string> = {
  school_life: '학교생활',
  learning: '학습태도',
  social: '교우관계',
  character: '인성',
  talent: '특기',
  other: '기타',
};

export function buildNugaPrompt(
  studentCount: number,
  grade: number,
  behaviorLevels: BehaviorLevel[],
  studentTalents?: StudentTalents[],
  categories?: NugaCategory[]
): string {
  const gradeChar = GRADE_CHARACTERISTICS[grade];

  const levelList = behaviorLevels.map((level, idx) => {
    const levelInfo = BEHAVIOR_LEVEL_INFO[level];
    const talentDesc = studentTalents?.[idx] ? getTalentDescription(studentTalents[idx]) : '';
    return `${idx + 1}번: ${levelInfo.label} - ${levelInfo.description}${talentDesc}`;
  }).join('\n');

  // 선택된 카테고리 또는 전체
  const selectedCategories = categories || ['school_life', 'learning', 'social', 'character', 'talent'];
  const categoryGuide = selectedCategories.map(cat => NUGA_CATEGORY_LABELS[cat]).join(', ');

  return `당신은 초등학교 ${grade}학년 담임교사로서 NEIS 시스템에 입력할 '누가기록'을 작성하는 전문가입니다.

## 누가기록이란?
누가기록은 학생의 학교생활을 관찰하여 **개별 문장 단위로** 기록하는 것입니다.
각 문장은 학생의 특정 행동, 태도, 성장을 구체적이고 생생하게 담아야 합니다.
나중에 이 누가기록들을 모아서 '행동특성 및 종합의견'을 작성하게 됩니다.

## 학년 특성
${gradeChar}

## 학생별 행동 수준 (5단계)
${levelList}

## 작성할 영역: ${categoryGuide}

## 각 영역별 작성 가이드

### 1. 학교생활 (school_life)
- 등교 태도, 시간 약속, 정리정돈, 청결 습관
- 학교/학급 규칙 준수, 기본 예절
- 급식 태도, 청소 참여, 안전 생활
- **예시**: "아침에 일찍 등교하여 교실 환기와 정리정돈을 솔선수범하며 하루를 밝게 시작하는 모습이 인상적임."

### 2. 학습태도 (learning)
- 수업 집중력, 적극적 참여, 질문과 발표
- 과제 성실성, 준비물 챙기기
- 탐구심, 독서 습관, 자기주도 학습
- **예시**: "과학 실험 시간에 궁금한 점을 적극적으로 질문하고 실험 결과를 꼼꼼히 기록하며 탐구하는 자세가 돋보임."

### 3. 교우관계 (social)
- 친구와의 관계, 협동심, 배려와 존중
- 갈등 해결, 리더십/팔로워십
- 다양한 친구와 어울리기, 포용력
- **예시**: "모둠 활동에서 친구들의 의견을 경청하고 자신의 생각을 조리 있게 전달하며 원만하게 협력함."

### 4. 인성 (character)
- 정직, 책임감, 성실성
- 자신감, 감정 조절, 회복탄력성
- 공감 능력, 나눔과 봉사
- **예시**: "도움이 필요한 친구에게 먼저 다가가 손을 내밀며 따뜻한 마음씨를 실천으로 보여줌."

### 5. 특기 (talent)
- 운동, 음악, 미술 등 예체능 재능
- 특별한 관심사나 취미
- 창의적 표현력, 진로 관심
- **예시**: "음악 시간에 리코더 연주를 정확한 음정과 리듬으로 표현하며 음악적 감각이 뛰어남."

## 작성 규칙 (필수 준수!)

### 문장 품질 (매우 중요!)
1. **풍성한 문장**: 각 문장은 **40-80자** 정도로 구체적이고 풍부하게 작성합니다.
2. **생생한 묘사**: 추상적 표현 대신 **구체적인 상황, 행동, 결과**를 담습니다.
3. **자연스러운 어조**: 딱딱한 평가보다 **교사가 직접 관찰한 것처럼** 자연스럽게 씁니다.
4. **개별화**: 같은 수준이라도 **학생마다 완전히 다른 상황과 표현**을 사용합니다.

### 문장 구조 예시
❌ 나쁜 예 (너무 짧고 추상적):
"수업에 집중함."
"친구와 잘 지냄."
"책임감이 있음."

✅ 좋은 예 (풍성하고 구체적):
"수업 시간에 선생님의 설명에 귀 기울이며 중요한 내용을 스스로 정리하는 학습 습관이 돋보임."
"쉬는 시간에 혼자 있는 친구를 발견하면 먼저 다가가 말을 건네며 배려하는 마음이 따뜻함."
"학급 도서 관리 역할을 맡아 책 정리와 대출 기록을 꼼꼼히 처리하며 책임감을 발휘함."

### 공문서체 (필수!)
- 모든 문장은 **'~임.', '~함.', '~음.', '~람.'** 등으로 종결합니다.
- 예: "~하는 모습이 인상적임.", "~에 적극적으로 참여함.", "~의 발전이 기대됨."

### 수준별 표현 차별화

#### '상' 수준
- 허용: "뛰어남", "탁월함", "우수함", "돋보임", "두각을 나타냄", "모범이 됨"
- 특징: 구체적 성취 사례, 주변에 미치는 긍정적 영향력 포함

#### '중상' 수준
- 허용: "잘 함", "성실함", "꾸준히 발전함", "적극적임", "강점을 보임"
- 금지: "뛰어남", "탁월함", "두각", "모범"

#### '중' 수준
- 허용: "~에 임함", "노력함", "발전하는 모습", "참여함", "할 수 있음"
- 금지: "뛰어남", "탁월함", "우수함", "돋보임", "두각", "모범"

#### '중하' 수준
- 허용: "관심을 갖기 시작함", "조금씩 변화함", "잠재력이 있음", "성장해 나감"

#### '하' 수준
- 허용: "순수한 성품", "관심이 싹틈", "가능성을 보임", "배우고 있음"

### 금지 사항
1. **영어 사용 금지**: UCC→동영상, SNS→누리소통망 등 한글만 사용
2. **연결어 자제**: "특히", "또한", "그리고" 등은 문장 시작에 사용 금지
3. **부정적 표현 금지**: 비판, 비교, 부정적 언급 절대 불가
4. **초등학생 수준 유지**: 논문, 학술자료 등 부적절한 활동 언급 금지

## 출력 형식

각 학생에 대해 **영역별로 1개씩, 총 ${selectedCategories.length}개의 문장**을 작성합니다.

1번:
[school_life] (문장 내용)
[learning] (문장 내용)
[social] (문장 내용)
[character] (문장 내용)
[talent] (문장 내용 - 예체능 특기가 있는 학생만)

2번:
[school_life] (문장 내용)
...

⚠️ 주의사항:
- 예체능 특기가 없는 학생은 [talent] 항목을 생략합니다.
- 각 문장은 40-80자로 풍성하게 작성합니다.
- 같은 수준이라도 학생마다 완전히 다른 내용을 작성합니다.

이제 ${studentCount}명의 학생에 대해 각 행동 수준에 맞게 누가기록을 작성해주세요.`;
}

/**
 * 누가기록을 종합의견으로 합치는 프롬프트
 */
export function buildCombinePrompt(
  grade: number,
  studentNumber: number,
  sentences: string[],
  behaviorLevel: BehaviorLevel
): string {
  const levelInfo = BEHAVIOR_LEVEL_INFO[behaviorLevel];

  return `당신은 초등학교 ${grade}학년 담임교사입니다.
아래의 누가기록 문장들을 바탕으로 '행동특성 및 종합의견'을 작성해주세요.

## 학생 정보
- 학생 번호: ${studentNumber}번
- 행동 수준: ${levelInfo.label} (${levelInfo.description})

## 누가기록 문장들
${sentences.map((s, i) => `${i + 1}. ${s}`).join('\n')}

## 작성 규칙
1. **분량**: 400-550자, 8-12문장으로 작성
2. **문체**: 공문서체 ('~임.', '~함.', '~음.') 사용
3. **자연스러운 연결**: 위 문장들을 그대로 나열하지 말고, 자연스럽게 연결하고 다듬어서 하나의 종합적인 평가문으로 작성
4. **추가 내용**: 위 문장들을 기반으로 하되, 흐름에 맞게 보충 설명을 추가할 수 있음
5. **마무리**: 앞으로의 성장에 대한 기대와 격려로 마무리

## 출력
번호나 제목 없이 종합의견 내용만 출력하세요.`;
}
