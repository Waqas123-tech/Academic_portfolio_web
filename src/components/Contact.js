import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={{ padding: '80px 60px' }}>
      <h2>Contact</h2>

      <div style={{
        background: 'linear-gradient(135deg, #f8fafc, #e0f2fe)',
        padding: '20px',
        borderRadius: '16px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
        marginTop: '20px'
      }}>
        <p>Email: your@email.com</p>
        <p>LinkedIn: your-profile</p>
      </div>
    </section>
  );
};

export default Contact;