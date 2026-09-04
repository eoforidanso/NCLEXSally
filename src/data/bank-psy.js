export default [
  { id: 'PSY-001', cat: 'psy', sub: 'Therapeutic Communication', type: 'mc', difficulty: 2,
    stem: 'A client newly diagnosed with cancer says, "I just cannot believe this is happening to me." Which response by the nurse is most therapeutic?',
    options: [
      '"Try to stay positive. Many people beat this."',
      '"This must feel overwhelming. Tell me what is going through your mind."',
      '"You should talk to your doctor about the treatment plan."',
      '"I know exactly how you feel."'
    ],
    answer: [1],
    rationale: 'Reflecting the feeling and offering an open invitation keeps the focus on the client and encourages expression. False reassurance minimizes distress, redirecting to the provider dismisses the moment, and claiming to know how someone feels shifts the focus to the nurse and is rarely true.',
    strategy: 'Therapeutic responses reflect feelings and invite more. Non-therapeutic responses reassure, advise, or redirect.' },

  { id: 'PSY-002', cat: 'psy', sub: 'Therapeutic Communication', type: 'sata', difficulty: 1,
    stem: 'Which nurse responses are non-therapeutic? Select all that apply.',
    options: [
      '"Why did you stop taking your medication?"',
      '"Everything happens for a reason."',
      '"You seem upset. Can you tell me more about that?"',
      '"I would not worry about that if I were you."',
      '"Let me make sure I understand — you feel your family does not listen to you."',
      '"You should not feel that way."'
    ],
    answer: [0, 1, 3, 5],
    rationale: 'Why questions demand justification and provoke defensiveness, clichés dismiss the experience, minimizing invalidates concerns, and telling a client how to feel denies their reality. Observation with an open invitation and restatement to confirm understanding are both therapeutic.',
    strategy: 'Avoid why, clichés, false reassurance, advice, and any statement telling the client how to feel.' },

  { id: 'PSY-003', cat: 'psy', sub: 'Suicide Risk', type: 'mc', difficulty: 2,
    stem: 'A client on a psychiatric unit states, "Soon none of this will matter anymore." What is the nurse\'s priority action?',
    options: [
      'Document the statement and continue observation',
      'Ask directly whether the client is thinking about killing themselves, and if so about a plan and means',
      'Reassure the client that things will improve',
      'Notify the family'
    ],
    answer: [1],
    rationale: 'Veiled statements about things no longer mattering require direct assessment of ideation, plan, means, and intent, which determines the level of observation and safety measures needed. Asking directly does not increase risk. Documentation, reassurance, and family notification all delay the assessment that drives protection.',
    strategy: 'Always ask directly and specifically. Vague statements about the future are assessed, not interpreted.' },

  { id: 'PSY-004', cat: 'psy', sub: 'Suicide Risk', type: 'mc', difficulty: 3,
    stem: 'Which client statement indicates the highest immediate suicide risk?',
    options: [
      '"Sometimes I wonder if anyone would notice if I were gone."',
      '"I have been saving my pills, and I plan to take them all on Friday when my roommate is away."',
      '"I have felt hopeless for a long time."',
      '"I used to think about dying but not lately."'
    ],
    answer: [1],
    rationale: 'A specific plan with available means and a chosen time and a period of low likelihood of rescue indicates the highest lethality and requires immediate one-to-one observation and removal of means. Passive ideation and chronic hopelessness are concerning but less immediately dangerous, and resolved ideation is the lowest risk.',
    strategy: 'Risk rises with specificity: plan, means, timing, and lethality. A vague wish is far less dangerous than a dated plan.' },

  { id: 'PSY-005', cat: 'psy', sub: 'Anxiety', type: 'mc', difficulty: 2,
    stem: 'A client in the emergency department is pacing, breathing rapidly, and unable to follow simple directions. Which level of anxiety is the client experiencing?',
    options: ['Mild', 'Moderate', 'Severe', 'Panic'],
    answer: [2],
    rationale: 'Severe anxiety narrows the perceptual field markedly so the client focuses on scattered details and cannot follow directions or problem solve, with prominent physical symptoms. Mild anxiety sharpens focus, moderate narrows it while learning remains possible with direction, and panic involves disorganization, loss of contact with reality, and inability to function at all.',
    strategy: 'Match the level to the perceptual field: mild widens, moderate narrows, severe scatters, panic disintegrates.' },

  { id: 'PSY-006', cat: 'psy', sub: 'Anxiety', type: 'mc', difficulty: 2,
    stem: 'A client is experiencing a panic attack with hyperventilation. What is the nurse\'s priority action?',
    options: [
      'Leave the client alone to reduce stimulation',
      'Stay with the client, speak calmly in short simple sentences, and guide slow breathing',
      'Explain the physiology of panic attacks',
      'Ask the client to describe the events that triggered the attack'
    ],
    answer: [1],
    rationale: 'During panic the client cannot process complex information, so a calm presence with brief directions and breathing guidance restores control. Leaving increases terror, physiological explanations exceed processing capacity, and exploring triggers is appropriate only after the attack resolves.',
    strategy: 'During panic: stay, stay calm, use short sentences. Teaching and processing happen afterward.' },

  { id: 'PSY-007', cat: 'psy', sub: 'Schizophrenia', type: 'mc', difficulty: 2,
    stem: 'A client with schizophrenia tells the nurse, "The voices are telling me I am worthless." Which response is most therapeutic?',
    options: [
      '"There are no voices. You are imagining things."',
      '"I do not hear any voices, but I believe you are hearing them. What are they saying to you right now?"',
      '"Just ignore the voices."',
      '"What do you think the voices mean?"'
    ],
    answer: [1],
    rationale: 'Presenting reality without arguing while acknowledging the client\'s experience maintains trust, and asking what the voices say assesses for command hallucinations that direct self-harm or violence. Denying the experience damages trust, dismissing it is unhelpful, and interpretive questions reinforce the hallucination.',
    strategy: 'Never argue with a hallucination and never validate its content. Present reality, acknowledge the experience, and assess for commands.' },

  { id: 'PSY-008', cat: 'psy', sub: 'Schizophrenia', type: 'sata', difficulty: 1,
    stem: 'Which findings are negative symptoms of schizophrenia? Select all that apply.',
    options: ['Flat affect', 'Auditory hallucinations', 'Avolition', 'Delusions', 'Alogia', 'Anhedonia'],
    answer: [0, 2, 4, 5],
    rationale: 'Negative symptoms represent the absence of normal function: flat affect, avolition or lack of motivation, alogia or poverty of speech, anhedonia, and asociality. Hallucinations and delusions are positive symptoms representing added abnormal experiences and respond better to antipsychotic medication.',
    strategy: 'Positive symptoms are added: hallucinations, delusions, disorganization. Negative symptoms are taken away: the five A words.' },

  { id: 'PSY-009', cat: 'psy', sub: 'Bipolar Disorder', type: 'mc', difficulty: 2,
    stem: 'A client in an acute manic episode has not eaten or slept in 2 days and is pacing continuously. Which nursing intervention is the priority?',
    options: [
      'Encourage the client to participate in a group therapy session',
      'Provide high-calorie finger foods and fluids that can be consumed while moving, and reduce environmental stimulation',
      'Confront the client about their behavior',
      'Allow the client to lead unit activities to channel their energy'
    ],
    answer: [1],
    rationale: 'Physiological needs come first in mania, where hyperactivity causes exhaustion and dehydration. Portable high-calorie foods let the client eat without sitting still, and reduced stimulation lowers the activity level. Group participation and leadership roles overstimulate, and confrontation escalates agitation.',
    strategy: 'Acute mania: finger foods, fluids, rest, low stimulation. Physical exhaustion is the real danger.' },

  { id: 'PSY-010', cat: 'psy', sub: 'Depression', type: 'mc', difficulty: 2,
    stem: 'A client with severe depression who has been withdrawn and unable to get out of bed suddenly appears calm, energetic, and is giving away possessions. What should the nurse conclude?',
    options: [
      'The client is responding well to treatment',
      'The client may have decided to act on suicidal thoughts and now has the energy to do so; suicide risk is heightened',
      'The client is developing mania',
      'The client is ready for discharge'
    ],
    answer: [1],
    rationale: 'A sudden lift in mood with giving away possessions in a severely depressed client is a classic warning that the person has resolved on suicide and regained enough energy to act, a risk that peaks in early treatment response. Interpreting the change as improvement or readiness for discharge is a well-documented and lethal error.',
    strategy: 'Sudden calm after deep depression plus giving away possessions equals imminent risk, not recovery.' },

  { id: 'PSY-011', cat: 'psy', sub: 'Substance Use', type: 'mc', difficulty: 2,
    stem: 'A client admitted 48 hours ago is now tremulous, diaphoretic, tachycardic, and reports seeing insects on the wall. What should the nurse suspect?',
    options: ['Opioid withdrawal', 'Alcohol withdrawal progressing toward delirium tremens', 'Cocaine intoxication', 'Nicotine withdrawal'],
    answer: [1],
    rationale: 'Autonomic hyperactivity with tremor, diaphoresis, tachycardia, and hallucinations 48 to 72 hours after the last drink indicates alcohol withdrawal delirium, which carries significant mortality and requires benzodiazepines, thiamine, and close monitoring. Opioid withdrawal is intensely uncomfortable but not usually life-threatening, and nicotine withdrawal does not cause hallucinations.',
    strategy: 'Alcohol and benzodiazepine withdrawal can kill. Opioid withdrawal is miserable but rarely fatal.' },

  { id: 'PSY-012', cat: 'psy', sub: 'Substance Use', type: 'mc', difficulty: 2,
    stem: 'A client says, "I only drink socially. My wife exaggerates the problem." Which defense mechanism is the client using?',
    options: ['Projection', 'Denial', 'Rationalization', 'Displacement'],
    answer: [1],
    rationale: 'Denial is the refusal to acknowledge a painful reality, and it is the hallmark defense in substance use disorder. Projection attributes one\'s own unacceptable feelings to another, rationalization creates logical-sounding justifications, and displacement redirects feelings onto a safer target.',
    strategy: 'Denial says it is not happening. Rationalization says it is happening but here is why it is fine.' },

  { id: 'PSY-013', cat: 'psy', sub: 'Grief and Loss', type: 'mc', difficulty: 2,
    stem: 'A client whose spouse died 3 months ago says, "I keep setting two places at the table without thinking." Which response is most therapeutic?',
    options: [
      '"You need to accept that your spouse is gone."',
      '"That sounds like habits from many years together. What is that like for you?"',
      '"You should get rid of your spouse\'s belongings to help you move on."',
      '"Most people are over this by now."'
    ],
    answer: [1],
    rationale: 'Normalizing the experience and inviting exploration supports healthy grieving. Directing the client to accept the loss, prescribing actions, and comparing timelines all invalidate a normal grief process that has no fixed schedule.',
    strategy: 'Grief has no timetable. Normalize, invite, and never prescribe how someone should mourn.' },

  { id: 'PSY-014', cat: 'psy', sub: 'End of Life', type: 'mc', difficulty: 2,
    stem: 'A dying client\'s family asks the nurse to stop giving morphine because they are afraid it will hasten death. What is the nurse\'s best response?',
    options: [
      'Stop the morphine as the family requests',
      'Explain that appropriately titrated opioids relieve pain and dyspnea and are not associated with hastening death, and explore the family\'s concerns',
      'Tell the family they have no say in the matter',
      'Reduce the dose without telling anyone'
    ],
    answer: [1],
    rationale: 'Opioids titrated to symptom relief in end-of-life care do not shorten life and often improve comfort and function, and the family\'s fear deserves direct education and exploration. Stopping treatment would cause needless suffering, dismissing the family damages trust, and covert dose reduction is deceptive and unethical.',
    strategy: 'Pain relief at end of life is not euthanasia. Address the fear directly with education.' },

  { id: 'PSY-015', cat: 'psy', sub: 'Abuse', type: 'mc', difficulty: 3,
    stem: 'A nurse suspects a child is being physically abused. Which finding is most concerning?',
    options: [
      'Bruises on the shins and knees',
      'Multiple bruises in various stages of healing on the back, buttocks, and upper arms with an inconsistent history',
      'A single scraped elbow',
      'A bruise on the forehead in a toddler learning to walk'
    ],
    answer: [1],
    rationale: 'Bruises of differing ages in protected areas that are not typical of ordinary play, combined with a history that does not match the injury, are hallmarks of inflicted trauma requiring mandated reporting. Shin, knee, elbow, and forehead injuries are common accidental sites in active children.',
    strategy: 'Accidental bruises land on bony prominences a child falls on. Inflicted bruises land on soft protected areas: back, buttocks, ears, neck, inner thighs.' },

  { id: 'PSY-016', cat: 'psy', sub: 'Abuse', type: 'mc', difficulty: 2,
    stem: 'A client discloses intimate partner violence but says she is not ready to leave. What is the nurse\'s most appropriate response?',
    options: [
      '"You must leave immediately for your safety."',
      '"I understand this is your decision. Can we work on a safety plan and connect you with resources for whenever you need them?"',
      '"If you stay, there is nothing I can do to help."',
      '"Why do you keep going back?"'
    ],
    answer: [1],
    rationale: 'Leaving is the most dangerous period in an abusive relationship, and the decision belongs to the client. Safety planning and resource connection are effective whether or not the client leaves now. Directives, withdrawal of support, and blaming questions all reduce the likelihood the client returns for help.',
    strategy: 'Never order someone to leave. Safety plan, provide resources, keep the door open.' },

  { id: 'PSY-017', cat: 'psy', sub: 'Crisis Intervention', type: 'mc', difficulty: 2,
    stem: 'A client arrives at the emergency department after a house fire destroyed their home. The client is disorganized and unable to make decisions. What is the nurse\'s priority intervention?',
    options: [
      'Provide long-term psychotherapy referral',
      'Ensure safety and basic needs, provide a calm environment, and help the client identify immediate concrete next steps',
      'Explore the client\'s childhood coping patterns',
      'Encourage the client to make major decisions now'
    ],
    answer: [1],
    rationale: 'Crisis intervention is short-term, present-focused, and directive: meet basic needs, reduce stimulation, and break the situation into immediate manageable steps. Long-term therapy, exploration of history, and major decision-making all exceed the client\'s current capacity.',
    strategy: 'Crisis intervention is here and now, concrete and directive. Insight work comes later.' },

  { id: 'PSY-018', cat: 'psy', sub: 'Therapeutic Environment', type: 'mc', difficulty: 2,
    stem: 'A client on a psychiatric unit is becoming increasingly loud and agitated, pacing and clenching fists. What is the nurse\'s first action?',
    options: [
      'Call for restraints immediately',
      'Approach calmly with adequate personal space, speak in a low voice, and offer to move to a quieter area and talk about what is happening',
      'Tell the client to calm down or lose privileges',
      'Ignore the behavior'
    ],
    answer: [1],
    rationale: 'Verbal de-escalation with a calm approach, respectful distance, and an offer of a lower-stimulus environment is the first-line response and prevents escalation. Restraints are a last resort, threats escalate anger, and ignoring rising agitation allows it to progress to violence.',
    strategy: 'De-escalation first: calm voice, personal space, offer choices, reduce stimulation. Restraint is the last option.' },

  { id: 'PSY-019', cat: 'psy', sub: 'Personality Disorders', type: 'mc', difficulty: 2,
    stem: 'A client with borderline personality disorder tells the nurse, "You are the only one who really understands me. The other nurses are terrible." What is the most appropriate response?',
    options: [
      'Accept the compliment and agree to be the client\'s primary contact',
      'State that the whole team is working together, and maintain consistent limits shared by all staff',
      'Report the other nurses to the manager',
      'Tell the client they are being manipulative'
    ],
    answer: [1],
    rationale: 'Splitting divides staff into all-good and all-bad, and the intervention is a unified team with consistent limits communicated to the client. Accepting the special role reinforces the splitting, escalating to management acts on the distortion, and labeling the client as manipulative is judgmental and damages the relationship.',
    strategy: 'Splitting is treated with staff consistency, not by picking a side. Communicate as a team.' },

  { id: 'PSY-020', cat: 'psy', sub: 'Eating Disorders', type: 'mc', difficulty: 2,
    stem: 'A client with anorexia nervosa is admitted with a body mass index of 14 and is beginning nutritional rehabilitation. Which complication should the nurse monitor for most closely in the first days?',
    options: [
      'Weight gain that is too rapid',
      'Refeeding syndrome with hypophosphatemia, hypokalemia, hypomagnesemia, and cardiac arrhythmia',
      'Constipation',
      'Dry skin'
    ],
    answer: [1],
    rationale: 'Refeeding drives an insulin surge that pushes phosphate, potassium, and magnesium intracellularly, producing arrhythmia, heart failure, and death within the first days. Calories are advanced slowly with daily electrolyte monitoring and repletion. Constipation and dry skin are real but not life-threatening.',
    strategy: 'Refeeding syndrome: phosphate is the one that kills. Start low, go slow, check electrolytes daily.' },

  { id: 'PSY-021', cat: 'psy', sub: 'Therapeutic Communication', type: 'mc', difficulty: 2,
    stem: 'A client is silent for several minutes after being told a biopsy result. What is the nurse\'s most therapeutic action?',
    options: [
      'Fill the silence with information about treatment options',
      'Remain present quietly, allowing the client time to process, and then offer, "Take whatever time you need. I am here."',
      'Leave the room to give the client privacy',
      'Ask a series of questions to assess understanding'
    ],
    answer: [1],
    rationale: 'Therapeutic silence gives the client time to absorb difficult news, and the nurse\'s continued presence communicates support without pressure. Filling the silence serves the nurse\'s discomfort, leaving may feel like abandonment, and questioning demands processing the client cannot yet do.',
    strategy: 'Silence is an intervention. Sitting with someone in it is often the most useful thing you can do.' },

  { id: 'PSY-022', cat: 'psy', sub: 'Cultural Care', type: 'mc', difficulty: 2,
    stem: 'A client from a culture that values family-centered decision making asks that all medical information be given to their eldest son. What should the nurse do?',
    options: [
      'Refuse because the client must receive their own information',
      'Confirm with the client that this is their preference, document it, and direct information to the designated family member as the client wishes',
      'Ignore the request and inform the client directly',
      'Ask the family to decide'
    ],
    answer: [1],
    rationale: 'Autonomy includes the right to delegate decision making and information receipt to others. The nurse verifies that the request is the client\'s own, documents it, and honors it. Refusing or overriding imposes one cultural framework on another, and asking the family bypasses the client entirely.',
    strategy: 'Autonomy includes the right to choose not to decide. Verify it is the client\'s wish, then honor it.' },

  { id: 'PSY-023', cat: 'psy', sub: 'Coping', type: 'mc', difficulty: 3,
    stem: 'A client facing a major surgery says, "I have been reading everything I can about this procedure and asking the surgeon a lot of questions." How should the nurse interpret this?',
    options: [
      'Maladaptive obsessive behavior requiring intervention',
      'An adaptive problem-focused coping strategy that should be supported',
      'Denial of the seriousness of the situation',
      'A sign of distrust of the health care team'
    ],
    answer: [1],
    rationale: 'Information seeking is a problem-focused coping strategy that reduces anxiety and increases perceived control for many people. Supporting it with accurate accessible information is appropriate, while pathologizing it discourages effective coping.',
    strategy: 'Coping is adaptive when it reduces distress and does not impair function. Information seeking usually qualifies.' },

  { id: 'PSY-024', cat: 'psy', sub: 'Depression', type: 'mc', difficulty: 2,
    stem: 'A client started on a selective serotonin reuptake inhibitor 3 days ago says, "This medication is not working." What is the nurse\'s best response?',
    options: [
      '"You may need a different medication."',
      '"Antidepressants typically take 4 to 6 weeks for full effect, though sleep and appetite often improve sooner. It is important to keep taking it consistently."',
      '"Try doubling the dose."',
      '"Perhaps you are not depressed after all."'
    ],
    answer: [1],
    rationale: 'Explaining the expected time course prevents premature discontinuation, which is the most common cause of treatment failure. Neurovegetative symptoms often improve before mood. Changing agents at 3 days, self-adjusting the dose, and questioning the diagnosis are all inappropriate.',
    strategy: 'Antidepressants need 4 to 6 weeks. Energy improves before mood, which is why suicide risk can rise early in treatment.' },

  { id: 'PSY-025', cat: 'psy', sub: 'Schizophrenia', type: 'mc', difficulty: 2,
    stem: 'A client with paranoid delusions refuses to eat, saying the food is poisoned. What is the most appropriate nursing intervention?',
    options: [
      'Insist the client eat and explain the food is safe',
      'Offer foods in sealed containers the client can open themselves, and allow the client to choose from several options',
      'Feed the client by nasogastric tube',
      'Tell the client no one is trying to poison them'
    ],
    answer: [1],
    rationale: 'Sealed containers the client opens themselves address the delusion practically without arguing about its truth, preserving both nutrition and trust. Insisting and contradicting provoke defensiveness and can incorporate the nurse into the delusional system, and tube feeding is not warranted before less invasive strategies are tried.',
    strategy: 'Do not argue with a delusion. Work around it in a way that meets the actual need.' },

  { id: 'PSY-026', cat: 'psy', sub: 'End of Life', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client in the final hours of life. Which finding is expected and does not require aggressive intervention?',
    options: [
      'Noisy gurgling respirations from pooled oropharyngeal secretions',
      'Report of severe uncontrolled pain',
      'Acute agitation with a distended bladder',
      'A new pressure injury'
    ],
    answer: [0],
    rationale: 'The so-called death rattle results from secretions the dying client can no longer clear and is typically not distressing to the client; repositioning and family education are the main interventions, with an anticholinergic if needed. Uncontrolled pain, agitation from urinary retention, and skin injury all require active intervention.',
    strategy: 'At end of life, treat what causes suffering. The death rattle distresses the family more than the client.' },

  { id: 'PSY-027', cat: 'psy', sub: 'Anxiety', type: 'mc', difficulty: 2,
    stem: 'A client with obsessive-compulsive disorder washes their hands until they bleed. Which initial nursing approach is most appropriate?',
    options: [
      'Prevent the client from washing their hands',
      'Allow the ritual initially while setting a structured schedule that gradually limits it, and provide skin care',
      'Confront the client about the irrationality of the behavior',
      'Ignore the behavior completely'
    ],
    answer: [1],
    rationale: 'Abruptly blocking a compulsion causes severe anxiety and escalation. The ritual is initially permitted while structure and gradual limits are introduced alongside exposure and response prevention therapy and skin protection. Confrontation is ineffective because the client already knows the behavior is irrational, and ignoring it neglects the physical injury.',
    strategy: 'Never stop a ritual abruptly. Allow it, then set gradual limits while treatment takes effect.' },

  { id: 'PSY-028', cat: 'psy', sub: 'Grief and Loss', type: 'mc', difficulty: 3,
    stem: 'A parent whose infant died 6 weeks ago reports being unable to return to work, sleeping poorly, and crying daily. How should the nurse interpret this?',
    options: [
      'Complicated grief requiring immediate psychiatric hospitalization',
      'A grief response within the expected range at 6 weeks, warranting support, follow-up, and screening for depression and safety',
      'Malingering',
      'Normal and requiring no follow-up'
    ],
    answer: [1],
    rationale: 'Intense grief with functional impairment at 6 weeks after the death of a child is within expected bounds, though the nurse still screens for depression and suicide risk and arranges support and follow-up. Hospitalization is not indicated without safety concerns, and no follow-up at all misses those at risk for complicated grief.',
    strategy: 'Grief is expected. Assess anyway for safety, and follow up rather than assuming resolution.' },

  { id: 'PSY-029', cat: 'psy', sub: 'Substance Use', type: 'mc', difficulty: 2,
    stem: 'A client in opioid withdrawal is restless with dilated pupils, rhinorrhea, yawning, muscle aches, and diarrhea. What should the nurse anticipate?',
    options: [
      'Immediate administration of naloxone',
      'Supportive care with clonidine or buprenorphine per protocol, hydration, and symptom management',
      'No treatment, since withdrawal resolves on its own',
      'Administration of flumazenil'
    ],
    answer: [1],
    rationale: 'Opioid withdrawal is treated symptomatically with alpha-2 agonists such as clonidine or with opioid agonist therapy such as buprenorphine or methadone, plus hydration and antiemetics. Naloxone would precipitate severe withdrawal, flumazenil reverses benzodiazepines, and leaving withdrawal untreated causes needless suffering and drives relapse.',
    strategy: 'Naloxone reverses opioid overdose, not withdrawal. Giving it during withdrawal makes everything worse.' },

  { id: 'PSY-030', cat: 'psy', sub: 'Therapeutic Communication', type: 'mc', difficulty: 2,
    stem: 'A client asks the nurse, "Do you think I made the right decision to have the surgery?" What is the most therapeutic response?',
    options: [
      '"Yes, it was definitely the right choice."',
      '"It sounds like you have been wondering about that. What is making you question it?"',
      '"That is not for me to say."',
      '"You should ask your surgeon."'
    ],
    answer: [1],
    rationale: 'Reflecting the underlying doubt and inviting exploration helps the client work through ambivalence. Offering an opinion imposes the nurse\'s judgment, and both refusing to engage and deflecting to the provider close the conversation the client is trying to open.',
    strategy: 'When a client asks for your opinion, they usually want to talk. Reflect and explore before you answer.' },

  { id: 'PSY-031', cat: 'psy', sub: 'Cognitive Disorders', type: 'mc', difficulty: 2,
    stem: 'A client with Alzheimer disease repeatedly asks when they can go home, becoming more agitated each time. What is the most therapeutic response?',
    options: [
      '"You live here now. Your house was sold last year."',
      '"Tell me about your home." Then redirect to a comforting activity.',
      '"You have asked me that five times already."',
      '"Your family will explain it when they visit."'
    ],
    answer: [1],
    rationale: 'Validation therapy joins the client in the feeling behind the question rather than correcting the facts, then redirects to a calming activity. Repeated reality orientation about a painful loss re-traumatizes the client with each retelling, pointing out repetition shames them, and deferring leaves the distress unaddressed.',
    strategy: 'In moderate to advanced dementia, validate and redirect. Reality orientation helps early on but harms later.' },

  { id: 'PSY-032', cat: 'psy', sub: 'Bipolar Disorder', type: 'mc', difficulty: 3,
    stem: 'A client taking lithium reports nausea, coarse hand tremor, and blurred vision. What should the nurse do first?',
    options: [
      'Reassure the client these are expected side effects',
      'Hold the next dose and obtain a serum lithium level',
      'Increase the dose',
      'Encourage fluid restriction'
    ],
    answer: [1],
    rationale: 'Coarse tremor, gastrointestinal symptoms, and visual changes indicate lithium toxicity, so the dose is held and a level obtained. A fine tremor is an expected side effect but a coarse one is not. Increasing the dose and restricting fluids both raise the level further, since dehydration and sodium loss increase lithium concentration.',
    strategy: 'Lithium toxicity: coarse tremor, vomiting, diarrhea, ataxia, confusion. Dehydration, low sodium, NSAIDs, and thiazides all raise the level.' },

  { id: 'PSY-033', cat: 'psy', sub: 'Abuse', type: 'mc', difficulty: 2,
    stem: 'An older adult client is brought in with dehydration, pressure injuries, and a caregiver who answers all questions for them. What should the nurse do?',
    options: [
      'Accept the caregiver\'s account and treat the medical problems',
      'Interview the client alone, assess for neglect and abuse, and report suspected elder mistreatment per mandatory reporting law',
      'Confront the caregiver directly',
      'Discharge the client back to the caregiver with education'
    ],
    answer: [1],
    rationale: 'Dehydration and pressure injuries with a caregiver who controls the interaction are classic signs of neglect, and mandatory reporting requires only suspicion. Interviewing the client privately is essential. Accepting the account, confronting the caregiver, or discharging back into the situation all leave the client at risk.',
    strategy: 'Always separate the client from the accompanying person before assessing for abuse or neglect.' },

  { id: 'PSY-034', cat: 'psy', sub: 'Coping', type: 'mc', difficulty: 2,
    stem: 'A client newly diagnosed with multiple sclerosis says, "The doctors must have mixed up my results. I feel fine." Which stage of adjustment does this represent?',
    options: ['Acceptance', 'Denial', 'Bargaining', 'Depression'],
    answer: [1],
    rationale: 'Denial is the initial protective response that buffers overwhelming news, and it is typically temporary. The nurse does not confront it directly but stays available as the client moves through it. Bargaining involves negotiation, depression involves sadness and withdrawal, and acceptance involves realistic engagement.',
    strategy: 'Kubler-Ross stages are not sequential or universal. Denial early is protective; only prolonged denial that blocks treatment is a problem.' },

  { id: 'PSY-035', cat: 'psy', sub: 'Sensory Alterations', type: 'mc', difficulty: 2,
    stem: 'A client in the intensive care unit becomes disoriented and reports seeing things that are not there on the third day. Which intervention is most appropriate?',
    options: [
      'Request restraints',
      'Promote orientation with clocks and calendars, restore day-night cycles, reduce unnecessary alarms, encourage family presence, and review medications',
      'Increase sedation',
      'Move the client to a windowless room to reduce stimulation'
    ],
    answer: [1],
    rationale: 'ICU delirium is addressed by non-pharmacological measures: orientation cues, sleep protection, noise reduction, early mobility, family presence, and removal of deliriogenic medications. Restraints and increased sedation worsen delirium, and eliminating natural light disrupts circadian rhythm further.',
    strategy: 'Delirium prevention is behavioral and environmental. Sedation and restraints make it worse, not better.' },

  { id: 'PSY-036', cat: 'psy', sub: 'Therapeutic Environment', type: 'mc', difficulty: 2,
    stem: 'A client on a psychiatric unit repeatedly asks the nurse personal questions about their family and social life. What is the most appropriate response?',
    options: [
      'Answer the questions to build rapport',
      'Redirect gently: "I am here to focus on you. What made you curious about that?"',
      'Tell the client the questions are inappropriate and end the conversation',
      'Ignore the questions'
    ],
    answer: [1],
    rationale: 'Maintaining professional boundaries while keeping the therapeutic relationship intact means redirecting warmly and exploring what prompted the question. Self-disclosure shifts the focus to the nurse, sharp refusal damages the alliance, and ignoring leaves the client confused about the boundary.',
    strategy: 'Boundaries are maintained warmly. Redirect to the client rather than either disclosing or rebuffing.' },

  { id: 'PSY-037', cat: 'psy', sub: 'Suicide Risk', type: 'mc', difficulty: 2,
    stem: 'A client is admitted on suicide precautions. Which nursing action is essential?',
    options: [
      'Allow the client to keep personal belongings for comfort',
      'Search belongings for potentially harmful items, remove them, and maintain the prescribed level of observation including during bathroom use',
      'Place the client in a private room at the end of the hall',
      'Ask the client to sign a no-suicide contract as the primary safety measure'
    ],
    answer: [1],
    rationale: 'Removing means and maintaining continuous or close observation, including in the bathroom where many inpatient suicides occur, are the essential protections. Isolated room placement reduces observation, and no-suicide contracts have no demonstrated protective effect and should never substitute for observation and means restriction.',
    strategy: 'Suicide precautions: remove means, maintain visibility, never leave the bathroom unobserved. Contracts do not work.' },

  { id: 'PSY-038', cat: 'psy', sub: 'Depression', type: 'mc', difficulty: 2,
    stem: 'A client with severe depression is scheduled for electroconvulsive therapy. Which client statement indicates a need for further teaching?',
    options: [
      '"I may have some short-term memory loss around the time of treatments."',
      '"I will be given anesthesia and a muscle relaxant so I will not feel the treatment."',
      '"I will be awake and able to feel the seizure."',
      '"I will need someone to drive me home after outpatient treatments."'
    ],
    answer: [2],
    rationale: 'Electroconvulsive therapy is performed under general anesthesia with a neuromuscular blocking agent, so the client is unconscious and does not experience the seizure. Transient memory disturbance around treatments is expected, and transportation is needed after outpatient sessions.',
    strategy: 'ECT is done under anesthesia. The main side effect to teach is temporary memory loss around treatment times.' },

  { id: 'PSY-039', cat: 'psy', sub: 'Cultural Care', type: 'mc', difficulty: 2,
    stem: 'A client uses traditional herbal remedies alongside prescribed medications. What is the nurse\'s most appropriate response?',
    options: [
      'Tell the client to stop using the remedies immediately',
      'Ask what the client takes and how much, document it, and check with pharmacy for interactions while respecting the practice',
      'Ignore the information since it is not part of the medical plan',
      'Tell the client herbal remedies are ineffective'
    ],
    answer: [1],
    rationale: 'Many herbal products interact meaningfully with prescription drugs, so full documentation and interaction screening are essential, while dismissing the practice guarantees the client will simply stop disclosing it. Respectful inquiry preserves both safety and trust.',
    strategy: 'Ask, document, screen for interactions. Judgment stops disclosure, and hidden use is far more dangerous.' },

  { id: 'PSY-040', cat: 'psy', sub: 'Anxiety', type: 'mc', difficulty: 2,
    stem: 'A veteran client with post-traumatic stress disorder becomes agitated when a fire alarm sounds during a drill. What is the nurse\'s best action?',
    options: [
      'Tell the client the alarm is not real and there is nothing to fear',
      'Move with the client to a quieter area, orient them to the present moment and surroundings, and use grounding techniques',
      'Leave the client alone until the alarm stops',
      'Administer a sedative as the first intervention'
    ],
    answer: [1],
    rationale: 'A flashback is treated with grounding: reducing the triggering stimulus, orienting to the present, and engaging the senses in the here and now. Dismissing the fear invalidates the experience, isolation increases distress, and medication is not the first intervention for a trigger that can be removed.',
    strategy: 'Flashback management is grounding: name the date, the place, and what the client can see, hear, and touch right now.' },

  { id: 'PSY-041', cat: 'psy', sub: 'Cognitive Disorders', type: 'mc', difficulty: 2,
    stem: 'A client with dementia becomes agitated every afternoon around 4 p.m. What should the nurse recognize and do?',
    options: [
      'The client is seeking attention and should be ignored',
      'This pattern suggests sundowning; increase light in the late afternoon, reduce noise, maintain routine, schedule demanding activities earlier, and avoid caffeine late in the day',
      'The client needs a higher dose of sedative each afternoon',
      'The client should be restrained during this period'
    ],
    answer: [1],
    rationale: 'Sundowning is late-day worsening of confusion and agitation in dementia, managed with light, routine, reduced stimulation, earlier scheduling of demanding tasks, and attention to fatigue, hunger, and pain. Ignoring, sedating, and restraining all worsen the underlying problem.',
    strategy: 'Sundowning is treated with light and routine, not with drugs.' },

  { id: 'PSY-042', cat: 'psy', sub: 'Substance Use', type: 'mc', difficulty: 2,
    stem: 'A nurse is teaching a client prescribed disulfiram. Which instruction is most important?',
    options: [
      '"Take the medication only when you feel like drinking."',
      '"Avoid all sources of alcohol, including mouthwash, cough syrup, sauces, and aftershave, because the reaction can be severe."',
      '"You may have one drink occasionally."',
      '"The medication reduces cravings for alcohol."'
    ],
    answer: [1],
    rationale: 'Disulfiram inhibits aldehyde dehydrogenase, causing flushing, severe vomiting, tachycardia, and potentially life-threatening hypotension with any alcohol exposure including hidden sources. It is taken daily rather than as needed, no drinking is safe, and it does not reduce craving; naltrexone and acamprosate do.',
    strategy: 'Disulfiram creates aversion, not craving reduction. Teach the hidden alcohol sources.' },

  { id: 'PSY-043', cat: 'psy', sub: 'Coping', type: 'sata', difficulty: 2,
    stem: 'Which findings suggest a client is using maladaptive coping? Select all that apply.',
    options: [
      'Increased alcohol use since a job loss',
      'Joining a support group after a diagnosis',
      'Withdrawing from all social contact for several weeks',
      'Exercising regularly to manage stress',
      'Sleeping 14 hours a day and missing work',
      'Talking with a trusted friend about worries'
    ],
    answer: [0, 2, 4],
    rationale: 'Substance use, social withdrawal, and excessive sleep with functional impairment reduce rather than resolve distress and impair role performance. Support groups, exercise, and confiding in others are adaptive strategies that engage with the stressor.',
    strategy: 'Coping is maladaptive when it impairs function or avoids rather than addresses the stressor.' },

  { id: 'PSY-044', cat: 'psy', sub: 'End of Life', type: 'mc', difficulty: 2,
    stem: 'A client with a terminal illness says, "I am not afraid of dying, but I am afraid of being in pain and alone." What is the nurse\'s best response?',
    options: [
      '"You will not be alone, I promise."',
      '"Those are common fears. Let\'s talk about how we can manage your pain and about who you would want with you."',
      '"Let\'s not think about that right now."',
      '"Everyone dies eventually."'
    ],
    answer: [1],
    rationale: 'Normalizing the fears and moving into concrete planning for symptom control and presence addresses exactly what the client raised. Promises that cannot be guaranteed, avoidance, and platitudes all fail to engage with the specific fears.',
    strategy: 'End-of-life fears are usually about pain, abandonment, and loss of dignity. Address each concretely.' },

  { id: 'PSY-045', cat: 'psy', sub: 'Therapeutic Communication', type: 'mc', difficulty: 2,
    stem: 'A client says, "I have not been able to eat since my husband left." Which nurse response demonstrates the technique of exploring?',
    options: [
      '"Why did your husband leave?"',
      '"Tell me more about what has been happening since he left."',
      '"You should try to eat something anyway."',
      '"That must be very hard."'
    ],
    answer: [1],
    rationale: 'Exploring invites the client to elaborate on a topic in more depth. A why question demands justification, advice giving shuts down the conversation, and while acknowledging difficulty is empathic, it is the technique of empathy rather than exploring.',
    strategy: 'Learn the technique names: exploring invites elaboration, restating repeats content, reflecting names feelings, clarifying checks understanding.' }
  ,
  { id: 'PSY-046', cat: 'psy', sub: 'Schizophrenia', type: 'mc', difficulty: 3,
    stem: 'A client taking haloperidol develops a temperature of 40 degrees Celsius, muscle rigidity, altered consciousness, and unstable blood pressure. What should the nurse suspect?',
    options: ['Tardive dyskinesia', 'Neuroleptic malignant syndrome', 'Akathisia', 'Serotonin syndrome'],
    answer: [1],
    rationale: 'Hyperthermia, lead-pipe rigidity, altered mental status, and autonomic instability define neuroleptic malignant syndrome, a life-threatening emergency requiring immediate discontinuation of the antipsychotic, cooling, and supportive care. Tardive dyskinesia is a late movement disorder, akathisia is motor restlessness, and serotonin syndrome features hyperreflexia and clonus rather than lead-pipe rigidity.',
    strategy: 'NMS: fever, rigidity, altered mental status, autonomic instability. Stop the drug and cool the client immediately.' },

  { id: 'PSY-047', cat: 'psy', sub: 'Schizophrenia', type: 'mc', difficulty: 2,
    stem: 'A client taking an antipsychotic reports an inability to sit still and a constant urge to move. Which extrapyramidal symptom is this?',
    options: ['Dystonia', 'Akathisia', 'Pseudoparkinsonism', 'Tardive dyskinesia'],
    answer: [1],
    rationale: 'Akathisia is subjective inner restlessness with an irresistible need to move, and it is frequently mistaken for worsening psychosis or anxiety. Dystonia causes sustained muscle contractions such as torticollis and oculogyric crisis, pseudoparkinsonism produces tremor and rigidity, and tardive dyskinesia produces involuntary orofacial movements.',
    strategy: 'Akathisia is restlessness the client feels. Do not mistake it for agitation and increase the antipsychotic.' },

  { id: 'PSY-048', cat: 'psy', sub: 'Crisis Intervention', type: 'mc', difficulty: 2,
    stem: 'A client threatens to harm a specific named person. What is the nurse\'s legal and ethical responsibility?',
    options: [
      'Maintain confidentiality at all costs',
      'Notify the provider and follow the duty-to-warn requirements in the jurisdiction, which may include warning the identified person and law enforcement',
      'Discuss the threat only with the client',
      'Document the threat and take no further action'
    ],
    answer: [1],
    rationale: 'A credible threat against an identifiable person creates a duty to protect that overrides confidentiality in most jurisdictions, requiring notification through the appropriate clinical and legal channels. Maintaining confidentiality, keeping the discussion internal, or documenting alone leaves a foreseeable victim unprotected.',
    strategy: 'Confidentiality yields to a specific threat against a specific person. That is the Tarasoff duty.' },

  { id: 'PSY-049', cat: 'psy', sub: 'Depression', type: 'mc', difficulty: 2,
    stem: 'A client taking a monoamine oxidase inhibitor asks about dietary restrictions. Which food must be avoided?',
    options: ['Fresh chicken', 'Aged cheese and cured meats', 'White rice', 'Fresh apples'],
    answer: [1],
    rationale: 'Tyramine-rich foods including aged cheeses, cured and smoked meats, fermented products, soy sauce, tap beer, and overripe fruit can precipitate hypertensive crisis with a monoamine oxidase inhibitor. Fresh unaged proteins, grains, and fresh fruits are safe.',
    strategy: 'MAOI diet: nothing aged, cured, fermented, or smoked. Fresh is safe.' },

  { id: 'PSY-050', cat: 'psy', sub: 'Therapeutic Communication', type: 'mc', difficulty: 2,
    stem: 'A client with hearing loss and a client\'s family member both speak during an assessment. Which action best supports therapeutic communication with the client?',
    options: [
      'Direct all questions to the family member for efficiency',
      'Face the client, speak directly to them, and use the family member only to supplement what the client provides',
      'Write out every question',
      'Speak loudly to both'
    ],
    answer: [1],
    rationale: 'Addressing the client directly preserves dignity and autonomy and produces more accurate information, with the family supplementing rather than substituting. Bypassing the client is disrespectful and inaccurate, exclusive writing is unnecessary and slow, and shouting distorts speech.',
    strategy: 'Always speak to the client, not about them. Family supplements; it does not replace.' },

  { id: 'PSY-051', cat: 'psy', sub: 'Abuse', type: 'mc', difficulty: 3,
    stem: 'A nurse is caring for a client after a sexual assault. Which action is the priority after ensuring medical stability?',
    options: [
      'Encourage the client to shower and change clothes for comfort',
      'Explain the options for forensic evidence collection and let the client decide, while providing emotional support and prophylaxis discussion',
      'Contact law enforcement without the client\'s consent',
      'Question the client in detail about the assault'
    ],
    answer: [1],
    rationale: 'Restoring the client\'s sense of control is central after an assault, so options are explained and every step is consented to. Showering destroys evidence, mandatory reporting rules vary and adult clients generally control whether law enforcement is involved, and detailed interrogation by the nurse can re-traumatize.',
    strategy: 'After assault, give back control. Offer options, obtain consent for each step, never remove the choice.' },

  { id: 'PSY-052', cat: 'psy', sub: 'Personality Disorders', type: 'mc', difficulty: 2,
    stem: 'A client with antisocial personality disorder repeatedly violates unit rules and charms staff into making exceptions. What is the most effective nursing approach?',
    options: [
      'Make exceptions to build rapport',
      'Apply unit rules consistently across all staff and shifts, with clear communicated consequences',
      'Confront the client aggressively',
      'Avoid interaction with the client'
    ],
    answer: [1],
    rationale: 'Consistent limit setting communicated across the whole team removes the leverage manipulation depends on. Exceptions reinforce rule violation, aggressive confrontation invites escalation and power struggle, and avoidance abandons the therapeutic role.',
    strategy: 'Manipulation is defeated by consistency, not by confrontation. Every staff member enforces the same limit.' },

  { id: 'PSY-053', cat: 'psy', sub: 'Anxiety', type: 'mc', difficulty: 2,
    stem: 'A client is prescribed lorazepam for acute anxiety. Which teaching point is most important?',
    options: [
      '"This medication is safe to combine with a glass of wine."',
      '"Avoid alcohol and other central nervous system depressants, do not drive until you know how it affects you, and do not stop it abruptly after regular use."',
      '"Take it whenever you feel any stress."',
      '"It works best if taken for years continuously."'
    ],
    answer: [1],
    rationale: 'Benzodiazepines potentiate other central nervous system depressants, impair driving, and cause withdrawal seizures if stopped abruptly after sustained use. Alcohol combination is dangerous, unrestricted use promotes dependence, and long-term continuous use is discouraged in favor of short-term treatment with therapy.',
    strategy: 'Benzodiazepine teaching: no alcohol, no driving until you know, no abrupt stopping, short-term use.' },

  { id: 'PSY-054', cat: 'psy', sub: 'Cognitive Disorders', type: 'sata', difficulty: 3,
    stem: 'Which features distinguish delirium from dementia? Select all that apply.',
    options: [
      'Abrupt onset over hours to days',
      'Fluctuating level of consciousness',
      'Gradual progression over months to years',
      'Usually reversible when the underlying cause is treated',
      'Attention is markedly impaired',
      'Level of consciousness is typically preserved until very late'
    ],
    answer: [0, 1, 3, 4],
    rationale: 'Delirium is abrupt, fluctuating, attention-impairing, and usually reversible. Dementia develops gradually, is progressive, and preserves level of consciousness until very late stages. The two frequently coexist, and a client with dementia who becomes acutely worse should be evaluated for superimposed delirium.',
    strategy: 'Delirium is acute, fluctuating, and reversible. Dementia is chronic, progressive, and alert. Sudden worsening in dementia equals delirium.' },

  { id: 'PSY-055', cat: 'psy', sub: 'Eating Disorders', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client with bulimia nervosa. Which physical finding is most consistent with this disorder?',
    options: [
      'Body mass index of 14',
      'Dental enamel erosion, parotid gland swelling, and calluses on the knuckles',
      'Lanugo hair over the trunk',
      'Amenorrhea for 6 months'
    ],
    answer: [1],
    rationale: 'Repeated self-induced vomiting produces enamel erosion from gastric acid, parotid enlargement, and Russell sign calluses on the dorsum of the hand. Very low body weight, lanugo, and amenorrhea are more characteristic of anorexia nervosa; clients with bulimia are often normal weight.',
    strategy: 'Bulimia clients are often normal weight. Look at the teeth, the parotids, and the knuckles.' },

  { id: 'PSY-056', cat: 'psy', sub: 'Grief and Loss', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for parents whose newborn died. Which action best supports their grieving?',
    options: [
      'Remove all reminders of the infant immediately',
      'Offer the parents the opportunity to hold the infant, take photographs, and receive mementos such as footprints, following their preference',
      'Tell them they can have another baby',
      'Discourage them from seeing the infant'
    ],
    answer: [1],
    rationale: 'Creating memories and offering contact with the infant, entirely according to parental preference, supports grief and reduces later complicated grief. Removing all evidence, minimizing the loss by pointing to future children, and discouraging contact all impede mourning.',
    strategy: 'Perinatal loss: offer contact and mementos, follow the parents\' lead, and never minimize with talk of future children.' },

  { id: 'PSY-057', cat: 'psy', sub: 'Therapeutic Environment', type: 'mc', difficulty: 2,
    stem: 'A nurse is leading a therapeutic group and one member dominates the conversation. What is the most appropriate intervention?',
    options: [
      'Ask the member to leave the group',
      'Acknowledge the contribution and invite others: "Thank you for sharing that. I would like to hear how others are experiencing this."',
      'Ignore the behavior',
      'Confront the member about being self-centered'
    ],
    answer: [1],
    rationale: 'Acknowledging then redirecting maintains the member\'s dignity while opening space for the group, which is the leader\'s core function. Removal is punitive, ignoring allows the imbalance to persist, and public confrontation shames the member and damages group safety.',
    strategy: 'Group leadership: acknowledge, then redirect. Protect both the individual and the group process.' },

  { id: 'PSY-058', cat: 'psy', sub: 'Substance Use', type: 'mc', difficulty: 2,
    stem: 'A client is admitted with a suspected benzodiazepine overdose and is somnolent with a respiratory rate of 8. Which intervention is the priority?',
    options: [
      'Administer flumazenil immediately',
      'Support the airway and ventilation, and administer flumazenil only with caution given seizure risk in dependent clients',
      'Administer naloxone',
      'Induce vomiting'
    ],
    answer: [1],
    rationale: 'Airway and ventilatory support is the priority in any overdose with respiratory depression. Flumazenil can precipitate refractory seizures in benzodiazepine-dependent clients or in mixed overdoses and is used selectively. Naloxone reverses opioids, and inducing vomiting risks aspiration in a somnolent client.',
    strategy: 'Airway first in every overdose. Antidotes come second and some carry their own risks.' },

  { id: 'PSY-059', cat: 'psy', sub: 'Coping', type: 'mc', difficulty: 2,
    stem: 'A client who is angry about a long wait shouts at the nurse. Which response is most therapeutic?',
    options: [
      '"There is no reason to yell at me."',
      '"I can see you are frustrated by the wait. Let me find out where things stand and get back to you."',
      '"Everyone has to wait."',
      '"If you keep shouting I will have to ask you to leave."'
    ],
    answer: [1],
    rationale: 'Naming the emotion and offering concrete action de-escalates anger by demonstrating that the concern is heard and being acted on. Defensiveness, dismissal, and threats all escalate.',
    strategy: 'De-escalation: name the feeling, do not defend, and offer something concrete you will actually do.' },

  { id: 'PSY-060', cat: 'psy', sub: 'Bipolar Disorder', type: 'mc', difficulty: 2,
    stem: 'A client taking lithium asks about fluid and salt intake. What should the nurse teach?',
    options: [
      '"Restrict sodium to lower your lithium level."',
      '"Maintain a consistent sodium intake and drink 2 to 3 liters of fluid daily, and contact your provider if you have vomiting, diarrhea, or heavy sweating."',
      '"Fluid intake does not affect lithium."',
      '"Increase sodium substantially to protect your kidneys."'
    ],
    answer: [1],
    rationale: 'Lithium is handled by the kidney like sodium, so sodium depletion or dehydration raises the lithium level toward toxicity while sodium loading lowers it below therapeutic range. Consistency plus adequate hydration and prompt reporting of fluid losses is the correct teaching.',
    strategy: 'Lithium follows sodium. Lose salt or water and the level rises; that is why vomiting, diarrhea, and diuretics are dangerous.' },

  { id: 'PSY-061', cat: 'psy', sub: 'Suicide Risk', type: 'sata', difficulty: 2,
    stem: 'Which factors increase a client\'s risk of suicide? Select all that apply.',
    options: [
      'A previous suicide attempt',
      'Recent loss of a job and a relationship',
      'Strong family and community connection',
      'Chronic pain and a terminal diagnosis',
      'Access to firearms in the home',
      'Active engagement in ongoing treatment'
    ],
    answer: [0, 1, 3, 4],
    rationale: 'Prior attempt is the single strongest predictor, and recent losses, chronic pain or terminal illness, and access to lethal means all raise risk. Social connection and treatment engagement are protective factors.',
    strategy: 'Strongest risk factor is a prior attempt. Strongest modifiable factor is access to lethal means.' },

  { id: 'PSY-062', cat: 'psy', sub: 'Cultural Care', type: 'mc', difficulty: 2,
    stem: 'A client declines pain medication, saying that enduring pain has spiritual significance in their tradition. What should the nurse do?',
    options: [
      'Administer the medication anyway for the client\'s good',
      'Respect the decision, document it, ensure the client knows medication remains available, and offer non-pharmacological comfort measures',
      'Tell the client the belief is not medically valid',
      'Ask the family to convince the client'
    ],
    answer: [1],
    rationale: 'A competent client may refuse analgesia for any reason, and the nurse honors the decision while keeping the option open and offering acceptable alternatives such as positioning, warmth, massage, and presence. Overriding, disputing, and recruiting family against the client all violate autonomy.',
    strategy: 'Respect the refusal, keep the door open, offer what the client will accept.' },

  { id: 'PSY-063', cat: 'psy', sub: 'Therapeutic Communication', type: 'mc', difficulty: 2,
    stem: 'A nurse says to a client, "You mentioned that you feel like a burden to your family. Can you help me understand what that means to you?" Which technique is the nurse using?',
    options: ['Giving advice', 'Clarifying', 'Reassuring', 'Confronting'],
    answer: [1],
    rationale: 'Clarifying asks the client to expand on an ambiguous or significant statement so the nurse understands its meaning to the client. Advice offers solutions, reassurance minimizes, and confrontation points out inconsistencies.',
    strategy: 'Clarifying checks meaning, reflecting names feelings, restating repeats content, summarizing pulls it together.' },

  { id: 'PSY-064', cat: 'psy', sub: 'Depression', type: 'mc', difficulty: 2,
    stem: 'A nurse is planning care for a client with severe depression who has poor concentration and low energy. Which approach is most appropriate initially?',
    options: [
      'Offer a full schedule of complex activities to combat inactivity',
      'Offer simple, short, structured activities with limited choices and consistent routine',
      'Allow the client to remain in bed all day',
      'Present many options so the client feels in control'
    ],
    answer: [1],
    rationale: 'Depression impairs concentration and decision making, so simple structured activities with few choices reduce overwhelm while preventing isolation. Complex schedules and abundant options increase distress, and complete inactivity deepens depression.',
    strategy: 'In severe depression, limit choices and simplify. Too many options paralyze.' },

  { id: 'PSY-065', cat: 'psy', sub: 'Anxiety', type: 'mc', difficulty: 2,
    stem: 'A client with generalized anxiety disorder is starting buspirone. Which teaching point is accurate?',
    options: [
      '"It works immediately for acute panic."',
      '"It takes 2 to 4 weeks for full effect, does not cause dependence, and should be taken consistently rather than as needed."',
      '"It is highly addictive."',
      '"You may drink alcohol freely with it."'
    ],
    answer: [1],
    rationale: 'Buspirone is a non-benzodiazepine anxiolytic with delayed onset, no dependence potential, and no utility for acute panic. It requires consistent scheduled dosing. Alcohol is still discouraged with any anxiolytic.',
    strategy: 'Buspirone: slow onset, no dependence, scheduled not PRN. It is the opposite of a benzodiazepine in every respect.' },

  { id: 'PSY-066', cat: 'psy', sub: 'Abuse', type: 'mc', difficulty: 2,
    stem: 'Which statement by a nurse best supports a client who has disclosed childhood sexual abuse?',
    options: [
      '"Why did you not tell anyone at the time?"',
      '"Thank you for telling me. What happened was not your fault, and I want to make sure you get the support you need."',
      '"You should try to forget about it and move forward."',
      '"Are you sure that is what happened?"'
    ],
    answer: [1],
    rationale: 'Acknowledging the disclosure, explicitly removing blame, and offering support are the core elements of a trauma-informed response. Why questions imply fault, urging the client to forget dismisses the experience, and questioning accuracy is retraumatizing.',
    strategy: 'Trauma-informed response: believe, thank, de-blame, and offer support. Never interrogate.' },

  { id: 'PSY-067', cat: 'psy', sub: 'Schizophrenia', type: 'mc', difficulty: 2,
    stem: 'A client taking clozapine reports a sore throat and fever. What is the priority nursing action?',
    options: [
      'Administer acetaminophen and reassess in 4 hours',
      'Obtain an absolute neutrophil count urgently, since clozapine can cause severe neutropenia',
      'Increase the clozapine dose',
      'Reassure the client that this is a common side effect'
    ],
    answer: [1],
    rationale: 'Clozapine carries a risk of severe neutropenia, so any sign of infection requires immediate white cell and absolute neutrophil count monitoring under the mandated program. Symptomatic treatment, dose escalation, and reassurance all delay detection of a potentially fatal complication.',
    strategy: 'Clozapine plus sore throat or fever equals check the ANC now. Also watch for myocarditis and seizures.' },

  { id: 'PSY-068', cat: 'psy', sub: 'End of Life', type: 'mc', difficulty: 2,
    stem: 'A hospice client\'s family asks how they will know death is near. Which sign should the nurse describe as expected in the final days?',
    options: [
      'Increased appetite and energy',
      'Decreased oral intake, increased sleeping, cool mottled extremities, and changes in breathing pattern',
      'Rising blood pressure',
      'Increased urine output'
    ],
    answer: [1],
    rationale: 'Reduced intake, progressive somnolence, peripheral mottling and coolness from circulatory shunting, and irregular breathing including Cheyne-Stokes patterns are expected changes in the final days. Blood pressure falls and urine output decreases as perfusion declines.',
    strategy: 'Dying signs: less intake, more sleep, mottling, breathing changes, decreased output. Preparing the family reduces distress.' },

  { id: 'PSY-069', cat: 'psy', sub: 'Crisis Intervention', type: 'mc', difficulty: 2,
    stem: 'A nurse is debriefing with staff after a violent incident on the unit. Which purpose does this serve?',
    options: [
      'To determine which staff member is at fault',
      'To process the emotional impact, review what happened, and identify system improvements for future events',
      'To satisfy documentation requirements only',
      'To decide on the client\'s discharge'
    ],
    answer: [1],
    rationale: 'Critical incident debriefing supports staff psychologically and improves the system\'s response, which reduces burnout and future incidents. It is explicitly not a fault-finding exercise, a paperwork task, or a clinical disposition meeting.',
    strategy: 'Debriefing is for the people and the process, never for blame.' },

  { id: 'PSY-070', cat: 'psy', sub: 'Cognitive Disorders', type: 'mc', difficulty: 2,
    stem: 'A caregiver of a client with dementia reports exhaustion and says, "I cannot do this anymore." What is the nurse\'s priority action?',
    options: [
      'Tell the caregiver they are doing a wonderful job and to keep going',
      'Assess for caregiver burden and depression, and connect the caregiver with respite services, support groups, and possible care alternatives',
      'Suggest immediate nursing home placement',
      'Advise the caregiver to hire private help'
    ],
    answer: [1],
    rationale: 'Caregiver burnout endangers both caregiver and client and requires formal assessment plus concrete resources, particularly respite. Praise alone does not relieve the burden, immediate placement forecloses options the family may not want, and private help may be financially out of reach.',
    strategy: 'Caregiver strain is a nursing diagnosis. Assess it, then connect to respite and support.' },

  { id: 'PSY-071', cat: 'psy', sub: 'Personality Disorders', type: 'mc', difficulty: 2,
    stem: 'A client with borderline personality disorder threatens self-harm when a nurse ends a conversation to attend to another client. What is the most appropriate response?',
    options: [
      'Stay with the client to prevent the self-harm',
      'Assess safety immediately, then maintain the planned limit while scheduling a specific time to return',
      'Tell the client the threat is manipulative',
      'Ignore the threat entirely'
    ],
    answer: [1],
    rationale: 'Every self-harm statement is assessed for safety, but reinforcing the threat by abandoning the limit teaches that threats produce attention. Assessing, holding the limit, and scheduling a predictable return balances safety and consistency. Labeling the behavior is judgmental and ignoring it is unsafe.',
    strategy: 'Assess every threat, then keep the limit. Give attention on a schedule, not in response to threats.' },

  { id: 'PSY-072', cat: 'psy', sub: 'Substance Use', type: 'mc', difficulty: 2,
    stem: 'A client in alcohol withdrawal is prescribed thiamine. What is the rationale?',
    options: [
      'To reduce cravings for alcohol',
      'To prevent Wernicke encephalopathy and Korsakoff syndrome, which result from thiamine deficiency',
      'To treat withdrawal seizures',
      'To reverse liver damage'
    ],
    answer: [1],
    rationale: 'Chronic alcohol use depletes thiamine, and glucose administration without thiamine can precipitate Wernicke encephalopathy with its triad of confusion, ataxia, and ophthalmoplegia, which progresses to irreversible Korsakoff amnestic syndrome. Cravings are addressed by naltrexone or acamprosate and seizures by benzodiazepines.',
    strategy: 'Thiamine before glucose in anyone with alcohol use disorder. Wernicke is reversible; Korsakoff is not.' },

  { id: 'PSY-073', cat: 'psy', sub: 'Therapeutic Environment', type: 'mc', difficulty: 2,
    stem: 'A nurse observes two clients on a psychiatric unit becoming increasingly hostile toward each other. What is the nurse\'s first action?',
    options: [
      'Wait to see if they resolve it themselves',
      'Calmly separate the clients, address each individually, and reduce environmental stimulation',
      'Call security immediately',
      'Discuss the conflict in the community group meeting'
    ],
    answer: [1],
    rationale: 'Early separation and individual de-escalation prevent physical violence while preserving both clients\' dignity. Waiting allows escalation, immediate security involvement can inflame the situation, and public group discussion at the moment of conflict increases tension.',
    strategy: 'Separate first, de-escalate individually, process later.' },

  { id: 'PSY-074', cat: 'psy', sub: 'Grief and Loss', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a child whose sibling died. The 5-year-old asks, "When is my brother coming back?" What is the most appropriate response?',
    options: [
      '"Your brother went to sleep and will not wake up."',
      '"Your brother died. That means his body stopped working and he cannot come back. It is not because of anything you did."',
      '"He has gone away on a long trip."',
      '"You are too young to understand."'
    ],
    answer: [1],
    rationale: 'Preschoolers require concrete honest language and explicit reassurance that they did not cause the death, since magical thinking leads them to assume responsibility. Euphemisms about sleep and trips cause fear of sleeping and expectation of return, and dismissing the question isolates the child.',
    strategy: 'Use the word died with children. Sleep and journey euphemisms create fear and false hope.' },

  { id: 'PSY-075', cat: 'psy', sub: 'Coping', type: 'mc', difficulty: 2,
    stem: 'A client scheduled for a mastectomy says, "I will not be a real woman anymore." What is the nurse\'s most therapeutic response?',
    options: [
      '"That is not true, you will look the same in clothes."',
      '"It sounds like you are worried about how this will change how you see yourself. Can you tell me more?"',
      '"Reconstruction can fix that."',
      '"Many women feel that way and get over it."'
    ],
    answer: [1],
    rationale: 'Reflecting the body image concern and inviting exploration allows the client to voice fears about identity, sexuality, and relationships. Contradiction, jumping to a technical solution, and generalizing the feeling all close the conversation prematurely.',
    strategy: 'Body image concerns need exploration, not solutions. The fix comes after the feeling is heard.' },

  { id: 'PSY-076', cat: 'psy', sub: 'Depression', type: 'mc', difficulty: 2,
    stem: 'A client taking sertraline is prescribed tramadol for pain. Which complication should the nurse monitor for?',
    options: ['Neuroleptic malignant syndrome', 'Serotonin syndrome', 'Hypertensive crisis', 'Agranulocytosis'],
    answer: [1],
    rationale: 'Combining a selective serotonin reuptake inhibitor with tramadol, which has serotonergic activity, risks serotonin syndrome with agitation, hyperreflexia, clonus, hyperthermia, and autonomic instability. Neuroleptic malignant syndrome relates to antipsychotics, hypertensive crisis to monoamine oxidase inhibitors and tyramine, and agranulocytosis to clozapine.',
    strategy: 'Serotonin syndrome: hyperreflexia and clonus. NMS: lead-pipe rigidity. That single difference separates them.' },

  { id: 'PSY-077', cat: 'psy', sub: 'Cultural Care', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client whose family remains at the bedside continuously in large numbers. Which action is most appropriate?',
    options: [
      'Strictly enforce a two-visitor limit',
      'Assess the meaning of family presence for the client, negotiate arrangements that respect the practice while maintaining safety and other clients\' rest',
      'Ask the family to leave entirely',
      'Ignore the situation'
    ],
    answer: [1],
    rationale: 'Extended family presence is culturally central for many people and often therapeutic. Negotiating a workable arrangement respects the practice while addressing legitimate clinical and shared-space concerns. Rigid enforcement and exclusion are culturally insensitive, and ignoring the situation leaves real conflicts unresolved.',
    strategy: 'Culturally responsive care negotiates rather than either forbidding or ignoring.' },

  { id: 'PSY-078', cat: 'psy', sub: 'Anxiety', type: 'mc', difficulty: 2,
    stem: 'A client with a specific phobia of needles requires a blood draw. Which intervention is most appropriate?',
    options: [
      'Tell the client the fear is irrational',
      'Acknowledge the fear, offer choices such as position and looking away, use distraction and slow breathing, and consider topical anesthetic',
      'Restrain the client for the procedure',
      'Cancel all blood work indefinitely'
    ],
    answer: [1],
    rationale: 'Acknowledgment, restored control through choices, distraction, breathing, and reduced physical discomfort all lower the phobic response and allow the procedure. Dismissing the fear, forcing the procedure, and abandoning necessary testing are all inappropriate.',
    strategy: 'Phobias respond to control and gradual exposure. Never dismiss and never force.' },

  { id: 'PSY-079', cat: 'psy', sub: 'Suicide Risk', type: 'mc', difficulty: 2,
    stem: 'A client on one-to-one suicide observation asks the nurse to step outside while they use the bathroom. What should the nurse do?',
    options: [
      'Step outside and listen at the door',
      'Explain that continuous observation must be maintained, including in the bathroom, and preserve as much privacy as safety allows',
      'Discontinue the observation level',
      'Ask another client to watch'
    ],
    answer: [1],
    rationale: 'One-to-one observation means unbroken visual contact, and bathrooms are the most common location for inpatient suicide because of both privacy and available anchor points. The nurse maintains observation while protecting dignity as much as possible. Stepping out, reducing the level unilaterally, and delegating to another client are all unsafe.',
    strategy: 'One-to-one means never out of sight, bathroom included. Only a provider order changes the level.' },

  { id: 'PSY-080', cat: 'psy', sub: 'Bipolar Disorder', type: 'mc', difficulty: 2,
    stem: 'A client in a manic episode is dressing provocatively and making sexual comments to other clients. What is the most appropriate nursing action?',
    options: [
      'Confront the client publicly about the behavior',
      'Privately and matter-of-factly assist the client to dress appropriately and redirect them away from other clients',
      'Allow the behavior since it is part of the illness',
      'Isolate the client for the entire admission'
    ],
    answer: [1],
    rationale: 'Hypersexuality in mania is a symptom, and the nurse protects the client\'s dignity and other clients by intervening privately, matter-of-factly, and with redirection. Public confrontation humiliates, permitting the behavior exposes others and leaves the client with regret after the episode, and prolonged isolation is unnecessarily restrictive.',
    strategy: 'Protect the client from the consequences of the illness, privately and without judgment.' },

  { id: 'PSY-081', cat: 'psy', sub: 'Therapeutic Communication', type: 'mc', difficulty: 2,
    stem: 'A client tells the nurse, "Do not tell anyone, but I have been saving my pills." What is the nurse\'s best response?',
    options: [
      '"I will keep that between us."',
      '"I cannot keep that confidential because it concerns your safety. I need to share it with the team so we can help keep you safe."',
      '"Why would you do that?"',
      '"I will pretend I did not hear that."'
    ],
    answer: [1],
    rationale: 'Safety information cannot be held in confidence, and saying so honestly preserves trust better than either a promise the nurse will break or feigned ignorance. Why questions provoke defensiveness, and ignoring the disclosure leaves lethal means available.',
    strategy: 'Never promise confidentiality before you hear what it is. When safety is at stake, say plainly that you must share it.' },

  { id: 'PSY-082', cat: 'psy', sub: 'Cognitive Disorders', type: 'mc', difficulty: 2,
    stem: 'A nurse is communicating with a client who has moderate dementia. Which technique is most effective?',
    options: [
      'Ask open-ended questions requiring detailed answers',
      'Use short simple sentences, one instruction at a time, allow extra response time, and use gestures and visual cues',
      'Speak rapidly to hold attention',
      'Correct every factual error the client makes'
    ],
    answer: [1],
    rationale: 'Simplified language, single-step directions, patience, and visual cues match reduced processing capacity. Open-ended complex questions overwhelm, rapid speech reduces comprehension, and constant correction produces frustration and agitation.',
    strategy: 'Dementia communication: short sentences, one step, wait, use gestures, do not correct.' },

  { id: 'PSY-083', cat: 'psy', sub: 'Eating Disorders', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a client with anorexia nervosa during mealtimes. Which intervention is most appropriate?',
    options: [
      'Allow the client to eat alone to reduce anxiety',
      'Provide supervision during and for at least an hour after meals, keep mealtimes structured and time-limited, and avoid arguing about food',
      'Praise the client extensively for each bite',
      'Permit the client to choose whether to eat at all'
    ],
    answer: [1],
    rationale: 'Supervision during and after meals prevents food disposal and purging, and structured time-limited meals with no negotiation about food reduce the power struggle. Eating alone permits concealment, excessive praise makes eating a performance for the nurse, and unlimited choice permits life-threatening restriction.',
    strategy: 'Eating disorder meal management: supervise during and after, structure the time, do not bargain over food.' },

  { id: 'PSY-084', cat: 'psy', sub: 'Crisis Intervention', type: 'mc', difficulty: 2,
    stem: 'A client presents after a natural disaster with insomnia, hypervigilance, and intrusive memories that began 5 days ago. What is the most likely condition?',
    options: ['Post-traumatic stress disorder', 'Acute stress disorder', 'Generalized anxiety disorder', 'Panic disorder'],
    answer: [1],
    rationale: 'Acute stress disorder describes trauma-related symptoms occurring between 3 days and 1 month after the event. Post-traumatic stress disorder is diagnosed only when symptoms persist beyond a month. Generalized anxiety and panic disorder are not defined by a traumatic precipitant.',
    strategy: 'Under 1 month equals acute stress disorder. Over 1 month equals PTSD. The symptoms can look identical.' },

  { id: 'PSY-085', cat: 'psy', sub: 'Abuse', type: 'mc', difficulty: 2,
    stem: 'A nurse is caring for a child whose parent insists on staying and answering every question. The child appears fearful and avoids eye contact with the parent. What should the nurse do?',
    options: [
      'Proceed with the parent present to avoid conflict',
      'Find a developmentally appropriate reason to interview the child separately and assess for abuse',
      'Directly accuse the parent',
      'Document the observation only'
    ],
    answer: [1],
    rationale: 'A separate interview is necessary to assess a child who may be fearful of the accompanying adult, and clinicians routinely create ordinary-seeming reasons to separate them. Proceeding with the parent present prevents disclosure, accusation endangers the child, and documentation alone does not protect.',
    strategy: 'Separate the child from the accompanying adult, using a routine-sounding reason rather than announcing a concern.' },

  { id: 'PSY-086', cat: 'psy', sub: 'Coping', type: 'mc', difficulty: 2,
    stem: 'A nurse recognizes signs of burnout in themselves including emotional exhaustion and detachment from clients. What is the most appropriate action?',
    options: [
      'Work extra shifts to prove commitment',
      'Acknowledge the symptoms, use available support such as employee assistance or peer support, and address workload and self-care',
      'Ignore the symptoms until they pass',
      'Immediately resign from nursing'
    ],
    answer: [1],
    rationale: 'Burnout impairs clinical judgment and client safety, so early recognition and use of formal supports, plus attention to workload and recovery, is the professional response. Increasing hours accelerates burnout, ignoring it leads to compassion fatigue and errors, and abrupt resignation forgoes reversible remedies.',
    strategy: 'Burnout is an occupational condition with real remedies. Name it early and use the supports that exist.' },

  { id: 'PSY-087', cat: 'psy', sub: 'Schizophrenia', type: 'mc', difficulty: 2,
    stem: 'A client with schizophrenia has been stable on a long-acting injectable antipsychotic. The client says, "I feel fine now, so I do not need the shot anymore." What is the nurse\'s best response?',
    options: [
      '"You are right, you can stop if you feel well."',
      '"Feeling well is a sign the medication is working. Stopping it usually brings symptoms back, often worse. Let\'s talk about what concerns you have about continuing."',
      '"You will end up back in the hospital if you stop."',
      '"That is a decision for your doctor alone."'
    ],
    answer: [1],
    rationale: 'Attributing wellness to the medication, explaining the relapse risk, and exploring the client\'s actual objection, which is often side effects, cost, or stigma, is most likely to preserve adherence. Agreeing invites relapse, threats damage the alliance, and deferring entirely abandons the teaching role.',
    strategy: '"I feel fine so I do not need it" is the most common path to relapse. Reframe wellness as evidence the drug works, then find the real objection.' },

  { id: 'PSY-088', cat: 'psy', sub: 'End of Life', type: 'mc', difficulty: 2,
    stem: 'A client with advanced illness says, "I want to stop dialysis." The client is alert and understands the consequences. What should the nurse do?',
    options: [
      'Attempt to persuade the client to continue',
      'Explore the client\'s reasoning and goals, confirm understanding of the consequences, notify the provider, and support the decision with palliative care involvement',
      'Notify the family so they can override the decision',
      'Continue dialysis until the family agrees'
    ],
    answer: [1],
    rationale: 'A competent client may discontinue any life-sustaining treatment, including dialysis. The nurse explores the reasoning, ensures the decision is informed, notifies the team, and brings in palliative care to manage the dying process well. Persuasion, family override, and continuing treatment against the client\'s wishes all violate autonomy.',
    strategy: 'Withdrawing a treatment a competent client refuses is neither suicide nor abandonment. Explore, confirm, support.' },

  { id: 'PSY-089', cat: 'psy', sub: 'Therapeutic Environment', type: 'mc', difficulty: 2,
    stem: 'A client on a psychiatric unit asks the nurse to hold their cell phone charger cord for safekeeping. What should the nurse consider?',
    options: [
      'The request is routine and the cord can be returned on request',
      'Cords are potential ligature risks, so the item is secured per unit policy and not returned to the client\'s room',
      'The client should keep the cord in their room',
      'The item should be given to another client'
    ],
    answer: [1],
    rationale: 'Cords, belts, shoelaces, and similar items are ligature risks on a psychiatric unit and are secured according to policy regardless of who requests them. Returning the item, permitting it in the room, or transferring it to another client all create hazards.',
    strategy: 'On a psychiatric unit, think ligature and sharp. Cords, belts, laces, glass, and mirrors all get secured.' },

  { id: 'PSY-090', cat: 'psy', sub: 'Depression', type: 'mc', difficulty: 2,
    stem: 'A nurse is assessing a client for depression. Which question best screens for anhedonia?',
    options: [
      '"Have you been sleeping well?"',
      '"Over the past 2 weeks, how often have you had little interest or pleasure in doing things you usually enjoy?"',
      '"Do you feel tired?"',
      '"Has your appetite changed?"'
    ],
    answer: [1],
    rationale: 'Anhedonia is the loss of interest or pleasure, and it is one of the two core screening items for major depression along with depressed mood. Sleep, energy, and appetite are associated neurovegetative symptoms rather than the defining feature.',
    strategy: 'The two-question depression screen: depressed mood and loss of interest or pleasure over the past 2 weeks.' }
]
