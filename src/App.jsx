import logo from "./logo.svg";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Jobpage from "./pages/Jobpage/Jobpage";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Search from "./pages/Search/Search";
import "bootstrap/dist/css/bootstrap.min.css";
import Switch from "react-bootstrap/esm/Switch";

function App() {
  return (
    <div className="App">
      <Header />
      <Jobpage />
      <Login />
      <Profile />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
