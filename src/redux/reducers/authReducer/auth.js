import * as actionTypes from "../../actions/actionTypes";
import { initialState } from "../initialState";

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CURRENT_USER:
      return {
        ...state,
        user: action.payload,
      };

    case actionTypes.REGISTER:
      return {
        ...state,
        error: "",
      };
    case actionTypes.LOGIN:
      return {
        ...state,
        error: "",
      };
    case actionTypes.ERROR_MESSAGE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
