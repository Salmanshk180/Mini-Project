// client/src/store/authReducer.js
const initialState = {
  user: [],
  error: null,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case "SIGNUP_ERROR":
      return {
        ...state,
        user: null,
        error: action.payload,
      };
      
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
      case "LOGIN_ERROR":
      return {
        ...state,
        user: null,
        isAuthenticated:false,
        error: action.payload,
      };
      case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
