import ImageLightbox from "../../../components/ImageLightBox";

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
        <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-medium text-[#E85D00]">
              My Contribution
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">
              재구성에서 끝내지 않고,
              <br />
              실제 조립 가능성까지 확인했습니다.
            </h2>
          </div>
          <ul className="border-t border-zinc-200">
            {contribution.map((item) => (
              <li
                key={item}
                className="border-b border-zinc-200 py-4 text-base leading-7 text-zinc-600"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10">
          <ImageLightbox
            src="/images/seed-design/prototype-overview.webp"
            alt="재구성한 컴포넌트로 조립한 당근 서비스 화면 모음"
            label="Prototype Overview"
            caption="재구성한 컴포넌트를 실제 서비스 화면 조립까지 연결했습니다."
            aspectClassName="aspect-[3.16/1]"
            sizes="(max-width: 768px) 100vw, 1152px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
