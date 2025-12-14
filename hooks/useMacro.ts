'use client';

import { useState, useCallback } from 'react';
import { GeneratedRecord } from '@/types';

interface UseMacroOptions {
  records: GeneratedRecord[];
  delay?: number;
}

export function useMacro({ records, delay = 500 }: UseMacroOptions) {
  const [isActive, setIsActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copiedCount, setCopiedCount] = useState(0);

  const copyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      console.error('클립보드 복사 실패:', err);
      return false;
    }
  }, []);

  const copyNext = useCallback(async () => {
    if (currentIndex >= records.length) {
      setIsActive(false);
      return false;
    }

    const success = await copyToClipboard(records[currentIndex].content);
    if (success) {
      setCopiedCount(prev => prev + 1);
      setCurrentIndex(prev => prev + 1);
    }
    return success;
  }, [currentIndex, records, copyToClipboard]);

  const copyAll = useCallback(async () => {
    const allContent = records.map(r => `${r.studentNumber}번: ${r.content}`).join('\n\n');
    return copyToClipboard(allContent);
  }, [records, copyToClipboard]);

  const startMacro = useCallback(() => {
    setIsActive(true);
    setCurrentIndex(0);
    setCopiedCount(0);
  }, []);

  const stopMacro = useCallback(() => {
    setIsActive(false);
  }, []);

  const reset = useCallback(() => {
    setIsActive(false);
    setCurrentIndex(0);
    setCopiedCount(0);
  }, []);

  return {
    isActive,
    currentIndex,
    copiedCount,
    totalCount: records.length,
    copyNext,
    copyAll,
    copyToClipboard,
    startMacro,
    stopMacro,
    reset,
    delay,
  };
}
