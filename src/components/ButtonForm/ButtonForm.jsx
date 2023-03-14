import React from "react";

/**
 *
 * @param {object} props
 * @param {string} props.text - Text of the button
 * @param {"button" | "submit" | "reset" | undefined} props.type - Type of the button
 * @param {React.MouseEventHandler<HTMLButtonElement> | undefined} [props.onClick] - Function to execute on click
 * @param {string} [props.className] - Class name of the button for styling
 * @returns {JSX.Element}
 */
const ButtonForm = ({ text, type, onClick, className }) => {
  return (
    <button
      type={type}
      className={className ? `buttonForm ${className}` : "buttonForm"}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ButtonForm;
