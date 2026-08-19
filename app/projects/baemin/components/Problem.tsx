export default function Problem() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-zinc-500">
            02 · Problem
          </p>

          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-[-0.045em] text-zinc-950 sm:text-4xl lg:text-5xl">
            다른 후보를 살펴보는 동안
            <br />
            이전 선택을 유지하기 어려웠습니다.
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
            한 가게의 메뉴를 담은 뒤 다른 후보를 살펴보려면 이전 선택을
            남겨둔 채 주문 조건을 나란히 확인하기 어려웠습니다. 문제의
            초점을 기능의 부재보다 비교 상태가 이어지지 않는 상황에 두었습니다.
          </p>
        </div>

        <div className="mt-16 border-t-2 border-[#2AC1BC] py-8 sm:py-10">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#008A95]">
            Problem Definition
          </p>

          <h3 className="mt-5 max-w-4xl text-2xl font-medium leading-[1.3] tracking-[-0.035em] text-zinc-950 sm:text-3xl lg:text-4xl">
            이전 선택을 지우지 않고
            <br />
            여러 후보의 주문 조건을 비교할 수 있을까?
          </h3>
        </div>
      </div>
    </section>
  );
}
