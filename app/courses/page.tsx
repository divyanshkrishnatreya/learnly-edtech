"use client";

import { useState } from "react";
import Link from "next/link";

const courses = [
  {
    id: "python",
    title: "Python for Beginners",
    description:
      "Learn Python from scratch and build your first real projects.",
    category: "Development",
    lessons: 24,
    level: "Beginner",
    rating: 4.8,
  },
  {
    id: "ui-ux",
    title: "UI/UX Design",
    description:
      "Learn how to design beautiful and intuitive digital products.",
    category: "Design",
    lessons: 18,
    level: "Intermediate",
    rating: 4.9,
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    description: "Master the fundamentals of modern digital marketing.",
    category: "Marketing",
    lessons: 21,
    level: "Beginner",
    rating: 4.7,
  },
  {
    id: "javascript",
    title: "Modern JavaScript",
    description: "Build interactive web applications with modern JavaScript.",
    category: "Development",
    lessons: 32,
    level: "Intermediate",
    rating: 4.9,
  },
  {
    id: "graphic-design",
    title: "Graphic Design Fundamentals",
    description:
      "Understand typography, composition, color and visual hierarchy.",
    category: "Design",
    lessons: 16,
    level: "Beginner",
    rating: 4.8,
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    description: "Learn how to create content and grow an audience online.",
    category: "Marketing",
    lessons: 20,
    level: "Beginner",
    rating: 4.6,
  },
];

const categories = ["All", "Development", "Design", "Marketing"];

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter((course) => {
    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;

    const matchesSearch =
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.description.toLowerCase().includes(search.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Navbar */}
      <nav className="border-b border-slate-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            Learnly<span className="text-indigo-600">.</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link href="/courses" className="text-sm font-medium text-slate-900">
              Courses
            </Link>

            <a href="/about" className="text-sm text-slate-600 hover:text-slate-900">
              About
            </a>

            <a href="/resources" className="text-sm text-slate-600 hover:text-slate-900">
              Resources
            </a>
          </div>

          <button className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800">
            Get started
          </button>
        </div>
      </nav>

      {/* Header */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            Explore
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Find your next course.
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Learn practical skills from expert-led courses and study whenever it
            works for you.
          </p>
        </div>
      </section>

      {/* Course section */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        {/* Search */}
        <div className="relative max-w-xl">
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-white px-5 py-4 text-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        {/* Categories */}
        <div className="mt-8 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-5 py-2.5 text-sm font-medium transition ${
                selectedCategory === category
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="mt-10">
          <div className="mb-6 flex items-center justify-between">
            <p className="text-sm text-slate-500">
              {filteredCourses.length} courses available
            </p>

            <select className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 outline-none">
              <option>Most popular</option>
              <option>Highest rated</option>
              <option>Newest</option>
            </select>
          </div>

          {/* Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredCourses.map((course) => (
                <Link
                  key={course.id}
                  href={`/courses/${course.id}`}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl"
                >
                  {/* Image */}
                  <div className="relative h-52 overflow-hidden bg-gradient-to-br from-indigo-600 to-violet-500">
                    <div className="absolute inset-0 bg-black/10" />

                    <div className="absolute bottom-5 left-5">
                      <span className="rounded-full bg-white/15 px-3 py-1.5 text-xs font-medium text-white backdrop-blur">
                        {course.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span>{course.level}</span>
                      <span>•</span>
                      <span>{course.lessons} lessons</span>
                    </div>

                    <h2 className="mt-3 text-xl font-semibold group-hover:text-indigo-600">
                      {course.title}
                    </h2>

                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      {course.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm">
                        <span>★</span>
                        <span className="font-medium">{course.rating}</span>
                      </div>

                      <span className="text-sm font-semibold text-indigo-600">
                        View course →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-slate-300 py-20 text-center">
              <h2 className="text-xl font-semibold">No courses found</h2>

              <p className="mt-2 text-slate-500">
                Try a different search or category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-12 border-t border-slate-200">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="font-semibold">
            Learnly<span className="text-indigo-600">.</span>
          </div>

          <p className="mt-2 text-sm text-slate-500">Learn. Practice. Grow.</p>
        </div>
      </footer>
    </main>
  );
}
