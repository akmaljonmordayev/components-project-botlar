import React from "react";
import "./Section1.css";
function Section1() {
  return (
    <section className="firstSection">
      <div className="container">
        <h3>Food app</h3>
        <h2>Why stay hungry when 
        you can order form Bella Onojie</h2>
        <p>Download the bella onoje’s food app now on</p>
        <div className="buttons">
          <button className="firstButton">Playstore</button>
          <button className="secondButton">App store</button>
        </div>
      </div>
      <img src="/public/images/Group 53.png" alt="" />
    </section>
  );
}

export default Section1;
