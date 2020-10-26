import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import { Input } from "../../components/Input";
import validateEmail from "../../utils/Validators";
import "./Login.scss";
import { axiosInstance } from "../../network/apis";
import History from "../../routes/History";
import Alert from '@material-ui/lab/Alert';
import Footer from "../Footer/Footer";
import { useDispatch } from "react-redux";

function Login() {
  // const [isError, setisError] = useState(false);
  const dispatcher = useDispatch();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [validationErrors, setValidationErrors] = useState([]);

  function handleEmailChange(event) {
    if (!validateEmail(event.target.value)) {
      setEmailError('Invalid address');
    } else {
      setEmail(event.target.value)
      setEmailError("");
    }
  }

  const handlePasswordChange = (event) => {
    const min = event.target.value.length >= 6;
    const max = event.target.value.length <= 12;
    if (!min || !max) {
      setPasswordError('Invalid password');
    } else {
      setPassword(event.target.value)
      setPasswordError("");
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    const body = {
      email: e.target.email.value,
      password: e.target.password.value,
    }
    axiosInstance.post("/login", body)
    .then(res => {
      localStorage.setItem("token", res.data.data.token);
      dispatcher({type: "SET_AUTHERIZATION", payload: true})
      localStorage.setItem("is_auth", true)
      return History.push("/");
    }).catch(err => {
      setValidationErrors(err.response.data.data.message)
    });
  }

  return (
    <div>
      <Grid container direction="column" alignItems="center" justify="center">
        <Grid item md={6} sm={12} xs={12}>
          <Paper className="paper" elevation={0}>
            <Typography gutterBottom align="center" variant="h4" 
            component="h4" style={{color: "#66615b"}}>
              Login
            </Typography>
            { 
              typeof validationErrors === "string"  && 
              <div>
                <Alert severity="error">
                  {validationErrors}
                </Alert>
              </div>
            }
            { 
              validationErrors instanceof Array && 
              validationErrors.length > 0 && 
              <div>
                <Alert severity="error">
                  <ul>
                  { validationErrors.map((item, index) => {
                    return <li>{item}</li>
                  }) }
                  </ul>
                </Alert>
              </div> 
            }
            <form
              autoComplete="off"
              className="login-form"
              onSubmit={handleSubmit}
            >
              <Input
                error={emailError !== ""}
                helperText={emailError}
                variant="outlined"
                margin="normal"
                fullWidth
                value={email}
                handleChange={handleEmailChange}
                id="js-email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <Input
                error={passwordError !== ""}
                helperText={passwordError}
                variant="outlined"
                margin="normal"
                fullWidth
                handleChange={handlePasswordChange}
                type="password"
                id="js-password"
                value={password}
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
                className="login-form-submit"
              >
                Login
              </Button>
              <Grid container className="mt-2">
                <Grid item xs>
                  <Link href="/forget-password" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
        <Footer/>
      </Grid>
    </div>
  );
}

export default Login;
