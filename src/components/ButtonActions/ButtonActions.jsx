import React from "react";

/**
 *
 * @param {object} props
 * @param {string} props.icon - icon path
 * @param {string} props.alt - icon alt
 * @param {import("react").MouseEventHandler|undefined} props.onClick - function to execute on click
 * @param {string} props.title - title of the button
 * @param {boolean} props.inactive - if the button is active or not
 * @returns
 */
const ButtonActions = ({ icon, alt, onClick, title, inactive }) => {
  return (
    <button
      type="button"
      className={`buttonActions ${inactive ? "inactive" : ""}`}
      onClick={onClick}
      data-content={title}
    >
      <img src={icon} alt={alt} />
    </button>
  );
};

export default ButtonActions;
