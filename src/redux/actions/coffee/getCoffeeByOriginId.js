import * as actionTypes from "../actionTypes";
import { db } from "../../../firebase/firebase";

export const getCoffeeByOriginId = (id) => {
  return async (dispatch) => {
    const response = await db.collection("origins").doc(id).get();
    const data = response.data();

    dispatch({
      type: actionTypes.GET_COFFEE_BY_ORIGIN,
      payload: data.coffees,
    });
  };
};
