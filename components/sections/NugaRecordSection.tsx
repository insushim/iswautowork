'use client';

import { useState, useMemo, useEffect } from 'react';
import { useStore } from '@/store/useStore';
import { NugaCategory, BehaviorLevel, NugaRecord } from '@/types';
import { Card, CardHeader, CardTitle, CardContent, Button } from '@/components/ui';
import { AchievementLevelGrid } from '@/components/AchievementLevelGrid';
import { CATEGORY_LABELS, CATEGORY_COLORS } from '@/utils/sentence-splitter';
import {
  FileText,
  ChevronDown,
  ChevronUp,
  Copy,
  Trash2,
  Check,
  Filter,
  RefreshCw,
  Download,
  Sparkles,
  Combine,
  Loader2,
} from 'lucide-react';

export function NugaRecordSection() {
  const {
    classroom,
    behaviorRecords,
    setBehaviorRecords,
    nugaRecords,
    addNugaRecords,
    updateNugaRecord,
    deleteNugaRecord,
    toggleNugaRecordUsed,
    clearNugaRecords,
    behaviorLevels,
    setBehaviorLevel,
    initBehaviorLevels,
    setAllBehaviorLevels,
    studentTalents,
    initStudentTalents,
  } = useStore();

  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedStudent, setSelectedStudent] = useState<number | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<NugaCategory | 'all'>('all');
  const [showUsed, setShowUsed] = useState(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isCombining, setIsCombining] = useState(false);
  const [combiningStudent, setCombiningStudent] = useState<number | null>(null);

  // 초기화
  useEffect(() => {
    if (classroom && behaviorLevels.length === 0) {
      initBehaviorLevels(classroom.studentCount);
    }
    if (classroom && studentTalents.length === 0) {
      initStudentTalents(classroom.studentCount);
    }
  }, [classroom, behaviorLevels.length, studentTalents.length, initBehaviorLevels, initStudentTalents]);

  // 누가기록 생성 (AI)
  const handleGenerate = async () => {
    if (!classroom) return;

    setIsGenerating(true);

    try {
      const response = await fetch('/api/generate/nuga', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentCount: classroom.studentCount,
          grade: classroom.grade,
          behaviorLevels,
          studentTalents,
          defaultDate: new Date().toISOString().split('T')[0],
        }),
      });

      const data = await response.json();

      if (data.error) {
        alert(data.error);
        return;
      }

      if (data.records) {
        // 기존 기록 삭제 확인
        if (nugaRecords.length > 0) {
          if (confirm('기존 누가기록을 모두 삭제하고 새로 생성하시겠습니까?')) {
            clearNugaRecords();
          } else {
            setIsGenerating(false);
            return;
          }
        }
        addNugaRecords(data.records);
      }
    } catch (error) {
      console.error('Generate error:', error);
      alert('누가기록 생성에 실패했습니다.');
    } finally {
      setIsGenerating(false);
    }
  };

  // 누가기록 → 종합의견 합치기
  const handleCombineToOpinion = async (studentNumber: number) => {
    if (!classroom) return;

    const studentRecords = nugaRecords.filter(r => r.studentNumber === studentNumber);
    if (studentRecords.length === 0) {
      alert('해당 학생의 누가기록이 없습니다.');
      return;
    }

    setCombiningStudent(studentNumber);
    setIsCombining(true);

    try {
      const response = await fetch('/api/generate/nuga', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          combineMode: true,
          grade: classroom.grade,
          studentNumber,
          sentences: studentRecords.map(r => r.sentence),
          behaviorLevel: behaviorLevels[studentNumber - 1],
        }),
      });

      const data = await response.json();

      if (data.error) {
        alert(data.error);
        return;
      }

      if (data.content) {
        // 행동특성 기록에 추가/업데이트
        const existingIndex = behaviorRecords.findIndex(r => r.studentNumber === studentNumber);
        if (existingIndex >= 0) {
          const newRecords = [...behaviorRecords];
          newRecords[existingIndex] = {
            ...newRecords[existingIndex],
            content: data.content,
            charCount: data.content.length,
            isEdited: false,
          };
          setBehaviorRecords(newRecords);
        } else {
          setBehaviorRecords([
            ...behaviorRecords,
            {
              studentNumber,
              content: data.content,
              isEdited: false,
              charCount: data.content.length,
            },
          ].sort((a, b) => a.studentNumber - b.studentNumber));
        }

        alert(`${studentNumber}번 학생의 종합의견이 생성되었습니다.\n'행동특성 및 종합의견' 탭에서 확인하세요.`);
      }
    } catch (error) {
      console.error('Combine error:', error);
      alert('종합의견 생성에 실패했습니다.');
    } finally {
      setIsCombining(false);
      setCombiningStudent(null);
    }
  };

  // 전체 학생 종합의견 생성
  const handleCombineAll = async () => {
    if (!classroom) return;

    const studentNumbers = Array.from(new Set(nugaRecords.map(r => r.studentNumber))).sort((a, b) => a - b);
    if (studentNumbers.length === 0) {
      alert('누가기록이 없습니다.');
      return;
    }

    if (!confirm(`${studentNumbers.length}명 학생의 종합의견을 생성하시겠습니까?`)) {
      return;
    }

    setIsCombining(true);

    for (const studentNumber of studentNumbers) {
      setCombiningStudent(studentNumber);
      await handleCombineToOpinion(studentNumber);
    }

    setIsCombining(false);
    setCombiningStudent(null);
    alert('모든 학생의 종합의견이 생성되었습니다.');
  };

  // 필터링된 기록
  const filteredRecords = useMemo(() => {
    return nugaRecords.filter((record) => {
      if (selectedStudent !== 'all' && record.studentNumber !== selectedStudent)
        return false;
      if (selectedCategory !== 'all' && record.category !== selectedCategory)
        return false;
      if (!showUsed && record.isUsed) return false;
      return true;
    });
  }, [nugaRecords, selectedStudent, selectedCategory, showUsed]);

  // 학생별로 그룹화
  const groupedByStudent = useMemo(() => {
    const grouped: Record<number, typeof filteredRecords> = {};
    filteredRecords.forEach((record) => {
      if (!grouped[record.studentNumber]) {
        grouped[record.studentNumber] = [];
      }
      grouped[record.studentNumber].push(record);
    });
    return grouped;
  }, [filteredRecords]);

  // 복사 기능
  const handleCopy = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // 전체 복사 (선택한 학생의 미사용 기록만)
  const handleCopyAll = async () => {
    const textToCopy = filteredRecords
      .filter((r) => !r.isUsed)
      .map((r) => `[${r.studentNumber}번] ${r.sentence}`)
      .join('\n');
    await navigator.clipboard.writeText(textToCopy);
    alert('미사용 기록이 복사되었습니다.');
  };

  // 엑셀 내보내기
  const handleExport = () => {
    const headers = ['학생번호', '문장', '날짜', '카테고리', '사용여부'];
    const rows = filteredRecords.map((r) => [
      r.studentNumber.toString(),
      r.sentence,
      r.date,
      CATEGORY_LABELS[r.category],
      r.isUsed ? 'O' : '',
    ]);

    const csvContent = [headers, ...rows]
      .map((row) => row.map((cell) => `"${cell}"`).join(','))
      .join('\n');

    const blob = new Blob(['\uFEFF' + csvContent], {
      type: 'text/csv;charset=utf-8;',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `누가기록_${classroom?.grade}학년${classroom?.classNumber}반.csv`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const categories: (NugaCategory | 'all')[] = [
    'all',
    'school_life',
    'learning',
    'social',
    'character',
    'talent',
    'other',
  ];

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between"
          >
            <CardTitle className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-500" />
              누가기록 생성
              {nugaRecords.length > 0 && (
                <span className="text-sm font-normal text-gray-500">
                  ({nugaRecords.length}개)
                </span>
              )}
            </CardTitle>
            {isExpanded ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </button>
        </CardHeader>

        {isExpanded && classroom && (
          <CardContent className="space-y-6">
            {/* 안내 */}
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg">
              <h5 className="text-sm font-medium text-emerald-700 dark:text-emerald-300 mb-2">
                사용 방법
              </h5>
              <ol className="text-sm text-emerald-600 dark:text-emerald-400 space-y-1 list-decimal list-inside">
                <li>학생별 행동 수준을 설정합니다</li>
                <li>"누가기록 생성" 버튼으로 개별 문장을 생성합니다</li>
                <li>필요시 문장을 수정하거나 삭제합니다</li>
                <li>"종합의견 생성" 버튼으로 문장들을 합쳐서 행동특성 종합의견을 만듭니다</li>
              </ol>
            </div>

            {/* 행동 수준 설정 */}
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

            {/* 생성 버튼 */}
            <div className="flex flex-wrap items-center gap-3">
              <Button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                {isGenerating ? (
                  <Loader2 className="w-4 h-4 mr-1 animate-spin" />
                ) : (
                  <Sparkles className="w-4 h-4 mr-1" />
                )}
                {isGenerating ? '생성 중...' : '누가기록 생성'}
              </Button>
            </div>

            {/* 필터 및 종합의견 생성 */}
            {nugaRecords.length > 0 && (
              <div className="flex flex-wrap items-center gap-3 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <Filter className="w-4 h-4 text-gray-500" />

                {/* 학생 필터 */}
                <select
                  value={selectedStudent}
                  onChange={(e) =>
                    setSelectedStudent(
                      e.target.value === 'all' ? 'all' : Number(e.target.value)
                    )
                  }
                  className="text-sm border border-gray-300 dark:border-gray-600 rounded px-2 py-1 dark:bg-gray-700"
                >
                  <option value="all">전체 학생</option>
                  {Array.from({ length: classroom.studentCount }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}번
                    </option>
                  ))}
                </select>

                {/* 카테고리 필터 */}
                <select
                  value={selectedCategory}
                  onChange={(e) =>
                    setSelectedCategory(e.target.value as NugaCategory | 'all')
                  }
                  className="text-sm border border-gray-300 dark:border-gray-600 rounded px-2 py-1 dark:bg-gray-700"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat === 'all' ? '전체 카테고리' : CATEGORY_LABELS[cat]}
                    </option>
                  ))}
                </select>

                {/* 사용 여부 필터 */}
                <label className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                  <input
                    type="checkbox"
                    checked={showUsed}
                    onChange={(e) => setShowUsed(e.target.checked)}
                    className="rounded"
                  />
                  사용한 기록 포함
                </label>

                {/* 액션 버튼 */}
                <div className="ml-auto flex gap-2">
                  <Button
                    size="sm"
                    onClick={handleCombineAll}
                    disabled={isCombining}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    {isCombining ? (
                      <Loader2 className="w-4 h-4 mr-1 animate-spin" />
                    ) : (
                      <Combine className="w-4 h-4 mr-1" />
                    )}
                    전체 종합의견 생성
                  </Button>
                  <Button size="sm" variant="secondary" onClick={handleCopyAll}>
                    <Copy className="w-4 h-4 mr-1" />
                    미사용 전체복사
                  </Button>
                  <Button size="sm" variant="secondary" onClick={handleExport}>
                    <Download className="w-4 h-4 mr-1" />
                    CSV 내보내기
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        )}
      </Card>

      {/* 누가기록 목록 */}
      {nugaRecords.length > 0 && isExpanded && (
        <Card>
          <CardContent className="p-4">
            <div className="space-y-6">
              {Object.entries(groupedByStudent)
                .sort(([a], [b]) => Number(a) - Number(b))
                .map(([studentNum, records]) => (
                  <div key={studentNum} className="space-y-2">
                    {/* 학생 헤더 */}
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-gray-700 dark:text-gray-300">
                        {studentNum}번 학생
                        <span className="ml-2 text-sm font-normal text-gray-500">
                          ({records.length}개 문장)
                        </span>
                      </h4>
                      <Button
                        size="sm"
                        onClick={() => handleCombineToOpinion(Number(studentNum))}
                        disabled={isCombining}
                        className="bg-blue-500 hover:bg-blue-600 text-white"
                      >
                        {combiningStudent === Number(studentNum) ? (
                          <Loader2 className="w-4 h-4 mr-1 animate-spin" />
                        ) : (
                          <Combine className="w-4 h-4 mr-1" />
                        )}
                        종합의견 생성
                      </Button>
                    </div>

                    {/* 문장 목록 */}
                    <div className="space-y-2 pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                      {records.map((record) => (
                        <div
                          key={record.id}
                          className={`p-3 rounded-lg border ${
                            record.isUsed
                              ? 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 opacity-60'
                              : 'bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600'
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            {/* 사용 체크박스 */}
                            <button
                              onClick={() => toggleNugaRecordUsed(record.id)}
                              className={`mt-1 w-5 h-5 rounded border flex items-center justify-center flex-shrink-0 ${
                                record.isUsed
                                  ? 'bg-emerald-500 border-emerald-500 text-white'
                                  : 'border-gray-300 dark:border-gray-600'
                              }`}
                            >
                              {record.isUsed && <Check className="w-3 h-3" />}
                            </button>

                            {/* 문장 내용 */}
                            <div className="flex-1 min-w-0">
                              <p
                                className={`text-sm ${
                                  record.isUsed
                                    ? 'text-gray-500 line-through'
                                    : 'text-gray-700 dark:text-gray-300'
                                }`}
                              >
                                {record.sentence}
                              </p>
                              <div className="flex items-center gap-2 mt-2">
                                <span
                                  className={`text-xs px-2 py-0.5 rounded ${
                                    CATEGORY_COLORS[record.category]
                                  }`}
                                >
                                  {CATEGORY_LABELS[record.category]}
                                </span>
                                <span className="text-xs text-gray-400">
                                  {record.date}
                                </span>
                                <span className="text-xs text-gray-400">
                                  {record.sentence.length}자
                                </span>
                              </div>
                            </div>

                            {/* 액션 버튼 */}
                            <div className="flex gap-1 flex-shrink-0">
                              <button
                                onClick={() =>
                                  handleCopy(record.sentence, record.id)
                                }
                                className="p-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                                title="복사"
                              >
                                {copiedId === record.id ? (
                                  <Check className="w-4 h-4 text-emerald-500" />
                                ) : (
                                  <Copy className="w-4 h-4" />
                                )}
                              </button>
                              <button
                                onClick={() => deleteNugaRecord(record.id)}
                                className="p-1.5 text-gray-400 hover:text-red-500"
                                title="삭제"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>

            {filteredRecords.length === 0 && (
              <div className="text-center text-gray-500 py-8">
                {nugaRecords.length === 0
                  ? '누가기록을 생성해주세요.'
                  : '필터 조건에 맞는 기록이 없습니다.'}
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
}
