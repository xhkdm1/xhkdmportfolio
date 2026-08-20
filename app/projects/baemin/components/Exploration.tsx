const directions = [
  {
    title: "장바구니",
    reason: ["주문 과정과 연결", "후보 메뉴를 담는 행동과 연결 가능"],
    concern: "결제 공간과 비교 공간의 역할이 섞일 수 있음",
  },
  {
    title: "찜",
    reason: ["후보를 저장하고 다시 확인하는 흐름과 연결 가능"],
    concern:
      "먼저 저장해야 하며, 찜의 역할이 복잡해지고 메뉴 단위 비교에는 제약이 있을 수 있음",
  },
  {
    title: "별도 비교",
    reason: ["비교 목적을 독립된 기능으로 분리 가능"],
    concern: "새로운 진입점과 별도의 사용 흐름이 필요함",
  },
];

const concepts = [
  {
    label: "Concept A · 투뎁스",
    description: "여러 가게의 장바구니를 목록으로 유지하고, 가게를 선택하면 해당 장바구니 상세 화면으로 이동하는 구조입니다.",
    tradeoff: "기존 목록→상세 흐름과 유사하지만, 후보를 비교하려면 화면 이동이 필요합니다.",
    href: "https://error-gadget-51476136.figma.site/",
    buttonLabel: "투뎁스 프로토타입 보기",
  },
  {
    label: "Concept B · 아코디언",
    description: "여러 가게의 장바구니를 한 화면에 유지하고, 각 영역을 펼치고 접으며 확인하는 구조입니다.",
    tradeoff: "여러 후보를 같은 화면에서 확인할 수 있지만, 한 번에 보이는 정보량이 많아질 수 있습니다.",
    href: "https://upbeat-gizmo-67857376.figma.site/",
    buttonLabel: "아코디언 프로토타입 보기",
  },
];

export default function Exploration() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <header className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">04 · Exploration</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.045em] text-zinc-950 sm:text-4xl lg:text-5xl">
            비교 상태를 어디에 둘지
            <br />
            세 가지 방향으로 정리했습니다.
          </h2>
          <p className="mt-6 max-w-3xl text-sm leading-6 text-zinc-500">비교 상태를 둘 위치를 장바구니·찜·별도 비교 세 방향으로 검토했습니다.</p>
        </header>

        <p className="mt-14 text-xs font-semibold uppercase tracking-[0.14em] text-[#008A95]">
          Step 1 · 해결 위치 탐색
        </p>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {directions.map((direction) => (
            <article key={direction.title} className="rounded-3xl border border-zinc-200 bg-zinc-50 p-7 sm:p-8 lg:grid lg:h-full lg:grid-rows-[auto_auto_4.5rem_auto_1fr]">
              <h3 className="text-2xl font-semibold tracking-[-0.03em] text-zinc-950">{direction.title}</h3>
              <div className="mt-6 border-t border-zinc-200 pt-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#008A95]">고려한 이유</p>
              </div>
              <ul className="mt-3 space-y-2">
                {direction.reason.map((point) => <li key={point} className="text-sm leading-6 text-zinc-700">{point}</li>)}
              </ul>
              <div className="mt-5 border-t border-zinc-200 pt-4 lg:mt-0">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-400">우려</p>
              </div>
              <p className="mt-3 text-sm leading-6 text-zinc-600">{direction.concern}</p>
            </article>
          ))}
        </div>

        <div className="mt-20 border-y border-zinc-200 py-10">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#008A95]">
            Step 2 · 검증 범위 좁히기
          </p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h3 className="text-2xl font-semibold tracking-[-0.035em] text-zinc-950 sm:text-3xl">
                장바구니를 먼저 확인했습니다.
              </h3>
              <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-600">
                세 방향을 검토한 뒤, 주문 흐름 안에서 후보를 유지하고
                비교하는 방법을 먼저 확인하기 위해 장바구니를 우선 검증
                범위로 좁혔습니다. 일부 인터뷰에서도 장바구니를 후보를
                남겨두는 데 사용한 사례가 나타났습니다.
              </p>
            </div>
            <div className="border-t border-zinc-200 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <p className="text-sm font-semibold text-zinc-900">
                해결 위치를 확정한 것은 아닙니다.
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-zinc-600">
                <li>찜보다 더 나은지 비교 검증하지 않았습니다.</li>
                <li>별도 비교 기능보다 더 나은지 검증하지 않았습니다.</li>
                <li>장바구니가 비교 공간 역할까지 맡는 것이 적절한지 확인하지 못했습니다.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#008A95]">
            Step 3 · 장바구니 내부 구조 비교
          </p>
          <h3 className="mt-4 text-2xl font-semibold leading-9 tracking-[-0.035em] text-zinc-950 sm:text-3xl">
            여러 가게의 후보를 어떻게 보여줄지
            <br />
            두 가지 콘셉트로 나누었습니다.
          </h3>
          <p className="mt-5 text-base leading-7 text-zinc-600">
            장바구니를 우선 검증 범위로 좁힌 뒤, 여러 가게의 후보를 어떤
            정보 구조로 보여줄지 투뎁스와 아코디언으로 나누어 비교했습니다.
          </p>
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-2">
          {concepts.map((concept, index) => (
            <article key={concept.label} className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white">
              <div className={`p-7 text-white sm:p-9 ${index === 0 ? "bg-zinc-950" : "bg-[#2AC1BC]"}`}>
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/70">{concept.label}</p>
                <p className="mt-5 text-xl font-semibold leading-8 tracking-[-0.025em]">{concept.description}</p>
              </div>
              <div className="p-7 sm:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">Trade-off</p>
                <p className="mt-3 text-base leading-7 text-zinc-600">{concept.tradeoff}</p>
                <a href={concept.href} target="_blank" rel="noopener noreferrer" className={`mt-8 inline-flex rounded-full px-5 py-3 text-sm font-semibold text-white transition ${index === 0 ? "bg-zinc-950 hover:bg-zinc-800" : "bg-[#2AC1BC] hover:bg-[#20AAA6]"}`}>
                  {concept.buttonLabel} ↗
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
