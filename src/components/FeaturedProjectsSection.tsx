import { ArrowUpRight, Network, Radio, FileSignature, Sparkles } from "lucide-react";

const featured = [
  {
    number: "01",
    icon: Network,
    tag: "Multi-Agent Systems · D2C / B2C",
    title: "The 20-Agent Revenue Engine",
    subtitle: "An orchestrated system of 20 AI agents that runs an entire revenue lifecycle — acquisition to retention, 24/7.",
    description:
      "Designed a system (not a stack) covering six lifecycle stages — Acquire, Convert, Onboard & Bill, Support, Grow, Retain — with one orchestrator, one shared memory, and every agent owning a single metric. Built on Claude, n8n, Pinecone, Supabase, Vapi.ai, and LangSmith. Replaces the work of 8–10 traditional roles with an always-on, observable, self-hosted infrastructure.",
    highlights: [
      "20 autonomous agents across 6 lifecycle stages",
      "Orchestrator agent (The Conductor) routes tasks & escalates to humans",
      "Persistent memory + full call tracing under a single control plane",
      "Every agent moves one measurable business metric",
    ],
    tags: ["Multi-Agent", "Orchestration", "Claude", "n8n", "Pinecone", "Vapi"],
    cta: { label: "View live blueprint", href: "/multi-agent-revenue-engine.html" },
  },
  {
    number: "02",
    icon: Radio,
    tag: "Broadcast · Content Operations",
    title: "Content-Ops Intake Agent",
    subtitle: "Turns messy show briefs into catalogue-ready decisions — automatically, with a human in the loop where it matters.",
    description:
      "An autonomous, self-healing agent for broadcast networks. Ingests plain text, documents, scanned PDFs, or images and executes an eight-stage pipeline: OCR → structured extraction → knowledge-base retrieval → gap analysis → data-richness scoring → calibrated content rating → marketing generation → human review. Nothing is fabricated; every field carries confidence and evidence. Age ratings are calibrated against the network's own past decisions.",
    highlights: [
      "0–100 data-richness score per submission",
      "Calibrated U / U-A 7+ / 13+ / 16+ / A rating with rationale",
      "Auto-drafts follow-up request sheets for production houses",
      "Generates on-air hook, taglines, comps, slot & SEO keywords",
    ],
    tags: ["Agentic AI", "OCR", "Claude", "Pinecone", "Human-in-loop"],
    cta: { label: "Read the one-pager", href: "/broadcast-content-ops-agent.pdf" },
  },
  {
    number: "03",
    icon: FileSignature,
    tag: "Enterprise · Legal AI",
    title: "AI-Powered CLM Solution",
    subtitle: "An AI-enhanced contract lifecycle platform that compresses negotiation and execution time for enterprise legal teams.",
    description:
      "Reimagined contract lifecycle management with an AI copilot at its core. Enables legal teams to query contracts in natural language, surface historical clauses instantly, and accelerate redlining. Built as a live prototype for ChargePoint — showcasing how agentic workflows can reclaim lawyer bandwidth while keeping compliance airtight.",
    highlights: [
      "Natural-language query across contract repositories",
      "AI-assisted redlining & clause suggestions",
      "Instant historical precedent surfacing",
      "Improved lawyer bandwidth & reduced turn-around time",
    ],
    tags: ["Enterprise AI", "CLM", "LLM Workflows", "Legal Tech"],
    cta: { label: "Open live demo", href: "https://chargepoint-clm-demo.vercel.app/", external: true },
  },
];

const FeaturedProjectsSection = () => {
  return (
    <section id="featured-projects" className="py-24 px-6 bg-secondary/30 relative overflow-hidden">
      {/* Subtle decorative accent */}
      <div className="absolute top-40 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-40 -left-20 w-96 h-96 bg-accent/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div className="animate-on-scroll mb-16 text-center">
          <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium mb-3 inline-flex items-center gap-2 justify-center">
            <Sparkles size={14} /> Featured AI Work
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            AI Products I've <span className="text-primary italic">shipped</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Three flagship projects at the intersection of agentic AI, product strategy, and enterprise workflows.
          </p>
        </div>

        <div className="space-y-8">
          {featured.map((project, index) => {
            const Icon = project.icon;
            const isReversed = index % 2 === 1;
            return (
              <article
                key={project.title}
                className={`animate-on-scroll group bg-card border border-border rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-1`}
              >
                <div className={`grid md:grid-cols-5 gap-0`}>
                  {/* Visual side */}
                  <div
                    className={`md:col-span-2 relative p-8 md:p-10 bg-gradient-to-br from-accent/60 to-accent/20 flex flex-col justify-between min-h-[280px] ${
                      isReversed ? "md:order-2" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-mono text-xs tracking-[0.25em] text-primary/80">{project.number}</span>
                      <div className="w-14 h-14 rounded-2xl bg-background/80 backdrop-blur border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500">
                        <Icon
                          size={26}
                          className="text-primary group-hover:text-primary-foreground transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="text-xs tracking-[0.15em] uppercase text-primary/80 font-medium mb-2">
                        {project.tag}
                      </p>
                      <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground leading-tight">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content side */}
                  <div className={`md:col-span-3 p-8 md:p-10 ${isReversed ? "md:order-1" : ""}`}>
                    <p className="text-base text-foreground font-medium leading-relaxed mb-4">
                      {project.subtitle}
                    </p>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>

                    <p className="text-xs font-medium text-primary tracking-wider uppercase mb-3">
                      Key Highlights
                    </p>
                    <ul className="space-y-2 mb-6">
                      {project.highlights.map((h) => (
                        <li
                          key={h}
                          className="text-sm text-muted-foreground flex items-start gap-2 leading-relaxed"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 bg-accent text-accent-foreground rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.cta.href}
                      target={project.cta.external ? "_blank" : "_blank"}
                      rel={project.cta.external ? "noopener noreferrer" : "noopener noreferrer"}
                      className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:gap-3 transition-all group/link"
                    >
                      {project.cta.label}
                      <ArrowUpRight
                        size={16}
                        className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
                      />
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
