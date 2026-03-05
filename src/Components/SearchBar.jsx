import React, { useEffect } from "react"

const SearchBar = ({ search, setSearch, setResults }) => {
  useEffect(() => {
    const fetchSearch = async () => {
      try {
        // 🛑 empty search → clear results
        if (!search.trim()) {
          setResults(null);
          return;
        }

        const res = await fetch(
          `http://localhost:5000/api/properties/search?q=${encodeURIComponent(
            search
          )}`
        );

        if (!res.ok) {
          console.error("Search API failed");
          return;
        }

        const data = await res.json();
        console.log("🔍 Search results:", data);

        setResults(data);
      } catch (err) {
        console.error("Search error:", err);
      }
    };

    // ✅ debounce (professional)
    const delay = setTimeout(fetchSearch, 400);
    return () => clearTimeout(delay);
  }, [search, setResults]);

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search properties..."
        className="search-input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;