import React, { Component } from "react";
import { Typography, CssBaseline, Grid } from "@material-ui/core";
import { CustomSnackbar } from "../CustomSnackbar";
import OfferForm from "./OfferForm";
import Footer from "../../containers/Footer/Footer";
import "./CreateOffer.scss"
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
  setSnackbar = (submitMessage, validOffer) => {
    this.setState({
      submitMessage,
      validOffer
    }, () => this.handleOpenSnackbar());
  }

  render() {
    return (
      <div>
        <Grid
          container
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item xs={8} className="container">
            <Typography variant="h5" component="h2" align="center">
              Create Offer
            </Typography>
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
            <OfferForm setSnackbar={this.setSnackbar} />
          </Grid>
        </Grid>
        <Footer/>
     </div>
    );
  }
}

export default CreateOffer;
