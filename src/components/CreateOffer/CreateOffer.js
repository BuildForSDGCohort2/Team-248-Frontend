import React, { Component } from "react";
import { Typography, Box, CssBaseline, Grid, Divider } from "@material-ui/core";
import { CustomSnackbar } from "../CustomSnackbar";
import OfferForm from "./OfferForm";
import Copyright from "../CopyRight";

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
// const required = value => (value ? undefined : "Required");

class CreateOffer extends Component {
  state = {
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
          <OfferForm />
          <Box mt={8}>
            <Copyright />
          </Box>
        </Grid>
      </Grid>
    );
  }
}

export default CreateOffer;
