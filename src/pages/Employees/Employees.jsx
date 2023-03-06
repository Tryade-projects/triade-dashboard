import React from "react";
import data from "../../../fakeData.json";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import ButtonAdd from "../../components/ButtonAdd/ButtonAdd";

const Employees = () => {
  return (
    <main className="main">
      <Header title={"Employés"} />
      <div className="container-search-add">
        <SearchBar />
        <ButtonAdd />
      </div>
    </main>
  );
};

export default Employees;
