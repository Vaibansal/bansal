import { Package, TrendingUp, Users, Cpu } from 'lucide-react';
import SectionHeader from './SectionHeader';

const pillars = [
  {
    icon: Package,
    title: 'Product Management',
    items: [
      'Product strategy and roadmap creation',
      'User persona design and product-market fit',
      'Product launches and GTM planning',
      'Data-driven product development',
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
      'Founder and executive support across regions',
      'Calendar, inbox, and meeting management',
      'Stakeholder coordination across teams',
      'Internal systems and workflow creation',
    ],
  },
  {
    icon: Cpu,
    title: 'AI & Automation',
    items: [
      'AI-powered product workflows',
      'Automation for demos and sales enablement',
      'Integrations across multiple platforms',
      'Low-code automation systems',
    ],
  },
];

const WhatIDoSection = () => {
  return (
    <section id="whatido" className="py-16 md:py-20 px-6 bg-paper-2">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="03" label="What I do" />

        <div className="grid sm:grid-cols-2 gap-5">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`animate-on-scroll stagger-${index + 1} card-paper p-6 group`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-px bg-gold" />
                  <Icon size={18} className="text-gold-lg" strokeWidth={1.5} />
                  <h3 className="font-display text-lg font-semibold text-ink">{pillar.title}</h3>
                </div>
                <ul className="space-y-1.5">
                  {pillar.items.slice(0, 4).map((item) => (
                    <li key={item} className="text-sm text-dim flex items-start gap-2 leading-relaxed">
                      <span className="w-1 h-1 bg-gold rounded-full mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatIDoSection;
