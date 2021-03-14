import * as actionTypes from "../actionTypes";
import { db } from "../../../firebase/firebase";

export const getUserOrders = (user) => {
  return (dispatch) => {
    db.collection("orders").onSnapshot((snapShot) => {
      const orders = snapShot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      dispatch({
        type: actionTypes.GET_USER_ORDERS,
        payload: { orders, user },
      });
    });
  };
};
