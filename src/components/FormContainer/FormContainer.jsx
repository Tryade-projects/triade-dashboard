import React from "react";
import RanksForm from "../RanksForm/RanksForm";
import EmployeeDetailsForm from "../EmployeeDetailsForm/EmployeeDetailsForm";

const FormContainer = ({ title }) => {
  return (
    <section className="formContainer">
      <h2 className="formContainerTitle">{title}</h2>
      {title === "Ajouter un Employé" ? <EmployeeDetailsForm /> : <RanksForm />}
    </section>
  );
};

export default FormContainer;
