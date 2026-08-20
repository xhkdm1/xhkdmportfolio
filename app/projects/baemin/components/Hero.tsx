import Image from "next/image";

const projectInfo = [
  ["Project", "배달의민족 장바구니 비교 경험"],
  ["Role", "UX Research · Concept Design · Prototyping"],
  ["Team", "4인 공동 수행"],
  ["Research", "Interview 4명 · Survey 23명"],
];

export default function Hero() {
  return (
    <section className="bg-[#F5FBFC] px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-36 lg:px-12 lg:pb-32 lg:pt-40">
      <div className="mx-auto w-full max-w-5xl">
        <div className="max-w-5xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-[#008A95]">
            01 · Overview
          </p>

          <h1 className="mt-6 text-4xl font-semibold leading-[1.08] tracking-[-0.055em] text-zinc-950 sm:text-6xl lg:text-7xl">
            다른 가게를 더 보고 싶을 때,
            <br />
            이전 선택을 남겨둘 수 있을까?
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-600 sm:text-xl sm:leading-9">
            주문 전 여러 가게를 비교하는 행동을 살펴보고,
            <br className="hidden sm:block" /> 이전 선택을 유지하는 두 가지
            장바구니 구조를 비교했습니다.
            <br className="hidden sm:block" /> 콘셉트 테스트에서 질문에 따라
            선택이 달라 하나의 구조로 확정하지 않았습니다.
          </p>
        </div>

        <dl className="mt-12 grid gap-x-10 gap-y-6 border-t border-[#B8DDE0] pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {projectInfo.map(([term, value]) => (
            <div key={term}>
              <dt className="text-xs font-medium uppercase tracking-[0.12em] text-[#008A95]">
                {term}
              </dt>
              <dd className="mt-2 text-sm font-medium leading-6 text-zinc-900">
                {value}
              </dd>
            </div>
          ))}
        </dl>

        <figure className="mt-14 overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_50px_rgba(0,138,149,0.06)]">
          <Image
            src="/images/baemin/01-project-overview.png"
            alt="배달의민족 장바구니 비교 경험 프로젝트 개요"
            width={1920}
            height={1080}
            priority
            draggable={false}
            className="h-auto w-full object-contain"
          />
        </figure>
      </div>
    </section>
  );
}
