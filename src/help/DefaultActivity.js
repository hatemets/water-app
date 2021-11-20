import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

import Card from 'react-bootstrap/Card';
import FaucetData from './FaucetData';

const DefaultActivity = ({ isTop=false, activity, time, timeSpent, timeAvg, waterAmount, waterAvg }) => (
	<Card className={ isTop ? "top-card" : "" }>
		<Card.Body style={{ lineHeight: 1 }}>
			<Card.Title style={{ color: "navy", fontWeight: "bold", marginBottom: 6 }}>{ activity }</Card.Title>
			<Card.Text style={{ color: "#666", fontSize: 13 }}>{ time }</Card.Text>
			<FaucetData timeSpent={timeSpent} timeAvg={timeAvg} waterAmount={waterAmount} waterAvg={waterAvg} />
		</Card.Body>
	</Card>
);

export default DefaultActivity;
