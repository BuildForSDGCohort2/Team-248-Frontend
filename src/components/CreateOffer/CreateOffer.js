import React, { Component } from "react";
import { Formik, Form } from "formik";
import { Typography, Button, Box, CssBaseline, Grid } from "@material-ui/core";
import DatePicker from "./DatePicker";

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

  handleToggleSnackbar = () => {
    this.setState({
      snackbar: {
        ...this.state.snackbar,
        open: !this.state.snackbar.open
      }
    });
  };

  onSubmit = values => {
    console.log(values);
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
        <Typography variant="h3">Create Offer</Typography>
        <CssBaseline />
        <Grid item xs={3}>
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
        </Grid>
      </Grid>
    );
  }
}

export default CreateOffer;
