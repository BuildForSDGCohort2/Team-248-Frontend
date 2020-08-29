import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Copyright from "../../components/CopyRight";
import { Input } from "../../components/Input";
import { CustomSnackbar } from "../../components/CustomSnackbar";
import "./ForgetPassword.scss";

export default class ForgetPassword extends React.Component {
  state = {
    email: {
      value: "",
      error: "",
    },
    snackbar: {
      open: false,
      vertical: "top",
      horizontal: "center",
    },
  };

  handleEmailChange = (e) => {
    const validEmail = /\S+@\S+\.\S+/.test(e.target.value);
    const required = e.target.value !== "";
    this.setState({
      email: {
        value: e.target.value,
        error:
          (!required && "This field is requird") ||
          (!validEmail && "Invalid Email") ||
          "",
      },
    });
  };

  handleOpenSnackbar = () => {
    this.setState({
      snackbar: {
        ...this.state.snackbar,
        open: true,
      },
    });
  };

  handleCloseSnackbar = () => {
    this.setState({
      snackbar: {
        ...this.state.snackbar,
        open: false,
      },
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.handleEmailChange({ target: { value: e.target.email.value } });
    this.state.email.error === "" && this.handleOpenSnackbar();
  };

  render() {
    return (
      <Container
        component="main"
        maxWidth="xs"
        className="forget-password-container"
      >
        <CssBaseline />
        <div className="paper">
          <Typography component="h1" variant="h5">
            Forget Password
          </Typography>
          <CustomSnackbar
            anchorOrigin={{
              vertical: this.state.snackbar.vertical,
              horizontal: this.state.snackbar.horizontal,
            }}
            open={this.state.snackbar.open}
            handleClose={this.handleCloseSnackbar}
            message="Email has been sent Successfully"
            keyProp={
              this.state.snackbar.vertical + this.state.snackbar.horizontal
            }
          />
          <form className="form-container" onSubmit={this.handleSubmit}>
            <Input
              variant="outlined"
              margin="normal"
              fullWidth
              handleChange={this.handleEmailChange}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />

            <small className="error d-block">{this.state.email.error}</small>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className="submit"
            >
              Send
            </Button>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  }
}
