import { GoogleGenerativeAI } from '@google/generative-ai';
import { GeneratedRecord, NugaRecord, NugaCategory } from '@/types';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function generateWithGemini(prompt: string): Promise<GeneratedRecord[]> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    // 응답 파싱
    const records = parseGeminiResponse(text);
    return records;
  } catch (error) {
    console.error('Gemini API Error:', error);
    throw error;
  }
}

function parseGeminiResponse(text: string): GeneratedRecord[] {
  const records: GeneratedRecord[] = [];
  const lines = text.split('\n');

  let currentNumber = 0;
  let currentContent = '';

  for (const line of lines) {
    // "1번:" 또는 "1번 :" 형식 매칭
    const match = line.match(/^(\d+)번\s*:\s*(.*)$/);

    if (match) {
      // 이전 레코드 저장
      if (currentNumber > 0 && currentContent.trim()) {
        records.push({
          studentNumber: currentNumber,
          content: currentContent.trim(),
          isEdited: false,
          charCount: currentContent.trim().length
        });
      }

      currentNumber = parseInt(match[1]);
      currentContent = match[2];
    } else if (currentNumber > 0 && line.trim()) {
      // 현재 레코드에 내용 추가
      currentContent += ' ' + line.trim();
    }
  }

  // 마지막 레코드 저장
  if (currentNumber > 0 && currentContent.trim()) {
    records.push({
      studentNumber: currentNumber,
      content: currentContent.trim(),
      isEdited: false,
      charCount: currentContent.trim().length
    });
  }

  return records;
}

export async function regenerateSingleRecord(
  prompt: string,
  studentNumber: number
): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

    const singlePrompt = `${prompt}

위의 조건에 맞게 ${studentNumber}번 학생 한 명에 대해서만 기록을 작성해주세요.
다른 번호나 설명 없이 내용만 출력하세요.`;

    const result = await model.generateContent(singlePrompt);
    const response = await result.response;
    const text = response.text().trim();

    // "N번:" 형식 제거
    return text.replace(/^\d+번\s*:\s*/, '').trim();
  } catch (error) {
    console.error('Gemini API Error:', error);
    throw error;
  }
}

/**
 * 누가기록 생성
 */
export async function generateNugaRecords(prompt: string, defaultDate: string): Promise<NugaRecord[]> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    return parseNugaResponse(text, defaultDate);
  } catch (error) {
    console.error('Gemini API Error (Nuga):', error);
    throw error;
  }
}

function parseNugaResponse(text: string, defaultDate: string): NugaRecord[] {
  const records: NugaRecord[] = [];
  const lines = text.split('\n');

  let currentStudentNumber = 0;

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;

    // 학생 번호 매칭 - 여러 형식 지원
    // "1번:", "1번", "**1번:**", "### 1번", "1번 학생:" 등
    const studentMatch = trimmed.match(/^(?:\*{0,2}|\#{1,3}\s*)?(\d+)번\s*(?:학생)?\s*:?\s*\*{0,2}$/);
    if (studentMatch) {
      currentStudentNumber = parseInt(studentMatch[1]);
      continue;
    }

    // 학생 번호가 같은 줄에 카테고리와 함께 있는 경우
    // "1번: [school_life] 문장 내용"
    const combinedMatch = trimmed.match(/^(?:\*{0,2})?(\d+)번\s*:?\s*\[(\w+)\]\s*(.+)$/);
    if (combinedMatch) {
      currentStudentNumber = parseInt(combinedMatch[1]);
      const category = combinedMatch[2] as NugaCategory;
      const sentence = combinedMatch[3].trim();

      if (sentence.length > 0) {
        records.push({
          id: `nuga_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
          studentNumber: currentStudentNumber,
          sentence,
          date: defaultDate,
          category: isValidCategory(category) ? category : 'other',
          isUsed: false,
          createdAt: new Date(),
        });
      }
      continue;
    }

    // 카테고리별 문장 매칭 - 여러 형식 지원
    // "[school_life] 문장", "- [school_life] 문장", "* [school_life] 문장"
    const categoryMatch = trimmed.match(/^[-*]?\s*\[(\w+)\]\s*(.+)$/);
    if (categoryMatch && currentStudentNumber > 0) {
      const category = categoryMatch[1] as NugaCategory;
      const sentence = categoryMatch[2].trim();

      if (sentence.length > 0) {
        records.push({
          id: `nuga_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`,
          studentNumber: currentStudentNumber,
          sentence,
          date: defaultDate,
          category: isValidCategory(category) ? category : 'other',
          isUsed: false,
          createdAt: new Date(),
        });
      }
    }
  }

  return records;
}

function isValidCategory(cat: string): cat is NugaCategory {
  return ['school_life', 'learning', 'social', 'character', 'talent', 'other'].includes(cat);
}

/**
 * 누가기록을 종합의견으로 합치기
 */
export async function combineToOpinion(prompt: string): Promise<string> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text().trim();
  } catch (error) {
    console.error('Gemini API Error (Combine):', error);
    throw error;
  }
}
