export default [
  { id: 'HPM-001', cat: 'hpm', sub: 'Antepartum', type: 'mc', difficulty: 2,
    stem: 'A client at 28 weeks gestation reports a severe headache, blurred vision, and epigastric pain. Blood pressure is 168/104 mmHg. What is the priority nursing action?',
    options: [
      'Encourage the client to rest in a quiet room and recheck in an hour',
      'Notify the provider immediately and prepare for magnesium sulfate administration and seizure precautions',
      'Administer acetaminophen for the headache',
      'Obtain a urine specimen and await results'
    ],
    answer: [1],
    rationale: 'Severe hypertension with headache, visual changes, and epigastric pain indicates severe preeclampsia with impending eclampsia. Magnesium sulfate for seizure prophylaxis and antihypertensive therapy must begin without delay. Rest, analgesia, and awaiting laboratory results all allow progression to seizure, stroke, or hepatic rupture.',
    strategy: 'Headache, visual changes, and epigastric pain in pregnancy are the warning triad. They mean severe preeclampsia, not a bad day.' },

  { id: 'HPM-002', cat: 'hpm', sub: 'Antepartum', type: 'mc', difficulty: 2,
    stem: 'A client at 10 weeks gestation asks about the recommended weight gain during pregnancy. Her pre-pregnancy body mass index was 22. What is the appropriate response?',
    options: ['"About 10 pounds total."', '"About 25 to 35 pounds total."', '"About 40 to 50 pounds total."', '"Weight gain does not matter as long as you eat well."'],
    answer: [1],
    rationale: 'A woman with a normal pre-pregnancy body mass index of 18.5 to 24.9 should gain 25 to 35 pounds. Underweight women gain 28 to 40 pounds, overweight women 15 to 25 pounds, and obese women 11 to 20 pounds.',
    strategy: 'Normal BMI equals 25 to 35 pounds. The higher the starting BMI, the lower the recommended gain.' },

  { id: 'HPM-003', cat: 'hpm', sub: 'Antepartum', type: 'sata', difficulty: 3,
    stem: 'Which findings during pregnancy require immediate evaluation? Select all that apply.',
    options: [
      'Vaginal bleeding',
      'Mild ankle edema at the end of the day',
      'Sudden gush of clear fluid from the vagina at 30 weeks',
      'Decreased fetal movement',
      'Occasional Braxton Hicks contractions that resolve with rest',
      'Persistent severe headache with visual disturbances'
    ],
    answer: [0, 2, 3, 5],
    rationale: 'Bleeding, premature rupture of membranes, decreased fetal movement, and headache with visual changes all signal serious complications. Dependent ankle edema at day\'s end and irregular contractions relieved by rest and hydration are normal.',
    strategy: 'Pregnancy danger signs: bleeding, leaking fluid, decreased movement, severe headache with visual changes, epigastric pain, and persistent vomiting.' },

  { id: 'HPM-004', cat: 'hpm', sub: 'Intrapartum', type: 'mc', difficulty: 2,
    stem: 'A nurse observes late decelerations on the fetal monitor during labor. What is the first nursing action?',
    options: [
      'Increase the oxytocin infusion',
      'Reposition the client to a lateral position, discontinue oxytocin, give oxygen, and increase IV fluids',
      'Prepare for immediate cesarean delivery',
      'Document the finding and continue monitoring'
    ],
    answer: [1],
    rationale: 'Late decelerations indicate uteroplacental insufficiency. Intrauterine resuscitation begins with lateral positioning to relieve vena caval compression, stopping oxytocin to reduce contractions, oxygen by non-rebreather, and a fluid bolus to improve perfusion. Increasing oxytocin worsens the problem, cesarean is considered only if the pattern does not resolve, and documentation alone is inadequate.',
    strategy: 'Late decelerations equal placental insufficiency. Turn, stop the pitocin, oxygen, fluids, and call the provider.' },

  { id: 'HPM-005', cat: 'hpm', sub: 'Intrapartum', type: 'mc', difficulty: 2,
    stem: 'A nurse performs a vaginal examination during labor and palpates a pulsating cord. What is the priority action?',
    options: [
      'Attempt to reposition the cord back into the uterus',
      'Keep the examining hand in place elevating the presenting part off the cord, place the client in knee-chest or Trendelenburg position, and call for immediate help',
      'Remove the hand and prepare for vaginal delivery',
      'Administer oxygen and continue monitoring'
    ],
    answer: [1],
    rationale: 'Cord prolapse compresses fetal circulation and requires immediate manual elevation of the presenting part, which the nurse maintains continuously until delivery, combined with gravity-assisted positioning and emergency cesarean preparation. The cord is never handled or replaced, and removing the hand allows fatal compression.',
    strategy: 'Prolapsed cord: hand stays in, hips go up, call for a cesarean. Do not touch the cord.' },

  { id: 'HPM-006', cat: 'hpm', sub: 'Postpartum', type: 'mc', difficulty: 3,
    stem: 'A nurse assesses a client 2 hours postpartum and finds the uterine fundus boggy and displaced to the right of midline. What should the nurse do first?',
    options: [
      'Massage the fundus and assist the client to empty her bladder',
      'Administer an analgesic',
      'Increase the IV rate',
      'Notify the provider immediately'
    ],
    answer: [0],
    rationale: 'A boggy fundus deviated laterally indicates uterine atony with bladder distention preventing contraction. Fundal massage and bladder emptying are the immediate interventions and often resolve the problem. Analgesia and IV rate changes do not address atony, and provider notification follows if bleeding continues.',
    strategy: 'Boggy fundus: massage first. Fundus off midline: think full bladder.' },

  { id: 'HPM-007', cat: 'hpm', sub: 'Postpartum', type: 'mc', difficulty: 2,
    stem: 'A nurse is assessing a client on postpartum day 3. Which lochia finding is expected?',
    options: [
      'Bright red with large clots and a foul odor',
      'Pinkish-brown, moderate amount, with a fleshy odor',
      'Absent lochia',
      'Bright red saturating a pad every 30 minutes'
    ],
    answer: [1],
    rationale: 'Lochia progresses from rubra, which is dark red for about 3 days, to serosa, which is pinkish-brown through about day 10, then alba. A fleshy odor is normal. Large clots with a foul odor suggest retained tissue or infection, absent lochia is abnormal, and saturation every 30 minutes defines hemorrhage.',
    strategy: 'Lochia sequence: rubra to serosa to alba. Foul odor means infection, heavy saturation means hemorrhage.' },

  { id: 'HPM-008', cat: 'hpm', sub: 'Newborn Care', type: 'mc', difficulty: 2,
    stem: 'A nurse assesses a newborn 1 minute after birth: heart rate 130, strong cry, active motion, grimace with suction, and body pink with blue extremities. What is the Apgar score?',
    options: ['7', '8', '9', '10'],
    answer: [1],
    rationale: 'Heart rate above 100 scores 2, strong cry scores 2, active motion scores 2, grimace scores 1, and acrocyanosis with a pink body scores 1, totaling 8. Scores of 7 to 10 indicate a newborn adapting well.',
    strategy: 'Apgar: Appearance, Pulse, Grimace, Activity, Respiration. Acrocyanosis costs one point and is normal.' },

  { id: 'HPM-009', cat: 'hpm', sub: 'Newborn Care', type: 'sata', difficulty: 1,
    stem: 'Which newborn findings require further evaluation? Select all that apply.',
    options: [
      'Respiratory rate of 72 with grunting and nasal flaring',
      'Acrocyanosis of the hands and feet at 2 hours of age',
      'Jaundice appearing at 12 hours of age',
      'A single palmar crease with low-set ears',
      'Passage of meconium within 24 hours',
      'Axillary temperature of 36.0 degrees Celsius'
    ],
    answer: [0, 2, 3, 5],
    rationale: 'Tachypnea with grunting and flaring indicates respiratory distress, jaundice within the first 24 hours suggests hemolytic disease, dysmorphic features warrant genetic evaluation, and a temperature of 36.0 degrees Celsius indicates hypothermia. Acrocyanosis and meconium passage within 24 hours are normal.',
    strategy: 'Jaundice in the first 24 hours is always pathologic. After 24 hours it is usually physiologic.' },

  { id: 'HPM-010', cat: 'hpm', sub: 'Growth and Development', type: 'mc', difficulty: 2,
    stem: 'A nurse is assessing a 9-month-old infant. Which finding suggests a developmental delay?',
    options: [
      'Unable to sit without support',
      'Unable to walk independently',
      'Unable to speak two-word phrases',
      'Unable to use a spoon'
    ],
    answer: [0],
    rationale: 'Sitting without support is achieved by 6 to 8 months, so its absence at 9 months warrants evaluation. Independent walking typically occurs at 12 to 15 months, two-word phrases at about 24 months, and spoon use around 15 to 18 months.',
    strategy: 'Key milestones: 2 months social smile, 4 months rolls, 6 to 8 months sits, 9 months pincer grasp, 12 months walks and says one word.' },

  { id: 'HPM-011', cat: 'hpm', sub: 'Immunizations', type: 'mc', difficulty: 2,
    stem: 'A parent asks whether their 6-month-old with a mild cold and a temperature of 37.6 degrees Celsius can receive scheduled immunizations. What is the nurse\'s best response?',
    options: [
      '"We should wait until the cold resolves completely."',
      '"Mild illness with a low-grade fever is not a reason to delay vaccines, so we can proceed today."',
      '"Vaccines are never given when a child has any fever."',
      '"We will give only half the dose today."'
    ],
    answer: [1],
    rationale: 'Minor illness with or without low-grade fever is not a contraindication, and deferring immunizations for mild illness leads to missed protection. Moderate to severe acute illness is a reason to postpone. Partial doses are never given.',
    strategy: 'Mild illness is never a reason to delay vaccines. True contraindications are anaphylaxis to a component and, for live vaccines, immunosuppression and pregnancy.' },

  { id: 'HPM-012', cat: 'hpm', sub: 'Health Screening', type: 'mc', difficulty: 2,
    stem: 'A 52-year-old client with no risk factors asks when colorectal cancer screening should begin. What should the nurse advise?',
    options: [
      '"Screening starts at age 65."',
      '"Screening for average-risk adults begins at age 45."',
      '"Screening is only needed if you have symptoms."',
      '"Screening starts at age 30."'
    ],
    answer: [1],
    rationale: 'Current guidance begins average-risk colorectal cancer screening at age 45, using colonoscopy every 10 years or an approved stool-based test at shorter intervals. Waiting for symptoms defeats the purpose of screening, which is to detect disease before it becomes symptomatic.',
    strategy: 'Screening ages worth memorizing: colorectal at 45, mammography discussion at 40 with routine at 50, cervical at 21, and lung CT at 50 for eligible smokers.' },

  { id: 'HPM-013', cat: 'hpm', sub: 'Aging', type: 'mc', difficulty: 1,
    stem: 'Which change is a normal age-related finding in an older adult?',
    options: [
      'Confusion and disorientation',
      'Decreased skin elasticity and slower wound healing',
      'Urinary incontinence',
      'Significant memory loss interfering with daily activities'
    ],
    answer: [1],
    rationale: 'Reduced skin elasticity and slower healing reflect normal aging. Confusion, incontinence, and functionally impairing memory loss are never normal aging and require evaluation for infection, medication effects, delirium, or dementia.',
    strategy: 'In older adults, new confusion is almost always a urinary tract infection, a medication, or hypoxia until proven otherwise.' },

  { id: 'HPM-014', cat: 'hpm', sub: 'Family Planning', type: 'mc', difficulty: 2,
    stem: 'A client asks about combined oral contraceptives. Which client history would make this method contraindicated?',
    options: [
      'A history of migraine with aura',
      'A history of iron deficiency anemia',
      'A history of dysmenorrhea',
      'A history of acne'
    ],
    answer: [0],
    rationale: 'Migraine with aura substantially increases stroke risk with estrogen-containing contraceptives, making them contraindicated. Anemia, dysmenorrhea, and acne are conditions combined oral contraceptives often improve.',
    strategy: 'Estrogen contraindications: migraine with aura, history of clot, smoking over 35, uncontrolled hypertension, and active liver disease.' },

  { id: 'HPM-015', cat: 'hpm', sub: 'Antepartum', type: 'mc', difficulty: 2,
    stem: 'A pregnant client at 16 weeks gestation asks which foods to avoid. Which response is correct?',
    options: [
      '"Avoid all fish because of mercury."',
      '"Avoid unpasteurized dairy, deli meats unless heated until steaming, raw sprouts, and high-mercury fish such as shark and swordfish."',
      '"Avoid all dairy products."',
      '"Avoid green leafy vegetables because of folate excess."'
    ],
    answer: [1],
    rationale: 'These foods carry Listeria and mercury risks that specifically threaten the fetus. Low-mercury fish is encouraged for its omega-3 content, dairy is an important calcium source when pasteurized, and folate from leafy greens prevents neural tube defects.',
    strategy: 'Pregnancy food rules target Listeria and mercury: no unpasteurized products, no cold deli meat, no raw sprouts, and limit large predatory fish.' },

  { id: 'HPM-016', cat: 'hpm', sub: 'Growth and Development', type: 'mc', difficulty: 1,
    stem: 'According to Erikson, which developmental task is central for an adolescent?',
    options: ['Trust versus mistrust', 'Industry versus inferiority', 'Identity versus role confusion', 'Generativity versus stagnation'],
    answer: [2],
    rationale: 'Adolescence centers on identity versus role confusion, in which the individual integrates values, roles, and self-concept. Trust versus mistrust belongs to infancy, industry versus inferiority to school age, and generativity versus stagnation to middle adulthood.',
    strategy: 'Erikson in order: trust, autonomy, initiative, industry, identity, intimacy, generativity, integrity.' },

  { id: 'HPM-017', cat: 'hpm', sub: 'Postpartum', type: 'mc', difficulty: 2,
    stem: 'A client 4 hours postpartum has saturated two perineal pads in 30 minutes. Her fundus is firm at the umbilicus and midline. What should the nurse suspect?',
    options: [
      'Uterine atony',
      'A genital tract laceration',
      'Normal postpartum bleeding',
      'A full bladder'
    ],
    answer: [1],
    rationale: 'Heavy bleeding with a firm, well-contracted, midline fundus points to a laceration of the cervix, vagina, or perineum rather than atony, and the provider must be notified for inspection and repair. Atony produces a boggy uterus, and a full bladder displaces the fundus laterally.',
    strategy: 'Heavy bleeding plus firm fundus equals laceration. Heavy bleeding plus boggy fundus equals atony.' },

  { id: 'HPM-018', cat: 'hpm', sub: 'Newborn Care', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching new parents about umbilical cord care. Which instruction is correct?',
    options: [
      'Apply alcohol to the cord with every diaper change',
      'Keep the cord clean and dry, fold the diaper below it, and report redness, drainage, or foul odor',
      'Cover the cord with an occlusive dressing',
      'Pull gently on the cord daily to help it separate'
    ],
    answer: [1],
    rationale: 'Dry cord care with the diaper folded below to promote air drying is current practice and speeds separation, which occurs at 1 to 3 weeks. Routine alcohol is no longer recommended, occlusive dressings trap moisture, and traction on the cord causes bleeding and infection.',
    strategy: 'Dry cord care: clean, dry, exposed to air, diaper folded down. Report redness, drainage, or odor.' },

  { id: 'HPM-019', cat: 'hpm', sub: 'Health Screening', type: 'mc', difficulty: 2,
    stem: 'A nurse is counseling a 45-year-old client about preventive care. Which recommendation is appropriate?',
    options: [
      'Blood pressure screening only if symptoms develop',
      'Blood pressure measured at least annually, lipid screening, diabetes screening given the age, and immunization review',
      'No screening until age 60',
      'Annual chest radiographs for everyone'
    ],
    answer: [1],
    rationale: 'Routine adult preventive care includes periodic blood pressure, lipid, and glucose screening plus immunization review, because hypertension, dyslipidemia, and diabetes are asymptomatic for years. Symptom-triggered screening misses the preclinical window, and routine chest radiography is not a recommended screening test.',
    strategy: 'Screening detects disease before symptoms. Any option that says "only if symptoms" is wrong.' },

  { id: 'HPM-020', cat: 'hpm', sub: 'Lifestyle', type: 'mc', difficulty: 2,
    stem: 'A client who smokes one pack daily says, "I know I should quit but I have tried and failed twice." Which response is most therapeutic and effective?',
    options: [
      '"You need to try harder this time."',
      '"Most people who quit successfully make several attempts. What made it hard last time, and would you like to talk about medication and support options?"',
      '"If you do not quit, you will develop lung cancer."',
      '"Let me know when you are ready to quit."'
    ],
    answer: [1],
    rationale: 'Normalizing prior attempts, exploring specific barriers, and offering pharmacotherapy plus behavioral support reflect evidence-based cessation counseling and motivational interviewing. Exhortation, fear appeals, and passive deferral all reduce the likelihood of a further attempt.',
    strategy: 'Motivational interviewing: express empathy, roll with resistance, support self-efficacy. Never lecture or threaten.' },

  { id: 'HPM-021', cat: 'hpm', sub: 'Antepartum', type: 'mc', difficulty: 2,
    stem: 'A client at 32 weeks gestation reports painless bright red vaginal bleeding. What should the nurse avoid doing?',
    options: [
      'Assessing maternal vital signs',
      'Performing a digital vaginal examination',
      'Applying an external fetal monitor',
      'Establishing IV access'
    ],
    answer: [1],
    rationale: 'Painless bright red bleeding in the third trimester suggests placenta previa, and digital examination can perforate the placenta and cause catastrophic hemorrhage. Vital signs, external monitoring, and IV access are all appropriate while ultrasound localizes the placenta.',
    strategy: 'Third-trimester bleeding: no vaginal exam until placenta previa is ruled out by ultrasound.' },

  { id: 'HPM-022', cat: 'hpm', sub: 'Growth and Development', type: 'mc', difficulty: 2,
    stem: 'A nurse is preparing a 4-year-old for a procedure. Which approach is developmentally appropriate?',
    options: [
      'Explain the procedure in detail a week in advance',
      'Use simple concrete words, allow the child to handle safe equipment, and explain just before the procedure',
      'Tell the child the procedure will not hurt at all',
      'Explain the physiological rationale for the procedure'
    ],
    answer: [1],
    rationale: 'Preschoolers think concretely, have a limited sense of time, and benefit from brief, simple explanations immediately beforehand along with medical play. Advance notice creates prolonged anxiety, false reassurance destroys trust, and physiological explanations exceed their cognitive level.',
    strategy: 'Preparation timing by age: preschoolers just before, school-age a few days before, adolescents a week or more before.' },

  { id: 'HPM-023', cat: 'hpm', sub: 'Immunizations', type: 'mc', difficulty: 1,
    stem: 'Which vaccine is contraindicated in a client receiving high-dose corticosteroid therapy?',
    options: ['Inactivated influenza vaccine', 'Measles, mumps, and rubella vaccine', 'Tetanus, diphtheria, and pertussis vaccine', 'Pneumococcal polysaccharide vaccine'],
    answer: [1],
    rationale: 'MMR is a live attenuated vaccine and is contraindicated in significant immunosuppression, including high-dose corticosteroid therapy, because the attenuated virus can cause disease. Inactivated influenza, Tdap, and pneumococcal vaccines contain no live organisms and are safe.',
    strategy: 'Live vaccines: MMR, varicella, live intranasal influenza, rotavirus, yellow fever. All contraindicated with immunosuppression and pregnancy.' },

  { id: 'HPM-024', cat: 'hpm', sub: 'Aging', type: 'sata', difficulty: 1,
    stem: 'Which physiological changes are expected with normal aging? Select all that apply.',
    options: [
      'Decreased renal blood flow and glomerular filtration rate',
      'Reduced lung elasticity with decreased vital capacity',
      'Increased gastric acid production',
      'Decreased subcutaneous fat with impaired thermoregulation',
      'Slower peristalsis contributing to constipation',
      'Increased immune response to vaccination'
    ],
    answer: [0, 1, 3, 4],
    rationale: 'Aging reduces renal function, lung elasticity, subcutaneous insulation, and gastrointestinal motility. Gastric acid production decreases rather than increases, and immune responsiveness declines, which is why older adults need higher-dose or adjuvanted vaccines.',
    strategy: 'Nearly every organ system slows with age. Any option describing an increase in function is usually wrong.' },

  { id: 'HPM-025', cat: 'hpm', sub: 'Intrapartum', type: 'mc', difficulty: 2,
    stem: 'A laboring client\'s membranes rupture spontaneously. What is the nurse\'s first action?',
    options: [
      'Document the time and characteristics of the fluid',
      'Assess the fetal heart rate',
      'Check the client\'s temperature',
      'Notify the provider'
    ],
    answer: [1],
    rationale: 'Fetal heart rate assessment immediately after rupture detects cord prolapse or compression, which is the immediate life threat. Fluid characteristics, temperature monitoring for chorioamnionitis, and provider notification all follow the fetal assessment.',
    strategy: 'Membranes rupture: check the fetal heart rate first, then the fluid, then the time and temperature.' },

  { id: 'HPM-026', cat: 'hpm', sub: 'Newborn Care', type: 'mc', difficulty: 2,
    stem: 'A mother asks why her newborn received a vitamin K injection. What is the nurse\'s best explanation?',
    options: [
      '"It boosts your baby\'s immune system."',
      '"Newborns have low vitamin K levels because their intestines have not yet developed the bacteria that make it, and the injection prevents serious bleeding."',
      '"It prevents jaundice."',
      '"It is a vaccine against infection."'
    ],
    answer: [1],
    rationale: 'Newborns are born with a sterile gut and cannot synthesize vitamin K, placing them at risk for vitamin K deficiency bleeding, including intracranial hemorrhage. The injection is prophylaxis, not a vaccine, and does not affect immunity or bilirubin.',
    strategy: 'Newborn prophylaxis: vitamin K for bleeding, erythromycin eye ointment for gonococcal conjunctivitis, hepatitis B vaccine.' },

  { id: 'HPM-027', cat: 'hpm', sub: 'Health Screening', type: 'mc', difficulty: 3,
    stem: 'A nurse is performing a developmental screening on a 2-year-old. Which finding warrants referral?',
    options: [
      'Speaks in two-word phrases',
      'Does not respond to their name and makes no eye contact',
      'Walks up stairs holding a rail',
      'Engages in parallel play alongside other children'
    ],
    answer: [1],
    rationale: 'Absence of response to name and lack of eye contact are red flags for autism spectrum disorder requiring prompt referral. Two-word phrases, stair climbing with support, and parallel play are all age-appropriate for a 2-year-old.',
    strategy: 'Autism red flags: no babbling by 12 months, no words by 16 months, no two-word phrases by 24 months, no eye contact, or any loss of skills.' },

  { id: 'HPM-028', cat: 'hpm', sub: 'Postpartum', type: 'mc', difficulty: 2,
    stem: 'A breastfeeding client reports sore, cracked nipples. Which intervention should the nurse recommend first?',
    options: [
      'Discontinue breastfeeding until healed',
      'Assess and correct the infant\'s latch, ensuring a wide mouth taking in areola rather than nipple alone',
      'Apply an antibiotic ointment',
      'Limit each feeding to 5 minutes per side'
    ],
    answer: [1],
    rationale: 'Nipple trauma nearly always results from a shallow latch, so correcting the latch resolves the cause. Stopping breastfeeding causes engorgement and reduces supply, antibiotics are not indicated without infection, and time limits do not address the mechanical problem.',
    strategy: 'Sore nipples equal a latch problem until proven otherwise. Watch a feeding before changing anything else.' },

  { id: 'HPM-029', cat: 'hpm', sub: 'Growth and Development', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a hospitalized 8-month-old. Which behavior indicates normal development?',
    options: [
      'Cries and clings to the parent when the nurse approaches',
      'Goes willingly to any adult',
      'Shows no reaction to the parent leaving',
      'Speaks in short sentences'
    ],
    answer: [0],
    rationale: 'Stranger anxiety emerges around 6 to 8 months and indicates the infant has formed a secure attachment and can distinguish familiar from unfamiliar people. Indiscriminate friendliness and indifference to parental departure are concerning, and sentences are not expected until about age 2.',
    strategy: 'Stranger anxiety at 6 to 8 months and separation anxiety through toddlerhood are signs of healthy attachment, not problems.' },

  { id: 'HPM-030', cat: 'hpm', sub: 'Lifestyle', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching a client about physical activity recommendations. Which statement is accurate for a healthy adult?',
    options: [
      '"Aim for at least 150 minutes of moderate-intensity aerobic activity weekly plus muscle strengthening on 2 or more days."',
      '"Exercise once a week for an hour is sufficient."',
      '"Only vigorous exercise provides health benefits."',
      '"Strength training should be avoided after age 50."'
    ],
    answer: [0],
    rationale: 'Standard guidance recommends at least 150 minutes of moderate-intensity aerobic activity weekly, or 75 minutes of vigorous activity, plus muscle-strengthening activity on two or more days. Weekly single sessions are insufficient, moderate activity confers substantial benefit, and resistance training is especially valuable in older adults for preserving bone and muscle.',
    strategy: '150 minutes moderate plus two strength days is the number to remember.' },

  { id: 'HPM-031', cat: 'hpm', sub: 'Antepartum', type: 'mc', difficulty: 2,
    stem: 'A client at 24 weeks gestation has a 1-hour glucose challenge test result of 168 mg/dL. What should the nurse anticipate?',
    options: [
      'The result is normal and no further testing is needed',
      'A 3-hour oral glucose tolerance test will be scheduled to confirm or exclude gestational diabetes',
      'Immediate insulin initiation',
      'Repeat of the same 1-hour test next week'
    ],
    answer: [1],
    rationale: 'A 1-hour value at or above the screening threshold, commonly 130 to 140 mg/dL, is a positive screen requiring the diagnostic 3-hour tolerance test. It does not itself establish the diagnosis, so insulin is not started, and repeating the screening test does not provide diagnostic information.',
    strategy: 'The 1-hour test screens, the 3-hour test diagnoses. A positive screen is never a diagnosis.' },

  { id: 'HPM-032', cat: 'hpm', sub: 'Newborn Care', type: 'mc', difficulty: 2,
    stem: 'A nurse assesses a 36-hour-old newborn and finds a total serum bilirubin of 14 mg/dL with jaundice to the abdomen. The newborn is breastfeeding 6 times in 24 hours. What should the nurse recommend?',
    options: [
      'Discontinue breastfeeding and switch to formula',
      'Increase breastfeeding frequency to 8 to 12 times in 24 hours and follow bilirubin levels, anticipating phototherapy if the level crosses treatment thresholds',
      'Place the newborn in direct sunlight at a window',
      'Give the newborn water between feedings'
    ],
    answer: [1],
    rationale: 'Frequent feeding promotes stooling, which is the primary route of bilirubin elimination, and levels are plotted against hour-specific thresholds to determine the need for phototherapy. Formula substitution is unnecessary, window sunlight risks burns and hypothermia without effective light spectrum, and water supplementation reduces caloric intake and worsens jaundice.',
    strategy: 'Bilirubin leaves in the stool. More feeding equals more stooling equals lower bilirubin. Never give water.' },

  { id: 'HPM-033', cat: 'hpm', sub: 'Family Planning', type: 'mc', difficulty: 2,
    stem: 'A client asks about the effectiveness of natural family planning. Which statement should the nurse include?',
    options: [
      '"It is as effective as an intrauterine device."',
      '"It requires consistent tracking of cycle signs and has a higher typical-use failure rate than hormonal or long-acting methods."',
      '"It provides protection against sexually transmitted infections."',
      '"It works equally well regardless of cycle regularity."'
    ],
    answer: [1],
    rationale: 'Fertility awareness methods depend on accurate daily observation and consistent abstinence during the fertile window, resulting in a typical-use failure rate substantially higher than long-acting reversible contraception. They confer no protection against infection and are less reliable with irregular cycles.',
    strategy: 'Distinguish perfect use from typical use. Methods that require daily user action always have a wider gap between the two.' },

  { id: 'HPM-034', cat: 'hpm', sub: 'Health Screening', type: 'mc', difficulty: 2,
    stem: 'A nurse is performing a skin assessment and notes a mole that has become asymmetric with irregular borders, variable color, and a diameter of 8 mm. What should the nurse do?',
    options: [
      'Reassure the client that moles change with age',
      'Refer the client for prompt dermatologic evaluation and possible biopsy',
      'Advise the client to monitor it for 6 months',
      'Recommend an over-the-counter removal product'
    ],
    answer: [1],
    rationale: 'Asymmetry, border irregularity, color variation, and diameter over 6 mm are melanoma warning signs requiring prompt evaluation, since early excision is curative and delay is lethal. Reassurance, watchful waiting, and self-treatment all delay diagnosis.',
    strategy: 'ABCDE: Asymmetry, Border, Color, Diameter over 6 mm, Evolving. Any one warrants referral.' },

  { id: 'HPM-035', cat: 'hpm', sub: 'Aging', type: 'mc', difficulty: 2,
    stem: 'An 80-year-old client is admitted with pneumonia and becomes acutely confused overnight. Which explanation is most likely?',
    options: [
      'Early dementia is being revealed by the hospital environment',
      'Delirium related to infection, hypoxia, medications, or environmental disruption',
      'Normal aging',
      'Intentional attention-seeking behavior'
    ],
    answer: [1],
    rationale: 'Acute onset confusion with fluctuating course in an acutely ill older adult defines delirium, a medical emergency with reversible causes including infection, hypoxia, medications, pain, retention, and sleep disruption. Dementia develops gradually over months to years, confusion is never normal aging, and attributing it to behavior delays evaluation.',
    strategy: 'Acute and fluctuating equals delirium. Gradual and progressive equals dementia. Delirium is always a search for a cause.' },

  { id: 'HPM-036', cat: 'hpm', sub: 'Intrapartum', type: 'mc', difficulty: 3,
    stem: 'A nurse is monitoring a client in active labor. Contractions occur every 2 minutes, last 100 seconds, and the uterus does not fully relax between contractions. The client is receiving oxytocin. What should the nurse do first?',
    options: [
      'Increase the oxytocin rate to speed labor',
      'Discontinue the oxytocin infusion',
      'Encourage the client to push',
      'Document the pattern'
    ],
    answer: [1],
    rationale: 'Tachysystole with inadequate uterine relaxation compromises placental perfusion and risks uterine rupture, so oxytocin is stopped immediately, followed by repositioning, fluids, and oxygen as needed. Increasing the rate worsens it, pushing is inappropriate before full dilation, and documentation alone does not intervene.',
    strategy: 'Contractions longer than 90 seconds, closer than every 2 minutes, or without relaxation between mean stop the oxytocin.' },

  { id: 'HPM-037', cat: 'hpm', sub: 'Growth and Development', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching parents of a 15-month-old about nutrition. Which statement indicates understanding?',
    options: [
      '"I should expect my toddler to eat as much as last year because they are growing."',
      '"My toddler\'s appetite may decrease because growth slows after the first year, and small frequent nutritious offerings work best."',
      '"I will let my toddler drink a quart of milk daily to ensure calcium."',
      '"I should insist my toddler finish everything on the plate."'
    ],
    answer: [1],
    rationale: 'Physiologic anorexia of toddlerhood follows the marked slowing of growth after infancy, and small frequent nutrient-dense offerings match the toddler\'s appetite and autonomy needs. Excessive milk intake displaces iron-rich foods and causes anemia, and forcing plate completion creates mealtime conflict.',
    strategy: 'Toddlers eat less than infants proportionally. Limit milk to about 16 to 24 ounces daily to protect iron intake.' },

  { id: 'HPM-038', cat: 'hpm', sub: 'Postpartum', type: 'mc', difficulty: 2,
    stem: 'A client 3 weeks postpartum reports feeling worthless, unable to sleep even when the baby sleeps, and having no interest in the infant. What should the nurse do?',
    options: [
      'Reassure the client that baby blues are common and resolve on their own',
      'Screen for postpartum depression, assess for thoughts of harming self or the infant, and arrange prompt provider follow-up',
      'Advise the client to get more rest and recheck in a month',
      'Encourage the client to stop breastfeeding'
    ],
    answer: [1],
    rationale: 'Symptoms persisting beyond 2 weeks with anhedonia and worthlessness indicate postpartum depression rather than transient baby blues, and safety assessment plus prompt treatment referral is essential. Reassurance, delay, and unrelated advice about feeding all leave a treatable and potentially dangerous condition unaddressed.',
    strategy: 'Baby blues peak at day 5 and resolve by 2 weeks. Anything persisting past 2 weeks, or any anhedonia, is depression until screened.' },

  { id: 'HPM-039', cat: 'hpm', sub: 'Immunizations', type: 'mc', difficulty: 2,
    stem: 'A nurse is preparing to administer the first hepatitis B vaccine dose to a newborn. Which site is appropriate?',
    options: ['Deltoid muscle', 'Vastus lateralis muscle', 'Dorsogluteal muscle', 'Ventrogluteal muscle'],
    answer: [1],
    rationale: 'The vastus lateralis is the preferred intramuscular site for infants because it has the largest muscle mass in that age group and no major nerves or vessels. The deltoid is too small until about age 3, and gluteal sites are avoided in infants because of underdeveloped muscle and sciatic nerve proximity.',
    strategy: 'Infants get the vastus lateralis. Older children and adults get the deltoid or ventrogluteal.' },

  { id: 'HPM-040', cat: 'hpm', sub: 'Lifestyle', type: 'mc', difficulty: 2,
    stem: 'A client with a body mass index of 32 asks about weight loss. Which initial goal is most appropriate?',
    options: [
      'Lose 50 pounds in 3 months',
      'Lose 5 to 10 percent of current body weight over 6 months through modest calorie reduction and increased activity',
      'Follow a 600-calorie daily diet',
      'Eliminate all carbohydrates permanently'
    ],
    answer: [1],
    rationale: 'A 5 to 10 percent loss produces clinically meaningful improvements in blood pressure, glucose, and lipids and is achievable and sustainable. Rapid loss, very low calorie diets, and complete elimination of a macronutrient class are neither safe nor durable.',
    strategy: 'The evidence-based weight loss goal is 5 to 10 percent, at 1 to 2 pounds weekly.' },

  { id: 'HPM-041', cat: 'hpm', sub: 'Antepartum', type: 'mc', difficulty: 2,
    stem: 'A client at 8 weeks gestation asks about folic acid. Which information should the nurse provide?',
    options: [
      '"Folic acid prevents anemia only and can be started in the third trimester."',
      '"Folic acid reduces the risk of neural tube defects and is most important before conception and in the first trimester, when the neural tube closes."',
      '"Folic acid is only needed if you have a family history of birth defects."',
      '"Folic acid should be avoided during pregnancy."'
    ],
    answer: [1],
    rationale: 'The neural tube closes by about 28 days after conception, so adequate folate must be present before and during very early pregnancy. All people capable of pregnancy are advised to take 400 to 800 micrograms daily, with higher doses when a prior affected pregnancy occurred.',
    strategy: 'Folic acid works before you know you are pregnant. That is why supplementation is universal, not risk-based.' },

  { id: 'HPM-042', cat: 'hpm', sub: 'Health Screening', type: 'mc', difficulty: 2,
    stem: 'A nurse is conducting a hearing screening on a 4-year-old whose parents report frequent ear infections and inattentiveness. What is the most appropriate action?',
    options: [
      'Reassure the parents that inattention is normal for this age',
      'Refer the child for formal audiologic evaluation',
      'Recommend more discipline at home',
      'Wait until the child starts school'
    ],
    answer: [1],
    rationale: 'Recurrent otitis media causes conductive hearing loss that presents as inattention and can delay speech and language development, so formal audiologic testing is indicated. Reassurance, behavioral advice, and delay all risk permanent language deficits during a critical period.',
    strategy: 'Recurrent ear infections plus inattention or speech delay always means a hearing test, not a behavior problem.' },

  { id: 'HPM-043', cat: 'hpm', sub: 'Aging', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching an older adult about medication safety. Which principle is most important?',
    options: [
      '"Take medications from several prescribers without needing to tell each one."',
      '"Bring all your medications, including over-the-counter products and supplements, to every appointment so the full list can be reviewed."',
      '"Herbal supplements are natural and do not interact with prescriptions."',
      '"Stop taking a medication if you feel better."'
    ],
    answer: [1],
    rationale: 'A brown-bag review of every product the client takes reveals duplications, interactions, and inappropriate medications, which is essential given the polypharmacy and altered pharmacokinetics of aging. Uncoordinated prescribing, the assumption that supplements are inert, and self-discontinuation all cause harm.',
    strategy: 'Brown-bag every appointment. Supplements interact: St. John\'s wort, ginkgo, and garlic are common culprits.' },

  { id: 'HPM-044', cat: 'hpm', sub: 'Newborn Care', type: 'mc', difficulty: 2,
    stem: 'A nurse notes that a 2-day-old newborn has lost 6 percent of birth weight. What is the appropriate interpretation?',
    options: [
      'This is excessive and indicates a feeding problem requiring immediate formula supplementation',
      'This is within the expected range of up to about 7 to 10 percent, and feeding should continue to be supported and monitored',
      'This indicates dehydration requiring IV fluids',
      'This indicates a metabolic disorder'
    ],
    answer: [1],
    rationale: 'Newborns normally lose up to 7 to 10 percent of birth weight in the first days from fluid shifts and limited intake, regaining it by 10 to 14 days. Continued feeding support and weight monitoring are appropriate; intervention is considered when loss exceeds this range or weight is not regained on schedule.',
    strategy: 'Up to 10 percent loss is normal, back to birth weight by 2 weeks. Beyond that, investigate.' },

  { id: 'HPM-045', cat: 'hpm', sub: 'Growth and Development', type: 'mc', difficulty: 2,
    stem: 'A nurse is assessing an infant\'s anterior fontanel at 14 months and finds it still open. What is the appropriate action?',
    options: [
      'Document the finding as normal',
      'Report the finding for evaluation, since the anterior fontanel usually closes by 12 to 18 months but persistent widening warrants assessment',
      'Apply pressure to encourage closure',
      'Restrict fluids to reduce intracranial pressure'
    ],
    answer: [1],
    rationale: 'The anterior fontanel typically closes between 12 and 18 months, so an open fontanel at 14 months alone may be normal, but the finding is documented and monitored, with evaluation if it is enlarging or accompanied by other signs such as increasing head circumference. Manual pressure and fluid restriction are never appropriate.',
    strategy: 'Posterior fontanel closes by 2 to 3 months, anterior by 12 to 18 months. A bulging fontanel means raised pressure, a sunken one means dehydration.' }
  ,
  { id: 'HPM-046', cat: 'hpm', sub: 'Antepartum', type: 'mc', difficulty: 3,
    stem: 'A client at 34 weeks gestation reports sudden severe abdominal pain with a rigid, board-like uterus and dark red vaginal bleeding. What should the nurse suspect?',
    options: ['Placenta previa', 'Placental abruption', 'Normal labor', 'Round ligament pain'],
    answer: [1],
    rationale: 'Painful bleeding with a rigid tender uterus characterizes placental abruption, a life-threatening emergency for mother and fetus requiring immediate delivery preparation. Placenta previa produces painless bright red bleeding with a soft uterus, labor contractions are intermittent with relaxation between, and round ligament pain is brief and positional.',
    strategy: 'Abruption is painful with a hard uterus. Previa is painless with a soft uterus. That single distinction answers most third-trimester bleeding questions.' },

  { id: 'HPM-047', cat: 'hpm', sub: 'Postpartum', type: 'sata', difficulty: 2,
    stem: 'Which findings in a postpartum client suggest a developing complication? Select all that apply.',
    options: [
      'Temperature of 38.4 degrees Celsius on postpartum day 2',
      'Unilateral calf pain with swelling and warmth',
      'Fundus firm at the level of the umbilicus on day 1',
      'Foul-smelling lochia',
      'Diaphoresis at night during the first week',
      'Blood pressure of 156/98 mmHg with headache'
    ],
    answer: [0, 1, 3, 5],
    rationale: 'Fever after the first 24 hours, unilateral calf findings suggesting deep vein thrombosis, foul lochia indicating endometritis, and hypertension with headache suggesting postpartum preeclampsia are all complications. A firm fundus at the umbilicus on day 1 and postpartum diaphoresis from fluid mobilization are normal.',
    strategy: 'Postpartum complications cluster as bleeding, infection, clot, and preeclampsia. Preeclampsia can appear for the first time after delivery.' },

  { id: 'HPM-048', cat: 'hpm', sub: 'Growth and Development', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a hospitalized school-age child. Which intervention best supports this child\'s developmental needs?',
    options: [
      'Restrict visitors so the child can rest',
      'Provide opportunities for schoolwork, allow choices in the daily routine, and encourage contact with peers',
      'Discourage questions about the illness',
      'Make all decisions for the child to reduce stress'
    ],
    answer: [1],
    rationale: 'School-age children are in Erikson\'s industry versus inferiority stage and need accomplishment, competence, and peer connection. Schoolwork, meaningful choices, and peer contact support this. Isolation, suppressed questions, and removed autonomy foster inferiority and anxiety.',
    strategy: 'School-age children need to accomplish things and keep up with peers. Give them tasks and choices.' },

  { id: 'HPM-049', cat: 'hpm', sub: 'Health Screening', type: 'mc', difficulty: 2,
    stem: 'A nurse is screening adolescents for scoliosis. Which finding suggests scoliosis?',
    options: [
      'Symmetric shoulder heights when standing',
      'Asymmetric rib prominence when bending forward at the waist',
      'Equal leg lengths',
      'A straight spine when bending forward'
    ],
    answer: [1],
    rationale: 'The Adams forward bend test reveals a rib hump caused by vertebral rotation, the hallmark of structural scoliosis. Symmetric shoulders, equal leg lengths, and a straight spine on forward flexion are normal findings.',
    strategy: 'Scoliosis screening is the forward bend test. You are looking for a rib hump, not a curved spine standing up.' },

  { id: 'HPM-050', cat: 'hpm', sub: 'Lifestyle', type: 'mc', difficulty: 2,
    stem: 'A nurse is counseling a client about alcohol use. The client reports drinking 4 to 5 drinks most evenings. Which response is most appropriate?',
    options: [
      '"That is within safe limits for an adult."',
      '"That level exceeds recommended limits and raises risks for liver disease, hypertension, and injury. Can we talk about what alcohol does for you and what changes might feel possible?"',
      '"You are an alcoholic and need treatment immediately."',
      '"Just cut back to two drinks and you will be fine."'
    ],
    answer: [1],
    rationale: 'Naming the health risks factually while inviting the client\'s own perspective is effective brief intervention. The reported intake far exceeds moderate drinking limits, labeling is stigmatizing and shuts down disclosure, and issuing a directive without exploring readiness rarely produces change.',
    strategy: 'Brief intervention: give feedback, express concern without labels, explore ambivalence, and let the client set the goal.' },

  { id: 'HPM-051', cat: 'hpm', sub: 'Intrapartum', type: 'mc', difficulty: 2,
    stem: 'A nurse assesses a laboring client and finds the cervix dilated 6 cm, effaced 90 percent, with the fetus at 0 station. Which stage and phase of labor is this?',
    options: [
      'First stage, latent phase',
      'First stage, active phase',
      'Second stage',
      'Third stage'
    ],
    answer: [1],
    rationale: 'The active phase of the first stage begins at about 6 cm and continues to full dilation at 10 cm. The latent phase precedes 6 cm, the second stage begins at full dilation and ends with birth, and the third stage is placental delivery.',
    strategy: 'First stage ends at 10 cm, second stage ends with the baby, third stage ends with the placenta, fourth stage is the first hours after.' },

  { id: 'HPM-052', cat: 'hpm', sub: 'Newborn Care', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a newborn whose mother has diabetes. Which complication should the nurse monitor for most closely in the first hours of life?',
    options: ['Hyperglycemia', 'Hypoglycemia', 'Hypertension', 'Polycythemia only'],
    answer: [1],
    rationale: 'Fetal hyperinsulinemia develops in response to maternal hyperglycemia and persists after the maternal glucose supply is cut at birth, producing hypoglycemia within the first hours. These infants are also at risk for macrosomia, birth injury, polycythemia, and hypocalcemia, but hypoglycemia is the immediate threat.',
    strategy: 'Infant of a diabetic mother: check the glucose early and often. Jitteriness and poor feeding are the signs.' },

  { id: 'HPM-053', cat: 'hpm', sub: 'Immunizations', type: 'mc', difficulty: 2,
    stem: 'A nurse is reviewing an adult client\'s immunization history. Which vaccine should be recommended for a healthy 68-year-old?',
    options: [
      'No vaccines are needed after age 65',
      'Annual influenza vaccine, pneumococcal vaccination per current schedule, recombinant zoster vaccine, and Td or Tdap booster every 10 years',
      'Only the influenza vaccine',
      'Live attenuated zoster vaccine only'
    ],
    answer: [1],
    rationale: 'Adults 65 and older need annual influenza vaccination, pneumococcal protection, recombinant zoster vaccine in two doses, and a tetanus-containing booster every 10 years, along with COVID-19 and RSV vaccination per current recommendations. The live zoster vaccine has been replaced by the recombinant product.',
    strategy: 'Older adult vaccines: influenza yearly, pneumococcal, recombinant zoster, Td every 10 years.' },

  { id: 'HPM-054', cat: 'hpm', sub: 'Aging', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for an older adult who reports urinary incontinence. Which initial nursing action is most appropriate?',
    options: [
      'Insert an indwelling urinary catheter',
      'Assess for reversible contributing factors such as infection, medications, constipation, and mobility limitations',
      'Recommend absorbent products and no further evaluation',
      'Restrict fluids to reduce episodes'
    ],
    answer: [1],
    rationale: 'Incontinence is a symptom, not a diagnosis, and often has reversible causes captured by the DIAPPERS framework. Catheterization introduces infection risk and does not treat the cause, absorbent products manage without addressing it, and fluid restriction causes concentrated irritating urine and dehydration.',
    strategy: 'DIAPPERS: Delirium, Infection, Atrophic changes, Pharmaceuticals, Psychological, Excess output, Restricted mobility, Stool impaction.' },

  { id: 'HPM-055', cat: 'hpm', sub: 'Antepartum', type: 'mc', difficulty: 2,
    stem: 'A client at 12 weeks gestation reports severe nausea and vomiting with a 6 percent weight loss since pregnancy began and ketones in the urine. What condition should the nurse suspect?',
    options: ['Normal morning sickness', 'Hyperemesis gravidarum', 'Gastroenteritis', 'Gestational diabetes'],
    answer: [1],
    rationale: 'Persistent vomiting with weight loss over 5 percent, dehydration, ketosis, and electrolyte disturbance defines hyperemesis gravidarum, which requires IV rehydration, electrolyte correction, and antiemetic therapy. Ordinary morning sickness does not cause weight loss or ketosis.',
    strategy: 'Morning sickness becomes hyperemesis when there is weight loss, ketonuria, or electrolyte derangement.' },

  { id: 'HPM-056', cat: 'hpm', sub: 'Growth and Development', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching parents of a 6-month-old about introducing solid foods. Which instruction is appropriate?',
    options: [
      'Introduce several new foods at once to expand variety quickly',
      'Introduce one new single-ingredient food at a time and wait 3 to 5 days before adding another to identify reactions',
      'Add honey to cereal for sweetness',
      'Give cow\'s milk as the primary beverage'
    ],
    answer: [1],
    rationale: 'Single-ingredient introduction spaced several days apart allows identification of allergic reactions. Honey is avoided before 12 months because of infant botulism risk, and cow\'s milk is not given as a primary beverage before 12 months because it causes gastrointestinal blood loss and iron deficiency.',
    strategy: 'No honey and no cow\'s milk before 12 months. New foods one at a time, 3 to 5 days apart.' },

  { id: 'HPM-057', cat: 'hpm', sub: 'Postpartum', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching a client about the return of fertility after childbirth. Which statement is accurate?',
    options: [
      '"You cannot become pregnant while breastfeeding."',
      '"Ovulation can resume before your first menstrual period, so contraception should be discussed before you resume intercourse."',
      '"You cannot become pregnant for 6 months after delivery."',
      '"Fertility returns only after your period returns."'
    ],
    answer: [1],
    rationale: 'Ovulation precedes the first postpartum menses, so pregnancy is possible before any period occurs. Lactational amenorrhea provides some protection only under strict conditions of exclusive frequent breastfeeding, amenorrhea, and infant under 6 months, and is not reliable otherwise.',
    strategy: 'Ovulation comes before menstruation. Never rely on the absence of a period as contraception.' },

  { id: 'HPM-058', cat: 'hpm', sub: 'Health Screening', type: 'mc', difficulty: 2,
    stem: 'A nurse is screening a client for depression using a standardized tool. The client scores in the moderate range and reports passive thoughts that life is not worth living. What is the priority action?',
    options: [
      'Schedule a follow-up appointment in 4 weeks',
      'Directly assess for suicidal ideation, plan, means, and intent, and arrange same-day evaluation',
      'Provide educational material about depression',
      'Recommend increased exercise and recheck in 3 months'
    ],
    answer: [1],
    rationale: 'Any expression suggesting that life is not worth living requires immediate direct assessment of ideation, plan, means, and intent, followed by same-day mental health evaluation and a safety plan. Delayed follow-up, educational material, and lifestyle advice all fail to address an active safety risk.',
    strategy: 'Always ask directly about suicide. Asking does not plant the idea, and vague statements require specific questions.' },

  { id: 'HPM-059', cat: 'hpm', sub: 'Family Planning', type: 'mc', difficulty: 2,
    stem: 'A client using a levonorgestrel intrauterine device asks what to report to the provider. Which symptom requires prompt evaluation?',
    options: [
      'Lighter menstrual periods after several months',
      'Severe pelvic pain with fever and foul vaginal discharge',
      'Occasional spotting in the first 3 months',
      'Absence of periods after a year of use'
    ],
    answer: [1],
    rationale: 'Pelvic pain with fever and foul discharge suggests pelvic inflammatory disease or perforation requiring urgent evaluation. Lighter periods, early irregular spotting, and eventual amenorrhea are all expected effects of a hormonal intrauterine device.',
    strategy: 'IUD warning signs (PAINS): Period late, Abdominal pain, Infection signs, Not feeling well, String missing.' },

  { id: 'HPM-060', cat: 'hpm', sub: 'Lifestyle', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching a client about sun protection. Which statement indicates the teaching was effective?',
    options: [
      '"A base tan protects me from burning."',
      '"I will use broad-spectrum sunscreen with SPF 30 or higher, reapply every 2 hours and after swimming, and seek shade between 10 a.m. and 4 p.m."',
      '"Sunscreen is only needed on sunny days."',
      '"Tanning beds are a safe alternative to sun exposure."'
    ],
    answer: [1],
    rationale: 'Broad-spectrum SPF 30 or higher applied generously and reapplied, combined with shade seeking during peak ultraviolet hours and protective clothing, is the standard recommendation. A base tan provides negligible protection, ultraviolet radiation penetrates clouds, and tanning beds are classified as carcinogenic.',
    strategy: 'Sun safety: SPF 30 broad spectrum, reapply every 2 hours, shade at midday, no tanning beds.' },

  { id: 'HPM-061', cat: 'hpm', sub: 'Intrapartum', type: 'mc', difficulty: 2,
    stem: 'A client receives epidural anesthesia during labor. Fifteen minutes later her blood pressure falls to 82/46 mmHg. What is the priority nursing action?',
    options: [
      'Place the client supine and elevate the head',
      'Turn the client to a lateral position, increase the IV fluid rate, administer oxygen, and notify the anesthesia provider',
      'Encourage the client to push',
      'Discontinue fetal monitoring'
    ],
    answer: [1],
    rationale: 'Sympathetic blockade from epidural anesthesia causes vasodilation and hypotension that reduces uteroplacental perfusion. Lateral positioning relieves aortocaval compression, fluids expand volume, oxygen supports the fetus, and the anesthesia provider may give a vasopressor. Supine positioning worsens the hypotension.',
    strategy: 'Epidural hypotension: turn her on her side, open the fluids, give oxygen, call anesthesia.' },

  { id: 'HPM-062', cat: 'hpm', sub: 'Newborn Care', type: 'mc', difficulty: 2,
    stem: 'A nurse observes a newborn with a respiratory rate of 48, periodic breathing with pauses of 10 seconds, and pink color. What should the nurse do?',
    options: [
      'Initiate resuscitation',
      'Document the finding as within normal limits and continue routine monitoring',
      'Administer oxygen',
      'Notify the provider immediately'
    ],
    answer: [1],
    rationale: 'A newborn respiratory rate of 30 to 60 and periodic breathing with pauses under 20 seconds without color change or bradycardia are normal. Apnea is defined as a pause of 20 seconds or longer, or a shorter pause with cyanosis or bradycardia, and that would require intervention.',
    strategy: 'Newborn vitals: respirations 30 to 60, heart rate 110 to 160. Pauses under 20 seconds without color change are normal.' },

  { id: 'HPM-063', cat: 'hpm', sub: 'Growth and Development', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a toddler who screams and stiffens during a temper tantrum. What is the most appropriate guidance for the parents?',
    options: [
      'Give the child what they want to end the tantrum',
      'Ensure safety, ignore the behavior calmly without giving attention, and offer praise when the child regains control',
      'Punish the child physically',
      'Reason with the child about why the behavior is inappropriate'
    ],
    answer: [1],
    rationale: 'Tantrums are a normal expression of the toddler\'s drive for autonomy with limited language and self-regulation. Safety plus consistent non-reinforcement extinguishes the behavior, and praise for recovery builds regulation. Giving in reinforces tantrums, physical punishment is harmful, and reasoning exceeds toddler cognition.',
    strategy: 'Toddler tantrums: keep them safe, stay calm, do not negotiate, and praise the recovery.' },

  { id: 'HPM-064', cat: 'hpm', sub: 'Antepartum', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching a pregnant client about fetal movement counting. Which instruction is correct?',
    options: [
      '"Count movements once a week."',
      '"Choose a consistent time daily when the baby is usually active, lie on your side, and report if you do not feel 10 movements within 2 hours."',
      '"Only count if you feel worried."',
      '"Movements should decrease as pregnancy progresses."'
    ],
    answer: [1],
    rationale: 'Daily kick counts at a consistent time in the left lateral position, with a threshold of 10 movements in 2 hours, provide a practical screen for fetal well-being. Weekly or symptom-triggered counting misses declines, and a genuine decrease in movement is always abnormal even though the character of movement changes near term.',
    strategy: 'Kick counts: same time daily, left side, 10 movements in 2 hours, call if fewer.' },

  { id: 'HPM-065', cat: 'hpm', sub: 'Aging', type: 'mc', difficulty: 2,
    stem: 'A nurse is assessing an older adult\'s functional status. Which tool best measures the ability to live independently?',
    options: [
      'Glasgow Coma Scale',
      'Assessment of activities of daily living and instrumental activities of daily living',
      'Body mass index',
      'Visual analog pain scale'
    ],
    answer: [1],
    rationale: 'Basic activities of daily living such as bathing, dressing, toileting, transferring, continence, and feeding, together with instrumental activities such as managing medications, finances, transportation, and meals, define the capacity for independent living. The other tools measure consciousness, nutrition status, and pain rather than function.',
    strategy: 'Functional assessment predicts outcomes in older adults better than any single diagnosis.' },

  { id: 'HPM-066', cat: 'hpm', sub: 'Health Screening', type: 'mc', difficulty: 2,
    stem: 'A 60-year-old client with a 30-pack-year smoking history who quit 5 years ago asks about lung cancer screening. What should the nurse advise?',
    options: [
      'No screening is indicated because the client quit',
      'Annual low-dose CT screening is recommended for adults 50 to 80 with a 20-pack-year history who currently smoke or quit within the past 15 years',
      'Annual chest radiography is the recommended screen',
      'Screening begins at age 75'
    ],
    answer: [1],
    rationale: 'This client meets the criteria for annual low-dose CT screening, which reduces lung cancer mortality. Chest radiography does not reduce mortality and is not recommended, and risk remains elevated for years after quitting.',
    strategy: 'Lung screening: age 50 to 80, 20 pack-years, currently smoking or quit within 15 years, annual low-dose CT.' },

  { id: 'HPM-067', cat: 'hpm', sub: 'Postpartum', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching a client about perineal care after a second-degree laceration. Which instruction is correct?',
    options: [
      'Wipe from back to front after voiding',
      'Use a peri-bottle with warm water after each void, pat dry front to back, and apply ice packs during the first 24 hours',
      'Take tub baths starting immediately',
      'Use a tampon for lochia'
    ],
    answer: [1],
    rationale: 'Peri-bottle rinsing, front-to-back drying, and ice for the first 24 hours reduce infection and swelling, with sitz baths introduced afterward for comfort. Back-to-front wiping introduces rectal flora, tub baths are deferred, and tampons are avoided because they introduce infection into the healing uterus.',
    strategy: 'Postpartum perineal care: front to back, ice first 24 hours then heat, pads not tampons.' },

  { id: 'HPM-068', cat: 'hpm', sub: 'Immunizations', type: 'mc', difficulty: 2,
    stem: 'A parent refuses all vaccines for their child. What is the nurse\'s most appropriate response?',
    options: [
      'Report the parent to child protective services',
      'Explore the parent\'s specific concerns, provide accurate information, document the discussion and refusal, and keep the conversation open at future visits',
      'Tell the parent the child cannot be seen in the clinic',
      'Vaccinate the child without the parent\'s knowledge'
    ],
    answer: [1],
    rationale: 'Respectful exploration of specific concerns with accurate information preserves the therapeutic relationship and is the approach most likely to change the decision over time. Reporting, refusing care, and covert vaccination are all inappropriate and would end any opportunity to influence the decision.',
    strategy: 'Vaccine hesitancy responds to listening and repeated conversation, not to confrontation or dismissal from the practice.' },

  { id: 'HPM-069', cat: 'hpm', sub: 'Growth and Development', type: 'mc', difficulty: 3,
    stem: 'A nurse is assessing a 5-year-old at a well-child visit. Which finding warrants further evaluation?',
    options: [
      'Speech that is fully intelligible to strangers',
      'Inability to hop on one foot or copy a square',
      'Asking many "why" questions',
      'Having an imaginary friend'
    ],
    answer: [1],
    rationale: 'By age 5 a child should hop on one foot and copy a square, so inability suggests gross and fine motor delay requiring evaluation. Fully intelligible speech, persistent questioning, and imaginary companions are all normal at this age.',
    strategy: 'Drawing milestones: circle at 3, cross at 4, square at 4 to 5, triangle at 5 to 6.' },

  { id: 'HPM-070', cat: 'hpm', sub: 'Lifestyle', type: 'mc', difficulty: 2,
    stem: 'A client with a family history of osteoporosis asks how to reduce risk. Which recommendation is most appropriate?',
    options: [
      'Avoid all weight-bearing exercise to protect the bones',
      'Perform regular weight-bearing and resistance exercise, ensure adequate calcium and vitamin D, avoid smoking, and limit alcohol',
      'Take high-dose calcium supplements without regard to dietary intake',
      'Rely on medication alone'
    ],
    answer: [1],
    rationale: 'Mechanical loading from weight-bearing and resistance exercise stimulates bone formation, and adequate calcium and vitamin D with avoidance of smoking and excessive alcohol addresses the modifiable risk factors. Avoiding loading accelerates bone loss, and excessive supplementation without assessing dietary intake risks hypercalcemia and kidney stones.',
    strategy: 'Bone health: load the skeleton, feed it calcium and vitamin D, and remove smoking and excess alcohol.' },

  { id: 'HPM-071', cat: 'hpm', sub: 'Antepartum', type: 'mc', difficulty: 2,
    stem: 'A nurse is reviewing prenatal laboratory results. The client is Rh negative and the antibody screen is negative at 28 weeks. What should the nurse anticipate?',
    options: [
      'No intervention is needed',
      'Administration of Rho(D) immune globulin at 28 weeks and again within 72 hours after delivery if the newborn is Rh positive',
      'Immediate delivery',
      'Exchange transfusion for the client'
    ],
    answer: [1],
    rationale: 'Routine antepartum Rho(D) immune globulin at 28 weeks plus a postpartum dose when the newborn is Rh positive prevents maternal sensitization that would endanger future pregnancies. It is also given after any potentially sensitizing event such as amniocentesis, bleeding, or trauma.',
    strategy: 'Rh negative mother plus negative antibody screen equals RhoGAM at 28 weeks and within 72 hours of delivery.' },

  { id: 'HPM-072', cat: 'hpm', sub: 'Newborn Care', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching parents about newborn safety in the car. Which instruction is correct?',
    options: [
      'Place the car seat in the front passenger seat for easy monitoring',
      'Use a rear-facing car seat in the back seat, positioned so the harness is at or below the shoulders and snug at the collarbone',
      'Add thick padding behind the infant for comfort',
      'Turn the seat forward-facing once the infant reaches 6 months'
    ],
    answer: [1],
    rationale: 'Rear-facing installation in the back seat protects the head, neck, and spine, with harness straps at or below the shoulders in the rear-facing position and a snug fit. Front seat placement exposes the infant to airbag injury, aftermarket padding compromises harness performance, and rear-facing continues to at least age 2.',
    strategy: 'Rear-facing, back seat, snug harness, no bulky clothing or aftermarket inserts.' },

  { id: 'HPM-073', cat: 'hpm', sub: 'Health Screening', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching a client about breast self-awareness. Which statement is most accurate?',
    options: [
      '"You must perform a structured self-examination on the same day each month or screening is useless."',
      '"Become familiar with how your breasts normally look and feel, and report any new lump, skin dimpling, nipple change, or unusual discharge promptly."',
      '"Self-examination replaces the need for mammography."',
      '"Breast changes are rarely significant."'
    ],
    answer: [1],
    rationale: 'Current guidance emphasizes breast self-awareness and prompt reporting of changes rather than a rigidly scheduled examination technique, and it complements rather than replaces imaging. Dismissing breast changes delays diagnosis.',
    strategy: 'Self-awareness plus imaging. Neither replaces the other, and any new change gets reported.' },

  { id: 'HPM-074', cat: 'hpm', sub: 'Aging', type: 'mc', difficulty: 2,
    stem: 'An older adult client is prescribed diphenhydramine for sleep. What is the nurse\'s most appropriate action?',
    options: [
      'Administer as ordered since it is available over the counter',
      'Discuss with the provider, since anticholinergic antihistamines are on the Beers list for older adults because of confusion, falls, urinary retention, and next-day sedation',
      'Double the dose for effectiveness',
      'Give it with a benzodiazepine for better sleep'
    ],
    answer: [1],
    rationale: 'Diphenhydramine is potentially inappropriate in older adults because anticholinergic effects cause delirium, falls, constipation, and urinary retention, and tolerance to its sedating effect develops quickly. Over-the-counter status does not imply safety, and combining it with a benzodiazepine compounds every risk.',
    strategy: 'Beers list highlights: benzodiazepines, first-generation antihistamines, anticholinergics, NSAIDs, and sliding-scale insulin in older adults.' },

  { id: 'HPM-075', cat: 'hpm', sub: 'Intrapartum', type: 'mc', difficulty: 2,
    stem: 'A nurse notes variable decelerations on a fetal monitor tracing. What is the most likely cause?',
    options: ['Head compression', 'Umbilical cord compression', 'Uteroplacental insufficiency', 'Maternal fever'],
    answer: [1],
    rationale: 'Variable decelerations that vary in shape, depth, and timing result from cord compression, and the initial intervention is maternal repositioning to relieve it, with amnioinfusion considered if they persist. Head compression causes early decelerations, and uteroplacental insufficiency causes late decelerations.',
    strategy: 'VEAL CHOP: Variable-Cord, Early-Head, Acceleration-Okay, Late-Placental.' },

  { id: 'HPM-076', cat: 'hpm', sub: 'Growth and Development', type: 'mc', difficulty: 2,
    stem: 'A nurse is discussing safety with the parent of a 2-year-old. Which hazard should be emphasized most?',
    options: [
      'Sports injuries',
      'Drowning, including in bathtubs, buckets, and pools, since a toddler can drown in very shallow water in seconds',
      'Occupational injuries',
      'Sun exposure only'
    ],
    answer: [1],
    rationale: 'Drowning is a leading cause of death in toddlers, who are mobile, curious, and top-heavy, and it can occur in as little as an inch of water within seconds. Constant direct supervision and four-sided pool fencing are the key measures. Sports and occupational injuries pertain to older ages.',
    strategy: 'Toddler mortality: drowning, motor vehicle, burns, poisoning, choking. Supervision is the intervention.' },

  { id: 'HPM-077', cat: 'hpm', sub: 'Postpartum', type: 'mc', difficulty: 3,
    stem: 'A nurse assesses a client 6 hours after a cesarean birth. Which finding requires immediate provider notification?',
    options: [
      'Incisional pain rated 5 out of 10',
      'Urine output of 20 mL over the last 2 hours with a firm fundus and heavy lochia',
      'Absent bowel sounds',
      'Sleepiness after receiving analgesia'
    ],
    answer: [1],
    rationale: 'Oliguria combined with heavy lochia suggests hypovolemia from ongoing blood loss and requires immediate evaluation. Moderate incisional pain, absent bowel sounds in the early postoperative period, and mild sedation after analgesia are all expected.',
    strategy: 'Falling urine output plus heavy bleeding is hemorrhage until proven otherwise, regardless of blood pressure.' },

  { id: 'HPM-078', cat: 'hpm', sub: 'Lifestyle', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching a client about the DASH eating plan for blood pressure. Which instruction is consistent with this plan?',
    options: [
      'Increase intake of processed meats and canned soups',
      'Emphasize fruits, vegetables, whole grains, low-fat dairy, nuts, and lean protein while limiting sodium, saturated fat, and added sugars',
      'Eliminate all carbohydrates',
      'Restrict all dairy products'
    ],
    answer: [1],
    rationale: 'DASH emphasizes potassium, calcium, magnesium, and fiber from plant foods and low-fat dairy while restricting sodium to 2,300 mg or less, often 1,500 mg, along with saturated fat. Processed meats and canned soups are major sodium sources, and neither carbohydrate elimination nor dairy restriction is part of the plan.',
    strategy: 'DASH is more potassium and calcium, less sodium and saturated fat. It lowers blood pressure comparably to a single medication.' },

  { id: 'HPM-079', cat: 'hpm', sub: 'Health Screening', type: 'mc', difficulty: 2,
    stem: 'A nurse is assessing an adolescent alone during a well visit. Which approach best facilitates disclosure of risk behaviors?',
    options: [
      'Ask questions with the parent present for accuracy',
      'Explain confidentiality and its limits, then use an organized psychosocial interview covering home, education, activities, drugs, sexuality, and safety',
      'Ask only about school performance',
      'Provide a checklist for the parent to complete'
    ],
    answer: [1],
    rationale: 'Confidential interviewing with a structured psychosocial framework such as HEEADSSS substantially increases disclosure of risk behaviors. Parental presence suppresses honest reporting, narrow questioning misses most risks, and parent-completed forms do not capture the adolescent\'s own experience.',
    strategy: 'HEEADSSS: Home, Education, Eating, Activities, Drugs, Sexuality, Suicide and depression, Safety. Always confidential, with limits explained first.' },

  { id: 'HPM-080', cat: 'hpm', sub: 'Antepartum', type: 'mc', difficulty: 2,
    stem: 'A client at 20 weeks gestation asks about safe exercise. Which recommendation is appropriate?',
    options: [
      '"Avoid all exercise during pregnancy."',
      '"Continue moderate activity such as walking or swimming for about 150 minutes weekly, avoid supine exercise after the first trimester, stay hydrated, and stop if you have bleeding, contractions, or dizziness."',
      '"Only bed rest is safe."',
      '"Exercise as intensely as possible to prepare for labor."'
    ],
    answer: [1],
    rationale: 'Moderate exercise in uncomplicated pregnancy improves outcomes. Supine positions after the first trimester compress the vena cava, contact sports and fall-risk activities are avoided, and warning signs prompt stopping. Neither complete inactivity nor maximal exertion is recommended.',
    strategy: 'Pregnancy exercise: moderate, no supine after the first trimester, no contact sports, stop for bleeding, contractions, or dizziness.' },

  { id: 'HPM-081', cat: 'hpm', sub: 'Newborn Care', type: 'sata', difficulty: 1,
    stem: 'Which reflexes should be present in a healthy full-term newborn? Select all that apply.',
    options: ['Moro', 'Rooting', 'Babinski with fanning of the toes', 'Palmar grasp', 'Voluntary hand-to-mouth control', 'Tonic neck'],
    answer: [0, 1, 2, 3, 5],
    rationale: 'Moro, rooting, palmar grasp, tonic neck, and a Babinski response with toe fanning are all normal newborn reflexes that disappear over the first months. Voluntary coordinated hand-to-mouth control is a later developmental skill, not a reflex.',
    strategy: 'A positive Babinski is normal in infants and abnormal after about 2 years, when it signals upper motor neuron disease.' },

  { id: 'HPM-082', cat: 'hpm', sub: 'Aging', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching an older adult with presbycusis. Which communication technique is most effective?',
    options: [
      'Shout to ensure the client hears',
      'Face the client, speak clearly at a slightly slower pace in a lower pitch, and reduce background noise',
      'Speak in a higher pitch',
      'Communicate only in writing'
    ],
    answer: [1],
    rationale: 'Presbycusis impairs high-frequency hearing first, so lowering pitch, facing the client to allow visual cues, and eliminating competing noise improve comprehension. Shouting distorts speech and raises pitch, higher pitch worsens the problem, and exclusive written communication is unnecessary and isolating.',
    strategy: 'Age-related hearing loss takes the high frequencies. Lower your pitch, do not raise your volume.' },

  { id: 'HPM-083', cat: 'hpm', sub: 'Growth and Development', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for an adolescent with a chronic illness who is not adhering to the treatment regimen. Which approach is most likely to improve adherence?',
    options: [
      'Have the parents take full control of the regimen',
      'Involve the adolescent in decisions, simplify the regimen where possible, connect them with peer support, and address the impact on appearance and social life',
      'Warn the adolescent about long-term complications repeatedly',
      'Report the nonadherence to the school'
    ],
    answer: [1],
    rationale: 'Adolescent adherence improves when autonomy is respected, regimens fit daily life, peers are involved, and the immediate social and appearance-related concerns that actually drive behavior are addressed. Parental takeover triggers resistance, distant complications carry little motivational weight at this stage, and school reporting breaches confidentiality.',
    strategy: 'Adolescents respond to now, not to complications in 20 years. Address appearance, independence, and peers.' },

  { id: 'HPM-084', cat: 'hpm', sub: 'Family Planning', type: 'mc', difficulty: 2,
    stem: 'A client asks about emergency contraception after unprotected intercourse 2 days ago. What should the nurse explain?',
    options: [
      '"It is too late for any option."',
      '"Levonorgestrel is most effective the sooner it is taken and can be used up to 72 hours, ulipristal up to 120 hours, and a copper intrauterine device up to 5 days is the most effective option."',
      '"Emergency contraception terminates an established pregnancy."',
      '"You must wait for your next period to do anything."'
    ],
    answer: [1],
    rationale: 'Several effective options remain available within this window, with efficacy declining over time for levonorgestrel and the copper intrauterine device being the most effective. Emergency contraception prevents or delays ovulation; it does not disrupt an established pregnancy.',
    strategy: 'Emergency contraception windows: levonorgestrel 72 hours, ulipristal 120 hours, copper IUD 5 days and most effective.' },

  { id: 'HPM-085', cat: 'hpm', sub: 'Health Screening', type: 'mc', difficulty: 2,
    stem: 'A nurse is screening a client for intimate partner violence. Which approach is most appropriate?',
    options: [
      'Ask in front of the accompanying partner to observe the interaction',
      'Ask privately, with the partner out of the room, using direct nonjudgmental questions and offering resources regardless of the answer',
      'Only ask if there are visible injuries',
      'Avoid the topic unless the client raises it'
    ],
    answer: [1],
    rationale: 'Screening requires privacy, since asking in a partner\'s presence endangers the client and prevents disclosure. Direct nonjudgmental questions with universal resource provision reach people who are not yet ready to disclose. Visible injury is present in only a minority of cases.',
    strategy: 'Never screen for violence with the partner in the room. Offer resources whether or not the client discloses.' },

  { id: 'HPM-086', cat: 'hpm', sub: 'Postpartum', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client who is not breastfeeding and reports breast engorgement on postpartum day 3. Which intervention is appropriate?',
    options: [
      'Express milk to relieve pressure',
      'Wear a well-fitting supportive bra, apply cold compresses, avoid nipple stimulation, and take analgesics as needed',
      'Apply warm compresses and massage the breasts',
      'Pump every 3 hours'
    ],
    answer: [1],
    rationale: 'For a client suppressing lactation, support, cold, avoidance of stimulation, and analgesia allow milk production to cease. Expression, warmth, massage, and pumping all stimulate further production and prolong engorgement.',
    strategy: 'Suppressing lactation equals cold, support, no stimulation. Encouraging lactation equals warmth, massage, frequent emptying.' },

  { id: 'HPM-087', cat: 'hpm', sub: 'Lifestyle', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching a client about sleep hygiene for insomnia. Which recommendation is appropriate?',
    options: [
      'Watch television in bed until sleepy',
      'Keep a consistent sleep and wake schedule, use the bed only for sleep, avoid caffeine and alcohol in the evening, and get out of bed if not asleep within about 20 minutes',
      'Take a long nap in the afternoon',
      'Exercise vigorously right before bedtime'
    ],
    answer: [1],
    rationale: 'Stimulus control and consistent scheduling are the core behavioral treatments for insomnia. Screens and wakefulness in bed weaken the bed-sleep association, long naps reduce sleep drive, alcohol fragments sleep, and vigorous late exercise delays sleep onset.',
    strategy: 'Sleep hygiene: same schedule, bed for sleep only, no caffeine or alcohol late, get up if awake past 20 minutes.' },

  { id: 'HPM-088', cat: 'hpm', sub: 'Growth and Development', type: 'mc', difficulty: 2,
    stem: 'A nurse is assessing a 3-year-old whose parents report the child was speaking in sentences at 24 months but has since stopped talking and no longer makes eye contact. What is the most appropriate action?',
    options: [
      'Reassure the parents that some children are quiet',
      'Refer urgently for developmental and medical evaluation, since loss of previously acquired skills is always abnormal',
      'Recommend more social activities',
      'Recheck at the next annual visit'
    ],
    answer: [1],
    rationale: 'Regression, the loss of previously acquired developmental skills, is never normal and requires prompt evaluation for autism spectrum disorder, hearing loss, seizure disorders such as Landau-Kleffner syndrome, and neurodegenerative conditions. Reassurance and delay forfeit critical intervention time.',
    strategy: 'Any loss of a skill the child once had is an urgent referral. Delay can be watched; regression cannot.' },

  { id: 'HPM-089', cat: 'hpm', sub: 'Antepartum', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching a pregnant client about common discomforts. Which self-care measure is appropriate for heartburn?',
    options: [
      'Lie down immediately after eating',
      'Eat small frequent meals, avoid spicy and fatty foods, remain upright for at least an hour after eating, and avoid eating close to bedtime',
      'Take sodium bicarbonate regularly',
      'Skip meals to reduce acid production'
    ],
    answer: [1],
    rationale: 'Progesterone relaxes the lower esophageal sphincter and the growing uterus raises intra-abdominal pressure, so smaller meals, upright positioning, and trigger avoidance are effective. Lying down promotes reflux, sodium bicarbonate causes sodium retention and alkalosis, and skipping meals compromises nutrition without helping.',
    strategy: 'Pregnancy heartburn: small meals, stay upright, avoid triggers, nothing to eat before bed.' },

  { id: 'HPM-090', cat: 'hpm', sub: 'Health Screening', type: 'mc', difficulty: 2,
    stem: 'A nurse is providing preconception counseling to a client with type 1 diabetes who wishes to conceive. Which teaching point is most important?',
    options: [
      '"You should avoid pregnancy entirely."',
      '"Achieving good glycemic control before conception substantially reduces the risk of congenital anomalies, because organ formation occurs in the first 8 weeks."',
      '"Glucose control matters only in the third trimester."',
      '"You should stop insulin during pregnancy."'
    ],
    answer: [1],
    rationale: 'Organogenesis is complete by about 8 weeks, often before pregnancy is recognized, so preconception glycemic control is what prevents cardiac, neural tube, and skeletal anomalies. Pregnancy is achievable with planning, later control matters for macrosomia rather than malformation, and insulin is continued with dose adjustments throughout.',
    strategy: 'For diabetes and pregnancy, the anomaly prevention window closes before most people know they are pregnant. Control comes first.' }
]
