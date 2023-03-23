import React, { useState } from "react";
import styles from "./_formEmployee.module.scss";
import ButtonForm from "../../ButtonForm/ButtonForm";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ErrorMessageFormEmployee from "./ErrorMessageFormEmployee.jsx";
import { useStickyState } from "../../../utils/useStickyState";

const NAME_KEY = "employee";

const FormEmployee = () => {
  const [infoEmployee, setInfoEmployee] = useStickyState(NAME_KEY, {});
  const [ranks, setRanks] = useState("Recrue");
  const [displayRanks, setDisplayRanks] = useState(false);

  const handleDisplayRanks = () => {
    setDisplayRanks((current) => !current);
  };

  const handleRanks = (rank) => {
    setRanks(rank);
  };

  const errorMessage = "Champs requis";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  const onCancel = () => {
    navigate("/employees");
  };

  const onSubmit = (data) => {
    const newEmployee = {
      id: Date.now(),
      firstName: data.firstName,
      lastName: data.lastName,
      address: data.address,
      birth: data.birth,
      mail: data.mail,
      phone: data.phone,
      rank: data.rank,
      place: data.place,
      information: data.informations,
    };
    setInfoEmployee(newEmployee);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="semiBold" htmlFor="first-name">
          Prénom *
        </label>
        <input
          id="first-name"
          type="text"
          placeholder="Samantha"
          {...register("firstName", { required: errorMessage })}
        />
        <ErrorMessageFormEmployee
          message={errors.firstName?.message}
          style={styles.errors}
        />
      </div>
      <div>
        <label className="semiBold" htmlFor="last-name">
          Nom *
        </label>
        <input
          id="last-name"
          type="text"
          placeholder="William"
          {...register("lastName", { required: errorMessage })}
        />
        <ErrorMessageFormEmployee
          message={errors.lastName?.message}
          style={styles.errors}
        />
      </div>
      <div>
        <label className="semiBold" htmlFor="date-place-born">
          Date et Lieu de Naissance *
        </label>
        <div className={styles.wrapperDateBorn}>
          <input
            id="date-place-born"
            type="text"
            placeholder="24/02/1997"
            {...register("birth", {
              required: errorMessage,
              pattern: {
                value: /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/,
                message: "La date de naissance n'est pas valide",
              },
            })}
          />

          <input
            id="date-place-born"
            type="text"
            placeholder="Jakarta"
            {...register("place", { required: errorMessage })}
          />
        </div>
        <div className={styles.wrapperErrorsBirthPlace}>
          <ErrorMessageFormEmployee
            message={errors.birth?.message}
            style={styles.errors}
          />
          <ErrorMessageFormEmployee
            message={errors.place?.message}
            style={styles.errors}
          />
        </div>
      </div>
      <div>
        <label className="semiBold" htmlFor="address">
          Adresse *
        </label>
        <input
          id="address"
          type="text"
          placeholder="856 Hilton Street"
          {...register("address", { required: errorMessage })}
        />
        <ErrorMessageFormEmployee
          message={errors.address?.message}
          style={styles.errors}
        />
      </div>
      <div>
        <label className="semiBold" htmlFor="mail">
          Email *
        </label>
        <input
          id="mail"
          type="email"
          placeholder="william@mail.com"
          {...register("mail", {
            required: errorMessage,
            pattern: {
              value: /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
              message: "L'adresse mail n'est pas valide",
            },
          })}
        />
        <ErrorMessageFormEmployee
          message={errors.mail?.message}
          style={styles.errors}
        />
      </div>
      <div>
        <label className="semiBold" htmlFor="phone">
          Phone *
        </label>
        <input
          id="phone"
          type="text"
          placeholder="555-1345"
          {...register("phone", {
            required: errorMessage,
            pattern: {
              value: /^\d{3}-\d{4}$/,
              message: "Le numéro n'est pas valide",
            },
          })}
        />
        <ErrorMessageFormEmployee
          message={errors.phone?.message}
          style={styles.errors}
        />
      </div>
      <div>
        <label className="semiBold">Grades *</label>
        <div className={styles.select} onClick={handleDisplayRanks}>
          <input value={ranks} readOnly {...register("rank")} />
          <div className={styles.triangle}></div>
        </div>
        <ul
          className={
            displayRanks ? `${styles.active} ${styles.options}` : styles.options
          }
        >
          <li className={styles.option}>Recrue</li>
          <li onClick={() => handleRanks("Agent")} className={styles.option}>
            Agent
          </li>
          <li onClick={() => handleRanks("Chef")} className={styles.option}>
            Chef
          </li>
          <li
            onClick={() => handleRanks("Commandant")}
            className={styles.option}
          >
            Commandant
          </li>
          <li className={styles.option}>Commandant</li>
          <li className={styles.option}>Commandant</li>
        </ul>
      </div>
      <div>
        <label className="semiBold" htmlFor="information">
          Informations
        </label>
        <textarea
          {...register("informations")}
          id="information"
          cols="30"
          rows="10"
        />
        <div className={styles.wrapperButton}>
          <ButtonForm
            text="Annuler"
            type="button"
            className="colorPurple backWhite"
            onClick={onCancel}
          />
          <ButtonForm
            text="Valider"
            type="submit"
            className="colorWhite backPurple"
          />
        </div>
      </div>
    </form>
  );
};

export default FormEmployee;
