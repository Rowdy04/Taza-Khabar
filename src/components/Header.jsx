import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Add search functionality as needed
  };

  return (
    <header className="header">
      <h1>News Now</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/world-news">World</a></li>
          <li><a href="/tech">Tech</a></li>
          <li><a href="/sports">Sports</a></li>
        </ul>
      </nav>
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search news..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default Header;