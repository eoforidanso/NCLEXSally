/**
 * Unfolding case studies, in the Next Generation NCLEX format.
 *
 * Each case presents one client through an EHR-style chart and asks six
 * questions, one for each step of the NCSBN Clinical Judgment Measurement Model.
 * Items sharing a `caseId` are always drawn together and in order.
 */
export default [
  /* ===================== CASE 1 — postoperative sepsis ===================== */
  { id: 'CS1-1', caseId: 'CS1', cat: 'phys', sub: 'Sepsis', type: 'highlight', difficulty: 3,
    ncjmm: 'recognize',
    scenario: 'A 68-year-old client is on postoperative day 2 following an open sigmoid colectomy for diverticulitis.',
    chart: {
      'Nurses Note': '0600 — Client resting. Reports incisional pain 4/10, relieved with oral analgesia. Voided 350 mL. Abdominal dressing dry and intact.\n\n1400 — Client appears flushed and is difficult to rouse. Reports feeling "cold and shaky." Respirations shallow and rapid. Skin warm and mottled at the knees. Abdominal dressing with moderate amount of malodorous tan drainage. Urine output 40 mL over the last 4 hours via indwelling catheter.',
      'Vital Signs': [
        ['Time', '0600', '1000', '1400'],
        ['Temperature (C)', '37.1', '37.9', '38.9'],
        ['Heart rate', '84', '102', '126'],
        ['Respiratory rate', '16', '20', '28'],
        ['Blood pressure', '128/76', '112/66', '88/48'],
        ['SpO2 (room air)', '97%', '95%', '91%']
      ],
      'Laboratory Results': [
        ['Test', 'Result', 'Reference'],
        ['WBC', '19,400 /µL', '5,000–10,000'],
        ['Bands', '14%', '0–5%'],
        ['Lactate', '4.2 mmol/L', '0.5–2.2'],
        ['Creatinine', '1.9 mg/dL', '0.6–1.2'],
        ['Platelets', '96,000 /µL', '150,000–400,000']
      ],
      'Orders': 'Clear liquid diet · Ambulate 3 times daily · Oxycodone 5 mg PO q4h PRN pain · Indwelling urinary catheter to gravity drainage · Vital signs q4h'
    },
    stem: 'Click to highlight the findings in the 1400 nurses note that require immediate follow-up.',
    passage: [
      '1400 — ',
      { text: 'Client appears flushed and is difficult to rouse.', answer: true },
      ' Reports feeling "cold and shaky." ',
      { text: 'Respirations shallow and rapid.', answer: true },
      ' ',
      { text: 'Skin warm and mottled at the knees.', answer: true },
      ' Abdominal dressing with ',
      { text: 'moderate amount of malodorous tan drainage.', answer: true },
      ' ',
      { text: 'Urine output 40 mL over the last 4 hours', answer: true },
      ' via indwelling catheter. ',
      { text: 'Client oriented to name only.', answer: false },
      ' ',
      { text: 'Reports incisional pain 4 out of 10.', answer: false },
      ' ',
      { text: 'Bowel sounds present in all quadrants.', answer: false }
    ],
    rationale: 'Altered mental status, tachypnea, mottling, purulent malodorous wound drainage, and oliguria of 10 mL per hour all point to infection with developing organ hypoperfusion. Controlled incisional pain and present bowel sounds are expected on postoperative day 2 and need no immediate action.',
    strategy: 'Recognizing cues means separating what is abnormal and urgent from what is abnormal but expected. Ask of each finding: would this change what I do in the next hour?' },

  { id: 'CS1-2', caseId: 'CS1', cat: 'phys', sub: 'Sepsis', type: 'matrix', difficulty: 3,
    ncjmm: 'analyze',
    stem: 'For each finding, click to specify whether it supports sepsis, supports hypovolemia from bleeding, or supports both.',
    columns: ['Sepsis', 'Hemorrhage', 'Both'],
    rows: [
      { text: 'Temperature 38.9 degrees Celsius', answer: 0 },
      { text: 'Heart rate 126', answer: 2 },
      { text: 'White blood cell count 19,400 with 14 percent bands', answer: 0 },
      { text: 'Blood pressure 88/48', answer: 2 },
      { text: 'Warm mottled skin with flushing', answer: 0 },
      { text: 'Lactate 4.2 mmol/L', answer: 2 },
      { text: 'Malodorous tan wound drainage', answer: 0 }
    ],
    rationale: 'Fever, leukocytosis with a left shift, and warm flushed vasodilated skin are specific to infection, and purulent drainage identifies the source. Tachycardia, hypotension, and lactate elevation reflect inadequate perfusion and occur in either process, which is why they cannot by themselves distinguish the two. Hemorrhage would instead produce cool clammy skin and a falling hemoglobin.',
    strategy: 'Analyzing cues means asking which findings discriminate between your hypotheses and which are common to both. Only the discriminating ones move you forward.' },

  { id: 'CS1-3', caseId: 'CS1', cat: 'phys', sub: 'Sepsis', type: 'cloze', difficulty: 3,
    ncjmm: 'prioritize',
    stem: 'Complete the sentence by selecting from each list.',
    sentence: 'The client is most likely experiencing {0}, and the finding of greatest immediate concern is {1} because it indicates {2}.',
    blanks: [
      { options: ['a wound infection alone', 'septic shock', 'a pulmonary embolism', 'postoperative ileus'], answer: 1 },
      { options: ['the temperature of 38.9 degrees Celsius', 'the blood pressure of 88/48 with a lactate of 4.2', 'the incisional pain', 'the white blood cell count'], answer: 1 },
      { options: ['an expected inflammatory response', 'tissue hypoperfusion with anaerobic metabolism', 'dehydration from being NPO', 'an allergic reaction'], answer: 1 }
    ],
    rationale: 'Infection with hypotension that persists despite the compensatory response, together with a lactate above 4 mmol/L, defines septic shock rather than infection alone. The lactate is the key finding because it shows that oxygen delivery has fallen below tissue demand, forcing anaerobic metabolism, and it predicts mortality more reliably than any single vital sign.',
    strategy: 'Prioritizing hypotheses means naming the most dangerous explanation that fits all the data, not the most common one.' },

  { id: 'CS1-4', caseId: 'CS1', cat: 'phys', sub: 'Sepsis', type: 'matrix', difficulty: 3,
    ncjmm: 'solutions',
    stem: 'For each intervention, click to specify whether it is indicated, contraindicated, or non-essential at this time.',
    columns: ['Indicated', 'Contraindicated', 'Non-essential'],
    rows: [
      { text: 'Obtain blood cultures from two sites before antibiotics', answer: 0 },
      { text: 'Administer broad-spectrum IV antibiotics within 1 hour', answer: 0 },
      { text: 'Begin a 30 mL/kg isotonic crystalloid bolus', answer: 0 },
      { text: 'Administer an antipyretic and reassess the temperature in 4 hours', answer: 2 },
      { text: 'Hold antibiotics until culture results return', answer: 1 },
      { text: 'Repeat the serum lactate after fluid resuscitation', answer: 0 },
      { text: 'Administer a diuretic for the low urine output', answer: 1 }
    ],
    rationale: 'The sepsis bundle directs cultures before antibiotics, broad-spectrum antibiotics within the first hour, a weight-based crystalloid bolus for hypotension or lactate above 4, and a repeat lactate to gauge response. Withholding antibiotics for culture results costs lives for every hour of delay. A diuretic in a hypoperfused client worsens the shock, since the oliguria reflects inadequate renal blood flow rather than fluid overload. Antipyretics treat comfort but change no outcome here.',
    strategy: 'Generating solutions means separating what changes the outcome from what merely treats a number. In sepsis, cultures, antibiotics, and fluid are the outcome-changing three.' },

  { id: 'CS1-5', caseId: 'CS1', cat: 'phys', sub: 'Sepsis', type: 'bowtie', difficulty: 3,
    ncjmm: 'action',
    stem: 'Complete the diagram by selecting the condition, two actions to take, and two parameters to monitor.',
    condition: {
      prompt: 'The client is most likely experiencing:',
      options: ['Hypovolemic shock from hemorrhage', 'Septic shock', 'Cardiogenic shock', 'Anaphylactic shock'],
      answer: 1
    },
    actions: {
      prompt: 'Actions to take:', pick: 2,
      options: [
        'Administer the ordered isotonic fluid bolus and broad-spectrum antibiotics',
        'Place the client in Trendelenburg position',
        'Notify the provider and activate the sepsis protocol',
        'Administer an antipyretic and recheck in 4 hours',
        'Restrict IV fluids to prevent pulmonary edema'
      ],
      answer: [0, 2]
    },
    parameters: {
      prompt: 'Parameters to monitor:', pick: 2,
      options: [
        'Serial serum lactate and mean arterial pressure',
        'Serum amylase',
        'Hourly urine output',
        'Deep tendon reflexes',
        'Visual acuity'
      ],
      answer: [0, 2]
    },
    rationale: 'Septic shock is treated with immediate fluid resuscitation and antibiotics under an activated protocol, because bundle compliance within the first hour is what changes survival. Lactate clearance and mean arterial pressure show whether perfusion is being restored, and hourly urine output is the most accessible bedside marker of organ perfusion. Trendelenburg does not improve outcomes and impairs ventilation, and fluid restriction is exactly wrong in distributive shock.',
    strategy: 'Bow-tie items ask what you would do and what you would watch. The parameters you pick should be the ones that would change your next decision.' },

  { id: 'CS1-6', caseId: 'CS1', cat: 'phys', sub: 'Sepsis', type: 'matrix', difficulty: 3,
    ncjmm: 'evaluate',
    stem: 'Four hours after treatment began, the nurse reassesses. For each finding, click to specify whether it indicates the client is improving, is unchanged, or is deteriorating.',
    columns: ['Improving', 'Unchanged', 'Deteriorating'],
    rows: [
      { text: 'Lactate decreased from 4.2 to 2.1 mmol/L', answer: 0 },
      { text: 'Mean arterial pressure rose from 61 to 72 mmHg', answer: 0 },
      { text: 'Urine output 65 mL over the last hour', answer: 0 },
      { text: 'Client now oriented to person, place, and time', answer: 0 },
      { text: 'Temperature 38.6 degrees Celsius', answer: 1 },
      { text: 'New crackles at both lung bases with an SpO2 of 88 percent', answer: 2 },
      { text: 'Platelets fell from 96,000 to 61,000 /µL', answer: 2 }
    ],
    rationale: 'Falling lactate, a mean arterial pressure above 65, restored urine output, and clearing mentation all confirm that perfusion is recovering. A persistent fever during the first hours of antibiotic therapy is expected and neither reassuring nor alarming. New bilateral crackles with hypoxemia suggest fluid overload or evolving acute respiratory distress syndrome, and a continuing platelet fall suggests disseminated intravascular coagulation, so both represent deterioration despite the improving hemodynamics.',
    strategy: 'Evaluating outcomes means checking every system, not only the one you treated. Resuscitation can fix the blood pressure while creating a new problem in the lungs.' },

  /* ================== CASE 2 — heart failure exacerbation ================== */
  { id: 'CS2-1', caseId: 'CS2', cat: 'phys', sub: 'Heart Failure', type: 'highlight', difficulty: 3,
    ncjmm: 'recognize',
    scenario: 'A 74-year-old client with a history of heart failure with reduced ejection fraction presents to the emergency department.',
    chart: {
      'Nurses Note': 'Client reports 4 days of increasing shortness of breath, now present at rest. States she has been sleeping in a recliner for the past three nights because lying flat makes her "feel like I am drowning." Reports her wedding ring and shoes no longer fit. Denies chest pain. States she ran out of her water pill about a week ago and has not refilled it.',
      'Vital Signs': [
        ['Measure', 'Value'],
        ['Temperature', '36.8 C'],
        ['Heart rate', '108, irregular'],
        ['Respiratory rate', '26'],
        ['Blood pressure', '158/94'],
        ['SpO2', '89% on room air'],
        ['Weight', '78.6 kg (72.1 kg two weeks ago)']
      ],
      'Assessment': 'Crackles auscultated through the lower two-thirds of both lung fields. Jugular venous distention to the angle of the jaw at 45 degrees. S3 gallop present. Pitting edema 3+ to mid-thigh bilaterally. Abdomen distended with a fluid wave.',
      'Laboratory Results': [
        ['Test', 'Result', 'Reference'],
        ['BNP', '1,840 pg/mL', '< 100'],
        ['Troponin I', '0.02 ng/mL', '< 0.04'],
        ['Sodium', '129 mEq/L', '135–145'],
        ['Potassium', '3.2 mEq/L', '3.5–5.0'],
        ['Creatinine', '1.6 mg/dL', '0.6–1.2']
      ]
    },
    stem: 'Click to highlight the findings that support a diagnosis of acute decompensated heart failure.',
    passage: [
      'Client reports ',
      { text: '4 days of increasing shortness of breath, now present at rest.', answer: true },
      ' States she has been ',
      { text: 'sleeping in a recliner because lying flat makes her feel like she is drowning.', answer: true },
      ' Reports her ',
      { text: 'wedding ring and shoes no longer fit.', answer: true },
      ' ',
      { text: 'Denies chest pain.', answer: false },
      ' States she ',
      { text: 'ran out of her water pill about a week ago.', answer: true },
      ' On examination: ',
      { text: 'crackles through the lower two-thirds of both lung fields.', answer: true },
      ' ',
      { text: 'Temperature 36.8 degrees Celsius.', answer: false },
      ' ',
      { text: 'Weight up 6.5 kg in two weeks.', answer: true },
      ' ',
      { text: 'Troponin I 0.02 ng/mL.', answer: false }
    ],
    rationale: 'Progressive dyspnea, orthopnea, peripheral and dependent edema, pulmonary crackles, a 6.5 kg weight gain representing roughly 6.5 litres of retained fluid, and a lapse in diuretic therapy together build the picture of volume overload. A normal temperature and a normal troponin are relevant negatives that argue against infection and infarction as the precipitant, but they do not support the diagnosis itself.',
    strategy: 'A relevant negative is not a supporting cue. Highlight what points toward the diagnosis, not what merely rules something else out.' },

  { id: 'CS2-2', caseId: 'CS2', cat: 'phys', sub: 'Heart Failure', type: 'cloze', difficulty: 3,
    ncjmm: 'analyze',
    stem: 'Complete the sentence by selecting from each list.',
    sentence: 'The crackles and orthopnea indicate failure of the {0} side of the heart, while the jugular venous distention, ascites, and peripheral edema indicate failure of the {1} side. The elevated BNP reflects {2}.',
    blanks: [
      { options: ['left', 'right'], answer: 0 },
      { options: ['left', 'right'], answer: 1 },
      { options: ['myocardial cell death', 'stretch of the ventricular myocardium', 'coronary artery occlusion', 'valvular vegetation'], answer: 1 }
    ],
    rationale: 'The left ventricle fails first in this client, backing pressure into the pulmonary circulation and producing crackles and orthopnea. Pulmonary congestion then raises right-sided pressures, so the right ventricle fails in turn and blood backs into the systemic venous circulation, producing distended neck veins, hepatic congestion with ascites, and dependent edema. B-type natriuretic peptide is secreted by stretched ventricular myocardium, so it rises in proportion to volume and pressure loading rather than to ischemia.',
    strategy: 'Left equals lungs, right equals the rest of the body. Biventricular failure is the common end point, and the sequence tells you where it started.' },

  { id: 'CS2-3', caseId: 'CS2', cat: 'phys', sub: 'Heart Failure', type: 'mc', difficulty: 3,
    ncjmm: 'prioritize',
    stem: 'Which finding requires the nurse\'s most immediate attention?',
    options: [
      'Sodium of 129 mEq/L',
      'SpO2 of 89 percent on room air with a respiratory rate of 26',
      'Weight gain of 6.5 kg over two weeks',
      'Potassium of 3.2 mEq/L'
    ],
    answer: [1],
    rationale: 'Hypoxemia with tachypnea is the finding that threatens the client within minutes and takes precedence under an airway-breathing-circulation framework, requiring supplemental oxygen and upright positioning immediately. The dilutional hyponatremia, the weight gain, and the hypokalemia all need correction, and the potassium in particular must be addressed before aggressive diuresis, but none of them will cause harm in the next several minutes.',
    strategy: 'Prioritizing means sorting by time to harm, not by how abnormal the number looks.' },

  { id: 'CS2-4', caseId: 'CS2', cat: 'phys', sub: 'Heart Failure', type: 'bowtie', difficulty: 3,
    ncjmm: 'solutions',
    stem: 'Complete the diagram by selecting the condition, two actions to take, and two parameters to monitor.',
    condition: {
      prompt: 'The client is most likely experiencing:',
      options: ['Acute decompensated heart failure with volume overload', 'Acute myocardial infarction', 'Community-acquired pneumonia', 'Pulmonary embolism'],
      answer: 0
    },
    actions: {
      prompt: 'Actions to take:', pick: 2,
      options: [
        'Position upright with legs dependent and apply supplemental oxygen',
        'Administer a rapid isotonic fluid bolus',
        'Administer the ordered IV loop diuretic',
        'Place the client supine to improve venous return',
        'Encourage generous oral fluid intake'
      ],
      answer: [0, 2]
    },
    parameters: {
      prompt: 'Parameters to monitor:', pick: 2,
      options: [
        'Daily weight and strict intake and output',
        'Serum potassium',
        'Serum calcium',
        'Deep tendon reflexes',
        'Pupillary response'
      ],
      answer: [0, 1]
    },
    rationale: 'Upright positioning with dependent legs pools blood peripherally and maximizes diaphragmatic excursion while oxygen corrects the hypoxemia, and a loop diuretic removes the excess volume. Fluid administration and supine positioning would worsen pulmonary congestion. Daily weight is the most sensitive measure of fluid removal, and potassium must be watched closely because the client is already hypokalemic at 3.2 and loop diuretics waste more, raising the risk of arrhythmia.',
    strategy: 'When you diurese someone, the two things you always follow are the weight and the potassium.' },

  { id: 'CS2-5', caseId: 'CS2', cat: 'phys', sub: 'Heart Failure', type: 'matrix', difficulty: 3,
    ncjmm: 'action',
    stem: 'The client is to be discharged. For each teaching point, click to specify whether it is appropriate or inappropriate.',
    columns: ['Appropriate', 'Inappropriate'],
    rows: [
      { text: 'Weigh yourself each morning after voiding, before eating, in similar clothing', answer: 0 },
      { text: 'Call the clinic for a gain of 2 to 3 pounds in a day or 5 pounds in a week', answer: 0 },
      { text: 'Take an extra dose of your water pill on days your ankles look swollen', answer: 1 },
      { text: 'Limit sodium to about 2 grams daily and read labels on canned and packaged foods', answer: 0 },
      { text: 'Stop the beta blocker once your breathing feels better', answer: 1 },
      { text: 'Report new or worsening shortness of breath when lying flat', answer: 0 },
      { text: 'Use a salt substitute freely in place of table salt', answer: 1 }
    ],
    rationale: 'Consistent daily weights with a specific call threshold catch decompensation days before symptoms become severe, and sodium restriction with label reading addresses the largest dietary source. Self-adjusting a diuretic risks dehydration, kidney injury, and dangerous potassium shifts. Beta blockers reduce mortality in heart failure and are continued even when the client feels well. Salt substitutes are potassium chloride, which is hazardous in a client on a potassium-affecting regimen with a creatinine of 1.6.',
    strategy: 'Salt substitute is potassium. It is the wrong answer for anyone on an ACE inhibitor, an ARB, spironolactone, or with kidney impairment.' },

  { id: 'CS2-6', caseId: 'CS2', cat: 'phys', sub: 'Heart Failure', type: 'matrix', difficulty: 3,
    ncjmm: 'evaluate',
    stem: 'Two days later the nurse reassesses. For each finding, click to specify whether it indicates the treatment is effective or that a complication is developing.',
    columns: ['Treatment effective', 'Complication developing'],
    rows: [
      { text: 'Weight down 4.2 kg from admission', answer: 0 },
      { text: 'Lungs clear to auscultation in all fields', answer: 0 },
      { text: 'Client sleeping flat with one pillow', answer: 0 },
      { text: 'Potassium 2.9 mEq/L', answer: 1 },
      { text: 'Creatinine risen from 1.6 to 2.4 mg/dL', answer: 1 },
      { text: 'SpO2 96 percent on room air', answer: 0 },
      { text: 'Blood pressure 92/54 with dizziness on standing', answer: 1 }
    ],
    rationale: 'Weight loss, clearing lungs, the ability to lie flat, and a normal oxygen saturation all confirm that the congestion has resolved. Worsening hypokalemia, a rising creatinine, and symptomatic orthostatic hypotension indicate over-diuresis, which produces intravascular depletion, prerenal kidney injury, and arrhythmia risk. This is the central tension in treating heart failure: the same therapy that relieves congestion can be pushed past the point of benefit.',
    strategy: 'Diuresis has two failure modes. Too little leaves them congested; too much drops the pressure, the potassium, and the kidney function.' }
  ,
  /* =================== CASE 3 — diabetic ketoacidosis ==================== */
  { id: 'CS3-1', caseId: 'CS3', cat: 'phys', sub: 'Diabetic Ketoacidosis', type: 'matrix', difficulty: 3,
    ncjmm: 'recognize',
    scenario: 'A 19-year-old client with type 1 diabetes is brought to the emergency department by a roommate who says the client has been vomiting since yesterday and "is not making sense."',
    chart: {
      'Nurses Note': 'Client drowsy but rousable, answers questions slowly. Breathing deep and rapid. Sweet fruity odor noted on the breath. Mucous membranes dry, skin tenting over the sternum. Roommate reports the client had a bad head cold last week and "stopped bothering with the insulin because she was not eating."',
      'Vital Signs': [
        ['Measure', 'Value'],
        ['Temperature', '37.4 C'],
        ['Heart rate', '124'],
        ['Respiratory rate', '32, deep'],
        ['Blood pressure', '94/56'],
        ['SpO2', '98% room air']
      ],
      'Laboratory Results': [
        ['Test', 'Result', 'Reference'],
        ['Glucose', '512 mg/dL', '70–110'],
        ['pH (arterial)', '7.14', '7.35–7.45'],
        ['Bicarbonate', '9 mEq/L', '22–26'],
        ['Anion gap', '26', '8–12'],
        ['Serum ketones', 'Large', 'Negative'],
        ['Potassium', '5.4 mEq/L', '3.5–5.0'],
        ['Sodium', '129 mEq/L', '135–145']
      ]
    },
    stem: 'For each finding, click to specify whether it is consistent with diabetic ketoacidosis or is unexpected in this condition.',
    columns: ['Consistent with DKA', 'Unexpected'],
    rows: [
      { text: 'Deep rapid respirations with a fruity breath odor', answer: 0 },
      { text: 'Arterial pH 7.14 with bicarbonate 9 mEq/L', answer: 0 },
      { text: 'Serum potassium 5.4 mEq/L', answer: 0 },
      { text: 'Dry mucous membranes with skin tenting', answer: 0 },
      { text: 'SpO2 98 percent on room air', answer: 0 },
      { text: 'Serum sodium 129 mEq/L', answer: 0 },
      { text: 'Blood glucose 512 mg/dL with large ketones', answer: 0 }
    ],
    rationale: 'Every finding fits. Kussmaul respirations blow off carbon dioxide to compensate for the metabolic acidosis and carry the acetone odor. Acidosis drives potassium out of cells, so the serum level reads high even though total body potassium is profoundly depleted. Osmotic diuresis causes the dehydration and the dilutional hyponatremia, which is further exaggerated by the hyperglycemia pulling water into the vascular space. Oxygenation is normal because the lungs are compensating, not failing.',
    strategy: 'In DKA the serum potassium lies. It reads normal or high while total body stores are dangerously low, which is why replacement starts almost immediately.' },

  { id: 'CS3-2', caseId: 'CS3', cat: 'phys', sub: 'Diabetic Ketoacidosis', type: 'cloze', difficulty: 3,
    ncjmm: 'analyze',
    stem: 'Complete the sentence by selecting from each list.',
    sentence: 'The client\'s deep rapid breathing is a {0} response to {1}. The serum potassium of 5.4 mEq/L reflects {2}.',
    blanks: [
      { options: ['pathologic', 'compensatory', 'paradoxical'], answer: 1 },
      { options: ['respiratory acidosis', 'metabolic acidosis', 'metabolic alkalosis', 'respiratory alkalosis'], answer: 1 },
      { options: ['a true potassium excess requiring treatment to lower it', 'a shift of potassium out of cells despite total body depletion', 'laboratory error', 'excessive dietary potassium'], answer: 1 }
    ],
    rationale: 'Kussmaul respirations are the lungs compensating for a metabolic acidosis by eliminating carbon dioxide, which is why the respiratory rate must not be suppressed. Hydrogen ions moving into cells displace potassium outward, so the measured level overstates the body\'s stores. Once insulin drives glucose and potassium back into cells, the level falls fast, which is why potassium is replaced early and monitored hourly.',
    strategy: 'Never treat the number in isolation. In DKA, a potassium of 5.4 is about to become a potassium of 2.5 once insulin starts.' },

  { id: 'CS3-3', caseId: 'CS3', cat: 'phys', sub: 'Diabetic Ketoacidosis', type: 'mc', difficulty: 3,
    ncjmm: 'prioritize',
    stem: 'Which intervention should the nurse prepare to implement first?',
    options: [
      'Begin the regular insulin infusion',
      'Begin isotonic IV fluid resuscitation',
      'Administer sodium bicarbonate to correct the acidosis',
      'Administer an antiemetic for the vomiting'
    ],
    answer: [1],
    rationale: 'Fluid resuscitation comes first because the client is profoundly volume depleted from osmotic diuresis and vomiting, and restoring circulating volume alone lowers glucose substantially while restoring tissue perfusion. Starting insulin before volume replacement drives glucose and potassium into cells while the intravascular space is still empty, worsening hypotension and precipitating dangerous hypokalemia. Bicarbonate is reserved for extreme acidosis because it worsens intracellular acidosis and hypokalemia.',
    strategy: 'DKA order: fluids, then potassium, then insulin. Insulin is never the first thing.' },

  { id: 'CS3-4', caseId: 'CS3', cat: 'phys', sub: 'Diabetic Ketoacidosis', type: 'matrix', difficulty: 3,
    ncjmm: 'solutions',
    stem: 'For each intervention, click to specify whether it is indicated or contraindicated in the initial management of this client.',
    columns: ['Indicated', 'Contraindicated'],
    rows: [
      { text: 'Isotonic sodium chloride infusion', answer: 0 },
      { text: 'Continuous regular insulin infusion after fluids are underway', answer: 0 },
      { text: 'Subcutaneous long-acting insulin as the sole treatment', answer: 1 },
      { text: 'Hourly blood glucose and potassium monitoring', answer: 0 },
      { text: 'Adding dextrose to the IV fluid once glucose falls to about 200 mg/dL', answer: 0 },
      { text: 'Withholding all potassium until the level falls below 3.5 mEq/L', answer: 1 },
      { text: 'Continuous cardiac monitoring', answer: 0 }
    ],
    rationale: 'Isotonic fluid, an insulin infusion started after volume is being restored, and hourly glucose and potassium checks are the core of treatment. Dextrose is added once glucose approaches 200 so the insulin infusion can continue clearing ketones without causing hypoglycemia, because the acidosis takes longer to resolve than the hyperglycemia. Subcutaneous long-acting insulin cannot be titrated against a rapidly changing state. Waiting for hypokalemia before replacing potassium is dangerous, since insulin will drive it down precipitously; replacement generally begins once the level is below about 5.3 with adequate urine output.',
    strategy: 'The endpoint of DKA treatment is closing the anion gap, not normalizing the glucose. That is why dextrose gets added while insulin continues.' },

  { id: 'CS3-5', caseId: 'CS3', cat: 'phys', sub: 'Diabetic Ketoacidosis', type: 'bowtie', difficulty: 3,
    ncjmm: 'action',
    stem: 'Complete the diagram by selecting the condition, two actions to take, and two parameters to monitor.',
    condition: {
      prompt: 'The client is most likely experiencing:',
      options: ['Hyperosmolar hyperglycemic state', 'Diabetic ketoacidosis', 'Hypoglycemia', 'Lactic acidosis from metformin'],
      answer: 1
    },
    actions: {
      prompt: 'Actions to take:', pick: 2,
      options: [
        'Establish large-bore IV access and begin isotonic fluid resuscitation',
        'Administer subcutaneous rapid-acting insulin and recheck in 2 hours',
        'Initiate a continuous regular insulin infusion once fluids are running',
        'Administer sodium bicarbonate immediately',
        'Encourage oral fluids and a regular diet'
      ],
      answer: [0, 2]
    },
    parameters: {
      prompt: 'Parameters to monitor:', pick: 2,
      options: [
        'Serum potassium and cardiac rhythm',
        'Blood glucose and anion gap',
        'Serum amylase',
        'Bilirubin',
        'Peak expiratory flow'
      ],
      answer: [0, 1]
    },
    rationale: 'Hyperglycemia with ketosis, an anion gap acidosis, and Kussmaul respirations in a client with type 1 diabetes who stopped insulin during illness is diabetic ketoacidosis. Volume resuscitation through large-bore access followed by a titratable insulin infusion is the treatment. Potassium with cardiac monitoring is followed because the shift during treatment is what kills these clients, and glucose with the anion gap tracks whether the underlying ketosis is actually resolving.',
    strategy: 'The single most common fatal error in DKA is letting the potassium fall unwatched once insulin starts.' },

  { id: 'CS3-6', caseId: 'CS3', cat: 'phys', sub: 'Diabetic Ketoacidosis', type: 'matrix', difficulty: 3,
    ncjmm: 'evaluate',
    stem: 'Six hours into treatment the nurse reassesses. For each finding, click to specify whether it indicates the client is responding to treatment or requires an immediate change in the plan.',
    columns: ['Responding', 'Requires immediate change'],
    rows: [
      { text: 'Anion gap narrowed from 26 to 13', answer: 0 },
      { text: 'Arterial pH improved from 7.14 to 7.33', answer: 0 },
      { text: 'Client alert and oriented, mucous membranes moist', answer: 0 },
      { text: 'Serum potassium fallen from 5.4 to 2.8 mEq/L', answer: 1 },
      { text: 'Glucose fallen from 512 to 186 mg/dL with no dextrose added to the fluid', answer: 1 },
      { text: 'Respiratory rate now 18 and unlaboured', answer: 0 },
      { text: 'New complaints of headache with decreasing level of consciousness', answer: 1 }
    ],
    rationale: 'A closing anion gap, a correcting pH, restored mentation and hydration, and resolution of the compensatory tachypnea all confirm the treatment is working. A potassium of 2.8 is an arrhythmia emergency requiring immediate replacement and possibly holding insulin. Glucose approaching 200 without dextrose added means hypoglycemia is imminent while ketosis may still be clearing. New headache with declining consciousness during correction suggests cerebral edema, a rare but often fatal complication most common in young clients when glucose or sodium is corrected too rapidly.',
    strategy: 'Cerebral edema in DKA presents as headache and falling consciousness while the numbers are improving. It is the reason correction is deliberately gradual.' },

  /* ========================= CASE 4 — acute stroke ======================== */
  { id: 'CS4-1', caseId: 'CS4', cat: 'phys', sub: 'Stroke', type: 'highlight', difficulty: 3,
    ncjmm: 'recognize',
    scenario: 'A 61-year-old client is brought to the emergency department by a spouse who reports the client "suddenly could not talk right" while they were eating breakfast.',
    chart: {
      'Nurses Note': 'Spouse states they finished breakfast at 0745 and the client was completely normal. At 0810 the client\'s speech became garbled and the right arm dropped. Spouse called 911 immediately. Client arrived at 0842. Right facial droop present. Right arm drifts to the bed within 5 seconds when held out. Speech is effortful and words are substituted. Client follows simple commands. Denies headache. Last known well 0745.',
      'Vital Signs': [
        ['Measure', 'Value'],
        ['Temperature', '36.9 C'],
        ['Heart rate', '96, irregularly irregular'],
        ['Respiratory rate', '18'],
        ['Blood pressure', '188/102'],
        ['SpO2', '96% room air'],
        ['Glucose (point of care)', '104 mg/dL']
      ],
      'History': 'Atrial fibrillation — prescribed apixaban, but spouse states the client "stopped taking it months ago because of the cost." Hypertension. Hyperlipidemia. No prior stroke. No recent surgery, trauma, or bleeding.'
    },
    stem: 'Click to highlight the findings that must be reported immediately because they determine eligibility for time-sensitive treatment.',
    passage: [
      'Spouse states they finished breakfast at 0745 and the client was completely normal. ',
      { text: 'Last known well 0745; symptom onset 0810; arrival 0842.', answer: true },
      ' ',
      { text: 'Right facial droop with right arm drift and garbled effortful speech.', answer: true },
      ' Client follows simple commands. ',
      { text: 'Blood pressure 188/102.', answer: true },
      ' ',
      { text: 'Point-of-care glucose 104 mg/dL.', answer: true },
      ' ',
      { text: 'Atrial fibrillation, off anticoagulation for months.', answer: true },
      ' ',
      { text: 'Temperature 36.9 degrees Celsius.', answer: false },
      ' ',
      { text: 'SpO2 96 percent on room air.', answer: false },
      ' ',
      { text: 'History of hyperlipidemia.', answer: false }
    ],
    rationale: 'The last known well time defines the treatment window and is the single most important piece of information in stroke care. The focal deficits establish the syndrome, the blood pressure must be below defined thresholds before thrombolysis, and glucose must be checked because hypoglycemia mimics stroke exactly. Untreated atrial fibrillation identifies the likely cardioembolic mechanism and bears on both treatment and secondary prevention. A normal temperature, normal oxygenation, and a chronic lipid history do not change the immediate decision.',
    strategy: 'In stroke, the clock is a vital sign. Establish last known well before anything else, and never accept "this morning" as an answer.' },

  { id: 'CS4-2', caseId: 'CS4', cat: 'phys', sub: 'Stroke', type: 'cloze', difficulty: 3,
    ncjmm: 'analyze',
    stem: 'Complete the sentence by selecting from each list.',
    sentence: 'The client\'s right-sided weakness and language difficulty localize the lesion to the {0} hemisphere. Given the atrial fibrillation and missed anticoagulation, the most likely mechanism is {1}. Before any thrombolytic is given, the priority diagnostic study is {2}.',
    blanks: [
      { options: ['left', 'right'], answer: 0 },
      { options: ['a cardioembolic ischemic stroke', 'an intracerebral hemorrhage', 'a subarachnoid hemorrhage', 'a brain tumour'], answer: 0 },
      { options: ['a carotid ultrasound', 'a non-contrast CT of the head', 'an electroencephalogram', 'a lumbar puncture'], answer: 1 }
    ],
    rationale: 'Motor pathways cross, so right-sided weakness reflects a left hemisphere lesion, and language centres sit in the left hemisphere in the great majority of people, which is why aphasia accompanies right-sided deficits. Atrial fibrillation without anticoagulation allows thrombus to form in the left atrium and embolize to the brain. Non-contrast CT must precede any thrombolytic because giving one during a hemorrhagic stroke is catastrophic, and CT distinguishes the two within minutes.',
    strategy: 'Right-sided weakness plus aphasia equals left hemisphere. Left-sided weakness with neglect equals right hemisphere.' },

  { id: 'CS4-3', caseId: 'CS4', cat: 'phys', sub: 'Stroke', type: 'mc', difficulty: 3,
    ncjmm: 'prioritize',
    stem: 'The CT shows no hemorrhage and the client meets criteria for thrombolysis. Which finding would most urgently need to be addressed before alteplase is administered?',
    options: [
      'Heart rate of 96 and irregular',
      'Blood pressure of 188/102',
      'Glucose of 104 mg/dL',
      'SpO2 of 96 percent on room air'
    ],
    answer: [1],
    rationale: 'Blood pressure must be reduced below approximately 185/110 before thrombolysis, because giving alteplase at higher pressures markedly increases the risk of intracranial hemorrhage. The irregular rhythm is the presumed cause rather than a barrier, the glucose is normal, and the oxygenation is adequate.',
    strategy: 'Thrombolysis has a blood pressure ceiling. Above roughly 185/110 it must come down first, and it is not lowered aggressively otherwise.' },

  { id: 'CS4-4', caseId: 'CS4', cat: 'phys', sub: 'Stroke', type: 'matrix', difficulty: 3,
    ncjmm: 'solutions',
    stem: 'For each nursing action in the 24 hours after alteplase, click to specify whether it is indicated or contraindicated.',
    columns: ['Indicated', 'Contraindicated'],
    rows: [
      { text: 'Neurological assessments at frequent scheduled intervals', answer: 0 },
      { text: 'Keep the client NPO until a swallow screen is completed', answer: 0 },
      { text: 'Administer aspirin within the first 24 hours', answer: 1 },
      { text: 'Insert an indwelling urinary catheter routinely during the infusion', answer: 1 },
      { text: 'Monitor for sudden headache, vomiting, or a decline in consciousness', answer: 0 },
      { text: 'Perform an intramuscular injection for nausea', answer: 1 },
      { text: 'Maintain blood pressure within the ordered post-thrombolysis parameters', answer: 0 }
    ],
    rationale: 'After thrombolysis the nurse watches intensively for intracranial bleeding, which announces itself as sudden headache, vomiting, hypertension, or declining consciousness, and holds blood pressure within tight limits. Nothing by mouth until the swallow screen passes prevents aspiration, which is the leading complication of stroke. Antiplatelet and anticoagulant agents are withheld for 24 hours, and invasive procedures including catheter insertion, intramuscular injections, and arterial punctures are avoided during and immediately after the infusion because they create uncompressible bleeding sites.',
    strategy: 'For 24 hours after alteplase, treat the client as though every puncture is a hemorrhage waiting to happen.' },

  { id: 'CS4-5', caseId: 'CS4', cat: 'phys', sub: 'Stroke', type: 'bowtie', difficulty: 3,
    ncjmm: 'action',
    stem: 'Ninety minutes into the alteplase infusion the client develops a sudden severe headache, vomits, and becomes difficult to rouse. Complete the diagram.',
    condition: {
      prompt: 'The client is most likely experiencing:',
      options: ['Extension of the ischemic stroke', 'Symptomatic intracranial hemorrhage', 'A migraine', 'A seizure'],
      answer: 1
    },
    actions: {
      prompt: 'Actions to take:', pick: 2,
      options: [
        'Stop the alteplase infusion immediately',
        'Increase the alteplase rate to complete the dose',
        'Notify the provider and prepare for emergent non-contrast CT',
        'Administer an oral analgesic and reassess in 30 minutes',
        'Place the client flat and administer a fluid bolus'
      ],
      answer: [0, 2]
    },
    parameters: {
      prompt: 'Parameters to monitor:', pick: 2,
      options: [
        'Level of consciousness and pupillary response',
        'Blood pressure',
        'Bowel sounds',
        'Serum amylase',
        'Urine specific gravity'
      ],
      answer: [0, 1]
    },
    rationale: 'Sudden headache with vomiting and declining consciousness during a thrombolytic infusion is symptomatic intracranial hemorrhage until imaging proves otherwise. The infusion is stopped at once, the provider is notified, and emergent CT is obtained while coagulation studies and reversal agents are prepared. Level of consciousness and pupillary changes track herniation, and blood pressure is followed because hypertension both worsens the bleed and signals rising intracranial pressure.',
    strategy: 'Any acute neurological deterioration during or after thrombolysis means stop the drug and image the head. Nothing else comes first.' },

  { id: 'CS4-6', caseId: 'CS4', cat: 'phys', sub: 'Stroke', type: 'matrix', difficulty: 3,
    ncjmm: 'evaluate',
    stem: 'The client stabilizes and is preparing for discharge to rehabilitation. For each statement by the client or spouse, click to specify whether it indicates understanding or a need for further teaching.',
    columns: ['Understanding', 'Needs further teaching'],
    rows: [
      { text: '"I will take the blood thinner every day, and we have applied for the assistance programme to cover it."', answer: 0 },
      { text: '"If the weakness comes back, we will wait a few hours to see if it passes before calling."', answer: 1 },
      { text: '"Sudden numbness, trouble speaking, or a bad headache means call 911 right away."', answer: 0 },
      { text: '"I should thicken his liquids the way the speech therapist showed us."', answer: 0 },
      { text: '"Now that he is better, he can stop the blood pressure medicine."', answer: 1 },
      { text: '"We will keep the follow-up appointment to check his heart rhythm."', answer: 0 },
      { text: '"A little bit of coughing while he drinks is normal and nothing to worry about."', answer: 1 }
    ],
    rationale: 'Adherence to anticoagulation with the cost barrier addressed, recognition of stroke warning signs with immediate emergency activation, and continued dysphagia precautions all reflect understanding. Waiting to see whether deficits resolve forfeits the treatment window, stopping antihypertensives removes the single most important secondary prevention measure, and coughing with liquids is a sign of aspiration rather than something to accept.',
    strategy: 'The cost barrier is the real reason this client stroked. A discharge plan that does not solve it has not prevented the next one.' }
  ,
  /* ============= CASE 5 — severe preeclampsia and eclampsia ============== */
  { id: 'CS5-1', caseId: 'CS5', cat: 'hpm', sub: 'Preeclampsia', type: 'highlight', difficulty: 3,
    ncjmm: 'recognize',
    scenario: 'A 29-year-old client at 34 weeks gestation presents to the obstetric triage unit reporting that she "just does not feel right."',
    chart: {
      'Nurses Note': 'Client reports a headache for two days that has not improved with acetaminophen. States she is seeing "flashing spots" and has pain "right under my ribs on the right side" that she attributed to heartburn. Reports her rings will not come off and her face looks puffy. Fetal movement reported as normal. Denies contractions, bleeding, or leaking fluid. Deep tendon reflexes 4+ with 3 beats of clonus at the ankle.',
      'Vital Signs': [
        ['Time', 'Triage', '15 min later'],
        ['Blood pressure', '172/112', '168/108'],
        ['Heart rate', '92', '96'],
        ['Respiratory rate', '18', '18'],
        ['Temperature (C)', '36.9', '—'],
        ['Fetal heart rate', '142, reactive', '138, reactive']
      ],
      'Laboratory Results': [
        ['Test', 'Result', 'Reference'],
        ['Platelets', '84,000 /µL', '150,000–400,000'],
        ['AST', '186 U/L', '10–40'],
        ['ALT', '154 U/L', '7–56'],
        ['Creatinine', '1.3 mg/dL', '0.5–1.1'],
        ['Protein/creatinine ratio', '1.8', '< 0.3']
      ]
    },
    stem: 'Click to highlight the findings that indicate severe features of preeclampsia.',
    passage: [
      'Client reports a ',
      { text: 'headache for two days unrelieved by acetaminophen', answer: true },
      ', ',
      { text: 'seeing flashing spots', answer: true },
      ', and ',
      { text: 'pain under the right ribs', answer: true },
      '. ',
      { text: 'Reports her rings will not come off and her face looks puffy.', answer: false },
      ' ',
      { text: 'Fetal movement reported as normal.', answer: false },
      ' ',
      { text: 'Blood pressure 172/112, persisting on repeat.', answer: true },
      ' ',
      { text: 'Deep tendon reflexes 4+ with 3 beats of clonus.', answer: true },
      ' ',
      { text: 'Platelets 84,000 /µL with AST 186 U/L.', answer: true },
      ' ',
      { text: 'Denies contractions, bleeding, or leaking fluid.', answer: false }
    ],
    rationale: 'Severe features include a systolic pressure of 160 or above or diastolic of 110 or above on two occasions, persistent headache, visual disturbance, right upper quadrant or epigastric pain from hepatic capsule stretch, thrombocytopenia below 100,000, and transaminases at twice normal. Hyperreflexia with clonus signals central nervous system irritability and impending seizure. Facial and hand edema is common in normal pregnancy and is no longer a diagnostic criterion, and normal fetal movement with no bleeding are reassuring rather than severe features.',
    strategy: 'Headache, visual changes, and epigastric pain are the eclampsia warning triad. Edema alone means very little.' },

  { id: 'CS5-2', caseId: 'CS5', cat: 'hpm', sub: 'Preeclampsia', type: 'cloze', difficulty: 3,
    ncjmm: 'analyze',
    stem: 'Complete the sentence by selecting from each list.',
    sentence: 'The combination of thrombocytopenia and elevated transaminases with hemolysis defines {0}. The right upper quadrant pain is caused by {1}, and the hyperreflexia with clonus indicates {2}.',
    blanks: [
      { options: ['gestational hypertension', 'HELLP syndrome', 'gestational diabetes', 'placenta previa'], answer: 1 },
      { options: ['gallbladder disease', 'stretching of the hepatic capsule', 'gastric reflux', 'appendicitis'], answer: 1 },
      { options: ['normal pregnancy changes', 'central nervous system irritability and impending seizure', 'hypocalcemia', 'magnesium toxicity'], answer: 1 }
    ],
    rationale: 'HELLP syndrome is hemolysis, elevated liver enzymes, and low platelets, a severe variant of preeclampsia carrying high maternal and fetal mortality. Periportal necrosis and hepatic swelling stretch the liver capsule, producing the characteristic right upper quadrant pain, and in the worst case the capsule ruptures. Brisk reflexes with clonus reflect cortical irritability, the immediate precursor to eclamptic seizure.',
    strategy: 'Epigastric or right upper quadrant pain in a pregnant client with hypertension is HELLP until laboratory work proves otherwise. It is not heartburn.' },

  { id: 'CS5-3', caseId: 'CS5', cat: 'hpm', sub: 'Preeclampsia', type: 'matrix', difficulty: 3,
    ncjmm: 'solutions',
    stem: 'For each intervention, click to specify whether it is indicated or contraindicated for this client now.',
    columns: ['Indicated', 'Contraindicated'],
    rows: [
      { text: 'Initiate IV magnesium sulfate for seizure prophylaxis', answer: 0 },
      { text: 'Administer an antihypertensive for the severe-range blood pressure', answer: 0 },
      { text: 'Place the client in a quiet room with dim lighting and limited stimulation', answer: 0 },
      { text: 'Keep calcium gluconate immediately available at the bedside', answer: 0 },
      { text: 'Administer an ergot alkaloid to raise uterine tone', answer: 1 },
      { text: 'Administer betamethasone for fetal lung maturity', answer: 0 },
      { text: 'Encourage ambulation in the hallway to reduce anxiety', answer: 1 }
    ],
    rationale: 'Magnesium sulfate prevents eclamptic seizures and is the standard of care, with calcium gluconate kept at hand as its antidote. Severe-range pressures are treated to prevent maternal stroke, environmental stimulation is minimized because light and noise can precipitate seizure, and antenatal corticosteroids accelerate fetal lung maturity before an anticipated preterm delivery. Ergot alkaloids raise blood pressure and are contraindicated in hypertensive disorders of pregnancy, and ambulation increases both stimulation and injury risk.',
    strategy: 'Whenever magnesium sulfate is running, calcium gluconate is at the bedside. That pairing is never optional.' },

  { id: 'CS5-4', caseId: 'CS5', cat: 'hpm', sub: 'Preeclampsia', type: 'matrix', difficulty: 3,
    ncjmm: 'action',
    stem: 'Magnesium sulfate is infusing. For each assessment finding, click to specify whether it is expected, indicates magnesium toxicity, or indicates worsening preeclampsia.',
    columns: ['Expected', 'Magnesium toxicity', 'Worsening preeclampsia'],
    rows: [
      { text: 'Feeling warm and flushed as the loading dose infuses', answer: 0 },
      { text: 'Deep tendon reflexes now absent', answer: 1 },
      { text: 'Respiratory rate of 10', answer: 1 },
      { text: 'Urine output 15 mL over the last hour', answer: 1 },
      { text: 'Mild drowsiness and slurred speech', answer: 1 },
      { text: 'Blood pressure risen to 186/118 with a new severe headache', answer: 2 },
      { text: 'Deep tendon reflexes reduced from 4+ to 2+', answer: 0 }
    ],
    rationale: 'Flushing and warmth accompany the loading dose and are harmless. Magnesium is a central nervous system depressant, so toxicity appears in a predictable order: reflexes disappear first, then respirations fall below 12, then consciousness declines, then cardiac arrest. Because magnesium is renally cleared, oliguria causes accumulation and is itself a toxicity warning. Reflexes moving from 4+ toward 2+ is the therapeutic effect being achieved rather than toxicity. Rising pressure with a new headache signals the disease progressing despite treatment.',
    strategy: 'Magnesium toxicity order: reflexes, then respirations, then consciousness, then the heart. Check reflexes and urine output every hour.' },

  { id: 'CS5-5', caseId: 'CS5', cat: 'hpm', sub: 'Preeclampsia', type: 'bowtie', difficulty: 3,
    ncjmm: 'prioritize',
    stem: 'The client suddenly develops generalized tonic-clonic activity. Complete the diagram.',
    condition: {
      prompt: 'The client is experiencing:',
      options: ['Magnesium toxicity', 'An eclamptic seizure', 'A hypoglycemic episode', 'Amniotic fluid embolism'],
      answer: 1
    },
    actions: {
      prompt: 'Immediate actions to take:', pick: 2,
      options: [
        'Turn the client to her side, protect the airway, and administer oxygen',
        'Insert a padded tongue blade between the teeth',
        'Call for help and stay with the client, noting the time and duration',
        'Restrain the extremities to prevent injury',
        'Leave to obtain the emergency delivery cart'
      ],
      answer: [0, 2]
    },
    parameters: {
      prompt: 'Parameters to monitor after the seizure:', pick: 2,
      options: [
        'Fetal heart rate pattern',
        'Maternal oxygen saturation and level of consciousness',
        'Serum amylase',
        'Bowel sounds',
        'Deep tendon reflexes only'
      ],
      answer: [0, 1]
    },
    rationale: 'Eclampsia is a seizure in a client with preeclampsia and no other cause. Lateral positioning with airway protection and oxygen prevents aspiration and maternal-fetal hypoxia, and staying with the client while timing the event is essential. Nothing is placed in the mouth and the client is never restrained, because both cause injury. Afterward, the fetus is assessed for the bradycardia and late decelerations that commonly follow the hypoxic insult, and maternal oxygenation and consciousness guide further management. Delivery is the only definitive treatment.',
    strategy: 'During any seizure: side-lying, oxygen, protect, time it, never restrain, nothing in the mouth. Then assess the fetus.' },

  { id: 'CS5-6', caseId: 'CS5', cat: 'hpm', sub: 'Preeclampsia', type: 'matrix', difficulty: 3,
    ncjmm: 'evaluate',
    stem: 'The client delivers and is 12 hours postpartum. For each finding, click to specify whether it is expected or requires immediate intervention.',
    columns: ['Expected', 'Requires immediate intervention'],
    rows: [
      { text: 'Magnesium sulfate continuing for 24 hours after delivery', answer: 0 },
      { text: 'Blood pressure 152/96 and slowly trending down', answer: 0 },
      { text: 'Urine output 90 mL per hour with brisk diuresis', answer: 0 },
      { text: 'Platelets risen from 84,000 to 121,000 /µL', answer: 0 },
      { text: 'New shortness of breath with crackles at both lung bases', answer: 1 },
      { text: 'Deep tendon reflexes absent with a respiratory rate of 9', answer: 1 },
      { text: 'Reports of a persistent severe headache with blurred vision', answer: 1 }
    ],
    rationale: 'Seizure prophylaxis continues for 24 hours postpartum because eclampsia can occur after delivery, pressures fall gradually rather than immediately, brisk diuresis marks the resolution of the disease, and rising platelets show HELLP is recovering. New dyspnea with bilateral crackles suggests pulmonary edema, a leading cause of maternal death in preeclampsia. Absent reflexes with a respiratory rate of 9 is magnesium toxicity requiring the infusion stopped and calcium gluconate given. A persistent severe headache with visual change means the disease is still active and seizure risk remains.',
    strategy: 'Preeclampsia does not end at delivery. The highest-risk window for eclampsia and pulmonary edema is the first 48 hours postpartum.' },

  /* ============== CASE 6 — pediatric asthma exacerbation ================= */
  { id: 'CS6-1', caseId: 'CS6', cat: 'phys', sub: 'Pediatric Asthma', type: 'matrix', difficulty: 3,
    ncjmm: 'recognize',
    scenario: 'A 7-year-old with a history of asthma is brought to the emergency department by a parent after three days of a viral upper respiratory infection.',
    chart: {
      'Nurses Note': 'Child sitting forward on the edge of the stretcher, hands on knees. Speaking in two- to three-word phrases only. Parent reports using the rescue inhaler "every hour or two since last night" without much relief. Nasal flaring and suprasternal and intercostal retractions noted. Audible expiratory wheeze without a stethoscope. Parent reports the child has missed several days of the controller inhaler because "he only needs it when he is sick."',
      'Vital Signs': [
        ['Measure', 'Value', 'Expected for age'],
        ['Temperature', '37.6 C', '36.5–37.5'],
        ['Heart rate', '148', '75–118'],
        ['Respiratory rate', '38', '18–25'],
        ['Blood pressure', '106/68', '97/57–112/71'],
        ['SpO2', '90% room air', '> 94%'],
        ['Peak flow', '43% of personal best', '> 80%']
      ]
    },
    stem: 'For each finding, click to specify whether it indicates mild, moderate, or severe respiratory distress.',
    columns: ['Mild', 'Moderate', 'Severe'],
    rows: [
      { text: 'Speaking in two- to three-word phrases only', answer: 2 },
      { text: 'Suprasternal and intercostal retractions with nasal flaring', answer: 2 },
      { text: 'Peak flow at 43 percent of personal best', answer: 2 },
      { text: 'SpO2 90 percent on room air', answer: 2 },
      { text: 'Tripod positioning', answer: 2 },
      { text: 'Audible expiratory wheeze', answer: 1 },
      { text: 'Respiratory rate of 38 in a 7-year-old', answer: 1 }
    ],
    rationale: 'Inability to speak in full sentences, accessory muscle use with flaring and retractions, a peak flow in the red zone below 50 percent, hypoxemia, and tripod positioning all mark severe distress in a child. Audible wheeze and tachypnea are significant but occur across moderate and severe exacerbations. Children compensate impressively until they suddenly do not, which is why work of breathing and speech matter more than any single number.',
    strategy: 'In pediatric respiratory assessment, count how many words the child can say in one breath. It is the fastest severity gauge there is.' },

  { id: 'CS6-2', caseId: 'CS6', cat: 'phys', sub: 'Pediatric Asthma', type: 'mc', difficulty: 3,
    ncjmm: 'analyze',
    stem: 'Thirty minutes after treatment begins, the nurse notes that the child\'s wheezing has markedly diminished, the respiratory rate has fallen to 22, and the child is drowsy with an SpO2 of 88 percent. How should the nurse interpret this?',
    options: [
      'The child is improving and can be prepared for discharge',
      'The child is deteriorating, with reduced air movement producing a quiet chest and impending respiratory failure',
      'The child is simply tired from the work of breathing',
      'The pulse oximeter is likely inaccurate'
    ],
    answer: [1],
    rationale: 'Wheezing requires airflow, so its disappearance alongside a falling respiratory rate, drowsiness, and worsening hypoxemia means air movement has become critically reduced rather than that the airways have opened. A silent chest with a tiring child is the immediate precursor to respiratory arrest and calls for escalation and preparation for intubation, not reassurance.',
    strategy: 'A quiet chest in asthma is the most dangerous sound in the room. Improvement looks like better saturation and easier speech, not just less noise.' },

  { id: 'CS6-3', caseId: 'CS6', cat: 'phys', sub: 'Pediatric Asthma', type: 'bowtie', difficulty: 3,
    ncjmm: 'prioritize',
    stem: 'Complete the diagram for the child\'s current status.',
    condition: {
      prompt: 'The child is most likely experiencing:',
      options: ['Improving bronchospasm', 'Impending respiratory failure', 'Anxiety', 'Pneumothorax'],
      answer: 1
    },
    actions: {
      prompt: 'Actions to take:', pick: 2,
      options: [
        'Call for immediate assistance and prepare for possible intubation',
        'Apply high-concentration oxygen and continue bronchodilator therapy',
        'Encourage the child to lie flat and rest',
        'Discontinue the bronchodilator because the wheezing has stopped',
        'Administer a sedative to reduce anxiety'
      ],
      answer: [0, 1]
    },
    parameters: {
      prompt: 'Parameters to monitor:', pick: 2,
      options: [
        'Level of consciousness and work of breathing',
        'Oxygen saturation and end-tidal carbon dioxide',
        'Bowel sounds',
        'Urine specific gravity',
        'Deep tendon reflexes'
      ],
      answer: [0, 1]
    },
    rationale: 'A drowsy child with a quiet chest and falling saturation is in impending respiratory failure and needs help summoned and airway equipment ready while oxygen and bronchodilators continue. Lying flat worsens the work of breathing, stopping the bronchodilator removes the only treatment for the bronchospasm, and sedation abolishes the respiratory drive that is keeping the child alive. Consciousness and work of breathing track fatigue, while rising carbon dioxide confirms that ventilation is failing even before saturation collapses.',
    strategy: 'Never sedate a child in respiratory distress. The agitation is hypoxia, and the drive to breathe is what you are relying on.' },

  { id: 'CS6-4', caseId: 'CS6', cat: 'phys', sub: 'Pediatric Asthma', type: 'matrix', difficulty: 3,
    ncjmm: 'solutions',
    stem: 'For each intervention, click to specify whether it is indicated or contraindicated.',
    columns: ['Indicated', 'Contraindicated'],
    rows: [
      { text: 'Continuous nebulized short-acting beta agonist', answer: 0 },
      { text: 'Systemic corticosteroid', answer: 0 },
      { text: 'Supplemental oxygen titrated to maintain saturation above 94 percent', answer: 0 },
      { text: 'Position the child upright or in whatever position eases breathing', answer: 0 },
      { text: 'A sedative to calm the child', answer: 1 },
      { text: 'A cough suppressant', answer: 1 },
      { text: 'Ipratropium added to the nebulized treatment', answer: 0 }
    ],
    rationale: 'Continuous beta agonist with added ipratropium, early systemic corticosteroid to address the inflammatory component, oxygen, and a position of comfort are the mainstays of a severe exacerbation. Sedation suppresses respiratory drive and is dangerous, and suppressing the cough prevents clearance of the secretions plugging the airways.',
    strategy: 'Asthma has two problems: bronchospasm and inflammation. Beta agonists fix the first within minutes; steroids fix the second over hours. You need both.' },

  { id: 'CS6-5', caseId: 'CS6', cat: 'phys', sub: 'Pediatric Asthma', type: 'cloze', difficulty: 3,
    ncjmm: 'action',
    stem: 'Complete the sentence by selecting from each list.',
    sentence: 'The parent\'s statement that the child "only needs the controller inhaler when he is sick" reveals a misunderstanding, because controller medication works by {0} and must be taken {1}. The rescue inhaler being needed every one to two hours indicates {2}.',
    blanks: [
      { options: ['relaxing airway smooth muscle within minutes', 'reducing airway inflammation over time', 'thinning mucus', 'suppressing the cough reflex'], answer: 1 },
      { options: ['only during an attack', 'every day, whether or not symptoms are present', 'once a week', 'only during allergy season'], answer: 1 }, 
      { options: ['good asthma control', 'that the asthma is poorly controlled and the plan needs revision', 'that the inhaler has expired', 'a normal pattern during a cold'], answer: 1 }
    ],
    rationale: 'Inhaled corticosteroids suppress the chronic airway inflammation that underlies asthma, which takes days to weeks to achieve and is lost when doses are skipped, so they are taken daily regardless of symptoms. Rescue inhaler use beyond about twice a week is the standard marker of inadequate control, and hourly use signals a failing regimen requiring both acute treatment and a revised action plan.',
    strategy: 'Count the rescue inhaler refills. More than one canister every few months means the controller therapy is not working.' },

  { id: 'CS6-6', caseId: 'CS6', cat: 'phys', sub: 'Pediatric Asthma', type: 'matrix', difficulty: 3,
    ncjmm: 'evaluate',
    stem: 'The child improves and is being discharged. For each parent statement, click to specify whether it indicates understanding or a need for further teaching.',
    columns: ['Understanding', 'Needs further teaching'],
    rows: [
      { text: '"He takes the controller inhaler every morning and evening, even when he feels fine."', answer: 0 },
      { text: '"We rinse his mouth after the steroid inhaler."', answer: 0 },
      { text: '"We use the spacer every time, and I count the doses left in the canister."', answer: 0 },
      { text: '"Green zone is above 80 percent of his best, yellow is 50 to 79, and red is below 50 and means the emergency department."', answer: 0 },
      { text: '"If the rescue inhaler is not helping, I will give an extra dose of the controller instead."', answer: 1 },
      { text: '"We will keep the cat out of his bedroom and use the mattress cover."', answer: 0 },
      { text: '"Once he has gone a month without symptoms we can stop the controller."', answer: 1 }
    ],
    rationale: 'Daily controller use, mouth rinsing to prevent candidiasis, spacer use with dose counting, a correct peak flow action plan, and trigger reduction all reflect sound understanding. A controller inhaler cannot rescue an acute attack because it does not bronchodilate, so substituting it during a failing rescue wastes critical minutes. Stopping controller therapy after a symptom-free interval is a decision for the prescriber based on stepwise assessment, not something to do unilaterally.',
    strategy: 'Controller and rescue are not interchangeable. In an emergency, only the rescue inhaler opens the airway.' }
  ,
  /* ================ CASE 7 — alcohol withdrawal delirium ================= */
  { id: 'CS7-1', caseId: 'CS7', cat: 'psy', sub: 'Alcohol Withdrawal', type: 'highlight', difficulty: 3,
    ncjmm: 'recognize',
    scenario: 'A 54-year-old client was admitted 44 hours ago after a fall at home resulting in a wrist fracture.',
    chart: {
      'Nurses Note': 'Client increasingly restless through the night. Diaphoretic with visible tremor of both hands. Reports that "the bugs on the wall keep moving" and asks the nurse to remove them. Oriented to person, disoriented to place and time. Startles at ordinary sounds in the corridor. Has not slept. Pulling at the IV line. Admission history documented "social drinking only."',
      'Vital Signs': [
        ['Time', '0400', '0800', '1200'],
        ['Temperature (C)', '37.2', '37.6', '38.1'],
        ['Heart rate', '98', '116', '132'],
        ['Respiratory rate', '18', '22', '26'],
        ['Blood pressure', '146/88', '162/96', '178/104']
      ],
      'Laboratory Results': [
        ['Test', 'Result', 'Reference'],
        ['Magnesium', '1.3 mEq/L', '1.5–2.5'],
        ['Potassium', '3.1 mEq/L', '3.5–5.0'],
        ['AST', '142 U/L', '10–40'],
        ['ALT', '61 U/L', '7–56'],
        ['Platelets', '104,000 /µL', '150,000–400,000']
      ]
    },
    stem: 'Click to highlight the findings that support a diagnosis of alcohol withdrawal.',
    passage: [
      'Client increasingly ',
      { text: 'restless with visible tremor of both hands and diaphoresis', answer: true },
      '. Reports that ',
      { text: 'the bugs on the wall keep moving', answer: true },
      '. ',
      { text: 'Oriented to person, disoriented to place and time.', answer: true },
      ' ',
      { text: 'Startles at ordinary sounds in the corridor.', answer: true },
      ' ',
      { text: 'Heart rate and blood pressure rising steadily over 8 hours.', answer: true },
      ' ',
      { text: 'Wrist fracture from a fall at home.', answer: false },
      ' ',
      { text: 'AST 142 with a low platelet count.', answer: true },
      ' ',
      { text: 'Reports pain 5 out of 10 at the fracture site.', answer: false }
    ],
    rationale: 'Autonomic hyperactivity with tremor, diaphoresis, and rising heart rate and pressure, together with visual hallucinations, disorientation, hypervigilance, and insomnia beginning 48 to 72 hours after the last drink, is alcohol withdrawal delirium. A transaminase ratio with AST roughly twice ALT and thrombocytopenia point to chronic alcohol-related liver injury and corroborate the history despite what was documented on admission. The fracture and its pain are the reason for admission, not evidence of withdrawal.',
    strategy: 'A fall, an AST twice the ALT, and low platelets should make you ask about alcohol before withdrawal announces itself on day two.' },

  { id: 'CS7-2', caseId: 'CS7', cat: 'psy', sub: 'Alcohol Withdrawal', type: 'cloze', difficulty: 3,
    ncjmm: 'analyze',
    stem: 'Complete the sentence by selecting from each list.',
    sentence: 'The timing of symptoms at roughly {0} after the last drink, combined with hallucinations and autonomic instability, indicates {1}. This condition is dangerous primarily because of {2}.',
    blanks: [
      { options: ['6 hours', '48 to 72 hours', '2 weeks', '30 days'], answer: 1 },
      { options: ['simple alcohol withdrawal', 'alcohol withdrawal delirium', 'Wernicke encephalopathy', 'opioid withdrawal'], answer: 1 },
      { options: ['the discomfort it causes', 'seizures, arrhythmia, and cardiovascular collapse', 'the risk of relapse', 'liver failure'], answer: 1 }
    ],
    rationale: 'Minor withdrawal begins within 6 to 12 hours, seizures peak at 12 to 48 hours, and withdrawal delirium typically emerges at 48 to 72 hours. Unlike opioid withdrawal, alcohol withdrawal delirium carries meaningful mortality from seizures, arrhythmia, hyperthermia, and cardiovascular collapse, which is why it is treated aggressively rather than simply observed.',
    strategy: 'Alcohol and benzodiazepine withdrawal can kill. Opioid withdrawal is agonizing but rarely fatal. That difference drives how urgently you treat.' },

  { id: 'CS7-3', caseId: 'CS7', cat: 'psy', sub: 'Alcohol Withdrawal', type: 'matrix', difficulty: 3,
    ncjmm: 'solutions',
    stem: 'For each intervention, click to specify whether it is indicated or contraindicated.',
    columns: ['Indicated', 'Contraindicated'],
    rows: [
      { text: 'Benzodiazepine dosing guided by a symptom-triggered withdrawal scale', answer: 0 },
      { text: 'Thiamine administered before any glucose-containing fluid', answer: 0 },
      { text: 'Correction of the low magnesium and potassium', answer: 0 },
      { text: 'A quiet, well-lit room with frequent reorientation', answer: 0 },
      { text: 'An antipsychotic as the sole treatment for the hallucinations', answer: 1 },
      { text: 'Physical restraints as the first response to pulling at the IV', answer: 1 },
      { text: 'Continuous cardiac monitoring', answer: 0 }
    ],
    rationale: 'Benzodiazepines are the only agents that treat the underlying receptor pathology and prevent seizures, and symptom-triggered dosing reduces both total dose and duration. Thiamine precedes glucose because a glucose load in a thiamine-depleted client precipitates Wernicke encephalopathy. Magnesium and potassium repletion reduces arrhythmia and seizure risk. A quiet well-lit environment minimizes misperception while reorientation reduces fear. Antipsychotics lower the seizure threshold and do not treat withdrawal, so they are never used alone, and restraints escalate agitation and are a last resort after less restrictive measures.',
    strategy: 'Thiamine before glucose, benzodiazepines before antipsychotics, and de-escalation before restraints.' },

  { id: 'CS7-4', caseId: 'CS7', cat: 'psy', sub: 'Alcohol Withdrawal', type: 'bowtie', difficulty: 3,
    ncjmm: 'action',
    stem: 'Complete the diagram for this client.',
    condition: {
      prompt: 'The client is most likely experiencing:',
      options: ['Hospital-acquired delirium from sleep deprivation', 'Alcohol withdrawal delirium', 'A psychotic episode', 'Opioid intoxication'],
      answer: 1
    },
    actions: {
      prompt: 'Actions to take:', pick: 2,
      options: [
        'Administer a benzodiazepine per the symptom-triggered protocol',
        'Administer thiamine and correct the magnesium and potassium',
        'Confront the client about the inaccurate alcohol history',
        'Apply four-point restraints immediately',
        'Withhold all sedating medication to allow accurate assessment'
      ],
      answer: [0, 1]
    },
    parameters: {
      prompt: 'Parameters to monitor:', pick: 2,
      options: [
        'Withdrawal severity score and level of consciousness',
        'Vital signs and cardiac rhythm',
        'Bowel sounds',
        'Serum bilirubin',
        'Peak expiratory flow'
      ],
      answer: [0, 1]
    },
    rationale: 'Symptom-triggered benzodiazepine dosing with thiamine and electrolyte correction treats both the withdrawal and the deficiencies that amplify it. Confrontation about the history serves no clinical purpose during delirium, restraints are not a first-line response, and withholding sedation to preserve assessment allows a treatable condition to progress to seizure. Serial withdrawal scoring with consciousness assessment guides dosing, while vital signs and rhythm track the autonomic storm and its cardiac consequences.',
    strategy: 'Symptom-triggered dosing means you score the client, then dose. Do not withhold sedation to keep the picture clear.' },

  { id: 'CS7-5', caseId: 'CS7', cat: 'psy', sub: 'Alcohol Withdrawal', type: 'mc', difficulty: 3,
    ncjmm: 'prioritize',
    stem: 'Which finding would require the nurse to intervene most urgently?',
    options: [
      'The client reports seeing bugs on the wall',
      'Temperature 38.1 degrees Celsius',
      'A witnessed generalized tonic-clonic seizure',
      'Heart rate of 132'
    ],
    answer: [2],
    rationale: 'A withdrawal seizure demands immediate airway protection, protection from injury, and escalation of benzodiazepine therapy, and it markedly raises the risk of progression to status epilepticus and death. Hallucinations, low-grade fever, and tachycardia are all serious features of the same syndrome requiring treatment, but none threatens the airway in the next minute.',
    strategy: 'Within a syndrome, prioritize by what threatens airway, breathing, or circulation right now.' },

  { id: 'CS7-6', caseId: 'CS7', cat: 'psy', sub: 'Alcohol Withdrawal', type: 'matrix', difficulty: 3,
    ncjmm: 'evaluate',
    stem: 'Thirty-six hours later the nurse reassesses. For each finding, click to specify whether it indicates improvement or a continuing problem.',
    columns: ['Improvement', 'Continuing problem'],
    rows: [
      { text: 'Withdrawal score fallen from 24 to 6', answer: 0 },
      { text: 'Heart rate 88, blood pressure 132/78', answer: 0 },
      { text: 'Client oriented to person, place, and time', answer: 0 },
      { text: 'Slept 5 uninterrupted hours overnight', answer: 0 },
      { text: 'Magnesium 1.4 mEq/L, unchanged', answer: 1 },
      { text: 'Client states "I do not really have a drinking problem, that was just the medication"', answer: 1 },
      { text: 'No hallucinations reported in 24 hours', answer: 0 }
    ],
    rationale: 'A falling withdrawal score, normalizing vital signs, restored orientation, return of sleep, and resolution of hallucinations all show the physiological withdrawal is resolving. A persistently low magnesium leaves the client at continued risk for arrhythmia and refractory hypokalemia and needs further replacement. Denial of the underlying disorder is the most consequential continuing problem, because without engaging treatment the client will return in withdrawal again, and the medically stabilized moment is precisely when brief intervention and referral should occur.',
    strategy: 'Detoxification is not treatment. A client who leaves physiologically stable but unengaged with recovery has been half-treated.' },

  /* ============ CASE 8 — upper GI bleed and hypovolemic shock ============ */
  { id: 'CS8-1', caseId: 'CS8', cat: 'phys', sub: 'GI Bleeding', type: 'matrix', difficulty: 3,
    ncjmm: 'recognize',
    scenario: 'A 66-year-old client with a history of cirrhosis presents to the emergency department after vomiting blood at home.',
    chart: {
      'Nurses Note': 'Client pale and anxious, states "it came up all at once, like a bucket." Two episodes of bright red emesis with clots since arrival, approximately 400 mL total. Abdomen distended with a fluid wave. Skin cool and clammy. Capillary refill 4 seconds. Restless, repeatedly asking what is happening.',
      'Vital Signs': [
        ['Time', 'Arrival', '20 min'],
        ['Heart rate', '118', '132'],
        ['Blood pressure', '104/72', '86/60'],
        ['Respiratory rate', '24', '28'],
        ['Temperature (C)', '36.4', '36.2'],
        ['SpO2', '95%', '93%']
      ],
      'Laboratory Results': [
        ['Test', 'Result', 'Reference'],
        ['Hemoglobin', '7.1 g/dL', '13.5–17.5'],
        ['Platelets', '68,000 /µL', '150,000–400,000'],
        ['INR', '2.1', '0.8–1.1'],
        ['Albumin', '2.2 g/dL', '3.5–5.0'],
        ['BUN', '42 mg/dL', '10–20'],
        ['Creatinine', '1.1 mg/dL', '0.6–1.2']
      ]
    },
    stem: 'For each finding, click to specify whether it reflects active blood loss, chronic liver disease, or both.',
    columns: ['Active blood loss', 'Chronic liver disease', 'Both'],
    rows: [
      { text: 'Heart rate rising from 118 to 132 with a falling blood pressure', answer: 0 },
      { text: 'Cool clammy skin with a capillary refill of 4 seconds', answer: 0 },
      { text: 'INR 2.1', answer: 2 },
      { text: 'Platelets 68,000 /µL', answer: 1 },
      { text: 'Albumin 2.2 g/dL with a fluid wave on abdominal examination', answer: 1 },
      { text: 'BUN 42 mg/dL with a normal creatinine', answer: 0 },
      { text: 'Restlessness and anxiety', answer: 0 }
    ],
    rationale: 'Rising tachycardia with falling pressure, peripheral vasoconstriction, and restlessness from cerebral hypoperfusion are the compensatory signature of ongoing hemorrhage. A disproportionately raised BUN with a normal creatinine reflects absorbed blood protein from the gut, a classic marker of upper gastrointestinal bleeding. Thrombocytopenia from splenic sequestration and hypoalbuminemia with ascites are chronic liver findings. The INR is raised by failing hepatic synthesis and worsened further by consumption during active bleeding.',
    strategy: 'A high BUN with a normal creatinine in a bleeding client means the blood is in the gut being digested.' },

  { id: 'CS8-2', caseId: 'CS8', cat: 'phys', sub: 'GI Bleeding', type: 'cloze', difficulty: 3,
    ncjmm: 'analyze',
    stem: 'Complete the sentence by selecting from each list.',
    sentence: 'Given the history of cirrhosis, the most likely source of bleeding is {0}, which occurs because {1}. The client is currently in {2} shock.',
    blanks: [
      { options: ['a gastric ulcer', 'esophageal varices', 'a Mallory-Weiss tear', 'colonic diverticula'], answer: 1 },
      { options: ['portal hypertension forces blood through collateral veins that dilate and rupture', 'excess gastric acid erodes the mucosa', 'forceful vomiting tears the mucosa', 'diverticula become inflamed'], answer: 0 },
      { options: ['compensated', 'decompensated hypovolemic', 'cardiogenic', 'distributive'], answer: 1 }
    ],
    rationale: 'Cirrhosis raises portal venous pressure, diverting blood through thin-walled collateral vessels at the gastroesophageal junction that dilate and rupture, producing the large-volume painless hematemesis described. Once the blood pressure falls despite maximal compensatory tachycardia and vasoconstriction, the client has moved from compensated into decompensated hypovolemic shock, which is why the pressure dropped 20 points in 20 minutes.',
    strategy: 'Blood pressure is the last thing to fall in hemorrhage. Once it drops, roughly 30 percent of blood volume is already gone.' },

  { id: 'CS8-3', caseId: 'CS8', cat: 'phys', sub: 'GI Bleeding', type: 'bowtie', difficulty: 3,
    ncjmm: 'action',
    stem: 'Complete the diagram for this client.',
    condition: {
      prompt: 'The client is most likely experiencing:',
      options: ['Septic shock', 'Hypovolemic shock from bleeding esophageal varices', 'Cardiogenic shock', 'Neurogenic shock'],
      answer: 1
    },
    actions: {
      prompt: 'Actions to take:', pick: 2,
      options: [
        'Establish two large-bore IVs and begin volume resuscitation with blood products',
        'Position the client supine with the head of the bed low and administer a vasopressor first',
        'Protect the airway and prepare for urgent endoscopy',
        'Administer an oral iron supplement',
        'Insert a nasogastric tube and irrigate with cold saline'
      ],
      answer: [0, 2]
    },
    parameters: {
      prompt: 'Parameters to monitor:', pick: 2,
      options: [
        'Serial hemoglobin and ongoing blood loss',
        'Blood pressure, heart rate, and urine output',
        'Serum amylase',
        'Deep tendon reflexes',
        'Peak expiratory flow'
      ],
      answer: [0, 1]
    },
    rationale: 'Two large-bore lines with blood product resuscitation address the volume deficit and the coagulopathy simultaneously, while airway protection matters because massive hematemesis carries a high aspiration risk and endoscopy is the definitive treatment through band ligation. Vasopressors before volume constrict an empty vascular bed and worsen tissue ischemia. Serial hemoglobin with measured losses shows whether bleeding continues, and pressure, rate, and urine output track whether perfusion is being restored.',
    strategy: 'Fill the tank before you squeeze the pipes. In hemorrhage, volume always precedes vasopressors.' },

  { id: 'CS8-4', caseId: 'CS8', cat: 'phys', sub: 'GI Bleeding', type: 'matrix', difficulty: 3,
    ncjmm: 'solutions',
    stem: 'For each intervention, click to specify whether it is indicated or contraindicated.',
    columns: ['Indicated', 'Contraindicated'],
    rows: [
      { text: 'Transfuse packed red blood cells with fresh frozen plasma for the coagulopathy', answer: 0 },
      { text: 'Administer an IV vasoactive agent such as octreotide to reduce portal pressure', answer: 0 },
      { text: 'Administer prophylactic antibiotics', answer: 0 },
      { text: 'Administer a nonsteroidal anti-inflammatory drug for the client\'s headache', answer: 1 },
      { text: 'Keep the client NPO in preparation for endoscopy', answer: 0 },
      { text: 'Administer lactulose once bleeding is controlled', answer: 0 },
      { text: 'Give a large bolus of isotonic crystalloid as the sole resuscitation fluid', answer: 1 }
    ],
    rationale: 'Blood products replace what is being lost and correct the coagulopathy, octreotide lowers portal pressure, and prophylactic antibiotics reduce mortality in cirrhotic clients with gastrointestinal bleeding by preventing spontaneous bacterial peritonitis. Lactulose clears the nitrogen load from digested blood that would otherwise precipitate hepatic encephalopathy. NSAIDs worsen both bleeding and kidney function, and crystalloid alone dilutes the remaining clotting factors and red cells without carrying oxygen.',
    strategy: 'Antibiotics in a cirrhotic GI bleed are not optional. They measurably reduce mortality, which surprises most students.' },

  { id: 'CS8-5', caseId: 'CS8', cat: 'phys', sub: 'GI Bleeding', type: 'mc', difficulty: 3,
    ncjmm: 'prioritize',
    stem: 'During the resuscitation the client vomits a large volume of blood and becomes unresponsive. What is the nurse\'s priority action?',
    options: [
      'Obtain a repeat hemoglobin',
      'Turn the client to the side, suction the airway, and call for immediate assistance',
      'Increase the rate of the blood transfusion',
      'Recheck the blood pressure'
    ],
    answer: [1],
    rationale: 'An unresponsive client with a mouth full of blood will aspirate or obstruct within seconds, so airway clearance with lateral positioning and suction while summoning help precedes everything else. Transfusion, laboratory work, and vital signs all matter but none of them protects an airway that is being lost right now.',
    strategy: 'Airway always outranks circulation, even in a hemorrhaging client. A dead airway kills faster than a low hemoglobin.' },

  { id: 'CS8-6', caseId: 'CS8', cat: 'phys', sub: 'GI Bleeding', type: 'matrix', difficulty: 3,
    ncjmm: 'evaluate',
    stem: 'After endoscopic band ligation the client is transferred to the intensive care unit. For each finding, click to specify whether it indicates the resuscitation is succeeding or that a complication is developing.',
    columns: ['Resuscitation succeeding', 'Complication developing'],
    rows: [
      { text: 'Heart rate fallen from 132 to 92', answer: 0 },
      { text: 'Blood pressure 112/70', answer: 0 },
      { text: 'Urine output 55 mL over the last hour', answer: 0 },
      { text: 'Hemoglobin risen from 7.1 to 9.4 g/dL after transfusion', answer: 0 },
      { text: 'Client increasingly confused with asterixis', answer: 1 },
      { text: 'Temperature 38.4 degrees Celsius with abdominal tenderness', answer: 1 },
      { text: 'Capillary refill now 2 seconds with warm dry skin', answer: 0 }
    ],
    rationale: 'A falling heart rate, restored blood pressure and urine output, a rising hemoglobin, and normalized peripheral perfusion all confirm the volume deficit has been corrected. New confusion with asterixis indicates hepatic encephalopathy from the nitrogen load of digested blood, and fever with abdominal tenderness in a client with ascites suggests spontaneous bacterial peritonitis. Both are expected sequelae of this presentation and both require immediate treatment.',
    strategy: 'After a cirrhotic GI bleed, look for the two predictable follow-on problems: encephalopathy from the blood in the gut, and infection of the ascites.' }
]
