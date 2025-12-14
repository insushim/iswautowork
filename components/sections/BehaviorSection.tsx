'use client';

import { useState, useEffect } from 'react';
import { useStore } from '@/store/useStore';
import { BehaviorLevel, TalentLevel, TalentType } from '@/types';
import { Card, CardHeader, CardTitle, CardContent, Button } from '@/components/ui';
import { RecordList } from '@/components/RecordList';
import { AchievementLevelGrid } from '@/components/AchievementLevelGrid';
import { useGenerate } from '@/hooks/useGenerate';
import { useExport } from '@/hooks/useExport';
import { User, ChevronDown, ChevronUp, Dumbbell, Music, Palette } from 'lucide-react';

const TALENT_LEVELS: { value: TalentLevel; label: string; color: string }[] = [
  { value: 'none', label: '-', color: 'bg-gray-100 dark:bg-gray-700 text-gray-400' },
  { value: 'high', label: '상', color: 'bg-blue-500 text-white' },
  { value: 'medium', label: '중', color: 'bg-green-500 text-white' },
  { value: 'low', label: '하', color: 'bg-yellow-500 text-white' },
];

const TALENT_TYPES: { type: TalentType; label: string; icon: React.ReactNode }[] = [
  { type: 'sports', label: '운동', icon: <Dumbbell className="w-4 h-4" /> },
  { type: 'music', label: '음악', icon: <Music className="w-4 h-4" /> },
  { type: 'art', label: '미술', icon: <Palette className="w-4 h-4" /> },
];

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
    studentTalents,
    setStudentTalent,
    initStudentTalents,
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
    if (classroom && studentTalents.length === 0) {
      initStudentTalents(classroom.studentCount);
    }
  }, [classroom, behaviorLevels.length, studentTalents.length, initBehaviorLevels, initStudentTalents]);

  const handleGenerate = async () => {
    if (!classroom) return;

    setIsGenerating(true, 'behavior');

    const records = await generate('/api/generate/behavior', {
      studentCount: classroom.studentCount,
      grade: classroom.grade,
      behaviorLevels,
      studentTalents,
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
      studentTalents,
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

            {/* 예체능 특기 선택 */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                <span>예체능 특기 설정</span>
                <span className="text-xs text-gray-500">(선택한 학생만 해당 내용 추가)</span>
              </h4>

              {/* 예체능 타입 탭 */}
              <div className="space-y-4">
                {TALENT_TYPES.map(({ type, label, icon }) => (
                  <div key={type} className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                      {icon}
                      <span>{label}</span>
                      <span className="text-xs text-gray-400">
                        (선택: {studentTalents.filter(t => t && t[type] !== 'none').length}명)
                      </span>
                    </div>
                    <div className="grid grid-cols-10 gap-1">
                      {Array.from({ length: classroom?.studentCount || 0 }, (_, i) => {
                        const studentNum = i + 1;
                        const currentLevel = studentTalents[i]?.[type] || 'none';
                        const levelInfo = TALENT_LEVELS.find(l => l.value === currentLevel);

                        return (
                          <div key={studentNum} className="flex flex-col items-center">
                            <span className="text-xs text-gray-400 mb-1">{studentNum}</span>
                            <select
                              value={currentLevel}
                              onChange={(e) => setStudentTalent(studentNum, type, e.target.value as TalentLevel)}
                              className={`w-full text-xs p-1 rounded border-0 cursor-pointer text-center font-medium ${levelInfo?.color}`}
                            >
                              {TALENT_LEVELS.map(level => (
                                <option key={level.value} value={level.value}>
                                  {level.label}
                                </option>
                              ))}
                            </select>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
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
                <li className="text-indigo-600 dark:text-indigo-400">• 예체능 특기: 위에서 선택한 학생만 운동/음악/미술 관련 내용 추가</li>
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
