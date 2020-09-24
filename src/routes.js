import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Main from './pages/Main';
import Crypto from './pages/Crypto';

function Routes() {
	return (
		<Switch>
			<Route exact path="/">
				<Main />
			</Route>
			<Route exact path="/:crypto">
				<Crypto />
			</Route>
		</Switch>
	);
}

export default Routes;
