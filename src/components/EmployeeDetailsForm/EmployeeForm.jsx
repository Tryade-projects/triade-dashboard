import React from "react";
import styles from "./_employeeForm.module.scss";
import FormEmployee from "./componentsDetailForm/FormEmployee";

const EmployeeDetailsForm = () => {
  return (
    <div className={styles.container}>
      <FormEmployee />
    </div>
  );
};

export default EmployeeDetailsForm;