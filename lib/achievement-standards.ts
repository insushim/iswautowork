import { AchievementStandard } from '@/types';

// 2022 개정 교육과정 성취기준 (학년별, 학기별 정확한 매칭)
// 실제 성취기준 코드와 내용 기반

export const ACHIEVEMENT_STANDARDS: AchievementStandard[] = [
  // ========== 국어 1학년 1학기 ==========
  { code: '[2국01-01]', content: '상황에 어울리는 인사말을 주고받는다.', grade: 1, semester: 1, subject: '국어', domain: '듣기·말하기' },
  { code: '[2국01-02]', content: '일상생활에서 겪은 일이나 바라는 것, 좋아하는 것을 말한다.', grade: 1, semester: 1, subject: '국어', domain: '듣기·말하기' },
  { code: '[2국01-03]', content: '자신의 감정을 표현하며 대화를 나눈다.', grade: 1, semester: 1, subject: '국어', domain: '듣기·말하기' },
  { code: '[2국01-04]', content: '듣는 이를 바라보며 바른 자세로 말한다.', grade: 1, semester: 1, subject: '국어', domain: '듣기·말하기' },
  { code: '[2국02-01]', content: '글자, 낱말, 문장을 소리 내어 읽는다.', grade: 1, semester: 1, subject: '국어', domain: '읽기' },
  { code: '[2국02-02]', content: '읽기에 흥미를 가지고 즐겨 읽는 태도를 지닌다.', grade: 1, semester: 1, subject: '국어', domain: '읽기' },
  { code: '[2국03-01]', content: '글자를 바르게 쓴다.', grade: 1, semester: 1, subject: '국어', domain: '쓰기' },
  { code: '[2국04-01]', content: '한글 자모의 이름과 소릿값을 안다.', grade: 1, semester: 1, subject: '국어', domain: '문법' },
  { code: '[2국05-01]', content: '시, 노래, 이야기에 흥미를 가진다.', grade: 1, semester: 1, subject: '국어', domain: '문학' },

  // ========== 국어 1학년 2학기 ==========
  { code: '[2국01-05]', content: '말하는 이의 말을 집중하여 듣는다.', grade: 1, semester: 2, subject: '국어', domain: '듣기·말하기' },
  { code: '[2국02-03]', content: '글을 읽고 중요한 내용을 확인한다.', grade: 1, semester: 2, subject: '국어', domain: '읽기' },
  { code: '[2국03-02]', content: '자신의 생각을 문장으로 표현한다.', grade: 1, semester: 2, subject: '국어', domain: '쓰기' },
  { code: '[2국04-02]', content: '소리와 표기가 다를 수 있음을 이해한다.', grade: 1, semester: 2, subject: '국어', domain: '문법' },
  { code: '[2국05-02]', content: '인물의 모습, 행동, 마음을 상상한다.', grade: 1, semester: 2, subject: '국어', domain: '문학' },

  // ========== 국어 2학년 1학기 ==========
  { code: '[2국01-06]', content: '바르고 고운 말을 사용하여 대화한다.', grade: 2, semester: 1, subject: '국어', domain: '듣기·말하기' },
  { code: '[2국01-07]', content: '상대의 말을 끝까지 듣고 적절하게 반응한다.', grade: 2, semester: 1, subject: '국어', domain: '듣기·말하기' },
  { code: '[2국02-04]', content: '글을 읽고 인물의 처지와 마음을 이해한다.', grade: 2, semester: 1, subject: '국어', domain: '읽기' },
  { code: '[2국03-03]', content: '자신의 생각이나 겪은 일을 문장으로 쓴다.', grade: 2, semester: 1, subject: '국어', domain: '쓰기' },
  { code: '[2국04-03]', content: '문장에 따라 알맞은 문장 부호를 사용한다.', grade: 2, semester: 1, subject: '국어', domain: '문법' },
  { code: '[2국05-03]', content: '일이 일어난 차례를 파악한다.', grade: 2, semester: 1, subject: '국어', domain: '문학' },

  // ========== 국어 2학년 2학기 ==========
  { code: '[2국01-08]', content: '자신의 경험을 바탕으로 이야기를 들려준다.', grade: 2, semester: 2, subject: '국어', domain: '듣기·말하기' },
  { code: '[2국02-05]', content: '글의 내용을 자신의 경험과 관련짓는다.', grade: 2, semester: 2, subject: '국어', domain: '읽기' },
  { code: '[2국03-04]', content: '겪은 일을 떠올려 간단한 글로 쓴다.', grade: 2, semester: 2, subject: '국어', domain: '쓰기' },
  { code: '[2국04-04]', content: '낱말을 바르게 띄어 쓴다.', grade: 2, semester: 2, subject: '국어', domain: '문법' },
  { code: '[2국05-04]', content: '자신의 생각이나 겪은 일을 시나 노래로 표현한다.', grade: 2, semester: 2, subject: '국어', domain: '문학' },

  // ========== 국어 3학년 1학기 ==========
  { code: '[4국01-01]', content: '대화의 즐거움을 알고 대화를 나눈다.', grade: 3, semester: 1, subject: '국어', domain: '듣기·말하기' },
  { code: '[4국01-02]', content: '회의에서 의견을 적극적으로 교환한다.', grade: 3, semester: 1, subject: '국어', domain: '듣기·말하기' },
  { code: '[4국02-01]', content: '문단과 글의 중심 생각을 파악한다.', grade: 3, semester: 1, subject: '국어', domain: '읽기' },
  { code: '[4국03-01]', content: '중심 문장과 뒷받침 문장을 갖추어 문단을 쓴다.', grade: 3, semester: 1, subject: '국어', domain: '쓰기' },
  { code: '[4국04-01]', content: '낱말을 분류하고 국어사전에서 낱말을 찾는다.', grade: 3, semester: 1, subject: '국어', domain: '문법' },
  { code: '[4국05-01]', content: '시를 읽고 느낌과 생각을 다양하게 표현한다.', grade: 3, semester: 1, subject: '국어', domain: '문학' },

  // ========== 국어 3학년 2학기 ==========
  { code: '[4국01-03]', content: '상대의 말을 집중하여 듣고 내용을 확인한다.', grade: 3, semester: 2, subject: '국어', domain: '듣기·말하기' },
  { code: '[4국01-04]', content: '적절한 이유나 근거를 들어 자신의 의견을 말한다.', grade: 3, semester: 2, subject: '국어', domain: '듣기·말하기' },
  { code: '[4국02-02]', content: '글의 유형을 고려하여 대강의 내용을 간추린다.', grade: 3, semester: 2, subject: '국어', domain: '읽기' },
  { code: '[4국02-03]', content: '글에서 낱말의 의미나 생략된 내용을 추론한다.', grade: 3, semester: 2, subject: '국어', domain: '읽기' },
  { code: '[4국03-02]', content: '읽는 이를 고려하여 자신의 마음을 표현하는 글을 쓴다.', grade: 3, semester: 2, subject: '국어', domain: '쓰기' },
  { code: '[4국04-02]', content: '높임 표현을 상황에 알맞게 사용한다.', grade: 3, semester: 2, subject: '국어', domain: '문법' },
  { code: '[4국05-02]', content: '인물, 사건, 배경에 주목하며 작품을 이해한다.', grade: 3, semester: 2, subject: '국어', domain: '문학' },

  // ========== 국어 4학년 1학기 ==========
  { code: '[4국01-05]', content: '목적에 따라 알맞은 내용과 매체를 선정하여 발표한다.', grade: 4, semester: 1, subject: '국어', domain: '듣기·말하기' },
  { code: '[4국02-04]', content: '글을 읽고 사실과 의견을 구별한다.', grade: 4, semester: 1, subject: '국어', domain: '읽기' },
  { code: '[4국03-03]', content: '목적과 주제를 고려하여 내용을 마련한다.', grade: 4, semester: 1, subject: '국어', domain: '쓰기' },
  { code: '[4국04-03]', content: '기본적인 문장 성분을 이해한다.', grade: 4, semester: 1, subject: '국어', domain: '문법' },
  { code: '[4국05-03]', content: '이야기의 흐름을 파악하여 내용을 간추린다.', grade: 4, semester: 1, subject: '국어', domain: '문학' },

  // ========== 국어 4학년 2학기 ==========
  { code: '[4국01-06]', content: '예절을 지키며 회의한다.', grade: 4, semester: 2, subject: '국어', domain: '듣기·말하기' },
  { code: '[4국02-05]', content: '읽기 경험을 바탕으로 독서 습관을 기른다.', grade: 4, semester: 2, subject: '국어', domain: '읽기' },
  { code: '[4국03-04]', content: '관심 있는 주제에 대해 자신의 의견이 드러나게 글을 쓴다.', grade: 4, semester: 2, subject: '국어', domain: '쓰기' },
  { code: '[4국04-04]', content: '문장을 끝맺는 방식을 알고 적절하게 활용한다.', grade: 4, semester: 2, subject: '국어', domain: '문법' },
  { code: '[4국05-04]', content: '작품을 듣거나 읽고 떠오른 느낌과 생각을 다양하게 표현한다.', grade: 4, semester: 2, subject: '국어', domain: '문학' },

  // ========== 국어 5학년 1학기 ==========
  { code: '[6국01-01]', content: '구어 의사소통의 특성을 바탕으로 하여 듣기·말하기 활동을 한다.', grade: 5, semester: 1, subject: '국어', domain: '듣기·말하기' },
  { code: '[6국01-02]', content: '의견을 제시하고 함께 조정하며 토의한다.', grade: 5, semester: 1, subject: '국어', domain: '듣기·말하기' },
  { code: '[6국02-01]', content: '읽기는 배경지식을 활용하여 의미를 구성하는 과정임을 이해하고 글을 읽는다.', grade: 5, semester: 1, subject: '국어', domain: '읽기' },
  { code: '[6국02-02]', content: '글의 구조를 고려하여 글 전체의 내용을 요약한다.', grade: 5, semester: 1, subject: '국어', domain: '읽기' },
  { code: '[6국03-01]', content: '쓰기는 절차에 따라 의미를 구성하고 표현하는 과정임을 이해하고 글을 쓴다.', grade: 5, semester: 1, subject: '국어', domain: '쓰기' },
  { code: '[6국03-02]', content: '목적이나 주제에 따라 알맞은 내용과 매체를 선정하여 글을 쓴다.', grade: 5, semester: 1, subject: '국어', domain: '쓰기' },
  { code: '[6국04-01]', content: '언어는 사고와 의사소통의 수단임을 이해하고 국어생활을 한다.', grade: 5, semester: 1, subject: '국어', domain: '문법' },
  { code: '[6국05-01]', content: '문학은 가치 있는 내용을 언어로 표현하여 아름다움을 느끼게 하는 활동임을 이해하고 문학 활동을 한다.', grade: 5, semester: 1, subject: '국어', domain: '문학' },
  { code: '[6국05-02]', content: '작품 속 세계와 현실 세계를 비교하며 작품을 감상한다.', grade: 5, semester: 1, subject: '국어', domain: '문학' },

  // ========== 국어 5학년 2학기 ==========
  { code: '[6국01-03]', content: '절차와 규칙을 지키고 근거를 제시하며 토론한다.', grade: 5, semester: 2, subject: '국어', domain: '듣기·말하기' },
  { code: '[6국01-04]', content: '자료를 정리하여 말할 내용을 체계적으로 구성한다.', grade: 5, semester: 2, subject: '국어', domain: '듣기·말하기' },
  { code: '[6국02-03]', content: '글을 읽고 글쓴이가 말하고자 하는 주장이나 주제를 파악한다.', grade: 5, semester: 2, subject: '국어', domain: '읽기' },
  { code: '[6국02-04]', content: '글을 읽고 내용의 타당성과 표현의 적절성을 판단한다.', grade: 5, semester: 2, subject: '국어', domain: '읽기' },
  { code: '[6국03-03]', content: '목적이나 대상에 따라 알맞은 형식과 자료를 사용하여 설명하는 글을 쓴다.', grade: 5, semester: 2, subject: '국어', domain: '쓰기' },
  { code: '[6국04-02]', content: '국어의 낱말 확장 방법을 탐구하고 어휘력을 높이는 데에 적용한다.', grade: 5, semester: 2, subject: '국어', domain: '문법' },
  { code: '[6국05-03]', content: '비유적 표현의 특성과 효과를 살려 생각과 느낌을 다양하게 표현한다.', grade: 5, semester: 2, subject: '국어', domain: '문학' },

  // ========== 국어 6학년 1학기 ==========
  { code: '[6국01-05]', content: '매체 자료를 활용하여 내용을 효과적으로 발표한다.', grade: 6, semester: 1, subject: '국어', domain: '듣기·말하기' },
  { code: '[6국01-06]', content: '드라마의 기본 형식을 알고 드라마를 비평하며 감상한다.', grade: 6, semester: 1, subject: '국어', domain: '듣기·말하기' },
  { code: '[6국02-05]', content: '매체에 따른 다양한 읽기 방법을 이해하고 적절하게 적용하며 읽는다.', grade: 6, semester: 1, subject: '국어', domain: '읽기' },
  { code: '[6국03-04]', content: '적절한 근거와 알맞은 표현을 사용하여 주장하는 글을 쓴다.', grade: 6, semester: 1, subject: '국어', domain: '쓰기' },
  { code: '[6국04-03]', content: '낱말이 상황에 따라 다양하게 해석됨을 탐구한다.', grade: 6, semester: 1, subject: '국어', domain: '문법' },
  { code: '[6국04-04]', content: '관용 표현을 이해하고 적절하게 활용한다.', grade: 6, semester: 1, subject: '국어', domain: '문법' },
  { code: '[6국05-04]', content: '일상생활의 경험을 이야기나 극의 형식으로 표현한다.', grade: 6, semester: 1, subject: '국어', domain: '문학' },

  // ========== 국어 6학년 2학기 ==========
  { code: '[6국01-07]', content: '상대가 처한 상황을 이해하고 공감하며 듣는 태도를 지닌다.', grade: 6, semester: 2, subject: '국어', domain: '듣기·말하기' },
  { code: '[6국02-06]', content: '자신의 읽기 습관을 점검하며 스스로 글을 찾아 읽는 태도를 지닌다.', grade: 6, semester: 2, subject: '국어', domain: '읽기' },
  { code: '[6국03-05]', content: '체험한 일에 대한 감상이 드러나게 글을 쓴다.', grade: 6, semester: 2, subject: '국어', domain: '쓰기' },
  { code: '[6국03-06]', content: '독자를 존중하고 배려하며 글을 쓰는 태도를 지닌다.', grade: 6, semester: 2, subject: '국어', domain: '쓰기' },
  { code: '[6국04-05]', content: '국어의 문장 성분을 이해하고 호응 관계가 올바른 문장을 구성한다.', grade: 6, semester: 2, subject: '국어', domain: '문법' },
  { code: '[6국04-06]', content: '일상생활에서 국어를 바르게 사용하는 태도를 지닌다.', grade: 6, semester: 2, subject: '국어', domain: '문법' },
  { code: '[6국05-05]', content: '작품에 대한 이해와 감상을 바탕으로 하여 다른 사람과 적극적으로 소통한다.', grade: 6, semester: 2, subject: '국어', domain: '문학' },
  { code: '[6국05-06]', content: '작품에서 얻은 깨달음을 바탕으로 하여 바람직한 삶의 가치를 내면화하는 태도를 지닌다.', grade: 6, semester: 2, subject: '국어', domain: '문학' },

  // ========== 수학 1학년 1학기 ==========
  { code: '[2수01-01]', content: '0과 100까지의 수의 개념을 이해하고 수를 세고 쓸 수 있다.', grade: 1, semester: 1, subject: '수학', domain: '수와 연산' },
  { code: '[2수01-02]', content: '하나의 수를 두 수로 가르거나 두 수를 하나의 수로 모을 수 있다.', grade: 1, semester: 1, subject: '수학', domain: '수와 연산' },
  { code: '[2수01-03]', content: '덧셈과 뺄셈이 이루어지는 실생활 상황을 통해 덧셈과 뺄셈의 의미를 안다.', grade: 1, semester: 1, subject: '수학', domain: '수와 연산' },
  { code: '[2수02-01]', content: '구체물의 길이, 들이, 무게, 넓이를 비교할 수 있다.', grade: 1, semester: 1, subject: '수학', domain: '도형과 측정' },
  { code: '[2수03-01]', content: '교실 및 생활 주변에서 여러 가지 물건을 관찰하여 삼각형, 사각형, 원의 모양을 찾을 수 있다.', grade: 1, semester: 1, subject: '수학', domain: '도형과 측정' },

  // ========== 수학 1학년 2학기 ==========
  { code: '[2수01-04]', content: '한 자리 수의 덧셈과 뺄셈을 할 수 있다.', grade: 1, semester: 2, subject: '수학', domain: '수와 연산' },
  { code: '[2수01-05]', content: '두 자리 수의 범위에서 덧셈과 뺄셈의 계산 원리를 이해한다.', grade: 1, semester: 2, subject: '수학', domain: '수와 연산' },
  { code: '[2수02-02]', content: '양의 비교 결과를 말로 표현할 수 있다.', grade: 1, semester: 2, subject: '수학', domain: '도형과 측정' },
  { code: '[2수03-02]', content: '삼각형, 사각형, 원의 모양을 이용하여 여러 가지 모양을 꾸밀 수 있다.', grade: 1, semester: 2, subject: '수학', domain: '도형과 측정' },

  // ========== 수학 2학년 1학기 ==========
  { code: '[2수01-06]', content: '두 자리 수의 덧셈과 뺄셈을 할 수 있다.', grade: 2, semester: 1, subject: '수학', domain: '수와 연산' },
  { code: '[2수02-03]', content: '시계를 보고 시각을 읽을 수 있다.', grade: 2, semester: 1, subject: '수학', domain: '도형과 측정' },
  { code: '[2수02-04]', content: '1cm와 1m의 단위를 알고 길이를 측정할 수 있다.', grade: 2, semester: 1, subject: '수학', domain: '도형과 측정' },
  { code: '[2수03-03]', content: '평면도형의 모양을 알고 그 특징을 이해한다.', grade: 2, semester: 1, subject: '수학', domain: '도형과 측정' },

  // ========== 수학 2학년 2학기 ==========
  { code: '[2수01-07]', content: '곱셈의 의미를 이해하고 곱셈구구를 익힌다.', grade: 2, semester: 2, subject: '수학', domain: '수와 연산' },
  { code: '[2수01-08]', content: '세 자리 수의 개념을 이해하고 수를 읽고 쓸 수 있다.', grade: 2, semester: 2, subject: '수학', domain: '수와 연산' },
  { code: '[2수04-01]', content: '분류한 자료를 표나 그림그래프로 나타낼 수 있다.', grade: 2, semester: 2, subject: '수학', domain: '자료와 가능성' },
  { code: '[2수04-02]', content: '표나 그림그래프의 내용을 파악할 수 있다.', grade: 2, semester: 2, subject: '수학', domain: '자료와 가능성' },

  // ========== 수학 3학년 1학기 ==========
  { code: '[4수01-01]', content: '큰 수의 자릿값과 위치적 기수법을 이해하고, 수를 읽고 쓸 수 있다.', grade: 3, semester: 1, subject: '수학', domain: '수와 연산' },
  { code: '[4수01-02]', content: '세 자리 수의 덧셈과 뺄셈의 계산 원리를 이해하고 계산할 수 있다.', grade: 3, semester: 1, subject: '수학', domain: '수와 연산' },
  { code: '[4수01-03]', content: '곱셈과 나눗셈의 관계를 이해한다.', grade: 3, semester: 1, subject: '수학', domain: '수와 연산' },
  { code: '[4수02-01]', content: '1cm, 1m, 1km의 단위를 알고, 실생활에서 길이를 어림하고 측정할 수 있다.', grade: 3, semester: 1, subject: '수학', domain: '도형과 측정' },
  { code: '[4수03-01]', content: '직선, 선분, 반직선을 알고 구별할 수 있다.', grade: 3, semester: 1, subject: '수학', domain: '도형과 측정' },

  // ========== 수학 3학년 2학기 ==========
  { code: '[4수01-04]', content: '두 자리 수와 한 자리 수의 곱셈을 할 수 있다.', grade: 3, semester: 2, subject: '수학', domain: '수와 연산' },
  { code: '[4수01-05]', content: '분수의 개념과 그 표현을 이해한다.', grade: 3, semester: 2, subject: '수학', domain: '수와 연산' },
  { code: '[4수01-06]', content: '단위분수의 크기를 비교할 수 있다.', grade: 3, semester: 2, subject: '수학', domain: '수와 연산' },
  { code: '[4수02-02]', content: '시간의 덧셈과 뺄셈을 할 수 있다.', grade: 3, semester: 2, subject: '수학', domain: '도형과 측정' },
  { code: '[4수03-02]', content: '각을 이해하고 직각을 알 수 있다.', grade: 3, semester: 2, subject: '수학', domain: '도형과 측정' },

  // ========== 수학 4학년 1학기 ==========
  { code: '[4수01-07]', content: '세 자리 수의 곱셈을 할 수 있다.', grade: 4, semester: 1, subject: '수학', domain: '수와 연산' },
  { code: '[4수01-08]', content: '두 자리 수의 나눗셈을 할 수 있다.', grade: 4, semester: 1, subject: '수학', domain: '수와 연산' },
  { code: '[4수02-03]', content: '평면도형의 이동을 이해한다.', grade: 4, semester: 1, subject: '수학', domain: '도형과 측정' },
  { code: '[4수02-04]', content: '각도의 단위를 이해하고 각도기로 각을 측정할 수 있다.', grade: 4, semester: 1, subject: '수학', domain: '도형과 측정' },
  { code: '[4수03-03]', content: '규칙을 찾아 설명하고, 그 규칙을 수나 식으로 나타낼 수 있다.', grade: 4, semester: 1, subject: '수학', domain: '변화와 관계' },

  // ========== 수학 4학년 2학기 ==========
  { code: '[4수01-09]', content: '소수의 개념과 그 표현을 이해한다.', grade: 4, semester: 2, subject: '수학', domain: '수와 연산' },
  { code: '[4수01-10]', content: '분모가 같은 분수의 덧셈과 뺄셈을 할 수 있다.', grade: 4, semester: 2, subject: '수학', domain: '수와 연산' },
  { code: '[4수02-05]', content: '삼각형과 사각형의 넓이를 구할 수 있다.', grade: 4, semester: 2, subject: '수학', domain: '도형과 측정' },
  { code: '[4수04-01]', content: '막대그래프와 꺾은선그래프를 그릴 수 있다.', grade: 4, semester: 2, subject: '수학', domain: '자료와 가능성' },
  { code: '[4수04-02]', content: '자료를 수집하여 그래프로 나타내고 해석할 수 있다.', grade: 4, semester: 2, subject: '수학', domain: '자료와 가능성' },

  // ========== 수학 5학년 1학기 ==========
  { code: '[6수01-01]', content: '덧셈, 뺄셈, 곱셈, 나눗셈의 혼합 계산에서 계산하는 순서를 알고, 혼합 계산을 할 수 있다.', grade: 5, semester: 1, subject: '수학', domain: '수와 연산' },
  { code: '[6수01-02]', content: '약수, 공약수, 최대공약수의 의미를 알고 구할 수 있다.', grade: 5, semester: 1, subject: '수학', domain: '수와 연산' },
  { code: '[6수01-03]', content: '배수, 공배수, 최소공배수의 의미를 알고 구할 수 있다.', grade: 5, semester: 1, subject: '수학', domain: '수와 연산' },
  { code: '[6수02-01]', content: '직육면체와 정육면체를 알고, 구성 요소와 성질을 이해한다.', grade: 5, semester: 1, subject: '수학', domain: '도형' },
  { code: '[6수03-01]', content: '직사각형의 넓이를 구하는 방법을 이해하고, 이를 통하여 넓이의 단위 1㎠, 1㎡, 1㎢의 관계를 이해한다.', grade: 5, semester: 1, subject: '수학', domain: '측정' },

  // ========== 수학 5학년 2학기 ==========
  { code: '[6수01-04]', content: '크기가 같은 분수를 만들 수 있고, 분수를 약분, 통분할 수 있다.', grade: 5, semester: 2, subject: '수학', domain: '수와 연산' },
  { code: '[6수01-05]', content: '분모가 다른 분수의 크기를 비교할 수 있다.', grade: 5, semester: 2, subject: '수학', domain: '수와 연산' },
  { code: '[6수01-06]', content: '분모가 다른 분수의 덧셈과 뺄셈의 계산 원리를 이해하고 그 계산을 할 수 있다.', grade: 5, semester: 2, subject: '수학', domain: '수와 연산' },
  { code: '[6수02-02]', content: '직육면체와 정육면체의 전개도를 그릴 수 있다.', grade: 5, semester: 2, subject: '수학', domain: '도형' },
  { code: '[6수02-03]', content: '합동의 의미와 합동인 도형의 성질을 이해한다.', grade: 5, semester: 2, subject: '수학', domain: '도형' },
  { code: '[6수03-02]', content: '평행사변형, 삼각형, 사다리꼴, 마름모의 넓이를 구하는 방법을 다양하게 추론하고, 이와 관련된 문제를 해결할 수 있다.', grade: 5, semester: 2, subject: '수학', domain: '측정' },
  { code: '[6수05-01]', content: '평균의 의미를 알고, 주어진 자료의 평균을 구할 수 있으며, 이를 활용할 수 있다.', grade: 5, semester: 2, subject: '수학', domain: '자료와 가능성' },

  // ========== 수학 6학년 1학기 ==========
  { code: '[6수01-07]', content: '(분수)×(자연수), (자연수)×(분수), (분수)×(분수)의 계산 원리를 이해하고 그 계산을 할 수 있다.', grade: 6, semester: 1, subject: '수학', domain: '수와 연산' },
  { code: '[6수01-08]', content: '(소수)×(자연수), (자연수)×(소수), (소수)×(소수)의 계산 원리를 이해하고 그 계산을 할 수 있다.', grade: 6, semester: 1, subject: '수학', domain: '수와 연산' },
  { code: '[6수02-04]', content: '선대칭도형과 점대칭도형을 이해한다.', grade: 6, semester: 1, subject: '수학', domain: '도형' },
  { code: '[6수04-01]', content: '두 양의 크기를 비교하는 상황을 통해 비의 개념을 이해하고, 그 관계를 비로 나타낼 수 있다.', grade: 6, semester: 1, subject: '수학', domain: '규칙성' },
  { code: '[6수04-02]', content: '비율을 이해하고, 비율을 분수, 소수, 백분율로 나타낼 수 있다.', grade: 6, semester: 1, subject: '수학', domain: '규칙성' },
  { code: '[6수05-02]', content: '자료를 수집, 분류, 정리하여 목적에 맞는 그래프로 나타내고, 그래프를 해석할 수 있다.', grade: 6, semester: 1, subject: '수학', domain: '자료와 가능성' },

  // ========== 수학 6학년 2학기 ==========
  { code: '[6수01-09]', content: '(자연수)÷(자연수)의 몫을 분수로 나타낼 수 있다.', grade: 6, semester: 2, subject: '수학', domain: '수와 연산' },
  { code: '[6수01-10]', content: '(분수)÷(자연수), (분수)÷(분수)의 계산 원리를 이해하고 그 계산을 할 수 있다.', grade: 6, semester: 2, subject: '수학', domain: '수와 연산' },
  { code: '[6수01-11]', content: '(소수)÷(자연수), (소수)÷(소수)의 계산 원리를 이해하고 그 계산을 할 수 있다.', grade: 6, semester: 2, subject: '수학', domain: '수와 연산' },
  { code: '[6수02-05]', content: '각기둥과 각뿔을 알고, 구성 요소와 성질을 이해한다.', grade: 6, semester: 2, subject: '수학', domain: '도형' },
  { code: '[6수02-07]', content: '원기둥, 원뿔, 구를 알고, 구성 요소와 성질을 이해한다.', grade: 6, semester: 2, subject: '수학', domain: '도형' },
  { code: '[6수03-03]', content: '원주율의 의미를 이해하고, 원의 넓이를 구하는 방법을 이해하고 구할 수 있다.', grade: 6, semester: 2, subject: '수학', domain: '측정' },
  { code: '[6수03-05]', content: '직육면체와 정육면체의 부피를 구하는 방법을 이해하고, 이를 통하여 부피의 단위 1㎤, 1㎥의 관계를 이해한다.', grade: 6, semester: 2, subject: '수학', domain: '측정' },
  { code: '[6수04-03]', content: '비례식을 알고, 그 성질을 이해하며, 이를 활용하여 간단한 비례식을 풀 수 있다.', grade: 6, semester: 2, subject: '수학', domain: '규칙성' },
  { code: '[6수05-04]', content: '비율그래프(띠그래프, 원그래프)를 알고, 이를 해석할 수 있다.', grade: 6, semester: 2, subject: '수학', domain: '자료와 가능성' },

  // ========== 사회 3학년 1학기 ==========
  { code: '[4사01-01]', content: '우리 고장의 위치를 다양한 방법으로 표현한다.', grade: 3, semester: 1, subject: '사회', domain: '지리 인식' },
  { code: '[4사01-02]', content: '우리 고장의 자연환경과 인문환경의 모습을 파악한다.', grade: 3, semester: 1, subject: '사회', domain: '지리 인식' },
  { code: '[4사01-03]', content: '우리 고장의 문화유산을 알아보고 소중히 여기는 태도를 기른다.', grade: 3, semester: 1, subject: '사회', domain: '역사' },
  { code: '[4사01-05]', content: '지도를 읽고 활용하는 방법을 익힌다.', grade: 3, semester: 1, subject: '사회', domain: '지리 인식' },

  // ========== 사회 3학년 2학기 ==========
  { code: '[4사01-04]', content: '우리 지역의 중심지와 주민 생활의 관계를 파악한다.', grade: 3, semester: 2, subject: '사회', domain: '지리 인식' },
  { code: '[4사02-01]', content: '우리 지역의 교통과 통신의 발달 과정을 살펴본다.', grade: 3, semester: 2, subject: '사회', domain: '일반사회' },
  { code: '[4사02-02]', content: '우리 지역의 공공 기관의 역할을 조사한다.', grade: 3, semester: 2, subject: '사회', domain: '일반사회' },

  // ========== 사회 4학년 1학기 ==========
  { code: '[4사03-01]', content: '촌락과 도시의 공통점과 차이점을 비교하여 파악한다.', grade: 4, semester: 1, subject: '사회', domain: '지리 인식' },
  { code: '[4사03-02]', content: '지역의 위치와 특성을 파악한다.', grade: 4, semester: 1, subject: '사회', domain: '지리 인식' },
  { code: '[4사03-03]', content: '지역 간 교류의 필요성과 방법을 탐구한다.', grade: 4, semester: 1, subject: '사회', domain: '일반사회' },

  // ========== 사회 4학년 2학기 ==========
  { code: '[4사04-01]', content: '민주주의의 의미와 중요성을 파악한다.', grade: 4, semester: 2, subject: '사회', domain: '일반사회' },
  { code: '[4사04-02]', content: '일상생활에서 민주주의를 실천하는 방법을 익힌다.', grade: 4, semester: 2, subject: '사회', domain: '일반사회' },
  { code: '[4사04-03]', content: '주민 자치와 지방 자치의 의미를 이해한다.', grade: 4, semester: 2, subject: '사회', domain: '일반사회' },
  { code: '[4사04-04]', content: '경제활동과 현명한 선택의 중요성을 이해한다.', grade: 4, semester: 2, subject: '사회', domain: '일반사회' },

  // ========== 사회 5학년 1학기 ==========
  { code: '[6사01-01]', content: '우리나라의 위치와 영역이 지니는 특성을 설명하고, 이를 바탕으로 국토 사랑의 태도를 기른다.', grade: 5, semester: 1, subject: '사회', domain: '지리' },
  { code: '[6사01-02]', content: '우리 국토를 구분하는 기준들을 살펴보고, 행정 구역 및 전통적 지역 구분 방식을 이해한다.', grade: 5, semester: 1, subject: '사회', domain: '지리' },
  { code: '[6사01-03]', content: '우리나라의 기후 환경 및 지형 환경에서 나타나는 특성을 탐구한다.', grade: 5, semester: 1, subject: '사회', domain: '지리' },
  { code: '[6사01-05]', content: '우리나라의 인구 분포 및 구조를 파악하고, 인구 문제에 대한 대응 방안을 제시한다.', grade: 5, semester: 1, subject: '사회', domain: '지리' },

  // ========== 사회 5학년 2학기 ==========
  { code: '[6사01-04]', content: '자원의 분포와 이용 모습을 파악하고, 자원 관리 및 보존 노력의 필요성을 설명한다.', grade: 5, semester: 2, subject: '사회', domain: '지리' },
  { code: '[6사01-06]', content: '촌락과 도시의 특성을 이해하고, 촌락과 도시의 변화 과정을 탐구한다.', grade: 5, semester: 2, subject: '사회', domain: '지리' },
  { code: '[6사02-01]', content: '인권의 의미와 인권 신장의 역사를 통해 인권이 보장받기 어려운 사례를 조사하고 그 해결 방법을 제시한다.', grade: 5, semester: 2, subject: '사회', domain: '일반사회' },
  { code: '[6사02-02]', content: '생활 속에서 인권 보장이 필요한 사례를 탐구하여 인권 의식을 기른다.', grade: 5, semester: 2, subject: '사회', domain: '일반사회' },
  { code: '[6사02-03]', content: '헌법에서 규정하는 기본권과 의무가 일상생활에 적용된 사례를 조사하고, 이를 통하여 권리와 의무를 존중하는 태도를 기른다.', grade: 5, semester: 2, subject: '사회', domain: '일반사회' },
  { code: '[6사02-04]', content: '우리나라의 입법, 사법, 행정부의 역할을 이해하고, 각각의 의미와 상호 관계를 설명한다.', grade: 5, semester: 2, subject: '사회', domain: '일반사회' },

  // ========== 사회 6학년 1학기 ==========
  { code: '[6사03-01]', content: '고조선의 등장과 발전, 삼국의 건국과 발전 과정을 이해한다.', grade: 6, semester: 1, subject: '사회', domain: '역사' },
  { code: '[6사03-02]', content: '삼국 통일과 발해의 건국, 통일 신라와 발해의 발전 과정을 이해한다.', grade: 6, semester: 1, subject: '사회', domain: '역사' },
  { code: '[6사03-03]', content: '고려의 건국과 발전, 고려의 대외 관계를 이해한다.', grade: 6, semester: 1, subject: '사회', domain: '역사' },
  { code: '[6사03-04]', content: '조선의 건국과 발전, 조선의 대외 관계와 문화 발전을 이해한다.', grade: 6, semester: 1, subject: '사회', domain: '역사' },

  // ========== 사회 6학년 2학기 ==========
  { code: '[6사04-01]', content: '조선 후기 사회의 변동과 개화기의 사회 변화를 파악한다.', grade: 6, semester: 2, subject: '사회', domain: '역사' },
  { code: '[6사04-02]', content: '일제의 침략과 대한민국 임시 정부의 수립, 광복을 위한 노력을 이해한다.', grade: 6, semester: 2, subject: '사회', domain: '역사' },
  { code: '[6사04-03]', content: '대한민국 정부의 수립과 6·25 전쟁, 대한민국의 민주화 과정을 이해한다.', grade: 6, semester: 2, subject: '사회', domain: '역사' },
  { code: '[6사05-01]', content: '우리나라의 경제 성장 과정과 그에 따른 사회 변화를 이해한다.', grade: 6, semester: 2, subject: '사회', domain: '일반사회' },
  { code: '[6사05-02]', content: '가계와 기업의 합리적 선택 방법과 경제적 역할을 이해한다.', grade: 6, semester: 2, subject: '사회', domain: '일반사회' },
  { code: '[6사06-01]', content: '세계 여러 나라의 자연환경과 인문환경의 다양성을 탐구한다.', grade: 6, semester: 2, subject: '사회', domain: '지리' },

  // ========== 과학 3학년 1학기 ==========
  { code: '[4과01-01]', content: '과학자처럼 관찰하고 탐구하는 방법을 익힌다.', grade: 3, semester: 1, subject: '과학', domain: '과학탐구' },
  { code: '[4과02-01]', content: '물질의 성질을 관찰하고 분류한다.', grade: 3, semester: 1, subject: '과학', domain: '물질' },
  { code: '[4과03-01]', content: '동물의 생김새와 생활 방식을 관찰하고 특징을 설명한다.', grade: 3, semester: 1, subject: '과학', domain: '생명' },
  { code: '[4과04-01]', content: '지구의 모양과 표면의 모습을 이해한다.', grade: 3, semester: 1, subject: '과학', domain: '지구와 우주' },

  // ========== 과학 3학년 2학기 ==========
  { code: '[4과01-02]', content: '관찰과 측정의 중요성을 알고 실험 과정에 적용한다.', grade: 3, semester: 2, subject: '과학', domain: '과학탐구' },
  { code: '[4과02-02]', content: '액체와 고체를 섞을 때 나타나는 변화를 관찰한다.', grade: 3, semester: 2, subject: '과학', domain: '물질' },
  { code: '[4과02-03]', content: '물의 상태 변화를 탐구한다.', grade: 3, semester: 2, subject: '과학', domain: '물질' },
  { code: '[4과03-02]', content: '동물을 특징에 따라 분류한다.', grade: 3, semester: 2, subject: '과학', domain: '생명' },
  { code: '[4과04-02]', content: '지층과 화석의 특징을 탐구한다.', grade: 3, semester: 2, subject: '과학', domain: '지구와 우주' },

  // ========== 과학 4학년 1학기 ==========
  { code: '[4과05-01]', content: '물체의 운동을 관찰하고 속력을 비교한다.', grade: 4, semester: 1, subject: '과학', domain: '운동과 에너지' },
  { code: '[4과05-02]', content: '자석의 성질을 탐구한다.', grade: 4, semester: 1, subject: '과학', domain: '운동과 에너지' },
  { code: '[4과06-01]', content: '식물의 한살이 과정을 관찰한다.', grade: 4, semester: 1, subject: '과학', domain: '생명' },
  { code: '[4과06-02]', content: '식물을 특징에 따라 분류한다.', grade: 4, semester: 1, subject: '과학', domain: '생명' },

  // ========== 과학 4학년 2학기 ==========
  { code: '[4과05-03]', content: '그림자와 거울에 비친 모습을 관찰한다.', grade: 4, semester: 2, subject: '과학', domain: '운동과 에너지' },
  { code: '[4과06-03]', content: '식물의 생활을 환경과 관련지어 탐구한다.', grade: 4, semester: 2, subject: '과학', domain: '생명' },
  { code: '[4과07-01]', content: '화산 활동과 지진이 일어나는 까닭을 탐구한다.', grade: 4, semester: 2, subject: '과학', domain: '지구와 우주' },
  { code: '[4과07-02]', content: '지표의 변화 과정을 이해한다.', grade: 4, semester: 2, subject: '과학', domain: '지구와 우주' },
  { code: '[4과07-03]', content: '물의 여행을 탐구하고 물의 중요성을 인식한다.', grade: 4, semester: 2, subject: '과학', domain: '지구와 우주' },

  // ========== 과학 5학년 1학기 ==========
  { code: '[6과01-01]', content: '온도가 다른 두 물체를 접촉하여 온도가 같아지는 현상을 관찰하고, 열의 이동을 설명할 수 있다.', grade: 5, semester: 1, subject: '과학', domain: '물질' },
  { code: '[6과01-02]', content: '고체, 액체, 기체에서 열이 이동하는 현상을 관찰하고, 열의 이동 방법을 비교할 수 있다.', grade: 5, semester: 1, subject: '과학', domain: '물질' },
  { code: '[6과02-01]', content: '용해 현상을 관찰하고 용질, 용매, 용액을 설명할 수 있다.', grade: 5, semester: 1, subject: '과학', domain: '물질' },
  { code: '[6과05-01]', content: '날씨가 우리 생활에 미치는 영향을 알고, 습도를 측정하는 방법을 설명할 수 있다.', grade: 5, semester: 1, subject: '과학', domain: '지구와 우주' },
  { code: '[6과06-01]', content: '태양계를 구성하는 태양과 행성을 알고, 태양이 지구의 에너지원임을 설명할 수 있다.', grade: 5, semester: 1, subject: '과학', domain: '지구와 우주' },

  // ========== 과학 5학년 2학기 ==========
  { code: '[6과02-02]', content: '용질의 종류에 따라 용해되는 양이 다름을 실험을 통해 확인하고, 용해도를 설명할 수 있다.', grade: 5, semester: 2, subject: '과학', domain: '물질' },
  { code: '[6과03-01]', content: '다양한 생물이 우리 생활에 미치는 긍정적인 영향과 부정적인 영향을 조사하고 발표할 수 있다.', grade: 5, semester: 2, subject: '과학', domain: '생명' },
  { code: '[6과04-01]', content: '식물과 동물의 한살이를 비교하고, 식물과 동물의 한살이 특징을 설명할 수 있다.', grade: 5, semester: 2, subject: '과학', domain: '생명' },
  { code: '[6과04-02]', content: '뿌리의 구조와 기능을 이해하고, 뿌리의 여러 가지 형태를 비교할 수 있다.', grade: 5, semester: 2, subject: '과학', domain: '생명' },
  { code: '[6과05-02]', content: '이슬, 안개, 구름, 비, 눈의 생성 과정을 모형을 통해 설명할 수 있다.', grade: 5, semester: 2, subject: '과학', domain: '지구와 우주' },
  { code: '[6과06-02]', content: '태양계 행성의 크기와 거리를 비교하고, 태양계 모형을 만들 수 있다.', grade: 5, semester: 2, subject: '과학', domain: '지구와 우주' },

  // ========== 과학 6학년 1학기 ==========
  { code: '[6과07-01]', content: '여러 가지 산과 염기를 지시약으로 분류하고, 우리 생활에서 산과 염기를 이용하는 예를 설명할 수 있다.', grade: 6, semester: 1, subject: '과학', domain: '물질' },
  { code: '[6과07-02]', content: '산과 염기를 섞으면 산과 염기의 성질이 약해지는 중화 반응을 설명할 수 있다.', grade: 6, semester: 1, subject: '과학', domain: '물질' },
  { code: '[6과08-01]', content: '렌즈를 통과한 빛이 굴절되는 현상을 관찰하고, 볼록 렌즈와 오목 렌즈의 특징을 설명할 수 있다.', grade: 6, semester: 1, subject: '과학', domain: '운동과 에너지' },
  { code: '[6과10-01]', content: '뼈와 근육의 구조와 기능을 이해하고, 운동 기관의 역할을 설명할 수 있다.', grade: 6, semester: 1, subject: '과학', domain: '생명' },
  { code: '[6과10-02]', content: '소화, 순환, 호흡, 배설 기관의 구조와 기능을 이해하고, 인체 기관의 상호 작용을 설명할 수 있다.', grade: 6, semester: 1, subject: '과학', domain: '생명' },
  { code: '[6과12-01]', content: '지구와 달의 운동을 관찰하고, 낮과 밤, 달의 위상 변화 원인을 설명할 수 있다.', grade: 6, semester: 1, subject: '과학', domain: '지구와 우주' },

  // ========== 과학 6학년 2학기 ==========
  { code: '[6과09-01]', content: '생태계가 생물 요소와 비생물 요소로 이루어져 있음을 알고, 생태계 구성 요소의 역할을 설명할 수 있다.', grade: 6, semester: 2, subject: '과학', domain: '생명' },
  { code: '[6과09-02]', content: '생태계 내에서 생산자, 소비자, 분해자의 관계와 먹이 사슬, 먹이 그물을 설명할 수 있다.', grade: 6, semester: 2, subject: '과학', domain: '생명' },
  { code: '[6과09-03]', content: '생태계 평형이 파괴되는 원인을 알고, 생태계 보전의 중요성을 설명할 수 있다.', grade: 6, semester: 2, subject: '과학', domain: '생명' },
  { code: '[6과11-01]', content: '전지와 전구, 전선을 이용하여 전기 회로를 구성하고, 전구에 불이 켜지는 조건을 설명할 수 있다.', grade: 6, semester: 2, subject: '과학', domain: '운동과 에너지' },
  { code: '[6과11-02]', content: '전기를 절약하고 안전하게 사용하는 방법을 알고 실천할 수 있다.', grade: 6, semester: 2, subject: '과학', domain: '운동과 에너지' },
  { code: '[6과12-02]', content: '계절에 따른 태양 고도, 기온, 낮의 길이 변화를 조사하고, 계절 변화의 원인을 설명할 수 있다.', grade: 6, semester: 2, subject: '과학', domain: '지구와 우주' },

  // ========== 영어 3-4학년군 (1학기) ==========
  { code: '[4영01-01]', content: '알파벳 대소문자를 식별한다.', grade: 3, semester: 1, subject: '영어', domain: '듣기' },
  { code: '[4영01-02]', content: '쉽고 간단한 낱말이나 어구의 의미를 이해한다.', grade: 3, semester: 1, subject: '영어', domain: '듣기' },
  { code: '[4영01-03]', content: '쉽고 간단한 문장을 듣고 이해한다.', grade: 3, semester: 1, subject: '영어', domain: '듣기' },
  { code: '[4영02-01]', content: '실물이나 그림을 보고 쉽고 간단한 낱말로 말한다.', grade: 3, semester: 1, subject: '영어', domain: '말하기' },
  { code: '[4영02-02]', content: '한두 문장으로 자신을 소개한다.', grade: 3, semester: 1, subject: '영어', domain: '말하기' },
  { code: '[4영02-03]', content: '일상생활에서 간단한 인사를 나눈다.', grade: 3, semester: 1, subject: '영어', domain: '말하기' },
  { code: '[4영03-01]', content: '소리와 철자의 관계를 이해하며 낱말을 읽는다.', grade: 3, semester: 1, subject: '영어', domain: '읽기' },
  { code: '[4영04-01]', content: '알파벳 대소문자를 구별하여 쓴다.', grade: 3, semester: 1, subject: '영어', domain: '쓰기' },

  // ========== 영어 3-4학년군 (2학기) ==========
  { code: '[4영01-04]', content: '쉽고 간단한 대화를 듣고 이해한다.', grade: 4, semester: 2, subject: '영어', domain: '듣기' },
  { code: '[4영01-05]', content: '간단한 지시나 설명을 듣고 이해한다.', grade: 4, semester: 2, subject: '영어', domain: '듣기' },
  { code: '[4영02-04]', content: '간단한 질문에 답한다.', grade: 4, semester: 2, subject: '영어', domain: '말하기' },
  { code: '[4영02-05]', content: '일상생활에서 사용하는 간단한 표현을 말한다.', grade: 4, semester: 2, subject: '영어', domain: '말하기' },
  { code: '[4영03-02]', content: '쉽고 간단한 문장을 읽고 이해한다.', grade: 4, semester: 2, subject: '영어', domain: '읽기' },
  { code: '[4영03-03]', content: '그림이나 실물과 관련된 문장을 읽고 이해한다.', grade: 4, semester: 2, subject: '영어', domain: '읽기' },
  { code: '[4영04-02]', content: '쉽고 간단한 낱말을 따라 쓴다.', grade: 4, semester: 2, subject: '영어', domain: '쓰기' },
  { code: '[4영04-03]', content: '쉽고 간단한 낱말이나 어구를 보고 쓴다.', grade: 4, semester: 2, subject: '영어', domain: '쓰기' },

  // ========== 영어 5-6학년군 (1학기) - 2015 개정 교육과정 ==========
  { code: '[6영01-01]', content: '어구나 문장을 듣고 세부 정보를 파악할 수 있다.', grade: 5, semester: 1, subject: '영어', domain: '듣기' },
  { code: '[6영01-02]', content: '일상생활 관련 간단한 대화를 듣고 세부 정보를 파악할 수 있다.', grade: 5, semester: 1, subject: '영어', domain: '듣기' },
  { code: '[6영01-03]', content: '주변의 사람이나 사물에 관한 간단한 말이나 대화를 듣고 세부 정보를 파악할 수 있다.', grade: 5, semester: 1, subject: '영어', domain: '듣기' },
  { code: '[6영01-04]', content: '그림, 사진, 또는 도표에 관한 쉽고 간단한 말이나 대화를 듣고 세부 정보를 파악할 수 있다.', grade: 5, semester: 1, subject: '영어', domain: '듣기' },
  { code: '[6영02-01]', content: '그림, 사진, 또는 도표에 대해 한두 문장으로 표현할 수 있다.', grade: 5, semester: 1, subject: '영어', domain: '말하기' },
  { code: '[6영02-02]', content: '자신이나 가족에 대해 한두 문장으로 소개할 수 있다.', grade: 5, semester: 1, subject: '영어', domain: '말하기' },
  { code: '[6영02-03]', content: '일상생활 속의 친숙한 주제에 관해 짧고 간단하게 말할 수 있다.', grade: 5, semester: 1, subject: '영어', domain: '말하기' },
  { code: '[6영02-04]', content: '일상생활에 관한 간단한 대화를 할 수 있다.', grade: 5, semester: 1, subject: '영어', domain: '말하기' },
  { code: '[6영03-01]', content: '쉽고 간단한 문장을 따라 읽을 수 있다.', grade: 5, semester: 1, subject: '영어', domain: '읽기' },
  { code: '[6영03-02]', content: '쉽고 간단한 문장을 읽고 의미를 이해할 수 있다.', grade: 5, semester: 1, subject: '영어', domain: '읽기' },
  { code: '[6영03-03]', content: '일상생활 속의 친숙한 주제에 관한 글을 읽고 세부 정보를 파악할 수 있다.', grade: 5, semester: 1, subject: '영어', domain: '읽기' },
  { code: '[6영04-01]', content: '알파벳 대소문자를 구별하여 쓸 수 있다.', grade: 5, semester: 1, subject: '영어', domain: '쓰기' },
  { code: '[6영04-02]', content: '구두로 익힌 문장을 쓸 수 있다.', grade: 5, semester: 1, subject: '영어', domain: '쓰기' },
  { code: '[6영04-03]', content: '실물, 그림, 도표를 보고 쉽고 간단한 문장으로 표현할 수 있다.', grade: 5, semester: 1, subject: '영어', domain: '쓰기' },

  // ========== 영어 5-6학년군 (2학기) - 2015 개정 교육과정 ==========
  { code: '[6영01-05]', content: '간단하고 쉬운 노래, 챈트, 동시를 듣고 따라 말할 수 있다.', grade: 6, semester: 2, subject: '영어', domain: '듣기' },
  { code: '[6영01-06]', content: '짧고 쉬운 이야기나 설명을 듣고 주제, 대의를 파악할 수 있다.', grade: 6, semester: 2, subject: '영어', domain: '듣기' },
  { code: '[6영01-07]', content: '일상생활 관련 친숙한 주제에 관한 간단한 말이나 대화를 듣고 주제, 대의를 파악할 수 있다.', grade: 6, semester: 2, subject: '영어', domain: '듣기' },
  { code: '[6영02-05]', content: '간단한 표현을 사용하여 지시, 설명하는 말을 할 수 있다.', grade: 6, semester: 2, subject: '영어', domain: '말하기' },
  { code: '[6영02-06]', content: '간단한 표현을 사용하여 허락하거나 요청하는 말을 할 수 있다.', grade: 6, semester: 2, subject: '영어', domain: '말하기' },
  { code: '[6영02-07]', content: '간단한 표현을 사용하여 일이나 사건의 순서, 전후 관계를 말할 수 있다.', grade: 6, semester: 2, subject: '영어', domain: '말하기' },
  { code: '[6영02-08]', content: '간단한 역할놀이를 할 수 있다.', grade: 6, semester: 2, subject: '영어', domain: '말하기' },
  { code: '[6영03-04]', content: '짧고 쉬운 글을 읽고 줄거리를 파악할 수 있다.', grade: 6, semester: 2, subject: '영어', domain: '읽기' },
  { code: '[6영03-05]', content: '일상생활에 관한 짧고 쉬운 글을 읽고 중심 내용을 파악할 수 있다.', grade: 6, semester: 2, subject: '영어', domain: '읽기' },
  { code: '[6영04-04]', content: '자신에 대한 한두 문장을 쓸 수 있다.', grade: 6, semester: 2, subject: '영어', domain: '쓰기' },
  { code: '[6영04-05]', content: '예시문을 참고하여 간단한 초대, 감사, 축하, 안부 등의 글을 쓸 수 있다.', grade: 6, semester: 2, subject: '영어', domain: '쓰기' },

  // ========== 도덕 3-4학년군 (1학기) ==========
  { code: '[4도01-01]', content: '정직의 의미와 중요성을 알고 생활 속에서 정직하게 행동한다.', grade: 3, semester: 1, subject: '도덕', domain: '자신과의 관계' },
  { code: '[4도01-02]', content: '자신의 장점을 발견하고 소중히 여기며 긍정적인 자아상을 형성한다.', grade: 3, semester: 1, subject: '도덕', domain: '자신과의 관계' },
  { code: '[4도01-03]', content: '자신의 감정을 적절하게 표현하고 조절하는 방법을 익힌다.', grade: 3, semester: 1, subject: '도덕', domain: '자신과의 관계' },
  { code: '[4도02-01]', content: '가정에서 예절을 지키며 가족을 존중하고 사랑한다.', grade: 3, semester: 1, subject: '도덕', domain: '타인과의 관계' },
  { code: '[4도02-02]', content: '친구와 사이좋게 지내며 서로 돕는다.', grade: 3, semester: 1, subject: '도덕', domain: '타인과의 관계' },
  { code: '[4도02-03]', content: '다른 사람의 처지를 이해하고 배려하는 마음을 가진다.', grade: 3, semester: 1, subject: '도덕', domain: '타인과의 관계' },

  // ========== 도덕 3-4학년군 (2학기) ==========
  { code: '[4도03-01]', content: '공익과 공정의 의미를 알고 생활 속에서 실천한다.', grade: 4, semester: 2, subject: '도덕', domain: '사회·공동체와의 관계' },
  { code: '[4도03-02]', content: '규칙과 법의 중요성을 이해하고 준수한다.', grade: 4, semester: 2, subject: '도덕', domain: '사회·공동체와의 관계' },
  { code: '[4도03-03]', content: '나라를 사랑하는 마음을 가진다.', grade: 4, semester: 2, subject: '도덕', domain: '사회·공동체와의 관계' },
  { code: '[4도04-01]', content: '생명의 소중함을 알고 생명을 존중한다.', grade: 4, semester: 2, subject: '도덕', domain: '자연·초월과의 관계' },
  { code: '[4도04-02]', content: '환경의 소중함을 알고 환경 보전에 참여한다.', grade: 4, semester: 2, subject: '도덕', domain: '자연·초월과의 관계' },
  { code: '[4도04-03]', content: '아름다운 마음의 중요성을 알고 가꾼다.', grade: 4, semester: 2, subject: '도덕', domain: '자연·초월과의 관계' },

  // ========== 도덕 5-6학년군 (1학기) - 2015 개정 교육과정 ==========
  { code: '[6도01-01]', content: '긍정적 생활을 하는 것이 자신과 다른 사람에게 주는 의미와 영향을 탐구하고, 자주적인 삶의 의미와 중요성을 설명할 수 있다.', grade: 5, semester: 1, subject: '도덕', domain: '자신과의 관계' },
  { code: '[6도01-02]', content: '자신이 추구하는 삶을 탐색하고, 인생 목표를 세워 바람직한 삶을 실천할 수 있다.', grade: 5, semester: 1, subject: '도덕', domain: '자신과의 관계' },
  { code: '[6도01-03]', content: '자신의 욕구와 감정을 다스리는 방법을 익히고 절제하는 생활을 실천할 수 있다.', grade: 5, semester: 1, subject: '도덕', domain: '자신과의 관계' },
  { code: '[6도02-01]', content: '사이버 공간에서 발생하는 여러 문제에 대한 도덕적 민감성을 기르고, 사이버 공간에서 지켜야 할 예절과 법을 알고 습관화할 수 있다.', grade: 5, semester: 1, subject: '도덕', domain: '타인과의 관계' },
  { code: '[6도02-02]', content: '다양한 갈등을 평화적으로 해결하는 것의 중요성과 방법을 알고, 평화적으로 갈등을 해결하는 의지를 기를 수 있다.', grade: 5, semester: 1, subject: '도덕', domain: '타인과의 관계' },
  { code: '[6도02-03]', content: '봉사의 의미와 중요성을 알고, 주변 사람들을 위해 봉사하려는 실천 의지를 기를 수 있다.', grade: 5, semester: 1, subject: '도덕', domain: '타인과의 관계' },

  // ========== 도덕 5-6학년군 (2학기) - 2015 개정 교육과정 ==========
  { code: '[6도03-01]', content: '인권의 의미와 인권을 존중하는 삶의 중요성을 이해하고, 인권 존중의 방법을 익혀 이를 실천할 수 있다.', grade: 6, semester: 2, subject: '도덕', domain: '사회·공동체와의 관계' },
  { code: '[6도03-02]', content: '공정의 의미와 공정한 사회의 필요성을 이해하고, 일상생활에서 공정하게 생활하려는 실천 의지를 기를 수 있다.', grade: 6, semester: 2, subject: '도덕', domain: '사회·공동체와의 관계' },
  { code: '[6도03-03]', content: '나라를 사랑하는 마음의 중요성을 깨닫고, 통일 한국을 실현하기 위한 적극적인 통일 의지와 태도를 기를 수 있다.', grade: 6, semester: 2, subject: '도덕', domain: '사회·공동체와의 관계' },
  { code: '[6도04-01]', content: '생명의 소중함을 이해하고 인간 생명과 환경 문제에 관심을 가지며 인간 생명과 자연을 보호하려는 태도를 가질 수 있다.', grade: 6, semester: 2, subject: '도덕', domain: '자연·초월과의 관계' },
  { code: '[6도04-02]', content: '자연과 인간의 관계를 이해하고, 자연을 보호하기 위해 내가 할 수 있는 일에 대해 생각하고 실천할 수 있다.', grade: 6, semester: 2, subject: '도덕', domain: '자연·초월과의 관계' },
  { code: '[6도04-03]', content: '다양한 문화에 대한 이해를 바탕으로 다른 문화를 가진 사람에 대한 편견과 차별 없이 공존하려는 태도를 기를 수 있다.', grade: 6, semester: 2, subject: '도덕', domain: '사회·공동체와의 관계' },

  // ========== 체육 3-4학년군 (1학기) ==========
  { code: '[4체01-01]', content: '건강의 의미와 중요성을 이해하고 건강한 생활 습관을 실천한다.', grade: 3, semester: 1, subject: '체육', domain: '건강' },
  { code: '[4체01-02]', content: '건강과 운동의 관계를 이해하고 규칙적으로 운동한다.', grade: 3, semester: 1, subject: '체육', domain: '건강' },
  { code: '[4체01-03]', content: '안전한 생활 습관의 중요성을 이해하고 실천한다.', grade: 3, semester: 1, subject: '체육', domain: '건강' },
  { code: '[4체02-01]', content: '여러 가지 도전 활동에 참여하며 도전 정신을 기른다.', grade: 3, semester: 1, subject: '체육', domain: '도전' },
  { code: '[4체02-02]', content: '기록 도전 활동에 참여하고 자신의 기록을 향상시킨다.', grade: 3, semester: 1, subject: '체육', domain: '도전' },
  { code: '[4체02-03]', content: '동작 도전 활동에 참여하며 꾸준히 연습한다.', grade: 3, semester: 1, subject: '체육', domain: '도전' },

  // ========== 체육 3-4학년군 (2학기) ==========
  { code: '[4체03-01]', content: '경쟁 활동에 참여하며 경쟁의 의미와 스포츠맨십을 이해한다.', grade: 4, semester: 2, subject: '체육', domain: '경쟁' },
  { code: '[4체03-02]', content: '영역형 경쟁 활동에 참여하며 기본 기능을 익힌다.', grade: 4, semester: 2, subject: '체육', domain: '경쟁' },
  { code: '[4체03-03]', content: '필드형 경쟁 활동에 참여하며 협동심을 기른다.', grade: 4, semester: 2, subject: '체육', domain: '경쟁' },
  { code: '[4체04-01]', content: '표현 활동의 특성을 이해하고 다양하게 표현한다.', grade: 4, semester: 2, subject: '체육', domain: '표현' },
  { code: '[4체04-02]', content: '리듬에 맞추어 움직이며 표현력을 기른다.', grade: 4, semester: 2, subject: '체육', domain: '표현' },
  { code: '[4체04-03]', content: '다양한 움직임을 창의적으로 표현한다.', grade: 4, semester: 2, subject: '체육', domain: '표현' },

  // ========== 체육 5-6학년군 (1학기) - 2015 개정 교육과정 ==========
  { code: '[6체01-01]', content: '건강이 가지는 개인적, 사회적 의미와 건강 수준에 영향을 미치는 요인을 이해하고 적절한 운동을 실천할 수 있다.', grade: 5, semester: 1, subject: '체육', domain: '건강' },
  { code: '[6체01-02]', content: '여러 체력 요소(근력, 심폐지구력, 유연성 등)를 이해하고 자신의 체력 수준을 측정하여 체력 운동 계획을 세워 수행할 수 있다.', grade: 5, semester: 1, subject: '체육', domain: '건강' },
  { code: '[6체01-03]', content: '균형 잡힌 식사가 건강에 중요함을 알고, 바른 식생활을 실천할 수 있다.', grade: 5, semester: 1, subject: '체육', domain: '건강' },
  { code: '[6체02-01]', content: '속도 도전의 개념과 특성을 탐색하고, 빠르게 이동하는 동작과 관련된 기초 기능을 익혀 게임이나 활동에 적용할 수 있다.', grade: 5, semester: 1, subject: '체육', domain: '도전' },
  { code: '[6체02-02]', content: '동작 도전의 개념과 특성을 이해하고 동작 기능을 익혀 공연이나 발표에서 동작을 표현할 수 있다.', grade: 5, semester: 1, subject: '체육', domain: '도전' },
  { code: '[6체02-03]', content: '거리 도전의 개념과 특성을 이해하고 투·도 기능을 익혀 자신의 기록에 도전할 수 있다.', grade: 5, semester: 1, subject: '체육', domain: '도전' },

  // ========== 체육 5-6학년군 (2학기) - 2015 개정 교육과정 ==========
  { code: '[6체03-01]', content: '영역형 경쟁의 개념과 특성을 이해하고, 영역형 경쟁에서 사용되는 기본 기능과 전략을 탐색할 수 있다.', grade: 6, semester: 2, subject: '체육', domain: '경쟁' },
  { code: '[6체03-02]', content: '네트형 경쟁의 개념과 특성을 이해하고, 네트형 경쟁에서 사용되는 기본 기능과 전략을 탐색할 수 있다.', grade: 6, semester: 2, subject: '체육', domain: '경쟁' },
  { code: '[6체03-03]', content: '필드형 경쟁의 개념과 특성을 이해하고, 필드형 경쟁에서 사용되는 기본 기능과 전략을 탐색할 수 있다.', grade: 6, semester: 2, subject: '체육', domain: '경쟁' },
  { code: '[6체04-01]', content: '움직임 표현의 개념과 특성을 탐색하고 다양한 주제의 움직임 표현 활동에 참여하여 신체 움직임으로 표현할 수 있다.', grade: 6, semester: 2, subject: '체육', domain: '표현' },
  { code: '[6체04-02]', content: '리듬 표현의 개념과 특성을 탐색하고 다양한 리듬에 맞추어 신체 움직임으로 표현할 수 있다.', grade: 6, semester: 2, subject: '체육', domain: '표현' },
  { code: '[6체04-03]', content: '민속 표현의 개념과 특성을 탐색하고 전통 문화를 바르게 이해하며 표현할 수 있다.', grade: 6, semester: 2, subject: '체육', domain: '표현' },
  { code: '[6체05-01]', content: '생활 안전의 의미와 중요성을 알고, 자신과 타인의 안전을 위한 위험 상황 예방 및 대처 방법을 익혀 실천할 수 있다.', grade: 6, semester: 2, subject: '체육', domain: '안전' },
  { code: '[6체05-02]', content: '야외 활동에서 발생하는 안전사고의 원인을 알고 예방하며, 안전하게 활동할 수 있다.', grade: 6, semester: 2, subject: '체육', domain: '안전' },

  // ========== 음악 3-4학년군 (1학기) ==========
  { code: '[4음01-01]', content: '악곡의 특징을 이해하며 노래 부르거나 악기로 연주한다.', grade: 3, semester: 1, subject: '음악', domain: '표현' },
  { code: '[4음01-02]', content: '바른 자세와 호흡으로 노래 부른다.', grade: 3, semester: 1, subject: '음악', domain: '표현' },
  { code: '[4음01-03]', content: '악기 연주법을 익혀 간단한 악곡을 연주한다.', grade: 3, semester: 1, subject: '음악', domain: '표현' },
  { code: '[4음01-04]', content: '제재곡의 리듬과 가락을 표현한다.', grade: 3, semester: 1, subject: '음악', domain: '표현' },
  { code: '[4음02-01]', content: '음악의 구성 요소를 파악하며 음악을 감상한다.', grade: 3, semester: 1, subject: '음악', domain: '감상' },
  { code: '[4음02-02]', content: '음악을 듣고 느낌을 다양하게 표현한다.', grade: 3, semester: 1, subject: '음악', domain: '감상' },

  // ========== 음악 3-4학년군 (2학기) ==========
  { code: '[4음01-05]', content: '간단한 가락을 만들어 표현한다.', grade: 4, semester: 2, subject: '음악', domain: '표현' },
  { code: '[4음01-06]', content: '부분 2부 합창에 참여한다.', grade: 4, semester: 2, subject: '음악', domain: '표현' },
  { code: '[4음01-07]', content: '간단한 합주에 참여한다.', grade: 4, semester: 2, subject: '음악', domain: '표현' },
  { code: '[4음02-03]', content: '우리나라 음악의 특징을 이해하며 감상한다.', grade: 4, semester: 2, subject: '음악', domain: '감상' },
  { code: '[4음02-04]', content: '다양한 나라의 음악을 감상한다.', grade: 4, semester: 2, subject: '음악', domain: '감상' },
  { code: '[4음03-01]', content: '음악과 생활의 관계를 이해한다.', grade: 4, semester: 2, subject: '음악', domain: '생활화' },

  // ========== 음악 5-6학년군 (1학기) - 2015 개정 교육과정 ==========
  { code: '[6음01-01]', content: '악곡의 특징을 이해하며 노래 부르거나 악기로 연주할 수 있다.', grade: 5, semester: 1, subject: '음악', domain: '표현' },
  { code: '[6음01-02]', content: '악곡에 어울리는 신체표현을 할 수 있다.', grade: 5, semester: 1, subject: '음악', domain: '표현' },
  { code: '[6음01-03]', content: '제재곡의 노랫말을 바꾸거나 노랫말에 맞는 말붙임새로 만들 수 있다.', grade: 5, semester: 1, subject: '음악', domain: '표현' },
  { code: '[6음01-04]', content: '제재곡의 일부 가락을 바꾸어 표현할 수 있다.', grade: 5, semester: 1, subject: '음악', domain: '표현' },
  { code: '[6음01-05]', content: '이야기의 장면이나 상황을 음악으로 표현할 수 있다.', grade: 5, semester: 1, subject: '음악', domain: '표현' },
  { code: '[6음02-01]', content: '5~6학년 수준의 음악 요소와 개념을 구별하여 표현할 수 있다.', grade: 5, semester: 1, subject: '음악', domain: '표현' },

  // ========== 음악 5-6학년군 (2학기) - 2015 개정 교육과정 ==========
  { code: '[6음02-02]', content: '다양한 종류의 음악을 듣고 음악의 특징에 대해 발표할 수 있다.', grade: 6, semester: 2, subject: '음악', domain: '감상' },
  { code: '[6음02-03]', content: '음악을 듣고 역사적, 문화적 배경 속에서 음악의 특징을 설명할 수 있다.', grade: 6, semester: 2, subject: '음악', domain: '감상' },
  { code: '[6음03-01]', content: '음악을 활용하여 가정, 학교, 사회 등의 행사에 참여하고 느낌을 발표할 수 있다.', grade: 6, semester: 2, subject: '음악', domain: '생활화' },
  { code: '[6음03-02]', content: '음악이 사회에서 다양하게 활용됨을 이해할 수 있다.', grade: 6, semester: 2, subject: '음악', domain: '생활화' },
  { code: '[6음03-03]', content: '우리 음악을 연주하고 관련 행사에 참여함으로써 우리 음악에 대해 자부심을 갖는다.', grade: 6, semester: 2, subject: '음악', domain: '생활화' },
  { code: '[6음03-04]', content: '세계 여러 나라의 음악을 비교하고 문화적 특징을 이해할 수 있다.', grade: 6, semester: 2, subject: '음악', domain: '생활화' },

  // ========== 미술 3-4학년군 (1학기) ==========
  { code: '[4미01-01]', content: '주변 대상을 관찰하여 자신의 느낌과 생각을 표현한다.', grade: 3, semester: 1, subject: '미술', domain: '체험' },
  { code: '[4미01-02]', content: '주변 환경에서 색, 형, 질감을 탐색한다.', grade: 3, semester: 1, subject: '미술', domain: '체험' },
  { code: '[4미01-03]', content: '생활 속에서 미술의 역할을 탐색한다.', grade: 3, semester: 1, subject: '미술', domain: '체험' },
  { code: '[4미02-01]', content: '평면이나 입체에 다양한 표현 방법을 탐색한다.', grade: 3, semester: 1, subject: '미술', domain: '표현' },
  { code: '[4미02-02]', content: '다양한 재료와 용구를 활용하여 표현한다.', grade: 3, semester: 1, subject: '미술', domain: '표현' },
  { code: '[4미02-03]', content: '관찰 대상의 특징을 살려 표현한다.', grade: 3, semester: 1, subject: '미술', domain: '표현' },

  // ========== 미술 3-4학년군 (2학기) ==========
  { code: '[4미02-04]', content: '상상의 세계를 다양하게 표현한다.', grade: 4, semester: 2, subject: '미술', domain: '표현' },
  { code: '[4미02-05]', content: '주제를 탐색하여 자유롭게 표현한다.', grade: 4, semester: 2, subject: '미술', domain: '표현' },
  { code: '[4미02-06]', content: '판화, 콜라주 등 다양한 표현 기법을 활용한다.', grade: 4, semester: 2, subject: '미술', domain: '표현' },
  { code: '[4미03-01]', content: '미술 작품을 감상하고 느낌을 발표한다.', grade: 4, semester: 2, subject: '미술', domain: '감상' },
  { code: '[4미03-02]', content: '다양한 시대와 문화의 미술 작품을 감상한다.', grade: 4, semester: 2, subject: '미술', domain: '감상' },
  { code: '[4미03-03]', content: '미술 작품을 비교하며 특징을 탐색한다.', grade: 4, semester: 2, subject: '미술', domain: '감상' },

  // ========== 미술 5-6학년군 (1학기) - 2015 개정 교육과정 ==========
  { code: '[6미01-01]', content: '자신의 특징을 다양한 방법으로 탐색하여 나타낼 수 있다.', grade: 5, semester: 1, subject: '미술', domain: '체험' },
  { code: '[6미01-02]', content: '미술 작품과 생활용품의 심미적 가치를 비교하여 탐색할 수 있다.', grade: 5, semester: 1, subject: '미술', domain: '체험' },
  { code: '[6미01-03]', content: '미술과 다양한 분야가 서로 영향을 미치고 있음을 알 수 있다.', grade: 5, semester: 1, subject: '미술', domain: '체험' },
  { code: '[6미01-04]', content: '이미지를 활용하여 자신의 생각과 느낌을 전달할 수 있다.', grade: 5, semester: 1, subject: '미술', domain: '체험' },
  { code: '[6미02-01]', content: '표현 주제를 잘 나타낼 수 있는 다양한 방법을 탐색하여 계획할 수 있다.', grade: 5, semester: 1, subject: '미술', domain: '표현' },
  { code: '[6미02-02]', content: '주제를 다양한 방법으로 나타낼 수 있다.', grade: 5, semester: 1, subject: '미술', domain: '표현' },
  { code: '[6미02-03]', content: '다양한 자료를 활용하여 창의적인 아이디어를 발전시킬 수 있다.', grade: 5, semester: 1, subject: '미술', domain: '표현' },

  // ========== 미술 5-6학년군 (2학기) - 2015 개정 교육과정 ==========
  { code: '[6미02-04]', content: '조형 원리의 특징을 탐색하고, 표현 의도에 적합하게 활용할 수 있다.', grade: 6, semester: 2, subject: '미술', domain: '표현' },
  { code: '[6미02-05]', content: '다양한 표현 방법의 특징과 과정을 탐색하여 활용할 수 있다.', grade: 6, semester: 2, subject: '미술', domain: '표현' },
  { code: '[6미02-06]', content: '작품 제작의 전체 과정에서 느낀 점, 알게 된 점 등을 서로 이야기할 수 있다.', grade: 6, semester: 2, subject: '미술', domain: '표현' },
  { code: '[6미03-01]', content: '미술 작품의 내용과 형식에 대해 설명할 수 있다.', grade: 6, semester: 2, subject: '미술', domain: '감상' },
  { code: '[6미03-02]', content: '미술 작품이 만들어진 때와 곳의 사회적, 문화적 배경을 알아보고 작품을 해석할 수 있다.', grade: 6, semester: 2, subject: '미술', domain: '감상' },
  { code: '[6미03-03]', content: '미술 작품의 비평 방법에 따라 작품에 대해 자신의 생각과 느낌을 말할 수 있다.', grade: 6, semester: 2, subject: '미술', domain: '감상' },

  // ========== 실과 5-6학년군 (1학기) - 2015 개정 교육과정 ==========
  { code: '[6실01-01]', content: '나와 가족의 관계를 알고 서로 돕고 의지하는 가족의 소중함을 이해할 수 있다.', grade: 5, semester: 1, subject: '실과', domain: '인간 발달과 가족' },
  { code: '[6실01-02]', content: '가정생활에서 요구되는 기본 예절을 익히고, 올바른 언어와 행동으로 생활할 수 있다.', grade: 5, semester: 1, subject: '실과', domain: '인간 발달과 가족' },
  { code: '[6실02-01]', content: '자신과 가족의 영양 필요량을 이해하고 균형 잡힌 식사를 계획하여 실천할 수 있다.', grade: 5, semester: 1, subject: '실과', domain: '가정생활과 안전' },
  { code: '[6실02-02]', content: '조리의 기초를 이해하고 간단한 조리 도구를 이용하여 음식을 만들 수 있다.', grade: 5, semester: 1, subject: '실과', domain: '가정생활과 안전' },
  { code: '[6실02-03]', content: '간단한 수선 방법을 알고 옷 정리와 보관을 할 수 있다.', grade: 5, semester: 1, subject: '실과', domain: '가정생활과 안전' },
  { code: '[6실02-04]', content: '생활 자원의 종류와 특성을 알고, 효율적인 사용과 관리 방법을 탐색하여 실천할 수 있다.', grade: 5, semester: 1, subject: '실과', domain: '가정생활과 안전' },
  { code: '[6실03-01]', content: '생활 속에서 컴퓨팅 사고를 기반으로 문제를 해결하는 방법을 탐색하고 적용할 수 있다.', grade: 5, semester: 1, subject: '실과', domain: '기술 시스템' },
  { code: '[6실03-02]', content: '절차적 사고에 의한 문제 분석과 해결 과정을 통해 알고리즘을 설계할 수 있다.', grade: 5, semester: 1, subject: '실과', domain: '기술 시스템' },

  // ========== 실과 5-6학년군 (2학기) - 2015 개정 교육과정 ==========
  { code: '[6실04-01]', content: '프로그래밍 도구를 사용하여 기초적인 프로그래밍 과정을 체험할 수 있다.', grade: 6, semester: 2, subject: '실과', domain: '기술 시스템' },
  { code: '[6실04-02]', content: '소프트웨어가 사용되는 다양한 사례를 알고 소프트웨어의 중요성을 이해할 수 있다.', grade: 6, semester: 2, subject: '실과', domain: '기술 시스템' },
  { code: '[6실04-03]', content: '다양한 재료의 특성과 가공 방법을 알고 제품 만들기에 적용할 수 있다.', grade: 6, semester: 2, subject: '실과', domain: '기술 시스템' },
  { code: '[6실04-04]', content: '발명의 의미와 중요성을 이해하고 간단한 발명 작품을 만들 수 있다.', grade: 6, semester: 2, subject: '실과', domain: '기술 시스템' },
  { code: '[6실05-01]', content: '식물과 동물 자원의 중요성을 이해하고 식물과 동물을 기르는 방법을 익힐 수 있다.', grade: 6, semester: 2, subject: '실과', domain: '기술 활용' },
  { code: '[6실05-02]', content: '생활 속 전기, 전자 기술의 기초를 이해하고, 간단한 전기 회로를 구성할 수 있다.', grade: 6, semester: 2, subject: '실과', domain: '기술 활용' },
  { code: '[6실05-03]', content: '로봇의 기초적인 개념과 작동 원리를 이해하고, 간단한 로봇을 구상하고 만들 수 있다.', grade: 6, semester: 2, subject: '실과', domain: '기술 활용' },
  { code: '[6실05-04]', content: '일과 직업의 의미와 중요성을 이해하고 자신의 흥미, 적성에 맞는 진로를 탐색할 수 있다.', grade: 6, semester: 2, subject: '실과', domain: '기술 활용' },

  // ========== 바른 생활 1-2학년군 (1학기) ==========
  { code: '[2바01-01]', content: '학교생활에 필요한 규칙과 약속을 정하여 지킨다.', grade: 1, semester: 1, subject: '바른 생활', domain: '학교생활' },
  { code: '[2바01-02]', content: '학교에서 다른 사람을 배려하며 생활한다.', grade: 1, semester: 1, subject: '바른 생활', domain: '학교생활' },
  { code: '[2바01-03]', content: '학교생활을 즐겁게 하는 방법을 익힌다.', grade: 1, semester: 1, subject: '바른 생활', domain: '학교생활' },
  { code: '[2바02-01]', content: '가족의 소중함을 알고 서로 존중하며 생활한다.', grade: 1, semester: 1, subject: '바른 생활', domain: '가정생활' },
  { code: '[2바02-02]', content: '가정에서 자신의 역할을 알고 실천한다.', grade: 1, semester: 1, subject: '바른 생활', domain: '가정생활' },

  // ========== 바른 생활 1-2학년군 (2학기) ==========
  { code: '[2바03-01]', content: '공공장소에서 지켜야 할 예절을 알고 지킨다.', grade: 2, semester: 2, subject: '바른 생활', domain: '사회생활' },
  { code: '[2바03-02]', content: '이웃과 더불어 살아가는 방법을 익힌다.', grade: 2, semester: 2, subject: '바른 생활', domain: '사회생활' },
  { code: '[2바04-01]', content: '자연과 생명의 소중함을 알고 존중한다.', grade: 2, semester: 2, subject: '바른 생활', domain: '자연생활' },
  { code: '[2바04-02]', content: '환경을 보호하는 습관을 기른다.', grade: 2, semester: 2, subject: '바른 생활', domain: '자연생활' },
  { code: '[2바05-01]', content: '우리나라를 상징하는 것을 알고 사랑하는 마음을 가진다.', grade: 2, semester: 2, subject: '바른 생활', domain: '나라사랑' },

  // ========== 슬기로운 생활 1-2학년군 (1학기) ==========
  { code: '[2슬01-01]', content: '학교의 여러 장소의 위치와 역할을 알아본다.', grade: 1, semester: 1, subject: '슬기로운 생활', domain: '학교와 나' },
  { code: '[2슬01-02]', content: '학교에서 만나는 사람들의 역할을 탐색한다.', grade: 1, semester: 1, subject: '슬기로운 생활', domain: '학교와 나' },
  { code: '[2슬01-03]', content: '학교생활에 필요한 것을 조사한다.', grade: 1, semester: 1, subject: '슬기로운 생활', domain: '학교와 나' },
  { code: '[2슬02-01]', content: '가족 구성원을 알고 가정에서 하는 일을 알아본다.', grade: 1, semester: 1, subject: '슬기로운 생활', domain: '가정과 나' },
  { code: '[2슬02-02]', content: '가족의 사랑과 행복을 느낄 수 있는 활동을 한다.', grade: 1, semester: 1, subject: '슬기로운 생활', domain: '가정과 나' },

  // ========== 슬기로운 생활 1-2학년군 (2학기) ==========
  { code: '[2슬03-01]', content: '계절에 따른 자연의 변화를 관찰한다.', grade: 2, semester: 2, subject: '슬기로운 생활', domain: '자연과 나' },
  { code: '[2슬03-02]', content: '주변 동식물의 특징을 탐색한다.', grade: 2, semester: 2, subject: '슬기로운 생활', domain: '자연과 나' },
  { code: '[2슬03-03]', content: '자연 현상을 관찰하고 특징을 표현한다.', grade: 2, semester: 2, subject: '슬기로운 생활', domain: '자연과 나' },
  { code: '[2슬04-01]', content: '이웃의 역할과 이웃 간의 관계를 탐색한다.', grade: 2, semester: 2, subject: '슬기로운 생활', domain: '이웃과 나' },
  { code: '[2슬04-02]', content: '마을에서 볼 수 있는 것들을 조사한다.', grade: 2, semester: 2, subject: '슬기로운 생활', domain: '이웃과 나' },

  // ========== 즐거운 생활 1-2학년군 (1학기) ==========
  { code: '[2즐01-01]', content: '학교생활을 소재로 다양한 놀이와 표현을 한다.', grade: 1, semester: 1, subject: '즐거운 생활', domain: '표현활동' },
  { code: '[2즐01-02]', content: '간단한 노래를 부르며 율동한다.', grade: 1, semester: 1, subject: '즐거운 생활', domain: '표현활동' },
  { code: '[2즐01-03]', content: '다양한 재료를 활용하여 만들기를 한다.', grade: 1, semester: 1, subject: '즐거운 생활', domain: '표현활동' },
  { code: '[2즐02-01]', content: '주변의 자연과 생활에서 아름다움을 느끼고 표현한다.', grade: 1, semester: 1, subject: '즐거운 생활', domain: '감상활동' },
  { code: '[2즐02-02]', content: '음악과 미술 작품을 감상하고 느낌을 나눈다.', grade: 1, semester: 1, subject: '즐거운 생활', domain: '감상활동' },

  // ========== 즐거운 생활 1-2학년군 (2학기) ==========
  { code: '[2즐03-01]', content: '친구와 함께 하는 다양한 놀이를 경험한다.', grade: 2, semester: 2, subject: '즐거운 생활', domain: '놀이활동' },
  { code: '[2즐03-02]', content: '계절과 관련된 놀이에 참여한다.', grade: 2, semester: 2, subject: '즐거운 생활', domain: '놀이활동' },
  { code: '[2즐04-01]', content: '상상력을 발휘하여 이야기를 꾸민다.', grade: 2, semester: 2, subject: '즐거운 생활', domain: '표현활동' },
  { code: '[2즐04-02]', content: '역할 놀이나 인형극에 참여한다.', grade: 2, semester: 2, subject: '즐거운 생활', domain: '표현활동' },
  { code: '[2즐04-03]', content: '우리나라 전통 놀이와 문화를 경험한다.', grade: 2, semester: 2, subject: '즐거운 생활', domain: '문화체험' },
];

// 학년, 학기, 교과로 성취기준 필터링 (정확한 학년+학기 매칭)
export function getAchievementStandardsBySubject(
  grade: number,
  subjectName: string,
  semester?: 1 | 2
): AchievementStandard[] {
  return ACHIEVEMENT_STANDARDS.filter(std => {
    // 정확한 학년 매칭
    if (std.grade !== grade) return false;

    // 교과명 매칭
    if (std.subject !== subjectName) return false;

    // 학기 매칭 (semester 파라미터가 주어진 경우)
    if (semester && std.semester !== semester) return false;

    return true;
  });
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
