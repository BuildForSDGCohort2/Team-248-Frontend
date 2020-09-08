import React from "react";
import { shallow, mount } from "enzyme";
import { TextField } from "@material-ui/core";
import ForgetPassword from "./ForgetPassword";
import { CustomSnackbar } from "../../components/CustomSnackbar";


it("Should render ForgetPassword component.", () => {
  const wrapper = shallow(<ForgetPassword />);
  expect(wrapper).toMatchSnapshot();
});

it("should render TextField correctly", () => {
  const wrapper = mount(<TextField />);
  expect(wrapper).toMatchSnapshot();
});

it("should render Custom Snackbar correctly", () => {
  const wrapper = mount(<CustomSnackbar />);
  expect(wrapper).toMatchSnapshot();
});