import Image from "next/image";

const projectInfo = [
  ["Project", "배달의민족 장바구니 비교 경험 개선"],
  ["Type", "UX Research · Concept Test"],
  ["Research", "Interview 4명 · Survey 23명"],
  ["Output", "투뎁스 · 아코디언 프로토타입"],
];

const metrics = [
  {
    value: "4명",
    label: "정성 인터뷰",
  },
  {
    value: "23명",
    label: "정량 설문",
  },
  {
    value: "280건",
    label: "앱스토어 리뷰 분석",
  },
  {
    value: "2안",
    label: "콘셉트 프로토타입",
  },
];

export default function Hero() {
  return (
    <section className="bg-[#F5FBFC] px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-36 lg:px-12 lg:pb-32 lg:pt-40">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#008A95]">
            UX Research · Product Thinking
          </p>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-[-0.055em] text-zinc-950 sm:text-6xl lg:text-7xl">
            결제 직전까지 반복되는
            <br />
            장바구니 비교 경험을 탐색했습니다.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-600 sm:text-xl sm:leading-9">
            단일 매장 중심의 장바구니 구조가 여러 가게를 비교하려는
            사용자의 탐색과 의사결정을 어떻게 방해하는지 확인하고,
            투뎁스와 아코디언 두 가지 비교 UI를 프로토타입으로 검증한
            UX 리서치 프로젝트입니다.
          </p>
        </div>

        <dl className="mt-12 grid gap-x-10 gap-y-6 border-t border-[#B8DDE0] pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {projectInfo.map(([term, value]) => (
            <div key={term}>
              <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-[#008A95]">
                {term}
              </dt>
              <dd className="mt-2 text-sm font-medium leading-6 text-zinc-900">
                {value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <article
              key={metric.label}
              className="rounded-3xl border border-[#CCE5E7] bg-white p-6 shadow-[0_20px_50px_rgba(0,138,149,0.06)]"
            >
              <p className="text-3xl font-semibold tracking-[-0.04em] text-[#008A95]">
                {metric.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-500">
                {metric.label}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-14 flex aspect-[16/8] w-full items-center justify-center overflow-hidden rounded-[2rem] border border-dashed border-[#9FCFD3] bg-white">
          <p className="px-6 text-center text-sm font-medium leading-6 text-zinc-500">
            배민 장바구니 기존 화면과 개선 콘셉트 화면을 조합한
            <br />
            <Image
              src="/images/baemin/01-project-overview.png"
              alt="이미지 설명"
              width={1920}
              height={1080}
              draggable={false}
              className="mt-8 h-auto w-full rounded-3xl border border-zinc-200 bg-zinc-50 object-contain"
            />
          </p>
        </div>
      </div>
    </section>
  );
}
