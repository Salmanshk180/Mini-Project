// src/redux/featuresReducer.js
import { ADD_HEADING1 } from "../actions/headingAction";
const initialState = {
    heading1: [],
  };
  
  const headingReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_HEADING1":
        return {
            ...state,
          heading1:[...state.heading1,action.payload],
        };
      default:
        return state;
    }
  };
  
  export default headingReducer;
  