export default [
  { id: 'RSK-001', cat: 'risk', sub: 'Laboratory Values', type: 'mc', difficulty: 3,
    stem: 'A nurse reviews a client\'s laboratory results. Which value requires immediate provider notification?',
    options: ['Sodium 138 mEq/L', 'Potassium 2.6 mEq/L', 'Chloride 101 mEq/L', 'Calcium 9.2 mg/dL'],
    answer: [1],
    rationale: 'A potassium of 2.6 mEq/L is severe hypokalemia that predisposes to ventricular arrhythmia, digoxin toxicity, and respiratory muscle weakness. The other values are within their normal ranges of sodium 135 to 145, chloride 98 to 106, and calcium 9 to 10.5.',
    strategy: 'Memorize the normal ranges cold. Most risk-reduction questions are simply asking which value is dangerously abnormal.' },

  { id: 'RSK-002', cat: 'risk', sub: 'Laboratory Values', type: 'sata', difficulty: 1,
    stem: 'Which laboratory results are outside normal limits for an adult? Select all that apply.',
    options: ['Hemoglobin 8.2 g/dL', 'White blood cells 7,500 per microliter', 'Platelets 42,000 per microliter', 'BUN 16 mg/dL', 'Creatinine 3.8 mg/dL', 'Magnesium 2.0 mEq/L'],
    answer: [0, 2, 4],
    rationale: 'Hemoglobin of 8.2 is low against a normal of roughly 12 to 18, platelets of 42,000 are well below the normal 150,000 to 400,000 with significant bleeding risk, and creatinine of 3.8 indicates marked renal impairment against a normal of 0.6 to 1.2. The white count, BUN, and magnesium are normal.',
    strategy: 'Core ranges: hemoglobin 12 to 18, platelets 150 to 400 thousand, WBC 5 to 10 thousand, BUN 10 to 20, creatinine 0.6 to 1.2.' },

  { id: 'RSK-003', cat: 'risk', sub: 'Diagnostic Tests', type: 'mc', difficulty: 2,
    stem: 'A client is scheduled for a colonoscopy. Which preprocedure instruction is correct?',
    options: [
      'Eat a high-fiber diet the day before',
      'Complete the prescribed bowel preparation, maintain a clear liquid diet as directed, and avoid red or purple liquids',
      'Take all usual medications including anticoagulants',
      'No preparation is required'
    ],
    answer: [1],
    rationale: 'Adequate bowel cleansing determines whether lesions can be seen, and red or purple liquids can be mistaken for blood. High-fiber intake defeats the preparation, and anticoagulants and some diabetes medications are typically adjusted before the procedure.',
    strategy: 'Colonoscopy prep: clear liquids, complete the bowel prep, nothing red or purple, and clarify anticoagulants.' },

  { id: 'RSK-004', cat: 'risk', sub: 'Diagnostic Tests', type: 'mc', difficulty: 2,
    stem: 'A client is scheduled for a cardiac catheterization. Which assessment is most important before the procedure?',
    options: [
      'Bowel sounds',
      'Allergy to iodine or shellfish, renal function, and baseline peripheral pulses',
      'Visual acuity',
      'Grip strength'
    ],
    answer: [1],
    rationale: 'Iodinated contrast can cause anaphylaxis in clients with contrast allergy and contrast-induced nephropathy in those with renal impairment, and baseline distal pulses are needed for comparison after arterial access. The other assessments are not relevant to the specific risks.',
    strategy: 'Before any contrast study: allergies, kidney function, metformin status, and baseline pulses if arterial access is used.' },

  { id: 'RSK-005', cat: 'risk', sub: 'Postprocedure Care', type: 'mc', difficulty: 2,
    stem: 'Four hours after a femoral cardiac catheterization, a client reports back pain and has a heart rate of 118 with a blood pressure of 88/54. What should the nurse suspect?',
    options: [
      'Normal postprocedure discomfort',
      'Retroperitoneal hemorrhage from the arterial puncture site',
      'Anxiety',
      'Contrast reaction'
    ],
    answer: [1],
    rationale: 'New back or flank pain with tachycardia and hypotension after femoral arterial access indicates bleeding into the retroperitoneal space, which is concealed and can be rapidly fatal. Immediate provider notification, fluid resuscitation, and imaging are required.',
    strategy: 'After femoral access, back or flank pain plus falling pressure equals retroperitoneal bleed. The groin may look normal.' },

  { id: 'RSK-006', cat: 'risk', sub: 'Vital Signs', type: 'mc', difficulty: 2,
    stem: 'A nurse assesses a client with a blood pressure of 168/96, heart rate of 58, and irregular respirations following a head injury. What should the nurse do?',
    options: [
      'Document as stable and recheck in 4 hours',
      'Notify the provider immediately, as this pattern suggests rising intracranial pressure',
      'Administer an antihypertensive',
      'Encourage the client to sleep'
    ],
    answer: [1],
    rationale: 'Widening pulse pressure with bradycardia and irregular respirations is Cushing triad, a late sign of dangerously elevated intracranial pressure and impending herniation requiring immediate intervention. Lowering the blood pressure pharmacologically can reduce cerebral perfusion pressure and worsen ischemia.',
    strategy: 'Cushing triad is a neurosurgical emergency. Do not treat the hypertension; treat the pressure inside the skull.' },

  { id: 'RSK-007', cat: 'risk', sub: 'Respiratory', type: 'mc', difficulty: 3,
    stem: 'A nurse is caring for a client with chronic obstructive pulmonary disease receiving oxygen. Which finding requires immediate attention?',
    options: [
      'Oxygen saturation of 90 percent on 2 L nasal cannula',
      'Increasing somnolence and confusion after the oxygen was increased to 6 L',
      'Barrel chest appearance',
      'Pursed-lip breathing'
    ],
    answer: [1],
    rationale: 'In some clients with chronic carbon dioxide retention, high-flow oxygen worsens hypercapnia through several mechanisms, producing somnolence and confusion that precede narcosis and respiratory arrest. Barrel chest and pursed-lip breathing are chronic adaptations, and a saturation of 90 percent is often acceptable in this population.',
    strategy: 'In COPD, aim for a saturation around 88 to 92 percent. New somnolence on oxygen means carbon dioxide is rising.' },

  { id: 'RSK-008', cat: 'risk', sub: 'Postoperative', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client on the first postoperative day after abdominal surgery. Which intervention best prevents atelectasis?',
    options: [
      'Encourage bed rest',
      'Encourage incentive spirometry every hour while awake, deep breathing and coughing with incisional splinting, and early ambulation',
      'Restrict fluids',
      'Administer a cough suppressant'
    ],
    answer: [1],
    rationale: 'Lung expansion maneuvers, effective coughing with splinting for comfort, and early mobilization reverse the shallow breathing that causes postoperative atelectasis. Bed rest, dehydration that thickens secretions, and cough suppression all promote it.',
    strategy: 'Postoperative pulmonary care: spirometry, cough and deep breathe, splint the incision, and get them walking.' },

  { id: 'RSK-009', cat: 'risk', sub: 'Laboratory Values', type: 'mc', difficulty: 2,
    stem: 'A client with diabetes has a hemoglobin A1c of 10.2 percent. What does this indicate?',
    options: [
      'Excellent glycemic control',
      'Poor glycemic control over the previous 2 to 3 months, corresponding to an average glucose well above target',
      'The client\'s glucose today is 102 mg/dL',
      'The client has hypoglycemia'
    ],
    answer: [1],
    rationale: 'Hemoglobin A1c reflects average glycemia over the lifespan of the red cell, roughly 2 to 3 months, with a target generally below 7 percent for most adults. A value of 10.2 corresponds to an average glucose of about 250 mg/dL. It is not a point-in-time measurement.',
    strategy: 'A1c targets: under 5.7 normal, 5.7 to 6.4 prediabetes, 6.5 or above diagnostic, under 7 the usual treatment goal.' },

  { id: 'RSK-010', cat: 'risk', sub: 'Cardiac Monitoring', type: 'mc', difficulty: 3,
    stem: 'A nurse reviews an electrocardiogram showing tall peaked T waves and a widening QRS complex. Which laboratory value should the nurse check first?',
    options: ['Serum sodium', 'Serum potassium', 'Serum calcium', 'Serum glucose'],
    answer: [1],
    rationale: 'Peaked T waves are the earliest electrocardiographic sign of hyperkalemia, progressing to a widened QRS, loss of P waves, and a sine wave pattern preceding cardiac arrest. Immediate treatment includes calcium to stabilize the myocardium and measures to shift and remove potassium.',
    strategy: 'Peaked T waves equal high potassium. Flattened T waves with U waves equal low potassium.' },

  { id: 'RSK-011', cat: 'risk', sub: 'Diagnostic Tests', type: 'mc', difficulty: 2,
    stem: 'A nurse is preparing a client for a liver biopsy. Which laboratory result is most important to review beforehand?',
    options: ['Serum sodium', 'Coagulation studies including prothrombin time and platelet count', 'Blood glucose', 'Urinalysis'],
    answer: [1],
    rationale: 'The liver produces clotting factors, so impaired synthetic function combined with a highly vascular organ makes hemorrhage the principal biopsy complication. Coagulation status must be adequate before the procedure, and the client lies on the right side afterward to apply pressure.',
    strategy: 'Before any biopsy of a vascular organ, check coagulation. After a liver biopsy, position on the right side.' },

  { id: 'RSK-012', cat: 'risk', sub: 'Postprocedure Care', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client after a bronchoscopy. Which intervention is the priority?',
    options: [
      'Offer fluids immediately to soothe the throat',
      'Keep the client NPO until the gag reflex returns',
      'Encourage vigorous coughing',
      'Ambulate immediately'
    ],
    answer: [1],
    rationale: 'Topical anesthesia suppresses the gag reflex, so oral intake before its return causes aspiration. The reflex is checked before any fluids are offered. Blood-tinged sputum is expected, but frank bleeding or respiratory distress requires immediate reporting.',
    strategy: 'After any procedure using throat anesthesia, nothing by mouth until the gag reflex returns.' },

  { id: 'RSK-013', cat: 'risk', sub: 'Fluid Balance', type: 'mc', difficulty: 2,
    stem: 'A nurse assesses a client and finds bounding pulses, jugular venous distention, crackles, and a 3 kg weight gain in 2 days. What does this indicate?',
    options: ['Fluid volume deficit', 'Fluid volume excess', 'Normal findings', 'Hypokalemia'],
    answer: [1],
    rationale: 'Rapid weight gain, distended neck veins, bounding pulses, and pulmonary crackles all indicate fluid volume overload. One kilogram of weight change equals approximately 1 liter of fluid, making daily weights the most sensitive measure of fluid status.',
    strategy: '1 kg equals 1 liter. Daily weights beat intake and output records for accuracy.' },

  { id: 'RSK-014', cat: 'risk', sub: 'Neurological', type: 'mc', difficulty: 2,
    stem: 'A nurse is assessing a client using the Glasgow Coma Scale. The client opens eyes to painful stimuli, makes incomprehensible sounds, and withdraws from pain. What is the score?',
    options: ['6', '8', '10', '12'],
    answer: [1],
    rationale: 'Eye opening to pain scores 2, incomprehensible sounds score 2, and withdrawal from pain scores 4, totaling 8. A score of 8 or below generally indicates a need for airway protection.',
    strategy: 'Less than 8, intubate. The scale runs from 3 to 15, never zero.' },

  { id: 'RSK-015', cat: 'risk', sub: 'Postoperative', type: 'mc', difficulty: 3,
    stem: 'A nurse is monitoring a client in the postanesthesia care unit. Which finding requires immediate intervention?',
    options: [
      'Blood pressure 112/68',
      'Snoring respirations with decreasing oxygen saturation',
      'Shivering',
      'Reporting pain of 4 out of 10'
    ],
    answer: [1],
    rationale: 'Snoring indicates partial airway obstruction from a relaxed tongue in a sedated client, and falling saturation confirms compromised ventilation, requiring immediate airway repositioning and possible airway adjunct. The blood pressure is acceptable, shivering is common after anesthesia, and moderate pain is treatable but not emergent.',
    strategy: 'Snoring in a postanesthesia client is airway obstruction, not sleep. Reposition the airway immediately.' },

  { id: 'RSK-016', cat: 'risk', sub: 'Laboratory Values', type: 'mc', difficulty: 2,
    stem: 'A client is receiving warfarin and has an INR of 2.4 with a target of 2 to 3. What should the nurse do?',
    options: [
      'Hold the dose and notify the provider',
      'Administer the dose as ordered and continue routine monitoring',
      'Administer vitamin K',
      'Double the dose'
    ],
    answer: [1],
    rationale: 'An INR of 2.4 is within the therapeutic target range, so the dose is given as ordered. Holding, reversing, or increasing the dose would all move the client out of the therapeutic window.',
    strategy: 'Know the target before you act. A therapeutic value needs no intervention.' },

  { id: 'RSK-017', cat: 'risk', sub: 'Respiratory', type: 'mc', difficulty: 3,
    stem: 'A client with a chest tube has the drainage system knocked over and the tubing disconnects from the chest tube. What should the nurse do first?',
    options: [
      'Clamp the chest tube',
      'Submerge the end of the chest tube in sterile water or saline to create a water seal, then obtain a new drainage system',
      'Reconnect the contaminated tubing',
      'Call the provider before doing anything'
    ],
    answer: [1],
    rationale: 'Submerging the tube end creates a temporary water seal that allows air to escape from the pleural space while preventing atmospheric air from entering. Clamping traps air and can cause tension pneumothorax, and reconnecting contaminated tubing introduces infection.',
    strategy: 'Chest tube disconnects: put the end in sterile water. Chest tube pulls out of the chest: occlusive dressing taped on three sides.' },

  { id: 'RSK-018', cat: 'risk', sub: 'Cardiac Monitoring', type: 'mc', difficulty: 2,
    stem: 'A client\'s troponin I level is markedly elevated. What does this indicate?',
    options: ['Liver injury', 'Myocardial injury', 'Renal failure', 'Pancreatic inflammation'],
    answer: [1],
    rationale: 'Troponin is highly specific to cardiac muscle and rises within a few hours of myocardial injury, remaining elevated for days, which makes it the primary biomarker for myocardial infarction. Liver injury raises transaminases and lipase reflects pancreatic injury.',
    strategy: 'Troponin is the cardiac marker. It rises in 3 to 4 hours, peaks around 24 hours, and stays up for up to 2 weeks.' },

  { id: 'RSK-019', cat: 'risk', sub: 'Diagnostic Tests', type: 'mc', difficulty: 2,
    stem: 'A client is scheduled for a magnetic resonance imaging scan and reports claustrophobia. Which intervention is most appropriate?',
    options: [
      'Cancel the study permanently',
      'Discuss options with the provider including anxiolytic premedication, an open scanner, or a guided relaxation approach, and explain what to expect',
      'Tell the client to simply keep their eyes closed',
      'Proceed without addressing the concern'
    ],
    answer: [1],
    rationale: 'Claustrophobia is common and manageable with premedication, open-configuration scanners, or preparation and coaching, so the study proceeds rather than being abandoned. Ignoring the concern typically produces an aborted or non-diagnostic study.',
    strategy: 'Anxiety about a procedure is addressed with preparation and premedication, not by cancellation or dismissal.' },

  { id: 'RSK-020', cat: 'risk', sub: 'Fluid Balance', type: 'sata', difficulty: 1,
    stem: 'Which findings indicate fluid volume deficit? Select all that apply.',
    options: ['Tachycardia', 'Postural hypotension', 'Bounding pulse', 'Elevated urine specific gravity', 'Dry mucous membranes', 'Jugular venous distention'],
    answer: [0, 1, 3, 4],
    rationale: 'Volume depletion produces compensatory tachycardia, orthostatic blood pressure changes, concentrated urine with high specific gravity, and dry mucous membranes. Bounding pulses and distended neck veins indicate volume excess instead.',
    strategy: 'Deficit: fast, dry, concentrated, flat neck veins. Excess: bounding, wet, dilute, distended neck veins.' },

  { id: 'RSK-021', cat: 'risk', sub: 'Postoperative', type: 'mc', difficulty: 2,
    stem: 'A client 2 days after abdominal surgery has absent bowel sounds, abdominal distention, nausea, and has not passed flatus. What should the nurse suspect?',
    options: ['Normal postoperative recovery', 'Paralytic ileus', 'Wound infection', 'Anastomotic healing'],
    answer: [1],
    rationale: 'Absent bowel sounds with distention and no passage of flatus beyond the expected first day or two suggests paralytic ileus, managed with nothing by mouth, nasogastric decompression if needed, electrolyte correction, ambulation, and minimizing opioids. Bowel function normally returns within 24 to 72 hours.',
    strategy: 'The return of flatus signals bowel function has resumed. Its absence with distention is ileus.' },

  { id: 'RSK-022', cat: 'risk', sub: 'Laboratory Values', type: 'mc', difficulty: 3,
    stem: 'A client has an arterial blood gas showing pH 7.28, PaCO2 58 mmHg, and HCO3 25 mEq/L. How should the nurse interpret this?',
    options: [
      'Metabolic acidosis',
      'Respiratory acidosis, uncompensated',
      'Respiratory alkalosis',
      'Metabolic alkalosis'
    ],
    answer: [1],
    rationale: 'A low pH with an elevated PaCO2 and a normal bicarbonate indicates uncompensated respiratory acidosis from hypoventilation. The bicarbonate has not yet risen to compensate, which takes days.',
    strategy: 'ROME: Respiratory Opposite (pH and CO2 move opposite), Metabolic Equal (pH and bicarbonate move together).' },

  { id: 'RSK-023', cat: 'risk', sub: 'Laboratory Values', type: 'mc', difficulty: 3,
    stem: 'A client\'s arterial blood gas shows pH 7.50, PaCO2 30 mmHg, and HCO3 24 mEq/L. Which condition most likely explains this?',
    options: ['Hypoventilation from an opioid overdose', 'Hyperventilation from anxiety or pain', 'Prolonged vomiting', 'Diabetic ketoacidosis'],
    answer: [1],
    rationale: 'A high pH with a low PaCO2 and normal bicarbonate is respiratory alkalosis from blowing off carbon dioxide, most often through anxiety-driven or pain-driven hyperventilation. Opioid overdose causes respiratory acidosis, vomiting causes metabolic alkalosis, and ketoacidosis causes metabolic acidosis.',
    strategy: 'Look at the pH first for the direction, then find whether CO2 or bicarbonate explains it.' },

  { id: 'RSK-024', cat: 'risk', sub: 'Neurological', type: 'mc', difficulty: 2,
    stem: 'A nurse is monitoring a client after a stroke. Which finding suggests increasing intracranial pressure?',
    options: [
      'Blood pressure 124/78 with heart rate 76',
      'Decreasing level of consciousness with a sluggish pupil on one side',
      'Complaint of thirst',
      'Improving hand grip strength'
    ],
    answer: [1],
    rationale: 'A declining level of consciousness is the earliest and most sensitive indicator of rising intracranial pressure, and a unilaterally sluggish or dilated pupil suggests third nerve compression from developing herniation. Stable vital signs, thirst, and improving strength are reassuring.',
    strategy: 'Level of consciousness changes first in rising intracranial pressure. Cushing triad and pupil changes come later.' },

  { id: 'RSK-025', cat: 'risk', sub: 'Diagnostic Tests', type: 'mc', difficulty: 2,
    stem: 'A nurse is preparing a client for a thoracentesis. Which position is appropriate?',
    options: [
      'Supine with arms at the sides',
      'Sitting upright leaning forward over a bedside table with arms supported',
      'Prone',
      'Left lateral with knees to chest'
    ],
    answer: [1],
    rationale: 'Sitting upright and leaning forward widens the intercostal spaces and allows fluid to collect at the lung base where it can be reached. The client must remain still and avoid coughing during needle insertion, and pneumothorax is the principal complication afterward.',
    strategy: 'Thoracentesis: sit up and lean forward. Lumbar puncture: curl into a ball on the side.' },

  { id: 'RSK-026', cat: 'risk', sub: 'Postprocedure Care', type: 'mc', difficulty: 3,
    stem: 'Immediately after a thoracentesis, a client develops sudden sharp chest pain, dyspnea, and absent breath sounds on the procedure side. What should the nurse suspect?',
    options: ['Expected discomfort', 'Pneumothorax', 'Pulmonary embolism', 'Anxiety'],
    answer: [1],
    rationale: 'Needle puncture of the visceral pleura allows air into the pleural space, producing sudden pain, dyspnea, and absent breath sounds over the affected side. A chest radiograph is obtained and chest tube insertion may be required.',
    strategy: 'Pneumothorax is the classic thoracentesis complication. Unilateral absent breath sounds is the giveaway.' },

  { id: 'RSK-027', cat: 'risk', sub: 'Cardiac Monitoring', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client on telemetry who develops a rhythm with no discernible P waves and an irregularly irregular ventricular response at 140. What is this rhythm?',
    options: ['Sinus tachycardia', 'Atrial fibrillation with rapid ventricular response', 'Ventricular tachycardia', 'Third-degree heart block'],
    answer: [1],
    rationale: 'Absent P waves with an irregularly irregular ventricular rhythm defines atrial fibrillation, and a rate of 140 constitutes rapid ventricular response requiring rate control and anticoagulation assessment because of stroke risk. Ventricular tachycardia produces wide regular complexes.',
    strategy: 'Irregularly irregular with no P waves is atrial fibrillation. The clot risk is why anticoagulation matters.' },

  { id: 'RSK-028', cat: 'risk', sub: 'Postoperative', type: 'mc', difficulty: 3,
    stem: 'A client had a total hip replacement and is at risk for venous thromboembolism. Which assessment finding requires immediate action?',
    options: [
      'Mild incisional discomfort',
      'Unilateral calf swelling with warmth, redness, and tenderness',
      'Serosanguineous drainage on the dressing',
      'Low-grade temperature of 37.6 degrees Celsius'
    ],
    answer: [1],
    rationale: 'Unilateral calf swelling, warmth, and tenderness suggest deep vein thrombosis, which can embolize to the lungs. The extremity is not massaged, the provider is notified, and imaging with anticoagulation is anticipated. The other findings are expected early postoperatively.',
    strategy: 'Suspected DVT: notify, do not massage, do not ambulate until cleared.' },

  { id: 'RSK-029', cat: 'risk', sub: 'Laboratory Values', type: 'mc', difficulty: 2,
    stem: 'A client\'s serum sodium is 118 mEq/L. Which assessment finding should the nurse anticipate?',
    options: ['Extreme thirst and dry mucous membranes', 'Confusion, headache, and risk of seizures', 'Hypertension and bounding pulse', 'Constipation'],
    answer: [1],
    rationale: 'Severe hyponatremia causes water to shift into brain cells, producing cerebral edema with headache, confusion, seizures, and coma. Correction must be gradual to avoid osmotic demyelination. Thirst and dry membranes are more typical of hypernatremia.',
    strategy: 'Sodium problems are neurological problems. Low sodium swells the brain, high sodium shrinks it.' },

  { id: 'RSK-030', cat: 'risk', sub: 'Respiratory', type: 'mc', difficulty: 2,
    stem: 'A nurse is suctioning a client with a tracheostomy. Which technique is correct?',
    options: [
      'Apply suction while inserting the catheter',
      'Insert without suction, then apply intermittent suction while withdrawing, limiting each pass to about 10 to 15 seconds',
      'Suction continuously for 30 seconds',
      'Instill saline before each pass'
    ],
    answer: [1],
    rationale: 'Suction is applied only on withdrawal to avoid stripping mucosa on the way in, and passes are limited to about 10 to 15 seconds with hyperoxygenation between to prevent hypoxemia and bradycardia. Saline instillation dislodges bacteria into the lower airway and causes desaturation.',
    strategy: 'Suction on the way out only, 10 to 15 seconds, hyperoxygenate between passes, no saline lavage.' },

  { id: 'RSK-031', cat: 'risk', sub: 'Diagnostic Tests', type: 'mc', difficulty: 2,
    stem: 'A client is scheduled for an upper gastrointestinal endoscopy. Which preprocedure instruction is correct?',
    options: [
      'Eat a light breakfast the morning of the procedure',
      'Take nothing by mouth for the specified period beforehand, and arrange transportation home because sedation will be given',
      'Drink plenty of fluids up to the procedure',
      'No fasting is necessary'
    ],
    answer: [1],
    rationale: 'Fasting empties the stomach for visualization and prevents aspiration under sedation, and moderate sedation prohibits driving afterward. The gag reflex must return before oral intake resumes.',
    strategy: 'Any procedure with sedation: fasting before, a ride home after, and no driving for the rest of the day.' },

  { id: 'RSK-032', cat: 'risk', sub: 'Fluid Balance', type: 'mc', difficulty: 3,
    stem: 'A client receiving IV fluids has a urine output of 15 mL per hour, a heart rate of 118, and a blood pressure of 92/58. Which action should the nurse take first?',
    options: [
      'Administer a diuretic',
      'Assess the client fully including volume status and perfusion, verify the IV is infusing, and notify the provider',
      'Restrict fluids',
      'Document and reassess in 4 hours'
    ],
    answer: [1],
    rationale: 'Oliguria with tachycardia and hypotension suggests inadequate perfusion, most often from hypovolemia, and requires assessment and provider notification for likely fluid resuscitation. A diuretic in a hypovolemic client worsens perfusion and can precipitate acute kidney injury.',
    strategy: 'Low output with low pressure means give fluid, not diuretics. Low output with high pressure and overload means diurese.' },

  { id: 'RSK-033', cat: 'risk', sub: 'Cardiac Monitoring', type: 'mc', difficulty: 2,
    stem: 'A client is scheduled for an exercise stress test. Which instruction should the nurse provide?',
    options: [
      'Eat a large meal beforehand for energy',
      'Avoid caffeine, smoking, and heavy meals before the test, wear comfortable shoes and clothing, and clarify which cardiac medications to hold',
      'Take all medications including beta blockers as usual',
      'Drink several cups of coffee to increase heart rate'
    ],
    answer: [1],
    rationale: 'Caffeine and nicotine alter the cardiovascular response and interfere with pharmacologic stress agents, heavy meals divert blood flow, and beta blockers blunt the heart rate response needed for a diagnostic test, so medication instructions are clarified in advance.',
    strategy: 'Before a stress test: no caffeine, no smoking, no heavy meal, and check which cardiac drugs to hold.' },

  { id: 'RSK-034', cat: 'risk', sub: 'Neurological', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client after a lumbar puncture who reports a severe headache that worsens when sitting up and improves when lying flat. What should the nurse suspect?',
    options: ['Meningitis', 'Post-dural puncture headache from cerebrospinal fluid leak', 'Migraine', 'Increased intracranial pressure'],
    answer: [1],
    rationale: 'A positional headache after lumbar puncture reflects cerebrospinal fluid leakage with traction on meninges, treated with flat positioning, hydration, caffeine, and an epidural blood patch if severe. Meningitis produces fever and nuchal rigidity, and headaches from raised intracranial pressure typically worsen when lying flat.',
    strategy: 'Positional headache after a lumbar puncture equals CSF leak. Better lying flat, worse sitting up.' },

  { id: 'RSK-035', cat: 'risk', sub: 'Laboratory Values', type: 'mc', difficulty: 2,
    stem: 'A client is being evaluated for a possible pulmonary embolism. Which laboratory test is most relevant?',
    options: ['Amylase', 'D-dimer', 'Alkaline phosphatase', 'Serum albumin'],
    answer: [1],
    rationale: 'D-dimer is a fibrin degradation product that is highly sensitive but not specific for thromboembolism, so a normal result in a low-risk client effectively excludes it while an elevated result requires imaging with CT pulmonary angiography.',
    strategy: 'D-dimer rules out, it does not rule in. A positive result always requires imaging.' },

  { id: 'RSK-036', cat: 'risk', sub: 'Postoperative', type: 'mc', difficulty: 3,
    stem: 'A nurse is caring for a client who had a transurethral resection of the prostate. Which finding requires immediate action?',
    options: [
      'Light pink-tinged urine',
      'Bright red urine with clots and decreased catheter output with bladder distention',
      'Mild bladder spasms',
      'Urge to void with the catheter in place'
    ],
    answer: [1],
    rationale: 'Bright red bleeding with clots obstructing outflow causes bladder distention that can lead to hemorrhage and clot retention, requiring increased irrigation, hand irrigation per order, and provider notification. Pink-tinged urine, spasms, and a sensation of needing to void are all expected after this procedure.',
    strategy: 'After prostate surgery, watch the color and the output. Darkening plus decreasing output equals obstruction.' },

  { id: 'RSK-037', cat: 'risk', sub: 'Respiratory', type: 'mc', difficulty: 2,
    stem: 'A client on a mechanical ventilator triggers a high-pressure alarm. Which cause should the nurse assess for first?',
    options: [
      'Circuit disconnection',
      'Secretions in the airway, kinked tubing, or the client biting the tube',
      'A leak in the cuff',
      'Extubation'
    ],
    answer: [1],
    rationale: 'High-pressure alarms indicate increased resistance to airflow, most commonly from secretions requiring suction, kinked tubing, coughing, biting, or worsening compliance from bronchospasm or pneumothorax. Disconnection, cuff leak, and extubation all produce low-pressure alarms instead.',
    strategy: 'High pressure means something is blocking. Low pressure means something is disconnected or leaking.' },

  { id: 'RSK-038', cat: 'risk', sub: 'Diagnostic Tests', type: 'mc', difficulty: 2,
    stem: 'A nurse is collecting a sputum specimen for culture. When is the best time to collect it?',
    options: [
      'Any time during the day after eating',
      'Early morning before eating, after the client rinses the mouth with water',
      'Immediately after a meal',
      'After the client has used mouthwash'
    ],
    answer: [1],
    rationale: 'Overnight accumulation of secretions makes early morning specimens the most concentrated, and rinsing with plain water removes oral flora without the antibacterial effect of mouthwash, which would suppress growth. Food particles contaminate the specimen.',
    strategy: 'Sputum culture: early morning, rinse with water only, deep cough, not saliva.' },

  { id: 'RSK-039', cat: 'risk', sub: 'Fluid Balance', type: 'mc', difficulty: 2,
    stem: 'A client\'s serum calcium is 12.8 mg/dL. Which assessment finding should the nurse anticipate?',
    options: [
      'Muscle twitching and positive Chvostek sign',
      'Lethargy, muscle weakness, constipation, and increased risk of kidney stones',
      'Seizures and tetany',
      'Hyperactive deep tendon reflexes'
    ],
    answer: [1],
    rationale: 'Hypercalcemia depresses neuromuscular excitability, producing lethargy, weakness, constipation, and renal calculi. Twitching, tetany, seizures, and positive Chvostek and Trousseau signs indicate hypocalcemia instead.',
    strategy: 'Calcium sedates. High calcium makes everything sluggish; low calcium makes everything twitchy.' },

  { id: 'RSK-040', cat: 'risk', sub: 'Postprocedure Care', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client after a renal biopsy. Which instruction is most important?',
    options: [
      'Ambulate immediately to prevent clots',
      'Maintain bed rest for the prescribed period, avoid heavy lifting and strenuous activity for about 2 weeks, and report any gross hematuria or flank pain',
      'Restrict all fluids',
      'Resume normal activity immediately'
    ],
    answer: [1],
    rationale: 'The kidney is highly vascular, so bed rest followed by activity restriction allows the puncture site to seal, and hematuria or flank pain signals bleeding. Fluids are encouraged rather than restricted to maintain urine flow and prevent clot formation in the collecting system.',
    strategy: 'After kidney biopsy: bed rest, no lifting for 2 weeks, push fluids, report gross blood in the urine.' }
  ,
  { id: 'RSK-041', cat: 'risk', sub: 'Laboratory Values', type: 'mc', difficulty: 2,
    stem: 'A client receiving heparin has a platelet count that has dropped to 85,000 per microliter. What should the nurse do?',
    options: [
      'Continue the heparin as ordered',
      'Notify the provider immediately, as this may indicate heparin-induced thrombocytopenia requiring discontinuation of all heparin',
      'Increase the heparin dose',
      'Administer platelets'
    ],
    answer: [1],
    rationale: 'A significant platelet drop during heparin therapy raises concern for heparin-induced thrombocytopenia, a prothrombotic immune reaction requiring immediate cessation of all heparin exposure and substitution of a non-heparin anticoagulant. Platelet transfusion is generally avoided because it can worsen thrombosis.',
    strategy: 'Monitor platelets on heparin. A fall of more than half between days 5 and 10 is HIT until proven otherwise.' },

  { id: 'RSK-042', cat: 'risk', sub: 'Vital Signs', type: 'mc', difficulty: 3,
    stem: 'A nurse measures a client\'s blood pressure as 88/52 and the client is dizzy on standing. Which action should the nurse take first?',
    options: [
      'Have the client walk to improve circulation',
      'Assist the client to lie down, elevate the legs, and reassess vital signs and mental status',
      'Administer an antihypertensive',
      'Encourage the client to sit up quickly'
    ],
    answer: [1],
    rationale: 'Supine positioning with leg elevation improves venous return and cerebral perfusion immediately while reassessment establishes the cause. Ambulation risks syncope and injury, and antihypertensives would worsen the hypotension.',
    strategy: 'Hypotension with dizziness: lie them down and raise the legs before anything else.' },

  { id: 'RSK-043', cat: 'risk', sub: 'Cardiac Monitoring', type: 'mc', difficulty: 2,
    stem: 'A client on a cardiac monitor develops a wide-complex regular rhythm at 170 with no palpable pulse. What is the priority action?',
    options: [
      'Administer adenosine',
      'Begin CPR and prepare for immediate defibrillation',
      'Perform synchronized cardioversion',
      'Obtain a 12-lead electrocardiogram first'
    ],
    answer: [1],
    rationale: 'Pulseless ventricular tachycardia is treated exactly like ventricular fibrillation with immediate high-quality CPR and unsynchronized defibrillation. Synchronized cardioversion is for unstable clients who still have a pulse, and diagnostics never precede resuscitation in a pulseless client.',
    strategy: 'Pulse present and unstable equals synchronized cardioversion. No pulse equals defibrillation and CPR.' },

  { id: 'RSK-044', cat: 'risk', sub: 'Postoperative', type: 'mc', difficulty: 3,
    stem: 'A nurse assesses a client 6 hours after surgery and finds no urine output since the procedure. What should the nurse do first?',
    options: [
      'Notify the provider immediately',
      'Assess for bladder distention with a bladder scan and evaluate hydration status and catheter patency',
      'Administer a diuretic',
      'Increase IV fluids substantially'
    ],
    answer: [1],
    rationale: 'Postoperative anuria may reflect urinary retention from anesthesia and opioids, an obstructed catheter, or true hypovolemia, and the bladder scan distinguishes retention from inadequate production, which determines whether catheterization or fluid resuscitation is needed. Both diuretics and large fluid boluses can be harmful before the cause is known.',
    strategy: 'No urine output: scan the bladder first. Full bladder means retention; empty bladder means a perfusion or kidney problem.' },

  { id: 'RSK-045', cat: 'risk', sub: 'Laboratory Values', type: 'mc', difficulty: 2,
    stem: 'A client with cirrhosis has an elevated serum ammonia level. Which assessment finding correlates with this?',
    options: ['Jaundice', 'Asterixis and confusion', 'Ascites', 'Spider angiomas'],
    answer: [1],
    rationale: 'Ammonia crosses the blood-brain barrier and produces hepatic encephalopathy with asterixis, confusion, and progressive obtundation. Jaundice, ascites, and spider angiomas reflect other aspects of hepatic dysfunction but do not track with ammonia.',
    strategy: 'Ammonia goes to the brain. Asterixis, the flapping tremor, is the classic sign.' },

  { id: 'RSK-046', cat: 'risk', sub: 'Diagnostic Tests', type: 'mc', difficulty: 2,
    stem: 'A nurse is preparing a client for an intravenous pyelogram. Which client history is most important to report?',
    options: [
      'History of asthma controlled with an inhaler',
      'Allergy to iodinated contrast media and a creatinine of 2.8 mg/dL',
      'History of appendectomy',
      'Family history of diabetes'
    ],
    answer: [1],
    rationale: 'Contrast allergy risks anaphylaxis and impaired renal function risks contrast-induced nephropathy, either of which may lead to premedication, hydration protocols, or selection of an alternative imaging study. The other history items do not bear directly on the procedure risk.',
    strategy: 'Every contrast study asks the same two questions: allergy and kidney function.' },

  { id: 'RSK-047', cat: 'risk', sub: 'Neurological', type: 'mc', difficulty: 3,
    stem: 'A nurse performs a neurovascular assessment on a client with a newly casted forearm. Which finding is most concerning?',
    options: [
      'Capillary refill of 2 seconds',
      'Numbness and tingling of the fingers with inability to move them',
      'Mild swelling of the fingers',
      'Warm fingers with a strong radial pulse'
    ],
    answer: [1],
    rationale: 'Numbness with motor loss indicates nerve compromise from compartment pressure or a tight cast and requires immediate action to prevent permanent injury. Normal capillary refill, mild swelling, and warm well-perfused fingers with a strong pulse are reassuring.',
    strategy: 'Sensory changes come before motor loss in nerve compression. Do not wait for pulselessness.' },

  { id: 'RSK-048', cat: 'risk', sub: 'Respiratory', type: 'mc', difficulty: 3,
    stem: 'A client with a pulse oximetry reading of 84 percent is alert and speaking in full sentences with warm dry skin. What should the nurse do first?',
    options: [
      'Immediately intubate the client',
      'Assess the client and verify the reading by checking probe placement, perfusion, nail polish, and motion artifact while applying oxygen',
      'Ignore the reading entirely',
      'Administer a sedative'
    ],
    answer: [1],
    rationale: 'A reading that conflicts with the clinical picture requires verification, since poor perfusion, cold extremities, nail polish, and motion all cause falsely low readings, while oxygen is applied as a precaution during assessment. Intubation without assessment and dismissing the value entirely are both unsafe.',
    strategy: 'Treat the client, verify the number. But apply oxygen while you check.' },

  { id: 'RSK-049', cat: 'risk', sub: 'Fluid Balance', type: 'mc', difficulty: 2,
    stem: 'A client\'s serum magnesium is 1.2 mEq/L. Which assessment finding should the nurse anticipate?',
    options: [
      'Depressed deep tendon reflexes',
      'Hyperactive reflexes, tremors, and increased risk of torsades de pointes',
      'Constipation',
      'Bradycardia'
    ],
    answer: [1],
    rationale: 'Hypomagnesemia increases neuromuscular excitability with hyperreflexia and tremor and predisposes to torsades de pointes and refractory hypokalemia. Depressed reflexes, constipation, and bradycardia characterize hypermagnesemia.',
    strategy: 'Low magnesium excites, high magnesium sedates. Low magnesium also makes low potassium impossible to correct.' },

  { id: 'RSK-050', cat: 'risk', sub: 'Postprocedure Care', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client after a paracentesis. Which assessment is the priority?',
    options: [
      'Bowel sounds',
      'Vital signs for hypotension, since rapid removal of large volumes of ascitic fluid can cause intravascular volume depletion',
      'Deep tendon reflexes',
      'Pupillary response'
    ],
    answer: [1],
    rationale: 'Large-volume paracentesis shifts fluid from the intravascular space into the peritoneum, producing hypotension and reduced renal perfusion, which is why albumin is often given with removal of large volumes. The site is also monitored for leakage and bleeding.',
    strategy: 'After large-volume paracentesis: watch the blood pressure, weigh the client, measure the girth, and check the site for leaking.' },

  { id: 'RSK-051', cat: 'risk', sub: 'Laboratory Values', type: 'mc', difficulty: 2,
    stem: 'A client with sepsis has a lactate of 4.8 mmol/L. What does this indicate?',
    options: [
      'Adequate tissue perfusion',
      'Tissue hypoperfusion with anaerobic metabolism, indicating severity and requiring aggressive resuscitation',
      'Kidney failure only',
      'A normal finding in infection'
    ],
    answer: [1],
    rationale: 'Elevated lactate reflects inadequate oxygen delivery to tissues forcing anaerobic metabolism, and a value above 4 mmol/L identifies septic shock physiology requiring fluid resuscitation with serial lactate measurement to assess response.',
    strategy: 'Lactate above 2 is concerning and above 4 is severe. Clearance of lactate shows resuscitation is working.' },

  { id: 'RSK-052', cat: 'risk', sub: 'Cardiac Monitoring', type: 'mc', difficulty: 2,
    stem: 'A nurse is preparing a client for a 12-lead electrocardiogram. Which action is correct?',
    options: [
      'Have the client exercise immediately before',
      'Position the client supine and still, place electrodes on clean dry skin at the anatomically correct locations, and ensure the client does not talk during recording',
      'Place all electrodes on the arms and legs only',
      'Perform it during ambulation'
    ],
    answer: [1],
    rationale: 'Motion, muscle activity, and speech all produce artifact, and precise precordial lead placement is essential because misplacement alters the tracing and can produce false diagnoses. Ten electrodes produce the 12 leads: six precordial and four limb.',
    strategy: 'ECG accuracy depends on lead placement and stillness. Misplaced V leads mimic infarction patterns.' },

  { id: 'RSK-053', cat: 'risk', sub: 'Postoperative', type: 'sata', difficulty: 2,
    stem: 'Which findings in a postoperative client suggest developing hemorrhagic shock? Select all that apply.',
    options: [
      'Tachycardia with a narrowing pulse pressure',
      'Cool clammy skin',
      'Bradycardia with warm flushed skin',
      'Restlessness and anxiety',
      'Decreasing urine output',
      'Bounding peripheral pulses'
    ],
    answer: [0, 1, 3, 4],
    rationale: 'Hemorrhage triggers compensatory tachycardia and vasoconstriction producing cool clammy skin, narrowed pulse pressure, and reduced renal perfusion, with restlessness from cerebral hypoperfusion often the earliest sign. Bradycardia with warm flushed skin and bounding pulses point away from hypovolemic shock.',
    strategy: 'Restlessness is the earliest shock sign, and blood pressure is the last thing to fall. Do not wait for hypotension.' },

  { id: 'RSK-054', cat: 'risk', sub: 'Diagnostic Tests', type: 'mc', difficulty: 2,
    stem: 'A client is scheduled for a fasting blood glucose test. Which instruction is correct?',
    options: [
      'Fast for 2 hours before the test',
      'Take nothing by mouth except water for at least 8 hours before the test',
      'Eat a normal breakfast',
      'Drink juice before the test'
    ],
    answer: [1],
    rationale: 'A minimum 8-hour fast with only water permitted allows a valid fasting measurement, since any caloric intake raises glucose and invalidates the result.',
    strategy: 'Fasting means nothing but water for 8 hours. Coffee with cream or juice ruins the test.' },

  { id: 'RSK-055', cat: 'risk', sub: 'Respiratory', type: 'mc', difficulty: 3,
    stem: 'A client with a tracheostomy suddenly develops respiratory distress and the tracheostomy tube appears to have become dislodged. What should the nurse do first?',
    options: [
      'Wait for the provider to arrive',
      'Call for help, attempt to reinsert using the obturator or replace with a same-size or smaller tube per protocol, and ventilate over the stoma or by mask if reinsertion fails',
      'Cover the stoma and administer oxygen by nasal cannula only',
      'Perform chest compressions'
    ],
    answer: [1],
    rationale: 'A dislodged tracheostomy tube is an airway emergency. Help is summoned, reinsertion is attempted with the obturator and a spare tube kept at the bedside, and if that fails ventilation is provided over the stoma or by bag-mask depending on how long the stoma has been present. Waiting causes hypoxic arrest.',
    strategy: 'Always keep a spare tracheostomy tube of the same size and one size smaller, plus an obturator, at the bedside.' },

  { id: 'RSK-056', cat: 'risk', sub: 'Fluid Balance', type: 'mc', difficulty: 3,
    stem: 'A client receiving furosemide reports muscle cramps and weakness. Which laboratory value should the nurse check first?',
    options: ['Serum potassium', 'Serum bilirubin', 'White blood cell count', 'Serum amylase'],
    answer: [0],
    rationale: 'Loop diuretics waste potassium, and hypokalemia produces muscle cramps, weakness, and arrhythmia. Magnesium is also frequently depleted and should be checked, since hypokalemia is refractory to correction until magnesium is repleted.',
    strategy: 'Diuretic plus cramps equals check potassium and magnesium. You cannot fix potassium until magnesium is normal.' },

  { id: 'RSK-057', cat: 'risk', sub: 'Laboratory Values', type: 'mc', difficulty: 2,
    stem: 'A client\'s white blood cell differential shows a marked increase in bands. What does this suggest?',
    options: [
      'Chronic viral infection',
      'An acute bacterial infection with the bone marrow releasing immature neutrophils, described as a left shift',
      'Allergic reaction',
      'Normal finding'
    ],
    answer: [1],
    rationale: 'A left shift, meaning increased band forms, indicates that the marrow is releasing immature neutrophils in response to acute bacterial infection. Eosinophilia suggests allergy or parasitic infection, and lymphocytosis suggests viral illness.',
    strategy: 'Bands up equals bacterial. Eosinophils up equals allergy or parasites. Lymphocytes up equals virus.' },

  { id: 'RSK-058', cat: 'risk', sub: 'Postprocedure Care', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client after cataract surgery. Which instruction is most important?',
    options: [
      'Bend over frequently to promote drainage',
      'Avoid bending at the waist, lifting more than the prescribed limit, straining, and rubbing the eye, and report sudden pain or vision loss immediately',
      'Rub the eye if it feels itchy',
      'Sleep on the operative side'
    ],
    answer: [1],
    rationale: 'Activities that raise intraocular pressure risk wound dehiscence and hemorrhage, and sudden pain or vision loss suggests increased pressure or hemorrhage requiring immediate evaluation. Sleeping on the operative side puts pressure on the eye.',
    strategy: 'After eye surgery: nothing that raises intraocular pressure. No bending, lifting, straining, coughing, or rubbing.' },

  { id: 'RSK-059', cat: 'risk', sub: 'Vital Signs', type: 'mc', difficulty: 2,
    stem: 'A nurse is assessing a client with a temperature of 39.4 degrees Celsius, heart rate of 124, respiratory rate of 26, and blood pressure of 96/54. What should the nurse suspect?',
    options: ['Normal variation', 'A systemic inflammatory response possibly from sepsis, requiring prompt evaluation', 'Dehydration only', 'Anxiety'],
    answer: [1],
    rationale: 'Fever with tachycardia, tachypnea, and hypotension meets criteria for a systemic inflammatory response and, with a suspected infection source, indicates sepsis requiring immediate cultures, lactate, antibiotics, and fluid resuscitation.',
    strategy: 'Fever plus tachycardia plus tachypnea plus falling pressure equals sepsis until proven otherwise. Start the bundle.' },

  { id: 'RSK-060', cat: 'risk', sub: 'Neurological', type: 'mc', difficulty: 2,
    stem: 'A nurse is assessing a client for signs of meningeal irritation. Which finding supports this?',
    options: [
      'Positive Homans sign',
      'Nuchal rigidity with a positive Brudzinski sign',
      'Positive Chvostek sign',
      'Positive Trousseau sign'
    ],
    answer: [1],
    rationale: 'Neck stiffness with involuntary hip and knee flexion on neck flexion, the Brudzinski sign, indicates meningeal irritation, as does the Kernig sign. Homans relates to deep vein thrombosis and Chvostek and Trousseau to hypocalcemia.',
    strategy: 'Brudzinski and Kernig equal meninges. Chvostek and Trousseau equal low calcium. Homans equals clot.' },

  { id: 'RSK-061', cat: 'risk', sub: 'Diagnostic Tests', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching a client about a 24-hour Holter monitor. Which instruction is correct?',
    options: [
      'Remove the monitor when showering and reapply it afterward',
      'Keep the monitor on continuously, maintain a diary of activities and any symptoms with the times they occur, and avoid getting the device wet',
      'Restrict all activity while wearing it',
      'Remove electrodes if they itch'
    ],
    answer: [1],
    rationale: 'The purpose is to correlate symptoms with the rhythm during ordinary daily activity, which requires continuous wear and an accurate symptom diary. Restricting activity defeats the purpose, and removing the device or electrodes creates gaps in the recording.',
    strategy: 'Holter monitoring depends on the diary. Without recorded symptom times, the tracing cannot be correlated.' },

  { id: 'RSK-062', cat: 'risk', sub: 'Postoperative', type: 'mc', difficulty: 3,
    stem: 'A client 3 days after a bowel resection develops a fever of 38.9 degrees Celsius, abdominal pain, and purulent drainage from the incision. What should the nurse suspect and do?',
    options: [
      'Normal healing; continue routine care',
      'Surgical site infection or possible anastomotic leak; notify the provider, obtain cultures as ordered, and monitor for sepsis',
      'Deep vein thrombosis',
      'Atelectasis'
    ],
    answer: [1],
    rationale: 'Fever with abdominal pain and purulent wound drainage on postoperative day 3 suggests surgical site infection and raises concern for an anastomotic leak, which can progress rapidly to peritonitis and septic shock. Prompt notification, cultures, and imaging are needed.',
    strategy: 'Postoperative fever timeline: day 1 to 2 atelectasis, day 3 to 5 urinary tract or wound, day 5 or later wound and clot.' },

  { id: 'RSK-063', cat: 'risk', sub: 'Laboratory Values', type: 'mc', difficulty: 2,
    stem: 'A client with kidney disease has a phosphorus of 6.8 mg/dL. What should the nurse anticipate?',
    options: [
      'Increasing dietary phosphorus',
      'Administering a phosphate binder with meals and restricting high-phosphorus foods such as dairy, nuts, and cola beverages',
      'Administering calcium gluconate IV',
      'No intervention needed'
    ],
    answer: [1],
    rationale: 'Failing kidneys cannot excrete phosphorus, and the resulting hyperphosphatemia drives calcium down and stimulates parathyroid hormone, causing bone disease and vascular calcification. Binders taken with meals block absorption from food.',
    strategy: 'Phosphate binders must be taken with meals to work. Taken between meals, they do nothing.' },

  { id: 'RSK-064', cat: 'risk', sub: 'Respiratory', type: 'mc', difficulty: 2,
    stem: 'A client is receiving oxygen by non-rebreather mask. Which observation indicates the device is functioning correctly?',
    options: [
      'The reservoir bag collapses completely with each breath',
      'The reservoir bag remains at least partially inflated throughout the respiratory cycle',
      'The bag is removed for comfort',
      'The flow rate is set at 2 L per minute'
    ],
    answer: [1],
    rationale: 'The reservoir must stay partially inflated to deliver the high oxygen concentration the device is designed for, which requires a flow rate of at least 10 to 15 L per minute. Complete collapse means the flow is inadequate and the client is entraining room air.',
    strategy: 'Non-rebreather bag must never fully collapse. If it does, turn the flow up.' },

  { id: 'RSK-065', cat: 'risk', sub: 'Cardiac Monitoring', type: 'mc', difficulty: 3,
    stem: 'A nurse is caring for a client with a temporary pacemaker who develops hiccups and the monitor shows pacing spikes without subsequent QRS complexes. What should the nurse recognize?',
    options: [
      'Normal pacemaker function',
      'Failure to capture, possibly with lead displacement causing diaphragmatic stimulation; notify the provider immediately',
      'Failure to sense',
      'Oversensing'
    ],
    answer: [1],
    rationale: 'Pacing spikes without a resulting complex indicate failure to capture, and hiccups suggest the lead has migrated and is stimulating the diaphragm. The provider is notified urgently because the client is effectively unpaced. Failure to sense produces spikes falling inappropriately after intrinsic beats.',
    strategy: 'Spike with no complex equals failure to capture. Hiccups plus a pacemaker equals lead displacement.' },

  { id: 'RSK-066', cat: 'risk', sub: 'Fluid Balance', type: 'mc', difficulty: 2,
    stem: 'A nurse is monitoring a client receiving a large volume of blood products rapidly. Which electrolyte complication should the nurse anticipate?',
    options: [
      'Hypernatremia',
      'Hypocalcemia from the citrate anticoagulant binding calcium',
      'Hyperkalemia only',
      'Hyperchloremia'
    ],
    answer: [1],
    rationale: 'Citrate used to anticoagulate stored blood chelates ionized calcium, producing hypocalcemia with perioral tingling, tremor, and prolonged QT during massive transfusion. Hyperkalemia from older stored units and hypothermia are also concerns.',
    strategy: 'Massive transfusion complications: low calcium from citrate, high potassium, hypothermia, and dilutional coagulopathy.' },

  { id: 'RSK-067', cat: 'risk', sub: 'Diagnostic Tests', type: 'mc', difficulty: 2,
    stem: 'A nurse is preparing a client for an electroencephalogram. Which instruction is appropriate?',
    options: [
      'Drink several cups of coffee beforehand to stay alert',
      'Wash the hair the night before without applying products, and follow instructions about sleep deprivation and medication holds if given',
      'Take all sedatives before the test',
      'Fast for 12 hours'
    ],
    answer: [1],
    rationale: 'Clean hair without oils or sprays allows good electrode contact, and stimulants and sedatives both alter the tracing so specific instructions are followed. Sleep deprivation is sometimes requested deliberately to provoke abnormalities, and prolonged fasting is avoided because hypoglycemia alters the recording.',
    strategy: 'EEG prep: clean hair, no caffeine, clarify which medications to hold, and do not fast completely.' },

  { id: 'RSK-068', cat: 'risk', sub: 'Postoperative', type: 'mc', difficulty: 3,
    stem: 'A nurse is caring for a client with an epidural catheter for postoperative analgesia. Which finding requires immediate provider notification?',
    options: [
      'Mild numbness in the surgical dermatome',
      'New back pain with progressive lower extremity weakness and difficulty voiding',
      'Itching of the trunk',
      'Nausea relieved by an antiemetic'
    ],
    answer: [1],
    rationale: 'New back pain with progressive motor weakness and bladder dysfunction suggests epidural hematoma or abscess compressing the spinal cord, which causes permanent paralysis unless decompressed within hours. Localized numbness, pruritus, and treatable nausea are expected effects.',
    strategy: 'Epidural plus new back pain plus leg weakness equals emergency imaging. Time to decompression determines the outcome.' },

  { id: 'RSK-069', cat: 'risk', sub: 'Laboratory Values', type: 'mc', difficulty: 2,
    stem: 'A client\'s blood urea nitrogen is 48 mg/dL with a creatinine of 1.1 mg/dL. What does this pattern suggest?',
    options: [
      'Intrinsic kidney damage',
      'A prerenal cause such as dehydration, heart failure, or gastrointestinal bleeding, since BUN rises disproportionately to creatinine',
      'Normal values',
      'Postrenal obstruction only'
    ],
    answer: [1],
    rationale: 'A BUN to creatinine ratio above about 20 to 1 indicates a prerenal state where reduced renal perfusion drives urea reabsorption while creatinine remains relatively unchanged. Intrinsic kidney injury raises both proportionally.',
    strategy: 'BUN rises out of proportion to creatinine in dehydration, heart failure, and GI bleeding.' },

  { id: 'RSK-070', cat: 'risk', sub: 'Neurological', type: 'mc', difficulty: 2,
    stem: 'A nurse is performing a neurological check on a client and notes a change in pupil size from 3 mm bilaterally to 6 mm on the right with a sluggish response. What should the nurse do?',
    options: [
      'Document and recheck in 4 hours',
      'Notify the provider immediately, as a new unilateral dilated sluggish pupil suggests third cranial nerve compression from rising intracranial pressure',
      'Dim the lights and reassess',
      'Administer an analgesic'
    ],
    answer: [1],
    rationale: 'A newly unilateral dilated poorly reactive pupil indicates compression of the oculomotor nerve by herniating brain tissue, a neurosurgical emergency. Any delay in reporting risks irreversible injury.',
    strategy: 'A new blown pupil is an emergency, not a documentation finding.' },

  { id: 'RSK-071', cat: 'risk', sub: 'Respiratory', type: 'mc', difficulty: 2,
    stem: 'A client with a chest tube for a pneumothorax has had no tidaling in the water seal chamber for several hours and the lung has re-expanded on radiograph. What does this most likely indicate?',
    options: [
      'The tube is obstructed and requires immediate stripping',
      'The lung has re-expanded and the tube may be ready for removal per provider evaluation',
      'A tension pneumothorax is developing',
      'The drainage system is broken'
    ],
    answer: [1],
    rationale: 'Tidaling reflects pressure changes in the pleural space, so its cessation combined with radiographic re-expansion and no air leak indicates resolution. The same finding with worsening respiratory status would instead suggest obstruction. Stripping chest tubes generates dangerously high negative pressure and is not recommended.',
    strategy: 'Interpret chest tube findings alongside the client. No tidaling plus improving client equals resolution; no tidaling plus worsening client equals obstruction.' },

  { id: 'RSK-072', cat: 'risk', sub: 'Vital Signs', type: 'mc', difficulty: 2,
    stem: 'A nurse is measuring a blood pressure and the cuff is too small for the client\'s arm. What effect will this have?',
    options: [
      'A falsely low reading',
      'A falsely high reading',
      'No effect on accuracy',
      'An unreadable result'
    ],
    answer: [1],
    rationale: 'A cuff that is too narrow requires more pressure to occlude the artery, producing a falsely elevated reading, while an oversized cuff produces a falsely low one. The bladder should encircle about 80 percent of the arm with a width about 40 percent of the arm circumference.',
    strategy: 'Cuff too small reads high, cuff too large reads low. Same for placing the arm below heart level, which reads high.' },

  { id: 'RSK-073', cat: 'risk', sub: 'Postprocedure Care', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client after a bone marrow biopsy from the posterior iliac crest. Which action is appropriate?',
    options: [
      'Encourage immediate ambulation',
      'Apply pressure to the site, monitor for bleeding, and have the client lie supine on the site for the prescribed period',
      'Apply heat to the site',
      'Leave the site uncovered'
    ],
    answer: [1],
    rationale: 'Direct pressure with supine positioning on the puncture site controls bleeding, which is the principal complication, particularly in clients with thrombocytopenia who commonly require this procedure. Heat promotes bleeding and an uncovered site risks infection.',
    strategy: 'After bone marrow biopsy: pressure, lie on the site, watch for bleeding. These clients often have low platelets.' },

  { id: 'RSK-074', cat: 'risk', sub: 'Laboratory Values', type: 'mc', difficulty: 2,
    stem: 'A client receiving chemotherapy has a rapid rise in potassium, phosphorus, and uric acid with a falling calcium and rising creatinine. What should the nurse suspect?',
    options: ['Refeeding syndrome', 'Tumor lysis syndrome', 'Neutropenic fever', 'Contrast nephropathy'],
    answer: [1],
    rationale: 'Rapid destruction of tumor cells releases intracellular contents, producing hyperkalemia, hyperphosphatemia, hyperuricemia, secondary hypocalcemia, and acute kidney injury. Prevention includes aggressive hydration and allopurinol or rasburicase, and hyperkalemia is the immediate threat to life.',
    strategy: 'Tumor lysis: potassium, phosphate, and uric acid up, calcium down. Hydrate before chemotherapy starts.' },

  { id: 'RSK-075', cat: 'risk', sub: 'Cardiac Monitoring', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client with an implanted cardioverter defibrillator who reports the device fired once and now feels well with normal vital signs. What should the nurse do?',
    options: [
      'Take no action since the client feels well',
      'Assess the client, obtain an electrocardiogram, and notify the provider so the device can be interrogated to determine what rhythm triggered the shock',
      'Deactivate the device with a magnet',
      'Prepare for immediate defibrillation'
    ],
    answer: [1],
    rationale: 'Every discharge requires evaluation, since it may indicate a genuine arrhythmia needing treatment adjustment or an inappropriate shock from lead problems or supraventricular rhythms. Device interrogation reveals the triggering rhythm. Magnet application is reserved for specific circumstances under direction.',
    strategy: 'Any ICD firing gets evaluated. A single shock with recovery still needs interrogation; multiple shocks are an emergency.' },

  { id: 'RSK-076', cat: 'risk', sub: 'Diagnostic Tests', type: 'mc', difficulty: 2,
    stem: 'A client is scheduled for a thyroid scan using radioactive iodine. Which question is most important for the nurse to ask?',
    options: [
      'Do you have a history of asthma?',
      'Is there any possibility that you are pregnant, and are you currently breastfeeding?',
      'Do you exercise regularly?',
      'What is your usual bedtime?'
    ],
    answer: [1],
    rationale: 'Radioactive iodine crosses the placenta and concentrates in the fetal thyroid, causing permanent damage, and it is excreted in breast milk, so pregnancy and lactation are absolute contraindications. Recent iodinated contrast and certain medications also interfere with uptake.',
    strategy: 'Before any radiation exposure or radiopharmaceutical, always ask about pregnancy and breastfeeding.' },

  { id: 'RSK-077', cat: 'risk', sub: 'Postoperative', type: 'mc', difficulty: 3,
    stem: 'A nurse is caring for a client with a nasogastric tube to suction who develops shallow breathing, muscle weakness, and a serum bicarbonate of 34 mEq/L. What should the nurse suspect?',
    options: [
      'Respiratory acidosis',
      'Metabolic alkalosis from loss of gastric hydrochloric acid, with compensatory hypoventilation',
      'Metabolic acidosis',
      'Respiratory alkalosis'
    ],
    answer: [1],
    rationale: 'Continuous gastric suction removes hydrogen and chloride ions, producing metabolic alkalosis with a raised bicarbonate, and the body compensates by hypoventilating to retain carbon dioxide. Potassium is also lost, contributing to muscle weakness.',
    strategy: 'Vomiting and gastric suction cause metabolic alkalosis. Diarrhea causes metabolic acidosis because bicarbonate is lost below.' },

  { id: 'RSK-078', cat: 'risk', sub: 'Fluid Balance', type: 'mc', difficulty: 2,
    stem: 'A nurse is calculating a client\'s output. The client had 350 mL urine, 120 mL from a Jackson-Pratt drain, 200 mL nasogastric drainage, and 150 mL emesis. What is the total output?',
    options: ['470 mL', '670 mL', '820 mL', '900 mL'],
    answer: [2],
    rationale: '350 plus 120 plus 200 plus 150 equals 820 mL. All measurable fluid losses count as output, including drains, tube drainage, emesis, and liquid stool.',
    strategy: 'Output is everything measurable that leaves: urine, drains, emesis, liquid stool, and significant wound drainage.' },

  { id: 'RSK-079', cat: 'risk', sub: 'Respiratory', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client after a total laryngectomy. Which assessment is the priority?',
    options: [
      'Ability to speak',
      'Patency of the airway and adequacy of ventilation through the permanent stoma',
      'Bowel sounds',
      'Range of motion'
    ],
    answer: [1],
    rationale: 'After total laryngectomy the client breathes exclusively through a permanent tracheostoma with no connection between the upper airway and the lungs, so stoma patency is the entire airway. Obstruction is immediately fatal, and mouth-to-stoma rescue breathing is required if resuscitation is needed.',
    strategy: 'Total laryngectomy means the stoma is the only airway. Nothing enters the lungs through the nose or mouth.' },

  { id: 'RSK-080', cat: 'risk', sub: 'Laboratory Values', type: 'mc', difficulty: 2,
    stem: 'A nurse reviews a urinalysis showing large leukocyte esterase, positive nitrites, and many bacteria. What does this suggest?',
    options: ['Normal urine', 'Urinary tract infection', 'Glomerulonephritis', 'Dehydration only'],
    answer: [1],
    rationale: 'Leukocyte esterase reflects white cells and nitrites indicate bacteria capable of reducing nitrate, so this combination with visible bacteria strongly supports urinary tract infection. Glomerulonephritis characteristically produces blood and protein with red cell casts.',
    strategy: 'Nitrites plus leukocyte esterase equals urinary tract infection. Protein plus red cell casts equals glomerular disease.' }
  ,
  { id: 'RSK-081', cat: 'risk', sub: 'Postoperative', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client after a tonsillectomy. Which finding most suggests postoperative hemorrhage?',
    options: [
      'Complaint of sore throat',
      'Frequent swallowing and clearing of the throat',
      'Low-grade temperature',
      'Request for cold fluids'
    ],
    answer: [1],
    rationale: 'Blood trickling down the posterior pharynx prompts frequent swallowing, which is the earliest sign of tonsillar hemorrhage before visible bleeding or vomiting of blood occurs. Sore throat, mild fever, and thirst are expected.',
    strategy: 'After tonsillectomy, frequent swallowing is bleeding until proven otherwise. Also avoid straws, red fluids, and coughing.' },

  { id: 'RSK-082', cat: 'risk', sub: 'Laboratory Values', type: 'mc', difficulty: 2,
    stem: 'A client\'s prothrombin time is markedly prolonged and the client has cirrhosis. What does this reflect?',
    options: [
      'Excess clotting factor production',
      'Impaired hepatic synthesis of clotting factors, increasing bleeding risk',
      'Dehydration',
      'An infection'
    ],
    answer: [1],
    rationale: 'The liver synthesizes most clotting factors, so hepatic failure prolongs the prothrombin time and creates significant bleeding risk, which compounds the danger from esophageal varices and thrombocytopenia of splenic sequestration.',
    strategy: 'Liver failure equals bleeding risk. Add varices and low platelets and the risk multiplies.' },

  { id: 'RSK-083', cat: 'risk', sub: 'Cardiac Monitoring', type: 'mc', difficulty: 3,
    stem: 'A nurse is caring for a client with an arterial line. Which finding requires immediate action?',
    options: [
      'A sharp clear waveform with a dicrotic notch',
      'A dampened waveform with the hand distal to the insertion site appearing pale and cool',
      'The transducer leveled at the phlebostatic axis',
      'A pressure bag inflated to 300 mmHg'
    ],
    answer: [1],
    rationale: 'A dampened tracing with distal pallor and coolness suggests arterial occlusion or thrombosis threatening the limb, requiring immediate assessment and likely catheter removal. A crisp waveform, correct transducer leveling, and appropriate pressure bag inflation all indicate proper function.',
    strategy: 'Always check the hand distal to an arterial line. Circulation to the extremity outranks the waveform quality.' },

  { id: 'RSK-084', cat: 'risk', sub: 'Diagnostic Tests', type: 'mc', difficulty: 2,
    stem: 'A nurse is obtaining a blood specimen for a peak drug level. When should it be drawn?',
    options: [
      'Immediately before the next dose',
      'At the time specified for that drug after the dose is complete, typically 30 minutes to 1 hour after an IV infusion ends',
      'Any time convenient',
      'During the infusion'
    ],
    answer: [1],
    rationale: 'Peak levels reflect maximum serum concentration and must be drawn at the drug-specific interval after administration to be interpretable, while troughs are drawn immediately before the next dose. Drawing during an infusion or at random produces uninterpretable values.',
    strategy: 'Trough goes right before the dose, peak goes after the dose at the specified interval. Timing is everything.' },

  { id: 'RSK-085', cat: 'risk', sub: 'Neurological', type: 'mc', difficulty: 2,
    stem: 'A client with a spinal cord injury at C5 is at greatest risk for which complication?',
    options: [
      'Loss of bowel function only',
      'Respiratory compromise, since the diaphragm is innervated by C3 through C5',
      'Loss of vision',
      'Hearing loss'
    ],
    answer: [1],
    rationale: 'The phrenic nerve arises from C3 to C5, so injuries at or above this level compromise diaphragmatic function and can require ventilatory support. The memory device is C3, 4, and 5 keep the diaphragm alive. Bowel and bladder dysfunction also occur but do not threaten life immediately.',
    strategy: 'C3, 4, 5 keep the diaphragm alive. Any injury at or above C5 threatens breathing.' },

  { id: 'RSK-086', cat: 'risk', sub: 'Respiratory', type: 'mc', difficulty: 2,
    stem: 'A nurse assesses a client and hears coarse crackles that clear with coughing. What does this indicate?',
    options: [
      'Pulmonary fibrosis',
      'Secretions in the larger airways that mobilize with an effective cough',
      'Pleural effusion',
      'Pneumothorax'
    ],
    answer: [1],
    rationale: 'Crackles that clear after coughing represent mobile secretions in larger airways rather than fixed pathology. Fine crackles that persist suggest fluid in alveoli or interstitial disease, and effusion and pneumothorax produce diminished or absent sounds.',
    strategy: 'Always reassess breath sounds after coughing. What clears is secretions; what persists is disease.' },

  { id: 'RSK-087', cat: 'risk', sub: 'Fluid Balance', type: 'mc', difficulty: 2,
    stem: 'A client with syndrome of inappropriate antidiuretic hormone secretion will most likely have which findings?',
    options: [
      'Hypernatremia with dilute urine and polyuria',
      'Hyponatremia with concentrated urine, fluid retention, and risk of neurological changes',
      'Hypokalemia with dehydration',
      'Hypercalcemia with polyuria'
    ],
    answer: [1],
    rationale: 'Excess antidiuretic hormone causes water retention that dilutes serum sodium while producing inappropriately concentrated urine, and the resulting hyponatremia risks cerebral edema and seizures. Treatment centers on fluid restriction. Diabetes insipidus produces the opposite picture.',
    strategy: 'SIADH holds water: low sodium, concentrated urine, restrict fluids. Diabetes insipidus dumps water: high sodium, dilute urine, replace fluids.' },

  { id: 'RSK-088', cat: 'risk', sub: 'Postprocedure Care', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client after an arteriovenous fistula creation. Which assessment confirms patency?',
    options: [
      'Absence of any sound over the site',
      'Palpable thrill and audible bruit over the fistula',
      'A strong pulse distal to the fistula only',
      'Coolness of the extremity'
    ],
    answer: [1],
    rationale: 'A palpable vibration and audible whooshing sound confirm turbulent arterial flow into the vein and therefore patency. Absence of thrill and bruit indicates thrombosis requiring immediate provider notification, and coolness suggests steal syndrome.',
    strategy: 'Feel for the thrill, listen for the bruit, every shift. Absence means the access has clotted.' },

  { id: 'RSK-089', cat: 'risk', sub: 'Laboratory Values', type: 'mc', difficulty: 2,
    stem: 'A client has a serum albumin of 2.1 g/dL. Which finding is most likely related?',
    options: ['Hypertension', 'Generalized edema from reduced oncotic pressure', 'Polycythemia', 'Hyperglycemia'],
    answer: [1],
    rationale: 'Albumin maintains plasma oncotic pressure, so hypoalbuminemia allows fluid to shift into the interstitial space causing edema and ascites. It also reduces the binding capacity for highly protein-bound drugs, raising free drug levels.',
    strategy: 'Low albumin equals edema and higher free drug levels. Watch for toxicity from protein-bound drugs like phenytoin and warfarin.' },

  { id: 'RSK-090', cat: 'risk', sub: 'Vital Signs', type: 'mc', difficulty: 2,
    stem: 'A nurse is assessing an apical-radial pulse and finds an apical rate of 96 with a radial rate of 78. What does this indicate?',
    options: [
      'Normal finding',
      'A pulse deficit indicating some ventricular contractions are too weak to produce a peripheral pulse, often seen in atrial fibrillation',
      'Measurement error requiring no follow-up',
      'Hypertension'
    ],
    answer: [1],
    rationale: 'A pulse deficit means the heart is contracting without generating adequate stroke volume to reach the periphery, most commonly with atrial fibrillation or frequent ectopy, and the finding is reported. Apical and radial rates should be measured simultaneously by two people.',
    strategy: 'Apical minus radial equals the pulse deficit. It signals ineffective contractions, not a counting mistake.' },

  { id: 'RSK-091', cat: 'risk', sub: 'Diagnostic Tests', type: 'mc', difficulty: 2,
    stem: 'A nurse is preparing a client for an ultrasound of the gallbladder. Which instruction is appropriate?',
    options: [
      'Eat a fatty meal before the test',
      'Take nothing by mouth for the specified period, typically 8 to 12 hours, so the gallbladder distends and can be visualized',
      'Drink several glasses of water immediately before',
      'No preparation is needed'
    ],
    answer: [1],
    rationale: 'Fasting allows the gallbladder to fill with bile and distend, which is necessary for visualization of stones and wall thickening. Eating causes the gallbladder to contract, making the study non-diagnostic. Pelvic ultrasound, by contrast, requires a full bladder.',
    strategy: 'Gallbladder ultrasound needs fasting. Pelvic ultrasound needs a full bladder. They are opposite preparations.' },

  { id: 'RSK-092', cat: 'risk', sub: 'Postoperative', type: 'mc', difficulty: 2,
    stem: 'A client 8 hours after a thyroidectomy reports tingling around the mouth and in the fingertips with muscle twitching. What should the nurse suspect and prepare for?',
    options: [
      'Thyroid storm; prepare beta blockers',
      'Hypocalcemia from inadvertent parathyroid injury; check calcium, assess Chvostek and Trousseau signs, and have calcium gluconate available',
      'Hemorrhage; prepare for reoperation',
      'Normal postoperative sensation'
    ],
    answer: [1],
    rationale: 'The parathyroid glands can be damaged or removed during thyroidectomy, producing hypocalcemia within the first 24 to 72 hours with perioral and digital paresthesias progressing to tetany and laryngospasm. IV calcium gluconate must be available at the bedside.',
    strategy: 'After thyroidectomy, watch for three things: bleeding, airway compromise, and hypocalcemia from parathyroid injury.' },

  { id: 'RSK-093', cat: 'risk', sub: 'Respiratory', type: 'mc', difficulty: 3,
    stem: 'A client with blunt chest trauma develops sudden severe dyspnea, tracheal deviation to the left, absent breath sounds on the right, and hypotension. What should the nurse anticipate?',
    options: [
      'Chest physiotherapy',
      'Immediate needle decompression followed by chest tube insertion for tension pneumothorax',
      'A nebulizer treatment',
      'Elective chest radiograph before any intervention'
    ],
    answer: [1],
    rationale: 'Tracheal deviation away from the affected side with absent breath sounds and hemodynamic compromise defines tension pneumothorax, which obstructs venous return and causes cardiac arrest within minutes. Treatment is immediate needle decompression; waiting for imaging is fatal.',
    strategy: 'Tension pneumothorax is a clinical diagnosis treated before imaging. The trachea deviates away from the affected side.' },

  { id: 'RSK-094', cat: 'risk', sub: 'Laboratory Values', type: 'sata', difficulty: 2,
    stem: 'Which laboratory findings would the nurse expect in a client with untreated diabetic ketoacidosis? Select all that apply.',
    options: [
      'Serum glucose above 250 mg/dL',
      'Arterial pH below 7.30',
      'Serum bicarbonate below 18 mEq/L',
      'Negative serum and urine ketones',
      'An elevated anion gap',
      'Serum osmolality markedly elevated with no ketones'
    ],
    answer: [0, 1, 2, 4],
    rationale: 'Diabetic ketoacidosis is defined by hyperglycemia, metabolic acidosis with a low pH and bicarbonate, an elevated anion gap, and positive ketones. Marked hyperosmolality without ketones describes hyperosmolar hyperglycemic state instead.',
    strategy: 'DKA has ketones and acidosis. Hyperosmolar hyperglycemic state has much higher glucose but no significant ketosis.' },

  { id: 'RSK-095', cat: 'risk', sub: 'Cardiac Monitoring', type: 'mc', difficulty: 2,
    stem: 'A nurse notes a prolonged QT interval on a client\'s electrocardiogram. Which complication should the nurse anticipate?',
    options: [
      'Atrial fibrillation',
      'Torsades de pointes, a polymorphic ventricular tachycardia that can degenerate into ventricular fibrillation',
      'First-degree heart block',
      'Sinus bradycardia'
    ],
    answer: [1],
    rationale: 'QT prolongation predisposes to torsades de pointes, treated with IV magnesium. Contributing factors include hypokalemia, hypomagnesemia, hypocalcemia, and many medications such as certain antiarrhythmics, antipsychotics, ondansetron, and macrolides.',
    strategy: 'Long QT leads to torsades. Give magnesium and correct potassium, magnesium, and calcium.' },

  { id: 'RSK-096', cat: 'risk', sub: 'Fluid Balance', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client with diabetes insipidus. Which findings should the nurse expect?',
    options: [
      'Oliguria with concentrated urine',
      'Polyuria with very dilute urine, intense thirst, and rising serum sodium',
      'Fluid overload with edema',
      'Hyponatremia with weight gain'
    ],
    answer: [1],
    rationale: 'Deficient antidiuretic hormone or renal resistance to it produces massive output of dilute urine with low specific gravity, driving hypernatremia and profound thirst. Untreated, it causes hypovolemic shock and neurological injury.',
    strategy: 'Diabetes insipidus: huge volumes of nearly colorless urine, specific gravity below 1.005, rising sodium.' },

  { id: 'RSK-097', cat: 'risk', sub: 'Postprocedure Care', type: 'mc', difficulty: 3,
    stem: 'A nurse is caring for a client after a coronary artery bypass graft with a mediastinal chest tube. Which finding requires immediate action?',
    options: [
      'Drainage of 40 mL in the first hour',
      'Drainage of 180 mL per hour for 3 consecutive hours',
      'Serosanguineous drainage decreasing over time',
      'Occasional bubbling in the suction control chamber'
    ],
    answer: [1],
    rationale: 'Mediastinal drainage exceeding roughly 100 to 150 mL per hour for several consecutive hours indicates surgical bleeding that may require reoperation. Modest and decreasing drainage is expected, and bubbling in the suction control chamber reflects normal suction operation.',
    strategy: 'After cardiac surgery, sustained high chest tube output means the client is bleeding surgically. Sudden cessation with instability means tamponade.' },

  { id: 'RSK-098', cat: 'risk', sub: 'Neurological', type: 'mc', difficulty: 3,
    stem: 'A nurse is caring for a client receiving a thrombolytic for acute ischemic stroke. Which assessment finding requires immediate action?',
    options: [
      'Blood pressure of 148/86',
      'Sudden severe headache with decreasing level of consciousness',
      'Mild nausea',
      'Slight bruising at the IV site'
    ],
    answer: [1],
    rationale: 'A sudden severe headache with declining consciousness during or after thrombolysis suggests intracranial hemorrhage, the most feared complication, requiring immediate cessation of the infusion, emergent imaging, and provider notification. Minor bruising and nausea are common.',
    strategy: 'After thrombolytics, any new neurological change or severe headache means bleeding until imaging proves otherwise.' },

  { id: 'RSK-099', cat: 'risk', sub: 'Diagnostic Tests', type: 'mc', difficulty: 3,
    stem: 'A nurse is obtaining an arterial blood gas specimen from the radial artery. Which test should be performed first?',
    options: [
      'Homans test',
      'Allen test to confirm adequate ulnar collateral circulation',
      'Romberg test',
      'Tinel test'
    ],
    answer: [1],
    rationale: 'The Allen test confirms that the ulnar artery can perfuse the hand should the radial artery become occluded after puncture. Without adequate collateral flow, radial puncture risks hand ischemia. Pressure is held for at least 5 minutes afterward, longer if the client is anticoagulated.',
    strategy: 'Allen test before radial puncture. Hold pressure for 5 minutes after, or longer with anticoagulation.' },

  { id: 'RSK-100', cat: 'risk', sub: 'Laboratory Values', type: 'mc', difficulty: 2,
    stem: 'A nurse reviews a client\'s brain natriuretic peptide result of 950 pg/mL. What does this suggest?',
    options: ['Kidney stones', 'Heart failure with ventricular volume overload', 'Liver disease', 'Normal cardiac function'],
    answer: [1],
    rationale: 'Brain natriuretic peptide is released by stretched ventricular myocardium, so marked elevation supports heart failure as the cause of dyspnea and correlates with severity. Values are also affected by renal function, age, and obesity.',
    strategy: 'BNP distinguishes cardiac from pulmonary causes of dyspnea. Higher values mean more ventricular stretch.' },

  { id: 'RSK-101', cat: 'risk', sub: 'Postoperative', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client with a new arteriovenous graft who reports numbness and coldness in the hand distal to the graft. What should the nurse suspect?',
    options: [
      'Normal postoperative sensation',
      'Steal syndrome, in which the access diverts arterial blood from the distal extremity; notify the provider',
      'Infection',
      'Graft thrombosis only'
    ],
    answer: [1],
    rationale: 'Steal syndrome occurs when the low-resistance access shunts blood away from the distal extremity, producing pain, coldness, numbness, and in severe cases tissue loss. Prompt evaluation is needed because untreated cases progress to gangrene.',
    strategy: 'Cold numb painful hand distal to a dialysis access equals steal syndrome. It is a surgical problem.' },

  { id: 'RSK-102', cat: 'risk', sub: 'Respiratory', type: 'mc', difficulty: 3,
    stem: 'A nurse is caring for a client receiving mechanical ventilation whose oxygen saturation suddenly drops with high peak pressures and absent breath sounds on the left. What should the nurse do first?',
    options: [
      'Increase the ventilator rate',
      'Assess the client and the tube, call for help, and evaluate for the DOPE causes: displacement, obstruction, pneumothorax, and equipment failure',
      'Administer a sedative',
      'Document and continue monitoring'
    ],
    answer: [1],
    rationale: 'Sudden deterioration in a ventilated client is systematically evaluated with the DOPE mnemonic while the client is manually ventilated with 100 percent oxygen. Right mainstem intubation, mucus plugging, and pneumothorax all produce unilateral absent sounds. Ventilator adjustments and sedation delay the diagnosis.',
    strategy: 'DOPE: Displacement, Obstruction, Pneumothorax, Equipment. Disconnect and bag while you work through it.' },

  { id: 'RSK-103', cat: 'risk', sub: 'Cardiac Monitoring', type: 'mc', difficulty: 3,
    stem: 'A client after cardiac surgery develops muffled heart sounds, jugular venous distention, and hypotension with pulsus paradoxus. What should the nurse suspect?',
    options: ['Heart failure', 'Cardiac tamponade', 'Pneumothorax', 'Pulmonary embolism'],
    answer: [1],
    rationale: 'Beck triad of muffled heart sounds, distended neck veins, and hypotension, together with pulsus paradoxus, indicates cardiac tamponade from blood accumulating in the pericardial sac. Emergency pericardiocentesis or surgical exploration is required. A sudden decrease in chest tube output often precedes it.',
    strategy: 'Beck triad equals tamponade. After cardiac surgery, sudden cessation of chest tube drainage plus instability is the warning.' },

  { id: 'RSK-104', cat: 'risk', sub: 'Vital Signs', type: 'mc', difficulty: 2,
    stem: 'A nurse is assessing orthostatic vital signs. Which change indicates orthostatic hypotension?',
    options: [
      'A rise in systolic pressure of 10 mmHg on standing',
      'A drop of at least 20 mmHg systolic or 10 mmHg diastolic within 3 minutes of standing',
      'A heart rate decrease of 5 beats per minute',
      'No change in blood pressure'
    ],
    answer: [1],
    rationale: 'Orthostatic hypotension is defined as a systolic drop of 20 mmHg or more, or a diastolic drop of 10 mmHg or more, within 3 minutes of moving to standing, often accompanied by a compensatory rise in heart rate. Measurements are taken lying, sitting, and standing with 1 to 3 minutes between positions.',
    strategy: 'Orthostatic criteria: 20 systolic or 10 diastolic within 3 minutes of standing.' },

  { id: 'RSK-105', cat: 'risk', sub: 'Fluid Balance', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client with severe burns during the first 24 hours. Which finding indicates adequate fluid resuscitation?',
    options: [
      'Urine output of 10 mL per hour',
      'Urine output of 0.5 mL per kilogram per hour with stable vital signs and clear mentation',
      'Heart rate of 140',
      'Blood pressure of 78/44'
    ],
    answer: [1],
    rationale: 'Urine output is the primary bedside indicator of resuscitation adequacy in burn care, with a target of about 0.5 mL per kilogram per hour in adults, alongside hemodynamic stability and mental status. Oliguria, tachycardia, and hypotension all indicate under-resuscitation.',
    strategy: 'In burn resuscitation, urine output is the guide. Titrate fluids to output, not to a fixed formula alone.' },

  { id: 'RSK-106', cat: 'risk', sub: 'Diagnostic Tests', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching a client about fecal occult blood testing. Which instruction improves accuracy?',
    options: [
      'Eat red meat for 3 days before the test',
      'Avoid red meat, certain raw vegetables, vitamin C supplements, and NSAIDs for the specified days before collection, per the test manufacturer instructions',
      'Collect a single sample only',
      'Take aspirin daily during collection'
    ],
    answer: [1],
    rationale: 'Guaiac-based tests react with heme from any source, so red meat causes false positives, vitamin C causes false negatives, and NSAIDs and aspirin can cause gastrointestinal bleeding producing true but non-neoplastic positives. Immunochemical tests are specific to human globin and require less restriction.',
    strategy: 'Guaiac tests need dietary restriction. Immunochemical tests generally do not.' },

  { id: 'RSK-107', cat: 'risk', sub: 'Neurological', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client with an intracranial pressure monitor reading 26 mmHg. What should the nurse do?',
    options: [
      'Document as normal',
      'Notify the provider, ensure the head is midline with the bed elevated 30 degrees, minimize stimulation, and avoid clustering care',
      'Suction the client for several minutes',
      'Lower the head of the bed flat'
    ],
    answer: [1],
    rationale: 'Normal intracranial pressure is 5 to 15 mmHg, so 26 requires intervention. Midline positioning with 30-degree elevation optimizes venous drainage, and stimulation, prolonged suctioning, and flat positioning all raise pressure further.',
    strategy: 'Normal ICP is 5 to 15. Above 20 requires intervention. Cerebral perfusion pressure equals MAP minus ICP and should stay above 60.' },

  { id: 'RSK-108', cat: 'risk', sub: 'Laboratory Values', type: 'mc', difficulty: 3,
    stem: 'A client\'s hemoglobin A1c is 6.1 percent. How should the nurse interpret this?',
    options: ['Normal', 'Prediabetes range, warranting lifestyle intervention and monitoring', 'Diabetes', 'Hypoglycemia'],
    answer: [1],
    rationale: 'An A1c of 5.7 to 6.4 percent indicates prediabetes, where intensive lifestyle modification substantially reduces progression to type 2 diabetes. Values below 5.7 are normal and 6.5 or above are diagnostic of diabetes.',
    strategy: 'A1c cutoffs: 5.7 and 6.5. Below 5.7 normal, 5.7 to 6.4 prediabetes, 6.5 and above diabetes.' },

  { id: 'RSK-109', cat: 'risk', sub: 'Postoperative', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client after a craniotomy. Which position should be avoided?',
    options: [
      'Head of bed elevated 30 degrees with head midline',
      'Positioning on the operative site after a large bone flap removal, and any position with sharp neck flexion',
      'Log rolling with the head supported',
      'Side lying on the non-operative side'
    ],
    answer: [1],
    rationale: 'Pressure on the operative site after craniectomy can injure unprotected brain tissue, and neck flexion or rotation obstructs jugular venous drainage and raises intracranial pressure. Elevated midline positioning and log rolling are both appropriate.',
    strategy: 'After craniotomy: head midline, elevated, and off the operative site if bone was removed.' },

  { id: 'RSK-110', cat: 'risk', sub: 'Respiratory', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client with a new tracheostomy. Which item is most important to keep at the bedside?',
    options: [
      'An extra pillow',
      'An obturator, a spare tracheostomy tube of the same size and one size smaller, and suction equipment',
      'A humidifier only',
      'A bedside commode'
    ],
    answer: [1],
    rationale: 'Accidental decannulation is an airway emergency, and the obturator with replacement tubes allows immediate reinsertion while suction maintains patency. These items must remain at the bedside at all times, particularly in the first week before the tract matures.',
    strategy: 'New tracheostomy bedside kit: obturator, same-size tube, smaller tube, suction. Non-negotiable.' },

  { id: 'RSK-111', cat: 'risk', sub: 'Cardiac Monitoring', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client with a central venous pressure of 2 mmHg. What does this suggest?',
    options: [
      'Fluid overload',
      'Hypovolemia or decreased venous return, warranting evaluation for fluid administration',
      'Normal value requiring no action',
      'Cardiac tamponade'
    ],
    answer: [1],
    rationale: 'Central venous pressure normally runs about 2 to 6 mmHg, and low values in a symptomatic client suggest inadequate preload from hypovolemia or vasodilation. Elevated values suggest volume overload, right heart failure, or tamponade. The trend and the clinical picture matter more than a single number.',
    strategy: 'CVP reflects preload. Low with poor perfusion means give fluid; high with congestion means the heart is failing or filling is obstructed.' },

  { id: 'RSK-112', cat: 'risk', sub: 'Diagnostic Tests', type: 'mc', difficulty: 2,
    stem: 'A nurse is preparing a client for a stress echocardiogram who cannot exercise. What should the nurse anticipate?',
    options: [
      'Cancellation of the test',
      'A pharmacologic stress agent such as dobutamine or a vasodilator, with instructions to avoid caffeine beforehand',
      'Performing the test during sleep',
      'Substituting a chest radiograph'
    ],
    answer: [1],
    rationale: 'Pharmacologic stress agents simulate exercise for clients who cannot walk adequately, and caffeine blocks the action of adenosine-type vasodilators, making caffeine avoidance essential. A chest radiograph provides no functional cardiac information.',
    strategy: 'Cannot exercise means pharmacologic stress. Caffeine blocks adenosine agents, so it must be held.' },

  { id: 'RSK-113', cat: 'risk', sub: 'Laboratory Values', type: 'mc', difficulty: 2,
    stem: 'A client receiving total parenteral nutrition has a rapidly falling phosphorus, potassium, and magnesium after nutrition was started. What should the nurse suspect?',
    options: ['Tumor lysis syndrome', 'Refeeding syndrome', 'Dehydration', 'Hepatic failure'],
    answer: [1],
    rationale: 'Reintroducing nutrition to a malnourished client triggers an insulin surge that drives phosphate, potassium, and magnesium into cells, causing arrhythmia, respiratory failure, and death. Calories are advanced slowly with daily electrolyte monitoring and repletion.',
    strategy: 'Refeeding syndrome drops phosphorus, potassium, and magnesium. Tumor lysis raises potassium and phosphorus.' },

  { id: 'RSK-114', cat: 'risk', sub: 'Postprocedure Care', type: 'mc', difficulty: 3,
    stem: 'A nurse is caring for a client after an endoscopic retrograde cholangiopancreatography. Which finding requires immediate action?',
    options: [
      'Mild sore throat',
      'Severe epigastric pain radiating to the back with a rising serum amylase',
      'Drowsiness from sedation',
      'Small amount of flatus'
    ],
    answer: [1],
    rationale: 'Post-ERCP pancreatitis is the most common serious complication, presenting with severe epigastric pain radiating to the back and rising pancreatic enzymes. Sore throat, residual sedation, and flatus from insufflated air are all expected.',
    strategy: 'After ERCP, epigastric pain radiating to the back equals pancreatitis. Check amylase and lipase.' },

  { id: 'RSK-115', cat: 'risk', sub: 'Fluid Balance', type: 'mc', difficulty: 3,
    stem: 'A nurse notes that a client with heart failure has gained 2.5 kg since yesterday. What should the nurse do first?',
    options: [
      'Document and continue the plan of care',
      'Assess for signs of fluid overload including dyspnea, crackles, edema, and jugular venous distention, and notify the provider',
      'Encourage more fluids',
      'Withhold the client\'s diuretic'
    ],
    answer: [1],
    rationale: 'A gain of 2.5 kg represents roughly 2.5 liters of retained fluid and signals decompensating heart failure requiring assessment and likely diuretic adjustment. Encouraging fluids and withholding the diuretic would both accelerate decompensation.',
    strategy: 'In heart failure, 1 kg of weight equals 1 liter of fluid. A 2 to 3 pound daily gain is the standard call threshold.' },

  { id: 'RSK-116', cat: 'risk', sub: 'Neurological', type: 'mc', difficulty: 2,
    stem: 'A nurse is assessing a client for a possible stroke using a rapid screening tool. Which finding is consistent with stroke?',
    options: [
      'Symmetric facial movement',
      'Facial droop on one side, arm drift when both arms are held out with eyes closed, and slurred or abnormal speech',
      'Equal grip strength bilaterally',
      'Clear articulate speech'
    ],
    answer: [1],
    rationale: 'Unilateral facial droop, arm drift, and speech abnormality form the core of rapid stroke screening, and any one positive finding warrants immediate activation of stroke protocols since treatment windows are measured in hours. Time of symptom onset determines eligibility for thrombolysis.',
    strategy: 'BE FAST: Balance, Eyes, Face, Arms, Speech, Time. Establishing last known well time is critical.' },

  { id: 'RSK-117', cat: 'risk', sub: 'Respiratory', type: 'mc', difficulty: 2,
    stem: 'A client with asthma has a peak expiratory flow reading at 45 percent of personal best. Which zone is this and what action is indicated?',
    options: [
      'Green zone; continue routine medications',
      'Red zone; use the rescue inhaler immediately and seek emergency care',
      'Yellow zone; no action needed',
      'The reading is normal'
    ],
    answer: [1],
    rationale: 'Peak flow zones follow a traffic light system: green is 80 to 100 percent of personal best, yellow is 50 to 79 percent signaling caution and rescue medication use, and red is below 50 percent indicating a medical emergency requiring immediate bronchodilator use and emergency care.',
    strategy: 'Peak flow zones: green above 80, yellow 50 to 79, red below 50. Red means emergency.' },

  { id: 'RSK-118', cat: 'risk', sub: 'Postoperative', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client with a continuous passive motion machine after knee surgery. Which action is appropriate?',
    options: [
      'Set the range beyond the prescribed limits to speed recovery',
      'Verify the prescribed flexion and extension settings, ensure proper limb alignment in the device, and assess for pain and neurovascular status',
      'Leave the device on continuously without assessment',
      'Discontinue it if the client reports any discomfort'
    ],
    answer: [1],
    rationale: 'Settings are prescribed by the surgeon and exceeding them risks damaging the repair, while correct alignment prevents pressure injury and neurovascular compromise. Some discomfort is expected and managed with analgesia timed before sessions rather than by stopping therapy.',
    strategy: 'CPM settings come from the surgeon. Premedicate before sessions and check alignment and neurovascular status.' },

  { id: 'RSK-119', cat: 'risk', sub: 'Laboratory Values', type: 'mc', difficulty: 3,
    stem: 'A nurse is reviewing a client\'s results and finds a hematocrit of 58 percent with a hemoglobin of 19 g/dL in a client with chronic hypoxemia. What best explains this?',
    options: [
      'Dehydration only',
      'Secondary polycythemia, a compensatory response to chronic hypoxemia that increases blood viscosity and clotting risk',
      'Acute blood loss',
      'Iron deficiency'
    ],
    answer: [1],
    rationale: 'Chronic hypoxemia stimulates erythropoietin, raising red cell mass to improve oxygen carrying capacity, but the resulting hyperviscosity increases thrombosis risk. It is common in advanced COPD and cyanotic heart disease. Blood loss and iron deficiency lower these values.',
    strategy: 'Chronic hypoxia raises hematocrit. The tradeoff is thick blood and clotting risk.' },

  { id: 'RSK-120', cat: 'risk', sub: 'Vital Signs', type: 'mc', difficulty: 2,
    stem: 'A nurse is assessing a client whose respiratory pattern alternates between periods of deep rapid breathing and periods of apnea. How should this be documented?',
    options: ['Kussmaul respirations', 'Cheyne-Stokes respirations', 'Biot respirations', 'Eupnea'],
    answer: [1],
    rationale: 'Cheyne-Stokes respiration describes a cyclical crescendo-decrescendo pattern alternating with apnea, seen in heart failure, stroke, and at end of life. Kussmaul respirations are deep and rapid without apneic pauses and indicate metabolic acidosis, while Biot respirations are irregular with abrupt apneic periods.',
    strategy: 'Cheyne-Stokes waxes and wanes. Kussmaul is deep and fast without pauses and means acidosis.' }
]
