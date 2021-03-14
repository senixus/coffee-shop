import * as actionTypes from "../../actions/actionTypes";
import { initialState } from "../initialState";

export const originReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ORIGINS:
      return {
        ...state,
        origins: action.payload,
      };

    default:
      return state;
  }
};
