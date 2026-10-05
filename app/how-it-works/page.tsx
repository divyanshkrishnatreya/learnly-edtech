import Link from "next/link";

const steps = [
  {
    number: "01",
    title: "Choose a course",
    description:
      "Explore courses designed around practical skills and choose one that matches your goals.",
  },
  {
    number: "02",
    title: "Learn at your own pace",
    description:
      "Watch video lessons, follow the curriculum, and learn whenever it works best for you.",
  },
  {
    number: "03",
    title: "Practice what you learn",
    description:
      "Reinforce your knowledge through exercises, quizzes, and practical activities.",
  },
  {
    number: "04",
    title: "Track your progress",
    description:
      "Your completed lessons and course progress are saved so you always know where you stand.",
  },
];

const features = [
  {
    title: "Video-based learning",
    description:
      "Learn through structured video lessons that you can watch whenever you want.",
  },
  {
    title: "Self-paced modules",
    description:
      "Move through lessons at your own speed without having to follow a fixed schedule.",
  },
  {
    title: "Interactive practice",
    description:
      "Turn knowledge into skills through quizzes, exercises, and hands-on activities.",
  },
  {
    title: "Progress tracking",
    description:
      "Keep track of completed lessons and see how far you've progressed through each course.",
  },
];

export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      {/* Navbar */}
      <nav className="border-b border-slate-100">
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
            <Link
              href="/login"
              className="hidden px-4 py-2 text-sm font-medium text-slate-700 md:block"
            >
              Log in
            </Link>

            <Link
              href="/courses"
              className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Get started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-slate-50 px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
            How Learnly works
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
            Learn skills through a simple,
            <span className="text-indigo-600"> structured experience.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Learnly combines video lessons, practical exercises, and progress
            tracking into one learning experience designed around your pace.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Your learning journey
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              From your first lesson to real progress
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {steps.map((step) => (
              <div
                key={step.number}
                className="rounded-2xl border border-slate-200 p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="text-sm font-bold text-indigo-600">
                  {step.number}
                </span>

                <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              The Learnly experience
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Everything you need to keep learning
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.title} className="rounded-2xl bg-white p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                  ✓
                </div>

                <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl rounded-3xl bg-slate-900 px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to start learning?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-slate-400">
            Choose a course and start building skills at your own pace.
          </p>

          <Link
            href="/courses"
            className="mt-8 inline-block rounded-lg bg-white px-6 py-3.5 font-medium text-slate-900 hover:bg-slate-100"
          >
            Explore courses
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="font-semibold text-slate-900">
            Learnly.
          </Link>

          <p>© 2026 Learnly. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
