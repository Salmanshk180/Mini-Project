const initialState = {
  user: [],
  error: null,
  isAuthenticated: false,
  message: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGNUP_SUCCESS":
      return {
        ...state,
        user: action.payload,
        error: null,
        isAuthenticated: true,
        message: "User registered successfully",
      };
    case "SIGNUP_ERROR":
      return {
        ...state,
        user: null,
        error: action.payload,
        message: null,
      };
    case "LOGIN_SUCCESS":
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        message: "Login successful",
      };
    case "LOGIN_ERROR":
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        error: action.payload,
        message: "Login failed",
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        message: null,
      };
    case "RESET_MESSAGE":
      return {
        ...state,
        message: null, // Reset the message to null
      };
    default:
      return state;
  }
};

export default authReducer;
