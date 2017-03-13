import React from 'react';


class Projects extends React.Component {
  render() {
    return (
      <div className="rowProjects">
      <div className="row">
        <div  className="container">
          <div className="col-md-6 projectAutomatio">
            <h4 className="enterProjectLeft">Instagram Automation Tool</h4>
            <h5 className="enterProjectLeft">For a better productivity we build various tools which help you to lead project better.</h5>
            <img className="enterProjectLeft" src={require('../../../public/img/homeAssets/automation.png')}/>
          </div>
      <div className="col-md-6 projectWireflow">
          <h4 className="enterProjectRight">WireFlow</h4>
          <h5 className="enterProjectRight">Easiest user flow chart tool for real-time collaborative work.</h5>
          <img className="enterProjectRight" src={require('../../../public/img/homeAssets/wireflow.png')}/>
          </div>
          <div className="col-md-12 projectWekan">
            <div className="col-md-8">
              <img  className="enterProjectBottom" src={require('../../../public/img/homeAssets/wekan.png')}/>
            </div>
            <div className="projectWekanTxt col-md-4">
              <h4 className="enterProjectBottom">Wekan (Trello like)</h4>
              <h5 className="enterProjectBottom">Wekan is Trello like Open Source app built with Meteor.js.
                  <br></br>
                  <br></br>
                  It's real time and you can import your current Trello board to it and have your own self hosted organization board.
              </h5>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Projects;
