import React from 'react';
import TechCards from './TechCards';
import sr, {leftConf, rightConf} from '../sr';

class Tech extends React.Component {
  componentDidMount(){
    sr.reveal(".enterLeft-t",leftConf,80);
    sr.reveal(".rowTech li:nth-child(odd)",{origin:"right",distance:"100%",duration:1e3,scale:.5,delay:500},250);
    sr.reveal(".rowTech li:nth-child(even)",{origin:"left",distance:"100%",duration:1e3,scale:.5,delay:500},250);
  }
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
