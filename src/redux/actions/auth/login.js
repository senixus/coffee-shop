import * as actionTypes from "../actionTypes";
import { auth } from "../../../firebase/firebase";

export const loginAction = (email, password, history) => {
  return async (dispatch) => {
    try {
      const response = await auth.signInWithEmailAndPassword(email, password);
      if (response.user) {
        history.push("/shop");
      }
      dispatch({ type: actionTypes.LOGIN });
    } catch (error) {
      dispatch({
        type: actionTypes.ERROR_MESSAGE,
        payload: error.message,
      });
    }
  };
};
