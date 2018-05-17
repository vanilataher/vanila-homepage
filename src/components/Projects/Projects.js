import React from 'react';
import sr, {leftConf, rightConf} from '../sr';

class Projects extends React.Component {
  componentDidMount(){
    sr.reveal(".enterProjectLeft",leftConf,80);
    sr.reveal(".enterProjectRight",{origin:"right",distance:"100%",duration:1e3,scale:1,delay:800},80);
    sr.reveal(".enterProjectBottom",{origin:"bottom",distance:"100%",duration:1e3,scale:1,delay:400},80);;
  }
  render() {
    return (
      <div id="projects" className="rowProjects">
        <div className="row">
          <div className="container">
            <div className="col-md-6 projectAutomatio">
              <h4 className="enterProjectLeft">Wekan (Trello like)</h4>
              <h5 className="enterProjectLeft">
                Wekan is Trello like Open Source app built with Meteor.js.
                <br />
                <br />
                It's real time and you can import your current Trello board to
                it and have your own self hosted organization board.
              </h5>
              <img
                className="enterProjectLeft"
                src={require('../../../public/img/homeAssets/wekan.png')}
              />
            </div>
            <div className="col-md-6 projectWireflow">
              <h4 className="enterProjectRight">WireFlow</h4>
              <h5 className="enterProjectRight">
                Easiest user flow chart tool for real-time collaborative work.
              </h5>
              <img
                className="enterProjectRight"
                src={require('../../../public/img/homeAssets/wireflow.png')}
              />
            </div>
            <div className="col-md-12 projectWekan">
              <div className="col-md-8 onlyDesktop">
                <img
                  className="enterProjectBottom"
                  src={require('../../../public/img/homeAssets/automatio.png')}
                />
              </div>
              <div className="projectWekanTxt col-md-4">
                <h4 className="enterProjectBottom">Web Automation Tool</h4>
                <h5 className="enterProjectBottom">
                  Web Automation without coding and in just a few clicks.
                </h5>
              </div>
              <div className="col-md-8 onlyMobile">
                <img
                  className="enterProjectBottom"
                  src={require('../../../public/img/homeAssets/automatio.png')}
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
