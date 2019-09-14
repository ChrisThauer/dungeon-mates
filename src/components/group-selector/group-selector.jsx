import React from 'react';

import './group-selector.scss';

const GroupSelector = ({ name, system, players }) => (
  <div className="group-selector">
    <div className="row">
      <p className="row-header">Name: </p>
      <p className="row-content">{name}</p>
    </div>
    <div className="row">
      <p className="row-header">System: </p>
      <p className="row-content">{system}</p>
    </div>
    <div className="row">
      <p className="row-header">Players: </p>
      <p className="row-content">{players}</p>
    </div>
  </div>
);

export default GroupSelector;