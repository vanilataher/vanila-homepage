import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './config/routes';

// Css Files
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './../node_modules/font-awesome/css/font-awesome.css';
import '../public/styles/home.css';
class App extends React.Component {
  render() {
    return <Router history={browserHistory}>{routes}</Router>;
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
