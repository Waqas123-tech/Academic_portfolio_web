import React, { useState } from 'react';

function Research() {
  const [expandedId, setExpandedId] = useState(null);

  const researchAreas = [
    {
      id: 1,
      title: 'Multimodal Fusion & Cross-Modal Attention',
      challenge: 'The Challenge: The human brain is complex; relying on a single data source (like just EEG or just MRI) often misses the full picture, especially in children.',
      approach: 'My Approach: I develop advanced Cross-Modal Attention Mechanisms that align disparate data streams—syncing electrical brain signals (EEG) with anatomical structures (fMRI/MRI). By teaching AI to "listen" and "see" simultaneously, I create robust models that mimic the holistic way clinicians diagnose, ensuring no subtle sign of Autism or epilepsy goes unnoticed.'
    },
    {
      id: 2,
      title: 'Algorithmic Fairness & Bias Auditing',
      challenge: 'The Challenge: Most current AI models are trained on biased datasets, failing women, minorities, and underserved populations. A model that works for one demographic might be dangerous for another.',
      approach: 'My Approach: I don\'t just measure accuracy; I measure equity. Using my Dual-Layer Quality Assessment (DLQA) framework, I rigorously audit models for demographic bias before they ever reach a clinic. My goal is to ensure that an AI diagnostic tool performs with the same high precision for a girl in a remote village as it does for a boy in a top-tier hospital.'
    },
    {
      id: 3,
      title: 'Explainable Deep Learning (XAI) for Clinical Trust',
      challenge: 'The Challenge: Doctors cannot trust a "black box" that gives an answer without explaining why. Without explainability, AI remains a lab experiment, not a clinical tool.',
      approach: 'My Approach: I build Explainable AI (XAI) systems that provide patient-level reasoning. Instead of just saying "Seizure Risk: 90%," my models highlight exactly which brain patterns triggered the alert. This bridges the gap between computational output and clinical decision-making, empowering doctors to act with confidence.'
    },
    {
      id: 4,
      title: 'Few-Shot Meta-Learning for Data-Scarce Settings',
      challenge: 'The Challenge: Pediatric data is rare, expensive, and hard to collect. Traditional deep learning fails when there isn\'t enough data to train on.',
      approach: 'My Approach: I pioneer Few-Shot Meta-Learning (MAML) techniques that allow AI to learn from just a handful of examples. Inspired by the human ability to learn quickly, these models can adapt to new patients and rare conditions with minimal data, making advanced diagnostics accessible in resource-constrained healthcare settings where data is scarce but need is high.'
    },
    {
      id: 5,
      title: 'The CLINIC-DL Paradigm: Bridging the Translation Gap',
      challenge: 'The Challenge: There is a massive "Translation Gap" between high-accuracy research papers and real-world hospital deployment. Many models fail because they ignore latency, usability, and clinical workflow.',
      approach: 'My Approach: I introduced the CLINIC-DL Framework, a rigorous standard that evaluates AI not just on math, but on Clinical Validity. It ensures every model I build meets strict criteria for real-time performance, interpretability, and practical utility, guaranteeing that our research actually saves lives outside the lab.'
    }
  ];

  return (
    <div id="research" style={{ padding: '60px' }}>
      <h2>My Research Focus: Where Code Meets Compassion</h2>
      <p style={{ marginBottom: '30px', fontSize: '16px', lineHeight: '1.6' }}>
        My research is driven by a single question: How do we build AI that doesn't just calculate accurately, but understands fairly? I specialize in transforming complex, opaque algorithms into transparent, clinically actionable tools for neurodevelopmental disorders. Here is how I approach the future of Clinical AI:
      </p>

      {researchAreas.map((area) => (
        <div key={area.id} style={{ marginBottom: '20px', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '15px' }}>
          <button
            onClick={() => setExpandedId(expandedId === area.id ? null : area.id)}
            style={{
              width: '100%',
              background: 'transparent',
              border: 'none',
              textAlign: 'left',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#2563eb',
              padding: '0',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <span>{area.id}. {area.title}</span>
            <span style={{ fontSize: '20px' }}>{expandedId === area.id ? '−' : '+'}</span>
          </button>
          
          {expandedId === area.id && (
            <div style={{ marginTop: '15px', paddingTop: '15px', borderTop: '1px solid #e5e7eb', lineHeight: '1.7', fontSize: '15px' }}>
              <p style={{ marginBottom: '10px' }}><strong>{area.challenge}</strong></p>
              <p>{area.approach}</p>
            </div>
          )}
        </div>
      ))}

      <div style={{ marginTop: '30px', padding: '20px', background: '#f0f4ff', borderRadius: '8px', lineHeight: '1.7' }}>
        <h3 style={{ marginTop: '0' }}>Why This Matters</h3>
        <p>
          I do not research in a vacuum. Having lived with Maladaptive Daydreaming, I understand the fragility of the human mind and the danger of systems that don't account for individual differences. My work is a commitment to building technology that sees the whole person, not just the data point. I am building the tools I wished existed—fair, clear, and ready for the real world.
        </p>
      </div>
    </div>
  );
}

export default Research;