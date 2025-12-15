'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { GeneratedRecord } from '@/types';

interface UseMacroOptions {
  records: GeneratedRecord[];
  delay?: number;
}

export function useMacro({ records, delay = 2000 }: UseMacroOptions) {
  const [isActive, setIsActive] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [copiedCount, setCopiedCount] = useState(0);
  const [macroDelay, setMacroDelay] = useState(delay);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const copyToClipboard = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (err) {
      console.error('클립보드 복사 실패:', err);
      return false;
    }
  }, []);

  // 특정 인덱스의 학생 복사
  const copyAtIndex = useCallback(async (index: number) => {
    if (index >= records.length) {
      setIsActive(false);
      return false;
    }

    const success = await copyToClipboard(records[index].content);
    if (success) {
      setCopiedCount(index + 1);
      setCurrentIndex(index);
    }
    return success;
  }, [records, copyToClipboard]);

  // 다음 학생 복사
  const copyNext = useCallback(async () => {
    const nextIndex = currentIndex + 1;
    if (nextIndex >= records.length) {
      setIsActive(false);
      return false;
    }
    return copyAtIndex(nextIndex);
  }, [currentIndex, records.length, copyAtIndex]);

  // 자동 매크로 실행
  useEffect(() => {
    if (!isActive) {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    // 마지막 학생까지 복사 완료
    if (copiedCount >= records.length) {
      setIsActive(false);
      return;
    }

    // 첫 번째가 아니면 타이머로 다음 복사
    if (copiedCount > 0 && copiedCount < records.length) {
      timerRef.current = setTimeout(async () => {
        await copyAtIndex(copiedCount);
      }, macroDelay);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [isActive, copiedCount, records.length, macroDelay, copyAtIndex]);

  const copyAll = useCallback(async () => {
    const allContent = records.map(r => `${r.studentNumber}번: ${r.content}`).join('\n\n');
    return copyToClipboard(allContent);
  }, [records, copyToClipboard]);

  // AutoHotkey 매크로용 복사 (@@STUDENT@@ 구분자 사용)
  const copyForAutoHotkey = useCallback(async () => {
    const allContent = records.map(r => r.content).join('@@STUDENT@@');
    return copyToClipboard(allContent);
  }, [records, copyToClipboard]);

  // 매크로 시작 - 바로 1번 학생 복사
  const startMacro = useCallback(async () => {
    setIsActive(true);
    setCurrentIndex(0);
    setCopiedCount(0);

    // 바로 1번 학생 복사
    if (records.length > 0) {
      const success = await copyToClipboard(records[0].content);
      if (success) {
        setCopiedCount(1);
        setCurrentIndex(0);
      }
    }
  }, [records, copyToClipboard]);

  const stopMacro = useCallback(() => {
    setIsActive(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const reset = useCallback(() => {
    setIsActive(false);
    setCurrentIndex(0);
    setCopiedCount(0);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  // 딜레이 변경
  const updateDelay = useCallback((newDelay: number) => {
    setMacroDelay(newDelay);
  }, []);

  return {
    isActive,
    currentIndex,
    copiedCount,
    totalCount: records.length,
    copyNext,
    copyAll,
    copyForAutoHotkey,
    copyToClipboard,
    startMacro,
    stopMacro,
    reset,
    delay: macroDelay,
    updateDelay,
  };
}
