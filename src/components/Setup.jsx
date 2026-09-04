import { useMemo, useState } from 'react'
import { CATEGORIES, DIFFICULTY, TYPE_LABEL } from '../data/categories.js'

// 'case' is a pseudo-type: unfolding case studies are drawn whole, never split.
const TYPE_CHOICES = { ...TYPE_LABEL, case: 'Unfolding Case Study' }
import { buildSession } from '../lib/quiz.js'

const COUNTS = [10, 25, 50, 75, 100]

export default function Setup({ store, pool, onStart, onCancel }) {
  const [catIds, setCatIds] = useState([])
  const [count, setCount] = useState(25)
  const [mode, setMode] = useState('study')
  const [filter, setFilter] = useState('all')
  const [difficulties, setDifficulties] = useState([])
  const [types, setTypes] = useState([])
  const [timed, setTimed] = useState(false)

  const toggle = (list, set, v) =>
    set(list.includes(v) ? list.filter(x => x !== v) : [...list, v])

  const available = useMemo(
    () => buildSession(pool, { catIds, difficulties, types, filter, count: 1e9, stats: store.stats, flagged: store.flagged }).length,
    [pool, catIds, difficulties, types, filter, store]
  )

  const start = () => onStart({
    key: String(Date.now()),
    catIds, count: Math.min(count, available), difficulties, types, filter, mode,
    timeLimitMin: timed ? Math.round(count * 1.2) : null,
    label: catIds.length === 1 ? CATEGORIES.find(c => c.id === catIds[0]).short : 'Custom quiz'
  })

  return (
    <main className="page stack">
      <div className="row">
        <h1>Build a quiz</h1>
        <span className="spacer" style={{ flex: 1 }} />
        <button className="btn ghost" onClick={onCancel}>Cancel</button>
      </div>

      <section className="card stack">
        <div className="row">
          <h2>Categories</h2>
          <span style={{ flex: 1 }} />
          <button className="btn sm ghost" onClick={() => setCatIds([])}>All categories</button>
        </div>
        <div className="cat-list">
          {CATEGORIES.map(c => {
            const n = pool.filter(q => q.cat === c.id).length
            const on = catIds.includes(c.id)
            return (
              <button key={c.id} className="cat-row" data-on={on}
                onClick={() => toggle(catIds, setCatIds, c.id)}>
                <span className="dot" style={{ background: c.color }} />
                <span className="nm">{c.name}</span>
                <span className="tiny muted mono">{n}</span>
              </button>
            )
          })}
        </div>
        <p className="tiny muted">Select none to draw from the whole bank in test-plan proportions.</p>
      </section>

      <section className="card stack">
        <h2>Format</h2>
        <div className="row">
          <span className="small muted" style={{ width: 96 }}>Questions</span>
          <div className="seg">
            {COUNTS.map(n => (
              <button key={n} aria-pressed={count === n} onClick={() => setCount(n)} disabled={n > available && available > 0}>{n}</button>
            ))}
          </div>
        </div>
        <div className="row">
          <span className="small muted" style={{ width: 96 }}>Mode</span>
          <div className="seg">
            <button aria-pressed={mode === 'study'} onClick={() => setMode('study')}>Study</button>
            <button aria-pressed={mode === 'exam'} onClick={() => setMode('exam')}>Exam</button>
          </div>
          <span className="tiny muted">
            {mode === 'study' ? 'Rationale appears right after each answer.' : 'Answers locked in; review comes at the end.'}
          </span>
        </div>
        <div className="row">
          <span className="small muted" style={{ width: 96 }}>Pool</span>
          <div className="seg">
            <button aria-pressed={filter === 'all'} onClick={() => setFilter('all')}>All</button>
            <button aria-pressed={filter === 'unseen'} onClick={() => setFilter('unseen')}>Unseen</button>
            <button aria-pressed={filter === 'missed'} onClick={() => setFilter('missed')}>Missed</button>
            <button aria-pressed={filter === 'flagged'} onClick={() => setFilter('flagged')}>Flagged</button>
          </div>
        </div>
        <div className="row">
          <span className="small muted" style={{ width: 96 }}>Difficulty</span>
          {Object.entries(DIFFICULTY).map(([d, meta]) => (
            <button key={d} className="chip" style={{
              cursor: 'pointer',
              borderColor: difficulties.includes(+d) ? meta.color : undefined,
              color: difficulties.includes(+d) ? meta.color : undefined
            }} onClick={() => toggle(difficulties, setDifficulties, +d)}>{meta.label}</button>
          ))}
        </div>
        <div className="row">
          <span className="small muted" style={{ width: 96 }}>Item type</span>
          {Object.entries(TYPE_CHOICES).map(([t, label]) => (
            <button key={t} className={'chip' + (types.includes(t) ? ' accent' : '')}
              style={{ cursor: 'pointer' }} onClick={() => toggle(types, setTypes, t)}>{label}</button>
          ))}
        </div>
        <div className="row">
          <label className="row small" style={{ gap: 7 }}>
            <input type="checkbox" checked={timed} onChange={e => setTimed(e.target.checked)} />
            Timer ({Math.round(count * 1.2)} min — roughly the exam's pace)
          </label>
        </div>
      </section>

      <div className="row">
        <button className="btn primary lg" disabled={!available} onClick={start}>
          Start {Math.min(count, available)} question{Math.min(count, available) === 1 ? '' : 's'}
        </button>
        <span className="small muted">{available} match your filters.</span>
      </div>
    </main>
  )
}
