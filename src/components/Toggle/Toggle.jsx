import React from 'react';

import './Toggle.scss';

const Toggle = ({ sortByName }) => (
  <div className="toggle-wrapper">
    <label className="container">
      <input type="checkbox" onChange={() => sortByName()} />
      <span className="toggle-btn"></span>
    </label>
  </div>
);

export default Toggle;
