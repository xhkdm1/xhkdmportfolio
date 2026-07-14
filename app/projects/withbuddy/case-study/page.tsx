import Hero from "@/app/components/case-study/hero";

export default function WithBuddyCaseStudyPage() {
  return (
    <main className="min-h-screen bg-white px-6 py-24 text-zinc-950">
      <div className="mx-auto max-w-5xl">
        <p className="mb-3 text-sm text-zinc-500">
          WithBuddy · Case Study
        </p>

        <h1 className="text-5xl font-semibold tracking-tight">
          Case Study 준비 중
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-zinc-600">
          WithBuddy의 문제 정의, 의사결정, 검증 과정을 정리하고 있습니다.
        </p>
      </div>
    </main>
  );
}