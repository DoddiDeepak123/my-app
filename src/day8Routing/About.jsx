import React from "react";
import "./About.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-left">
        <h1 className="about-title">ABOUT US</h1>
        <p className="about-text">
          We are a creative team passionate about building modern digital
          experiences. Our mission is to bring ideas to life with design,
          technology, and innovation.
        </p>
        <p className="about-text">
          Collaboration, creativity, and curiosity drive everything we do.
        </p>
      </div>

      <div className="about-right">
        <div className="illustration">
          <div className="lightbulb">💡</div>
          <div className="person">
            <img
              src="https://cdn-icons-png.flaticon.com/512/194/194938.png"
              alt="Person at laptop"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
