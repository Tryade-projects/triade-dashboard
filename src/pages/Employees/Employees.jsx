import React from "react";
import data from "../../../fakeData.json";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";

const Employees = () => {
  return (
    <main className="main">
      <Header title={"Employés"} />
      <SearchBar />
    </main>
  );
};

export default Employees;
