import { shallow } from "enzyme";
import React from "react";
import Header from "../../components/header/Header";

it("expect to render Header component", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.length).toBe(1);
  expect(wrapper).toMatchSnapshot();
});
