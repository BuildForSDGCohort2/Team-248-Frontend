import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

function ResetPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState(null);

  const updateNewPassword = (e) => {
    setNewPassword(e.target.value);
  };
  const updateConfirmNewPassword = (e) => {
    setConfirmNewPassword(e.target.value);
  };

  const checkValues = () => {
    if (newPassword === "" || confirmNewPassword === "") {
      setError("CAN NOT BE EMPTY FIELD!");
    } else if (newPassword !== confirmNewPassword) {
      setError("MUST MATCH!");
    } else if (newPassword === confirmNewPassword) {
      setError("NEW PASSWORD HAS SET");
    }
    setNewPassword("");
    setConfirmNewPassword("");
  };

  // it should return new password to backend
  // it will be updated later on!
  const onSubmit = () => {
    return null;
  };

  const classes = useStyles();

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.resetPassword}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Reset Password
        </Typography>
        <form onSubmit={onSubmit} className={classes.form}>
          <TextField
            fullWidth
            margin="normal"
            label="New Password"
            name="password"
            autoComplete="current-password"
            id="outlined-password-input"
            type="password"
            variant="outlined"
            value={newPassword}
            onChange={updateNewPassword}
          ></TextField>
          <TextField
            fullWidth
            margin="normal"
            label="Confirm New Password"
            name="confirmPassword"
            autoComplete="current-password"
            id="outlined-password-input"
            type="password"
            variant="outlined"
            value={confirmNewPassword}
            onChange={updateConfirmNewPassword}
          ></TextField>
          <Box>
            {error === "NEW PASSWORD HAS SET" ? (
              <Typography
                component="h2"
                variant="body1"
                className={classes.success}
              >
                {error}
              </Typography>
            ) : (
              <Typography
                component="h2"
                variant="body1"
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
            onClick={checkValues}
          >
            Submit
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {`Copyright ©  Babejo ${new Date().getFullYear()}.`}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  resetPassword: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  label: {
    fontSize: "17px",
  },
  password: {
    fontSize: "17px",
    margin: theme.spacing(3, 0, 2),
    marginLeft: theme.spacing(13),
  },
  confirmPassword: {
    fontSize: "17px",
    margin: theme.spacing(3, 0, 2),
    marginLeft: theme.spacing(5),
  },
  error: {
    margin: theme.spacing(3, 0, 2),
    color: "red",
  },
  success: {
    margin: theme.spacing(3, 0, 2),
    color: "green",
  },
}));

export default ResetPassword;
