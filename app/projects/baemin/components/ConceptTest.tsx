const concepts = [
  {
    label: "Improvement A",
    title: "투뎁스 구조",
    subtitle: "목록에서 가게를 선택한 뒤 상세 장바구니로 이동",
    description:
      "여러 가게의 장바구니를 목록으로 유지하되, 결제할 가게를 선택하면 해당 가게의 상세 장바구니로 이동하는 구조입니다.",
    strengths: [
      "기존 장바구니 흐름과 유사해 처음 접해도 이해하기 쉽습니다.",
      "현재 선택한 가게의 메뉴와 결제 정보에 집중할 수 있습니다.",
      "한 화면에 노출되는 정보량이 적어 구조가 단순합니다.",
    ],
    limitations: [
      "다른 가게와 비교하려면 목록과 상세 화면을 반복해서 이동해야 합니다.",
      "여러 가게의 가격과 조건을 동시에 확인하기 어렵습니다.",
      "비교 과정에서 이전 정보를 기억해야 하는 부담이 일부 남습니다.",
    ],
    result: "설명 없이 사용한다면 4명 전원 선호",
    resultLabel: "Lower learning cost",
    href: "https://error-gadget-51476136.figma.site/",
    buttonLabel: "개선안 A 직접 보기",
  },
  {
    label: "Improvement B",
    title: "아코디언 구조",
    subtitle: "여러 가게를 한 화면에서 펼치고 접으며 비교",
    description:
      "담아둔 여러 가게를 하나의 장바구니 화면에 유지하고, 각 영역을 펼치거나 접으며 메뉴와 금액을 비교하는 구조입니다.",
    strengths: [
      "여러 가게의 메뉴와 주문 조건을 같은 화면에서 확인할 수 있습니다.",
      "화면 이동 없이 비교와 결제 선택을 이어갈 수 있습니다.",
      "사용자가 담아둔 후보와 비교 상태가 계속 유지됩니다.",
    ],
    limitations: [
      "여러 가게가 동시에 노출돼 화면의 정보량이 많아질 수 있습니다.",
      "기존 배민 장바구니와 다른 구조라 첫 사용 시 학습이 필요합니다.",
      "가게 수가 많아질수록 화면이 길어지고 선택 피로가 커질 수 있습니다.",
    ],
    result: "비교 관점에서는 4명 전원 선호",
    resultLabel: "Better comparison",
    href: "https://upbeat-gizmo-67857376.figma.site/",
    buttonLabel: "개선안 B 직접 보기",
  },
];

const comparisonRows = [
  {
    criterion: "기본 구조",
    conceptA: "가게 목록 → 상세 장바구니",
    conceptB: "한 화면에서 펼침·접힘",
  },
  {
    criterion: "비교 방식",
    conceptA: "화면을 이동하며 확인",
    conceptB: "같은 화면에서 동시 확인",
  },
  {
    criterion: "정보 가시성",
    conceptA: "현재 선택한 가게에 집중",
    conceptB: "여러 가게의 조건을 함께 확인",
  },
  {
    criterion: "학습 비용",
    conceptA: "상대적으로 낮음",
    conceptB: "상대적으로 높음",
  },
  {
    criterion: "비교 편의",
    conceptA: "상대적으로 낮음",
    conceptB: "상대적으로 높음",
  },
  {
    criterion: "전반적 선호",
    conceptA: "2명",
    conceptB: "2명",
  },
];

const testResults = [
  {
    question: "전반적으로 더 선호하는 구조는?",
    result: "A 2명 · B 2명",
    insight: "최종 선호는 한 방향으로 수렴하지 않았습니다.",
  },
  {
    question: "가게를 비교하는 목적만 본다면?",
    result: "B 4명",
    insight:
      "한 화면에서 여러 가게의 조건을 확인할 수 있는 아코디언 구조가 우세했습니다.",
  },
  {
    question: "별도의 설명 없이 사용한다면?",
    result: "A 4명",
    insight:
      "익숙한 목록과 상세 화면의 흐름이 초기 학습 비용 측면에서 우세했습니다.",
  },
  {
    question: "현재 배민 서비스와 더 어울리는 구조는?",
    result: "B 우세",
    insight:
      "다만 화면을 다시 확인하는 과정에서 일부 참여자의 의견이 달라졌습니다.",
  },
];

export default function ConceptTest() {
  return (
    <section
      id="concept-test"
      className="bg-zinc-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <header className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
            Concept Test
          </p>

          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.045em] text-zinc-950 sm:text-4xl lg:text-5xl">
            비교 상태를 유지하는 방법을
            <br />
            두 가지 구조로 나누어 검증했습니다.
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            두 개선안 모두 여러 가게의 메뉴를 장바구니에 유지한다는 동일한
            전제에서 출발했습니다. 차이는 가게별 정보를 분리해 보여줄지,
            한 화면에서 펼쳐 보여줄지에 있었습니다.
          </p>
        </header>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {concepts.map((concept, index) => (
            <article
              key={concept.label}
              className="overflow-hidden rounded-[2rem] border border-zinc-200 bg-white"
            >
              <div
                className={`p-7 sm:p-9 ${
                  index === 0
                    ? "bg-zinc-950 text-white"
                    : "bg-[#2AC1BC] text-white"
                }`}
              >
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-white/65">
                  {concept.label}
                </p>

                <h3 className="mt-4 text-3xl font-semibold tracking-[-0.04em]">
                  {concept.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/75">
                  {concept.subtitle}
                </p>

                <div className="mt-8 flex aspect-[16/10] items-center justify-center rounded-3xl border border-dashed border-white/25 bg-white/10">
                  <p className="text-center text-sm leading-6 text-white/65">
                    {concept.title} 대표 화면
                    <br />
                    프로토타입 캡처 삽입 영역
                  </p>
                </div>
              </div>

              <div className="p-7 sm:p-9">
                <p className="text-base leading-7 text-zinc-600">
                  {concept.description}
                </p>

                <div className="mt-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#008A95]">
                    Strengths
                  </p>

                  <ul className="mt-4 space-y-3">
                    {concept.strengths.map((strength) => (
                      <li
                        key={strength}
                        className="flex gap-3 text-sm leading-6 text-zinc-700"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2AC1BC]"
                          aria-hidden="true"
                        />
                        <span>{strength}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
                    Limitations
                  </p>

                  <ul className="mt-4 space-y-3">
                    {concept.limitations.map((limitation) => (
                      <li
                        key={limitation}
                        className="flex gap-3 text-sm leading-6 text-zinc-600"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-zinc-300"
                          aria-hidden="true"
                        />
                        <span>{limitation}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 rounded-2xl bg-zinc-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
                    {concept.resultLabel}
                  </p>

                  <p className="mt-2 text-lg font-semibold tracking-[-0.02em] text-zinc-950">
                    {concept.result}
                  </p>
                </div>

                <a
                  href={concept.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-8 inline-flex items-center rounded-full px-5 py-3 text-sm font-semibold text-white transition ${
                    index === 0
                      ? "bg-zinc-950 hover:bg-zinc-800"
                      : "bg-[#2AC1BC] hover:bg-[#20AAA6]"
                  }`}
                >
                  {concept.buttonLabel} ↗
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
              Structure Comparison
            </p>

            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.035em] text-zinc-950 sm:text-3xl">
              두 개선안은 같은 문제를 해결하지만,
              서로 다른 사용성을 우선했습니다.
            </h3>
          </div>

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-zinc-200 bg-white">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left">
                <thead className="bg-zinc-950 text-white">
                  <tr>
                    <th className="px-6 py-5 text-sm font-semibold">비교 기준</th>
                    <th className="px-6 py-5 text-sm font-semibold">
                      A · 투뎁스
                    </th>
                    <th className="px-6 py-5 text-sm font-semibold">
                      B · 아코디언
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {comparisonRows.map((row) => (
                    <tr
                      key={row.criterion}
                      className="border-t border-zinc-200"
                    >
                      <th className="px-6 py-5 text-sm font-semibold text-zinc-950">
                        {row.criterion}
                      </th>
                      <td className="px-6 py-5 text-sm leading-6 text-zinc-600">
                        {row.conceptA}
                      </td>
                      <td className="px-6 py-5 text-sm leading-6 text-zinc-600">
                        {row.conceptB}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
              Interview Results
            </p>

            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.035em] text-zinc-950 sm:text-3xl">
              질문의 관점에 따라 참여자의 선택이 달라졌습니다.
            </h3>
          </div>

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-zinc-200 bg-white">
            {testResults.map((item, index) => (
              <article
                key={item.question}
                className={`grid gap-5 p-7 sm:grid-cols-[1fr_0.55fr_1.35fr] sm:p-8 ${
                  index > 0 ? "border-t border-zinc-200" : ""
                }`}
              >
                <p className="text-sm font-semibold leading-6 text-zinc-950">
                  {item.question}
                </p>

                <p className="text-sm font-semibold leading-6 text-[#008A95]">
                  {item.result}
                </p>

                <p className="text-sm leading-6 text-zinc-600">
                  {item.insight}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] bg-zinc-950 p-7 text-white sm:p-10 lg:p-14">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-400">
            Decision
          </p>

          <h3 className="mt-5 max-w-5xl text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl">
            비교에는 B가 유리했지만,
            첫 사용의 이해도에서는 A가 유리했습니다.
          </h3>

          <p className="mt-6 max-w-4xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
            인터뷰 결과는 하나의 정답으로 수렴하지 않았습니다. 전반적
            선호는 2대 2로 갈렸고, 비교 목적과 학습 비용이라는 평가
            기준에 따라 결과가 반대로 나타났습니다. 따라서 특정 안을
            성급하게 최종안으로 확정하기보다, 두 구조가 가진
            트레이드오프를 확인하는 데 의미를 두었습니다.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">
                What B did better
              </p>

              <p className="mt-3 text-lg font-semibold text-white">
                여러 가게의 조건을 한 화면에서 비교
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">
                What A did better
              </p>

              <p className="mt-3 text-lg font-semibold text-white">
                별도 설명 없이도 이해하기 쉬운 흐름
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[2rem] border border-amber-200 bg-amber-50 p-7 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-700">
            Research Boundary
          </p>

          <p className="mt-4 max-w-4xl text-base leading-7 text-amber-950/80">
            이 테스트는 참여자의 인식과 선호를 확인한 콘셉트 테스트입니다.
            실제 과업 수행 시간, 화면 이동 횟수, 오류율이나 결제 완료율을
            측정한 사용성 테스트는 아니므로 두 구조의 성과를 확정적으로
            판단하지 않았습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
