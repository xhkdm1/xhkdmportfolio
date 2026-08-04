"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Check,
  Minus,
  Plus,
  Quote,
} from "lucide-react";
import type { ReactNode } from "react";

const timeline = [
  "Review",
  "Hypothesis",
  "Survey",
  "Insight",
  "Context",
  "Directions",
  "Evolution",
  "Alternatives",
];

const overview = [
  { label: "Period", value: "1–2 Weeks" },
  { label: "Team", value: "3 Product Designers" },
  { label: "Contribution", value: "공동 리서치 · 설계 · 의사결정" },
  { label: "Tools", value: "Figma" },
];

const reviewMetrics = [
  { label: "부정 리뷰", value: 90 },
  { label: "호출·배차", value: 20 },
  { label: "경로·내비", value: 14 },
  { label: "UI 복잡성", value: 9 },
  { label: "광고", value: 7 },
];

const surveyResults = [
  {
    question: "홈 화면 A–E 중 가장 선호한 화면은?",
    result: "구형 5×3 그리드",
    sub: "현재 UI는 1명만 선택",
  },
  {
    question: "카카오T를 한 단어로 표현한다면?",
    result: "택시 65%",
    sub: "이동 35%",
  },
  {
    question: "비 오는 날 앱 로딩 중 가장 먼저 떠오른 생각은?",
    result: "택시 vs 지하철",
    sub: "가장 빠른 이동수단 비교",
  },
  {
    question: "물건 보낼 때 다른 탭이 먼저 열렸다면?",
    result: "이동할 때",
    sub: "탭 이동 후 택시 선택",
  },
  {
    question: "택시 외 서비스를 대안으로 고려한 적이 있는가?",
    result: "전혀 아니다",
    sub: "응답이 압도적으로 우세",
  },
  {
    question: "카카오T가 이동 플랫폼이라고 말한다면?",
    result: "택시 앱 아닌가?",
    sub: "확장 서비스 인지 부족",
  },
];

const insights = [
  {
    observation: "택시 65% vs 이동 35%",
    interpretation:
      "사용자에게 택시는 여전히 하나의 기능이 아니라 카카오T 자체의 정체성으로 인식되었습니다.",
    implication: "택시 접근성을 유지합니다.",
  },
  {
    observation: "구형 5×3 배열 최다 선호",
    interpretation:
      "초기부터 이어진 좌측 상단 택시 배치와 익숙한 배열이 강한 사용성 기준으로 작동했습니다.",
    implication: "익숙한 배열 유지를 검토합니다.",
  },
  {
    observation: "다른 탭에서 이동 탭으로 복귀",
    interpretation:
      "상황별 시작 화면이 현재 목적과 일치하지 않으면 택시까지 추가 탐색이 발생했습니다.",
    implication: "시작 탭의 예측 가능성을 높입니다.",
  },
  {
    observation: "UI 복잡성 9% · 광고 7%",
    interpretation:
      "서비스 영역과 프로모션이 같은 화면에서 시각적으로 경쟁하고 있었습니다.",
    implication: "광고의 시각적 위계를 조정합니다.",
  },
  {
    observation: "택시 외 대안 고려 ‘전혀 아니다’ 우세",
    interpretation:
      "확장 서비스는 실질적인 대안보다 소요시간을 비교하는 참고 정보로 소비되는 경향을 보였습니다.",
    implication: "맥락에 맞는 이동수단 제안을 검토합니다.",
  },
];

const explorationCriteria = [
  {
    number: "01",
    title: "택시 접근성",
    body: "익숙한 핵심 기능인 택시의 위치와 도달성을 유지해야 했습니다.",
  },
  {
    number: "02",
    title: "서비스 발견성",
    body: "택시 외 이동 서비스도 현재 맥락 안에서 자연스럽게 발견할 수 있어야 했습니다.",
  },
  {
    number: "03",
    title: "기능과 프로모션의 위계",
    body: "프로모션을 유지하면서도 핵심 서비스 탐색과 시각적으로 경쟁하지 않도록 해야 했습니다.",
  },
];

const directions = [
  {
    number: "01",
    title: "최소 변경안",
    purpose: "기존 사용 습관과 택시 접근성을 최대한 유지",
    description:
      "현재 홈 구조를 크게 바꾸지 않고 익숙한 택시 위치와 기존 탐색 방식을 보존한 방향입니다.",
    pros: [
      "기존 UI와 유사해 학습 부담이 낮음",
      "택시 좌측 상단 위치 유지",
      "변경 범위와 구현 리스크가 가장 낮음",
    ],
    cons: [
      "문제 해결 강도가 약할 수 있음",
      "서비스 확장 인식 개선이 제한적임",
      "업데이트의 변화가 충분히 체감되지 않을 수 있음",
    ],
    image: "/images/kakaot/direction-01.png",
  },
  {
    number: "02",
    title: "프로모션 재배치안",
    purpose: "프로모션의 시각적 비중을 줄이고 서비스 탐색 강화",
    description:
      "광고의 크기와 위치를 조절해 서비스 탐색을 우선하면서 프로모션 노출은 유지한 방향입니다.",
    pros: [
      "광고 크기와 위치에 대한 부담 완화",
      "서비스 영역의 접근성과 가시성 강화",
      "화면의 시각적 복잡성 감소",
    ],
    cons: [
      "프로모션 수익성과 충돌할 가능성",
      "광고 클릭률 감소 우려",
      "광고 모델과 서비스 탐색 간 조정 필요",
    ],
    image: "/images/kakaot/direction-02.png",
  },
  {
    number: "03",
    title: "고정핀 재구성안",
    purpose: "택시 접근성과 서비스 확장성을 함께 확보",
    description:
      "택시 좌측 상단 배치를 복원하고 서비스와 광고 영역을 구조적으로 분리한 방향입니다.",
    pros: [
      "택시 좌측 상단 배치 복원",
      "서비스와 광고 영역을 구조적으로 분리",
      "익숙함과 확장 서비스 발견성을 함께 고려",
    ],
    cons: [
      "기능 밀도가 다시 높아질 위험",
      "카카오 디자인 시스템과 충돌할 가능성",
      "맥락별 서비스 구분의 의미가 약해질 수 있음",
    ],
    image: "/images/kakaot/direction-03.png",
  },
];

const tradeoffCriteria = [
  {
    title: "User Familiarity",
    body: "기존 사용자가 택시 기능을 얼마나 빠르게 찾을 수 있는가",
  },
  {
    title: "Service Discoverability",
    body: "택시 외 이동 서비스를 자연스럽게 발견할 수 있는가",
  },
  {
    title: "Visual Hierarchy",
    body: "기능과 프로모션이 명확한 위계를 가지는가",
  },
  {
    title: "Business Impact",
    body: "기존 프로모션 구조와 수익성을 얼마나 유지할 수 있는가",
  },
  {
    title: "Implementation Risk",
    body: "기존 디자인 시스템과 구조를 얼마나 크게 변경해야 하는가",
  },
];

const evolutionItems = [
  {
    src: "/images/kakaot/evolution-01.png",
    title: "초기 방향 정리",
    caption:
      "택시 접근성, 서비스 발견성, 프로모션 위계를 기준으로 초기 아이디어를 정리했습니다.",
  },
  {
    src: "/images/kakaot/evolution-02.png",
    title: "구조 비교",
    caption:
      "기존 홈 구조와 여러 대안을 같은 기준으로 비교할 수 있도록 정리했습니다.",
  },
  {
    src: "/images/kakaot/evolution-03.png",
    title: "아이디어 발산",
    caption:
      "탭, 서비스 그리드, 프로모션 위치를 다양하게 조합해 가능성을 넓혔습니다.",
  },
  {
    src: "/images/kakaot/evolution-04.png",
    title: "방향별 구체화",
    caption:
      "유사한 아이디어를 묶고 각 방향이 해결하는 문제를 구체화했습니다.",
  },
  {
    src: "/images/kakaot/evolution-05.png",
    title: "후보안 압축",
    caption:
      "사용성과 비즈니스 제약을 함께 검토해 비교 가능한 후보안으로 압축했습니다.",
  },
  {
    src: "/images/kakaot/evolution-06.png",
    title: "최종 비교 구조",
    caption:
      "광고 위치와 크기를 다르게 조정한 두 후보안을 비교 가능한 상태로 정리했습니다.",
  },
];

const outcomeCards = [
  {
    title: "What we found",
    body: "서비스의 확장 방향과 사용자의 택시 중심 인식 사이의 간극을 확인했습니다.",
  },
  {
    title: "What we compared",
    body: "익숙함, 발견성, 광고 위계, 비즈니스 영향과 구현 리스크를 함께 비교했습니다.",
  },
  {
    title: "What remains",
    body: "단일 정답보다 두 후보안의 비교 가능성을 남기고 추가 검증 과제를 정리했습니다.",
  },
];

export default function KakaoTCaseStudyPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F3] text-[#151515]">
      <Header />

      <section
        id="top"
        className="mx-auto w-full max-w-6xl px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-36 lg:px-12 lg:pb-32 lg:pt-40"
      >
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#77776F]">
            UX Research · Product Thinking · 2026
          </p>

          <h1 className="mt-3 text-4xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            Kakao T
            <br />
            Home Redesign
          </h1>
        </FadeIn>

        <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <FadeIn delay={0.08}>
            <div>
              <p className="max-w-3xl text-lg leading-8 text-[#484842] sm:text-xl sm:leading-9">
                사용자는 카카오T를 여전히 ‘택시 앱’으로 인식하고 있었지만,
                서비스는 통합 이동 플랫폼으로 빠르게 확장되고 있었습니다.
              </p>

              <p className="mt-5 max-w-3xl text-base leading-7 text-[#6A6A63] sm:text-lg sm:leading-8">
                이 간극이 홈 화면 탐색 행동에 어떤 영향을 주는지 확인하고,
                사용자의 익숙한 이용 습관과 서비스 확장 방향을 함께 고려한
                홈 화면 대안을 탐색했습니다.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.16}>
            <PortfolioImage
              src="/images/kakaot/hero.png"
              alt="카카오T 홈 화면 개선 프로젝트 대표 이미지"
              priority
            />
          </FadeIn>
        </div>

        <FadeIn delay={0.2}>
          <div className="mt-14 overflow-x-auto pb-3">
            <ol className="flex min-w-max items-center">
              {timeline.map((item, index) => (
                <li key={item} className="flex items-center">
                  <span className="rounded-full border border-[#D8D8D0] bg-white px-4 py-2 text-sm font-medium">
                    {item}
                  </span>
                  {index < timeline.length - 1 && (
                    <span className="mx-2 h-px w-8 bg-[#C8C8C0] md:w-14" />
                  )}
                </li>
              ))}
            </ol>
          </div>
        </FadeIn>
      </section>

      <section id="overview" className="border-y border-[#E3E3DC] bg-white">
        <div className="mx-auto grid w-full max-w-6xl px-5 sm:px-8 md:grid-cols-4 lg:px-12">
          {overview.map((item, index) => (
            <div
              key={item.label}
              className={`py-7 ${
                index > 0
                  ? "border-t border-[#E3E3DC] md:border-l md:border-t-0 md:pl-8"
                  : ""
              }`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#77776F]">
                {item.label}
              </p>
              <p className="mt-2 text-sm font-medium leading-6">{item.value}</p>
            </div>
          ))}
        </div>
      </section>

      <Section id="problem">
        <SectionHeading
          index="01"
          eyebrow="Problem"
          title="서비스는 확장됐지만, 사용자의 탐색 습관은 여전히 택시에 머물러 있었습니다."
          description="홈 화면 첫 진입 시 복잡한 정보와 상황별 탭 변화가 익숙한 택시 진입점을 찾는 과정에 추가 탐색을 만들 수 있다고 판단했습니다."
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn>
            <article className="h-full rounded-[32px] border border-[#E3E3DC] bg-white p-7 md:p-10">
              <p className="text-sm text-[#77776F]">Original problem statement</p>
              <blockquote className="mt-6 text-2xl font-medium leading-relaxed tracking-[-0.025em] md:text-3xl">
                “카카오T는 이동 플랫폼으로 확장되었지만, 사용자의 행동과
                기억은 여전히 ‘택시 앱’에 고정되어 있어 홈 화면에서 정체성
                불일치가 발생하고 있습니다.”
              </blockquote>
              <p className="mt-8 text-sm leading-7 text-[#77776F]">
                택시의 가시성이 낮아질수록 UI 선호도와 사용 직관성이 함께
                낮아질 것이라는 가설에서 출발했습니다.
              </p>
            </article>
          </FadeIn>

          <FadeIn delay={0.08}>
            <article className="rounded-[32px] bg-[#151515] p-7 text-white md:p-10">
              <p className="text-sm text-white/50">Conflict</p>
              <div className="mt-8 space-y-5">
                <p className="text-2xl font-semibold">택시 앱으로 기억하는 사용자</p>
                <ArrowDown className="text-[#FEE500]" />
                <p className="text-2xl font-semibold">
                  통합 이동 플랫폼으로 확장하는 서비스
                </p>
                <ArrowDown className="text-[#FEE500]" />
                <p className="text-2xl font-semibold text-[#FEE500]">
                  홈 화면 탐색 구조의 충돌
                </p>
              </div>
            </article>
          </FadeIn>
        </div>
      </Section>

      <section id="research" className="bg-[#ECECE6]">
        <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <SectionHeading
            index="02"
            eyebrow="Research"
            title="리뷰에서 문제를 발견하고, 가설을 세운 뒤 설문으로 경향을 확인했습니다."
            description="Review → Hypothesis → Survey → Validation 순서로 리서치를 진행했습니다."
          />

          <div className="grid gap-6 lg:grid-cols-2">
            <FadeIn>
              <article
                id="review-analysis"
                className="rounded-[32px] border border-[#E3E3DC] bg-white p-7 md:p-10"
              >
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#77776F]">
                  Review Analysis
                </p>
                <h3 className="text-3xl font-semibold tracking-[-0.04em]">
                  플레이스토어 리뷰 100건
                </h3>
                <p className="mt-3 text-sm text-[#77776F]">
                  2025.08.28–2026.02.05
                </p>

                <div className="mt-10 space-y-6">
                  {reviewMetrics.map((metric) => (
                    <MetricBar
                      key={metric.label}
                      label={metric.label}
                      value={metric.value}
                    />
                  ))}
                </div>

                <p className="mt-8 text-sm leading-7 text-[#77776F]">
                  홈 화면 개선과 직접 연결되는 신호로 UI 복잡성 9%와 광고
                  관련 의견 7%를 확인했습니다.
                </p>
              </article>
            </FadeIn>

            <FadeIn delay={0.08}>
              <article
                id="hypothesis"
                className="rounded-[32px] bg-[#FEE500] p-7 md:p-10"
              >
                <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-black/50">
                  Hypothesis
                </p>

                <div className="space-y-8">
                  <div>
                    <p className="text-sm font-semibold">H1</p>
                    <p className="mt-3 text-2xl font-semibold leading-snug tracking-[-0.025em]">
                      사용자는 카카오T를 여전히 택시 호출 앱으로 인식하며,
                      택시 진입점이 즉각 보이지 않을 때 편의성이 낮아진다고
                      느낄 것이다.
                    </p>
                  </div>
                  <div className="h-px bg-black/15" />
                  <div>
                    <p className="text-sm font-semibold">H2</p>
                    <p className="mt-3 text-2xl font-semibold leading-snug tracking-[-0.025em]">
                      바이크, 대리, 퀵 등 다양한 이동 서비스는 사용자에게 아직
                      충분히 와닿지 않을 것이다.
                    </p>
                  </div>
                </div>
              </article>
            </FadeIn>
          </div>

          <div id="survey" className="mt-16">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#77776F]">
              Survey
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] md:text-4xl">
              사용자 인식과 실제 탐색 행동을 확인했습니다.
            </h3>

            <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {surveyResults.map((item, index) => (
                <FadeIn key={item.question} delay={index * 0.04}>
                  <article className="h-full rounded-[28px] border border-[#E3E3DC] bg-white p-7">
                    <p className="text-sm leading-6 text-[#77776F]">
                      Q. {item.question}
                    </p>
                    <p className="mt-10 text-3xl font-semibold tracking-[-0.05em]">
                      {item.result}
                    </p>
                    <p className="mt-3 text-sm text-[#77776F]">{item.sub}</p>
                  </article>
                </FadeIn>
              ))}
            </div>

            <p className="mt-5 text-sm leading-7 text-[#77776F]">
              설문 참여자 수는 원본에 명시되어 있지 않아 임의의 표본 수는
              제시하지 않았습니다.
            </p>
          </div>

          <FadeIn>
            <div className="mt-8 grid gap-8 rounded-[32px] bg-white p-7 md:grid-cols-2 md:p-10">
              <QuoteCard
                quote="상단의 ‘어디로 갈까요?’가 가장 먼저 보여서 좋았어요. 목적지 우선 상황이 잦고, 익숙함 때문에 E를 골랐습니다."
                label="익숙한 탐색 습관"
              />
              <QuoteCard
                quote="그치만 너네는 택시 앱이잖아. 이동 플랫폼이라는 건 알고 있었는데 여전히 인지되지 않아요."
                label="브랜드 인식과 실제 인지의 괴리"
                bordered
              />
            </div>
          </FadeIn>

          <FadeIn>
            <article
              id="validation"
              className="mt-8 rounded-[32px] bg-[#151515] p-7 text-white md:p-10"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">
                Validation
              </p>
              <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
                설문 결과는 두 가설을 일관되게 뒷받침했습니다.
              </h3>

              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {[
                  "택시 중심의 브랜드 인식",
                  "택시 진입점 접근성의 중요성",
                  "확장 서비스에 대한 낮은 체감",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FEE500] text-black">
                      <Check className="h-4 w-4" />
                    </span>
                    <p className="font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </article>
          </FadeIn>
        </div>
      </section>

      <Section id="insight">
        <SectionHeading
          index="03"
          eyebrow="Key Insight"
          title="관찰된 행동을 해석하고, 각 인사이트를 설계 방향으로 연결했습니다."
        />

        <div className="overflow-hidden rounded-[32px] border border-[#E3E3DC] bg-white">
          <div className="hidden grid-cols-[1fr_1.3fr_0.9fr] border-b border-[#E3E3DC] bg-[#F0F0EA] px-7 py-4 text-xs font-semibold uppercase tracking-[0.17em] text-[#77776F] md:grid">
            <span>Observation</span>
            <span>Interpretation</span>
            <span>Design Implication</span>
          </div>

          {insights.map((item, index) => (
            <FadeIn key={item.observation}>
              <article
                className={`grid gap-4 px-7 py-7 md:grid-cols-[1fr_1.3fr_0.9fr] md:gap-10 ${
                  index > 0 ? "border-t border-[#E3E3DC]" : ""
                }`}
              >
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#99998F] md:hidden">
                    Observation
                  </p>
                  <p className="font-semibold">{item.observation}</p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#99998F] md:hidden">
                    Interpretation
                  </p>
                  <p className="leading-7 text-[#66665F]">
                    {item.interpretation}
                  </p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#99998F] md:hidden">
                    Design Implication
                  </p>
                  <p className="font-medium">{item.implication}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Section>

      <section id="context" className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <SectionHeading
            index="04"
            eyebrow="Service Context"
            title="서비스의 변화, 브랜드 전략, 사용자 인식을 한 흐름으로 연결했습니다."
            description="카카오T는 택시 호출 앱에서 통합 모빌리티 플랫폼으로 확장했지만, 사용자 인식은 같은 속도로 이동하지 않았습니다."
          />

          <div className="space-y-16">
            <ContextBlock
              eyebrow="UX Evolution"
              title="홈 화면은 통합 이동 플랫폼을 향해 계속 확장되었습니다."
              description="카카오T는 택시 중심의 일렬 탭 구조에서 서비스별 아이콘, 상단 탭, 맥락별 탐색 구조로 변화했습니다. 그러나 화면의 기능은 늘어나는 동안 익숙한 택시 진입점의 가시성은 상대적으로 약해졌습니다."
              src="/images/kakaot/ux-history.png"
              alt="카카오T 홈 화면 UX 변천사"
            />

            <ContextBlock
              eyebrow="Brand Strategy"
              title="브랜드의 핵심 가치는 이동의 연결에서 통합과 혁신으로 확장되었습니다."
              description="초기의 목표는 빠른 택시 호출이었고, 이후 모든 이동 수단을 연결하는 플랫폼으로 성장했습니다. 현재는 데이터와 AI를 활용한 맞춤형 이동 경험을 지향합니다."
              src="/images/kakaot/brand-value.png"
              alt="카카오T 브랜드 핵심 가치 변화"
            />

            <ContextBlock
              eyebrow="Research Summary"
              title="하지만 사용자는 여전히 카카오T를 ‘익숙한 택시 앱’으로 인식했습니다."
              description="브랜드가 지향하는 통합 모빌리티와 실제 사용자가 체감하는 단일 목적형 택시 앱 사이의 차이가 확인됐습니다. 이 간극은 택시 접근성과 확장 서비스 발견성을 동시에 다뤄야 하는 설계 과제로 이어졌습니다."
              src="/images/kakaot/survey-insight.png"
              alt="카카오T 설문 결과 주요 인사이트"
            />
          </div>

          <FadeIn>
            <div className="mt-16 rounded-[32px] bg-[#151515] p-7 text-white md:p-10">
              <p className="text-sm text-white/45">Core Gap</p>
              <p className="mt-5 max-w-4xl text-2xl font-semibold leading-9 tracking-[-0.03em] sm:text-3xl sm:leading-10">
                브랜드는 통합 이동 플랫폼으로 확장했지만, 사용자는 여전히
                택시를 가장 빠르게 찾는 기준으로 홈 화면을 평가했습니다.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <Section id="user-flow">
        <SectionHeading
          index="05"
          eyebrow="User Flow"
          title="원하는 서비스가 아닌 탭에서 시작할 때 추가 탐색이 발생했습니다."
          description="홈 화면 진입 후 상황별 탭이 현재 목적과 일치하는지가 핵심 분기점이었습니다."
        />

        <FadeIn>
          <div className="rounded-[36px] bg-[#F0F0EA] p-6 md:p-12">
            <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
              <FlowCard
                title="홈 화면 진입"
                body="통합검색 · 집 · 회사 · 자주 쓰는 서비스"
              />
              <ArrowRight className="mx-auto hidden text-[#77776F] md:block" />
              <FlowCard
                title="상황별 탭 선택"
                body="이동 · 운전 · 물건 보내기 · 해외"
              />
              <ArrowRight className="mx-auto hidden text-[#77776F] md:block" />
              <FlowCard title="원하는 서비스인가?" body="YES · NO" accent />
            </div>

            <div className="mx-auto mt-8 max-w-2xl rounded-[28px] border border-[#E3E3DC] bg-white p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#77776F]">
                NO
              </p>
              <p className="mt-3 text-xl font-semibold leading-8">
                전체 서비스를 다시 탐색하거나 ‘이동할 때’ 탭으로 되돌아간
                뒤 택시를 선택합니다.
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>

      <section id="exploration" className="bg-[#ECECE6]">
        <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <SectionHeading
            index="06"
            eyebrow="Design Exploration"
            title="리서치 결과를 세 가지 개선 조건으로 전환했습니다."
            description="하나의 UI를 바로 선택하지 않고, 사용자의 익숙함과 서비스 확장 방향, 프로모션 구조를 동시에 고려했습니다."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {explorationCriteria.map((item, index) => (
              <FadeIn key={item.number} delay={index * 0.06}>
                <article className="h-full rounded-[30px] border border-[#E3E3DC] bg-white p-7">
                  <p className="text-sm text-[#77776F]">{item.number}</p>
                  <h3 className="mt-8 text-2xl font-semibold tracking-[-0.03em]">
                    {item.title}
                  </h3>
                  <p className="mt-4 leading-7 text-[#66665F]">{item.body}</p>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-10 rounded-[32px] bg-[#FEE500] p-7 md:p-10">
              <p className="text-sm font-semibold">Exploration Question</p>
              <p className="mt-5 max-w-4xl text-2xl font-semibold leading-9 tracking-[-0.03em] sm:text-3xl">
                택시의 익숙한 접근성을 지키면서, 확장 서비스를 발견하게 하고,
                프로모션과 기능의 위계를 다시 세울 수 있을까?
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <Section id="directions">
        <SectionHeading
          index="07"
          eyebrow="Direction Comparison"
          title="익숙함, 발견성, 비즈니스 구조 사이에서 세 가지 방향을 비교했습니다."
          description="리서치 결과를 하나의 개선안으로 바로 수렴하지 않고, 각 방향이 해결하는 문제와 새롭게 만드는 비용을 함께 검토했습니다."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {directions.map((direction, index) => (
            <FadeIn key={direction.title} delay={index * 0.06}>
              <article className="h-full overflow-hidden rounded-[32px] border border-[#E3E3DC] bg-white">
                <PortfolioImage
                  src={direction.image}
                  alt={`${direction.title} 화면`}
                  className="rounded-none border-0"
                />

                <div className="p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#77776F]">
                    Direction {direction.number}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                    {direction.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-[#151515]">
                    {direction.purpose}
                  </p>
                  <p className="mt-4 leading-7 text-[#66665F]">
                    {direction.description}
                  </p>

                  <div className="mt-8 space-y-7">
                    <DirectionList
                      icon={<Plus className="h-4 w-4" />}
                      title="Strength"
                      items={direction.pros}
                    />
                    <DirectionList
                      icon={<Minus className="h-4 w-4" />}
                      title="Trade-off"
                      items={direction.cons}
                    />
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Section>

      <section id="decision" className="bg-[#151515] text-white">
        <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <SectionHeading
            index="08"
            eyebrow="Trade-off"
            title="하나의 정답보다, 각 방향이 해결하는 문제와 발생시키는 비용을 비교했습니다."
            description="근거 없는 점수로 순위를 매기기보다 사용자 경험, 비즈니스, 구현 리스크를 함께 검토했습니다."
            dark
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {tradeoffCriteria.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.04}>
                <article className="h-full rounded-[28px] border border-white/15 p-6">
                  <p className="text-sm text-white/35">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-8 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/55">
                    {item.body}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-12 rounded-[32px] border border-white/15 p-7 md:p-10">
              <p className="text-sm text-white/45">Decision Summary</p>
              <p className="mt-5 max-w-5xl text-xl leading-9 text-white/80 md:text-2xl">
                최소 변경안은 익숙함과 구현 안정성이 높았고, 프로모션
                재배치안은 탐색성과 화면 위계를 강화했습니다. 고정핀
                재구성안은 두 목표 사이의 균형 가능성을 보여줬지만, 기능
                밀도와 디자인 시스템 정합성에 대한 추가 검증이 필요했습니다.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <Section id="evolution">
        <SectionHeading
          index="09"
          eyebrow="Design Evolution"
          title="검토 결과를 반영하며 홈 화면 구조를 단계적으로 조정했습니다."
          description="초기 아이디어를 한 번에 완성하지 않고, 택시 접근성, 서비스 발견성, 프로모션 위치와 크기를 반복해서 조정했습니다."
        />

        <div className="grid gap-8 md:grid-cols-2">
          {evolutionItems.map((item, index) => (
            <FadeIn key={item.src} delay={(index % 2) * 0.05}>
              <figure className="h-full rounded-[32px] border border-[#E3E3DC] bg-white p-4 sm:p-5">
                <PortfolioImage
                  src={item.src}
                  alt={`카카오T 개선안 변천사 ${index + 1}`}
                  className="rounded-[24px]"
                />
                <figcaption className="px-2 pb-2 pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#77776F]">
                    Step {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#66665F]">
                    {item.caption}
                  </p>
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </Section>

      <section id="alternatives" className="bg-white">
        <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <SectionHeading
            index="10"
            eyebrow="Detailed Alternatives"
            title="프로모션 위계를 다르게 조정한 두 후보안을 구체화했습니다."
            description="두 안 모두 핵심 서비스 탐색을 우선하지만, 광고의 위치와 크기를 서로 다른 방식으로 조정했습니다."
          />

          <div className="grid gap-8 lg:grid-cols-2">
            <AlternativeCard
              label="Candidate A"
              title="광고 우측 이동안"
              description="기존 왼쪽 영역의 프로모션을 오른쪽으로 이동해 택시와 이동 서비스의 탐색 흐름을 먼저 인지하도록 했습니다. 프로모션을 제거하지 않으면서 기능과 광고가 시각적으로 경쟁하는 문제를 완화하려는 방향입니다."
              points={[
                "서비스 기능 우선 탐색",
                "기존 광고 노출 유지",
                "기능과 프로모션의 시각적 경쟁 완화",
                "광고 비즈니스 구조를 완전히 제거하지 않음",
              ]}
              src="/images/kakaot/wireframe-a.png"
              alt="카카오T 광고 우측 이동안"
            />

            <AlternativeCard
              label="Candidate B"
              title="띠 배너 전환안"
              description="큰 프로모션 카드를 화면 하단의 띠 배너로 전환해 서비스 그리드의 가시성을 확보했습니다. 프로모션은 보조 정보로 인식되도록 시각적 위계를 조정했습니다."
              points={[
                "광고 면적 축소",
                "서비스 그리드 가시성 확대",
                "화면 복잡성 완화",
                "광고 클릭률 감소 가능성은 추가 검증 필요",
              ]}
              src="/images/kakaot/wireframe-b.png"
              alt="카카오T 띠 배너 전환안"
            />
          </div>

          <FadeIn>
            <div className="mt-10 rounded-[32px] bg-[#F0F0EA] p-7 md:p-10">
              <p className="text-sm text-[#77776F]">Convergence</p>
              <p className="mt-4 max-w-4xl text-2xl font-semibold leading-9 tracking-[-0.03em]">
                세 방향을 검토한 뒤, 프로모션의 위치와 면적을 다르게 조정한
                두 후보안을 비교 가능한 상태로 남겼습니다.
              </p>
              <p className="mt-5 max-w-3xl leading-8 text-[#66665F]">
                한 안을 임의로 최종 정답으로 확정하기보다 실제 사용자
                검증에서 어떤 구조가 더 빠른 택시 접근성과 높은 서비스
                발견성을 만드는지 확인할 필요가 있다고 판단했습니다.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="outcome" className="bg-[#FEE500]">
        <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <SectionHeading
            index="11"
            eyebrow="Outcome"
            title="결과 화면보다 대안을 만들고 비교하는 의사결정 과정을 명확히 남겼습니다."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {outcomeCards.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.06}>
                <article className="h-full rounded-[30px] bg-white p-7">
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="mt-12 text-2xl font-semibold leading-snug tracking-[-0.03em]">
                    {item.body}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="mt-12 overflow-x-auto">
              <div className="flex min-w-max items-center">
                {[
                  "리뷰와 설문으로 간극 확인",
                  "개선 조건 3개 정의",
                  "방향 3개 비교",
                  "변천 과정 기록",
                  "후보안 2개 구체화",
                ].map((item, index, array) => (
                  <div key={item} className="flex items-center">
                    <span className="rounded-full border border-black/20 bg-white px-5 py-3 text-sm font-medium">
                      {item}
                    </span>
                    {index < array.length - 1 && (
                      <ArrowRight className="mx-3 h-4 w-4" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <Section id="reflection">
        <SectionHeading
          index="12"
          eyebrow="Reflection"
          title="좋은 화면보다, 왜 이 정도의 변화가 적절한지를 설명하는 과정이 더 중요했습니다."
        />

        <FadeIn>
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
            <p className="text-sm text-[#77776F]">Personal reflection</p>

            <div className="space-y-7 text-xl leading-9 text-[#41413C]">
              <p>
                세 명이 역할을 나누지 않고 리서치와 설계, 의사결정을 함께
                진행하며 각 대안의 장단점을 공동으로 검토했습니다.
              </p>
              <p>
                강사와 멘토의 의견을 그대로 정답으로 받아들이기보다, 팀이
                정리한 사용자 경험과 비즈니스 제약을 기준으로 변화의 범위를
                결정하려고 했습니다.
              </p>
              <p>
                다시 진행한다면 설문 참여자 수와 조건을 명확히 기록하고, 두
                후보안을 동일한 과업으로 검증해 택시 도달 시간과 서비스
                발견성의 차이를 확인하겠습니다.
              </p>
            </div>
          </div>
        </FadeIn>
      </Section>

      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-5 sm:px-8 lg:px-12">
      <a href="#top" className="text-sm font-semibold">
        HYEJIN · PORTFOLIO
      </a>

      <nav className="hidden items-center gap-7 text-sm text-[#77776F] md:flex">
        <a href="#research" className="transition-colors hover:text-black">
          Research
        </a>
        <a href="#context" className="transition-colors hover:text-black">
          Context
        </a>
        <a href="#directions" className="transition-colors hover:text-black">
          Directions
        </a>
        <a href="#evolution" className="transition-colors hover:text-black">
          Evolution
        </a>
        <a href="#outcome" className="transition-colors hover:text-black">
          Outcome
        </a>
      </nav>
    </header>
  );
}

function Section({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <section
      id={id}
      className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      {children}
    </section>
  );
}

function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  dark = false,
}: {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`mb-14 grid gap-5 border-t pt-6 md:grid-cols-[170px_1fr] ${
        dark ? "border-white/15" : "border-[#E3E3DC]"
      }`}
    >
      <p className={dark ? "text-sm text-white/45" : "text-sm text-[#77776F]"}>
        {index} · {eyebrow}
      </p>

      <div>
        <h2 className="max-w-5xl text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl">
          {title}
        </h2>

        {description && (
          <p
            className={`mt-5 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8 ${
              dark ? "text-white/55" : "text-[#66665F]"
            }`}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

function FadeIn({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

function MetricBar({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span>{label}</span>
        <strong>{value}%</strong>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-[#E8E8E2]">
        <div
          className="h-full rounded-full bg-[#151515]"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function QuoteCard({
  quote,
  label,
  bordered = false,
}: {
  quote: string;
  label: string;
  bordered?: boolean;
}) {
  return (
    <article
      className={
        bordered
          ? "border-t border-[#E3E3DC] pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0"
          : ""
      }
    >
      <Quote className="h-8 w-8" />
      <blockquote className="mt-7 text-xl leading-9">{quote}</blockquote>
      <p className="mt-5 text-sm text-[#77776F]">{label}</p>
    </article>
  );
}

function FlowCard({
  title,
  body,
  accent = false,
}: {
  title: string;
  body: string;
  accent?: boolean;
}) {
  return (
    <article
      className={`rounded-[28px] p-6 ${
        accent ? "bg-[#FEE500]" : "bg-white"
      }`}
    >
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-[#77776F]">{body}</p>
    </article>
  );
}

function DirectionList({
  icon,
  title,
  items,
}: {
  icon: ReactNode;
  title: string;
  items: string[];
}) {
  return (
    <div>
      <div className="mb-3 flex items-center gap-2 text-sm font-semibold">
        {icon}
        {title}
      </div>

      <ul className="space-y-2 text-sm leading-6 text-[#77776F]">
        {items.map((item) => (
          <li key={item}>· {item}</li>
        ))}
      </ul>
    </div>
  );
}

function ContextBlock({
  eyebrow,
  title,
  description,
  src,
  alt,
}: {
  eyebrow: string;
  title: string;
  description: string;
  src: string;
  alt: string;
}) {
  return (
    <FadeIn>
      <article className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#77776F]">
            {eyebrow}
          </p>
          <h3 className="mt-4 text-2xl font-semibold leading-9 tracking-[-0.03em] sm:text-3xl">
            {title}
          </h3>
          <p className="mt-5 leading-8 text-[#66665F]">{description}</p>
        </div>

        <PortfolioImage src={src} alt={alt} />
      </article>
    </FadeIn>
  );
}

function AlternativeCard({
  label,
  title,
  description,
  points,
  src,
  alt,
}: {
  label: string;
  title: string;
  description: string;
  points: string[];
  src: string;
  alt: string;
}) {
  return (
    <FadeIn>
      <article className="h-full overflow-hidden rounded-[32px] border border-[#E3E3DC] bg-[#F7F7F3]">
        <PortfolioImage src={src} alt={alt} className="rounded-none border-0" />
        <div className="p-7 md:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#77776F]">
            {label}
          </p>
          <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
            {title}
          </h3>
          <p className="mt-5 leading-8 text-[#66665F]">{description}</p>
          <ul className="mt-7 space-y-3 text-sm leading-7 text-[#55554F]">
            {points.map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#151515]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </FadeIn>
  );
}

function PortfolioImage({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={2400}
      height={1500}
      priority={priority}
      draggable={false}
      className={`h-auto w-full rounded-[28px] border border-[#E3E3DC] bg-white object-contain ${className}`}
    />
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#E3E3DC] bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
        <div>
          <p className="text-sm text-[#77776F]">Next project</p>
          <p className="mt-1 text-xl font-semibold">
            WithBuddy · AI Onboarding SaaS
          </p>
        </div>

        <a
          href="/projects/withbuddy"
          className="flex items-center gap-2 text-sm font-semibold"
        >
          View next case study
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </footer>
  );
}