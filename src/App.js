import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import firebase from "./firebase"
import "firebase/database";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Container from 'react-bootstrap/Container';

// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

import Navigation from './components/Navigation.js';
import Dashboard from './components/Dashboard.js';
import Activities from './components/Activities.js';
import UsageTimes from './components/UsageTimes.js';

const App = () => {

  useEffect(() => {
    console.log("listening to db")
    firebase
      .database("https://junction2021-cf61c-default-rtdb.europe-west1.firebasedatabase.app/")
      .ref('test')
      .on('child_changed', (data) => {
          const values = data.val();
          console.log(values)
          NotificationManager.success('Success message', JSON.stringify(values, null, 2));
      });
  }, [])

	return (
		<Container className="p-3 main-wrapper">

			<Router>
			<Navigation />
				<div>
					<Switch>
						<Route exact path="/" component={Dashboard}>
							<Dashboard />
						</Route>
						<Route path="/usage-times" component={UsageTimes}>
							<UsageTimes />
						</Route>
						<Route path="/activities" component={Activities}>
							<Activities />
						</Route>
					</Switch>
				</div>
			</Router>
      <NotificationContainer />

		</Container>
	)
};


export default App;
