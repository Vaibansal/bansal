// Small BM25 retriever over the portfolio's own content: the same idea as my RAG-from-scratch build,
// sized for the browser. Each passage links back to the page it came from.
import { projects, career, principles, alongside, skills, recognition } from '@/data/work';

export interface Passage {
  id: string;
  title: string;
  href: string;
  text: string;
}

const passages: Passage[] = [];
for (const p of projects) {
  const href = `/work/${p.slug}`;
  const base = `${p.title} (${p.kind === 'independent' ? 'independent build' : 'enterprise system'}).`;
  passages.push({ id: `${p.slug}-overview`, title: p.title, href, text: `${base} ${p.oneLine} ${p.context} ${p.problem}` });
  passages.push({ id: `${p.slug}-built`, title: `${p.title}: what was built`, href, text: `${base} ${p.built.join(' ')} Stack: ${p.stack.join(', ')}.` });
  passages.push({
    id: `${p.slug}-evals`,
    title: `${p.title}: decisions and evaluation`,
    href,
    text: `${base} ${p.decisions.join(' ')} ${p.evals.join(' ')} Results: ${p.metrics.map((m) => `${m.num} ${m.label}`).join(', ')}.`,
  });
}
for (const c of career) {
  passages.push({ id: `career-${c.org}`, title: `${c.org}: ${c.role}`, href: '/#career', text: `${c.org}, ${c.role}, ${c.dates}. ${c.line}` });
}
passages.push({ id: 'principles', title: 'How I build', href: '/#principles', text: principles.map((p) => `${p.title}: ${p.body}`).join(' ') });
passages.push({ id: 'alongside', title: 'Executive operations', href: '/#career', text: alongside });
passages.push({ id: 'skills', title: 'Skills', href: '/#skills', text: skills.map((s) => `${s.group}: ${s.items.join(', ')}.`).join(' ') });
passages.push({ id: 'education', title: 'Education and recognition', href: '/#skills', text: recognition.join('. ') + '.' });

const STOP = new Set('a an and are as at be by did do does for from has have how i in is it its me my of on or that the this to was what when where which who why will with you your about built build tell'.split(' '));
const tokenize = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9+.%\s-]/g, ' ').split(/\s+/).map((w) => w.replace(/^[.-]+|[.-]+$/g, '')).filter((w) => w && !STOP.has(w));

const docs = passages.map((p) => tokenize(`${p.title} ${p.text}`));
const avgLen = docs.reduce((a, d) => a + d.length, 0) / docs.length;
const df = new Map<string, number>();
docs.forEach((d) => new Set(d).forEach((w) => df.set(w, (df.get(w) || 0) + 1)));

export function retrieve(query: string, k = 4): Passage[] {
  const q = tokenize(query);
  const N = docs.length, k1 = 1.4, b = 0.75;
  const scored = docs.map((d, i) => {
    let s = 0;
    for (const term of q) {
      const tf = d.filter((w) => w === term || (term.length > 4 && w.startsWith(term.slice(0, -1)))).length;
      if (!tf) continue;
      const idf = Math.log(1 + (N - (df.get(term) || 0) + 0.5) / ((df.get(term) || 0) + 0.5));
      s += idf * ((tf * (k1 + 1)) / (tf + k1 * (1 - b + (b * d.length) / avgLen)));
    }
    return { i, s };
  });
  return scored.filter((x) => x.s > 0).sort((a, b2) => b2.s - a.s).slice(0, k).map((x) => passages[x.i]);
}
