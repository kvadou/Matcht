import React, { useCallback, useContext } from "react";
import { Redirect, withRouter } from "react-router";
import { Link } from "react-router-dom";

import app from "../../base";
import { AuthContext } from "../../Auth";
import { Form, Button } from "react-bootstrap/";
import "./Login.css";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app.auth().signInWithEmailAndPassword(email.value, password.value);
        history.push("/search");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  return (
    <>
      {currentUser ? (
        <Redirect to="/search" />
      ) : (
    <div className="login">
      <div className="loginContainer centered">
        <h1 className="m-5 logintitle">Login</h1>

        <div>
          <Form onSubmit={handleLogin}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control name="email" type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control name="password" type="password" placeholder="Password" />
            </Form.Group>
            <div className="middle">
              <Button bsPrefix="over" className="btn btn-danger btn-lg m-3" type="submit">
                Login
              </Button>

              <div>
                <Button className="btn btn-danger btn-lg m-3 over" to="./SignUp" as={Link}>
                  Sign up
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
        )}
    </>
  );
};

export default withRouter(Login);
