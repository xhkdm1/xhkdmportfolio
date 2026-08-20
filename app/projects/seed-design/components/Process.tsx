import SectionHeading from "./SectionHeading";

const steps = [
  ["01", "가이드라인 이해", "Anatomy → Property → Guideline → Spec 경로를 따라 구성 원리를 파악했습니다."],
  ["02", "Foundation 정리", "Primitive 색상과 폰트 값을 구조적으로 연결해 Semantic 계열을 다시 정리했습니다."],
  ["03", "Component 재구성", "Auto Layout과 Slot 구조를 반영해 공개 스펙을 실제 컴포넌트로 재현했습니다."],
  ["04", "Assembly Test", "시스템이 다른 디자이너에게 실제로 조립 가능한지 확인하는 단계로 QA를 확장했습니다."],
];

export default function Process() {
  return (
    <section
      id="process"
      className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28 lg:px-12 lg:py-32"
    >
      <SectionHeading
        index="01"
        eyebrow="Process"
        title="문서를 이해하는 순서부터, 실제 구조로 다시 연결했습니다."
        description="Foundation → Component → Variant → QA 흐름으로 재구성하며, 명명과 조립 가능성을 같이 검토했습니다."
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
