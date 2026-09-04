// Proposes a cognitive level for each question from the demand its stem actually
// places on the test taker. Run with --apply to write the changes back.
import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import { join } from 'node:path'

const dir = new URL('../src/data/', import.meta.url).pathname
const files = readdirSync(dir).filter(f => f.startsWith('bank-') && f.endsWith('.js'))

// --- level 3: analysis. Comparing, prioritizing, or detecting deterioration. ---
const L3 = [
  /which client should the nurse (assess|see|attend|answer|prioriti)/i,
  /should the nurse (assess|see) first/i,
  /which (client|finding|result|value|rhythm|action|change|laboratory)[^?]{0,80}(first|priority|most immediate|immediate|most urgent|most concerning)/i,
  /requires (the most )?immediate (action|intervention|attention)/i,
  /(reported|notify|notification)[^?]{0,40}(first|immediately|urgent)/i,
  /which[^?]{0,60}takes priority/i,
  /place the (actions|steps)/i,
  /in (priority |the correct )?order/i,
  /what should the nurse (do|suspect) first/i,
  /which finding[^?]{0,60}(most concerning|requires further|warrants)/i,
  /highest (priority|risk|immediate)/i,
  /most likely explains|best explains|what underlies/i,
  /how should the nurse interpret/i,
  /which .{0,40}distinguish/i,
]

// --- level 1: knowledge. Recall a fact with no clinical reasoning required. ---
const L1_STEM = [
  /^which abbreviation/i,
  /^which antidote/i,
  /^which (iv )?solution is/i,
  /^which combination of identifiers/i,
  /^which vaccine is contraindicated/i,
  /^how long may/i,
  /^what is the (purpose|rationale|expected rise)/i,
  /^which (medication|drug|electrolyte|laboratory|term|tool|measure|item|site|position|technique) (is|should|are)/i,
  /^according to erikson/i,
  /^which reflexes/i,
  /^which type of restraint knot/i,
  /^which situation (best illustrates|meets the definition|represents)/i,
  /^which event meets the definition/i,
]

// A stem describes a scenario when it introduces a person, with any number of
// adjectives between the article and the noun ("a hospitalized client", "an
// 80-year-old client"), or names an age or a specific clinical situation.
const PERSON = /\b(?:a|an|the)\s+(?:[\w-]+\s+){0,4}(?:nurse|client|parent|patient|provider|newborn|infant|toddler|child|adolescent|veteran|visitor|resident|woman|man)\b/i
const hasScenario = s =>
  PERSON.test(s.slice(0, 160)) || /\b\d{1,3}-(year|month|week|day)-old\b/i.test(s.slice(0, 160))

function classify(q) {
  const s = q.stem
  if (q.type === 'order') return [3, 'ordered response — sequencing is analysis']
  for (const re of L3) if (re.test(s)) return [3, `analysis cue: ${re.source.slice(0, 42)}`]

  // Multi-client comparison: several distinct clients in the options.
  if (q.options && q.options.length >= 4) {
    const clientOpts = q.options.filter(o => /^(a|an) (client|\d{1,3}-year-old|newborn|infant|child)/i.test(o.trim())).length
    if (clientOpts >= 3) return [3, 'options compare several different clients']
  }
  // Recognising an emergent complication from a constellation of findings.
  if (/\b(sudden|suddenly|abrupt|new onset|develops)\b/i.test(s) && /what should the nurse (suspect|recognize|anticipate)/i.test(s)) {
    return [3, 'detecting an emergent complication']
  }
  // Acid-base and lab-pattern synthesis.
  if (/(arterial blood gas|pH 7\.|bicarbonate|PaCO2)/i.test(s)) return [3, 'acid-base interpretation']

  for (const re of L1_STEM) if (re.test(s)) return [1, `recall stem: ${re.source.slice(0, 34)}`]
  // Short, scenario-free stems asking to identify a single fact.
  if (!hasScenario(s) && s.length < 165) return [1, 'no clinical scenario, short recall stem']

  return [2, 'single-client application']
}

const proposals = []
for (const f of files) {
  const mod = await import(pathToFileURL(join(dir, f)).href)
  for (const q of mod.default) {
    const [level, why] = classify(q)
    proposals.push({ f, q, level, why, changed: level !== q.difficulty })
  }
}

const dist = [1, 2, 3].map(n => proposals.filter(p => p.level === n).length)
console.log(`\n  Proposed: ${dist[0]} foundational / ${dist[1]} application / ${dist[2]} analysis`)
console.log(`  Changing ${proposals.filter(p => p.changed).length} of ${proposals.length} tags\n`)

if (process.argv.includes('--samples')) {
  for (const lvl of [1, 3]) {
    console.log(`\n===== proposed level ${lvl} (showing 12) =====`)
    for (const p of proposals.filter(x => x.level === lvl).slice(0, 12)) {
      console.log(`  [${p.q.id}] ${p.q.stem.slice(0, 95)}`)
      console.log(`        ↳ ${p.why}`)
    }
  }
}

if (process.argv.includes('--apply')) {
  for (const f of files) {
    let src = readFileSync(join(dir, f), 'utf8')
    for (const p of proposals.filter(x => x.f === f && x.changed)) {
      const re = new RegExp(`(id: '${p.q.id}',[\\s\\S]{0,220}?difficulty: )\\d`)
      if (!re.test(src)) { console.log(`  !! could not locate ${p.q.id}`); continue }
      src = src.replace(re, `$1${p.level}`)
    }
    writeFileSync(join(dir, f), src)
  }
  console.log('  Applied.\n')
}
