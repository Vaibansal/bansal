import SectionHeader from './SectionHeader';

const experiences = [
  {
    company: 'UnifyApps',
    role: 'Senior Product Manager',
    location: 'Gurugram',
    description: 'Led product initiatives focused on AI-driven automation and enterprise product demonstrations.',
    highlights: [
      'Built an automated demo creation system reducing delivery time by 47%',
      'Helped generate $450K in new ARR through enterprise product demonstrations',
      'Worked with integrations across 400+ connectors and 60+ UI components',
      'Collaborated closely with sales to accelerate enterprise deal cycles',
    ],
    metrics: [
      { num: '$450K', label: 'New ARR' },
      { num: '−47%', label: 'Delivery time' },
      { num: '400+', label: 'Connectors' },
    ],
  },
  {
    company: 'Sprinklr',
    role: 'Product Manager → Senior Product Analyst',
    location: 'Gurugram',
    description:
      'Worked on digital customer care and experience management platforms used by large global enterprises.',
    highlights: [
      'Led product initiatives generating $17M ARR',
      'Improved user productivity by 20%',
      'Reduced support tickets by 25% through product improvements',
      'Built standardized user personas to improve adoption across 15K+ users',
    ],
    metrics: [
      { num: '$17M', label: 'ARR' },
      { num: '−25%', label: 'Tickets' },
      { num: '15K+', label: 'Users' },
    ],
  },
  {
    company: 'TBS Planet Comics',
    role: 'Founding Member',
    location: 'IIT Roorkee',
    description: 'An IIT Roorkee incubated comics venture focused on digital storytelling.',
    highlights: [
      'Managed 5 simultaneous projects with artists and studios',
      'Built a network of 500+ campus ambassadors',
      'Grew a digital subscriber base to 6000+ users',
      'Created vernacular comics available in six languages',
    ],
    metrics: [
      { num: '6K+', label: 'Subscribers' },
      { num: '500+', label: 'Ambassadors' },
      { num: '6', label: 'Languages' },
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 md:py-20 px-6 bg-paper">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="04" label="Experience" />

        <div className="relative pl-10 md:pl-14">
          {/* Left rail */}
          <div
            className="absolute left-3 md:left-5 top-2 bottom-2 w-px"
            style={{ background: 'linear-gradient(to bottom, hsl(var(--gold)) 0%, hsl(var(--line)) 100%)' }}
          />

          {experiences.map((exp, index) => (
            <div key={exp.company} className={`animate-on-scroll relative mb-6 last:mb-0`}>
              {/* dot */}
              <span
                className="absolute -left-[calc(2.5rem-6px)] md:-left-[calc(3.5rem-6px)] top-6 w-3 h-3 rounded-full bg-gold ring-4 ring-paper"
              />

              <div className="card-paper p-6 md:p-7">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
                  <span className="eyebrow text-gold">{exp.company}</span>
                  <span className="eyebrow text-faint">· {exp.location}</span>
                </div>
                <h3 className="font-display text-xl md:text-2xl font-semibold text-ink mb-2">{exp.role}</h3>
                <p className="text-sm text-dim italic mb-4">{exp.description}</p>

                {/* metric chips */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {exp.metrics.map((m) => (
                    <span key={m.label} className="metric-chip">
                      <span className="num">{m.num}</span> {m.label}
                    </span>
                  ))}
                </div>

                <ul className="space-y-1.5">
                  {exp.highlights.slice(0, 4).map((h) => (
                    <li key={h} className="text-sm text-dim flex items-start gap-2 leading-relaxed">
                      <span className="w-1 h-1 bg-gold rounded-full mt-2 flex-shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
