import React from 'react';
import Project from '../components/Project.js';

function ProjectOutput() {
return (
  <div>
    <Project
      title="Web3 developer tools"
      description="This product assists developers in implementing game economy rules and creating liquidity solutions for their game tokens. We designed a user interface that enables game developers to efficiently manage and deploy necessary contracts to their blockchain."
      agency="DEPT&#174;"
      length="3 months"
      // eslint-disable-next-line
      role="Senior Product Designer"
      overview="Collaborating closely with product managers and engineers, we translated the design vision for the initial iteration of the product into reality. We also embarked on the journey of establishing the company brand, starting from conceptualizing the logo and extending it to the design and development of a website."
      outcome="Through collaborative workshopping and close collaboration with engineers, we designed and finalized the initial version of a diverse range of features for the product. Designs were then handed off to the development team for implementation. To ensure a high-quality user experience, we conducted internal user testing and reviewed production screens for quality assurance. Any identified issues were carefully documented using Jira tickets, allowing for efficient tracking and resolution."
    />
    <div className="row py-5">
      <div className="col-lg-12">
        <img className="img-fluid mb-3 rounded" src="../images/web3-app-overview.png" alt="Alt" />
      </div>
      <div className="col">
        <p className="fw-normal">Game overview dashboard, highlighting various valuable content within the product for a quick and useful glimpse into the state of a game’s configuration.
</p>
      </div>
    </div>
    <div className="row py-5">
      <div className="col-lg-12">
        <img className="img-fluid mb-3 rounded" src="../images/web3-app-liquidity-optimized.png" alt="Alt" />
      </div>
      <div className="col">
        <p className="fw-normal">Liquidity solutions management feature for engineers to be able to create a liquidity pool, deploy to their blockchain, activate and enable trading.</p>
      </div>
    </div>
  </div>
);
}

export default ProjectOutput;
