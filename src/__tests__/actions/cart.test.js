import { addToCart } from "../../redux/actions/cart/addToCart";
import {
  removeItemFromCart,
  clearCart,
  clearCartItems,
} from "../../redux/actions/cart/removeFromCart";
import * as actionTypes from "../../redux/actions/actionTypes";

describe("cart actions", () => {
  it("should add item to cart", () => {
    const coffee = { id: 1, name: "Peru" };

    const expectedAction = {
      type: actionTypes.ADD_TO_CART,
      payload: coffee,
    };
    expect(addToCart(coffee)).toEqual(expectedAction);
  });

  it("should clear cart", () => {
    const expectedAction = {
      type: actionTypes.CLEAR_CART,
    };
    expect(clearCart()).toEqual(expectedAction);
  });

  it("should clear cart items", () => {
    const coffee = { id: 1, name: "Peru" };

    const expectedAction = {
      type: actionTypes.CLEAR_CART_ITEMS,
      payload: coffee,
    };
    expect(clearCartItems(coffee)).toEqual(expectedAction);
  });
  it("should remove item from cart", () => {
    const coffee = { id: 1, name: "Peru" };

    const expectedAction = {
      type: actionTypes.REMOVE_FROM_CART,
      payload: coffee,
    };
    expect(removeItemFromCart(coffee)).toEqual(expectedAction);
  });
});
