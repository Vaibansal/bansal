import { Package, TrendingUp, Users, Cpu } from 'lucide-react';

const pillars = [
  {
    icon: Package,
    title: 'Product Management',
    items: [
      'Product strategy and roadmap creation',
      'User persona design and product-market fit analysis',
      'Product launches and GTM planning',
      'Data driven product development',
      'Enterprise product demos and adoption strategy',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Strategy & Growth',
    items: [
      'Market research and opportunity mapping',
      'Lead generation and enterprise sales support',
      'GTM strategy design',
      'Growth experiments and marketing analytics',
    ],
  },
  {
    icon: Users,
    title: 'Executive Operations',
    items: [
      'Founder and executive support across multiple regions',
      'Calendar, inbox, and meeting management',
      'Stakeholder coordination across teams',
      'Daily strategic briefings and meeting preparation',
      'Internal systems and workflow creation',
    ],
  },
  {
    icon: Cpu,
    title: 'AI & Automation',
    items: [
      'AI-powered product workflows',
      'Automation for demo creation and sales enablement',
      'Integrations across multiple platforms',
      'Low-code automation systems',
    ],
  },
];

const WhatIDoSection = () => {
  return (
    <section id="whatido" className="py-24 px-6 bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <div className="animate-on-scroll mb-16 text-center">
          <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium mb-3">Expertise</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">What I Do</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`animate-on-scroll stagger-${index + 1} group`}
              >
                <div className="bg-card border border-border rounded-2xl p-8 h-full hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-11 h-11 bg-accent rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <Icon size={20} className="text-accent-foreground group-hover:text-primary-foreground transition-colors" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground">{pillar.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {pillar.items.map((item) => (
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
      </div>
    </section>
  );
};

export default WhatIDoSection;
