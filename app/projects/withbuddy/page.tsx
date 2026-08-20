import Image from "next/image";
import Link from "next/link";
import TrialAccountGuide from "./TrialAccountGuide";
const PRODUCT_URL = "https://withbuddy.itsdev.kr/login";

const LANDING_URL =
  "https://landing-psi-ashen-98.vercel.app/";

const contributions = [
  {
    number: "01",
    category: "Product Discovery",
    title: "직접 확인한 문제를 B2B 관점으로 구조화했습니다.",
    items: [
      "신입 필드 인터뷰 직접 설계·진행",
      "추가 인터뷰·설문 분석 참여",
      "User / Buyer 문제 구조화",
      "50인 이하 중소기업·스타트업 타깃 논의 참여",
    ],
  },
  {
    number: "02",
    category: "Product Design",
    title: "발견한 문제를 제품 경험으로 연결했습니다.",
    items: [
      "MyBuddy · Admin Console UX 설계",
      "미답변과 문서 보강을 연결한 운영 흐름 설계",
      "계정·문서·상태·Validation·예외 화면 설계",
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
      "Handoff와 QA 기준 정리",
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
];

export default function WithBuddyPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-12">
        {/* Hero */}
        <section className="pb-2 pt-28 sm:pb-4 sm:pt-36 lg:pb-6 lg:pt-40">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
            <p className="mb-3 text-sm text-zinc-500">
              B2B SaaS · AI Agent · Product Design
            </p>

            <h1 className="mt-3 text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              WithBuddy
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-600 sm:text-xl sm:leading-9">
              반복되는 온보딩 문의를 문서 기반 AI가 먼저 처리하고,
              미답변은 담당자의 문서 보강으로 연결한 B2B 온보딩
              서비스입니다.
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
                  src="/images/withbuddy/withbuddy-thumbnail-v2.png"
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
          </div>

          <TrialAccountGuide />

          <div className="mt-12 space-y-3 rounded-[2rem] border border-zinc-200 bg-zinc-50 p-3 sm:mt-16 sm:space-y-4 sm:p-4">
            <dl className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {[
                ["Role", "Product Designer"],
                ["Team", "6인"],
                ["Duration", "2026.03 – 07"],
                ["Tools", "Figma"],
              ].map(([label, value]) => (
                <div key={label} className="flex min-h-[112px] min-w-0 flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-5 sm:min-h-[124px] sm:p-6">
                  <dt className="text-xs font-medium uppercase tracking-[0.12em] text-zinc-400">{label}</dt>
                  <dd className="mt-5 break-words text-base font-semibold leading-6 tracking-[-0.01em] text-zinc-900 sm:text-lg">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="grid gap-3 sm:gap-4 lg:grid-cols-2">
              <div className="flex h-full min-h-[168px] flex-col rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7">
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-zinc-400">Contribution</p>
                <p className="mt-5 text-xl font-semibold leading-7 tracking-[-0.02em]">Product Design · Design System · QA</p>
                <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-600">제품 UI와 Admin Console, WDS, 화면 상태와 QA 기준을 설계했습니다.</p>
              </div>

              <div className="flex h-full min-h-[168px] flex-col rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7">
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-zinc-400">AI Tools</p>
                <div className="mt-5 flex max-w-md flex-wrap content-start gap-2">
                  {["ChatGPT", "Claude", "Figma Make", "Codex", "Stitch"].map((tool) => (
                    <span key={tool} className="rounded-full border border-zinc-200 bg-zinc-50 px-3.5 py-2 text-xs font-medium text-zinc-700">{tool}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid rounded-2xl bg-zinc-950 p-6 text-white sm:p-7 md:grid-cols-[160px_1fr] md:gap-8">
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-zinc-400">Project Outcome</p>
              <div className="mt-5 min-w-0 md:mt-0">
                <p className="text-xl font-semibold leading-8 tracking-[-0.025em] sm:text-2xl">MyBuddy와 Admin을 연결한 핵심 흐름을 설계했습니다.</p>
                <p className="mt-3 text-sm leading-6 text-zinc-400 sm:text-base sm:leading-7">WDS·Handoff·QA 기준을 구현 단계에 맞춰 정리했습니다.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Documentation */}
        <section className="border-t border-zinc-200 pb-20 pt-16 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm text-zinc-500">
              Project Documentation
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl">
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
        <section className="border-t border-zinc-200 py-20 sm:py-24 lg:py-28">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm text-zinc-500">My Contribution</p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl">
              이 프로젝트에서 담당한 역할
            </h2>

            <p className="mt-5 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
              Product Designer 1인으로 필드 인터뷰를 직접 설계·진행하고,
              팀 리서치 분석에 참여했습니다. 이후 제품 구조와 화면,
              디자인 시스템, QA와 핸드오프 기준을 설계했습니다.
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
