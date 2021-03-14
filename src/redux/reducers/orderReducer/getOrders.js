import * as actionTypes from "../../actions/actionTypes";
import { initialState } from "../initialState";

export const getOrdersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_USER_ORDERS:
      const { orders } = action.payload;
      const { user } = action.payload;

      const userOrder = orders.filter((order) => order.user === user);
      return {
        ...state,
        orders: userOrder,
      };
    case actionTypes.GET_ORDER_DETAILS:
      return {
        ...state,
        orderDetails: action.payload,
      };
    default:
      return state;
  }
};
