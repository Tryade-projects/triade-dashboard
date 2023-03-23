import React from "react";
import styles from "./_employeeDetails.module.scss";
import Cover from "./componentsEmployeeDetails/Cover";
import WrapperAvatarActions from "./componentsEmployeeDetails/WrapperAvatarActions";
import { getInitialValue } from "../../utils/useStickyState";
import { useState } from "react";

const EmployeeDetails = () => {
  const [t, setT] = useState(() => getInitialValue("employee", {}));

  return (
    <div className={styles.container}>
      <Cover />
      <div className={styles.body}>
        <WrapperAvatarActions />
        <div className={styles.wrapperNameRank}>
          <p className="bold">
            {t.firstName} {t.lastName}
          </p>
          <span className="semiBold">Responsable</span>
        </div>
        <div className={styles.test}>
          <div>
            <div></div>
            <p className="semiBold">{t.address}</p>
          </div>
          <div>
            <div></div>
            <p className="semiBold">{t.phone}</p>
          </div>
          <div>
            <div></div>
            <p className="semiBold">{t.mail}</p>
          </div>
          <div>
            <div></div>
            <p className="semiBold">{t.birth}</p>
          </div>
        </div>
        <div className={styles.informations}>
          <p className="bold">Informations :</p>
          <p className="regular">
            {t.informations ?? "Aucune informations enregistrés"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
