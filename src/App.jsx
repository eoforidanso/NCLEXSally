import { useCallback, useEffect, useMemo, useState } from 'react'
import { QUESTIONS, QUESTION_BY_ID } from './data/index.js'
import { load, save, resetAll } from './lib/storage.js'
import Home from './components/Home.jsx'
import Setup from './components/Setup.jsx'
import Quiz from './components/Quiz.jsx'
import Results from './components/Results.jsx'
import Dashboard from './components/Dashboard.jsx'

const IconPlus = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
  </svg>
)
const IconChart = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" y1="20" x2="20" y2="20" /><line x1="7" y1="20" x2="7" y2="12" /><line x1="12" y1="20" x2="12" y2="7" /><line x1="17" y1="20" x2="17" y2="14" />
  </svg>
)
const IconSun = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4.5" />
    <path d="M12 2.5v2.5M12 19v2.5M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2.5 12H5M19 12h2.5M4.2 19.8L6 18M18 6l1.8-1.8" />
  </svg>
)
const IconMoon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.8 6.8 0 0 0 10.5 10.5z" />
  </svg>
)
const IconAuto = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3a9 9 0 0 0 0 18z" fill="currentColor" stroke="none" />
  </svg>
)

export default function App() {
  const [store, setStore] = useState(load)
  const [view, setView] = useState({ name: 'home' })

  useEffect(() => { save(store) }, [store])

  // Theme: explicit choice wins, otherwise follow the OS.
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    const apply = () => {
      const t = store.prefs.theme
      const dark = t === 'dark' || (t === 'system' && mq.matches)
      document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
    }
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [store.prefs.theme])

  const patch = useCallback(fn => setStore(s => fn(structuredClone(s))), [])

  const toggleFlag = useCallback(qid => patch(s => {
    s.flagged = s.flagged.includes(qid) ? s.flagged.filter(f => f !== qid) : [...s.flagged, qid]
    return s
  }), [patch])

  const recordAnswer = useCallback((qid, correct, result, traps = []) => patch(s => {
    // Reasoning-error tally, kept separate from per-question stats so it
    // survives as a picture of *how* this student goes wrong.
    s.traps ||= {}
    for (const t of traps) s.traps[t] = (s.traps[t] || 0) + 1
    const e = s.stats[qid] || { seen: 0, correct: 0, wrong: 0, earned: 0, possible: 0 }
    e.seen++
    if (correct) e.correct++; else e.wrong++
    // Points let partial credit on Next Gen items count for what it is worth.
    e.earned = (e.earned || 0) + (result?.earned ?? (correct ? 1 : 0))
    e.possible = (e.possible || 0) + (result?.possible ?? 1)
    e.lastResult = correct
    e.lastSeen = Date.now()
    s.stats[qid] = e
    return s
  }), [patch])

  const finishSession = useCallback(session => patch(s => {
    s.sessions = [session, ...s.sessions].slice(0, 60)
    return s
  }), [patch])

  const cycleTheme = () => patch(s => {
    s.prefs.theme = { system: 'light', light: 'dark', dark: 'system' }[s.prefs.theme]
    return s
  })

  const ThemeIcon = { system: IconAuto, light: IconSun, dark: IconMoon }[store.prefs.theme]

  const nav = name => setView({ name })

  const body = useMemo(() => {
    switch (view.name) {
      case 'setup':
        return <Setup store={store} pool={QUESTIONS}
                 onStart={cfg => setView({ name: 'quiz', cfg })}
                 onCancel={() => nav('home')} />
      case 'quiz':
        return <Quiz key={view.cfg.key} cfg={view.cfg} store={store}
                 onFlag={toggleFlag} onAnswer={recordAnswer}
                 onFinish={session => { finishSession(session); setView({ name: 'results', session }) }}
                 onQuit={() => nav('home')} />
      case 'results':
        return <Results session={view.session} byId={QUESTION_BY_ID}
                 flagged={store.flagged} onFlag={toggleFlag}
                 onRetryMissed={cfg => setView({ name: 'quiz', cfg })}
                 onHome={() => nav('home')} />
      case 'dashboard':
        return <Dashboard store={store} pool={QUESTIONS} byId={QUESTION_BY_ID}
                 onStart={() => nav('setup')}
                 onReset={() => { resetAll(); setStore(load()); nav('home') }} />
      default:
        return <Home store={store} pool={QUESTIONS}
                 onQuickStart={cfg => setView({ name: 'quiz', cfg })}
                 onCustom={() => nav('setup')} onDashboard={() => nav('dashboard')} />
    }
  }, [view, store, toggleFlag, recordAnswer, finishSession])

  const inQuiz = view.name === 'quiz'

  return (
    <div className="app">
      <header className="topbar">
        <span className="brand">
          <span className="brand-mark">N</span>
          <span>NCLEX Sally</span>
        </span>
        <span className="spacer" />
        {!inQuiz && (
          <nav className="nav">
            <button className="nav-link" onClick={() => nav('dashboard')} aria-current={view.name === 'dashboard' ? 'page' : undefined}>
              <IconChart /> Progress
            </button>
            <button className="btn primary sm" onClick={() => nav('setup')}>
              <IconPlus /> New Quiz
            </button>
          </nav>
        )}
        <button className="icon-btn" onClick={cycleTheme} title={`Theme: ${store.prefs.theme}`}>
          <ThemeIcon />
        </button>
      </header>
      {body}
    </div>
  )
}
