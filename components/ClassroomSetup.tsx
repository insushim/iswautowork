'use client';

import { useState } from 'react';
import { useStore } from '@/store/useStore';
import { Button, Select, Input, Card, CardHeader, CardTitle, CardContent } from '@/components/ui';
import { School } from 'lucide-react';

export function ClassroomSetup() {
  const { classroom, setClassroom, clearClassroom } = useStore();
  const [grade, setGrade] = useState(classroom?.grade || 1);
  const [classNumber, setClassNumber] = useState(classroom?.classNumber || 1);
  const [studentCount, setStudentCount] = useState(classroom?.studentCount || 25);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setClassroom({
      grade,
      classNumber,
      studentCount,
      createdAt: new Date(),
    });
  };

  if (classroom) {
    return (
      <Card className="mb-6">
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <School className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              <div>
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {classroom.grade}학년 {classroom.classNumber}반
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  학생 수: {classroom.studentCount}명
                </p>
              </div>
            </div>
            <Button variant="outline" onClick={clearClassroom}>
              학급 변경
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <School className="w-5 h-5" />
          학급 설정
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Select
              label="학년"
              value={grade}
              onChange={(e) => setGrade(Number(e.target.value))}
            >
              {[1, 2, 3, 4, 5, 6].map((g) => (
                <option key={g} value={g}>
                  {g}학년
                </option>
              ))}
            </Select>

            <Select
              label="반"
              value={classNumber}
              onChange={(e) => setClassNumber(Number(e.target.value))}
            >
              {Array.from({ length: 15 }, (_, i) => i + 1).map((c) => (
                <option key={c} value={c}>
                  {c}반
                </option>
              ))}
            </Select>

            <Input
              label="학생 수"
              type="number"
              min={1}
              max={40}
              value={studentCount}
              onChange={(e) => setStudentCount(Number(e.target.value))}
            />
          </div>

          <Button type="submit" className="w-full">
            학급 설정 완료
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
