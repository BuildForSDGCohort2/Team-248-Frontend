import React from "react";
import TextField from "@material-ui/core/TextField";

export const Input = ({
  variant,
  margin,
  handleChange,
  type,
  error,
  helperText,
  id,
  label,
  name,
  autoComplete,
}) => {
  return (
    <TextField
      error={error}
      helperText={helperText}
      variant={variant}
      margin={margin}
      fullWidth
      onChange={handleChange}
      type={type}
      id={id}
      label={label}
      name={name}
      autoComplete={autoComplete}
    />
  );
};
