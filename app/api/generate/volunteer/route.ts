import { NextRequest, NextResponse } from 'next/server';
import { generateWithGemini, regenerateSingleRecord } from '@/lib/gemini';
import { buildVolunteerPrompt } from '@/lib/prompts/volunteer';
import { VolunteerActivity } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { studentCount, grade, activity, studentNumber, regenerateSingle } = body as {
      studentCount: number;
      grade: number;
      activity: VolunteerActivity;
      studentNumber?: number;
      regenerateSingle?: boolean;
    };

    if (!studentCount || !grade || !activity) {
      return NextResponse.json(
        { error: '필수 파라미터가 누락되었습니다.' },
        { status: 400 }
      );
    }

    const prompt = buildVolunteerPrompt(studentCount, grade, activity);

    if (regenerateSingle && studentNumber) {
      const content = await regenerateSingleRecord(prompt, studentNumber);
      return NextResponse.json({ content });
    }

    const records = await generateWithGemini(prompt);
    return NextResponse.json({ records });
  } catch (error) {
    console.error('Volunteer generation error:', error);
    return NextResponse.json(
      { error: '기록 생성에 실패했습니다.' },
      { status: 500 }
    );
  }
}
