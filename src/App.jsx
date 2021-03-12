import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Jobpage from "./pages/Jobpage/Jobpage";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Search from "./pages/Search/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import Switch from "react-bootstrap/esm/Switch";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Login />
        <Header />
        <Switch>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/jobpage">
            <Jobpage />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
