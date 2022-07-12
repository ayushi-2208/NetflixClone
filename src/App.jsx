import ReactDOM from 'react-dom';
import Home from './pages/home/Home';
import './app.scss';
import Watch from './pages/watch/Watch';
import {BrowserRouter as Router, Route, Switch, IndexRoute, Link, Routes} from 'react-router-dom';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import Footer from './components/footer/Footer';
import Signup from './pages/signup/Signup';

function App() {
  return (
  
   <Router>
   
   <Routes>
  
    <Route exact path ='/'element={<Register />}/>
    <Route exact path="/home" element={<Home />} />
    <Route exact path="/login" element={<Login />} />
    <Route exact path="/signup" element={<Signup />} />
   
    
  </Routes>
  <Footer/>
   </Router>
  
  
  );
}

export default App;
