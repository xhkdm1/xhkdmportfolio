import ImagePlaceholder from "./ImagePlaceholder";

const tags = ["Design System", "Figma Variables", "Component QA", "Assembly Test"];

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
        Clone & QA
      </h1>

      <div className="mt-8">
        <a
          href="https://www.figma.com/design/KeYc266vSKOLSVe7R5trLB/seed-design_cloning?node-id=5-9827&t=6Mvg1NONPsVG1r1Q-1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-5 py-3 text-sm font-medium text-zinc-800 transition hover:border-zinc-300 hover:bg-zinc-50"
        >
          View Full Design File
          <span>↗</span>
        </a>
      </div>
      
      <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-600 sm:text-xl">
        공개된 Seed Design System을 토큰부터 컴포넌트까지 재구성하고,
        다른 디자이너가 실제 화면을 조립할 수 있는지 Component Assembly
        Test로 확인했습니다.
      </p>
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
      <div className="mt-12">
        <ImagePlaceholder
          src="/images/seed-design/hero.webp"
          label="Foundation · Component · Prototype · QA"
        />
      </div>
    </section>
  );
}
