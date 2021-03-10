import React from "react";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" fixed="bottom">
      <Navbar.Brand href="#jobpage">Job Search</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#profile">Profile</Nav.Link>
          <Nav.Link href="#location">Location</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
