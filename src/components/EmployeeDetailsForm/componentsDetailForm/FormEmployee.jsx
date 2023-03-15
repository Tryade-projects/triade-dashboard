import React, { useState } from "react";
import styles from "./_formEmployee.module.scss";

const FormEmployee = () => {
  return (
    <form className={styles.form}>
      <div>
        <label htmlFor="">Prenom</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Nom</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Date et Lieu de Naissance</label>
        <input type="text" />
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Adresse</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Email</label>
        <input type="text" />
      </div>
      <div>
        <label htmlFor="">Phone</label>
        <input type="number" />
      </div>
      <div>
        <label htmlFor="">Informations</label>
        <textarea name="" id="" cols="30" rows="10"></textarea>
      </div>
    </form>
  );
};

export default FormEmployee;
