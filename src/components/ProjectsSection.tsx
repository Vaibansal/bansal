import { Users, BookOpen, Cpu } from "lucide-react";

const projects = [
  {
    title: "Persona Customer 360 Platform",
    description:
      "Built a product integrating 10+ systems to provide agents a single view of customer information for faster query resolution.",
    impact: [
      "Faster customer support response times",
      "Improved service-level metrics",
      "Better conversion to cross-sell / up-sell",
    ],
    icon: Users,
    tags: ["Enterprise SaaS", "Platform", "Customer Care"],
  },
  {
    title: "AI Powered CLM Solution",
    description: "Developed an enhanced system that allows enterprise teams to manage contracts' lifecycle.",
    impact: [
      "Reduced negotiation and execution time",
      "Enabled faster query and historical data",
      "Improved lawyer bandwidth",
    ],
    icon: Cpu,
    tags: ["AI/ML", "Automation", "Sales Enablement"],
  },
  {
    title: "Vernacular Comics Platform",
    description:
      "Led the development of a multilingual digital comics platform with content available in six languages.",
    impact: ["Expanded audience reach", "Built a strong creator network", "Enabled scalable content distribution"],
    icon: BookOpen,
    tags: ["Entrepreneurship", "Content", "Product"],
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

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div key={project.title} className={`animate-on-scroll-scale stagger-${index + 1} group`}>
                <div className="bg-card border border-border rounded-2xl p-7 h-full hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full transition-all duration-500 group-hover:w-32 group-hover:h-32" />

                  <div className="relative z-10">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center mb-4">
                      <Icon size={20} className="text-accent-foreground" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{project.description}</p>

                    <p className="text-xs font-medium text-primary tracking-wider uppercase mb-3">Impact</p>
                    <ul className="space-y-1.5 mb-5">
                      {project.impact.map((item) => (
                        <li key={item} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-primary/60 rounded-full mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>

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
