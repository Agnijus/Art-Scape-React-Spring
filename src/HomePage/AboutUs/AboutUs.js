import "./AboutUs.css";
import React, { forwardRef } from "react";

const AboutUs = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="about" className="about-us-container">
      <div className="about-us-container-center">
        <h2 className="about-us-title">
          <span>about</span>
          <span className="about-us-title-two">us</span>
        </h2>
        <div className="about-us-image"></div>
        <div className="about-us-text">
          <h3 className="about-us-text-title">explore the difference</h3>
          <p className="about-us-text-p">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Perferendis vitae, nisi ipsum quod quae quidem
          </p>
          <button className="about-us-text-btn">read more</button>
        </div>
      </div>
    </section>
  );
});
export default AboutUs;
