'use client';

import { useCallback } from 'react';
import { exportToExcel, exportAllToExcel } from '@/utils/excel';
import { GeneratedRecord, Classroom } from '@/types';

interface UseExportOptions {
  classroom: Classroom | null;
}

export function useExport({ classroom }: UseExportOptions) {
  const exportSection = useCallback((
    section: string,
    sectionName: string,
    records: GeneratedRecord[],
    additionalInfo?: string
  ) => {
    if (!classroom) {
      alert('학급 정보가 없습니다.');
      return;
    }

    if (records.length === 0) {
      alert('내보낼 기록이 없습니다.');
      return;
    }

    exportToExcel({
      classroom,
      section,
      sectionName,
      records,
      additionalInfo,
    });
  }, [classroom]);

  const exportAll = useCallback((allRecords: {
    autonomous: GeneratedRecord[];
    club: GeneratedRecord[];
    volunteer: GeneratedRecord[];
    career: GeneratedRecord[];
    behavior: GeneratedRecord[];
    subjects: Record<string, { name: string; records: GeneratedRecord[] }>;
  }) => {
    if (!classroom) {
      alert('학급 정보가 없습니다.');
      return;
    }

    const hasRecords =
      allRecords.autonomous.length > 0 ||
      allRecords.club.length > 0 ||
      allRecords.volunteer.length > 0 ||
      allRecords.career.length > 0 ||
      allRecords.behavior.length > 0 ||
      Object.values(allRecords.subjects).some(s => s.records.length > 0);

    if (!hasRecords) {
      alert('내보낼 기록이 없습니다.');
      return;
    }

    exportAllToExcel(classroom, allRecords);
  }, [classroom]);

  return {
    exportSection,
    exportAll,
  };
}
