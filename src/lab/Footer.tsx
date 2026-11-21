const Footer = () => (
  <footer id="contact" className="scroll-mt-20" style={{ borderTop: '1px solid var(--line)' }}>
    <div className="wrap" style={{ paddingTop: 96, paddingBottom: 48 }}>
      <p className="label"><span className="signal">08</span> / Contact</p>
      <h2 className="h-2xl" style={{ marginTop: 24, maxWidth: '16ch' }}>
        Have a workflow that should run itself?
      </h2>
      <a
        href="mailto:vaibhavbansal2812@gmail.com"
        className="block mono"
        style={{ marginTop: 40, fontSize: 'clamp(20px, 3.6vw, 40px)', letterSpacing: '-0.03em', borderBottom: '1px solid var(--line-2)', paddingBottom: 16, wordBreak: 'break-all' }}
      >
        vaibhavbansal2812@gmail.com <span className="signal">→</span>
      </a>
      <div className="flex flex-wrap gap-x-10 gap-y-4" style={{ marginTop: 32 }}>
        {[
          { l: 'LinkedIn', h: 'https://linkedin.com/in/vaibhav-bansal-354b77153' },
          { l: 'GitHub', h: 'https://github.com/Vaibansal' },
          { l: 'Résumé (PDF)', h: '/Vaibhav_Bansal_CV.pdf' },
        ].map((x) => (
          <a key={x.l} href={x.h} target="_blank" rel="noopener noreferrer" className="label" style={{ color: 'var(--text)' }}>
            {x.l} ↗
          </a>
        ))}
        <span className="label">Mumbai, India</span>
      </div>
      <p className="label" style={{ marginTop: 72 }}>© {new Date().getFullYear()} Vaibhav Bansal · Built and evaluated by hand</p>
    </div>
  </footer>
);

export default Footer;
