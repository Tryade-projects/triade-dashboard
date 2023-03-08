import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import ButtonAdd from "../../components/ButtonAdd/ButtonAdd";

const RanksHome = () => {
  return (
    <div>
      <Header title="Grades" />

      <div className="container-search-add">
        <SearchBar />
        <Link to="/ranks/addRank" className="flex">
          <ButtonAdd />
        </Link>
      </div>
    </div>
  );
};

export default RanksHome;
