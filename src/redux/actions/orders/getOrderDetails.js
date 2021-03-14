import * as actionTypes from "../actionTypes";
import { db } from "../../../firebase/firebase";

export const getOrderDetails = (orderId) => {
  return (dispatch) => {
    db.collection("orders")
      .doc(orderId)
      .onSnapshot((snapShot) => {
        const order = { orders: snapShot.data(), id: snapShot.id };
        dispatch({ type: actionTypes.GET_ORDER_DETAILS, payload: order });
      });
  };
};
