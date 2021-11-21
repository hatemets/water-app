import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { BellFill } from 'react-bootstrap-icons';

const Navigation = () =>
{
	const myRef = useRef(null);

	return (
		<Navbar className="navbar" collapseOnSelect expand='sm' fixed="top" variant="dark">
			<Container>
				<Navbar.Toggle ref={myRef} aria-controls='responsive-navbar-nav'></Navbar.Toggle>

				<Link to='/notifications'><BellFill style={{ cursor: "pointer", color: "#ddd", transform: "scale(1.5)", marginRight: 5 }} /></Link>

				<Navbar.Collapse id='responsive-navbar-nav'>
					<Nav>
						<Nav.Link><Link onClick={() => {myRef.current.click()}} className="nav-item" to="/">Dashboard</Link></Nav.Link>
						<Nav.Link><Link onClick={() => {myRef.current.click()}} className="nav-item" to="/usage-times">Usage Times</Link></Nav.Link>
						<Nav.Link><Link onClick={() => {myRef.current.click()}} className="nav-item" to="/leaderboard">Leaderboard</Link></Nav.Link>
						<Nav.Link><Link onClick={() => {myRef.current.click()}} className="nav-item" to="/activities">Recent Activities</Link></Nav.Link>
						<Nav.Link><Link onClick={() => {myRef.current.click()}} className="nav-item" to="/faucets">Faucets</Link></Nav.Link>
					</Nav>
				</ Navbar.Collapse>

			</Container>
		</Navbar>
	);
};

export default Navigation;
