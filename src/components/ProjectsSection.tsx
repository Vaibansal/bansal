import { Users, BookOpen, Cpu } from 'lucide-react';
import SectionHeader from './SectionHeader';

const projects = [
  {
    title: 'Persona Customer 360',
    description: 'Product integrating 10+ systems for a single agent view of customer information.',
    metrics: [
      { num: '10+', label: 'Systems' },
      { num: 'Faster', label: 'Resolution' },
      { num: '↑', label: 'Cross-sell' },
    ],
    icon: Users,
    tags: ['Enterprise SaaS', 'Platform', 'Customer Care'],
  },
  {
    title: 'AI-Powered CLM',
    description: 'Enhanced contract lifecycle system for enterprise legal teams.',
    metrics: [
      { num: '−', label: 'Neg. time' },
      { num: 'NLQ', label: 'Search' },
      { num: '↑', label: 'Bandwidth' },
    ],
    icon: Cpu,
    tags: ['AI/ML', 'Automation', 'Legal Tech'],
  },
  {
    title: 'Vernacular Comics',
    description: 'Multilingual digital comics platform with content in six languages.',
    metrics: [
      { num: '6', label: 'Languages' },
      { num: '↑', label: 'Reach' },
      { num: 'Scale', label: 'Distribution' },
    ],
    icon: BookOpen,
    tags: ['Entrepreneurship', 'Content', 'Product'],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-16 md:py-20 px-6 bg-paper">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="07" label="Projects" />

        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className={`animate-on-scroll-scale stagger-${index + 1} card-paper p-6 flex flex-col`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icon size={18} className="text-gold-lg" strokeWidth={1.5} />
                  <span className="eyebrow text-faint">0{index + 1}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-ink mb-2">{project.title}</h3>
                <p className="text-sm text-dim leading-relaxed mb-5">{project.description}</p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.metrics.map((m) => (
                    <span key={m.label} className="metric-chip">
                      <span className="num">{m.num}</span> {m.label}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono-plex text-[10px] tracking-[0.12em] uppercase px-2 py-0.5 border border-line rounded-full text-dim"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
