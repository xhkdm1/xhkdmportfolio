const notMeasured = [
  "투뎁스와 아코디언 중 하나의 내부 구조 확정",
  "장바구니가 찜보다 더 적절한 해결 위치인지",
  "장바구니가 별도 비교 기능보다 더 적절한지",
  "실제 과업 완료 시간",
  "화면 재이동 횟수",
  "선택 오류와 복구",
  "실제 주문 상황에서의 구조 선택",
];

const confirmed = [
  "전반 선호는 투뎁스와 아코디언이 2명씩 나뉨",
  "비교 질문에서는 아코디언 4명",
  "설명 없이 사용할 구조 질문에서는 투뎁스 4명",
];

const followUp = [
  "과업 완료 시간",
  "화면 재이동 횟수",
  "선택 오류 및 복구",
  "최종 후보 선택 성공 여부",
];

export default function DecisionLimits() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <header className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">06 · Decision &amp; Limits</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.045em] text-zinc-950 sm:text-4xl lg:text-5xl">
            두 구조의 차이는 확인했지만,
            <br />
            하나를 선택할 근거는 부족했습니다.
          </h2>
        </header>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-600">
          한 구조가 모든 질문에서 선택되지 않았기 때문에, 현재 결과만으로
          최종 구조를 정하지 않았습니다. 장바구니 역시 찜이나 별도 비교
          기능보다 더 적절한 해결 위치인지 확인하지 못했습니다.
        </p>

        <div className="mt-12 grid border-y border-zinc-200 py-8 md:grid-cols-2">
          <div className="pb-8 md:pb-0 md:pr-10">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#008A95]">
              확인한 것
            </p>
            <ul className="mt-5 space-y-4">
              {confirmed.map((item) => (
                <li key={item} className="text-sm leading-6 text-zinc-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-zinc-200 pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-zinc-500">
              확인하지 못한 것
            </p>
            <ul className="mt-5 space-y-4">
              {notMeasured.map((item) => (
                <li key={item} className="text-sm leading-6 text-zinc-700">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-l-2 border-[#2AC1BC] bg-zinc-50 px-6 py-5">
          <p className="text-sm font-semibold text-zinc-900">검증 범위</p>
          <p className="mt-2 max-w-4xl text-sm leading-6 text-zinc-600">
            이번 테스트는 참여자의 인식과 선호를 확인한 콘셉트
            테스트입니다. 과업 시간, 이동 횟수, 오류율 등 실제 사용성
            성과는 측정하지 않았습니다.
          </p>
        </div>

        <div className="mt-12">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-400">
            후속 제안
          </p>
          <h3 className="mt-3 text-xl font-semibold tracking-[-0.025em] text-zinc-950">
            다음 검증에서 확인할 것
          </h3>
          <ol className="mt-6 grid border-t border-zinc-300 sm:grid-cols-2">
            {followUp.map((item, index) => (
              <li
                key={item}
                className={`flex gap-4 border-b border-zinc-200 py-4 text-sm leading-6 text-zinc-700 ${
                  index % 2 === 0 ? "sm:pr-6" : "sm:border-l sm:pl-6"
                }`}
              >
                <span className="font-semibold text-[#008A95]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
