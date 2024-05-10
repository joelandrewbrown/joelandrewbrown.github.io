import React from 'react';
import Project from '../components/Project.js';

function ProjectOutput() {
return (
  <div>
    <Project
      title="Sana Benefits"
      description="Product, print and web design for an awesome health insurance startup in Austin, TX."
      agency="In-House"
      length="1 year"
      // eslint-disable-next-line
      role="Senior Product Designer"
      overview="In addition to user testing and delivering a variety of product feature work, we worked on all the design assets around a pilot of Sana MD, a all-inclusive health center for primary care that is free with most Sana memberships."
      outcome="Through research and talking to people, we identified many painpoints in the product and designed solutions tailored to solve those problems."
    />
    <div className="row py-4">
      <div className="col-lg-7">
        <img className="img-fluid mb-3" src="../images/sana-md-sign.jpg" alt="Alt" />
      </div>
      <div className="col-lg-2 align-self-end">
        <p className="fw-medium">Sign mockup for Sana MD</p>
      </div>
    </div>
    <div className="row py-4">
      <div className="col-lg-12">
        <img className="img-fluid mb-3" src="../images/sana-md-hero.jpg" alt="Alt" />
      </div>
      <div className="col-lg-2 align-self-end">
        <p className="fw-medium">Sign mockup for Sana MD</p>
      </div>
    </div>
  </div>
);
}

export default ProjectOutput;
