import Link from "next/link";
import type { ReactNode } from "react";

const navigation = [
  { label: "Overview", href: "#overview" },
  { label: "Methods", href: "#methods" },
  { label: "Results", href: "#data" },
  { label: "Feedback", href: "#feedback" },
  { label: "Findings", href: "#findings" },
  { label: "Next", href: "#next" },
];

const validationMethods = [
  {
    number: "01",
    title: "Task-based User Test",
    description:
      "신입사원과 관리자 역할로 주요 기능을 직접 수행하도록 하고, 답변 이해도와 작업 과정의 불편을 기록했습니다.",
  },
  {
    number: "02",
    title: "Survey",
    description:
      "서비스 사용 후 신뢰도, 이해도, 재사용 의향과 개선 요구를 설문으로 수집했습니다.",
  },
  {
    number: "03",
    title: "GA4",
    description:
      "실제 페이지 방문과 클릭 이벤트를 바탕으로 사용자가 어떤 경로로 서비스를 탐색하는지 확인했습니다.",
  },
  {
    number: "04",
    title: "Microsoft Clarity",
    description:
      "세션 행동과 화면 탐색 흐름을 확인해 클릭이 몰리는 영역과 이탈 가능 구간을 분석했습니다.",
  },
];

const operatorFeedback = [
  {
    title: "기존 문서를 조회하고 다운로드하고 싶다",
    quote:
      "담당자가 변경될 경우 이전에 업로드된 문서를 즉시 확인하기 어려울 수 있습니다.",
    insight:
      "문서 업로드만으로는 운영이 완성되지 않는다. 인수인계와 장기 관리를 위해 조회·다운로드 기능이 필요하다.",
    action:
      "기존 문서 목록, 상세 조회, 다운로드 기능을 관리자 개선안에 포함합니다.",
  },
  {
    title: "신입 이후에도 전사 구성원이 활용할 수 있다",
    quote:
      "근속 직원도 사내 규정이나 제도 중 헷갈리는 부분을 빠르게 조회할 수 있으면 활용도가 높을 것 같습니다.",
    insight:
      "초기 진입 시장은 신입 온보딩이지만, 제품의 핵심 가치는 사내 지식 탐색 전반으로 확장될 가능성이 있다.",
    action:
      "MVP 타깃은 신입으로 유지하되, 향후 전사 Knowledge Assistant 확장 가설로 관리합니다.",
  },
  {
    title: "업무 커뮤니케이션 템플릿도 필요하다",
    quote:
      "문서 상신, 업무 메일, 상황별 비즈니스 글쓰기 가이드도 활용 사례가 될 수 있습니다.",
    insight:
      "사용자는 규정 조회뿐 아니라 실제 업무를 시작하는 데 필요한 실행 가능한 예시를 원한다.",
    action:
      "업무 템플릿을 별도 콘텐츠 카테고리로 제공하는 방안을 검토합니다.",
  },
];

const userTestFindings = [
  {
    number: "01",
    area: "AI Answer",
    title: "같은 의도의 질문도 표현에 따라 답변이 달라졌다",
    evidence:
      "‘첫 출근 준비물’ 질문에서는 틀린 답변이 나왔지만, ‘지참물’로 다시 질문하자 정상 답변이 제공됐습니다.",
    impact:
      "사용자가 서비스에 맞는 표현을 추측해야 하므로 첫 답변 신뢰도가 낮아질 수 있습니다.",
    next:
      "질문 표현의 동의어를 보강하고, 실제 사용자 문장을 기준으로 회귀 테스트를 진행합니다.",
    status: "개선 필요",
  },
  {
    number: "02",
    area: "Document Coverage",
    title: "연차 답변은 제공됐지만 반차 정보는 누락됐다",
    evidence:
      "복합 질문에서 일부 정보만 제공되어 사용자가 사람에게 다시 확인해야 했습니다.",
    impact:
      "답변 자체가 맞더라도 질문의 일부를 놓치면 업무 행동으로 바로 이어지기 어렵습니다.",
    next:
      "복합 질문의 하위 의도를 분리해 검색하고, 누락된 문서 범위를 관리자에게 보여줍니다.",
    status: "문서 보강",
  },
  {
    number: "03",
    area: "Safety",
    title: "민감정보 질문에 정책 안내가 부족했다",
    evidence:
      "연봉 질문에는 답변할 문서가 없다는 안내만 나왔고, 민감정보이기 때문에 제공할 수 없다는 설명은 없었습니다.",
    impact:
      "답변 거절 이유가 불명확하면 사용자가 단순한 검색 실패로 오해할 수 있습니다.",
    next:
      "민감정보 유형을 별도로 분류하고, 거절 사유와 안전한 문의 경로를 함께 안내합니다.",
    status: "정책 개선",
  },
  {
    number: "04",
    area: "Admin Console",
    title: "계정을 생성해도 목록에 즉시 보이지 않았다",
    evidence:
      "신규 계정이 입사일자 정렬 이후에야 나타나, 생성 성공 여부를 바로 확인하기 어려웠습니다.",
    impact:
      "반복적으로 계정을 등록하는 담당자에게 불필요한 확인 행동이 발생합니다.",
    next:
      "생성 직후 신규 계정을 상단에 노출하거나 성공 메시지에서 생성된 계정으로 바로 이동하게 합니다.",
    status: "UX 개선",
  },
  {
    number: "05",
    area: "UX Writing",
    title: "문서 타입의 영어 표현이 불필요하게 느껴졌다",
    evidence:
      "관리자 테스트에서 문서 타입은 영어가 아니어도 될 것 같다는 피드백이 있었습니다.",
    impact:
      "익숙하지 않은 용어는 문서 등록 과정에서 선택 판단을 늦출 수 있습니다.",
    next:
      "사용자에게 노출되는 문서 타입은 한글 중심으로 바꾸고 내부 코드값과 분리합니다.",
    status: "문구 개선",
  },
];

const nextMetrics = [
  {
    metric: "답변 후 재질문 비율",
    purpose: "첫 답변만으로 행동할 수 있었는지 확인",
  },
  {
    metric: "no_result 발생률",
    purpose: "문서 범위와 검색 품질의 개선 여부 확인",
  },
  {
    metric: "민감정보 안전 응답률",
    purpose: "거절 사유와 정책 안내가 정확히 제공되는지 확인",
  },
  {
    metric: "계정 생성 완료 시간",
    purpose: "관리자 계정 생성 흐름의 효율 확인",
  },
  {
    metric: "문서 보강 완료율",
    purpose: "미응답 질문이 실제 문서 개선으로 이어지는지 확인",
  },
  {
    metric: "기존 문서 조회·다운로드 사용률",
    purpose: "운영자에게 문서 관리 기능이 실제 가치가 있는지 확인",
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

export default function QAValidationPage() {
  return (
    <main className="min-h-screen bg-white px-4 pb-24 pt-24 text-zinc-950 sm:px-6">
      <div className="mx-auto max-w-5xl">
        {/* Breadcrumb */}
        <div className="mb-10 flex items-center gap-2 text-sm text-zinc-500">
          <Link
            href="/projects/withbuddy"
            className="transition hover:text-zinc-900"
          >
            WithBuddy
          </Link>

          <span>/</span>
          <span>QA & Validation</span>
        </div>

        {/* Hero */}
        <section className="pb-24">
          <p className="mb-5 text-sm font-medium text-zinc-500">
            User Test · GA4 · Survey · Product Validation
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
            발견한 문제를
            <br className="hidden sm:block" /> 다음 개선으로 연결했습니다.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-600">
            기능이 작동하는지만 확인하지 않았습니다. 신입과 운영자가
            실제 업무 상황에서 답변을 신뢰하고, 필요한 작업을 완료할 수
            있는지를 데이터와 사용자 피드백으로 검증했습니다.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <article className="rounded-3xl border border-zinc-200 p-6">
              <p className="text-sm text-zinc-500">Test Target</p>
              <p className="mt-3 text-xl font-semibold">
                신입사원 · HR 담당자
              </p>
            </article>

            <article className="rounded-3xl border border-zinc-200 p-6">
              <p className="text-sm text-zinc-500">Methods</p>
              <p className="mt-3 text-xl font-semibold">
                Test · Survey · GA4 · Clarity
              </p>
            </article>

            <article className="rounded-3xl border border-zinc-200 p-6">
              <p className="text-sm text-zinc-500">Focus</p>
              <p className="mt-3 text-xl font-semibold">
                신뢰도 · 행동 가능성 · 운영 효율
              </p>
            </article>
          </div>

          <VisualPlaceholder
            label="사용자 테스트 진행 모습 또는 테스트 수행지와 GA4 화면 콜라주"
            className="mt-8 min-h-[420px]"
          />
        </section>

        {/* Sticky navigation */}
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

        {/* Overview */}
        <Section
          id="overview"
          eyebrow="01 · Validation Goal"
          title="사용자가 답변을 받은 뒤 실제 행동할 수 있는지를 확인했습니다."
          description="정답률과 응답 속도 같은 기술 지표를 넘어, 답변의 완결성과 관리자 운영 과정에서 발생하는 마찰을 찾는 것이 목표였습니다."
        >
          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-3xl border border-zinc-200 p-6">
              <p className="text-sm font-medium text-zinc-500">
                Answer Quality
              </p>

              <h3 className="mt-4 text-xl font-semibold">
                답변만 보고 행동 가능한가
              </h3>

              <p className="mt-4 text-sm leading-6 text-zinc-600">
                일부 정보가 빠지거나 다시 확인해야 하는 답변을
                구분했습니다.
              </p>
            </article>

            <article className="rounded-3xl border border-zinc-200 p-6">
              <p className="text-sm font-medium text-zinc-500">
                Trust & Safety
              </p>

              <h3 className="mt-4 text-xl font-semibold">
                출처와 거절 이유를 신뢰할 수 있는가
              </h3>

              <p className="mt-4 text-sm leading-6 text-zinc-600">
                출처 확인과 민감정보 질문에서 사용자가 답변 범위를
                이해하는지 확인했습니다.
              </p>
            </article>

            <article className="rounded-3xl bg-zinc-950 p-6 text-white">
              <p className="text-sm font-medium text-zinc-400">
                Operational UX
              </p>

              <h3 className="mt-4 text-xl font-semibold">
                담당자가 반복 운영할 수 있는가
              </h3>

              <p className="mt-4 text-sm leading-6 text-zinc-300">
                계정 생성, 문서 관리와 대시보드 해석 과정의 불편을
                확인했습니다.
              </p>
            </article>
          </div>
        </Section>

        {/* Methods */}
        <Section
          id="methods"
          eyebrow="02 · How We Validated"
          title="행동 데이터와 정성 피드백을 함께 수집했습니다."
          description="한 가지 방법만으로 결론을 내리지 않고, 사용자가 한 행동과 사용 후 설명을 교차해 확인했습니다."
        >
          <div className="grid gap-5 md:grid-cols-2">
            {validationMethods.map((method) => (
              <article
                key={method.number}
                className="rounded-3xl border border-zinc-200 p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="text-sm font-medium text-zinc-500">
                    {method.title}
                  </p>

                  <span className="text-sm text-zinc-300">
                    {method.number}
                  </span>
                </div>

                <p className="mt-5 text-sm leading-7 text-zinc-600">
                  {method.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-3xl bg-zinc-50 p-7">
            <p className="text-sm font-medium text-zinc-500">
              Task Scenario
            </p>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <div>
                <p className="font-semibold">신입사원 미션</p>

                <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-600">
                  <li>첫 출근 준비물 질문</li>
                  <li>장비와 계정 발급 질문</li>
                  <li>연차·반차와 복지 규정 질문</li>
                  <li>출처 확인과 민감정보 질문</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold">관리자 미션</p>

                <ul className="mt-4 space-y-2 text-sm leading-6 text-zinc-600">
                  <li>대시보드 지표 해석</li>
                  <li>신입 계정 생성</li>
                  <li>문서 업로드</li>
                  <li>반복 운영 시 가장 번거로운 작업 기록</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Data */}
        {/* Validation Results */}
        <Section
          id="data"
          eyebrow="03 · Validation Results"
          title="사용 의향은 높았지만, 답변 품질과 문서 준비가 실제 도입의 조건이었습니다."
          description="13명의 오픈 테스트 결과와 실제 사용 로그를 함께 분석했습니다. 기대감만 보여주지 않고, 사용을 가로막는 조건까지 분리해 정리했습니다."
        >
          {/* 핵심 결과 */}
          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-3xl border border-zinc-200 p-6">
              <p className="text-sm font-medium text-zinc-500">
                Actual Use Intent
              </p>

              <p className="mt-4 text-3xl font-semibold tracking-tight">
                8.4 / 10
              </p>

              <p className="mt-3 text-sm leading-6 text-zinc-600">
                테스트 후 WithBuddy를 실제로 사용할 의향
              </p>
            </article>

            <article className="rounded-3xl border border-zinc-200 p-6">
              <p className="text-sm font-medium text-zinc-500">
                Pre-onboarding Value
              </p>

              <p className="mt-4 text-3xl font-semibold tracking-tight">
                8.6 / 10
              </p>

              <p className="mt-3 text-sm leading-6 text-zinc-600">
                입사 전에 정보를 확인할 경우 첫 주 불안감이 줄어들 것이라는 기대
              </p>
            </article>

            <article className="rounded-3xl bg-zinc-950 p-6 text-white">
              <p className="text-sm font-medium text-zinc-400">
                AI Response Failure
              </p>

              <p className="mt-4 text-3xl font-semibold tracking-tight">
                약 25%
              </p>

              <p className="mt-3 text-sm leading-6 text-zinc-300">
                실제 질문 로그에서 no_result 또는 out_of_scope로 분류된 비율
              </p>
            </article>
          </div>

          {/* 결과 해석 */}
          <div className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="rounded-3xl border border-zinc-200 p-7">
              <p className="text-sm font-medium text-zinc-500">
                What the Data Means
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                필요성은 확인했지만, 답변 품질이 재사용을 결정했습니다.
              </h3>

              <p className="mt-5 text-sm leading-7 text-zinc-600">
                실제 사용 의향과 불안감 감소 기대는 모두 8점 이상으로
                높았습니다. 반면 답변 이해도·신뢰도는 7.4점으로 평가 항목 중
                가장 낮았습니다.
              </p>

              <p className="mt-4 text-sm leading-7 text-zinc-600">
                사용자는 제품의 필요성에는 공감했지만, 답변이 길거나 일부
                질문에 적절히 대응하지 못하면 결국 다시 사람이나 문서를
                찾아야 한다고 느꼈습니다.
              </p>
            </article>

            <article className="rounded-3xl border border-zinc-200 p-7">
              <p className="text-sm font-medium text-zinc-500">
                Admin Experience
              </p>

              <p className="mt-4 text-3xl font-semibold tracking-tight">
                7.9 / 10
              </p>

              <p className="mt-3 text-sm leading-6 text-zinc-600">
                관리자 대상 문서 업로드·계정 관리 기능의 이해도와 유용성
              </p>

              <div className="mt-6 border-t border-zinc-200 pt-5">
                <p className="text-sm font-medium text-zinc-500">
                  First Impression
                </p>

                <p className="mt-2 text-xl font-semibold">
                  7.8 / 10
                </p>

                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  관리자 화면을 처음 접했을 때 기능을 이해하기 쉬웠는지에 대한
                  평가
                </p>
              </div>
            </article>
          </div>

          {/* 도입 우려 */}
          <div className="mt-14">
            <div className="mb-7 max-w-2xl">
              <p className="text-sm font-medium text-zinc-500">
                Adoption Barriers
              </p>

              <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                도입을 가로막는 가장 큰 요인은 AI 자체보다 문서와 보안이었습니다.
              </h3>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <article className="rounded-3xl border border-zinc-200 p-6">
                <div className="flex items-end justify-between gap-4">
                  <p className="font-semibold">
                    사내 정보가 충분히 정리되어 있지 않음
                  </p>

                  <p className="text-3xl font-semibold tracking-tight">
                    77%
                  </p>
                </div>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-zinc-100">
                  <div className="h-full w-[77%] rounded-full bg-zinc-950" />
                </div>

                <p className="mt-4 text-sm leading-6 text-zinc-600">
                  문서 기반 서비스이기 때문에 초기 정보 품질이 낮으면 답변
                  품질도 함께 떨어질 수 있다는 우려였습니다.
                </p>
              </article>

              <article className="rounded-3xl border border-zinc-200 p-6">
                <div className="flex items-end justify-between gap-4">
                  <p className="font-semibold">
                    개인정보와 사내 보안
                  </p>

                  <p className="text-3xl font-semibold tracking-tight">
                    62%
                  </p>
                </div>

                <div className="mt-5 h-2 overflow-hidden rounded-full bg-zinc-100">
                  <div className="h-full w-[62%] rounded-full bg-zinc-600" />
                </div>

                <p className="mt-4 text-sm leading-6 text-zinc-600">
                  사내 문서와 민감한 질문을 다루는 만큼 접근 권한과 안전한 답변
                  정책이 도입 판단에 큰 영향을 미쳤습니다.
                </p>
              </article>
            </div>
          </div>

          {/* 가격 민감도 */}
          <div className="mt-8 rounded-3xl bg-zinc-50 p-7">
            <div className="grid gap-6 md:grid-cols-[0.7fr_1.3fr] md:items-center">
              <div>
                <p className="text-sm font-medium text-zinc-500">
                  Pricing Sensitivity
                </p>

                <p className="mt-3 text-4xl font-semibold tracking-tight">
                  54%
                </p>

                <p className="mt-2 text-sm text-zinc-600">
                  월 10,000원 이상이면 부담스럽다고 응답
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">
                  가격보다 먼저 증명해야 할 가치가 있었습니다.
                </h3>

                <p className="mt-3 text-sm leading-7 text-zinc-600">
                  일부 응답자는 가격보다 답변 정확도, 보안, 관리자 편의성이
                  더 중요하다고 답했습니다. 따라서 초기 단계에서는 가격을
                  확정하기보다 답변 신뢰도와 운영 효율을 먼저 검증하기로
                  판단했습니다.
                </p>
              </div>
            </div>
          </div>

          {/* 시각자료 자리 */}
          <VisualPlaceholder
            label="GA4 질문 이벤트 및 no_result 비율 · 설문 평가 점수 · 주요 우려 항목 차트"
            className="mt-8 min-h-[360px]"
          />

          <p className="mt-5 text-sm leading-6 text-zinc-500">
            테스트 기간: 2026.07.04–07.09 · 응답자 13명 · 관리자 화면 사용
            응답자 10명
          </p>
        </Section>

        {/* Operator feedback */}
        <Section
          id="feedback"
          eyebrow="04 · HR Operator Feedback"
          title="실제 운영자는 기능보다 인수인계와 장기 운영을 먼저 봤습니다."
          description="운영자 피드백을 단순 요구사항으로 옮기지 않고, 어떤 운영 문제를 의미하는지 분석했습니다."
        >
          <div className="space-y-6">
            {operatorFeedback.map((feedback, index) => (
              <article
                key={feedback.title}
                className="rounded-3xl border border-zinc-200 p-6 sm:p-8"
              >
                <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                  <div>
                    <p className="text-sm font-medium text-zinc-400">
                      Feedback {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                      {feedback.title}
                    </h3>

                    <blockquote className="mt-6 border-l-2 border-zinc-300 pl-4 text-sm leading-7 text-zinc-600">
                      “{feedback.quote}”
                    </blockquote>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-2xl bg-zinc-50 p-5">
                      <p className="text-sm font-medium text-zinc-500">
                        Insight
                      </p>

                      <p className="mt-3 text-sm leading-7 text-zinc-700">
                        {feedback.insight}
                      </p>
                    </div>

                    <div className="rounded-2xl bg-zinc-950 p-5 text-white">
                      <p className="text-sm font-medium text-zinc-400">
                        Next Action
                      </p>

                      <p className="mt-3 text-sm leading-7 text-zinc-200">
                        {feedback.action}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Section>

        {/* Findings */}
        <Section
          id="findings"
          eyebrow="05 · Major Findings"
          title="테스트에서 발견한 문제를 개선 단위로 정리했습니다."
          description="발견한 문제, 사용자에게 미치는 영향, 다음 개선 방향을 한 묶음으로 기록했습니다."
        >
          <div className="space-y-5">
            {userTestFindings.map((finding) => (
              <article
                key={finding.number}
                className="rounded-3xl border border-zinc-200 p-6 sm:p-8"
              >
                <div className="flex flex-col gap-4 border-b border-zinc-200 pb-6 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm font-medium text-zinc-400">
                      {finding.area} · {finding.number}
                    </p>

                    <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">
                      {finding.title}
                    </h3>
                  </div>

                  <span className="w-fit rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
                    {finding.status}
                  </span>
                </div>

                <div className="mt-7 grid gap-5 lg:grid-cols-3">
                  <div>
                    <p className="text-sm font-medium text-zinc-500">
                      Evidence
                    </p>

                    <p className="mt-3 text-sm leading-7 text-zinc-700">
                      {finding.evidence}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-zinc-500">
                      Impact
                    </p>

                    <p className="mt-3 text-sm leading-7 text-zinc-700">
                      {finding.impact}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-zinc-50 p-5">
                    <p className="text-sm font-medium text-zinc-500">
                      Next Improvement
                    </p>

                    <p className="mt-3 text-sm leading-7 text-zinc-700">
                      {finding.next}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <VisualPlaceholder
            label="답변 오류 · 민감정보 응답 · 계정 목록 갱신의 Before / After 화면"
            className="mt-6"
          />
        </Section>

        {/* Limitations */}
        <Section
          id="limitations"
          eyebrow="06 · Remaining Limitations"
          title="이번 테스트만으로 확인하지 못한 영역도 남겨두었습니다."
        >
          <div className="grid gap-5 md:grid-cols-3">
            <article className="rounded-3xl border border-zinc-200 p-6">
              <h3 className="text-lg font-semibold">
                실제 고객사 파일럿
              </h3>

              <p className="mt-4 text-sm leading-6 text-zinc-600">
                단기 테스트가 아닌 실제 조직의 온보딩 기간 전체에서
                효과를 확인하지 못했습니다.
              </p>
            </article>

            <article className="rounded-3xl border border-zinc-200 p-6">
              <h3 className="text-lg font-semibold">
                장기 운영 데이터
              </h3>

              <p className="mt-4 text-sm leading-6 text-zinc-600">
                문서가 누적될수록 미응답과 담당자 개입이 실제로 감소하는지
                장기 관찰이 필요합니다.
              </p>
            </article>

            <article className="rounded-3xl border border-zinc-200 p-6">
              <h3 className="text-lg font-semibold">
                조직 규모별 차이
              </h3>

              <p className="mt-4 text-sm leading-6 text-zinc-600">
                30~100인 외 조직에서도 같은 운영 문제가 발생하는지
                추가 검증이 필요합니다.
              </p>
            </article>
          </div>
        </Section>

        {/* Next validation */}
        <Section
          id="next"
          eyebrow="07 · Next Validation"
          title="다음 파일럿에서는 개선 여부를 행동 데이터로 확인합니다."
          description="사용자의 의견만 묻지 않고, 실제 질문과 관리자 운영 행동이 어떻게 달라졌는지를 측정할 예정입니다."
        >
          <div className="overflow-hidden rounded-3xl border border-zinc-200">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] text-left text-sm">
                <thead className="bg-zinc-50 text-zinc-500">
                  <tr>
                    <th className="px-5 py-4 font-medium">
                      Metric
                    </th>

                    <th className="px-5 py-4 font-medium">
                      What It Validates
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {nextMetrics.map((item) => (
                    <tr
                      key={item.metric}
                      className="border-t border-zinc-200"
                    >
                      <td className="px-5 py-4 font-medium">
                        {item.metric}
                      </td>

                      <td className="px-5 py-4 text-zinc-600">
                        {item.purpose}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-8 rounded-3xl bg-zinc-950 p-8 text-white">
            <p className="max-w-3xl text-2xl font-semibold leading-9">
              QA의 목적은 오류 목록을 만드는 것이 아니라, 다음 설계
              결정의 근거를 만드는 것이었습니다.
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