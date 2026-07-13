import SectionHeader from './SectionHeader';

const achievements = [
  {
    big: 'AIR 4444',
    title: 'IIT-JEE Advanced',
    description: 'Top 0.5% of 1.2M+ candidates in one of the world\'s toughest exams.',
  },
  {
    big: 'Top 0.5%',
    title: 'JEE Percentile',
    description: 'Ranked among the elite in a nationwide engineering entrance.',
  },
  {
    big: 'Semi-Finalist',
    title: 'iPreneur Summit',
    description: 'Semi-Finalist at iPreneur Social Entrepreneurship Summit.',
  },
  {
    big: 'Runner-Up',
    title: 'Cognizance / Rural Internet',
    description: 'First Runner-Up (Rural Internet, IIT Roorkee) · Second Runner-Up (Cognizance Supply Chain).',
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-16 md:py-20 px-6 bg-paper-2">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="09" label="Recognition" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {achievements.map((a, index) => (
            <div key={a.title} className={`animate-on-scroll-scale stagger-${index + 1} card-paper p-6`}>
              <div className="font-mono-plex text-2xl md:text-3xl font-semibold text-gold tracking-tight mb-4">
                {a.big}
              </div>
              <p className="eyebrow text-ink mb-2">{a.title}</p>
              <p className="text-sm text-dim leading-relaxed">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
