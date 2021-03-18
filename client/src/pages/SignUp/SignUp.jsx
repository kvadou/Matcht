import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../../base";
import {Form, Button} from "react-bootstrap/";
import "./SignUp.css";


const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
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
  }, [history]);

  return (
  <container>
    <div>
      <h1>Register</h1>
      </div>
      <div class="centered">
      <Form onSubmit={handleSignUp}>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" />
        </Form.Group>
        <div class="middle">
        <Button name="button" variant="primary" type="submit">
        Register
        </Button>
        </div>
      </Form>
      </div>
      
  </container>

  );
};

export default withRouter(SignUp);