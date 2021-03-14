import * as actionTypes from "../actionTypes";

export const searchCoffee = (coffee) => {
  return {
    type: actionTypes.SEARCH_COFFEE,
    payload: coffee,
  };
};
