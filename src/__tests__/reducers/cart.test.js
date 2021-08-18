import { cartReducer } from "../../redux/reducers/cartReducer/cart";
import * as actionTypes from "../../redux/actions/actionTypes";

describe("cart reducer", () => {
  it("should return initial state", () => {
    const initialState = {
      coffee: [],
      origins: [],
      getCurrentUser: {},
      cart: [],
      user: {},
      wishList: [],
      orders: [],
      orderDetails: [],
      error: "",
    };
    expect(cartReducer(undefined, {})).toEqual(initialState);
  });

  it("should return add to cart", () => {
    const initialState = {
      cart: [],
    };
    const action = {
      type: actionTypes.ADD_TO_CART,
      payload: { id: 1, name: "Peru" },
    };
    expect(cartReducer(initialState, action)).toEqual({
      cart: [{ id: 1, name: "Peru", quantity: 1 }],
    });
  });
  it("should return add to cart increase the quantity", () => {
    const initialState = {
      cart: [{ id: 1, name: "Peru", quantity: 1 }],
    };
    const action = {
      type: actionTypes.ADD_TO_CART,
      payload: { id: 1, name: "Peru" },
    };
    expect(cartReducer(initialState, action)).toEqual({
      cart: [{ id: 1, name: "Peru", quantity: 2 }],
    });
  });

  it("should return remove from cart", () => {
    const initialState = {
      cart: [{ id: 1, name: "Peru", quantity: 1 }],
    };
    const action = {
      type: actionTypes.REMOVE_FROM_CART,
      payload: { id: 1, name: "Peru" },
    };
    expect(cartReducer(initialState, action)).toEqual({
      cart: [],
    });
  });

  it("should return remove from cart action decrease the quantity", () => {
    const initialState = {
      cart: [{ id: 1, name: "Peru", quantity: 3 }],
    };
    const action = {
      type: actionTypes.REMOVE_FROM_CART,
      payload: { id: 1, name: "Peru" },
    };
    expect(cartReducer(initialState, action)).toEqual({
      cart: [{ id: 1, name: "Peru", quantity: 2 }],
    });
  });

  it("should return clear cart items action if id does not match", () => {
    const initialState = {
      cart: [{ id: 1, name: "Peru", quantity: 1 }],
    };
    const action = {
      type: actionTypes.CLEAR_CART_ITEMS,
      payload: { id: 2, name: "Brazil Alfenas Dulce" },
    };

    expect(cartReducer(initialState, action)).toEqual({
      cart: [{ id: 1, name: "Peru", quantity: 1 }],
    });
  });
  it("should return clear cart items action if id  matches", () => {
    const initialState = {
      cart: [{ id: 1, name: "Peru", quantity: 1 }],
    };
    const action = {
      type: actionTypes.CLEAR_CART_ITEMS,
      payload: { id: 1, name: "Peru" },
    };

    expect(cartReducer(initialState, action)).toEqual({
      cart: [],
    });
  });

  it("should return cleart cart", () => {
    const initialState = {
      cart: [],
    };
    const action = {
      type: actionTypes.CLEAR_CART,
    };
    expect(cartReducer(initialState, action)).toEqual({
      cart: [],
    });
  });
});
