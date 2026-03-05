import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./Components/HomePage";
import Buyers from "./Components/BuyersPage";
import Tenants from "./Components/TenantsPage";
import Owners from "./Components/OwnersPage";
import About from "./Components/AboutPage";
import Contact from "./Components/ContactPage";

import LoginPage from "./Components/LoginPage";
import SignupPage from "./Components/SignupPage";

function App() {

  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <Router>

      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <HomePage
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          }
        />

        {/* NAVIGATION PAGES */}
        <Route path="/buyers" element={<Buyers />} />
        <Route path="/tenants" element={<Tenants />} />
        <Route path="/owners" element={<Owners />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* AUTH PAGES */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

      </Routes>

    </Router>
  );
}

export default App;