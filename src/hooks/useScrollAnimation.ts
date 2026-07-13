import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const selector =
      '.animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right, .animate-on-scroll-scale';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -8% 0px' }
    );

    const observeAll = () => {
      root.querySelectorAll(selector).forEach((el) => {
        if (!el.classList.contains('visible')) observer.observe(el);
      });
    };
    observeAll();

    // Failsafe: reveal anything at or above viewport bottom
    const revealAbove = () => {
      const cutoff = window.innerHeight + window.scrollY;
      root.querySelectorAll(selector).forEach((el) => {
        if (el.classList.contains('visible')) return;
        const rect = (el as HTMLElement).getBoundingClientRect();
        const top = rect.top + window.scrollY;
        if (top < cutoff) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      });
    };

    const t1 = window.setTimeout(revealAbove, 1200);
    const onHash = () => window.setTimeout(revealAbove, 60);
    window.addEventListener('hashchange', onHash);

    // If user is already scrolled (e.g. anchor deep-link), reveal on load
    if (window.scrollY > 100) revealAbove();

    return () => {
      observer.disconnect();
      window.clearTimeout(t1);
      window.removeEventListener('hashchange', onHash);
    };
  }, []);

  return ref;
}
