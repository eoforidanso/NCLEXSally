/**
 * Foundational-tier items (cognitive level 1).
 *
 * These test recall and comprehension — reference ranges, definitions, classic
 * associations, drug classes — the knowledge every application-level question
 * silently assumes. They exist so a student early in a course has somewhere to
 * start before the scenario-based items become useful.
 */
export default [
  { id: 'FND-001', cat: 'risk', sub: 'Laboratory Values', type: 'mc', difficulty: 1,
    stem: 'What is the normal reference range for serum potassium in an adult?',
    options: ['1.5 to 2.5 mEq/L', '3.5 to 5.0 mEq/L', '8.5 to 10.5 mEq/L', '135 to 145 mEq/L'],
    answer: [1],
    rationale: 'Serum potassium runs 3.5 to 5.0 mEq/L. Values outside this range threaten cardiac conduction, which is why potassium is the electrolyte most likely to appear in a prioritization question. 135 to 145 is sodium and 8.5 to 10.5 is calcium.',
    strategy: 'Memorize potassium first. It has the narrowest safe window of the common electrolytes.' },

  { id: 'FND-002', cat: 'risk', sub: 'Laboratory Values', type: 'mc', difficulty: 1,
    stem: 'What is the normal reference range for serum sodium in an adult?',
    options: ['3.5 to 5.0 mEq/L', '98 to 106 mEq/L', '135 to 145 mEq/L', '150 to 160 mEq/L'],
    answer: [2],
    rationale: 'Sodium runs 135 to 145 mEq/L. Below 135 water shifts into cells causing cerebral edema; above 145 cells shrink. Either extreme presents neurologically. 98 to 106 is chloride.',
    strategy: 'Sodium problems are brain problems. Low swells the brain, high shrinks it.' },

  { id: 'FND-003', cat: 'risk', sub: 'Laboratory Values', type: 'mc', difficulty: 1,
    stem: 'What is the normal platelet count in an adult?',
    options: ['4,000 to 11,000 /µL', '150,000 to 400,000 /µL', '12 to 18 g/dL', '0.6 to 1.2 mg/dL'],
    answer: [1],
    rationale: 'Platelets run 150,000 to 400,000 per microliter. Spontaneous bleeding risk rises sharply below about 20,000, and bleeding precautions generally begin below 50,000. The other values are the white count, hemoglobin, and creatinine.',
    strategy: 'Below 50,000 start bleeding precautions. Below 20,000 expect spontaneous bleeding.' },

  { id: 'FND-004', cat: 'risk', sub: 'Laboratory Values', type: 'mc', difficulty: 1,
    stem: 'What is the normal white blood cell count in an adult?',
    options: ['150,000 to 400,000 /µL', '5,000 to 10,000 /µL', '12 to 18 g/dL', '36 to 46 percent'],
    answer: [1],
    rationale: 'The white count runs roughly 5,000 to 10,000 per microliter. Elevation suggests infection or inflammation, and depression suggests marrow suppression with infection risk. An absolute neutrophil count below 500 is severe neutropenia where fever becomes an emergency.',
    strategy: 'The absolute neutrophil count matters more than the total white count. Under 500 means any fever is an emergency.' },

  { id: 'FND-005', cat: 'risk', sub: 'Laboratory Values', type: 'mc', difficulty: 1,
    stem: 'What is the normal serum creatinine range in an adult?',
    options: ['0.6 to 1.2 mg/dL', '10 to 20 mg/dL', '70 to 110 mg/dL', '3.5 to 5.0 mg/dL'],
    answer: [0],
    rationale: 'Creatinine runs 0.6 to 1.2 mg/dL and reflects glomerular filtration more reliably than BUN because it is less affected by hydration, protein intake, and gastrointestinal bleeding. BUN runs 10 to 20 mg/dL.',
    strategy: 'A BUN that rises out of proportion to creatinine points to dehydration, heart failure, or a GI bleed rather than kidney damage.' },

  { id: 'FND-006', cat: 'risk', sub: 'Laboratory Values', type: 'mc', difficulty: 1,
    stem: 'What is the normal arterial blood pH?',
    options: ['6.85 to 7.15', '7.35 to 7.45', '7.55 to 7.75', '8.0 to 8.4'],
    answer: [1],
    rationale: 'Arterial pH is tightly regulated between 7.35 and 7.45. Below 7.35 is acidosis and above 7.45 is alkalosis, with normal PaCO2 at 35 to 45 mmHg and bicarbonate at 22 to 26 mEq/L.',
    strategy: 'Read the pH first for direction, then decide whether CO2 or bicarbonate explains it.' },

  { id: 'FND-007', cat: 'risk', sub: 'Laboratory Values', type: 'mc', difficulty: 1,
    stem: 'Which laboratory value is most specific for myocardial injury?',
    options: ['Myoglobin', 'Troponin I', 'C-reactive protein', 'Brain natriuretic peptide'],
    answer: [1],
    rationale: 'Troponin is a contractile protein essentially unique to cardiac muscle, so its release is specific for myocardial injury. Myoglobin rises earlier but is released by any muscle, C-reactive protein is a nonspecific inflammatory marker, and BNP reflects ventricular stretch in heart failure.',
    strategy: 'Troponin rises in 3 to 4 hours, peaks around 24 hours, and stays elevated for up to two weeks.' },

  { id: 'FND-008', cat: 'risk', sub: 'Laboratory Values', type: 'mc', difficulty: 1,
    stem: 'What does an elevated brain natriuretic peptide level indicate?',
    options: ['Kidney stones', 'Ventricular stretch, as occurs in heart failure', 'Liver failure', 'Pancreatitis'],
    answer: [1],
    rationale: 'BNP is secreted by stretched ventricular myocardium, so it rises with volume and pressure loading. It is used to distinguish cardiac from pulmonary causes of dyspnea, and higher values correlate with greater severity.',
    strategy: 'BNP answers the question "is this shortness of breath the heart or the lungs?"' },

  { id: 'FND-009', cat: 'risk', sub: 'Diagnostic Tests', type: 'mc', difficulty: 1,
    stem: 'What is the therapeutic INR range for most clients taking warfarin for atrial fibrillation?',
    options: ['0.8 to 1.1', '2.0 to 3.0', '4.0 to 5.0', '6.0 to 7.0'],
    answer: [1],
    rationale: 'The usual target is 2.0 to 3.0, raised to 2.5 to 3.5 for a mechanical heart valve. Below range the client remains at risk of clotting; above range the risk of major bleeding rises steeply.',
    strategy: 'INR below range means clot risk. Above range means bleed risk. Know both targets.' },

  { id: 'FND-010', cat: 'risk', sub: 'Vital Signs', type: 'mc', difficulty: 1,
    stem: 'What defines orthostatic hypotension?',
    options: [
      'Any dizziness on standing',
      'A drop of at least 20 mmHg systolic or 10 mmHg diastolic within 3 minutes of standing',
      'A systolic pressure below 140 mmHg',
      'A heart rate increase of 5 beats per minute'
    ],
    answer: [1],
    rationale: 'The definition is a systolic fall of 20 mmHg or more, or a diastolic fall of 10 mmHg or more, within 3 minutes of moving from lying to standing, commonly with a compensatory rise in heart rate.',
    strategy: 'Twenty over ten within three minutes. Measure lying, sitting, and standing.' },

  { id: 'FND-011', cat: 'risk', sub: 'Vital Signs', type: 'mc', difficulty: 1,
    stem: 'What is the minimum acceptable urine output for an adult, indicating adequate renal perfusion?',
    options: ['10 mL per hour', '30 mL per hour', '100 mL per hour', '200 mL per hour'],
    answer: [1],
    rationale: 'At least 30 mL per hour, or roughly 0.5 mL per kilogram per hour, indicates adequate renal perfusion. Sustained output below this threshold signals hypoperfusion or obstruction and requires assessment.',
    strategy: 'Thirty per hour is the number. It appears in shock, burns, postoperative care, and kidney questions alike.' },

  { id: 'FND-012', cat: 'phys', sub: 'Cardiovascular', type: 'mc', difficulty: 1,
    stem: 'Which set of findings characterizes left-sided heart failure?',
    options: [
      'Peripheral edema, jugular venous distention, and ascites',
      'Dyspnea, orthopnea, and pulmonary crackles',
      'Hepatomegaly and splenomegaly',
      'Nausea and abdominal cramping'
    ],
    answer: [1],
    rationale: 'The left ventricle pumps into the systemic circulation, so its failure backs pressure into the lungs, producing dyspnea, orthopnea, and crackles. Right-sided failure backs blood into the systemic venous circulation, producing edema, distended neck veins, hepatomegaly, and ascites.',
    strategy: 'Left equals lungs, right equals the rest of the body.' },

  { id: 'FND-013', cat: 'phys', sub: 'Cardiovascular', type: 'mc', difficulty: 1,
    stem: 'What is Cushing triad and what does it indicate?',
    options: [
      'Fever, rigidity, and altered mental status indicating neuroleptic malignant syndrome',
      'Rising systolic pressure with widening pulse pressure, bradycardia, and irregular respirations, indicating raised intracranial pressure',
      'Muffled heart sounds, distended neck veins, and hypotension indicating tamponade',
      'Hemolysis, elevated liver enzymes, and low platelets indicating HELLP syndrome'
    ],
    answer: [1],
    rationale: 'Cushing triad is a late and ominous sign of dangerously elevated intracranial pressure with impending herniation. The other options describe neuroleptic malignant syndrome, Beck triad of cardiac tamponade, and HELLP syndrome.',
    strategy: 'Cushing triad is late. Level of consciousness falls long before these three appear.' },

  { id: 'FND-014', cat: 'phys', sub: 'Cardiovascular', type: 'mc', difficulty: 1,
    stem: 'What is Beck triad, and which condition does it indicate?',
    options: [
      'Muffled heart sounds, jugular venous distention, and hypotension, indicating cardiac tamponade',
      'Headache, palpitations, and diaphoresis',
      'Fever, cough, and pleuritic chest pain',
      'Bradycardia, hypertension, and irregular respirations'
    ],
    answer: [0],
    rationale: 'Beck triad indicates cardiac tamponade, in which fluid in the pericardial sac prevents ventricular filling. It requires emergent pericardiocentesis. The second option is the pheochromocytoma triad and the fourth is Cushing triad.',
    strategy: 'After cardiac surgery, a sudden drop in chest tube output plus these three signs equals tamponade.' },

  { id: 'FND-015', cat: 'phys', sub: 'Respiratory', type: 'mc', difficulty: 1,
    stem: 'What is the purpose of pursed-lip breathing in chronic obstructive pulmonary disease?',
    options: [
      'To increase the respiratory rate',
      'To create back pressure that keeps small airways open during exhalation and prevents air trapping',
      'To increase carbon dioxide retention',
      'To strengthen the intercostal muscles'
    ],
    answer: [1],
    rationale: 'Exhaling against pursed lips generates positive pressure that splints collapsible airways open, allowing more complete emptying. It slows the respiratory rate and improves carbon dioxide elimination and dyspnea.',
    strategy: 'Inhale through the nose, exhale through pursed lips for twice as long.' },

  { id: 'FND-016', cat: 'phys', sub: 'Respiratory', type: 'mc', difficulty: 1,
    stem: 'What does a silent chest in a client with an asthma exacerbation indicate?',
    options: [
      'The attack is resolving',
      'Severely reduced airflow and impending respiratory failure',
      'The client is holding their breath',
      'A pleural effusion has developed'
    ],
    answer: [1],
    rationale: 'Wheezing requires moving air. When wheezing disappears in a client whose work of breathing is increasing, airflow has become critically reduced. A silent chest is an emergency requiring escalation and preparation for intubation.',
    strategy: 'Improvement in asthma looks like better saturation and easier speech, not simply less noise.' },

  { id: 'FND-017', cat: 'phys', sub: 'Respiratory', type: 'mc', difficulty: 1,
    stem: 'Which breathing pattern is described as deep and rapid without apneic pauses, and what does it indicate?',
    options: [
      'Cheyne-Stokes respirations, indicating heart failure',
      'Kussmaul respirations, indicating metabolic acidosis',
      'Biot respirations, indicating brainstem injury',
      'Eupnea, indicating normal breathing'
    ],
    answer: [1],
    rationale: 'Kussmaul respirations are the lungs compensating for a metabolic acidosis by eliminating carbon dioxide, classically seen in diabetic ketoacidosis. Cheyne-Stokes respirations wax and wane with apneic periods, and Biot respirations are irregular with abrupt pauses.',
    strategy: 'Deep and fast without pauses equals acidosis. Waxing and waning with pauses equals Cheyne-Stokes.' },

  { id: 'FND-018', cat: 'phys', sub: 'Endocrine', type: 'mc', difficulty: 1,
    stem: 'Which findings indicate hypoglycemia?',
    options: [
      'Fruity breath odor and Kussmaul respirations',
      'Diaphoresis, tremor, tachycardia, and confusion',
      'Polyuria and polydipsia developing over days',
      'Warm dry flushed skin'
    ],
    answer: [1],
    rationale: 'Falling glucose triggers an adrenergic response of sweating, tremor, and tachycardia, and neuroglycopenia produces confusion and irritability. Fruity breath, Kussmaul respirations, warm dry skin, and gradual polyuria all indicate hyperglycemia.',
    strategy: 'Cold and clammy, need some candy. Hot and dry, sugar high.' },

  { id: 'FND-019', cat: 'phys', sub: 'Endocrine', type: 'mc', difficulty: 1,
    stem: 'Which findings characterize Cushing syndrome?',
    options: [
      'Weight loss, hyperpigmentation, hypotension, and hyperkalemia',
      'Truncal obesity, moon face, buffalo hump, hyperglycemia, and hypertension',
      'Cold intolerance, bradycardia, and weight gain',
      'Heat intolerance, tremor, and exophthalmos'
    ],
    answer: [1],
    rationale: 'Cortisol excess redistributes fat centrally, wastes peripheral protein, raises glucose, and retains sodium and water while wasting potassium. The first option describes Addison disease, and the last two describe hypothyroidism and hyperthyroidism.',
    strategy: 'Cushing is too much cortisol: everything up except potassium. Addison is too little: everything down except potassium.' },

  { id: 'FND-020', cat: 'phys', sub: 'Endocrine', type: 'mc', difficulty: 1,
    stem: 'What distinguishes syndrome of inappropriate antidiuretic hormone from diabetes insipidus?',
    options: [
      'SIADH causes water retention with hyponatremia and concentrated urine; diabetes insipidus causes water loss with hypernatremia and dilute urine',
      'They produce identical findings',
      'SIADH causes dilute urine and diabetes insipidus causes concentrated urine',
      'Both cause hypernatremia'
    ],
    answer: [0],
    rationale: 'Too much antidiuretic hormone retains water, diluting the serum sodium while producing inappropriately concentrated urine, and it is treated with fluid restriction. Too little produces massive volumes of dilute urine with rising sodium, and it is treated with fluid replacement and desmopressin.',
    strategy: 'SIADH holds water, diabetes insipidus dumps it. Their treatments are opposite.' },

  { id: 'FND-021', cat: 'phys', sub: 'Neurological', type: 'mc', difficulty: 1,
    stem: 'What is the earliest and most sensitive indicator of rising intracranial pressure?',
    options: ['A dilated pupil', 'A change in level of consciousness', 'Bradycardia', 'Vomiting'],
    answer: [1],
    rationale: 'Declining level of consciousness precedes every other sign because the cortex is the most sensitive to reduced perfusion. Pupillary changes, bradycardia, and the rest of Cushing triad are late findings that indicate herniation is already underway.',
    strategy: 'If the client is harder to rouse than an hour ago, that is your sign. Do not wait for the pupils.' },

  { id: 'FND-022', cat: 'phys', sub: 'Neurological', type: 'mc', difficulty: 1,
    stem: 'What does the mnemonic BE FAST screen for?',
    options: ['Myocardial infarction', 'Stroke', 'Sepsis', 'Anaphylaxis'],
    answer: [1],
    rationale: 'BE FAST stands for Balance, Eyes, Face, Arms, Speech, and Time, and it identifies stroke. Establishing the time the client was last known well is critical because it determines eligibility for thrombolysis.',
    strategy: 'In stroke, the clock is a vital sign. Never accept "this morning" as a time of onset.' },

  { id: 'FND-023', cat: 'phys', sub: 'Neurological', type: 'mc', difficulty: 1,
    stem: 'Which spinal cord levels innervate the diaphragm?',
    options: ['C1 and C2', 'C3, C4, and C5', 'T1 through T4', 'L1 and L2'],
    answer: [1],
    rationale: 'The phrenic nerve arises from C3 to C5, so injuries at or above this level compromise breathing and may require ventilatory support. Injuries below it spare the diaphragm but may still impair the intercostal muscles.',
    strategy: 'C3, 4, and 5 keep the diaphragm alive.' },

  { id: 'FND-024', cat: 'phys', sub: 'Shock', type: 'mc', difficulty: 1,
    stem: 'What is the earliest sign of shock?',
    options: ['Hypotension', 'Restlessness and anxiety', 'Anuria', 'Cyanosis'],
    answer: [1],
    rationale: 'Cerebral hypoperfusion produces restlessness and anxiety before compensatory mechanisms fail. Blood pressure is maintained until roughly 30 percent of blood volume is lost, making hypotension a late sign, and cyanosis and anuria later still.',
    strategy: 'Never wait for hypotension. By the time the pressure falls, a third of the volume is gone.' },

  { id: 'FND-025', cat: 'phys', sub: 'Shock', type: 'mc', difficulty: 1,
    stem: 'Which type of shock is characterized by bradycardia and warm dry skin?',
    options: ['Hypovolemic', 'Cardiogenic', 'Neurogenic', 'Septic'],
    answer: [2],
    rationale: 'Loss of sympathetic tone below a high spinal cord injury produces vasodilation with warm dry skin, and unopposed vagal tone produces bradycardia. Every other form of shock produces tachycardia, and hypovolemic and cardiogenic shock produce cool clammy skin.',
    strategy: 'Neurogenic shock is the only shock that runs slow and warm.' },

  { id: 'FND-026', cat: 'phys', sub: 'Fluid and Electrolytes', type: 'mc', difficulty: 1,
    stem: 'What electrocardiographic change is the earliest sign of hyperkalemia?',
    options: ['Flattened T waves with U waves', 'Tall peaked T waves', 'A prolonged QT interval', 'A widened P wave'],
    answer: [1],
    rationale: 'Peaked T waves appear first, progressing to a widened QRS, loss of P waves, and a sine wave pattern preceding arrest. Flattened T waves with prominent U waves indicate hypokalemia instead.',
    strategy: 'Peaked T waves equal high potassium. Flat T waves with U waves equal low potassium.' },

  { id: 'FND-027', cat: 'phys', sub: 'Fluid and Electrolytes', type: 'mc', difficulty: 1,
    stem: 'What do positive Chvostek and Trousseau signs indicate?',
    options: ['Hypercalcemia', 'Hypocalcemia', 'Hyperkalemia', 'Hypernatremia'],
    answer: [1],
    rationale: 'Low calcium increases neuromuscular excitability. Chvostek sign is facial twitching when the cheek is tapped, and Trousseau sign is carpal spasm when a blood pressure cuff is inflated. Both signal tetany risk, and severe hypocalcemia causes laryngospasm and seizures.',
    strategy: 'Calcium sedates. Low calcium makes everything twitchy; high calcium makes everything sluggish.' },

  { id: 'FND-028', cat: 'phys', sub: 'Integumentary', type: 'mc', difficulty: 1,
    stem: 'Using the adult rule of nines, what percentage of total body surface area does one entire arm represent?',
    options: ['4.5 percent', '9 percent', '18 percent', '27 percent'],
    answer: [1],
    rationale: 'Each entire arm is 9 percent, each entire leg is 18 percent, the head is 9 percent, the anterior trunk is 18 percent, the posterior trunk is 18 percent, and the perineum is 1 percent. Proportions differ in children, whose heads are relatively larger.',
    strategy: 'Head 9, each arm 9, each leg 18, front torso 18, back torso 18, perineum 1.' },

  { id: 'FND-029', cat: 'phys', sub: 'Integumentary', type: 'mc', difficulty: 1,
    stem: 'A burn that appears dry, white, leathery, and is painless indicates what depth?',
    options: ['Superficial', 'Superficial partial thickness', 'Deep partial thickness', 'Full thickness'],
    answer: [3],
    rationale: 'Full-thickness burns destroy the epidermis, dermis, and the nerve endings within them, which is why the wound is insensate. Partial-thickness burns are moist, blistered, and intensely painful because nerve endings remain intact.',
    strategy: 'A painless burn is a deep burn. Pain means the nerves survived.' },

  { id: 'FND-030', cat: 'pharm', sub: 'Antidotes', type: 'mc', difficulty: 1,
    stem: 'What is the antidote for heparin overdose?',
    options: ['Vitamin K', 'Protamine sulfate', 'Naloxone', 'Acetylcysteine'],
    answer: [1],
    rationale: 'Protamine sulfate binds and neutralizes heparin. Vitamin K reverses warfarin, naloxone reverses opioids, and acetylcysteine treats acetaminophen overdose.',
    strategy: 'Heparin-protamine, warfarin-vitamin K, opioid-naloxone, acetaminophen-acetylcysteine, benzodiazepine-flumazenil.' },

  { id: 'FND-031', cat: 'pharm', sub: 'Antidotes', type: 'mc', difficulty: 1,
    stem: 'What is the antidote for magnesium sulfate toxicity?',
    options: ['Calcium gluconate', 'Protamine sulfate', 'Flumazenil', 'Digoxin immune Fab'],
    answer: [0],
    rationale: 'Calcium gluconate antagonizes magnesium at the neuromuscular junction and must be immediately available whenever magnesium sulfate is infusing, particularly in obstetric care.',
    strategy: 'Magnesium running means calcium gluconate at the bedside. That pairing is never optional.' },

  { id: 'FND-032', cat: 'pharm', sub: 'Anticoagulants', type: 'mc', difficulty: 1,
    stem: 'Which laboratory test monitors heparin therapy?',
    options: ['INR', 'Activated partial thromboplastin time', 'Platelet count alone', 'Bleeding time'],
    answer: [1],
    rationale: 'Heparin is monitored by aPTT, with a therapeutic target of 1.5 to 2.5 times the control value. Warfarin is monitored by prothrombin time expressed as the INR. Platelets are followed on heparin to detect heparin-induced thrombocytopenia but do not gauge the therapeutic effect.',
    strategy: 'Heparin-aPTT-protamine. Warfarin-INR-vitamin K. Learn each trio as a unit.' },

  { id: 'FND-033', cat: 'pharm', sub: 'Cardiac Drugs', type: 'mc', difficulty: 1,
    stem: 'What is the therapeutic serum range for digoxin, and what apical pulse requires the dose to be held in an adult?',
    options: [
      'Level 0.5 to 2.0 ng/mL; hold if the apical pulse is below 60',
      'Level 10 to 20 ng/mL; hold if the apical pulse is below 100',
      'Level 0.6 to 1.2 ng/mL; hold if the apical pulse is above 100',
      'Level 2 to 4 ng/mL; hold if the apical pulse is below 50'
    ],
    answer: [0],
    rationale: 'Digoxin has a narrow therapeutic index of roughly 0.5 to 2.0 ng/mL, and the dose is held for an adult apical pulse below 60 because the drug slows conduction further. Hypokalemia markedly increases toxicity risk.',
    strategy: 'Count apically for a full minute. Hold below 60 in adults, 70 in children, 90 to 110 in infants.' },

  { id: 'FND-034', cat: 'pharm', sub: 'Antipsychotics', type: 'mc', difficulty: 1,
    stem: 'What are the signs of neuroleptic malignant syndrome?',
    options: [
      'Hyperreflexia and clonus with diarrhea',
      'High fever, lead-pipe muscle rigidity, altered mental status, and autonomic instability',
      'Dry mouth, urinary retention, and blurred vision',
      'Involuntary lip smacking and tongue movements'
    ],
    answer: [1],
    rationale: 'Neuroleptic malignant syndrome is a life-threatening reaction to dopamine-blocking agents requiring immediate discontinuation, cooling, and supportive care. Hyperreflexia with clonus indicates serotonin syndrome, and lip smacking indicates tardive dyskinesia.',
    strategy: 'NMS has rigidity without clonus. Serotonin syndrome has clonus and hyperreflexia. That is the discriminator.' },

  { id: 'FND-035', cat: 'pharm', sub: 'Insulin', type: 'mc', difficulty: 1,
    stem: 'Which insulin is the only type that may be administered intravenously?',
    options: ['NPH insulin', 'Insulin glargine', 'Regular insulin', 'Insulin detemir'],
    answer: [2],
    rationale: 'Only regular insulin may be given intravenously, which is why it is used for infusions in diabetic ketoacidosis and hyperkalemia. NPH is a suspension, and glargine and detemir are long-acting analogs designed for subcutaneous absorption.',
    strategy: 'Regular is the only IV insulin, and regular plus NPH are the only two that may be mixed.' },

  { id: 'FND-036', cat: 'pharm', sub: 'Medication Administration', type: 'mc', difficulty: 1,
    stem: 'Which intramuscular injection site is preferred for most adult medications?',
    options: ['Dorsogluteal', 'Ventrogluteal', 'Deltoid', 'Vastus lateralis'],
    answer: [1],
    rationale: 'The ventrogluteal site is free of major nerves and vessels, has substantial muscle mass, and accommodates larger volumes. The dorsogluteal site risks sciatic nerve injury and is no longer recommended, the deltoid accepts only about 1 mL, and the vastus lateralis is preferred in infants.',
    strategy: 'Ventrogluteal for adults, vastus lateralis for infants. Dorsogluteal is always wrong.' },

  { id: 'FND-037', cat: 'pharm', sub: 'Medication Administration', type: 'mc', difficulty: 1,
    stem: 'At what angle is an intradermal injection administered?',
    options: ['5 to 15 degrees', '45 degrees', '90 degrees', '30 degrees'],
    answer: [0],
    rationale: 'Intradermal injections are placed just below the epidermis at 5 to 15 degrees, producing a visible wheal that confirms correct depth. Subcutaneous injections use 45 to 90 degrees and intramuscular injections use 90 degrees.',
    strategy: 'Intradermal almost flat, subcutaneous 45 to 90, intramuscular straight in at 90.' },

  { id: 'FND-038', cat: 'pharm', sub: 'Medication Safety', type: 'mc', difficulty: 1,
    stem: 'Which abbreviation appears on the official do-not-use list?',
    options: ['mL', 'mg', 'U for units', 'mcg'],
    answer: [2],
    rationale: 'The abbreviation U is misread as a zero or a four, producing tenfold insulin and heparin overdoses. Also prohibited are IU, QD, QOD, trailing zeros, and a missing leading zero before a decimal point.',
    strategy: 'Always a leading zero, never a trailing zero, never U, IU, QD, or QOD.' },

  { id: 'FND-039', cat: 'pharm', sub: 'Opioids', type: 'mc', difficulty: 1,
    stem: 'Which opioid side effect does not diminish with tolerance and requires ongoing management?',
    options: ['Nausea', 'Sedation', 'Constipation', 'Pruritus'],
    answer: [2],
    rationale: 'Tolerance develops to nausea, sedation, and itching within days, but opioid-induced constipation persists for the entire duration of therapy. A bowel regimen is started alongside the opioid rather than after symptoms appear.',
    strategy: 'Start the bowel regimen with the first opioid dose, not after the client is impacted.' },

  { id: 'FND-040', cat: 'pharm', sub: 'Diuretics', type: 'mc', difficulty: 1,
    stem: 'Which electrolyte abnormality is most associated with furosemide?',
    options: ['Hyperkalemia', 'Hypokalemia', 'Hypernatremia', 'Hypercalcemia'],
    answer: [1],
    rationale: 'Loop diuretics increase renal excretion of potassium, magnesium, calcium, and sodium. Hypokalemia is the most clinically significant because it precipitates arrhythmias and potentiates digoxin toxicity.',
    strategy: 'Loops and thiazides waste potassium. Spironolactone, ACE inhibitors, and ARBs retain it.' },

  { id: 'FND-041', cat: 'safe', sub: 'Transmission Precautions', type: 'mc', difficulty: 1,
    stem: 'Which conditions require airborne precautions?',
    options: [
      'Influenza and pertussis',
      'Tuberculosis, measles, varicella, and disseminated zoster',
      'MRSA and C. difficile',
      'RSV and scabies'
    ],
    answer: [1],
    rationale: 'Airborne precautions require a fit-tested N95 respirator and a negative-pressure room for pathogens carried on small particles that stay suspended. Influenza and pertussis require droplet precautions, and the remaining conditions require contact precautions.',
    strategy: 'My Chicken Has TB: measles, chickenpox, herpes zoster disseminated, tuberculosis.' },

  { id: 'FND-042', cat: 'safe', sub: 'Hand Hygiene', type: 'mc', difficulty: 1,
    stem: 'Which organism requires soap and water hand hygiene rather than an alcohol-based rub?',
    options: ['MRSA', 'Clostridioides difficile', 'Influenza', 'Pseudomonas'],
    answer: [1],
    rationale: 'C. difficile forms spores that alcohol does not inactivate, so only the mechanical friction and rinsing of soap and water removes them. The same applies to norovirus and Bacillus anthracis.',
    strategy: 'Spores and norovirus need soap and water. Alcohol handles almost everything else.' },

  { id: 'FND-043', cat: 'safe', sub: 'PPE', type: 'mc', difficulty: 1,
    stem: 'What is the correct order for donning personal protective equipment?',
    options: [
      'Gloves, gown, mask, goggles',
      'Gown, mask, goggles, gloves',
      'Mask, gloves, gown, goggles',
      'Goggles, gloves, gown, mask'
    ],
    answer: [1],
    rationale: 'After hand hygiene, the sequence is gown, mask or respirator, goggles or face shield, then gloves last so they cover the gown cuffs. Removal reverses this except that the mask comes off after leaving the room.',
    strategy: 'Gloves go on last and come off first. The mask always comes off outside the room.' },

  { id: 'FND-044', cat: 'safe', sub: 'Emergency Response', type: 'mc', difficulty: 1,
    stem: 'What does the fire response mnemonic RACE stand for?',
    options: [
      'Rescue, Alarm, Confine, Extinguish',
      'Report, Assess, Contain, Evacuate',
      'Remove, Alert, Close, Escape',
      'Respond, Activate, Cover, Exit'
    ],
    answer: [0],
    rationale: 'RACE orders the response: rescue anyone in immediate danger, activate the alarm, confine the fire by closing doors and windows, then extinguish only if the fire is small and it is safe to do so.',
    strategy: 'RACE for the response, PASS for the extinguisher: Pull, Aim, Squeeze, Sweep.' },

  { id: 'FND-045', cat: 'safe', sub: 'Restraints', type: 'mc', difficulty: 1,
    stem: 'Which knot is used to secure a limb restraint, and to what is it attached?',
    options: [
      'A square knot tied to the side rail',
      'A quick-release knot tied to the bed frame',
      'A double knot tied to the side rail',
      'Any secure knot tied to the mattress'
    ],
    answer: [1],
    rationale: 'A quick-release knot allows immediate removal in an emergency such as fire, vomiting, or aspiration, and attachment to the bed frame prevents injury when the side rail is lowered.',
    strategy: 'Quick-release knot, bed frame, never the side rail. Imagine needing it off in three seconds.' },

  { id: 'FND-046', cat: 'safe', sub: 'Client Identification', type: 'mc', difficulty: 1,
    stem: 'Which pair of identifiers is acceptable before administering a medication?',
    options: [
      'Room number and bed position',
      'Full name and date of birth',
      'Diagnosis and attending provider',
      'First name and room number'
    ],
    answer: [1],
    rationale: 'Two client-specific identifiers are required, such as full name with date of birth or medical record number. Room and bed assignments change constantly and are never acceptable identifiers.',
    strategy: 'Location is never an identifier. Use two pieces of information that belong to the person.' },

  { id: 'FND-047', cat: 'safe', sub: 'Fall Prevention', type: 'mc', difficulty: 1,
    stem: 'What is the strongest single predictor that a client will fall?',
    options: ['Age over 80', 'A previous fall', 'Use of a walker', 'Living alone'],
    answer: [1],
    rationale: 'A prior fall predicts future falls better than any other single factor, which is why fall history drives assessment and why a post-fall huddle to identify contributing factors matters so much. Age, mobility aids, and living situation add risk but predict less strongly on their own.',
    strategy: 'Always ask about falls in the past year. It is the single highest-yield screening question.' },

  { id: 'FND-048', cat: 'safe', sub: 'Sterile Technique', type: 'mc', difficulty: 1,
    stem: 'How much of the outer edge of a sterile field is considered contaminated?',
    options: ['The outer 1 inch', 'The outer 6 inches', 'None of it', 'The entire perimeter is sterile'],
    answer: [0],
    rationale: 'The outer 1 inch of any sterile field is considered contaminated, as is anything below waist level, anything out of sight, and any area that becomes wet through strikethrough from an unsterile surface below.',
    strategy: 'Wet equals contaminated. Below the waist equals contaminated. Out of sight equals contaminated.' },

  { id: 'FND-049', cat: 'moc', sub: 'Delegation', type: 'mc', difficulty: 1,
    stem: 'Which steps of the nursing process may never be delegated?',
    options: [
      'Only assessment',
      'Assessment, diagnosis, planning, and evaluation',
      'Only implementation',
      'None; all steps may be delegated when the unit is short-staffed'
    ],
    answer: [1],
    rationale: 'Assessment, nursing diagnosis, planning, and evaluation all require nursing judgment and remain RN functions. Only implementation of stable, routine, predictable tasks may be delegated, and accountability for the outcome always remains with the delegating nurse.',
    strategy: 'Only the doing gets delegated, and never the deciding. Staffing pressure does not change this.' },

  { id: 'FND-050', cat: 'moc', sub: 'Delegation', type: 'mc', difficulty: 1,
    stem: 'What are the five rights of delegation?',
    options: [
      'Right client, drug, dose, route, time',
      'Right task, circumstance, person, direction, supervision',
      'Right nurse, order, chart, signature, time',
      'Right assessment, plan, action, outcome, documentation'
    ],
    answer: [1],
    rationale: 'Delegation requires the right task, under the right circumstances, to the right person, with the right direction and communication, and the right supervision and evaluation. The first option lists the rights of medication administration.',
    strategy: 'Do not confuse the five rights of delegation with the five rights of medication administration.' },

  { id: 'FND-051', cat: 'moc', sub: 'Ethics', type: 'mc', difficulty: 1,
    stem: 'Which ethical principle refers to a client\'s right to self-determination?',
    options: ['Beneficence', 'Autonomy', 'Nonmaleficence', 'Justice'],
    answer: [1],
    rationale: 'Autonomy is the right to make one\'s own decisions, which is why a competent client may refuse any treatment. Beneficence is acting for the client\'s good, nonmaleficence is avoiding harm, and justice concerns fair distribution of resources.',
    strategy: 'Autonomy is choice, beneficence is doing good, nonmaleficence is doing no harm, justice is fairness, veracity is truth, fidelity is keeping promises.' },

  { id: 'FND-052', cat: 'moc', sub: 'Ethics', type: 'mc', difficulty: 1,
    stem: 'Which ethical principle is violated when a nurse promises to return with pain medication and does not?',
    options: ['Justice', 'Fidelity', 'Veracity', 'Autonomy'],
    answer: [1],
    rationale: 'Fidelity is faithfulness to commitments made to the client. Veracity concerns truthfulness rather than follow-through, justice concerns fair distribution, and autonomy concerns self-determination.',
    strategy: 'Fidelity is keeping your word. Veracity is telling the truth. They are easy to confuse.' },

  { id: 'FND-053', cat: 'moc', sub: 'Legal Rights', type: 'mc', difficulty: 1,
    stem: 'What is the difference between assault and battery?',
    options: [
      'Assault is the threat of harmful contact; battery is the actual contact',
      'Assault is the contact; battery is the threat',
      'They are legally identical',
      'Assault applies only to physical injury'
    ],
    answer: [0],
    rationale: 'Assault creates a reasonable fear of harmful or offensive contact without any touching occurring. Battery is the contact itself, which includes administering a treatment a client has refused, even when the nurse believes it will help.',
    strategy: 'If nobody has been touched, it is assault. Treatment given over a refusal is battery.' },

  { id: 'FND-054', cat: 'moc', sub: 'Legal Rights', type: 'mc', difficulty: 1,
    stem: 'What four elements must be present to establish nursing malpractice?',
    options: [
      'Intent, threat, contact, and injury',
      'Duty, breach of that duty, causation, and damages',
      'Consent, documentation, notification, and outcome',
      'Assessment, planning, implementation, and evaluation'
    ],
    answer: [1],
    rationale: 'Malpractice is professional negligence requiring that a duty of care existed, that the nurse breached the standard of care, that the breach directly caused harm, and that measurable damages resulted. All four must be present.',
    strategy: 'Duty, breach, causation, damages. If any one is missing, it is not malpractice.' },

  { id: 'FND-055', cat: 'moc', sub: 'Advance Directives', type: 'mc', difficulty: 1,
    stem: 'What is the difference between a living will and a durable power of attorney for health care?',
    options: [
      'A living will states treatment preferences; a durable power of attorney names a decision maker',
      'A living will names a decision maker; a durable power of attorney states preferences',
      'They are the same document',
      'A durable power of attorney takes effect only after death'
    ],
    answer: [0],
    rationale: 'A living will specifies what treatments the client does and does not want. A durable power of attorney for health care appoints a surrogate to decide if the client loses capacity, and it operates during life rather than after death.',
    strategy: 'Living will says what. Power of attorney says who.' },

  { id: 'FND-056', cat: 'moc', sub: 'DNR Orders', type: 'mc', difficulty: 1,
    stem: 'What does a do-not-resuscitate order mean?',
    options: [
      'No treatment of any kind is provided',
      'Resuscitation is withheld in the event of cardiac or respiratory arrest, but all other care including comfort measures continues',
      'The client is transferred to hospice immediately',
      'Pain medication is withheld'
    ],
    answer: [1],
    rationale: 'A DNR order limits only resuscitation attempts. Oxygen, positioning, analgesia, antibiotics, nutrition, and every other appropriate treatment continue unless separately limited.',
    strategy: 'DNR means do not resuscitate, not do not treat.' },

  { id: 'FND-057', cat: 'moc', sub: 'Confidentiality', type: 'mc', difficulty: 1,
    stem: 'Under privacy rules, disclosure of protected health information without specific client authorization is permitted for which purposes?',
    options: [
      'Any purpose, since the record belongs to the facility',
      'Treatment, payment, health care operations, and disclosures required by law',
      'Only with a court order',
      'Only to immediate family members'
    ],
    answer: [1],
    rationale: 'Treatment, payment, operations, and legally mandated reporting such as communicable disease and suspected abuse are permitted without separate authorization. Employers, curious colleagues, and family members without authorization are not.',
    strategy: 'Ask whether this person needs the information to care for the client, or whether the law requires the disclosure.' },

  { id: 'FND-058', cat: 'moc', sub: 'Prioritization', type: 'mc', difficulty: 1,
    stem: 'According to Maslow\'s hierarchy, which need takes priority?',
    options: ['Self-esteem', 'Physiological needs such as airway, breathing, and circulation', 'Love and belonging', 'Self-actualization'],
    answer: [1],
    rationale: 'Physiological needs come first, followed by safety, then love and belonging, then esteem, then self-actualization. In practice this means airway, breathing, and circulation precede comfort, and comfort precedes teaching.',
    strategy: 'Maslow orders the nursing diagnoses. ABC orders the physiological ones within it.' },

  { id: 'FND-059', cat: 'moc', sub: 'Continuity of Care', type: 'mc', difficulty: 1,
    stem: 'In the SBAR hand-off format, what does each letter stand for?',
    options: [
      'Situation, Background, Assessment, Recommendation',
      'Safety, Baseline, Action, Response',
      'Status, Behavior, Analysis, Report',
      'Summary, Basics, Alerts, Review'
    ],
    answer: [0],
    rationale: 'Situation states what is happening now, Background gives the relevant history, Assessment gives the nurse\'s impression of what it means, and Recommendation states what the nurse wants done and by when.',
    strategy: 'The R is the part most often left out, and it is the part that actually changes anything.' },

  { id: 'FND-060', cat: 'moc', sub: 'Quality Improvement', type: 'mc', difficulty: 1,
    stem: 'What is a near miss?',
    options: [
      'An error that reached the client and caused harm',
      'An error that was caught before it reached the client',
      'An error that reached the client without causing harm',
      'A complication unrelated to any error'
    ],
    answer: [1],
    rationale: 'A near miss is an error intercepted before reaching the client. Reporting near misses is valuable precisely because they reveal system weaknesses without anyone having been injured.',
    strategy: 'Near misses are free lessons. A culture that reports them prevents the harm events.' },

  { id: 'FND-061', cat: 'moc', sub: 'Quality Improvement', type: 'mc', difficulty: 1,
    stem: 'Which outcomes are considered nurse-sensitive indicators?',
    options: [
      'Surgical case volume and imaging utilization',
      'Falls, pressure injuries, catheter-associated urinary tract infections, and central line infections',
      'Provider rounding times',
      'Facility revenue per admission'
    ],
    answer: [1],
    rationale: 'Nurse-sensitive indicators are outcomes strongly influenced by the amount and quality of nursing care. Surveillance, technique, and timely device removal directly change these rates, which is why they are used to measure nursing quality.',
    strategy: 'If nursing vigilance changes the rate, it is nurse-sensitive.' },

  { id: 'FND-062', cat: 'bcc', sub: 'Nutrition', type: 'mc', difficulty: 1,
    stem: 'Which foods are highest in potassium?',
    options: [
      'White rice, white bread, and green beans',
      'Potatoes, bananas, oranges, tomatoes, and salt substitutes',
      'Eggs, chicken, and pasta',
      'Apples, grapes, and cucumbers'
    ],
    answer: [1],
    rationale: 'These are the classic high-potassium foods restricted in kidney disease. Salt substitutes deserve particular emphasis because they are potassium chloride and are frequently overlooked by clients trying to reduce sodium.',
    strategy: 'Salt substitute is potassium. It is wrong for anyone with kidney disease or on a potassium-sparing drug.' },

  { id: 'FND-063', cat: 'bcc', sub: 'Nutrition', type: 'mc', difficulty: 1,
    stem: 'Which grains must be avoided by a client with celiac disease?',
    options: ['Rice, corn, and quinoa', 'Wheat, barley, and rye', 'Millet and buckwheat', 'Potato and tapioca'],
    answer: [1],
    rationale: 'Wheat, barley, and rye contain gluten, which triggers immune-mediated villous atrophy in celiac disease. Oats are safe only when certified free of cross-contamination. Rice, corn, quinoa, potato, and tapioca are naturally gluten free.',
    strategy: 'Remember BROW as the grains to avoid: barley, rye, oats if contaminated, wheat.' },

  { id: 'FND-064', cat: 'bcc', sub: 'Nutrition', type: 'mc', difficulty: 1,
    stem: 'What distinguishes a clear liquid diet from a full liquid diet?',
    options: [
      'Clear liquids are transparent at room temperature and leave minimal residue; full liquids include opaque items such as milk and cream soups',
      'Clear liquids include milk products',
      'Full liquids exclude gelatin',
      'They are the same diet'
    ],
    answer: [0],
    rationale: 'Clear liquids include broth, clear juices without pulp, gelatin, tea, and popsicles. Full liquids add milk, cream soups, ice cream, and pudding. Note that gelatin, ice cream, and popsicles all count as fluid intake because they are liquid at body temperature.',
    strategy: 'If you can see through it, it is clear. Anything with milk or pulp is full liquid.' },

  { id: 'FND-065', cat: 'bcc', sub: 'Mobility', type: 'mc', difficulty: 1,
    stem: 'On which side should a client hold a cane, and which leg advances with it?',
    options: [
      'The affected side, advancing with the strong leg',
      'The unaffected side, advancing together with the weak leg',
      'Either side, advancing with either leg',
      'In front of the body with both hands'
    ],
    answer: [1],
    rationale: 'The cane is held on the stronger side and moves forward together with the weaker leg so the two share the load and widen the base of support. Cane height should place the handle at the wrist crease with a slight elbow bend.',
    strategy: 'COAL: Cane Opposite Affected Leg. They move together.' },

  { id: 'FND-066', cat: 'bcc', sub: 'Mobility', type: 'mc', difficulty: 1,
    stem: 'When using crutches on stairs, which leg leads going up and going down?',
    options: [
      'The affected leg leads both directions',
      'The strong leg leads going up; the crutches and weak leg lead going down',
      'The crutches lead going up; the strong leg leads going down',
      'It does not matter'
    ],
    answer: [1],
    rationale: 'Going up, the strong leg goes first to pull the body upward. Going down, the crutches and the weak leg descend first to accept the load. The crutches always travel with the weaker leg.',
    strategy: 'Up with the good, down with the bad.' },

  { id: 'FND-067', cat: 'bcc', sub: 'Skin Integrity', type: 'mc', difficulty: 1,
    stem: 'How is a stage 1 pressure injury described?',
    options: [
      'Intact skin with non-blanchable erythema',
      'Partial-thickness loss with a shallow open ulcer',
      'Full-thickness loss exposing subcutaneous fat',
      'Wound base obscured by slough or eschar'
    ],
    answer: [0],
    rationale: 'Stage 1 is intact skin with redness that does not blanch under pressure. Stage 2 is partial-thickness loss including intact or ruptured serum-filled blisters, stage 3 extends into fat, stage 4 exposes bone, tendon, or muscle, and a wound obscured by slough or eschar is unstageable.',
    strategy: 'Stage 1 intact, 2 partial, 3 into fat, 4 to bone, unstageable when you cannot see the base.' },

  { id: 'FND-068', cat: 'bcc', sub: 'Comfort', type: 'mc', difficulty: 1,
    stem: 'Which pain assessment tool is appropriate for a nonverbal client with advanced dementia?',
    options: [
      'A numeric 0 to 10 scale',
      'A validated behavioral observation scale assessing facial expression, vocalization, body language, and consolability',
      'A visual analog line',
      'Asking a family member to rate the pain'
    ],
    answer: [1],
    rationale: 'Behavioral scales such as PAINAD are validated for clients who cannot self-report, and improvement after an analgesic trial supports the assessment. Numeric and visual analog scales require abstraction the client cannot perform, and family estimates are not a substitute for structured observation.',
    strategy: 'Pain scales by age and ability: FLACC under 3 or nonverbal, FACES 3 to 7, numeric 8 and up.' },

  { id: 'FND-069', cat: 'bcc', sub: 'Elimination', type: 'mc', difficulty: 1,
    stem: 'In which position should a client be placed to receive a cleansing enema?',
    options: ['Prone', 'Left lateral Sims with the right knee flexed', 'Right lateral', 'Supine with legs extended'],
    answer: [1],
    rationale: 'The left lateral Sims position follows the anatomy of the descending and sigmoid colon, allowing the solution to flow with gravity and be retained.',
    strategy: 'Enemas go in on the left, because the descending colon is on the left.' },

  { id: 'FND-070', cat: 'bcc', sub: 'Elimination', type: 'mc', difficulty: 1,
    stem: 'What type of output should the nurse expect from a new ileostomy?',
    options: [
      'Formed brown stool once daily',
      'Continuous liquid to pasty output, with increased fluid and electrolyte needs',
      'No output for the first week',
      'Bright red bleeding with each emptying'
    ],
    answer: [1],
    rationale: 'An ileostomy bypasses the colon where water is reabsorbed, so effluent is continuous and liquid to pasty, predisposing the client to dehydration and sodium and potassium losses. Colostomy output thickens progressively the more distal the stoma.',
    strategy: 'Ileostomy equals liquid output and dehydration risk. The more colon you keep, the firmer the stool.' },

  { id: 'FND-071', cat: 'hpm', sub: 'Growth and Development', type: 'mc', difficulty: 1,
    stem: 'According to Erikson, what is the developmental task of the toddler?',
    options: [
      'Trust versus mistrust',
      'Autonomy versus shame and doubt',
      'Initiative versus guilt',
      'Industry versus inferiority'
    ],
    answer: [1],
    rationale: 'Toddlers work on autonomy versus shame and doubt, which is why they insist on doing things themselves and why offering limited choices works so well. Infancy is trust versus mistrust, preschool is initiative versus guilt, and school age is industry versus inferiority.',
    strategy: 'Erikson in order: trust, autonomy, initiative, industry, identity, intimacy, generativity, integrity.' },

  { id: 'FND-072', cat: 'hpm', sub: 'Newborn Care', type: 'mc', difficulty: 1,
    stem: 'What are the five components of the Apgar score?',
    options: [
      'Appearance, Pulse, Grimace, Activity, Respiration',
      'Alertness, Position, Growth, Age, Reflex',
      'Airway, Perfusion, Glucose, Alertness, Rate',
      'Arousal, Posture, Grasp, Attention, Rooting'
    ],
    answer: [0],
    rationale: 'Each of the five components scores 0, 1, or 2 for a total of 10, assessed at 1 and 5 minutes. Acrocyanosis with a pink body is normal and scores 1 for appearance, so a perfectly healthy newborn commonly scores 8 or 9.',
    strategy: 'Scores of 7 to 10 indicate a newborn adapting well. Acrocyanosis costs a point and is normal.' },

  { id: 'FND-073', cat: 'hpm', sub: 'Newborn Care', type: 'mc', difficulty: 1,
    stem: 'Why is vitamin K administered to newborns?',
    options: [
      'To boost the immune system',
      'Because the sterile newborn gut cannot yet synthesize it, leaving the infant at risk for vitamin K deficiency bleeding',
      'To prevent jaundice',
      'As a vaccine against infection'
    ],
    answer: [1],
    rationale: 'Newborns are born with a sterile gastrointestinal tract and cannot produce vitamin K, so clotting factor synthesis is impaired and intracranial and gastrointestinal hemorrhage can occur. The injection is prophylaxis, given in the vastus lateralis.',
    strategy: 'Newborn prophylaxis: vitamin K for bleeding, erythromycin eye ointment for gonococcal conjunctivitis, hepatitis B vaccine.' },

  { id: 'FND-074', cat: 'hpm', sub: 'Antepartum', type: 'mc', difficulty: 1,
    stem: 'What are the classic warning signs of preeclampsia with severe features?',
    options: [
      'Ankle edema and fatigue',
      'Persistent headache, visual disturbances, and epigastric or right upper quadrant pain',
      'Nausea and breast tenderness',
      'Frequent urination and back pain'
    ],
    answer: [1],
    rationale: 'These three symptoms indicate central nervous system irritability and hepatic capsule stretch and signal impending eclampsia. Dependent ankle edema is common in normal pregnancy and is no longer a diagnostic criterion.',
    strategy: 'Headache, visual changes, and epigastric pain are the eclampsia warning triad. Edema alone means very little.' },

  { id: 'FND-075', cat: 'hpm', sub: 'Intrapartum', type: 'mc', difficulty: 1,
    stem: 'What does the mnemonic VEAL CHOP describe?',
    options: [
      'Stages of labor',
      'Fetal heart rate patterns and their causes',
      'Postpartum assessment',
      'Newborn reflexes'
    ],
    answer: [1],
    rationale: 'VEAL CHOP pairs each pattern with its cause: Variable with Cord compression, Early with Head compression, Accelerations are Okay, and Late with Placental insufficiency. Late decelerations require intrauterine resuscitation and variable decelerations usually respond to repositioning.',
    strategy: 'Variable-Cord, Early-Head, Acceleration-Okay, Late-Placental.' },

  { id: 'FND-076', cat: 'hpm', sub: 'Postpartum', type: 'mc', difficulty: 1,
    stem: 'What is the normal progression of lochia after childbirth?',
    options: [
      'Alba, then serosa, then rubra',
      'Rubra, then serosa, then alba',
      'Serosa, then rubra, then alba',
      'Lochia does not change'
    ],
    answer: [1],
    rationale: 'Lochia rubra is dark red for about the first 3 days, lochia serosa is pinkish-brown through about day 10, and lochia alba is creamy white for several weeks. A fleshy odor is normal; a foul odor suggests infection and return to a heavier redder flow suggests retained fragments or hemorrhage.',
    strategy: 'Red to pink to white. Any move backward in that sequence is abnormal.' },

  { id: 'FND-077', cat: 'hpm', sub: 'Immunizations', type: 'mc', difficulty: 1,
    stem: 'Which vaccines are live attenuated and therefore contraindicated in pregnancy and immunosuppression?',
    options: [
      'Inactivated influenza, Tdap, and pneumococcal',
      'MMR, varicella, live intranasal influenza, rotavirus, and yellow fever',
      'Hepatitis B and hepatitis A',
      'Meningococcal and HPV'
    ],
    answer: [1],
    rationale: 'Live attenuated vaccines contain weakened organisms that can cause disease in a client without an intact immune response, so they are avoided in pregnancy and significant immunosuppression. Inactivated and subunit vaccines carry no such risk.',
    strategy: 'Live vaccines and immunosuppression never mix. Neither do live vaccines and pregnancy.' },

  { id: 'FND-078', cat: 'hpm', sub: 'Health Screening', type: 'mc', difficulty: 1,
    stem: 'At what age does average-risk colorectal cancer screening now begin?',
    options: ['Age 30', 'Age 45', 'Age 60', 'Age 75'],
    answer: [1],
    rationale: 'Screening for average-risk adults begins at 45, using colonoscopy every 10 years or an approved stool-based test at shorter intervals. Screening exists precisely to detect disease before symptoms appear.',
    strategy: 'Any answer that says "screen only if symptoms develop" misunderstands what screening is.' },

  { id: 'FND-079', cat: 'psy', sub: 'Therapeutic Communication', type: 'mc', difficulty: 1,
    stem: 'Which type of response is generally non-therapeutic?',
    options: [
      'Reflecting the client\'s feeling',
      'Asking a "why" question',
      'Using silence',
      'Offering a broad opening statement'
    ],
    answer: [1],
    rationale: 'Why questions demand justification and provoke defensiveness. Reflecting feelings, therapeutic silence, and broad openings all encourage the client to continue and keep the focus where it belongs.',
    strategy: 'Avoid why, clichés, false reassurance, advice, and telling a client how they should feel.' },

  { id: 'FND-080', cat: 'psy', sub: 'Schizophrenia', type: 'mc', difficulty: 1,
    stem: 'Which are negative symptoms of schizophrenia?',
    options: [
      'Hallucinations and delusions',
      'Flat affect, avolition, alogia, anhedonia, and asociality',
      'Disorganized speech and agitation',
      'Paranoia and grandiosity'
    ],
    answer: [1],
    rationale: 'Negative symptoms represent the absence of normal function and respond less well to antipsychotic medication than positive symptoms, which are the added experiences of hallucinations, delusions, and disorganization.',
    strategy: 'Positive symptoms are added on. Negative symptoms are taken away, and they all start with A.' },

  { id: 'FND-081', cat: 'psy', sub: 'Bipolar Disorder', type: 'mc', difficulty: 1,
    stem: 'What is the therapeutic serum range for lithium, and what level indicates toxicity?',
    options: [
      'Therapeutic 0.6 to 1.2 mEq/L; toxicity above 1.5 mEq/L',
      'Therapeutic 10 to 20 mEq/L; toxicity above 25 mEq/L',
      'Therapeutic 5 to 10 mEq/L; toxicity above 15 mEq/L',
      'Therapeutic 0.1 to 0.3 mEq/L; toxicity above 0.5 mEq/L'
    ],
    answer: [0],
    rationale: 'Lithium has a narrow therapeutic index of 0.6 to 1.2 mEq/L with toxicity emerging above about 1.5. Because lithium is handled by the kidney like sodium, dehydration, sodium loss, vomiting, diarrhea, NSAIDs, and thiazide diuretics all raise the level.',
    strategy: 'Lithium follows sodium. Anything that depletes salt or water raises the lithium level.' },

  { id: 'FND-082', cat: 'psy', sub: 'Substance Use', type: 'mc', difficulty: 1,
    stem: 'Withdrawal from which substances can be fatal?',
    options: ['Opioids and cannabis', 'Alcohol and benzodiazepines', 'Nicotine and caffeine', 'Cocaine and amphetamines'],
    answer: [1],
    rationale: 'Alcohol and benzodiazepine withdrawal produce seizures, arrhythmias, hyperthermia, and cardiovascular collapse with meaningful mortality. Opioid withdrawal is intensely uncomfortable but rarely life-threatening, and stimulant and nicotine withdrawal are not fatal.',
    strategy: 'The two withdrawals that kill are alcohol and benzodiazepines, and both are treated with benzodiazepines.' },

  { id: 'FND-083', cat: 'psy', sub: 'Substance Use', type: 'mc', difficulty: 1,
    stem: 'Why is thiamine administered before glucose to a client with alcohol use disorder?',
    options: [
      'Thiamine improves the taste of glucose solutions',
      'Giving glucose to a thiamine-depleted client can precipitate Wernicke encephalopathy',
      'Thiamine reduces alcohol cravings',
      'Thiamine prevents liver failure'
    ],
    answer: [1],
    rationale: 'Chronic alcohol use depletes thiamine, which is required for glucose metabolism. A glucose load without thiamine can precipitate Wernicke encephalopathy, presenting with confusion, ataxia, and ophthalmoplegia, which progresses to irreversible Korsakoff syndrome.',
    strategy: 'Thiamine before glucose, always. Wernicke is reversible; Korsakoff is not.' },

  { id: 'FND-084', cat: 'psy', sub: 'Cognitive Disorders', type: 'mc', difficulty: 1,
    stem: 'What is the key difference between delirium and dementia?',
    options: [
      'Delirium is abrupt, fluctuating, and usually reversible; dementia is gradual, progressive, and irreversible',
      'Delirium is gradual and dementia is abrupt',
      'They are the same condition',
      'Only dementia impairs memory'
    ],
    answer: [0],
    rationale: 'Delirium develops over hours to days with a fluctuating level of consciousness and marked inattention, and it usually resolves when the underlying cause is treated. Dementia develops over months to years with consciousness preserved until very late. Both impair memory and they frequently coexist.',
    strategy: 'Sudden worsening in a client with dementia is delirium until proven otherwise.' },

  { id: 'FND-085', cat: 'psy', sub: 'Anxiety', type: 'mc', difficulty: 1,
    stem: 'At which level of anxiety does the client become unable to follow directions or problem solve?',
    options: ['Mild', 'Moderate', 'Severe', 'None of these'],
    answer: [2],
    rationale: 'Severe anxiety narrows the perceptual field so markedly that the client focuses on scattered details and cannot follow directions. Mild anxiety sharpens focus, moderate narrows it while learning remains possible with direction, and panic produces disorganization and loss of contact with reality.',
    strategy: 'Match the level to the perceptual field: mild widens, moderate narrows, severe scatters, panic disintegrates.' }
  ,
  { id: 'FND-086', cat: 'pharm', sub: 'Dosage Calculation', type: 'fill', difficulty: 1, unit: 'kg',
    stem: 'A client weighs 154 pounds. What is the client\'s weight in kilograms?',
    answerText: ['70', '70.0', '70 kg'],
    rationale: '154 divided by 2.2 pounds per kilogram equals 70 kg. All weight-based dosing uses kilograms, and pound-to-kilogram confusion is a documented cause of serious overdose, particularly in pediatrics.',
    strategy: 'Divide pounds by 2.2. Never dose from a weight in pounds.' },

  { id: 'FND-087', cat: 'pharm', sub: 'Dosage Calculation', type: 'fill', difficulty: 1, unit: 'mL/hr',
    stem: 'A client is to receive 1,500 mL of IV fluid over 12 hours. At what rate in milliliters per hour should the pump be set?',
    answerText: ['125', '125 mL/hr'],
    rationale: '1,500 mL divided by 12 hours equals 125 mL per hour. Pump rates are always total volume divided by total hours; drop factors are needed only for gravity tubing.',
    strategy: 'Volume over time for a pump. Multiply by the drop factor only when there is no pump.' },

  { id: 'FND-088', cat: 'pharm', sub: 'Dosage Calculation', type: 'fill', difficulty: 1, unit: 'mL',
    stem: 'An order reads 250 mg. The vial is labeled 500 mg per 4 mL. How many milliliters should the nurse withdraw?',
    answerText: ['2', '2 mL'],
    rationale: 'Desired over have times volume: 250 divided by 500 equals 0.5, multiplied by 4 mL equals 2 mL.',
    strategy: 'Desired over have, times the volume it comes in. Convert units before you divide.' },

  { id: 'FND-089', cat: 'pharm', sub: 'Antibiotics', type: 'mc', difficulty: 1,
    stem: 'Which vitamin supplement is given with isoniazid, and why?',
    options: [
      'Vitamin C, to improve absorption',
      'Pyridoxine (vitamin B6), to prevent peripheral neuropathy',
      'Vitamin D, to protect bone',
      'Folic acid, to prevent anemia'
    ],
    answer: [1],
    rationale: 'Isoniazid interferes with pyridoxine metabolism, causing peripheral neuropathy that B6 supplementation prevents. Clients also need liver enzyme monitoring and must avoid alcohol because isoniazid is hepatotoxic.',
    strategy: 'Isoniazid plus B6. Also remember rifampin turns all body fluids orange.' },

  { id: 'FND-090', cat: 'pharm', sub: 'Antibiotics', type: 'mc', difficulty: 1,
    stem: 'Which medications should not be taken with dairy products, antacids, or iron supplements?',
    options: [
      'Penicillins and cephalosporins',
      'Tetracyclines and fluoroquinolones',
      'Macrolides',
      'Sulfonamides'
    ],
    answer: [1],
    rationale: 'Calcium, magnesium, aluminum, and iron chelate with tetracyclines and fluoroquinolones in the gut, substantially reducing absorption. Both classes also cause photosensitivity, and fluoroquinolones carry a tendon rupture warning.',
    strategy: 'Tetracyclines and fluoroquinolones: separate from dairy, antacids, and iron, and use sunscreen.' },

  { id: 'FND-091', cat: 'pharm', sub: 'Antihypertensives', type: 'mc', difficulty: 1,
    stem: 'What is the most common side effect that causes clients to discontinue ACE inhibitors?',
    options: ['A persistent dry cough', 'Hair loss', 'Weight gain', 'Blurred vision'],
    answer: [0],
    rationale: 'ACE inhibitors block bradykinin breakdown, producing a persistent nonproductive cough in about 10 percent of clients that does not resolve with continued use. Switching to an angiotensin receptor blocker provides similar benefit without the cough. Angioedema is the rarer but far more dangerous effect.',
    strategy: 'ACE inhibitor problems: cough, angioedema, hyperkalemia. Angioedema is the airway emergency.' },

  { id: 'FND-092', cat: 'pharm', sub: 'Beta Blockers', type: 'mc', difficulty: 1,
    stem: 'Why must beta blockers be tapered rather than stopped abruptly?',
    options: [
      'They cause dependence',
      'Abrupt withdrawal causes rebound tachycardia, hypertension, angina, and myocardial infarction',
      'They accumulate in fat tissue',
      'They interfere with liver enzymes'
    ],
    answer: [1],
    rationale: 'Chronic beta blockade upregulates receptors, so sudden withdrawal produces exaggerated sympathetic responsiveness with dangerous rebound effects. Clonidine causes the same phenomenon.',
    strategy: 'Never stop a beta blocker or clonidine abruptly. Both cause rebound hypertension.' },

  { id: 'FND-093', cat: 'pharm', sub: 'Corticosteroids', type: 'mc', difficulty: 1,
    stem: 'Why must long-term corticosteroid therapy be tapered rather than stopped abruptly?',
    options: [
      'To avoid rebound inflammation only',
      'Because the adrenal glands are suppressed and cannot produce cortisol, risking adrenal crisis',
      'To prevent hyperglycemia',
      'To avoid weight gain'
    ],
    answer: [1],
    rationale: 'Exogenous corticosteroids suppress the hypothalamic-pituitary-adrenal axis. Abrupt withdrawal leaves the client unable to mount a cortisol response, producing hypotension, hypoglycemia, and shock. Tapering allows adrenal recovery.',
    strategy: 'Any steroid course beyond about two weeks is tapered, never stopped.' },

  { id: 'FND-094', cat: 'pharm', sub: 'Respiratory Drugs', type: 'mc', difficulty: 1,
    stem: 'When a client uses both a bronchodilator and a corticosteroid inhaler, which is used first and why?',
    options: [
      'The corticosteroid first, to reduce inflammation',
      'The bronchodilator first, so the opened airways allow better steroid deposition',
      'They may be used in any order',
      'They should be used at the same moment'
    ],
    answer: [1],
    rationale: 'The bronchodilator opens the airways so the corticosteroid reaches distal lung tissue. The mouth is rinsed after the steroid to prevent oral candidiasis.',
    strategy: 'Bronchodilator first, steroid second, rinse and spit afterward.' },

  { id: 'FND-095', cat: 'pharm', sub: 'Antidepressants', type: 'mc', difficulty: 1,
    stem: 'How long do selective serotonin reuptake inhibitors typically take to reach full therapeutic effect?',
    options: ['Within hours', '2 to 3 days', '4 to 6 weeks', '6 months'],
    answer: [2],
    rationale: 'Full antidepressant effect takes 4 to 6 weeks, though sleep and appetite often improve sooner. Because energy returns before mood lifts, suicide risk can rise early in treatment, which is why close monitoring in the first weeks matters.',
    strategy: 'Premature discontinuation is the most common cause of antidepressant treatment failure.' },

  { id: 'FND-096', cat: 'pharm', sub: 'Antidepressants', type: 'mc', difficulty: 1,
    stem: 'Which foods must be avoided by a client taking a monoamine oxidase inhibitor?',
    options: [
      'Fresh fruits and vegetables',
      'Aged cheeses, cured and smoked meats, fermented products, tap beer, and soy sauce',
      'Whole grains',
      'Lean poultry'
    ],
    answer: [1],
    rationale: 'These foods are high in tyramine, which a monoamine oxidase inhibitor cannot metabolize, producing a hypertensive crisis heralded by a sudden severe occipital headache. Fresh unaged foods are safe.',
    strategy: 'Nothing aged, cured, fermented, or smoked. Fresh is safe.' },

  { id: 'FND-097', cat: 'pharm', sub: 'Bisphosphonates', type: 'mc', difficulty: 1,
    stem: 'How should alendronate be administered?',
    options: [
      'At bedtime with a snack',
      'First thing in the morning with a full glass of plain water on an empty stomach, remaining upright for at least 30 minutes',
      'With calcium supplements',
      'Lying down to aid absorption'
    ],
    answer: [1],
    rationale: 'Bisphosphonates are poorly absorbed and severely irritating to the esophagus. Fasting administration with plain water and remaining upright prevents esophagitis and ulceration, and calcium must be separated because it blocks absorption.',
    strategy: 'Empty stomach, plain water, stay upright 30 minutes, keep calcium hours away.' },

  { id: 'FND-098', cat: 'pharm', sub: 'Vitamins and Minerals', type: 'mc', difficulty: 1,
    stem: 'What should the nurse teach a client starting ferrous sulfate?',
    options: [
      'Take it with milk to reduce upset',
      'Take it on an empty stomach with a source of vitamin C, expect dark stools, and increase fiber and fluids',
      'Stools should remain normal in color',
      'Antacids improve absorption'
    ],
    answer: [1],
    rationale: 'Iron absorbs best on an empty stomach and ascorbic acid enhances uptake. Dark green to black stools are expected and harmless, and constipation is common. Milk, antacids, tea, and coffee all reduce absorption.',
    strategy: 'Iron plus vitamin C equals absorption. Iron plus calcium, antacid, tea, or coffee equals blocked absorption.' },

  { id: 'FND-099', cat: 'safe', sub: 'Accident Prevention', type: 'mc', difficulty: 1,
    stem: 'What is the leading cause of death in adolescents?',
    options: ['Cancer', 'Unintentional injury, predominantly motor vehicle crashes', 'Infection', 'Congenital conditions'],
    answer: [1],
    rationale: 'Unintentional injury, most often motor vehicle crashes, leads adolescent mortality, which makes driving safety the highest-yield anticipatory guidance topic for this age group.',
    strategy: 'Match safety teaching to the leading cause of death at each age: infants suffocate, toddlers drown, adolescents crash.' },

  { id: 'FND-100', cat: 'safe', sub: 'Accident Prevention', type: 'mc', difficulty: 1,
    stem: 'Until what age should a child remain in a rear-facing car seat?',
    options: [
      'Until age 1',
      'Until at least age 2, or until the child exceeds the seat\'s height and weight limits',
      'Until age 5',
      'Until the child can walk'
    ],
    answer: [1],
    rationale: 'Rear-facing seating supports the head, neck, and spine during a frontal collision, and current guidance keeps children rear-facing to at least age 2 or until they outgrow the seat limits. The seat is always in the back seat, away from airbags.',
    strategy: 'Rear-facing as long as possible, back seat always, no bulky coats under the harness.' },

  { id: 'FND-101', cat: 'safe', sub: 'Home Safety', type: 'mc', difficulty: 1,
    stem: 'At what maximum temperature should a home water heater be set to prevent scald burns?',
    options: ['100 degrees Fahrenheit', '120 degrees Fahrenheit', '140 degrees Fahrenheit', '160 degrees Fahrenheit'],
    answer: [1],
    rationale: 'Water at 120 degrees Fahrenheit or below takes long enough to cause a burn that a child or older adult can withdraw. At 140 degrees a full-thickness burn occurs in seconds.',
    strategy: '120 degrees is the number. It appears in pediatric, older adult, and neuropathy teaching alike.' },

  { id: 'FND-102', cat: 'safe', sub: 'Accident Prevention', type: 'mc', difficulty: 1,
    stem: 'What is the recommended safe sleep position and environment for an infant?',
    options: [
      'Prone on a soft mattress with a quilt',
      'Supine on a firm flat surface with no loose bedding, pillows, or bumpers',
      'Side-lying with a rolled blanket for support',
      'In the parent\'s bed'
    ],
    answer: [1],
    rationale: 'Supine positioning on a firm bare sleep surface is the core recommendation for reducing sudden unexpected infant death. Room sharing without bed sharing is recommended, while prone positioning, soft bedding, and bed sharing all increase risk.',
    strategy: 'Back to sleep, firm flat surface, nothing else in the crib, room share but do not bed share.' },

  { id: 'FND-103', cat: 'safe', sub: 'Oxygen Safety', type: 'mc', difficulty: 1,
    stem: 'What is the primary hazard of home oxygen therapy?',
    options: ['Infection', 'Fire, because oxygen vigorously supports combustion', 'Dehydration', 'Hypertension'],
    answer: [1],
    rationale: 'Oxygen does not burn but dramatically accelerates combustion, so no smoking, open flames, electric razors, or petroleum-based products are permitted near it, and cylinders are secured upright away from heat.',
    strategy: 'Home oxygen teaching always leads with fire safety, never with adjusting the liter flow.' },

  { id: 'FND-104', cat: 'risk', sub: 'Diagnostic Tests', type: 'mc', difficulty: 1,
    stem: 'What must be assessed before drawing an arterial blood gas from the radial artery?',
    options: [
      'Homans sign',
      'Allen test, to confirm adequate ulnar collateral circulation',
      'Romberg test',
      'Capillary refill only'
    ],
    answer: [1],
    rationale: 'The Allen test confirms the ulnar artery can perfuse the hand if the radial artery becomes occluded after puncture. Pressure is held for at least 5 minutes afterward, and longer if the client is anticoagulated.',
    strategy: 'Allen test before radial puncture, then hold pressure five full minutes.' },

  { id: 'FND-105', cat: 'risk', sub: 'Diagnostic Tests', type: 'mc', difficulty: 1,
    stem: 'Which two questions must always be asked before a study using iodinated contrast?',
    options: [
      'Recent travel and dietary habits',
      'Allergy to contrast or shellfish, and current kidney function',
      'Exercise tolerance and sleep quality',
      'Family history and occupation'
    ],
    answer: [1],
    rationale: 'Contrast can cause anaphylaxis in sensitized clients and contrast-induced nephropathy in those with impaired renal function. Metformin is also typically held around the study because reduced clearance raises the risk of lactic acidosis.',
    strategy: 'Contrast studies: allergies, kidney function, and hold the metformin.' },

  { id: 'FND-106', cat: 'risk', sub: 'Diagnostic Tests', type: 'mc', difficulty: 1,
    stem: 'What must be verified before a client undergoes magnetic resonance imaging?',
    options: [
      'Recent dietary intake',
      'The presence of any implanted metal, pacemaker, aneurysm clip, cochlear implant, or metal fragment',
      'Blood glucose',
      'Visual acuity'
    ],
    answer: [1],
    rationale: 'The magnetic field can displace or heat ferromagnetic implants and cause device malfunction or lethal arrhythmia, so a thorough metal screening is mandatory. Claustrophobia is managed with premedication or an open scanner rather than by canceling the study.',
    strategy: 'MRI screening is about metal. Ask about every implant, device, and occupational metal exposure.' },

  { id: 'FND-107', cat: 'risk', sub: 'Postprocedure Care', type: 'mc', difficulty: 1,
    stem: 'Why must a client remain NPO after a bronchoscopy or upper endoscopy until the gag reflex returns?',
    options: [
      'To prevent nausea',
      'Because topical anesthesia suppresses the gag reflex and oral intake would cause aspiration',
      'To keep the throat dry for imaging',
      'To reduce bleeding'
    ],
    answer: [1],
    rationale: 'Topical anesthetic abolishes the protective gag reflex, so anything swallowed can enter the airway. The reflex is checked before any fluids are offered.',
    strategy: 'Any procedure that numbs the throat means nothing by mouth until the gag reflex is back.' },

  { id: 'FND-108', cat: 'risk', sub: 'Respiratory', type: 'mc', difficulty: 1,
    stem: 'What does a high-pressure alarm on a mechanical ventilator most often indicate?',
    options: [
      'Circuit disconnection',
      'Increased resistance from secretions, kinked tubing, biting, or bronchospasm',
      'A cuff leak',
      'Extubation'
    ],
    answer: [1],
    rationale: 'High-pressure alarms mean something is obstructing airflow. Disconnection, cuff leaks, and extubation all reduce resistance and produce low-pressure alarms instead.',
    strategy: 'High pressure means blocked. Low pressure means disconnected or leaking.' },

  { id: 'FND-109', cat: 'risk', sub: 'Respiratory', type: 'mc', difficulty: 1,
    stem: 'How long should each pass of tracheal suctioning last, and when is suction applied?',
    options: [
      'Up to 30 seconds, with suction applied on insertion',
      'No more than 10 to 15 seconds, with suction applied only on withdrawal',
      'Up to 60 seconds, with continuous suction throughout',
      'Until secretions clear completely, regardless of time'
    ],
    answer: [1],
    rationale: 'Limiting each pass to 10 to 15 seconds with suction applied only on withdrawal prevents hypoxemia, bradycardia, and mucosal injury. The client is hyperoxygenated between passes, and saline is not instilled.',
    strategy: 'Suction on the way out only, 10 to 15 seconds, hyperoxygenate between passes.' },

  { id: 'FND-110', cat: 'risk', sub: 'Respiratory', type: 'mc', difficulty: 1,
    stem: 'What findings in a chest drainage system are expected versus concerning?',
    options: [
      'Continuous vigorous bubbling in the water seal is expected',
      'Tidaling in the water seal is expected; continuous bubbling in the water seal indicates an air leak',
      'Absence of all drainage is always expected',
      'Bubbling in the suction control chamber indicates a leak'
    ],
    answer: [1],
    rationale: 'Tidaling reflects normal pressure changes with respiration. Continuous bubbling in the water seal chamber indicates an air leak in the system or an unresolved pneumothorax, whereas gentle bubbling in the suction control chamber simply means the suction is working.',
    strategy: 'Water seal bubbling is bad. Suction chamber bubbling is normal. Know which chamber you are looking at.' },

  { id: 'FND-111', cat: 'phys', sub: 'Gastrointestinal', type: 'mc', difficulty: 1,
    stem: 'How are hepatitis A and hepatitis B transmitted?',
    options: [
      'Both by blood and body fluids',
      'Hepatitis A by the fecal-oral route; hepatitis B by blood, sexual contact, and perinatally',
      'Both by the fecal-oral route',
      'Hepatitis A by blood; hepatitis B by contaminated food'
    ],
    answer: [1],
    rationale: 'Hepatitis A and E spread through contaminated food and water by the fecal-oral route. Hepatitis B, C, and D are bloodborne, with B also transmitted sexually and perinatally. Vaccines exist for A and B but not for C.',
    strategy: 'A and E come from the mouth. B, C, and D come from blood. Vaccines for A and B only.' },

  { id: 'FND-112', cat: 'phys', sub: 'Gastrointestinal', type: 'mc', difficulty: 1,
    stem: 'What is the purpose of lactulose in hepatic encephalopathy?',
    options: [
      'To reduce blood pressure',
      'To acidify the colon, trapping ammonia as non-absorbable ammonium and increasing stool frequency',
      'To increase appetite',
      'To reduce ascites'
    ],
    answer: [1],
    rationale: 'Colonic bacteria metabolize lactulose to acids that convert ammonia to ammonium, which cannot be absorbed, while its osmotic effect removes it in the stool. The dose is titrated to produce two to three soft stools daily, so diarrhea is the therapeutic endpoint rather than a side effect.',
    strategy: 'Lactulose is titrated to stools, not to comfort. Two to three soft stools a day is the goal.' },

  { id: 'FND-113', cat: 'phys', sub: 'Renal', type: 'mc', difficulty: 1,
    stem: 'Why are phosphate binders taken with meals?',
    options: [
      'To reduce stomach upset',
      'Because they work by binding dietary phosphorus in the gut, which requires food to be present',
      'To improve their absorption',
      'To prevent constipation'
    ],
    answer: [1],
    rationale: 'Phosphate binders act locally in the gastrointestinal tract, binding phosphorus from food so it cannot be absorbed. Taken between meals they bind nothing and provide no benefit.',
    strategy: 'Binders with every meal, every time. This is one of the most commonly missed teaching points in kidney care.' },

  { id: 'FND-114', cat: 'phys', sub: 'Renal', type: 'mc', difficulty: 1,
    stem: 'How does the nurse assess the patency of an arteriovenous fistula?',
    options: [
      'By checking the distal pulse only',
      'By palpating for a thrill and auscultating for a bruit',
      'By measuring the blood pressure in that arm',
      'By observing skin color'
    ],
    answer: [1],
    rationale: 'A palpable vibration and an audible whooshing sound confirm turbulent arterial flow into the vein and therefore patency. Absence of both indicates thrombosis requiring immediate notification. Blood pressures, venipuncture, and IV insertion are never performed in the access arm.',
    strategy: 'Feel the thrill, hear the bruit, every shift. No cuff, no needle, no constriction in that arm.' },

  { id: 'FND-115', cat: 'phys', sub: 'Musculoskeletal', type: 'mc', difficulty: 1,
    stem: 'What are the six Ps of neurovascular assessment?',
    options: [
      'Pain, pallor, pulselessness, paresthesia, paralysis, poikilothermia',
      'Position, posture, pressure, pulse, pupil, perfusion',
      'Pallor, pruritus, pain, pressure, pulse, pyrexia',
      'Pain, pressure, pulse, pupil, palpation, percussion'
    ],
    answer: [0],
    rationale: 'These six findings assess circulation and nerve function distal to an injury, cast, or traction. Pain out of proportion and worsened by passive stretch appears first in compartment syndrome, while pulselessness is a very late finding.',
    strategy: 'Do not wait for pulselessness. Pain and paresthesia come long before the pulse disappears.' },

  { id: 'FND-116', cat: 'phys', sub: 'Musculoskeletal', type: 'mc', difficulty: 1,
    stem: 'What are the standard posterior hip precautions after a total hip arthroplasty?',
    options: [
      'No restrictions once pain is controlled',
      'Avoid hip flexion beyond 90 degrees, do not cross the legs past midline, and avoid internal rotation',
      'Avoid all weight bearing for six weeks',
      'Keep the hip flexed at all times'
    ],
    answer: [1],
    rationale: 'These three movements dislocate a posterior-approach prosthesis. Elevated toilet seats, chairs with arms, reachers, and abduction pillows all exist to enforce them. Sudden severe pain with a shortened internally rotated leg indicates dislocation.',
    strategy: 'No bending past 90, no crossing midline, no turning the toes inward. Raise every seat in the house.' },

  { id: 'FND-117', cat: 'phys', sub: 'Hematologic', type: 'mc', difficulty: 1,
    stem: 'Which anemia is characterized by microcytic hypochromic red cells with a low ferritin?',
    options: ['Pernicious anemia', 'Iron deficiency anemia', 'Aplastic anemia', 'Sickle cell anemia'],
    answer: [1],
    rationale: 'Iron deficiency produces small pale red cells with depleted ferritin stores and an elevated total iron binding capacity. Vitamin B12 and folate deficiency produce macrocytic anemia, and anemia of chronic disease shows normal or high ferritin.',
    strategy: 'Microcytic equals iron. Macrocytic equals B12 or folate. Ferritin discriminates.' },

  { id: 'FND-118', cat: 'phys', sub: 'Hematologic', type: 'mc', difficulty: 1,
    stem: 'Which precautions apply to a client with severe thrombocytopenia?',
    options: [
      'Encourage vigorous brushing and flossing',
      'Soft toothbrush and electric razor, no rectal temperatures or suppositories, no intramuscular injections, and avoid aspirin and NSAIDs',
      'Encourage contact sports for conditioning',
      'No special precautions are needed'
    ],
    answer: [1],
    rationale: 'Bleeding precautions minimize mucosal and tissue trauma at sites that cannot be compressed. Aspirin and NSAIDs further impair the platelet function that remains, compounding the risk.',
    strategy: 'Soft brush, electric razor, nothing rectal, no IM injections, no NSAIDs.' },

  { id: 'FND-119', cat: 'phys', sub: 'Immune', type: 'mc', difficulty: 1,
    stem: 'At what CD4 count does a client with HIV meet the definition of AIDS and begin prophylaxis against Pneumocystis pneumonia?',
    options: ['Below 800 cells/µL', 'Below 500 cells/µL', 'Below 200 cells/µL', 'Below 50 cells/µL'],
    answer: [2],
    rationale: 'A CD4 count below 200 defines AIDS and marks the threshold for Pneumocystis prophylaxis, usually with trimethoprim-sulfamethoxazole. Below 50, prophylaxis against Mycobacterium avium complex is added. Live vaccines are contraindicated at these levels.',
    strategy: 'Under 200 means AIDS and PCP prophylaxis. Under 50 adds MAC prophylaxis.' },

  { id: 'FND-120', cat: 'psy', sub: 'Suicide Risk', type: 'mc', difficulty: 1,
    stem: 'What is the strongest single predictor of a completed suicide?',
    options: ['Living alone', 'A previous suicide attempt', 'Chronic pain', 'Recent job loss'],
    answer: [1],
    rationale: 'A prior attempt predicts completion more strongly than any other single factor. Access to lethal means is the strongest modifiable factor, which is why means restriction is a core safety intervention.',
    strategy: 'Always ask about prior attempts and about access to means, especially firearms.' },

  { id: 'FND-121', cat: 'psy', sub: 'Grief and Loss', type: 'mc', difficulty: 1,
    stem: 'How should a nurse explain death to a preschool-age child?',
    options: [
      '"Grandma went to sleep and will not wake up."',
      '"Grandma died. That means her body stopped working and she cannot come back. It is not because of anything you did."',
      '"Grandma went away on a long trip."',
      '"You are too young to understand."'
    ],
    answer: [1],
    rationale: 'Preschoolers think concretely and engage in magical thinking, so they need the word died, a concrete explanation, and explicit reassurance that they did not cause the death. Sleep and journey euphemisms create fear of sleeping and expectation of return.',
    strategy: 'Use the word died with children. Euphemisms cause more distress than the truth does.' },

  { id: 'FND-122', cat: 'psy', sub: 'Eating Disorders', type: 'mc', difficulty: 1,
    stem: 'What is refeeding syndrome, and which electrolyte change most defines it?',
    options: [
      'Rebound hyperglycemia; elevated potassium',
      'An insulin surge driving phosphate, potassium, and magnesium into cells, with hypophosphatemia the hallmark',
      'Excess protein intake; elevated BUN',
      'Fluid overload; hypernatremia'
    ],
    answer: [1],
    rationale: 'Reintroducing nutrition to a severely malnourished client triggers insulin release that drives electrolytes intracellularly, causing arrhythmia, heart failure, and death. Calories are advanced slowly with daily electrolyte monitoring and repletion.',
    strategy: 'Refeeding syndrome: phosphate is the one that kills. Start low and go slow.' },

  { id: 'FND-123', cat: 'psy', sub: 'Personality Disorders', type: 'mc', difficulty: 1,
    stem: 'What is splitting, and how is it managed?',
    options: [
      'Dividing attention between tasks; managed by simplifying assignments',
      'Viewing people as all good or all bad; managed by consistent limits communicated across the whole team',
      'Forgetting recent events; managed by reorientation',
      'Hearing voices; managed with antipsychotics'
    ],
    answer: [1],
    rationale: 'Splitting is a defense in which people are seen in absolute terms, and it divides staff into allies and adversaries. The intervention is a unified team applying identical limits, communicated openly, so the distortion has nothing to work with.',
    strategy: 'Splitting is defeated by staff consistency, not by picking a side or by confronting the client.' },

  { id: 'FND-124', cat: 'psy', sub: 'End of Life', type: 'mc', difficulty: 1,
    stem: 'Which changes are expected in the final days of life?',
    options: [
      'Increased appetite, rising blood pressure, and increased urine output',
      'Decreased oral intake, increased sleeping, cool mottled extremities, and irregular breathing',
      'Improved mobility and alertness',
      'Rising body temperature with vigorous coughing'
    ],
    answer: [1],
    rationale: 'As circulation centralizes, the extremities mottle and cool, intake falls, somnolence deepens, and breathing becomes irregular, often with Cheyne-Stokes patterns and pooled secretions. Blood pressure and urine output fall. Preparing families for these changes substantially reduces their distress.',
    strategy: 'The death rattle distresses the family far more than the client. Explain it before it happens.' },

  { id: 'FND-125', cat: 'bcc', sub: 'Comfort', type: 'mc', difficulty: 1,
    stem: 'How should cold therapy be applied to an acute soft tissue injury?',
    options: [
      'Ice applied directly to the skin for 60 minutes',
      'A cloth-wrapped cold pack for 15 to 20 minutes at a time with breaks between applications',
      'Continuous cold for 8 hours',
      'Heat instead, during the first 24 hours'
    ],
    answer: [1],
    rationale: 'Cold is applied with a barrier for 15 to 20 minutes with rest periods, reducing swelling and pain without causing frostbite, nerve injury, or reflex vasodilation. Heat in the first 24 to 48 hours increases swelling.',
    strategy: 'Cold for the first 24 to 48 hours, then heat. Never apply ice directly to skin.' },

  { id: 'FND-126', cat: 'bcc', sub: 'Nutrition', type: 'mc', difficulty: 1,
    stem: 'How are ice chips recorded when calculating fluid intake?',
    options: [
      'As their full volume',
      'As approximately half their volume',
      'They are not counted',
      'As double their volume'
    ],
    answer: [1],
    rationale: 'Ice chips are recorded as roughly half their volume once melted. Gelatin, ice cream, popsicles, and any item liquid at body temperature all count toward intake, which matters greatly for clients on fluid restriction.',
    strategy: 'Ice counts as half. Gelatin and ice cream count in full.' },

  { id: 'FND-127', cat: 'bcc', sub: 'Skin Integrity', type: 'mc', difficulty: 1,
    stem: 'What do the colors of a wound bed indicate about the goal of care?',
    options: [
      'Red means debride, yellow means protect, black means moisten',
      'Red means protect, yellow means cleanse, black means debride',
      'All colors are treated identically',
      'Color has no bearing on wound care'
    ],
    answer: [1],
    rationale: 'Red granulation tissue is healthy and protected with a moist dressing. Yellow slough is devitalized and must be cleansed or debrided. Black eschar requires debridement, except for stable dry eschar on an ischemic heel, which is left intact as a biological cover.',
    strategy: 'Red protect, yellow cleanse, black debride.' },

  { id: 'FND-128', cat: 'bcc', sub: 'Mobility', type: 'mc', difficulty: 1,
    stem: 'When assisting a client with one-sided weakness to ambulate, where should the nurse stand?',
    options: [
      'On the strong side, holding the strong arm',
      'On the weak side, slightly behind the client, using a gait belt',
      'Directly in front of the client',
      'Behind the client, holding the gown'
    ],
    answer: [1],
    rationale: 'Standing on the weaker side slightly behind allows the nurse to support the client if the weak leg buckles, and a gait belt provides a secure hold. Holding clothing offers no control and standing in front prevents forward progress.',
    strategy: 'Stand on the weak side, slightly behind, gait belt in hand.' },

  { id: 'FND-129', cat: 'bcc', sub: 'Nutrition', type: 'mc', difficulty: 1,
    stem: 'How should levothyroxine be taken?',
    options: [
      'With breakfast for better tolerance',
      'On an empty stomach with water 30 to 60 minutes before breakfast, separated from calcium, iron, and antacids by at least 4 hours',
      'At bedtime with a snack',
      'With calcium supplements'
    ],
    answer: [1],
    rationale: 'Food, calcium, iron, and antacids substantially reduce levothyroxine absorption. Consistency of timing matters as much as the timing itself, because dose adjustments are made against a steady absorption pattern.',
    strategy: 'Empty stomach, morning, water only, calcium and iron four hours away.' },

  { id: 'FND-130', cat: 'hpm', sub: 'Aging', type: 'mc', difficulty: 1,
    stem: 'Which change is a normal part of aging?',
    options: [
      'Confusion and disorientation',
      'Decreased skin elasticity, reduced renal blood flow, and slower peristalsis',
      'Urinary incontinence',
      'Memory loss that interferes with daily activities'
    ],
    answer: [1],
    rationale: 'Most organ systems slow with age, reducing skin elasticity, glomerular filtration, lung elasticity, and gastrointestinal motility. Confusion, incontinence, and functionally impairing memory loss are never normal aging and require evaluation.',
    strategy: 'New confusion in an older adult is a urinary tract infection, a medication, or hypoxia until proven otherwise.' }
]
