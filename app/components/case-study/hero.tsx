export default function Hero() {
  return (
    <section className="border-b border-zinc-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-28">

        {/* Top */}
        <div className="space-y-6">

          <span className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
            Case Study
          </span>

          <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-zinc-950">
            Designing an AI onboarding assistant
            <br />
            to reduce repetitive support requests.
          </h1>

          <p className="max-w-2xl text-lg leading-8 text-zinc-600">
            WithBuddy는 신입사원의 반복 질문과 담당자의 반복 응대를 줄이기 위해
            설계한 AI 기반 온보딩 어시스턴트입니다.
          </p>
        </div>

        {/* Overview */}
        <div className="grid grid-cols-2 gap-y-10 border-t border-zinc-200 pt-12 md:grid-cols-5">

          <div>
            <p className="text-sm text-zinc-400">Role</p>
            <p className="mt-2 font-medium">Product Designer</p>
          </div>

          <div>
            <p className="text-sm text-zinc-400">Duration</p>
            <p className="mt-2 font-medium">6 Weeks</p>
          </div>

          <div>
            <p className="text-sm text-zinc-400">Team</p>
            <p className="mt-2 font-medium">6 Members</p>
          </div>

          <div>
            <p className="text-sm text-zinc-400">Platform</p>
            <p className="mt-2 font-medium">Web</p>
          </div>

          <div>
            <p className="text-sm text-zinc-400">Contribution</p>
            <p className="mt-2 font-medium">
              UX · IA · Design System
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}