import { originReducer } from "../../redux/reducers/originReducer/origins";
import * as actionTypes from "../../redux/actions/actionTypes";

describe("origin reducer", () => {
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
    expect(originReducer(undefined, {})).toEqual(initialState);
  });

  it("should return origins", () => {
    const initialState = {
      origins: [],
    };
    const action = {
      type: actionTypes.GET_ORIGINS,
      payload: [
        {
          id: 1,
          name: "Ethiopia",
        },
        {
          id: 2,
          name: "Peru",
        },
      ],
    };

    expect(originReducer(initialState, action)).toEqual({
      origins: [
        {
          id: 1,
          name: "Ethiopia",
        },
        {
          id: 2,
          name: "Peru",
        },
      ],
    });
  });
});
