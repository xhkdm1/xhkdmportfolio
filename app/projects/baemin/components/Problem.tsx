const problemAxes = [
  {
    number: "01",
    title: "인지적 과부하",
    description:
      "가격, 리뷰, 쿠폰과 배달 조건을 서로 다른 화면에서 기억하며 비교해야 했습니다.",
  },
  {
    number: "02",
    title: "최종 비용의 불확실성",
    description:
      "쿠폰과 배달비가 적용된 최종 금액을 같은 조건에서 비교하기 어려웠습니다.",
  },
  {
    number: "03",
    title: "결정 유예의 어려움",
    description:
      "이전 선택을 유지한 채 다른 가게를 검토할 수 없어 담기와 삭제를 반복해야 했습니다.",
  },
];

const marketMetrics = [
  {
    value: "31.7%",
    label: "2024년 배달앱 이용률",
    note: "2018년 7.6%에서 증가",
  },
  {
    value: "41%",
    label: "배달앱 교차 이용률",
    note: "복수 서비스 탐색 경험",
  },
  {
    value: "51.9%",
    label: "메뉴와 가게를 함께 고려",
    note: "선택 과정의 복합성",
  },
];

export default function Problem() {
  return (
    <section className="bg-zinc-50 px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
            Problem
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-zinc-950 sm:text-4xl lg:text-5xl">
            문제는 메뉴를 찾지 못하는 것이 아니라,
            <br />
            마지막 선택을 확신하기 어려운 과정에 있었습니다.
          </h2>
        </div>

        <blockquote className="mt-14 rounded-[2rem] bg-white p-7 shadow-sm sm:p-10">
          <p className="text-sm font-semibold text-[#008A95]">
            App Store Review
          </p>

          <p className="mt-5 max-w-4xl text-2xl font-medium leading-9 tracking-[-0.025em] text-zinc-900 sm:text-3xl sm:leading-10">
            “장바구니는 1개만 담을 수 있어서 비교를 할 수 없어요.”
          </p>

          <p className="mt-5 text-sm leading-6 text-zinc-500">
            프로젝트의 문제 탐색을 시작하게 한 사용자 코멘트
          </p>
        </blockquote>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {marketMetrics.map((metric) => (
            <article
              key={metric.label}
              className="rounded-3xl border border-zinc-200 bg-white p-6"
            >
              <p className="text-3xl font-semibold tracking-[-0.04em] text-zinc-950">
                {metric.value}
              </p>
              <p className="mt-3 text-sm font-semibold text-zinc-700">
                {metric.label}
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-500">
                {metric.note}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {problemAxes.map((problem) => (
            <article
              key={problem.number}
              className="rounded-3xl border border-zinc-200 bg-white p-7 sm:p-8"
            >
              <p className="text-sm font-semibold text-[#008A95]">
                {problem.number}
              </p>

              <h3 className="mt-4 text-xl font-semibold tracking-[-0.025em] text-zinc-950">
                {problem.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-zinc-600">
                {problem.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] bg-[#008A95] px-7 py-12 text-white sm:px-10 sm:py-16 lg:px-14">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/65">
            Problem Definition
          </p>

          <h3 className="mt-5 max-w-5xl text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
            결제 직전 여러 가게를 비교하기 위해 반복되는 이동과 삭제
            과정을 어떻게 줄일 수 있을까?
          </h3>

          <p className="mt-6 max-w-3xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
            사용자가 이전 선택을 잃지 않고 가격과 조건을 함께 비교할 수
            있다면, 탐색 과정에서 발생하는 인지적 부담과 피로를 줄일 수
            있을 것이라 가정했습니다.
          </p>
        </div>
      </div>
    </section>
  );
}