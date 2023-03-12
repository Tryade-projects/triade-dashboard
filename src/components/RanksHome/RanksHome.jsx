import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import ButtonAdd from "../../components/ButtonAdd/ButtonAdd";

const RanksHome = ({ ranks }) => {
  return (
    <div className="ranksHome">
      <Header title="Grades" />

      <div className="container-search-add">
        <SearchBar />
        <Link to="/ranks/addRank" className="flex">
          <ButtonAdd />
        </Link>
      </div>

      <div className="containerRanks">
        {ranks.map((rank) => (
          <div className="rank" key={rank._id}>
            <div className="rankName" style={{ backgroundColor: rank.color }}>
              {rank.name}
            </div>
            <div className="rankPermissions">{rank.permissions.join(",")}</div>
            <div className="rankSalary">$ {rank.salary}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RanksHome;
