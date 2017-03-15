import React from 'react';
import Navigation from './Navigation';
import { Route, Router, IndexRedirect, IndexRoute, Link } from 'react-router';
import Client from '../../views/Client.js';


class Header extends React.Component {
  constructor() {
    super();
  }

  handleClick(){
    var audio = document.getElementById("audio");
    audio.play();
  }

  render() {
    return (
      <div id="zoomScale" className="headerIntro">
        <Navigation />
        <div className="row rowHeader">
        <div className="container">
          <div className="col-md-7">
            <h1 className="enterLeft-header">Web & Mobile <strong>App Development</strong><br></br> for your Business or Startup.</h1>
            <h2 className="enterLeft-header">For a better productivity we build various tools <br></br>which help you to lead project better.</h2>
            <p className="enterLeft-header">Have project for us, small or big our <strong>team of experts </strong>will handle it for you. <br></br>Click in button below <strong>to start your first project</strong></p>
            <div className="buttonGroup enterLeft-header">
            <audio id="audio" src="http://mihailo.centarzatalente.com/sounds/click.ogg"></audio>
              <Link to="/Client">
              <button className="btn btn-lg btn-primary btnGetStarted" id="button" onClick={this.handleClick.bind(this)}>Get started</button>
              </Link> or <button className="btn btn-lg btn-default btnWatchVideo">Watch video</button>
            </div>
          </div>
          <div className="col-md-5"><img className="enterRight-header" src={require('../../../public/img/homeAssets/office.png')} /></div>
        </div>
        </div>
      </div>
    );
  }
}

export default Header;
