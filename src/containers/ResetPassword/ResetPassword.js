import React from "react";
import { Form, Field } from "react-final-form";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

function ResetPassword() {
  const MUI_Styles = useStyles();

  // it should return new password to backend
  // it will be updated later on!
  const onSubmit = () => {
    return null;
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={MUI_Styles.resetPassword}>
        <Avatar className={MUI_Styles.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Reset Password
        </Typography>
        <Form
          onSubmit={onSubmit}
          validate={(values) => {
            const errors = {};
            if (!values.password) {
              errors.password = "Required";
            }
            if (!values.confirm) {
              errors.confirm = "Required";
            } else if (values.confirm !== values.password) {
              errors.confirm = "Must match";
            }
            return errors;
          }}
          render={({ handleSubmit, form, values }) => (
            <form onSubmit={handleSubmit} className={MUI_Styles.form}>
              <Field name="password">
                {({ input, meta }) => (
                  <div>
                    <label className={MUI_Styles.label}>New Password</label>
                    <input
                      {...input}
                      type="password"
                      placeholder="new password"
                      className={MUI_Styles.password}
                    />
                    {meta.error && meta.touched && (
                      <span className={MUI_Styles.error}>{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
              <Field name="confirm">
                {({ input, meta }) => (
                  <div>
                    <label className={MUI_Styles.label}>
                      Confirm New Password
                    </label>
                    <input
                      {...input}
                      type="password"
                      placeholder="confirm new password"
                      className={MUI_Styles.confirmPassword}
                    />
                    {meta.error && meta.touched && (
                      <span className={MUI_Styles.error}>{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={MUI_Styles.submit}
              >
                Submit
              </Button>
            </form>
          )}
        />
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

export default ResetPassword;
