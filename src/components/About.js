import React, { useState } from 'react';

function About() {
  const [expanded, setExpanded] = useState(false);
  const [educationExpanded, setEducationExpanded] = useState(false);

  return (
    <section id="about" style={{ padding: '60px' }}>
      <h2>About Me</h2>
      
      <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>
        I am Waqas Ahmad, a Clinical AI researcher dedicated to building a future where technology serves the most vulnerable among us.
      </p>

      <button 
        onClick={() => setEducationExpanded(!educationExpanded)}
        style={{
          background: '#10b981',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: 'bold',
          marginBottom: '20px'
        }}
      >
        {educationExpanded ? 'Hide Education Background' : 'Show Education Background'}
      </button>

      {educationExpanded && (
        <div style={{ marginBottom: '30px' }}>
          <div style={{ marginBottom: '15px', padding: '15px', border: '1px solid #e5e7eb', borderRadius: '8px', backgroundColor: '#f9fafb' }}>
            <h4 style={{ margin: '0 0 5px 0', color: '#1f2937' }}>Matriculation</h4>
            <p style={{ margin: '0', fontSize: '14px', color: '#6b7280' }}>
              Iqra School and College Daggar Buner Sowari<br />
              Grade: A1 | Score: 1019/1100 (92.3%)<br />
              Graduated: 2020
            </p>
          </div>
          <div style={{ marginBottom: '15px', padding: '15px', border: '1px solid #e5e7eb', borderRadius: '8px', backgroundColor: '#f9fafb' }}>
            <h4 style={{ margin: '0 0 5px 0', color: '#1f2937' }}>Pre Medical</h4>
            <p style={{ margin: '0', fontSize: '14px', color: '#6b7280' }}>
              Government Degree College Daggar Buner Sowari<br />
              Grade: A1 | Percentage: 86.5%<br />
              Graduated: 2022
            </p>
          </div>
          <div style={{ padding: '15px', border: '1px solid #e5e7eb', borderRadius: '8px', backgroundColor: '#f9fafb' }}>
            <h4 style={{ margin: '0 0 5px 0', color: '#1f2937' }}>Bachelor of Science in Computer Science</h4>
            <p style={{ margin: '0', fontSize: '14px', color: '#6b7280' }}>
              Abdul Wali Khan University Mardan, Garden Campus, KPK, Pakistan<br />
              Department of Computer Science<br />
              Final Year Student | October 2022 - June 2026
            </p>
          </div>
        </div>
      )}
      
      <button 
        onClick={() => setExpanded(!expanded)}
        style={{
          background: '#2563eb',
          color: 'white',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '8px',
          cursor: 'pointer',
          fontSize: '14px',
          fontWeight: 'bold'
        }}
      >
        {expanded ? 'Show Less' : 'Read Full Story'}
      </button>

      {expanded && (
        <div style={{ marginTop: '20px', lineHeight: '1.8', color: '#333', fontSize: '15px' }}>
          <p>
            My work sits at the intersection of Multimodal Fusion, Algorithmic Fairness, and Explainable Deep Learning (XAI), with a singular mission: to transform opaque "black-box" models into transparent, bias-audited diagnostic tools for neurodevelopmental disorders like Autism and epilepsy. I am the creator of the CLINIC-DL Paradigm and the Dual-Layer Quality Assessment (DLQA) framework, innovations designed to bridge the critical gap between high-accuracy algorithms and real-world clinical utility. Currently, I lead pioneering projects in Few-Shot Meta-Learning for pediatric seizure prediction, working to ensure that life-saving AI is robust, equitable, and accessible even in resource-constrained settings.
          </p>
          
          <p>
            But my drive comes from more than just code; it comes from a profound personal journey. For years, I lived inside my own mind, battling Maladaptive Daydreaming—a condition where the imagination becomes an escape from reality. I know what it feels like to be trapped in a world of fantasies, to feel disconnected, and to search for a voice when you feel invisible. That struggle became my superpower. It taught me that accuracy without empathy is empty, and that true innovation requires understanding the human mind from the inside out. My research is my way of grounding myself in reality while giving a voice to children who, like I once felt, might be overlooked by the system.
          </p>
          
          <p>
            My philosophy is simple: <strong>Don't live in the movie; live in the garden.</strong> I believe in the power of tangible reality over perfect illusions. Whether I am debugging a complex neural network or planting a flower back into the soil to let it live, I am driven by the same principle: Truth matters. I am not just building AI; I am building a bridge between the digital and the human, ensuring that technology doesn't just calculate, but cares. Welcome to my world where science meets soul, and where every line of code is a step toward a fairer, clearer future for everyone.
          </p>
        </div>
      )}
    </section>
  );
}

export default About;