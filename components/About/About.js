import React from 'react';
import AppDev from './AppDev';
import Javascript from './Javascript';
import WebDesign from './WebDesign';

class About extends React.Component {
  render() {
    return (
      <div className="rowAbout">
        <AppDev />
        <Javascript />
        <WebDesign />
      </div>
    );
  }
}

export default About;
