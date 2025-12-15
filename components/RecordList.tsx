'use client';

import { useState } from 'react';
import { GeneratedRecord } from '@/types';
import { RecordCard } from './RecordCard';
import { Button, Card, CardContent } from '@/components/ui';
import { Copy, Download, RefreshCw, Play, Square, Settings } from 'lucide-react';
import { useMacro } from '@/hooks/useMacro';

interface RecordListProps {
  records: GeneratedRecord[];
  title: string;
  onUpdate: (studentNumber: number, content: string) => void;
  onRegenerate: (studentNumber: number) => Promise<void>;
  onRegenerateAll: () => Promise<void>;
  onExport: () => void;
  isGenerating?: boolean;
  regeneratingStudent?: number | null;
}

export function RecordList({
  records,
  title,
  onUpdate,
  onRegenerate,
  onRegenerateAll,
  onExport,
  isGenerating,
  regeneratingStudent,
}: RecordListProps) {
  const [showDelaySettings, setShowDelaySettings] = useState(false);

  const {
    isActive,
    currentIndex,
    copiedCount,
    totalCount,
    copyNext,
    copyAll,
    startMacro,
    stopMacro,
    delay,
    updateDelay,
  } = useMacro({ records, delay: 2000 });

  if (records.length === 0) {
    return null;
  }

  const delayOptions = [
    { value: 1500, label: '1.5초' },
    { value: 2000, label: '2초' },
    { value: 2500, label: '2.5초' },
    { value: 3000, label: '3초' },
    { value: 4000, label: '4초' },
    { value: 5000, label: '5초' },
  ];

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {title} ({records.length}명)
            </h3>
            <div className="flex flex-wrap gap-2 items-center">
              {isActive ? (
                <>
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                      {copiedCount}/{totalCount} 복사 중... ({currentIndex + 1}번 학생)
                    </span>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={copyNext}
                    disabled={copiedCount >= totalCount}
                  >
                    다음 복사
                  </Button>
                  <Button variant="destructive" size="sm" onClick={stopMacro}>
                    <Square className="w-4 h-4 mr-1" />
                    중지
                  </Button>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-1">
                    <Button
                      variant="default"
                      size="sm"
                      onClick={startMacro}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      <Play className="w-4 h-4 mr-1" />
                      매크로 시작
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowDelaySettings(!showDelaySettings)}
                      className="px-2"
                    >
                      <Settings className="w-4 h-4" />
                    </Button>
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={copyAll}
                  >
                    <Copy className="w-4 h-4 mr-1" />
                    전체 복사
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={onExport}
                  >
                    <Download className="w-4 h-4 mr-1" />
                    엑셀 내보내기
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={onRegenerateAll}
                    disabled={isGenerating}
                  >
                    <RefreshCw className={`w-4 h-4 mr-1 ${isGenerating ? 'animate-spin' : ''}`} />
                    모두 재생성
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* 딜레이 설정 */}
          {showDelaySettings && !isActive && (
            <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                복사 간격 설정 (붙여넣기 + Tab 이동 시간)
              </p>
              <div className="flex flex-wrap gap-2">
                {delayOptions.map((option) => (
                  <Button
                    key={option.value}
                    variant={delay === option.value ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => updateDelay(option.value)}
                  >
                    {option.label}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* 매크로 사용 안내 */}
          {isActive && (
            <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                <strong>사용 방법:</strong> NEIS 창에서 Ctrl+V로 붙여넣기 → Tab 3번으로 다음 학생 이동 →{' '}
                {delay / 1000}초 후 자동으로 다음 학생이 복사됩니다.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="grid gap-4">
        {records.map((record, index) => (
          <RecordCard
            key={record.studentNumber}
            record={record}
            onUpdate={(content) => onUpdate(record.studentNumber, content)}
            onRegenerate={() => onRegenerate(record.studentNumber)}
            isRegenerating={regeneratingStudent === record.studentNumber}
            isCurrentMacro={isActive && index === currentIndex}
          />
        ))}
      </div>
    </div>
  );
}
