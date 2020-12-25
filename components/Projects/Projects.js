import React from 'react';

class Projects extends React.Component {
  render() {
    return (
      <div id="projects" className="rowProjects">
        <div className="row">
          <div className="container">
            <div className="col-md-6 projectAutomatio">
              <h4 className="enterProjectLeft">Wekan (Trello like)</h4>
              <h5 className="enterProjectLeft">
                Wekan is a Trello-like Open Source app built with Meteor.js.
                <br></br>
                <br></br>
                It's real time and you can import your current Trello board to
                it and have your own self hosted organization board.
              </h5>
              <a
                href="https://wekan.github.io/"
                className="visitSite enterProjectLeft"
                target="_blank"
              >
                Visit site
              </a>
              <img
                className="enterProjectLeft"
                src={'/img/homeAssets/wekan.webp'}
              />
            </div>
            <div className="col-md-6 projectWireflow">
              <h4 className="enterProjectRight">WireFlow</h4>
              <h5 className="enterProjectRight">
                Easiest user flow chart tool for real-time collaborative work.
              </h5>
              <a
                href="https://wireflow.co/"
                className="visitSite enterProjectRight"
                target="_blank"
              >
                Visit site
              </a>
              <img
                className="enterProjectRight"
                src={'/img/homeAssets/wireflow.webp'}
              />
            </div>
            <div className="col-md-12 projectWekan">
              <div className="col-md-8 onlyDesktop">
                <img
                  className="enterProjectBottom"
                  src={'/img/homeAssets/automatio.webp'}
                />
              </div>
              <div className="projectWekanTxt col-md-4">
                <h4 className="enterProjectBottom">Automatio.co</h4>
                <h5 className="enterProjectBottom">
                  Web Automation without coding and in just a few clicks.
                </h5>
                <a
                  href="https://automatio.co/"
                  className="visitSite enterProjectBottom"
                  target="_blank"
                >
                  Visit site
                </a>
              </div>
              <div className="col-md-8 onlyMobile">
                <img
                  className="enterProjectBottom"
                  src={'/img/homeAssets/automatio.webp'}
                />
              </div>
            </div>
            <div className="col-md-12 projectMoonly">
              <div className="projectMoonlyTxt col-md-4">
                <h4 className="enterProjectBottom">Moonly</h4>
                <h5 className="enterProjectBottom">
                  Moonly is a Google Chrome extension and web app that shows
                  curated content upon opening Chrome or a new tab.
                </h5>
                <a
                  href="https://moon.ly/"
                  className="visitSite enterProjectBottom"
                  target="_blank"
                >
                  Visit site
                </a>
              </div>
              <div className="col-md-8">
                <img
                  className="enterProjectBottom"
                  src={'/img/homeAssets/moonly.webp'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
