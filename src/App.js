import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import firebase from "./firebase.js"
import "firebase/database";
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';

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

// Individual Faucets (depending on an individual household)
import Toilet from './components/Toilet.js';
import WashingMachine from './components/WashingMachine.js';
import Shower from './components/Shower.js';
import Notifications from './components/Notifications';

const success = "success"
const warning = "warning"
const error = "error"

let streak = 0

const incrementStreak = () => {
  streak =+ streak + 1
  console.log(streak)
}
const resetStreak = () => {
  streak = 0
  console.log(streak)
}

const App = () => {

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
          if (values.time < 15) {
            type = warning
            message = 'You washed your hands only for ' + values.time + " seconds! Recommended duration is 20 seconds"
          } else if (values.time < 25) {
            type = success
            message = 'Washing time was ' + values.time + " seconds! No water wasted"
          } else {
            type = warning
            message = 'That took too long, ' + values.time + " seconds! Less water is needed."
          }

          let streakBroken = false;
          let currentStreak = streak;
          if (type == success) {
            incrementStreak();
          } else {
            if (streak > 0) {
              streakBroken = true
            }
            resetStreak();
          }

          if (streakBroken) {
            NotificationManager.error("Streak was " + currentStreak, "Streak broken!")
          }
          
          if (type == warning) {
            NotificationManager.warning(message, 'Did you wash properly?', 5000);
          } else {
            NotificationManager.success(message, 'Clean hands! Streak: ' + streak, 5000);
          }
      });
  }, [])

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
					<Route path="/faucets/toilet" component={Toilet} />
					<Route path="/faucets/shower" component={Shower} />
					<Route path="/faucets/washing-machine" component={WashingMachine} />
				</Switch>
			</Router>
      		<NotificationContainer />

		</Container>
	)
};


export default App;
