import { useRef, useState } from 'react'

/**
 * Renderers for the remaining Next Generation item types: trend analysis,
 * extended drag and drop, and linked-pair (dyad) items.
 */

/* ------------------------------ trend analysis ---------------------------- */

/**
 * Multi-timepoint data followed by a multiple-response question about the
 * change. Rows whose values move are highlighted so the table reads as a trend
 * rather than as three unrelated columns.
 */
export function TrendItem({ q, resp, onChange, shown }) {
  const picks = Array.isArray(resp) ? resp : []

  const state = i => {
    if (!shown) return undefined
    if (q.answer.includes(i)) return 'correct'
    if (picks.includes(i)) return 'wrong'
    return undefined
  }

  return (
    <>
      <div className="trend-wrap">
        <table className="trend">
          <thead>
            <tr>
              <th scope="col">Measure</th>
              {q.timepoints.map((t, i) => <th key={i} scope="col">{t}</th>)}
            </tr>
          </thead>
          <tbody>
            {q.data.map((row, r) => (
              <tr key={r}>
                <th scope="row">{row.label}</th>
                {row.values.map((v, c) => (
                  <td key={c} className={c === row.values.length - 1 ? 'latest' : undefined}>{v}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="opts">
        {q.options.map((opt, i) => (
          <button key={i} className="opt" disabled={shown}
            data-sel={picks.includes(i)} data-state={state(i)}
            onClick={() => onChange(prev => {
              const cur = Array.isArray(prev) ? prev : []
              return cur.includes(i) ? cur.filter(x => x !== i) : [...cur, i].sort((a, b) => a - b)
            })}>
            <span className="key">{picks.includes(i) ? '✓' : ''}</span>
            <span>{opt}</span>
            {shown && state(i) === 'correct' && <span className="mark">✓</span>}
            {shown && state(i) === 'wrong' && <span className="mark">✕</span>}
          </button>
        ))}
      </div>
    </>
  )
}

/* --------------------------- extended drag and drop ----------------------- */

/**
 * Tokens are moved by dragging, and equally by tapping a token then tapping its
 * destination. The tap path is not a fallback bolted on afterwards — HTML5 drag
 * events do not fire on touch screens at all, so for a student working on a
 * tablet it is the only path that exists.
 */
export function DndItem({ q, resp, onChange, shown }) {
  const [held, setHeldState] = useState(null)
  // A ref alongside the state: the drop handler must read the token that is
  // held *right now*, not the one captured when this render ran. Two taps
  // landing in the same task would otherwise see a stale value.
  const heldRef = useRef(null)
  const setHeld = v => { heldRef.current = v; setHeldState(v) }
  const sequence = q.mode === 'sequence'

  // categorize: resp[tokenIndex] = zoneIndex
  // sequence:   resp[position]   = tokenIndex
  const placed = Array.isArray(resp) ? resp : []

  const place = (tokenIdx, target) => {
    if (shown) return
    onChange(prev => {
      const cur = Array.isArray(prev) ? [...prev] : []
      if (sequence) {
        // A token can occupy only one slot, so clear it from wherever it was.
        for (let i = 0; i < cur.length; i++) if (cur[i] === tokenIdx) cur[i] = null
        cur[target] = tokenIdx
      } else {
        cur[tokenIdx] = target
      }
      return cur
    })
    setHeld(null)
  }

  const unplace = tokenIdx => {
    if (shown) return
    onChange(prev => {
      const cur = Array.isArray(prev) ? [...prev] : []
      if (sequence) { for (let i = 0; i < cur.length; i++) if (cur[i] === tokenIdx) cur[i] = null }
      else cur[tokenIdx] = null
      return cur
    })
  }

  const tokenState = tokenIdx => {
    if (!shown) return undefined
    if (sequence) {
      const pos = placed.indexOf(tokenIdx)
      return q.answer[pos] === tokenIdx ? 'correct' : 'wrong'
    }
    return placed[tokenIdx] === q.tokens[tokenIdx].zone ? 'correct' : 'wrong'
  }

  const Token = ({ i, inZone }) => (
    <button type="button" className="dnd-token" disabled={shown}
      draggable={!shown}
      data-held={held === i}
      data-state={inZone ? tokenState(i) : undefined}
      aria-pressed={held === i}
      onDragStart={e => { setHeld(i); e.dataTransfer.setData('text/plain', String(i)) }}
      onDragEnd={() => setHeld(null)}
      onClick={() => (inZone ? unplace(i) : setHeld(heldRef.current === i ? null : i))}>
      {q.tokens[i].text ?? q.tokens[i]}
    </button>
  )

  const dropProps = target => ({
    onDragOver: e => { e.preventDefault() },
    onDrop: e => {
      e.preventDefault()
      const i = Number(e.dataTransfer.getData('text/plain'))
      if (!Number.isNaN(i)) place(i, target)
    },
    onClick: () => { if (heldRef.current != null) place(heldRef.current, target) }
  })

  const unplacedTokens = q.tokens
    .map((_, i) => i)
    .filter(i => (sequence ? !placed.includes(i) : placed[i] == null))

  return (
    <div className="dnd">
      <div className="dnd-bank" aria-label="Available options">
        {unplacedTokens.length === 0
          ? <span className="tiny muted">All options placed.</span>
          : unplacedTokens.map(i => <Token key={i} i={i} />)}
      </div>

      <p className="tiny muted dnd-hint">
        Drag an option into place, or tap it and then tap where it belongs. Tap a placed
        option to send it back.
      </p>

      <div className={sequence ? 'dnd-zones seq' : 'dnd-zones'}>
        {(sequence ? q.tokens.map((_, i) => `Step ${i + 1}`) : q.zones).map((label, z) => {
          const contents = sequence
            ? (placed[z] != null ? [placed[z]] : [])
            : q.tokens.map((_, i) => i).filter(i => placed[i] === z)
          return (
            <div key={z} className="dnd-zone" data-active={held != null} {...dropProps(z)}>
              <span className="dnd-zone-label">{label}</span>
              <div className="dnd-zone-body">
                {contents.length === 0
                  ? <span className="dnd-empty">Drop here</span>
                  : contents.map(i => <Token key={i} i={i} inZone />)}
              </div>
            </div>
          )
        })}
      </div>

      {shown && (
        <div className="dnd-key">
          <h4>Correct placement</h4>
          {sequence
            ? <ol>{q.answer.map(t => <li key={t}>{q.tokens[t].text ?? q.tokens[t]}</li>)}</ol>
            : q.zones.map((z, zi) => (
                <p key={zi} className="small">
                  <strong>{z}:</strong>{' '}
                  {q.tokens.filter(t => t.zone === zi).map(t => t.text).join('; ')}
                </p>
              ))}
        </div>
      )}
    </div>
  )
}

/* ------------------------------- linked pairs ----------------------------- */

/**
 * 0/1 dyad scoring. Each row asks for a supporting finding and the action it
 * calls for, and the row earns its point only when both are right — picking the
 * correct evidence but the wrong response earns nothing, which is exactly the
 * behaviour this format is designed to detect.
 */
export function DyadItem({ q, resp, onChange, shown }) {
  const rows = Array.isArray(resp) ? resp : []

  const set = (r, key, value) => onChange(prev => {
    const cur = Array.isArray(prev) ? [...prev] : []
    cur[r] = { ...(cur[r] || {}), [key]: value }
    return cur
  })

  return (
    <div className="dyad">
      {q.rows.map((row, r) => {
        const picked = rows[r] || {}
        const fOk = picked.finding === row.findingAnswer
        const aOk = picked.action === row.actionAnswer
        const rowOk = fOk && aOk
        return (
          <div key={r} className="dyad-row" data-state={shown ? (rowOk ? 'correct' : 'wrong') : undefined}>
            <div className="dyad-condition">
              <span className="dyad-tag">Client problem</span>
              <strong>{row.condition}</strong>
              {shown && (
                <span className={'chip ' + (rowOk ? 'good' : 'bad')} style={{ marginLeft: 8 }}>
                  {rowOk ? '1 point' : '0 points'}
                </span>
              )}
            </div>
            <div className="dyad-pair">
              <label className="dyad-field">
                <span className="dyad-tag">Supporting finding</span>
                <select className="cloze-select" disabled={shown}
                  data-state={shown ? (fOk ? 'correct' : 'wrong') : undefined}
                  value={picked.finding ?? ''}
                  onChange={e => set(r, 'finding', Number(e.target.value))}>
                  <option value="" disabled>Select…</option>
                  {row.findingOptions.map((o, i) => <option key={i} value={i}>{o}</option>)}
                </select>
                {shown && !fOk && <span className="cloze-key">{row.findingOptions[row.findingAnswer]}</span>}
              </label>
              <span className="dyad-arrow" aria-hidden="true">→</span>
              <label className="dyad-field">
                <span className="dyad-tag">Nursing action</span>
                <select className="cloze-select" disabled={shown}
                  data-state={shown ? (aOk ? 'correct' : 'wrong') : undefined}
                  value={picked.action ?? ''}
                  onChange={e => set(r, 'action', Number(e.target.value))}>
                  <option value="" disabled>Select…</option>
                  {row.actionOptions.map((o, i) => <option key={i} value={i}>{o}</option>)}
                </select>
                {shown && !aOk && <span className="cloze-key">{row.actionOptions[row.actionAnswer]}</span>}
              </label>
            </div>
          </div>
        )
      })}
      {shown && (
        <p className="tiny muted">
          Each row scores as a unit: the point is earned only when the finding and the
          action are both correct.
        </p>
      )}
    </div>
  )
}
