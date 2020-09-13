import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import { spacing } from "@material-ui/system";
import { Input } from "../../components/Input";
import validateEmail from "../../utils/Validators";
import "./Login.scss";

function Login() {
  const [isError, setisError] = useState(false);
  const [errorMessage, seterrorMessage] = useState("");

  function handleEmailChange(e) {
    if (!validateEmail(e.target.value)) {
      setisError(true);
      seterrorMessage("Invalid address :/");
    } else {
      setisError(false);
      seterrorMessage("");
    }
  }
  function handleSubmit(e) {
    e.preventDefault();
    return null;
  }

  return (
    <>
      <Grid container direction="column" alignItems="center" justify="center">
        <Grid item md={6} sm={12} xs={12}>
          <Paper className="paper" elevation={0}>
            <Typography gutterBottom align="center" variant="h4" component="h4">
              Login
            </Typography>
            <form
              autoComplete="off"
              className="login-form"
              onSubmit={handleSubmit}
            >
              <Input
                error={isError}
                helperText={errorMessage}
                variant="outlined"
                margin="normal"
                fullWidth
                handleChange={handleEmailChange}
                id="js-email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <Input
                variant="outlined"
                margin="normal"
                fullWidth
                handleChange={handleEmailChange}
                type="password"
                id="js-password"
                label="Password"
                name="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                id="js-submit"
                variant="contained"
                color="primary"
                className="login-form__submit"
              >
                Login
              </Button>
              <Grid container className="mt-2">
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
