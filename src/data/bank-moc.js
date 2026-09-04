export default [
  { id: 'MOC-001', cat: 'moc', sub: 'Delegation', type: 'mc', difficulty: 3,
    stem: 'A charge nurse on a medical-surgical unit is making assignments. Which client is most appropriate to assign to a licensed practical nurse (LPN)?',
    options: [
      'A client admitted 2 hours ago with new-onset atrial fibrillation receiving an IV diltiazem infusion',
      'A client with a well-established colostomy who needs reinforcement of pouch-changing technique',
      'A client who is 1 hour postoperative from a thyroidectomy',
      'A client newly diagnosed with type 1 diabetes who requires initial insulin teaching'
    ],
    answer: [1],
    rationale: 'The LPN scope covers stable clients with predictable outcomes, including reinforcement of teaching the RN has already begun. A titrated IV antiarrhythmic infusion, the first postoperative hours after thyroidectomy (airway and hemorrhage risk), and initial teaching all require RN assessment and judgment.',
    strategy: 'Give the LPN stable and predictable. Keep unstable clients, the initial assessment, and the initial teaching with the RN.' },

  { id: 'MOC-002', cat: 'moc', sub: 'Delegation', type: 'sata', difficulty: 2,
    stem: 'A nurse is delegating tasks to unlicensed assistive personnel (UAP). Which tasks may appropriately be delegated? Select all that apply.',
    options: [
      'Measuring and recording vital signs on a stable postoperative client',
      'Assisting a client with a bed bath',
      'Evaluating whether a client tolerated ambulation',
      'Obtaining a clean-catch urine specimen',
      'Reinforcing to a client that fluids should be encouraged',
      'Performing the admission skin assessment'
    ],
    answer: [0, 1, 3, 4],
    rationale: 'Vital signs on stable clients, hygiene, specimen collection, and repeating instructions the nurse has already given are standard UAP tasks. Evaluation of a client response and any initial or admission assessment require nursing judgment and cannot be delegated.',
    strategy: 'The nursing process itself — assess, diagnose, plan, evaluate — never delegates. Only implementation of stable, routine tasks does.' },

  { id: 'MOC-003', cat: 'moc', sub: 'Prioritization', type: 'mc', difficulty: 3,
    stem: 'A nurse receives report on four clients. Which client should the nurse assess first?',
    options: [
      'A client with pneumonia whose oxygen saturation is 91% on 2 L nasal cannula',
      'A client 1 day post-op who rates incisional pain 7 out of 10',
      'A client with a chest tube whose drainage system shows continuous vigorous bubbling in the water seal chamber',
      'A client with cirrhosis whose abdominal girth increased 2 cm since yesterday'
    ],
    answer: [2],
    rationale: 'Continuous vigorous bubbling in the water seal chamber signals an air leak in the system or a pneumothorax that is not resolving, an airway and breathing emergency. The saturation of 91% is low but not critical, pain and a slow rise in girth are important but neither is immediately life-threatening.',
    strategy: 'Airway and breathing beat circulation, and any of those beat comfort. "Continuous bubbling in the water seal" is always an abnormal finding worth acting on.' },

  { id: 'MOC-004', cat: 'moc', sub: 'Advance Directives', type: 'mc', difficulty: 3,
    stem: 'A client with a valid living will that declines resuscitation tells the nurse, "If my heart stops, I want you to try everything." What should the nurse do first?',
    options: [
      'Honor the living will because it is a legal document',
      'Notify the provider so the code status can be revised to reflect the client\'s current wishes',
      'Ask the family which decision they prefer',
      'Document the statement and take no further action'
    ],
    answer: [1],
    rationale: 'A competent client may revoke or change an advance directive at any time, verbally included, and the current expressed wish takes priority over the earlier document. The nurse notifies the provider so the orders and directive are updated. Family preference does not override a competent client, and documenting alone leaves a dangerous mismatch in the record.',
    strategy: 'A competent client\'s current voice always outranks a document they signed earlier.' },

  { id: 'MOC-005', cat: 'moc', sub: 'Informed Consent', type: 'mc', difficulty: 2,
    stem: 'A client scheduled for a bowel resection tells the nurse, "I signed the form, but I still do not understand what part of my colon they are removing." What is the nurse\'s best action?',
    options: [
      'Explain the surgical procedure using a diagram',
      'Reassure the client that the surgeon is highly experienced',
      'Notify the surgeon that the client has questions before the procedure',
      'Ask the client to sign a second consent form'
    ],
    answer: [2],
    rationale: 'Informed consent requires the provider performing the procedure to supply the information; the nurse witnesses the signature and confirms understanding. When understanding is absent, the nurse stops the process and notifies the surgeon. Explaining the procedure exceeds the nurse\'s role here, and reassurance or another signature does not create informed consent.',
    strategy: 'The provider informs, the nurse witnesses. Any gap in understanding goes back to the provider, not around them.' },

  { id: 'MOC-006', cat: 'moc', sub: 'Confidentiality', type: 'sata', difficulty: 2,
    stem: 'Which nurse actions represent a breach of client confidentiality? Select all that apply.',
    options: [
      'Discussing a client\'s laboratory results with the assigned respiratory therapist',
      'Leaving a client\'s chart open on a workstation in the hallway',
      'Telling a client\'s employer the reason for the hospitalization when the employer calls',
      'Posting a photograph of a wound with no identifying features on a personal social media account',
      'Reporting a suspected case of child abuse to the state agency',
      'Discussing an interesting case with a colleague in a crowded elevator'
    ],
    answer: [1, 2, 3, 5],
    rationale: 'Unattended records, disclosure to an employer without authorization, posting any clinical image without consent, and conversations in public spaces all breach confidentiality. Sharing information with a member of the care team who needs it for treatment is permitted, and mandatory abuse reporting is a legal exception to confidentiality.',
    strategy: 'Ask two questions: does this person need the information to care for the client, and can anyone else overhear or see it?' },

  { id: 'MOC-007', cat: 'moc', sub: 'Prioritization', type: 'order', difficulty: 3,
    stem: 'A nurse arrives at the room of a client who is unresponsive and pulseless. Place the actions in the order they should be performed.',
    options: [
      'Call for help and activate the emergency response system',
      'Check for a carotid pulse and assess breathing simultaneously for no more than 10 seconds',
      'Begin chest compressions at 100 to 120 per minute',
      'Attach the defibrillator or AED and analyze the rhythm',
      'Establish IV access for medication administration'
    ],
    answer: [1, 0, 2, 3, 4],
    rationale: 'Current basic life support sequencing confirms unresponsiveness with a rapid simultaneous pulse and breathing check of no more than 10 seconds, then calls for help and the defibrillator, then starts compressions, then applies the defibrillator as soon as it arrives. IV access comes after the circulation and defibrillation priorities are addressed.',
    strategy: 'CAB, not ABC, in cardiac arrest: confirm, call, compress, then defibrillate.' },

  { id: 'MOC-008', cat: 'moc', sub: 'Advocacy', type: 'mc', difficulty: 2,
    stem: 'A nurse observes a provider preparing to insert a central line without performing hand hygiene or applying a full sterile barrier. What is the nurse\'s most appropriate action?',
    options: [
      'Complete an incident report after the procedure',
      'Stop the procedure and state that the central line bundle has not been completed',
      'Mention the omission to the charge nurse after the procedure',
      'Say nothing because the provider is responsible for their own technique'
    ],
    answer: [1],
    rationale: 'Every member of the team is empowered and expected to halt a procedure when a safety step is skipped. Stopping the line insertion prevents a catheter-related bloodstream infection before it happens. Reporting after the fact, escalating later, or staying silent all leave the client exposed to a preventable harm.',
    strategy: 'When harm is about to occur and you can prevent it, act now. Reports and escalation come after the client is safe.' },

  { id: 'MOC-009', cat: 'moc', sub: 'Continuity of Care', type: 'mc', difficulty: 2,
    stem: 'A nurse is giving hand-off report using the SBAR format. Which statement belongs in the recommendation section?',
    options: [
      '"Mr. Alvarez is a 68-year-old admitted 2 days ago with community-acquired pneumonia."',
      '"His temperature is 38.9 degrees Celsius and his respiratory rate is 28."',
      '"I think he may be developing sepsis."',
      '"He needs a repeat lactate drawn and the rapid response team notified if his pressure drops below 90 systolic."'
    ],
    answer: [3],
    rationale: 'Recommendation states what the nurse wants done and by when. The introduction of the client is situation, the vital signs are background and assessment data, and the impression that sepsis is developing is the assessment.',
    strategy: 'S is what is happening now, B is the story, A is what you think it means, R is what you want the other person to do.' },

  { id: 'MOC-010', cat: 'moc', sub: 'Ethics', type: 'mc', difficulty: 2,
    stem: 'A nurse withholds information about a poor prognosis because the family requests it, even though the competent client has asked directly about the results. Which ethical principle is the nurse violating?',
    options: ['Beneficence', 'Autonomy', 'Nonmaleficence', 'Justice'],
    answer: [1],
    rationale: 'Autonomy is the client\'s right to self-determination, which requires access to the information needed to make decisions about their own care. Beneficence is acting for the client\'s good, nonmaleficence is avoiding harm, and justice concerns fair distribution of resources.',
    strategy: 'Autonomy questions turn on "whose decision is it?" The competent client\'s, every time.' },

  { id: 'MOC-011', cat: 'moc', sub: 'Assignment', type: 'mc', difficulty: 3,
    stem: 'A nurse floated from labor and delivery is assigned to a medical unit. Which client assignment is most appropriate for this nurse?',
    options: [
      'A client receiving continuous bladder irrigation after a prostatectomy',
      'A client on a heparin infusion for a pulmonary embolism',
      'A client with stable diabetes admitted for cellulitis of the lower leg',
      'A client receiving their first dose of an antineoplastic agent'
    ],
    answer: [2],
    rationale: 'A floated nurse should receive the most stable clients whose care draws on general nursing skills. Cellulitis with stable diabetes fits. Continuous bladder irrigation, titrated anticoagulation, and first-dose chemotherapy all require unit-specific competencies the labor and delivery nurse may not hold.',
    strategy: 'Float nurses get the client whose care any competent RN could give. Specialty equipment and titrated drips stay with the unit staff.' },

  { id: 'MOC-012', cat: 'moc', sub: 'Legal Rights', type: 'mc', difficulty: 3,
    stem: 'A nurse discovers that a medication was given to the wrong client. The client shows no adverse effects. What should the nurse do first?',
    options: [
      'Complete an incident report',
      'Assess the client and notify the provider',
      'Document the error in the client\'s medical record',
      'Inform the charge nurse at the end of the shift'
    ],
    answer: [1],
    rationale: 'Client safety comes first: assess for effects and notify the provider so any needed monitoring or treatment can begin. The incident report and documentation follow, and reporting must be immediate rather than deferred to the end of the shift.',
    strategy: 'After any error, the sequence is client, provider, paperwork. Never paperwork first.' },

  { id: 'MOC-013', cat: 'moc', sub: 'Prioritization', type: 'mc', difficulty: 3,
    stem: 'A nurse is caring for four clients. Which finding requires the most immediate intervention?',
    options: [
      'A client with diabetes whose blood glucose is 248 mg/dL',
      'A client 4 hours post cardiac catheterization with a rapidly enlarging groin hematoma',
      'A client with COPD whose oxygen saturation is 89% on room air',
      'A client with a nasogastric tube reporting nausea'
    ],
    answer: [1],
    rationale: 'A rapidly expanding hematoma after femoral access indicates active arterial bleeding and impending hemorrhagic shock, requiring immediate manual pressure. A glucose of 248 is elevated but not an emergency, 89% saturation is expected in many clients with COPD, and nausea with an NG tube suggests the tube needs checking but is not life-threatening.',
    strategy: '"Rapidly enlarging," "expanding," and "increasing" turn an ordinary finding into an emergency.' },

  { id: 'MOC-014', cat: 'moc', sub: 'Case Management', type: 'mc', difficulty: 2,
    stem: 'A client who lives alone will be discharged after a stroke with residual left-sided weakness and difficulty preparing meals. Which referral is most appropriate?',
    options: [
      'Hospice services',
      'Home health aide and home-delivered meals',
      'Skilled nursing facility placement',
      'Outpatient psychiatric services'
    ],
    answer: [1],
    rationale: 'The client has functional deficits in activities of daily living but no evidence of needing 24-hour skilled care, so in-home support with an aide and meal delivery keeps them in the least restrictive setting. Hospice requires a terminal prognosis, facility placement is more restrictive than needed, and nothing suggests a psychiatric need.',
    strategy: 'Discharge planning aims for the least restrictive environment that keeps the client safe.' },

  { id: 'MOC-015', cat: 'moc', sub: 'Supervision', type: 'mc', difficulty: 2,
    stem: 'A nurse is supervising a graduate nurse caring for a client with a nasogastric tube connected to low intermittent suction. Which action by the graduate nurse requires the supervising nurse to intervene?',
    options: [
      'Verifying tube placement by checking the pH of gastric aspirate',
      'Irrigating the tube with 30 mL of normal saline',
      'Providing oral care every 2 hours',
      'Clamping the tube and connecting it to continuous suction to improve drainage'
    ],
    answer: [3],
    rationale: 'A single-lumen or vented NG tube placed to low intermittent suction should not be switched to continuous suction, which can pull gastric mucosa into the tube and cause erosion and bleeding. Checking pH, irrigating with saline, and frequent oral care are all correct.',
    strategy: 'On "which action requires intervention" items, hunt for the one that is wrong or unsafe, not the three that are right.' },

  { id: 'MOC-016', cat: 'moc', sub: 'Quality Improvement', type: 'mc', difficulty: 1,
    stem: 'A unit has seen a rise in falls among clients over 75. Which action best reflects a quality improvement approach?',
    options: [
      'Counsel the nurses who were assigned to clients who fell',
      'Review the circumstances of each fall to identify common contributing factors',
      'Apply restraints to all clients over 75 at night',
      'Increase the frequency of incident report audits by management'
    ],
    answer: [1],
    rationale: 'Quality improvement examines the system rather than the individual, so aggregating fall data to find shared contributing factors is the correct first step. Counseling individual nurses is punitive and misses systemic causes, blanket restraint use is unsafe and violates client rights, and auditing reports alone does not change practice.',
    strategy: 'QI asks "what in the system allowed this?" not "who is at fault?"' },

  { id: 'MOC-017', cat: 'moc', sub: 'Legal Rights', type: 'mc', difficulty: 2,
    stem: 'A confused older adult repeatedly pulls at their IV line. The provider orders soft wrist restraints. Which nursing action is required?',
    options: [
      'Apply the restraints and check the client every 4 hours',
      'Attempt and document less restrictive alternatives before applying restraints',
      'Secure the restraints to the side rails so they move with the bed',
      'Obtain a standing restraint order valid for the length of the admission'
    ],
    answer: [1],
    rationale: 'Restraints are a last resort; alternatives such as diversion, family presence, moving the client nearer the station, and camouflaging the line must be tried and documented first. Restrained clients need assessment far more often than every 4 hours, restraints tie to the bed frame rather than side rails, and standing or as-needed restraint orders are prohibited.',
    strategy: 'Restraint questions: least restrictive first, never PRN, never to the side rail.' },

  { id: 'MOC-018', cat: 'moc', sub: 'Collaboration', type: 'mc', difficulty: 2,
    stem: 'A client recovering from a stroke has difficulty swallowing thin liquids without coughing. Which referral should the nurse initiate?',
    options: ['Physical therapy', 'Speech-language pathology', 'Occupational therapy', 'Respiratory therapy'],
    answer: [1],
    rationale: 'Speech-language pathologists evaluate swallowing and recommend diet texture and liquid consistency modifications. Physical therapy addresses mobility and gait, occupational therapy addresses activities of daily living, and respiratory therapy manages airway and ventilation rather than swallowing.',
    strategy: 'Speech therapy owns swallowing as well as speech. Coughing on liquids means dysphagia screening.' },

  { id: 'MOC-019', cat: 'moc', sub: 'Delegation', type: 'mc', difficulty: 2,
    stem: 'Which task is the nurse permitted to delegate to unlicensed assistive personnel?',
    options: [
      'Applying a sequential compression device to a client on bed rest',
      'Assessing a client\'s pain level before administering an analgesic',
      'Teaching a client to use an incentive spirometer for the first time',
      'Adjusting the flow rate of a client\'s oxygen based on saturation readings'
    ],
    answer: [0],
    rationale: 'Applying sequential compression devices is a routine, standardized task within the UAP scope. Pain assessment, initial teaching, and any titration of therapy based on clinical data require nursing assessment and judgment.',
    strategy: 'If the task requires a judgment call about what to do next, it is not delegable.' },

  { id: 'MOC-020', cat: 'moc', sub: 'Prioritization', type: 'mc', difficulty: 3,
    stem: 'During a mass-casualty triage, which client should the nurse tag as requiring immediate care?',
    options: [
      'A client with a closed femur fracture and stable vital signs',
      'A client with an open airway obstruction and stridor',
      'A client with fixed dilated pupils and agonal respirations after massive head trauma',
      'A client with superficial partial-thickness burns to both forearms'
    ],
    answer: [1],
    rationale: 'In disaster triage, immediate (red) tags go to clients with life-threatening injuries that are survivable with prompt intervention, which describes an airway obstruction. A closed femur fracture with stable vitals is delayed (yellow), superficial burns are minor (green), and the client with devastating head trauma and agonal respirations is expectant (black) when resources are scarce.',
    strategy: 'Disaster triage inverts everyday priorities: treat those who will live only if treated now, not the sickest person in the room.' },

  { id: 'MOC-021', cat: 'moc', sub: 'Informed Consent', type: 'sata', difficulty: 3,
    stem: 'Which situations permit treatment without obtaining the client\'s informed consent? Select all that apply.',
    options: [
      'An unconscious client arrives after a motor vehicle crash with a tension pneumothorax',
      'A client refuses a blood transfusion for religious reasons',
      'A 16-year-old emancipated minor requests routine care',
      'A client is unconscious and no family member can be reached before emergency surgery for a ruptured aneurysm',
      'A client with dementia has a court-appointed guardian who is unavailable for an elective procedure'
    ],
    answer: [0, 3],
    rationale: 'Implied consent applies in a life-threatening emergency when the client cannot consent and no surrogate is available. A competent client\'s refusal must be honored. An emancipated minor consents for themselves, so consent is obtained rather than waived. An elective procedure is not an emergency and must wait for the guardian.',
    strategy: 'Consent is waived only when delay would cost life or limb and no one can speak for the client.' },

  { id: 'MOC-022', cat: 'moc', sub: 'Prioritization', type: 'mc', difficulty: 3,
    stem: 'A nurse begins the shift with four clients. Which should the nurse see first?',
    options: [
      'A client who needs discharge teaching before leaving at noon',
      'A client requesting pain medication for chronic back pain',
      'A client with a new order for a blood transfusion to start this hour',
      'A client with type 1 diabetes who reports feeling shaky and diaphoretic'
    ],
    answer: [3],
    rationale: 'Shakiness and diaphoresis in a client with type 1 diabetes point to hypoglycemia, which can progress to seizure and coma within minutes. Discharge teaching, chronic pain management, and starting a scheduled transfusion are all important but none is time-critical in the same way.',
    strategy: 'Acute and unstable outranks scheduled and chronic. Hypoglycemia is nearly always a "see first."' },

  { id: 'MOC-023', cat: 'moc', sub: 'Ethics', type: 'mc', difficulty: 2,
    stem: 'A nurse believes a client is being pressured by family to consent to a procedure the client does not want. Which action best demonstrates client advocacy?',
    options: [
      'Support the family\'s decision because they know the client best',
      'Ask the family to step out and speak with the client privately about their wishes',
      'Cancel the procedure and notify the surgeon',
      'Document the family conflict and continue with preparation'
    ],
    answer: [1],
    rationale: 'Advocacy begins with determining the client\'s actual wishes, which requires a private conversation free of family pressure. Deferring to family ignores autonomy, canceling the procedure exceeds the nurse\'s authority before the client\'s wishes are established, and documentation alone does not protect the client.',
    strategy: 'Before you act on someone\'s behalf, find out what they actually want — alone, if that is what it takes.' },

  { id: 'MOC-024', cat: 'moc', sub: 'Continuity of Care', type: 'sata', difficulty: 2,
    stem: 'Which elements should be included when the nurse transfers a client to another unit? Select all that apply.',
    options: [
      'Current code status',
      'Allergies and reactions',
      'Pending diagnostic tests and results not yet returned',
      'The nurse\'s personal opinion about the client\'s family',
      'Recent changes in condition and the last set of vital signs',
      'Lines, drains, and airway devices in place'
    ],
    answer: [0, 1, 2, 4, 5],
    rationale: 'A complete transfer report includes code status, allergies, pending tests, condition trends and vital signs, and all invasive devices. Personal opinions about a client or family are subjective, unprofessional, and can bias the receiving team.',
    strategy: 'Hand-off carries facts and pending items. Anything you would not want the client to read does not belong in it.' },

  { id: 'MOC-025', cat: 'moc', sub: 'Delegation', type: 'mc', difficulty: 2,
    stem: 'A nurse delegates ambulation of a postoperative client to a UAP. Which statement by the nurse best fulfills the responsibility of the delegating nurse?',
    options: [
      '"Please walk Mr. Chen in room 12 sometime this morning."',
      '"Walk Mr. Chen to the end of the hall and back with the walker, keep the gait belt on, and tell me right away if he becomes dizzy or short of breath."',
      '"Get Mr. Chen up and moving as much as you can today."',
      '"Ambulate Mr. Chen and document how it went in the chart."'
    ],
    answer: [1],
    rationale: 'Effective delegation specifies the task, the method, the limits, and exactly what to report back. The other options leave the distance, equipment, safety measures, and reporting criteria undefined, which is how delegated tasks go wrong.',
    strategy: 'Delegate the right task, to the right person, with the right directions and the right feedback expectation.' },

  { id: 'MOC-026', cat: 'moc', sub: 'Legal Rights', type: 'mc', difficulty: 2,
    stem: 'A client with schizophrenia who was admitted voluntarily states they want to leave the hospital against medical advice. The nurse notes the client is not currently a danger to self or others. What should the nurse do?',
    options: [
      'Explain that voluntary clients may not leave until the provider discharges them',
      'Notify the provider and follow the facility procedure for discharge against medical advice',
      'Place the client on one-to-one observation until they change their mind',
      'Initiate involuntary commitment paperwork'
    ],
    answer: [1],
    rationale: 'A voluntarily admitted client who is not a danger to self or others retains the right to leave, generally after a written request and a defined notice period. The nurse notifies the provider and follows the AMA process. Refusing release, forced observation, and commitment without meeting the legal criteria constitute false imprisonment.',
    strategy: 'Voluntary means voluntary. Detention requires a demonstrated danger and a legal process.' },

  { id: 'MOC-027', cat: 'moc', sub: 'Prioritization', type: 'order', difficulty: 3,
    stem: 'A client\'s cardiac monitor shows ventricular fibrillation and the client is unresponsive. Place the nurse\'s actions in priority order.',
    options: [
      'Confirm unresponsiveness and absence of a pulse',
      'Call for help and request the crash cart and defibrillator',
      'Begin high-quality chest compressions',
      'Defibrillate with the recommended energy setting as soon as the device is ready',
      'Resume compressions immediately after the shock'
    ],
    answer: [0, 1, 2, 3, 4],
    rationale: 'Always confirm that the rhythm on the monitor matches the client, since artifact and lead disconnection mimic lethal rhythms. Then summon help and the defibrillator, start compressions without delay, shock as soon as the defibrillator is charged, and resume compressions immediately without pausing to recheck the pulse.',
    strategy: 'Treat the client, not the monitor. Confirm first, then compress, then shock.' },

  { id: 'MOC-028', cat: 'moc', sub: 'Case Management', type: 'mc', difficulty: 2,
    stem: 'A client with heart failure has been readmitted three times in 2 months. Which intervention by the case manager is most likely to reduce further readmissions?',
    options: [
      'Extending the length of the current hospital stay',
      'Arranging a home visit within 48 hours of discharge and a follow-up appointment within 7 days',
      'Providing a written list of dietary restrictions at discharge',
      'Requesting a psychiatric consultation'
    ],
    answer: [1],
    rationale: 'Early post-discharge contact catches weight gain, medication confusion, and worsening symptoms while they are still manageable at home, and is the intervention with the strongest evidence against heart failure readmission. A longer stay does not address what happens at home, written material alone is rarely sufficient, and there is no indication for psychiatric consultation.',
    strategy: 'Repeat readmissions are usually a transition-of-care problem: who checks on this person, and how soon?' },

  { id: 'MOC-029', cat: 'moc', sub: 'Ethics', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client whose religious beliefs prohibit blood products. The client\'s hemoglobin is 6.2 g/dL and the client remains alert and refuses transfusion. What is the nurse\'s appropriate action?',
    options: [
      'Administer the blood once the client falls asleep',
      'Ask the provider to obtain a court order',
      'Support the client\'s decision and discuss alternatives such as erythropoietin and volume expanders with the team',
      'Tell the client they will die without the transfusion'
    ],
    answer: [2],
    rationale: 'A competent adult may refuse any treatment, including a life-sustaining one. The nurse supports the decision and works with the team on acceptable alternatives. Covert administration is battery, a court order is not appropriate for a competent adult, and coercive framing violates autonomy.',
    strategy: 'Competent refusal is final. Your job becomes finding what the client will accept.' },

  { id: 'MOC-030', cat: 'moc', sub: 'Assignment', type: 'sata', difficulty: 3,
    stem: 'A charge nurse must assign clients to an RN with 6 months of experience. Which assignments are appropriate? Select all that apply.',
    options: [
      'A client with stable COPD receiving scheduled bronchodilators',
      'A client 2 days post total knee arthroplasty on oral analgesics',
      'A client in diabetic ketoacidosis on an insulin infusion requiring hourly titration',
      'A client with a new tracheostomy created 6 hours ago',
      'A client with a urinary tract infection receiving IV antibiotics'
    ],
    answer: [0, 1, 4],
    rationale: 'A newer RN should take clients who are stable and predictable. Stable COPD, an uncomplicated post-op day 2 joint replacement, and routine IV antibiotics all fit. A titrated insulin drip in DKA and a tracheostomy less than 24 hours old carry high risk of rapid deterioration and belong with an experienced nurse.',
    strategy: 'Experience level maps to instability. New nurse, stable client.' },

  { id: 'MOC-031', cat: 'moc', sub: 'Information Technology', type: 'mc', difficulty: 2,
    stem: 'A nurse realizes an entry was charted in the wrong client\'s electronic record. What is the correct action?',
    options: [
      'Delete the entry so the record is accurate',
      'Ask information technology to remove the entry permanently',
      'Follow facility policy to mark the entry as an error, add a correcting note, and chart in the correct record',
      'Leave the entry and add a note in the correct chart only'
    ],
    answer: [2],
    rationale: 'The legal medical record retains an audit trail; errors are marked and corrected rather than erased. The nurse annotates the erroneous entry per policy and documents in the correct chart. Deleting or purging entries destroys the record and can be construed as falsification.',
    strategy: 'Never erase, never delete. Mark, correct, and move on.' },

  { id: 'MOC-032', cat: 'moc', sub: 'Prioritization', type: 'mc', difficulty: 3,
    stem: 'A nurse in a clinic receives four phone messages. Which should be returned first?',
    options: [
      'A client on warfarin reporting a nosebleed that has not stopped in 45 minutes',
      'A client asking whether to take an antacid with their new medication',
      'A client requesting a refill of a blood pressure medication with 5 days remaining',
      'A client wanting to reschedule a routine physical'
    ],
    answer: [0],
    rationale: 'Prolonged bleeding in an anticoagulated client may signal a supratherapeutic INR and active hemorrhage risk, so it is the most urgent. The drug interaction question, the refill with days of supply remaining, and rescheduling are all non-urgent.',
    strategy: 'Telephone triage uses the same rule as the floor: bleeding, breathing, and rapidly changing symptoms come first.' },

  { id: 'MOC-033', cat: 'moc', sub: 'Supervision', type: 'mc', difficulty: 3,
    stem: 'A nurse observes a UAP transferring a client from bed to chair without locking the wheelchair brakes. What should the nurse do first?',
    options: [
      'Report the UAP to the nurse manager',
      'Intervene immediately to stop the transfer and lock the brakes',
      'Document the unsafe practice in the client\'s chart',
      'Provide in-service education to all UAPs on the unit'
    ],
    answer: [1],
    rationale: 'The client is at immediate risk of a fall, so the nurse stops the unsafe act right now. Teaching, documentation, and any escalation to the manager come after the client is safe.',
    strategy: 'When you see harm about to happen, your hands move before your pen does.' },

  { id: 'MOC-034', cat: 'moc', sub: 'Collaboration', type: 'mc', difficulty: 2,
    stem: 'A nurse disagrees with a provider\'s order for a medication dose that appears twice the usual range. What is the nurse\'s most appropriate action?',
    options: [
      'Administer the dose since the provider wrote the order',
      'Hold the medication and contact the provider to clarify the order',
      'Administer half the ordered dose',
      'Ask another nurse whether the dose seems reasonable and then decide'
    ],
    answer: [1],
    rationale: 'A nurse who administers a clearly unsafe order shares liability for the harm. The correct action is to hold the dose and clarify directly with the prescriber. Giving the dose, altering it unilaterally, or relying on a colleague\'s informal opinion are all unsafe.',
    strategy: 'Questionable order means clarify with the prescriber. Never modify an order on your own authority.' },

  { id: 'MOC-035', cat: 'moc', sub: 'Resource Management', type: 'mc', difficulty: 2,
    stem: 'A unit is short-staffed and the charge nurse must decide how to distribute assignments. Which approach best protects client safety?',
    options: [
      'Assign each nurse an equal number of clients regardless of acuity',
      'Assign clients based on acuity and required nursing time, and delegate appropriately to available UAPs',
      'Ask nurses to volunteer for the clients they prefer',
      'Close the unit to all new admissions until staffing improves'
    ],
    answer: [1],
    rationale: 'Acuity-based assignment matches nursing time to client need, which is what protects safety when numbers are tight. Equal client counts ignore workload differences, preference-based assignment leaves gaps, and closing to admissions is a management decision that does not solve the current shift.',
    strategy: 'Fair does not mean equal. Match the workload to the acuity.' },

  { id: 'MOC-036', cat: 'moc', sub: 'Legal Rights', type: 'mc', difficulty: 2,
    stem: 'A nurse tells a client who refuses a bath, "If you do not get in the shower, I will have to hold your meal tray." This statement is an example of which of the following?',
    options: ['Assault', 'Battery', 'Negligence', 'Defamation'],
    answer: [0],
    rationale: 'Assault is a threat that creates reasonable fear of harmful or offensive contact or coercion; no touching has occurred. Battery requires actual contact, negligence is a failure to meet the standard of care causing harm, and defamation is a damaging false statement to a third party.',
    strategy: 'Assault is the threat, battery is the touch. If nobody has been touched yet, it is assault.' },

  { id: 'MOC-037', cat: 'moc', sub: 'Prioritization', type: 'mc', difficulty: 3,
    stem: 'A nurse is caring for a group of clients. Which finding should be reported to the provider first?',
    options: [
      'A client receiving IV vancomycin with a trough level of 22 mcg/mL',
      'A client with heart failure whose weight increased 1 kg in 3 days',
      'A client on lithium with a serum level of 2.1 mEq/L',
      'A client with hypothyroidism whose TSH is 6.8 microunits/mL'
    ],
    answer: [2],
    rationale: 'A lithium level of 2.1 mEq/L is well above the therapeutic 0.6 to 1.2 range and represents moderate to severe toxicity with risk of seizures, arrhythmias, and coma. A vancomycin trough of 22 is slightly high and needs attention but is not immediately dangerous, a 1 kg gain over 3 days warrants monitoring, and a mildly elevated TSH is a routine dose-adjustment matter.',
    strategy: 'Know the narrow-therapeutic-index drugs cold: lithium, digoxin, warfarin, phenytoin, theophylline. Their toxic levels are always the answer.' },

  { id: 'MOC-038', cat: 'moc', sub: 'Delegation', type: 'mc', difficulty: 1,
    stem: 'Which client care activity may the RN delegate to an LPN?',
    options: [
      'Developing the plan of care for a newly admitted client',
      'Administering an oral antihypertensive to a stable client',
      'Performing the initial assessment of a client transferred from the ICU',
      'Administering IV push medication through a central line'
    ],
    answer: [1],
    rationale: 'LPNs may administer most oral and many parenteral medications to stable clients. Care planning and initial assessments are RN functions, and IV push administration, particularly through a central line, exceeds LPN scope in most jurisdictions.',
    strategy: 'LPN can give routine meds and do routine care. Planning, initial assessment, IV push, and blood products stay with the RN.' },

  { id: 'MOC-039', cat: 'moc', sub: 'Ethics', type: 'mc', difficulty: 2,
    stem: 'A nurse learns that a coworker has been diverting opioids from the automated dispensing cabinet. What is the nurse\'s obligation?',
    options: [
      'Confront the coworker privately and offer to help them get treatment',
      'Report the suspicion to the nurse manager or through the facility reporting channel',
      'Monitor the coworker for a few more shifts to gather proof',
      'Say nothing unless a client is harmed'
    ],
    answer: [1],
    rationale: 'Suspected diversion endangers clients through undertreated pain and impaired practice, and nurses have a legal and ethical duty to report it through official channels. Private confrontation may allow evidence to be destroyed, delaying to gather proof extends the risk, and silence is a breach of duty.',
    strategy: 'Impaired-colleague questions: report through channels. Not confront, not wait, not cover.' },

  { id: 'MOC-040', cat: 'moc', sub: 'Continuity of Care', type: 'mc', difficulty: 1,
    stem: 'Which client statement indicates that discharge teaching about a new prescription for furosemide has been effective?',
    options: [
      '"I will take this medication at bedtime so it does not interfere with my day."',
      '"I will weigh myself every morning and call if I gain more than 3 pounds in a day."',
      '"I should limit fluids to sips and avoid drinking with meals."',
      '"I will stop the medication if my ankles look better."'
    ],
    answer: [1],
    rationale: 'Daily morning weights on the same scale detect fluid retention earliest, and a gain of 2 to 3 pounds in a day is the standard call parameter. Bedtime dosing causes nocturia and sleep disruption, unnecessary fluid restriction risks dehydration, and stopping a diuretic when symptoms improve leads to rebound fluid overload.',
    strategy: 'For any fluid-status drug, the teach-back you want to hear is daily weights and a specific call threshold.' },

  { id: 'MOC-041', cat: 'moc', sub: 'Prioritization', type: 'mc', difficulty: 3,
    stem: 'A nurse is planning care for a client admitted with a gastrointestinal bleed. Which goal takes priority?',
    options: [
      'The client will verbalize understanding of dietary modifications',
      'The client will maintain a mean arterial pressure above 65 mmHg',
      'The client will report pain of 3 or less on a 0 to 10 scale',
      'The client will demonstrate correct use of the call light'
    ],
    answer: [1],
    rationale: 'Maintaining perfusion is the physiological priority in active bleeding; a mean arterial pressure above 65 mmHg is the threshold for adequate organ perfusion. Teaching, comfort, and safety education matter but come after hemodynamic stability.',
    strategy: 'Maslow: physiological survival before safety, before psychosocial, before teaching.' },

  { id: 'MOC-042', cat: 'moc', sub: 'Confidentiality', type: 'mc', difficulty: 2,
    stem: 'A client\'s adult daughter calls the unit asking for an update on her mother\'s condition. The client has not authorized disclosure to anyone. What should the nurse say?',
    options: [
      '"Your mother is stable and resting comfortably."',
      '"I am not able to share information without your mother\'s permission. I can let her know you called."',
      '"You will need to speak to the physician about that."',
      '"I can only tell you that she is still admitted here."'
    ],
    answer: [1],
    rationale: 'Without the client\'s authorization the nurse cannot confirm any clinical detail, and even confirming admission discloses protected information. The correct response declines politely and offers to relay the call to the client, who can then authorize disclosure.',
    strategy: 'Without authorization, you cannot even confirm the person is a patient. Redirect the request to the client.' },

  { id: 'MOC-043', cat: 'moc', sub: 'Quality Improvement', type: 'mc', difficulty: 1,
    stem: 'A sentinel event has occurred on a nursing unit. Which statement best describes the purpose of the root cause analysis that follows?',
    options: [
      'To determine which employee should be disciplined',
      'To identify the system failures that allowed the event and prevent recurrence',
      'To satisfy the requirements of the facility\'s insurance carrier',
      'To decide whether the event must be disclosed to the client'
    ],
    answer: [1],
    rationale: 'Root cause analysis is a blame-free examination of the processes and conditions that permitted an event, aimed at redesign so it cannot happen again. It is not a disciplinary proceeding, an insurance exercise, or a disclosure decision.',
    strategy: 'RCA asks how the system failed, not who failed.' },

  { id: 'MOC-044', cat: 'moc', sub: 'Advocacy', type: 'mc', difficulty: 2,
    stem: 'A non-English-speaking client is scheduled for surgery. The client\'s adult son offers to interpret the consent discussion. What should the nurse do?',
    options: [
      'Allow the son to interpret since he knows the client\'s history',
      'Arrange for a qualified medical interpreter',
      'Use a translation application on a mobile phone',
      'Proceed with written materials in the client\'s language'
    ],
    answer: [1],
    rationale: 'Informed consent requires a qualified medical interpreter who is trained in clinical terminology and bound by confidentiality. Family members may soften or filter information, translation applications are unreliable for medical content, and written material does not allow the client to ask questions.',
    strategy: 'For consent and teaching, always the trained interpreter. Never the family member, never the app.' },

  { id: 'MOC-045', cat: 'moc', sub: 'Prioritization', type: 'sata', difficulty: 3,
    stem: 'A nurse receives report on the following clients. Which require assessment within the first 15 minutes of the shift? Select all that apply.',
    options: [
      'A client with a new onset of confusion and a temperature of 38.6 degrees Celsius',
      'A client scheduled for a barium enema at 10:00',
      'A client with a systolic blood pressure that dropped from 128 to 88 mmHg over the last hour',
      'A client requesting a stool softener',
      'A client with a tracheostomy whose secretions have become thick and tenacious'
    ],
    answer: [0, 2, 4],
    rationale: 'New confusion with fever suggests sepsis or delirium, a 40-point systolic drop suggests hemodynamic instability, and thick secretions around a tracheostomy threaten airway obstruction. A scheduled procedure and a stool softener request are not time-critical.',
    strategy: 'Sort by "what could kill this person in the next hour." New neuro changes, falling pressures, and airway threats always qualify.' }
  ,
  { id: 'MOC-046', cat: 'moc', sub: 'Scope of Practice', type: 'mc', difficulty: 2,
    stem: 'A nurse is unsure whether a procedure falls within the RN scope of practice in their state. Which resource should the nurse consult?',
    options: ['The facility policy manual', 'The state nurse practice act', 'The charge nurse', 'The provider who wrote the order'],
    answer: [1],
    rationale: 'The state nurse practice act is the legal authority defining the boundaries of nursing practice. Facility policy may be more restrictive than the practice act but never broader, and neither a colleague nor a provider can expand a nurse\'s legal scope.',
    strategy: 'Law first, then policy. A provider\'s order never enlarges your scope.' },

  { id: 'MOC-047', cat: 'moc', sub: 'DNR Orders', type: 'mc', difficulty: 2,
    stem: 'A client with a do-not-resuscitate order develops severe dyspnea and hypoxemia. What should the nurse do?',
    options: [
      'Withhold all interventions because of the DNR order',
      'Administer oxygen and position the client upright to relieve the dyspnea',
      'Begin bag-mask ventilation',
      'Call a code and initiate resuscitation'
    ],
    answer: [1],
    rationale: 'A DNR order limits resuscitation in the event of cardiac or respiratory arrest; it does not withhold comfort or symptom-directed treatment. Oxygen and upright positioning relieve dyspnea and are entirely appropriate. Withholding all care is abandonment, and ventilation or a code contradicts the order.',
    strategy: 'DNR means do not resuscitate, not do not treat.' },

  { id: 'MOC-048', cat: 'moc', sub: 'Chain of Command', type: 'mc', difficulty: 2,
    stem: 'A nurse has twice paged a provider about a client whose urine output has fallen to 15 mL per hour with no response. What should the nurse do next?',
    options: [
      'Continue paging every 15 minutes until the provider answers',
      'Notify the charge nurse or nursing supervisor to escalate through the chain of command',
      'Order a fluid bolus and inform the provider later',
      'Wait until the provider makes rounds'
    ],
    answer: [1],
    rationale: 'Persistently low urine output signals developing acute kidney injury or hypoperfusion and cannot wait. When a provider does not respond, the nurse escalates through the chain of command. Continued paging wastes time, ordering treatment exceeds scope, and waiting for rounds risks organ injury.',
    strategy: 'No answer from the provider means go up the chain, not around it and not nowhere.' },

  { id: 'MOC-049', cat: 'moc', sub: 'Organ Donation', type: 'mc', difficulty: 2,
    stem: 'A client has been declared brain dead and the family is considering organ donation. Which action by the nurse is appropriate?',
    options: [
      'Ask the family directly whether they wish to donate the client\'s organs',
      'Notify the organ procurement organization so a trained requestor can approach the family',
      'Tell the family that donation is expected in this situation',
      'Discontinue ventilatory support before the family decides'
    ],
    answer: [1],
    rationale: 'Federal requirements direct that the organ procurement organization be notified of every imminent death and that the donation conversation be led by a trained requestor, which improves both consent rates and family experience. The nurse does not initiate the request, apply pressure, or withdraw support before the process is complete.',
    strategy: 'Nurses notify the OPO. Trained requestors ask.' },

  { id: 'MOC-050', cat: 'moc', sub: 'Prioritization', type: 'mc', difficulty: 3,
    stem: 'A nurse in the emergency department must decide which client to treat first. Which client has the highest priority?',
    options: [
      'A 30-year-old with a dislocated shoulder rating pain 9 out of 10',
      'A 55-year-old with crushing substernal chest pain and diaphoresis',
      'A 72-year-old with a productive cough for 5 days and a temperature of 38.1 degrees Celsius',
      'A 22-year-old with a 3-centimeter forearm laceration and controlled bleeding'
    ],
    answer: [1],
    rationale: 'Crushing chest pain with diaphoresis is presumed acute coronary syndrome, where minutes of delay translate directly into lost myocardium. The dislocation is painful but stable, the cough with low-grade fever is urgent but not emergent, and a controlled laceration can wait.',
    strategy: 'Time-is-tissue conditions — MI, stroke, and torsion — outrank pain severity every time.' },

  { id: 'MOC-051', cat: 'moc', sub: 'Delegation', type: 'mc', difficulty: 3,
    stem: 'A nurse delegates vital sign measurement to a UAP, who reports a blood pressure of 78/44 mmHg on a client. What should the nurse do first?',
    options: [
      'Ask the UAP to repeat the measurement in the other arm',
      'Go assess the client directly',
      'Notify the provider of the reading',
      'Review the client\'s medication administration record'
    ],
    answer: [1],
    rationale: 'Delegating the task does not delegate the accountability. A profoundly low pressure requires the nurse to lay eyes on the client and assess perfusion, mentation, and heart rate. Repeating the cuff reading, calling the provider, or reviewing medications all delay direct assessment.',
    strategy: 'An abnormal delegated finding sends the nurse to the bedside, not to the phone.' },

  { id: 'MOC-052', cat: 'moc', sub: 'Ethics', type: 'mc', difficulty: 1,
    stem: 'Which situation best illustrates the ethical principle of veracity?',
    options: [
      'The nurse distributes limited vaccine supply based on published risk criteria',
      'The nurse tells a client honestly that the biopsy result shows a malignancy when the client asks',
      'The nurse honors a client\'s refusal of physical therapy',
      'The nurse repositions a client every 2 hours to prevent skin breakdown'
    ],
    answer: [1],
    rationale: 'Veracity is the duty to tell the truth. Allocating scarce resources by criteria is justice, honoring refusal is autonomy, and preventing pressure injury is nonmaleficence combined with beneficence.',
    strategy: 'Veracity is truth, fidelity is keeping promises, justice is fairness, autonomy is choice.' },

  { id: 'MOC-053', cat: 'moc', sub: 'Incident Reporting', type: 'mc', difficulty: 2,
    stem: 'A client fell while ambulating to the bathroom. Which entry belongs in the client\'s medical record?',
    options: [
      '"Client found on floor at 0430. Alert and oriented, denies pain. Vital signs stable, full range of motion, no visible injury. Provider notified."',
      '"Client fell because the UAP failed to answer the call light in a timely manner."',
      '"Incident report completed and forwarded to risk management."',
      '"Client fell due to inadequate staffing on the unit tonight."'
    ],
    answer: [0],
    rationale: 'The record documents objective findings, the assessment, and who was notified. Blame, staffing opinions, and any mention of the incident report are inappropriate; the incident report is a separate internal quality document and referencing it in the chart makes it discoverable.',
    strategy: 'Chart facts and actions. Never chart blame, and never chart that an incident report exists.' },

  { id: 'MOC-054', cat: 'moc', sub: 'Disaster Planning', type: 'mc', difficulty: 3,
    stem: 'During an external disaster the hospital must create bed capacity quickly. Which client should the nurse recommend for early discharge?',
    options: [
      'A client 2 days post myocardial infarction on a heparin infusion',
      'A client admitted for observation after a syncopal episode who has had normal telemetry and laboratory results for 24 hours',
      'A client with a new tracheostomy',
      'A client receiving IV vancomycin for osteomyelitis with 3 weeks of therapy remaining'
    ],
    answer: [1],
    rationale: 'The observation client with an entirely normal workup can safely complete evaluation as an outpatient. The post-MI client on anticoagulation, the new tracheostomy, and the client on prolonged IV antibiotics all still need inpatient-level care, though the last might transition to home infusion with time to arrange it.',
    strategy: 'Surge discharge picks the client who is already essentially well and whose remaining care can happen anywhere.' },

  { id: 'MOC-055', cat: 'moc', sub: 'Prioritization', type: 'mc', difficulty: 3,
    stem: 'A nurse is caring for a client 6 hours after abdominal surgery. Which finding requires immediate intervention?',
    options: [
      'Absent bowel sounds in all four quadrants',
      'Urine output of 18 mL over the past 2 hours',
      'Pain rated 6 out of 10 at the incision',
      'Serosanguineous drainage on the dressing measuring 4 centimeters'
    ],
    answer: [1],
    rationale: 'Urine output under 30 mL per hour signals inadequate renal perfusion from hypovolemia or hemorrhage and demands immediate evaluation. Absent bowel sounds are expected in the first postoperative hours, moderate incisional pain is expected and treatable, and a small amount of serosanguineous drainage is normal.',
    strategy: 'Learn the numeric red lines: urine below 30 mL/hr, MAP below 65, oxygen saturation below 90, and potassium outside 3.5 to 5.0.' },

  { id: 'MOC-056', cat: 'moc', sub: 'Interdisciplinary Care', type: 'mc', difficulty: 2,
    stem: 'A client recovering from a hip fracture needs assistance relearning to dress and bathe independently. Which team member should the nurse involve?',
    options: ['Physical therapist', 'Occupational therapist', 'Social worker', 'Dietitian'],
    answer: [1],
    rationale: 'Occupational therapy addresses activities of daily living such as dressing, bathing, and grooming, including adaptive equipment. Physical therapy focuses on strength, gait, and transfers, social work on resources and placement, and dietetics on nutrition.',
    strategy: 'PT moves you, OT lets you live: gait and strength versus bathing, dressing, and eating.' },

  { id: 'MOC-057', cat: 'moc', sub: 'Confidentiality', type: 'mc', difficulty: 2,
    stem: 'A nurse needs to look up laboratory values for a client who is not assigned to them but whose care the nurse is covering during a break. Which statement is accurate?',
    options: [
      'Accessing the record is a HIPAA violation regardless of the reason',
      'Accessing the record is permitted because the nurse has a treatment-related need',
      'The nurse must obtain written consent from the client first',
      'The nurse should ask the assigned nurse to read the values aloud instead'
    ],
    answer: [1],
    rationale: 'Access to protected health information is permitted for treatment, payment, and operations. A nurse covering a client during a colleague\'s break has a legitimate treatment relationship. Written consent is not required for treatment access, and having values read aloud is a workaround, not a requirement.',
    strategy: 'The test is whether you have a care relationship right now, not whether the client is on your assignment sheet.' },

  { id: 'MOC-058', cat: 'moc', sub: 'Delegation', type: 'sata', difficulty: 2,
    stem: 'Which tasks may an RN delegate to an LPN caring for a stable client? Select all that apply.',
    options: [
      'Inserting an indwelling urinary catheter',
      'Performing a sterile dressing change on a surgical wound',
      'Administering the first dose of an IV antibiotic',
      'Monitoring a client during a blood transfusion the RN initiated',
      'Reinforcing dietary teaching the RN has already provided'
    ],
    answer: [0, 1, 4],
    rationale: 'Catheter insertion, sterile dressing changes, and reinforcement of teaching are within LPN scope in most jurisdictions. First doses carry the highest risk of anaphylaxis and require RN assessment, and blood administration and monitoring remain an RN responsibility.',
    strategy: 'First doses, blood products, IV push, and anything unstable stay with the RN.' },

  { id: 'MOC-059', cat: 'moc', sub: 'Advance Directives', type: 'mc', difficulty: 2,
    stem: 'A client asks the nurse to explain the difference between a living will and a durable power of attorney for health care. Which response is accurate?',
    options: [
      '"They are two names for the same document."',
      '"A living will states what treatments you want; a durable power of attorney names a person to decide for you if you cannot."',
      '"A living will names a decision maker; a durable power of attorney lists your treatment preferences."',
      '"A durable power of attorney only takes effect after you die."'
    ],
    answer: [1],
    rationale: 'A living will specifies treatment preferences in advance, while a durable power of attorney for health care appoints a surrogate decision maker who acts if the client loses capacity. The roles are not interchangeable, and the durable power of attorney operates during life, not after death.',
    strategy: 'Living will says what. Power of attorney says who.' },

  { id: 'MOC-060', cat: 'moc', sub: 'Prioritization', type: 'mc', difficulty: 3,
    stem: 'Which client should the nurse assess first after receiving the shift report?',
    options: [
      'A client with a potassium of 6.4 mEq/L awaiting dialysis',
      'A client with a hemoglobin of 9.8 g/dL',
      'A client with a sodium of 133 mEq/L',
      'A client with a white blood cell count of 12,000 per microliter'
    ],
    answer: [0],
    rationale: 'A potassium of 6.4 mEq/L threatens lethal arrhythmia and is the most immediately dangerous value. The hemoglobin is mildly low, the sodium is only slightly below range, and the white count is modestly elevated; none of the three is an emergency.',
    strategy: 'Potassium is the electrolyte that kills fastest. Anything above 5.5 or below 3.0 rises to the top.' },

  { id: 'MOC-061', cat: 'moc', sub: 'Legal Rights', type: 'mc', difficulty: 2,
    stem: 'A nurse fails to raise the side rails on the bed of a heavily sedated client, who then falls and fractures a hip. Which legal concept applies?',
    options: ['Assault', 'Malpractice', 'Defamation', 'Invasion of privacy'],
    answer: [1],
    rationale: 'Malpractice is professional negligence: a duty existed, the nurse breached the standard of care, and the breach directly caused harm. Assault involves threat, defamation involves damaging false statements, and invasion of privacy involves improper disclosure.',
    strategy: 'Malpractice needs all four: duty, breach, causation, damages. If harm resulted from a care failure, that is the answer.' },

  { id: 'MOC-062', cat: 'moc', sub: 'Case Management', type: 'mc', difficulty: 2,
    stem: 'A client with terminal cancer and a prognosis of less than 6 months wishes to remain at home for symptom management. Which referral is most appropriate?',
    options: ['Palliative care consultation only', 'Hospice services', 'Skilled nursing facility', 'Home health physical therapy'],
    answer: [1],
    rationale: 'Hospice is designed for a prognosis of 6 months or less when the goal is comfort rather than cure, and it delivers care in the home. Palliative care alone is appropriate at any stage but does not carry the full home support hospice provides, facility placement contradicts the stated wish, and physical therapy does not address the primary need.',
    strategy: 'Six months or less plus comfort goals plus home equals hospice.' },

  { id: 'MOC-063', cat: 'moc', sub: 'Supervision', type: 'mc', difficulty: 2,
    stem: 'A nurse is precepting a new graduate who is preparing to mix regular and NPH insulin in one syringe. Which action requires the preceptor to intervene?',
    options: [
      'Injecting air into the NPH vial first, then into the regular insulin vial',
      'Withdrawing the NPH insulin before the regular insulin',
      'Gently rolling the NPH vial between the palms before drawing it up',
      'Having a second nurse independently verify the dose'
    ],
    answer: [1],
    rationale: 'Clear regular insulin is always withdrawn before cloudy NPH so the short-acting vial is never contaminated with the intermediate-acting suspension. Injecting air into the cloudy vial first, rolling rather than shaking NPH, and independent double-checking of insulin doses are all correct.',
    strategy: 'Air into cloudy, air into clear, draw clear, draw cloudy. RN before NPH, alphabetically.' },

  { id: 'MOC-064', cat: 'moc', sub: 'Resource Management', type: 'mc', difficulty: 2,
    stem: 'A nurse is planning the shift for six clients. Which task should the nurse complete first?',
    options: [
      'Administer a scheduled 0900 antibiotic due now',
      'Perform a focused respiratory assessment on a client with new shortness of breath',
      'Change a dressing scheduled for the morning',
      'Document the previous shift\'s intake and output totals'
    ],
    answer: [1],
    rationale: 'New shortness of breath is a change in condition affecting airway and breathing and must be assessed before scheduled tasks. Timed medications, routine dressing changes, and documentation all follow.',
    strategy: 'Any new symptom outranks any scheduled task.' },

  { id: 'MOC-065', cat: 'moc', sub: 'Ethics', type: 'mc', difficulty: 2,
    stem: 'A nurse is assigned to care for a client whose lifestyle conflicts with the nurse\'s personal beliefs. What is the nurse\'s professional obligation?',
    options: [
      'Request reassignment to avoid providing care',
      'Provide the same standard of care as for any other client',
      'Care for the client but limit interactions to essential tasks',
      'Discuss the conflict with the client to clear the air'
    ],
    answer: [1],
    rationale: 'Nondiscriminatory care is a core professional obligation; nurses provide the same standard regardless of personal values. Refusing an assignment on this basis constitutes abandonment, minimizing interaction is substandard care, and burdening the client with the nurse\'s discomfort is inappropriate.',
    strategy: 'Personal beliefs never reduce the standard of care a client receives.' },

  { id: 'MOC-066', cat: 'moc', sub: 'Prioritization', type: 'order', difficulty: 3,
    stem: 'A client\'s IV site is red, swollen, and painful and the client has a temperature of 38.4 degrees Celsius. Place the nurse\'s actions in the correct order.',
    options: [
      'Stop the infusion and discontinue the IV catheter',
      'Assess the site and the client\'s vital signs',
      'Apply a warm compress and elevate the extremity',
      'Notify the provider and document the findings',
      'Restart the IV in the opposite extremity'
    ],
    answer: [1, 0, 2, 4, 3],
    rationale: 'Assessment establishes the severity, then the offending catheter is removed to stop ongoing injury, comfort measures are applied, access is re-established so therapy can continue, and finally the provider is notified and the event documented.',
    strategy: 'Assess, remove the cause, treat, restore function, then report and document.' },

  { id: 'MOC-067', cat: 'moc', sub: 'Informed Consent', type: 'mc', difficulty: 3,
    stem: 'Which client can legally provide informed consent for their own surgery?',
    options: [
      'A 15-year-old accompanied by a parent',
      'A 17-year-old who is married and living independently',
      'A 40-year-old who received IV midazolam 20 minutes ago',
      'A 70-year-old with advanced dementia and a court-appointed guardian'
    ],
    answer: [1],
    rationale: 'A married minor is emancipated and consents for themselves. An unemancipated 15-year-old requires parental consent, a client who has received a sedative lacks capacity at that moment, and a client with a guardian has that authority vested in the guardian.',
    strategy: 'Consent requires an adult or emancipated minor who is informed, voluntary, and not sedated.' },

  { id: 'MOC-068', cat: 'moc', sub: 'Delegation', type: 'mc', difficulty: 2,
    stem: 'A UAP tells the nurse, "I have never done a blood glucose check on this new meter." What is the nurse\'s best response?',
    options: [
      '"Do your best and let me know if the reading looks wrong."',
      '"I will do it this time and then show you how the meter works."',
      '"Ask another aide to show you."',
      '"It is essentially the same as the old meter."'
    ],
    answer: [1],
    rationale: 'The delegating nurse is accountable for verifying competence before assigning a task. Performing it and then teaching ensures the client is served correctly and the UAP gains the skill. Letting an untrained person proceed, deflecting to a peer, and minimizing the difference all risk an inaccurate result guiding insulin dosing.',
    strategy: 'Right person is part of delegation. If competence is not established, do not delegate.' },

  { id: 'MOC-069', cat: 'moc', sub: 'Continuity of Care', type: 'sata', difficulty: 2,
    stem: 'A client is being discharged on multiple new medications. Which nursing actions promote medication safety at transition? Select all that apply.',
    options: [
      'Perform medication reconciliation comparing home, hospital, and discharge lists',
      'Provide a written schedule showing each medication, dose, and time',
      'Ask the client to teach back how and when to take each medication',
      'Tell the client to continue all prior home medications in addition to the new ones',
      'Confirm the client can afford and obtain the prescriptions',
      'Advise the client to stop any medication that causes any side effect'
    ],
    answer: [0, 1, 2, 4],
    rationale: 'Reconciliation, a written schedule, teach-back, and confirming access all reduce post-discharge medication error. Continuing all prior medications without reconciliation causes duplication and interactions, and telling a client to stop medications independently risks abrupt withdrawal of essential therapy.',
    strategy: 'Reconcile, write it down, teach back, and make sure they can actually get the drug.' },

  { id: 'MOC-070', cat: 'moc', sub: 'Prioritization', type: 'mc', difficulty: 3,
    stem: 'A nurse is caring for four postoperative clients. Which one should the nurse assess first?',
    options: [
      'A client 1 day post cholecystectomy with a temperature of 37.8 degrees Celsius',
      'A client 3 days post hip replacement with sudden onset of dyspnea and chest pain',
      'A client 2 days post appendectomy with a small amount of purulent drainage',
      'A client 1 day post hysterectomy with a hemoglobin of 10.2 g/dL'
    ],
    answer: [1],
    rationale: 'Sudden dyspnea and pleuritic chest pain on postoperative day 3 after joint replacement strongly suggest pulmonary embolism, an immediately life-threatening event. A mild temperature is common early after surgery, purulent drainage indicates infection needing attention but not emergently, and a hemoglobin of 10.2 is expected after major surgery.',
    strategy: 'Sudden dyspnea plus chest pain in a postoperative or immobile client equals PE until proven otherwise.' },

  { id: 'MOC-071', cat: 'moc', sub: 'Quality Improvement', type: 'mc', difficulty: 1,
    stem: 'Which measure is a nurse-sensitive indicator of care quality?',
    options: [
      'Surgical case volume per month',
      'Rate of hospital-acquired pressure injuries',
      'Average length of provider rounding time',
      'Number of imaging studies ordered'
    ],
    answer: [1],
    rationale: 'Nurse-sensitive indicators are outcomes strongly influenced by nursing care, including pressure injuries, falls, catheter-associated urinary tract infections, and central line infections. Case volume, rounding time, and imaging utilization reflect other services or system throughput.',
    strategy: 'If nursing surveillance and technique change the rate, it is nurse-sensitive: falls, pressure injuries, CAUTI, CLABSI.' },

  { id: 'MOC-072', cat: 'moc', sub: 'Advocacy', type: 'mc', difficulty: 2,
    stem: 'A client scheduled for discharge tells the nurse privately, "I cannot afford the new inhaler, but do not tell anyone." What should the nurse do?',
    options: [
      'Honor the request and say nothing',
      'Explain that the care team needs this information to find an affordable alternative, and ask permission to involve the social worker',
      'Report the information to the provider without telling the client',
      'Give the client sample inhalers from the unit supply'
    ],
    answer: [1],
    rationale: 'Cost is a leading cause of non-adherence and readmission, so it must reach the team, but the nurse works with the client rather than around them by explaining why and seeking permission. Silence leaves the client without medication, disclosing without discussion damages trust, and distributing samples is a temporary fix that ignores the ongoing barrier.',
    strategy: 'When a confidence affects safety, do not simply keep it or break it. Bring the client into the decision to share it.' },

  { id: 'MOC-073', cat: 'moc', sub: 'Assignment', type: 'mc', difficulty: 3,
    stem: 'Which client should the charge nurse assign to a private room?',
    options: [
      'A client with a productive cough and suspected pulmonary tuberculosis',
      'A client with a stage 2 pressure injury',
      'A client 1 day post appendectomy',
      'A client with newly diagnosed type 2 diabetes'
    ],
    answer: [0],
    rationale: 'Suspected pulmonary tuberculosis requires airborne isolation in a negative-pressure private room. A pressure injury requires standard precautions unless drainage is uncontained, and neither the postoperative client nor the client with diabetes requires isolation.',
    strategy: 'Airborne means private, negative pressure, N95: tuberculosis, measles, varicella, disseminated zoster.' },

  { id: 'MOC-074', cat: 'moc', sub: 'Chain of Command', type: 'mc', difficulty: 2,
    stem: 'A nurse is asked to float to the intensive care unit and take an assignment involving titrated vasoactive drips, a skill the nurse has never performed. What is the most appropriate action?',
    options: [
      'Refuse the float assignment entirely',
      'Accept the assignment and learn as the shift progresses',
      'Inform the supervisor of specific skill limitations and request an assignment within demonstrated competence',
      'Accept the assignment and ask the client\'s family to watch the pumps'
    ],
    answer: [2],
    rationale: 'Refusing to float outright may constitute abandonment, but accepting care beyond one\'s competence endangers clients and exposes the nurse to liability. The correct path is to state the limitation clearly and negotiate an assignment the nurse can safely perform, often taking stable clients while an ICU nurse manages the drips.',
    strategy: 'Do not refuse and do not pretend. Name the limitation and negotiate the assignment.' },

  { id: 'MOC-075', cat: 'moc', sub: 'Prioritization', type: 'mc', difficulty: 2,
    stem: 'A nurse receives four laboratory results. Which requires the most urgent notification of the provider?',
    options: [
      'An INR of 7.8 in a client on warfarin',
      'A fasting glucose of 132 mg/dL',
      'A creatinine of 1.4 mg/dL',
      'A total cholesterol of 245 mg/dL'
    ],
    answer: [0],
    rationale: 'An INR of 7.8 carries a high risk of spontaneous major hemorrhage, including intracranial bleeding, and requires immediate action such as holding warfarin and possibly giving vitamin K. The other three values are abnormal but chronic-management issues.',
    strategy: 'Ask which abnormal value could cause a catastrophe today. Bleeding and arrhythmia risks win.' },

  { id: 'MOC-076', cat: 'moc', sub: 'Legal Rights', type: 'mc', difficulty: 2,
    stem: 'A nurse administers a medication to a client who had previously refused it, telling the client it is a vitamin. Which legal violation has occurred?',
    options: ['Negligence', 'Battery', 'Slander', 'Breach of confidentiality'],
    answer: [1],
    rationale: 'Battery is intentional harmful or offensive contact without consent, which includes administering a treatment the client has refused. Negligence is unintentional failure to meet the standard of care, slander is spoken defamation, and confidentiality concerns disclosure of information.',
    strategy: 'Treatment given over a refusal is battery, even when the nurse believes it will help.' },

  { id: 'MOC-077', cat: 'moc', sub: 'Interdisciplinary Care', type: 'mc', difficulty: 3,
    stem: 'A client with a new colostomy is anxious about managing the appliance at home and about returning to work. Which referral is the highest priority before discharge?',
    options: ['Dietitian', 'Wound, ostomy, and continence nurse', 'Vocational rehabilitation', 'Chaplain'],
    answer: [1],
    rationale: 'The immediate barrier to safe discharge is the client\'s ability to manage the appliance, which the ostomy specialist addresses through hands-on teaching and product selection. Nutrition counseling, vocational support, and spiritual care are valuable but secondary to the skill the client needs on day one.',
    strategy: 'Prioritize the referral that closes the gap between the client and a safe discharge tomorrow.' },

  { id: 'MOC-078', cat: 'moc', sub: 'Confidentiality', type: 'mc', difficulty: 2,
    stem: 'A well-known local official is admitted to the unit. Several staff members not involved in the client\'s care have accessed the chart. What is the appropriate response?',
    options: [
      'Nothing, since the staff members are hospital employees',
      'Report the unauthorized access through the facility privacy channel',
      'Ask the staff members to explain their reasons before deciding',
      'Move the client to a different unit'
    ],
    answer: [1],
    rationale: 'Accessing a record without a treatment, payment, or operations purpose is a reportable privacy violation regardless of employment status. It must be escalated to the privacy officer. Employment is not authorization, informal inquiry is not the process, and moving the client punishes the wrong person.',
    strategy: 'Curiosity is never a permitted purpose. Snooping gets reported.' },

  { id: 'MOC-079', cat: 'moc', sub: 'Delegation', type: 'mc', difficulty: 3,
    stem: 'Which client may the nurse appropriately assign to a UAP for total care under RN supervision?',
    options: [
      'A client on continuous cardiac monitoring for chest pain',
      'A client awaiting transfer to a long-term care facility who is stable and requires assistance with hygiene and feeding',
      'A client receiving a first dose of IV immunoglobulin',
      'A client with a new epidural catheter'
    ],
    answer: [1],
    rationale: 'A stable client whose needs are hygiene, feeding, and mobility is well within UAP capability under RN supervision. Cardiac monitoring, first-dose infusions, and epidural analgesia all require ongoing nursing assessment for deterioration.',
    strategy: 'UAP total care fits the stable client whose needs are basic ADLs and nothing more.' },

  { id: 'MOC-080', cat: 'moc', sub: 'Prioritization', type: 'mc', difficulty: 3,
    stem: 'A nurse is caring for a client with a chest tube. Which finding should be reported to the provider immediately?',
    options: [
      'Tidaling in the water seal chamber with respiration',
      'Drainage of 60 mL of serosanguineous fluid in 8 hours',
      'Sudden cessation of all drainage with increasing dyspnea',
      'Intermittent bubbling in the suction control chamber'
    ],
    answer: [2],
    rationale: 'An abrupt stop in drainage combined with worsening dyspnea suggests obstruction of the tube and a re-accumulating pneumothorax or hemothorax, which can progress to tension physiology. Tidaling is expected, modest serosanguineous drainage is normal, and bubbling in the suction control chamber indicates the suction is working.',
    strategy: 'Expected: tidaling, gentle bubbling in the suction chamber. Alarming: no drainage with new symptoms, or continuous bubbling in the water seal.' },

  { id: 'MOC-081', cat: 'moc', sub: 'Ethics', type: 'mc', difficulty: 2,
    stem: 'Two clients need the only available ICU bed. One is a 35-year-old with reversible septic shock; the other is a 78-year-old with end-stage pulmonary fibrosis and a documented comfort-only directive. Which principle guides the allocation decision?',
    options: ['Fidelity', 'Justice', 'Veracity', 'Paternalism'],
    answer: [1],
    rationale: 'Justice governs the fair distribution of scarce resources, weighing likelihood of benefit and the clients\' own stated goals. Fidelity is faithfulness to commitments, veracity is truthfulness, and paternalism is overriding a client\'s choice for their supposed good.',
    strategy: 'Scarce resource plus who gets it equals justice.' },

  { id: 'MOC-082', cat: 'moc', sub: 'Supervision', type: 'sata', difficulty: 2,
    stem: 'A nurse is supervising a UAP caring for a client with an indwelling urinary catheter. Which UAP actions require correction? Select all that apply.',
    options: [
      'Placing the drainage bag on the floor beside the bed',
      'Emptying the drainage bag when it is two-thirds full',
      'Looping tubing above the level of the bladder for convenience',
      'Securing the catheter to the client\'s thigh',
      'Cleaning the perineal area from front to back with soap and water',
      'Disconnecting the tubing to allow the client to walk to the bathroom'
    ],
    answer: [0, 2, 5],
    rationale: 'The bag must stay off the floor and below bladder level, tubing must drain downhill without dependent loops above the bladder, and the closed system must never be broken. Emptying before the bag is full, securing the catheter, and front-to-back perineal care are all correct.',
    strategy: 'Catheter care rules: below the bladder, off the floor, no dependent loops, never break the closed system.' },

  { id: 'MOC-083', cat: 'moc', sub: 'Case Management', type: 'mc', difficulty: 2,
    stem: 'A client with paraplegia is being discharged home. Which assessment is most important for the nurse to complete before discharge?',
    options: [
      'The client\'s preferred meal times',
      'The physical accessibility of the client\'s home, including doorway widths and bathroom access',
      'The client\'s religious affiliation',
      'The distance to the nearest pharmacy'
    ],
    answer: [1],
    rationale: 'Home accessibility determines whether the discharge plan is workable at all; a client who cannot get a wheelchair through a doorway or into a bathroom cannot go home safely. The other items are relevant to holistic care but do not determine feasibility of the discharge.',
    strategy: 'For mobility-limited clients, the environment is the plan. Assess it before anything else.' },

  { id: 'MOC-084', cat: 'moc', sub: 'Prioritization', type: 'mc', difficulty: 3,
    stem: 'Four clients ring their call lights at the same time. Which should the nurse answer first?',
    options: [
      'A client requesting help to the bathroom',
      'A client whose IV pump is alarming "air in line"',
      'A client asking for an extra blanket',
      'A client reporting that their telemetry leads keep falling off'
    ],
    answer: [1],
    rationale: 'An air-in-line alarm signals a potential air embolism, which is life-threatening, and the infusion must be stopped and the line assessed. Toileting assistance carries fall risk but is manageable within minutes, a blanket is a comfort request, and loose leads produce artifact rather than harm.',
    strategy: 'Alarms that signal something entering the bloodstream outrank comfort and convenience every time.' },

  { id: 'MOC-085', cat: 'moc', sub: 'Advance Directives', type: 'mc', difficulty: 2,
    stem: 'A client is admitted without an advance directive. What is the nurse\'s responsibility under the Patient Self-Determination Act?',
    options: [
      'Complete an advance directive on the client\'s behalf',
      'Inform the client of the right to create an advance directive and document the discussion',
      'Require the client to designate a health care proxy before treatment',
      'Contact the family to obtain their treatment preferences'
    ],
    answer: [1],
    rationale: 'The act requires facilities to inform clients of their right to accept or refuse treatment and to formulate advance directives, and to document whether one exists. The nurse cannot create the directive for the client, cannot require one as a condition of care, and does not substitute family preference for the client\'s own.',
    strategy: 'The duty is to inform and document, not to obtain.' },

  { id: 'MOC-086', cat: 'moc', sub: 'Resource Management', type: 'mc', difficulty: 3,
    stem: 'A nurse manager notices that overtime costs have risen sharply while client satisfaction scores have fallen. Which action should the manager take first?',
    options: [
      'Eliminate all overtime immediately',
      'Analyze staffing patterns against client acuity and census trends',
      'Require staff to complete a customer service course',
      'Hire additional agency nurses'
    ],
    answer: [1],
    rationale: 'Data analysis identifies whether the overtime reflects genuine acuity-driven need, vacancy, or scheduling inefficiency, and the answer determines the intervention. Cutting overtime without understanding the driver may worsen safety and satisfaction, service training does not address a staffing root cause, and agency hiring is expensive and premature.',
    strategy: 'Diagnose before you treat, in management just as at the bedside.' },

  { id: 'MOC-087', cat: 'moc', sub: 'Collaboration', type: 'mc', difficulty: 2,
    stem: 'During interdisciplinary rounds a physical therapist states a client is not safe to ambulate independently, but the client insists on walking alone to the bathroom. What is the nurse\'s best action?',
    options: [
      'Allow the client to walk alone since they are competent',
      'Explain the fall risk, offer assistance and a bedside commode, and communicate the client\'s preference to the team',
      'Apply a bed alarm and restrict the client to bed',
      'Document that the client refused therapy recommendations'
    ],
    answer: [1],
    rationale: 'The nurse balances autonomy against safety by informing the client of the risk, offering practical alternatives that preserve dignity and independence, and bringing the client\'s preference back to the team so the plan can adapt. Simply permitting unsafe ambulation, imposing bed rest, or documenting refusal without intervention all fail the client.',
    strategy: 'When autonomy and safety collide, negotiate: inform, offer options, and renegotiate the plan.' },

  { id: 'MOC-088', cat: 'moc', sub: 'Prioritization', type: 'mc', difficulty: 3,
    stem: 'A nurse is triaging clients in a clinic. Which client should be seen first?',
    options: [
      'A 6-month-old with a temperature of 39.4 degrees Celsius who is lethargic and difficult to arouse',
      'A 45-year-old with a 2-day history of burning on urination',
      'A 30-year-old with a sprained ankle and moderate swelling',
      'A 60-year-old requesting a refill of a cholesterol medication'
    ],
    answer: [0],
    rationale: 'Lethargy and difficulty arousing in a febrile infant suggest serious bacterial infection or meningitis and constitute an emergency. Urinary symptoms, a sprain, and a refill request are all non-urgent by comparison.',
    strategy: 'In pediatrics, altered level of consciousness and poor feeding are the emergency signs. A quiet, floppy infant is far more alarming than a crying one.' },

  { id: 'MOC-089', cat: 'moc', sub: 'Quality Improvement', type: 'mc', difficulty: 3,
    stem: 'A nurse notices that clients on the unit frequently miss their morning thyroid medication because breakfast trays arrive at the same time. Which action reflects the first step of the plan-do-study-act cycle?',
    options: [
      'Implement a new medication pass time throughout the hospital',
      'Plan a small trial that separates levothyroxine administration from tray delivery on one hall',
      'Report the nurses who missed the doses',
      'Ask dietary to stop delivering breakfast'
    ],
    answer: [1],
    rationale: 'Plan-do-study-act begins with a small, testable change on a limited scale so its effect can be measured before broad adoption. Hospital-wide implementation skips testing, individual blame is not quality improvement, and eliminating breakfast is not a viable change.',
    strategy: 'PDSA starts small and local. Test it on one hall before you change the hospital.' },

  { id: 'MOC-090', cat: 'moc', sub: 'Legal Rights', type: 'mc', difficulty: 2,
    stem: 'A client on a psychiatric unit is placed in seclusion for assaulting another client. Which nursing action is required?',
    options: [
      'Observe the client every 30 minutes',
      'Provide continuous observation and assess for physical needs at frequent, policy-defined intervals',
      'Leave the client alone until they calm down completely',
      'Obtain a seclusion order that remains valid for the full admission'
    ],
    answer: [1],
    rationale: 'Seclusion requires continuous or near-continuous observation with documented assessment of vital signs, hydration, toileting, and readiness for release at short intervals defined by policy and regulation. Half-hourly checks are insufficient, leaving the client unobserved is unsafe, and seclusion orders are strictly time-limited and require renewal.',
    strategy: 'The more restrictive the intervention, the more frequent the monitoring and the shorter the order.' }
  ,
  { id: 'MOC-091', cat: 'moc', sub: 'Prioritization', type: 'mc', difficulty: 3,
    stem: 'A nurse is caring for a client receiving a blood transfusion who suddenly reports back pain, chills, and a feeling of impending doom. What should the nurse do first?',
    options: [
      'Slow the transfusion rate',
      'Stop the transfusion and keep the IV line open with normal saline using new tubing',
      'Administer acetaminophen and diphenhydramine',
      'Obtain a urine specimen for hemoglobin'
    ],
    answer: [1],
    rationale: 'These are classic signs of an acute hemolytic transfusion reaction. The transfusion must be stopped immediately and the line maintained with saline through fresh tubing so no additional blood enters the client. Slowing the rate continues the exposure, medications treat a milder febrile reaction, and specimen collection follows once the transfusion has stopped.',
    strategy: 'Any suspected transfusion reaction: stop the blood first, keep the vein open with saline second, everything else third.' },

  { id: 'MOC-092', cat: 'moc', sub: 'Delegation', type: 'mc', difficulty: 2,
    stem: 'Which statement by a UAP indicates a correct understanding of their role in caring for a client on aspiration precautions?',
    options: [
      '"I will position the client flat after meals so they can rest."',
      '"I will keep the head of the bed elevated at least 30 degrees during and for 30 minutes after meals."',
      '"I will thicken the client\'s liquids to whatever consistency seems easiest."',
      '"I will feed the client quickly so the food stays warm."'
    ],
    answer: [1],
    rationale: 'Upright positioning during and after meals is the core aspiration precaution and is squarely within the UAP role. Lying flat after eating promotes reflux and aspiration, deciding liquid consistency is a speech pathology and nursing determination, and rapid feeding increases aspiration risk.',
    strategy: 'Positioning is UAP work. Deciding diet texture is not.' },

  { id: 'MOC-093', cat: 'moc', sub: 'Ethics', type: 'mc', difficulty: 2,
    stem: 'A dying client asks the nurse, "Am I going to die?" Which response best reflects therapeutic communication and ethical practice?',
    options: [
      '"Of course not, you are going to be fine."',
      '"That is a question for your doctor."',
      '"It sounds like you have been thinking about that. Tell me what is on your mind."',
      '"Everyone dies eventually. Try not to dwell on it."'
    ],
    answer: [2],
    rationale: 'Acknowledging the question and inviting the client to say more respects veracity and opens the conversation without either false reassurance or abandonment. False reassurance is dishonest, deflecting to the provider abandons the client in the moment, and minimizing dismisses the concern.',
    strategy: 'Never falsely reassure and never deflect. Reflect the feeling and open the door.' },

  { id: 'MOC-094', cat: 'moc', sub: 'Prioritization', type: 'mc', difficulty: 3,
    stem: 'A nurse is caring for a client with a subarachnoid hemorrhage. Which change should be reported to the provider immediately?',
    options: [
      'Blood pressure of 138/82 mmHg',
      'A widening pulse pressure with bradycardia and irregular respirations',
      'Complaint of a mild headache relieved by acetaminophen',
      'Urine output of 60 mL per hour'
    ],
    answer: [1],
    rationale: 'Widening pulse pressure, bradycardia, and irregular respirations form Cushing\'s triad, a late and ominous sign of dangerously elevated intracranial pressure and impending herniation. The blood pressure listed is acceptable, a mild relieved headache is expected, and the urine output is normal.',
    strategy: 'Memorize Cushing\'s triad: rising systolic with widening pulse pressure, falling heart rate, irregular breathing. It is always an emergency.' },

  { id: 'MOC-095', cat: 'moc', sub: 'Confidentiality', type: 'mc', difficulty: 2,
    stem: 'A nurse is using a computer at the nurses\' station when called to a client\'s room urgently. What should the nurse do before leaving?',
    options: [
      'Minimize the window containing client information',
      'Log off or lock the workstation',
      'Turn the monitor away from the hallway',
      'Ask a nearby UAP to watch the screen'
    ],
    answer: [1],
    rationale: 'Logging off or locking the workstation is the only action that prevents unauthorized viewing and prevents documentation being entered under the nurse\'s credentials. Minimizing, turning the monitor, or assigning an observer all leave the session open under the nurse\'s login.',
    strategy: 'Walking away from a workstation means logging off. Anything else leaves your name on someone else\'s charting.' },

  { id: 'MOC-096', cat: 'moc', sub: 'Assignment', type: 'mc', difficulty: 2,
    stem: 'A charge nurse must place a client with neutropenia. Which room assignment is most appropriate?',
    options: [
      'A semiprivate room with a client who has a healing surgical wound',
      'A private room with protective environment precautions',
      'A semiprivate room with a client who has stable heart failure',
      'A room near the nurses\' station with standard precautions'
    ],
    answer: [1],
    rationale: 'A neutropenic client needs protection from organisms, which means a private room with protective environment measures including filtered air where available, meticulous hand hygiene, and exclusion of ill visitors, fresh flowers, and raw produce. Any roommate adds exposure risk, and proximity to the station does not reduce infection risk.',
    strategy: 'Reverse isolation protects the client from the world. Standard isolation protects the world from the client.' },

  { id: 'MOC-097', cat: 'moc', sub: 'Continuity of Care', type: 'mc', difficulty: 2,
    stem: 'A client with newly diagnosed heart failure is being discharged. Which statement indicates the client needs further teaching?',
    options: [
      '"I will call my doctor if I gain 3 pounds in one day."',
      '"I will limit my sodium intake to about 2 grams a day."',
      '"I will take an extra dose of my water pill on days my ankles swell."',
      '"I will report new shortness of breath when lying flat."'
    ],
    answer: [2],
    rationale: 'Self-adjusting a diuretic dose risks dehydration, electrolyte derangement, and kidney injury; dose changes require provider direction. Calling for rapid weight gain, restricting sodium, and reporting orthopnea are all correct self-management behaviors.',
    strategy: '"Needs further teaching" items ask for the wrong statement. Self-adjusting a prescription dose is almost always it.' },

  { id: 'MOC-098', cat: 'moc', sub: 'Prioritization', type: 'sata', difficulty: 3,
    stem: 'Which findings in a postoperative client require immediate nursing action? Select all that apply.',
    options: [
      'Oxygen saturation of 87% on room air',
      'Blood pressure of 86/48 mmHg with a heart rate of 122',
      'Nausea relieved by an antiemetic',
      'Sudden absence of a previously present pedal pulse in the operative leg',
      'A temperature of 37.6 degrees Celsius',
      'Restlessness and confusion in a previously alert client'
    ],
    answer: [0, 1, 3, 5],
    rationale: 'Hypoxemia, hypotension with compensatory tachycardia, loss of a distal pulse indicating arterial compromise, and new confusion suggesting hypoxia or hypoperfusion all demand immediate action. Controlled nausea and a mildly elevated temperature in the first postoperative day are expected.',
    strategy: 'New neurological change is a perfusion or oxygenation problem until proven otherwise. Do not attribute it to age or anesthesia.' },

  { id: 'MOC-099', cat: 'moc', sub: 'Legal Rights', type: 'mc', difficulty: 2,
    stem: 'A client refuses to sign the consent for a procedure the provider has recommended. What should the nurse document?',
    options: [
      'That the client is noncompliant with the treatment plan',
      'The client\'s exact words regarding the refusal, that the provider was notified, and that risks were explained',
      'That the client will likely change their mind after speaking with family',
      'Nothing, since no procedure occurred'
    ],
    answer: [1],
    rationale: 'Documentation of refusal records the client\'s own words, confirms that risks were explained, and notes provider notification, which protects both the client\'s rights and the nurse. Labeling a client noncompliant is judgmental, predicting future behavior is speculation, and omitting documentation leaves no record of the informed refusal.',
    strategy: 'Quote the client, note who was told, and record what was explained.' },

  { id: 'MOC-100', cat: 'moc', sub: 'Interdisciplinary Care', type: 'mc', difficulty: 2,
    stem: 'A client with diabetes has an ulcer on the plantar surface of the foot that is not healing. Which consultation should the nurse anticipate as the priority?',
    options: ['Endocrinology', 'Wound care and podiatry', 'Nutrition', 'Ophthalmology'],
    answer: [1],
    rationale: 'A non-healing diabetic foot ulcer requires specialized wound assessment, debridement, and offloading, which wound care and podiatry provide, since untreated ulcers progress to osteomyelitis and amputation. Glycemic optimization, nutrition, and eye screening are all part of comprehensive diabetes care but do not address the immediate limb threat.',
    strategy: 'When a limb is threatened, the referral that saves the limb is the priority.' },

  { id: 'MOC-101', cat: 'moc', sub: 'Prioritization', type: 'mc', difficulty: 3,
    stem: 'A nurse is caring for a client with a suspected stroke who arrived 90 minutes after symptom onset. Which action is the priority?',
    options: [
      'Administer aspirin',
      'Ensure a non-contrast CT of the head is obtained immediately',
      'Begin a heparin infusion',
      'Place the client on a regular diet'
    ],
    answer: [1],
    rationale: 'Non-contrast CT distinguishes ischemic from hemorrhagic stroke and must precede any antithrombotic therapy, because giving aspirin or heparin in a hemorrhagic stroke is catastrophic. Nothing by mouth is maintained until a swallow screen is passed.',
    strategy: 'In stroke, imaging before any blood thinner, and nothing by mouth until swallowing is screened.' },

  { id: 'MOC-102', cat: 'moc', sub: 'Delegation', type: 'mc', difficulty: 2,
    stem: 'A nurse asks a UAP to obtain a set of vital signs on a client who just returned from surgery. The UAP responds, "I am busy with another client right now." What is the nurse\'s best response?',
    options: [
      '"Then I will do it myself and we will discuss this later."',
      '"This client just returned from the operating room and needs vital signs now. Can you finish what you are doing in the next 2 minutes, or should I ask someone else?"',
      '"Everyone is busy. Please just do it."',
      '"I will report this to the manager."'
    ],
    answer: [1],
    rationale: 'Effective delegation communicates the urgency and the reason, then resolves the conflict by clarifying the timeline or reassigning. Doing the task silently while planning a later confrontation avoids the issue, dismissing the concern damages the working relationship, and escalating to management is premature.',
    strategy: 'Delegation conflicts are solved by naming the urgency and offering a concrete alternative, not by ordering or by giving up.' },

  { id: 'MOC-103', cat: 'moc', sub: 'Ethics', type: 'mc', difficulty: 2,
    stem: 'A nurse is asked to witness a client\'s signature on an advance directive. The nurse notices the client appears confused and cannot state the date or location. What should the nurse do?',
    options: [
      'Witness the signature since the client is signing voluntarily',
      'Decline to witness and notify the provider of the client\'s cognitive status',
      'Ask the family to sign on the client\'s behalf',
      'Complete the document later when the client is more alert'
    ],
    answer: [1],
    rationale: 'Witnessing attests that the signer appeared to understand what they were signing. A client who cannot orient to time and place lacks demonstrable capacity, so the nurse declines and reports the finding, which may prompt a capacity evaluation. Witnessing anyway is a false attestation, family cannot sign an advance directive for a client, and deferring without reporting leaves the cognitive change unaddressed.',
    strategy: 'Your witness signature is an attestation about capacity. Never give it when capacity is in doubt.' },

  { id: 'MOC-104', cat: 'moc', sub: 'Prioritization', type: 'mc', difficulty: 3,
    stem: 'A nurse is monitoring four clients on telemetry. Which rhythm requires immediate intervention?',
    options: [
      'Sinus bradycardia at 54 in a sleeping athlete with a blood pressure of 118/70',
      'Atrial fibrillation at 78 in a client on chronic anticoagulation',
      'Ventricular tachycardia at 180 in a client who is diaphoretic and reports dizziness',
      'Occasional premature atrial contractions in a client drinking coffee'
    ],
    answer: [2],
    rationale: 'Ventricular tachycardia with symptoms of poor perfusion is unstable and requires immediate synchronized cardioversion. Sinus bradycardia in a well-perfused athlete is benign, rate-controlled atrial fibrillation on anticoagulation is stable, and occasional premature atrial contractions are common and harmless.',
    strategy: 'Rhythm questions hinge on symptoms, not the number. Unstable plus tachycardia equals cardiovert; unstable plus bradycardia equals atropine and pacing.' },

  { id: 'MOC-105', cat: 'moc', sub: 'Case Management', type: 'mc', difficulty: 2,
    stem: 'A homeless client with tuberculosis is prescribed a 6-month medication regimen. Which strategy best supports completion of therapy?',
    options: [
      'Provide a 6-month supply of medication at discharge',
      'Arrange directly observed therapy through the public health department',
      'Instruct the client to return monthly for refills',
      'Ask a shelter staff member to remind the client to take the medication'
    ],
    answer: [1],
    rationale: 'Directly observed therapy, in which a health worker watches each dose, is the standard of care for tuberculosis and dramatically improves completion while preventing drug resistance, especially for clients with unstable housing. Bulk dispensing, self-directed refills, and informal reminders all leave adherence unverified.',
    strategy: 'Tuberculosis plus adherence risk equals directly observed therapy. It is the answer nearly every time.' },

  { id: 'MOC-106', cat: 'moc', sub: 'Quality Improvement', type: 'mc', difficulty: 3,
    stem: 'Which event meets the definition of a near miss?',
    options: [
      'A client received the wrong medication and developed hypotension',
      'A nurse recognized that the medication in hand belonged to another client and returned it before administering',
      'A client fell and sustained a wrist fracture',
      'A client developed a pressure injury during a prolonged admission'
    ],
    answer: [1],
    rationale: 'A near miss is an error caught before it reaches the client. The other three describe events that reached the client and caused harm. Near misses are valuable to report because they reveal system weaknesses without a patient having been injured.',
    strategy: 'Near miss means it never reached the client. Report it anyway — it is a free lesson.' },

  { id: 'MOC-107', cat: 'moc', sub: 'Advocacy', type: 'mc', difficulty: 2,
    stem: 'A client tells the nurse that a family member has been taking their pain medication. What is the nurse\'s priority action?',
    options: [
      'Advise the client to hide the medication at home',
      'Assess the client\'s current pain control and safety, and notify the provider and social work',
      'Contact law enforcement immediately',
      'Tell the client to stop giving medication to the family member'
    ],
    answer: [1],
    rationale: 'The nurse first determines whether the client\'s pain is being treated and whether they are safe, then brings in the provider and social work to address diversion, safe storage, and possible exploitation. Suggesting the client hide medication does not address the underlying safety issue, calling law enforcement is not the nurse\'s independent first step, and blaming the client is unhelpful.',
    strategy: 'Assess the client\'s safety and symptom control first, then mobilize the team.' },

  { id: 'MOC-108', cat: 'moc', sub: 'Prioritization', type: 'mc', difficulty: 2,
    stem: 'A nurse must complete the following tasks. Which should be done first?',
    options: [
      'Hang a maintenance IV fluid bag that will run dry in 20 minutes',
      'Assess a client whose family reports they are "not acting right"',
      'Administer a scheduled multivitamin',
      'Complete an admission database on a stable client'
    ],
    answer: [1],
    rationale: 'A family report of altered behavior is a reliable early indicator of a change in condition and must be assessed promptly. Replacing IV fluid within 20 minutes, giving a non-urgent vitamin, and completing paperwork can follow.',
    strategy: 'Take family reports of "something is different" seriously. They often detect deterioration before the vital signs do.' },

  { id: 'MOC-109', cat: 'moc', sub: 'Supervision', type: 'mc', difficulty: 2,
    stem: 'A nurse observes a student nurse preparing to administer a medication without checking the client\'s identification band. What should the nurse do?',
    options: [
      'Allow the administration and correct the student afterward',
      'Stop the student before administration and review the identification process',
      'Report the student to the nursing instructor at the end of the shift',
      'Administer the medication personally without comment'
    ],
    answer: [1],
    rationale: 'The nurse intervenes before the error reaches the client and uses the moment to teach the two-identifier requirement. Waiting until after administration allows a potential wrong-client error, delaying to report loses the teaching moment, and taking over without explanation leaves the student uncorrected.',
    strategy: 'Stop the unsafe act, then teach. The order never reverses.' },

  { id: 'MOC-110', cat: 'moc', sub: 'Confidentiality', type: 'sata', difficulty: 1,
    stem: 'Which disclosures of protected health information are permitted without specific client authorization? Select all that apply.',
    options: [
      'Reporting a positive tuberculosis test to the health department',
      'Sharing the admission diagnosis with the client\'s employer',
      'Providing information to a consulting cardiologist involved in the client\'s care',
      'Reporting a suspected case of elder abuse to adult protective services',
      'Posting a de-identified case summary in a public social media nursing group',
      'Submitting a claim with diagnosis codes to the client\'s insurer'
    ],
    answer: [0, 2, 3, 5],
    rationale: 'Mandated public health reporting, treatment-related disclosure to consultants, mandated abuse reporting, and disclosure for payment are all permitted. Employers have no automatic right to clinical information, and even a de-identified public post risks re-identification and is discouraged by professional standards.',
    strategy: 'Permitted without authorization: treatment, payment, operations, and what the law requires you to report.' },

  { id: 'MOC-111', cat: 'moc', sub: 'Assignment', type: 'mc', difficulty: 3,
    stem: 'A charge nurse is assigning four clients to two RNs on a busy shift. Which pairing is most appropriate for the less experienced RN?',
    options: [
      'A client on a nitroglycerin infusion and a client 1 hour post cardiac catheterization',
      'A client awaiting discharge and a client with stable pneumonia on oral antibiotics',
      'A client with new-onset seizures and a client with a fresh burn injury',
      'A client in alcohol withdrawal on a symptom-triggered protocol and a client with a chest tube'
    ],
    answer: [1],
    rationale: 'Pairing a stable discharge with a stable pneumonia keeps the less experienced RN with predictable clients. Titrated infusions, immediate post-catheterization observation, new seizures, acute burns, active withdrawal, and chest tubes all carry significant deterioration risk.',
    strategy: 'Read every option as a pair. One unstable client in a pairing disqualifies the whole option.' },

  { id: 'MOC-112', cat: 'moc', sub: 'Legal Rights', type: 'mc', difficulty: 2,
    stem: 'A nurse witnesses a colleague documenting an assessment that was never performed. What is the nurse\'s obligation?',
    options: [
      'Ignore it since no client was harmed',
      'Report the falsification through the appropriate facility channel',
      'Confront the colleague and ask them to correct it privately',
      'Document the observation in the client\'s chart'
    ],
    answer: [1],
    rationale: 'Falsifying a medical record is fraud, endangers clients whose actual status is unknown, and is grounds for licensure action. It must be reported through official channels. Ignoring it is complicity, informal confrontation does not correct the record, and charting an observation about a colleague in the client\'s record is inappropriate.',
    strategy: 'Falsified documentation is always reportable, harm or no harm.' },

  { id: 'MOC-113', cat: 'moc', sub: 'Prioritization', type: 'mc', difficulty: 3,
    stem: 'A nurse is caring for a client with acute pancreatitis. Which finding requires the most urgent intervention?',
    options: [
      'Serum amylase three times the upper limit of normal',
      'Positive Chvostek sign with carpopedal spasm',
      'Epigastric pain radiating to the back rated 8 out of 10',
      'Nausea with two episodes of emesis'
    ],
    answer: [1],
    rationale: 'A positive Chvostek sign with carpopedal spasm indicates symptomatic hypocalcemia, which occurs in pancreatitis as calcium is sequestered in areas of fat necrosis and can progress to laryngospasm, tetany, and seizures. Elevated amylase confirms the diagnosis but does not require intervention, and pain and vomiting are expected and treatable.',
    strategy: 'A diagnostic laboratory value is rarely the emergency. A sign of impending airway compromise or seizure always is.' },

  { id: 'MOC-114', cat: 'moc', sub: 'Interdisciplinary Care', type: 'mc', difficulty: 2,
    stem: 'A client with advanced dementia is refusing to eat and the family is asking about a feeding tube. Which action by the nurse is most appropriate?',
    options: [
      'Tell the family a feeding tube will prolong life and improve comfort',
      'Arrange a family meeting with the provider and palliative care to discuss goals of care and the evidence about tube feeding in advanced dementia',
      'Insert a nasogastric tube to begin feeding while the family decides',
      'Tell the family that refusing food means the client wants to die'
    ],
    answer: [1],
    rationale: 'Tube feeding in advanced dementia has not been shown to prolong survival, prevent aspiration, or improve comfort, and the decision belongs in a structured goals-of-care conversation with the full team. Overstating benefit is inaccurate, placing a tube preempts the decision, and interpreting the refusal for the family is presumptuous.',
    strategy: 'When the question is whether to do something rather than how, the answer is usually a goals-of-care conversation.' },

  { id: 'MOC-115', cat: 'moc', sub: 'Resource Management', type: 'mc', difficulty: 2,
    stem: 'A nurse has 30 minutes before the end of the shift and several tasks remain. Which task should the nurse complete personally rather than hand off?',
    options: [
      'A routine bath scheduled for the evening',
      'Documentation of an assessment the nurse performed this shift',
      'Restocking the supply cart',
      'Delivering a fresh water pitcher'
    ],
    answer: [1],
    rationale: 'Only the nurse who performed the assessment can document it; charting by another person is falsification and the finding would be lost. Baths, restocking, and comfort tasks can be safely handed off or delegated.',
    strategy: 'Never hand off your own documentation. Everything you observed, you chart.' },

  { id: 'MOC-116', cat: 'moc', sub: 'Ethics', type: 'mc', difficulty: 2,
    stem: 'A nurse promises a client in pain to return with medication in 10 minutes but becomes occupied elsewhere and returns after an hour. Which ethical principle has the nurse failed to uphold?',
    options: ['Justice', 'Fidelity', 'Autonomy', 'Veracity'],
    answer: [1],
    rationale: 'Fidelity is faithfulness to commitments made to the client. Justice concerns fair distribution, autonomy concerns self-determination, and veracity concerns truthfulness rather than follow-through on a promise.',
    strategy: 'Fidelity is keeping your word. If a nurse promised something and did not deliver, that is the principle.' },

  { id: 'MOC-117', cat: 'moc', sub: 'Prioritization', type: 'order', difficulty: 3,
    stem: 'A client develops signs of anaphylaxis after an antibiotic infusion. Place the nurse\'s actions in priority order.',
    options: [
      'Stop the infusion immediately',
      'Assess the airway and call for emergency assistance',
      'Administer epinephrine per protocol',
      'Administer high-flow oxygen and prepare for possible intubation',
      'Document the reaction and add the allergy to the record'
    ],
    answer: [0, 1, 2, 3, 4],
    rationale: 'Stopping the causative agent halts further exposure, airway assessment with a call for help mobilizes resources, epinephrine is the definitive first-line treatment and must not be delayed, oxygen and airway preparation support ventilation, and documentation follows stabilization.',
    strategy: 'Anaphylaxis: stop the cause, call for help, give epinephrine. Antihistamines and steroids are adjuncts, never first.' },

  { id: 'MOC-118', cat: 'moc', sub: 'Continuity of Care', type: 'mc', difficulty: 2,
    stem: 'A client is transferring from the hospital to a skilled nursing facility. Which information is most critical to communicate to the receiving facility?',
    options: [
      'The client\'s food preferences',
      'Current medications, allergies, code status, wound care orders, and pending test results',
      'The names of the client\'s hospital nurses',
      'The client\'s television viewing habits'
    ],
    answer: [1],
    rationale: 'Clinical continuity depends on transmitting the medication list, allergies, code status, active treatment orders, and anything still pending, since these are where transition errors cause harm. Preferences and personal habits are useful for individualizing care but are not safety-critical.',
    strategy: 'Ask what the receiving nurse must know in the first hour to keep this client safe.' },

  { id: 'MOC-119', cat: 'moc', sub: 'Delegation', type: 'mc', difficulty: 2,
    stem: 'The nurse delegates to the UAP the task of assisting a client with a hip precaution protocol to the chair. Which instruction is essential?',
    options: [
      '"Let the client find the position that feels most comfortable."',
      '"Keep the client\'s hips higher than the knees, avoid bending the hip past 90 degrees, and do not let the legs cross midline."',
      '"Use a low chair so the client can sit down easily."',
      '"Have the client sit with legs crossed for stability."'
    ],
    answer: [1],
    rationale: 'Posterior hip precautions prohibit flexion beyond 90 degrees, adduction past midline, and internal rotation, so an elevated seat and correct leg positioning prevent dislocation. Comfort-based positioning, a low chair, and crossed legs all violate the precautions.',
    strategy: 'Hip precautions: no bending past 90, no crossing midline, no turning the toes inward. Elevated seats and abduction pillows enforce them.' },

  { id: 'MOC-120', cat: 'moc', sub: 'Prioritization', type: 'mc', difficulty: 3,
    stem: 'A nurse is planning care for a client with a new diagnosis of tuberculosis. Which intervention takes priority?',
    options: [
      'Teaching the client about the medication regimen',
      'Placing the client in an airborne infection isolation room',
      'Arranging for a nutritional consultation',
      'Screening the client for depression'
    ],
    answer: [1],
    rationale: 'Isolation interrupts transmission and protects everyone else in the facility, so it precedes all other interventions. Medication teaching, nutrition, and psychosocial screening are all part of the plan but do not prevent immediate spread.',
    strategy: 'Communicable disease questions: contain the transmission first, then treat and teach.' },

  { id: 'MOC-121', cat: 'moc', sub: 'Legal Rights', type: 'mc', difficulty: 2,
    stem: 'A nurse floats to a unit and is assigned eight clients, which the nurse believes is unsafe. What is the most appropriate action?',
    options: [
      'Leave the unit and go home',
      'Accept the assignment silently and do the best possible',
      'Formally notify the supervisor in writing of the safety concern, request additional resources, and remain with the clients',
      'Refuse to accept report and demand reassignment'
    ],
    answer: [2],
    rationale: 'Leaving constitutes abandonment once the nurse has accepted responsibility, and silent acceptance forfeits both client protection and the nurse\'s legal position. Documenting the concern in writing, requesting help, and continuing to provide care preserves client safety while creating a record. Refusing report outright without escalation is not the recognized process.',
    strategy: 'Protest in writing, ask for resources, and stay with your clients. Never walk out.' },

  { id: 'MOC-122', cat: 'moc', sub: 'Quality Improvement', type: 'mc', difficulty: 1,
    stem: 'A hospital is implementing a barcode medication administration system. Which nursing behavior most undermines its safety benefit?',
    options: [
      'Scanning the client\'s wristband at the bedside',
      'Scanning a duplicate barcode kept in the medication room instead of the client\'s band',
      'Reporting scanner failures to the help desk',
      'Verifying the medication against the order when an alert fires'
    ],
    answer: [1],
    rationale: 'Scanning a proxy barcode away from the bedside defeats the entire purpose of the system, which is verifying that this medication is going to this client right now. The other behaviors support the system as designed.',
    strategy: 'Technology workarounds are the most common cause of technology-related harm. The workaround is almost always the wrong answer.' },

  { id: 'MOC-123', cat: 'moc', sub: 'Advocacy', type: 'mc', difficulty: 2,
    stem: 'An older adult client is being discharged to the care of a family member the client appears fearful of. The client has unexplained bruising in various stages of healing. What should the nurse do?',
    options: [
      'Proceed with discharge as planned and document the observations',
      'Delay discharge, report the suspected abuse to adult protective services, and notify the provider and social work',
      'Ask the family member about the bruises in front of the client',
      'Advise the client to call the police if anything happens at home'
    ],
    answer: [1],
    rationale: 'Nurses are mandated reporters, and suspicion is the reporting threshold rather than proof. Discharging the client into a suspected abusive situation is unsafe, confronting the suspected abuser in the client\'s presence increases risk, and placing responsibility on the client to call for help is inadequate protection.',
    strategy: 'Mandated reporting requires suspicion, not evidence. Report and keep the client safe in the meantime.' },

  { id: 'MOC-124', cat: 'moc', sub: 'Prioritization', type: 'mc', difficulty: 3,
    stem: 'A nurse is caring for a client with a nasogastric tube for decompression. Which finding requires immediate action?',
    options: [
      'Gastric output of 400 mL over 8 hours',
      'The client reports a sore throat',
      'The client is coughing, choking, and unable to speak clearly after a repositioning attempt',
      'Green-tinged gastric aspirate'
    ],
    answer: [2],
    rationale: 'Coughing, choking, and altered voice after tube manipulation suggest the tube has migrated into the airway, which is an immediate airway emergency requiring removal and reassessment. Gastric output of 400 mL in 8 hours is within expectation for decompression, a sore throat is common, and green aspirate is normal gastric content.',
    strategy: 'Airway symptoms after any tube manipulation mean the tube is in the wrong place until proven otherwise.' },

  { id: 'MOC-125', cat: 'moc', sub: 'Case Management', type: 'mc', difficulty: 2,
    stem: 'A client with a spinal cord injury will require intermittent catheterization at home. Which discharge preparation is most important?',
    options: [
      'Providing a printed instruction sheet',
      'Having the client and caregiver perform return demonstrations of the catheterization technique until competent',
      'Scheduling a follow-up appointment in 6 weeks',
      'Ordering a 1-month supply of catheters'
    ],
    answer: [1],
    rationale: 'Psychomotor skills are learned by doing, and return demonstration is the only way to verify the client and caregiver can perform catheterization safely and aseptically. Written material, a distant follow-up, and supplies are all necessary but none confirms competence.',
    strategy: 'For any hands-on skill, the answer is return demonstration, not written instructions.' },

  { id: 'MOC-126', cat: 'moc', sub: 'Ethics', type: 'mc', difficulty: 2,
    stem: 'A client offers the nurse a substantial cash gift for the excellent care received. What is the nurse\'s most appropriate response?',
    options: [
      'Accept the gift so the client does not feel rejected',
      'Thank the client warmly, decline the money, and explain that the facility has a way to recognize staff formally',
      'Accept the gift and share it with the unit',
      'Tell the client that accepting gifts is illegal'
    ],
    answer: [1],
    rationale: 'Accepting substantial personal gifts creates a conflict of interest and can distort the professional relationship. Declining graciously while offering a legitimate avenue for recognition preserves both the boundary and the client\'s dignity. Accepting, redistributing, or citing illegality misrepresents the issue.',
    strategy: 'Decline the gift, keep the relationship. Redirect the gratitude somewhere appropriate.' },

  { id: 'MOC-127', cat: 'moc', sub: 'Supervision', type: 'sata', difficulty: 2,
    stem: 'A nurse is supervising care of a client in traction. Which observations require the nurse to intervene? Select all that apply.',
    options: [
      'The weights are resting on the floor',
      'The ropes move freely over the pulleys',
      'A UAP has removed the weights to reposition the client',
      'The client\'s heels are elevated off the mattress',
      'The client\'s body is in alignment with the pull of the traction',
      'Knots in the ropes are positioned against the pulley'
    ],
    answer: [0, 2, 5],
    rationale: 'Traction weights must hang freely at all times, must never be removed without a specific order, and knots must not jam against a pulley, all of which interrupt the therapeutic pull. Freely moving ropes, elevated heels to protect skin, and correct body alignment are all desirable.',
    strategy: 'Traction rule: weights hang free, ropes run free, alignment maintained, and nobody removes the weights.' },

  { id: 'MOC-128', cat: 'moc', sub: 'Prioritization', type: 'mc', difficulty: 2,
    stem: 'A nurse receives a critical laboratory value by telephone. What is the nurse\'s first action?',
    options: [
      'Notify the provider immediately',
      'Read back the value to the caller to verify accuracy',
      'Document the result in the chart',
      'Recheck the client\'s vital signs'
    ],
    answer: [1],
    rationale: 'Read-back verification of any critical value or verbal order is a national patient safety requirement and prevents acting on a misheard number. Provider notification, documentation, and reassessment all follow once the value is confirmed.',
    strategy: 'Verbal orders and critical values are always read back and verified before anything else happens.' },

  { id: 'MOC-129', cat: 'moc', sub: 'Interdisciplinary Care', type: 'mc', difficulty: 2,
    stem: 'A client with a new diagnosis of celiac disease needs help identifying gluten-containing foods and planning meals. Which team member should the nurse consult?',
    options: ['Registered dietitian', 'Pharmacist', 'Social worker', 'Respiratory therapist'],
    answer: [0],
    rationale: 'A registered dietitian provides medical nutrition therapy including label reading, meal planning, and identification of hidden gluten. Pharmacists address medications, social workers address resources and coping, and respiratory therapists address airway and ventilation.',
    strategy: 'Any question centered on what a client should eat routes to the dietitian.' },

  { id: 'MOC-130', cat: 'moc', sub: 'Assignment', type: 'mc', difficulty: 3,
    stem: 'A pregnant nurse is working on a medical unit. Which client assignment should the charge nurse avoid giving this nurse?',
    options: [
      'A client with a wound infected with methicillin-resistant Staphylococcus aureus',
      'A client receiving internal radiation therapy with a cesium implant',
      'A client with type 2 diabetes and cellulitis',
      'A client recovering from a total knee replacement'
    ],
    answer: [1],
    rationale: 'Internal radiation sources expose caregivers to ionizing radiation, which is contraindicated during pregnancy. Contact precautions for a resistant organism protect the nurse adequately with proper personal protective equipment, and the remaining assignments pose no special risk.',
    strategy: 'Pregnant nurses avoid internal radiation implants, and also avoid clients with rubella, cytomegalovirus, varicella, and certain chemotherapy handling.' },

  { id: 'MOC-131', cat: 'moc', sub: 'Confidentiality', type: 'mc', difficulty: 2,
    stem: 'A client asks to see their own medical record. What is the nurse\'s best response?',
    options: [
      '"Records are the property of the hospital and cannot be viewed by clients."',
      '"You have a right to access your record. I will contact health information management to arrange it."',
      '"I will read the highlights to you instead."',
      '"You will need a court order to see your record."'
    ],
    answer: [1],
    rationale: 'Clients have a legal right of access to their own health information, arranged through the appropriate department per policy. Denying access, substituting a selective summary, and requiring a court order all violate that right.',
    strategy: 'The record belongs to the facility physically, but the information belongs to the client.' },

  { id: 'MOC-132', cat: 'moc', sub: 'Prioritization', type: 'mc', difficulty: 3,
    stem: 'A nurse is caring for a client 12 hours after a thyroidectomy. Which finding requires the most immediate action?',
    options: [
      'Hoarseness when speaking',
      'A sensation of tightness or fullness at the incision with difficulty swallowing',
      'A temperature of 37.9 degrees Celsius',
      'Tingling around the mouth'
    ],
    answer: [1],
    rationale: 'Neck tightness with dysphagia after thyroidectomy suggests an expanding hematoma that can compress the trachea and obstruct the airway within minutes. Hoarseness may indicate laryngeal nerve irritation and warrants monitoring, a mild temperature is common, and perioral tingling signals hypocalcemia that requires prompt but not immediate airway-level action.',
    strategy: 'After neck surgery, always rank airway compression above nerve injury and above electrolyte symptoms.' },

  { id: 'MOC-133', cat: 'moc', sub: 'Resource Management', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for six clients and realizes not all planned care can be completed. Which approach is best?',
    options: [
      'Complete tasks in the order they appear on the worklist',
      'Reprioritize based on client acuity, delegate what is appropriate, and communicate outstanding items in hand-off',
      'Skip documentation to save time',
      'Ask clients to wait until the next shift for all non-urgent needs'
    ],
    answer: [1],
    rationale: 'Reprioritizing by acuity, delegating appropriately, and handing off what remains keeps the highest-risk needs met and maintains continuity. Working sequentially ignores acuity, skipping documentation is unsafe and legally indefensible, and blanket deferral abandons legitimate needs without triage.',
    strategy: 'When time runs short, reprioritize and communicate. Never solve it by cutting documentation.' },

  { id: 'MOC-134', cat: 'moc', sub: 'Ethics', type: 'mc', difficulty: 2,
    stem: 'A family insists that the nurse not tell the client about a new cancer diagnosis because "it will destroy her." The client is alert, oriented, and has asked what the tests showed. Which action is most appropriate?',
    options: [
      'Comply with the family\'s wishes to preserve family harmony',
      'Tell the client the diagnosis immediately without further discussion',
      'Explore with the family their fears, explain the client\'s right to know, and arrange for the provider to disclose with support present',
      'Tell the client that the results are not back yet'
    ],
    answer: [2],
    rationale: 'The client\'s right to information is not negated by family preference, but a skillful approach addresses the family\'s fear and arranges disclosure by the provider with support in place. Withholding violates autonomy and veracity, abrupt unsupported disclosure is unkind, and lying is a clear breach of veracity.',
    strategy: 'When family and client rights collide, do not choose sides — bring the family along toward the client\'s right.' },

  { id: 'MOC-135', cat: 'moc', sub: 'Delegation', type: 'mc', difficulty: 3,
    stem: 'A UAP reports that a client with dementia has become increasingly agitated over the last hour. What should the nurse do first?',
    options: [
      'Instruct the UAP to sit with the client',
      'Assess the client for pain, a full bladder, constipation, and environmental triggers',
      'Request an order for an antipsychotic medication',
      'Apply soft wrist restraints'
    ],
    answer: [1],
    rationale: 'New agitation in dementia usually reflects an unmet physical need or environmental stressor, and identifying the cause resolves the behavior without medication. Assigning a sitter without assessment ignores the cause, chemical restraint is not first-line, and physical restraint is a last resort that often worsens agitation.',
    strategy: 'Agitation in dementia: look for pain, urine, stool, hunger, and noise before reaching for a drug.' }
  ,
  { id: 'MOC-136', cat: 'moc', sub: 'Prioritization', type: 'mc', difficulty: 3,
    stem: 'A nurse is caring for a client with a colostomy. Which finding should be reported to the provider immediately?',
    options: [
      'The stoma is pink and moist',
      'The stoma appears dusky purple with no output for 12 hours',
      'Semi-formed stool in the pouch',
      'Slight bleeding when the stoma is cleaned'
    ],
    answer: [1],
    rationale: 'A dusky or purple stoma indicates ischemia and possible necrosis and is a surgical emergency. A pink moist stoma is healthy, semi-formed stool is expected from a descending colostomy, and minor bleeding with cleaning is normal because stomal tissue is highly vascular.',
    strategy: 'Stoma color is the vital sign of an ostomy. Pink or red is good, dusky, purple, or black is an emergency.' },

  { id: 'MOC-137', cat: 'moc', sub: 'Legal Rights', type: 'mc', difficulty: 2,
    stem: 'A nurse takes a verbal order from a provider during an emergency. Which action is required?',
    options: [
      'Write the order, read it back to the provider, and have the provider sign it within the facility time frame',
      'Enter the order and ask another nurse to sign as a witness instead of the provider',
      'Rely on memory and document after the emergency resolves',
      'Refuse all verbal orders regardless of circumstance'
    ],
    answer: [0],
    rationale: 'Verbal orders are permitted in emergencies but must be written, read back for verification, and countersigned by the prescriber within the policy time frame. Nurse witnesses do not substitute for prescriber signature, memory-based documentation is unreliable, and blanket refusal is impractical in a genuine emergency.',
    strategy: 'Verbal order equals write it, read it back, get it signed.' },

  { id: 'MOC-138', cat: 'moc', sub: 'Case Management', type: 'mc', difficulty: 2,
    stem: 'A client with chronic obstructive pulmonary disease is being discharged on home oxygen. Which teaching point is most important for safety?',
    options: [
      'Store the concentrator in a closed closet to reduce noise',
      'Keep the oxygen at least 10 feet from open flames and do not permit smoking in the home',
      'Increase the flow rate whenever short of breath',
      'Remove the oxygen during meals'
    ],
    answer: [1],
    rationale: 'Oxygen vigorously supports combustion, making fire the primary home hazard. Concentrators need open airflow rather than a closed closet, self-titrating flow in COPD risks suppressing hypoxic drive and causing carbon dioxide retention, and oxygen is generally continued during meals when prescribed continuously.',
    strategy: 'Home oxygen teaching always leads with fire safety, and never with self-adjusting the liter flow.' },

  { id: 'MOC-139', cat: 'moc', sub: 'Prioritization', type: 'mc', difficulty: 3,
    stem: 'A nurse is caring for a client 2 days after a total hip arthroplasty. Which finding requires immediate intervention?',
    options: [
      'Ecchymosis around the surgical site',
      'Sudden severe hip pain with the operative leg shortened and internally rotated',
      'Serosanguineous drainage on the dressing',
      'Difficulty sleeping in the required position'
    ],
    answer: [1],
    rationale: 'Sudden severe pain with shortening and internal rotation of the operative leg indicates hip dislocation, which compromises circulation and requires immediate immobilization and provider notification. Ecchymosis and serosanguineous drainage are expected, and sleep difficulty is a comfort issue.',
    strategy: 'After joint replacement, a limb that suddenly changes length or rotation has dislocated. Do not move it further.' },

  { id: 'MOC-140', cat: 'moc', sub: 'Quality Improvement', type: 'mc', difficulty: 2,
    stem: 'A nurse manager wants to reduce catheter-associated urinary tract infections on the unit. Which intervention has the strongest evidence base?',
    options: [
      'Change indwelling catheters every 72 hours routinely',
      'Implement a nurse-driven protocol to review the necessity of each catheter daily and remove it when criteria are no longer met',
      'Irrigate catheters daily with antiseptic solution',
      'Apply antibiotic ointment to the meatus twice daily'
    ],
    answer: [1],
    rationale: 'The single most effective intervention is minimizing catheter days through daily necessity review and prompt removal. Routine scheduled changes, antiseptic irrigation, and meatal antibiotic ointment do not reduce infection and may increase risk by breaking the closed system or promoting resistance.',
    strategy: 'For device-associated infections, the winning answer is almost always "remove the device sooner."' },

  { id: 'MOC-141', cat: 'moc', sub: 'Advocacy', type: 'mc', difficulty: 2,
    stem: 'A client who is deaf is scheduled for a procedure and communicates using American Sign Language. What should the nurse arrange?',
    options: [
      'Written notes exchanged with the client',
      'A qualified ASL interpreter present for the consent discussion and teaching',
      'A family member who knows some signs',
      'Speaking slowly and loudly so the client can lip read'
    ],
    answer: [1],
    rationale: 'Effective communication is a legal right, and for a client whose primary language is ASL that means a qualified interpreter, since English literacy and ASL fluency are distinct and written notes often miss nuance. Family members are not qualified interpreters, and lip reading captures only a fraction of speech.',
    strategy: 'ASL is a separate language, not English with hands. Written English is not an automatic substitute.' },

  { id: 'MOC-142', cat: 'moc', sub: 'Supervision', type: 'mc', difficulty: 2,
    stem: 'A new nurse asks the preceptor when it is acceptable to accept a text message order from a provider. Which response is correct?',
    options: [
      '"Text orders are acceptable for any non-controlled medication."',
      '"Text orders are not acceptable; orders must be entered by the provider or given verbally with read-back and countersigned."',
      '"Text orders are acceptable if you screenshot them for the chart."',
      '"Text orders are acceptable during nights and weekends only."'
    ],
    answer: [1],
    rationale: 'Standard-of-practice guidance prohibits text messaging of orders because of identity verification, security, and record integrity concerns. Orders come through direct provider entry or as a verbal order with read-back and countersignature. Screenshots and time-of-day exceptions do not resolve the underlying problems.',
    strategy: 'Orders enter the record through the provider or through a verified verbal process. Never through a text message.' },

  { id: 'MOC-143', cat: 'moc', sub: 'Prioritization', type: 'sata', difficulty: 3,
    stem: 'A nurse is triaging clients arriving at a clinic. Which clients require same-day evaluation? Select all that apply.',
    options: [
      'A client with diabetes reporting a foot ulcer with surrounding redness and drainage',
      'A client requesting a form completed for a gym membership',
      'A client on chemotherapy with a temperature of 38.3 degrees Celsius',
      'A client with a 3-week history of mild seasonal allergy symptoms',
      'A pregnant client at 32 weeks reporting decreased fetal movement',
      'A client requesting a routine cholesterol recheck'
    ],
    answer: [0, 2, 4],
    rationale: 'An infected diabetic foot ulcer risks rapid progression to osteomyelitis, fever in a neutropenic client is a medical emergency, and decreased fetal movement requires prompt fetal assessment. Forms, chronic mild allergies, and routine laboratory rechecks are all schedulable.',
    strategy: 'Fever plus chemotherapy is always urgent. So is any decrease in fetal movement.' },

  { id: 'MOC-144', cat: 'moc', sub: 'Interdisciplinary Care', type: 'mc', difficulty: 2,
    stem: 'A client is being evaluated for discharge but the family reports they cannot manage the client\'s complex medication regimen and wound care. Which team member should the nurse involve first?',
    options: ['Chaplain', 'Case manager or discharge planner', 'Physical therapist', 'Volunteer services'],
    answer: [1],
    rationale: 'The case manager coordinates home health, skilled services, equipment, and level-of-care decisions, which is exactly what this gap requires. Spiritual care, mobility therapy, and volunteers do not resolve a care-capacity problem.',
    strategy: 'When the barrier to discharge is who will provide the care, the answer is the case manager.' },

  { id: 'MOC-145', cat: 'moc', sub: 'Delegation', type: 'mc', difficulty: 2,
    stem: 'Which action by a UAP caring for a client on seizure precautions requires the nurse to intervene?',
    options: [
      'Padding the side rails',
      'Keeping suction equipment available at the bedside',
      'Placing an oral airway in the client\'s mouth at the onset of a seizure',
      'Turning the client onto their side after the seizure ends'
    ],
    answer: [2],
    rationale: 'Nothing is inserted into the mouth during a seizure because it risks dental injury, soft tissue trauma, and airway obstruction. Padded rails, available suction, and side-lying positioning afterward to protect the airway are all correct.',
    strategy: 'During a seizure: protect the head, do not restrain, put nothing in the mouth, time it, and turn them after.' },

  { id: 'MOC-146', cat: 'moc', sub: 'Ethics', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client who is a former romantic partner. What is the most appropriate action?',
    options: [
      'Provide care as usual since the nurse is a professional',
      'Notify the charge nurse and request reassignment to preserve professional boundaries',
      'Care for the client but avoid discussing anything personal',
      'Ask the client whether they mind'
    ],
    answer: [1],
    rationale: 'A prior intimate relationship makes an objective professional relationship difficult and creates a boundary violation risk for both parties. Requesting reassignment before assuming care is the appropriate step. Proceeding, self-limiting conversation, or placing the decision on the client all fail to resolve the conflict.',
    strategy: 'Pre-existing personal relationships with a client are a reassignment issue, handled before you accept the assignment.' },

  { id: 'MOC-147', cat: 'moc', sub: 'Prioritization', type: 'mc', difficulty: 3,
    stem: 'A nurse is caring for a client receiving total parenteral nutrition through a central line. Which finding requires immediate action?',
    options: [
      'Blood glucose of 148 mg/dL',
      'Sudden dyspnea, chest pain, and hypotension after the tubing was changed',
      'A weight gain of 0.4 kg over 3 days',
      'The infusion is 30 minutes behind schedule'
    ],
    answer: [1],
    rationale: 'Sudden dyspnea, chest pain, and hypotension immediately after a central line was opened suggest air embolism. The nurse clamps the line, places the client in left lateral Trendelenburg position, administers oxygen, and calls for help. Mild hyperglycemia is common with parenteral nutrition, modest weight gain is expected, and a schedule delay is corrected without abrupt rate changes.',
    strategy: 'Any acute cardiopulmonary event right after a central line is opened is an air embolism until proven otherwise: clamp, left side, head down, oxygen.' },

  { id: 'MOC-148', cat: 'moc', sub: 'Continuity of Care', type: 'mc', difficulty: 1,
    stem: 'Which practice best supports safe hand-off communication at change of shift?',
    options: [
      'Giving report from memory while walking to the parking lot',
      'Using a standardized format at the bedside with an opportunity for questions and read-back',
      'Recording report on a voicemail system to save time',
      'Providing only the information the oncoming nurse asks about'
    ],
    answer: [1],
    rationale: 'Standardized bedside hand-off with interactive questioning and verification reduces omissions, includes the client, and allows both nurses to visually confirm lines, drips, and wounds. Memory-based, recorded, or purely reactive reports all produce gaps.',
    strategy: 'Structured, at the bedside, two-way. Those three features define a safe hand-off.' },

  { id: 'MOC-149', cat: 'moc', sub: 'Assignment', type: 'mc', difficulty: 2,
    stem: 'A client with active Clostridioides difficile infection needs a room. Which assignment is appropriate?',
    options: [
      'A private room with contact precautions and soap-and-water hand hygiene',
      'A semiprivate room with another client who has C. difficile, using alcohol-based hand rub',
      'A private room with airborne precautions',
      'Any available bed with standard precautions'
    ],
    answer: [0],
    rationale: 'C. difficile requires contact precautions in a private room, and hand hygiene must be soap and water because alcohol does not kill spores. Cohorting is sometimes permitted but the hand hygiene described in that option is wrong, airborne precautions are unnecessary, and standard precautions alone are insufficient.',
    strategy: 'Spores resist alcohol. C. difficile means gown, gloves, private room, and soap and water.' },

  { id: 'MOC-150', cat: 'moc', sub: 'Resource Management', type: 'mc', difficulty: 2,
    stem: 'A nurse is planning the shift. Which activity best represents effective time management?',
    options: [
      'Completing all documentation at the end of the shift',
      'Clustering care activities so that assessments, medications, and hygiene occur in the same client visit when appropriate',
      'Responding to every request the moment it is made regardless of priority',
      'Performing all tasks personally to ensure quality'
    ],
    answer: [1],
    rationale: 'Clustering care reduces interruptions, conserves the nurse\'s time, and lets the client rest between visits. End-of-shift documentation risks omissions, reacting to every request without triage displaces higher priorities, and refusing to delegate wastes the team\'s capacity.',
    strategy: 'Cluster care, chart in real time, delegate what you can. Those three habits recover the most time.' },

  { id: 'MOC-151', cat: 'moc', sub: 'Legal Rights', type: 'mc', difficulty: 2,
    stem: 'A client with a psychiatric illness has been determined by a court to lack decision-making capacity and has an appointed guardian. The client refuses a medication the guardian has authorized. What should the nurse do?',
    options: [
      'Administer the medication forcibly since the guardian consented',
      'Withhold the medication, document the refusal, and notify the provider and guardian to determine the next step',
      'Tell the client they have no right to refuse',
      'Hide the medication in food'
    ],
    answer: [1],
    rationale: 'Even with guardian consent, a nurse does not physically force medication outside an emergency or a specific legal authorization. The refusal is documented and the provider and guardian are notified so options, including a court order for treatment over objection, can be considered. Force, coercive statements, and covert administration are all unacceptable.',
    strategy: 'Legal authority to consent is not the same as authority to force. Document, notify, escalate.' },

  { id: 'MOC-152', cat: 'moc', sub: 'Prioritization', type: 'mc', difficulty: 3,
    stem: 'Which client requires the closest monitoring during the first hour of the shift?',
    options: [
      'A client 30 minutes after receiving IV morphine for the first time',
      'A client with a healing pressure injury',
      'A client awaiting an outpatient physical therapy appointment',
      'A client on a stable oral pain regimen'
    ],
    answer: [0],
    rationale: 'The first exposure to an opioid carries the highest risk of respiratory depression and hypotension, so sedation level and respiratory rate must be monitored closely. The other clients are stable.',
    strategy: 'First doses of anything, and especially first opioids, are always the monitoring priority.' },

  { id: 'MOC-153', cat: 'moc', sub: 'Ethics', type: 'mc', difficulty: 2,
    stem: 'A student nurse asks why an ethics committee exists. Which explanation is most accurate?',
    options: [
      '"It decides which treatments the hospital will pay for."',
      '"It provides consultation, education, and policy guidance when values conflict in clinical care."',
      '"It disciplines staff who violate the code of ethics."',
      '"It replaces the family in decision making for incapacitated clients."'
    ],
    answer: [1],
    rationale: 'Ethics committees offer case consultation, staff and community education, and policy development when values conflict, and their recommendations are advisory rather than binding. They do not make coverage decisions, discipline employees, or displace surrogate decision makers.',
    strategy: 'Ethics committees advise and educate. They do not decide, pay, or punish.' },

  { id: 'MOC-154', cat: 'moc', sub: 'Delegation', type: 'sata', difficulty: 2,
    stem: 'The nurse is planning delegation for the shift. Which principles guide the decision? Select all that apply.',
    options: [
      'The task must be within the delegatee\'s scope and demonstrated competence',
      'The client\'s condition must be stable with a predictable outcome',
      'The nurse retains accountability for the outcome of the delegated task',
      'Delegation transfers legal responsibility to the delegatee',
      'Clear directions and expectations for reporting back must be given',
      'Any task may be delegated if the unit is short-staffed'
    ],
    answer: [0, 1, 2, 4],
    rationale: 'Delegation requires the right task, the right circumstances, the right person, the right directions, and the right supervision, and the delegating nurse remains accountable throughout. Legal accountability is never transferred, and staffing pressure does not expand what may be delegated.',
    strategy: 'The five rights of delegation: task, circumstance, person, direction, supervision. Accountability never moves.' },

  { id: 'MOC-155', cat: 'moc', sub: 'Prioritization', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client with a traumatic brain injury. Which nursing action should be avoided?',
    options: [
      'Maintaining the head of the bed at 30 degrees',
      'Keeping the head and neck in neutral alignment',
      'Clustering nursing care activities to allow long uninterrupted rest periods with minimal stimulation',
      'Performing prolonged suctioning to fully clear secretions'
    ],
    answer: [3],
    rationale: 'Prolonged suctioning raises intracranial pressure sharply and should be limited to brief passes with hyperoxygenation between. Head elevation at 30 degrees, neutral neck alignment to preserve venous drainage, and minimizing stimulation are all correct, though care is spaced rather than heavily clustered when pressure is labile.',
    strategy: 'Anything that raises intrathoracic or intra-abdominal pressure raises intracranial pressure: coughing, suctioning, straining, hip flexion, neck rotation.' },

  { id: 'MOC-156', cat: 'moc', sub: 'Quality Improvement', type: 'mc', difficulty: 2,
    stem: 'Which finding on a unit dashboard would most concern a nurse manager focused on client safety?',
    options: [
      'Client satisfaction with meal quality declined 4 percent',
      'Falls with injury increased from 1 to 6 per 1,000 patient days',
      'Average discharge time moved 20 minutes later',
      'Supply costs rose 3 percent'
    ],
    answer: [1],
    rationale: 'A sixfold increase in falls with injury represents direct client harm and is the clear safety priority. Meal satisfaction, discharge timing, and supply costs affect experience and finances rather than physical safety.',
    strategy: 'On any dashboard, harm metrics outrank experience and efficiency metrics.' },

  { id: 'MOC-157', cat: 'moc', sub: 'Case Management', type: 'mc', difficulty: 2,
    stem: 'A client requires IV antibiotics for 4 more weeks but is otherwise medically stable and has a supportive family. Which discharge plan is most appropriate?',
    options: [
      'Remain hospitalized for the full course',
      'Discharge home with a peripherally inserted central catheter and home infusion services',
      'Discharge with oral antibiotics substituted without provider input',
      'Transfer to a long-term acute care hospital'
    ],
    answer: [1],
    rationale: 'A stable client with adequate support can complete IV therapy at home with a PICC and home infusion nursing, which reduces cost and hospital-acquired infection risk. Prolonged hospitalization is unnecessary, changing the route without provider input is outside nursing scope, and a long-term acute care facility exceeds the level of care needed.',
    strategy: 'Match the setting to the intensity of care actually required, no more and no less.' },

  { id: 'MOC-158', cat: 'moc', sub: 'Advocacy', type: 'mc', difficulty: 2,
    stem: 'A client tells the nurse they do not understand why they are taking six different medications and feel overwhelmed. What is the nurse\'s best initial action?',
    options: [
      'Provide a printed medication list and move on',
      'Sit with the client, review each medication\'s purpose in plain language, and ask the provider to evaluate the regimen for possible simplification',
      'Tell the client the provider knows best',
      'Suggest the client stop the medications they feel are unnecessary'
    ],
    answer: [1],
    rationale: 'Understanding is the foundation of adherence, and polypharmacy warrants a formal regimen review for deprescribing opportunities. A handout alone does not build understanding, deference shuts down the concern, and stopping medications independently is dangerous.',
    strategy: 'Overwhelm plus polypharmacy equals teach in plain language and ask for a medication review.' },

  { id: 'MOC-159', cat: 'moc', sub: 'Prioritization', type: 'mc', difficulty: 3,
    stem: 'A nurse in the postanesthesia care unit is monitoring four clients. Which requires immediate intervention?',
    options: [
      'A client with a temperature of 36.1 degrees Celsius and shivering',
      'A client whose end-tidal carbon dioxide is rising rapidly with masseter muscle rigidity and tachycardia',
      'A client reporting nausea',
      'A client with a blood pressure of 108/64 mmHg'
    ],
    answer: [1],
    rationale: 'Rising end-tidal carbon dioxide with masseter rigidity and tachycardia after anesthesia signals malignant hyperthermia, a rapidly fatal hypermetabolic crisis requiring immediate discontinuation of triggering agents and dantrolene. Mild hypothermia with shivering, nausea, and a normal blood pressure are all routine postanesthesia findings.',
    strategy: 'The earliest sign of malignant hyperthermia is rising carbon dioxide, not fever. Fever comes late.' },

  { id: 'MOC-160', cat: 'moc', sub: 'Confidentiality', type: 'mc', difficulty: 2,
    stem: 'A law enforcement officer arrives on the unit and asks for information about a client involved in an assault. What should the nurse do?',
    options: [
      'Provide the requested information because it is a criminal matter',
      'Refer the officer to the nursing supervisor or facility legal department and disclose only what law requires',
      'Allow the officer to read the chart directly',
      'Ask the client to speak with the officer immediately'
    ],
    answer: [1],
    rationale: 'Law enforcement requests are handled through defined channels because disclosure rules vary by jurisdiction and by the type of information sought. The nurse does not release records independently, does not grant chart access, and does not compel the client to speak.',
    strategy: 'When someone outside the care team requests information, route the request rather than answer it.' },

  { id: 'MOC-161', cat: 'moc', sub: 'Supervision', type: 'mc', difficulty: 2,
    stem: 'A nurse is orienting a newly hired nurse who has 10 years of experience at another facility. Which approach is most appropriate?',
    options: [
      'Provide the same orientation as for a new graduate',
      'Assess the nurse\'s competencies and tailor orientation to facility-specific systems, policies, and equipment',
      'Shorten orientation to 1 day because of the nurse\'s experience',
      'Assign the nurse a full patient load immediately'
    ],
    answer: [1],
    rationale: 'Orientation should be competency-based: an experienced nurse still needs facility-specific documentation systems, equipment, protocols, and escalation pathways, but not foundational skills already mastered. Identical orientation to a new graduate wastes time, arbitrary shortening skips essentials, and immediate full assignment is unsafe.',
    strategy: 'Orientation is individualized by assessed competence, not by years on a resume.' },

  { id: 'MOC-162', cat: 'moc', sub: 'Interdisciplinary Care', type: 'mc', difficulty: 2,
    stem: 'During a rapid response event, roles must be assigned quickly. Which action by the primary nurse is most appropriate?',
    options: [
      'Perform all interventions personally to maintain control',
      'Provide a concise summary of the client\'s history and current status, then assist with assigned tasks',
      'Leave the room so the team can work',
      'Direct the responding physician on which medications to order'
    ],
    answer: [1],
    rationale: 'The primary nurse holds the context nobody else has and should deliver a focused summary, then take an assigned role. Trying to do everything, leaving, or directing the physician\'s prescribing all reduce the team\'s effectiveness.',
    strategy: 'In a rapid response, your unique value is the story. Give it first, then take a task.' },

  { id: 'MOC-163', cat: 'moc', sub: 'Prioritization', type: 'mc', difficulty: 3,
    stem: 'A nurse is caring for a client with a peripherally inserted central catheter. Which finding requires the most immediate action?',
    options: [
      'The external catheter length is 2 centimeters longer than documented on insertion',
      'The dressing is dated 5 days ago',
      'The client reports mild discomfort at the insertion site',
      'A blood return is present on aspiration'
    ],
    answer: [0],
    rationale: 'An increase in external catheter length means the catheter has migrated and the tip is no longer centrally positioned, making infusion of vesicants or hypertonic solutions dangerous. Infusion is held and imaging is obtained. A 5-day-old dressing is due for change but not urgent, mild discomfort warrants assessment, and blood return is a reassuring finding.',
    strategy: 'Any change in external catheter length means the tip moved. Stop infusing until placement is confirmed.' },

  { id: 'MOC-164', cat: 'moc', sub: 'Ethics', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client who has requested medical aid in dying in a jurisdiction where it is legal, and the nurse has a conscientious objection. What is the appropriate action?',
    options: [
      'Refuse to care for the client at all',
      'Notify the supervisor in advance so care can be transferred without abandoning the client, and continue to provide compassionate care until transfer',
      'Try to persuade the client to change their decision',
      'Participate despite the objection'
    ],
    answer: [1],
    rationale: 'Conscientious objection is recognized, but it must be exercised in advance and without abandoning the client, so care continues until an orderly transfer occurs. Outright refusal is abandonment, attempting to change the client\'s mind violates autonomy, and acting against one\'s conscience is not required.',
    strategy: 'Conscientious objection requires advance notice and a safe transfer. It never permits abandonment.' },

  { id: 'MOC-165', cat: 'moc', sub: 'Delegation', type: 'mc', difficulty: 3,
    stem: 'A nurse delegates hourly rounding to a UAP. Which reportable finding should the nurse specifically instruct the UAP to communicate immediately?',
    options: [
      'A client asks for an extra pillow',
      'A client\'s pulse oximetry reads 88 percent',
      'A client wants the television channel changed',
      'A client says the room is too warm'
    ],
    answer: [1],
    rationale: 'An oxygen saturation of 88 percent is a clinically significant finding requiring nursing assessment and possible intervention, so the nurse specifies it as a report-immediately parameter. Comfort requests are handled by the UAP within their role.',
    strategy: 'Good delegation names the exact numbers that trigger a call. Do not leave "let me know if anything is wrong" as the instruction.' },

  { id: 'MOC-166', cat: 'moc', sub: 'Legal Rights', type: 'mc', difficulty: 2,
    stem: 'A competent client wishes to leave the hospital against medical advice. Which nursing action is required?',
    options: [
      'Physically prevent the client from leaving',
      'Explain the risks of leaving, ask the client to sign the AMA form, notify the provider, and provide discharge instructions and prescriptions',
      'Remove the client\'s IV and say nothing further',
      'Tell the client they will not be allowed to return'
    ],
    answer: [1],
    rationale: 'The client retains the right to leave. The nurse ensures the decision is informed, documents it, notifies the provider, and still provides safe follow-up information, since the client\'s health remains the goal. Physical prevention is false imprisonment, silent discharge omits safety information, and threats about future care are coercive and untrue.',
    strategy: 'AMA discharge still gets teaching, prescriptions, and follow-up. Leaving does not forfeit safe care.' },

  { id: 'MOC-167', cat: 'moc', sub: 'Prioritization', type: 'order', difficulty: 3,
    stem: 'A nurse discovers a fire in a client\'s room. Place the actions in the correct order using the RACE sequence.',
    options: [
      'Rescue clients in immediate danger',
      'Activate the alarm and call for help',
      'Confine the fire by closing doors and windows',
      'Extinguish the fire with the appropriate extinguisher if it is small and safe to do so'
    ],
    answer: [0, 1, 2, 3],
    rationale: 'RACE orders the response: rescue anyone in immediate danger, activate the alarm, confine the fire by closing doors, then extinguish only if the fire is small and containable. Attempting extinguishment before rescue and alarm delays evacuation and notification.',
    strategy: 'RACE for the response, PASS for the extinguisher: pull, aim, squeeze, sweep.' },

  { id: 'MOC-168', cat: 'moc', sub: 'Continuity of Care', type: 'mc', difficulty: 3,
    stem: 'Which client is at highest risk for a medication error at the transition from hospital to home?',
    options: [
      'A 25-year-old on a single antibiotic for 7 days',
      'An 82-year-old on 11 medications, three of which were changed during admission, who lives alone',
      'A 40-year-old on a daily multivitamin',
      'A 55-year-old whose home regimen was unchanged'
    ],
    answer: [1],
    rationale: 'Advanced age, polypharmacy, mid-admission regimen changes, and living alone compound to make this client the highest risk for post-discharge medication error. Simple, unchanged, or single-drug regimens carry much lower risk.',
    strategy: 'Risk stacks: count the medications, count the changes, and ask who is at home to help.' },

  { id: 'MOC-169', cat: 'moc', sub: 'Assignment', type: 'mc', difficulty: 3,
    stem: 'A charge nurse is reassigning clients after one nurse calls out. Which client should be assigned to the nurse who is already caring for a client requiring frequent neurological checks?',
    options: [
      'A client requiring hourly vital signs after a cardiac procedure',
      'A client on a stable oral regimen awaiting a morning discharge',
      'A client on a titrated insulin infusion',
      'A client with a new tracheostomy requiring frequent suctioning'
    ],
    answer: [1],
    rationale: 'A nurse already committed to frequent neurological assessments has limited remaining capacity, so a stable client awaiting discharge is the appropriate addition. Hourly vital signs, titrated insulin, and frequent suctioning would all compete for the same time-intensive attention.',
    strategy: 'Assignment balance is about time, not just count. Never stack two high-frequency-monitoring clients on one nurse.' },

  { id: 'MOC-170', cat: 'moc', sub: 'Quality Improvement', type: 'mc', difficulty: 2,
    stem: 'A nurse notices that the unit\'s hand hygiene compliance is 62 percent. Which action would most effectively raise compliance?',
    options: [
      'Post a sign reminding staff to wash their hands',
      'Provide unit-level feedback on observed compliance rates paired with accessible sanitizer at every point of care and visible leadership modeling',
      'Send an email with the policy attached',
      'Discipline staff observed not performing hand hygiene'
    ],
    answer: [1],
    rationale: 'Multimodal strategies that combine measurement with feedback, easy product access, and leadership role modeling produce durable improvement. Signage and emails alone have minimal effect, and a purely punitive approach suppresses reporting without changing behavior.',
    strategy: 'Behavior change needs feedback plus ease plus modeling. Information alone rarely moves a compliance number.' },

  { id: 'MOC-171', cat: 'moc', sub: 'Prioritization', type: 'mc', difficulty: 2,
    stem: 'A client with a new arteriovenous fistula in the left arm is admitted. Which instruction is most important for the nurse to give the care team?',
    options: [
      'Elevate the left arm on two pillows at all times',
      'Do not take blood pressures, draw blood, or start IVs in the left arm',
      'Apply a warm compress to the fistula every 4 hours',
      'Keep the left arm immobilized in a sling'
    ],
    answer: [1],
    rationale: 'Any compression or puncture of the fistula arm can thrombose the access and cost the client their dialysis lifeline, so the restriction must be communicated to everyone. Constant elevation, routine warm compresses, and immobilization are not indicated and may impair function.',
    strategy: 'Dialysis access arm: no cuff, no needle, no constriction. Post a sign above the bed.' },

  { id: 'MOC-172', cat: 'moc', sub: 'Ethics', type: 'mc', difficulty: 2,
    stem: 'A nurse feels moral distress after repeatedly providing aggressive treatment to a client the nurse believes is suffering without benefit. Which action is most constructive?',
    options: [
      'Suppress the feelings and continue working',
      'Request an ethics consultation and raise the concern in an interdisciplinary goals-of-care discussion',
      'Discuss frustrations with the client\'s family privately',
      'Request a transfer to a different unit'
    ],
    answer: [1],
    rationale: 'Moral distress is addressed by naming the conflict through legitimate channels, and an ethics consultation combined with a goals-of-care discussion can realign the plan with the client\'s values. Suppression leads to burnout, venting to family is inappropriate and undermines the team, and transferring avoids rather than resolves the issue.',
    strategy: 'Moral distress has a professional remedy: ethics consultation and a goals-of-care conversation.' },

  { id: 'MOC-173', cat: 'moc', sub: 'Case Management', type: 'mc', difficulty: 2,
    stem: 'A client with limited English proficiency and no insurance is being discharged with a new diagnosis of hypertension. Which intervention most improves the likelihood of successful management?',
    options: [
      'Provide English-language educational pamphlets',
      'Arrange follow-up at a federally qualified health center with interpreter services and connect the client to a prescription assistance program',
      'Advise the client to return to the emergency department if symptoms worsen',
      'Prescribe the newest available antihypertensive'
    ],
    answer: [1],
    rationale: 'Successful chronic disease management requires an affordable ongoing care source, language-concordant communication, and access to medication. English pamphlets are not usable, emergency department return is not chronic care, and a costly new agent worsens the affordability barrier.',
    strategy: 'Match the plan to the barriers actually present: language, cost, and access to a regular source of care.' },

  { id: 'MOC-174', cat: 'moc', sub: 'Supervision', type: 'mc', difficulty: 2,
    stem: 'A nurse observes a colleague with slurred speech and unsteady gait preparing to administer medications. What is the nurse\'s immediate priority?',
    options: [
      'Ask the colleague if they are feeling well and let them continue',
      'Remove the colleague from client care immediately and notify the supervisor',
      'Follow the colleague to observe their technique',
      'Wait to see whether an error occurs'
    ],
    answer: [1],
    rationale: 'A possibly impaired nurse must be removed from client care at once and the supervisor notified so an evaluation can occur. Allowing the colleague to continue, observing, or waiting for an error all expose clients to serious harm.',
    strategy: 'Suspected impairment means the colleague stops caring for clients right now. Compassion comes after safety.' },

  { id: 'MOC-175', cat: 'moc', sub: 'Prioritization', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client with sepsis. Which intervention should be implemented first?',
    options: [
      'Obtain blood cultures and begin broad-spectrum antibiotics within 1 hour',
      'Arrange transfer to a medical-surgical bed',
      'Provide teaching about infection prevention',
      'Order a dietary consultation'
    ],
    answer: [0],
    rationale: 'Early cultures followed immediately by broad-spectrum antibiotics, alongside fluid resuscitation and lactate measurement, drives survival in sepsis, with mortality rising for each hour of delay. Transfer, teaching, and nutrition consultation are all secondary.',
    strategy: 'Sepsis bundle within the first hour: lactate, cultures before antibiotics, antibiotics, fluids for hypotension.' },

  { id: 'MOC-176', cat: 'moc', sub: 'Advocacy', type: 'mc', difficulty: 2,
    stem: 'A client repeatedly asks for pain medication and a nurse overhears a colleague say the client is "just drug seeking." What is the most appropriate action?',
    options: [
      'Agree and limit the client\'s medication',
      'Perform an objective pain assessment, treat according to the orders, and address the labeling with the colleague and, if needed, the team',
      'Ignore the comment because it does not involve the nurse\'s client',
      'Document the colleague\'s comment in the client\'s record'
    ],
    answer: [1],
    rationale: 'Pain is what the client says it is, and stigmatizing labels lead directly to undertreatment. The nurse assesses objectively, treats as ordered, and challenges the bias. Agreeing perpetuates harm, ignoring it allows the bias to shape care, and charting a colleague\'s remark is inappropriate documentation.',
    strategy: 'Assess and treat the pain first. Bias in the team is a real problem, but the client\'s pain is the emergency.' },

  { id: 'MOC-177', cat: 'moc', sub: 'Interdisciplinary Care', type: 'mc', difficulty: 3,
    stem: 'Which situation most clearly warrants activation of the rapid response team?',
    options: [
      'A client reports an increase in chronic knee pain',
      'A client\'s respiratory rate rises to 32, oxygen saturation falls to 88 percent, and the client becomes confused',
      'A client requests a change in diet',
      'A client\'s IV has infiltrated'
    ],
    answer: [1],
    rationale: 'Tachypnea, hypoxemia, and new confusion together indicate clinical deterioration and meet standard rapid response criteria, allowing intervention before an arrest occurs. Chronic pain, dietary requests, and an infiltrated IV are handled through routine channels.',
    strategy: 'Rapid response triggers are objective: respiratory rate, heart rate, blood pressure, saturation, urine output, mental status, or simply a nurse who is worried.' },

  { id: 'MOC-178', cat: 'moc', sub: 'Legal Rights', type: 'mc', difficulty: 2,
    stem: 'A nurse is asked to sign as a witness for a client\'s surgical consent. What exactly is the nurse attesting to?',
    options: [
      'That the client understands all risks and benefits of the procedure',
      'That the signature is the client\'s, that the client appeared to sign voluntarily, and that the client appeared competent',
      'That the surgeon explained everything correctly',
      'That the procedure is medically necessary'
    ],
    answer: [1],
    rationale: 'The witness attests to the authenticity of the signature, the voluntariness of the act, and the apparent competence of the signer. Verifying understanding and adequacy of the explanation is the provider\'s duty, and medical necessity is a clinical judgment outside the witnessing role.',
    strategy: 'Witnessing is about the signature and the signer, not about the content of the explanation.' },

  { id: 'MOC-179', cat: 'moc', sub: 'Prioritization', type: 'sata', difficulty: 2,
    stem: 'A nurse is caring for a client with acute kidney injury. Which findings require prompt provider notification? Select all that apply.',
    options: [
      'Serum potassium of 6.2 mEq/L with peaked T waves on the monitor',
      'Urine output of 12 mL over the last 3 hours',
      'Serum creatinine that has risen from 1.1 to 3.4 mg/dL in 48 hours',
      'Blood pressure of 132/78 mmHg',
      'New crackles throughout both lung fields with dyspnea',
      'A specific gravity of 1.020'
    ],
    answer: [0, 1, 2, 4],
    rationale: 'Hyperkalemia with electrocardiographic changes threatens lethal arrhythmia, profound oliguria and a tripling creatinine indicate worsening injury, and new bilateral crackles with dyspnea signal volume overload and pulmonary edema. The blood pressure and specific gravity listed are within normal limits.',
    strategy: 'In kidney injury, the three killers are potassium, fluid overload, and acidosis. Scan for those first.' },

  { id: 'MOC-180', cat: 'moc', sub: 'Continuity of Care', type: 'mc', difficulty: 2,
    stem: 'A nurse is completing discharge teaching for a client who had a myocardial infarction. Which client statement indicates the teaching was effective?',
    options: [
      '"I will stop taking my beta blocker once my chest pain goes away."',
      '"If I get chest pain, I will take one nitroglycerin tablet every 5 minutes, and if I still have pain after the first dose I will call 911."',
      '"I should avoid all physical activity from now on."',
      '"I can double my aspirin if I feel any discomfort."'
    ],
    answer: [1],
    rationale: 'Current guidance directs the client to call emergency services if chest pain persists after the first nitroglycerin dose rather than waiting through three doses. Beta blockers are continued long-term for mortality benefit, graded activity through cardiac rehabilitation is recommended, and self-doubling aspirin is unsafe.',
    strategy: 'Post-MI teaching: never stop the beta blocker, call after the first unrelieved nitroglycerin, and exercise per cardiac rehab.' }
]
