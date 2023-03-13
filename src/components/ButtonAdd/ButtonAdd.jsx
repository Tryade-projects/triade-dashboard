import React from "react";
import buttonPlus from "../../assets/buttonPlus.svg";
import { useNavigate } from "react-router-dom";

const ButtonAdd = ({ path }) => {
  const navigate = useNavigate();

  const handleMore = () => {
    switch (path) {
      case "/employees":
        return navigate("add_employee");
      default:
        return "";
    }
  };

  return (
    <div onClick={handleMore} className="container-button-add">
      <img src={buttonPlus} alt="image du signe plus" />
      <button className="regular">Ajouter</button>
    </div>
  );
};

export default ButtonAdd;
