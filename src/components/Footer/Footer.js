import React from 'react';

class Footer extends React.Component {
  render() {
    return (
        <div className="row rowFooter">
        <h2 className="text-center example">We believe that <strong>success project</strong><br></br> comes with success team</h2>
        <h3 className="text-center">
          Start your project today and get fair estimation
        </h3>
        <div className="buttonGroup">
          <button className="btn btn-primary btnGetStarted">Get started</button><span>or</span><button className="btn btn-default btnWatchVideo">Watch video</button>
        </div>
      </div>
    );
  }
}

export default Footer;
