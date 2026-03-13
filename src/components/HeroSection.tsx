import { ArrowDown, Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="text-reveal text-sm tracking-[0.3em] uppercase text-muted-foreground font-medium mb-6">
          Product Manager · Strategy &amp; Operations · Founder · Executive Operator
        </p>

        <h1 className="text-reveal text-reveal-delay-1 text-5xl sm:text-7xl lg:text-8xl font-serif font-bold text-foreground leading-[1.1] mb-6">
          Vaibhav
          <br />
          <span className="text-primary">Bansal</span>
        </h1>

        <p className="text-reveal text-reveal-delay-2 text-lg sm:text-xl text-muted-foreground font-light max-w-2xl mx-auto mb-4">
          I build products, scale operations, and help founders execute faster.
        </p>

        <p className="text-reveal text-reveal-delay-3 text-sm text-muted-foreground/70 max-w-lg mx-auto mb-10">
          From building $17M ARR products to leading AI-driven automation initiatives, my work sits at the intersection of product, growth, and execution.
        </p>

        <div className="text-reveal text-reveal-delay-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#experience"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-border text-foreground rounded-full text-sm font-medium hover:bg-secondary transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
          >
            <Download size={16} />
            Download Resume
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/50 animate-bounce"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
};

export default HeroSection;
