import React from 'react';
import SocialCards from './SocialCards';


class Social extends React.Component {
  render() {
    return (
        <div className="row rowSocials">
        <div className="container containerSocialCards">
        <h2 className="text-left example">We are everywhere</h2>
        <h3 className="text-left">
          Below you can find some of our popular social accounts. Be sure <br></br>
          to follow us and stay up to date with our work.
        </h3>
        </div>
        <SocialCards />
      </div>

    );
  }
}

export default Social;
