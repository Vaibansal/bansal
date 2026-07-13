import SectionHeader from './SectionHeader';

const columns = [
  {
    title: 'Product',
    skills: ['Product Strategy', 'Roadmapping', 'User Persona Development', 'Product Analytics', 'GTM Strategy'],
  },
  {
    title: 'Tools',
    skills: ['SQL', 'Figma', 'Tableau', 'Postman', 'Low-code platforms'],
  },
  {
    title: 'Business',
    skills: ['Stakeholder Management', 'Growth Strategy', 'Operations Management', 'Sales Enablement'],
  },
  {
    title: 'AI & Automation',
    skills: ['Agentic AI', 'LLM Workflows', 'Multi-Agent Systems', 'n8n', 'Automation Design'],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-16 md:py-20 px-6 bg-panel border-y border-line">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="08" label="Toolkit" />

        <div className="animate-on-scroll mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink leading-tight">
            Skills & <span className="italic text-gold">expertise.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 md:gap-6">
          {columns.map((col, i) => (
            <div key={col.title} className={`animate-on-scroll stagger-${i + 1}`}>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-px bg-gold" />
                <h3 className="font-mono-plex text-[11px] tracking-[0.18em] uppercase text-ink font-semibold">
                  {col.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {col.skills.map((s) => (
                  <span
                    key={s}
                    className="text-[13px] px-3 py-1.5 border border-line rounded-full text-ink hover:border-gold hover:text-gold transition-colors cursor-default"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
