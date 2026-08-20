const FIGMA_URL =
  "https://www.figma.com/design/KeYc266vSKOLSVe7R5trLB/seed-design_cloning?node-id=256-4558&t=9sD23mhvTpmQIBIO-11";

const tags = ["Design System", "Figma Variables", "Component QA"];

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto w-full max-w-5xl px-5 pb-20 pt-28 sm:px-8 md:pb-28 md:pt-36"
    >
      <p className="text-sm font-medium text-[#E85D00]">
        Design System Practice · 2026
      </p>
      <h1 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
        Seed Design System
        <br />
        Rebuild & QA
      </h1>

      <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-600 sm:text-xl">
        공개된 Seed Design System을 Primitive와 Semantic 구조로 재구성한 뒤,
        다른 디자이너가 실제 화면을 조립할 수 있는지를 Component Assembly
        Test로 검증했습니다.
      </p>
      <a
        href={FIGMA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-800"
      >
        Figma 작업물 보기 ↗
      </a>
      <div className="mt-8 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-10 space-y-3 rounded-[2rem] border border-zinc-200 bg-zinc-50 p-3 sm:space-y-4 sm:p-4">
        <dl className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {[
            ["Role", "Design System · QA"],
            ["Team", "4인"],
            ["Duration", "2026"],
            ["Tools", "Figma"],
          ].map(([label, value]) => (
            <div
              key={label}
              className="flex min-h-[112px] min-w-0 flex-col justify-between rounded-2xl border border-zinc-200 bg-white p-5 sm:min-h-[124px] sm:p-6"
            >
              <dt className="text-xs font-medium uppercase tracking-[0.12em] text-zinc-400">
                {label}
              </dt>
              <dd className="mt-5 break-words text-base font-semibold leading-6 text-zinc-900 sm:text-lg">
                {value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-zinc-400">
            Contribution
          </p>
          <p className="mt-5 text-xl font-semibold leading-7 text-zinc-900">
            Foundation Token · Component · Component Assembly Test
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-600">
            Foundation Token과 Component 제작에 참여하고, QA 질문을 재정의해
            Component Assembly Test를 설계·진행했습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
