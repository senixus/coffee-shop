import * as actionTypes from "../actionTypes";
import { db } from "../../../firebase/firebase";

export const deleteItemFromWishList = (id) => {
  return async (dispatch) => {
    await db.collection("wishlist").doc(id).delete();
    dispatch({ type: actionTypes.DELETE_ITEM_FROM_WISH_LIST });
  };
};
