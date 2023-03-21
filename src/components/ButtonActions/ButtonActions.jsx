import React from "react";

const ButtonTransaction = ({ icon, alt, onClick }) => {
  return (
    <button type="button" className="buttonActions" onClick={onClick}>
      <img src={icon} alt={alt} />
    </button>
  );
};

export default ButtonTransaction;
