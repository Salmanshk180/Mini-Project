// client/src/store/authActions.js
import axios from "axios";
export const signUp = (userData) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3000/client/addsignup", userData);
      dispatch({ type: "SIGNUP_SUCCESS", payload: response.data.user});
      dispatch({type:"MESSAGE", payload: response.data.message})
      console.log(response.data);
    } catch (error) {
      // Log the entire error object to understand the response structure
      // console.error(error);

      // Display the error message from the response, if available
      if (error.response && error.response.data && error.response.data.message) {
        dispatch({ type: "SIGNUP_ERROR", payload: error.response.data.message});
        dispatch({type:"MESSAGE", payload: error.response.data.message})
        console.log(error.response.data);
      } else {
        // If the error response structure is different, log the entire error object
        dispatch({ type: "SIGNUP_ERROR", payload: "An error occurred during registration" });
        dispatch({type:"MESSAGE", payload: "An error occurred during registration"})
        console.log("An error occurred during registration");
      }
    }
  };
};

export const login = (user) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("http://localhost:3000/client/addlogin", user);
      dispatch({ type: "LOGIN_SUCCESS", payload: response.data.user });
      dispatch({type:"MESSAGE", payload: response.data.message})
      console.log(response.data);
    } catch (error) {
      dispatch({ type: "LOGIN_ERROR", payload: error.response.data.message });
      dispatch({type:"MESSAGE", payload: error.response.data.message})
      console.log(error);
    }
  };
};
export const logout = () => {
  return (dispatch) => {
    // You can include any necessary logic for logging the user out here
    // For example, clearing tokens, session data, or cookies
    // Then, dispatch the logout action
    dispatch({ type: "LOGOUT" });
  };
};