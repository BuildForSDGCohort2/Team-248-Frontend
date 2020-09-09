import React from "react";
import { shallow } from "enzyme";
import SignUp from "./SignUp";
import { TextField, RadioGroup } from "@material-ui/core";

it("Test Signup components rendered succssfully.", () => {
  const wrapper = shallow(<SignUp />);
  expect(wrapper).toMatchSnapshot();
});

it("Test TextField components rendered succssfully.", () => {
  const wrapper = shallow(<TextField />);
  expect(wrapper).toMatchSnapshot();
});

it("Test RadioGroup components rendered succssfully.", () => {
  const wrapper = shallow(<RadioGroup />);
  expect(wrapper).toMatchSnapshot();
});
