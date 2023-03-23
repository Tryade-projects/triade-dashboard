import React from "react";

/**
 * It takes in a backgroundColor and text prop, and returns a <p> tag with the backgroundColor and text
 * @param {object} props
 * @param {string} props.backgroundColor
 * @param {string} props.text
 * @returns {JSX.Element}
 */
const Label = ({ backgroundColor, text }) => {
  return (
    <p className="labelComponent" style={{ backgroundColor: backgroundColor }}>
      {text}
    </p>
  );
};

export default Label;
