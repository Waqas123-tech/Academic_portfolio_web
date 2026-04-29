import React from 'react';

const cardStyle = {
  background: 'linear-gradient(135deg, #f8fafc, #e0f2fe)',
  padding: '20px',
  borderRadius: '16px',
  boxShadow: '0 10px 25px rgba(0,0,0,0.08)',
  textAlign: 'center'
};

const ResearchTeam = () => {
  return (
    <section id="team" style={{ padding: '80px 60px' }}>
      <h2>Research Team</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px,1fr))',
        gap: '20px',
        marginTop: '20px'
      }}>
        <div style={cardStyle}>
          <img src="/member1.png" alt="Member 1"
            style={{ width: '100px', borderRadius: '50%' }} />
          <h4>Member 1</h4>
        </div>

        <div style={cardStyle}>
          <img src="/member2.png" alt="Member 2"
            style={{ width: '100px', borderRadius: '50%' }} />
          <h4>Member 2</h4>
        </div>
      </div>
    </section>
  );
};

export default ResearchTeam;