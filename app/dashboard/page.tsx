"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { useCourseStore } from "@/store/courseStore";

const courses = [
  {
    id: "python",
    title: "Python for Beginners",
    category: "Development",
    lessons: 24,
    duration: "12 hours",
    color: "from-indigo-600 to-violet-500",
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    category: "Design",
    lessons: 18,
    duration: "8 hours",
    color: "from-pink-500 to-orange-400",
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    category: "Marketing",
    lessons: 21,
    duration: "10 hours",
    color: "from-emerald-500 to-teal-500",
  },
];

const lessonNames: Record<string, string[]> = {
  python: [
    "Introduction to Python",
    "Installing Python",
    "Your First Python Program",
    "Variables and Data Types",
    "Conditions and Logic",
    "Loops",
    "Working with Lists",
    "Understanding Functions",
  ],

  "ui-ux": [
    "Introduction to UI/UX",
    "Visual Hierarchy",
    "Typography",
    "Understanding Users",
    "User Flows",
    "Wireframing",
  ],

  marketing: [
    "Introduction to Digital Marketing",
    "Understanding Your Audience",
    "Setting Marketing Goals",
    "Creating Content",
    "Content Strategy",
    "Distribution",
  ],
};

const subscribeToHydration = () => () => {};
const getClientHydrationSnapshot = () => true;
const getServerHydrationSnapshot = () => false;

export default function DashboardPage() {
  const hasMounted = useSyncExternalStore(
    subscribeToHydration,
    getClientHydrationSnapshot,
    getServerHydrationSnapshot,
  );
  const { completedLessons, currentLessons, getCourseProgress } =
    useCourseStore();

  const visibleCompletedLessons = hasMounted ? completedLessons : {};
  const visibleCurrentLessons = hasMounted ? currentLessons : {};

  /*
   * Find the first course the student has started.
   * If they haven't started anything yet, use Python.
   */
  const activeCourse =
    courses.find(
      (course) =>
        (visibleCompletedLessons[course.id]?.length || 0) > 0 ||
        visibleCurrentLessons[course.id],
    ) || courses[0];

  const activeCurrentLesson = visibleCurrentLessons[activeCourse.id] || 1;

  const activeProgress = hasMounted
    ? getCourseProgress(activeCourse.id, activeCourse.lessons)
    : 0;

  const activeLessonName =
    lessonNames[activeCourse.id]?.[activeCurrentLesson - 1] ||
    "Course introduction";

  /*
   * Gather recently completed lessons.
   */
  const recentCompleted = courses.flatMap((course) => {
    const completed = visibleCompletedLessons[course.id] || [];

    return completed.map((lessonId) => ({
      courseId: course.id,
      courseTitle: course.title,
      lessonId,
      lessonName:
        lessonNames[course.id]?.[lessonId - 1] || `Lesson ${lessonId}`,
    }));
  });

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navbar */}
      <nav className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            Learnly<span className="text-indigo-600">.</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/courses"
              className="text-sm text-slate-600 hover:text-slate-900"
            >
              Courses
            </Link>

            <Link
              href="/dashboard"
              className="text-sm font-medium text-slate-900"
            >
              Dashboard
            </Link>

            <a href="/resources" className="text-sm text-slate-600">
              Resources
            </a>
          </div>

          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-sm font-semibold text-indigo-700">
            A
          </div>
        </div>
      </nav>

      {/* Dashboard */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Header */}
        <div>
          <p className="text-sm font-medium text-indigo-600">
            Student Dashboard
          </p>

          <h1 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">
            Welcome back, Alex.
          </h1>

          <p className="mt-3 text-slate-600">
            Keep going. You&apos;re making progress.
          </p>
        </div>

        {/* Continue learning */}
        <section className="mt-10">
          <div className="overflow-hidden rounded-2xl bg-slate-900 shadow-xl">
            <div className="grid md:grid-cols-[1fr_320px]">
              {/* Content */}
              <div className="p-7 md:p-9">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-indigo-300">
                    Continue learning
                  </span>

                  <span className="text-xs text-slate-500">
                    {activeCourse.category}
                  </span>
                </div>

                <h2 className="mt-5 text-2xl font-bold text-white">
                  {activeCourse.title}
                </h2>

                <p className="mt-2 text-sm text-slate-400">
                  Lesson {activeCurrentLesson} · {activeLessonName}
                </p>

                {/* Progress */}
                <div className="mt-7 max-w-xl">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Course progress</span>

                    <span className="font-semibold text-white">
                      {activeProgress}%
                    </span>
                  </div>

                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10">
                    <div
                      className="h-full rounded-full bg-indigo-500 transition-all"
                      style={{
                        width: `${activeProgress}%`,
                      }}
                    />
                  </div>
                </div>

                <Link
                  href={`/learn/${activeCourse.id}`}
                  className="mt-7 inline-flex rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Continue learning →
                </Link>
              </div>

              {/* Visual */}
              <div
                className={`hidden bg-gradient-to-br ${activeCourse.color} md:block`}
              >
                <div className="flex h-full items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-6xl font-bold">{activeProgress}%</div>

                    <p className="mt-2 text-sm text-white/70">completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Courses */}
        <section className="mt-14">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold">Your courses</h2>

              <p className="mt-2 text-sm text-slate-500">
                Track your learning progress.
              </p>
            </div>

            <Link
              href="/courses"
              className="text-sm font-semibold text-indigo-600"
            >
              Explore courses →
            </Link>
          </div>

          <div className="mt-7 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => {
              const completed =
                visibleCompletedLessons[course.id]?.length || 0;

              const progress = hasMounted
                ? getCourseProgress(course.id, course.lessons)
                : 0;

              return (
                <div
                  key={course.id}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                >
                  {/* Course image */}
                  <div className={`h-36 bg-gradient-to-br ${course.color}`} />

                  <div className="p-6">
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400">
                      {course.category}
                    </p>

                    <h3 className="mt-2 text-lg font-semibold">
                      {course.title}
                    </h3>

                    <div className="mt-5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-slate-500">
                          {completed}/{course.lessons} lessons
                        </span>

                        <span className="font-semibold text-slate-700">
                          {progress}%
                        </span>
                      </div>

                      <div className="mt-2 h-1.5 rounded-full bg-slate-100">
                        <div
                          className="h-1.5 rounded-full bg-indigo-500 transition-all"
                          style={{
                            width: `${progress}%`,
                          }}
                        />
                      </div>
                    </div>

                    <Link
                      href={`/learn/${course.id}`}
                      className="mt-6 block rounded-lg border border-slate-200 py-2.5 text-center text-sm font-medium hover:bg-slate-50"
                    >
                      {progress > 0 ? "Continue" : "Start course"}
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Recently completed */}
        <section className="mt-14">
          <h2 className="text-2xl font-bold">Recently completed</h2>

          <p className="mt-2 text-sm text-slate-500">
            Lessons you&apos;ve completed across your courses.
          </p>

          <div className="mt-7 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            {recentCompleted.length > 0 ? (
              recentCompleted
                .slice(-5)
                .reverse()
                .map((item, index) => (
                  <div
                    key={`${item.courseId}-${item.lessonId}`}
                    className={`flex items-center justify-between px-6 py-5 ${
                      index !== Math.min(recentCompleted.length, 5) - 1
                        ? "border-b border-slate-100"
                        : ""
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-sm text-emerald-600">
                        ✓
                      </div>

                      <div>
                        <p className="text-sm font-medium">{item.lessonName}</p>

                        <p className="mt-1 text-xs text-slate-500">
                          {item.courseTitle}
                        </p>
                      </div>
                    </div>

                    <Link
                      href={`/learn/${item.courseId}`}
                      className="text-xs font-semibold text-indigo-600"
                    >
                      Review →
                    </Link>
                  </div>
                ))
            ) : (
              <div className="px-6 py-12 text-center">
                <p className="font-medium">No completed lessons yet.</p>

                <p className="mt-2 text-sm text-slate-500">
                  Start a course and your completed lessons will appear here.
                </p>

                <Link
                  href="/courses"
                  className="mt-5 inline-block text-sm font-semibold text-indigo-600"
                >
                  Browse courses →
                </Link>
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
