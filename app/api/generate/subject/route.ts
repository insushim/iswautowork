import { NextRequest, NextResponse } from 'next/server';
import { generateWithGemini, regenerateSingleRecord } from '@/lib/gemini';
import { buildSubjectPrompt } from '@/lib/prompts/subject';
import { SubjectAchievementLevel, Publisher, AchievementStandard } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      studentCount,
      grade,
      subjectCode,
      subjectName,
      achievementLevels,
      publisher,
      achievementStandards,
      studentNumber,
      regenerateSingle,
    } = body as {
      studentCount: number;
      grade: number;
      subjectCode: string;
      subjectName: string;
      achievementLevels: SubjectAchievementLevel[];
      publisher: Publisher;
      achievementStandards: AchievementStandard[];
      studentNumber?: number;
      regenerateSingle?: boolean;
    };

    if (!studentCount || !grade || !subjectCode || !subjectName || !achievementLevels) {
      return NextResponse.json(
        { error: '필수 파라미터가 누락되었습니다.' },
        { status: 400 }
      );
    }

    const prompt = buildSubjectPrompt(
      studentCount,
      grade,
      subjectCode,
      subjectName,
      achievementLevels,
      publisher || 'national',
      achievementStandards || []
    );

    if (regenerateSingle && studentNumber) {
      const content = await regenerateSingleRecord(prompt, studentNumber);
      return NextResponse.json({ content });
    }

    const records = await generateWithGemini(prompt);
    return NextResponse.json({ records });
  } catch (error) {
    console.error('Subject generation error:', error);
    return NextResponse.json(
      { error: '기록 생성에 실패했습니다.' },
      { status: 500 }
    );
  }
}
