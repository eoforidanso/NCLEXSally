/**
 * Standalone Next Generation NCLEX items.
 *
 * These are single items rather than unfolding cases, each tagged to one step of
 * the Clinical Judgment Measurement Model and carrying partial credit.
 */
export default [
  { id: 'NGN-001', cat: 'pharm', sub: 'Anticoagulants', type: 'matrix', difficulty: 3, ncjmm: 'evaluate',
    stem: 'A client is receiving warfarin. For each finding, click to specify whether it indicates a therapeutic response, an adverse effect, or an expected side effect requiring no change.',
    columns: ['Therapeutic response', 'Adverse effect', 'No change needed'],
    rows: [
      { text: 'INR 2.4 with a target range of 2 to 3', answer: 0 },
      { text: 'Black tarry stools', answer: 1 },
      { text: 'Minor bruising at a venipuncture site', answer: 2 },
      { text: 'Sudden severe headache with confusion', answer: 1 },
      { text: 'Resolution of previously present calf swelling and pain', answer: 0 },
      { text: 'INR 6.8', answer: 1 }
    ],
    rationale: 'An INR inside the target range and resolution of the thrombus signs are what therapy is meant to achieve. Melena signals gastrointestinal bleeding, a sudden headache with confusion raises concern for intracranial hemorrhage, and an INR of 6.8 carries a high risk of spontaneous major bleeding. Minor bruising at puncture sites is expected on any anticoagulant and does not by itself require a change.',
    strategy: 'Separate the bleeding that is expected from the bleeding that is dangerous. Bruising is expected; anything black, bloody, or neurological is not.' },

  { id: 'NGN-002', cat: 'phys', sub: 'Fluid and Electrolytes', type: 'matrix', difficulty: 3, ncjmm: 'analyze',
    stem: 'For each assessment finding, click to specify whether it is associated with hypokalemia, hyperkalemia, or both.',
    columns: ['Hypokalemia', 'Hyperkalemia', 'Both'],
    rows: [
      { text: 'Peaked T waves on the electrocardiogram', answer: 1 },
      { text: 'Flattened T waves with prominent U waves', answer: 0 },
      { text: 'Muscle weakness', answer: 2 },
      { text: 'Risk of lethal cardiac arrhythmia', answer: 2 },
      { text: 'Hypoactive bowel sounds with constipation', answer: 0 },
      { text: 'Caused by prolonged nasogastric suction', answer: 0 },
      { text: 'Caused by acute kidney injury', answer: 1 }
    ],
    rationale: 'Potassium disturbances in either direction impair muscle function and threaten the heart, which is why weakness and arrhythmia risk belong to both. The electrocardiographic patterns are what distinguish them: potassium excess peaks the T wave while depletion flattens it and unmasks a U wave. Gastric losses deplete potassium, whereas a kidney that cannot excrete it causes accumulation.',
    strategy: 'When findings appear in both columns, the discriminating cue is usually the ECG or the cause, not the symptom.' },

  { id: 'NGN-003', cat: 'safe', sub: 'Transmission Precautions', type: 'matrix', difficulty: 2, ncjmm: 'solutions',
    stem: 'For each client, click to specify the type of transmission-based precautions required.',
    columns: ['Contact', 'Droplet', 'Airborne'],
    rows: [
      { text: 'Suspected pulmonary tuberculosis', answer: 2 },
      { text: 'Clostridioides difficile colitis', answer: 0 },
      { text: 'Influenza', answer: 1 },
      { text: 'Measles', answer: 2 },
      { text: 'Wound colonized with methicillin-resistant Staphylococcus aureus', answer: 0 },
      { text: 'Suspected meningococcal meningitis', answer: 1 },
      { text: 'Varicella (chickenpox)', answer: 2 }
    ],
    rationale: 'Airborne precautions with a fit-tested N95 and negative-pressure room apply to tuberculosis, measles, varicella, and disseminated zoster. Droplet precautions with a surgical mask cover influenza, meningococcus, pertussis, and mumps. Contact precautions with gown and gloves cover resistant organisms, C. difficile, scabies, and RSV, with soap and water hand hygiene specifically for C. difficile because alcohol does not kill spores.',
    strategy: 'Airborne mnemonic My Chicken Has TB: measles, chickenpox, herpes zoster disseminated, tuberculosis.' },

  { id: 'NGN-004', cat: 'moc', sub: 'Delegation', type: 'matrix', difficulty: 3, ncjmm: 'solutions',
    stem: 'A charge nurse is planning assignments. For each task, click to specify the least-credentialed team member who may safely perform it.',
    columns: ['UAP', 'LPN', 'RN only'],
    rows: [
      { text: 'Measure vital signs on a stable postoperative client', answer: 0 },
      { text: 'Administer a scheduled oral antihypertensive to a stable client', answer: 1 },
      { text: 'Perform the admission assessment on a new client', answer: 2 },
      { text: 'Insert an indwelling urinary catheter', answer: 1 },
      { text: 'Administer the first dose of an IV antibiotic', answer: 2 },
      { text: 'Assist a client with a bed bath', answer: 0 },
      { text: 'Develop the plan of care', answer: 2 },
      { text: 'Reinforce dietary teaching the RN has already provided', answer: 1 }
    ],
    rationale: 'Unlicensed personnel perform standardized tasks on stable clients such as vital signs and hygiene. LPNs administer most routine medications, perform sterile procedures such as catheter insertion, and reinforce teaching. Assessment, care planning, evaluation, initial teaching, and first doses of medications remain RN functions because each requires nursing judgment about an unpredictable response.',
    strategy: 'The nursing process never delegates. Assessment, diagnosis, planning, and evaluation stay with the RN no matter how busy the unit is.' },

  { id: 'NGN-005', cat: 'phys', sub: 'Shock', type: 'matrix', difficulty: 3, ncjmm: 'analyze',
    stem: 'For each finding, click to specify which type of shock it most suggests.',
    columns: ['Hypovolemic', 'Cardiogenic', 'Distributive'],
    rows: [
      { text: 'Warm flushed skin with bounding pulses early in the course', answer: 2 },
      { text: 'Jugular venous distention with pulmonary crackles', answer: 1 },
      { text: 'Flat neck veins with cool clammy skin after trauma', answer: 0 },
      { text: 'Bradycardia with warm dry skin after a cervical spinal injury', answer: 2 },
      { text: 'Fluid resuscitation is the primary treatment', answer: 0 },
      { text: 'Fluid boluses are likely to worsen the condition', answer: 1 }
    ],
    rationale: 'Distributive shock, which includes septic, neurogenic, and anaphylactic causes, dilates the vasculature so the skin stays warm and the neck veins are flat or normal, and neurogenic shock uniquely adds bradycardia from unopposed vagal tone. Cardiogenic shock backs volume up behind a failing pump, producing distended neck veins and pulmonary congestion, which is why fluid worsens it. Hypovolemic shock empties the vascular space, giving flat neck veins with intense peripheral vasoconstriction, and volume is the treatment.',
    strategy: 'Every shock gets fluid except cardiogenic. Neurogenic is the only one that runs slow and warm.' },

  { id: 'NGN-006', cat: 'risk', sub: 'Laboratory Values', type: 'highlight', difficulty: 3, ncjmm: 'recognize',
    stem: 'Click to highlight the laboratory values that fall outside the normal adult reference range.',
    passage: [
      'Basic metabolic panel and complete blood count: ',
      { text: 'Sodium 128 mEq/L', answer: true }, ', ',
      { text: 'Potassium 4.1 mEq/L', answer: false }, ', ',
      { text: 'Chloride 99 mEq/L', answer: false }, ', ',
      { text: 'Creatinine 2.9 mg/dL', answer: true }, ', ',
      { text: 'Glucose 96 mg/dL', answer: false }, ', ',
      { text: 'Hemoglobin 8.4 g/dL', answer: true }, ', ',
      { text: 'White blood cells 7,200 /µL', answer: false }, ', ',
      { text: 'Platelets 88,000 /µL', answer: true }, ', ',
      { text: 'Calcium 9.4 mg/dL', answer: false }, '.'
    ],
    rationale: 'Sodium below 135, creatinine above 1.2, hemoglobin below about 12, and platelets below 150,000 are all abnormal. Potassium of 4.1, chloride of 99, glucose of 96, a white count of 7,200, and calcium of 9.4 all sit comfortably within their reference ranges.',
    strategy: 'Reference ranges are worth memorizing cold. A large share of exam questions reduce to recognizing which value does not belong.' },

  { id: 'NGN-007', cat: 'phys', sub: 'Endocrine', type: 'cloze', difficulty: 3, ncjmm: 'analyze',
    stem: 'A client is admitted with a glucose of 742 mg/dL, serum osmolality of 348 mOsm/kg, negative serum ketones, and a pH of 7.36. Complete the sentence.',
    sentence: 'This client is most likely experiencing {0}, which differs from diabetic ketoacidosis in that ketones are {1} and it typically occurs in clients with {2} diabetes.',
    blanks: [
      { options: ['diabetic ketoacidosis', 'hyperosmolar hyperglycemic state', 'hypoglycemia', 'the Somogyi effect'], answer: 1 },
      { options: ['markedly elevated', 'absent or minimal', 'unmeasurable'], answer: 1 },
      { options: ['type 1', 'type 2', 'gestational'], answer: 1 }
    ],
    rationale: 'Extreme hyperglycemia with marked hyperosmolality but a normal pH and minimal ketones defines hyperosmolar hyperglycemic state, which occurs in type 2 diabetes because residual insulin is sufficient to suppress lipolysis and ketogenesis even though it cannot control the glucose. It develops over days rather than hours and carries higher mortality than ketoacidosis because of the profound dehydration and the age of those affected.',
    strategy: 'Enough insulin to stop ketones but not enough to stop hyperglycemia equals HHS. That is the type 2 picture.' },

  { id: 'NGN-008', cat: 'moc', sub: 'Prioritization', type: 'bowtie', difficulty: 3, ncjmm: 'prioritize',
    stem: 'A client 3 days after total hip arthroplasty suddenly develops dyspnea, pleuritic chest pain, and an SpO2 of 87 percent. Complete the diagram.',
    condition: {
      prompt: 'The client is most likely experiencing:',
      options: ['Pulmonary embolism', 'Myocardial infarction', 'Pneumonia', 'Anxiety attack'],
      answer: 0
    },
    actions: {
      prompt: 'Actions to take:', pick: 2,
      options: [
        'Apply supplemental oxygen and raise the head of the bed',
        'Massage the calf to improve circulation',
        'Notify the provider immediately and anticipate anticoagulation and imaging',
        'Ambulate the client to improve oxygenation',
        'Administer a bronchodilator'
      ],
      answer: [0, 2]
    },
    parameters: {
      prompt: 'Parameters to monitor:', pick: 2,
      options: [
        'Oxygen saturation and respiratory effort',
        'Blood pressure and heart rate',
        'Bowel sounds',
        'Serum glucose',
        'Deep tendon reflexes'
      ],
      answer: [0, 1]
    },
    rationale: 'Sudden dyspnea with pleuritic pain and hypoxemia in an immobilized postoperative client is pulmonary embolism until proven otherwise. Oxygen with upright positioning supports gas exchange while the provider is notified for imaging and anticoagulation. Calf massage risks dislodging further thrombus and ambulation increases oxygen demand the client cannot meet. Saturation with respiratory effort tracks the gas exchange problem, and pressure with heart rate detects the right ventricular failure and obstructive shock that a large embolus produces.',
    strategy: 'Sudden dyspnea plus pleuritic pain in an immobile or postoperative client is a PE until imaging says otherwise.' },

  { id: 'NGN-009', cat: 'psy', sub: 'Suicide Risk', type: 'highlight', difficulty: 3, ncjmm: 'recognize',
    stem: 'Click to highlight the statements in the client interview that indicate elevated suicide risk.',
    passage: [
      'Client states: ',
      { text: '"I tried to overdose about a year ago."', answer: true }, ' ',
      { text: '"My sister calls me every single day and I would not want to do that to her."', answer: false }, ' ',
      { text: '"I have been saving up my pills in a drawer."', answer: true }, ' ',
      { text: '"I lost my job and my partner left, all in the same month."', answer: true }, ' ',
      { text: '"I have been going to group therapy every week."', answer: false }, ' ',
      { text: '"There is a gun at my brother\'s house where I have been staying."', answer: true }, ' ',
      { text: '"Honestly, everyone would be better off."', answer: true }, ' ',
      { text: '"I still enjoy taking my dog to the park."', answer: false }
    ],
    rationale: 'A previous attempt is the single strongest predictor of a completed suicide. Stockpiling medication is a specific preparatory behavior, compounded losses are a powerful precipitant, access to a firearm is the most lethal means available, and perceived burdensomeness is a core driver of suicidal intent. Close family contact, treatment engagement, and retained pleasure in an activity are protective factors rather than risks.',
    strategy: 'Weigh risk and protective factors together, but never let protective factors talk you out of asking directly about a plan and means.' },

  { id: 'NGN-010', cat: 'bcc', sub: 'Nutrition', type: 'matrix', difficulty: 2, ncjmm: 'solutions',
    stem: 'For each food, click to specify whether it should be encouraged or limited for a client on a low-potassium renal diet.',
    columns: ['Encourage', 'Limit'],
    rows: [
      { text: 'Baked potato with the skin', answer: 1 },
      { text: 'White rice', answer: 0 },
      { text: 'Banana', answer: 1 },
      { text: 'Green beans', answer: 0 },
      { text: 'Orange juice', answer: 1 },
      { text: 'Salt substitute', answer: 1 },
      { text: 'White bread', answer: 0 },
      { text: 'Tomato sauce', answer: 1 }
    ],
    rationale: 'Potatoes, bananas, citrus juice, and tomato products are among the highest-potassium foods, and salt substitutes are potassium chloride and therefore particularly dangerous in kidney disease. Refined grains and green beans are low in potassium and appropriate.',
    strategy: 'Salt substitute is potassium chloride. It is the wrong answer for anyone with kidney disease or on a potassium-sparing drug.' },

  { id: 'NGN-011', cat: 'hpm', sub: 'Newborn Care', type: 'matrix', difficulty: 2, ncjmm: 'recognize',
    stem: 'For each newborn finding, click to specify whether it is expected or requires follow-up.',
    columns: ['Expected', 'Requires follow-up'],
    rows: [
      { text: 'Acrocyanosis of the hands and feet at 2 hours of age', answer: 0 },
      { text: 'Jaundice appearing at 10 hours of age', answer: 1 },
      { text: 'Respiratory rate 48 with brief pauses under 15 seconds', answer: 0 },
      { text: 'Axillary temperature 36.1 degrees Celsius', answer: 1 },
      { text: 'Passage of meconium within 24 hours', answer: 0 },
      { text: 'Grunting with nasal flaring and intercostal retractions', answer: 1 },
      { text: 'Molding of the head after vaginal birth', answer: 0 },
      { text: 'Blood glucose 32 mg/dL', answer: 1 }
    ],
    rationale: 'Acrocyanosis, periodic breathing with pauses under 20 seconds, meconium within 24 hours, and molding are all normal transitional findings. Jaundice within the first 24 hours suggests hemolysis, a temperature below 36.5 is hypothermia in a newborn who cannot shiver, grunting with flaring and retractions is respiratory distress, and a glucose of 32 is hypoglycemia requiring feeding and rechecking.',
    strategy: 'Jaundice in the first 24 hours is always pathologic. After 24 hours it is usually physiologic.' },

  { id: 'NGN-012', cat: 'phys', sub: 'Cardiovascular', type: 'cloze', difficulty: 3, ncjmm: 'prioritize',
    stem: 'A client reports crushing substernal chest pain radiating to the jaw, with diaphoresis and nausea. Complete the sentence.',
    sentence: 'The nurse should first {0}. The diagnostic study that must be obtained within 10 minutes is {1}, and the laboratory value most specific for myocardial injury is {2}.',
    blanks: [
      { options: ['obtain a detailed dietary history', 'assess the client and obtain vital signs while activating the chest pain protocol', 'ambulate the client to assess exertional tolerance', 'administer an antacid and reassess in an hour'], answer: 1 },
      { options: ['chest radiograph', 'a 12-lead electrocardiogram', 'echocardiogram', 'stress test'], answer: 1 },
      { options: ['creatine kinase', 'troponin I', 'myoglobin', 'C-reactive protein'], answer: 1 }
    ],
    rationale: 'Assessment with immediate protocol activation comes first because time to reperfusion determines how much myocardium survives. A 12-lead electrocardiogram within 10 minutes of arrival identifies ST elevation requiring emergent catheterization. Troponin is highly specific to cardiac muscle, rising within a few hours and remaining elevated for days, whereas myoglobin rises earlier but is not cardiac-specific.',
    strategy: 'Chest pain protocol: ECG in 10 minutes, aspirin, nitroglycerin, IV access, troponin. Time is muscle.' },

  { id: 'NGN-013', cat: 'safe', sub: 'Fall Prevention', type: 'highlight', difficulty: 2, ncjmm: 'recognize',
    stem: 'Click to highlight the factors in this client\'s profile that increase fall risk.',
    passage: [
      'An ',
      { text: '83-year-old client', answer: true },
      ' admitted with pneumonia. Medications include ',
      { text: 'lorazepam at bedtime', answer: true },
      ', ',
      { text: 'furosemide daily', answer: true },
      ', ',
      { text: 'acetaminophen as needed', answer: false },
      ', and ',
      { text: 'oxybutynin for urinary urgency', answer: true },
      '. The client ',
      { text: 'fell twice at home in the past six months', answer: true },
      ', ',
      { text: 'wears bifocal glasses', answer: true },
      ', and ',
      { text: 'uses a walker for distances', answer: true },
      '. The client ',
      { text: 'lives with an attentive spouse', answer: false },
      ' and ',
      { text: 'has an intact skin assessment', answer: false },
      '.'
    ],
    rationale: 'Advanced age, a sedating benzodiazepine, a diuretic causing urgency and orthostasis, an anticholinergic causing confusion and blurred vision, prior falls, bifocals that distort depth perception on stairs, and impaired mobility requiring a device all raise risk. A prior fall is the strongest single predictor. Acetaminophen, a supportive spouse, and intact skin do not contribute to fall risk.',
    strategy: 'Fall risk stacks. Count the factors rather than looking for one cause, and remember prior falls predict future falls better than anything else.' },

  { id: 'NGN-014', cat: 'pharm', sub: 'Insulin', type: 'matrix', difficulty: 3, ncjmm: 'evaluate',
    stem: 'For each insulin, click to specify its onset category.',
    columns: ['Rapid-acting', 'Short-acting', 'Intermediate', 'Long-acting'],
    rows: [
      { text: 'Insulin lispro', answer: 0 },
      { text: 'Regular insulin', answer: 1 },
      { text: 'NPH insulin', answer: 2 },
      { text: 'Insulin glargine', answer: 3 },
      { text: 'Insulin aspart', answer: 0 },
      { text: 'Insulin detemir', answer: 3 }
    ],
    rationale: 'Rapid-acting analogs such as lispro and aspart begin working within about 15 minutes and peak near an hour, so they are given with food already available. Regular insulin has a 30 to 60 minute onset and is the only insulin given intravenously. NPH is the intermediate cloudy suspension peaking at 4 to 12 hours. Glargine and detemir provide basal coverage with minimal peak and are never mixed with other insulins.',
    strategy: 'Only regular insulin goes IV. Only regular and NPH may be mixed in one syringe.' },

  { id: 'NGN-015', cat: 'phys', sub: 'Respiratory', type: 'bowtie', difficulty: 3, ncjmm: 'action',
    stem: 'A client with blunt chest trauma has absent breath sounds on the right, tracheal deviation to the left, distended neck veins, and a blood pressure of 78/44. Complete the diagram.',
    condition: {
      prompt: 'The client is experiencing:',
      options: ['Simple pneumothorax', 'Tension pneumothorax', 'Hemothorax', 'Cardiac tamponade'],
      answer: 1
    },
    actions: {
      prompt: 'Actions to take:', pick: 2,
      options: [
        'Prepare for immediate needle decompression',
        'Obtain a chest radiograph before any intervention',
        'Call for immediate assistance and apply high-flow oxygen',
        'Position the client on the affected side and observe',
        'Administer a nebulized bronchodilator'
      ],
      answer: [0, 2]
    },
    parameters: {
      prompt: 'Parameters to monitor:', pick: 2,
      options: [
        'Breath sounds and tracheal position',
        'Blood pressure and heart rate',
        'Urine specific gravity',
        'Serum amylase',
        'Deep tendon reflexes'
      ],
      answer: [0, 1]
    },
    rationale: 'Air trapped under pressure in the pleural space shifts the mediastinum, kinks the great vessels, and obstructs venous return, which is why the neck veins distend and the pressure collapses. This is a clinical diagnosis treated by immediate needle decompression followed by chest tube insertion; waiting for a radiograph is fatal. Returning breath sounds with a midline trachea and a recovering blood pressure confirm the decompression worked.',
    strategy: 'Tension pneumothorax is diagnosed at the bedside and treated before imaging. The trachea deviates away from the affected side.' },

  { id: 'NGN-016', cat: 'moc', sub: 'Prioritization', type: 'matrix', difficulty: 3, ncjmm: 'prioritize',
    stem: 'A nurse receives report on six clients. For each, click to specify the assessment priority.',
    columns: ['See first', 'See second', 'Can wait'],
    rows: [
      { text: 'A client with a chest tube and continuous vigorous bubbling in the water seal chamber', answer: 0 },
      { text: 'A client with type 1 diabetes who is shaky and diaphoretic', answer: 0 },
      { text: 'A client requesting pain medication for chronic back pain', answer: 2 },
      { text: 'A client with a potassium of 6.4 mEq/L awaiting dialysis', answer: 0 },
      { text: 'A client needing discharge teaching before leaving at noon', answer: 2 },
      { text: 'A client 1 day postoperative with a temperature of 37.8 degrees Celsius', answer: 1 }
    ],
    rationale: 'A persistent air leak, symptomatic hypoglycemia, and severe hyperkalemia can each kill within minutes to an hour and are seen first. A mildly elevated temperature on the first postoperative day is common but warrants assessment before non-urgent work. Chronic pain and scheduled teaching are important but neither is time-critical.',
    strategy: 'Sort by time to harm. Airway and breathing threats, glucose extremes, and potassium extremes cluster at the top.' },

  { id: 'NGN-017', cat: 'psy', sub: 'Therapeutic Communication', type: 'matrix', difficulty: 2, ncjmm: 'solutions',
    stem: 'For each nurse response, click to specify whether it is therapeutic or non-therapeutic.',
    columns: ['Therapeutic', 'Non-therapeutic'],
    rows: [
      { text: '"You seem worried. Tell me more about what is on your mind."', answer: 0 },
      { text: '"Why did you stop taking your medication?"', answer: 1 },
      { text: '"Everything happens for a reason."', answer: 1 },
      { text: '"Let me make sure I understand — you feel your family is not listening."', answer: 0 },
      { text: '"I would not worry about that if I were you."', answer: 1 },
      { text: '"That sounds frightening. What was that like for you?"', answer: 0 },
      { text: '"You should not feel that way."', answer: 1 }
    ],
    rationale: 'Therapeutic responses reflect the feeling, invite elaboration, and check understanding, keeping the focus on the client. Why questions demand justification and provoke defensiveness, clichés dismiss the experience, minimizing invalidates the concern, and telling a client how to feel denies their reality.',
    strategy: 'Avoid why, clichés, false reassurance, advice, and any statement that tells the client what they should feel.' },

  { id: 'NGN-018', cat: 'risk', sub: 'Postoperative', type: 'cloze', difficulty: 3, ncjmm: 'analyze',
    stem: 'A client 6 hours after abdominal surgery has a urine output of 18 mL over 2 hours, a heart rate of 118, and a blood pressure of 92/58. Complete the sentence.',
    sentence: 'These findings most likely indicate {0}. The urine output is significant because adequate renal perfusion requires at least {1}, and the priority intervention is {2}.',
    blanks: [
      { options: ['acute kidney injury from a nephrotoxic drug', 'hypovolemia from bleeding or inadequate replacement', 'urinary retention', 'a normal postoperative pattern'], answer: 1 },
      { options: ['10 mL per hour', '30 mL per hour', '100 mL per hour', '200 mL per hour'], answer: 1 },
      { options: ['administering a diuretic', 'assessing the client and notifying the provider for likely fluid resuscitation', 'restricting fluids', 'increasing the analgesic dose'], answer: 1 }
    ],
    rationale: 'Oliguria with compensatory tachycardia and a falling blood pressure after surgery points to inadequate circulating volume, from bleeding or from under-replacement, rather than intrinsic kidney disease. Output below 30 mL per hour signals renal hypoperfusion. A diuretic in this setting worsens the deficit and can precipitate true kidney injury, so assessment and volume replacement are the correct response.',
    strategy: 'Low output with low pressure means give fluid. Low output with high pressure and congestion means diurese. The blood pressure tells you which.' },

  { id: 'NGN-019', cat: 'phys', sub: 'Neurological', type: 'highlight', difficulty: 3, ncjmm: 'recognize',
    stem: 'Click to highlight the findings that indicate rising intracranial pressure.',
    passage: [
      'Assessment of a client 12 hours after a traumatic brain injury: ',
      { text: 'increasingly difficult to rouse, now responding only to painful stimuli', answer: true },
      '; ',
      { text: 'right pupil 6 mm and sluggish, left pupil 3 mm and brisk', answer: true },
      '; ',
      { text: 'blood pressure risen from 128/76 to 176/78', answer: true },
      '; ',
      { text: 'heart rate fallen from 82 to 52', answer: true },
      '; ',
      { text: 'respirations irregular with periods of apnea', answer: true },
      '; ',
      { text: 'temperature 37.1 degrees Celsius', answer: false },
      '; ',
      { text: 'SpO2 97 percent on 2 L nasal cannula', answer: false },
      '; ',
      { text: 'reports a headache rated 4 out of 10', answer: false },
      '.'
    ],
    rationale: 'A declining level of consciousness is the earliest and most sensitive sign. A unilaterally dilated sluggish pupil indicates third cranial nerve compression from herniation. Rising systolic pressure with a widening pulse pressure, bradycardia, and irregular respirations form Cushing triad, a late and ominous sign. A normal temperature, adequate oxygenation, and a moderate headache are not by themselves indicators of rising pressure.',
    strategy: 'Level of consciousness changes first. Cushing triad and pupil changes are late, so waiting for them costs the client their brain.' },

  { id: 'NGN-020', cat: 'pharm', sub: 'Medication Safety', type: 'matrix', difficulty: 2, ncjmm: 'evaluate',
    stem: 'For each medication order, click to specify whether it is written safely or must be clarified.',
    columns: ['Safe as written', 'Must be clarified'],
    rows: [
      { text: 'Digoxin 0.25 mg PO daily', answer: 0 },
      { text: 'Insulin glargine 10 u subcutaneous nightly', answer: 1 },
      { text: 'Morphine 2 mg IV q4h PRN pain', answer: 0 },
      { text: 'Levothyroxine .05 mg PO daily', answer: 1 },
      { text: 'Furosemide 40 mg PO QD', answer: 1 },
      { text: 'Heparin 5,000 units subcutaneous q12h', answer: 0 },
      { text: 'Warfarin 5.0 mg PO daily', answer: 1 }
    ],
    rationale: 'The abbreviation u for units is misread as a zero and causes tenfold insulin overdoses. A missing leading zero before a decimal point causes the same error. QD is misread as QID. A trailing zero after a decimal point turns 5.0 into 50 if the point is missed. Orders written with units spelled out, a leading zero, no trailing zero, and no prohibited abbreviations are safe.',
    strategy: 'Always a leading zero, never a trailing zero, never U, IU, QD, or QOD.' },

  { id: 'NGN-021', cat: 'hpm', sub: 'Intrapartum', type: 'matrix', difficulty: 3, ncjmm: 'analyze',
    stem: 'For each fetal heart rate pattern, click to specify its most likely cause.',
    columns: ['Head compression', 'Cord compression', 'Uteroplacental insufficiency'],
    rows: [
      { text: 'Early decelerations mirroring the contraction', answer: 0 },
      { text: 'Variable decelerations varying in shape and timing', answer: 1 },
      { text: 'Late decelerations beginning after the contraction peak', answer: 2 },
      { text: 'Decelerations that resolve with maternal repositioning', answer: 1 },
      { text: 'Pattern requiring oxytocin to be discontinued, oxygen given, and the client repositioned', answer: 2 }
    ],
    rationale: 'Early decelerations mirror the contraction and reflect benign vagal response to head compression. Variable decelerations are abrupt and inconsistent in shape, caused by cord compression, and often resolve with repositioning or amnioinfusion. Late decelerations begin after the peak and return to baseline after the contraction ends, indicating uteroplacental insufficiency and requiring intrauterine resuscitation.',
    strategy: 'VEAL CHOP: Variable-Cord, Early-Head, Accelerations-Okay, Late-Placental.' },

  { id: 'NGN-022', cat: 'bcc', sub: 'Skin Integrity', type: 'matrix', difficulty: 2, ncjmm: 'analyze',
    stem: 'For each wound description, click to specify the correct pressure injury stage.',
    columns: ['Stage 1', 'Stage 2', 'Stage 3', 'Unstageable'],
    rows: [
      { text: 'Intact skin with non-blanchable erythema', answer: 0 },
      { text: 'Partial-thickness loss with a shallow open ulcer and a pink wound bed', answer: 1 },
      { text: 'Full-thickness loss with visible subcutaneous fat but no exposed bone or tendon', answer: 2 },
      { text: 'Wound base entirely covered by thick yellow slough', answer: 3 },
      { text: 'Dry black leathery eschar covering the wound base', answer: 3 },
      { text: 'Intact serum-filled blister over the sacrum', answer: 1 }
    ],
    rationale: 'Stage 1 is intact skin that does not blanch. Stage 2 is partial-thickness loss, which includes an intact or ruptured serum-filled blister. Stage 3 extends into subcutaneous fat without exposing bone, tendon, or muscle. When slough or eschar obscures the base, depth cannot be determined and the injury is unstageable until the covering is removed, though stable dry eschar on an ischemic heel is generally left intact.',
    strategy: 'If you cannot see the base, you cannot stage it. That is what unstageable means.' },

  { id: 'NGN-023', cat: 'phys', sub: 'Renal', type: 'cloze', difficulty: 3, ncjmm: 'evaluate',
    stem: 'A client with chronic kidney disease has a phosphorus of 7.4 mg/dL and a calcium of 7.6 mg/dL. Complete the sentence.',
    sentence: 'The failing kidney cannot {0}, which raises phosphorus and lowers calcium. This drives {1}, and the nurse should administer the prescribed phosphate binder {2}.',
    blanks: [
      { options: ['excrete phosphorus or activate vitamin D', 'produce erythropoietin', 'reabsorb sodium', 'secrete insulin'], answer: 0 },
      { options: ['secondary hyperparathyroidism with bone demineralization', 'hypoparathyroidism', 'hyperthyroidism', 'adrenal insufficiency'], answer: 0 },
      { options: ['on an empty stomach between meals', 'with meals', 'at bedtime only', 'only when phosphorus is normal'], answer: 1 }
    ],
    rationale: 'Damaged kidneys retain phosphorus and cannot convert vitamin D to its active form, so calcium absorption falls. The parathyroid glands respond by pulling calcium from bone, producing renal osteodystrophy and vascular calcification. Phosphate binders work by binding dietary phosphorus in the gut, so they are useless unless taken with food.',
    strategy: 'Phosphate binders with meals, every meal. Taken between meals they bind nothing.' },

  { id: 'NGN-024', cat: 'safe', sub: 'Medication Safety', type: 'bowtie', difficulty: 3, ncjmm: 'action',
    stem: 'A client receiving an IV antibiotic develops facial swelling, wheezing, urticaria, and a blood pressure of 76/40. Complete the diagram.',
    condition: {
      prompt: 'The client is experiencing:',
      options: ['A vancomycin infusion reaction', 'Anaphylaxis', 'A febrile transfusion reaction', 'An asthma exacerbation'],
      answer: 1
    },
    actions: {
      prompt: 'Actions to take:', pick: 2,
      options: [
        'Stop the infusion immediately and call for emergency assistance',
        'Administer intramuscular epinephrine to the anterolateral thigh',
        'Administer an oral antihistamine and observe',
        'Slow the infusion rate and continue',
        'Administer a corticosteroid as the sole treatment'
      ],
      answer: [0, 1]
    },
    parameters: {
      prompt: 'Parameters to monitor:', pick: 2,
      options: [
        'Airway patency and respiratory effort',
        'Blood pressure and heart rate',
        'Serum amylase',
        'Bowel sounds',
        'Urine specific gravity'
      ],
      answer: [0, 1]
    },
    rationale: 'Airway swelling, bronchospasm, urticaria, and profound hypotension within minutes of a drug is anaphylaxis. Epinephrine is the only agent that reverses all three mechanisms and must not be delayed while antihistamines or steroids are considered, since those act too slowly to be primary treatment. Airway patency is monitored because laryngeal edema kills fastest, and the blood pressure tracks the distributive shock and the response to epinephrine and fluids.',
    strategy: 'Anaphylaxis equals epinephrine, intramuscular, in the thigh, immediately. Everything else is an adjunct.' },

  { id: 'NGN-025', cat: 'moc', sub: 'Legal Rights', type: 'matrix', difficulty: 2, ncjmm: 'solutions',
    stem: 'For each scenario, click to specify whether client consent is required, whether it may be waived, or whether a surrogate must decide.',
    columns: ['Client consent required', 'May be waived', 'Surrogate decides'],
    rows: [
      { text: 'An unconscious trauma client needs emergency surgery and no family can be reached', answer: 1 },
      { text: 'A competent adult is scheduled for an elective hernia repair', answer: 0 },
      { text: 'A 17-year-old who is married requests routine care', answer: 0 },
      { text: 'A client with advanced dementia and a court-appointed guardian needs an elective procedure', answer: 2 },
      { text: 'A competent client refuses a blood transfusion for religious reasons', answer: 0 },
      { text: 'A 14-year-old needs an appendectomy and the parent is present', answer: 2 }
    ],
    rationale: 'Implied consent covers a life-threatening emergency when the client cannot consent and no surrogate is available. Competent adults and emancipated minors, which includes married minors, consent for themselves, and a competent refusal must be honored. A court-appointed guardian holds decision-making authority, and an unemancipated minor requires parental consent.',
    strategy: 'Consent is waived only when delay would cost life or limb and nobody can speak for the client.' },

  { id: 'NGN-026', cat: 'phys', sub: 'Gastrointestinal', type: 'matrix', difficulty: 3, ncjmm: 'analyze',
    stem: 'For each feature, click to specify whether it describes Crohn disease, ulcerative colitis, or both.',
    columns: ['Crohn disease', 'Ulcerative colitis', 'Both'],
    rows: [
      { text: 'Can affect any part of the tract from mouth to anus', answer: 0 },
      { text: 'Limited to the colon and rectum', answer: 1 },
      { text: 'Transmural inflammation with skip lesions', answer: 0 },
      { text: 'Fistulas, abscesses, and strictures are common', answer: 0 },
      { text: 'Bloody diarrhea is a prominent feature', answer: 1 },
      { text: 'Toxic megacolon is a feared complication', answer: 1 },
      { text: 'Chronic inflammatory bowel disease with periods of remission and flare', answer: 2 }
    ],
    rationale: 'Crohn disease produces patchy full-thickness inflammation anywhere along the gastrointestinal tract, which is why it creates fistulas and strictures. Ulcerative colitis produces continuous mucosal inflammation confined to the colon and rectum, so bloody diarrhea dominates and toxic megacolon is the feared complication. Both are chronic relapsing autoimmune conditions.',
    strategy: 'Crohn skips and goes deep. Ulcerative colitis is continuous, colon only, and bloody.' },

  { id: 'NGN-027', cat: 'psy', sub: 'Abuse', type: 'highlight', difficulty: 3, ncjmm: 'recognize',
    stem: 'Click to highlight the findings that raise concern for child physical abuse.',
    passage: [
      'A 4-year-old is brought in for a wrist injury. Assessment reveals: ',
      { text: 'multiple bruises in various stages of healing on the back and buttocks', answer: true },
      '; ',
      { text: 'a bruise on the shin', answer: false },
      '; ',
      { text: 'a circular burn on the forearm approximately 1 cm across', answer: true },
      '; ',
      { text: 'the caregiver\'s account changes twice during the interview', answer: true },
      '; ',
      { text: 'the child flinches when the caregiver moves toward them', answer: true },
      '; ',
      { text: 'a scraped knee', answer: false },
      '; ',
      { text: 'a 3-day delay in seeking care for the wrist', answer: true },
      '; ',
      { text: 'immunizations are up to date', answer: false },
      '.'
    ],
    rationale: 'Bruises of differing ages in protected areas that a child does not fall on, a patterned burn consistent with a cigarette, an inconsistent history, fear of the caregiver, and unexplained delay in seeking care are all recognized indicators. Shins and knees are the normal sites of accidental injury in an active preschooler, and current immunizations suggest engagement with care rather than neglect.',
    strategy: 'Accidental bruises land on bony prominences children fall on. Inflicted injuries land on soft protected areas, and the history does not match.' },

  { id: 'NGN-028', cat: 'risk', sub: 'Laboratory Values', type: 'cloze', difficulty: 3, ncjmm: 'analyze',
    stem: 'An arterial blood gas shows pH 7.29, PaCO2 32 mmHg, and bicarbonate 16 mEq/L in a client with 4 days of severe diarrhea. Complete the sentence.',
    sentence: 'This client has {0} with {1} compensation. The compensation is {2}.',
    blanks: [
      { options: ['respiratory acidosis', 'metabolic acidosis', 'respiratory alkalosis', 'metabolic alkalosis'], answer: 1 },
      { options: ['renal', 'respiratory'], answer: 1 },
      { options: ['complete, since the pH has normalized', 'partial, since the pH remains abnormal', 'absent'], answer: 1 }
    ],
    rationale: 'Diarrhea loses bicarbonate from the lower gastrointestinal tract, producing a metabolic acidosis with a low pH and low bicarbonate. The lungs compensate within minutes to hours by hyperventilating to blow off carbon dioxide, which is why the PaCO2 is low. Because the pH is still below 7.35, the compensation is partial rather than complete.',
    strategy: 'ROME: Respiratory Opposite, Metabolic Equal. If the pH is still abnormal, compensation is only partial.' },

  { id: 'NGN-029', cat: 'pharm', sub: 'Antidotes', type: 'matrix', difficulty: 2, ncjmm: 'solutions',
    stem: 'For each medication or toxin, click to specify the correct reversal agent.',
    columns: ['Naloxone', 'Protamine sulfate', 'Vitamin K', 'Calcium gluconate'],
    rows: [
      { text: 'Heparin overdose', answer: 1 },
      { text: 'Opioid overdose with respiratory depression', answer: 0 },
      { text: 'Warfarin with a critically elevated INR', answer: 2 },
      { text: 'Magnesium sulfate toxicity', answer: 3 },
      { text: 'Severe hyperkalemia with ECG changes', answer: 3 }
    ],
    rationale: 'Protamine reverses heparin, naloxone reverses opioids, and vitamin K restores warfarin-inhibited clotting factor synthesis. Calcium gluconate antagonizes magnesium at the neuromuscular junction and, in hyperkalemia, stabilizes the cardiac membrane against arrhythmia without lowering the potassium itself.',
    strategy: 'Calcium gluconate appears twice: magnesium toxicity and hyperkalemia. In hyperkalemia it protects the heart but does not remove potassium.' },

  { id: 'NGN-030', cat: 'phys', sub: 'Musculoskeletal', type: 'bowtie', difficulty: 3, ncjmm: 'prioritize',
    stem: 'A client with a forearm cast applied 5 hours ago reports escalating pain unrelieved by opioids, with severe pain on passive finger extension and numbness. Complete the diagram.',
    condition: {
      prompt: 'The client is most likely experiencing:',
      options: ['Normal post-casting discomfort', 'Compartment syndrome', 'Deep vein thrombosis', 'Fat embolism'],
      answer: 1
    },
    actions: {
      prompt: 'Actions to take:', pick: 2,
      options: [
        'Notify the provider immediately and prepare for cast bivalving',
        'Elevate the limb well above heart level and apply ice',
        'Keep the extremity at heart level and avoid further constriction',
        'Administer additional opioid and reassess in 1 hour',
        'Encourage active range of motion of the fingers'
      ],
      answer: [0, 2]
    },
    parameters: {
      prompt: 'Parameters to monitor:', pick: 2,
      options: [
        'Sensation and motor function of the fingers',
        'Capillary refill, colour, and temperature distal to the cast',
        'Bowel sounds',
        'Serum glucose',
        'Urine output only'
      ],
      answer: [0, 1]
    },
    rationale: 'Pain out of proportion to the injury, unrelieved by opioids and worsened by passive stretch, with paresthesia, is compartment syndrome, a limb-threatening emergency requiring immediate release of the constricting cast and possible fasciotomy. Elevating above heart level reduces arterial inflow and worsens ischemia, so the limb is kept at heart level. Pulselessness is a very late finding, so sensation, motor function, and capillary refill are followed instead.',
    strategy: 'Pain out of proportion, worse on passive stretch, unrelieved by opioids. Do not wait for a missing pulse.' },

  { id: 'NGN-031', cat: 'bcc', sub: 'Mobility', type: 'matrix', difficulty: 2, ncjmm: 'solutions',
    stem: 'For each client, click to specify the correct positioning.',
    columns: ['Head of bed 30 degrees, head midline', 'Upright, legs dependent', 'Left lateral Sims', 'Flat, log roll only'],
    rows: [
      { text: 'A client with increased intracranial pressure', answer: 0 },
      { text: 'A client in acute pulmonary edema', answer: 1 },
      { text: 'A client receiving a cleansing enema', answer: 2 },
      { text: 'A client with a suspected unstable spinal injury', answer: 3 },
      { text: 'A client receiving continuous enteral tube feeding', answer: 0 }
    ],
    rationale: 'Head elevation with the neck midline optimizes cerebral venous drainage and also prevents aspiration during tube feeding. Upright positioning with dependent legs pools blood peripherally and maximizes lung expansion in pulmonary edema. The left lateral Sims position follows the anatomy of the descending colon. A suspected unstable spine is kept flat and moved only by coordinated log roll.',
    strategy: 'Position questions almost always reduce to gravity: what do you want moving toward or away from where.' },

  { id: 'NGN-032', cat: 'hpm', sub: 'Growth and Development', type: 'matrix', difficulty: 2, ncjmm: 'recognize',
    stem: 'For each milestone, click to specify the age by which it is normally achieved.',
    columns: ['2 months', '6–8 months', '12–15 months', '24 months'],
    rows: [
      { text: 'Social smile', answer: 0 },
      { text: 'Sits without support', answer: 1 },
      { text: 'Walks independently', answer: 2 },
      { text: 'Speaks in two-word phrases', answer: 3 },
      { text: 'Develops stranger anxiety', answer: 1 },
      { text: 'Says one or two meaningful words', answer: 2 }
    ],
    rationale: 'Development proceeds head to toe and centre to periphery on a broadly predictable schedule: social smile at about 2 months, independent sitting and stranger anxiety at 6 to 8 months, walking and first words at 12 to 15 months, and two-word phrases by about 24 months. Failure to reach a milestone by the outer limit warrants evaluation, and loss of a skill already achieved always does.',
    strategy: 'Delay can be watched. Regression, the loss of a skill a child once had, is always an urgent referral.' },

  { id: 'NGN-033', cat: 'phys', sub: 'Endocrine', type: 'matrix', difficulty: 2, ncjmm: 'analyze',
    stem: 'For each finding, click to specify whether it suggests hypothyroidism or hyperthyroidism.',
    columns: ['Hypothyroidism', 'Hyperthyroidism'],
    rows: [
      { text: 'Cold intolerance and weight gain', answer: 0 },
      { text: 'Heat intolerance with unintended weight loss', answer: 1 },
      { text: 'Bradycardia and constipation', answer: 0 },
      { text: 'Tachycardia, tremor, and diarrhea', answer: 1 },
      { text: 'Exophthalmos', answer: 1 },
      { text: 'Dry coarse skin with hair loss', answer: 0 },
      { text: 'Insomnia and anxiety', answer: 1 }
    ],
    rationale: 'Thyroid hormone sets the metabolic rate, so deficiency slows every system while excess accelerates all of them. Exophthalmos is specific to Graves disease, the autoimmune cause of hyperthyroidism, where retro-orbital tissue expands.',
    strategy: 'Hypothyroid is slow, cold, heavy, and dry. Hyperthyroid is fast, hot, thin, and anxious.' },

  { id: 'NGN-034', cat: 'safe', sub: 'Infection Control', type: 'highlight', difficulty: 2, ncjmm: 'evaluate',
    stem: 'A nursing student is caring for a client on contact precautions. Click to highlight the actions that require the instructor to intervene.',
    passage: [
      'The student: ',
      { text: 'performs hand hygiene before entering the room', answer: false },
      '; ',
      { text: 'dons gown and gloves at the doorway', answer: false },
      '; ',
      { text: 'uses an alcohol-based rub after caring for a client with C. difficile', answer: true },
      '; ',
      { text: 'wears artificial nails during direct client care', answer: true },
      '; ',
      { text: 'removes gloves before the gown and then performs hand hygiene', answer: false },
      '; ',
      { text: 'recaps a used needle with two hands', answer: true },
      '; ',
      { text: 'takes a shared blood pressure cuff from the room to the next client without disinfecting it', answer: true },
      '; ',
      { text: 'places the drainage bag below the level of the bladder', answer: false },
      '.'
    ],
    rationale: 'Alcohol does not kill C. difficile spores, so soap and water is required. Artificial nails harbor organisms even after hand hygiene and are prohibited in direct care. Two-handed recapping is a needlestick risk and is never acceptable. Moving undisinfected equipment between clients transmits organisms directly. The remaining actions are all correct practice.',
    strategy: 'Spores need soap and water. Two-handed recapping and artificial nails are always the wrong answer.' },

  { id: 'NGN-035', cat: 'moc', sub: 'Prioritization', type: 'cloze', difficulty: 3, ncjmm: 'prioritize',
    stem: 'A nurse discovers a client unresponsive and pulseless on the medical unit. Complete the sentence.',
    sentence: 'The nurse should first {0}, then {1}. Once the defibrillator arrives and shows ventricular fibrillation, the nurse should {2}.',
    blanks: [
      { options: ['begin rescue breathing', 'confirm unresponsiveness and check the carotid pulse and breathing for no more than 10 seconds', 'establish IV access', 'obtain a 12-lead electrocardiogram'], answer: 1 },
      { options: ['call for help and the crash cart, then begin chest compressions', 'complete the admission assessment', 'move the client to a private room', 'administer epinephrine before compressions'], answer: 0 },
      { options: ['perform synchronized cardioversion', 'defibrillate and immediately resume compressions', 'check the pulse for one full minute first', 'administer amiodarone before shocking'], answer: 1 }
    ],
    rationale: 'Current basic life support confirms arrest with a simultaneous pulse and breathing check of no more than 10 seconds, then activates the emergency response and starts high-quality compressions without delay. Ventricular fibrillation is a shockable rhythm treated with unsynchronized defibrillation, and compressions resume immediately afterward without pausing to recheck the pulse, because interruptions in compressions reduce survival.',
    strategy: 'Synchronized cardioversion is for unstable clients with a pulse. No pulse means defibrillate.' },

  { id: 'NGN-036', cat: 'psy', sub: 'Cognitive Disorders', type: 'matrix', difficulty: 3, ncjmm: 'analyze',
    stem: 'For each feature, click to specify whether it describes delirium, dementia, or both.',
    columns: ['Delirium', 'Dementia', 'Both'],
    rows: [
      { text: 'Abrupt onset over hours to days', answer: 0 },
      { text: 'Gradual progression over months to years', answer: 1 },
      { text: 'Fluctuating level of consciousness', answer: 0 },
      { text: 'Usually reversible once the underlying cause is treated', answer: 0 },
      { text: 'Memory impairment is present', answer: 2 },
      { text: 'Attention is markedly impaired', answer: 0 },
      { text: 'Can occur in the same client at the same time', answer: 2 }
    ],
    rationale: 'Delirium is acute, fluctuating, attention-impairing, and usually reversible when infection, hypoxia, medications, pain, or retention is identified and treated. Dementia develops insidiously and progressively with preserved consciousness until very late. Both impair memory, and they frequently coexist, which is why sudden worsening in a client with dementia must be evaluated as superimposed delirium rather than dismissed as progression.',
    strategy: 'Sudden worsening in a client with dementia is delirium until proven otherwise. Look for the infection or the new medication.' }
]
