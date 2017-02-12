'use strict';

import React, { PropTypes } from 'react';

const data = {
  'cu': {
    'name': 'Cuba',
    'icon': 'flag-cu.png',
  },
  'fr': {
    'name': 'France',
    'icon': 'flag-fr.png',
  },
  'jp': {
    'name': 'Japan',
    'icon': 'flag-jp.png',
  },
  'nl': {
    'name': 'Netherlands',
    'icon': 'flag-nl.png',
  },
  'uz': {
    'name': 'Uzbekistan',
    'icon': 'flag-uz.png',
  }
};

const Flag = ({ code, showName }) => (
  <span className="flag">
    <img src={`/img/${data[code].icon}`} title={data[code].name} className="icon" />
    {showName && <span className="name"> {data[code].name}</span>}
  </span>
);

/*
Flag.propTypes = {
  code: PropTypes.shape({
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  }),
  showName: PropTypes.string
};
*/

export default Flag;
