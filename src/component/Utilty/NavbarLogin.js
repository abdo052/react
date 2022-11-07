import React from 'react'
import {  Nav ,Container, FormControl, Navbar } from 'react-bootstrap'
import logo from "../../images/logo.png";
import login from "../../images/login.png";
import cart from "../../images/cart.png";
import { Link } from 'react-router-dom';
const NavbarLogin = () => {
  return (
    <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <img alt="logo" src={logo} className="logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <FormControl
            type="search"
            placeholder="ابحث..."
            className="me-2 w-100 text-center"
            aria-label="Search"
          />
          <Nav className="me-auto">
            <Link
              style={{ textDecoration: "none" }}
              to="/login"
              className="nav-text d-flex mt-3 justify-content-center"
            >
              <img src={login} className="login-img" alt="sfvs" />
              <p style={{ color: "white" }}>دخول</p>
            </Link>
            <Link
              to="/cart"
              className="nav-text d-flex mt-3 justify-content-center"
              style={{ color: "white", textDecoration: "none" }}
            >
              <img src={cart} className="login-img" alt="sfvs" />
              <p style={{ color: "white" }}>العربه</p>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarLogin