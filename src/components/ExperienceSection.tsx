import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "UnifyApps",
    role: "Senior Product Manager",
    location: "Gurugram",
    description: "Led product initiatives focused on AI-driven automation and enterprise product demonstrations.",
    highlights: [
      "Built an automated demo creation system reducing delivery time by 47%",
      "Helped generate $450K in new ARR through enterprise product demonstrations",
      "Worked with integrations across 400+ connectors and 60+ UI components",
      "Collaborated closely with sales teams to accelerate enterprise deal cycles",
    ],
  },
  {
    company: "Sprinklr",
    role: "Product Manager → Senior Product Analyst",
    location: "Gurugram",
    description:
      "Worked on digital customer care and experience management platforms used by large global enterprises.",
    highlights: [
      "Led product initiatives generating $17M ARR",
      "Improved user productivity by 20%",
      "Reduced support tickets by 25% through product improvements",
      "Built standardized user personas to improve product adoption across 15K+ users",
    ],
  },
  {
    company: "TBS Planet Comics",
    role: "Founder",
    location: "IIT Roorkee",
    description: "Founded an IIT Roorkee incubated comics venture focused on digital storytelling.",
    highlights: [
      "Managed 5 simultaneous projects with artists and studios",
      "Built a network of 500+ campus ambassadors",
      "Grew a digital subscriber base to 6000+ users",
      "Created vernacular comics available in six languages",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="animate-on-scroll mb-16 text-center">
          <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium mb-3">Career Journey</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">Professional Experience</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-[2px] bg-border" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-start mb-16 last:mb-0 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full ring-4 ring-background z-10 mt-2" />

              {/* Content card */}
              <div
                className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? "animate-on-scroll-left md:pr-8" : "animate-on-scroll-right md:pl-8"
                } stagger-${index + 1}`}
              >
                <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase size={16} className="text-primary" />
                    <span className="text-xs font-medium text-primary tracking-wider uppercase">{exp.period}</span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-1">{exp.company}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{exp.role}</p>
                  <p className="text-xs text-muted-foreground/60 mb-3">{exp.location}</p>
                  <p className="text-sm text-muted-foreground/80 mb-4 italic">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary/60 rounded-full mt-1.5 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
