import { GoogleGenerativeAI } from '@google/generative-ai';
import { GeneratedRecord } from '@/types';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function generateWithGemini(prompt: string): Promise<GeneratedRecord[]> {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

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
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

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
