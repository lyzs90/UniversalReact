'use strict';

import React from 'react';
import { render } from 'react-dom';
import AppRoutes from './components/AppRoutes';

window.onload = () => {
  render(<AppRoutes />, document.getElementById('main'));
}
