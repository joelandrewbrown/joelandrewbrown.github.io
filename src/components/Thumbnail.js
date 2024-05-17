import React from 'react';
import {Link} from 'react-router-dom';

function Thumbnail(props) {
return (
  <div className="col-lg-6 pb-5 mb-5 project">
    <div className="contain">
      <Link className="text-reset" to={props.link}>
        <div className="project-image">
          <img className="img-fluid img-thumbnail mb-4" src={props.image} alt={props.alt} />
        </div>
        <p className="h2">{props.title}</p>
        <span class="h4 fw-normal">{props.short_desc}</span>
      </Link>
    </div>
  </div>
);
}

export default Thumbnail;
