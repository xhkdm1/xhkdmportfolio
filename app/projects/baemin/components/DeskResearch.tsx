const marketMetrics = [
  { value: "7.6%", year: "2018", label: "배달앱 이용률" },
  { value: "31.7%", year: "2024", label: "배달앱 이용률" },
  { value: "41%", year: "교차 이용", label: "복수 배달앱 이용률" },
  { value: "51.9%", year: "선택 과정", label: "메뉴와 가게를 함께 고려" },
];

const reviewFindings = [
  {
    number: "280건",
    title: "앱스토어 리뷰 분석",
    description: "장바구니 중복 담기 자체를 직접 언급한 불만은 확인되지 않았습니다.",
  },
  {
    number: "반복 발견",
    title: "저장 정보 관리의 불편",
    description: "찜 목록의 필터링과 일괄 관리가 어렵다는 불만이 반복적으로 나타났습니다.",
  },
  {
    number: "해석",
    title: "비교 문제의 간접 신호",
    description: "사용자는 여러 후보를 저장하고 다시 찾는 과정에서도 관리 부담을 겪고 있었습니다.",
  },
];

const researchScopes = [
  { label: "Direct Competitors", title: "배달 플랫폼", items: ["쿠팡이츠", "요기요", "땡겨요", "배달특급"] },
  { label: "Adjacent Services", title: "인접 서비스", items: ["퀵커머스", "오프라인 픽업", "라이더 대행"] },
  { label: "Comparison Patterns", title: "비배달 비교 경험", items: ["다나와", "애플스토어", "에이블리", "지그재그", "노션", "어도비"] },
];

export default function DeskResearch() {
  return (
    <section className="bg-white px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
            Desk Research
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-zinc-950 sm:text-4xl lg:text-5xl">
            사용자는 이미 여러 선택지를 오가며
            <br />
            배달 메뉴를 결정하고 있었습니다.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            시장 데이터와 앱스토어 리뷰, 경쟁 서비스 사례를 살펴보며 다중 비교가
            실제 사용자 행동과 얼마나 연결되는지 확인했습니다.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {marketMetrics.map((metric) => (
            <article
              key={`${metric.year}-${metric.label}`}
              className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6"
            >
              <p className="text-sm font-semibold text-[#008A95]">{metric.year}</p>
              <p className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-zinc-950">
                {metric.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-500">{metric.label}</p>
            </article>
          ))}
        </div>

        <div className="mt-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
              App Review Analysis
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.035em] text-zinc-950 sm:text-3xl">
              직접적인 장바구니 불만보다, 저장한 후보를 관리하기 어렵다는
              신호가 먼저 보였습니다.
            </h3>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {reviewFindings.map((item) => (
              <article key={item.title} className="rounded-3xl border border-zinc-200 bg-white p-7">
                <p className="text-sm font-semibold text-[#008A95]">{item.number}</p>
                <h4 className="mt-4 text-xl font-semibold tracking-[-0.025em] text-zinc-950">
                  {item.title}
                </h4>
                <p className="mt-4 text-base leading-7 text-zinc-600">{item.description}</p>
              </article>
            ))}
          </div>

          <p className="mt-6 text-sm leading-6 text-zinc-500">
            ※ 앱스토어 리뷰에서는 장바구니 중복 담기에 대한 직접 불만을 확인하지
            못했습니다. 따라서 리뷰 결과는 비교 문제의 직접 근거가 아니라,
            저장 후보 관리의 불편을 보여주는 보조 근거로 사용했습니다.
          </p>
        </div>

        <div className="mt-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
              Research Scope
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.035em] text-zinc-950 sm:text-3xl">
              배달앱뿐 아니라 사용자가 여러 대안을 비교하는 서비스까지 조사 범위를 확장했습니다.
            </h3>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {researchScopes.map((scope) => (
              <article key={scope.label} className="rounded-3xl bg-zinc-950 p-7 text-white">
                <p className="text-sm font-semibold uppercase tracking-[0.12em] text-zinc-400">
                  {scope.label}
                </p>
                <h4 className="mt-4 text-2xl font-semibold tracking-[-0.03em]">{scope.title}</h4>
                <ul className="mt-6 space-y-3">
                  {scope.items.map((item) => (
                    <li key={item} className="border-t border-white/10 pt-3 text-sm leading-6 text-zinc-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-24 rounded-[2rem] border border-[#B8DDE0] bg-[#F5FBFC] p-7 sm:p-10 lg:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#008A95]">
            Initial Insight
          </p>
          <h3 className="mt-5 max-w-4xl text-2xl font-semibold leading-9 tracking-[-0.035em] text-zinc-950 sm:text-3xl">
            사용자는 한 가게만 보는 것이 아니라 여러 후보를 비교하지만,
            장바구니는 그 비교 상태를 유지하지 못하고 있었습니다.
          </h3>
          <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-600">
            이 발견을 바탕으로 장바구니를 단순한 결제 전 저장 공간이 아니라,
            최종 선택을 지원하는 비교 공간으로 볼 수 있는지 탐색했습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
