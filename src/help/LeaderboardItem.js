import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const LeaderboardItem = ({ name, place, waterAmount }) => {
	return (
		<Row>
			<Col className="list-col"> 
				<Card.Text className="list-item-wrapper">
					<span className="list-item-text">{ place }.</span> { name }
				</Card.Text>
			</Col>

			<Col>
				<Card.Text style={{ marginBottom: 0 }}>
					{ waterAmount }L
				</Card.Text>
			</Col>
		</Row>
	)
};

export default LeaderboardItem;
