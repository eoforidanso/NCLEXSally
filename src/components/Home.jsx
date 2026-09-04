import { CATEGORIES, isNGN } from '../data/categories.js'

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

  return (
    <main className="page stack">
      <section className="card hero">
        <h1>Ready to study?</h1>
        <p className="muted">
          {pool.length} questions across all eight NCLEX-RN Client Needs categories,
          each with a full rationale and the test-taking principle behind it — including{' '}
          {pool.filter(q => isNGN(q.type)).length} Next Generation items and{' '}
          {new Set(pool.filter(q => q.caseId).map(q => q.caseId)).size} unfolding case studies
          with partial-credit scoring.
        </p>
      </section>

      <div className="stat-grid">
        <div className="card stat"><div className="n mono">{pool.length}</div><div className="l">Questions in bank</div></div>
        <div className="card stat"><div className="n mono">{seen}</div><div className="l">Seen at least once</div></div>
        <div className="card stat"><div className="n mono">{answered ? pct + '%' : '—'}</div><div className="l">Lifetime accuracy</div></div>
        <div className="card stat"><div className="n mono">{missed}</div><div className="l">Missed at least once</div></div>
      </div>

      <section className="stack">
        <h2>Start a session</h2>
        <div className="mode-grid">
          <button className="card mode-card" onClick={() => onQuickStart(quick('Quick 25', {}))}>
            <h3>Quick 25 · Study mode</h3>
            <p className="muted small">Blueprint-weighted mix. Rationale shown after each answer.</p>
          </button>
          <button className="card mode-card" onClick={() => onQuickStart(quick('75-question exam', { count: 75, mode: 'exam', timeLimitMin: 90 }))}>
            <h3>75-question exam</h3>
            <p className="muted small">Timed 90 minutes, no feedback until you submit.</p>
          </button>
          <button className="card mode-card"
            onClick={() => onQuickStart(quick('Next Gen practice', { types: ['case', 'matrix', 'bowtie', 'cloze', 'highlight', 'trend', 'dnd', 'dyad'], count: 12 }))}>
            <h3>Next Gen NCLEX practice</h3>
            <p className="muted small">Case studies, bow-tie, matrix, cloze, and highlight items — scored with partial credit.</p>
          </button>
          <button className="card mode-card" disabled={!missed}
            onClick={() => onQuickStart(quick('Missed questions', { filter: 'missed', count: Math.min(missed, 50) }))}>
            <h3>Review what you missed</h3>
            <p className="muted small">{missed ? `${missed} question${missed === 1 ? '' : 's'} you've gotten wrong.` : 'Nothing missed yet.'}</p>
          </button>
          <button className="card mode-card" disabled={!store.flagged.length}
            onClick={() => onQuickStart(quick('Flagged', { filter: 'flagged', count: Math.min(store.flagged.length, 50) }))}>
            <h3>Flagged questions</h3>
            <p className="muted small">{store.flagged.length ? `${store.flagged.length} saved for later.` : 'Flag questions during a quiz to save them here.'}</p>
          </button>
        </div>
        <div className="row">
          <button className="btn primary lg" onClick={onCustom}>Build a custom quiz</button>
          <button className="btn lg" onClick={onDashboard}>See my progress</button>
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
      </section>
    </main>
  )
}
