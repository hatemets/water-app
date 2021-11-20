import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

import Graph from './Graph';
import { ChevronLeft } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

import data from '../data/WaterConsumption';

const Shower = () => {
	return (
		<>
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
