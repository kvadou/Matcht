import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Jobpage from "./pages/Jobpage/Jobpage";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile.jsx";
import Search from "./pages/Search/Search";
import "bootstrap/dist/css/bootstrap.min.css";
// import UserContext from "./components/UserContext/UserContext.js";
// import ReactDOM from "react-dom";
// import Switch from "react-bootstrap/esm/Switch";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import PrivateRoute from "./components/PrivateRoute/PrivateRoute.js";
//AUTH STUFF //
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { AuthProvider } from "./Auth";
//import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";


function App() {
  const [login] = useState(false);
  return (
    <AuthProvider>
      <Router>
        <div>
          <PrivateRoute exact path="/" component={Profile} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
        </div>
       
          <Header />
          <PrivateRoute login={login} path="/search">
            <Search />
          </PrivateRoute>
          <PrivateRoute login={login} path="/jobpage">
            <Jobpage />
          </PrivateRoute>
          <PrivateRoute login={login} path="/profile">
            <Profile />
          </PrivateRoute>
          <Route path="/"></Route>
        
      </Router>
    </AuthProvider>
    //   <UserContext.Provider value={login}>
    //   <Router>
    //     <div>
    //       <p>You must log in to view the page</p>
    //       <button onClick={() => setLogin(!login)}>Log in</button>
    //     </div>
    //
    // </UserContext.Provider> */} */}
  );
}

export default App;
