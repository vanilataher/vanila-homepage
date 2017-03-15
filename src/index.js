import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './config/routes';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// Css Files
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './../node_modules/font-awesome/css/font-awesome.css';
import './../node_modules/animate.css/animate.min.css';
import '../public/styles/style.css';
import '../public/styles/home.css';


class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>{routes}</Router>
        );
    }
}
ReactDOM.render(<App/>, document.getElementById('root'));
