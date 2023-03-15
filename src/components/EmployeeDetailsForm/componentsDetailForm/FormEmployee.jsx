import React, { useState } from "react";
import styles from "./_formEmployee.module.scss";

const FormEmployee = () => {
  return (
    <form className={styles.form}>
      <div>
        <label className="semiBold" htmlFor="first-name">
          Prenom *
        </label>
        <input id="first-name" type="text" placeholder="Samantha" />
      </div>
      <div>
        <label className="semiBold" htmlFor="last-name">
          Nom *
        </label>
        <input id="last-name" type="text" placeholder="William" />
      </div>
      <div>
        <label className="semiBold" htmlFor="date-place-born">
          Date et Lieu de Naissance *
        </label>
        <div className={styles.wrapperDateBorn}>
          <input
            id="date-place-born"
            type="text"
            placeholder="24 Février 1997"
          />
          <input id="date-place-born" type="text" placeholder="Jakarta" />
        </div>
      </div>
      <div>
        <label className="semiBold" htmlFor="address">
          Adresse *
        </label>
        <input id="address" type="text" placeholder="856 Hilton Street" />
      </div>
      <div>
        <label className="semiBold" htmlFor="mail">
          Email *
        </label>
        <input id="mail" type="text" placeholder="william@mail.com" />
      </div>
      <div>
        <label className="semiBold" htmlFor="phone">
          Phone *
        </label>
        <input id="phone" type="text" placeholder="555-1345" />
      </div>
      <div>
        <label className="semiBold" htmlFor="information">
          Informations
        </label>
        <textarea name="" id="information" cols="30" rows="10"></textarea>
      </div>
    </form>
  );
};

export default FormEmployee;
