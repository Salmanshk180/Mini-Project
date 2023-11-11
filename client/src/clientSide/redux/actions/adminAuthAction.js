
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


export const adminLogin = (formData) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3000/admin/login', formData);
    const { message, token } = response.data;

    if (message === 'Login successful') {
      dispatch({ type: 'LOGIN_SUCCESS', payload: token });
      localStorage.setItem('message', message);
      localStorage.setItem('token', token);
      return { success: true, message,token };
    } else {
      return { success: false, message };
    }
  } catch (error) {
    console.error('Login error:', error);

    if (error.response?.data?.message) {
      console.log('Error message:', error.response.data.message);

      if (error.response.data.message === 'User not found') {
        return { success: false, message: 'User not found' };
      } else {
        return { success: false, message: error.response.data.message };
      }
    } else {
      console.log('Unknown error');
      return { success: false, message: 'Login failed. Please try again.' };
    }
  }
};

export const adminLogout = () => async (dispatch) => {
  localStorage.removeItem('token');
  localStorage.removeItem('message');
  dispatch({ type: 'LOGOUT' });
};