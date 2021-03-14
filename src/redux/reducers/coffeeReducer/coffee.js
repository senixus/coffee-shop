import * as actionTypes from "../../actions/actionTypes";
import { initialState } from "../initialState";

export const coffeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_COFFEE:
      return {
        ...state,
        coffee: action.payload,
      };
    case actionTypes.GET_COFFEE_BY_ORIGIN:
      return {
        ...state,
        coffee: action.payload,
      };

    default:
      return state;
  }
};
