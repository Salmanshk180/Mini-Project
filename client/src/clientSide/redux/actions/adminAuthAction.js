// redux/actions/adminAuthActions.js

import axios from 'axios';

export const adminSignUp = (formData) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3000/admin/signup', formData);
    const { message, token } = response.data;

    if (message === "Admin registered successfully") {
      localStorage.setItem('message', message);
      localStorage.setItem('token', token);
      return { success: true, message };
    } else {
      return { success: false, message };
    }
  } catch (error) {
    console.error("Signup error:", error);

    if (error.response?.data?.message) {
      console.log("Error message:", error.response.data.message);

      if (error.response.data.message === "Email already exists") {
        return { success: false, message: "Email already exists" };
      } else {
        return { success: false, message: error.response.data.message };
      }
    } else {
      console.log("Unknown error");
      return { success: false, message: "Signup failed. Please try again." };
    }
  }
};
