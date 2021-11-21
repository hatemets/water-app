import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

import Title from '../help/Title';
import Notification from '../help/Notification';
import { ChevronLeft } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Notifications = () => (
	<>
		<Title name="Notifications" />

		<div id="back-wrapper">
			<Link to='/'><ChevronLeft id="back-button" variant="primary"/></Link>
		</div>


		<Notification timeStamp="5.34 PM" isTop={true} faucet="Shower" time={13} power={53.4} temp={28.3} amount={5.3} />
		<Notification timeStamp="4.59 PM" faucet="Washing Machine" time={125} power={138.4} temp={52.0} amount={32} />
		<Notification timeStamp="2.21 PM" faucet="Toilet" time={0.5} power={5.3} temp={18} amount={0.75} />
	</>
);

export default Notifications;
