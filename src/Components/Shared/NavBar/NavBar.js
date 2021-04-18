import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import './NavBar.css'
import logo from '../../../logo/logo-header.png'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <Navbar className="bg" expand="lg">
            <Navbar.Brand href="#home">
                <img className="logo ms-2" src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="auto ">
                   <ul className="list-unstyled navbar-nav">
                   <li>
                        <Link className="ms-5 link text-decoration-none text-white p-2" to="/about">Home</Link>
                    </li>
                    <li>
                        <Link className="ms-5 link text-decoration-none text-white p-2" to="/dashBoard">DashBoard</Link>
                    </li>
                    <li >
                        <Link className="ms-5 link text-decoration-none text-white p-2" to="/admin">Admin</Link>
                    </li>
                    <li>
                        <Link className="ms-5 link text-decoration-none text-white p-2" to="/about">About us</Link>
                    </li>
                    <li>
                        <Link className="ms-5 link text-decoration-none text-white p-2" to="/login">Login</Link>
                    </li>
                   </ul>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;