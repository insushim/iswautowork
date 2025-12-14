import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  Classroom, Student, GeneratedRecord,
  AutonomousActivity, ClubActivity, VolunteerActivity, CareerActivity,
  SubjectAchievementLevel, BehaviorLevel, Theme, Semester
} from '@/types';

interface AppStore {
  // 테마
  theme: Theme;
  setTheme: (theme: Theme) => void;

  // 학급 정보
  classroom: Classroom | null;
  students: Student[];

  // 창의적 체험활동 기록
  autonomousRecords: GeneratedRecord[];
  clubRecords: GeneratedRecord[];
  volunteerRecords: GeneratedRecord[];
  careerRecords: GeneratedRecord[];

  // 교과별 발달사항
  subjectDevelopments: Record<string, GeneratedRecord[]>;

  // 행동특성 기록
  behaviorRecords: GeneratedRecord[];

  // 현재 활동 설정
  currentAutonomousActivity: AutonomousActivity | null;
  currentClubActivity: ClubActivity | null;
  currentVolunteerActivity: VolunteerActivity | null;
  currentCareerActivity: CareerActivity | null;

  // 교과별 성취수준 (5단계)
  subjectAchievementLevels: Record<string, SubjectAchievementLevel[]>;

  // 교과별 학기 선택
  subjectSemesters: Record<string, Semester>;

  // 행동수준 (5단계)
  behaviorLevels: BehaviorLevel[];

  // 매크로 설정
  macroSettings: {
    isActive: boolean;
    currentStudentIndex: number;
    delayBetweenInputs: number;
    targetSection: string;
  };

  // 로딩 상태
  isGenerating: boolean;
  generatingSection: string | null;

  // Actions
  setClassroom: (classroom: Classroom) => void;
  clearClassroom: () => void;

  setAutonomousRecords: (records: GeneratedRecord[]) => void;
  setClubRecords: (records: GeneratedRecord[]) => void;
  setVolunteerRecords: (records: GeneratedRecord[]) => void;
  setCareerRecords: (records: GeneratedRecord[]) => void;
  setSubjectDevelopments: (subjectCode: string, records: GeneratedRecord[]) => void;
  setBehaviorRecords: (records: GeneratedRecord[]) => void;

  updateRecord: (section: string, studentNumber: number, content: string) => void;
  updateSubjectRecord: (subjectCode: string, studentNumber: number, content: string) => void;

  setCurrentAutonomousActivity: (activity: AutonomousActivity | null) => void;
  setCurrentClubActivity: (activity: ClubActivity | null) => void;
  setCurrentVolunteerActivity: (activity: VolunteerActivity | null) => void;
  setCurrentCareerActivity: (activity: CareerActivity | null) => void;

  setSubjectAchievementLevel: (subjectCode: string, studentNumber: number, level: SubjectAchievementLevel) => void;
  initSubjectAchievementLevels: (subjectCode: string, count: number) => void;
  setAllSubjectAchievementLevels: (subjectCode: string, level: SubjectAchievementLevel) => void;

  setSubjectSemester: (subjectCode: string, semester: Semester) => void;

  setBehaviorLevel: (studentNumber: number, level: BehaviorLevel) => void;
  initBehaviorLevels: (count: number) => void;
  setAllBehaviorLevels: (level: BehaviorLevel) => void;

  setMacroSettings: (settings: Partial<AppStore['macroSettings']>) => void;
  setIsGenerating: (isGenerating: boolean, section?: string | null) => void;
}

export const useStore = create<AppStore>()(
  persist(
    (set) => ({
      theme: 'light',
      classroom: null,
      students: [],
      autonomousRecords: [],
      clubRecords: [],
      volunteerRecords: [],
      careerRecords: [],
      subjectDevelopments: {},
      behaviorRecords: [],
      currentAutonomousActivity: null,
      currentClubActivity: null,
      currentVolunteerActivity: null,
      currentCareerActivity: null,
      subjectAchievementLevels: {},
      subjectSemesters: {},
      behaviorLevels: [],
      macroSettings: {
        isActive: false,
        currentStudentIndex: 0,
        delayBetweenInputs: 500,
        targetSection: 'autonomous'
      },
      isGenerating: false,
      generatingSection: null,

      setTheme: (theme) => set({ theme }),

      setClassroom: (classroom) => {
        const students: Student[] = Array.from({ length: classroom.studentCount }, (_, i) => ({
          id: `student-${i + 1}`,
          number: i + 1,
          classroomId: `${classroom.grade}-${classroom.classNumber}`
        }));
        set({ classroom, students });
      },

      clearClassroom: () => set({
        classroom: null, students: [],
        autonomousRecords: [], clubRecords: [], volunteerRecords: [], careerRecords: [],
        subjectDevelopments: {}, behaviorRecords: [],
        subjectAchievementLevels: {}, subjectSemesters: {}, behaviorLevels: []
      }),

      setAutonomousRecords: (records) => set({ autonomousRecords: records }),
      setClubRecords: (records) => set({ clubRecords: records }),
      setVolunteerRecords: (records) => set({ volunteerRecords: records }),
      setCareerRecords: (records) => set({ careerRecords: records }),
      setSubjectDevelopments: (subjectCode, records) => set((state) => ({
        subjectDevelopments: { ...state.subjectDevelopments, [subjectCode]: records }
      })),
      setBehaviorRecords: (records) => set({ behaviorRecords: records }),

      updateRecord: (section, studentNumber, content) => set((state) => {
        const key = `${section}Records` as keyof AppStore;
        const records = [...(state[key] as GeneratedRecord[])];
        const idx = records.findIndex(r => r.studentNumber === studentNumber);
        if (idx !== -1) {
          records[idx] = { ...records[idx], content, isEdited: true, charCount: content.length };
        }
        return { [key]: records } as Partial<AppStore>;
      }),

      updateSubjectRecord: (subjectCode, studentNumber, content) => set((state) => {
        const records = [...(state.subjectDevelopments[subjectCode] || [])];
        const idx = records.findIndex(r => r.studentNumber === studentNumber);
        if (idx !== -1) {
          records[idx] = { ...records[idx], content, isEdited: true, charCount: content.length };
        }
        return { subjectDevelopments: { ...state.subjectDevelopments, [subjectCode]: records } };
      }),

      setCurrentAutonomousActivity: (activity) => set({ currentAutonomousActivity: activity }),
      setCurrentClubActivity: (activity) => set({ currentClubActivity: activity }),
      setCurrentVolunteerActivity: (activity) => set({ currentVolunteerActivity: activity }),
      setCurrentCareerActivity: (activity) => set({ currentCareerActivity: activity }),

      setSubjectAchievementLevel: (subjectCode, studentNumber, level) => set((state) => {
        const levels = [...(state.subjectAchievementLevels[subjectCode] || [])];
        levels[studentNumber - 1] = level;
        return { subjectAchievementLevels: { ...state.subjectAchievementLevels, [subjectCode]: levels } };
      }),

      initSubjectAchievementLevels: (subjectCode, count) => set((state) => ({
        subjectAchievementLevels: {
          ...state.subjectAchievementLevels,
          [subjectCode]: Array(count).fill('average' as SubjectAchievementLevel)
        }
      })),

      setAllSubjectAchievementLevels: (subjectCode, level) => set((state) => {
        const count = state.classroom?.studentCount || 0;
        return {
          subjectAchievementLevels: {
            ...state.subjectAchievementLevels,
            [subjectCode]: Array(count).fill(level)
          }
        };
      }),

      setSubjectSemester: (subjectCode, semester) => set((state) => ({
        subjectSemesters: { ...state.subjectSemesters, [subjectCode]: semester }
      })),

      setBehaviorLevel: (studentNumber, level) => set((state) => {
        const levels = [...state.behaviorLevels];
        levels[studentNumber - 1] = level;
        return { behaviorLevels: levels };
      }),

      initBehaviorLevels: (count) => set({
        behaviorLevels: Array(count).fill('average' as BehaviorLevel)
      }),

      setAllBehaviorLevels: (level) => set((state) => ({
        behaviorLevels: Array(state.classroom?.studentCount || 0).fill(level)
      })),

      setMacroSettings: (settings) => set((state) => ({
        macroSettings: { ...state.macroSettings, ...settings }
      })),

      setIsGenerating: (isGenerating, section = null) => set({
        isGenerating,
        generatingSection: section
      }),
    }),
    {
      name: 'neis-helper-storage-v2',
      partialize: (state) => ({
        theme: state.theme,
        classroom: state.classroom,
        students: state.students,
        autonomousRecords: state.autonomousRecords,
        clubRecords: state.clubRecords,
        volunteerRecords: state.volunteerRecords,
        careerRecords: state.careerRecords,
        subjectDevelopments: state.subjectDevelopments,
        behaviorRecords: state.behaviorRecords,
        subjectAchievementLevels: state.subjectAchievementLevels,
        subjectSemesters: state.subjectSemesters,
        behaviorLevels: state.behaviorLevels,
      })
    }
  )
);
