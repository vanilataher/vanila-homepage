import React from 'react';
import sr, {leftConf, rightConf} from '../sr';

class AppDev extends React.Component {
  componentDidMount() {
    sr.reveal(".enterRight-dev",rightConf,80);
    sr.reveal(".enterLeft-dev",leftConf,80);
  }
  render() {
    return (
      <div className="aboutAppDev">
        <div className="container">
          <div className="col-md-6 aboutAppDev-txt">
            <h2 className="enterLeft-dev"><strong>App Development</strong></h2>
            <p className="enterLeft-dev">Vanila crew is in love with Meteor.js, which is latest technology based <br></br>on JavaScript (Node.js).</p>
             <br></br>
            <p className="enterLeft-dev">It gives you fast, realtime, scalable applications which work on all <br></br>modern browsers and devices.</p>
          </div>
          <div className="col-md-6 aboutAppDev-img"><img className="enterRight-dev" src={require('../../../public/img/homeAssets/app-dev.png')} /></div>
        </div>
        </div>
    );
  }
}

export default AppDev;
