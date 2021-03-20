import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import app from "../../base";
import { AuthContext } from "../../Auth";

function Header() {
  const { currentUser } = useContext(AuthContext);

  return (
    <>
      {!currentUser ? (
        ""
      ) : (
        <Navbar
          className="d-flex"
          style={{ backgroundColor: "485461", backgroundImage: "linear-gradient(315deg, #485461 0%, #28313b 74%)" }}
          expand="lg"
          variant="dark"
          fixed="bottom"
        >
          <Navbar.Brand to="/profile" as={Link}>
            Match't
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

              <button
                style={{
                  border: "none",
                  background: "none",
                  color: "rgba(255,255,255,.5)",
                }}
                onClick={() => app.auth().signOut()}
              >
                Logout
              </button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      )}
    </>
  );
}

export default Header;
