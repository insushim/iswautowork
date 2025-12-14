'use client';

import { useState } from 'react';
import { GeneratedRecord } from '@/types';

interface UseGenerateOptions {
  onSuccess?: (records: GeneratedRecord[]) => void;
  onError?: (error: string) => void;
}

export function useGenerate(options: UseGenerateOptions = {}) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generate = async (endpoint: string, data: Record<string, unknown>) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('생성에 실패했습니다.');
      }

      const result = await response.json();

      if (result.error) {
        throw new Error(result.error);
      }

      options.onSuccess?.(result.records);
      return result.records;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.';
      setError(errorMessage);
      options.onError?.(errorMessage);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  const regenerateSingle = async (
    endpoint: string,
    data: Record<string, unknown>,
    studentNumber: number
  ) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, studentNumber, regenerateSingle: true }),
      });

      if (!response.ok) {
        throw new Error('재생성에 실패했습니다.');
      }

      const result = await response.json();

      if (result.error) {
        throw new Error(result.error);
      }

      return result.content;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다.';
      setError(errorMessage);
      options.onError?.(errorMessage);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    generate,
    regenerateSingle,
    isLoading,
    error,
  };
}
