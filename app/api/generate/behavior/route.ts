import { NextRequest, NextResponse } from 'next/server';
import { generateWithGemini, regenerateSingleRecord } from '@/lib/gemini';
import { buildBehaviorPrompt } from '@/lib/prompts/behavior';
import { BehaviorLevel } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { studentCount, grade, behaviorLevels, studentNumber, regenerateSingle } = body as {
      studentCount: number;
      grade: number;
      behaviorLevels: BehaviorLevel[];
      studentNumber?: number;
      regenerateSingle?: boolean;
    };

    if (!studentCount || !grade || !behaviorLevels) {
      return NextResponse.json(
        { error: '필수 파라미터가 누락되었습니다.' },
        { status: 400 }
      );
    }

    const prompt = buildBehaviorPrompt(studentCount, grade, behaviorLevels);

    if (regenerateSingle && studentNumber) {
      const content = await regenerateSingleRecord(prompt, studentNumber);
      return NextResponse.json({ content });
    }

    const records = await generateWithGemini(prompt);
    return NextResponse.json({ records });
  } catch (error) {
    console.error('Behavior generation error:', error);
    return NextResponse.json(
      { error: '기록 생성에 실패했습니다.' },
      { status: 500 }
    );
  }
}
