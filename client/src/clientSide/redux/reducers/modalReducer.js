// src/redux/reducers/modalReducer.js
import {
  OPEN_LOGIN_MODAL,
  OPEN_SIGNUP_MODAL,
  CLOSE_MODAL,
} from "../actions/modalActions";

const initialState = {
  showLoginModal: false,
  showSignupModal: false,
  
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_LOGIN_MODAL:
      return { ...state, showLoginModal: true, showSignupModal: false };
    case OPEN_SIGNUP_MODAL:
      return { ...state, showSignupModal: true, showLoginModal: false };
    case CLOSE_MODAL:
      return {
        ...state,
        showLoginModal: false,
        showSignupModal: false,
      };
    default:
      return state;
  }
};

export default modalReducer;
