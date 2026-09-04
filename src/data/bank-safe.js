export default [
  { id: 'SAF-001', cat: 'safe', sub: 'PPE', type: 'order', difficulty: 3,
    stem: 'Place the steps for donning personal protective equipment before entering the room of a client on contact and droplet precautions in the correct order.',
    options: ['Perform hand hygiene', 'Put on the gown', 'Put on the mask or respirator', 'Put on goggles or a face shield', 'Put on gloves'],
    answer: [0, 1, 2, 3, 4],
    rationale: 'Donning proceeds hand hygiene, gown, mask, eye protection, gloves, so that gloves are last and cover the gown cuffs, creating a continuous barrier.',
    strategy: 'Donning: gown, mask, goggles, gloves. Doffing reverses it except the mask, which always comes off last, outside the room.' },

  { id: 'SAF-002', cat: 'safe', sub: 'PPE', type: 'order', difficulty: 3,
    stem: 'Place the steps for removing personal protective equipment in the correct order after leaving a client on contact precautions.',
    options: ['Remove gloves', 'Remove goggles or face shield', 'Remove gown', 'Remove mask or respirator after leaving the room', 'Perform hand hygiene'],
    answer: [0, 1, 2, 3, 4],
    rationale: 'Gloves are the most contaminated and come off first, followed by eye protection and gown inside the room. The mask is removed after leaving the room because the air inside may still be contaminated, and hand hygiene concludes the sequence.',
    strategy: 'Take off the dirtiest thing first. Mask comes off outside the room, hands are washed last.' },

  { id: 'SAF-003', cat: 'safe', sub: 'Transmission Precautions', type: 'mc', difficulty: 2,
    stem: 'A client is admitted with suspected pertussis. Which precautions should the nurse implement?',
    options: ['Standard precautions only', 'Droplet precautions', 'Airborne precautions', 'Protective environment'],
    answer: [1],
    rationale: 'Pertussis spreads by large respiratory droplets that travel a short distance, requiring a surgical mask within 3 to 6 feet and a private room when possible. Airborne precautions with an N95 and negative pressure are reserved for tuberculosis, measles, and varicella, and a protective environment protects immunocompromised clients rather than others.',
    strategy: 'Droplet list: pertussis, influenza, meningococcus, mumps, rubella, group A strep, and adenovirus.' },

  { id: 'SAF-004', cat: 'safe', sub: 'Transmission Precautions', type: 'sata', difficulty: 1,
    stem: 'Which conditions require airborne precautions? Select all that apply.',
    options: ['Pulmonary tuberculosis', 'Measles', 'Varicella (chickenpox)', 'Influenza', 'Disseminated herpes zoster', 'Clostridioides difficile colitis'],
    answer: [0, 1, 2, 4],
    rationale: 'Tuberculosis, measles, varicella, and disseminated zoster all spread by small airborne particles that remain suspended, requiring an N95 respirator and a negative-pressure room. Influenza requires droplet precautions and C. difficile requires contact precautions.',
    strategy: 'Airborne mnemonic My Chicken Has TB: measles, chickenpox and disseminated zoster, herpes zoster disseminated, tuberculosis.' },

  { id: 'SAF-005', cat: 'safe', sub: 'Hand Hygiene', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client with Clostridioides difficile. Which hand hygiene method is required?',
    options: ['Alcohol-based hand rub', 'Soap and water', 'Either alcohol-based rub or soap and water', 'Antiseptic wipes'],
    answer: [1],
    rationale: 'C. difficile forms spores that alcohol does not inactivate; only the mechanical friction and rinsing of soap and water removes them. The same rule applies to norovirus and Bacillus anthracis.',
    strategy: 'Spores and norovirus require soap and water. Alcohol works for almost everything else.' },

  { id: 'SAF-006', cat: 'safe', sub: 'Fall Prevention', type: 'sata', difficulty: 1,
    stem: 'Which interventions reduce fall risk for a hospitalized older adult? Select all that apply.',
    options: [
      'Keep the bed in the lowest position with wheels locked',
      'Ensure the call light is within reach',
      'Use all four side rails to keep the client in bed',
      'Provide nonskid footwear',
      'Ensure adequate lighting and a clear path to the bathroom',
      'Offer scheduled toileting'
    ],
    answer: [0, 1, 3, 4, 5],
    rationale: 'Low bed, accessible call light, nonskid footwear, environmental lighting, and proactive toileting all reduce falls. Raising all four side rails is considered a restraint and increases injury severity when a client climbs over them.',
    strategy: 'Four side rails up equals a restraint. Two upper rails for mobility assistance is not.' },

  { id: 'SAF-007', cat: 'safe', sub: 'Sterile Technique', type: 'mc', difficulty: 2,
    stem: 'While setting up a sterile field, the nurse notices the sterile drape has become damp from solution on the underlying table. What should the nurse do?',
    options: [
      'Continue as long as no visible contamination is present',
      'Consider the field contaminated and set up a new sterile field',
      'Place a dry towel over the damp area',
      'Dry the area with a sterile gauze'
    ],
    answer: [1],
    rationale: 'Moisture wicks microorganisms from the unsterile surface through the drape, a phenomenon called strikethrough, so the field is contaminated and must be replaced. Covering or blotting does not restore sterility.',
    strategy: 'Wet equals contaminated. A damp sterile field is no longer sterile no matter how it looks.' },

  { id: 'SAF-008', cat: 'safe', sub: 'Sterile Technique', type: 'sata', difficulty: 1,
    stem: 'Which actions maintain surgical asepsis during a sterile dressing change? Select all that apply.',
    options: [
      'Keeping sterile gloved hands above waist level and in front of the body',
      'Considering the outer 1 inch of the sterile field contaminated',
      'Turning away from the sterile field to cough',
      'Reaching across the sterile field to retrieve supplies',
      'Opening the outermost flap of a sterile package away from the body first',
      'Pouring solution into a container at the edge of the field without touching the container'
    ],
    answer: [0, 1, 4, 5],
    rationale: 'Hands stay in view above the waist, the outer inch of any field is unsterile, packages open with the first flap directed away, and solutions are poured without contact. Coughing anywhere near the field contaminates it even when turned away, and reaching over the field drops skin and lint onto it.',
    strategy: 'Never reach over, never turn your back on, and never let anything below your waist touch a sterile field.' },

  { id: 'SAF-009', cat: 'safe', sub: 'Restraints', type: 'mc', difficulty: 2,
    stem: 'A client is in bilateral soft wrist restraints. How often should the nurse release the restraints and assess the client?',
    options: ['Every 8 hours', 'Every 4 hours', 'At least every 2 hours', 'Only at the client\'s request'],
    answer: [2],
    rationale: 'Restraints are released at least every 2 hours to assess circulation, skin integrity, and range of motion, and to provide toileting, hydration, and repositioning. Longer intervals risk pressure injury, nerve damage, and compromised circulation.',
    strategy: 'Restraints: check every 15 minutes to 2 hours depending on type and policy, release and provide care at least every 2 hours.' },

  { id: 'SAF-010', cat: 'safe', sub: 'Medication Safety', type: 'mc', difficulty: 2,
    stem: 'A nurse prepares to administer a medication and finds the label partially obscured. What should the nurse do?',
    options: [
      'Administer it if the shape and color match the expected medication',
      'Return the medication to the pharmacy and obtain a clearly labeled supply',
      'Ask a colleague to confirm the identity visually',
      'Administer it and document the concern'
    ],
    answer: [1],
    rationale: 'Any medication that cannot be positively identified from an intact label must not be given. Visual identification by appearance is unreliable and a leading cause of wrong-drug errors.',
    strategy: 'If you cannot read the label, you cannot give the drug. No exceptions and no visual matching.' },

  { id: 'SAF-011', cat: 'safe', sub: 'Client Identification', type: 'mc', difficulty: 1,
    stem: 'Which combination of identifiers is acceptable before administering a medication?',
    options: [
      'Room number and bed position',
      'Client\'s full name and date of birth',
      'Diagnosis and attending physician',
      'Client\'s first name and room number'
    ],
    answer: [1],
    rationale: 'Two client-specific identifiers such as full name and date of birth, or name and medical record number, are required. Room and bed assignments change and are never acceptable identifiers.',
    strategy: 'Location is never an identifier. Use two pieces of information that belong to the person.' },

  { id: 'SAF-012', cat: 'safe', sub: 'Transmission Precautions', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client with methicillin-resistant Staphylococcus aureus in a wound. Which precautions are required?',
    options: ['Standard precautions only', 'Contact precautions with gown and gloves for room entry', 'Droplet precautions with a surgical mask', 'Airborne precautions with an N95 respirator'],
    answer: [1],
    rationale: 'MRSA spreads by direct and indirect contact, so gown and gloves are donned before entering the room and dedicated equipment is used. Droplet and airborne precautions are not indicated, and standard precautions alone are insufficient for a resistant organism.',
    strategy: 'Contact precautions cover MRSA, VRE, C. difficile, scabies, RSV, and any draining wound not contained by a dressing.' },

  { id: 'SAF-013', cat: 'safe', sub: 'Safe Handling', type: 'mc', difficulty: 2,
    stem: 'A nurse is preparing to transfer a client who can bear partial weight and follow directions. Which technique is safest?',
    options: [
      'Lift the client under the arms and pivot',
      'Use a gait belt and a stand-assist device with the bed lowered and locked',
      'Have the client hold onto the nurse\'s neck during the transfer',
      'Perform the transfer alone using a sheet under the client'
    ],
    answer: [1],
    rationale: 'A gait belt with a stand-assist device distributes load safely, protects the client, and prevents nurse injury. Lifting under the arms risks brachial plexus injury and shoulder dislocation, allowing the client to grasp the nurse\'s neck risks cervical injury to the nurse, and a solo sheet transfer of a partial-weight-bearing client is unsafe.',
    strategy: 'Never lift under the axillae, never let a client hold your neck, and never transfer alone what needs two.' },

  { id: 'SAF-014', cat: 'safe', sub: 'Home Safety', type: 'sata', difficulty: 2,
    stem: 'A home health nurse assesses the home of an older adult client. Which findings represent safety hazards? Select all that apply.',
    options: [
      'Throw rugs in the hallway',
      'A grab bar installed beside the toilet',
      'Extension cords running under a rug',
      'A water heater set to 140 degrees Fahrenheit',
      'Nightlights in the hallway and bathroom',
      'Medication bottles from several prescribers stored together in one bag'
    ],
    answer: [0, 2, 3, 5],
    rationale: 'Loose rugs and cords under rugs cause falls and fire, water above 120 degrees Fahrenheit causes scald burns, and pooled medications from multiple prescribers risk duplication and error. Grab bars and nightlights are protective.',
    strategy: 'Home safety checklist: rugs, cords, water temperature, lighting, smoke alarms, and how medications are organized.' },

  { id: 'SAF-015', cat: 'safe', sub: 'Emergency Response', type: 'mc', difficulty: 3,
    stem: 'A nurse discovers a client on the floor beside the bed. What should the nurse do first?',
    options: [
      'Help the client back into bed',
      'Assess the client for injury and level of consciousness before moving them',
      'Call the provider',
      'Complete an incident report'
    ],
    answer: [1],
    rationale: 'Moving a client before assessment can worsen an undetected fracture or spinal injury. The nurse assesses responsiveness, injury, and vital signs first, then decides how to move the client safely.',
    strategy: 'After a fall, assess before you lift. Every time.' },

  { id: 'SAF-016', cat: 'safe', sub: 'Hazardous Materials', type: 'mc', difficulty: 2,
    stem: 'A nurse is preparing to administer a chemotherapeutic agent. Which precaution is required?',
    options: [
      'Standard gloves and a surgical mask are sufficient',
      'Wear chemotherapy-rated double gloves and a gown, and dispose of all materials in a designated hazardous waste container',
      'Crush oral tablets to ease administration',
      'Dispose of unused drug in the sink'
    ],
    answer: [1],
    rationale: 'Antineoplastic agents require chemotherapy-rated double gloves, a closed-front impermeable gown, eye protection when splashing is possible, and disposal in dedicated hazardous waste containers. Standard PPE is inadequate, crushing aerosolizes the drug, and sink disposal contaminates the water supply.',
    strategy: 'Hazardous drugs: double glove, dedicated gown, never crush, never pour down a drain, yellow container.' },

  { id: 'SAF-017', cat: 'safe', sub: 'Infection Control', type: 'mc', difficulty: 2,
    stem: 'A nurse sustains a needlestick from a used hollow-bore needle. What is the first action?',
    options: [
      'Report to the supervisor',
      'Wash the site immediately with soap and water',
      'Squeeze the site to express blood',
      'Apply an antiseptic and bandage'
    ],
    answer: [1],
    rationale: 'Immediate washing with soap and water reduces the inoculum at the exposure site. The exposure is then reported at once so source testing and post-exposure prophylaxis can begin within the effective window. Squeezing the wound causes tissue trauma and does not reduce transmission risk.',
    strategy: 'Needlestick: wash first, report immediately, prophylaxis within hours. Do not squeeze.' },

  { id: 'SAF-018', cat: 'safe', sub: 'Fall Prevention', type: 'mc', difficulty: 3,
    stem: 'Which hospitalized client is at highest risk for a fall?',
    options: [
      'A 45-year-old ambulating independently after an appendectomy',
      'An 84-year-old taking a new diuretic and a benzodiazepine who reports getting up at night to urinate',
      'A 30-year-old on bed rest with a pneumatic compression device',
      'A 60-year-old with a stable gait using a cane at home'
    ],
    answer: [1],
    rationale: 'Advanced age, a new diuretic causing urgency and orthostasis, a sedating benzodiazepine, and nocturnal toileting compound into the highest risk profile. The other clients each carry one or no risk factor.',
    strategy: 'Fall risk stacks: age, sedatives, diuretics, nocturia, prior falls, and impaired mobility. Count the factors.' },

  { id: 'SAF-019', cat: 'safe', sub: 'Restraints', type: 'mc', difficulty: 1,
    stem: 'Which situation constitutes a restraint requiring an order and monitoring?',
    options: [
      'A side rail raised to help a client reposition themselves',
      'All four side rails raised on the bed of a confused client',
      'An IV arm board used to stabilize a catheter site',
      'A seat belt on a wheelchair that the client can release independently'
    ],
    answer: [1],
    rationale: 'Raising all four side rails to prevent a client from getting out of bed restricts freedom of movement and is a restraint. A single rail used as a mobility aid, an arm board for device stability, and a belt the client can remove are not restraints.',
    strategy: 'Ask two questions: does it restrict movement, and can the client remove it? Restricting plus cannot remove equals restraint.' },

  { id: 'SAF-020', cat: 'safe', sub: 'Medication Safety', type: 'mc', difficulty: 2,
    stem: 'A nurse is preparing to administer a high-alert medication. Which safety practice is required?',
    options: [
      'Administer it last so there is time to double check',
      'Perform an independent double check with a second nurse before administration',
      'Have the client verify the dose',
      'Administer it and document the dose immediately after'
    ],
    answer: [1],
    rationale: 'High-alert medications such as insulin, heparin, opioids, concentrated electrolytes, and chemotherapy require independent double checks in which a second nurse verifies drug, dose, rate, and client separately. Timing, client verification, and prompt documentation do not substitute for the double check.',
    strategy: 'High-alert medications: insulin, heparin, opioids, potassium, chemotherapy. Independent double check every time.' },

  { id: 'SAF-021', cat: 'safe', sub: 'Transmission Precautions', type: 'mc', difficulty: 2,
    stem: 'A client with active pulmonary tuberculosis must be transported to radiology. Which action is appropriate?',
    options: [
      'The client wears an N95 respirator during transport',
      'The client wears a surgical mask and staff wear N95 respirators when in the room',
      'The client is transported without a mask if staff wear N95 respirators',
      'The transport is cancelled until the client is no longer infectious'
    ],
    answer: [1],
    rationale: 'During transport the client wears a surgical mask to contain their own droplet nuclei at the source; N95 respirators are for staff who share the client\'s air space. Clients are not fitted for N95 respirators, unmasked transport spreads organisms through corridors, and necessary imaging is not deferred for weeks.',
    strategy: 'Source control is a surgical mask on the client. Respiratory protection is an N95 on the staff.' },

  { id: 'SAF-022', cat: 'safe', sub: 'Accident Prevention', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client receiving oxygen therapy. Which action reduces fire risk?',
    options: [
      'Using a wool blanket for warmth',
      'Removing electric razors and petroleum-based products from the bedside',
      'Placing the oxygen tank horizontally on the floor',
      'Allowing the client to use a lighter for religious candles at the bedside'
    ],
    answer: [1],
    rationale: 'Electric devices can spark and petroleum products are flammable, so both are removed near oxygen. Wool generates static electricity, oxygen cylinders are secured upright to prevent them becoming projectiles, and open flames are absolutely prohibited.',
    strategy: 'Around oxygen: no flames, no sparks, no petroleum, no wool or synthetics that build static.' },

  { id: 'SAF-023', cat: 'safe', sub: 'Infection Control', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching a client with a compromised immune system about infection prevention at home. Which instruction is correct?',
    options: [
      '"Avoid raw fruits and vegetables and unpasteurized products."',
      '"You may keep fresh flowers in your bedroom for morale."',
      '"Change the cat litter box daily to keep it clean."',
      '"Crowded indoor gatherings are fine as long as you wash your hands."'
    ],
    answer: [0],
    rationale: 'Neutropenic precautions restrict raw produce and unpasteurized items because they carry bacterial and fungal loads. Fresh flowers and standing water harbor Pseudomonas and Aspergillus, cat litter carries Toxoplasma and should be handled by someone else, and crowds increase exposure to respiratory pathogens.',
    strategy: 'Immunocompromised home teaching: no raw produce, no flowers or plants, no litter boxes, no crowds, no live vaccines.' },

  { id: 'SAF-024', cat: 'safe', sub: 'Error Prevention', type: 'mc', difficulty: 1,
    stem: 'Which practice most effectively prevents wrong-site surgery?',
    options: [
      'Reviewing the consent form the morning of surgery',
      'Performing a time-out immediately before incision with the entire team verifying client, procedure, and marked site',
      'Asking the surgeon to confirm the site verbally',
      'Marking the site after the client is anesthetized'
    ],
    answer: [1],
    rationale: 'The universal protocol requires site marking with the awake client participating, preprocedure verification, and a team time-out immediately before the incision when all activity stops. Consent review alone, a single verbal confirmation, and marking after anesthesia all remove the client from verification.',
    strategy: 'Universal protocol: verify, mark with the client awake, time-out before incision with everyone stopping.' },

  { id: 'SAF-025', cat: 'safe', sub: 'Emergency Response', type: 'mc', difficulty: 2,
    stem: 'A client is choking, cannot speak, and is clutching their throat. What should the nurse do?',
    options: [
      'Perform a blind finger sweep',
      'Deliver abdominal thrusts until the object is expelled or the client becomes unresponsive',
      'Give the client water to help wash the object down',
      'Place the client supine and begin rescue breaths'
    ],
    answer: [1],
    rationale: 'A conscious adult with complete airway obstruction receives abdominal thrusts until relief or loss of consciousness, at which point CPR begins. Blind sweeps push objects deeper, fluids cannot pass a complete obstruction, and rescue breaths cannot ventilate past the blockage.',
    strategy: 'Conscious and choking equals abdominal thrusts. Unconscious equals CPR, and look in the mouth only when you open the airway for breaths.' },

  { id: 'SAF-026', cat: 'safe', sub: 'Transmission Precautions', type: 'sata', difficulty: 1,
    stem: 'Which practices are part of standard precautions used with every client? Select all that apply.',
    options: [
      'Hand hygiene before and after client contact',
      'Wearing gloves when contact with blood or body fluids is anticipated',
      'Using a mask and eye protection when splashing is likely',
      'Recapping needles using a two-handed technique',
      'Safe injection practices including one needle, one syringe, one time',
      'Cleaning and disinfecting shared equipment between clients'
    ],
    answer: [0, 1, 2, 4, 5],
    rationale: 'Standard precautions treat all blood and body fluids as potentially infectious and include hand hygiene, appropriate PPE, safe injection practice, and equipment disinfection. Needles are never recapped two-handed; a one-handed scoop or a safety device is used if recapping is unavoidable.',
    strategy: 'Standard precautions apply to everyone, always. Two-handed recapping is always the wrong answer.' },

  { id: 'SAF-027', cat: 'safe', sub: 'Fall Prevention', type: 'mc', difficulty: 2,
    stem: 'A client using a walker asks the nurse to verify correct use. Which observation indicates correct technique?',
    options: [
      'The client pushes the walker far ahead and leans forward to reach it',
      'The client moves the walker forward a short distance, then steps into it with the weaker leg first',
      'The client places the walker to one side and steps around it',
      'The client lifts the walker and carries it while walking'
    ],
    answer: [1],
    rationale: 'The walker advances a short distance, the weaker leg steps in first, then the stronger leg follows, keeping the client inside the base of support. Reaching far forward shifts the center of gravity outside the walker, side placement offers no support, and carrying it defeats its purpose.',
    strategy: 'Assistive devices: the weaker side always moves with the device. Cane goes on the strong side, weak leg advances with it.' },

  { id: 'SAF-028', cat: 'safe', sub: 'Infection Control', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client with a central venous catheter. Which action best prevents a central line-associated bloodstream infection?',
    options: [
      'Change the dressing daily regardless of type',
      'Scrub the catheter hub with an antiseptic for at least 15 seconds before each access and allow it to dry',
      'Flush the line with sterile water between medications',
      'Leave the line in place until the client is discharged'
    ],
    answer: [1],
    rationale: 'Hub disinfection before every access is a core prevention measure, along with daily assessment of line necessity and prompt removal. Transparent dressings are changed every 7 days rather than daily, saline rather than water is used for flushing, and leaving lines in longer than needed increases infection risk.',
    strategy: 'Scrub the hub, sterile dressing changes on schedule, and pull the line the day it is no longer needed.' },

  { id: 'SAF-029', cat: 'safe', sub: 'Hazardous Materials', type: 'mc', difficulty: 3,
    stem: 'A mercury thermometer breaks on the floor of a client\'s room. What should the nurse do first?',
    options: [
      'Sweep the mercury into a dustpan and discard it',
      'Evacuate the immediate area, restrict access, and notify the facility hazardous materials response per policy',
      'Vacuum the spill quickly',
      'Wash the area with soap and water'
    ],
    answer: [1],
    rationale: 'Mercury vaporizes at room temperature and inhalation causes neurotoxicity, so the area is cleared and the trained spill team responds. Sweeping disperses droplets, vacuuming aerosolizes mercury throughout the room and contaminates the vacuum, and washing spreads it.',
    strategy: 'Any hazardous spill: protect people first, contain the area, then call the trained responders. Never improvise cleanup.' },

  { id: 'SAF-030', cat: 'safe', sub: 'Client Identification', type: 'mc', difficulty: 2,
    stem: 'A nurse is about to administer a blood transfusion. Which verification step is required?',
    options: [
      'The nurse verifies the unit alone against the chart',
      'Two qualified staff members verify the client identifiers, blood type, unit number, and expiration at the bedside',
      'The blood bank verification alone is sufficient',
      'The client states their own name and that is documented'
    ],
    answer: [1],
    rationale: 'Two-person bedside verification of client identity, ABO and Rh compatibility, unit number, and expiration is required because a mismatched transfusion is rapidly fatal. Single-nurse checks, reliance on the blood bank, or client statement alone do not meet the standard.',
    strategy: 'Blood administration is the most heavily double-checked task in nursing. Two people, at the bedside, every element.' },

  { id: 'SAF-031', cat: 'safe', sub: 'Emergency Response', type: 'mc', difficulty: 3,
    stem: 'During an evacuation for fire, which clients should be moved first?',
    options: [
      'Clients closest to the fire who are ambulatory',
      'Clients who are bedbound and farthest from the exit',
      'Clients on ventilators',
      'Clients who are unconscious'
    ],
    answer: [0],
    rationale: 'Evacuation moves the greatest number of people out of danger fastest, so ambulatory clients nearest the fire go first because they can be directed out with minimal staff. Clients requiring the most assistance are moved subsequently as resources allow.',
    strategy: 'Evacuation order: ambulatory first, then those needing assistance, then those needing full lift or life support.' },

  { id: 'SAF-032', cat: 'safe', sub: 'Infection Control', type: 'mc', difficulty: 2,
    stem: 'A nurse is preparing to change a wound dressing on a client with a draining abdominal wound. In what order should the nurse handle the supplies?',
    options: [
      'Apply sterile gloves, remove the old dressing, then apply the new dressing with the same gloves',
      'Perform hand hygiene, apply clean gloves to remove the soiled dressing, remove gloves and perform hand hygiene, then apply sterile gloves for the new dressing',
      'Remove the old dressing with sterile gloves and apply the new one with clean gloves',
      'Use the same clean gloves throughout the procedure'
    ],
    answer: [1],
    rationale: 'The soiled dressing is removed with clean gloves, which are then discarded with hand hygiene performed before sterile gloves are applied for the new dressing. Using one pair of gloves throughout transfers organisms from the old dressing into the wound.',
    strategy: 'Dirty to clean requires a glove change and hand hygiene in between. Always.' },

  { id: 'SAF-033', cat: 'safe', sub: 'Medication Safety', type: 'mc', difficulty: 1,
    stem: 'Which abbreviation should never be used in a medication order because of its association with error?',
    options: ['mL', 'mg', 'U for units', 'mcg'],
    answer: [2],
    rationale: 'The abbreviation U for units is on the official do-not-use list because it is misread as a zero or a four, producing tenfold overdoses of insulin and heparin. Milliliters, milligrams, and micrograms written out are acceptable, though mcg is preferred over the Greek symbol.',
    strategy: 'Do-not-use list: U, IU, QD, QOD, trailing zeros, and a missing leading zero.' },

  { id: 'SAF-034', cat: 'safe', sub: 'Safe Handling', type: 'mc', difficulty: 2,
    stem: 'A nurse must reposition a client who weighs 250 pounds and cannot assist. What is the safest approach?',
    options: [
      'Reposition the client alone using proper body mechanics',
      'Use a mechanical lift or friction-reducing device with the appropriate number of staff',
      'Pull the client up using the draw sheet with one other person',
      'Ask the client to grab the trapeze and pull themselves up'
    ],
    answer: [1],
    rationale: 'Safe patient handling standards direct the use of mechanical lifts or friction-reducing devices for any client who cannot assist, because manual lifting of loads over roughly 35 pounds injures staff regardless of body mechanics. A client who cannot assist also cannot use a trapeze.',
    strategy: 'Good body mechanics do not make an unsafe lift safe. Use the equipment.' },

  { id: 'SAF-035', cat: 'safe', sub: 'Transmission Precautions', type: 'mc', difficulty: 3,
    stem: 'A nurse is assigned four clients. Which client can safely share a semiprivate room with a client who has a surgical wound infected with vancomycin-resistant Enterococcus?',
    options: [
      'A client who is neutropenic after chemotherapy',
      'Another client with vancomycin-resistant Enterococcus in a wound',
      'A client with a fresh surgical incision',
      'A client with an indwelling urinary catheter'
    ],
    answer: [1],
    rationale: 'Cohorting clients with the same organism is acceptable when private rooms are unavailable. Placing a neutropenic client, a client with a fresh incision, or a client with an indwelling device in the room exposes highly susceptible hosts to a resistant organism.',
    strategy: 'Cohort like with like. Never room an infectious client with an immunocompromised one or one with an open portal of entry.' },

  { id: 'SAF-036', cat: 'safe', sub: 'Accident Prevention', type: 'sata', difficulty: 2,
    stem: 'A nurse is teaching parents of a toddler about home safety. Which instructions are appropriate? Select all that apply.',
    options: [
      'Install cabinet locks on cabinets containing cleaning products',
      'Keep the poison control number readily accessible',
      'Place the child in a forward-facing car seat as soon as they turn 1',
      'Set the water heater no higher than 120 degrees Fahrenheit',
      'Cover electrical outlets with safety covers',
      'Keep small objects such as coins and button batteries out of reach'
    ],
    answer: [0, 1, 3, 4, 5],
    rationale: 'Cabinet locks, poison control access, safe water temperature, outlet covers, and removal of choking and battery hazards all address the leading toddler injuries. Children should remain rear-facing until at least age 2 or until they exceed the seat height and weight limits.',
    strategy: 'Toddler safety centers on poisoning, drowning, burns, falls, and choking. Rear-facing until at least 2.' },

  { id: 'SAF-037', cat: 'safe', sub: 'Restraints', type: 'mc', difficulty: 2,
    stem: 'A provider orders restraints for a violent client. Which element must the order include?',
    options: [
      'An indefinite duration until the client calms',
      'The specific type of restraint, the reason, and a time limit consistent with regulation',
      'Permission to reapply as needed',
      'A general statement that restraints may be used'
    ],
    answer: [1],
    rationale: 'Restraint orders must specify type, clinical justification, and duration, with maximum time limits set by regulation and renewal requiring reassessment. Indefinite orders, as-needed restraint orders, and blanket authorizations are prohibited.',
    strategy: 'No PRN restraints, no open-ended orders. Type, reason, time limit, and face-to-face evaluation.' },

  { id: 'SAF-038', cat: 'safe', sub: 'Infection Control', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client with an indwelling urinary catheter. Which action increases the risk of infection?',
    options: [
      'Securing the catheter to the thigh',
      'Emptying the drainage bag using a separate clean container for each client',
      'Opening the drainage system to obtain a urine specimen',
      'Keeping the bag below the level of the bladder'
    ],
    answer: [2],
    rationale: 'Breaking the closed drainage system creates a direct route for organisms; specimens are obtained from the needleless sampling port after disinfection. Securing the catheter prevents traction and urethral trauma, dedicated collection containers prevent cross-contamination, and gravity drainage prevents reflux.',
    strategy: 'The closed system is sacred. Sample from the port, never disconnect.' },

  { id: 'SAF-039', cat: 'safe', sub: 'Emergency Response', type: 'mc', difficulty: 3,
    stem: 'A nurse is triaging victims after a chemical exposure. Which action takes priority?',
    options: [
      'Begin intravenous fluid resuscitation',
      'Decontaminate victims by removing clothing and irrigating skin before they enter the treatment area',
      'Obtain a detailed exposure history',
      'Administer analgesics'
    ],
    answer: [1],
    rationale: 'Decontamination halts ongoing absorption and prevents secondary contamination of staff and the facility, so it precedes all other treatment. Removing clothing alone eliminates a large proportion of contaminant. History taking, fluids, and analgesia follow decontamination.',
    strategy: 'Chemical exposure: decontaminate before you treat, or you contaminate your own emergency department.' },

  { id: 'SAF-040', cat: 'safe', sub: 'Medication Safety', type: 'mc', difficulty: 2,
    stem: 'A nurse is administering medications and a client says, "That pill looks different from the one I usually take." What should the nurse do?',
    options: [
      'Explain that generic manufacturers change frequently and administer it',
      'Hold the medication and verify the order and the drug before administering',
      'Ask the client to take it anyway and monitor for effects',
      'Give a different medication instead'
    ],
    answer: [1],
    rationale: 'A client\'s observation that a medication looks different is a valuable last-line safety check and must be verified before administration, since it frequently reveals a dispensing or transcription error. Explaining it away, urging administration, or substituting a drug are all unsafe.',
    strategy: 'When a client questions a medication, stop and verify. Clients catch errors that systems miss.' },

  { id: 'SAF-041', cat: 'safe', sub: 'Fall Prevention', type: 'mc', difficulty: 2,
    stem: 'A client who received IV opioid analgesia 20 minutes ago asks to walk to the bathroom. What should the nurse do?',
    options: [
      'Allow the client to walk independently',
      'Assist the client with ambulation, or offer a bedside commode or urinal',
      'Tell the client to wait 2 hours',
      'Insert a urinary catheter'
    ],
    answer: [1],
    rationale: 'Recent opioid administration causes sedation and orthostatic hypotension, so the client needs assistance or a nearer alternative. Independent ambulation risks a fall, making the client wait 2 hours is unnecessary and undignified, and catheterization introduces infection risk for a problem with simpler solutions.',
    strategy: 'Recent sedation, new antihypertensive, or first ambulation after surgery all mean the client does not walk alone.' },

  { id: 'SAF-042', cat: 'safe', sub: 'Infection Control', type: 'mc', difficulty: 3,
    stem: 'Which client requires a private room with a negative-pressure ventilation system?',
    options: [
      'A client with a MRSA wound infection',
      'A client with suspected pulmonary tuberculosis',
      'A client with rotavirus gastroenteritis',
      'A client with a draining pressure injury'
    ],
    answer: [1],
    rationale: 'Airborne isolation for suspected tuberculosis requires a negative-pressure room with at least 6 to 12 air changes per hour and air exhausted outside or through HEPA filtration. The other conditions require contact precautions in a private room but not negative pressure.',
    strategy: 'Negative pressure keeps organisms in. Positive pressure keeps organisms out and is for the immunocompromised.' },

  { id: 'SAF-043', cat: 'safe', sub: 'Accident Prevention', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client with a history of seizures. Which item should be at the bedside?',
    options: [
      'A padded tongue blade',
      'Suction equipment and oxygen',
      'Soft wrist restraints',
      'An oral airway taped to the headboard'
    ],
    answer: [1],
    rationale: 'Suction and oxygen manage the airway during and after a seizure. Nothing is placed in the mouth during a seizure, restraints increase injury risk by resisting the tonic-clonic movements, and an oral airway is inserted only after the seizure has ended if needed.',
    strategy: 'Seizure precautions: suction, oxygen, padded rails, bed low. Nothing goes in the mouth and nobody gets restrained.' },

  { id: 'SAF-044', cat: 'safe', sub: 'Error Prevention', type: 'mc', difficulty: 3,
    stem: 'A nurse realizes a scheduled medication was not given 3 hours ago. What should the nurse do first?',
    options: [
      'Give the dose now and say nothing',
      'Assess the client, determine the clinical significance, and contact the provider for direction',
      'Chart that the dose was given',
      'Wait and give a double dose at the next scheduled time'
    ],
    answer: [1],
    rationale: 'The nurse assesses the client for effects of the missed dose, judges its urgency, and consults the provider about whether to give it late, skip it, or adjust the schedule. Silent late administration, falsified documentation, and dose doubling are all unsafe and unethical.',
    strategy: 'Missed dose: assess, ask, then act. Never double up on your own.' },

  { id: 'SAF-045', cat: 'safe', sub: 'Transmission Precautions', type: 'mc', difficulty: 2,
    stem: 'A visitor asks why they must wear a gown and gloves to visit a family member on contact precautions. Which response is best?',
    options: [
      '"It is hospital policy and we cannot make exceptions."',
      '"Your family member has an infection that spreads by touch. The gown and gloves keep it from traveling on your clothes and hands to other people."',
      '"You could catch something serious if you do not."',
      '"Only staff really need to wear it, but we ask everyone to."'
    ],
    answer: [1],
    rationale: 'A plain-language explanation of transmission and its purpose builds cooperation and understanding. Citing policy without reason is unhelpful, fear-based framing is inaccurate for many organisms, and suggesting the requirement is optional undermines it.',
    strategy: 'Teaching always works better than policy citation. Explain the mechanism in one sentence.' }
  ,
  { id: 'SAF-046', cat: 'safe', sub: 'Infection Control', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching a client about preventing recurrent urinary tract infections. Which instruction is correct?',
    options: [
      '"Limit fluids so your bladder is not constantly full."',
      '"Void every 2 to 3 hours during the day and empty your bladder after intercourse."',
      '"Use scented bubble baths to keep the area clean."',
      '"Hold your urine as long as possible to stretch the bladder."'
    ],
    answer: [1],
    rationale: 'Regular voiding and post-coital emptying flush bacteria from the urethra before they ascend. Fluid restriction concentrates urine and promotes bacterial growth, scented products irritate the perineum, and urinary retention encourages colonization.',
    strategy: 'UTI prevention: drink more, void often, wipe front to back, void after sex, avoid irritants.' },

  { id: 'SAF-047', cat: 'safe', sub: 'Fall Prevention', type: 'mc', difficulty: 2,
    stem: 'A client with orthostatic hypotension is preparing to get out of bed. Which instruction should the nurse give?',
    options: [
      'Stand up quickly to get the movement over with',
      'Sit on the edge of the bed for a minute or two with feet dangling before standing',
      'Cross the legs while sitting to increase blood pressure',
      'Hold the breath while rising'
    ],
    answer: [1],
    rationale: 'Dangling allows baroreceptors to compensate for the postural change and prevents the sudden drop in cerebral perfusion that causes syncope. Rising quickly precipitates it, and breath holding produces a Valsalva maneuver that further reduces cardiac output.',
    strategy: 'Orthostatic teaching: change position slowly, dangle before standing, and rise with assistance available.' },

  { id: 'SAF-048', cat: 'safe', sub: 'Sterile Technique', type: 'mc', difficulty: 2,
    stem: 'A nurse is performing sterile urinary catheterization. Which action breaks sterile technique?',
    options: [
      'Cleaning the meatus with the nondominant hand and keeping the dominant hand sterile',
      'Placing the sterile drape before opening the catheter package',
      'Using the hand that touched the labia to advance the catheter',
      'Lubricating the catheter tip with sterile lubricant'
    ],
    answer: [2],
    rationale: 'Once the nondominant hand contacts the perineum it is contaminated and must remain in place holding the labia or penis; the sterile dominant hand advances the catheter. The other actions are all correct components of the procedure.',
    strategy: 'One hand becomes dirty and stays put. One hand stays sterile and does the work.' },

  { id: 'SAF-049', cat: 'safe', sub: 'Emergency Response', type: 'mc', difficulty: 2,
    stem: 'A tornado warning is issued while the nurse is caring for clients on a medical unit. Which action is appropriate?',
    options: [
      'Move clients into hallways away from windows and close all room doors',
      'Open windows to equalize pressure',
      'Evacuate all clients to the ground floor immediately',
      'Move clients to rooms with the largest windows for visibility'
    ],
    answer: [0],
    rationale: 'Interior hallways away from glass provide the best protection, and closed doors block flying debris. Opening windows does not equalize pressure and admits debris, mass evacuation during a warning is dangerous and often impossible, and windows are exactly what to avoid.',
    strategy: 'Severe weather: interior, low, away from glass, doors closed.' },

  { id: 'SAF-050', cat: 'safe', sub: 'Medication Safety', type: 'mc', difficulty: 2,
    stem: 'A nurse is preparing an IV medication and cannot find the ordered concentration on the shelf. A similar-looking vial with a different concentration is available. What should the nurse do?',
    options: [
      'Calculate the equivalent volume and administer from the available vial',
      'Contact the pharmacy to obtain the ordered concentration or confirm an acceptable substitution',
      'Administer a partial dose and document the discrepancy',
      'Ask a colleague to verify the calculation and proceed'
    ],
    answer: [1],
    rationale: 'Concentration mix-ups are a leading source of tenfold errors, particularly with look-alike vials, so the pharmacy verifies the correct product or an approved alternative. Independent calculation, partial dosing, and peer verification of an unauthorized substitution all increase risk.',
    strategy: 'When the drug in hand does not match the order, involve pharmacy. Do not improvise the math.' },

  { id: 'SAF-051', cat: 'safe', sub: 'Transmission Precautions', type: 'mc', difficulty: 2,
    stem: 'A client with shingles confined to the T4 dermatome on one side of the trunk is admitted. Which precautions are appropriate?',
    options: [
      'Standard precautions with the lesions covered',
      'Airborne and contact precautions',
      'Droplet precautions',
      'Protective environment'
    ],
    answer: [0],
    rationale: 'Localized zoster in an immunocompetent client requires only standard precautions with lesions covered, since the virus spreads through contact with vesicle fluid. Disseminated zoster, or localized zoster in an immunocompromised client, requires airborne and contact precautions.',
    strategy: 'Localized shingles covered equals standard precautions. Disseminated or immunocompromised equals airborne plus contact.' },

  { id: 'SAF-052', cat: 'safe', sub: 'Home Safety', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching a client with new-onset seizures about safety at home. Which instruction is most important?',
    options: [
      '"Avoid all physical activity."',
      '"Do not swim or bathe alone, and follow your state\'s driving restrictions until you are seizure free for the required period."',
      '"Stop your medication once you have gone a month without a seizure."',
      '"Sleep sitting up to prevent nighttime seizures."'
    ],
    answer: [1],
    rationale: 'Drowning and motor vehicle crashes are the leading causes of seizure-related death, so unsupervised water activity is avoided and driving restrictions are followed. Complete activity avoidance is unnecessary and harmful, abrupt medication discontinuation triggers status epilepticus, and sleeping position does not prevent seizures.',
    strategy: 'Seizure safety teaching: never swim or bathe alone, follow driving law, never stop the medication abruptly.' },

  { id: 'SAF-053', cat: 'safe', sub: 'Infection Control', type: 'sata', difficulty: 1,
    stem: 'Which nursing actions help prevent ventilator-associated pneumonia? Select all that apply.',
    options: [
      'Maintain the head of the bed at 30 to 45 degrees unless contraindicated',
      'Perform oral care with chlorhexidine per protocol',
      'Change ventilator circuits daily',
      'Assess readiness for extubation daily with sedation interruption',
      'Maintain endotracheal cuff pressure within the recommended range',
      'Instill normal saline before suctioning to loosen secretions'
    ],
    answer: [0, 1, 3, 4],
    rationale: 'Head elevation, oral decontamination, daily sedation interruption with extubation readiness assessment, and adequate cuff pressure to prevent aspiration around the tube all reduce ventilator-associated pneumonia. Routine circuit changes increase rather than decrease risk, and saline instillation before suctioning pushes organisms distally and causes desaturation.',
    strategy: 'VAP bundle: head up, oral care, sedation vacation and extubation readiness, cuff pressure, and no saline lavage.' },

  { id: 'SAF-054', cat: 'safe', sub: 'Accident Prevention', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client who is confused and repeatedly attempts to get out of bed. Which intervention should be tried first?',
    options: [
      'Apply a vest restraint',
      'Move the client to a room near the nurses\' station and use a bed exit alarm with frequent rounding',
      'Administer a sedative',
      'Raise all four side rails'
    ],
    answer: [1],
    rationale: 'Least restrictive interventions come first: increased visibility, a bed exit alarm, and hourly rounding that anticipates toileting, pain, and positioning needs. Physical restraints, chemical sedation, and full side rails all increase injury and delirium risk.',
    strategy: 'Escalate from least to most restrictive. Proximity and anticipation before devices and drugs.' },

  { id: 'SAF-055', cat: 'safe', sub: 'Error Prevention', type: 'mc', difficulty: 2,
    stem: 'A nurse receives an order for "Lantus 10 u subcutaneous nightly." What should the nurse do?',
    options: [
      'Administer 10 units of insulin glargine at bedtime',
      'Clarify the order with the prescriber because the abbreviation for units is prohibited',
      'Administer 100 units since u may mean a trailing zero',
      'Ask another nurse how to interpret the order'
    ],
    answer: [1],
    rationale: 'The abbreviation u is on the do-not-use list precisely because it is misread, and any order containing it must be clarified and rewritten with units spelled out. Interpreting it, assuming a larger dose, or seeking a peer\'s guess all risk a tenfold insulin error.',
    strategy: 'A prohibited abbreviation in an order means clarify and have it rewritten, not interpret.' },

  { id: 'SAF-056', cat: 'safe', sub: 'PPE', type: 'mc', difficulty: 2,
    stem: 'A nurse must enter the room of a client on airborne precautions. Which respiratory protection is required?',
    options: ['A surgical mask', 'A fit-tested N95 or higher respirator', 'A face shield alone', 'No respiratory protection if standing more than 6 feet away'],
    answer: [1],
    rationale: 'Airborne pathogens remain suspended in small particles that a surgical mask does not filter, so a fit-tested N95 or higher-level respirator is required regardless of distance in the room. A face shield protects against splash only.',
    strategy: 'Surgical mask for droplet, fit-tested N95 for airborne. Distance does not substitute for a respirator.' },

  { id: 'SAF-057', cat: 'safe', sub: 'Fall Prevention', type: 'mc', difficulty: 1,
    stem: 'Which medication class most increases fall risk in older adults?',
    options: ['Proton pump inhibitors', 'Benzodiazepines', 'Statins', 'Antihistamine-free decongestants'],
    answer: [1],
    rationale: 'Benzodiazepines cause sedation, impaired balance, delayed reaction time, and confusion, and are on the Beers list of medications to avoid in older adults. Proton pump inhibitors and statins are not primary fall risks, and non-sedating agents have less effect on balance.',
    strategy: 'High-risk fall drugs: benzodiazepines, opioids, antipsychotics, anticholinergics, antihypertensives, and diuretics.' },

  { id: 'SAF-058', cat: 'safe', sub: 'Hazardous Materials', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client who received a therapeutic dose of radioactive iodine. Which precaution is appropriate?',
    options: [
      'No special precautions are needed',
      'Limit time at the bedside, maintain distance, use shielding as indicated, and organize care to minimize exposure',
      'Wear a lead apron at all times in the room and provide continuous bedside care',
      'Discard all linens as regular waste'
    ],
    answer: [1],
    rationale: 'Radiation safety rests on time, distance, and shielding: staff cluster care, work efficiently, keep distance when possible, and follow facility protocols. Contaminated linens and excreta require designated handling, and continuous bedside presence maximizes rather than minimizes exposure.',
    strategy: 'Radiation safety is three words: time, distance, shielding.' },

  { id: 'SAF-059', cat: 'safe', sub: 'Infection Control', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client with a surgical wound. Which finding suggests an infection rather than normal healing?',
    options: [
      'Slight redness at the incision edges on day 2',
      'Increasing purulent drainage with expanding erythema and warmth on day 5',
      'Serosanguineous drainage on day 1',
      'Mild incisional discomfort improving daily'
    ],
    answer: [1],
    rationale: 'Purulent drainage with spreading erythema and warmth several days after surgery, particularly when accompanied by fever, indicates infection. Early edge redness, serosanguineous drainage in the first day, and steadily improving pain are all normal inflammatory healing.',
    strategy: 'Normal inflammation peaks and improves. Infection worsens after day 3 to 5 and turns purulent.' },

  { id: 'SAF-060', cat: 'safe', sub: 'Emergency Response', type: 'mc', difficulty: 3,
    stem: 'A nurse is caring for four clients during a facility-wide power outage with generator backup on selected outlets. Which client is the priority for connection to an emergency outlet?',
    options: [
      'A client watching television',
      'A client on a mechanical ventilator',
      'A client with a warming blanket',
      'A client with an electric bed'
    ],
    answer: [1],
    rationale: 'A mechanical ventilator is life-sustaining and must be connected to emergency power immediately; without it the client requires manual bag-valve ventilation. Entertainment, comfort warming, and bed positioning are not life-sustaining functions.',
    strategy: 'Emergency power goes to life-sustaining equipment first: ventilators, pumps delivering critical drips, suction, and monitors.' },

  { id: 'SAF-061', cat: 'safe', sub: 'Medication Safety', type: 'sata', difficulty: 1,
    stem: 'Which practices reduce medication administration errors? Select all that apply.',
    options: [
      'Verifying two client identifiers before every administration',
      'Preparing medications for several clients at once to save time',
      'Comparing the medication to the order at the time of preparation and again at the bedside',
      'Avoiding interruptions during medication preparation',
      'Documenting administration immediately after giving the medication',
      'Accepting a colleague\'s prepared syringe to administer'
    ],
    answer: [0, 2, 3, 4],
    rationale: 'Two identifiers, repeated order verification, an interruption-free preparation zone, and immediate documentation all reduce error. Preparing for multiple clients at once creates wrong-client errors, and administering a medication another person prepared removes the preparer from the verification chain.',
    strategy: 'Never give a medication you did not prepare, and never prepare for more than one client at a time.' },

  { id: 'SAF-062', cat: 'safe', sub: 'Restraints', type: 'mc', difficulty: 3,
    stem: 'A nurse applies wrist restraints to a client. Which assessment finding requires immediate action?',
    options: [
      'The client is able to move the fingers freely',
      'Capillary refill in the restrained hand is 5 seconds and the hand is cool and pale',
      'The restraint is tied to the bed frame with a quick-release knot',
      'Two fingers fit between the restraint and the wrist'
    ],
    answer: [1],
    rationale: 'Delayed capillary refill with a cool pale hand indicates circulatory compromise from an overly tight restraint, requiring immediate release and reassessment. Free finger movement, a bed frame attachment with a quick-release knot, and a two-finger gap all indicate correct application.',
    strategy: 'Restraint checks are neurovascular: color, temperature, capillary refill, movement, sensation.' },

  { id: 'SAF-063', cat: 'safe', sub: 'Transmission Precautions', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for an infant with respiratory syncytial virus. Which precautions are required?',
    options: ['Standard precautions only', 'Contact and droplet precautions', 'Airborne precautions', 'Protective environment'],
    answer: [1],
    rationale: 'RSV spreads by large droplets and by contact with contaminated surfaces and hands, so gown, gloves, and a mask within close range are required along with dedicated equipment. Airborne precautions and protective isolation are not indicated.',
    strategy: 'RSV is contact plus droplet. It survives on surfaces for hours, so equipment and hands matter as much as masks.' },

  { id: 'SAF-064', cat: 'safe', sub: 'Accident Prevention', type: 'mc', difficulty: 3,
    stem: 'A nurse is teaching parents of a school-age child about injury prevention. Which topic is the highest priority for this age group?',
    options: [
      'Crib safety and sleep position',
      'Bicycle helmet use, water safety, and pedestrian safety',
      'Firearm storage only',
      'Preventing rolling off changing tables'
    ],
    answer: [1],
    rationale: 'School-age children are most often injured in bicycle crashes, drownings, and as pedestrians as their independence increases. Crib and changing table safety apply to infants, and while safe firearm storage is important it is one element of a broader agenda rather than the whole of it.',
    strategy: 'Injury prevention teaching matches developmental stage: infants fall and suffocate, toddlers poison and drown, school-age get hit and crash, teens drive and take risks.' },

  { id: 'SAF-065', cat: 'safe', sub: 'Infection Control', type: 'mc', difficulty: 2,
    stem: 'A nurse notices a cluster of surgical site infections following procedures done in one operating room. What is the most appropriate initial action?',
    options: [
      'Report the pattern to infection prevention for investigation',
      'Notify the affected clients directly',
      'Post a warning for staff on the unit bulletin board',
      'Wait for more cases to confirm a trend'
    ],
    answer: [0],
    rationale: 'Clusters require formal epidemiologic investigation by infection prevention, which can trace the common source through environmental sampling, sterilization records, and staff practice review. Independent client notification, informal postings, and waiting for more infections all delay the intervention that stops the outbreak.',
    strategy: 'A cluster is a signal, not a coincidence. Report it early to the people with the tools to investigate.' },

  { id: 'SAF-066', cat: 'safe', sub: 'Safe Handling', type: 'mc', difficulty: 2,
    stem: 'A nurse is assisting a client with left-sided weakness to ambulate. Where should the nurse stand?',
    options: [
      'On the client\'s right side holding the right arm',
      'On the client\'s left side slightly behind, with a gait belt',
      'Directly in front of the client',
      'Behind the client holding the back of the gown'
    ],
    answer: [1],
    rationale: 'The nurse stands on the weaker side slightly behind so the client can be supported if the weak leg buckles, using a gait belt for control. Standing on the strong side, in front, or holding clothing all fail to protect against a fall toward the weak side.',
    strategy: 'Stand on the weak side, slightly behind, gait belt in hand.' },

  { id: 'SAF-067', cat: 'safe', sub: 'Sterile Technique', type: 'mc', difficulty: 2,
    stem: 'A nurse drops a sterile instrument onto the floor while setting up a field. What should the nurse do?',
    options: [
      'Pick it up quickly and return it to the field',
      'Discard it and obtain a new sterile instrument',
      'Wipe it with alcohol and return it to the field',
      'Place it at the edge of the field where it will not be used'
    ],
    answer: [1],
    rationale: 'Anything that leaves the sterile field or falls below waist level is contaminated and cannot be returned regardless of speed or surface wiping. It is discarded and replaced.',
    strategy: 'Out of sight or below the waist equals contaminated. There is no rescue for a dropped sterile item.' },

  { id: 'SAF-068', cat: 'safe', sub: 'Client Identification', type: 'mc', difficulty: 1,
    stem: 'Two clients on the unit have the same last name. Which action best prevents a mix-up?',
    options: [
      'Place both clients in the same room for easier tracking',
      'Place a name-alert notification in both records and on the medication administration system, and verify two identifiers plus a third when in doubt',
      'Refer to clients by room number',
      'Ask staff to be extra careful'
    ],
    answer: [1],
    rationale: 'Formal name-alert flags in the electronic systems combined with rigorous two-identifier verification create a structural barrier against mix-ups. Rooming similar-named clients together increases risk, room numbers are not identifiers, and exhortations to be careful are not a safety control.',
    strategy: 'Prefer engineered safeguards over vigilance. "Be careful" is the weakest possible intervention.' },

  { id: 'SAF-069', cat: 'safe', sub: 'Emergency Response', type: 'mc', difficulty: 3,
    stem: 'A nurse notes that a client\'s cardiac monitor shows asystole but the client is awake and talking. What should the nurse do first?',
    options: [
      'Begin CPR',
      'Assess the client and check the leads and electrode connections',
      'Call a code',
      'Administer epinephrine'
    ],
    answer: [1],
    rationale: 'A conversant client is not in asystole; a disconnected lead or displaced electrode is producing artifact. The nurse assesses the client and troubleshoots the equipment. Initiating resuscitation on a talking client would be harmful and delays fixing the actual problem.',
    strategy: 'Always treat the client, not the monitor. Look at the person before you act on the tracing.' },

  { id: 'SAF-070', cat: 'safe', sub: 'Infection Control', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching a client about influenza vaccination. Which client should not receive the live attenuated nasal influenza vaccine?',
    options: [
      'A healthy 25-year-old teacher',
      'A 32-year-old receiving chemotherapy',
      'A healthy 8-year-old',
      'A healthy 40-year-old office worker'
    ],
    answer: [1],
    rationale: 'Live attenuated vaccines are contraindicated in immunocompromised clients, including those on chemotherapy, because the attenuated organism can cause disease. Healthy individuals within the approved age range may receive it, though the inactivated injectable form is an option for everyone.',
    strategy: 'Live vaccines are contraindicated in pregnancy, immunosuppression, and active malignancy on treatment.' },

  { id: 'SAF-071', cat: 'safe', sub: 'Fall Prevention', type: 'mc', difficulty: 2,
    stem: 'A nurse is reviewing an older adult client\'s medication list for fall risk. Which combination is most concerning?',
    options: [
      'Acetaminophen and a multivitamin',
      'Lorazepam, oxybutynin, and furosemide',
      'Levothyroxine and calcium',
      'Omeprazole and a stool softener'
    ],
    answer: [1],
    rationale: 'A benzodiazepine causing sedation, an anticholinergic causing confusion and blurred vision, and a diuretic causing urgency and orthostasis together create a high-risk profile. The other combinations do not impair balance, cognition, or blood pressure regulation.',
    strategy: 'Look for the trio: sedating, anticholinergic, and blood-pressure-lowering. Any two together raise the risk sharply.' },

  { id: 'SAF-072', cat: 'safe', sub: 'PPE', type: 'mc', difficulty: 2,
    stem: 'A nurse\'s gloves tear while performing a procedure on a client with hepatitis C. What should the nurse do?',
    options: [
      'Finish the procedure and then change gloves',
      'Stop, remove the gloves, perform hand hygiene, and apply new gloves before continuing',
      'Apply a second pair of gloves over the torn pair',
      'Continue if no visible blood contacted the skin'
    ],
    answer: [1],
    rationale: 'A breach in the barrier requires stopping, removing the compromised gloves, performing hand hygiene, and re-gloving before continuing, because contamination may not be visible. Continuing, double-gloving over a tear, and relying on visual inspection all leave the nurse exposed.',
    strategy: 'A torn glove is a breach. Stop, wash, re-glove — never layer over the failure.' },

  { id: 'SAF-073', cat: 'safe', sub: 'Accident Prevention', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for an infant in the hospital. Which action prevents sudden unexpected infant death?',
    options: [
      'Place the infant prone to reduce reflux',
      'Place the infant supine on a firm surface with no loose bedding, pillows, or bumpers',
      'Use a soft mattress with a quilt for comfort',
      'Allow the infant to sleep in the parent\'s bed'
    ],
    answer: [1],
    rationale: 'Supine positioning on a firm, bare sleep surface is the core safe-sleep recommendation. Prone positioning, soft bedding, and bed sharing all significantly increase risk.',
    strategy: 'Safe sleep: back to sleep, firm flat surface, nothing else in the crib, room sharing without bed sharing.' },

  { id: 'SAF-074', cat: 'safe', sub: 'Error Prevention', type: 'mc', difficulty: 2,
    stem: 'A nurse is programming an infusion pump for a heparin drip. Which safeguard most reduces the risk of a serious error?',
    options: [
      'Programming quickly to avoid delay',
      'Using the pump\'s drug library with dose limits and having a second nurse independently verify the setup',
      'Estimating the rate based on prior experience',
      'Documenting the rate before starting'
    ],
    answer: [1],
    rationale: 'Smart pump libraries with hard and soft dose limits catch programming errors, and an independent double check for a high-alert drug catches what the pump does not. Speed, estimation, and documentation order do not prevent programming mistakes.',
    strategy: 'For high-alert infusions, use the drug library and get a real independent check — not a glance at your work.' },

  { id: 'SAF-075', cat: 'safe', sub: 'Infection Control', type: 'mc', difficulty: 2,
    stem: 'A client asks the nurse how long they must stay on contact precautions for C. difficile. Which response is accurate?',
    options: [
      '"Until you have taken antibiotics for 24 hours."',
      '"Until your diarrhea has resolved, and often longer depending on facility policy."',
      '"Until your white blood cell count is normal."',
      '"Precautions can be stopped as soon as you feel better."'
    ],
    answer: [1],
    rationale: 'Contact precautions continue until diarrhea has resolved, and many facilities extend them for 48 hours beyond resolution or until discharge because spores persist in the environment. Antibiotic duration, white count, and subjective improvement do not determine when shedding stops.',
    strategy: 'Isolation ends based on transmissibility, not on how the client feels or what the laboratory shows.' },

  { id: 'SAF-076', cat: 'safe', sub: 'Emergency Response', type: 'mc', difficulty: 2,
    stem: 'A nurse hears an infant abduction alert code announced. What is the nurse\'s immediate responsibility?',
    options: [
      'Continue routine care until security arrives',
      'Monitor the assigned exit or stairwell and observe anyone carrying a bag, box, or bundle',
      'Call the family of every infant on the unit',
      'Lock all client rooms'
    ],
    answer: [1],
    rationale: 'Infant abduction protocols assign every staff member a monitoring position at exits and stairwells and direct them to observe anyone who could conceal an infant. Routine care, family calls, and locking client rooms do not prevent egress.',
    strategy: 'Abduction codes make every staff member a lookout at a physical exit. Know your assigned post.' },

  { id: 'SAF-077', cat: 'safe', sub: 'Medication Safety', type: 'mc', difficulty: 1,
    stem: 'Which medication order is written correctly and safely?',
    options: [
      'Digoxin .25 mg PO daily',
      'Digoxin 0.25 mg PO daily',
      'Digoxin 0.250 mg PO daily',
      'Digoxin .250 mg PO QD'
    ],
    answer: [1],
    rationale: 'A leading zero before a decimal point prevents a tenfold overdose when the decimal is missed, and trailing zeros are prohibited because a missed decimal turns 0.250 into 250. Only the second option follows both rules.',
    strategy: 'Always a leading zero, never a trailing zero.' },

  { id: 'SAF-078', cat: 'safe', sub: 'Transmission Precautions', type: 'sata', difficulty: 2,
    stem: 'Which items should be dedicated to a single client on contact precautions when possible? Select all that apply.',
    options: ['Stethoscope', 'Blood pressure cuff', 'Thermometer', 'The nurse\'s personal pen', 'Portable computer workstation', 'Bedside commode'],
    answer: [0, 1, 2, 5],
    rationale: 'Stethoscopes, blood pressure cuffs, thermometers, and commodes are dedicated to the client or disinfected between uses because they contact skin and body fluids. Personal items should not enter the room at all, and shared workstations are disinfected but not dedicated.',
    strategy: 'Anything that touches the client stays with the client. Anything shared gets disinfected between uses.' },

  { id: 'SAF-079', cat: 'safe', sub: 'Home Safety', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching a client with peripheral neuropathy from diabetes about foot care. Which instruction is most important for injury prevention?',
    options: [
      'Soak the feet in hot water daily to improve circulation',
      'Inspect the feet daily, including the soles with a mirror, and never walk barefoot',
      'Trim toenails in a rounded shape close to the skin',
      'Use a heating pad on the feet at night for warmth'
    ],
    answer: [1],
    rationale: 'Sensory loss means injuries go unnoticed until they ulcerate, so daily inspection and protective footwear are essential. Hot soaks and heating pads cause burns the client cannot feel, and rounded close-trimmed nails cause ingrown nails and infection; nails are cut straight across.',
    strategy: 'Neuropathy teaching: look every day, never barefoot, no heat, cut nails straight across.' },

  { id: 'SAF-080', cat: 'safe', sub: 'Infection Control', type: 'mc', difficulty: 1,
    stem: 'Which action by a nursing student requires the instructor to intervene?',
    options: [
      'Removing gloves and performing hand hygiene after emptying a urinal',
      'Wearing artificial nails while providing direct client care',
      'Using an alcohol-based rub between clients when hands are not visibly soiled',
      'Tying back long hair before entering a client room'
    ],
    answer: [1],
    rationale: 'Artificial nails harbor gram-negative organisms and fungi even after hand hygiene and are prohibited in direct care. The other actions all reflect correct infection prevention practice.',
    strategy: 'No artificial nails, no chipped polish, nails short. Hands are the primary transmission route.' },

  { id: 'SAF-081', cat: 'safe', sub: 'Accident Prevention', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client receiving continuous enteral feeding through a nasogastric tube. Which action reduces aspiration risk?',
    options: [
      'Keep the head of the bed flat to reduce reflux',
      'Maintain head-of-bed elevation at 30 to 45 degrees and verify tube placement and residual per protocol',
      'Increase the feeding rate to finish faster',
      'Flush the tube with sterile water every 12 hours'
    ],
    answer: [1],
    rationale: 'Head elevation combined with placement verification and residual monitoring is the core aspiration prevention strategy. Flat positioning promotes reflux, faster rates increase gastric volume and aspiration risk, and infrequent flushing causes occlusion without addressing aspiration.',
    strategy: 'Tube feeding safety: head up 30 to 45 degrees, verify placement, check residuals, and keep it up for 30 to 60 minutes after bolus feeds.' },

  { id: 'SAF-082', cat: 'safe', sub: 'Restraints', type: 'mc', difficulty: 1,
    stem: 'Which type of restraint knot should be used to secure a limb restraint to the bed frame?',
    options: ['A square knot', 'A quick-release knot', 'A double knot for security', 'A knot tied to the side rail'],
    answer: [1],
    rationale: 'A quick-release knot allows immediate removal in an emergency such as fire, vomiting, or aspiration. Square and double knots delay release, and attaching to a side rail causes injury when the rail is lowered.',
    strategy: 'Quick-release knot, bed frame, never the side rail. Imagine needing it off in three seconds.' },

  { id: 'SAF-083', cat: 'safe', sub: 'Emergency Response', type: 'mc', difficulty: 2,
    stem: 'A client with a suspected opioid overdose is unresponsive with a respiratory rate of 4 and pinpoint pupils. What is the priority action?',
    options: [
      'Administer naloxone and support ventilation',
      'Obtain a urine drug screen',
      'Start an IV and draw blood cultures',
      'Place the client in the recovery position and observe'
    ],
    answer: [0],
    rationale: 'Profound respiratory depression is the lethal feature of opioid overdose, so ventilation support and naloxone reversal take priority. Diagnostic testing, laboratory work, and observation all delay the intervention that prevents hypoxic death.',
    strategy: 'Opioid overdose: breathing first, naloxone second, everything diagnostic after.' },

  { id: 'SAF-084', cat: 'safe', sub: 'Infection Control', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client with an open draining wound. Which action best prevents transmission to other clients?',
    options: [
      'Change the dressing last after caring for all other clients, using appropriate PPE and hand hygiene',
      'Leave the wound open to air for faster healing',
      'Use the same supply cart for all clients on the hall',
      'Perform the dressing change first thing in the morning'
    ],
    answer: [0],
    rationale: 'Sequencing care from clean to contaminated, with correct PPE and hand hygiene, reduces transmission risk. Leaving a draining wound uncovered disperses organisms, shared carts move contamination between rooms, and doing the contaminated task first risks carrying organisms to every subsequent client.',
    strategy: 'Work clean to dirty. Save the contaminated task for last.' },

  { id: 'SAF-085', cat: 'safe', sub: 'Fall Prevention', type: 'mc', difficulty: 2,
    stem: 'A client has an order for bed rest with bathroom privileges and repeatedly gets up unassisted. Which nursing action is most appropriate?',
    options: [
      'Apply a lap belt in the chair',
      'Explore why the client is getting up, offer scheduled toileting, and place needed items within reach',
      'Tell the client they will be restrained if it continues',
      'Move the client to a room farther from the nurses\' station'
    ],
    answer: [1],
    rationale: 'Understanding the reason for the behavior, most often toileting need, thirst, or pain, allows the nurse to meet it proactively so the client no longer needs to get up alone. Restraints, threats, and reduced visibility all increase risk.',
    strategy: 'Ask what need drives the behavior. Meeting the need is more effective than restricting the person.' },

  { id: 'SAF-086', cat: 'safe', sub: 'Client Identification', type: 'mc', difficulty: 2,
    stem: 'A nurse is preparing to draw blood from a client who is confused and cannot state their name. What should the nurse do?',
    options: [
      'Draw the specimen using the room number for identification',
      'Verify identity using the wristband against the requisition, and confirm with a second staff member or family if needed',
      'Ask the client\'s roommate to identify them',
      'Skip the specimen until the client is oriented'
    ],
    answer: [1],
    rationale: 'The wristband checked against the requisition remains the primary identifier, supplemented by verification from a staff member or family member who knows the client. Room numbers and roommates are never acceptable identifiers, and deferring necessary testing is not appropriate.',
    strategy: 'When the client cannot confirm identity, the band plus a knowledgeable second person is the standard.' },

  { id: 'SAF-087', cat: 'safe', sub: 'Sterile Technique', type: 'mc', difficulty: 2,
    stem: 'A nurse is opening a sterile package on a surface. What is the correct sequence for opening the flaps?',
    options: [
      'Open the nearest flap first, then the sides, then the farthest',
      'Open the farthest flap away from the body first, then the sides, then the nearest flap toward the body last',
      'Open all four flaps simultaneously',
      'Open the flaps toward the body first to maintain visibility'
    ],
    answer: [1],
    rationale: 'Opening the far flap first prevents the nurse from reaching over the exposed sterile contents, and the near flap opens last toward the body. Any other sequence requires passing an arm over the sterile field.',
    strategy: 'Far flap first, near flap last. Never let your arm cross over sterile contents.' },

  { id: 'SAF-088', cat: 'safe', sub: 'Hazardous Materials', type: 'mc', difficulty: 2,
    stem: 'A nurse spills a small amount of a client\'s blood on the floor. Which action is correct?',
    options: [
      'Wipe it with a paper towel and discard in regular trash',
      'Don gloves, absorb the spill, clean with an EPA-registered disinfectant effective against bloodborne pathogens, and dispose in a biohazard container',
      'Mop the area with plain water',
      'Cover it with a towel until housekeeping arrives'
    ],
    answer: [1],
    rationale: 'Blood spills require gloves, absorption, disinfection with an appropriate agent such as a diluted bleach solution or an EPA-registered product, and biohazard disposal. Regular trash disposal, plain water, and leaving the spill covered all leave infectious material in the environment.',
    strategy: 'Blood spill: gloves, absorb, disinfect, biohazard bag.' },

  { id: 'SAF-089', cat: 'safe', sub: 'Error Prevention', type: 'mc', difficulty: 2,
    stem: 'A nurse is interrupted three times while preparing medications. Which strategy best addresses this problem?',
    options: [
      'Prepare medications faster',
      'Use a designated no-interruption zone with a visible signal such as a vest or sash during medication preparation',
      'Prepare medications in the client\'s room',
      'Ask colleagues to remember not to interrupt'
    ],
    answer: [1],
    rationale: 'Physical and visual cues that mark a no-interruption zone measurably reduce medication errors because they change the environment rather than relying on memory. Working faster increases error, room preparation introduces distraction, and informal requests do not persist.',
    strategy: 'Design the environment to make the safe behavior easy. Do not rely on people remembering.' },

  { id: 'SAF-090', cat: 'safe', sub: 'Infection Control', type: 'mc', difficulty: 3,
    stem: 'A nurse is caring for a client with suspected meningococcal meningitis. Which action is the priority?',
    options: [
      'Initiate droplet precautions immediately and administer antibiotics as ordered',
      'Obtain informed consent for a lumbar puncture',
      'Perform a detailed neurological assessment',
      'Arrange for a private room after the antibiotics are given'
    ],
    answer: [0],
    rationale: 'Meningococcal disease spreads rapidly by droplet and is fatal within hours, so isolation and prompt antibiotics take precedence. Precautions continue for 24 hours after effective therapy begins. Consent, detailed assessment, and room arrangement all follow.',
    strategy: 'Suspected meningococcus: droplet precautions and antibiotics now, diagnostics after.' }
  ,
  { id: 'SAF-091', cat: 'safe', sub: 'Accident Prevention', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client who is being discharged with a new prescription for warfarin. Which safety instruction is most important?',
    options: [
      '"Take an extra dose if you forget one."',
      '"Use a soft toothbrush and an electric razor, and report any unusual bruising, black stools, or blood in the urine."',
      '"Increase your intake of leafy green vegetables."',
      '"Take aspirin for any headaches."'
    ],
    answer: [1],
    rationale: 'Bleeding is the principal hazard, so trauma-minimizing habits and recognition of occult bleeding are the key safety messages. Doubling doses causes supratherapeutic anticoagulation, wide swings in vitamin K intake destabilize the INR, and aspirin compounds bleeding risk.',
    strategy: 'Anticoagulant teaching: soft toothbrush, electric razor, watch for black stools and unusual bruising, keep vitamin K intake steady, and avoid NSAIDs.' },

  { id: 'SAF-092', cat: 'safe', sub: 'Emergency Response', type: 'order', difficulty: 3,
    stem: 'A nurse must use a fire extinguisher on a small trash can fire. Place the steps of the PASS technique in order.',
    options: ['Pull the pin', 'Aim at the base of the fire', 'Squeeze the handle', 'Sweep from side to side'],
    answer: [0, 1, 2, 3],
    rationale: 'PASS directs the user to pull the pin, aim at the base where the fuel is rather than at the flames, squeeze the handle, and sweep side to side across the base until the fire is out.',
    strategy: 'Aim at the base, not the flames. Flames are the product; the fuel is the target.' },

  { id: 'SAF-093', cat: 'safe', sub: 'Infection Control', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client with an infected pressure injury. Which specimen collection technique yields the most accurate culture?',
    options: [
      'Swab the drainage on the old dressing',
      'Cleanse the wound with normal saline, then swab viable tissue at the wound base with rotation',
      'Swab the surrounding intact skin',
      'Collect drainage that has pooled on the surrounding skin'
    ],
    answer: [1],
    rationale: 'Cleansing removes surface colonizers so the culture reflects the organisms actually infecting the tissue, and the swab is rotated over viable tissue at the wound base. Old dressings, intact skin, and pooled surface drainage all yield contaminants rather than pathogens.',
    strategy: 'Clean first, then culture the living tissue. Never culture pus on a dressing.' },

  { id: 'SAF-094', cat: 'safe', sub: 'Medication Safety', type: 'mc', difficulty: 2,
    stem: 'A nurse is preparing to administer potassium chloride. Which order should the nurse question?',
    options: [
      'Potassium chloride 20 mEq in 100 mL normal saline IV over 2 hours',
      'Potassium chloride 20 mEq IV push',
      'Potassium chloride 40 mEq PO daily',
      'Potassium chloride 10 mEq in 100 mL IV over 1 hour'
    ],
    answer: [1],
    rationale: 'IV push potassium causes immediate fatal cardiac arrest and is never administered by that route; it must always be diluted and infused slowly with cardiac monitoring. The diluted infusions and oral dose are all acceptable.',
    strategy: 'Potassium is never pushed and never given undiluted. If the order says IV push potassium, it is the answer.' },

  { id: 'SAF-095', cat: 'safe', sub: 'Fall Prevention', type: 'mc', difficulty: 2,
    stem: 'A nurse is evaluating an older adult client\'s use of a cane. Which observation indicates correct technique?',
    options: [
      'The cane is held on the weaker side and advanced with the stronger leg',
      'The cane is held on the stronger side and advanced together with the weaker leg',
      'The cane is held with both hands in front of the body',
      'The cane top reaches the client\'s shoulder height'
    ],
    answer: [1],
    rationale: 'The cane is held on the stronger side and moves forward with the weaker leg so the two share the load and widen the base of support. Cane height should place the handle at the wrist crease with a slight elbow bend, not at shoulder level.',
    strategy: 'COAL: Cane Opposite Affected Leg. They advance together.' },

  { id: 'SAF-096', cat: 'safe', sub: 'Transmission Precautions', type: 'mc', difficulty: 2,
    stem: 'A client on droplet precautions asks to walk in the hallway. What should the nurse do?',
    options: [
      'Deny the request entirely',
      'Permit ambulation with the client wearing a surgical mask, after hand hygiene, at a time when the hallway is less crowded',
      'Permit ambulation without restrictions',
      'Permit ambulation only if staff wear N95 respirators'
    ],
    answer: [1],
    rationale: 'Clients on droplet precautions may leave the room for necessary purposes with source control, meaning a surgical mask and hand hygiene, and timing that limits exposure to others. Blanket denial is unnecessarily restrictive, unrestricted ambulation spreads organisms, and N95 respirators are not indicated for droplet precautions.',
    strategy: 'Isolation restricts transmission, not dignity. Mask the source and go.' },

  { id: 'SAF-097', cat: 'safe', sub: 'Restraints', type: 'mc', difficulty: 2,
    stem: 'A client in restraints becomes calm and cooperative and is oriented to person, place, and time. What should the nurse do?',
    options: [
      'Continue restraints until the order expires',
      'Assess whether release criteria are met and discontinue the restraints if so',
      'Reduce to a single wrist restraint indefinitely',
      'Ask the client to promise not to pull at their lines'
    ],
    answer: [1],
    rationale: 'Restraints are discontinued at the earliest possible moment, so the nurse assesses against release criteria and removes them when the behavior necessitating them has resolved. Waiting for an order to expire, partial indefinite restraint, and relying on a verbal promise all prolong an unnecessary restriction.',
    strategy: 'Restraints end when the reason ends, not when the order does.' },

  { id: 'SAF-098', cat: 'safe', sub: 'Home Safety', type: 'sata', difficulty: 2,
    stem: 'A nurse is teaching a family about carbon monoxide safety. Which points should be included? Select all that apply.',
    options: [
      'Install carbon monoxide detectors near sleeping areas and test them monthly',
      'Never run a generator, grill, or car engine in an attached garage or indoors',
      'Have fuel-burning appliances and chimneys inspected annually',
      'Carbon monoxide has a strong odor that provides early warning',
      'Headache, dizziness, nausea, and confusion in multiple household members suggest exposure',
      'Open a window if the detector alarms and stay inside to investigate'
    ],
    answer: [0, 1, 2, 4],
    rationale: 'Detectors, avoidance of indoor combustion, annual appliance inspection, and recognition of the flu-like symptom cluster affecting several people at once are the core teaching points. Carbon monoxide is odorless and colorless, and an alarm requires immediate evacuation and a call to emergency services rather than investigation from inside.',
    strategy: 'Carbon monoxide is odorless. Several people sick at once in one building is the classic clue.' },

  { id: 'SAF-099', cat: 'safe', sub: 'Infection Control', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client with a peripheral IV that has been in place for 4 days. The site is without redness or pain. According to current practice, what should the nurse do?',
    options: [
      'Remove and restart the IV immediately because 72 hours have passed',
      'Continue to assess the site each shift and replace based on clinical indication',
      'Apply antibiotic ointment prophylactically',
      'Change only the dressing and leave the catheter indefinitely'
    ],
    answer: [1],
    rationale: 'Current evidence supports replacing peripheral catheters when clinically indicated rather than on a fixed schedule, provided the site is assessed regularly and remains free of phlebitis, infiltration, and infection. Routine ointment is not recommended, and indefinite retention without assessment is unsafe.',
    strategy: 'Peripheral IVs come out for a reason, not a clock. Assess every shift.' },

  { id: 'SAF-100', cat: 'safe', sub: 'Accident Prevention', type: 'mc', difficulty: 2,
    stem: 'A nurse is preparing a client for an MRI. Which finding requires the nurse to notify the radiology department before the scan?',
    options: [
      'The client wears contact lenses',
      'The client has an implanted cardiac pacemaker',
      'The client had a barium study last week',
      'The client is claustrophobic'
    ],
    answer: [1],
    rationale: 'Many implanted cardiac devices are contraindicated in the magnetic field, which can cause device malfunction, heating, and lethal arrhythmia, so the device must be identified and cleared before scanning. Contact lenses are removed, a prior barium study does not preclude MRI, and claustrophobia is managed with sedation or an open scanner rather than being an absolute contraindication.',
    strategy: 'MRI screening: any metal, implant, pacemaker, aneurysm clip, cochlear implant, or metal fragment in the eye must be identified first.' },

  { id: 'SAF-101', cat: 'safe', sub: 'Error Prevention', type: 'mc', difficulty: 1,
    stem: 'Which situation represents a look-alike, sound-alike medication risk that should prompt extra verification?',
    options: [
      'Acetaminophen and ibuprofen',
      'Hydralazine and hydroxyzine',
      'Furosemide and potassium chloride',
      'Metformin and insulin'
    ],
    answer: [1],
    rationale: 'Hydralazine, an antihypertensive, and hydroxyzine, an antihistamine and anxiolytic, are frequently confused because of nearly identical spelling and pronunciation. The other pairs differ substantially in name even though they may be used together.',
    strategy: 'Classic confusion pairs: hydralazine and hydroxyzine, celecoxib and citalopram, clonidine and klonopin, and the many insulin brand names.' },

  { id: 'SAF-102', cat: 'safe', sub: 'Emergency Response', type: 'mc', difficulty: 2,
    stem: 'During a hospital-wide surge, the nurse is asked to help set up an alternate care site. Which principle guides care in this setting?',
    options: [
      'Maintain the same individual standard of care as under normal conditions',
      'Shift to crisis standards of care focused on the greatest good for the greatest number, following the facility\'s declared framework',
      'Provide care only to clients who can pay',
      'Refuse to work outside the usual unit'
    ],
    answer: [1],
    rationale: 'When resources cannot meet demand, formally declared crisis standards of care shift the ethical frame from individual optimization to population benefit, using pre-established triage criteria. Insisting on normal standards is not possible, payment is never a triage criterion, and refusing to work abandons clients.',
    strategy: 'Disaster ethics flips from best for this client to best for the most clients — but only under a declared framework, never an individual nurse\'s judgment.' },

  { id: 'SAF-103', cat: 'safe', sub: 'Infection Control', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching a client about proper food handling to prevent foodborne illness. Which statement indicates the teaching was effective?',
    options: [
      '"I will thaw frozen chicken on the counter overnight."',
      '"I will use separate cutting boards for raw meat and for produce, and refrigerate leftovers within 2 hours."',
      '"I will rinse raw chicken in the sink before cooking."',
      '"I can tell meat is done by its color."'
    ],
    answer: [1],
    rationale: 'Separating raw meat from ready-to-eat foods and prompt refrigeration address cross-contamination and bacterial growth, the two main mechanisms of foodborne illness. Counter thawing allows growth in the outer layers, rinsing poultry spreads Campylobacter around the sink, and color is unreliable compared with a food thermometer.',
    strategy: 'Clean, separate, cook to temperature, chill promptly. Those four cover nearly every food safety question.' },

  { id: 'SAF-104', cat: 'safe', sub: 'PPE', type: 'mc', difficulty: 2,
    stem: 'A nurse enters the room of a client on contact precautions to hand the client a meal tray and does not touch the client. What PPE is required?',
    options: [
      'None, because there is no client contact',
      'Gown and gloves, because contact precautions require them for room entry',
      'Gloves only',
      'A mask only'
    ],
    answer: [1],
    rationale: 'Contact precautions require gown and gloves for entry into the room, not merely for client contact, because environmental surfaces are contaminated and clothing readily picks up organisms. Partial or no PPE allows transmission on clothing and hands.',
    strategy: 'Contact precautions are room-based, not touch-based. Gown and gloves at the door.' },

  { id: 'SAF-105', cat: 'safe', sub: 'Client Identification', type: 'mc', difficulty: 2,
    stem: 'A nurse is administering a medication and the barcode scanner will not read the client\'s wristband. What should the nurse do?',
    options: [
      'Override the scan and administer the medication',
      'Obtain a new wristband, verify identity with two identifiers, and scan again before administering',
      'Scan the band on the chart instead',
      'Ask the client to verify their name and administer without scanning'
    ],
    answer: [1],
    rationale: 'A damaged wristband is replaced and rescanned so the electronic verification chain remains intact. Overrides, scanning proxy barcodes, and abandoning the scan entirely reintroduce exactly the errors the system was designed to catch.',
    strategy: 'Fix the barrier rather than bypassing the safeguard. Overrides are how barcode systems fail.' },

  { id: 'SAF-106', cat: 'safe', sub: 'Fall Prevention', type: 'mc', difficulty: 2,
    stem: 'A client fell yesterday without injury. Which nursing action best reduces the risk of a repeat fall?',
    options: [
      'Apply a bed alarm and consider the issue addressed',
      'Perform a post-fall huddle to identify contributing factors and revise the individualized fall prevention plan',
      'Place the client on bed rest',
      'Document the fall and continue the existing plan'
    ],
    answer: [1],
    rationale: 'A prior fall is the strongest predictor of another, and a post-fall huddle identifies the specific contributing factors so the plan can be tailored. A device alone does not address the cause, bed rest causes deconditioning that increases fall risk, and continuing an unchanged plan repeats the conditions that produced the fall.',
    strategy: 'After a fall, ask what happened and why. Then change something specific.' },

  { id: 'SAF-107', cat: 'safe', sub: 'Sterile Technique', type: 'mc', difficulty: 2,
    stem: 'A nurse is preparing to perform tracheostomy care. Which technique is appropriate?',
    options: [
      'Clean technique for the entire procedure',
      'Sterile technique in the acute care setting, with sterile gloves and supplies for the inner cannula and stoma care',
      'No gloves are needed if the client is stable',
      'Reuse the previous suction catheter to save supplies'
    ],
    answer: [1],
    rationale: 'Tracheostomy care in the hospital uses sterile technique because the airway is a direct route to the lower respiratory tract. Clean technique is taught for home care where the client is colonized with their own flora. Gloves are always required, and suction catheters are single-use in acute care.',
    strategy: 'Hospital equals sterile for airway care, home equals clean. The difference is the organism exposure, not the skill.' },

  { id: 'SAF-108', cat: 'safe', sub: 'Medication Safety', type: 'mc', difficulty: 2,
    stem: 'A nurse is preparing to administer an intramuscular injection to an adult. Which site is preferred for most medications?',
    options: ['Dorsogluteal', 'Ventrogluteal', 'Deltoid for volumes over 2 mL', 'Anterolateral thigh for all adults'],
    answer: [1],
    rationale: 'The ventrogluteal site is preferred because it is free of major nerves and vessels, has adequate muscle mass, and accommodates larger volumes. The dorsogluteal site risks sciatic nerve injury and is no longer recommended, the deltoid accepts only about 1 mL, and the vastus lateralis is preferred in infants rather than as the routine adult site.',
    strategy: 'Ventrogluteal is the safest adult IM site. Dorsogluteal is always the wrong answer.' },

  { id: 'SAF-109', cat: 'safe', sub: 'Transmission Precautions', type: 'mc', difficulty: 2,
    stem: 'A nurse is assigned to a client with disseminated herpes zoster. Which staff member should not be assigned to this client?',
    options: [
      'A nurse who had chickenpox as a child',
      'A nurse who is pregnant and has no history of varicella or vaccination',
      'A nurse who received two doses of varicella vaccine',
      'A nurse with documented varicella immunity by titer'
    ],
    answer: [1],
    rationale: 'A pregnant nurse without varicella immunity risks primary infection, which threatens both the nurse and the fetus with severe complications. Nurses with prior infection, completed vaccination, or documented titer immunity may safely provide care with appropriate precautions.',
    strategy: 'Assignment restrictions turn on immunity and pregnancy. Non-immune plus pregnant is always the exclusion.' },

  { id: 'SAF-110', cat: 'safe', sub: 'Accident Prevention', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client with dysphagia. Which action reduces the risk of aspiration during meals?',
    options: [
      'Position the client upright at 90 degrees with the chin tucked toward the chest when swallowing',
      'Have the client tilt the head back to help food go down',
      'Offer thin liquids through a straw',
      'Encourage rapid eating to finish before fatigue sets in'
    ],
    answer: [0],
    rationale: 'Upright posture with a chin tuck narrows the airway entrance and directs the bolus toward the esophagus. Head tilting opens the airway, thin liquids through a straw deliver a fast uncontrolled bolus, and rapid eating overwhelms the impaired swallow.',
    strategy: 'Dysphagia positioning: upright 90 degrees, chin tucked, small bites, slow pace, no straws for thin liquids.' },

  { id: 'SAF-111', cat: 'safe', sub: 'Emergency Response', type: 'mc', difficulty: 2,
    stem: 'A nurse working in a school finds a student having an anaphylactic reaction with facial swelling and wheezing. What is the priority action?',
    options: [
      'Call the parents',
      'Administer intramuscular epinephrine to the anterolateral thigh and activate emergency medical services',
      'Give an oral antihistamine',
      'Have the student lie down and observe'
    ],
    answer: [1],
    rationale: 'Intramuscular epinephrine into the vastus lateralis is the only treatment that reverses anaphylaxis, and it must be given without delay while emergency services are activated. Parent notification, oral antihistamines, and observation all allow airway compromise to progress.',
    strategy: 'Anaphylaxis equals epinephrine IM in the thigh, immediately. Antihistamines and steroids never come first.' },

  { id: 'SAF-112', cat: 'safe', sub: 'Infection Control', type: 'mc', difficulty: 3,
    stem: 'Which client requires the nurse to initiate isolation precautions before laboratory confirmation of the diagnosis?',
    options: [
      'A client with a healed surgical scar',
      'A client with a productive cough, night sweats, hemoptysis, and weight loss',
      'A client with a stable chronic wound',
      'A client with well-controlled asthma'
    ],
    answer: [1],
    rationale: 'Cough, night sweats, hemoptysis, and weight loss form the classic tuberculosis presentation, and airborne precautions begin on clinical suspicion rather than waiting the days required for confirmation. The other clients have no transmissible findings.',
    strategy: 'Isolate on suspicion, de-isolate on evidence. Waiting for confirmation exposes everyone in between.' },

  { id: 'SAF-113', cat: 'safe', sub: 'Restraints', type: 'sata', difficulty: 2,
    stem: 'Which documentation elements are required when a client is placed in restraints? Select all that apply.',
    options: [
      'The specific behavior that necessitated the restraint',
      'Alternatives attempted and their outcomes',
      'The type of restraint applied and the time of application',
      'The client\'s response and assessments performed during restraint use',
      'The nurse\'s personal opinion of the client\'s character',
      'Notification of the client\'s family or representative per policy'
    ],
    answer: [0, 1, 2, 3, 5],
    rationale: 'Restraint documentation records the precipitating behavior, alternatives tried, restraint type and timing, ongoing assessments and client response, and required notifications. Subjective characterizations of the client are never appropriate documentation.',
    strategy: 'Restraint charting must show that restraint was necessary, least restrictive, and continuously reassessed.' },

  { id: 'SAF-114', cat: 'safe', sub: 'Home Safety', type: 'mc', difficulty: 3,
    stem: 'A home health nurse visits a client with early dementia who lives alone. Which finding is the most urgent safety concern?',
    options: [
      'Dishes left unwashed in the sink',
      'Scorch marks on a pot and the stove burner left on when the nurse arrives',
      'Mail piled up on the table',
      'The television playing loudly'
    ],
    answer: [1],
    rationale: 'An unattended burner with evidence of prior scorching indicates a serious fire and burn risk requiring immediate intervention such as stove safety devices, supervised cooking, or a reassessment of living arrangements. Housekeeping and sensory habits are secondary.',
    strategy: 'In dementia home safety, the ranked hazards are fire and stoves, wandering, medications, driving, and firearms.' },

  { id: 'SAF-115', cat: 'safe', sub: 'Medication Safety', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client with a latex allergy. Which item requires substitution?',
    options: [
      'A silicone urinary catheter',
      'A blood pressure cuff with latex tubing',
      'A glass thermometer',
      'A stainless steel bedpan'
    ],
    answer: [1],
    rationale: 'Latex tubing on a blood pressure cuff contacts skin and can trigger a reaction, so a latex-free cuff is required. Silicone catheters, glass, and stainless steel contain no latex. Care for latex-allergic clients should also be scheduled first in the day to minimize airborne latex particles.',
    strategy: 'Latex hides in tourniquets, blood pressure tubing, adhesive tape, gloves, and rubber stoppers. Schedule these clients first in the day.' },

  { id: 'SAF-116', cat: 'safe', sub: 'Error Prevention', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client with two active IV lines and multiple infusions. Which practice most reduces the risk of a wrong-route or wrong-line error?',
    options: [
      'Memorize which line carries which infusion',
      'Trace every line from the container to the client\'s access point before connecting or adjusting anything',
      'Label only the lines that carry high-alert medications',
      'Use the line closest to the pump for all boluses'
    ],
    answer: [1],
    rationale: 'Line tracing from source to insertion site before every connection is the recommended defense against tubing misconnections, which have caused fatal errors including enteral feeds delivered intravenously. Memory, partial labeling, and proximity heuristics all fail under pressure.',
    strategy: 'Trace the line every time, hand over hand, source to patient. Never assume which tubing is which.' },

  { id: 'SAF-117', cat: 'safe', sub: 'Infection Control', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching a client about preventing the spread of infection at home after discharge with an antibiotic-resistant organism. Which instruction is correct?',
    options: [
      '"Everyone in the household must wear gowns and gloves at all times."',
      '"Wash your hands frequently, do not share personal items such as towels and razors, and clean high-touch surfaces regularly."',
      '"You must live separately from your family."',
      '"Stop taking your antibiotic once you feel better to prevent resistance."'
    ],
    answer: [1],
    rationale: 'Household transmission is interrupted by hand hygiene, avoiding shared personal items, and cleaning frequently touched surfaces. Full PPE at home is unnecessary, separation is not required, and stopping antibiotics early promotes rather than prevents resistance.',
    strategy: 'Home infection control is simpler than hospital: hands, personal items, and surfaces. Always finish the antibiotic course.' },

  { id: 'SAF-118', cat: 'safe', sub: 'Accident Prevention', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client after a lumbar puncture. Which nursing action helps prevent a complication?',
    options: [
      'Ambulate the client immediately',
      'Keep the client flat for the prescribed period and encourage fluid intake',
      'Restrict fluids to reduce cerebrospinal fluid production',
      'Elevate the head of the bed to 90 degrees'
    ],
    answer: [1],
    rationale: 'Flat positioning and generous fluid intake reduce the incidence and severity of post-dural puncture headache by limiting cerebrospinal fluid leakage and supporting replacement. Immediate ambulation, fluid restriction, and upright positioning all worsen the headache.',
    strategy: 'After lumbar puncture: lie flat, drink fluids, and report severe headache or numbness.' },

  { id: 'SAF-119', cat: 'safe', sub: 'Emergency Response', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client with a suspected cervical spine injury after a diving accident. Which action is most important?',
    options: [
      'Turn the client to the side to prevent aspiration',
      'Maintain manual in-line stabilization of the head and neck and use a jaw-thrust maneuver if the airway needs opening',
      'Perform a head-tilt chin-lift to open the airway',
      'Place a pillow under the head for comfort'
    ],
    answer: [1],
    rationale: 'Any manipulation of a potentially unstable cervical spine risks permanent cord injury, so the head is stabilized in line and the airway is opened with a jaw thrust that does not extend the neck. Turning without full spinal precautions, head-tilt chin-lift, and pillow placement all move the cervical spine.',
    strategy: 'Suspected cervical injury: jaw thrust, not head tilt. Log roll with enough people, never turn alone.' },

  { id: 'SAF-120', cat: 'safe', sub: 'Fall Prevention', type: 'mc', difficulty: 2,
    stem: 'Which environmental modification most reduces fall risk for a client with impaired vision?',
    options: [
      'Rearranging furniture frequently to provide variety',
      'Maintaining consistent furniture placement, removing clutter, and providing high-contrast markings on stair edges and thresholds',
      'Using dim lighting to reduce glare',
      'Placing decorative area rugs at room entrances'
    ],
    answer: [1],
    rationale: 'Predictable layout, clear pathways, and high-contrast visual cues at level changes compensate for reduced vision. Rearranging furniture removes learned spatial memory, dim lighting worsens function, and area rugs are a leading trip hazard.',
    strategy: 'For low vision: consistency, contrast, and clear floors. Never move the furniture.' },

  { id: 'SAF-121', cat: 'safe', sub: 'PPE', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client requiring both airborne and contact precautions. Which PPE combination is correct for room entry?',
    options: [
      'Surgical mask and gloves',
      'Fit-tested N95 respirator, gown, gloves, and eye protection if splashing is anticipated',
      'Gown and gloves only',
      'N95 respirator only'
    ],
    answer: [1],
    rationale: 'Combined precautions require the full set from each category: respiratory protection with an N95 for airborne transmission plus gown and gloves for contact, with eye protection added when splash risk exists.',
    strategy: 'When precautions combine, add them together. Never substitute one category for another.' },

  { id: 'SAF-122', cat: 'safe', sub: 'Medication Safety', type: 'mc', difficulty: 2,
    stem: 'A nurse is preparing to administer a medication through a gastrostomy tube. Which action is correct?',
    options: [
      'Crush an enteric-coated tablet and mix it with the feeding formula',
      'Administer each medication separately, flushing with water before, between, and after doses',
      'Mix all medications together in one syringe to save time',
      'Add medications directly to the feeding bag'
    ],
    answer: [1],
    rationale: 'Separate administration with water flushes prevents drug interactions, tube occlusion, and altered absorption. Enteric-coated and extended-release products must never be crushed, mixing drugs together causes precipitation and clogging, and adding medication to the feeding bag results in unpredictable dosing.',
    strategy: 'One drug at a time, flush between each. Never crush enteric-coated or extended-release forms.' },

  { id: 'SAF-123', cat: 'safe', sub: 'Infection Control', type: 'mc', difficulty: 2,
    stem: 'A nurse observes that a client\'s IV site is red, warm, and tender along the vein tract with a palpable cord. What is the nurse\'s priority action?',
    options: [
      'Slow the infusion rate and continue',
      'Discontinue the IV, apply a warm compress, and restart in another site',
      'Apply ice and continue the infusion',
      'Elevate the extremity and continue the infusion'
    ],
    answer: [1],
    rationale: 'These findings describe phlebitis, which requires prompt removal of the catheter to prevent progression to thrombophlebitis or bloodstream infection, followed by warm compresses for comfort and a new site for continued therapy. Continuing any infusion through an inflamed vein worsens the injury.',
    strategy: 'Phlebitis means the catheter comes out. Infiltration means it comes out too. Continuing is never correct.' },

  { id: 'SAF-124', cat: 'safe', sub: 'Accident Prevention', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching an adolescent about safety. Which topic addresses the leading cause of death in this age group?',
    options: [
      'Fall prevention in the home',
      'Motor vehicle safety including seat belt use, avoiding distracted and impaired driving, and passenger limits',
      'Poison prevention with cabinet locks',
      'Crib safety'
    ],
    answer: [1],
    rationale: 'Unintentional injury, predominantly motor vehicle crashes, is the leading cause of adolescent death, making driving safety the highest-yield teaching topic. Falls, poisoning locks, and crib safety address hazards of other developmental stages.',
    strategy: 'Match teaching to the leading cause of death at that age: infants suffocate, toddlers drown, adolescents crash.' },

  { id: 'SAF-125', cat: 'safe', sub: 'Emergency Response', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client with a suspected anthrax exposure. Which precautions are required?',
    options: [
      'Airborne precautions for cutaneous anthrax',
      'Standard precautions, since anthrax is not transmitted person to person, with contact precautions for draining cutaneous lesions',
      'Droplet precautions for all forms',
      'Protective environment'
    ],
    answer: [1],
    rationale: 'Anthrax does not spread from person to person, so standard precautions suffice, with contact precautions added when a cutaneous lesion drains. Airborne and droplet precautions are unnecessary because inhalational anthrax results from environmental spore exposure rather than transmission between people.',
    strategy: 'Not every frightening organism is contagious. Anthrax, tetanus, and botulism do not spread person to person.' },

  { id: 'SAF-126', cat: 'safe', sub: 'Error Prevention', type: 'mc', difficulty: 2,
    stem: 'A nurse is reviewing a client\'s allergy list and finds "penicillin - rash" documented. The provider orders cefazolin. What should the nurse do?',
    options: [
      'Administer the cefazolin because it is a different drug class',
      'Notify the provider of the documented penicillin allergy and clarify before administering',
      'Withhold the medication permanently without notification',
      'Administer a test dose and observe'
    ],
    answer: [1],
    rationale: 'Cephalosporins share a beta-lactam structure with penicillins and carry a small cross-reactivity risk, so the documented allergy is communicated and the order clarified. Administering without notification, withholding silently, and improvised test dosing all bypass the prescriber\'s risk assessment.',
    strategy: 'When an ordered drug is related to a documented allergy, always clarify. Never decide the cross-reactivity risk alone.' },

  { id: 'SAF-127', cat: 'safe', sub: 'Transmission Precautions', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client with scabies. Which precautions are required?',
    options: ['Airborne precautions', 'Contact precautions until 24 hours after effective treatment', 'Droplet precautions', 'Standard precautions only'],
    answer: [1],
    rationale: 'Scabies mites transmit by prolonged skin-to-skin contact and via bedding and clothing, so contact precautions with gown and gloves are maintained until 24 hours after treatment. Linens are handled carefully and laundered in hot water.',
    strategy: 'Contact precautions plus 24 hours after treatment is the standard for scabies and lice.' },

  { id: 'SAF-128', cat: 'safe', sub: 'Client Identification', type: 'mc', difficulty: 1,
    stem: 'Which action best prevents a specimen labeling error?',
    options: [
      'Pre-label tubes before entering the client\'s room',
      'Label the specimen at the bedside immediately after collection, in the client\'s presence, after verifying two identifiers',
      'Label specimens at the nurses\' station after collecting from several clients',
      'Have a colleague label the specimens'
    ],
    answer: [1],
    rationale: 'Bedside labeling immediately after collection with the client present eliminates the window in which specimens can be swapped. Pre-labeling, batch labeling away from the bedside, and delegating labeling to someone who did not collect the specimen all create mislabeling risk that can lead to fatal transfusion or diagnostic errors.',
    strategy: 'Label at the bedside, in front of the client, right after you draw it. Never before, never later, never elsewhere.' },

  { id: 'SAF-129', cat: 'safe', sub: 'Infection Control', type: 'sata', difficulty: 2,
    stem: 'Which factors increase a hospitalized client\'s risk of health care-associated infection? Select all that apply.',
    options: [
      'An indwelling urinary catheter in place for 6 days',
      'Age over 65 with diabetes',
      'Current corticosteroid therapy',
      'Ambulating in the hallway three times daily',
      'A central venous catheter',
      'Receiving broad-spectrum antibiotics for 10 days'
    ],
    answer: [0, 1, 2, 4, 5],
    rationale: 'Invasive devices bypass natural barriers, advanced age and diabetes impair host defenses, corticosteroids suppress immunity, and prolonged broad-spectrum antibiotics select for resistant organisms and C. difficile. Ambulation reduces rather than increases infection risk by improving pulmonary function and circulation.',
    strategy: 'Infection risk equals invasive devices plus impaired host plus antibiotic pressure. Mobility is protective.' },

  { id: 'SAF-130', cat: 'safe', sub: 'Medication Safety', type: 'mc', difficulty: 2,
    stem: 'A nurse is preparing to administer an opioid and notices the automated dispensing cabinet count does not match the record. What should the nurse do?',
    options: [
      'Adjust the count to match the physical quantity and continue',
      'Report the discrepancy immediately per facility policy and do not resolve it independently',
      'Ask the previous shift nurse to fix it later',
      'Document the discrepancy in the client\'s chart'
    ],
    answer: [1],
    rationale: 'Controlled substance discrepancies must be reported immediately through the defined process because they may indicate diversion, and independent correction destroys the trail needed for investigation. Deferring to another shift and charting in the client record are both inappropriate.',
    strategy: 'Never quietly fix a narcotic count. Report it the moment you find it.' }
]
