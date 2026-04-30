import React, { useState } from 'react';

function About() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="about" style={{ padding: '60px' }}>
      <h2>About Me</h2>
      
      <p style={{ marginBottom: '15px', lineHeight: '1.6' }}>
        I am Waqas Ahmad, a Clinical AI researcher dedicated to building a future where technology serves the most vulnerable among us.
      </p>
      
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