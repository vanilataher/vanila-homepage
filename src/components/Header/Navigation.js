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
        <audio id="audio" src={("../../audio/click.ogg")}></audio>
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#"><img src={('../../img/homeAssets/logo.webp')}/></a>
            <audio id="clickSound" src={("../../audio/click.ogg")}></audio>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav navbar-right">
              <li><a href="https://community.vanila.io/" target="_blank" onClick={this.onClickPlay}>Join Community</a></li>
              <li><a href="https://blog.vanila.io/" target="_blank" onClick={this.onClickPlay}>Blog</a></li>
              <li><a href="https://uxstore.com/" target="_blank" onClick={this.onClickPlay}>UX Store</a></li>
              <li><a href="#contact" className="aContact" onClick={this.onClickPlay}><strong>Contact Us</strong></a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
