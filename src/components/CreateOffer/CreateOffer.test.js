import React from "react";
import ReactDom from "react-dom";
import CreateOffer from "./CreateOffer";
import { shallow, mount } from "enzyme";
import { it } from "date-fns/locale";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<CreateOffer />, div);
});

it("snapshot testing", () => {
  const wrapper = shallow(<CreateOffer />);
  expect(wrapper).toMatchSnapshot();
});
