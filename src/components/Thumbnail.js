import React from 'react';
import {Link} from 'react-router-dom';

function Thumbnail(props) {
return (
  <div className="col-lg-6 mb-4 project">
    <div className="contain">
      <Link to={props.link}>
        <div className="project-image">
          <img className="img-fluid" src={props.image} alt={props.alt} />
        </div>
        <h2 className="mt-2">{props.title}</h2>
        <span className="badge bg-dark">{props.category}</span>
      </Link>
    </div>
  </div>
);
}

export default Thumbnail;
