import * as actionTypes from "../actionTypes";
import { db } from "../../../firebase/firebase";

export const saveUserOrders = (order, user, time, orderNo, total) => {
  return async (dispatch) => {
    await db.collection("orders").add({
      order,
      user,
      time,
      orderNo,
      total,
    });

    dispatch({ type: actionTypes.SAVE_USER_ORDERS });
  };
};
