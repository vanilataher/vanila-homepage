import React from 'react';

class AppDev extends React.Component {
  render() {
    return (
      <div className="aboutAppDev">
        <div className="container">
          <div className="col-md-6 aboutAppDev-txt">
            <h2 className="enterLeft-dev"><strong>App Development</strong></h2>
            <p className="enterLeft-dev">Vanila crew is in love with Meteor.js, which is the latest technology based <br></br>on JavaScript (Node.js).</p>
             <br></br>
            <p className="enterLeft-dev">It makes your applications fast, real-time, scalable and able to work on all<br></br> modern browsers and devices</p>
          </div>
          <div className="col-md-6 aboutAppDev-img"><img className="enterRight-dev" src={require('../../../public/img/homeAssets/app-dev.png')} /></div>
        </div>
        </div>
    );
  }
}

export default AppDev;
