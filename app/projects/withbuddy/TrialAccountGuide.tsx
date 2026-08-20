export default function TrialAccountGuide() {
  return (
    <details className="mt-6 rounded-3xl border border-zinc-200 bg-zinc-50 p-6 open:bg-white sm:p-7">
      <summary className="cursor-pointer font-medium">체험 계정 안내</summary>
      <div className="cursor-text">
        <p className="mt-4 max-w-3xl text-sm leading-6 text-zinc-600">
          WithBuddy는 회사 계정으로 로그인하는 서비스입니다. 아래 체험
          계정으로 신입사원과 관리자 화면을 각각 확인할 수 있습니다.
        </p>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-zinc-200 bg-white p-5">
            <p className="font-semibold">신입사원</p>
            <dl className="mt-4 grid grid-cols-[5rem_1fr] gap-y-2 text-sm">
              <dt className="text-zinc-500">회사코드</dt>
              <dd>WB0001</dd>
              <dt className="text-zinc-500">사원명</dt>
              <dd>박재범</dd>
              <dt className="text-zinc-500">사원번호</dt>
              <dd>123456</dd>
            </dl>
            <p className="mt-5 text-sm leading-6 text-zinc-600">
              질문 시작 · AI 답변 · 답변 출처 · 답변 실패/범위 밖 · 대화 기록
            </p>
          </article>
          <article className="rounded-2xl border border-zinc-200 bg-white p-5">
            <p className="font-semibold">관리자</p>
            <dl className="mt-4 grid grid-cols-[5rem_1fr] gap-y-2 text-sm">
              <dt className="text-zinc-500">회사코드</dt>
              <dd>WB0003</dd>
              <dt className="text-zinc-500">사원명</dt>
              <dd>우원재</dd>
              <dt className="text-zinc-500">사원번호</dt>
              <dd>123456</dd>
            </dl>
            <p className="mt-5 text-sm leading-6 text-zinc-600">
              Dashboard · 문서 관리 · 계정 관리 · 미답변 질문 · 상태/Validation
            </p>
          </article>
        </div>
      </div>
    </details>
  );
}
