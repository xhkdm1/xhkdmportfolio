import SectionHeading from "./SectionHeading";

const columns = [
  {
    title: "Observed",
    items: [
      "필요한 컴포넌트 종류를 빠르게 판단했습니다.",
      "Property와 Style의 개념을 비교적 쉽게 이해했습니다.",
      "텍스트 크기와 주요 상태 조정은 자연스럽게 진행됐습니다.",
    ],
  },
  {
    title: "Cause",
    items: [
      "Naming 규칙이 혼재되어 있어 탐색이 중단됐습니다.",
      "유사한 Variant와 Size가 많아 정확한 선택이 어려웠습니다.",
      "축약형 Variable 이름은 의미를 추론하기 어렵게 만들었습니다.",
    ],
  },
  {
    title: "Direction",
    items: [
      "Naming Convention을 의미 중심으로 정리하는 방향이 필요했습니다.",
      "Component Group과 Preview를 더 명확히 구분해야 했습니다.",
      "Chip Size와 Property를 단순화해 조립 과정의 friction을 줄여야 했습니다.",
    ],
    accent: true,
  },
];

export default function Findings() {
  return (
    <section
      className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28 lg:px-12 lg:py-32"
    >
      <SectionHeading
        index="06"
        eyebrow="Findings"
        title="구조는 이해되었지만, 조립 과정에서 정확한 선택을 찾는 지점은 여전히 어색했습니다."
        description="문제는 컴포넌트 자체보다 Naming, Grouping, Variant 구조에서 발생했다는 사실을 확인했습니다."
      />
      <div className="grid gap-5 md:grid-cols-3">
        {columns.map((column) => (
          <article
            key={column.title}
            className={`rounded-3xl border p-6 sm:p-8 ${
              column.accent
                ? "border-[#FF6F0F] bg-[#FFF4EC]"
                : "border-zinc-200 bg-white"
            }`}
          >
            <h3 className="text-xl font-semibold">{column.title}</h3>
            <ul className="mt-6 space-y-3 text-sm leading-6 text-zinc-600">
              {column.items.map((item) => (
                <li key={item} className="rounded-2xl bg-white/80 p-4">
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
