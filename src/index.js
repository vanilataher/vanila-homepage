import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './config/routes';

// Css Files
import './styles/home.css';

// https://stackoverflow.com/a/5800856
function autoAlt() {
  for (let i = 0; i < document.getElementsByTagName('img').length; i++) {
    document
      .getElementsByTagName('img')
      [i].setAttribute('alt', document.getElementsByTagName('img')[i].src);
  }
}

class App extends React.Component {
  componentDidMount() {
    autoAlt();
  }
  render() {
    return <Router history={browserHistory}>{routes}</Router>;
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
