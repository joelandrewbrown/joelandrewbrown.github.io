import React from 'react';
import Project from '../components/Project.js';

function ProjectOutput() {
return (
  <div>
    <Project
      title="Sana Benefits"
      description="Product, print and web design for a health insurance startup in Austin, TX."
      agency="In-house"
      length="1 year"
      // eslint-disable-next-line
      role="Senior Product Designer"
      overview="In addition to user testing and delivering a variety of product feature work, we worked on all the design assets around a pilot of Sana MD, a all-inclusive health center for primary care that is free with most Sana memberships."
      outcome="Through research and talking to people, we identified many painpoints in the product and designed solutions tailored to solve those problems."
    />
    <div className="row py-5">
      <div className="col-lg-12">
        <img className="img-fluid mb-3 rounded" src="../images/sana-md-hero.jpg" alt="Alt" />
      </div>
      <div className="col-lg-6">
        <p>A responsive landing page informs current eligible members of the new benefit offering Sana MD, encouraging utilization.</p>
      </div>
    </div>
    <div className="row py-5">
      <div className="col-lg-12">
        <img className="img-fluid mb-3 rounded" src="../images/sana-md-highlight-optimized.png" alt="Alt" />
      </div>
      <div className="col-lg-6">
        <p className="fw-normal">We further defined the Sana MD brand styles across various digital and print collateral.</p>
      </div>
    </div>
    <div className="row py-5">
      <div className="col-lg-12">
        <img className="img-fluid mb-3 rounded" src="../images/sana-md-highlight-in-app.jpg" alt="Alt" />
      </div>
      <div className="col-lg-6">
        <p className="fw-normal">Various Sana MD touch points throughout the Sana product needed careful attention, accounting for each tier of insurance membership.</p>
      </div>
    </div>
    <div className="row py-5">
      <div className="col-lg-12">
        <img className="img-fluid mb-3 rounded" src="../images/sana-md-usability-test.jpg" alt="Alt" />
      </div>
      <div className="col-lg-6">
        <p className="fw-normal">Multiple unmoderated user tests were run on the Sana MD communications, we iterated many times to improve our messaging and layout based on health insurance owner's valuable feedback.</p>
      </div>
    </div>
  </div>
);
}

export default ProjectOutput;
