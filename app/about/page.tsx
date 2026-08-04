const stats = [
  { value: "10+", label: "Projects" },
  { value: "3", label: "Hackathons" },
  { value: "2", label: "Awards" },
  { value: "4+", label: "Team Leadership" },
];

const strengths = [
  {
    title: "문제와 운영 구조를 함께 봅니다.",
    description:
      "사용자 화면만 설계하는 데 그치지 않고, 서비스가 실제로 운영되는 방식과 팀의 업무 흐름까지 함께 고려합니다.",
  },
  {
    title: "근거를 설계 결정으로 연결합니다.",
    description:
      "리서치 결과를 단순히 나열하기보다, 관찰한 행동이 어떤 판단과 화면 구조로 이어졌는지 설명하려고 합니다.",
  },
  {
    title: "팀의 기준을 정리하고 공유합니다.",
    description:
      "프로젝트 리딩, 디자인 시스템, QA, 문서화 경험을 바탕으로 팀이 같은 기준으로 협업할 수 있는 구조를 만듭니다.",
  },
];

const journey = [
  {
    period: "2024.09.01 – 2024.12.12",
    title: "졸업 프로젝트",
    role: "Planning · UX/UI Design",
    description:
      "웹 서비스의 핵심 사용자 흐름과 정보 구조를 기획하고 주요 화면을 설계했습니다.",
  },
  {
    period: "2024.11.02 – 2025.02.28",
    title: "우먼센스 식품 대기업 프로젝트",
    role: "Planning · Marketing",
    description:
      "기업 연계 프로젝트에서 시장과 고객을 분석하고 기획 및 마케팅 제안을 제작했습니다.",
    badge: "대상 · ㈜서울문화사",
  },
  {
    period: "2025.01.01 – 2025.12.31",
    title: "멋쟁이사자처럼 13기",
    role: "Planning · UX/UI Design",
    description:
      "아이디어톤과 해커톤에 참여하며 서비스 기획, 사용자 흐름 설계, 프로토타입 제작을 경험했습니다.",
  },
  {
    period: "2025.03.20 – 2025.12.31",
    title: "발틱 음악 동아리",
    role: "Manager",
    description:
      "공연팀 매니저로 활동하며 일정과 구성원 간 커뮤니케이션을 조율했습니다.",
  },
  {
    period: "2025.03.20 – 2025.12.31",
    title: "또래상담 동아리",
    role: "Member",
    description:
      "또래상담 활동에 참여하며 상대의 상황을 듣고 관점을 이해하는 경험을 쌓았습니다.",
  },
  {
    period: "2025.06.20 – 2025.07.12",
    title: "멋쟁이사자처럼 중앙 해커톤",
    role: "Planning · UX/UI Design",
    description:
      "팀 프로젝트에서 문제 정의부터 서비스 구조와 주요 화면 설계까지 참여했습니다.",
  },
  {
    period: "2025.09.29 – 2025.11.21",
    title: "미래내일 프로젝트",
    role: "UX Improvement Design",
    description:
      "기존 서비스의 사용 흐름을 분석하고 사용성 개선 방향을 제안했습니다.",
  },
  {
    period: "2025.12.29 – 2026.07.16",
    title: "구름 KDT DeepDive",
    role: "Product Design",
    description:
      "실무형 프로젝트를 통해 UX 리서치, 제품 구조 설계, 디자인 시스템, QA와 협업 문서화를 경험했습니다.",
    badge: "Builders League 최우수상",
  },
];

const experiences = [
  {
    title: "WithBuddy",
    role: "Product Designer",
    meta: "AI Onboarding SaaS · B2B Product Design",
    description:
      "반복되는 온보딩 응대를 자동화하는 AI SaaS의 사용자 경험과 운영 구조를 설계했습니다.",
  },
  {
    title: "배달의민족 장바구니 개선",
    role: "UX Researcher · Product Designer",
    meta: "UX Research · Concept Test",
    description:
      "여러 가게를 비교하는 사용자의 탐색 행동을 조사하고 장바구니 비교 경험을 검증했습니다.",
  },
  {
    title: "카카오T 홈화면 개선",
    role: "UX Researcher · Product Designer",
    meta: "Information Architecture · UX Research",
    description:
      "택시 중심의 사용자 인식과 이동 플랫폼 확장 사이의 간극을 바탕으로 홈 정보구조 대안을 탐색했습니다.",
  },
  {
    title: "Seed Design System Clone & QA",
    role: "Design System · QA",
    meta: "Figma Variables · Component Assembly Test",
    description:
      "Seed Design System을 재구성하고 다른 디자이너가 실제 화면을 조립할 수 있는지 검증했습니다.",
  },
  {
    title: "Artie",
    role: "UX/UI Designer",
    meta: "AI Exhibition Recommendation Platform",
    description:
      "전시 탐색 경험을 개인화하는 AI 추천 플랫폼의 서비스 구조와 화면을 설계했습니다.",
  },
  {
    title: "Tutti",
    role: "UX/UI Designer",
    meta: "Certificate Community Service",
    description:
      "자격증 준비 과정을 함께 지속할 수 있는 커뮤니티 서비스의 주요 흐름을 설계했습니다.",
  },
];

const awards = [
  {
    title: "우먼센스 식품 대기업 프로젝트 대상",
    date: "2025.02.28",
    organization: "㈜서울문화사",
  },
  {
    title: "구름 딥다이브 Builders League 최우수상",
    date: "2026.07.16",
    organization: "구름",
  },
];

const qualifications = [
  {
    title: "서비스경험디자인기사",
    detail: "필기 합격 · 실기 결과 발표 예정",
    organization: "한국디자인진흥원",
  },
  {
    title: "TOEIC",
    detail: "765",
    organization: "2025.04.13",
  },
  {
    title: "TOEIC Speaking Test",
    detail: "Advanced Low · 160",
    organization: "2026.06.07",
  },
];

const skillGroups = [
  {
    category: "Design",
    skills: [
      "Figma",
      "UX Research",
      "Information Architecture",
      "Wireframing",
      "Prototyping",
      "Design System",
      "Design QA",
    ],
  },
  {
    category: "Product",
    skills: [
      "Product Thinking",
      "Problem Definition",
      "User Flow",
      "Concept Test",
      "Documentation",
      "Team Facilitation",
    ],
  },
  {
    category: "Tools",
    skills: [
      "Next.js",
      "GitHub",
      "Notion",
      "Jira",
      "ChatGPT",
      "Claude",
      "Codex",
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-24 text-zinc-950">
      <div className="mx-auto max-w-5xl">
        <section className="mb-20">
          <p className="mb-4 text-sm text-zinc-500">About</p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            사용자 경험과 운영 구조를 함께 설계하는 Product Designer입니다.
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-600">
            화면을 보기 좋게 만드는 것에서 멈추지 않고, 사용자가 겪는
            문제와 서비스가 실제로 작동하는 구조를 함께 고민합니다. 리서치,
            제품 설계, 디자인 시스템과 QA 경험을 바탕으로 팀의 판단을
            구체적인 사용자 흐름과 실행 가능한 구조로 연결합니다.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="mailto:xhkdm1116@naver.com"
              className="inline-flex items-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-700"
            >
              Contact Me
            </a>

            <a
              href="https://github.com/xhkdm1/xhkdmportfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full border border-zinc-200 px-5 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-50"
            >
              GitHub
            </a>
          </div>
        </section>

        <section className="mb-20 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-3xl border border-zinc-200 p-6"
            >
              <p className="mb-2 text-3xl font-semibold">{stat.value}</p>
              <p className="text-sm text-zinc-500">{stat.label}</p>
            </article>
          ))}
        </section>

        <section className="mb-24">
          <div className="mb-8">
            <p className="mb-2 text-sm text-zinc-500">How I Work</p>

            <h2 className="text-3xl font-semibold tracking-tight">
              제품을 바라보는 방식
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {strengths.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-zinc-200 p-6 sm:p-8"
              >
                <h3 className="text-xl font-semibold leading-7">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <div className="mb-10">
            <p className="mb-2 text-sm text-zinc-500">Journey</p>

            <h2 className="text-3xl font-semibold tracking-tight">
              경험을 제품 설계 역량으로 확장해 왔습니다.
            </h2>
          </div>

          <div>
            {journey.map((item, index) => (
              <article key={`${item.period}-${item.title}`} className="flex gap-6 sm:gap-10">
                <div className="flex flex-col items-center">
                  <div className="mt-1 h-4 w-4 shrink-0 rounded-full border-4 border-zinc-950 bg-white" />

                  {index !== journey.length - 1 && (
                    <div className="w-px flex-1 bg-zinc-200" />
                  )}
                </div>

                <div className="pb-16 sm:pb-20">
                  <p className="mb-2 text-sm text-zinc-500">{item.period}</p>

                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-xl font-semibold">{item.title}</h3>

                    {item.badge && (
                      <span className="inline-flex rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <p className="mt-2 text-sm font-medium text-zinc-700">
                    {item.role}
                  </p>

                  <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-24">
          <div className="mb-8">
            <p className="mb-2 text-sm text-zinc-500">Selected Experience</p>

            <h2 className="text-3xl font-semibold tracking-tight">
              서로 다른 문제를 제품 관점으로 풀었습니다.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {experiences.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-zinc-200 p-6 sm:p-8"
              >
                <p className="mb-2 text-sm text-zinc-500">{item.role}</p>

                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="mt-3 text-sm font-medium text-zinc-700">
                  {item.meta}
                </p>

                <p className="mt-4 text-sm leading-7 text-zinc-600">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-24 grid gap-4 md:grid-cols-2">
          <article className="rounded-3xl border border-zinc-200 p-6 sm:p-8">
            <p className="mb-6 text-sm text-zinc-500">Awards</p>

            <div className="space-y-6">
              {awards.map((item) => (
                <div key={item.title}>
                  <h3 className="text-base font-semibold">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-zinc-500">
                    {item.organization} · {item.date}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-zinc-200 p-6 sm:p-8">
            <p className="mb-6 text-sm text-zinc-500">
              Certifications & Language
            </p>

            <div className="space-y-6">
              {qualifications.map((item) => (
                <div key={item.title}>
                  <h3 className="text-base font-semibold">{item.title}</h3>

                  <p className="mt-2 text-sm text-zinc-700">{item.detail}</p>

                  <p className="mt-1 text-sm text-zinc-500">
                    {item.organization}
                  </p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="mb-24">
          <div className="mb-8">
            <p className="mb-2 text-sm text-zinc-500">Skills</p>

            <h2 className="text-3xl font-semibold tracking-tight">
              설계와 협업에 사용하는 역량
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {skillGroups.map((group) => (
              <article
                key={group.category}
                className="rounded-3xl border border-zinc-200 p-6"
              >
                <h3 className="mb-5 text-sm font-semibold">
                  {group.category}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-zinc-100 px-3 py-1.5 text-xs font-medium text-zinc-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="border-t border-zinc-200 pt-16">
          <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="text-sm text-zinc-500">Education</p>
            </div>

            <div>
              <h2 className="text-xl font-semibold">
                상명대학교 서울캠퍼스
              </h2>

              <p className="mt-3 text-sm leading-7 text-zinc-600">
                휴먼AI전공 · 지적재산권전공 복수전공
                <br />
                2021.03 – 2026.02
                <br />
                GPA 3.93 / 4.5
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}