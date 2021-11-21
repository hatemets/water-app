import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Card from 'react-bootstrap/Card';

const Graph = ({ isTop=false, title, xLabel, yLabel, yUnit, data }) => {
	return (
		<Card className={ isTop ? "top-card" : "" }>
			<Card.Body>
				<Card.Title>{ title }</Card.Title>

				<ResponsiveContainer width="95%" aspect={2}>
					<LineChart
						width={500}
						height={300}
						data={data}
						margin={{ top: 20, right: 15, left: -15, bottom: 0, }}
					>
						<CartesianGrid  horizontal="" vertical="" stroke="#243240"/>
						<XAxis dataKey={ xLabel } tick={{ fontSize: 10 }}/>
						<YAxis tick={{ fontSize: 12 }} unit={ yUnit }/>
						<Tooltip contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={false}/>
						<Line type="monotone" dataKey={ yLabel } stroke="navy" strokeWidth="2" dot={false} />

					</LineChart>
				</ResponsiveContainer>
				<p style={{ fontSize: 12, textAlign: "center", marginBottom: 0 }}>days</p>
			</Card.Body>
		</Card>
	)
}

export default Graph;
