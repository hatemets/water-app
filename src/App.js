import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import {
	BrowserRouter as Router,
	Switch,
	Route
} from "react-router-dom";

import Container from 'react-bootstrap/Container';

import Activities from './components/Activities.js';
import Dashboard from './components/Dashboard.js';
import Faucets from './components/Faucets.js';
import Leaderboard from './components/Leaderboard.js';
import Navigation from './components/Navigation.js';
import Notifications from './components/Notifications';
import UsageTimes from './components/UsageTimes.js';

// Individual Faucets (depending on an individual household)
import DishWasher from './components/DishWasher.js';
import WashingMachine from './components/WashingMachine.js';
import Shower from './components/Shower.js';


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
					<Route path="/notifications" component={Notifications} />
					<Route exact path="/faucets" component={Faucets} />

					{/* Faucet subpaths */}	
					<Route path="/faucets/dishwasher" component={DishWasher} />
					<Route path="/faucets/shower" component={Shower} />
					<Route path="/faucets/washing-machine" component={WashingMachine} />
				</Switch>
			</Router>

		</Container>
	)
};


export default App;
