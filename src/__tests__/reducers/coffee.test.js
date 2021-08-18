import { coffeeReducer } from "../../redux/reducers/coffeeReducer/coffee";
import * as actionTypes from "../../redux/actions/actionTypes";

describe("coffee reducer", () => {
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
    expect(coffeeReducer(undefined, {})).toEqual(initialState);
  });

  it("should return all coffee", () => {
    const initalState = {
      coffee: [],
    };
    const action = {
      type: actionTypes.GET_ALL_COFFEE,
      payload: [
        { id: 1, name: "Peru" },
        { id: 2, name: "Brazil Alfenas Dulce" },
      ],
    };
    expect(coffeeReducer(initalState, action)).toEqual({
      coffee: [
        { id: 1, name: "Peru" },
        { id: 2, name: "Brazil Alfenas Dulce" },
      ],
    });
  });
});
