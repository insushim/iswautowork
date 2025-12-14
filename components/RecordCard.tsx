'use client';

import { useState } from 'react';
import { GeneratedRecord } from '@/types';
import { Card, Button, Textarea, Badge } from '@/components/ui';
import { Copy, RefreshCw, Check, Edit2, X } from 'lucide-react';

interface RecordCardProps {
  record: GeneratedRecord;
  onUpdate: (content: string) => void;
  onRegenerate: () => Promise<void>;
  isRegenerating?: boolean;
}

export function RecordCard({ record, onUpdate, onRegenerate, isRegenerating }: RecordCardProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(record.content);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(record.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSave = () => {
    onUpdate(editContent);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditContent(record.content);
    setIsEditing(false);
  };

  return (
    <Card variant="bordered" className="p-4">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <Badge variant="info">{record.studentNumber}번</Badge>
          {record.isEdited && (
            <Badge variant="warning" size="sm">수정됨</Badge>
          )}
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {record.content.length}자
          </span>
        </div>
        <div className="flex items-center gap-1">
          {!isEditing && (
            <>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsEditing(true)}
                className="p-1.5"
              >
                <Edit2 className="w-4 h-4" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                className="p-1.5"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={onRegenerate}
                disabled={isRegenerating}
                className="p-1.5"
              >
                <RefreshCw className={`w-4 h-4 ${isRegenerating ? 'animate-spin' : ''}`} />
              </Button>
            </>
          )}
        </div>
      </div>

      {isEditing ? (
        <div className="space-y-3">
          <Textarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            rows={4}
            charCount={editContent.length}
          />
          <div className="flex justify-end gap-2">
            <Button variant="ghost" size="sm" onClick={handleCancel}>
              <X className="w-4 h-4 mr-1" />
              취소
            </Button>
            <Button size="sm" onClick={handleSave}>
              <Check className="w-4 h-4 mr-1" />
              저장
            </Button>
          </div>
        </div>
      ) : (
        <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap leading-relaxed">
          {record.content}
        </p>
      )}
    </Card>
  );
}
