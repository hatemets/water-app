import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const LeaderboardItem = ({ day, start, end }) => {
	return (
		<Row>
			<Col className="list-col"> 
				<Card.Text className="list-item-wrapper">
					{ day }
				</Card.Text>
			</Col>

			<Col>
				<Card.Text style={{ marginBottom: 0 }}>
					{ start }-{ end }
				</Card.Text>
			</Col>
		</Row>
	)
};

export default LeaderboardItem;
