import React from "react";
//import { shallow } from "enzyme";
import Cart from "../../components/cart/Cart";
//import * as redux from "react-redux";
import { selectCartTotalPrice } from "../../redux/reducers/selectors/cartSelector";
//import * as actionTypes from "../../redux/actions/actionTypes";
import { mockStore } from "../../setupTests";
//import { removeItemFromCart } from "../../redux/actions/cart/removeFromCart";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

jest.mock("../../redux/reducers/selectors/cartSelector");

// jest.mock("../../redux/actions/cart/removeFromCart.js", () => ({
//   removeItemFromCart: jest.fn(),
// }));
console.log("Something");

const cart = [
  {
    id: 1,
    coffeeName: "Test product",
    quantity: 1,
    price: 16,
    coffeePic: { name: "image" },
  },
];

// const mockState = {
//   cart: cart,
//   total: selectCartTotalPrice(cart),
// };

describe("Cart component", () => {
  // let spyOnUseSelector;
  // let spyOnUseDispatch;
  // let mockDispatch;
  let store;
  let component;
  beforeEach(() => {
    store = mockStore({
      cart: cart,
      total: selectCartTotalPrice(cart),
      auth: {
        user: { uid: 1, name: "Test user" },
      },
    });

    component = renderer.create(
      <BrowserRouter>
        {" "}
        <Provider store={store}>
          <Cart />
        </Provider>
      </BrowserRouter>
    );

    // // Mock useSelector hook
    // spyOnUseSelector = jest
    //   .spyOn(redux, "useSelector")
    //   .mockImplementation((cb) => cb(mockState));
    // // spyOnUseSelector.mockReturnValue();

    // // Mock useDispatch hook
    // spyOnUseDispatch = jest.spyOn(redux, "useDispatch");
    // // Mock dispatch function returned from useDispatch
    // mockDispatch = jest.fn();

    // spyOnUseDispatch.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("expect to render Cart component", () => {
    // const wrapper = shallow(<Cart />);
    // expect(wrapper.exists()).toBe(true);
    // expect(wrapper.length).toBe(1);
    // expect(wrapper).toMatchSnapshot();
    expect(component.toJSON()).toMatchSnapshot();
  });
  //   it("expect to render something", () => {
  //     //console.log(component.root.findAllByType("span")[4].props);

  //     renderer.act(() => {
  //       component.root.findAllByType("span")[2].props.onClick();
  //     });

  //     expect(store.dispatch).toHaveBeenCalledTimes(1);
  //     expect(store.dispatch).toHaveBeenCalledWith(
  //       removeItemFromCart({
  //         id: 1,
  //         coffeeName: "Test product",
  //         quantity: 1,
  //         price: 16,
  //         coffeePic: { name: "image" },
  //       })
  //     );
  //   });
});
