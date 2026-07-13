import SectionHeader from './SectionHeader';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-20 px-6 bg-paper">
      <div className="max-w-6xl mx-auto">
        <SectionHeader index="01" label="About" />

        <div className="grid md:grid-cols-[1.6fr_1fr] gap-10 items-start">
          <div className="animate-on-scroll">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-6 leading-tight">
              A builder and operator, <span className="italic text-gold">who gets things done.</span>
            </h2>
            <div className="space-y-4 text-dim max-w-[68ch] text-base leading-relaxed">
              <p>
                I am a product and business operator who enjoys building systems, products, and businesses from the
                ground up. Currently a Senior Product Manager at UnifyApps, I lead initiatives focused on AI-driven
                product experiences and automation — designing scalable products, integrating multiple systems, and
                helping enterprise clients adopt complex AI platforms.
              </p>
              <p>
                Before this, I helped build and scale products at Sprinklr that generated over $17M in ARR while
                improving user productivity across customer care platforms. Alongside corporate roles, I have supported
                founders globally as a strategic operator — managing communications, sales outreach, and internal
                operations as a trusted execution partner.
              </p>
            </div>
          </div>

          {/* Side card */}
          <aside className="animate-on-scroll-right card-paper p-6">
            <p className="eyebrow text-gold mb-3">Currently</p>
            <p className="font-display text-lg text-ink leading-snug">Senior PM @ UnifyApps</p>
            <p className="text-sm text-dim mt-1">AI-driven product experiences · Mumbai</p>

            <div className="h-px bg-[hsl(var(--line))] my-5" />

            <p className="eyebrow text-gold mb-3">Previously</p>
            <ul className="space-y-2 text-sm text-ink">
              <li className="flex items-baseline gap-2">
                <span className="w-1.5 h-1.5 bg-gold rounded-full" /> Sprinklr — Product Manager
              </li>
              <li className="flex items-baseline gap-2">
                <span className="w-1.5 h-1.5 bg-gold rounded-full" /> TBS Planet Comics — Co-founded
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
