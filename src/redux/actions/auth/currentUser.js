import * as actionTypes from "../actionTypes";
import { auth } from "../../../firebase/firebase";

export const currentUserAction = () => {
  return (dispatch) => {
    auth.onAuthStateChanged((user) => {
      dispatch({ type: actionTypes.CURRENT_USER, payload: user });
    });
  };
};
