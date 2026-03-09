import { ExternalLink, Users, BookOpen } from 'lucide-react';

const projects = [
  {
    title: 'TBS PLANET Comics',
    role: 'Founder & CEO',
    period: '2019 – 2022',
    description:
      'Founded a comic book brand that grew to 100K+ users with 30K+ app downloads. Led a team of 10 across content, design, and marketing. Launched 50+ comic titles and built a thriving community.',
    metrics: ['100K+ Users', '30K+ Downloads', '50+ Titles', '₹5L Revenue'],
    icon: BookOpen,
    tags: ['Entrepreneurship', 'Product', 'Marketing', 'Leadership'],
  },
  {
    title: 'AI Integration Builder',
    role: 'Senior PM @ UnifyApps',
    period: '2024 – Present',
    description:
      'Designed and launched an AI-powered no-code integration platform reducing development time by 40% and driving a $6M pipeline.',
    metrics: ['$6M Pipeline', '40% Faster', '10K+ Users', '80% Detection Boost'],
    icon: Users,
    tags: ['AI/ML', 'Enterprise SaaS', 'Platform'],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="animate-on-scroll mb-16 text-center">
          <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium mb-3">Selected Work</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className={`animate-on-scroll-scale stagger-${index + 1} group`}
              >
                <div className="bg-card border border-border rounded-2xl p-8 h-full hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                  {/* Accent corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full transition-all duration-500 group-hover:w-40 group-hover:h-40" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                        <Icon size={20} className="text-accent-foreground" />
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-semibold text-foreground">{project.title}</h3>
                        <p className="text-xs text-muted-foreground">{project.role} · {project.period}</p>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">{project.description}</p>

                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {project.metrics.map((metric) => (
                        <div key={metric} className="bg-secondary/60 rounded-lg px-3 py-2 text-center">
                          <span className="text-sm font-semibold text-foreground">{metric}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 bg-accent text-accent-foreground rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
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
