import logo from './logo.svg';
import './App.css';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Jobpage from "./pages/Jobpage/Jobpage";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Search from "./pages/Search/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <Jobpage />
      <Login />
      <Profile />
      <Search />
      
    </div>
  );
}

export default App;
