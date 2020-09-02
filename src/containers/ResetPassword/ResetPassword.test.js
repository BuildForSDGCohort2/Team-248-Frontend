import React from "react";
import ResetPassword from "./ResetPassword";
import { shallow, mount } from "enzyme";

it("should render ResetPassword correctly", () => {
  const wrapper = shallow(<ResetPassword />);
  expect(wrapper).toMatchSnapshot();
});

it("checks new password value", () => {
  const wrapper = mount(<ResetPassword />);
  const text = wrapper.find('input[name="password"]').text();
  expect(text).toEqual("");
});

it("checks confirm new password value", () => {
  const wrapper = mount(<ResetPassword />);
  const text = wrapper.find('input[name="confirm"]').text();
  expect(text).toEqual("");
});
