import SectionHeading from "./SectionHeading";
import ImagePlaceholder from "./ImagePlaceholder";

const items = [
  {
    title: "Foundation",
    body: "Primitive token을 먼저 등록한 뒤 Semantic token으로 매핑해 의미 기반 색상 구조를 만들었습니다.",
    image: "/images/seed-design/foundation-token.webp",
  },
  {
    title: "Component",
    body: "Anatomy, Property, Guideline, Spec을 기준으로 Auto Layout과 Slot을 반영했습니다.",
    image: "/images/seed-design/component-library.webp",
  },
  {
    title: "Variants",
    body: "Size와 State를 Property로 정리해 화면 조립 시 상태 변경이 가능하도록 구성했습니다.",
    image: "/images/seed-design/variant-property.webp",
  },
];

export default function SystemBuild() {
  return (
    <section id="system" className="bg-zinc-50">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28 lg:py-32">
        <SectionHeading
          index="02"
          eyebrow="Rebuilding the System"
          title="토큰에서 화면까지, 공개된 시스템의 구조를 다시 만들었습니다."
          description="단순한 외형 복제가 아니라 문서에 담긴 설계 의도와 구성 원리를 이해하는 데 초점을 맞췄습니다."
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8"
            >
              <h3 className="text-xl font-semibold sm:text-2xl">{item.title}</h3>
              <p className="mt-4 text-base leading-7 text-zinc-600">
                {item.body}
              </p>
              <div className="mt-7">
                <ImagePlaceholder
                  src={item.image}
                  label={`${item.title} 화면`}
                  ratio="landscape"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
