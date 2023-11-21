import axios from "axios";
import { toast } from "react-toastify";

export const signUp = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3001/client/Csignup", userData);
      dispatch({ type: "SIGNUP_SUCCESS", payload: response.data.user });
      toast.success("Success");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        dispatch({
          type: "SIGNUP_ERROR",
          payload: error.response.data.message,
        });
        toast.error(error.response.data.message); // Show the error message using toast
      } else {
        dispatch({
          type: "SIGNUP_ERROR",
          payload: "An error occurred during registration",
        });
        toast.error("An error occurred during registration");
      }
    }
  };
};

export const login = (user) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3001/client/Clogin", user);
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data.user });
      toast.success("Login successful");
    } catch (error) {
      dispatch({ type: "LOGIN_ERROR", payload: "Login failed" });
      toast.error("Login failed");
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch({ type: "LOGOUT" });
  };
};

export const resetMessage = () => {
  return (dispatch) => {
    dispatch({ type: "RESET_MESSAGE" });
  };
};