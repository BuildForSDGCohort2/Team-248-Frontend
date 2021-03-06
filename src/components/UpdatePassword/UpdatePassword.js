import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Messages from "../../assets/Local/messages";
import { axiosInstance } from "../../network/apis";


const useStyles = makeStyles((theme) => ({
  resetPassword: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "60%",
    margin: theme.spacing(0, "auto"),
  },
  submit: {
    margin: theme.spacing(2, 0, 1),
  },
  label: {
    fontSize: "10px",
  },
  password: {
    fontSize: "10px",
    margin: theme.spacing(3, 0, 2),
    marginLeft: theme.spacing(13),
  },
  confirmPassword: {
    fontSize: "10px",
    margin: theme.spacing(3, 0, 2),
    marginLeft: theme.spacing(5),
  },
  error: {
    color: "red",
  },
  success: {
    color: "green",
  },
}));

function UpdatePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState(null);
  const [newPasswordError, setNewPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const validPassword = (value) => {
    const min = value.length >= 6;
    const max = value.length <= 12;
    return (min && max);
  };

  const validatePassword = (value, errorSetter) => {
    !validPassword(value) ? 
      errorSetter(Messages.en.PasswordLength) : 
      errorSetter("");
  };

  const updateOldPassword = (e) => {
    setOldPassword(e.target.value);
  };

  const handleNewPasswordChange = (e) => {
    validatePassword(e.target.value, setNewPasswordError);
    setNewPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    validatePassword(e.target.value, setConfirmPasswordError);
    setConfirmNewPassword(e.target.value);
  };

  const validate = (formData) => {
    validatePassword(formData.newPassword.value, setNewPasswordError);
    validatePassword(formData.confirmPassword.value, setConfirmPasswordError);

    if (newPassword === "" || confirmNewPassword === "" || oldPassword === "") {
      setError("All Field are required!");
    } else if (newPassword !== confirmNewPassword) {
      setError("Must Match!");
    } else if (newPassword === confirmNewPassword) {
      setError("New Password Has Set");
    }
    setOldPassword("");
    setNewPassword("");
    setConfirmNewPassword("");
  };

  // it should checks that old pasword already in backend and user update it!
  // it will be updated later on!
  const handleSubmit = (e) => {
    e.preventDefault();
    validate(e.target);
    const data = {
      current_password: e.target.oldPassword.value, 
      password: e.target.newPassword.value,
      password_confirmation: e.target.confirmPassword.value,
    }
    axiosInstance.put('/profile/updatePassword', data, { 
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}`
    }})
      .then(res => console.log(res))
      .catch(err => console.log(err))
    return null;
  };

  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <div className={classes.resetPassword}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Update Password
        </Typography>
        <form onSubmit={handleSubmit} className={classes.form}>
          <TextField
            fullWidth
            margin="normal"
            label="Old Password"
            name="oldPassword"
            autoComplete="current-password"
            id="old-password"
            type="password"
            variant="outlined"
            value={oldPassword}
            onChange={updateOldPassword}
            data-test="oldPassword"
            size="small"
          ></TextField>
          <TextField
            fullWidth
            margin="normal"
            label="New Password"
            name="newPassword"
            autoComplete="current-password"
            id="new-password"
            type="password"
            variant="outlined"
            value={newPassword}
            onChange={handleNewPasswordChange}
            data-test="newPassword"
            size="small"
          ></TextField>
            <small className={classes.error}>{newPasswordError}</small>
          <TextField
            fullWidth
            margin="normal"
            label="Confirm New Password"
            name="confirmPassword"
            autoComplete="current-password"
            id="confirm-password"
            type="password"
            variant="outlined"
            value={confirmNewPassword}
            onChange={handleConfirmPasswordChange}
            data-test="confirmNewPassword"
            size="small"
          ></TextField>
          <small className={classes.error}>{confirmPasswordError}</small>
          <Box>
            {error === "New Password Has Set" ? (
              <Typography
                component="span"
                variant="body2"
                className={classes.success}
              >
                {error}
              </Typography>
            ) : (
              <Typography
                component="span"
                variant="body2"
                className={classes.error}
              >
                {error}
              </Typography>
            )}
          </Box>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            data-test="button"
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default UpdatePassword;
