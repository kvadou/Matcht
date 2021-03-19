import React, { useContext } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import app from "../../base";
import { AuthContext } from "../../Auth";

function Header() {
  const { currentUser } = useContext(AuthContext);
  console.log(currentUser);
  return (
    <>
      {!currentUser ? (
        <Redirect to="/login" />
      ) : (
        <Navbar bg="dark" expand="lg" variant="dark" fixed="bottom">
          <Navbar.Brand to="/jobpage" as={Link}>
            Job Page
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
