import * as actionTypes from "../actionTypes";

export const clearCartItems = (coffee) => {
  return {
    type: actionTypes.CLEAR_CART_ITEMS,
    payload: coffee,
  };
};

export const removeItemFromCart = (coffee) => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: coffee,
  };
};

export const clearCart = () => {
  return {
    type: actionTypes.CLEAR_CART,
  };
};
