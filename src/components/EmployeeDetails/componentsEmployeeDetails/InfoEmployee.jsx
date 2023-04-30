import React from "react";
import styles from "./_infoEmployee.module.scss";
import number from "../../../assets/number.svg";
import email from "../../../assets/emailPlayer.svg";
import address from "../../../assets/address.svg";
import date from "../../../assets/Date.svg";

const InfoEmployee = ({ profil }) => {
  console.log({ profil });
  return (
    <>
      <div className={styles.wrapperNameRank}>
        <p className="bold">
          {profil.firstName} {profil.lastName}{" "}
        </p>
        <span className="semiBold"> {profil.rank} </span>
      </div>
      <div className={styles.info}>
        <div>
          <div>
            <img src={address} alt="" />
          </div>
          <p className="semiBold"> {profil.address} </p>
        </div>
        <div>
          <div>
            <img src={number} alt="" />
          </div>
          <p className="semiBold"> {profil.phone} </p>
        </div>
        <div>
          <div>
            <img src={email} alt="" />
          </div>
          <p className="semiBold"> {profil.mail} </p>
        </div>
        <div>
          <div>
            <img src={date} alt="" />
          </div>
          <p className="semiBold"> {profil.birth} </p>
        </div>
      </div>
      <div className={styles.informations}>
        <p className="bold">Informations :</p>
        <p className="regular">
          {profil.information ?? "Aucune informations enregistrés"}
        </p>
      </div>
    </>
  );
};

export default InfoEmployee;
