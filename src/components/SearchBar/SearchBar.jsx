import React from "react";
import search from "../../assets/Search.svg";

const SearchBar = () => {
  return (
    <>
      <label className="search-bar" htmlFor="search">
        <img src={search} alt="image d'une loupe" />
        <input type="text" placeholder="Rechercher..." id="search" />
      </label>
    </>
  );
};

export default SearchBar;
