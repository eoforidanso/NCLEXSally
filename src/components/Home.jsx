import { CATEGORIES, NCJMM, isNGN } from '../data/categories.js'

const Icon = ({ children, size = 19 }) => (
  <svg className="mode-icon" width={size} height={size} viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{children}</svg>
)
const IconZap = () => <Icon><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></Icon>
const IconClock = () => <Icon><circle cx="12" cy="12" r="9" /><polyline points="12 7 12 12 15.5 14" /></Icon>
const IconLayers = () => (
  <Icon><polygon points="12 2 2 8 12 14 22 8 12 2" /><polyline points="2 15 12 21 22 15" /><polyline points="2 11.5 12 17.5 22 11.5" /></Icon>
)
const IconRotate = () => <Icon><polyline points="1 4 1 10 7 10" /><path d="M3.5 15a9 9 0 1 0 2-9.4L1 10" /></Icon>
const IconBookmark = () => <Icon><path d="M6 3h12v18l-6-4-6 4V3z" /></Icon>
const IconSliders = () => (
  <Icon>
    <line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" />
    <line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" />
    <line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" />
    <line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" />
  </Icon>
)

// Points, not item counts — a bow-tie answered 4 of 5 right is 4/5, not one
// wrong item. Mirrored from Dashboard.jsx so this panel and the full
// dashboard never disagree on the same numbers.
const pointsFor = (qs, stats) => {
  let earned = 0, possible = 0, attempted = 0
  for (const q of qs) {
    const st = stats[q.id]
    if (!st) continue
    attempted++
    earned += st.earned ?? st.correct
    possible += st.possible ?? st.seen
  }
  return { earned, possible, attempted, pct: possible ? Math.round((earned / possible) * 100) : null }
}

const statusColor = pct => pct == null ? 'var(--border)' : pct >= 75 ? 'var(--good)' : pct >= 60 ? 'var(--warn)' : 'var(--bad)'

// A compact trend line, oldest to newest, over the last 10 sessions.
function Sparkline({ sessions }) {
  if (!sessions.length) return <p className="tiny muted">Complete a session to see your accuracy trend.</p>
  const runs = sessions.slice(0, 10).reverse().map(s => s.total ? Math.round((s.correct / s.total) * 100) : 0)
  const w = 280, h = 56, pad = 7
  const x = i => runs.length > 1 ? pad + i * ((w - pad * 2) / (runs.length - 1)) : w / 2
  const y = pct => pad + (100 - pct) / 100 * (h - pad * 2)
  const pts = runs.map((p, i) => `${x(i)},${y(p)}`).join(' ')
  const last = runs[runs.length - 1]
  return (
    <svg className="sparkline" width="100%" height={h} viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none">
      <line x1={pad} y1={y(75)} x2={w - pad} y2={y(75)} stroke="var(--border)" strokeWidth="1" strokeDasharray="3 3" />
      <polyline points={pts} fill="none" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {runs.map((p, i) => <circle key={i} cx={x(i)} cy={y(p)} r={i === runs.length - 1 ? 3.2 : 2} fill={i === runs.length - 1 ? statusColor(p) : 'var(--accent)'} />)}
    </svg>
  )
}

export default function Home({ store, pool, onQuickStart, onCustom, onDashboard }) {
  const stats = store.stats
  const seenIds = Object.keys(stats)
  const seen = seenIds.length
  const answered = seenIds.reduce((n, id) => n + stats[id].seen, 0)
  const correct = seenIds.reduce((n, id) => n + stats[id].correct, 0)
  const pct = answered ? Math.round((correct / answered) * 100) : 0
  const missed = seenIds.filter(id => stats[id].wrong > 0).length

  const ngnPool = pool.filter(q => isNGN(q.type))
  const judgment = NCJMM.map(step => ({ step, ...pointsFor(ngnPool.filter(q => q.ncjmm === step.id), stats) }))
  const judgmentAttempted = judgment.reduce((n, r) => n + r.attempted, 0)

  const quick = (label, cfg) => ({
    key: `${label}-${Date.now()}`,
    catIds: [], count: 25, difficulties: [], types: [],
    filter: 'all', mode: 'study', label, ...cfg
  })

  const modes = [
    {
      icon: IconZap, title: 'Quick 25', body: 'Blueprint-weighted. Immediate rationale.',
      onClick: () => onQuickStart(quick('Quick 25', {}))
    },
    {
      icon: IconClock, title: '75-question exam', body: '90 minutes. No feedback until submission.',
      onClick: () => onQuickStart(quick('75-question exam', { count: 75, mode: 'exam', timeLimitMin: 90 }))
    },
    {
      icon: IconLayers, title: 'Next Gen practice', body: 'Case studies, bow-tie, matrix, cloze, highlight. Partial credit.',
      onClick: () => onQuickStart(quick('Next Gen practice', { types: ['case', 'matrix', 'bowtie', 'cloze', 'highlight', 'trend', 'dnd', 'dyad'], count: 12 }))
    },
    {
      icon: IconRotate, title: 'Review missed',
      body: missed ? `${missed} item${missed === 1 ? '' : 's'} requiring remediation.` : 'Nothing missed yet.',
      disabled: !missed,
      onClick: () => onQuickStart(quick('Missed questions', { filter: 'missed', count: Math.min(missed, 50) }))
    },
    {
      icon: IconBookmark, title: 'Flagged questions',
      body: store.flagged.length ? `${store.flagged.length} saved item${store.flagged.length === 1 ? '' : 's'}.` : 'Flag items during a session to save them here.',
      disabled: !store.flagged.length,
      onClick: () => onQuickStart(quick('Flagged', { filter: 'flagged', count: Math.min(store.flagged.length, 50) }))
    },
    {
      icon: IconSliders, title: 'Custom quiz', body: 'Build by category, difficulty, NGN type.',
      onClick: onCustom
    }
  ]

  return (
    <main className="page stack home">
      <section className="stack" style={{ gap: 20 }}>
        <div className="hero">
          <h1>Ready to study</h1>
          <p className="muted">
            A complete NCLEX-RN bank: {pool.length} questions across all eight Client Needs
            categories, including {pool.filter(q => isNGN(q.type)).length} NGN items and{' '}
            {new Set(pool.filter(q => q.caseId).map(q => q.caseId)).size} unfolding case studies
            with authentic partial-credit scoring.
          </p>
        </div>

        <div className="stat-grid">
          <div className="card stat" style={{ borderTopColor: 'var(--accent)' }}><div className="n mono" style={{ color: 'var(--accent)' }}>{pool.length}</div><div className="l">Questions</div></div>
          <div className="card stat" style={{ borderTopColor: 'var(--text-dim)' }}><div className="n mono">{seen}</div><div className="l">Seen</div></div>
          <div className="card stat" style={{ borderTopColor: answered ? statusColor(pct) : 'var(--border)' }}><div className="n mono" style={{ color: answered ? statusColor(pct) : 'var(--text)' }}>{answered ? pct + '%' : '—'}</div><div className="l">Accuracy</div></div>
          <div className="card stat" style={{ borderTopColor: missed ? 'var(--bad)' : 'var(--border)' }}><div className="n mono" style={{ color: missed ? 'var(--bad)' : 'var(--text)' }}>{missed}</div><div className="l">Missed</div></div>
        </div>
      </section>

      <section className="stack">
        <h2>Start a session</h2>
        <div className="mode-grid">
          {modes.map(m => (
            <button key={m.title} className="card mode-card" disabled={m.disabled} onClick={m.onClick}>
              <m.icon />
              <h3>{m.title}</h3>
              <p className="muted small">{m.body}</p>
            </button>
          ))}
        </div>
      </section>

      <section className="card stack">
        <h2>Coverage &amp; analytics</h2>

        <div className="stack" style={{ gap: 8 }}>
          <div className="section-eyebrow">Category coverage</div>
          <div className="bars">
            <div className="bar-row bar-head">
              <span>Category</span><span>Coverage</span><span style={{ textAlign: 'right' }}>%</span>
            </div>
            {CATEGORIES.map(c => {
              const n = pool.filter(q => q.cat === c.id).length
              const catSeen = pool.filter(q => q.cat === c.id && stats[q.id]).length
              const p = n ? Math.round((catSeen / n) * 100) : 0
              return (
                <div className="bar-row" key={c.id}>
                  <span className="row" style={{ gap: 8 }}>
                    <span className="dot" style={{ background: c.color }} />
                    <span>{c.short}</span>
                  </span>
                  <span className="bar-track">
                    <span className="bar-fill" style={{ width: `${p}%`, background: c.color }} />
                  </span>
                  <span className="muted tiny mono">{catSeen}/{n} · {p}%</span>
                </div>
              )
            })}
          </div>
          <p className="tiny muted">Coverage is how much of each category you have worked through, not accuracy.</p>
        </div>

        <div className="row" style={{ alignItems: 'flex-start', gap: 28 }}>
          <div className="stack" style={{ gap: 8, flex: '1 1 260px' }}>
            <div className="section-eyebrow">Accuracy trend</div>
            <Sparkline sessions={store.sessions} />
          </div>

          <div className="stack" style={{ gap: 8, flex: '1 1 260px' }}>
            <div className="section-eyebrow">Clinical judgment · NGN</div>
            {judgmentAttempted === 0 ? (
              <p className="tiny muted">Answer some Next Gen items to see which of the six judgment steps needs work.</p>
            ) : (
              <div className="bars">
                {judgment.map(r => (
                  <div className="bar-row" key={r.step.id} style={{ gridTemplateColumns: '100px 1fr 40px' }}>
                    <span className="tiny" title={r.step.blurb}>{r.step.name}</span>
                    <span className="bar-track">
                      <span className="bar-fill" style={{ width: `${r.pct ?? 0}%`, background: statusColor(r.pct) }} />
                    </span>
                    <span className="muted tiny mono">{r.pct == null ? '—' : r.pct + '%'}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <button className="btn primary lg full" onClick={onDashboard}>See my progress</button>
      </section>
    </main>
  )
}
