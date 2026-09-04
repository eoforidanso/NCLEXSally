// The eight NCLEX-RN Client Needs categories, with the NCSBN test-plan
// percentage ranges each contributes to the real exam. `target` is the number
// of items this bank aims to carry so the mix mirrors the blueprint.
export const CATEGORIES = [
  { id: 'moc',   name: 'Management of Care',                 short: 'Mgmt of Care',  pct: '15-21%', target: 180, color: '#4f7cff' },
  { id: 'safe',  name: 'Safety and Infection Control',        short: 'Safety',        pct: '10-16%', target: 130, color: '#e0603a' },
  { id: 'hpm',   name: 'Health Promotion and Maintenance',    short: 'Health Promo',  pct: '6-12%',  target:  90, color: '#2fa36b' },
  { id: 'psy',   name: 'Psychosocial Integrity',              short: 'Psychosocial',  pct: '6-12%',  target:  90, color: '#9b5de5' },
  { id: 'bcc',   name: 'Basic Care and Comfort',              short: 'Basic Care',    pct: '6-12%',  target:  90, color: '#d98d1f' },
  { id: 'pharm', name: 'Pharmacological and Parenteral Therapies', short: 'Pharm',   pct: '13-19%', target: 160, color: '#c9407a' },
  { id: 'risk',  name: 'Reduction of Risk Potential',         short: 'Risk Reduction',pct: '9-15%',  target: 120, color: '#0e8f9e' },
  { id: 'phys',  name: 'Physiological Adaptation',            short: 'Phys Adapt',    pct: '11-17%', target: 140, color: '#6b7280' }
]

export const CATEGORY_BY_ID = Object.fromEntries(CATEGORIES.map(c => [c.id, c]))

export const DIFFICULTY = {
  1: { label: 'Foundational', color: '#2fa36b' },
  2: { label: 'Application',  color: '#d98d1f' },
  3: { label: 'Analysis',     color: '#e0603a' }
}

// Question `type` values used across the bank.
//
// Classic formats:
//   'mc'      single-best-answer multiple choice
//   'sata'    select all that apply (all-or-nothing, as on the classic exam)
//   'order'   ordered response / prioritization
//   'fill'    fill in the blank (numeric or short text; `answerText` holds accepted values)
//
// Next Generation NCLEX formats (April 2023 onward). These carry partial credit
// and are tagged to a step of the clinical judgment model:
//   'matrix'    grid — one choice per row across mutually exclusive columns
//   'bowtie'    condition in the centre, actions to take, parameters to monitor
//   'cloze'     drop-downs embedded in a sentence
//   'highlight' click phrases in a chart excerpt to select them
//   'trend'     data across three or more time points, then a question about the change
//   'dnd'       extended drag and drop — categorize into zones, or sequence into order
//   'dyad'      linked selections scored as a unit (0/1 dyad scoring)
export const TYPE_LABEL = {
  mc: 'Multiple Choice',
  sata: 'Select All That Apply',
  order: 'Ordered Response',
  fill: 'Fill in the Blank',
  matrix: 'Matrix Grid',
  bowtie: 'Bow-Tie',
  cloze: 'Drop-Down Cloze',
  highlight: 'Highlight in Text',
  trend: 'Trend Analysis',
  dnd: 'Drag and Drop',
  dyad: 'Linked Pairs'
}

export const NGN_TYPES = ['matrix', 'bowtie', 'cloze', 'highlight', 'trend', 'dnd', 'dyad']
export const isNGN = t => NGN_TYPES.includes(t)

/**
 * The six cognitive steps of the NCSBN Clinical Judgment Measurement Model.
 * Every Next Gen item is written to exercise one of them, which is what lets the
 * dashboard show *which kind of thinking* a student is weak at rather than only
 * which content area.
 */
export const NCJMM = [
  { id: 'recognize', name: 'Recognize Cues',       blurb: 'Pick the relevant findings out of the noise.' },
  { id: 'analyze',   name: 'Analyze Cues',         blurb: 'Link findings to what they mean.' },
  { id: 'prioritize',name: 'Prioritize Hypotheses',blurb: 'Rank the possible explanations by urgency and likelihood.' },
  { id: 'solutions', name: 'Generate Solutions',   blurb: 'Decide what could be done and what outcome you want.' },
  { id: 'action',    name: 'Take Action',          blurb: 'Carry out the highest-priority intervention.' },
  { id: 'evaluate',  name: 'Evaluate Outcomes',    blurb: 'Judge whether it worked and what to do next.' }
]
export const NCJMM_BY_ID = Object.fromEntries(NCJMM.map(s => [s.id, s]))

/**
 * Scoring rules, matching how NCSBN actually scores Next Gen items.
 *   'all'       classic all-or-nothing
 *   'plusminus' rationale scoring: +1 per correct pick, -1 per incorrect, floored at 0
 *   'row'       0/1 scoring: one point per correctly answered row or blank
 */
export const SCORING_LABEL = {
  all: 'All or nothing',
  plusminus: 'Partial credit (+/-)',
  row: 'Partial credit (per row)',
  dyad: 'Linked pairs (0/1 per pair)'
}


/**
 * Distractor traps.
 *
 * Every wrong option on a well-written NCLEX item is wrong for a *reason*, and
 * those reasons repeat. Tagging them lets the app tell a student something no
 * per-option rationale can on its own: not "you missed this question" but "you
 * reach for an intervention before assessing, and you have done it eleven
 * times." That is a reasoning habit, and it is fixable in a way that a list of
 * unrelated content gaps is not.
 */
export const TRAPS = {
  'assess-first':   { name: 'Acted before assessing',      hint: 'You chose an intervention when the situation still needed assessment. Ask what you would need to know before doing anything.' },
  'notify-first':   { name: 'Escalated before acting',     hint: 'You chose to notify or delegate when the nurse should act first. Escalation follows the intervention you can perform yourself.' },
  'expected':       { name: 'Treated a normal finding as abnormal', hint: 'The option you picked describes something expected for this client. Know what normal looks like in context.' },
  'chronic':        { name: 'Chose chronic over acute',    hint: 'You picked a stable long-standing problem over the new or changing one. New and changing wins.' },
  'comfort-over-abc': { name: 'Comfort over physiological priority', hint: 'You chose comfort, teaching, or psychosocial care while a physiological threat was unaddressed.' },
  'late-sign':      { name: 'Waited for a late sign',      hint: 'The finding you picked appears only after the client has already deteriorated. Act on the early one.' },
  'contraindicated':{ name: 'Chose a harmful action',      hint: 'The option you picked would actively worsen this client. Learn the hard contraindication behind it.' },
  'secondary':      { name: 'Right idea, wrong priority',  hint: 'Your choice was reasonable but something else had to happen first.' },
  'wrong-scope':    { name: 'Outside the nurse\'s scope',  hint: 'The action belongs to another discipline, or exceeds what may be delegated.' },
  'plausible-fact': { name: 'True statement, wrong answer', hint: 'The option is factually correct but does not answer the question that was asked.' }
}
export const TRAP_IDS = Object.keys(TRAPS)
