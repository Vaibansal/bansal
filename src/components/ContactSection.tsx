import { Mail, Phone, Linkedin, MapPin, ArrowUpRight } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="bg-ink text-paper py-20 md:py-24 px-6 relative overflow-hidden">
      {/* soft gold glow */}
      <div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'hsl(var(--gold) / 0.15)' }}
      />
      <div
        className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl pointer-events-none"
        style={{ background: 'hsl(var(--teal) / 0.12)' }}
      />

      <div className="max-w-5xl mx-auto relative">
        <div className="animate-on-scroll flex items-center gap-4 mb-10">
          <span className="font-mono-plex text-[11px] tracking-[0.2em] uppercase" style={{ color: 'hsl(var(--gold))' }}>
            10
          </span>
          <span className="font-mono-plex text-[11px] tracking-[0.2em] text-paper uppercase">— Contact</span>
          <span className="flex-1 h-px" style={{ background: 'hsl(var(--paper) / 0.15)' }} />
        </div>

        <div className="animate-on-scroll max-w-3xl mb-12">
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.05] mb-5">
            Let's build something that{' '}
            <span className="italic" style={{ color: 'hsl(var(--gold))' }}>
              runs itself.
            </span>
          </h2>
          <p className="text-lg" style={{ color: 'hsl(var(--paper) / 0.7)' }}>
            Open to discussing product management, operations, new opportunities, or just having a great conversation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-3 max-w-2xl mb-16">
          {[
            { icon: Mail, label: 'Email', value: 'vaibhavbansal2812@gmail.com', href: 'mailto:vaibhavbansal2812@gmail.com' },
            { icon: Phone, label: 'Phone', value: '+91 8949078417', href: 'tel:+918949078417' },
            {
              icon: Linkedin,
              label: 'LinkedIn',
              value: 'Vaibhav Bansal',
              href: 'https://linkedin.com/in/vaibhav-bansal-354b77153',
              external: true,
            },
            { icon: MapPin, label: 'Location', value: 'Gurugram, India' },
          ].map((c, i) => {
            const Icon = c.icon;
            const inner = (
              <>
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: 'hsl(var(--paper) / 0.08)' }}
                >
                  <Icon size={16} style={{ color: 'hsl(var(--gold))' }} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-mono-plex text-[10px] tracking-[0.18em] uppercase" style={{ color: 'hsl(var(--paper) / 0.5)' }}>
                    {c.label}
                  </p>
                  <p className="text-sm mt-0.5 truncate">{c.value}</p>
                </div>
                {c.href && <ArrowUpRight size={14} style={{ color: 'hsl(var(--paper) / 0.4)' }} />}
              </>
            );
            const commonCls =
              'animate-on-scroll flex items-center gap-3 p-4 rounded-xl border transition-all hover:border-[hsl(var(--gold))] group';
            return c.href ? (
              <a
                key={c.label}
                href={c.href}
                target={c.external ? '_blank' : undefined}
                rel={c.external ? 'noopener noreferrer' : undefined}
                className={`${commonCls} stagger-${i + 1}`}
                style={{ borderColor: 'hsl(var(--paper) / 0.12)' }}
              >
                {inner}
              </a>
            ) : (
              <div
                key={c.label}
                className={`${commonCls} stagger-${i + 1}`}
                style={{ borderColor: 'hsl(var(--paper) / 0.12)' }}
              >
                {inner}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t"
          style={{ borderColor: 'hsl(var(--paper) / 0.12)' }}
        >
          <p className="font-mono-plex text-[11px] tracking-[0.16em] uppercase" style={{ color: 'hsl(var(--paper) / 0.5)' }}>
            © {new Date().getFullYear()} Vaibhav Bansal
          </p>
          <div className="flex items-center gap-5">
            <a
              href="https://linkedin.com/in/vaibhav-bansal-354b77153"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono-plex text-[11px] tracking-[0.16em] uppercase transition-colors"
              style={{ color: 'hsl(var(--paper) / 0.7)' }}
            >
              LinkedIn ↗
            </a>
            <a
              href="mailto:vaibhavbansal2812@gmail.com"
              className="font-mono-plex text-[11px] tracking-[0.16em] uppercase transition-colors"
              style={{ color: 'hsl(var(--paper) / 0.7)' }}
            >
              Email ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
