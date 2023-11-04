// reducers.js
import { SET_ACTIVE_COMPONENT } from "../actions/setActiveComponent";

const initialState = {
  activeComponent: "", // Default active component
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_COMPONENT:
      return {
        ...state,
        activeComponent: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
