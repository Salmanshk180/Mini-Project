// src/redux/featuresReducer.js
import { SELECT_MODULE } from "../actions/moduleAction";
const initialState = {
    selectedModule: null,
  };
  
  const moduleReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SELECT_MODULE":
        return {
          ...state,
          selectedModule: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default moduleReducer;
  