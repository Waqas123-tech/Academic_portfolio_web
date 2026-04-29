// 5. Supervisor.js (FULL PROFESSIONAL)
// =========================
import React from 'react';

const Supervisor = () => {
  return (
    <section style={{ padding: '80px 60px', textAlign: 'center' }}>
      <h2>Supervisor</h2>

      <img
        src="/supervisor.jpg"
        alt="Dr. Fangli Ying"
        style={{ width: '150px', borderRadius: '50%', marginTop: '20px' }}
      />

      <h3 style={{ marginTop: '15px' }}>Dr. Fangli Ying</h3>
      <p style={{ margin: '8px 0 0', fontStyle: 'italic' }}>
        Associate Professor, Department of Computer Science
      </p>
      <p style={{ margin: '0', fontStyle: 'italic' }}>
        East China University of Science and Technology
      </p>

      <p style={{ maxWidth: '700px', margin: 'auto', marginTop: '20px' }}>
        B.S. in Software Engineering, Zhejiang University (2009). Ph.D. in Computer Science, National University of Ireland, Maynooth (2014).
        Research focus: Computer Vision, Reinforcement Learning for Financial Trading, AI for Protein Design.
        Visiting Professor at International College of Digital Innovation, Chiang Mai University, Thailand.
        Currently collaborating on seizure prediction using deep learning.
      </p>
    </section>
  );
};

export default Supervisor;
