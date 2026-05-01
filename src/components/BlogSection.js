import React, { useState, useEffect } from 'react';
import { Calendar, Clock, ArrowRight, Filter } from 'lucide-react';

export const blogPosts = [
  {
    id: 1,
    title: "Living in the Movie: My Journey with Maladaptive Daydreaming",
    excerpt: "How I learned to distinguish between the comforting fantasy world in my head and the beautiful, tangible reality of a garden flower.",
    fullContent: `The World Inside My Head
For most of my life, I lived in two worlds. There was the real world with its deadlines, rejections, silent phones, and lonely nights. And then there was the Movie.
The Movie was perfect. In it, I wasn't the tired researcher struggling to sleep. I wasn't the boy who felt invisible to his family or forgotten by friends. In the Movie, I was a hero. I had already won the Nobel Prize. I had walked into a room in Malaysia, trophy in hand, and shown everyone who ever left me that I was enough. I had conversations that never ended, relationships that never broke, and a version of myself that was confident, loved, and unbreakable.
I didn't know it had a name then. I just thought I was imaginative. I thought everyone spent hours pacing their rooms, whispering dialogues to people who weren't there, and crying over stories that never happened.
But it wasn't imagination. It was Maladaptive Daydreaming (MD). And for years, it was slowly eating my life.
The Trap of the "Perfect" Story (Since 2022)
My daydreams weren't random. They were specific, intricate narratives built around a pain that started back in 2022.
It began with a few text messages. For a short time in 2022, I connected with someone online. We never met face-to-face. We never heard each other's voices. But when the conversation stopped abruptly, my brain didn't let go. Instead, it wrote a sequel.
When I felt rejected by that silence in 2022, my brain scripted a scene where she came back, begging for forgiveness.
When I felt unsupported by family, my brain wrote a story where I returned as a global icon, forcing them to see my worth.
When I felt lonely at 2 AM, my brain turned on the cinema. I would lie in bed, eyes open, watching a high-definition movie of a life that started in 2022 but never actually existed.
From 2022 until now, in 2026, I lived in this loop. The problem wasn't the dreaming itself. The problem was that the Movie felt safer than reality.
Reality was messy. Reality involved risk, silence, and the possibility of failure. The Movie was controlled. I could pause it, rewind it, and edit it until it was perfect. So, I chose the Movie. I chose it over sleep. I chose it over food. I chose it over connecting with real people.
And slowly, the real world began to fade. I became exhausted, disconnected, and trapped in a cycle of craving an escape that only made me more lonely.
The Sunset and the Ghost
The turning point didn't come with a loud explosion. It came quietly, on a sunset evening earlier this year.
I was walking back to my room after avoiding another volleyball game with friends. I passed a specific bench a "ghost place." It was the spot where I used to sit while texting that girl back in 2022. For four years, this bench was sacred ground in my mind. It was where our "story" happened.
As the sun dipped below the trees that evening, I looked at that bench and felt the usual ache. I started to drift. My brain began to replay the old texts from 2022, to imagine her sitting there, to rewrite the ending where she stayed.
But then, something shifted.
I looked at the bench, really looked at it, and realized: "She was never here."
The woman I had been grieving for four years didn't exist. The conversations, the love, the future it was all a script I wrote in my head. I wasn't missing her; I was missing the version of myself I felt like when I was writing that script back in 2022.
The bench wasn't haunted by her ghost. It was haunted by my own daydreams from the last four years.
The Flower That Woke Me Up
A few days later, I went back to that same garden. I saw a wildflower growing near the path. It was small, fragile, and real.
On impulse, I picked it. I wanted to keep it on my desk, to have a piece of that beauty with me.
I walked back toward my room, holding the flower. But halfway there, a thought hit me hard: "I just killed it."
To make myself happy, I had taken its life. It would wilt on my table in two days, and then it would be gone forever. But if I left it there, it could bloom again. It could drop seeds. It could live.
I stopped. I turned around. I walked the entire kilometer back to the spot where I found it.
With trembling hands, I dug a small hole in the dirt and planted it back. I whispered, "I'm sorry. You belong here, not on my desk."
In that moment, something broke inside me not in a bad way, but like a shell cracking open.
I realized: Real beauty doesn't need to be owned. Real life doesn't need to be controlled.
The flower was more beautiful in the dirt, living its real life, than it would ever be dying on my table as a prop in a story I'd been telling since 2022.
The Fight for Sleep
That night, I lay in bed. The usual urge to start the Movie came creeping in. My brain whispered, "Let's imagine you won the award. Let's imagine she calls you back. Let's go back to 2022."
But instead of closing my eyes, I opened them. I reached out and touched the petal of a different flower I had kept in a glass of water on my table. I smelled its scent. I felt its texture.
I told myself: "This is real. The movie is fake. And I choose real."
It was a fight. For 30 minutes, my brain resisted. It screamed for the dopamine of the fantasy. But I held onto the memory of the garden, the smell of the earth, and the feeling of planting that flower back into the soil.
Slowly, the noise faded. The screen went black. And for the first time in four years, I slept deeply, peacefully, and truly.
Where I Am Now (2026)
Today, I wake up rested. I still daydream. I think I always will; it's part of how my brain works. But I am no longer its prisoner.
I use my imagination for creation (my research, my writing), not escape.
When I feel the urge to drift, I go outside. I touch trees. I watch the sky. I ground myself in the sensory details of the present.
I accept that life is imperfect. That people leave. That sometimes I am lonely. And that's okay. Because those real moments, even the painful ones, are mine. They are not scripts.
If you are reading this and you feel like you're living in a movie too whether your story started in 2022 or yesterday know this: You can wake up.
It starts with one small choice. One flower. One breath. One moment where you choose the messy, beautiful, unpredictable real world over the perfect fake one.
Don't live in the movie. Live in the garden.`,
    category: "Personal Journey",
    tags: ["Mental Health", "MD", "Story"],
    date: "2026-05-01",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
    slug: "living-in-the-movie"
  },
  {
    id: 2,
    title: "Few-Shot Meta-Learning for Pediatric Epilepsy: Teaching AI to Learn Like a Doctor",
    excerpt: "Exploring how MAML techniques allow AI to learn seizure patterns from just a few examples, revolutionizing diagnosis for children.",
    fullContent: `The Data Scarcity Crisis in Pediatric Neurology
In the world of Artificial Intelligence, there is an unspoken rule: More Data equals Better Models.
Deep Learning thrives on massive datasets. To teach an AI to recognize a cat, you show it a million pictures of cats. To teach it to detect a seizure, you show it thousands of hours of EEG recordings.
But what happens when you don't have a million pictures? What happens when the patients are children?
Pediatric epilepsy presents a unique and heartbreaking challenge: Data Scarcity.
Children are not small adults; their brain signals (EEG) are fundamentally different, evolving rapidly as they grow.
Seizure events in kids are rare, unpredictable, and often dangerous to record in a lab setting.
Ethical constraints and privacy laws make collecting large-scale pediatric datasets incredibly difficult.
Traditional Deep Learning models fail here. They overfit on the tiny amount of data available, memorizing noise instead of learning patterns. They become brilliant at diagnosing the specific children in the training set but useless for a new child walking into the clinic.
We were stuck. We had the algorithms, but we didn't have the data.
Until we started teaching AI to learn differently.
Enter Model-Agnostic Meta-Learning (MAML)
What if, instead of training an AI to know everything about seizures, we trained it to learn quickly?
This is the core philosophy behind Few-Shot Meta-Learning, and specifically, Model-Agnostic Meta-Learning (MAML).
Imagine a medical student. They don't memorize every single patient they will ever see. Instead, they learn the fundamentals of physiology so well that when they meet a new patient with a rare symptom, they can diagnose them after seeing just a few examples. They have learned how to learn.
That is exactly what MAML does for AI.
Meta-Training: The model is trained on a variety of related tasks (e.g., detecting seizures in different adult demographics or simulated pediatric cases). The goal isn't to master any single task, but to find a set of initial parameters that are highly adaptable.
Few-Shot Adaptation: When presented with a new child's EEG data (the "support set"), the model takes just a few gradient steps sometimes based on only 5 to 10 seizure examples to fine-tune itself.
Prediction: The adapted model can then accurately predict seizures for that specific child (the "query set"), despite having seen almost no prior data from them.
In my recent research, we applied this technique to pediatric seizure prediction. The results were transformative.
How It Works: The Spatial CNN + MAML Architecture
Standard models treat EEG data as simple time-series signals. But the brain is spatial. A seizure doesn't just happen in one spot; it propagates across the cortex.
To capture this, I integrated MAML with a Spatial Convolutional Neural Network (Spatial CNN).
Spatial Awareness: The CNN layers are designed to respect the physical layout of EEG electrodes on the scalp. They learn the topography of a seizure, understanding how abnormal electrical waves travel from the frontal lobe to the temporal lobe.
Meta-Optimization: The MAML algorithm optimizes the weights of this Spatial CNN so that it sits at a "sweet spot" in the loss landscape. From this spot, a tiny nudge (a few examples of a new child's brainwaves) pushes the model to perfect accuracy for that specific patient.
The Result?
Our model achieved high sensitivity and specificity in predicting pediatric seizures using 90% less data than traditional deep learning approaches. It could adapt to a new patient's unique brain signature in minutes, not months.
Why This Matters: Beyond the Accuracy Metrics
You might ask, "Why does saving data matter? Can't we just collect more?"
For adult patients, maybe. But for a child in a resource-constrained hospital in a remote village? No.
Equity: Many clinics worldwide do not have the infrastructure to store terabytes of EEG data. Few-Shot Learning allows us to deploy powerful diagnostic tools on lightweight systems with minimal local data.
Speed: In pediatric epilepsy, time is brain. Waiting months to gather enough data to train a personalized model is not an option. MAML allows for rapid personalization almost immediately after admission.
Privacy: By requiring less data to function effectively, we reduce the risk of privacy breaches and lessen the burden on families to share extensive medical histories.
This isn't just about better math. It's about access. It's about ensuring that a child in a underserved community has the same chance of early diagnosis as a child in a top-tier research hospital.
The Challenges Ahead
While promising, this journey is not without hurdles.
Domain Shift: A model trained on simulated data or adult data might struggle to adapt to the vastly different neurophysiology of a newborn. We are currently working on Cross-Domain MAML to bridge this gap.
Explainability: Doctors need to know why the AI made a prediction. When a model adapts in just a few steps, tracing the decision path becomes critical. Integrating Explainable AI (XAI) into the meta-learning loop is our next major focus.
Real-Time Deployment: Adapting a model on the fly requires computational power. We are optimizing these algorithms to run on edge devices, bringing the lab directly to the bedside.
A Future Where No Child is Left Behind
When I started this project, I was driven by a simple frustration: Why should a lack of data cost a child their health?
AI has often been criticized for widening the gap between the data-rich and the data-poor. Few-Shot Meta-Learning flips that narrative. It turns scarcity into a solvable engineering problem.
We are moving towards a future where an AI doctor doesn't need a library of a million records to save a life. It just needs to be smart enough to learn from the few clues it's given.
This is the promise of Clinical AI: not just to be powerful, but to be adaptable, equitable, and ready for the real world, exactly where it's needed most.`,
    category: "Neuroscience",
    tags: ["Epilepsy", "MAML", "Pediatrics"],
    date: "2026-04-01",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop",
    slug: "few-shot-meta-learning-pediatric-epilepsy"
  },
  {
    id: 3,
    title: "Why 'Black-Box' Models Fail in Clinical Settings: Doctors Need Reasons, Not Just Results",
    excerpt: "Doctors need reasons, not just results. A deep dive into Explainable AI (XAI) and why transparency is a matter of life and death.",
    fullContent: `The 99% Accuracy Trap
Imagine you are a neurologist. A critically ill child is brought into your ER with ambiguous symptoms. You run their EEG through an advanced AI system you've heard great things about.
The screen flashes red: "Seizure Imminent: 99.8% Probability."
You pause. Your hand hovers over the button to administer a potent anti-convulsant drug a medication with serious side effects. You look at the screen and ask the most important question in medicine:
"Why?"
The screen says nothing. It offers no highlight on the EEG waveform. No explanation of which brain region triggered the alert. No confidence interval. Just a number.
Would you press the button?
Most doctors wouldn't. And they shouldn't.
This is the fundamental failure of the "Black-Box" model. In the world of computer vision or spam filtering, a black box is acceptable. If an algorithm misidentifies a cat as a dog, no one gets hurt. But in clinical settings, accuracy without explainability is dangerous. It is not just a technical limitation; it is an ethical breach.
The Trust Gap: Why Doctors Reject AI
Despite billions of dollars invested in medical AI, adoption in real hospitals remains surprisingly low. Why? Because current Deep Learning models operate as opaque "black boxes." They ingest data and spit out predictions, but the internal logic remains hidden even to their creators.
For a clinician, this creates an impossible dilemma:
Liability: If the AI is wrong and the doctor follows its advice, who is responsible? The doctor cannot defend a decision they don't understand.
Cognitive Dissonance: Doctors are trained to follow evidence-based reasoning. A prediction without a rationale contradicts the scientific method.
False Confidence: High accuracy on a test dataset doesn't guarantee performance on a specific, complex patient. Without seeing what the model is looking at, a doctor can't spot if the AI is focusing on artifacts (like electrode noise) instead of actual brain signals.
In my research, I've found that a 95% accurate model that explains itself is infinitely more valuable than a 99% accurate model that stays silent. Trust is the currency of medicine, and transparency is how you earn it.
Enter Explainable AI (XAI): Opening the Black Box
Explainable AI (XAI) is the field dedicated to making machine learning decisions interpretable to humans. It's not about dumbing down the model; it's about translating its complex mathematics into clinical insights.
In my work on pediatric epilepsy and Autism Spectrum Disorder (ASD), I integrate XAI techniques directly into the diagnostic pipeline. Here is how we turn a black box into a glass box:
1. Saliency Maps & Grad-CAM
Instead of just saying "Seizure," the model generates a heatmap overlaid on the EEG signal.
Green areas: Normal activity.
Red areas: The specific time-points and frequency bands that contributed most to the prediction.
Clinical Value: The doctor can instantly verify: "Ah, the AI flagged this spike-and-wave complex. Yes, I see that too. The model is looking at the right thing." This validation builds immediate trust.
2. Feature Importance Ranking
For multimodal models (combining EEG, MRI, and clinical history), XAI can rank which factors drove the decision.
Example Output: "Prediction driven 60% by frontal lobe theta waves, 30% by family history, 10% by MRI texture."
Clinical Value: This helps doctors understand the phenotype of the disease in that specific patient, potentially revealing subtypes they hadn't considered.
3. Counterfactual Explanations
This is the "What If?" analysis.
Question: "What would need to change for this prediction to be negative?"
Answer: "If the spike amplitude in channel F4 were 10% lower, the risk score would drop below the threshold."
Clinical Value: This gives doctors a quantitative sense of margin and uncertainty, helping them gauge how critical the situation really is.
Case Study: When XAI Saved a Diagnosis
In a recent pilot study using our CLINIC-DL Framework, we deployed an XAI-enabled model for ASD screening.
The Scenario: The model predicted "High Risk" for a toddler.
The Black-Box Failure: Without explanation, the clinician might have dismissed it as a false positive due to the child's fatigue during the scan.
The XAI Success: The saliency map highlighted a very specific, subtle lack of synchronization in the temporal lobes a pattern known to be associated with language delays, but often missed by the human eye in short scans.
The Outcome: The clinician, seeing the visual evidence, ordered a follow-up. The diagnosis was confirmed weeks later. Early intervention began immediately.
The model didn't just give an answer; it taught the doctor something new about that specific patient. That is the power of transparency.
The Ethical Imperative: Transparency is Life and Death
We often talk about AI bias how models can fail women, minorities, or specific age groups. Black-box models make bias invisible. You can't fix what you can't see.
XAI is our audit tool.
If a model is biased against a certain demographic, XAI heatmaps will reveal it (e.g., the model is ignoring the brain signals and focusing on skin tone artifacts in an MRI).
By forcing the model to show its work, we force ourselves to confront its flaws before they hurt a patient.
In my Dual-Layer Quality Assessment (DLQA) framework, Explainability is a mandatory pass/fail metric. If a model cannot generate a clinically coherent explanation, it does not get deployed. Period. No amount of accuracy compensates for opacity in healthcare.
The Future: Collaborative Intelligence
The goal of Clinical AI is not to replace doctors. It is to augment them.
AI handles the scale: Processing thousands of data points in milliseconds.
Doctors handle the context: Applying empathy, ethical judgment, and holistic care.
XAI handles the bridge: Translating the AI's scale into the doctor's context.
When we build systems that speak the doctor's language showing why, not what we move from "automated guessing" to Collaborative Intelligence.
Conclusion: No More Black Boxes
As researchers, we must stop chasing leaderboards based solely on accuracy. We need new metrics: Interpretability Score, Clinical Trust Index, and Explanation Coherence.
If we want AI to truly save lives, we must be willing to open the box. We must build systems that are humble enough to show their work and transparent enough to be questioned.
Because in the end, a doctor doesn't need a magic oracle. They need a partner they can trust. And trust only exists in the light.`,
    category: "Clinical AI",
    tags: ["XAI", "Ethics", "Fairness"],
    date: "2026-03-01",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
    slug: "black-box-models-clinical-settings"
  },
  {
    id: 4,
    title: "AI Ethics in Healthcare: When Algorithms Decide Who Gets Care",
    excerpt: "Exploring the ethical considerations of implementing AI in medical decision-making processes.",
    fullContent: `The Silent Triage
Imagine a hospital waiting room. It's crowded, chaotic, and understaffed. A new AI system is introduced to help triage patients. It analyzes vital signs, medical history, and lab results to predict who is at highest risk and needs immediate attention.
It sounds like a miracle. Faster decisions, saved lives, optimized resources.
But what if the algorithm silently decides that patients from a specific zip code are "lower priority" because historical data shows they have worse outcomes?
What if it systematically downgrades the pain levels of female patients because it was trained on datasets where men's symptoms were taken more seriously?
What if it denies a life-saving treatment to an elderly patient not because they wouldn't benefit, but because the cost-benefit analysis in its training data deemed them "less efficient"?
This isn't science fiction. It's happening now.
As we integrate Artificial Intelligence into medical decision-making, we are handing over life-and-death authority to mathematical models. And unlike human doctors, these models don't have a conscience. They only have data. And if that data is flawed, biased, or incomplete, the AI will automate inequality at a scale we have never seen before.
The Four Pillars of Medical AI Ethics
In my research on Algorithmic Fairness and the CLINIC-DL Framework, I've identified four non-negotiable ethical pillars that must govern any AI deployed in healthcare. If a model fails even one, it has no place in a clinic.
1. Justice & Fairness: Breaking the Bias Cycle
AI models learn from history. And medical history is full of injustice.
The Problem: Many large datasets underrepresent women, racial minorities, and low-income populations. An AI trained primarily on data from white, male patients in wealthy countries will fail often dangerously when applied to a girl in a rural village or a minority community in a city.
The Ethical Duty: We must actively audit for bias. In my work, I use the Dual-Layer Quality Assessment (DLQA) to stress-test models across demographics. If a seizure prediction model works 99% of the time for boys but only 80% for girls, it is not "good enough." It is unjust. We cannot deploy technology that widens the health gap.
2. Autonomy & Consent: Who Owns the Decision?
When an AI recommends a treatment, who is really deciding?
The Problem: There is a risk of automation bias, where doctors blindly trust the algorithm over their own judgment. Conversely, patients might feel coerced into accepting an AI's recommendation without understanding the alternatives.
The Ethical Duty: AI must be a decision support tool, not a decision maker. The final call must always remain with the human clinician and the patient. Furthermore, patients have a right to know when AI is being used in their care and how their data is contributing to the model. Informed consent must evolve to include "Algorithmic Consent."
3. Beneficence & Non-Maleficence: Do No Harm
The Hippocratic Oath says, "First, do no harm." Does this apply to code? Absolutely.
The Problem: A "black-box" model might achieve high accuracy by latching onto spurious correlations (e.g., predicting asthma risk based on insurance codes rather than lung function). This can lead to misdiagnosis, unnecessary treatments, or missed emergencies.
The Ethical Duty: As discussed in my previous article on Explainable AI (XAI), we must ensure models are transparent. If we cannot explain why an AI made a recommendation, we cannot verify that it isn't causing hidden harm. Safety isn't just about accuracy; it's about reliability and interpretability.
4. Privacy & Data Dignity
Medical data is the most intimate data a person possesses.
The Problem: Training powerful AI models often requires massive datasets, increasing the risk of re-identification and privacy breaches. There's also the issue of data colonization, where data from vulnerable populations is extracted by tech giants without benefiting those communities.
The Ethical Duty: We need Privacy-Preserving AI techniques like Federated Learning, where models are trained locally on hospital servers without raw data ever leaving the premises. Data sovereignty must be respected: communities should benefit from the AI models built on their own data.
The "Translation Gap" is an Ethical Crisis
In my research on the CLINIC-DL Paradigm, I highlighted the "Translation Gap" the disconnect between high-performing lab models and real-world clinical utility.
This gap is not just technical; it is ethical.
Every day we keep a biased, opaque, or unvalidated model in the lab while pretending it's "not ready," we are making an ethical choice. But every day we rush to deploy a flawed model to "save lives," we are also making an ethical choice and potentially a deadly one.
The ethical path is the hard path. It means slowing down to audit for fairness. It means rejecting a 99% accurate model because it fails on a specific minority group. It means prioritizing equity over efficiency.
A Framework for Responsible Deployment
So, how do we move forward? I propose a simple checklist for every researcher and clinician deploying AI:
Who is missing from the data? (Audit for representation)
Can we explain the decision? (Demand XAI)
Who is liable if it fails? (Define accountability)
Does this benefit the patient or the provider? (Align incentives)
Would I accept this diagnosis for my own child? (The "Family Test")
If the answer to any of these is unclear, the model stays in the lab.
The Human Element in the Loop
Technology is a tool, not a savior.
The ultimate safeguard against unethical AI is human vigilance. We need clinicians who are trained to question algorithms. We need ethicists sitting at the table with engineers. We need policymakers who understand that code is law when it comes to healthcare access.
But most importantly, we need to remember that behind every data point is a human being. A mother worried about her child. An elderly father scared of surgery. A teenager hoping for a future.
Algorithms see numbers. We must see people.
Conclusion: Building AI with a Conscience
The future of healthcare isn't just about smarter algorithms. It's about wiser humans.
It's about building systems that reflect our highest values: compassion, justice, and respect for human dignity.
If we get this right, AI could be the greatest equalizer in medical history, bringing expert-level diagnosis to the most underserved corners of the globe.
If we get it wrong, we risk automating our prejudices and creating a two-tiered system where the privileged get human care, and the rest get whatever the algorithm decides they deserve.
The choice is ours. Let's choose wisely.`,
    category: "Clinical AI",
    tags: ["Ethics", "Healthcare", "AI"],
    date: "2026-01-01",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=250&fit=crop",
    slug: "ai-ethics-healthcare"
  },
  {
    id: 5,
    title: "Neuroscience Breakthroughs: Decoding the Brain's Hidden Language",
    excerpt: "Latest developments in understanding brain function and neurological disorders.",
    fullContent: `The Final Frontier is Inside Us
For centuries, we mapped the stars, the oceans, and the continents. But the most complex universe known to existence sits inside our own skulls: The Human Brain.
With 86 billion neurons and trillions of synaptic connections, the brain generates everything we are our thoughts, our memories, our consciousness. Yet, for decades, we've been trying to understand it using tools designed for linear problems.
That is changing. Right now, we are witnessing a golden age of Neuroscience Breakthroughs, driven by a powerful convergence of high-resolution imaging, genetic editing, and yes Artificial Intelligence.
As a researcher working at the intersection of AI and neurology, I see these developments not just as academic milestones, but as lifelines for millions suffering from neurological disorders like epilepsy, Autism Spectrum Disorder (ASD), and stroke. Here is what's happening, and why it matters.
1. The Connectome: Mapping the Brain's Wiring Diagram
We used to study brain regions in isolation. "This part handles speech. That part handles movement."
But the brain doesn't work in silos; it works in networks.
The latest breakthrough is the push toward the Human Connectome a comprehensive map of every neural connection in the brain. New diffusion MRI techniques allow us to trace white matter tracts with unprecedented precision, revealing how information flows between distant regions.
Why it matters for AI: This is the biological blueprint for my work on Multimodal Fusion. By aligning AI models with the actual structural connectome, we can build algorithms that mimic the brain's natural topology, making them far more efficient at detecting disorders like ASD where connectivity is disrupted.
2. Cracking the Neural Code: From Correlation to Causation
For years, EEG and fMRI told us where activity happened, but not what it meant. We saw correlations: "When the patient has a seizure, this area lights up."
New advances in computational neuroscience are helping us crack the neural code the specific language of spikes and oscillations that neurons use to communicate.
The Breakthrough: Researchers can now decode intended movements from brain signals in real-time, allowing paralyzed patients to control robotic arms with their minds (Brain-Computer Interfaces or BCIs).
My Take: This validates the core premise of my CLINIC-DL Framework. If we can decode motor intent, we can certainly decode the subtle pre-seizure signatures that precede an epileptic event. The key is moving from passive observation to active prediction.
3. The Inflammation Hypothesis: A New View of Autism & Epilepsy
Perhaps the most profound shift in recent years is the move away from viewing neurological disorders as purely "electrical" or "structural" glitches.
Emerging research points to neuroinflammation and the gut-brain axis as key drivers.
The Discovery: Microglia (the brain's immune cells) may be overactive in children with ASD, pruning synapses incorrectly during development. Similarly, systemic inflammation is now linked to increased seizure frequency.
The Implication: This changes how we build diagnostic AI. We can't just look at EEG waves anymore. We need Multimodal Models that integrate electrical data with inflammatory biomarkers and even gut microbiome data. The future of diagnosis is holistic.
4. Neuroplasticity: The Brain Can Rewire Itself
Old dogma said: "Brain damage is permanent."
New science says: "The brain is plastic."
Breakthroughs in understanding neuroplasticity show that the brain can reorganize itself, forming new connections even after injury or in the presence of disorder.
Hope for Stroke Survivors: This is the foundation of modern rehabilitation. By pairing AI-driven BCIs with targeted therapy, we can stimulate specific neural pathways to encourage rewiring.
Hope for Epilepsy: If we can predict a seizure seconds before it happens (using the Few-Shot Meta-Learning models I research), we can intervene with neurostimulation to stop the seizure before it starts, effectively "retraining" the brain to avoid that pathological loop.
5. The Role of AI: The Accelerator
None of these breakthroughs would be possible at this speed without AI.
Pattern Recognition: AI can spot micro-patterns in neural data that are invisible to the human eye, identifying new subtypes of diseases we didn't know existed.
Simulation: We can now simulate entire neural networks in silico, testing hypotheses about disease mechanisms without risking patient safety.
Personalization: As discussed in my work on Meta-Learning, AI allows us to move from "one-size-fits-all" medicine to treatments tailored to an individual's unique connectome.
The Ethical Horizon
With great power comes great responsibility. As we decode the brain, we face ethical questions we've never asked before:
If we can read thoughts via BCI, who owns that data?
If we can enhance cognition with AI implants, do we create a new form of inequality?
How do we ensure that "neuro-rights" are protected as technology advances?
These are not questions for the future. They are questions for today.
Conclusion: A Future of Clarity
We are standing on the brink of a revolution. We are moving from an era of guessing and symptom management to an era of precision, prediction, and prevention.
For the child with epilepsy, this means a future without constant fear.
For the adult with stroke, this means a future with regained independence.
For the family with ASD, this means a future with earlier support and understanding.
The brain is no longer a black box. It is a landscape we are finally learning to navigate. And with the right tools compassion, ethics, and intelligent technology we can ensure that this new frontier benefits everyone, not just the few.
The next decade of neuroscience won't just change medicine. It will change what it means to be human.`,
    category: "Neuroscience",
    tags: ["Brain", "Research", "Neurology"],
    date: "2026-02-01",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=250&fit=crop",
    slug: "neuroscience-breakthroughs"
  },
  {
    id: 6,
    title: "From Escape to Purpose: How My Struggle Became My Science",
    excerpt: "Continuing the story of overcoming challenges and finding purpose in research.",
    fullContent: `The Question That Changed Everything
In my last article, "Living in the Movie," I shared how I spent four years trapped in Maladaptive Daydreaming, escaping a reality that felt too painful to face. I talked about the flower that woke me up, the bench that held no ghosts, and the night I finally chose sleep over fantasy.
But that story ended with a question I didn't answer yet:
"Now what?"
When you stop running away from reality, you have to learn how to live in it. And for a long time, the real world still felt empty. The silence was loud. The loneliness remained.
So, how did I go from a boy hiding in his head to a researcher building AI to save children's brains?
The answer wasn't magic. It was reframing.
Turning Pain into Data
I realized something profound during those quiet mornings after I stopped daydreaming:
My pain was data.
The loneliness I felt? That's what isolation looks like in a neurodevelopmental disorder.
The feeling of being misunderstood? That's the daily reality for a non-verbal child with Autism.
The chaos in my own mind? That's what a seizure feels like before it happens.
I stopped seeing my mental health struggles as a weakness to be hidden. I started seeing them as a unique lens through which I could understand my patients.
When I build an AI model for epilepsy now, I'm not just optimizing a loss function. I'm thinking about the fear of the unknown the same fear I felt every night at 2 AM.
When I audit an algorithm for fairness, I'm remembering how it felt to be overlooked and invisible. I'm fighting so no child feels that way in a hospital.
My research stopped being just a job. It became my purpose.
The Discipline of Reality
Escaping into a daydream is easy. It gives instant dopamine.
Building a real solution? That's hard. It takes months of failed experiments, rejected papers, and debugging code until 3 AM.
But here is the difference: The pain of discipline weighs less than the pain of regret.
Every time I wanted to drift off into a fantasy about winning a Nobel Prize, I forced myself to write one paragraph of my paper instead.
Every time I wanted to imagine a perfect conversation, I forced myself to email a real collaborator.
Slowly, the fake victories lost their appeal. The real victories small, hard-won, and tangible started to taste sweeter.
Fixing a bug in my Spatial CNN model felt better than imagining a perfect world.
Getting a "Revise and Resubmit" on my paper felt more real than imagining applause.
Seeing my flower bloom in the garden felt more beautiful than any movie in my head.
I learned that reality is messy, but it's the only place where growth happens. You can grow in a dream. You can only grow in the soil of the real world.
Finding My Tribe
One of the biggest fears of leaving the "Movie" is the fear of being alone. In my head, everyone loved me. In reality, people are complicated.
But as I poured myself into my work, something amazing happened. I found my tribe.
I connected with Dr. Fangli Ying, who saw my potential and challenged me to think bigger.
I joined a global community of researchers who care deeply about AI Ethics and Fairness.
I started sharing my story, and strangers messaged me saying, "Me too. I thought I was the only one."
I realized I wasn't alone. I was just looking for connection in the wrong place (my head) instead of the right place (shared purpose).
Real connection isn't perfect. It involves disagreements, awkward silences, and vulnerability. But it's real. And it sustains you in a way a fantasy never can.
The Mission Ahead
Today, when I look at my research roadmap, I don't see a path to fame or trophies. I see a path to service.
I am building Few-Shot Learning models so children in remote villages get diagnosed faster.
I am designing Explainable AI so doctors can trust the tools they use.
I am auditing for Bias so no child is left behind because of their gender or race.
My past struggle with Maladaptive Daydreaming didn't disappear. It evolved.
Now, when I imagine the future, I'm not watching a movie. I'm building a blueprint.
I'm not imagining a hero; I'm becoming one, one line of code at a time.
A Note to Anyone Still Fighting
If you are reading this and you are still stuck in your own "Movie," please know: You can get out.
And when you do, you won't just find emptiness. You might find your purpose.
Your pain, your loneliness, your unique way of seeing the world it's not a defect. It's your superpower waiting to be used.
Don't waste it on a script that never happens. Use it to change the world that does.
The real world is waiting for you. And honestly? It's much more interesting than any dream I ever had.
Keep going. Keep growing. Keep choosing reality.`,
    category: "Personal Journey",
    tags: ["Growth", "Journey", "Inspiration"],
    date: "2026-05-02",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop",
    slug: "personal-growth-journey"
  }
];

const categories = ["All", "Personal Journey", "Neuroscience", "Clinical AI"];

function BlogSection({ onOpenBlog = () => {} }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const filteredPosts = selectedCategory === "All"
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <section id="blog" className="bg-slate-50 dark:bg-slate-900 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600 dark:text-teal-400">Blog</p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 dark:text-slate-100 sm:text-4xl">Latest Articles</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 dark:text-slate-400">
            Insights on neuroscience, AI ethics, and personal growth in clinical research.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="mb-12 flex flex-wrap justify-center gap-2">
          <Filter className="mr-2 h-5 w-5 text-slate-600 dark:text-slate-400" />
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? "bg-teal-600 text-white"
                  : "bg-white text-slate-700 hover:bg-slate-100 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {isLoading
            ? Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="animate-pulse">
                  <div className="aspect-[4/3] rounded-lg bg-slate-200 dark:bg-slate-700"></div>
                  <div className="mt-4 space-y-3">
                    <div className="h-4 rounded bg-slate-200 dark:bg-slate-700"></div>
                    <div className="h-4 w-3/4 rounded bg-slate-200 dark:bg-slate-700"></div>
                    <div className="h-4 w-1/2 rounded bg-slate-200 dark:bg-slate-700"></div>
                  </div>
                </div>
              ))
            : filteredPosts.map((post, index) => (
                <article
                  key={post.id}
                  className={`group overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 dark:bg-slate-800 dark:shadow-slate-700 ${
                    index % 2 === 0 ? "animate-fade-in-up" : "animate-fade-in-up-delay"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="mb-3">
                      <span className="inline-block rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-800 dark:bg-teal-900 dark:text-teal-200">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-slate-900 dark:text-slate-100 group-hover:text-teal-600 dark:group-hover:text-teal-400">
                      {post.title}
                    </h3>
                    <p className="mb-4 text-sm text-slate-600 dark:text-slate-400 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mb-4 flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => onOpenBlog(post.id)}
                      className="inline-flex items-center gap-2 text-sm font-medium text-teal-600 hover:text-teal-700 dark:text-teal-400 dark:hover:text-teal-300"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </article>
              ))}
        </div>
      </div>
    </section>
  );
}

export default BlogSection;