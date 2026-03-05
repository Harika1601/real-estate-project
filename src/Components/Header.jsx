import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/signup");   // go to signup page
  };

  return (
    <div className="navbar">

      <img src="/logo.png" alt="logo" className="logo" />

      <div className="top-nav-buttons">
        <button onClick={() => navigate("/buyers")}>Buyers</button>
        <button onClick={() => navigate("/tenants")}>Tenants</button>
        <button onClick={() => navigate("/owners")}>Owners</button>
        <button onClick={() => navigate("/about")}>About</button>
        <button onClick={() => navigate("/contact")}>Contact</button>
      </div>

      <button className="auth-btn" onClick={handleLogout}>
        Logout
      </button>

    </div>
  );
};

export default Header;