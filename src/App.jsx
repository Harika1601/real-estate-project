import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import PropertyList from "./Components/PropertyList";
import Properties from "./Components/properties";

import Buyers from "./Components/BuyersPage";
import Tenants from "./Components/TenantsPage";
import Owners from "./Components/OwnersPage";
import About from "./Components/AboutPage";
import Contact from "./Components/ContactPage";

import PaymentPage from "./Components/PaymentPage";
import PaymentOptionsPage from "./Components/PaymentOptionsPage";

function App() {

  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProperties = Properties.filter((property) => {

    const categoryMatch =
      selectedCategory === "all" ||
      property.category === selectedCategory;

    const searchMatch =
      property.title.toLowerCase().includes(search.toLowerCase()) ||
      property.address.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && searchMatch;

  });

  return (
    <Router>

      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Header
                search={search}
                setSearch={setSearch}
                setSelectedCategory={setSelectedCategory}
              />

              <PropertyList properties={filteredProperties} />
            </>
          }
        />

        {/* OTHER PAGES */}
        <Route path="/buyers" element={<Buyers />} />
        <Route path="/tenants" element={<Tenants />} />
        <Route path="/owners" element={<Owners />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* PAYMENT */}
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/payment-options" element={<PaymentOptionsPage />} />

      </Routes>

    </Router>
  );
}

export default App;