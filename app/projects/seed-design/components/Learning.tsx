import SectionHeading from "./SectionHeading";

const learnings = [
  "컴포넌트의 외형보다 Anatomy와 Property가 설계 의도를 설명한다는 점을 체감했습니다.",
  "상세 스펙이 없는 영역은 실제 화면 구조와 구현 사례를 비교해 팀 기준을 세웠습니다.",
  "Auto Layout, Variable, Variant, Property를 실제 구조에 적용했습니다.",
  "문서가 여러 직군이 공통으로 이해하기 위한 구조라는 점을 이해했습니다.",
  "다음에는 Dark Mode Variable과 최소 원본 중심의 구성도 시도하고 싶습니다.",
];

export default function Learning() {
  return (
    <section className="bg-zinc-50">
      <div className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 md:py-28 lg:py-32">
        <SectionHeading
          index="07"
          eyebrow="Learning"
          title="컴포넌트를 만드는 기술보다, 같은 기준으로 협업하는 구조를 이해했습니다."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {learnings.map((item, index) => (
            <article
              key={item}
              className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8"
            >
              <p className="text-sm font-medium text-[#E85D00]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-6 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
                {item}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
          <article className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8">
            <p className="text-sm text-zinc-500">Before</p>
            <p className="mt-5 text-xl font-semibold leading-8 sm:text-2xl">
              디자인 시스템은 일관된 화면을 빠르게 만들기 위한 컴포넌트
              모음이라고 생각했습니다.
            </p>
          </article>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#FF6F0F] font-semibold text-white">
            →
          </div>
          <article className="rounded-3xl bg-zinc-900 p-6 text-white sm:p-8">
            <p className="text-sm text-white/50">After</p>
            <p className="mt-5 text-xl font-semibold leading-8 sm:text-2xl">
              디자인 시스템은 여러 직군이 같은 기준과 언어로 제품을 만들도록
              돕는 협업 체계임을 이해했습니다.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
