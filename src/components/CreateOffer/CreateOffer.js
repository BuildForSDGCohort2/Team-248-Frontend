import React, { Component } from "react";

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
  render() {
    return <h1>Hello Create Offer</h1>;
  }
}

export default CreateOffer;
