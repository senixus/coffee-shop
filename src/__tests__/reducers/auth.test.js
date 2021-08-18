import { authReducer } from "../../redux/reducers/authReducer/auth";
import * as actionTypes from "../../redux/actions/actionTypes";
import { initialState } from "../../redux/reducers/initialState";

describe("auth reducer", () => {
  it("should return initial state", () => {
    expect(authReducer(undefined, {})).toEqual(initialState);
  });
  it("should return current user ", () => {
    const state = {
      user: {},
    };
    const action = {
      type: actionTypes.CURRENT_USER,
      payload: {
        uid: 1,
        email: "test@test.com",
        displayName: "Test",
      },
    };
    expect(authReducer(state, action)).toEqual({
      user: {
        uid: 1,
        email: "test@test.com",
        displayName: "Test",
      },
    });
  });
  it("should return register ", () => {
    const state = {
      error: "",
    };
    const action = {
      type: actionTypes.REGISTER,
    };
    expect(authReducer(state, action)).toEqual({
      error: "",
    });
  });
  it("should return login ", () => {
    const state = {
      error: "",
    };
    const action = {
      type: actionTypes.LOGIN,
    };
    expect(authReducer(state, action)).toEqual({
      error: "",
    });
  });
  it("should return error message ", () => {
    const state = {
      error: "",
    };
    const action = {
      type: actionTypes.ERROR_MESSAGE,
      payload: "Something went wrong",
    };
    expect(authReducer(state, action)).toEqual({
      error: "Something went wrong",
    });
  });
});
