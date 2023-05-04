import React, { useState, useContext } from "react";
import styles from "./_formEmployee.module.scss";
import ButtonForm from "../../ButtonForm/ButtonForm";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import ErrorMessageFormEmployee from "./ErrorMessageFormEmployee.jsx";
import { useStickyState } from "../../../utils/useStickyState";
import LabelForm from "./LabelForm";
import InputForm from "./InputForm";
import { v4 as uuidv4 } from "uuid";
import { firstLetterUpperCase } from "../../../utils/stringManager";
import { EmployeesContext } from "../../../App";

const NAME_KEY = "employees";

const FormEmployee = () => {
  const { state } = useLocation();

  const profilId = state || [];

  const { employees, setEmployees } = useContext(EmployeesContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [ranksLocalStorage, setRanksLocalStorage] = useStickyState("ranks", []);
  const [displayRank, setDisplayRank] = useState(
    state ? state.rank : ranksLocalStorage[ranksLocalStorage.length - 1]?.label,
  );
  const [colorRank, setColorRank] = useState(state ? state.color : "");

  const [displayDropdown, setDisplayDropdown] = useState(false);

  const handleDisplayRanks = () => {
    setDisplayDropdown((current) => !current);
  };

  const handleRanks = (rank) => {
    setDisplayRank(rank.label);
    setColorRank(rank.color);
    handleDisplayRanks();
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
      rank: displayRank,
      color: colorRank,
      place: data.place,
      information: data.informations,
      employee_at: new Date().toLocaleDateString(),
      image: "/src/assets/fake-avatar.svg",
    };

    if (state) {
      const employeeIndex = employees.findIndex(
        (employee) => employee.id === state.id,
      );
      const newEmployees = [...employees];
      newEmployees[employeeIndex] = {
        ...newEmployee,
        id: state.id,
      };
      localStorage.setItem(NAME_KEY, JSON.stringify(newEmployees));
      setEmployees(newEmployees);
    } else {
      localStorage.setItem(
        NAME_KEY,
        JSON.stringify([...employees, newEmployee]),
      );
      setEmployees((employee) => [...employee, newEmployee]);
    }
    navigate("/employees");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <InputForm
        defaultValue={profilId?.firstName}
        label={"Prénom *"}
        htmlFor={"firstName"}
        className={"semiBold"}
        placeholder={"Samantha"}
        id={"firstName"}
        type={"text"}
        name={"firstName"}
        register={register}
        errors={errors}
        validationSchema={{ required: errorMessage }}
        styleErrors={styles.errors}
      />
      <InputForm
        defaultValue={profilId?.lastName}
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
            defaultValue={profilId?.birth}
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
            defaultValue={profilId?.place}
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
        defaultValue={profilId?.address}
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
        defaultValue={profilId?.mail}
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
        defaultValue={profilId?.phone}
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
        <LabelForm
          className={"semiBold"}
          label={"Grades *"}
          htmlFor={"ranks"}
        />
        <div className={styles.select} onClick={handleDisplayRanks}>
          <input value={displayRank} readOnly id="ranks" />
          <div className={styles.triangle}></div>
        </div>
        <ul
          className={
            displayDropdown
              ? `${styles.active} ${styles.options}`
              : styles.options
          }
        >
          {ranksLocalStorage.map((rank) => (
            <li
              onClick={() => handleRanks(rank)}
              className={styles.option}
              key={rank.id}
            >
              {rank.label}
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
            className="colorPurple backWhite backButtonCancelHover"
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
