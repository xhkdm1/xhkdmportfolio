import SectionHeading from "./SectionHeading";
import ImagePlaceholder from "./ImagePlaceholder";

const pains = [
  "상세 스펙이 없는 컴포넌트 존재",
  "Slot·이미지 프레임 가이드 불명확",
  "Naming 규칙 혼재",
  "아이콘 초기 체계화 미흡",
  "예외 변수 지속 발생",
];

const metrics = [
  "컴포넌트 유효성 검증",
  "탐색 효율성",
  "변수 네이밍 직관성",
  "조립 매끄러움",
  "사용 편의성",
  "스타일 시스템 사용성",
  "디자인 시스템 사용성",
  "불편 요소 발견",
  "유지 요소 파악",
];

export default function QA() {
  return (
    <>
      <section className="bg-zinc-900 text-white">
        <div className="mx-auto w-full max-w-5xl px-5 py-24 sm:px-8 md:py-32 lg:py-36">
          <SectionHeading
            index="03"
            eyebrow="QA Reframing"
            title="완성된 시스템을 평가하는 대신, 실제로 조립 가능한지를 물었습니다."
            description="클론 자체의 완성도를 확인하는 내부 QA와 다른 디자이너의 사용 가능성을 확인하는 외부 QA로 나눴습니다."
          />
          <div className="grid gap-5 md:grid-cols-[1fr_auto_1fr] md:items-center">
            <article className="rounded-3xl border border-white/15 bg-white/5 p-6 sm:p-8">
              <p className="text-sm text-white/50">처음의 질문</p>
              <p className="mt-5 text-xl font-semibold leading-8 sm:text-2xl">
                이미 완성된 디자인 시스템을 클론했는데, 무엇을 테스트해야
                할까?
              </p>
            </article>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#FF6F0F] text-xl font-semibold">
              ↓
            </div>
            <article className="rounded-3xl bg-white p-6 text-zinc-900 sm:p-8">
              <p className="text-sm font-medium text-[#E85D00]">
                재정의한 질문
              </p>
              <p className="mt-5 text-xl font-semibold leading-8 sm:text-2xl">
                다른 디자이너가 우리가 재구성한 시스템을 이해하고 실제 화면을
                조립할 수 있는가?
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-5 py-20 sm:px-8 md:py-28 lg:py-32">
        <SectionHeading
          index="04"
          eyebrow="Internal QA"
          title="스펙이 없는 영역과 네이밍 규칙이 주요 변수였습니다."
        />
        <div className="grid gap-5 md:grid-cols-2">
          <article className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8">
            <p className="text-sm font-medium text-zinc-500">Pain</p>
            <ul className="mt-6 space-y-3">
              {pains.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl bg-zinc-50 p-4 text-sm leading-6 text-zinc-600"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-3xl border border-[#FF6F0F] bg-[#FFF4EC] p-6 sm:p-8">
            <p className="text-sm font-medium text-[#E85D00]">Insight</p>
            <p className="mt-6 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
              Primitive → Semantic 구조와 문서의 순서를 일관되게 유지했을 때,
              이후 컴포넌트 조립이 훨씬 수월했습니다.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-[#FFF4EC]">
        <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 md:py-28 lg:py-32">
          <SectionHeading
            index="05"
            eyebrow="Component Assembly Test"
            title="다른 디자이너가 실제 화면을 만들 수 있는지 30분 세션으로 확인했습니다."
            description="안내 5분 · 탐색 5분 · 제작 10분 · 질문지 10분으로 구성했습니다."
          />
          <div className="grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["안내", "5분"],
                ["탐색", "5분"],
                ["제작", "10분"],
                ["질문지", "10분"],
              ].map(([label, time]) => (
                <article
                  key={label}
                  className="rounded-3xl border border-[#FFD5B8] bg-white p-6"
                >
                  <p className="text-sm text-zinc-500">{label}</p>
                  <p className="mt-3 text-3xl font-semibold text-[#E85D00]">
                    {time}
                  </p>
                </article>
              ))}
            </div>
            <ImagePlaceholder
              src="/images/seed-design/assembly-test.webp"
              label="Component Assembly Test 진행 화면"
              ratio="portrait"
            />
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {metrics.map((metric, index) => (
              <article
                key={metric}
                className="rounded-2xl border border-[#FFD5B8] bg-white p-5"
              >
                <p className="text-xs font-medium text-zinc-400">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-sm font-medium leading-6 text-zinc-700">
                  {metric}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
