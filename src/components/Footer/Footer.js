import React from 'react';
import { Route, Router, IndexRedirect, IndexRoute, Link } from 'react-router';
import Client from '../../views/Client.js';

class Footer extends React.Component {
  render() {
    return (
        <div className="row rowFooter">
        <h2 className="text-center enterFooter">We believe that <strong>success project</strong><br></br> comes with success team</h2>
        <h3 className="text-center enterFooter">
          Start your project today and get fair estimation
        </h3>
        <div className="buttonGroup enterFooter">
          <Link to="Client" className="btn btn-primary btnGetStarted">Get started</Link><span>or</span><button className="btn btn-default btnWatchVideo">Watch video</button>
        </div>
      </div>
    );
  }
}

export default Footer;
