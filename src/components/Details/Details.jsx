import React from "react";
import RanksForm from "../RanksForm/RanksForm";
import EmployeeDetailsForm from "../EmployeeDetailsForm/EmployeeDetailsForm";

const Details = ({ title }) => {
  return (
    <section className="details">
      <h2 className="detailsTitle">{title}</h2>
      {title === "Ajouter un Employé" ? <EmployeeDetailsForm /> : <RanksForm />}
    </section>
  );
};

export default Details;
