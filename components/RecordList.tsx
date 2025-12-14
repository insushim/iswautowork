'use client';

import { GeneratedRecord } from '@/types';
import { RecordCard } from './RecordCard';
import { Button, Card, CardContent } from '@/components/ui';
import { Copy, Download, RefreshCw, Play } from 'lucide-react';
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
  const {
    isActive,
    currentIndex,
    copiedCount,
    copyNext,
    copyAll,
    startMacro,
    stopMacro,
  } = useMacro({ records });

  if (records.length === 0) {
    return null;
  }

  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {title} ({records.length}명)
            </h3>
            <div className="flex flex-wrap gap-2">
              {isActive ? (
                <>
                  <span className="text-sm text-gray-600 dark:text-gray-400 self-center">
                    {copiedCount}/{records.length} 복사됨
                  </span>
                  <Button variant="outline" size="sm" onClick={copyNext}>
                    다음 복사 ({currentIndex + 1}번)
                  </Button>
                  <Button variant="secondary" size="sm" onClick={stopMacro}>
                    매크로 중지
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={startMacro}
                  >
                    <Play className="w-4 h-4 mr-1" />
                    매크로 시작
                  </Button>
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
        </CardContent>
      </Card>

      <div className="grid gap-4">
        {records.map((record) => (
          <RecordCard
            key={record.studentNumber}
            record={record}
            onUpdate={(content) => onUpdate(record.studentNumber, content)}
            onRegenerate={() => onRegenerate(record.studentNumber)}
            isRegenerating={regeneratingStudent === record.studentNumber}
          />
        ))}
      </div>
    </div>
  );
}
