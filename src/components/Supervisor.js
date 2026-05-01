// 5. Supervisor.js (FULL PROFESSIONAL)
// =========================
import React from 'react';

const Supervisor = () => {
  return (
    <section style={{ padding: '80px 60px', textAlign: 'center' }}>
      <h2>Collaborator & Supervisor</h2>

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '40px', maxWidth: '960px', margin: 'auto' }}>
        <div style={{ width: '100%', maxWidth: '480px', padding: '30px', border: '1px solid #e5e7eb', borderRadius: '14px', background: '#ffffff', boxShadow: '0 18px 40px rgba(15, 23, 42, 0.05)' }}>
          <h3>Collaborator</h3>
          <img
            src={`${process.env.PUBLIC_URL}/dr-fangli-ying.jpg`}
            alt="Dr. Fangli Ying"
            style={{ width: '150px', borderRadius: '50%', marginTop: '20px' }}
          />
          <h4 style={{ marginTop: '15px' }}>Dr. Fangli Ying</h4>
          <p style={{ margin: '8px 0 0', fontStyle: 'italic' }}>
            Associate Professor, Department of Computer Science
          </p>
          <p style={{ margin: '0', fontStyle: 'italic' }}>
            East China University of Science and Technology
          </p>
          <p style={{ maxWidth: '700px', margin: 'auto', marginTop: '20px', lineHeight: '1.8' }}>
            B.S. in Software Engineering, Zhejiang University (2009). Ph.D. in Computer Science, National University of Ireland, Maynooth (2014).
            Research focus: Computer Vision, Reinforcement Learning for Financial Trading, and AI for Protein Design.
            Visiting Professor at International College of Digital Innovation, Chiang Mai University, Thailand.
            Currently collaborating on seizure prediction using deep learning.
          </p>
        </div>

        <div style={{ width: '100%', maxWidth: '680px', padding: '30px', border: '1px solid #e5e7eb', borderRadius: '14px', background: '#f8fafc', boxShadow: '0 18px 40px rgba(15, 23, 42, 0.04)' }}>
          <h3>Supervisor</h3>
          <img
            src={`${process.env.PUBLIC_URL}/ashraf.jpg`}
            alt="Ashraf Zia"
            style={{ width: '150px', borderRadius: '50%', marginTop: '20px' }}
          />
          <h4 style={{ marginTop: '15px' }}>Ashraf Zia</h4>
          <p style={{ maxWidth: '700px', margin: '20px auto 0', lineHeight: '1.8', textAlign: 'left' }}>
            Ashraf Zia received the Ph.D. degree in Computer Science, specifically in Computer Vision, Artificial Intelligence and Humanoid Robots from Aberystwyth University, Wales, U.K., and the M.S. degree in Software Engineering from SZABIST-Islamabad, Pakistan. Previously, he was a researcher at the Intelligent Robotics Lab for estimation of grasping patterns from images for humanoid robots using deep learning at Aberystwyth University, Wales, U.K. He is engaged in research on machine learning, deep learning, software engineering, and humanoid robots.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Supervisor;
