import React from "react";
import "./Section1.css";
function Section1() {
  return (
    <section className="firstSection">
      <div className="container">
        <h3 className="foodapp">Food app</h3>
        <h2 className="why">Why stay hungry when 
        you can order form Bella Onojie</h2>
        <p className="info">Download the bella onoje’s food app now on</p>
        <div className="buttons">
          <button className="firstButton">Playstore</button>
          <button className="secondButton">App store</button>
        </div>
      </div>
      <img className="image1" src="/images/Group 53.png" alt="" />
    </section>
  );
}

export default Section1;
