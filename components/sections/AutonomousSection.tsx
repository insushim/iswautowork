'use client';

import { useState } from 'react';
import { useStore } from '@/store/useStore';
import { AutonomousActivityType, AutonomousActivity } from '@/types';
import { AUTONOMOUS_ACTIVITY_INFO } from '@/lib/curriculum-data';
import { Card, CardHeader, CardTitle, CardContent, Button, Select, Input, Textarea } from '@/components/ui';
import { RecordList } from '@/components/RecordList';
import { useGenerate } from '@/hooks/useGenerate';
import { useExport } from '@/hooks/useExport';
import { Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

export function AutonomousSection() {
  const {
    classroom,
    autonomousRecords,
    setAutonomousRecords,
    updateRecord,
    currentAutonomousActivity,
    setCurrentAutonomousActivity,
    isGenerating,
    setIsGenerating,
  } = useStore();

  const [isExpanded, setIsExpanded] = useState(true);
  const [activityType, setActivityType] = useState<AutonomousActivityType>('school_violence_prevention');
  const [customTitle, setCustomTitle] = useState('');
  const [description, setDescription] = useState('');
  const [regeneratingStudent, setRegeneratingStudent] = useState<number | null>(null);

  const { generate, regenerateSingle } = useGenerate({
    onError: (error) => alert(error),
  });

  const { exportSection } = useExport({ classroom });

  const handleGenerate = async () => {
    if (!classroom) return;

    const activity: AutonomousActivity = {
      type: activityType,
      customTitle: activityType === 'custom' ? customTitle : undefined,
      description: description || undefined,
    };

    setCurrentAutonomousActivity(activity);
    setIsGenerating(true, 'autonomous');

    const records = await generate('/api/generate/autonomous', {
      studentCount: classroom.studentCount,
      grade: classroom.grade,
      activity,
    });

    if (records) {
      setAutonomousRecords(records);
    }

    setIsGenerating(false);
  };

  const handleRegenerate = async (studentNumber: number) => {
    if (!classroom || !currentAutonomousActivity) return;

    setRegeneratingStudent(studentNumber);

    const content = await regenerateSingle('/api/generate/autonomous', {
      studentCount: classroom.studentCount,
      grade: classroom.grade,
      activity: currentAutonomousActivity,
    }, studentNumber);

    if (content) {
      const newRecords = autonomousRecords.map((r) =>
        r.studentNumber === studentNumber
          ? { ...r, content, isEdited: false, charCount: content.length }
          : r
      );
      setAutonomousRecords(newRecords);
    }

    setRegeneratingStudent(null);
  };

  const handleRegenerateAll = async () => {
    await handleGenerate();
  };

  const handleExport = () => {
    const activityName = activityType === 'custom'
      ? customTitle
      : AUTONOMOUS_ACTIVITY_INFO[activityType].name;
    exportSection('autonomous', '자율활동', autonomousRecords, activityName);
  };

  const activityOptions = Object.entries(AUTONOMOUS_ACTIVITY_INFO).map(([key, value]) => ({
    value: key,
    label: value.name,
  }));

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between"
          >
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-500" />
              자율활동
            </CardTitle>
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </CardHeader>

        {isExpanded && (
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select
                label="활동 유형"
                value={activityType}
                onChange={(e) => setActivityType(e.target.value as AutonomousActivityType)}
              >
                {activityOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>

              {activityType === 'custom' && (
                <Input
                  label="활동명"
                  value={customTitle}
                  onChange={(e) => setCustomTitle(e.target.value)}
                  placeholder="활동명을 입력하세요"
                />
              )}
            </div>

            <Textarea
              label="추가 설명 (선택)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="활동에 대한 추가 설명을 입력하세요"
              rows={2}
            />

            {activityType !== 'custom' && (
              <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                {AUTONOMOUS_ACTIVITY_INFO[activityType].description}
              </p>
            )}

            <Button
              onClick={handleGenerate}
              disabled={!classroom || isGenerating || (activityType === 'custom' && !customTitle)}
              isLoading={isGenerating}
              className="w-full"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              자율활동 기록 생성
            </Button>
          </CardContent>
        )}
      </Card>

      {autonomousRecords.length > 0 && (
        <RecordList
          records={autonomousRecords}
          title="자율활동 기록"
          onUpdate={(studentNumber, content) => updateRecord('autonomous', studentNumber, content)}
          onRegenerate={handleRegenerate}
          onRegenerateAll={handleRegenerateAll}
          onExport={handleExport}
          isGenerating={isGenerating}
          regeneratingStudent={regeneratingStudent}
        />
      )}
    </div>
  );
}
