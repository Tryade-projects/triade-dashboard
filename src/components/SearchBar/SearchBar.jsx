import React from "react";
import searchImg from "/assets/Search.svg";

const SearchBar = ({ search, setSearch }) => {
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <label className="search-bar" htmlFor="search">
        <img src={searchImg} alt="image d'une loupe" />
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Rechercher..."
          id="search"
          value={search}
        />
      </label>
    </div>
  );
};

export default SearchBar;
