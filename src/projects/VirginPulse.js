import React from 'react';
import Project from '../components/Project.js';

function ProjectOutput() {
return (
  <div>
    <Project
      title="Virgin Pulse"
      description="On the Benefits Navigation team we were tasked with designing testing and launching the new product experience for responsive web, native iOS and Android."
      agency="In-house"
      length="1 year"
      // eslint-disable-next-line
      role="Senior Product Designer"
      overview="In addition to improving the existing Benefits experience after gathering extensive feedback, we learned that people desired many improvements like saving frequently used benefits for faster access, searching and filtering for relevant benefits more easily and showing frequently visited items higher on the page for quick recall. We also implemented the back-end and front-end for the additional health insurance navigation feature, which was acquired recently."
      outcome="Our team re-designed, tested and implemented multiple improvements to the user experience based off of testing, as well as laid the foundation for a new and complex healthcare navigation feature to be implemented into the new Benefits Navigation experience."
    />

    <div className="row py-5">
      <div className="col-lg-12">
        <img className="img-fluid mb-3 rounded" src="../images/virgin-pulse-web.png" alt="Alt" />
      </div>
      <div className="col align-self-end">
        <p className="fw-normal">We designed responsive screens in detail to eliminate any extra guesswork for our engineers.</p>
      </div>
    </div>

    <div className="row py-5">
      <div className="col-lg-12">
        <img className="img-fluid mb-3 rounded" src="../images/virgin-pulse-wireframe.png" alt="Alt" />
      </div>
      <div className="col align-self-end">
        <p className="fw-normal"></p>
      </div>
    </div>

    <div className="row py-5">
      <div className="col-lg-12">
        <img className="img-fluid mb-3 rounded" src="../images/virgin-pulse-benefits-only.png" alt="Alt" />
      </div>
      <div className="col align-self-end">
        <p className="fw-normal"></p>
      </div>
    </div>

  </div>
);
}

export default ProjectOutput;
