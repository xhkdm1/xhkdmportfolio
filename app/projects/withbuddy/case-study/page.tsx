import Link from "next/link";
import type { ReactNode } from "react";

const PRODUCT_URL = "https://withbuddy.itsdev.kr/login";
const LANDING_URL =
  "https://landing-6jhzo92pk-xhkdm1s-projects.vercel.app/";
const WDS_URL =
  "https://www.figma.com/design/aM6xVXn64liN8cinzkjMg4/WDS-3%ED%8C%80_%EC%9D%BC%EB%8B%A8%EB%AA%A8%EC%97%AC-?node-id=3-4423&t=YDHDFH9xBWgHTXgJ-1";

const navigation = [
  { label: "Problem", href: "#problem" },
  { label: "Research", href: "#research" },
  { label: "Reframing", href: "#reframing" },
  { label: "Decisions", href: "#decisions" },
  { label: "Experience", href: "#experience" },
  { label: "Outcome", href: "#outcome" },
];

const researchMethods = [
  ["필드 인터뷰", "신입사원", "n=2", "직접 설계·진행"],
  ["심층 인터뷰", "신입사원", "n=9", "분석 참여"],
  ["설문조사", "신입사원", "n=277", "분석 참여"],
  ["구매자 인터뷰", "경영지원 담당자", "n=6", "분석 참여"],
];

const hypotheses = [
  [
    "신입은 질문을 망설인다",
    "확인",
    "팀 분위기와 무관하게 사소한 질문에는 자기검열이 남았다.",
  ],
  [
    "문서가 있어도 사람에게 묻는다",
    "확인",
    "문서를 읽어도 맥락이 불명확하면 사람에게 다시 확인했다.",
  ],
  [
    "AI 온보딩 도구 수요가 있다",
    "조건부 확인",
    "회사 문서에 근거하고 범위가 명확한 AI일 때 수용 의사가 높았다.",
  ],
  [
    "반복 질문의 문서화가 유용하다",
    "확인",
    "실제 질문이 누적될수록 다음 온보딩에 도움이 된다는 반응이 있었다.",
  ],
];

const decisions = [
  {
    number: "01",
    title: "구매자 언어로 메시지를 바꿨다",
    problem:
      "사용자인 신입과 구매자인 경영지원 담당자가 서로 다른 문제를 느끼고 있었다.",
    options: [
      "신입 중심: 질문할 곳이 생겼다는 메시지",
      "듀얼 메시지: 신입과 담당자를 한 문장에 함께 표현",
      "담당자 중심: 반복 응대를 줄인다는 메시지",
    ],
    selected: "담당자 중심 메시지",
    reason:
      "랜딩페이지의 목적은 구매자의 문제 인식을 만드는 것이었고, 신입 경험은 채팅 화면 비주얼로 보완했다.",
    tradeoff:
      "신입이 처음 봤을 때 자신의 서비스라고 느끼는 정도가 약해질 수 있다. 파일럿에서 첫 로그인 전환으로 확인할 예정이다.",
  },
  {
    number: "02",
    title: "기능 목록 대신 반복이 줄어드는 루프를 보여줬다",
    problem:
      "여러 기능을 나열해도 시간이 지날수록 담당자의 개입이 줄어드는 이유는 보이지 않았다.",
    options: [
      "핵심 기능 3개 카드",
      "문서 업로드부터 답변까지 6단계 나열",
      "같은 질문의 1차·2차 경험을 비교하는 4단계 시나리오",
    ],
    selected: "4단계 운영 시나리오",
    reason:
      "처음에는 담당자가 개입하지만 문서를 보강한 뒤에는 같은 질문이 자동 처리된다는 차이를 직접 보여줄 수 있었다.",
    tradeoff:
      "개별 기능의 세부 설명은 줄었다. 기능 설명은 MyBuddy와 Admin Console 섹션으로 분리했다.",
  },
  {
    number: "03",
    title: "신입용 챗봇을 운영 가능한 콘솔로 확장했다",
    problem:
      "신입 채팅 화면만으로는 미응답 질문을 보강하거나 담당자가 효과를 확인할 수 없었다.",
    options: [
      "신입용 챗봇만 유지",
      "담당자용 Admin Console과 문서 보강 흐름 추가",
    ],
    selected: "Admin Console 추가",
    reason:
      "담당자가 미응답을 확인하고 문서를 보강해야 다음 질문부터 자동화율이 높아지는 구조가 완성됐다.",
    tradeoff:
      "관리자가 계정과 문서를 준비해야 하는 초기 부담이 커졌다. 이 부담은 여전히 파일럿에서 검증해야 한다.",
  },
];

const nextMetrics = [
  ["반복 문의 자동 처리율", "RAG 답변과 미응답 비율", "운영 루프의 효과"],
  ["담당자 직접 응대 건수", "파일럿 전후 비교", "업무 중단 감소"],
  ["문서 보강 완료율", "관리자 행동", "Admin Console 사용성"],
  ["첫 질문까지 걸린 시간", "신입 진입 행동", "Quick Tap 효과"],
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
    <section id={id} className="scroll-mt-24 border-t border-zinc-200 py-24">
      <div className="mb-12 max-w-3xl">
        <p className="mb-3 text-sm font-medium text-zinc-500">{eyebrow}</p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-5 text-base leading-7 text-zinc-600 sm:text-lg">
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
      className={`flex min-h-64 items-center justify-center rounded-3xl border border-dashed border-zinc-300 bg-zinc-50 px-6 text-center ${className}`}
    >
      <div>
        <p className="text-sm font-medium text-zinc-700">시각자료 삽입 예정</p>
        <p className="mt-2 max-w-md text-sm leading-6 text-zinc-500">
          {label}
        </p>
      </div>
    </div>
  );
}

function MetricCard({
  value,
  label,
  note,
}: {
  value: string;
  label: string;
  note?: string;
}) {
  return (
    <div className="rounded-3xl border border-zinc-200 bg-white p-6">
      <p className="text-3xl font-semibold tracking-tight">{value}</p>
      <p className="mt-3 text-sm font-medium text-zinc-800">{label}</p>
      {note && <p className="mt-2 text-sm leading-6 text-zinc-500">{note}</p>}
    </div>
  );
}

function DecisionCard({
  number,
  title,
  problem,
  options,
  selected,
  reason,
  tradeoff,
}: {
  number: string;
  title: string;
  problem: string;
  options: string[];
  selected: string;
  reason: string;
  tradeoff: string;
}) {
  return (
    <article className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8">
      <div className="flex flex-col gap-4 border-b border-zinc-200 pb-6 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-medium text-zinc-400">Decision {number}</p>
          <h3 className="mt-2 text-2xl font-semibold tracking-tight">{title}</h3>
        </div>
        <span className="w-fit rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
          Product Design
        </span>
      </div>

      <div className="mt-7 grid gap-8 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium text-zinc-500">문제</p>
          <p className="mt-3 leading-7 text-zinc-700">{problem}</p>
          <p className="mt-7 text-sm font-medium text-zinc-500">
            검토한 선택지
          </p>
          <ul className="mt-3 space-y-3">
            {options.map((option) => (
              <li
                key={option}
                className="rounded-2xl bg-zinc-50 px-4 py-3 text-sm leading-6 text-zinc-600"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-zinc-500">선택</p>
          <p className="mt-3 text-lg font-semibold text-zinc-900">{selected}</p>
          <p className="mt-6 text-sm font-medium text-zinc-500">선택 이유</p>
          <p className="mt-3 leading-7 text-zinc-700">{reason}</p>
          <div className="mt-6 rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
            <p className="text-sm font-medium text-zinc-700">Trade-off</p>
            <p className="mt-2 text-sm leading-6 text-zinc-600">{tradeoff}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function WithBuddyCaseStudyPage() {
  return (
    <main className="min-h-screen bg-white px-4 pb-24 pt-24 text-zinc-950 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 flex items-center gap-2 text-sm text-zinc-500">
          <Link href="/projects/withbuddy" className="hover:text-zinc-900">
            WithBuddy
          </Link>
          <span>/</span>
          <span>Case Study</span>
        </div>

        <section className="pb-24">
          <p className="mb-5 text-sm font-medium text-zinc-500">
            B2B SaaS · AI Agent · Product Design
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
            반복되는 신입 질문을
            <br className="hidden sm:block" /> 담당자가 매번 답하지 않아도
            되도록.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-600">
            문서 기반 AI가 반복 문의를 먼저 처리하고, 답하지 못한 질문은
            관리자의 문서 보강으로 이어지도록 운영 구조를 설계했다.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
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
              className="inline-flex items-center rounded-full border border-zinc-200 px-5 py-3 text-sm font-medium transition hover:bg-zinc-50"
            >
              View Landing Page ↗
            </a>
          </div>

          <div className="mt-14 grid gap-4 rounded-3xl border border-zinc-200 p-6 md:grid-cols-3">
            <div>
              <p className="text-sm text-zinc-500">Role</p>
              <p className="mt-2 font-medium">Product Designer</p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                UX Research · IA · Product Design · Design System · QA
              </p>
            </div>
            <div>
              <p className="text-sm text-zinc-500">Team</p>
              <p className="mt-2 font-medium">6 Members</p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                PM 1 · Design 1 · FE 1 · BE 2 · AI 1
              </p>
            </div>
            <div>
              <p className="text-sm text-zinc-500">Duration</p>
              <p className="mt-2 font-medium">2026.03 — 2026.07</p>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                구름 빌더스리그 Round 2
              </p>
            </div>
          </div>

          <VisualPlaceholder
            label="WithBuddy 대표 화면 또는 실제 서비스 화면 콜라주"
            className="mt-8 min-h-[420px]"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <MetricCard value="277" label="Research" note="신입사원 대상 자체 설문" />
            <MetricCard
              value="Core Loop"
              label="Design Contribution"
              note="미응답에서 문서 보강으로 이어지는 운영 구조"
            />
            <MetricCard value="98%" label="Team Outcome" note="AI 정답률 · 팀 기술 성과" />
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
          id="problem"
          eyebrow="01 · Problem Discovery"
          title="신입과 담당자에게 서로 다른 고통이 있었다."
          description="문제를 수치로 먼저 설명하기보다, 현장에서 직접 들은 말에서 출발했다."
        >
          <div className="grid gap-5 md:grid-cols-2">
            <blockquote className="rounded-3xl bg-zinc-950 p-7 text-white">
              <p className="text-xl leading-8">
                “바로 답해줄 수 있는 존재가 있었다면 그냥 바로 넘어갈 수
                있었을 것 같아요.”
              </p>
              <footer className="mt-8 text-sm text-zinc-400">
                신입 인터뷰이 · 1년차 이하
              </footer>
            </blockquote>
            <blockquote className="rounded-3xl border border-zinc-200 p-7">
              <p className="text-xl leading-8">
                “들어올 때마다 똑같은 내용을 다시 설명하는 게 가장
                번거로웠어요.”
              </p>
              <footer className="mt-8 text-sm text-zinc-500">
                소규모 조직 경영지원 담당자
              </footer>
            </blockquote>
          </div>
          <VisualPlaceholder
            label="신입의 질문 장벽과 담당자의 반복 응대를 대비한 문제 다이어그램"
            className="mt-6"
          />
        </Section>

        <Section
          id="research"
          eyebrow="02 · Research Evidence"
          title="가설을 세우고, 질문이 발생하는 맥락을 확인했다."
          description="리서치의 양보다 어떤 발견이 이후 설계 결정으로 이어졌는지에 집중했다."
        >
          <div className="overflow-hidden rounded-3xl border border-zinc-200">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-left text-sm">
                <thead className="bg-zinc-50 text-zinc-500">
                  <tr>
                    <th className="px-5 py-4 font-medium">방법</th>
                    <th className="px-5 py-4 font-medium">대상</th>
                    <th className="px-5 py-4 font-medium">규모</th>
                    <th className="px-5 py-4 font-medium">기여</th>
                  </tr>
                </thead>
                <tbody>
                  {researchMethods.map(([method, target, scale, contribution]) => (
                    <tr key={`${method}-${scale}`} className="border-t border-zinc-200">
                      <td className="px-5 py-4 font-medium">{method}</td>
                      <td className="px-5 py-4 text-zinc-600">{target}</td>
                      <td className="px-5 py-4 text-zinc-600">{scale}</td>
                      <td className="px-5 py-4 text-zinc-600">{contribution}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <MetricCard value="41.1%" label="질문하는 것 자체가 부담스럽다" />
            <MetricCard value="83.3%" label="AI 에이전트의 도움을 기대한다" />
            <MetricCard value="62.6%" label="반복 안내 경험이 있다" />
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {hypotheses.map(([hypothesis, result, evidence]) => (
              <article key={hypothesis} className="rounded-3xl border border-zinc-200 p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold">{hypothesis}</h3>
                  <span className="shrink-0 rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-600">
                    {result}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-6 text-zinc-600">{evidence}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-zinc-50 p-7">
            <p className="text-sm font-medium text-zinc-500">예상 밖의 발견</p>
            <p className="mt-3 max-w-3xl text-lg leading-8">
              팀 분위기가 좋다고 말한 신입도 사소한 질문 앞에서는
              망설였다. 심리적 안전감이 있어도 질문을 직접 만드는 부담은
              남았고, 이 발견을 Quick Tap 설계로 연결했다.
            </p>
          </div>

          <VisualPlaceholder
            label="CJM 중 입사 이전부터 첫날까지의 Pain과 Opportunity 구간"
            className="mt-6"
          />
        </Section>

        <Section
          id="reframing"
          eyebrow="03 · User / Buyer Reframing"
          title="사용자와 구매자가 다르다는 발견이 문제의 주어를 바꿨다."
          description="신입의 불편을 해결하는 제품에서, 담당자의 반복 응대 비용을 줄이는 B2B SaaS로 포지셔닝을 재정리했다."
        >
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-3xl border border-zinc-200 p-7">
              <p className="text-sm font-medium text-zinc-500">User</p>
              <h3 className="mt-3 text-2xl font-semibold">신입사원</h3>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-zinc-600">
                <li>눈치가 보여 사소한 질문을 미룬다.</li>
                <li>물어볼 사람과 공식 경로가 불명확하다.</li>
                <li>빠르게 맥락을 파악하고 실수를 줄이고 싶다.</li>
              </ul>
            </article>
            <article className="rounded-3xl bg-zinc-950 p-7 text-white">
              <p className="text-sm font-medium text-zinc-400">Buyer</p>
              <h3 className="mt-3 text-2xl font-semibold">경영지원 담당자</h3>
              <ul className="mt-6 space-y-3 text-sm leading-6 text-zinc-300">
                <li>같은 질문에 반복해서 답한다.</li>
                <li>민감한 규정 설명에서 감정 소모가 발생한다.</li>
                <li>온보딩 대응을 줄이고 본업에 집중하고 싶다.</li>
              </ul>
            </article>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-zinc-200 p-7">
              <p className="text-sm font-medium text-zinc-500">집중 대상</p>
              <p className="mt-4 text-xl font-semibold">
                30~100인, 전담 HR이 부족한 조직
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                반복 문의가 비용으로 체감되기 시작하면서도 대규모 HR
                시스템을 도입하기 어려운 조직에 집중했다.
              </p>
            </div>
            <div className="rounded-3xl border border-zinc-200 p-7">
              <p className="text-sm font-medium text-zinc-500">의도적 제외</p>
              <p className="mt-4 text-xl font-semibold">
                전담 교육 조직이 있는 대기업
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                교육 콘텐츠 운영이 핵심인 조직보다 반복적인 규정·절차
                문의가 누적되는 환경을 우선했다.
              </p>
            </div>
          </div>

          <VisualPlaceholder
            label="User-Buyer 관계 다이어그램과 Persona 미니 카드 2종"
            className="mt-6"
          />
        </Section>

        <Section
          id="problem-reframing"
          eyebrow="04 · Problem Reframing"
          title="제품을 바꾼 것이 아니라 증명할 가치의 주어를 바꿨다."
        >
          <div className="grid gap-4 md:grid-cols-2">
            <article className="rounded-3xl border border-zinc-200 p-7">
              <p className="text-sm font-medium text-zinc-500">Round 1</p>
              <h3 className="mt-3 text-2xl font-semibold">
                신입은 바로 물어볼 곳이 없다.
              </h3>
              <p className="mt-4 text-sm leading-6 text-zinc-600">
                성공 기준은 신입이 눈치 없이 질문하는 경험이었다.
              </p>
            </article>
            <article className="rounded-3xl bg-zinc-950 p-7 text-white">
              <p className="text-sm font-medium text-zinc-400">Round 2</p>
              <h3 className="mt-3 text-2xl font-semibold">
                담당자가 같은 질문을 반복해서 처리한다.
              </h3>
              <p className="mt-4 text-sm leading-6 text-zinc-300">
                성공 기준을 반복 문의 자동 처리와 담당자 개입 감소로
                옮겼다.
              </p>
            </article>
          </div>

          <VisualPlaceholder
            label="Round 1 Hero와 Round 2 Hero의 실제 화면 Before / After"
            className="mt-6"
          />

          <div className="mt-10 rounded-3xl border border-zinc-200 p-7">
            <p className="text-sm font-medium text-zinc-500">Decision Timeline</p>
            <ol className="mt-6 grid gap-5 md:grid-cols-3">
              {[
                ["2026.03", "신입 인터뷰와 설문으로 질문 장벽 확인"],
                ["2026.04", "구매자 인터뷰에서 반복 응대 비용 발견"],
                ["2026.05", "담당자 중심 메시지와 Admin 구조 확정"],
                ["2026.06", "WDS와 QA 기준 정리"],
                ["2026.07", "파일럿 준비 및 실제 배포"],
              ].map(([date, text]) => (
                <li key={date} className="rounded-2xl bg-zinc-50 p-5">
                  <p className="text-sm font-medium text-zinc-500">{date}</p>
                  <p className="mt-3 text-sm leading-6 text-zinc-700">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </Section>

        <Section
          id="decisions"
          eyebrow="05 · Design Decisions"
          title="좋은 선택보다 무엇을 버렸는지를 기록했다."
          description="세 가지 결정은 서로 독립된 기능 선택이 아니라, 담당자를 설득하고 운영 효과를 만드는 하나의 구조로 연결된다."
        >
          <div className="space-y-6">
            {decisions.map((decision) => (
              <DecisionCard key={decision.number} {...decision} />
            ))}
          </div>
        </Section>

        <Section
          id="core-loop"
          eyebrow="06 · Core Loop"
          title="한 번 놓친 질문도 다음 신입에게는 반복되지 않도록."
          description="AI가 답하지 못한 질문을 실패로 끝내지 않고, 문서 보강으로 이어지는 운영 데이터로 전환했다."
        >
          <div className="grid gap-4 lg:grid-cols-4">
            {[
              ["01", "미답변 질문", "AI가 답하지 못한 질문을 감지한다."],
              ["02", "보강 후보", "빈도와 맥락을 관리자에게 보여준다."],
              ["03", "문서 보강", "담당자가 필요한 내용을 한 번 등록한다."],
              ["04", "반복 해결", "다음 신입에게는 AI가 즉시 답한다."],
            ].map(([number, title, description]) => (
              <article key={number} className="rounded-3xl border border-zinc-200 p-6">
                <p className="text-sm text-zinc-400">STEP {number}</p>
                <h3 className="mt-3 text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{description}</p>
              </article>
            ))}
          </div>
          <VisualPlaceholder
            label="같은 질문이 STEP 1과 STEP 4에서 다른 결과를 만드는 4단계 화면 흐름"
            className="mt-6 min-h-[360px]"
          />
        </Section>

        <Section
          id="experience"
          eyebrow="07 · Product Experience"
          title="신입에게는 질문하기 쉬운 경험을, 담당자에게는 운영 가능한 경험을."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-zinc-200 p-7">
              <p className="text-sm font-medium text-zinc-500">MyBuddy Experience</p>
              <h3 className="mt-3 text-2xl font-semibold">
                질문을 만드는 부담을 줄였다.
              </h3>
              <div className="mt-6 space-y-5">
                <div>
                  <p className="font-medium">Buddy Nudge</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    입사 전 필요한 정보를 먼저 제안해 질문이 생기기 전
                    접근할 수 있게 했다.
                  </p>
                </div>
                <div>
                  <p className="font-medium">Quick Tap</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    자유 입력만 제공하지 않고 추천 질문을 선택하게 해 첫
                    행동의 부담을 낮췄다.
                  </p>
                </div>
                <div>
                  <p className="font-medium">출처 태그</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    답변이 사내 문서에 근거했다는 신뢰 신호를 항상
                    노출했다.
                  </p>
                </div>
              </div>
              <VisualPlaceholder
                label="Buddy Nudge · Q&A 답변 · no_result 화면 3종"
                className="mt-7"
              />
            </article>

            <article className="rounded-3xl bg-zinc-950 p-7 text-white">
              <p className="text-sm font-medium text-zinc-400">
                Admin Console Experience
              </p>
              <h3 className="mt-3 text-2xl font-semibold">
                관리 기능이 아니라 개선 흐름을 설계했다.
              </h3>
              <div className="mt-6 space-y-5 text-zinc-300">
                <div>
                  <p className="font-medium text-white">운영 KPI</p>
                  <p className="mt-2 text-sm leading-6">
                    반복 문의 자동 처리율과 문서 보강 필요 항목을 한눈에
                    확인하도록 구성했다.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-white">문서 교체 UX</p>
                  <p className="mt-2 text-sm leading-6">
                    삭제 후 재업로드하던 흐름을 동일 파일 감지와 교체
                    확인으로 단축했다.
                  </p>
                </div>
                <div>
                  <p className="font-medium text-white">계정 상태</p>
                  <p className="mt-2 text-sm leading-6">
                    PRE · ACTIVE · READ_ONLY · INACTIVE 상태에 따라 접근
                    범위를 다르게 설계했다.
                  </p>
                </div>
              </div>
              <VisualPlaceholder
                label="Admin Console 대시보드 · 문서 교체 Before/After · IA"
                className="mt-7 border-zinc-700 bg-zinc-900 text-zinc-300"
              />
            </article>
          </div>
        </Section>

        <Section
          id="design-system"
          eyebrow="08 · Design System"
          title="사람과 AI가 같은 규칙을 참조하도록 만들었다."
          description="컴포넌트 수를 늘리는 것보다 디자인·개발·AI 코딩 도구가 같은 언어를 쓰게 하는 데 집중했다."
        >
          <div className="grid gap-5 md:grid-cols-3">
            {[
              [
                "Screen ID",
                "화면 이름을 서비스 영역·기능·상태·디바이스 기준으로 통일해 QA와 개발 커뮤니케이션의 기준을 만들었다.",
              ],
              [
                "Annotation",
                "Usage, State, Behavior, Validation, Data·API, A11y 등 화면 안에 필요한 스펙을 함께 기록했다.",
              ],
              [
                "AI-friendly",
                "Figma와 코드의 토큰·컴포넌트 네이밍을 맞춰 AI가 생성한 코드도 같은 규칙을 따르도록 했다.",
              ],
            ].map(([title, description]) => (
              <article key={title} className="rounded-3xl border border-zinc-200 p-6">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-4 text-sm leading-6 text-zinc-600">{description}</p>
              </article>
            ))}
          </div>
          <VisualPlaceholder
            label="WDS Foundation · Screen ID · Annotation Badge · 주요 Component"
            className="mt-6 min-h-[360px]"
          />
          <a
            href={WDS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full border border-zinc-200 px-5 py-3 text-sm font-medium transition hover:bg-zinc-50"
          >
            Open WDS in Figma ↗
          </a>
        </Section>

        <Section
          id="outcome"
          eyebrow="09 · Outcome"
          title="개인 기여, 팀 성과, 아직 검증할 것을 분리했다."
          description="파일럿 전 단계의 0→1 프로젝트이므로 실제 사용자 행동 데이터가 아직 없다는 점을 숨기지 않았다."
        >
          <div className="grid gap-5 lg:grid-cols-3">
            <article className="rounded-3xl border border-zinc-200 p-7">
              <p className="text-sm font-medium text-zinc-500">
                Design Contribution
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-zinc-700">
                <li>리서치 인사이트를 User / Buyer 구조로 재정리</li>
                <li>미응답을 문서 보강으로 연결하는 Core Loop 설계</li>
                <li>MyBuddy · Admin Console · WDS · QA 구조 설계</li>
              </ul>
            </article>
            <article className="rounded-3xl bg-zinc-950 p-7 text-white">
              <p className="text-sm font-medium text-zinc-400">Team Outcome</p>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-zinc-300">
                <li>AI 정답률 64% → 98%</li>
                <li>평균 응답 시간 0.7초</li>
                <li>AI 연산 비용 70% 절감</li>
                <li>Prompt Attack 8종 방어 검증</li>
              </ul>
            </article>
            <article className="rounded-3xl border border-zinc-200 p-7">
              <p className="text-sm font-medium text-zinc-500">Current Status</p>
              <p className="mt-5 text-sm leading-6 text-zinc-700">
                실제 서비스와 랜딩페이지를 배포했고, 조직 대상 파일럿을
                준비하고 있다. 사용자 행동 데이터는 파일럿 이후
                업데이트할 예정이다.
              </p>
            </article>
          </div>

          <div className="mt-8 overflow-hidden rounded-3xl border border-zinc-200">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] text-left text-sm">
                <thead className="bg-zinc-50 text-zinc-500">
                  <tr>
                    <th className="px-5 py-4 font-medium">Next Metric</th>
                    <th className="px-5 py-4 font-medium">측정 대상</th>
                    <th className="px-5 py-4 font-medium">검증할 결정</th>
                  </tr>
                </thead>
                <tbody>
                  {nextMetrics.map(([metric, target, validates]) => (
                    <tr key={metric} className="border-t border-zinc-200">
                      <td className="px-5 py-4 font-medium">{metric}</td>
                      <td className="px-5 py-4 text-zinc-600">{target}</td>
                      <td className="px-5 py-4 text-zinc-600">{validates}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Section>

        <Section
          id="reflection"
          eyebrow="10 · Reflection"
          title="AI 화면보다 운영 구조를 설계하는 일이 더 중요했다."
        >
          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-zinc-200 p-7">
              <p className="text-sm font-medium text-zinc-500">What I Learned</p>
              <p className="mt-5 leading-7 text-zinc-700">
                처음에는 신입이 질문하는 화면을 잘 만드는 것이 핵심이라고
                생각했다. 하지만 프로젝트가 진행될수록 중요한 것은 AI가
                답하지 못한 뒤의 흐름이었다. 미응답을 누가 확인하고, 어떤
                문서를 보강하며, 다음 질문에서 어떻게 반복을 줄일지까지
                설계해야 제품이 운영된다는 것을 배웠다.
              </p>
            </article>
            <article className="rounded-3xl border border-zinc-200 p-7">
              <p className="text-sm font-medium text-zinc-500">
                What I&apos;d Do Differently
              </p>
              <p className="mt-5 leading-7 text-zinc-700">
                다음에는 파일럿 지표와 검증 방법을 화면 설계보다 더 일찍
                정의할 것이다. 또한 가격 구조를 논의하기 전에 실제 담당자
                응대 시간과 LLM 운영 비용을 함께 확인해, 디자인 결정과
                사업 가설이 같은 데이터에서 출발하도록 만들고 싶다.
              </p>
            </article>
          </div>
          <div className="mt-8 rounded-3xl bg-zinc-950 p-8 text-white">
            <p className="max-w-3xl text-2xl font-semibold leading-9">
              WithBuddy는 질문에 답하는 챗봇이 아니라, 담당자의 반복 응대가
              다음 온보딩에서 줄어들도록 만드는 운영 구조다.
            </p>
          </div>
        </Section>

        <div className="border-t border-zinc-200 pt-12">
          <Link
            href="/projects/withbuddy"
            className="text-sm font-medium text-zinc-900 transition hover:text-zinc-600"
          >
            ← Back to WithBuddy
          </Link>
        </div>
      </div>
    </main>
  );
}
