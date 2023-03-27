import React from "react";

const LabelForm = ({ className, htmlFor, label }) => {
  return (
    <label className={className} htmlFor={htmlFor}>
      {label}
    </label>
  );
};

export default LabelForm;
