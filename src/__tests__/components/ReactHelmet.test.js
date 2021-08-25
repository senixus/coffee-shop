import { shallow } from "enzyme";
import React from "react";
import ReactHelmet from "../../components/helmet/ReactHelmet";

it("expect to render ReactHelmet component", () => {
  const mockTitle = "Coffee";
  const wrapper = shallow(<ReactHelmet title={mockTitle} />);

  expect(wrapper.length).toBe(1);

  expect(wrapper).toMatchSnapshot();
});
