export default [
  { id: 'PHA-001', cat: 'pharm', sub: 'Dosage Calculation', type: 'fill', difficulty: 2, unit: 'mL',
    stem: 'A provider orders cefazolin 750 mg IV. The pharmacy supplies a vial containing 1 g in 10 mL after reconstitution. How many milliliters should the nurse administer?',
    answerText: ['7.5', '7.5 mL'],
    rationale: 'Using desired over have times volume: 750 mg divided by 1000 mg equals 0.75, multiplied by 10 mL equals 7.5 mL. Converting grams to milligrams first prevents a tenfold error.',
    strategy: 'Convert to the same unit before dividing. Desired over have, times the volume on hand.' },

  { id: 'PHA-002', cat: 'pharm', sub: 'Dosage Calculation', type: 'fill', difficulty: 2, unit: 'mL/hr',
    stem: 'A client is to receive 1000 mL of normal saline over 8 hours. At what rate in milliliters per hour should the nurse set the infusion pump?',
    answerText: ['125', '125 mL/hr'],
    rationale: 'Total volume divided by total hours: 1000 mL divided by 8 hours equals 125 mL per hour.',
    strategy: 'Pump rates are always volume divided by hours. Drop factors only matter for gravity tubing.' },

  { id: 'PHA-003', cat: 'pharm', sub: 'Dosage Calculation', type: 'fill', difficulty: 2, unit: 'mg',
    stem: 'A child weighing 22 kg is prescribed amoxicillin 45 mg/kg/day divided into three equal doses. How many milligrams should the nurse give per dose?',
    answerText: ['330', '330 mg'],
    rationale: '22 kg times 45 mg equals 990 mg per day, divided by three doses equals 330 mg per dose.',
    strategy: 'Weight-based pediatric doses: calculate the daily total first, then divide by the number of doses.' },

  { id: 'PHA-004', cat: 'pharm', sub: 'Dosage Calculation', type: 'fill', difficulty: 2, unit: 'gtt/min',
    stem: 'A client is to receive 500 mL of fluid over 4 hours using tubing with a drop factor of 15 gtt/mL. What is the flow rate in drops per minute? Round to the nearest whole number.',
    answerText: ['31', '31 gtt/min'],
    rationale: '500 mL divided by 240 minutes equals 2.083 mL per minute, multiplied by 15 gtt/mL equals 31.25, which rounds to 31 drops per minute.',
    strategy: 'Gravity drip rate equals volume times drop factor divided by total minutes.' },

  { id: 'PHA-005', cat: 'pharm', sub: 'Anticoagulants', type: 'mc', difficulty: 2,
    stem: 'A client receiving heparin has an activated partial thromboplastin time of 95 seconds with a control of 30 seconds. What should the nurse do?',
    options: [
      'Continue the infusion as ordered',
      'Hold the infusion and notify the provider, since the value exceeds the therapeutic range of 1.5 to 2.5 times control',
      'Increase the rate',
      'Administer vitamin K'
    ],
    answer: [1],
    rationale: 'The therapeutic aPTT range is 1.5 to 2.5 times control, or 45 to 75 seconds with a control of 30, so 95 seconds indicates excessive anticoagulation and bleeding risk. Protamine sulfate is the heparin antidote; vitamin K reverses warfarin.',
    strategy: 'Heparin is monitored by aPTT and reversed by protamine. Warfarin is monitored by INR and reversed by vitamin K.' },

  { id: 'PHA-006', cat: 'pharm', sub: 'Anticoagulants', type: 'mc', difficulty: 2,
    stem: 'A client on warfarin has an INR of 1.2 with a target range of 2.0 to 3.0. What does this indicate?',
    options: [
      'The client is over-anticoagulated and at bleeding risk',
      'The client is under-anticoagulated and remains at risk for clotting',
      'The value is therapeutic',
      'Warfarin should be discontinued'
    ],
    answer: [1],
    rationale: 'An INR below the target range means insufficient anticoagulation and continued thrombotic risk, typically requiring a dose increase. Values above range indicate bleeding risk.',
    strategy: 'INR below range equals clot risk. INR above range equals bleed risk. Target is usually 2 to 3, or 2.5 to 3.5 with a mechanical valve.' },

  { id: 'PHA-007', cat: 'pharm', sub: 'Cardiac Drugs', type: 'mc', difficulty: 2,
    stem: 'A client taking digoxin reports nausea, visual halos around lights, and confusion. The serum potassium is 3.0 mEq/L. What should the nurse recognize?',
    options: [
      'Expected side effects requiring no action',
      'Digoxin toxicity, which hypokalemia potentiates; hold the dose, obtain a digoxin level, and notify the provider',
      'The dose is too low',
      'A drug allergy'
    ],
    answer: [1],
    rationale: 'Anorexia, nausea, visual disturbances including yellow-green halos, and confusion are classic digoxin toxicity, and hypokalemia markedly increases digoxin binding at the sodium-potassium pump. The dose is held, a level obtained, and potassium corrected.',
    strategy: 'Low potassium plus digoxin equals toxicity. Always check potassium in any client on digoxin, especially with a diuretic.' },

  { id: 'PHA-008', cat: 'pharm', sub: 'Cardiac Drugs', type: 'mc', difficulty: 2,
    stem: 'Before administering digoxin, the nurse assesses an apical pulse of 52 in an adult client. What should the nurse do?',
    options: [
      'Administer the dose as ordered',
      'Hold the dose, recheck the apical pulse for a full minute, and notify the provider',
      'Administer half the dose',
      'Give the dose with food'
    ],
    answer: [1],
    rationale: 'Digoxin is held when the adult apical pulse is below 60 because the drug further slows conduction and can cause dangerous bradycardia and heart block. The pulse is counted apically for a full minute and the provider notified.',
    strategy: 'Hold digoxin below 60 in adults, below 70 in children, below 90 to 110 in infants. Always count apically for a full minute.' },

  { id: 'PHA-009', cat: 'pharm', sub: 'Antibiotics', type: 'mc', difficulty: 2,
    stem: 'A client receiving IV vancomycin develops flushing and redness of the face, neck, and upper torso during infusion. What is the nurse\'s priority action?',
    options: [
      'Stop the infusion permanently and document an allergy to vancomycin',
      'Slow or stop the infusion, notify the provider, and anticipate resuming at a slower rate with an antihistamine as ordered',
      'Increase the rate to finish quickly',
      'Administer epinephrine immediately'
    ],
    answer: [1],
    rationale: 'This is vancomycin infusion reaction, a rate-related histamine release rather than a true allergy, managed by slowing the infusion and premedicating with an antihistamine. Labeling it an allergy unnecessarily removes an important antibiotic, faster infusion worsens it, and epinephrine is reserved for true anaphylaxis.',
    strategy: 'Vancomycin flushing is a rate problem, not an allergy. Infuse over at least 60 minutes.' },

  { id: 'PHA-010', cat: 'pharm', sub: 'Antibiotics', type: 'mc', difficulty: 2,
    stem: 'A client is prescribed gentamicin. Which laboratory values should the nurse monitor most closely?',
    options: [
      'Liver enzymes and bilirubin',
      'Serum creatinine, blood urea nitrogen, and peak and trough drug levels',
      'Serum glucose and hemoglobin A1c',
      'Thyroid function tests'
    ],
    answer: [1],
    rationale: 'Aminoglycosides are nephrotoxic and ototoxic, so renal function and drug levels guide dosing. Trough levels drawn just before the next dose predict toxicity while peaks reflect efficacy. Hearing changes and tinnitus are also monitored.',
    strategy: 'Aminoglycosides ending in -micin or -mycin: watch kidneys and ears. Trough predicts toxicity.' },

  { id: 'PHA-011', cat: 'pharm', sub: 'Insulin', type: 'mc', difficulty: 2,
    stem: 'A client receives regular insulin at 0730. When should the nurse be most alert for hypoglycemia?',
    options: ['Immediately after injection', 'About 2 to 4 hours later', 'About 12 hours later', 'About 24 hours later'],
    answer: [1],
    rationale: 'Regular insulin has an onset of 30 to 60 minutes, peaks at 2 to 4 hours, and lasts 6 to 8 hours, so hypoglycemia risk is greatest at peak. Rapid-acting analogs peak at about 1 hour, NPH at 4 to 12 hours, and long-acting glargine has minimal peak.',
    strategy: 'Insulin peaks: rapid about 1 hour, regular 2 to 4, NPH 4 to 12, glargine essentially peakless.' },

  { id: 'PHA-012', cat: 'pharm', sub: 'Insulin', type: 'mc', difficulty: 3,
    stem: 'A client\'s blood glucose is 48 mg/dL and the client is alert and able to swallow. What should the nurse do first?',
    options: [
      'Administer IV dextrose 50 percent',
      'Give 15 grams of fast-acting carbohydrate such as 4 ounces of juice, recheck in 15 minutes, and repeat if still low',
      'Administer the scheduled insulin dose',
      'Give a protein-rich snack only'
    ],
    answer: [1],
    rationale: 'The rule of 15 applies to a conscious client who can swallow: 15 grams of simple carbohydrate, recheck in 15 minutes, repeat as needed, then provide a longer-acting carbohydrate with protein. IV dextrose and glucagon are for clients who cannot take oral intake, and protein alone raises glucose too slowly.',
    strategy: 'Rule of 15: 15 grams, wait 15 minutes, recheck. Conscious equals oral, unconscious equals IV dextrose or glucagon.' },

  { id: 'PHA-013', cat: 'pharm', sub: 'Insulin', type: 'sata', difficulty: 1,
    stem: 'Which findings indicate hypoglycemia? Select all that apply.',
    options: ['Diaphoresis', 'Tremor and shakiness', 'Fruity breath odor', 'Confusion and irritability', 'Kussmaul respirations', 'Tachycardia'],
    answer: [0, 1, 3, 5],
    rationale: 'Hypoglycemia produces adrenergic symptoms of sweating, tremor, and tachycardia along with neuroglycopenic symptoms of confusion and irritability. Fruity breath and Kussmaul respirations indicate diabetic ketoacidosis, which is hyperglycemia with ketosis.',
    strategy: 'Cold and clammy, need some candy. Hot and dry, sugar high.' },

  { id: 'PHA-014', cat: 'pharm', sub: 'Opioids', type: 'mc', difficulty: 2,
    stem: 'A nurse is preparing to administer morphine to a client. Which assessment is most important before administration?',
    options: ['Blood glucose', 'Respiratory rate and sedation level', 'Serum sodium', 'Temperature'],
    answer: [1],
    rationale: 'Respiratory depression is the most dangerous opioid effect, and increasing sedation precedes it, so both are assessed before and after administration along with pain and blood pressure.',
    strategy: 'Before any opioid: respiratory rate, sedation level, and blood pressure. Sedation is the early warning.' },

  { id: 'PHA-015', cat: 'pharm', sub: 'Antihypertensives', type: 'mc', difficulty: 2,
    stem: 'A client started on lisinopril develops a persistent dry cough. What should the nurse explain?',
    options: [
      '"This indicates a respiratory infection."',
      '"A dry cough is a known effect of ACE inhibitors from bradykinin accumulation. Report it to your provider, who may switch you to an ARB."',
      '"Continue the medication and the cough will resolve in a few days."',
      '"Stop the medication immediately without telling anyone."'
    ],
    answer: [1],
    rationale: 'ACE inhibitors block bradykinin breakdown, causing a persistent nonproductive cough in about 10 percent of clients. It does not resolve with continued use, and angiotensin receptor blockers provide similar benefit without the cough. Clients should not stop antihypertensives abruptly on their own.',
    strategy: 'ACE inhibitor side effects: cough, angioedema, hyperkalemia. Angioedema is the emergency.' },

  { id: 'PHA-016', cat: 'pharm', sub: 'Antihypertensives', type: 'mc', difficulty: 2,
    stem: 'A client taking lisinopril develops swelling of the lips and tongue with difficulty breathing. What is the priority action?',
    options: [
      'Administer an antihistamine and observe',
      'Assess and secure the airway, call for emergency help, discontinue the drug, and prepare for possible intubation and epinephrine',
      'Administer the next dose with food',
      'Document the finding and notify the provider at rounds'
    ],
    answer: [1],
    rationale: 'ACE inhibitor-induced angioedema is a life-threatening airway emergency that can progress within minutes. Airway management takes precedence, the drug is permanently discontinued, and the class is contraindicated thereafter. Antihistamines alone are inadequate and delay treatment.',
    strategy: 'Lip and tongue swelling on an ACE inhibitor is an airway emergency. That client never gets an ACE inhibitor again.' },

  { id: 'PHA-017', cat: 'pharm', sub: 'Diuretics', type: 'mc', difficulty: 2,
    stem: 'A client taking furosemide should be monitored for which electrolyte abnormality?',
    options: ['Hyperkalemia', 'Hypokalemia', 'Hypercalcemia', 'Hypernatremia'],
    answer: [1],
    rationale: 'Loop diuretics increase renal excretion of potassium, magnesium, calcium, and sodium, with hypokalemia the most clinically important because it precipitates arrhythmias and digoxin toxicity. Potassium-sparing diuretics such as spironolactone cause the opposite problem.',
    strategy: 'Loops and thiazides waste potassium. Spironolactone, triamterene, and ACE inhibitors retain it.' },

  { id: 'PHA-018', cat: 'pharm', sub: 'Diuretics', type: 'mc', difficulty: 2,
    stem: 'A client is prescribed spironolactone. Which teaching point is most important?',
    options: [
      '"Eat plenty of salt substitutes and bananas to replace potassium."',
      '"Avoid potassium supplements and salt substitutes, since this diuretic retains potassium."',
      '"Take the dose at bedtime."',
      '"This medication will cause you to lose potassium."'
    ],
    answer: [1],
    rationale: 'Spironolactone is potassium sparing, so additional potassium from supplements or potassium-based salt substitutes can cause dangerous hyperkalemia. Diuretics are generally taken in the morning to avoid nocturia.',
    strategy: 'Potassium-sparing diuretics plus potassium supplements or salt substitutes equals hyperkalemia.' },

  { id: 'PHA-019', cat: 'pharm', sub: 'IV Therapy', type: 'mc', difficulty: 2,
    stem: 'A nurse notes that a client\'s IV site is cool, pale, and swollen with the infusion slowing. What is the nurse\'s priority action?',
    options: [
      'Apply a warm compress and continue the infusion',
      'Stop the infusion, discontinue the catheter, elevate the extremity, and restart in a different site',
      'Flush the line vigorously to clear the obstruction',
      'Increase the rate to overcome the resistance'
    ],
    answer: [1],
    rationale: 'Coolness, pallor, and swelling indicate infiltration of fluid into surrounding tissue. The infusion is stopped and the catheter removed to prevent further tissue injury. Flushing or increasing the rate forces more fluid into the tissue, and with a vesicant this causes extravasation necrosis.',
    strategy: 'Infiltration is cool, pale, and swollen. Phlebitis is warm, red, and tender along the vein. Both mean the catheter comes out.' },

  { id: 'PHA-020', cat: 'pharm', sub: 'Blood Products', type: 'mc', difficulty: 1,
    stem: 'Which IV solution must be used to prime tubing and flush before and after a blood transfusion?',
    options: ['Dextrose 5 percent in water', '0.9 percent sodium chloride', 'Lactated Ringer solution', 'Sterile water'],
    answer: [1],
    rationale: 'Only normal saline is compatible with blood products. Dextrose causes red cell hemolysis, and the calcium in lactated Ringer solution can cause clotting in the line. Sterile water causes hemolysis.',
    strategy: 'Blood goes with normal saline only. Never dextrose, never lactated Ringer.' },

  { id: 'PHA-021', cat: 'pharm', sub: 'Blood Products', type: 'mc', difficulty: 1,
    stem: 'How long may a unit of packed red blood cells hang before it must be completed?',
    options: ['2 hours', '4 hours', '6 hours', '8 hours'],
    answer: [1],
    rationale: 'A unit must be infused within 4 hours of removal from controlled storage because of bacterial growth risk at room temperature. The first 15 minutes are run slowly with the nurse present, since most severe reactions appear early.',
    strategy: 'Blood: start within 30 minutes of release, finish within 4 hours, stay for the first 15 minutes.' },

  { id: 'PHA-022', cat: 'pharm', sub: 'Antipsychotics', type: 'mc', difficulty: 3,
    stem: 'A client taking a first-generation antipsychotic develops involuntary lip smacking and tongue movements after 2 years of therapy. What should the nurse recognize?',
    options: ['Acute dystonia', 'Tardive dyskinesia', 'Neuroleptic malignant syndrome', 'Akathisia'],
    answer: [1],
    rationale: 'Tardive dyskinesia is a late-onset movement disorder of involuntary orofacial and limb movements that may be irreversible, so early recognition and provider notification are essential. Acute dystonia appears within days as sustained muscle contractions, and akathisia is subjective restlessness.',
    strategy: 'Timing separates the extrapyramidal symptoms: dystonia in days, akathisia in days to weeks, parkinsonism in weeks, tardive dyskinesia in months to years.' },

  { id: 'PHA-023', cat: 'pharm', sub: 'Antipsychotics', type: 'mc', difficulty: 2,
    stem: 'A client experiences an acute dystonic reaction with torticollis and an oculogyric crisis after receiving haloperidol. What should the nurse anticipate administering?',
    options: ['Additional haloperidol', 'Benztropine or diphenhydramine', 'Lithium', 'Naloxone'],
    answer: [1],
    rationale: 'Anticholinergic agents such as benztropine and diphenhydramine reverse acute dystonia rapidly, often within minutes. Additional antipsychotic worsens the reaction, and lithium and naloxone address entirely different problems.',
    strategy: 'Acute dystonia: give benztropine or diphenhydramine right away. It can involve the larynx and become an airway emergency.' },

  { id: 'PHA-024', cat: 'pharm', sub: 'Corticosteroids', type: 'sata', difficulty: 2,
    stem: 'A client is on long-term prednisone therapy. Which effects should the nurse monitor for? Select all that apply.',
    options: ['Hyperglycemia', 'Increased infection risk', 'Hypotension', 'Osteoporosis', 'Weight gain and fluid retention', 'Mood changes'],
    answer: [0, 1, 3, 4, 5],
    rationale: 'Corticosteroids raise glucose, suppress immunity and mask infection signs, cause bone loss, promote sodium and water retention with weight gain, and produce mood disturbance. Blood pressure rises rather than falls because of mineralocorticoid effects.',
    strategy: 'Steroid effects: high sugar, high pressure, high infection risk, low bone density, and mood changes. Never stop abruptly.' },

  { id: 'PHA-025', cat: 'pharm', sub: 'Corticosteroids', type: 'mc', difficulty: 2,
    stem: 'A client on long-term prednisone asks about stopping the medication. What should the nurse teach?',
    options: [
      '"You can stop whenever you feel better."',
      '"The dose must be tapered gradually, because abrupt discontinuation can cause adrenal crisis after the adrenal glands have been suppressed."',
      '"Stop it and restart if symptoms return."',
      '"Double the dose for a few days, then stop."'
    ],
    answer: [1],
    rationale: 'Exogenous corticosteroids suppress the hypothalamic-pituitary-adrenal axis, and abrupt withdrawal leaves the client unable to mount a cortisol response, producing hypotension, hypoglycemia, and shock. Tapering allows adrenal recovery.',
    strategy: 'Never stop steroids abruptly after more than about 2 weeks of therapy. Taper always.' },

  { id: 'PHA-026', cat: 'pharm', sub: 'Dosage Calculation', type: 'fill', difficulty: 2, unit: 'mL',
    stem: 'A provider orders heparin 5,000 units subcutaneously. The vial is labeled 10,000 units/mL. How many milliliters should the nurse administer?',
    answerText: ['0.5', '0.5 mL'],
    rationale: '5,000 units divided by 10,000 units per mL equals 0.5 mL. A leading zero before the decimal point is essential to prevent a tenfold error.',
    strategy: 'Heparin and insulin doses always get an independent double check. Write 0.5, never .5.' },

  { id: 'PHA-027', cat: 'pharm', sub: 'Dosage Calculation', type: 'fill', difficulty: 2, unit: 'mL/hr',
    stem: 'A client is to receive heparin at 1,000 units per hour. The bag contains 25,000 units in 500 mL. At what rate in milliliters per hour should the pump be set?',
    answerText: ['20', '20 mL/hr'],
    rationale: 'The concentration is 25,000 units divided by 500 mL, equal to 50 units per mL. Dividing 1,000 units per hour by 50 units per mL gives 20 mL per hour.',
    strategy: 'For drips, find the concentration first, then divide the ordered rate by it.' },

  { id: 'PHA-028', cat: 'pharm', sub: 'Antibiotics', type: 'mc', difficulty: 2,
    stem: 'A client is prescribed ciprofloxacin. Which teaching point is most important?',
    options: [
      'Take it with milk or antacids to reduce stomach upset',
      'Avoid taking it within 2 hours of dairy products, antacids, and iron or calcium supplements, and report tendon pain',
      'Increase sun exposure while taking it',
      'It is safe during pregnancy and childhood'
    ],
    answer: [1],
    rationale: 'Divalent and trivalent cations chelate fluoroquinolones and block absorption. Fluoroquinolones also carry a boxed warning for tendinitis and tendon rupture, cause photosensitivity, and are generally avoided in pregnancy and in children because of cartilage effects.',
    strategy: 'Fluoroquinolones: no dairy or antacids nearby, watch for tendon pain, use sunscreen.' },

  { id: 'PHA-029', cat: 'pharm', sub: 'Antibiotics', type: 'mc', difficulty: 2,
    stem: 'A client taking tetracycline should be taught which precaution?',
    options: [
      'Take it with a large glass of milk',
      'Avoid dairy, antacids, and iron near the dose, use sun protection, and do not take expired product',
      'Take it only at bedtime lying down',
      'It is safe during pregnancy'
    ],
    answer: [1],
    rationale: 'Tetracyclines chelate with calcium, magnesium, aluminum, and iron, causing marked photosensitivity, and degraded expired product causes renal tubular damage. They also stain developing teeth, so they are avoided in pregnancy and in children under 8.',
    strategy: 'Tetracycline: no dairy, no antacids, no sun, no pregnancy, no children under 8, no expired doses.' },

  { id: 'PHA-030', cat: 'pharm', sub: 'Respiratory Drugs', type: 'mc', difficulty: 2,
    stem: 'A client uses both albuterol and fluticasone inhalers. In which order should they be used and why?',
    options: [
      'Fluticasone first, then albuterol, to reduce inflammation before bronchodilation',
      'Albuterol first, wait a few minutes, then fluticasone, so the open airways allow better steroid deposition; rinse the mouth afterward',
      'Either order is equally effective',
      'Both at exactly the same time'
    ],
    answer: [1],
    rationale: 'The bronchodilator opens the airways so the corticosteroid reaches distal lung tissue, and mouth rinsing after the steroid prevents oral candidiasis. Reversing the order reduces steroid delivery.',
    strategy: 'Bronchodilator first, steroid second, rinse your mouth. Beta agonist opens the door.' },

  { id: 'PHA-031', cat: 'pharm', sub: 'Respiratory Drugs', type: 'mc', difficulty: 2,
    stem: 'A client uses albuterol and reports tremor and palpitations. What should the nurse explain?',
    options: [
      'These indicate an allergic reaction requiring immediate discontinuation',
      'These are common beta-adrenergic effects that usually lessen with continued use; report chest pain or a heart rate that stays elevated',
      'These indicate the dose is too low',
      'These are signs of an asthma attack'
    ],
    answer: [1],
    rationale: 'Beta-2 agonists have some beta-1 activity producing tremor, tachycardia, and palpitations, which typically diminish with time. Chest pain or persistent tachycardia warrants evaluation, and increasing rescue inhaler use signals worsening asthma control.',
    strategy: 'Albuterol side effects are adrenergic: tremor, tachycardia, nervousness. Increasing use means worsening control.' },

  { id: 'PHA-032', cat: 'pharm', sub: 'Opioids', type: 'mc', difficulty: 2,
    stem: 'A client is receiving a fentanyl transdermal patch. Which instruction is correct?',
    options: [
      'Apply heat to the patch to improve absorption',
      'Apply to clean dry intact skin, rotate sites, remove the old patch before applying a new one, and avoid external heat sources',
      'Cut the patch to adjust the dose',
      'Use the patch for acute postoperative pain'
    ],
    answer: [1],
    rationale: 'Heat dramatically increases fentanyl absorption and has caused fatal overdoses, old patches must be removed to prevent dose stacking, and cutting a patch destroys the delivery system. Transdermal fentanyl is only for opioid-tolerant clients with chronic pain, never for acute or opioid-naive use.',
    strategy: 'Fentanyl patch: no heat, no cutting, remove the old one, and never in an opioid-naive client.' },

  { id: 'PHA-033', cat: 'pharm', sub: 'Anticonvulsants', type: 'mc', difficulty: 2,
    stem: 'A client taking phenytoin has a serum level of 24 mcg/mL. Which finding would the nurse expect?',
    options: [
      'The level is therapeutic and the client should be asymptomatic',
      'Toxicity with nystagmus, ataxia, and slurred speech',
      'Subtherapeutic level with breakthrough seizures',
      'Hypoglycemia'
    ],
    answer: [1],
    rationale: 'The therapeutic phenytoin range is 10 to 20 mcg/mL, so 24 indicates toxicity presenting with nystagmus, ataxia, slurred speech, and confusion. Nystagmus is typically the earliest sign.',
    strategy: 'Phenytoin therapeutic range 10 to 20. Toxicity shows as nystagmus first, then ataxia and slurred speech.' },

  { id: 'PHA-034', cat: 'pharm', sub: 'Anticonvulsants', type: 'mc', difficulty: 2,
    stem: 'A client taking phenytoin should receive which teaching?',
    options: [
      'Skip doses when feeling well',
      'Practice meticulous oral hygiene and see a dentist regularly because gingival hyperplasia is common, and never stop the drug abruptly',
      'Alcohol has no effect on this medication',
      'The drug turns urine blue'
    ],
    answer: [1],
    rationale: 'Gingival hyperplasia is a well-known phenytoin effect that oral hygiene mitigates, and abrupt discontinuation of any anticonvulsant precipitates status epilepticus. Alcohol alters phenytoin metabolism, and phenytoin may turn urine pink to reddish-brown rather than blue.',
    strategy: 'Phenytoin teaching: gum care, never stop abruptly, many drug interactions, and it is highly teratogenic.' },

  { id: 'PHA-035', cat: 'pharm', sub: 'IV Therapy', type: 'mc', difficulty: 1,
    stem: 'Which IV solution is hypotonic?',
    options: ['0.9 percent sodium chloride', '0.45 percent sodium chloride', 'Lactated Ringer solution', '3 percent sodium chloride'],
    answer: [1],
    rationale: 'Half-normal saline at 0.45 percent is hypotonic and shifts fluid from the vascular space into cells, making it useful in cellular dehydration but dangerous in increased intracranial pressure. Normal saline and lactated Ringer are isotonic, and 3 percent saline is hypertonic.',
    strategy: 'Hypotonic swells cells, hypertonic shrinks them. Never give hypotonic fluid with cerebral edema.' },

  { id: 'PHA-036', cat: 'pharm', sub: 'IV Therapy', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client receiving 3 percent sodium chloride for severe hyponatremia. Which monitoring is essential?',
    options: [
      'Hourly urine specific gravity only',
      'Frequent serum sodium levels and neurological assessment, with correction limited to avoid osmotic demyelination',
      'Daily weights only',
      'No special monitoring is required'
    ],
    answer: [1],
    rationale: 'Correcting sodium too rapidly causes osmotic demyelination syndrome with permanent neurological injury, so sodium is monitored frequently and correction is limited to roughly 8 to 10 mEq/L in 24 hours. Neurological status is assessed continuously, and hypertonic saline is given through a controlled infusion with close observation for fluid overload.',
    strategy: 'Correct sodium slowly. Too fast up causes demyelination; too fast down causes cerebral edema.' },

  { id: 'PHA-037', cat: 'pharm', sub: 'Central Access', type: 'mc', difficulty: 2,
    stem: 'A nurse is flushing a central venous catheter. Which technique is correct?',
    options: [
      'Use a 3 mL syringe to generate adequate pressure',
      'Use a 10 mL or larger syringe to avoid excessive pressure that could rupture the catheter, and use a pulsatile push-pause technique',
      'Force the flush if resistance is met',
      'Use tap water for flushing'
    ],
    answer: [1],
    rationale: 'Smaller syringes generate much higher pressures per unit of force and can rupture a catheter, so 10 mL or larger barrels are used. Resistance is never forced because it may indicate thrombus or malposition, and only sterile saline or heparin per policy is used.',
    strategy: 'Central lines: 10 mL syringe or larger, never force against resistance.' },

  { id: 'PHA-038', cat: 'pharm', sub: 'Antidiabetics', type: 'mc', difficulty: 2,
    stem: 'A client taking metformin is scheduled for a procedure with iodinated contrast. What should the nurse anticipate?',
    options: [
      'Metformin will be continued without change',
      'Metformin will be held before and typically for 48 hours after the contrast study, with renal function reassessed before restarting',
      'The dose will be doubled',
      'Insulin will be permanently substituted'
    ],
    answer: [1],
    rationale: 'Contrast can cause acute kidney injury, and impaired renal clearance of metformin raises the risk of lactic acidosis, so the drug is withheld around the procedure and restarted once renal function is confirmed adequate.',
    strategy: 'Metformin plus contrast dye equals hold it. The feared complication is lactic acidosis.' },

  { id: 'PHA-039', cat: 'pharm', sub: 'Antidiabetics', type: 'mc', difficulty: 2,
    stem: 'A client taking metformin reports muscle aches, unusual fatigue, and difficulty breathing. What should the nurse suspect?',
    options: ['Hypoglycemia', 'Lactic acidosis', 'Allergic reaction', 'Normal side effects'],
    answer: [1],
    rationale: 'Myalgia, malaise, hyperventilation, and abdominal discomfort suggest lactic acidosis, a rare but frequently fatal metformin complication requiring immediate discontinuation and evaluation. Metformin alone does not cause hypoglycemia because it does not stimulate insulin secretion.',
    strategy: 'Metformin does not cause hypoglycemia by itself. Its danger is lactic acidosis.' },

  { id: 'PHA-040', cat: 'pharm', sub: 'Medication Administration', type: 'mc', difficulty: 2,
    stem: 'A nurse is administering an intramuscular injection to an adult using the Z-track technique. Which action is correct?',
    options: [
      'Inject directly without displacing tissue',
      'Pull the skin and subcutaneous tissue laterally, inject, wait 10 seconds, withdraw, then release the tissue',
      'Massage the site vigorously afterward',
      'Use a 25-gauge 5/8-inch needle for all IM injections'
    ],
    answer: [1],
    rationale: 'Displacing tissue before injection creates a zigzag track that seals when released, preventing medication leakage into subcutaneous tissue and skin staining. Massage is avoided because it forces medication back along the track, and IM injections require a longer needle, typically 1 to 1.5 inches at 21 to 23 gauge.',
    strategy: 'Z-track: pull the skin, inject, wait, withdraw, release. Never massage afterward.' }
  ,
  { id: 'PHA-041', cat: 'pharm', sub: 'Medication Administration', type: 'mc', difficulty: 2,
    stem: 'A nurse is administering eye drops. Which technique is correct?',
    options: [
      'Place the drop directly on the cornea',
      'Pull down the lower lid to form a conjunctival sac, instill the drop into the sac without touching the eye, and apply gentle pressure to the inner canthus',
      'Have the client blink rapidly after instillation',
      'Touch the dropper to the eyelashes to steady it'
    ],
    answer: [1],
    rationale: 'Instilling into the conjunctival sac avoids corneal trauma and the blink reflex, and punctal occlusion at the inner canthus reduces systemic absorption, which matters with beta blockers such as timolol. Rapid blinking expels the drop, and touching the dropper to any surface contaminates it.',
    strategy: 'Eye drops: lower sac, never the cornea, never touch the dropper, press the inner canthus for a minute.' },

  { id: 'PHA-042', cat: 'pharm', sub: 'Medication Administration', type: 'mc', difficulty: 2,
    stem: 'A nurse is administering ear drops to a 2-year-old. How should the pinna be positioned?',
    options: ['Up and back', 'Down and back', 'Straight out', 'It does not matter'],
    answer: [1],
    rationale: 'In children under 3 the ear canal points upward, so the pinna is pulled down and back to straighten it. In adults and older children the pinna is pulled up and back.',
    strategy: 'Under 3, down and back. Over 3 and adults, up and back.' },

  { id: 'PHA-043', cat: 'pharm', sub: 'Antiemetics', type: 'mc', difficulty: 2,
    stem: 'A client receiving metoclopramide develops restlessness, muscle rigidity, and involuntary facial movements. What should the nurse do?',
    options: [
      'Increase the dose to control the nausea',
      'Hold the medication, notify the provider, and anticipate an anticholinergic such as diphenhydramine for the extrapyramidal reaction',
      'Continue and reassess in the morning',
      'Administer an opioid'
    ],
    answer: [1],
    rationale: 'Metoclopramide blocks dopamine and causes extrapyramidal symptoms including acute dystonia and, with prolonged use, tardive dyskinesia. The drug is held and an anticholinergic given. Continuing or increasing the dose worsens the reaction.',
    strategy: 'Metoclopramide is a dopamine blocker, so it produces the same movement disorders as antipsychotics.' },

  { id: 'PHA-044', cat: 'pharm', sub: 'Chemotherapy', type: 'mc', difficulty: 2,
    stem: 'A client receiving a vesicant chemotherapy agent through a peripheral IV reports burning at the site and the nurse notes swelling. What is the priority action?',
    options: [
      'Flush the line with saline to clear it',
      'Stop the infusion immediately, leave the catheter in place, aspirate residual drug, and follow the extravasation protocol including the specific antidote',
      'Continue the infusion at a slower rate',
      'Apply heat and continue'
    ],
    answer: [1],
    rationale: 'Vesicant extravasation causes tissue necrosis, and the protocol requires stopping immediately while keeping the catheter for aspiration and antidote instillation. Flushing pushes more drug into tissue, and continuing at any rate compounds injury. Thermal application depends on the specific drug.',
    strategy: 'Extravasation: stop, do not remove the catheter, aspirate, then follow the drug-specific antidote protocol.' },

  { id: 'PHA-045', cat: 'pharm', sub: 'Chemotherapy', type: 'mc', difficulty: 2,
    stem: 'A client receiving chemotherapy has an absolute neutrophil count of 400 cells per microliter. Which intervention is the priority?',
    options: [
      'Encourage a diet high in fresh raw fruits and vegetables',
      'Implement neutropenic precautions and teach the client to report any temperature of 38 degrees Celsius or higher immediately',
      'Restrict fluids',
      'Encourage visits from young children'
    ],
    answer: [1],
    rationale: 'An absolute neutrophil count below 500 constitutes severe neutropenia where fever is a medical emergency requiring antibiotics within an hour. Raw produce and contact with children who may carry infections both increase exposure risk.',
    strategy: 'ANC under 500 equals severe neutropenia. Any fever is an emergency; antibiotics within an hour.' },

  { id: 'PHA-046', cat: 'pharm', sub: 'Dosage Calculation', type: 'fill', difficulty: 2, unit: 'mL',
    stem: 'A provider orders 0.125 mg of digoxin orally. The available elixir contains 0.05 mg/mL. How many milliliters should the nurse administer? Round to the nearest tenth.',
    answerText: ['2.5', '2.5 mL'],
    rationale: '0.125 mg divided by 0.05 mg/mL equals 2.5 mL.',
    strategy: 'Desired divided by available, times the volume. Watch decimal placement with digoxin especially.' },

  { id: 'PHA-047', cat: 'pharm', sub: 'Dosage Calculation', type: 'fill', difficulty: 2, unit: 'mcg/min',
    stem: 'A client is receiving dopamine at 5 mcg/kg/min and weighs 70 kg. How many micrograms per minute is the client receiving?',
    answerText: ['350', '350 mcg/min'],
    rationale: '5 mcg/kg/min multiplied by 70 kg equals 350 mcg per minute.',
    strategy: 'Weight-based drips: multiply the per-kilogram rate by the weight first, then convert to pump volume.' },

  { id: 'PHA-048', cat: 'pharm', sub: 'Thyroid Drugs', type: 'mc', difficulty: 2,
    stem: 'A client taking levothyroxine reports palpitations, weight loss, heat intolerance, and insomnia. What should the nurse suspect?',
    options: ['Undertreatment requiring a dose increase', 'Excessive dose producing hyperthyroid symptoms', 'An allergic reaction', 'Expected effects that require no action'],
    answer: [1],
    rationale: 'These are signs of thyrotoxicosis from an excessive levothyroxine dose, requiring a TSH check and dose reduction. Undertreatment produces fatigue, cold intolerance, weight gain, and constipation.',
    strategy: 'Too much thyroid hormone looks like hyperthyroidism: fast, hot, thin, anxious. Too little looks like the opposite.' },

  { id: 'PHA-049', cat: 'pharm', sub: 'Antitubercular', type: 'mc', difficulty: 2,
    stem: 'A client taking isoniazid for tuberculosis should also receive which supplement?',
    options: ['Vitamin C', 'Pyridoxine, vitamin B6', 'Vitamin D', 'Folic acid'],
    answer: [1],
    rationale: 'Isoniazid interferes with pyridoxine metabolism and causes peripheral neuropathy, which supplemental vitamin B6 prevents. Clients also need monitoring for hepatotoxicity and should avoid alcohol.',
    strategy: 'Isoniazid plus B6 prevents neuropathy. Watch liver enzymes and avoid alcohol.' },

  { id: 'PHA-050', cat: 'pharm', sub: 'Antitubercular', type: 'mc', difficulty: 2,
    stem: 'A client taking rifampin reports orange-red urine and tears. What should the nurse explain?',
    options: [
      '"This indicates liver failure; stop the medication."',
      '"This is a harmless expected effect of rifampin, but it permanently stains soft contact lenses, so wear glasses during therapy."',
      '"This indicates bleeding in the urinary tract."',
      '"This means the dose is too high."'
    ],
    answer: [1],
    rationale: 'Rifampin turns all body fluids orange-red, which is harmless but stains contact lenses and clothing. It also induces hepatic enzymes and reduces the effectiveness of oral contraceptives and many other drugs.',
    strategy: 'Rifampin: orange everything, no soft contacts, and it wrecks oral contraceptive effectiveness.' },

  { id: 'PHA-051', cat: 'pharm', sub: 'Antivirals', type: 'mc', difficulty: 2,
    stem: 'A client taking acyclovir should receive which teaching?',
    options: [
      'Restrict fluids to concentrate the drug',
      'Drink generous fluids to maintain adequate urine output and prevent crystalluria and renal injury',
      'Take it only when lesions appear and stop immediately after',
      'This medication cures the viral infection'
    ],
    answer: [1],
    rationale: 'Acyclovir can crystallize in renal tubules, so adequate hydration is essential particularly with IV administration. Antivirals suppress rather than cure herpes viruses, and the full course must be completed.',
    strategy: 'Acyclovir needs hydration. Antivirals for herpes suppress; they do not cure.' },

  { id: 'PHA-052', cat: 'pharm', sub: 'Statins', type: 'mc', difficulty: 2,
    stem: 'A client taking atorvastatin reports unexplained muscle pain and weakness with dark urine. What should the nurse do?',
    options: [
      'Reassure the client this is a normal effect',
      'Hold the medication, notify the provider, and anticipate a creatine kinase level, since this may indicate rhabdomyolysis',
      'Increase the dose',
      'Recommend exercising more'
    ],
    answer: [1],
    rationale: 'Myalgia with weakness and dark urine suggests rhabdomyolysis, which can cause acute kidney failure and requires immediate discontinuation and creatine kinase testing. Grapefruit juice raises statin levels and should be avoided.',
    strategy: 'Statin plus muscle pain plus dark urine equals rhabdomyolysis. Also avoid grapefruit juice.' },

  { id: 'PHA-053', cat: 'pharm', sub: 'Antiplatelets', type: 'mc', difficulty: 2,
    stem: 'A client is prescribed clopidogrel after coronary stent placement. Which teaching point is most important?',
    options: [
      'Stop the medication if minor bruising occurs',
      'Do not stop the medication without consulting the cardiologist, because premature discontinuation can cause stent thrombosis and myocardial infarction',
      'Take it only when chest pain occurs',
      'Double the dose if a dose is missed'
    ],
    answer: [1],
    rationale: 'Dual antiplatelet therapy prevents stent thrombosis, and early discontinuation carries a high risk of acute stent closure and death. Minor bruising is expected, the drug is taken continuously rather than as needed, and doses are not doubled.',
    strategy: 'After a stent, never stop antiplatelet therapy without cardiology approval, including before dental or surgical procedures.' },

  { id: 'PHA-054', cat: 'pharm', sub: 'Beta Blockers', type: 'mc', difficulty: 2,
    stem: 'A client with diabetes is prescribed metoprolol. Which teaching is most important?',
    options: [
      'Beta blockers have no effect on diabetes',
      'Beta blockers can mask the adrenergic warning signs of hypoglycemia such as tremor and tachycardia, so check blood glucose more often',
      'Stop insulin while taking metoprolol',
      'Beta blockers cause hypoglycemia directly'
    ],
    answer: [1],
    rationale: 'Beta blockade suppresses the sympathetic symptoms that normally warn a client of falling glucose, leaving diaphoresis as one of the few remaining cues, so more frequent monitoring is needed. Insulin is never stopped without provider direction.',
    strategy: 'Beta blockers hide hypoglycemia. Sweating still occurs; tremor and tachycardia do not.' },

  { id: 'PHA-055', cat: 'pharm', sub: 'Beta Blockers', type: 'mc', difficulty: 2,
    stem: 'A client taking atenolol asks about stopping it because their blood pressure is now normal. What should the nurse explain?',
    options: [
      '"You can stop now that your pressure is normal."',
      '"The normal pressure shows the medication is working. Stopping a beta blocker abruptly can cause rebound hypertension, chest pain, and heart attack, so any change must be tapered by your provider."',
      '"Take it every other day instead."',
      '"Beta blockers can be stopped at any time safely."'
    ],
    answer: [1],
    rationale: 'Abrupt beta blocker withdrawal causes receptor hypersensitivity with rebound tachycardia, hypertension, angina, and infarction, so discontinuation is always tapered. Self-adjusting the schedule creates the same risk.',
    strategy: 'Never stop a beta blocker abruptly. Rebound effects can be fatal.' },

  { id: 'PHA-056', cat: 'pharm', sub: 'Calcium Channel Blockers', type: 'mc', difficulty: 2,
    stem: 'A client taking verapamil should avoid which beverage?',
    options: ['Water', 'Grapefruit juice', 'Apple juice', 'Milk'],
    answer: [1],
    rationale: 'Grapefruit inhibits intestinal CYP3A4, raising serum levels of many calcium channel blockers, statins, and immunosuppressants and causing toxicity. Verapamil also commonly causes constipation.',
    strategy: 'Grapefruit interacts with calcium channel blockers, statins, cyclosporine, and some benzodiazepines.' },

  { id: 'PHA-057', cat: 'pharm', sub: 'Antidepressants', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching a client starting fluoxetine. Which instruction is most important for safety?',
    options: [
      'Expect immediate relief of symptoms',
      'Report any worsening mood, agitation, or thoughts of self-harm promptly, especially in the first weeks and in younger clients',
      'Stop it as soon as mood improves',
      'Combine it with St. John\'s wort for better effect'
    ],
    answer: [1],
    rationale: 'Antidepressants carry a boxed warning for increased suicidal thinking in children, adolescents, and young adults, particularly early in treatment when energy improves before mood. Effect takes weeks, therapy continues after improvement, and St. John\'s wort adds serotonin syndrome risk.',
    strategy: 'Energy returns before mood lifts, which is why suicide risk can rise in the first weeks of antidepressant therapy.' },

  { id: 'PHA-058', cat: 'pharm', sub: 'Antidepressants', type: 'mc', difficulty: 3,
    stem: 'A client taking a selective serotonin reuptake inhibitor develops agitation, hyperreflexia, clonus, diaphoresis, and a temperature of 39.5 degrees Celsius. What should the nurse suspect?',
    options: ['Neuroleptic malignant syndrome', 'Serotonin syndrome', 'Anticholinergic toxicity', 'Alcohol withdrawal'],
    answer: [1],
    rationale: 'Neuromuscular hyperactivity with hyperreflexia and clonus alongside autonomic instability and altered mental status defines serotonin syndrome, treated by stopping serotonergic agents and providing supportive care with cyproheptadine if needed. Neuroleptic malignant syndrome features lead-pipe rigidity and hyporeflexia instead.',
    strategy: 'Clonus and hyperreflexia point to serotonin syndrome. Rigidity without clonus points to NMS.' },

  { id: 'PHA-059', cat: 'pharm', sub: 'Antacids', type: 'mc', difficulty: 2,
    stem: 'A client takes an aluminum-based antacid regularly. Which side effect should the nurse anticipate?',
    options: ['Diarrhea', 'Constipation', 'Hyperkalemia', 'Hyponatremia'],
    answer: [1],
    rationale: 'Aluminum-containing antacids cause constipation while magnesium-containing antacids cause diarrhea, which is why many products combine both. Antacids also reduce absorption of many other medications and should be separated by 1 to 2 hours.',
    strategy: 'Aluminum makes you Constipated, Magnesium Moves you.' },

  { id: 'PHA-060', cat: 'pharm', sub: 'Proton Pump Inhibitors', type: 'mc', difficulty: 2,
    stem: 'A client is prescribed omeprazole. Which teaching point is correct?',
    options: [
      'Take it after meals for best effect',
      'Take it 30 to 60 minutes before the first meal of the day, swallow capsules whole, and be aware that long-term use is associated with fracture risk, low magnesium, low B12, and increased C. difficile risk',
      'Crush the delayed-release capsule for easier swallowing',
      'It provides immediate relief of acute heartburn'
    ],
    answer: [1],
    rationale: 'Proton pump inhibitors irreversibly inhibit active proton pumps, so they are taken before a meal when pumps are activated. Delayed-release formulations are not crushed, onset takes days, and long-term risks warrant periodic reassessment of the need for therapy.',
    strategy: 'PPIs go before breakfast, not after meals. They are not rescue medications.' },

  { id: 'PHA-061', cat: 'pharm', sub: 'Medication Administration', type: 'sata', difficulty: 1,
    stem: 'Which medications should never be crushed? Select all that apply.',
    options: [
      'Enteric-coated aspirin',
      'Extended-release metoprolol',
      'Plain acetaminophen tablets',
      'Sublingual nitroglycerin',
      'Sustained-release morphine',
      'Immediate-release lisinopril'
    ],
    answer: [0, 1, 3, 4],
    rationale: 'Enteric coatings protect the stomach or the drug, extended and sustained-release formulations release the full dose at once if crushed and can be fatal with opioids, and sublingual tablets are designed for mucosal absorption. Plain immediate-release tablets may generally be crushed.',
    strategy: 'Never crush anything labeled EC, ER, SR, XL, XR, CR, LA, or SL.' },

  { id: 'PHA-062', cat: 'pharm', sub: 'Nitrates', type: 'mc', difficulty: 2,
    stem: 'A client with angina is taught about sublingual nitroglycerin. Which statement indicates correct understanding?',
    options: [
      '"I will swallow the tablet with water."',
      '"I will place the tablet under my tongue at the first sign of chest pain, sit or lie down, and call 911 if the pain is not relieved after the first tablet."',
      '"I will store the tablets in a clear plastic bag in my pocket."',
      '"I can take this with my erectile dysfunction medication."'
    ],
    answer: [1],
    rationale: 'Sublingual absorption requires the tablet to dissolve under the tongue, sitting prevents syncope from vasodilation, and current guidance directs calling emergency services if pain persists after the first dose. Tablets are stored in the original dark glass container, and combining nitrates with phosphodiesterase inhibitors causes profound life-threatening hypotension.',
    strategy: 'Nitrates plus sildenafil equals fatal hypotension. Always ask about erectile dysfunction drugs before giving nitroglycerin.' },

  { id: 'PHA-063', cat: 'pharm', sub: 'Antidotes', type: 'mc', difficulty: 1,
    stem: 'Which antidote reverses acetaminophen overdose?',
    options: ['Naloxone', 'Acetylcysteine', 'Flumazenil', 'Protamine sulfate'],
    answer: [1],
    rationale: 'Acetylcysteine replenishes glutathione and prevents hepatic necrosis, and it is most effective within 8 to 10 hours of ingestion. Naloxone reverses opioids, flumazenil reverses benzodiazepines, and protamine reverses heparin.',
    strategy: 'Antidote pairs: acetaminophen-acetylcysteine, opioid-naloxone, benzodiazepine-flumazenil, heparin-protamine, warfarin-vitamin K, digoxin-digoxin immune Fab, magnesium-calcium gluconate.' },

  { id: 'PHA-064', cat: 'pharm', sub: 'Antidotes', type: 'mc', difficulty: 3,
    stem: 'A client receiving magnesium sulfate for preeclampsia has absent deep tendon reflexes and a respiratory rate of 10. What should the nurse do first?',
    options: [
      'Increase the magnesium infusion',
      'Stop the magnesium infusion and prepare to administer calcium gluconate',
      'Administer a diuretic',
      'Continue and reassess in 30 minutes'
    ],
    answer: [1],
    rationale: 'Loss of deep tendon reflexes and respiratory depression indicate magnesium toxicity, which progresses to respiratory and cardiac arrest. The infusion is stopped immediately and calcium gluconate, the antagonist, is given. Reflexes are the earliest monitored sign and disappear before respiratory compromise.',
    strategy: 'Magnesium toxicity order: reflexes go first, then respirations, then cardiac arrest. Calcium gluconate is the antidote.' },

  { id: 'PHA-065', cat: 'pharm', sub: 'Dosage Calculation', type: 'fill', difficulty: 2, unit: 'tablets',
    stem: 'A provider orders 0.5 g of a medication orally. The available tablets are 250 mg each. How many tablets should the nurse give?',
    answerText: ['2', '2 tablets'],
    rationale: '0.5 g equals 500 mg. 500 mg divided by 250 mg per tablet equals 2 tablets.',
    strategy: 'Convert grams to milligrams by multiplying by 1000 before dividing.' },

  { id: 'PHA-066', cat: 'pharm', sub: 'Immunosuppressants', type: 'mc', difficulty: 2,
    stem: 'A client taking cyclosporine after a kidney transplant should be taught which precaution?',
    options: [
      'Live vaccines are safe and recommended',
      'Avoid live vaccines, report signs of infection promptly, avoid grapefruit juice, and maintain meticulous oral hygiene because gingival hyperplasia is common',
      'Stop the medication once the transplant is stable',
      'This medication has no significant interactions'
    ],
    answer: [1],
    rationale: 'Immunosuppression contraindicates live vaccines and makes infection both more likely and harder to detect. Grapefruit raises cyclosporine levels toward nephrotoxicity, gingival hyperplasia is common, and the drug continues for the life of the graft.',
    strategy: 'Transplant clients: no live vaccines ever, infection is the constant threat, and immunosuppressants are lifelong.' },

  { id: 'PHA-067', cat: 'pharm', sub: 'Antibiotics', type: 'mc', difficulty: 3,
    stem: 'A client develops watery diarrhea and abdominal cramping after 7 days of clindamycin. What should the nurse suspect?',
    options: [
      'Expected gastrointestinal side effect requiring no action',
      'Clostridioides difficile infection; obtain a stool specimen, notify the provider, and implement contact precautions',
      'Lactose intolerance',
      'Viral gastroenteritis unrelated to the antibiotic'
    ],
    answer: [1],
    rationale: 'Broad-spectrum antibiotics, particularly clindamycin, fluoroquinolones, and cephalosporins, disrupt normal flora and allow C. difficile overgrowth. Testing, contact precautions with soap and water hand hygiene, and appropriate treatment are needed, and antidiarrheals are avoided because they promote toxic megacolon.',
    strategy: 'New diarrhea during or after antibiotics equals C. difficile until proven otherwise. Never give an antidiarrheal.' },

  { id: 'PHA-068', cat: 'pharm', sub: 'Antibiotics', type: 'mc', difficulty: 2,
    stem: 'A client is prescribed trimethoprim-sulfamethoxazole. Which teaching point is most important?',
    options: [
      'Restrict fluids while taking it',
      'Drink generous fluids, use sun protection, and report any rash immediately because serious skin reactions can occur',
      'Take it with an antacid',
      'It is safe in clients with a sulfa allergy'
    ],
    answer: [1],
    rationale: 'Sulfonamides can crystallize in the urine without adequate hydration, cause photosensitivity, and are a leading cause of Stevens-Johnson syndrome, so any rash requires immediate evaluation. They are contraindicated with sulfa allergy.',
    strategy: 'Sulfa drugs: hydrate, avoid sun, and treat any rash as a possible Stevens-Johnson warning.' },

  { id: 'PHA-069', cat: 'pharm', sub: 'IV Therapy', type: 'mc', difficulty: 2,
    stem: 'A nurse is preparing to administer potassium chloride 20 mEq in 100 mL over 2 hours. Which action is essential?',
    options: [
      'Administer by IV push if the client is symptomatic',
      'Use an infusion pump, never exceed the recommended infusion rate, and monitor the IV site and cardiac rhythm',
      'Add the potassium to a bag already hanging and invert it once',
      'Infuse rapidly to correct the deficit quickly'
    ],
    answer: [1],
    rationale: 'Potassium must be diluted and infused by pump at a controlled rate, generally no faster than 10 mEq per hour peripherally, with cardiac monitoring for faster rates. It is never given IV push, adding to a hanging bag risks a concentrated bolus if not fully mixed, and rapid infusion causes fatal arrhythmia and severe vein irritation.',
    strategy: 'Potassium is never pushed, always on a pump, and burning at the site means slow it down or dilute further.' },

  { id: 'PHA-070', cat: 'pharm', sub: 'Blood Products', type: 'sata', difficulty: 2,
    stem: 'A client develops chills, fever of 38.5 degrees Celsius, and headache 30 minutes into a transfusion, with no back pain or hypotension. Which actions are appropriate? Select all that apply.',
    options: [
      'Stop the transfusion',
      'Keep the IV line open with normal saline using new tubing',
      'Notify the provider and the blood bank',
      'Increase the rate to finish the unit',
      'Administer an antipyretic as ordered',
      'Return the blood bag and tubing to the blood bank'
    ],
    answer: [0, 1, 2, 4, 5],
    rationale: 'This describes a febrile nonhemolytic transfusion reaction, the most common type. The transfusion is still stopped, saline maintained through new tubing, the provider and blood bank notified, an antipyretic given, and the unit returned for evaluation to exclude hemolysis. Continuing the transfusion is never appropriate.',
    strategy: 'Any transfusion reaction: stop the blood, saline with new tubing, notify, and send the bag back. Then treat by type.' },

  { id: 'PHA-071', cat: 'pharm', sub: 'Antiparkinson', type: 'mc', difficulty: 2,
    stem: 'A client taking carbidopa-levodopa should be taught which point?',
    options: [
      'Take it with a high-protein meal for best absorption',
      'High-protein meals can reduce absorption, urine and sweat may darken, and the client should change positions slowly because of orthostatic hypotension',
      'Stop it abruptly if side effects occur',
      'It cures Parkinson disease'
    ],
    answer: [1],
    rationale: 'Dietary amino acids compete with levodopa for intestinal and blood-brain barrier transport, so protein is distributed carefully. Darkened secretions are harmless, orthostasis is common, and abrupt withdrawal can precipitate a neuroleptic malignant-like syndrome. The drug controls symptoms rather than curing the disease.',
    strategy: 'Levodopa competes with dietary protein. Never stop dopaminergic drugs abruptly.' },

  { id: 'PHA-072', cat: 'pharm', sub: 'Bisphosphonates', type: 'mc', difficulty: 2,
    stem: 'A client is prescribed alendronate for osteoporosis. Which administration instruction is correct?',
    options: [
      'Take it at bedtime with a snack',
      'Take it first thing in the morning with a full glass of plain water on an empty stomach, and remain upright and without food for at least 30 minutes',
      'Take it with calcium supplements at the same time',
      'Lie down immediately after taking it'
    ],
    answer: [1],
    rationale: 'Bisphosphonates are poorly absorbed and severely irritating to the esophagus, so they are taken fasting with plain water and the client remains upright to prevent esophagitis and ulceration. Calcium blocks absorption and must be separated.',
    strategy: 'Bisphosphonates: empty stomach, full glass of plain water, stay upright 30 minutes, separate from calcium.' },

  { id: 'PHA-073', cat: 'pharm', sub: 'Opioids', type: 'mc', difficulty: 2,
    stem: 'A client with chronic pain has been on oral morphine and is being converted to a different opioid. What principle should guide the change?',
    options: [
      'Equal milligram doses of different opioids produce equal effects',
      'Equianalgesic conversion is used and the calculated dose is typically reduced by 25 to 50 percent because cross-tolerance is incomplete',
      'The new dose should be doubled to ensure adequate relief',
      'No adjustment is needed when switching routes'
    ],
    answer: [1],
    rationale: 'Different opioids have different potencies, and tolerance to one does not fully transfer to another, so equianalgesic tables guide conversion and the calculated dose is reduced to avoid overdose. Route changes also require conversion, since oral morphine is roughly one third as potent as intravenous.',
    strategy: 'Opioid rotation: convert with an equianalgesic table, then cut the dose by 25 to 50 percent for incomplete cross-tolerance.' },

  { id: 'PHA-074', cat: 'pharm', sub: 'Antihistamines', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching an older adult about diphenhydramine. Which effect should the nurse emphasize?',
    options: [
      'It has no effect on cognition',
      'It causes sedation, confusion, dry mouth, constipation, and urinary retention, and increases fall risk in older adults',
      'It should be taken before driving',
      'It is the preferred sleep aid for older adults'
    ],
    answer: [1],
    rationale: 'First-generation antihistamines have strong anticholinergic activity that in older adults produces delirium, retention, constipation, and falls, which is why they appear on the Beers list. They should not be taken before driving and are not appropriate as a routine sleep aid in this population.',
    strategy: 'Anticholinergic effects: cannot see, cannot pee, cannot spit, cannot poop, and confused on top.' },

  { id: 'PHA-075', cat: 'pharm', sub: 'Medication Administration', type: 'mc', difficulty: 2,
    stem: 'A nurse is administering a subcutaneous injection of enoxaparin. Which technique is correct?',
    options: [
      'Expel the air bubble from the prefilled syringe before injecting',
      'Do not expel the air bubble, inject into the abdominal fat at least 2 inches from the umbilicus, and do not aspirate or massage the site',
      'Massage the site after injection to aid absorption',
      'Inject into the deltoid muscle'
    ],
    answer: [1],
    rationale: 'The air bubble in a prefilled low-molecular-weight heparin syringe clears the needle of drug and reduces bruising, and massage or aspiration increases hematoma formation. The abdomen is the preferred site and it is a subcutaneous, not intramuscular, medication.',
    strategy: 'Enoxaparin: keep the bubble, love handles or abdomen, no aspiration, no massage.' },

  { id: 'PHA-076', cat: 'pharm', sub: 'Antiarrhythmics', type: 'mc', difficulty: 2,
    stem: 'A client is prescribed amiodarone long term. Which monitoring is essential?',
    options: [
      'Only blood pressure',
      'Thyroid function, liver enzymes, pulmonary function and chest imaging, and ophthalmologic examination',
      'Only serum sodium',
      'No routine monitoring is required'
    ],
    answer: [1],
    rationale: 'Amiodarone is iodine-rich and causes both hypothyroidism and hyperthyroidism, hepatotoxicity, potentially fatal pulmonary fibrosis, corneal deposits and optic neuropathy, and blue-gray skin discoloration, so multiple organ systems require baseline and ongoing monitoring.',
    strategy: 'Amiodarone touches thyroid, liver, lungs, eyes, and skin. It is the multi-organ toxicity drug.' },

  { id: 'PHA-077', cat: 'pharm', sub: 'Antidiabetics', type: 'mc', difficulty: 2,
    stem: 'A client is taking glipizide, a sulfonylurea. Which adverse effect is most important to teach about?',
    options: ['Lactic acidosis', 'Hypoglycemia, especially if meals are skipped', 'Weight loss', 'Hyperkalemia'],
    answer: [1],
    rationale: 'Sulfonylureas stimulate insulin secretion regardless of glucose level, so skipping meals or exercising unusually can cause significant and prolonged hypoglycemia. They tend to cause weight gain rather than loss, and lactic acidosis is a metformin concern.',
    strategy: 'Drugs that make insulin (sulfonylureas, meglitinides) cause hypoglycemia. Drugs that sensitize (metformin) generally do not.' },

  { id: 'PHA-078', cat: 'pharm', sub: 'Vaccines', type: 'mc', difficulty: 2,
    stem: 'A nurse is administering a vaccine and the client asks about the observation period afterward. What should the nurse explain?',
    options: [
      '"You may leave immediately."',
      '"We ask you to remain seated for about 15 minutes so we can observe for a rare immediate allergic reaction and prevent injury if you faint."',
      '"You must stay for 2 hours."',
      '"Observation is only needed for children."'
    ],
    answer: [1],
    rationale: 'A 15-minute observation period allows detection of immediate hypersensitivity and prevents injury from vasovagal syncope, which is most common in adolescents. Epinephrine must be immediately available wherever vaccines are given.',
    strategy: 'Fifteen minutes seated after any vaccine, with epinephrine within reach.' },

  { id: 'PHA-079', cat: 'pharm', sub: 'Dosage Calculation', type: 'fill', difficulty: 2, unit: 'units',
    stem: 'A client\'s sliding scale reads: blood glucose 201 to 250 give 4 units, 251 to 300 give 6 units, 301 to 350 give 8 units. The client\'s glucose is 288 mg/dL. How many units of insulin should the nurse administer?',
    answerText: ['6', '6 units'],
    rationale: 'A glucose of 288 mg/dL falls within the 251 to 300 range, which calls for 6 units. Insulin doses always require an independent double check before administration.',
    strategy: 'Read sliding scales carefully and match the exact range. Never round the glucose to a neighboring band.' },

  { id: 'PHA-080', cat: 'pharm', sub: 'Antibiotics', type: 'mc', difficulty: 2,
    stem: 'A client asks why they must finish the full course of antibiotics when they already feel better. What is the nurse\'s best explanation?',
    options: [
      '"You can stop once symptoms resolve."',
      '"Stopping early can leave the hardier organisms alive, which allows the infection to return and promotes antibiotic resistance."',
      '"Finishing the course prevents allergic reactions."',
      '"It is only important for children."'
    ],
    answer: [1],
    rationale: 'Symptom resolution precedes eradication, and premature discontinuation selects for the least susceptible organisms, driving relapse and resistance. Completion has no bearing on allergy risk and applies to all ages.',
    strategy: 'Feeling better is not the same as being cured. Complete the prescribed course.' }
  ,
  { id: 'PHA-081', cat: 'pharm', sub: 'Medication Administration', type: 'order', difficulty: 3,
    stem: 'Place the steps for administering a medication using the rights of medication administration in the correct order.',
    options: [
      'Verify the order and check the medication label against the medication administration record',
      'Perform hand hygiene and prepare the correct dose',
      'Identify the client using two identifiers at the bedside',
      'Administer the medication by the correct route at the correct time',
      'Document the administration and evaluate the client\'s response'
    ],
    answer: [0, 1, 2, 3, 4],
    rationale: 'Verification precedes preparation, identification occurs at the bedside immediately before administration, the drug is given, and documentation follows administration rather than preceding it. Charting before giving a medication is falsification and a common source of duplicate dosing.',
    strategy: 'Never document before you administer. The order is verify, prepare, identify, give, document.' },

  { id: 'PHA-082', cat: 'pharm', sub: 'Antihypertensives', type: 'mc', difficulty: 2,
    stem: 'A client taking hydrochlorothiazide should be monitored for which combination of electrolyte changes?',
    options: [
      'Hyperkalemia and hypocalcemia',
      'Hypokalemia, hyponatremia, and hypercalcemia',
      'Hyperphosphatemia and hypermagnesemia',
      'No electrolyte changes occur'
    ],
    answer: [1],
    rationale: 'Thiazides waste potassium, sodium, and magnesium while retaining calcium, and they also raise uric acid and glucose. This calcium-retaining property distinguishes them from loop diuretics, which waste calcium.',
    strategy: 'Thiazides keep calcium, loops lose it. Both lose potassium.' },

  { id: 'PHA-083', cat: 'pharm', sub: 'Opioids', type: 'mc', difficulty: 2,
    stem: 'A client is prescribed meperidine for postoperative pain. Which client factor is a contraindication?',
    options: [
      'Age 30 with normal renal function',
      'Renal impairment, because the metabolite normeperidine accumulates and causes seizures',
      'A history of nausea with opioids',
      'Mild anxiety'
    ],
    answer: [1],
    rationale: 'Normeperidine is neurotoxic and renally cleared, so accumulation in renal impairment or with repeated dosing causes tremor, myoclonus, and seizures. Meperidine is largely avoided in older adults and in anyone taking a monoamine oxidase inhibitor.',
    strategy: 'Meperidine is falling out of use because of normeperidine seizures. It is contraindicated with MAOIs.' },

  { id: 'PHA-084', cat: 'pharm', sub: 'Antipsychotics', type: 'mc', difficulty: 2,
    stem: 'A client taking olanzapine should be monitored for which long-term adverse effect?',
    options: [
      'Weight gain, hyperglycemia, and dyslipidemia',
      'Hypotension only',
      'Hair loss',
      'Hypothermia'
    ],
    answer: [0],
    rationale: 'Second-generation antipsychotics, particularly olanzapine and clozapine, cause substantial metabolic syndrome with weight gain, insulin resistance, and lipid abnormalities, requiring baseline and periodic weight, glucose, and lipid monitoring.',
    strategy: 'Atypical antipsychotics: metabolic syndrome. Typical antipsychotics: movement disorders.' },

  { id: 'PHA-085', cat: 'pharm', sub: 'IV Therapy', type: 'mc', difficulty: 3,
    stem: 'A nurse is caring for a client receiving an IV infusion who develops crackles, dyspnea, bounding pulse, and distended neck veins. What should the nurse do first?',
    options: [
      'Increase the infusion rate',
      'Slow the infusion to a keep-open rate, place the client in high Fowler position, administer oxygen, and notify the provider',
      'Place the client flat',
      'Discontinue the IV and remove the catheter'
    ],
    answer: [1],
    rationale: 'These are signs of fluid volume overload, so the infusion is slowed rather than stopped entirely to preserve access, the client is positioned upright to ease work of breathing, oxygen is applied, and the provider is notified for possible diuretic administration. Supine positioning worsens dyspnea.',
    strategy: 'Fluid overload: slow the drip, sit them up, oxygen, call for a diuretic.' },

  { id: 'PHA-086', cat: 'pharm', sub: 'Antibiotics', type: 'mc', difficulty: 2,
    stem: 'A client is receiving IV vancomycin. Which laboratory value is used to guide dosing?',
    options: ['Peak level drawn 30 minutes before the dose', 'Trough level drawn 30 minutes before the next dose', 'Random level at any time', 'Serum sodium'],
    answer: [1],
    rationale: 'Vancomycin dosing is guided by trough levels drawn immediately before the next dose, which correlate with both efficacy and nephrotoxicity risk. Renal function is monitored alongside.',
    strategy: 'Trough is drawn just before the next dose. Peak is drawn after the infusion finishes.' },

  { id: 'PHA-087', cat: 'pharm', sub: 'Dosage Calculation', type: 'fill', difficulty: 2, unit: 'mL',
    stem: 'A child is prescribed acetaminophen 15 mg/kg and weighs 18 kg. The suspension is 160 mg per 5 mL. How many milliliters should the nurse give? Round to the nearest tenth.',
    answerText: ['8.4', '8.4 mL'],
    rationale: '18 kg times 15 mg equals 270 mg. 270 mg divided by 160 mg times 5 mL equals 8.4 mL.',
    strategy: 'Two-step pediatric problems: calculate the milligram dose from the weight, then convert to volume.' },

  { id: 'PHA-088', cat: 'pharm', sub: 'Anticoagulants', type: 'mc', difficulty: 3,
    stem: 'A client on heparin develops a platelet count that has fallen from 240,000 to 70,000 over 5 days along with a new leg clot. What should the nurse suspect?',
    options: [
      'Expected heparin effect',
      'Heparin-induced thrombocytopenia, which requires immediate discontinuation of all heparin including flushes',
      'Dehydration',
      'Laboratory error requiring no action'
    ],
    answer: [1],
    rationale: 'A platelet drop of more than 50 percent between days 5 and 10 of heparin exposure with new thrombosis is characteristic of heparin-induced thrombocytopenia, a prothrombotic immune reaction. All heparin including line flushes and coated catheters is stopped and a non-heparin anticoagulant substituted.',
    strategy: 'HIT causes clotting, not bleeding, despite the low platelets. Stop every source of heparin.' },

  { id: 'PHA-089', cat: 'pharm', sub: 'Antiemetics', type: 'mc', difficulty: 2,
    stem: 'A client receiving ondansetron should be monitored for which effect?',
    options: ['QT prolongation and headache', 'Severe hypoglycemia', 'Hypertensive crisis', 'Hearing loss'],
    answer: [0],
    rationale: 'Ondansetron prolongs the QT interval, particularly at higher doses or with other QT-prolonging drugs and electrolyte disturbance, and headache is the most common side effect. Constipation also occurs.',
    strategy: 'Ondansetron prolongs QT. Check potassium and magnesium and review other QT-prolonging drugs.' },

  { id: 'PHA-090', cat: 'pharm', sub: 'Medication Administration', type: 'mc', difficulty: 2,
    stem: 'A nurse is preparing to give an intradermal tuberculin test. Which technique is correct?',
    options: [
      'Insert at a 90-degree angle into the deltoid muscle',
      'Insert bevel up at a 5 to 15 degree angle into the inner forearm to produce a small wheal',
      'Aspirate before injecting',
      'Massage the site after injection'
    ],
    answer: [1],
    rationale: 'Intradermal injection places medication just below the epidermis at a very shallow angle, producing a visible wheal that confirms correct depth. Aspiration and massage are not performed, and a 90-degree deltoid injection is intramuscular.',
    strategy: 'Injection angles: intradermal 5 to 15 degrees, subcutaneous 45 to 90, intramuscular 90.' },

  { id: 'PHA-091', cat: 'pharm', sub: 'Antibiotics', type: 'mc', difficulty: 2,
    stem: 'A nurse is about to administer the first dose of an IV antibiotic. Which nursing action is most important?',
    options: [
      'Administer rapidly to save time',
      'Verify allergy history, remain nearby during the initial minutes, and monitor for signs of hypersensitivity',
      'Leave the room immediately after starting',
      'Mix it with the client\'s other infusions'
    ],
    answer: [1],
    rationale: 'First doses carry the highest anaphylaxis risk, so allergy verification and close observation during the initial infusion are essential. Rapid administration increases reactions, leaving prevents early detection, and mixing risks incompatibility.',
    strategy: 'First doses of anything need a nurse in the room. Anaphylaxis develops in minutes.' },

  { id: 'PHA-092', cat: 'pharm', sub: 'Antivirals', type: 'mc', difficulty: 2,
    stem: 'A client with HIV is prescribed antiretroviral therapy. Which teaching point is most important?',
    options: [
      'Take the medications only when symptoms appear',
      'Take every dose consistently as scheduled, because missed doses allow viral replication and drug resistance to develop',
      'Stop when the viral load becomes undetectable',
      'Share medications with a partner who is also positive'
    ],
    answer: [1],
    rationale: 'Antiretroviral therapy requires very high adherence to maintain viral suppression and prevent resistance, and it is continued indefinitely even when the viral load is undetectable. Medications are never shared, since regimens are individualized.',
    strategy: 'HIV therapy is lifelong and adherence-critical. Undetectable does not mean cured.' },

  { id: 'PHA-093', cat: 'pharm', sub: 'Anticoagulants', type: 'mc', difficulty: 2,
    stem: 'A client on apixaban asks whether routine blood tests are needed like with warfarin. What should the nurse explain?',
    options: [
      '"You will need weekly INR checks."',
      '"Direct oral anticoagulants do not require routine INR monitoring, but you will need periodic kidney function tests and you must not miss doses."',
      '"No monitoring of any kind is needed."',
      '"You should check your own INR at home."'
    ],
    answer: [1],
    rationale: 'Direct oral anticoagulants have predictable pharmacokinetics and do not require INR monitoring, but renal function affects clearance and must be checked periodically. Their short half-life means a missed dose leaves the client unprotected quickly.',
    strategy: 'DOACs: no INR, but check renal function and never skip doses. Their short half-life cuts both ways.' },

  { id: 'PHA-094', cat: 'pharm', sub: 'Respiratory Drugs', type: 'mc', difficulty: 2,
    stem: 'A client is prescribed theophylline. Which serum level indicates toxicity?',
    options: ['5 mcg/mL', '12 mcg/mL', '25 mcg/mL', '8 mcg/mL'],
    answer: [2],
    rationale: 'The therapeutic range is 10 to 20 mcg/mL, so 25 indicates toxicity presenting with nausea, vomiting, tachycardia, arrhythmias, insomnia, and seizures. Caffeine and smoking both alter theophylline levels.',
    strategy: 'Theophylline range 10 to 20 with a narrow margin. Toxicity looks like caffeine overdose.' },

  { id: 'PHA-095', cat: 'pharm', sub: 'Antidotes', type: 'mc', difficulty: 2,
    stem: 'A client with digoxin toxicity and life-threatening arrhythmia requires which treatment?',
    options: ['Vitamin K', 'Digoxin immune Fab', 'Naloxone', 'Protamine sulfate'],
    answer: [1],
    rationale: 'Digoxin immune Fab binds digoxin and reverses toxicity rapidly in severe cases with arrhythmia or hyperkalemia. Vitamin K reverses warfarin, naloxone reverses opioids, and protamine reverses heparin.',
    strategy: 'Digoxin immune Fab is the antidote for severe digoxin toxicity. Also correct the potassium.' },

  { id: 'PHA-096', cat: 'pharm', sub: 'Medication Administration', type: 'mc', difficulty: 3,
    stem: 'A nurse is administering medication through a nasogastric tube and the tube becomes occluded. What should the nurse do first?',
    options: [
      'Use a small syringe to apply high pressure',
      'Attempt gentle flushing with warm water using a 30 to 60 mL syringe with a push-pause technique',
      'Insert a guidewire to clear the clog',
      'Remove the tube immediately'
    ],
    answer: [1],
    rationale: 'Warm water with gentle pulsatile pressure from a large syringe is the first-line method for clearing an occluded feeding tube. Small syringes generate rupturing pressures, guidewires perforate the tube and the gastrointestinal tract, and removal is a last resort.',
    strategy: 'Occluded feeding tube: warm water, large syringe, gentle push-pause. Never a guidewire, never carbonated drinks or juice.' },

  { id: 'PHA-097', cat: 'pharm', sub: 'Antidiabetics', type: 'mc', difficulty: 2,
    stem: 'A client is prescribed both insulin glargine and insulin lispro. Which statement about mixing is correct?',
    options: [
      'They should be mixed in the same syringe for convenience',
      'Insulin glargine must never be mixed with any other insulin and requires a separate injection',
      'They can be mixed if glargine is drawn first',
      'Mixing is allowed only in the evening'
    ],
    answer: [1],
    rationale: 'Glargine has an acidic pH that precipitates when mixed with other insulins, altering the absorption profile of both, so it is always given as a separate injection. Regular and NPH insulin, in contrast, may be mixed.',
    strategy: 'Only regular and NPH mix. Glargine and detemir are never mixed with anything.' },

  { id: 'PHA-098', cat: 'pharm', sub: 'Antihypertensives', type: 'mc', difficulty: 2,
    stem: 'A client taking an ACE inhibitor has a potassium of 5.8 mEq/L. What should the nurse do?',
    options: [
      'Administer the next dose as ordered',
      'Hold the dose, notify the provider, and review the client\'s intake of potassium supplements and salt substitutes',
      'Encourage potassium-rich foods',
      'Administer a potassium supplement'
    ],
    answer: [1],
    rationale: 'ACE inhibitors reduce aldosterone and cause potassium retention, so a level of 5.8 requires holding the dose and evaluating contributing sources. Adding more potassium in any form risks fatal arrhythmia.',
    strategy: 'ACE inhibitors, ARBs, and potassium-sparing diuretics all raise potassium. Never stack them with supplements.' },

  { id: 'PHA-099', cat: 'pharm', sub: 'Opioids', type: 'mc', difficulty: 2,
    stem: 'A nurse is preparing to waste half of a controlled substance dose. Which action is correct?',
    options: [
      'Dispose of it privately and document the waste',
      'Waste it in the presence of a second licensed witness and have both parties document the waste',
      'Save the remainder for the next dose',
      'Return it to the automated dispensing cabinet'
    ],
    answer: [1],
    rationale: 'Controlled substance waste requires a licensed witness present at the time of disposal, with both signatures documented, which protects against diversion. Saving remainders and returning opened doses to the cabinet are both prohibited.',
    strategy: 'Controlled substance waste needs a witness who actually watches. Signing without seeing is falsification.' },

  { id: 'PHA-100', cat: 'pharm', sub: 'Chemotherapy', type: 'mc', difficulty: 2,
    stem: 'A client receiving doxorubicin requires monitoring for which specific toxicity?',
    options: ['Pulmonary fibrosis', 'Cardiotoxicity with heart failure, monitored by ejection fraction and cumulative dose limits', 'Hearing loss', 'Hyperthyroidism'],
    answer: [1],
    rationale: 'Anthracyclines such as doxorubicin cause dose-dependent cardiomyopathy, so baseline and serial ejection fraction measurement and lifetime cumulative dose limits are observed. Bleomycin causes pulmonary fibrosis and cisplatin causes ototoxicity and nephrotoxicity.',
    strategy: 'Chemotherapy toxicities: doxorubicin heart, bleomycin lungs, cisplatin kidneys and ears, vincristine nerves.' },

  { id: 'PHA-101', cat: 'pharm', sub: 'Dosage Calculation', type: 'fill', difficulty: 2, unit: 'mL',
    stem: 'A provider orders 40 mg of a medication IM. The vial reads 80 mg per 2 mL. How many milliliters should the nurse administer?',
    answerText: ['1', '1 mL'],
    rationale: '40 mg divided by 80 mg times 2 mL equals 1 mL. A volume of 1 mL is appropriate for a deltoid injection; volumes over about 3 mL require the ventrogluteal site or division into two injections.',
    strategy: 'Check that your answer is a plausible injection volume. Deltoid takes about 1 mL, ventrogluteal up to 3.' },

  { id: 'PHA-102', cat: 'pharm', sub: 'IV Therapy', type: 'mc', difficulty: 2,
    stem: 'A nurse is starting a peripheral IV. Which vein selection is most appropriate for a client requiring several days of therapy?',
    options: [
      'A vein in the antecubital fossa',
      'A vein in the forearm, avoiding areas of flexion',
      'A vein in the lower extremity',
      'A vein distal to a previous infiltration site'
    ],
    answer: [1],
    rationale: 'Forearm veins away from joints allow greater catheter stability and dwell time. The antecubital fossa is a flexion point where catheters kink and infiltrate, lower extremity sites carry higher thrombophlebitis risk in adults, and cannulating distal to a previous infiltration allows fluid to leak from the earlier puncture.',
    strategy: 'Start distal and work proximal, avoid joints, and never cannulate distal to a previous failed site.' },

  { id: 'PHA-103', cat: 'pharm', sub: 'Antibiotics', type: 'mc', difficulty: 2,
    stem: 'A pregnant client asks whether her prescribed medication is safe. Which resource best guides the nurse\'s response?',
    options: [
      'Personal experience with other clients',
      'Current pregnancy and lactation labeling information and consultation with the pharmacist and prescriber',
      'Internet search results',
      'The client\'s previous pregnancy experience'
    ],
    answer: [1],
    rationale: 'Current product labeling summarizes the available evidence on fetal risk and lactation, and the pharmacist and prescriber weigh it against the maternal condition being treated. Anecdote, unvetted internet content, and prior personal experience are not adequate bases for this judgment.',
    strategy: 'For pregnancy safety questions, go to current labeling and the pharmacist, never to memory or anecdote.' },

  { id: 'PHA-104', cat: 'pharm', sub: 'Antihyperlipidemics', type: 'mc', difficulty: 2,
    stem: 'A client is prescribed cholestyramine, a bile acid sequestrant. Which teaching point is important?',
    options: [
      'Take other medications at the same time for convenience',
      'Take other medications 1 hour before or 4 to 6 hours after cholestyramine, because it binds and reduces absorption of many drugs and fat-soluble vitamins',
      'Take it on an empty stomach with no fluid',
      'It has no gastrointestinal side effects'
    ],
    answer: [1],
    rationale: 'Bile acid sequestrants bind many drugs including digoxin, warfarin, thyroid hormone, and fat-soluble vitamins in the gut, so timing separation is essential. They commonly cause constipation and bloating and are mixed with adequate fluid.',
    strategy: 'Sequestrants bind everything. Separate all other medications by hours.' },

  { id: 'PHA-105', cat: 'pharm', sub: 'Medication Administration', type: 'mc', difficulty: 2,
    stem: 'A nurse is administering a rectal suppository. Which action is correct?',
    options: [
      'Insert it just inside the anal sphincter',
      'Position the client in left lateral Sims, insert the suppository beyond the internal sphincter against the rectal wall, and encourage retention',
      'Have the client stand during insertion',
      'Insert it with the client supine'
    ],
    answer: [1],
    rationale: 'The suppository must pass the internal sphincter and contact the rectal mucosa for absorption, and left lateral positioning follows the sigmoid anatomy. Placement into stool or only inside the outer sphincter results in expulsion and no effect.',
    strategy: 'Suppositories go against the rectal wall past the internal sphincter, with the client on the left side.' },

  { id: 'PHA-106', cat: 'pharm', sub: 'Antipsychotics', type: 'mc', difficulty: 2,
    stem: 'A client on a first-generation antipsychotic should be taught which precaution?',
    options: [
      'Sun exposure poses no risk',
      'Use sun protection because photosensitivity is common, change positions slowly because of orthostatic hypotension, and report any involuntary movements',
      'Alcohol use is safe',
      'Stop the medication when symptoms resolve'
    ],
    answer: [1],
    rationale: 'Phenothiazines and related agents cause photosensitivity, alpha blockade with orthostatic hypotension, anticholinergic effects, and extrapyramidal symptoms that must be reported early. Alcohol compounds sedation, and stopping when symptoms resolve leads to relapse.',
    strategy: 'Typical antipsychotics: sun sensitivity, orthostasis, dry mouth, and movement disorders.' },

  { id: 'PHA-107', cat: 'pharm', sub: 'Anticoagulants', type: 'mc', difficulty: 2,
    stem: 'A client on warfarin is prescribed a new antibiotic. What should the nurse anticipate?',
    options: [
      'No change in monitoring is needed',
      'More frequent INR monitoring, because many antibiotics potentiate warfarin by altering gut flora and hepatic metabolism',
      'The warfarin should be stopped',
      'The INR will decrease predictably'
    ],
    answer: [1],
    rationale: 'Antibiotics reduce vitamin K-producing gut bacteria and many inhibit warfarin metabolism, commonly raising the INR into a bleeding range. Increased monitoring with dose adjustment is required rather than discontinuation.',
    strategy: 'Warfarin interacts with nearly everything. Any new medication means recheck the INR.' },

  { id: 'PHA-108', cat: 'pharm', sub: 'Antidiabetics', type: 'mc', difficulty: 2,
    stem: 'A client is prescribed a glucagon-like peptide-1 receptor agonist. Which adverse effect should the nurse teach the client to report?',
    options: [
      'Mild nausea in the first weeks',
      'Severe persistent abdominal pain radiating to the back, which may indicate pancreatitis',
      'Increased appetite',
      'Weight gain'
    ],
    answer: [1],
    rationale: 'GLP-1 agonists carry a risk of acute pancreatitis, so severe persistent abdominal pain radiating to the back requires immediate evaluation and discontinuation. Mild transient nausea is common and expected, and these agents reduce appetite and weight.',
    strategy: 'GLP-1 agonists: nausea is expected, severe abdominal pain radiating to the back is pancreatitis until proven otherwise.' },

  { id: 'PHA-109', cat: 'pharm', sub: 'IV Therapy', type: 'mc', difficulty: 3,
    stem: 'A nurse must administer two IV medications through a single lumen. What should the nurse do first?',
    options: [
      'Administer them simultaneously',
      'Verify compatibility using a compatibility reference or pharmacy, and flush between medications if they are incompatible',
      'Mix them in the same syringe',
      'Administer the more urgent one and skip the other'
    ],
    answer: [1],
    rationale: 'Incompatible medications precipitate in the line, causing catheter occlusion and potentially fatal embolism. Compatibility is verified first, and incompatible drugs are separated by an adequate flush or given through different lumens. Skipping an ordered medication is not an option.',
    strategy: 'Always check compatibility before combining anything in a line. Flush between when in doubt.' },

  { id: 'PHA-110', cat: 'pharm', sub: 'Antiemetics', type: 'mc', difficulty: 2,
    stem: 'A client receiving promethazine intravenously reports severe burning at the IV site. What should the nurse do?',
    options: [
      'Continue the infusion and offer reassurance',
      'Stop the injection immediately, as promethazine is a severe vesicant that causes tissue necrosis and gangrene with extravasation',
      'Increase the injection speed',
      'Apply heat and continue'
    ],
    answer: [1],
    rationale: 'Promethazine carries a boxed warning for severe tissue injury including gangrene requiring amputation. Burning is an immediate stop signal, and the drug is preferably given deep intramuscularly or through a large well-established vein with substantial dilution when the IV route is unavoidable.',
    strategy: 'Promethazine burning equals stop now. It causes gangrene, not just irritation.' },

  { id: 'PHA-111', cat: 'pharm', sub: 'Dosage Calculation', type: 'fill', difficulty: 2, unit: 'mL/hr',
    stem: 'A client weighing 80 kg is to receive a medication at 0.1 mcg/kg/min. The bag contains 4 mg in 250 mL. What is the pump rate in milliliters per hour? Round to the nearest tenth.',
    answerText: ['30', '30.0', '30 mL/hr'],
    rationale: 'The dose is 0.1 times 80, equal to 8 mcg per minute, which is 480 mcg per hour. The concentration is 4 mg in 250 mL, equal to 4000 mcg in 250 mL or 16 mcg per mL. 480 divided by 16 equals 30 mL per hour.',
    strategy: 'Work in consistent units: convert milligrams to micrograms and minutes to hours before dividing.' },

  { id: 'PHA-112', cat: 'pharm', sub: 'Antibiotics', type: 'mc', difficulty: 2,
    stem: 'A client reports a penicillin allergy causing hives. Which alternative antibiotic class carries the lowest cross-reactivity risk?',
    options: ['Cephalosporins', 'Macrolides such as azithromycin', 'Carbapenems', 'Penicillin derivatives'],
    answer: [1],
    rationale: 'Macrolides are structurally unrelated to beta-lactams and carry no meaningful cross-reactivity. Cephalosporins and carbapenems share the beta-lactam ring with a small cross-reactivity risk, and penicillin derivatives are contraindicated outright.',
    strategy: 'Beta-lactams cross-react with each other. Macrolides, fluoroquinolones, and vancomycin do not.' },

  { id: 'PHA-113', cat: 'pharm', sub: 'Medication Administration', type: 'mc', difficulty: 2,
    stem: 'A nurse is administering a medication to a client who says, "I already took that pill this morning." What should the nurse do?',
    options: [
      'Administer the dose as scheduled',
      'Hold the medication, verify the administration record and the order, and clarify before administering',
      'Give half the dose',
      'Ask the client to take it anyway'
    ],
    answer: [1],
    rationale: 'A client report of a prior dose may reveal a documentation gap or a duplicate order and must be verified before administration. Proceeding, partial dosing, or pressuring the client all risk a double dose.',
    strategy: 'When the client contradicts your record, stop and verify. They are often right.' },

  { id: 'PHA-114', cat: 'pharm', sub: 'Blood Products', type: 'mc', difficulty: 2,
    stem: 'A client with a hemoglobin of 6.8 g/dL is to receive packed red blood cells. What is the expected rise in hemoglobin per unit in an adult?',
    options: ['About 0.1 g/dL', 'About 1 g/dL', 'About 3 g/dL', 'About 5 g/dL'],
    answer: [1],
    rationale: 'Each unit of packed red blood cells typically raises hemoglobin by about 1 g/dL and hematocrit by about 3 percent in an adult without ongoing bleeding. A post-transfusion count that fails to rise as expected suggests continued blood loss or hemolysis.',
    strategy: 'One unit equals about 1 gram of hemoglobin and 3 points of hematocrit.' },

  { id: 'PHA-115', cat: 'pharm', sub: 'Antiepileptics', type: 'mc', difficulty: 2,
    stem: 'A client taking valproic acid requires monitoring for which adverse effect?',
    options: ['Hearing loss', 'Hepatotoxicity, pancreatitis, and thrombocytopenia', 'Hyperkalemia', 'Hypertension'],
    answer: [1],
    rationale: 'Valproate carries boxed warnings for hepatotoxicity and pancreatitis and also causes thrombocytopenia and hyperammonemia, so liver enzymes, ammonia, and platelet counts are monitored. It is also highly teratogenic and contraindicated in pregnancy where alternatives exist.',
    strategy: 'Valproate: liver, pancreas, platelets, and never in pregnancy if avoidable.' },

  { id: 'PHA-116', cat: 'pharm', sub: 'Antihypertensives', type: 'mc', difficulty: 2,
    stem: 'A client taking clonidine asks about missing doses. What should the nurse emphasize?',
    options: [
      'Missing doses has no consequence',
      'Do not miss doses or stop abruptly, because clonidine withdrawal causes severe rebound hypertension, tachycardia, and agitation',
      'Double the next dose if one is missed',
      'Stop it if the blood pressure normalizes'
    ],
    answer: [1],
    rationale: 'Abrupt clonidine withdrawal produces a catecholamine surge with dangerous rebound hypertension, so adherence is critical and discontinuation is tapered. Doubling doses causes profound hypotension and sedation.',
    strategy: 'Clonidine and beta blockers both cause rebound hypertension on abrupt withdrawal.' },

  { id: 'PHA-117', cat: 'pharm', sub: 'Antifungals', type: 'mc', difficulty: 3,
    stem: 'A client receiving IV amphotericin B develops fever, chills, and rigors during infusion. What should the nurse recognize?',
    options: [
      'A true allergic reaction requiring permanent discontinuation',
      'A common infusion-related reaction managed with premedication, slower infusion, and close monitoring of renal function and electrolytes',
      'A sign the dose is too low',
      'An expected effect that requires no monitoring'
    ],
    answer: [1],
    rationale: 'Amphotericin B commonly causes infusion-related fever, chills, and rigors managed with premedication and slower administration. It is also markedly nephrotoxic and causes potassium and magnesium wasting, so renal function and electrolytes require close monitoring.',
    strategy: 'Amphotericin B earns its nickname: shake and bake reactions plus serious nephrotoxicity.' },

  { id: 'PHA-118', cat: 'pharm', sub: 'Opioids', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching a client and family about take-home naloxone. Which instruction is correct?',
    options: [
      'Administer naloxone only if the person stops breathing entirely',
      'Give naloxone if the person is unresponsive with slow or absent breathing, call emergency services, and be prepared to give a second dose because naloxone wears off before many opioids do',
      'One dose is always sufficient',
      'Naloxone should be given orally'
    ],
    answer: [1],
    rationale: 'Naloxone is given at the point of unresponsiveness with respiratory depression rather than waiting for apnea, and its duration is shorter than that of many opioids, so re-sedation is common and emergency services must be involved. It is given intranasally or by injection, not orally.',
    strategy: 'Naloxone wears off first. Always call for help and expect to repeat the dose.' },

  { id: 'PHA-119', cat: 'pharm', sub: 'Antibiotics', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching a client prescribed metronidazole. Which instruction is essential?',
    options: [
      'Alcohol may be consumed in moderation',
      'Avoid all alcohol during therapy and for at least 3 days afterward, because a disulfiram-like reaction with severe nausea, vomiting, flushing, and tachycardia can occur',
      'Take it with an antacid',
      'It may turn urine bright blue'
    ],
    answer: [1],
    rationale: 'Metronidazole inhibits aldehyde dehydrogenase, producing a disulfiram-like reaction with alcohol including alcohol in mouthwash and cough preparations. It commonly produces a metallic taste and may darken urine.',
    strategy: 'Metronidazole plus alcohol equals a disulfiram reaction. Avoid alcohol during and for 3 days after.' },

  { id: 'PHA-120', cat: 'pharm', sub: 'Vitamins and Minerals', type: 'mc', difficulty: 2,
    stem: 'A client is prescribed ferrous sulfate. Which teaching point is correct?',
    options: [
      'Take it with milk to reduce stomach upset',
      'Take it on an empty stomach with vitamin C if tolerated, expect dark stools, and increase fiber and fluids to prevent constipation',
      'Stools should remain normal in color',
      'Antacids improve absorption'
    ],
    answer: [1],
    rationale: 'Iron absorbs best on an empty stomach and with ascorbic acid, dark green to black stools are expected and harmless, and constipation is common. Milk and antacids substantially reduce absorption.',
    strategy: 'Iron: empty stomach, vitamin C helps, black stools are normal, constipation is expected.' }
  ,
  { id: 'PHA-121', cat: 'pharm', sub: 'Medication Administration', type: 'sata', difficulty: 1,
    stem: 'Which actions are part of the rights of medication administration? Select all that apply.',
    options: ['Right client', 'Right drug', 'Right dose', 'Right brand name', 'Right route and time', 'Right documentation and right to refuse'],
    answer: [0, 1, 2, 4, 5],
    rationale: 'The classic five rights are client, drug, dose, route, and time, expanded to include documentation, reason, response, and the client\'s right to refuse. Brand name is not a right; generic equivalents are routinely substituted.',
    strategy: 'The expanded rights add documentation, indication, response, and refusal to the classic five.' },

  { id: 'PHA-122', cat: 'pharm', sub: 'Antidiabetics', type: 'mc', difficulty: 3,
    stem: 'A client taking an SGLT2 inhibitor presents with nausea, abdominal pain, and a blood glucose of 180 mg/dL with ketones present and a low serum bicarbonate. What should the nurse suspect?',
    options: [
      'Simple hyperglycemia',
      'Euglycemic diabetic ketoacidosis, which SGLT2 inhibitors can cause at near-normal glucose levels',
      'Hypoglycemia',
      'Urinary tract infection only'
    ],
    answer: [1],
    rationale: 'SGLT2 inhibitors can precipitate ketoacidosis with only modestly elevated glucose because urinary glucose excretion masks the usual hyperglycemia, which delays recognition. Ketones and acidosis establish the diagnosis regardless of glucose level. These agents also increase genital and urinary infections.',
    strategy: 'Ketoacidosis with a near-normal glucose points to an SGLT2 inhibitor. Do not rule out DKA on glucose alone.' },

  { id: 'PHA-123', cat: 'pharm', sub: 'IV Therapy', type: 'mc', difficulty: 2,
    stem: 'A nurse is calculating intake for a client with a maintenance IV at 75 mL per hour plus two 50 mL antibiotic piggybacks. What is the 24-hour IV intake?',
    options: ['1800 mL', '1900 mL', '2000 mL', '1700 mL'],
    answer: [1],
    rationale: '75 mL per hour times 24 hours equals 1800 mL, plus two 50 mL piggybacks equals 100 mL, for a total of 1900 mL. Piggyback volumes and medication diluents are frequently omitted from intake totals, which distorts fluid balance in clients with heart or kidney failure.',
    strategy: 'Count the piggybacks and flushes. They add up quickly in a fluid-restricted client.' },

  { id: 'PHA-124', cat: 'pharm', sub: 'Antibiotics', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching a client about probiotics during antibiotic therapy. Which statement is appropriate?',
    options: [
      'Probiotics should be taken at exactly the same time as the antibiotic',
      'Probiotics may reduce antibiotic-associated diarrhea and are generally taken a few hours apart from the antibiotic dose, but should be discussed with the provider in immunocompromised clients',
      'Probiotics eliminate the need to finish the antibiotic',
      'Probiotics are unsafe for everyone'
    ],
    answer: [1],
    rationale: 'Probiotics have modest evidence for reducing antibiotic-associated diarrhea and are spaced from antibiotic doses. They carry a risk of bacteremia and fungemia in severely immunocompromised or critically ill clients, so provider input matters. They never substitute for completing the antibiotic course.',
    strategy: 'Probiotics are generally safe but not for the severely immunocompromised or those with central lines.' },

  { id: 'PHA-125', cat: 'pharm', sub: 'Anticoagulants', type: 'mc', difficulty: 2,
    stem: 'A client on warfarin has an INR of 6.5 with no active bleeding. What should the nurse anticipate?',
    options: [
      'Continuing the current dose',
      'Holding warfarin and possible administration of oral vitamin K, with repeat INR monitoring',
      'Increasing the warfarin dose',
      'Administering protamine sulfate'
    ],
    answer: [1],
    rationale: 'A markedly elevated INR without bleeding is managed by holding warfarin and, depending on the level and bleeding risk, giving oral vitamin K with close INR follow-up. Protamine reverses heparin, not warfarin, and prothrombin complex concentrate is reserved for serious bleeding.',
    strategy: 'High INR without bleeding: hold and possibly vitamin K. High INR with major bleeding: prothrombin complex concentrate plus vitamin K.' },

  { id: 'PHA-126', cat: 'pharm', sub: 'Medication Administration', type: 'mc', difficulty: 2,
    stem: 'A nurse is administering a medication through a metered-dose inhaler with a spacer. Which instruction is correct?',
    options: [
      'Inhale rapidly and forcefully',
      'Exhale fully, seal the lips around the spacer, actuate once, and inhale slowly and deeply, then hold the breath for about 10 seconds',
      'Take multiple puffs into the spacer before inhaling',
      'Inhale through the nose'
    ],
    answer: [1],
    rationale: 'Slow deep inhalation with a breath hold maximizes distal deposition, and one actuation at a time prevents particles from settling in the chamber. Rapid inhalation deposits drug in the oropharynx, and nasal breathing bypasses the airway entirely.',
    strategy: 'Inhalers: exhale first, actuate once, inhale slowly, hold 10 seconds, wait a minute between puffs.' },

  { id: 'PHA-127', cat: 'pharm', sub: 'Antihypertensives', type: 'mc', difficulty: 2,
    stem: 'A client is prescribed a nitroprusside infusion for hypertensive emergency. Which monitoring is essential?',
    options: [
      'Blood pressure every 4 hours',
      'Continuous arterial blood pressure monitoring, protection of the solution from light, and observation for thiocyanate and cyanide toxicity with prolonged use',
      'Daily weights only',
      'No special monitoring is needed'
    ],
    answer: [1],
    rationale: 'Nitroprusside acts within seconds and can cause precipitous hypotension, so continuous arterial monitoring is required. It degrades in light and metabolizes to cyanide and thiocyanate, which accumulate with high doses, prolonged infusion, or renal impairment.',
    strategy: 'Nitroprusside: light-protected, arterial line, and watch for cyanide toxicity with prolonged use.' },

  { id: 'PHA-128', cat: 'pharm', sub: 'Antiemetics', type: 'mc', difficulty: 2,
    stem: 'A client receiving highly emetogenic chemotherapy asks when to take the prescribed antiemetic. What should the nurse teach?',
    options: [
      'Take it only after vomiting begins',
      'Take it before treatment and on a scheduled basis afterward, because preventing nausea is far more effective than treating it once established',
      'Take it only if nausea lasts more than a day',
      'Antiemetics are not needed with chemotherapy'
    ],
    answer: [1],
    rationale: 'Scheduled prophylactic dosing prevents both acute and delayed nausea and reduces anticipatory nausea in later cycles, whereas rescue-only dosing allows established nausea that is much harder to control.',
    strategy: 'Prevent nausea rather than chase it. The same principle applies to pain.' },

  { id: 'PHA-129', cat: 'pharm', sub: 'Dosage Calculation', type: 'fill', difficulty: 2, unit: 'mL',
    stem: 'A client is prescribed 1.5 g of a medication. The vial is labeled 500 mg per 2 mL. How many milliliters should the nurse withdraw?',
    answerText: ['6', '6 mL'],
    rationale: '1.5 g equals 1500 mg. 1500 divided by 500 equals 3, multiplied by 2 mL equals 6 mL.',
    strategy: 'Convert units first, then apply desired over have times volume.' },

  { id: 'PHA-130', cat: 'pharm', sub: 'Central Access', type: 'mc', difficulty: 2,
    stem: 'A nurse is removing a central venous catheter. Which action prevents air embolism?',
    options: [
      'Have the client sit upright and breathe normally',
      'Place the client supine or in Trendelenburg, have the client perform the Valsalva maneuver during withdrawal, and apply an occlusive dressing over the site',
      'Withdraw the catheter quickly while the client inhales',
      'Leave the site open to air'
    ],
    answer: [1],
    rationale: 'Positioning below the level of the heart with a Valsalva maneuver raises intrathoracic pressure and prevents air entrainment during removal, and an occlusive dressing seals the tract afterward. Upright positioning and withdrawal during inspiration both create negative intrathoracic pressure that draws air in.',
    strategy: 'Central line removal: supine or head down, Valsalva during withdrawal, occlusive dressing after.' },

  { id: 'PHA-131', cat: 'pharm', sub: 'Antibiotics', type: 'mc', difficulty: 2,
    stem: 'A client asks why a culture was obtained before antibiotics were started. What is the nurse\'s best explanation?',
    options: [
      '"It is a billing requirement."',
      '"Antibiotics can suppress bacterial growth and make the culture falsely negative, so obtaining it first lets us identify the organism and target treatment."',
      '"The culture has no effect on treatment."',
      '"Cultures are only obtained after antibiotics fail."'
    ],
    answer: [1],
    rationale: 'Even a single antibiotic dose can render cultures negative, obscuring the organism and its susceptibilities and preventing narrowing from broad-spectrum therapy. In sepsis, cultures are obtained first but antibiotic administration is not delayed beyond the first hour to get them.',
    strategy: 'Cultures before antibiotics, but never let culture collection delay antibiotics in sepsis.' },

  { id: 'PHA-132', cat: 'pharm', sub: 'Opioids', type: 'mc', difficulty: 2,
    stem: 'A client with cancer pain is receiving scheduled long-acting oxycodone and reports pain spikes between doses. What should the nurse anticipate?',
    options: [
      'Discontinuing the long-acting medication',
      'Adding a short-acting opioid for breakthrough pain, typically about 10 to 20 percent of the total daily dose',
      'Increasing the interval between long-acting doses',
      'Substituting acetaminophen alone'
    ],
    answer: [1],
    rationale: 'Effective cancer pain management pairs a scheduled long-acting agent for baseline pain with a short-acting agent for breakthrough episodes, dosed as a percentage of the daily total. Frequent breakthrough use signals that the baseline dose needs increasing.',
    strategy: 'Chronic pain regimens need both: a long-acting floor and a short-acting rescue.' },

  { id: 'PHA-133', cat: 'pharm', sub: 'Antihypertensives', type: 'mc', difficulty: 2,
    stem: 'A client taking an alpha blocker for benign prostatic hyperplasia should be warned about which effect?',
    options: [
      'Hypertension',
      'First-dose orthostatic hypotension and syncope, so the initial dose is often taken at bedtime',
      'Hyperglycemia',
      'Urinary retention'
    ],
    answer: [1],
    rationale: 'Alpha-1 blockers such as tamsulosin and doxazosin cause vasodilation with pronounced first-dose hypotension and syncope, mitigated by bedtime dosing and slow position changes. They relieve rather than cause urinary retention.',
    strategy: 'Alpha blockers: first-dose syncope. Take the first dose at bedtime and rise slowly.' },

  { id: 'PHA-134', cat: 'pharm', sub: 'Vitamins and Minerals', type: 'mc', difficulty: 2,
    stem: 'A client is prescribed potassium chloride tablets. Which instruction is correct?',
    options: [
      'Crush the extended-release tablet if swallowing is difficult',
      'Take with a full glass of water and food to reduce gastrointestinal irritation, and do not crush extended-release forms',
      'Take on an empty stomach',
      'Lie down immediately after taking it'
    ],
    answer: [1],
    rationale: 'Oral potassium is highly irritating to the gastrointestinal mucosa and can cause ulceration, so it is taken with food and generous fluid and the client remains upright. Crushing an extended-release form delivers a caustic bolus.',
    strategy: 'Oral potassium: food, full glass of water, stay upright, never crush the extended-release form.' },

  { id: 'PHA-135', cat: 'pharm', sub: 'Antipsychotics', type: 'mc', difficulty: 2,
    stem: 'A client with dementia is prescribed an antipsychotic for agitation. What should the nurse understand?',
    options: [
      'Antipsychotics are first-line treatment for dementia-related agitation',
      'Antipsychotics carry a boxed warning for increased mortality in older adults with dementia, so non-pharmacological approaches are tried first and use is limited and reassessed',
      'These medications improve cognition in dementia',
      'There is no risk associated with their use in this population'
    ],
    answer: [1],
    rationale: 'Both typical and atypical antipsychotics increase mortality from cardiovascular events and infection in older adults with dementia-related psychosis. Behavioral and environmental interventions come first, and when medication is used it is at the lowest effective dose for the shortest time with regular reassessment.',
    strategy: 'Antipsychotics in dementia carry a mortality boxed warning. Behavioral interventions come first.' },

  { id: 'PHA-136', cat: 'pharm', sub: 'IV Therapy', type: 'mc', difficulty: 2,
    stem: 'A nurse is preparing an IV piggyback antibiotic. Where should the secondary bag be hung relative to the primary bag?',
    options: [
      'At the same level as the primary bag',
      'Higher than the primary bag, so the greater pressure allows the secondary solution to infuse first',
      'Lower than the primary bag',
      'The position does not matter with a pump'
    ],
    answer: [1],
    rationale: 'In a gravity piggyback setup the secondary bag hangs higher so its greater hydrostatic pressure closes the back-check valve and allows it to infuse before the primary resumes. Even with a pump, correct hanging supports proper sequencing on many systems.',
    strategy: 'Piggyback hangs higher than the primary. That is what makes it run first.' },

  { id: 'PHA-137', cat: 'pharm', sub: 'Antidotes', type: 'mc', difficulty: 2,
    stem: 'A client with organophosphate poisoning presents with excessive salivation, bradycardia, and miosis. Which antidote should the nurse anticipate?',
    options: ['Naloxone', 'Atropine and pralidoxime', 'Flumazenil', 'Acetylcysteine'],
    answer: [1],
    rationale: 'Organophosphates inhibit acetylcholinesterase, producing a cholinergic crisis treated with atropine to block muscarinic effects and pralidoxime to reactivate the enzyme. The other agents reverse entirely different toxins.',
    strategy: 'Cholinergic crisis mnemonic SLUDGE: salivation, lacrimation, urination, defecation, gastrointestinal upset, emesis. Treat with atropine.' },

  { id: 'PHA-138', cat: 'pharm', sub: 'Antidiabetics', type: 'mc', difficulty: 2,
    stem: 'A hospitalized client with diabetes is NPO for a procedure. Which action regarding the morning insulin is most appropriate?',
    options: [
      'Give the full usual dose of both basal and mealtime insulin',
      'Clarify orders with the provider, as basal insulin is often continued at a reduced dose while mealtime insulin is held, and monitor glucose closely',
      'Hold all insulin including basal in a client with type 1 diabetes',
      'Double the basal dose'
    ],
    answer: [1],
    rationale: 'Mealtime insulin is generally held when the client is not eating while basal insulin is continued, often at a reduced dose, because clients with type 1 diabetes develop ketoacidosis without any basal insulin. Orders are clarified rather than assumed, and glucose is monitored frequently.',
    strategy: 'Never hold all insulin in type 1 diabetes, even when NPO. Basal continues; mealtime insulin does not.' },

  { id: 'PHA-139', cat: 'pharm', sub: 'Anticoagulants', type: 'mc', difficulty: 2,
    stem: 'A client is receiving enoxaparin and requires an epidural catheter removal. What is the primary concern?',
    options: [
      'Infection at the site',
      'Spinal or epidural hematoma, so specific timing intervals between anticoagulant dosing and catheter manipulation must be observed',
      'Excessive pain',
      'Catheter migration'
    ],
    answer: [1],
    rationale: 'Low-molecular-weight heparins carry a boxed warning for spinal and epidural hematoma that can cause permanent paralysis, so strict timing intervals govern catheter placement and removal, and neurological status is monitored for new back pain, numbness, or weakness.',
    strategy: 'Anticoagulants plus neuraxial catheters equals hematoma risk. Watch for new back pain or leg weakness.' },

  { id: 'PHA-140', cat: 'pharm', sub: 'Medication Administration', type: 'mc', difficulty: 2,
    stem: 'A nurse is giving a subcutaneous injection to a thin client. Which adjustment is appropriate?',
    options: [
      'Use a 90-degree angle with a 1.5-inch needle',
      'Pinch the skin and use a 45-degree angle with a short needle to avoid entering muscle',
      'Use the Z-track technique',
      'Inject into the deltoid'
    ],
    answer: [1],
    rationale: 'In a client with little subcutaneous tissue, pinching the skin and using a shallower angle with a short needle keeps the injection in subcutaneous tissue rather than muscle, which would alter absorption. Z-track is an intramuscular technique.',
    strategy: 'Subcutaneous angle depends on tissue: 90 degrees if you can pinch an inch, 45 degrees if you cannot.' },

  { id: 'PHA-141', cat: 'pharm', sub: 'Respiratory Drugs', type: 'mc', difficulty: 2,
    stem: 'A client asks how to know when a metered-dose inhaler is empty. What should the nurse teach?',
    options: [
      'Float the canister in water to check',
      'Use the dose counter on the device, or track the number of doses used against the labeled total',
      'Shake it and listen for liquid',
      'Continue using it until no spray is visible'
    ],
    answer: [1],
    rationale: 'Dose counters or manual dose tracking are the only reliable methods. Floating tests are inaccurate and can damage the valve, and a canister continues to spray propellant after the medication is exhausted, which is particularly dangerous with a rescue inhaler.',
    strategy: 'An empty inhaler still sprays. Count doses or use the counter, never the float test.' },

  { id: 'PHA-142', cat: 'pharm', sub: 'Dosage Calculation', type: 'fill', difficulty: 2, unit: 'kg',
    stem: 'A client weighs 176 pounds. What is the client\'s weight in kilograms? Round to the nearest tenth.',
    answerText: ['80', '80.0', '80 kg'],
    rationale: '176 pounds divided by 2.2 pounds per kilogram equals 80 kg. Weight-based dosing always uses kilograms, and pound-to-kilogram errors are a documented source of serious overdoses.',
    strategy: 'Divide pounds by 2.2 to get kilograms. Never dose by pounds.' },

  { id: 'PHA-143', cat: 'pharm', sub: 'Antibiotics', type: 'mc', difficulty: 2,
    stem: 'A client receiving an antibiotic develops a widespread rash with blistering, mucosal involvement, and skin sloughing. What should the nurse do?',
    options: [
      'Apply topical steroid and continue the antibiotic',
      'Stop the antibiotic immediately and notify the provider urgently, as this may be Stevens-Johnson syndrome or toxic epidermal necrolysis requiring specialized burn-level care',
      'Give an antihistamine and reassess tomorrow',
      'Reduce the dose'
    ],
    answer: [1],
    rationale: 'Mucosal involvement with blistering and skin detachment characterizes Stevens-Johnson syndrome and toxic epidermal necrolysis, which carry substantial mortality and require immediate withdrawal of the causative drug and transfer to specialized care. Continuing at any dose is life-threatening.',
    strategy: 'Rash plus mucosal involvement plus blistering equals stop the drug now. Simple rashes do not involve mucous membranes.' },

  { id: 'PHA-144', cat: 'pharm', sub: 'Antiemetics', type: 'mc', difficulty: 2,
    stem: 'A client with vertigo is prescribed meclizine. Which teaching point is appropriate?',
    options: [
      'It has no sedating effect',
      'It commonly causes drowsiness and dry mouth, so the client should avoid driving until they know how it affects them',
      'It should be taken with alcohol for better effect',
      'It cures the underlying cause of vertigo'
    ],
    answer: [1],
    rationale: 'Meclizine is an antihistamine with sedating and anticholinergic effects, so driving precautions apply and alcohol compounds sedation. It suppresses vestibular symptoms without treating the underlying cause.',
    strategy: 'Any sedating antihistamine gets a driving warning and an alcohol warning.' },

  { id: 'PHA-145', cat: 'pharm', sub: 'Corticosteroids', type: 'mc', difficulty: 3,
    stem: 'A client using an inhaled corticosteroid develops white patches in the mouth. What should the nurse recognize and teach?',
    options: [
      'A normal finding requiring no action',
      'Oral candidiasis; teach the client to rinse and spit after every use and use a spacer, and notify the provider for antifungal treatment',
      'The medication should be permanently stopped',
      'The client should increase the dose'
    ],
    answer: [1],
    rationale: 'Local immunosuppression from inhaled corticosteroid deposition in the oropharynx causes candidiasis, which is prevented by rinsing and spitting after each use and by spacer use. It is treated with an antifungal rather than by stopping essential controller therapy.',
    strategy: 'Rinse and spit after every inhaled steroid dose. Use a spacer to reduce oral deposition.' },

  { id: 'PHA-146', cat: 'pharm', sub: 'Opioids', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client receiving hydromorphone. Which statement about its potency is accurate?',
    options: [
      'It is equipotent with morphine milligram for milligram',
      'It is substantially more potent than morphine, so doses are much smaller and confusion between the two has caused fatal overdoses',
      'It is much weaker than morphine',
      'Potency comparisons do not matter clinically'
    ],
    answer: [1],
    rationale: 'Hydromorphone is roughly five to seven times more potent than morphine by the parenteral route, and substituting one for the other milligram for milligram has caused fatal respiratory depression. Both appear on high-alert medication lists.',
    strategy: 'Hydromorphone and morphine are not interchangeable milligram for milligram. Always check the equianalgesic table.' },

  { id: 'PHA-147', cat: 'pharm', sub: 'Antihypertensives', type: 'mc', difficulty: 2,
    stem: 'A client on multiple antihypertensives reports dizziness when standing. What should the nurse teach?',
    options: [
      'Stand up quickly to get past the dizziness',
      'Change positions slowly, sit at the bedside before standing, stay hydrated, and report persistent dizziness or falls to the provider',
      'Stop all blood pressure medications',
      'Restrict fluids'
    ],
    answer: [1],
    rationale: 'Orthostatic hypotension from combined antihypertensives is managed with graded position changes, adequate hydration, and provider review of the regimen. Rapid standing precipitates syncope, stopping medications risks rebound hypertension, and fluid restriction worsens orthostasis.',
    strategy: 'Orthostatic teaching is universal for antihypertensives: rise slowly, dangle first, stay hydrated.' },

  { id: 'PHA-148', cat: 'pharm', sub: 'Immunosuppressants', type: 'mc', difficulty: 2,
    stem: 'A client is starting a tumor necrosis factor inhibitor for rheumatoid arthritis. Which screening is required before initiation?',
    options: [
      'A hearing test',
      'Screening for latent tuberculosis and hepatitis B, because these agents can reactivate dormant infection',
      'A bone density scan only',
      'No screening is needed'
    ],
    answer: [1],
    rationale: 'TNF inhibitors substantially increase the risk of reactivating latent tuberculosis and hepatitis B, so screening before initiation is mandatory. Clients also need education about infection risk and avoidance of live vaccines.',
    strategy: 'Biologics: screen for latent TB and hepatitis B first, no live vaccines, and treat any fever seriously.' },

  { id: 'PHA-149', cat: 'pharm', sub: 'Dosage Calculation', type: 'fill', difficulty: 2, unit: 'mL',
    stem: 'A provider orders an infusion to deliver 2 mg over 10 minutes. The medication is supplied as 10 mg in 100 mL. How many milliliters will the client receive?',
    answerText: ['20', '20 mL'],
    rationale: 'The concentration is 10 mg in 100 mL, or 0.1 mg per mL. 2 mg divided by 0.1 mg per mL equals 20 mL.',
    strategy: 'Find the concentration, then divide the ordered dose by it. The time frame sets the pump rate, not the volume.' },

  { id: 'PHA-150', cat: 'pharm', sub: 'Medication Administration', type: 'mc', difficulty: 2,
    stem: 'A nurse discovers that a medication was ordered for a client with a documented allergy to that drug class. What should the nurse do?',
    options: [
      'Administer it and monitor closely',
      'Withhold the medication, notify the prescriber about the documented allergy, and document the communication',
      'Administer a reduced dose',
      'Ask another nurse to administer it'
    ],
    answer: [1],
    rationale: 'A nurse who administers a drug to which the client is documented allergic shares liability for the resulting harm. The medication is withheld, the prescriber notified, and the exchange documented. Reduced dosing does not prevent anaphylaxis, and transferring the task does not transfer the responsibility.',
    strategy: 'A documented allergy stops the administration every time. Clarify with the prescriber.' },

  { id: 'PHA-151', cat: 'pharm', sub: 'Blood Products', type: 'mc', difficulty: 2,
    stem: 'A client is to receive platelets. Which statement is accurate?',
    options: [
      'Platelets must be ABO identical in all cases',
      'Platelets are infused rapidly over about 15 to 30 minutes per unit and should not be refrigerated',
      'Platelets are infused slowly over 4 hours',
      'Platelets require a special blood-warming device'
    ],
    answer: [1],
    rationale: 'Platelets are stored at room temperature with agitation and infused rapidly because refrigeration and slow administration impair function. ABO compatibility is preferred but not always required for platelets.',
    strategy: 'Red cells go slow and cold, platelets go fast and room temperature.' },

  { id: 'PHA-152', cat: 'pharm', sub: 'Antibiotics', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching a client about nitrofurantoin for a urinary tract infection. Which instruction is correct?',
    options: [
      'Take it on an empty stomach',
      'Take it with food to improve absorption and reduce gastrointestinal upset, and expect the urine to turn brown or dark yellow',
      'Stop it once symptoms resolve',
      'Avoid all fluids while taking it'
    ],
    answer: [1],
    rationale: 'Food enhances nitrofurantoin absorption and reduces nausea, and harmless brown discoloration of urine is expected. The full course is completed, and adequate fluid intake supports urinary tract clearance.',
    strategy: 'Nitrofurantoin: take with food, expect brown urine, avoid in significant renal impairment.' },

  { id: 'PHA-153', cat: 'pharm', sub: 'IV Therapy', type: 'mc', difficulty: 2,
    stem: 'A nurse notes that a client\'s peripheral IV site has streaking erythema extending up the arm with a palpable cord and the client has a fever. What is the priority action?',
    options: [
      'Slow the infusion and continue',
      'Discontinue the catheter immediately, notify the provider, obtain cultures as ordered, and monitor for bloodstream infection',
      'Apply a cold compress and continue the infusion',
      'Increase the infusion rate to flush the vein'
    ],
    answer: [1],
    rationale: 'Ascending erythema with a palpable cord and fever indicates suppurative thrombophlebitis, a source of bloodstream infection requiring immediate catheter removal, culture, and often systemic antibiotics. Continuing the infusion through an infected vein disseminates organisms.',
    strategy: 'Streaking plus fever means infection, not simple irritation. Remove the line and culture.' },

  { id: 'PHA-154', cat: 'pharm', sub: 'Antihypertensives', type: 'mc', difficulty: 2,
    stem: 'A pregnant client with chronic hypertension is taking lisinopril. What should the nurse anticipate?',
    options: [
      'Continuing lisinopril throughout pregnancy',
      'Discontinuing the ACE inhibitor and switching to a pregnancy-appropriate agent such as labetalol, methyldopa, or nifedipine',
      'Increasing the lisinopril dose',
      'Stopping all antihypertensive therapy'
    ],
    answer: [1],
    rationale: 'ACE inhibitors and angiotensin receptor blockers are fetotoxic, causing renal failure, oligohydramnios, and skull defects, and must be stopped when pregnancy is recognized. Labetalol, methyldopa, and nifedipine are established alternatives. Untreated hypertension is also dangerous, so therapy is switched rather than stopped.',
    strategy: 'ACE inhibitors and ARBs are contraindicated in pregnancy. Labetalol, methyldopa, and nifedipine are the alternatives.' },

  { id: 'PHA-155', cat: 'pharm', sub: 'Anticonvulsants', type: 'mc', difficulty: 2,
    stem: 'A client taking carbamazepine requires which routine monitoring?',
    options: [
      'Serum glucose only',
      'Complete blood count for agranulocytosis and aplastic anemia, serum sodium for hyponatremia, and liver enzymes',
      'Thyroid function only',
      'No monitoring is required'
    ],
    answer: [1],
    rationale: 'Carbamazepine carries boxed warnings for serious blood dyscrasias and for severe cutaneous reactions in clients with the HLA-B*1502 allele, and it commonly causes hyponatremia through a syndrome of inappropriate antidiuretic hormone effect. It is also a strong enzyme inducer with many interactions.',
    strategy: 'Carbamazepine: blood counts, sodium, and liver. Also a major enzyme inducer.' },

  { id: 'PHA-156', cat: 'pharm', sub: 'Medication Administration', type: 'mc', difficulty: 2,
    stem: 'A nurse is preparing an insulin dose and the client says the usual dose is 10 units, but the order reads 100 units. What should the nurse do?',
    options: [
      'Administer 100 units as ordered',
      'Withhold the dose and contact the prescriber to verify, since this pattern suggests a transcription error from an ambiguous unit abbreviation',
      'Administer 10 units based on the client\'s report',
      'Ask another nurse to decide'
    ],
    answer: [1],
    rationale: 'A tenfold discrepancy between the order and the client\'s known dose is a classic signature of a "U" misread as a zero, and insulin overdoses of this magnitude are fatal. The order is verified with the prescriber rather than either administered or adjusted by the nurse.',
    strategy: 'Tenfold discrepancies are almost always errors. Verify with the prescriber, never split the difference.' },

  { id: 'PHA-157', cat: 'pharm', sub: 'Antidiabetics', type: 'mc', difficulty: 2,
    stem: 'A client asks how to store insulin. What should the nurse teach?',
    options: [
      'All insulin must be frozen',
      'Unopened vials are refrigerated, the vial in use may be kept at room temperature for the manufacturer-specified period, and insulin should never be frozen or left in direct heat or sunlight',
      'Insulin can be stored in a car in any weather',
      'Cloudy appearance in a clear insulin is normal'
    ],
    answer: [1],
    rationale: 'Refrigeration preserves unopened insulin while room temperature storage of the in-use vial reduces injection discomfort. Freezing and extreme heat both denature insulin, and cloudiness or clumping in a normally clear insulin means it must be discarded.',
    strategy: 'Insulin: refrigerate spares, room temperature for the one in use, never freeze, discard anything that looks wrong.' },

  { id: 'PHA-158', cat: 'pharm', sub: 'Opioids', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client receiving continuous IV opioid infusion. Which monitoring parameter detects respiratory depression earliest?',
    options: [
      'Respiratory rate alone',
      'A validated sedation scale combined with continuous capnography or pulse oximetry, since rising sedation and rising carbon dioxide precede a falling respiratory rate',
      'Blood pressure',
      'Heart rate'
    ],
    answer: [1],
    rationale: 'Respiratory rate is a late and insensitive indicator because clients often maintain a normal rate with shallow ineffective breathing. Sedation level rises first, and capnography detects hypoventilation before oxygen saturation falls, particularly in clients receiving supplemental oxygen.',
    strategy: 'Sedation rises before respirations fall, and capnography beats pulse oximetry when the client is on oxygen.' },

  { id: 'PHA-159', cat: 'pharm', sub: 'Antibiotics', type: 'mc', difficulty: 2,
    stem: 'A nurse is administering an antibiotic ordered every 8 hours. The client asks why the timing must be exact. What is the best explanation?',
    options: [
      '"It is a hospital scheduling convenience."',
      '"Consistent spacing keeps the drug concentration above the level needed to kill the bacteria; large gaps let the organisms recover and can promote resistance."',
      '"The timing does not really matter."',
      '"It only matters for the first dose."'
    ],
    answer: [1],
    rationale: 'Maintaining concentrations above the minimum inhibitory concentration throughout the interval determines efficacy for time-dependent antibiotics, and irregular dosing produces subtherapeutic troughs that permit regrowth and select for resistance.',
    strategy: 'Antibiotic timing is pharmacologic, not administrative. Even spacing maintains therapeutic levels.' },

  { id: 'PHA-160', cat: 'pharm', sub: 'Medication Administration', type: 'mc', difficulty: 2,
    stem: 'A client refuses a prescribed medication. What should the nurse do?',
    options: [
      'Administer it covertly in food',
      'Explore the reason for the refusal, provide education about the medication\'s purpose, honor the refusal, document it, and notify the provider',
      'Document only that the client is noncompliant',
      'Insist the client take it'
    ],
    answer: [1],
    rationale: 'A competent client may refuse any medication. Exploring the reason often uncovers a manageable barrier such as a side effect, and the refusal is documented and communicated so the plan can be adjusted. Covert administration is battery, judgmental labeling is inappropriate, and coercion violates autonomy.',
    strategy: 'Refusal is a right. Find out why, teach, document, and tell the prescriber.' }
]
