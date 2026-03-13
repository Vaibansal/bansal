import { useCountUp } from '@/hooks/useCountUp';

const stats = [
  { value: 17, suffix: 'M+', prefix: '$', label: 'ARR Product' },
  { value: 400, suffix: '+', prefix: '', label: 'Integrations' },
  { value: 47, suffix: '%', prefix: '', label: 'Efficiency Gains' },
  { value: 6000, suffix: '+', prefix: '', label: 'Users Built' },
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
            A builder and operator,
            <br />
            <span className="text-primary italic">who gets things done.</span>
          </h2>
        </div>

        <div className="animate-on-scroll stagger-1 max-w-3xl mb-6">
          <p className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-4">
            I am a product and business operator who enjoys building systems, products, and businesses from the ground up. Over the past few years, I have worked across product management, growth strategy, operations, and executive support roles.
          </p>
          <p className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-4">
            Currently, I work as a Senior Product Manager at UnifyApps where I lead initiatives focused on AI-driven product experiences and automation. My work involves designing scalable product demos, integrating multiple systems, and helping enterprise clients understand and adopt complex AI platforms.
          </p>
          <p className="text-muted-foreground leading-relaxed text-base sm:text-lg mb-4">
            Before this, I worked at Sprinklr where I contributed to building and scaling products that generated over $17M in ARR while improving user productivity and reducing operational friction across customer care platforms.
          </p>
          <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">
            Alongside my corporate roles, I have also supported founders and executives globally as an Executive Assistant and strategic operator — managing calendars, communications, sales outreach, and internal operations while acting as a trusted execution partner.
          </p>
        </div>

        <div className="animate-on-scroll stagger-2 bg-card border border-border rounded-2xl p-8 mt-12">
          <p className="text-sm tracking-[0.2em] uppercase text-primary font-medium mb-6 text-center">Impact at a Glance</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StatItem key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
