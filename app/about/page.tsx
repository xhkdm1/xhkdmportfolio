const stats = [
  { value: "10+", label: "Projects" },
  { value: "3", label: "Hackathons" },
  { value: "4", label: "Awards" },
  { value: "5+", label: "Leadership" },
];

const journey = [
  {
    period: "2024.09.01 - 2024.12.12",
    title: "졸업 프로젝트",
    role: "Planning · Product Design",
    description: "웹 서비스의 핵심 흐름과 화면 구조를 기획하고 디자인했습니다.",
  },
  {
    period: "2024.11.02 - 2025.02.28",
    title: "우먼센스 식품 대기업 프로젝트",
    role: "Planning · Marketing",
    description: "기업 연계 프로젝트에서 기획과 마케팅을 담당했습니다.",
    badge: "대상 수상",
  },
  {
    period: "2025.01.01 - 2025.12.31",
    title: "멋쟁이사자처럼 13기",
    role: "Planning · Design",
    description: "아이디어톤, 해커톤, 서비스 기획 프로젝트를 경험했습니다.",
  },
  {
    period: "2025.06.20 - 2025.07.12",
    title: "멋쟁이사자처럼 교내 해커톤",
    role: "Planning · UX/UI Design",
    description: "문제 정의부터 화면 설계까지 서비스 제작 과정에 참여했습니다.",
  },
  {
    period: "2025.08.25 - 2025.08.26",
    title: "멋쟁이사자처럼 중앙 해커톤",
    role: "UX/UI Design",
    description: "짧은 기간 안에 핵심 사용자 흐름과 UI를 설계했습니다.",
  },
  {
    period: "2025.09.29 - 2025.11.21",
    title: "미래내일 프로젝트",
    role: "UX Improvement Design",
    description: "기존 서비스의 사용성을 개선하는 방향으로 디자인했습니다.",
  },
  {
    period: "2025.12.29 - 2026.07.16",
    title: "KDT DeepDive",
    role: "Product Design",
    description: "실무형 프로젝트를 통해 제품 설계와 협업 경험을 쌓고 있습니다.",
    badge: "Round 1 · Round 2 Best MVP",
  },
];

const experiences = [
  {
    title: "WithBuddy",
    role: "Product Designer",
    meta: "AI Onboarding SaaS · B2B",
  },
  {
    title: "Artie",
    role: "UX/UI Designer",
    meta: "AI Exhibition Recommendation Platform",
  },
  {
    title: "Tutti",
    role: "UX/UI Designer",
    meta: "Certificate Community Service",
  },
  {
    title: "I Got This",
    role: "Service Planner",
    meta: "AI Fact-checking Concept",
  },
];

const awards = [
  "우먼센스 식품 대기업 프로젝트 대상",
  "KDT 딥다이브 Round 1 Best MVP",
  "KDT 딥다이브 Round 2 Best MVP",
];

const certifications = ["서비스경험디자인기사", "TOEIC 765", "TOEFL AL"];

const skills = [
  "Figma",
  "UX Research",
  "Product Thinking",
  "Wireframing",
  "Prototyping",
  "Design System",
  "Next.js",
  "GitHub",
  "Claude",
  "Codex",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-24 text-zinc-950">
      <div className="mx-auto max-w-5xl">
        <section className="mb-20">
          <p className="mb-4 text-sm text-zinc-500">About</p>
          <h1 className="mb-6 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
            제품의 문제와 운영 구조를 함께 고민하는 디자이너입니다.
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-zinc-600">
            사용자의 경험을 보기 좋게 정리하는 것을 넘어, 서비스가 실제로
            운영되고 성장할 수 있는 구조를 함께 설계하는 Product Designer를
            목표로 합니다.
          </p>
        </section>

        <section className="mb-20 grid gap-4 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="rounded-3xl border border-zinc-200 p-6">
              <p className="mb-2 text-3xl font-semibold">{stat.value}</p>
              <p className="text-sm text-zinc-500">{stat.label}</p>
            </div>
          ))}
        </section>

        <section className="mb-20">
          <p className="mb-8 text-sm text-zinc-500">Journey</p>

          <div>
            {journey.map((item, index) => (
              <div key={item.title} className="flex gap-10">
                <div className="flex flex-col items-center">
                  <div className="mt-1 h-4 w-4 rounded-full border-4 border-zinc-950 bg-white" />
                  {index !== journey.length - 1 && (
                    <div className="w-px flex-1 bg-zinc-200" />
                  )}
                </div>

                <div className="pb-18">
                  <p className="mb-2 text-sm text-zinc-500">{item.period}</p>
                  <h2 className="mb-2 text-xl font-semibold">{item.title}</h2>
                  <p className="mb-2 text-sm text-zinc-700">{item.role}</p>
                  <p className="max-w-2xl text-sm leading-relaxed text-zinc-600">
                    {item.description}
                  </p>

                  {item.badge && (
                    <span className="mt-4 inline-flex rounded-full border border-zinc-200 px-3 py-1 text-xs font-medium text-zinc-700">
                      {item.badge}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20">
          <p className="mb-6 text-sm text-zinc-500">Experience</p>
          <div className="grid gap-4 md:grid-cols-2">
            {experiences.map((item) => (
              <div key={item.title} className="rounded-3xl border border-zinc-200 p-6">
                <p className="mb-2 text-sm text-zinc-500">{item.role}</p>
                <h2 className="mb-3 text-xl font-semibold">{item.title}</h2>
                <p className="text-sm text-zinc-600">{item.meta}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20 grid gap-4 md:grid-cols-2">
          <div className="rounded-3xl border border-zinc-200 p-6">
            <p className="mb-6 text-sm text-zinc-500">Awards</p>
            <div className="space-y-3">
              {awards.map((item) => (
                <p key={item} className="text-sm text-zinc-700">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-200 p-6">
            <p className="mb-6 text-sm text-zinc-500">Certifications</p>
            <div className="space-y-3">
              {certifications.map((item) => (
                <p key={item} className="text-sm text-zinc-700">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-20">
          <p className="mb-6 text-sm text-zinc-500">Skills</p>
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-zinc-200 px-4 py-2 text-sm text-zinc-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="border-t border-zinc-200 pt-12">
          <p className="mb-4 text-sm text-zinc-500">Education</p>
          <h2 className="mb-2 text-xl font-semibold">Sangmyung University</h2>
          <p className="text-sm leading-relaxed text-zinc-600">
            휴먼AI전공 · 지적재산권전공 복수전공
            <br />
            GPA 3.93 / 4.5
          </p>
        </section>
      </div>
    </main>
  );
}