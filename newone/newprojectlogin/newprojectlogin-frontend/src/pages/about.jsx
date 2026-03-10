import React from "react";
import "./about.css";
import groupImg from "../assets/group2.jpg"

const About = () => {
  return (
    <div className="about-page">

      {/* ✅ Banner Image Section */}
      <div className="about-banner">
        <img src={groupImg} alt="Our Team" className="about-banner-img" />
        <div className="banner-overlay">
          <h1 className="banner-title">About StyleGlanz</h1>
        </div>
      </div>

      {/* ✅ Text Section */}
      <div className="about-content">
        <p>
          Welcome to <strong>StyleGlanz</strong>, where fashion meets expression.
          We are a digital platform dedicated to empowering individuals through
          style, grooming, and modern lifestyle inspiration.
        </p>

        <p>
          We explore wardrobe essentials, formal & casual styling, skincare,
          grooming, and fashion culture with a modern touch. Style is not about
          labels — it’s about confidence and individuality.
        </p>

        <h2>Our Creative Team</h2>
        <ul className="team-list">
          <li>Devanshu Lichade</li>
          <li>Suyash Thakur</li>
          <li>Girish kolhe</li>
          <li>Samir Bind</li>
          <li>Team Member 5</li>
          <li>Team Member 6</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
