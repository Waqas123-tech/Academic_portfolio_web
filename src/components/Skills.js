import React from 'react';

function Skills() {
  const skills = [
    { name: 'Python & PyTorch Mastery', desc: 'Building complex, custom deep learning architectures from scratch to solve unique neurological challenges.' },
    { name: 'Multimodal Data Fusion', desc: 'Aligning and synchronizing diverse data streams (EEG, fMRI, clinical records) to create holistic patient profiles.' },
    { name: 'Few-Shot Meta-Learning (MAML)', desc: 'Training AI models to learn rapidly from scarce pediatric data, overcoming the "big data" bottleneck.' },
    { name: 'Explainable AI (XAI) Implementation', desc: 'Deploying techniques like Grad-CAM and Attention Maps to make model decisions transparent and clinically actionable.' },
    { name: 'Algorithmic Fairness Auditing', desc: 'Rigorously testing models for demographic bias to ensure equitable performance across gender, race, and age groups.' },
    { name: 'Cross-Modal Attention Mechanisms', desc: 'Designing neural networks that dynamically weigh and align anatomical priors with functional brain signals.' },
    { name: 'Systematic Review Methodology', desc: 'Executing rigorous global literature syntheses using PRISMA and QUADAS-2 standards to define state-of-the-art benchmarks.' },
    { name: 'Latency Optimization', desc: 'Refining inference pipelines to achieve real-time processing (<300ms) for critical clinical deployment.' },
    { name: 'Statistical Analysis & Visualization', desc: 'Transforming complex evaluation metrics into clear, compelling insights using Pandas, NumPy, and Matplotlib.' },
    { name: 'LaTeX & Scientific Writing', desc: 'Crafting high-impact, publication-ready manuscripts for top-tier Q1 journals with precision and clarity.' }
  ];

  return (
    <div style={{ padding: '60px' }}>
      <h2>My Technical Arsenal</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px' }}>
        {skills.map((skill, index) => (
          <div key={index} style={{ 
            padding: '20px', 
            border: '2px solid #e5e7eb',
            borderRadius: '8px',
            background: '#f9fafb',
            transition: 'all 0.3s ease'
          }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#2563eb'} onMouseLeave={(e) => e.currentTarget.style.borderColor = '#e5e7eb'}>
            <h4 style={{ margin: '0 0 10px 0', color: '#2563eb' }}>{skill.name}</h4>
            <p style={{ margin: '0', fontSize: '14px', lineHeight: '1.6', color: '#555' }}>{skill.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;