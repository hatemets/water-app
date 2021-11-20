import React from "react";
// import { NavLink, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { BellFill } from 'react-bootstrap-icons';
// import Link from 'react-bootstrap/Link'

const Navigation = () =>
{
	return (
		<Navbar className="navbar" collapseOnSelect expand='sm' bg="dark" fixed="top" variant="dark">
			<Container>
				<Navbar.Toggle aria-controls='responsive-navbar-nav'></Navbar.Toggle>

				{/* TODO: Add props */}
				<div style={{ color: "white", fontSize: 20 }}>Dashboard</div>
				<BellFill style={{ color: "white", transform: "rotate(30deg) scale(1.5)", marginRight: 5 }} />

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
