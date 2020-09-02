import React, { Component } from "react";
import { Formik, Form, Field } from "formik";
import {
  Typography,
  Button,
  Box,
  CssBaseline,
  Grid,
  TextField
} from "@material-ui/core";
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
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid item xs={6}>
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
          <Formik initialValues={this.state.values} onSubmit={this.onSubmit}>
            {props => (
              <Form>
                <Grid
                  container
                  direction="row"
                  justify="space-between"
                  alignItems="center"
                >
                  <DatePicker
                    label="Start date"
                    value={props.values.startDate}
                    onChange={value => props.setFieldValue("startDate", value)}
                  />
                  <DatePicker
                    label="End date"
                    value={props.values.endDate}
                    onChange={value => props.setFieldValue("endDate", value)}
                  />
                </Grid>
                <Box width="100%" mb={2}>
                  <Field validateOnBlur validateOnChange name="pricePerHour">
                    {({ _, form }) => (
                      <TextField
                        fullWidth
                        variant="outlined"
                        name="pricePerHour"
                        label="Price per hour"
                        error={Boolean(
                          form.errors.pricePerHour && form.touched.pricePerHour
                        )}
                        onChange={value => {
                          props.setFieldValue("pricePerHour", value);
                          console.log(props.values.pricePerHour);
                        }}
                        // onKeyUp={this.onPriceKeyUp(props.values.pricePerHour)}
                        // onBlur={this.onPriceBlur}
                        helperText={
                          form.errors.pricePerHour &&
                          form.touched.pricePerHour &&
                          String(form.errors.pricePerHour)
                        }
                      />
                    )}
                  </Field>
                </Box>
                <Box width="100%" my={2}>
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Grid>
      </Grid>
    );
  }
}

export default CreateOffer;
