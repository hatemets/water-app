import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
	{ name: "Mon", "Water consumed": 325 },
	{ name: "Tue", "Water consumed": 438, },
	{ name: "Wed", "Water consumed": 238, },
	{ name: "Thu", "Water consumed": 502, },
	{ name: "Fri", "Water consumed": 903, },
	{ name: "Sat", "Water consumed": 543, },
	{ name: "Sun", "Water consumed": 732, },
];

const WaterConsumptionGraph = ({ xLabel, yLabel, yUnit, data }) => {
	return (
		<ResponsiveContainer width="95%" aspect={2}>
			<LineChart
				width={500}
				height={300}
				data={data}
				margin={{
					top: 20,
					right: 15,
					left: -15,
					bottom: 0,
				}}
			>
				<CartesianGrid  horizontal="" vertical="" stroke="#243240"/>
				<XAxis dataKey={ xLabel } tick={{ fontSize: 12 }}/>
				<YAxis tick={{ fontSize: 12 }} unit={ yUnit }/>
				<Tooltip contentStyle={{ backgroundColor: "#8884d8", color: "#fff" }} itemStyle={{ color: "#fff" }} cursor={false}/>
				<Line type="monotone" dataKey={ yLabel } stroke="#8884d8" strokeWidth="3" />

			</LineChart>
		</ResponsiveContainer>
	)
}

export default WaterConsumptionGraph;
