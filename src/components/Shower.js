import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

import { ChevronLeft } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Title from '../help/Title';
import Graph from '../help/Graph';

import data from '../data/WaterConsumption';

const Shower = () => {
	return (
		<>
			<Title name="Shower" />

			<div id="back-wrapper">
				<Link to='/faucets'><ChevronLeft id="back-button" variant="primary"/></Link>
			</div>

			<Graph isTop={true} title="Flowtime" xLabel="day" yLabel="Water consumed" yUnit="L" data={data} />
			<Graph title="Water consumption" xLabel="day" yLabel="Water consumed" yUnit="L" data={data} />
			<Graph title="Power consumption" xLabel="day" yLabel="Water consumed" yUnit="L" data={data} />
		</>
	)
};

export default Shower;
