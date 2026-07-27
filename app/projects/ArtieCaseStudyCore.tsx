import Image from "next/image";
import type { ReactNode } from "react";

type JourneyStep = {
  step: string;
  title: string;
  description: string;
};

type DecisionItem = {
  title: string;
  before: string;
  after: string;
  reason: string;
};

const viewerJourney: JourneyStep[] = [
  {
    step: "01",
    title: "취향 선택",
    description:
      "관심 있는 전시 주제와 분위기를 선택해 추천의 기준을 만듭니다.",
  },
  {
    step: "02",
    title: "전시 발견",
    description:
      "검색어를 직접 입력하기 전에 관심사에 가까운 전시를 먼저 탐색합니다.",
  },
  {
    step: "03",
    title: "상세 확인",
    description:
      "전시 주제, 위치, 일정과 함께 추천 이유를 확인합니다.",
  },
  {
    step: "04",
    title: "저장과 이동",
    description:
      "관심 전시를 저장하고 관람을 위한 다음 행동으로 이어갑니다.",
  },
];

const creatorJourney: JourneyStep[] = [
  {
    step: "01",
    title: "전시 조건 입력",
    description:
      "전시 기간, 지역, 규모와 필요한 공간 조건을 단계별로 입력합니다.",
  },
  {
    step: "02",
    title: "공간 탐색",
    description:
      "입력한 조건과 가까운 공간을 비교하며 후보를 좁힙니다.",
  },
  {
    step: "03",
    title: "공간 상세 확인",
    description:
      "대관 조건과 공간 정보를 확인해 전시 가능성을 판단합니다.",
  },
  {
    step: "04",
    title: "신청 검토",
    description:
      "입력 내용을 다시 확인한 뒤 공간 이용 신청으로 이어집니다.",
  },
];

const recommendationDecisions = [
  {
    number: "01",
    title: "검색보다 추천을 먼저 보여주었습니다.",
    description:
      "설문에서 전시 주제의 흥미가 가장 많이 선택된 기준이었기 때문에, 첫 화면에서 키워드 검색보다 관심 주제 기반 콘텐츠를 먼저 노출했습니다.",
    evidence:
      "설문 근거: 47명 중 38명(80.9%)이 전시 선택 기준으로 ‘전시 주제의 흥미’를 선택했습니다.",
  },
  {
    number: "02",
    title: "추천 결과에 이유를 함께 제시했습니다.",
    description:
      "사용자가 왜 이 전시를 추천받았는지 이해할 수 있도록 관심 주제와 연결되는 설명을 함께 보여주는 방향으로 설계했습니다.",
    evidence:
      "제품 가설: 추천 이유 제공이 결과에 대한 이해와 탐색 지속에 도움을 줄 수 있다고 보았습니다.",
  },
  {
    number: "03",
    title: "좋아요를 다음 추천의 명시적 신호로 사용했습니다.",
    description:
      "단순 조회보다 사용자가 직접 남긴 선호 행동을 더 명확한 취향 정보로 활용하는 흐름을 구상했습니다.",
    evidence:
      "제품 가설: 명시적 선호 행동을 반영하면 이후 추천의 관련성을 높일 수 있다고 판단했습니다.",
  },
];

const matchingDecisions = [
  {
    number: "01",
    title: "긴 입력 폼을 단계별 과정으로 나누었습니다.",
    description:
      "전시와 공간 조건을 한 화면에서 모두 입력하는 대신, 서로 관련 있는 항목끼리 묶어 한 단계씩 완료하도록 설계했습니다.",
    evidence:
      "협업 과정: 초기 와이어프레임을 공유한 뒤 팀원 의견을 반영해 등록 흐름을 Step UI로 수정했습니다.",
  },
  {
    number: "02",
    title: "조건 입력 후 마지막 검토 단계를 두었습니다.",
    description:
      "기간, 위치, 공간 조건처럼 수정 비용이 큰 정보를 제출 전에 다시 확인할 수 있도록 검토 화면을 포함했습니다.",
    evidence:
      "제품 가설: 최종 확인 단계가 잘못된 조건으로 신청하는 오류를 줄이는 데 도움을 줄 수 있다고 보았습니다.",
  },
  {
    number: "03",
    title: "공간 매칭은 검증된 수요가 아닌 보조 가설로 구분했습니다.",
    description:
      "관람자 설문과 달리 창작자와 공간 운영자 조사는 충분하지 않았기 때문에, 공간 매칭을 핵심 성과가 아닌 후속 검증 대상의 제품 가설로 명시했습니다.",
    evidence:
      "리서치 한계: 이번 설문은 관람자 중심으로 진행되었습니다.",
  },
];

const designDecisions: DecisionItem[] = [
  {
    title: "탐색 구조",
    before: "사용자가 검색어를 입력해야 전시를 찾을 수 있는 구조",
    after: "관심 주제 기반 추천을 먼저 확인하는 구조",
    reason:
      "일반 관람자에게는 무엇을 검색해야 할지 정하는 과정 자체가 진입 장벽이 될 수 있다고 판단했습니다.",
  },
  {
    title: "전시 등록",
    before: "여러 조건을 한 화면에서 입력하는 긴 폼",
    after: "관련 정보를 묶은 단계별 등록 흐름",
    reason:
      "입력해야 할 정보의 양을 한 번에 보여주기보다 현재 단계의 과업에 집중하도록 설계했습니다.",
  },
  {
    title: "추천 설명",
    before: "결과만 보여주는 전시 카드",
    after: "추천 기준을 함께 설명하는 전시 카드",
    reason:
      "AI가 선택한 결과를 일방적으로 제시하기보다 사용자가 추천의 맥락을 이해하도록 돕고자 했습니다.",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm font-semibold tracking-[0.16em] text-zinc-500 uppercase">
      {children}
    </p>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-4xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-zinc-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function ImagePlaceholder({
  label,
  ratio = "aspect-[16/10]",
}: {
  label: string;
  ratio?: string;
}) {
  return (
    <div
      className={`${ratio} flex w-full items-center justify-center overflow-hidden rounded-[2rem] border border-dashed border-zinc-300 bg-zinc-100`}
    >
      <p className="px-6 text-center text-sm font-medium leading-6 text-zinc-500">
        {label}
      </p>
    </div>
  );
}

function JourneyColumn({
  title,
  description,
  steps,
}: {
  title: string;
  description: string;
  steps: JourneyStep[];
}) {
  return (
    <article className="rounded-[2rem] border border-zinc-200 bg-white p-6 sm:p-8">
      <p className="text-sm font-semibold text-zinc-500">{title}</p>
      <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-600">
        {description}
      </p>

      <ol className="mt-8 space-y-0">
        {steps.map((item, index) => (
          <li
            key={item.step}
            className="relative grid grid-cols-[2.5rem_1fr] gap-4 pb-8 last:pb-0"
          >
            {index < steps.length - 1 ? (
              <span
                className="absolute left-[1.2rem] top-10 h-[calc(100%-1.25rem)] w-px bg-zinc-200"
                aria-hidden="true"
              />
            ) : null}
            <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-xs font-semibold text-zinc-500">
              {item.step}
            </span>
            <div className="pt-1">
              <h3 className="text-base font-semibold text-zinc-950">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </article>
  );
}

function DecisionList({
  items,
}: {
  items: {
    number: string;
    title: string;
    description: string;
    evidence: string;
  }[];
}) {
  return (
    <div className="divide-y divide-zinc-200 border-y border-zinc-200">
      {items.map((item) => (
        <article
          key={item.number}
          className="grid gap-5 py-8 sm:grid-cols-[4rem_1fr] sm:py-10"
        >
          <p className="text-sm font-semibold text-zinc-400">{item.number}</p>
          <div>
            <h3 className="text-xl font-semibold tracking-[-0.025em] text-zinc-950 sm:text-2xl">
              {item.title}
            </h3>
            <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-600">
              {item.description}
            </p>
            <p className="mt-4 rounded-xl bg-zinc-50 px-4 py-3 text-sm leading-6 text-zinc-500">
              {item.evidence}
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default function ArtieCaseStudyCore({ researchSlot }: { researchSlot?: ReactNode }) {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#FFF5F5] px-5 pb-20 pt-28 sm:px-8 sm:pb-28 sm:pt-36 lg:px-12 lg:pb-36 lg:pt-44">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-5xl">
            <Eyebrow>Artie · AI Exhibition Matching Platform</Eyebrow>

            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.055em] text-zinc-950 sm:text-6xl lg:text-7xl lg:leading-[1.08]">
              관람자에게는 전시 발견을,
              <br />
              창작자에게는 공간 탐색을 연결했습니다.
            </h1>

            <p className="mt-7 max-w-3xl text-lg leading-8 text-zinc-600 sm:text-xl sm:leading-9">
              Artie는 관심 주제에 맞는 전시를 추천하고, 창작자가 조건에
              맞는 전시 공간을 탐색하도록 돕는 AI 전시 매칭 플랫폼입니다.
            </p>
          </div>

          <dl className="mt-12 grid gap-x-10 gap-y-6 border-t border-zinc-300 pt-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Period", "2025.07.12–08.26"],
              ["Organization", "멋쟁이사자처럼"],
              ["Role", "Team Lead · Product Design"],
              ["Contribution", "기획 · UX/UI · Prototype · PT"],
            ].map(([term, value]) => (
              <div key={term}>
                <dt className="text-xs font-semibold tracking-[0.12em] text-zinc-500 uppercase">
                  {term}
                </dt>
                <dd className="mt-2 text-sm font-medium leading-6 text-zinc-900">
                  {value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-14 overflow-hidden rounded-[2rem]">
            <div className="relative aspect-[16/9] w-full">
              <Image
                src="/images/artie/thumbnail.png"
                alt="Artie AI 전시 추천 및 공간 매칭 플랫폼 대표 화면"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1152px"
                className="object-contain"
              />
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://artie-blond.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
            >
              Visit live site
            </a>
            <span className="inline-flex items-center rounded-full border border-zinc-300 bg-white/70 px-5 py-3 text-sm font-medium text-zinc-600">
              Desktop web prototype
            </span>
          </div>
        </div>
      </section>

      {/* Background */}
      <section className="bg-white px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="Background"
            title="전시를 찾는 사람과 전시를 열고 싶은 사람은 서로 다른 탐색 문제를 겪고 있었습니다."
            description="팀은 관람자의 전시 발견 과정과 창작자의 공간 탐색 과정을 하나의 서비스 안에서 연결할 수 있는지 탐색했습니다. 다만 두 문제의 근거 수준은 달랐기 때문에, 관람자 문제는 설문 결과를 중심으로, 공간 탐색 문제는 제품 가설로 구분했습니다."
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            <article className="rounded-3xl border border-zinc-200 p-7 sm:p-8">
              <p className="text-sm font-semibold text-zinc-400">01 Viewer</p>
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.025em] text-zinc-950">
                무엇을 볼지 정하기 전에 여러 채널을 탐색해야 했습니다.
              </h3>
              <p className="mt-4 text-base leading-7 text-zinc-600">
                자체 설문에서 47명 중 45명이 인스타그램을 전시 정보
                획득 채널로 선택했습니다. 팀은 검색 이전의 ‘발견’ 경험을
                우선 문제로 정의했습니다.
              </p>
            </article>

            <article className="rounded-3xl border border-zinc-200 p-7 sm:p-8">
              <p className="text-sm font-semibold text-zinc-400">02 Creator</p>
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.025em] text-zinc-950">
                전시 조건에 맞는 공간 정보를 한 흐름에서 비교하기
                어려웠습니다.
              </h3>
              <p className="mt-4 text-base leading-7 text-zinc-600">
                이 문제는 당시 창작자 조사를 통해 충분히 검증하지
                못했습니다. 공간 조건을 구조화하면 탐색 부담을 줄일 수
                있다는 제품 가설로 출발했습니다.
              </p>
            </article>

            <article className="rounded-3xl border border-amber-200 bg-amber-50 p-7 sm:p-8">
              <p className="text-sm font-semibold text-amber-700">
                Scope Limitation
              </p>
              <h3 className="mt-4 text-xl font-semibold tracking-[-0.025em] text-amber-950">
                관람자와 창작자 문제의 근거 수준은 같지 않았습니다.
              </h3>
              <p className="mt-4 text-base leading-7 text-amber-900/75">
                따라서 AI 전시 추천을 우선 경험으로 두고, 공간 매칭은
                별도의 후속 검증이 필요한 보조 흐름으로 정리했습니다.
              </p>
            </article>
          </div>

          <div className="mt-16 grid gap-8 rounded-[2rem] bg-zinc-950 p-7 text-white sm:p-10 lg:grid-cols-[0.8fr_1.2fr] lg:p-14">
            <div>
              <p className="text-sm font-semibold tracking-[0.16em] text-zinc-400 uppercase">
                Problem Statement
              </p>
              <p className="mt-5 text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">
                관심 있는 전시를 찾기 위해 여러 채널을 오가야 하는
                과정을 어떻게 줄일 수 있을까?
              </p>
            </div>

            <div className="border-t border-white/10 pt-7 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="text-sm font-semibold tracking-[0.16em] text-zinc-400 uppercase">
                Secondary Hypothesis
              </p>
              <p className="mt-5 text-xl font-medium leading-8 text-zinc-200">
                전시 조건을 구조화해 입력받고 적합한 공간을 비교하도록
                하면 창작자의 공간 탐색 부담을 줄일 수 있을 것이다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {researchSlot}

      {/* MVP */}
      <section className="bg-zinc-50 px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="MVP Scope"
            title="세 사용자를 모두 연결하려 했지만, 핵심 경험은 두 흐름으로 좁혔습니다."
            description="서비스 전체 생태계에는 공간 운영자도 포함되지만, 프로젝트 기간 안에서 모든 사용자의 문제를 같은 깊이로 다루기 어려웠습니다. 따라서 관람자의 발견과 창작자의 공간 탐색을 중심으로 MVP를 구성했습니다."
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <article className="rounded-[2rem] border border-[#F4C7C7] bg-[#FFF5F5] p-7 sm:p-9">
              <p className="text-sm font-semibold text-[#B74444]">
                Primary Experience
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.035em] text-[#B74444]">
                AI 전시 추천
              </h3>
              <p className="mt-4 text-base leading-7 text-[#B74444]/80">
                관심 주제와 선호 행동을 바탕으로 사용자가 검색하기 전에
                탐색할 전시를 제안하는 경험입니다.
              </p>
              <ul className="mt-7 space-y-3 text-sm leading-6 text-[#B74444]/90">
                <li>• 관심 주제 기반 온보딩</li>
                <li>• 추천 전시 카드</li>
                <li>• 추천 이유 제공</li>
                <li>• 좋아요를 통한 선호 반영</li>
              </ul>
            </article>

            <article className="rounded-[2rem] border border-zinc-200 bg-white p-7 sm:p-9">
              <p className="text-sm font-semibold text-zinc-500">
                Secondary Experience
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.035em] text-zinc-950">
                전시 공간 매칭
              </h3>
              <p className="mt-4 text-base leading-7 text-zinc-600">
                전시 조건을 단계별로 입력하고, 조건과 가까운 공간을
                탐색하는 경험입니다.
              </p>
              <ul className="mt-7 space-y-3 text-sm leading-6 text-zinc-600">
                <li>• 단계별 전시 등록</li>
                <li>• 기간·지역·규모 조건 입력</li>
                <li>• 공간 후보 비교</li>
                <li>• 제출 전 입력 정보 검토</li>
              </ul>
            </article>
          </div>

          <div className="mt-8 rounded-2xl border border-rose-200 bg-rose-50 p-6">
            <p className="text-sm font-semibold text-rose-700">
              Out of Scope
            </p>
            <p className="mt-3 text-sm leading-6 text-rose-900/75">
              실제 추천 성능 검증, 예약·결제 정책, 공간 운영자의 승인 및
              반려 운영, 취소·노쇼 정책, 관리자 신고 처리까지는 MVP
              범위에 포함하지 못했습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Journey */}
      <section className="bg-white px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="User Journey"
            title="전시를 발견하는 흐름과 전시를 준비하는 흐름을 분리해 설계했습니다."
            description="두 사용자가 같은 서비스 안에서 서로 다른 목표를 갖기 때문에, 하나의 복잡한 통합 여정보다 각자의 핵심 과업을 독립된 흐름으로 정리했습니다."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <JourneyColumn
              title="Viewer Journey"
              description="검색어를 정하는 부담을 줄이고, 관심 전시를 발견해 다음 행동으로 이어지는 과정입니다."
              steps={viewerJourney}
            />
            <JourneyColumn
              title="Creator Journey"
              description="전시 조건을 입력하고 공간 후보를 검토해 신청 준비로 이어지는 과정입니다."
              steps={creatorJourney}
            />
          </div>

          <div className="mt-14">
            <ImagePlaceholder
              label="여기에 관람자·창작자 User Flow 또는 서비스 플로우 다이어그램 삽입"
              ratio="aspect-[16/8]"
            />
          </div>
        </div>
      </section>

      {/* Core Experience 01 */}
      <section className="bg-[#FFF5F5] px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="Core Experience 01"
            title="검색하기 전에 취향에 가까운 전시를 먼저 발견하도록 했습니다."
            description="Artie의 우선 경험은 복잡한 추천 기술을 보여주는 것이 아니라, 무엇을 검색할지 모르는 사용자가 관심 주제에서 탐색을 시작하도록 돕는 것이었습니다."
          />

          <div className="mt-14 grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <ImagePlaceholder
                label="여기에 취향 선택 → 추천 홈 → 전시 상세 화면 3단 목업 삽입"
                ratio="aspect-[4/5]"
              />
            </div>

            <DecisionList items={recommendationDecisions} />
          </div>
        </div>
      </section>

      {/* Core Experience 02 */}
      <section className="bg-white px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="Core Experience 02"
            title="공간 조건을 한 번에 입력하지 않고, 판단 순서에 따라 나누었습니다."
            description="공간 매칭은 충분히 검증된 사용자 요구가 아니었지만, 복잡한 등록 정보를 어떻게 덜 부담스럽게 입력받을지에 집중해 설계했습니다."
          />

          <div className="mt-14 grid items-start gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <DecisionList items={matchingDecisions} />

            <div>
              <ImagePlaceholder
                label="여기에 Step UI 등록 화면과 최종 검토 화면 목업 삽입"
                ratio="aspect-[4/5]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Design Decision */}
      <section className="bg-zinc-950 px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12 lg:py-40">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold tracking-[0.16em] text-zinc-400 uppercase">
              Design Decisions
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] sm:text-4xl lg:text-5xl">
              기능을 추가하는 것보다, 사용자가 판단해야 하는 순간을
              정리하는 데 집중했습니다.
            </h2>
          </div>

          <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
            {designDecisions.map((item, index) => (
              <article
                key={item.title}
                className="grid gap-7 py-10 lg:grid-cols-[0.35fr_0.65fr_0.65fr_1fr] lg:gap-10 lg:py-12"
              >
                <div>
                  <p className="text-sm font-semibold text-zinc-500">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold tracking-[-0.025em]">
                    {item.title}
                  </h3>
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-[0.12em] text-zinc-500 uppercase">
                    Before
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">
                    {item.before}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-[0.12em] text-[#E45F5F] uppercase">
                    After
                  </p>
                  <p className="mt-3 text-sm leading-6 text-white">
                    {item.after}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold tracking-[0.12em] text-zinc-500 uppercase">
                    Why
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-300">
                    {item.reason}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 max-w-4xl text-sm leading-6 text-zinc-400">
            ※ 위 결정 중 AI 추천의 효과와 공간 탐색 시간 감소는 실제
            사용자 테스트나 운영 데이터로 검증하지 못했습니다. 이
            프로젝트에서 확인한 것은 설계 방향과 프로토타입이며, 성과
            지표가 아닙니다.
          </p>
        </div>
      </section>
    </>
  );
}
