import React from 'react';

function Project(props) {
return (
  <div>
    <div className="row py-5">
      <div class="col">
        <h1 className="display-4">{props.title}</h1>
      </div>
    </div>
    <div className="row py-4">
      <div className="agency col-lg-2">
        <span className="h6 text-secondary">Agency</span>
        <p className="h4">{props.agency}</p>
      </div>
      <div className="length col-lg-2">
        <span className="h6 text-secondary">Length</span>
        <p className="h4">{props.length}</p>
      </div>
      <div className="role col">
        <span className="h6 text-secondary">Role</span>
        <p className="h4">{props.role}</p>
      </div>
    </div>
    <div className="row py-4">
      <div className="description col-lg-4">
        <span className="h6 text-secondary">Challenge</span>
        <p>{props.description}</p>
      </div>
      <div className="overview col-lg-4">
        <span className="h6 text-secondary">Approach</span>
        <p>{props.overview}</p>
      </div>
      <div className="outcome col-lg-4">
        <span className="h6 text-secondary">Result</span>
        <p>{props.outcome}</p>
      </div>
    </div>
  </div>
);
}

export default Project;
