// redux/reducers/userReducer.js

const initialState = {
    userData: null,
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_USER_DATA_SUCCESS':
        return {
          ...state,
          userData: action.payload,
        };
      // Handle other actions as needed
      default:
        return state;
    }
  };
  
  export default userReducer;
  