import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Checkbox from "../Checkbox/Checkbox";
import { RanksContext } from "../../pages/Ranks/Ranks";
import { v4 as uuidv4 } from "uuid";

const RanksForm = () => {
  const [gradeName, setGradeName] = useState("");
  const [gradeLabel, setGradeLabel] = useState("");
  const [permissions, setPermissions] = useState({
    finance: false,
    recruit: false,
    chest: false,
    cloakrooms: false,
    cloakroomsManagement: false,
    garage: false,
    garageManagement: false,
    armory: false,
  });
  const [salary, setSalary] = useState(0);
  const [color, setColor] = useState("#FCC43E");

  const navigate = useNavigate();

  const { ranks, setRanks } = useContext(RanksContext);
  console.log(ranks);

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
    console.log(typeof event.target);
    const { name, checked } = event.target;

    setPermissions((prevState) => ({
      ...prevState,
      [name]: checked,
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

    return Object.entries(permissions)
      .filter(([key, value]) => value)
      .map(([key, _]) => permissionLabels[key]);
  };

  const onSubmit = (event) => {
    console.log("submit");
    event.preventDefault();
    const permissionsArray = convertPermissionsToArray(permissions);

    const newGrade = {
      _id: uuidv4(),
      name: gradeName,
      label: gradeLabel,
      ranks: gradeLabel,
      permissions: permissionsArray,
      salary,
      color,
    };
    console.log(newGrade);
    localStorage.setItem("ranks", JSON.stringify([...ranks, newGrade]));
    setRanks([...ranks, newGrade]);
    navigate("/ranks");
    console.log(ranks);
  };

  const onCancel = (event) => {
    event.preventDefault();
    navigate("/ranks");
  };

  return (
    <form className="detailsForm" onSubmit={onSubmit}>
      <div className="formGroup gradeNameWrapper">
        <label className="label" htmlFor="gradeName">
          Nom (minuscules) *
        </label>
        <input
          className="input"
          type="text"
          name="gradeName"
          id="gradeName"
          placeholder="lieutenant"
          onChange={(event) => {
            setGradeName(event.target.value);
          }}
          required
        />
      </div>
      <div className="formGroup gradeLabelWrapper">
        <label className="label" htmlFor="gradeLabel">
          Label (Nom d'affichage) *
        </label>
        <input
          className="input"
          type="text"
          name="gradeLabel"
          id="gradeLabel"
          placeholder="Lieutenant-Chef"
          onChange={(event) => {
            setGradeLabel(event.target.value);
          }}
          required
        />
      </div>

      <div className="formGroup checkboxGroupWrapper">
        <label className="label">Permissions *</label>
        <div className="checkboxGroup">
          <Checkbox
            label="Accès aux finances de l'entreprise"
            value={permissions.finance}
            onChange={handleCheckbox}
            name="finance"
          />
          <Checkbox
            label="Possibilité de recruter"
            value={permissions.recruit}
            onChange={handleCheckbox}
            name="recruit"
          />
          <Checkbox
            label="Accès aux coffres"
            value={permissions.chest}
            onChange={handleCheckbox}
            name="chest"
          />
          <Checkbox
            label="Accès aux vestiaires"
            value={permissions.cloakrooms}
            onChange={handleCheckbox}
            name="cloakrooms"
          />
          <Checkbox
            label="Possibilités de gérer les vestiaires"
            value={permissions.cloakroomsManagement}
            onChange={handleCheckbox}
            name="cloakroomsManagement"
          />
          <Checkbox
            label="Accès aux garages"
            value={permissions.garage}
            onChange={handleCheckbox}
            name="garage"
          />
          <Checkbox
            label="Possibilités de gérer les garages"
            value={permissions.garageManagement}
            onChange={handleCheckbox}
            name="garageManagement"
          />
          <Checkbox
            label="Accès à l'armurerie"
            value={permissions.armory}
            onChange={handleCheckbox}
            name="armory"
          />
        </div>
      </div>

      <div className="formGroup salaryWrapper">
        <label className="label" htmlFor="salary">
          Salaires *
        </label>
        <input
          className="input"
          type="number"
          name="salary"
          id="salary"
          placeholder="250 ($)"
          onChange={(event) => {
            setSalary(Number(event.target.value));
          }}
          required
        />
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
              setColor(event.target.value);
            }}
            value={color}
            className="inputColor"
          />
          <span>{color}</span>
        </div>
      </div>

      <div className="buttonFormWrapper">
        <button type="button" className="buttonForm" onClick={onCancel}>
          Annuler
        </button>
        <button type="submit" className="buttonForm">
          Valider
        </button>
      </div>
    </form>
  );
};

export default RanksForm;
