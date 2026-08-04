import SectionHeading from "./SectionHeading";

const columns = [
  {
    title: "잘 작동한 부분",
    items: [
      "필요한 컴포넌트 종류를 빠르게 판단함",
      "Property와 Style 구분을 이해함",
      "텍스트 크기와 주요 상태를 쉽게 변경함",
    ],
  },
  {
    title: "문제 원인",
    items: [
      "Naming 규칙 혼재",
      "유사한 Chip Variant와 Size 과다",
      "축약된 Variable 이름의 낮은 추론 가능성",
    ],
  },
  {
    title: "개선 방향",
    items: [
      "Naming Convention 재정립",
      "Component Group과 Preview 개선",
      "Chip Size 및 Property 단순화",
      "Text Property 연결",
    ],
    accent: true,
  },
];

export default function Findings() {
  return (
    <section
      className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 md:py-28 lg:py-32"
    >
      <SectionHeading
        index="06"
        eyebrow="Findings & Improvements"
        title="역할은 쉽게 이해했지만, 유사한 후보 중 정확한 컴포넌트를 찾는 과정에서 막힘이 발생했습니다."
        description="문제는 컴포넌트의 존재보다 Naming, Grouping, Variant 구조에서 발생했습니다."
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
