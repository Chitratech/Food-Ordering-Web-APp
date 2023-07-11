import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import {Link, link} from "react-router-dom";

const Header = () => {
  const [btnname, SetbtnName] = useState("Login");

  const loginOut = () => {
    if (btnname == "Login") {
      SetbtnName("logout");
    } else {
      SetbtnName("Login");
    }
  };
  return (
    <div className="header-container">
      <div className="logo-div">
        <img className="logo-img" src={LOGO_URL} />
      </div>
      <div className="header-list-container">
        <ul className="ul-list">
          <li><Link to="/"> Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact us </Link></li>
          <li>Cart</li>
          <button className="login-btn" onClick={loginOut}>
            {btnname}{" "}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
