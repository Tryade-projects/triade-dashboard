import React from "react";
import Header from "../../components/Header/Header";
import EmployeeDetails from "../../components/EmployeeDetails/EmployeeDetails";

const EmployeeDetail = () => {
  return (
    <>
      <Header title={"Détails de l'employé"} />
      <EmployeeDetails />
    </>
  );
};

export default EmployeeDetail;
