import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Jobpage from "./pages/Jobpage/Jobpage";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile.jsx";
import Search from "./pages/Search/Search";
import "bootstrap/dist/css/bootstrap.min.css";
// import Switch from "react-bootstrap/esm/Switch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute.js";

function App() {
  const [login, setLogin] = useState(false);
  console.log(login);
  return (
    <Router>
      <div className="App">
        <div>
          <p>You must log in to view the page</p>
          <button onClick={() => setLogin(!login)}>Log in</button>
        </div>
        <Header />
        <Switch>
          <PrivateRoute login={login} path="/search">
            <Search />
          </PrivateRoute>
          <PrivateRoute login={login} path="/jobpage">
            <Jobpage />
          </PrivateRoute>
          <PrivateRoute login={login} path="/profile">
            <Profile />
          </PrivateRoute>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;