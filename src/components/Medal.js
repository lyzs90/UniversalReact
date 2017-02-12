'use strict';

import React, { PropTypes } from 'react';

const typeMap = {
  'G': 'Gold',
  'S': 'Silver',
  'B': 'Bronze'
};

const Medal = ({ type, year, city, event, category }) => (
  <li className="medal">
    <span className={`symbol symbol-${type}`} title={typeMap[type]}>
      {type}
    </span>
    <span className="year">{year}</span>
    <span className="city"> {city}</span>
    <span className="event"> ({event})</span>
    <span className="category"> {category}</span>
  </li>
);

/*
Medal.propTypes = {
  type: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  event: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired
};
*/

export default Medal;
