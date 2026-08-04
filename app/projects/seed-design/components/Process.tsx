import SectionHeading from "./SectionHeading";

const steps = [
  ["01", "가이드라인 숙지", "Anatomy → Property → Guideline → Spec 순서로 문서를 읽으며 상태별 수치를 파악했습니다."],
  ["02", "Foundation 등록", "Primitive color를 Variable로 등록하고 Semantic color에 연결했습니다."],
  ["03", "Component 제작", "Auto Layout과 Slot 구조를 고려해 공개된 스펙을 재현했습니다."],
  ["04", "Variant 구성", "Size와 State 등 Property를 Component Set으로 묶었습니다."],
];

export default function Process() {
  return (
    <section
      id="process"
      className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 md:py-28 lg:py-32"
    >
      <SectionHeading
        index="01"
        eyebrow="Process"
        title="문서를 읽는 순서부터 시스템을 다시 구축했습니다."
        description="Foundation → Component → Prototype → QA의 흐름으로 진행했습니다."
      />
      <div className="grid gap-5 md:grid-cols-2">
        {steps.map(([number, title, body]) => (
          <article
            key={number}
            className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8"
          >
            <p className="text-sm font-medium text-[#E85D00]">{number}</p>
            <h3 className="mt-6 text-xl font-semibold sm:text-2xl">{title}</h3>
            <p className="mt-4 text-base leading-7 text-zinc-600">{body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
