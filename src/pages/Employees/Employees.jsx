import React, { useState } from "react";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import ButtonAdd from "../../components/ButtonAdd/ButtonAdd";
import ManageEmployeeDash from "../../components/ManageEmployeeDash/ManageEmployeeDash";
import { useLocation, Link } from "react-router-dom";

const Employees = () => {
  const [search, setSearch] = useState("");
  const location = useLocation();
  const path = location.pathname;
  return (
    <main className="main">
      <Header title={"Employés"} />
      <div className="container-search-add">
        <SearchBar search={search} setSearch={setSearch} />
        <Link to={`${path}/add_employee`} className="flex">
          <ButtonAdd />
        </Link>
      </div>
      <ManageEmployeeDash search={search} />
    </main>
  );
};

export default Employees;
