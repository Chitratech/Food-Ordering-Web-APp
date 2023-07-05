import React from "react";
import {LOGO_URL} from "../utils/constants";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-div">
        <img
          className="logo-img"
          src={LOGO_URL}
        />
      </div>
      <div className="header-list-container">
        <ul className="ul-list">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
};

export default Header;
