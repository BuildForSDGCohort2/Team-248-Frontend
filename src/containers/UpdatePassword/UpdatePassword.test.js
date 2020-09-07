import React from "react";
import UpdatePassword from "./UpdatePassword";
import { shallow } from "enzyme";

/**
 *
 * @param {Wrapper } wrapper
 * @param {data-test attribute} val
 */

const findByAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

// make the wrapper accessible for all test specs!
const wrapper = shallow(<UpdatePassword />);

test("Render UpdatePassword properly", () => {
  const wrapper = shallow(<UpdatePassword />);
  expect(wrapper).toMatchSnapshot();
});

test("Render Old Password without errors", () => {
  const oldPassword = findByAttr(wrapper, "oldPassword");
  expect(oldPassword.length).toEqual(1);
});

test("Render New Password without errors", () => {
  const newPassword = findByAttr(wrapper, "newPassword");
  expect(newPassword.length).toEqual(1);
});

test("Render Confirm New Password without errors", () => {
  const confirmNewPassword = findByAttr(wrapper, "confirmNewPassword");
  expect(confirmNewPassword.length).toEqual(1);
});

test("Render Submit Button without errors", () => {
  const button = findByAttr(wrapper, "button");
  expect(button.length).toEqual(1);
});
