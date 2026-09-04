import { CATEGORIES, DIFFICULTY, NCJMM, TRAPS, isNGN } from '../data/categories.js'
import { fmtTime } from '../lib/quiz.js'

export default function Dashboard({ store, pool, onStart, onReset }) {
  const { stats, sessions } = store
  const ids = Object.keys(stats)
  const answered = ids.reduce((n, id) => n + stats[id].seen, 0)
  const correct = ids.reduce((n, id) => n + stats[id].correct, 0)
  // Scored in points so the headline agrees with every bar below it: a bow-tie
  // answered 4 of 5 counts as 4 of 5, not as one wrong item.
  const allEarned = ids.reduce((n, id) => n + (stats[id].earned ?? stats[id].correct), 0)
  const allPossible = ids.reduce((n, id) => n + (stats[id].possible ?? stats[id].seen), 0)
  const overall = allPossible ? Math.round((allEarned / allPossible) * 100) : 0

  // Points rather than item counts, so partial credit on Next Gen items counts
  // for what it is actually worth.
  const pointsFor = qs => {
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

  const catRows = CATEGORIES.map(c => {
    const qs = pool.filter(q => q.cat === c.id)
    let a = 0, k = 0
    for (const q of qs) { const s = stats[q.id]; if (s) { a += s.seen; k += s.correct } }
    const pts = pointsFor(qs)
    return { c, total: qs.length, seen: qs.filter(q => stats[q.id]).length, answered: a, pct: pts.pct }
  })

  const ngnPool = pool.filter(q => isNGN(q.type))
  const judgment = NCJMM.map(step => ({
    step,
    ...pointsFor(ngnPool.filter(q => q.ncjmm === step.id)),
    total: ngnPool.filter(q => q.ncjmm === step.id).length
  }))
  const judgmentAttempted = judgment.reduce((n, r) => n + r.attempted, 0)
  const weakestStep = judgment.filter(r => r.attempted >= 2).sort((a, b) => a.pct - b.pct)[0]

  // Reasoning errors, most frequent first.
  const trapRows = Object.entries(store.traps || {})
    .filter(([id, n]) => TRAPS[id] && n > 0)
    .map(([id, n]) => ({ id, n, ...TRAPS[id] }))
    .sort((a, b) => b.n - a.n)
  const trapTotal = trapRows.reduce((n, r) => n + r.n, 0)

  const diffRows = [1, 2, 3].map(d => {
    const qs = pool.filter(q => q.difficulty === d)
    let a = 0, k = 0
    for (const q of qs) { const s = stats[q.id]; if (s) { a += s.seen; k += s.correct } }
    return { d, total: qs.length, answered: a, pct: pointsFor(qs).pct }
  })

  const weakest = catRows.filter(r => r.answered >= 5).sort((a, b) => a.pct - b.pct)[0]

  return (
    <main className="page wide stack">
      <h1>Your progress</h1>

      {!answered ? (
        <div className="card empty">
          <p>No attempts recorded yet.</p>
          <button className="btn primary" style={{ marginTop: 14 }} onClick={onStart}>Start your first quiz</button>
        </div>
      ) : (
        <>
          <div className="stat-grid">
            <div className="card stat">
              <div className="n mono">{overall}%</div>
              <div className="l">Overall accuracy<br /><span className="tiny">{allEarned} of {allPossible} points</span></div>
            </div>
            <div className="card stat">
              <div className="n mono">{answered}</div>
              <div className="l">Questions answered<br /><span className="tiny">{correct} fully correct</span></div>
            </div>
            <div className="card stat"><div className="n mono">{ids.length}<span className="muted" style={{ fontSize: 16 }}>/{pool.length}</span></div><div className="l">Bank covered</div></div>
            <div className="card stat"><div className="n mono">{sessions.length}</div><div className="l">Sessions completed</div></div>
          </div>

          {weakest && (
            <div className="card" style={{ borderLeft: `3px solid ${weakest.c.color}` }}>
              <h3>Focus next on {weakest.c.name}</h3>
              <p className="small muted">
                Your weakest area at {weakest.pct}% over {weakest.answered} attempts.
                You have seen {weakest.seen} of its {weakest.total} questions.
              </p>
            </div>
          )}

          <section className="card stack">
            <h2>Accuracy by category</h2>
            <div className="bars">
              {catRows.map(r => (
                <div className="bar-row" key={r.c.id}>
                  <span className="row" style={{ gap: 8 }}><span className="dot" style={{ background: r.c.color }} />{r.c.short}</span>
                  <span className="bar-track">
                    <span className="bar-fill" style={{ width: `${r.pct ?? 0}%`, background: r.c.color }} />
                  </span>
                  <span className="muted tiny mono">{r.pct == null ? '—' : r.pct + '%'}</span>
                </div>
              ))}
            </div>
            <p className="tiny muted">Bar length is accuracy on questions you have attempted, not coverage.</p>
          </section>

          <section className="card stack">
            <h2>Accuracy by cognitive level</h2>
            <div className="bars">
              {diffRows.map(r => (
                <div className="bar-row" key={r.d}>
                  <span>{DIFFICULTY[r.d].label}</span>
                  <span className="bar-track">
                    <span className="bar-fill" style={{ width: `${r.pct ?? 0}%`, background: DIFFICULTY[r.d].color }} />
                  </span>
                  <span className="muted tiny mono">{r.pct == null ? '—' : r.pct + '%'}</span>
                </div>
              ))}
            </div>
            <p className="tiny muted">The real exam sits mostly at application and analysis. A gap between those rows and the foundational row is the thing to close.</p>
          </section>

          <section className="card stack">
            <div className="row">
              <h2>How you go wrong</h2>
              {trapTotal > 0 && <span className="chip">{trapTotal} tagged errors</span>}
            </div>
            {trapRows.length === 0 ? (
              <p className="small muted">
                Once you have missed a few questions that carry option-level explanations,
                this will name the <em>kind</em> of mistake you repeat — reaching for an
                intervention before assessing, say, or picking the chronic problem over the
                acute one. A content gap you can study; a reasoning habit you have to notice.
              </p>
            ) : (
              <>
                <div className="bars">
                  {trapRows.map(r => (
                    <div className="bar-row" key={r.id}>
                      <span>{r.name}</span>
                      <span className="bar-track">
                        <span className="bar-fill" style={{
                          width: `${Math.round((r.n / trapRows[0].n) * 100)}%`, background: 'var(--bad)'
                        }} />
                      </span>
                      <span className="muted tiny mono">{r.n}×</span>
                    </div>
                  ))}
                </div>
                <div className="trap-lead">
                  <strong>{trapRows[0].name}</strong> is your most frequent error,
                  {' '}{trapRows[0].n} time{trapRows[0].n === 1 ? '' : 's'}. {trapRows[0].hint}
                </div>
              </>
            )}
          </section>

          <section className="card stack">
            <div className="row">
              <h2>Clinical judgment</h2>
              <span className="chip accent">Next Gen NCLEX</span>
            </div>
            {judgmentAttempted === 0 ? (
              <p className="small muted">
                Answer some Next Gen items — matrix, bow-tie, cloze, highlight, or an unfolding
                case study — and this will show which kind of thinking is letting you down, not
                just which content area.
              </p>
            ) : (
              <>
                <div className="bars">
                  {judgment.map(r => (
                    <div className="bar-row" key={r.step.id}>
                      <span title={r.step.blurb}>{r.step.name}</span>
                      <span className="bar-track">
                        <span className="bar-fill" style={{
                          width: `${r.pct ?? 0}%`,
                          background: r.pct == null ? 'var(--border)'
                            : r.pct >= 75 ? 'var(--good)' : r.pct >= 60 ? 'var(--warn)' : 'var(--bad)'
                        }} />
                      </span>
                      <span className="muted tiny mono">{r.pct == null ? '—' : r.pct + '%'}</span>
                    </div>
                  ))}
                </div>
                {weakestStep && (
                  <p className="small">
                    <strong>{weakestStep.step.name}</strong> is your weakest step at {weakestStep.pct}%.{' '}
                    {weakestStep.step.blurb}
                  </p>
                )}
                <p className="tiny muted">
                  The exam scores six steps of clinical judgment. Two students can know the same
                  facts and fail on different steps — one cannot pick the relevant cue out of a
                  chart, another picks it up but draws the wrong conclusion. This shows which is you.
                </p>
              </>
            )}
          </section>

          <section className="card stack">
            <h2>Session history</h2>
            <table className="plain">
              <thead>
                <tr><th>Session</th><th>Mode</th><th>Score</th><th>Time</th><th>When</th></tr>
              </thead>
              <tbody>
                {sessions.map(s => {
                  const p = s.total ? Math.round((s.correct / s.total) * 100) : 0
                  return (
                    <tr key={s.id}>
                      <td>{s.label}</td>
                      <td className="muted">{s.mode === 'exam' ? 'Exam' : 'Study'}</td>
                      <td>
                        <span className={'chip ' + (p >= 75 ? 'good' : p >= 60 ? 'warn' : 'bad')}>{p}%</span>{' '}
                        <span className="muted tiny mono">{s.correct}/{s.total}</span>
                      </td>
                      <td className="muted mono tiny">{fmtTime(s.durationMs)}</td>
                      <td className="muted tiny">{new Date(s.finishedAt).toLocaleString()}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </section>
        </>
      )}

      <div className="row">
        <button className="btn primary" onClick={onStart}>New quiz</button>
        <span style={{ flex: 1 }} />
        <button className="btn ghost" onClick={() => {
          if (confirm('Erase all progress, flags, and session history? This cannot be undone.')) onReset()
        }}>Reset all progress</button>
      </div>
    </main>
  )
}
