import * as actionTypes from "../actionTypes";
import { db } from "../../../firebase/firebase";

export const getWishList = (user) => {
  return (dispatch) => {
    db.collection("wishlist").onSnapshot((doc) => {
      const wishList = doc.docs.map((wish) => ({
        ...wish.data(),
        id: wish.id,
      }));

      dispatch({
        type: actionTypes.GET_WISH_LIST,
        payload: { wishList, user },
      });
    });
  };
};
