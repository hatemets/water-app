import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

import { Card, Col, Row } from 'react-bootstrap';
import FaucetData from '../help/FaucetData';
import Title from '../help/Title';
import Graph from '../help/Graph.js';

import data from '../data/WaterConsumption';


const Dashboard = () => (
	<>
		<Title name="Dashboard" />

		<Graph isTop={true} title="Average water consumption" xLabel="day" yLabel="Water consumed" yUnit="L" data={data} />

		<Card>
			<Card.Body>
				<Card.Title style={{ fontWeight: "bold", marginBottom: 3 }}>Recent Activity</Card.Title>
				<Card.Text>
					We hope you had a nice shower!
				</Card.Text>

				<FaucetData timeSpent={15} timeAvg={25} waterAmount={65} waterAvg={85} />
			</Card.Body>
		</Card>


		<Row>
			<Col style={{ paddingRight: 7 }}>
				<Card>
					<Card.Body style={{ paddingBottom: 5 }}>
						<Card.Title className="margin-bottom-zero" style={{ textAlign: "center", fontWeight: "bold", fontSize: 20, marginBottom: 0 }}>Leaderboard Position</Card.Title>
						<Card.Text className="center-text red-text">
							<span className="showcase-text-large">7</span>th
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
			<Col style={{ paddingLeft: 7}}>
				<Card style={{ height: "100%" }}>
					<Card.Body style={{ paddingBottom: 5 }}>
						<Card.Title style={{ textAlign: "center", fontWeight: "bold", fontSize: 20, marginBottom: 0 }}>Most water used at</Card.Title>
						<Card.Text className="center-text red-text">
							<span className="showcase-text-large">6</span>PM
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		</Row>
	</>
);

export default Dashboard;
