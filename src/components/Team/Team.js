import React from 'react';
import TeamCards from './TeamCards';


class Team extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="row rowTeam">
        <TeamCards />
      </div>
    );
  }
}

export default Team;
