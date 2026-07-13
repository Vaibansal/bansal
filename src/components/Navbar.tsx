import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'About', href: '#about', num: '01' },
  { label: 'AI Work', href: '#featured-projects', num: '02' },
  { label: 'Experience', href: '#experience', num: '04' },
  { label: 'Projects', href: '#projects', num: '07' },
  { label: 'Skills', href: '#skills', num: '08' },
  { label: 'Contact', href: '#contact', num: '10' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-paper/90 backdrop-blur-md border-b border-line' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2 group" aria-label="Home">
          <span className="w-8 h-8 rounded-md bg-ink text-paper font-display font-bold text-sm flex items-center justify-center relative">
            VB
            <span className="absolute -bottom-0.5 left-1.5 right-1.5 h-0.5 bg-gold rounded-full" />
          </span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex items-baseline gap-1.5 text-[13px] font-medium text-dim hover:text-ink transition-colors"
            >
              <span className="font-mono-plex text-[10px] text-faint group-hover:text-gold transition-colors">
                {link.num}
              </span>
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-ink"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-paper/98 backdrop-blur-md border-b border-line">
          <div className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-baseline gap-2 text-sm font-medium text-dim hover:text-ink transition-colors py-2"
              >
                <span className="font-mono-plex text-[10px] text-faint">{link.num}</span>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
