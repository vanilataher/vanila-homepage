import React from 'react';
import { Route, Router, IndexRedirect, IndexRoute, Link } from 'react-router';
import Contact from '../Contact/Contact';

class Footer extends React.Component {
  render() {
    return (
        <div id="contact" className="row rowFooter">
        <h2 className="text-center enterFooter">We believe that <strong>success project</strong><br></br> comes with success team</h2>
        <h3 className="text-center enterFooter">
          Start your project today and get fair estimation
        </h3>
        <Contact />
          <div className="companyInfo">
            <br/>
            <br/>
            Vanila.io
            <br/>
            <br/>
            2647 Edgewater Ave<br/>
          New Smyrna Beach, FL 32168<br/>
        United States<br/>
      <br/><br/>
            (386) 243-9135
          </div>
      </div>
    );
  }
}

export default Footer;
