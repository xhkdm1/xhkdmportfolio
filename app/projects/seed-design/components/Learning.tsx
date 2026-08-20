import SectionHeading from "./SectionHeading";

const learnings = [
  "컴포넌트의 외형보다 Anatomy와 Property가 설계 의도를 설명한다는 점을 확인했습니다.",
  "상세 스펙이 부족한 영역은 실제 화면 구조와 구현 사례를 비교하며 기준을 정리해야 한다는 점을 알게 됐습니다.",
  "Auto Layout, Variable, Variant, Property는 단순히 UI를 만드는 도구가 아니라 팀 공통 언어가 됩니다.",
  "문서가 여러 직군이 같은 기준으로 이해할 수 있는 구조를 갖춰야 실제 협업이 원활해집니다.",
];

export default function Learning() {
  return (
    <section className="bg-zinc-50">
      <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28 lg:px-12 lg:py-32">
        <SectionHeading
          index="07"
          eyebrow="Observed → Changed → Remaining Limit"
          title="실제 검증을 통해, 문제를 구조 개선으로 연결할 수 있음을 확인했습니다."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {learnings.map((item, index) => (
            <article
              key={item}
              className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8"
            >
              <p className="text-sm font-medium text-[#E85D00]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-6 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
                {item}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8">
          <p className="text-sm font-medium text-zinc-500">Remaining Limit</p>
          <p className="mt-5 max-w-3xl text-xl font-semibold leading-8 sm:text-2xl">
            이 프로젝트는 공개 시스템을 재구성하며 실제 조립 가능성을 확인하는 데 초점을 두었고,
            장기 운영되는 Design System Governance까지는 다루지 않았습니다.
          </p>
          <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-600">
            이후에는 Dark Mode, Deprecated 정책, Release 기준, 코드 동기화와 같은 운영 체계가
            다음 단계의 개선 과제로 남습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
