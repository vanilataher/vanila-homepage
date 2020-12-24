import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory} from 'react-router';
import routes from './config/routes';

// Css Files
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import './styles/home.css';


class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>{routes}</Router>
        );
    }
}
ReactDOM.render(<App/>, document.getElementById('root'));
