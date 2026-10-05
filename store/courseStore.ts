import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CourseState {
  completedLessons: Record<string, number[]>;
  currentLessons: Record<string, number>;

  markLessonComplete: (courseId: string, lessonId: number) => void;

  toggleLessonComplete: (courseId: string, lessonId: number) => void;

  setCurrentLesson: (courseId: string, lessonId: number) => void;

  isLessonComplete: (courseId: string, lessonId: number) => boolean;

  getCourseProgress: (courseId: string, totalLessons: number) => number;
}

export const useCourseStore = create<CourseState>()(
  persist(
    (set, get) => ({
      completedLessons: {},
      currentLessons: {},

      markLessonComplete: (courseId, lessonId) => {
        set((state) => {
          const existing = state.completedLessons[courseId] || [];

          if (existing.includes(lessonId)) {
            return state;
          }

          return {
            completedLessons: {
              ...state.completedLessons,
              [courseId]: [...existing, lessonId],
            },
          };
        });
      },
      toggleLessonComplete: (courseId, lessonId) => {
  set((state) => {
    const existing =
      state.completedLessons[courseId] || [];

    const isCompleted = existing.includes(lessonId);

    const updatedLessons = isCompleted
      ? existing.filter((id) => id !== lessonId)
      : [...existing, lessonId];

    return {
      completedLessons: {
        ...state.completedLessons,
        [courseId]: updatedLessons,
      },
    };
  });
},

      setCurrentLesson: (courseId, lessonId) => {
        set((state) => ({
          currentLessons: {
            ...state.currentLessons,
            [courseId]: lessonId,
          },
        }));
      },

      isLessonComplete: (courseId, lessonId) => {
        const lessons = get().completedLessons[courseId] || [];

        return lessons.includes(lessonId);
      },

      getCourseProgress: (courseId, totalLessons) => {
        const completed = get().completedLessons[courseId] || [];

        if (totalLessons === 0) {
          return 0;
        }

        return Math.round((completed.length / totalLessons) * 100);
      },
    }),
    {
      name: "learnly-course-progress",
    },
  ),
);
