import { NextRequest, NextResponse } from 'next/server';
import { generateNugaRecords, combineToOpinion } from '@/lib/gemini';
import { buildNugaPrompt, buildCombinePrompt } from '@/lib/prompts/nuga';
import { BehaviorLevel, StudentTalents, NugaCategory } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      studentCount,
      grade,
      behaviorLevels,
      studentTalents,
      categories,
      defaultDate,
      // 종합의견 합치기용
      combineMode,
      studentNumber,
      sentences,
      behaviorLevel,
    } = body as {
      studentCount: number;
      grade: number;
      behaviorLevels: BehaviorLevel[];
      studentTalents?: StudentTalents[];
      categories?: NugaCategory[];
      defaultDate?: string;
      combineMode?: boolean;
      studentNumber?: number;
      sentences?: string[];
      behaviorLevel?: BehaviorLevel;
    };

    // 종합의견 합치기 모드
    if (combineMode && studentNumber && sentences && behaviorLevel) {
      const prompt = buildCombinePrompt(grade, studentNumber, sentences, behaviorLevel);
      const content = await combineToOpinion(prompt);
      return NextResponse.json({ content });
    }

    // 누가기록 생성 모드
    if (!studentCount || !grade || !behaviorLevels) {
      return NextResponse.json(
        { error: '필수 파라미터가 누락되었습니다.' },
        { status: 400 }
      );
    }

    const prompt = buildNugaPrompt(
      studentCount,
      grade,
      behaviorLevels,
      studentTalents,
      categories
    );

    const date = defaultDate || new Date().toISOString().split('T')[0];
    const records = await generateNugaRecords(prompt, date);

    return NextResponse.json({ records });
  } catch (error) {
    console.error('Nuga generation error:', error);
    return NextResponse.json(
      { error: '누가기록 생성에 실패했습니다.' },
      { status: 500 }
    );
  }
}
