import React from "react";
import "./Section2.css";
import section2 from "/public/section 2.png";
function Section2() {
  return (
    <section>
      <div className="section2">
        <div className="section2-left">
          <img src={section2} alt="" />
        </div>
        <div className="section2-right">
          <h2>Create an account</h2>
          <h1>Create/login to an existing account to get started</h1>
          <p>An account is created with your email and a desired password</p>
        </div>
      </div>
    </section>
  );
}

export default Section2;
