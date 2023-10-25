// src/redux/featuresReducer.js
const initialState = {
    selectedText: "",
  };
  
  const selectedTextReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SELECTED_TEXT":
        return {
          ...state,
          selectedText: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default selectedTextReducer;
  