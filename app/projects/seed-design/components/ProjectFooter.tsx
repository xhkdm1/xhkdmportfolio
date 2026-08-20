import Link from "next/link";

export default function ProjectFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
        <div>
          <p className="text-sm text-zinc-500">Back to projects</p>
          <p className="mt-1 text-xl font-semibold">
            제품 설계와 시스템 구현 프로젝트
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <a
            href="#top"
            className="inline-flex items-center rounded-full bg-zinc-100 px-5 py-3 text-sm font-medium text-zinc-700"
          >
            Back to top
          </a>
          <Link
            href="/"
            className="inline-flex items-center rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white"
          >
            View all projects →
          </Link>
        </div>
      </div>
    </footer>
  );
}
