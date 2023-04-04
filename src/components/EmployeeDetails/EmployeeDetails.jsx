import React from "react";
import styles from "./_employeeDetails.module.scss";
import Cover from "./componentsEmployeeDetails/Cover";
import WrapperAvatarActions from "./componentsEmployeeDetails/WrapperAvatarActions";
import InfoEmployee from "./componentsEmployeeDetails/InfoEmployee";
import { useLocation } from "react-router-dom";
import ShortEmployeeListContainer from "../ShortEmployeeListContainer/ShortEmployeeListContainer";

const EmployeeDetails = () => {
  const { state } = useLocation();

  const profil = state || [];

  return (
    <div className={styles.container}>
      <div>
        <Cover />
        <WrapperAvatarActions playerId={profil.id} />
      </div>
      <div className={styles.two}>
        <ShortEmployeeListContainer />
      </div>

    </div>
  );
};


export default EmployeeDetails;
