# Ask-about-my-work agent (backend)

The site works without this: it then shows the retrieved passages and their sources.
With it, Claude writes a short answer from those passages.

Deploy (once, from your personal Vercel account):

1. `cd agent-api && npx vercel@latest` and follow the prompts (new project, e.g. `bansal-ask`).
2. In the Vercel project settings add `ANTHROPIC_API_KEY` (create a key in the Claude Console and set a monthly spend limit on it).
3. `npx vercel@latest --prod`
4. In Lovable (or a `.env` file), set `VITE_ASK_API_URL=https://<your-project>.vercel.app/api/ask` and republish.

Guards: allowed origins only, 12 questions per IP per 10 minutes, 500-character questions, answers only from the passages sent.
Model: claude-opus-5-5 at low effort, with server-side refusal fallback enabled.
