import React from 'react';
import { Link } from 'react-router-dom';

function Projects() {
  const projects = [
    { id: 1, name: 'Seizure Prediction Model' },
    { id: 2, name: 'Autism Detection using ML' }
  ];

  return (
    <div style={{ padding: '60px' }}>
      <h2>Projects</h2>

      {projects.map((project) => (
        <div key={project.id}>
          <Link to={`/project/${project.id}`}>
            {project.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Projects;