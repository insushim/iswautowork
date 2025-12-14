import { AchievementStandard } from '@/types';

// 2022 개정 교육과정 성취기준 (학년군별 주요 성취기준)
// 실제 성취기준 코드와 내용 기반

export const ACHIEVEMENT_STANDARDS: AchievementStandard[] = [
  // ========== 국어 1-2학년군 ==========
  { code: '[2국01-01]', content: '상황에 어울리는 인사말을 주고받는다.', grade: 1, subject: '국어', domain: '듣기·말하기' },
  { code: '[2국01-02]', content: '일상생활에서 겪은 일이나 바라는 것, 좋아하는 것을 말한다.', grade: 1, subject: '국어', domain: '듣기·말하기' },
  { code: '[2국01-03]', content: '자신의 감정을 표현하며 대화를 나눈다.', grade: 1, subject: '국어', domain: '듣기·말하기' },
  { code: '[2국02-01]', content: '글자, 낱말, 문장을 소리 내어 읽는다.', grade: 1, subject: '국어', domain: '읽기' },
  { code: '[2국02-02]', content: '읽기에 흥미를 가지고 즐겨 읽는 태도를 지닌다.', grade: 1, subject: '국어', domain: '읽기' },
  { code: '[2국03-01]', content: '글자를 바르게 쓴다.', grade: 1, subject: '국어', domain: '쓰기' },
  { code: '[2국03-02]', content: '자신의 생각이나 겪은 일을 문장으로 쓴다.', grade: 2, subject: '국어', domain: '쓰기' },
  { code: '[2국04-01]', content: '한글 자모의 이름과 소릿값을 안다.', grade: 1, subject: '국어', domain: '문법' },
  { code: '[2국05-01]', content: '시, 노래, 이야기에 흥미를 가진다.', grade: 1, subject: '국어', domain: '문학' },

  // ========== 국어 3-4학년군 ==========
  { code: '[4국01-01]', content: '대화의 즐거움을 알고 대화를 나눈다.', grade: 3, subject: '국어', domain: '듣기·말하기' },
  { code: '[4국01-02]', content: '회의에서 의견을 적극적으로 교환한다.', grade: 3, subject: '국어', domain: '듣기·말하기' },
  { code: '[4국01-03]', content: '목적에 따라 알맞은 내용과 매체를 선정하여 발표한다.', grade: 4, subject: '국어', domain: '듣기·말하기' },
  { code: '[4국02-01]', content: '문단과 글의 중심 생각을 파악한다.', grade: 3, subject: '국어', domain: '읽기' },
  { code: '[4국02-02]', content: '글의 유형을 고려하여 대강의 내용을 간추린다.', grade: 3, subject: '국어', domain: '읽기' },
  { code: '[4국02-03]', content: '글에서 낱말의 의미나 생략된 내용을 추론한다.', grade: 4, subject: '국어', domain: '읽기' },
  { code: '[4국03-01]', content: '중심 문장과 뒷받침 문장을 갖추어 문단을 쓴다.', grade: 3, subject: '국어', domain: '쓰기' },
  { code: '[4국03-02]', content: '목적과 주제를 고려하여 내용을 마련한다.', grade: 4, subject: '국어', domain: '쓰기' },
  { code: '[4국04-01]', content: '낱말을 분류하고 국어사전에서 낱말을 찾는다.', grade: 3, subject: '국어', domain: '문법' },
  { code: '[4국05-01]', content: '시를 읽고 느낌과 생각을 다양하게 표현한다.', grade: 3, subject: '국어', domain: '문학' },
  { code: '[4국05-02]', content: '인물, 사건, 배경에 주목하며 작품을 이해한다.', grade: 4, subject: '국어', domain: '문학' },

  // ========== 국어 5-6학년군 ==========
  { code: '[6국01-01]', content: '의견을 제시하고 함께 조정하며 토의한다.', grade: 5, subject: '국어', domain: '듣기·말하기' },
  { code: '[6국01-02]', content: '절차와 규칙을 지키며 토론한다.', grade: 5, subject: '국어', domain: '듣기·말하기' },
  { code: '[6국01-03]', content: '목적과 상황에 맞게 내용을 구성하여 발표한다.', grade: 6, subject: '국어', domain: '듣기·말하기' },
  { code: '[6국02-01]', content: '글의 구조를 고려하여 글 전체의 내용을 요약한다.', grade: 5, subject: '국어', domain: '읽기' },
  { code: '[6국02-02]', content: '글에 담긴 다양한 관점과 표현 방법을 평가한다.', grade: 6, subject: '국어', domain: '읽기' },
  { code: '[6국03-01]', content: '목적이나 주제에 따라 알맞은 내용과 매체를 선정한다.', grade: 5, subject: '국어', domain: '쓰기' },
  { code: '[6국03-02]', content: '독자를 존중하고 배려하며 글을 쓴다.', grade: 6, subject: '국어', domain: '쓰기' },
  { code: '[6국04-01]', content: '언어는 생각을 표현하며 사고력을 발달시킴을 이해한다.', grade: 5, subject: '국어', domain: '문법' },
  { code: '[6국05-01]', content: '문학은 가치 있는 내용을 언어로 표현한 예술임을 이해한다.', grade: 5, subject: '국어', domain: '문학' },

  // ========== 수학 1-2학년군 ==========
  { code: '[2수01-01]', content: '0과 100까지의 수의 개념을 이해하고 수를 세고 쓸 수 있다.', grade: 1, subject: '수학', domain: '수와 연산' },
  { code: '[2수01-02]', content: '하나의 수를 두 수로 가르거나 두 수를 하나의 수로 모을 수 있다.', grade: 1, subject: '수학', domain: '수와 연산' },
  { code: '[2수01-03]', content: '두 자리 수의 범위에서 덧셈과 뺄셈의 계산 원리를 이해한다.', grade: 2, subject: '수학', domain: '수와 연산' },
  { code: '[2수02-01]', content: '구체물의 길이, 들이, 무게, 넓이를 비교할 수 있다.', grade: 1, subject: '수학', domain: '도형과 측정' },
  { code: '[2수02-02]', content: '시계를 보고 시각을 읽을 수 있다.', grade: 2, subject: '수학', domain: '도형과 측정' },
  { code: '[2수03-01]', content: '교실 및 생활 주변에서 여러 가지 물건을 관찰하여 삼각형, 사각형, 원의 모양을 찾을 수 있다.', grade: 1, subject: '수학', domain: '도형과 측정' },
  { code: '[2수04-01]', content: '분류한 자료를 표나 그림그래프로 나타낼 수 있다.', grade: 2, subject: '수학', domain: '자료와 가능성' },

  // ========== 수학 3-4학년군 ==========
  { code: '[4수01-01]', content: '큰 수의 자릿값과 위치적 기수법을 이해하고, 수를 읽고 쓸 수 있다.', grade: 3, subject: '수학', domain: '수와 연산' },
  { code: '[4수01-02]', content: '세 자리 수의 덧셈과 뺄셈의 계산 원리를 이해하고 계산할 수 있다.', grade: 3, subject: '수학', domain: '수와 연산' },
  { code: '[4수01-03]', content: '곱셈과 나눗셈의 관계를 이해한다.', grade: 3, subject: '수학', domain: '수와 연산' },
  { code: '[4수01-04]', content: '분수의 개념과 그 표현을 이해한다.', grade: 3, subject: '수학', domain: '수와 연산' },
  { code: '[4수01-05]', content: '소수의 개념과 그 표현을 이해한다.', grade: 4, subject: '수학', domain: '수와 연산' },
  { code: '[4수02-01]', content: '1cm, 1m, 1km의 단위를 알고, 실생활에서 길이를 어림하고 측정할 수 있다.', grade: 3, subject: '수학', domain: '도형과 측정' },
  { code: '[4수02-02]', content: '평면도형의 이동을 이해한다.', grade: 4, subject: '수학', domain: '도형과 측정' },
  { code: '[4수03-01]', content: '규칙을 찾아 설명하고, 그 규칙을 수나 식으로 나타낼 수 있다.', grade: 4, subject: '수학', domain: '변화와 관계' },
  { code: '[4수04-01]', content: '막대그래프와 꺾은선그래프를 그릴 수 있다.', grade: 4, subject: '수학', domain: '자료와 가능성' },

  // ========== 수학 5-6학년군 ==========
  { code: '[6수01-01]', content: '약수와 배수의 관계를 이해한다.', grade: 5, subject: '수학', domain: '수와 연산' },
  { code: '[6수01-02]', content: '분수의 나눗셈의 계산 원리를 이해하고 계산할 수 있다.', grade: 6, subject: '수학', domain: '수와 연산' },
  { code: '[6수01-03]', content: '소수의 나눗셈의 계산 원리를 이해하고 계산할 수 있다.', grade: 6, subject: '수학', domain: '수와 연산' },
  { code: '[6수02-01]', content: '직육면체와 정육면체의 성질을 이해한다.', grade: 5, subject: '수학', domain: '도형과 측정' },
  { code: '[6수02-02]', content: '원주와 원의 넓이를 구하는 방법을 이해하고 구할 수 있다.', grade: 6, subject: '수학', domain: '도형과 측정' },
  { code: '[6수03-01]', content: '비와 비율의 개념을 이해하고, 그 관계를 탐구한다.', grade: 6, subject: '수학', domain: '변화와 관계' },
  { code: '[6수04-01]', content: '평균의 의미를 알고, 주어진 자료의 평균을 구할 수 있다.', grade: 5, subject: '수학', domain: '자료와 가능성' },
  { code: '[6수04-02]', content: '실생활 자료를 수집하여 그래프로 나타내고 해석할 수 있다.', grade: 6, subject: '수학', domain: '자료와 가능성' },

  // ========== 사회 3-4학년군 ==========
  { code: '[4사01-01]', content: '우리 고장의 위치를 다양한 방법으로 표현한다.', grade: 3, subject: '사회', domain: '지리 인식' },
  { code: '[4사01-02]', content: '우리 고장의 자연환경과 인문환경의 모습을 파악한다.', grade: 3, subject: '사회', domain: '지리 인식' },
  { code: '[4사02-01]', content: '촌락과 도시의 공통점과 차이점을 비교하여 파악한다.', grade: 4, subject: '사회', domain: '지리 인식' },
  { code: '[4사03-01]', content: '지역의 위치와 특성을 파악한다.', grade: 4, subject: '사회', domain: '지리 인식' },
  { code: '[4사04-01]', content: '민주주의의 의미와 중요성을 파악한다.', grade: 4, subject: '사회', domain: '일반사회' },

  // ========== 사회 5-6학년군 ==========
  { code: '[6사01-01]', content: '우리 국토의 위치와 영역을 이해한다.', grade: 5, subject: '사회', domain: '지리 인식' },
  { code: '[6사02-01]', content: '우리나라 경제 성장 과정에서 나타난 사회 변화를 파악한다.', grade: 5, subject: '사회', domain: '일반사회' },
  { code: '[6사03-01]', content: '우리나라의 정치 발전 과정을 이해한다.', grade: 6, subject: '사회', domain: '역사' },
  { code: '[6사04-01]', content: '세계화와 정보화로 달라진 생활 모습을 탐색한다.', grade: 6, subject: '사회', domain: '일반사회' },

  // ========== 과학 3-4학년군 ==========
  { code: '[4과01-01]', content: '과학자처럼 관찰하고 탐구하는 방법을 익힌다.', grade: 3, subject: '과학', domain: '과학탐구' },
  { code: '[4과02-01]', content: '물질의 성질을 관찰하고 분류한다.', grade: 3, subject: '과학', domain: '물질' },
  { code: '[4과03-01]', content: '동물의 생김새와 생활 방식을 관찰하고 특징을 설명한다.', grade: 3, subject: '과학', domain: '생명' },
  { code: '[4과04-01]', content: '지구의 모양과 표면의 모습을 이해한다.', grade: 3, subject: '과학', domain: '지구와 우주' },
  { code: '[4과05-01]', content: '물체의 운동을 관찰하고 속력을 비교한다.', grade: 4, subject: '과학', domain: '운동과 에너지' },

  // ========== 과학 5-6학년군 ==========
  { code: '[6과01-01]', content: '온도와 열의 관계를 이해한다.', grade: 5, subject: '과학', domain: '물질' },
  { code: '[6과02-01]', content: '다양한 생물의 생활 방식을 탐구한다.', grade: 5, subject: '과학', domain: '생명' },
  { code: '[6과03-01]', content: '날씨와 우리 생활의 관계를 이해한다.', grade: 5, subject: '과학', domain: '지구와 우주' },
  { code: '[6과04-01]', content: '빛의 성질을 이해하고 활용한다.', grade: 6, subject: '과학', domain: '운동과 에너지' },
  { code: '[6과05-01]', content: '여러 가지 기체의 성질을 알아본다.', grade: 6, subject: '과학', domain: '물질' },

  // ========== 영어 3-4학년군 ==========
  { code: '[4영01-01]', content: '알파벳 대소문자를 식별한다.', grade: 3, subject: '영어', domain: '듣기' },
  { code: '[4영01-02]', content: '쉽고 간단한 낱말이나 어구의 의미를 이해한다.', grade: 3, subject: '영어', domain: '듣기' },
  { code: '[4영02-01]', content: '실물이나 그림을 보고 쉽고 간단한 낱말로 말한다.', grade: 3, subject: '영어', domain: '말하기' },
  { code: '[4영03-01]', content: '소리와 철자의 관계를 이해하며 낱말을 읽는다.', grade: 3, subject: '영어', domain: '읽기' },
  { code: '[4영04-01]', content: '알파벳 대소문자를 구별하여 쓴다.', grade: 3, subject: '영어', domain: '쓰기' },

  // ========== 영어 5-6학년군 ==========
  { code: '[6영01-01]', content: '쉽고 간단한 문장을 듣고 의미를 이해한다.', grade: 5, subject: '영어', domain: '듣기' },
  { code: '[6영02-01]', content: '간단한 문장으로 자신을 소개할 수 있다.', grade: 5, subject: '영어', domain: '말하기' },
  { code: '[6영03-01]', content: '쉽고 간단한 문장을 읽고 의미를 이해한다.', grade: 5, subject: '영어', domain: '읽기' },
  { code: '[6영04-01]', content: '쉽고 간단한 낱말이나 어구를 따라 쓴다.', grade: 5, subject: '영어', domain: '쓰기' },
  { code: '[6영04-02]', content: '자신의 생각이나 느낌을 문장으로 쓴다.', grade: 6, subject: '영어', domain: '쓰기' },

  // ========== 도덕 3-4학년군 ==========
  { code: '[4도01-01]', content: '정직의 의미와 중요성을 알고 생활 속에서 정직하게 행동한다.', grade: 3, subject: '도덕', domain: '자신과의 관계' },
  { code: '[4도02-01]', content: '가정에서 예절을 지키며 가족을 존중하고 사랑한다.', grade: 3, subject: '도덕', domain: '타인과의 관계' },
  { code: '[4도03-01]', content: '공익과 공정의 의미를 알고 생활 속에서 실천한다.', grade: 4, subject: '도덕', domain: '사회·공동체와의 관계' },

  // ========== 도덕 5-6학년군 ==========
  { code: '[6도01-01]', content: '자주적인 삶의 의미와 중요성을 알고 자주적인 삶을 실천한다.', grade: 5, subject: '도덕', domain: '자신과의 관계' },
  { code: '[6도02-01]', content: '다양한 상황에서 타인을 배려하고 봉사한다.', grade: 5, subject: '도덕', domain: '타인과의 관계' },
  { code: '[6도03-01]', content: '인권의 소중함을 알고 인권 보호를 실천한다.', grade: 6, subject: '도덕', domain: '사회·공동체와의 관계' },

  // ========== 체육 3-6학년군 ==========
  { code: '[4체01-01]', content: '건강의 의미와 중요성을 이해하고 건강한 생활 습관을 실천한다.', grade: 3, subject: '체육', domain: '건강' },
  { code: '[4체02-01]', content: '여러 가지 도전 활동에 참여하며 도전 정신을 기른다.', grade: 3, subject: '체육', domain: '도전' },
  { code: '[4체03-01]', content: '경쟁 활동에 참여하며 경쟁의 의미와 스포츠맨십을 이해한다.', grade: 4, subject: '체육', domain: '경쟁' },
  { code: '[6체01-01]', content: '체력의 개념과 체력 증진의 중요성을 이해한다.', grade: 5, subject: '체육', domain: '건강' },
  { code: '[6체02-01]', content: '표현 활동의 심미적 특성을 이해하고 창의적으로 표현한다.', grade: 5, subject: '체육', domain: '표현' },

  // ========== 음악 3-6학년군 ==========
  { code: '[4음01-01]', content: '악곡의 특징을 이해하며 노래 부르거나 악기로 연주한다.', grade: 3, subject: '음악', domain: '표현' },
  { code: '[4음02-01]', content: '음악의 구성 요소를 파악하며 음악을 감상한다.', grade: 3, subject: '음악', domain: '감상' },
  { code: '[6음01-01]', content: '바른 자세와 호흡으로 노래 부른다.', grade: 5, subject: '음악', domain: '표현' },
  { code: '[6음02-01]', content: '다양한 음악을 듣고 음악의 아름다움을 느낀다.', grade: 5, subject: '음악', domain: '감상' },

  // ========== 미술 3-6학년군 ==========
  { code: '[4미01-01]', content: '주변 대상을 관찰하여 자신의 느낌과 생각을 표현한다.', grade: 3, subject: '미술', domain: '체험' },
  { code: '[4미02-01]', content: '평면이나 입체에 다양한 표현 방법을 탐색한다.', grade: 3, subject: '미술', domain: '표현' },
  { code: '[6미01-01]', content: '주변 환경에서 시각적 특징을 탐색한다.', grade: 5, subject: '미술', domain: '체험' },
  { code: '[6미02-01]', content: '주제를 탐색하여 작품을 계획하고 표현한다.', grade: 5, subject: '미술', domain: '표현' },

  // ========== 실과 5-6학년군 ==========
  { code: '[6실01-01]', content: '자신과 가족의 관계를 이해하고 긍정적인 가족 관계를 형성한다.', grade: 5, subject: '실과', domain: '인간 발달과 가족' },
  { code: '[6실02-01]', content: '건강한 식단을 구성하고 간단한 조리를 실천한다.', grade: 5, subject: '실과', domain: '가정생활과 안전' },
  { code: '[6실03-01]', content: '소프트웨어의 개념과 중요성을 이해한다.', grade: 5, subject: '실과', domain: '기술 활용' },
  { code: '[6실04-01]', content: '생활 속 문제 해결을 위한 창의적 제품을 구상한다.', grade: 6, subject: '실과', domain: '기술 활용' },

  // ========== 바른 생활 1-2학년군 ==========
  { code: '[2바01-01]', content: '학교생활에 필요한 규칙과 약속을 정하여 지킨다.', grade: 1, subject: '바른 생활', domain: '학교생활' },
  { code: '[2바02-01]', content: '가족의 소중함을 알고 서로 존중하며 생활한다.', grade: 1, subject: '바른 생활', domain: '가정생활' },
  { code: '[2바03-01]', content: '공공장소에서 지켜야 할 예절을 알고 지킨다.', grade: 2, subject: '바른 생활', domain: '사회생활' },

  // ========== 슬기로운 생활 1-2학년군 ==========
  { code: '[2슬01-01]', content: '학교의 여러 장소의 위치와 역할을 알아본다.', grade: 1, subject: '슬기로운 생활', domain: '학교와 나' },
  { code: '[2슬02-01]', content: '가족 구성원을 알고 가정에서 하는 일을 알아본다.', grade: 1, subject: '슬기로운 생활', domain: '가정과 나' },
  { code: '[2슬03-01]', content: '계절에 따른 자연의 변화를 관찰한다.', grade: 2, subject: '슬기로운 생활', domain: '자연과 나' },

  // ========== 즐거운 생활 1-2학년군 ==========
  { code: '[2즐01-01]', content: '학교생활을 소재로 다양한 놀이와 표현을 한다.', grade: 1, subject: '즐거운 생활', domain: '표현활동' },
  { code: '[2즐02-01]', content: '주변의 자연과 생활에서 아름다움을 느끼고 표현한다.', grade: 1, subject: '즐거운 생활', domain: '감상활동' },
  { code: '[2즐03-01]', content: '친구와 함께 하는 다양한 놀이를 경험한다.', grade: 2, subject: '즐거운 생활', domain: '놀이활동' },
];

// 학년과 교과로 성취기준 필터링
export function getAchievementStandardsBySubject(grade: number, subjectName: string): AchievementStandard[] {
  const gradeGroup = grade <= 2 ? [1, 2] : grade <= 4 ? [3, 4] : [5, 6];
  return ACHIEVEMENT_STANDARDS.filter(
    std => gradeGroup.includes(std.grade) && std.subject === subjectName
  );
}

// 교과 코드로 교과명 변환
export function getSubjectNameFromCode(code: string): string {
  const mapping: Record<string, string> = {
    'korean_12': '국어', 'korean_34': '국어', 'korean_56': '국어',
    'math_12': '수학', 'math_34': '수학', 'math_56': '수학',
    'social_34': '사회', 'social_56': '사회',
    'science_34': '과학', 'science_56': '과학',
    'english_34': '영어', 'english_56': '영어',
    'moral_34': '도덕', 'moral_56': '도덕',
    'pe_34': '체육', 'pe_56': '체육',
    'music_34': '음악', 'music_56': '음악',
    'art_34': '미술', 'art_56': '미술',
    'practical_arts': '실과',
    'righteous_life': '바른 생활',
    'wise_life': '슬기로운 생활',
    'pleasant_life': '즐거운 생활',
  };
  return mapping[code] || '국어';
}
