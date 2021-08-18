import { wishListReducer } from "../../redux/reducers/wishListReducer/wishList";
import * as actionTypes from "../../redux/actions/actionTypes";
import { initialState } from "../../redux/reducers/initialState";

describe("wishlist reducer", () => {
  it("should return initial state", () => {
    expect(wishListReducer(undefined, {})).toEqual(initialState);
  });

  it("should return user wishlist", () => {
    const state = {
      wishList: [],
    };
    const action = {
      type: actionTypes.GET_WISH_LIST,
      payload: {
        wishList: [],
      },
    };

    expect(wishListReducer(state, action)).toEqual({
      wishList: [],
    });
  });
});
