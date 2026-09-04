import { useState } from 'react'
import { CATEGORY_BY_ID, DIFFICULTY, TYPE_LABEL, NCJMM_BY_ID, TRAPS, isNGN } from '../data/categories.js'
import { tallyByCategory, fmtTime, whyAt } from '../lib/quiz.js'

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

function Ring({ pct }) {
  const r = 50, c = 2 * Math.PI * r
  const tone = pct >= 75 ? 'var(--good)' : pct >= 60 ? 'var(--warn)' : 'var(--bad)'
  return (
    <div className="ring">
      <svg width="116" height="116" viewBox="0 0 116 116">
        <circle cx="58" cy="58" r={r} fill="none" stroke="var(--surface-2)" strokeWidth="10" />
        <circle cx="58" cy="58" r={r} fill="none" stroke={tone} strokeWidth="10" strokeLinecap="round"
          strokeDasharray={c} strokeDashoffset={c * (1 - pct / 100)} />
      </svg>
      <span className="pct" style={{ color: tone }}>{pct}%</span>
    </div>
  )
}

export default function Results({ session, flagged, onFlag, onRetryMissed, onHome }) {
  const [show, setShow] = useState('wrong')
  // With Next Gen items in the mix, points are the honest score: a bow-tie worth
  // 5 points should not count the same as a one-point multiple choice item.
  const possible = session.possible ?? session.total
  const earned = session.earned ?? session.correct
  const pct = possible ? Math.round((earned / possible) * 100) : 0
  const hasPartial = possible !== session.total
  const byId = Object.fromEntries((session.questions || []).map(q => [q.id, q]))
  const tally = tallyByCategory(session.items, byId)
  const wrongIds = session.items.filter(x => !x.correct).map(x => x.qid)

  const visible = session.items.filter(x =>
    show === 'all' ? true : show === 'wrong' ? !x.correct : flagged.includes(x.qid))

  const passish = pct >= 75

  return (
    <main className="page stack">
      <section className="card">
        <div className="score-ring">
          <Ring pct={pct} />
          <div className="stack" style={{ gap: 6 }}>
            <h1>{earned} of {possible} points</h1>
            {hasPartial && (
              <p className="small muted">
                {session.correct} of {session.total} items fully correct · Next Gen items carry partial credit
              </p>
            )}
            <p className="muted">
              {session.label} · {session.mode === 'exam' ? 'Exam mode' : 'Study mode'} · {fmtTime(session.durationMs)}
              {session.total ? ` · ${Math.round(session.durationMs / session.total / 1000)}s per question` : ''}
            </p>
            <p className="small">
              {passish
                ? 'Comfortably above the ~75% working benchmark most students aim for on practice sets.'
                : pct >= 60
                  ? 'In the passing-borderline range. Work the rationales below before adding new content.'
                  : 'Below the range you want. Slow down, read every rationale, and re-run the missed set.'}
            </p>
          </div>
        </div>
      </section>

      <section className="card stack">
        <h2>By category</h2>
        <div className="bars">
          {Object.entries(tally).sort((a, b) => (a[1].correct / a[1].total) - (b[1].correct / b[1].total)).map(([cid, t]) => {
            const c = CATEGORY_BY_ID[cid]
            const p = Math.round((t.earned / t.possible) * 100)
            return (
              <div className="bar-row" key={cid}>
                <span className="row" style={{ gap: 8 }}><span className="dot" style={{ background: c.color }} />{c.short}</span>
                <span className="bar-track"><span className="bar-fill" style={{ width: `${p}%`, background: c.color }} /></span>
                <span className="muted tiny mono">{t.earned}/{t.possible}</span>
              </div>
            )
          })}
        </div>
      </section>

      <section className="stack">
        <div className="row">
          <h2>Review</h2>
          <span style={{ flex: 1 }} />
          <div className="seg">
            <button aria-pressed={show === 'wrong'} onClick={() => setShow('wrong')}>Missed ({wrongIds.length})</button>
            <button aria-pressed={show === 'flagged'} onClick={() => setShow('flagged')}>Flagged</button>
            <button aria-pressed={show === 'all'} onClick={() => setShow('all')}>All ({session.total})</button>
          </div>
        </div>

        {!visible.length && <div className="card empty">Nothing to show here.</div>}

        {visible.map(item => {
          const q = byId[item.qid]
          if (!q) return null
          const cat = CATEGORY_BY_ID[q.cat]
          const flat = Array.isArray(q.options) && Array.isArray(q.answer)
          const yours = q.type === 'fill'
            ? (item.response || '(blank)')
            : flat && Array.isArray(item.response) && item.response.length
              ? item.response.map(idx => LETTERS[idx]).join(q.type === 'order' ? ' → ' : ', ')
              : '(blank)'
          const key = q.type === 'fill' ? q.answerText[0]
            : flat ? q.answer.map(idx => LETTERS[idx]).join(q.type === 'order' ? ' → ' : ', ') : ''
          return (
            <article className={'card review-item ' + (item.correct ? 'correct' : 'wrong')} key={q.id}>
              <div className="row" style={{ marginBottom: 8 }}>
                <span className="chip"><span className="dot" style={{ background: cat.color }} />{cat.short}</span>
                <span className="chip">{q.sub}</span>
                <span className="chip" style={{ color: DIFFICULTY[q.difficulty].color }}>{DIFFICULTY[q.difficulty].label}</span>
                <span style={{ flex: 1 }} />
                <button className="btn sm ghost" onClick={() => onFlag(q.id)}>{flagged.includes(q.id) ? '★ Flagged' : '☆ Flag'}</button>
              </div>
              {q.scenario && <p className="small muted" style={{ marginBottom: 8 }}>{q.scenario}</p>}
              <p style={{ marginBottom: 10, lineHeight: 1.55 }}>{q.stem}</p>
              {Array.isArray(q.options) && (
                <ol style={{ margin: '0 0 10px', paddingLeft: 22, fontSize: 14 }}>
                  {q.options.map((o, idx) => {
                    const w = whyAt(q, idx)
                    const isKey = q.answer.includes(idx)
                    const picked = Array.isArray(item.response) && item.response.includes(idx)
                    return (
                      <li key={idx} style={{
                        color: isKey ? 'var(--good)' : 'inherit',
                        fontWeight: isKey ? 600 : 400,
                        marginBottom: w ? 7 : 0
                      }}>
                        {o}
                        {w && (
                          <div className="why" data-state={isKey ? 'correct' : picked ? 'wrong' : undefined}
                            style={{ marginLeft: 0, marginTop: 4, fontWeight: 400, color: 'var(--text)' }}>
                            {picked && !isKey && <span className="why-badge">You chose this</span>}
                            <p>{w.text}</p>
                            {w.trap && TRAPS[w.trap] && picked && !isKey && (
                              <p className="why-trap"><strong>{TRAPS[w.trap].name}.</strong> {TRAPS[w.trap].hint}</p>
                            )}
                          </div>
                        )}
                      </li>
                    )
                  })}
                </ol>
              )}
              {isNGN(q.type) ? (
                <p className="small">
                  <span className={item.correct ? 'chip good' : item.earned > 0 ? 'chip warn' : 'chip bad'}>
                    {item.earned} of {item.possible} points
                  </span>{' '}
                  <span className="chip">{TYPE_LABEL[q.type]}</span>{' '}
                  {q.ncjmm && <span className="chip accent">{NCJMM_BY_ID[q.ncjmm].name}</span>}
                </p>
              ) : (
                <p className="small">
                  <span className={item.correct ? 'chip good' : 'chip bad'}>Your answer: {yours}</span>{' '}
                  {!item.correct && <span className="chip good">Correct: {key}</span>}
                </p>
              )}
              <p className="small" style={{ marginTop: 10 }}><strong>Rationale.</strong> {q.rationale}</p>
              {q.strategy && <p className="small muted" style={{ marginTop: 6 }}><strong>Strategy.</strong> {q.strategy}</p>}
            </article>
          )
        })}
      </section>

      <div className="row">
        <button className="btn primary lg" disabled={!wrongIds.length}
          onClick={() => onRetryMissed({
            key: String(Date.now()), catIds: [], count: wrongIds.length,
            difficulties: [], types: [], filter: 'missed', mode: 'study', label: 'Retry missed'
          })}>Retry the {wrongIds.length} I missed</button>
        <button className="btn lg" onClick={onHome}>Done</button>
      </div>
    </main>
  )
}
