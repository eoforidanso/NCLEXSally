// Structural check over the whole bank: run `npm run verify`.
import { readdirSync } from 'node:fs'
import { TRAP_IDS } from '../src/data/categories.js'
import { pathToFileURL } from 'node:url'
import { join } from 'node:path'

const dir = new URL('../src/data/', import.meta.url)
const files = readdirSync(dir).filter(f => f.startsWith('bank-') && f.endsWith('.js') && f !== 'bank-why.js')
const WHY = (await import(new URL('bank-why.js', dir).href)).default

const all = []
for (const f of files) {
  const mod = await import(pathToFileURL(join(dir.pathname, f)).href)
  // merge per-option rationales exactly as the app does, so the validator
  // checks what students actually see
  all.push(...mod.default.map(q => (WHY[q.id] ? { ...q, why: WHY[q.id] } : q)))
}

const errors = []
const seen = new Set()
const byCat = {}

for (const q of all) {
  const where = q.id || '(no id)'
  if (!q.id) errors.push('question with no id')
  if (seen.has(q.id)) errors.push(`duplicate id: ${q.id}`)
  seen.add(q.id)
  byCat[q.cat] = (byCat[q.cat] || 0) + 1

  if (!q.stem || q.stem.length < 20) errors.push(`${where}: stem missing or too short`)
  if (!q.rationale || q.rationale.length < 30) errors.push(`${where}: rationale missing or too short`)
  if (![1, 2, 3].includes(q.difficulty)) errors.push(`${where}: bad difficulty ${q.difficulty}`)

  if (q.type === 'matrix') {
    if (!Array.isArray(q.columns) || q.columns.length < 2) errors.push(`${where}: matrix needs >= 2 columns`)
    if (!Array.isArray(q.rows) || q.rows.length < 3) errors.push(`${where}: matrix needs >= 3 rows`)
    for (const [ri, row] of (q.rows || []).entries()) {
      if (!row.text) errors.push(`${where}: matrix row ${ri} has no text`)
      if (!Number.isInteger(row.answer) || row.answer < 0 || row.answer >= (q.columns || []).length)
        errors.push(`${where}: matrix row ${ri} answer out of range`)
    }
    if (!q.ncjmm) errors.push(`${where}: NGN item needs an ncjmm step`)
  } else if (q.type === 'bowtie') {
    for (const k of ['condition', 'actions', 'parameters']) {
      const part = q[k]
      if (!part) { errors.push(`${where}: bowtie missing ${k}`); continue }
      if (!Array.isArray(part.options) || part.options.length < 3) errors.push(`${where}: bowtie ${k} needs >= 3 options`)
      if (!part.prompt) errors.push(`${where}: bowtie ${k} needs a prompt`)
    }
    if (!Number.isInteger(q.condition?.answer)) errors.push(`${where}: bowtie condition needs one answer index`)
    for (const k of ['actions', 'parameters']) {
      const part = q[k] || {}
      if (!Array.isArray(part.answer) || part.answer.length !== part.pick)
        errors.push(`${where}: bowtie ${k} answer count must equal pick (${part.pick})`)
      for (const a of part.answer || []) {
        if (a < 0 || a >= (part.options || []).length) errors.push(`${where}: bowtie ${k} answer ${a} out of range`)
      }
    }
    if (!q.ncjmm) errors.push(`${where}: NGN item needs an ncjmm step`)
  } else if (q.type === 'cloze') {
    if (!q.sentence || !/\{\d+\}/.test(q.sentence)) errors.push(`${where}: cloze sentence needs {n} placeholders`)
    if (!Array.isArray(q.blanks) || !q.blanks.length) errors.push(`${where}: cloze needs blanks`)
    for (const [bi, b] of (q.blanks || []).entries()) {
      if (!Array.isArray(b.options) || b.options.length < 2) errors.push(`${where}: cloze blank ${bi} needs >= 2 options`)
      if (!Number.isInteger(b.answer) || b.answer < 0 || b.answer >= (b.options || []).length)
        errors.push(`${where}: cloze blank ${bi} answer out of range`)
    }
    // Every placeholder must have a matching blank and vice versa.
    const used = [...(q.sentence || '').matchAll(/\{(\d+)\}/g)].map(m => Number(m[1]))
    for (let n = 0; n < (q.blanks || []).length; n++) {
      if (!used.includes(n)) errors.push(`${where}: cloze blank ${n} never appears in the sentence`)
    }
    for (const n of used) if (n >= (q.blanks || []).length) errors.push(`${where}: cloze placeholder {${n}} has no blank`)
    if (!q.ncjmm) errors.push(`${where}: NGN item needs an ncjmm step`)
  } else if (q.type === 'highlight') {
    if (!Array.isArray(q.passage) || q.passage.length < 3) errors.push(`${where}: highlight needs a passage`)
    const sel = (q.passage || []).filter(p => typeof p === 'object')
    const keys = sel.filter(p => p.answer)
    if (!keys.length) errors.push(`${where}: highlight needs >= 1 correct segment`)
    if (sel.length < 4) errors.push(`${where}: highlight needs >= 4 selectable segments to be discriminating`)
    for (const seg of sel) if (!seg.text) errors.push(`${where}: highlight segment missing text`)
    if (!q.ncjmm) errors.push(`${where}: NGN item needs an ncjmm step`)
  } else if (q.type === 'trend') {
    if (!Array.isArray(q.timepoints) || q.timepoints.length < 3)
      errors.push(`${where}: trend needs >= 3 time points to show a trend`)
    if (!Array.isArray(q.data) || !q.data.length) errors.push(`${where}: trend needs data rows`)
    for (const [ri, row] of (q.data || []).entries()) {
      if (!row.label) errors.push(`${where}: trend row ${ri} has no label`)
      if ((row.values || []).length !== (q.timepoints || []).length)
        errors.push(`${where}: trend row ${ri} has ${(row.values || []).length} values for ${(q.timepoints || []).length} time points`)
    }
    if (!Array.isArray(q.options) || q.options.length < 4) errors.push(`${where}: trend needs >= 4 options`)
    if (!Array.isArray(q.answer) || q.answer.length < 2) errors.push(`${where}: trend needs >= 2 correct answers`)
    for (const a of q.answer || []) {
      if (a < 0 || a >= (q.options || []).length) errors.push(`${where}: trend answer ${a} out of range`)
    }
    if (!q.ncjmm) errors.push(`${where}: NGN item needs an ncjmm step`)
  } else if (q.type === 'dnd') {
    if (!['categorize', 'sequence'].includes(q.mode)) errors.push(`${where}: dnd mode must be categorize or sequence`)
    if (!Array.isArray(q.tokens) || q.tokens.length < 3) errors.push(`${where}: dnd needs >= 3 tokens`)
    const texts = (q.tokens || []).map(t => t.text ?? t)
    if (new Set(texts).size !== texts.length) errors.push(`${where}: dnd has duplicate token text`)
    for (const [ti, t] of (q.tokens || []).entries()) {
      if (!(t.text ?? t)) errors.push(`${where}: dnd token ${ti} has no text`)
    }
    if (q.mode === 'categorize') {
      if (!Array.isArray(q.zones) || q.zones.length < 2) errors.push(`${where}: dnd categorize needs >= 2 zones`)
      for (const [ti, t] of (q.tokens || []).entries()) {
        if (!Number.isInteger(t.zone) || t.zone < 0 || t.zone >= (q.zones || []).length)
          errors.push(`${where}: dnd token ${ti} zone out of range`)
      }
      // A zone nobody belongs in is a distractor with no discriminating power.
      for (let z = 0; z < (q.zones || []).length; z++) {
        if (!(q.tokens || []).some(t => t.zone === z)) errors.push(`${where}: dnd zone "${q.zones[z]}" has no tokens`)
      }
    } else {
      if (!Array.isArray(q.answer) || q.answer.length !== (q.tokens || []).length)
        errors.push(`${where}: dnd sequence answer must place every token`)
      if (new Set(q.answer || []).size !== (q.answer || []).length)
        errors.push(`${where}: dnd sequence answer repeats a token`)
      for (const a of q.answer || []) {
        if (a < 0 || a >= (q.tokens || []).length) errors.push(`${where}: dnd sequence answer ${a} out of range`)
      }
    }
    if (!q.ncjmm) errors.push(`${where}: NGN item needs an ncjmm step`)
  } else if (q.type === 'dyad') {
    if (!Array.isArray(q.rows) || q.rows.length < 2) errors.push(`${where}: dyad needs >= 2 rows`)
    for (const [ri, row] of (q.rows || []).entries()) {
      if (!row.condition) errors.push(`${where}: dyad row ${ri} needs a condition`)
      for (const [k, ansKey] of [['findingOptions', 'findingAnswer'], ['actionOptions', 'actionAnswer']]) {
        const opts = row[k]
        if (!Array.isArray(opts) || opts.length < 3) errors.push(`${where}: dyad row ${ri} ${k} needs >= 3 options`)
        if (!Number.isInteger(row[ansKey]) || row[ansKey] < 0 || row[ansKey] >= (opts || []).length)
          errors.push(`${where}: dyad row ${ri} ${ansKey} out of range`)
        if (new Set(opts || []).size !== (opts || []).length) errors.push(`${where}: dyad row ${ri} ${k} has duplicates`)
      }
    }
    if (!q.ncjmm) errors.push(`${where}: NGN item needs an ncjmm step`)
  } else if (q.type === 'fill') {
    if (!Array.isArray(q.answerText) || !q.answerText.length) errors.push(`${where}: fill needs answerText`)
  } else {
    if (!Array.isArray(q.options) || q.options.length < 3) errors.push(`${where}: needs >= 3 options`)
    if (!Array.isArray(q.answer) || !q.answer.length) errors.push(`${where}: needs answer indices`)
    for (const a of q.answer || []) {
      if (!Number.isInteger(a) || a < 0 || a >= (q.options || []).length) errors.push(`${where}: answer index ${a} out of range`)
    }
    if (q.type === 'mc' && (q.answer || []).length !== 1) errors.push(`${where}: mc must have exactly 1 answer`)
    if (q.type === 'sata' && (q.answer || []).length < 2) errors.push(`${where}: sata must have >= 2 answers`)
    if (q.type === 'order' && (q.answer || []).length !== (q.options || []).length) errors.push(`${where}: order must sequence every option`)
    if (new Set(q.options || []).size !== (q.options || []).length) errors.push(`${where}: duplicate option text`)

    // Per-option rationales are index-aligned, so a length mismatch would
    // silently attach explanations to the wrong choices.
    if (q.why !== undefined) {
      if (!Array.isArray(q.why)) errors.push(`${where}: why must be an array`)
      else if (q.why.length !== (q.options || []).length)
        errors.push(`${where}: why has ${q.why.length} entries for ${(q.options || []).length} options`)
      else for (const [wi, w] of q.why.entries()) {
        const text = typeof w === 'string' ? w : w?.text
        const trap = typeof w === 'string' ? null : w?.trap
        if (!text || text.length < 25) errors.push(`${where}: why[${wi}] missing or too short`)
        if (trap && !TRAP_IDS.includes(trap)) errors.push(`${where}: why[${wi}] unknown trap "${trap}"`)
        // A trap explains why a *wrong* option attracts people; the key has none.
        if (trap && (q.answer || []).includes(wi)) errors.push(`${where}: why[${wi}] is a correct option but carries a trap tag`)
      }
    }
  }
}

const tally = f => all.reduce((a, q) => (q[f] == null ? a : (a[q[f]] = (a[q[f]] || 0) + 1, a)), {})
const line = o => Object.entries(o).sort((a, b) => b[1] - a[1]).map(([k, v]) => `${k} ${v}`).join('  ')

console.log(`\n  ${all.length} questions across ${files.length} files`)
for (const [c, n] of Object.entries(byCat).sort((a, b) => b[1] - a[1])) console.log(`    ${c.padEnd(6)} ${n}`)
console.log(`\n  difficulty  ${line(tally('difficulty'))}`)
console.log(`  types       ${line(tally('type'))}`)
const cj = tally('ncjmm')
if (Object.keys(cj).length) console.log(`  ngn steps   ${line(cj)}`)
const flatItems = all.filter(q => Array.isArray(q.options))
const withWhy = flatItems.filter(q => Array.isArray(q.why))
const trapped = withWhy.reduce((n, q) => n + q.why.filter(w => typeof w === 'object' && w?.trap).length, 0)
console.log(`  per-option  ${withWhy.length} of ${flatItems.length} option-based items (${Math.round(withWhy.length / flatItems.length * 100)}%), ${trapped} tagged distractors`)
const cases = new Set(all.filter(q => q.caseId).map(q => q.caseId))
if (cases.size) console.log(`  case studies ${cases.size}`)

if (errors.length) {
  console.log(`\n  ${errors.length} problem(s):`)
  for (const e of errors.slice(0, 40)) console.log('    - ' + e)
  process.exit(1)
}
console.log('\n  All checks passed.\n')
