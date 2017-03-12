import React from 'react';

class Javascript extends React.Component {
  render() {
    return (
      <div className="aboutJavascript">
        <div className="row">
        <div className="container">
          <div className="col-md-6 aboutJavascript-img"><img className="enterLeft-js" src={require('../../../public/img/homeAssets/js-dev.png')} /></div>
          <div className="col-md-6 aboutJavascript-txt">
            <h2 className="enterRight-js"><strong>Power of JavaScript</strong></h2>
            <p className="enterRight-js">One code everywhere. You don't need to hire Web, IOS & <br></br>Android developers to have both Web and Mobile experience.</p>
             <br></br>
            <p className="enterRight-js">Using power of JavaScript and technologies like React Native, <br></br>Meteor.js, you will cover your mobile app development needs.</p>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default Javascript;
