import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

import { ChevronLeft } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Title from '../help/Title';
import Graph from '../help/Graph';

// import data from '../data/WaterConsumption';
import showerData from '../data/showerMonthAverage.json';
import powerData from '../data/Hydractiva_shower_Power_Consumption.json';

const Shower = () => {
	const showerValues = JSON.parse(showerData);
	const power = JSON.parse(powerData);

	return (
		<>
			<Title name="Shower" />

			<div id="back-wrapper">
				<Link to='/faucets'><ChevronLeft id="back-button" variant="primary"/></Link>
			</div>

			<Graph isTop={true} title="Flowtime" xLabel="Day" yLabel="FlowTime" yUnit="s" data={showerValues} />
			{/* <Graph title="Water consumption" xLabel="day" yLabel="Water consumed" yUnit="L" data={data} /> */}
			<Graph title="Power consumption" xLabel="Day" yLabel="Power_Consumption" yUnit="W" data={power} />
		</>
	)
};

export default Shower;
