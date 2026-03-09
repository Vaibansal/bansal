import { useCountUp } from '@/hooks/useCountUp';

const stats = [
  { value: 17, suffix: 'M+', prefix: '$', label: 'ARR Driven' },
  { value: 500, suffix: '+', prefix: '', label: 'Team Led' },
  { value: 40, suffix: '%', prefix: '', label: 'Efficiency Gains' },
  { value: 4, suffix: '+', prefix: '', label: 'Years Experience' },
];

const StatItem = ({ value, suffix, prefix, label }: { value: number; suffix: string; prefix: string; label: string }) => {
  const { count, ref } = useCountUp(value, 2000);
  return (
    <div className="text-center">
      <span ref={ref} className="block text-3xl sm:text-4xl font-serif font-bold text-primary">
        {prefix}{count}{suffix}
      </span>
      <span className="text-sm text-muted-foreground mt-1 block">{label}</span>
    </div>
  );
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="animate-on-scroll mb-6">
          <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium mb-3">About Me</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
            A jack of all trades,
            <br />
            <span className="text-primary italic">mastering the art of building.</span>
          </h2>
        </div>

        <div className="animate-on-scroll stagger-1 max-w-3xl mb-16">
          <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
            I'm a Senior Product Manager with a passion for turning complex challenges into elegant solutions. 
            With a background in Computer Science from IIT Roorkee, I've led product initiatives driving 
            $17M+ ARR, managed cross-functional teams of 500+, and founded a comic book brand reaching 
            100K+ users. I thrive at the intersection of strategy, design, and technology.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 animate-on-scroll stagger-2">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
