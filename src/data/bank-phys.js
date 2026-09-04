export default [
  { id: 'PHY-001', cat: 'phys', sub: 'Cardiovascular', type: 'mc', difficulty: 2,
    stem: 'A client with left-sided heart failure will most likely present with which findings?',
    options: [
      'Peripheral edema, jugular venous distention, and hepatomegaly',
      'Dyspnea, orthopnea, crackles, and frothy pink-tinged sputum',
      'Ascites and weight gain only',
      'Splenomegaly'
    ],
    answer: [1],
    rationale: 'Left ventricular failure backs blood up into the pulmonary circulation, producing pulmonary congestion with dyspnea, orthopnea, crackles, and in severe cases pulmonary edema. Right-sided failure backs blood into the systemic venous circulation, producing peripheral edema, jugular distention, hepatomegaly, and ascites.',
    strategy: 'Left equals lungs, right equals rest of the body. That single distinction answers most heart failure questions.' },

  { id: 'PHY-002', cat: 'phys', sub: 'Cardiovascular', type: 'mc', difficulty: 3,
    stem: 'A client with acute decompensated heart failure develops severe dyspnea and pink frothy sputum with oxygen saturation of 84 percent. What should the nurse do first?',
    options: [
      'Place the client flat and administer a sedative',
      'Sit the client upright with legs dependent, apply high-flow oxygen, and prepare to administer IV diuretics and other ordered therapy',
      'Encourage oral fluids',
      'Obtain a chest radiograph before any intervention'
    ],
    answer: [1],
    rationale: 'Flash pulmonary edema requires immediate reduction of preload and improvement of oxygenation. Upright positioning with dependent legs pools blood peripherally and maximizes lung expansion, and high-flow oxygen with diuresis and vasodilation follows. Supine positioning worsens the congestion.',
    strategy: 'Pulmonary edema: sit them up, feet down, oxygen on, diurese. Never lay them flat.' },

  { id: 'PHY-003', cat: 'phys', sub: 'Cardiovascular', type: 'sata', difficulty: 1,
    stem: 'Which findings indicate an acute myocardial infarction rather than stable angina? Select all that apply.',
    options: [
      'Pain not relieved by rest or nitroglycerin',
      'Pain lasting more than 20 minutes',
      'Pain consistently relieved by rest within 5 minutes',
      'Diaphoresis, nausea, and a sense of impending doom',
      'Elevated troponin',
      'Pain occurring predictably with the same level of exertion'
    ],
    answer: [0, 1, 3, 4],
    rationale: 'Infarction produces prolonged pain unrelieved by rest or nitrates, autonomic symptoms, and biomarker elevation from myocardial necrosis. Predictable exertional pain relieved by rest within minutes without biomarker rise characterizes stable angina.',
    strategy: 'Stable angina is predictable and relieved. Infarction is prolonged, unrelieved, and raises troponin.' },

  { id: 'PHY-004', cat: 'phys', sub: 'Cardiovascular', type: 'mc', difficulty: 2,
    stem: 'A client presents with chest pain. Which initial interventions should the nurse anticipate?',
    options: [
      'Ambulation and a light meal',
      'Oxygen if hypoxemic, aspirin, nitroglycerin, a 12-lead electrocardiogram within 10 minutes, IV access, and continuous monitoring',
      'Sedation only',
      'Discharge home with follow-up'
    ],
    answer: [1],
    rationale: 'Initial acute coronary syndrome care includes an electrocardiogram within 10 minutes of arrival, aspirin unless contraindicated, nitroglycerin for ongoing pain, oxygen for hypoxemia, IV access, and continuous monitoring, with troponin drawn and reperfusion evaluated urgently.',
    strategy: 'Chest pain protocol: ECG in 10 minutes, aspirin chewed, nitroglycerin, IV, monitor, troponin.' },

  { id: 'PHY-005', cat: 'phys', sub: 'Respiratory', type: 'mc', difficulty: 2,
    stem: 'A client with chronic obstructive pulmonary disease is taught pursed-lip breathing. What is its purpose?',
    options: [
      'To increase the respiratory rate',
      'To create back pressure that keeps small airways open during exhalation, preventing air trapping',
      'To increase carbon dioxide retention',
      'To strengthen the diaphragm only'
    ],
    answer: [1],
    rationale: 'Pursed-lip exhalation generates positive back pressure that splints collapsible airways open, allowing more complete emptying and reducing air trapping and dyspnea. It slows the respiratory rate and improves carbon dioxide elimination.',
    strategy: 'Pursed-lip breathing: inhale through the nose, exhale through pursed lips twice as long.' },

  { id: 'PHY-006', cat: 'phys', sub: 'Respiratory', type: 'mc', difficulty: 2,
    stem: 'A client with an asthma exacerbation initially had loud wheezing but now has a markedly quiet chest with increasing work of breathing. What does this indicate?',
    options: [
      'The asthma attack is resolving',
      'Worsening obstruction with severely reduced airflow, a silent chest indicating impending respiratory failure',
      'The client is faking symptoms',
      'A pneumothorax has resolved'
    ],
    answer: [1],
    rationale: 'Wheezing requires airflow, so its disappearance in a client whose work of breathing is increasing signals that airflow has become dangerously reduced. A silent chest is an ominous sign requiring immediate intervention and preparation for intubation.',
    strategy: 'A quiet chest in asthma is not improvement. No air moving means no wheeze.' },

  { id: 'PHY-007', cat: 'phys', sub: 'Respiratory', type: 'mc', difficulty: 2,
    stem: 'A client with pneumonia has thick tenacious secretions. Which intervention best promotes airway clearance?',
    options: [
      'Restrict fluids',
      'Ensure adequate hydration, use humidification, encourage effective coughing and deep breathing, and mobilize the client',
      'Administer a cough suppressant',
      'Maintain strict bed rest'
    ],
    answer: [1],
    rationale: 'Systemic hydration thins secretions more effectively than any other measure, and humidification, effective coughing, and mobility move them out. Fluid restriction thickens secretions, cough suppression traps them, and immobility promotes pooling and atelectasis.',
    strategy: 'The best mucolytic is water. Hydrate, humidify, mobilize, and cough.' },

  { id: 'PHY-008', cat: 'phys', sub: 'Endocrine', type: 'mc', difficulty: 2,
    stem: 'A client with type 1 diabetes presents with a glucose of 480 mg/dL, Kussmaul respirations, fruity breath, and lethargy. Which intervention should the nurse anticipate first?',
    options: [
      'Subcutaneous long-acting insulin only',
      'IV isotonic fluid resuscitation followed by a regular insulin infusion, with close potassium monitoring and replacement',
      'Oral hypoglycemic agents',
      'Encouraging oral fluids only'
    ],
    answer: [1],
    rationale: 'Diabetic ketoacidosis is treated with aggressive isotonic fluid resuscitation first to restore perfusion, then a regular insulin infusion, with potassium replacement because insulin drives potassium into cells and can cause fatal hypokalemia even when the initial level appears normal or high.',
    strategy: 'DKA order: fluids, then insulin, and watch potassium the whole time. Only regular insulin is given intravenously.' },

  { id: 'PHY-009', cat: 'phys', sub: 'Endocrine', type: 'mc', difficulty: 2,
    stem: 'A client with hypothyroidism is most likely to report which symptoms?',
    options: [
      'Weight loss, heat intolerance, and palpitations',
      'Fatigue, cold intolerance, weight gain, constipation, and dry skin',
      'Tremor and diarrhea',
      'Exophthalmos and insomnia'
    ],
    answer: [1],
    rationale: 'Deficient thyroid hormone slows metabolism throughout the body, producing fatigue, cold intolerance, weight gain, constipation, dry skin, bradycardia, and depression. The listed alternatives describe hyperthyroidism.',
    strategy: 'Hypothyroid equals slow, cold, heavy, dry. Hyperthyroid equals fast, hot, thin, sweaty.' },

  { id: 'PHY-010', cat: 'phys', sub: 'Endocrine', type: 'mc', difficulty: 3,
    stem: 'A client with Graves disease develops a temperature of 40 degrees Celsius, heart rate of 168, agitation, and vomiting after surgery. What should the nurse suspect?',
    options: ['Myxedema coma', 'Thyroid storm', 'Adrenal crisis', 'Malignant hyperthermia'],
    answer: [1],
    rationale: 'Thyroid storm is a life-threatening hypermetabolic crisis triggered by stress, surgery, or infection in a client with hyperthyroidism, producing extreme fever, tachyarrhythmia, agitation, and gastrointestinal symptoms. Treatment includes beta blockade, thionamides, iodine, corticosteroids, and aggressive cooling.',
    strategy: 'Thyroid storm: everything fast and hot. Myxedema coma: everything slow and cold.' },

  { id: 'PHY-011', cat: 'phys', sub: 'Endocrine', type: 'mc', difficulty: 2,
    stem: 'A client with Addison disease who missed several doses of corticosteroid presents with hypotension, hyperkalemia, hyponatremia, and profound weakness. What should the nurse anticipate?',
    options: [
      'Insulin administration',
      'IV hydrocortisone and aggressive isotonic fluid resuscitation for adrenal crisis',
      'Diuretic therapy',
      'Potassium supplementation'
    ],
    answer: [1],
    rationale: 'Adrenal crisis from cortisol and aldosterone deficiency produces vascular collapse, hyperkalemia, and hyponatremia, and it is treated with immediate IV glucocorticoid and volume replacement. Adding potassium or diuretics would be dangerous.',
    strategy: 'Addison equals low everything except potassium. Cushing equals high everything except potassium.' },

  { id: 'PHY-012', cat: 'phys', sub: 'Gastrointestinal', type: 'mc', difficulty: 3,
    stem: 'A client with cirrhosis develops hematemesis. What should the nurse suspect?',
    options: [
      'Peptic ulcer only',
      'Bleeding esophageal varices, a life-threatening emergency requiring airway protection, volume resuscitation, and urgent endoscopy',
      'Gastritis',
      'Mallory-Weiss tear only'
    ],
    answer: [1],
    rationale: 'Portal hypertension from cirrhosis produces esophageal varices that bleed torrentially, and coexisting coagulopathy and thrombocytopenia compound the hemorrhage. Airway protection, large-bore access, blood products, vasoactive agents, and urgent endoscopic band ligation are required.',
    strategy: 'Cirrhosis plus vomiting blood equals varices. This is a high-mortality emergency.' },

  { id: 'PHY-013', cat: 'phys', sub: 'Gastrointestinal', type: 'mc', difficulty: 2,
    stem: 'A client with a small bowel obstruction is most likely to present with which findings?',
    options: [
      'Absent bowel sounds from the outset with no vomiting',
      'Colicky abdominal pain, vomiting, abdominal distention, and high-pitched bowel sounds early that become absent later',
      'Diarrhea with normal appetite',
      'Painless rectal bleeding'
    ],
    answer: [1],
    rationale: 'Mechanical obstruction produces hyperactive high-pitched sounds proximal to the blockage as the bowel struggles against it, followed by silence as it fatigues. Vomiting is prominent and early with proximal obstruction. Management includes nothing by mouth, nasogastric decompression, and fluid and electrolyte correction.',
    strategy: 'Mechanical obstruction: high-pitched sounds first, silence later. Paralytic ileus is silent from the start.' },

  { id: 'PHY-014', cat: 'phys', sub: 'Gastrointestinal', type: 'mc', difficulty: 2,
    stem: 'A client with abdominal pain develops a rigid board-like abdomen with rebound tenderness and absent bowel sounds. What should the nurse do?',
    options: [
      'Administer a laxative',
      'Keep the client NPO, notify the provider immediately, and prepare for possible surgery, as this suggests peritonitis from perforation',
      'Encourage ambulation and oral fluids',
      'Apply heat to the abdomen'
    ],
    answer: [1],
    rationale: 'Involuntary guarding with a rigid abdomen and rebound tenderness indicates peritoneal irritation, most often from a perforated viscus, and is a surgical emergency. Laxatives, oral intake, and heat can all worsen perforation and spread contamination.',
    strategy: 'Rigid abdomen with rebound equals peritonitis. Nothing by mouth, no heat, no laxatives, call surgery.' },

  { id: 'PHY-015', cat: 'phys', sub: 'Renal', type: 'mc', difficulty: 3,
    stem: 'A client with end-stage kidney disease is receiving hemodialysis. Which finding immediately after dialysis requires further assessment?',
    options: [
      'Weight loss of 2 kg',
      'Headache, nausea, restlessness, and confusion',
      'Improved energy',
      'Blood pressure returning toward baseline'
    ],
    answer: [1],
    rationale: 'Headache, nausea, restlessness, and confusion after dialysis suggest disequilibrium syndrome, caused by rapid removal of urea creating an osmotic gradient that draws water into brain cells. It can progress to seizures and is prevented by slower initial dialysis.',
    strategy: 'Post-dialysis neurological symptoms equal disequilibrium syndrome. Weight loss and improved energy are expected.' },

  { id: 'PHY-016', cat: 'phys', sub: 'Renal', type: 'mc', difficulty: 2,
    stem: 'A client with acute kidney injury is in the oliguric phase. Which dietary modification is appropriate?',
    options: [
      'High potassium and high protein',
      'Restricted potassium, phosphorus, sodium, and fluid, with controlled protein intake',
      'Unlimited fluids',
      'High sodium'
    ],
    answer: [1],
    rationale: 'During oliguria the kidney cannot excrete potassium, phosphorus, sodium, water, or nitrogenous waste, so all are restricted while providing adequate calories to prevent catabolism. Potassium restriction is the most urgent because hyperkalemia is the leading cause of death in acute kidney injury.',
    strategy: 'Oliguric kidney failure: restrict potassium, phosphorus, sodium, fluid, and moderate the protein.' },

  { id: 'PHY-017', cat: 'phys', sub: 'Neurological', type: 'mc', difficulty: 2,
    stem: 'A client is admitted with a suspected ischemic stroke. Which nursing action is a priority in the first hours?',
    options: [
      'Provide a regular diet immediately',
      'Perform a dysphagia screen before any oral intake, monitor neurological status frequently, and manage blood pressure per protocol',
      'Ambulate the client independently',
      'Administer anticoagulants before imaging'
    ],
    answer: [1],
    rationale: 'Dysphagia occurs in a large proportion of strokes and aspiration pneumonia is a leading complication, so a swallow screen precedes any oral intake including medications. Frequent neurological assessment detects extension or hemorrhagic transformation, and permissive hypertension is often maintained to preserve penumbral perfusion.',
    strategy: 'After stroke: nothing by mouth until the swallow screen passes, and no anticoagulation before imaging excludes bleeding.' },

  { id: 'PHY-018', cat: 'phys', sub: 'Neurological', type: 'mc', difficulty: 2,
    stem: 'A client presents with ascending symmetric weakness that began in the legs and is progressing upward following a recent respiratory infection. What should the nurse monitor most closely?',
    options: [
      'Blood glucose',
      'Respiratory function including vital capacity and negative inspiratory force, since ascending paralysis can reach the diaphragm',
      'Visual acuity',
      'Bowel sounds'
    ],
    answer: [1],
    rationale: 'Guillain-Barre syndrome produces ascending paralysis that can involve respiratory muscles, so serial vital capacity and inspiratory force measurements identify the need for intubation before hypoxemia develops. Autonomic instability is also monitored.',
    strategy: 'In Guillain-Barre, watch the breathing. Vital capacity falls before oxygen saturation does.' },

  { id: 'PHY-019', cat: 'phys', sub: 'Neurological', type: 'mc', difficulty: 3,
    stem: 'A client with myasthenia gravis presents with increasing weakness. Which finding distinguishes myasthenic crisis from cholinergic crisis?',
    options: [
      'Both present identically with no distinguishing features',
      'Myasthenic crisis improves with edrophonium or additional anticholinesterase, while cholinergic crisis worsens and includes excessive salivation, lacrimation, and diarrhea',
      'Cholinergic crisis causes dry mouth',
      'Myasthenic crisis causes bradycardia only'
    ],
    answer: [1],
    rationale: 'Both produce profound weakness with respiratory failure risk, but cholinergic crisis arises from excess anticholinesterase medication and adds muscarinic excess with salivation, lacrimation, urination, diarrhea, and bradycardia. In both, airway support is the priority.',
    strategy: 'Too little medication equals myasthenic crisis. Too much equals cholinergic crisis with SLUDGE symptoms.' },

  { id: 'PHY-020', cat: 'phys', sub: 'Musculoskeletal', type: 'mc', difficulty: 3,
    stem: 'A client with a long bone fracture develops sudden dyspnea, confusion, tachycardia, and a petechial rash across the chest and axilla. What should the nurse suspect?',
    options: ['Pulmonary embolism from a deep vein thrombosis', 'Fat embolism syndrome', 'Anaphylaxis', 'Sepsis'],
    answer: [1],
    rationale: 'The triad of respiratory distress, neurological changes, and a petechial rash within 24 to 72 hours of a long bone or pelvic fracture characterizes fat embolism syndrome. The petechial rash distinguishes it from thromboembolism. Treatment is supportive with oxygenation and early fracture stabilization.',
    strategy: 'Petechiae plus dyspnea plus confusion after a long bone fracture equals fat embolism.' },

  { id: 'PHY-021', cat: 'phys', sub: 'Hematologic', type: 'mc', difficulty: 2,
    stem: 'A client with sickle cell disease is admitted in vaso-occlusive crisis. Which interventions are the priority?',
    options: [
      'Restrict fluids and apply cold packs',
      'Aggressive hydration, adequate opioid analgesia, oxygen if hypoxemic, and warmth to the affected areas',
      'Ambulation and cold therapy',
      'Withholding analgesia to prevent dependence'
    ],
    answer: [1],
    rationale: 'Hydration reduces blood viscosity and improves microvascular flow, and pain in crisis is severe and requires adequate opioids. Cold causes vasoconstriction and worsens sickling, dehydration promotes it, and withholding analgesia is both ineffective and inhumane.',
    strategy: 'Sickle crisis: hydrate, oxygenate, analgesia, and warmth. Never cold.' },

  { id: 'PHY-022', cat: 'phys', sub: 'Hematologic', type: 'mc', difficulty: 2,
    stem: 'A client with severe thrombocytopenia should receive which nursing precautions?',
    options: [
      'Encourage vigorous tooth brushing and flossing',
      'Use a soft toothbrush, avoid rectal temperatures and suppositories, avoid intramuscular injections, and prevent trauma',
      'Administer aspirin for headaches',
      'Encourage contact sports'
    ],
    answer: [1],
    rationale: 'Bleeding precautions minimize mucosal and tissue trauma: soft toothbrush, no rectal manipulation, no intramuscular injections, electric razor, fall prevention, and avoidance of aspirin and NSAIDs which further impair platelet function.',
    strategy: 'Bleeding precautions: soft brush, electric razor, nothing rectal, no IM injections, no NSAIDs.' },

  { id: 'PHY-023', cat: 'phys', sub: 'Immune', type: 'mc', difficulty: 2,
    stem: 'A client develops hypotension, wheezing, urticaria, and throat tightness minutes after an IV antibiotic. What is the priority action?',
    options: [
      'Administer diphenhydramine and observe',
      'Stop the infusion, call for help, administer intramuscular epinephrine, secure the airway, and give oxygen and IV fluids',
      'Slow the infusion rate',
      'Administer a corticosteroid alone'
    ],
    answer: [1],
    rationale: 'Anaphylaxis requires immediate epinephrine, which is the only agent that reverses the airway edema, bronchospasm, and vasodilation. Antihistamines and corticosteroids are adjuncts that act too slowly to be primary treatment, and continuing the infusion at any rate perpetuates exposure.',
    strategy: 'Anaphylaxis equals epinephrine first, IM in the thigh. Everything else is secondary.' },

  { id: 'PHY-024', cat: 'phys', sub: 'Integumentary', type: 'mc', difficulty: 2,
    stem: 'An adult client sustains burns to the entire anterior trunk, the entire right arm, and the entire head. Using the rule of nines, what percentage of total body surface area is burned?',
    options: ['27 percent', '31.5 percent', '36 percent', '45 percent'],
    answer: [2],
    rationale: 'By the adult rule of nines the anterior trunk is 18 percent, an entire arm is 9 percent, and the entire head is 9 percent, totaling 36 percent. Burns of this extent require formal fluid resuscitation and burn center referral.',
    strategy: 'Adult rule of nines: head 9, each arm 9, each leg 18, anterior trunk 18, posterior trunk 18, perineum 1.' },

  { id: 'PHY-025', cat: 'phys', sub: 'Integumentary', type: 'mc', difficulty: 2,
    stem: 'A client with extensive burns is in the first 24 hours after injury. Which laboratory finding is expected?',
    options: [
      'Hypokalemia and hemodilution',
      'Hyperkalemia from cell lysis and an elevated hematocrit from plasma loss and hemoconcentration',
      'Hypernatremia with low hematocrit',
      'Normal values throughout'
    ],
    answer: [1],
    rationale: 'Cell destruction releases potassium while massive plasma leak into the interstitium concentrates the remaining blood, raising the hematocrit despite red cell loss. After 48 to 72 hours fluid shifts back and potassium falls while hematocrit drops.',
    strategy: 'Burn phase one: potassium up, hematocrit up, sodium down. Phase two reverses it.' },

  { id: 'PHY-026', cat: 'phys', sub: 'Fluid and Electrolytes', type: 'mc', difficulty: 2,
    stem: 'A client has a serum potassium of 6.8 mEq/L with peaked T waves. Which intervention should the nurse anticipate first?',
    options: [
      'Oral potassium binder alone',
      'IV calcium gluconate to stabilize the myocardium, followed by insulin with dextrose and other measures to shift and remove potassium',
      'Potassium supplementation',
      'A potassium-sparing diuretic'
    ],
    answer: [1],
    rationale: 'Calcium does not lower potassium but immediately stabilizes cardiac membranes against arrhythmia, buying time for insulin with dextrose, beta agonists, and bicarbonate to shift potassium intracellularly and for binders or dialysis to remove it from the body.',
    strategy: 'Hyperkalemia sequence: stabilize with calcium, shift with insulin and glucose, remove with binders or dialysis.' },

  { id: 'PHY-027', cat: 'phys', sub: 'Fluid and Electrolytes', type: 'mc', difficulty: 2,
    stem: 'A client with prolonged nasogastric suction develops muscle weakness, hypoactive bowel sounds, and flattened T waves with U waves. Which electrolyte imbalance is most likely?',
    options: ['Hyperkalemia', 'Hypokalemia', 'Hypercalcemia', 'Hypernatremia'],
    answer: [1],
    rationale: 'Gastric losses deplete potassium, and hypokalemia produces skeletal and smooth muscle weakness with characteristic flattened T waves and prominent U waves on the electrocardiogram. Replacement must be gradual and never by IV push.',
    strategy: 'Low potassium: flat T waves and U waves, weak muscles, sluggish bowel. High potassium: peaked T waves.' },

  { id: 'PHY-028', cat: 'phys', sub: 'Shock', type: 'mc', difficulty: 2,
    stem: 'A client with a spinal cord injury at T4 has a blood pressure of 82/48, heart rate of 52, and warm dry skin. Which type of shock is this?',
    options: ['Hypovolemic shock', 'Neurogenic shock', 'Cardiogenic shock', 'Septic shock'],
    answer: [1],
    rationale: 'Loss of sympathetic tone below a high spinal cord injury produces vasodilation with hypotension, and unopposed vagal tone produces bradycardia with warm dry skin. Hypovolemic and cardiogenic shock both produce tachycardia with cool clammy skin.',
    strategy: 'Neurogenic shock is the only shock with bradycardia and warm dry skin. Everything else runs fast and cold.' },

  { id: 'PHY-029', cat: 'phys', sub: 'Shock', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client in early septic shock. Which hemodynamic pattern is expected initially?',
    options: [
      'High systemic vascular resistance with low cardiac output',
      'Low systemic vascular resistance with a high or normal cardiac output, producing warm flushed extremities',
      'Bradycardia with hypertension',
      'Normal parameters throughout'
    ],
    answer: [1],
    rationale: 'Early or warm septic shock features profound vasodilation with compensatory increased cardiac output, producing warm flushed skin and bounding pulses despite hypotension. As it progresses, cardiac output falls and the picture becomes cold and hypodynamic.',
    strategy: 'Early sepsis is warm and vasodilated. Late sepsis becomes cold like every other shock.' },

  { id: 'PHY-030', cat: 'phys', sub: 'Cardiovascular', type: 'mc', difficulty: 2,
    stem: 'A client with peripheral arterial disease should receive which teaching about leg positioning?',
    options: [
      'Elevate the legs above heart level for long periods',
      'Keep the legs in a dependent position to promote arterial flow, avoid crossing the legs, and avoid extremes of temperature',
      'Apply heating pads directly to the feet',
      'Wear tight compression stockings'
    ],
    answer: [1],
    rationale: 'Arterial insufficiency improves with gravity assisting flow into the extremity, so dependency helps while elevation worsens ischemia. Heating pads cause burns in the presence of neuropathy, and tight compression further restricts arterial inflow. Venous insufficiency requires the opposite approach.',
    strategy: 'Arterial: dangle the legs. Venous: elevate them. The two are opposite in almost every respect.' },

  { id: 'PHY-031', cat: 'phys', sub: 'Cardiovascular', type: 'mc', difficulty: 2,
    stem: 'A client with venous insufficiency has a lower leg ulcer. Which characteristics are expected?',
    options: [
      'Deep punched-out ulcer on the toe with minimal drainage and pale cool skin',
      'Shallow irregular ulcer near the medial malleolus with substantial drainage, edema, and brownish skin discoloration',
      'Dry gangrene of the heel',
      'No associated skin changes'
    ],
    answer: [1],
    rationale: 'Venous ulcers occur over the medial malleolus with irregular margins, heavy exudate, surrounding edema, and hemosiderin staining. Arterial ulcers are deep, punched-out, painful, located distally on toes and pressure points, with minimal drainage and cool pale skin.',
    strategy: 'Venous ulcer: medial ankle, wet, edematous, brown skin. Arterial ulcer: toes, dry, punched out, cold foot.' },

  { id: 'PHY-032', cat: 'phys', sub: 'Respiratory', type: 'mc', difficulty: 2,
    stem: 'A client is admitted with a pulmonary embolism. Which findings are most consistent with this diagnosis?',
    options: [
      'Gradual onset productive cough with fever over several days',
      'Sudden dyspnea, pleuritic chest pain, tachycardia, anxiety, and hypoxemia',
      'Bilateral wheezing relieved by a bronchodilator',
      'Chronic morning cough'
    ],
    answer: [1],
    rationale: 'Pulmonary embolism presents abruptly with dyspnea, pleuritic pain, tachycardia, and hypoxemia often with a sense of doom. The abrupt onset distinguishes it from pneumonia and chronic lung disease.',
    strategy: 'Sudden is the key word for embolism. Pneumonia builds over days; embolism happens in a moment.' },

  { id: 'PHY-033', cat: 'phys', sub: 'Endocrine', type: 'mc', difficulty: 2,
    stem: 'A client with Cushing syndrome will most likely exhibit which findings?',
    options: [
      'Weight loss, hyperpigmentation, and hypotension',
      'Truncal obesity with thin extremities, moon face, buffalo hump, purple striae, hyperglycemia, and hypertension',
      'Hypoglycemia and hyperkalemia',
      'Bradycardia and cold intolerance'
    ],
    answer: [1],
    rationale: 'Cortisol excess redistributes fat centrally, breaks down peripheral protein, raises glucose, retains sodium and water causing hypertension, and wastes potassium. The listed alternatives describe Addison disease and hypothyroidism.',
    strategy: 'Cushing: too much cortisol, everything up except potassium. Addison: too little, everything down except potassium.' },

  { id: 'PHY-034', cat: 'phys', sub: 'Gastrointestinal', type: 'mc', difficulty: 2,
    stem: 'A client with acute pancreatitis should receive which initial management?',
    options: [
      'A high-fat diet to stimulate the pancreas',
      'Nothing by mouth with IV fluid resuscitation, pain control, and gradual reintroduction of a low-fat diet as symptoms resolve',
      'Immediate surgery in all cases',
      'Oral fluids as tolerated immediately'
    ],
    answer: [1],
    rationale: 'Resting the pancreas by withholding oral intake, aggressive fluid resuscitation, and effective analgesia are the foundations of care, with a low-fat diet resumed as pain and enzymes improve. Fat is the strongest stimulus to pancreatic enzyme secretion.',
    strategy: 'Pancreatitis: rest the pancreas, hydrate, treat the pain. Fat and alcohol restart the attack.' },

  { id: 'PHY-035', cat: 'phys', sub: 'Renal', type: 'mc', difficulty: 2,
    stem: 'A client is receiving peritoneal dialysis. The outflow is cloudy and the client reports abdominal pain and fever. What should the nurse suspect?',
    options: [
      'Normal effluent appearance',
      'Peritonitis, requiring specimen collection for culture and prompt provider notification',
      'Catheter migration',
      'Excessive ultrafiltration'
    ],
    answer: [1],
    rationale: 'Cloudy effluent is the hallmark of peritonitis, the most common serious complication of peritoneal dialysis, and it typically precedes fever and pain. Fluid is sent for cell count, Gram stain, and culture, and intraperitoneal antibiotics are usually started.',
    strategy: 'Cloudy peritoneal dialysis outflow equals peritonitis until cultures prove otherwise.' },

  { id: 'PHY-036', cat: 'phys', sub: 'Neurological', type: 'mc', difficulty: 2,
    stem: 'A client is having a generalized tonic-clonic seizure. Which nursing action is appropriate?',
    options: [
      'Restrain the client\'s limbs to prevent injury',
      'Protect the head, clear the surrounding area, turn the client to the side if possible, time the seizure, and never place anything in the mouth',
      'Insert a padded tongue blade',
      'Leave the client to obtain help'
    ],
    answer: [1],
    rationale: 'Safety measures protect from injury while the seizure runs its course, and side positioning protects the airway from secretions. Restraint causes fractures and soft tissue injury, oral objects cause dental and airway trauma, and the client is not left alone.',
    strategy: 'During a seizure: protect, position, time it. Do not restrain and do not put anything in the mouth.' },

  { id: 'PHY-037', cat: 'phys', sub: 'Neurological', type: 'mc', difficulty: 2,
    stem: 'A client has been seizing continuously for 6 minutes. What should the nurse recognize and anticipate?',
    options: [
      'A typical seizure requiring only observation',
      'Status epilepticus, requiring immediate airway support, oxygen, IV access, and benzodiazepine administration',
      'Waiting another 20 minutes before intervening',
      'Oral anticonvulsant administration'
    ],
    answer: [1],
    rationale: 'Continuous seizure activity beyond about 5 minutes defines status epilepticus, which causes neuronal injury, hyperthermia, acidosis, and rhabdomyolysis. Immediate benzodiazepine administration with airway support is required, followed by a longer-acting anticonvulsant. Oral medication is impossible during a seizure.',
    strategy: 'Five minutes of continuous seizure equals status epilepticus. Benzodiazepines first, then a longer-acting agent.' },

  { id: 'PHY-038', cat: 'phys', sub: 'Musculoskeletal', type: 'mc', difficulty: 2,
    stem: 'A client with rheumatoid arthritis reports morning stiffness lasting 2 hours. How does this differ from osteoarthritis?',
    options: [
      'It is identical in both conditions',
      'Rheumatoid arthritis causes prolonged morning stiffness over 30 to 60 minutes with symmetric small joint involvement and systemic symptoms, while osteoarthritis causes brief stiffness under 30 minutes worsening with use',
      'Osteoarthritis always affects both hands symmetrically',
      'Rheumatoid arthritis never causes fatigue'
    ],
    answer: [1],
    rationale: 'Rheumatoid arthritis is a systemic autoimmune disease with prolonged morning stiffness, symmetric small joint involvement, fatigue, and low-grade fever. Osteoarthritis is degenerative with brief stiffness, asymmetric weight-bearing joint involvement, and pain that worsens with activity.',
    strategy: 'Rheumatoid: long stiffness, symmetric, systemic, better with movement. Osteoarthritis: brief stiffness, asymmetric, worse with use.' },

  { id: 'PHY-039', cat: 'phys', sub: 'Oncology', type: 'mc', difficulty: 2,
    stem: 'A client is receiving external beam radiation therapy. Which skin care instruction is correct?',
    options: [
      'Scrub the treatment area vigorously with soap',
      'Wash gently with lukewarm water and mild soap, pat dry, avoid lotions containing metal or alcohol unless approved, do not remove skin markings, and protect the area from sun and extreme temperatures',
      'Apply ice packs to the treatment field',
      'Expose the area to sunlight to promote healing'
    ],
    answer: [1],
    rationale: 'Irradiated skin is fragile and heals poorly, so gentle cleansing, approved moisturizers, preservation of alignment markings, and avoidance of friction, sun, and temperature extremes protect it. Metallic products can alter the dose distribution.',
    strategy: 'Radiation skin care: gentle, no scrubbing, no heat or ice, no sun, no removing the markings.' },

  { id: 'PHY-040', cat: 'phys', sub: 'Oncology', type: 'mc', difficulty: 3,
    stem: 'A client with a hematologic malignancy develops facial and upper extremity swelling with distended neck and chest veins and dyspnea. What should the nurse suspect?',
    options: ['Anaphylaxis', 'Superior vena cava syndrome', 'Heart failure', 'Deep vein thrombosis of the leg'],
    answer: [1],
    rationale: 'Tumor compression of the superior vena cava obstructs venous return from the head, neck, and upper extremities, producing facial and arm edema, distended collateral veins, and dyspnea. It is an oncologic emergency requiring elevation of the head, oxygen, and urgent radiation or stenting.',
    strategy: 'Oncologic emergencies to know: superior vena cava syndrome, spinal cord compression, tumor lysis, hypercalcemia, and febrile neutropenia.' },

  { id: 'PHY-041', cat: 'phys', sub: 'Oncology', type: 'mc', difficulty: 2,
    stem: 'A client with metastatic cancer reports new severe back pain with leg weakness and difficulty voiding. What should the nurse do?',
    options: [
      'Administer analgesia and reassess in the morning',
      'Notify the provider immediately, as this suggests spinal cord compression requiring urgent imaging and corticosteroids',
      'Encourage ambulation',
      'Apply heat to the back'
    ],
    answer: [1],
    rationale: 'Back pain with motor weakness and bladder dysfunction in a client with known malignancy indicates metastatic spinal cord compression, where the neurological outcome depends on how quickly dexamethasone and definitive treatment are started. Delay results in permanent paralysis.',
    strategy: 'Cancer plus back pain plus leg weakness plus bladder change equals cord compression. Hours matter.' },

  { id: 'PHY-042', cat: 'phys', sub: 'Fluid and Electrolytes', type: 'mc', difficulty: 2,
    stem: 'A client has a serum calcium of 7.1 mg/dL. Which assessment should the nurse perform?',
    options: [
      'Check for Chvostek and Trousseau signs and assess for perioral tingling, muscle cramps, and laryngospasm risk',
      'Assess for constipation and lethargy',
      'Check for polyuria',
      'Assess for hyporeflexia'
    ],
    answer: [0],
    rationale: 'Hypocalcemia increases neuromuscular excitability, producing perioral and digital paresthesia, muscle cramps, positive Chvostek and Trousseau signs, tetany, and potentially fatal laryngospasm and seizures. Constipation, lethargy, polyuria, and hyporeflexia indicate hypercalcemia.',
    strategy: 'Chvostek is facial twitching on tapping the cheek. Trousseau is carpal spasm with a blood pressure cuff. Both mean low calcium.' },

  { id: 'PHY-043', cat: 'phys', sub: 'Shock', type: 'mc', difficulty: 2,
    stem: 'A client in cardiogenic shock after a large myocardial infarction has cool clammy skin, weak pulses, and pulmonary crackles. Which intervention is contraindicated?',
    options: [
      'Administering an inotropic agent',
      'Rapid administration of large-volume IV fluid boluses',
      'Providing supplemental oxygen',
      'Continuous cardiac monitoring'
    ],
    answer: [1],
    rationale: 'In cardiogenic shock the pump has failed and the lungs are already congested, so large fluid boluses worsen pulmonary edema. Treatment aims to improve contractility with inotropes, reduce afterload cautiously, and restore coronary perfusion. Fluid resuscitation is the mainstay in hypovolemic shock, not cardiogenic.',
    strategy: 'All shock is treated with fluids except cardiogenic. In cardiogenic shock, fluids drown the client.' },

  { id: 'PHY-044', cat: 'phys', sub: 'Integumentary', type: 'mc', difficulty: 2,
    stem: 'A client has a burn injury with a white, leathery, dry, and painless appearance. How should the nurse classify this burn?',
    options: [
      'Superficial partial thickness',
      'Full thickness, with destruction of nerve endings accounting for the absence of pain',
      'Superficial',
      'Deep partial thickness with intact sensation'
    ],
    answer: [1],
    rationale: 'Full-thickness burns destroy the epidermis, dermis, and nerve endings, producing a dry, leathery, white or charred, insensate wound requiring grafting. Painlessness in a burn is a sign of greater depth, not lesser injury.',
    strategy: 'A painless burn is a deep burn. Partial-thickness burns are the ones that hurt intensely.' },

  { id: 'PHY-045', cat: 'phys', sub: 'Respiratory', type: 'mc', difficulty: 2,
    stem: 'A client rescued from a house fire has singed nasal hairs, hoarseness, carbonaceous sputum, and facial burns. What is the priority action?',
    options: [
      'Begin fluid resuscitation calculations',
      'Anticipate early intubation to secure the airway before progressive edema makes it impossible',
      'Apply topical antimicrobial to the facial burns',
      'Obtain a detailed history'
    ],
    answer: [1],
    rationale: 'Signs of inhalation injury predict rapidly progressive airway edema that can obstruct within hours, and intubation becomes technically impossible once swelling advances. Early elective intubation is far safer than an emergency attempt later. Fluid resuscitation and wound care follow.',
    strategy: 'Facial burns, singed nasal hair, hoarseness, or carbonaceous sputum means intubate early, before you have to.' }
  ,
  { id: 'PHY-046', cat: 'phys', sub: 'Cardiovascular', type: 'mc', difficulty: 3,
    stem: 'A client is diagnosed with an abdominal aortic aneurysm. Which assessment finding requires immediate action?',
    options: [
      'A pulsatile abdominal mass that has been stable for years',
      'Sudden severe tearing abdominal or back pain with hypotension',
      'Mild abdominal discomfort after eating',
      'A bruit heard over the abdomen'
    ],
    answer: [1],
    rationale: 'Sudden tearing pain with hemodynamic instability indicates rupture or dissection, a catastrophic emergency requiring immediate surgical intervention. A stable pulsatile mass and a bruit are expected findings in a known aneurysm, and the abdomen is never palpated deeply when an aneurysm is suspected.',
    strategy: 'Tearing pain plus hypotension equals rupture. Never palpate deeply over a known aneurysm.' },

  { id: 'PHY-047', cat: 'phys', sub: 'Cardiovascular', type: 'mc', difficulty: 2,
    stem: 'A client with infective endocarditis should be monitored for which complication?',
    options: [
      'Improved cardiac output',
      'Embolic events including stroke, splenic infarction, and Janeway lesions, along with new or worsening heart murmur and heart failure',
      'Hypoglycemia',
      'Hypothermia'
    ],
    answer: [1],
    rationale: 'Vegetations on valve surfaces embolize to the brain, spleen, kidneys, and extremities, and valve destruction produces new murmurs and heart failure. Splinter hemorrhages, Osler nodes, Janeway lesions, and Roth spots are classic peripheral signs.',
    strategy: 'Endocarditis throws emboli and destroys valves. Watch for new murmurs and sudden neurological changes.' },

  { id: 'PHY-048', cat: 'phys', sub: 'Respiratory', type: 'mc', difficulty: 2,
    stem: 'A client with tuberculosis is receiving multidrug therapy. Which finding suggests a serious adverse effect requiring provider notification?',
    options: [
      'Orange discoloration of urine',
      'Yellowing of the sclera with right upper quadrant pain and elevated liver enzymes',
      'Mild nausea in the first week',
      'A metallic taste'
    ],
    answer: [1],
    rationale: 'Isoniazid, rifampin, and pyrazinamide are all hepatotoxic, and jaundice with right upper quadrant pain indicates drug-induced hepatitis requiring immediate evaluation and possible regimen change. Orange secretions from rifampin are harmless and expected.',
    strategy: 'TB drugs are hard on the liver. Teach clients to report jaundice, dark urine, and abdominal pain, and to avoid alcohol.' },

  { id: 'PHY-049', cat: 'phys', sub: 'Respiratory', type: 'mc', difficulty: 2,
    stem: 'A client with acute respiratory distress syndrome has worsening hypoxemia despite increasing oxygen. Which intervention should the nurse anticipate?',
    options: [
      'Reducing positive end-expiratory pressure',
      'Low tidal volume lung-protective ventilation with positive end-expiratory pressure, and consideration of prone positioning',
      'Aggressive fluid loading',
      'Discontinuing mechanical ventilation'
    ],
    answer: [1],
    rationale: 'ARDS is managed with low tidal volumes of about 6 mL per kilogram of predicted body weight to prevent ventilator-induced injury, adequate positive end-expiratory pressure to recruit collapsed alveoli, conservative fluid management, and prone positioning for severe hypoxemia. Reducing PEEP worsens shunting.',
    strategy: 'ARDS: low tidal volume, higher PEEP, keep them dry, prone them when severe.' },

  { id: 'PHY-050', cat: 'phys', sub: 'Endocrine', type: 'mc', difficulty: 2,
    stem: 'A client with type 2 diabetes has a glucose of 780 mg/dL, serum osmolality of 340 mOsm/kg, minimal ketones, and profound dehydration with altered mentation. What is the most likely diagnosis?',
    options: ['Diabetic ketoacidosis', 'Hyperosmolar hyperglycemic state', 'Hypoglycemia', 'Somogyi effect'],
    answer: [1],
    rationale: 'Hyperosmolar hyperglycemic state features extreme hyperglycemia, marked hyperosmolality, profound dehydration, and altered mental status without significant ketosis, because residual insulin suppresses lipolysis. It occurs in type 2 diabetes, develops over days, and carries higher mortality than ketoacidosis.',
    strategy: 'HHS: higher glucose, higher osmolality, no ketones, type 2, develops slowly. DKA: lower glucose, ketones, type 1, develops fast.' },

  { id: 'PHY-051', cat: 'phys', sub: 'Endocrine', type: 'mc', difficulty: 2,
    stem: 'A client with hypothyroidism becomes progressively lethargic with hypothermia, bradycardia, hypotension, and hyponatremia. What should the nurse suspect?',
    options: ['Thyroid storm', 'Myxedema coma', 'Cushing syndrome', 'Pheochromocytoma'],
    answer: [1],
    rationale: 'Myxedema coma is decompensated severe hypothyroidism with hypothermia, bradycardia, hypoventilation, hyponatremia, and depressed consciousness, often precipitated by infection, cold, or sedatives. It requires IV thyroid hormone, passive rewarming, and supportive care.',
    strategy: 'Myxedema coma: everything slow and cold. Sedatives can precipitate it, so use them cautiously in hypothyroidism.' },

  { id: 'PHY-052', cat: 'phys', sub: 'Gastrointestinal', type: 'mc', difficulty: 2,
    stem: 'A client with Crohn disease differs from a client with ulcerative colitis in which way?',
    options: [
      'Crohn disease is limited to the colon with continuous involvement',
      'Crohn disease can affect any part of the gastrointestinal tract with skip lesions and transmural inflammation, producing fistulas and strictures',
      'Ulcerative colitis commonly causes fistulas',
      'Both are identical in presentation'
    ],
    answer: [1],
    rationale: 'Crohn disease produces patchy transmural inflammation anywhere from mouth to anus, causing fistulas, abscesses, and strictures. Ulcerative colitis produces continuous mucosal inflammation limited to the colon and rectum, with bloody diarrhea prominent and toxic megacolon as a feared complication.',
    strategy: 'Crohn skips and goes deep. Ulcerative colitis is continuous, colon only, and bloody.' },

  { id: 'PHY-053', cat: 'phys', sub: 'Gastrointestinal', type: 'mc', difficulty: 2,
    stem: 'A client with gastroesophageal reflux disease should receive which teaching?',
    options: [
      'Lie down immediately after eating',
      'Eat smaller meals, avoid eating within 3 hours of bedtime, elevate the head of the bed, avoid trigger foods, and lose weight if overweight',
      'Drink coffee and citrus juice freely',
      'Wear tight-fitting clothing'
    ],
    answer: [1],
    rationale: 'Reducing gastric volume, using gravity, and avoiding sphincter-relaxing triggers such as caffeine, chocolate, alcohol, mint, and fatty foods reduce reflux. Recumbency after meals, tight clothing, and increased abdominal pressure all worsen it.',
    strategy: 'Reflux: small meals, stay upright, raise the head of the bed, avoid triggers, lose weight.' },

  { id: 'PHY-054', cat: 'phys', sub: 'Renal', type: 'mc', difficulty: 2,
    stem: 'A client with nephrotic syndrome will most likely have which findings?',
    options: [
      'Hematuria with red cell casts and hypertension',
      'Massive proteinuria, hypoalbuminemia, generalized edema, and hyperlipidemia',
      'Normal urinalysis',
      'Polyuria with dilute urine'
    ],
    answer: [1],
    rationale: 'Nephrotic syndrome is defined by heavy protein loss across a damaged glomerular barrier, producing low serum albumin, edema from reduced oncotic pressure, and compensatory hepatic lipoprotein synthesis. Nephritic syndrome instead features hematuria with red cell casts and hypertension.',
    strategy: 'Nephrotic loses protein. Nephritic loses blood. Both damage the glomerulus differently.' },

  { id: 'PHY-055', cat: 'phys', sub: 'Renal', type: 'mc', difficulty: 2,
    stem: 'A client passing a kidney stone reports severe flank pain radiating to the groin. Which interventions are appropriate?',
    options: [
      'Restrict fluids and maintain bed rest',
      'Provide analgesia, encourage fluid intake and ambulation as tolerated, and strain all urine to capture the stone for analysis',
      'Apply cold to the flank and withhold analgesia',
      'Insert a urinary catheter routinely'
    ],
    answer: [1],
    rationale: 'Renal colic is severe and requires effective analgesia, while hydration and movement help the stone pass. Straining urine captures the stone so its composition can guide prevention. Fluid restriction impedes passage and bed rest offers no benefit.',
    strategy: 'Kidney stones: pain control, fluids, ambulation, strain the urine. The stone composition determines the prevention plan.' },

  { id: 'PHY-056', cat: 'phys', sub: 'Neurological', type: 'mc', difficulty: 2,
    stem: 'A client with Parkinson disease is prescribed medication. Which manifestations characterize this disease?',
    options: [
      'Ascending flaccid paralysis',
      'Resting tremor, bradykinesia, rigidity with cogwheeling, and postural instability',
      'Intention tremor with nystagmus and scanning speech',
      'Sudden hemiparesis'
    ],
    answer: [1],
    rationale: 'Dopamine depletion in the substantia nigra produces the cardinal features of resting tremor, bradykinesia, rigidity, and postural instability, along with masked facies, shuffling festinating gait, and micrographia. Intention tremor with nystagmus suggests multiple sclerosis.',
    strategy: 'Parkinson tremor occurs at rest and improves with movement. Cerebellar tremor appears with intentional movement.' },

  { id: 'PHY-057', cat: 'phys', sub: 'Neurological', type: 'mc', difficulty: 2,
    stem: 'A client with multiple sclerosis reports worsening symptoms in hot weather and after hot showers. What should the nurse teach?',
    options: [
      'Heat improves nerve conduction and should be sought',
      'Heat temporarily worsens symptoms by slowing conduction in demyelinated nerves, so cool environments, cool showers, and avoiding overheating are recommended',
      'This indicates the disease is curable',
      'Symptoms are unrelated to temperature'
    ],
    answer: [1],
    rationale: 'The Uhthoff phenomenon describes transient symptom worsening with elevated body temperature because heat further impairs conduction across demyelinated axons. Cooling reverses it. Fatigue management, stress reduction, and infection avoidance also reduce exacerbations.',
    strategy: 'Multiple sclerosis and heat do not mix. Cool showers, cool rooms, and avoid overheating with exercise.' },

  { id: 'PHY-058', cat: 'phys', sub: 'Musculoskeletal', type: 'mc', difficulty: 2,
    stem: 'A client with osteoporosis asks how to reduce fracture risk. Which recommendation is appropriate?',
    options: [
      'Avoid all exercise to protect the bones',
      'Perform weight-bearing and resistance exercise, ensure adequate calcium and vitamin D, stop smoking, limit alcohol, and address home fall hazards',
      'Increase caffeine intake',
      'Rely on medication alone without lifestyle change'
    ],
    answer: [1],
    rationale: 'Fracture prevention combines bone-building measures with fall prevention, since most osteoporotic fractures occur from falls. Inactivity accelerates bone loss, and smoking, excess alcohol, and high caffeine intake all worsen bone density.',
    strategy: 'Osteoporosis care has two halves: build the bone and prevent the fall. Both matter equally.' },

  { id: 'PHY-059', cat: 'phys', sub: 'Hematologic', type: 'mc', difficulty: 2,
    stem: 'A client with pernicious anemia requires which lifelong treatment?',
    options: [
      'Oral iron supplements',
      'Vitamin B12 replacement, typically by injection or high-dose oral therapy, because intrinsic factor deficiency prevents normal absorption',
      'Folic acid alone',
      'Blood transfusions monthly'
    ],
    answer: [1],
    rationale: 'Pernicious anemia results from autoimmune loss of intrinsic factor, so dietary and standard oral B12 cannot be absorbed in the terminal ileum and parenteral or high-dose oral replacement is needed for life. Folate corrects the anemia but does not prevent the irreversible neurological damage of B12 deficiency.',
    strategy: 'B12 deficiency causes neurological damage that folate will mask but not prevent. Always check B12 before giving folate.' },

  { id: 'PHY-060', cat: 'phys', sub: 'Hematologic', type: 'mc', difficulty: 3,
    stem: 'A client with sepsis develops oozing from IV sites, petechiae, prolonged coagulation times, low fibrinogen, and elevated D-dimer. What should the nurse suspect?',
    options: ['Hemophilia', 'Disseminated intravascular coagulation', 'Iron deficiency anemia', 'Polycythemia'],
    answer: [1],
    rationale: 'Widespread activation of the clotting cascade consumes platelets and clotting factors while fibrinolysis raises D-dimer, producing simultaneous microvascular thrombosis and bleeding. Treatment targets the underlying cause with supportive blood product replacement.',
    strategy: 'DIC clots and bleeds at the same time. Low fibrinogen with high D-dimer in a septic client is the signature.' },

  { id: 'PHY-061', cat: 'phys', sub: 'Immune', type: 'mc', difficulty: 2,
    stem: 'A client with systemic lupus erythematosus should receive which teaching?',
    options: [
      'Sun exposure improves the rash',
      'Avoid sun exposure and use protection, since ultraviolet light triggers flares, and report fever, new joint pain, or changes in urine output',
      'Discontinue medications when feeling well',
      'Exercise is contraindicated'
    ],
    answer: [1],
    rationale: 'Ultraviolet light triggers both cutaneous and systemic lupus flares. Fever may indicate flare or infection from immunosuppression, and changes in urine suggest lupus nephritis, the leading cause of morbidity. Medications continue during remission and balanced activity is encouraged.',
    strategy: 'Lupus teaching: sun protection, report fever and urine changes, never stop the medication in remission.' },

  { id: 'PHY-062', cat: 'phys', sub: 'Fluid and Electrolytes', type: 'mc', difficulty: 3,
    stem: 'A client with prolonged diarrhea has an arterial pH of 7.29 with a bicarbonate of 16 mEq/L and a PaCO2 of 31 mmHg. How should the nurse interpret this?',
    options: [
      'Respiratory acidosis',
      'Metabolic acidosis with partial respiratory compensation',
      'Metabolic alkalosis',
      'Fully compensated respiratory alkalosis'
    ],
    answer: [1],
    rationale: 'Diarrhea loses bicarbonate from the lower gastrointestinal tract, producing metabolic acidosis with a low pH and low bicarbonate, and the low PaCO2 reflects compensatory hyperventilation. The pH remains abnormal, so compensation is partial rather than complete.',
    strategy: 'If the pH is still abnormal, compensation is partial. If the pH normalizes, it is fully compensated.' },

  { id: 'PHY-063', cat: 'phys', sub: 'Shock', type: 'mc', difficulty: 2,
    stem: 'A client is in hypovolemic shock from hemorrhage. Which intervention is the priority?',
    options: [
      'Administer a vasopressor as the first measure',
      'Control the source of bleeding and restore volume with isotonic crystalloid and blood products through large-bore access',
      'Administer a diuretic',
      'Place the client in reverse Trendelenburg'
    ],
    answer: [1],
    rationale: 'Hemorrhagic shock is corrected by stopping the bleeding and replacing volume; vasopressors given without volume worsen tissue ischemia by constricting an empty vascular bed. Diuretics and head-up positioning further reduce perfusion.',
    strategy: 'Fill the tank before you squeeze the pipes. Vasopressors come after volume in hemorrhagic shock.' },

  { id: 'PHY-064', cat: 'phys', sub: 'Cardiovascular', type: 'mc', difficulty: 2,
    stem: 'A client with a mechanical heart valve requires which long-term management?',
    options: [
      'No anticoagulation needed',
      'Lifelong warfarin anticoagulation with a target INR typically higher than for atrial fibrillation, and antibiotic prophylaxis for certain dental and invasive procedures',
      'Direct oral anticoagulants are preferred',
      'Aspirin alone is sufficient'
    ],
    answer: [1],
    rationale: 'Mechanical valves are highly thrombogenic and require lifelong warfarin, with direct oral anticoagulants contraindicated because of proven inferiority in this setting. Endocarditis prophylaxis before certain procedures is also recommended for prosthetic valves.',
    strategy: 'Mechanical valve equals warfarin only. DOACs are contraindicated with mechanical valves.' },

  { id: 'PHY-065', cat: 'phys', sub: 'Respiratory', type: 'mc', difficulty: 2,
    stem: 'A client with cystic fibrosis requires which daily management?',
    options: [
      'Fluid restriction and a low-fat diet',
      'Airway clearance techniques, inhaled therapies, pancreatic enzyme replacement with meals and snacks, and a high-calorie high-protein diet with fat-soluble vitamins',
      'Avoiding all exercise',
      'A low-sodium diet'
    ],
    answer: [1],
    rationale: 'Thick secretions require daily airway clearance and inhaled mucolytics, pancreatic insufficiency requires enzyme replacement with every meal for fat and vitamin absorption, and high caloric needs plus salt losses in sweat require a high-calorie diet with liberal salt intake. Exercise aids airway clearance.',
    strategy: 'Cystic fibrosis: clear the airways, replace the enzymes, feed generously, and add salt rather than restricting it.' },

  { id: 'PHY-066', cat: 'phys', sub: 'Endocrine', type: 'mc', difficulty: 2,
    stem: 'A client after a total thyroidectomy will require which long-term therapy?',
    options: [
      'No medication is needed',
      'Lifelong thyroid hormone replacement, with periodic TSH monitoring and calcium monitoring if parathyroid function was affected',
      'Antithyroid medication',
      'Radioactive iodine monthly'
    ],
    answer: [1],
    rationale: 'Removal of the entire thyroid eliminates hormone production, making lifelong levothyroxine replacement mandatory with dose titration guided by TSH. Parathyroid injury during surgery may also require calcium and vitamin D supplementation.',
    strategy: 'Total thyroidectomy means lifelong replacement. Missing doses leads to myxedema over weeks.' },

  { id: 'PHY-067', cat: 'phys', sub: 'Gastrointestinal', type: 'mc', difficulty: 2,
    stem: 'A client with hepatic encephalopathy is prescribed lactulose. What is the expected therapeutic effect?',
    options: [
      'Reduced blood pressure',
      'Acidification of the colon that traps ammonia and increases stool frequency, lowering serum ammonia and improving mental status',
      'Increased appetite',
      'Reduced ascites'
    ],
    answer: [1],
    rationale: 'Lactulose is metabolized by colonic bacteria to acids that convert ammonia to non-absorbable ammonium and act as an osmotic laxative, removing nitrogenous waste. The dose is titrated to produce two to three soft stools daily, and diarrhea is the expected therapeutic endpoint rather than a side effect to be treated.',
    strategy: 'Lactulose is titrated to stools, not to comfort. Two to three soft stools daily is the goal.' },

  { id: 'PHY-068', cat: 'phys', sub: 'Renal', type: 'mc', difficulty: 2,
    stem: 'A client with chronic kidney disease develops anemia. What is the most likely cause?',
    options: [
      'Acute blood loss only',
      'Reduced erythropoietin production by the failing kidneys, often compounded by iron deficiency and shortened red cell survival',
      'Excess iron intake',
      'Dehydration'
    ],
    answer: [1],
    rationale: 'The kidney produces erythropoietin, so chronic kidney disease causes normocytic anemia that is treated with erythropoiesis-stimulating agents once iron stores are adequate. Blood loss during dialysis and uremic platelet dysfunction also contribute.',
    strategy: 'Kidneys make erythropoietin, activate vitamin D, and excrete phosphorus. Failure disrupts all three.' },

  { id: 'PHY-069', cat: 'phys', sub: 'Neurological', type: 'mc', difficulty: 2,
    stem: 'A client with a head injury has clear fluid draining from the nose that tests positive for glucose and forms a halo ring on gauze. What should the nurse do?',
    options: [
      'Pack the nose tightly with gauze',
      'Allow the drainage to flow freely onto a loose dressing, notify the provider immediately, and avoid nasal suctioning, nasogastric tubes, and blowing the nose',
      'Insert a nasogastric tube for decompression',
      'Encourage the client to blow the nose to clear it'
    ],
    answer: [1],
    rationale: 'Glucose-positive drainage with a halo sign indicates cerebrospinal fluid leak from a basilar skull fracture, creating a direct route for meningitis. Packing, nasal instrumentation, and nose blowing all risk forcing organisms intracranially, and a nasogastric tube can enter the cranial vault through the fracture.',
    strategy: 'Basilar skull fracture: nothing goes in the nose. No NG tube, no suction, no packing, no nose blowing.' },

  { id: 'PHY-070', cat: 'phys', sub: 'Musculoskeletal', type: 'mc', difficulty: 2,
    stem: 'A client with a new below-knee amputation asks about phantom sensations. What should the nurse explain?',
    options: [
      '"You are imagining it and it will stop if you ignore it."',
      '"Sensations from the missing limb are common and real, arising from nerve and brain changes. Tell us if they become painful so we can treat them."',
      '"This means the surgery failed."',
      '"Only clients with psychiatric illness experience this."'
    ],
    answer: [1],
    rationale: 'Phantom sensation occurs in most amputees and is a normal neurological phenomenon distinct from phantom pain, which is also common and treatable. Validating the experience and screening for pain allows early intervention with neuropathic agents, mirror therapy, and desensitization.',
    strategy: 'Phantom sensation is expected. Phantom pain is treatable. Neither is imaginary or psychiatric.' },

  { id: 'PHY-071', cat: 'phys', sub: 'Oncology', type: 'mc', difficulty: 2,
    stem: 'A client with cancer develops hypercalcemia. Which findings should the nurse expect?',
    options: [
      'Muscle twitching and tetany',
      'Lethargy, confusion, constipation, polyuria, nausea, and muscle weakness',
      'Hyperactive reflexes',
      'Seizures from neuromuscular excitability'
    ],
    answer: [1],
    rationale: 'Malignancy-related hypercalcemia from bone metastases or tumor-secreted parathyroid hormone-related peptide depresses neuromuscular function and impairs renal concentrating ability, producing lethargy, confusion, constipation, and polyuria with dehydration. Treatment is hydration plus bisphosphonates.',
    strategy: 'Hypercalcemia: stones, bones, groans, and psychiatric overtones. Treat with fluids and bisphosphonates.' },

  { id: 'PHY-072', cat: 'phys', sub: 'Fluid and Electrolytes', type: 'mc', difficulty: 2,
    stem: 'A client with a serum sodium of 158 mEq/L is likely to exhibit which findings?',
    options: [
      'Seizures from cerebral edema',
      'Thirst, dry mucous membranes, restlessness, and neurological changes from cellular dehydration',
      'Weight gain and edema',
      'Hypotension with bradycardia'
    ],
    answer: [1],
    rationale: 'Hypernatremia draws water out of cells including brain cells, producing thirst, dry membranes, restlessness, irritability, and in severe cases seizures and coma. Correction must be gradual to avoid cerebral edema from overly rapid water replacement.',
    strategy: 'High sodium shrinks brain cells, low sodium swells them. Correct either one slowly.' },

  { id: 'PHY-073', cat: 'phys', sub: 'Cardiovascular', type: 'mc', difficulty: 3,
    stem: 'A client with pericarditis reports chest pain. Which characteristic distinguishes it from myocardial infarction pain?',
    options: [
      'The pain is crushing and unrelieved by position',
      'The pain is sharp and pleuritic, worsens when lying flat and with inspiration, and improves when sitting up and leaning forward',
      'The pain always radiates to the left arm',
      'There is never a friction rub'
    ],
    answer: [1],
    rationale: 'Pericardial pain is positional and pleuritic, improving with upright forward-leaning posture, and a pericardial friction rub is often audible. Infarction pain is pressure-like, unrelated to position or respiration, and accompanied by biomarker elevation.',
    strategy: 'Positional and pleuritic chest pain relieved by leaning forward equals pericarditis.' },

  { id: 'PHY-074', cat: 'phys', sub: 'Respiratory', type: 'mc', difficulty: 2,
    stem: 'A client with obstructive sleep apnea asks why treatment matters beyond snoring. What should the nurse explain?',
    options: [
      'It is only a social problem',
      'Repeated nocturnal hypoxemia contributes to hypertension, arrhythmias, stroke, heart failure, and daytime sleepiness that raises accident risk',
      'It resolves without treatment',
      'It has no cardiovascular effects'
    ],
    answer: [1],
    rationale: 'Recurrent apneic episodes produce intermittent hypoxemia and sympathetic surges that drive resistant hypertension, atrial fibrillation, stroke, and heart failure, while daytime somnolence markedly increases motor vehicle crash risk. Continuous positive airway pressure reverses much of this.',
    strategy: 'Sleep apnea is a cardiovascular disease. Adherence to CPAP is what changes the outcome.' },

  { id: 'PHY-075', cat: 'phys', sub: 'Endocrine', type: 'mc', difficulty: 2,
    stem: 'A client with a pheochromocytoma is most likely to present with which findings?',
    options: [
      'Persistent hypotension and bradycardia',
      'Episodic severe hypertension with headache, palpitations, and profuse diaphoresis',
      'Weight gain with cold intolerance',
      'Hypoglycemia with confusion'
    ],
    answer: [1],
    rationale: 'Catecholamine-secreting tumors produce paroxysms of severe hypertension with the classic triad of headache, palpitations, and diaphoresis. The abdomen is not palpated deeply because manipulation can trigger a hypertensive crisis, and alpha blockade precedes beta blockade before surgery.',
    strategy: 'Pheochromocytoma triad: headache, palpitations, sweating, with episodic severe hypertension. Never palpate the abdomen deeply.' },

  { id: 'PHY-076', cat: 'phys', sub: 'Gastrointestinal', type: 'mc', difficulty: 3,
    stem: 'A client with a peptic ulcer suddenly develops severe abdominal pain, a rigid abdomen, and shoulder pain. What should the nurse suspect?',
    options: [
      'Uncomplicated ulcer flare',
      'Perforation with peritonitis and possible referred diaphragmatic irritation, requiring immediate surgical evaluation',
      'Constipation',
      'Gastroesophageal reflux'
    ],
    answer: [1],
    rationale: 'Sudden severe pain with a rigid abdomen indicates perforation, and free air under the diaphragm irritates the phrenic nerve producing referred shoulder pain. This is a surgical emergency requiring nothing by mouth, IV access, and immediate notification.',
    strategy: 'Referred shoulder pain with abdominal rigidity suggests free air or blood irritating the diaphragm.' },

  { id: 'PHY-077', cat: 'phys', sub: 'Renal', type: 'mc', difficulty: 2,
    stem: 'A client with benign prostatic hyperplasia reports being unable to void for 10 hours with suprapubic fullness and pain. What should the nurse do?',
    options: [
      'Encourage more fluids and wait',
      'Perform a bladder scan and prepare for catheterization per order, draining the bladder in a controlled manner',
      'Administer a diuretic',
      'Apply heat to the abdomen only'
    ],
    answer: [1],
    rationale: 'Acute urinary retention requires prompt decompression to relieve pain and prevent hydronephrosis and kidney injury. Rapid decompression of very large volumes has been associated with hematuria and hypotension, so drainage is controlled. Diuretics increase the retained volume and worsen distention.',
    strategy: 'Retention needs drainage, not diuresis. Scan first, then catheterize.' },

  { id: 'PHY-078', cat: 'phys', sub: 'Neurological', type: 'mc', difficulty: 2,
    stem: 'A client with increased intracranial pressure is prescribed mannitol. Which monitoring is essential?',
    options: [
      'Blood glucose only',
      'Urine output, serum osmolality, electrolytes, and neurological status, since mannitol produces profound osmotic diuresis',
      'Liver enzymes only',
      'No monitoring is needed'
    ],
    answer: [1],
    rationale: 'Mannitol pulls water from brain tissue into the vasculature and excretes it, causing large urine volumes with risk of hypovolemia, hypernatremia, and kidney injury if serum osmolality rises excessively. Neurological improvement confirms effectiveness, and a filter is used because mannitol can crystallize.',
    strategy: 'Mannitol: watch urine output, osmolality, and electrolytes. Use a filter and check for crystals.' },

  { id: 'PHY-079', cat: 'phys', sub: 'Musculoskeletal', type: 'mc', difficulty: 2,
    stem: 'A client with gout has an acute flare. Which intervention is appropriate during the attack?',
    options: [
      'Begin allopurinol immediately at high dose to lower uric acid',
      'Provide anti-inflammatory treatment such as an NSAID, colchicine, or corticosteroid, rest and elevate the joint, and avoid pressure from bedding',
      'Apply firm pressure to the joint',
      'Encourage a purine-rich diet'
    ],
    answer: [1],
    rationale: 'Acute gout is treated with anti-inflammatory agents and joint protection, since even the weight of a sheet is intolerable. Starting or changing urate-lowering therapy during an attack can prolong or worsen it, and purine-rich foods raise uric acid.',
    strategy: 'Treat the acute attack with anti-inflammatories. Start urate-lowering therapy after the flare settles.' },

  { id: 'PHY-080', cat: 'phys', sub: 'Hematologic', type: 'mc', difficulty: 2,
    stem: 'A client with hemophilia A experiences a joint bleed. Which intervention is the priority?',
    options: [
      'Apply heat and encourage range of motion',
      'Administer the deficient clotting factor, immobilize and elevate the joint, and apply cold',
      'Administer aspirin for pain',
      'Aspirate the joint immediately'
    ],
    answer: [1],
    rationale: 'Factor replacement stops the bleeding at its source and is given as early as possible, with rest, ice, compression, and elevation limiting joint damage. Heat and movement increase bleeding, aspirin impairs platelet function, and routine aspiration risks further bleeding and infection.',
    strategy: 'Hemophilia bleed: factor first, then RICE. Never aspirin or NSAIDs.' },

  { id: 'PHY-081', cat: 'phys', sub: 'Immune', type: 'mc', difficulty: 2,
    stem: 'A client with HIV has a CD4 count of 180 cells per microliter. What should the nurse anticipate?',
    options: [
      'No additional interventions are needed',
      'Prophylaxis against opportunistic infections such as Pneumocystis jirovecii pneumonia, along with continued antiretroviral therapy',
      'Discontinuation of antiretroviral therapy',
      'Live vaccine administration'
    ],
    answer: [1],
    rationale: 'A CD4 count below 200 defines AIDS and marks the threshold for Pneumocystis prophylaxis, typically with trimethoprim-sulfamethoxazole. Antiretroviral therapy continues, and live vaccines are contraindicated at this level of immunosuppression.',
    strategy: 'CD4 under 200 means AIDS and Pneumocystis prophylaxis. Under 50 adds Mycobacterium avium prophylaxis.' },

  { id: 'PHY-082', cat: 'phys', sub: 'Fluid and Electrolytes', type: 'sata', difficulty: 2,
    stem: 'A client is receiving a large volume of normal saline. Which complications should the nurse monitor for? Select all that apply.',
    options: [
      'Hyperchloremic metabolic acidosis',
      'Fluid volume overload with pulmonary edema',
      'Hypernatremia',
      'Hypoglycemia from the solution itself',
      'Peripheral edema',
      'Hypokalemia from dilution'
    ],
    answer: [0, 1, 2, 4, 5],
    rationale: 'Large volumes of normal saline deliver a supraphysiologic chloride load producing hyperchloremic acidosis, and the sodium and water load can cause overload, hypernatremia, and edema while diluting potassium. Normal saline contains no dextrose, so it neither raises nor lowers glucose directly.',
    strategy: 'Normal saline is not physiologically neutral. Large volumes cause hyperchloremic acidosis.' },

  { id: 'PHY-083', cat: 'phys', sub: 'Shock', type: 'mc', difficulty: 3,
    stem: 'A nurse is monitoring a client for the earliest sign of shock. Which finding appears first?',
    options: [
      'Hypotension',
      'Restlessness, anxiety, and subtle changes in mental status from reduced cerebral perfusion',
      'Anuria',
      'Cyanosis'
    ],
    answer: [1],
    rationale: 'Compensatory mechanisms maintain blood pressure until roughly 30 percent of blood volume is lost, so hypotension is a late sign. Cerebral hypoperfusion produces restlessness and anxiety early, and tachycardia and narrowing pulse pressure precede any fall in systolic pressure.',
    strategy: 'Restlessness is the earliest shock sign. Never wait for hypotension to act.' },

  { id: 'PHY-084', cat: 'phys', sub: 'Cardiovascular', type: 'mc', difficulty: 2,
    stem: 'A client with hypertension asks about lifestyle changes. Which recommendation has the greatest evidence for lowering blood pressure?',
    options: [
      'Increasing dietary sodium',
      'Weight loss if overweight, the DASH eating pattern, sodium reduction, regular aerobic activity, and limiting alcohol',
      'Increasing caffeine intake',
      'Eliminating all dietary potassium'
    ],
    answer: [1],
    rationale: 'These interventions each produce measurable blood pressure reductions and are additive, with weight loss and the DASH pattern among the most effective. Increasing sodium raises pressure, and potassium intake is generally encouraged rather than eliminated except in kidney disease.',
    strategy: 'Lifestyle changes can lower systolic pressure as much as a single medication. Weight loss and DASH lead the list.' },

  { id: 'PHY-085', cat: 'phys', sub: 'Respiratory', type: 'mc', difficulty: 2,
    stem: 'A client with a pleural effusion is most likely to have which assessment findings on the affected side?',
    options: [
      'Hyperresonance with increased breath sounds',
      'Dullness to percussion with diminished or absent breath sounds and decreased tactile fremitus',
      'Wheezing throughout',
      'Normal findings'
    ],
    answer: [1],
    rationale: 'Fluid in the pleural space transmits sound poorly, producing dullness on percussion, diminished breath sounds, and reduced fremitus. Pneumothorax instead produces hyperresonance with absent sounds because air, not fluid, occupies the space.',
    strategy: 'Fluid equals dull. Air equals hyperresonant. Both diminish breath sounds.' },

  { id: 'PHY-086', cat: 'phys', sub: 'Endocrine', type: 'mc', difficulty: 2,
    stem: 'A client with diabetes has an early morning glucose of 240 mg/dL. Testing at 3 a.m. shows a glucose of 52 mg/dL. What does this suggest?',
    options: [
      'Dawn phenomenon requiring an increase in evening insulin',
      'Somogyi effect, in which nocturnal hypoglycemia triggers counterregulatory hormone release and rebound hyperglycemia, often requiring a reduction in evening insulin',
      'Insulin resistance requiring higher doses',
      'Normal overnight pattern'
    ],
    answer: [1],
    rationale: 'A low 3 a.m. glucose followed by morning hyperglycemia indicates rebound from nocturnal hypoglycemia, treated by reducing the evening insulin or adding a bedtime snack. The dawn phenomenon shows a normal or rising 3 a.m. glucose from morning growth hormone and cortisol surges and is treated by increasing evening insulin.',
    strategy: 'Check the 3 a.m. glucose. Low means Somogyi and less insulin; normal or high means dawn phenomenon and more.' },

  { id: 'PHY-087', cat: 'phys', sub: 'Gastrointestinal', type: 'mc', difficulty: 2,
    stem: 'A client with diverticulitis is in an acute flare. Which dietary approach is appropriate?',
    options: [
      'High-fiber diet with nuts and seeds immediately',
      'Bowel rest with clear liquids or nothing by mouth during the acute phase, advancing to low-fiber and then to a high-fiber diet once inflammation resolves',
      'A permanently high-fat diet',
      'No dietary modification at any stage'
    ],
    answer: [1],
    rationale: 'Acute inflammation calls for bowel rest with gradual advancement, while long-term prevention relies on a high-fiber diet. Introducing high fiber during an acute flare increases pain and complication risk, though the traditional prohibition on nuts and seeds is not supported by evidence.',
    strategy: 'Diverticulitis flare: rest the bowel, then advance. Diverticulosis prevention: high fiber.' },

  { id: 'PHY-088', cat: 'phys', sub: 'Renal', type: 'mc', difficulty: 3,
    stem: 'A client with chronic kidney disease has a phosphorus of 7.2 mg/dL and a calcium of 7.8 mg/dL. What underlies this pattern?',
    options: [
      'Excess dietary calcium',
      'Failing kidneys cannot excrete phosphorus or activate vitamin D, so phosphorus rises, calcium falls, and parathyroid hormone rises, causing renal osteodystrophy',
      'Excess vitamin D',
      'Normal findings in kidney disease requiring no action'
    ],
    answer: [1],
    rationale: 'Phosphorus retention and impaired conversion of vitamin D to its active form lower serum calcium, driving secondary hyperparathyroidism that leaches calcium from bone and produces vascular calcification. Management includes phosphate binders with meals, dietary phosphorus restriction, and active vitamin D analogues.',
    strategy: 'In kidney disease, phosphorus rises and calcium falls in a reciprocal relationship. Binders and vitamin D analogues address both.' },

  { id: 'PHY-089', cat: 'phys', sub: 'Neurological', type: 'mc', difficulty: 2,
    stem: 'A client with a history of migraines asks about preventing attacks. Which strategy is appropriate?',
    options: [
      'Take abortive medication daily whether or not there is a headache',
      'Identify and avoid personal triggers, maintain regular sleep and meals, manage stress, and use preventive medication if attacks are frequent',
      'Increase caffeine substantially',
      'Avoid all physical activity permanently'
    ],
    answer: [1],
    rationale: 'Trigger identification through a headache diary combined with regular routines and preventive pharmacotherapy for frequent attacks reduces migraine frequency. Daily use of abortive agents causes medication overuse headache, and caffeine both triggers migraines and causes withdrawal headaches.',
    strategy: 'Overusing abortive migraine medication causes rebound headaches. Prevention is a separate class of drug.' },

  { id: 'PHY-090', cat: 'phys', sub: 'Musculoskeletal', type: 'mc', difficulty: 2,
    stem: 'A client in skeletal traction for a femur fracture develops redness, purulent drainage, and pain at a pin site with a fever. What should the nurse do?',
    options: [
      'Remove the pin',
      'Notify the provider, obtain a culture as ordered, and anticipate treatment for pin site infection with possible progression to osteomyelitis',
      'Apply a tight occlusive dressing',
      'Increase the traction weight'
    ],
    answer: [1],
    rationale: 'Pin site infection can extend into bone as osteomyelitis, which is difficult to eradicate, so early culture and antibiotic treatment matter. Nurses do not remove skeletal pins, occlusive dressings trap drainage, and weight changes require an order and do not address infection.',
    strategy: 'Pin site care prevents osteomyelitis. Purulent drainage with fever is never expected.' }
  ,
  { id: 'PHY-091', cat: 'phys', sub: 'Cardiovascular', type: 'mc', difficulty: 2,
    stem: 'A client with chronic stable angina asks how the condition differs from a heart attack. What should the nurse explain?',
    options: [
      'They are the same condition',
      'Angina is reversible ischemia from a temporary supply-demand mismatch, while infarction is cell death from prolonged occlusion',
      'Angina always causes permanent damage',
      'Infarction pain always resolves with rest'
    ],
    answer: [1],
    rationale: 'Angina reflects transient ischemia that resolves when demand falls or supply improves, leaving no permanent injury and no biomarker rise. Infarction involves sustained occlusion long enough to cause necrosis, releasing troponin.',
    strategy: 'Ischemia is reversible; infarction is not. Troponin marks the difference.' },

  { id: 'PHY-092', cat: 'phys', sub: 'Respiratory', type: 'mc', difficulty: 3,
    stem: 'A client with emphysema has a barrel chest and prolonged expiration. What underlies these findings?',
    options: [
      'Excessive mucus production only',
      'Destruction of alveolar walls with loss of elastic recoil, causing air trapping and chronic hyperinflation',
      'Pleural fluid accumulation',
      'Increased chest wall muscle mass'
    ],
    answer: [1],
    rationale: 'Emphysema destroys alveolar walls and the elastic tissue that drives passive exhalation, so air is trapped and the chest becomes chronically hyperinflated with a barrel shape and a flattened diaphragm. Chronic bronchitis, by contrast, is characterized by mucus hypersecretion and productive cough.',
    strategy: 'Emphysema is a destruction and air-trapping problem. Chronic bronchitis is a mucus problem.' },

  { id: 'PHY-093', cat: 'phys', sub: 'Endocrine', type: 'mc', difficulty: 2,
    stem: 'A client with diabetes is ill with vomiting and cannot eat. What should the nurse teach about sick day management?',
    options: [
      'Stop all insulin until eating resumes',
      'Continue insulin, check glucose and ketones more frequently, drink adequate fluids, use carbohydrate-containing liquids if unable to eat solids, and call the provider for persistent vomiting or ketones',
      'Double all insulin doses',
      'Stop checking glucose while ill'
    ],
    answer: [1],
    rationale: 'Illness raises counterregulatory hormones and glucose even when intake falls, so insulin continues, often with adjustment. Stopping insulin in type 1 diabetes precipitates ketoacidosis, which is the most common cause of hospitalization during minor illness.',
    strategy: 'Sick day rules: never stop insulin, check more often, hydrate, and call for ketones or persistent vomiting.' },

  { id: 'PHY-094', cat: 'phys', sub: 'Gastrointestinal', type: 'mc', difficulty: 2,
    stem: 'A client after a Roux-en-Y gastric bypass should receive which long-term teaching?',
    options: [
      'Resume large meals once healed',
      'Eat small frequent meals, chew thoroughly, avoid drinking with meals, avoid concentrated sugars, and take lifelong vitamin and mineral supplementation including B12, iron, calcium, and vitamin D',
      'No supplementation is needed',
      'Drink large volumes with each meal'
    ],
    answer: [1],
    rationale: 'The reduced pouch and bypassed absorptive surface require small meals, careful chewing, and separation of fluids from solids to prevent dumping and obstruction, and permanent deficiency risk mandates lifelong supplementation with monitoring.',
    strategy: 'After bariatric surgery: small meals, no fluids with meals, no concentrated sugar, lifelong vitamins.' },

  { id: 'PHY-095', cat: 'phys', sub: 'Renal', type: 'mc', difficulty: 2,
    stem: 'A client with a urinary diversion using an ileal conduit should be taught which point?',
    options: [
      'Urine will be stored and voided voluntarily',
      'Urine flows continuously into the pouch so it must be emptied regularly, mucus in the urine is normal because bowel tissue is used, and adequate fluid intake is important',
      'Mucus in the urine always indicates infection',
      'Fluids should be restricted'
    ],
    answer: [1],
    rationale: 'An ileal conduit provides no storage function, so urine drains continuously and the pouch is emptied when about one third full. Mucus is expected because intestinal tissue continues to secrete it, and generous fluid intake flushes the conduit and reduces infection and stone formation.',
    strategy: 'Ileal conduit: continuous drainage, expected mucus, push fluids, empty at one third full.' },

  { id: 'PHY-096', cat: 'phys', sub: 'Neurological', type: 'mc', difficulty: 2,
    stem: 'A client with Alzheimer disease has progressive difficulty performing familiar tasks. Which stage-appropriate intervention is best?',
    options: [
      'Introduce new complex activities to stimulate the brain',
      'Simplify tasks into single steps, maintain consistent routines and environment, use cues and labels, and allow extra time',
      'Frequently rearrange the environment',
      'Correct every mistake the client makes'
    ],
    answer: [1],
    rationale: 'Preserved procedural memory and routine allow continued function longest, so tasks are broken into single steps with environmental cues and consistency. Novelty, environmental change, and correction all increase confusion and agitation.',
    strategy: 'Dementia care runs on routine and simplification. Change and correction produce agitation.' },

  { id: 'PHY-097', cat: 'phys', sub: 'Musculoskeletal', type: 'mc', difficulty: 2,
    stem: 'A client with a plaster cast reports that the cast feels tight and the fingers are swollen. What should the nurse do?',
    options: [
      'Reassure the client and reassess tomorrow',
      'Elevate the extremity above heart level, apply ice around but not directly on the cast, perform a neurovascular assessment, and notify the provider if symptoms persist or worsen',
      'Insert an object under the cast to relieve pressure',
      'Cut the cast independently'
    ],
    answer: [1],
    rationale: 'Elevation and cold reduce swelling early after casting, and serial neurovascular checks identify developing compartment syndrome requiring cast bivalving by the provider. Inserting objects under a cast causes skin breakdown that cannot be seen, and nurses do not cut casts without an order.',
    strategy: 'Cast care: elevate, ice around it, never scratch inside it, and report increasing pain or numbness.' },

  { id: 'PHY-098', cat: 'phys', sub: 'Hematologic', type: 'mc', difficulty: 2,
    stem: 'A client with iron deficiency anemia will most likely have which laboratory pattern?',
    options: [
      'Macrocytic red cells with low B12',
      'Microcytic hypochromic red cells with low ferritin and elevated total iron binding capacity',
      'Normocytic cells with normal iron studies',
      'Elevated ferritin with low iron binding capacity'
    ],
    answer: [1],
    rationale: 'Iron deficiency produces small pale red cells, and depleted stores lower ferritin while the body upregulates transferrin, raising total iron binding capacity. B12 and folate deficiency produce macrocytic anemia, and anemia of chronic disease shows normal or high ferritin with low binding capacity.',
    strategy: 'Microcytic equals iron. Macrocytic equals B12 or folate. Ferritin is the key discriminator.' },

  { id: 'PHY-099', cat: 'phys', sub: 'Immune', type: 'mc', difficulty: 3,
    stem: 'A client is receiving an immunosuppressant after transplant and develops a low-grade fever. What should the nurse recognize?',
    options: [
      'Fever is unimportant in this client',
      'Immunosuppression blunts the inflammatory response, so even a low-grade fever may represent serious infection and requires prompt evaluation',
      'Fever always indicates rejection',
      'Antipyretics should be given without further assessment'
    ],
    answer: [1],
    rationale: 'Suppressed immunity means classic signs of infection are muted, so a modest temperature rise can accompany overwhelming infection. Fever may also signal rejection, and distinguishing the two requires prompt evaluation rather than symptomatic treatment alone.',
    strategy: 'In immunosuppressed clients, small signs mean big problems. Do not wait for a classic presentation.' },

  { id: 'PHY-100', cat: 'phys', sub: 'Fluid and Electrolytes', type: 'mc', difficulty: 2,
    stem: 'A client is receiving lactated Ringer solution. Which client condition would make this fluid a poor choice?',
    options: [
      'Dehydration from vomiting',
      'Severe liver failure, since the liver converts lactate to bicarbonate and cannot do so effectively',
      'Postoperative fluid replacement',
      'Burn resuscitation'
    ],
    answer: [1],
    rationale: 'Lactated Ringer depends on hepatic conversion of lactate to bicarbonate, so severe liver dysfunction limits its benefit and can worsen lactate accumulation. It is also avoided in significant hyperkalemia because it contains potassium. It remains a standard choice for burn and surgical resuscitation.',
    strategy: 'Lactated Ringer needs a working liver and normal potassium. Avoid it in liver failure and hyperkalemia.' },

  { id: 'PHY-101', cat: 'phys', sub: 'Cardiovascular', type: 'mc', difficulty: 2,
    stem: 'A client with a myocardial infarction develops a new loud holosystolic murmur and acute pulmonary edema on day 4. What complication should the nurse suspect?',
    options: [
      'Pericarditis',
      'Papillary muscle rupture with acute mitral regurgitation, a mechanical complication requiring urgent surgical evaluation',
      'Reinfarction only',
      'Anxiety'
    ],
    answer: [1],
    rationale: 'Mechanical complications of infarction, including papillary muscle rupture, ventricular septal rupture, and free wall rupture, typically occur in the first week and present with a new murmur and abrupt hemodynamic deterioration. They require immediate surgical evaluation.',
    strategy: 'A new murmur after infarction is a mechanical complication until proven otherwise. It is a surgical emergency.' },

  { id: 'PHY-102', cat: 'phys', sub: 'Respiratory', type: 'mc', difficulty: 2,
    stem: 'A client is being weaned from mechanical ventilation. Which finding suggests the client is not tolerating the weaning trial?',
    options: [
      'Respiratory rate of 18 with stable saturation',
      'Respiratory rate rising above 35 with accessory muscle use, agitation, and falling oxygen saturation',
      'Stable blood pressure',
      'Effective cough'
    ],
    answer: [1],
    rationale: 'Tachypnea with accessory muscle recruitment, agitation, diaphoresis, hemodynamic instability, and desaturation indicate weaning failure requiring return to previous support and reassessment of the underlying cause. Stable parameters and an effective cough support readiness.',
    strategy: 'Weaning failure shows as rising rate, accessory muscles, agitation, and desaturation. Stop the trial and rest the client.' },

  { id: 'PHY-103', cat: 'phys', sub: 'Endocrine', type: 'mc', difficulty: 2,
    stem: 'A client is prescribed insulin therapy and asks about lipohypertrophy. What should the nurse teach?',
    options: [
      'Injecting into the same spot improves absorption',
      'Rotate injection sites systematically within an anatomic region, because repeated injection into one spot causes fatty tissue changes that make absorption erratic',
      'Lipohypertrophy improves insulin action',
      'Site rotation is unnecessary with modern insulins'
    ],
    answer: [1],
    rationale: 'Repeated injections into a single site produce lipohypertrophy, a rubbery thickening that absorbs insulin unpredictably and causes unexplained glucose swings. Systematic rotation within a region preserves consistent absorption, and abdominal sites absorb fastest.',
    strategy: 'Rotate within a region, not between regions, so absorption speed stays consistent. Abdomen is fastest, thigh slowest.' },

  { id: 'PHY-104', cat: 'phys', sub: 'Gastrointestinal', type: 'mc', difficulty: 2,
    stem: 'A client with hepatitis B asks how the infection is transmitted. Which response is accurate?',
    options: [
      'Through contaminated food and water',
      'Through blood and body fluid exposure including sexual contact, needle sharing, and perinatal transmission, and it is preventable by vaccination',
      'Through casual contact and shared utensils',
      'Only through blood transfusion'
    ],
    answer: [1],
    rationale: 'Hepatitis B is a bloodborne and sexually transmitted infection also passed perinatally, and an effective vaccine exists. Hepatitis A and E spread by the fecal-oral route through contaminated food and water.',
    strategy: 'A and E come from the mouth and the environment. B, C, and D come from blood and body fluids. B has a vaccine, C does not.' },

  { id: 'PHY-105', cat: 'phys', sub: 'Renal', type: 'mc', difficulty: 2,
    stem: 'A client on hemodialysis has a potassium of 6.4 mEq/L and dialysis is scheduled in 6 hours. What should the nurse anticipate?',
    options: [
      'Waiting for dialysis with no intervention',
      'Notifying the provider urgently, obtaining an electrocardiogram, and anticipating temporizing measures such as calcium, insulin with dextrose, and possibly earlier dialysis',
      'Administering a potassium supplement',
      'Encouraging a high-potassium meal'
    ],
    answer: [1],
    rationale: 'A potassium of 6.4 in a client who cannot excrete it is immediately dangerous, so the electrocardiogram is checked for changes and temporizing measures are given while urgent dialysis is arranged. Waiting six hours risks fatal arrhythmia.',
    strategy: 'In dialysis clients, hyperkalemia does not resolve on its own. Temporize now, dialyze soon.' },

  { id: 'PHY-106', cat: 'phys', sub: 'Neurological', type: 'mc', difficulty: 2,
    stem: 'A client with a transient ischemic attack asks what it means. What should the nurse explain?',
    options: [
      'It is harmless and requires no follow-up',
      'It is a temporary interruption of blood flow with symptoms that resolve completely, and it is a strong warning sign that requires urgent evaluation to prevent a stroke',
      'It always causes permanent damage',
      'It only occurs in older adults'
    ],
    answer: [1],
    rationale: 'A transient ischemic attack resolves without infarction but signals substantial short-term stroke risk, with many strokes occurring within days. Urgent evaluation of carotid arteries, cardiac rhythm, and vascular risk factors with prompt antithrombotic therapy sharply reduces that risk.',
    strategy: 'A TIA is a warning, not a false alarm. The highest stroke risk is in the first 48 hours.' },

  { id: 'PHY-107', cat: 'phys', sub: 'Musculoskeletal', type: 'mc', difficulty: 2,
    stem: 'A client is being discharged after a total hip arthroplasty with posterior approach precautions. Which instruction is correct?',
    options: [
      'Cross the legs when sitting for stability',
      'Avoid hip flexion beyond 90 degrees, do not cross the legs or turn the toes inward, use an elevated toilet seat and a chair with arms, and use an abduction pillow when advised',
      'Sit in low soft chairs',
      'Bend at the waist to pick up objects'
    ],
    answer: [1],
    rationale: 'Posterior hip precautions prevent dislocation by prohibiting flexion beyond 90 degrees, adduction past midline, and internal rotation. Elevated seating and reachers allow function while respecting these limits.',
    strategy: 'Hip precautions: no bending past 90, no crossing, no turning toes in. Raise every seat in the house.' },

  { id: 'PHY-108', cat: 'phys', sub: 'Oncology', type: 'mc', difficulty: 2,
    stem: 'A client is receiving internal radiation therapy with a sealed implant. Which nursing action is appropriate?',
    options: [
      'Spend extended time at the bedside for emotional support',
      'Organize care to minimize time in the room, maintain distance when possible, use shielding, and keep a lead container and long forceps in the room in case the implant becomes dislodged',
      'Allow children and pregnant visitors',
      'Dispose of linens as regular waste without checking'
    ],
    answer: [1],
    rationale: 'Time, distance, and shielding govern exposure, and a dislodged implant is retrieved with forceps into a lead container, never with bare hands. Children and pregnant visitors are excluded, and linens and waste are checked and handled per radiation safety protocol.',
    strategy: 'Sealed implant: minimize time, maximize distance, use shielding, and never touch a dislodged source with your hands.' },

  { id: 'PHY-109', cat: 'phys', sub: 'Shock', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client in anaphylactic shock. Which physiological change causes the hypotension?',
    options: [
      'Loss of circulating blood volume through hemorrhage',
      'Massive histamine-mediated vasodilation with increased capillary permeability causing fluid to leak from the vasculature',
      'Failure of the heart to contract',
      'Obstruction of blood flow through the pulmonary artery'
    ],
    answer: [1],
    rationale: 'Anaphylaxis is a distributive shock in which mediator release dilates vessels and makes capillaries leak, so the intravascular volume both expands its container and escapes into tissue. Epinephrine reverses both effects, and aggressive fluid resuscitation replaces the lost volume.',
    strategy: 'Distributive shock includes anaphylactic, septic, and neurogenic. The volume is not lost, it is in the wrong place.' },

  { id: 'PHY-110', cat: 'phys', sub: 'Integumentary', type: 'mc', difficulty: 2,
    stem: 'A client with a burn injury is beyond the first 48 hours. Which complication becomes the leading concern?',
    options: [
      'Hypovolemic shock',
      'Infection and sepsis, since the burn wound provides a large portal of entry and immune function is impaired',
      'Hyperkalemia',
      'Fluid overload only'
    ],
    answer: [1],
    rationale: 'After the emergent fluid resuscitation phase, the loss of skin barrier combined with burn-induced immunosuppression makes infection the dominant cause of morbidity and death. Meticulous wound care, aseptic technique, and monitoring for subtle sepsis signs are central.',
    strategy: 'Burns kill by shock in the first days and by infection thereafter.' },

  { id: 'PHY-111', cat: 'phys', sub: 'Cardiovascular', type: 'mc', difficulty: 2,
    stem: 'A client with heart failure asks why fluid and sodium restriction matter. What should the nurse explain?',
    options: [
      'They have no effect on symptoms',
      'Sodium holds water in the circulation, increasing the volume the weakened heart must pump and worsening congestion, so limiting sodium and fluid reduces symptoms and hospitalization',
      'Restriction is only needed during hospitalization',
      'More fluid strengthens the heart'
    ],
    answer: [1],
    rationale: 'Sodium retention drives volume expansion that increases preload beyond what the failing ventricle can manage, producing pulmonary and systemic congestion. Adherence to sodium restriction with daily weights is among the most effective self-management strategies.',
    strategy: 'Heart failure self-management: daily weights, sodium restriction, medication adherence, and a call threshold.' },

  { id: 'PHY-112', cat: 'phys', sub: 'Respiratory', type: 'mc', difficulty: 3,
    stem: 'A client with COPD has an arterial blood gas showing pH 7.36, PaCO2 62 mmHg, and HCO3 34 mEq/L. How should the nurse interpret this?',
    options: [
      'Acute respiratory acidosis requiring immediate intubation',
      'Chronic respiratory acidosis with full metabolic compensation, a common baseline in advanced COPD',
      'Metabolic alkalosis',
      'Normal blood gas values'
    ],
    answer: [1],
    rationale: 'An elevated PaCO2 with a proportionally elevated bicarbonate and a pH within the normal range indicates a chronic process the kidneys have fully compensated. This is the expected baseline for many clients with advanced COPD, and treating the number rather than the client leads to harm.',
    strategy: 'A normal pH with abnormal CO2 and bicarbonate means chronic and compensated. Do not treat it as an acute crisis.' },

  { id: 'PHY-113', cat: 'phys', sub: 'Endocrine', type: 'mc', difficulty: 2,
    stem: 'A client after a transsphenoidal hypophysectomy should avoid which activity?',
    options: [
      'Deep breathing exercises',
      'Vigorous coughing, sneezing, nose blowing, and straining, since these raise pressure and can disrupt the surgical site and cause a cerebrospinal fluid leak',
      'Ambulating in the hall',
      'Sitting upright'
    ],
    answer: [1],
    rationale: 'The surgical approach passes through the sphenoid sinus, so anything that raises intracranial or sinus pressure risks disrupting the repair. Clear nasal drainage that tests positive for glucose suggests a cerebrospinal fluid leak, and toothbrushing is avoided until the incision heals.',
    strategy: 'After transsphenoidal surgery: no nose blowing, no straining, no toothbrushing, and report clear nasal drainage.' },

  { id: 'PHY-114', cat: 'phys', sub: 'Gastrointestinal', type: 'mc', difficulty: 2,
    stem: 'A client with ascites from cirrhosis is being monitored. Which nursing assessment best tracks the response to treatment?',
    options: [
      'Bowel sounds only',
      'Daily weights and abdominal girth measured at the same location, plus intake and output and electrolytes',
      'Skin turgor alone',
      'Temperature'
    ],
    answer: [1],
    rationale: 'Daily weight and consistently measured abdominal girth quantify fluid accumulation or loss, and electrolytes track the effects of diuretics such as spironolactone and furosemide. Skin turgor is unreliable and bowel sounds do not measure fluid.',
    strategy: 'Ascites monitoring: same scale, same time, same girth landmark every day.' },

  { id: 'PHY-115', cat: 'phys', sub: 'Renal', type: 'mc', difficulty: 2,
    stem: 'A client has an arteriovenous fistula for dialysis. Which instruction should the nurse give?',
    options: [
      'Sleep on the fistula arm for comfort',
      'Avoid blood pressures, blood draws, and IV insertions in that arm, avoid tight clothing and jewelry on it, and check for the thrill daily',
      'Wear a tight watch on that wrist',
      'Carry heavy objects with that arm'
    ],
    answer: [1],
    rationale: 'Any compression or puncture can thrombose the access, which is the client\'s lifeline for dialysis. Daily self-assessment for the thrill allows early detection of clotting, and heavy lifting and constriction are avoided.',
    strategy: 'Access arm rules: no cuff, no needle, no constriction, no heavy lifting, feel the thrill daily.' },

  { id: 'PHY-116', cat: 'phys', sub: 'Neurological', type: 'mc', difficulty: 2,
    stem: 'A client with a spinal cord injury has flaccid paralysis, loss of reflexes, and hypotension in the first days after injury. What does this describe?',
    options: [
      'Autonomic dysreflexia',
      'Spinal shock, a temporary loss of all reflex activity below the injury that resolves over days to weeks',
      'Permanent complete injury',
      'Guillain-Barre syndrome'
    ],
    answer: [1],
    rationale: 'Spinal shock produces temporary areflexia, flaccidity, and loss of autonomic function below the lesion, and the true extent of injury cannot be determined until it resolves. Return of reflexes marks its end and may be followed by spasticity and susceptibility to autonomic dysreflexia.',
    strategy: 'Spinal shock is temporary areflexia. Neurogenic shock is the hemodynamic component. Autonomic dysreflexia comes later.' },

  { id: 'PHY-117', cat: 'phys', sub: 'Musculoskeletal', type: 'mc', difficulty: 3,
    stem: 'A client with a fractured femur is placed in traction. Which finding indicates a complication requiring immediate action?',
    options: [
      'Mild aching in the thigh',
      'Sudden onset of chest pain, dyspnea, and confusion',
      'Pin sites that are clean and dry',
      'Alignment maintained with weights hanging free'
    ],
    answer: [1],
    rationale: 'Sudden respiratory and neurological symptoms after a long bone fracture suggest fat embolism or pulmonary thromboembolism, both life-threatening. Mild aching, clean pin sites, and correct traction setup are expected.',
    strategy: 'After a femur fracture, sudden dyspnea plus confusion is an embolic event until proven otherwise.' },

  { id: 'PHY-118', cat: 'phys', sub: 'Hematologic', type: 'mc', difficulty: 2,
    stem: 'A client with polycythemia vera should receive which teaching?',
    options: [
      'Restrict fluids to reduce blood volume',
      'Maintain generous fluid intake, avoid prolonged immobility, wear compression stockings if advised, and report signs of clotting such as leg pain, chest pain, or neurological changes',
      'Avoid all activity',
      'Take iron supplements daily'
    ],
    answer: [1],
    rationale: 'Elevated red cell mass raises viscosity and thrombosis risk, so hydration and mobility reduce stasis while thrombotic symptoms require immediate reporting. Fluid restriction increases viscosity, immobility promotes clotting, and iron supplementation would further increase red cell production.',
    strategy: 'Polycythemia is a clotting disease. Hydrate, mobilize, and watch for thrombosis.' },

  { id: 'PHY-119', cat: 'phys', sub: 'Immune', type: 'mc', difficulty: 2,
    stem: 'A client is receiving a kidney transplant and the nurse monitors for acute rejection. Which findings suggest rejection?',
    options: [
      'Increased urine output with falling creatinine',
      'Decreased urine output, rising creatinine, fever, hypertension, and tenderness over the graft site',
      'Weight loss',
      'Improved appetite'
    ],
    answer: [1],
    rationale: 'Acute rejection presents with declining graft function reflected in oliguria and rising creatinine, often with fever, hypertension, weight gain, and graft tenderness. Prompt recognition allows treatment with high-dose corticosteroids and adjustment of immunosuppression.',
    strategy: 'Graft rejection looks like the organ failing plus inflammation. Rising creatinine with graft tenderness is the classic pair.' },

  { id: 'PHY-120', cat: 'phys', sub: 'Fluid and Electrolytes', type: 'mc', difficulty: 2,
    stem: 'A client has been vomiting for 3 days. Which acid-base and electrolyte pattern should the nurse expect?',
    options: [
      'Metabolic acidosis with hyperkalemia',
      'Metabolic alkalosis with hypokalemia, hypochloremia, and volume depletion',
      'Respiratory acidosis',
      'No changes expected'
    ],
    answer: [1],
    rationale: 'Loss of gastric hydrochloric acid produces metabolic alkalosis with chloride depletion, and both the vomiting and the resulting aldosterone response waste potassium. Volume depletion accompanies the losses. Treatment centers on isotonic saline with potassium replacement.',
    strategy: 'Vomiting loses acid from above and causes alkalosis. Diarrhea loses bicarbonate from below and causes acidosis.' },

  { id: 'PHY-121', cat: 'phys', sub: 'Cardiovascular', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching a client after coronary artery bypass surgery about sternal precautions. Which instruction is correct?',
    options: [
      'Push up from a chair using both arms',
      'Avoid lifting more than the prescribed weight limit, avoid pushing and pulling with the arms, splint the chest with a pillow when coughing, and report any sternal clicking or instability',
      'Reach overhead frequently to prevent stiffness',
      'No activity restrictions are needed'
    ],
    answer: [1],
    rationale: 'The sternum requires 6 to 12 weeks to heal, and lifting, pushing, and pulling stress the closure. Pillow splinting supports the incision during coughing, and clicking or movement of the sternum suggests dehiscence requiring evaluation.',
    strategy: 'Sternal precautions: no lifting, no pushing or pulling with the arms, splint when coughing, report clicking.' },

  { id: 'PHY-122', cat: 'phys', sub: 'Respiratory', type: 'mc', difficulty: 2,
    stem: 'A client with a pneumothorax has a chest tube inserted. Which finding indicates the lung is re-expanding?',
    options: [
      'Increasing subcutaneous emphysema',
      'Decreasing air leak, improving breath sounds on the affected side, and improving oxygenation with reduced work of breathing',
      'Continuous vigorous bubbling in the water seal',
      'Worsening dyspnea'
    ],
    answer: [1],
    rationale: 'Resolution of the air leak with returning breath sounds and improved gas exchange confirms re-expansion. Increasing subcutaneous emphysema, persistent vigorous bubbling, and worsening dyspnea all indicate ongoing or worsening air escape.',
    strategy: 'Improving breath sounds and a resolving air leak mean the lung is up. Crackling under the skin means air is escaping into tissue.' },

  { id: 'PHY-123', cat: 'phys', sub: 'Endocrine', type: 'mc', difficulty: 2,
    stem: 'A client with diabetes has a foot ulcer that is not healing. Which factor most impairs wound healing in diabetes?',
    options: [
      'Excess protein intake',
      'Hyperglycemia impairing neutrophil function and collagen synthesis, combined with peripheral neuropathy and vascular disease reducing perfusion',
      'Excess vitamin C',
      'Frequent dressing changes'
    ],
    answer: [1],
    rationale: 'Elevated glucose directly impairs immune cell function and collagen formation, neuropathy allows unrecognized repeated trauma, and arterial disease limits the oxygen and nutrients needed for healing. Glycemic control, offloading, debridement, and vascular assessment together determine the outcome.',
    strategy: 'Diabetic wound healing requires three things: glucose control, offloading pressure, and adequate blood flow.' },

  { id: 'PHY-124', cat: 'phys', sub: 'Gastrointestinal', type: 'mc', difficulty: 2,
    stem: 'A client is scheduled for a cholecystectomy and reports clay-colored stools and dark urine. What do these findings indicate?',
    options: [
      'Normal variation',
      'Biliary obstruction preventing bile from reaching the intestine, so bilirubin is excreted renally instead',
      'Kidney failure',
      'Excess dietary fat'
    ],
    answer: [1],
    rationale: 'Bile pigments give stool its color, so obstruction produces pale clay-colored stool while conjugated bilirubin backs up into the bloodstream and is excreted in urine, darkening it. Jaundice and pruritus commonly accompany the pattern.',
    strategy: 'Clay stool plus dark urine equals biliary obstruction. The bile is going the wrong way.' },

  { id: 'PHY-125', cat: 'phys', sub: 'Renal', type: 'mc', difficulty: 2,
    stem: 'A client is receiving continuous bladder irrigation. How should the nurse calculate true urine output?',
    options: [
      'Record the entire drainage bag volume as output',
      'Subtract the volume of irrigation solution instilled from the total drainage volume',
      'Record only the irrigation volume',
      'Do not record output during irrigation'
    ],
    answer: [1],
    rationale: 'The drainage bag contains both instilled irrigant and the client\'s own urine, so accurate output requires subtracting the irrigation volume from the total. Failing to subtract dramatically overstates output and can mask developing renal impairment.',
    strategy: 'Continuous bladder irrigation: total drainage minus irrigant equals true urine output.' },

  { id: 'PHY-126', cat: 'phys', sub: 'Neurological', type: 'mc', difficulty: 2,
    stem: 'A client with a spinal cord injury at T4 has a blood pressure of 200/110, a pounding headache, flushing above the injury, and pallor below it. After sitting the client upright, what should the nurse do next?',
    options: [
      'Administer an analgesic and reassess',
      'Check for and relieve the noxious stimulus, most often bladder distention from an obstructed catheter, then constipation or impaction, and loosen any constrictive clothing',
      'Lay the client flat',
      'Apply a cooling blanket'
    ],
    answer: [1],
    rationale: 'Autonomic dysreflexia is driven by an unfelt noxious stimulus below the injury level, and removing it resolves the crisis. Bladder distention is the most common cause, followed by bowel impaction and skin irritation. Antihypertensives are used only if the pressure remains dangerously elevated after the stimulus is addressed.',
    strategy: 'Autonomic dysreflexia: sit them up, then bladder, bowel, skin, in that order.' },

  { id: 'PHY-127', cat: 'phys', sub: 'Musculoskeletal', type: 'mc', difficulty: 2,
    stem: 'A client with a spinal fusion is being taught body mechanics. Which instruction is correct?',
    options: [
      'Twist at the waist to reach objects',
      'Log roll when turning, avoid twisting and bending at the waist, and keep objects close to the body when lifting within the prescribed limits',
      'Lift heavy objects with straight legs and a bent back',
      'Sleep on a very soft mattress'
    ],
    answer: [1],
    rationale: 'Log rolling maintains spinal alignment during position changes, and avoiding twisting and forward flexion protects the fusion. Lifting with a bent back and straight legs places maximal shear on the spine, and a firm mattress provides better support.',
    strategy: 'After spinal surgery: log roll, no twisting, no bending at the waist, and lift with the legs.' },

  { id: 'PHY-128', cat: 'phys', sub: 'Oncology', type: 'mc', difficulty: 2,
    stem: 'A client receiving chemotherapy develops mucositis and reports difficulty eating. Which intervention is appropriate?',
    options: [
      'Offer citrus juices and spicy foods',
      'Offer soft bland cool foods, frequent bland mouth rinses, adequate hydration, and analgesia including topical agents before meals',
      'Use a firm toothbrush and alcohol mouthwash',
      'Withhold all oral intake indefinitely'
    ],
    answer: [1],
    rationale: 'Cool bland foods are better tolerated by inflamed mucosa, and pretreatment analgesia allows adequate intake. Acidic, spicy, rough, and alcohol-containing products all cause pain and further injury, and prolonged withholding of intake worsens malnutrition.',
    strategy: 'Mucositis: cool, soft, bland, and medicate before meals. Nothing acidic, spicy, rough, or alcoholic.' },

  { id: 'PHY-129', cat: 'phys', sub: 'Shock', type: 'mc', difficulty: 2,
    stem: 'A client in shock has a rising serum lactate despite fluid resuscitation. What does this indicate?',
    options: [
      'Resuscitation is succeeding',
      'Ongoing tissue hypoperfusion, indicating that current interventions are inadequate and further therapy such as vasopressors or source control is needed',
      'Improved oxygen delivery',
      'A laboratory error requiring no action'
    ],
    answer: [1],
    rationale: 'Lactate clearance is a marker of successful resuscitation, so a rising level indicates continued anaerobic metabolism from inadequate perfusion. Failure to clear lactate predicts mortality and prompts escalation of therapy and reassessment of the underlying cause.',
    strategy: 'Lactate clearance measures whether your resuscitation is actually working. Rising lactate means escalate.' },

  { id: 'PHY-130', cat: 'phys', sub: 'Integumentary', type: 'mc', difficulty: 2,
    stem: 'A client sustains a chemical burn to the forearm. What is the priority action?',
    options: [
      'Apply a neutralizing agent',
      'Remove contaminated clothing and irrigate the area with copious running water for a prolonged period',
      'Apply ice directly to the burn',
      'Cover the area and wait for the provider'
    ],
    answer: [1],
    rationale: 'Copious irrigation dilutes and removes the chemical, which continues to injure tissue until removed. Neutralizing agents generate heat and worsen injury, ice causes further tissue damage, and covering without decontamination allows ongoing burning.',
    strategy: 'Chemical burns: remove the clothing and irrigate for a long time. Never neutralize, never ice.' },

  { id: 'PHY-131', cat: 'phys', sub: 'Cardiovascular', type: 'mc', difficulty: 2,
    stem: 'A client with a deep vein thrombosis is started on anticoagulation. Which nursing intervention is appropriate?',
    options: [
      'Massage the affected leg to improve circulation',
      'Elevate the extremity, apply warm compresses as ordered, monitor for signs of pulmonary embolism, and avoid massaging the limb',
      'Apply cold packs and encourage vigorous exercise',
      'Keep the limb dependent at all times'
    ],
    answer: [1],
    rationale: 'Elevation reduces edema and warmth eases discomfort, while massage risks dislodging the clot into the pulmonary circulation. Sudden dyspnea, chest pain, or hypoxemia signal embolization and require immediate action.',
    strategy: 'Never massage a suspected or confirmed DVT. Elevate, apply warmth, and watch for embolism.' },

  { id: 'PHY-132', cat: 'phys', sub: 'Respiratory', type: 'mc', difficulty: 2,
    stem: 'A client is prescribed incentive spirometry. Which technique should the nurse teach?',
    options: [
      'Exhale forcefully into the device as fast as possible',
      'Exhale normally, seal the lips around the mouthpiece, inhale slowly and deeply to raise the indicator, hold the breath for about 3 to 5 seconds, then exhale and rest before repeating',
      'Take rapid shallow breaths through the device',
      'Use it only once daily'
    ],
    answer: [1],
    rationale: 'Slow sustained maximal inspiration with a breath hold opens collapsed alveoli, which is the purpose of the device. Rapid or forceful maneuvers do not recruit alveoli, and effective use requires about ten breaths every hour while awake.',
    strategy: 'Incentive spirometry is about slow deep inhalation with a hold, not fast exhalation.' },

  { id: 'PHY-133', cat: 'phys', sub: 'Endocrine', type: 'mc', difficulty: 2,
    stem: 'A client with hyperparathyroidism is most likely to have which laboratory findings?',
    options: [
      'Low calcium with high phosphorus',
      'High calcium with low phosphorus, and increased risk of kidney stones and bone demineralization',
      'Normal calcium and phosphorus',
      'Low calcium with low phosphorus'
    ],
    answer: [1],
    rationale: 'Parathyroid hormone raises serum calcium by mobilizing it from bone and increasing renal reabsorption while promoting phosphorus excretion. The result is hypercalcemia with hypophosphatemia, bone weakening, and calcium-containing kidney stones.',
    strategy: 'Parathyroid hormone raises calcium and lowers phosphorus. They move in opposite directions.' },

  { id: 'PHY-134', cat: 'phys', sub: 'Gastrointestinal', type: 'mc', difficulty: 2,
    stem: 'A client with cirrhosis is prescribed a sodium-restricted diet and spironolactone. What is the rationale for choosing spironolactone specifically?',
    options: [
      'It is the most potent diuretic available',
      'It antagonizes aldosterone, which is elevated in cirrhosis because of reduced hepatic clearance and reduced effective circulating volume, and it spares potassium',
      'It works only on the loop of Henle',
      'It has no effect on ascites'
    ],
    answer: [1],
    rationale: 'Secondary hyperaldosteronism drives sodium and water retention in cirrhosis, so an aldosterone antagonist targets the underlying mechanism and avoids the potassium losses that would worsen encephalopathy risk. It is often combined with furosemide in a fixed ratio.',
    strategy: 'Ascites is an aldosterone problem. Spironolactone is the first-line diuretic in cirrhosis, not furosemide alone.' },

  { id: 'PHY-135', cat: 'phys', sub: 'Neurological', type: 'mc', difficulty: 2,
    stem: 'A client with a traumatic brain injury has a serum sodium of 122 mEq/L with concentrated urine and no signs of dehydration. What should the nurse suspect?',
    options: [
      'Diabetes insipidus',
      'Syndrome of inappropriate antidiuretic hormone secretion, requiring fluid restriction and close neurological monitoring',
      'Dehydration',
      'Normal post-injury findings'
    ],
    answer: [1],
    rationale: 'Brain injury commonly triggers inappropriate antidiuretic hormone release, causing water retention with dilutional hyponatremia and inappropriately concentrated urine in a euvolemic client. Fluid restriction is the mainstay, and correction must be gradual to avoid osmotic demyelination.',
    strategy: 'After brain injury, watch for both SIADH and diabetes insipidus. Concentrated urine with low sodium means SIADH.' },

  { id: 'PHY-136', cat: 'phys', sub: 'Musculoskeletal', type: 'mc', difficulty: 2,
    stem: 'A client with a new below-knee prosthesis is learning residual limb care. Which instruction is correct?',
    options: [
      'Apply lotion to the residual limb before donning the prosthesis',
      'Inspect the limb daily including with a mirror, wash and dry it thoroughly, wear the prescribed sock ply for proper fit, and report any redness that does not fade within about 20 minutes',
      'Wear the prosthesis over a damp limb',
      'Ignore areas of redness'
    ],
    answer: [1],
    rationale: 'Daily inspection detects pressure areas before they ulcerate, and thorough drying prevents skin breakdown and fungal infection. Lotion under a prosthesis causes maceration and slippage, and persistent redness indicates a fit problem needing prosthetist evaluation.',
    strategy: 'Residual limb care: inspect daily, keep it clean and dry, no lotion under the socket, report lasting redness.' },

  { id: 'PHY-137', cat: 'phys', sub: 'Hematologic', type: 'mc', difficulty: 2,
    stem: 'A client with leukemia has a white blood cell count of 62,000 per microliter with predominantly immature cells. What is the primary risk?',
    options: [
      'Excellent immune protection from the high count',
      'Severe infection risk despite the high count, because the immature cells are non-functional, along with bleeding from marrow crowding and anemia',
      'Polycythemia',
      'Hypercoagulability only'
    ],
    answer: [1],
    rationale: 'Leukemic blasts do not perform normal phagocytic function, so the client is functionally neutropenic despite a high total count, and marrow replacement suppresses platelet and red cell production. Infection prevention, bleeding precautions, and anemia management are all required.',
    strategy: 'A high white count in leukemia does not mean immunity. Blasts do not fight infection.' },

  { id: 'PHY-138', cat: 'phys', sub: 'Immune', type: 'mc', difficulty: 2,
    stem: 'A client with a latex allergy is scheduled for surgery. Which precaution is most important?',
    options: [
      'Schedule the surgery at the end of the day',
      'Schedule the client as the first case of the day in a latex-safe environment, and verify that all equipment including gloves, tourniquets, tubing, and medication vial stoppers are latex free',
      'Premedicate and use standard supplies',
      'No special precautions are needed for surgery'
    ],
    answer: [1],
    rationale: 'Airborne latex particles from powdered gloves accumulate through the day, so first-case scheduling minimizes exposure. Every item contacting the client must be verified latex free, since intraoperative anaphylaxis from latex is difficult to recognize under anesthesia.',
    strategy: 'Latex allergy: first case of the day, latex-free everything. Premedication does not substitute for avoidance.' },

  { id: 'PHY-139', cat: 'phys', sub: 'Fluid and Electrolytes', type: 'mc', difficulty: 2,
    stem: 'A client with severe hypokalemia is not responding to potassium replacement. Which laboratory value should the nurse check?',
    options: ['Serum calcium', 'Serum magnesium', 'Serum chloride', 'Serum albumin'],
    answer: [1],
    rationale: 'Hypomagnesemia promotes renal potassium wasting and makes hypokalemia refractory to replacement until magnesium is corrected. Magnesium is repleted alongside potassium whenever the deficit is resistant.',
    strategy: 'Refractory hypokalemia means check the magnesium. You cannot fix potassium until magnesium is normal.' },

  { id: 'PHY-140', cat: 'phys', sub: 'Cardiovascular', type: 'mc', difficulty: 2,
    stem: 'A client with acute limb ischemia presents with a cold pale painful leg with absent pulses and new paresthesia. What is the priority action?',
    options: [
      'Elevate the extremity and apply cold',
      'Notify the provider urgently, keep the limb at or slightly below heart level and protected at room temperature, avoid pressure, and prepare for emergent revascularization',
      'Apply a heating pad',
      'Encourage ambulation to build collateral circulation'
    ],
    answer: [1],
    rationale: 'Acute arterial occlusion threatens limb viability within hours, and the classic six Ps of pain, pallor, pulselessness, paresthesia, paralysis, and poikilothermia require emergent vascular intervention. Elevation and cold reduce already-critical perfusion, external heat causes burns in an insensate limb, and ambulation increases oxygen demand the limb cannot meet.',
    strategy: 'Acute limb ischemia is a six P emergency. Do not elevate, do not cool, do not heat. Call vascular surgery.' }
]
