'use client';

import { useState, useEffect } from 'react';
import { useStore } from '@/store/useStore';
import { Subject, SubjectAchievementLevel, Publisher, Semester } from '@/types';
import { getSubjectsByGrade } from '@/lib/curriculum-data';
import { getPublishersForSubject, isNationalSubject, PUBLISHERS } from '@/lib/publishers';
import { getAchievementStandardsBySubject, getSubjectNameFromCode } from '@/lib/achievement-standards';
import { Card, CardHeader, CardTitle, CardContent, Button, Select } from '@/components/ui';
import { RecordList } from '@/components/RecordList';
import { AchievementLevelGrid } from '@/components/AchievementLevelGrid';
import { useGenerate } from '@/hooks/useGenerate';
import { useExport } from '@/hooks/useExport';
import { BookOpen, ChevronDown, ChevronUp } from 'lucide-react';

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
    subjectPublishers,
    setSubjectPublisher,
    subjectSemesters,
    setSubjectSemester,
    isGenerating,
    setIsGenerating,
  } = useStore();

  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [regeneratingStudent, setRegeneratingStudent] = useState<number | null>(null);

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
      if (!subjectPublishers[selectedSubject.code]) {
        const publishers = getPublishersForSubject(selectedSubject.code);
        setSubjectPublisher(selectedSubject.code, publishers[0]);
      }
      if (!subjectSemesters[selectedSubject.code]) {
        setSubjectSemester(selectedSubject.code, 1);
      }
    }
  }, [selectedSubject, classroom, subjectAchievementLevels, subjectPublishers, subjectSemesters, initSubjectAchievementLevels, setSubjectPublisher, setSubjectSemester]);

  const handleGenerate = async () => {
    if (!classroom || !selectedSubject) return;

    const publisher = subjectPublishers[selectedSubject.code] || 'national';
    const semester = subjectSemesters[selectedSubject.code] || 1;
    const levels = subjectAchievementLevels[selectedSubject.code] || [];
    const subjectName = getSubjectNameFromCode(selectedSubject.code);
    const standards = getAchievementStandardsBySubject(classroom.grade, subjectName);

    setIsGenerating(true, 'subject');

    const records = await generate('/api/generate/subject', {
      studentCount: classroom.studentCount,
      grade: classroom.grade,
      subjectCode: selectedSubject.code,
      subjectName,
      achievementLevels: levels,
      publisher,
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

    const publisher = subjectPublishers[selectedSubject.code] || 'national';
    const semester = subjectSemesters[selectedSubject.code] || 1;
    const levels = subjectAchievementLevels[selectedSubject.code] || [];
    const subjectName = getSubjectNameFromCode(selectedSubject.code);
    const standards = getAchievementStandardsBySubject(classroom.grade, subjectName);

    setRegeneratingStudent(studentNumber);

    const content = await regenerateSingle('/api/generate/subject', {
      studentCount: classroom.studentCount,
      grade: classroom.grade,
      subjectCode: selectedSubject.code,
      subjectName,
      achievementLevels: levels,
      publisher,
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
  const currentPublisher = selectedSubject ? subjectPublishers[selectedSubject.code] : undefined;
  const currentSemester = selectedSubject ? subjectSemesters[selectedSubject.code] || 1 : 1;
  const availablePublishers = selectedSubject ? getPublishersForSubject(selectedSubject.code) : [];
  const isNational = selectedSubject ? isNationalSubject(selectedSubject.code) : true;

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

              {!isNational ? (
                <Select
                  label="출판사 선택"
                  value={currentPublisher || ''}
                  onChange={(e) => {
                    if (selectedSubject) {
                      setSubjectPublisher(selectedSubject.code, e.target.value as Publisher);
                    }
                  }}
                >
                  {availablePublishers.map((pub) => (
                    <option key={pub} value={pub}>
                      {PUBLISHERS[pub].name}
                    </option>
                  ))}
                </Select>
              ) : (
                <div className="flex items-end">
                  <p className="text-sm text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 p-3 rounded-lg w-full">
                    국정교과서 사용 교과입니다.
                  </p>
                </div>
              )}
            </div>

            {selectedSubject && classroom && (
              <>
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
