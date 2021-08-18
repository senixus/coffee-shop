import { coffeeReducer } from "../../redux/reducers/coffeeReducer/coffee";
import * as actionTypes from "../../redux/actions/actionTypes";
import { initialState } from "../../redux/reducers/initialState";

describe("coffee reducer", () => {
  it("should return initial state", () => {
    expect(coffeeReducer(undefined, {})).toEqual(initialState);
  });

  it("should return all coffee", () => {
    const state = {
      coffee: [],
    };
    const action = {
      type: actionTypes.GET_ALL_COFFEE,
      payload: [
        { id: 1, name: "Peru" },
        { id: 2, name: "Brazil Alfenas Dulce" },
      ],
    };
    expect(coffeeReducer(state, action)).toEqual({
      coffee: [
        { id: 1, name: "Peru" },
        { id: 2, name: "Brazil Alfenas Dulce" },
      ],
    });
  });
});
