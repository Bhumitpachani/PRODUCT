import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "./image/logo.png"
import { Link } from 'react-router-dom';

export default function navbar() {
    return (
        <div>

            <Navbar expand="lg" className="bg-body-tertiary fixed-top " >
                <Container>
                    <Navbar.Brand >
                        <Link to='/'>
                            <img style={{ height: "70px", marginLeft: "40px" }} src={logo} />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ marginRight: "37px" }} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link >
                                <Link to='/'> Home</Link>
                            </Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
