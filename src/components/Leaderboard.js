import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import LeaderboardItem from '../help/LeaderboardItem';
import Title from '../help/Title';

const Leaderboard = () => (
	<>
		<Title name="Leaderboard" />

		<div id="current-page">Leaderboard</div>

		<Card style={{ boxShadow: "none" }}>
			<Card.Body className="line-tight">
				<Card.Title style={{ color: "navy", fontWeight: "bold", textAlign: "center", marginBottom: 0 }}>POSITION</Card.Title>
				<Card.Text style={{ color: "navy", fontWeight: "bold", textAlign: "center", paddingTop: 0 }}><span style={{ fontSize: 52, color: "black" }}>7</span>th</Card.Text>
			</Card.Body>
		</Card>

		<Card className="list">
			<Card.Body>
				<Card.Title style={{ fontWeight: "bold", marginBottom: -5 }}>Leadership Board</Card.Title>
				<hr />

				<Row style={{ marginBottom: 10 }}>
					<Col style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
						<Card.Text style={{ fontWeight: "bold", fontSize: 15 }}>
							Username
						</Card.Text>
					</Col>

					<Col>
						<Card.Text style={{ fontWeight: "bold", fontSize: 15, lineHeight: 1.15 }}>
							Daily Water Consumption
						</Card.Text>
					</Col>
				</Row>

				<LeaderboardItem name="Jake" place={1} waterAmount={93} />
				<LeaderboardItem name="Jessica" place={2} waterAmount={102} />
				<LeaderboardItem name="David" place={3} waterAmount={107} />
				<LeaderboardItem name="James" place={4} waterAmount={112} />
				<LeaderboardItem name="Maddie" place={5} waterAmount={131} />
				<LeaderboardItem name="Rebecca" place={6} waterAmount={147} />
				<LeaderboardItem name="Arnold" place={7} waterAmount={182} />
				<LeaderboardItem name="John" place={8} waterAmount={238} />
				<LeaderboardItem name="Jack" place={9} waterAmount={308} />
				<LeaderboardItem name="Angelica" place={10} waterAmount={354} />

			</Card.Body>
		</Card>

	</>
);

export default Leaderboard;
