import React, { Component } from "react";
import { Typography, Box, CssBaseline, Grid } from "@material-ui/core";
import { CustomSnackbar } from "../CustomSnackbar";
import OfferForm from "./OfferForm";
import Copyright from "../CopyRight";

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
// const required = value => (value ? undefined : "Required");

class CreateOffer extends Component {
  state = {
    submitMessage: "",
    validOffer: true,
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
  setSnackbar = (message, validOffer) => {
    this.setState({
      submitMessage: message,
      validOffer: validOffer
    }, () => this.handleOpenSnackbar());
  }

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
            message={this.state.submitMessage}
            error={!this.state.validOffer}
            keyProp={
              this.state.snackbar.vertical + this.state.snackbar.horizontal
            }
          />
          <OfferForm setSnackbar={this.setSnackbar}/>
          <Box mt={8}>
            <Copyright />
          </Box>
        </Grid>
      </Grid>
    );
  }
}

export default CreateOffer;
