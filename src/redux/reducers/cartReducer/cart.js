import * as actionTypes from "../../actions/actionTypes";
import { initialState } from "../initialState";
import { addItemToCart, removeItemFromCart } from "./cart.util";

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: addItemToCart(state.cart, action.payload),
      };
    case actionTypes.CLEAR_CART_ITEMS:
      const cartItems = state.cart.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      return {
        ...state,
        cart: cartItems,
      };

    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: removeItemFromCart(state.cart, action.payload),
      };

    case actionTypes.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };

    default:
      return state;
  }
};
