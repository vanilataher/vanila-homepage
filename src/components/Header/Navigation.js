import React from 'react';
import { Route, Router, IndexRedirect, IndexRoute, Link } from 'react-router';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
      var audio = document.getElementById('audio');
      audio.volume = 0.1;
      audio.play();
  }
  onClickPlay () {
    var clickSound = document.getElementById('clickSound');
    clickSound.volume = 0.6;
    clickSound.play();
  }
  render() {
    return (
      <nav className="navbar navbar-default">
        <audio id="audio" src="http://front-end-noobs.com/jecko/assets/sound4.mp3"></audio>
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#"><img src={require('../../../public/img/homeAssets/logo.png')}/></a>
            <audio id="clickSound" src="http://front-end-noobs.com/jecko/assets/click.ogg"></audio>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="https://lab.vanila.io/" target="_blank" onClick={this.onClickPlay}>Lab</a></li>
              <li><a href="https://links.vanila.io/" target="_blank" onClick={this.onClickPlay}>Community links</a></li>
              <li><a href="https://blog.vanila.io/" target="_blank" onClick={this.onClickPlay}>Blog</a></li>
              <li><a href="#contact" className="aContact" onClick={this.onClickPlay}><strong>Start Project</strong></a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
