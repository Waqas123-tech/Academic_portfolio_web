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
    <div id="projects" style={{ padding: '60px' }}>
      <h2>Projects & Research Portfolio</h2>

      <h3 style={{ marginTop: '40px', marginBottom: '20px', color: '#2563eb' }}>Completed Work: The Foundations of Trust</h3>
      {completedProjects.map((project) => (
        <div key={project.id} style={{ marginBottom: '15px', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '15px', background: '#f9fafb' }}>
          <button
            onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
            style={{
              width: '100%',
              background: 'transparent',
              border: 'none',
              textAlign: 'left',
              cursor: 'pointer',
              fontSize: '15px',
              fontWeight: 'bold',
              color: '#000',
              padding: '0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start'
            }}
          >
            <span>{project.id}. {project.title}</span>
            <span style={{ fontSize: '20px', marginLeft: '10px' }}>{expandedId === project.id ? '−' : '+'}</span>
          </button>
          
          {expandedId === project.id && (
            <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '1px solid #e5e7eb', lineHeight: '1.7' }}>
              <p style={{ margin: '0 0 10px 0', fontSize: '14px' }}><strong>Status:</strong> {project.status}</p>
              <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.6' }}>{project.description}</p>
            </div>
          )}
        </div>
      ))}

      <h3 style={{ marginTop: '40px', marginBottom: '20px', color: '#2563eb' }}>Current Work: The Future of Pediatric Neuro-AI</h3>
      {currentProjects.map((project) => (
        <div key={project.id} style={{ marginBottom: '15px', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '15px', background: '#f9fafb' }}>
          <button
            onClick={() => setExpandedId(expandedId === project.id ? null : project.id)}
            style={{
              width: '100%',
              background: 'transparent',
              border: 'none',
              textAlign: 'left',
              cursor: 'pointer',
              fontSize: '15px',
              fontWeight: 'bold',
              color: '#000',
              padding: '0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start'
            }}
          >
            <span>{project.id}. {project.title}</span>
            <span style={{ fontSize: '20px', marginLeft: '10px' }}>{expandedId === project.id ? '−' : '+'}</span>
          </button>
          
          {expandedId === project.id && (
            <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '1px solid #e5e7eb', lineHeight: '1.7' }}>
              <p style={{ margin: '0 0 10px 0', fontSize: '14px' }}><strong>Status:</strong> {project.status}</p>
              <p style={{ margin: '0', fontSize: '15px', lineHeight: '1.6' }}>{project.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Projects;