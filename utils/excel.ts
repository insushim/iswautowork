import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { GeneratedRecord, Classroom } from '@/types';

interface ExportData {
  classroom: Classroom;
  section: string;
  sectionName: string;
  records: GeneratedRecord[];
  additionalInfo?: string;
}

export function exportToExcel(data: ExportData) {
  const { classroom, sectionName, records, additionalInfo } = data;

  // 워크북 생성
  const wb = XLSX.utils.book_new();

  // 헤더 정보
  const headerData = [
    [`${classroom.grade}학년 ${classroom.classNumber}반 ${sectionName}`],
    [additionalInfo || ''],
    [''],
    ['번호', '내용', '글자수', '수정여부']
  ];

  // 데이터 행
  const dataRows = records.map(record => [
    `${record.studentNumber}번`,
    record.content,
    record.content.length,
    record.isEdited ? '수정됨' : ''
  ]);

  const wsData = [...headerData, ...dataRows];

  // 워크시트 생성
  const ws = XLSX.utils.aoa_to_sheet(wsData);

  // 열 너비 설정
  ws['!cols'] = [
    { wch: 8 },   // 번호
    { wch: 80 },  // 내용
    { wch: 10 },  // 글자수
    { wch: 10 }   // 수정여부
  ];

  // 워크북에 추가
  XLSX.utils.book_append_sheet(wb, ws, sectionName);

  // 파일 저장
  const fileName = `${classroom.grade}학년${classroom.classNumber}반_${sectionName}_${new Date().toISOString().slice(0, 10)}.xlsx`;
  const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([wbout], { type: 'application/octet-stream' });
  saveAs(blob, fileName);
}

export function exportAllToExcel(
  classroom: Classroom,
  allRecords: {
    autonomous: GeneratedRecord[];
    club: GeneratedRecord[];
    volunteer: GeneratedRecord[];
    career: GeneratedRecord[];
    behavior: GeneratedRecord[];
    subjects: Record<string, { name: string; records: GeneratedRecord[] }>;
  }
) {
  const wb = XLSX.utils.book_new();

  // 각 섹션별로 시트 추가
  const sections = [
    { name: '자율활동', records: allRecords.autonomous },
    { name: '동아리활동', records: allRecords.club },
    { name: '봉사활동', records: allRecords.volunteer },
    { name: '진로활동', records: allRecords.career },
    { name: '행동특성', records: allRecords.behavior },
  ];

  sections.forEach(({ name, records }) => {
    if (records.length > 0) {
      const wsData = [
        ['번호', '내용', '글자수'],
        ...records.map(r => [`${r.studentNumber}번`, r.content, r.content.length])
      ];
      const ws = XLSX.utils.aoa_to_sheet(wsData);
      ws['!cols'] = [{ wch: 8 }, { wch: 80 }, { wch: 10 }];
      XLSX.utils.book_append_sheet(wb, ws, name);
    }
  });

  // 교과별 시트 추가
  Object.entries(allRecords.subjects).forEach(([, { name, records }]) => {
    if (records.length > 0) {
      const wsData = [
        ['번호', '내용', '글자수'],
        ...records.map(r => [`${r.studentNumber}번`, r.content, r.content.length])
      ];
      const ws = XLSX.utils.aoa_to_sheet(wsData);
      ws['!cols'] = [{ wch: 8 }, { wch: 80 }, { wch: 10 }];
      XLSX.utils.book_append_sheet(wb, ws, name);
    }
  });

  const fileName = `${classroom.grade}학년${classroom.classNumber}반_전체기록_${new Date().toISOString().slice(0, 10)}.xlsx`;
  const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
  const blob = new Blob([wbout], { type: 'application/octet-stream' });
  saveAs(blob, fileName);
}
