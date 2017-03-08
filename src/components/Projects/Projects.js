import React from 'react';
import ProjectEach from './ProjectEach';


class Projects extends React.Component {
  render() {
    return (
      <div className="row rowProjects">
        <div  className="container">
          <ProjectEach />
        </div>
      </div>
    );
  }
}

export default Projects;
