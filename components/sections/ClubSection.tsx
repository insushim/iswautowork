'use client';

import { useState } from 'react';
import { useStore } from '@/store/useStore';
import { ClubActivityCategory, ClubActivity } from '@/types';
import { CLUB_CATEGORY_INFO } from '@/lib/curriculum-data';
import { Card, CardHeader, CardTitle, CardContent, Button, Select, Input, Textarea } from '@/components/ui';
import { RecordList } from '@/components/RecordList';
import { useGenerate } from '@/hooks/useGenerate';
import { useExport } from '@/hooks/useExport';
import { Users, ChevronDown, ChevronUp } from 'lucide-react';

export function ClubSection() {
  const {
    classroom,
    clubRecords,
    setClubRecords,
    updateRecord,
    currentClubActivity,
    setCurrentClubActivity,
    isGenerating,
    setIsGenerating,
  } = useStore();

  const [isExpanded, setIsExpanded] = useState(true);
  const [category, setCategory] = useState<ClubActivityCategory>('academic');
  const [clubName, setClubName] = useState('');
  const [description, setDescription] = useState('');
  const [regeneratingStudent, setRegeneratingStudent] = useState<number | null>(null);

  const { generate, regenerateSingle } = useGenerate({
    onError: (error) => alert(error),
  });

  const { exportSection } = useExport({ classroom });

  const handleGenerate = async () => {
    if (!classroom || !clubName) return;

    const activity: ClubActivity = {
      category,
      clubName,
      description: description || undefined,
    };

    setCurrentClubActivity(activity);
    setIsGenerating(true, 'club');

    const records = await generate('/api/generate/club', {
      studentCount: classroom.studentCount,
      grade: classroom.grade,
      activity,
    });

    if (records) {
      setClubRecords(records);
    }

    setIsGenerating(false);
  };

  const handleRegenerate = async (studentNumber: number) => {
    if (!classroom || !currentClubActivity) return;

    setRegeneratingStudent(studentNumber);

    const content = await regenerateSingle('/api/generate/club', {
      studentCount: classroom.studentCount,
      grade: classroom.grade,
      activity: currentClubActivity,
    }, studentNumber);

    if (content) {
      const newRecords = clubRecords.map((r) =>
        r.studentNumber === studentNumber
          ? { ...r, content, isEdited: false, charCount: content.length }
          : r
      );
      setClubRecords(newRecords);
    }

    setRegeneratingStudent(null);
  };

  const handleRegenerateAll = async () => {
    await handleGenerate();
  };

  const handleExport = () => {
    exportSection('club', '동아리활동', clubRecords, clubName);
  };

  const categoryOptions = Object.entries(CLUB_CATEGORY_INFO).map(([key, value]) => ({
    value: key,
    label: value.name,
  }));

  const currentCategoryInfo = CLUB_CATEGORY_INFO[category];

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between"
          >
            <CardTitle className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-500" />
              동아리활동
            </CardTitle>
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </CardHeader>

        {isExpanded && (
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select
                label="동아리 분류"
                value={category}
                onChange={(e) => setCategory(e.target.value as ClubActivityCategory)}
              >
                {categoryOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Select>

              <Input
                label="동아리명"
                value={clubName}
                onChange={(e) => setClubName(e.target.value)}
                placeholder="동아리명을 입력하세요"
              />
            </div>

            {currentCategoryInfo.examples.length > 0 && (
              <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                예시: {currentCategoryInfo.examples.join(', ')}
              </p>
            )}

            <Textarea
              label="활동 설명 (선택)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="동아리 활동에 대한 설명을 입력하세요"
              rows={2}
            />

            <Button
              onClick={handleGenerate}
              disabled={!classroom || isGenerating || !clubName}
              isLoading={isGenerating}
              className="w-full"
            >
              <Users className="w-4 h-4 mr-2" />
              동아리활동 기록 생성
            </Button>
          </CardContent>
        )}
      </Card>

      {clubRecords.length > 0 && (
        <RecordList
          records={clubRecords}
          title="동아리활동 기록"
          onUpdate={(studentNumber, content) => updateRecord('club', studentNumber, content)}
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
