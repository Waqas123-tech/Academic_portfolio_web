import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '80px 60px' }}>
      <h2>Contact</h2>

      <div style={{
        background: 'linear-gradient(135deg, #f8fafc, #e0f2fe)',
        padding: '30px',
        borderRadius: '16px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
        marginTop: '20px'
      }}>
        <p style={{ margin: '0 0 15px 0', fontSize: '16px' }}>
          <strong>📧 Email:</strong> <a href="mailto:ahmad502492@gmail.com" style={{ color: '#2563eb', textDecoration: 'none' }}>ahmad502492@gmail.com</a>
        </p>
        <p style={{ margin: '0', fontSize: '16px' }}>
          <strong>💼 LinkedIn:</strong> <a href="https://www.linkedin.com/in/waqas-ahmed-582729296" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', textDecoration: 'none' }}>www.linkedin.com/in/waqas-ahmed-582729296</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;