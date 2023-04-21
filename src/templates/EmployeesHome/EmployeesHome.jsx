import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import ButtonAdd from "../../components/ButtonAdd/ButtonAdd";
import ManageEmployeeDash from "../../components/ManageEmployeeDash/ManageEmployeeDash";

const EmployeesHome = ({ employees }) => {
  const [search, setSearch] = useState("");
  return (
    <>
      <Header title={"Employés"} />
      <div className="mainContainerEmployeeHome">
        <div className="container-search-add">
          <SearchBar search={search} setSearch={setSearch} />
          <Link to="/employees/employee/add" className="flex">
            <ButtonAdd />
          </Link>
        </div>
        <ManageEmployeeDash search={search} employees={employees} />
      </div>
    </>
  );
};

export default EmployeesHome;
