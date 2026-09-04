/**
 * Per-option rationales, keyed by question id.
 *
 * Kept apart from the question banks so option-level explanations can be added
 * incrementally without touching the items themselves. Each array is
 * index-aligned to that question's `options`, and entries are either a plain
 * string or `{ text, trap }` where `trap` names the reasoning error that makes
 * a wrong option attractive. Correct options never carry a trap.
 *
 * `npm run verify` checks alignment, so a mismatch fails loudly rather than
 * quietly attaching explanations to the wrong choices.
 */
export default {
  'MOC-089': [
    { text: 'Rolling a change out hospital-wide before testing it is exactly what plan-do-study-act exists to prevent. If the change has an unintended consequence you have now created it everywhere.', trap: 'assess-first' },
    'A small, reversible trial on one hall produces data about whether the change works before anyone commits to it. That is the plan stage.',
    { text: 'Naming individuals converts a system problem into a blame problem, and the reliable result is that people stop reporting misses at all.', trap: 'wrong-scope' },
    { text: 'Removing breakfast is not a viable change. Quality improvement has to survive contact with how the unit actually runs.', trap: 'secondary' }
  ],
  'MOC-091': [
    { text: 'Slowing the rate feels like a measured response, and it is the correct move for a mild febrile reaction. Here it keeps incompatible blood flowing into a client who is already hemolysing.', trap: 'contraindicated' },
    'Back pain with chills and a sense of impending doom is acute haemolytic reaction. Stopping the blood ends the exposure, and new tubing keeps the vein open without pushing the residual blood in the line.',
    { text: 'Acetaminophen and diphenhydramine treat a febrile non-haemolytic reaction. Giving them here treats the symptoms of a process that is destroying red cells.', trap: 'secondary' },
    { text: 'The urine specimen is genuinely part of the workup and will be collected, but it is a diagnostic step. Nothing diagnostic precedes stopping the transfusion.', trap: 'secondary' }
  ],
  'MOC-094': [
    { text: 'A blood pressure of 138/82 is unremarkable. In a subarachnoid haemorrhage you are watching for a rising systolic with a widening gap, not a single normal reading.', trap: 'expected' },
    'Widening pulse pressure with bradycardia and irregular respirations is Cushing triad — the brainstem responding to pressure it can no longer compensate for. Herniation is underway.',
    { text: 'Headache is near-universal after subarachnoid haemorrhage. One that responds to acetaminophen is the reassuring version.', trap: 'expected' },
    { text: 'Sixty millilitres an hour is normal urine output and tells you renal perfusion is intact.', trap: 'expected' }
  ],
  'MOC-101': [
    { text: 'Aspirin is correct for ischaemic stroke and catastrophic for haemorrhagic stroke, and the two are clinically indistinguishable. That is precisely why imaging comes first.', trap: 'contraindicated' },
    'Non-contrast CT separates ischaemic from haemorrhagic stroke within minutes, and every subsequent decision depends on which one this is.',
    { text: 'Heparin before imaging carries the same risk as aspirin, amplified. Anticoagulating an active brain bleed is unsurvivable.', trap: 'contraindicated' },
    { text: 'Dysphagia is common after stroke and aspiration pneumonia is a leading cause of death. Nothing by mouth until a swallow screen is passed.', trap: 'contraindicated' }
  ],
  'MOC-104': [
    { text: 'A rate of 54 in a sleeping athlete with a normal pressure is physiological. Trained hearts beat slowly and this one is perfusing fine.', trap: 'expected' },
    { text: 'Rate-controlled atrial fibrillation in an anticoagulated client is a managed chronic rhythm. The two things that make it dangerous are already addressed.', trap: 'secondary' },
    'Ventricular tachycardia with diaphoresis and dizziness is unstable, and unstable ventricular tachycardia is treated with synchronised cardioversion without delay.',
    { text: 'Occasional premature atrial contractions in someone drinking coffee is caffeine, not pathology.', trap: 'expected' }
  ],
  'MOC-113': [
    { text: 'A raised amylase confirms the diagnosis you already have. Confirming a diagnosis is not the same as finding the thing that is about to hurt the client.', trap: 'plausible-fact' },
    'Calcium precipitates into areas of fat necrosis in pancreatitis, and a positive Chvostek sign with carpopedal spasm means the level has fallen far enough to threaten laryngospasm and seizure.',
    { text: 'Epigastric pain radiating to the back is the defining symptom of pancreatitis. It needs generous analgesia; it does not need intervening on before the calcium.', trap: 'comfort-over-abc' },
    { text: 'Nausea and vomiting are near-universal in pancreatitis and are treated symptomatically.', trap: 'expected' }
  ],
  'MOC-120': [
    { text: 'Medication teaching determines whether this client is cured and whether resistance develops. It is essential and it is not first — every hour before isolation exposes more people.', trap: 'secondary' },
    'Isolation interrupts transmission. Until the client is in a negative-pressure room, every person entering is being exposed.',
    { text: 'Nutritional support matters in tuberculosis, where wasting is common. It is not what protects the rest of the unit this morning.', trap: 'secondary' },
    { text: 'Depression screening is reasonable given a long treatment course and the isolation itself, but it is not the admission priority.', trap: 'secondary' }
  ],
  'MOC-124': [
    { text: 'Four hundred millilitres over eight hours is expected output for a tube placed to decompress the stomach.', trap: 'expected' },
    { text: 'A sore throat is nearly universal with a nasogastric tube and reflects local irritation.', trap: 'expected' },
    'Coughing, choking, and a changed voice after the tube was moved means it has entered the airway. Anything instilled now goes into the lung.',
    { text: 'Green aspirate is bile-stained gastric content, which is exactly what should be coming out.', trap: 'expected' }
  ],
  'MOC-132': [
    { text: 'Hoarseness suggests laryngeal nerve irritation from the surgery. It warrants documentation and monitoring, and it is usually transient.', trap: 'secondary' },
    'Tightness at the incision with difficulty swallowing after thyroidectomy is an expanding haematoma compressing the trachea. The airway can close within minutes.',
    { text: 'A temperature of 37.9 in the first day after surgery is common and generally reflects atelectasis.', trap: 'expected' },
    { text: 'Perioral tingling signals hypocalcaemia from parathyroid injury, which is real and requires calcium. It threatens the client over hours; the haematoma threatens the airway now.', trap: 'secondary' }
  ],
  'MOC-135': [
    { text: 'A sitter keeps the client safe while the agitation continues, but it does not answer why a person who was settled an hour ago is now distressed.', trap: 'secondary' },
    'New agitation in dementia is almost always an unmet physical need the client can no longer articulate — pain, a full bladder, constipation, hunger, or noise. Finding it resolves the behaviour.',
    { text: 'Antipsychotics in dementia carry a boxed warning for increased mortality, and reaching for one before looking for a cause treats the nurse\'s problem rather than the client\'s.', trap: 'contraindicated' },
    { text: 'Restraints escalate agitation in dementia, cause injury, and are a last resort after less restrictive measures have failed.', trap: 'contraindicated' }
  ],
  'MOC-136': [
    { text: 'Pink and moist is a healthy, well-perfused stoma. This is the appearance you are checking for.', trap: 'expected' },
    'A dusky purple stoma with no output means the blood supply has failed. Necrotic bowel needs surgical revision, and delay costs viable tissue.',
    { text: 'Semi-formed stool is expected output from a descending colostomy.', trap: 'expected' },
    { text: 'Stomal tissue is highly vascular and bleeds slightly with cleaning. Brisk or persistent bleeding would be different.', trap: 'expected' }
  ],
  'MOC-139': [
    { text: 'Bruising around a joint replacement is expected from the surgical dissection.', trap: 'expected' },
    'A suddenly shortened, internally rotated leg with severe pain is a dislocated prosthesis. It compromises circulation and is immobilised as found rather than manipulated.',
    { text: 'Serosanguineous drainage on the dressing is normal early wound healing.', trap: 'expected' },
    { text: 'Sleeping in an abduction position is genuinely uncomfortable and clients complain of it. Comfort measures help; it is not an emergency.', trap: 'comfort-over-abc' }
  ],
  'MOC-147': [
    { text: 'Parenteral nutrition delivers a substantial dextrose load, so a glucose of 148 is common and managed with monitoring and insulin as needed.', trap: 'expected' },
    'Sudden dyspnoea, chest pain, and hypotension the moment a central line is opened is air embolism. Clamp the line, left lateral Trendelenburg, oxygen, call for help.',
    { text: 'Modest weight gain is expected and often the point of parenteral nutrition.', trap: 'expected' },
    { text: 'A delayed infusion is corrected by resuming at the ordered rate, never by increasing it to catch up, which would cause hyperglycaemia.', trap: 'secondary' }
  ],
  'MOC-152': [
    'A first exposure to intravenous opioid carries the highest risk of respiratory depression, and the client has no established tolerance. Sedation level and respiratory rate are watched closely.',
    { text: 'A healing pressure injury is improving and needs routine care.', trap: 'secondary' },
    { text: 'Awaiting an outpatient appointment describes a stable client with a scheduling need.', trap: 'secondary' },
    { text: 'A stable oral regimen means the client has already demonstrated tolerance at that dose.', trap: 'secondary' }
  ],
  'MOC-159': [
    { text: 'Mild hypothermia with shivering is extremely common after anaesthesia and is managed with warming.', trap: 'expected' },
    'Rising end-tidal carbon dioxide with masseter rigidity and tachycardia is malignant hyperthermia. Carbon dioxide rises before the temperature does, which is why waiting for fever is fatal.',
    { text: 'Postoperative nausea is common and treated with antiemetics.', trap: 'expected' },
    { text: 'A blood pressure of 108/64 is within normal limits.', trap: 'expected' }
  ],
  'MOC-163': [
    'External catheter length increasing means the tip has migrated out of central position. Infusing a vesicant or hypertonic solution through a malpositioned line causes serious injury, so infusion stops until placement is confirmed.',
    { text: 'A five-day-old transparent dressing is due for routine change on a seven-day schedule. Worth doing today, not urgent.', trap: 'secondary' },
    { text: 'Mild site discomfort warrants assessment for early phlebitis or infection but is not an emergency.', trap: 'secondary' },
    { text: 'Blood return on aspiration is a reassuring sign that the catheter is patent and correctly positioned.', trap: 'expected' }
  ],
  'MOC-165': [
    { text: 'Comfort requests are exactly what the UAP is rounding to handle. Asking them to report these back defeats the purpose of delegating.', trap: 'comfort-over-abc' },
    'A saturation of 88 percent needs nursing assessment and possibly intervention. Good delegation names the specific number that triggers a call rather than saying "tell me if anything is wrong."',
    { text: 'Changing a television channel is within the UAP role and requires no nursing judgement.', trap: 'comfort-over-abc' },
    { text: 'Room temperature is a comfort issue the UAP can address directly.', trap: 'comfort-over-abc' }
  ],
  'SAF-015': [
    { text: 'Getting the client off the floor feels like the caring response, and it is how undetected fractures and spinal injuries get made worse.', trap: 'assess-first' },
    'Assessment for injury and level of consciousness happens before the client is moved, because moving them is what converts an occult injury into a displaced one.',
    { text: 'The provider will be notified, but you cannot describe an injury you have not looked for.', trap: 'notify-first' },
    { text: 'The incident report is a system document completed after the client has been assessed and cared for.', trap: 'assess-first' }
  ],
  'SAF-029': [
    { text: 'Sweeping breaks mercury into smaller droplets and spreads them across a wider area, increasing the surface available to vaporise.', trap: 'contraindicated' },
    'Mercury vaporises at room temperature and the vapour is neurotoxic. Clearing the area and calling the trained spill team protects everyone while the cleanup is done properly.',
    { text: 'Vacuuming is the worst possible action: it aerosolises mercury throughout the room and permanently contaminates the vacuum.', trap: 'contraindicated' },
    { text: 'Washing spreads mercury into the drain and across the floor without removing it.', trap: 'contraindicated' }
  ],
  'SAF-031': [
    'Evacuation aims to move the greatest number out of danger fastest. Ambulatory clients nearest the fire can be directed out with almost no staff time, freeing everyone to help those who cannot walk.',
    { text: 'These clients need the most help, which is why this pulls. Needing the most help is the reason they are moved after the people who can walk out on their own.', trap: 'plausible-fact' },
    { text: 'Ventilated clients require the most staff and equipment per person. Moving them first consumes the resources needed to clear everyone else.', trap: 'plausible-fact' },
    { text: 'Unconscious clients are entirely dependent and are moved once the ambulatory clients are clear.', trap: 'plausible-fact' }
  ],
  'SAF-039': [
    { text: 'Fluid resuscitation treats a client who is still being poisoned, and it brings the contaminant into your resuscitation area with them.', trap: 'secondary' },
    'Decontamination stops ongoing absorption and prevents the contaminant entering the department. Removing clothing alone eliminates a large proportion of it.',
    { text: 'History is valuable and can be taken during or after decontamination. Taking it first leaves the chemical on the skin.', trap: 'assess-first' },
    { text: 'Analgesia is humane and irrelevant to the fact that the client is still absorbing a toxin.', trap: 'secondary' }
  ],
  'SAF-042': [
    { text: 'MRSA spreads by contact and requires gown and gloves in a private room. Negative pressure does nothing for an organism that is not airborne.', trap: 'secondary' },
    'Suspected tuberculosis requires airborne precautions: a negative-pressure room with air exhausted outside or through HEPA filtration, and a fit-tested N95 for anyone entering.',
    { text: 'Rotavirus spreads by the faecal-oral route and requires contact precautions.', trap: 'secondary' },
    { text: 'A draining wound requires contact precautions until the drainage is contained.', trap: 'secondary' }
  ],
  'PHA-020': [
    { text: 'Dextrose is hypotonic once the sugar is metabolised, which haemolyses red cells on contact.', trap: 'contraindicated' },
    'Only normal saline is compatible with blood products. It is isotonic and contains nothing that reacts with the unit.',
    { text: 'The calcium in lactated Ringer binds the citrate anticoagulant and causes clotting in the line.', trap: 'contraindicated' },
    { text: 'Sterile water is profoundly hypotonic and causes immediate haemolysis.', trap: 'contraindicated' }
  ],
  'PHA-021': [
    { text: 'Two hours is shorter than necessary and can force an unnecessarily rapid infusion in a client at risk of overload.', trap: 'plausible-fact' },
    'A unit must be completed within 4 hours of leaving controlled storage, because bacterial growth accelerates at room temperature.',
    { text: 'Six hours exceeds the safe window and risks transfusing a contaminated unit.', trap: 'contraindicated' },
    { text: 'Eight hours is far beyond the limit and is the kind of overrun that happens when a slow transfusion is not tracked.', trap: 'contraindicated' }
  ],
  'PHA-033': [
    { text: 'Therapeutic phenytoin is 10 to 20 mcg/mL. Twenty-four is above the ceiling.', trap: 'plausible-fact' },
    'Above 20 mcg/mL, phenytoin produces nystagmus first, then ataxia, slurred speech, and confusion as the level climbs.',
    { text: 'Subtherapeutic would be below 10. At 24 the risk is toxicity, not breakthrough seizures.', trap: 'plausible-fact' },
    { text: 'Hypoglycaemia is not a phenytoin toxicity effect, though the drug can raise glucose modestly.', trap: 'plausible-fact' }
  ],
  'PHA-034': [
    { text: 'Skipping anticonvulsant doses risks breakthrough seizures and, if stopped abruptly, status epilepticus.', trap: 'contraindicated' },
    'Gingival hyperplasia is a well-known phenytoin effect that meticulous oral hygiene mitigates, and no anticonvulsant is ever stopped abruptly.',
    { text: 'Alcohol alters phenytoin metabolism — acutely raising and chronically lowering the level.', trap: 'contraindicated' },
    { text: 'Phenytoin may turn urine pink to reddish-brown, which is harmless. Blue is not a phenytoin effect.', trap: 'plausible-fact' }
  ],
  'PHA-035': [
    { text: 'Normal saline at 0.9 percent is isotonic — the same osmolality as plasma.', trap: 'plausible-fact' },
    'Half-normal saline at 0.45 percent is hypotonic and shifts fluid from the vascular space into cells, which makes it dangerous in raised intracranial pressure.',
    { text: 'Lactated Ringer is isotonic and closely approximates plasma electrolyte composition.', trap: 'plausible-fact' },
    { text: 'Three percent saline is hypertonic and pulls fluid out of cells.', trap: 'plausible-fact' }
  ],
  'PHA-036': [
    { text: 'Specific gravity alone does not track the sodium, and the sodium is what determines whether the brain swells or shrinks.', trap: 'secondary' },
    'Correcting sodium too rapidly causes osmotic demyelination, so levels are checked frequently and correction is limited to roughly 8 to 10 mEq/L in 24 hours.',
    { text: 'Daily weights track fluid balance but are far too coarse for an infusion that can change serum sodium within hours.', trap: 'secondary' },
    { text: 'Hypertonic saline is among the most closely monitored infusions there is.', trap: 'contraindicated' }
  ],
  'PHA-037': [
    { text: 'Smaller barrels generate much higher pressure per unit of force and can rupture the catheter.', trap: 'contraindicated' },
    'A 10 mL or larger syringe limits the pressure generated, and a pulsatile push-pause technique clears the lumen more effectively than steady pressure.',
    { text: 'Resistance may mean thrombus or malposition. Forcing it can embolise a clot or rupture the catheter.', trap: 'contraindicated' },
    { text: 'Tap water is not sterile and has no place in a central line.', trap: 'contraindicated' }
  ],
  'PHA-038': [
    { text: 'Continuing metformin through a contrast study is precisely the scenario that causes metformin-associated lactic acidosis.', trap: 'contraindicated' },
    'Contrast can cause acute kidney injury, and impaired clearance of metformin raises lactic acidosis risk, so it is held and renal function reassessed before restarting.',
    { text: 'Doubling the dose compounds the accumulation risk.', trap: 'contraindicated' },
    { text: 'The hold is temporary. Permanent substitution is not indicated by a single contrast study.', trap: 'plausible-fact' }
  ],
  'PHA-039': [
    { text: 'Metformin does not cause hypoglycaemia on its own because it does not stimulate insulin secretion.', trap: 'plausible-fact' },
    'Myalgia, malaise, and hyperventilation suggest lactic acidosis — rare, but frequently fatal, and requiring immediate discontinuation.',
    { text: 'Allergic reactions present with rash and urticaria rather than this metabolic picture.', trap: 'plausible-fact' },
    { text: 'Gastrointestinal upset is a normal early metformin effect. Muscle aches with dyspnoea are not.', trap: 'expected' }
  ],
  'PHA-040': [
    { text: 'Injecting without displacing tissue is standard intramuscular technique, not Z-track, and it allows the medication to track back and stain the skin.', trap: 'plausible-fact' },
    'Displacing tissue creates a zigzag track that seals when released, preventing medication leaking into subcutaneous tissue.',
    { text: 'Massage forces medication back along the track, defeating the entire purpose of the technique.', trap: 'contraindicated' },
    { text: 'A 25-gauge 5/8-inch needle is a subcutaneous needle. Intramuscular injection needs 1 to 1.5 inches at 21 to 23 gauge.', trap: 'contraindicated' }
  ],
  'PHA-041': [
    { text: 'The cornea is exquisitely sensitive. A drop landing on it triggers the blink reflex and can cause abrasion.', trap: 'contraindicated' },
    'The conjunctival sac holds the drop without touching the cornea, and punctal occlusion reduces systemic absorption — which matters with beta blockers such as timolol.',
    { text: 'Rapid blinking pumps the drop out through the puncta before it can be absorbed.', trap: 'contraindicated' },
    { text: 'Touching the dropper to anything contaminates it, and the eyelashes carry normal flora directly to the bottle tip.', trap: 'contraindicated' }
  ],
  'PHA-042': [
    { text: 'Up and back is the adult and older-child technique. In a 2-year-old the canal points upward, so this fails to straighten it.', trap: 'plausible-fact' },
    'In children under 3 the ear canal angles upward, so the pinna is pulled down and back to straighten it and let the drops reach the tympanic membrane.',
    { text: 'Straight out does not correspond to the anatomy at any age.', trap: 'plausible-fact' },
    { text: 'Positioning determines whether the drops reach the eardrum at all.', trap: 'plausible-fact' }
  ],
  'PHA-043': [
    { text: 'Metoclopramide is causing the reaction. More of it deepens the extrapyramidal symptoms.', trap: 'contraindicated' },
    'Metoclopramide blocks dopamine, producing the same movement disorders as antipsychotics. It is held and an anticholinergic given.',
    { text: 'Waiting overnight risks progression, and prolonged exposure raises the risk of tardive dyskinesia.', trap: 'contraindicated' },
    { text: 'An opioid does nothing for extrapyramidal symptoms and adds sedation.', trap: 'plausible-fact' }
  ],
  'PHA-044': [
    { text: 'Flushing pushes more vesicant into the tissue, which is the mechanism of the necrosis you are trying to prevent.', trap: 'contraindicated' },
    'The catheter stays in so residual drug can be aspirated and the antidote instilled through the same route the drug took.',
    { text: 'Any rate continues delivering a drug that is destroying tissue.', trap: 'contraindicated' },
    { text: 'Thermal application depends on the specific agent — some need cold, some warm — and continuing the infusion is wrong regardless.', trap: 'contraindicated' }
  ],
  'PHA-045': [
    { text: 'Raw produce carries bacterial and fungal loads that a neutrophil count of 400 cannot defend against.', trap: 'contraindicated' },
    'An absolute neutrophil count below 500 is severe neutropenia, where fever is an emergency requiring antibiotics within the hour.',
    { text: 'Fluid restriction has no role and risks dehydration in a client who may become septic.', trap: 'contraindicated' },
    { text: 'Young children are frequent carriers of respiratory and gastrointestinal viruses.', trap: 'contraindicated' }
  ],
  'PHA-048': [
    { text: 'Undertreatment produces fatigue, cold intolerance, weight gain, and constipation. Every symptom here is the opposite.', trap: 'plausible-fact' },
    'These are thyrotoxic symptoms from an excessive dose, requiring a TSH check and dose reduction.',
    { text: 'Allergy presents with rash or anaphylaxis, not a metabolic syndrome.', trap: 'plausible-fact' },
    { text: 'Palpitations and insomnia on thyroid replacement are never simply accepted — they signal overdose and cardiac risk.', trap: 'expected' }
  ],
  'PHA-049': [
    { text: 'Vitamin C has no role in preventing isoniazid neuropathy.', trap: 'plausible-fact' },
    'Isoniazid interferes with pyridoxine metabolism, causing peripheral neuropathy that B6 supplementation prevents.',
    { text: 'Vitamin D is unrelated to isoniazid toxicity.', trap: 'plausible-fact' },
    { text: 'Folic acid is co-prescribed with methotrexate, not with isoniazid.', trap: 'plausible-fact' }
  ],
  'PHA-050': [
    { text: 'Orange discoloration is the drug itself, not hepatic failure. Stopping tuberculosis therapy unnecessarily risks resistance.', trap: 'contraindicated' },
    'Rifampin turns all body fluids orange-red, which is harmless but permanently stains soft contact lenses, and it induces hepatic enzymes that reduce oral contraceptive effectiveness.',
    { text: 'Urinary bleeding would not also colour the tears. The universal discoloration is the clue that this is systemic drug excretion.', trap: 'plausible-fact' },
    { text: 'The colour change occurs at any therapeutic dose and does not indicate excess.', trap: 'plausible-fact' }
  ],
  'PHA-051': [
    { text: 'Concentrating the drug is exactly what causes crystalluria and renal tubular injury.', trap: 'contraindicated' },
    'Acyclovir can crystallise in renal tubules, so generous hydration is essential, particularly with intravenous administration.',
    { text: 'Antivirals for herpes require the full course. Stopping when lesions clear shortens treatment below what suppresses replication.', trap: 'contraindicated' },
    { text: 'Antivirals suppress herpes viruses; they do not eradicate them. The virus remains latent in nerve ganglia.', trap: 'plausible-fact' }
  ],
  'PHA-052': [
    { text: 'Muscle pain with dark urine is never a normal statin effect. Reassurance here can cost the client their kidneys.', trap: 'contraindicated' },
    'Myalgia with weakness and dark urine suggests rhabdomyolysis, which causes acute kidney failure from myoglobin. Creatine kinase confirms it.',
    { text: 'Increasing the dose increases the myopathy risk that is already manifesting.', trap: 'contraindicated' },
    { text: 'Exercise worsens rhabdomyolysis by adding further muscle breakdown.', trap: 'contraindicated' }
  ],
  'PHA-053': [
    { text: 'Minor bruising is expected on any antiplatelet, and stopping for it is precisely the decision that causes stent thrombosis.', trap: 'contraindicated' },
    'Dual antiplatelet therapy prevents stent thrombosis, and premature discontinuation carries a high risk of acute stent closure and death.',
    { text: 'This is not an as-needed medication. It works by continuous platelet inhibition.', trap: 'contraindicated' },
    { text: 'Doubling after a missed dose increases bleeding risk without restoring the missed protection.', trap: 'contraindicated' }
  ],
  'PHA-054': [
    { text: 'Beta blockers interact meaningfully with diabetes management, which is exactly why this pairing needs teaching.', trap: 'plausible-fact' },
    'Beta blockade suppresses tremor and tachycardia, leaving diaphoresis as one of the few remaining warning signs. More frequent glucose monitoring compensates.',
    { text: 'Stopping insulin would be catastrophic and is never a response to starting a beta blocker.', trap: 'contraindicated' },
    { text: 'Beta blockers can blunt recovery from hypoglycaemia but do not cause it directly. The danger is the masking.', trap: 'plausible-fact' }
  ],
  'PHA-055': [
    { text: 'This is the most common and most dangerous misconception about antihypertensives — the normal reading is the drug working, not the problem resolving.', trap: 'contraindicated' },
    'Abrupt beta blocker withdrawal causes receptor hypersensitivity with rebound tachycardia, hypertension, angina, and infarction. Any change is tapered.',
    { text: 'Every-other-day dosing produces the same rebound cycle on the off days.', trap: 'contraindicated' },
    { text: 'Beta blockers are among the drugs most dangerous to stop abruptly.', trap: 'contraindicated' }
  ],
  'PHA-056': [
    { text: 'Water is the safest beverage with any medication.', trap: 'plausible-fact' },
    'Grapefruit inhibits intestinal CYP3A4, raising levels of calcium channel blockers, statins, and immunosuppressants toward toxicity.',
    { text: 'Apple juice does not inhibit CYP3A4.', trap: 'plausible-fact' },
    { text: 'Milk interferes with tetracyclines and fluoroquinolones, not with verapamil.', trap: 'plausible-fact' }
  ],
  'PHA-057': [
    { text: 'Antidepressants take 4 to 6 weeks for full effect. Expecting immediate relief leads to premature discontinuation.', trap: 'plausible-fact' },
    'Antidepressants carry a boxed warning for increased suicidal thinking early in treatment, particularly in younger clients, because energy returns before mood lifts.',
    { text: 'Stopping when mood improves is the most common cause of relapse. Therapy continues for months after remission.', trap: 'contraindicated' },
    { text: 'St. John\'s wort is serotonergic and combining it risks serotonin syndrome.', trap: 'contraindicated' }
  ],
  'PHA-058': [
    { text: 'Neuroleptic malignant syndrome produces lead-pipe rigidity with hyporeflexia. The clonus here points the other way.', trap: 'plausible-fact' },
    'Hyperreflexia and clonus with autonomic instability and hyperthermia define serotonin syndrome. Clonus is the discriminating finding.',
    { text: 'Anticholinergic toxicity produces dry flushed skin, urinary retention, and delirium without clonus.', trap: 'plausible-fact' },
    { text: 'Alcohol withdrawal is possible in any client, but the SSRI provides a mechanism and clonus is not a withdrawal feature.', trap: 'plausible-fact' }
  ],
  'PHA-059': [
    { text: 'Diarrhoea is the magnesium-based antacid effect. Many products combine both precisely to cancel this out.', trap: 'plausible-fact' },
    'Aluminium-containing antacids cause constipation, which is why combination products pair them with magnesium.',
    { text: 'Antacids do not raise potassium.', trap: 'plausible-fact' },
    { text: 'Some antacids are high in sodium, which can matter in heart failure, but hyponatraemia is not the effect.', trap: 'plausible-fact' }
  ],
  'PHA-060': [
    { text: 'Proton pump inhibitors irreversibly bind actively secreting pumps, so they must be present before the meal stimulates secretion.', trap: 'contraindicated' },
    'Taken 30 to 60 minutes before the first meal, swallowed whole. Long-term use is associated with fracture risk, low magnesium and B12, and C. difficile.',
    { text: 'Crushing a delayed-release capsule exposes the drug to gastric acid, which destroys it.', trap: 'contraindicated' },
    { text: 'Onset takes days. An antacid or H2 blocker is what provides rescue relief.', trap: 'plausible-fact' }
  ],
  'PHA-062': [
    { text: 'Swallowing destroys the point of a sublingual tablet — it is absorbed through the oral mucosa to bypass first-pass metabolism.', trap: 'contraindicated' },
    'Sublingual placement, sitting to prevent syncope from vasodilation, and calling emergency services if pain persists after the first tablet.',
    { text: 'Nitroglycerin degrades with light, heat, and moisture. It stays in the original dark glass container.', trap: 'contraindicated' },
    { text: 'Nitrates with phosphodiesterase inhibitors cause profound, sometimes fatal hypotension. This is an absolute contraindication.', trap: 'contraindicated' }
  ],
  'PHA-063': [
    { text: 'Naloxone reverses opioids by competing at the receptor. It has no effect on hepatic glutathione.', trap: 'plausible-fact' },
    'Acetylcysteine replenishes glutathione and prevents hepatic necrosis, most effectively within 8 to 10 hours of ingestion.',
    { text: 'Flumazenil reverses benzodiazepines and carries seizure risk in dependent clients.', trap: 'plausible-fact' },
    { text: 'Protamine sulfate reverses heparin.', trap: 'plausible-fact' }
  ],
  'PHA-064': [
    { text: 'Increasing the infusion in a client showing toxicity progresses toward respiratory and cardiac arrest.', trap: 'contraindicated' },
    'Absent reflexes with a respiratory rate of 10 is magnesium toxicity. Stop the infusion and give calcium gluconate, the antagonist kept at the bedside for exactly this.',
    { text: 'A diuretic increases magnesium excretion eventually but does nothing about the neuromuscular depression happening now.', trap: 'secondary' },
    { text: 'Thirty minutes is long enough for respirations to fail entirely.', trap: 'contraindicated' }
  ],
  'PHA-066': [
    { text: 'Live vaccines can cause disease in an immunosuppressed client. They are contraindicated for the life of the graft.', trap: 'contraindicated' },
    'No live vaccines, prompt reporting of infection since the usual signs are blunted, no grapefruit because it raises cyclosporine toward nephrotoxicity, and oral hygiene for gingival hyperplasia.',
    { text: 'Immunosuppression continues for the life of the graft. Stopping it causes rejection.', trap: 'contraindicated' },
    { text: 'Cyclosporine has extensive interactions through CYP3A4, including grapefruit, azoles, and macrolides.', trap: 'contraindicated' }
  ],
  'PHA-067': [
    { text: 'Treating this as an expected side effect delays diagnosis of an infection that can progress to toxic megacolon.', trap: 'expected' },
    'Broad-spectrum antibiotics, clindamycin especially, disrupt normal flora and allow C. difficile overgrowth. Contact precautions with soap and water hand hygiene, and no antidiarrhoeals.',
    { text: 'Lactose intolerance does not appear suddenly on day 7 of an antibiotic.', trap: 'plausible-fact' },
    { text: 'Calling it unrelated to the antibiotic misses the strongest risk factor in the history.', trap: 'contraindicated' }
  ],
  'PHA-068': [
    { text: 'Sulfonamides crystallise in the urine without adequate hydration. Restricting fluid causes the injury.', trap: 'contraindicated' },
    'Generous fluids prevent crystalluria, sun protection addresses photosensitivity, and any rash is reported immediately because sulfonamides are a leading cause of Stevens-Johnson syndrome.',
    { text: 'Antacids are not the interaction of concern here, and this omits the rash warning that actually matters.', trap: 'secondary' },
    { text: 'This is a sulfonamide and is contraindicated with sulfa allergy.', trap: 'contraindicated' }
  ],
  'PHA-069': [
    { text: 'IV push potassium causes immediate cardiac arrest. This is one of the few genuinely never-do actions in nursing.', trap: 'contraindicated' },
    'Potassium is always diluted and pump-controlled, generally no faster than 10 mEq per hour peripherally, with cardiac monitoring at higher rates.',
    { text: 'Adding to a hanging bag risks a concentrated bolus at the bottom if mixing is incomplete.', trap: 'contraindicated' },
    { text: 'Rapid infusion causes fatal arrhythmia and severe vein irritation.', trap: 'contraindicated' }
  ],
  'PHA-071': [
    { text: 'Dietary amino acids compete with levodopa for transport across the gut and the blood-brain barrier. Protein reduces absorption rather than aiding it.', trap: 'contraindicated' },
    'Protein competes for transport, darkened urine and sweat are harmless, and orthostatic hypotension requires slow position changes.',
    { text: 'Abrupt withdrawal of dopaminergic therapy can precipitate a neuroleptic malignant-like syndrome.', trap: 'contraindicated' },
    { text: 'Levodopa controls symptoms without altering the underlying neurodegeneration.', trap: 'plausible-fact' }
  ],
  'PHA-072': [
    { text: 'Bedtime dosing with food means the client lies down afterwards, which is how bisphosphonate oesophagitis and ulceration occur.', trap: 'contraindicated' },
    'Fasting with plain water and remaining upright for 30 minutes, because bisphosphonates are poorly absorbed and severely irritating to the oesophagus.',
    { text: 'Calcium binds the drug and blocks the absorption that is already marginal.', trap: 'contraindicated' },
    { text: 'Lying down is the specific thing that causes the oesophageal injury this drug is known for.', trap: 'contraindicated' }
  ],
  'PHA-073': [
    { text: 'Opioid potencies differ substantially. Treating milligrams as equivalent is how fatal overdoses happen in rotation.', trap: 'contraindicated' },
    'Equianalgesic tables guide conversion, and the calculated dose is reduced by 25 to 50 percent because tolerance to one opioid does not fully transfer to another.',
    { text: 'Doubling on rotation, in a client whose cross-tolerance is incomplete, is dangerous.', trap: 'contraindicated' },
    { text: 'Route changes require conversion too — oral morphine is roughly one third as potent as intravenous.', trap: 'contraindicated' }
  ],
  'PHA-074': [
    { text: 'First-generation antihistamines have strong anticholinergic activity and are a recognised cause of delirium in older adults.', trap: 'contraindicated' },
    'Sedation, confusion, dry mouth, constipation, and urinary retention put diphenhydramine on the Beers list, and it substantially raises fall risk.',
    { text: 'Driving after a sedating antihistamine carries impairment comparable to alcohol.', trap: 'contraindicated' },
    { text: 'It is specifically not recommended as a sleep aid in older adults, and tolerance to the sedation develops quickly.', trap: 'contraindicated' }
  ],
  'PHA-075': [
    { text: 'The air bubble in a prefilled low-molecular-weight heparin syringe clears the needle of drug and reduces bruising. Expelling it defeats that.', trap: 'contraindicated' },
    'Keep the bubble, inject into abdominal fat at least 2 inches from the umbilicus, and do not aspirate or massage.',
    { text: 'Massage increases haematoma formation at an anticoagulant injection site.', trap: 'contraindicated' },
    { text: 'Enoxaparin is subcutaneous. Intramuscular injection in an anticoagulated client risks a deep haematoma.', trap: 'contraindicated' }
  ],
  'PHA-076': [
    { text: 'Blood pressure alone misses every organ amiodarone actually damages.', trap: 'secondary' },
    'Amiodarone is iodine-rich and causes both hypo- and hyperthyroidism, hepatotoxicity, potentially fatal pulmonary fibrosis, corneal deposits, and blue-grey skin discoloration.',
    { text: 'Sodium is not the concern. Thyroid, liver, lungs, and eyes are.', trap: 'plausible-fact' },
    { text: 'Amiodarone requires more baseline and ongoing monitoring than almost any other cardiac drug.', trap: 'contraindicated' }
  ],
  'PHA-077': [
    { text: 'Lactic acidosis is the metformin concern. Sulfonylureas work by a different mechanism entirely.', trap: 'plausible-fact' },
    'Sulfonylureas stimulate insulin secretion regardless of glucose level, so skipped meals or unusual exertion cause significant and prolonged hypoglycaemia.',
    { text: 'Sulfonylureas tend to cause weight gain rather than loss.', trap: 'plausible-fact' },
    { text: 'Hyperkalaemia is not a sulfonylurea effect.', trap: 'plausible-fact' }
  ],
  'PHA-078': [
    { text: 'Immediate departure removes the window in which anaphylaxis and vasovagal syncope occur.', trap: 'contraindicated' },
    'Fifteen minutes seated allows detection of immediate hypersensitivity and prevents injury from vasovagal syncope, which is most common in adolescents.',
    { text: 'Two hours is far longer than necessary and would make routine vaccination impractical.', trap: 'plausible-fact' },
    { text: 'Adults faint too, and anaphylaxis is not age-limited.', trap: 'plausible-fact' }
  ],
  'PHA-080': [
    { text: 'Symptom resolution precedes eradication. This is the specific misconception that drives antibiotic resistance.', trap: 'contraindicated' },
    'Stopping early leaves the least susceptible organisms alive, which drives both relapse and resistance.',
    { text: 'Course completion has no bearing on allergy risk.', trap: 'plausible-fact' },
    { text: 'This applies at every age.', trap: 'plausible-fact' }
  ],
  'PHA-082': [
    { text: 'Both are inverted. Thiazides waste potassium and retain calcium.', trap: 'plausible-fact' },
    'Thiazides waste potassium, sodium, and magnesium while retaining calcium, and they also raise uric acid and glucose. The calcium retention distinguishes them from loop diuretics.',
    { text: 'Phosphate and magnesium excess are not thiazide effects — magnesium is lost, not retained.', trap: 'plausible-fact' },
    { text: 'Thiazides produce clinically significant electrolyte change, which is why they are monitored.', trap: 'contraindicated' }
  ],
  'PHA-083': [
    { text: 'Normal renal function in a young client is the situation in which meperidine is least problematic.', trap: 'plausible-fact' },
    'Normeperidine is neurotoxic and renally cleared, so accumulation in renal impairment causes tremor, myoclonus, and seizures. It is also contraindicated with monoamine oxidase inhibitors.',
    { text: 'Nausea occurs with all opioids and is not specific to meperidine.', trap: 'plausible-fact' },
    { text: 'Mild anxiety does not contraindicate any opioid.', trap: 'plausible-fact' }
  ],
  'PHA-084': [
    'Second-generation antipsychotics, olanzapine and clozapine especially, cause substantial metabolic syndrome requiring baseline and periodic weight, glucose, and lipid monitoring.',
    { text: 'Orthostatic hypotension does occur, but "only" excludes the metabolic effects that dominate long-term risk.', trap: 'plausible-fact' },
    { text: 'Hair loss is not a recognised olanzapine effect.', trap: 'plausible-fact' },
    { text: 'Antipsychotics impair thermoregulation in both directions, but hypothermia is not the monitoring priority.', trap: 'plausible-fact' }
  ],
  'PHA-085': [
    { text: 'Increasing the rate in fluid overload adds volume the client already cannot handle.', trap: 'contraindicated' },
    'Crackles, dyspnoea, bounding pulse, and distended neck veins indicate overload. Slow to keep-open rather than stopping entirely to preserve access, sit upright, oxygen, notify.',
    { text: 'Supine positioning increases venous return and worsens the pulmonary congestion.', trap: 'contraindicated' },
    { text: 'Removing the catheter loses the access needed for the diuretic that is about to be ordered.', trap: 'secondary' }
  ],
  'PHA-086': [
    { text: 'Peaks are drawn after the infusion, not before the dose. This describes a trough by its timing.', trap: 'plausible-fact' },
    'Trough levels drawn immediately before the next dose correlate with both efficacy and nephrotoxicity, and renal function is monitored alongside.',
    { text: 'A random level cannot be interpreted against any reference point.', trap: 'contraindicated' },
    { text: 'Sodium has no role in vancomycin dosing.', trap: 'plausible-fact' }
  ],
  'PHA-088': [
    { text: 'Heparin does not normally halve the platelet count. Calling this expected allows a prothrombotic emergency to continue.', trap: 'expected' },
    'A drop of more than 50 percent between days 5 and 10 with new thrombosis is heparin-induced thrombocytopenia. All heparin stops, including flushes and coated catheters.',
    { text: 'Dehydration concentrates blood and would raise rather than lower the platelet count.', trap: 'plausible-fact' },
    { text: 'Dismissing it as laboratory error while the client has a new clot is exactly the wrong call.', trap: 'contraindicated' }
  ],
  'PHA-089': [
    'Ondansetron prolongs the QT interval, particularly at higher doses, with other QT-prolonging drugs, or with electrolyte disturbance. Headache is the most common side effect.',
    { text: 'Ondansetron has no effect on glucose.', trap: 'plausible-fact' },
    { text: 'Hypertensive crisis relates to monoamine oxidase inhibitors and tyramine.', trap: 'plausible-fact' },
    { text: 'Ototoxicity relates to aminoglycosides and loop diuretics.', trap: 'plausible-fact' }
  ],
  'PHA-090': [
    { text: 'Ninety degrees into muscle is intramuscular. An intradermal test placed that deep gives no readable wheal.', trap: 'contraindicated' },
    'Intradermal placement is just below the epidermis at 5 to 15 degrees, bevel up, producing a visible wheal that confirms correct depth.',
    { text: 'Aspiration is not performed for intradermal injection — there is no vessel at that depth to aspirate from.', trap: 'contraindicated' },
    { text: 'Massage disperses the wheal and invalidates the test.', trap: 'contraindicated' }
  ],
  'PHA-091': [
    { text: 'Rapid administration increases the likelihood of infusion reactions and gives no time to detect one.', trap: 'contraindicated' },
    'First doses carry the highest anaphylaxis risk, so allergy verification and close observation during the initial minutes are essential.',
    { text: 'Leaving the room means anaphylaxis is detected by whoever happens to walk past.', trap: 'contraindicated' },
    { text: 'Mixing with other infusions risks incompatibility and makes it impossible to identify which agent caused a reaction.', trap: 'contraindicated' }
  ],
  'PHA-092': [
    { text: 'Antiretroviral therapy is continuous. Symptom-triggered dosing allows viral replication and resistance.', trap: 'contraindicated' },
    'Very high adherence maintains viral suppression and prevents resistance. Missed doses allow replication, and resistance to one agent can confer resistance across a class.',
    { text: 'Undetectable means the therapy is working, not that it can stop. Stopping produces rapid rebound.', trap: 'contraindicated' },
    { text: 'Regimens are individualised by resistance profile and comorbidity. Sharing is never appropriate.', trap: 'contraindicated' }
  ],
  'PHA-093': [
    { text: 'INR monitors warfarin. Direct oral anticoagulants have predictable pharmacokinetics and do not require it.', trap: 'plausible-fact' },
    'No routine INR, but periodic renal function because clearance depends on it, and adherence matters more than with warfarin because the short half-life means a missed dose leaves the client unprotected quickly.',
    { text: 'Renal function is monitored. "No monitoring of any kind" overstates the convenience.', trap: 'plausible-fact' },
    { text: 'Home INR testing applies to warfarin, not to direct oral anticoagulants.', trap: 'plausible-fact' }
  ],
  'PHA-094': [
    { text: 'Five is subtherapeutic against a range of 10 to 20.', trap: 'plausible-fact' },
    { text: 'Twelve sits within the therapeutic range.', trap: 'plausible-fact' },
    'The therapeutic range is 10 to 20 mcg/mL, so 25 indicates toxicity — nausea, vomiting, tachycardia, arrhythmia, insomnia, and seizures.',
    { text: 'Eight is below the therapeutic range.', trap: 'plausible-fact' }
  ],
  'PHA-095': [
    { text: 'Vitamin K reverses warfarin.', trap: 'plausible-fact' },
    'Digoxin immune Fab binds digoxin and reverses toxicity rapidly in severe cases with arrhythmia or hyperkalaemia. Potassium is corrected alongside.',
    { text: 'Naloxone reverses opioids.', trap: 'plausible-fact' },
    { text: 'Protamine sulfate reverses heparin.', trap: 'plausible-fact' }
  ],
  'PHA-096': [
    { text: 'Small syringes generate rupturing pressures. The tube splits rather than clearing.', trap: 'contraindicated' },
    'Warm water with a gentle push-pause technique from a large syringe is first-line for an occluded feeding tube.',
    { text: 'A guidewire can perforate the tube and the gastrointestinal tract.', trap: 'contraindicated' },
    { text: 'Removal is a last resort after less invasive clearing has failed, and it means another placement and another radiograph.', trap: 'secondary' }
  ],
  'PHA-097': [
    { text: 'Glargine has an acidic pH that precipitates when mixed with other insulins, altering the absorption profile of both.', trap: 'contraindicated' },
    'Glargine is never mixed with anything and requires a separate injection. Only regular and NPH may be combined in one syringe.',
    { text: 'Drawing order does not resolve a chemical incompatibility. The pH problem exists regardless of sequence.', trap: 'plausible-fact' },
    { text: 'Time of day has no bearing on chemical compatibility.', trap: 'plausible-fact' }
  ],
  'PHA-098': [
    { text: 'ACE inhibitors reduce aldosterone and retain potassium. Another dose at 5.8 pushes toward fatal arrhythmia.', trap: 'contraindicated' },
    'Hold the dose, notify the provider, and review supplements and salt substitutes, which are potassium chloride and frequently the unrecognised contributor.',
    { text: 'Potassium-rich foods add to a level that is already dangerous.', trap: 'contraindicated' },
    { text: 'Supplementing potassium at 5.8 on an ACE inhibitor could be fatal.', trap: 'contraindicated' }
  ],
  'PHA-099': [
    { text: 'Private disposal with documentation is precisely the pattern diversion hides behind — the signature exists without the observation.', trap: 'contraindicated' },
    'Controlled substance waste requires a licensed witness present at the time of disposal, with both parties documenting.',
    { text: 'Saving a remainder for a later dose breaks the chain of custody entirely.', trap: 'contraindicated' },
    { text: 'Opened doses are never returned to the dispensing cabinet.', trap: 'contraindicated' }
  ],
  'PHA-005': [
    { text: 'Continuing at 95 seconds against a control of 30 leaves the client more than three times baseline and actively bleeding-prone.', trap: 'contraindicated' },
    'Therapeutic aPTT is 1.5 to 2.5 times control, so 45 to 75 seconds here. Ninety-five is supratherapeutic and the infusion is held pending provider direction.',
    { text: 'Increasing the rate takes an already-excessive level higher. Read which direction the value has moved before adjusting.', trap: 'contraindicated' },
    { text: 'Vitamin K reverses warfarin, not heparin. The heparin antidote is protamine sulfate.', trap: 'plausible-fact' }
  ],
  'PHA-006': [
    { text: 'This reverses the direction. A low INR means the blood is clotting more readily, not less.', trap: 'plausible-fact' },
    'An INR of 1.2 against a target of 2.0 to 3.0 means the client is not adequately anticoagulated and the clot they are being treated for can still propagate or embolise.',
    { text: 'Therapeutic would be 2.0 to 3.0. At 1.2 the client is barely above an untreated baseline of around 1.0.', trap: 'plausible-fact' },
    { text: 'Stopping warfarin in a client who is under-anticoagulated removes the only protection they have. The dose typically increases.', trap: 'contraindicated' }
  ],
  'PHA-007': [
    { text: 'Visual halos and confusion are never expected effects. Treating them as routine is how digoxin toxicity becomes fatal.', trap: 'expected' },
    'Anorexia, nausea, yellow-green halos, and confusion are classic digoxin toxicity, and a potassium of 3.0 increases digoxin binding at the sodium-potassium pump, amplifying every effect.',
    { text: 'The symptoms are of excess, not deficiency. Increasing the dose would deepen the toxicity.', trap: 'contraindicated' },
    { text: 'Allergy presents as rash, urticaria, or anaphylaxis. This symptom cluster is a dose-related toxic effect.', trap: 'plausible-fact' }
  ],
  'PHA-008': [
    { text: 'Digoxin slows conduction through the atrioventricular node. Giving it at 52 pushes the rate lower and risks heart block.', trap: 'contraindicated' },
    'The threshold for holding digoxin in an adult is an apical pulse below 60, counted apically for a full minute because the rhythm may be irregular.',
    { text: 'Nurses do not alter a prescribed dose. Halving it is prescribing.', trap: 'wrong-scope' },
    { text: 'Food slows digoxin absorption slightly but does nothing about a heart rate that is already too slow to give it safely.', trap: 'secondary' }
  ],
  'PHA-009': [
    { text: 'Labelling this an allergy removes an important antibiotic from the client\'s options permanently. It is a rate-related histamine release, not an immune reaction.', trap: 'plausible-fact' },
    'Vancomycin infusion reaction is caused by infusing too quickly. Slowing the rate, premedicating with an antihistamine, and extending the infusion over at least 60 minutes resolves it.',
    { text: 'Rate is the cause. Increasing it makes the reaction worse.', trap: 'contraindicated' },
    { text: 'Epinephrine is for anaphylaxis, which involves airway compromise and hypotension. Flushing alone does not meet that threshold.', trap: 'secondary' }
  ],
  'PHA-010': [
    { text: 'Aminoglycosides are not primarily hepatotoxic. Liver monitoring belongs with drugs such as isoniazid, valproate, and statins.', trap: 'plausible-fact' },
    'Gentamicin is nephrotoxic and ototoxic, so renal function and drug levels guide dosing, with the trough predicting toxicity. Tinnitus and hearing change are monitored alongside.',
    { text: 'Glycaemic monitoring is unrelated to aminoglycoside therapy.', trap: 'plausible-fact' },
    { text: 'Thyroid monitoring belongs with amiodarone and levothyroxine, not gentamicin.', trap: 'plausible-fact' }
  ],
  'PHA-011': [
    { text: 'Regular insulin has a 30 to 60 minute onset. Nothing has happened immediately after injection.', trap: 'plausible-fact' },
    'Regular insulin peaks at 2 to 4 hours, which is when the glucose is lowest and hypoglycaemia most likely.',
    { text: 'Twelve hours matches the tail of NPH, not the peak of regular insulin.', trap: 'plausible-fact' },
    { text: 'Twenty-four hours describes long-acting basal insulin such as glargine, which has little peak at all.', trap: 'plausible-fact' }
  ],
  'PHA-012': [
    { text: 'IV dextrose is for a client who cannot swallow safely. This client is alert and protecting their airway, so the oral route is both effective and less invasive.', trap: 'secondary' },
    'The rule of 15: 15 grams of fast-acting carbohydrate, recheck in 15 minutes, repeat if still low, then follow with a longer-acting carbohydrate and protein.',
    { text: 'Insulin at a glucose of 48 would be fatal. Check what the number is before giving a drug that lowers it.', trap: 'contraindicated' },
    { text: 'Protein raises glucose too slowly to treat an acute hypoglycaemic episode. It belongs after the fast carbohydrate, to prevent rebound.', trap: 'secondary' }
  ],
  'PHA-014': [
    { text: 'Glucose is unaffected by morphine and unrelated to its dangers.', trap: 'plausible-fact' },
    'Respiratory depression is the effect that kills, and rising sedation precedes it. Both are assessed before and after every dose, alongside pain and blood pressure.',
    { text: 'Sodium has no bearing on opioid safety.', trap: 'plausible-fact' },
    { text: 'Temperature is not affected by morphine in a way that changes whether it can be given.', trap: 'plausible-fact' }
  ],
  'PHA-015': [
    { text: 'The cough is dry and persistent rather than productive or febrile. Attributing it to infection delays recognising a drug effect.', trap: 'plausible-fact' },
    'ACE inhibitors block bradykinin breakdown, producing a dry cough in about one in ten clients. It does not resolve with continued use, and an angiotensin receptor blocker gives the same benefit without it.',
    { text: 'This is the specific misconception worth correcting: the cough does not accommodate. Waiting simply prolongs it.', trap: 'expected' },
    { text: 'Stopping an antihypertensive abruptly and without telling anyone risks rebound hypertension and leaves the client untreated.', trap: 'contraindicated' }
  ],
  'PHA-016': [
    { text: 'Antihistamines do not reverse ACE inhibitor angioedema, which is bradykinin-mediated rather than histamine-mediated. Observing while the airway closes is the danger.', trap: 'contraindicated' },
    'Lip and tongue swelling with breathing difficulty is angioedema, an airway emergency that can progress within minutes. Secure the airway, get help, stop the drug permanently.',
    { text: 'Another dose of the causative agent would worsen a life-threatening reaction.', trap: 'contraindicated' },
    { text: 'Deferring to rounds treats an evolving airway obstruction as a routine finding.', trap: 'late-sign' }
  ],
  'PHA-017': [
    { text: 'Loop diuretics waste potassium rather than retain it. Hyperkalaemia belongs with spironolactone, ACE inhibitors, and ARBs.', trap: 'plausible-fact' },
    'Furosemide increases renal excretion of potassium, magnesium, calcium, and sodium. Hypokalaemia matters most because it precipitates arrhythmia and potentiates digoxin toxicity.',
    { text: 'Loops waste calcium. It is thiazides that retain it.', trap: 'plausible-fact' },
    { text: 'Sodium is lost, not retained, which is part of how the drug reduces volume.', trap: 'plausible-fact' }
  ],
  'PHA-018': [
    { text: 'This is precisely backwards and dangerous. Salt substitutes are potassium chloride, and adding them to a potassium-sparing diuretic risks fatal hyperkalaemia.', trap: 'contraindicated' },
    'Spironolactone blocks aldosterone and therefore retains potassium. Supplements, salt substitutes, and potassium-rich foods all compound that effect.',
    { text: 'Diuretics are generally given in the morning to avoid nocturia. Timing is a real teaching point but not the one that prevents harm here.', trap: 'secondary' },
    { text: 'This describes a loop or thiazide diuretic. Spironolactone does the opposite.', trap: 'plausible-fact' }
  ],
  'PHA-019': [
    { text: 'Warmth is appropriate comfort care after the catheter is removed. Continuing the infusion keeps pushing fluid into tissue.', trap: 'contraindicated' },
    'Cool, pale, swollen with a slowing infusion is infiltration: fluid is entering the tissue rather than the vein. The catheter comes out before more damage is done.',
    { text: 'Flushing forces additional fluid into the tissue, and with a vesicant this is how extravasation necrosis happens.', trap: 'contraindicated' },
    { text: 'The resistance is the tissue, not an obstruction. Increasing the rate worsens the injury.', trap: 'contraindicated' }
  ],
  'PHA-022': [
    { text: 'Acute dystonia appears within hours to days as a sustained muscle contraction, not after two years as a rhythmic movement.', trap: 'plausible-fact' },
    'Lip smacking and tongue movements after prolonged antipsychotic therapy is tardive dyskinesia, which may be irreversible and must be reported early.',
    { text: 'Neuroleptic malignant syndrome is an acute crisis with fever, rigidity, and autonomic instability, not an isolated movement disorder.', trap: 'plausible-fact' },
    { text: 'Akathisia is a subjective inner restlessness with an urge to move, and it appears within days to weeks.', trap: 'plausible-fact' }
  ],
  'PHA-023': [
    { text: 'More dopamine blockade deepens the reaction that dopamine blockade caused.', trap: 'contraindicated' },
    'Anticholinergics reverse acute dystonia within minutes. This matters because dystonia can involve the larynx and become an airway emergency.',
    { text: 'Lithium is a mood stabiliser with no role in reversing extrapyramidal symptoms.', trap: 'plausible-fact' },
    { text: 'Naloxone reverses opioids and has no effect on dystonia.', trap: 'plausible-fact' }
  ],
  'PHA-025': [
    { text: 'This is the most dangerous piece of misinformation about steroids. Feeling well is not the criterion, because the adrenal glands recover on their own schedule.', trap: 'contraindicated' },
    'Long-term corticosteroids suppress the hypothalamic-pituitary-adrenal axis. Abrupt withdrawal leaves the client unable to produce cortisol, causing hypotension, hypoglycaemia, and shock.',
    { text: 'Stopping and restarting produces repeated cycles of adrenal suppression and withdrawal.', trap: 'contraindicated' },
    { text: 'Doubling then stopping deepens the suppression and then removes support abruptly — the worst of both.', trap: 'contraindicated' }
  ],
  'PHA-028': [
    { text: 'This is exactly backwards. Calcium, magnesium, aluminium, and iron chelate fluoroquinolones and block their absorption.', trap: 'contraindicated' },
    'Separate divalent and trivalent cations from the dose by at least two hours, use sun protection, and report tendon pain — fluoroquinolones carry a boxed warning for tendon rupture.',
    { text: 'Fluoroquinolones cause photosensitivity. Increasing sun exposure invites a severe burn.', trap: 'contraindicated' },
    { text: 'Fluoroquinolones are generally avoided in pregnancy and childhood because of effects on developing cartilage.', trap: 'contraindicated' }
  ],
  'PHA-029': [
    { text: 'Milk is the classic thing to avoid with tetracycline. Calcium binds it and absorption drops substantially.', trap: 'contraindicated' },
    'Tetracyclines chelate with cations, cause marked photosensitivity, and become nephrotoxic once degraded, which is why expired product is never used.',
    { text: 'Lying down after any tetracycline risks oesophageal ulceration. It is taken upright with plenty of water.', trap: 'contraindicated' },
    { text: 'Tetracyclines stain developing teeth and are avoided in pregnancy and in children under eight.', trap: 'contraindicated' }
  ],
  'PHA-030': [
    { text: 'Reversing the order means the steroid is deposited in airways that are still narrowed, so less of it reaches the distal lung where it is needed.', trap: 'plausible-fact' },
    'The bronchodilator opens the airways so the corticosteroid can reach distal lung tissue, and rinsing after the steroid prevents oral candidiasis.',
    { text: 'Order changes how much drug reaches the target. It is not arbitrary.', trap: 'plausible-fact' },
    { text: 'Simultaneous use is not possible with separate inhalers, and the waiting interval between them is part of the technique.', trap: 'plausible-fact' }
  ],
  'PHA-031': [
    { text: 'Tremor and palpitations are adrenergic effects of the drug working, not immune-mediated. Discontinuing a rescue inhaler over them would be harmful.', trap: 'plausible-fact' },
    'Beta-2 agonists retain some beta-1 activity, producing tremor, tachycardia, and nervousness that usually diminish with continued use. Chest pain or persistent tachycardia warrants evaluation.',
    { text: 'These are effects of the dose given, not evidence of underdosing.', trap: 'plausible-fact' },
    { text: 'An asthma attack presents with wheeze, dyspnoea, and falling peak flow. Tremor is a drug effect.', trap: 'plausible-fact' }
  ],
  'PHA-032': [
    { text: 'Heat dramatically increases fentanyl absorption and has caused fatal overdoses. Heating pads, hot baths, and fever all matter.', trap: 'contraindicated' },
    'Clean dry intact skin, rotated sites, the old patch removed to prevent dose stacking, and no external heat. Transdermal fentanyl is for opioid-tolerant clients with chronic pain only.',
    { text: 'Cutting a patch destroys the rate-controlling membrane and releases the full reservoir at once.', trap: 'contraindicated' },
    { text: 'Transdermal fentanyl takes 12 to 24 hours to reach effect and is never used for acute pain or in an opioid-naive client.', trap: 'contraindicated' }
  ],
  'BCC-025': [
    { text: 'Mashed potatoes meet mechanical soft — cohesive, requiring no chewing, and forming a controlled bolus.', trap: 'expected' },
    { text: 'Ground meat with gravy is moistened and cohesive, which is what mechanical soft means.', trap: 'expected' },
    'Thin liquids are the hardest to control and the most likely to be aspirated. Ice melts into thin liquid, which is why it counts as thin rather than solid.',
    { text: 'Pudding is naturally thick and cohesive, meeting both the texture and consistency requirements.', trap: 'expected' }
  ],
  'BCC-026': [
    { text: 'Dry gauze desiccates the wound bed, and healing epithelium cannot migrate across a dry surface.', trap: 'contraindicated' },
    'Moist wound healing accelerates granulation and epithelialisation while absorbing excess exudate — keep the wound moist and the surrounding skin dry.',
    { text: 'Wet-to-dry is mechanical debridement. It strips the healthy granulation tissue you are trying to protect along with anything else.', trap: 'contraindicated' },
    { text: 'Leaving the wound open invites contamination and lets it dry out.', trap: 'contraindicated' }
  ],
  'BCC-027': [
    { text: 'Supine positioning worsens upper airway obstruction, which is the entire pathology of sleep apnoea.', trap: 'contraindicated' },
    'Clients with sleep apnoea are highly vulnerable to opioid-induced respiratory depression. CPAP, continuous oxygenation and sedation monitoring, and cautious multimodal analgesia.',
    { text: 'Generous sedation in a client who already obstructs is how postoperative respiratory arrests happen.', trap: 'contraindicated' },
    { text: 'Withholding analgesia entirely is neither necessary nor humane. Multimodal analgesia reduces the opioid requirement without leaving the client in pain.', trap: 'contraindicated' }
  ],
  'BCC-028': [
    'Cleaning outward from the meatus moves organisms away from the entry point, with a clean cloth surface for each stroke.',
    { text: 'Cleaning toward the meatus drags organisms from the tubing directly to the urethral opening.', trap: 'contraindicated' },
    { text: 'Reusing a cloth surface redeposits what you just removed.', trap: 'contraindicated' },
    { text: 'Powder cakes in moisture and harbours bacteria against the perineum.', trap: 'contraindicated' }
  ],
  'BCC-029': [
    { text: 'Continuous pillow elevation holds the knee and hip in flexion, which is exactly how the contracture forms.', trap: 'contraindicated' },
    'Flexion contracture at the hip and knee is the major barrier to prosthetic fitting. Prone positioning and extension prevent it.',
    { text: 'Keeping the knee flexed for comfort trades short-term comfort for a limb that cannot be fitted with a prosthesis.', trap: 'comfort-over-abc' },
    { text: 'Immobility promotes rather than prevents contracture.', trap: 'contraindicated' }
  ],
  'BCC-030': [
    { text: 'Tannins in tea bind iron in the gut and substantially reduce absorption.', trap: 'contraindicated' },
    'Ascorbic acid converts iron to the more absorbable ferrous form and markedly increases uptake.',
    { text: 'Calcium in dairy competes directly with iron for absorption.', trap: 'contraindicated' },
    { text: 'Antacids raise gastric pH, and iron needs an acidic environment to be absorbed.', trap: 'contraindicated' }
  ],
  'BCC-031': [
    { text: 'Prone gives no gravitational advantage and makes the anatomy work against the solution.', trap: 'contraindicated' },
    'Left lateral Sims follows the anatomy of the descending and sigmoid colon, letting solution flow with gravity and be retained.',
    { text: 'Right lateral positions the client against the direction of the descending colon.', trap: 'contraindicated' },
    { text: 'Supine with legs extended gives neither access nor gravitational assistance.', trap: 'contraindicated' }
  ],
  'BCC-032': [
    { text: 'Absence of complaint is not absence of pain in someone who has lost the language to report it. This assumption is the reason dementia pain is systematically undertreated.', trap: 'contraindicated' },
    'Behavioural scales such as PAINAD are validated for nonverbal clients, and improvement after an analgesic trial supports the assessment.',
    { text: 'Family observations are valuable context but are not a validated substitute for structured observation.', trap: 'secondary' },
    { text: 'Vital signs are unreliable indicators of chronic pain and normalise even while pain persists.', trap: 'plausible-fact' }
  ],
  'BCC-033': [
    { text: 'Stage 2 is partial-thickness loss with a visible wound bed. Here nothing is visible.', trap: 'plausible-fact' },
    'Eschar or slough obscuring the base makes depth impossible to determine, so the injury is unstageable. Stable dry eschar on an ischaemic heel is generally left intact as a biological cover.',
    { text: 'Black eschar is devitalised tissue, not healed skin.', trap: 'contraindicated' },
    { text: 'Stage 1 requires intact skin. Eschar means the skin is not intact.', trap: 'plausible-fact' }
  ],
  'BCC-034': [
    { text: 'Abrupt cessation of a high dextrose infusion causes rebound hypoglycaemia as circulating insulin persists without the substrate.', trap: 'contraindicated' },
    'Parenteral nutrition delivers a high dextrose load requiring glucose monitoring, tapering on discontinuation, and a dedicated line with strict asepsis.',
    { text: 'Nothing is added to a parenteral nutrition bag — incompatibilities and contamination risk are both unacceptable.', trap: 'contraindicated' },
    { text: 'Bags and tubing are changed every 24 hours because of the growth medium the solution provides.', trap: 'contraindicated' }
  ],
  'BCC-035': [
    { text: 'Once the legs have been dependent, oedema has already formed and the stockings compress a swollen limb.', trap: 'contraindicated' },
    'Stockings go on before dependent oedema develops, smooth and unwrinkled, because a fold or rolled band creates a tourniquet that impairs the venous return it is meant to assist.',
    { text: 'Rolling the top down converts a graduated compression garment into a constricting band.', trap: 'contraindicated' },
    { text: 'Skin is assessed with each removal, and applying over a dressing without looking misses developing breakdown.', trap: 'contraindicated' }
  ],
  'BCC-036': [
    { text: 'Untreated pain is itself a powerful relapse trigger, so withholding analgesia produces the outcome it is trying to prevent.', trap: 'contraindicated' },
    'Opioid tolerance means higher doses are often needed for the same relief. Multimodal analgesia and specialist involvement optimise control.',
    { text: 'Acetaminophen alone is inadequate for severe postoperative pain in anyone, and particularly in a tolerant client.', trap: 'contraindicated' },
    { text: 'Telling a client to tolerate severe postoperative pain is neither clinical care nor defensible.', trap: 'contraindicated' }
  ],
  'BCC-037': [
    { text: 'Alcohol damages the casing and can degrade the components.', trap: 'contraindicated' },
    'Hearing aids are cleaned dry, and opening the battery door when not in use conserves the battery and lets moisture escape.',
    { text: 'Submersion destroys the electronics.', trap: 'contraindicated' },
    { text: 'Refrigeration causes condensation inside the device.', trap: 'contraindicated' }
  ],
  'BCC-039': [
    { text: 'Analgesia does nothing about a blood pressure that may reach stroke range, and the headache is a symptom rather than the problem.', trap: 'comfort-over-abc' },
    'Autonomic dysreflexia is a hypertensive emergency from a noxious stimulus below the injury. Sitting upright uses orthostasis to lower pressure while the trigger — usually a distended bladder — is found and relieved.',
    { text: 'Lying flat raises blood pressure further in a client who may already be at stroke range.', trap: 'contraindicated' },
    { text: 'Oxygen and monitoring do not address the stimulus that is driving the crisis.', trap: 'secondary' }
  ],
  'BCC-040': [
    { text: 'Total sleep requirement stays around 7 to 8 hours. It is the efficiency that declines, not the need.', trap: 'plausible-fact' },
    'Sleep architecture changes with age — less slow-wave sleep, more awakenings, and an earlier circadian phase — but total requirement is largely stable.',
    { text: 'Frequent night waking is common with age and is not itself pathological, though the causes are worth reviewing.', trap: 'plausible-fact' },
    { text: 'Long daytime naps reduce night-time sleep drive and worsen the fragmentation.', trap: 'contraindicated' }
  ],
  'BCC-041': [
    { text: 'Supine flat during feeding lets gastric contents reflux into the pharynx, which is the mechanism of aspiration.', trap: 'contraindicated' },
    'Elevating to 30 to 45 degrees uses gravity to reduce reflux during and after feeding.',
    { text: 'Head-down positioning actively directs gastric contents toward the airway.', trap: 'contraindicated' },
    { text: 'Prone compresses the abdomen and raises intragastric pressure.', trap: 'contraindicated' }
  ],
  'BCC-042': [
    { text: 'Pruritus is a common and treatable effect of neuraxial opioids.', trap: 'expected' },
    'Respiratory depression with rising sedation is the most dangerous complication of neuraxial opioids. Stop the infusion, stimulate, oxygen, prepare naloxone.',
    { text: 'Numbness in the surgical dermatome is the intended effect of the block.', trap: 'expected' },
    { text: 'Pain of 3 out of 10 represents acceptable control.', trap: 'expected' }
  ],
  'BCC-043': [
    { text: 'Fresh vegetables and whole grains are low in purines and are encouraged.', trap: 'expected' },
    'Organ meats, certain seafood, and alcohol — beer especially — are high in purines that metabolise to uric acid.',
    { text: 'Low-fat dairy is associated with lower uric acid and fewer flares.', trap: 'expected' },
    { text: 'Cherries and generous water intake are both associated with fewer attacks.', trap: 'expected' }
  ],
  'BCC-044': [
    { text: 'Evisceration is protrusion of viscera through the wound. Here the tissue is separated but contained — and ambulating either one is exactly wrong.', trap: 'contraindicated' },
    'Wound dehiscence is separation of the wound edges. Sterile moist gauze, low Fowler with knees flexed to reduce tension, and urgent surgical notification.',
    { text: 'Visible subcutaneous tissue on day 5 is not normal healing and can progress to evisceration with any strain.', trap: 'expected' },
    { text: 'Antibiotic ointment treats a surface infection and does nothing about a wound that has come apart.', trap: 'contraindicated' }
  ],
  'BCC-045': [
    { text: 'The urge to void is subjective and present in many conditions, including infection and irritation without retention.', trap: 'plausible-fact' },
    'A bladder scan quantifies retained volume objectively and non-invasively. Residuals over about 300 to 400 mL indicate significant retention.',
    { text: 'Four hours without voiding may be entirely normal depending on intake.', trap: 'plausible-fact' },
    { text: 'Abdominal discomfort is suggestive but not confirmatory, and it has many other causes.', trap: 'plausible-fact' }
  ],
  'BCC-046': [
    { text: 'High protein generates more ammonia in a liver that cannot clear it, worsening the encephalopathy.', trap: 'contraindicated' },
    'Protein is no longer severely restricted because malnutrition worsens outcomes. Moderate intake favouring vegetable and dairy sources is better tolerated.',
    { text: 'Complete protein elimination causes muscle catabolism, which generates more ammonia than the diet did. This is the outdated teaching worth unlearning.', trap: 'contraindicated' },
    { text: 'Sodium is restricted in cirrhosis because of ascites and oedema.', trap: 'contraindicated' }
  ],
  'BCC-047': [
    { text: 'Calf massage can dislodge an existing thrombus into the pulmonary circulation. This is a genuinely dangerous habit.', trap: 'contraindicated' },
    'Mechanical compression, active ankle exercises, hydration, and early mobilisation together counter the venous stasis of immobility.',
    { text: 'A pillow under the knees obstructs popliteal venous return — the opposite of the goal.', trap: 'contraindicated' },
    { text: 'Crossed ankles compress the popliteal veins.', trap: 'contraindicated' }
  ],
  'BCC-048': [
    { text: 'Tolerance to nausea develops within days.', trap: 'plausible-fact' },
    { text: 'Tolerance to sedation also develops within days, which is why clients function normally on stable doses.', trap: 'plausible-fact' },
    'Opioid-induced constipation persists for the entire duration of therapy. A bowel regimen starts with the opioid rather than after symptoms appear.',
    { text: 'Pruritus is common early and typically diminishes.', trap: 'plausible-fact' }
  ],
  'BCC-049': [
    { text: 'A catheter carries infection risk and does nothing about stool, which is the more damaging irritant.', trap: 'contraindicated' },
    'Gentle cleansing, a barrier product, and wicking containment protect the skin from urine and stool.',
    { text: 'Air alone leaves the skin exposed to the next incontinent episode with no protection.', trap: 'contraindicated' },
    { text: 'Hot water and soap strip the acid mantle from skin that is already compromised.', trap: 'contraindicated' }
  ],
  'BCC-050': [
    { text: '1040 counts the liquids but omits the ice chips entirely.', trap: 'plausible-fact' },
    'Juice 240, coffee 180, gelatin 120, IV 500 equals 1040, plus 6 ounces of ice recorded as half its melted volume — 90 mL. Total 1130 mL.',
    { text: '1220 counts the ice chips at their full 180 mL rather than half.', trap: 'plausible-fact' },
    { text: '1400 exceeds the total even counting everything at full volume.', trap: 'plausible-fact' }
  ],
  'BCC-051': [
    { text: 'A full pouch is heavy enough to break the seal, which produces the leak and the skin damage that follows.', trap: 'contraindicated' },
    'Emptying at one-third full prevents the weight breaking the seal, with appliance changes every 3 to 7 days or immediately for any leak.',
    { text: 'Daily changes traumatise peristomal skin unnecessarily.', trap: 'contraindicated' },
    { text: 'Alcohol-based products dry and damage peristomal skin rather than protecting it.', trap: 'contraindicated' }
  ],
  'BCC-052': [
    { text: 'Lenses left in an unconscious client cause corneal abrasion and ulceration, because blinking and tear film are both impaired.', trap: 'contraindicated' },
    'The lenses are removed promptly, stored appropriately, and the removal documented.',
    { text: 'Saline drops do not compensate for the absent blink reflex, and the lens still sits against a drying cornea.', trap: 'contraindicated' },
    { text: 'This is a nursing responsibility and delegating it to family delays it unpredictably.', trap: 'wrong-scope' }
  ],
  'BCC-053': [
    { text: 'Nociceptive pain is aching and localised, arising from tissue injury rather than nerve damage, and NSAIDs are poorly effective against neuropathic pain.', trap: 'plausible-fact' },
    'Burning, shooting, electric-quality pain following a nerve distribution is neuropathic, and it responds to anticonvulsants and certain antidepressants rather than to opioids and anti-inflammatories alone.',
    { text: 'Visceral pain is deep, cramping, and poorly localised.', trap: 'plausible-fact' },
    { text: 'Opioids alone are notably poor at controlling neuropathic pain, which is why adjuvants exist.', trap: 'contraindicated' }
  ],
  'BCC-054': [
    { text: 'Mild discomfort in a traction limb is expected and managed with analgesia and positioning.', trap: 'expected' },
    'Pallor, coolness, and an absent pulse indicate neurovascular compromise from excessive traction pressure — the six Ps in action.',
    { text: 'Freely hanging weights is the desired finding. Weights resting on the floor is the problem.', trap: 'expected' },
    { text: 'Supine alignment with the pull of the traction is correct positioning.', trap: 'expected' }
  ],
  'BCC-055': [
    { text: 'Apple juice without pulp is transparent and leaves minimal residue.', trap: 'expected' },
    { text: 'Chicken broth is a clear liquid.', trap: 'expected' },
    'Cream soup is opaque and belongs to a full liquid diet, along with milk, ice cream, and pudding.',
    { text: 'Gelatin is transparent at room temperature and counts as a clear liquid — and as fluid intake.', trap: 'expected' }
  ],
  'BCC-056': [
    { text: 'Scattered individual visits maximise the number of interruptions, which is the actual cause of the problem.', trap: 'contraindicated' },
    'Clustering care and questioning whether overnight vital signs are clinically necessary in a stable client measurably increases uninterrupted sleep.',
    { text: 'Overhead lights suppress melatonin and wake the client fully for each check.', trap: 'contraindicated' },
    { text: 'Waking a client to ask about their sleep is self-defeating in a way worth noticing.', trap: 'contraindicated' }
  ],
  'BCC-057': [
    { text: 'The first void contains urine formed before the collection period began, so including it overstates the result.', trap: 'contraindicated' },
    'Discard the first voiding, note the start time, collect everything for 24 hours, and include the final void at the end.',
    { text: 'Daytime-only collection misses roughly half the period and invalidates the test.', trap: 'contraindicated' },
    { text: 'Most 24-hour collections require refrigeration or ice, and many require a preservative.', trap: 'contraindicated' }
  ],
  'BCC-058': [
    { text: 'On the Braden Scale lower scores mean greater risk. Twelve is well into the high-risk range.', trap: 'plausible-fact' },
    'Braden runs 6 to 23 with lower scores indicating greater risk: 15 to 18 mild, 13 to 14 moderate, 10 to 12 high, 9 or below very high.',
    { text: 'Mild risk is 15 to 18. Twelve is two categories more severe than that.', trap: 'plausible-fact' },
    { text: 'The scale predicts risk. It does not detect an injury that already exists.', trap: 'plausible-fact' }
  ],
  'BCC-059': [
    { text: 'Electrodes on broken skin cause burns and irritation, and the current density over damaged tissue is unpredictable.', trap: 'contraindicated' },
    'Electrodes go on intact skin near the pain, avoiding the carotid sinus and the chest in clients with implanted cardiac devices, with intensity set to a comfortable tingle.',
    { text: 'Maximum intensity causes muscle contraction and skin irritation without improving analgesia.', trap: 'contraindicated' },
    { text: 'Continuous use causes skin irritation and reduces effectiveness through accommodation.', trap: 'contraindicated' }
  ],
  'BCC-060': [
    { text: 'Skin turgor is unreliable in older adults because reduced elasticity makes tenting normal regardless of hydration.', trap: 'plausible-fact' },
    'Weight, mucous membranes, orthostatic changes, and urine output together give a reliable picture in older adults.',
    { text: 'The thirst mechanism blunts with age, so its absence does not exclude dehydration.', trap: 'plausible-fact' },
    { text: 'Sunken eyes are a late and non-specific finding, and periorbital fat loss with age mimics it.', trap: 'late-sign' }
  ],
  'BCC-061': [
    { text: 'More opioid for pain that opioids are not relieving delays recognition of the compartment pressure causing it.', trap: 'contraindicated' },
    'Pain out of proportion, unrelieved by opioids and worsened by passive stretch, is compartment syndrome requiring immediate cast bivalving and possible fasciotomy.',
    { text: 'Elevating above heart level reduces arterial inflow and worsens ischaemia in established compartment syndrome. The limb is kept at heart level.', trap: 'contraindicated' },
    { text: 'Reassurance here delays a limb-threatening emergency by hours.', trap: 'contraindicated' }
  ],
  'BCC-062': [
    { text: 'Soaking macerates the skin and softens tissue that is already vulnerable, and it is a classic outdated recommendation.', trap: 'contraindicated' },
    'Thorough drying between the toes prevents fungal infection, and lotion goes everywhere except between the toes where retained moisture macerates skin.',
    { text: 'Aggressive callus removal creates wounds that heal poorly in a neuropathic, poorly perfused foot.', trap: 'contraindicated' },
    { text: 'Lotion between the toes is the specific error — it traps moisture and promotes fungal breakdown.', trap: 'contraindicated' }
  ],
  'BCC-063': [
    { text: 'Escalating oxygen beyond correcting hypoxaemia does not relieve the sensation of breathlessness, which is centrally mediated.', trap: 'secondary' },
    'Low-dose opioids are the most effective treatment for terminal dyspnoea, and airflow across the face activates trigeminal receptors that reduce the sensation.',
    { text: 'Severe fluid restriction causes distress without relieving dyspnoea.', trap: 'contraindicated' },
    { text: 'Faster breathing increases the work of breathing and worsens the sensation.', trap: 'contraindicated' }
  ],
  'BCC-064': [
    { text: 'Sterile technique at home is impractical, expensive, and no better than clean technique in this population.', trap: 'plausible-fact' },
    'Clean intermittent catheterisation at home has infection rates comparable to sterile technique, provided hand hygiene and scheduled emptying are maintained.',
    { text: 'Neurogenic bladder impairs sensation, so bladder fullness is an unreliable cue. Catheterisation is scheduled by time.', trap: 'contraindicated' },
    { text: 'Reusing uncleaned catheters for a month is a direct route to infection.', trap: 'contraindicated' }
  ],
  'BCC-066': [
    { text: 'Complete rest causes stiffness, muscle loss, and cartilage deconditioning, which worsen the arthritis.', trap: 'contraindicated' },
    'Low-impact activity preserves cartilage nutrition and strengthens supporting muscle, with heat before activity and cold after if the joint is inflamed.',
    { text: 'High-impact loading accelerates cartilage damage in an already degenerating joint.', trap: 'contraindicated' },
    { text: 'Continuous immobilisation causes contracture and does nothing for the underlying degeneration.', trap: 'contraindicated' }
  ],
  'BCC-067': [
    { text: 'Granulation tissue is beefy red and moist. Yellow and stringy is devitalised.', trap: 'plausible-fact' },
    'Yellow, stringy, moist devitalised tissue is slough, which harbours bacteria and prevents healing. Red protect, yellow cleanse, black debride.',
    { text: 'Epithelial tissue is pink and migrating from the wound edges, and it is kept moist rather than dry.', trap: 'plausible-fact' },
    { text: 'Eschar is black and leathery. Stable dry eschar on an ischaemic heel is left intact, but that is not this wound.', trap: 'plausible-fact' }
  ],
  'BCC-068': [
    { text: 'Another opioid dose in a client with a respiratory rate of 6 and pinpoint pupils would likely be fatal.', trap: 'contraindicated' },
    'Opioid-induced respiratory depression is treated with stimulation, ventilatory support, oxygen, and naloxone titrated to restore respiration.',
    { text: 'Documenting and monitoring watches a client who is not breathing adequately.', trap: 'contraindicated' },
    { text: 'Head-down positioning does not improve ventilation and impairs diaphragmatic excursion.', trap: 'contraindicated' }
  ],
  'BCC-069': [
    { text: 'Milk carries a full lactose load and is what the client cannot tolerate.', trap: 'contraindicated' },
    'Aged cheeses contain minimal lactose and yogurt with live cultures supplies bacterial lactase, so both are commonly tolerated.',
    { text: 'Ice cream carries a substantial lactose load.', trap: 'contraindicated' },
    { text: 'Cream sauces are concentrated dairy.', trap: 'contraindicated' }
  ],
  'BCC-070': [
    { text: 'Independently altering the fluid rate is prescribing, and it treats a cause that has not been established.', trap: 'wrong-scope' },
    'Output below 30 mL per hour requires assessment for mechanical causes such as an obstructed catheter as well as physiological ones, then provider notification.',
    { text: 'Twenty-five millilitres an hour is below the threshold for adequate renal perfusion and is not normal.', trap: 'expected' },
    { text: 'A diuretic in a client who may be hypovolaemic worsens the perfusion problem.', trap: 'contraindicated' }
  ],
  'BCC-071': [
    { text: 'Quick turns are a common trigger for freezing and falls in Parkinson disease.', trap: 'contraindicated' },
    'External cueing bypasses the impaired internal movement generation — lines on the floor, rhythmic counting or music, and a wide turning arc.',
    { text: 'Looking down shifts the centre of gravity forward, which compounds the already forward-flexed posture.', trap: 'contraindicated' },
    { text: 'Occupied hands remove the ability to catch a fall and eliminate arm swing.', trap: 'contraindicated' }
  ],
  'BCC-072': [
    { text: 'Waiting passively through severe unrelieved pain misses the possibility that the pain has a new cause.', trap: 'contraindicated' },
    'Severe pain unrelieved by an adequate dose may signal a complication — compartment syndrome, bleeding, ischaemia, perforation — and warrants reassessment before more analgesia.',
    { text: 'Substituting relaxation for analgesia in pain rated 9 out of 10 is inadequate and dismissive.', trap: 'contraindicated' },
    { text: 'Dosing early without an order is prescribing, and it treats the symptom without asking why it is not responding.', trap: 'wrong-scope' }
  ],
  'BCC-073': [
    { text: 'Food substantially reduces levothyroxine absorption, and taking it with breakfast makes the dose unpredictable.', trap: 'contraindicated' },
    'Empty stomach with water 30 to 60 minutes before breakfast, with calcium, iron, and antacids separated by at least 4 hours.',
    { text: 'Calcium binds levothyroxine directly and blocks absorption.', trap: 'contraindicated' },
    { text: 'A bedtime snack reintroduces the food interaction the fasting requirement exists to avoid.', trap: 'contraindicated' }
  ],
  'BCC-074': [
    { text: 'Alcohol-based mouthwash burns and dries inflamed mucosa.', trap: 'contraindicated' },
    'Bland frequent rinses, atraumatic cleaning, and avoidance of irritants protect fragile mucosa, with analgesia before meals so the client can eat.',
    { text: 'Lemon-glycerin swabs dry and irritate tissue, and the acid stings. This is another outdated practice.', trap: 'contraindicated' },
    { text: 'Vigorous brushing with a firm brush causes bleeding, particularly in a thrombocytopenic client.', trap: 'contraindicated' }
  ],
  'BCC-075': [
    { text: 'Hand hygiene before and after dressing changes is exactly right.', trap: 'expected' },
    'Hydrogen peroxide is cytotoxic to fibroblasts and delays healing. Gentle cleansing with soap and water or saline is preferred.',
    { text: 'Recognising and reporting infection signs is correct teaching.', trap: 'expected' },
    { text: 'Activity restriction until cleared protects the healing incision.', trap: 'expected' }
  ],
  'BCC-076': [
    { text: 'Caffeine worsens restless legs and further fragments sleep.', trap: 'contraindicated' },
    'Iron deficiency is a common and treatable cause, so ferritin is checked, alongside sleep regularity, movement, and avoiding evening stimulants.',
    { text: 'Sedating antihistamines commonly exacerbate restless legs, as do metoclopramide and some antidepressants.', trap: 'contraindicated' },
    { text: 'Remaining still intensifies the urge to move — movement is what temporarily relieves it.', trap: 'contraindicated' }
  ],
  'BCC-077': [
    { text: 'Stopping the irrigation lets clots consolidate and obstruct completely, causing bladder distention and haemorrhage.', trap: 'contraindicated' },
    'Increased bleeding with clots and a sensation of fullness suggests clot obstruction. The rate is increased to clear them and the catheter hand-irrigated per order.',
    { text: 'Clamping traps urine and clots in a bladder that is already distending.', trap: 'contraindicated' },
    { text: 'A diuretic adds urine above an obstruction.', trap: 'contraindicated' }
  ],
  'BCC-078': [
    { text: 'Refined white bread is low residue and permitted.', trap: 'expected' },
    'Low-residue diets restrict fibre to reduce stool bulk, so whole grains, nuts, seeds, raw vegetables, and skins are excluded.',
    { text: 'Well-cooked peeled vegetables are low residue and permitted.', trap: 'expected' },
    { text: 'Plain white rice is a refined grain with minimal residue.', trap: 'expected' }
  ],
  'BCC-079': [
    { text: 'Telling the client the sensation is impossible denies a real neurological phenomenon and damages the relationship.', trap: 'contraindicated' },
    'Phantom limb pain arises from central nervous system reorganisation, is genuinely experienced, and responds to neuropathic agents, mirror therapy, and desensitisation.',
    { text: 'Framing it as psychological leaves treatable pain untreated and implies the client is imagining it.', trap: 'contraindicated' },
    { text: 'Telling the client not to think about it dismisses the symptom and offers nothing.', trap: 'contraindicated' }
  ],
  'BCC-080': [
    { text: 'Head elevation at 30 degrees with a neutral neck optimises jugular venous drainage.', trap: 'expected' },
    'Hip flexion raises intra-abdominal and intrathoracic pressure while neck rotation obstructs jugular outflow — both raise intracranial pressure.',
    { text: 'Log rolling with head support maintains alignment during position changes.', trap: 'expected' },
    { text: 'Side lying with the head supported in alignment preserves venous drainage.', trap: 'expected' }
  ],
  'BCC-001': [
    { text: 'Potatoes are among the highest-potassium foods, and the skin concentrates it further.', trap: 'contraindicated' },
    'White rice and green beans are low in potassium, phosphorus, and sodium — the three restricted in a renal diet.',
    { text: 'Bananas and orange juice are the two foods most often named as high-potassium, and both are here in one option.', trap: 'contraindicated' },
    { text: 'Canned soup is very high in sodium and tomato is high in potassium. Crackers add more sodium.', trap: 'contraindicated' }
  ],
  'BCC-002': [
    { text: 'Complete elimination destabilises the INR just as surely as excess does, and it removes an entire food group unnecessarily.', trap: 'contraindicated' },
    'Warfarin antagonises vitamin K, so what matters is consistency. The dose is titrated against the client\'s usual intake.',
    { text: 'Unlimited spinach means unpredictable vitamin K, which drives the INR down and leaves the client unprotected.', trap: 'contraindicated' },
    { text: 'Vitamin K is the direct antagonist of warfarin\'s mechanism. This is the one thing it certainly does affect.', trap: 'plausible-fact' }
  ],
  'BCC-004': [
    'Stage 1 is intact skin with non-blanchable erythema. Intact is the defining word.',
    { text: 'Stage 2 requires partial-thickness loss — an open shallow ulcer or an intact or ruptured serum-filled blister.', trap: 'plausible-fact' },
    { text: 'Stage 3 extends into subcutaneous fat, which requires the skin to be broken.', trap: 'plausible-fact' },
    { text: 'Deep tissue injury is persistent non-blanchable deep red, maroon, or purple discoloration, or a blood-filled blister. This erythema is neither.', trap: 'plausible-fact' }
  ],
  'BCC-005': [
    { text: 'Treating this as infectious diarrhoea leads to an antidiarrhoeal, which worsens the impaction and can precipitate obstruction.', trap: 'contraindicated' },
    'Liquid stool seeping around a retained hard mass is overflow incontinence from impaction. Digital assessment, an oil retention enema, and disimpaction per policy follow.',
    { text: 'Irritable bowel does not produce a palpable hard mass with four days of obstipation.', trap: 'plausible-fact' },
    { text: 'Four days without a bowel movement followed by leaking liquid stool is not normal variation in anyone.', trap: 'expected' }
  ],
  'BCC-006': [
    { text: 'Documenting no pain against the client\'s own report substitutes the nurse\'s inference for the only measure of pain that exists.', trap: 'contraindicated' },
    'Pain is subjective and clients use distraction and social interaction to cope, particularly with chronic pain. The self-report is the standard.',
    { text: 'Confronting the client about the mismatch communicates disbelief and is a well-documented route to undertreatment.', trap: 'contraindicated' },
    { text: 'Unilaterally reducing an ordered dose is both prescribing and undertreating.', trap: 'wrong-scope' }
  ],
  'BCC-008': [
    { text: 'Discarding the aspirate discards electrolytes and gastric acid, and continuing at the same rate ignores that the stomach is not emptying.', trap: 'contraindicated' },
    'A residual of 350 mL indicates delayed gastric emptying and aspiration risk. The feeding is held, the aspirate returned per policy, and tolerance reassessed.',
    { text: 'Increasing the rate adds volume to a stomach that has not emptied what it already holds.', trap: 'contraindicated' },
    { text: 'A 200 mL water flush adds substantial volume on top of an already high residual.', trap: 'contraindicated' }
  ],
  'BCC-009': [
    { text: 'Sedative-hypnotics increase delirium and falls in hospitalised clients and are not first-line for a problem the environment is causing.', trap: 'contraindicated' },
    'Clustering care, dimming lights, reducing noise, and offering comfort measures address the actual cause of hospital sleep disruption at no risk.',
    { text: 'Daytime napping reduces night-time sleep drive and deepens the fragmentation.', trap: 'contraindicated' },
    { text: 'Television light and sound both interfere with sleep onset and continuity.', trap: 'contraindicated' }
  ],
  'BCC-010': [
    { text: 'Supine and flat in a client without a gag reflex is how oral care causes aspiration pneumonia.', trap: 'contraindicated' },
    'Side-lying with the head turned lets fluid drain out rather than down, and suction removes what pools. Both are essential without a gag reflex.',
    { text: 'Generous fluid in a client who cannot protect their airway increases the volume available to aspirate.', trap: 'contraindicated' },
    { text: 'Fingers in the mouth of an unconscious client risks a bite injury. A padded device is used instead.', trap: 'contraindicated' }
  ],
  'BCC-011': [
    { text: 'This reverses both halves. Leading up with crutches puts the weight on the arms at the moment the legs should lift.', trap: 'plausible-fact' },
    'Up with the good, down with the bad. The strong leg pulls the body up; going down, the crutches and weak leg descend first to accept the load.',
    { text: 'Leading with the weak leg going up asks it to bear the body weight it cannot support.', trap: 'contraindicated' },
    { text: 'Carrying the crutches removes the support entirely and occupies the hand that would grip the rail.', trap: 'contraindicated' }
  ],
  'BCC-012': [
    { text: 'Daily stimulant laxatives cause dependence, and the bowel becomes progressively less responsive without them.', trap: 'contraindicated' },
    'Fibre increased gradually with adequate fluid and increased activity addresses the physiology. Fibre without fluid makes constipation worse.',
    { text: 'Reducing fluid hardens stool, which is the opposite of the goal.', trap: 'contraindicated' },
    { text: 'Habitually ignoring the urge blunts the defecation reflex over time.', trap: 'contraindicated' }
  ],
  'BCC-013': [
    { text: 'Wheat is the primary gluten grain and the most obvious wrong answer here, which is why the subtler ones matter more.', trap: 'contraindicated' },
    'Rice and corn are naturally gluten free, and grilled chicken carries no gluten unless it has been breaded or marinated.',
    { text: 'Barley contains gluten and is easy to overlook because it hides in soups and malt products.', trap: 'contraindicated' },
    { text: 'Rye is a gluten grain, and rye crackers are a common oversight because they read as a healthier choice than wheat.', trap: 'contraindicated' }
  ],
  'BCC-014': [
    { text: 'Massaging a reddened bony prominence damages already-compromised tissue and is a genuinely outdated practice worth unlearning.', trap: 'contraindicated' },
    'Frequent repositioning, an appropriate support surface, moisture management, and nutrition together prevent pressure injury.',
    { text: 'Donut cushions concentrate pressure in a ring and impair circulation to the tissue inside it.', trap: 'contraindicated' },
    { text: 'Sustained elevation above 30 degrees creates shear across the sacrum as the client slides.', trap: 'contraindicated' }
  ],
  'BCC-015': [
    { text: 'Reminding the client the button is available is appropriate encouragement.', trap: 'expected' },
    'Only the client may press the button. A sedated client cannot press it, and that is precisely the safety mechanism preventing overdose.',
    { text: 'Asking about the medication is exactly what family should do.', trap: 'expected' },
    { text: 'Pre-emptive dosing by the client before activity is good pain management.', trap: 'expected' }
  ],
  'BCC-016': [
    { text: 'Moving into pain causes tissue damage. Resistance, not pain, is the endpoint.', trap: 'contraindicated' },
    'Supporting the limb above and below the joint with slow controlled movement to the point of resistance maintains mobility without injury.',
    { text: 'Rapid movement risks injury and can trigger spasticity in a client with neurological impairment.', trap: 'contraindicated' },
    { text: 'Small joints contract just as readily as large ones and need the same attention.', trap: 'secondary' }
  ],
  'BCC-017': [
    { text: 'Sodium reflects fluid balance rather than protein stores.', trap: 'plausible-fact' },
    'Albumin has a long half-life and reflects protein status over weeks, though inflammation, liver disease, and fluid shifts also lower it. Prealbumin tracks shorter-term change.',
    { text: 'Potassium reflects electrolyte balance rather than nutritional status.', trap: 'plausible-fact' },
    { text: 'Glucose reflects carbohydrate metabolism and gives no information about protein stores.', trap: 'plausible-fact' }
  ],
  'BCC-018': [
    { text: 'Stopping the stream is useful once to identify the muscle. Doing it habitually causes incomplete emptying and urinary tract infection.', trap: 'plausible-fact' },
    'Isolated pelvic floor contractions held several seconds and repeated in sets daily strengthen the sphincter mechanism over about 6 weeks.',
    { text: 'Substituting abdominal and thigh muscles is the most common technique error, and it strengthens the wrong muscles entirely.', trap: 'contraindicated' },
    { text: 'Weekly practice is far too infrequent to produce strength change in any muscle group.', trap: 'plausible-fact' }
  ],
  'BCC-019': [
    { text: 'Attributing increasing cancer pain to addiction is a documented and harmful error. Tolerance and physical dependence are expected and are not addiction.', trap: 'contraindicated' },
    'Increasing pain in cancer usually reflects disease progression or tolerance, both of which call for dose adjustment and adequate breakthrough coverage.',
    { text: 'Waiting longer between doses guarantees uncontrolled pain between them.', trap: 'contraindicated' },
    { text: 'Non-pharmacological methods are valuable adjuncts. As a replacement for opioids in cancer pain they abandon the client.', trap: 'contraindicated' }
  ],
  'BCC-020': [
    { text: 'Hot water and scrubbing strip the lipid barrier that fragile skin has least of.', trap: 'contraindicated' },
    'Warm water, mild cleanser, patting dry, and emollient applied while the skin is still damp preserves the barrier.',
    { text: 'Daily full soap bathing dries ageing skin further. Less frequent bathing is often better for it.', trap: 'contraindicated' },
    { text: 'Alcohol-based products dehydrate skin that is already compromised.', trap: 'contraindicated' }
  ],
  'BCC-021': [
    { text: 'Canned soup is among the highest-sodium foods in a typical diet.', trap: 'contraindicated' },
    'Fresh unprocessed foods seasoned with herbs are naturally low in sodium. Most dietary sodium comes from processed food rather than the salt shaker.',
    { text: 'Deli meats are cured, and bread contributes more sodium than most clients expect.', trap: 'contraindicated' },
    { text: 'Cottage cheese is surprisingly high in sodium, and olives are brined.', trap: 'contraindicated' }
  ],
  'BCC-022': [
    { text: 'Placing the chair on the weak side forces the client to bear weight and reach with the limb that cannot do it.', trap: 'contraindicated' },
    'The chair goes on the unaffected side so the client pivots toward their strength and bears weight on the intact leg.',
    { text: 'A chair directly in front leaves no room to pivot.', trap: 'contraindicated' },
    { text: 'A chair behind the client cannot be reached without turning blindly.', trap: 'contraindicated' }
  ],
  'BCC-023': [
    { text: 'Formed stool means the colon is reabsorbing water, which an ileostomy bypasses.', trap: 'plausible-fact' },
    'An ileostomy bypasses the colon where water is absorbed, so effluent is continuous and liquid to pasty, with real dehydration and electrolyte loss risk.',
    { text: 'No output for a week after ileostomy suggests obstruction and would be an emergency.', trap: 'plausible-fact' },
    { text: 'Frank bleeding with each emptying is abnormal, though slight bleeding from the stoma with cleaning is not.', trap: 'plausible-fact' }
  ],
  'BCC-024': [
    { text: 'Ice directly on skin for an hour causes frostbite and nerve injury.', trap: 'contraindicated' },
    'Fifteen to twenty minutes with a barrier and rest periods reduces swelling and pain without tissue injury or reflex vasodilation.',
    { text: 'Heat in the first 24 to 48 hours increases blood flow and worsens the swelling.', trap: 'contraindicated' },
    { text: 'Eight hours of continuous cold causes tissue damage and eventually reflex vasodilation, defeating the purpose.', trap: 'contraindicated' }
  ],
  'RSK-025': [
    { text: 'Supine narrows the intercostal spaces and lets fluid spread rather than collecting where it can be reached.', trap: 'contraindicated' },
    'Sitting upright leaning forward widens the intercostal spaces and lets fluid collect at the lung base. The client must stay still and avoid coughing during needle insertion.',
    { text: 'Prone gives no access to the posterior chest wall where the needle enters.', trap: 'contraindicated' },
    { text: 'The curled lateral position is for lumbar puncture, where the goal is widening the vertebral spaces.', trap: 'plausible-fact' }
  ],
  'RSK-026': [
    { text: 'Sudden dyspnoea with absent breath sounds is never expected discomfort.', trap: 'expected' },
    'Needle puncture of the visceral pleura lets air into the pleural space. Absent breath sounds on the procedure side is the giveaway.',
    { text: 'Embolism would not produce unilateral absent breath sounds immediately after a chest needle.', trap: 'plausible-fact' },
    { text: 'Anxiety does not abolish breath sounds over one hemithorax.', trap: 'contraindicated' }
  ],
  'RSK-027': [
    { text: 'Sinus tachycardia is regular with a P wave before every complex.', trap: 'plausible-fact' },
    'Absent P waves with an irregularly irregular ventricular response defines atrial fibrillation, and 140 constitutes rapid ventricular response requiring rate control and anticoagulation assessment.',
    { text: 'Ventricular tachycardia produces wide, regular complexes. Irregular rules it out.', trap: 'plausible-fact' },
    { text: 'Third-degree block shows P waves marching independently of the QRS complexes — P waves are present, just dissociated.', trap: 'plausible-fact' }
  ],
  'RSK-028': [
    { text: 'Incisional discomfort after joint replacement is expected.', trap: 'expected' },
    'Unilateral calf swelling with warmth and tenderness suggests deep vein thrombosis, which can embolise. The limb is not massaged and the provider is notified.',
    { text: 'Serosanguineous drainage is normal early wound healing.', trap: 'expected' },
    { text: 'A low-grade temperature in the first postoperative days usually reflects atelectasis.', trap: 'expected' }
  ],
  'RSK-029': [
    { text: 'Thirst and dry membranes suggest hypernatraemia or volume depletion. This client has too much water relative to sodium.', trap: 'plausible-fact' },
    'Severe hyponatraemia shifts water into brain cells, producing cerebral oedema with headache, confusion, seizures, and coma. Correction must be gradual.',
    { text: 'Hypertension with bounding pulse describes volume overload rather than the neurological picture hyponatraemia produces.', trap: 'plausible-fact' },
    { text: 'Constipation is a hypercalcaemia or hypokalaemia finding.', trap: 'plausible-fact' }
  ],
  'RSK-030': [
    { text: 'Suction on insertion strips the mucosa on the way in and prolongs the hypoxaemic period.', trap: 'contraindicated' },
    'Suction is applied only on withdrawal, limited to 10 to 15 seconds per pass, with hyperoxygenation between to prevent hypoxaemia and bradycardia.',
    { text: 'Thirty seconds of continuous suction causes significant desaturation and vagal bradycardia.', trap: 'contraindicated' },
    { text: 'Saline instillation pushes organisms distally and causes desaturation without thinning secretions.', trap: 'contraindicated' }
  ],
  'RSK-031': [
    { text: 'Any oral intake risks aspiration under sedation and obscures the view.', trap: 'contraindicated' },
    'Fasting empties the stomach for visualisation and prevents aspiration, and moderate sedation prohibits driving afterwards.',
    { text: 'Fluids up to the procedure defeat the fasting requirement.', trap: 'contraindicated' },
    { text: 'Fasting is mandatory before any procedure using sedation.', trap: 'contraindicated' }
  ],
  'RSK-032': [
    { text: 'A diuretic in a client who is already hypoperfused worsens the deficit and can precipitate acute kidney injury.', trap: 'contraindicated' },
    'Oliguria with tachycardia and hypotension suggests inadequate perfusion. Assessment and provider notification lead to fluid resuscitation.',
    { text: 'Fluid restriction in a hypovolaemic client accelerates the problem.', trap: 'contraindicated' },
    { text: 'Four hours of oliguria at these vital signs risks irreversible kidney injury.', trap: 'contraindicated' }
  ],
  'RSK-033': [
    { text: 'A large meal diverts blood flow to the gut and can produce false findings.', trap: 'contraindicated' },
    'Caffeine and nicotine alter the cardiovascular response, heavy meals divert blood flow, and beta blockers blunt the heart rate response needed for a diagnostic result.',
    { text: 'Beta blockers prevent the client reaching target heart rate, which can render the test non-diagnostic. Medication instructions are clarified in advance.', trap: 'contraindicated' },
    { text: 'Caffeine interferes with pharmacologic agents and alters the baseline. It is avoided, not encouraged.', trap: 'contraindicated' }
  ],
  'RSK-034': [
    { text: 'Meningitis produces fever and nuchal rigidity, and the headache does not improve on lying flat.', trap: 'plausible-fact' },
    'A positional headache after lumbar puncture reflects cerebrospinal fluid leakage with traction on the meninges — better flat, worse upright.',
    { text: 'Migraine is not typically positional in this way and would not begin immediately after a dural puncture.', trap: 'plausible-fact' },
    { text: 'Headaches from raised intracranial pressure typically worsen lying flat, which is the opposite pattern.', trap: 'plausible-fact' }
  ],
  'RSK-035': [
    { text: 'Amylase reflects pancreatic injury.', trap: 'plausible-fact' },
    'D-dimer is a fibrin degradation product — highly sensitive but not specific, so a normal result in a low-risk client effectively excludes thromboembolism while a raised one requires imaging.',
    { text: 'Alkaline phosphatase relates to liver and bone.', trap: 'plausible-fact' },
    { text: 'Albumin reflects protein status and does not bear on thromboembolism.', trap: 'plausible-fact' }
  ],
  'RSK-036': [
    { text: 'Light pink-tinged urine is expected after prostate resection.', trap: 'expected' },
    'Bright red bleeding with clots obstructing outflow causes bladder distention and can lead to haemorrhage. Irrigation is increased and hand irrigation performed per order.',
    { text: 'Bladder spasms are common after this procedure and are treated symptomatically.', trap: 'expected' },
    { text: 'The urge to void with a catheter in place is a normal sensation from the balloon.', trap: 'expected' }
  ],
  'RSK-037': [
    { text: 'Disconnection reduces resistance and triggers a low-pressure alarm.', trap: 'plausible-fact' },
    'High-pressure alarms mean increased resistance to airflow — secretions, kinked tubing, biting, or worsening compliance from bronchospasm or pneumothorax.',
    { text: 'A cuff leak lets volume escape, lowering pressure rather than raising it.', trap: 'plausible-fact' },
    { text: 'Extubation is the ultimate low-pressure event.', trap: 'plausible-fact' }
  ],
  'RSK-038': [
    { text: 'Food particles contaminate the specimen and daytime samples are less concentrated.', trap: 'plausible-fact' },
    'Overnight accumulation makes the early morning specimen most concentrated, and rinsing with plain water removes oral flora without the antibacterial effect of mouthwash.',
    { text: 'Post-meal collection maximises food contamination.', trap: 'contraindicated' },
    { text: 'Mouthwash has antibacterial activity that suppresses growth and can produce a false negative.', trap: 'contraindicated' }
  ],
  'RSK-039': [
    { text: 'Twitching and a positive Chvostek sign indicate low calcium. This client has too much.', trap: 'plausible-fact' },
    'Hypercalcaemia depresses neuromuscular excitability, producing lethargy, weakness, constipation, polyuria, and renal calculi.',
    { text: 'Seizures and tetany are hypocalcaemic findings.', trap: 'plausible-fact' },
    { text: 'Hyperactive reflexes go with low calcium. High calcium depresses them.', trap: 'plausible-fact' }
  ],
  'RSK-040': [
    { text: 'Immediate ambulation after puncturing a highly vascular organ risks bleeding from the tract.', trap: 'contraindicated' },
    'Bed rest lets the puncture site seal, activity restriction protects it over the following weeks, and haematuria or flank pain signals bleeding.',
    { text: 'Fluids are encouraged rather than restricted, to maintain urine flow and prevent clot formation in the collecting system.', trap: 'contraindicated' },
    { text: 'Normal activity immediately is the specific thing the restriction exists to prevent.', trap: 'contraindicated' }
  ],
  'RSK-041': [
    { text: 'Continuing heparin in suspected heparin-induced thrombocytopenia drives further thrombosis.', trap: 'contraindicated' },
    'A significant platelet drop on heparin raises concern for a prothrombotic immune reaction requiring cessation of all heparin exposure, including line flushes.',
    { text: 'Increasing the dose intensifies the immune reaction.', trap: 'contraindicated' },
    { text: 'Platelet transfusion in this syndrome can worsen thrombosis and is generally avoided.', trap: 'contraindicated' }
  ],
  'RSK-042': [
    { text: 'Walking a dizzy hypotensive client is how syncope becomes a head injury.', trap: 'contraindicated' },
    'Supine with legs elevated improves venous return and cerebral perfusion immediately while reassessment establishes the cause.',
    { text: 'An antihypertensive would deepen a blood pressure that is already too low.', trap: 'contraindicated' },
    { text: 'Sitting up quickly is the movement that triggered the symptom.', trap: 'contraindicated' }
  ],
  'RSK-043': [
    { text: 'Adenosine is for stable narrow-complex tachycardia in a client with a pulse.', trap: 'contraindicated' },
    'Pulseless ventricular tachycardia is treated exactly like ventricular fibrillation: high-quality CPR and unsynchronised defibrillation.',
    { text: 'Synchronised cardioversion requires a pulse to synchronise to. Without one, defibrillation is the answer.', trap: 'plausible-fact' },
    { text: 'Diagnostics never precede resuscitation in a pulseless client.', trap: 'contraindicated' }
  ],
  'RSK-044': [
    { text: 'The provider will want to know whether the bladder is full or empty, and that answer changes the entire management.', trap: 'notify-first' },
    'A bladder scan distinguishes retention, which needs catheterisation, from inadequate production, which needs fluid. That distinction determines everything after it.',
    { text: 'A diuretic in a client with retention adds urine to a bladder that cannot empty.', trap: 'contraindicated' },
    { text: 'Large fluid boluses before knowing whether the bladder is obstructed can cause distention injury.', trap: 'contraindicated' }
  ],
  'RSK-045': [
    { text: 'Jaundice reflects bilirubin handling rather than ammonia.', trap: 'plausible-fact' },
    'Ammonia crosses the blood-brain barrier and produces hepatic encephalopathy, with asterixis — the flapping tremor — as the classic sign.',
    { text: 'Ascites reflects portal hypertension and hypoalbuminaemia.', trap: 'plausible-fact' },
    { text: 'Spider angiomas reflect altered oestrogen metabolism in liver disease.', trap: 'plausible-fact' }
  ],
  'RSK-046': [
    { text: 'Controlled asthma is worth knowing but does not change contrast management the way allergy and renal function do.', trap: 'plausible-fact' },
    'Contrast allergy risks anaphylaxis and a creatinine of 2.8 risks contrast nephropathy, either of which may lead to premedication, hydration protocols, or an alternative study.',
    { text: 'A previous appendectomy has no bearing on contrast administration.', trap: 'plausible-fact' },
    { text: 'Family history of diabetes does not affect this procedure. The client\'s own renal function does.', trap: 'plausible-fact' }
  ],
  'RSK-047': [
    { text: 'Two-second capillary refill is normal.', trap: 'expected' },
    'Numbness with motor loss indicates nerve compromise from compartment pressure or a tight cast, and permanent injury follows if it is not relieved.',
    { text: 'Mild finger swelling after casting is common and managed with elevation.', trap: 'expected' },
    { text: 'Warm fingers with a strong pulse indicates intact perfusion.', trap: 'expected' }
  ],
  'RSK-048': [
    { text: 'Intubating a client who is alert and speaking in full sentences on the basis of a probe reading would be a serious harm.', trap: 'contraindicated' },
    'The reading conflicts with the clinical picture, so it is verified — poor perfusion, cold extremities, nail polish, and motion all cause falsely low readings — while oxygen is applied as a precaution.',
    { text: 'Dismissing the reading entirely risks missing genuine hypoxaemia.', trap: 'contraindicated' },
    { text: 'A sedative in possible hypoxaemia suppresses the respiratory drive.', trap: 'contraindicated' }
  ],
  'RSK-049': [
    { text: 'Depressed reflexes indicate hypermagnesaemia. Low magnesium does the opposite.', trap: 'plausible-fact' },
    'Hypomagnesaemia increases neuromuscular excitability with hyperreflexia and tremor, and predisposes to torsades de pointes and refractory hypokalaemia.',
    { text: 'Constipation and slowed motility go with magnesium excess.', trap: 'plausible-fact' },
    { text: 'Bradycardia is a hypermagnesaemia finding.', trap: 'plausible-fact' }
  ],
  'RSK-050': [
    { text: 'Bowel sounds are not the immediate concern after fluid removal from the peritoneal cavity.', trap: 'secondary' },
    'Large-volume paracentesis shifts fluid from the intravascular space into the peritoneum, producing hypotension and reduced renal perfusion.',
    { text: 'Deep tendon reflexes are unrelated to this procedure.', trap: 'plausible-fact' },
    { text: 'Pupillary response has no bearing on paracentesis complications.', trap: 'plausible-fact' }
  ],
  'RSK-051': [
    { text: 'A lactate of 4.8 is the opposite of adequate perfusion — it is the biochemical evidence that tissues are not receiving enough oxygen.', trap: 'plausible-fact' },
    'Elevated lactate reflects anaerobic metabolism from inadequate oxygen delivery. Above 4 mmol/L identifies septic shock physiology, and clearance tracks whether resuscitation is working.',
    { text: 'Kidney failure reduces lactate clearance somewhat, but in sepsis the primary driver is tissue hypoperfusion.', trap: 'plausible-fact' },
    { text: 'This level is well above normal and predicts mortality.', trap: 'expected' }
  ],
  'RSK-052': [
    { text: 'Exercise immediately before introduces muscle artifact and alters the baseline tracing.', trap: 'contraindicated' },
    'Motion, muscle activity, and speech all produce artifact, and precise precordial lead placement matters because misplacement mimics infarction patterns.',
    { text: 'Limb leads alone give only 6 of the 12 leads. The precordial leads are what localise anterior and septal changes.', trap: 'contraindicated' },
    { text: 'Ambulation makes a diagnostic tracing impossible.', trap: 'contraindicated' }
  ],
  'RSK-054': [
    { text: 'Two hours is not long enough for glucose to return to a true fasting baseline.', trap: 'plausible-fact' },
    'A minimum 8-hour fast with only water permitted allows a valid fasting measurement.',
    { text: 'Any caloric intake invalidates a fasting glucose.', trap: 'contraindicated' },
    { text: 'Juice is pure carbohydrate and would produce a postprandial rather than fasting value.', trap: 'contraindicated' }
  ],
  'RSK-055': [
    { text: 'A dislodged tracheostomy is an airway emergency. Waiting produces hypoxic arrest.', trap: 'contraindicated' },
    'Summon help and reinsert with the obturator using the spare tube kept at the bedside, ventilating over the stoma or by mask if reinsertion fails.',
    { text: 'A nasal cannula delivers oxygen to an upper airway that may not connect to the lungs at all, depending on the client\'s anatomy.', trap: 'contraindicated' },
    { text: 'Compressions treat cardiac arrest. This is an airway problem with a perfusing rhythm.', trap: 'contraindicated' }
  ],
  'RSK-056': [
    'Loop diuretics waste potassium and magnesium, and hypokalaemia produces cramps, weakness, and arrhythmia. Magnesium is checked too, because potassium cannot be corrected while magnesium is low.',
    { text: 'Bilirubin reflects hepatic and haemolytic processes, not diuretic-induced cramps.', trap: 'plausible-fact' },
    { text: 'A white count would address infection, which does not explain cramps on a diuretic.', trap: 'plausible-fact' },
    { text: 'Amylase reflects pancreatic injury.', trap: 'plausible-fact' }
  ],
  'RSK-057': [
    { text: 'Viral infection typically produces lymphocytosis rather than a band neutrophil surge.', trap: 'plausible-fact' },
    'A left shift — increased immature band forms — means the marrow is releasing neutrophils early in response to acute bacterial infection.',
    { text: 'Allergy and parasitic infection produce eosinophilia.', trap: 'plausible-fact' },
    { text: 'Bands above about 5 percent are abnormal and clinically meaningful.', trap: 'expected' }
  ],
  'RSK-058': [
    { text: 'Bending raises intraocular pressure, which risks wound dehiscence and haemorrhage after cataract surgery.', trap: 'contraindicated' },
    'Anything that raises intraocular pressure is avoided — bending, lifting, straining, rubbing — and sudden pain or vision loss is reported immediately.',
    { text: 'Rubbing the eye can displace the lens implant and introduce infection.', trap: 'contraindicated' },
    { text: 'Sleeping on the operative side puts direct pressure on the eye.', trap: 'contraindicated' }
  ],
  'RSK-059': [
    { text: 'Fever with tachycardia, tachypnoea, and hypotension together is never normal variation.', trap: 'expected' },
    'This combination meets systemic inflammatory response criteria and, with a suspected source, indicates sepsis requiring cultures, lactate, antibiotics, and fluid within the hour.',
    { text: 'Dehydration alone does not usually produce a temperature of 39.4.', trap: 'plausible-fact' },
    { text: 'Anxiety does not produce fever or hypotension.', trap: 'contraindicated' }
  ],
  'RSK-060': [
    { text: 'Homans sign relates to deep vein thrombosis, and it is unreliable even for that.', trap: 'plausible-fact' },
    'Neck stiffness with involuntary hip and knee flexion on neck flexion is the Brudzinski sign, indicating meningeal irritation, as does the Kernig sign.',
    { text: 'Chvostek sign indicates hypocalcaemia.', trap: 'plausible-fact' },
    { text: 'Trousseau sign also indicates hypocalcaemia.', trap: 'plausible-fact' }
  ],
  'RSK-061': [
    { text: 'Removing the monitor creates gaps in exactly the period an arrhythmia might occur.', trap: 'contraindicated' },
    'Continuous wear with an accurate symptom-and-time diary is what allows rhythm findings to be correlated with what the client actually felt.',
    { text: 'Restricting activity defeats the purpose, which is capturing the rhythm during ordinary daily life.', trap: 'contraindicated' },
    { text: 'Removing electrodes creates recording gaps. Itching is managed without disconnecting.', trap: 'contraindicated' }
  ],
  'RSK-062': [
    { text: 'Purulent drainage with fever on day 3 is not normal healing.', trap: 'expected' },
    'Fever with abdominal pain and purulent wound drainage suggests surgical site infection and raises concern for an anastomotic leak, which progresses rapidly to peritonitis.',
    { text: 'Deep vein thrombosis produces unilateral calf findings rather than wound drainage.', trap: 'plausible-fact' },
    { text: 'Atelectasis causes early low-grade fever without purulent wound drainage.', trap: 'plausible-fact' }
  ],
  'RSK-063': [
    { text: 'Increasing phosphorus in a kidney that cannot excrete it worsens the hyperphosphataemia and the bone disease that follows.', trap: 'contraindicated' },
    'Binders taken with meals block absorption from food, and dietary restriction limits the load. Untreated hyperphosphataemia drives secondary hyperparathyroidism and vascular calcification.',
    { text: 'IV calcium treats symptomatic hypocalcaemia acutely. It does not address the phosphorus that is driving the calcium down.', trap: 'secondary' },
    { text: 'A phosphorus of 6.8 is well above range and has long-term bone and vascular consequences.', trap: 'expected' }
  ],
  'RSK-064': [
    { text: 'Complete collapse means the flow rate is too low and the client is entraining room air, defeating the high-concentration delivery.', trap: 'contraindicated' },
    'The reservoir must stay partially inflated throughout the cycle, which requires 10 to 15 L per minute.',
    { text: 'Removing the reservoir converts the device into a simple mask at much lower delivered concentration.', trap: 'contraindicated' },
    { text: 'Two litres per minute cannot keep a reservoir inflated and is a nasal cannula flow rate.', trap: 'contraindicated' }
  ],
  'RSK-065': [
    { text: 'Spikes without complexes means the pacemaker is firing and the heart is not responding. That is not normal function.', trap: 'expected' },
    'Pacing spikes without a resulting QRS is failure to capture, and hiccups suggest the lead has migrated and is stimulating the diaphragm. The client is effectively unpaced.',
    { text: 'Failure to sense produces spikes falling inappropriately after intrinsic beats, not absent complexes after spikes.', trap: 'plausible-fact' },
    { text: 'Oversensing causes the pacemaker to withhold pacing, producing absent spikes rather than ineffective ones.', trap: 'plausible-fact' }
  ],
  'RSK-066': [
    { text: 'Sodium is not the electrolyte affected by citrate.', trap: 'plausible-fact' },
    'Citrate used to anticoagulate stored blood chelates ionised calcium, producing hypocalcaemia with perioral tingling, tremor, and prolonged QT during massive transfusion.',
    { text: 'Hyperkalaemia from older stored units is a real concern, but "only" excludes the citrate-calcium effect that is more specific to massive transfusion.', trap: 'plausible-fact' },
    { text: 'Chloride is not the primary concern in massive transfusion.', trap: 'plausible-fact' }
  ],
  'RSK-067': [
    { text: 'Caffeine is a stimulant that alters the tracing and is generally held.', trap: 'contraindicated' },
    'Clean hair without oils or sprays allows good electrode contact, and stimulants and sedatives both alter the recording, so specific hold instructions are followed.',
    { text: 'Sedatives suppress the very activity the test is trying to capture.', trap: 'contraindicated' },
    { text: 'Prolonged fasting causes hypoglycaemia, which itself alters the recording.', trap: 'contraindicated' }
  ],
  'RSK-068': [
    { text: 'Numbness in the surgical dermatome is the intended effect of the block.', trap: 'expected' },
    'New back pain with progressive weakness and bladder dysfunction suggests epidural haematoma or abscess compressing the cord — permanent paralysis follows unless decompressed within hours.',
    { text: 'Pruritus is a common effect of neuraxial opioids and is treatable.', trap: 'expected' },
    { text: 'Nausea responding to an antiemetic is expected and controlled.', trap: 'expected' }
  ],
  'RSK-069': [
    { text: 'Intrinsic kidney injury raises BUN and creatinine roughly proportionally. Here only the BUN has risen.', trap: 'plausible-fact' },
    'A BUN to creatinine ratio above about 20 to 1 indicates a prerenal state, where reduced perfusion drives urea reabsorption while creatinine stays relatively unchanged.',
    { text: 'A BUN of 48 is well above the normal 10 to 20.', trap: 'expected' },
    { text: 'Postrenal obstruction typically raises both values, and "only" excludes the more common prerenal causes.', trap: 'plausible-fact' }
  ],
  'RSK-070': [
    { text: 'Four hours is long enough for herniation to become irreversible.', trap: 'contraindicated' },
    'A newly unilateral dilated sluggish pupil indicates oculomotor nerve compression by herniating brain tissue — a neurosurgical emergency.',
    { text: 'Dim light causes physiological dilation, but bilaterally and reactively. This pupil is unilateral and sluggish.', trap: 'plausible-fact' },
    { text: 'An analgesic treats a symptom while the brain herniates.', trap: 'contraindicated' }
  ],
  'RSK-071': [
    { text: 'Stripping chest tubes generates dangerously high negative pressure and is not recommended. The client is also improving, which argues against obstruction.', trap: 'contraindicated' },
    'Absent tidaling with radiographic re-expansion and no air leak indicates resolution. The same finding with a deteriorating client would instead suggest obstruction.',
    { text: 'Tension pneumothorax produces acute deterioration with tracheal deviation, not radiographic re-expansion.', trap: 'plausible-fact' },
    { text: 'A broken system would typically show a persistent leak or failure to maintain suction.', trap: 'plausible-fact' }
  ],
  'RSK-072': [
    { text: 'A cuff that is too large reads falsely low. Too small reads high.', trap: 'plausible-fact' },
    'A narrow cuff requires more pressure to occlude the artery, producing a falsely elevated reading. The bladder should encircle about 80 percent of the arm.',
    { text: 'Cuff size is one of the most common sources of measurement error there is.', trap: 'contraindicated' },
    { text: 'An ill-fitting cuff produces a readable but inaccurate result, which is more dangerous than no reading at all.', trap: 'plausible-fact' }
  ],
  'RSK-073': [
    { text: 'Immediate ambulation risks bleeding from a puncture site in a client who frequently has low platelets.', trap: 'contraindicated' },
    'Direct pressure with the client lying supine on the site controls bleeding, which is the principal complication — and these clients often have thrombocytopenia.',
    { text: 'Heat increases blood flow and promotes bleeding at a fresh puncture.', trap: 'contraindicated' },
    { text: 'An uncovered puncture site invites infection.', trap: 'contraindicated' }
  ],
  'SAF-068': [
    { text: 'Rooming similar-named clients together multiplies the chance of a mix-up rather than reducing it.', trap: 'contraindicated' },
    'Formal name-alert flags in the electronic systems combined with rigorous two-identifier verification create a structural barrier rather than relying on memory.',
    { text: 'Room numbers are never acceptable identifiers, and using them here would make the problem worse.', trap: 'contraindicated' },
    { text: '"Be careful" is the weakest possible safety intervention — it relies entirely on vigilance that fails under load.', trap: 'secondary' }
  ],
  'SAF-069': [
    { text: 'Beginning compressions on a conversant client would cause serious injury.', trap: 'contraindicated' },
    'A talking client is not in asystole. A disconnected lead or displaced electrode is producing artifact — treat the client, not the monitor.',
    { text: 'Calling a code on a talking client diverts the whole team to an artifact.', trap: 'contraindicated' },
    { text: 'Epinephrine in a perfusing client with a normal rhythm could precipitate a real arrhythmia.', trap: 'contraindicated' }
  ],
  'RSK-001': [
    { text: 'Sodium of 138 sits squarely within the 135 to 145 range.', trap: 'expected' },
    'Potassium of 2.6 is severe hypokalaemia, predisposing to ventricular arrhythmia, digoxin toxicity, and respiratory muscle weakness.',
    { text: 'Chloride of 101 is normal against a range of 98 to 106.', trap: 'expected' },
    { text: 'Calcium of 9.2 is normal against a range of about 9 to 10.5.', trap: 'expected' }
  ],
  'RSK-003': [
    { text: 'High fibre is the opposite of what a bowel preparation needs. Residue is exactly what the prep is trying to clear.', trap: 'contraindicated' },
    'Adequate cleansing determines whether lesions can be seen at all, and red or purple liquids are avoided because they can be mistaken for blood.',
    { text: 'Anticoagulants are typically adjusted before colonoscopy because of biopsy and polypectomy bleeding risk. Taking them all as usual assumes no procedure is planned.', trap: 'contraindicated' },
    { text: 'An unprepared colon produces a non-diagnostic study that has to be repeated.', trap: 'contraindicated' }
  ],
  'RSK-004': [
    { text: 'Bowel sounds bear no relationship to the risks of arterial access and iodinated contrast.', trap: 'plausible-fact' },
    'Contrast allergy risks anaphylaxis, impaired renal function risks contrast nephropathy, and baseline distal pulses give you something to compare against after arterial access.',
    { text: 'Visual acuity is unrelated to this procedure.', trap: 'plausible-fact' },
    { text: 'Grip strength is a neurological assessment with no bearing on catheterisation risk.', trap: 'plausible-fact' }
  ],
  'RSK-005': [
    { text: 'Back pain with tachycardia and hypotension is not normal at any point after arterial access. Normalising it is how retroperitoneal bleeds are missed.', trap: 'expected' },
    'Bleeding from a femoral puncture tracks into the retroperitoneal space where it is concealed — the groin can look entirely normal while the client exsanguinates.',
    { text: 'Anxiety does not produce a falling blood pressure. Attributing haemodynamic change to emotion is a recognised diagnostic error.', trap: 'contraindicated' },
    { text: 'Contrast reactions present with urticaria, bronchospasm, or anaphylaxis, typically within minutes rather than four hours later with back pain.', trap: 'plausible-fact' }
  ],
  'RSK-006': [
    { text: 'This pattern is Cushing triad, a late sign of impending herniation. Four hours is long enough for the client to die.', trap: 'late-sign' },
    'Widening pulse pressure with bradycardia and irregular respirations means the brainstem is failing to compensate for intracranial pressure.',
    { text: 'Lowering the blood pressure reduces cerebral perfusion pressure. The hypertension is the body maintaining flow against the rising pressure, not the problem itself.', trap: 'contraindicated' },
    { text: 'Encouraging sleep removes the only assessment you have of a declining level of consciousness.', trap: 'contraindicated' }
  ],
  'RSK-007': [
    { text: 'Ninety percent is acceptable and often desirable in COPD, where the target is around 88 to 92 percent.', trap: 'expected' },
    'New somnolence and confusion after increasing oxygen suggests carbon dioxide retention progressing toward narcosis and respiratory arrest.',
    { text: 'Barrel chest is a chronic structural adaptation to years of air trapping.', trap: 'expected' },
    { text: 'Pursed-lip breathing is an effective self-taught compensation, not a warning sign.', trap: 'expected' }
  ],
  'RSK-008': [
    { text: 'Bed rest is the single largest contributor to postoperative atelectasis.', trap: 'contraindicated' },
    'Lung expansion, effective coughing with splinting for comfort, and early mobilisation reverse the shallow breathing that causes atelectasis.',
    { text: 'Dehydration thickens secretions, making them harder to clear.', trap: 'contraindicated' },
    { text: 'Suppressing the cough traps secretions in the airways. Splinting makes coughing tolerable; suppressing it makes it impossible.', trap: 'contraindicated' }
  ],
  'RSK-009': [
    { text: 'Excellent control would be below about 7 percent. At 10.2 the average glucose is roughly 250 mg/dL.', trap: 'plausible-fact' },
    'A1c reflects average glycaemia over the red cell lifespan, roughly 2 to 3 months, with most adults targeted below 7 percent.',
    { text: 'This confuses the percentage with a glucose value. A1c is not a point-in-time measurement at all.', trap: 'plausible-fact' },
    { text: 'A1c of 10.2 indicates sustained hyperglycaemia. Hypoglycaemia would not raise it.', trap: 'plausible-fact' }
  ],
  'RSK-010': [
    { text: 'Sodium disturbances present neurologically rather than with these specific electrocardiographic changes.', trap: 'plausible-fact' },
    'Peaked T waves are the earliest sign of hyperkalaemia, progressing to a widened QRS, loss of P waves, and a sine wave preceding arrest.',
    { text: 'Calcium affects the QT interval. Hypocalcaemia prolongs it; it does not peak the T wave.', trap: 'plausible-fact' },
    { text: 'Glucose does not produce these changes directly, though the hyperkalaemia of ketoacidosis can.', trap: 'plausible-fact' }
  ],
  'RSK-011': [
    { text: 'Sodium is unrelated to the bleeding risk that dominates liver biopsy.', trap: 'plausible-fact' },
    'The liver produces clotting factors, and it is highly vascular. Impaired synthetic function plus a needle into a vascular organ makes haemorrhage the principal complication.',
    { text: 'Glucose matters in liver disease but does not determine whether the biopsy can safely proceed.', trap: 'plausible-fact' },
    { text: 'Urinalysis has no bearing on hepatic biopsy risk.', trap: 'plausible-fact' }
  ],
  'RSK-012': [
    { text: 'Fluids before the gag reflex returns is the precise mechanism by which post-bronchoscopy aspiration happens.', trap: 'contraindicated' },
    'Topical anaesthesia abolishes the gag reflex, so anything swallowed can enter the airway. The reflex is checked before anything is offered.',
    { text: 'Vigorous coughing after bronchoscopy can precipitate bleeding from biopsy sites.', trap: 'contraindicated' },
    { text: 'Immediate ambulation after sedation risks falls and does not address the airway.', trap: 'secondary' }
  ],
  'RSK-013': [
    { text: 'Deficit produces flat neck veins, tachycardia, dry membranes, and weight loss. Every finding here is the opposite.', trap: 'plausible-fact' },
    'Rapid weight gain, distended neck veins, bounding pulses, and crackles all indicate volume overload. One kilogram is roughly one litre.',
    { text: 'Crackles with jugular distention are never normal.', trap: 'expected' },
    { text: 'Hypokalaemia causes weakness and arrhythmia, not this fluid picture.', trap: 'plausible-fact' }
  ],
  'RSK-014': [
    { text: 'Six would require lower scores in at least two categories than this client demonstrates.', trap: 'plausible-fact' },
    'Eye opening to pain scores 2, incomprehensible sounds score 2, and withdrawal from pain scores 4 — total 8. A score of 8 or below generally indicates a need for airway protection.',
    { text: 'Ten would require better responses than eye opening to pain and incomprehensible sounds.', trap: 'plausible-fact' },
    { text: 'Twelve would describe a considerably more responsive client.', trap: 'plausible-fact' }
  ],
  'RSK-015': [
    { text: '112/68 is a normal blood pressure.', trap: 'expected' },
    'Snoring in a sedated client is partial airway obstruction from a relaxed tongue, and the falling saturation confirms ventilation is compromised. Reposition the airway immediately.',
    { text: 'Shivering is extremely common after anaesthesia and is managed with warming.', trap: 'expected' },
    { text: 'Pain of 4 out of 10 warrants treatment but is not an airway emergency.', trap: 'comfort-over-abc' }
  ],
  'RSK-016': [
    { text: 'Holding a therapeutic dose drops the client out of range and returns them to clotting risk. Know the target before acting on the number.', trap: 'contraindicated' },
    'An INR of 2.4 sits within the 2 to 3 target. The correct action for a therapeutic value is to continue as ordered.',
    { text: 'Vitamin K reverses anticoagulation the client currently needs.', trap: 'contraindicated' },
    { text: 'Doubling a therapeutic dose pushes the client into a bleeding range.', trap: 'contraindicated' }
  ],
  'RSK-017': [
    { text: 'Clamping traps air in the pleural space with nowhere to escape, which is how a disconnection becomes a tension pneumothorax.', trap: 'contraindicated' },
    'Submerging the tube end creates a temporary water seal, letting air escape from the pleural space while preventing atmospheric air entering.',
    { text: 'Reconnecting contaminated tubing introduces organisms directly into the pleural space.', trap: 'contraindicated' },
    { text: 'Doing nothing while the pleural space is open to atmosphere allows a pneumothorax to develop within minutes.', trap: 'notify-first' }
  ],
  'RSK-018': [
    { text: 'Liver injury raises transaminases. Troponin is not produced by hepatocytes.', trap: 'plausible-fact' },
    'Troponin is a contractile protein essentially unique to cardiac muscle, rising within a few hours of injury and remaining elevated for days.',
    { text: 'Renal failure can modestly elevate troponin through reduced clearance, but a marked rise indicates myocardial injury.', trap: 'plausible-fact' },
    { text: 'Pancreatic inflammation raises amylase and lipase.', trap: 'plausible-fact' }
  ],
  'RSK-019': [
    { text: 'Cancelling forfeits diagnostic information for a problem that is routinely managed.', trap: 'contraindicated' },
    'Claustrophobia is common and manageable with premedication, an open scanner, or preparation and coaching, so the study proceeds.',
    { text: 'Telling a claustrophobic client to close their eyes typically produces an aborted, non-diagnostic study.', trap: 'secondary' },
    { text: 'Proceeding without addressing the concern is how clients panic mid-scan and refuse imaging thereafter.', trap: 'contraindicated' }
  ],
  'RSK-021': [
    { text: 'Bowel function normally returns within 24 to 72 hours. Distention with no flatus on day 2 and worsening is beyond the expected course.', trap: 'expected' },
    'Absent sounds with distention and no passage of flatus indicates paralytic ileus, managed with nothing by mouth, decompression, electrolyte correction, and mobilisation.',
    { text: 'Wound infection presents with local erythema, warmth, and purulent drainage rather than absent bowel sounds and distention.', trap: 'plausible-fact' },
    { text: 'Anastomotic healing is not a clinical finding, and using it to explain distention would delay recognising an ileus or a leak.', trap: 'plausible-fact' }
  ],
  'RSK-022': [
    { text: 'Metabolic acidosis would show a low bicarbonate. This bicarbonate is normal at 25.', trap: 'plausible-fact' },
    'Low pH with elevated PaCO2 and a normal bicarbonate is uncompensated respiratory acidosis — the kidneys have not yet had days to raise the bicarbonate.',
    { text: 'Respiratory alkalosis would show a high pH with a low PaCO2. Both are moving the other way here.', trap: 'plausible-fact' },
    { text: 'Metabolic alkalosis would show a high pH with a raised bicarbonate.', trap: 'plausible-fact' }
  ],
  'RSK-023': [
    { text: 'Opioid overdose causes hypoventilation, which retains carbon dioxide and produces respiratory acidosis — the opposite of this picture.', trap: 'plausible-fact' },
    'High pH with a low PaCO2 and normal bicarbonate is respiratory alkalosis from blowing off carbon dioxide, most often through anxiety or pain-driven hyperventilation.',
    { text: 'Prolonged vomiting loses gastric acid and produces metabolic alkalosis, which would raise the bicarbonate.', trap: 'plausible-fact' },
    { text: 'Ketoacidosis produces metabolic acidosis with a low pH and low bicarbonate.', trap: 'plausible-fact' }
  ],
  'RSK-024': [
    { text: '124/78 with a heart rate of 76 are normal values and give no indication of rising pressure.', trap: 'expected' },
    'Declining level of consciousness is the earliest and most sensitive indicator, and a unilaterally sluggish pupil suggests third nerve compression from developing herniation.',
    { text: 'Thirst is non-specific and may simply reflect being nil by mouth.', trap: 'plausible-fact' },
    { text: 'Improving grip strength is a reassuring finding suggesting the deficit is resolving.', trap: 'expected' }
  ],
  'SAF-011': [
    { text: 'Room and bed assignments change constantly and belong to the location, not the person.', trap: 'contraindicated' },
    'Two client-specific identifiers are required — full name with date of birth, or name with medical record number.',
    { text: 'Diagnosis and physician are shared by many clients and are not unique identifiers.', trap: 'plausible-fact' },
    { text: 'A first name is not unique, and a room number is not an identifier at all.', trap: 'contraindicated' }
  ],
  'SAF-019': [
    { text: 'A single rail used as a mobility aid helps the client move themselves. It does not restrict them.', trap: 'plausible-fact' },
    'All four rails raised to prevent a confused client leaving the bed restricts freedom of movement and is a restraint — and clients climb over them, making injuries worse.',
    { text: 'An arm board stabilises a device rather than restricting the client\'s movement.', trap: 'plausible-fact' },
    { text: 'If the client can remove it independently it is not a restraint. That is the defining test.', trap: 'plausible-fact' }
  ],
  'SAF-024': [
    { text: 'Reviewing the consent verifies a document. It does not verify that the right side of the right client is about to be cut.', trap: 'secondary' },
    'The universal protocol requires site marking with the client awake and participating, preprocedure verification, and a team time-out where all activity stops before incision.',
    { text: 'A single verbal confirmation from the person most likely to have the error in their head is not independent verification.', trap: 'secondary' },
    { text: 'Marking after anaesthesia removes the one person who knows for certain which side hurts.', trap: 'contraindicated' }
  ],
  'SAF-033': [
    { text: 'Millilitres written out is standard and unambiguous.', trap: 'plausible-fact' },
    { text: 'Milligrams written as mg is acceptable and universally understood.', trap: 'plausible-fact' },
    'U is misread as a zero or a four, producing tenfold insulin and heparin overdoses. It is on the official do-not-use list alongside IU, QD, QOD, and trailing zeros.',
    { text: 'Micrograms as mcg is preferred precisely because it avoids the Greek symbol that is misread.', trap: 'plausible-fact' }
  ],
  'SAF-038': [
    { text: 'Securing to the thigh prevents traction on the urethra and reduces trauma.', trap: 'expected' },
    { text: 'A dedicated container per client prevents cross-contamination between drainage bags.', trap: 'expected' },
    'Breaking the closed drainage system creates a direct route for organisms. Specimens come from the needleless sampling port after disinfection.',
    { text: 'Gravity drainage below bladder level prevents reflux of contaminated urine back into the bladder.', trap: 'expected' }
  ],
  'SAF-040': [
    { text: 'Generic appearance does change, which is what makes this plausible. It is also how a dispensing error gets waved through.', trap: 'plausible-fact' },
    'A client noticing a difference is a genuine last-line safety check, and it frequently reveals a dispensing or transcription error.',
    { text: 'Urging the client to take it and watching for effects means the error is detected by the harm it causes.', trap: 'contraindicated' },
    { text: 'Substituting a different medication is prescribing and does not address why this one looked wrong.', trap: 'wrong-scope' }
  ],
  'SAF-041': [
    { text: 'Twenty minutes after IV opioid is close to peak sedation and orthostatic effect. Independent ambulation here is how falls happen.', trap: 'contraindicated' },
    'Assistance or a nearer alternative addresses the need without the fall risk of walking alone while sedated.',
    { text: 'Making the client wait two hours is unnecessary and undignified when assistance is available now.', trap: 'contraindicated' },
    { text: 'Catheterisation introduces infection risk for a problem that a commode solves.', trap: 'contraindicated' }
  ],
  'SAF-043': [
    { text: 'Nothing is placed in the mouth during a seizure. A padded tongue blade at the bedside invites exactly that error.', trap: 'contraindicated' },
    'Suction and oxygen manage the airway during and after a seizure, which is where the actual risk lies.',
    { text: 'Restraints increase injury by resisting the tonic-clonic movements rather than absorbing them.', trap: 'contraindicated' },
    { text: 'An oral airway is inserted only after the seizure ends, if needed. Taped to the headboard it implies use during.', trap: 'contraindicated' }
  ],
  'SAF-044': [
    { text: 'Silent late administration conceals an error that may need monitoring and prevents the system learning from it.', trap: 'contraindicated' },
    'Assess the client for effects of the missed dose, judge its urgency, and consult the provider about giving it late, skipping it, or adjusting the schedule.',
    { text: 'Charting a dose that was not given is falsification of a legal record.', trap: 'contraindicated' },
    { text: 'Doubling the next dose is prescribing, and for many drugs it is dangerous.', trap: 'contraindicated' }
  ],
  'SAF-045': [
    { text: 'Citing policy without a reason produces compliance at best and resentment at worst, and it teaches the visitor nothing.', trap: 'secondary' },
    'A plain-language explanation of transmission and its purpose builds cooperation, and it is more likely to be followed when the nurse is not watching.',
    { text: 'Fear-based framing is inaccurate for many organisms, where the risk is carriage to other clients rather than to the visitor.', trap: 'plausible-fact' },
    { text: 'Suggesting the requirement is optional for visitors undermines it entirely.', trap: 'contraindicated' }
  ],
  'SAF-046': [
    { text: 'Fluid restriction concentrates urine and promotes bacterial growth. This is precisely backwards.', trap: 'contraindicated' },
    'Regular voiding and post-coital emptying flush bacteria from the urethra before they can ascend to the bladder.',
    { text: 'Scented products irritate the perineum and disrupt normal flora.', trap: 'contraindicated' },
    { text: 'Retention encourages bacterial colonisation. Stretching the bladder is not a therapeutic goal here.', trap: 'contraindicated' }
  ],
  'SAF-047': [
    { text: 'Rising quickly is the mechanism of the syncope you are trying to prevent.', trap: 'contraindicated' },
    'Dangling lets baroreceptors compensate for the postural change before the client stands, preventing the drop in cerebral perfusion.',
    { text: 'Leg crossing while seated is a manoeuvre used during an episode, not a substitute for graded position change.', trap: 'plausible-fact' },
    { text: 'Breath holding is a Valsalva manoeuvre that further reduces cardiac output.', trap: 'contraindicated' }
  ],
  'SAF-048': [
    { text: 'One hand becomes contaminated on contact and stays in place. This describes the technique correctly.', trap: 'expected' },
    { text: 'Placing the drape before opening the catheter package is correct sequencing.', trap: 'expected' },
    'Once the nondominant hand contacts the perineum it is contaminated. It must stay in place holding the tissue while the sterile dominant hand advances the catheter.',
    { text: 'Sterile lubricant on the catheter tip is standard and reduces urethral trauma.', trap: 'expected' }
  ],
  'SAF-049': [
    'Interior hallways away from glass give the best protection, and closed doors block flying debris.',
    { text: 'Opening windows does not equalise pressure — that is a persistent myth — and it admits debris.', trap: 'contraindicated' },
    { text: 'Mass evacuation during an active warning is dangerous and usually impossible in the time available.', trap: 'contraindicated' },
    { text: 'Windows are the specific hazard. Moving toward them inverts the whole principle.', trap: 'contraindicated' }
  ],
  'SAF-050': [
    { text: 'Independent calculation from a look-alike vial of different concentration is the classic mechanism of tenfold errors.', trap: 'contraindicated' },
    'Pharmacy verifies the correct product or an approved alternative. Concentration mix-ups are among the most lethal medication errors there are.',
    { text: 'Partial dosing produces an unpredictable dose and documents the problem rather than solving it.', trap: 'contraindicated' },
    { text: 'Peer verification of an unauthorised substitution adds a second signature to the same error.', trap: 'secondary' }
  ],
  'SAF-051': [
    'Localised zoster in an immunocompetent client needs only standard precautions with lesions covered, since transmission is through contact with vesicle fluid.',
    { text: 'Airborne and contact precautions apply to disseminated zoster, or to localised zoster in an immunocompromised client.', trap: 'plausible-fact' },
    { text: 'Zoster does not spread by droplet.', trap: 'plausible-fact' },
    { text: 'A protective environment shields the immunocompromised. This client is the source, not the susceptible host.', trap: 'plausible-fact' }
  ],
  'SAF-052': [
    { text: 'Complete activity avoidance is unnecessary, harmful to fitness and mood, and not what seizure safety requires.', trap: 'contraindicated' },
    'Drowning and motor vehicle crashes are the leading causes of seizure-related death, which is why unsupervised water and driving restrictions dominate the teaching.',
    { text: 'Stopping an anticonvulsant after a month without seizures risks status epilepticus. Discontinuation is a prescriber decision after years, not weeks.', trap: 'contraindicated' },
    { text: 'Sleeping position does not prevent seizures.', trap: 'plausible-fact' }
  ],
  'SAF-054': [
    { text: 'A vest restraint is among the most restrictive options and carries strangulation risk. It is not a first response.', trap: 'contraindicated' },
    'Least restrictive first: increased visibility, a bed exit alarm, and hourly rounding that anticipates toileting, pain, and positioning needs.',
    { text: 'Chemical restraint increases delirium and fall risk in exactly this population.', trap: 'contraindicated' },
    { text: 'All four rails is a restraint, and clients who climb over them fall from a greater height.', trap: 'contraindicated' }
  ],
  'SAF-055': [
    { text: 'Interpreting a prohibited abbreviation is how a 10-unit order becomes 100 units. The whole point of the do-not-use list is that it is not interpretable.', trap: 'contraindicated' },
    'The abbreviation u is prohibited precisely because it is misread. Any order containing it is clarified and rewritten with units spelled out.',
    { text: 'Assuming the larger dose would deliver a tenfold insulin overdose.', trap: 'contraindicated' },
    { text: 'Another nurse\'s guess is still a guess about an ambiguous order.', trap: 'secondary' }
  ],
  'SAF-056': [
    { text: 'Surgical masks do not filter the small particles that stay suspended in airborne transmission.', trap: 'contraindicated' },
    'Airborne pathogens require a fit-tested N95 or higher respirator regardless of distance within the room.',
    { text: 'A face shield protects against splash. It does not filter inhaled air at all.', trap: 'contraindicated' },
    { text: 'Airborne particles remain suspended and circulate throughout the room. Distance is not protective.', trap: 'contraindicated' }
  ],
  'SAF-057': [
    { text: 'Proton pump inhibitors have long-term fracture associations but do not impair balance or cognition acutely.', trap: 'plausible-fact' },
    'Benzodiazepines cause sedation, impaired balance, delayed reaction time, and confusion, and they appear on the Beers list for older adults.',
    { text: 'Statins can cause myopathy but are not primary fall-risk drugs.', trap: 'plausible-fact' },
    { text: 'Non-sedating agents have far less effect on balance than the sedating alternatives.', trap: 'plausible-fact' }
  ],
  'SAF-058': [
    { text: 'A therapeutic dose of radioactive iodine makes the client a radiation source, with specific handling for secretions and linens.', trap: 'contraindicated' },
    'Time, distance, and shielding govern exposure. Care is clustered and performed efficiently, with facility protocols for contaminated linens and excreta.',
    { text: 'Continuous bedside presence maximises rather than minimises exposure, whatever is worn.', trap: 'contraindicated' },
    { text: 'Contaminated linens require designated handling, not the regular waste stream.', trap: 'contraindicated' }
  ],
  'SAF-059': [
    { text: 'Slight erythema at the incision edges on day 2 is normal inflammatory healing.', trap: 'expected' },
    'Purulent drainage with spreading erythema and warmth several days after surgery indicates infection. Normal inflammation improves after day 3 to 5; infection worsens.',
    { text: 'Serosanguineous drainage on the first day is expected.', trap: 'expected' },
    { text: 'Pain improving daily is the trajectory you want.', trap: 'expected' }
  ],
  'SAF-060': [
    { text: 'Television is not life-sustaining.', trap: 'comfort-over-abc' },
    'A ventilator is life-sustaining. Without emergency power the client requires manual bag-valve ventilation immediately.',
    { text: 'A warming blanket is comfort and thermoregulation, important but not immediately life-sustaining.', trap: 'comfort-over-abc' },
    { text: 'Bed positioning can be done manually.', trap: 'comfort-over-abc' }
  ],
  'SAF-062': [
    { text: 'Free finger movement indicates the restraint is not compromising circulation or nerve function.', trap: 'expected' },
    'Delayed capillary refill with a cool pale hand means circulatory compromise from an overly tight restraint. It is released and reassessed immediately.',
    { text: 'A quick-release knot on the bed frame is correct application.', trap: 'expected' },
    { text: 'A two-finger gap confirms appropriate tightness.', trap: 'expected' }
  ],
  'SAF-063': [
    { text: 'RSV survives on surfaces for hours and spreads readily on hands and equipment. Standard precautions alone are inadequate.', trap: 'contraindicated' },
    'RSV spreads by large droplets and by contact with contaminated surfaces, requiring gown, gloves, a mask within close range, and dedicated equipment.',
    { text: 'RSV is not airborne. Negative pressure is not required.', trap: 'plausible-fact' },
    { text: 'Protective isolation shields an immunocompromised client. This infant is the source.', trap: 'plausible-fact' }
  ],
  'SAF-064': [
    { text: 'Crib safety and sleep position apply to infants.', trap: 'plausible-fact' },
    'School-age children are most often injured in bicycle crashes, drownings, and as pedestrians as their independence expands beyond direct supervision.',
    { text: 'Safe firearm storage matters, but "only" makes it too narrow for the range of injuries at this age.', trap: 'secondary' },
    { text: 'Changing table falls are an infant hazard.', trap: 'plausible-fact' }
  ],
  'SAF-065': [
    'A cluster requires formal epidemiologic investigation, which can trace a common source through environmental sampling, sterilisation records, and practice review.',
    { text: 'Independent client notification bypasses the investigation and the disclosure process that should follow it.', trap: 'wrong-scope' },
    { text: 'An informal posting warns without investigating and does nothing to identify the source.', trap: 'secondary' },
    { text: 'Waiting for more cases means waiting for more clients to be infected.', trap: 'contraindicated' }
  ],
  'SAF-066': [
    { text: 'Standing on the strong side leaves nobody supporting the direction the client will actually fall.', trap: 'contraindicated' },
    'The nurse stands on the weaker side slightly behind, so the client can be supported if the weak leg buckles, with a gait belt for control.',
    { text: 'Standing in front blocks forward progress and gives no leverage against a fall.', trap: 'contraindicated' },
    { text: 'Holding clothing provides no control — the gown tears or slides.', trap: 'contraindicated' }
  ],
  'SAF-067': [
    { text: 'Speed is irrelevant. Anything that falls below waist level or leaves the field is contaminated the moment it does.', trap: 'contraindicated' },
    'A dropped item is discarded and replaced. There is no way to restore sterility to something that has touched the floor.',
    { text: 'Wiping with alcohol disinfects a surface; it does not sterilise an instrument.', trap: 'contraindicated' },
    { text: 'Placing a contaminated item anywhere on the field contaminates the field.', trap: 'contraindicated' }
  ],
  'SAF-070': [
    { text: 'A healthy adult may receive the live intranasal vaccine within the approved age range.', trap: 'plausible-fact' },
    'Live attenuated vaccines are contraindicated in immunocompromise, because the weakened organism can cause disease. The inactivated injectable form is the alternative.',
    { text: 'A healthy 8-year-old is within the approved age range for the live intranasal form.', trap: 'plausible-fact' },
    { text: 'A healthy adult office worker has no contraindication.', trap: 'plausible-fact' }
  ],
  'SAF-071': [
    { text: 'Acetaminophen and a multivitamin do not impair balance, cognition, or blood pressure regulation.', trap: 'plausible-fact' },
    'A benzodiazepine causing sedation, an anticholinergic causing confusion and blurred vision, and a diuretic causing urgency and orthostasis compound into the highest-risk combination.',
    { text: 'Levothyroxine and calcium do not affect balance or alertness.', trap: 'plausible-fact' },
    { text: 'Omeprazole and a stool softener carry no acute fall risk.', trap: 'plausible-fact' }
  ],
  'SAF-072': [
    { text: 'Finishing the procedure with a breached barrier extends the exposure for every remaining minute.', trap: 'contraindicated' },
    'A torn glove is a breach. Stop, remove, perform hand hygiene, and re-glove, because contamination may not be visible.',
    { text: 'Double-gloving over a tear traps contaminated material against the skin.', trap: 'contraindicated' },
    { text: 'Visual inspection cannot exclude contamination — that is the entire reason the barrier exists.', trap: 'contraindicated' }
  ],
  'SAF-073': [
    { text: 'Prone positioning is the single strongest modifiable risk factor for sudden unexpected infant death.', trap: 'contraindicated' },
    'Supine on a firm bare sleep surface is the core recommendation, with room sharing but not bed sharing.',
    { text: 'Soft bedding and quilts create suffocation and rebreathing risk.', trap: 'contraindicated' },
    { text: 'Bed sharing substantially increases risk, particularly with soft surfaces or an impaired adult.', trap: 'contraindicated' }
  ],
  'SAF-074': [
    { text: 'Speed increases programming error rather than reducing it.', trap: 'contraindicated' },
    'Smart pump drug libraries with hard and soft dose limits catch programming errors, and an independent double check for a high-alert drug catches what the pump does not.',
    { text: 'Estimating from experience bypasses every safeguard that exists for high-alert infusions.', trap: 'contraindicated' },
    { text: 'Documentation order does not prevent a programming mistake.', trap: 'secondary' }
  ],
  'SAF-075': [
    { text: 'Antibiotic duration does not determine when shedding stops. Spores persist regardless.', trap: 'plausible-fact' },
    'Contact precautions continue until diarrhoea resolves, and many facilities extend them 48 hours beyond or until discharge because spores persist in the environment.',
    { text: 'The white count reflects the inflammatory response rather than transmissibility.', trap: 'plausible-fact' },
    { text: 'Feeling better is not the criterion. Isolation ends based on transmissibility.', trap: 'contraindicated' }
  ],
  'SAF-076': [
    { text: 'Routine care during an abduction alert leaves exits unwatched during the only window in which the infant can be recovered.', trap: 'contraindicated' },
    'Abduction protocols assign every staff member a monitoring position at exits and stairwells, observing anyone carrying anything that could conceal an infant.',
    { text: 'Family calls consume the staff time needed to watch egress points.', trap: 'secondary' },
    { text: 'Locking client rooms does not prevent someone leaving the building.', trap: 'secondary' }
  ],
  'SAF-077': [
    { text: 'A missing leading zero causes a tenfold overdose when the decimal point is not seen.', trap: 'contraindicated' },
    'A leading zero before the decimal and no trailing zero after it. Both rules exist because of documented tenfold errors.',
    { text: 'A trailing zero turns 0.250 into 250 if the decimal is missed.', trap: 'contraindicated' },
    { text: 'This one has both errors plus the prohibited QD abbreviation, which is misread as QID.', trap: 'contraindicated' }
  ],
  'SAF-079': [
    { text: 'Hot soaks cause burns the client cannot feel and macerate skin that heals poorly.', trap: 'contraindicated' },
    'Sensory loss means injuries go unnoticed until they ulcerate, so daily inspection including the soles and protective footwear at all times are essential.',
    { text: 'Rounded, closely trimmed nails cause ingrown nails and infection. Nails are cut straight across.', trap: 'contraindicated' },
    { text: 'A heating pad on an insensate foot is a classic cause of full-thickness burns.', trap: 'contraindicated' }
  ],
  'SAF-080': [
    { text: 'Removing gloves and performing hand hygiene after handling a urinal is correct practice.', trap: 'expected' },
    'Artificial nails harbour gram-negative organisms and fungi even after hand hygiene, and they are prohibited in direct client care.',
    { text: 'Alcohol-based rub between clients with hands not visibly soiled is standard and appropriate.', trap: 'expected' },
    { text: 'Tying back long hair is good practice.', trap: 'expected' }
  ],
  'SAF-081': [
    { text: 'Flat positioning promotes reflux and is the position most associated with aspiration during feeding.', trap: 'contraindicated' },
    'Head elevation with placement verification and residual monitoring is the core aspiration prevention strategy.',
    { text: 'Increasing the rate raises gastric volume and aspiration risk.', trap: 'contraindicated' },
    { text: 'Twelve-hourly flushing is too infrequent to prevent occlusion, and it addresses patency rather than aspiration.', trap: 'secondary' }
  ],
  'SAF-082': [
    { text: 'A square knot cannot be released quickly, which matters during fire, vomiting, or aspiration.', trap: 'contraindicated' },
    'A quick-release knot on the bed frame allows immediate removal in an emergency.',
    { text: 'A double knot is the opposite of quick release.', trap: 'contraindicated' },
    { text: 'Tying to a side rail causes injury when the rail is lowered.', trap: 'contraindicated' }
  ],
  'SAF-083': [
    'Respiratory depression is the lethal feature of opioid overdose. Ventilation support and naloxone reverse it; everything diagnostic can follow.',
    { text: 'A drug screen confirms what the pinpoint pupils and respiratory rate already tell you, while the client remains hypoxic.', trap: 'assess-first' },
    { text: 'Blood cultures address infection, which is not what a respiratory rate of 4 with pinpoint pupils indicates.', trap: 'plausible-fact' },
    { text: 'Observation of a client breathing 4 times a minute is watching them die.', trap: 'contraindicated' }
  ],
  'PHY-084': [
    { text: 'Increasing sodium raises blood pressure — the opposite of the goal.', trap: 'contraindicated' },
    'Weight loss, the DASH pattern, sodium reduction, regular aerobic activity, and limiting alcohol each produce measurable reductions and are additive.',
    { text: 'Caffeine raises blood pressure acutely and is not a treatment.', trap: 'contraindicated' },
    { text: 'Potassium is generally encouraged rather than eliminated, except in kidney disease.', trap: 'contraindicated' }
  ],
  'PHY-085': [
    { text: 'Hyperresonance indicates air, as in pneumothorax. Fluid does the opposite.', trap: 'plausible-fact' },
    'Fluid transmits sound poorly, producing dullness to percussion, diminished breath sounds, and reduced tactile fremitus.',
    { text: 'Wheezing indicates airway narrowing rather than fluid in the pleural space.', trap: 'plausible-fact' },
    { text: 'A pleural effusion large enough to be clinically apparent produces findings.', trap: 'expected' }
  ],
  'PHY-086': [
    { text: 'Dawn phenomenon shows a normal or rising 3 a.m. glucose from morning hormone surges. Here the 3 a.m. value is 52.', trap: 'plausible-fact' },
    'A low 3 a.m. glucose followed by morning hyperglycaemia is rebound from nocturnal hypoglycaemia, treated by reducing evening insulin or adding a bedtime snack.',
    { text: 'Insulin resistance would not produce a 3 a.m. glucose of 52.', trap: 'plausible-fact' },
    { text: 'A nocturnal glucose of 52 is dangerous, not normal.', trap: 'expected' }
  ],
  'PHY-087': [
    { text: 'High fibre during an acute flare increases pain and complication risk. It is the long-term prevention strategy, not the acute treatment.', trap: 'contraindicated' },
    'Acute inflammation calls for bowel rest with gradual advancement, moving to a high-fibre diet once the inflammation has resolved.',
    { text: 'A permanently high-fat diet addresses neither the flare nor the prevention.', trap: 'contraindicated' },
    { text: 'Diet differs markedly between the acute flare and the maintenance phase.', trap: 'contraindicated' }
  ],
  'PHY-088': [
    { text: 'Dietary calcium is not the driver. The calcium is low precisely because the kidney cannot activate vitamin D.', trap: 'plausible-fact' },
    'Phosphorus retention and impaired vitamin D activation lower serum calcium, driving secondary hyperparathyroidism that leaches calcium from bone and calcifies vessels.',
    { text: 'Excess vitamin D would raise calcium, not lower it.', trap: 'plausible-fact' },
    { text: 'This pattern requires binders, dietary restriction, and vitamin D analogues — it is not left untreated.', trap: 'contraindicated' }
  ],
  'PHY-089': [
    { text: 'Daily use of abortive medication causes medication overuse headache, which is itself a common cause of chronic daily headache.', trap: 'contraindicated' },
    'Trigger identification through a headache diary, regular sleep and meals, stress management, and preventive medication when attacks are frequent.',
    { text: 'Caffeine both triggers migraine and causes withdrawal headache.', trap: 'contraindicated' },
    { text: 'Regular moderate exercise reduces migraine frequency. Permanent avoidance is neither necessary nor helpful.', trap: 'contraindicated' }
  ],
  'PHY-090': [
    { text: 'Nurses do not remove skeletal pins. That is a surgical procedure.', trap: 'wrong-scope' },
    'Pin site infection can extend into bone as osteomyelitis, which is difficult to eradicate, so early culture and antibiotic treatment matter.',
    { text: 'An occlusive dressing traps purulent drainage against the pin site.', trap: 'contraindicated' },
    { text: 'Weight changes require an order and do nothing about infection.', trap: 'wrong-scope' }
  ],
  'PHY-091': [
    { text: 'They exist on a continuum but differ in whether myocardium dies, which is the entire clinical distinction.', trap: 'plausible-fact' },
    'Angina is reversible ischaemia from a temporary supply-demand mismatch. Infarction is cell death from sustained occlusion, which is why troponin rises.',
    { text: 'Angina by definition resolves without permanent damage.', trap: 'plausible-fact' },
    { text: 'Infarction pain characteristically persists despite rest, which is what distinguishes it at the bedside.', trap: 'plausible-fact' }
  ],
  'PHY-092': [
    { text: 'Mucus hypersecretion describes chronic bronchitis. Emphysema is a destructive process.', trap: 'plausible-fact' },
    'Emphysema destroys alveolar walls and the elastic tissue that drives passive exhalation, so air is trapped and the chest becomes chronically hyperinflated.',
    { text: 'Pleural fluid produces dullness and diminished sounds rather than hyperinflation.', trap: 'plausible-fact' },
    { text: 'The barrel shape comes from trapped air, not from muscle bulk.', trap: 'plausible-fact' }
  ],
  'PSY-055': [
    { text: 'A body mass index of 14 describes anorexia nervosa. Clients with bulimia are frequently normal weight, which is part of why it is missed.', trap: 'plausible-fact' },
    'Repeated self-induced vomiting produces enamel erosion from gastric acid, parotid enlargement, and Russell sign calluses on the dorsum of the hand.',
    { text: 'Lanugo is a response to prolonged severe malnutrition, characteristic of anorexia.', trap: 'plausible-fact' },
    { text: 'Amenorrhoea accompanies the very low body weight of anorexia rather than normal-weight bulimia.', trap: 'plausible-fact' }
  ],
  'PSY-056': [
    { text: 'Removing all evidence of the infant impedes mourning and forecloses memories the parents may later want desperately.', trap: 'contraindicated' },
    'Creating memories and offering contact entirely according to parental preference supports grief and reduces later complicated grief.',
    { text: 'Pointing to future children minimises the loss of this child, who is not replaceable.', trap: 'contraindicated' },
    { text: 'Discouraging contact removes a choice that belongs to the parents and that many later say mattered enormously.', trap: 'contraindicated' }
  ],
  'MOC-095': [
    { text: 'Minimising leaves the session open under the nurse\'s credentials, so anything charted next carries their name.', trap: 'contraindicated' },
    'Logging off or locking is the only action that both prevents unauthorised viewing and prevents documentation being entered under the nurse\'s login.',
    { text: 'Turning the monitor addresses viewing but leaves the authenticated session open.', trap: 'contraindicated' },
    { text: 'Assigning an observer does not close a session and makes a UAP responsible for the nurse\'s credentials.', trap: 'wrong-scope' }
  ],
  'SAF-003': [
    { text: 'Standard precautions do not stop a respiratory pathogen that spreads by coughing, and pertussis is highly transmissible before the diagnosis is confirmed.', trap: 'contraindicated' },
    'Pertussis spreads by large respiratory droplets over a short distance, requiring a surgical mask within about 6 feet and a private room where possible.',
    { text: 'Airborne precautions are reserved for pathogens carried on small particles that stay suspended — tuberculosis, measles, varicella. Pertussis droplets fall out of the air.', trap: 'plausible-fact' },
    { text: 'A protective environment shields an immunocompromised client from the world. Here the client is the source.', trap: 'plausible-fact' }
  ],
  'SAF-005': [
    { text: 'Alcohol does not kill C. difficile spores. This is the most consequential hand hygiene exception there is.', trap: 'contraindicated' },
    'Only the mechanical friction and rinsing of soap and water removes spores. The same applies to norovirus and Bacillus anthracis.',
    { text: 'Offering either implies alcohol is adequate, which it is not for a spore-forming organism.', trap: 'plausible-fact' },
    { text: 'Antiseptic wipes have the same limitation as alcohol against spores.', trap: 'contraindicated' }
  ],
  'SAF-007': [
    { text: 'Contamination through a wet drape is invisible by definition. Waiting for something to see means it is already too late.', trap: 'contraindicated' },
    'Moisture wicks organisms from the unsterile surface below through the drape — strikethrough. The field is contaminated regardless of appearance.',
    { text: 'Covering does not undo the contamination that has already wicked through, and it adds a second layer over a compromised field.', trap: 'contraindicated' },
    { text: 'Blotting cannot restore sterility to a barrier that has already been breached.', trap: 'contraindicated' }
  ],
  'SAF-009': [
    { text: 'Eight hours in restraints without release risks pressure injury, nerve compression, and circulatory compromise.', trap: 'contraindicated' },
    { text: 'Four hours is still too long for a restrained limb, and it does not meet the standard for toileting and hydration needs.', trap: 'plausible-fact' },
    'At least every 2 hours the restraints are released to assess circulation, skin, and range of motion and to provide toileting, hydration, and repositioning.',
    { text: 'A restrained client may be unable to request anything reliably. The schedule exists precisely because they cannot advocate for themselves.', trap: 'contraindicated' }
  ],
  'SAF-010': [
    { text: 'Shape and colour vary between manufacturers and change with generic substitution. Visual identification is a documented cause of wrong-drug errors.', trap: 'contraindicated' },
    'A medication that cannot be positively identified from an intact label is not given. Pharmacy replaces it.',
    { text: 'A second person looking at the same unreadable label adds a signature, not certainty.', trap: 'plausible-fact' },
    { text: 'Documenting a concern after administering does not undo the administration.', trap: 'contraindicated' }
  ],
  'SAF-012': [
    { text: 'Standard precautions are inadequate for a resistant organism in a wound, which contaminates surfaces and clothing.', trap: 'contraindicated' },
    'MRSA spreads by direct and indirect contact, so gown and gloves go on before entering the room and equipment is dedicated to the client.',
    { text: 'A mask does nothing for an organism spread by touch, and it leaves the hands and clothing unprotected.', trap: 'plausible-fact' },
    { text: 'An N95 and negative pressure address airborne transmission, which is not how MRSA moves.', trap: 'plausible-fact' }
  ],
  'SAF-013': [
    { text: 'Lifting under the axillae risks brachial plexus injury and shoulder dislocation, and it is a common enough habit to be worth unlearning deliberately.', trap: 'contraindicated' },
    'A gait belt with a stand-assist device distributes the load safely for a client who can bear partial weight and follow directions, and protects the nurse.',
    { text: 'A client pulling on the nurse\'s neck can cause cervical injury, and if they lose their footing both people fall.', trap: 'contraindicated' },
    { text: 'A solo transfer of a partial-weight-bearing client leaves no one to control the fall if the legs give way.', trap: 'contraindicated' }
  ],
  'SAF-016': [
    { text: 'Standard gloves are permeable to many antineoplastics, and a surgical mask does not protect against aerosol.', trap: 'contraindicated' },
    'Chemotherapy-rated double gloves, a closed-front impermeable gown, eye protection where splashing is possible, and dedicated hazardous waste disposal.',
    { text: 'Crushing aerosolises the drug into the room and exposes everyone in it.', trap: 'contraindicated' },
    { text: 'Sink disposal releases cytotoxic agents into the water supply. All of it goes in designated hazardous waste.', trap: 'contraindicated' }
  ],
  'SAF-017': [
    { text: 'Reporting is essential and time-critical for prophylaxis, but the seconds spent washing reduce the inoculum first.', trap: 'notify-first' },
    'Immediate washing with soap and water reduces the amount of inoculum at the site. Reporting follows at once so source testing and prophylaxis can begin within the effective window.',
    { text: 'Squeezing causes tissue trauma and increases local blood flow without reducing transmission risk.', trap: 'contraindicated' },
    { text: 'Bandaging without washing seals contaminated material against the wound.', trap: 'contraindicated' }
  ],
  'SAF-018': [
    { text: 'A single postoperative client ambulating independently has one modest risk factor.', trap: 'secondary' },
    'Age, a new diuretic causing urgency and orthostasis, a sedating benzodiazepine, and nocturnal toileting compound into the highest-risk profile here.',
    { text: 'Bed rest with compression devices removes the ambulation that most falls occur during.', trap: 'secondary' },
    { text: 'A stable gait with an established assistive device the client already uses competently is comparatively low risk.', trap: 'secondary' }
  ],
  'SAF-020': [
    { text: 'Sequencing does not verify anything. The check must be independent, not merely unhurried.', trap: 'plausible-fact' },
    'High-alert medications require an independent double check in which a second nurse separately verifies drug, dose, rate, and client without being shown the first nurse\'s work.',
    { text: 'Clients can and should be encouraged to question medications, but they cannot be the verification mechanism for a high-alert drug.', trap: 'wrong-scope' },
    { text: 'Documentation after the fact records the error rather than preventing it.', trap: 'contraindicated' }
  ],
  'SAF-021': [
    { text: 'Clients are not fit-tested for N95 respirators, and an unfitted one gives false confidence while impeding an already compromised client\'s breathing.', trap: 'plausible-fact' },
    'The client wears a surgical mask for source control, containing their own droplet nuclei. N95 respirators are for staff sharing the client\'s air space.',
    { text: 'An unmasked client with active tuberculosis disperses organisms through every corridor they pass.', trap: 'contraindicated' },
    { text: 'Necessary imaging is not deferred for the weeks of treatment required to render a client non-infectious.', trap: 'contraindicated' }
  ],
  'SAF-022': [
    { text: 'Wool generates static electricity, which is a spark source in an oxygen-enriched environment.', trap: 'contraindicated' },
    'Electric devices can spark and petroleum products are flammable. Oxygen does not burn but dramatically accelerates anything that does.',
    { text: 'Cylinders are secured upright. A horizontal tank can become a projectile if the valve is sheared off.', trap: 'contraindicated' },
    { text: 'Open flame near oxygen is the single most dangerous thing on this list.', trap: 'contraindicated' }
  ],
  'SAF-023': [
    'Raw produce and unpasteurised products carry bacterial and fungal loads that an intact immune system handles and a compromised one does not.',
    { text: 'Flowers and standing water harbour Pseudomonas and Aspergillus. This is a genuinely well-meant suggestion that causes infections.', trap: 'contraindicated' },
    { text: 'Cat litter carries Toxoplasma. Someone else should change it, and daily changing increases rather than reduces this client\'s exposure.', trap: 'contraindicated' },
    { text: 'Hand hygiene does not protect against airborne respiratory pathogens in a crowd.', trap: 'plausible-fact' }
  ],
  'SAF-025': [
    { text: 'A blind sweep pushes the object further into the airway and can convert a partial obstruction into a complete one.', trap: 'contraindicated' },
    'A conscious adult with complete obstruction receives abdominal thrusts until the object clears or they lose consciousness, at which point CPR begins.',
    { text: 'Fluid cannot pass a complete obstruction and adds aspiration risk.', trap: 'contraindicated' },
    { text: 'Rescue breaths cannot ventilate past a blockage, and laying a conscious choking client down wastes the time thrusts would use.', trap: 'contraindicated' }
  ],
  'SAF-027': [
    { text: 'Reaching forward shifts the centre of gravity outside the walker\'s base of support, which is how clients fall over the front of it.', trap: 'contraindicated' },
    'The walker advances a short distance, the weaker leg steps in first, then the stronger leg follows, keeping the client inside the base of support.',
    { text: 'A walker to one side provides no support in the direction the client is moving.', trap: 'contraindicated' },
    { text: 'Carrying the walker means it is providing no support at all.', trap: 'contraindicated' }
  ],
  'SAF-028': [
    { text: 'Transparent dressings are changed every 7 days, or sooner if soiled or loose. Daily changes traumatise the site and increase infection risk.', trap: 'plausible-fact' },
    'Hub disinfection before every access is a core prevention measure, alongside daily review of whether the line is still needed and prompt removal when it is not.',
    { text: 'Sterile water is not used for flushing. Saline maintains patency without causing haemolysis.', trap: 'contraindicated' },
    { text: 'Leaving a line in longer than necessary is the single largest driver of central line infection. Line days are the risk.', trap: 'contraindicated' }
  ],
  'SAF-030': [
    { text: 'Single-nurse verification removes the redundancy that catches the error. ABO-incompatible transfusion is rapidly fatal.', trap: 'contraindicated' },
    'Two qualified staff verify client identifiers, ABO and Rh compatibility, unit number, and expiration at the bedside — every element, in the client\'s presence.',
    { text: 'The blood bank cannot verify that this unit reached the right client. The bedside is where mismatches happen.', trap: 'plausible-fact' },
    { text: 'Client self-identification is one of the two identifiers, not the whole verification.', trap: 'secondary' }
  ],
  'SAF-032': [
    { text: 'Removing a soiled dressing with sterile gloves contaminates them immediately, and using them for the new dressing carries organisms into the wound.', trap: 'contraindicated' },
    'Clean gloves come off with the soiled dressing, hand hygiene follows, then sterile gloves for the new dressing. Dirty to clean always requires a change in between.',
    { text: 'This inverts the sequence, using sterility where it is not needed and omitting it where it is.', trap: 'contraindicated' },
    { text: 'One pair of gloves throughout transfers organisms from the old dressing directly into the wound bed.', trap: 'contraindicated' }
  ],
  'SAF-034': [
    { text: 'Body mechanics do not make an unsafe lift safe. Manual lifting above roughly 35 pounds injures staff regardless of technique.', trap: 'plausible-fact' },
    'Safe patient handling standards direct mechanical lifts or friction-reducing devices for any client who cannot assist, with the appropriate number of staff.',
    { text: 'Two people manually lifting 250 pounds exceeds safe limits for both of them and risks dropping the client.', trap: 'contraindicated' },
    { text: 'A client who cannot assist also cannot use a trapeze. The premise of the option contradicts the stem.', trap: 'plausible-fact' }
  ],
  'SAF-035': [
    { text: 'A neutropenic client has almost no defence against a resistant organism. This is the most dangerous pairing on the list.', trap: 'contraindicated' },
    'Cohorting clients with the same organism is acceptable when private rooms are unavailable, because neither can acquire something they already have.',
    { text: 'A fresh surgical incision is an open portal of entry for a resistant organism.', trap: 'contraindicated' },
    { text: 'An indwelling catheter is a direct route into the urinary tract for whatever is in the room.', trap: 'contraindicated' }
  ],
  'SAF-037': [
    { text: 'Indefinite restraint orders are prohibited. The time limit is what forces reassessment of whether restraint is still necessary.', trap: 'contraindicated' },
    'Restraint orders specify type, clinical justification, and a duration consistent with regulation, with renewal requiring fresh assessment.',
    { text: 'As-needed restraint orders are explicitly prohibited, because they let restraint be applied without a clinician evaluating the need each time.', trap: 'contraindicated' },
    { text: 'A blanket authorisation is the opposite of the specificity restraint regulation requires.', trap: 'contraindicated' }
  ],
  'PHY-024': [
    { text: 'Twenty-seven would be the total if the head were omitted. Every listed area counts.', trap: 'plausible-fact' },
    { text: 'Half-values apply to anterior or posterior surfaces separately. Here whole surfaces are specified.', trap: 'plausible-fact' },
    'Anterior trunk 18, entire arm 9, entire head 9 — total 36 percent. Burns of this extent require formal fluid resuscitation and burn centre referral.',
    { text: 'Forty-five would require an additional whole arm or the posterior trunk.', trap: 'plausible-fact' }
  ],
  'PHY-025': [
    { text: 'Both halves are reversed. Potassium rises from cell lysis, and plasma leak concentrates rather than dilutes the blood.', trap: 'plausible-fact' },
    'Cell destruction releases potassium while massive plasma leak into the interstitium concentrates the remaining blood, raising haematocrit despite red cell loss.',
    { text: 'Sodium falls as it shifts into the interstitium with the plasma. The haematocrit rises rather than falls.', trap: 'plausible-fact' },
    { text: 'Extensive burns produce profound derangement within hours. Normal values would be the surprising finding.', trap: 'expected' }
  ],
  'PHY-026': [
    { text: 'Binders work over hours. With peaked T waves already present, the client needs myocardial protection within minutes.', trap: 'late-sign' },
    'Calcium does not lower potassium but immediately stabilises cardiac membranes, buying time for insulin with dextrose to shift it and binders or dialysis to remove it.',
    { text: 'Supplementing potassium at 6.8 would be rapidly fatal.', trap: 'contraindicated' },
    { text: 'Potassium-sparing diuretics retain potassium, which is the opposite of what is needed.', trap: 'contraindicated' }
  ],
  'PHY-027': [
    { text: 'Hyperkalaemia produces peaked T waves rather than flattened ones with U waves.', trap: 'plausible-fact' },
    'Gastric losses deplete potassium, producing muscle and smooth muscle weakness with flattened T waves and prominent U waves.',
    { text: 'Hypercalcaemia causes lethargy and constipation but not the U wave pattern.', trap: 'plausible-fact' },
    { text: 'Gastric suction loses sodium along with everything else; it does not concentrate it.', trap: 'plausible-fact' }
  ],
  'PHY-028': [
    { text: 'Hypovolaemic shock produces tachycardia with cool clammy skin. This client is bradycardic and warm.', trap: 'plausible-fact' },
    'Loss of sympathetic tone below a high spinal injury produces vasodilation with warm dry skin, and unopposed vagal tone produces bradycardia.',
    { text: 'Cardiogenic shock produces tachycardia with cool skin and signs of congestion.', trap: 'plausible-fact' },
    { text: 'Septic shock is warm early but produces tachycardia, and there is no infection in this presentation.', trap: 'plausible-fact' }
  ],
  'PHY-029': [
    { text: 'High resistance with low output describes cardiogenic and hypovolaemic shock, where the body clamps down to preserve pressure.', trap: 'plausible-fact' },
    'Early septic shock is vasodilated with compensatory increased output, producing warm flushed skin and bounding pulses despite hypotension.',
    { text: 'Bradycardia with hypertension is Cushing triad, a neurological rather than septic pattern.', trap: 'plausible-fact' },
    { text: 'Septic shock by definition involves hypotension unresponsive to fluid.', trap: 'plausible-fact' }
  ],
  'PHY-030': [
    { text: 'Elevation is correct for venous disease and exactly wrong for arterial, where gravity is needed to drive flow into the limb.', trap: 'contraindicated' },
    'Arterial insufficiency improves with gravity assisting flow into the extremity, so dependency helps while elevation worsens the ischaemia.',
    { text: 'Heating pads cause burns in a limb with neuropathy and reduced perfusion, and the client may not feel it happening.', trap: 'contraindicated' },
    { text: 'Tight compression further restricts arterial inflow. Compression is for venous disease.', trap: 'contraindicated' }
  ],
  'PHY-031': [
    { text: 'Deep punched-out toe ulcers with a cool pale foot describe arterial disease.', trap: 'plausible-fact' },
    'Venous ulcers sit over the medial malleolus with irregular margins, heavy exudate, surrounding oedema, and hemosiderin staining.',
    { text: 'Dry gangrene of the heel is an arterial end-stage finding.', trap: 'plausible-fact' },
    { text: 'Venous insufficiency reliably produces skin changes — oedema, staining, and lipodermatosclerosis.', trap: 'plausible-fact' }
  ],
  'PHY-032': [
    { text: 'Gradual onset with fever and productive cough describes pneumonia. The word that separates them is sudden.', trap: 'plausible-fact' },
    'Pulmonary embolism presents abruptly with dyspnoea, pleuritic pain, tachycardia, and hypoxaemia, often with a sense of doom.',
    { text: 'Bronchodilator-responsive wheezing describes asthma or reactive airways.', trap: 'plausible-fact' },
    { text: 'A chronic morning cough suggests chronic bronchitis rather than an acute vascular event.', trap: 'plausible-fact' }
  ],
  'PHY-033': [
    { text: 'These are Addison findings — cortisol deficiency with hyperpigmentation from ACTH excess.', trap: 'plausible-fact' },
    'Cortisol excess redistributes fat centrally, wastes peripheral protein, raises glucose, retains sodium and water, and wastes potassium.',
    { text: 'Cortisol raises glucose and lowers potassium. Both are inverted here.', trap: 'plausible-fact' },
    { text: 'Bradycardia with cold intolerance describes hypothyroidism.', trap: 'plausible-fact' }
  ],
  'PHY-034': [
    { text: 'Fat is the strongest stimulus to pancreatic enzyme secretion, which is precisely what you are trying to stop.', trap: 'contraindicated' },
    'Resting the pancreas, aggressive fluid resuscitation, and effective analgesia are the foundations, with low-fat intake resumed as pain and enzymes improve.',
    { text: 'Surgery is reserved for complications such as necrosis or gallstone obstruction, not for pancreatitis as a rule.', trap: 'contraindicated' },
    { text: 'Immediate oral fluids stimulate secretion and are commonly not tolerated.', trap: 'contraindicated' }
  ],
  'PHY-035': [
    { text: 'Effluent should be clear. Cloudiness is the single most important thing to notice in peritoneal dialysis.', trap: 'expected' },
    'Cloudy effluent is the hallmark of peritonitis, typically preceding fever and pain. Fluid goes for cell count, Gram stain, and culture.',
    { text: 'Catheter migration causes poor drainage and inflow pain rather than cloudy effluent with fever.', trap: 'plausible-fact' },
    { text: 'Excessive ultrafiltration causes hypotension and cramping, not cloudy fluid.', trap: 'plausible-fact' }
  ],
  'PHY-036': [
    { text: 'Restraining a seizing client causes fractures and soft tissue injury against the tonic-clonic contractions.', trap: 'contraindicated' },
    'Protect the head, clear the area, turn to the side to protect the airway, and time the seizure. Nothing goes in the mouth.',
    { text: 'Anything in the mouth risks dental injury, soft tissue trauma, and airway obstruction.', trap: 'contraindicated' },
    { text: 'Leaving a seizing client alone means nobody is protecting the airway or timing the event.', trap: 'contraindicated' }
  ],
  'PHY-037': [
    { text: 'A typical seizure self-terminates within a couple of minutes. Six minutes of continuous activity has already crossed the threshold.', trap: 'expected' },
    'Continuous seizure beyond about 5 minutes defines status epilepticus, which causes neuronal injury, hyperthermia, and rhabdomyolysis.',
    { text: 'Waiting another 20 minutes allows irreversible neuronal damage.', trap: 'contraindicated' },
    { text: 'Oral administration is impossible during a seizure and would risk aspiration.', trap: 'contraindicated' }
  ],
  'PHY-038': [
    { text: 'The two have distinguishing features that determine entirely different treatment. Stiffness duration is the most useful bedside discriminator.', trap: 'plausible-fact' },
    'Rheumatoid arthritis is systemic and autoimmune: prolonged morning stiffness, symmetric small joint involvement, fatigue, and improvement with movement.',
    { text: 'Osteoarthritis is typically asymmetric and affects weight-bearing joints. Symmetry is the rheumatoid pattern.', trap: 'plausible-fact' },
    { text: 'Fatigue is a prominent systemic feature of rheumatoid arthritis.', trap: 'plausible-fact' }
  ],
  'PHY-039': [
    { text: 'Irradiated skin is fragile and heals poorly. Scrubbing causes breakdown that interrupts treatment.', trap: 'contraindicated' },
    'Gentle cleansing, approved moisturisers, preserved alignment markings, and protection from sun and temperature extremes. Metallic products can alter dose distribution.',
    { text: 'Ice causes vasoconstriction and thermal injury in tissue that is already compromised.', trap: 'contraindicated' },
    { text: 'Irradiated skin is exquisitely photosensitive. Sun exposure causes severe burns.', trap: 'contraindicated' }
  ],
  'PHY-040': [
    { text: 'Anaphylaxis produces urticaria and airway oedema acutely after an exposure, not progressive venous distention.', trap: 'plausible-fact' },
    'Tumour compression of the superior vena cava obstructs venous return from the head, neck, and arms — an oncologic emergency requiring head elevation and urgent radiation or stenting.',
    { text: 'Heart failure produces dependent oedema and pulmonary congestion rather than isolated facial and upper limb swelling.', trap: 'plausible-fact' },
    { text: 'A leg thrombosis cannot explain facial and upper extremity swelling.', trap: 'plausible-fact' }
  ],
  'PHY-041': [
    { text: 'Overnight delay in cord compression is the difference between walking and permanent paralysis.', trap: 'contraindicated' },
    'Back pain with motor weakness and bladder dysfunction in known malignancy is metastatic cord compression. Dexamethasone and imaging within hours determine the outcome.',
    { text: 'Ambulation risks a fall and does nothing about a compressed cord.', trap: 'contraindicated' },
    { text: 'Heat is a comfort measure for a structural emergency.', trap: 'contraindicated' }
  ],
  'PHY-042': [
    'Low calcium increases neuromuscular excitability. Chvostek and Trousseau signs, perioral tingling, and cramps precede tetany, laryngospasm, and seizures.',
    { text: 'Constipation and lethargy are hypercalcaemia findings — calcium sedates.', trap: 'plausible-fact' },
    { text: 'Polyuria occurs with hypercalcaemia, which impairs renal concentrating ability.', trap: 'plausible-fact' },
    { text: 'Hyporeflexia goes with high calcium. Low calcium produces hyperreflexia.', trap: 'plausible-fact' }
  ],
  'PHY-043': [
    { text: 'Inotropes improve contractility, which is exactly what a failing pump needs.', trap: 'plausible-fact' },
    'In cardiogenic shock the pump has failed and the lungs are already congested. Large fluid boluses worsen pulmonary oedema — this is the one shock where fluid is not the answer.',
    { text: 'Supplemental oxygen is appropriate and helps the hypoxaemia of pulmonary congestion.', trap: 'plausible-fact' },
    { text: 'Continuous monitoring is essential given the arrhythmia risk after a large infarction.', trap: 'plausible-fact' }
  ],
  'PHY-044': [
    { text: 'Superficial partial-thickness burns are moist, blistered, and intensely painful because nerve endings survive.', trap: 'plausible-fact' },
    'Full-thickness burns destroy the epidermis, dermis, and the nerve endings within them, which is why the wound is insensate. Painlessness means deeper, not milder.',
    { text: 'Superficial burns are erythematous, painful, and blanch with pressure.', trap: 'plausible-fact' },
    { text: 'Intact sensation is precisely what this wound lacks.', trap: 'plausible-fact' }
  ],
  'PHY-045': [
    { text: 'Fluid resuscitation is essential and comes second. Calculating it while the airway swells shut is a fatal sequencing error.', trap: 'secondary' },
    'Signs of inhalation injury predict rapidly progressive airway oedema. Early elective intubation is far safer than an emergency attempt once swelling has advanced.',
    { text: 'Wound care matters over the coming days. The airway matters over the coming hour.', trap: 'secondary' },
    { text: 'History taking can happen after the airway is secured.', trap: 'assess-first' }
  ],
  'PHY-046': [
    { text: 'A stable pulsatile mass is the expected finding in a known aneurysm under surveillance.', trap: 'expected' },
    'Sudden tearing pain with hypotension indicates rupture or dissection — a catastrophic emergency. The abdomen is never palpated deeply when an aneurysm is suspected.',
    { text: 'Mild postprandial discomfort is non-specific and common.', trap: 'plausible-fact' },
    { text: 'A bruit is an expected finding over turbulent flow in a known aneurysm.', trap: 'expected' }
  ],
  'PHY-047': [
    { text: 'Endocarditis destroys valves and reduces cardiac output. Improvement would not be a complication in any case.', trap: 'plausible-fact' },
    'Vegetations embolise to the brain, spleen, kidneys, and extremities, and valve destruction produces new murmurs and heart failure.',
    { text: 'Hypoglycaemia is not a feature of endocarditis.', trap: 'plausible-fact' },
    { text: 'Endocarditis produces fever, not hypothermia.', trap: 'plausible-fact' }
  ],
  'PHY-048': [
    { text: 'Orange urine is rifampin colouring body fluids. It is expected and harmless.', trap: 'expected' },
    'Isoniazid, rifampin, and pyrazinamide are all hepatotoxic. Jaundice with right upper quadrant pain indicates drug-induced hepatitis requiring immediate evaluation.',
    { text: 'Mild nausea in the first week is common and usually manageable.', trap: 'expected' },
    { text: 'A metallic taste is a recognised nuisance effect.', trap: 'expected' }
  ],
  'PHY-049': [
    { text: 'Reducing positive end-expiratory pressure allows more alveoli to collapse, worsening the shunt that is causing the hypoxaemia.', trap: 'contraindicated' },
    'Low tidal volumes of about 6 mL/kg predicted body weight prevent ventilator-induced injury, adequate PEEP recruits collapsed alveoli, and prone positioning helps severe hypoxaemia.',
    { text: 'ARDS management is deliberately conservative with fluid, because pulmonary oedema is the pathology.', trap: 'contraindicated' },
    { text: 'Discontinuing ventilation in worsening hypoxaemia would be immediately fatal.', trap: 'contraindicated' }
  ],
  'PHY-050': [
    { text: 'Ketoacidosis requires significant ketones and an acidotic pH. Both are absent here.', trap: 'plausible-fact' },
    'Extreme hyperglycaemia with marked hyperosmolality but minimal ketones and a normal pH defines hyperosmolar hyperglycaemic state, seen in type 2 diabetes.',
    { text: 'A glucose of 780 is the opposite of hypoglycaemia.', trap: 'plausible-fact' },
    { text: 'The Somogyi effect is rebound morning hyperglycaemia after nocturnal hypoglycaemia, not a hyperosmolar crisis.', trap: 'plausible-fact' }
  ],
  'PHY-051': [
    { text: 'Thyroid storm is the hyperthyroid crisis — fever, tachycardia, agitation. Everything here is slow and cold.', trap: 'plausible-fact' },
    'Myxedema coma is decompensated severe hypothyroidism with hypothermia, bradycardia, hypoventilation, hyponatraemia, and depressed consciousness.',
    { text: 'Cushing syndrome produces truncal obesity and hypertension rather than progressive obtundation.', trap: 'plausible-fact' },
    { text: 'Pheochromocytoma produces episodic hypertension with headache and palpitations.', trap: 'plausible-fact' }
  ],
  'PHY-052': [
    { text: 'This describes ulcerative colitis. Crohn is the one that skips and can involve any segment.', trap: 'plausible-fact' },
    'Crohn produces patchy transmural inflammation anywhere from mouth to anus, which is why it creates fistulas, abscesses, and strictures.',
    { text: 'Fistulas are a Crohn complication, arising from full-thickness inflammation. Ulcerative colitis is mucosal only.', trap: 'plausible-fact' },
    { text: 'They differ in distribution, depth, complications, and surgical implications.', trap: 'plausible-fact' }
  ],
  'PHY-053': [
    { text: 'Recumbency after eating removes the gravity that keeps gastric contents down.', trap: 'contraindicated' },
    'Smaller meals reduce gastric volume, upright positioning uses gravity, and trigger avoidance addresses the sphincter relaxation that causes reflux.',
    { text: 'Coffee and citrus are classic triggers — caffeine relaxes the lower oesophageal sphincter and acid irritates directly.', trap: 'contraindicated' },
    { text: 'Tight clothing raises intra-abdominal pressure and forces contents upward.', trap: 'contraindicated' }
  ],
  'PHY-054': [
    { text: 'Haematuria with red cell casts and hypertension is nephritic syndrome — the glomerulus is leaking blood rather than protein.', trap: 'plausible-fact' },
    'Nephrotic syndrome is heavy protein loss across a damaged glomerular barrier, producing low albumin, oedema from reduced oncotic pressure, and compensatory hepatic lipoprotein synthesis.',
    { text: 'A normal urinalysis excludes the massive proteinuria that defines the syndrome.', trap: 'plausible-fact' },
    { text: 'Polyuria with dilute urine describes diabetes insipidus.', trap: 'plausible-fact' }
  ],
  'PHY-055': [
    { text: 'Fluid restriction and bed rest both impede stone passage, which depends on flow and movement.', trap: 'contraindicated' },
    'Renal colic is severe and needs effective analgesia, while hydration and ambulation help the stone pass. Straining urine captures it for analysis, which guides prevention.',
    { text: 'Withholding analgesia in renal colic — one of the most severe pains in medicine — is indefensible, and cold does nothing for a ureteric stone.', trap: 'contraindicated' },
    { text: 'Routine catheterisation adds infection risk without helping a stone in the ureter.', trap: 'contraindicated' }
  ],
  'PHY-056': [
    { text: 'Ascending flaccid paralysis describes Guillain-Barre syndrome.', trap: 'plausible-fact' },
    'Dopamine depletion in the substantia nigra produces resting tremor, bradykinesia, rigidity, and postural instability, with masked facies and a shuffling festinating gait.',
    { text: 'Intention tremor with nystagmus and scanning speech is the cerebellar triad of multiple sclerosis.', trap: 'plausible-fact' },
    { text: 'Sudden hemiparesis suggests stroke. Parkinson disease develops gradually and bilaterally.', trap: 'plausible-fact' }
  ],
  'PHY-057': [
    { text: 'Heat impairs conduction across demyelinated axons. Seeking it out worsens symptoms.', trap: 'contraindicated' },
    'The Uhthoff phenomenon is transient symptom worsening with raised body temperature, because heat further slows conduction in demyelinated nerve. Cooling reverses it.',
    { text: 'Temperature sensitivity is a feature of the disease, not evidence of cure.', trap: 'plausible-fact' },
    { text: 'The relationship to temperature is well established and clinically useful to teach.', trap: 'plausible-fact' }
  ],
  'PHY-058': [
    { text: 'Inactivity accelerates bone loss. Mechanical loading is what stimulates bone formation.', trap: 'contraindicated' },
    'Weight-bearing and resistance exercise load the skeleton, adequate calcium and vitamin D supply the substrate, and stopping smoking and limiting alcohol removes the modifiable losses.',
    { text: 'High caffeine intake is associated with reduced bone density.', trap: 'contraindicated' },
    { text: 'Medication addresses bone density but not the falls that actually cause the fractures. Both halves matter.', trap: 'secondary' }
  ],
  'PHY-059': [
    { text: 'Iron treats iron deficiency anaemia. Pernicious anaemia is a B12 problem and iron does nothing for it.', trap: 'plausible-fact' },
    'Autoimmune loss of intrinsic factor prevents B12 absorption in the terminal ileum, so parenteral or high-dose oral replacement is needed for life.',
    { text: 'Folate corrects the anaemia but does not prevent the irreversible neurological damage of B12 deficiency — which is why B12 is checked before folate is given.', trap: 'contraindicated' },
    { text: 'Transfusion treats a symptom monthly rather than correcting the deficiency.', trap: 'secondary' }
  ],
  'PHY-060': [
    { text: 'Haemophilia is an inherited single-factor deficiency, not an acquired consumptive process, and it does not raise D-dimer.', trap: 'plausible-fact' },
    'Widespread clotting cascade activation consumes platelets and factors while fibrinolysis raises D-dimer — the client clots and bleeds simultaneously.',
    { text: 'Iron deficiency anaemia does not affect coagulation times or fibrinogen.', trap: 'plausible-fact' },
    { text: 'Polycythaemia is excess red cell mass and produces thrombosis without the consumptive coagulopathy.', trap: 'plausible-fact' }
  ],
  'PHY-061': [
    { text: 'Ultraviolet light triggers both cutaneous and systemic lupus flares. This is exactly backwards.', trap: 'contraindicated' },
    'Sun protection prevents flares, fever may signal flare or infection from immunosuppression, and urine changes suggest lupus nephritis — the leading cause of morbidity.',
    { text: 'Stopping medication in remission is how flares are precipitated. Maintenance continues.', trap: 'contraindicated' },
    { text: 'Balanced activity is encouraged. Deconditioning worsens fatigue and joint symptoms.', trap: 'contraindicated' }
  ],
  'PHY-062': [
    { text: 'Respiratory acidosis would show a raised PaCO2 as the primary problem. Here the CO2 is low.', trap: 'plausible-fact' },
    'Diarrhoea loses bicarbonate from the lower gut, producing metabolic acidosis, and the low PaCO2 is compensatory hyperventilation. The pH is still abnormal, so compensation is partial.',
    { text: 'Metabolic alkalosis would show a high pH with a raised bicarbonate.', trap: 'plausible-fact' },
    { text: 'Full compensation would return the pH to normal range. At 7.29 it has not.', trap: 'plausible-fact' }
  ],
  'PHY-063': [
    { text: 'Vasopressors constrict an empty vascular bed, raising the pressure reading while worsening tissue ischaemia. Fill the tank before squeezing the pipes.', trap: 'contraindicated' },
    'Stop the bleeding and replace the volume with isotonic crystalloid and blood products through large-bore access.',
    { text: 'A diuretic in hypovolaemic shock removes the volume the client is already short of.', trap: 'contraindicated' },
    { text: 'Head-up positioning reduces cerebral perfusion in a hypotensive client.', trap: 'contraindicated' }
  ],
  'PHY-064': [
    { text: 'Mechanical valves are highly thrombogenic. Without anticoagulation the valve thromboses.', trap: 'contraindicated' },
    'Lifelong warfarin with a higher target INR than for atrial fibrillation, plus antibiotic prophylaxis before certain dental and invasive procedures.',
    { text: 'Direct oral anticoagulants are contraindicated with mechanical valves — trials showed clear inferiority with more thrombosis and bleeding.', trap: 'contraindicated' },
    { text: 'Aspirin alone provides nowhere near adequate protection against mechanical valve thrombosis.', trap: 'contraindicated' }
  ],
  'PHY-065': [
    { text: 'Both halves are wrong: cystic fibrosis needs high fat and calories, and salt losses in sweat mean sodium is added rather than restricted.', trap: 'contraindicated' },
    'Daily airway clearance and inhaled mucolytics, pancreatic enzymes with every meal and snack for fat and vitamin absorption, and a high-calorie diet with liberal salt.',
    { text: 'Exercise aids airway clearance and is actively encouraged.', trap: 'contraindicated' },
    { text: 'Salt is added, not restricted, because of the sodium chloride lost in sweat.', trap: 'contraindicated' }
  ],
  'PHY-066': [
    { text: 'Removing the entire thyroid eliminates hormone production. Without replacement the client progresses to myxedema.', trap: 'contraindicated' },
    'Lifelong levothyroxine titrated by TSH, with calcium monitoring if parathyroid function was affected during surgery.',
    { text: 'Antithyroid medication suppresses a gland that is no longer there.', trap: 'contraindicated' },
    { text: 'Radioactive iodine ablates thyroid tissue. After total removal there is nothing to ablate.', trap: 'contraindicated' }
  ],
  'PHY-067': [
    { text: 'Lactulose has no antihypertensive effect.', trap: 'plausible-fact' },
    'Colonic bacteria metabolise lactulose to acids that convert ammonia to non-absorbable ammonium, while its osmotic effect removes it. Titrated to two or three soft stools daily.',
    { text: 'Lactulose does not stimulate appetite, and encephalopathic clients often have poor intake for other reasons.', trap: 'plausible-fact' },
    { text: 'Ascites is addressed by sodium restriction and spironolactone, not lactulose.', trap: 'plausible-fact' }
  ],
  'PHY-068': [
    { text: 'Blood loss during dialysis contributes, but "only" excludes the primary mechanism.', trap: 'plausible-fact' },
    'The kidney produces erythropoietin, so chronic kidney disease causes normocytic anaemia, treated with erythropoiesis-stimulating agents once iron stores are adequate.',
    { text: 'Excess iron does not cause anaemia. Iron deficiency frequently coexists and must be corrected before stimulating agents work.', trap: 'plausible-fact' },
    { text: 'Dehydration raises haematocrit through haemoconcentration rather than lowering it.', trap: 'plausible-fact' }
  ],
  'PHY-069': [
    { text: 'Packing forces organisms up through the fracture toward the meninges.', trap: 'contraindicated' },
    'Glucose-positive drainage with a halo sign indicates a cerebrospinal fluid leak from a basilar skull fracture — a direct route for meningitis. Nothing enters the nose.',
    { text: 'A nasogastric tube can pass through the fracture directly into the cranial vault. This is a documented catastrophic complication.', trap: 'contraindicated' },
    { text: 'Nose blowing raises pressure and drives organisms intracranially.', trap: 'contraindicated' }
  ],
  'PHY-070': [
    { text: 'Telling an amputee their sensation is imaginary denies a well-characterised neurological phenomenon.', trap: 'contraindicated' },
    'Phantom sensation occurs in most amputees and is a normal consequence of cortical reorganisation, distinct from phantom pain, which is also common and treatable.',
    { text: 'Phantom sensation says nothing about surgical success and occurs after technically perfect procedures.', trap: 'plausible-fact' },
    { text: 'It is a neurological phenomenon, not a psychiatric one, and framing it that way is stigmatising and wrong.', trap: 'contraindicated' }
  ],
  'PHY-071': [
    { text: 'Twitching and tetany indicate low calcium. This client has too much.', trap: 'plausible-fact' },
    'Malignancy-related hypercalcaemia depresses neuromuscular function and impairs renal concentrating ability — stones, bones, groans, and psychiatric overtones. Treat with fluids and bisphosphonates.',
    { text: 'Hyperactive reflexes go with hypocalcaemia.', trap: 'plausible-fact' },
    { text: 'Seizures from neuromuscular excitability describe low calcium, not high.', trap: 'plausible-fact' }
  ],
  'PHY-072': [
    { text: 'Cerebral oedema and seizures occur with hyponatraemia, where water moves into brain cells. High sodium shrinks them.', trap: 'plausible-fact' },
    'Hypernatraemia draws water out of cells including neurons, producing thirst, dry membranes, restlessness, and in severe cases seizures and coma. Correction is gradual.',
    { text: 'Weight gain and oedema describe volume overload rather than the cellular dehydration of hypernatraemia.', trap: 'plausible-fact' },
    { text: 'Hypotension with bradycardia does not follow from a raised sodium.', trap: 'plausible-fact' }
  ],
  'PHY-073': [
    { text: 'Crushing and position-independent describes infarction pain, which is the thing being distinguished from.', trap: 'plausible-fact' },
    'Pericardial pain is positional and pleuritic — worse lying flat and on inspiration, relieved by sitting forward — and a friction rub is often audible.',
    { text: 'Radiation to the left arm is more characteristic of ischaemic pain, and pericarditis often radiates to the trapezius ridge instead.', trap: 'plausible-fact' },
    { text: 'A pericardial friction rub is the classic finding when present.', trap: 'plausible-fact' }
  ],
  'PHY-074': [
    { text: 'Framing sleep apnoea as social minimises a condition with substantial cardiovascular mortality.', trap: 'contraindicated' },
    'Recurrent hypoxaemia and sympathetic surges drive resistant hypertension, atrial fibrillation, stroke, and heart failure, while daytime somnolence markedly raises crash risk.',
    { text: 'Untreated sleep apnoea persists and progresses.', trap: 'contraindicated' },
    { text: 'The cardiovascular consequences are the main reason to treat it.', trap: 'contraindicated' }
  ],
  'PHY-075': [
    { text: 'Catecholamine excess produces hypertension and tachycardia, not the opposite.', trap: 'plausible-fact' },
    'Catecholamine-secreting tumours produce paroxysms of severe hypertension with headache, palpitations, and diaphoresis. The abdomen is not palpated deeply, and alpha blockade precedes beta blockade before surgery.',
    { text: 'Weight gain with cold intolerance describes hypothyroidism.', trap: 'plausible-fact' },
    { text: 'Hypoglycaemia with confusion is an insulinoma picture rather than a catecholamine one.', trap: 'plausible-fact' }
  ],
  'PHY-076': [
    { text: 'An uncomplicated flare does not produce a rigid abdomen. Rigidity means the peritoneum is irritated.', trap: 'plausible-fact' },
    'Sudden severe pain with rigidity indicates perforation, and free air under the diaphragm irritates the phrenic nerve, producing the referred shoulder pain.',
    { text: 'Constipation does not produce peritoneal signs or referred shoulder pain.', trap: 'plausible-fact' },
    { text: 'Reflux causes burning retrosternal discomfort without abdominal rigidity.', trap: 'plausible-fact' }
  ],
  'PHY-077': [
    { text: 'More fluid adds volume above an obstruction that is already causing pain and risks hydronephrosis.', trap: 'contraindicated' },
    'Acute retention requires prompt decompression to relieve pain and prevent kidney injury, drained in a controlled manner because rapid decompression of large volumes causes haematuria and hypotension.',
    { text: 'A diuretic increases the retained volume in a bladder that cannot empty.', trap: 'contraindicated' },
    { text: 'Heat alone provides comfort while the bladder continues to distend.', trap: 'comfort-over-abc' }
  ],
  'PHY-078': [
    { text: 'Mannitol does not primarily affect glucose, and glucose alone misses the osmotic and renal effects that matter.', trap: 'plausible-fact' },
    'Mannitol produces profound osmotic diuresis, so urine output, osmolality, and electrolytes are watched for hypovolaemia and kidney injury, with neurological status confirming effect.',
    { text: 'Mannitol is renally cleared and not primarily hepatotoxic.', trap: 'plausible-fact' },
    { text: 'Mannitol is among the more closely monitored infusions in neurocritical care.', trap: 'contraindicated' }
  ],
  'PHY-079': [
    { text: 'Starting or changing urate-lowering therapy during an acute flare can prolong or worsen it by mobilising crystals.', trap: 'contraindicated' },
    'Acute gout is treated with anti-inflammatories and joint protection — even the weight of a sheet is intolerable. Urate-lowering therapy begins after the flare settles.',
    { text: 'Pressure on an acutely inflamed gouty joint is excruciating and therapeutically useless.', trap: 'contraindicated' },
    { text: 'Purine-rich foods raise uric acid and prolong the attack.', trap: 'contraindicated' }
  ],
  'PHY-080': [
    { text: 'Heat and movement both increase bleeding into the joint.', trap: 'contraindicated' },
    'Factor replacement stops the bleeding at source and is given as early as possible, with rest, ice, compression, and elevation limiting the joint damage.',
    { text: 'Aspirin impairs the platelet function this client still has, compounding the bleeding.', trap: 'contraindicated' },
    { text: 'Routine aspiration risks further bleeding and introduces infection into a joint.', trap: 'contraindicated' }
  ],
  'PHY-081': [
    { text: 'A CD4 count below 200 is the threshold at which opportunistic infection risk rises sharply. Doing nothing here is a missed intervention.', trap: 'contraindicated' },
    'Below 200 defines AIDS and marks the threshold for Pneumocystis prophylaxis, usually trimethoprim-sulfamethoxazole, alongside continued antiretroviral therapy.',
    { text: 'Stopping antiretroviral therapy at a low CD4 count would accelerate the decline.', trap: 'contraindicated' },
    { text: 'Live vaccines are contraindicated at this level of immunosuppression.', trap: 'contraindicated' }
  ],
  'PHY-083': [
    { text: 'Compensatory mechanisms hold the blood pressure until roughly 30 percent of blood volume is lost, which makes hypotension a late sign.', trap: 'late-sign' },
    'Cerebral hypoperfusion produces restlessness and anxiety before compensation fails. This is the sign that buys you time.',
    { text: 'Anuria follows sustained renal hypoperfusion and appears well after the earliest changes.', trap: 'late-sign' },
    { text: 'Cyanosis is very late and requires substantial deoxygenated haemoglobin to be visible.', trap: 'late-sign' }
  ],
  'PHY-001': [
    { text: 'These are right-sided findings. Blood backs into the systemic venous circulation when the right ventricle fails.', trap: 'plausible-fact' },
    'The left ventricle pumps into the systemic circulation, so its failure backs pressure into the lungs, producing dyspnoea, orthopnoea, crackles, and eventually pulmonary oedema.',
    { text: 'Ascites is right-sided, and "only" makes it worse — biventricular failure is the usual end point.', trap: 'plausible-fact' },
    { text: 'Splenomegaly relates to portal hypertension and haematological disease rather than to left ventricular failure.', trap: 'plausible-fact' }
  ],
  'PHY-002': [
    { text: 'Lying flat in pulmonary oedema increases venous return to a ventricle that cannot handle what it already has, and a sedative suppresses the respiratory drive keeping the client alive.', trap: 'contraindicated' },
    'Upright with legs dependent pools blood peripherally and maximises diaphragmatic excursion. Oxygen corrects the hypoxaemia while diuretics remove the volume.',
    { text: 'Oral fluids add volume to a client already drowning in it.', trap: 'contraindicated' },
    { text: 'The diagnosis is clinical and the client is hypoxaemic now. Imaging confirms what you already know while they deteriorate.', trap: 'assess-first' }
  ],
  'PHY-004': [
    { text: 'Ambulation increases myocardial oxygen demand in a client whose supply may already be cut off, and eating delays any procedure requiring sedation.', trap: 'contraindicated' },
    'The electrocardiogram within 10 minutes identifies ST elevation requiring emergent catheterisation, and aspirin reduces mortality. Time to reperfusion determines how much myocardium survives.',
    { text: 'Sedation masks the symptom that tells you how the client is doing and treats none of the ischaemia.', trap: 'contraindicated' },
    { text: 'Discharging undifferentiated chest pain without an electrocardiogram and troponin is how infarctions are missed.', trap: 'contraindicated' }
  ],
  'PHY-005': [
    { text: 'It slows the respiratory rate rather than increasing it, which is part of why it relieves dyspnoea.', trap: 'plausible-fact' },
    'Exhaling against pursed lips generates back pressure that splints collapsible airways open, allowing more complete emptying and reducing the air trapping that causes the dyspnoea.',
    { text: 'It improves carbon dioxide elimination. Retention is the problem it addresses, not the mechanism.', trap: 'plausible-fact' },
    { text: 'Diaphragmatic breathing strengthens the diaphragm. Pursed-lip breathing works on airway pressure during exhalation.', trap: 'plausible-fact' }
  ],
  'PHY-006': [
    { text: 'This is the intuitive reading and the dangerous one. Wheeze requires airflow, so less wheeze with more work of breathing means less air moving, not open airways.', trap: 'plausible-fact' },
    'A silent chest with rising work of breathing means airflow has become critically reduced. This is the immediate precursor to respiratory arrest.',
    { text: 'Increasing work of breathing is objective and cannot be feigned. Attributing distress to behaviour delays intubation.', trap: 'contraindicated' },
    { text: 'A resolving pneumothorax would improve breath sounds, not diminish them alongside worsening effort.', trap: 'plausible-fact' }
  ],
  'PHY-007': [
    { text: 'Fluid restriction thickens the very secretions you are trying to mobilise. Systemic hydration is the most effective mucolytic there is.', trap: 'contraindicated' },
    'Hydration thins secretions, humidification loosens them, effective coughing moves them, and mobility prevents pooling and atelectasis.',
    { text: 'Suppressing the cough traps the secretions in the airways, which is how pneumonia worsens into atelectasis and empyema.', trap: 'contraindicated' },
    { text: 'Bed rest promotes pooling in dependent lung regions and is a direct cause of hospital-acquired pneumonia.', trap: 'contraindicated' }
  ],
  'PHY-008': [
    { text: 'Long-acting insulin cannot be titrated against a rapidly changing state, and it does nothing about the profound volume deficit that is the more immediate threat.', trap: 'contraindicated' },
    'Fluids first restore perfusion and lower glucose substantially on their own. Insulin follows, and potassium is watched because insulin drives it intracellularly and can cause fatal hypokalaemia.',
    { text: 'Oral agents require functioning beta cells this client does not have, and a lethargic client should not be taking anything orally.', trap: 'contraindicated' },
    { text: 'Oral fluids cannot replace a deficit of several litres in a client who is lethargic and at aspiration risk.', trap: 'contraindicated' }
  ],
  'PHY-009': [
    { text: 'These are hyperthyroid symptoms. Thyroid hormone sets the metabolic rate, so excess speeds everything up.', trap: 'plausible-fact' },
    'Deficient thyroid hormone slows every system: fatigue, cold intolerance, weight gain, constipation, dry skin, bradycardia, and depression.',
    { text: 'Tremor and diarrhoea reflect metabolic acceleration, the opposite of what is happening here.', trap: 'plausible-fact' },
    { text: 'Exophthalmos is specific to Graves disease, an autoimmune cause of hyperthyroidism.', trap: 'plausible-fact' }
  ],
  'PHY-010': [
    { text: 'Myxedema coma is the hypothyroid crisis: hypothermia, bradycardia, and obtundation. Everything here is fast and hot.', trap: 'plausible-fact' },
    'Thyroid storm is a hypermetabolic crisis precipitated by stress or surgery in a client with hyperthyroidism, producing extreme fever, tachyarrhythmia, agitation, and vomiting.',
    { text: 'Adrenal crisis presents with hypotension and hyperkalaemia rather than a heart rate of 168 with fever.', trap: 'plausible-fact' },
    { text: 'Malignant hyperthermia follows exposure to specific anaesthetic agents and features masseter rigidity with rising carbon dioxide. The Graves history points elsewhere.', trap: 'plausible-fact' }
  ],
  'PHY-011': [
    { text: 'Insulin drives potassium into cells and would help the hyperkalaemia, but it does nothing about the cortisol and aldosterone deficiency causing the collapse.', trap: 'secondary' },
    'Adrenal crisis is cortisol and aldosterone deficiency producing vascular collapse. IV hydrocortisone with aggressive volume replacement is the treatment.',
    { text: 'A diuretic in a client who is already hypotensive and volume-depleted accelerates the collapse.', trap: 'contraindicated' },
    { text: 'The potassium is already high. Supplementing it risks fatal arrhythmia.', trap: 'contraindicated' }
  ],
  'PHY-012': [
    { text: 'Ulcers do cause haematemesis, and "only" is what makes this wrong — in cirrhosis you cannot assume the more benign source.', trap: 'plausible-fact' },
    'Portal hypertension diverts blood through thin-walled collaterals that rupture. Coexisting coagulopathy and thrombocytopenia make the bleeding worse.',
    { text: 'Gastritis rarely produces the large-volume haematemesis characteristic of variceal bleeding.', trap: 'plausible-fact' },
    { text: 'A Mallory-Weiss tear follows forceful retching and is usually self-limiting. In cirrhosis, varices must be assumed until endoscopy says otherwise.', trap: 'plausible-fact' }
  ],
  'PHY-013': [
    { text: 'Silence from the outset with no vomiting describes paralytic ileus, where the bowel is not contracting at all.', trap: 'plausible-fact' },
    'Mechanical obstruction produces high-pitched hyperactive sounds proximal to the blockage as bowel strains against it, followed by silence as it fatigues. Vomiting is early and prominent.',
    { text: 'Diarrhoea with a normal appetite argues against obstruction entirely.', trap: 'plausible-fact' },
    { text: 'Painless rectal bleeding suggests diverticular disease or malignancy rather than obstruction.', trap: 'plausible-fact' }
  ],
  'PHY-014': [
    { text: 'A laxative in suspected perforation increases peristalsis against a compromised bowel wall and can complete the perforation.', trap: 'contraindicated' },
    'Involuntary guarding with rebound tenderness means peritoneal irritation, most often from a perforated viscus. This is a surgical emergency.',
    { text: 'Oral fluids and ambulation both risk spreading contamination and delay the operating theatre.', trap: 'contraindicated' },
    { text: 'Heat increases blood flow and can accelerate the spread of infection through the peritoneum.', trap: 'contraindicated' }
  ],
  'PHY-015': [
    { text: 'Weight loss is the point of dialysis and confirms fluid was removed.', trap: 'expected' },
    'Headache, nausea, restlessness, and confusion after dialysis is disequilibrium syndrome — rapid urea removal creates an osmotic gradient drawing water into brain cells.',
    { text: 'Improved energy reflects the correction of uraemia and is the desired outcome.', trap: 'expected' },
    { text: 'Blood pressure normalising as fluid is removed is expected.', trap: 'expected' }
  ],
  'PHY-016': [
    { text: 'This is exactly backwards. A kidney that cannot excrete potassium will accumulate it to fatal levels, and excess protein generates nitrogenous waste it cannot clear.', trap: 'contraindicated' },
    'During oliguria the kidney cannot excrete potassium, phosphorus, sodium, water, or nitrogenous waste, so all are restricted while calories are kept adequate to prevent catabolism.',
    { text: 'Unlimited fluid in an oliguric client produces overload, pulmonary oedema, and hyponatraemia.', trap: 'contraindicated' },
    { text: 'Sodium drives fluid retention and hypertension in a client who cannot excrete either.', trap: 'contraindicated' }
  ],
  'PHY-017': [
    { text: 'Dysphagia affects a large proportion of strokes and aspiration pneumonia is a leading cause of death afterwards. A regular diet before screening is directly dangerous.', trap: 'contraindicated' },
    'Nothing by mouth until the swallow screen is passed, frequent neurological assessment to detect extension or haemorrhagic transformation, and blood pressure managed per protocol.',
    { text: 'Independent ambulation before assessing motor deficits and balance risks a fall in a client who may have unrecognised weakness or neglect.', trap: 'contraindicated' },
    { text: 'Anticoagulating before imaging excludes haemorrhage can convert a treatable ischaemic stroke into a fatal bleed.', trap: 'contraindicated' }
  ],
  'PHY-018': [
    { text: 'Glucose is unrelated to the demyelinating process and does not predict the deterioration that matters here.', trap: 'plausible-fact' },
    'Guillain-Barre ascends, and when it reaches the diaphragm the client stops breathing. Serial vital capacity and inspiratory force identify the need for intubation before hypoxaemia appears.',
    { text: 'Cranial nerve involvement can occur, but vision is not what kills these clients.', trap: 'plausible-fact' },
    { text: 'Autonomic involvement affects gut motility, but respiratory failure is the emergency.', trap: 'secondary' }
  ],
  'PHY-019': [
    { text: 'They present with similar weakness, which is exactly why the distinction matters — but they are distinguishable, and the treatments are opposite.', trap: 'plausible-fact' },
    'Myasthenic crisis is too little medication and improves with anticholinesterase. Cholinergic crisis is too much and adds muscarinic excess: salivation, lacrimation, diarrhoea, bradycardia.',
    { text: 'Cholinergic crisis causes excessive secretions, not dry mouth. Dry mouth is an anticholinergic effect.', trap: 'plausible-fact' },
    { text: 'Bradycardia is a feature of cholinergic excess, not myasthenic crisis.', trap: 'plausible-fact' }
  ],
  'PHY-020': [
    { text: 'Thromboembolism produces dyspnoea and tachycardia and is the obvious alternative, but it does not produce a petechial rash. That rash is the discriminator.', trap: 'plausible-fact' },
    'Respiratory distress, neurological change, and a petechial rash within 24 to 72 hours of a long bone fracture is fat embolism syndrome.',
    { text: 'Anaphylaxis produces urticaria and angioedema rather than petechiae, and follows an exposure rather than a fracture.', trap: 'plausible-fact' },
    { text: 'Sepsis would develop over a longer course with fever and a source of infection.', trap: 'plausible-fact' }
  ],
  'PHY-021': [
    { text: 'Both halves are actively harmful: dehydration increases viscosity and promotes sickling, and cold causes vasoconstriction that worsens occlusion.', trap: 'contraindicated' },
    'Hydration reduces viscosity and improves microvascular flow, pain in crisis is severe and requires adequate opioids, and warmth promotes vasodilation.',
    { text: 'Cold is the specific error here. Warmth, not cold, is applied to painful areas in sickle crisis.', trap: 'contraindicated' },
    { text: 'Withholding analgesia in sickle crisis is both ineffective and a documented pattern of undertreatment in this population.', trap: 'contraindicated' }
  ],
  'PHY-022': [
    { text: 'Vigorous brushing and flossing cause gingival bleeding in a client whose platelets cannot stop it.', trap: 'contraindicated' },
    'Bleeding precautions minimise trauma at sites that cannot be compressed: soft toothbrush, electric razor, nothing rectal, no intramuscular injections, and no NSAIDs.',
    { text: 'Aspirin irreversibly impairs the platelet function that remains, compounding an already dangerous deficit.', trap: 'contraindicated' },
    { text: 'Contact sports risk intracranial and intra-abdominal bleeding that cannot be controlled.', trap: 'contraindicated' }
  ],
  'PHY-023': [
    { text: 'Antihistamines act too slowly to be primary treatment and do nothing for the airway oedema or the vasodilation. Observing while the airway closes is the danger.', trap: 'contraindicated' },
    'Epinephrine is the only agent that reverses airway oedema, bronchospasm, and vasodilation simultaneously. Antihistamines and steroids are adjuncts, never first.',
    { text: 'Slowing the rate continues delivering the antigen that is causing the reaction.', trap: 'contraindicated' },
    { text: 'Corticosteroids take hours to act and prevent the biphasic reaction. They do not treat the crisis in front of you.', trap: 'contraindicated' }
  ],
  'HPM-013': [
    { text: 'Confusion is never normal aging. Treating it as such is how delirium and urinary tract infections get missed in older adults.', trap: 'contraindicated' },
    'Reduced skin elasticity and slower healing reflect genuine age-related change in collagen and cell turnover.',
    { text: 'Incontinence is common in older adults but not normal, and it has reversible causes worth pursuing.', trap: 'plausible-fact' },
    { text: 'Memory loss that interferes with daily activities is dementia, not aging. Mild forgetfulness is different.', trap: 'contraindicated' }
  ],
  'HPM-016': [
    { text: 'Trust versus mistrust belongs to infancy.', trap: 'plausible-fact' },
    { text: 'Industry versus inferiority is school age, when the child works on competence and accomplishment.', trap: 'plausible-fact' },
    'Adolescence centres on identity versus role confusion — integrating values, roles, and self-concept into a coherent sense of who one is.',
    { text: 'Generativity versus stagnation is middle adulthood, concerned with contributing to the next generation.', trap: 'plausible-fact' }
  ],
  'HPM-023': [
    { text: 'Inactivated influenza vaccine contains no live organism and is safe in immunosuppression.', trap: 'plausible-fact' },
    'MMR is live attenuated and contraindicated in significant immunosuppression, because the weakened virus can cause disease without an intact immune response.',
    { text: 'Tdap is a toxoid and subunit vaccine with no live organism.', trap: 'plausible-fact' },
    { text: 'Pneumococcal polysaccharide vaccine contains no live organism and is particularly recommended in immunosuppression.', trap: 'plausible-fact' }
  ],
  'HPM-029': [
    'Stranger anxiety emerges around 6 to 8 months and indicates the infant has formed a secure attachment and can distinguish familiar from unfamiliar people.',
    { text: 'Indiscriminate friendliness toward any adult can indicate an attachment disorder rather than good adjustment.', trap: 'plausible-fact' },
    { text: 'No reaction to a parent leaving at 8 months is concerning, not reassuring.', trap: 'plausible-fact' },
    { text: 'Short sentences are not expected until around 24 months.', trap: 'plausible-fact' }
  ],
  'HPM-030': [
    '150 minutes of moderate aerobic activity weekly, or 75 vigorous, plus muscle strengthening on two or more days.',
    { text: 'A single weekly session falls well short and does not produce the cardiovascular adaptation the guidance is based on.', trap: 'plausible-fact' },
    { text: 'Moderate activity confers substantial benefit. Requiring vigorous exercise excludes most people who would benefit most.', trap: 'plausible-fact' },
    { text: 'Resistance training is especially valuable after 50 for preserving bone density and muscle mass.', trap: 'contraindicated' }
  ],
  'HPM-031': [
    { text: 'A value at or above the screening threshold is a positive screen, not a normal result.', trap: 'plausible-fact' },
    'The 1-hour test screens; the 3-hour tolerance test diagnoses. A positive screen requires confirmation before any diagnosis is made.',
    { text: 'Insulin is started only after a diagnosis and usually after a trial of diet and exercise.', trap: 'contraindicated' },
    { text: 'Repeating the screening test provides no diagnostic information — it only repeats the screen.', trap: 'secondary' }
  ],
  'HPM-032': [
    { text: 'Formula substitution is rarely necessary and undermines breastfeeding at the point it is being established.', trap: 'contraindicated' },
    'Frequent feeding promotes stooling, which is the primary route of bilirubin elimination, and levels are plotted against hour-specific thresholds for phototherapy.',
    { text: 'Window sunlight risks burns and hypothermia and does not deliver the effective light spectrum.', trap: 'contraindicated' },
    { text: 'Water supplementation reduces caloric intake and stooling, which raises bilirubin rather than lowering it.', trap: 'contraindicated' }
  ],
  'HPM-033': [
    { text: 'Intrauterine devices have among the lowest typical-use failure rates of any method. Fertility awareness has among the highest.', trap: 'plausible-fact' },
    'Fertility awareness depends on accurate daily observation and consistent abstinence during the fertile window, producing a typical-use failure rate well above long-acting methods.',
    { text: 'No fertility awareness method offers any protection against sexually transmitted infection.', trap: 'contraindicated' },
    { text: 'Irregular cycles make the fertile window much harder to predict, reducing reliability considerably.', trap: 'plausible-fact' }
  ],
  'HPM-034': [
    { text: 'Moles do change slowly with age, which is what makes this dangerous — the ABCDE features described are not normal aging.', trap: 'plausible-fact' },
    'Asymmetry, irregular borders, colour variation, and diameter over 6 mm are melanoma warning signs. Early excision is curative and delay is lethal.',
    { text: 'Six months of watchful waiting on a lesion with four warning features can be the difference between excision and metastasis.', trap: 'contraindicated' },
    { text: 'Over-the-counter removal destroys the tissue needed for diagnosis and does not treat melanoma.', trap: 'contraindicated' }
  ],
  'HPM-035': [
    { text: 'Dementia develops gradually over months to years. Overnight onset excludes it as the primary explanation.', trap: 'plausible-fact' },
    'Acute onset confusion with fluctuating course in an acutely ill older adult is delirium — a medical emergency with reversible causes.',
    { text: 'Confusion is never normal aging, and calling it that ends the search for a treatable cause.', trap: 'contraindicated' },
    { text: 'Attributing acute confusion to behaviour delays evaluation of a client who may be hypoxic or septic.', trap: 'contraindicated' }
  ],
  'HPM-036': [
    { text: 'Increasing oxytocin during tachysystole worsens the very problem — the uterus is already contracting too often to perfuse the placenta.', trap: 'contraindicated' },
    'Contractions closer than every 2 minutes, lasting over 90 seconds, or without relaxation between compromise placental perfusion and risk uterine rupture.',
    { text: 'Pushing before full dilation causes cervical oedema and injury.', trap: 'contraindicated' },
    { text: 'Documenting a pattern that is compromising fetal oxygenation does not intervene.', trap: 'contraindicated' }
  ],
  'HPM-037': [
    { text: 'Growth slows markedly after the first year, so proportional intake falls. Expecting infant-level intake creates unnecessary mealtime conflict.', trap: 'plausible-fact' },
    'Physiologic anorexia of toddlerhood follows the slowing of growth. Small frequent nutrient-dense offerings match both the appetite and the developing need for autonomy.',
    { text: 'A quart of milk daily displaces iron-rich foods and is a common cause of iron deficiency anaemia in toddlers. Limit is about 16 to 24 ounces.', trap: 'contraindicated' },
    { text: 'Insisting on plate completion creates power struggles and overrides the child\'s own satiety cues.', trap: 'contraindicated' }
  ],
  'HPM-038': [
    { text: 'Baby blues peak around day 5 and resolve by 2 weeks. At 3 weeks with anhedonia this is no longer blues.', trap: 'plausible-fact' },
    'Symptoms persisting past 2 weeks with anhedonia and worthlessness indicate postpartum depression. Safety assessment and prompt referral are essential.',
    { text: 'A month of delay leaves a treatable and potentially dangerous condition unaddressed, including risk to the infant.', trap: 'contraindicated' },
    { text: 'Stopping breastfeeding does not treat depression and removes a source of bonding at a vulnerable time.', trap: 'contraindicated' }
  ],
  'HPM-039': [
    { text: 'The deltoid is too small for intramuscular injection until about age 3.', trap: 'contraindicated' },
    'The vastus lateralis has the largest muscle mass in infancy with no major nerves or vessels nearby.',
    { text: 'Gluteal sites are avoided in infants because the muscle is underdeveloped and the sciatic nerve is close.', trap: 'contraindicated' },
    { text: 'The ventrogluteal site is preferred in adults and older children, not infants.', trap: 'plausible-fact' }
  ],
  'HPM-040': [
    { text: 'Fifty pounds in 3 months is neither achievable nor safe, and setting it guarantees failure.', trap: 'contraindicated' },
    'A 5 to 10 percent loss produces clinically meaningful improvement in blood pressure, glucose, and lipids, and it is sustainable at 1 to 2 pounds weekly.',
    { text: 'Six hundred calories daily is a very low calorie diet requiring medical supervision and carries real risks.', trap: 'contraindicated' },
    { text: 'Permanent elimination of a macronutrient class is neither necessary nor sustainable.', trap: 'contraindicated' }
  ],
  'HPM-041': [
    { text: 'Folate does prevent a form of anaemia, which makes this partly true — but the neural tube closes long before the third trimester.', trap: 'plausible-fact' },
    'The neural tube closes by about 28 days after conception, so adequate folate must be present before and during very early pregnancy.',
    { text: 'Supplementation is universal rather than risk-based, precisely because the window closes before most pregnancies are recognised.', trap: 'contraindicated' },
    { text: 'Folic acid is actively recommended in pregnancy, not avoided.', trap: 'contraindicated' }
  ],
  'HPM-042': [
    { text: 'Attributing inattention to age misses conductive hearing loss during a critical period for language development.', trap: 'contraindicated' },
    'Recurrent otitis media causes conductive hearing loss presenting as inattention, and it can delay speech and language permanently if unaddressed.',
    { text: 'Framing a hearing problem as a discipline problem is a recognised and consequential error.', trap: 'contraindicated' },
    { text: 'Waiting until school age forfeits the window in which language develops most rapidly.', trap: 'contraindicated' }
  ],
  'HPM-043': [
    { text: 'Uncoordinated prescribing across multiple providers is the mechanism by which duplication and interaction occur.', trap: 'contraindicated' },
    'A brown-bag review of everything the client takes reveals duplications, interactions, and inappropriate medications — essential given polypharmacy and altered pharmacokinetics in aging.',
    { text: 'Herbal products interact meaningfully with prescriptions — St. John\'s wort, ginkgo, and garlic among the most common.', trap: 'contraindicated' },
    { text: 'Stopping when feeling better is how antihypertensives and antibiotics fail.', trap: 'contraindicated' }
  ],
  'HPM-044': [
    { text: 'Six percent is within normal limits, and unnecessary supplementation can undermine breastfeeding establishment.', trap: 'contraindicated' },
    'Newborns normally lose up to 7 to 10 percent of birth weight in the first days from fluid shifts, regaining it by 10 to 14 days.',
    { text: 'IV fluids are a substantial intervention for a finding that is within the expected range.', trap: 'contraindicated' },
    { text: 'Physiologic weight loss is universal in newborns and does not suggest metabolic disease.', trap: 'plausible-fact' }
  ],
  'HPM-045': [
    { text: 'Fourteen months is within the 12 to 18 month closure window, so it may well be normal — but it is documented and monitored rather than dismissed.', trap: 'plausible-fact' },
    'The anterior fontanel typically closes between 12 and 18 months. It is monitored, with evaluation if enlarging or accompanied by increasing head circumference.',
    { text: 'Manual pressure on a fontanel is never appropriate and could injure underlying brain tissue.', trap: 'contraindicated' },
    { text: 'Fluid restriction in an infant risks dehydration and does not affect fontanel closure.', trap: 'contraindicated' }
  ],
  'HPM-046': [
    { text: 'Previa produces painless bright red bleeding with a soft uterus. The pain and rigidity here point the other way.', trap: 'plausible-fact' },
    'Painful bleeding with a rigid tender uterus characterises placental abruption — a life-threatening emergency requiring immediate delivery preparation.',
    { text: 'Labour contractions are intermittent with relaxation between. A board-like uterus does not relax.', trap: 'plausible-fact' },
    { text: 'Round ligament pain is brief, positional, and does not produce a rigid uterus or bleeding.', trap: 'plausible-fact' }
  ],
  'HPM-048': [
    { text: 'Isolation from peers works directly against the developmental task of this age.', trap: 'contraindicated' },
    'School-age children are in industry versus inferiority and need accomplishment, competence, and peer connection. Schoolwork, choices, and peer contact all support this.',
    { text: 'Discouraging questions increases anxiety and fantasy, which are usually worse than the truth.', trap: 'contraindicated' },
    { text: 'Removing all autonomy fosters the inferiority this stage is vulnerable to.', trap: 'contraindicated' }
  ],
  'HPM-049': [
    { text: 'Symmetric shoulders standing is a normal finding.', trap: 'expected' },
    'The Adams forward bend test reveals a rib hump caused by vertebral rotation — the hallmark of structural scoliosis.',
    { text: 'Equal leg lengths is normal and argues against a functional curve.', trap: 'expected' },
    { text: 'A straight spine on forward flexion is exactly the negative result.', trap: 'expected' }
  ],
  'HPM-050': [
    { text: 'Four to five drinks most evenings is far above moderate drinking limits for any adult.', trap: 'contraindicated' },
    'Naming the health risks factually while inviting the client\'s own perspective is effective brief intervention.',
    { text: 'Labelling is stigmatising and reliably shuts down disclosure, which ends the conversation before it starts.', trap: 'contraindicated' },
    { text: 'Issuing a target without exploring readiness rarely produces change and skips the client\'s own reasons.', trap: 'secondary' }
  ],
  'HPM-051': [
    { text: 'The latent phase precedes about 6 cm. This client has reached the transition point.', trap: 'plausible-fact' },
    'The active phase of the first stage begins at about 6 cm and continues to full dilation at 10 cm.',
    { text: 'The second stage begins at full dilation of 10 cm and ends with birth.', trap: 'plausible-fact' },
    { text: 'The third stage is placental delivery, after the baby is born.', trap: 'plausible-fact' }
  ],
  'HPM-052': [
    { text: 'The infant was exposed to high maternal glucose in utero, but that supply stops at birth while the fetal insulin response continues.', trap: 'plausible-fact' },
    'Fetal hyperinsulinaemia persists after the maternal glucose supply is cut at birth, producing hypoglycaemia within the first hours.',
    { text: 'Hypertension is not a feature of the infant of a diabetic mother.', trap: 'plausible-fact' },
    { text: 'Polycythaemia does occur, but "only" excludes hypoglycaemia, which is the immediate threat.', trap: 'plausible-fact' }
  ],
  'HPM-053': [
    { text: 'Vaccine needs increase rather than cease after 65, as immune responsiveness declines.', trap: 'contraindicated' },
    'Annual influenza, pneumococcal protection, recombinant zoster in two doses, and a tetanus-containing booster every 10 years.',
    { text: 'Influenza alone leaves the client unprotected against pneumococcus, zoster, and tetanus.', trap: 'secondary' },
    { text: 'The live attenuated zoster vaccine has been replaced by the recombinant product, which is both more effective and safe in more clients.', trap: 'plausible-fact' }
  ],
  'HPM-054': [
    { text: 'Catheterisation introduces infection risk and treats the symptom while leaving the cause unexamined.', trap: 'contraindicated' },
    'Incontinence is a symptom, not a diagnosis, and often has reversible causes — infection, medications, constipation, restricted mobility.',
    { text: 'Absorbent products manage incontinence without ever asking why it started.', trap: 'secondary' },
    { text: 'Fluid restriction concentrates urine, which irritates the bladder and worsens urgency.', trap: 'contraindicated' }
  ],
  'HPM-055': [
    { text: 'Ordinary morning sickness does not cause weight loss or ketonuria. Those two findings are what separate the two.', trap: 'plausible-fact' },
    'Persistent vomiting with weight loss over 5 percent, dehydration, ketosis, and electrolyte disturbance defines hyperemesis gravidarum.',
    { text: 'Gastroenteritis would typically be self-limiting over days rather than persisting for weeks with progressive weight loss.', trap: 'plausible-fact' },
    { text: 'Gestational diabetes is screened at 24 to 28 weeks and does not present with vomiting and weight loss.', trap: 'plausible-fact' }
  ],
  'HPM-056': [
    { text: 'Multiple simultaneous foods make it impossible to identify which one caused a reaction.', trap: 'contraindicated' },
    'Single-ingredient introduction spaced 3 to 5 days apart allows allergic reactions to be attributed to a specific food.',
    { text: 'Honey is avoided before 12 months because of infant botulism risk — spores the immature gut cannot handle.', trap: 'contraindicated' },
    { text: 'Cow\'s milk before 12 months causes gastrointestinal blood loss and iron deficiency.', trap: 'contraindicated' }
  ],
  'HPM-001': [
    { text: 'Rest and rechecking treats this as a headache. The client has crossed into severe-range hypertension with neurological and hepatic symptoms — waiting an hour risks seizure or stroke.', trap: 'contraindicated' },
    'Headache, visual changes, and epigastric pain with a pressure of 168/104 is severe preeclampsia. Magnesium prevents seizure and antihypertensives prevent maternal stroke; both are time-critical.',
    { text: 'Acetaminophen treats the symptom and masks the warning sign. This headache is cerebral irritability, not tension.', trap: 'contraindicated' },
    { text: 'Proteinuria supports the diagnosis but waiting for the result delays treatment the clinical picture already justifies.', trap: 'assess-first' }
  ],
  'HPM-002': [
    { text: 'Ten pounds is the range for a client with a high starting BMI, not a normal one, and underweight gain risks growth restriction.', trap: 'plausible-fact' },
    'A pre-pregnancy BMI of 22 is normal weight, and the recommended gain is 25 to 35 pounds. Underweight clients gain more, overweight and obese clients gain less.',
    { text: 'Forty to fifty pounds exceeds recommendations for any BMI category and raises risks of macrosomia, caesarean birth, and postpartum retention.', trap: 'plausible-fact' },
    { text: 'Gain range is associated with real outcomes at both extremes. Dismissing it forfeits a useful conversation.', trap: 'plausible-fact' }
  ],
  'HPM-004': [
    { text: 'Oxytocin increases contraction frequency and intensity, which further reduces the placental perfusion that is already inadequate. This makes late decelerations worse.', trap: 'contraindicated' },
    'Late decelerations mean uteroplacental insufficiency. Intrauterine resuscitation is lateral positioning to relieve caval compression, stopping oxytocin, oxygen, and a fluid bolus.',
    { text: 'Caesarean may become necessary, but the pattern often resolves with resuscitation. Escalating to surgery before trying it skips a reversible step.', trap: 'notify-first' },
    { text: 'Late decelerations are never simply documented. They indicate the fetus is not receiving adequate oxygen right now.', trap: 'contraindicated' }
  ],
  'HPM-005': [
    { text: 'Handling the cord causes vasospasm, which cuts fetal circulation further. The cord is never touched or replaced.', trap: 'contraindicated' },
    'Manual elevation of the presenting part off the cord is maintained continuously until delivery, with gravity positioning to assist, while a caesarean is prepared.',
    { text: 'Removing the hand allows the presenting part to compress the cord again. Vaginal delivery is rarely fast enough.', trap: 'contraindicated' },
    { text: 'Oxygen helps but does nothing about the mechanical compression. Monitoring without relieving the compression watches the fetus deteriorate.', trap: 'secondary' }
  ],
  'HPM-006': [
    'A boggy fundus displaced laterally means a full bladder is preventing the uterus from contracting. Massage plus emptying the bladder addresses both the atony and its cause.',
    { text: 'Analgesia treats afterpains, which is reasonable later. It does nothing about a uterus that is not contracting and therefore bleeding.', trap: 'comfort-over-abc' },
    { text: 'Increasing fluids treats volume loss without addressing why the client is losing volume.', trap: 'secondary' },
    { text: 'The provider is notified if bleeding continues after massage and bladder emptying, which frequently resolve it entirely.', trap: 'notify-first' }
  ],
  'HPM-007': [
    { text: 'Bright red with large clots and a foul odour on day 3 suggests retained placental fragments or endometritis, not normal involution.', trap: 'plausible-fact' },
    'Lochia serosa is pinkish-brown from about day 4 through day 10, moderate in amount, with a normal fleshy odour.',
    { text: 'Absent lochia by day 3 is abnormal and can indicate obstruction of outflow or infection.', trap: 'plausible-fact' },
    { text: 'Saturating a pad every 30 minutes meets the definition of postpartum haemorrhage regardless of the day.', trap: 'plausible-fact' }
  ],
  'HPM-008': [
    { text: 'Seven would require losing a point somewhere else. Every other parameter here is full marks.', trap: 'plausible-fact' },
    'Heart rate above 100 scores 2, strong cry 2, active motion 2, grimace 1, and acrocyanosis with a pink body 1 — total 8. A perfectly healthy newborn commonly scores 8 or 9.',
    { text: 'Nine would mean only one point lost, but both grimace and acrocyanosis cost a point here.', trap: 'plausible-fact' },
    { text: 'Ten requires a fully pink newborn with a vigorous cough or sneeze to suction. Acrocyanosis alone rules it out at one minute.', trap: 'plausible-fact' }
  ],
  'HPM-010': [
    'Sitting without support is achieved by 6 to 8 months, so its absence at 9 months is a genuine delay warranting evaluation.',
    { text: 'Independent walking is expected at 12 to 15 months. A 9-month-old who is not walking is entirely on schedule.', trap: 'expected' },
    { text: 'Two-word phrases appear around 24 months. Expecting them at 9 months mistakes the milestone for the age.', trap: 'expected' },
    { text: 'Spoon use develops around 15 to 18 months.', trap: 'expected' }
  ],
  'HPM-011': [
    { text: 'Deferring for minor illness is the single most common cause of missed immunisation, and children who fall behind often stay behind.', trap: 'contraindicated' },
    'Mild illness with or without low-grade fever is not a contraindication. Moderate to severe acute illness is the threshold for postponing.',
    { text: 'Any fever is not a contraindication. Overstating this rule leaves children unprotected for weeks at a time.', trap: 'plausible-fact' },
    { text: 'Partial doses are never given. A reduced dose provides unreliable protection and still counts as an exposure.', trap: 'contraindicated' }
  ],
  'HPM-012': [
    { text: 'Waiting until 65 misses two decades in which colorectal cancer incidence has been rising, particularly in younger adults.', trap: 'plausible-fact' },
    'Average-risk screening now begins at 45, using colonoscopy every 10 years or an approved stool-based test at shorter intervals.',
    { text: 'This misunderstands what screening is for. By the time colorectal cancer is symptomatic it is frequently advanced.', trap: 'contraindicated' },
    { text: 'Thirty is the starting age only for clients with specific hereditary syndromes or a strong family history.', trap: 'plausible-fact' }
  ],
  'HPM-014': [
    'Migraine with aura substantially raises stroke risk, and adding oestrogen compounds it. This is an absolute contraindication.',
    { text: 'Combined oral contraceptives reduce menstrual blood loss and often improve iron deficiency anaemia rather than worsening it.', trap: 'plausible-fact' },
    { text: 'Dysmenorrhoea is a common reason to prescribe them, not to avoid them.', trap: 'plausible-fact' },
    { text: 'Acne frequently improves on combined oral contraceptives, and some are approved specifically for it.', trap: 'plausible-fact' }
  ],
  'HPM-015': [
    { text: 'Low-mercury fish is actively encouraged in pregnancy for its omega-3 content. Only large predatory species are restricted.', trap: 'plausible-fact' },
    'These restrictions target Listeria, which crosses the placenta and causes stillbirth, and methylmercury, which is neurotoxic to the developing brain.',
    { text: 'Pasteurised dairy is an important calcium source in pregnancy. It is the unpasteurised products that carry Listeria.', trap: 'plausible-fact' },
    { text: 'Folate from leafy greens prevents neural tube defects. There is no such thing as excess folate from food.', trap: 'contraindicated' }
  ],
  'HPM-017': [
    { text: 'Atony produces a soft boggy uterus. This fundus is firm and midline, which means the uterus is doing its job and the blood is coming from elsewhere.', trap: 'plausible-fact' },
    'Heavy bleeding with a firm, well-contracted, midline fundus points to a laceration of the cervix, vagina, or perineum, which requires provider inspection and repair.',
    { text: 'Two saturated pads in 30 minutes meets the definition of postpartum haemorrhage. This is not normal at any point.', trap: 'expected' },
    { text: 'A full bladder displaces the fundus laterally and upward. This one is midline.', trap: 'plausible-fact' }
  ],
  'HPM-018': [
    { text: 'Routine alcohol is no longer recommended. It delays separation and provides no infection benefit over dry care.', trap: 'plausible-fact' },
    'Dry cord care with the diaper folded below promotes air drying and separation at 1 to 3 weeks. Redness, drainage, or foul odour suggests omphalitis.',
    { text: 'An occlusive dressing traps moisture, which delays separation and encourages bacterial growth.', trap: 'contraindicated' },
    { text: 'Traction on the cord causes bleeding and creates a portal for infection. It separates on its own.', trap: 'contraindicated' }
  ],
  'HPM-019': [
    { text: 'Hypertension is asymptomatic for years, which is exactly why it is screened rather than waited for. This option defeats the purpose of screening.', trap: 'contraindicated' },
    'Periodic blood pressure, lipid, and glucose screening with immunisation review catches conditions that are silent until they cause an event.',
    { text: 'Waiting until 60 misses the window in which these conditions are most modifiable.', trap: 'contraindicated' },
    { text: 'Routine chest radiography is not a recommended screening test and exposes clients to radiation without mortality benefit.', trap: 'contraindicated' }
  ],
  'HPM-020': [
    { text: 'Exhortation implies the previous attempts failed through insufficient effort, which is both untrue and the fastest way to end the conversation.', trap: 'contraindicated' },
    'Normalising prior attempts, exploring the specific barrier, and offering pharmacotherapy with behavioural support is what actually raises quit rates.',
    { text: 'Fear appeals produce defensiveness rather than change, and this client already knows the risk — they have tried twice.', trap: 'contraindicated' },
    { text: 'Passive deferral misses the moment. The client raised it, which is itself a signal of readiness worth working with.', trap: 'secondary' }
  ],
  'HPM-021': [
    { text: 'Maternal vital signs are essential for assessing haemodynamic status during bleeding.', trap: 'plausible-fact' },
    'Painless bright red third-trimester bleeding suggests placenta previa. A digital examination can perforate the placenta and cause catastrophic haemorrhage.',
    { text: 'External monitoring is non-invasive and gives essential information about fetal status.', trap: 'plausible-fact' },
    { text: 'IV access is a priority in anyone who may be about to haemorrhage.', trap: 'plausible-fact' }
  ],
  'HPM-022': [
    { text: 'A week of anticipation for a preschooler whose sense of time is poorly developed produces prolonged anxiety without improving preparation.', trap: 'contraindicated' },
    'Preschoolers think concretely and have a limited sense of time. Simple words, medical play with safe equipment, and explanation immediately beforehand match how they process.',
    { text: 'Promising it will not hurt destroys trust the first time it does, and that damage carries into every subsequent encounter.', trap: 'contraindicated' },
    { text: 'Physiological rationale exceeds preschool cognition entirely and produces confusion rather than understanding.', trap: 'plausible-fact' }
  ],
  'HPM-025': [
    { text: 'The time and character of the fluid are documented, but that is a record of what happened rather than an assessment of whether the fetus is tolerating it.', trap: 'secondary' },
    'Fetal heart rate assessment immediately after rupture detects cord prolapse or compression, which is the immediate threat when the cushion of fluid is lost.',
    { text: 'Temperature matters for chorioamnionitis over the coming hours, not in the first minute.', trap: 'secondary' },
    { text: 'The provider is notified, but with information about how the fetus responded rather than before you know.', trap: 'notify-first' }
  ],
  'HPM-026': [
    { text: 'Vitamin K has no immune function. This confuses it with the hepatitis B vaccine also given at birth.', trap: 'plausible-fact' },
    'The newborn gut is sterile at birth and cannot synthesise vitamin K, leaving clotting factor production inadequate and risking intracranial and gastrointestinal haemorrhage.',
    { text: 'Jaundice relates to bilirubin metabolism, which vitamin K does not affect.', trap: 'plausible-fact' },
    { text: 'It is a supplement replacing a deficiency, not a vaccine producing immunity.', trap: 'plausible-fact' }
  ],
  'HPM-027': [
    { text: 'Two-word phrases are exactly what is expected at 24 months.', trap: 'expected' },
    'No response to name and absent eye contact are red flags for autism spectrum disorder, and early referral matters because intervention during this window changes outcomes.',
    { text: 'Climbing stairs with a rail is age-appropriate gross motor development.', trap: 'expected' },
    { text: 'Parallel play — playing alongside rather than with peers — is the normal social stage for a 2-year-old.', trap: 'expected' }
  ],
  'HPM-028': [
    { text: 'Stopping causes engorgement, reduces supply, and does not fix the mechanical problem that caused the trauma.', trap: 'contraindicated' },
    'Nipple trauma is almost always a shallow latch. Correcting it addresses the cause, and watching a full feeding is what reveals it.',
    { text: 'Antibiotics treat infection, which has not been established. The cracking is mechanical injury.', trap: 'secondary' },
    { text: 'Time limits reduce intake and milk transfer without changing the latch that is causing the damage.', trap: 'contraindicated' }
  ],
  'PSY-023': [
    { text: 'Pathologising information-seeking discourages a strategy that is working for this client.', trap: 'contraindicated' },
    'Information seeking is problem-focused coping that reduces anxiety and increases perceived control. Supporting it with accurate accessible information is the intervention.',
    { text: 'Denial minimises or refuses the reality. This client is engaging with it in detail.', trap: 'plausible-fact' },
    { text: 'Asking the surgeon questions is engagement, not distrust.', trap: 'plausible-fact' }
  ],
  'PSY-024': [
    { text: 'Three days is far too early to judge efficacy, and switching now restarts the clock without cause.', trap: 'contraindicated' },
    'Explaining the 4 to 6 week time course prevents premature discontinuation, which is the most common cause of antidepressant treatment failure.',
    { text: 'Self-adjusting the dose risks serotonin excess and is prescribing.', trap: 'contraindicated' },
    { text: 'Questioning the diagnosis at day 3 undermines the client and the treatment.', trap: 'contraindicated' }
  ],
  'PSY-025': [
    { text: 'Insisting and explaining invites an argument about the delusion, which the nurse cannot win and which can incorporate them into the delusional system.', trap: 'contraindicated' },
    'Sealed containers the client opens themselves address the delusion practically without arguing about its truth, preserving both nutrition and trust.',
    { text: 'Tube feeding is invasive and premature before less restrictive strategies have been tried.', trap: 'contraindicated' },
    { text: 'Contradicting the delusion directly provokes defensiveness and can make the nurse part of the perceived threat.', trap: 'contraindicated' }
  ],
  'PSY-026': [
    'The death rattle results from secretions the dying client can no longer clear. It is typically not distressing to the client, and repositioning with family education is the main response.',
    { text: 'Uncontrolled pain always requires intervention. Comfort is the entire goal at this stage.', trap: 'plausible-fact' },
    { text: 'Agitation from a distended bladder is a treatable cause of terminal restlessness and should be relieved.', trap: 'plausible-fact' },
    { text: 'A new pressure injury indicates a gap in repositioning and skin care.', trap: 'plausible-fact' }
  ],
  'PSY-027': [
    { text: 'Abruptly blocking a compulsion causes severe anxiety and escalation. The ritual is serving a function the client cannot yet do without.', trap: 'contraindicated' },
    'The ritual is initially permitted while structure and gradual limits are introduced alongside exposure and response prevention therapy and skin protection.',
    { text: 'The client already knows the behaviour is irrational. That insight is characteristic of the disorder and confronting it achieves nothing.', trap: 'contraindicated' },
    { text: 'Ignoring it neglects hands that are bleeding.', trap: 'contraindicated' }
  ],
  'PSY-028': [
    { text: 'Hospitalisation is not indicated without safety concerns, and pathologising normal grief adds harm.', trap: 'contraindicated' },
    'Intense grief with functional impairment at 6 weeks after the death of a child is within expected bounds, though depression and suicide risk are still screened and follow-up arranged.',
    { text: 'Malingering implies deliberate fabrication for gain, which is both unfounded and cruel here.', trap: 'contraindicated' },
    { text: 'No follow-up misses those who go on to develop complicated grief or major depression.', trap: 'contraindicated' }
  ],
  'PSY-029': [
    { text: 'Naloxone would precipitate severe acute withdrawal in a client already withdrawing. It reverses overdose, not withdrawal.', trap: 'contraindicated' },
    'Opioid withdrawal is treated with alpha-2 agonists or opioid agonist therapy plus hydration and symptom management.',
    { text: 'Leaving withdrawal untreated causes needless suffering and drives clients out of treatment and back to use.', trap: 'contraindicated' },
    { text: 'Flumazenil reverses benzodiazepines and has no role here.', trap: 'plausible-fact' }
  ],
  'PSY-030': [
    { text: 'Offering an opinion imposes the nurse\'s judgement on a decision the client is trying to work through.', trap: 'contraindicated' },
    'Reflecting the underlying doubt and inviting exploration helps the client work through ambivalence. The question is usually an opening rather than a request for a verdict.',
    { text: 'Refusing to engage closes a conversation the client just opened.', trap: 'contraindicated' },
    { text: 'Deflecting to the surgeon avoids the emotional content the client actually raised.', trap: 'notify-first' }
  ],
  'PSY-031': [
    { text: 'Reality orientation about a painful loss re-inflicts that loss every time it is repeated, which is why it drives agitation in moderate to advanced dementia.', trap: 'contraindicated' },
    'Validation joins the client in the feeling behind the question rather than correcting the facts, then redirects to something calming.',
    { text: 'Pointing out the repetition shames a client who genuinely cannot remember asking.', trap: 'contraindicated' },
    { text: 'Deferring to the family leaves the distress unaddressed now.', trap: 'secondary' }
  ],
  'PSY-032': [
    { text: 'A fine tremor is an expected lithium effect. A coarse tremor with vomiting and visual change is not — that distinction is the whole question.', trap: 'expected' },
    'Coarse tremor, gastrointestinal symptoms, and visual changes indicate lithium toxicity. The dose is held and a level obtained.',
    { text: 'Increasing the dose in suspected toxicity is directly dangerous.', trap: 'contraindicated' },
    { text: 'Fluid restriction raises the lithium level further, since lithium is handled like sodium.', trap: 'contraindicated' }
  ],
  'PSY-033': [
    { text: 'Accepting the account of the person who may be causing the harm, and treating only the findings, returns the client to the same situation.', trap: 'contraindicated' },
    'Dehydration and pressure injuries with a controlling caregiver are classic neglect indicators. Interviewing the client alone and reporting are both required; suspicion is the threshold.',
    { text: 'Confronting the caregiver can escalate risk to the client after discharge.', trap: 'contraindicated' },
    { text: 'Education does not address suspected abuse, and discharge returns the client to it.', trap: 'contraindicated' }
  ],
  'PSY-034': [
    { text: 'Acceptance involves realistic engagement with the diagnosis. This client is rejecting it.', trap: 'plausible-fact' },
    'Denial is the initial protective response that buffers overwhelming news. The nurse does not confront it but stays available as the client moves through.',
    { text: 'Bargaining involves negotiation, often framed as promises in exchange for a different outcome.', trap: 'plausible-fact' },
    { text: 'Depression involves sadness and withdrawal rather than rejection of the diagnosis.', trap: 'plausible-fact' }
  ],
  'PSY-035': [
    { text: 'Restraints worsen delirium and increase injury, agitation, and duration.', trap: 'contraindicated' },
    'ICU delirium responds to orientation cues, sleep protection, noise reduction, early mobility, family presence, and removing deliriogenic medications.',
    { text: 'Increasing sedation is a leading cause of ICU delirium rather than a treatment for it.', trap: 'contraindicated' },
    { text: 'A windowless room removes the natural light that maintains circadian rhythm, which is part of the problem.', trap: 'contraindicated' }
  ],
  'PSY-036': [
    { text: 'Self-disclosure shifts the focus onto the nurse and blurs a boundary that exists to protect the client.', trap: 'contraindicated' },
    'Redirecting warmly and exploring what prompted the question maintains the boundary while keeping the therapeutic relationship intact.',
    { text: 'A sharp refusal damages the alliance and teaches the client that curiosity is punished.', trap: 'contraindicated' },
    { text: 'Ignoring leaves the client confused about where the boundary is.', trap: 'secondary' }
  ],
  'PSY-037': [
    { text: 'Personal belongings may include the means. Comfort does not outweigh means restriction on suicide precautions.', trap: 'comfort-over-abc' },
    'Removing means and maintaining the prescribed observation level, including during bathroom use, are the essential protections.',
    { text: 'A room at the end of the hall reduces the visibility that keeps the client safe.', trap: 'contraindicated' },
    { text: 'No-suicide contracts have no demonstrated protective effect and must never substitute for observation and means restriction.', trap: 'contraindicated' }
  ],
  'PSY-038': [
    { text: 'Transient memory disturbance around treatments is expected and correctly stated.', trap: 'expected' },
    { text: 'Anaesthesia with a neuromuscular blocking agent is standard, which is exactly why the client will not experience the seizure.', trap: 'expected' },
    'This is the misconception to correct. Electroconvulsive therapy is performed under general anaesthesia, so the client is unconscious throughout.',
    { text: 'Transportation after outpatient treatment is required because of the anaesthesia.', trap: 'expected' }
  ],
  'PSY-039': [
    { text: 'Directing the client to stop typically means they continue and stop telling you, which is far more dangerous.', trap: 'contraindicated' },
    'Many herbal products interact meaningfully with prescriptions. Full documentation and interaction screening preserve both safety and the client\'s willingness to disclose.',
    { text: 'Ignoring the information means the interaction screening never happens.', trap: 'contraindicated' },
    { text: 'Dismissing the practice as ineffective ends disclosure and is not universally true.', trap: 'contraindicated' }
  ],
  'PSY-040': [
    { text: 'Telling someone their fear is unfounded during a flashback does not reach the part of the brain that is reacting.', trap: 'contraindicated' },
    'Grounding reduces the triggering stimulus and orients the client to the present through the senses — the date, the place, what they can see and touch.',
    { text: 'Isolation during a flashback increases distress and removes the person who could ground them.', trap: 'contraindicated' },
    { text: 'Medication is not the first intervention for a trigger that can be removed.', trap: 'secondary' }
  ],
  'PSY-041': [
    { text: 'Sundowning is a neurobiological phenomenon, not attention-seeking, and ignoring it lets the agitation escalate.', trap: 'contraindicated' },
    'Late-day worsening in dementia responds to light, routine, reduced stimulation, earlier scheduling of demanding tasks, and attention to fatigue, hunger, and pain.',
    { text: 'Escalating sedation each afternoon increases falls and confusion without addressing the circadian cause.', trap: 'contraindicated' },
    { text: 'Restraining a client daily for a predictable pattern is neither justified nor effective.', trap: 'contraindicated' }
  ],
  'PSY-042': [
    { text: 'Disulfiram is taken daily to maintain the aversive effect. As-needed dosing provides no deterrent.', trap: 'contraindicated' },
    'Disulfiram inhibits aldehyde dehydrogenase, so any alcohol exposure — including mouthwash, cough syrup, and sauces — causes flushing, severe vomiting, and potentially dangerous hypotension.',
    { text: 'No amount of alcohol is safe on disulfiram. The reaction can be severe.', trap: 'contraindicated' },
    { text: 'Disulfiram creates aversion rather than reducing craving. Naltrexone and acamprosate address craving.', trap: 'plausible-fact' }
  ],
  'PSY-044': [
    { text: 'Promising the client will not be alone may be impossible to guarantee, and a broken promise at the end of life is a lasting harm.', trap: 'contraindicated' },
    'Normalising the fears and moving into concrete planning for symptom control and presence addresses exactly what the client raised.',
    { text: 'Avoidance abandons a client who has just trusted you with what frightens them most.', trap: 'contraindicated' },
    { text: 'A platitude dismisses a specific fear with a general truth.', trap: 'contraindicated' }
  ],
  'PSY-045': [
    { text: 'A why question demands justification and moves the focus from the client to the husband\'s reasons.', trap: 'contraindicated' },
    'Exploring invites the client to elaborate on the topic in more depth — the specific technique being asked about here.',
    { text: 'Advice giving closes the conversation and addresses the symptom rather than what is behind it.', trap: 'contraindicated' },
    { text: 'This is empathy, which is therapeutic — but the question asks specifically for exploring, and this response does not invite elaboration.', trap: 'plausible-fact' }
  ],
  'PSY-046': [
    { text: 'Tardive dyskinesia is a late movement disorder without fever or autonomic instability.', trap: 'plausible-fact' },
    'Hyperthermia, lead-pipe rigidity, altered mental status, and autonomic instability define neuroleptic malignant syndrome — stop the antipsychotic, cool, support.',
    { text: 'Akathisia is subjective motor restlessness without fever or rigidity.', trap: 'plausible-fact' },
    { text: 'Serotonin syndrome features hyperreflexia and clonus rather than lead-pipe rigidity, and follows serotonergic rather than dopamine-blocking drugs.', trap: 'plausible-fact' }
  ],
  'PSY-047': [
    { text: 'Dystonia produces sustained muscle contractions such as torticollis and oculogyric crisis.', trap: 'plausible-fact' },
    'Akathisia is subjective inner restlessness with an irresistible need to move, and it is frequently mistaken for worsening psychosis or anxiety — which leads to increasing the drug causing it.',
    { text: 'Pseudoparkinsonism produces tremor, rigidity, and bradykinesia.', trap: 'plausible-fact' },
    { text: 'Tardive dyskinesia produces involuntary orofacial movements after prolonged therapy.', trap: 'plausible-fact' }
  ],
  'PSY-048': [
    { text: 'Confidentiality yields to a credible threat against an identifiable person. This is the Tarasoff duty.', trap: 'contraindicated' },
    'A specific threat against a named person creates a duty to protect, requiring notification through the appropriate clinical and legal channels.',
    { text: 'Keeping the discussion internal leaves a foreseeable victim unwarned.', trap: 'contraindicated' },
    { text: 'Documenting without acting records the warning you failed to act on.', trap: 'contraindicated' }
  ],
  'PSY-049': [
    { text: 'Fresh unaged protein contains negligible tyramine and is safe.', trap: 'plausible-fact' },
    'Aged cheeses and cured meats are high in tyramine, which a monoamine oxidase inhibitor cannot metabolise, precipitating hypertensive crisis.',
    { text: 'Grains contain no meaningful tyramine.', trap: 'plausible-fact' },
    { text: 'Fresh fruit is safe. It is overripe or fermented fruit that accumulates tyramine.', trap: 'plausible-fact' }
  ],
  'PSY-050': [
    { text: 'Directing questions to the family member bypasses the client and produces less accurate information about their own experience.', trap: 'contraindicated' },
    'Addressing the client directly preserves dignity and autonomy and yields better information, with family supplementing rather than substituting.',
    { text: 'Writing everything out is unnecessary for most hearing loss and slows the interaction considerably.', trap: 'secondary' },
    { text: 'Shouting distorts speech and raises pitch, which is precisely the frequency range age-related hearing loss affects first.', trap: 'contraindicated' }
  ],
  'PSY-051': [
    { text: 'Showering destroys forensic evidence the client may later want, and the decision should be theirs after being told what it means.', trap: 'contraindicated' },
    'Restoring control is central after an assault. Options are explained and each step consented to, with support and prophylaxis discussed.',
    { text: 'Adult clients generally control whether law enforcement is involved. Removing that choice repeats the loss of control.', trap: 'contraindicated' },
    { text: 'Detailed interrogation by the nurse can re-traumatise, and forensic history is taken by trained examiners.', trap: 'contraindicated' }
  ],
  'PSY-052': [
    { text: 'Exceptions are what the behaviour is designed to produce. Granting them reinforces it directly.', trap: 'contraindicated' },
    'Consistent limits applied identically across all staff and shifts remove the leverage that manipulation depends on.',
    { text: 'Aggressive confrontation invites a power struggle the client is often better at than the nurse.', trap: 'contraindicated' },
    { text: 'Avoidance abandons the therapeutic role and leaves the limits to whoever is less consistent.', trap: 'contraindicated' }
  ],
  'PSY-053': [
    { text: 'Benzodiazepines and alcohol are both central nervous system depressants, and the combination causes respiratory depression.', trap: 'contraindicated' },
    'No alcohol or other depressants, no driving until the effect is known, and no abrupt cessation after regular use because withdrawal causes seizures.',
    { text: 'Taking it for any stress promotes dependence and tolerance.', trap: 'contraindicated' },
    { text: 'Long-term continuous benzodiazepine use is discouraged in favour of short-term treatment with therapy.', trap: 'contraindicated' }
  ],
  'PSY-001': [
    { text: 'False reassurance closes the conversation. It answers the nurse\'s discomfort rather than the client\'s.', trap: 'comfort-over-abc' },
    'Naming the feeling and inviting the client to say more keeps the focus on them and opens the door without pushing them through it.',
    { text: 'Redirecting to the provider abandons the client at the moment they reached out. The question was not really about the treatment plan.', trap: 'notify-first' },
    { text: 'Claiming to know exactly how someone feels shifts the focus to the nurse and is almost never true.', trap: 'plausible-fact' }
  ],
  'PSY-003': [
    { text: 'Documenting a veiled suicidal statement without exploring it records the warning without acting on it.', trap: 'assess-first' },
    'Vague statements about things no longer mattering are assessed directly. Asking about ideation, plan, means, and intent does not plant the idea and it determines the level of observation needed.',
    { text: 'Reassurance dismisses the statement and teaches the client not to raise it again.', trap: 'comfort-over-abc' },
    { text: 'Family notification may follow but it does not establish whether this client is safe in the next hour.', trap: 'notify-first' }
  ],
  'PSY-004': [
    { text: 'Passive ideation without a plan is genuinely concerning and needs assessment, but it carries lower immediate lethality than a dated plan with means in hand.', trap: 'secondary' },
    'A specific plan, available means, a chosen time, and deliberately low likelihood of rescue is the highest-lethality combination there is.',
    { text: 'Chronic hopelessness is a significant risk factor and a poor predictor of the next 48 hours on its own.', trap: 'secondary' },
    { text: 'Resolved ideation represents the lowest risk in this set, though it still warrants asking whether anything has changed.', trap: 'secondary' }
  ],
  'PSY-005': [
    { text: 'Mild anxiety sharpens attention and improves performance. This client cannot follow directions.', trap: 'plausible-fact' },
    { text: 'Moderate anxiety narrows the perceptual field but learning is still possible with direction. This client is past that.', trap: 'plausible-fact' },
    'Severe anxiety scatters attention onto fragmented details so that directions cannot be followed, with prominent physical symptoms such as pacing and tachypnoea.',
    { text: 'Panic involves disorganisation, loss of contact with reality, and inability to function at all. This client is still oriented and mobile.', trap: 'plausible-fact' }
  ],
  'PSY-006': [
    { text: 'Leaving someone mid-panic increases terror. Reducing stimulation means lowering noise and light, not removing the person helping.', trap: 'contraindicated' },
    'During panic the client cannot process complex information. A calm presence, short sentences, and guided breathing restore control.',
    { text: 'Physiological explanation requires processing capacity the client does not currently have. It is useful afterwards.', trap: 'secondary' },
    { text: 'Exploring triggers is appropriate once the attack has resolved. Asking mid-panic adds demand to an overwhelmed system.', trap: 'secondary' }
  ],
  'PSY-007': [
    { text: 'Flatly denying the experience tells the client you do not believe them, and the therapeutic relationship is what everything else depends on.', trap: 'contraindicated' },
    'Presenting reality without arguing preserves trust, and asking what the voices say screens for command hallucinations directing self-harm or violence.',
    { text: '"Just ignore them" dismisses an experience the client cannot control and offers no assessment of danger.', trap: 'comfort-over-abc' },
    { text: 'Asking what the voices mean invites the client to elaborate the delusional content rather than orienting them to shared reality.', trap: 'contraindicated' }
  ],
  'PSY-009': [
    { text: 'Group therapy adds stimulation to a client already overstimulated and physically exhausted.', trap: 'contraindicated' },
    'Two days without food or sleep is a physiological emergency. Portable high-calorie food lets the client eat without sitting still, and reduced stimulation lowers the activity level.',
    { text: 'Confrontation during acute mania escalates agitation and achieves nothing the client can act on.', trap: 'contraindicated' },
    { text: 'A leadership role rewards and amplifies the hyperactivity that is exhausting the client.', trap: 'contraindicated' }
  ],
  'PSY-010': [
    { text: 'This is the intuitive reading and the lethal one. Sudden calm in someone previously unable to get out of bed is not how depression lifts.', trap: 'plausible-fact' },
    'A sudden lift in mood with giving away possessions means the client has resolved on suicide and now has the energy to act. Risk peaks in early treatment response for exactly this reason.',
    { text: 'Mania involves elevated mood with pressured speech, grandiosity, and decreased need for sleep, not calm and possession-giving.', trap: 'plausible-fact' },
    { text: 'Discharging this client would be the most dangerous decision available.', trap: 'contraindicated' }
  ],
  'PSY-011': [
    { text: 'Opioid withdrawal produces dilated pupils, rhinorrhoea, cramping, and diarrhoea, but not hallucinations, and it is rarely life-threatening.', trap: 'plausible-fact' },
    'Autonomic hyperactivity with hallucinations 48 to 72 hours after the last drink is withdrawal delirium, which carries real mortality from seizure and arrhythmia.',
    { text: 'Cocaine intoxication produces stimulation at the time of use, not 48 hours into an admission.', trap: 'plausible-fact' },
    { text: 'Nicotine withdrawal causes irritability and craving. It does not produce hallucinations or autonomic instability.', trap: 'plausible-fact' }
  ],
  'PSY-012': [
    { text: 'Projection attributes one\'s own unacceptable feelings to someone else. The client is minimising the problem, not assigning their feelings to the spouse.', trap: 'plausible-fact' },
    'Denial refuses to acknowledge a painful reality, and it is the hallmark defence in substance use disorder.',
    { text: 'Rationalisation accepts the behaviour and supplies a logical-sounding justification for it. This client is disputing that the behaviour exists.', trap: 'plausible-fact' },
    { text: 'Displacement redirects feelings onto a safer target, such as snapping at a colleague after a difficult conversation elsewhere.', trap: 'plausible-fact' }
  ],
  'PSY-013': [
    { text: 'Telling someone to accept a loss three months on imposes a timetable grief does not follow.', trap: 'contraindicated' },
    'Normalising the experience and inviting exploration supports a grief process that has no fixed schedule.',
    { text: 'Prescribing what to do with a spouse\'s belongings substitutes the nurse\'s judgement for the client\'s.', trap: 'wrong-scope' },
    { text: 'Comparing the client to other people implies they are grieving wrongly.', trap: 'contraindicated' }
  ],
  'PSY-014': [
    { text: 'Stopping the morphine leaves a dying client in pain and dyspnoea to relieve the family\'s fear.', trap: 'contraindicated' },
    'Opioids titrated to symptom relief at end of life do not shorten survival, and the family\'s fear deserves direct education rather than either compliance or dismissal.',
    { text: 'Dismissing the family destroys trust at a moment when they will carry this memory for years.', trap: 'contraindicated' },
    { text: 'Covertly reducing the dose is deceptive and leaves the client under-treated without anyone knowing why.', trap: 'contraindicated' }
  ],
  'PSY-015': [
    { text: 'Shins and knees are where active children bruise themselves. These are the expected sites.', trap: 'expected' },
    'Bruises of differing ages in protected areas a child does not fall on, combined with a history that does not match the injury, are hallmarks of inflicted trauma.',
    { text: 'A scraped elbow is ordinary childhood injury.', trap: 'expected' },
    { text: 'Forehead bruising in a newly walking toddler is the classic accidental injury of that developmental stage.', trap: 'expected' }
  ],
  'PSY-016': [
    { text: 'Leaving is the most dangerous period in an abusive relationship. Directing someone to do it on your timetable can get them killed and ensures they do not come back.', trap: 'contraindicated' },
    'The decision belongs to the client. Safety planning and resource connection work whether or not she leaves now, and they keep the door open.',
    { text: 'Withdrawing support removes the one relationship that might matter later.', trap: 'contraindicated' },
    { text: 'A why question here reads as blame and reliably ends the disclosure.', trap: 'contraindicated' }
  ],
  'PSY-017': [
    { text: 'Long-term therapy is a reasonable eventual referral and does nothing for a person who cannot currently decide where to sleep tonight.', trap: 'secondary' },
    'Crisis intervention is present-focused and directive: meet basic needs, reduce stimulation, and break the situation into immediate concrete steps.',
    { text: 'Exploring childhood coping patterns is insight work that requires cognitive capacity the client does not have during acute crisis.', trap: 'secondary' },
    { text: 'Major decisions made during acute crisis are frequently regretted. They are deferred, not encouraged.', trap: 'contraindicated' }
  ],
  'PSY-018': [
    { text: 'Restraint is the last resort, not the first response. Reaching for it early escalates the situation and forfeits the opportunity to de-escalate.', trap: 'contraindicated' },
    'Verbal de-escalation with a calm approach, respectful distance, and an offer of a lower-stimulus environment prevents most escalations from becoming violence.',
    { text: 'Threatening consequences to an agitated client reliably escalates them.', trap: 'contraindicated' },
    { text: 'Ignoring rising agitation lets it progress to the point where only restrictive options remain.', trap: 'contraindicated' }
  ],
  'PSY-019': [
    { text: 'Accepting the special role feels like good rapport and is precisely what reinforces the splitting.', trap: 'plausible-fact' },
    'Splitting is defeated by a unified team applying identical limits, communicated openly, so the distortion has nothing to work against.',
    { text: 'Escalating to management acts on the distortion as though it were an accurate report of colleagues\' behaviour.', trap: 'wrong-scope' },
    { text: 'Labelling the client manipulative is judgemental, damages the relationship, and describes a defence the client is not choosing consciously.', trap: 'contraindicated' }
  ],
  'PSY-020': [
    { text: 'Rapid weight gain is monitored but it is a marker rather than the mechanism. What kills is the electrolyte shift underneath it.', trap: 'plausible-fact' },
    'Refeeding drives an insulin surge that pushes phosphate, potassium, and magnesium intracellularly, producing arrhythmia and cardiac failure within the first days.',
    { text: 'Constipation is common in anorexia and in early refeeding. It is uncomfortable, not fatal.', trap: 'secondary' },
    { text: 'Dry skin reflects the malnourished state and resolves with nutrition.', trap: 'secondary' }
  ],
  'PSY-021': [
    { text: 'Filling silence with information serves the nurse\'s discomfort. The client cannot absorb treatment options in this moment anyway.', trap: 'comfort-over-abc' },
    'Therapeutic silence gives the client time to absorb difficult news, and continued presence communicates support without demanding anything.',
    { text: 'Leaving may be experienced as abandonment at exactly the wrong moment.', trap: 'contraindicated' },
    { text: 'A series of questions demands processing the client is not yet able to do.', trap: 'assess-first' }
  ],
  'PSY-022': [
    { text: 'Refusing imposes one cultural framework onto another. Autonomy includes the right to delegate how information reaches you.', trap: 'contraindicated' },
    'The nurse verifies that this is the client\'s own wish, documents it, and honours it. A competent client may choose who receives information on their behalf.',
    { text: 'Overriding the request substitutes the nurse\'s idea of good care for the client\'s stated preference.', trap: 'contraindicated' },
    { text: 'Asking the family bypasses the client entirely, which is the opposite of what respecting their request requires.', trap: 'wrong-scope' }
  ],
  'MOC-049': [
    { text: 'The nurse does not initiate the donation request. Trained requestors achieve both higher consent rates and better family experience.', trap: 'wrong-scope' },
    'Federal requirements direct notification of the organ procurement organisation for every imminent death, with the conversation led by a trained requestor.',
    { text: 'Framing donation as expected applies pressure to a family in acute grief.', trap: 'contraindicated' },
    { text: 'Withdrawing support before the process completes forecloses donation entirely.', trap: 'contraindicated' }
  ],
  'MOC-052': [
    { text: 'Allocating scarce supply by published criteria is justice — fair distribution.', trap: 'plausible-fact' },
    'Veracity is the duty to tell the truth, including when the truth is unwelcome and the client has asked directly.',
    { text: 'Honouring a refusal is autonomy.', trap: 'plausible-fact' },
    { text: 'Preventing pressure injury is beneficence combined with nonmaleficence.', trap: 'plausible-fact' }
  ],
  'MOC-053': [
    'The record documents objective findings, the assessment performed, and who was notified. Nothing else.',
    { text: 'Assigning blame in the medical record is inappropriate and creates a discoverable accusation against a colleague.', trap: 'contraindicated' },
    { text: 'Referencing the incident report in the chart makes an internal quality document discoverable in litigation.', trap: 'contraindicated' },
    { text: 'Staffing opinions belong in the incident report and the staffing process, not in a client\'s clinical record.', trap: 'contraindicated' }
  ],
  'MOC-054': [
    { text: 'Two days post infarction on a titrated anticoagulant still needs inpatient monitoring.', trap: 'contraindicated' },
    'A client with a completely normal 24-hour workup after syncope can safely finish evaluation as an outpatient.',
    { text: 'A tracheostomy less than a week old requires skilled airway care.', trap: 'contraindicated' },
    { text: 'Three weeks of IV antibiotics could move to home infusion, but that takes time to arrange and is not a same-day surge discharge.', trap: 'secondary' }
  ],
  'MOC-056': [
    { text: 'Physical therapy addresses strength, gait, and transfers rather than the tasks of daily living themselves.', trap: 'plausible-fact' },
    'Occupational therapy addresses activities of daily living — dressing, bathing, grooming — including adaptive equipment such as reachers and long-handled sponges.',
    { text: 'Social work addresses resources, placement, and psychosocial needs.', trap: 'plausible-fact' },
    { text: 'Dietetics addresses nutrition.', trap: 'plausible-fact' }
  ],
  'MOC-057': [
    { text: 'Employment is not the test, but neither is assignment. Covering a client during a break creates a genuine treatment relationship.', trap: 'plausible-fact' },
    'Access is permitted for treatment, payment, and operations. A nurse covering a client has a treatment relationship regardless of the assignment sheet.',
    { text: 'Written consent is not required for treatment-related access.', trap: 'plausible-fact' },
    { text: 'Having values read aloud is a workaround for a barrier that does not exist.', trap: 'secondary' }
  ],
  'MOC-059': [
    { text: 'They are distinct documents doing different jobs, and conflating them leaves clients without the one they actually need.', trap: 'plausible-fact' },
    'A living will specifies treatment preferences in advance; a durable power of attorney appoints a surrogate who decides if the client loses capacity.',
    { text: 'This reverses the two documents. It is the living will that records preferences and the power of attorney that names the person.', trap: 'plausible-fact' },
    { text: 'A durable power of attorney for health care operates during life. Authority ends at death.', trap: 'plausible-fact' }
  ],
  'MOC-061': [
    { text: 'Assault requires a threat creating fear of contact. Nothing was threatened here.', trap: 'plausible-fact' },
    'Malpractice is professional negligence: a duty existed, the standard of care was breached, the breach caused harm, and damages resulted. All four are present.',
    { text: 'Defamation requires a damaging false statement to a third party.', trap: 'plausible-fact' },
    { text: 'Invasion of privacy concerns improper disclosure of information.', trap: 'plausible-fact' }
  ],
  'MOC-062': [
    { text: 'Palliative care is appropriate at any stage and can run alongside curative treatment, but it does not carry the full home support hospice provides.', trap: 'secondary' },
    'A prognosis of six months or less with comfort goals and a wish to remain at home is precisely what hospice is designed for.',
    { text: 'Facility placement contradicts the stated wish to stay home.', trap: 'contraindicated' },
    { text: 'Physical therapy does not address the primary need for symptom management and family support.', trap: 'secondary' }
  ],
  'MOC-063': [
    { text: 'Air into the cloudy NPH vial first is correct sequencing.', trap: 'expected' },
    'Clear regular insulin is always withdrawn before cloudy NPH, so the short-acting vial is never contaminated with the intermediate-acting suspension. Air into cloudy, air into clear, draw clear, draw cloudy.',
    { text: 'Gently rolling rather than shaking NPH resuspends it without creating bubbles.', trap: 'expected' },
    { text: 'Independent double-checking of insulin doses is required practice.', trap: 'expected' }
  ],
  'MOC-064': [
    { text: 'A timed antibiotic matters, and it can be given a few minutes late. New shortness of breath cannot wait a few minutes.', trap: 'secondary' },
    'New shortness of breath is a change in condition affecting airway and breathing, and it precedes every scheduled task.',
    { text: 'A routine dressing change is schedulable.', trap: 'secondary' },
    { text: 'Documentation of the previous shift is important and entirely non-urgent.', trap: 'secondary' }
  ],
  'MOC-065': [
    { text: 'Refusing an assignment on the basis of personal disapproval is abandonment and discriminatory.', trap: 'contraindicated' },
    'Nondiscriminatory care is a core professional obligation. The standard does not vary with the nurse\'s personal values.',
    { text: 'Minimising interaction delivers substandard care while appearing to comply.', trap: 'contraindicated' },
    { text: 'Burdening the client with the nurse\'s discomfort makes it the client\'s problem to manage.', trap: 'contraindicated' }
  ],
  'MOC-067': [
    { text: 'An unemancipated 15-year-old requires parental consent. The parent being present does not transfer the authority to the minor.', trap: 'plausible-fact' },
    'A married minor is emancipated and consents for themselves.',
    { text: 'A client who received midazolam 20 minutes ago lacks capacity at that moment, regardless of how lucid they appear.', trap: 'contraindicated' },
    { text: 'A court-appointed guardian holds the decision-making authority.', trap: 'plausible-fact' }
  ],
  'MOC-068': [
    { text: 'Letting an untrained person proceed risks an inaccurate reading that will be used to dose insulin.', trap: 'contraindicated' },
    'The delegating nurse is accountable for verifying competence. Doing it and then teaching serves the client now and the UAP next time.',
    { text: 'Deflecting to a peer delegates the verification the nurse is accountable for.', trap: 'wrong-scope' },
    { text: 'Minimising the difference between meters is how calibration and technique errors happen.', trap: 'contraindicated' }
  ],
  'MOC-071': [
    { text: 'Case volume reflects surgical throughput rather than nursing care.', trap: 'plausible-fact' },
    'Nurse-sensitive indicators are outcomes that nursing surveillance and technique directly change — pressure injuries, falls, CAUTI, and CLABSI.',
    { text: 'Rounding time measures provider workflow.', trap: 'plausible-fact' },
    { text: 'Imaging utilisation reflects ordering patterns rather than nursing care.', trap: 'plausible-fact' }
  ],
  'MOC-072': [
    { text: 'Honouring the confidence leaves the client without medication, which is the outcome the confidence was meant to avoid.', trap: 'contraindicated' },
    'Cost is a leading cause of non-adherence and readmission, so it must reach the team — but the nurse works with the client by explaining why and seeking permission.',
    { text: 'Disclosing without telling the client breaks the trust that produced the disclosure in the first place.', trap: 'contraindicated' },
    { text: 'Samples solve this week and leave the ongoing barrier entirely untouched.', trap: 'secondary' }
  ],
  'MOC-073': [
    'Suspected pulmonary tuberculosis requires airborne isolation in a negative-pressure private room.',
    { text: 'A stage 2 pressure injury requires standard precautions unless drainage is uncontained.', trap: 'plausible-fact' },
    { text: 'An uncomplicated post-appendectomy client needs no isolation.', trap: 'plausible-fact' },
    { text: 'Newly diagnosed diabetes requires teaching, not isolation.', trap: 'plausible-fact' }
  ],
  'MOC-074': [
    { text: 'Outright refusal after accepting the shift may constitute abandonment.', trap: 'contraindicated' },
    { text: 'Accepting care beyond your competence and learning as you go endangers clients and exposes the nurse to liability.', trap: 'contraindicated' },
    'Name the specific limitation and negotiate an assignment within demonstrated competence — often stable clients while an ICU nurse manages the drips.',
    { text: 'Family members are not a monitoring system for titrated vasoactive infusions.', trap: 'contraindicated' }
  ],
  'MOC-075': [
    'An INR of 7.8 carries high risk of spontaneous major haemorrhage including intracranial bleeding, and warfarin is held with vitamin K considered.',
    { text: 'A fasting glucose of 132 needs management over weeks, not minutes.', trap: 'secondary' },
    { text: 'A creatinine of 1.4 is mildly raised and warrants trending.', trap: 'secondary' },
    { text: 'A cholesterol of 245 is a long-term cardiovascular risk factor.', trap: 'secondary' }
  ],
  'MOC-076': [
    { text: 'Negligence is unintentional failure to meet the standard of care. This was deliberate.', trap: 'plausible-fact' },
    'Battery is intentional harmful or offensive contact without consent, which includes administering a treatment the client has refused — and deceiving them about what it is compounds it.',
    { text: 'Slander is spoken defamation to a third party.', trap: 'plausible-fact' },
    { text: 'Confidentiality concerns disclosure of information rather than unconsented treatment.', trap: 'plausible-fact' }
  ],
  'MOC-078': [
    { text: 'Employment is not authorisation. Curiosity is never a permitted purpose for accessing a record.', trap: 'contraindicated' },
    'Access without a treatment, payment, or operations purpose is a reportable privacy violation and must go to the privacy officer.',
    { text: 'Informal inquiry is not the process, and it gives colleagues time to construct a justification.', trap: 'secondary' },
    { text: 'Moving the client punishes the person whose privacy was violated.', trap: 'contraindicated' }
  ],
  'MOC-079': [
    { text: 'Continuous cardiac monitoring for chest pain requires ongoing nursing assessment for deterioration.', trap: 'wrong-scope' },
    'A stable client whose needs are hygiene, feeding, and mobility is well within UAP capability under RN supervision.',
    { text: 'A first dose of IV immunoglobulin carries infusion reaction risk requiring nursing presence.', trap: 'wrong-scope' },
    { text: 'A new epidural catheter requires assessment for sedation, respiratory depression, and neurological change.', trap: 'wrong-scope' }
  ],
  'MOC-081': [
    { text: 'Fidelity is faithfulness to commitments made.', trap: 'plausible-fact' },
    'Justice governs fair distribution of scarce resources, weighing likelihood of benefit against the clients\' own stated goals.',
    { text: 'Veracity is truthfulness.', trap: 'plausible-fact' },
    { text: 'Paternalism is overriding a client\'s choice for their supposed good — and here the second client\'s choice is documented and being respected.', trap: 'plausible-fact' }
  ],
  'MOC-083': [
    { text: 'Meal preferences individualise care but do not determine whether discharge is feasible.', trap: 'secondary' },
    'Home accessibility determines whether the discharge plan is workable at all — a client who cannot get a wheelchair through a doorway cannot go home safely.',
    { text: 'Religious affiliation is part of holistic care and does not determine physical feasibility.', trap: 'secondary' },
    { text: 'Pharmacy distance matters for medication access but is solvable by delivery.', trap: 'secondary' }
  ],
  'MOC-085': [
    { text: 'The nurse cannot create a directive on a client\'s behalf. The whole point is that it records the client\'s own wishes.', trap: 'wrong-scope' },
    'The Patient Self-Determination Act requires informing clients of the right to create an advance directive and documenting whether one exists.',
    { text: 'An advance directive cannot be required as a condition of care.', trap: 'contraindicated' },
    { text: 'Family preferences do not substitute for a competent client\'s own wishes.', trap: 'wrong-scope' }
  ],
  'MOC-087': [
    { text: 'Permitting unsafe ambulation because the client is competent ignores that they may not have the information to judge the risk.', trap: 'contraindicated' },
    'Inform the client of the risk, offer practical alternatives that preserve dignity, and bring their preference back to the team so the plan can adapt.',
    { text: 'Imposing bed rest is more restrictive than needed and causes deconditioning that worsens the fall risk.', trap: 'contraindicated' },
    { text: 'Documenting refusal without intervening records the fall rather than preventing it.', trap: 'secondary' }
  ],
  'MOC-090': [
    { text: 'Half-hourly checks are insufficient for seclusion, which requires continuous or near-continuous observation.', trap: 'contraindicated' },
    'Seclusion requires continuous observation with documented assessment of vital signs, hydration, toileting, and readiness for release at short policy-defined intervals.',
    { text: 'Leaving a secluded client unobserved is how injuries and deaths in seclusion occur.', trap: 'contraindicated' },
    { text: 'Seclusion orders are strictly time-limited and require renewal after reassessment.', trap: 'contraindicated' }
  ],
  'MOC-092': [
    { text: 'Lying flat after meals promotes reflux and aspiration — the opposite of aspiration precautions.', trap: 'contraindicated' },
    'Upright positioning during and after meals is the core aspiration precaution and is squarely within the UAP role.',
    { text: 'Deciding liquid consistency is a speech pathology and nursing determination, not a UAP judgement call.', trap: 'wrong-scope' },
    { text: 'Rapid feeding overwhelms an impaired swallow and increases aspiration risk.', trap: 'contraindicated' }
  ],
  'MOC-093': [
    { text: 'False reassurance is dishonest and teaches the client that this is not something they can discuss with you.', trap: 'contraindicated' },
    { text: 'Deflecting to the provider abandons the client in the moment they asked.', trap: 'notify-first' },
    'Acknowledging the question and inviting the client to say more respects veracity and opens the conversation without either false reassurance or abandonment.',
    { text: 'Minimising with a generality dismisses a specific and frightening question.', trap: 'contraindicated' }
  ],
  'MOC-001': [
    { text: 'A titrated antiarrhythmic infusion in a client whose rhythm changed two hours ago is unstable and unpredictable — the definition of what stays with the RN.', trap: 'wrong-scope' },
    'LPN scope covers stable clients with predictable outcomes, including reinforcing teaching the RN has already begun.',
    { text: 'The first hours after thyroidectomy carry airway and haemorrhage risk requiring RN assessment.', trap: 'wrong-scope' },
    { text: 'Initial teaching is an RN function. Reinforcement is delegable; the first pass is not.', trap: 'wrong-scope' }
  ],
  'MOC-005': [
    { text: 'Explaining the procedure is the surgeon\'s duty, not the nurse\'s. A diagram drawn by the nurse does not create informed consent.', trap: 'wrong-scope' },
    { text: 'Reassurance about the surgeon\'s skill answers a question the client did not ask and leaves the gap in understanding intact.', trap: 'comfort-over-abc' },
    'Informed consent requires the provider performing the procedure to supply the information. A gap in understanding goes back to them, not around them.',
    { text: 'A second signature on a form the client still does not understand produces two invalid consents rather than one.', trap: 'contraindicated' }
  ],
  'MOC-008': [
    { text: 'An incident report after the fact documents the infection you could have prevented.', trap: 'late-sign' },
    'Every team member is empowered to halt a procedure when a safety step is skipped. Stopping it prevents a bloodstream infection before it exists.',
    { text: 'Escalating afterwards leaves the client exposed during the procedure itself.', trap: 'notify-first' },
    { text: 'Silence makes the nurse complicit in a preventable harm, and the bundle exists precisely because individual technique is not self-policing.', trap: 'contraindicated' }
  ],
  'MOC-009': [
    { text: 'Introducing the client and the admitting diagnosis is Situation and Background.', trap: 'plausible-fact' },
    { text: 'Vital signs are objective data belonging to Background and Assessment.', trap: 'plausible-fact' },
    { text: 'An impression that sepsis is developing is the Assessment — the nurse\'s interpretation of what the data mean.', trap: 'plausible-fact' },
    'Recommendation states what the nurse wants done and by when. It is the part most often omitted, and the part that actually changes anything.'
  ],
  'MOC-010': [
    { text: 'Beneficence is acting for the client\'s good. Withholding information may feel like that, which is exactly why it is the tempting answer.', trap: 'plausible-fact' },
    'Autonomy is self-determination, which requires access to the information needed to decide about one\'s own care. A competent client who asks directly must be told.',
    { text: 'Nonmaleficence is avoiding harm. There is harm here, but the principle violated is the client\'s right to decide.', trap: 'plausible-fact' },
    { text: 'Justice concerns fair distribution of resources and is not at issue.', trap: 'plausible-fact' }
  ],
  'MOC-011': [
    { text: 'Continuous bladder irrigation requires unit-specific competence in managing clot obstruction and calculating true output.', trap: 'wrong-scope' },
    { text: 'A titrated heparin infusion requires familiarity with the protocol and with recognising bleeding complications.', trap: 'wrong-scope' },
    'A floated nurse receives clients whose care draws on general nursing skills. Stable diabetes with cellulitis fits any competent RN.',
    { text: 'First-dose chemotherapy requires specific certification and hypersensitivity monitoring.', trap: 'wrong-scope' }
  ],
  'MOC-014': [
    { text: 'Hospice requires a terminal prognosis of about six months. Stroke with residual weakness is a rehabilitation trajectory.', trap: 'plausible-fact' },
    'The client has functional deficits without needing 24-hour skilled care, so in-home support keeps them in the least restrictive setting that is safe.',
    { text: 'Facility placement is more restrictive than the deficits require and removes independence the client can still exercise.', trap: 'contraindicated' },
    { text: 'Nothing in the presentation suggests a psychiatric need, though post-stroke depression is worth screening for separately.', trap: 'plausible-fact' }
  ],
  'MOC-015': [
    { text: 'Checking gastric pH is the most reliable bedside method of confirming placement.', trap: 'expected' },
    { text: 'Irrigating with 30 mL of normal saline maintains patency and is correct.', trap: 'expected' },
    { text: 'Frequent oral care is essential with a tube in place and nothing by mouth.', trap: 'expected' },
    'Continuous suction on a tube intended for low intermittent suction pulls gastric mucosa into the lumen, causing erosion and bleeding.'
  ],
  'MOC-016': [
    { text: 'Counselling individuals converts a system problem into a blame problem and stops the reporting the analysis depends on.', trap: 'wrong-scope' },
    'Quality improvement examines the system. Aggregating the falls to find shared contributing factors is what identifies a fixable cause.',
    { text: 'Blanket restraint use is unsafe, violates client rights, and increases injury severity when clients climb over rails.', trap: 'contraindicated' },
    { text: 'Auditing reports more often measures the problem more precisely without changing anything about it.', trap: 'secondary' }
  ],
  'MOC-017': [
    { text: 'Four-hourly checks are far too infrequent for a restrained client, who needs circulation, skin, and toileting assessment at least every two hours.', trap: 'contraindicated' },
    'Restraints are a last resort. Alternatives — diversion, family presence, moving the client nearer the station, camouflaging the line — are tried and documented first.',
    { text: 'Securing to a side rail causes injury when the rail is lowered. Restraints attach to the bed frame.', trap: 'contraindicated' },
    { text: 'Standing and as-needed restraint orders are prohibited. Each order is time-limited and requires reassessment to renew.', trap: 'contraindicated' }
  ],
  'MOC-018': [
    { text: 'Physical therapy addresses gait, strength, and transfers.', trap: 'plausible-fact' },
    'Speech-language pathologists evaluate swallowing as well as speech, and coughing on thin liquids is a dysphagia screen failure.',
    { text: 'Occupational therapy addresses activities of daily living such as dressing and feeding, but not the swallow mechanism itself.', trap: 'plausible-fact' },
    { text: 'Respiratory therapy manages airway and ventilation. It would be involved if aspiration occurred, not to assess the swallow.', trap: 'plausible-fact' }
  ],
  'MOC-019': [
    'Applying a sequential compression device is a standardised task on a stable client with no judgement required about what to do next.',
    { text: 'Pain assessment is assessment, and the nursing process never delegates.', trap: 'wrong-scope' },
    { text: 'First-time teaching is an RN function. Reinforcing it afterwards is not.', trap: 'wrong-scope' },
    { text: 'Titrating oxygen against saturation is a judgement call about therapy, which is the clearest possible RN-only activity.', trap: 'wrong-scope' }
  ],
  'MOC-023': [
    { text: 'Deferring to family because they know the client best substitutes their preference for a competent client\'s decision.', trap: 'contraindicated' },
    'Advocacy begins with finding out what the client actually wants, which requires a conversation free of the pressure you have observed.',
    { text: 'Cancelling exceeds the nurse\'s authority before the client\'s wishes have even been established.', trap: 'wrong-scope' },
    { text: 'Documenting the conflict while continuing preparation records the problem and proceeds anyway.', trap: 'secondary' }
  ],
  'MOC-025': [
    { text: 'This leaves distance, equipment, safety measures, and reporting criteria entirely undefined. "Sometime this morning" is not a direction.', trap: 'secondary' },
    'Effective delegation specifies the task, the method, the limits, and exactly what to report back — the right directions and the right feedback expectation.',
    { text: '"As much as you can" delegates the judgement about how far is safe, which is precisely what should not be delegated.', trap: 'wrong-scope' },
    { text: 'Documentation instructions do not substitute for telling the UAP what to watch for and when to call.', trap: 'secondary' }
  ],
  'MOC-026': [
    { text: 'Detaining a voluntary client who is not a danger to self or others is false imprisonment.', trap: 'contraindicated' },
    'A voluntarily admitted client who poses no danger retains the right to leave, generally after a written request and a defined notice period.',
    { text: 'Forced observation to change the client\'s mind is coercive detention without legal basis.', trap: 'contraindicated' },
    { text: 'Commitment requires meeting statutory danger criteria. Initiating it without them is a serious legal violation.', trap: 'contraindicated' }
  ],
  'MOC-028': [
    { text: 'A longer stay delays rather than prevents the readmission, because nothing about what happens at home has changed.', trap: 'secondary' },
    'Early post-discharge contact catches weight gain, medication confusion, and worsening symptoms while they are still manageable at home. It is the intervention with the strongest evidence.',
    { text: 'Written material alone is rarely sufficient, particularly for a client who has already been readmitted three times.', trap: 'secondary' },
    { text: 'Nothing in the presentation suggests a psychiatric cause for the readmissions.', trap: 'plausible-fact' }
  ],
  'MOC-029': [
    { text: 'Administering blood covertly to a client who has refused it is battery, regardless of the clinical justification.', trap: 'contraindicated' },
    { text: 'Court orders are not appropriate for a competent adult refusing treatment for themselves.', trap: 'contraindicated' },
    'A competent adult may refuse any treatment including a life-sustaining one. The nurse supports the decision and works on acceptable alternatives.',
    { text: 'Telling the client they will die is coercive framing that pressures rather than informs.', trap: 'contraindicated' }
  ],
  'MOC-031': [
    { text: 'Deleting an entry destroys the audit trail and can be construed as falsification of a legal record.', trap: 'contraindicated' },
    { text: 'Purging through information technology has the same effect as deleting: the record no longer reflects what happened.', trap: 'contraindicated' },
    'The legal record retains an audit trail. The erroneous entry is marked and annotated per policy, and the correct chart is documented separately.',
    { text: 'Leaving an uncorrected entry in the wrong client\'s record means that client\'s chart contains someone else\'s clinical information.', trap: 'secondary' }
  ],
  'MOC-034': [
    { text: 'A nurse who administers a clearly unsafe order shares liability for the resulting harm. The order being written does not make it safe.', trap: 'contraindicated' },
    'A questionable dose is held and clarified directly with the prescriber. That is the only action that resolves the uncertainty.',
    { text: 'Administering half is prescribing, and it substitutes the nurse\'s guess for a clarification that takes one phone call.', trap: 'wrong-scope' },
    { text: 'A colleague\'s informal impression is not verification, and it diffuses responsibility without resolving the question.', trap: 'secondary' }
  ],
  'MOC-035': [
    { text: 'Equal numbers ignore that a ventilated client and a discharge-ready client are not equivalent workloads. Fair does not mean equal.', trap: 'plausible-fact' },
    'Acuity-based assignment matches nursing time to client need, which is what protects safety when staffing is tight.',
    { text: 'Preference-based assignment leaves the difficult clients to whoever speaks last and creates gaps nobody owns.', trap: 'secondary' },
    { text: 'Closing to admissions is a management decision that does nothing about the clients already on the unit this shift.', trap: 'secondary' }
  ],
  'MOC-036': [
    'Assault is a threat creating reasonable fear of harmful or offensive contact or coercion. No touching has occurred.',
    { text: 'Battery requires actual contact. The nurse has threatened, not touched.', trap: 'plausible-fact' },
    { text: 'Negligence is failure to meet the standard of care causing harm, which is unintentional. This threat is deliberate.', trap: 'plausible-fact' },
    { text: 'Defamation is a damaging false statement made to a third party.', trap: 'plausible-fact' }
  ],
  'MOC-038': [
    { text: 'Care planning is part of the nursing process and remains an RN function.', trap: 'wrong-scope' },
    'LPNs may administer most oral and many parenteral medications to stable clients.',
    { text: 'Initial assessment, particularly of a client just transferred from intensive care, requires RN judgement.', trap: 'wrong-scope' },
    { text: 'IV push administration, especially through a central line, exceeds LPN scope in most jurisdictions.', trap: 'wrong-scope' }
  ],
  'MOC-039': [
    { text: 'Private confrontation gives the colleague time to destroy evidence and does nothing to protect clients in the meantime.', trap: 'contraindicated' },
    'Diversion endangers clients through undertreated pain and impaired practice. Nurses have a legal and ethical duty to report it through official channels.',
    { text: 'Gathering proof is not the nurse\'s role, and every additional shift extends the exposure.', trap: 'contraindicated' },
    { text: 'Waiting for harm is a breach of duty, and by then a client has already been injured.', trap: 'contraindicated' }
  ],
  'MOC-040': [
    { text: 'Bedtime dosing of a diuretic causes nocturia and sleep disruption, and the resulting fatigue reduces adherence.', trap: 'contraindicated' },
    'Daily morning weights on the same scale detect fluid retention earliest, and a 2 to 3 pound daily gain is the standard call threshold.',
    { text: 'Unnecessary fluid restriction on a diuretic risks dehydration and prerenal kidney injury.', trap: 'contraindicated' },
    { text: 'Stopping a diuretic when symptoms improve produces rebound fluid overload — the medication is why the ankles look better.', trap: 'contraindicated' }
  ],
  'MOC-042': [
    { text: 'Even "stable and resting comfortably" is protected health information disclosed without authorisation.', trap: 'contraindicated' },
    'Without authorisation the nurse cannot confirm any clinical detail, and offering to relay the call lets the client authorise disclosure themselves.',
    { text: 'Redirecting to the physician still implicitly confirms the client is admitted here.', trap: 'plausible-fact' },
    { text: 'Confirming admission is itself a disclosure of protected health information.', trap: 'contraindicated' }
  ],
  'MOC-043': [
    { text: 'Root cause analysis is explicitly blame-free. Framing it as disciplinary is what makes staff withhold the information the analysis needs.', trap: 'contraindicated' },
    'Root cause analysis examines the processes and conditions that permitted an event, aimed at redesign so it cannot recur.',
    { text: 'Insurance requirements are a separate process and not the purpose of the analysis.', trap: 'plausible-fact' },
    { text: 'Disclosure to the client is a distinct ethical obligation decided separately from the analysis.', trap: 'plausible-fact' }
  ],
  'MOC-044': [
    { text: 'Family members filter and soften information, particularly bad news, and they are not bound by confidentiality obligations.', trap: 'contraindicated' },
    'Informed consent requires a qualified medical interpreter trained in clinical terminology and bound by confidentiality.',
    { text: 'Translation applications are unreliable for medical content and produce errors nobody in the room can detect.', trap: 'contraindicated' },
    { text: 'Written material does not allow the client to ask questions, and language fluency does not guarantee literacy in that language.', trap: 'secondary' }
  ],
  'MOC-046': [
    { text: 'Facility policy may be more restrictive than the practice act but never broader. It cannot expand legal scope.', trap: 'plausible-fact' },
    'The state nurse practice act is the legal authority defining the boundaries of nursing practice.',
    { text: 'A colleague\'s understanding is not a legal source, however experienced they are.', trap: 'secondary' },
    { text: 'A provider\'s order never enlarges a nurse\'s scope. Writing an order does not make performing it legal for you.', trap: 'contraindicated' }
  ],
  'MOC-047': [
    { text: 'Withholding all care is abandonment. A DNR order limits resuscitation, not treatment.', trap: 'contraindicated' },
    'Oxygen and upright positioning relieve dyspnoea and are entirely consistent with a do-not-resuscitate order.',
    { text: 'Bag-mask ventilation is a resuscitative measure the order specifically declines.', trap: 'contraindicated' },
    { text: 'Calling a code directly contradicts the client\'s documented wishes.', trap: 'contraindicated' }
  ],
  'MOC-048': [
    { text: 'Continued paging repeats an action that has already failed twice while the urine output stays at 15 mL an hour.', trap: 'secondary' },
    'Persistently low output signals developing kidney injury or hypoperfusion. When a provider does not respond, the nurse escalates through the chain of command.',
    { text: 'Ordering a fluid bolus is prescribing, and doing it first and informing later inverts the relationship entirely.', trap: 'wrong-scope' },
    { text: 'Waiting for rounds risks irreversible organ injury for the sake of avoiding an awkward escalation.', trap: 'contraindicated' }
  ],
  'MOC-003': [
    { text: 'A saturation of 91 percent on 2 L is below target and deserves attention, but the client is oxygenating and this is a trend to watch rather than an emergency.', trap: 'secondary' },
    { text: 'Pain of 7 out of 10 on the first postoperative day is real and should be treated promptly, but comfort never outranks a threat to breathing.', trap: 'comfort-over-abc' },
    'Continuous vigorous bubbling in the water seal means air is entering the pleural space faster than the system can clear it — an unresolved pneumothorax or a leak in the circuit. It threatens ventilation now.',
    { text: 'Two centimetres of girth in a day reflects gradually accumulating ascites. It is a real finding, but it developed over hours and will still be there in twenty minutes.', trap: 'chronic' }
  ],
  'MOC-004': [
    { text: 'The document is legally valid, which is what makes this tempting. But an advance directive records what the client wanted then; a competent client speaking now overrides it.', trap: 'plausible-fact' },
    'A competent client may revoke a directive at any time, verbally included. Notifying the provider gets the orders and the record aligned with what the client actually wants.',
    { text: 'Family preference carries no authority while the client is competent and able to speak for themselves. Asking them displaces the person whose decision this is.', trap: 'wrong-scope' },
    { text: 'Documenting is necessary but not sufficient. Leaving a valid do-not-resuscitate directive in place against the client\'s stated wishes means the wrong thing happens if they arrest tonight.', trap: 'secondary' }
  ],
  'MOC-012': [
    { text: 'The incident report matters, but it protects the system. Nothing in it helps the client who just received the wrong drug.', trap: 'assess-first' },
    'Assessment establishes whether the medication is causing harm, and the provider decides what monitoring or treatment the client now needs. Both happen before any paperwork.',
    { text: 'Documentation is required and will happen, but charting an error you have not yet assessed means you cannot describe its effect.', trap: 'assess-first' },
    { text: 'Errors are reported immediately, not at a convenient time. A delayed report delays any treatment the client might need.', trap: 'secondary' }
  ],
  'MOC-013': [
    { text: 'A glucose of 248 is above target and needs correcting, but hyperglycaemia at this level causes harm over hours and days, not minutes.', trap: 'secondary' },
    'A hematoma that is rapidly enlarging after femoral arterial access means the artery is actively bleeding. Manual pressure goes on now, before anything else.',
    { text: 'Many clients with COPD live at 88 to 92 percent. Without knowing this client\'s baseline you may be treating a number rather than a person.', trap: 'expected' },
    { text: 'Nausea with a nasogastric tube usually means the tube is not decompressing properly. Worth checking, but it is not a circulatory emergency.', trap: 'secondary' }
  ],
  'MOC-020': [
    { text: 'A closed femur fracture with stable vital signs is painful and will need surgery, but the client can safely wait — a delayed, not immediate, tag.', trap: 'secondary' },
    'Airway obstruction is immediately fatal and immediately fixable, which is the exact definition of an immediate tag: survivable if treated now.',
    { text: 'This client is the sickest in the room, which is why the option pulls. In disaster triage the sickest is not the priority when survival is improbable and the resources spent would save several others.', trap: 'plausible-fact' },
    { text: 'Superficial partial-thickness burns to the forearms hurt considerably but are not life-threatening. This is a minor tag.', trap: 'secondary' }
  ],
  'MOC-022': [
    { text: 'Discharge teaching has a deadline, and deadlines feel urgent. But noon is hours away and nothing about the delay harms the client.', trap: 'comfort-over-abc' },
    { text: 'Chronic back pain deserves treatment, but it is a long-standing stable problem competing against an acute one.', trap: 'chronic' },
    { text: 'A transfusion ordered for this hour is a scheduled task with a time attached. Scheduled is not the same as unstable.', trap: 'secondary' },
    'Shakiness and diaphoresis in type 1 diabetes is hypoglycaemia until proven otherwise, and it progresses to seizure and coma within minutes.'
  ],
  'MOC-032': [
    'Bleeding that will not stop after 45 minutes in an anticoagulated client suggests a supratherapeutic INR and ongoing haemorrhage. This is the only call that cannot wait.',
    { text: 'A drug interaction question is worth answering carefully, but the client is not currently harmed and can be called back.', trap: 'secondary' },
    { text: 'Five days of medication remaining means there is no gap in therapy. The refill is genuinely routine.', trap: 'secondary' },
    { text: 'Rescheduling a routine physical is administrative. Nothing clinical turns on it.', trap: 'secondary' }
  ],
  'MOC-033': [
    { text: 'Reporting is a reasonable follow-up but it happens after the client is safe. The transfer is in progress right now.', trap: 'notify-first' },
    'The client is about to fall. Stopping the transfer and locking the brakes takes two seconds and prevents the injury; everything else can follow.',
    { text: 'Charting an unsafe practice while it is still happening documents a fall rather than preventing one.', trap: 'secondary' },
    { text: 'Unit-wide education addresses the pattern, and it is worth doing. It does nothing for the client currently mid-transfer on unlocked wheels.', trap: 'secondary' }
  ],
  'MOC-037': [
    { text: 'A vancomycin trough of 22 is modestly above the usual target and calls for a dose adjustment, but it will not cause harm in the next hour.', trap: 'secondary' },
    { text: 'A kilogram over three days is fluid the client is retaining and warrants attention, but it is a gradual change with a wide margin.', trap: 'chronic' },
    'A lithium level of 2.1 is well past the therapeutic ceiling of 1.2 and into moderate to severe toxicity, with seizures, arrhythmia, and coma ahead of it.',
    { text: 'A TSH of 6.8 means the levothyroxine dose needs adjusting. Thyroid replacement is titrated over weeks, not minutes.', trap: 'secondary' }
  ],
  'MOC-041': [
    { text: 'Dietary teaching matters for preventing the next bleed. It does nothing about the one happening now, and a hypoperfused client cannot learn anyway.', trap: 'comfort-over-abc' },
    'A mean arterial pressure above 65 is the threshold below which organs stop being perfused. In active bleeding this is the goal every other goal depends on.',
    { text: 'Pain control is a legitimate goal and is not in conflict with resuscitation, but it is not what determines whether this client survives the admission.', trap: 'comfort-over-abc' },
    { text: 'Call light use is a safety measure appropriate to a stable client. It is nowhere near the priority for someone actively bleeding.', trap: 'comfort-over-abc' }
  ],
  'MOC-050': [
    { text: 'A pain rating of 9 is the highest number on the page, which is exactly why this option attracts. Pain severity does not establish priority — a dislocation is stable.', trap: 'comfort-over-abc' },
    'Crushing substernal pain with diaphoresis is acute coronary syndrome until proven otherwise, and every minute of delay costs myocardium that does not grow back.',
    { text: 'Five days of productive cough with a low-grade fever is urgent and needs evaluation, but it has been developing for days.', trap: 'secondary' },
    { text: 'A laceration with controlled bleeding needs repair, not resuscitation. Controlled is the operative word.', trap: 'secondary' }
  ],
  'MOC-051': [
    { text: 'Rechecking may confirm the reading, but it delegates the response to the same person who reported it and postpones the assessment by minutes the client may not have.', trap: 'secondary' },
    'Delegating the task never delegates the accountability. A pressure of 78/44 requires the nurse to lay eyes on the client and assess perfusion, mentation, and rhythm.',
    { text: 'The provider will need to know, but you cannot usefully describe a client you have not seen. Assess first, then call with something to report.', trap: 'notify-first' },
    { text: 'The medication record may well explain the hypotension, but reading a chart while a client is hypotensive puts the paperwork ahead of the person.', trap: 'assess-first' }
  ],
  'MOC-055': [
    { text: 'Bowel sounds are routinely absent for the first day or two after abdominal surgery while the gut recovers from handling and anaesthesia. This is expected.', trap: 'expected' },
    'Nine millilitres an hour is well under the 30 mL per hour that indicates adequate renal perfusion, and after surgery that most often means hypovolaemia or bleeding.',
    { text: 'Incisional pain of 6 out of 10 six hours after abdominal surgery is expected and treatable. Treat it, but not before the perfusion problem.', trap: 'comfort-over-abc' },
    { text: 'A small amount of serosanguineous drainage is normal wound healing. The colour and the volume are both reassuring here.', trap: 'expected' }
  ],
  'MOC-060': [
    'A potassium of 6.4 destabilises cardiac conduction and can produce a lethal arrhythmia without warning. Awaiting dialysis means the level is not coming down on its own.',
    { text: 'A haemoglobin of 9.8 is mildly low. It warrants investigation of the cause but is not an acute threat.', trap: 'secondary' },
    { text: 'A sodium of 133 is just below range. Symptomatic hyponatraemia generally appears well below this.', trap: 'secondary' },
    { text: 'A white count of 12,000 suggests inflammation or infection and needs a source found. It is not a same-minute problem.', trap: 'secondary' }
  ],
  'MOC-070': [
    { text: 'A temperature of 37.8 on the first postoperative day is very common and usually reflects atelectasis rather than infection. Encourage deep breathing.', trap: 'expected' },
    'Sudden dyspnoea with pleuritic chest pain on day three after a joint replacement is pulmonary embolism until imaging says otherwise, and it kills within minutes.',
    { text: 'Purulent drainage means a wound infection that needs culture and treatment today. It does not threaten the client in the next few minutes.', trap: 'secondary' },
    { text: 'A haemoglobin of 10.2 after a hysterectomy reflects expected surgical blood loss in a stable client.', trap: 'expected' }
  ],
  'MOC-077': [
    { text: 'Nutrition counselling helps the client manage output consistency over the coming weeks. It is not what stands between them and a safe discharge tomorrow.', trap: 'secondary' },
    'The client cannot go home until they can manage the appliance. Hands-on teaching with return demonstration is the gap that blocks discharge.',
    { text: 'Return to work is a genuine concern the client raised, and it deserves attention — but after they can physically manage the ostomy.', trap: 'secondary' },
    { text: 'Spiritual support may help with the adjustment to an altered body image, and it should be offered. It is not the discharge-blocking need.', trap: 'secondary' }
  ],
  'MOC-080': [
    { text: 'Tidaling is the water level moving with respiration, and it confirms the system is patent and connected to the pleural space. Its absence would be the concern.', trap: 'expected' },
    { text: 'Sixty millilitres of serosanguineous drainage over eight hours is modest and the expected colour. Large volumes of frank blood would be different.', trap: 'expected' },
    'Drainage stopping abruptly while the client becomes more breathless means the tube is obstructed and air or blood is re-accumulating with nowhere to go.',
    { text: 'Bubbling in the suction control chamber simply shows the suction is running at the set level. It is the water seal chamber where bubbling matters.', trap: 'expected' }
  ],
  'MOC-084': [
    { text: 'Toileting assistance is a genuine fall risk if ignored, and it should be answered quickly. It is manageable within a few minutes.', trap: 'secondary' },
    'An air-in-line alarm means air may be entering the vascular system. Air embolism obstructs the pulmonary outflow tract and can arrest the client.',
    { text: 'A blanket is a comfort request. It is worth doing kindly and it is worth doing last.', trap: 'comfort-over-abc' },
    { text: 'Loose telemetry leads produce artifact, which is annoying and can mask a real rhythm, but the problem is with the equipment rather than the client.', trap: 'secondary' }
  ],
  'MOC-086': [
    { text: 'Cutting overtime without knowing what drives it may remove the staffing that acuity actually requires, worsening both safety and the satisfaction scores.', trap: 'assess-first' },
    'Analysis distinguishes genuine acuity-driven need from vacancy or inefficient scheduling, and those three problems have three different solutions.',
    { text: 'Service training treats falling satisfaction as an attitude problem when the data suggest a workload problem.', trap: 'secondary' },
    { text: 'Agency staffing is expensive and may be exactly right — but committing to it before understanding the cause is treating before diagnosing.', trap: 'assess-first' }
  ],
  'MOC-088': [
    'A febrile infant who is lethargic and hard to arouse may have meningitis or serious bacterial infection. In paediatrics, a quiet floppy baby is far more alarming than a screaming one.',
    { text: 'Dysuria for two days is uncomfortable and needs treating, but an uncomplicated urinary tract infection can safely wait its turn.', trap: 'secondary' },
    { text: 'A sprain with moderate swelling needs assessment and support. It is stable.', trap: 'secondary' },
    { text: 'A medication refill is administrative and carries no time pressure.', trap: 'secondary' }
  ],
}
