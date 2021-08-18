import { originReducer } from "../../redux/reducers/originReducer/origins";
import * as actionTypes from "../../redux/actions/actionTypes";
import { initialState } from "../../redux/reducers/initialState";

describe("origin reducer", () => {
  it("should return initial state", () => {
    expect(originReducer(undefined, {})).toEqual(initialState);
  });

  it("should return origins", () => {
    const state = {
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

    expect(originReducer(state, action)).toEqual({
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
