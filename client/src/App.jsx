import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Jobpage from "./pages/Jobpage/Jobpage";
//import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile.jsx";
import Search from "./pages/Search/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import UserContext from "./components/UserContext/UserContext.js";
// import ReactDOM from "react-dom";
// import Switch from "react-bootstrap/esm/Switch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import PrivateRoute from "./components/PrivateRoute/PrivateRoute.js";
//AUTH STUFF //
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "./Auth";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";

function App() {
  const [login, setLogin] = useState(false);

  console.log(login);
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          {/* <PrivateRoute exact path="/search" component={Search} />
          <PrivateRoute exact path="/jobpage" component={Jobpage} />
          <PrivateRoute exact path="/profile" component={Profile} /> */}
          
        </div>
      </Router>
    </AuthProvider>
        

        
  );
}

export default App;
