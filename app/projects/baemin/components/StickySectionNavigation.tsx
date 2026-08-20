"use client";

type NavigationItem = {
  id: string;
  label: string;
};

type Props = {
  items: NavigationItem[];
};

export default function StickySectionNavigation({ items }: Props) {
  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    event.preventDefault();

    const target = document.getElementById(id);

    if (!target) return;

    const headerOffset = 128;
    const targetPosition =
      target.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  return (
    <nav className="sticky top-16 z-30 border-y border-zinc-200 bg-white/95 backdrop-blur">
      <div className="mx-auto w-full max-w-5xl overflow-x-auto px-5 sm:px-8 lg:px-12">
        <ul className="flex min-w-max items-center gap-8 py-5">
          {items.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(event) => scrollToSection(event, item.id)}
                className="whitespace-nowrap text-sm font-medium text-zinc-600 transition hover:text-[#008A95]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}