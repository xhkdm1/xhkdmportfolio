const info = [
  ["Team", "4 Product Designers"],
  ["Scope", "Foundation · Component · Prototype · QA"],
  ["Tools", "Figma"],
  ["Outcome", "Component Assembly Test"],
];

const contribution = [
  "Primitive → Semantic 구조로 토큰 의미를 재정의했습니다.",
  "Auto Layout·Slot·Variant·Property를 실제 조립 흐름에 맞게 정리했습니다.",
  "QA 질문을 ‘시스템을 얼마나 잘 복제했는가’에서 ‘실제로 조립 가능한가’로 바꿨습니다.",
  "30분 Assembly Test와 핵심 평가 지표를 설계해 사용성을 확인했습니다.",
  "탐색·네이밍·조립 과정에서 발견된 문제를 구조 개선 방향으로 연결했습니다.",
];

export default function Overview() {
  return (
    <section className="border-y border-zinc-200 bg-zinc-50">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28 lg:px-12">
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
              타깃을 복제에서 검증으로 넘겨,
              <br />
              실제 조립 가능성을 확인했습니다.
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
