import ReactDOM from "react-dom";
import Home from "./pages/home/Home";
import "./app.scss";
import Watch from "./pages/watch/Watch";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  IndexRoute,
  Link,
  Routes,
} from "react-router-dom";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Footer from "./components/footer/Footer";
import Signup from "./pages/signup/Signup";
import { useEffect, useState } from "react";
import { auth } from "./firebase";

function App() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Register />} />
        <Route exact path="/home" element={<Home username={userName} />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
