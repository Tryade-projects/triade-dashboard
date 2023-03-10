import React, { useState } from "react";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import ButtonAdd from "../../components/ButtonAdd/ButtonAdd";
import ManageEmployeeDash from "../../components/ManageEmployeeDash/ManageEmployeeDash";

const Employees = () => {
  const [search, setSearch] = useState("");

  return (
    <main className="main">
      <Header title={"Employés"} />
      <div className="container-search-add">
        <SearchBar search={search} setSearch={setSearch} />
        <ButtonAdd />
      </div>
      <ManageEmployeeDash search={search} />
    </main>
  );
};

export default Employees;
