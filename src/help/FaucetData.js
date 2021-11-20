import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

import { Card, Col, Row } from 'react-bootstrap';

const FaucetData = ({ timeSpent, timeAvg, waterAmount, waterAvg }) => (
	<>
		<Row className="line-tight">
			<Col>
				<Card.Text style={{ marginBottom: 0 }}>
					Time spent
				</Card.Text>

				<Card.Text className="red-text">
					<span className="showcase-text">{ timeSpent }</span>min
				</Card.Text>
			</Col>

			<Col>
				<Card.Text style={{ marginBottom: 0 }}>
					Regional average
				</Card.Text>

				<Card.Text className="red-text">
					<span className="showcase-text">{ timeAvg }</span>min
				</Card.Text>
			</Col>
		</Row>

		<Row className="line-tight" style={{ marginTop: 10 }}>
			<Col>
				<Card.Text className="margin-bottom-zero" style={{ fontSize: 15 }}>
					Water Consumption
				</Card.Text>

				<Card.Text className="red-text">
					<span className="showcase-text">{ waterAmount }</span>L
				</Card.Text>
			</Col>

			<Col >
				<Card.Text className="margin-bottom-zero">
					Regional average
				</Card.Text>

				<Card.Text className="red-text">
					<span className="showcase-text">{ waterAvg }</span>L
				</Card.Text>
			</Col>
		</Row>
	</>
);

export default FaucetData;
