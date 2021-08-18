import { deleteItemFromWishList } from "../../redux/actions/wishlist/deleteItemFromWishList";
import { getWishList } from "../../redux/actions/wishlist/getWishlist";
import { addToWishList } from "../../redux/actions/wishlist/wishlist";
import * as actionTypes from "../../redux/actions/actionTypes";

import { mockStore } from "../../setupTests";

jest.mock("../../firebase/firebase.js", () => ({
  db: {
    collection: () => ({
      get: jest.fn().mockReturnValue({
        docs: [],
      }),
      doc: jest.fn(() => ({
        get: jest.fn().mockReturnValue({
          data: jest.fn(() => Promise.resolve(true)),
        }),
        delete: jest.fn(() => Promise.resolve()),
      })),
      add: jest.fn(() => Promise.resolve(true)),
    }),
  },
}));

describe("wishlist actions", () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });

  it("should return wishlist of user", async () => {
    expect.assertions(1);
    await store.dispatch(getWishList());
    const action = store.getActions();
    const expectedAction = {
      type: actionTypes.GET_WISH_LIST,
      payload: {
        user: undefined,
        wishList: [],
      },
    };
    expect(action[0]).toEqual(expectedAction);
  });

  it("should a product to wishlist", async () => {
    expect.assertions(1);
    await store.dispatch(addToWishList());
    const action = store.getActions();
    const expectedAction = {
      type: actionTypes.ADD_TO_WISH_LIST,
    };

    expect(action[0]).toEqual(expectedAction);
  });

  it("should delete a product from wishlist", async () => {
    expect.assertions(1);
    await store.dispatch(deleteItemFromWishList());
    const action = store.getActions();
    const expectedAction = {
      type: actionTypes.DELETE_ITEM_FROM_WISH_LIST,
    };

    expect(action[0]).toEqual(expectedAction);
  });
});
