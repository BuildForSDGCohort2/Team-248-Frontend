import React from "react";
import { ErrorMessage } from "formik";
const InputError = ({ name, message }) => {
  {
    return (
      <ErrorMessage
        name={name}
        render={() => <div style={{ color: "#FF0000" }}>{message}</div>}
      />
    );
  }
};

export default InputError;
