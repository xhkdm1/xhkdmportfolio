const interviewParts = [
  { part: "Part 01", time: "10분", title: "도입 및 라포 형성", description: "참여자가 평소 배달앱을 사용하는 상황을 자연스럽게 설명하도록 대화를 시작했습니다." },
  { part: "Part 02", time: "15분", title: "이용 유형 파악", description: "배달 빈도, 주 이용 앱, 주문 상황과 결정 스타일을 바탕으로 탐색 행동을 파악했습니다." },
  { part: "Part 03", time: "30분", title: "기존 비교 행동 탐색", description: "장바구니 사용 방식, 반복 이동, 기억 의존과 주문 포기 경험을 유형별 분기 질문으로 확인했습니다." },
  { part: "Part 04", time: "40분", title: "A/B 콘셉트 테스트", description: "투뎁스와 아코디언 구조를 학습 비용, 정보 가시성과 비교 편의 관점에서 검증했습니다." },
  { part: "Part 05", time: "15분", title: "마무리", description: "최종 선호와 실제 사용 의향, 추가 우려사항을 확인했습니다." },
];

const participants = [
  { id: "P1", behavior: "여러 가게를 담아 가격, 리뷰와 이벤트를 비교하고 카테고리를 먼저 정한 뒤 탐색했습니다.", interpretation: "탐색저장 행동이 두드러짐" },
  { id: "P2", behavior: "추천 매장을 둘러보다 마음에 드는 곳을 선택하고, 없으면 처음 담은 곳에서 결제했습니다.", interpretation: "상대적으로 비교 강도가 낮음" },
  { id: "P3", behavior: "메뉴 이미지를 중심으로 탐색하고 비슷한 메뉴의 가격과 쿠폰 적용 여부를 비교했습니다.", interpretation: "가격민감 행동이 두드러짐" },
  { id: "P4", behavior: "약 30분 동안 담기와 삭제를 반복하며 가격, 리뷰와 쿠폰이 더 나은 가게를 비교했습니다.", interpretation: "연속주문형·강한 반복탐색 행동" },
];

const conceptResults = [
  { question: "전반적 선호", result: "투뎁스 2명 · 아코디언 2명", interpretation: "최종 선호는 한 방향으로 수렴하지 않았습니다." },
  { question: "비교 편의만 본다면", result: "아코디언 4명", interpretation: "여러 가게의 조건을 한 화면에서 확인하는 구조가 비교 목적에는 우세했습니다." },
  { question: "설명 없이 사용한다면", result: "투뎁스 4명", interpretation: "익숙한 화면 전환 방식이 초기 학습 비용 측면에서는 우세했습니다." },
  { question: "현재 배민과 어울리는가", result: "아코디언 우세", interpretation: "다만 참여자의 응답이 화면을 다시 볼 때마다 일부 달라졌습니다." },
];

export default function Interview() {
  return (
    <section className="bg-white px-5 py-24 sm:px-8 sm:py-32 lg:px-12 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
            Qualitative Research
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-zinc-950 sm:text-4xl lg:text-5xl">
            비교 행동이 언제 발생하고,
            <br />
            사용자가 무엇을 잃는지 인터뷰로 확인했습니다.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            참여자 4인을 대상으로 기존 배달 메뉴 탐색 행동과 장바구니 사용 경험을
            확인하고, 투뎁스와 아코디언 두 구조를 콘셉트 테스트했습니다.
          </p>
        </div>

        <div className="mt-14 space-y-0 border-y border-zinc-200">
          {interviewParts.map((item) => (
            <article
              key={item.part}
              className="grid gap-5 border-b border-zinc-200 py-7 last:border-b-0 sm:grid-cols-[7rem_6rem_1fr] sm:py-9"
            >
              <p className="text-sm font-semibold text-[#008A95]">{item.part}</p>
              <p className="text-sm font-medium text-zinc-400">{item.time}</p>
              <div>
                <h3 className="text-xl font-semibold tracking-[-0.025em] text-zinc-950">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-600">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] bg-zinc-950 p-7 text-white sm:p-9">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-400">
              Research Design
            </p>
            <h3 className="mt-5 text-2xl font-semibold tracking-[-0.035em]">
              인터뷰 전에는 4가지 행동 유형을 가설로 설정했습니다.
            </h3>
            <ul className="mt-7 space-y-3 text-sm leading-6 text-zinc-300">
              <li>• 즉시결정형</li>
              <li>• 탐색저장형</li>
              <li>• 연속주문형</li>
              <li>• 가격민감비교형</li>
            </ul>
            <p className="mt-7 text-sm leading-6 text-zinc-400">
              실제 참여자에게서는 순수한 즉시결정형이 관찰되지 않았고,
              이후 분석에서는 실제로 나타난 세 가지 패턴만 사용했습니다.
            </p>
          </div>

          <div className="flex min-h-[420px] items-center justify-center rounded-[2rem] border border-dashed border-zinc-300 bg-zinc-50 p-8">
            <p className="text-center text-sm font-medium leading-6 text-zinc-500">
              인터뷰 대본 · 분기 질문 · 실시간 라벨링
              <br />
              스크린샷 삽입 영역
            </p>
          </div>
        </div>

        <div className="mt-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
              Participant Findings
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.035em] text-zinc-950 sm:text-3xl">
              같은 비교 문제 안에서도 참여자의 탐색 강도와 기준은 달랐습니다.
            </h3>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {participants.map((participant) => (
              <article key={participant.id} className="rounded-3xl border border-zinc-200 p-7">
                <p className="text-sm font-semibold text-[#008A95]">{participant.id}</p>
                <p className="mt-4 text-base leading-7 text-zinc-700">{participant.behavior}</p>
                <div className="mt-6 rounded-2xl bg-[#F5FBFC] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#008A95]">
                    Researcher Interpretation
                  </p>
                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    {participant.interpretation}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 text-sm leading-6 text-zinc-500">
            ※ 위 유형은 참여자의 성격을 확정한 진단이 아니라, 인터뷰 중 관찰된
            행동 패턴을 연구자가 해석한 결과입니다.
          </p>
        </div>

        <div className="mt-24">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
              Concept Test
            </p>
            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.035em] text-zinc-950 sm:text-3xl">
              어떤 안이 더 좋은지가 아니라, 두 구조가 서로 다른 장점을 가진다는 결과가 나왔습니다.
            </h3>
          </div>

          <div className="mt-10 overflow-hidden rounded-[2rem] border border-zinc-200">
            {conceptResults.map((item, index) => (
              <article
                key={item.question}
                className={`grid gap-5 bg-white p-7 sm:grid-cols-[0.8fr_0.8fr_1.4fr] ${
                  index > 0 ? "border-t border-zinc-200" : ""
                }`}
              >
                <p className="text-sm font-semibold text-zinc-950">{item.question}</p>
                <p className="text-sm font-semibold text-[#008A95]">{item.result}</p>
                <p className="text-sm leading-6 text-zinc-600">{item.interpretation}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16 rounded-[2rem] border border-amber-200 bg-amber-50 p-7 sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-700">
            Research Insight
          </p>
          <h3 className="mt-5 max-w-4xl text-2xl font-semibold leading-9 tracking-[-0.035em] text-amber-950 sm:text-3xl">
            아코디언은 비교에는 유리했지만, 투뎁스는 첫 사용의 학습 부담이 더 낮았습니다.
          </h3>
          <p className="mt-5 max-w-3xl text-base leading-7 text-amber-900/75">
            결과가 한 방향으로 수렴하지 않았기 때문에 두 구조 중 하나를 즉시 최종안으로
            확정하지 않고, 이후 정량 설문을 통해 비교 상태를 유지하는 흐름 자체의 필요성을
            추가로 검증했습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
