import React from "react";
import { shallow } from "enzyme";
import Search from "../../components/search/Search";

it("expect to render Search component", () => {
  const props = {
    handleChange: jest.fn(),
  };
  const wrapper = shallow(<Search handleChange={props.handleChange} />);

  wrapper.find("input").simulate("change");
  expect(props.handleChange).toHaveBeenCalledTimes(1);

  expect(props.handleChange).toHaveBeenCalled();
  expect(wrapper.length).toBe(1);
  expect(wrapper).toMatchSnapshot();
});
