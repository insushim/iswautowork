'use client';

import { useState } from 'react';
import { useStore } from '@/store/useStore';
import { ClassroomSetup } from '@/components/ClassroomSetup';
import { ThemeToggle } from '@/components/ThemeToggle';
import {
  AutonomousSection,
  ClubSection,
  VolunteerSection,
  CareerSection,
  SubjectSection,
  BehaviorSection,
  NugaRecordSection,
} from '@/components/sections';
import { Button, Card, CardContent } from '@/components/ui';
import { useExport } from '@/hooks/useExport';
import { getSubjectNameFromCode } from '@/lib/achievement-standards';
import { Download, FileSpreadsheet } from 'lucide-react';

type TabType = 'creative' | 'subject' | 'behavior' | 'nuga';

export default function Home() {
  const {
    classroom,
    autonomousRecords,
    clubRecords,
    volunteerRecords,
    careerRecords,
    subjectDevelopments,
    behaviorRecords,
  } = useStore();

  const [activeTab, setActiveTab] = useState<TabType>('creative');
  const { exportAll } = useExport({ classroom });

  const handleExportAll = () => {
    const subjects: Record<string, { name: string; records: typeof autonomousRecords }> = {};

    Object.entries(subjectDevelopments).forEach(([code, records]) => {
      subjects[code] = {
        name: getSubjectNameFromCode(code),
        records,
      };
    });

    exportAll({
      autonomous: autonomousRecords,
      club: clubRecords,
      volunteer: volunteerRecords,
      career: careerRecords,
      behavior: behaviorRecords,
      subjects,
    });
  };

  const hasAnyRecords =
    autonomousRecords.length > 0 ||
    clubRecords.length > 0 ||
    volunteerRecords.length > 0 ||
    careerRecords.length > 0 ||
    behaviorRecords.length > 0 ||
    Object.values(subjectDevelopments).some((r) => r.length > 0);

  const tabs: { id: TabType; label: string }[] = [
    { id: 'creative', label: '창의적 체험활동' },
    { id: 'subject', label: '교과별 발달사항' },
    { id: 'nuga', label: '누가기록' },
    { id: 'behavior', label: '행동특성 및 종합의견' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                NEIS 입력 보조기
              </h1>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                2022 개정 교육과정 기반 학교생활기록부 기록 생성
              </p>
            </div>
            <div className="flex items-center gap-3">
              {hasAnyRecords && classroom && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleExportAll}
                >
                  <FileSpreadsheet className="w-4 h-4 mr-2" />
                  전체 엑셀 내보내기
                </Button>
              )}
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <ClassroomSetup />

        {classroom && (
          <>
            {/* Tab Navigation */}
            <Card className="mb-6">
              <CardContent className="py-2">
                <nav className="flex space-x-1">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`
                        px-4 py-2 text-sm font-medium rounded-lg transition-colors
                        ${activeTab === tab.id
                          ? 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
                          : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
                        }
                      `}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </CardContent>
            </Card>

            {/* Tab Content */}
            <div className="space-y-6">
              {activeTab === 'creative' && (
                <div className="space-y-8">
                  <AutonomousSection />
                  <ClubSection />
                  <VolunteerSection />
                  <CareerSection />
                </div>
              )}

              {activeTab === 'subject' && <SubjectSection />}

              {activeTab === 'behavior' && <BehaviorSection />}

              {activeTab === 'nuga' && <NugaRecordSection />}
            </div>
          </>
        )}

        {!classroom && (
          <Card>
            <CardContent className="py-12 text-center">
              <Download className="w-12 h-12 mx-auto text-gray-400 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                학급 정보를 설정해주세요
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                학년, 반, 학생 수를 입력하면 기록 생성을 시작할 수 있습니다.
              </p>
            </CardContent>
          </Card>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 dark:border-gray-700 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center text-sm text-gray-500 dark:text-gray-400">
            <p>NEIS 입력 보조기 v2.0 - 2022 개정 교육과정 기반</p>
            <p className="mt-1">
              AI가 생성한 기록은 반드시 검토 후 수정하여 사용하세요.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
