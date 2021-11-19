import React from "react";
// import { NavLink, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
// import Link from 'react-bootstrap/Link'

import { BrowserRouter as Router} from 'react-router-dom';


const Navigation = () =>
{
	return (
		<Navbar collapseOnSelect expand='sm' bg="dark" fixed="top" variant="dark">
			<Container>
				<Navbar.Toggle aria-controls='responsive-navbar-nav'></Navbar.Toggle>
				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav>
						<Nav.Link href="/">Home</Nav.Link>       
						<Nav.Link href="/statistics">Statistics</Nav.Link>
						<Nav.Link href="/VR">Virtual Reality</Nav.Link>
					</Nav>
				</ Navbar.Collapse>

			</Container>
		</Navbar>
	);
};

export default Navigation;
