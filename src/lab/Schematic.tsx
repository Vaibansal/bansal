const Schematic = ({ steps, className = '' }: { steps: string[]; className?: string }) => (
  <div className={`schematic ${className}`} aria-label={`Flow: ${steps.join(' then ')}`}>
    {steps.map((s, i) => (
      <span key={s} style={{ display: 'contents' }}>
        <span className={`node ${i === steps.length - 1 ? 'end' : ''}`}>{s}</span>
        {i < steps.length - 1 && <span className="wire" style={{ animationDelay: `${i * 0.25}s` }} />}
      </span>
    ))}
  </div>
);

export default Schematic;
