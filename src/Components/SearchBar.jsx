import React from "react";

const SearchBar = ({ search, setSearch }) => {

  return (

    <div className="search-container">

      <input
        type="text"
        placeholder="Search property, city, BHK..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

    </div>

  );

};

export default SearchBar;