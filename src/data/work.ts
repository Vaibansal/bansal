// Single source for every project on the site. Mirrors Portfolio/Master_Content.md.
// Enterprise work is anonymised: no employer name, revenue figures, client names or internal links.

export interface Metric {
  num: string;
  label: string;
}

export interface Project {
  slug: string;
  kind: 'independent' | 'enterprise';
  title: string;
  kicker: string;
  oneLine: string;
  context: string;
  problem: string;
  schematic: string[];
  built: string[];
  decisions: string[];
  evals: string[];
  metrics: Metric[];
  stack: string[];
  status: string;
  link?: { label: string; href: string };
}

export const projects: Project[] = [
  // ---------------- Independent builds ----------------
  {
    slug: 'nifty-research-board',
    kind: 'independent',
    title: 'Nifty 50 Research Board',
    kicker: 'Quant research · evaluation method',
    oneLine: 'Rule-based market signals, tested the honest way: rules frozen first, one run, verdict published even when it fails.',
    context: 'Independent research, built in my own time. Live, and updated automatically after every trading day.',
    problem:
      'Most stock-signal dashboards show signals and never test them. I wanted to answer one question properly: if I had followed these exact rules with real money, would I have beaten a Nifty 50 index fund after costs and tax, and what losses would I have sat through?',
    schematic: ['Public data since 2009', 'Signal rules', 'Rules frozen', 'Portfolio simulator', '5 gates', 'Verdict', 'Daily board'],
    built: [
      'A data pipeline over 15 years of prices, NSE daily files, fundamentals, estimates and headlines for all 50 stocks.',
      'Signals at three horizons (3–6 months, 1–3 years, 3+ years) with technical, fundamental and valuation reads, buy and sell zones per stock.',
      'A portfolio simulator with brokerage, slippage, taxes and index-fund costs, so the comparison is against what a real investor would hold.',
      'A rule-based daily update that refreshes the board after every close and records what changed.',
    ],
    decisions: [
      'Pre-registration: the rules were written down and frozen before the test ran, then run exactly once. No tuning after seeing results.',
      'A hard hurdle of +3.0 points a year over the index fund. Beating the index by a little is not enough to justify the effort and risk.',
      'Published the failure. A research board that only shows wins is marketing, not research.',
    ],
    evals: [
      'Return gate: +1.91 points a year over the index fund (2011–2026) against a +3.0 hurdle. Missed.',
      'Stress runs: +1.73 to +2.13 points under harsher assumptions. Missed.',
      'Risk gate: worst fall −33.3% vs the fund’s −35.4%. Met.',
      'Robustness: excess stays positive without the best year, sector or stock. Met.',
      'Repeated for a Nifty 200 momentum rule (also fail) and the S&P 500.',
    ],
    metrics: [
      { num: '15 yrs', label: 'backtest' },
      { num: '5', label: 'gates' },
      { num: 'Fail', label: 'published as is' },
    ],
    stack: ['Python', 'pandas', 'Backtesting', 'Pre-registration', 'Netlify'],
    status: 'Live · updates daily',
    link: { label: 'Open the live board', href: 'https://nifty-research-board-7k2q.netlify.app/' },
  },
  {
    slug: 'gpt-from-scratch',
    kind: 'independent',
    title: 'GPT from Scratch',
    kicker: 'Model internals · PyTorch',
    oneLine: 'A decoder-only Transformer written line by line, then OpenAI’s GPT-2 weights loaded into my own code and fine-tuned.',
    context: 'Independent build, on a laptop GPU.',
    problem:
      'Using LLMs every day is not the same as knowing what happens inside one. I wanted to be able to explain, and rebuild, every step from characters to sampled text.',
    schematic: ['Text', 'Tokenizer', 'Embeddings + positions', 'N × attention + MLP', 'Logits', 'Sample'],
    built: [
      'A bigram baseline, then a character-level Transformer: multi-head causal self-attention, feed-forward blocks, residual connections, LayerNorm and dropout (~10M parameters).',
      'Loaded OpenAI’s released GPT-2 (124M) weights into a model written in the same style, then fine-tuned it on Shakespeare.',
      'Checkpoints every 250 steps, resume after interruption, and a generate mode.',
      'Apple M4 GPU (MPS) support, with small, large and full presets so training fits a laptop.',
    ],
    decisions: [
      'Wrote the attention maths by hand instead of importing a library block, so every tensor shape is visible.',
      'Compared subword (GPT-2) and character-level losses on the same scale by dividing by ~3.3 characters per token.',
      'Tried GPT-2 XL (1.5B): full fine-tuning ran out of 24 GB. Training only the top layers is the practical answer at that size.',
    ],
    evals: [
      'Full from-scratch model: validation loss 1.499 after 5,000 steps, against about 1.48 reported in the lecture.',
      'GPT-2 fine-tuned: about 1.00 per character, a third lower than the from-scratch model on the same text.',
      'Logs and samples for every preset are published in the repo.',
    ],
    metrics: [
      { num: '~10M', label: 'params, from scratch' },
      { num: '124M', label: 'GPT-2 fine-tuned' },
      { num: '1.5B', label: 'memory wall found' },
    ],
    stack: ['PyTorch', 'Transformers', 'MPS', 'tiktoken'],
    status: 'Open source',
    link: { label: 'View code on GitHub', href: 'https://github.com/Vaibansal/gpt-from-scratch' },
  },
  {
    slug: 'rag-from-scratch',
    kind: 'independent',
    title: 'RAG from Scratch',
    kicker: 'Retrieval · no frameworks',
    oneLine: 'Twelve retrieval techniques in plain Python, short enough to read, with nothing hiding the mechanics.',
    context: 'Independent build. The same retrieval code powers the “Ask about my work” agent on this site.',
    problem:
      'Frameworks make RAG easy to start and hard to understand. When answers go wrong you need to know which step failed: the query, the retrieval, the ranking or the generation.',
    schematic: ['Question', 'Router', 'Query rewrite', 'Retrieve', 'Fuse + re-rank', 'Grade', 'Answer'],
    built: [
      'Twelve modes: basic, multi-query, RAG-Fusion (reciprocal rank fusion), decomposition (sequential and parallel), step-back, HyDE, semantic routing, metadata filtering, multi-representation, RAPTOR and adaptive RAG.',
      'Local embeddings (bge-small via fastembed) and an exact NumPy vector store, so indexing and search run with no API key.',
      'ColBERT re-ranking on any mode, and a small state machine for adaptive / corrective RAG with graders and web fallback.',
      'Every run prints the steps it took, so a wrong answer can be traced to the step that caused it.',
    ],
    decisions: [
      'No LangChain, LangGraph or Chroma: a 40-line state machine shows the same ideas with nothing hidden.',
      'Markdown split at headings rather than fixed windows, so chunks keep their meaning.',
      'Claude only for generation, summaries and grading; everything else runs locally.',
    ],
    evals: [
      'Tests for indexing, retrieval and each mode.',
      'Questions the notes cannot answer, used to check the web-fallback path triggers instead of a made-up answer.',
    ],
    metrics: [
      { num: '12', label: 'techniques' },
      { num: '0', label: 'frameworks' },
      { num: 'Local', label: 'embeddings + store' },
    ],
    stack: ['Python', 'fastembed', 'NumPy', 'ColBERT', 'Claude'],
    status: 'Open source',
    link: { label: 'View code on GitHub', href: 'https://github.com/Vaibansal/rag-from-scratch' },
  },
  {
    slug: 'revenue-engine',
    kind: 'independent',
    title: 'The 20-Agent Revenue Engine',
    kicker: 'Multi-agent architecture · blueprint',
    oneLine: 'A complete design for a self-running revenue team: twenty agents, one conductor, one metric each.',
    context: 'Independent architecture blueprint for a D2C / B2C business.',
    problem:
      'Most “AI agent” demos automate one task. A business runs a lifecycle, so I designed the whole thing: acquire, convert, onboard and bill, support, grow and retain.',
    schematic: ['Acquire', 'Convert', 'Onboard & bill', 'Support', 'Grow', 'Retain'],
    built: [
      'Twenty agents across six lifecycle stages, each owning exactly one measurable business metric.',
      'An orchestrator (“the Conductor”) that routes work between agents and escalates to humans.',
      'Shared persistent memory and full call tracing in one plane, so any decision can be replayed.',
    ],
    decisions: [
      'One agent, one metric: an agent with two goals cannot be evaluated.',
      'Voice agents for calls, vector memory for context, tracing for every hand-off.',
    ],
    evals: ['Each agent is designed around the metric it moves, so success is measurable from day one.'],
    metrics: [
      { num: '20', label: 'agents' },
      { num: '6', label: 'lifecycle stages' },
      { num: '1', label: 'conductor' },
    ],
    stack: ['Claude', 'n8n', 'Pinecone', 'Supabase', 'Vapi.ai', 'LangSmith'],
    status: 'Blueprint',
    link: { label: 'Open the interactive blueprint', href: '/multi-agent-revenue-engine.html' },
  },
  {
    slug: 'ai-video-pipeline',
    kind: 'independent',
    title: 'AI Video Production Pipeline',
    kicker: 'Creative AI · orchestration',
    oneLine: 'An explainer video made by orchestrating AI from research to render, then turned into a repeatable rulebook.',
    context: 'Independent pilot for a faceless YouTube channel.',
    problem:
      'AI can draft a script or a clip, but a publishable video needs research that holds up, visuals that match the voice, and a process someone else can repeat.',
    schematic: ['Source research', 'Claim log', 'Script', 'Storyboard', 'Scenes as HTML + AI clips', 'Voice + timing', 'Render'],
    built: [
      'Research with a claim log: every on-screen fact traced to its original source, not to secondary coverage.',
      'Scenes written as HTML motion graphics and rendered to video, with AI clips only for everyday moments.',
      'Text-to-speech voice, and one script-to-scene timing file so a new script or voice re-times the whole video.',
      'Render with crash recovery, so a failed render resumes where it stopped.',
    ],
    decisions: [
      'Build the hardest scene first: it shows early whether the visual style can carry the video.',
      'Label simulated scenes “Illustration” and show sources on charts and quotes.',
    ],
    evals: ['A rough cut, a time log and a rulebook of everything learned, written as the SOP for the next video.'],
    metrics: [
      { num: 'v1', label: 'rough cut' },
      { num: '1', label: 'production rulebook' },
      { num: '0', label: 'unsourced claims' },
    ],
    stack: ['Claude', 'HTML motion graphics', 'TTS', 'AI video', 'ffmpeg'],
    status: 'Pilot',
  },
  {
    slug: 'content-ops-agent',
    kind: 'independent',
    title: 'Content-Ops Intake Agent',
    kicker: 'Agent concept · broadcast',
    oneLine: 'Messy show briefs in, catalogue-ready decisions out, with a human approving every field.',
    context: 'Independent concept with an interactive demo.',
    problem: 'Production houses send briefs as emails, scans and half-filled sheets. Turning them into catalogue entries is slow and inconsistent.',
    schematic: ['OCR', 'Extraction', 'KB retrieval', 'Gap analysis', 'Richness score', 'Rating', 'Marketing copy', 'Human review'],
    built: [
      'An eight-stage pipeline from OCR to human review, where every field carries confidence and evidence.',
      'A 0–100 data-richness score, a calibrated age rating, and auto-drafted follow-up sheets for missing information.',
      'Generated hooks, taglines, comparable titles, slot and SEO keywords.',
    ],
    decisions: ['Self-healing: when a field is missing, the agent asks for it instead of guessing.'],
    evals: ['Every generated field shows its source evidence for the reviewer.'],
    metrics: [
      { num: '8', label: 'stages' },
      { num: '0–100', label: 'richness score' },
      { num: 'HITL', label: 'review' },
    ],
    stack: ['Claude', 'OCR', 'Pinecone', 'Human in the loop'],
    status: 'Concept demo',
    link: { label: 'Open the interactive demo', href: '/content-ops-intake-agent.html' },
  },

  // ---------------- Enterprise systems (anonymised) ----------------
  {
    slug: 'agentic-deal-creation',
    kind: 'enterprise',
    title: 'Agentic Deal Creation',
    kicker: 'Multi-agent workflow · Salesforce',
    oneLine: 'Sales sends an email. Agents turn it into a validated Salesforce deal, and ask for anything missing.',
    context: 'Enterprise build for a large Indian media network. Live in production.',
    problem:
      '100 sales executives re-typed about 1,200 deals a month from deal sheets into Salesforce. The work was repetitive and error-prone, and approver queries arrived late in the cycle.',
    schematic: ['Email + deal sheets', 'Supervisor', 'Extract', 'Validate', 'Readiness gate', 'Create deal', 'Reply'],
    built: [
      'An email-native multi-agent system: a supervisor routes 6 request types (new deal, approval, approver query, reply, child deal, report) to specialised agents.',
      'Agents classify the deal type, check time, rotation and totals rules, split paid and bonus line items, build Salesforce payloads and attach evidence.',
      'A raise-query agent answers approver questions from the original material, and goes back to the salesperson only when the answer is not there.',
      'Custom Salesforce APIs for opportunity, deal, line items, documents, draft and submit, with business-readable errors.',
    ],
    decisions: [
      'A deterministic readiness gate decides, not model confidence. AI never overrides a required document.',
      'Incomplete deals become drafts with a reason code, and the agent asks for what is missing on the same email thread.',
      'Idempotent APIs, so a retry can never create a duplicate deal.',
      'Coordinators can create deals on behalf of salespeople, with both identities recorded.',
    ],
    evals: [
      'Immutable audit record of every extracted value, its source, confidence, validation result and human response.',
      'Explicit statuses from Received to Completed, so every deal’s position is always known.',
      'Measured in production: −25% deal-entry time, −40% entry errors.',
    ],
    metrics: [
      { num: '−25%', label: 'deal-entry time' },
      { num: '−40%', label: 'entry errors' },
      { num: '~1,200', label: 'deals / month' },
    ],
    stack: ['LangGraph', 'Microsoft Graph', 'AWS Lambda · SQS · RDS', 'Salesforce APIs', 'Power Automate'],
    status: 'Live in production',
  },
  {
    slug: 'revenue-agent',
    kind: 'enterprise',
    title: 'Multi-Agent Revenue Analyst',
    kicker: 'Agents over analytics',
    oneLine: 'Leadership asks in plain language. A team of agents answers with numbers, reasons and a ready report.',
    context: 'Enterprise build for a large Indian media network, on top of a revenue dashboard I also built.',
    problem:
      'Revenue questions across 17 TV channels took analysts hours of spreadsheet work: why a channel moved, who the top advertisers were, what the quarter projects to.',
    schematic: ['Question', 'Orchestrator', 'Analyst', 'Explainer', 'Builder', 'Researcher', 'Excel / PPT / PDF'],
    built: [
      'An orchestrator agent that hands work to 4 sub-agents: analyst (numbers), explainer (why it moved), builder (files and projections) and researcher (web).',
      'Read-only data tools (query, variance, drill-down, client view) over the revenue data, behind a tool fence so agents cannot change anything.',
      'The dashboard underneath: server-side role-based access, so each person only ever receives the channels they are allowed.',
    ],
    decisions: [
      'Agents get tools, not database access: every number comes from a tested function.',
      'Files are generated from a JSON spec, so no agent-written code runs to build a report.',
    ],
    evals: [
      '28,000+ automated checks against an independent recalculation: 0 mismatches.',
      '25 cross-page reconciliation scenarios; 4 data bugs found by the eval and fixed before release.',
      'An autopilot that rebuilds the dashboard from the raw export: 99.99% advertiser match.',
    ],
    metrics: [
      { num: '28K+', label: 'checks · 0 mismatches' },
      { num: '4', label: 'sub-agents' },
      { num: '17', label: 'channels' },
    ],
    stack: ['Claude Agent SDK', 'Python', 'pandas', 'Playwright', 'Vercel', 'Redis'],
    status: 'In use',
  },
  {
    slug: 'social-ai',
    kind: 'enterprise',
    title: 'Social AI',
    kicker: 'Audience intelligence · conversational agent',
    oneLine: 'What viewers say about every show, host and contestant, clustered into themes overnight, with an agent you can ask.',
    context: 'Enterprise build for a large Indian media network, across 4 TV channels.',
    problem:
      'Leaders had no timely, structured read of audience conversation across Instagram, Facebook, X and YouTube. Analysis was on demand and a day behind.',
    schematic: ['Social comments', 'LLM enrichment', 'Entity matching', 'Embeddings', 'KNN graph', 'Louvain themes', 'Dashboard + agent'],
    built: [
      'A nightly pipeline: sentiment, entity and summary enrichment, then entities matched to a master list of hosts, judges and contestants.',
      'Theme clustering: embeddings into an OpenSearch KNN graph (similarity 0.8), Louvain community detection, summary-based deduplication, and 15-day cluster windows so new topics surface on their own.',
      'An agent on the dashboard that answers plain-language questions by routing to SQL, a views and engagement API, or both.',
    ],
    decisions: [
      'Raised the similarity threshold from 0.6 to 0.8: smaller, purer themes over big vague ones.',
      'Clusters close after 15 days, so this week’s conversation is never folded into a months-old theme.',
      'Spam, promotions and emoji-only reactions are kept out of person and topic themes.',
    ],
    evals: [
      'An approved 60-question eval set (40 SQL, 12 API, 8 combined) with expected SQL and answers.',
      'A few-shot library covering joins, case-insensitive matching, partial-month caveats and spike-day diagnosis.',
      'Counts reconcile across collection, enrichment, attribution and clustering, with no dropped or duplicate records.',
    ],
    metrics: [
      { num: '~325K', label: 'mentions / month' },
      { num: '60', label: 'eval questions' },
      { num: '4', label: 'channels' },
    ],
    stack: ['LLM enrichment', 'Embeddings', 'OpenSearch', 'Louvain', 'SQL agent'],
    status: 'Live · runs nightly',
  },
  {
    slug: 'adintel',
    kind: 'enterprise',
    title: 'AdIntel',
    kicker: 'Competitive intelligence · data pipeline',
    oneLine: 'Which advertisers buy our platforms, which buy only our rivals, and who owns each gap.',
    context: 'Enterprise build for a large Indian media network.',
    problem: 'Sales had no single view of which advertisers were spending on rival OTT and YouTube channels but not with us.',
    schematic: ['Weekly ad files', 'Ingest', 'Normalise', 'Warehouse', 'Booked vs missed', 'Dashboards + alerts'],
    built: [
      'A Python pipeline over weekly ad-occurrence files and daily TV spot logs into a partitioned warehouse.',
      'Eight screens: overview, account lookup, region, sales team, competitive gaps, TV, ask-the-data and data health.',
      'Persona views and role-wise email alerts, so each owner sees their own missed accounts.',
    ],
    decisions: ['Only two fields may use placeholder data until real feeds land; nothing else is invented.'],
    evals: [
      'Every persona × screen tested at desktop and phone width with zero console errors.',
      'A data-lineage workbook traces every number to its source file.',
    ],
    metrics: [
      { num: '22 lakh', label: 'ad occurrences / cycle' },
      { num: '6,200', label: 'advertisers' },
      { num: '8', label: 'screens' },
    ],
    stack: ['Python', 'Parquet', 'Playwright', 'Email alerts'],
    status: 'In use',
  },
  {
    slug: 'projections-autopilot',
    kind: 'enterprise',
    title: 'Self-Running Projections',
    kicker: 'Scheduled agents',
    oneLine: 'Weekly projections across 6 genres, consolidated by scheduled agents every night.',
    context: 'Enterprise build for a large Indian media network.',
    problem: 'Six genre books were consolidated by hand every week for a leadership view.',
    schematic: ['Genre books', 'Rulebook', 'Self-checks', 'Dashboard', 'Leadership email'],
    built: ['Scheduled agent runs that follow a written rulebook, tie every file to its own totals and draft the leadership email.'],
    decisions: ['Headers are read by text, never by remembered column letters, because layouts shift week to week.'],
    evals: ['A run stops loudly if any channel does not tie to its totals row.'],
    metrics: [
      { num: 'Nightly', label: 'unattended' },
      { num: '6', label: 'genres' },
    ],
    stack: ['Claude agents', 'Python', 'Excel', 'Outlook'],
    status: 'In use',
  },
  {
    slug: 'security-audit',
    kind: 'enterprise',
    title: 'Agent-Led Security Audit',
    kicker: 'AI for QA',
    oneLine: 'An agent tested every login and persona of an internal sales app before rollout.',
    context: 'Enterprise engagement for a large Indian media network.',
    problem: 'Access rules for 5 personas and 131 users had never been tested end to end.',
    schematic: ['Capture API contract', 'Replay per identity', 'Access matrix', 'Ranked findings'],
    built: ['Captured the app’s API contract, then replayed its own workflow calls for every identity and compared what each person can see with what they should see.'],
    decisions: ['Read-only by design: nothing in the app was written or changed.'],
    evals: ['2 critical and 8 high-to-medium findings, each with its blast radius.'],
    metrics: [
      { num: '131', label: 'identities tested' },
      { num: '2', label: 'critical issues found' },
    ],
    stack: ['Browser agents', 'API replay', 'Access-matrix testing'],
    status: 'Delivered',
  },
];

export const independent = projects.filter((p) => p.kind === 'independent');
export const enterprise = projects.filter((p) => p.kind === 'enterprise');
export const bySlug = (slug: string) => projects.find((p) => p.slug === slug);

export const principles = [
  {
    title: 'Evals before demos',
    body: 'Every system ships with a harness: 28,000+ reconciliation checks, a 60-question agent eval, backtests with rules frozen before the run.',
  },
  {
    title: 'Rulebooks over memory',
    body: 'Agents follow written rulebooks and handoff files, so tonight’s run behaves like last week’s, and anyone can pick it up.',
  },
  {
    title: 'Gates where it matters',
    body: 'Where money or records change, a deterministic gate decides, not model confidence. Incomplete work waits as a draft and asks.',
  },
  {
    title: 'Access by design',
    body: 'Role-based access on the server, audit trails on every action, and data the browser never receives unless the person may see it.',
  },
];

export const career = [
  {
    org: 'Sony Pictures Networks India',
    role: 'AI Product Architect, ETG AI Lab',
    dates: 'Sep 2026 – now',
    line: 'Designs and ships agentic AI products for ad sales and audience intelligence, from architecture to evaluation.',
  },
  {
    org: 'UnifyApps',
    role: 'Sr Product Manager → Associate Director, Product Management',
    dates: 'Nov 2024 – Jul 2026',
    line: 'AI-driven demo automation: −47% delivery time, $1.2M new ARR, 1,000+ connectors, team of 11.',
  },
  {
    org: 'Sprinklr',
    role: 'Product Analyst → Associate Product Manager → Product Manager',
    dates: 'Jun 2021 – Oct 2024',
    line: 'Speech-to-text after-call automation (+15% call attempts), Best Time to Call prediction (+18% connects), $17M ARR, 15K+ users.',
  },
  {
    org: 'TBS Planet Comics',
    role: 'Founding Member · IIT Roorkee incubated',
    dates: 'May 2018 – Dec 2020',
    line: 'Vernacular comics in 6 languages, 6,000+ subscribers, 500+ campus ambassadors.',
  },
];

export const alongside =
  'Alongside full-time roles, I have worked as a strategic operator for founders in the UK, USA, Australia and the Middle East: executive support, operations, sales outreach and social channels.';

export const skills = [
  { group: 'Agents', items: ['Multi-agent orchestration', 'Claude Agent SDK', 'LangGraph', 'Tool & guardrail design', 'MCP', 'Browser agents', 'Human in the loop'] },
  { group: 'Retrieval & evals', items: ['RAG (HyDE, RAG-Fusion, RAPTOR)', 'ColBERT re-ranking', 'Embeddings', 'Vector search', 'LLM evals', 'Reconciliation harnesses'] },
  { group: 'ML & data', items: ['PyTorch', 'Transformers', 'Fine-tuning', 'Local LLMs', 'Python', 'pandas', 'SQL', 'AWS', 'Vercel'] },
  { group: 'Product', items: ['Strategy & roadmap', 'Discovery', 'GTM', 'Stakeholder management', 'Team leadership', 'Salesforce'] },
];

export const recognition = [
  'B.Tech, IIT Roorkee (2021)',
  'IIT-JEE Advanced AIR 4444 · top 0.5% of 1.2M+',
  'Semi-finalist, iPreneur 2018 (top 20)',
  'First runner-up, Rural Internet, IIT Roorkee',
  'Second runner-up, Cognizance Supply Chain',
];
