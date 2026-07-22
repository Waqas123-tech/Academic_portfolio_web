import React, { useState } from 'react';

function Projects() {
  const [expandedId, setExpandedId] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'Bridging the Translation Gap: The CLINIC-DL Framework (Stroke Rehabilitation)',
      status: 'Completed & Submitted to IEEE Access',
      category: 'Completed',
      description: 'In this groundbreaking systematic review, I identified a critical void in stroke rehabilitation AI: the "Empty Quadrant 2," where high-tech models fail to meet clinical validity standards. To solve this, I developed the CLINIC-DL Paradigm, a rigorous framework that mandates real-time latency, explainability, and physiological trust for any Deep Learning model deployed in Brain-Computer Interfaces (BCI). This work redefines how we evaluate AI, moving the field from "lab accuracy" to "hospital utility."'
    },
    {
      id: 2,
      title: 'Mapping Fairness in ASD-AI: A Global Systematic Review',
      status: 'Under Review at Artificial Intelligence Review (IF 14.9) | Indexed in Europe PMC',
      category: 'Completed',
      description: 'Leading a comprehensive analysis of over 45 global studies, I exposed a startling reality: while Multimodal Fusion boosts accuracy by up to 25%, <10% of studies audit for fairness. I introduced the Dual-Layer Quality Assessment (DLQA) methodology to measure bias across gender and race. This project is now a key reference for researchers worldwide, pushing the community to prioritize equity alongside performance in Autism diagnostics.'
    },
    {
      id: 3,
      title: 'Few-Shot Seizure Prediction Architecture (Spatial CNN)',
      status: 'Completed Prototype',
      category: 'Completed',
      description: 'Addressing the scarcity of pediatric seizure data, I designed and implemented a novel Spatial CNN model capable of learning complex seizure patterns from limited datasets. By saving and analyzing evaluation results in structured CSV formats, I demonstrated that deep learning could achieve robust prediction rates even with small sample sizes, laying the groundwork for my current Meta-Learning research.'
    },
    {
      id: 4,
      title: 'Project Phoenix: Few-Shot Meta-Learning for Pediatric Epilepsy',
      status: 'Lead Researcher | Collaboration with Dr. Fangli Ying',
      category: 'Current',
      description: 'I am currently leading a pioneering project to deploy Model-Agnostic Meta-Learning (MAML) for early seizure prediction in children. Unlike traditional models that need thousands of hours of data, this system learns to adapt to a new patient\'s brain patterns from just a few examples. We are integrating Cross-Modal Attention to align EEG signals with anatomical MRI priors, aiming to create a "universal learner" that works effectively in resource-constrained clinics where data is scarce but the need is urgent.'
    },
    {
      id: 5,
      title: 'The Bias-Audited Diagnostic Pipeline',
      status: 'Ongoing Development',
      category: 'Current',
      description: 'Building on my DLQA framework, I am developing an end-to-end software pipeline that automatically audits AI models for demographic bias before deployment. This tool integrates fairness metrics directly into the training loop, ensuring that every diagnostic output is not only accurate but also equitable for underrepresented groups, including women and diverse racial populations. This project aims to turn "ethical AI" from a buzzword into a standard engineering practice.'
    },
    {
      id: 6,
      title: 'Explainable Neuro-Developmental Tools (XAI-ND)',
      status: 'In Progress',
      category: 'Current',
      description: 'I am transforming "black-box" diagnostic models into transparent clinical assistants. By implementing advanced visualization techniques, this project allows doctors to see exactly which brain regions and signal frequencies triggered a diagnosis of ASD or epilepsy. The goal is to build trust between clinicians and AI, ensuring that technology serves as a clear, interpretable partner in saving children\'s brain health.'
    }
  ];

  const completedProjects = projects.filter(p => p.category === 'Completed');
  const currentProjects = projects.filter(p => p.category === 'Current');

  return (
    <section id="projects" className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <div className="section-heading text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-600">Projects</p>
          <h2 className="mt-4 font-semibold text-slate-950 dark:text-slate-100">Projects & Research Portfolio</h2>
          <div className="section-underline"></div>
        </div>

        <div className="space-y-14">
          <div>
            <div className="mb-6 text-center">
              <h3 className="text-2xl font-semibold text-teal-600">Completed Work</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">Research that established strong foundations for clinically trustworthy AI.</p>
            </div>
            <div className="space-y-5">
              {completedProjects.map((project) => (
                <div key={project.id} className="rounded-[30px] border border-slate-200 bg-white/90 p-6 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-950/70">
                  <button
                    onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                    className="flex w-full items-start justify-between gap-4 text-left"
                  >
                    <span className="text-lg font-semibold text-slate-900 dark:text-slate-100">{project.id}. {project.title}</span>
                    <span className="text-2xl font-bold text-slate-400">{expandedId === project.id ? '−' : '+'}</span>
                  </button>
                  {expandedId === project.id && (
                    <div className="mt-5 border-t border-slate-200 pt-5 text-slate-700 dark:border-slate-700 dark:text-slate-300">
                      <p className="font-medium">Status: {project.status}</p>
                      <p className="mt-3 leading-7">{project.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6 text-center">
              <h3 className="text-2xl font-semibold text-teal-600">Current Work</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">Building the next generation of pediatric neuro-AI with real-world deployment in mind.</p>
            </div>
            <div className="space-y-5">
              {currentProjects.map((project) => (
                <div key={project.id} className="rounded-[30px] border border-slate-200 bg-white/90 p-6 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl dark:border-slate-700 dark:bg-slate-950/70">
                  <button
                    onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
                    className="flex w-full items-start justify-between gap-4 text-left"
                  >
                    <span className="text-lg font-semibold text-slate-900 dark:text-slate-100">{project.id}. {project.title}</span>
                    <span className="text-2xl font-bold text-slate-400">{expandedId === project.id ? '−' : '+'}</span>
                  </button>
                  {expandedId === project.id && (
                    <div className="mt-5 border-t border-slate-200 pt-5 text-slate-700 dark:border-slate-700 dark:text-slate-300">
                      <p className="font-medium">Status: {project.status}</p>
                      <p className="mt-3 leading-7">{project.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
