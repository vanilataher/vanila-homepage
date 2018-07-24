import React from 'react';
import { Route, Router, IndexRedirect, IndexRoute, Link } from 'react-router';

class CTA extends React.Component {
  onClickPlay () {
    var clickSound = document.getElementById("clickSound");
    clickSound.volume = 0.6;
    clickSound.play();
  }
  render() {
    return (
      <div className="row rowCTA">
        <audio id="clickSound" src="https://vanila.io/sound/click.ogg"></audio>
        <div className="col-md-4 text-left">
          <img className="enterLeft-cta" src={require('../../../public/img/homeAssets/knife.png')} />
        </div>
        <div className="col-md-4 text-center example">
          <h2 className="enterCta">Do you have an <strong>idea</strong> for <br></br>your next project ?</h2>
          <p className="enterCta">Tell us about it and will provide you with the right <strong>solution</strong></p>
          <a href="#contact" className="btn btn-primary enterCta aContact" onClick={this.onClickPlay}>Get started</a>
        </div>
        <div className="col-md-4 text-right">
          <img className="enterRight-cta" src={require('../../../public/img/homeAssets/wallet.png')} />
        </div>
      </div>
    );
  }
}

export default CTA;
