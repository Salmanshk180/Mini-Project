// client/src/store/authActions.js
import axios from "axios";
export const signUp = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3000/client/addsignup", userData);
      dispatch({ type: "SIGNUP_SUCCESS", payload: response.data.user });
      console.log(response.data);
    } catch (error) {
      dispatch({ type: "SIGNUP_ERROR", payload: error.response.data.message });
      console.log(response.error);
    }
  };
};