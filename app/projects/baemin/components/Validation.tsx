const results = [
  { label: "전반적인 선호", value: "투뎁스 2명 · 아코디언 2명" },
  { label: "가게를 비교하기 편한 구조", value: "아코디언 4명" },
  { label: "별도 설명 없이 사용할 구조", value: "투뎁스 4명" },
];

export default function Validation() {
  return (
    <section className="bg-zinc-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <header className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">05 · Validation</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.045em] text-zinc-950 sm:text-4xl lg:text-5xl">
            비교할 때는 아코디언을,
            <br />
            설명 없이 쓸 때는 투뎁스를 선택했습니다.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">참여자 4명에게 두 구조를 보여주고 인식과 선호를 확인한 제한된 콘셉트 테스트입니다.</p>
        </header>

        <div className="mt-14 overflow-hidden rounded-[2rem] border border-zinc-200 bg-white">
          {results.map((result, index) => (
            <article key={result.label} className={`grid gap-3 p-7 sm:grid-cols-[1fr_1fr] sm:items-center sm:p-8 ${index > 0 ? "border-t border-zinc-200" : ""}`}>
              <p className="text-sm font-semibold leading-6 text-zinc-700">{result.label}</p>
              <p className="text-xl font-semibold tracking-[-0.025em] text-[#008A95] sm:text-right">{result.value}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-3xl bg-zinc-950 p-7 text-white sm:p-9">
          <p className="max-w-4xl text-lg leading-8 text-zinc-200">한 구조가 모든 기준에서 선택되지는 않았습니다. 여러 후보를 비교할 때는 아코디언을, 별도 설명 없이 사용할 때는 투뎁스를 선택했습니다.</p>
          <p className="mt-4 text-sm leading-6 text-zinc-400">참여자 4명의 결과이며 전체 사용자를 대표하지 않습니다.</p>
        </div>
      </div>
    </section>
  );
}
