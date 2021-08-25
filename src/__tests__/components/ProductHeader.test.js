import { shallow } from "enzyme";
import React from "react";
import ProductHeader from "../../components/productHeader/ProductHeader";

import { create } from "react-test-renderer";

//const productHeader = create(<ProductHeader />);

it("expect to render ProductHeader component", () => {
  const mockTitle = "Product Header";

  expect(shallow(<ProductHeader title={mockTitle} />)).toMatchSnapshot();
  // expect(productHeader.toJSON()).toMatchSnapshot();
});
