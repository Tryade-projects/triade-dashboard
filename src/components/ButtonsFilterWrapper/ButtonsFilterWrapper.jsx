import React from "react";

/**
 *
 * @param {object} props
 * @param {array} props.labels - Array of labels for the buttons
 * @param {string} props.category - Category in the state
 * @param {function} props.setCategory - Function to set the category
 * @returns {JSX.Element} - ButtonsFilterWrapper component
 */
const buttonsFilterWrapper = ({ labels, category, setCategory }) => {
  return (
    <nav className="buttonsFilterWrapper">
      {labels.map((label) => (
        <button
          key={label}
          type="button"
          className={
            category === label
              ? "buttonFilter semiBold active"
              : "buttonFilter semiBold"
          }
          onClick={() => setCategory(label)}
        >
          {label}
        </button>
      ))}
    </nav>
  );
};

export default buttonsFilterWrapper;
