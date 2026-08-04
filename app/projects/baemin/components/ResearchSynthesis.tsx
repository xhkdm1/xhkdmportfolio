import Image from "next/image";

const finalInsights = [
  {
    category: "공통",
    title: "비교 과정이 기억과 화면 캡처에 의존했습니다.",
    description:
      "여러 가게의 정보를 한눈에 대조할 수 없어 사용자는 가격, 리뷰, 할인 정보를 기억하거나 화면을 캡처하며 비교했습니다.",
    implication:
      "후보별 핵심 정보를 한 화면에서 나란히 확인할 수 있는 구조가 필요합니다.",
  },
  {
    category: "탐색저장형",
    title: "장바구니는 결제뿐 아니라 결정 보류에 사용됐습니다.",
    description:
      "일부 사용자는 마음에 드는 메뉴를 장바구니에 임시로 저장한 뒤 다른 가게를 계속 탐색했습니다.",
    implication:
      "여러 가게의 장바구니를 유지하면서 후보를 비교할 수 있어야 합니다.",
  },
  {
    category: "가격민감형",
    title: "예상 금액과 실제 결제 금액의 차이가 이탈을 만들었습니다.",
    description:
      "쿠폰, 할인율, 배달비가 반영된 금액을 확인하기 위해 결제 직전 단계까지 반복해서 이동했고, 예상보다 비싸면 주문을 포기했습니다.",
    implication:
      "쿠폰과 배달비를 반영한 예상 결제 금액을 비교 단계에서 제공해야 합니다.",
  },
  {
    category: "연속주문형",
    title: "여러 가게 주문에서는 결제와 도착 시간 관리가 어려웠습니다.",
    description:
      "여러 식당의 메뉴를 조합하는 사용자는 가게마다 결제를 반복하고, 음식이 비슷한 시간에 도착하도록 배달시간을 따로 계산했습니다.",
    implication:
      "여러 장바구니와 예상 배달시간을 함께 확인할 수 있어야 합니다.",
  },
  {
    category: "탐색 효율",
    title: "비교가 길어질수록 주문 포기 가능성이 높아졌습니다.",
    description:
      "후보가 많아지면 탐색 피로와 결정장애가 커졌고, 식사 시간이 지나면 주문 자체를 포기하는 행동도 나타났습니다.",
    implication:
      "비교 후보를 제한하고 판단에 필요한 정보만 우선 노출해야 합니다.",
  },
  {
    category: "화면 구조",
    title: "사용자는 최대 3~4개의 후보를 비교했습니다.",
    description:
      "실제 고민하는 후보 수와 한 화면에서 보고 싶은 장바구니 수는 주로 3~4개로 나타났습니다.",
    implication:
      "한 화면의 비교 후보를 약 3개로 제한해 정보 과부하를 방지해야 합니다.",
  },
];

const conceptInsights = [
  {
    label: "투뎁스",
    title: "이해하기 쉬운 흐름",
    description:
      "기존 장바구니 상세 화면과 유사해 다양한 연령층이 기능을 직관적으로 이해하기 쉬웠습니다.",
  },
  {
    label: "아코디언",
    title: "비교하기 쉬운 흐름",
    description:
      "한 페이지에서 여러 가게의 정보를 펼쳐 확인할 수 있어 정보 전달과 직접 비교에 유리했습니다.",
  },
];

const solutionCandidates = [
  {
    title: "장바구니 개선",
    description:
      "여러 가게의 장바구니를 유지하고 결제 직전 단계에서 비교할 수 있도록 개선합니다.",
    strengths: [
      "비교 결과가 실제 주문으로 빠르게 이어질 수 있음",
      "반복적인 가게 탐색과 정보 기억을 줄일 수 있음",
      "사용자가 이미 후보 저장에 활용하는 행동과 연결됨",
    ],
    risks: [
      "화면 뎁스와 장바구니 복잡도가 증가할 수 있음",
      "결제 공간과 비교 공간이라는 정체성이 충돌할 수 있음",
      "쿠폰과 최종 금액 계산 등 개발 로직이 복잡해질 수 있음",
    ],
    selected: true,
  },
  {
    title: "찜 목록 개선",
    description:
      "찜한 가게를 필터링하고 핵심 조건을 비교할 수 있도록 개선합니다.",
    strengths: [
      "천천히 후보를 탐색하는 상황과 잘 맞음",
      "결제 압박 없이 가게를 분류할 수 있음",
      "기존 저장 기능을 확장할 수 있음",
    ],
    risks: [
      "비교하려면 먼저 가게를 찜해야 함",
      "찜을 사용하지 않는 사용자에게는 연결성이 낮음",
      "찜의 단순한 저장 기능이 복잡해질 수 있음",
    ],
    selected: false,
  },
  {
    title: "새 비교 기능 추가",
    description:
      "장바구니나 찜과 분리된 별도의 가게 비교 기능을 만듭니다.",
    strengths: [
      "기존 기능의 정체성을 해치지 않음",
      "비교 목적에 최적화된 UI를 설계할 수 있음",
      "배달비, 가격, 리뷰 등을 직접 대조할 수 있음",
    ],
    risks: [
      "사용자에게 새로운 기능 학습을 요구함",
      "앱 전체 구조와 개발 범위가 커짐",
      "비교하지 않는 사용자에게 과한 기능이 될 수 있음",
    ],
    selected: false,
  },
];

const scenarioSteps = [
  {
    number: "01",
    title: "첫 번째 가게의 메뉴를 담습니다.",
    description:
      "기존과 동일하게 가게 상세 화면에서 메뉴를 선택하고 장바구니에 담습니다.",
  },
  {
    number: "02",
    title: "주문 의도에 따라 흐름이 나뉩니다.",
    description:
      "바로 주문하려는 사용자는 기존 장바구니 상세 화면으로 이동하고, 다른 후보를 더 보려는 사용자는 탐색을 계속합니다.",
  },
  {
    number: "03",
    title: "다른 가게의 메뉴를 추가합니다.",
    description:
      "기존 장바구니를 삭제하지 않고 새로운 가게의 장바구니를 별도의 후보로 저장합니다.",
  },
  {
    number: "04",
    title: "여러 장바구니를 한 화면에서 비교합니다.",
    description:
      "최종 가격, 할인 혜택, 평점과 리뷰, 배달 예정시간을 기준으로 최대 3개 안팎의 후보를 비교합니다.",
  },
  {
    number: "05",
    title: "한 가게를 선택해 결제로 이동합니다.",
    description:
      "비교가 끝난 뒤 선택한 가게의 기존 장바구니 상세 화면으로 이동해 주문을 완료합니다.",
  },
];

const designPrinciples = [
  {
    title: "비교 후보는 약 3개로 제한",
    description:
      "인터뷰에서 실제 고민하는 후보와 한 화면에서 보고 싶은 가게 수가 주로 3~4개로 나타났습니다.",
  },
  {
    title: "핵심 정보만 먼저 노출",
    description:
      "최종 가격, 할인 여부, 리뷰와 평점, 배달 예정시간을 우선 보여주고 세부 메뉴는 필요할 때 확인하도록 합니다.",
  },
  {
    title: "기존 결제 흐름은 유지",
    description:
      "새 비교 기능 안에서 결제를 완전히 바꾸지 않고, 선택 이후에는 기존 장바구니 상세 화면으로 연결합니다.",
  },
  {
    title: "비교하지 않는 사용자도 보호",
    description:
      "한 가게만 담은 사용자는 추가 단계를 거치지 않고 기존처럼 바로 결제할 수 있도록 분기합니다.",
  },
];

export default function ResearchSynthesis() {
  return (
    <>
      <section
        id="affinity-synthesis"
        className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <header className="mb-12 border-t border-zinc-200 pt-5">
          <p className="text-sm font-medium text-zinc-500">
            Interview Synthesis
          </p>

          <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            인터뷰 발화를 구조화해
            <br className="hidden sm:block" />
            비교 행동의 본질을 찾았습니다.
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            인터뷰 응답을 이용 행태, 비교 방식, 비교 요소, 페인포인트와
            니즈로 분류한 뒤 어피니티 다이어그램을 반복적으로
            재구성했습니다. 이를 통해 단순히 여러 가게를 담지 못하는
            문제가 아니라, 흩어진 정보를 기억하며 비교해야 하는 과정
            자체가 사용자에게 부담을 만든다는 점을 발견했습니다.
          </p>
        </header>

        <div className="space-y-12">
          <figure>
            <Image
              src="/images/baemin/04-affinity-01.png"
              alt="배달의민족 사용자 인터뷰 1차 어피니티 다이어그램"
              width={2400}
              height={1500}
              draggable={false}
              className="h-auto w-full rounded-3xl border border-zinc-200 bg-zinc-50 object-contain"
            />

            <figcaption className="mt-3 text-sm leading-6 text-zinc-500">
              인터뷰 원문을 이용 목적, 비교 방식, 비교 요소,
              페인포인트와 니즈를 기준으로 1차 분류했습니다.
            </figcaption>
          </figure>

          <figure>
            <Image
              src="/images/baemin/04-affinity-02.png"
              alt="배달의민족 사용자 인터뷰 보완 어피니티 다이어그램"
              width={2400}
              height={1500}
              draggable={false}
              className="h-auto w-full rounded-3xl border border-zinc-200 bg-zinc-50 object-contain"
            />

            <figcaption className="mt-3 text-sm leading-6 text-zinc-500">
              중복되거나 범위가 넓었던 항목을 재분류하고, 사용자
              행동과 페인포인트 사이의 관계를 보완했습니다.
            </figcaption>
          </figure>

          <figure>
            <Image
              src="/images/baemin/04-affinity-03.png"
              alt="배달의민족 사용자 인터뷰 2차 어피니티 다이어그램"
              width={2400}
              height={1500}
              draggable={false}
              className="h-auto w-full rounded-3xl border border-zinc-200 bg-zinc-50 object-contain"
            />

            <figcaption className="mt-3 text-sm leading-6 text-zinc-500">
              탐색저장형, 가격민감형, 연속주문형으로 사용자 행동을
              재구성하고 유형별 비교 방식과 니즈를 정리했습니다.
            </figcaption>
          </figure>

          <figure>
            <Image
              src="/images/baemin/04-user-type-matrix.png"
              alt="배달의민족 사용자 행동 유형과 관계를 정리한 표"
              width={2400}
              height={1500}
              draggable={false}
              className="h-auto w-full rounded-3xl border border-zinc-200 bg-zinc-50 object-contain"
            />

            <figcaption className="mt-3 text-sm leading-6 text-zinc-500">
              주문 목적과 비교 행동을 기준으로 탐색저장형,
              가격민감형, 연속주문형의 차이를 정리했습니다.
            </figcaption>
          </figure>
        </div>

        <div className="mt-16">
          <div className="max-w-4xl">
            <p className="text-sm font-medium text-zinc-500">
              Final Insights
            </p>

            <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              인터뷰 결과를 사용자 행동과
              <br className="hidden sm:block" />
              설계 기준으로 전환했습니다.
            </h3>

            <p className="mt-5 max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
              어피니티 다이어그램을 통해 개별 발화를 나열하는 데서
              그치지 않고, 반복되는 행동과 문제의 인과관계를
              정리했습니다. 이를 바탕으로 장바구니 비교 경험에 필요한
              핵심 설계 조건을 도출했습니다.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {finalInsights.map((insight, index) => (
              <article
                key={insight.title}
                className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="inline-flex rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600">
                    {insight.category}
                  </span>

                  <span className="text-sm font-medium text-zinc-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h4 className="mt-6 text-xl font-semibold leading-8 tracking-tight">
                  {insight.title}
                </h4>

                <p className="mt-4 text-sm leading-7 text-zinc-600">
                  {insight.description}
                </p>

                <div className="mt-6 border-t border-zinc-200 pt-5">
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-zinc-400">
                    Design Implication
                  </p>

                  <p className="mt-3 text-sm font-medium leading-7 text-zinc-800">
                    {insight.implication}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-3xl bg-zinc-950 p-6 text-white sm:p-8 lg:p-10">
            <p className="text-sm font-medium text-zinc-400">
              Core Opportunity
            </p>

            <p className="mt-5 max-w-4xl text-2xl font-semibold leading-9 tracking-tight sm:text-3xl sm:leading-10">
              더 많은 선택지를 제공하는 것이 아니라, 이미 탐색한
              후보를 적은 노력으로 비교하고 결정할 수 있게 해야
              합니다.
            </p>

            <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-300">
              사용자의 문제는 가게를 발견하지 못하는 것이
              아니었습니다. 가격, 할인, 리뷰, 배달시간이 서로 다른
              화면에 흩어져 있어 비교할 때마다 기억과 반복 탐색에
              의존해야 한다는 점이 핵심이었습니다.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {conceptInsights.map((concept) => (
              <article
                key={concept.label}
                className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8"
              >
                <p className="text-sm font-medium text-zinc-500">
                  {concept.label}
                </p>

                <h4 className="mt-4 text-xl font-semibold">
                  {concept.title}
                </h4>

                <p className="mt-4 text-sm leading-7 text-zinc-600">
                  {concept.description}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8">
            <p className="text-sm font-medium text-zinc-500">
              Research to Design
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-zinc-50 p-5">
                <p className="text-xs font-medium text-zinc-400">
                  01 · Candidate
                </p>

                <p className="mt-3 text-base font-semibold leading-6">
                  비교 후보는 약 3개
                </p>

                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  선택지를 무제한으로 늘리지 않고 실제 고민 범위
                  안에서 비교하도록 제한합니다.
                </p>
              </div>

              <div className="rounded-2xl bg-zinc-50 p-5">
                <p className="text-xs font-medium text-zinc-400">
                  02 · Information
                </p>

                <p className="mt-3 text-base font-semibold leading-6">
                  핵심 정보 우선 노출
                </p>

                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  최종 가격, 할인, 리뷰와 평점, 배달 예정시간을
                  우선적으로 비교합니다.
                </p>
              </div>

              <div className="rounded-2xl bg-zinc-50 p-5">
                <p className="text-xs font-medium text-zinc-400">
                  03 · Flow
                </p>

                <p className="mt-3 text-base font-semibold leading-6">
                  기존 결제 흐름 유지
                </p>

                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  비교가 끝나면 선택한 가게의 기존 장바구니 상세
                  화면으로 연결합니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="solution-direction"
        className="border-y border-zinc-200 bg-zinc-50"
      >
        <div className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
          <header className="mb-12">
            <p className="text-sm font-medium text-zinc-500">
              Solution Direction
            </p>

            <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              비교 기능을 어디에 두어야 할지
              <br className="hidden sm:block" />
              세 가지 방향을 검토했습니다.
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
              장바구니를 바로 개선하기 전에 찜 목록을 확장하거나
              새로운 비교 기능을 만드는 방향까지 검토했습니다. 각
              기능의 사용 맥락, 결제까지의 거리, 기존 기능 정체성과
              개발 범위를 함께 비교했습니다.
            </p>
          </header>

          <div className="grid gap-5 lg:grid-cols-3">
            {solutionCandidates.map((candidate) => (
              <article
                key={candidate.title}
                className={`relative rounded-3xl border p-6 sm:p-8 ${
                  candidate.selected
                    ? "border-zinc-950 bg-white"
                    : "border-zinc-200 bg-white"
                }`}
              >
                {candidate.selected && (
                  <span className="absolute right-5 top-5 rounded-full bg-zinc-950 px-3 py-1 text-xs font-medium text-white">
                    Selected
                  </span>
                )}

                <h3 className="pr-20 text-xl font-semibold">
                  {candidate.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-600">
                  {candidate.description}
                </p>

                <div className="mt-7">
                  <p className="text-sm font-semibold text-zinc-900">
                    장점
                  </p>

                  <ul className="mt-3 space-y-3">
                    {candidate.strengths.map((item) => (
                      <li
                        key={item}
                        className="text-sm leading-6 text-zinc-600"
                      >
                        + {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-7 border-t border-zinc-200 pt-6">
                  <p className="text-sm font-semibold text-zinc-900">
                    고려할 위험
                  </p>

                  <ul className="mt-3 space-y-3">
                    {candidate.risks.map((item) => (
                      <li
                        key={item}
                        className="text-sm leading-6 text-zinc-600"
                      >
                        − {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-3xl bg-white p-6 sm:p-8">
            <p className="text-sm font-medium text-zinc-500">
              Why Cart?
            </p>

            <h3 className="mt-4 max-w-3xl text-2xl font-semibold leading-9 tracking-tight">
              장바구니는 비교가 실제 주문으로 전환되는 가장 가까운
              지점이었습니다.
            </h3>

            <p className="mt-5 max-w-4xl text-base leading-7 text-zinc-600">
              찜은 장기적인 저장의 성격이 강하고, 별도 비교 기능은
              학습과 개발 부담이 컸습니다. 반면 인터뷰에서는 사용자가
              이미 장바구니를 후보 저장과 비교에 활용하고 있었습니다.
              이에 기존 결제 흐름을 유지하면서 여러 가게의 후보만
              보존하고 비교할 수 있도록 장바구니를 개선하는 방향을
              선택했습니다.
            </p>
          </div>
        </div>
      </section>

      <section
        id="depth-scenario"
        className="mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
      >
        <header className="mb-12 border-t border-zinc-200 pt-5">
          <p className="text-sm font-medium text-zinc-500">
            Depth Scenario
          </p>

          <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            비교가 필요한 경우에만
            <br className="hidden sm:block" />
            새로운 뎁스가 열리도록 설계했습니다.
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            모든 주문에 비교 단계를 강제하지 않았습니다. 한 가게만
            주문하는 사용자는 기존 흐름을 유지하고, 다른 가게를
            추가한 경우에만 여러 장바구니를 비교하는 화면으로
            진입하도록 시나리오를 분기했습니다.
          </p>
        </header>

        <div className="grid gap-4 lg:grid-cols-5">
          {scenarioSteps.map((step, index) => (
            <article
              key={step.number}
              className="relative rounded-3xl border border-zinc-200 bg-white p-6"
            >
              <p className="text-sm font-medium text-zinc-400">
                {step.number}
              </p>

              <h3 className="mt-5 text-lg font-semibold leading-7">
                {step.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-600">
                {step.description}
              </p>

              {index !== scenarioSteps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute -right-3 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white text-xs text-zinc-500 lg:flex"
                >
                  →
                </span>
              )}
            </article>
          ))}
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <article className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8">
            <p className="text-sm font-medium text-zinc-500">
              Direct Purchase
            </p>

            <h3 className="mt-4 text-xl font-semibold">
              고민이 끝난 사용자는 기존처럼 바로 결제합니다.
            </h3>

            <p className="mt-4 text-sm leading-7 text-zinc-600">
              첫 번째 장바구니를 담은 뒤 추가 탐색 없이 주문하려는
              경우에는 별도의 비교 화면을 거치지 않고 기존 장바구니
              상세 화면으로 이동합니다.
            </p>
          </article>

          <article className="rounded-3xl bg-zinc-950 p-6 text-white sm:p-8">
            <p className="text-sm font-medium text-zinc-400">
              Compare Before Purchase
            </p>

            <h3 className="mt-4 text-xl font-semibold">
              다른 후보를 추가한 경우에만 비교 화면이 열립니다.
            </h3>

            <p className="mt-4 text-sm leading-7 text-zinc-300">
              여러 장바구니를 유지한 채 후보를 비교하고, 최종 선택
              이후에는 선택한 가게의 기존 장바구니 상세 화면으로
              연결합니다.
            </p>
          </article>
        </div>

        <div className="mt-14">
          <p className="text-sm font-medium text-zinc-500">
            Design Principles
          </p>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {designPrinciples.map((principle) => (
              <article
                key={principle.title}
                className="rounded-3xl border border-zinc-200 bg-white p-6 sm:p-8"
              >
                <h3 className="text-xl font-semibold">
                  {principle.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-zinc-600">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}