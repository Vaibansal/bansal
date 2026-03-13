import { Globe, Mail, BarChart3, Share2 } from 'lucide-react';

const eaAreas = [
  {
    icon: Mail,
    title: 'Executive Support',
    items: [
      'Managing email inboxes and calendars for founders',
      'Preparing daily briefs and meeting notes',
      'Preparing research briefs before important meetings',
    ],
  },
  {
    icon: Globe,
    title: 'Operations Management',
    items: [
      'Managing internal and external stakeholders',
      'Coordinating across multiple teams and departments',
      'Creating operational systems and workflows',
    ],
  },
  {
    icon: BarChart3,
    title: 'Sales & Growth',
    items: [
      'Generating leads and supporting sales pipelines',
      'Converting prospects into customers',
      'Supporting outreach campaigns',
    ],
  },
  {
    icon: Share2,
    title: 'Social Media & Digital Presence',
    items: [
      'Managing Instagram, Facebook, LinkedIn, and Twitter',
      'Content scheduling and engagement analysis',
      'Building brand presence for founders and businesses',
    ],
  },
];

const EASection = () => {
  return (
    <section id="ea-operations" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="animate-on-scroll mb-6 text-center">
          <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium mb-3">Strategic Operations</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">Executive Assistant & Operations</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base">
            Alongside product roles, I have worked with multiple founders and businesses across the UK, USA, Australia, and the Middle East as a strategic executive assistant and operator.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mt-12">
          {eaAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className={`animate-on-scroll stagger-${index + 1} group`}
              >
                <div className="bg-card border border-border rounded-2xl p-6 h-full hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon size={18} className="text-accent-foreground group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-serif text-base font-semibold text-foreground">{area.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {area.items.map((item) => (
                      <li key={item} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary/60 rounded-full mt-1.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <p className="animate-on-scroll stagger-5 text-sm text-muted-foreground/70 text-center mt-8 italic">
          This role required a combination of operational excellence, strategic thinking, and the ability to execute quickly.
        </p>
      </div>
    </section>
  );
};

export default EASection;
