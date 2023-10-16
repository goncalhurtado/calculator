import React from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <Link to={"/"} className="btn navLink">
        Calculator
      </Link>
      <Link to={"/about"} className="btn navLink">
        About
      </Link>
    </div>
  );
};

export default NavBar;
