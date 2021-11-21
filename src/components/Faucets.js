import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

import { Link } from "react-router-dom";
import { Card, Col, Row, ListGroup } from 'react-bootstrap';
import Title from '../help/Title';

const Faucets = ({ match }) => (
	<>
		<Title name="Faucets" />

		<Card className="top-card">
			<Card.Body>
				<Card.Title style={{ fontWeight: "bold", marginBottom: 20 }}>Faucets in Your Home</Card.Title>

				<Row>
					<Col>
						<Card.Text>
							<ListGroup>
								<Link to={`${match.url}/dishwasher`}><ListGroup.Item action>Dishwasher</ListGroup.Item></Link>
								<Link to={`${match.url}/shower`}><ListGroup.Item action>Shower</ListGroup.Item></Link>
								<Link to={`${match.url}/washing-machine`}><ListGroup.Item action>Washing machine</ListGroup.Item></Link>
							</ListGroup>
						</Card.Text>
					</Col>
				</Row>

			</Card.Body>
		</Card>
	</>
);

export default Faucets;
