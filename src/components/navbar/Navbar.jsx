import React from "react";
import { useState } from "react";
import "./navbar.scss";
import Search from "@material-ui/icons/Search";
import Notifications from "@material-ui/icons/Notifications";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt="logo"
          />
        </div>
        <div className="right">
          <h2
            style={{
              fontSize: "20px",
              color: "red",
              border: "1px solid red",
              borderRadius: "8px",
              padding: "5px 10px",
              whiteSpace: "nowrap",
            }}
          >
            {props.username ? `${props.username}` : ""}
          </h2>
          <Search className="icon" />

          <Notifications className="icon" />
          <button
            style={{
              width: "80%",
              padding: "5px 10px",
              background: "red",
              color: "white",
              fontSize: "18px",
              border: "none",
              borderRadius: "5px",
            }}
          >
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "white" }}
            >
              Logout
            </Link>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
