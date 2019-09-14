import React from 'react';

import './groups.scss';
import NewGroup from '../../components/new-group/new-group';
import GroupSelector from '../../components/group-selector/group-selector';

class Groups extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      groups: [
        {
          name: 'Dragon Heist',
          system: 'D&D 5E',
          players: 5
        },
        {
          name: 'Storm King\'s Thunder',
          system: 'D&D 5E',
          players: 4
        }
      ]
    }
  }

  render() {
    return (
      <div className="groups">
        <h1>Groups</h1>
        <div className="group-list">
          {
            this.state.groups.map(group => (
              <GroupSelector name={group.name} system={group.system} players={group.players} />
            ))
          }
          <NewGroup />
        </div>
      </div>
    )
  }
}

export default Groups;