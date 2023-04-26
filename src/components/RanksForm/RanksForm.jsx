import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Checkbox from "../Checkbox/Checkbox";
import { RanksContext } from "../../App";
import ButtonForm from "../ButtonForm/ButtonForm";
import { v4 as uuidv4 } from "uuid";
import { firstLetterUpperCase } from "../../utils/stringManager";

const permissionLabels = {
  finance: "Finances",
  recruit: "Recrutement",
  chest: "Coffres",
  cloakrooms: "Vestiaires",
  cloakroomsManagement: "Gestion des vestiaires",
  garage: "Garage",
  garageManagement: "Gestion du garage",
  armory: "Armurerie",
};

const RanksForm = () => {
  const [rank, setRank] = useState({
    name: "",
    label: "",
    permissions: {
      finance: false,
      recruit: false,
      chest: false,
      cloakrooms: false,
      cloakroomsManagement: false,
      garage: false,
      garageManagement: false,
      armory: false,
    },
    salary: "",
    color: "#FCC43E",
  });

  const [errors, setErrors] = useState({
    name: false,
    nameAlreadyExist: false,
    label: false,
    labelAlreadyExist: false,
    salary: false,
    permissions: false,
  });

  const navigate = useNavigate();

  const { rankId } = useParams();

  const { ranks, setRanks } = useContext(RanksContext);

  useEffect(() => {
    /** @type {object} */
    const rank = ranks.find((rank) => rank._id === rankId);
    if (rank) {
      setRank({
        name: rank.name,
        label: rank.label,
        permissions: convertArrayToPermissions(rank.permissions),
        salary: rank.salary,
        color: rank.color,
      });
    }
  }, [rankId, ranks]);

  /**
   *
   * @param {object} event - Event object
   * @param {object} event.target - Target of the event
   * @param {string} event.target.name - Name of the target
   * @param {boolean} event.target.checked - Checked state of the target
   * @example
   * handleCheckbox({
   * target: {
   * name: "finance",
   * checked: true,
   * },
   * });
   * @return {void}
   */
  const handleCheckbox = (event) => {
    const { name, checked } = event.target;
    setErrors({
      ...errors,
      permissions: false,
    });
    setRank((current) => ({
      ...current,
      permissions: {
        ...current.permissions,
        [name]: checked,
      },
    }));
  };

  /**
   *
   * @param {object} permissions - Object containing the permissions of the rank
   * @param {boolean} permissions.finance - Access to the company finances
   * @param {boolean} permissions.recruit - Ability to recruit
   * @param {boolean} permissions.chest - Access to the company chests
   * @param {boolean} permissions.cloakrooms - Access to the company cloakrooms
   * @param {boolean} permissions.cloakroomsManagement - Ability to manage the company cloakrooms
   * @param {boolean} permissions.garage - Access to the company garages
   * @param {boolean} permissions.garageManagement - Ability to manage the company garages
   * @param {boolean} permissions.armory - Access to the company armory
   *
   *
   * @example
   * convertPermissionsToArray({
   * finance: true,
   * recruit: false,
   * chest: true,
   * cloakrooms: false,
   * cloakroomsManagement: false,
   * garage: false,
   * garageManagement: false,
   * armory: false,
   * })
   *
   * @return {array} - Array containing the permissions labels
   */
  const convertPermissionsToArray = (permissions) => {
    return Object.entries(permissions)
      .filter(([key, value]) => value)
      .map(([key, _]) => permissionLabels[key]);
  };

  /**
   * It takes an array of permission labels and returns an object with the same labels as keys and true
   * as values
   * @param {array} permissionsArray
   * @returns {object} An object with the keys of the permissionLabels object and the values of the
   * permissionsArray.
   */
  const convertArrayToPermissions = (permissionsArray) => {
    const permissionsObject = {};
    Object.keys(permissionLabels).forEach((key) => {
      permissionsObject[key] = permissionsArray.includes(permissionLabels[key]);
    });
    return permissionsObject;
  };

  const onSubmit = (event) => {
    event.preventDefault();

    const verifIfOnePermissionIsChecked = Object.values(rank.permissions).some(
      (value) => value,
    );

    const errorsInput = {
      name: rank.name.length === 0,
      nameAlreadyExist: ranks.some(
        (elm) => elm.name.toLowerCase() === rank.name.toLowerCase(),
      ),
      label: rank.label.length === 0,
      labelAlreadyExist: ranks.some(
        (elm) => elm.label.toLowerCase() === rank.label.toLowerCase(),
      ),
      salary: rank.salary.length === 0,
      permissions: !verifIfOnePermissionIsChecked,
    };

    if (Object.values(errorsInput).some((value) => value)) {
      setErrors(errorsInput);
      return;
    }

    const permissionsArray = convertPermissionsToArray(rank.permissions);

    const rankNameToLowerCase = rank.name.toLowerCase();

    if (rankId) {
      const rankIndex = ranks.findIndex((rank) => rank._id === rankId);
      const newRanks = [...ranks];
      newRanks[rankIndex] = {
        _id: rankId,
        name: rankNameToLowerCase,
        label: firstLetterUpperCase(rank.label),
        permissions: permissionsArray,
        salary: rank.salary,
        color: rank.color,
      };
      localStorage.setItem("ranks", JSON.stringify(newRanks));
      setRanks(newRanks);
      navigate("/ranks");
      return;
    }

    const newGrade = {
      _id: uuidv4(),
      name: rankNameToLowerCase,
      label: firstLetterUpperCase(rank.label),
      permissions: permissionsArray,
      salary: rank.salary,
      color: rank.color,
    };
    localStorage.setItem("ranks", JSON.stringify([...ranks, newGrade]));
    setRanks([...ranks, newGrade]);
    navigate("/ranks");
  };

  const onCancel = (event) => {
    event.preventDefault();
    navigate("/ranks");
  };

  const errorHidden = (error) => {
    return error ? "errorRanksForm" : "errorRanksForm hidden";
  };

  return (
    <form className="detailsForm" onSubmit={onSubmit}>
      <div className={"formGroup gradeNameWrapper"}>
        <label className="label" htmlFor="gradeName">
          Nom (minuscules) *
        </label>
        <input
          value={rank.name}
          className={`input`}
          type="text"
          name="gradeName"
          id="gradeName"
          placeholder="lieutenant"
          onChange={(event) => {
            if (event.target.value.length > 0 && errors.name === true) {
              setErrors((current) => ({
                ...current,
                name: false,
              }));
            }
            setRank((current) => ({
              ...current,
              name: event.target.value,
            }));
          }}
          aria-required
        />
        <p className={errorHidden(errors.name || errors.nameAlreadyExist)}>
          {errors.name && "Veuillez renseigner le nom du grade"}
          {errors.nameAlreadyExist && "Ce nom de grade existe déjà"}
        </p>
      </div>
      <div className="formGroup gradeLabelWrapper">
        <label className="label" htmlFor="gradeLabel">
          Label (Nom d'affichage) *
        </label>
        <input
          value={rank.label}
          className={`input`}
          type="text"
          name="gradeLabel"
          id="gradeLabel"
          placeholder="Lieutenant-Chef"
          onChange={(event) => {
            if (event.target.value.length > 0 && errors.label === true) {
              setErrors((current) => ({
                ...current,
                label: false,
              }));
            }
            setRank((current) => ({
              ...current,
              label: event.target.value,
            }));
          }}
          aria-required
        />

        <p className={errorHidden(errors.label || errors.labelAlreadyExist)}>
          {errors.label && "Veuillez renseigner le nom du grade"}
          {errors.labelAlreadyExist && "Ce label de grade existe déjà"}
        </p>
      </div>

      <div className="formGroup checkboxGroupWrapper">
        <label className="label">Permissions *</label>

        <div className="checkboxGroup">
          <Checkbox
            label="Accès aux finances de l'entreprise"
            value={rank.permissions.finance}
            onChange={handleCheckbox}
            name="finance"
          />
          <Checkbox
            label="Possibilité de recruter"
            value={rank.permissions.recruit}
            onChange={handleCheckbox}
            name="recruit"
          />
          <Checkbox
            label="Accès aux coffres"
            value={rank.permissions.chest}
            onChange={handleCheckbox}
            name="chest"
          />
          <Checkbox
            label="Accès aux vestiaires"
            value={rank.permissions.cloakrooms}
            onChange={handleCheckbox}
            name="cloakrooms"
          />
          <Checkbox
            label="Possibilités de gérer les vestiaires"
            value={rank.permissions.cloakroomsManagement}
            onChange={handleCheckbox}
            name="cloakroomsManagement"
          />
          <Checkbox
            label="Accès aux garages"
            value={rank.permissions.garage}
            onChange={handleCheckbox}
            name="garage"
          />
          <Checkbox
            label="Possibilités de gérer les garages"
            value={rank.permissions.garageManagement}
            onChange={handleCheckbox}
            name="garageManagement"
          />
          <Checkbox
            label="Accès à l'armurerie"
            value={rank.permissions.armory}
            onChange={handleCheckbox}
            name="armory"
          />
        </div>

        <p className={errorHidden(errors.permissions)}>
          Veuillez sélectionner au moins une permission
        </p>
      </div>

      <div className="formGroup salaryWrapper">
        <label className="label" htmlFor="salary">
          Salaires *
        </label>
        <input
          value={rank.salary}
          className={`input`}
          type="number"
          name="salary"
          id="salary"
          placeholder="250 ($)"
          onChange={(event) => {
            if (event.target.value.length > 0 && errors.salary === true) {
              setErrors((current) => ({
                ...current,
                salary: false,
              }));
            }
            setRank((current) => ({
              ...current,
              salary: event.target.value,
            }));
          }}
          aria-required
          max={250}
          min={0}
        />

        <p className={errorHidden(errors.salary)}>
          Veuillez renseigner le salaire du grade
        </p>
      </div>

      <div className="formGroup colorWrapper">
        <label className="label" htmlFor="color">
          Couleur
        </label>
        <div className="inputColorWrapper">
          <input
            type="color"
            name="color"
            id="color"
            placeholder="#FCC43E"
            onChange={(event) => {
              setRank((current) => ({
                ...current,
                color: event.target.value,
              }));
            }}
            value={rank.color}
            className="inputColor"
          />
          <span>{rank.color}</span>
        </div>
      </div>

      <div className="buttonFormWrapper">
        <ButtonForm
          text="Annuler"
          type="button"
          onClick={onCancel}
          className="colorPurple backWhite backButtonCancelHover"
        />
        <ButtonForm
          text="Valider"
          type="submit"
          className="colorWhite backPurple"
        />
      </div>
    </form>
  );
};

export default RanksForm;
