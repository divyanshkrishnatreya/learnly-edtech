import Link from "next/link";

export default function AboutPage() {
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
              className="text-sm font-medium text-slate-900"
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

          <Link
            href="/courses"
            className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
          >
            Get started
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center md:py-28">
        <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
          About Learnly
        </p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
          Learning should move you forward.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Learnly is built to make practical learning simple, accessible, and
          focused on skills that actually matter.
        </p>
      </section>

      {/* Mission */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Our mission
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Learn useful skills. Build real things.
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              We believe learning works best when you can immediately apply
              what you learn. That is why Learnly focuses on structured
              courses, practical lessons, exercises, and projects.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Instead of overwhelming you with information, Learnly is designed
              to help you learn at your own pace and make consistent progress.
            </p>
          </div>

          <div className="rounded-3xl bg-slate-900 p-8 text-white shadow-xl">
            <div className="grid gap-6 sm:grid-cols-3 md:grid-cols-1">
              <div>
                <p className="text-3xl font-bold">50+</p>
                <p className="mt-1 text-sm text-slate-400">
                  Courses and learning paths
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold">10k+</p>
                <p className="mt-1 text-sm text-slate-400">
                  Learners
                </p>
              </div>

              <div>
                <p className="text-3xl font-bold">4.8/5</p>
                <p className="mt-1 text-sm text-slate-400">
                  Average learner rating
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning philosophy */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              How we think about learning
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight">
              Simple principles, better learning
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-7">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                01
              </div>

              <h3 className="text-lg font-semibold">Learn by doing</h3>

              <p className="mt-3 leading-7 text-slate-600">
                Concepts become easier to understand when you can apply them
                through exercises and real projects.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-7">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                02
              </div>

              <h3 className="text-lg font-semibold">Go at your pace</h3>

              <p className="mt-3 leading-7 text-slate-600">
                Learn when you want, revisit difficult lessons, and build a
                learning routine that works for you.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-7">
              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
                03
              </div>

              <h3 className="text-lg font-semibold">Focus on progress</h3>

              <p className="mt-3 leading-7 text-slate-600">
                Track where you are, understand what comes next, and keep
                moving forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-7xl rounded-3xl bg-indigo-600 px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to start learning?
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-indigo-100">
            Explore our courses and start building skills that move you
            forward.
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