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
    <div className="flex justify-between bg-pink-100 shadow-md">
      <div className="logo-div   py-4 " >
        <img className="w-28 shadow-md" src={LOGO_URL} />
      </div>
      <div className="header-list-container flex items-center  ">
        <ul className="flex p-4 m-5 ">
          <li className="px-5"><Link to="/"> Home</Link></li>
          <li className="px-5"><Link to="/about">About Us</Link></li>
          <li className="px-5"><Link to="/contact">Contact us </Link></li>
          <li className="px-5">Cart</li>
          <button className="login-btn" onClick={loginOut}>
            {btnname}{" "}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
