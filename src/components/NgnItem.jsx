/**
 * Renderers for the Next Generation NCLEX item types.
 *
 * Every renderer takes the question, the current response, an onChange handler,
 * and `shown` (whether the answer has been revealed). When shown, each renderer
 * marks what the client picked against what was correct so the review is legible
 * without cross-referencing the rationale.
 */

/* ------------------------------- matrix grid ------------------------------ */

export function MatrixItem({ q, resp, onChange, shown }) {
  const picks = Array.isArray(resp) ? resp : []

  const cellState = (rowIdx, colIdx) => {
    if (!shown) return undefined
    const key = q.rows[rowIdx].answer
    if (colIdx === key) return 'correct'
    if (picks[rowIdx] === colIdx) return 'wrong'
    return undefined
  }

  return (
    <div className="matrix-wrap">
      <table className="matrix">
        <thead>
          <tr>
            <th />
            {q.columns.map((c, i) => <th key={i} scope="col">{c}</th>)}
          </tr>
        </thead>
        <tbody>
          {q.rows.map((row, r) => (
            <tr key={r}>
              <th scope="row">{row.text}</th>
              {q.columns.map((_, c) => (
                <td key={c} data-state={cellState(r, c)}>
                  <button
                    type="button"
                    className="cell"
                    role="radio"
                    aria-checked={picks[r] === c}
                    aria-label={`${row.text}: ${q.columns[c]}`}
                    disabled={shown}
                    data-sel={picks[r] === c}
                    onClick={() => onChange(prev => {
                      const cur = Array.isArray(prev) ? prev : []
                      return q.rows.map((_, i) => (i === r ? c : cur[i] ?? null))
                    })}
                  >
                    {picks[r] === c ? '●' : ''}
                  </button>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* ---------------------------------- bowtie -------------------------------- */

function BowtieColumn({ title, prompt, options, picks, answer, pick, shown, onToggle }) {
  const state = i => {
    if (!shown) return undefined
    if (answer.includes(i)) return 'correct'
    if (picks.includes(i)) return 'wrong'
    return undefined
  }
  return (
    <div className="bt-col">
      <h4 className="bt-title">{title}</h4>
      <p className="bt-prompt">{prompt}</p>
      <div className="bt-opts">
        {options.map((o, i) => (
          <button key={i} type="button" className="bt-opt" disabled={shown}
            data-sel={picks.includes(i)} data-state={state(i)}
            aria-pressed={picks.includes(i)}
            onClick={() => onToggle(i)}>
            {o}
          </button>
        ))}
      </div>
      <span className="bt-count">{picks.length} of {pick} selected</span>
    </div>
  )
}

export function BowtieItem({ q, resp, onChange, shown }) {
  const r = resp || { condition: null, actions: [], parameters: [] }

  const toggleMulti = (key, limit, idx) => onChange(prev => {
    const base = prev || { condition: null, actions: [], parameters: [] }
    const cur = base[key] || []
    const next = cur.includes(idx)
      ? cur.filter(x => x !== idx)
      : cur.length >= limit ? [...cur.slice(1), idx] // oldest pick drops out once full
      : [...cur, idx]
    return { ...base, [key]: next }
  })

  return (
    <div className="bowtie">
      <BowtieColumn title="Actions to Take" prompt={q.actions.prompt}
        options={q.actions.options} picks={r.actions || []} answer={q.actions.answer}
        pick={q.actions.pick} shown={shown}
        onToggle={i => toggleMulti('actions', q.actions.pick, i)} />

      <div className="bt-col bt-centre">
        <h4 className="bt-title">Condition</h4>
        <p className="bt-prompt">{q.condition.prompt}</p>
        <div className="bt-opts">
          {q.condition.options.map((o, i) => (
            <button key={i} type="button" className="bt-opt" disabled={shown}
              data-sel={r.condition === i}
              data-state={shown ? (i === q.condition.answer ? 'correct' : r.condition === i ? 'wrong' : undefined) : undefined}
              aria-pressed={r.condition === i}
              onClick={() => onChange(prev => ({
                ...(prev || { condition: null, actions: [], parameters: [] }), condition: i
              }))}>
              {o}
            </button>
          ))}
        </div>
        <span className="bt-count">{r.condition == null ? 'none' : '1'} of 1 selected</span>
      </div>

      <BowtieColumn title="Parameters to Monitor" prompt={q.parameters.prompt}
        options={q.parameters.options} picks={r.parameters || []} answer={q.parameters.answer}
        pick={q.parameters.pick} shown={shown}
        onToggle={i => toggleMulti('parameters', q.parameters.pick, i)} />
    </div>
  )
}

/* ----------------------------------- cloze -------------------------------- */

export function ClozeItem({ q, resp, onChange, shown }) {
  const picks = Array.isArray(resp) ? resp : []
  // The sentence is split on {0}, {1}, … placeholders; odd parts are blank indices.
  const parts = q.sentence.split(/\{(\d+)\}/g)

  return (
    <p className="cloze">
      {parts.map((part, i) => {
        if (i % 2 === 0) return <span key={i}>{part}</span>
        const b = Number(part)
        const blank = q.blanks[b]
        const ok = picks[b] === blank.answer
        return (
          <span key={i} className="cloze-slot">
            <select
              className="cloze-select"
              data-state={shown ? (ok ? 'correct' : 'wrong') : undefined}
              value={picks[b] ?? ''}
              disabled={shown}
              aria-label={`Blank ${b + 1}`}
              onChange={e => {
                const v = Number(e.target.value)
                onChange(prev => {
                  const cur = Array.isArray(prev) ? prev : []
                  return q.blanks.map((_, j) => (j === b ? v : cur[j] ?? null))
                })
              }}
            >
              <option value="" disabled>Select…</option>
              {blank.options.map((o, j) => <option key={j} value={j}>{o}</option>)}
            </select>
            {shown && !ok && <span className="cloze-key">{blank.options[blank.answer]}</span>}
          </span>
        )
      })}
    </p>
  )
}

/* --------------------------------- highlight ------------------------------ */

export function HighlightItem({ q, resp, onChange, shown }) {
  const picks = Array.isArray(resp) ? resp : []

  return (
    <div className="highlight">
      {q.passage.map((seg, i) => {
        if (typeof seg === 'string') return <span key={i}>{seg}</span>
        const selected = picks.includes(i)
        const state = shown ? (seg.answer ? 'correct' : selected ? 'wrong' : undefined) : undefined
        return (
          <button key={i} type="button" className="hl-seg" disabled={shown}
            data-sel={selected} data-state={state} aria-pressed={selected}
            onClick={() => onChange(prev => {
              const cur = Array.isArray(prev) ? prev : []
              return cur.includes(i) ? cur.filter(x => x !== i) : [...cur, i]
            })}>
            {seg.text}
          </button>
        )
      })}
    </div>
  )
}

/* ----------------------- EHR-style chart for case items ------------------- */

import { useState } from 'react'

export function ChartTabs({ chart }) {
  const tabs = Object.keys(chart)
  const [active, setActive] = useState(tabs[0])
  const body = chart[active]

  return (
    <div className="chart">
      <div className="chart-tabs" role="tablist">
        {tabs.map(t => (
          <button key={t} role="tab" aria-selected={active === t}
            className="chart-tab" onClick={() => setActive(t)}>{t}</button>
        ))}
      </div>
      <div className="chart-body" role="tabpanel">
        {Array.isArray(body) ? (
          <table className="chart-table">
            <thead>
              <tr>{body[0].map((h, i) => <th key={i}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {body.slice(1).map((row, r) => (
                <tr key={r}>{row.map((cell, c) => <td key={c}>{cell}</td>)}</tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="chart-note">{body}</p>
        )}
      </div>
    </div>
  )
}
