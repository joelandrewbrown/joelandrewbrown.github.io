import React from 'react';
import Project from '../components/Project.js';

function ProjectOutput() {
return (
  <div>
    <Project
      title="Yaro app"
      description="White label health insurance app built with react native"
      agency="In-House"
      length="1 year"
      // eslint-disable-next-line
      role="Senior UX Designer"
      overview="Navigating health insurance is extremely confusing. We set out to create a white label app any health insurance could use to help their members navigate health care and insurance more easily."
      outcome="In one year, we launched a tool that members could use to navigate their health insurance benefits."
    />
    <div className="row py-5">
      <div className="col-lg-9">
        <img className="img-fluid mb-3 rounded" src="../images/healthcare-app-screens.jpg" alt="Alt" />
      </div>
      <div className="col align-self-end">
        <p className="fw-normal">Members can search for care in their network, find care through the symptom checker, view their insurance card, see their plan usage details and more - all in one app.</p>
      </div>
    </div>
    <div className="row d-flex py-5">
      <div className="col-lg-3 align-self-end order-sm-2 order-lg-1">
        <p className="fw-normal">Switch plans to see other family members who have allowed access within a single account.</p>
      </div>
      <div className="col-lg-9 order-sm-1 order-lg-2">
        <img className="img-fluid mb-3 rounded" src="../images/healthcare-app-coffee.jpg" alt="Alt" />
      </div>
    </div>
    <div className="row py-5">
      <div className="col-lg-9">
        <img className="img-fluid mb-3 rounded" src="../images/healthcare-app-illustrations.jpg" alt="Alt" />
      </div>
      <div className="col">
        <p className="fw-normal">To add some personality, color and energy, I designed a set of custom illustrations for use throughout the product.</p>
      </div>
    </div>
  </div>
);
}

export default ProjectOutput;
