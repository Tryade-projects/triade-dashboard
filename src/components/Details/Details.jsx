import React from "react";
// import GradeDetailsForm from "../GradeDetailsForm/GradeDetailsForm";
// import EmployeeDetailsForm from "../EmployeeDetailsForm/EmployeeDetailsForm";

const Details = ({ title }) => {
  return (
    <section className="details">
      <h2 className="detailsTitle">{title}</h2>
      {/* {title === "Ajouter un Employé" ? (
        <EmployeeDetailsForm />
      ) : (
        <GradeDetailsForm />
      )} */}
    </section>
  );
};

export default Details;
