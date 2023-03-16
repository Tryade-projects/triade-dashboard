import React from "react";

/**
 *
 * @param {object} props
 * @param {string} props.label
 * @param {boolean} props.value
 * @param {object} props.onChange
 * @param {string} props.name
 * @returns {JSX.Element}
 */
const Checkbox = ({ label, value, onChange, name }) => {
  return (
    <div className="checkboxWrapper">
      <input
        type="checkbox"
        checked={value}
        onChange={onChange}
        name={name}
        id={name}
        className="checkbox"
      />
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

export default Checkbox;
