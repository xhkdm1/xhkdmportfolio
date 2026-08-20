"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";

const CERTIFICATE_URL = "/docs/pado-certificate.pdf";

const navigation = [
  { label: "Overview", href: "#overview" },
  { label: "Direction Shift", href: "#research" },
  { label: "Product Experience", href: "#insight" },
  { label: "Trade-off", href: "#trade-off" },
  { label: "Reflection", href: "#reflection" },
];

const projectInfo = [
  {
    label: "Role",
    value: "Team Lead · UI/UX Designer",
  },
  {
    label: "Program",
    value: "미래내일일경험",
  },
  {
    label: "Duration",
    value: "2025.09.29 – 11.21",
  },
  {
    label: "Tools",
    value: "Figma",
  },
];

const contributions = [
  {
    number: "01",
    category: "Product Concept",
    title: "기존 팬덤 플랫폼 개선 과제에서 서비스 방향을 다시 정의했습니다.",
    items: [
      "기존 팬덤 서비스의 반복 문제와 사용자 행동 분석에 참여",
      "콘텐츠 소비 이후의 창작·대화·보상 흐름을 재설계",
      "PADO 서비스 콘셉트와 핵심 가치 정리",
      "Fan Loop를 중심으로 서비스 방향 제안",
    ],
  },
  {
    number: "02",
    category: "UX / UI Design",
    title: "핵심 경험을 사용 흐름과 인터페이스로 구체화했습니다.",
    items: [
      "LIVE / Clip Studio 경험 설계",
      "From.★ 참여형 밸런스 게임 UX 제안",
      "Reward 기반 참여 동선 설계",
      "주요 화면 UI와 프로토타입 구성",
    ],
  },
  {
    number: "03",
    category: "Feedback & Changes",
    title: "기업 피드백을 반영하며 문제 범위와 서비스 메시지를 수정했습니다.",
    items: [
      "초기 개선 과제에서 신규 서비스 방향으로 전환",
      "피드백에 따라 서비스명과 핵심 가치 정리",
      "핵심 기능 우선순위와 스토리 흐름 재구성",
      "소개서와 콘셉트 산출물 정리",
    ],
  },
];

const solutions = [
  {
    number: "01",
    label: "Creator Experience",
    title: "라이브를 바로 2차 창작으로 연결하는 Clip Studio",
    problem:
      "팬들은 라이브 영상을 화면 녹화한 뒤 별도의 편집 프로그램과 SNS를 오가며 콘텐츠를 제작하고 있었습니다.",
    decision:
      "라이브 안에서 원하는 구간을 선택하고, 자막·음성·텍스트·캡션을 추가한 뒤 바로 공유할 수 있는 제작 흐름을 제안했습니다.",
    flow: ["Watch", "Clip", "Edit", "Publish", "React"],
    image: "/images/pado/pado-clip-studio.png",
    imageAlt: "PADO Clip Studio 화면",
  },
  {
    number: "02",
    label: "Community Experience",
    title: "콘텐츠 이후의 대화를 만드는 From.★",
    problem:
      "팬들은 아티스트의 취향과 선택을 예측하고 서로의 의견을 비교하는 과정 자체를 즐기지만, 이러한 대화는 일회성 게시물로 흩어졌습니다.",
    decision:
      "아티스트의 선택을 예측하고 팬덤 전체 결과와 댓글을 함께 확인하는 참여형 밸런스 게임을 설계했습니다.",
    flow: ["Choose", "Predict", "Compare", "Discuss"],
    image: "/images/pado/pado-balance-game.png",
    imageAlt: "PADO From Star 밸런스 게임 화면",
  },
  {
    number: "03",
    label: "Retention Experience",
    title: "팬의 활동을 다시 참여로 연결하는 Reward",
    problem:
      "콘텐츠 제작과 커뮤니티 참여는 많은 시간과 노력이 들지만, 서비스 안에서 이러한 기여가 지속적으로 인정되기 어려웠습니다.",
    decision:
      "출석, 게시물 작성과 영상 제작을 포인트로 연결하고, 팬 활동을 확장하는 보상으로 교환할 수 있도록 설계했습니다.",
    flow: ["Participate", "Earn", "Reward", "Return"],
    image: "/images/pado/pado-reward.png",
    imageAlt: "PADO 리워드 화면",
  },
];

const copyrightPolicies = [
  {
    title: "편집 허용 구간 제한",
    description:
      "실제 서비스화 시 편집 가능한 구간과 길이의 제한 기준을 검토해야 합니다.",
  },
  {
    title: "자동 워터마크",
    description:
      "서비스명과 원본 출처를 유지할 워터마크 적용 여부를 검토해야 합니다.",
  },
  {
    title: "원본 콘텐츠 연결",
    description:
      "편집본에서 원본 라이브와 아티스트 페이지를 연결하는 방식을 검토해야 합니다.",
  },
  {
    title: "권리자별 사용 정책",
    description:
      "권리자별로 편집 가능 여부와 공유 범위를 설정할 기준을 검토해야 합니다.",
  },
];

function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-t border-zinc-200 py-14 sm:py-16 lg:py-20"
    >
      <div className="mb-10 max-w-3xl">
        <p className="mb-3 text-sm font-medium text-zinc-500">{eyebrow}</p>

        <h2 className="text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl">
          {title}
        </h2>

        {description && (
          <p className="mt-5 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            {description}
          </p>
        )}
      </div>

      {children}
    </section>
  );
}

function SolutionSection({
  solution,
}: {
  solution: (typeof solutions)[number];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <article className="border-t border-zinc-200 py-16 first:border-t-0 first:pt-0 sm:py-20">
        <div>
          <p className="text-sm font-medium text-zinc-500">
            {solution.label} · {solution.number}
          </p>

          <h3 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {solution.title}
          </h3>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5 sm:p-6">
            <p className="text-sm font-medium text-zinc-500">Problem</p>

            <p className="mt-3 max-w-xl text-base leading-7 text-zinc-700">
              {solution.problem}
            </p>
          </div>

          <div className="rounded-2xl bg-zinc-900 p-5 text-white sm:p-6">
            <p className="text-sm font-medium text-zinc-400">
              Design Decision
            </p>

            <p className="mt-3 max-w-2xl text-base leading-7 text-zinc-100">
              {solution.decision}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group relative mt-8 block w-full cursor-zoom-in overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 text-left"
          aria-label={`${solution.imageAlt} 크게 보기`}
        >
          <Image
            src={solution.image}
            alt={solution.imageAlt}
            width={2000}
            height={1400}
            className="h-auto w-full object-contain transition duration-300 group-hover:scale-[1.01]"
          />

          <span className="absolute bottom-4 right-4 rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-zinc-900 shadow-sm backdrop-blur">
            크게 보기 ↗
          </span>
        </button>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          {solution.flow.map((step, index) => (
            <div key={step} className="flex items-center gap-2">
              <span className="rounded-full border border-zinc-200 px-3 py-2 text-xs font-medium text-zinc-700">
                {step}
              </span>

              {index < solution.flow.length - 1 && (
                <span className="text-sm text-zinc-300">→</span>
              )}
            </div>
          ))}
        </div>
      </article>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setIsOpen(false)}
        >
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute right-5 top-5 z-10 rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-950"
          >
            닫기
          </button>

          <div
            className="relative flex max-h-[90vh] w-full max-w-[95vw] items-center justify-center overflow-auto rounded-2xl bg-white p-3 sm:p-5"
            onClick={(event) => event.stopPropagation()}
            >
            <Image
                src={solution.image}
                alt={solution.imageAlt}
                width={2400}
                height={1600}
                className="h-auto max-h-[82vh] w-auto max-w-full object-contain"
            />
            </div>
        </div>
      )}
    </>
  );
}

export default function PadoPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <div className="mx-auto w-full max-w-6xl px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-36 lg:px-12 lg:pb-32 lg:pt-40">
        <div className="mb-10 text-sm text-zinc-500">
          <Link href="/" className="transition hover:text-zinc-900">
            Home
          </Link>

          <span className="mx-2">/</span>
          <span>Projects</span>

          <span className="mx-2">/</span>
          <span>PADO</span>
        </div>

        <section className="pb-20 sm:pb-28 lg:pb-32">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-5 text-sm font-medium text-zinc-500">
                Fan Platform · Product Concept · UX/UI Design
              </p>

              <h1 className="text-5xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
                PADO
              </h1>

              <p className="mt-7 max-w-xl text-2xl font-medium leading-snug tracking-tight text-zinc-900">
                팬덤 플랫폼을 다시 디자인한 것이 아니라,
                <br />
                팬 활동의 흐름을 다시 설계했습니다.
              </p>

              <p className="mt-7 max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
                팬들이 라이브를 본 뒤 콘텐츠를 재해석하고 공유하며
                새로운 대화를 만드는 행동에 주목했습니다. 콘텐츠 소비
                중심의 경험을 넘어 팬의 창작과 참여가 다시 팬덤의
                다음 활동으로 이어지는 플랫폼을 제안했습니다.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#solution"
                  className="inline-flex items-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
                >
                  View Core Experience ↓
                </a>

                <a
                  href={CERTIFICATE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-zinc-200 px-5 py-3 text-sm font-medium text-zinc-900 transition hover:border-zinc-300 hover:bg-zinc-50"
                >
                  View Certificate ↗
                </a>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-[#f7f3ff]">
              <Image
                src="/images/pado/pado-cover.png"
                alt="PADO 서비스 대표 이미지"
                width={1600}
                height={1200}
                priority
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {projectInfo.map((item) => (
              <article
                key={item.label}
                className="rounded-3xl border border-zinc-200 p-5"
              >
                <p className="text-sm text-zinc-500">{item.label}</p>
                <p className="mt-3 font-semibold">{item.value}</p>
              </article>
            ))}
          </div>

          <div className="mt-4 grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">
            <article className="rounded-3xl border border-zinc-200 p-5">
              <p className="text-sm text-zinc-500">Partner</p>
              <p className="mt-3 font-semibold">주식회사 하이페이스</p>
            </article>

            <article className="rounded-3xl border border-zinc-200 p-5">
              <p className="text-sm text-zinc-500">Contribution</p>
              <p className="mt-3 text-base font-semibold leading-6">
                Product Concept · UX/UI · Enterprise Feedback
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                서비스 방향과 주요 UX/UI를 설계하고, 기업 피드백을 다음 결과물의
                변경사항으로 연결했습니다.
              </p>
            </article>
          </div>
        </section>

        <nav className="sticky top-16 z-20 -mx-5 overflow-x-auto border-y border-zinc-200 bg-white/90 px-5 backdrop-blur sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
          <div className="mx-auto flex w-full gap-6 py-4">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="shrink-0 text-sm text-zinc-500 transition hover:text-zinc-950"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>

        <Section
          id="overview"
          eyebrow="01 · Project Background"
          title="기존 팬덤 플랫폼 개선에서, 콘텐츠 이후의 참여 흐름을 설계하는 서비스로 방향을 바꿨습니다."
          description="초기 과제는 화면 개선이었지만, 기업 피드백을 통해 핵심 문제는 콘텐츠 소비 후 팬의 창작·대화·보상 흐름이 여러 서비스로 끊어진다는 점으로 재정의됐습니다."
        >
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <article className="rounded-3xl bg-zinc-900 p-6 text-white sm:p-7">
              <p className="text-sm font-medium text-zinc-400">
                Initial Brief
              </p>

              <h3 className="mt-4 text-xl font-semibold leading-tight sm:text-2xl">
                팬덤 플랫폼 UI/UX 개선
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-300">
                프로젝트는 기존 팬덤 서비스의 경험을 보완하고 개선하는
                방향으로 시작했습니다.
              </p>
            </article>

            <article className="rounded-3xl border border-zinc-200 p-7">
              <p className="text-sm font-medium text-zinc-500">
                Reframed Opportunity
              </p>

              <h3 className="mt-4 text-2xl font-semibold leading-tight">
                팬이 콘텐츠를 본 뒤 이어지는 참여를 하나의 경험으로 연결
              </h3>

              <p className="mt-5 text-sm leading-7 text-zinc-600">
                실제 팬 행동을 다시 살펴보면서, 문제는 특정 화면이 아니라
                콘텐츠 소비 이후의 창작과 소통이 외부 서비스로 흩어지는
                구조에 있음을 확인했습니다.
              </p>
            </article>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            {[
              "UI 개선",
              "기업 피드백",
              "문제 재정의",
              "서비스 방향 전환",
              "PADO",
            ].map((step, index, array) => (
              <div key={step} className="flex flex-1 items-center gap-4">
                <div className="flex min-h-24 flex-1 items-center justify-center rounded-2xl border border-zinc-200 px-4 text-center text-sm font-medium">
                  {step}
                </div>

                {index < array.length - 1 && (
                  <span className="hidden text-zinc-300 sm:block">→</span>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16">
            <div className="mb-8 max-w-2xl">
              <p className="text-sm font-medium text-zinc-500">
                My Contribution
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                이 프로젝트에서 맡은 역할
              </h3>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {contributions.map((contribution) => (
                <article
                  key={contribution.number}
                  className="rounded-3xl border border-zinc-200 p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-sm font-medium text-zinc-500">
                      {contribution.category}
                    </p>

                    <span className="text-sm text-zinc-300">
                      {contribution.number}
                    </span>
                  </div>

                  <h4 className="mt-5 text-xl font-semibold leading-snug">
                    {contribution.title}
                  </h4>

                  <ul className="mt-6 space-y-3">
                    {contribution.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-6 text-zinc-600"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="research"
          eyebrow="02 · From Improvement to PADO"
          title="기존 팬덤 플랫폼 개선을 시작으로, 콘텐츠 이후의 참여 흐름을 서비스의 핵심으로 정리했습니다."
          description="초기 과제는 UI 개선이었지만, 기업 피드백과 팬 행동 관찰을 통해 콘텐츠 소비 후의 창작·대화·보상 흐름이 핵심 문제라는 결론에 도달했습니다."
        >
          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-3xl border border-zinc-200 bg-white p-6">
              <p className="text-sm font-medium text-zinc-500">01. Observation</p>
              <h3 className="mt-4 text-xl font-semibold leading-snug">
                팬들은 라이브를 본 뒤 다시 편집하고 공유합니다.
              </h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                화면 녹화, 클립 추출, 자막 추가, 외부 SNS 공유로 흐름이
                이어지는 행동이 반복적으로 확인됐습니다.
              </p>
            </article>

            <article className="rounded-3xl border border-zinc-200 bg-white p-6">
              <p className="text-sm font-medium text-zinc-500">02. Reframed Issue</p>
              <h3 className="mt-4 text-xl font-semibold leading-snug">
                문제는 특정 화면이 아니라 팬 행동의 연결 부족이었습니다.
              </h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                콘텐츠 소비에서 창작과 대화로 이어지는 여정이 여러 서비스로
                끊겨 있었고, 이 흐름을 하나의 서비스 안에서 연결할 기회가 있었습니다.
              </p>
            </article>

            <article className="rounded-3xl border border-zinc-200 bg-white p-6">
              <p className="text-sm font-medium text-zinc-500">03. Direction</p>
              <h3 className="mt-4 text-xl font-semibold leading-snug">
                PADO는 콘텐츠 이후 행동을 하나의 참여 순환으로 설계했습니다.
              </h3>
              <p className="mt-4 text-sm leading-7 text-zinc-600">
                소비 → 창작 → 대화 → 보상 → 재참여를 팬덤 서비스 안에서
                자연스럽게 이어지도록 제안했습니다.
              </p>
            </article>
          </div>

          <div className="mt-10 rounded-3xl border border-zinc-200 bg-[#f7f3ff] p-6 sm:p-8">
            <p className="text-sm font-medium text-violet-700">Observed flow</p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {[
                "Watch",
                "Clip",
                "Edit",
                "Share",
                "Discuss",
                "Reward",
                "Return",
              ].map((step, index, array) => (
                <div key={step} className="flex items-center gap-3">
                  <span className="rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-700">
                    {step}
                  </span>

                  {index < array.length - 1 && (
                    <span className="text-zinc-300">→</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section
          id="insight"
          eyebrow="03 · Fan Loop"
          title="PADO의 핵심 경험은 콘텐츠 소비 이후의 창작·대화·보상을 하나의 흐름으로 연결하는 것입니다."
          description="콘텐츠를 본 뒤 창작하고 대화에 참여한 경험이 보상과 다음 참여로 이어지도록 구성했습니다."
        >
          <div className="flex flex-wrap items-center gap-2 border-y border-zinc-200 py-5">
            {["Watch", "Create", "Discuss", "Reward", "Return"].map(
              (step, index, array) => (
                <div key={step} className="flex items-center gap-2">
                  <span className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-700">
                    {step}
                  </span>
                  {index < array.length - 1 && (
                    <span className="text-zinc-300">→</span>
                  )}
                </div>
              ),
            )}
          </div>
        </Section>

        <Section
          id="solution"
          eyebrow="04 · Product Experience"
          title="세 가지 핵심 경험을 실제 UI와 흐름으로 구체화했습니다."
          description="Clip Studio, From.★, Reward의 문제와 설계 판단을 화면과 함께 정리했습니다."
        >
          <div className="mb-16 overflow-hidden rounded-3xl border border-zinc-200 bg-[#f7f3ff]">
            <Image
              src="/images/pado/pado-ecosystem.png"
              alt="PADO 팬덤 생태계와 선순환 구조"
              width={1800}
              height={1100}
              className="h-auto w-full object-cover"
            />
          </div>

          {solutions.map((solution) => (
            <SolutionSection key={solution.number} solution={solution} />
          ))}
        </Section>

        <Section
          id="trade-off"
          eyebrow="05 · Trade-off & Limits"
          title="창작의 편의성은 높일 수 있지만, 원본 보호와 권리자 기준은 제품 정책에서 함께 정리해야 합니다."
          description="짧은 편집 기능은 기획적으로는 매력적이지만, 실제 서비스에는 저작권, 편집 범위, 공유 범위와 권리자별 정책이 함께 설계되어야 합니다."
        >
          <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 sm:p-7">
            <p className="text-sm font-medium text-zinc-500">
              실제 서비스화 시 추가 검토가 필요한 조건
            </p>
            <ul className="mt-4 divide-y divide-zinc-200">
              {copyrightPolicies.map((policy) => (
                <li
                  key={policy.title}
                  className="grid gap-2 py-4 first:pt-0 last:pb-0 sm:grid-cols-[11rem_1fr] sm:gap-6"
                >
                  <h3 className="text-sm font-medium text-zinc-900">
                    {policy.title}
                  </h3>
                  <p className="text-sm leading-6 text-zinc-600">
                    {policy.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 rounded-2xl bg-zinc-900 p-6 text-white sm:p-7">
            <p className="text-sm font-medium text-zinc-400">
              Remaining Limit
            </p>

            <p className="mt-4 max-w-2xl text-lg font-semibold leading-7 sm:text-xl">
              PADO는 실제 출시 서비스가 아니며, 사용자 증가와 매출 효과를
              측정한 프로젝트도 아닙니다.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300">
              따라서 Clip 제작률, From.★ 재참여, Reward 후 복귀 같은 지표는
              이후 검증을 위한 제안으로 남고, 실제 성과를 단정해 쓰지는 않았습니다.
            </p>
          </div>
        </Section>

        <Section
          id="reflection"
          eyebrow="06 · Reflection"
          title="화면을 고치는 것보다, 사용자가 이미 하고 있는 행동을 먼저 정의하는 것이 더 중요하다는 점을 배웠습니다."
        >
          <div className="grid border-y border-zinc-200 lg:grid-cols-2 lg:divide-x lg:divide-zinc-200">
            <article className="border-b border-zinc-200 py-6 lg:border-b-0 lg:pr-8">
              <p className="text-sm font-medium text-zinc-500">
                What Changed
              </p>

              <p className="mt-5 text-base leading-8 text-zinc-700">
                초기에 페이지 안의 화면 개선을 중심으로 접근했지만, 실제로는
                팬이 콘텐츠를 본 뒤 무엇을 하고 싶은지, 어디에서 멈추는지를
                먼저 봐야 한다는 점을 확인했습니다.
              </p>
            </article>

            <article className="py-6 lg:pl-8">
              <p className="text-sm font-medium text-zinc-500">
                What Stayed
              </p>

              <p className="mt-5 text-base leading-8 text-zinc-700">
                이후 프로젝트에서는 문제를 정의한 뒤 기능을 제안하는 흐름을
                우선시했습니다. PADO는 이를 실험해본 사례로, 사용자 행동을
                발견하고 제품 방향을 다시 정리하는 경험이었습니다.
              </p>
            </article>
          </div>

        </Section>

        <section className="border-t border-zinc-200 py-14 sm:py-16 lg:py-20">
          <p className="text-sm font-medium text-zinc-500">
            Research Basis
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            근거와 가설을 구분해 설계 방향을 정리했습니다.
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-zinc-200 p-6">
              <p className="text-sm font-medium text-zinc-500">
                Observed Evidence
              </p>

              <ul className="mt-5 space-y-3 text-sm leading-7 text-zinc-600">
                <li>라이브 화면 녹화와 클립 편집 행동</li>
                <li>X와 YouTube에서의 팬 콘텐츠 재활용 사례</li>
                <li>주요 팬덤 플랫폼 리뷰를 통해 반복되는 불편 요인 확인</li>
              </ul>
            </article>

            <article className="rounded-3xl border border-zinc-200 p-6">
              <p className="text-sm font-medium text-zinc-500">
                Product Hypothesis
              </p>

              <ul className="mt-5 space-y-3 text-sm leading-7 text-zinc-600">
                <li>콘텐츠를 본 뒤 참여와 창작이 이어지는 경험을 설계</li>
                <li>대화와 보상을 연결하는 참여 흐름을 제안</li>
                <li>실제 사용자 검증이 필요한 영역은 다음 단계로 남김</li>
              </ul>
            </article>
          </div>
        </section>

        <div className="border-t border-zinc-200 pt-12">
          <Link
            href="/"
            className="text-sm font-medium transition hover:text-zinc-600"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
