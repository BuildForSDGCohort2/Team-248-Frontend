import React, { Component } from "react";
import { Formik, Form } from "formik";
import {
  Container,
  Typography,
  Button,
  Box,
  CssBaseline,
  Grid
} from "@material-ui/core";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const required = value => (value ? undefined : "Required");

class CreateOffer extends Component {
  state = {
    startDate: {
      value: "",
      error: "Invalid, please try again"
    },
    endDate: {
      value: "",
      error: "Invalid, please try again"
    },
    pricePerHour: {
      value: "",
      error: "Invalid, please try again"
    },
    address: {
      value: "",
      error: "Invalid, please try again"
    },
    qualifications: {
      value: "",
      error: "Invalid, please try again"
    },
    snackbar: {
      open: false,
      vertical: "top",
      horizontal: "center"
    }
  };

  handleToggleSnackbar = () => {
    this.setState({
      snackbar: {
        ...this.state.snackbar,
        open: !this.state.snackbar.open
      }
    });
  };

  render() {
    return (
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={3}>
          <CssBaseline />
          <Typography variant="h3">Create Offer</Typography>
        </Grid>
      </Grid>
    );
  }
}

export default CreateOffer;
