import * as actionTypes from "../actionTypes";
import { auth } from "../../../firebase/firebase";

const user = auth.currentUser;

export const updatePassword = (password) => {
  return async (dispatch) => {
    await user.updatePassword(password);
    dispatch({ type: actionTypes.UPDATE_PASSWORD });
  };
};

export const updateEmail = (email) => {
  return async (dispatch) => {
    await user.updateEmail(email);
    dispatch({ type: actionTypes.UPDATE_EMAIL });
  };
};
