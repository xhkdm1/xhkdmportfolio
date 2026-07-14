import Link from "next/link";
import type { ReactNode } from "react";

const FIGMA_URL =
  "https://www.figma.com/design/aM6xVXn64liN8cinzkjMg4/WDS-3%ED%8C%80_%EC%9D%BC%EB%8B%A8%EB%AA%A8%EC%97%AC-?node-id=3-4423&t=YDHDFH9xBWgHTXgJ-1";

const navigation = [
  { label: "Overview", href: "#overview" },
  { label: "Architecture", href: "#architecture" },
  { label: "Documentation", href: "#documentation" },
  { label: "AI Experiment", href: "#ai-experiment" },
  { label: "Handoff", href: "#handoff" },
  { label: "Reflection", href: "#reflection" },
];

const wdsStructure = [
  {
    number: "00",
    title: "Cover",
    description: "리뷰어가 문서의 정체성과 진입점을 빠르게 이해합니다.",
  },
  {
    number: "01",
    title: "Getting Started",
    description: "사용 원칙과 문서 탐색 방법을 안내합니다.",
  },
  {
    number: "02",
    title: "Foundations",
    description: "Color, Typography, Spacing 등 공통 토큰을 정의합니다.",
  },
  {
    number: "03",
    title: "Components",
    description: "재사용 가능한 단일·복합 컴포넌트를 정리합니다.",
  },
  {
    number: "04",
    title: "Patterns",
    description: "여러 컴포넌트가 함께 만드는 반복 사용 흐름을 설명합니다.",
  },
  {
    number: "05",
    title: "Product Screens",
    description: "실제 화면에서 시스템이 적용된 결과를 보여줍니다.",
  },
  {
    number: "06",
    title: "QA & Handoff",
    description: "개발 전달과 품질 검수를 위한 기준을 모았습니다.",
  },
  {
    number: "99",
    title: "Archive",
    description: "폐기안과 이전 버전을 보존해 결정 맥락을 남깁니다.",
  },
];

const references = [
  {
    title: "Vapor Design System",
    learned: "Getting Started부터 Interaction까지 이어지는 문서 흐름",
  },
  {
    title: "Toss TDS",
    learned: "처음 진입했을 때 전체 구조를 이해시키는 명확한 Cover",
  },
  {
    title: "Radix Themes",
    learned: "컴포넌트를 독립된 단위로 찾고 비교할 수 있는 구성",
  },
];

const aiTools = [
  {
    title: "Codex + Figma MCP",
    ability: "실제 Figma 파일과 원본 레이어에 접근",
    finding:
      "레이어 이름과 토큰을 직접 확인해 실제 파일 기준으로 명세를 교정할 수 있었습니다.",
  },
  {
    title: "Claude",
    ability: "구조화된 문서와 설명 생성",
    finding:
      "결과가 논리적이더라도 실제 Figma 레이어를 근거로 한 것인지 별도 확인이 필요했습니다.",
  },
  {
    title: "ChatGPT",
    ability: "제공된 조건을 바탕으로 일반 명세 작성",
    finding:
      "Figma에 직접 접근하지 못하므로 템플릿과 조건을 기반으로 일반화된 제안을 만들었습니다.",
  },
];

const documentationLevels = [
  {
    title: "Basic Documentation",
    target: "시각적 요소와 단순 컴포넌트",
    items: ["Overview", "Usage", "Do / Don’t", "Visual Example"],
  },
  {
    title: "Extended AI / Code Spec",
    target: "입력·권한·상태·검증이 중요한 컴포넌트",
    items: [
      "Component API",
      "Slot Architecture",
      "Token Mapping",
      "JSX Example",
    ],
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
        <p className="mb-3 text-sm font-medium text-zinc-500">
          {eyebrow}
        </p>

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
      className={`flex min-h-72 items-center justify-center rounded-3xl border border-dashed border-zinc-300 bg-zinc-50 px-6 text-center ${className}`}
    >
      <div>
        <p className="text-sm font-medium text-zinc-700">
          시각자료 삽입 예정
        </p>

        <p className="mt-2 max-w-md text-sm leading-6 text-zinc-500">
          {label}
        </p>
      </div>
    </div>
  );
}

export default function WDSPage() {
  return (
    <main className="min-h-screen bg-white px-6 pb-24 pt-20 text-zinc-950">
      <div className="mx-auto max-w-5xl">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-zinc-500">
          <Link
            href="/projects/withbuddy"
            className="transition hover:text-zinc-900"
          >
            WithBuddy
          </Link>

          <span className="mx-2">/</span>

          <span>Design System</span>
        </div>

        {/* Hero */}
        <section className="pb-24">
          <p className="mb-4 text-sm font-medium text-zinc-500">
            Design System · Documentation · AI Collaboration
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
            문서를 넘어,
            <br />
            협업과 구현을 잇는 인터페이스
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-600">
            프로젝트 중간중간 만들어진 컴포넌트를 단순히 모으는 데서
            끝내지 않고, 디자이너와 개발자, AI 도구가 같은 기준으로
            이해하고 유지할 수 있는 시스템으로 재구성했습니다.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={FIGMA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
            >
              Open in Figma ↗
            </a>

            <Link
              href="/projects/withbuddy"
              className="inline-flex items-center rounded-full border border-zinc-200 px-5 py-3 text-sm font-medium transition hover:bg-zinc-50"
            >
              Back to WithBuddy
            </Link>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-zinc-200 p-6">
              <p className="text-sm text-zinc-500">Goal</p>
              <p className="mt-3 text-lg font-semibold">
                같은 기준으로 이해하기
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                디자인·개발·AI가 동일한 명칭과 규칙을 참조하도록
                했습니다.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-200 p-6">
              <p className="text-sm text-zinc-500">Approach</p>
              <p className="mt-3 text-lg font-semibold">
                필요한 깊이만 문서화하기
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                모든 컴포넌트에 동일한 명세를 적용하지 않고 위험도에 따라
                범위를 달리했습니다.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-200 p-6">
              <p className="text-sm text-zinc-500">My Contribution</p>
              <p className="mt-3 text-lg font-semibold">
                구조·기준·적용 범위 결정
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                AI가 생성한 명세를 검토하고 팀에 맞는 구조와 우선순위를
                판단했습니다.
              </p>
            </div>
          </div>

          <VisualPlaceholder
            label="WDS Cover 또는 Foundation과 Component를 함께 보여주는 대표 화면"
            className="mt-8 min-h-[420px]"
          />
        </section>

        {/* Sticky nav */}
        <nav className="sticky top-16 z-20 -mx-6 overflow-x-auto border-y border-zinc-200 bg-white/90 px-6 backdrop-blur">
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

        {/* Overview */}
        <Section
          id="overview"
          eyebrow="01 · Why WDS"
          title="컴포넌트를 모으는 것보다, 팀이 같은 기준으로 이해하는 것이 먼저였습니다."
          description="완성도는 컴포넌트 개수보다 팀이 그것을 찾고, 해석하고, 구현하고, 유지할 수 있는가에서 결정된다고 판단했습니다."
        >
          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-3xl border border-zinc-200 p-6">
              <p className="text-sm font-medium text-zinc-500">
                Before
              </p>

              <h3 className="mt-4 text-xl font-semibold">
                화면 단위로 흩어진 컴포넌트
              </h3>

              <p className="mt-4 text-sm leading-6 text-zinc-600">
                프로젝트 진행 중 필요한 요소를 화면 안에서 개별적으로
                만들었고, 명칭과 사용 기준이 명확하지 않았습니다.
              </p>
            </article>

            <article className="rounded-3xl border border-zinc-200 p-6">
              <p className="text-sm font-medium text-zinc-500">
                Problem
              </p>

              <h3 className="mt-4 text-xl font-semibold">
                같은 요소를 서로 다르게 해석
              </h3>

              <p className="mt-4 text-sm leading-6 text-zinc-600">
                디자이너와 개발자가 화면·상태·컴포넌트 이름을 다르게
                사용하면서 추가 확인이 반복됐습니다.
              </p>
            </article>

            <article className="rounded-3xl bg-zinc-950 p-6 text-white">
              <p className="text-sm font-medium text-zinc-400">
                Decision
              </p>

              <h3 className="mt-4 text-xl font-semibold">
                협업을 위한 문서 구조로 재설계
              </h3>

              <p className="mt-4 text-sm leading-6 text-zinc-300">
                단순 라이브러리가 아니라 문서 구조, 사용 패턴, QA와
                핸드오프까지 포함하는 시스템으로 확장했습니다.
              </p>
            </article>
          </div>
        </Section>

        {/* Architecture */}
        <Section
          id="architecture"
          eyebrow="02 · Component Architecture"
          title="단일 컴포넌트와 복합 컴포넌트, 사용 패턴을 구분했습니다."
          description="화면에 보이는 모든 UI 덩어리를 컴포넌트로 만들지 않고, 독립적으로 재사용되는 단위인지 함께 동작하는 의미 단위인지 판단했습니다."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-zinc-200 p-7">
              <p className="text-sm font-medium text-zinc-500">
                Compound Component
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                Textarea가 아니라 ChatComposer
              </h3>

              <p className="mt-5 text-sm leading-7 text-zinc-600">
                채팅 입력 영역은 단순한 여러 줄 입력창처럼 보였지만,
                질문 입력, 전송 버튼, 글자 수 제한, 전송 가능·불가 상태와
                읽기 전용 상태가 함께 동작했습니다.
              </p>

              <p className="mt-5 text-sm leading-7 text-zinc-600">
                따라서 단순 Textarea가 아니라 채팅 맥락과 상태를 함께
                관리하는 복합 컴포넌트인 ChatComposer로 정의했습니다.
              </p>

              <div className="mt-6 rounded-2xl bg-zinc-50 p-5">
                <p className="text-sm font-medium text-zinc-500">
                  ChatComposer
                </p>

                <p className="mt-3 text-sm leading-6 text-zinc-700">
                  Input · Send Button · Character Limit · Disabled State ·
                  Read-only State
                </p>
              </div>
            </article>

            <article className="rounded-3xl border border-zinc-200 p-7">
              <p className="text-sm font-medium text-zinc-500">
                Product Pattern
              </p>

              <h3 className="mt-3 text-2xl font-semibold">
                QuickQuestionChip + ChatComposer
              </h3>

              <p className="mt-5 text-sm leading-7 text-zinc-600">
                추천 질문과 채팅 입력창이 함께 배치된 영역은 하나의
                재사용 컴포넌트라기보다, 빠른 질문을 선택한 뒤 직접 질문을
                이어가는 사용 흐름에 가까웠습니다.
              </p>

              <p className="mt-5 text-sm leading-7 text-zinc-600">
                그래서 별도의 거대한 컴포넌트로 묶지 않고, Product
                Pattern으로 문서화했습니다.
              </p>

              <div className="mt-6 rounded-2xl bg-zinc-50 p-5">
                <p className="text-sm font-medium text-zinc-500">
                  Pattern Rule
                </p>

                <p className="mt-3 text-sm leading-6 text-zinc-700">
                  독립 재사용 단위는 Component로, 화면 맥락에 따른 조합은
                  Pattern으로 관리합니다.
                </p>
              </div>
            </article>
          </div>

          <VisualPlaceholder
            label="ChatComposer 구조와 QuickQuestionChip 조합 패턴 비교"
            className="mt-6"
          />

          <div className="mt-14">
            <p className="text-sm font-medium text-zinc-500">
              WDS Information Architecture
            </p>

            <h3 className="mt-3 text-2xl font-semibold">
              찾기 쉬우면서 과도하게 쪼개지지 않는 구조
            </h3>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {wdsStructure.map((item) => (
                <article
                  key={item.number}
                  className="rounded-3xl border border-zinc-200 p-5"
                >
                  <p className="text-sm text-zinc-400">{item.number}</p>

                  <h4 className="mt-4 font-semibold">{item.title}</h4>

                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Section>

        {/* References */}
        <Section
          id="references"
          eyebrow="03 · Reference"
          title="레퍼런스는 복제하지 않고 필요한 원칙만 가져왔습니다."
        >
          <div className="grid gap-5 md:grid-cols-3">
            {references.map((reference) => (
              <article
                key={reference.title}
                className="rounded-3xl border border-zinc-200 p-6"
              >
                <h3 className="text-lg font-semibold">
                  {reference.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-zinc-600">
                  {reference.learned}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-3xl bg-zinc-950 p-7 text-white">
            <p className="text-sm font-medium text-zinc-400">
              Applied to WithBuddy
            </p>

            <p className="mt-4 max-w-3xl text-xl font-semibold leading-8">
              정해진 제출 기한 안에서 리뷰어가 빠르게 이해할 수 있고,
              프로젝트 이후에도 유지할 수 있는 구조만 선택했습니다.
            </p>
          </div>
        </Section>

        {/* Documentation */}
        <Section
          id="documentation"
          eyebrow="04 · Documentation Strategy"
          title="모든 컴포넌트를 같은 깊이로 문서화하지 않았습니다."
          description="AI 친화성을 목표로 하되, 프로젝트 규모와 일정에 맞춰 사용자 행동과 구현 위험도가 높은 컴포넌트에 우선 적용했습니다."
        >
          <div className="grid gap-6 lg:grid-cols-2">
            {documentationLevels.map((level, index) => (
              <article
                key={level.title}
                className={
                  index === 1
                    ? "rounded-3xl bg-zinc-950 p-7 text-white"
                    : "rounded-3xl border border-zinc-200 p-7"
                }
              >
                <p
                  className={
                    index === 1
                      ? "text-sm text-zinc-400"
                      : "text-sm text-zinc-500"
                  }
                >
                  {level.target}
                </p>

                <h3 className="mt-3 text-2xl font-semibold">
                  {level.title}
                </h3>

                <ul className="mt-6 space-y-3">
                  {level.items.map((item) => (
                    <li
                      key={item}
                      className={
                        index === 1
                          ? "text-sm text-zinc-300"
                          : "text-sm text-zinc-600"
                      }
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-zinc-200 p-7">
            <p className="text-sm font-medium text-zinc-500">
              Extended Spec 적용 대상
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {[
                "InputField",
                "ChatComposer",
                "Dialog",
                "FileDropZone",
                "PasswordInput",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-zinc-100 px-4 py-2 text-sm text-zinc-700"
                >
                  {item}
                </span>
              ))}
            </div>

            <p className="mt-6 max-w-3xl text-sm leading-7 text-zinc-600">
              입력값, 권한, 상태 변화와 검증 규칙이 중요한 컴포넌트는
              구현 해석의 차이가 제품 경험에 직접 영향을 주기 때문에 더
              깊은 명세를 적용했습니다.
            </p>
          </div>

          <VisualPlaceholder
            label="InputField 또는 ChatComposer의 API · Slot · Token · JSX 명세"
            className="mt-6"
          />
        </Section>

        {/* AI Experiment */}
        <Section
          id="ai-experiment"
          eyebrow="05 · AI Documentation Experiment"
          title="그럴듯한 결과보다 실제 데이터에 얼마나 닿아 있는지를 비교했습니다."
          description="하나의 InputField를 기준으로 여러 AI 도구의 명세 결과를 비교해, 도구마다 신뢰할 수 있는 범위가 다르다는 것을 확인했습니다."
        >
          <div className="grid gap-5 lg:grid-cols-3">
            {aiTools.map((tool) => (
              <article
                key={tool.title}
                className="rounded-3xl border border-zinc-200 p-6"
              >
                <h3 className="text-lg font-semibold">{tool.title}</h3>

                <p className="mt-4 text-sm font-medium text-zinc-500">
                  {tool.ability}
                </p>

                <p className="mt-4 text-sm leading-6 text-zinc-600">
                  {tool.finding}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-3xl bg-zinc-950 p-8 text-white">
            <p className="text-sm font-medium text-zinc-400">
              Key Finding
            </p>

            <p className="mt-4 max-w-3xl text-2xl font-semibold leading-9">
              AI 문서화의 신뢰도는 결과가 얼마나 자연스러운지가 아니라,
              실제 Figma 데이터에 얼마나 직접 접근했는가에 따라
              달라졌습니다.
            </p>
          </div>

          <div className="mt-8 rounded-3xl border border-zinc-200 p-7">
            <p className="text-sm font-medium text-zinc-500">
              My Decision
            </p>

            <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-700">
              AI가 만든 명세를 그대로 채택하지 않고, 실제 레이어와
              토큰을 근거로 검토했습니다. AI는 초안을 만드는 도구로
              사용하고, 어떤 구조를 팀에 적용할지는 제가 판단했습니다.
            </p>
          </div>

          <VisualPlaceholder
            label="동일 InputField에 대한 Codex · Claude · ChatGPT 결과 비교"
            className="mt-6"
          />
        </Section>

        {/* Handoff */}
        <Section
          id="handoff"
          eyebrow="06 · QA & Handoff"
          title="화면 밖에 있던 맥락을 디자인 파일 안으로 가져왔습니다."
          description="동작, 상태, 예외, 데이터 연결을 구두 설명에 의존하지 않도록 Screen ID와 Annotation 체계를 구축했습니다."
        >
          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-3xl border border-zinc-200 p-6">
              <p className="text-sm text-zinc-500">Screen ID</p>

              <h3 className="mt-3 text-lg font-semibold">
                화면을 같은 이름으로 부르기
              </h3>

              <p className="mt-4 text-sm leading-6 text-zinc-600">
                서비스 영역, 기능, 상태, 디바이스 기준으로 화면 이름을
                통일했습니다.
              </p>

              <code className="mt-5 block rounded-2xl bg-zinc-50 p-4 text-xs text-zinc-700">
                MYBUDDY-CHAT-02-PC
              </code>
            </article>

            <article className="rounded-3xl border border-zinc-200 p-6">
              <p className="text-sm text-zinc-500">Annotation</p>

              <h3 className="mt-3 text-lg font-semibold">
                화면 안에 스펙 남기기
              </h3>

              <p className="mt-4 text-sm leading-6 text-zinc-600">
                Usage, State, Behavior, Validation, Data·API와 접근성
                요구사항을 배지로 구분했습니다.
              </p>
            </article>

            <article className="rounded-3xl border border-zinc-200 p-6">
              <p className="text-sm text-zinc-500">Naming</p>

              <h3 className="mt-3 text-lg font-semibold">
                Figma와 코드 연결하기
              </h3>

              <p className="mt-4 text-sm leading-6 text-zinc-600">
                레이어와 Slot 이름을 코드에서 해석 가능한 형태로
                정리했습니다.
              </p>

              <code className="mt-5 block rounded-2xl bg-zinc-50 p-4 text-xs text-zinc-700">
                InputField.IconSlot
              </code>
            </article>
          </div>

          <VisualPlaceholder
            label="실제 Product Screen에 Screen ID와 Annotation Badge가 적용된 모습"
            className="mt-6 min-h-[360px]"
          />
        </Section>

        {/* Reflection */}
        <Section
          id="reflection"
          eyebrow="07 · Reflection"
          title="디자인 시스템의 완성도는 컴포넌트 수가 아니라 판단 기준에서 나왔습니다."
        >
          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-zinc-200 p-7">
              <p className="text-sm font-medium text-zinc-500">
                What I Learned
              </p>

              <p className="mt-5 leading-7 text-zinc-700">
                컴포넌트를 많이 정리한다고 시스템이 완성되는 것은
                아니었습니다. 팀이 같은 의미로 찾고 이해하고 유지할 수
                있도록 단위와 문서 깊이, 적용 우선순위를 결정하는 일이 더
                중요했습니다.
              </p>
            </article>

            <article className="rounded-3xl border border-zinc-200 p-7">
              <p className="text-sm font-medium text-zinc-500">
                What I&apos;d Keep
              </p>

              <p className="mt-5 leading-7 text-zinc-700">
                새로운 트렌드나 AI 친화적 기준을 그대로 적용하기보다,
                팀의 규모와 일정, 유지보수 비용에 맞는지 먼저 판단하는
                방식을 앞으로도 유지하고 싶습니다.
              </p>
            </article>
          </div>

          <div className="mt-8 rounded-3xl bg-zinc-950 p-8 text-white">
            <p className="max-w-3xl text-2xl font-semibold leading-9">
              AI는 문서 작성을 도왔지만, 어떤 구조를 팀에 적용할지
              결정하는 일은 Product Designer의 몫이었습니다.
            </p>
          </div>
        </Section>

        <div className="border-t border-zinc-200 pt-12">
          <Link
            href="/projects/withbuddy"
            className="text-sm font-medium transition hover:text-zinc-600"
          >
            ← Back to WithBuddy
          </Link>
        </div>
      </div>
    </main>
  );
}