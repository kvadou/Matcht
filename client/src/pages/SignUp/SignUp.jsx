import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../../base";
import { Form, Button } from "react-bootstrap/";
import "../Login/Login.css";
import { Link } from "react-router-dom";

const SignUp = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div className="login">
      <div className="loginContainer centered">
        <h1 className="m-5 logintitle">Register</h1>

        <div>
          <Form onSubmit={handleSignUp}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                type="password"
                placeholder="Password"
              />
            </Form.Group>
            <div className="middle">
              <Button
                bsPrefix="over"
                className="btn btn-danger btn-lg m-3"
                to="./Login"
                as={Link}
              >
                Login
              </Button>

              <div>
                <Button
                  className="btn btn-danger btn-lg m-3 over"
                  type="submit"
                >
                  Sign up
                </Button>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SignUp);
