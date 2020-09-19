import React from "react";
import { shallow, mount } from "enzyme";
import Profile from "./Profile";
import DeactivateAccount from "../../../components/DeactivateAccount/DeactivateAccount";
import { ContactInfo } from "../../../components/ContactInfo/ContactInfo";
import UpdatePassword from "../../../components/UpdatePassword/UpdatePassword";


it("Should Profile component.", () => {
  const wrapper = shallow(<Profile />);
  expect(wrapper).toMatchSnapshot();
});

it("should render ContactInfo correctly", () => {
  const user = {
    name: "Abdullah",
    email: "abdullah@email.com",
    phone: "0123456789",
    address: "Aleandria, Egypt",
    gender: "male",
    profileImg: "https://via.placeholder.com/150",
    dob: "1994-7-10"
  }
  const wrapper = mount(<ContactInfo user={user}/>);
  expect(wrapper).toMatchSnapshot();
});

it("should render UpdatePassword correctly", () => {
  const wrapper = mount(<UpdatePassword />);
  expect(wrapper).toMatchSnapshot();
});

it("should render DeactivateAccount correctly", () => {
  const wrapper = mount(<DeactivateAccount />);
  expect(wrapper).toMatchSnapshot();
});
