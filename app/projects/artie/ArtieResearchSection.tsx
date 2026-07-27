type SurveyDatum = {
  label: string;
  count: number;
  percentage: number;
};

const visitFrequency: SurveyDatum[] = [
  { label: "연 1~2회", count: 21, percentage: 44.7 },
  { label: "거의 가지 않는다", count: 18, percentage: 38.3 },
  { label: "월 1회 정도", count: 8, percentage: 17.0 },
];

const discoveryChannels: SurveyDatum[] = [
  { label: "인스타그램", count: 45, percentage: 95.7 },
  { label: "친구 추천", count: 14, percentage: 29.8 },
  { label: "네이버 블로그·카페", count: 11, percentage: 23.4 },
  { label: "유튜브", count: 7, percentage: 14.9 },
  { label: "오프라인 포스터", count: 2, percentage: 4.3 },
  { label: "NOL 티켓 앱", count: 1, percentage: 2.1 },
];

const selectionCriteria: SurveyDatum[] = [
  { label: "전시 주제의 흥미", count: 38, percentage: 80.9 },
  { label: "사진 찍기 좋은 공간", count: 3, percentage: 6.4 },
  { label: "입장료·가격", count: 3, percentage: 6.4 },
  { label: "유명 작가 여부", count: 2, percentage: 4.3 },
  { label: "위치의 접근성", count: 1, percentage: 2.1 },
];

const desiredFeatures: SurveyDatum[] = [
  { label: "개인 취향 기반 전시 추천", count: 28, percentage: 59.6 },
  { label: "위치 기반 전시 지도", count: 17, percentage: 36.2 },
  { label: "전시 후 리뷰 공유", count: 15, percentage: 31.9 },
  { label: "작품·굿즈 정보", count: 13, percentage: 27.7 },
  { label: "친구와 일정 조율", count: 8, percentage: 17.0 },
];

const recommendationIntent: SurveyDatum[] = [
  { label: "1점", count: 2, percentage: 4.3 },
  { label: "2점", count: 2, percentage: 4.3 },
  { label: "3점", count: 14, percentage: 29.8 },
  { label: "4점", count: 27, percentage: 57.4 },
  { label: "5점", count: 2, percentage: 4.3 },
];

const openResponseThemes = [
  "실제 관람자의 리뷰와 사진",
  "전시 주변 카페·서점 등 외출 동선",
  "시간대별 혼잡도",
  "전시 카테고리와 굿즈 정보",
];

function SectionHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="text-sm font-semibold tracking-[0.16em] text-zinc-500 uppercase">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-zinc-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}

function EvidenceTag({
  type,
}: {
  type: "Fact" | "Insight" | "Hypothesis" | "Limitation";
}) {
  const styles = {
    Fact: "border-zinc-200 bg-zinc-50 text-zinc-700",
    Insight: "border-[#F4C7C7] bg-[#FFF5F5] text-[#B74444]",
    Hypothesis: "border-amber-200 bg-amber-50 text-amber-800",
    Limitation: "border-rose-200 bg-rose-50 text-rose-700",
  };

  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${styles[type]}`}
    >
      {type}
    </span>
  );
}

function HorizontalBarChart({
  data,
  maxPercentage = 100,
}: {
  data: SurveyDatum[];
  maxPercentage?: number;
}) {
  return (
    <div className="space-y-5">
      {data.map((item) => (
        <div key={item.label}>
          <div className="flex items-end justify-between gap-4">
            <p className="text-sm font-medium text-zinc-800">{item.label}</p>
            <p className="shrink-0 text-sm tabular-nums text-zinc-500">
              {item.count}명 · {item.percentage.toFixed(1)}%
            </p>
          </div>
          <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-zinc-100">
            <div
              className="h-full rounded-full bg-[#E45F5F]"
              style={{
                width: `${Math.min(
                  (item.percentage / maxPercentage) * 100,
                  100,
                )}%`,
              }}
              aria-hidden="true"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function ResearchFinding({
  index,
  title,
  description,
  data,
  maxPercentage,
  insight,
}: {
  index: string;
  title: string;
  description: string;
  data: SurveyDatum[];
  maxPercentage?: number;
  insight: string;
}) {
  return (
    <article className="border-t border-zinc-200 py-14 lg:grid lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16 lg:py-20">
      <div>
        <p className="text-sm font-semibold text-zinc-400">{index}</p>
        <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-zinc-950 sm:text-3xl">
          {title}
        </h3>
        <p className="mt-4 max-w-xl text-base leading-7 text-zinc-600">
          {description}
        </p>
      </div>

      <div className="mt-10 lg:mt-0">
        <HorizontalBarChart
          data={data}
          maxPercentage={maxPercentage}
        />

        <div className="mt-8 rounded-2xl border border-[#F4C7C7] bg-[#FFF5F5] p-5 sm:p-6">
          <EvidenceTag type="Insight" />
          <p className="mt-3 text-sm leading-6 text-[#B74444] sm:text-base sm:leading-7">
            {insight}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function ArtieResearchSection() {
  return (
    <section
      id="research"
      className="bg-white px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Research"
          title="관람자의 전시 탐색 방식을 먼저 확인했습니다."
          description="데스크 리서치와 47명의 설문 응답을 바탕으로, 확인된 사실과 팀의 해석, 아직 검증하지 못한 가설을 분리해 정리했습니다."
        />

        {/* Research overview */}
        <div className="mt-14 grid gap-4 sm:grid-cols-3 lg:mt-20">
          {[
            { value: "47명", label: "유효 설문 응답" },
            { value: "2025.08.03–07", label: "설문 진행 기간" },
            { value: "7문항", label: "객관식·복수선택·주관식" },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6"
            >
              <p className="text-2xl font-semibold tracking-[-0.03em] text-zinc-950">
                {item.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-zinc-500">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Desk research */}
        <div className="mt-28 lg:mt-40">
          <SectionHeader
            eyebrow="Desk Research"
            title="문제의 방향은 확인했지만, 모든 주장을 검증한 것은 아니었습니다."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <div className="rounded-3xl border border-zinc-200 p-7 sm:p-8">
              <EvidenceTag type="Fact" />
              <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-zinc-950">
                전시 정보는 여러 채널에서 탐색되고 있었습니다.
              </h3>
              <p className="mt-4 text-base leading-7 text-zinc-600">
                프로젝트 초기에는 인스타그램, 블로그, 포털 검색 등
                여러 채널에서 전시 정보가 제공되는 사례를 조사했습니다.
                이후 설문을 통해 실제 응답자의 정보 획득 경로를 별도로
                확인했습니다.
              </p>
            </div>

            <div className="rounded-3xl border border-amber-200 bg-amber-50 p-7 sm:p-8">
              <EvidenceTag type="Hypothesis" />
              <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-amber-950">
                공간 정보를 구조화하면 창작자의 탐색 부담을 줄일 수 있을
                것이라 가정했습니다.
              </h3>
              <p className="mt-4 text-base leading-7 text-amber-900/75">
                신진 작가 지원 프로그램과 공간 공모 사례는 확인했지만,
                창작자의 공간 탐색 어려움 자체를 정량적으로 검증하지는
                못했습니다. 따라서 공간 매칭의 효과는 제품 가설로
                구분했습니다.
              </p>
            </div>
          </div>
        </div>

        {/* Survey findings */}
        <div className="mt-28 lg:mt-40">
          <SectionHeader
            eyebrow="Survey Findings"
            title="설문 결과에서 확인한 전시 탐색의 특징"
            description="복수선택 문항의 비율 합계는 100%를 초과할 수 있습니다. 모든 비율은 총 응답자 47명을 기준으로 계산했습니다."
          />

          <div className="mt-12">
            <ResearchFinding
              index="01"
              title="응답자의 83.0%는 전시를 연 1~2회 이하로 관람했습니다."
              description="연 1~2회 21명과 거의 가지 않는다는 응답 18명을 합산한 결과입니다."
              data={visitFrequency}
              insight="이번 조사에는 전시를 자주 소비하는 사람보다 가끔 관람하거나 거의 관람하지 않는 사람이 더 많았습니다. 팀은 헤비 유저를 위한 전문 탐색 도구보다, 일반 사용자가 전시를 발견하는 진입 과정을 우선 설계했습니다."
            />

            <ResearchFinding
              index="02"
              title="전시 정보 획득 경로는 인스타그램에 집중되었습니다."
              description="복수선택 문항에서 인스타그램은 45명(95.7%)이 선택했습니다."
              data={discoveryChannels}
              insight="응답 결과는 전시 발견이 하나의 전문 플랫폼보다 SNS와 지인 추천 등 여러 접점에서 이뤄질 가능성을 보여주었습니다. 이를 근거로 Artie의 첫 화면은 복잡한 검색보다 추천 콘텐츠를 먼저 노출하는 방향으로 설계했습니다."
            />

            <ResearchFinding
              index="03"
              title="전시 선택에서 가장 많이 고려한 요소는 주제의 흥미였습니다."
              description="단일선택 문항에서 38명(80.9%)이 전시 주제의 흥미를 선택했습니다."
              data={selectionCriteria}
              insight="설문 범위에서는 유명 작가 여부보다 자신의 관심사와 맞는 주제가 더 많이 선택되었습니다. 이에 따라 추천의 중심 기준을 작가 인지도보다 관심 주제와 취향 정보에 두었습니다."
            />

            <ResearchFinding
              index="04"
              title="추천 서비스 사용 의향은 4점에 가장 많이 분포했습니다."
              description="5점 척도에서 4점은 27명(57.4%)이었고, 3점 이상 응답은 43명(91.5%)이었습니다."
              data={recommendationIntent}
              insight="추천 기능에 대한 즉각적인 거부는 제한적으로 나타났습니다. 다만 이 결과는 설문상의 이용 의향이며, 실제 사용률이나 재방문을 검증한 성과로 해석하지 않았습니다."
            />

            <ResearchFinding
              index="05"
              title="추가 기능 중 취향 기반 추천이 가장 많이 선택되었습니다."
              description="복수선택 문항에서 개인 취향 기반 추천은 28명(59.6%)이 선택했습니다."
              data={desiredFeatures}
              insight="팀은 취향 기반 추천을 관람자 경험의 우선 기능으로 선정했습니다. 지도, 리뷰, 굿즈 정보와 일정 조율은 필요성이 확인된 후속 기능으로 분류했습니다."
            />
          </div>
        </div>

        {/* Open response */}
        <div className="mt-28 lg:mt-40">
          <SectionHeader
            eyebrow="Open Responses"
            title="사용자는 전시뿐 아니라 관람 전후의 경험도 함께 언급했습니다."
            description="자유응답에서 언급된 내용을 빈도나 대표성으로 일반화하지 않고, 후속 탐색이 필요한 주제로만 정리했습니다."
          />

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {openResponseThemes.map((theme) => (
              <div
                key={theme}
                className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6"
              >
                <p className="text-base font-medium leading-7 text-zinc-700">
                  {theme}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Problem definition */}
        <div className="mt-28 rounded-[2rem] bg-zinc-950 px-6 py-12 text-white sm:px-10 sm:py-16 lg:mt-40 lg:px-14 lg:py-20">
          <p className="text-sm font-semibold tracking-[0.16em] text-zinc-400 uppercase">
            Problem Definition
          </p>
          <h2 className="mt-5 max-w-4xl text-3xl font-semibold tracking-[-0.04em] sm:text-4xl lg:text-5xl">
            관심 있는 전시를 찾기 위해 여러 채널을 오가야 하는 탐색
            과정을 어떻게 줄일 수 있을까?
          </h2>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold text-zinc-400">Evidence</p>
              <p className="mt-3 text-sm leading-6 text-zinc-200">
                47명 중 45명이 인스타그램을 정보 획득 채널로 선택했고,
                전시 주제의 흥미가 가장 많이 선택된 결정 기준이었습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold text-zinc-400">Insight</p>
              <p className="mt-3 text-sm leading-6 text-zinc-200">
                전문적인 검색보다 사용자의 관심 주제에 맞는 전시를 먼저
                제안하는 방식이 일반 관람자의 진입 부담을 낮출 가능성이
                있다고 해석했습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-semibold text-zinc-400">Limitation</p>
              <p className="mt-3 text-sm leading-6 text-zinc-200">
                설문은 관람자 중심으로 진행되어 창작자와 공간 운영자의
                요구는 충분히 검증하지 못했습니다.
              </p>
            </div>
          </div>
        </div>

        {/* Opportunity */}
        <div className="mt-28 lg:mt-40">
          <SectionHeader
            eyebrow="Opportunity"
            title="검색 결과를 나열하는 대신, 취향과 조건을 연결하는 경험을 제안했습니다."
          />

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <div className="rounded-3xl border border-[#F4C7C7] bg-[#FFF5F5] p-7 sm:p-9">
              <p className="text-sm font-semibold text-[#B74444]">
                Primary Opportunity
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-[#B74444]">
                관람자에게 관심 주제 기반 전시를 먼저 추천한다.
              </h3>
              <p className="mt-4 text-base leading-7 text-[#B74444]/80">
                설문에서 가장 많이 선택된 전시 결정 기준과 희망 기능을
                바탕으로, AI 추천을 MVP의 우선 경험으로 정했습니다.
              </p>
            </div>

            <div className="rounded-3xl border border-zinc-200 p-7 sm:p-9">
              <p className="text-sm font-semibold text-zinc-500">
                Secondary Hypothesis
              </p>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.03em] text-zinc-950">
                창작자에게 조건에 맞는 공간을 구조화해 보여준다.
              </h3>
              <p className="mt-4 text-base leading-7 text-zinc-600">
                공간 매칭은 프로젝트의 두 번째 흐름으로 유지했지만, 관련
                사용자 조사가 부족했기 때문에 검증된 요구가 아닌 제품
                가설로 명시했습니다.
              </p>
            </div>
          </div>
        </div>

        {/* Source note */}
        <p className="mt-16 border-t border-zinc-200 pt-6 text-sm leading-6 text-zinc-500">
          ※ 정량 데이터 출처: 2025년 8월 3일부터 8월 7일까지 진행한
          Artie 자체 설문조사 유효 응답 47건. 복수선택 문항은 응답자 한
          명이 여러 항목을 선택할 수 있어 비율 합계가 100%를 초과합니다.
          자유응답은 언급된 주제를 요약했으며 전체 사용자 집단의 공통
          요구로 일반화하지 않았습니다.
        </p>
      </div>
    </section>
  );
}
