import { NextRequest, NextResponse } from 'next/server';
import { generateWithGemini, regenerateSingleRecord } from '@/lib/gemini';
import { buildSubjectPrompt } from '@/lib/prompts/subject';
import { SubjectAchievementLevel, AchievementStandard, Semester } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      studentCount,
      grade,
      subjectCode,
      subjectName,
      achievementLevels,
      semester,
      achievementStandards,
      sentenceCount,
      studentNumber,
      regenerateSingle,
    } = body as {
      studentCount: number;
      grade: number;
      subjectCode: string;
      subjectName: string;
      achievementLevels: SubjectAchievementLevel[];
      semester: Semester;
      achievementStandards: AchievementStandard[];
      sentenceCount?: number;
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
      semester || 1,
      achievementStandards || [],
      sentenceCount
    );

    if (regenerateSingle && studentNumber) {
      const content = await regenerateSingleRecord(prompt, studentNumber);
      return NextResponse.json({ content });
    }

    const records = await generateWithGemini(prompt);
    return NextResponse.json({ records });
  } catch (error) {
    console.error('Subject generation error:', error);
    const errorMessage = error instanceof Error ? error.message : '알 수 없는 오류';
    return NextResponse.json(
      { error: `기록 생성에 실패했습니다: ${errorMessage}` },
      { status: 500 }
    );
  }
}
