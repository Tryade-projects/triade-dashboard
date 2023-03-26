import React from "react";
import styles from "./_employeeDetails.module.scss";
import Cover from "./componentsEmployeeDetails/Cover";
import WrapperAvatarActions from "./componentsEmployeeDetails/WrapperAvatarActions";
import InfoEmployee from "./componentsEmployeeDetails/InfoEmployee";
import { useLocation } from "react-router-dom";

const EmployeeDetails = () => {
  const { state } = useLocation();

  const profil = state || [];

  return (
    <div className={styles.container}>
      <Cover />
      <div className={styles.body}>
        <WrapperAvatarActions />
        <InfoEmployee profil={profil} />
      </div>
    </div>
  );
};

export default EmployeeDetails;
