import React from "react";
import ResetPassword from "./ResetPassword";
import { shallow, mount } from "enzyme";
import { TextField } from "@material-ui/core";

it("should render ResetPassword correctly", () => {
  const wrapper = shallow(<ResetPassword />);
  expect(wrapper).toMatchSnapshot();
});

it("should render TextFiels correctly", () => {
  const wrapper = mount(<TextField />);
  expect(wrapper).toMatchSnapshot();
});
