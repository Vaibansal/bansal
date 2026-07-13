import { Globe, Mail, BarChart3, Share2, Users, Zap } from 'lucide-react';
import SectionHeader from './SectionHeader';

const eaAreas = [
  {
    icon: Mail,
    title: 'Executive Support',
    items: [
      'Managing inboxes and calendars for founders',
      'Preparing daily briefs and meeting notes',
      'Research briefs before important meetings',
    ],
  },
  {
    icon: Globe,
    title: 'Operations Management',
    items: [
      'Managing internal and external stakeholders',
      'Coordinating across teams and departments',
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
    title: 'Social & Digital',
    items: [
      'Managing Instagram, Facebook, LinkedIn, Twitter',
      'Content scheduling and engagement analysis',
      'Building brand presence for founders',
    ],
  },
  {
    icon: Users,
    title: 'Stakeholder Coordination',
    items: [
      'Cross-region alignment across UK/USA/AU/ME',
      'Meeting preparation & follow-through',
      'Trusted point of contact for founders',
    ],
  },
  {
    icon: Zap,
    title: 'Fast Execution',
    items: [
      'Turning strategy into daily action',
      'Removing bottlenecks for founders',
      'Owning outcomes end-to-end',
    ],
  },
];

const EASection = () => {
  return (
    <section id="ea-operations" className="py-16 md:py-20 px-6 bg-paper-2">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="05" label="Executive Ops" />

        <div className="animate-on-scroll grid md:grid-cols-[1.4fr_1fr] gap-8 items-end mb-8">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink leading-tight">
            Executive Assistant & <span className="italic text-gold">Operations.</span>
          </h2>
          <p className="text-dim text-sm md:text-base italic max-w-md md:text-right">
            "Operational excellence, strategic thinking, fast execution — as a trusted partner to founders."
          </p>
        </div>

        <p className="animate-on-scroll text-sm text-dim mb-8 max-w-2xl">
          Worked with founders and businesses across the UK, USA, Australia, and the Middle East as a strategic
          executive assistant and operator.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {eaAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className={`animate-on-scroll stagger-${(index % 6) + 1} card-paper p-5`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon size={16} className="text-gold-lg" strokeWidth={1.5} />
                  <h3 className="font-mono-plex text-[11px] tracking-[0.16em] uppercase text-ink font-semibold">
                    {area.title}
                  </h3>
                </div>
                <ul className="space-y-1.5">
                  {area.items.slice(0, 3).map((item) => (
                    <li key={item} className="text-[13px] text-dim flex items-start gap-2 leading-relaxed">
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

export default EASection;
