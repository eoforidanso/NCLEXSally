# NCLEX-RN Test Bank

A React study app with **1,248 NCLEX-RN practice questions**, every one carrying a full
rationale and the transferable test-taking principle behind it — including **112 Next
Generation NCLEX items** across the complete NGN item taxonomy, and **8 unfolding case
studies**, all with partial-credit scoring.

## Running it

```bash
npm install
npm run dev      # http://localhost:5180
npm run build    # production bundle in dist/
npm run verify   # structural check over all 1,000 questions
```

The app is entirely client-side. Progress lives in the browser's localStorage — no
account, no server, and it keeps working offline once loaded.

## What it does

**Two modes.** Study mode reveals the rationale immediately after each answer. Exam mode
locks answers in and defers all feedback to a full review at the end.

**Eight item types.** The classic four, plus the Next Generation formats introduced to
the exam in April 2023:

| Type | Behavior | Scoring |
|---|---|---|
| `mc` | Single best answer | all or nothing |
| `sata` | Select all that apply | all or nothing, as on the exam |
| `order` | Click options into the correct sequence | all or nothing |
| `fill` | Numeric or short-text answer (dosage calculations) | all or nothing |
| `matrix` | Grid — one choice per row across exclusive columns | **1 point per row** |
| `bowtie` | Condition in the centre, actions left, parameters to monitor right | **1 point per slot** |
| `cloze` | Drop-downs embedded in a sentence | **1 point per blank** |
| `highlight` | Click phrases in a chart excerpt | **+1 correct, −1 incorrect, floored at 0** |
| `trend` | Data across three or more time points, then a question about the change | **+1 / −1, floored at 0** |
| `dnd` | Extended drag and drop — categorize into zones, or sequence into order | **1 point per token placed correctly** |
| `dyad` | Linked selections scored as a unit — finding paired with the action it calls for | **1 point per pair, both halves or nothing** |

Partial credit is not cosmetic — it is how NCSBN actually scores these items, and it is
why a bow-tie answered 4 of 5 is reported as 4 of 5 rather than as one wrong question.

**Dyad scoring deserves particular note.** A linked pair earns its point only when *both*
halves are correct. Identifying compartment syndrome correctly and then choosing to
elevate the limb above heart level scores zero for that row — because in practice, the
right diagnosis with the wrong response is not partial success. No other item format
detects that failure mode.

**Sequencing appears twice on purpose.** The classic `order` type is click-to-sequence and
all-or-nothing, matching the pre-2023 exam. `dnd` in sequence mode is drag-and-drop with a
point per correctly placed step, matching the Next Gen format. Both are in the bank because
both appear on the exam.

**Drag-and-drop works by tapping too.** HTML5 drag events do not fire on touch screens at
all, so tap-a-token-then-tap-its-destination is not a fallback bolted on afterwards — for a
student working on a tablet it is the only path that exists.

**Unfolding case studies.** Each presents one client through a tabbed EHR chart — nurses
notes, a vital signs trend table, laboratory results, orders — and asks six questions,
one for each step of the clinical judgment model. A case is always drawn whole and in
order; filters can select case studies but can never split one apart.

**Per-option rationales and reasoning-error tracking.** Where an item carries them, every
option explains itself after the answer is revealed — not just the key. The option the
student actually chose is marked, and wrong options carry a *trap tag* naming the reasoning
error that makes them attractive:

| Trap | What it means |
|---|---|
| `assess-first` | Chose an intervention when the situation still needed assessment |
| `notify-first` | Escalated or delegated when the nurse should act first |
| `expected` | Treated a normal finding for that client as abnormal |
| `chronic` | Picked the stable long-standing problem over the new one |
| `comfort-over-abc` | Chose comfort, teaching, or psychosocial care over a physiological threat |
| `late-sign` | Waited for a finding that appears only after deterioration |
| `contraindicated` | Chose something that would actively worsen the client |
| `secondary` | Reasonable choice, but something had to happen first |
| `wrong-scope` | Action belongs to another discipline or exceeds delegation |
| `plausible-fact` | Factually true but does not answer the question asked |

Those tags accumulate across sessions, and the **How you go wrong** panel names the error
the student repeats. This is the part that goes past explaining each option: a bank can
tell you that you missed eleven unrelated questions, or it can tell you that you reach for
an intervention before assessing and you have done it eleven times. The first is a list of
content gaps; the second is a habit, and habits are fixable.

**Coverage is partial and evenly spread.** 592 of 1,129 option-based items carry
per-option rationales, with 1,776 tagged distractors. Every category sits at or above 50
percent, so the experience is consistent whichever content area a student is working
through:

| Category | Covered | |
|---|---:|---:|
| Basic Care & Comfort | 76/104 | 73% |
| Health Promotion | 52/101 | 51% |
| Reduction of Risk | 70/139 | 50% |
| Safety & Infection Control | 72/143 | 50% |
| Physiological Adaptation | 90/179 | 50% |
| Management of Care | 97/193 | 50% |
| Psychosocial Integrity | 52/104 | 50% |
| Pharmacology | 83/166 | 50% |

Written high-yield-first — prioritization, OB and paediatric emergencies, pharmacology
interactions, psychiatric safety — then rebalanced so no category lagged. Items without
per-option rationales still carry their full `rationale` and the app degrades cleanly;
nothing looks broken at partial coverage, which is what makes incremental expansion
viable.

To regenerate this table rather than counting by hand:

```bash
node -e "import('./src/data/index.js').then(m=>{const q=m.QUESTIONS.filter(x=>Array.isArray(x.options));const c={};for(const x of q){c[x.cat]=c[x.cat]||[0,0];c[x.cat][1]++;if(x.why)c[x.cat][0]++}console.table(c)})"
```

**Clinical judgment tracking.** Every Next Gen item is tagged to one of the six steps of
the NCSBN Clinical Judgment Measurement Model — recognize cues, analyze cues, prioritize
hypotheses, generate solutions, take action, evaluate outcomes. The progress dashboard
reports accuracy per step, which surfaces *what kind of thinking* is failing rather than
only which content area. Two students can know identical facts and fail differently: one
cannot pick the relevant cue out of a chart, another picks it up but draws the wrong
conclusion.

**Filters.** Any combination of the eight Client Needs categories, cognitive level
(foundational / application / analysis), item type including whole case studies, and
question pool — all questions, unseen only, previously missed, or flagged.

**Progress tracking.** Per-question history, accuracy by category and by cognitive level,
session history, and a "focus next on…" prompt naming the weakest area once there are
enough attempts to be meaningful.

Other conveniences: option order is shuffled on every attempt, questions can be flagged
mid-quiz for later, keyboard shortcuts (`1`–`6` to select, `Enter` to continue, `F` to
flag), an optional timer, and light/dark/system themes.

## How the bank is built

Question counts follow the NCSBN test plan percentages, so a random draw approximates the
real exam's mix:

| Category | Questions | Test plan |
|---|---:|---|
| Management of Care | 180 | 15–21% |
| Pharmacological and Parenteral Therapies | 160 | 13–19% |
| Physiological Adaptation | 140 | 11–17% |
| Safety and Infection Control | 130 | 10–16% |
| Reduction of Risk Potential | 120 | 9–15% |
| Basic Care and Comfort | 90 | 6–12% |
| Health Promotion and Maintenance | 90 | 6–12% |
| Psychosocial Integrity | 90 | 6–12% |

Counts above are the original blueprint-weighted core. The bank also carries 130
foundational-tier items and 112 Next Gen items distributed across those same categories,
bringing the total to 1,248.

### Cognitive level

| Level | Questions | What it tests |
|---|---:|---|
| Foundational | 176 | Reference ranges, definitions, classic associations — what every scenario question silently assumes |
| Application | 810 | Apply knowledge to one client to decide an action |
| Analysis | 262 | Compare clients, prioritize, detect deterioration, interpret patterns |

Levels are assigned by the cognitive demand a stem actually places on the reader, not by
topic. `scripts/classify-difficulty.mjs` re-derives them from stem structure and can be
re-run after edits (`node scripts/classify-difficulty.mjs --samples` to preview,
`--apply` to write).

## Adding or editing questions

Each category lives in its own file under `src/data/` (`bank-moc.js`, `bank-pharm.js`, …).
A question is a plain object:

```js
{
  id: 'MOC-001',          // unique; convention is <CAT>-###
  cat: 'moc',             // category id from categories.js
  sub: 'Delegation',      // sub-topic label shown on the review screen
  type: 'mc',             // 'mc' | 'sata' | 'order' | 'fill'
  difficulty: 2,          // 1 foundational | 2 application | 3 analysis
  stem: '...',
  options: ['...'],       // omit for 'fill'
  answer: [1],            // correct indices; for 'order', the correct sequence
  answerText: ['7.5'],    // 'fill' only — accepted answers, case/space-insensitive
  unit: 'mL',             // 'fill' only — optional unit hint
  rationale: '...',       // why the key is right AND why the distractors are wrong
  strategy: '...'         // the transferable principle
}
```

Next Gen items add `ncjmm` (one of `recognize`, `analyze`, `prioritize`, `solutions`,
`action`, `evaluate`) and carry type-specific fields:

| Type | Fields |
|---|---|
| `matrix` | `columns`, `rows[{text, answer}]` |
| `bowtie` | `condition`, `actions`, `parameters` — each `{prompt, options, answer}`, with `pick` on the latter two |
| `cloze` | `sentence` with `{0}` `{1}` placeholders, `blanks[{options, answer}]` |
| `highlight` | `passage` — a mix of plain strings and `{text, answer}` selectable segments |
| `trend` | `timepoints`, `data[{label, values}]`, plus `options`/`answer` |
| `dnd` | `mode: 'categorize'` with `zones` and `tokens[{text, zone}]`, or `mode: 'sequence'` with `tokens[{text}]` and `answer` |
| `dyad` | `rows[{condition, findingOptions, findingAnswer, actionOptions, actionAnswer}]` |

Case study items add `caseId`, `scenario`, and a `chart` object whose keys become EHR tabs
(an array of arrays renders as a table, a string as a note).

### Adding per-option rationales

These live in `src/data/bank-why.js`, keyed by question id and merged at load, so items
never need editing:

```js
export default {
  'MOC-003': [
    { text: 'Why this option attracts and why it is wrong.', trap: 'secondary' },
    'Plain string for the correct option — the key never carries a trap.',
    // ... one entry per option, in the same order as `options`
  ]
}
```

Two things the validator enforces, both of which fail silently if you get them wrong:
the array length must match the option count, and a trap tag may never sit on a correct
option. Option shuffling remaps these alongside the options, so an explanation always
travels with the choice it describes.

Run `npm run verify` after editing. It checks for duplicate ids, out-of-range answer
indices, duplicate option text, `mc` items without exactly one answer, `sata` items with
fewer than two, `order` items that don't sequence every option, and missing or stub
rationales. For Next Gen items it also validates matrix row answers against the column
count, bow-tie answer counts against `pick`, cloze placeholders against their blanks
(in both directions), that highlight items have enough selectable segments to be
discriminating, that trend items have at least three time points with a value in every row
for each one, that drag-and-drop zones are never left empty and sequence answers place
every token exactly once, that dyad option sets contain no duplicates, and that every Next
Gen item carries a clinical judgment tag.

## A note on the content

The questions were written to mirror NCLEX style and the current test plan, and each
rationale explains the underlying reasoning rather than just naming the key. They are a
study aid, not a predictive assessment, and they are not affiliated with or endorsed by
NCSBN. Verify anything clinically consequential against current institutional protocol
and current practice guidelines before relying on it in practice.
