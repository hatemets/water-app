import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

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

				<Row className="line-tight">
					<Col>
						<Card.Text style={{ marginBottom: 0 }}>
							Time spent
						</Card.Text>

						<Card.Text style={{ color: "red" }}>
							<span className="showcase-text">15</span>min
						</Card.Text>
					</Col>

					<Col>
						<Card.Text style={{ marginBottom: 0 }}>
							Regional average
						</Card.Text>

						<Card.Text style={{ color: "red" }}>
							<span className="showcase-text">25</span>min
						</Card.Text>
					</Col>
				</Row>

				<Row className="line-tight" style={{ marginTop: 10 }}>
					<Col>
						<Card.Text className="margin-bottom-zero" style={{ fontSize: 15 }}>
							Water Consumption
						</Card.Text>

						<Card.Text className="red-text">
							<span className="showcase-text">65</span>L
						</Card.Text>
					</Col>

					<Col >
						<Card.Text className="margin-bottom-zero">
							Regional average
						</Card.Text>

						<Card.Text className="red-text">
							<span className="showcase-text">85</span>L
						</Card.Text>
					</Col>
				</Row>
			</Card.Body>
		</Card>

		<Row>
			<Col style={{ paddingRight: 7}}>
				<Card>
					<Card.Body>
						<Card.Title className="margin-bottom-zero" style={{ fontWeight: "bold", fontSize: 20 }}>Leaderboard Position</Card.Title>
						<Card.Text className="center-text red-text">
							<span className="showcase-text-large">12</span>th
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
			<Col style={{ paddingLeft: 7}}>
				<Card style={{ height: "100%" }}>
					<Card.Body>
						<Card.Title style={{ fontWeight: "bold", fontSize: 20 }}>Most water used at</Card.Title>
						<Card.Text className="center-text red-text">
							<span className="showcase-text-large">6</span>PM
						</Card.Text>
					</Card.Body>
				</Card>
			</Col>
		</Row>

	</Container>
);

export default App;
