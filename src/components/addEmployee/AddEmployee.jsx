import React from "react";
import Details from "../Details/Details";
import Header from "../Header/Header";
import { useLocation } from "react-router-dom";

const addEmployee = () => {
  const { state } = useLocation();

  return (
    <main className="main">
      <Header title={"Ajouter un Employé"} />
      <Details title={"Détails Employé"} />
    </main>
  );
};

export default addEmployee;
