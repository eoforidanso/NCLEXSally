// Pure helpers for building and grading a quiz session.

export function shuffle(arr, rng = Math.random) {
  const a = arr.slice()
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/**
 * Reorder a question's options and remap its answer indices.
 * Ordered-response items keep their option order (the sequence IS the answer).
 */
export function shuffleOptions(q) {
  // Ordered response encodes the answer in the sequence, fill has no options, and
  // Next Gen items carry structured option sets that must keep their positions.
  if (!Array.isArray(q.options) || q.type === 'order' || q.type === 'fill') return q
  const idx = shuffle(q.options.map((_, i) => i))
  const out = {
    ...q,
    options: idx.map(i => q.options[i]),
    answer: q.answer.map(a => idx.indexOf(a)).sort((x, y) => x - y)
  }
  // Per-option rationales are index-aligned to options, so they must be
  // reordered identically. Missing this would attach every explanation to the
  // wrong choice — silently, and only once options are shuffled.
  if (Array.isArray(q.why)) out.why = idx.map(i => q.why[i])
  return out
}

/** Normalize a `why` entry, which may be a plain string or { text, trap }. */
export const whyAt = (q, i) => {
  const w = q.why?.[i]
  if (!w) return null
  return typeof w === 'string' ? { text: w, trap: null } : { text: w.text, trap: w.trap || null }
}

const norm = s => String(s).trim().toLowerCase().replace(/\s+/g, ' ')
const sameSet = (a, b) => {
  if (!Array.isArray(a) || a.length !== b.length) return false
  const x = [...a].sort((m, n) => m - n), y = [...b].sort((m, n) => m - n)
  return x.every((v, i) => v === y[i])
}

/**
 * Score a response.
 *
 * Returns { earned, possible, correct }. Classic items are worth one point and
 * are all-or-nothing. Next Gen items carry partial credit the way NCSBN scores
 * them: one point per correctly answered row or blank, or +1/-1 rationale
 * scoring floored at zero for highlight items.
 *
 * `resp` shape by type:
 *   mc / sata / order   array of option indices
 *   fill                string
 *   matrix              array of chosen column index per row (null = unanswered)
 *   bowtie              { condition: idx, actions: [idx], parameters: [idx] }
 *   cloze               array of chosen option index per blank
 *   highlight           array of selected segment indices
 */
export function score(q, resp) {
  const none = p => ({ earned: 0, possible: p, correct: false })

  switch (q.type) {
    case 'matrix': {
      const possible = q.rows.length
      if (!Array.isArray(resp)) return none(possible)
      const earned = q.rows.reduce((n, row, i) => n + (resp[i] === row.answer ? 1 : 0), 0)
      return { earned, possible, correct: earned === possible }
    }

    case 'bowtie': {
      const possible = 1 + q.actions.pick + q.parameters.pick
      if (!resp) return none(possible)
      let earned = resp.condition === q.condition.answer ? 1 : 0
      // Each correctly placed action or parameter earns a point on its own.
      for (const i of resp.actions || []) if (q.actions.answer.includes(i)) earned++
      for (const i of resp.parameters || []) if (q.parameters.answer.includes(i)) earned++
      return { earned, possible, correct: earned === possible }
    }

    case 'cloze': {
      const possible = q.blanks.length
      if (!Array.isArray(resp)) return none(possible)
      const earned = q.blanks.reduce((n, b, i) => n + (resp[i] === b.answer ? 1 : 0), 0)
      return { earned, possible, correct: earned === possible }
    }

    case 'highlight': {
      const keys = q.passage.map((seg, i) => (seg.answer ? i : -1)).filter(i => i >= 0)
      const possible = keys.length
      if (!Array.isArray(resp)) return none(possible)
      const hits = resp.filter(i => keys.includes(i)).length
      const misses = resp.length - hits
      // Rationale scoring: wrong picks cancel right ones, but never go below zero.
      const earned = Math.max(0, hits - misses)
      return { earned, possible, correct: hits === possible && misses === 0 }
    }

    case 'trend': {
      // A trend item is multi-timepoint data plus a multiple-response question.
      // Scored +1 per correct pick and -1 per incorrect, floored at zero.
      const possible = q.answer.length
      if (!Array.isArray(resp)) return none(possible)
      const hits = resp.filter(i => q.answer.includes(i)).length
      const earned = Math.max(0, hits - (resp.length - hits))
      return { earned, possible, correct: hits === possible && resp.length === possible }
    }

    case 'dnd': {
      if (q.mode === 'sequence') {
        // Extended drag-and-drop sequencing gives credit per correctly placed
        // token, unlike the classic all-or-nothing ordered response.
        const possible = q.tokens.length
        if (!Array.isArray(resp)) return none(possible)
        const earned = q.answer.reduce((n, tok, pos) => n + (resp[pos] === tok ? 1 : 0), 0)
        return { earned, possible, correct: earned === possible }
      }
      // Categorization: one point per token dropped in the right zone.
      const possible = q.tokens.length
      if (!Array.isArray(resp)) return none(possible)
      const earned = q.tokens.reduce((n, t, i) => n + (resp[i] === t.zone ? 1 : 0), 0)
      return { earned, possible, correct: earned === possible }
    }

    case 'dyad': {
      // 0/1 dyad scoring: a pair earns its point only when BOTH halves are
      // right. Picking the correct condition with the wrong supporting
      // evidence earns nothing, which is the whole point of the format.
      const possible = q.rows.length
      if (!Array.isArray(resp)) return none(possible)
      const earned = q.rows.reduce((n, row, i) => {
        const r = resp[i] || {}
        return n + (r.finding === row.findingAnswer && r.action === row.actionAnswer ? 1 : 0)
      }, 0)
      return { earned, possible, correct: earned === possible }
    }

    case 'fill': {
      const ok = resp != null && (q.answerText || []).some(a => norm(a) === norm(resp))
      return { earned: ok ? 1 : 0, possible: 1, correct: ok }
    }

    case 'order': {
      const ok = Array.isArray(resp) && resp.length === q.answer.length &&
        resp.every((v, i) => v === q.answer[i])
      return { earned: ok ? 1 : 0, possible: 1, correct: ok }
    }

    default: {
      // mc and sata are scored all-or-nothing, as on the classic exam.
      const ok = sameSet(resp, q.answer)
      return { earned: ok ? 1 : 0, possible: 1, correct: ok }
    }
  }
}

/** Convenience wrapper: was the item fully correct? */
export const grade = (q, resp) => score(q, resp).correct

/** Has the client supplied enough of an answer for this item to be submitted? */
export function isComplete(q, resp) {
  switch (q.type) {
    case 'matrix':  return Array.isArray(resp) && q.rows.every((_, i) => resp[i] != null)
    case 'cloze':   return Array.isArray(resp) && q.blanks.every((_, i) => resp[i] != null)
    case 'highlight': return Array.isArray(resp) && resp.length > 0
    case 'trend':   return Array.isArray(resp) && resp.length > 0
    case 'dnd':     return Array.isArray(resp) && q.tokens.every((_, i) =>
      q.mode === 'sequence' ? resp[i] != null : resp[i] != null)
    case 'dyad':    return Array.isArray(resp) && q.rows.every((_, i) =>
      resp[i] && resp[i].finding != null && resp[i].action != null)
    case 'bowtie':  return !!resp && resp.condition != null &&
      (resp.actions || []).length === q.actions.pick &&
      (resp.parameters || []).length === q.parameters.pick
    case 'fill':    return typeof resp === 'string' && resp.trim().length > 0
    case 'order':   return Array.isArray(resp) && resp.length === q.options.length
    default:        return Array.isArray(resp) && resp.length > 0
  }
}

/**
 * Select questions for a session.
 * pool: all questions. opts: { catIds, count, difficulties, types, mode, stats, flaggedOnly }
 */
export function buildSession(pool, opts) {
  const { catIds = [], count = 25, difficulties = [], types = [], filter = 'all', stats = {}, flagged = [] } = opts
  let qs = pool

  if (catIds.length) qs = qs.filter(q => catIds.includes(q.cat))
  if (difficulties.length) qs = qs.filter(q => difficulties.includes(q.difficulty))

  // An unfolding case study is a single unit made of several item types, so a
  // type filter cannot select part of one. 'case' is offered as its own type:
  // choosing it keeps whole cases, and choosing any other type drops them.
  if (types.length) {
    const wantsCases = types.includes('case')
    qs = qs.filter(q => (q.caseId ? wantsCases : types.includes(q.type)))
  }

  if (filter === 'unseen')   qs = qs.filter(q => !stats[q.id]?.seen)
  if (filter === 'missed')   qs = qs.filter(q => (stats[q.id]?.wrong || 0) > 0)
  if (filter === 'flagged')  qs = qs.filter(q => flagged.includes(q.id))

  return packCases(shuffle(qs), count)
}

/**
 * An unfolding case study only makes sense whole and in order, so shuffle at the
 * level of the *case* rather than the item. Standalone questions shuffle freely;
 * a case is drawn as one block, and is skipped entirely if it will not fit in
 * what remains of the requested count.
 */
function packCases(shuffled, count) {
  const caseOrder = []
  const caseItems = new Map()
  const singles = []

  for (const q of shuffled) {
    if (!q.caseId) { singles.push(q); continue }
    if (!caseItems.has(q.caseId)) { caseItems.set(q.caseId, []); caseOrder.push(q.caseId) }
    caseItems.get(q.caseId).push(q)
  }
  // Restore each case's authored sequence, which the shuffle scrambled.
  for (const [, items] of caseItems) items.sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }))

  const out = []
  let si = 0, ci = 0
  while (out.length < count && (si < singles.length || ci < caseOrder.length)) {
    // Interleave so a session is not all cases up front or all cases at the end.
    const takeCase = ci < caseOrder.length && (si >= singles.length || Math.random() < 0.22)
    if (takeCase) {
      const items = caseItems.get(caseOrder[ci++])
      if (out.length + items.length <= count) out.push(...items)
    } else if (si < singles.length) {
      out.push(singles[si++])
    }
  }
  return out.slice(0, count)
}

/** Group a finished session's items by any question field (cat, ncjmm, difficulty). */
export function tallyBy(field, items, byId) {
  const out = {}
  for (const it of items) {
    const q = byId[it.qid]
    if (!q || q[field] == null) continue
    const k = q[field]
    out[k] ||= { total: 0, correct: 0, earned: 0, possible: 0 }
    out[k].total++
    out[k].earned += it.earned ?? (it.correct ? 1 : 0)
    out[k].possible += it.possible ?? 1
    if (it.correct) out[k].correct++
  }
  return out
}

export const tallyByCategory = (items, byId) => tallyBy('cat', items, byId)

export function fmtTime(ms) {
  const s = Math.floor(ms / 1000)
  const h = Math.floor(s / 3600)
  const m = Math.floor((s % 3600) / 60)
  const sec = s % 60
  const pad = n => String(n).padStart(2, '0')
  return h > 0 ? `${h}:${pad(m)}:${pad(sec)}` : `${m}:${pad(sec)}`
}
