import React from "react";
import styles from "./_employeeDetails.module.scss";
import cover from "../../assets/cover.png";
import avatar from "../../assets/fake-avatar.svg";
import trending from "../../assets/trending.svg";
import decrease from "../../assets/decrease.svg";
import fired from "../../assets/fired.svg";

const EmployeeDetails = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cover}>
        <img
          src={cover}
          alt="image avec deux cercles
        "
        />
      </div>
      <div className={styles.body}>
        <div className={styles.wrapperAvatar}>
          <div className={styles.avatar}>
            <svg>
              <circle
                cx="100"
                cy="100"
                r="90"
                strokeWidth="8"
                fill="transparent"
              />
            </svg>
            <img src={avatar} alt="" />
          </div>
          <div className={styles.actions}>
            <div>
              <img src={trending} alt="" />
            </div>
            <div>
              <img src={decrease} alt="" />
            </div>
            <div>
              <img src={fired} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
