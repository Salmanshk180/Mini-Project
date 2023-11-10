// redux/reducers/adminAuthReducer.js

const initialState = {
  signupLoading: false,
  verificationLoading: false,
  error: null,
};

const adminAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNUP_REQUEST':
      return {
        ...state,
        signupLoading: true,
      };
    case 'SIGNUP_SUCCESS':
      return {
        ...state,
        signupLoading: false,
        error: null,
      };
    case 'SIGNUP_FAILURE':
      return {
        ...state,
        signupLoading: false,
        error: action.payload,
      };
    case 'VERIFICATION_REQUEST':
      return {
        ...state,
        verificationLoading: true,
      };
    case 'VERIFICATION_SUCCESS':
      return {
        ...state,
        verificationLoading: false,
        error: null,
      };
    case 'VERIFICATION_FAILURE':
      return {
        ...state,
        verificationLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default adminAuthReducer;
