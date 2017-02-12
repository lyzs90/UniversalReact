'use strict';

import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const AthletesPreview = ({ id, image, name, medals }) => (
  <Link to={`/athlete/${id}`}>
    <div className="athlete-preview">
      <img src={`img/${image}`}/>
      <h2 className="name">{name}</h2>
      <span className="medals-count"><img src="/img/medal.png"/>{medals.length}</span>
    </div>
  </Link>
);

/*
AthletesPreview.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  medals: PropTypes.array.isRequired,
};
*/

export default AthletesPreview;
