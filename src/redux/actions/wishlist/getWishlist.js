import * as actionTypes from "../actionTypes";
import { db } from "../../../firebase/firebase";

export const getWishList = (user) => {
  return async (dispatch) => {
    const response = await db.collection("wishlist").get();

    const wishList = response.docs.map((wish) => ({
      ...wish.data(),
      id: wish.id,
    }));

    dispatch({
      type: actionTypes.GET_WISH_LIST,
      payload: { wishList, user },
    });
  };
};
