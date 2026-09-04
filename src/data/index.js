import moc from './bank-moc.js'
import safe from './bank-safe.js'
import hpm from './bank-hpm.js'
import psy from './bank-psy.js'
import bcc from './bank-bcc.js'
import pharm from './bank-pharm.js'
import risk from './bank-risk.js'
import phys from './bank-phys.js'
import cases from './bank-cases.js'
import ngn from './bank-ngn.js'
import found from './bank-found.js'
import ngn2 from './bank-ngn2.js'
import WHY from './bank-why.js'

/**
 * Every question in the bank.
 *
 * Shape:
 *   id          unique, "<CAT>-###"
 *   cat         category id from categories.js
 *   sub         sub-topic label, shown on the review screen
 *   type        'mc' | 'sata' | 'order' | 'fill'
 *   difficulty  1 foundational | 2 application | 3 analysis
 *   stem        the question text
 *   options     answer choices (omitted for 'fill')
 *   answer      array of correct option indices; for 'order', the correct sequence
 *   answerText  for 'fill', the accepted answers (case/space-insensitive)
 *   rationale   why the key is right and the distractors are wrong
 *   strategy    the transferable test-taking principle
 */
const RAW = [...moc, ...safe, ...hpm, ...psy, ...bcc, ...pharm, ...risk, ...phys, ...ngn, ...ngn2, ...found, ...cases]

// Merge in per-option rationales where they exist. Items without them still
// carry their full `rationale`, so the app degrades cleanly rather than
// requiring all 1,248 to be converted at once.
export const QUESTIONS = RAW.map(q => (WHY[q.id] ? { ...q, why: WHY[q.id] } : q))

export const QUESTION_BY_ID = Object.fromEntries(QUESTIONS.map(q => [q.id, q]))

export function countsByCategory() {
  const out = {}
  for (const q of QUESTIONS) out[q.cat] = (out[q.cat] || 0) + 1
  return out
}
