import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import ButtonAdd from "../../components/ButtonAdd/ButtonAdd";
import ManageDashGrades from "../../components/ManageGradesDash/ManageDashGrades";

/**
 *
 * @param {object} props
 * @param {object[]} props.ranks - Array of ranks
 * @param {string} props.ranks._id - Id of the rank
 * @param {string} props.ranks.name - Name of the rank
 * @param {string} props.ranks.label - Label of the rank
 * @param {string} props.ranks.color - Color of the rank
 * @param {string[]} props.ranks.permissions - Permissions of the rank
 * @param {number} props.ranks.salary - Salary of the rank
 * @example
 * <RanksHome
 * ranks={[
 * {
 * _id: "1e926790-1b55-41d8-b719-63bf67268677",
 * name: "Cadet",
 * label: "Cadet",
 * color: "#FCC43E",
 * permissions: ["finance", "recruit", "chest"],
 * salary: 250,
 * },
 * {
 * _id: "1e926790-1b55-41d8-b719-63bf67268677",
 * name: "Commandant",
 * label: "Commandant",
 * color: "#DSS43E",
 *  permissions: ["finance", "recruit", "chest", "cloakrooms", "cloakroomsManagement", "garage", "garageManagement", "armory"],
 * salary: 10,
 * },
 * ]}
 * @returns {JSX.Element}
 */
const RanksHome = ({ ranks }) => {
  const [search, setSearch] = useState("");
  return (
    <>
      <Header title={"Grades"} />
      <div className="container-search-add">
        <SearchBar search={search} setSearch={setSearch} />
        <Link to="/ranks/addRank" className="flex">
          <ButtonAdd />
        </Link>
      </div>
      <ManageDashGrades search={search} />
    </>
  );
};

export default RanksHome;
