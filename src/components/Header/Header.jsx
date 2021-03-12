import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" fixed="bottom">
      <Navbar.Brand to="/jobpage" as={Link}>
        Job Search
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link to="/profile" as={Link}>
            Profile
          </Nav.Link>
          <Nav.Link to="/search" as={Link}>
            Search
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
