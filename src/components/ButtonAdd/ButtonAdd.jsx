import React from "react";
import buttonPlus from "/assets/buttonPlus.svg";

const ButtonAdd = () => {
  return (
    <div className="container-button-add">
      <img src={buttonPlus} alt="image du signe plus" />
      <button className="regular">Ajouter</button>
    </div>
  );
};

export default ButtonAdd;
