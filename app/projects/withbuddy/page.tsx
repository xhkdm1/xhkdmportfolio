import Image from "next/image";
import Link from "next/link";

const PRODUCT_URL = "https://withbuddy.itsdev.kr/login";
const LANDING_URL = "https://landing-6jhzo92pk-xhkdm1s-projects.vercel.app/";

const resources = [
  {
    title: "Case Study",
    description: "문제 정의부터 의사결정, 검증 과정까지 담은 프로젝트 기록",
    href: "/projects/withbuddy/case-study",
  },
  {
    title: "Design System (WDS)",
    description: "컴포넌트, 토큰, 네이밍 규칙을 정의한 디자인 시스템",
    href: "/projects/withbuddy/wds",
  },
  {
    title: "QA Guide",
    description: "Product Quality Week를 위해 제작한 QA 가이드 문서",
    href: "/projects/withbuddy/qa-guide",
  },
  {
    title: "Information Architecture",
    description: "관리자와 신입사원 관점에서 설계한 정보 구조",
    href: "/projects/withbuddy/ia",
  },
];

export default function WithBuddyPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 text-zinc-950">
      <div className="mx-auto max-w-5xl">
        <section className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm text-zinc-500">
              B2B SaaS · AI · Product Design
            </p>

            <h1 className="mb-6 text-5xl font-semibold tracking-tight">
              WithBuddy
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-zinc-600">
              반복되는 온보딩 응대를 자동화하기 위해 만든 AI 온보딩
              어시스턴트 프로젝트입니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={PRODUCT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
              >
                Try Product ↗
              </a>

              <a
                href={LANDING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-zinc-200 px-5 py-3 text-sm font-medium text-zinc-900 transition hover:border-zinc-300 hover:bg-zinc-50"
              >
                View Landing Page ↗
              </a>
            </div>
          </div>

          <a
            href={PRODUCT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 p-3 transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg"
          >
            <div className="overflow-hidden rounded-[1.2rem] bg-white">
              <Image
                src="/images/withbuddy-thumbnail-v2.png"
                alt="WithBuddy product preview"
                width={1920}
                height={1080}
                className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.01]"
                priority
              />
            </div>

            <div className="flex items-center justify-between px-2 pb-1 pt-4">
              <div>
                <p className="text-sm font-medium text-zinc-900">
                  Live Product
                </p>

                <p className="mt-1 text-sm text-zinc-500">
                  실제 서비스 체험하기
                </p>
              </div>

              <span className="text-lg text-zinc-500">↗</span>
            </div>
          </a>
        </section>

        <section className="mt-20 border-t border-zinc-200 pt-16">
          <div className="mb-8">
            <p className="mb-2 text-sm text-zinc-500">
              Project Documentation
            </p>

            <h2 className="text-3xl font-semibold tracking-tight">
              프로젝트 과정과 산출물
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {resources.map((resource) => (
              <Link
                key={resource.title}
                href={resource.href}
                className="rounded-3xl border border-zinc-200 p-6 transition hover:-translate-y-1 hover:border-zinc-300 hover:bg-zinc-50"
              >
                <h3 className="mb-3 text-xl font-semibold">
                  {resource.title}
                </h3>

                <p className="text-sm leading-relaxed text-zinc-600">
                  {resource.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}