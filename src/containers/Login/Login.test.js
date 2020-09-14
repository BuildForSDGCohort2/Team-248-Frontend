import React from "react";
import Login from "./Login";
import { shallow, mount } from "enzyme";

// TODO: complete the rest of test
// Test email input onChange
// Test password input onChange
// Test email format match failed
// Test sanitize email (against format string attacks/or XSS)
// Test password Error

describe("Login", function () {
  let container = null;

  beforeEach(function () {
    container = shallow(<Login />).at(0);
  });
  afterEach(function () {
    container = null;
  });
  it("renders perfectly fine :)", function () {
    expect(container).not.toBeNull();
  });
});
