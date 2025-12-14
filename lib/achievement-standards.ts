import { AchievementStandard } from '@/types';

// 2022 개정 교육과정 성취기준 (학년군별 주요 성취기준)
// 실제 성취기준 코드와 내용 기반

export const ACHIEVEMENT_STANDARDS: AchievementStandard[] = [
  // ========== 국어 1-2학년군 (1학기) ==========
  { code: '[2국01-01]', content: '상황에 어울리는 인사말을 주고받는다.', grade: 1, subject: '국어', domain: '듣기·말하기' },
  { code: '[2국01-02]', content: '일상생활에서 겪은 일이나 바라는 것, 좋아하는 것을 말한다.', grade: 1, subject: '국어', domain: '듣기·말하기' },
  { code: '[2국01-03]', content: '자신의 감정을 표현하며 대화를 나눈다.', grade: 1, subject: '국어', domain: '듣기·말하기' },
  { code: '[2국01-04]', content: '듣는 이를 바라보며 바른 자세로 말한다.', grade: 1, subject: '국어', domain: '듣기·말하기' },
  { code: '[2국02-01]', content: '글자, 낱말, 문장을 소리 내어 읽는다.', grade: 1, subject: '국어', domain: '읽기' },
  { code: '[2국02-02]', content: '읽기에 흥미를 가지고 즐겨 읽는 태도를 지닌다.', grade: 1, subject: '국어', domain: '읽기' },
  { code: '[2국02-03]', content: '글을 읽고 중요한 내용을 확인한다.', grade: 1, subject: '국어', domain: '읽기' },
  { code: '[2국03-01]', content: '글자를 바르게 쓴다.', grade: 1, subject: '국어', domain: '쓰기' },
  { code: '[2국03-02]', content: '자신의 생각을 문장으로 표현한다.', grade: 1, subject: '국어', domain: '쓰기' },
  { code: '[2국04-01]', content: '한글 자모의 이름과 소릿값을 안다.', grade: 1, subject: '국어', domain: '문법' },
  { code: '[2국04-02]', content: '소리와 표기가 다를 수 있음을 이해한다.', grade: 1, subject: '국어', domain: '문법' },
  { code: '[2국05-01]', content: '시, 노래, 이야기에 흥미를 가진다.', grade: 1, subject: '국어', domain: '문학' },
  { code: '[2국05-02]', content: '인물의 모습, 행동, 마음을 상상한다.', grade: 1, subject: '국어', domain: '문학' },

  // ========== 국어 1-2학년군 (2학기) ==========
  { code: '[2국01-05]', content: '말하는 이의 말을 집중하여 듣는다.', grade: 2, subject: '국어', domain: '듣기·말하기' },
  { code: '[2국01-06]', content: '바르고 고운 말을 사용하여 대화한다.', grade: 2, subject: '국어', domain: '듣기·말하기' },
  { code: '[2국02-04]', content: '글을 읽고 인물의 처지와 마음을 이해한다.', grade: 2, subject: '국어', domain: '읽기' },
  { code: '[2국02-05]', content: '글의 내용을 자신의 경험과 관련짓는다.', grade: 2, subject: '국어', domain: '읽기' },
  { code: '[2국03-03]', content: '자신의 생각이나 겪은 일을 문장으로 쓴다.', grade: 2, subject: '국어', domain: '쓰기' },
  { code: '[2국03-04]', content: '겪은 일을 떠올려 간단한 글로 쓴다.', grade: 2, subject: '국어', domain: '쓰기' },
  { code: '[2국04-03]', content: '문장에 따라 알맞은 문장 부호를 사용한다.', grade: 2, subject: '국어', domain: '문법' },
  { code: '[2국05-03]', content: '일이 일어난 차례를 파악한다.', grade: 2, subject: '국어', domain: '문학' },
  { code: '[2국05-04]', content: '자신의 생각이나 겪은 일을 시나 노래로 표현한다.', grade: 2, subject: '국어', domain: '문학' },

  // ========== 국어 3-4학년군 (1학기) ==========
  { code: '[4국01-01]', content: '대화의 즐거움을 알고 대화를 나눈다.', grade: 3, subject: '국어', domain: '듣기·말하기' },
  { code: '[4국01-02]', content: '회의에서 의견을 적극적으로 교환한다.', grade: 3, subject: '국어', domain: '듣기·말하기' },
  { code: '[4국01-03]', content: '상대의 말을 집중하여 듣고 내용을 확인한다.', grade: 3, subject: '국어', domain: '듣기·말하기' },
  { code: '[4국01-04]', content: '적절한 이유나 근거를 들어 자신의 의견을 말한다.', grade: 3, subject: '국어', domain: '듣기·말하기' },
  { code: '[4국02-01]', content: '문단과 글의 중심 생각을 파악한다.', grade: 3, subject: '국어', domain: '읽기' },
  { code: '[4국02-02]', content: '글의 유형을 고려하여 대강의 내용을 간추린다.', grade: 3, subject: '국어', domain: '읽기' },
  { code: '[4국02-03]', content: '글에서 낱말의 의미나 생략된 내용을 추론한다.', grade: 3, subject: '국어', domain: '읽기' },
  { code: '[4국03-01]', content: '중심 문장과 뒷받침 문장을 갖추어 문단을 쓴다.', grade: 3, subject: '국어', domain: '쓰기' },
  { code: '[4국03-02]', content: '읽는 이를 고려하여 자신의 마음을 표현하는 글을 쓴다.', grade: 3, subject: '국어', domain: '쓰기' },
  { code: '[4국04-01]', content: '낱말을 분류하고 국어사전에서 낱말을 찾는다.', grade: 3, subject: '국어', domain: '문법' },
  { code: '[4국04-02]', content: '높임 표현을 상황에 알맞게 사용한다.', grade: 3, subject: '국어', domain: '문법' },
  { code: '[4국05-01]', content: '시를 읽고 느낌과 생각을 다양하게 표현한다.', grade: 3, subject: '국어', domain: '문학' },
  { code: '[4국05-02]', content: '인물, 사건, 배경에 주목하며 작품을 이해한다.', grade: 3, subject: '국어', domain: '문학' },

  // ========== 국어 3-4학년군 (2학기) ==========
  { code: '[4국01-05]', content: '목적에 따라 알맞은 내용과 매체를 선정하여 발표한다.', grade: 4, subject: '국어', domain: '듣기·말하기' },
  { code: '[4국01-06]', content: '예절을 지키며 회의한다.', grade: 4, subject: '국어', domain: '듣기·말하기' },
  { code: '[4국02-04]', content: '글을 읽고 사실과 의견을 구별한다.', grade: 4, subject: '국어', domain: '읽기' },
  { code: '[4국02-05]', content: '읽기 경험을 바탕으로 독서 습관을 기른다.', grade: 4, subject: '국어', domain: '읽기' },
  { code: '[4국03-03]', content: '목적과 주제를 고려하여 내용을 마련한다.', grade: 4, subject: '국어', domain: '쓰기' },
  { code: '[4국03-04]', content: '관심 있는 주제에 대해 자신의 의견이 드러나게 글을 쓴다.', grade: 4, subject: '국어', domain: '쓰기' },
  { code: '[4국04-03]', content: '기본적인 문장 성분을 이해한다.', grade: 4, subject: '국어', domain: '문법' },
  { code: '[4국05-03]', content: '이야기의 흐름을 파악하여 내용을 간추린다.', grade: 4, subject: '국어', domain: '문학' },
  { code: '[4국05-04]', content: '작품을 듣거나 읽고 떠오른 느낌과 생각을 다양하게 표현한다.', grade: 4, subject: '국어', domain: '문학' },

  // ========== 국어 5-6학년군 (1학기) ==========
  { code: '[6국01-01]', content: '의견을 제시하고 함께 조정하며 토의한다.', grade: 5, subject: '국어', domain: '듣기·말하기' },
  { code: '[6국01-02]', content: '절차와 규칙을 지키며 토론한다.', grade: 5, subject: '국어', domain: '듣기·말하기' },
  { code: '[6국01-03]', content: '목적과 상황에 맞게 내용을 구성하여 발표한다.', grade: 5, subject: '국어', domain: '듣기·말하기' },
  { code: '[6국01-04]', content: '적절한 표정, 몸짓, 말투로 말한다.', grade: 5, subject: '국어', domain: '듣기·말하기' },
  { code: '[6국02-01]', content: '글의 구조를 고려하여 글 전체의 내용을 요약한다.', grade: 5, subject: '국어', domain: '읽기' },
  { code: '[6국02-02]', content: '읽기 경험과 느낌을 다른 사람과 나누는 활동에 참여한다.', grade: 5, subject: '국어', domain: '읽기' },
  { code: '[6국02-03]', content: '글을 읽고 내용의 타당성과 표현의 적절성을 판단한다.', grade: 5, subject: '국어', domain: '읽기' },
  { code: '[6국03-01]', content: '목적이나 주제에 따라 알맞은 내용과 매체를 선정한다.', grade: 5, subject: '국어', domain: '쓰기' },
  { code: '[6국03-02]', content: '적절한 근거와 알맞은 표현을 사용하여 주장하는 글을 쓴다.', grade: 5, subject: '국어', domain: '쓰기' },
  { code: '[6국03-03]', content: '체험한 일에 대한 감상을 글로 표현한다.', grade: 5, subject: '국어', domain: '쓰기' },
  { code: '[6국04-01]', content: '언어는 생각을 표현하며 사고력을 발달시킴을 이해한다.', grade: 5, subject: '국어', domain: '문법' },
  { code: '[6국04-02]', content: '낱말이 상황에 따라 다양하게 해석됨을 이해한다.', grade: 5, subject: '국어', domain: '문법' },
  { code: '[6국05-01]', content: '문학은 가치 있는 내용을 언어로 표현한 예술임을 이해한다.', grade: 5, subject: '국어', domain: '문학' },
  { code: '[6국05-02]', content: '작품 속 세계와 현실 세계를 비교하며 작품을 감상한다.', grade: 5, subject: '국어', domain: '문학' },
  { code: '[6국05-03]', content: '비유적 표현의 특성과 효과를 살려 작품을 쓴다.', grade: 5, subject: '국어', domain: '문학' },

  // ========== 국어 5-6학년군 (2학기) ==========
  { code: '[6국01-05]', content: '매체 자료를 활용하여 내용을 효과적으로 발표한다.', grade: 6, subject: '국어', domain: '듣기·말하기' },
  { code: '[6국01-06]', content: '드라마의 일부를 바꾸어 표현한다.', grade: 6, subject: '국어', domain: '듣기·말하기' },
  { code: '[6국01-07]', content: '상대를 배려하며 조언하는 대화를 나눈다.', grade: 6, subject: '국어', domain: '듣기·말하기' },
  { code: '[6국02-04]', content: '글에 담긴 다양한 관점과 표현 방법을 평가한다.', grade: 6, subject: '국어', domain: '읽기' },
  { code: '[6국02-05]', content: '자신의 읽기 습관을 점검하고 스스로 글을 찾아 읽는다.', grade: 6, subject: '국어', domain: '읽기' },
  { code: '[6국02-06]', content: '다양한 관점에서 글의 내용을 비판적으로 읽는다.', grade: 6, subject: '국어', domain: '읽기' },
  { code: '[6국03-04]', content: '독자를 존중하고 배려하며 글을 쓴다.', grade: 6, subject: '국어', domain: '쓰기' },
  { code: '[6국03-05]', content: '글을 읽고 자신의 의견을 논리적으로 쓴다.', grade: 6, subject: '국어', domain: '쓰기' },
  { code: '[6국03-06]', content: '쓰기 과정을 점검하고 고쳐 쓴다.', grade: 6, subject: '국어', domain: '쓰기' },
  { code: '[6국04-03]', content: '높임법과 높임 표현을 상황에 맞게 사용한다.', grade: 6, subject: '국어', domain: '문법' },
  { code: '[6국04-04]', content: '한글의 창제 원리와 우수성을 탐구한다.', grade: 6, subject: '국어', domain: '문법' },
  { code: '[6국05-04]', content: '일상생활의 경험을 시나 이야기로 표현한다.', grade: 6, subject: '국어', domain: '문학' },
  { code: '[6국05-05]', content: '작품에 대한 이해와 감상을 바탕으로 다른 사람과 소통한다.', grade: 6, subject: '국어', domain: '문학' },
  { code: '[6국05-06]', content: '관용 표현과 속담을 이해하고 적절하게 활용한다.', grade: 6, subject: '국어', domain: '문학' },

  // ========== 수학 1-2학년군 (1학기) ==========
  { code: '[2수01-01]', content: '0과 100까지의 수의 개념을 이해하고 수를 세고 쓸 수 있다.', grade: 1, subject: '수학', domain: '수와 연산' },
  { code: '[2수01-02]', content: '하나의 수를 두 수로 가르거나 두 수를 하나의 수로 모을 수 있다.', grade: 1, subject: '수학', domain: '수와 연산' },
  { code: '[2수01-03]', content: '덧셈과 뺄셈이 이루어지는 실생활 상황을 통해 덧셈과 뺄셈의 의미를 안다.', grade: 1, subject: '수학', domain: '수와 연산' },
  { code: '[2수01-04]', content: '한 자리 수의 덧셈과 뺄셈을 할 수 있다.', grade: 1, subject: '수학', domain: '수와 연산' },
  { code: '[2수02-01]', content: '구체물의 길이, 들이, 무게, 넓이를 비교할 수 있다.', grade: 1, subject: '수학', domain: '도형과 측정' },
  { code: '[2수02-02]', content: '양의 비교 결과를 말로 표현할 수 있다.', grade: 1, subject: '수학', domain: '도형과 측정' },
  { code: '[2수03-01]', content: '교실 및 생활 주변에서 여러 가지 물건을 관찰하여 삼각형, 사각형, 원의 모양을 찾을 수 있다.', grade: 1, subject: '수학', domain: '도형과 측정' },
  { code: '[2수03-02]', content: '삼각형, 사각형, 원의 모양을 이용하여 여러 가지 모양을 꾸밀 수 있다.', grade: 1, subject: '수학', domain: '도형과 측정' },

  // ========== 수학 1-2학년군 (2학기) ==========
  { code: '[2수01-05]', content: '두 자리 수의 범위에서 덧셈과 뺄셈의 계산 원리를 이해한다.', grade: 2, subject: '수학', domain: '수와 연산' },
  { code: '[2수01-06]', content: '두 자리 수의 덧셈과 뺄셈을 할 수 있다.', grade: 2, subject: '수학', domain: '수와 연산' },
  { code: '[2수01-07]', content: '곱셈의 의미를 이해하고 곱셈구구를 익힌다.', grade: 2, subject: '수학', domain: '수와 연산' },
  { code: '[2수02-03]', content: '시계를 보고 시각을 읽을 수 있다.', grade: 2, subject: '수학', domain: '도형과 측정' },
  { code: '[2수02-04]', content: '1cm와 1m의 단위를 알고 길이를 측정할 수 있다.', grade: 2, subject: '수학', domain: '도형과 측정' },
  { code: '[2수03-03]', content: '평면도형의 모양을 알고 그 특징을 이해한다.', grade: 2, subject: '수학', domain: '도형과 측정' },
  { code: '[2수04-01]', content: '분류한 자료를 표나 그림그래프로 나타낼 수 있다.', grade: 2, subject: '수학', domain: '자료와 가능성' },
  { code: '[2수04-02]', content: '표나 그림그래프의 내용을 파악할 수 있다.', grade: 2, subject: '수학', domain: '자료와 가능성' },

  // ========== 수학 3-4학년군 (1학기) ==========
  { code: '[4수01-01]', content: '큰 수의 자릿값과 위치적 기수법을 이해하고, 수를 읽고 쓸 수 있다.', grade: 3, subject: '수학', domain: '수와 연산' },
  { code: '[4수01-02]', content: '세 자리 수의 덧셈과 뺄셈의 계산 원리를 이해하고 계산할 수 있다.', grade: 3, subject: '수학', domain: '수와 연산' },
  { code: '[4수01-03]', content: '곱셈과 나눗셈의 관계를 이해한다.', grade: 3, subject: '수학', domain: '수와 연산' },
  { code: '[4수01-04]', content: '두 자리 수와 한 자리 수의 곱셈을 할 수 있다.', grade: 3, subject: '수학', domain: '수와 연산' },
  { code: '[4수01-05]', content: '분수의 개념과 그 표현을 이해한다.', grade: 3, subject: '수학', domain: '수와 연산' },
  { code: '[4수01-06]', content: '단위분수의 크기를 비교할 수 있다.', grade: 3, subject: '수학', domain: '수와 연산' },
  { code: '[4수02-01]', content: '1cm, 1m, 1km의 단위를 알고, 실생활에서 길이를 어림하고 측정할 수 있다.', grade: 3, subject: '수학', domain: '도형과 측정' },
  { code: '[4수02-02]', content: '시간의 덧셈과 뺄셈을 할 수 있다.', grade: 3, subject: '수학', domain: '도형과 측정' },
  { code: '[4수03-01]', content: '직선, 선분, 반직선을 알고 구별할 수 있다.', grade: 3, subject: '수학', domain: '도형과 측정' },
  { code: '[4수03-02]', content: '각을 이해하고 직각을 알 수 있다.', grade: 3, subject: '수학', domain: '도형과 측정' },

  // ========== 수학 3-4학년군 (2학기) ==========
  { code: '[4수01-07]', content: '세 자리 수의 곱셈을 할 수 있다.', grade: 4, subject: '수학', domain: '수와 연산' },
  { code: '[4수01-08]', content: '두 자리 수의 나눗셈을 할 수 있다.', grade: 4, subject: '수학', domain: '수와 연산' },
  { code: '[4수01-09]', content: '소수의 개념과 그 표현을 이해한다.', grade: 4, subject: '수학', domain: '수와 연산' },
  { code: '[4수01-10]', content: '분모가 같은 분수의 덧셈과 뺄셈을 할 수 있다.', grade: 4, subject: '수학', domain: '수와 연산' },
  { code: '[4수02-03]', content: '평면도형의 이동을 이해한다.', grade: 4, subject: '수학', domain: '도형과 측정' },
  { code: '[4수02-04]', content: '각도의 단위를 이해하고 각도기로 각을 측정할 수 있다.', grade: 4, subject: '수학', domain: '도형과 측정' },
  { code: '[4수02-05]', content: '삼각형과 사각형의 넓이를 구할 수 있다.', grade: 4, subject: '수학', domain: '도형과 측정' },
  { code: '[4수03-03]', content: '규칙을 찾아 설명하고, 그 규칙을 수나 식으로 나타낼 수 있다.', grade: 4, subject: '수학', domain: '변화와 관계' },
  { code: '[4수04-01]', content: '막대그래프와 꺾은선그래프를 그릴 수 있다.', grade: 4, subject: '수학', domain: '자료와 가능성' },
  { code: '[4수04-02]', content: '자료를 수집하여 그래프로 나타내고 해석할 수 있다.', grade: 4, subject: '수학', domain: '자료와 가능성' },

  // ========== 수학 5-6학년군 (1학기) ==========
  { code: '[6수01-01]', content: '약수와 배수의 관계를 이해한다.', grade: 5, subject: '수학', domain: '수와 연산' },
  { code: '[6수01-02]', content: '최대공약수와 최소공배수를 구할 수 있다.', grade: 5, subject: '수학', domain: '수와 연산' },
  { code: '[6수01-03]', content: '약분과 통분을 이해하고 할 수 있다.', grade: 5, subject: '수학', domain: '수와 연산' },
  { code: '[6수01-04]', content: '분모가 다른 분수의 덧셈과 뺄셈을 할 수 있다.', grade: 5, subject: '수학', domain: '수와 연산' },
  { code: '[6수01-05]', content: '분수의 곱셈을 할 수 있다.', grade: 5, subject: '수학', domain: '수와 연산' },
  { code: '[6수01-06]', content: '소수의 곱셈을 할 수 있다.', grade: 5, subject: '수학', domain: '수와 연산' },
  { code: '[6수02-01]', content: '직육면체와 정육면체의 성질을 이해한다.', grade: 5, subject: '수학', domain: '도형과 측정' },
  { code: '[6수02-02]', content: '직육면체의 겉넓이를 구할 수 있다.', grade: 5, subject: '수학', domain: '도형과 측정' },
  { code: '[6수02-03]', content: '합동인 도형의 성질을 이해한다.', grade: 5, subject: '수학', domain: '도형과 측정' },
  { code: '[6수02-04]', content: '다각형의 둘레와 넓이를 구할 수 있다.', grade: 5, subject: '수학', domain: '도형과 측정' },
  { code: '[6수03-01]', content: '대응 관계를 식으로 나타내고 문제를 해결한다.', grade: 5, subject: '수학', domain: '변화와 관계' },
  { code: '[6수04-01]', content: '평균의 의미를 알고, 주어진 자료의 평균을 구할 수 있다.', grade: 5, subject: '수학', domain: '자료와 가능성' },
  { code: '[6수04-02]', content: '가능성을 수로 나타낼 수 있다.', grade: 5, subject: '수학', domain: '자료와 가능성' },

  // ========== 수학 5-6학년군 (2학기) ==========
  { code: '[6수01-07]', content: '분수의 나눗셈의 계산 원리를 이해하고 계산할 수 있다.', grade: 6, subject: '수학', domain: '수와 연산' },
  { code: '[6수01-08]', content: '소수의 나눗셈의 계산 원리를 이해하고 계산할 수 있다.', grade: 6, subject: '수학', domain: '수와 연산' },
  { code: '[6수01-09]', content: '분수와 소수의 혼합 계산을 할 수 있다.', grade: 6, subject: '수학', domain: '수와 연산' },
  { code: '[6수02-05]', content: '원주와 원의 넓이를 구하는 방법을 이해하고 구할 수 있다.', grade: 6, subject: '수학', domain: '도형과 측정' },
  { code: '[6수02-06]', content: '원기둥, 원뿔, 구의 특징을 이해한다.', grade: 6, subject: '수학', domain: '도형과 측정' },
  { code: '[6수02-07]', content: '입체도형의 부피를 구할 수 있다.', grade: 6, subject: '수학', domain: '도형과 측정' },
  { code: '[6수03-02]', content: '비와 비율의 개념을 이해하고, 그 관계를 탐구한다.', grade: 6, subject: '수학', domain: '변화와 관계' },
  { code: '[6수03-03]', content: '비례식과 비례배분을 이해하고 문제를 해결한다.', grade: 6, subject: '수학', domain: '변화와 관계' },
  { code: '[6수03-04]', content: '정비례와 반비례 관계를 이해한다.', grade: 6, subject: '수학', domain: '변화와 관계' },
  { code: '[6수04-03]', content: '실생활 자료를 수집하여 그래프로 나타내고 해석할 수 있다.', grade: 6, subject: '수학', domain: '자료와 가능성' },
  { code: '[6수04-04]', content: '띠그래프와 원그래프를 그릴 수 있다.', grade: 6, subject: '수학', domain: '자료와 가능성' },

  // ========== 사회 3-4학년군 (1학기) ==========
  { code: '[4사01-01]', content: '우리 고장의 위치를 다양한 방법으로 표현한다.', grade: 3, subject: '사회', domain: '지리 인식' },
  { code: '[4사01-02]', content: '우리 고장의 자연환경과 인문환경의 모습을 파악한다.', grade: 3, subject: '사회', domain: '지리 인식' },
  { code: '[4사01-03]', content: '우리 고장의 문화유산을 알아보고 소중히 여기는 태도를 기른다.', grade: 3, subject: '사회', domain: '역사' },
  { code: '[4사01-04]', content: '우리 지역의 중심지와 주민 생활의 관계를 파악한다.', grade: 3, subject: '사회', domain: '지리 인식' },
  { code: '[4사01-05]', content: '지도를 읽고 활용하는 방법을 익힌다.', grade: 3, subject: '사회', domain: '지리 인식' },
  { code: '[4사02-01]', content: '우리 지역의 교통과 통신의 발달 과정을 살펴본다.', grade: 3, subject: '사회', domain: '일반사회' },
  { code: '[4사02-02]', content: '우리 지역의 공공 기관의 역할을 조사한다.', grade: 3, subject: '사회', domain: '일반사회' },

  // ========== 사회 3-4학년군 (2학기) ==========
  { code: '[4사03-01]', content: '촌락과 도시의 공통점과 차이점을 비교하여 파악한다.', grade: 4, subject: '사회', domain: '지리 인식' },
  { code: '[4사03-02]', content: '지역의 위치와 특성을 파악한다.', grade: 4, subject: '사회', domain: '지리 인식' },
  { code: '[4사03-03]', content: '지역 간 교류의 필요성과 방법을 탐구한다.', grade: 4, subject: '사회', domain: '일반사회' },
  { code: '[4사04-01]', content: '민주주의의 의미와 중요성을 파악한다.', grade: 4, subject: '사회', domain: '일반사회' },
  { code: '[4사04-02]', content: '일상생활에서 민주주의를 실천하는 방법을 익힌다.', grade: 4, subject: '사회', domain: '일반사회' },
  { code: '[4사04-03]', content: '주민 자치와 지방 자치의 의미를 이해한다.', grade: 4, subject: '사회', domain: '일반사회' },
  { code: '[4사04-04]', content: '경제활동과 현명한 선택의 중요성을 이해한다.', grade: 4, subject: '사회', domain: '일반사회' },

  // ========== 사회 5-6학년군 (1학기) ==========
  { code: '[6사01-01]', content: '우리 국토의 위치와 영역을 이해한다.', grade: 5, subject: '사회', domain: '지리 인식' },
  { code: '[6사01-02]', content: '우리 국토의 자연환경 특성을 이해한다.', grade: 5, subject: '사회', domain: '지리 인식' },
  { code: '[6사01-03]', content: '우리나라의 인구 분포와 도시 발달 과정을 파악한다.', grade: 5, subject: '사회', domain: '지리 인식' },
  { code: '[6사02-01]', content: '우리나라 경제 성장 과정에서 나타난 사회 변화를 파악한다.', grade: 5, subject: '사회', domain: '일반사회' },
  { code: '[6사02-02]', content: '가계와 기업의 합리적 선택을 탐구한다.', grade: 5, subject: '사회', domain: '일반사회' },
  { code: '[6사02-03]', content: '무역의 필요성과 경제 교류의 중요성을 이해한다.', grade: 5, subject: '사회', domain: '일반사회' },
  { code: '[6사03-01]', content: '삼국의 성립과 발전 과정을 이해한다.', grade: 5, subject: '사회', domain: '역사' },
  { code: '[6사03-02]', content: '통일신라와 발해의 발전 과정을 파악한다.', grade: 5, subject: '사회', domain: '역사' },
  { code: '[6사03-03]', content: '고려의 발전과 대외 관계를 탐구한다.', grade: 5, subject: '사회', domain: '역사' },

  // ========== 사회 5-6학년군 (2학기) ==========
  { code: '[6사04-01]', content: '조선의 건국과 발전 과정을 이해한다.', grade: 6, subject: '사회', domain: '역사' },
  { code: '[6사04-02]', content: '조선 시대 사회와 문화의 특징을 파악한다.', grade: 6, subject: '사회', domain: '역사' },
  { code: '[6사04-03]', content: '근대 국가 수립을 위한 노력과 사회 변화를 탐구한다.', grade: 6, subject: '사회', domain: '역사' },
  { code: '[6사04-04]', content: '일제 강점기 민족 운동의 전개 과정을 이해한다.', grade: 6, subject: '사회', domain: '역사' },
  { code: '[6사05-01]', content: '우리나라의 정치 발전 과정을 이해한다.', grade: 6, subject: '사회', domain: '일반사회' },
  { code: '[6사05-02]', content: '민주주의 발전과 시민 참여의 중요성을 탐구한다.', grade: 6, subject: '사회', domain: '일반사회' },
  { code: '[6사05-03]', content: '세계화와 정보화로 달라진 생활 모습을 탐색한다.', grade: 6, subject: '사회', domain: '일반사회' },
  { code: '[6사05-04]', content: '지구촌의 다양한 문제와 해결 노력을 탐구한다.', grade: 6, subject: '사회', domain: '일반사회' },
  { code: '[6사05-05]', content: '지속 가능한 발전의 의미와 실천 방법을 탐색한다.', grade: 6, subject: '사회', domain: '일반사회' },

  // ========== 과학 3-4학년군 (1학기) ==========
  { code: '[4과01-01]', content: '과학자처럼 관찰하고 탐구하는 방법을 익힌다.', grade: 3, subject: '과학', domain: '과학탐구' },
  { code: '[4과01-02]', content: '관찰과 측정의 중요성을 알고 실험 과정에 적용한다.', grade: 3, subject: '과학', domain: '과학탐구' },
  { code: '[4과02-01]', content: '물질의 성질을 관찰하고 분류한다.', grade: 3, subject: '과학', domain: '물질' },
  { code: '[4과02-02]', content: '액체와 고체를 섞을 때 나타나는 변화를 관찰한다.', grade: 3, subject: '과학', domain: '물질' },
  { code: '[4과02-03]', content: '물의 상태 변화를 탐구한다.', grade: 3, subject: '과학', domain: '물질' },
  { code: '[4과03-01]', content: '동물의 생김새와 생활 방식을 관찰하고 특징을 설명한다.', grade: 3, subject: '과학', domain: '생명' },
  { code: '[4과03-02]', content: '동물을 특징에 따라 분류한다.', grade: 3, subject: '과학', domain: '생명' },
  { code: '[4과04-01]', content: '지구의 모양과 표면의 모습을 이해한다.', grade: 3, subject: '과학', domain: '지구와 우주' },
  { code: '[4과04-02]', content: '지층과 화석의 특징을 탐구한다.', grade: 3, subject: '과학', domain: '지구와 우주' },

  // ========== 과학 3-4학년군 (2학기) ==========
  { code: '[4과05-01]', content: '물체의 운동을 관찰하고 속력을 비교한다.', grade: 4, subject: '과학', domain: '운동과 에너지' },
  { code: '[4과05-02]', content: '자석의 성질을 탐구한다.', grade: 4, subject: '과학', domain: '운동과 에너지' },
  { code: '[4과05-03]', content: '그림자와 거울에 비친 모습을 관찰한다.', grade: 4, subject: '과학', domain: '운동과 에너지' },
  { code: '[4과06-01]', content: '식물의 한살이 과정을 관찰한다.', grade: 4, subject: '과학', domain: '생명' },
  { code: '[4과06-02]', content: '식물을 특징에 따라 분류한다.', grade: 4, subject: '과학', domain: '생명' },
  { code: '[4과06-03]', content: '식물의 생활을 환경과 관련지어 탐구한다.', grade: 4, subject: '과학', domain: '생명' },
  { code: '[4과07-01]', content: '화산 활동과 지진이 일어나는 까닭을 탐구한다.', grade: 4, subject: '과학', domain: '지구와 우주' },
  { code: '[4과07-02]', content: '지표의 변화 과정을 이해한다.', grade: 4, subject: '과학', domain: '지구와 우주' },
  { code: '[4과07-03]', content: '물의 여행을 탐구하고 물의 중요성을 인식한다.', grade: 4, subject: '과학', domain: '지구와 우주' },

  // ========== 과학 5-6학년군 (1학기) ==========
  { code: '[6과01-01]', content: '온도와 열의 관계를 이해한다.', grade: 5, subject: '과학', domain: '물질' },
  { code: '[6과01-02]', content: '용해와 용액의 성질을 탐구한다.', grade: 5, subject: '과학', domain: '물질' },
  { code: '[6과01-03]', content: '산과 염기의 성질을 탐구한다.', grade: 5, subject: '과학', domain: '물질' },
  { code: '[6과02-01]', content: '다양한 생물의 생활 방식을 탐구한다.', grade: 5, subject: '과학', domain: '생명' },
  { code: '[6과02-02]', content: '생태계의 구성 요소와 상호 작용을 이해한다.', grade: 5, subject: '과학', domain: '생명' },
  { code: '[6과02-03]', content: '식물의 구조와 기능을 탐구한다.', grade: 5, subject: '과학', domain: '생명' },
  { code: '[6과03-01]', content: '날씨와 우리 생활의 관계를 이해한다.', grade: 5, subject: '과학', domain: '지구와 우주' },
  { code: '[6과03-02]', content: '태양계 행성의 특징을 탐구한다.', grade: 5, subject: '과학', domain: '지구와 우주' },
  { code: '[6과03-03]', content: '별과 별자리를 관찰하고 특징을 파악한다.', grade: 5, subject: '과학', domain: '지구와 우주' },

  // ========== 과학 5-6학년군 (2학기) ==========
  { code: '[6과04-01]', content: '빛의 성질을 이해하고 활용한다.', grade: 6, subject: '과학', domain: '운동과 에너지' },
  { code: '[6과04-02]', content: '렌즈의 특성을 탐구한다.', grade: 6, subject: '과학', domain: '운동과 에너지' },
  { code: '[6과04-03]', content: '전기 회로를 구성하고 전기의 작용을 이해한다.', grade: 6, subject: '과학', domain: '운동과 에너지' },
  { code: '[6과04-04]', content: '전자석의 성질을 탐구하고 활용한다.', grade: 6, subject: '과학', domain: '운동과 에너지' },
  { code: '[6과05-01]', content: '여러 가지 기체의 성질을 알아본다.', grade: 6, subject: '과학', domain: '물질' },
  { code: '[6과05-02]', content: '연소와 소화의 조건을 탐구한다.', grade: 6, subject: '과학', domain: '물질' },
  { code: '[6과06-01]', content: '우리 몸의 구조와 기능을 탐구한다.', grade: 6, subject: '과학', domain: '생명' },
  { code: '[6과06-02]', content: '인체 각 기관의 유기적 관계를 이해한다.', grade: 6, subject: '과학', domain: '생명' },
  { code: '[6과07-01]', content: '계절의 변화 원인을 탐구한다.', grade: 6, subject: '과학', domain: '지구와 우주' },
  { code: '[6과07-02]', content: '달의 모양 변화와 운동을 관찰한다.', grade: 6, subject: '과학', domain: '지구와 우주' },

  // ========== 영어 3-4학년군 (1학기) ==========
  { code: '[4영01-01]', content: '알파벳 대소문자를 식별한다.', grade: 3, subject: '영어', domain: '듣기' },
  { code: '[4영01-02]', content: '쉽고 간단한 낱말이나 어구의 의미를 이해한다.', grade: 3, subject: '영어', domain: '듣기' },
  { code: '[4영01-03]', content: '쉽고 간단한 문장을 듣고 이해한다.', grade: 3, subject: '영어', domain: '듣기' },
  { code: '[4영02-01]', content: '실물이나 그림을 보고 쉽고 간단한 낱말로 말한다.', grade: 3, subject: '영어', domain: '말하기' },
  { code: '[4영02-02]', content: '한두 문장으로 자신을 소개한다.', grade: 3, subject: '영어', domain: '말하기' },
  { code: '[4영02-03]', content: '일상생활에서 간단한 인사를 나눈다.', grade: 3, subject: '영어', domain: '말하기' },
  { code: '[4영03-01]', content: '소리와 철자의 관계를 이해하며 낱말을 읽는다.', grade: 3, subject: '영어', domain: '읽기' },
  { code: '[4영04-01]', content: '알파벳 대소문자를 구별하여 쓴다.', grade: 3, subject: '영어', domain: '쓰기' },

  // ========== 영어 3-4학년군 (2학기) ==========
  { code: '[4영01-04]', content: '쉽고 간단한 대화를 듣고 이해한다.', grade: 4, subject: '영어', domain: '듣기' },
  { code: '[4영01-05]', content: '간단한 지시나 설명을 듣고 이해한다.', grade: 4, subject: '영어', domain: '듣기' },
  { code: '[4영02-04]', content: '간단한 질문에 답한다.', grade: 4, subject: '영어', domain: '말하기' },
  { code: '[4영02-05]', content: '일상생활에서 사용하는 간단한 표현을 말한다.', grade: 4, subject: '영어', domain: '말하기' },
  { code: '[4영03-02]', content: '쉽고 간단한 문장을 읽고 이해한다.', grade: 4, subject: '영어', domain: '읽기' },
  { code: '[4영03-03]', content: '그림이나 실물과 관련된 문장을 읽고 이해한다.', grade: 4, subject: '영어', domain: '읽기' },
  { code: '[4영04-02]', content: '쉽고 간단한 낱말을 따라 쓴다.', grade: 4, subject: '영어', domain: '쓰기' },
  { code: '[4영04-03]', content: '쉽고 간단한 낱말이나 어구를 보고 쓴다.', grade: 4, subject: '영어', domain: '쓰기' },

  // ========== 영어 5-6학년군 (1학기) ==========
  { code: '[6영01-01]', content: '쉽고 간단한 문장을 듣고 의미를 이해한다.', grade: 5, subject: '영어', domain: '듣기' },
  { code: '[6영01-02]', content: '일상생활 관련 대화를 듣고 세부 정보를 파악한다.', grade: 5, subject: '영어', domain: '듣기' },
  { code: '[6영01-03]', content: '간단한 말이나 대화를 듣고 주제를 파악한다.', grade: 5, subject: '영어', domain: '듣기' },
  { code: '[6영02-01]', content: '간단한 문장으로 자신을 소개할 수 있다.', grade: 5, subject: '영어', domain: '말하기' },
  { code: '[6영02-02]', content: '자신의 일상에 대해 간단히 설명한다.', grade: 5, subject: '영어', domain: '말하기' },
  { code: '[6영02-03]', content: '감정이나 의견을 표현한다.', grade: 5, subject: '영어', domain: '말하기' },
  { code: '[6영03-01]', content: '쉽고 간단한 문장을 읽고 의미를 이해한다.', grade: 5, subject: '영어', domain: '읽기' },
  { code: '[6영03-02]', content: '간단한 글을 읽고 세부 정보를 파악한다.', grade: 5, subject: '영어', domain: '읽기' },
  { code: '[6영04-01]', content: '쉽고 간단한 낱말이나 어구를 따라 쓴다.', grade: 5, subject: '영어', domain: '쓰기' },
  { code: '[6영04-02]', content: '간단한 문장을 완성하여 쓴다.', grade: 5, subject: '영어', domain: '쓰기' },

  // ========== 영어 5-6학년군 (2학기) ==========
  { code: '[6영01-04]', content: '간단한 이야기나 노래를 듣고 내용을 이해한다.', grade: 6, subject: '영어', domain: '듣기' },
  { code: '[6영01-05]', content: '간단한 말이나 대화를 듣고 줄거리를 파악한다.', grade: 6, subject: '영어', domain: '듣기' },
  { code: '[6영02-04]', content: '그림이나 도표에 대해 간단히 설명한다.', grade: 6, subject: '영어', domain: '말하기' },
  { code: '[6영02-05]', content: '간단한 역할극을 수행한다.', grade: 6, subject: '영어', domain: '말하기' },
  { code: '[6영03-03]', content: '간단한 글을 읽고 줄거리를 파악한다.', grade: 6, subject: '영어', domain: '읽기' },
  { code: '[6영03-04]', content: '간단한 글을 읽고 일이 일어난 순서를 파악한다.', grade: 6, subject: '영어', domain: '읽기' },
  { code: '[6영04-03]', content: '자신의 생각이나 느낌을 문장으로 쓴다.', grade: 6, subject: '영어', domain: '쓰기' },
  { code: '[6영04-04]', content: '자신에 대한 간단한 글을 쓴다.', grade: 6, subject: '영어', domain: '쓰기' },
  { code: '[6영04-05]', content: '예시문을 참고하여 간단한 초대, 감사 등의 글을 쓴다.', grade: 6, subject: '영어', domain: '쓰기' },

  // ========== 도덕 3-4학년군 (1학기) ==========
  { code: '[4도01-01]', content: '정직의 의미와 중요성을 알고 생활 속에서 정직하게 행동한다.', grade: 3, subject: '도덕', domain: '자신과의 관계' },
  { code: '[4도01-02]', content: '자신의 장점을 발견하고 소중히 여기며 긍정적인 자아상을 형성한다.', grade: 3, subject: '도덕', domain: '자신과의 관계' },
  { code: '[4도01-03]', content: '자신의 감정을 적절하게 표현하고 조절하는 방법을 익힌다.', grade: 3, subject: '도덕', domain: '자신과의 관계' },
  { code: '[4도02-01]', content: '가정에서 예절을 지키며 가족을 존중하고 사랑한다.', grade: 3, subject: '도덕', domain: '타인과의 관계' },
  { code: '[4도02-02]', content: '친구와 사이좋게 지내며 서로 돕는다.', grade: 3, subject: '도덕', domain: '타인과의 관계' },
  { code: '[4도02-03]', content: '다른 사람의 처지를 이해하고 배려하는 마음을 가진다.', grade: 3, subject: '도덕', domain: '타인과의 관계' },

  // ========== 도덕 3-4학년군 (2학기) ==========
  { code: '[4도03-01]', content: '공익과 공정의 의미를 알고 생활 속에서 실천한다.', grade: 4, subject: '도덕', domain: '사회·공동체와의 관계' },
  { code: '[4도03-02]', content: '규칙과 법의 중요성을 이해하고 준수한다.', grade: 4, subject: '도덕', domain: '사회·공동체와의 관계' },
  { code: '[4도03-03]', content: '나라를 사랑하는 마음을 가진다.', grade: 4, subject: '도덕', domain: '사회·공동체와의 관계' },
  { code: '[4도04-01]', content: '생명의 소중함을 알고 생명을 존중한다.', grade: 4, subject: '도덕', domain: '자연·초월과의 관계' },
  { code: '[4도04-02]', content: '환경의 소중함을 알고 환경 보전에 참여한다.', grade: 4, subject: '도덕', domain: '자연·초월과의 관계' },
  { code: '[4도04-03]', content: '아름다운 마음의 중요성을 알고 가꾼다.', grade: 4, subject: '도덕', domain: '자연·초월과의 관계' },

  // ========== 도덕 5-6학년군 (1학기) ==========
  { code: '[6도01-01]', content: '자주적인 삶의 의미와 중요성을 알고 자주적인 삶을 실천한다.', grade: 5, subject: '도덕', domain: '자신과의 관계' },
  { code: '[6도01-02]', content: '자신의 꿈을 찾아 이를 이루기 위해 노력한다.', grade: 5, subject: '도덕', domain: '자신과의 관계' },
  { code: '[6도01-03]', content: '절제의 의미와 중요성을 알고 실생활에서 실천한다.', grade: 5, subject: '도덕', domain: '자신과의 관계' },
  { code: '[6도02-01]', content: '다양한 상황에서 타인을 배려하고 봉사한다.', grade: 5, subject: '도덕', domain: '타인과의 관계' },
  { code: '[6도02-02]', content: '사이버 공간에서 지켜야 할 예절을 알고 실천한다.', grade: 5, subject: '도덕', domain: '타인과의 관계' },
  { code: '[6도02-03]', content: '갈등을 평화적으로 해결하는 방법을 탐구하고 실천한다.', grade: 5, subject: '도덕', domain: '타인과의 관계' },

  // ========== 도덕 5-6학년군 (2학기) ==========
  { code: '[6도03-01]', content: '인권의 소중함을 알고 인권 보호를 실천한다.', grade: 6, subject: '도덕', domain: '사회·공동체와의 관계' },
  { code: '[6도03-02]', content: '공정한 사회의 의미를 탐구하고 공정한 행동을 실천한다.', grade: 6, subject: '도덕', domain: '사회·공동체와의 관계' },
  { code: '[6도03-03]', content: '통일의 필요성을 알고 통일 의지를 기른다.', grade: 6, subject: '도덕', domain: '사회·공동체와의 관계' },
  { code: '[6도04-01]', content: '생명 윤리의 중요성을 탐구하고 생명을 존중한다.', grade: 6, subject: '도덕', domain: '자연·초월과의 관계' },
  { code: '[6도04-02]', content: '지속가능한 발전의 의미를 알고 환경을 보전한다.', grade: 6, subject: '도덕', domain: '자연·초월과의 관계' },
  { code: '[6도04-03]', content: '다문화 사회의 의미를 이해하고 다양성을 존중한다.', grade: 6, subject: '도덕', domain: '사회·공동체와의 관계' },

  // ========== 체육 3-4학년군 (1학기) ==========
  { code: '[4체01-01]', content: '건강의 의미와 중요성을 이해하고 건강한 생활 습관을 실천한다.', grade: 3, subject: '체육', domain: '건강' },
  { code: '[4체01-02]', content: '건강과 운동의 관계를 이해하고 규칙적으로 운동한다.', grade: 3, subject: '체육', domain: '건강' },
  { code: '[4체01-03]', content: '안전한 생활 습관의 중요성을 이해하고 실천한다.', grade: 3, subject: '체육', domain: '건강' },
  { code: '[4체02-01]', content: '여러 가지 도전 활동에 참여하며 도전 정신을 기른다.', grade: 3, subject: '체육', domain: '도전' },
  { code: '[4체02-02]', content: '기록 도전 활동에 참여하고 자신의 기록을 향상시킨다.', grade: 3, subject: '체육', domain: '도전' },
  { code: '[4체02-03]', content: '동작 도전 활동에 참여하며 꾸준히 연습한다.', grade: 3, subject: '체육', domain: '도전' },

  // ========== 체육 3-4학년군 (2학기) ==========
  { code: '[4체03-01]', content: '경쟁 활동에 참여하며 경쟁의 의미와 스포츠맨십을 이해한다.', grade: 4, subject: '체육', domain: '경쟁' },
  { code: '[4체03-02]', content: '영역형 경쟁 활동에 참여하며 기본 기능을 익힌다.', grade: 4, subject: '체육', domain: '경쟁' },
  { code: '[4체03-03]', content: '필드형 경쟁 활동에 참여하며 협동심을 기른다.', grade: 4, subject: '체육', domain: '경쟁' },
  { code: '[4체04-01]', content: '표현 활동의 특성을 이해하고 다양하게 표현한다.', grade: 4, subject: '체육', domain: '표현' },
  { code: '[4체04-02]', content: '리듬에 맞추어 움직이며 표현력을 기른다.', grade: 4, subject: '체육', domain: '표현' },
  { code: '[4체04-03]', content: '다양한 움직임을 창의적으로 표현한다.', grade: 4, subject: '체육', domain: '표현' },

  // ========== 체육 5-6학년군 (1학기) ==========
  { code: '[6체01-01]', content: '체력의 개념과 체력 증진의 중요성을 이해한다.', grade: 5, subject: '체육', domain: '건강' },
  { code: '[6체01-02]', content: '자신의 체력 수준을 파악하고 체력 증진 계획을 세운다.', grade: 5, subject: '체육', domain: '건강' },
  { code: '[6체01-03]', content: '건강한 생활을 위한 식습관을 형성한다.', grade: 5, subject: '체육', domain: '건강' },
  { code: '[6체02-01]', content: '표현 활동의 심미적 특성을 이해하고 창의적으로 표현한다.', grade: 5, subject: '체육', domain: '표현' },
  { code: '[6체02-02]', content: '민속 표현 활동에 참여하며 전통 문화를 이해한다.', grade: 5, subject: '체육', domain: '표현' },
  { code: '[6체02-03]', content: '주제 표현 활동에 참여하며 협력하여 표현한다.', grade: 5, subject: '체육', domain: '표현' },

  // ========== 체육 5-6학년군 (2학기) ==========
  { code: '[6체03-01]', content: '경쟁 활동에서 전략의 중요성을 이해하고 적용한다.', grade: 6, subject: '체육', domain: '경쟁' },
  { code: '[6체03-02]', content: '네트형 경쟁 활동에 참여하며 규칙을 준수한다.', grade: 6, subject: '체육', domain: '경쟁' },
  { code: '[6체03-03]', content: '팀 경기에서 협력하고 페어플레이 정신을 실천한다.', grade: 6, subject: '체육', domain: '경쟁' },
  { code: '[6체04-01]', content: '여가 활동의 의미와 가치를 이해한다.', grade: 6, subject: '체육', domain: '안전' },
  { code: '[6체04-02]', content: '야외 활동에서 안전 수칙을 지킨다.', grade: 6, subject: '체육', domain: '안전' },
  { code: '[6체04-03]', content: '응급 처치의 기본 방법을 익힌다.', grade: 6, subject: '체육', domain: '안전' },

  // ========== 음악 3-4학년군 (1학기) ==========
  { code: '[4음01-01]', content: '악곡의 특징을 이해하며 노래 부르거나 악기로 연주한다.', grade: 3, subject: '음악', domain: '표현' },
  { code: '[4음01-02]', content: '바른 자세와 호흡으로 노래 부른다.', grade: 3, subject: '음악', domain: '표현' },
  { code: '[4음01-03]', content: '악기 연주법을 익혀 간단한 악곡을 연주한다.', grade: 3, subject: '음악', domain: '표현' },
  { code: '[4음01-04]', content: '제재곡의 리듬과 가락을 표현한다.', grade: 3, subject: '음악', domain: '표현' },
  { code: '[4음02-01]', content: '음악의 구성 요소를 파악하며 음악을 감상한다.', grade: 3, subject: '음악', domain: '감상' },
  { code: '[4음02-02]', content: '음악을 듣고 느낌을 다양하게 표현한다.', grade: 3, subject: '음악', domain: '감상' },

  // ========== 음악 3-4학년군 (2학기) ==========
  { code: '[4음01-05]', content: '간단한 가락을 만들어 표현한다.', grade: 4, subject: '음악', domain: '표현' },
  { code: '[4음01-06]', content: '부분 2부 합창에 참여한다.', grade: 4, subject: '음악', domain: '표현' },
  { code: '[4음01-07]', content: '간단한 합주에 참여한다.', grade: 4, subject: '음악', domain: '표현' },
  { code: '[4음02-03]', content: '우리나라 음악의 특징을 이해하며 감상한다.', grade: 4, subject: '음악', domain: '감상' },
  { code: '[4음02-04]', content: '다양한 나라의 음악을 감상한다.', grade: 4, subject: '음악', domain: '감상' },
  { code: '[4음03-01]', content: '음악과 생활의 관계를 이해한다.', grade: 4, subject: '음악', domain: '생활화' },

  // ========== 음악 5-6학년군 (1학기) ==========
  { code: '[6음01-01]', content: '바른 자세와 호흡으로 노래 부른다.', grade: 5, subject: '음악', domain: '표현' },
  { code: '[6음01-02]', content: '악곡의 특징을 살려 표현한다.', grade: 5, subject: '음악', domain: '표현' },
  { code: '[6음01-03]', content: '2부 합창에 참여하며 화음의 아름다움을 느낀다.', grade: 5, subject: '음악', domain: '표현' },
  { code: '[6음01-04]', content: '간단한 음악을 만들어 표현한다.', grade: 5, subject: '음악', domain: '표현' },
  { code: '[6음02-01]', content: '다양한 음악을 듣고 음악의 아름다움을 느낀다.', grade: 5, subject: '음악', domain: '감상' },
  { code: '[6음02-02]', content: '음악의 역사와 문화적 배경을 이해한다.', grade: 5, subject: '음악', domain: '감상' },

  // ========== 음악 5-6학년군 (2학기) ==========
  { code: '[6음01-05]', content: '다양한 악기를 연주하며 합주에 참여한다.', grade: 6, subject: '음악', domain: '표현' },
  { code: '[6음01-06]', content: '창의적으로 음악을 만들어 발표한다.', grade: 6, subject: '음악', domain: '표현' },
  { code: '[6음02-03]', content: '우리나라 전통 음악의 특징과 가치를 이해한다.', grade: 6, subject: '음악', domain: '감상' },
  { code: '[6음02-04]', content: '세계 여러 나라의 음악을 비교하며 감상한다.', grade: 6, subject: '음악', domain: '감상' },
  { code: '[6음03-01]', content: '음악이 생활에 활용되는 다양한 사례를 탐구한다.', grade: 6, subject: '음악', domain: '생활화' },
  { code: '[6음03-02]', content: '음악 행사에 적극적으로 참여한다.', grade: 6, subject: '음악', domain: '생활화' },

  // ========== 미술 3-4학년군 (1학기) ==========
  { code: '[4미01-01]', content: '주변 대상을 관찰하여 자신의 느낌과 생각을 표현한다.', grade: 3, subject: '미술', domain: '체험' },
  { code: '[4미01-02]', content: '주변 환경에서 색, 형, 질감을 탐색한다.', grade: 3, subject: '미술', domain: '체험' },
  { code: '[4미01-03]', content: '생활 속에서 미술의 역할을 탐색한다.', grade: 3, subject: '미술', domain: '체험' },
  { code: '[4미02-01]', content: '평면이나 입체에 다양한 표현 방법을 탐색한다.', grade: 3, subject: '미술', domain: '표현' },
  { code: '[4미02-02]', content: '다양한 재료와 용구를 활용하여 표현한다.', grade: 3, subject: '미술', domain: '표현' },
  { code: '[4미02-03]', content: '관찰 대상의 특징을 살려 표현한다.', grade: 3, subject: '미술', domain: '표현' },

  // ========== 미술 3-4학년군 (2학기) ==========
  { code: '[4미02-04]', content: '상상의 세계를 다양하게 표현한다.', grade: 4, subject: '미술', domain: '표현' },
  { code: '[4미02-05]', content: '주제를 탐색하여 자유롭게 표현한다.', grade: 4, subject: '미술', domain: '표현' },
  { code: '[4미02-06]', content: '판화, 콜라주 등 다양한 표현 기법을 활용한다.', grade: 4, subject: '미술', domain: '표현' },
  { code: '[4미03-01]', content: '미술 작품을 감상하고 느낌을 발표한다.', grade: 4, subject: '미술', domain: '감상' },
  { code: '[4미03-02]', content: '다양한 시대와 문화의 미술 작품을 감상한다.', grade: 4, subject: '미술', domain: '감상' },
  { code: '[4미03-03]', content: '미술 작품을 비교하며 특징을 탐색한다.', grade: 4, subject: '미술', domain: '감상' },

  // ========== 미술 5-6학년군 (1학기) ==========
  { code: '[6미01-01]', content: '주변 환경에서 시각적 특징을 탐색한다.', grade: 5, subject: '미술', domain: '체험' },
  { code: '[6미01-02]', content: '시각 문화 환경을 탐색하고 비평한다.', grade: 5, subject: '미술', domain: '체험' },
  { code: '[6미01-03]', content: '미술과 다양한 분야의 융합을 탐색한다.', grade: 5, subject: '미술', domain: '체험' },
  { code: '[6미02-01]', content: '주제를 탐색하여 작품을 계획하고 표현한다.', grade: 5, subject: '미술', domain: '표현' },
  { code: '[6미02-02]', content: '다양한 표현 매체를 활용하여 창의적으로 표현한다.', grade: 5, subject: '미술', domain: '표현' },
  { code: '[6미02-03]', content: '조형 원리를 활용하여 표현한다.', grade: 5, subject: '미술', domain: '표현' },

  // ========== 미술 5-6학년군 (2학기) ==========
  { code: '[6미02-04]', content: '디자인의 기본 요소와 원리를 활용하여 표현한다.', grade: 6, subject: '미술', domain: '표현' },
  { code: '[6미02-05]', content: '영상 매체를 활용하여 표현한다.', grade: 6, subject: '미술', domain: '표현' },
  { code: '[6미02-06]', content: '협력하여 작품을 계획하고 제작한다.', grade: 6, subject: '미술', domain: '표현' },
  { code: '[6미03-01]', content: '미술 작품의 의미와 특징을 분석하고 해석한다.', grade: 6, subject: '미술', domain: '감상' },
  { code: '[6미03-02]', content: '미술 작품을 비평하고 가치를 판단한다.', grade: 6, subject: '미술', domain: '감상' },
  { code: '[6미03-03]', content: '미술이 사회에 미치는 영향을 탐구한다.', grade: 6, subject: '미술', domain: '감상' },

  // ========== 실과 5-6학년군 (1학기) ==========
  { code: '[6실01-01]', content: '자신과 가족의 관계를 이해하고 긍정적인 가족 관계를 형성한다.', grade: 5, subject: '실과', domain: '인간 발달과 가족' },
  { code: '[6실01-02]', content: '균형 잡힌 식사의 중요성을 알고 실천한다.', grade: 5, subject: '실과', domain: '가정생활과 안전' },
  { code: '[6실01-03]', content: '자신의 의생활을 관리한다.', grade: 5, subject: '실과', domain: '가정생활과 안전' },
  { code: '[6실02-01]', content: '건강한 식단을 구성하고 간단한 조리를 실천한다.', grade: 5, subject: '실과', domain: '가정생활과 안전' },
  { code: '[6실02-02]', content: '생활 자원의 효율적 관리 방법을 탐색한다.', grade: 5, subject: '실과', domain: '가정생활과 안전' },
  { code: '[6실02-03]', content: '생활 속 안전사고의 예방과 대처 방법을 익힌다.', grade: 5, subject: '실과', domain: '가정생활과 안전' },
  { code: '[6실03-01]', content: '소프트웨어의 개념과 중요성을 이해한다.', grade: 5, subject: '실과', domain: '기술 활용' },
  { code: '[6실03-02]', content: '간단한 프로그램을 체험하고 순서도로 표현한다.', grade: 5, subject: '실과', domain: '기술 활용' },

  // ========== 실과 5-6학년군 (2학기) ==========
  { code: '[6실04-01]', content: '생활 속 문제 해결을 위한 창의적 제품을 구상한다.', grade: 6, subject: '실과', domain: '기술 활용' },
  { code: '[6실04-02]', content: '간단한 생활용품을 설계하고 제작한다.', grade: 6, subject: '실과', domain: '기술 활용' },
  { code: '[6실04-03]', content: '로봇의 기능과 구조를 이해하고 간단한 로봇을 제작한다.', grade: 6, subject: '실과', domain: '기술 활용' },
  { code: '[6실05-01]', content: '블록 기반 프로그래밍으로 간단한 프로그램을 만든다.', grade: 6, subject: '실과', domain: '기술 활용' },
  { code: '[6실05-02]', content: '실생활 문제 해결을 위한 프로그램을 작성한다.', grade: 6, subject: '실과', domain: '기술 활용' },
  { code: '[6실06-01]', content: '지속가능한 발전을 위한 기술의 역할을 이해한다.', grade: 6, subject: '실과', domain: '기술 활용' },
  { code: '[6실06-02]', content: '발명의 의미와 중요성을 이해하고 발명 체험을 한다.', grade: 6, subject: '실과', domain: '기술 활용' },

  // ========== 바른 생활 1-2학년군 (1학기) ==========
  { code: '[2바01-01]', content: '학교생활에 필요한 규칙과 약속을 정하여 지킨다.', grade: 1, subject: '바른 생활', domain: '학교생활' },
  { code: '[2바01-02]', content: '학교에서 다른 사람을 배려하며 생활한다.', grade: 1, subject: '바른 생활', domain: '학교생활' },
  { code: '[2바01-03]', content: '학교생활을 즐겁게 하는 방법을 익힌다.', grade: 1, subject: '바른 생활', domain: '학교생활' },
  { code: '[2바02-01]', content: '가족의 소중함을 알고 서로 존중하며 생활한다.', grade: 1, subject: '바른 생활', domain: '가정생활' },
  { code: '[2바02-02]', content: '가정에서 자신의 역할을 알고 실천한다.', grade: 1, subject: '바른 생활', domain: '가정생활' },

  // ========== 바른 생활 1-2학년군 (2학기) ==========
  { code: '[2바03-01]', content: '공공장소에서 지켜야 할 예절을 알고 지킨다.', grade: 2, subject: '바른 생활', domain: '사회생활' },
  { code: '[2바03-02]', content: '이웃과 더불어 살아가는 방법을 익힌다.', grade: 2, subject: '바른 생활', domain: '사회생활' },
  { code: '[2바04-01]', content: '자연과 생명의 소중함을 알고 존중한다.', grade: 2, subject: '바른 생활', domain: '자연생활' },
  { code: '[2바04-02]', content: '환경을 보호하는 습관을 기른다.', grade: 2, subject: '바른 생활', domain: '자연생활' },
  { code: '[2바05-01]', content: '우리나라를 상징하는 것을 알고 사랑하는 마음을 가진다.', grade: 2, subject: '바른 생활', domain: '나라사랑' },

  // ========== 슬기로운 생활 1-2학년군 (1학기) ==========
  { code: '[2슬01-01]', content: '학교의 여러 장소의 위치와 역할을 알아본다.', grade: 1, subject: '슬기로운 생활', domain: '학교와 나' },
  { code: '[2슬01-02]', content: '학교에서 만나는 사람들의 역할을 탐색한다.', grade: 1, subject: '슬기로운 생활', domain: '학교와 나' },
  { code: '[2슬01-03]', content: '학교생활에 필요한 것을 조사한다.', grade: 1, subject: '슬기로운 생활', domain: '학교와 나' },
  { code: '[2슬02-01]', content: '가족 구성원을 알고 가정에서 하는 일을 알아본다.', grade: 1, subject: '슬기로운 생활', domain: '가정과 나' },
  { code: '[2슬02-02]', content: '가족의 사랑과 행복을 느낄 수 있는 활동을 한다.', grade: 1, subject: '슬기로운 생활', domain: '가정과 나' },

  // ========== 슬기로운 생활 1-2학년군 (2학기) ==========
  { code: '[2슬03-01]', content: '계절에 따른 자연의 변화를 관찰한다.', grade: 2, subject: '슬기로운 생활', domain: '자연과 나' },
  { code: '[2슬03-02]', content: '주변 동식물의 특징을 탐색한다.', grade: 2, subject: '슬기로운 생활', domain: '자연과 나' },
  { code: '[2슬03-03]', content: '자연 현상을 관찰하고 특징을 표현한다.', grade: 2, subject: '슬기로운 생활', domain: '자연과 나' },
  { code: '[2슬04-01]', content: '이웃의 역할과 이웃 간의 관계를 탐색한다.', grade: 2, subject: '슬기로운 생활', domain: '이웃과 나' },
  { code: '[2슬04-02]', content: '마을에서 볼 수 있는 것들을 조사한다.', grade: 2, subject: '슬기로운 생활', domain: '이웃과 나' },

  // ========== 즐거운 생활 1-2학년군 (1학기) ==========
  { code: '[2즐01-01]', content: '학교생활을 소재로 다양한 놀이와 표현을 한다.', grade: 1, subject: '즐거운 생활', domain: '표현활동' },
  { code: '[2즐01-02]', content: '간단한 노래를 부르며 율동한다.', grade: 1, subject: '즐거운 생활', domain: '표현활동' },
  { code: '[2즐01-03]', content: '다양한 재료를 활용하여 만들기를 한다.', grade: 1, subject: '즐거운 생활', domain: '표현활동' },
  { code: '[2즐02-01]', content: '주변의 자연과 생활에서 아름다움을 느끼고 표현한다.', grade: 1, subject: '즐거운 생활', domain: '감상활동' },
  { code: '[2즐02-02]', content: '음악과 미술 작품을 감상하고 느낌을 나눈다.', grade: 1, subject: '즐거운 생활', domain: '감상활동' },

  // ========== 즐거운 생활 1-2학년군 (2학기) ==========
  { code: '[2즐03-01]', content: '친구와 함께 하는 다양한 놀이를 경험한다.', grade: 2, subject: '즐거운 생활', domain: '놀이활동' },
  { code: '[2즐03-02]', content: '계절과 관련된 놀이에 참여한다.', grade: 2, subject: '즐거운 생활', domain: '놀이활동' },
  { code: '[2즐04-01]', content: '상상력을 발휘하여 이야기를 꾸민다.', grade: 2, subject: '즐거운 생활', domain: '표현활동' },
  { code: '[2즐04-02]', content: '역할 놀이나 인형극에 참여한다.', grade: 2, subject: '즐거운 생활', domain: '표현활동' },
  { code: '[2즐04-03]', content: '우리나라 전통 놀이와 문화를 경험한다.', grade: 2, subject: '즐거운 생활', domain: '문화체험' },
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
