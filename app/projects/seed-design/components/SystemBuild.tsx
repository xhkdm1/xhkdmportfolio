import ImageLightbox from "../../../components/ImageLightBox";
import SectionHeading from "./SectionHeading";

const items = [
  {
    title: "Foundation",
    body: "Primitive token을 먼저 등록한 뒤 Semantic token으로 매핑해 의미 기반 색상 구조를 만들었습니다.",
  },
  {
    title: "Component",
    body: "Anatomy, Property, Guideline, Spec을 기준으로 Auto Layout과 Slot을 반영했습니다.",
  },
  {
    title: "Variants",
    body: "Size와 State를 Property로 정리해 화면 조립 시 상태 변경이 가능하도록 구성했습니다.",
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
        <div className="grid items-stretch gap-5 md:grid-cols-2">
          <ImageLightbox
            src="/images/seed-design/button-variants.png"
            alt="상태와 스타일별로 재구성한 Action Button Variant"
            label="Variant · State"
            caption="상태와 스타일을 조합할 수 있도록 Action Button Variant를 구성했습니다."
            aspectClassName="aspect-[5/6]"
            sizes="(max-width: 768px) 100vw, 576px"
          />
          <ImageLightbox
            src="/images/seed-design/chip-component-set.png"
            alt="크기와 상태별로 재구성한 Chip Component Set"
            label="Component Set · Property"
            caption="다양한 크기와 상태를 하나의 Component Set 안에서 확인하도록 정리했습니다."
            aspectClassName="aspect-[5/6]"
            sizes="(max-width: 768px) 100vw, 576px"
          />
        </div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {items.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-zinc-200 bg-white p-5 sm:p-6"
            >
              <h3 className="text-lg font-semibold sm:text-xl">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-600 sm:text-base sm:leading-7">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
