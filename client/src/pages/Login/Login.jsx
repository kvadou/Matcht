import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "../../base";
import { AuthContext } from "../../Auth";
import {Form, Button} from "react-bootstrap/";
import "./Login.css";



const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app.auth().signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (

<container className="login">
  <div className="loginContainer">
    <h1>Login</h1>
  
    <div class="centered">
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" />
        </Form.Group>
        <div class="middle">    
        <Button name="button" variant="primary" type="submit">
        Submit
        </Button>
        </div>
        <div class="crazy"> 
    <div>
      <br></br>
        <Button name="button" href="./SignUp">Register</Button> 
    </div>
    </div>
      </Form>
  </div>
  </div>
</container>
  );
};

export default withRouter(Login);
