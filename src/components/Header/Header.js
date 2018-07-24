import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router';


class Header extends React.Component {
  render() {
    return (
      <div id="zoomScale" className="headerIntro">
        <audio id="clickSound" src="http://front-end-noobs.com/jecko/assets/click.ogg"></audio>
        <Navigation />
        <div className="row rowHeader">
        <div className="container">
          <div className="col-md-7">
            <h1 className="enterLeft-header">Web & Mobile <strong>App Development</strong><br></br> for your Business or Startup.</h1>
            <h2 className="enterLeft-header">For a better productivity we build various tools <br></br>which help you to lead your projects better.</h2>
            <p className="enterLeft-header">Have a project for us, small or big, our <strong>team of experts </strong>will handle it for you. <br></br>Click on the button below <strong>to start your first project</strong></p>
            <div className="buttonGroup enterLeft-header">
              <a  href="#contact" className="btn btn-lg btn-primary btnGetStarted aContact" id="button" onClick={this.onClickPlay}>Get started</a>
            </div>
          </div>
          <div className="col-md-5"><img className="enterRight-header" src={require('../../../public/img/homeAssets/home.png')} /></div>
        </div>
        </div>
      </div>
    );
  }
}

export default Header;
