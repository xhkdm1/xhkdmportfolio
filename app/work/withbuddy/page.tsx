import Link from "next/link";

const resources = [
  {
    title: "Case Study",
    description: "문제 정의부터 의사결정, 검증 과정까지 담은 프로젝트 기록",
    href: "/work/withbuddy/case-study",
  },
  {
    title: "Design System (WDS)",
    description: "컴포넌트, 토큰, 네이밍 규칙을 정의한 디자인 시스템",
    href: "/work/withbuddy/wds",
  },
  {
    title: "QA Guide",
    description: "Product Quality Week를 위해 제작한 QA 가이드 문서",
    href: "/work/withbuddy/qa-guide",
  },
  {
    title: "Information Architecture",
    description: "관리자와 신입사원 관점에서 설계한 정보 구조",
    href: "/work/withbuddy/ia",
  },
];

export default function WithBuddyPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 text-zinc-950">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm text-zinc-500">
          B2B SaaS · AI · Product Design
        </p>

        <h1 className="mb-6 text-5xl font-semibold tracking-tight">
          WithBuddy
        </h1>

        <p className="mb-16 max-w-2xl text-lg leading-relaxed text-zinc-600">
          반복되는 온보딩 응대를 자동화하기 위해 만든
          AI 온보딩 어시스턴트 프로젝트입니다.
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          {resources.map((resource) => (
            <Link
              key={resource.title}
              href={resource.href}
              className="rounded-3xl border border-zinc-200 p-6 transition hover:border-zinc-300 hover:bg-zinc-50"
            >
              <h2 className="mb-3 text-xl font-semibold">
                {resource.title}
              </h2>

              <p className="text-sm leading-relaxed text-zinc-600">
                {resource.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
