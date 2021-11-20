import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListItem from './ListItem';

const Leaderboard = () => (
	<>
		<Card className="top-card" style={{ boxShadow: "none" }}>
			<Card.Body className="line-tight">
				<Card.Title style={{ color: "red", fontWeight: "bold", textAlign: "center", marginBottom: 0 }}>POSITION</Card.Title>
				<Card.Text style={{ color: "red", fontWeight: "bold", textAlign: "center", paddingTop: 0 }}><span style={{ fontSize: 52, color: "black" }}>7</span>th</Card.Text>
			</Card.Body>
		</Card>

		<Card className="list">
			<Card.Body>
				<Card.Title style={{ fontWeight: "bold", marginBottom: -5 }}>Leadership Board</Card.Title>
				<hr />

				<Row style={{ marginBottom: 10 }}>
					<Col style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
						<Card.Text style={{ fontWeight: "bold", fontSize: 14 }}>
							Username
						</Card.Text>
					</Col>

					<Col>
						<Card.Text style={{ fontWeight: "bold", fontSize: 14, lineHeight: 1.15 }}>
							Daily Water Consumption
						</Card.Text>
					</Col>
				</Row>

				<ListItem name="Jake" place={1} waterAmount={93} />
				<ListItem name="Jessica" place={2} waterAmount={102} />
				<ListItem name="David" place={3} waterAmount={107} />
				<ListItem name="James" place={4} waterAmount={112} />
				<ListItem name="Maddie" place={5} waterAmount={131} />
				<ListItem name="Rebecca" place={6} waterAmount={147} />
				<ListItem name="Arnold" place={7} waterAmount={182} />
				<ListItem name="John" place={8} waterAmount={238} />
				<ListItem name="Jack" place={9} waterAmount={308} />
				<ListItem name="Angelica" place={10} waterAmount={354} />

			</Card.Body>
		</Card>

	</>
);

export default Leaderboard;
