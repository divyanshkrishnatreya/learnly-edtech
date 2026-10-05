import Link from "next/link";

const courses = [
  {
    title: "Python for Beginners",
    description:
      "Learn Python from scratch and build your first real projects.",
    category: "Development",
    lessons: "24 lessons",
    level: "Beginner",
  },
  {
    title: "UI/UX Design",
    description:
      "Learn how to design beautiful and intuitive digital products.",
    category: "Design",
    lessons: "18 lessons",
    level: "Intermediate",
  },
  {
    title: "Digital Marketing",
    description: "Master the fundamentals of modern digital marketing.",
    category: "Marketing",
    lessons: "21 lessons",
    level: "Beginner",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Navbar */}
      <nav className="border-b border-slate-100">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-2xl font-bold tracking-tight">
            Learnly<span className="text-indigo-600">.</span>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="/courses"
              className="text-sm text-slate-600 hover:text-slate-900"
            >
              Courses
            </Link>

            <Link
              href="/about"
              className="text-sm text-slate-600 hover:text-slate-900"
            >
              About
            </Link>

            <Link
              href="/resources"
              className="text-sm text-slate-600 hover:text-slate-900"
            >
              Resources
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden px-4 py-2 text-sm font-medium text-slate-700 md:block">
              Log in
            </button>

            <button className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800">
              Get started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        <div>
          <div className="mb-6 inline-flex rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-700">
            Learn at your own pace
          </div>

          <h1 className="max-w-3xl text-5xl font-bold leading-tight tracking-tight md:text-6xl">
            Learn skills that
            <span className="text-indigo-600"> move you forward.</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Practical courses, expert instructors, and interactive learning
            experiences designed to help you build skills that matter.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/courses"
              className="rounded-lg bg-indigo-600 px-6 py-3.5 font-medium text-white hover:bg-indigo-700"
            >
              Explore courses
            </Link>

            <button className="rounded-lg border border-slate-200 px-6 py-3.5 font-medium text-slate-700 hover:bg-slate-50">
              How it works
            </button>
          </div>

          <div className="mt-10 flex gap-8 text-sm text-slate-500">
            <div>
              <strong className="text-lg text-slate-900">50+</strong>
              <br />
              Courses
            </div>

            <div>
              <strong className="text-lg text-slate-900">10k+</strong>
              <br />
              Students
            </div>

            <div>
              <strong className="text-lg text-slate-900">4.8/5</strong>
              <br />
              Average rating
            </div>
          </div>
        </div>

        {/* Hero visual */}
        <div className="relative">
          <div className="rounded-3xl bg-slate-100 p-4 shadow-2xl">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-500 p-8">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <p className="text-sm font-medium text-indigo-100">
                    FEATURED COURSE
                  </p>

                  <h2 className="mt-3 max-w-sm text-3xl font-bold text-white">
                    Master the skills that matter.
                  </h2>
                </div>

                <div className="rounded-xl bg-white/10 p-4 backdrop-blur">
                  <div className="flex items-center justify-between text-sm text-white">
                    <span>Your progress</span>
                    <span>72%</span>
                  </div>

                  <div className="mt-3 h-2 rounded-full bg-white/20">
                    <div className="h-2 w-[72%] rounded-full bg-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                Start learning
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight">
                Popular courses
              </h2>

              <p className="mt-3 text-slate-600">
                Explore courses designed to help you learn practical skills.
              </p>
            </div>

            <Link
              href="/courses"
              className="text-sm font-semibold text-indigo-600"
            >
              View all courses →
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {courses.map((course) => (
              <div
                key={course.title}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-48 items-end bg-gradient-to-br from-slate-800 to-slate-600 p-6">
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    {course.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex gap-2 text-xs text-slate-500">
                    <span>{course.level}</span>
                    <span>•</span>
                    <span>{course.lessons}</span>
                  </div>

                  <h3 className="mt-3 text-xl font-semibold">{course.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {course.description}
                  </p>

                  <button className="mt-6 w-full rounded-lg bg-slate-900 py-3 text-sm font-medium text-white hover:bg-slate-800">
                    View course
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Why Learnly
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Everything you need to keep learning
            </h2>

            <p className="mt-4 text-slate-600">
              A complete learning experience built around your pace, your goals,
              and your progress.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Learn through video",
                text: "Watch high-quality lessons whenever and wherever you want.",
              },
              {
                title: "Practice as you learn",
                text: "Interactive exercises and quizzes help turn knowledge into skill.",
              },
              {
                title: "Track your progress",
                text: "See exactly where you are and what you should learn next.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-slate-200 p-7"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  ✓
                </div>

                <h3 className="text-lg font-semibold">{feature.title}</h3>

                <p className="mt-3 leading-7 text-slate-600">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-3xl bg-slate-900 px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to start learning?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Choose a course, learn at your own pace, and start building skills
            that make a difference.
          </p>

          <button className="mt-8 rounded-lg bg-white px-6 py-3.5 font-medium text-slate-900 hover:bg-slate-100">
            Explore courses
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <div className="font-semibold text-slate-900">Learnly.</div>

          <p>© 2026 Learnly. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
