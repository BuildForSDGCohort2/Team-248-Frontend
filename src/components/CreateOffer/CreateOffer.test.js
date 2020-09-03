import React from "react";
import ReactDom from "react-dom";
import CreateOffer from "./CreateOffer";
import { shallow, mount } from "enzyme";

it("snapshot testing", () => {
  const wrapper = shallow(<CreateOffer />);
  expect(wrapper).toMatchSnapshot();
});
