import React from 'react';

function Skills() {
  const skills = [
    { name: 'Python', desc: 'Used for ML model development and data analysis.' },
    { name: 'Machine Learning', desc: 'Experience with classification and regression models.' },
    { name: 'Deep Learning', desc: 'Worked with neural networks and embeddings.' },
    { name: 'React', desc: 'Frontend development for modern web apps.' }
  ];

  return (
    <div style={{ padding: '60px' }}>
      <h2>Skills</h2>

      {skills.map((skill, index) => (
        <div key={index} style={{ marginBottom: '15px' }}>
          <strong>{skill.name}</strong>
          <p>{skill.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default Skills;