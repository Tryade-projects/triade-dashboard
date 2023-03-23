import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import ButtonAdd from "../../components/ButtonAdd/ButtonAdd";
import ManageRanksDash from "../../components/ManageRanksDash/ManageRanksDash";

const RanksHome = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <Header title={"Grades"} />
      <div className="container-search-add">
        <SearchBar search={search} setSearch={setSearch} />
        <Link to="/ranks/rank/add" className="flex">
          <ButtonAdd />
        </Link>
      </div>
      <ManageRanksDash search={search} />
    </>
  );
};

export default RanksHome;
