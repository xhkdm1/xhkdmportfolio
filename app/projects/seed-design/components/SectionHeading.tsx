type Props = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
}: Props) {
  return (
    <header className="mb-10 border-t border-zinc-200 pt-5 md:mb-12">
      <p className="text-sm font-medium text-[#E85D00]">
        {index} · {eyebrow}
      </p>
      <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
          {description}
        </p>
      )}
    </header>
  );
}
