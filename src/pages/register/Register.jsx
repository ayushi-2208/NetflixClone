import { Link } from "react-router-dom";
import "./register.scss"
import TabComponent from "../../tabs";

export default function Register() {
  return (
    <>
    <div className="register">
        <div className="top">
            <div className="wrapper">
            <img className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" 
            alt=""/>
                 <Link to="/login">
                 <button className="loginButton">
                    Sign In
                 </button>
                 </Link>
                 </div>
        </div>
        <div className="container">
            <h1>Unlimited movies, TV shows, and more</h1>
            <h2>Watch anywhere. Cancel anytime</h2>
           <Link to = "/signup" >
           <button className="clicked">Register </button>
           </Link>
           
            
        </div>
        
    </div>
<TabComponent/>
</>
  )
}
