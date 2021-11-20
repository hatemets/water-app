import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

import { Card, Col, Row } from 'react-bootstrap';
import { BellFill } from 'react-bootstrap-icons';

const Notification = ({ isTop=false, timeStamp, faucet, time, power, temp, amount }) => (
	<Card className={ isTop ? "top-card notification" : "notification" }>
		<Card.Body>
			<Card.Title className="notification-title" style={{ fontSize: 15 }}><BellFill className="notification-bell" />{ faucet }<span className="timestamp" >{ timeStamp }</span></Card.Title>

			<Row className="notification-values">
				<Col>
					<Card.Text style={{ fontWeight: "bold" }}>Time spent</Card.Text>
					<Card.Text><span style={{ fontWeight: "bold", fontSize: "1.4em" }}>{ time }</span>min</Card.Text>
				</Col>
				<Col>
					<Card.Text style={{ fontWeight: "bold" }}>Power cons.</Card.Text>
					<Card.Text><span style={{ fontWeight: "bold", fontSize: "1.4em" }}>{ power }</span>W</Card.Text>
				</Col>
				<Col>
					<Card.Text style={{ fontWeight: "bold" }}>Avg. Temp</Card.Text>
					<Card.Text><span style={{ fontWeight: "bold", fontSize: "1.4em" }}>{ temp }</span>°C</Card.Text>
				</Col>
				<Col>
					<Card.Text style={{ fontWeight: "bold" }}>Amount used</Card.Text>
					<Card.Text><span style={{ fontWeight: "bold", fontSize: "1.4em" }}>{ amount }</span>L</Card.Text>
				</Col>
			</Row>
		</Card.Body>
	</Card>
);

export default Notification;
