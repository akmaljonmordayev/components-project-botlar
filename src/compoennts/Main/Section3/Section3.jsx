import React from "react";
import "./Section3.css";
import logo1 from "/public/logo1.png";
function Section3() {
  return (
    <section className="sect3">
      <div className="container">
        <div className="parent">
          <div className="left-div">
            <p className="pp">Explore varieties</p>
            <h1>Shop for your favorites meal as e dey hot.</h1>
            <p>Shop for your favorite meals or drinks and enjoy while doing it.</p>
          </div>
          <div className="right-div">
            <img src={logo1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;
