import { Link } from 'react-router-dom';

const links = [
  { label: 'Builds', href: '/#builds' },
  { label: 'In production', href: '/#production' },
  { label: 'Ask', href: '/#ask' },
  { label: 'Career', href: '/#career' },
  { label: 'Contact', href: '/#contact' },
];

const Nav = () => (
  <header
    className="fixed top-0 inset-x-0 z-50"
    style={{ background: 'rgba(15,16,17,0.72)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--line)' }}
  >
    <div className="wrap flex items-center justify-between" style={{ height: 60 }}>
      <Link to="/" className="mono flex items-center gap-3" style={{ fontSize: 13 }} aria-label="Home">
        <span style={{ width: 9, height: 9, background: 'var(--signal)', display: 'inline-block' }} />
        <span>VAIBHAV BANSAL</span>
      </Link>
      <nav className="hidden md:flex items-center gap-8">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="label" style={{ color: 'var(--dim)' }}>
            {l.label}
          </a>
        ))}
      </nav>
      <a href="/Vaibhav_Bansal_CV.pdf" target="_blank" rel="noopener noreferrer" className="label" style={{ color: 'var(--text)' }}>
        Résumé ↗
      </a>
    </div>
  </header>
);

export default Nav;
