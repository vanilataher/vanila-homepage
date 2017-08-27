import React from 'react'
// layouts
import Blank from '../components/layouts/Blank.js';
// views
import Home from '../views/Home.js';
import Meteor from '../views/Meteor.js';
import MobileDev from '../views/MobileDev.js';
import Terms from '../views/Terms.js';
import HelmetTest from '../views/HelmetTest.js';
import { Route, Router, IndexRedirect, IndexRoute} from 'react-router';

export default (
	<Router>
		<Route path={"/"} component={Blank}>
      <IndexRoute component={Home}/>
      <Route path={"index"} component={Home} />
			<Route path={"meteorjs"} component={Meteor} />
			<Route path={"mobile-app-development"} component={MobileDev} />
			<Route path={"terms"} component={Terms} />
			<Route path={"helmet-test"} component={HelmetTest} />
    </Route>
	</Router>
);
