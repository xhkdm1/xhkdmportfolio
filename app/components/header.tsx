import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-zinc-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
        <Link href="/" className="text-sm font-semibold tracking-tight">
          Home
        </Link>

        <nav className="flex gap-5 text-sm text-zinc-500">
          <Link href="/about" className="hover:text-zinc-900">
            About
          </Link>
          <Link href="/contact" className="hover:text-zinc-900">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}