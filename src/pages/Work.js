import React from 'react';
import Thumbnail from '../components/Thumbnail.js';

function Work() {
return (
  <div>
    <div className="row my-5">
      <div className="col">
        <p className="h1 mb-5">Designer with <a href="https://www.deptagency.com/en-us/">DEPT&#174;</a>, dwelling in Chicago, from Kansas City, two decades of experience crafting creative solutions across print, branding, web, product photography and UX/UI design, living for days to mountain bike, kayak out into the Lake Michigan or snowboard on a hill somewhere, any hill will do.</p>
      </div>
    </div>
    <div className="row">
      <Thumbnail link="./work/web3-app" image="../images/thumb-thrackle.png" title="Web3 tools" short_desc="Product design for a Web3 game focused startup" alt="Logo and product design for a Web3 game focused startup" />
      <Thumbnail link="./work/sana-benefits" image="../images/thumb-sana.png" title="Sana Benefits" short_desc="UX for a healthcare provider startup" alt="Healthcare provider search experience" />
      <Thumbnail link="./work/virgin-pulse" image="../images/thumb-virgin-pulse.png" title="Virgin Pulse" short_desc="Integrating a benefits navigation platform" alt="Employer benefits app" />
      <Thumbnail link="./work/yaro" image="../images/thumb-yaro.png" title="Yaro" short_desc="Branding for a health tech startup" alt="Tech start up branding" />
      <Thumbnail link="./work/yaro-app" image="../images/thumb-yaro-app.png" title="Yaro product" short_desc="Product design for a health insurance app" alt="White label mobile app design" />
    </div>
  </div>
);
}

export default Work;
