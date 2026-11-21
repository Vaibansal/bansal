import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Nav from './Nav';
import TraceConsole from './TraceConsole';
import Schematic from './Schematic';
import AskAgent from './AskAgent';
import Footer from './Footer';
import { useReveal } from './useReveal';
import { independent, enterprise, principles, career, alongside, skills, recognition, type Project } from '@/data/work';

const SectionHead = ({ idx, label, title, note }: { idx: string; label: string; title: React.ReactNode; note?: string }) => (
  <div className="sec-head reveal">
    <div className="sec-rule">
      <span className="label">
        <span className="signal">{idx}</span> / {label}
      </span>
    </div>
    <div className="sec-rule">
      <h2 className="h-2xl" style={{ maxWidth: '18ch' }}>{title}</h2>
      {note && <p className="dim" style={{ marginTop: 16, maxWidth: '60ch' }}>{note}</p>}
    </div>
  </div>
);

/* Independent builds: an asymmetric grid, wide tiles carry the schematic */
const BuildTile = ({ p, wide }: { p: Project; wide: boolean }) => (
  <Link
    to={`/work/${p.slug}`}
    className={`tile reveal group flex flex-col ${wide ? 'md:col-span-2' : ''}`}
    style={{ padding: wide ? '36px 36px 32px' : '30px 28px 28px', minHeight: wide ? 340 : 340 }}
  >
    <div className="flex items-center justify-between gap-4">
      <span className="label">{p.kicker}</span>
      <span className="label" style={{ color: p.status.startsWith('Live') ? 'var(--pass)' : 'var(--faint)' }}>{p.status}</span>
    </div>
    <h3 className={wide ? 'h-xl' : 'h-lg'} style={{ marginTop: 28, maxWidth: '16ch' }}>{p.title}</h3>
    <p className="dim" style={{ marginTop: 12, fontSize: 'var(--t-sm)', maxWidth: '52ch', lineHeight: 1.6 }}>{p.oneLine}</p>
    {wide && (
      <div style={{ marginTop: 24 }}>
        <Schematic steps={p.schematic} />
      </div>
    )}
    <div className="mt-auto flex items-end justify-between gap-4" style={{ paddingTop: 28 }}>
      <div className="flex gap-6">
        {p.metrics.slice(0, wide ? 3 : 2).map((m) => (
          <div key={m.label}>
            <div className="mono signal" style={{ fontSize: wide ? 26 : 22, letterSpacing: '-0.02em' }}>{m.num}</div>
            <div className="label" style={{ marginTop: 4, letterSpacing: '0.08em' }}>{m.label}</div>
          </div>
        ))}
      </div>
      <span className="arrow mono" style={{ fontSize: 18 }}>→</span>
    </div>
  </Link>
);

const Home = () => {
  useReveal();
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 60);
  }, [hash]);

  const layout = [true, false, false, true, true, false]; // wide / narrow pattern for the 6 builds

  return (
    <div className="lab">
      <Nav />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="wrap" style={{ paddingTop: 132, paddingBottom: 72 }}>
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:items-end">
          <div>
            <p className="label rise d1">AI Product Architect · Mumbai</p>
            <h1 className="h-hero rise d2" style={{ marginTop: 28 }}>
              Vaibhav
              <br />
              Bansal<span className="signal">.</span>
            </h1>
            <p className="rise d3" style={{ marginTop: 36, fontSize: 'var(--t-lg)', lineHeight: 1.4, maxWidth: '30ch', letterSpacing: '-0.01em' }}>
              I design, ship and prove AI systems that run real work.
            </p>
            <p className="dim rise d4" style={{ marginTop: 16, maxWidth: '52ch', fontSize: 'var(--t-sm)', lineHeight: 1.7 }}>
              Multi-agent systems, retrieval and evaluation, from a GPT written from scratch to agents live in production.
              5+ years across product and AI, $21M+ in product value delivered.
            </p>
            <div className="flex flex-wrap gap-3 rise d5" style={{ marginTop: 36 }}>
              <a href="#builds" className="btn btn-solid">See the work →</a>
              <a href="#ask" className="btn">Ask about my work</a>
            </div>
          </div>
          <div className="rise d4">
            <TraceConsole />
          </div>
        </div>
      </section>

      {/* ── Proof: one enormous number ─────────────────── */}
      <section className="wrap" style={{ paddingBottom: 112 }}>
        <div className="grid gap-10 md:grid-cols-[auto_1fr] md:items-center reveal" style={{ borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)', padding: '40px 0' }}>
          <div className="flex items-baseline gap-6">
            <span style={{ fontSize: 'clamp(120px, 20vw, 260px)', lineHeight: 0.8, letterSpacing: '-0.06em', fontWeight: 300, color: 'var(--pass)' }}>0</span>
            <div>
              <div style={{ fontSize: 'var(--t-lg)', letterSpacing: '-0.02em' }}>mismatches</div>
              <div className="dim" style={{ fontSize: 'var(--t-sm)', maxWidth: '24ch' }}>across 28,001 automated checks on a revenue system I shipped</div>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 md:justify-self-end">
            {[
              { n: '−40%', l: 'errors · deal agent live in production' },
              { n: '12', l: 'retrieval techniques built from scratch' },
              { n: '15 yrs', l: 'backtest, rules frozen before the run' },
            ].map((s) => (
              <div key={s.l} style={{ maxWidth: 200 }}>
                <div className="mono signal" style={{ fontSize: 34, letterSpacing: '-0.03em' }}>{s.n}</div>
                <div className="dim" style={{ fontSize: 13, marginTop: 6, lineHeight: 1.5 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Independent builds ─────────────────────────── */}
      <section id="builds" className="wrap scroll-mt-20" style={{ paddingBottom: 112 }}>
        <SectionHead
          idx="01"
          label="Independent builds"
          title={<>Built on my own time, <span className="dim">because I wanted to know.</span></>}
          note="None of this was a job requirement. Each one starts from first principles and ends with a test it could fail."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {independent.map((p, i) => (
            <BuildTile key={p.slug} p={p} wide={layout[i]} />
          ))}
        </div>
      </section>

      {/* ── Enterprise systems: rows that run to the edge ── */}
      <section id="production" className="scroll-mt-20" style={{ paddingBottom: 112 }}>
        <div className="wrap">
          <SectionHead
            idx="02"
            label="In production"
            title={<>Systems people rely on <span className="dim">every day.</span></>}
            note="Enterprise builds for a large Indian media network, shown without client data. Scale and results are real."
          />
        </div>
        <div className="wrap">
          {enterprise.map((p, i) => (
            <Link key={p.slug} to={`/work/${p.slug}`} className="row-link reveal">
              <span className="mono faint" style={{ fontSize: 13 }}>{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="h-lg">{p.title}</h3>
                <span className="label" style={{ display: 'block', marginTop: 6 }}>{p.kicker}</span>
              </div>
              <p className="dim" style={{ fontSize: 'var(--t-sm)', lineHeight: 1.6 }}>{p.oneLine}</p>
              <div>
                <div className="mono signal" style={{ fontSize: 24, letterSpacing: '-0.02em' }}>{p.metrics[0].num}</div>
                <div className="label" style={{ letterSpacing: '0.08em' }}>{p.metrics[0].label}</div>
              </div>
              <span className="arrow mono hidden md:block" style={{ fontSize: 18 }}>→</span>
            </Link>
          ))}
          <div style={{ borderTop: '1px solid var(--line)' }} />
        </div>
      </section>

      {/* ── Principles: a spec sheet ───────────────────── */}
      <section id="principles" className="wrap scroll-mt-20" style={{ paddingBottom: 112 }}>
        <SectionHead idx="03" label="How I build" title={<>Four rules, <span className="dim">no exceptions.</span></>} />
        <div className="grid md:grid-cols-2" style={{ borderTop: '1px solid var(--line)' }}>
          {principles.map((p, i) => (
            <div
              key={p.title}
              className="reveal"
              style={{
                padding: '32px 32px 36px 0',
                borderBottom: '1px solid var(--line)',
                borderRight: i % 2 === 0 ? '1px solid var(--line)' : undefined,
                paddingLeft: i % 2 === 1 ? 32 : 0,
              }}
            >
              <span className="mono signal" style={{ fontSize: 13 }}>R{i + 1}</span>
              <h3 className="h-lg" style={{ marginTop: 12 }}>{p.title}</h3>
              <p className="dim" style={{ marginTop: 10, fontSize: 'var(--t-sm)', lineHeight: 1.7, maxWidth: '46ch' }}>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── Ask ────────────────────────────────────────── */}
      <section id="ask" className="wrap scroll-mt-20" style={{ paddingBottom: 112 }}>
        <SectionHead
          idx="04"
          label="Ask about my work"
          title={<>Don’t take my word for it. <span className="dim">Ask.</span></>}
          note="A small retrieval agent over everything on this site, built on the same ideas as my RAG-from-scratch project. Every answer cites its source."
        />
        <div className="reveal">
          <AskAgent />
        </div>
      </section>

      {/* ── Career: a ledger ───────────────────────────── */}
      <section id="career" className="wrap scroll-mt-20" style={{ paddingBottom: 112 }}>
        <SectionHead idx="05" label="Career" title={<>Product first, <span className="dim">then AI all the way down.</span></>} />
        <div>
          {career.map((c) => (
            <div key={c.org} className="reveal grid gap-2 md:grid-cols-[220px_1fr_1.4fr] md:gap-8" style={{ padding: '26px 0', borderTop: '1px solid var(--line)' }}>
              <span className="mono faint" style={{ fontSize: 13 }}>{c.dates}</span>
              <div>
                <div style={{ fontSize: 'var(--t-md)', fontWeight: 500 }}>{c.org}</div>
                <div className="dim" style={{ fontSize: 'var(--t-sm)' }}>{c.role}</div>
              </div>
              <p className="dim" style={{ fontSize: 'var(--t-sm)', lineHeight: 1.65 }}>{c.line}</p>
            </div>
          ))}
          <p className="faint reveal" style={{ borderTop: '1px solid var(--line)', paddingTop: 24, fontSize: 'var(--t-sm)', maxWidth: '80ch' }}>{alongside}</p>
        </div>
      </section>

      {/* ── Skills + recognition ───────────────────────── */}
      <section id="skills" className="wrap scroll-mt-20" style={{ paddingBottom: 112 }}>
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div className="reveal">
            <p className="label" style={{ marginBottom: 24 }}><span className="signal">06</span> / Toolkit</p>
            <div className="grid sm:grid-cols-2 gap-8">
              {skills.map((s) => (
                <div key={s.group}>
                  <div style={{ fontWeight: 500, marginBottom: 12 }}>{s.group}</div>
                  <div className="flex flex-wrap gap-2">
                    {s.items.map((it) => (
                      <span key={it} className="chip" style={{ textTransform: 'none', letterSpacing: 0, fontSize: 12.5 }}>{it}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="reveal">
            <p className="label" style={{ marginBottom: 24 }}><span className="signal">07</span> / Education & recognition</p>
            <ul>
              {recognition.map((r) => (
                <li key={r} className="dim" style={{ padding: '12px 0', borderTop: '1px solid var(--line)', fontSize: 'var(--t-sm)' }}>{r}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
