import Link from "next/link";

export default function WDSPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 text-zinc-950">
      <div className="mx-auto max-w-5xl">
        <div className="mb-3 text-sm text-zinc-500">
            <Link
                href="/projects/withbuddy"
                className="hover:text-zinc-900"
            >
                WithBuddy
            </Link>

            <span className="mx-2">·</span>

            <span>Design System</span>
        </div>

        <h1 className="mb-6 text-5xl font-semibold tracking-tight">
          WithBuddy Design System
        </h1>

        <p className="mb-8 max-w-2xl text-lg leading-relaxed text-zinc-600">
          컴포넌트 일관성, 확장성, 빠른 협업을 위해 구축한 디자인 시스템입니다.
        </p>

        <a
          href="https://www.figma.com/design/napjZ2Pw9ctp50W6rOBPRi/3%ED%8C%80_WDS?node-id=1-4907&t=oRhiPByzdiVATfEa-1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-2xl border border-zinc-200 px-5 py-3 text-sm font-medium transition hover:bg-zinc-50"
        >
          Open in Figma →
        </a>
      </div>
    </main>
  );
}