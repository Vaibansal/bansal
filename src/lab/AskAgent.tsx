import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { retrieve, type Passage } from './retrieval';

const API = import.meta.env.VITE_ASK_API_URL as string | undefined;

const SUGGESTED = [
  'Which agent systems are live in production?',
  'How do you evaluate an AI system before shipping it?',
  'What did you build from scratch?',
  'Tell me about the deal creation agent',
];

interface Turn {
  q: string;
  a?: string;
  sources: Passage[];
  mode: 'llm' | 'retrieval';
  error?: string;
}

const AskAgent = () => {
  const [turns, setTurns] = useState<Turn[]>([]);
  const [q, setQ] = useState('');
  const [busy, setBusy] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  const ask = async (question: string) => {
    const text = question.trim().slice(0, 500);
    if (!text || busy) return;
    setQ('');
    const sources = retrieve(text, 4);
    const turn: Turn = { q: text, sources, mode: API ? 'llm' : 'retrieval' };
    setTurns((t) => [...t, turn]);
    setTimeout(() => endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 50);

    if (!API) return;
    setBusy(true);
    try {
      const res = await fetch(API, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: text,
          passages: sources.map((s) => ({ title: s.title, text: s.text })),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'The agent is unavailable right now.');
      setTurns((t) => t.map((x) => (x === turn ? { ...x, a: data.answer } : x)));
    } catch (e) {
      const msg = e instanceof Error ? e.message : 'The agent is unavailable right now.';
      setTurns((t) => t.map((x) => (x === turn ? { ...x, mode: 'retrieval', error: msg } : x)));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="tile" style={{ padding: 0 }}>
      <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4" style={{ borderBottom: '1px solid var(--line)' }}>
        <span className="label">ask · retrieval over this portfolio</span>
        <span className="label">{API ? 'bm25 retrieve → claude answer' : 'bm25 retrieve · sources shown'}</span>
      </div>

      <div className="px-5 py-5" style={{ minHeight: 220, maxHeight: 520, overflowY: 'auto' }}>
        {turns.length === 0 && (
          <div>
            <p className="dim" style={{ fontSize: 'var(--t-sm)', marginBottom: 16 }}>
              Ask anything about my work. Answers come only from what is on this site, with the sources linked.
            </p>
            <div className="flex flex-wrap gap-2">
              {SUGGESTED.map((s) => (
                <button key={s} onClick={() => ask(s)} className="chip" style={{ cursor: 'pointer', textTransform: 'none', letterSpacing: 0, fontSize: 13 }}>
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}

        {turns.map((t, i) => (
          <div key={i} style={{ marginBottom: 28 }}>
            <p className="mono" style={{ fontSize: 13, color: 'var(--signal)', marginBottom: 10 }}>&gt; {t.q}</p>
            {t.mode === 'llm' && !t.a && <p className="dim" style={{ fontSize: 'var(--t-sm)' }}>Retrieving and drafting an answer<span className="caret" style={{ marginLeft: 6 }} /></p>}
            {t.a && <p style={{ fontSize: 15.5, lineHeight: 1.65, whiteSpace: 'pre-wrap', marginBottom: 12 }}>{t.a}</p>}
            {t.error && <p className="faint" style={{ fontSize: 13, marginBottom: 8 }}>{t.error} Here is what I found instead:</p>}
            {t.sources.length === 0 ? (
              <p className="dim" style={{ fontSize: 'var(--t-sm)' }}>Nothing on this site covers that. Try asking about a project, an evaluation, or my career.</p>
            ) : (
              <div className="grid gap-2">
                {(t.mode === 'retrieval' ? t.sources : t.sources.slice(0, 3)).map((s, j) => (
                  <Link key={s.id} to={s.href} className="block" style={{ border: '1px solid var(--line)', borderRadius: 2, padding: '10px 12px' }}>
                    <span className="label" style={{ color: 'var(--faint)' }}>source {j + 1} · </span>
                    <span style={{ fontSize: 14 }}>{s.title}</span>
                    {t.mode === 'retrieval' && (
                      <span className="dim block" style={{ fontSize: 13.5, marginTop: 4, lineHeight: 1.55 }}>
                        {s.text.length > 260 ? s.text.slice(0, 260) + '…' : s.text}
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        <div ref={endRef} />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          ask(q);
        }}
        className="flex gap-2 px-5 py-4"
        style={{ borderTop: '1px solid var(--line)' }}
      >
        <label htmlFor="ask-input" className="sr-only">Ask about my work</label>
        <input
          id="ask-input"
          className="chat-input"
          placeholder="e.g. How does the deal agent avoid bad submissions?"
          value={q}
          maxLength={500}
          onChange={(e) => setQ(e.target.value)}
        />
        <button type="submit" className="btn btn-solid" disabled={busy || !q.trim()} style={{ opacity: busy || !q.trim() ? 0.5 : 1 }}>
          Ask
        </button>
      </form>
    </div>
  );
};

export default AskAgent;
