import { shallow } from "enzyme";
import React from "react";
import Footer from "../../components/footer/Footer";

it("expect to render Footer component", () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.length).toBe(1);
  expect(wrapper).toMatchSnapshot();
});
