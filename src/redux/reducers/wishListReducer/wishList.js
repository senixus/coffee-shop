import * as actionTypes from "../../actions/actionTypes";
import { initialState } from "../initialState";

export const wishListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_WISH_LIST:
      const { wishList } = action.payload;
      const { user } = action.payload;
      const filter = wishList.filter((wish) => wish.user === user);
      console.log(filter);
      return {
        ...state,
        wishList: filter,
      };

    default:
      return state;
  }
};
