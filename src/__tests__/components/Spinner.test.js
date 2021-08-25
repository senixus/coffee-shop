import { shallow } from "enzyme";
import React from "react";
import Spinner from "../../components/spinner/Spinner";

it("expect to render Spinner component", () => {
  const wrapper = shallow(<Spinner />);
  expect(wrapper.length).toBe(1);
  expect(wrapper).toMatchSnapshot();
});
