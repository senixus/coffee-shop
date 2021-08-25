import { shallow } from "enzyme";
import React from "react";
import Contact from "../../components/contact/Contact";

it("expect to render Contact component ", () => {
  const wrapper = shallow(<Contact />);
  expect(wrapper.length).toBe(1);
  expect(wrapper).toMatchSnapshot();
});
