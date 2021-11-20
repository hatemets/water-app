import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import WaterConsumptionGraph from './WaterConsumptionGraph.js';
import FaucetData from './FaucetData';
import { ChevronLeft } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

const Toilet = () => {


	return (
		<>
			<div id="back-wrapper">
				<Link to='/faucets'><ChevronLeft id="back-button" variant="primary"/></Link>
			</div>

			<Card className="top-card">
				<Card.Body>
					<Card.Title>Toilet water</Card.Title>
					<WaterConsumptionGraph />
				</Card.Body>
			</Card>
		</>
	)
};

export default Toilet;
