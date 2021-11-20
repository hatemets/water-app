import React, {useEffect, useState} from 'react';
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

const success = "success"
const warning = "warning"

const App = () => {

  const [streak, setStreak] = useState(0);
  console.log(streak)

  useEffect(() => {
    console.log("listening to db")
    firebase
      .database("https://junction2021-cf61c-default-rtdb.europe-west1.firebasedatabase.app/")
      .ref('test')
      .on('child_changed', (data) => {
          const values = data.val();
          let type = ''
          let message = ''
          setStreak(streak+1)
          if (values.time < 2) {
            type = warning
            message = 'You washed your hands only for ' + values.time + " seconds! Recommended amount is 20 seconds"
          } else if (values.time < 30) {
            type = success
            message = 'Washing time was ' + values.time + " seconds! No water wasted"
          }

          let streakBroken = false;
          let currentStreak = streak;
          setStreak(1)
          console.log(type)
          if (type == success) {
            setStreak(streak + 1)
            console.log(currentStreak)
          } else {
            if (currentStreak > 0) {
              streakBroken = true
            }
            setStreak(0)
          }
          console.log(currentStreak, streakBroken)

          if (streakBroken) {
            NotificationManager.error("Streak broken!", "Streak was " + currentStreak)
          }
          
          if (values.type == "handwash") {
            if (type == 'Warning') {
              NotificationManager.warning('Did you wash properly?', message, 5000);
            } else {
              NotificationManager.success('Clean hands!', message, 5000);
            }
          } else if (values.type == "dishwash") {
            NotificationManager.success('Clean plates!', message, 5000);
          }
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
