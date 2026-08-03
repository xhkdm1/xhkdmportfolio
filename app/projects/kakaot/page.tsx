import type { ReactNode } from "react";

const overview = [
  { label: "Period", value: "1–2 Weeks" },
  { label: "Team", value: "3 Product Designers" },
  { label: "Contribution", value: "공동 리서치 · 설계 · 의사결정" },
  { label: "Tools", value: "Figma" },
];

const timeline = [
  "Review",
  "Hypothesis",
  "Survey",
  "Insight",
  "3 Directions",
  "Trade-off",
  "Wireframe",
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
    question: "물건 보낼 때 탭이 먼저 열렸다면?",
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
      "카카오T 사용자에게 택시는 여전히 기능이 아니라 서비스의 정체성으로 인식되었습니다.",
    implication: "택시 접근성을 유지합니다.",
  },
  {
    observation: "구형 5×3 배열 최다 선호",
    interpretation:
      "좌측 상단 택시 배치와 익숙한 배열이 강한 사용성 기준으로 작동했습니다.",
    implication: "익숙한 배열 유지를 검토합니다.",
  },
  {
    observation: "다른 탭에서 이동 탭으로 복귀",
    interpretation:
      "현재 목적과 다른 시작 화면이 택시 도달까지 추가 탐색 단계를 만들었습니다.",
    implication: "시작 탭의 예측 가능성을 높입니다.",
  },
  {
    observation: "UI 복잡성 9% · 광고 7%",
    interpretation:
      "서비스와 프로모션이 같은 화면에서 시각적으로 경쟁하고 있었습니다.",
    implication: "광고의 시각적 위계를 조정합니다.",
  },
  {
    observation: "택시 외 대안 고려 ‘전혀 아니다’ 우세",
    interpretation:
      "확장 서비스가 실질적인 이동 대안으로 충분히 인식되지 않았습니다.",
    implication: "다른 이동수단의 발견 가능성을 높입니다.",
  },
];

const directions = [
  {
    number: "01",
    title: "최소 변경안",
    description:
      "기존 UI의 구조를 크게 바꾸지 않고 택시 접근성과 익숙함을 유지한 방향입니다.",
    strengths: [
      "기존 UI와 유사해 학습 부담이 낮음",
      "택시 좌측 상단 위치 유지",
      "기존 서비스 구조와 정체성을 존중",
    ],
    tradeoffs: [
      "문제 해결 강도가 약할 수 있음",
      "변화의 필요성이 명확하지 않을 수 있음",
      "확장 서비스 인식 개선 효과가 제한적일 수 있음",
    ],
    image: "/images/kakaot/direction-01.webp",
  },
  {
    number: "02",
    title: "프로모션 재배치안",
    description:
      "프로모션의 크기와 위치를 조정하고 서비스 탐색을 우선한 방향입니다.",
    strengths: [
      "광고 크기와 위치에 대한 부담 완화",
      "서비스 접근성 강화",
      "화면의 시각적 복잡성 감소",
    ],
    tradeoffs: [
      "프로모션 노출이 후순위로 밀릴 수 있음",
      "기존 광고 비즈니스 모델과 충돌 가능",
      "광고 클릭률 감소 우려",
    ],
    image: "/images/kakaot/direction-02.webp",
  },
  {
    number: "03",
    title: "고정핀 재구성안",
    description:
      "서비스 그리드와 광고를 분리하고 익숙한 택시 위치를 복원한 방향입니다.",
    strengths: [
      "서비스와 광고 영역을 구조적으로 분리",
      "택시 좌측 상단 배치 복원",
      "숨은 기능의 위치 재조정",
    ],
    tradeoffs: [
      "카카오 디자인 시스템과 다를 수 있음",
      "맥락별 구분의 의미가 약해질 수 있음",
      "기능 밀도가 다시 높아질 위험",
    ],
    image: "/images/kakaot/direction-03.webp",
  },
];

const outcomes = [
  {
    title: "What we found",
    body: "서비스의 확장 방향과 사용자의 택시 중심 인식 사이의 간극을 확인했습니다.",
  },
  {
    title: "Trade-off",
    body: "익숙함, 비즈니스 임팩트, 화면 복잡성 사이의 상충 관계를 비교했습니다.",
  },
  {
    title: "Open ending",
    body: "단일 정답보다 두 후보안의 비교 가능성을 남긴 채 프로젝트를 마무리했습니다.",
  },
];

export default function KakaoTPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F3] text-zinc-950">
      <Hero />
      <Overview />

      <ProjectSection
        id="problem"
        index="01"
        eyebrow="Problem"
        title="서비스는 확장됐지만, 사용자의 탐색 습관은 여전히 택시에 머물러 있었습니다."
        description="홈 화면의 복잡성과 상황별 탭 변화가 익숙한 택시 진입점을 찾는 과정에 추가 탐색을 만들 수 있다고 판단했습니다."
      >
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card>
            <p className="text-sm text-zinc-500">
              Original problem statement
            </p>

            <blockquote className="mt-6 text-2xl font-medium leading-relaxed tracking-[-0.025em] sm:text-3xl">
              “카카오T는 이동 플랫폼으로 확장되었지만, 사용자의 행동과
              기억은 여전히 ‘택시 앱’에 고정되어 있어 홈 화면에서 정체성
              불일치가 발생하고 있습니다.”
            </blockquote>

            <p className="mt-8 text-sm leading-7 text-zinc-500">
              택시의 가시성이 낮아질수록 UI 선호도와 사용 직관성이 함께
              낮아질 것이라는 가설에서 출발했습니다.
            </p>
          </Card>

          <article className="rounded-[2rem] bg-zinc-950 p-7 text-white sm:p-10">
            <p className="text-sm text-white/50">Conflict</p>

            <div className="mt-8 space-y-5">
              <p className="text-2xl font-semibold">
                택시 앱으로 기억하는 사용자
              </p>

              <p className="text-2xl text-[#FEE500]">↓</p>

              <p className="text-2xl font-semibold">
                통합 이동 플랫폼으로 확장하는 서비스
              </p>

              <p className="text-2xl text-[#FEE500]">↓</p>

              <p className="text-2xl font-semibold text-[#FEE500]">
                홈 화면 탐색 구조의 충돌
              </p>
            </div>
          </article>
        </div>
      </ProjectSection>

      <ResearchSection />

      <ProjectSection
        id="insight"
        index="03"
        eyebrow="Key Insight"
        title="관찰된 행동을 해석하고, 각 인사이트를 설계 방향으로 연결했습니다."
      >
        <div className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white">
          <div className="hidden grid-cols-[1fr_1.3fr_0.9fr] border-b border-zinc-200 bg-zinc-100 px-7 py-4 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500 md:grid">
            <span>Observation</span>
            <span>Interpretation</span>
            <span>Design Implication</span>
          </div>

          {insights.map((item, index) => (
            <article
              key={item.observation}
              className={`grid gap-5 px-7 py-7 md:grid-cols-[1fr_1.3fr_0.9fr] md:gap-10 ${
                index > 0 ? "border-t border-zinc-200" : ""
              }`}
            >
              <InsightCell label="Observation">
                <p className="font-semibold">{item.observation}</p>
              </InsightCell>

              <InsightCell label="Interpretation">
                <p className="leading-7 text-zinc-600">
                  {item.interpretation}
                </p>
              </InsightCell>

              <InsightCell label="Design Implication">
                <p className="font-medium">{item.implication}</p>
              </InsightCell>
            </article>
          ))}
        </div>
      </ProjectSection>

      <FlowSection />

      <ProjectSection
        id="exploration"
        index="05"
        eyebrow="Design Exploration"
        title="익숙함, 비즈니스 임팩트, 복잡성 사이에서 세 가지 방향을 비교했습니다."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {directions.map((direction) => (
            <article
              key={direction.number}
              className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white"
            >
              <ImagePlaceholder
                src={direction.image}
                label={`${direction.title} 화면`}
                ratio="portrait"
              />

              <div className="p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
                  Direction {direction.number}
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.03em]">
                  {direction.title}
                </h3>

                <p className="mt-4 leading-7 text-zinc-600">
                  {direction.description}
                </p>

                <DirectionList
                  title="Strength"
                  symbol="+"
                  items={direction.strengths}
                />

                <DirectionList
                  title="Trade-off"
                  symbol="−"
                  items={direction.tradeoffs}
                />
              </div>
            </article>
          ))}
        </div>
      </ProjectSection>

      <DecisionSection />

      <ProjectSection
        id="wireframe"
        index="07"
        eyebrow="IA & Wireframe"
        title="기존 구조와 두 개선안을 비교 가능한 상태로 구체화했습니다."
        description="두 후보안은 하나로 확정하지 않고, 각 구조가 만드는 장단점을 비교할 수 있도록 유지했습니다."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          <ImagePlaceholder
            src="/images/kakaot/ia-current.webp"
            label="기존 UI IA"
          />
          <ImagePlaceholder
            src="/images/kakaot/ia-a.webp"
            label="개선 UI-A IA"
          />
          <ImagePlaceholder
            src="/images/kakaot/ia-b.webp"
            label="개선 UI-B IA"
          />
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
              Candidate A
            </p>

            <ImagePlaceholder
              src="/images/kakaot/wireframe-a.webp"
              label="와이어프레임 개선안 A"
              ratio="portrait"
            />
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
              Candidate B
            </p>

            <ImagePlaceholder
              src="/images/kakaot/wireframe-b.webp"
              label="와이어프레임 개선안 B"
              ratio="portrait"
            />
          </div>
        </div>
      </ProjectSection>

      <OutcomeSection />

      <ProjectSection
        id="reflection"
        index="09"
        eyebrow="Reflection"
        title="좋은 화면보다, 왜 이 정도의 변화가 적절한지를 설명하는 과정이 더 중요했습니다."
      >
        <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <p className="text-sm text-zinc-500">Personal reflection</p>

          <div className="space-y-7 text-lg leading-8 text-zinc-700 sm:text-xl sm:leading-9">
            <p>
              세 명이 역할을 나누지 않고 리서치와 설계, 의사결정을 함께
              진행하면서 각 대안의 장단점을 공동으로 검토했습니다.
            </p>

            <p>
              강사와 멘토의 의견을 그대로 정답으로 받아들이기보다, 팀이
              정리한 장단점과 비즈니스 제약을 기준으로 변화의 범위를
              결정하려고 했습니다.
            </p>

            <p>
              다시 진행한다면 설문 참여자 수와 조건을 명확히 기록하고,
              인사이트에서 도출한 제안이 최종 와이어프레임에 어떻게
              반영됐는지 추적할 수 있는 의사결정 문서를 남기겠습니다.
            </p>
          </div>
        </div>
      </ProjectSection>

      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
          <div>
            <p className="text-sm text-zinc-500">Next project</p>
            <p className="mt-1 text-xl font-semibold">
              WithBuddy · AI Onboarding SaaS
            </p>
          </div>

          <a
            href="/projects/withbuddy"
            className="text-sm font-semibold text-zinc-950"
          >
            View next case study →
          </a>
        </div>
      </footer>
    </main>
  );
}

function Hero() {
  return (
    <section
      id="top"
      className="mx-auto w-full max-w-6xl px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-36 lg:px-12 lg:pb-32 lg:pt-40"
    >
      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
        UX Research · Information Architecture · 2026
      </p>

      <h1 className="mt-3 text-4xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
        Kakao T
        <br />
        Home Redesign
      </h1>

      <div className="mt-14 grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <p className="max-w-3xl text-lg leading-8 text-zinc-700 sm:text-xl sm:leading-9">
            사용자는 카카오T를 여전히 ‘택시 앱’으로 인식하고 있었지만,
            서비스는 통합 이동 플랫폼으로 빠르게 확장되고 있었습니다.
          </p>

          <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            이 간극이 실제 홈 화면 탐색 행동에 어떤 영향을 주는지
            확인하고, 사용자의 기존 이용 습관을 유지하면서 다양한 이동
            서비스를 발견할 수 있는 정보구조를 탐색했습니다.
          </p>
        </div>

        <ImagePlaceholder
          src="/images/kakaot/hero.webp"
          label="카카오T 홈 화면 대표 목업"
        />
      </div>

      <div className="mt-14 overflow-x-auto pb-3">
        <ol className="flex min-w-max items-center">
          {timeline.map((item, index) => (
            <li key={item} className="flex items-center">
              <span className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium">
                {item}
              </span>

              {index < timeline.length - 1 && (
                <span className="mx-2 h-px w-8 bg-zinc-300 md:w-14" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Overview() {
  return (
    <section className="border-y border-zinc-200 bg-white">
      <div className="mx-auto grid w-full max-w-6xl px-5 sm:px-8 md:grid-cols-4 lg:px-12">
        {overview.map((item, index) => (
          <div
            key={item.label}
            className={`py-7 ${
              index > 0
                ? "border-t border-zinc-200 md:border-l md:border-t-0 md:pl-8"
                : ""
            }`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-500">
              {item.label}
            </p>

            <p className="mt-2 text-sm font-medium leading-6">{item.value}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function ResearchSection() {
  return (
    <section id="research" className="bg-[#ECECE6]">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <SectionHeading
          index="02"
          eyebrow="Research"
          title="리뷰에서 문제를 발견하고, 가설을 세운 뒤 설문으로 경향을 확인했습니다."
          description="Review → Hypothesis → Survey → Validation 순서로 리서치를 진행했습니다."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
              Review Analysis
            </p>

            <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
              플레이스토어 리뷰 100건
            </h3>

            <p className="mt-3 text-sm text-zinc-500">
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

            <p className="mt-8 text-sm leading-7 text-zinc-500">
              홈 화면 개선과 직접 연결되는 항목은 UI 복잡성 9%와 광고 관련
              의견 7%로 압축했습니다.
            </p>
          </Card>

          <article className="rounded-[2rem] bg-[#FEE500] p-7 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-black/50">
              Hypothesis
            </p>

            <div className="mt-6 space-y-8">
              <Hypothesis
                label="H1"
                text="사용자는 카카오T를 여전히 택시 호출 앱으로 인식하며, 택시 진입점이 즉각 보이지 않을 때 편의성이 낮아진다고 느낄 것이다."
              />

              <div className="h-px bg-black/15" />

              <Hypothesis
                label="H2"
                text="바이크, 대리, 퀵 등 카카오T의 다양한 이동 서비스는 사용자에게 아직 충분히 와닿지 않을 것이다."
              />
            </div>

            <p className="mt-10 text-sm leading-7 text-black/60">
              두 가설을 검증하기 위해 사용자 인식과 탐색 행동을 확인하는
              설문을 설계했습니다.
            </p>
          </article>
        </div>

        <div className="mt-16">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
            Survey
          </p>

          <h3 className="mt-3 text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            사용자 인식과 실제 탐색 행동을 확인했습니다.
          </h3>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {surveyResults.map((item) => (
              <Card key={item.question}>
                <p className="text-sm leading-6 text-zinc-500">
                  Q. {item.question}
                </p>

                <p className="mt-10 text-3xl font-semibold tracking-[-0.05em]">
                  {item.result}
                </p>

                <p className="mt-3 text-sm text-zinc-500">{item.sub}</p>
              </Card>
            ))}
          </div>

          <p className="mt-5 text-sm leading-7 text-zinc-500">
            설문 참여자 수는 원본에 명시되어 있지 않으며, 문항별 스탬프
            기준 약 9명 내외로 추정됩니다.
          </p>
        </div>

        <article className="mt-8 rounded-[2rem] bg-zinc-950 p-7 text-white sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/50">
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
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FEE500] font-bold text-black">
                  ✓
                </span>
                <p className="font-medium">{item}</p>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}

function FlowSection() {
  return (
    <section id="user-flow" className="bg-white">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <SectionHeading
          index="04"
          eyebrow="User Flow"
          title="원하는 서비스가 아닌 탭에서 시작할 때 추가 탐색이 발생했습니다."
          description="홈 화면 진입 후 상황별 탭이 현재 목적과 일치하는지가 핵심 분기점이었습니다."
        />

        <div className="rounded-[2rem] bg-zinc-100 p-6 sm:p-12">
          <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr_auto_1fr] md:items-center">
            <FlowCard
              title="홈 화면 진입"
              body="통합검색 · 집 · 회사 · 자주 쓰는 서비스"
            />

            <span className="hidden text-2xl text-zinc-400 md:block">→</span>

            <FlowCard
              title="상황별 탭 선택"
              body="이동 · 운전 · 물건 보내기 · 해외"
            />

            <span className="hidden text-2xl text-zinc-400 md:block">→</span>

            <FlowCard
              title="원하는 서비스인가?"
              body="YES · NO"
              accent
            />
          </div>

          <div className="mx-auto mt-8 max-w-2xl rounded-[1.75rem] border border-zinc-200 bg-white p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">
              NO
            </p>

            <p className="mt-3 text-xl font-semibold leading-8">
              전체 서비스를 다시 탐색하거나 ‘이동할 때’ 탭으로 되돌아간 뒤
              택시를 선택합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DecisionSection() {
  return (
    <section id="decision" className="bg-zinc-950 text-white">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <SectionHeading
          index="06"
          eyebrow="Decision"
          title="사용자 경험만이 아니라 비즈니스 구조와 디자인 시스템까지 함께 고려했습니다."
          description="팀이 먼저 정리한 장단점과 실무 제약을 기준으로 후보안을 비교했습니다."
          dark
        />

        <div className="grid gap-6 lg:grid-cols-3">
          <DecisionCard
            number="01"
            title="User Experience"
            body="핵심 서비스의 접근성과 정보 위계를 우선했습니다."
          />

          <DecisionCard
            number="02"
            title="Business"
            body="프로모션 노출과 기존 광고 모델의 영향도 함께 고려했습니다."
          />

          <DecisionCard
            number="03"
            title="Design System"
            body="기존 카카오T 컴포넌트 재사용과 구현 부담을 검토했습니다."
          />
        </div>

        <blockquote className="mt-12 max-w-5xl border-l-2 border-[#FEE500] pl-7 text-2xl leading-relaxed sm:text-4xl">
          “추구와 현실 사이의 괴리를 브랜딩 방향 자체의 문제로 보기보다,
          최종 목적지로 보고 보완하는 방식으로 디자인 전략을 세웠습니다.”
        </blockquote>

        <article className="mt-12 rounded-[2rem] border border-white/15 p-7 sm:p-10">
          <p className="text-sm text-white/50">
            Promotion component exploration
          </p>

          <h3 className="mt-4 text-2xl font-semibold">
            서비스 영역을 침범하던 프로모션을 띠 배너 형태로 검토했습니다.
          </h3>

          <p className="mt-5 max-w-3xl leading-8 text-white/60">
            카카오T 표준 호출 페이지의 띠 배너 컴포넌트를 홈 화면 하단에
            적용해 서비스와 광고의 시각적 경쟁을 줄이는 방향을
            검토했습니다.
          </p>

          <div className="mt-8">
            <ImagePlaceholder
              src="/images/kakaot/promotion-before-after.webp"
              label="기존 프로모션과 띠 배너 검토안 비교"
              dark
            />
          </div>
        </article>
      </div>
    </section>
  );
}

function OutcomeSection() {
  return (
    <section id="outcome" className="bg-[#FEE500]">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <SectionHeading
          index="08"
          eyebrow="Outcome"
          title="하나의 정답보다 각 대안이 만드는 사용자 경험과 비즈니스 트레이드오프를 비교하는 데 집중했습니다."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {outcomes.map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] bg-white p-7"
            >
              <p className="text-sm font-semibold">{item.title}</p>

              <p className="mt-12 text-2xl font-semibold leading-snug tracking-[-0.03em]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectSection({
  id,
  index,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <SectionHeading
        index={index}
        eyebrow={eyebrow}
        title={title}
        description={description}
      />

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
    <header
      className={`mb-14 grid gap-5 border-t pt-6 md:mb-16 md:grid-cols-[170px_1fr] ${
        dark ? "border-white/15" : "border-zinc-200"
      }`}
    >
      <p className={dark ? "text-sm text-white/45" : "text-sm text-zinc-500"}>
        {index} · {eyebrow}
      </p>

      <div>
        <h2 className="max-w-5xl text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl">
          {title}
        </h2>

        {description && (
          <p
            className={`mt-5 max-w-3xl text-base leading-7 sm:text-lg sm:leading-8 ${
              dark ? "text-white/55" : "text-zinc-600"
            }`}
          >
            {description}
          </p>
        )}
      </div>
    </header>
  );
}

function Card({ children }: { children: ReactNode }) {
  return (
    <article className="rounded-[2rem] border border-zinc-200 bg-white p-7 sm:p-10">
      {children}
    </article>
  );
}

function InsightCell({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400 md:hidden">
        {label}
      </p>
      {children}
    </div>
  );
}

function MetricBar({
  label,
  value,
}: {
  label: string;
  value: number;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span>{label}</span>
        <strong>{value}%</strong>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-zinc-200">
        <div
          className="h-full rounded-full bg-zinc-950"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function Hypothesis({
  label,
  text,
}: {
  label: string;
  text: string;
}) {
  return (
    <div>
      <p className="text-sm font-semibold">{label}</p>
      <p className="mt-3 text-2xl font-semibold leading-snug tracking-[-0.025em]">
        {text}
      </p>
    </div>
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
      className={`rounded-[1.75rem] p-6 ${
        accent ? "bg-[#FEE500]" : "bg-white"
      }`}
    >
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-zinc-500">{body}</p>
    </article>
  );
}

function DirectionList({
  title,
  symbol,
  items,
}: {
  title: string;
  symbol: string;
  items: string[];
}) {
  return (
    <div className="mt-8">
      <p className="text-sm font-semibold">
        {symbol} {title}
      </p>

      <ul className="mt-3 space-y-2 text-sm leading-6 text-zinc-500">
        {items.map((item) => (
          <li key={item}>· {item}</li>
        ))}
      </ul>
    </div>
  );
}

function DecisionCard({
  number,
  title,
  body,
}: {
  number: string;
  title: string;
  body: string;
}) {
  return (
    <article className="rounded-[2rem] border border-white/15 p-7">
      <p className="text-sm text-white/40">{number}</p>
      <h3 className="mt-10 text-2xl font-semibold">{title}</h3>
      <p className="mt-4 leading-7 text-white/55">{body}</p>
    </article>
  );
}

function ImagePlaceholder({
  src,
  label,
  ratio = "wide",
  dark = false,
}: {
  src: string;
  label: string;
  ratio?: "wide" | "portrait";
  dark?: boolean;
}) {
  const ratioClass =
    ratio === "portrait" ? "aspect-[4/5]" : "aspect-[16/10]";

  return (
    <div
      className={`flex ${ratioClass} items-center justify-center overflow-hidden rounded-[1.75rem] border border-dashed p-6 text-center ${
        dark
          ? "border-white/20 bg-white/5 text-white/60"
          : "border-zinc-300 bg-zinc-100 text-zinc-500"
      }`}
    >
      <div>
        <p className="text-sm font-medium">{label}</p>
        <p className="mt-2 break-all text-xs opacity-70">{src}</p>
      </div>
    </div>
  );
}