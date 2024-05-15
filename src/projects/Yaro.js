import React from 'react';
import Project from '../components/Project.js';

function ProjectOutput() {
return (
  <div>
    <Project
      title="Yaro"
      agency="In-house"
      length="1 year"
      role="Senior Product Designer"
      // eslint-disable-next-line
      description="Challenge"
      overview="Approach"
      outcome="Result"
    />
  </div>
);
}

export default ProjectOutput;
