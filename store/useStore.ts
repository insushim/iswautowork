import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import {
  Classroom, Student, GeneratedRecord,
  AutonomousActivity, ClubActivity, VolunteerActivity, CareerActivity,
  SubjectAchievementLevel, BehaviorLevel, Theme, Semester,
  StudentTalents, TalentLevel, TalentType, AchievementStandard,
  NugaRecord, NugaCategory
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

  // 누가기록
  nugaRecords: NugaRecord[];

  // 현재 활동 설정
  currentAutonomousActivity: AutonomousActivity | null;
  currentClubActivity: ClubActivity | null;
  currentVolunteerActivity: VolunteerActivity | null;
  currentCareerActivity: CareerActivity | null;

  // 교과별 성취수준 (5단계)
  subjectAchievementLevels: Record<string, SubjectAchievementLevel[]>;

  // 교과별 학기 선택
  subjectSemesters: Record<string, Semester>;

  // 교과별 문장 수 (기본값 4)
  subjectSentenceCounts: Record<string, number>;

  // 교과별 공통문장 포함 여부 (기본값 true)
  subjectIncludeCommon: Record<string, boolean>;

  // 교과별 선택된 성취기준 (사용자가 넣기/빼기 가능)
  // key: `${subjectCode}_${semester}`, value: 선택된 성취기준 코드 배열
  selectedStandardCodes: Record<string, string[]>;

  // 행동수준 (5단계)
  behaviorLevels: BehaviorLevel[];

  // 예체능 특기 (학생별)
  studentTalents: StudentTalents[];

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

  // 교과별 문장 수 설정
  setSubjectSentenceCount: (subjectCode: string, count: number) => void;

  // 교과별 공통문장 포함 여부 설정
  setSubjectIncludeCommon: (subjectCode: string, include: boolean) => void;

  // 성취기준 선택/해제
  toggleStandardCode: (subjectCode: string, semester: Semester, code: string) => void;
  setSelectedStandardCodes: (subjectCode: string, semester: Semester, codes: string[]) => void;
  initSelectedStandardCodes: (subjectCode: string, semester: Semester, allCodes: string[]) => void;

  setBehaviorLevel: (studentNumber: number, level: BehaviorLevel) => void;
  initBehaviorLevels: (count: number) => void;
  setAllBehaviorLevels: (level: BehaviorLevel) => void;

  setStudentTalent: (studentNumber: number, talentType: TalentType, level: TalentLevel) => void;
  initStudentTalents: (count: number) => void;
  clearAllTalents: (talentType: TalentType) => void;

  setMacroSettings: (settings: Partial<AppStore['macroSettings']>) => void;
  setIsGenerating: (isGenerating: boolean, section?: string | null) => void;

  // 누가기록 액션
  addNugaRecords: (records: NugaRecord[]) => void;
  updateNugaRecord: (id: string, updates: Partial<NugaRecord>) => void;
  deleteNugaRecord: (id: string) => void;
  toggleNugaRecordUsed: (id: string) => void;
  clearNugaRecords: () => void;
  clearNugaRecordsByStudent: (studentNumber: number) => void;
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
      nugaRecords: [],
      currentAutonomousActivity: null,
      currentClubActivity: null,
      currentVolunteerActivity: null,
      currentCareerActivity: null,
      subjectAchievementLevels: {},
      subjectSemesters: {},
      subjectSentenceCounts: {},
      subjectIncludeCommon: {},
      selectedStandardCodes: {},
      behaviorLevels: [],
      studentTalents: [],
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
        subjectDevelopments: {}, behaviorRecords: [], nugaRecords: [],
        subjectAchievementLevels: {}, subjectSemesters: {}, subjectSentenceCounts: {}, subjectIncludeCommon: {}, selectedStandardCodes: {},
        behaviorLevels: [], studentTalents: []
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

      setSubjectSentenceCount: (subjectCode, count) => set((state) => ({
        subjectSentenceCounts: { ...state.subjectSentenceCounts, [subjectCode]: count }
      })),

      setSubjectIncludeCommon: (subjectCode, include) => set((state) => ({
        subjectIncludeCommon: { ...state.subjectIncludeCommon, [subjectCode]: include }
      })),

      toggleStandardCode: (subjectCode, semester, code) => set((state) => {
        const key = `${subjectCode}_${semester}`;
        const current = state.selectedStandardCodes[key] || [];
        const isSelected = current.includes(code);
        const newCodes = isSelected
          ? current.filter(c => c !== code)
          : [...current, code];
        return {
          selectedStandardCodes: { ...state.selectedStandardCodes, [key]: newCodes }
        };
      }),

      setSelectedStandardCodes: (subjectCode, semester, codes) => set((state) => {
        const key = `${subjectCode}_${semester}`;
        return {
          selectedStandardCodes: { ...state.selectedStandardCodes, [key]: codes }
        };
      }),

      initSelectedStandardCodes: (subjectCode, semester, allCodes) => set((state) => {
        const key = `${subjectCode}_${semester}`;
        // 이미 초기화된 경우 덮어쓰지 않음
        if (state.selectedStandardCodes[key]) return state;
        return {
          selectedStandardCodes: { ...state.selectedStandardCodes, [key]: allCodes }
        };
      }),

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

      setStudentTalent: (studentNumber, talentType, level) => set((state) => {
        const talents = [...state.studentTalents];
        if (!talents[studentNumber - 1]) {
          talents[studentNumber - 1] = { sports: 'none', music: 'none', art: 'none' };
        }
        talents[studentNumber - 1] = { ...talents[studentNumber - 1], [talentType]: level };
        return { studentTalents: talents };
      }),

      initStudentTalents: (count) => set({
        studentTalents: Array(count).fill(null).map(() => ({ sports: 'none' as TalentLevel, music: 'none' as TalentLevel, art: 'none' as TalentLevel }))
      }),

      clearAllTalents: (talentType) => set((state) => ({
        studentTalents: state.studentTalents.map(t => ({ ...t, [talentType]: 'none' as TalentLevel }))
      })),

      setMacroSettings: (settings) => set((state) => ({
        macroSettings: { ...state.macroSettings, ...settings }
      })),

      setIsGenerating: (isGenerating, section = null) => set({
        isGenerating,
        generatingSection: section
      }),

      // 누가기록 액션
      addNugaRecords: (records) => set((state) => ({
        nugaRecords: [...state.nugaRecords, ...records]
      })),

      updateNugaRecord: (id, updates) => set((state) => ({
        nugaRecords: state.nugaRecords.map(r =>
          r.id === id ? { ...r, ...updates } : r
        )
      })),

      deleteNugaRecord: (id) => set((state) => ({
        nugaRecords: state.nugaRecords.filter(r => r.id !== id)
      })),

      toggleNugaRecordUsed: (id) => set((state) => ({
        nugaRecords: state.nugaRecords.map(r =>
          r.id === id ? { ...r, isUsed: !r.isUsed } : r
        )
      })),

      clearNugaRecords: () => set({ nugaRecords: [] }),

      clearNugaRecordsByStudent: (studentNumber) => set((state) => ({
        nugaRecords: state.nugaRecords.filter(r => r.studentNumber !== studentNumber)
      })),
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
        nugaRecords: state.nugaRecords,
        subjectAchievementLevels: state.subjectAchievementLevels,
        subjectSemesters: state.subjectSemesters,
        subjectSentenceCounts: state.subjectSentenceCounts,
        subjectIncludeCommon: state.subjectIncludeCommon,
        selectedStandardCodes: state.selectedStandardCodes,
        behaviorLevels: state.behaviorLevels,
        studentTalents: state.studentTalents,
      })
    }
  )
);
