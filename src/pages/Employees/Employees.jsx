import React from "react";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import ButtonAdd from "../../components/ButtonAdd/ButtonAdd";
import ManageEmployeeDash from "../../components/ManageEmployeeDash/ManageEmployeeDash";

const Employees = () => {
  return (
    <main className="main">
      <Header title={"Employés"} />
      <div className="container-search-add">
        <SearchBar />
        <ButtonAdd />
      </div>
      <ManageEmployeeDash />
    </main>
  );
};

export default Employees;
