import React, { Component } from "react";
import { Formik, Form } from "formik";
import { Typography, Button, Box, CssBaseline, Grid } from "@material-ui/core";
import { CustomSnackbar } from "../CustomSnackbar";
import DatePicker from "./DatePicker";
import Copyright from "../CopyRight";

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
// const required = value => (value ? undefined : "Required");

class CreateOffer extends Component {
  state = {
    values: {
      startDate: null,
      endDate: null,
      pricePerHour: null,
      address: null,
      qualifications: null
    },
    errors: {
      startDate: null,
      endDate: null,
      pricePerHour: null,
      address: null,
      qualifications: null
    },
    snackbar: {
      open: false,
      vertical: "top",
      horizontal: "center"
    }
  };

  handleOpenSnackbar = () => {
    this.setState({
      snackbar: {
        ...this.state.snackbar,
        open: true
      }
    });
  };

  handleCloseSnackbar = () => {
    this.setState({
      snackbar: {
        ...this.state.snackbar,
        open: false
      }
    });
  };

  onSubmit = values => {
    console.log(values);
    this.handleOpenSnackbar();
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
          <Typography variant="h3">Create Offer</Typography>
          <CssBaseline />
          <CustomSnackbar
            anchorOrigin={{
              vertical: this.state.snackbar.vertical,
              horizontal: this.state.snackbar.horizontal
            }}
            open={this.state.snackbar.open}
            handleClose={this.handleCloseSnackbar}
            message="Email has been sent Successfully"
            keyProp={
              this.state.snackbar.vertical + this.state.snackbar.horizontal
            }
          />
          <Formik
            initialValues={this.state.values}
            onSubmit={this.onSubmit}
            render={props => (
              <Form>
                <DatePicker
                  label="Pick start date"
                  value={props.values.startDate}
                  onChange={value => props.setFieldValue("startDate", value)}
                />
                <DatePicker
                  label="Pick end date"
                  value={props.values.endDate}
                  onChange={value => props.setFieldValue("endDate", value)}
                />
                <Box width="100%" my={2}>
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          />
          <Box mt={8}>
            <Copyright />
          </Box>
        </Grid>
      </Grid>
    );
  }
}

export default CreateOffer;
