import React, { Component } from 'react';
import Helmet from 'react-helmet';

class HelmetTest extends React.Component {
  render() {
    return (
      <div style={{height: '200px'}}>
        <Helmet
          title="my-title"
          meta={[
            { name: 'description', content: 'super-uber application' }
          ]} />
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default HelmetTest;
