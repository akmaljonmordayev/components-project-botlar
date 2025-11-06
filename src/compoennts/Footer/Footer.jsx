import React from "react";
import "./Footer.css";
import logo from "/public/image 12.png"
import icon1 from "/public/Vector.png"
import icon2 from "/public/Vector (1).png"
import icon3 from "/public/instagram.png"
function Footer() {
  return (
    <footer>
      <div className="container">
        <section className="sect" >
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className="iconca">
            <img src={icon1} alt="" />
            <img src={icon2} alt="" />
            <img src={icon3} alt="" />
          </div>
          <div className="texxt">
            <a href="#">Copywright 2020 Bella Onojie.com</a>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
