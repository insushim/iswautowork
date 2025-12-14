'use client';

import { SubjectAchievementLevel, BehaviorLevel } from '@/types';
import { SUBJECT_LEVEL_INFO, BEHAVIOR_LEVEL_INFO } from '@/lib/curriculum-data';
import { Button, Select } from '@/components/ui';
import { cn } from '@/utils/cn';

interface AchievementLevelGridProps {
  type: 'subject' | 'behavior';
  levels: (SubjectAchievementLevel | BehaviorLevel)[];
  onLevelChange: (studentNumber: number, level: SubjectAchievementLevel | BehaviorLevel) => void;
  onSetAll: (level: SubjectAchievementLevel | BehaviorLevel) => void;
  studentCount: number;
}

export function AchievementLevelGrid({
  type,
  levels,
  onLevelChange,
  onSetAll,
  studentCount,
}: AchievementLevelGridProps) {
  const levelInfo = type === 'subject' ? SUBJECT_LEVEL_INFO : BEHAVIOR_LEVEL_INFO;
  const levelKeys = Object.keys(levelInfo) as (SubjectAchievementLevel | BehaviorLevel)[];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
          일괄 설정:
        </span>
        {levelKeys.map((level) => {
          const info = levelInfo[level as keyof typeof levelInfo];
          return (
            <Button
              key={level}
              variant="outline"
              size="sm"
              onClick={() => onSetAll(level)}
              className={cn(
                'min-w-[50px]',
                info.color.replace('bg-', 'hover:bg-').replace('500', '100'),
                'dark:hover:bg-opacity-20'
              )}
            >
              {info.label}
            </Button>
          );
        })}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
        {Array.from({ length: studentCount }, (_, i) => i + 1).map((studentNumber) => {
          const currentLevel = levels[studentNumber - 1] || (type === 'subject' ? 'average' : 'average');
          const currentInfo = levelInfo[currentLevel as keyof typeof levelInfo];

          return (
            <div
              key={studentNumber}
              className="flex flex-col items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
            >
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {studentNumber}번
              </span>
              <Select
                value={currentLevel}
                onChange={(e) => onLevelChange(studentNumber, e.target.value as SubjectAchievementLevel | BehaviorLevel)}
                className="text-center text-sm"
              >
                {levelKeys.map((level) => {
                  const info = levelInfo[level as keyof typeof levelInfo];
                  return (
                    <option key={level} value={level}>
                      {info.label}
                    </option>
                  );
                })}
              </Select>
              <span
                className={cn(
                  'mt-2 w-3 h-3 rounded-full',
                  currentInfo.color
                )}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
