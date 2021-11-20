import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';

const Title = ({ name }) =>
	(
		<div id="title-wrapper">
			<div id="current-page">{ name }</div>
		</div>
	);

export default Title;
