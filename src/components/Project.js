import React from 'react';

function Project(props) {
return (
  <div>
    <div className="row py-4">
      <div class="col">
        <h1 className="h1">{props.title}</h1>
      </div>
    </div>
    <div className="row">
      <div className="description col-lg-6">
        <span className="h6 fw-bold">Description</span>
        <p>{props.description}</p>
      </div>
      <div className="agency col">
        <span className="h6 fw-bold">Agency</span>
        <p>{props.agency}</p>
      </div>
      <div className="length col">
        <span className="h6 fw-bold">Length</span>
        <p>{props.length}</p>
      </div>
      <div className="role col">
        <span className="h6 fw-bold">Role</span>
        <p>{props.role}</p>
      </div>
    </div>
    <div className="row mb-5">
      <div className="overview col-sm-12 col-md-6">
        <span className="h6 fw-bold">Overview</span>
        <p>{props.overview}</p>
      </div>
      <div className="outcome col">
        <span className="h6 fw-bold">Outcome</span>
        <p>{props.outcome}</p>
      </div>
    </div>
  </div>
);
}

export default Project;
