const processSteps = [
  {
    number: "01",
    title: "담는다",
    description: "한 가게의 메뉴를 장바구니에 담습니다.",
  },
  {
    number: "02",
    title: "다른 가게를 탐색한다",
    description: "더 나은 가격과 리뷰, 쿠폰을 찾기 위해 다시 이동합니다.",
  },
  {
    number: "03",
    title: "기존 장바구니를 비운다",
    description: "새 가게의 메뉴를 담기 위해 이전 선택을 삭제합니다.",
  },
  {
    number: "04",
    title: "기억에 의존해 비교한다",
    description: "이전 가격과 조건을 기억하며 결정을 반복합니다.",
  },
];

export default function Background() {
  return (
    <section className="bg-white px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
            Background
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-zinc-950 sm:text-4xl lg:text-5xl">
            장바구니는 결제를 돕는 공간이지만,
            <br />
            비교하려는 순간에는 선택을 지워야 했습니다.
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            배달 메뉴를 선택할 때 사용자는 음식 가격뿐 아니라 배달비,
            쿠폰, 리뷰, 별점과 최소 주문 금액을 함께 고려합니다. 그러나
            단일 매장 전제로 설계된 장바구니에서는 다른 가게의 메뉴를
            담는 순간 기존 선택을 유지할 수 없었습니다.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-4">
          {processSteps.map((step) => (
            <article
              key={step.number}
              className="border-t border-zinc-300 pt-5"
            >
              <p className="text-sm font-semibold text-[#008A95]">
                {step.number}
              </p>
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.025em] text-zinc-950">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600">
                {step.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-16 grid gap-8 rounded-[2rem] bg-zinc-950 p-7 text-white sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:p-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-400">
              Research Question
            </p>

            <p className="mt-5 text-2xl font-semibold leading-9 tracking-[-0.035em] sm:text-3xl">
              여러 가게를 비교하기 위해 사용자가 반복하는 탐색 과정을
              장바구니 안에서 줄일 수 있을까?
            </p>
          </div>

          <div className="border-t border-white/10 pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-400">
              Project Positioning
            </p>

            <p className="mt-5 text-lg font-medium leading-8 text-zinc-200">
              이 프로젝트는 하나의 최종 UI를 확정한 리디자인 프로젝트가
              아니라, 다중 가게 비교 문제를 발견하고 두 가지 구조의
              해결 가능성을 검증한 UX 리서치 프로젝트입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}