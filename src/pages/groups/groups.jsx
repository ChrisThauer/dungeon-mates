import React from 'react';

import './groups.scss';
import NewGroup from '../../components/new-group/new-group';

class Groups extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      groups: [
        {
          name: 'Dragon Heist',
          players: 5
        }
      ]
    }
  }

  render() {
    return (
      <div className="group-list">
        <h1>Group List</h1>
        <NewGroup />
      </div>
    )
  }
}

export default Groups;