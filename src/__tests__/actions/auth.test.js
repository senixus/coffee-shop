import { currentUserAction } from "../../redux/actions/auth/currentUser";
import { loginAction } from "../../redux/actions/auth/login";
import { logoutAction } from "../../redux/actions/auth/logout";
import { registerAction } from "../../redux/actions/auth/register";
import * as actionTypes from "../../redux/actions/actionTypes";
import { mockStore } from "../../setupTests";

// jest.fn(
//   "../../firebase/firebase.js",
//   () => new Promise((resolve) => resolve(true))
// );

jest.mock("../../firebase/firebase.js", () => ({
  auth: {
    createUserWithEmailAndPassword: () => Promise.resolve(true),
    signOut: () => Promise.resolve(true),
    signInWithEmailAndPassword: () => Promise.resolve(true),
    onAuthStateChanged: () => Promise.resolve(true),
  },
}));

describe("auth", () => {
  let store;
  beforeEach(() => {
    store = mockStore({});
  });
  it("should login", () => {
    expect.assertions(1);
    const user = {
      email: "test@test.com",
      password: "123456",
      history: {
        push: function () {
          return true;
        },
      },
    };
    return store
      .dispatch(loginAction(user.email, user.password, user.history))
      .then(() => {
        const action = store.getActions();
        const expectedAction = {
          type: actionTypes.LOGIN,
        };

        expect(action[0]).toEqual(expectedAction);
      });
  });



  // it("should return current user", () => {
  //   expect.assertions(1);
  //   return store.dispatch(currentUserAction()).then(() => {
  //     const action = store.getActions();
  //     const expectedAction = {
  //       type: actionTypes.CURRENT_USER,
  //     };

  //     expect(action[0]).toEqual(expectedAction);
  //   });
  // });

  it("should  registerAction ", () => {
    expect.assertions(1);
    const user = {
      email: "senix@gmail.com",
      password: "123456",
      history: {
        push: function () {
          return true;
        },
      },
      username: "senixus",
    };

    return store
      .dispatch(
        registerAction(user.email, user.password, user.history, user.username)
      )
      .then(() => {
        const action = store.getActions();

        const expectedAction = {
          type: actionTypes.REGISTER,
        };

        expect(action[0]).toEqual(expectedAction);
      });
  });

  it("should sign out", () => {
    expect.assertions(1);
    return store.dispatch(logoutAction()).then(() => {
      const action = store.getActions();

      const expectedAction = {
        type: actionTypes.LOGOUT,
      };

      expect(action[0]).toEqual(expectedAction);
    });
  });
});
