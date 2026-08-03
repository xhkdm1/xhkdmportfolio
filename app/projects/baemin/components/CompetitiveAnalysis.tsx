const competitorRows = [
  { service: "배달의민족", multiCart: "지원하지 않음", comparison: "가게 간 직접 비교 어려움", checkout: "단일 매장" },
  { service: "쿠팡이츠", multiCart: "제한적", comparison: "가게를 오가며 확인", checkout: "단일 매장" },
  { service: "요기요", multiCart: "제한적", comparison: "가게별 개별 확인", checkout: "단일 매장" },
  { service: "배달특급", multiCart: "서비스 구조별 상이", comparison: "개별 탐색 중심", checkout: "단일 매장 중심" },
  { service: "땡겨요", multiCart: "지원", comparison: "여러 가게 장바구니 유지", checkout: "가게별 선택" },
];

const benchmarkPatterns = [
  {
    category: "한 화면 비교",
    services: "다나와 · 애플스토어",
    description: "선택 후보를 한 화면에 나란히 두고 핵심 조건을 동일한 기준으로 비교합니다.",
  },
  {
    category: "비교 바텀시트",
    services: "에이블리 · 지그재그",
    description: "탐색 중 선택한 후보를 유지하고 별도 비교 화면으로 전환합니다.",
  },
  {
    category: "요금제 비교",
    services: "노션 · 어도비",
    description: "복잡한 조건을 공통 항목으로 정렬해 차이를 빠르게 파악하도록 돕습니다.",
  },
];

export default function CompetitiveAnalysis() {
  return (
    <section className="bg-zinc-50 px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
            Competitive Analysis
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-zinc-950 sm:text-4xl lg:text-5xl">
            비교 경험은 새로운 기능이 아니라,
            <br />
            이미 다른 서비스에서 반복되는 패턴이었습니다.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            배달 서비스의 장바구니 구조와 비배달 서비스의 비교 패턴을 함께 살펴보며,
            사용자가 후보를 유지하고 차이를 확인하는 방식을 분석했습니다.
          </p>
        </div>

        <div className="mt-14 overflow-hidden rounded-[2rem] border border-zinc-200 bg-white">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse text-left">
              <thead className="bg-zinc-950 text-white">
                <tr>
                  <th className="px-6 py-5 text-sm font-semibold">서비스</th>
                  <th className="px-6 py-5 text-sm font-semibold">다중 가게 담기</th>
                  <th className="px-6 py-5 text-sm font-semibold">비교 방식</th>
                  <th className="px-6 py-5 text-sm font-semibold">결제 구조</th>
                </tr>
              </thead>
              <tbody>
                {competitorRows.map((row) => (
                  <tr key={row.service} className="border-t border-zinc-200">
                    <td className="px-6 py-5 text-sm font-semibold text-zinc-950">{row.service}</td>
                    <td className="px-6 py-5 text-sm leading-6 text-zinc-600">{row.multiCart}</td>
                    <td className="px-6 py-5 text-sm leading-6 text-zinc-600">{row.comparison}</td>
                    <td className="px-6 py-5 text-sm leading-6 text-zinc-600">{row.checkout}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-[#008A95] p-7 text-white sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/65">
              Direct Reference
            </p>
            <h3 className="mt-5 text-3xl font-semibold tracking-[-0.04em]">
              땡겨요는 이미 여러 가게를 장바구니에 유지하고 있었습니다.
            </h3>
            <p className="mt-5 text-base leading-7 text-white/80">
              포장과 배달 탭을 분리하고, 가게별 주문 금액을 장바구니 안에서
              확인할 수 있었습니다. 새 가게의 메뉴를 담을 때 기존 장바구니를
              비우라는 팝업도 나타나지 않았습니다.
            </p>
          </div>

          <div className="flex min-h-[360px] items-center justify-center rounded-[2rem] border border-dashed border-zinc-300 bg-white p-8">
            <p className="text-center text-sm font-medium leading-6 text-zinc-500">
              땡겨요 실사용 화면 캡처 3장 삽입
              <br />
              장바구니 목록 · 가게별 금액 · 결제 진입
            </p>
          </div>
        </div>

        <div className="mt-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
              Benchmark Patterns
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.035em] text-zinc-950 sm:text-3xl">
              서비스마다 표현은 달랐지만, 후보 유지와 조건 정렬이라는 원리는 같았습니다.
            </h3>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {benchmarkPatterns.map((pattern) => (
              <article key={pattern.category} className="rounded-3xl border border-zinc-200 bg-white p-7">
                <p className="text-sm font-semibold text-[#008A95]">{pattern.category}</p>
                <h4 className="mt-4 text-xl font-semibold tracking-[-0.025em] text-zinc-950">
                  {pattern.services}
                </h4>
                <p className="mt-4 text-base leading-7 text-zinc-600">{pattern.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-24 rounded-[2rem] bg-zinc-950 p-7 text-white sm:p-10 lg:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-400">
            Positioning
          </p>
          <h3 className="mt-5 max-w-4xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
            배민의 비교 경험은 즐거움을 추가하는 기능보다,
            선택 과정의 유용성을 높이는 방향에 가까웠습니다.
          </h3>
          <div className="mt-10 flex aspect-[16/7] items-center justify-center rounded-3xl border border-dashed border-white/20 bg-white/5">
            <p className="text-center text-sm font-medium leading-6 text-zinc-400">
              즐거움–유용함 × 사용자–시스템 주도권
              <br />
              포지셔닝 매트릭스 삽입
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
