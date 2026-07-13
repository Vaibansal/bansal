interface Props {
  quote: string;
  attribution: string;
  alt?: boolean;
}

const PullQuote = ({ quote, attribution, alt = false }: Props) => (
  <section className={`${alt ? 'bg-paper-2' : 'bg-paper'} py-16 md:py-20 px-6 border-y border-line`}>
    <div className="max-w-4xl mx-auto text-center animate-on-scroll">
      <p className="font-display text-2xl sm:text-3xl md:text-4xl text-ink leading-tight">
        &ldquo;{quote.split('.').map((part, i, arr) => {
          const trimmed = part.trim();
          if (!trimmed) return null;
          // italic-gold the last clause
          if (i === arr.length - 2) {
            return <span key={i} className="italic text-gold">{trimmed}.</span>;
          }
          return <span key={i}>{trimmed}{i < arr.length - 2 ? '. ' : ''}</span>;
        })}&rdquo;
      </p>
      <p className="eyebrow text-dim mt-6">— {attribution}</p>
    </div>
  </section>
);

export default PullQuote;
