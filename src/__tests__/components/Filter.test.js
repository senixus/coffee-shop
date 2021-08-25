import React from "react";
import { shallow } from "enzyme";
import Filter from "../../components/filter/Filter";

it("expect to render Filter component", () => {
  const props = {
    handleSelect: jest.fn(),
  };
  const wrapper = shallow(<Filter handleSelect={props.handleSelect} />);
  wrapper.find("select").simulate("change");

  expect(wrapper.length).toBe(1);
  expect(props.handleSelect).toHaveBeenCalled();
  expect(props.handleSelect).toHaveBeenCalledTimes(1);
  expect(wrapper).toMatchSnapshot();
});
