import Link from "next/link";

const resources = [
  {
    category: "Learning Guide",
    title: "How to Learn Programming Effectively",
    description:
      "A practical guide to building strong programming fundamentals, practicing consistently, and working on real projects.",
    type: "Guide",
  },
  {
    category: "Career",
    title: "Getting Started in Tech",
    description:
      "Understand the skills, projects, and learning habits that can help you begin your career in technology.",
    type: "Article",
  },
  {
    category: "Programming",
    title: "Python Cheat Sheet",
    description:
      "A quick reference for Python fundamentals including variables, loops, functions, lists, dictionaries, and more.",
    type: "Cheat Sheet",
  },
  {
    category: "Design",
    title: "UI/UX Design Fundamentals",
    description:
      "Learn the core principles behind creating simple, intuitive, and user-friendly digital experiences.",
    type: "Guide",
  },
  {
    category: "Productivity",
    title: "Building Better Study Habits",
    description:
      "Practical techniques for staying consistent, managing distractions, and getting more from your study sessions.",
    type: "Article",
  },
  {
    category: "Projects",
    title: "Project Ideas for Beginners",
    description:
      "A collection of practical project ideas designed to help you turn what you learn into something you can actually build.",
    type: "Ideas",
  },
];

export default function Resources() {
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
              className="text-sm font-medium text-slate-900"
            >
              Resources
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <button className="hidden px-4 py-2 text-sm font-medium text-slate-700 md:block">
              Log in
            </button>

            <Link
              href="/courses"
              className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800"
            >
              Get started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Learn more
            </p>

            <h1 className="mt-3 text-5xl font-bold tracking-tight md:text-6xl">
              Resources to help you{" "}
              <span className="text-indigo-600">keep learning.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Explore practical guides, cheat sheets, project ideas, and
              learning resources designed to help you build useful skills.
            </p>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                Explore
              </p>

              <h2 className="mt-2 text-3xl font-bold tracking-tight">
                Featured resources
              </h2>

              <p className="mt-3 text-slate-600">
                Useful material to support your learning journey.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <article
                key={resource.title}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex h-40 items-end bg-gradient-to-br from-indigo-600 to-violet-500 p-6">
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                    {resource.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    {resource.type}
                  </div>

                  <h3 className="mt-3 text-xl font-semibold">
                    {resource.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {resource.description}
                  </p>

                  <button className="mt-6 text-sm font-semibold text-indigo-600 transition group-hover:text-indigo-700">
                    Explore resource →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <div className="rounded-3xl bg-slate-900 px-8 py-14 text-white md:px-16">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-400">
              Keep learning
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
              Ready to put your knowledge into practice?
            </h2>

            <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
              Explore our courses and start building skills through practical,
              structured learning.
            </p>

            <Link
              href="/courses"
              className="mt-8 inline-block rounded-lg bg-indigo-600 px-6 py-3.5 font-medium text-white hover:bg-indigo-500"
            >
              Explore courses
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-100 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-6 md:flex-row md:items-center">
          <Link href="/" className="text-xl font-bold">
            Learnly<span className="text-indigo-600">.</span>
          </Link>

          <p className="text-sm text-slate-500">
            Learn practical skills. Build your future.
          </p>
        </div>
      </footer>
    </main>
  );
}
