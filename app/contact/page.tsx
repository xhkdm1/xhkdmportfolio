export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white px-4 py-24 text-zinc-950">
      <div className="mx-auto max-w-5xl">

        <p className="mb-4 text-sm text-zinc-500">
          Contact
        </p>

        <h1 className="mb-3 text-xl font-semibold tracking-tight">
          박혜진
        </h1>

        <p className="mb-16 text-lg text-zinc-600">
          Product Designer
        </p>

        <div className="space-y-10">

          <div>
            <p className="mb-2 text-sm text-zinc-500">
              Email
            </p>

            <a
              href="mailto:xhkdm1116@naver.com"
              className="text-2xl font-medium transition hover:text-zinc-950"
            >
              xhkdm1116@naver.com
            </a>
          </div>

          <div>
            <p className="mb-2 text-sm text-zinc-500">
              Location
            </p>

            <p className="text-2xl text-zinc-700">
              Seoul, South Korea
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}