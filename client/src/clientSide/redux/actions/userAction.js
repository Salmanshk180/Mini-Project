// redux/actions/userActions.js

import axios from 'axios';

export const fetchUserData = (token) => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3000/admin/myaccount', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const userData = response.data;
    dispatch({ type: 'FETCH_USER_DATA_SUCCESS', payload: userData });
  } catch (error) {
    console.error('Error fetching user data:', error);
    // Handle error and dispatch an appropriate action if needed
  }
};
