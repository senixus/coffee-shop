import { cartReducer } from "../../redux/reducers/cartReducer/cart";
import * as actionTypes from "../../redux/actions/actionTypes";
import { initialState } from "../../redux/reducers/initialState";

describe("cart reducer", () => {
  it("should return initial state", () => {
    expect(cartReducer(undefined, {})).toEqual(initialState);
  });

  it("should return add to cart", () => {
    const state = {
      cart: [],
    };
    const action = {
      type: actionTypes.ADD_TO_CART,
      payload: { id: 1, name: "Peru" },
    };
    expect(cartReducer(state, action)).toEqual({
      cart: [{ id: 1, name: "Peru", quantity: 1 }],
    });
  });
  it("should return add to cart increase the quantity", () => {
    const state = {
      cart: [{ id: 1, name: "Peru", quantity: 1 }],
    };
    const action = {
      type: actionTypes.ADD_TO_CART,
      payload: { id: 1, name: "Peru" },
    };
    expect(cartReducer(state, action)).toEqual({
      cart: [{ id: 1, name: "Peru", quantity: 2 }],
    });
  });

  it("should return remove from cart", () => {
    const state = {
      cart: [{ id: 1, name: "Peru", quantity: 1 }],
    };
    const action = {
      type: actionTypes.REMOVE_FROM_CART,
      payload: { id: 1, name: "Peru" },
    };
    expect(cartReducer(state, action)).toEqual({
      cart: [],
    });
  });

  it("should return remove from cart action decrease the quantity", () => {
    const state = {
      cart: [{ id: 1, name: "Peru", quantity: 3 }],
    };
    const action = {
      type: actionTypes.REMOVE_FROM_CART,
      payload: { id: 1, name: "Peru" },
    };
    expect(cartReducer(state, action)).toEqual({
      cart: [{ id: 1, name: "Peru", quantity: 2 }],
    });
  });

  it("should return clear cart items action if id does not match", () => {
    const state = {
      cart: [{ id: 1, name: "Peru", quantity: 1 }],
    };
    const action = {
      type: actionTypes.CLEAR_CART_ITEMS,
      payload: { id: 2, name: "Brazil Alfenas Dulce" },
    };

    expect(cartReducer(state, action)).toEqual({
      cart: [{ id: 1, name: "Peru", quantity: 1 }],
    });
  });
  it("should return clear cart items action if id  matches", () => {
    const state = {
      cart: [{ id: 1, name: "Peru", quantity: 1 }],
    };
    const action = {
      type: actionTypes.CLEAR_CART_ITEMS,
      payload: { id: 1, name: "Peru" },
    };

    expect(cartReducer(state, action)).toEqual({
      cart: [],
    });
  });

  it("should return cleart cart", () => {
    const state = {
      cart: [],
    };
    const action = {
      type: actionTypes.CLEAR_CART,
    };
    expect(cartReducer(state, action)).toEqual({
      cart: [],
    });
  });
});
