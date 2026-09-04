import { useEffect, useMemo, useRef, useState } from 'react'
import { CATEGORY_BY_ID, DIFFICULTY, TYPE_LABEL, NCJMM_BY_ID, TRAPS, isNGN } from '../data/categories.js'
import { buildSession, shuffleOptions, score, isComplete, fmtTime, whyAt } from '../lib/quiz.js'
import { QUESTIONS } from '../data/index.js'
import { MatrixItem, BowtieItem, ClozeItem, HighlightItem, ChartTabs } from './NgnItem.jsx'
import { TrendItem, DndItem, DyadItem } from './NgnItem2.jsx'

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

export default function Quiz({ cfg, store, onFlag, onAnswer, onFinish, onQuit }) {
  const questions = useMemo(() => {
    const picked = buildSession(QUESTIONS, { ...cfg, stats: store.stats, flagged: store.flagged })
    return store.prefs.shuffleOptions ? picked.map(shuffleOptions) : picked
  }, []) // built once per session; the key prop remounts for a new one

  const [i, setI] = useState(0)
  const [responses, setResponses] = useState({})
  const [revealed, setRevealed] = useState({})
  const [startedAt] = useState(Date.now())
  const [now, setNow] = useState(Date.now())
  const fillRef = useRef(null)

  const q = questions[i]
  const isStudy = cfg.mode === 'study'
  const limitMs = cfg.timeLimitMin ? cfg.timeLimitMin * 60000 : null
  const remaining = limitMs ? Math.max(0, limitMs - (now - startedAt)) : null

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(t)
  }, [])
  useEffect(() => { if (remaining === 0) submit() }, [remaining])
  useEffect(() => { if (q?.type === 'fill') fillRef.current?.focus() }, [i, q])

  const resp = q ? responses[q.id] : undefined
  const shown = q ? !!revealed[q.id] : false
  const result = q && shown ? score(q, resp) : null

  // Accepts a value or an updater. Renderers pass an updater so that several
  // clicks landing before a re-render each see the latest selection.
  const setResp = value => setResponses(r => ({
    ...r,
    [q.id]: typeof value === 'function' ? value(r[q.id]) : value
  }))

  const choose = idx => {
    if (shown) return
    if (q.type === 'sata' || q.type === 'order') {
      setResponses(r => {
        const cur = Array.isArray(r[q.id]) ? r[q.id] : []
        const next = cur.includes(idx)
          ? cur.filter(x => x !== idx)
          : q.type === 'sata' ? [...cur, idx].sort((a, b) => a - b) : [...cur, idx]
        return { ...r, [q.id]: next }
      })
    } else {
      setResp([idx])
      if (isStudy) reveal([idx])
    }
  }

  /** Traps the client fell into: tags on wrong options they actually selected. */
  const trapsHit = (qq, r) => {
    if (!Array.isArray(qq.why) || !Array.isArray(r)) return []
    return r
      .filter(i => !(qq.answer || []).includes(i))
      .map(i => whyAt(qq, i)?.trap)
      .filter(Boolean)
  }

  const reveal = value => {
    const r = value ?? resp
    setRevealed(v => ({ ...v, [q.id]: true }))
    const s = score(q, r)
    onAnswer(q.id, s.correct, s, trapsHit(q, r))
  }

  const canSubmit = q && isComplete(q, resp)

  const next = () => (i + 1 < questions.length ? setI(i + 1) : submit())

  const submit = () => {
    const items = questions.map(qq => {
      const r = responses[qq.id]
      const s = score(qq, r)
      if (!revealed[qq.id]) onAnswer(qq.id, s.correct, s, trapsHit(qq, r))
      return { qid: qq.id, response: r ?? null, correct: s.correct, earned: s.earned, possible: s.possible }
    })
    onFinish({
      id: String(startedAt), label: cfg.label || 'Quiz', mode: cfg.mode,
      startedAt, finishedAt: Date.now(), durationMs: Date.now() - startedAt,
      total: items.length,
      correct: items.filter(x => x.correct).length,
      earned: items.reduce((n, x) => n + x.earned, 0),
      possible: items.reduce((n, x) => n + x.possible, 0),
      items, questions
    })
  }

  // Keyboard: 1-6 select (classic items only), Enter advances, F flags.
  useEffect(() => {
    const advance = e => {
      e.preventDefault()
      if (isStudy && !shown) { if (canSubmit) reveal() }
      else next()
    }
    const onKey = e => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') {
        if (e.key === 'Enter') advance(e)
        return
      }
      const classic = q && ['mc', 'sata', 'order'].includes(q.type)
      if (/^[1-6]$/.test(e.key) && classic) { e.preventDefault(); choose(+e.key - 1) }
      else if (e.key === 'Enter') advance(e)
      else if (e.key.toLowerCase() === 'f' && q) onFlag(q.id)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  if (!questions.length) {
    return (
      <main className="page">
        <div className="card empty">
          <p>No questions matched those filters.</p>
          <button className="btn" style={{ marginTop: 14 }} onClick={onQuit}>Back</button>
        </div>
      </main>
    )
  }

  const cat = CATEGORY_BY_ID[q.cat]
  const flagged = store.flagged.includes(q.id)
  const step = q.ncjmm ? NCJMM_BY_ID[q.ncjmm] : null

  // Position within an unfolding case study, when this item belongs to one.
  const caseItems = q.caseId ? questions.filter(x => x.caseId === q.caseId) : []
  const casePos = q.caseId ? caseItems.findIndex(x => x.id === q.id) : -1

  const optState = idx => {
    if (!shown || q.type === 'order') return undefined
    if (q.answer.includes(idx)) return 'correct'
    if ((resp || []).includes(idx)) return 'wrong'
    return undefined
  }

  const ngnProps = { q, resp, onChange: setResp, shown }

  return (
    <main className="page stack">
      <div className="quiz-head">
        <span className="small muted mono" style={{ minWidth: 62 }}>{i + 1} / {questions.length}</span>
        <span className="progress-track"><span className="progress-fill" style={{ width: `${((i + 1) / questions.length) * 100}%` }} /></span>
        {remaining != null && <span className={'chip mono' + (remaining < 300000 ? ' bad' : '')}>{fmtTime(remaining)}</span>}
        <button className="btn sm ghost" onClick={onQuit}>Exit</button>
      </div>

      {q.caseId && caseItems.length > 1 && (
        <div className="case-strip">
          <span className="label">Case study</span>
          {caseItems.map((c, n) => (
            <span key={c.id} className="case-pip"
              data-state={n === casePos ? 'current' : revealed[c.id] ? 'done' : undefined}>{n + 1}</span>
          ))}
          <span className="tiny muted" style={{ marginLeft: 4 }}>
            {step ? `Step ${casePos + 1} of ${caseItems.length} · ${step.name}` : ''}
          </span>
        </div>
      )}

      <article className="card stack">
        <div className="row">
          <span className="chip"><span className="dot" style={{ background: cat?.color }} />{cat?.short}</span>
          <span className="chip">{q.sub}</span>
          <span className="chip" style={{ color: DIFFICULTY[q.difficulty].color }}>{DIFFICULTY[q.difficulty].label}</span>
          {q.type !== 'mc' && <span className="chip accent">{TYPE_LABEL[q.type]}</span>}
          <span style={{ flex: 1 }} />
          <button className="btn sm ghost" onClick={() => onFlag(q.id)} title="Flag for later (F)">
            {flagged ? '★ Flagged' : '☆ Flag'}
          </button>
        </div>

        {isNGN(q.type) && step && (
          <div className="ngn-banner">
            <span>Next Gen NCLEX</span><span className="sep">·</span>
            <span>{step.name}</span><span className="sep">·</span>
            <span>Partial credit</span>
          </div>
        )}

        {q.scenario && <p className="stem">{q.scenario}</p>}
        {q.chart && <ChartTabs chart={q.chart} />}

        <p className="stem">{q.stem}</p>

        {q.type === 'sata' && <p className="small muted" style={{ marginTop: -8 }}>Select all that apply.</p>}
        {q.type === 'order' && <p className="small muted" style={{ marginTop: -8 }}>Click the options in the order they should be performed.</p>}

        {q.type === 'matrix' && <MatrixItem {...ngnProps} />}
        {q.type === 'bowtie' && <BowtieItem {...ngnProps} />}
        {q.type === 'cloze' && <ClozeItem {...ngnProps} />}
        {q.type === 'highlight' && <HighlightItem {...ngnProps} />}
        {q.type === 'trend' && <TrendItem {...ngnProps} />}
        {q.type === 'dnd' && <DndItem {...ngnProps} />}
        {q.type === 'dyad' && <DyadItem {...ngnProps} />}

        {q.type === 'fill' && (
          <div className="row">
            <input ref={fillRef} className="fill-input" value={typeof resp === 'string' ? resp : ''}
              disabled={shown} placeholder={q.unit ? `Answer in ${q.unit}` : 'Your answer'}
              onChange={e => setResp(e.target.value)} />
            {q.unit && <span className="muted small">{q.unit}</span>}
          </div>
        )}

        {['mc', 'sata', 'order'].includes(q.type) && (
          <div className="opts">
            {q.options.map((opt, idx) => {
              const seq = q.type === 'order' ? (resp || []).indexOf(idx) : -1
              const selected = q.type === 'order' ? seq > -1 : (resp || []).includes(idx)
              const w = shown ? whyAt(q, idx) : null
              return (
                <div key={idx} className="opt-wrap">
                  <button className="opt" disabled={shown}
                    data-sel={selected} data-state={optState(idx)} onClick={() => choose(idx)}>
                    <span className="key">{q.type === 'order' ? (seq > -1 ? seq + 1 : '·') : LETTERS[idx]}</span>
                    <span>{opt}</span>
                    {shown && optState(idx) === 'correct' && <span className="mark">✓</span>}
                    {shown && optState(idx) === 'wrong' && <span className="mark">✕</span>}
                  </button>
                  {w && (
                    <div className="why" data-state={optState(idx)} data-picked={selected}>
                      {selected && optState(idx) === 'wrong' && (
                        <span className="why-badge">You chose this</span>
                      )}
                      <p>{w.text}</p>
                      {w.trap && TRAPS[w.trap] && selected && optState(idx) === 'wrong' && (
                        <p className="why-trap">
                          <strong>{TRAPS[w.trap].name}.</strong> {TRAPS[w.trap].hint}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}

        {shown && (
          <div className={'feedback ' + (result.correct ? 'correct' : 'wrong')}>
            <div className="verdict">
              {result.correct ? '✓ Correct' : result.earned > 0 ? '◐ Partially correct' : '✕ Not quite'}
              {result.possible > 1 && (
                <span className="partial-badge">{result.earned} of {result.possible} points</span>
              )}
              {!result.correct && q.type === 'order' && (
                <span className="small muted">Correct order: {q.answer.map(a => LETTERS[a]).join(' → ')}</span>
              )}
              {!result.correct && q.type === 'fill' && (
                <span className="small muted">Answer: {q.answerText[0]}{q.unit ? ' ' + q.unit : ''}</span>
              )}
            </div>
            <h4>Rationale</h4>
            <p className="small">{q.rationale}</p>
            {q.strategy && (<><h4>Test-taking strategy</h4><p className="small">{q.strategy}</p></>)}
          </div>
        )}
      </article>

      <div className="quiz-foot">
        <button className="btn" disabled={i === 0} onClick={() => setI(i - 1)}>← Previous</button>
        <span style={{ flex: 1 }} />
        <span className="tiny muted"><kbd>1</kbd>–<kbd>6</kbd> select · <kbd>Enter</kbd> continue · <kbd>F</kbd> flag</span>
        {isStudy && !shown ? (
          <button className="btn primary" disabled={!canSubmit} onClick={() => reveal()}>Check answer</button>
        ) : (
          <button className="btn primary" onClick={next}>{i + 1 === questions.length ? 'Finish' : 'Next →'}</button>
        )}
      </div>
    </main>
  )
}
