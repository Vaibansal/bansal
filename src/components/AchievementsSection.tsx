import { Award, Trophy, Star, Target } from 'lucide-react';

const achievements = [
  {
    icon: Trophy,
    title: 'National Finalist – Tata Crucible',
    description: 'National Finalist at India\'s premier business quiz competition.',
  },
  {
    icon: Award,
    title: 'IIT-JEE Advanced – Top 0.5%',
    description: 'Ranked among the top 0.5% of 1.2M+ candidates in one of the world\'s toughest exams.',
  },
  {
    icon: Star,
    title: 'Winner – E-Summit IIT Roorkee',
    description: 'Won the flagship entrepreneurship competition at IIT Roorkee\'s E-Summit.',
  },
  {
    icon: Target,
    title: 'Product Impact – $17M+ ARR',
    description: 'Directly contributed to $17M+ annual recurring revenue through product initiatives at Sprinklr.',
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="animate-on-scroll mb-16 text-center">
          <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium mb-3">Recognition</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">Achievements</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((a, index) => {
            const Icon = a.icon;
            return (
              <div
                key={a.title}
                className={`animate-on-scroll-scale stagger-${index + 1} group`}
              >
                <div className="bg-card border border-border rounded-2xl p-6 text-center h-full hover:shadow-lg hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2">
                  <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon size={24} className="text-accent-foreground group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-serif text-base font-semibold text-foreground mb-2 leading-tight">{a.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
