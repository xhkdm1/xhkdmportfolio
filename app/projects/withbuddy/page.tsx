import Image from "next/image";
import Link from "next/link";

const PRODUCT_URL = "https://withbuddy.itsdev.kr/login";

const LANDING_URL =
  "https://landing-6jhzo92pk-xhkdm1s-projects.vercel.app/";

const contributions = [
  {
    number: "01",
    category: "Product Discovery",
    title: "문제를 발견하고 타깃을 구체화했습니다.",
    items: [
      "신입사원 대상 필드 인터뷰 진행 및 온보딩 Pain Point 도출",
      "설문·인터뷰 결과 분석을 통한 문제 정의 과정 참여",
      "User와 Buyer가 다른 B2B SaaS 구조 발견 및 포지셔닝 논의",
      "신입·담당자 Persona 제작",
      "Customer Journey Map 제작 및 기회 영역 도출",
    ],
  },
  {
    number: "02",
    category: "Product Design",
    title: "발견한 문제를 제품 경험으로 연결했습니다.",
    items: [
      "Landing IA 및 UX Writing 설계",
      "구매자 중심 메시지 전략과 Hero 카피 재설계",
      "Core Loop 시나리오 설계 및 시각화",
      "Admin Console 정보 구조와 운영 UX 설계",
      "신입용 MyBuddy 채팅 경험 설계",
    ],
  },
  {
    number: "03",
    category: "Design System & Delivery",
    title: "디자인과 구현이 같은 기준을 사용하도록 했습니다.",
    items: [
      "WDS(WithBuddy Design System) 구축",
      "디자인 토큰 및 컴포넌트 규칙 정의",
      "Screen ID 및 Annotation 시스템 구축",
      "Figma와 코드의 네이밍 기준 정리",
      "개발 핸드오프 프로세스 정립",
    ],
  },
];

const resources = [
  {
    title: "Case Study",
    description: "문제 발견부터 제품 전략, 설계와 검증까지 정리한 기록",
    href: "/projects/withbuddy/case-study",
    label: "Product Thinking",
  },
  {
    title: "Design System (WDS)",
    description: "협업과 구현을 잇기 위해 구축한 디자인 시스템",
    href: "/projects/withbuddy/wds",
    label: "System Design",
  },
  {
    title: "QA Guide",
    description: "Product Quality Week를 위해 제작한 QA 가이드 문서",
    href: "/projects/withbuddy/qa-guide",
    label: "Quality Assurance",
  },
  {
    title: "Information Architecture",
    description: "관리자와 신입사원 관점에서 설계한 정보 구조",
    href: "/projects/withbuddy/ia",
    label: "Structure",
  },
];

export default function WithBuddyPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 text-zinc-950">
      <div className="mx-auto max-w-5xl">
        {/* Hero */}
        <section className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 text-sm text-zinc-500">
              B2B SaaS · AI Agent · Product Design
            </p>

            <h1 className="mb-6 text-5xl font-semibold tracking-tight">
              WithBuddy
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-zinc-600">
              반복되는 온보딩 문의를 문서 기반 AI가 먼저 처리하고,
              담당자가 핵심 업무에 집중할 수 있도록 설계한 AI 온보딩
              에이전트입니다.
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
                draggable={false}
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

        {/* Documentation */}
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
                className="group rounded-3xl border border-zinc-200 p-6 transition hover:-translate-y-1 hover:border-zinc-300 hover:bg-zinc-50"
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="mb-3 text-xs font-medium text-zinc-400">
                      {resource.label}
                    </p>

                    <h3 className="text-xl font-semibold">
                      {resource.title}
                    </h3>
                  </div>

                  <span className="text-zinc-400 transition group-hover:translate-x-1 group-hover:text-zinc-900">
                    →
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                  {resource.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* Contribution */}
        <section className="mt-20 border-t border-zinc-200 pt-16">
          <div className="mb-10 max-w-2xl">
            <p className="mb-2 text-sm text-zinc-500">My Contribution</p>

            <h2 className="text-3xl font-semibold tracking-tight">
              이 프로젝트에서 담당한 역할
            </h2>

            <p className="mt-4 text-base leading-relaxed text-zinc-600">
              리서치에서 발견한 문제를 제품 구조와 화면으로 구체화하고,
              디자인 시스템과 핸드오프 기준까지 연결했습니다.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {contributions.map((contribution) => (
              <article
                key={contribution.number}
                className="flex h-full flex-col rounded-3xl border border-zinc-200 bg-white p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm font-medium text-zinc-500">
                    {contribution.category}
                  </p>

                  <span className="text-sm text-zinc-300">
                    {contribution.number}
                  </span>
                </div>

                <h3 className="mt-5 text-xl font-semibold leading-snug tracking-tight">
                  {contribution.title}
                </h3>

                <ul className="mt-6 space-y-3">
                  {contribution.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-relaxed text-zinc-600"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.65rem] h-1 w-1 shrink-0 rounded-full bg-zinc-400"
                      />

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}