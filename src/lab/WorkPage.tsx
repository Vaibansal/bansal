import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import { useReveal } from './useReveal';
import { bySlug, projects } from '@/data/work';

const Block = ({ label, items, text }: { label: string; items?: string[]; text?: string }) => (
  <section className="reveal grid gap-4 md:grid-cols-[220px_1fr] md:gap-8" style={{ padding: '40px 0', borderTop: '1px solid var(--line)' }}>
    <p className="label">{label}</p>
    <div>
      {text && <p style={{ fontSize: 'var(--t-md)', lineHeight: 1.7, maxWidth: '64ch' }}>{text}</p>}
      {items && (
        <ol className="grid gap-5" style={{ maxWidth: '68ch' }}>
          {items.map((it, i) => (
            <li key={it} className="grid grid-cols-[32px_1fr] gap-2">
              <span className="mono faint" style={{ fontSize: 12, paddingTop: 4 }}>{String(i + 1).padStart(2, '0')}</span>
              <span style={{ lineHeight: 1.7 }}>{it}</span>
            </li>
          ))}
        </ol>
      )}
    </div>
  </section>
);

const WorkPage = () => {
  const { slug = '' } = useParams();
  const p = bySlug(slug);
  useEffect(() => window.scrollTo(0, 0), [slug]);
  useReveal(slug);

  if (!p) {
    return (
      <div className="lab">
        <Nav />
        <div className="wrap" style={{ paddingTop: 160, paddingBottom: 160 }}>
          <p className="label">404</p>
          <h1 className="h-2xl" style={{ marginTop: 16 }}>No project at this address.</h1>
          <Link to="/#builds" className="btn" style={{ marginTop: 32 }}>← Back to all work</Link>
        </div>
      </div>
    );
  }

  const group = projects.filter((x) => x.kind === p.kind);
  const i = group.findIndex((x) => x.slug === p.slug);
  const next = group[(i + 1) % group.length];

  return (
    <div className="lab">
      <Nav />
      <article className="wrap" style={{ paddingTop: 120 }}>
        <Link to={p.kind === 'independent' ? '/#builds' : '/#production'} className="label rise d1" style={{ display: 'inline-block' }}>
          ← {p.kind === 'independent' ? 'Independent builds' : 'In production'}
        </Link>

        <header style={{ paddingTop: 40, paddingBottom: 56 }}>
          <div className="flex flex-wrap items-center gap-4 rise d1">
            <span className="label">{p.kicker}</span>
            <span className="label" style={{ color: p.status.startsWith('Live') ? 'var(--pass)' : 'var(--signal)' }}>● {p.status}</span>
          </div>
          <h1 className="rise d2" style={{ fontSize: 'clamp(48px, 8vw, 112px)', letterSpacing: '-0.05em', lineHeight: 0.92, marginTop: 24, maxWidth: '14ch' }}>
            {p.title}
          </h1>
          <p className="rise d3" style={{ fontSize: 'var(--t-lg)', lineHeight: 1.45, marginTop: 28, maxWidth: '40ch' }}>{p.oneLine}</p>
          <p className="faint rise d3" style={{ fontSize: 'var(--t-sm)', marginTop: 12 }}>{p.context}</p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 rise d4" style={{ marginTop: 56, maxWidth: 820 }}>
            {p.metrics.map((m) => (
              <div key={m.label} style={{ borderTop: '1px solid var(--line-2)', paddingTop: 14 }}>
                <div className="mono signal" style={{ fontSize: 'clamp(30px, 4vw, 48px)', letterSpacing: '-0.04em', lineHeight: 1 }}>{m.num}</div>
                <div className="label" style={{ marginTop: 10, letterSpacing: '0.08em' }}>{m.label}</div>
              </div>
            ))}
          </div>

          {p.link && (
            <a href={p.link.href} target="_blank" rel="noopener noreferrer" className="btn btn-solid rise d5" style={{ marginTop: 48 }}>
              {p.link.label} ↗
            </a>
          )}
        </header>

        {/* architecture rail */}
        <section className="reveal" style={{ padding: '40px 0 56px', borderTop: '1px solid var(--line)' }}>
          <p className="label" style={{ marginBottom: 32 }}>Architecture</p>
          <div className="rail">
            {p.schematic.map((s, k) => (
              <div key={s} className={`rail-step ${k === p.schematic.length - 1 ? 'last' : ''}`}>
                <div className="mono faint" style={{ fontSize: 11 }}>{String(k + 1).padStart(2, '0')}</div>
                <div style={{ marginTop: 6, fontSize: 15, lineHeight: 1.35, letterSpacing: '-0.01em' }}>{s}</div>
              </div>
            ))}
          </div>
        </section>

        <Block label="The problem" text={p.problem} />
        <Block label="What I built" items={p.built} />
        <Block label="Key decisions" items={p.decisions} />
        <Block label="How I know it works" items={p.evals} />

        <section className="reveal grid gap-4 md:grid-cols-[220px_1fr] md:gap-8" style={{ padding: '40px 0', borderTop: '1px solid var(--line)' }}>
          <p className="label">Stack</p>
          <div className="flex flex-wrap gap-2">
            {p.stack.map((s) => <span key={s} className="chip">{s}</span>)}
          </div>
        </section>

        <Link to={`/work/${next.slug}`} className="block reveal" style={{ borderTop: '1px solid var(--line)', padding: '56px 0 96px' }}>
          <p className="label">Next</p>
          <p className="h-2xl" style={{ marginTop: 12 }}>
            {next.title} <span className="signal">→</span>
          </p>
        </Link>
      </article>
      <Footer />
    </div>
  );
};

export default WorkPage;
