import { wishListReducer } from "../../redux/reducers/wishListReducer/wishList";
import * as actionTypes from "../../redux/actions/actionTypes";

describe("wishlist reducer", () => {
  it("should return initial state", () => {
    const initialState = {
      coffee: [],
      origins: [],
      getCurrentUser: {},
      cart: [],
      user: {},
      wishList: [],
      orders: [],
      orderDetails: [],
      error: "",
    };
    expect(wishListReducer(undefined, {})).toEqual(initialState);
  });

  it("should return user wishlist", () => {
    const initialState = {
      wishList: [],
    };
    const action = {
      type: actionTypes.GET_WISH_LIST,
      payload: {
        wishList: [],
      },
    };

    expect(wishListReducer(initialState, action)).toEqual({
      wishList: [],
    });
  });
});
