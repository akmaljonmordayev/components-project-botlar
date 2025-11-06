import React from "react";
import "./Section4.css";
import img from "/public/Rectangle (1).png";
function Section4() {
  return (
    <section>
      <div className="container">
        <div className="doda">
          <div className="otas">
            <img src={img} alt="" />
          </div>
          <div className="bolas">
            <p>Checkout</p>
            <h3>When you done check out and get it delivered.</h3>
            <h5>When you done check out and get it delivered with ease.</h5>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section4;
