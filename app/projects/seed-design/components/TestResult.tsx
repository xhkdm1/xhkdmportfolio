import ImageLightbox from "../../../components/ImageLightBox";

const testMetrics = [
  {
    value: "77.8%",
    label: "화면 조립 결과 만족",
    detail: "4–5점 응답 · 평균 4.33/5",
  },
  {
    value: "77.8%",
    label: "컴포넌트 탐색 가능",
    detail: "필요한 컴포넌트를 판단할 수 있다고 응답",
  },
  {
    value: "88.9%",
    label: "자연스러운 조립 과정",
    detail: "4–5점 응답 · 평균 4.33/5",
  },
  {
    value: "100%",
    label: "화면 제작 가능성 항목",
    detail: "전원 4–5점 응답 · 평균 4.67/5",
  },
];

const testFindings = [
  {
    title: "역할 이해: 컴포넌트 종류는 비교적 빠르게 판단했습니다.",
    description:
      "필요한 컴포넌트의 종류를 빠르게 판단했고, Property와 Style의 차이도 비교적 쉽게 이해했습니다.",
  },
  {
    title: "Findability: 정확한 컴포넌트를 찾는 과정에서 막혔습니다.",
    description:
      "비슷한 컴포넌트와 Chip이 한곳에 모여 있어 원하는 항목을 하나씩 확인해야 한다는 의견이 있었습니다.",
  },
  {
    title: "Naming / Property: Variable과 Chip 구조에서 혼란이 있었습니다.",
    description:
      "축약된 Variable 이름으로 용도를 추측하기 어려웠고, Chip의 Size와 Property가 많아 조정 과정이 복잡하다는 의견이 있었습니다.",
  },
];

const testImprovements = [
  "축약된 Variable 이름을 의미 중심 Naming으로 변경",
  "유사 컴포넌트를 Group과 Preview로 명확히 구분",
  "Chip Size와 Property 수를 줄여 선택 과정 단순화",
  "Chip 내부 텍스트를 Text Property로 연결",
  "아이콘의 크기별 사용 기준과 이름 체계 정리",
];

export default function TestResult() {
  return (
    <section
      id="test-result"
      className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 md:py-28 lg:py-32"
    >
      <header className="mb-12 border-t border-zinc-200 pt-5">
        <p className="text-sm font-medium text-[#E85D00]">
          07 · Test Result
        </p>

        <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          조립은 가능했지만, 탐색과 네이밍에서 개선점을 발견했습니다.
        </h2>

        <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
          9명의 디자이너가 재구성한 컴포넌트로 실제 화면을 제작했습니다.
          화면 조립과 활용 가능성은 높게 평가됐지만, 정확한 컴포넌트를
          찾고 Variable의 용도를 추론하는 과정에서는 어려움이
          나타났습니다.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {testMetrics.map((metric) => (
          <article
            key={metric.label}
            className="rounded-3xl border border-zinc-200 bg-white p-6"
          >
            <p className="text-3xl font-semibold tracking-tight text-[#E85D00]">
              {metric.value}
            </p>

            <h3 className="mt-4 text-base font-semibold leading-6">
              {metric.label}
            </h3>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              {metric.detail}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <article className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8">
          <p className="text-sm font-medium text-zinc-500">
            Variable Usability
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-white p-5">
              <p className="text-3xl font-semibold">3.22</p>
              <p className="mt-2 text-sm font-medium text-zinc-800">
                Naming 직관성
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-500">
                5점 만점 평균
              </p>
            </div>

            <div className="rounded-2xl bg-white p-5">
              <p className="text-3xl font-semibold">3.0</p>
              <p className="mt-2 text-sm font-medium text-zinc-800">
                컬러·폰트 적용
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-500">
                5점 만점 평균
              </p>
            </div>
          </div>

          <p className="mt-5 text-sm leading-6 text-zinc-600">
            컴포넌트 조립보다 Variable의 이름과 용도를 이해하는 과정에서
            상대적으로 더 많은 어려움이 나타났습니다.
          </p>
        </article>

        <article className="rounded-3xl border border-[#FF6F0F] bg-[#FFF4EC] p-6 sm:p-8">
          <p className="text-sm font-medium text-[#E85D00]">Core Insight</p>

          <p className="mt-6 text-xl font-semibold leading-8 tracking-tight sm:text-2xl">
            필요한 컴포넌트의 역할은 쉽게 알 수 있었지만, 유사한 후보 중
            정확한 컴포넌트를 찾는 과정은 쉽지 않았습니다.
          </p>

          <p className="mt-5 text-sm leading-7 text-zinc-600">
            컴포넌트 수를 늘리는 것보다 Naming, Grouping, Preview를 통해
            선택 기준을 명확하게 만드는 것이 중요하다고 판단했습니다.
          </p>
        </article>
      </div>

      <div className="mt-14">
        <p className="text-sm font-medium text-[#E85D00]">Key Findings</p>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {testFindings.map((finding, index) => (
            <article
              key={finding.title}
              className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8"
            >
              <p className="text-sm font-medium text-zinc-400">
                {String(index + 1).padStart(2, "0")}
              </p>

              <h3 className="mt-5 text-xl font-semibold leading-7">
                {finding.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-zinc-600">
                {finding.description}
              </p>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-12 max-w-3xl">
        <ImageLightbox
          src="/images/seed-design/questionnaire-response.png"
          alt="Component Assembly Test 참여자 한 명의 질문지 응답 예시"
          label="Participant Response"
          caption="조립 가능성, 탐색, Variable 적용 경험을 확인한 참여자 응답 예시입니다."
          aspectClassName="aspect-[3/4]"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>

      <div className="mt-14 rounded-3xl bg-zinc-950 p-6 text-white sm:p-8">
        <p className="text-sm font-medium text-orange-400">
          Next Direction
        </p>

        <h3 className="mt-4 text-2xl font-semibold tracking-tight">
          확인한 문제를 다음 개선 방향으로 정리했습니다.
        </h3>

        <div className="mt-8 grid gap-3 md:grid-cols-2">
          {testImprovements.map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <p className="text-sm leading-6 text-zinc-300">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}