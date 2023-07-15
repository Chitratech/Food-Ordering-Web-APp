import React, { useContext, useState } from "react";
//import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom";
import UserContext from "../utils/userContext";
import {  useSelector } from "react-redux";


const Header = () => {
  const [btnname, SetbtnName] = useState("Login");

  const {username}= useContext(UserContext);

  const cartItems= useSelector( store=> store.cart.items)

  const loginOut = () => {
    if (btnname == "Login") {
      SetbtnName("logout");
    } else {
      SetbtnName("Login");
    }
  };
  return (
    <div className="flex justify-between bg-pink-100 shadow-md sticky top-0 left-0 right-0 z-10">
      <div className="logo-div   py-4 " >
        <img   data-testid="logo" className="w-28 shadow-md" src="https://cdn.dribbble.com/users/5462907/screenshots/11960844/5.png" />
      </div>
      <div className="header-list-container flex items-center  ">
        <ul className="flex p-4 m-5 ">
          <li className="px-5"><Link to="/"> Home</Link></li>
          <li className="px-5"><Link to="/about">About Us</Link></li>
          <li className="px-5"><Link to="/contact">Contact us </Link></li>
          <li className="px-5"><Link to="/instamart">Instamart</Link></li>
          <li className="px-5">{username}</li>
         <div> <li className="px-5"   ><Link to="/cart" data-testid="cartvalue">Cart -{ cartItems.length +"items"}</Link></li> </div>
         
          <button className="login-btn" onClick={loginOut}>
          {btnname}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
