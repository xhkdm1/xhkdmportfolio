const info = [
  ["Team", "4 Product Designers"],
  ["Scope", "Foundation · Component · Prototype · QA"],
  ["Tools", "Figma"],
  ["Outcome", "Component Assembly Test"],
];

const contribution = [
  "Primitive → Semantic 순서의 Foundation Variable 구조 설계",
  "Auto Layout·Slot·Variant·Property 반영",
  "QA 질문을 ‘실제로 조립 가능한가’로 재정의",
  "30분 Assembly Test와 9개 평가 지표 설계",
  "내부·외부 QA 결과를 종합해 개선 방향 도출",
];

export default function Overview() {
  return (
    <section className="border-y border-zinc-200 bg-zinc-50">
      <div className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 md:py-28">
        <div className="grid gap-4 md:grid-cols-4">
          {info.map(([label, value]) => (
            <article
              key={label}
              className="rounded-3xl border border-zinc-200 bg-white p-6"
            >
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-zinc-500">
                {label}
              </p>
              <p className="mt-3 text-sm font-medium leading-6 text-zinc-800">
                {value}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-medium text-[#E85D00]">
              My Contribution
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              재구성에서 끝내지 않고,
              <br />
              사용 가능성까지 검증했습니다.
            </h2>
          </div>
          <ul className="space-y-3">
            {contribution.map((item) => (
              <li
                key={item}
                className="rounded-2xl bg-white p-4 text-base leading-7 text-zinc-600 sm:p-5"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
