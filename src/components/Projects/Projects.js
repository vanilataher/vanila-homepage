import React from 'react';


class Projects extends React.Component {
  render() {
    return (
      <div id="projects" className="rowProjects">
      <div className="row">
        <div  className="container">
          <div className="col-md-6 projectAutomatio">
            <h4 className="enterProjectLeft">Wekan (Trello like)</h4>
            <h5 className="enterProjectLeft">Wekan is a Trello-like Open Source app built with Meteor.js.
              <br></br>
              <br></br>
              It's real time and you can import your current Trello board to it and have your own self hosted organization board.
            </h5>
            <img className="enterProjectLeft" src={require('../../../public/img/homeAssets/wekan.png')}/>
          </div>
          <div className="col-md-6 projectWireflow">
            <h4 className="enterProjectRight">WireFlow</h4>
            <h5 className="enterProjectRight">Easiest user flow chart tool for real-time collaborative work.</h5>
            <img className="enterProjectRight" src={require('../../../public/img/homeAssets/wireflow.png')}/>
          </div>
          <div className="col-md-12 projectWekan">
            <div className="col-md-8 onlyDesktop">
              <img  className="enterProjectBottom" src={require('../../../public/img/homeAssets/automatio.png')}/>
            </div>
            <div className="projectWekanTxt col-md-4">
              <h4 className="enterProjectBottom">Web Automation Tool</h4>
              <h5 className="enterProjectBottom">Web Automation without coding and in just a few clicks.
              </h5>
            </div>
            <div className="col-md-8 onlyMobile">
              <img className="enterProjectBottom" src={require('../../../public/img/homeAssets/automatio.png')}/>
            </div>
          </div>
          <div className="col-md-12 projectMoonly">
            <div className="projectMoonlyTxt col-md-4">
              <h4 className="enterProjectBottom">Moonly</h4>
              <h5 className="enterProjectBottom">Moon.ly is a Google Chrome extension that shows curated content upon opening Chrome or a new tab.</h5>
            </div>
            <div className="col-md-8">
              <img  className="enterProjectBottom" src={require('../../../public/img/homeAssets/moonly.png')}/>
            </div>
          </div>
          {/* <div className="col-md-6 projectMoonly">
            <h4 className="enterProjectRight">Moonly</h4>
            <h5 className="enterProjectRight">Moon.ly is a Google Chrome extension that shows curated content upon opening Chrome or a new tab.</h5>
            <img className="enterProjectRight" src={require('../../../public/img/homeAssets/moonly.png')}/>
          </div> */}
        </div>
      </div>
      </div>
    );
  }
}

export default Projects;
