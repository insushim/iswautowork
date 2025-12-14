import { AchievementStandard } from '@/types';

// 2022 개정 교육과정 성취기준 (1-4학년)
// 2015 개정 교육과정 성취기준 (5-6학년)
// 학년별, 학기별 정확한 매칭

export const ACHIEVEMENT_STANDARDS: AchievementStandard[] = [
  // ========================================
  // 국어 1-2학년군 (2022 개정 교육과정)
  // 듣기·말하기 5개, 읽기 5개, 쓰기 4개, 문법 3개, 문학 4개, 매체 2개 = 총 23개
  // ========================================

  // ========== 국어 1학년 1학기 ==========
  // 듣기·말하기
  { code: '[2국01-01]', content: '상황에 어울리는 인사말을 주고받는다.', grade: 1, semester: 1, subject: '국어', domain: '듣기·말하기' },
  { code: '[2국01-02]', content: '일상생활에서 겪은 일이나 바라는 것, 좋아하는 것을 말한다.', grade: 1, semester: 1, subject: '국어', domain: '듣기·말하기' },
  { code: '[2국01-03]', content: '자신의 감정을 표현하며 대화를 나눈다.', grade: 1, semester: 1, subject: '국어', domain: '듣기·말하기' },
  // 읽기
  { code: '[2국02-01]', content: '글자, 낱말, 문장을 소리 내어 읽는다.', grade: 1, semester: 1, subject: '국어', domain: '읽기' },
  { code: '[2국02-02]', content: '읽기에 흥미를 가지고 즐겨 읽는 태도를 지닌다.', grade: 1, semester: 1, subject: '국어', domain: '읽기' },
  // 쓰기
  { code: '[2국03-01]', content: '글자를 바르게 쓴다.', grade: 1, semester: 1, subject: '국어', domain: '쓰기' },
  { code: '[2국03-02]', content: '자신의 생각을 문장으로 쓴다.', grade: 1, semester: 1, subject: '국어', domain: '쓰기' },
  // 문법
  { code: '[2국04-01]', content: '한글 자모의 이름과 소릿값을 안다.', grade: 1, semester: 1, subject: '국어', domain: '문법' },
  // 문학
  { code: '[2국05-01]', content: '노래, 말놀이, 짧은 글을 즐겨 듣거나 읽는다.', grade: 1, semester: 1, subject: '국어', domain: '문학' },
  { code: '[2국05-02]', content: '인물의 모습이나 행동을 상상하며 그림책이나 만화를 즐겨 본다.', grade: 1, semester: 1, subject: '국어', domain: '문학' },
  // 매체
  { code: '[2국06-01]', content: '일상생활에서 다양한 매체를 경험한다.', grade: 1, semester: 1, subject: '국어', domain: '매체' },

  // ========== 국어 1학년 2학기 ==========
  // 듣기·말하기
  { code: '[2국01-04]', content: '듣는 이를 바라보며 자신 있게 말한다.', grade: 1, semester: 2, subject: '국어', domain: '듣기·말하기' },
  { code: '[2국01-05]', content: '말하는 이를 바라보며 집중하여 듣는다.', grade: 1, semester: 2, subject: '국어', domain: '듣기·말하기' },
  // 읽기
  { code: '[2국02-03]', content: '글을 읽고 주요 내용을 확인한다.', grade: 1, semester: 2, subject: '국어', domain: '읽기' },
  { code: '[2국02-04]', content: '글을 읽고 중요한 내용이나 인물의 마음을 파악한다.', grade: 1, semester: 2, subject: '국어', domain: '읽기' },
  // 쓰기
  { code: '[2국03-03]', content: '주변의 사람이나 사물에 대해 짧은 글을 쓴다.', grade: 1, semester: 2, subject: '국어', domain: '쓰기' },
  // 문법
  { code: '[2국04-02]', content: '소리와 표기가 다를 수 있음을 알고 낱말을 바르게 읽고 쓴다.', grade: 1, semester: 2, subject: '국어', domain: '문법' },
  // 문학
  { code: '[2국05-03]', content: '작품 속 인물의 마음을 상상하여 여러 가지 방식으로 표현한다.', grade: 1, semester: 2, subject: '국어', domain: '문학' },
  // 매체
  { code: '[2국06-02]', content: '여러 가지 매체로 만든 글이나 자료를 즐겨 본다.', grade: 1, semester: 2, subject: '국어', domain: '매체' },

  // ========== 국어 2학년 1학기 ==========
  // 듣기·말하기 (나머지)
  // 읽기
  { code: '[2국02-05]', content: '읽기 경험을 다른 사람과 나눈다.', grade: 2, semester: 1, subject: '국어', domain: '읽기' },
  // 쓰기
  { code: '[2국03-04]', content: '자신의 생각이나 겪은 일에 대해 짧은 글을 쓴다.', grade: 2, semester: 1, subject: '국어', domain: '쓰기' },
  // 문법
  { code: '[2국04-03]', content: '문장에 따라 알맞은 문장 부호를 사용한다.', grade: 2, semester: 1, subject: '국어', domain: '문법' },
  // 문학
  { code: '[2국05-04]', content: '자신의 생각이나 겪은 일을 시나 노래로 표현한다.', grade: 2, semester: 1, subject: '국어', domain: '문학' },

  // ========== 국어 2학년 2학기 ==========
  // (1-2학년군의 나머지 성취기준은 2학년 1학기까지 배분 완료, 2학년 2학기는 복습/심화 목적으로 일부 재배치)

  // ========================================
  // 국어 3-4학년군 (2022 개정 교육과정)
  // 듣기·말하기 6개, 읽기 6개, 쓰기 5개, 문법 5개, 문학 5개, 매체 3개 = 총 30개
  // ========================================

  // ========== 국어 3학년 1학기 ==========
  // 듣기·말하기
  { code: '[4국01-01]', content: '대화의 즐거움을 알고 일상생활에서 대화를 나눈다.', grade: 3, semester: 1, subject: '국어', domain: '듣기·말하기' },
  { code: '[4국01-02]', content: '회의에서 의견을 적극적으로 나누고 절차에 따라 회의한다.', grade: 3, semester: 1, subject: '국어', domain: '듣기·말하기' },
  // 읽기
  { code: '[4국02-01]', content: '문단과 글의 중심 생각을 파악하며 글을 읽는다.', grade: 3, semester: 1, subject: '국어', domain: '읽기' },
  { code: '[4국02-02]', content: '글의 유형을 고려하여 대강의 내용을 간추린다.', grade: 3, semester: 1, subject: '국어', domain: '읽기' },
  // 쓰기
  { code: '[4국03-01]', content: '중심 문장과 뒷받침 문장을 갖추어 문단을 쓴다.', grade: 3, semester: 1, subject: '국어', domain: '쓰기' },
  // 문법
  { code: '[4국04-01]', content: '낱말을 분류하고 국어사전을 활용하여 낱말을 찾는다.', grade: 3, semester: 1, subject: '국어', domain: '문법' },
  { code: '[4국04-02]', content: '높임 표현을 상황에 알맞게 사용하여 생활한다.', grade: 3, semester: 1, subject: '국어', domain: '문법' },
  // 문학
  { code: '[4국05-01]', content: '시각이나 청각 등 감각적 표현에 주목하며 작품을 감상한다.', grade: 3, semester: 1, subject: '국어', domain: '문학' },
  // 매체
  { code: '[4국06-01]', content: '매체의 뜻과 종류를 알고 매체 자료의 특성을 이해한다.', grade: 3, semester: 1, subject: '국어', domain: '매체' },

  // ========== 국어 3학년 2학기 ==========
  // 듣기·말하기
  { code: '[4국01-03]', content: '말하는 이의 말을 집중하여 듣고 내용을 확인한다.', grade: 3, semester: 2, subject: '국어', domain: '듣기·말하기' },
  { code: '[4국01-04]', content: '적절한 이유나 근거를 들어 자신의 의견을 말한다.', grade: 3, semester: 2, subject: '국어', domain: '듣기·말하기' },
  // 읽기
  { code: '[4국02-03]', content: '글에서 낱말의 의미나 생략된 내용을 추론하며 글을 읽는다.', grade: 3, semester: 2, subject: '국어', domain: '읽기' },
  // 쓰기
  { code: '[4국03-02]', content: '읽는 이를 고려하여 자신의 마음을 표현하는 글을 쓴다.', grade: 3, semester: 2, subject: '국어', domain: '쓰기' },
  { code: '[4국03-03]', content: '목적과 주제를 고려하여 내용을 마련하고 글을 쓴다.', grade: 3, semester: 2, subject: '국어', domain: '쓰기' },
  // 문법
  { code: '[4국04-03]', content: '기본적인 문장 성분을 이해하고 문장을 만든다.', grade: 3, semester: 2, subject: '국어', domain: '문법' },
  // 문학
  { code: '[4국05-02]', content: '인물, 사건, 배경에 주목하며 작품을 이해한다.', grade: 3, semester: 2, subject: '국어', domain: '문학' },
  { code: '[4국05-03]', content: '이야기의 흐름을 파악하여 내용을 간추린다.', grade: 3, semester: 2, subject: '국어', domain: '문학' },
  // 매체
  { code: '[4국06-02]', content: '매체 자료를 활용하여 자신의 생각을 효과적으로 표현한다.', grade: 3, semester: 2, subject: '국어', domain: '매체' },

  // ========== 국어 4학년 1학기 ==========
  // 듣기·말하기
  { code: '[4국01-05]', content: '목적에 따라 알맞은 내용과 매체를 선정하여 발표한다.', grade: 4, semester: 1, subject: '국어', domain: '듣기·말하기' },
  // 읽기
  { code: '[4국02-04]', content: '글을 읽고 사실과 의견을 구별한다.', grade: 4, semester: 1, subject: '국어', domain: '읽기' },
  { code: '[4국02-05]', content: '읽기 경험을 다른 사람과 나누며 생각을 넓힌다.', grade: 4, semester: 1, subject: '국어', domain: '읽기' },
  // 쓰기
  { code: '[4국03-04]', content: '관심 있는 주제에 대해 자신의 의견이 드러나게 글을 쓴다.', grade: 4, semester: 1, subject: '국어', domain: '쓰기' },
  // 문법
  { code: '[4국04-04]', content: '문장을 끝맺는 다양한 방식을 알고 표현 의도에 맞게 사용한다.', grade: 4, semester: 1, subject: '국어', domain: '문법' },
  // 문학
  { code: '[4국05-04]', content: '작품을 듣거나 읽고 떠오른 느낌과 생각을 다양하게 표현한다.', grade: 4, semester: 1, subject: '국어', domain: '문학' },

  // ========== 국어 4학년 2학기 ==========
  // 듣기·말하기
  { code: '[4국01-06]', content: '예절을 지키며 회의하고, 회의 결과에 따라 실천하는 자세를 기른다.', grade: 4, semester: 2, subject: '국어', domain: '듣기·말하기' },
  // 읽기
  { code: '[4국02-06]', content: '자신의 읽기 습관을 점검하며 꾸준히 읽는 태도를 지닌다.', grade: 4, semester: 2, subject: '국어', domain: '읽기' },
  // 쓰기
  { code: '[4국03-05]', content: '쓰기에 흥미를 가지고 즐겨 쓰는 태도를 기른다.', grade: 4, semester: 2, subject: '국어', domain: '쓰기' },
  // 문법
  { code: '[4국04-05]', content: '한글의 창제 원리를 알고 한글을 소중히 여기는 태도를 지닌다.', grade: 4, semester: 2, subject: '국어', domain: '문법' },
  // 문학
  { code: '[4국05-05]', content: '재미나 감동을 느끼며 작품을 즐겨 감상하는 태도를 지닌다.', grade: 4, semester: 2, subject: '국어', domain: '문학' },
  // 매체
  { code: '[4국06-03]', content: '매체를 바르게 이용하는 방법을 알고 이를 생활에서 실천한다.', grade: 4, semester: 2, subject: '국어', domain: '매체' },

  // ========================================
  // 국어 5-6학년군 (2015 개정 교육과정)
  // ========================================

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

  // ========================================
  // 수학 1-2학년군 (2022 개정 교육과정)
  // 수와 연산 11개, 변화와 관계 2개, 도형과 측정 13개, 자료와 가능성 3개 = 총 29개
  // ========================================

  // ========== 수학 1학년 1학기 ==========
  // 수와 연산
  { code: '[2수01-01]', content: '0과 100까지의 수 개념을 이해하고 수를 세며 읽고 쓸 수 있다.', grade: 1, semester: 1, subject: '수학', domain: '수와 연산' },
  { code: '[2수01-02]', content: '100까지의 수에서 크기를 비교할 수 있다.', grade: 1, semester: 1, subject: '수학', domain: '수와 연산' },
  { code: '[2수01-03]', content: '하나의 수를 두 수로 가르기 하고 두 수를 하나의 수로 모으기 할 수 있다.', grade: 1, semester: 1, subject: '수학', domain: '수와 연산' },
  { code: '[2수01-04]', content: '덧셈과 뺄셈이 이루어지는 실생활 상황을 통해 덧셈과 뺄셈의 의미를 이해한다.', grade: 1, semester: 1, subject: '수학', domain: '수와 연산' },
  { code: '[2수01-05]', content: '한 자리 수의 덧셈과 뺄셈을 할 수 있다.', grade: 1, semester: 1, subject: '수학', domain: '수와 연산' },
  // 도형과 측정
  { code: '[2수03-01]', content: '교실 및 생활 주변에서 여러 가지 물건을 관찰하여 삼각형, 사각형, 원의 모양을 찾고, 그것들을 이용하여 여러 가지 모양을 만들 수 있다.', grade: 1, semester: 1, subject: '수학', domain: '도형과 측정' },
  { code: '[2수03-02]', content: '삼각형, 사각형, 원을 직관적으로 이해하고 그릴 수 있다.', grade: 1, semester: 1, subject: '수학', domain: '도형과 측정' },

  // ========== 수학 1학년 2학기 ==========
  // 수와 연산
  { code: '[2수01-06]', content: '두 자리 수의 범위에서 덧셈과 뺄셈의 계산 원리를 이해하고 그 계산을 할 수 있다.', grade: 1, semester: 2, subject: '수학', domain: '수와 연산' },
  // 도형과 측정
  { code: '[2수03-03]', content: '구체물의 길이, 들이, 무게, 넓이를 비교하여 각각 "길다, 짧다", "많다, 적다", "무겁다, 가볍다", "넓다, 좁다" 등을 구별하여 말할 수 있다.', grade: 1, semester: 2, subject: '수학', domain: '도형과 측정' },
  { code: '[2수03-04]', content: '양을 비교하여 그 결과를 같다, 다르다 등으로 말할 수 있다.', grade: 1, semester: 2, subject: '수학', domain: '도형과 측정' },
  { code: '[2수03-05]', content: '시계를 보고 시각을 "몇 시"와 "몇 시 30분"으로 읽을 수 있다.', grade: 1, semester: 2, subject: '수학', domain: '도형과 측정' },
  // 변화와 관계
  { code: '[2수02-01]', content: '물체, 무늬, 수 등의 배열에서 규칙을 찾아 설명하고, 그 규칙에 따라 다음에 올 것을 추측할 수 있다.', grade: 1, semester: 2, subject: '수학', domain: '변화와 관계' },

  // ========== 수학 2학년 1학기 ==========
  // 수와 연산
  { code: '[2수01-07]', content: '세 자리 수의 개념을 이해하고 수를 읽고 쓸 수 있다.', grade: 2, semester: 1, subject: '수학', domain: '수와 연산' },
  { code: '[2수01-08]', content: '네 자리 이하의 수의 범위에서 수의 계열을 이해하고, 수의 크기를 비교할 수 있다.', grade: 2, semester: 1, subject: '수학', domain: '수와 연산' },
  { code: '[2수01-09]', content: '두 자리 수의 범위에서 덧셈과 뺄셈의 계산 원리를 이해하고 그 계산을 할 수 있다.', grade: 2, semester: 1, subject: '수학', domain: '수와 연산' },
  // 도형과 측정
  { code: '[2수03-06]', content: '1cm와 1m의 단위를 알고, 자를 이용하여 길이를 측정할 수 있다.', grade: 2, semester: 1, subject: '수학', domain: '도형과 측정' },
  { code: '[2수03-07]', content: '길이를 어림하고, 길이에 대한 양감을 기른다.', grade: 2, semester: 1, subject: '수학', domain: '도형과 측정' },
  { code: '[2수03-08]', content: '시계를 보고 시각을 "몇 시 몇 분"까지 읽을 수 있다.', grade: 2, semester: 1, subject: '수학', domain: '도형과 측정' },
  { code: '[2수03-09]', content: '1시간=60분, 1일=24시간임을 안다.', grade: 2, semester: 1, subject: '수학', domain: '도형과 측정' },
  // 변화와 관계
  { code: '[2수02-02]', content: '자신만의 규칙을 만들어 다양한 방법으로 표현할 수 있다.', grade: 2, semester: 1, subject: '수학', domain: '변화와 관계' },

  // ========== 수학 2학년 2학기 ==========
  // 수와 연산
  { code: '[2수01-10]', content: '곱셈이 이루어지는 실생활 상황을 통해 곱셈의 의미를 이해한다.', grade: 2, semester: 2, subject: '수학', domain: '수와 연산' },
  { code: '[2수01-11]', content: '곱셈구구를 이해하고, 곱셈구구를 외어 곱셈을 할 수 있다.', grade: 2, semester: 2, subject: '수학', domain: '수와 연산' },
  // 도형과 측정
  { code: '[2수03-10]', content: '삼각형, 사각형의 정의와 그 구성 요소를 이해한다.', grade: 2, semester: 2, subject: '수학', domain: '도형과 측정' },
  { code: '[2수03-11]', content: '원의 정의와 그 구성 요소를 이해한다.', grade: 2, semester: 2, subject: '수학', domain: '도형과 측정' },
  { code: '[2수03-12]', content: '쌓기나무로 만든 입체도형의 모양을 관찰하고, 층별로 쌓은 쌓기나무의 개수를 세어 볼 수 있다.', grade: 2, semester: 2, subject: '수학', domain: '도형과 측정' },
  { code: '[2수03-13]', content: '직사각형, 정사각형, 직각삼각형을 이해하고 그릴 수 있다.', grade: 2, semester: 2, subject: '수학', domain: '도형과 측정' },
  // 자료와 가능성
  { code: '[2수04-01]', content: '교실 및 생활 주변에 있는 사물들을 정해진 기준 또는 자신이 정한 기준으로 분류하여 개수를 세어 보고, 기준에 따른 결과를 말할 수 있다.', grade: 2, semester: 2, subject: '수학', domain: '자료와 가능성' },
  { code: '[2수04-02]', content: '분류한 자료를 표로 나타내고, 표로 나타내면 편리한 점을 말할 수 있다.', grade: 2, semester: 2, subject: '수학', domain: '자료와 가능성' },
  { code: '[2수04-03]', content: '분류한 자료를 ○, △, /를 이용한 그래프로 나타내고, 그래프로 나타내면 편리한 점을 말할 수 있다.', grade: 2, semester: 2, subject: '수학', domain: '자료와 가능성' },

  // ========================================
  // 수학 3-4학년군 (2022 개정 교육과정)
  // 수와 연산 16개, 변화와 관계 3개, 도형과 측정 25개, 자료와 가능성 3개 = 총 47개
  // ========================================

  // ========== 수학 3학년 1학기 ==========
  // 수와 연산
  { code: '[4수01-01]', content: '네 자리 이상의 수의 범위에서 큰 수에 대한 자릿값과 위치적 기수법을 이해하고, 수를 읽고 쓸 수 있다.', grade: 3, semester: 1, subject: '수학', domain: '수와 연산' },
  { code: '[4수01-02]', content: '다섯 자리 이상의 수의 범위에서 수의 계열을 이해하고, 수의 크기를 비교할 수 있다.', grade: 3, semester: 1, subject: '수학', domain: '수와 연산' },
  { code: '[4수01-03]', content: '세 자리 수의 덧셈과 뺄셈의 계산 원리를 이해하고 그 계산을 할 수 있다.', grade: 3, semester: 1, subject: '수학', domain: '수와 연산' },
  { code: '[4수01-04]', content: '나눗셈이 이루어지는 실생활 상황을 통해 나눗셈의 의미를 알고, 곱셈과 나눗셈의 관계를 이해한다.', grade: 3, semester: 1, subject: '수학', domain: '수와 연산' },
  { code: '[4수01-05]', content: '나눗셈의 몫을 곱셈구구로 구할 수 있다.', grade: 3, semester: 1, subject: '수학', domain: '수와 연산' },
  // 도형과 측정
  { code: '[4수03-01]', content: '평면도형의 이동을 이해한다.', grade: 3, semester: 1, subject: '수학', domain: '도형과 측정' },
  { code: '[4수03-02]', content: '1cm, 1m, 1km의 관계를 이해하고, 실생활에서 길이를 어림하고 측정할 수 있다.', grade: 3, semester: 1, subject: '수학', domain: '도형과 측정' },
  { code: '[4수03-03]', content: '1mm의 단위를 알고, 1cm와 1mm의 관계를 이해한다.', grade: 3, semester: 1, subject: '수학', domain: '도형과 측정' },

  // ========== 수학 3학년 2학기 ==========
  // 수와 연산
  { code: '[4수01-06]', content: '(두 자리 수)×(한 자리 수), (한 자리 수)×(두 자리 수)의 계산 원리를 이해하고 그 계산을 할 수 있다.', grade: 3, semester: 2, subject: '수학', domain: '수와 연산' },
  { code: '[4수01-07]', content: '(몇십)÷(몇), (두 자리 수)÷(한 자리 수)의 계산 원리를 이해하고 그 계산을 할 수 있다.', grade: 3, semester: 2, subject: '수학', domain: '수와 연산' },
  { code: '[4수01-08]', content: '양의 등분할을 통하여 분수를 이해하고 읽고 쓸 수 있다.', grade: 3, semester: 2, subject: '수학', domain: '수와 연산' },
  { code: '[4수01-09]', content: '단위분수의 크기를 비교할 수 있다.', grade: 3, semester: 2, subject: '수학', domain: '수와 연산' },
  // 도형과 측정
  { code: '[4수03-04]', content: '각의 개념과 직각을 이해한다.', grade: 3, semester: 2, subject: '수학', domain: '도형과 측정' },
  { code: '[4수03-05]', content: '직각삼각형, 직사각형, 정사각형의 정의와 성질을 이해한다.', grade: 3, semester: 2, subject: '수학', domain: '도형과 측정' },
  { code: '[4수03-06]', content: '원의 중심, 반지름, 지름을 이해하고, 원을 그릴 수 있다.', grade: 3, semester: 2, subject: '수학', domain: '도형과 측정' },
  { code: '[4수03-07]', content: '1초, 1분, 1시간 사이의 관계를 이해하고 시간을 계산할 수 있다.', grade: 3, semester: 2, subject: '수학', domain: '도형과 측정' },
  { code: '[4수03-08]', content: '시간의 덧셈과 뺄셈을 할 수 있다.', grade: 3, semester: 2, subject: '수학', domain: '도형과 측정' },

  // ========== 수학 4학년 1학기 ==========
  // 수와 연산
  { code: '[4수01-10]', content: '(세 자리 수)×(두 자리 수)의 계산 원리를 이해하고 그 계산을 할 수 있다.', grade: 4, semester: 1, subject: '수학', domain: '수와 연산' },
  { code: '[4수01-11]', content: '(세 자리 수)÷(두 자리 수)의 계산 원리를 이해하고 그 계산을 할 수 있다.', grade: 4, semester: 1, subject: '수학', domain: '수와 연산' },
  { code: '[4수01-12]', content: '분모가 같은 분수의 크기를 비교할 수 있다.', grade: 4, semester: 1, subject: '수학', domain: '수와 연산' },
  { code: '[4수01-13]', content: '분모가 같은 분수의 덧셈과 뺄셈의 계산 원리를 이해하고 그 계산을 할 수 있다.', grade: 4, semester: 1, subject: '수학', domain: '수와 연산' },
  // 도형과 측정
  { code: '[4수03-09]', content: '각의 크기의 단위인 1도(°)를 알고, 각도기를 이용하여 각의 크기를 측정하고 어림할 수 있다.', grade: 4, semester: 1, subject: '수학', domain: '도형과 측정' },
  { code: '[4수03-10]', content: '주어진 각도의 각과 여러 가지 크기의 각을 그릴 수 있다.', grade: 4, semester: 1, subject: '수학', domain: '도형과 측정' },
  { code: '[4수03-11]', content: '삼각형의 세 각의 크기의 합이 180°임을 이해하고, 이를 활용하여 문제를 해결할 수 있다.', grade: 4, semester: 1, subject: '수학', domain: '도형과 측정' },
  { code: '[4수03-12]', content: '사각형의 네 각의 크기의 합이 360°임을 이해하고, 이를 활용하여 문제를 해결할 수 있다.', grade: 4, semester: 1, subject: '수학', domain: '도형과 측정' },
  // 변화와 관계
  { code: '[4수02-01]', content: '다양한 변화 규칙을 찾아 설명하고, 그 규칙을 수나 식으로 나타낼 수 있다.', grade: 4, semester: 1, subject: '수학', domain: '변화와 관계' },

  // ========== 수학 4학년 2학기 ==========
  // 수와 연산
  { code: '[4수01-14]', content: '소수 두 자리 수와 소수 세 자리 수의 범위에서 소수의 개념을 이해하고 읽고 쓸 수 있다.', grade: 4, semester: 2, subject: '수학', domain: '수와 연산' },
  { code: '[4수01-15]', content: '분수와 소수의 관계를 이해하고, 분수를 소수로, 소수를 분수로 나타낼 수 있다.', grade: 4, semester: 2, subject: '수학', domain: '수와 연산' },
  { code: '[4수01-16]', content: '소수의 크기를 비교할 수 있다.', grade: 4, semester: 2, subject: '수학', domain: '수와 연산' },
  // 도형과 측정
  { code: '[4수03-13]', content: '수직과 수선을 이해하고, 수선을 긋는 방법을 안다.', grade: 4, semester: 2, subject: '수학', domain: '도형과 측정' },
  { code: '[4수03-14]', content: '평행과 평행선을 이해하고, 평행선을 긋는 방법을 안다.', grade: 4, semester: 2, subject: '수학', domain: '도형과 측정' },
  { code: '[4수03-15]', content: '평행선 사이의 거리를 이해한다.', grade: 4, semester: 2, subject: '수학', domain: '도형과 측정' },
  { code: '[4수03-16]', content: '사다리꼴, 평행사변형, 마름모의 정의와 성질을 이해하고 그릴 수 있다.', grade: 4, semester: 2, subject: '수학', domain: '도형과 측정' },
  { code: '[4수03-17]', content: '여러 가지 사각형 사이의 관계를 이해한다.', grade: 4, semester: 2, subject: '수학', domain: '도형과 측정' },
  { code: '[4수03-18]', content: '다각형의 정의와 다각형의 대각선을 이해한다.', grade: 4, semester: 2, subject: '수학', domain: '도형과 측정' },
  { code: '[4수03-19]', content: '정다각형의 정의와 성질을 이해하고 그릴 수 있다.', grade: 4, semester: 2, subject: '수학', domain: '도형과 측정' },
  { code: '[4수03-20]', content: '원주율을 이용하여 원의 둘레를 구하는 방법을 이해하고, 원의 둘레를 구할 수 있다.', grade: 4, semester: 2, subject: '수학', domain: '도형과 측정' },
  // 변화와 관계
  { code: '[4수02-02]', content: '수 사이의 대응 관계를 찾아 □, △ 등의 기호로 나타내어 식을 만들고 이를 설명할 수 있다.', grade: 4, semester: 2, subject: '수학', domain: '변화와 관계' },
  { code: '[4수02-03]', content: '대응 관계를 □, △ 등을 사용한 식으로 나타내고, □, △ 등의 값을 구할 수 있다.', grade: 4, semester: 2, subject: '수학', domain: '변화와 관계' },
  // 자료와 가능성
  { code: '[4수04-01]', content: '실생활 자료를 수집하여 간단한 그래프로 나타낼 수 있다.', grade: 4, semester: 2, subject: '수학', domain: '자료와 가능성' },
  { code: '[4수04-02]', content: '막대그래프를 알고, 주어진 자료를 막대그래프로 나타낼 수 있다.', grade: 4, semester: 2, subject: '수학', domain: '자료와 가능성' },
  { code: '[4수04-03]', content: '꺾은선그래프를 알고, 주어진 자료를 꺾은선그래프로 나타낼 수 있다.', grade: 4, semester: 2, subject: '수학', domain: '자료와 가능성' },

  // ========================================
  // 수학 5-6학년군 (2015 개정 교육과정)
  // ========================================

  // ========== 수학 5학년 1학기 ==========
  { code: '[6수01-01]', content: '덧셈, 뺄셈, 곱셈, 나눗셈의 혼합 계산에서 계산하는 순서를 알고, 혼합 계산을 할 수 있다.', grade: 5, semester: 1, subject: '수학', domain: '수와 연산' },
  { code: '[6수01-02]', content: '약수, 공약수, 최대공약수의 의미를 알고 구할 수 있다.', grade: 5, semester: 1, subject: '수학', domain: '수와 연산' },
  { code: '[6수01-03]', content: '배수, 공배수, 최소공배수의 의미를 알고 구할 수 있다.', grade: 5, semester: 1, subject: '수학', domain: '수와 연산' },
  { code: '[6수02-01]', content: '직육면체와 정육면체를 알고, 구성 요소와 성질을 이해한다.', grade: 5, semester: 1, subject: '수학', domain: '도형' },
  { code: '[6수03-01]', content: '직사각형의 넓이를 구하는 방법을 이해하고, 이를 통하여 넓이의 단위 1㎠, 1㎡, 1㎢의 관계를 이해한다.', grade: 5, semester: 1, subject: '수학', domain: '측정' },

  // ========== 수학 5학년 2학기 ==========
  // 1단원: 수의 범위와 어림하기
  { code: '[6수01-07]', content: '이상, 이하, 초과, 미만의 의미를 알고, 수의 범위를 활용하여 실생활 문제를 해결할 수 있다.', grade: 5, semester: 2, subject: '수학', domain: '수와 연산' },
  { code: '[6수01-08]', content: '수를 다양한 방법으로 어림하고, 어림한 결과를 실생활에 활용할 수 있다.', grade: 5, semester: 2, subject: '수학', domain: '수와 연산' },
  // 2단원: 분수의 곱셈
  { code: '[6수01-04]', content: '크기가 같은 분수를 만들 수 있고, 분수를 약분, 통분할 수 있다.', grade: 5, semester: 2, subject: '수학', domain: '수와 연산' },
  { code: '[6수01-05]', content: '분모가 다른 분수의 크기를 비교할 수 있다.', grade: 5, semester: 2, subject: '수학', domain: '수와 연산' },
  { code: '[6수01-06]', content: '분모가 다른 분수의 덧셈과 뺄셈의 계산 원리를 이해하고 그 계산을 할 수 있다.', grade: 5, semester: 2, subject: '수학', domain: '수와 연산' },
  // 3단원: 합동과 대칭
  { code: '[6수02-02]', content: '직육면체와 정육면체의 전개도를 그릴 수 있다.', grade: 5, semester: 2, subject: '수학', domain: '도형' },
  { code: '[6수02-03]', content: '합동의 의미와 합동인 도형의 성질을 이해한다.', grade: 5, semester: 2, subject: '수학', domain: '도형' },
  { code: '[6수02-04]', content: '선대칭도형과 점대칭도형을 이해하고 그릴 수 있다.', grade: 5, semester: 2, subject: '수학', domain: '도형' },
  // 4단원: 소수의 곱셈
  { code: '[6수01-14]', content: '(소수)×(자연수), (자연수)×(소수)의 계산 원리를 이해하고 그 계산을 할 수 있다.', grade: 5, semester: 2, subject: '수학', domain: '수와 연산' },
  { code: '[6수01-15]', content: '(소수)×(소수)의 계산 원리를 이해하고 그 계산을 할 수 있다.', grade: 5, semester: 2, subject: '수학', domain: '수와 연산' },
  // 5단원: 직육면체
  // 6단원: 평균과 가능성
  { code: '[6수03-02]', content: '평행사변형, 삼각형, 사다리꼴, 마름모의 넓이를 구하는 방법을 다양하게 추론하고, 이와 관련된 문제를 해결할 수 있다.', grade: 5, semester: 2, subject: '수학', domain: '측정' },
  { code: '[6수05-01]', content: '평균의 의미를 알고, 주어진 자료의 평균을 구할 수 있으며, 이를 활용할 수 있다.', grade: 5, semester: 2, subject: '수학', domain: '자료와 가능성' },
  { code: '[6수05-03]', content: '일이 일어날 가능성을 수로 표현할 수 있다.', grade: 5, semester: 2, subject: '수학', domain: '자료와 가능성' },

  // ========== 수학 6학년 1학기 ==========
  // 1단원: 분수의 나눗셈
  { code: '[6수01-09]', content: '(자연수)÷(자연수)의 몫을 분수로 나타낼 수 있다.', grade: 6, semester: 1, subject: '수학', domain: '수와 연산' },
  { code: '[6수01-10]', content: '(분수)÷(자연수), (분수)÷(분수)의 계산 원리를 이해하고 그 계산을 할 수 있다.', grade: 6, semester: 1, subject: '수학', domain: '수와 연산' },
  // 2단원: 각기둥과 각뿔
  { code: '[6수02-05]', content: '각기둥과 각뿔을 알고, 구성 요소와 성질을 이해한다.', grade: 6, semester: 1, subject: '수학', domain: '도형' },
  { code: '[6수02-06]', content: '각기둥의 전개도를 그릴 수 있다.', grade: 6, semester: 1, subject: '수학', domain: '도형' },
  // 3단원: 소수의 나눗셈
  { code: '[6수01-11]', content: '(소수)÷(자연수), (소수)÷(소수)의 계산 원리를 이해하고 그 계산을 할 수 있다.', grade: 6, semester: 1, subject: '수학', domain: '수와 연산' },
  // 4단원: 비와 비율
  { code: '[6수04-01]', content: '두 양의 크기를 비교하는 상황을 통해 비의 개념을 이해하고, 그 관계를 비로 나타낼 수 있다.', grade: 6, semester: 1, subject: '수학', domain: '규칙성' },
  { code: '[6수04-02]', content: '비율을 이해하고, 비율을 분수, 소수, 백분율로 나타낼 수 있다.', grade: 6, semester: 1, subject: '수학', domain: '규칙성' },
  // 5단원: 여러 가지 그래프
  { code: '[6수05-02]', content: '자료를 수집, 분류, 정리하여 목적에 맞는 그래프로 나타내고, 그래프를 해석할 수 있다.', grade: 6, semester: 1, subject: '수학', domain: '자료와 가능성' },
  { code: '[6수05-04]', content: '비율그래프(띠그래프, 원그래프)를 알고, 이를 해석할 수 있다.', grade: 6, semester: 1, subject: '수학', domain: '자료와 가능성' },
  // 6단원: 직육면체의 부피와 겉넓이
  { code: '[6수03-05]', content: '직육면체와 정육면체의 부피를 구하는 방법을 이해하고, 이를 통하여 부피의 단위 1㎤, 1㎥의 관계를 이해한다.', grade: 6, semester: 1, subject: '수학', domain: '측정' },
  { code: '[6수03-04]', content: '직육면체와 정육면체의 겉넓이를 구하는 방법을 이해하고 구할 수 있다.', grade: 6, semester: 1, subject: '수학', domain: '측정' },

  // ========== 수학 6학년 2학기 ==========
  // 1단원: 분수의 나눗셈 (6학년 1학기에서 배운 내용 심화)
  { code: '[6수01-09]', content: '(자연수)÷(자연수)의 몫을 분수로 나타낼 수 있다.', grade: 6, semester: 2, subject: '수학', domain: '수와 연산' },
  { code: '[6수01-10]', content: '(분수)÷(자연수), (분수)÷(분수)의 계산 원리를 이해하고 그 계산을 할 수 있다.', grade: 6, semester: 2, subject: '수학', domain: '수와 연산' },
  // 2단원: 소수의 나눗셈
  { code: '[6수01-11]', content: '(소수)÷(자연수), (소수)÷(소수)의 계산 원리를 이해하고 그 계산을 할 수 있다.', grade: 6, semester: 2, subject: '수학', domain: '수와 연산' },
  // 3단원: 공간과 입체
  { code: '[6수02-08]', content: '쌓기나무로 쌓은 모양과 쌓기나무의 개수를 추측하고 확인할 수 있다.', grade: 6, semester: 2, subject: '수학', domain: '도형' },
  { code: '[6수02-10]', content: '공간에서 위치와 방향을 이용하여 물체의 위치를 나타낼 수 있다.', grade: 6, semester: 2, subject: '수학', domain: '도형' },
  // 4단원: 비례식과 비례배분
  { code: '[6수04-03]', content: '비례식을 알고, 그 성질을 이해하며, 이를 활용하여 간단한 비례식을 풀 수 있다.', grade: 6, semester: 2, subject: '수학', domain: '규칙성' },
  { code: '[6수04-04]', content: '비례배분을 알고, 이를 실생활에 적용하여 문제를 해결할 수 있다.', grade: 6, semester: 2, subject: '수학', domain: '규칙성' },
  // 5단원: 원의 넓이
  { code: '[6수03-06]', content: '원주와 원주율의 의미를 이해하고, 원주를 구할 수 있다.', grade: 6, semester: 2, subject: '수학', domain: '측정' },
  { code: '[6수03-03]', content: '원주율의 의미를 이해하고, 원의 넓이를 구하는 방법을 이해하고 구할 수 있다.', grade: 6, semester: 2, subject: '수학', domain: '측정' },
  // 6단원: 원기둥, 원뿔, 구
  { code: '[6수02-07]', content: '원기둥, 원뿔, 구를 알고, 구성 요소와 성질을 이해한다.', grade: 6, semester: 2, subject: '수학', domain: '도형' },
  { code: '[6수02-09]', content: '원기둥의 전개도를 그릴 수 있다.', grade: 6, semester: 2, subject: '수학', domain: '도형' },
  { code: '[6수03-07]', content: '원기둥의 겉넓이와 부피를 구하는 방법을 이해하고 구할 수 있다.', grade: 6, semester: 2, subject: '수학', domain: '측정' },

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

  // ========== 사회 5학년 1학기 (2015 개정) ==========
  // 1단원: 국토와 우리 생활
  { code: '[6사01-01]', content: '우리나라의 위치와 영역이 지니는 특성을 설명하고, 이를 바탕으로 하여 국토 사랑의 태도를 기른다.', grade: 5, semester: 1, subject: '사회', domain: '지리' },
  { code: '[6사01-02]', content: '우리 국토를 구분하는 기준들을 살펴보고, 시·도 단위 행정구역 및 주요 도시들의 위치 특성을 파악한다.', grade: 5, semester: 1, subject: '사회', domain: '지리' },
  { code: '[6사01-03]', content: '우리나라의 기후 환경 및 지형 환경에서 나타나는 특성을 탐구한다.', grade: 5, semester: 1, subject: '사회', domain: '지리' },
  { code: '[6사01-04]', content: '우리나라 자연재해의 종류 및 대책을 탐색하고, 그와 관련된 생활 안전 수칙을 실천하는 태도를 지닌다.', grade: 5, semester: 1, subject: '사회', domain: '지리' },
  { code: '[6사01-05]', content: '우리나라의 인구 분포 및 구조에 대해 파악하고, 인구 문제 해결에 참여하려는 태도를 가진다.', grade: 5, semester: 1, subject: '사회', domain: '지리' },
  { code: '[6사01-06]', content: '우리나라와 세계 여러 나라의 산업 구조와 산업의 발달 과정을 살펴보고, 지역별 산업의 특색을 탐구한다.', grade: 5, semester: 1, subject: '사회', domain: '지리' },
  // 2단원: 인권 존중과 정의로운 사회
  { code: '[6사02-01]', content: '인권의 의미와 인권 신장의 역사를 통해 인권이 확대되어 온 과정을 살펴보고, 인권 보장의 중요성을 파악한다.', grade: 5, semester: 1, subject: '사회', domain: '일반사회' },
  { code: '[6사02-02]', content: '생활 속에서 인권 보장이 필요한 사례를 탐구하여 인권 의식을 기르고, 인권 보호를 실천하는 태도를 기른다.', grade: 5, semester: 1, subject: '사회', domain: '일반사회' },
  { code: '[6사02-03]', content: '헌법에서 규정하는 기본권과 의무가 일상생활에 적용된 사례를 조사하고, 권리와 의무의 조화를 추구하는 자세를 기른다.', grade: 5, semester: 1, subject: '사회', domain: '일반사회' },
  { code: '[6사02-04]', content: '일상생활에서 경험하는 여러 가지 법의 의미를 파악하고, 법을 지키는 생활을 실천하는 태도를 기른다.', grade: 5, semester: 1, subject: '사회', domain: '일반사회' },
  { code: '[6사02-05]', content: '우리 생활 속에서 법이 적용되는 다양한 사례를 살펴보고, 법의 역할을 설명한다.', grade: 5, semester: 1, subject: '사회', domain: '일반사회' },
  { code: '[6사02-06]', content: '국회, 행정부, 법원의 기능을 이해하고, 그것이 국민 생활에 미치는 영향을 다양한 사례를 통해 탐구한다.', grade: 5, semester: 1, subject: '사회', domain: '일반사회' },

  // ========== 사회 5학년 2학기 (2015 개정) ==========
  // 1단원: 옛사람들의 삶과 문화
  { code: '[6사03-01]', content: '고조선의 등장과 발전 과정을 통하여 우리 역사가 형성되었음을 파악한다.', grade: 5, semester: 2, subject: '사회', domain: '역사' },
  { code: '[6사03-02]', content: '여러 나라의 건국 이야기와 문화유산을 통해 고대 국가의 특징을 파악한다.', grade: 5, semester: 2, subject: '사회', domain: '역사' },
  { code: '[6사03-03]', content: '삼국 통일과 발해의 건국 과정을 이해하고, 남북국 시대의 문화유산을 탐색한다.', grade: 5, semester: 2, subject: '사회', domain: '역사' },
  { code: '[6사03-04]', content: '고려를 세우고 발전시킨 인물(왕건, 서희, 강감찬 등)의 업적을 통하여 고려의 정치적 특징을 파악한다.', grade: 5, semester: 2, subject: '사회', domain: '역사' },
  { code: '[6사03-05]', content: '고려 시대 문화유산을 통하여 고려 문화의 우수성을 탐색한다.', grade: 5, semester: 2, subject: '사회', domain: '역사' },
  { code: '[6사03-06]', content: '조선 시대 주요 인물(이성계, 세종대왕, 이순신 등)의 업적을 통하여 조선의 정치와 문화를 파악한다.', grade: 5, semester: 2, subject: '사회', domain: '역사' },
  // 2단원: 사회의 새로운 변화와 오늘날의 우리
  { code: '[6사04-01]', content: '영조와 정조 시기의 사회 변화와 문화의 발달을 살펴본다.', grade: 5, semester: 2, subject: '사회', domain: '역사' },
  { code: '[6사04-02]', content: '조선 후기 외세의 침략에 대항한 나라를 지키기 위한 노력을 살펴본다.', grade: 5, semester: 2, subject: '사회', domain: '역사' },
  { code: '[6사04-03]', content: '일제의 침략에 맞서 나라를 지키고자 노력한 인물의 활동에 대해 조사한다.', grade: 5, semester: 2, subject: '사회', domain: '역사' },
  { code: '[6사04-04]', content: '광복과 대한민국 정부 수립 과정을 파악하고, 대한민국 임시 정부가 수립된 의의를 설명한다.', grade: 5, semester: 2, subject: '사회', domain: '역사' },
  { code: '[6사04-05]', content: '6·25 전쟁의 원인과 과정을 이해하고, 전쟁의 결과와 영향을 살펴본다.', grade: 5, semester: 2, subject: '사회', domain: '역사' },
  { code: '[6사04-06]', content: '4·19 혁명, 5·18 민주화 운동, 6월 민주 항쟁 등을 통해 민주주의가 발전해 온 과정을 파악한다.', grade: 5, semester: 2, subject: '사회', domain: '역사' },

  // ========== 사회 6학년 1학기 (2015 개정) ==========
  // 1단원: 우리나라의 정치 발전
  { code: '[6사05-01]', content: '4·19 혁명, 5·18 민주화 운동, 6월 민주 항쟁 등을 통해 자유민주주의가 발전해 온 과정을 파악한다.', grade: 6, semester: 1, subject: '사회', domain: '일반사회' },
  { code: '[6사05-02]', content: '광복 이후 시민의 정치 참여 활동이 확대되는 과정을 중심으로 오늘날 우리 사회의 발전상을 살펴본다.', grade: 6, semester: 1, subject: '사회', domain: '일반사회' },
  { code: '[6사05-03]', content: '일상생활에서 경험하는 민주주의 실천 사례를 탐구하여 민주주의의 의미와 중요성을 파악하고, 생활 속에서 민주주의를 실천하는 태도를 기른다.', grade: 6, semester: 1, subject: '사회', domain: '일반사회' },
  { code: '[6사05-04]', content: '민주적 의사 결정 원리(다수결, 대화와 타협, 소수 의견 존중 등)의 의미와 필요성을 이해하고, 이를 실제 생활 속에서 실천하는 자세를 지닌다.', grade: 6, semester: 1, subject: '사회', domain: '일반사회' },
  { code: '[6사05-05]', content: '민주정치의 기본 원리(국민 주권, 권력 분립 등)를 이해하고, 그것이 적용된 다양한 사례를 탐구한다.', grade: 6, semester: 1, subject: '사회', domain: '일반사회' },
  { code: '[6사05-06]', content: '국회, 행정부, 법원의 기능을 이해하고, 그것이 국민 생활에 미치는 영향을 다양한 사례를 통해 탐구한다.', grade: 6, semester: 1, subject: '사회', domain: '일반사회' },
  // 2단원: 우리나라의 경제 발전
  { code: '[6사06-01]', content: '다양한 경제활동 사례를 통해 가계와 기업의 경제적 역할을 파악하고, 가계와 기업의 합리적 선택 방법을 탐색한다.', grade: 6, semester: 1, subject: '사회', domain: '경제' },
  { code: '[6사06-02]', content: '여러 경제활동의 사례를 통하여 자유경쟁과 경제 정의의 조화를 추구하는 우리나라 경제체제의 특징을 설명한다.', grade: 6, semester: 1, subject: '사회', domain: '경제' },
  { code: '[6사06-03]', content: '농업 중심 경제에서 공업·서비스업 중심 경제로 변화하는 모습을 중심으로 우리나라 경제성장 과정을 파악한다.', grade: 6, semester: 1, subject: '사회', domain: '경제' },
  { code: '[6사06-04]', content: '광복 이후 경제성장 과정에서 우리 사회가 겪은 사회 변동의 특징과 다양한 문제를 살펴보고, 더 나은 사회를 만들기 위하여 해결해야 할 과제를 탐구한다.', grade: 6, semester: 1, subject: '사회', domain: '경제' },
  { code: '[6사06-05]', content: '세계 여러 나라와의 경제 교류 활동으로 나타난 우리 경제생활의 변화 모습을 탐구한다.', grade: 6, semester: 1, subject: '사회', domain: '경제' },
  { code: '[6사06-06]', content: '다양한 경제 교류 사례를 통해 우리나라 경제가 다른 나라와 상호 의존 및 경쟁 관계에 있음을 파악한다.', grade: 6, semester: 1, subject: '사회', domain: '경제' },

  // ========== 사회 6학년 2학기 (2015 개정) ==========
  // 1단원: 세계의 여러 나라들
  { code: '[6사07-01]', content: '세계지도, 지구본을 비롯한 다양한 형태의 공간 자료에 대한 기초적인 내용과 활용 방법을 알고, 이를 실제 생활에 활용한다.', grade: 6, semester: 2, subject: '사회', domain: '지리' },
  { code: '[6사07-02]', content: '여러 시각 및 공간 자료를 활용하여 세계 주요 대륙과 대양의 위치 및 범위, 대륙별 주요 나라의 위치와 영토의 특징을 탐색한다.', grade: 6, semester: 2, subject: '사회', domain: '지리' },
  { code: '[6사07-03]', content: '세계 주요 기후의 분포와 특성을 파악하고, 이를 바탕으로 하여 기후 환경과 인간 생활 간의 관계를 탐색한다.', grade: 6, semester: 2, subject: '사회', domain: '지리' },
  { code: '[6사07-04]', content: '의식주 생활에 특색이 있는 나라나 지역의 사례를 조사하고, 이를 바탕으로 하여 인간 생활에 영향을 미치는 여러 자연적, 인문적 요인을 탐구한다.', grade: 6, semester: 2, subject: '사회', domain: '지리' },
  { code: '[6사07-05]', content: '우리나라와 관계 깊은 나라들의 기초적인 지리 정보를 조사하고, 정치·경제·문화면에서 맺고 있는 상호 의존 관계를 탐구한다.', grade: 6, semester: 2, subject: '사회', domain: '지리' },
  { code: '[6사07-06]', content: '이웃 나라들(중국, 일본, 러시아)의 자연적, 인문적 특성과 교류 현황을 조사하고, 이를 바탕으로 하여 상호 이해와 협력의 태도를 기른다.', grade: 6, semester: 2, subject: '사회', domain: '지리' },
  // 2단원: 통일 한국의 미래와 지구촌의 평화
  { code: '[6사08-01]', content: '독도를 지키려는 조상들의 노력을 역사적 자료를 통하여 살펴보고, 독도의 위치 등 지리적 특성에 대한 이해를 바탕으로 하여 영토주권 의식을 기른다.', grade: 6, semester: 2, subject: '사회', domain: '지리' },
  { code: '[6사08-02]', content: '남북통일을 위한 노력을 살펴보고, 지구촌 평화에 기여하는 통일 한국의 미래상을 그려 본다.', grade: 6, semester: 2, subject: '사회', domain: '일반사회' },
  { code: '[6사08-03]', content: '지구촌의 평화와 발전을 위협하는 다양한 갈등 사례를 조사하고 그 해결 방안을 탐색한다.', grade: 6, semester: 2, subject: '사회', domain: '일반사회' },
  { code: '[6사08-04]', content: '지구촌의 평화와 발전을 위해 노력하는 다양한 행위 주체(개인, 국가, 국제기구, 비정부 기구 등)의 활동 사례를 조사한다.', grade: 6, semester: 2, subject: '사회', domain: '일반사회' },
  { code: '[6사08-05]', content: '지구촌의 주요 환경문제를 조사하여 해결 방안을 탐색하고, 환경문제 해결에 협력하는 세계시민의 자세를 기른다.', grade: 6, semester: 2, subject: '사회', domain: '일반사회' },
  { code: '[6사08-06]', content: '지속가능한 미래를 건설하기 위한 과제(친환경적 생산과 소비 방식 확산, 빈곤과 기아 퇴치, 문화적 편견과 차별 해소 등)를 조사하고, 세계시민으로서 이에 적극 참여하는 방안을 모색한다.', grade: 6, semester: 2, subject: '사회', domain: '일반사회' },

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

  // ========== 영어 5학년 1학기 - 2015 개정 교육과정 ==========
  { code: '[6영01-01]', content: '어구나 문장을 듣고 세부 정보를 파악할 수 있다.', grade: 5, semester: 1, subject: '영어', domain: '듣기' },
  { code: '[6영01-02]', content: '일상생활 관련 간단한 대화를 듣고 세부 정보를 파악할 수 있다.', grade: 5, semester: 1, subject: '영어', domain: '듣기' },
  { code: '[6영02-01]', content: '그림, 사진, 또는 도표에 대해 한두 문장으로 표현할 수 있다.', grade: 5, semester: 1, subject: '영어', domain: '말하기' },
  { code: '[6영02-02]', content: '자신이나 가족에 대해 한두 문장으로 소개할 수 있다.', grade: 5, semester: 1, subject: '영어', domain: '말하기' },
  { code: '[6영03-01]', content: '쉽고 간단한 문장을 따라 읽을 수 있다.', grade: 5, semester: 1, subject: '영어', domain: '읽기' },
  { code: '[6영04-01]', content: '알파벳 대소문자를 구별하여 쓸 수 있다.', grade: 5, semester: 1, subject: '영어', domain: '쓰기' },

  // ========== 영어 5학년 2학기 - 2015 개정 교육과정 ==========
  { code: '[6영01-03]', content: '주변의 사람이나 사물에 관한 간단한 말이나 대화를 듣고 세부 정보를 파악할 수 있다.', grade: 5, semester: 2, subject: '영어', domain: '듣기' },
  { code: '[6영01-04]', content: '그림, 사진, 또는 도표에 관한 쉽고 간단한 말이나 대화를 듣고 세부 정보를 파악할 수 있다.', grade: 5, semester: 2, subject: '영어', domain: '듣기' },
  { code: '[6영02-03]', content: '일상생활 속의 친숙한 주제에 관해 짧고 간단하게 말할 수 있다.', grade: 5, semester: 2, subject: '영어', domain: '말하기' },
  { code: '[6영02-04]', content: '일상생활에 관한 간단한 대화를 할 수 있다.', grade: 5, semester: 2, subject: '영어', domain: '말하기' },
  { code: '[6영03-02]', content: '쉽고 간단한 문장을 읽고 의미를 이해할 수 있다.', grade: 5, semester: 2, subject: '영어', domain: '읽기' },
  { code: '[6영04-02]', content: '구두로 익힌 문장을 쓸 수 있다.', grade: 5, semester: 2, subject: '영어', domain: '쓰기' },

  // ========== 영어 6학년 1학기 - 2015 개정 교육과정 ==========
  { code: '[6영01-05]', content: '간단하고 쉬운 노래, 챈트, 동시를 듣고 따라 말할 수 있다.', grade: 6, semester: 1, subject: '영어', domain: '듣기' },
  { code: '[6영01-06]', content: '짧고 쉬운 이야기나 설명을 듣고 주제, 대의를 파악할 수 있다.', grade: 6, semester: 1, subject: '영어', domain: '듣기' },
  { code: '[6영02-05]', content: '간단한 표현을 사용하여 지시, 설명하는 말을 할 수 있다.', grade: 6, semester: 1, subject: '영어', domain: '말하기' },
  { code: '[6영02-06]', content: '간단한 표현을 사용하여 허락하거나 요청하는 말을 할 수 있다.', grade: 6, semester: 1, subject: '영어', domain: '말하기' },
  { code: '[6영03-03]', content: '일상생활 속의 친숙한 주제에 관한 글을 읽고 세부 정보를 파악할 수 있다.', grade: 6, semester: 1, subject: '영어', domain: '읽기' },
  { code: '[6영04-03]', content: '실물, 그림, 도표를 보고 쉽고 간단한 문장으로 표현할 수 있다.', grade: 6, semester: 1, subject: '영어', domain: '쓰기' },

  // ========== 영어 6학년 2학기 - 2015 개정 교육과정 ==========
  { code: '[6영01-07]', content: '일상생활 관련 친숙한 주제에 관한 간단한 말이나 대화를 듣고 주제, 대의를 파악할 수 있다.', grade: 6, semester: 2, subject: '영어', domain: '듣기' },
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

  // ========== 도덕 5학년 1학기 - 2015 개정 교육과정 ==========
  { code: '[6도01-01]', content: '긍정적 생활을 하는 것이 자신과 다른 사람에게 주는 의미와 영향을 탐구하고, 자주적인 삶의 의미와 중요성을 설명할 수 있다.', grade: 5, semester: 1, subject: '도덕', domain: '자신과의 관계' },
  { code: '[6도01-02]', content: '자신이 추구하는 삶을 탐색하고, 인생 목표를 세워 바람직한 삶을 실천할 수 있다.', grade: 5, semester: 1, subject: '도덕', domain: '자신과의 관계' },
  { code: '[6도01-03]', content: '자신의 욕구와 감정을 다스리는 방법을 익히고 절제하는 생활을 실천할 수 있다.', grade: 5, semester: 1, subject: '도덕', domain: '자신과의 관계' },

  // ========== 도덕 5학년 2학기 - 2015 개정 교육과정 ==========
  { code: '[6도02-01]', content: '사이버 공간에서 발생하는 여러 문제에 대한 도덕적 민감성을 기르고, 사이버 공간에서 지켜야 할 예절과 법을 알고 습관화할 수 있다.', grade: 5, semester: 2, subject: '도덕', domain: '타인과의 관계' },
  { code: '[6도02-02]', content: '다양한 갈등을 평화적으로 해결하는 것의 중요성과 방법을 알고, 평화적으로 갈등을 해결하는 의지를 기를 수 있다.', grade: 5, semester: 2, subject: '도덕', domain: '타인과의 관계' },
  { code: '[6도02-03]', content: '봉사의 의미와 중요성을 알고, 주변 사람들을 위해 봉사하려는 실천 의지를 기를 수 있다.', grade: 5, semester: 2, subject: '도덕', domain: '타인과의 관계' },

  // ========== 도덕 6학년 1학기 - 2015 개정 교육과정 ==========
  // 1단원: 내 삶의 주인은 바로 나
  { code: '[6도01-01]', content: '감정과 욕구를 조절하지 못해 나타날 수 있는 결과를 도덕적으로 상상해 보고, 올바르게 자신의 감정을 조절하고 표현할 수 있는 방법을 습관화한다.', grade: 6, semester: 1, subject: '도덕', domain: '자신과의 관계' },
  // 2단원: 작은 손길이 모여 따뜻해지는 세상
  { code: '[6도02-03]', content: '봉사의 의미와 중요성을 알고, 주변 사람들을 위해 봉사하려는 실천 의지를 기를 수 있다.', grade: 6, semester: 1, subject: '도덕', domain: '타인과의 관계' },
  // 3단원: 나를 돌아보는 생활
  { code: '[6도04-01]', content: '생명의 소중함을 이해하고 인간 생명과 환경 문제에 관심을 가지며 인간 생명과 자연을 보호하려는 태도를 가질 수 있다.', grade: 6, semester: 1, subject: '도덕', domain: '자연·초월과의 관계' },
  { code: '[6도04-02]', content: '올바르게 살아가기 위해 마음을 다스리고 자기 반성과 성찰을 통해 올바른 삶을 살고자 하는 의지를 기를 수 있다.', grade: 6, semester: 1, subject: '도덕', domain: '자연·초월과의 관계' },

  // ========== 도덕 6학년 2학기 - 2015 개정 교육과정 ==========
  // 4단원: 공정한 생활
  { code: '[6도03-02]', content: '공정의 의미와 공정한 사회의 필요성을 이해하고, 일상생활에서 공정하게 생활하려는 실천 의지를 기를 수 있다.', grade: 6, semester: 2, subject: '도덕', domain: '사회·공동체와의 관계' },
  // 5단원: 우리가 꿈꾸는 통일 한국
  { code: '[6도03-03]', content: '나라를 사랑하는 마음의 중요성을 깨닫고, 통일 한국을 실현하기 위한 적극적인 통일 의지와 태도를 기를 수 있다.', grade: 6, semester: 2, subject: '도덕', domain: '사회·공동체와의 관계' },
  // 6단원: 함께 살아가는 지구촌
  { code: '[6도03-04]', content: '세계화 시대에 인류가 겪고 있는 문제와 그 원인을 토론을 통해 알아보고, 세계 시민으로서 이를 해결하고자 하는 의지를 가지고 실천한다.', grade: 6, semester: 2, subject: '도덕', domain: '사회·공동체와의 관계' },

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

  // ========== 체육 5학년 1학기 - 2015 개정 교육과정 ==========
  { code: '[6체01-01]', content: '건강이 가지는 개인적, 사회적 의미와 건강 수준에 영향을 미치는 요인을 이해하고 적절한 운동을 실천할 수 있다.', grade: 5, semester: 1, subject: '체육', domain: '건강' },
  { code: '[6체01-02]', content: '여러 체력 요소(근력, 심폐지구력, 유연성 등)를 이해하고 자신의 체력 수준을 측정하여 체력 운동 계획을 세워 수행할 수 있다.', grade: 5, semester: 1, subject: '체육', domain: '건강' },
  { code: '[6체01-03]', content: '균형 잡힌 식사가 건강에 중요함을 알고, 바른 식생활을 실천할 수 있다.', grade: 5, semester: 1, subject: '체육', domain: '건강' },

  // ========== 체육 5학년 2학기 - 2015 개정 교육과정 ==========
  { code: '[6체02-01]', content: '속도 도전의 개념과 특성을 탐색하고, 빠르게 이동하는 동작과 관련된 기초 기능을 익혀 게임이나 활동에 적용할 수 있다.', grade: 5, semester: 2, subject: '체육', domain: '도전' },
  { code: '[6체02-02]', content: '동작 도전의 개념과 특성을 이해하고 동작 기능을 익혀 공연이나 발표에서 동작을 표현할 수 있다.', grade: 5, semester: 2, subject: '체육', domain: '도전' },
  { code: '[6체02-03]', content: '거리 도전의 개념과 특성을 이해하고 투·도 기능을 익혀 자신의 기록에 도전할 수 있다.', grade: 5, semester: 2, subject: '체육', domain: '도전' },
  { code: '[6체05-01]', content: '생활 안전의 의미와 중요성을 알고, 자신과 타인의 안전을 위한 위험 상황 예방 및 대처 방법을 익혀 실천할 수 있다.', grade: 5, semester: 2, subject: '체육', domain: '안전' },

  // ========== 체육 6학년 1학기 - 2015 개정 교육과정 ==========
  { code: '[6체03-01]', content: '영역형 경쟁의 개념과 특성을 이해하고, 영역형 경쟁에서 사용되는 기본 기능과 전략을 탐색할 수 있다.', grade: 6, semester: 1, subject: '체육', domain: '경쟁' },
  { code: '[6체03-02]', content: '네트형 경쟁의 개념과 특성을 이해하고, 네트형 경쟁에서 사용되는 기본 기능과 전략을 탐색할 수 있다.', grade: 6, semester: 1, subject: '체육', domain: '경쟁' },
  { code: '[6체03-03]', content: '필드형 경쟁의 개념과 특성을 이해하고, 필드형 경쟁에서 사용되는 기본 기능과 전략을 탐색할 수 있다.', grade: 6, semester: 1, subject: '체육', domain: '경쟁' },
  { code: '[6체05-02]', content: '야외 활동에서 발생하는 안전사고의 원인을 알고 예방하며, 안전하게 활동할 수 있다.', grade: 6, semester: 1, subject: '체육', domain: '안전' },

  // ========== 체육 6학년 2학기 - 2015 개정 교육과정 ==========
  { code: '[6체04-01]', content: '움직임 표현의 개념과 특성을 탐색하고 다양한 주제의 움직임 표현 활동에 참여하여 신체 움직임으로 표현할 수 있다.', grade: 6, semester: 2, subject: '체육', domain: '표현' },
  { code: '[6체04-02]', content: '리듬 표현의 개념과 특성을 탐색하고 다양한 리듬에 맞추어 신체 움직임으로 표현할 수 있다.', grade: 6, semester: 2, subject: '체육', domain: '표현' },
  { code: '[6체04-03]', content: '민속 표현의 개념과 특성을 탐색하고 전통 문화를 바르게 이해하며 표현할 수 있다.', grade: 6, semester: 2, subject: '체육', domain: '표현' },

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

  // ========== 음악 5학년 1학기 - 2015 개정 교육과정 ==========
  { code: '[6음01-01]', content: '악곡의 특징을 이해하며 노래 부르거나 악기로 연주할 수 있다.', grade: 5, semester: 1, subject: '음악', domain: '표현' },
  { code: '[6음01-02]', content: '악곡에 어울리는 신체표현을 할 수 있다.', grade: 5, semester: 1, subject: '음악', domain: '표현' },
  { code: '[6음01-03]', content: '제재곡의 노랫말을 바꾸거나 노랫말에 맞는 말붙임새로 만들 수 있다.', grade: 5, semester: 1, subject: '음악', domain: '표현' },

  // ========== 음악 5학년 2학기 - 2015 개정 교육과정 ==========
  { code: '[6음01-04]', content: '제재곡의 일부 가락을 바꾸어 표현할 수 있다.', grade: 5, semester: 2, subject: '음악', domain: '표현' },
  { code: '[6음01-05]', content: '이야기의 장면이나 상황을 음악으로 표현할 수 있다.', grade: 5, semester: 2, subject: '음악', domain: '표현' },
  { code: '[6음02-01]', content: '5~6학년 수준의 음악 요소와 개념을 구별하여 표현할 수 있다.', grade: 5, semester: 2, subject: '음악', domain: '표현' },

  // ========== 음악 6학년 1학기 - 2015 개정 교육과정 ==========
  { code: '[6음02-02]', content: '다양한 종류의 음악을 듣고 음악의 특징에 대해 발표할 수 있다.', grade: 6, semester: 1, subject: '음악', domain: '감상' },
  { code: '[6음02-03]', content: '음악을 듣고 역사적, 문화적 배경 속에서 음악의 특징을 설명할 수 있다.', grade: 6, semester: 1, subject: '음악', domain: '감상' },
  { code: '[6음03-01]', content: '음악을 활용하여 가정, 학교, 사회 등의 행사에 참여하고 느낌을 발표할 수 있다.', grade: 6, semester: 1, subject: '음악', domain: '생활화' },

  // ========== 음악 6학년 2학기 - 2015 개정 교육과정 ==========
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

  // ========== 미술 5학년 1학기 - 2015 개정 교육과정 ==========
  { code: '[6미01-01]', content: '자신의 특징을 다양한 방법으로 탐색하여 나타낼 수 있다.', grade: 5, semester: 1, subject: '미술', domain: '체험' },
  { code: '[6미01-02]', content: '미술 작품과 생활용품의 심미적 가치를 비교하여 탐색할 수 있다.', grade: 5, semester: 1, subject: '미술', domain: '체험' },
  { code: '[6미02-01]', content: '표현 주제를 잘 나타낼 수 있는 다양한 방법을 탐색하여 계획할 수 있다.', grade: 5, semester: 1, subject: '미술', domain: '표현' },
  { code: '[6미02-02]', content: '주제를 다양한 방법으로 나타낼 수 있다.', grade: 5, semester: 1, subject: '미술', domain: '표현' },

  // ========== 미술 5학년 2학기 - 2015 개정 교육과정 ==========
  { code: '[6미01-03]', content: '미술과 다양한 분야가 서로 영향을 미치고 있음을 알 수 있다.', grade: 5, semester: 2, subject: '미술', domain: '체험' },
  { code: '[6미01-04]', content: '이미지를 활용하여 자신의 생각과 느낌을 전달할 수 있다.', grade: 5, semester: 2, subject: '미술', domain: '체험' },
  { code: '[6미02-03]', content: '다양한 자료를 활용하여 창의적인 아이디어를 발전시킬 수 있다.', grade: 5, semester: 2, subject: '미술', domain: '표현' },

  // ========== 미술 6학년 1학기 - 2015 개정 교육과정 ==========
  { code: '[6미02-04]', content: '조형 원리의 특징을 탐색하고, 표현 의도에 적합하게 활용할 수 있다.', grade: 6, semester: 1, subject: '미술', domain: '표현' },
  { code: '[6미02-05]', content: '다양한 표현 방법의 특징과 과정을 탐색하여 활용할 수 있다.', grade: 6, semester: 1, subject: '미술', domain: '표현' },
  { code: '[6미02-06]', content: '작품 제작의 전체 과정에서 느낀 점, 알게 된 점 등을 서로 이야기할 수 있다.', grade: 6, semester: 1, subject: '미술', domain: '표현' },

  // ========== 미술 6학년 2학기 - 2015 개정 교육과정 ==========
  { code: '[6미03-01]', content: '미술 작품의 내용과 형식에 대해 설명할 수 있다.', grade: 6, semester: 2, subject: '미술', domain: '감상' },
  { code: '[6미03-02]', content: '미술 작품이 만들어진 때와 곳의 사회적, 문화적 배경을 알아보고 작품을 해석할 수 있다.', grade: 6, semester: 2, subject: '미술', domain: '감상' },
  { code: '[6미03-03]', content: '미술 작품의 비평 방법에 따라 작품에 대해 자신의 생각과 느낌을 말할 수 있다.', grade: 6, semester: 2, subject: '미술', domain: '감상' },

  // ========== 실과 5학년 1학기 - 2015 개정 교육과정 ==========
  { code: '[6실01-01]', content: '나와 가족의 관계를 알고 서로 돕고 의지하는 가족의 소중함을 이해할 수 있다.', grade: 5, semester: 1, subject: '실과', domain: '인간 발달과 가족' },
  { code: '[6실01-02]', content: '가정생활에서 요구되는 기본 예절을 익히고, 올바른 언어와 행동으로 생활할 수 있다.', grade: 5, semester: 1, subject: '실과', domain: '인간 발달과 가족' },
  { code: '[6실02-01]', content: '자신과 가족의 영양 필요량을 이해하고 균형 잡힌 식사를 계획하여 실천할 수 있다.', grade: 5, semester: 1, subject: '실과', domain: '가정생활과 안전' },
  { code: '[6실02-02]', content: '조리의 기초를 이해하고 간단한 조리 도구를 이용하여 음식을 만들 수 있다.', grade: 5, semester: 1, subject: '실과', domain: '가정생활과 안전' },

  // ========== 실과 5학년 2학기 - 2015 개정 교육과정 ==========
  { code: '[6실02-03]', content: '간단한 수선 방법을 알고 옷 정리와 보관을 할 수 있다.', grade: 5, semester: 2, subject: '실과', domain: '가정생활과 안전' },
  { code: '[6실02-04]', content: '생활 자원의 종류와 특성을 알고, 효율적인 사용과 관리 방법을 탐색하여 실천할 수 있다.', grade: 5, semester: 2, subject: '실과', domain: '가정생활과 안전' },
  { code: '[6실03-01]', content: '생활 속에서 컴퓨팅 사고를 기반으로 문제를 해결하는 방법을 탐색하고 적용할 수 있다.', grade: 5, semester: 2, subject: '실과', domain: '기술 시스템' },
  { code: '[6실03-02]', content: '절차적 사고에 의한 문제 분석과 해결 과정을 통해 알고리즘을 설계할 수 있다.', grade: 5, semester: 2, subject: '실과', domain: '기술 시스템' },

  // ========== 실과 6학년 1학기 - 2015 개정 교육과정 ==========
  { code: '[6실04-01]', content: '프로그래밍 도구를 사용하여 기초적인 프로그래밍 과정을 체험할 수 있다.', grade: 6, semester: 1, subject: '실과', domain: '기술 시스템' },
  { code: '[6실04-02]', content: '소프트웨어가 사용되는 다양한 사례를 알고 소프트웨어의 중요성을 이해할 수 있다.', grade: 6, semester: 1, subject: '실과', domain: '기술 시스템' },
  { code: '[6실04-03]', content: '다양한 재료의 특성과 가공 방법을 알고 제품 만들기에 적용할 수 있다.', grade: 6, semester: 1, subject: '실과', domain: '기술 시스템' },
  { code: '[6실04-04]', content: '발명의 의미와 중요성을 이해하고 간단한 발명 작품을 만들 수 있다.', grade: 6, semester: 1, subject: '실과', domain: '기술 시스템' },

  // ========== 실과 6학년 2학기 - 2015 개정 교육과정 ==========
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

// 주요 과목 (국수사과영) - 6개 선택
const MAJOR_SUBJECTS = ['국어', '수학', '사회', '과학', '영어'];
// 기타 과목 (도덕, 체육, 음악, 미술, 실과) - 3개 선택

// AI 생성용: 과목별로 지정된 개수만 랜덤 선택
export function getRandomAchievementStandards(
  grade: number,
  subjectName: string,
  semester?: 1 | 2
): AchievementStandard[] {
  const allStandards = getAchievementStandardsBySubject(grade, subjectName, semester);

  // 주요 과목은 6개, 기타 과목은 3개 선택
  const selectCount = MAJOR_SUBJECTS.includes(subjectName) ? 6 : 3;

  // 성취기준이 선택 개수보다 적으면 전체 반환
  if (allStandards.length <= selectCount) {
    return allStandards;
  }

  // Fisher-Yates 셔플 알고리즘으로 랜덤 선택
  const shuffled = [...allStandards];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, selectCount);
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
