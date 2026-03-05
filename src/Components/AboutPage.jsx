import React from "react";
import { useNavigate } from "react-router-dom";
import "./AboutPage.css";

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      {/* HERO */}
      <div className="about-hero">
        <h1>About Dream House</h1>
        <p>Your trusted partner in finding perfect properties</p>
      </div>

      {/* CONTENT */}
      <div className="about-content">
        <h2>Who We Are</h2>
        <p>
          Dream House is a modern real estate platform helping buyers,
          tenants, and owners connect easily. Our mission is to make
          property searching simple, transparent, and fast.
        </p>

        <h2>What We Offer</h2>
        <ul>
          <li>✔ Verified property listings</li>
          <li>✔ Easy EMI & full payment options</li>
          <li>✔ Trusted owners and agents</li>
          <li>✔ Fast and secure booking</li>
        </ul>

        <h2>Our Vision</h2>
        <p>
          We aim to become India's most trusted real estate platform by
          providing seamless digital property experiences.
        </p>

        {/* BACK BUTTON */}
        <button className="back-home-btn" onClick={() => navigate("/")}>
          ← Back to Home
        </button>
      </div>
    </div>
  );
};

export default AboutPage;