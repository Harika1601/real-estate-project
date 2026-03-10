import React from "react";
import { useNavigate } from "react-router-dom";
import "./AboutPage.css";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">

      <div className="about-hero">
        <h1>About Dream House</h1>
        <p>Your trusted partner in finding perfect properties</p>
      </div>

      <div className="about-content">
        <h2>Who We Are</h2>
        <p>
          Dream House is a modern real estate platform helping buyers,
          tenants, and owners connect easily.
        </p>

        <h2>What We Offer</h2>
        <ul>
          <li>✔ Verified property listings</li>
          <li>✔ Easy EMI options</li>
          <li>✔ Trusted owners and agents</li>
          <li>✔ Fast and secure booking</li>
        </ul>

        <button className="back-home-btn" onClick={() => navigate("/home")}>
          ← Back to Home
        </button>

      </div>
    </div>
  );
};

export default AboutPage;