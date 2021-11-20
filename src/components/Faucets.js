import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

import {  Link } from "react-router-dom";
import { Card, Col, Row, ListGroup } from 'react-bootstrap';

const Faucets = ({ match }) => (
	<Card className="top-card">
		<Card.Body>
			<Card.Title style={{ fontWeight: "bold", marginBottom: 20 }}>Faucets in Your Home</Card.Title>

			<Row>
				<Col>
					<Card.Text>
						<ListGroup>
							<Link to={`${match.url}/toilet`}><ListGroup.Item action>Toilet</ListGroup.Item></Link>
							<Link to={`${match.url}/shower`}><ListGroup.Item action>Shower</ListGroup.Item></Link>
							<Link to={`${match.url}/washing-machine`}><ListGroup.Item action>Washing machine</ListGroup.Item></Link>
						</ListGroup>
					</Card.Text>
				</Col>
			</Row>

		</Card.Body>
	</Card>
);

export default Faucets;
