import React from 'react';
import TechCards from './TechCards';


class Tech extends React.Component {
  render() {
    return (
        <div className="row rowTech">
        <div className="container">
        <h2 className="text-center  enterLeft-t">We use best <strong>technology</strong><br></br> on the market</h2>
        <h3 className="text-center  enterLeft-t">
          Helping various businesses and startups <br></br>
          to get their idea into reallity
        </h3>
        <TechCards />
          </div>
      </div>
    );
  }
}

export default Tech;
