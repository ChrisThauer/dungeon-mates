import React from 'react';

import './group-list.scss';

class GroupList extends React.Component {
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
      </div>
    )
  }
}

export default GroupList;