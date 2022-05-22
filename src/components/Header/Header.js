import React from 'react';
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
const Header = () => {
    return (
        <div>
            <Navbar
                collapseOnSelect
                expand="lg"
                className="header p-4"
                // variant="dark"
                sticky="top"
            >
                <Navbar.Brand as={Link} to="/login">
                    <h3>Login page</h3>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} to="/login" className="home"  >
                            Login
                        </Nav.Link>
                        <Nav.Link as={Link} to="/register" className="home">
                            register
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;