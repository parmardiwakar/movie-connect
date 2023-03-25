import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./SearchBar.module.css";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const searchQueryHandler = () => {
    const query = searchQuery.trim();

    if (query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div>
      <input
        type="search"
        minLength="1"
        placeholder="Search for a movie or TV show..."
        value={searchQuery}
        onChange={(event) => setSearchQuery(event.target.value)}
      />
      <button onClick={searchQueryHandler}>Search</button>
    </div>
  );
};

export default SearchBar;
