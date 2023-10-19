// client/src/actions/userActions.js
import { setUser, setToken } from '../features/userSlice';

export const registerUser = (userData) => async (dispatch) => {
  try {
    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (response.ok) {
      dispatch(setUser(data.user));
      dispatch(setToken(data.token));
    } else {
      // Handle registration errors
      console.error(data.message);
    }
  } catch (error) {
    console.error('Registration error:', error);
  }
};
