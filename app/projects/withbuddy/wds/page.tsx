import Link from "next/link";
import type { ReactNode } from "react";

const FIGMA_URL =
  "https://www.figma.com/design/aM6xVXn64liN8cinzkjMg4/WDS-3%ED%8C%80_%EC%9D%BC%EB%8B%A8%EB%AA%A8%EC%97%AC-?node-id=3-4423&t=YDHDFH9xBWgHTXgJ-1";

const navigation = [
  ["Overview", "#overview"],
  ["Color Tokens", "#color-tokens"],
  ["Structure", "#structure"],
  ["Components", "#components"],
  ["UI Spec", "#ui-spec"],
  ["Handoff & QA", "#handoff"],
  ["Learnings", "#learnings"],
];

const primitiveGroups: Array<{
  title: string;
  description: string;
  colors: Array<{ name: string; hex: string; label?: string }>;
}> = [
  {
    title: "Brand / Action",
    description: "선택 상태와 주요 액션에 쓰는 Blue 계열입니다.",
    colors: [
      { name: "blue-200", hex: "#D0EBFF" },
      { name: "blue-600", hex: "#4791CA" },
      { name: "blue-700", hex: "#336B97" },
      { name: "blue-800", hex: "#204867" },
    ],
  },
  {
    title: "Status",
    description: "상태별 Text 기준이 되는 대표 색상입니다.",
    colors: [
      { name: "green-700", hex: "#74B816", label: "Success" },
      { name: "yellow-700", hex: "#F59F00", label: "Warning" },
      { name: "red-700", hex: "#F03E3E", label: "Danger" },
    ],
  },
];

const tokenConnections = [
  { primitive: "blue-600", hex: "#4791CA", semantic: "color/text/action", usage: "Action / Link" },
  { primitive: "blue-700", hex: "#336B97", semantic: "color/text/brand-secondary", usage: "Brand Text" },
  { primitive: "blue-800", hex: "#204867", semantic: "color/text/brand-strong", usage: "Datepicker / Sidebar" },
];

const stateTokens = [
  {
    name: "Success",
    role: "Text · Background · Border",
    color: "#74B816",
    tokens: [
      ["Text", "green-700", "#74B816"],
      ["Background", "green-100", "#E9FAC8"],
      ["Border", "green-300", "#C0EB75"],
    ],
  },
  {
    name: "Warning",
    role: "Text · Background · Border",
    color: "#F59F00",
    tokens: [
      ["Text", "yellow-700", "#F59F00"],
      ["Background", "yellow-050", "#FFF9DB"],
      ["Border", "yellow-300", "#FFE066"],
    ],
  },
  {
    name: "Danger",
    role: "Text · Background · Border",
    color: "#F03E3E",
    tokens: [
      ["Text", "red-700", "#F03E3E"],
      ["Background", "red-050", "#FFF5F5"],
      ["Border", "red-300", "#FFA8A8"],
    ],
  },
];

const componentGroups = [
  "Actions",
  "Form Controls",
  "Chat",
  "Navigation",
  "Data Display",
  "Feedback & Overlay",
  "Date Picker",
];

function Section({ id, eyebrow, title, description, children }: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-zinc-200 py-20 sm:py-24 lg:py-28">
      <div className="mb-12 max-w-3xl">
        <p className="mb-3 text-sm font-medium text-zinc-500">{eyebrow}</p>
        <h2 className="text-3xl font-semibold leading-tight tracking-[-0.045em] sm:text-4xl lg:text-5xl">{title}</h2>
        {description && <p className="mt-5 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">{description}</p>}
      </div>
      {children}
    </section>
  );
}

export default function WDSPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-950">
      <div className="mx-auto w-full max-w-5xl px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-36 lg:px-12 lg:pb-32 lg:pt-40">
        <div className="mb-8 text-sm text-zinc-500">
          <Link href="/projects/withbuddy" className="hover:text-zinc-900">WithBuddy</Link>
          <span className="mx-2">/</span>
          <span>Design System</span>
        </div>

        <section className="pb-20 sm:pb-28 lg:pb-32">
          <p className="mb-4 text-sm font-medium text-zinc-500">Design System · UI 설계서 · 개발 전달</p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-[1.08] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
            화면이 늘면서 달라진<br className="hidden sm:block" /> 이름과 상태 기준을 정리했습니다.
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-600 sm:text-xl sm:leading-9">
            같은 기능을 서로 다른 이름으로 부르거나 상태를 다르게 해석하는 일을 줄이기 위해 컴포넌트, 제품 화면, QA의 기준을 정리했습니다.
          </p>
          <a href={FIGMA_URL} target="_blank" rel="noopener noreferrer" className="mt-10 inline-flex rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800">Open in Figma ↗</a>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              ["문제", "화면마다 달라진 이름과 상태 해석"],
              ["범위", "컴포넌트 → 제품 화면 → 개발 전달 → QA"],
              ["담당", "구조·상태·문서화 기준 설계"],
            ].map(([label, text], index) => (
              <article key={label} className={index === 1 ? "rounded-3xl bg-zinc-950 p-6 text-white" : "rounded-3xl border border-zinc-200 p-6"}>
                <p className={index === 1 ? "text-sm text-zinc-400" : "text-sm text-zinc-500"}>{label}</p>
                <p className="mt-3 text-lg font-semibold leading-7">{text}</p>
              </article>
            ))}
          </div>
        </section>

        <nav className="sticky top-16 z-20 -mx-5 overflow-x-auto border-y border-zinc-200 bg-white/90 px-5 backdrop-blur sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
          <div className="flex gap-6 py-4">
            {navigation.map(([label, href]) => <a key={href} href={href} className="shrink-0 text-sm text-zinc-500 hover:text-zinc-950">{label}</a>)}
          </div>
        </nav>

        <Section id="overview" eyebrow="01 · Overview" title={<>컴포넌트 기준을<br />제품 화면과 QA에도 적용했습니다.</>} description="화면 안에서 개별적으로 만들던 요소를 다시 살펴보고, 디자인과 개발에서 같은 이름과 상태를 사용하도록 정리했습니다.">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              ["Before", "화면 안에 흩어진 요소", "명칭과 상태 기준이 화면마다 달라 추가 확인이 필요했습니다."],
              ["기준", "기능과 재사용 맥락", "보이는 모양보다 어떤 기능을 맡고 어디에서 반복되는지 확인했습니다."],
              ["After", "함께 확인하는 기준", "컴포넌트 상태와 사용 조건을 제품 화면에 표시하고, 같은 항목으로 개발 전달과 QA를 진행했습니다."],
            ].map(([label, title, text], index) => (
              <article key={label} className={index === 2 ? "rounded-3xl bg-zinc-950 p-7 text-white" : "rounded-3xl border border-zinc-200 p-7"}>
                <p className={index === 2 ? "text-sm text-zinc-400" : "text-sm text-zinc-500"}>{label}</p>
                <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                <p className={index === 2 ? "mt-4 text-sm leading-6 text-zinc-300" : "mt-4 text-sm leading-6 text-zinc-600"}>{text}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section id="color-tokens" eyebrow="02 · Foundations / Color Tokens" title="색상값이 아니라 역할을 기준으로 연결했습니다." description="제품 화면의 사용 맥락을 기준으로 Primitive Color를 Semantic Token에 연결하고, 텍스트와 배경, 테두리에 적용할 역할을 정했습니다.">
          <div className="grid gap-5 lg:grid-cols-2">
            {primitiveGroups.map((group) => (
              <article key={group.title} className="rounded-3xl border border-zinc-200 p-6 sm:p-7">
                <p className="text-sm font-medium text-zinc-500">Primitive Palette</p>
                <h3 className="mt-3 text-xl font-semibold">{group.title}</h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600">{group.description}</p>
                <div className={`mt-6 grid gap-3 ${group.colors.length === 4 ? "grid-cols-2" : "sm:grid-cols-3"}`}>
                  {group.colors.map((color) => (
                    <div key={color.name} className="min-w-0 overflow-hidden rounded-2xl border border-zinc-200 bg-white">
                      <div className="h-20" style={{ backgroundColor: color.hex }} />
                      <div className="p-4">
                        {color.label && <p className="text-xs font-medium text-zinc-500">{color.label}</p>}
                        <p className="mt-1 break-words text-sm font-medium text-zinc-900">{color.name}</p>
                        <p className="mt-1 font-mono text-xs text-zinc-500">{color.hex}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-3xl bg-zinc-950 p-6 text-white sm:p-8">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-zinc-400">Primitive → Semantic → Usage</p>
              <h3 className="mt-3 text-2xl font-semibold">같은 색을 이름이 아닌 역할로 사용했습니다.</h3>
            </div>
            <div className="mt-7 space-y-3">
              {tokenConnections.map((token) => (
                <div key={token.semantic} className="grid gap-3 rounded-2xl bg-white/[0.07] p-5 md:grid-cols-[1fr_auto_1.35fr_auto_1fr] md:items-center">
                  <div className="flex min-w-0 items-center gap-3">
                    <span className="h-9 w-9 shrink-0 rounded-full ring-1 ring-white/20" style={{ backgroundColor: token.hex }} />
                    <div className="min-w-0"><p className="text-xs text-zinc-400">Primitive</p><p className="mt-1 break-words font-mono text-sm">{token.primitive} · {token.hex}</p></div>
                  </div>
                  <span className="hidden text-zinc-500 md:block">→</span>
                  <div className="min-w-0 border-t border-white/10 pt-3 md:border-0 md:pt-0"><p className="text-xs text-zinc-400">Semantic</p><p className="mt-1 break-all font-mono text-sm">{token.semantic}</p></div>
                  <span className="hidden text-zinc-500 md:block">→</span>
                  <div className="border-t border-white/10 pt-3 md:border-0 md:pt-0"><p className="text-xs text-zinc-400">Usage</p><p className="mt-1 text-sm font-medium">{token.usage}</p></div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm font-medium text-zinc-500">State Token Mapping</p>
            <div className="mt-5 grid gap-5 lg:grid-cols-3">
              {stateTokens.map((state) => (
                <article key={state.name} className="overflow-hidden rounded-3xl border border-zinc-200">
                  <div className="flex items-center gap-3 p-6">
                    <span className="h-3 w-3 rounded-full" style={{ backgroundColor: state.color }} />
                    <div><h3 className="text-lg font-semibold">{state.name}</h3><p className="mt-1 text-xs text-zinc-500">{state.role}</p></div>
                  </div>
                  <dl className="border-t border-zinc-200 bg-zinc-50 px-6 py-2">
                    {state.tokens.map(([role, token, hex]) => (
                      <div key={role} className="grid grid-cols-[88px_1fr] gap-3 border-b border-zinc-200 py-4 last:border-b-0">
                        <dt className="text-xs font-medium text-zinc-500">{role}</dt>
                        <dd className="min-w-0"><p className="break-words font-mono text-xs text-zinc-800">{token}</p><p className="mt-1 font-mono text-xs text-zinc-500">{hex}</p></dd>
                      </div>
                    ))}
                  </dl>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-8 rounded-3xl border border-[#D0EBFF] bg-[#F7FCFF] p-7 sm:flex sm:items-center sm:justify-between sm:gap-8 sm:p-8">
            <p className="max-w-2xl leading-7 text-zinc-700">팔레트에서 끝내지 않고, 제품 화면의 역할과 상태 규칙까지 연결했습니다.</p>
            <a href={FIGMA_URL} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex shrink-0 text-sm font-medium text-[#336B97] hover:text-[#204867] sm:mt-0">전체 토큰과 사용 기준 보기 ↗</a>
          </div>
        </Section>

        <Section id="structure" eyebrow="03 · 구조와 기준" title="기능 맥락과 재사용 단위로 나눴습니다." description="모든 UI 덩어리를 컴포넌트로 만들지 않았습니다. 독립적으로 반복되는 단위인지, 여러 요소가 함께 만드는 제품 흐름인지 구분했습니다.">
          <div className="grid gap-5 lg:grid-cols-3">
            {[
              ["기능 맥락", "생김새가 비슷해도 역할이 다르면 같은 컴포넌트로 묶지 않았습니다."],
              ["재사용 단위", "독립적으로 반복되는 요소는 Component, 화면 맥락의 조합은 Pattern으로 관리했습니다."],
              ["문서 역할", "기초 기준, 컴포넌트, 제품 화면, 개발 전달과 QA가 서로 다른 내용을 맡도록 나눴습니다."],
            ].map(([title, text]) => <article key={title} className="rounded-3xl border border-zinc-200 p-7"><h3 className="text-xl font-semibold">{title}</h3><p className="mt-4 text-sm leading-6 text-zinc-600">{text}</p></article>)}
          </div>
          <div className="mt-8 rounded-3xl bg-zinc-50 p-7">
            <p className="text-sm font-medium text-zinc-500">Component Groups</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {componentGroups.map((group) => <span key={group} className="rounded-full bg-white px-4 py-2 text-sm text-zinc-700 ring-1 ring-zinc-200">{group}</span>)}
            </div>
            <p className="mt-6 text-sm leading-6 text-zinc-500">Vapor, TDS, Radix의 문서 구조를 비교한 뒤 프로젝트 규모에 필요한 기준만 참고했습니다.</p>
          </div>
        </Section>

        <Section id="components" eyebrow="04 · Component 문서화" title="상태와 구현 위험에 따라 문서 깊이를 달리했습니다." description="모든 컴포넌트를 같은 깊이로 문서화하지 않았습니다. 입력, 권한, 검증 조건의 영향을 크게 받는 요소에 더 많은 기준을 남겼습니다.">
          <div className="grid gap-6 lg:grid-cols-2">
            <article className="rounded-3xl border border-zinc-200 p-7"><p className="text-sm text-zinc-500">Basic</p><h3 className="mt-3 text-2xl font-semibold">단순 요소</h3><ul className="mt-6 space-y-3 text-sm text-zinc-600"><li>Overview와 사용 목적</li><li>기본 상태와 시각 예시</li><li>사용할 때와 피할 때</li></ul></article>
            <article className="rounded-3xl bg-zinc-950 p-7 text-white"><p className="text-sm text-zinc-400">Extended</p><h3 className="mt-3 text-2xl font-semibold">입력·상태·권한 영향이 큰 요소</h3><ul className="mt-6 space-y-3 text-sm text-zinc-300"><li>Properties와 조합 규칙</li><li>Default · Active · Error · ReadOnly</li><li>Examples와 Accessibility</li><li>Validation과 예외 조건</li></ul></article>
          </div>
          <article className="mt-8 rounded-3xl border border-zinc-200 p-7 sm:p-8">
            <p className="text-sm text-zinc-500">Representative Component</p><h3 className="mt-3 text-2xl font-semibold">ChatComposer</h3>
            <p className="mt-5 max-w-3xl leading-7 text-zinc-600">질문 입력, 전송 가능 여부, 오류, 읽기 전용 상태, Quick Question 조합을 함께 다뤄야 했습니다. 단순 Textarea가 아니라 채팅 맥락과 상태를 관리하는 복합 컴포넌트로 정의했습니다.</p>
            <div className="mt-6 flex flex-wrap gap-2">{["Default", "Active", "Error", "ReadOnly", "Quick Question", "Properties", "Examples", "Accessibility"].map((item) => <span key={item} className="rounded-full bg-zinc-100 px-4 py-2 text-sm text-zinc-700">{item}</span>)}</div>
            <p className="mt-6 text-sm leading-6 text-zinc-500">명세 초안을 만들 때 AI를 활용했지만, 실제 Figma 레이어와 토큰을 다시 확인해 적용했습니다.</p>
          </article>
        </Section>

        <Section id="ui-spec" eyebrow="05 · UI 설계서" title="컴포넌트 상태와 사용 조건을 제품 화면에 표시했습니다." description="컴포넌트 문서만으로 설명하기 어려운 화면 조건은 UI 설계서에 남겼습니다. Screen ID와 Annotation으로 화면과 상태를 구분했습니다.">
          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-zinc-200 p-7"><p className="text-sm text-zinc-500">Screen Structure</p><h3 className="mt-3 text-xl font-semibold">Login · MyBuddy · Admin</h3><p className="mt-4 text-sm leading-6 text-zinc-600">제품 영역과 상태를 Screen ID로 구분하고, 화면과 컴포넌트의 연결 관계를 기록했습니다.</p><code className="mt-5 block rounded-2xl bg-zinc-50 p-4 text-xs text-zinc-700">MYBUDDY-CHAT-02-PC</code></article>
            <article className="rounded-3xl border border-zinc-200 p-7"><p className="text-sm text-zinc-500">Annotation</p><h3 className="mt-3 text-xl font-semibold">화면 안에 판단 근거 남기기</h3><p className="mt-4 text-sm leading-6 text-zinc-600">Content · Behavior · Validation · Data/API · State · Usage를 구분해 개발에 필요한 조건을 화면 가까이에 기록했습니다.</p></article>
          </div>
        </Section>

        <Section id="handoff" eyebrow="06 · 개발 전달과 QA" title="구두로 설명하던 상태와 예외를 문서에 남겼습니다." description="디자인과 개발에서 같은 상태를 다르게 해석하지 않도록 API 응답별 화면과 검증 기준을 정리했습니다.">
          <div className="grid gap-5 lg:grid-cols-3">
            <article className="rounded-3xl bg-zinc-950 p-7 text-white"><p className="text-sm text-zinc-400">API State to UI Mapping</p><h3 className="mt-3 text-2xl font-semibold">API 응답에 따라 보여줄 화면 상태를 정리했습니다.</h3><p className="mt-5 text-sm leading-7 text-zinc-300">정상 응답뿐 아니라 로딩, 빈 상태, 오류, 권한 제한에서 어떤 UI를 보여줄지 기록했습니다.</p></article>
            <article className="rounded-3xl border border-zinc-200 p-7"><p className="text-sm text-zinc-500">Product Quality Standards</p><h3 className="mt-3 text-2xl font-semibold">구현 후 같은 기준으로 확인</h3><p className="mt-5 text-sm leading-7 text-zinc-600">Usage, State, Behavior, Validation, Data/API, A11y 기준으로 전달하고 QA 시나리오와 오류 재현 조건을 기록했습니다.</p></article>
            <article className="rounded-3xl border border-zinc-200 p-7"><p className="text-sm text-zinc-500">Naming</p><h3 className="mt-3 text-2xl font-semibold">Figma와 코드에서 같은 이름을 사용했습니다.</h3><p className="mt-5 text-sm leading-7 text-zinc-600">컴포넌트와 Screen ID의 이름을 맞추고 상태 이름을 통일해, 디자인과 개발에서 같은 대상을 다르게 부르는 일을 줄였습니다.</p></article>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">{["Naming", "Screen ID", "Annotation", "State / Validation", "QA Scenario"].map((item) => <div key={item} className="rounded-2xl bg-zinc-50 p-5 text-sm font-medium">{item}</div>)}</div>
        </Section>

        <Section id="learnings" eyebrow="07 · 배운 점" title="컴포넌트 수보다 함께 확인할 기준이 중요했습니다.">
          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-3xl border border-zinc-200 p-7"><p className="text-sm text-zinc-500">배운 점</p><p className="mt-5 leading-7 text-zinc-700">같은 UI를 만드는 것만으로는 해석 차이를 줄일 수 없었습니다. 상태와 사용 조건, 실제 화면의 맥락까지 함께 기록해야 개발과 QA에서 같은 기준을 사용할 수 있었습니다.</p></article>
            <article className="rounded-3xl border border-zinc-200 p-7"><p className="text-sm text-zinc-500">남은 한계</p><p className="mt-5 leading-7 text-zinc-700">프로젝트 일정 안에서 필요한 범위부터 정리했습니다. 장기 운영에서 문서가 계속 갱신되고 팀의 확인 비용이 줄어드는지는 검증하지 못했습니다.</p></article>
          </div>
        </Section>

        <div className="border-t border-zinc-200 pt-12"><Link href="/projects/withbuddy" className="text-sm font-medium hover:text-zinc-600">← Back to WithBuddy</Link></div>
      </div>
    </main>
  );
}
