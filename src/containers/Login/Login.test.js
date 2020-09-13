import React from "react";
import Login from "./Login";
import { shallow, mount } from "enzyme";

describe("Login", function () {
  let container = null;
  const setState = jest.fn();
  const useStateSpier = jest.spyOn(React, "useState");
  useStateSpier.mockImplementation(function (init) {
    return [init, setState];
  });

  beforeEach(function () {
    container = shallow(<Login />);
  });
  afterEach(function () {
    container = null;
    jest.clearAllMocks();
  });
  it("renders perfectly fine :)", function () {
    expect(container).not.toBeNull();
  });
});
