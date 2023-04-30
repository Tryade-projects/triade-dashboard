import React from "react";

const ButtonActions = ({ icon, alt, onClick, title }) => {
  return (
    <button
      type="button"
      className="buttonActions"
      onClick={onClick}
      data-content={title}
    >
      <img src={icon} alt={alt} />
    </button>
  );
};

export default ButtonActions;
