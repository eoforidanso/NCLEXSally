import { CATEGORIES, isNGN } from '../data/categories.js'

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

export default function Home({ store, pool, onQuickStart, onCustom, onDashboard }) {
  const stats = store.stats
  const seenIds = Object.keys(stats)
  const seen = seenIds.length
  const answered = seenIds.reduce((n, id) => n + stats[id].seen, 0)
  const correct = seenIds.reduce((n, id) => n + stats[id].correct, 0)
  const pct = answered ? Math.round((correct / answered) * 100) : 0
  const missed = seenIds.filter(id => stats[id].wrong > 0).length

  const quick = (label, cfg) => ({
    key: `${label}-${Date.now()}`,
    catIds: [], count: 25, difficulties: [], types: [],
    filter: 'all', mode: 'study', label, ...cfg
  })

  const modes = [
    {
      icon: IconZap, title: 'Quick 25', body: 'Blueprint-weighted mix. Rationale shown after each answer.',
      onClick: () => onQuickStart(quick('Quick 25', {}))
    },
    {
      icon: IconClock, title: '75-question exam', body: 'Timed 90 minutes. No feedback until submission.',
      onClick: () => onQuickStart(quick('75-question exam', { count: 75, mode: 'exam', timeLimitMin: 90 }))
    },
    {
      icon: IconLayers, title: 'Next Gen practice', body: 'Case studies, bow-tie, matrix, cloze, highlight. Partial-credit scoring.',
      onClick: () => onQuickStart(quick('Next Gen practice', { types: ['case', 'matrix', 'bowtie', 'cloze', 'highlight', 'trend', 'dnd', 'dyad'], count: 12 }))
    },
    {
      icon: IconRotate, title: 'Review missed',
      body: missed ? `${missed} question${missed === 1 ? '' : 's'} you've gotten wrong.` : 'Nothing missed yet.',
      disabled: !missed,
      onClick: () => onQuickStart(quick('Missed questions', { filter: 'missed', count: Math.min(missed, 50) }))
    },
    {
      icon: IconBookmark, title: 'Flagged questions',
      body: store.flagged.length ? `${store.flagged.length} saved for later.` : 'Flag questions during a quiz to save them here.',
      disabled: !store.flagged.length,
      onClick: () => onQuickStart(quick('Flagged', { filter: 'flagged', count: Math.min(store.flagged.length, 50) }))
    },
    {
      icon: IconSliders, title: 'Custom quiz', body: 'Build a session by category, difficulty, and NGN type.',
      onClick: onCustom
    }
  ]

  return (
    <main className="page stack home">
      <section className="stack" style={{ gap: 20 }}>
        <div className="hero">
          <h1>Ready to study?</h1>
          <p className="muted">
            {pool.length} questions across all eight NCLEX-RN Client Needs categories — including{' '}
            {pool.filter(q => isNGN(q.type)).length} NGN items and{' '}
            {new Set(pool.filter(q => q.caseId).map(q => q.caseId)).size} unfolding case studies with
            authentic partial-credit scoring.
          </p>
        </div>

        <div className="stat-grid">
          <div className="card stat"><div className="n mono">{pool.length}</div><div className="l">Questions</div></div>
          <div className="card stat"><div className="n mono">{seen}</div><div className="l">Seen</div></div>
          <div className="card stat"><div className="n mono">{answered ? pct + '%' : '—'}</div><div className="l">Accuracy</div></div>
          <div className="card stat"><div className="n mono">{missed}</div><div className="l">Missed</div></div>
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
        <h2>Bank coverage</h2>
        <div className="bars">
          {CATEGORIES.map(c => {
            const n = pool.filter(q => q.cat === c.id).length
            const catSeen = pool.filter(q => q.cat === c.id && stats[q.id]).length
            return (
              <div className="bar-row" key={c.id}>
                <span className="row" style={{ gap: 8 }}>
                  <span className="dot" style={{ background: c.color }} />
                  <span>{c.short}</span>
                </span>
                <span className="bar-track">
                  <span className="bar-fill" style={{ width: `${n ? (catSeen / n) * 100 : 0}%`, background: c.color }} />
                </span>
                <span className="muted tiny mono">{catSeen}/{n}</span>
              </div>
            )
          })}
        </div>
        <p className="tiny muted">Fill shows how much of each category you have worked through. Percentages are the NCSBN test-plan weights this bank is built to.</p>
        <button className="btn primary lg full" onClick={onDashboard}>See my progress</button>
      </section>
    </main>
  )
}
