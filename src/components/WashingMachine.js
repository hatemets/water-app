import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

import { ChevronLeft } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Title from '../help/Title';
import Graph from '../help/Graph';

import flowTime from '../data/Washing_machine_FlowTime.json'
// import waterConsumption from '../data/Washing_machine_Consumption.json'
import powerConsumption from '../data/Washing_machine_Power_Consumption.json'

const WashingMachine = () => {
	const flow = JSON.parse(flowTime);
	const power = JSON.parse(powerConsumption);

	return (
		<>
			<Title name="Washing Machine" />

			<div id="back-wrapper">
				<Link to='/faucets'><ChevronLeft id="back-button" variant="primary"/></Link>
			</div>

			<Graph isTop={true} title="Flowtime" xLabel="Day" yLabel="FlowTime" yUnit="s" data={flow} />
			{/* <Graph title="Water consumption" xLabel="Day" yLabel="Power_Consumption" yUnit="L" data={waterConsumption} /> */}
			<Graph title="Power consumption" xLabel="Day" yLabel="Power_Consumption" yUnit="W" data={power} />
		</>
	)
};

export default WashingMachine;
