import React from 'react';

class CTA extends React.Component {
  render() {
    return (
      <div className="row rowCTA">
        <div className="col-md-4 text-left">
          <img className="enterLeft-cta" src={require('../../../public/img/homeAssets/knife.png')} />
        </div>
        <div className="col-md-4 text-center example">
          <h2 className="enterCta">Do you have <strong>idea</strong> for <br></br>your next project ?</h2>
          <p className="enterCta">Tell us about it, we are glad to listen <br></br>and will provide you with a <strong>feedback</strong></p>
          <button className="btn btn-primary enterCta">Get started</button>
        </div>
        <div className="col-md-4 text-right">
          <img className="enterRight-cta" src={require('../../../public/img/homeAssets/wallet.png')} />
        </div>
      </div>
    );
  }
}

export default CTA;
