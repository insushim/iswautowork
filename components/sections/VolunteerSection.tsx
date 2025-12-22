'use client';

import { useState } from 'react';
import { useStore } from '@/store/useStore';
import { VolunteerActivityType, VolunteerActivity, CreativeActivityHistoryItem } from '@/types';
import { VOLUNTEER_TYPE_INFO } from '@/lib/curriculum-data';
import { Card, CardHeader, CardTitle, CardContent, Button, Select, Input, Textarea } from '@/components/ui';
import { RecordList } from '@/components/RecordList';
import { useGenerate } from '@/hooks/useGenerate';
import { useExport } from '@/hooks/useExport';
import { Heart, ChevronDown, ChevronUp, History, Trash2, FileSpreadsheet } from 'lucide-react';

export function VolunteerSection() {
  const {
    classroom,
    volunteerRecords,
    setVolunteerRecords,
    updateRecord,
    currentVolunteerActivity,
    setCurrentVolunteerActivity,
    isGenerating,
    setIsGenerating,
    creativeHistory,
    addCreativeHistory,
    deleteCreativeHistory,
    clearCreativeHistory,
  } = useStore();

  const [isExpanded, setIsExpanded] = useState(true);
  const [activityType, setActivityType] = useState<VolunteerActivityType>('school_service');
  const [activityName, setActivityName] = useState('');
  const [description, setDescription] = useState('');
  const [regeneratingStudent, setRegeneratingStudent] = useState<number | null>(null);

  const { generate, regenerateSingle } = useGenerate({
    onError: (error) => alert(error),
  });

  const { exportSection } = useExport({ classroom });

  const handleGenerate = async () => {
    if (!classroom || !activityName) return;

    const activity: VolunteerActivity = {
      type: activityType,
      activityName,
      description: description || undefined,
    };

    setCurrentVolunteerActivity(activity);
    setIsGenerating(true, 'volunteer');

    const records = await generate('/api/generate/volunteer', {
      studentCount: classroom.studentCount,
      grade: classroom.grade,
      activity,
    });

    if (records) {
      setVolunteerRecords(records);

      // 누적 기록에 추가
      const historyItem: CreativeActivityHistoryItem = {
        id: `volunteer-${Date.now()}`,
        activityName,
        activityType,
        records,
        createdAt: new Date(),
      };
      addCreativeHistory('volunteer', historyItem);
    }

    setIsGenerating(false);
  };

  const handleRegenerate = async (studentNumber: number) => {
    if (!classroom || !currentVolunteerActivity) return;

    setRegeneratingStudent(studentNumber);

    const content = await regenerateSingle('/api/generate/volunteer', {
      studentCount: classroom.studentCount,
      grade: classroom.grade,
      activity: currentVolunteerActivity,
    }, studentNumber);

    if (content) {
      const newRecords = volunteerRecords.map((r) =>
        r.studentNumber === studentNumber
          ? { ...r, content, isEdited: false, charCount: content.length }
          : r
      );
      setVolunteerRecords(newRecords);
    }

    setRegeneratingStudent(null);
  };

  const handleRegenerateAll = async () => {
    await handleGenerate();
  };

  const handleExport = () => {
    exportSection('volunteer', '봉사활동', volunteerRecords, activityName);
  };

  const typeOptions = Object.entries(VOLUNTEER_TYPE_INFO).map(([key, value]) => ({
    value: key,
    label: value.name,
  }));

  const currentTypeInfo = VOLUNTEER_TYPE_INFO[activityType];

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between"
          >
            <CardTitle className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-pink-500" />
              봉사활동
            </CardTitle>
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </CardHeader>

        {isExpanded && (
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select
                label="봉사활동 유형"
                value={activityType}
                onChange={(e) => setActivityType(e.target.value as VolunteerActivityType)}
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

            {currentTypeInfo.examples.length > 0 && (
              <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded-lg">
                예시: {currentTypeInfo.examples.join(', ')}
              </p>
            )}

            <Textarea
              label="활동 설명 (선택)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="봉사활동에 대한 설명을 입력하세요"
              rows={2}
            />

            <Button
              onClick={handleGenerate}
              disabled={!classroom || isGenerating || !activityName}
              isLoading={isGenerating}
              className="w-full"
            >
              <Heart className="w-4 h-4 mr-2" />
              봉사활동 기록 생성
            </Button>
          </CardContent>
        )}
      </Card>

      {volunteerRecords.length > 0 && (
        <RecordList
          records={volunteerRecords}
          title="봉사활동 기록"
          onUpdate={(studentNumber, content) => updateRecord('volunteer', studentNumber, content)}
          onRegenerate={handleRegenerate}
          onRegenerateAll={handleRegenerateAll}
          onExport={handleExport}
          isGenerating={isGenerating}
          regeneratingStudent={regeneratingStudent}
        />
      )}

      {/* 누적 기록 히스토리 */}
      {creativeHistory.volunteer.length > 0 && (
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <History className="w-5 h-5 text-pink-500" />
                봉사활동 누적 기록 ({creativeHistory.volunteer.length}개)
              </CardTitle>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  if (confirm('모든 봉사활동 누적 기록을 삭제하시겠습니까?')) {
                    clearCreativeHistory('volunteer');
                  }
                }}
              >
                <Trash2 className="w-4 h-4 mr-1" />
                전체 삭제
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {creativeHistory.volunteer.map((historyItem, index) => (
              <div
                key={historyItem.id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300 px-2 py-1 rounded text-sm font-medium">
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
                        exportSection('volunteer', '봉사활동', historyItem.records, historyItem.activityName);
                      }}
                    >
                      <FileSpreadsheet className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        if (confirm('이 기록을 삭제하시겠습니까?')) {
                          deleteCreativeHistory('volunteer', historyItem.id);
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
