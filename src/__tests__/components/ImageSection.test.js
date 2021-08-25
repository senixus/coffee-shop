import { shallow } from "enzyme";
import React from "react";
import ImageSection from "../../components/imageSection/ImageSection";

it("expect to render ImageSection component", () => {
  console.log("Testing");
  const wrapper = shallow(<ImageSection />);
  expect(wrapper.length).toBe(1);
  expect(wrapper).toMatchSnapshot();
});
