import React from 'react';
// layouts
import Blank from '../components/layouts/Blank.js';
// views
import Loadable from 'react-loadable';

function Loading(props) {
  if (props.error) {
    return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
  } else {
    return <div>Loading...</div>;
  }
}

const Home = Loadable({
  loader: () => import('../views/Home.js'),
  loading: Loading
});
const Meteor = Loadable({
  loader: () => import('../views/Meteor.js'),
  loading: Loading
});
const MobileDev = Loadable({
  loader: () => import('../views/MobileDev.js'),
  loading: Loading
});
const Terms = Loadable({
  loader: () => import('../views/Terms.js'),
  loading: Loading
});
const HelmetTest = Loadable({
  loader: () => import('../views/HelmetTest.js'),
  loading: Loading
});
import { Route, Router, IndexRedirect, IndexRoute } from 'react-router';

export default (
  <Router>
    <Route path={'/'} component={Blank}>
      <IndexRoute component={Home} />
      <Route path={'index'} component={Home} />
      <Route exact path='/index.html' component={Home} />
      <Route path={'meteorjs'} component={Meteor} />
      <Route path={'mobile-app-development'} component={MobileDev} />
      <Route path={'terms'} component={Terms} />
      <Route path={'helmet-test'} component={HelmetTest} />
    </Route>
  </Router>
);
