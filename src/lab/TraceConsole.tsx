import { useEffect, useState } from 'react';

// Real runs from my own systems, replayed as a trace.
const LINES: { t: string; tone?: 'cmd' | 'ok' | 'warn' | 'dim' }[] = [
  { t: '$ run deal-agent --env prod', tone: 'cmd' },
  { t: '  supervisor → route: new_deal', tone: 'dim' },
  { t: '  extract ✓  validate ✓  readiness_gate ✓', tone: 'ok' },
  { t: '  salesforce.create_deal → submitted', tone: 'dim' },
  { t: '$ eval revenue-dashboard', tone: 'cmd' },
  { t: '  28,001 checks · 0 mismatches ✓', tone: 'ok' },
  { t: '$ rag ask --mode hyde --rerank colbert', tone: 'cmd' },
  { t: '  retrieve 24 → rerank → top 4 → answer ✓', tone: 'ok' },
  { t: '$ backtest nifty50 --rules frozen', tone: 'cmd' },
  { t: '  +1.91 pts/yr vs +3.0 hurdle → FAIL, published', tone: 'warn' },
  { t: '$ social-ai nightly --at 02:00', tone: 'cmd' },
  { t: '  enrich → knn(0.8) → louvain → themes ✓', tone: 'ok' },
];

const color = (tone?: string) =>
  tone === 'cmd' ? 'var(--text)' : tone === 'ok' ? 'var(--pass)' : tone === 'warn' ? 'var(--signal)' : 'var(--dim)';

const TraceConsole = () => {
  const reduce = typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
  const [n, setN] = useState(reduce ? LINES.length : 0);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    if (reduce) return;
    if (n >= LINES.length) {
      const r = setTimeout(() => { setN(0); setChars(0); }, 5200);
      return () => clearTimeout(r);
    }
    const line = LINES[n].t;
    if (chars < line.length) {
      const id = setTimeout(() => setChars((c) => c + 1), LINES[n].tone === 'cmd' ? 26 : 9);
      return () => clearTimeout(id);
    }
    const id = setTimeout(() => { setN((x) => x + 1); setChars(0); }, LINES[n].tone === 'cmd' ? 260 : 420);
    return () => clearTimeout(id);
  }, [n, chars, reduce]);

  const shown = LINES.slice(0, n);
  const current = n < LINES.length ? LINES[n] : null;

  return (
    <div className="console" role="img" aria-label="A trace of runs from my systems">
      <div className="flex items-center justify-between px-4 py-3" style={{ borderBottom: '1px solid var(--line)' }}>
        <span className="label">trace · my systems</span>
        <span className="label flex items-center gap-2">
          <span style={{ width: 6, height: 6, borderRadius: 9, background: 'var(--pass)', display: 'inline-block' }} /> live replay
        </span>
      </div>
      <div className="px-4 py-4" style={{ minHeight: 330 }}>
        {shown.slice(-11).map((l, i) => (
          <div key={i + l.t} style={{ color: color(l.tone), whiteSpace: 'pre-wrap' }}>{l.t}</div>
        ))}
        {current && (
          <div style={{ color: color(current.tone), whiteSpace: 'pre-wrap' }}>
            {current.t.slice(0, chars)}
            <span className="caret" />
          </div>
        )}
      </div>
    </div>
  );
};

export default TraceConsole;
