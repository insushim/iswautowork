'use client';

import { useState } from 'react';
import { useStore } from '@/store/useStore';
import { ClubActivityCategory, ClubActivity, CreativeActivityHistoryItem } from '@/types';
import { CLUB_CATEGORY_INFO } from '@/lib/curriculum-data';
import { Card, CardHeader, CardTitle, CardContent, Button, Select, Input, Textarea } from '@/components/ui';
import { RecordList } from '@/components/RecordList';
import { useGenerate } from '@/hooks/useGenerate';
import { useExport } from '@/hooks/useExport';
import { Users, ChevronDown, ChevronUp, History, Trash2, FileSpreadsheet } from 'lucide-react';

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
    creativeHistory,
    addCreativeHistory,
    deleteCreativeHistory,
    clearCreativeHistory,
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

      // 누적 기록에 추가
      const historyItem: CreativeActivityHistoryItem = {
        id: `club-${Date.now()}`,
        activityName: clubName,
        activityType: category,
        records,
        createdAt: new Date(),
      };
      addCreativeHistory('club', historyItem);
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

      {/* 누적 기록 히스토리 */}
      {creativeHistory.club.length > 0 && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <History className="w-5 h-5 text-blue-500" />
                동아리활동 누적 기록 ({creativeHistory.club.length}개)
              </CardTitle>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  if (confirm('모든 동아리활동 누적 기록을 삭제하시겠습니까?')) {
                    clearCreativeHistory('club');
                  }
                }}
              >
                <Trash2 className="w-4 h-4 mr-1" />
                전체 삭제
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {creativeHistory.club.map((historyItem, index) => (
              <div
                key={historyItem.id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded text-sm font-medium">
                      #{index + 1}
                    </span>
                    <span className="font-medium text-gray-900 dark:text-white">
                      {historyItem.activityName}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(historyItem.createdAt).toLocaleDateString('ko-KR', {
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        exportSection('club', '동아리활동', historyItem.records, historyItem.activityName);
                      }}
                    >
                      <FileSpreadsheet className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        if (confirm('이 기록을 삭제하시겠습니까?')) {
                          deleteCreativeHistory('club', historyItem.id);
                        }
                      }}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-h-40 overflow-y-auto">
                  {historyItem.records.map((record) => (
                    <div
                      key={record.studentNumber}
                      className="bg-gray-50 dark:bg-gray-800 p-2 rounded text-sm"
                    >
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {record.studentNumber}번:
                      </span>{' '}
                      <span className="text-gray-600 dark:text-gray-400">
                        {record.content.slice(0, 50)}...
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
