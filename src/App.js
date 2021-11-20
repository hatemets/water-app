import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Navigation from './components/Navigation.js';
import WaterConsumptionGraph from './components/WaterConsumptionGraph.js';


const App = () => (
	<Container className="p-3 main-wrapper">
		<Navigation />

		<Card className="top-card">
			<Card.Body>
				<Card.Title>Average water consumption</Card.Title>
				<WaterConsumptionGraph />
			</Card.Body>
		</Card>

		<Card>
			<Card.Body>
				<Card.Title style={{ fontWeight: "bold", marginBottom: 3 }}>Recent Activity</Card.Title>
				<Card.Text>
					We hope you had a nice shower!
				</Card.Text>

				<Row style={{ lineHeight: 1.2 }}>
					<Col>
						<Card.Text style={{ marginBottom: 0 }}>
							Time spent
						</Card.Text>

						<Card.Text style={{ color: "red" }}>
							<span style={{ fontSize: 32, fontWeight: "bold", color: "black" }}>15</span>min
						</Card.Text>
					</Col>

					<Col>
						<Card.Text style={{ marginBottom: 0 }}>
							Regional average
						</Card.Text>

						<Card.Text style={{ color: "red" }}>
							<span style={{ fontSize: 32, fontWeight: "bold", color: "black" }}>25</span>min
						</Card.Text>
					</Col>
				</Row>

				<Row style={{ lineHeight: 1.2, marginTop: 10 }}>
					<Col>
						<Card.Text style={{ fontSize: 15, marginBottom: 0 }}>
							Water Consumption
						</Card.Text>

						<Card.Text style={{ color: "red" }}>
							<span style={{ fontSize: 32, fontWeight: "bold", color: "black" }}>65</span>L
						</Card.Text>
					</Col>

					<Col >
						<Card.Text style={{ marginBottom: 0 }}>
							Regional average
						</Card.Text>

						<Card.Text style={{ color: "red" }}>
							<span style={{ fontSize: 32, fontWeight: "bold", color: "black" }}>85</span>L
						</Card.Text>
					</Col>
				</Row>
			</Card.Body>
		</Card>

		<Row>
			<Col style={{ paddingRight: 7}}>
				<Card>
					<Card.Body>
						<Card.Title style={{ marginBottom: 0, fontWeight: "bold", fontSize: 20 }}>Leaderboard Position</Card.Title>
						<Card.Text style={{ textAlign: "center", color: "red" }}>
							<span style={{ fontSize: 48, fontWeight: "bold", color: "black" }}>12</span>th
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
			<Col style={{ paddingLeft: 7}}>
				<Card>
					<Card.Body>
						{/* TODO: Fix hardcoded margin bottom */}	
						<Card.Title style={{ marginBottom: 4, fontWeight: "bold", fontSize: 18 }}>Most water used at</Card.Title>
						<Card.Text style={{ textAlign: "center", color: "red" }}>
							<span style={{ fontSize: 48, fontWeight: "bold", color: "black" }}>6</span>PM
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		</Row>

	</Container>
);

export default App;
