import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar";
import PropertyList from "./PropertyList";
import Properties from "./properties";

const categories = ["all", "house", "commercial", "residential"];

const HomePage = ({ selectedCategory, setSelectedCategory }) => {

  const filteredProperties = Properties.filter((property) => {

    return (
      selectedCategory === "all" ||
      property.category === selectedCategory
    );

  });

  return (
    <>

      <div
        className="hero-header"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/background.png)`
        }}
      >

        <Header />

        <div className="hero-overlay-dark"></div>

        <div className="hero-content">

          <h1>Welcome to Dream House</h1>
          <p>Find your perfect property with us</p>

          <SearchBar />

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

      </div>

      <PropertyList properties={filteredProperties} />

    </>
  );
};

export default HomePage;