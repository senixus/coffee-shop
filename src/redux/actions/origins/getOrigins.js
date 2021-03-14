import * as actionTypes from "../actionTypes";
import { db } from "../../../firebase/firebase";

export const getOrigins = () => {
  return async (dispatch) => {
    const response = await db.collection("origins").get();
    const data = response.docs.map((dc) => ({ ...dc.data(), docId: dc.id }));

    dispatch({ type: actionTypes.GET_ORIGINS, payload: data });
  };
};
