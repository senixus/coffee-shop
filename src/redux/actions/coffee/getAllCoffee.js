import * as actionTypes from "../actionTypes";
import { db } from "../../../firebase/firebase";

export const getAllCoffee = () => {
  return async (dispatch) => {
    const response = await db.collection("coffee").get();
    const data = response.docs.map((dc) => ({ ...dc.data(), docId: dc.id }));

    dispatch({ type: actionTypes.GET_ALL_COFFEE, payload: data });
  };
};
