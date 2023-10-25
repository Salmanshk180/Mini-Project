// src/redux/featuresReducer.js
const initialState = {
    message: "",
  };
  
  const messageReducer = (state = initialState, action) => {
    switch (action.type) {
      case "MESSAGE":
        return {
            ...state,
         message:action.payload,
        };
      default:
        return state;
    }
  };
  
  export default messageReducer;
  