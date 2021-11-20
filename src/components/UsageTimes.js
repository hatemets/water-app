import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

import { Card, Col, Row } from 'react-bootstrap';
import UsageItem from '../help/UsageItem';
import Title from '../help/Title';

const UsageTimes = () => (
	<>
		<Title name="Usage Times" />

		<Card className="top-card" style={{ boxShadow: "none" }}>
			<Card.Body className="line-tight">
				<Card.Title style={{ fontWeight: "regular", textAlign: "center", marginBottom: 0 }}>Most water used at</Card.Title>
				<Card.Text style={{ color: "navy", fontWeight: "bold", textAlign: "center", paddingTop: 0 }}><span style={{ fontSize: 52, color: "black" }}>6</span>PM</Card.Text>
			</Card.Body>
		</Card>

		<Card className="list" style={{ lineHeight: 2.2 }}>
			<Card.Body>
				<Card.Title style={{ fontWeight: "bold", marginBottom: -5 }}>Highest Water Usage Time Periods</Card.Title>
				<hr />

				<Row style={{ marginBottom: 10 }}>
					<Col style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
						<Card.Text style={{ fontWeight: "bold", fontSize: 15 }}>
							Weekday
						</Card.Text>
					</Col>

					<Col>
						<Card.Text style={{ fontWeight: "bold", fontSize: 15 }}>
							Time period
						</Card.Text>
					</Col>
				</Row>

				<UsageItem day="Monday" start="8AM" end="9AM" />
				<UsageItem day="Tuesday" start="8AM" end="9AM" />
				<UsageItem day="Wednesday" start="8AM" end="9AM" />
				<UsageItem day="Thursday" start="7AM" end="8AM" />
				<UsageItem day="Friday" start="6PM" end="7PM" />
				<UsageItem day="Saturday" start="9PM" end="10PM" />
				<UsageItem day="Sunday" start="10PM" end="11PM" />

			</Card.Body>
		</Card>

	</>
);

export default UsageTimes;
