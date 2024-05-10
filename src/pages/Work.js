import React from 'react';
import Thumbnail from '../components/Thumbnail.js';

function Work() {
return (
  <div>
    <div className="row my-5">
      <div className="col">
        <p className="h2 mb-5 fw-normal">Hello! I’m Joel, a Senior Product Designer at <a href="https://www.deptagency.com/en-us/">DEPT&#174;</a> in Chicago, with nearly two decades of experience crafting creative solutions across print, branding, web, product photography, and UX/UI design.</p>
        <p className="h2 mb-5 fw-normal">I’m passionate about continuous learning and always eager to expand my horizons. Outside of design, I look forward to sunny days when I can explore the trails on my mountain bike or paddle across the waters of Lake Michigan.</p>
      </div>
    </div>
    <div className="row">
      <Thumbnail link="./work/sana-benefits" image="../images/thumb-sana.jpg" title="Sana Benefits" category="Web" alt="Healthcare provider search experience" />
      <Thumbnail link="./work/virgin-pulse" image="../images/thumb-virgin.jpg" title="Virgin Pulse" category="Native" alt="Employer benefits app" />
      <Thumbnail link="./work/yaro" image="../images/thumb-yaro-sketch.jpg" title="Yaro" category="Branding" alt="Tech start up branding" />
      <Thumbnail link="./work/white-label-health-insurance-app" image="../images/healthcare-app-thumb.jpg" title="White Label Health Insurance App" category="React Native" alt="White label mobile app design" />
    </div>
  </div>
);
}

export default Work;
