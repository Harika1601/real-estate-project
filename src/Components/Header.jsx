import React, { useState } from "react";
import "./Header.css";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const categories = ["all", "house", "commercial", "residential"];

const Header = ({ setSelectedCategory, search, setSearch, setResults }) => {

  const navigate = useNavigate();

  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // ================= SIGNUP =================

  const handleSignup = async () => {
    try {

      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, email, password })
      });

      const data = await res.json();

      if (res.ok) {

        await Swal.fire({
          icon: "success",
          title: "Signup successful 🎉",
          confirmButtonColor: "#22c55e"
        });

        setShowSignup(false);
        setShowLogin(true);

      } else {

        Swal.fire({
          icon: "error",
          title: "Signup failed",
          text: data.message || "Something went wrong"
        });

      }

    } catch {

      Swal.fire({
        icon: "error",
        title: "Server error"
      });

    }
  };


  // ================= LOGIN =================

  const handleLogin = async () => {
    try {

      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: loginEmail,
          password: loginPassword
        })
      });

      const data = await res.json();

      if (res.ok) {

        await Swal.fire({
          icon: "success",
          title: "Login successful 🎉",
          confirmButtonColor: "#22c55e"
        });

        setIsLoggedIn(true);
        setShowLogin(false);

      } else {

        Swal.fire({
          icon: "error",
          title: "Login failed",
          text: data.message || "Invalid credentials"
        });

      }

    } catch {

      Swal.fire({
        icon: "error",
        title: "Server error"
      });

    }
  };


  // ================= LOGOUT =================

  const handleLogout = () => {

    setIsLoggedIn(false);

    Swal.fire({
      icon: "success",
      title: "Logged out",
      timer: 1200,
      showConfirmButton: false
    });

  };


  return (
    <header
      className="hero-header"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/background.png)`
      }}
    >

      <div className="hero-overlay-dark"></div>


      {/* LOGO */}

      <img src="/logo.png" alt="logo" className="logo" />


      {/* NAVIGATION */}

      <div className="top-nav-buttons">

        <button onClick={() => navigate("/buyers")}>
          Buyers
        </button>

        <button onClick={() => navigate("/tenants")}>
          Tenants
        </button>

        <button onClick={() => navigate("/owners")}>
          Owners
        </button>

        <button onClick={() => navigate("/about")}>
          About
        </button>

        <button onClick={() => navigate("/contact")}>
          Contact
        </button>

      </div>


      {/* AUTH BUTTON */}

      <button
        className="auth-btn"
        onClick={() => (!isLoggedIn ? setShowSignup(true) : handleLogout())}
      >
        {!isLoggedIn ? "Signup" : "Logout"}
      </button>


      {/* HERO CONTENT */}

      <div className="hero-content">

        <h1>Welcome to Dream House</h1>

        <p>Find your perfect property with us</p>


        {/* SEARCH BAR */}

        <SearchBar
          search={search}
          setSearch={setSearch}
          setResults={setResults}
        />


        {/* CATEGORY BUTTONS */}

        <div className="category-buttons">

          {categories.map((cat) => (

            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat.toUpperCase()}
            </button>

          ))}

        </div>

      </div>


      {/* ================= SIGNUP MODAL ================= */}

      {showSignup && (

        <div className="modal">

          <div className="modal-box">

            <h2>Signup</h2>

            <input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={handleSignup}>
              Signup
            </button>

            <button onClick={() => setShowSignup(false)}>
              Close
            </button>

          </div>

        </div>

      )}


      {/* ================= LOGIN MODAL ================= */}

      {showLogin && (

        <div className="modal">

          <div className="modal-box">

            <h2>Login</h2>

            <input
              placeholder="Email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />

            <button onClick={handleLogin}>
              Login
            </button>

            <button onClick={() => setShowLogin(false)}>
              Close
            </button>

          </div>

        </div>

      )}

    </header>
  );
};

export default Header;