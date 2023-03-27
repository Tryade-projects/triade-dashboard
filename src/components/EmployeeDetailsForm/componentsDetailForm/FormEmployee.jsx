import React, { useState } from "react";
import styles from "./_formEmployee.module.scss";
import ButtonForm from "../../ButtonForm/ButtonForm";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import ErrorMessageFormEmployee from "./ErrorMessageFormEmployee.jsx";
import { useStickyState } from "../../../utils/useStickyState";
import LabelForm from "./LabelForm";
import InputForm from "./InputForm";
import { v4 as uuidv4 } from "uuid";

const NAME_KEY = "employees";

const FormEmployee = () => {
<<<<<<< HEAD
  const [infoEmployee, setInfoEmployee] = useStickyState(NAME_KEY, []);
  const [ranks, setRanks] = useState("Recrue");
  const [displayRanks, setDisplayRanks] = useState(false);
=======
  // const { state } = useLocation();
  // const profil = state || [];
  // const [t, setT] = useState(() => getInitialValue("employees", []));
  // const finde = t.find((f) => f.id === profil);
  // console.log(finde);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [infoEmployee, setInfoEmployee] = useStickyState(NAME_KEY, []);
  const [ranksLocalStorage, setRanksLocalStorage] = useStickyState("ranks", []);
  const [displayRank, setDisplayRank] = useState("Recrue");
  const [colorRank, setColorRank] = useState("");

  const [diplayDropdown, setDisplayDropdown] = useState(false);
>>>>>>> employee_detail

  const handleDisplayRanks = () => {
    setDisplayDropdown((current) => !current);
  };

  const handleRanks = (rank) => {
    setDisplayRank(rank.name);
    setColorRank(rank.color);
  };

  const errorMessage = "Champs requis";

  const navigate = useNavigate();

  const onCancel = () => {
    navigate("/employees");
  };

  const onSubmit = (data) => {
    const newEmployee = {
      id: uuidv4(),
      firstName: data.firstName,
      lastName: data.lastName,
      address: data.address,
      birth: data.birth,
      mail: data.mail,
      phone: data.phone,
      rank: data.rank,
      colorRank: colorRank,
      place: data.place,
      information: data.informations,
      employee_at: "March 25, 2021",
    };
    setInfoEmployee((employee) => [...employee, newEmployee]);
<<<<<<< HEAD
=======
    setTimeout(() => navigate("/employees"), 0);
>>>>>>> employee_detail
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputForm
        label={"Prénom *"}
        htmlFor={"firstName"}
        className={"semiBold"}
        placeholder={"Samantha"}
        id={"firstName"}
        type={"text"}
        name={"firstName"}
        // value={finde.firstName}
        register={register}
        errors={errors}
        validationSchema={{ required: errorMessage }}
        styleErrors={styles.errors}
      />
      <InputForm
        label={"Nom *"}
        htmlFor={"lastName"}
        className={"semiBold"}
        placeholder={"William"}
        id={"lastName"}
        type={"text"}
        name={"lastName"}
        register={register}
        errors={errors}
        validationSchema={{ required: errorMessage }}
        styleErrors={styles.errors}
      />
      <div>
        <LabelForm
          className={"semiBold"}
          htmlFor={"date-place-born"}
          label={"Date et Lieu de Naissance *"}
        />
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
      <InputForm
        label={"Adresse *"}
        htmlFor={"address"}
        className={"semiBold"}
        placeholder={"856 Hilton Street"}
        id={"address"}
        type={"text"}
        name={"address"}
        register={register}
        errors={errors}
        validationSchema={{ required: errorMessage }}
        styleErrors={styles.errors}
      />
      <InputForm
        label={"Email *"}
        htmlFor={"mail"}
        className={"semiBold"}
        placeholder={"william@email.fr"}
        id={"mail"}
        type={"text"}
        name={"mail"}
        register={register}
        errors={errors}
        validationSchema={{
          required: errorMessage,
          pattern: {
            value: /^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
            message: "L'adresse mail n'est pas valide",
          },
        }}
        styleErrors={styles.errors}
      />
      <InputForm
        label={"Phone *"}
        htmlFor={"phone"}
        className={"semiBold"}
        placeholder={"555-1345"}
        id={"phone"}
        type={"text"}
        name={"phone"}
        register={register}
        errors={errors}
        validationSchema={{
          required: errorMessage,
          pattern: {
            value: /^\d{3}-\d{4}$/,
            message: "Le numéro n'est pas valide",
          },
        }}
        styleErrors={styles.errors}
      />
      <div>
        <LabelForm className={"semiBold"} label={"Grades *"} />
        <div className={styles.select} onClick={handleDisplayRanks}>
          <input
            value={displayRank}
            readOnly
            {...register("rank", { required: errorMessage })}
          />
          <div className={styles.triangle}></div>
        </div>
        <ul
          className={
            diplayDropdown
              ? `${styles.active} ${styles.options}`
              : styles.options
          }
        >
          {ranksLocalStorage.map((rank) => (
            <li
              onClick={() => handleRanks(rank)}
              className={styles.option}
              key={rank._id}
            >
              {rank.name}
            </li>
          ))}
        </ul>
        <ErrorMessageFormEmployee
          message={errors.rank?.message}
          style={styles.errors}
        />
      </div>
      <div>
        <LabelForm
          className={"semiBold"}
          label={"Informations"}
          htmlFor={"information"}
        />
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
