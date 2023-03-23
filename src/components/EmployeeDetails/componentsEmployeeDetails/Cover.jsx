import React from "react";
import styles from "./_cover.module.scss";
import cover from "../../../assets/cover.png";

const Cover = () => {
  return (
    <div className={styles.cover}>
      <img
        src={cover}
        alt="image avec deux cercles
  "
      />
    </div>
  );
};

export default Cover;
