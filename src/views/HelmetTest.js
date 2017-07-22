import React, { Component } from 'react';
import { Helmet } from "react-helmet";

class HelmetTest extends React.Component {
  render() {
    return (
      <div style={{height: '200px'}}>
        <Helmet>
            <title>Title test</title>
            <meta name="description" content="test desc" />
            <meta name="og:image" content="test image" />
          </Helmet>
        <p>Test page</p>
      </div>
    );
  }
}

export default HelmetTest;
