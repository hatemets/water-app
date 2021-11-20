import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import Container from 'react-bootstrap/Container';

import Navigation from './components/Navigation.js';
import Dashboard from './components/Dashboard.js';
import Leaderboard from './components/Leaderboard.js';
import UsageTimes from './components/UsageTimes.js';
import Activities from './components/Activities.js';
import Faucets from './components/Faucets.js';
import Toilet from './components/Toilet.js';

const App = () => {
	return (
		<Container className="p-3 main-wrapper">

			<Router>
				<Navigation />

				<Switch>
					<Route exact path="/" component={Dashboard} />
					<Route path="/usage-times" component={UsageTimes} />
					<Route path="/leaderboard" component={Leaderboard} />
					<Route path="/activities" component={Activities} />
					<Route exact path="/faucets" component={Faucets} />

					{/* Faucet subpaths */}	
					<Route path="/faucets/toilet" component={Toilet} />
				</Switch>
			</Router>

		</Container>
	)
};


export default App;
