import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import BackToTop from "./BackToTop";

const PRODUCT_URL = "https://withbuddy.itsdev.kr/login";
const LANDING_URL = "https://landing-psi-ashen-98.vercel.app/";
const WDS_URL =
  "https://www.figma.com/design/aM6xVXn64liN8cinzkjMg4/WDS-3%ED%8C%80_%EC%9D%BC%EB%8B%A8%EB%AA%A8%EC%97%AC-?node-id=3-4423&t=YDHDFH9xBWgHTXgJ-1";

const navigation = [
  ["Overview", "#overview"],
  ["Problem", "#problem"],
  ["Reframing", "#reframing"],
  ["Core Loop", "#core-loop"],
  ["Decisions", "#decisions"],
  ["Experience", "#experience"],
  ["Validation", "#validation"],
  ["Delivery", "#delivery"],
  ["Outcome", "#outcome"],
];

const roleGroups = [
  {
    label: "직접 수행",
    dark: true,
    items: [
      "신입 필드 인터뷰 설계·진행",
      "User / Buyer 문제 구조화와 B2B 메시지 정리",
      "IA · User Flow · MyBuddy · Admin Console UX",
      "계정·문서·상태·Validation·예외 화면 설계",
      "Modal → Inline 변경과 입사일 제약 안내 방식 정리",
      "WDS · Screen ID · Annotation · Handoff · QA",
    ],
  },
  {
    label: "참여",
    dark: false,
    items: [
      "추가 신입 인터뷰와 설문 분석",
      "제품 방향과 B2B 타깃 논의",
      "구매자 관점 포지셔닝 논의",
    ],
  },
  {
    label: "팀 공동",
    dark: false,
    items: [
      "AI / RAG 구현",
      "AI 정확도·속도·비용 관련 기술 결과",
      "기술·보안 검증",
    ],
  },
];

const decisions = [
  {
    number: "01",
    title: "챗봇에서 끝내지 않고 Admin까지 연결했습니다.",
    steps: [
      {
        label: "문제",
        text: "AI가 답하지 못한 질문을 채팅 화면에서 끝내면 담당자가 부족한 정보를 확인할 수 없었습니다.",
      },
      {
        label: "판단",
        text: "답변 실패 뒤 누가 확인하고 보완할지까지 제품 안에 있어야 한다고 봤습니다.",
      },
      {
        label: "설계",
        text: "신입은 MyBuddy에서 질문하고, 담당자는 Admin에서 미답변과 부족한 문서를 확인하도록 두 화면을 설계했습니다.",
      },
    ],
    note:
      "실제 기업에서 담당자 개입이 장기적으로 줄어드는지는 확인하지 못했습니다.",
  },
  {
    number: "02",
    title: "입력 목적은 남기고, Modal은 없앴습니다.",
    steps: [
      {
        label: "As-is",
        text: "문서를 업로드한 뒤 별도 Modal을 열어 부가정보를 입력하도록 설계했습니다.",
      },
      {
        label: "확인한 문제",
        text: "개발자와 구현 방식을 검토하면서 입력 흐름이 끊기고 구현 구조도 복잡해질 수 있음을 확인했습니다.",
      },
      {
        label: "판단",
        text: "지켜야 할 것은 Modal 자체가 아니라 필요한 정보를 빠뜨리지 않고 입력하게 하는 것이었습니다.",
      },
      {
        label: "To-be",
        text: "업로드한 파일 아래에서 바로 부가정보를 입력하는 Inline 방식으로 변경했습니다.",
      },
    ],
    note: "개발자 피드백을 바탕으로 입력 목적과 구현 조건을 함께 검토해 화면 방식을 바꿨습니다.",
  },
  {
    number: "03",
    title: "입력한 뒤 알리는 대신, 선택할 때 조건을 보이게 했습니다.",
    steps: [
      {
        label: "검토한 방식",
        text: "Hover Tooltip, 일정 시간 후 Tooltip, Click Toast, 캘린더 아래 상시 안내를 비교했습니다.",
      },
      {
        label: "판단",
        text: "Tooltip과 Toast는 행동한 뒤에야 조건을 확인할 수 있습니다. 날짜 선택 범위처럼 입력 전에 알아야 하는 조건은 선택하는 순간 보여야 한다고 판단했습니다.",
      },
      {
        label: "최종안",
        text: "캘린더 아래 선택 가능 기간을 항상 표시하고, 이동할 수 없는 경계 월은 비활성화했습니다. 직접 입력값이 잘못되면 해당 필드에서 바로 안내했습니다.",
      },
    ],
    note: "정해진 입사일 제약을 화면에서 언제, 어디에 보여줄지 설계했습니다.",
  },
];

const findings = [
  [
    "01",
    "같은 의도의 질문도 표현에 따라 답변이 달라졌습니다.",
    "실제 사용자 표현을 기준으로 동의어와 회귀 테스트 범위를 보강해야 합니다.",
  ],
  [
    "02",
    "복합 질문에서 일부 정보가 빠졌습니다.",
    "하위 의도를 나누고 누락된 문서 범위를 확인할 필요가 있습니다.",
  ],
  [
    "03",
    "민감정보를 답하지 못한 이유와 문의 경로가 부족했습니다.",
    "거절 이유와 안전한 문의 경로를 함께 안내해야 합니다.",
  ],
  [
    "04",
    "계정 생성 직후 성공 여부를 확인하기 어려웠습니다.",
    "생성 결과를 즉시 확인할 수 있는 피드백이 필요합니다.",
  ],
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
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-t border-zinc-200 py-20 sm:py-24 lg:py-28"
    >
      <div className="mb-12 max-w-3xl">
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
    <article className="rounded-3xl border border-zinc-200 bg-white p-6">
      <p className="text-3xl font-semibold tracking-tight">{value}</p>
      <p className="mt-3 text-sm font-medium text-zinc-800">{label}</p>
      {note && <p className="mt-2 text-sm leading-6 text-zinc-500">{note}</p>}
    </article>
  );
}

function DecisionCard({ decision }: { decision: (typeof decisions)[number] }) {
  return (
    <article className="rounded-3xl border border-zinc-200 p-6 sm:p-8">
      <div className="border-b border-zinc-200 pb-6">
        <p className="text-sm text-zinc-400">Decision {decision.number}</p>
        <h3 className="mt-3 max-w-3xl text-2xl font-semibold leading-snug">
          {decision.title}
        </h3>
      </div>
      <div className="mt-7 grid gap-4 md:grid-cols-2">
        {decision.steps.map((step) => (
          <div key={step.label} className="rounded-2xl bg-zinc-50 p-5 sm:p-6">
            <p className="text-sm font-medium text-zinc-500">{step.label}</p>
            <p className="mt-3 leading-7 text-zinc-700">{step.text}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 border-l-2 border-zinc-300 pl-4">
        <p className="text-sm leading-6 text-zinc-600">{decision.note}</p>
      </div>
    </article>
  );
}

export default function WithBuddyCaseStudyPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <div className="mx-auto w-full max-w-6xl px-5 pb-20 pt-20 sm:px-8 sm:pb-28 sm:pt-24 lg:px-12 lg:pb-32 lg:pt-28">
        <div className="mb-7 flex items-center gap-2 text-sm text-zinc-500 sm:mb-8">
          <Link href="/projects/withbuddy" className="hover:text-zinc-900">
            WithBuddy
          </Link>
          <span>/</span>
          <span>Case Study</span>
        </div>

        <section id="overview" className="scroll-mt-24 pb-16 sm:pb-20 lg:pb-24">
          <p className="mb-4 text-sm font-medium text-zinc-500">
            B2B SaaS · AI Agent · Product Design
          </p>
          <h1 className="max-w-5xl text-4xl font-semibold leading-[1.1] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            AI가 답하지 못한 질문을,
            <br className="hidden sm:block" /> 다음 온보딩의 문서 보강으로
            연결했습니다.
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-600 sm:text-xl sm:leading-9">
            신입의 반복 질문을 사내 문서 기반 AI가 먼저 처리하고,
            미답변은 담당자가 확인·보강해 이후 유사 질문에 활용하는 B2B
            온보딩 서비스입니다.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={PRODUCT_URL} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white">
              Try Product ↗
            </a>
            <a href={LANDING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full border border-zinc-200 px-5 py-3 text-sm font-medium">
              View Landing Page ↗
            </a>
          </div>

          <div className="mt-10 grid gap-4 rounded-3xl border border-zinc-200 p-6 md:grid-cols-3">
            <div>
              <p className="text-sm text-zinc-500">Role</p>
              <p className="mt-2 font-medium">Product Designer</p>
              <p className="mt-2 text-sm text-zinc-600">Product Designer 1인</p>
            </div>
            <div>
              <p className="text-sm text-zinc-500">Team</p>
              <p className="mt-2 font-medium">6 Members</p>
              <p className="mt-2 text-sm text-zinc-600">PM 1 · Design 1 · FE 1 · BE 2 · AI 1</p>
            </div>
            <div>
              <p className="text-sm text-zinc-500">Duration</p>
              <p className="mt-2 font-medium">2026.03.04 — 2026.07.16</p>
              <p className="mt-2 text-sm text-zinc-600">구름 빌더스리그 Round 2</p>
            </div>
          </div>

          <Image src="/images/withbuddy/01-product-overview.png" alt="WithBuddy 사용자 화면과 관리자 화면" width={1600} height={900} priority className="mt-8 w-full rounded-3xl border border-zinc-200" />

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <MetricCard value="1인" label="Product Designer" />
            <MetricCard value="MyBuddy · Admin" label="Product Scope" note="미답변과 문서 보강을 연결한 Core Loop" />
            <MetricCard value="13명" label="Limited Open Test" note="관리자 화면 사용 10명" />
          </div>
        </section>

        <nav className="sticky top-16 z-20 -mx-5 overflow-x-auto border-y border-zinc-200 bg-white/90 px-5 backdrop-blur sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
          <div className="flex gap-6 py-4">
            {navigation.map(([label, href]) => (
              <a key={href} href={href} className="shrink-0 text-sm text-zinc-500 hover:text-zinc-950">{label}</a>
            ))}
          </div>
        </nav>

        <Section id="my-role" eyebrow="My Role" title="문제 구조화부터 관리자 화면·QA까지 맡았습니다." description="Product Designer 1인으로 사용자·관리자 화면과 전달 기준을 설계했습니다. 추가 리서치 분석과 제품 방향 논의에는 팀과 함께 참여했습니다.">
          <div className="grid gap-5 lg:grid-cols-3">
            {roleGroups.map((group) => (
              <article key={group.label} className={group.dark ? "rounded-3xl bg-zinc-950 p-7 text-white" : "rounded-3xl border border-zinc-200 p-7"}>
                <h3 className="text-xl font-semibold">{group.label}</h3>
                <ul className={`mt-6 space-y-3 text-sm leading-6 ${group.dark ? "text-zinc-300" : "text-zinc-600"}`}>
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="problem" eyebrow="01 · Problem" title={<>신입은 질문을 망설였고,<br />담당자는 같은 설명을 반복했습니다.</>} description="리서치의 양보다 두 사용자가 어떤 상황에서 다시 사람에게 의존하는지 확인했습니다.">
          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-zinc-200 p-7">
              <p className="text-sm text-zinc-500">신입사원</p>
              <p className="mt-4 text-xl font-semibold leading-8">사소한 질문을 하기 어렵고, 문서의 맥락이 부족하면 다시 사람에게 확인했습니다.</p>
            </article>
            <article className="rounded-3xl bg-zinc-950 p-7 text-white">
              <p className="text-sm text-zinc-400">담당자</p>
              <p className="mt-4 text-xl font-semibold leading-8">규정·복지·행정·IT와 관련된 비슷한 질문에 반복해서 답하며 업무 흐름이 끊겼습니다.</p>
            </article>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[["신입 필드 인터뷰", "직접 설계·진행"], ["추가 신입 인터뷰·설문", "분석 참여"], ["경영지원 담당자 인터뷰", "분석 참여"]].map(([method, role]) => (
              <article key={method} className="rounded-2xl bg-zinc-50 p-5"><p className="font-medium">{method}</p><p className="mt-2 text-sm text-zinc-500">{role}</p></article>
            ))}
          </div>
          <blockquote className="mt-8 rounded-3xl bg-zinc-50 p-7 text-lg font-medium leading-8 text-zinc-800 sm:p-8">
            “SOP가 있어도 어떤 내용을 찾기 위해 무슨 SOP를 봐야 하는지 몰라 사수에게 묻게 된다.”
            <footer className="mt-4 text-sm font-normal text-zinc-500">신입·실무자 심층 인터뷰</footer>
          </blockquote>
          <Image src="/images/withbuddy/02-problem-diagram.png" alt="신입과 담당자의 온보딩 문제 구조" width={1920} height={1080} className="mt-8 h-auto w-full rounded-3xl border border-zinc-200 object-contain" />
        </Section>

        <Section id="reframing" eyebrow="02 · Reframing" title={<>질문할 곳을 만드는 데서,<br />반복 응대를 줄이는 구조로 문제를 넓혔습니다.</>} description="B2B 제품에서는 신입의 편의뿐 아니라 도입하고 운영하는 담당자에게도 줄어드는 부담이 있어야 한다고 봤습니다.">
          <div className="grid gap-4 lg:grid-cols-3">
            {[["처음 본 문제", "신입이 부담 없이 질문할 곳이 필요하다."], ["추가로 확인한 문제", "도입·운영 담당자에게도 줄어드는 비용이 있어야 한다."], ["최종 제품 과제", "신입의 정보 탐색과 담당자의 반복 설명을 함께 줄이기 위한 구조가 필요하다."]].map(([label, text], index) => (
              <article key={label} className={index === 2 ? "rounded-3xl bg-zinc-950 p-6 text-white" : "rounded-3xl border border-zinc-200 p-6"}><p className={index === 2 ? "text-sm text-zinc-400" : "text-sm text-zinc-500"}>{label}</p><p className="mt-4 font-semibold leading-7">{text}</p></article>
            ))}
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-zinc-200 p-7"><p className="text-sm text-zinc-500">User · 신입사원</p><p className="mt-4 text-xl font-semibold">질문을 빠르게 해결하고 싶다.</p></article>
            <article className="rounded-3xl border border-zinc-200 p-7"><p className="text-sm text-zinc-500">Buyer / Admin · HR · 총무 · 경영지원</p><p className="mt-4 text-xl font-semibold">반복 응대와 문서 관리 부담을 줄이고 싶다.</p></article>
          </div>
          <div className="mt-8 rounded-3xl bg-zinc-50 p-7"><p className="text-sm text-zinc-500">Target</p><p className="mt-3 text-2xl font-semibold">50인 이하 중소기업·스타트업</p></div>
          <Image src="/images/withbuddy/05-landing-before-after.png" alt="신입 중심에서 구매자 중심으로 바꾼 랜딩 메시지" width={1920} height={1080} className="mt-8 h-auto w-full rounded-3xl border border-zinc-200 object-contain" />
        </Section>

        <Section id="core-loop" eyebrow="03 · Core Loop" title={<>미답변 질문을 모아<br />어떤 문서가 부족한지 확인했습니다.</>} description="AI가 답하지 못한 질문은 Admin에 모았습니다. 담당자는 질문을 확인해 부족한 문서를 보강하고, 이후 유사 질문의 답변 근거로 활용할 수 있습니다.">
          <ol className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[["01", "신입 질문"], ["02", "사내 문서 기반 AI 답변"], ["03", "답변 불가 / 근거 부족"], ["04", "Admin에 미답변 축적"], ["05", "담당자 확인 / 문서 보강"], ["06", "이후 유사 질문 답변에 반영"]].map(([number, title]) => (
              <li key={number} className="rounded-3xl border border-zinc-200 p-6"><p className="text-sm text-zinc-400">STEP {number}</p><p className="mt-3 font-semibold">{title}</p></li>
            ))}
          </ol>
          <Image src="/images/withbuddy/06-core-loop.png" alt="미답변을 관리자 확인과 문서 보강으로 연결한 운영 흐름" width={1920} height={1080} className="mt-8 h-auto w-full rounded-3xl border border-zinc-200 object-contain" />
        </Section>

        <Section id="decisions" eyebrow="04 · 주요 설계 판단" title="지켜야 할 건 남기고, 화면 방식은 바꿨습니다." description="개발 피드백과 정책 조건을 확인하며 필요한 정보는 유지하고 입력·안내 방식은 바꿨습니다.">
          <div className="space-y-6">{decisions.map((decision) => <DecisionCard key={decision.number} decision={decision} />)}</div>
        </Section>

        <Section id="experience" eyebrow="05 · 사용자·관리자 화면" title={<>신입 질문 화면과<br />담당자 관리 화면을 함께 설계했습니다.</>}>
          <div className="space-y-6">
            <article className="rounded-3xl border border-zinc-200 p-7">
              <p className="text-sm text-zinc-500">MyBuddy</p><h3 className="mt-3 text-2xl font-semibold">질문과 답변의 경계를 알렸습니다.</h3>
              <div className="mt-6 grid gap-4 md:grid-cols-3">{[["Quick Tap", "첫 질문을 직접 만드는 부담을 낮췄습니다."], ["Source", "사내 문서 기반 답변의 근거를 확인하게 했습니다."], ["No Result / Out of Scope", "답변 실패와 서비스 범위 밖 상태를 구분했습니다."]].map(([title, text]) => <div key={title} className="rounded-2xl bg-zinc-50 p-5"><p className="font-medium">{title}</p><p className="mt-2 text-sm leading-6 text-zinc-600">{text}</p></div>)}</div>
              <Image src="/images/withbuddy/01-product-overview.png" alt="WithBuddy 질문과 답변 화면" width={1920} height={1080} className="mt-8 h-auto w-full rounded-2xl border border-zinc-200 object-contain" />
            </article>
            <article className="rounded-3xl bg-zinc-950 p-7 text-white">
              <p className="text-sm text-zinc-400">Admin Console</p><h3 className="mt-3 text-2xl font-semibold">문서와 계정의 상태를 관리하는 화면을 설계했습니다.</h3>
              <p className="mt-4 max-w-3xl text-sm leading-7 text-zinc-300">Dashboard에서 운영 상태와 미답변을 확인하고, 문서 관리·계정 생성·계정 상태 화면에서 답변 근거와 사용 조건을 관리하도록 구성했습니다.</p>
              <div className="mt-6 grid gap-5 md:grid-cols-3">
                {[
                  ["01 · 문서 관리", "등록된 문서를 확인하고 새 문서를 업로드합니다. 등록·오류·중복 등 문서 상태를 구분해 답변 근거를 관리합니다."],
                  ["02 · 계정 생성", "신입 계정을 만들 때 입사일과 필수 정보를 입력합니다. 생성 전에 선택 조건과 Validation을 해당 위치에서 확인합니다."],
                  ["03 · 계정 상태", "활성화·비활성화·조회 전용 등 계정 상태를 구분하고, 상태에 따라 사용할 수 있는 기능을 다르게 보여줍니다."],
                ].map(([title, text]) => <div key={title} className="rounded-2xl bg-white/5 p-5"><p className="font-medium">{title}</p><p className="mt-3 text-sm leading-6 text-zinc-300">{text}</p></div>)}
              </div>
              <Image src="/images/withbuddy/08-admin-console.png" alt="WithBuddy 관리자 대시보드" width={1920} height={1080} className="mt-8 h-auto w-full rounded-2xl border border-white/10 bg-white object-contain" />
              <div className="mt-5 grid gap-5 md:grid-cols-2">
                <Image src="/images/withbuddy/withbuddy-admin-docs.png" alt="등록 문서 목록과 문서 관리 상태를 보여주는 관리자 화면" width={1440} height={1146} className="h-auto w-full rounded-2xl border border-white/10 bg-white object-contain" />
                <Image src="/images/withbuddy/withbuddy-admin-account-create-validation.png" alt="입사일과 필수 정보 검증을 포함한 관리자 계정 생성 화면" width={1440} height={1024} className="h-auto w-full rounded-2xl border border-white/10 bg-white object-contain" />
                <Image src="/images/withbuddy/withbuddy-admin-account-list-status.png" alt="계정 활성화와 비활성화 상태를 구분한 관리자 계정 목록" width={1440} height={1024} className="h-auto w-full rounded-2xl border border-white/10 bg-white object-contain md:col-span-2" />
              </div>
            </article>
          </div>
          <Image src="/images/withbuddy/07-mybuddy-states.png" alt="WithBuddy 답변 상태별 사용자 화면" width={1920} height={1080} className="mt-8 h-auto w-full rounded-3xl border border-zinc-200 object-contain" />
        </Section>

        <Section id="validation" eyebrow="06 · 검증과 개선" title={<>사용하면서 다시 사람을 찾게 되는<br />지점을 확인했습니다.</>} description="2026년 7월 4일부터 9일까지 13명이 참여한 제한적 오픈테스트와 사용 로그를 분석했습니다. 관리자 화면은 10명이 사용했습니다. 실제 조직의 온보딩 기간 전체를 검증한 결과는 아닙니다.">
          <div className="grid gap-5 md:grid-cols-2">{findings.map(([number, title, next]) => <article key={number} className="rounded-3xl border border-zinc-200 p-7"><p className="text-sm text-zinc-400">확인 {number}</p><h3 className="mt-3 text-xl font-semibold leading-8">{title}</h3><p className="mt-4 text-sm leading-6 text-zinc-600">{next}</p></article>)}</div>
            <div className="mt-8 rounded-3xl bg-zinc-950 p-7 text-white"><p className="max-w-3xl text-xl font-medium leading-8">사용 의향은 높았지만, 답변의 완결성과 실패 안내, 관리자 작업 과정에서는 문제가 남았습니다.</p></div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"><MetricCard value="8.4 / 10" label="사용 의향" /><MetricCard value="7.4 / 10" label="답변 이해도·신뢰도" /><MetricCard value="7.9 / 10" label="관리자 기능 이해도·유용성" /><MetricCard value="약 25%" label="응답 실패 로그" note="no_result 또는 out_of_scope" /></div>
          <blockquote className="mt-8 rounded-3xl bg-zinc-50 p-7 text-lg font-medium leading-8 text-zinc-800">
            “기존에 업로드한 문서를 조회·다운로드할 수 있는 기능이 있으면 좋겠다. 담당자 변경 시 인수인계·문서 관리가 불편할 것.”
            <footer className="mt-4 text-sm font-normal text-zinc-500">관리자 화면을 사용한 HR·경영지원 담당자 1인의 피드백</footer>
          </blockquote>
          <div className="mt-8 rounded-3xl border border-zinc-200 p-7"><p className="text-sm font-medium text-zinc-500">검증 범위</p><p className="mt-3 max-w-3xl leading-7 text-zinc-700">제한된 테스트에서 답변과 관리자 작업의 문제는 확인했지만, 문서가 누적될수록 미답변과 담당자 개입이 실제로 줄어드는지는 확인하지 못했습니다.</p><Link href="/projects/withbuddy/qa-guide" className="mt-6 inline-flex rounded-full border border-zinc-200 px-5 py-3 text-sm font-medium">QA와 검증 상세 보기 →</Link></div>
        </Section>

        <Section id="delivery" eyebrow="07 · 개발 전달" title={<>개발에 필요한 상태·예외·검증 기준을<br />화면에 함께 정리했습니다.</>}>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{[["Screen ID", "화면과 상태를 같은 기준으로 식별했습니다."], ["Annotation", "Usage · State · Behavior · Validation · Data/API · A11y를 기록했습니다."], ["Handoff", "디자인과 개발에서 사용하는 명칭과 조건을 정리했습니다."], ["QA", "테스트 시나리오로 동작을 확인하고 오류의 재현 조건과 예상 결과를 전달했습니다."]].map(([title, text]) => <article key={title} className="rounded-3xl border border-zinc-200 p-6"><h3 className="font-semibold">{title}</h3><p className="mt-4 text-sm leading-6 text-zinc-600">{text}</p></article>)}</div>
          <div className="mt-8 flex flex-wrap gap-3"><Link href="/projects/withbuddy/wds" className="inline-flex rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white">WDS 상세 보기 →</Link><a href={WDS_URL} target="_blank" rel="noopener noreferrer" className="inline-flex rounded-full border border-zinc-200 px-5 py-3 text-sm font-medium">Open WDS in Figma ↗</a></div>
        </Section>

        <Section id="outcome" eyebrow="08 · 결과와 한계" title={<>제품은 구현했지만,<br />실제 기업에서 반복 문의가 줄었는지는 확인하지 못했습니다.</>}>
          <div className="grid gap-5 lg:grid-cols-2">
            <article className="rounded-3xl border border-zinc-200 p-7"><p className="text-sm text-zinc-500">설계·구현한 것</p><ul className="mt-5 space-y-3 text-sm leading-6 text-zinc-700"><li>MyBuddy · Admin Console · Core Loop</li><li>WDS · Screen ID · Annotation</li><li>QA와 Validation 기준</li></ul></article>
            <article className="rounded-3xl border border-zinc-200 p-7"><p className="text-sm text-zinc-500">제한적으로 확인한 것</p><p className="mt-5 text-sm leading-7 text-zinc-700">13명이 참여한 오픈테스트에서 답변과 관리자 작업의 문제, 초기 사용 의향을 확인했습니다. 실제 조직의 장기 운영 결과는 아닙니다.</p></article>
            <article className="rounded-3xl bg-zinc-950 p-7 text-white"><p className="text-sm text-zinc-400">Team Outcome</p><ul className="mt-5 space-y-3 text-sm leading-6 text-zinc-300"><li>AI 정답률 64% → 98%</li><li>평균 응답 시간 0.7초</li><li>AI 연산 비용 70% 절감</li><li>Prompt Attack 8종 방어 검증</li></ul></article>
            <article className="rounded-3xl border border-zinc-200 p-7"><p className="text-sm text-zinc-500">아직 확인하지 못한 것</p><ul className="mt-5 space-y-3 text-sm leading-6 text-zinc-700"><li>실제 기업에서 담당자 직접 응대가 줄었는지</li><li>문서 보강이 장기간 지속되는지</li><li>유사 질문의 미답변 비율이 감소하는지</li><li>50인 이하 조직에서 충분한 사용 빈도와 구매 가치가 있는지</li></ul></article>
          </div>
          <div className="mt-14 border-t border-zinc-200 pt-12">
            <p className="text-sm font-medium text-zinc-500">다음 개선</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight">운영하면서 남을 두 가지 문제를 정리했습니다.</h3>
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              <article className="rounded-3xl border border-zinc-200 p-7">
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">후속 제안 · 미구현</span>
                <h4 className="mt-5 text-xl font-semibold">문서를 다시 업로드해야 하는 문제</h4>
                <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-600">
                  <p><span className="font-medium text-zinc-800">현재</span><br />문서 내용이 바뀌면 관리자가 원본 파일을 수정한 뒤 다시 업로드해야 합니다.</p>
                  <p><span className="font-medium text-zinc-800">남은 문제</span><br />사내 정책과 복지 내용이 계속 바뀌면 원본과 WithBuddy 문서를 따로 관리해야 합니다.</p>
                  <p><span className="font-medium text-zinc-800">후속 제안</span><br />Notion, Google Drive, Slack과 연결해 원본 변경사항을 WithBuddy 문서 데이터에 동기화하고 최신 문서를 답변에 사용합니다. 관리자는 접근 가능한 문서 중 실제로 사용할 문서를 선택합니다.</p>
                </div>
              </article>
              <article className="rounded-3xl border border-zinc-200 p-7">
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">검증 필요 · 미구현</span>
                <h4 className="mt-5 text-xl font-semibold">대화 기록을 다시 찾는 방법</h4>
                <p className="mt-4 text-sm leading-7 text-zinc-600">현재는 날짜별 전체 대화를 확인합니다. 날짜 흐름은 유지하되 주제나 키워드별 목차를 함께 보여주면 원하는 답변을 더 빨리 찾을 수 있는지 다음 검증에서 비교할 방향으로 남겼습니다.</p>
              </article>
            </div>
          </div>
        </Section>

        <div className="border-t border-zinc-200 pt-12"><Link href="/projects/withbuddy" className="text-sm font-medium hover:text-zinc-600">← Back to WithBuddy</Link></div>
      </div>
      <BackToTop />
    </main>
  );
}
