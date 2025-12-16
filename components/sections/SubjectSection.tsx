'use client';

import { useState, useEffect } from 'react';
import { useStore } from '@/store/useStore';
import { Subject, SubjectAchievementLevel, Semester, AchievementStandard } from '@/types';
import { getSubjectsByGrade } from '@/lib/curriculum-data';
import { getAchievementStandardsBySubject, getSubjectNameFromCode } from '@/lib/achievement-standards';
import { Card, CardHeader, CardTitle, CardContent, Button, Select } from '@/components/ui';
import { RecordList } from '@/components/RecordList';
import { AchievementLevelGrid } from '@/components/AchievementLevelGrid';
import { useGenerate } from '@/hooks/useGenerate';
import { useExport } from '@/hooks/useExport';
import { BookOpen, ChevronDown, ChevronUp, Info, Check, X, RotateCcw, Plus } from 'lucide-react';

export function SubjectSection() {
  const {
    classroom,
    subjectDevelopments,
    setSubjectDevelopments,
    updateSubjectRecord,
    subjectAchievementLevels,
    setSubjectAchievementLevel,
    initSubjectAchievementLevels,
    setAllSubjectAchievementLevels,
    subjectSemesters,
    setSubjectSemester,
    subjectSentenceCounts,
    setSubjectSentenceCount,
    selectedStandardCodes,
    toggleStandardCode,
    initSelectedStandardCodes,
    setSelectedStandardCodes,
    isGenerating,
    setIsGenerating,
  } = useStore();

  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [regeneratingStudent, setRegeneratingStudent] = useState<number | null>(null);
  const [showStandards, setShowStandards] = useState(false);
  const [showAddStandards, setShowAddStandards] = useState(false);

  const { generate, regenerateSingle } = useGenerate({
    onError: (error) => alert(error),
  });

  const { exportSection } = useExport({ classroom });

  const subjects = classroom ? getSubjectsByGrade(classroom.grade) : [];

  useEffect(() => {
    if (subjects.length > 0 && !selectedSubject) {
      setSelectedSubject(subjects[0]);
    }
  }, [subjects, selectedSubject]);

  useEffect(() => {
    if (selectedSubject && classroom) {
      if (!subjectAchievementLevels[selectedSubject.code]) {
        initSubjectAchievementLevels(selectedSubject.code, classroom.studentCount);
      }
      if (!subjectSemesters[selectedSubject.code]) {
        setSubjectSemester(selectedSubject.code, 1);
      }
    }
  }, [selectedSubject, classroom, subjectAchievementLevels, subjectSemesters, initSubjectAchievementLevels, setSubjectSemester]);

  // 선택된 성취기준에서 랜덤 선택 (문장 수 - 1개 = 성취기준 기반 문장 수)
  const getRandomFromSelected = (standards: AchievementStandard[], subjectName: string, sentenceCount: number = 4) => {
    // 성취기준 기반 문장 수 = 총 문장 수 - 공통 문장 1개
    const selectCount = Math.max(1, sentenceCount - 1);
    if (standards.length <= selectCount) return standards;

    const shuffled = [...standards];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, selectCount);
  };

  const handleGenerate = async () => {
    if (!classroom || !selectedSubject) return;

    const semester = subjectSemesters[selectedSubject.code] || 1;
    const levels = subjectAchievementLevels[selectedSubject.code] || [];
    const subjectName = getSubjectNameFromCode(selectedSubject.code);
    const sentenceCount = subjectSentenceCounts[selectedSubject.code] || 4; // 기본값 4

    // 사용자가 선택한 성취기준에서만 랜덤 선택 (다른 학기 추가 성취기준 포함)
    const key = `${selectedSubject.code}_${semester}`;
    const selectedCodes = selectedStandardCodes[key] || [];
    const allGradeStds = getAchievementStandardsBySubject(classroom.grade, subjectName);
    const filteredStandards = allGradeStds.filter(s => selectedCodes.includes(s.code));
    const standards = getRandomFromSelected(filteredStandards, subjectName, sentenceCount);

    if (standards.length === 0) {
      alert('선택된 성취기준이 없습니다. 성취기준을 먼저 선택해주세요.');
      return;
    }

    setIsGenerating(true, 'subject');

    const records = await generate('/api/generate/subject', {
      studentCount: classroom.studentCount,
      grade: classroom.grade,
      subjectCode: selectedSubject.code,
      subjectName,
      achievementLevels: levels,
      semester,
      achievementStandards: standards,
      sentenceCount,
    });

    if (records) {
      setSubjectDevelopments(selectedSubject.code, records);
    }

    setIsGenerating(false);
  };

  const handleRegenerate = async (studentNumber: number) => {
    if (!classroom || !selectedSubject) return;

    const semester = subjectSemesters[selectedSubject.code] || 1;
    const levels = subjectAchievementLevels[selectedSubject.code] || [];
    const subjectName = getSubjectNameFromCode(selectedSubject.code);
    const sentenceCount = subjectSentenceCounts[selectedSubject.code] || 4;

    // 사용자가 선택한 성취기준에서만 랜덤 선택 (다른 학기 추가 성취기준 포함)
    const key = `${selectedSubject.code}_${semester}`;
    const selectedCodes = selectedStandardCodes[key] || [];
    const allGradeStds = getAchievementStandardsBySubject(classroom.grade, subjectName);
    const filteredStandards = allGradeStds.filter(s => selectedCodes.includes(s.code));
    const standards = getRandomFromSelected(filteredStandards, subjectName, sentenceCount);

    setRegeneratingStudent(studentNumber);

    const content = await regenerateSingle('/api/generate/subject', {
      studentCount: classroom.studentCount,
      grade: classroom.grade,
      subjectCode: selectedSubject.code,
      subjectName,
      achievementLevels: levels,
      semester,
      achievementStandards: standards,
      sentenceCount,
    }, studentNumber);

    if (content) {
      const currentRecords = subjectDevelopments[selectedSubject.code] || [];
      const newRecords = currentRecords.map((r) =>
        r.studentNumber === studentNumber
          ? { ...r, content, isEdited: false, charCount: content.length }
          : r
      );
      setSubjectDevelopments(selectedSubject.code, newRecords);
    }

    setRegeneratingStudent(null);
  };

  const handleExport = () => {
    if (!selectedSubject) return;
    const records = subjectDevelopments[selectedSubject.code] || [];
    const subjectName = getSubjectNameFromCode(selectedSubject.code);
    exportSection('subject', subjectName, records);
  };

  const currentRecords = selectedSubject ? subjectDevelopments[selectedSubject.code] || [] : [];
  const currentLevels = selectedSubject ? subjectAchievementLevels[selectedSubject.code] || [] : [];
  const currentSemester = selectedSubject ? subjectSemesters[selectedSubject.code] || 1 : 1;

  // 현재 선택된 교과/학기의 성취기준 가져오기
  const currentStandards = selectedSubject && classroom
    ? getAchievementStandardsBySubject(classroom.grade, getSubjectNameFromCode(selectedSubject.code), currentSemester as 1 | 2)
    : [];

  // 해당 학년의 모든 성취기준 가져오기 (1학기 + 2학기)
  const allGradeStandards = selectedSubject && classroom
    ? getAchievementStandardsBySubject(classroom.grade, getSubjectNameFromCode(selectedSubject.code))
    : [];

  // 다른 학기 성취기준 (현재 학기에 없는 것들)
  const otherSemesterStandards = allGradeStandards.filter(
    std => std.semester !== currentSemester
  );

  // 현재 선택된 성취기준 코드 가져오기
  const standardKey = selectedSubject ? `${selectedSubject.code}_${currentSemester}` : '';
  const currentSelectedCodes = selectedStandardCodes[standardKey] || [];

  // 선택된 성취기준만 필터링
  const activeStandards = currentStandards.filter(std => currentSelectedCodes.includes(std.code));

  // 추가된 다른 학기 성취기준 (currentSelectedCodes에 있지만 currentStandards에 없는 것)
  const addedOtherStandards = allGradeStandards.filter(
    std => currentSelectedCodes.includes(std.code) && !currentStandards.find(cs => cs.code === std.code)
  );

  // 성취기준 초기화 (처음 로드 시 전체 선택)
  useEffect(() => {
    if (selectedSubject && classroom && currentStandards.length > 0) {
      const key = `${selectedSubject.code}_${currentSemester}`;
      if (!selectedStandardCodes[key]) {
        initSelectedStandardCodes(selectedSubject.code, currentSemester as 1 | 2, currentStandards.map(s => s.code));
      }
    }
  }, [selectedSubject, classroom, currentSemester, currentStandards.length]);

  // 성취기준 토글 핸들러
  const handleToggleStandard = (code: string) => {
    if (selectedSubject) {
      toggleStandardCode(selectedSubject.code, currentSemester as 1 | 2, code);
    }
  };

  // 전체 선택/해제
  const handleSelectAll = () => {
    if (selectedSubject) {
      setSelectedStandardCodes(selectedSubject.code, currentSemester as 1 | 2, currentStandards.map(s => s.code));
    }
  };

  const handleDeselectAll = () => {
    if (selectedSubject) {
      setSelectedStandardCodes(selectedSubject.code, currentSemester as 1 | 2, []);
    }
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
              <BookOpen className="w-5 h-5 text-orange-500" />
              교과별 발달사항 (세부능력 및 특기사항)
            </CardTitle>
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </CardHeader>

        {isExpanded && (
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Select
                label="교과 선택"
                value={selectedSubject?.code || ''}
                onChange={(e) => {
                  const subject = subjects.find(s => s.code === e.target.value);
                  setSelectedSubject(subject || null);
                }}
              >
                {subjects.map((subject) => (
                  <option key={subject.code} value={subject.code}>
                    {subject.name}
                  </option>
                ))}
              </Select>

              <Select
                label="학기 선택"
                value={currentSemester.toString()}
                onChange={(e) => {
                  if (selectedSubject) {
                    setSubjectSemester(selectedSubject.code, parseInt(e.target.value) as Semester);
                  }
                }}
              >
                <option value="1">1학기</option>
                <option value="2">2학기</option>
              </Select>

              <Select
                label="생성 문장 수"
                value={(selectedSubject ? subjectSentenceCounts[selectedSubject.code] || 4 : 4).toString()}
                onChange={(e) => {
                  if (selectedSubject) {
                    setSubjectSentenceCount(selectedSubject.code, parseInt(e.target.value));
                  }
                }}
              >
                <option value="2">2문장 (공통1 + 성취1)</option>
                <option value="3">3문장 (공통1 + 성취2)</option>
                <option value="4">4문장 (공통1 + 성취3) 기본</option>
                <option value="5">5문장 (공통1 + 성취4)</option>
                <option value="6">6문장 (공통1 + 성취5)</option>
              </Select>
            </div>

            {selectedSubject && classroom && (
              <>
                {/* 성취기준 미리보기 (넣기/빼기 기능 포함) */}
                <div className="border border-blue-200 dark:border-blue-800 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setShowStandards(!showStandards)}
                    className="w-full flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-sm font-medium text-blue-700 dark:text-blue-300">
                      <Info className="w-4 h-4" />
                      <span>
                        적용되는 성취기준 ({currentSelectedCodes.length}개 선택됨)
                        {addedOtherStandards.length > 0 && (
                          <span className="text-green-600 dark:text-green-400 ml-1">
                            (+{addedOtherStandards.length} 다른학기)
                          </span>
                        )}
                      </span>
                    </div>
                    {showStandards ? <ChevronUp className="w-4 h-4 text-blue-600" /> : <ChevronDown className="w-4 h-4 text-blue-600" />}
                  </button>
                  {showStandards && (
                    <div className="p-3 bg-white dark:bg-gray-800">
                      {/* 전체 선택/해제 버튼 */}
                      <div className="flex gap-2 mb-3 pb-3 border-b border-gray-200 dark:border-gray-700">
                        <button
                          onClick={handleSelectAll}
                          className="flex items-center gap-1 px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 rounded hover:bg-blue-200 dark:hover:bg-blue-900/70 transition-colors"
                        >
                          <Check className="w-3 h-3" />
                          전체 선택
                        </button>
                        <button
                          onClick={handleDeselectAll}
                          className="flex items-center gap-1 px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                        >
                          <X className="w-3 h-3" />
                          전체 해제
                        </button>
                        <span className="ml-auto text-xs text-gray-500 dark:text-gray-400 flex items-center">
                          클릭하여 성취기준을 선택/해제하세요
                        </span>
                      </div>

                      {/* 성취기준 목록 */}
                      <div className="max-h-64 overflow-y-auto">
                        {currentStandards.length > 0 ? (
                          <ul className="space-y-1">
                            {currentStandards.map((std) => {
                              const isSelected = currentSelectedCodes.includes(std.code);
                              return (
                                <li
                                  key={std.code}
                                  onClick={() => handleToggleStandard(std.code)}
                                  className={`text-sm flex gap-2 p-2 rounded cursor-pointer transition-all ${
                                    isSelected
                                      ? 'bg-blue-50 dark:bg-blue-900/30 text-gray-700 dark:text-gray-300'
                                      : 'bg-gray-50 dark:bg-gray-700/50 text-gray-400 dark:text-gray-500 line-through'
                                  } hover:bg-blue-100 dark:hover:bg-blue-900/50`}
                                >
                                  <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                                    {isSelected ? (
                                      <Check className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                                    ) : (
                                      <X className="w-4 h-4 text-gray-400" />
                                    )}
                                  </span>
                                  <span className={`font-mono text-xs whitespace-nowrap ${
                                    isSelected ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'
                                  }`}>
                                    {std.code}
                                  </span>
                                  <span className="flex-1">{std.content}</span>
                                </li>
                              );
                            })}
                          </ul>
                        ) : (
                          <p className="text-sm text-gray-500">해당 학년/학기의 성취기준이 없습니다.</p>
                        )}
                      </div>

                      {/* 추가된 다른 학기 성취기준 */}
                      {addedOtherStandards.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-green-200 dark:border-green-800">
                          <p className="text-xs text-green-600 dark:text-green-400 mb-2 font-medium">
                            📌 추가된 다른 학기 성취기준 ({addedOtherStandards.length}개)
                          </p>
                          <ul className="space-y-1">
                            {addedOtherStandards.map((std) => (
                              <li
                                key={std.code}
                                onClick={() => handleToggleStandard(std.code)}
                                className="text-sm flex gap-2 p-2 rounded cursor-pointer transition-all bg-green-50 dark:bg-green-900/30 text-gray-700 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900/50"
                              >
                                <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                                  <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                                </span>
                                <span className="font-mono text-xs whitespace-nowrap text-green-600 dark:text-green-400">
                                  {std.code}
                                </span>
                                <span className="flex-1">{std.content}</span>
                                <span className="text-xs text-green-500 dark:text-green-400">
                                  ({std.semester}학기)
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* 다른 학기 성취기준 추가 버튼 */}
                      {otherSemesterStandards.length > 0 && (
                        <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                          <button
                            onClick={() => setShowAddStandards(!showAddStandards)}
                            className="flex items-center gap-1 text-xs text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300"
                          >
                            <Plus className="w-3 h-3" />
                            다른 학기 성취기준 추가하기 ({otherSemesterStandards.filter(s => !currentSelectedCodes.includes(s.code)).length}개 추가 가능)
                            {showAddStandards ? <ChevronUp className="w-3 h-3 ml-1" /> : <ChevronDown className="w-3 h-3 ml-1" />}
                          </button>

                          {showAddStandards && (
                            <div className="mt-2 max-h-48 overflow-y-auto">
                              <ul className="space-y-1">
                                {otherSemesterStandards
                                  .filter(std => !currentSelectedCodes.includes(std.code))
                                  .map((std) => (
                                    <li
                                      key={std.code}
                                      onClick={() => handleToggleStandard(std.code)}
                                      className="text-sm flex gap-2 p-2 rounded cursor-pointer transition-all bg-purple-50 dark:bg-purple-900/20 text-gray-600 dark:text-gray-400 hover:bg-purple-100 dark:hover:bg-purple-900/40"
                                    >
                                      <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center">
                                        <Plus className="w-4 h-4 text-purple-500 dark:text-purple-400" />
                                      </span>
                                      <span className="font-mono text-xs whitespace-nowrap text-purple-600 dark:text-purple-400">
                                        {std.code}
                                      </span>
                                      <span className="flex-1">{std.content}</span>
                                      <span className="text-xs text-purple-500 dark:text-purple-400">
                                        ({std.semester}학기)
                                      </span>
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}

                      {/* 안내 메시지 */}
                      {currentSelectedCodes.length === 0 && currentStandards.length > 0 && (
                        <div className="mt-3 p-2 bg-yellow-50 dark:bg-yellow-900/30 rounded text-xs text-yellow-700 dark:text-yellow-300">
                          최소 1개 이상의 성취기준을 선택해주세요.
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div>
                  <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                    학생별 성취 수준 설정 (5단계)
                  </h4>
                  <AchievementLevelGrid
                    type="subject"
                    levels={currentLevels}
                    onLevelChange={(studentNumber, level) =>
                      setSubjectAchievementLevel(selectedSubject.code, studentNumber, level as SubjectAchievementLevel)
                    }
                    onSetAll={(level) => setAllSubjectAchievementLevels(selectedSubject.code, level as SubjectAchievementLevel)}
                    studentCount={classroom.studentCount}
                  />
                </div>

                <Button
                  onClick={handleGenerate}
                  disabled={!classroom || isGenerating}
                  isLoading={isGenerating}
                  className="w-full"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  {selectedSubject.name} 세부능력 및 특기사항 생성
                </Button>
              </>
            )}
          </CardContent>
        )}
      </Card>

      {currentRecords.length > 0 && selectedSubject && (
        <RecordList
          records={currentRecords}
          title={`${selectedSubject.name} 세부능력 및 특기사항`}
          onUpdate={(studentNumber, content) =>
            updateSubjectRecord(selectedSubject.code, studentNumber, content)
          }
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
