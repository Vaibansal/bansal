import { ArrowDown, Download } from 'lucide-react';
import portrait from '@/assets/portrait.jpeg.asset.json';

const heroStats = [
  { num: '$21M+', label: 'Value delivered' },
  { num: '5+ yrs', label: 'Product & ops' },
  { num: '47%', label: 'Efficiency gains' },
  { num: '600K+', label: 'Live users' },
];

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-10">
      {/* soft accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 right-8 w-72 h-72 rounded-full blur-3xl" style={{ background: 'hsl(var(--gold) / 0.06)' }} />
        <div className="absolute bottom-24 left-8 w-96 h-96 rounded-full blur-3xl" style={{ background: 'hsl(var(--teal) / 0.05)' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full px-6">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-10 md:gap-14 items-center">
          {/* Left: name & CTAs */}
          <div>
            <p className="text-reveal eyebrow text-dim mb-6">
              Product Manager · Strategy &amp; Ops · Founder · Executive Operator
            </p>

            <h1 className="text-reveal text-reveal-delay-1 font-display text-6xl sm:text-7xl lg:text-8xl font-bold text-ink leading-[0.95] mb-6">
              Vaibhav
              <br />
              <span className="italic text-gold-lg">Bansal.</span>
            </h1>

            <p className="text-reveal text-reveal-delay-2 text-lg sm:text-xl text-ink font-light max-w-xl mb-3">
              I build products, scale operations, and help founders execute faster.
            </p>
            <p className="text-reveal text-reveal-delay-3 text-sm text-dim max-w-lg mb-8 leading-relaxed">
              From building $21M+ ARR products to leading AI-driven automation initiatives, my work sits at the
              intersection of product, growth, and execution.
            </p>

            <div className="text-reveal text-reveal-delay-4 flex flex-wrap items-center gap-3">
              <a href="#featured-projects" className="btn-ink">View my work</a>
              <a href="#contact" className="btn-outline">
                <Download size={13} /> Resume
              </a>
            </div>
          </div>

          {/* Right: portrait slot */}
          <div className="text-reveal text-reveal-delay-2 md:justify-self-end">
            <div className="relative">
              <div
                className="w-full max-w-[320px] aspect-[4/5] rounded-2xl border border-gold overflow-hidden relative"
                style={{ background: 'hsl(var(--paper-2))' }}
              >
                <img
                  src={portrait.url}
                  alt="Vaibhav Bansal portrait"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="eager"
                />
                {/* subtle grain */}
                <div
                  className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none"
                  style={{
                    backgroundImage:
                      'radial-gradient(hsl(var(--line-2)) 1px, transparent 1px)',
                    backgroundSize: '14px 14px',
                  }}
                />
              </div>
              <p className="eyebrow text-dim mt-3 text-center md:text-left">
                Vaibhav Bansal · Mumbai
              </p>
            </div>
          </div>
        </div>

        {/* Stat bar */}
        <div className="text-reveal text-reveal-delay-4 mt-14 border-t border-line pt-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
          {heroStats.map((s) => (
            <div key={s.label} className="flex flex-col">
              <span className="font-mono-plex text-xl sm:text-2xl text-gold font-semibold tracking-tight">{s.num}</span>
              <span className="eyebrow text-dim mt-1">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <a href="#about" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-faint animate-bounce" aria-label="Scroll down">
        <ArrowDown size={18} />
      </a>
    </section>
  );
};

export default HeroSection;
