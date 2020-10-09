import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

export const CustomSnackbar = ({anchorOrigin, handleClose, open, keyProp, message, error}) => {
  return (
      <Snackbar 
        anchorOrigin={ anchorOrigin } 
        open={open} 
        autoHideDuration={6000} 
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={error ? "warning" : "success"}>
          {message}
        </Alert>
      </Snackbar>
    );
};
