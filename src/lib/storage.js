const KEY = 'nclex-bank-v1'

const EMPTY = {
  // questionId -> { seen, correct, wrong, lastResult, lastSeen }
  stats: {},
  flagged: [],
  // trapId -> how many times this reasoning error has been made
  traps: {},
  sessions: [],   // { id, mode, startedAt, finishedAt, catIds, total, correct, items: [{qid, correct}] }
  prefs: { theme: 'system', showTimer: true, shuffleOptions: true }
}

export function load() {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return structuredClone(EMPTY)
    const parsed = JSON.parse(raw)
    return { ...structuredClone(EMPTY), ...parsed, prefs: { ...EMPTY.prefs, ...(parsed.prefs || {}) } }
  } catch {
    return structuredClone(EMPTY)
  }
}

export function save(state) {
  try { localStorage.setItem(KEY, JSON.stringify(state)) } catch { /* quota / private mode */ }
}

export function resetAll() {
  try { localStorage.removeItem(KEY) } catch { /* ignore */ }
}
