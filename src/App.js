import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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

const App = () => {
	return (
		<Container className="p-3 main-wrapper">

			<Router>
			<Navigation />

				<Switch>
					<Route exact path="/" component={Dashboard}>
						<Dashboard />
					</Route>
					<Route path="/usage-times" component={UsageTimes}>
						<UsageTimes />
					</Route>
					<Route path="/leaderboard" component={Leaderboard}>
						<Leaderboard />
					</Route>
				</Switch>
			</Router>

		</Container>
	)
};


export default App;
