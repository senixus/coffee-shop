import { authReducer } from "../../redux/reducers/authReducer/auth";
import * as actionTypes from "../../redux/actions/actionTypes";

describe("auth reducer", () => {
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
    expect(authReducer(undefined, {})).toEqual(initialState);
  });
  it("should return current user ", () => {
    const initialState = {
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
    expect(authReducer(initialState, action)).toEqual({
      user: {
        uid: 1,
        email: "test@test.com",
        displayName: "Test",
      },
    });
  });
  it("should return register ", () => {
    const initialState = {
      error: "",
    };
    const action = {
      type: actionTypes.REGISTER,
    };
    expect(authReducer(initialState, action)).toEqual({
      error: "",
    });
  });
  it("should return login ", () => {
    const initialState = {
      error: "",
    };
    const action = {
      type: actionTypes.LOGIN,
    };
    expect(authReducer(initialState, action)).toEqual({
      error: "",
    });
  });
  it("should return error message ", () => {
    const initialState = {
      error: "",
    };
    const action = {
      type: actionTypes.ERROR_MESSAGE,
      payload: "Something went wrong",
    };
    expect(authReducer(initialState, action)).toEqual({
      error: "Something went wrong",
    });
  });
});
