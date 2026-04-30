import React from 'react';

function Projects() {
  const projects = [
    { id: 1, name: 'Seizure Prediction Model' },
    { id: 2, name: 'Autism Detection using ML' }
  ];

  return (
    <div style={{ padding: '60px' }}>
      <h2>Projects</h2>

      {projects.map((project) => (
        <div key={project.id} style={{ marginBottom: '12px' }}>
          <a href="#" style={{ color: '#2563eb', textDecoration: 'none' }}>
            {project.name}
          </a>
        </div>
      ))}
    </div>
  );
}

export default Projects;