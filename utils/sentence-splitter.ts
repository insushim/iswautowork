import { NugaRecord, NugaCategory } from '@/types';

// 문장 종결어미 패턴 (공문서체: ~임, ~함, ~음, ~람 등)
const SENTENCE_ENDINGS = /([.。]|(?:임|함|음|람|됨|봄|씀|냄|옴|줌|붐|둠|숨|움|춤|품|즘|듬|슴|읍|렵|럽|럼|런|린|론|룬|룸)(?:\s|$))/g;

/**
 * 행동특성 종합의견 텍스트를 개별 문장으로 분리
 */
export function splitIntoSentences(text: string): string[] {
  if (!text || text.trim() === '') return [];

  // 공문서체 종결어미 기준으로 분리
  const sentences: string[] = [];
  let remaining = text.trim();

  // 정규식으로 분리
  const parts = remaining.split(SENTENCE_ENDINGS);

  let currentSentence = '';
  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (!part) continue;

    // 종결어미인지 확인
    if (SENTENCE_ENDINGS.test(part)) {
      currentSentence += part;
      const trimmed = currentSentence.trim();
      if (trimmed.length > 0) {
        sentences.push(trimmed);
      }
      currentSentence = '';
    } else {
      currentSentence += part;
    }
  }

  // 남은 부분 처리
  if (currentSentence.trim().length > 0) {
    sentences.push(currentSentence.trim());
  }

  // 너무 짧은 문장은 이전 문장과 합치기
  const mergedSentences: string[] = [];
  for (const sentence of sentences) {
    if (sentence.length < 10 && mergedSentences.length > 0) {
      mergedSentences[mergedSentences.length - 1] += ' ' + sentence;
    } else if (sentence.length >= 3) {
      mergedSentences.push(sentence);
    }
  }

  return mergedSentences;
}

/**
 * 문장 내용을 분석하여 카테고리 추정
 */
export function inferCategory(sentence: string): NugaCategory {
  const keywords = {
    school_life: ['등교', '시간', '정리', '청결', '규칙', '예절', '안전', '생활', '태도', '준비', '청소', '급식', '기본'],
    learning: ['수업', '학습', '과제', '공부', '발표', '집중', '탐구', '독서', '책', '질문', '노력', '참여', '흥미'],
    social: ['친구', '협동', '배려', '존중', '어울', '관계', '함께', '도움', '갈등', '중재', '양보', '사교'],
    character: ['책임', '성실', '정직', '자신감', '감정', '인내', '끈기', '회복', '공감', '배려', '마음', '진실'],
    talent: ['재능', '특기', '운동', '음악', '미술', '체육', '꿈', '진로', '창의', '예술', '악기', '그림', '스포츠'],
  };

  for (const [category, words] of Object.entries(keywords)) {
    if (words.some(word => sentence.includes(word))) {
      return category as NugaCategory;
    }
  }

  return 'other';
}

/**
 * 고유 ID 생성
 */
function generateId(): string {
  return `nuga_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

/**
 * 행동특성 종합의견을 누가기록 형태로 변환
 */
export function convertToNugaRecords(
  studentNumber: number,
  content: string,
  defaultDate?: string
): NugaRecord[] {
  const sentences = splitIntoSentences(content);
  const date = defaultDate || new Date().toISOString().split('T')[0];

  return sentences.map(sentence => ({
    id: generateId(),
    studentNumber,
    sentence,
    date,
    category: inferCategory(sentence),
    isUsed: false,
    createdAt: new Date(),
  }));
}

/**
 * 카테고리 한글 라벨
 */
export const CATEGORY_LABELS: Record<NugaCategory, string> = {
  school_life: '학교생활',
  learning: '학습태도',
  social: '교우관계',
  character: '인성',
  talent: '특기',
  other: '기타',
};

/**
 * 카테고리별 색상 (Tailwind)
 */
export const CATEGORY_COLORS: Record<NugaCategory, string> = {
  school_life: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300',
  learning: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  social: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
  character: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300',
  talent: 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300',
  other: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
};
