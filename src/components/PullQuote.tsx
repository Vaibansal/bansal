interface Props {
  quote: string;
  attribution: string;
  alt?: boolean;
}

const PullQuote = ({ quote, attribution, alt = false }: Props) => {
  const parts = quote.split('.').map((s) => s.trim()).filter(Boolean);

  return (
    <section className={`${alt ? 'bg-paper-2' : 'bg-paper'} py-16 md:py-20 px-6 border-y border-line`}>
      <div className="max-w-4xl mx-auto text-center animate-on-scroll">
        <p className="font-display text-2xl sm:text-3xl md:text-4xl text-ink leading-tight">
          &ldquo;{parts.flatMap((part, i) => {
            const isLast = i === parts.length - 1;
            const node = (
              <span key={i} className={isLast ? 'italic text-gold' : ''}>
                {part}
                {!isLast ? '.' : ''}
              </span>
            );
            return isLast ? [node] : [node, ' '];
          })}&rdquo;
        </p>
        <p className="eyebrow text-dim mt-6 !normal-case">— {attribution}</p>
      </div>
    </section>
  );
};

export default PullQuote;
