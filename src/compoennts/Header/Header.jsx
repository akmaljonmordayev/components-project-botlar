import React from "react";
import "./Header.css";
import logo from "/public/images/logo.png";
function Header() {
  return (
    <header>
      <div className="container">
        <nav>
          <div className="">
            <img src={logo} alt="" />
          </div>
          

          <div className="header1">
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="">Product</a></li>
              <li><a href="">Faq</a></li>
              <li><a href="">Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
