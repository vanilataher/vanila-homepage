import React from 'react';
import Navigation from './Navigation';
import { Route, Router, IndexRedirect, IndexRoute, Link } from 'react-router';
import Client from '../../views/Client.js';


class Header extends React.Component {
  constructor() {
      super();
  }

  handleClick(){
  	var audio = $("#clickSound")[0];
  	  audio.play();
}
  render() {
    return (
      <div className="headerIntro">
        <Navigation />
        <div className="row rowHeader">
        <div className="container">
          <div className="col-md-7">
            <h1 className="enterLeft-header">Web & Mobile <strong>App Development</strong><br></br> for your Business or Startup.</h1>
            <h2 className="enterLeft-header">For a better productivity we build various tools <br></br>which help you to lead project better.</h2>
            <p className="enterLeft-header">Have project for us, small or big our <strong>team of experts </strong>will handle it for you. <br></br>Click in button below <strong>to start your first project</strong></p>
            <div className="buttonGroup enterLeft-header">
            <audio id="clickSound">
      				<source src="http://mihailo.centarzatalente.com/sounds/click.mp3"></source>
      				<source src="http://mihailo.centarzatalente.com/sounds/click.ogg"></source>
      				Audio not supported.
      			</audio>
              <Link to="/Client">
              <button id="button" className="btn btn-lg btn-primary btnGetStarted" onClick={this.handleClick.bind(this)}>Get started</button>
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
