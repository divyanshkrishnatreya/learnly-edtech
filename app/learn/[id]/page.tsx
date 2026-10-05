"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useCourseStore } from "@/store/courseStore";

const lessons = [
  {
    id: 1,
    module: "Getting Started",
    title: "Introduction to Python",
    duration: "08:24",
    video: "/videos/python-introduction.mp4",
  },
  {
    id: 2,
    module: "Getting Started",
    title: "Installing Python",
    duration: "06:18",
  },
  {
    id: 3,
    module: "Getting Started",
    title: "Your First Python Program",
    duration: "12:42",
  },
  {
    id: 4,
    module: "Python Fundamentals",
    title: "Variables and Data Types",
    duration: "14:35",
  },
  {
    id: 5,
    module: "Python Fundamentals",
    title: "Conditions and Logic",
    duration: "11:20",
  },
  {
    id: 6,
    module: "Python Fundamentals",
    title: "Loops",
    duration: "15:42",
  },
  {
    id: 7,
    module: "Python Fundamentals",
    title: "Working with Lists",
    duration: "13:16",
  },
  {
    id: 8,
    module: "Functions",
    title: "Understanding Functions",
    duration: "17:05",
  },
];

const resources = ["Lesson slides", "Python cheat sheet", "Practice exercises"];

const subscribeToHydration = () => () => {};
const getClientHydrationSnapshot = () => true;
const getServerHydrationSnapshot = () => false;

export default function LearningPage() {
  const params = useParams<{ id: string }>();
  const [showResources, setShowResources] = useState(false);
  const hasMounted = useSyncExternalStore(
    subscribeToHydration,
    getClientHydrationSnapshot,
    getServerHydrationSnapshot,
  );
  const {
    completedLessons,
    currentLessons,
    toggleLessonComplete,
    setCurrentLesson,
    getCourseProgress,
  } = useCourseStore();

  const courseId = params.id;
  const currentLesson = hasMounted ? currentLessons[courseId] || 1 : 1;
  const completed = hasMounted ? completedLessons[courseId] || [] : [];
  const lesson = lessons.find((item) => item.id === currentLesson) || lessons[0];
  const currentIndex = lessons.findIndex((item) => item.id === currentLesson);
  const progress = hasMounted
    ? getCourseProgress(courseId, lessons.length)
    : 0;

  const selectLesson = (id: number) => {
    setCurrentLesson(courseId, id);
    setShowResources(false);
  };

  const toggleComplete = () => {
    toggleLessonComplete(courseId, currentLesson);
  };

  const nextLesson = () => {
    if (currentIndex < lessons.length - 1) {
      setCurrentLesson(courseId, lessons[currentIndex + 1].id);
      setShowResources(false);
    }
  };

  const previousLesson = () => {
    if (currentIndex > 0) {
      setCurrentLesson(courseId, lessons[currentIndex - 1].id);
      setShowResources(false);
    }
  };

  const groupedLessons = lessons.reduce(
    (groups, item) => {
      if (!groups[item.module]) {
        groups[item.module] = [];
      }

      groups[item.module].push(item);

      return groups;
    },
    {} as Record<string, typeof lessons>,
  );

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950">
        <div className="flex h-16 items-center justify-between px-5">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-xl font-bold tracking-tight">
              Learnly<span className="text-indigo-400">.</span>
            </Link>

            <div className="hidden h-6 w-px bg-white/10 md:block" />

            <div className="hidden md:block">
              <p className="text-sm font-medium">Python for Beginners</p>

              <p className="text-xs text-slate-500">
                {completed.length} of {lessons.length} lessons completed
              </p>
            </div>
          </div>

          <Link
            href={`/courses/${courseId}`}
            className="text-sm text-slate-400 hover:text-white"
          >
            Exit course
          </Link>
        </div>
      </header>

      <div className="h-1 bg-white/5">
        <div
          className="h-full bg-indigo-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex min-h-[calc(100vh-68px)] flex-col lg:flex-row">
        <aside className="order-2 w-full border-t border-white/10 bg-slate-900 lg:order-1 lg:w-80 lg:border-r lg:border-t-0">
          <div className="border-b border-white/10 p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">Course content</p>

                <p className="mt-1 text-xs text-slate-500">
                  {completed.length}/{lessons.length} completed
                </p>
              </div>

              <span className="text-sm font-semibold text-indigo-400">
                {progress}%
              </span>
            </div>

            <div className="mt-4 h-1.5 rounded-full bg-white/10">
              <div
                className="h-1.5 rounded-full bg-indigo-500 transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <div className="max-h-[65vh] overflow-y-auto">
            {Object.entries(groupedLessons).map(
              ([module, moduleLessons], moduleIndex) => (
                <div key={module}>
                  <div className="px-5 pb-2 pt-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Module {moduleIndex + 1}
                    </p>

                    <p className="mt-1 text-sm font-medium text-slate-300">
                      {module}
                    </p>
                  </div>

                  <div>
                    {moduleLessons.map((item) => {
                      const isActive = currentLesson === item.id;
                      const isComplete = completed.includes(item.id);

                      return (
                        <button
                          key={item.id}
                          onClick={() => selectLesson(item.id)}
                          className={`flex w-full items-center gap-3 px-5 py-3 text-left transition ${
                            isActive ? "bg-indigo-500/10" : "hover:bg-white/5"
                          }`}
                        >
                          <div
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-xs ${
                              isComplete
                                ? "border-indigo-500 bg-indigo-500 text-white"
                                : isActive
                                  ? "border-indigo-400 text-indigo-400"
                                  : "border-white/20 text-slate-500"
                            }`}
                          >
                            {isComplete ? "OK" : item.id}
                          </div>

                          <div className="min-w-0 flex-1">
                            <p
                              className={`truncate text-sm ${
                                isActive
                                  ? "font-medium text-indigo-400"
                                  : "text-slate-300"
                              }`}
                            >
                              {item.title}
                            </p>

                            <p className="mt-0.5 text-xs text-slate-600">
                              {item.duration}
                            </p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ),
            )}
          </div>
        </aside>

        <section className="order-1 flex-1 lg:order-2">
          <div className="mx-auto max-w-5xl px-5 py-8 md:px-8">
            <div className="overflow-hidden rounded-xl bg-black shadow-2xl">
              {lesson.video ? (
                <video
                  key={lesson.video}
                  className="aspect-video w-full"
                  controls
                  src={lesson.video}
                />
              ) : (
                <div className="flex aspect-video flex-col items-center justify-center bg-gradient-to-br from-indigo-950 via-slate-900 to-black px-6 text-center">
                  <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-white text-slate-900 shadow-xl">
                    <span className="text-sm font-semibold">Play</span>
                  </div>

                  <p className="text-lg font-semibold">{lesson.title}</p>

                  <p className="mt-2 text-sm text-slate-400">
                    Video lesson - {lesson.duration}
                  </p>
                </div>
              )}
            </div>

            <div className="mt-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-400">
                  Module {currentIndex + 1}
                </span>

                {completed.includes(currentLesson) && (
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                    Completed
                  </span>
                )}
              </div>

              <h1 className="mt-4 text-2xl font-bold md:text-3xl">
                {lesson.title}
              </h1>

              <p className="mt-3 max-w-2xl leading-7 text-slate-400">
                In this lesson, you&apos;ll learn the fundamental concepts you
                need to continue through the course and start applying what
                you&apos;ve learned.
              </p>
            </div>

            <div className="mt-8 border-b border-white/10">
              <div className="flex gap-7">
                <button
                  onClick={() => setShowResources(false)}
                  className={`border-b-2 pb-4 text-sm font-medium ${
                    !showResources
                      ? "border-indigo-500 text-white"
                      : "border-transparent text-slate-500"
                  }`}
                >
                  Overview
                </button>

                <button
                  onClick={() => setShowResources(true)}
                  className={`border-b-2 pb-4 text-sm font-medium ${
                    showResources
                      ? "border-indigo-500 text-white"
                      : "border-transparent text-slate-500"
                  }`}
                >
                  Resources
                </button>
              </div>
            </div>

            <div className="py-7">
              {!showResources ? (
                <div>
                  <h2 className="font-semibold">About this lesson</h2>

                  <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-400">
                    Follow along with the lesson video and complete the
                    exercises before moving to the next lesson. You can return
                    to any previous lesson whenever you need to review the
                    material.
                  </p>
                </div>
              ) : (
                <div>
                  <h2 className="font-semibold">Lesson resources</h2>

                  <div className="mt-4 space-y-3">
                    {resources.map((resource) => (
                      <button
                        key={resource}
                        className="flex w-full items-center justify-between rounded-lg border border-white/10 px-4 py-4 text-left transition hover:bg-white/5"
                      >
                        <span className="text-sm text-slate-300">
                          {resource}
                        </span>

                        <span className="text-xs text-indigo-400">
                          Download
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-3 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
              <button
                onClick={previousLesson}
                disabled={currentIndex === 0}
                className="rounded-lg border border-white/10 px-5 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-30"
              >
                Previous lesson
              </button>

              <div className="flex gap-3">
                <button
                  onClick={toggleComplete}
                  className="rounded-lg border border-indigo-500/30 px-5 py-3 text-sm font-medium text-indigo-400 transition hover:bg-indigo-500/10"
                >
                  {completed.includes(currentLesson)
                    ? "Completed"
                    : "Mark as complete"}
                </button>

                <button
                  onClick={nextLesson}
                  disabled={currentIndex === lessons.length - 1}
                  className="rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-500 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  Next lesson
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
