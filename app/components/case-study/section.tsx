type CaseStudySectionProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  children: React.ReactNode;
};

export default function CaseStudySection({
  eyebrow,
  title,
  description,
  children,
}: CaseStudySectionProps) {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-6xl px-6">
        {(eyebrow || title || description) && (
          <div className="mb-12 max-w-3xl">
            {eyebrow && (
              <p className="mb-4 text-sm font-medium text-zinc-500">
                {eyebrow}
              </p>
            )}

            {title && (
              <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
                {title}
              </h2>
            )}

            {description && (
              <p className="mt-5 text-lg leading-relaxed text-zinc-600">
                {description}
              </p>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}