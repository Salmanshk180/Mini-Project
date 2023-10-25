// textSizeReducer.js
const initialState = {
  fontSizes: {},
};

const textReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT_FONT_SIZE":
      return {
        ...state,
        fontSizes: {
          ...state.fontSizes,
          [action.id]: (state.fontSizes[action.id] || 24) + 2,
        },
      };
    case "DECREMENT_FONT_SIZE":
      return {
        ...state,
        fontSizes: {
          ...state.fontSizes,
          [action.id]: (state.fontSizes[action.id] || 24) - 2,
        },
      };
    default:
      return state;
  }
};

export default textReducer;
