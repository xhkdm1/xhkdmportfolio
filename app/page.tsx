const featuredWorks = [
  {
    title: "WithBuddy",
    description: "반복되는 온보딩 응대를 자동화한 AI 온보딩 SaaS 서비스",
    meta: "B2B SaaS · AI · Product Design · 2026",
    href: "/work/withbuddy",
  },
  {
    title: "Artie",
    description: "전시 탐색 경험을 개인화한 AI 전시 추천 플랫폼",
    meta: "AI Recommendation · UX Research · 2025",
    href: "/work/artie",
  },
];

const otherWorks = [
  {
    title: "Tutti",
    description: "자격증 준비 과정을 함께 지속하게 만드는 커뮤니티 서비스",
    meta: "Community · UX/UI · 2024",
    href: "/work/tutti",
  },
  {
    title: "I Got This",
    description: "가짜 정보를 판별하고 신뢰도를 확인하는 정보 검증 서비스",
    meta: "Fact Check · AI Concept · 2024",
    href: "/work/i-got-this",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white px-6 py-20 text-zinc-950">
      <div className="mx-auto max-w-5xl">
        <section className="mb-16">
          <p className="mb-5 text-sm text-zinc-500">Product Designer</p>

          <h1 className="mb-6 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl">
            박혜진
          </h1>

          <p className="max-w-2xl text-xl leading-relaxed text-zinc-600">
            제품의 문제를 발견하고, 사용자 경험과 운영 구조를 함께
            설계합니다.
          </p>

          <div className="mt-10 rounded-3xl border border-zinc-200 p-6">
            <div className="grid gap-6 md:grid-cols-2">

              <div>
                <p className="mb-2 text-sm text-zinc-500">Current</p>
                <p className="text-zinc-700">
                  UX / Product Designer
                </p>
                <p className="text-zinc-700">
                  Sangmyung University
                </p>
              </div>

              <div>
                <p className="mb-2 text-sm text-zinc-500">Focus</p>
                <p className="text-zinc-700">
                  Product Thinking
                </p>
                <p className="text-zinc-700">
                  AI Product
                </p>
                <p className="text-zinc-700">
                  B2B SaaS
                </p>
              </div>

            </div>

            <a
              href="/about"
              className="mt-8 inline-block text-sm font-medium text-zinc-900"
            >
              More About Me →
            </a>
          </div>
        </section>

        <section className="mb-20">
          <div className="mb-8">
            <p className="mb-2 text-sm text-zinc-500">Featured Work</p>
            <h2 className="text-3xl font-semibold tracking-tight">
              제품 관점으로 설계한 대표 프로젝트
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {featuredWorks.map((work) => (
              <a
                key={work.title}
                href={work.href}
                className="group rounded-[1.5rem] border border-zinc-200 bg-white p-3 transition hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg"
              >
                <div className="mb-4 flex aspect-[16/10] items-center justify-center rounded-[1.1rem] bg-zinc-100 text-sm text-zinc-400">
                  Thumbnail
                </div>

                <div className="px-2 pb-3">
                  <p className="mb-3 text-xs text-zinc-500">{work.meta}</p>

                  <h3 className="mb-2 text-xl font-semibold tracking-tight">
                    {work.title}
                  </h3>

                  <p className="mb-5 text-sm leading-relaxed text-zinc-600">
                    {work.description}
                  </p>

                  <p className="text-sm font-medium text-zinc-900">
                    View Case Study →
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section>
          <div className="mb-6">
            <p className="mb-2 text-sm text-zinc-500">Other Projects</p>
            <h2 className="text-2xl font-semibold tracking-tight">
              실험과 학습이 담긴 프로젝트
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {otherWorks.map((work) => (
              <a
                key={work.title}
                href={work.href}
                className="rounded-2xl border border-zinc-200 p-5 transition hover:border-zinc-300 hover:bg-zinc-50"
              >
                <p className="mb-3 text-xs text-zinc-500">{work.meta}</p>

                <h3 className="mb-2 text-lg font-semibold">{work.title}</h3>

                <p className="text-sm leading-relaxed text-zinc-600">
                  {work.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className="mt-24 border-t border-zinc-200 pt-16">
          <div className="grid gap-12 md:grid-cols-3">

            <div>
              <p className="mb-3 text-sm text-zinc-500">About</p>
              <h3 className="mb-4 text-xl font-semibold">제품을 설계하는 디자이너</h3>
              <p className="text-sm leading-relaxed text-zinc-600">
                사용자 경험뿐 아니라 운영 구조와 제품 성장까지 함께 고민합니다.
              </p>
            </div>

            <div>
              <p className="mb-3 text-sm text-zinc-500">Resume</p>
              <p className="text-sm leading-relaxed text-zinc-600">
                UX/Product Designer<br />
                Sangmyung University<br />
                Product Design · UX Research · Strategy
              </p>
            </div>

            <div>
              <p className="mb-3 text-sm text-zinc-500">Contact</p>
              <p className="text-sm leading-relaxed text-zinc-600">
                xhkdm1116@gmail.com
                <br />
                GitHub
                <br />
                LinkedIn
              </p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}