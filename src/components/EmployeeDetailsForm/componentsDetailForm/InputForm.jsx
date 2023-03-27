import React from "react";

const InputForm = ({
  register,
  name,
  errors,
  label,
  validationSchema,
  styleErrors,
  className,
  htmlFor,
  ...props
}) => {
  return (
    <div>
      <label className={className} htmlFor={htmlFor}>
        {label}
      </label>
      <input {...register(name, validationSchema)} {...props} />
      <span className={styleErrors}>{errors[name]?.message}</span>
    </div>
  );
};

export default InputForm;
