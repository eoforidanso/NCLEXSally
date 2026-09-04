export default [
  { id: 'BCC-001', cat: 'bcc', sub: 'Nutrition', type: 'mc', difficulty: 2,
    stem: 'A client with chronic kidney disease is on a renal diet. Which food choice indicates the teaching was effective?',
    options: ['Baked potato with skin', 'White rice with steamed green beans', 'Banana and orange juice', 'Tomato soup with crackers'],
    answer: [1],
    rationale: 'White rice and green beans are low in potassium, phosphorus, and sodium. Potatoes, bananas, orange juice, and tomatoes are all high-potassium foods, and canned soups and crackers are high in sodium.',
    strategy: 'High-potassium foods to know: potatoes, bananas, oranges, tomatoes, avocado, spinach, and salt substitutes.' },

  { id: 'BCC-002', cat: 'bcc', sub: 'Nutrition', type: 'mc', difficulty: 2,
    stem: 'A client taking warfarin asks about diet. Which instruction is correct?',
    options: [
      '"Avoid all green vegetables completely."',
      '"Keep your intake of vitamin K-containing foods such as leafy greens consistent from week to week rather than eliminating them."',
      '"Eat as much spinach as you like."',
      '"Vitamin K has no effect on warfarin."'
    ],
    answer: [1],
    rationale: 'Warfarin antagonizes vitamin K, so consistency rather than avoidance keeps the INR stable. Complete elimination and wide swings in intake both destabilize anticoagulation.',
    strategy: 'Warfarin and vitamin K: consistency, not avoidance. Sudden changes in either direction move the INR.' },

  { id: 'BCC-003', cat: 'bcc', sub: 'Mobility', type: 'sata', difficulty: 1,
    stem: 'Which complications result from prolonged immobility? Select all that apply.',
    options: ['Pressure injury', 'Venous thromboembolism', 'Increased bone density', 'Atelectasis and pneumonia', 'Orthostatic hypotension', 'Constipation'],
    answer: [0, 1, 3, 4, 5],
    rationale: 'Immobility causes tissue ischemia over bony prominences, venous stasis and clotting, reduced lung expansion with secretion retention, cardiovascular deconditioning with orthostasis, and slowed peristalsis. Bone demineralizes rather than densifies without weight-bearing stress.',
    strategy: 'Immobility harms every system. If an option says a function improves with bed rest, it is wrong.' },

  { id: 'BCC-004', cat: 'bcc', sub: 'Skin Integrity', type: 'mc', difficulty: 2,
    stem: 'A nurse assesses a client\'s sacrum and finds intact skin with non-blanchable erythema. How should this be staged?',
    options: ['Stage 1 pressure injury', 'Stage 2 pressure injury', 'Stage 3 pressure injury', 'Deep tissue pressure injury'],
    answer: [0],
    rationale: 'Stage 1 is intact skin with non-blanchable redness. Stage 2 involves partial-thickness loss with an open shallow ulcer or blister, stage 3 extends into subcutaneous fat, and a deep tissue injury appears as persistent non-blanchable deep red, maroon, or purple discoloration or a blood-filled blister.',
    strategy: 'Stage 1 intact and red, 2 partial thickness, 3 into fat, 4 to bone or tendon, unstageable when covered by slough or eschar.' },

  { id: 'BCC-005', cat: 'bcc', sub: 'Elimination', type: 'mc', difficulty: 2,
    stem: 'A client reports not having a bowel movement in 4 days and now has liquid stool leaking around a hard mass. What should the nurse suspect?',
    options: ['Infectious diarrhea', 'Fecal impaction with overflow', 'Irritable bowel syndrome', 'Normal bowel pattern variation'],
    answer: [1],
    rationale: 'Liquid stool seeping around a retained hard mass is the classic presentation of impaction with overflow incontinence, and treating it as diarrhea with antidiarrheals would worsen it. Digital assessment, an oil retention enema, and manual disimpaction per policy are the interventions.',
    strategy: 'Diarrhea after days of constipation is impaction until proven otherwise. Never give an antidiarrheal.' },

  { id: 'BCC-006', cat: 'bcc', sub: 'Comfort', type: 'mc', difficulty: 2,
    stem: 'A client reports pain of 8 out of 10 but is laughing and talking on the phone. What should the nurse do?',
    options: [
      'Document that the client is not in pain',
      'Accept the client\'s report, administer analgesia as ordered, and continue to assess',
      'Tell the client the behavior does not match the report',
      'Reduce the ordered dose'
    ],
    answer: [1],
    rationale: 'Pain is subjective and clients use distraction and social interaction as coping strategies, particularly with chronic pain. The self-report is the standard, and behavioral observation does not override it. Discounting, confronting, or unilaterally reducing the dose all constitute undertreatment.',
    strategy: 'Pain is what the client says it is. Behavior is not a lie detector.' },

  { id: 'BCC-007', cat: 'bcc', sub: 'Comfort', type: 'sata', difficulty: 1,
    stem: 'Which non-pharmacological interventions can help manage pain? Select all that apply.',
    options: ['Repositioning and support with pillows', 'Guided imagery and relaxation breathing', 'Application of heat or cold as appropriate', 'Increasing environmental noise to distract', 'Massage', 'Music of the client\'s choosing'],
    answer: [0, 1, 2, 4, 5],
    rationale: 'Positioning, relaxation techniques, thermal therapy, massage, and preferred music all reduce pain perception and are effective adjuncts to analgesia. Increasing noise raises stress and worsens pain perception.',
    strategy: 'Non-pharmacological methods complement rather than replace analgesia. Combine them.' },

  { id: 'BCC-008', cat: 'bcc', sub: 'Nutrition', type: 'mc', difficulty: 2,
    stem: 'A client is receiving a continuous tube feeding. The nurse aspirates a gastric residual volume of 350 mL. What should the nurse do?',
    options: [
      'Discard the aspirate and continue the feeding at the current rate',
      'Hold the feeding, return the aspirate per policy, reassess in an hour, and notify the provider if the volume remains high',
      'Increase the rate to push the feeding through',
      'Flush with 200 mL of water'
    ],
    answer: [1],
    rationale: 'A high residual volume suggests delayed gastric emptying and aspiration risk, so the feeding is held and reassessed, with the aspirate typically returned to preserve electrolytes and gastric acid. Continuing, increasing the rate, and large-volume flushing all increase aspiration risk.',
    strategy: 'High residual means hold, recheck, and elevate the head of the bed. Never speed the feeding up.' },

  { id: 'BCC-009', cat: 'bcc', sub: 'Sleep', type: 'mc', difficulty: 2,
    stem: 'A hospitalized client reports difficulty sleeping. Which nursing intervention should be tried first?',
    options: [
      'Request a sedative-hypnotic order',
      'Cluster care to allow uninterrupted blocks, dim lights at night, reduce noise, and offer a warm drink and back rub',
      'Encourage daytime napping',
      'Keep the television on for background noise'
    ],
    answer: [1],
    rationale: 'Environmental and behavioral measures address the actual cause of hospital sleep disruption and carry no risk. Sedative-hypnotics increase delirium and falls in hospitalized clients and are not first-line, daytime napping reduces night sleep drive, and television light and sound interfere with sleep.',
    strategy: 'Try the environment before the pill. Clustering care is the single highest-yield sleep intervention in hospital.' },

  { id: 'BCC-010', cat: 'bcc', sub: 'Hygiene', type: 'mc', difficulty: 2,
    stem: 'A nurse is providing oral care to an unconscious client. Which action is most important?',
    options: [
      'Position the client supine with the head flat',
      'Position the client in a side-lying position with the head turned to the side, and use suction to remove secretions',
      'Use a large amount of fluid to rinse thoroughly',
      'Insert fingers to hold the mouth open'
    ],
    answer: [1],
    rationale: 'Side-lying positioning with the head turned and suction available prevents aspiration in a client without a gag reflex. Supine flat positioning and generous fluid both risk aspiration, and placing fingers in the mouth risks a bite injury; a padded device is used instead.',
    strategy: 'Unconscious oral care: side-lying, head turned, suction ready, minimal fluid.' },

  { id: 'BCC-011', cat: 'bcc', sub: 'Mobility', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching a client to use crutches on stairs. Which instruction is correct?',
    options: [
      'Lead with the crutches going up and with the strong leg going down',
      'Lead with the strong leg going up, and with the crutches and weak leg going down',
      'Lead with the weak leg in both directions',
      'Carry the crutches and use the railing only'
    ],
    answer: [1],
    rationale: 'Going up, the strong leg goes first to pull the body up; going down, the crutches and weak leg go first to accept the descent. The memory device is up with the good, down with the bad.',
    strategy: 'Up with the good, down with the bad. The crutches always travel with the bad leg.' },

  { id: 'BCC-012', cat: 'bcc', sub: 'Elimination', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching a client about preventing constipation. Which recommendation is appropriate?',
    options: [
      'Use a stimulant laxative daily',
      'Increase dietary fiber gradually to 25 to 30 grams daily, drink adequate fluids, and increase physical activity',
      'Reduce fluid intake to firm the stool',
      'Ignore the urge to defecate until a convenient time'
    ],
    answer: [1],
    rationale: 'Fiber, fluid, and activity together address the physiological causes of constipation, and fiber must be increased gradually with adequate fluid or it worsens the problem. Daily stimulant laxatives cause dependence, fluid restriction hardens stool, and habitually ignoring the urge blunts the defecation reflex.',
    strategy: 'Fiber without fluid makes constipation worse. Always pair them.' },

  { id: 'BCC-013', cat: 'bcc', sub: 'Nutrition', type: 'mc', difficulty: 2,
    stem: 'A client with celiac disease is selecting foods. Which choice indicates correct understanding?',
    options: ['Wheat toast with butter', 'Rice and corn tortillas with grilled chicken', 'Barley soup', 'Rye crackers with cheese'],
    answer: [1],
    rationale: 'Rice and corn are naturally gluten free. Wheat, barley, and rye all contain gluten and cause villous atrophy in celiac disease. Oats are safe only when certified free of cross-contamination.',
    strategy: 'Gluten grains are wheat, barley, rye, and contaminated oats. Safe: rice, corn, quinoa, potato.' },

  { id: 'BCC-014', cat: 'bcc', sub: 'Skin Integrity', type: 'mc', difficulty: 2,
    stem: 'A nurse is planning care to prevent pressure injury in a bedbound client. Which intervention is most important?',
    options: [
      'Massage reddened bony prominences vigorously',
      'Reposition at least every 2 hours, use a pressure-redistributing surface, keep skin clean and dry, and optimize nutrition and hydration',
      'Use a donut-shaped cushion when sitting',
      'Elevate the head of the bed to 60 degrees continuously'
    ],
    answer: [1],
    rationale: 'Frequent repositioning, surface selection, moisture management, and nutrition together prevent pressure injury. Massaging reddened areas damages compromised tissue, donut cushions concentrate pressure at the ring and impair circulation, and prolonged head elevation above 30 degrees creates shear over the sacrum.',
    strategy: 'Never massage a reddened bony prominence, never use a donut, and keep the head of bed at or below 30 degrees when possible.' },

  { id: 'BCC-015', cat: 'bcc', sub: 'Comfort', type: 'mc', difficulty: 2,
    stem: 'A client is using patient-controlled analgesia after surgery. Which action by a family member requires nurse intervention?',
    options: [
      'Reminding the client that the button is available',
      'Pressing the button for the client while the client is asleep',
      'Asking the nurse about the medication',
      'Encouraging the client to press it before ambulating'
    ],
    answer: [1],
    rationale: 'Only the client may press a patient-controlled analgesia button, because a sedated client cannot press it, which is the built-in safety mechanism against overdose. Reminders, questions, and preemptive dosing before activity by the client are all appropriate.',
    strategy: 'PCA by proxy is never permitted. The client\'s own sedation is what makes the device safe.' },

  { id: 'BCC-016', cat: 'bcc', sub: 'Mobility', type: 'mc', difficulty: 2,
    stem: 'A nurse is performing passive range-of-motion exercises. Which technique is correct?',
    options: [
      'Move each joint until the client reports pain',
      'Support the limb above and below the joint and move slowly through the available range, stopping at resistance or discomfort',
      'Perform movements rapidly to save time',
      'Move only the large joints'
    ],
    answer: [1],
    rationale: 'Supporting the limb proximally and distally with slow controlled movement to the point of resistance prevents injury while maintaining joint mobility. Moving into pain causes tissue damage, rapid movement risks injury and spasticity, and small joints require attention as well.',
    strategy: 'Range of motion stops at resistance, never at pain. Support above and below the joint.' },

  { id: 'BCC-017', cat: 'bcc', sub: 'Nutrition', type: 'mc', difficulty: 2,
    stem: 'A nurse is assessing a client for malnutrition. Which laboratory value is most useful for evaluating longer-term protein status?',
    options: ['Serum sodium', 'Serum albumin', 'Serum potassium', 'Serum glucose'],
    answer: [1],
    rationale: 'Albumin reflects protein status over weeks because of its long half-life, though it is also lowered by inflammation, liver disease, and fluid shifts. Prealbumin responds more quickly for short-term monitoring. Sodium, potassium, and glucose reflect fluid, electrolyte, and carbohydrate status rather than protein stores.',
    strategy: 'Albumin is the long view, prealbumin the short view. Both fall with inflammation independent of nutrition.' },

  { id: 'BCC-018', cat: 'bcc', sub: 'Elimination', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching a client about Kegel exercises for stress incontinence. Which instruction is correct?',
    options: [
      'Perform the exercises while voiding to identify the muscles, and continue that way daily',
      'Contract the pelvic floor muscles as if stopping urine flow, hold about 5 to 10 seconds, relax, and repeat in sets several times daily',
      'Tighten the abdominal and thigh muscles instead',
      'Perform them once a week'
    ],
    answer: [1],
    rationale: 'Isolated pelvic floor contractions held for several seconds and repeated in sets several times daily strengthen the sphincter mechanism over weeks. Stopping the stream repeatedly during voiding can cause incomplete emptying and infection, substituting abdominal or thigh muscles defeats the exercise, and weekly practice is insufficient.',
    strategy: 'Kegels: isolate the pelvic floor, hold, repeat daily, expect results in about 6 weeks. Stopping the stream is only for identifying the muscle once.' },

  { id: 'BCC-019', cat: 'bcc', sub: 'Comfort', type: 'mc', difficulty: 2,
    stem: 'A client with chronic cancer pain is taking long-acting morphine twice daily and now reports increasing pain. Which action is most appropriate?',
    options: [
      'Suggest the client is developing an addiction',
      'Assess the pain thoroughly and consult the provider about adjusting the long-acting dose and providing adequate breakthrough medication',
      'Advise the client to wait longer between doses',
      'Switch entirely to non-pharmacological methods'
    ],
    answer: [1],
    rationale: 'Increasing pain in cancer usually reflects disease progression or tolerance, both of which require dose adjustment and appropriate breakthrough coverage. Attributing it to addiction is a common and harmful error, delaying doses causes needless suffering, and removing pharmacological treatment abandons the client.',
    strategy: 'Tolerance and physical dependence are expected with opioids and are not addiction. Addiction involves compulsive use despite harm.' },

  { id: 'BCC-020', cat: 'bcc', sub: 'Hygiene', type: 'mc', difficulty: 2,
    stem: 'A nurse is bathing a client with dry, fragile skin. Which practice is appropriate?',
    options: [
      'Use hot water and vigorous scrubbing to remove dead skin',
      'Use warm rather than hot water, a mild cleanser, gentle patting to dry, and apply emollient to damp skin',
      'Bathe the client fully every day with soap',
      'Use alcohol-based products for freshness'
    ],
    answer: [1],
    rationale: 'Warm water, mild cleanser, patting dry, and prompt emollient application preserve the skin barrier. Hot water and scrubbing strip lipids, daily full soap bathing dries aging skin further, and alcohol products dehydrate the skin.',
    strategy: 'Fragile skin: warm not hot, pat not rub, moisturize while damp, and bathe less often than you think.' },

  { id: 'BCC-021', cat: 'bcc', sub: 'Nutrition', type: 'mc', difficulty: 2,
    stem: 'A client is prescribed a low-sodium diet. Which food selection indicates understanding?',
    options: ['Canned vegetable soup', 'Fresh baked chicken with herbs and a fresh salad', 'Deli turkey sandwich', 'Cottage cheese with olives'],
    answer: [1],
    rationale: 'Fresh unprocessed foods seasoned with herbs are naturally low in sodium. Canned soups, cured deli meats, cottage cheese, and olives are all high-sodium items even when they do not taste especially salty.',
    strategy: 'Sodium hides in canned, cured, processed, and pickled foods, plus cheese and bread. Fresh is the safe answer.' },

  { id: 'BCC-022', cat: 'bcc', sub: 'Mobility', type: 'mc', difficulty: 2,
    stem: 'A client with left hemiplegia is learning to transfer to a wheelchair. Where should the nurse position the chair?',
    options: [
      'On the client\'s left side at a 45-degree angle',
      'On the client\'s right side at a 45-degree angle so the client leads with the stronger side',
      'Directly in front of the client',
      'Behind the client'
    ],
    answer: [1],
    rationale: 'Positioning the chair on the unaffected side lets the client pivot toward their strength and bear weight on the intact leg. Placing it on the weak side forces weight-bearing and reaching with the affected limb, and front or rear placement makes a pivot transfer impossible.',
    strategy: 'Transfer toward the strong side. The client always leads with what works.' },

  { id: 'BCC-023', cat: 'bcc', sub: 'Elimination', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client with a new ileostomy. Which output finding is expected?',
    options: [
      'Formed brown stool once daily',
      'Continuous liquid to pasty output requiring frequent emptying, with increased fluid and electrolyte needs',
      'No output for the first week',
      'Bright red bleeding with each emptying'
    ],
    answer: [1],
    rationale: 'An ileostomy bypasses the colon where water is absorbed, producing continuous liquid to pasty effluent and predisposing the client to dehydration and sodium and potassium loss. Formed stool indicates a colostomy, absent output suggests obstruction, and frank bleeding is abnormal.',
    strategy: 'Ileostomy equals liquid output and dehydration risk. Colostomy output thickens the more distal the stoma.' },

  { id: 'BCC-024', cat: 'bcc', sub: 'Comfort', type: 'mc', difficulty: 2,
    stem: 'A nurse is applying cold therapy to an acute ankle sprain. Which application is correct?',
    options: [
      'Apply ice directly to the skin for 60 minutes',
      'Apply a cloth-wrapped cold pack for 15 to 20 minutes at a time with breaks between applications',
      'Apply heat instead during the first 24 hours',
      'Apply cold continuously for 8 hours'
    ],
    answer: [1],
    rationale: 'Cold is applied for 15 to 20 minutes with a barrier and rest periods to reduce swelling and pain without causing tissue injury or reflex vasodilation. Direct or prolonged application causes frostbite and nerve injury, and heat in the first 24 to 48 hours increases swelling.',
    strategy: 'Acute injury: cold for the first 24 to 48 hours, 15 to 20 minutes at a time, never directly on skin. Heat afterward.' },

  { id: 'BCC-025', cat: 'bcc', sub: 'Nutrition', type: 'mc', difficulty: 2,
    stem: 'A client with dysphagia is prescribed a mechanical soft diet with nectar-thick liquids. Which meal tray item should the nurse remove?',
    options: ['Mashed potatoes', 'Ground meat with gravy', 'A glass of ice water', 'Pudding'],
    answer: [2],
    rationale: 'Thin liquids including water and melting ice are the most difficult to control and the most likely to be aspirated in dysphagia, so they must be thickened to the prescribed consistency. Mashed potatoes, moistened ground meat, and pudding all meet mechanical soft and thickened requirements.',
    strategy: 'Thin liquids aspirate most easily. Ice chips and gelatin melt into thin liquid and count as thin.' },

  { id: 'BCC-026', cat: 'bcc', sub: 'Skin Integrity', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a wound with moderate exudate and healthy granulation tissue. Which dressing is most appropriate?',
    options: ['Dry gauze', 'A foam or hydrocolloid dressing that absorbs exudate while maintaining a moist wound bed', 'Wet-to-dry gauze', 'No dressing'],
    answer: [1],
    rationale: 'Moist wound healing accelerates granulation and epithelialization while absorbing excess exudate, which foam and hydrocolloid dressings provide. Dry gauze desiccates the wound, wet-to-dry dressings are mechanically debriding and damage healthy granulation tissue, and leaving the wound open invites contamination and drying.',
    strategy: 'Keep wounds moist and surrounding skin dry. Wet-to-dry is for debridement of necrotic tissue only.' },

  { id: 'BCC-027', cat: 'bcc', sub: 'Sleep', type: 'mc', difficulty: 2,
    stem: 'A client with obstructive sleep apnea is admitted for surgery. Which nursing action is most important postoperatively?',
    options: [
      'Position the client supine to protect the airway',
      'Ensure the client uses their CPAP device, monitor oxygenation closely, and use opioids cautiously with sedation monitoring',
      'Administer generous doses of sedatives for comfort',
      'Withhold all analgesia'
    ],
    answer: [1],
    rationale: 'Clients with obstructive sleep apnea are highly vulnerable to opioid-induced respiratory depression, so CPAP use, continuous oxygenation and sedation monitoring, and cautious opioid dosing with multimodal analgesia are essential. Supine positioning worsens obstruction, sedatives compound the risk, and withholding analgesia entirely is neither necessary nor humane.',
    strategy: 'Sleep apnea plus opioids equals high risk. Keep the CPAP, monitor sedation, and use multimodal analgesia.' },

  { id: 'BCC-028', cat: 'bcc', sub: 'Hygiene', type: 'mc', difficulty: 2,
    stem: 'A nurse is performing perineal care for a client with an indwelling urinary catheter. Which action is correct?',
    options: [
      'Clean from the urinary meatus outward along the catheter, moving away from the meatus',
      'Clean from the catheter tubing toward the meatus',
      'Use the same cloth surface for all strokes',
      'Apply powder to the perineum afterward'
    ],
    answer: [0],
    rationale: 'Cleaning outward from the meatus along the catheter moves organisms away from the entry point, and a clean surface is used for each stroke. Cleaning toward the meatus and reusing cloth surfaces both introduce organisms, and powder cakes and harbors bacteria.',
    strategy: 'Always clean from the cleanest point outward, with a fresh surface for every stroke.' },

  { id: 'BCC-029', cat: 'bcc', sub: 'Mobility', type: 'mc', difficulty: 2,
    stem: 'A nurse is assisting a client with a below-knee amputation to prevent contractures. Which instruction is correct?',
    options: [
      'Keep the residual limb elevated on pillows continuously',
      'Avoid prolonged sitting and prolonged hip and knee flexion, and spend time prone daily as tolerated',
      'Keep the knee flexed for comfort',
      'Limit all movement of the residual limb'
    ],
    answer: [1],
    rationale: 'Flexion contractures at the hip and knee are the major barrier to prosthetic fitting, so prolonged sitting and pillow elevation under the knee are avoided and prone positioning is encouraged. Immobility promotes rather than prevents contracture.',
    strategy: 'After amputation, the enemy is flexion contracture. Prone lying and extension positioning prevent it.' },

  { id: 'BCC-030', cat: 'bcc', sub: 'Nutrition', type: 'mc', difficulty: 2,
    stem: 'A client is prescribed a diet high in iron for iron deficiency anemia. Which combination best enhances absorption?',
    options: [
      'Iron-rich food with tea',
      'Iron-rich food with a source of vitamin C such as orange juice or strawberries',
      'Iron-rich food with milk',
      'Iron-rich food with an antacid'
    ],
    answer: [1],
    rationale: 'Ascorbic acid converts iron to the more absorbable ferrous form and markedly increases uptake. Tannins in tea and coffee, calcium in dairy, and antacids that raise gastric pH all reduce iron absorption.',
    strategy: 'Iron plus vitamin C equals absorption. Iron plus calcium, tea, coffee, or antacid equals blocked absorption.' },

  { id: 'BCC-031', cat: 'bcc', sub: 'Elimination', type: 'mc', difficulty: 2,
    stem: 'A nurse is preparing to administer a cleansing enema. Which position is appropriate?',
    options: ['Prone', 'Left lateral Sims position with the right knee flexed', 'Right lateral', 'Supine with legs extended'],
    answer: [1],
    rationale: 'The left lateral Sims position follows the anatomy of the descending colon and sigmoid, allowing solution to flow with gravity and be retained. Other positions work against the natural curve of the bowel.',
    strategy: 'Enemas go in on the left side because the descending colon is on the left.' },

  { id: 'BCC-032', cat: 'bcc', sub: 'Comfort', type: 'mc', difficulty: 2,
    stem: 'A nurse is assessing pain in a nonverbal client with advanced dementia. Which approach is most appropriate?',
    options: [
      'Assume the client has no pain if they do not complain',
      'Use a validated observational pain scale assessing facial expression, vocalization, body language, and consolability, and evaluate response to a trial of analgesia',
      'Ask the family to rate the pain on a 0 to 10 scale',
      'Rely only on vital sign changes'
    ],
    answer: [1],
    rationale: 'Behavioral pain scales such as PAINAD are validated for nonverbal clients, and improvement after an analgesic trial supports the assessment. Absence of complaint does not mean absence of pain, family estimation is not a substitute, and vital signs are unreliable indicators of chronic pain.',
    strategy: 'Nonverbal clients get behavioral pain scales plus an analgesic trial. Never assume no complaint means no pain.' },

  { id: 'BCC-033', cat: 'bcc', sub: 'Skin Integrity', type: 'mc', difficulty: 2,
    stem: 'A nurse notes that a client\'s wound has a thick, dry, black covering. How should this wound be classified?',
    options: ['Stage 2 pressure injury', 'Unstageable pressure injury due to eschar', 'Fully healed wound', 'Stage 1 pressure injury'],
    answer: [1],
    rationale: 'Eschar or slough obscuring the wound base makes depth impossible to determine, so the injury is classified as unstageable until the covering is removed. Stable dry eschar on an ischemic heel is generally left intact as a biological cover.',
    strategy: 'If you cannot see the base, you cannot stage it. Unstageable is the answer.' },

  { id: 'BCC-034', cat: 'bcc', sub: 'Nutrition', type: 'mc', difficulty: 2,
    stem: 'A client is receiving total parenteral nutrition. Which nursing action is essential?',
    options: [
      'Abruptly stop the infusion when the bag empties',
      'Monitor blood glucose regularly, taper the infusion when discontinuing, and use a dedicated line with strict aseptic technique',
      'Add medications to the parenteral nutrition bag as needed',
      'Hang a new bag every 72 hours'
    ],
    answer: [1],
    rationale: 'Parenteral nutrition delivers a high dextrose load requiring glucose monitoring, and abrupt cessation causes rebound hypoglycemia so the rate is tapered. The line is dedicated to reduce infection risk and prevent incompatibilities, and bags and tubing are changed every 24 hours.',
    strategy: 'TPN rules: dedicated line, strict asepsis, check glucose, taper off, never add anything to the bag.' },

  { id: 'BCC-035', cat: 'bcc', sub: 'Mobility', type: 'mc', difficulty: 2,
    stem: 'A nurse is applying antiembolism stockings. Which action is correct?',
    options: [
      'Apply them after the client has been sitting up for several hours',
      'Apply them in the morning before the client gets out of bed, ensuring they are smooth without rolling or bunching',
      'Roll the top down if they feel too tight',
      'Apply them over a dressing without checking the skin'
    ],
    answer: [1],
    rationale: 'Stockings are applied before dependent edema develops, and wrinkles or a rolled band create a tourniquet effect that impairs rather than assists venous return. Skin is assessed with each removal.',
    strategy: 'Antiembolism stockings go on before the legs are dependent, and a rolled-down top is a tourniquet.' },

  { id: 'BCC-036', cat: 'bcc', sub: 'Comfort', type: 'mc', difficulty: 2,
    stem: 'A client with a history of substance use disorder has severe postoperative pain. What is the most appropriate nursing approach?',
    options: [
      'Withhold opioids to avoid relapse',
      'Provide adequate analgesia, recognizing that tolerance may require higher doses, using multimodal analgesia and involving pain and addiction specialists as needed',
      'Give only acetaminophen',
      'Tell the client they must tolerate the pain'
    ],
    answer: [1],
    rationale: 'Clients with opioid tolerance frequently require higher doses to achieve the same relief, and untreated pain is itself a powerful relapse trigger. Multimodal analgesia and specialist involvement optimize control. Withholding or minimizing analgesia is both ineffective and inhumane.',
    strategy: 'A history of substance use is a reason to treat pain more carefully, not less.' },

  { id: 'BCC-037', cat: 'bcc', sub: 'Hygiene', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client with a hearing aid. Which action is appropriate?',
    options: [
      'Clean the hearing aid with alcohol daily',
      'Wipe the aid with a dry soft cloth, open the battery compartment when not in use, and keep it away from water and heat',
      'Submerge the aid in water to clean it',
      'Store the aid in the refrigerator'
    ],
    answer: [1],
    rationale: 'Hearing aids are cleaned dry, and opening the battery door when not in use conserves the battery and allows moisture to escape. Alcohol damages the casing, submersion destroys the electronics, and refrigeration causes condensation.',
    strategy: 'Hearing aids: keep dry, clean dry, open the battery door at night, never submerge.' },

  { id: 'BCC-038', cat: 'bcc', sub: 'Nutrition', type: 'sata', difficulty: 2,
    stem: 'A client with heart failure is on a 2-gram sodium diet. Which foods should the nurse teach the client to limit? Select all that apply.',
    options: ['Canned soups', 'Fresh fruits', 'Processed lunch meats', 'Frozen dinners', 'Plain oatmeal', 'Soy sauce and seasoning blends containing salt'],
    answer: [0, 2, 3, 5],
    rationale: 'Canned soups, cured and processed meats, frozen prepared meals, and salty condiments are among the largest dietary sodium sources. Fresh fruit and plain grains contain negligible sodium.',
    strategy: 'Most dietary sodium comes from processed and restaurant food, not the salt shaker.' },

  { id: 'BCC-039', cat: 'bcc', sub: 'Elimination', type: 'mc', difficulty: 3,
    stem: 'A client with a spinal cord injury above T6 develops a pounding headache, flushing above the level of injury, and a blood pressure of 210/120 mmHg. What should the nurse do first?',
    options: [
      'Administer an analgesic for the headache',
      'Sit the client upright, then identify and remove the noxious stimulus, most often a distended bladder or impacted bowel',
      'Place the client flat to improve perfusion',
      'Apply oxygen and continue monitoring'
    ],
    answer: [1],
    rationale: 'Autonomic dysreflexia is a hypertensive emergency triggered by a noxious stimulus below the injury level. Sitting the client up uses orthostasis to lower blood pressure while the trigger, usually bladder distention or fecal impaction, is found and relieved. Lying flat raises pressure further and analgesia does not address the cause.',
    strategy: 'Autonomic dysreflexia: sit them up, then check the catheter and the bowel. Bladder first, bowel second.' },

  { id: 'BCC-040', cat: 'bcc', sub: 'Sleep', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching an older adult about age-related sleep changes. Which statement is accurate?',
    options: [
      '"Older adults need much less sleep than younger adults."',
      '"Total sleep need stays about the same, but sleep becomes lighter and more fragmented, and the sleep schedule tends to shift earlier."',
      '"Waking frequently at night is a sign of serious illness in all older adults."',
      '"Napping should be encouraged for several hours daily."'
    ],
    answer: [1],
    rationale: 'Sleep architecture changes with age with less slow-wave sleep and more awakenings, and circadian phase advances, but total sleep requirement of about 7 to 8 hours remains largely stable. Long daytime naps reduce night-time sleep drive and worsen fragmentation.',
    strategy: 'Older adults need the same amount of sleep but get it less efficiently. The need does not shrink.' },

  { id: 'BCC-041', cat: 'bcc', sub: 'Mobility', type: 'mc', difficulty: 2,
    stem: 'A nurse is positioning a client who is at risk for aspiration and receiving enteral feedings. Which position is appropriate?',
    options: ['Supine flat', 'Head of bed elevated 30 to 45 degrees', 'Trendelenburg', 'Prone'],
    answer: [1],
    rationale: 'Elevating the head of the bed to 30 to 45 degrees uses gravity to reduce reflux and aspiration during and after feeding. Flat, head-down, and prone positions all increase aspiration risk.',
    strategy: 'Head of bed 30 to 45 degrees for tube feeding, ventilated clients, and anyone at aspiration risk.' },

  { id: 'BCC-042', cat: 'bcc', sub: 'Comfort', type: 'mc', difficulty: 3,
    stem: 'A client is receiving epidural analgesia after surgery. Which finding requires immediate action?',
    options: [
      'Mild itching of the face and trunk',
      'Respiratory rate of 7 with increasing sedation',
      'Numbness in the surgical area',
      'Report of pain 3 out of 10'
    ],
    answer: [1],
    rationale: 'Respiratory depression with increasing sedation is the most dangerous complication of neuraxial opioids and requires stopping the infusion, stimulating the client, providing oxygen, and preparing naloxone. Pruritus is common and treatable, localized numbness is expected, and mild pain is acceptable control.',
    strategy: 'Sedation precedes respiratory depression. Rising sedation is the early warning, not the respiratory rate.' },

  { id: 'BCC-043', cat: 'bcc', sub: 'Nutrition', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching a client with gout about dietary modification. Which foods should the client limit?',
    options: [
      'Fresh vegetables and whole grains',
      'Organ meats, shellfish, sardines, and beer',
      'Low-fat dairy products',
      'Cherries and water'
    ],
    answer: [1],
    rationale: 'Organ meats, certain seafood, and beer are high in purines that metabolize to uric acid. Low-fat dairy, cherries, and generous water intake are associated with lower uric acid and fewer flares.',
    strategy: 'Gout diet: limit organ meat, shellfish, sardines, and alcohol especially beer. Encourage water, cherries, and low-fat dairy.' },

  { id: 'BCC-044', cat: 'bcc', sub: 'Skin Integrity', type: 'mc', difficulty: 2,
    stem: 'A nurse is assessing a client\'s surgical wound on postoperative day 5 and notes the edges have separated with visible subcutaneous tissue. What is this called and what should the nurse do?',
    options: [
      'Evisceration; cover with dry gauze and ambulate the client',
      'Dehiscence; cover the wound with sterile saline-moistened gauze, position the client with knees bent, keep them still, and notify the provider',
      'Normal healing; continue routine care',
      'Infection; apply an antibiotic ointment'
    ],
    answer: [1],
    rationale: 'Wound dehiscence is separation of the wound edges and can progress to evisceration if the client strains or ambulates. The wound is covered with sterile moist gauze, the client is placed in low Fowler position with knees flexed to reduce tension, and the provider is notified urgently.',
    strategy: 'Dehiscence and evisceration: sterile moist gauze, knees bent, low Fowler, nothing by mouth, call the surgeon. Never push organs back in.' },

  { id: 'BCC-045', cat: 'bcc', sub: 'Elimination', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client with urinary retention. Which finding best confirms the diagnosis?',
    options: [
      'The client reports feeling the urge to void',
      'A bladder scan shows a post-void residual of 480 mL',
      'The client has not voided in 4 hours',
      'The client reports abdominal discomfort'
    ],
    answer: [1],
    rationale: 'A bladder ultrasound quantifies retained volume objectively and is the noninvasive standard, with residuals over about 300 to 400 mL indicating significant retention. Subjective urge, time since voiding, and discomfort are suggestive but not confirmatory.',
    strategy: 'Bladder scan before you catheterize. Objective volume drives the decision.' }
  ,
  { id: 'BCC-046', cat: 'bcc', sub: 'Nutrition', type: 'mc', difficulty: 2,
    stem: 'A client with cirrhosis and hepatic encephalopathy is prescribed a modified diet. Which modification should the nurse anticipate?',
    options: [
      'High protein to promote healing',
      'Moderate protein with adequate calories, often favoring vegetable and dairy protein sources',
      'No protein at all indefinitely',
      'High sodium to maintain volume'
    ],
    answer: [1],
    rationale: 'Protein is no longer severely restricted in hepatic encephalopathy because malnutrition worsens outcomes; moderate intake with vegetable and dairy sources is better tolerated. Sodium is restricted because of ascites and edema, and complete protein elimination causes muscle catabolism that generates more ammonia.',
    strategy: 'Cirrhosis diet: restrict sodium and fluid, keep protein moderate rather than absent.' },

  { id: 'BCC-047', cat: 'bcc', sub: 'Mobility', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client on bed rest. Which intervention best prevents venous thromboembolism?',
    options: [
      'Massage the calves twice daily',
      'Apply sequential compression devices, encourage ankle pumps and leg exercises, ensure hydration, and mobilize as soon as permitted',
      'Keep the knees flexed over a pillow',
      'Cross the ankles when resting'
    ],
    answer: [1],
    rationale: 'Mechanical compression, active ankle exercises, hydration, and early mobilization together counter venous stasis. Calf massage can dislodge an existing thrombus, knee flexion over a pillow and crossed ankles both obstruct popliteal venous return.',
    strategy: 'Never massage the calves of an immobile client. Never put a pillow under the knees.' },

  { id: 'BCC-048', cat: 'bcc', sub: 'Comfort', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client receiving morphine. Which side effect requires ongoing preventive management rather than resolving with tolerance?',
    options: ['Nausea', 'Sedation', 'Constipation', 'Pruritus'],
    answer: [2],
    rationale: 'Tolerance develops to nausea, sedation, and itching within days, but opioid-induced constipation persists for the duration of therapy and requires a scheduled bowel regimen started with the opioid. Waiting for symptoms leads to impaction.',
    strategy: 'Start the bowel regimen with the opioid, not after. Constipation is the one side effect that never goes away.' },

  { id: 'BCC-049', cat: 'bcc', sub: 'Skin Integrity', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client with moisture-associated skin damage in the perineal area from incontinence. Which intervention is most appropriate?',
    options: [
      'Insert an indwelling catheter to keep the skin dry',
      'Cleanse gently with a pH-balanced no-rinse cleanser after each episode, apply a moisture barrier ointment, and use absorbent products that wick moisture away',
      'Leave the area open to air without any barrier',
      'Use hot water and soap after each episode'
    ],
    answer: [1],
    rationale: 'Gentle cleansing, a barrier product, and wicking containment protect the skin from urine and stool. An indwelling catheter carries infection risk and does not address stool, no barrier leaves skin exposed to irritants, and hot water with soap strips the acid mantle.',
    strategy: 'Incontinence-associated dermatitis: cleanse, protect with a barrier, contain. A catheter is not a skin care plan.' },

  { id: 'BCC-050', cat: 'bcc', sub: 'Nutrition', type: 'mc', difficulty: 2,
    stem: 'A nurse is calculating intake and output. The client had 240 mL of juice, 180 mL of coffee, 120 mL of gelatin, 500 mL of IV fluid, and 6 ounces of ice chips. What is the total intake in milliliters?',
    options: ['1040 mL', '1130 mL', '1220 mL', '1400 mL'],
    answer: [1],
    rationale: 'Juice 240 plus coffee 180 plus gelatin 120 plus IV 500 equals 1040. Ice chips count as half their volume when melted: 6 ounces equals 180 mL of ice, recorded as 90 mL. Total is 1130 mL. Gelatin, ice cream, and popsicles all count as fluid.',
    strategy: 'Ice chips count as half. Anything liquid at room temperature counts as intake.' },

  { id: 'BCC-051', cat: 'bcc', sub: 'Elimination', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching a client with a new colostomy about pouch care. Which statement indicates understanding?',
    options: [
      '"I will change the pouch whenever it is completely full."',
      '"I will empty the pouch when it is about one-third full and change the appliance every 3 to 7 days or sooner if it leaks."',
      '"I will change the pouch every day regardless."',
      '"I can use adhesive remover with alcohol to protect my skin."'
    ],
    answer: [1],
    rationale: 'Emptying at one-third full prevents the weight from breaking the seal, and appliances are changed on a routine schedule of several days or immediately when leakage occurs. Waiting until full causes leaks, daily changes traumatize peristomal skin, and alcohol-based products dry and damage it.',
    strategy: 'Empty at one-third, change every 3 to 7 days, and change immediately for any leak or burning.' },

  { id: 'BCC-052', cat: 'bcc', sub: 'Hygiene', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client who wears contact lenses and is admitted unconscious. What should the nurse do?',
    options: [
      'Leave the lenses in place until the client wakes',
      'Remove the lenses, store them properly, and document the removal',
      'Instill saline drops and leave the lenses in',
      'Ask the family to remove them'
    ],
    answer: [1],
    rationale: 'Contact lenses left in an unconscious client cause corneal abrasion, ulceration, and infection because blinking and tear film are impaired. They are removed promptly, stored appropriately, and the removal documented.',
    strategy: 'Unconscious clients: remove contacts and dentures, protect the corneas with lubricant and lid closure if the blink reflex is absent.' },

  { id: 'BCC-053', cat: 'bcc', sub: 'Comfort', type: 'mc', difficulty: 2,
    stem: 'A client reports burning, shooting pain down the leg after a spinal injury. Which type of pain is this and which class of medication is most likely to help?',
    options: [
      'Nociceptive pain; nonsteroidal anti-inflammatory drugs',
      'Neuropathic pain; adjuvants such as gabapentin, pregabalin, or duloxetine',
      'Visceral pain; antispasmodics',
      'Referred pain; opioids alone'
    ],
    answer: [1],
    rationale: 'Burning, shooting, electric-quality pain following a nerve distribution is neuropathic and responds poorly to opioids and anti-inflammatories alone, while anticonvulsants and certain antidepressants are first-line. Nociceptive pain is aching and localized, and visceral pain is deep and cramping.',
    strategy: 'Burning, shooting, tingling equals neuropathic. Reach for gabapentinoids and antidepressants, not NSAIDs.' },

  { id: 'BCC-054', cat: 'bcc', sub: 'Mobility', type: 'mc', difficulty: 3,
    stem: 'A nurse is caring for a client in Buck traction. Which assessment finding requires immediate action?',
    options: [
      'The client reports mild discomfort in the affected leg',
      'The foot on the affected side is pale and cool with absent pedal pulse and numbness',
      'The weights are hanging freely',
      'The client is in supine alignment'
    ],
    answer: [1],
    rationale: 'Pallor, coolness, absent pulse, and numbness indicate neurovascular compromise from excessive traction pressure and require immediate loosening assessment and provider notification. Mild discomfort is common, freely hanging weights and correct alignment are desired findings.',
    strategy: 'Neurovascular checks are the six Ps: pain, pallor, pulselessness, paresthesia, paralysis, poikilothermia.' },

  { id: 'BCC-055', cat: 'bcc', sub: 'Nutrition', type: 'mc', difficulty: 2,
    stem: 'A client is prescribed a clear liquid diet. Which item should the nurse remove from the tray?',
    options: ['Apple juice', 'Chicken broth', 'Cream of mushroom soup', 'Lemon gelatin'],
    answer: [2],
    rationale: 'Clear liquids are transparent at room temperature and leave minimal residue: clear juices without pulp, broth, gelatin, tea, and popsicles. Cream soup is opaque and belongs to a full liquid diet, as do milk, ice cream, and pudding.',
    strategy: 'Clear liquid means you can see through it. Anything with milk or pulp is full liquid.' },

  { id: 'BCC-056', cat: 'bcc', sub: 'Sleep', type: 'mc', difficulty: 2,
    stem: 'A client on a medical unit is receiving frequent night-time interruptions. Which nursing action best improves sleep quality?',
    options: [
      'Perform all assessments individually as they come to mind',
      'Coordinate vital signs, medications, and assessments into clustered visits and negotiate with the provider about the necessity of overnight checks in stable clients',
      'Turn on overhead lights for each check to see clearly',
      'Wake the client to ask if they are sleeping well'
    ],
    answer: [1],
    rationale: 'Clustering care and questioning the clinical necessity of routine overnight vital signs in stable clients meaningfully increases uninterrupted sleep, which supports healing and reduces delirium. Scattered visits, bright lighting, and waking a client to ask about sleep all defeat the purpose.',
    strategy: 'Ask whether the 4 a.m. vital signs are actually needed. In a stable client, sleep is the intervention.' },

  { id: 'BCC-057', cat: 'bcc', sub: 'Elimination', type: 'mc', difficulty: 2,
    stem: 'A nurse is collecting a 24-hour urine specimen. Which action is correct?',
    options: [
      'Begin timing with the first voided specimen and include it in the collection',
      'Discard the first voiding, note the start time, collect all urine for 24 hours, and have the client void at the end and include that specimen',
      'Collect only daytime urine',
      'Store the container at room temperature'
    ],
    answer: [1],
    rationale: 'The first void is discarded because it represents urine formed before the collection period; the final void at the end of 24 hours is included. Any missed specimen invalidates the test, and the container is typically refrigerated or kept on ice with preservative.',
    strategy: '24-hour urine: throw out the first, keep the last, keep it cold, and start over if any is lost.' },

  { id: 'BCC-058', cat: 'bcc', sub: 'Skin Integrity', type: 'mc', difficulty: 2,
    stem: 'A nurse is using the Braden Scale. A score of 12 indicates what?',
    options: [
      'No risk for pressure injury',
      'High risk for pressure injury, requiring an intensified prevention plan',
      'Mild risk requiring no change in care',
      'The presence of an existing pressure injury'
    ],
    answer: [1],
    rationale: 'Braden scores range from 6 to 23 with lower scores indicating greater risk; 15 to 18 is mild, 13 to 14 moderate, 10 to 12 high, and 9 or below very high risk. The scale predicts risk rather than detecting existing injury.',
    strategy: 'On the Braden Scale, lower means worse. Below 18 triggers a prevention plan.' },

  { id: 'BCC-059', cat: 'bcc', sub: 'Comfort', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching a client to use a transcutaneous electrical nerve stimulation unit. Which instruction is correct?',
    options: [
      'Place electrodes over broken skin for better conduction',
      'Place electrodes on intact skin near the painful area, avoid the anterior neck and the chest in clients with a pacemaker, and adjust intensity to a comfortable tingling',
      'Use the highest intensity setting for maximum effect',
      'Wear the unit continuously without breaks'
    ],
    answer: [1],
    rationale: 'Electrodes go on intact skin, with the carotid sinus area avoided because of vagal effects and the chest avoided in clients with implanted cardiac devices, and intensity is set to a comfortable tingle rather than to pain. Broken skin, maximum intensity, and continuous use cause irritation and reduce effectiveness.',
    strategy: 'TENS contraindications: pacemaker, pregnancy over the uterus, carotid sinus, broken skin, and impaired sensation.' },

  { id: 'BCC-060', cat: 'bcc', sub: 'Nutrition', type: 'mc', difficulty: 2,
    stem: 'A nurse is assessing a client for dehydration. Which finding is most reliable in an older adult?',
    options: [
      'Skin turgor on the forearm',
      'Weight loss, dry mucous membranes, orthostatic vital sign changes, and reduced urine output',
      'Presence of thirst',
      'Sunken eyes alone'
    ],
    answer: [1],
    rationale: 'Weight, mucous membranes, orthostatic changes, and urine output together give a reliable picture. Skin turgor is unreliable in older adults because of reduced elasticity, and the thirst mechanism blunts with age so its absence does not exclude dehydration.',
    strategy: 'In older adults, skin turgor and thirst both mislead. Trust daily weights and orthostatic vital signs.' },

  { id: 'BCC-061', cat: 'bcc', sub: 'Mobility', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client with a cast on the forearm applied 4 hours ago. The client reports increasing pain unrelieved by analgesia and pain with passive finger extension. What should the nurse do?',
    options: [
      'Administer additional analgesia and reassess in an hour',
      'Notify the provider immediately, as these findings suggest compartment syndrome',
      'Elevate the arm above heart level and apply ice',
      'Reassure the client that pain is normal after casting'
    ],
    answer: [1],
    rationale: 'Pain out of proportion to the injury and unrelieved by opioids, worsened by passive stretch, is the earliest and most important sign of compartment syndrome, a limb-threatening emergency requiring immediate cast removal and possible fasciotomy. Elevation above heart level actually reduces perfusion pressure in established compartment syndrome, and reassurance delays intervention.',
    strategy: 'Pain out of proportion, worse with passive stretch, unrelieved by opioids equals compartment syndrome. Pulselessness is a very late sign.' },

  { id: 'BCC-062', cat: 'bcc', sub: 'Hygiene', type: 'mc', difficulty: 2,
    stem: 'A nurse is providing foot care for a client with diabetes. Which action is appropriate?',
    options: [
      'Soak the feet for 20 minutes before trimming nails',
      'Wash with lukewarm water, dry thoroughly especially between the toes, apply lotion to the tops and bottoms but not between the toes, and cut nails straight across',
      'Use a pumice stone vigorously on calluses',
      'Apply lotion generously between the toes'
    ],
    answer: [1],
    rationale: 'Thorough drying between the toes prevents fungal infection, and lotion is applied everywhere except between the toes where retained moisture macerates skin. Soaking softens and macerates tissue, and aggressive callus removal creates wounds that heal poorly.',
    strategy: 'Diabetic foot care: lukewarm water, dry between toes, lotion everywhere but between the toes, nails straight across, no soaking.' },

  { id: 'BCC-063', cat: 'bcc', sub: 'Comfort', type: 'mc', difficulty: 2,
    stem: 'A client with terminal illness reports dyspnea at rest despite oxygen. Which intervention is most appropriate?',
    options: [
      'Increase oxygen to the maximum flow rate',
      'Administer low-dose oral or parenteral opioid as ordered, position upright, use a fan directed at the face, and reduce exertion',
      'Restrict fluids severely',
      'Encourage the client to breathe faster'
    ],
    answer: [1],
    rationale: 'Low-dose opioids are the most effective treatment for the sensation of breathlessness at end of life, and upright positioning plus airflow across the face activates trigeminal receptors that reduce dyspnea perception. Escalating oxygen beyond correcting hypoxemia does not relieve the sensation, and rapid breathing worsens it.',
    strategy: 'Palliative dyspnea: opioids, upright position, a fan on the face. Oxygen only helps if the client is hypoxemic.' },

  { id: 'BCC-064', cat: 'bcc', sub: 'Elimination', type: 'mc', difficulty: 2,
    stem: 'A nurse is performing intermittent catheterization for a client with a neurogenic bladder. Which instruction should the nurse include for home use?',
    options: [
      'Use sterile technique with sterile gloves at home',
      'Clean technique with thorough handwashing is acceptable at home, catheterize on a regular schedule, and report cloudy or foul-smelling urine or fever',
      'Catheterize only when the bladder feels full',
      'Reuse the same catheter for a month without cleaning'
    ],
    answer: [1],
    rationale: 'Clean intermittent catheterization at home is well established and has infection rates comparable to sterile technique in this population, provided hand hygiene and scheduled emptying are maintained. Waiting for bladder fullness is unreliable in neurogenic bladder where sensation is impaired, and reusing uncleaned catheters causes infection.',
    strategy: 'Sterile in hospital, clean at home. Schedule the catheterizations rather than waiting for sensation.' },

  { id: 'BCC-065', cat: 'bcc', sub: 'Nutrition', type: 'sata', difficulty: 2,
    stem: 'A client is receiving enteral nutrition. Which nursing actions reduce the risk of complications? Select all that apply.',
    options: [
      'Verify tube placement before each feeding or medication',
      'Maintain head-of-bed elevation of at least 30 degrees',
      'Flush the tube with water before and after medications and feedings',
      'Hang formula for 24 hours at room temperature',
      'Monitor for diarrhea and adjust formula or rate with the provider',
      'Add blue dye to the formula to detect aspiration'
    ],
    answer: [0, 1, 2, 4],
    rationale: 'Placement verification, head elevation, routine flushing, and monitoring tolerance are standard. Open formula systems hang for 4 to 8 hours because of bacterial growth, and blue dye is no longer used because it is an unreliable aspiration indicator and has been associated with fatal toxicity.',
    strategy: 'Blue dye in tube feeding is always the wrong answer. It was abandoned after deaths were reported.' },

  { id: 'BCC-066', cat: 'bcc', sub: 'Mobility', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching a client with osteoarthritis about activity. Which recommendation is appropriate?',
    options: [
      'Complete rest of the affected joints',
      'Low-impact exercise such as swimming, cycling, and walking, with heat before activity and cold after if the joint is inflamed',
      'High-impact running to strengthen bones',
      'Immobilize the joints with splints continuously'
    ],
    answer: [1],
    rationale: 'Low-impact activity preserves cartilage nutrition, strengthens supporting muscle, and reduces pain and stiffness, with heat loosening tissue before activity and cold reducing inflammation after. Complete rest causes stiffness and muscle loss, high-impact activity accelerates joint damage, and continuous immobilization causes contracture.',
    strategy: 'Osteoarthritis: motion is medicine, but low impact. Heat before activity, cold after.' },

  { id: 'BCC-067', cat: 'bcc', sub: 'Skin Integrity', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client with a full-thickness wound that has yellow, stringy, moist tissue covering 60 percent of the wound bed. What is this tissue and what is the goal?',
    options: [
      'Granulation tissue; protect it',
      'Slough; debride it so healthy tissue can granulate',
      'Epithelial tissue; keep it dry',
      'Eschar; leave it intact permanently'
    ],
    answer: [1],
    rationale: 'Yellow, stringy, moist devitalized tissue is slough, which harbors bacteria and prevents healing, so debridement is the goal through autolytic, enzymatic, mechanical, or sharp methods. Granulation is beefy red and protected, epithelial tissue is pink and migrating, and eschar is black and leathery.',
    strategy: 'Wound bed colors: red protect, yellow cleanse, black debride.' },

  { id: 'BCC-068', cat: 'bcc', sub: 'Comfort', type: 'mc', difficulty: 3,
    stem: 'A nurse is caring for a client who received an opioid and now has a respiratory rate of 6 with pinpoint pupils and is difficult to arouse. What should the nurse do first?',
    options: [
      'Administer the next scheduled opioid dose',
      'Stimulate the client, support ventilation, apply oxygen, and administer naloxone as ordered while notifying the provider',
      'Document the finding and monitor',
      'Place the client in Trendelenburg position'
    ],
    answer: [1],
    rationale: 'Opioid-induced respiratory depression is treated with stimulation, ventilatory support, oxygen, and naloxone titrated to restore respiration without precipitating severe withdrawal and pain. Further opioid administration is dangerous, documentation alone is inadequate, and head-down positioning does not help ventilation.',
    strategy: 'Naloxone is titrated in small doses to restore breathing, not to fully reverse analgesia.' },

  { id: 'BCC-069', cat: 'bcc', sub: 'Nutrition', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching a client with lactose intolerance. Which food should the client be able to tolerate?',
    options: ['A glass of milk', 'Aged hard cheese and yogurt with live cultures, often better tolerated in small amounts', 'Ice cream', 'Cream sauce'],
    answer: [1],
    rationale: 'Aged cheeses contain minimal lactose and yogurt with live cultures provides bacterial lactase, so both are commonly tolerated. Milk, ice cream, and cream sauces carry substantial lactose loads.',
    strategy: 'Lactose intolerance is dose dependent. Aged cheese and cultured yogurt are usually fine.' },

  { id: 'BCC-070', cat: 'bcc', sub: 'Elimination', type: 'mc', difficulty: 3,
    stem: 'A nurse notes that a client\'s urine output has been 25 mL per hour for the last 3 hours. What should the nurse do first?',
    options: [
      'Increase IV fluids without an order',
      'Assess the client, check for catheter kinking or obstruction, perform a bladder scan if not catheterized, and notify the provider',
      'Document the finding as normal',
      'Administer a diuretic'
    ],
    answer: [1],
    rationale: 'Output below 30 mL per hour requires assessment for both mechanical causes such as an obstructed catheter and physiological causes such as hypovolemia or kidney injury, then provider notification. Independently altering fluids or giving a diuretic exceeds nursing scope and could worsen the underlying problem.',
    strategy: 'Low urine output: check the tubing before you blame the kidney.' },

  { id: 'BCC-071', cat: 'bcc', sub: 'Mobility', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching a client with Parkinson disease strategies for freezing of gait. Which technique is helpful?',
    options: [
      'Turn quickly to change direction',
      'Use visual cues such as lines on the floor, rhythmic counting or music, and consciously lift the knees and take a wide turning arc',
      'Look down at the feet while walking',
      'Carry objects in both hands while walking'
    ],
    answer: [1],
    rationale: 'External cueing bypasses the impaired internal movement generation of Parkinson disease, and wide turns reduce freezing. Rapid turns provoke falls, looking down shifts the center of gravity forward, and occupied hands eliminate the ability to catch a fall.',
    strategy: 'Parkinson gait: external cues work where internal ones fail. Lines, music, and counting all help.' },

  { id: 'BCC-072', cat: 'bcc', sub: 'Comfort', type: 'mc', difficulty: 2,
    stem: 'A client rates pain 9 out of 10 and the ordered analgesic was given 20 minutes ago with no relief. What should the nurse do?',
    options: [
      'Wait the full dosing interval before doing anything',
      'Reassess the pain and the client\'s status, consider whether the pain represents a new complication, and contact the provider for further orders',
      'Tell the client to use relaxation techniques instead',
      'Administer the next dose early'
    ],
    answer: [1],
    rationale: 'Pain unrelieved by an adequate dose requires reassessment, since severe unrelieved pain may signal a complication such as compartment syndrome, bleeding, ischemia, or perforation, and it also warrants a call for additional orders. Waiting passively, substituting non-pharmacological measures alone, and dosing early without an order are all inappropriate.',
    strategy: 'Unrelieved severe pain is a red flag for a new complication, not just a dosing problem. Reassess before you medicate again.' },

  { id: 'BCC-073', cat: 'bcc', sub: 'Nutrition', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching a client taking levothyroxine about administration. Which instruction is correct?',
    options: [
      'Take it with breakfast for better tolerance',
      'Take it on an empty stomach with water 30 to 60 minutes before breakfast, and separate it from calcium, iron, and antacids by at least 4 hours',
      'Take it with calcium supplements to improve absorption',
      'Take it at bedtime with a snack'
    ],
    answer: [1],
    rationale: 'Food, calcium, iron, and antacids substantially reduce levothyroxine absorption, so it is taken fasting with water and separated from those products. Consistency of timing matters as much as the timing itself.',
    strategy: 'Levothyroxine: empty stomach, morning, water only, and keep calcium and iron 4 hours away.' },

  { id: 'BCC-074', cat: 'bcc', sub: 'Hygiene', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client receiving chemotherapy who has severe stomatitis. Which oral care measure is appropriate?',
    options: [
      'Use a commercial alcohol-based mouthwash',
      'Rinse frequently with a saline or sodium bicarbonate solution, use a very soft brush or sponge, keep lips moist, and avoid alcohol, acidic, and spicy items',
      'Use lemon-glycerin swabs',
      'Brush vigorously with a firm brush'
    ],
    answer: [1],
    rationale: 'Bland frequent rinses, atraumatic cleaning, and avoidance of irritants protect fragile inflamed mucosa. Alcohol-based mouthwash and lemon-glycerin swabs dry and irritate tissue, and vigorous brushing causes bleeding in thrombocytopenic clients.',
    strategy: 'Stomatitis care: saline or bicarbonate rinses, soft tools, no alcohol, no lemon-glycerin.' },

  { id: 'BCC-075', cat: 'bcc', sub: 'Skin Integrity', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching a client about caring for a healing surgical incision at home. Which statement indicates a need for further teaching?',
    options: [
      '"I will wash my hands before and after changing the dressing."',
      '"I will apply hydrogen peroxide to the incision daily to keep it clean."',
      '"I will report increasing redness, warmth, drainage, or fever."',
      '"I will avoid lifting more than 10 pounds until cleared."'
    ],
    answer: [1],
    rationale: 'Hydrogen peroxide is cytotoxic to fibroblasts and delays healing, so it is not used on healing wounds; gentle cleansing with soap and water or saline is preferred. Hand hygiene, recognizing infection signs, and activity restrictions are all correct.',
    strategy: 'Hydrogen peroxide and full-strength povidone-iodine kill healing cells. Avoid both on granulating wounds.' },

  { id: 'BCC-076', cat: 'bcc', sub: 'Sleep', type: 'mc', difficulty: 2,
    stem: 'A client with restless legs syndrome asks what might help. Which recommendation is appropriate?',
    options: [
      'Increase caffeine in the evening to stay alert',
      'Check iron status, maintain regular sleep habits, use moderate exercise and leg stretching, and avoid caffeine, alcohol, and nicotine in the evening',
      'Take an antihistamine nightly',
      'Remain completely still when symptoms occur'
    ],
    answer: [1],
    rationale: 'Iron deficiency is a common and treatable cause, and sleep regularity, movement, and avoidance of stimulants reduce symptoms. Caffeine worsens it, sedating antihistamines commonly exacerbate restless legs, and remaining still intensifies the urge to move.',
    strategy: 'Restless legs: check ferritin first. Antihistamines and antiemetics like metoclopramide make it worse.' },

  { id: 'BCC-077', cat: 'bcc', sub: 'Elimination', type: 'mc', difficulty: 3,
    stem: 'A nurse is caring for a client with a continuous bladder irrigation after prostate surgery. The output has become bright red with clots and the client reports bladder spasms and fullness. What should the nurse do first?',
    options: [
      'Stop the irrigation',
      'Increase the irrigation rate and assess for catheter obstruction, hand-irrigating per order if clots are blocking outflow',
      'Clamp the catheter',
      'Administer a diuretic'
    ],
    answer: [1],
    rationale: 'Increased bleeding with clots and a sensation of fullness suggests clot obstruction; the irrigation rate is increased to clear clots and the catheter is assessed and hand-irrigated per order. Stopping the irrigation or clamping allows clots to obstruct completely and cause bladder distention and hemorrhage.',
    strategy: 'In continuous bladder irrigation, brighter output means run it faster. Fullness plus decreased output means an obstructing clot.' },

  { id: 'BCC-078', cat: 'bcc', sub: 'Nutrition', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching a client on a low-residue diet before a colonoscopy. Which food should the client avoid?',
    options: ['White bread', 'Whole grain cereal with nuts and seeds', 'Well-cooked carrots without skin', 'Plain white rice'],
    answer: [1],
    rationale: 'Low-residue diets restrict fiber to reduce stool bulk, so whole grains, nuts, seeds, raw vegetables, and skins are excluded. Refined grains and well-cooked peeled vegetables are permitted.',
    strategy: 'Low residue means low fiber: no whole grains, nuts, seeds, skins, or raw produce.' },

  { id: 'BCC-079', cat: 'bcc', sub: 'Comfort', type: 'mc', difficulty: 2,
    stem: 'A client with a below-knee amputation reports pain in the missing foot. What is the nurse\'s best response?',
    options: [
      '"That is impossible since your foot is gone."',
      '"Phantom limb pain is real and common. Let us treat it, and there are approaches such as medications, mirror therapy, and desensitization that can help."',
      '"It is all in your head and will pass."',
      '"You should try not to think about it."'
    ],
    answer: [1],
    rationale: 'Phantom limb pain arises from central nervous system reorganization, is genuinely experienced, and responds to neuropathic agents, mirror therapy, desensitization, and residual limb care. Dismissing it as impossible or psychological invalidates the client and leaves treatable pain untreated.',
    strategy: 'Phantom limb pain is neurologic, not psychological. Validate it and treat it as neuropathic pain.' },

  { id: 'BCC-080', cat: 'bcc', sub: 'Mobility', type: 'mc', difficulty: 2,
    stem: 'A nurse is repositioning a client with increased intracranial pressure. Which position should be avoided?',
    options: [
      'Head of bed elevated 30 degrees with the neck in neutral alignment',
      'Sharp hip flexion with the neck rotated to one side',
      'Log rolling with the head supported',
      'Side lying with a small pillow supporting the head in alignment'
    ],
    answer: [1],
    rationale: 'Hip flexion raises intra-abdominal and intrathoracic pressure and neck rotation obstructs jugular venous outflow, both increasing intracranial pressure. Head elevation with neutral alignment, log rolling, and aligned side lying all support venous drainage.',
    strategy: 'Anything that kinks the neck or flexes the hips raises intracranial pressure. Keep the head midline and the body extended.' },

  { id: 'BCC-081', cat: 'bcc', sub: 'Nutrition', type: 'mc', difficulty: 2,
    stem: 'A client taking a monoamine oxidase inhibitor requests dietary guidance. Which beverage should be avoided?',
    options: ['Water', 'Tap beer and red wine', 'Fresh apple juice', 'Milk'],
    answer: [1],
    rationale: 'Tap beer and certain wines are high in tyramine and can precipitate hypertensive crisis with a monoamine oxidase inhibitor. Water, fresh juice, and fresh milk contain negligible tyramine.',
    strategy: 'MAOI plus tyramine equals hypertensive crisis. The classic warning sign is a sudden severe occipital headache.' },

  { id: 'BCC-082', cat: 'bcc', sub: 'Skin Integrity', type: 'mc', difficulty: 3,
    stem: 'A nurse is caring for a client with negative pressure wound therapy. Which finding requires immediate action?',
    options: [
      'The dressing is collapsed and firm with an intact seal',
      'The canister contains bright red blood filling rapidly',
      'The client reports mild pulling sensation',
      'Serosanguineous drainage is present in the canister'
    ],
    answer: [1],
    rationale: 'Rapidly accumulating bright red blood suggests active hemorrhage, which requires immediate discontinuation of therapy, pressure, and provider notification. A collapsed firm dressing indicates a proper seal, a mild pulling sensation is expected, and serosanguineous drainage is normal.',
    strategy: 'Negative pressure therapy: a collapsed dressing is good, bright red rapid bleeding is an emergency.' },

  { id: 'BCC-083', cat: 'bcc', sub: 'Comfort', type: 'mc', difficulty: 2,
    stem: 'A nurse is assessing pain in a 3-year-old. Which tool is most appropriate?',
    options: [
      'Numeric 0 to 10 scale',
      'FACES scale or a behavioral observation scale such as FLACC',
      'Visual analog line',
      'Detailed verbal descriptor questionnaire'
    ],
    answer: [1],
    rationale: 'Preschoolers can reliably point to faces representing pain intensity, and behavioral scales assessing face, legs, activity, cry, and consolability work for those who cannot self-report. Numeric scales, visual analog lines, and complex verbal instruments require abstract reasoning beyond this age.',
    strategy: 'Pain scales by age: FLACC under 3 or nonverbal, FACES 3 to 7, numeric 8 and up.' },

  { id: 'BCC-084', cat: 'bcc', sub: 'Elimination', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching bladder training to a client with urge incontinence. Which technique is appropriate?',
    options: [
      'Void every 30 minutes regardless of urge',
      'Void on a scheduled interval, gradually lengthening the time between voids while using urge suppression techniques such as pelvic floor contractions and distraction',
      'Restrict fluids to under 500 mL daily',
      'Use an indwelling catheter'
    ],
    answer: [1],
    rationale: 'Bladder training progressively extends the voiding interval while urge suppression techniques manage the sensation, retraining bladder capacity. Very frequent voiding shrinks functional capacity, severe fluid restriction concentrates urine and irritates the bladder, and catheterization is not a treatment for urge incontinence.',
    strategy: 'Bladder training lengthens the interval. Restricting fluids makes urge incontinence worse, not better.' },

  { id: 'BCC-085', cat: 'bcc', sub: 'Mobility', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client after a total knee arthroplasty. Which intervention supports recovery?',
    options: [
      'Keep a pillow under the knee to maintain flexion for comfort',
      'Encourage early ambulation, use of the continuous passive motion device or prescribed exercises, and maintain knee extension when at rest',
      'Restrict knee movement for 1 week',
      'Maintain bed rest for 72 hours'
    ],
    answer: [1],
    rationale: 'Early mobilization and prescribed range-of-motion work prevent adhesion and preserve joint function, and the knee is kept extended at rest to avoid flexion contracture. A pillow under the knee, prolonged immobilization, and extended bed rest all promote contracture and thromboembolism.',
    strategy: 'After knee replacement, never put a pillow under the knee. Extension at rest, motion often.' },

  { id: 'BCC-086', cat: 'bcc', sub: 'Nutrition', type: 'mc', difficulty: 2,
    stem: 'A client with dumping syndrome after gastric surgery asks how to reduce symptoms. Which instruction is correct?',
    options: [
      'Drink large amounts of fluid with meals',
      'Eat small frequent meals that are high in protein and fat and lower in simple carbohydrates, drink fluids between rather than with meals, and lie down for 20 to 30 minutes after eating',
      'Eat three large high-carbohydrate meals daily',
      'Sit upright immediately after eating and walk briskly'
    ],
    answer: [1],
    rationale: 'Dumping syndrome results from rapid gastric emptying of hyperosmolar contents into the small bowel. Small meals lower in simple sugars, fluids taken between meals, and recumbency after eating all slow transit. Large carbohydrate loads and fluids with meals accelerate it.',
    strategy: 'Dumping syndrome: small, dry, low-sugar, high-protein meals, fluids between meals, lie down afterward.' },

  { id: 'BCC-087', cat: 'bcc', sub: 'Comfort', type: 'mc', difficulty: 2,
    stem: 'A nurse is evaluating the effectiveness of a pain intervention. Which action is most appropriate?',
    options: [
      'Reassess pain at the next scheduled assessment in 4 hours',
      'Reassess pain at the medication\'s expected peak effect, typically 15 to 30 minutes after IV and 45 to 60 minutes after oral administration',
      'Ask the family whether the client seems better',
      'Assume relief occurred if the client is quiet'
    ],
    answer: [1],
    rationale: 'Reassessment timed to peak effect determines whether the intervention worked and whether adjustment is needed. Waiting hours, relying on family impressions, and interpreting quietness as comfort all lead to unrecognized undertreatment.',
    strategy: 'Reassess at peak effect: about 15 to 30 minutes for IV, 45 to 60 minutes for oral.' },

  { id: 'BCC-088', cat: 'bcc', sub: 'Skin Integrity', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client with a Jackson-Pratt drain. Which action maintains proper function?',
    options: [
      'Leave the bulb expanded to collect drainage passively',
      'Empty the bulb, then fully compress it before recapping to re-establish suction, and record the amount and character of drainage',
      'Irrigate the drain with saline every shift',
      'Clamp the drain between emptyings'
    ],
    answer: [1],
    rationale: 'The Jackson-Pratt bulb works by self-suction, which exists only when the bulb is compressed after emptying. An expanded bulb provides no suction, routine irrigation introduces organisms, and clamping stops drainage and allows fluid collection.',
    strategy: 'Compress the bulb after every emptying. An expanded bulb is a drain that is not working.' },

  { id: 'BCC-089', cat: 'bcc', sub: 'Hygiene', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client with dentures. Which practice is correct?',
    options: [
      'Clean dentures over a hard sink surface',
      'Clean dentures over a basin of water or a towel-lined sink, use a denture brush and cleanser, and store them in water or solution when not worn',
      'Store dentures dry in a tissue at the bedside',
      'Clean dentures with hot water and bleach'
    ],
    answer: [1],
    rationale: 'A cushioned surface prevents breakage if dentures are dropped, and moist storage prevents warping. Dry storage in tissue leads to warping and accidental disposal, and hot water warps the acrylic while bleach damages it.',
    strategy: 'Dentures: clean over water or a towel, store in liquid, never hot water, never wrapped in a napkin.' },

  { id: 'BCC-090', cat: 'bcc', sub: 'Mobility', type: 'mc', difficulty: 3,
    stem: 'A client who has been on bed rest is standing for the first time and reports dizziness. What should the nurse do first?',
    options: [
      'Encourage the client to keep walking to build tolerance',
      'Assist the client to sit or return to bed, check orthostatic vital signs, and progress activity gradually with dangling before standing',
      'Administer an antiemetic',
      'Leave the client seated and go get help'
    ],
    answer: [1],
    rationale: 'Orthostatic intolerance after immobility requires immediate return to a safe position, objective measurement, and a graded progression from dangling to standing to walking. Pushing through the symptom risks syncope and injury, medication does not address the mechanism, and leaving an unsteady client alone is unsafe.',
    strategy: 'Dizziness on standing means sit down now. Progress activity in stages: dangle, stand, then walk.' }
]
