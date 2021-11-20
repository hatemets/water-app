import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import WaterConsumptionGraph from './WaterConsumptionGraph.js';
import FaucetData from './FaucetData';

const Toilet = () => (
	<>
		<Card className="top-card">
			<Card.Body>
				<Card.Title>Toilet water</Card.Title>
				<WaterConsumptionGraph />
			</Card.Body>
		</Card>

	</>
);

export default Toilet;
