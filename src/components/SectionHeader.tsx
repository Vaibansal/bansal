interface Props {
  index: string;
  label: string;
  className?: string;
}

const SectionHeader = ({ index, label, className = '' }: Props) => (
  <div className={`animate-on-scroll flex items-center gap-4 mb-10 ${className}`}>
    <span className="font-mono-plex text-[11px] tracking-[0.2em] text-gold uppercase">{index}</span>
    <span className="font-mono-plex text-[11px] tracking-[0.2em] text-ink uppercase">— {label}</span>
    <span className="flex-1 h-px bg-[hsl(var(--line))]" />
  </div>
);

export default SectionHeader;
