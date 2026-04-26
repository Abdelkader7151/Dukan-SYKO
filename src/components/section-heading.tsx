type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">{eyebrow}</p>
      <h1 className="font-brand mt-3 text-5xl tracking-[0.07em] text-red-500 sm:text-6xl lg:text-7xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-300">
          {description}
        </p>
      ) : null}
    </div>
  );
}

