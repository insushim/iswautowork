'use client';

import { useState } from 'react';
import { useStore } from '@/store/useStore';
import { CareerActivityType, CareerActivity } from '@/types';
import { CAREER_TYPE_INFO } from '@/lib/curriculum-data';
import { Card, CardHeader, CardTitle, CardContent, Button, Select, Input, Textarea } from '@/components/ui';
import { RecordList } from '@/components/RecordList';
import { useGenerate } from '@/hooks/useGenerate';
import { useExport } from '@/hooks/useExport';
import { Compass, ChevronDown, ChevronUp } from 'lucide-react';

export function CareerSection() {
  const {
    classroom,
    careerRecords,
    setCareerRecords,
    updateRecord,
    currentCareerActivity,
    setCurrentCareerActivity,
    isGenerating,
    setIsGenerating,
  } = useStore();

  const [isExpanded, setIsExpanded] = useState(true);
  const [activityType, setActivityType] = useState<CareerActivityType>('self_understanding');
  const [activityName, setActivityName] = useState('');
  const [description, setDescription] = useState('');
  const [regeneratingStudent, setRegeneratingStudent] = useState<number | null>(null);

  const { generate, regenerateSingle } = useGenerate({
    onError: (error) => alert(error),
  });

  const { exportSection } = useExport({ classroom });

  const handleGenerate = async () => {
    if (!classroom || !activityName) return;

    const activity: CareerActivity = {
      type: activityType,
      activityName,
      description: description || undefined,
    };

    setCurrentCareerActivity(activity);
    setIsGenerating(true, 'career');

    const records = await generate('/api/generate/career', {
      studentCount: classroom.studentCount,
      grade: classroom.grade,
      activity,
    });

    if (records) {
      setCareerRecords(records);
    }

    setIsGenerating(false);
  };

  const handleRegenerate = async (studentNumber: number) => {
    if (!classroom || !currentCareerActivity) return;

    setRegeneratingStudent(studentNumber);

    const content = await regenerateSingle('/api/generate/career', {
      studentCount: classroom.studentCount,
      grade: classroom.grade,
      activity: currentCareerActivity,
    }, studentNumber);

    if (content) {
      const newRecords = careerRecords.map((r) =>
        r.studentNumber === studentNumber
          ? { ...r, content, isEdited: false, charCount: content.length }
          : r
      );
      setCareerRecords(newRecords);
    }

    setRegeneratingStudent(null);
  };

  const handleRegenerateAll = async () => {
    await handleGenerate();
  };

  const handleExport = () => {
    exportSection('career', '진로활동', careerRecords, activityName);
  };

  const typeOptions = Object.entries(CAREER_TYPE_INFO).map(([key, value]) => ({
    value: key,
    label: value.name,
  }));

  const currentTypeInfo = CAREER_TYPE_INFO[activityType];

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between"
          >
            <CardTitle className="flex items-center gap-2">
              <Compass className="w-5 h-5 text-green-500" />
              진로활동
            </CardTitle>
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </CardHeader>

        {isExpanded && (
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select
                label="진로활동 유형"
                value={activityType}
                onChange={(e) => setActivityType(e.target.value as CareerActivityType)}
              >
                {typeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>

              <Input
                label="활동명"
                value={activityName}
                onChange={(e) => setActivityName(e.target.value)}
                placeholder="활동명을 입력하세요"
              />
            </div>

            {activityType !== 'custom' && (
              <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                {currentTypeInfo.description}
              </p>
            )}

            <Textarea
              label="활동 설명 (선택)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="진로활동에 대한 설명을 입력하세요"
              rows={2}
            />

            <Button
              onClick={handleGenerate}
              disabled={!classroom || isGenerating || !activityName}
              isLoading={isGenerating}
              className="w-full"
            >
              <Compass className="w-4 h-4 mr-2" />
              진로활동 기록 생성
            </Button>
          </CardContent>
        )}
      </Card>

      {careerRecords.length > 0 && (
        <RecordList
          records={careerRecords}
          title="진로활동 기록"
          onUpdate={(studentNumber, content) => updateRecord('career', studentNumber, content)}
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
