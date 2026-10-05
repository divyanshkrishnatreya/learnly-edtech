import Link from "next/link";

const courses = {
  python: {
    title: "Python for Beginners",
    category: "Development",
    level: "Beginner",
    lessons: 24,
    duration: "12 hours",
    rating: 4.8,
    students: "2,450",
    instructor: "Alex Morgan",
    description:
      "Learn Python from scratch through practical lessons, exercises, and projects. By the end of this course, you'll have the foundation you need to start building real applications.",
    color: "from-indigo-600 to-violet-500",
    modules: [
      {
        title: "Getting Started with Python",
        lessons: [
          "Introduction to Python",
          "Installing Python",
          "Your First Python Program",
        ],
      },
      {
        title: "Python Fundamentals",
        lessons: [
          "Variables and Data Types",
          "Conditions and Logic",
          "Loops",
          "Working with Lists",
        ],
      },
      {
        title: "Functions and Modules",
        lessons: [
          "Understanding Functions",
          "Function Arguments",
          "Modules and Packages",
        ],
      },
      {
        title: "Build Your First Project",
        lessons: [
          "Project Setup",
          "Building the Application",
          "Testing and Improvements",
        ],
      },
    ],
  },

  "ui-ux": {
    title: "UI/UX Design",
    category: "Design",
    level: "Intermediate",
    lessons: 18,
    duration: "8 hours",
    rating: 4.9,
    students: "1,820",
    instructor: "Sarah Williams",
    description:
      "Learn how to design beautiful, intuitive digital products using modern UI/UX principles.",
    color: "from-pink-500 to-orange-400",
    modules: [
      {
        title: "Design Fundamentals",
        lessons: ["Introduction to UI/UX", "Visual Hierarchy", "Typography"],
      },
      {
        title: "User Experience",
        lessons: ["Understanding Users", "User Flows", "Wireframing"],
      },
      {
        title: "Interface Design",
        lessons: ["Color Systems", "Components", "Responsive Design"],
      },
    ],
  },

  marketing: {
    title: "Digital Marketing",
    category: "Marketing",
    level: "Beginner",
    lessons: 21,
    duration: "10 hours",
    rating: 4.7,
    students: "3,120",
    instructor: "Michael Carter",
    description:
      "Understand the fundamentals of modern digital marketing and learn how to build effective online campaigns.",
    color: "from-emerald-500 to-teal-500",
    modules: [
      {
        title: "Marketing Fundamentals",
        lessons: [
          "Introduction to Digital Marketing",
          "Understanding Your Audience",
          "Setting Marketing Goals",
        ],
      },
      {
        title: "Content Marketing",
        lessons: ["Creating Content", "Content Strategy", "Distribution"],
      },
      {
        title: "Social Media",
        lessons: [
          "Social Platforms",
          "Building an Audience",
          "Measuring Results",
        ],
      },
    ],
  },
};

type CourseId = keyof typeof courses;

export default async function CoursePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const course = courses[id as CourseId];

  if (!course) {
    return (
      <main className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Course not found</h1>

          <Link href="/courses" className="mt-5 inline-block text-indigo-600">
            ← Back to courses
          </Link>
        </div>
      </main>
    );
  }

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
              className="text-sm font-medium text-slate-900"
            >
              Courses
            </Link>

            <a href="/about" className="text-sm text-slate-600">
              About
            </a>

            <a href="/resources" className="text-sm text-slate-600">
              Resources
            </a>
          </div>

          <button className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white">
            Get started
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[1fr_400px] md:items-center">
          <div>
            <Link
              href="/courses"
              className="text-sm font-medium text-slate-500 hover:text-slate-900"
            >
              ← Back to courses
            </Link>

            <div className="mt-8">
              <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700">
                {course.category}
              </span>

              <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight md:text-5xl">
                {course.title}
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                {course.description}
              </p>
            </div>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-600">
              <span>
                <strong className="text-slate-900">★ {course.rating}</strong>{" "}
                rating
              </span>

              <span>
                <strong className="text-slate-900">{course.students}</strong>{" "}
                students
              </span>

              <span>
                <strong className="text-slate-900">{course.lessons}</strong>{" "}
                lessons
              </span>

              <span>
                <strong className="text-slate-900">{course.duration}</strong>
              </span>
            </div>

            <p className="mt-5 text-sm text-slate-500">
              Created by{" "}
              <span className="font-medium text-slate-900">
                {course.instructor}
              </span>
            </p>
          </div>

          {/* Course preview */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
            <div
              className={`flex aspect-video items-center justify-center bg-gradient-to-br ${course.color}`}
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg">
                <span className="ml-1 text-xl">▶</span>
              </div>
            </div>

            <div className="p-6">
              <p className="text-sm text-slate-500">Course access</p>

              <p className="mt-1 text-2xl font-bold">Full course access</p>

              <Link
                href={`/learn/${id}`}
                className="mt-5 block rounded-lg bg-indigo-600 py-3.5 text-center text-sm font-semibold text-white hover:bg-indigo-700"
              >
                Start learning
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-16 md:grid-cols-[1fr_320px]">
        <div>
          {/* What you'll learn */}
          <div>
            <h2 className="text-2xl font-bold">What you&apos;ll learn</h2>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {[
                "Understand the core concepts",
                "Apply what you learn through exercises",
                "Build practical projects",
                "Develop skills you can use immediately",
              ].map((item) => (
                <div key={item} className="flex gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-indigo-100 text-xs text-indigo-600">
                    ✓
                  </div>

                  <p className="text-sm leading-6 text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Curriculum */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold">Course curriculum</h2>

            <p className="mt-2 text-sm text-slate-500">
              {course.modules.length} modules · {course.lessons} lessons ·{" "}
              {course.duration}
            </p>

            <div className="mt-6 overflow-hidden rounded-xl border border-slate-200">
              {course.modules.map((module, index) => (
                <div
                  key={module.title}
                  className="border-b border-slate-200 last:border-0"
                >
                  <div className="flex items-center justify-between bg-slate-50 px-5 py-4">
                    <div>
                      <p className="text-sm font-semibold">
                        {index + 1}. {module.title}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        {module.lessons.length} lessons
                      </p>
                    </div>

                    <span className="text-slate-400">+</span>
                  </div>

                  <div className="divide-y divide-slate-100">
                    {module.lessons.map((lesson, lessonIndex) => (
                      <div
                        key={lesson}
                        className="flex items-center gap-4 px-5 py-4"
                      >
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-xs text-slate-500">
                          {lessonIndex + 1}
                        </div>

                        <span className="text-sm text-slate-600">{lesson}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside>
          <div className="sticky top-8 rounded-2xl border border-slate-200 p-6">
            <h3 className="font-semibold">This course includes</h3>

            <div className="mt-5 space-y-4 text-sm text-slate-600">
              <div className="flex justify-between">
                <span>Video lessons</span>
                <span className="font-medium text-slate-900">
                  {course.lessons}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Course duration</span>
                <span className="font-medium text-slate-900">
                  {course.duration}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Level</span>
                <span className="font-medium text-slate-900">
                  {course.level}
                </span>
              </div>

              <div className="flex justify-between">
                <span>Certificate</span>
                <span className="font-medium text-slate-900">Included</span>
              </div>
            </div>

            <Link
              href={`/learn/${id}`}
              className="mt-7 block rounded-lg bg-slate-900 py-3.5 text-center text-sm font-semibold text-white hover:bg-slate-800"
            >
              Start learning
            </Link>
          </div>
        </aside>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200">
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
