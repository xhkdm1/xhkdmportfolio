const deskFlow = [
  "가게 탐색",
  "메뉴 확인",
  "장바구니 담기",
  "다른 후보 탐색",
  "이전 후보 다시 확인",
];

const researchReferences = [
  {
    source: "국내 배달 플랫폼",
    examples: "쿠팡이츠 · 요기요 · 배달특급 · 땡겨요",
    focus: "장바구니 구조와 여러 후보를 유지하는 방식",
    impact: "주문 흐름 안에서 후보를 남기는 방법을 살폈습니다.",
  },
  {
    source: "상품·조건 비교 UI",
    examples: "다나와 · 애플스토어 · 에이블리 · 지그재그",
    focus: "후보를 유지하고 같은 기준으로 차이를 확인하는 방식",
    impact: "장바구니 밖에 비교 공간을 둘 가능성도 함께 살폈습니다.",
  },
];

const interviewFocus = [
  "후보를 어떤 순서로 탐색하는지",
  "이전 후보 정보를 어떻게 기억하거나 다시 확인하는지",
  "장바구니를 언제 사용하는지",
  "가격·리뷰·혜택 중 어떤 조건을 비교하는지",
];

const hypothesisTypes = [
  "즉시결정형",
  "탐색저장형",
  "연속주문형",
  "가격민감비교형",
];

const evidence = [
  {
    summary:
      "여러 가게를 담아 가격, 리뷰와 이벤트를 비교한 뒤 카테고리를 정하고 탐색했습니다.",
    observation: "후보를 모아두고 조건을 비교하는 행동",
  },
  {
    summary:
      "메뉴 이미지를 중심으로 살펴보고 비슷한 메뉴의 가격과 쿠폰 적용 여부를 비교했습니다.",
    observation: "같은 메뉴에서도 가격과 혜택을 대조하는 행동",
  },
  {
    summary:
      "약 30분 동안 담기와 삭제를 반복하며 가격, 리뷰와 쿠폰이 더 나은 가게를 비교했습니다.",
    observation: "장바구니와 가게 화면을 오가며 후보를 다시 확인하는 행동",
  },
];

const synthesisRows = [
  {
    evidence: "가격·리뷰·이벤트를 비교하며 여러 후보를 탐색",
    synthesis: "후보를 다시 찾고 조건을 대조하는 과정이 반복됨",
    question: "이전 후보를 유지한 채 다른 후보를 살펴볼 수 있을까?",
  },
  {
    evidence: "메뉴를 담아두거나 삭제한 뒤 다른 후보를 확인",
    synthesis: "장바구니가 결제 전 후보를 남기는 용도로도 사용됨",
    question: "비교 상태를 장바구니 안에 두는 것이 적절할까?",
  },
  {
    evidence: "비슷한 메뉴의 가격과 쿠폰 적용 여부를 대조",
    synthesis: "후보마다 여러 조건을 오가며 확인함",
    question: "후보를 비교할 때 어떤 정보를 함께 보여줄까?",
  },
];

const takeawayQuestions = [
  "이전 후보를 유지한 채 다른 후보를 살펴볼 수 있을까?",
  "비교 상태는 장바구니, 찜, 별도 공간 중 어디에 두는 것이 적절할까?",
  "비교가 필요하지 않은 사용자에게 새로운 흐름이 방해가 되지는 않을까?",
];

export default function Research() {
  return (
    <section className="bg-zinc-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto w-full max-w-5xl">
        <header className="max-w-4xl">
          <p className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-500">03 · Research</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.045em] text-zinc-950 sm:text-4xl lg:text-5xl">
            리뷰만으로 판단하기 어려워,
            <br />
            주문 전 비교 행동을 인터뷰에서 확인했습니다.
          </h2>
            <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            기존 장바구니에서 이전 선택을 유지하기 어려운 상황만으로 사용자
            문제를 단정하지 않았습니다. 앱 리뷰와 유사 서비스, 인터뷰와
            설문을 통해 실제 주문 전 비교 행동을 살폈습니다.
          </p>
        </header>

        <div className="mt-12">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#008A95]">
            A · Desk Research
          </p>
          <h3 className="mt-4 max-w-3xl text-2xl font-semibold leading-9 tracking-[-0.035em] text-zinc-950 sm:text-3xl">
            기존 장바구니와 비교 경험이
            <br />
            어디에서 막히는지 먼저 살폈습니다.
          </h3>

          <ol className="mt-8 flex flex-col border-y border-zinc-200 py-5 sm:flex-row sm:items-center">
            {deskFlow.map((step, index) => (
              <li
                key={step}
                className="flex items-center text-sm leading-6 text-zinc-700"
              >
                <span>{step}</span>
                {index < deskFlow.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="px-3 py-2 text-[#008A95] sm:py-0"
                  >
                    →
                  </span>
                )}
              </li>
            ))}
          </ol>

          <div className="mt-8 grid overflow-hidden rounded-2xl border border-zinc-200 bg-white md:grid-cols-2 md:divide-x md:divide-zinc-200">
            {researchReferences.map((item) => (
              <article key={item.source} className="border-b border-zinc-200 p-5 last:border-b-0 md:border-b-0">
                <p className="text-sm font-medium text-zinc-900">{item.source}</p>
                <p className="mt-2 text-xs leading-5 text-zinc-500">
                  {item.examples}
                </p>
                <p className="mt-4 text-sm leading-6 text-zinc-700">
                  {item.focus}
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  {item.impact}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8 border-l-2 border-[#2AC1BC] pl-5">
            <p className="text-sm font-medium text-zinc-950">
              앱 리뷰 약 280건
            </p>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-600">
              다중 장바구니에 대한 직접적인 불만은 확인하지 못했습니다.
              기능 부재만으로 문제를 확정하지 않고, 실제 주문 과정에서
              후보를 어떻게 비교하는지 인터뷰에서 추가로 살폈습니다.
            </p>
          </div>
        </div>

        <div className="mt-14">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#008A95]">
            B · Interview Setup
          </p>
          <h3 className="mt-4 max-w-3xl text-2xl font-semibold leading-9 tracking-[-0.035em] text-zinc-950 sm:text-3xl">
            기능을 원하는지보다,
            <br />
            주문 전에 어떤 비교를 하는지 살폈습니다.
          </h3>

          <div className="mt-6 grid gap-6 border-y border-zinc-200 py-6 md:grid-cols-[0.35fr_1fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-zinc-400">
                Participants
              </p>
              <p className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#008A95]">
                4명
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-zinc-400">
                확인한 행동
              </p>
              <ul className="mt-3 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {interviewFocus.map((item) => (
                  <li
                    key={item}
                    className="border-t border-zinc-200 pt-3 text-sm leading-6 text-zinc-700"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6">
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-zinc-400">
              인터뷰 전 가설
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {hypothesisTypes.map((type) => (
                <span
                  key={type}
                  className="rounded-full border border-zinc-300 bg-white px-3 py-1.5 text-sm text-zinc-700"
                >
                  {type}
                </span>
              ))}
            </div>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-500">
              네 항목은 인터뷰를 준비하며 세운 행동 유형 가설이며, 확정된
              사용자 유형이나 페르소나가 아닙니다.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#008A95]">
            C · Interview Evidence
          </p>
          <h3 className="mt-4 max-w-3xl text-2xl font-semibold leading-9 tracking-[-0.035em] text-zinc-950 sm:text-3xl">
            참여자가 설명한 주문 과정에서
            <br />
            비교가 반복되는 장면을 확인했습니다.
          </h3>

          <div className="mt-8 border-t border-zinc-300">
            {evidence.map((item, index) => (
              <article
                key={item.summary}
                className="grid gap-4 border-b border-zinc-200 py-6 md:grid-cols-[5rem_1.25fr_0.75fr]"
              >
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-zinc-400">
                  Evidence {String(index + 1).padStart(2, "0")}
                </p>
                <p className="text-base leading-7 text-zinc-800">
                  {item.summary}
                </p>
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.12em] text-[#008A95]">
                    관찰
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-600">
                    {item.observation}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 border-l-2 border-zinc-300 pl-5">
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-zinc-400">
              Different Pattern
            </p>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-600">
              모든 참여자에게 비교 필요가 같은 강도로 나타난 것은
              아니었습니다. 추천 매장을 둘러보다 마음에 드는 곳을 고르고,
              적절한 후보가 없으면 처음 담은 곳에서 결제한 사례도
              있었습니다.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#008A95]">
            D · Affinity Synthesis
          </p>
          <h3 className="mt-4 max-w-3xl text-2xl font-semibold leading-9 tracking-[-0.035em] text-zinc-950 sm:text-3xl">
            인터뷰 기록을 행동과 판단으로 묶어
            <br />
            다음 설계 질문을 정리했습니다.
          </h3>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-zinc-500">
            인터뷰 기록과 Affinity Diagram에서 반복된 행동을 중심으로
            정리했습니다.
          </p>

          <div className="mt-8 border-t border-zinc-300">
            <div className="hidden grid-cols-[1fr_1fr_1fr] border-b border-zinc-200 py-3 text-xs font-medium uppercase tracking-[0.1em] text-zinc-400 md:grid">
              <span>인터뷰에서 확인한 행동</span>
              <span className="pl-6">반복 행동에서 본 의미</span>
              <span className="pl-6">이어진 설계 질문</span>
            </div>
            {synthesisRows.map((row) => (
              <div
                key={row.evidence}
                className="grid gap-5 border-b border-zinc-200 py-6 md:grid-cols-[1fr_1fr_1fr]"
              >
                <div>
                  <p className="text-xs font-medium uppercase tracking-[0.1em] text-zinc-400 md:hidden">
                    인터뷰에서 확인한 행동
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-700 md:mt-0">
                    {row.evidence}
                  </p>
                </div>
                <div className="border-t border-zinc-100 pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0">
                  <p className="text-xs font-medium uppercase tracking-[0.1em] text-zinc-400 md:hidden">
                    반복 행동에서 본 의미
                  </p>
                  <p className="mt-2 text-sm leading-6 text-zinc-700 md:mt-0">
                    {row.synthesis}
                  </p>
                </div>
                <div className="border-t border-zinc-100 pt-4 md:border-l md:border-t-0 md:pl-6 md:pt-0">
                  <p className="text-xs font-medium uppercase tracking-[0.1em] text-[#008A95]">
                    설계 질문
                  </p>
                  <p className="mt-2 text-sm font-medium leading-6 text-zinc-900">
                    {row.question}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-[#008A95]">
            E · Survey
          </p>
          <div className="mt-4 grid gap-6 border-y border-zinc-200 py-7 md:grid-cols-[0.35fr_1fr] md:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-zinc-400">
                Participants
              </p>
              <p className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#008A95]">
                23명
              </p>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-zinc-400">
                추가로 확인한 내용
              </p>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-zinc-700">
                인터뷰에서 확인한 비교 행동과 기능 필요를 정량 설문에서
                추가로 살폈습니다.
              </p>
            </div>
            <div className="grid gap-6 border-t border-zinc-200 pt-6 md:col-span-2 lg:grid-cols-2">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-zinc-400">
                  Question
                </p>
                <p className="mt-3 text-sm leading-6 text-zinc-700">
                  두 개 이상의 가게 메뉴를 비교할 때, 기존 장바구니를 비우는
                  흐름과 여러 가게의 장바구니를 유지하는 흐름 중 어느 쪽을
                  선호하는지 물었습니다.
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-400">
                  Result
                </p>
                <p className="mt-3 text-sm font-semibold leading-6 text-zinc-900">
                  해당 문항 응답자 22명 중 21명(95.5%)이 여러 가게의
                  장바구니를 유지하는 흐름을 선택했습니다.
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  반면 1명은 선택지가 많아질 경우 오히려 결정 부담이 커질 수
                  있다고 응답했습니다.
                </p>
                <p className="mt-2 text-sm leading-6 text-zinc-500">
                  비교 상태를 유지하는 방향은 이어가되, 정보량과 선택 부담을
                  줄이는 구조가 필요하다고 보고 두 가지 장바구니 구조를
                  비교했습니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#008A95]">
            F · Analysis Shift
          </p>
          <h3 className="mt-4 max-w-3xl text-2xl font-semibold leading-9 tracking-[-0.035em] text-zinc-950 sm:text-3xl">
            처음 세운 유형에 맞추기보다,
            <br />
            반복된 행동과 기능 필요를 중심으로 다시 살폈습니다.
          </h3>

          <div className="mt-6 grid gap-5 border-y border-zinc-200 py-6 md:grid-cols-[1fr_auto_1fr] md:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-zinc-400">
                인터뷰 전
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-700">
                네 가지 행동 유형을 가설로 준비했습니다.
              </p>
            </div>
            <span aria-hidden="true" className="text-[#008A95]">
              →
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#008A95]">
                인터뷰 후
              </p>
              <p className="mt-3 text-sm leading-6 text-zinc-700">
                유형을 다시 확정하기보다, 연속주문형과 탐색·저장형에서
                장바구니 기능 필요가 크게 나타난 흐름을 주요 검토 대상으로
                두었습니다.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#008A95]">
            G · Research Takeaway
          </p>
          <h3 className="mt-4 max-w-3xl text-2xl font-semibold leading-9 tracking-[-0.035em] text-zinc-950 sm:text-3xl">
            해결안을 정하기 전에
            <br />
            세 가지 질문을 남겼습니다.
          </h3>
          <ol className="mt-6 border-t border-zinc-300">
            {takeawayQuestions.map((question, index) => (
              <li
                key={question}
                className="grid gap-3 border-b border-zinc-200 py-5 sm:grid-cols-[3rem_1fr] sm:items-center"
              >
                <span className="text-sm font-semibold text-[#008A95]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-lg font-medium leading-7 text-zinc-900">
                  {question}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
