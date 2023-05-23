import React, { useEffect, useState } from "react";
import styles from "./_employeeDetails.module.scss";
import Cover from "./componentsEmployeeDetails/Cover";
import WrapperAvatarActions from "./componentsEmployeeDetails/WrapperAvatarActions";
import InfoEmployee from "./componentsEmployeeDetails/InfoEmployee";
import { useLocation } from "react-router-dom";
import ShortEmployeeListContainer from "../ShortEmployeeListContainer/ShortEmployeeListContainer";

const EmployeeDetails = () => {
  const { state } = useLocation();
  const [profil, setProfil] = useState(state);

  // const profil = state || [];
  console.log({ profil });

  useEffect(() => {
    setProfil(state);
  }, [state]);

  return (
    <div className={styles.container}>
      <section className={styles.firstContainer}>
        <Cover />
        <div>
          <WrapperAvatarActions profil={profil} setProfil={setProfil} />
          <InfoEmployee profil={profil} />
        </div>
      </section>
      <aside className={styles.showEmployee}>
        <ShortEmployeeListContainer />
      </aside>
    </div>
  );
};

export default EmployeeDetails;
