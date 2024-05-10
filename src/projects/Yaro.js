import React from 'react';
import Project from '../components/Project.js';

function ProjectOutput() {
return (
  <div>
    <Project
      title="Yaro"
      overview="Lorem ipsum dolor sit amet sapien tincidunt lobortis mi quis molestie nullam. Proin platea libero platea vulputate leo dictum netus in eiusmod tristique mollis phasellus. Do volutpat pulvinar et vivamus massa augue aliquet. At donec fermentum sagittis incididunt aliquet mollis tempus scelerisque. Lobortis ullamcorper lacus curabitur congue aenean in iaculis rhoncus lobortis feugiat ultricies."
      outcome="Lorem ipsum dolor sit amet sapien tincidunt lobortis mi quis molestie nullam. Proin platea libero platea vulputate leo dictum netus in eiusmod tristique mollis phasellus. Do volutpat pulvinar et vivamus massa augue aliquet. At donec fermentum sagittis incididunt aliquet mollis tempus scelerisque. Lobortis ullamcorper lacus curabitur congue aenean in iaculis rhoncus lobortis feugiat ultricies."
      // eslint-disable-next-line
      role="Senior UX Designer"
      imageOne="../images/full-yaro-sketch.jpg"
      altOne="Yaro"
      imageTwo="../images/yaro-1.jpg"
      altTwo="Yaro"
    />
  </div>
);
}

export default ProjectOutput;
