'use client';

import { useState, useEffect } from 'react';
import { useStore } from '@/store/useStore';
import { Subject, SubjectAchievementLevel, Semester } from '@/types';
import { getSubjectsByGrade } from '@/lib/curriculum-data';
import { getAchievementStandardsBySubject, getSubjectNameFromCode } from '@/lib/achievement-standards';
import { Card, CardHeader, CardTitle, CardContent, Button, Select } from '@/components/ui';
import { RecordList } from '@/components/RecordList';
import { AchievementLevelGrid } from '@/components/AchievementLevelGrid';
import { useGenerate } from '@/hooks/useGenerate';
import { useExport } from '@/hooks/useExport';
import { BookOpen, ChevronDown, ChevronUp, Info } from 'lucide-react';

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
    isGenerating,
    setIsGenerating,
  } = useStore();

  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [regeneratingStudent, setRegeneratingStudent] = useState<number | null>(null);
  const [showStandards, setShowStandards] = useState(false);

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

  const handleGenerate = async () => {
    if (!classroom || !selectedSubject) return;

    const semester = subjectSemesters[selectedSubject.code] || 1;
    const levels = subjectAchievementLevels[selectedSubject.code] || [];
    const subjectName = getSubjectNameFromCode(selectedSubject.code);
    const standards = getAchievementStandardsBySubject(classroom.grade, subjectName, semester);

    setIsGenerating(true, 'subject');

    const records = await generate('/api/generate/subject', {
      studentCount: classroom.studentCount,
      grade: classroom.grade,
      subjectCode: selectedSubject.code,
      subjectName,
      achievementLevels: levels,
      semester,
      achievementStandards: standards,
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
    const standards = getAchievementStandardsBySubject(classroom.grade, subjectName, semester);

    setRegeneratingStudent(studentNumber);

    const content = await regenerateSingle('/api/generate/subject', {
      studentCount: classroom.studentCount,
      grade: classroom.grade,
      subjectCode: selectedSubject.code,
      subjectName,
      achievementLevels: levels,
      semester,
      achievementStandards: standards,
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
    ? getAchievementStandardsBySubject(classroom.grade, getSubjectNameFromCode(selectedSubject.code), currentSemester)
    : [];

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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            </div>

            {selectedSubject && classroom && (
              <>
                {/* 성취기준 미리보기 */}
                <div className="border border-blue-200 dark:border-blue-800 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setShowStandards(!showStandards)}
                    className="w-full flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
                  >
                    <div className="flex items-center gap-2 text-sm font-medium text-blue-700 dark:text-blue-300">
                      <Info className="w-4 h-4" />
                      <span>적용되는 성취기준 ({currentStandards.length}개)</span>
                    </div>
                    {showStandards ? <ChevronUp className="w-4 h-4 text-blue-600" /> : <ChevronDown className="w-4 h-4 text-blue-600" />}
                  </button>
                  {showStandards && (
                    <div className="p-3 bg-white dark:bg-gray-800 max-h-64 overflow-y-auto">
                      {currentStandards.length > 0 ? (
                        <ul className="space-y-2">
                          {currentStandards.map((std, idx) => (
                            <li key={idx} className="text-sm text-gray-700 dark:text-gray-300 flex gap-2">
                              <span className="text-blue-600 dark:text-blue-400 font-mono text-xs whitespace-nowrap">{std.code}</span>
                              <span>{std.content}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-sm text-gray-500">해당 학년/학기의 성취기준이 없습니다.</p>
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
