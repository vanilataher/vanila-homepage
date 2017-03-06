import React from 'react'
// layouts
import Blank from '../components/layouts/Blank.js';
// views
import Home from '../views/Home.js';
import Client from '../views/Client.js';

import { Route, Router, IndexRedirect, IndexRoute} from 'react-router';

export default (
	<Router>
		<Route path={"/"} component={Blank}>
      <IndexRoute component={Home}/>
      <Route path={"client"} component={Client} />
    </Route>
	</Router>
);
