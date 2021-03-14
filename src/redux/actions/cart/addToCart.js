import * as actionTypes from "../actionTypes";

export const addToCart = (coffee) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: coffee,
  };
};
