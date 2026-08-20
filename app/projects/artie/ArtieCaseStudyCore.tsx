import Image from "next/image";

const navItems = [
  ["01", "Overview", "overview"],
  ["02", "Evidence & Scope", "evidence"],
  ["03", "Product Flows", "flows"],
  ["04", "Changes & Collaboration", "changes"],
  ["05", "Decision & Limits", "limits"],
];

const projectInfo = [
  ["Role", "Team Lead · Product Design"],
  ["Team", "5인"],
  ["Duration", "2025.07.12 – 08.26"],
  ["Contribution", "서비스 기획 · IA · UX/UI · Prototype"],
  ["Tools", "Figma"],
  ["Product Scope", "Viewer · Creator · Space Operator · Admin"],
  ["Status", "PC Web Prototype"],
];

const serviceActors = [
  {
    role: "Viewer",
    koreanRole: "관람자",
    task: "전시를 찾는다",
    description: "관심 있는 전시를 발견하고 상세 정보와 리뷰를 확인합니다.",
    keywords: ["추천", "상세", "리뷰"],
  },
  {
    role: "Creator",
    koreanRole: "창작자",
    task: "전시를 준비한다",
    description: "필요한 공간을 찾고 자신의 전시 정보를 등록합니다.",
    keywords: ["공간 탐색", "예약", "전시 등록"],
  },
  {
    role: "Space Operator",
    koreanRole: "공간 운영자",
    task: "공간을 제공한다",
    description: "전시 공간을 등록하고 공간과 예약 상태를 관리합니다.",
    keywords: ["공간 등록", "운영", "예약 관리"],
  },
  {
    role: "Admin",
    koreanRole: "관리자",
    task: "서비스를 검토한다",
    description: "등록된 전시와 공간을 검토하고 승인 상태를 관리합니다.",
    keywords: ["Dashboard", "검토", "승인 관리"],
  },
];

type ScreenProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

function Screen({
  src,
  alt,
  width,
  height,
  className = "",
  imageClassName = "object-contain",
  priority,
}: ScreenProps) {
  return (
    <div
      className={`overflow-hidden border border-zinc-200 bg-white ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 92vw, 1120px"
        className={`h-full w-full ${imageClassName}`}
      />
    </div>
  );
}

function SectionHeading({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description?: string;
}) {
  return (
    <header className="max-w-[760px]">
      <p className="text-xs font-medium tracking-[0.14em] text-rose-600 uppercase">
        {number}
      </p>
      <h2 className="mt-3 text-3xl font-semibold leading-[1.2] tracking-[-0.045em] text-zinc-950 sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-[680px] text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
          {description}
        </p>
      ) : null}
    </header>
  );
}

function FlowLabel({
  step,
  eyebrow,
  title,
  description,
}: {
  step: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <p className="text-xs font-medium tabular-nums text-zinc-400">{step}</p>
      <p className="mt-2 text-xs font-medium tracking-[0.08em] text-zinc-500 uppercase">
        {eyebrow}
      </p>
      <h4 className="mt-2 text-lg font-semibold tracking-[-0.025em] text-zinc-950 sm:text-xl">
        {title}
      </h4>
      <p className="mt-3 text-sm leading-6 text-zinc-600">{description}</p>
    </div>
  );
}

function ServiceActors() {
  return (
    <section
      aria-labelledby="service-actors-title"
      className="mt-16 border-t border-zinc-300 pt-10 sm:mt-20"
    >
      <header className="max-w-[760px]">
        <p className="text-xs font-medium tracking-[0.12em] text-rose-600 uppercase">
          Service Actors
        </p>
        <h3
          id="service-actors-title"
          className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.035em] text-zinc-950 sm:text-3xl"
        >
          하나의 전시 서비스를 네 가지 역할의 흐름으로 나눴습니다.
        </h3>
        <p className="mt-4 max-w-[680px] text-base leading-7 text-zinc-600">
          서비스 안에서 서로 다른 과업을 수행하는 네 가지 역할로
          구분했습니다.
        </p>
      </header>

      <div className="mt-9 grid sm:grid-cols-2 lg:grid-cols-4">
        {serviceActors.map((actor) => (
          <article
            key={actor.role}
            className="flex min-h-full flex-col border-b border-zinc-200 py-7 sm:min-h-[19rem] sm:px-5 sm:[&:nth-child(odd)]:pl-0 sm:[&:nth-child(even)]:pr-0 lg:border-b-0 lg:border-r lg:px-6 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
          >
            <p className="text-sm font-medium text-zinc-500">
              {actor.role} · {actor.koreanRole}
            </p>
            <h4 className="mt-5 text-2xl font-semibold tracking-[-0.035em] text-zinc-950">
              {actor.task}
            </h4>
            <p className="mt-3 flex-1 text-sm leading-6 text-zinc-600">
              {actor.description}
            </p>
            <p className="mt-6 text-xs font-medium leading-5 text-zinc-400">
              {actor.keywords.join(" · ")}
            </p>
          </article>
        ))}
      </div>

      <div className="grid gap-6 border-b border-zinc-300 py-7 md:grid-cols-2 md:gap-10">
        <div>
          <p className="text-xs font-medium tracking-[0.1em] text-zinc-950 uppercase">
            Core Product Flow
          </p>
          <p className="mt-2 text-base font-medium text-zinc-950">
            Viewer · Creator
          </p>
        </div>
        <div>
          <p className="text-xs font-medium tracking-[0.1em] text-zinc-400 uppercase">
            Supporting Scope
          </p>
          <p className="mt-2 text-base font-medium text-zinc-600">
            Space Operator · Admin
          </p>
        </div>
      </div>

    </section>
  );
}

export default function ArtieCaseStudyCore() {
  return (
    <>
      <section
        id="overview"
        className="scroll-mt-[7.5rem] bg-[#fff8f6] px-5 pb-20 pt-28 sm:px-8 sm:pb-24 sm:pt-36 lg:px-12"
      >
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-14">
            <div>
              <p className="text-xs font-medium tracking-[0.15em] text-rose-600 uppercase">
                Artie · PC Exhibition Platform
              </p>
              <h1 className="mt-5 max-w-[760px] text-4xl font-semibold leading-[1.1] tracking-[-0.055em] text-zinc-950 sm:text-6xl lg:text-[4rem]">
                관람자의 전시 발견과 창작자의 공간 탐색을 연결했습니다.
              </h1>
              <p className="mt-6 max-w-[660px] text-lg leading-8 text-zinc-600 sm:text-xl sm:leading-9">
                취향 키워드를 바탕으로 전시를 추천하고, 전시를 준비하는
                사용자가 조건에 맞는 공간을 탐색하도록 설계한 PC 기반 전시
                플랫폼입니다.
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-x-5 gap-y-5 border-t border-rose-200 pt-6 lg:grid-cols-1 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              {projectInfo.map(([term, value]) => (
                <div key={term}>
                  <dt className="text-[0.6875rem] font-medium tracking-[0.1em] text-zinc-400 uppercase">
                    {term}
                  </dt>
                  <dd className="mt-1.5 text-sm font-medium leading-6 text-zinc-900">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <figure className="mt-12 sm:mt-16">
            <div className="mb-5 flex items-end justify-between gap-6 border-t border-zinc-300 pt-5">
              <figcaption className="max-w-[620px] text-base leading-7 text-zinc-800">
                일반 전시 탐색과 취향 기반 추천을 한 홈에서 확인하도록
                구성했습니다.
              </figcaption>
              <span className="hidden text-xs font-medium text-zinc-400 sm:block">
                Final Home · PC Web
              </span>
            </div>
            <Screen
              src="/images/artie/home-final.png"
              alt="일반 전시 탐색과 취향 기반 추천 영역을 함께 보여주는 Artie 홈 화면"
              width={1920}
              height={5587}
              priority
              className="h-[420px] rounded-xl sm:h-[560px] lg:h-[640px]"
              imageClassName="object-cover object-top"
            />
          </figure>

        </div>
      </section>

      <nav
        aria-label="Artie 프로젝트 섹션"
        className="sticky top-16 z-40 border-y border-zinc-200 bg-white/95 px-5 backdrop-blur sm:px-8 lg:px-12"
      >
        <ol className="mx-auto flex w-full max-w-6xl gap-6 overflow-x-auto py-3.5 [scrollbar-width:none] sm:gap-8">
          {navItems.map(([number, label, id]) => (
            <li key={id} className="shrink-0">
              <a
                href={`#${id}`}
                className="flex items-center gap-2 text-sm font-medium text-zinc-600 transition hover:text-zinc-950 focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-500"
              >
                <span className="text-[0.6875rem] text-zinc-400">{number}</span>
                {label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <section
        id="evidence"
        className="scroll-mt-[7.5rem] bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
      >
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeading
            number="02 Evidence & Scope"
            title="여러 사용자 문제를 하나의 제품에 담았지만, 각 문제의 근거와 검증 깊이는 같지 않았습니다."
            description="초기에는 전시 발견, 창작자의 공간 탐색, 공간 운영까지 넓은 문제를 다뤘습니다. 현재 원본을 다시 확인해 조사 기록이 있는 영역과 제품 가설, 운영을 위해 확장한 범위를 구분했습니다."
          />

          <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-2">
            <article className="flex h-full flex-col border-t-2 border-rose-500 bg-zinc-50 px-6 py-7 sm:px-8 sm:py-8">
              <p className="text-xs font-medium text-rose-600">
                [확정] Viewer · Creator
              </p>
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.025em] text-zinc-950 sm:text-2xl">
                조사 기록이 있는 영역
              </h3>
              <p className="mt-4 max-w-[480px] text-base leading-7 text-zinc-600">
                잠재 관람객과 창작자를 대상으로 전시 탐색과 공간 이용에 대한
                조사를 진행했습니다. 다만 현재 원본 응답과 정확한 수치를
                확보하지 못해 정량 수치는 포트폴리오에서 제외했습니다.
              </p>
            </article>

            <article className="flex h-full flex-col border-t-2 border-amber-400 bg-amber-50/70 px-6 py-7 sm:px-8 sm:py-8">
              <p className="text-xs font-medium text-amber-800">
                [기획/제안] Space Operator · Admin
              </p>
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.025em] text-amber-950 sm:text-2xl">
                제품 구조를 위해 확장한 영역
              </h3>
              <p className="mt-4 max-w-[480px] text-base leading-7 text-amber-950/70">
                공간 운영과 Admin 요구는 충분한 운영자 검증 결과라기보다
                전시와 공간을 서비스 안에서 연결하기 위해 설계한 운영 범위에
                가깝습니다.
              </p>
            </article>
          </div>

          <ServiceActors />

          <div className="mt-8 grid gap-3 border-y border-zinc-200 py-6 sm:grid-cols-[10rem_1fr] sm:gap-8">
            <p className="text-sm font-medium text-zinc-950">Scope reflection</p>
            <p className="max-w-[720px] text-base leading-7 text-zinc-600">
              관람자, 창작자, 공간 운영자 문제를 함께 다루면서 제품 범위가
              넓어졌습니다. 핵심 흐름을 먼저 검증하지 못한 점은 이 프로젝트의
              한계입니다.
            </p>
          </div>
        </div>
      </section>

      <section
        id="flows"
        className="scroll-mt-[7.5rem] bg-zinc-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
      >
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeading
            number="03 Product Flows"
            title="Viewer와 Creator의 핵심 과업을 서로 다른 제품 흐름으로 설계했습니다."
            description="팀장과 Product Designer로 참여해 서비스 구조, 주요 사용자 흐름과 UI를 설계했습니다."
          />

          <section className="mt-16 border-t border-zinc-300 pt-10 sm:mt-20">
            <header className="max-w-[720px]">
              <p className="text-xs font-medium tracking-[0.12em] text-rose-600 uppercase">
                Viewer Flow
              </p>
              <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.035em] text-zinc-950 sm:text-3xl">
                취향 키워드 확인에서 전시 상세 탐색까지
              </h3>
              <p className="mt-4 max-w-[640px] text-base leading-7 text-zinc-600">
                취향 키워드를 확인하고 추천 결과를 살펴본 뒤, 전시 상세
                정보로 이동하는 흐름입니다.
              </p>
            </header>

            <ol className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-zinc-500">
              {["01 취향 키워드", "02 추천 결과", "03 전시 상세"].map(
                (item, index) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="font-medium text-zinc-700">{item}</span>
                    {index < 2 ? <span aria-hidden="true">→</span> : null}
                  </li>
                ),
              )}
            </ol>

            <div className="mt-10 grid items-stretch gap-6 md:grid-cols-2">
              <article className="grid h-full gap-7 md:grid-rows-[12.5rem_20rem]">
                <FlowLabel
                  step="01"
                  eyebrow="Viewer · Taste Keywords"
                  title="추천의 출발점을 확인합니다."
                  description="현재 반영된 취향 키워드를 먼저 보여줍니다."
                />
                <Screen
                  src="/images/artie/viewer-taste.png"
                  alt="관람자가 자신의 취향 키워드를 확인하는 Artie 화면"
                  width={1580}
                  height={643}
                  className="h-[17rem] rounded-lg bg-zinc-50 md:h-full"
                  imageClassName="object-contain p-3 sm:p-4"
                />
              </article>

              <article className="grid h-full gap-7 md:grid-rows-[12.5rem_20rem]">
                <FlowLabel
                  step="02"
                  eyebrow="Viewer · Recommendation"
                  title="추천 결과를 탐색합니다."
                  description="취향 키워드와 전시 태그를 함께 보여줬습니다."
                />
                <Screen
                  src="/images/artie/viewer-results.png"
                  alt="관람자의 취향 키워드와 추천 전시를 보여주는 Artie 추천 화면"
                  width={1611}
                  height={916}
                  className="h-[17rem] rounded-lg bg-zinc-50 md:h-full"
                  imageClassName="object-contain p-3 sm:p-4"
                />
              </article>
            </div>

            <article className="mt-14">
              <div className="mb-7 max-w-[520px]">
                <FlowLabel
                  step="03"
                  eyebrow="Viewer · Exhibition Detail"
                  title="관람 판단에 필요한 정보를 확인합니다."
                  description="추천 결과를 전시 상세로 연결하고 일정, 장소, 전시 소개를 한 화면에 구성했습니다."
                />
              </div>
              <Screen
                src="/images/artie/viewer-detail.png"
                alt="관람자가 일정과 장소, 전시 정보를 확인하는 전시 상세 화면"
                width={1450}
                height={4096}
                className="h-[420px] rounded-lg sm:h-[560px]"
                imageClassName="object-cover object-top"
              />
            </article>
          </section>

          <section className="mt-20 border-t border-zinc-300 pt-10 sm:mt-24">
            <header className="max-w-[720px]">
              <p className="text-xs font-medium tracking-[0.12em] text-blue-600 uppercase">
                Creator Flow
              </p>
              <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.035em] text-zinc-950 sm:text-3xl">
                공간 조건 설정에서 예약 정보 검토까지
              </h3>
              <p className="mt-4 max-w-[640px] text-base leading-7 text-zinc-600">
                조건을 정하고 공간 후보를 비교한 뒤, 상세 정보와 예약 내용을
                차례로 확인하는 흐름입니다.
              </p>
            </header>

            <ol className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-zinc-500">
              {[
                "01 조건 설정",
                "02 후보 비교",
                "03 공간 상세",
                "04 예약 검토",
              ].map((item, index) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="font-medium text-zinc-700">{item}</span>
                  {index < 3 ? <span aria-hidden="true">→</span> : null}
                </li>
              ))}
            </ol>

            <div className="mt-10 grid items-start gap-7 lg:grid-cols-[20rem_1fr] lg:gap-10">
              <FlowLabel
                step="01"
                eyebrow="Creator · Conditions"
                title="비교 조건을 먼저 구조화합니다."
                description="기간, 지역과 공간 조건을 한 흐름에서 설정하도록 구성했습니다."
              />
              <Screen
                src="/images/artie/creator-conditions.png"
                alt="창작자가 대여 기간과 지역, 공간 조건을 설정하는 공간 검색 화면"
                width={1665}
                height={1279}
                className="h-[300px] rounded-lg bg-zinc-50 sm:h-[390px]"
                imageClassName="object-contain p-2 sm:p-3"
              />
            </div>

            <article className="mt-12">
              <div className="mb-7 max-w-[520px]">
                <FlowLabel
                  step="02"
                  eyebrow="Creator · Map & Results"
                  title="위치와 공간 후보를 동시에 비교합니다."
                  description="지도와 후보 카드를 함께 배치해 위치와 조건을 비교합니다."
                />
              </div>
              <Screen
                src="/images/artie/creator-results.png"
                alt="지도와 공간 후보 카드를 함께 보여주는 공간 검색 결과 화면"
                width={1770}
                height={1240}
                className="h-[360px] rounded-lg bg-zinc-50 sm:h-[520px] lg:h-[620px]"
                imageClassName="object-contain p-2 sm:p-3"
              />
            </article>

            <div className="mt-12 grid items-stretch gap-6 md:grid-cols-2">
              <article className="grid h-full gap-7 md:grid-rows-[12.5rem_29rem]">
                <FlowLabel
                  step="03"
                  eyebrow="Creator · Space Detail"
                  title="대관 조건과 시설 정보를 확인합니다."
                  description="후보 선택 뒤 상세 조건을 검토하는 단계입니다."
                />
                <Screen
                  src="/images/artie/creator-detail.png"
                  alt="창작자가 대관 조건과 공간 정보를 확인하는 공간 상세 화면"
                  width={1274}
                  height={4096}
                  className="h-[24rem] rounded-lg md:h-full"
                  imageClassName="object-cover object-top"
                />
              </article>

              <article className="grid h-full gap-7 md:grid-rows-[12.5rem_29rem]">
                <FlowLabel
                  step="04"
                  eyebrow="Creator · Reservation Review"
                  title="요청 전에 정보를 다시 확인합니다."
                  description="예약 요청 전에 일정과 공간 정보를 다시 확인하도록 구성했습니다."
                />
                <Screen
                  src="/images/artie/creator-review.png"
                  alt="창작자가 예약 요청 전 일정과 공간 정보를 다시 확인하는 화면"
                  width={1920}
                  height={2766}
                  className="h-[24rem] rounded-lg md:h-full"
                  imageClassName="object-cover object-top"
                />
              </article>
            </div>
          </section>

          <section className="mt-20 border-t border-zinc-300 pt-10 sm:mt-24">
            <div className="grid items-start gap-8 lg:grid-cols-[18rem_1fr] lg:gap-12">
              <header>
                <p className="text-xs font-medium tracking-[0.1em] text-zinc-400 uppercase">
                  Supporting Product Scope
                </p>
                <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.03em] text-zinc-950">
                  운영 역할은 제품 구조를 연결하는 기획 범위로 남겼습니다.
                </h3>
                <p className="mt-4 text-sm leading-6 text-zinc-600">
                  Viewer와 Creator의 핵심 흐름 뒤에 Space Operator와 Admin의
                  실제 UI를 연결했습니다.
                </p>
              </header>

              <div className="grid items-stretch gap-5 sm:grid-cols-2">
                <figure className="grid h-full grid-rows-[20rem_auto] gap-4 sm:grid-rows-[22rem_auto]">
                  <Screen
                    src="/images/artie/space-operator.png"
                    alt="공간 운영자가 등록 공간과 예약 상태를 관리하는 Artie 화면"
                    width={1700}
                    height={4096}
                    className="h-full rounded-lg"
                    imageClassName="object-cover object-top"
                  />
                  <figcaption className="text-sm leading-6 text-zinc-600">
                    <span className="block font-medium text-zinc-950">
                      Space Operator · 공간 운영자
                    </span>
                    <span className="mt-1 block">
                      [기획/제안] 공간을 등록하고 운영 상태를 관리합니다.
                    </span>
                  </figcaption>
                </figure>

                <figure className="grid h-full grid-rows-[20rem_auto] gap-4 sm:grid-rows-[22rem_auto]">
                  <Screen
                    src="/images/artie/admin.png"
                    alt="관리자가 서비스 현황과 등록 정보를 확인하는 Artie 관리자 화면"
                    width={1920}
                    height={1616}
                    className="h-full rounded-lg"
                    imageClassName="object-cover object-top"
                  />
                  <figcaption className="text-sm leading-6 text-zinc-600">
                    <span className="block font-medium text-zinc-950">
                      Admin · 관리자
                    </span>
                    <span className="mt-1 block">
                      [기획/제안] 전시와 공간을 검토하고 상태를 관리합니다.
                      화면의 수치는 Prototype dummy data입니다.
                    </span>
                  </figcaption>
                </figure>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section
        id="changes"
        className="scroll-mt-[7.5rem] bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
      >
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeading
            number="04 Changes & Collaboration"
            title="초기 홈을 제품 탐색과 취향 기반 추천이 함께 보이는 구조로 구체화했습니다."
            description="두 화면에서 확인되는 변화만 설명하며, 확인되지 않은 사용자 피드백이나 추천 성과를 원인으로 연결하지 않았습니다."
          />

          <div className="mt-12 grid items-stretch gap-5 lg:grid-cols-2">
            <figure className="grid h-full grid-rows-[auto_28rem] gap-5 border-t border-zinc-300 pt-5 sm:grid-rows-[auto_34rem]">
              <figcaption>
                <p className="text-xs font-medium tracking-[0.1em] text-zinc-400 uppercase">
                  Before
                </p>
                <p className="mt-2 text-lg font-medium text-zinc-950">
                  초기 홈
                </p>
              </figcaption>
              <Screen
                src="/images/artie/home-before.png"
                alt="콘텐츠 영역이 크게 구분된 Artie 초기 홈 화면"
                width={1920}
                height={5587}
                className="h-full rounded-lg"
                imageClassName="object-cover object-top"
              />
            </figure>

            <figure className="grid h-full grid-rows-[auto_28rem] gap-5 border-t border-rose-400 pt-5 sm:grid-rows-[auto_34rem]">
              <figcaption>
                <p className="text-xs font-medium tracking-[0.1em] text-rose-600 uppercase">
                  After
                </p>
                <p className="mt-2 text-lg font-medium text-zinc-950">
                  전시 탐색과 취향 기반 추천을 함께 보여주는 최종 홈
                </p>
              </figcaption>
              <Screen
                src="/images/artie/home-final.png"
                alt="전시 탐색과 취향 기반 추천 영역을 함께 보여주는 Artie 최종 홈 화면"
                width={1920}
                height={5587}
                className="h-full rounded-lg"
                imageClassName="object-cover object-top"
              />
            </figure>
          </div>

          <div className="mt-12 grid items-start gap-6 border-y border-zinc-300 py-8 lg:grid-cols-[19rem_1fr] lg:gap-12">
            <div>
              <p className="text-xs font-medium tracking-[0.1em] text-zinc-400 uppercase">
                Collaboration Learning
              </p>
              <h3 className="mt-3 text-2xl font-semibold leading-tight tracking-[-0.03em] text-zinc-950">
                디자인 완료 후 전달하는 순차 협업의 한계를 경험했습니다.
              </h3>
            </div>
            <p className="max-w-[620px] text-base leading-8 text-zinc-600">
              초기에는 디자인을 완성한 뒤 개발에 전달하는 방식으로
              진행했습니다. 화면 단위로 구현 가능성과 정책을 함께 확인하지
              못해 수정 비용이 커졌고, 이후에는 작은 단위로 설계와 개발을
              함께 검토해야 한다는 기준을 세웠습니다.
            </p>
          </div>
        </div>
      </section>

      <section
        id="limits"
        className="scroll-mt-[7.5rem] bg-[#fff8f6] px-5 py-20 sm:px-8 sm:py-24 lg:px-12"
      >
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeading
            number="05 Decision & Limits"
            title="제품 범위를 넓게 설계한 경험과 검증하지 못한 범위를 함께 남겼습니다."
          />

          <div className="mt-12 grid gap-8 border-y border-rose-200 py-8 md:grid-cols-3 md:gap-0 md:divide-x md:divide-rose-200">
            {[
              [
                "Implementation",
                "PC Web Prototype으로 설계했습니다. 실제 운영·출시 성과는 확인하지 않았습니다.",
              ],
              [
                "Validation",
                "추천 품질과 사용률, 예약·승인·결제 결과는 검증하지 않았습니다.",
              ],
              [
                "Next",
                "다시 진행한다면 Viewer 추천 경험과 Creator 공간 탐색을 각각 좁혀 먼저 검증하겠습니다.",
              ],
            ].map(([title, body], index) => (
              <article
                key={title}
                className={index === 0 ? "md:pr-8" : "md:px-8"}
              >
                <p className="text-xs font-medium tracking-[0.08em] text-rose-600 uppercase">
                  {title}
                </p>
                <p className="mt-3 text-base leading-7 text-zinc-700">{body}</p>
              </article>
            ))}
          </div>

          <p className="mt-14 max-w-[820px] border-t border-zinc-300 pt-8 text-2xl font-medium leading-[1.45] text-zinc-950 sm:text-3xl">
            여러 사용자와 운영 역할이 연결되는 PC 제품을 실제 UI까지
            설계했습니다. 동시에 넓은 범위와 근거의 차이, 순차 협업 방식의
            한계를 확인하고 다음 작업 기준을 구체화했습니다.
          </p>
        </div>
      </section>
    </>
  );
}
