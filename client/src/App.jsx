import { useState } from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Jobpage from "./pages/Jobpage/Jobpage";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile.jsx";
import Search from "./pages/Search/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import Brand from "./components/Brand/Brand";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { AuthProvider } from "./Auth";
import SignUp from "./pages/SignUp/SignUp";

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="wrapper">
          <Brand />
          <Header />
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>

          <PrivateRoute path="/search">
            <Search />
          </PrivateRoute>
          <PrivateRoute path="/jobpage">
            <Jobpage />
          </PrivateRoute>
          <PrivateRoute path="/profile">
            <Profile />
          </PrivateRoute>
          <Route path="/">
            <Redirect to="/profile" />
          </Route>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
