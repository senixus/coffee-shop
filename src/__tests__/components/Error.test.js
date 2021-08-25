import { shallow } from "enzyme";
import React from "react";
import Error from "../../components/error/Error";

it("expect to render Error component ", () => {
  const wrapper = shallow(<Error />);

  expect(wrapper.length).toBe(1);
  expect(wrapper).toMatchSnapshot();
});
