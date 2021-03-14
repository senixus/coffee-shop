import * as actionTypes from "../actionTypes";
import { auth } from "../../../firebase/firebase";

export const registerAction = (email, password, history, username) => {
  return async (dispatch) => {
    try {
      const response = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      if (response.user) {
        history.push("/login");
        response.user.updateProfile({
          displayName: username,
        });
      }
      dispatch({ type: actionTypes.REGISTER });
    } catch (error) {
      dispatch({
        type: actionTypes.ERROR_MESSAGE,
        payload: error.message,
      });
    }
  };
};
