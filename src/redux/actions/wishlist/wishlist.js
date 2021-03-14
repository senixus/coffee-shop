import * as actionTypes from "../actionTypes";
import { db } from "../../../firebase/firebase";

export const addToWishList = (coffee, user) => {
  return async (dispatch) => {
    await db.collection("wishlist").add({
      coffee,
      user,
    });

    dispatch({ type: actionTypes.ADD_TO_WISH_LIST, payload: coffee });
  };
};
