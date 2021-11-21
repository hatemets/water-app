import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

import { ChevronLeft } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Title from '../help/Title';
import Graph from '../help/Graph';

// import data from '../data/WaterConsumption';
import powerData from '../data/Dishwasher_Power_Consumption.json'
import flowData from '../data/Dishwasher_FlowTime.json'


const DishWasher = () => {
	const power = JSON.parse(powerData);
	const flow = JSON.parse(flowData);

	return (
		<>
			<Title name="Dishwasher" />

			<div id="back-wrapper">
				<Link to='/faucets'><ChevronLeft id="back-button" variant="primary"/></Link>
			</div>

			<Graph isTop={true} title="Flowtime" xLabel="Day" yLabel="FlowTime" yUnit="s" data={flow} />
			{/* <Graph title="Water consumption" xLabel="day" yLabel="Water consumed" yUnit="L" data={data} /> */}
			<Graph title="Power consumption" xLabel="Day" yLabel="Power_Consumption" yUnit="L" data={power} />
		</>
	)
};

export default DishWasher;
