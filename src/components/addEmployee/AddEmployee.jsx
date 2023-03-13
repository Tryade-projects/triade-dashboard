import React from "react";
import Details from "../Details/Details";
import Header from "../Header/Header";

const addEmployee = () => {
  return (
    <main className="main">
      <Header title={"Ajouter un Employé"} />
      <Details title={"Détails Employé"} />
    </main>
  );
};

export default addEmployee;
