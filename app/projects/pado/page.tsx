"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type ReactNode } from "react";

const CERTIFICATE_URL = "/docs/pado-certificate.pdf";

const navigation = [
  { label: "Overview", href: "#overview" },
  { label: "Research", href: "#research" },
  { label: "Insight", href: "#insight" },
  { label: "Solution", href: "#solution" },
  { label: "Trade-off", href: "#trade-off" },
  { label: "Reflection", href: "#reflection" },
];

const projectInfo = [
  {
    label: "Program",
    value: "미래내일일경험",
  },
  {
    label: "Partner",
    value: "주식회사 하이페이스",
  },
  {
    label: "Role",
    value: "UI/UX Designer",
  },
  {
    label: "Duration",
    value: "2025.09 – 2025.11",
  },
];

const contributions = [
  {
    number: "01",
    category: "Product Concept",
    title: "팬의 창작과 참여를 중심으로 새로운 서비스 방향을 제안했습니다.",
    items: [
      "기존 팬덤 플랫폼의 이용 흐름과 팬 활동 방식 분석",
      "콘텐츠 소비 이후 발생하는 팬 창작 경험 정의",
      "PADO 서비스 콘셉트와 핵심 가치 제안",
      "참여–창작–공유–보상으로 이어지는 Fan Loop 설계",
    ],
  },
  {
    number: "02",
    category: "UX / UI Design",
    title: "핵심 경험을 사용자 흐름과 인터페이스로 구체화했습니다.",
    items: [
      "라이브 기반 영상 편집 경험 설계",
      "팬 참여형 밸런스 게임 UX 설계",
      "리워드 및 출석 경험 설계",
      "주요 화면 UI 디자인과 프로토타입 제작",
    ],
  },
  {
    number: "03",
    category: "Project Operation",
    title: "기업 협업과 프로젝트 운영 전반을 함께 경험했습니다.",
    items: [
      "기업 담당자 비대면 회의 및 피드백 반영",
      "주간 회의록과 진행 보고서 작성",
      "프로젝트 예산 계획 및 사용 내역 관리",
      "영수증과 증빙 자료 정리",
      "서비스 소개서와 최종 결과물 제작",
    ],
  },
];

const reviewSources = [
  {
    service: "Weverse",
    platform: "Google Play",
    reviewCount: 260,
    role: "대형 팬덤 플랫폼의 사용 경험과 반복 불편 파악",
  },
  {
    service: "Bubble",
    platform: "Google Play",
    reviewCount: 360,
    role: "아티스트 중심 소통 서비스의 경험 비교",
  },
  {
    service: "Berriz",
    platform: "Google Play",
    reviewCount: 101,
    role: "신규 팬덤 플랫폼의 사용성과 커뮤니티 경험 비교",
  },
];

const observations = [
  {
    number: "01",
    title: "라이브는 시청으로 끝나지 않았습니다.",
    description:
      "팬들은 라이브에서 인상적인 순간을 화면 녹화하고, 필요한 구간을 다시 편집해 별도의 콘텐츠로 만들고 있었습니다.",
  },
  {
    number: "02",
    title: "팬들은 원본에 자신의 해석을 더했습니다.",
    description:
      "짧은 하이라이트, 자막, 효과음, 관계성 편집과 밈 등 팬의 관점이 더해진 새로운 콘텐츠가 반복적으로 제작됐습니다.",
  },
  {
    number: "03",
    title: "콘텐츠 이후의 반응이 새로운 콘텐츠를 만들었습니다.",
    description:
      "X의 인용과 재공유, YouTube의 요약·편집 영상처럼 팬의 반응이 다시 대화와 2차 창작으로 이어졌습니다.",
  },
];

const fanSegments = [
  {
    title: "Consumer",
    korean: "콘텐츠 소비형 팬",
    description:
      "라이브, 게시글과 공식 콘텐츠를 중심으로 감상하는 사용자",
    need: "원하는 콘텐츠를 빠르게 발견하고 놓치지 않는 경험",
  },
  {
    title: "Creator",
    korean: "콘텐츠 창작형 팬",
    description:
      "영상, 자막, 짤과 팬아트 등 2차 창작물을 만드는 사용자",
    need: "원본을 안전하고 편리하게 재해석할 수 있는 제작 경험",
  },
  {
    title: "Connector",
    korean: "커뮤니티 참여형 팬",
    description:
      "투표, 토론과 반응을 통해 다른 팬들과 관계를 만드는 사용자",
    need: "콘텐츠 이후에도 대화가 자연스럽게 이어지는 경험",
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
      "전체 영상의 무단 재배포가 아니라 짧은 하이라이트 제작을 중심으로 편집 범위를 제한합니다.",
  },
  {
    title: "자동 워터마크",
    description:
      "편집 콘텐츠에 서비스명과 원본 출처가 유지되도록 자동 워터마크를 적용합니다.",
  },
  {
    title: "원본 콘텐츠 연결",
    description:
      "편집본에서 원본 라이브와 아티스트 페이지로 이동할 수 있도록 출처 링크를 함께 제공합니다.",
  },
  {
    title: "권리자별 사용 정책",
    description:
      "아티스트와 소속사의 계약 및 운영 정책에 따라 편집 가능 여부와 공유 범위를 개별 설정합니다.",
  },
];

const successMetrics = [
  {
    metric: "Clip Creation Rate",
    description: "라이브 시청자 중 클립 제작을 시작한 사용자 비율",
  },
  {
    metric: "Publish Completion Rate",
    description: "편집을 시작한 사용자 중 콘텐츠를 게시한 비율",
  },
  {
    metric: "Secondary Engagement",
    description: "팬 콘텐츠에 발생한 댓글·반응·재참여 정도",
  },
  {
    metric: "Creator Retention",
    description: "콘텐츠 제작 사용자의 일정 기간 내 재방문 비율",
  },
  {
    metric: "Community Participation",
    description: "밸런스 게임 참여 이후 댓글이나 토론으로 이어진 비율",
  },
  {
    metric: "Original Content Return",
    description: "편집 콘텐츠를 통해 원본 라이브로 다시 유입된 비율",
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
      className="scroll-mt-28 border-t border-zinc-200 py-24"
    >
      <div className="mb-12 max-w-3xl">
        <p className="mb-3 text-sm font-medium text-zinc-500">{eyebrow}</p>

        <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          {title}
        </h2>

        {description && (
          <p className="mt-5 text-base leading-8 text-zinc-600 sm:text-lg">
            {description}
          </p>
        )}
      </div>

      {children}
    </section>
  );
}

function VisualPlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex min-h-72 items-center justify-center rounded-3xl border border-dashed border-zinc-300 bg-zinc-50 px-6 text-center ${className}`}
    >
      <div>
        <p className="text-sm font-medium text-zinc-700">
          시각자료 삽입 예정
        </p>

        <p className="mt-2 max-w-lg text-sm leading-6 text-zinc-500">
          {label}
        </p>
      </div>
    </div>
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
      <article className="border-t border-zinc-200 py-20 first:border-t-0 first:pt-0">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-zinc-400">
            {solution.label} · {solution.number}
          </p>

          <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-tight">
            {solution.title}
          </h3>

          <div className="mt-8">
            <p className="text-sm font-medium text-zinc-500">Problem</p>

            <p className="mt-3 text-base leading-8 text-zinc-700">
              {solution.problem}
            </p>
          </div>

          <div className="mt-7 rounded-3xl bg-zinc-950 p-6 text-white">
            <p className="text-sm font-medium text-zinc-400">
              Design Decision
            </p>

            <p className="mt-3 text-base leading-8 text-zinc-200">
              {solution.decision}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group relative mt-10 block w-full cursor-zoom-in overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50 text-left"
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

        <div className="mt-7 flex flex-wrap items-center gap-2">
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
    <main className="min-h-screen bg-white px-4 pb-24 pt-24 text-zinc-950 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 text-sm text-zinc-500">
          <Link href="/" className="transition hover:text-zinc-900">
            Home
          </Link>

          <span className="mx-2">/</span>
          <span>Projects</span>

          <span className="mx-2">/</span>
          <span>PADO</span>
        </div>

        <section className="pb-24">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="mb-5 text-sm font-medium text-zinc-500">
                Fan Platform · Product Concept · UX/UI Design
              </p>

              <h1 className="text-6xl font-semibold tracking-tight sm:text-7xl">
                PADO
              </h1>

              <p className="mt-7 max-w-xl text-2xl font-medium leading-snug tracking-tight text-zinc-900">
                팬덤 플랫폼을 다시 디자인한 것이 아니라,
                <br />
                팬 활동의 흐름을 다시 설계했습니다.
              </p>

              <p className="mt-7 max-w-xl text-base leading-8 text-zinc-600">
                팬들이 라이브를 본 뒤 콘텐츠를 재해석하고 공유하며
                새로운 대화를 만드는 행동에 주목했습니다. 콘텐츠 소비
                중심의 경험을 넘어 팬의 창작과 참여가 다시 팬덤의
                성장으로 이어지는 플랫폼을 제안했습니다.
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
        </section>

        <nav className="sticky top-16 z-20 -mx-4 overflow-x-auto border-y border-zinc-200 bg-white/90 px-4 backdrop-blur sm:-mx-6 sm:px-6">
          <div className="mx-auto flex max-w-5xl gap-6 py-4">
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
          title="기존 서비스의 화면 개선에서, 새로운 팬 경험을 제안하는 프로젝트로 확장했습니다."
          description="한국능률협회의 미래내일일경험 사업을 통해 주식회사 하이페이스와 약 2개월 동안 협업했습니다. 팀에서 직접 주제를 선정하고 기업과 협의했으며, 정기 회의와 피드백을 통해 프로젝트를 구체화했습니다."
        >
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <article className="rounded-3xl bg-zinc-950 p-7 text-white">
              <p className="text-sm font-medium text-zinc-400">
                Initial Brief
              </p>

              <h3 className="mt-4 text-2xl font-semibold leading-tight">
                팬덤 플랫폼 UI/UX 개선
              </h3>

              <p className="mt-5 text-sm leading-7 text-zinc-300">
                프로젝트는 기존 팬덤 서비스의 화면과 기능을 개선하는
                과제로 시작했습니다.
              </p>
            </article>

            <article className="rounded-3xl border border-zinc-200 p-7">
              <p className="text-sm font-medium text-zinc-500">
                Reframed Opportunity
              </p>

              <h3 className="mt-4 text-2xl font-semibold leading-tight">
                팬들의 창작과 참여가 이어지는 새로운 플랫폼
              </h3>

              <p className="mt-5 text-sm leading-7 text-zinc-600">
                실제 팬 행동을 다시 살펴보면서, 문제는 특정 화면보다
                콘텐츠 소비 이후의 경험이 여러 서비스로 끊어진다는 데
                있다고 판단했습니다.
              </p>
            </article>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            {[
              "UI 개선",
              "팬 행동 관찰",
              "문제 재정의",
              "Concept Product",
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
                이 프로젝트에서 담당한 역할
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
            eyebrow="02 · User Review Analysis"
            title="주요 팬덤 서비스의 사용자 리뷰를 비교했습니다."
            description="Google Play Store에서 수집한 약 700개의 사용자 리뷰를 분석하여 반복적으로 나타나는 사용자 경험을 도출했습니다. 리뷰는 콘텐츠 탐색, 커뮤니티, 알림, 안정성, 사용성 관점으로 분류했습니다."
            >
        <div className="rounded-3xl bg-zinc-50 p-7">
            <p className="text-sm font-medium text-zinc-500">
            Research Principle
            </p>

            <p className="mt-4 max-w-3xl text-xl font-semibold leading-8">
            사용자 행동을 기반으로 디자인 가설을 검증하고,
            실제 문제와 해결 방향이 연결되는지 확인하는 데
            집중했습니다.
            </p>
        </div>
          <div className="mt-12">
            <p className="text-sm font-medium text-zinc-500">
              App Review Analysis
            </p>

            <h3 className="mt-3 text-2xl font-semibold tracking-tight">
              주요 팬덤 서비스의 사용자 리뷰를 비교했습니다.
            </h3>

            <div className="mt-7 grid gap-5 md:grid-cols-3">
              {reviewSources.map((source) => (
                <article
                  key={source.service}
                  className="rounded-3xl border border-zinc-200 p-6"
                >
                  <p className="text-sm text-zinc-500">
                    {source.platform} · {source.reviewCount} Reviews
                  </p>

                  <h4 className="mt-3 text-xl font-semibold">
                    {source.service}
                  </h4>

                  <p className="mt-4 text-sm leading-6 text-zinc-600">
                    {source.role}
                  </p>
                </article>
              ))}
            </div>

            <p className="mt-5 text-sm leading-6 text-zinc-500">
                ※ Google Play Store에서 수집한 총 721개의 사용자 리뷰
                (Weverse 260건, Bubble 360건, Berriz 101건)를 콘텐츠 탐색,
                커뮤니티, 알림, 안정성, 사용성 관점으로 정성 분석했습니다.
                리뷰에서 직접 확인되지 않은 요구는 사실이 아닌 가설로 구분했습니다.
            </p>

            <VisualPlaceholder
              label="Weverse · Bubble · Berriz 리뷰 Affinity Map과 Pain Point 분류 결과"
              className="mt-8 min-h-[380px]"
            />
          </div>

          <div className="mt-20">
            <p className="text-sm font-medium text-zinc-500">
              Behavioral Observation
            </p>

            <h3 className="mt-3 text-3xl font-semibold tracking-tight">
              팬들은 콘텐츠를 소비하는 것에서 끝나지 않았습니다.
            </h3>

            <p className="mt-5 max-w-3xl text-base leading-8 text-zinc-600">
              X와 YouTube에서 팬들이 라이브의 특정 장면을 화면
              녹화하고, 짧은 클립이나 긴 요약 영상으로 다시 편집하는
              행동을 관찰했습니다. 일부 콘텐츠에는 자막, 효과음과 팬의
              해석이 추가되어 원본과 다른 맥락의 콘텐츠로 소비되고
              있었습니다.
            </p>

            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {observations.map((observation) => (
                <article
                  key={observation.number}
                  className="rounded-3xl border border-zinc-200 p-6"
                >
                  <p className="text-sm text-zinc-400">
                    Observation {observation.number}
                  </p>

                  <h4 className="mt-4 text-xl font-semibold leading-snug">
                    {observation.title}
                  </h4>

                  <p className="mt-4 text-sm leading-7 text-zinc-600">
                    {observation.description}
                  </p>
                </article>
              ))}
            </div>

            <VisualPlaceholder
              label="X의 라이브 클립·인용 사례, YouTube의 하이라이트·자막·요약 편집 영상, 화면 녹화 방식 관련 Q&A"
              className="mt-8 min-h-[460px]"
            />

            <div className="mt-8 rounded-3xl border border-zinc-200 p-7">
              <p className="text-sm font-medium text-zinc-500">
                Observed Flow
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                {[
                  "Live",
                  "Screen Record",
                  "Edit",
                  "Caption",
                  "Share",
                  "Reaction",
                  "Create Again",
                ].map((step, index, array) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="rounded-full bg-zinc-100 px-4 py-2 text-sm font-medium">
                      {step}
                    </span>

                    {index < array.length - 1 && (
                      <span className="text-zinc-300">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="insight"
          eyebrow="03 · Problem Reframing"
          title="문제는 특정 화면이 아니라, 팬의 창작 흐름이 여러 서비스 사이에서 끊긴다는 점이었습니다."
          description="팬들은 하나의 콘텐츠를 보고 끝내지 않고 재해석하고 공유하며 새로운 관계와 대화를 만들었습니다. 하지만 제작과 소통 과정은 화면 녹화, 편집 도구와 외부 SNS를 오가며 이루어지고 있었습니다."
        >
          <div className="rounded-3xl bg-zinc-950 p-8 text-white sm:p-10">
            <p className="text-sm font-medium text-zinc-400">
              Key Insight
            </p>

            <p className="mt-5 max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              팬들은 콘텐츠를 보기 위해 플랫폼에 들어오지만, 오래 머무는
              이유는 직접 참여하고 함께 만들어가는 경험에 있습니다.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="rounded-3xl border border-zinc-200 p-6">
              <p className="text-sm font-medium text-zinc-500">
                Insight 01
              </p>

              <h3 className="mt-4 text-xl font-semibold">
                팬은 소비자인 동시에 창작자입니다.
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-600">
                공식 콘텐츠를 짧은 클립, 자막 영상, 밈과 요약 콘텐츠로
                다시 해석합니다.
              </p>
            </article>

            <article className="rounded-3xl border border-zinc-200 p-6">
              <p className="text-sm font-medium text-zinc-500">
                Insight 02
              </p>

              <h3 className="mt-4 text-xl font-semibold">
                콘텐츠 이후의 반응이 더 오래 지속됩니다.
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-600">
                인용, 댓글, 투표와 토론은 콘텐츠가 종료된 이후에도 팬들의
                관계를 이어줍니다.
              </p>
            </article>

            <article className="rounded-3xl border border-zinc-200 p-6">
              <p className="text-sm font-medium text-zinc-500">
                Insight 03
              </p>

              <h3 className="mt-4 text-xl font-semibold">
                팬덤 플랫폼은 창작의 출발점이 될 수 있습니다.
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-600">
                외부 서비스를 대체하기보다, 팬 창작과 소통이 시작되는
                흐름을 더 자연스럽게 연결할 기회가 있습니다.
              </p>
            </article>
          </div>

          <div className="mt-16">
            <p className="text-sm font-medium text-zinc-500">
              Fan Segmentation
            </p>

            <h3 className="mt-3 text-2xl font-semibold">
              팬을 하나의 사용자로 보지 않았습니다.
            </h3>

            <div className="mt-7 grid gap-5 md:grid-cols-3">
              {fanSegments.map((segment) => (
                <article
                  key={segment.title}
                  className="rounded-3xl border border-zinc-200 p-6"
                >
                  <p className="text-sm text-zinc-500">{segment.title}</p>

                  <h4 className="mt-3 text-lg font-semibold">
                    {segment.korean}
                  </h4>

                  <p className="mt-4 text-sm leading-6 text-zinc-600">
                    {segment.description}
                  </p>

                  <div className="mt-6 rounded-2xl bg-zinc-50 p-4">
                    <p className="text-xs font-medium text-zinc-500">
                      Core Need
                    </p>

                    <p className="mt-2 text-sm leading-6 text-zinc-700">
                      {segment.need}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-12 rounded-3xl bg-[#f6f2ff] p-8">
            <p className="text-sm font-medium text-violet-700">
              Product Opportunity
            </p>

            <p className="mt-4 max-w-3xl text-2xl font-semibold leading-9">
              라이브 이후에도 팬들의 창작과 소통이 자연스럽게 이어지는
              경험을 설계한다.
            </p>
          </div>
        </Section>

        <Section
          id="solution"
          eyebrow="04 · Product Concept"
          title="PADO는 소비에서 창작과 참여로 이어지는 Fan Loop를 제안합니다."
          description="각 기능을 독립적으로 추가하기보다, 콘텐츠를 본 팬이 창작하고 다른 팬이 반응하며 다시 참여하는 하나의 순환 구조로 설계했습니다."
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
          eyebrow="05 · Trade-off & Feasibility"
          title="창작의 편의성만큼 권리자의 통제와 원본 보호도 중요했습니다."
          description="짧은 편집 기능은 기술적으로 구현 가능하더라도 저작권 허락을 대체하지 않습니다. 실제 서비스에서는 아티스트와 소속사의 계약과 운영 정책에 따라 기능 범위를 결정해야 합니다."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {copyrightPolicies.map((policy) => (
              <article
                key={policy.title}
                className="rounded-3xl border border-zinc-200 p-6"
              >
                <h3 className="text-lg font-semibold">{policy.title}</h3>

                <p className="mt-4 text-sm leading-7 text-zinc-600">
                  {policy.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-3xl bg-zinc-950 p-8 text-white">
            <p className="text-sm font-medium text-zinc-400">
              Remaining Risk
            </p>

            <p className="mt-4 max-w-3xl text-xl font-semibold leading-8">
              워터마크와 길이 제한은 출처 보호를 돕는 장치이지만, 원본
              콘텐츠의 2차 창작을 허용하는 법적 근거 자체가 될 수는
              없습니다.
            </p>

            <p className="mt-5 max-w-3xl text-sm leading-7 text-zinc-300">
              따라서 권리자별 허용 정책, 콘텐츠별 편집 가능 여부, 외부
              공유 범위와 삭제 요청 절차가 제품 정책에 함께 설계되어야
              합니다.
            </p>
          </div>

          <div className="mt-16">
            <p className="text-sm font-medium text-zinc-500">
              Success Metrics
            </p>

            <h3 className="mt-3 text-2xl font-semibold tracking-tight">
              기능 사용량이 아니라 창작과 상호작용의 순환을 측정합니다.
            </h3>

            <div className="mt-7 overflow-hidden rounded-3xl border border-zinc-200">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] text-left text-sm">
                  <thead className="bg-zinc-50 text-zinc-500">
                    <tr>
                      <th className="px-5 py-4 font-medium">Metric</th>
                      <th className="px-5 py-4 font-medium">
                        What It Validates
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {successMetrics.map((item) => (
                      <tr
                        key={item.metric}
                        className="border-t border-zinc-200"
                      >
                        <td className="px-5 py-4 font-medium">
                          {item.metric}
                        </td>

                        <td className="px-5 py-4 text-zinc-600">
                          {item.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="reflection"
          eyebrow="06 · Reflection"
          title="화면을 먼저 고친 경험이, 사용자 행동을 먼저 봐야 한다는 교훈이 됐습니다."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-zinc-200 p-7">
              <p className="text-sm font-medium text-zinc-500">
                What I Learned
              </p>

              <p className="mt-5 text-base leading-8 text-zinc-700">
                당시에는 UI를 새롭게 디자인하는 것 자체에 집중했습니다.
                그러나 화면의 완성도만으로는 왜 이 기능이 필요한지
                설명하기 어려웠습니다.
              </p>

              <p className="mt-4 text-base leading-8 text-zinc-700">
                프로젝트를 다시 검토하면서 디자인 결정은 화면이 아니라
                사용자의 실제 행동과 문제에서 시작해야 한다는 점을
                체감했습니다.
              </p>
            </article>

            <article className="rounded-3xl border border-zinc-200 p-7">
              <p className="text-sm font-medium text-zinc-500">
                What Changed After
              </p>

              <p className="mt-5 text-base leading-8 text-zinc-700">
                이후 프로젝트에서는 기능을 제안하기 전에 인터뷰, 리뷰
                분석과 사용자 여정을 통해 문제를 먼저 정의했습니다.
              </p>

              <p className="mt-4 text-base leading-8 text-zinc-700">
                PADO는 완벽한 리서치에서 시작된 프로젝트는 아니지만,
                제가 UI Designer의 관점에서 Product Designer의 관점으로
                전환하게 된 계기였습니다.
              </p>
            </article>
          </div>

          <div className="mt-8 rounded-3xl bg-zinc-950 p-8 text-white">
            <p className="max-w-4xl text-2xl font-semibold leading-9">
              좋은 디자인은 화면을 새롭게 만드는 것이 아니라, 사용자가
              이미 하고 있는 행동을 더 자연스럽게 연결하는 데서
              시작한다는 것을 배웠습니다.
            </p>
          </div>
        </Section>

        <section className="border-t border-zinc-200 py-20">
          <p className="text-sm font-medium text-zinc-500">
            Research Sources
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            근거와 가설을 구분했습니다.
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-zinc-200 p-6">
              <p className="text-sm font-medium text-zinc-500">
                User Evidence
              </p>

              <ul className="mt-5 space-y-3 text-sm leading-7 text-zinc-600">
                <li>Google Play 사용자 리뷰: Weverse, Bubble, Berriz</li>
                <li>X의 팬 편집 클립 및 재공유 사례</li>
                <li>YouTube의 라이브 요약·자막·하이라이트 편집 사례</li>
                <li>라이브 화면 녹화 및 편집 방식에 관한 사용자 Q&amp;A</li>
              </ul>
            </article>

            <article className="rounded-3xl border border-zinc-200 p-6">
              <p className="text-sm font-medium text-zinc-500">
                Conceptual Reference
              </p>

              <ul className="mt-5 space-y-3 text-sm leading-7 text-zinc-600">
                <li>
                  Henry Jenkins, <em>Convergence Culture</em>, 2006
                </li>
                <li>Henry Jenkins et al., Participatory Culture 관련 연구</li>
                <li>각 팬덤 서비스의 공식 앱과 공개 기능 자료</li>
              </ul>
            </article>
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-7 text-zinc-500">
            SNS 사례는 팬들의 플랫폼 외부 활동을 보여주는 관찰 근거이며,
            전체 팬을 대표하는 통계로 사용하지 않았습니다. Clip Studio와
            Reward는 이러한 행동 관찰을 기반으로 제안한 제품 가설이며
            실제 사용자 테스트가 필요한 영역입니다.
          </p>
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