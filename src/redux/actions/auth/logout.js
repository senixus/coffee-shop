import * as actionTypes from "../actionTypes";
import { auth } from "../../../firebase/firebase";

export const logoutAction = () => {
  return async (dispatch) => {
    await auth.signOut();
    dispatch({ type: actionTypes.LOGOUT });
  };
};
