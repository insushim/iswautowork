'use client';

import { useState, useEffect } from 'react';
import { useStore } from '@/store/useStore';
import { BehaviorLevel } from '@/types';
import { Card, CardHeader, CardTitle, CardContent, Button } from '@/components/ui';
import { RecordList } from '@/components/RecordList';
import { AchievementLevelGrid } from '@/components/AchievementLevelGrid';
import { useGenerate } from '@/hooks/useGenerate';
import { useExport } from '@/hooks/useExport';
import { User, ChevronDown, ChevronUp } from 'lucide-react';

export function BehaviorSection() {
  const {
    classroom,
    behaviorRecords,
    setBehaviorRecords,
    updateRecord,
    behaviorLevels,
    setBehaviorLevel,
    initBehaviorLevels,
    setAllBehaviorLevels,
    isGenerating,
    setIsGenerating,
  } = useStore();

  const [isExpanded, setIsExpanded] = useState(true);
  const [regeneratingStudent, setRegeneratingStudent] = useState<number | null>(null);

  const { generate, regenerateSingle } = useGenerate({
    onError: (error) => alert(error),
  });

  const { exportSection } = useExport({ classroom });

  useEffect(() => {
    if (classroom && behaviorLevels.length === 0) {
      initBehaviorLevels(classroom.studentCount);
    }
  }, [classroom, behaviorLevels.length, initBehaviorLevels]);

  const handleGenerate = async () => {
    if (!classroom) return;

    setIsGenerating(true, 'behavior');

    const records = await generate('/api/generate/behavior', {
      studentCount: classroom.studentCount,
      grade: classroom.grade,
      behaviorLevels,
    });

    if (records) {
      setBehaviorRecords(records);
    }

    setIsGenerating(false);
  };

  const handleRegenerate = async (studentNumber: number) => {
    if (!classroom) return;

    setRegeneratingStudent(studentNumber);

    const content = await regenerateSingle('/api/generate/behavior', {
      studentCount: classroom.studentCount,
      grade: classroom.grade,
      behaviorLevels,
    }, studentNumber);

    if (content) {
      const newRecords = behaviorRecords.map((r) =>
        r.studentNumber === studentNumber
          ? { ...r, content, isEdited: false, charCount: content.length }
          : r
      );
      setBehaviorRecords(newRecords);
    }

    setRegeneratingStudent(null);
  };

  const handleExport = () => {
    exportSection('behavior', '행동특성 및 종합의견', behaviorRecords);
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between"
          >
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5 text-indigo-500" />
              행동특성 및 종합의견
            </CardTitle>
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </CardHeader>

        {isExpanded && classroom && (
          <CardContent className="space-y-6">
            <div>
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                학생별 행동 수준 설정 (5단계)
              </h4>
              <AchievementLevelGrid
                type="behavior"
                levels={behaviorLevels}
                onLevelChange={(studentNumber, level) =>
                  setBehaviorLevel(studentNumber, level as BehaviorLevel)
                }
                onSetAll={(level) => setAllBehaviorLevels(level as BehaviorLevel)}
                studentCount={classroom.studentCount}
              />
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
              <h5 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                작성 내용 안내
              </h5>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• 생활태도: 학교생활 적응, 기본생활습관, 규칙 준수, 책임감 등</li>
                <li>• 학습태도: 수업 참여도, 과제 수행, 학습 의욕, 집중력 등</li>
                <li>• 교우관계: 친구와의 관계, 협동심, 배려심, 리더십 등</li>
                <li>• 진로발달: 자신의 꿈과 진로에 대한 관심과 노력</li>
                <li>• 특기사항: 학생의 강점, 특별한 활동, 성장한 부분 등</li>
              </ul>
            </div>

            <Button
              onClick={handleGenerate}
              disabled={!classroom || isGenerating}
              isLoading={isGenerating}
              className="w-full"
            >
              <User className="w-4 h-4 mr-2" />
              행동특성 및 종합의견 생성
            </Button>
          </CardContent>
        )}
      </Card>

      {behaviorRecords.length > 0 && (
        <RecordList
          records={behaviorRecords}
          title="행동특성 및 종합의견"
          onUpdate={(studentNumber, content) => updateRecord('behavior', studentNumber, content)}
          onRegenerate={handleRegenerate}
          onRegenerateAll={handleGenerate}
          onExport={handleExport}
          isGenerating={isGenerating}
          regeneratingStudent={regeneratingStudent}
        />
      )}
    </div>
  );
}
