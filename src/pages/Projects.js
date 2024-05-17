import React from 'react';
import Thumbnail from '../components/Thumbnail.js';

function Projects() {
return (
  <div>
    <div className="row my-5">
      <div className="col">
        <p className="h1 fw-light mb-5 pb-4">Creative at heart &amp; practical in mind, dwelling in Chicago, from Kansas City, two decades of experience crafting solutions across print, branding, web, product &amp; UX/UI design, living for days to mountain bike, hike, kayak in Lake Michigan, snowboard down a hill, or pick the guitar by a campfire.</p>
      </div>
    </div>

    <div className="row">
      <h2 className="display-5 mb-5">Selected projects</h2>
      <Thumbnail link="./projects/web3-app" image="../images/thumb-thrackle.png" title="Web3 tools" short_desc="Product design for a Web3 game focused startup" alt="Logo and product design for a Web3 game focused startup" />
      <Thumbnail link="./projects/sana-benefits" image="../images/thumb-sana.png" title="Sana Benefits" short_desc="UX for a healthcare provider startup" alt="Healthcare provider search experience" />
      <Thumbnail link="./projects/virgin-pulse" image="../images/thumb-virgin-pulse.png" title="Virgin Pulse" short_desc="Integrating a benefits navigation platform" alt="Employer benefits app" />
      <Thumbnail link="./projects/yaro" image="../images/thumb-yaro.png" title="Yaro" short_desc="Branding for a health tech startup" alt="Tech start up branding" />
      <Thumbnail link="./projects/yaro-app" image="../images/thumb-yaro-app.png" title="Yaro product" short_desc="Product design for a health insurance app" alt="White label mobile app design" />
    </div>
  </div>
);
}

export default Projects;
