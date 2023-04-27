import React from "react";

const ButtonTransaction = ({ icon, alt, onClick, title }) => {
  return (
    <button type="button" className="buttonActions" onClick={onClick} data-content={title}>
      <img src={icon} alt={alt} />
    </button>
  );
};

export default ButtonTransaction;
