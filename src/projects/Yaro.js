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
      description="Our small team was responsible for naming the company, registering the copyright, and creating a visual identity for our health tech startup to support our products."
      overview="We reviewed a long list of company names and presented the top choices to the board and team for feedback. After selecting a name, we created visuals and established our brand presence before starting product design and development."
      outcome="Our comprehensive branding effort was a key factor in Yaro's success, ultimately leading to its acquisition by Virgin Pulse, a billion-dollar organization. The strong brand identity we established made Yaro an attractive and valuable addition to Virgin Pulse's portfolio, highlighting the impact of our team's dedication and creativity."
    />

    <div className="row py-5">
      <div className="col-lg-12">
        <img className="img-fluid mb-3 rounded" src="../images/yaro-naming.png" alt="Alt" />
      </div>
      <div className="col-lg-4 align-self-end">
        <p>We created a chart of finalists for our company name to present to the board and team.</p>
      </div>
    </div>

    <div className="row py-5">
      <div className="col-lg-12">
        <img className="img-fluid mb-3 rounded" src="../images/yaro-naming-2.png" alt="Alt" />
      </div>
      <div className="col-lg-4 align-self-end">
        <p>As a team, we chose a simplification of the plant Yarrow for our company name.</p>
      </div>
    </div>

    <div className="row py-5">
      <div className="col-lg-12">
        <img className="img-fluid mb-3 rounded" src="../images/yaro-1-sketch.png" alt="Alt" />
      </div>
      <div className="col-lg-6 align-self-end">
        <p>We explored concepts after choosing the name Yaro, alluding to the plant yarrow, which attracts good, is a companion and can aid in healing.</p>
      </div>
    </div>

    <div className="row py-5">
      <div className="col-lg-4">
        <img className="img-fluid mb-3 rounded" src="../images/yarrow-concept-petal-1.png" alt="Alt" />
      </div>
      <div className="col-lg-4">
        <img className="img-fluid mb-3 rounded" src="../images/yarrow-concept-petal-2.png" alt="Alt" />
      </div>
      <div className="col-lg-4">
        <img className="img-fluid mb-3 rounded" src="../images/yarrow-concept-petal-3.png" alt="Alt" />
      </div>
    </div>

    <div className="row py-2">
      <div className="col-lg-4">
        <img className="img-fluid mb-3 rounded" src="../images/yaro-concept-module-1.png" alt="Alt" />
      </div>
      <div className="col-lg-4">
        <img className="img-fluid mb-3 rounded" src="../images/yaro-concept-module-2.png" alt="Alt" />
      </div>
      <div className="col-lg-4">
        <img className="img-fluid mb-3 rounded" src="../images/yaro-concept-module-3.png" alt="Alt" />
      </div>
    </div>

    <div className="row py-5">
      <div className="col-lg-6">
        <img className="img-fluid mb-3 rounded" src="../images/yaro-4-concept.png" alt="Alt" />
          <p>Using the golden ratio as a foundation, we began exploring many concepts that emerged.</p>
      </div>
      <div className="col-lg-6">
        <img className="img-fluid mb-3 rounded" src="../images/yaro-5-golden.png" alt="Alt" />
          <p>This concept alludes to yarrow at a macro level. It is small yet powerful.</p>
      </div>
    </div>

    <div className="row py-5">
      <div className="col-lg-12">
        <img className="img-fluid mb-3 rounded border" src="../images/yaro-mix.png" alt="Alt" />
      </div>
    </div>

    <div className="row py-5 mb-5">
      <div className="col-lg-12">
        <img className="img-fluid mb-3 rounded border" src="../images/yaro-website.png" alt="Alt" />
      </div>
    </div>

  </div>
);
}

export default ProjectOutput;
