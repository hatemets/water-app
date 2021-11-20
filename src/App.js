import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import Container from 'react-bootstrap/Container';

// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';

import Navigation from './components/Navigation.js';
import Dashboard from './components/Dashboard.js';


const App = () => (
	<Container className="p-3 main-wrapper">
		<Navigation />
		<Dashboard />

	</Container>
);

export default App;
