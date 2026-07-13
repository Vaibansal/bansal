import { ArrowUpRight } from 'lucide-react';
import SectionHeader from './SectionHeader';

// --- Mini diagrams (HTML/CSS only) ---
const PipelineDiagram = () => {
  const stages = ['Acquire', 'Convert', 'Onboard', 'Support', 'Grow', 'Retain'];
  // Distribute 20 dots across 6 stages: 3,4,3,3,4,3
  const dotCounts = [3, 4, 3, 3, 4, 3];
  return (
    <div className="w-full">
      <div className="grid grid-cols-6 gap-1.5">
        {stages.map((s, i) => (
          <div key={s} className="flex flex-col items-center gap-2">
            <div className="flex flex-wrap gap-1 justify-center min-h-[26px] items-end">
              {Array.from({ length: dotCounts[i] }).map((_, j) => (
                <span
                  key={j}
                  className={`w-1.5 h-1.5 rounded-full bg-gold ${i === 1 && j === 0 ? 'pulse-dot' : ''}`}
                />
              ))}
            </div>
            <span className="font-mono-plex text-[9px] tracking-[0.12em] text-dim uppercase text-center leading-tight">
              {s}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-3 relative h-1 bg-[hsl(var(--teal)/0.15)] rounded-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-mono-plex text-[9px] tracking-[0.18em] text-teal uppercase bg-panel px-2">
            The Conductor
          </span>
        </div>
      </div>
    </div>
  );
};

const IntakeDiagram = () => (
  <div className="w-full space-y-3">
    <div
      className="p-3 rounded-md font-mono-plex text-[10px] text-dim leading-relaxed"
      style={{ background: 'hsl(var(--paper-2))', border: '1px dashed hsl(var(--line-2))' }}
    >
      fwd: brief_FINAL2.pdf<br />
      runtime?? age??<br />
      slot tbd —
    </div>
    <div className="flex justify-center text-gold">↓</div>
    <div className="card-paper p-3 space-y-1.5 text-[11px]">
      <div className="flex items-center justify-between">
        <span className="text-ink">Title</span>
        <span className="text-teal">✓</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-ink">Rating U/A 13+</span>
        <span className="text-teal">✓</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-ink">Score 78/100</span>
        <span className="text-teal">✓</span>
      </div>
    </div>
  </div>
);

const CLMDiagram = () => (
  <div className="w-full space-y-2.5">
    <div
      className="p-3 rounded-lg text-[11px] text-dim"
      style={{ background: 'hsl(var(--paper-2))' }}
    >
      <span className="eyebrow-sm text-faint block mb-1">Query</span>
      "Which contracts auto-renew in 30 days?"
    </div>
    <div className="card-paper p-3 text-[11px]">
      <span className="eyebrow-sm text-gold block mb-1.5">Answer</span>
      <span className="text-ink">
        Found <span className="bg-[hsl(var(--gold)/0.18)] px-1 rounded">3 contracts</span> in Legal/Vendor with
        auto-renewal on Aug 12, Aug 22, Sep 04.
      </span>
      <div className="mt-2 inline-flex items-center gap-1.5 metric-chip">
        <span className="num">3</span> contracts found
      </div>
    </div>
  </div>
);

const featured = [
  {
    number: '01',
    tag: 'Multi-Agent Systems · D2C / B2C',
    title: 'The 20-Agent Revenue Engine',
    subtitle: 'An orchestrated system of 20 AI agents that runs an entire revenue lifecycle — 24/7.',
    description:
      'Designed a system covering six lifecycle stages — Acquire, Convert, Onboard & Bill, Support, Grow, Retain — with one orchestrator, shared memory, and every agent owning a single metric. Built on Claude, n8n, Pinecone, Supabase, Vapi.ai, and LangSmith.',
    highlights: [
      '20 autonomous agents across 6 lifecycle stages',
      'Orchestrator (The Conductor) routes tasks & escalates',
      'Persistent memory + full call tracing in one plane',
      'Every agent moves one measurable business metric',
    ],
    tags: ['Multi-Agent', 'Claude', 'n8n', 'Pinecone', 'Vapi'],
    cta: { label: 'View live blueprint', href: '/multi-agent-revenue-engine.html' },
    Diagram: PipelineDiagram,
  },
  {
    number: '02',
    tag: 'Broadcast · Content Operations',
    title: 'Content-Ops Intake Agent',
    subtitle: 'Turns messy show briefs into catalogue-ready decisions — automatically, human-in-loop.',
    description:
      'Self-healing agent for broadcast networks. Ingests text, docs, scanned PDFs, or images and runs an eight-stage pipeline: OCR → extraction → KB retrieval → gap analysis → richness scoring → calibrated rating → marketing gen → human review. Every field carries confidence and evidence.',
    highlights: [
      '0–100 data-richness score per submission',
      'Calibrated U / U-A 7+ / 13+ / 16+ / A rating',
      'Auto-drafts follow-up sheets for production houses',
      'Generates hook, taglines, comps, slot & SEO keywords',
    ],
    tags: ['Agentic AI', 'OCR', 'Claude', 'Pinecone', 'HITL'],
    cta: { label: 'Open interactive demo', href: '/content-ops-intake-agent.html' },
    Diagram: IntakeDiagram,
  },
  {
    number: '03',
    tag: 'Enterprise · Legal AI',
    title: 'AI-Powered CLM Solution',
    subtitle: 'AI-enhanced contract lifecycle platform compressing legal review and execution time.',
    description:
      'Reimagined contract lifecycle management with an AI copilot at its core. Legal teams query contracts in natural language, surface historical clauses instantly, and accelerate redlining — reclaiming lawyer bandwidth while keeping compliance airtight.',
    highlights: [
      'Natural-language query across contract repositories',
      'AI-assisted redlining & clause suggestions',
      'Instant historical precedent surfacing',
      'Reduced turn-around time for legal teams',
    ],
    tags: ['Enterprise AI', 'CLM', 'LLM Workflows', 'Legal Tech'],
    cta: { label: 'Open live demo', href: 'https://legal-clm.vercel.app/', external: true },
    Diagram: CLMDiagram,
  },
];

const FeaturedProjectsSection = () => {
  return (
    <section id="featured-projects" className="py-16 md:py-20 px-6 bg-paper-2">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="02" label="AI Work" />

        <div className="animate-on-scroll mb-10 max-w-2xl">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink leading-tight">
            AI products I've <span className="italic text-gold">shipped.</span>
          </h2>
          <p className="text-dim mt-3 text-base">
            Three flagship projects at the intersection of agentic AI, product strategy, and enterprise workflows.
          </p>
        </div>

        <div className="space-y-6">
          {featured.map((project, index) => {
            const { Diagram } = project;
            const isReversed = index % 2 === 1;
            return (
              <article key={project.title} className="animate-on-scroll card-paper overflow-hidden">
                <div className="grid md:grid-cols-5 gap-0">
                  {/* Visual side */}
                  <div
                    className={`md:col-span-2 p-7 md:p-8 flex flex-col justify-between gap-5 min-h-[260px] border-b md:border-b-0 ${
                      isReversed ? 'md:order-2 md:border-l border-line' : 'md:border-r border-line'
                    }`}
                    style={{ background: 'hsl(var(--paper))' }}
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-mono-plex text-[11px] tracking-[0.25em] text-gold">{project.number}</span>
                      <span className="eyebrow-sm text-faint">Diagram</span>
                    </div>
                    <Diagram />
                    <p className="eyebrow text-dim">{project.tag}</p>
                  </div>

                  {/* Content side */}
                  <div className={`md:col-span-3 p-7 md:p-9 ${isReversed ? 'md:order-1' : ''}`}>
                    <h3 className="font-display text-2xl md:text-[26px] font-bold text-ink leading-tight mb-3">
                      {project.title}
                    </h3>
                    <p className="text-[15px] text-ink leading-relaxed mb-3">{project.subtitle}</p>
                    <p className="text-sm text-dim leading-relaxed mb-5 max-w-[68ch]">{project.description}</p>

                    <p className="eyebrow text-gold mb-3">Key highlights</p>
                    <ul className="space-y-2 mb-5">
                      {project.highlights.slice(0, 4).map((h) => (
                        <li key={h} className="text-sm text-dim flex items-start gap-2 leading-relaxed">
                          <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((t) => (
                        <span
                          key={t}
                          className="font-mono-plex text-[10px] tracking-[0.12em] uppercase px-2.5 py-1 border border-line rounded-full text-dim"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.cta.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-ink group"
                    >
                      {project.cta.label}
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjectsSection;
