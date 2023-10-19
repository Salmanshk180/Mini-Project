// src/redux/featuresReducer.js
import { ADD_SHAPE } from "../actions/shapeAction";
const initialState = {
    shapes: [],
  };
  
  const shapeReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_SHAPE":
        return {
            ...state,
          shapes:[...state.shapes,action.payload],
        };
      default:
        return state;
    }
  };
  
  export default shapeReducer;
  